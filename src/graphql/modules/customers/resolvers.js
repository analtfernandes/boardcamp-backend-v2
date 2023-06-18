import Customer from "../../../models/Customer";

export default {
	Query: {
		customers: async () => await Customer.find({}),
	},
};
