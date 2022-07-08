import { gql } from 'apollo-server-express';
import { jwtSchemaType, jwtSchemaQuery } from './modules/jwt/schema';
import { usersSchemaType, usersSchemaQuery, usersSchemaMutation} from './modules/users/schema';
import { artistsSchemaType, artistsSchemaQuery, artistsSchemaMutation} from './modules/artists/schema';
import { tracksSchemaType, tracksSchemaQuery, tracksSchemaMutation } from './modules/tracks/schema';
import { genresSchemaType, genresSchemaQuery, genresSchemaMutation } from './modules/genres/schema';
import { albumsSchemaType, albumsSchemaQuery, albumsSchemaMutation } from './modules/albums/schema';
import { bandsSchemaType, bandsSchemaQuery, bandsSchemaMutation } from './modules/bands/schema';
import { favouritesSchemaType, favouritesSchemaQuery, favouritesSchemaMutation } from './modules/favourites/schema';

const typeDefs = gql`
	type DeletedItem {
		acknowledged: Boolean
		deletedCount: Int
	}

	${jwtSchemaType}
	${usersSchemaType}
	${artistsSchemaType}
	${tracksSchemaType}
	${genresSchemaType}
	${albumsSchemaType}
	${bandsSchemaType}
	${favouritesSchemaType}

	type Query {
		${jwtSchemaQuery}
		${usersSchemaQuery}
		${artistsSchemaQuery}
		${tracksSchemaQuery}
		${genresSchemaQuery}
		${albumsSchemaQuery}
		${bandsSchemaQuery}
		${favouritesSchemaQuery}
	}

	type Mutation {
		${usersSchemaMutation}
		${artistsSchemaMutation}
		${tracksSchemaMutation}
		${genresSchemaMutation}
		${albumsSchemaMutation}
		${bandsSchemaMutation}
		${favouritesSchemaMutation}
	}
`;

export { typeDefs };
