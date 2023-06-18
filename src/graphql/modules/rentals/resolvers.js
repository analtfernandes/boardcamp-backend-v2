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
	},
};
