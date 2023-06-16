import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connectMongoDb() {
	try {
		await mongoose.connect(process.env.MONGO_URI);
	} catch (error) {
		console.error(error);
	}
}

export { connectMongoDb };
