import { jwtQueryResolver } from './modules/jwt/resolvers';
import { usersMutationResolver } from './modules/users/resolvers';
import { artistsQueryResolver, artistsMutationResolver } from './modules/artists/resolvers';
import { tracksQueryResolver, tracksMutationResolver } from './modules/tracks/resolvers';
import { genresQueryResolver, genresMutationResolver } from './modules/genres/resolvers';
import { albumsQueryResolver, albumsMutationResolver } from './modules/albums/resolvers';
import { bandsQueryResolver, bandsMutationResolver } from './modules/bands/resolvers';
import { favouritesQueryResolver, favouritesMutationResolver } from './modules/favourites/resolvers';

const resolvers = {
	Query: {
		...jwtQueryResolver,
		...artistsQueryResolver,
		...tracksQueryResolver,
		...genresQueryResolver,
		...albumsQueryResolver,
		...bandsQueryResolver,
		...favouritesQueryResolver,
	},
	Mutation: {
		...usersMutationResolver,
		...artistsMutationResolver,
		...tracksMutationResolver,
		...genresMutationResolver,
		...albumsMutationResolver,
		...bandsMutationResolver,
		...favouritesMutationResolver,
	}
};

export { resolvers };
