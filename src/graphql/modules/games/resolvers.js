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
	},
};
