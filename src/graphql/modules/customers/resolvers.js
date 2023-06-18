import Customer from "../../../models/Customer";

export default {
	Query: {
		customers: async () => await Customer.find({}),
		customer: async (_, { id }) => await Customer.findById(id),
	},
	Mutation: {
		createCustomer: (_, { data }) => Customer.create(data),
		updateCustomer: async (_, { id, data }) => {
			return await Customer.findByIdAndUpdate(id, data, { new: true });
		},
	},
};
