import Customer from "../../../models/Customer";
import Game from "../../../models/Game";
import Rental from "../../../models/Rental";

export default {
	Rental: {
		game: async (rental) => await Game.findById(rental.game),
		customer: async (rental) => await Customer.findById(rental.customer),
	},
	Query: {
		rentals: async () => await Rental.find({}),
		rental: async (_, { id }) => await Rental.findById(id),
	},
	Mutation: {
		createRental: async (_, { data }) => {
			const game = await Game.findById(data.game);
			if (!game) return null;

			const newData = {
				...data,
				originalPrice: game.pricePerDay * data.daysRented,
			};

			return await Rental.create(newData);
		},
		returnRental: async (_, { id }) => {
			const rental = await Rental.findById(id);
			if (!rental || rental?.returnDate) return null;

			const day_ms = 86400000;

			const rentDateTimestamp = +new Date(`${rental.rentDate}`);
			const returnDateTimestamp =
				rentDateTimestamp + day_ms * rental.daysRented;
			const todayTimestamp = Date.now();

			const delayTimestamp = Math.round(
				(todayTimestamp - returnDateTimestamp) / (day_ms * 1)
			);

			const delayFee =
				delayTimestamp > 0 ? delayTimestamp * rental.originalPrice : 0;

			const data = { returnDate: Date.now(), delayFee };

			return await Rental.findByIdAndUpdate(id, data, { new: true });
		},
		deleteRental: async (_, { id }) => {
			const rental = await Rental.findById(id);
			if (!rental?.returnDate) return false;

			return !!(await Rental.findByIdAndDelete(id));
		},
	},
};
