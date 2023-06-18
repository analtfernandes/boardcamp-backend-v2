import mongoose from "mongoose";

const Schema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	cpf: {
		type: String,
		required: true,
	},
	birthday: {
		type: Date,
		required: true,
	},
});

export default mongoose.model("Customer", Schema);
