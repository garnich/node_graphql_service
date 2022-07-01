import { jwtQueryResolver } from './modules/jwt/resolvers';
import { usersMutationResolver } from './modules/users/resolvers';
import { artistsQueryResolver, artistsMutationResolver } from './modules/artists/resolvers';
import { tracksQueryResolver, tracksMutationResolver } from './modules/tracks/resolvers';

const resolvers = {
	Query: {
		...jwtQueryResolver,
		...artistsQueryResolver,
		...tracksQueryResolver,
	},
	Mutation: {
		...usersMutationResolver,
		...artistsMutationResolver,
		...tracksMutationResolver,
	}
};

export { resolvers };
