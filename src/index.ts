import express from 'express';
import { env } from 'process'
import { config } from 'dotenv';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';
import { ApolloServer } from 'apollo-server-express';

config();

const PORT = env.PORT || 3000;

const app = express();

const server = async () => {	
	const apolloServer = new ApolloServer({ 
		typeDefs, 
		resolvers,
		context: ({ req }) => { 
			const token = req.headers.authorization || '';

			return { token };
		},
	});
	
	await apolloServer.start();
	
	apolloServer.applyMiddleware({ app: app })
}

server();
		
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

