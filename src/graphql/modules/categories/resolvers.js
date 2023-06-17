import Category from "../../../models/Category";

export default {
	Mutation: {
		saveCategory: async (_, { data }) => {
			return await Category.findOneAndUpdate(
				{
					name: { $regex: data.name, $options: "i" },
				},
				data,
				{ upsert: true, new: true }
			);
		},
	},
};
