import { ApolloServer } from "apollo-server";
import { connectMongoDb } from "./database/mongodb";

async function start({ typeDefs, resolvers }) {
	await connectMongoDb();

	const server = new ApolloServer({ typeDefs, resolvers });
	server
		.listen()
		.then(({ url }) => console.log(`Server started at ${url}`))
		.catch((error) => console.error(error));
}

const server = { start };

export { server };
