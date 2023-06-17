import mongoose from "mongoose";

const Schema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	stockTotal: {
		type: Number,
		required: true,
	},
	category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Category",
		required: true,
	},
	pricePerDay: {
		type: Number,
		required: true,
	},
});

export default mongoose.model("Game", Schema);
