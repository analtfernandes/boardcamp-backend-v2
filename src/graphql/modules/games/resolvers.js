import Category from "../../../models/Category";
import Game from "../../../models/Game";

export default {
	Game: {
		category: async (game) => await Category.findById(game.category),
	},
	Query: {
		games: async () => await Game.find({}),
	},
	Mutation: {
		createGame: (_, { data }) => Game.create(data),
		updateGame: async (_, { id, data }) => {
			return await Game.findByIdAndUpdate(id, data, { new: true });
		},
		deleteGame: async (_, { id }) => !!(await Game.findByIdAndDelete(id)),
	},
};
