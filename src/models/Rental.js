import mongoose from "mongoose";

const Schema = new mongoose.Schema({
	rentDate: {
		type: Date,
		default: Date.now(),
	},
	returnDate: {
		type: Date || null,
		default: null,
	},
	daysRented: {
		type: Number,
		required: true,
	},
	originalPrice: {
		type: Number,
		required: true,
	},
	delayFee: {
		type: Number || null,
		default: null,
	},
	customer: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Customer",
		required: true,
	},
	game: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Game",
		required: true,
	},
});

export default mongoose.model("Rental", Schema);
