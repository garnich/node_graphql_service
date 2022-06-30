import { jwtQueryResolver } from './modules/jwt/resolvers';
import { usersMutationResolver } from './modules/users/resolvers';
import { artistsQueryResolver, artistsMutationResolver } from './modules/artists/resolvers';

const resolvers = {
	Query: {
		...jwtQueryResolver,
		...artistsQueryResolver,
	},
	Mutation: {
		...usersMutationResolver,
		...artistsMutationResolver,
	}
};

export { resolvers };
