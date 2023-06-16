import { ApolloServer } from "apollo-server";

function start({ typeDefs, resolvers }) {
	const server = new ApolloServer({ typeDefs, resolvers });
	server
		.listen()
		.then(({ url }) => console.log(`Server started at ${url}`))
		.catch((error) => console.error(error));
}

const server = { start };

export { server };
