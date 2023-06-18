import Customer from "../../../models/Customer";

export default {
	Query: {
		customers: async () => await Customer.find({}),
		customer: async (_, { id }) => await Customer.findById(id),
	},
	Mutation: {
		createCustomer: (_, { data }) => Customer.create(data),
	},
};
