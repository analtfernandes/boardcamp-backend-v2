import Category from "../../../models/Category";
import Game from "../../../models/Game";

export default {
	Mutation: {
		createGame: (_, { data }) => Game.create(data),
	},
};
