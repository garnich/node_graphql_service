import { jwtQueryResolver } from './modules/jwt/resolvers';
import { usersMutationResolver } from './modules/users/resolvers';
import { artistsQueryResolver, artistsMutationResolver } from './modules/artists/resolvers';
import { tracksQueryResolver, tracksMutationResolver } from './modules/tracks/resolvers';
import { genresQueryResolver, genresMutationResolver } from './modules/genres/resolvers';

const resolvers = {
	Query: {
		...jwtQueryResolver,
		...artistsQueryResolver,
		...tracksQueryResolver,
		...genresQueryResolver,
	},
	Mutation: {
		...usersMutationResolver,
		...artistsMutationResolver,
		...tracksMutationResolver,
		...genresMutationResolver,
	}
};

export { resolvers };
