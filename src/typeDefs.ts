import { gql } from 'apollo-server-express';
import { jwtSchemaType, jwtSchemaQuery } from './modules/jwt/schema';
import { usersSchemaType, usersSchemaQuery, usersSchemaMutation} from './modules/users/schema';
import { artistsSchemaType, artistsSchemaQuery, artistsSchemaMutation} from './modules/artists/schema';
import { tracksSchemaType, tracksSchemaQuery, tracksSchemaMutation } from './modules/tracks/schema';
import { genresSchemaType, genresSchemaQuery, genresSchemaMutation } from './modules/genres/schema';
import { albumsSchemaType, albumsSchemaQuery, albumsSchemaMutation } from './modules/albums/schema';
import { bandsSchemaType, bandsSchemaQuery, bandsSchemaMutation } from './modules/bands/schema';

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

	type Favourites {
		_id: ID!
		userId: ID!
		bands: [ID]
		genres: [ID]
		artists: [ID]
		tracks: [ID]
	}

	type Query {
		${jwtSchemaQuery}
		${usersSchemaQuery}
		${artistsSchemaQuery}
		${tracksSchemaQuery}
		${genresSchemaQuery}
		${albumsSchemaQuery}
		${bandsSchemaQuery}
	}

	type Mutation {
		${usersSchemaMutation}
		${artistsSchemaMutation}
		${tracksSchemaMutation}
		${genresSchemaMutation}
		${albumsSchemaMutation}
		${bandsSchemaMutation}
	}
`;

export { typeDefs };
