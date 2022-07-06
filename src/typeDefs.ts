import { gql } from 'apollo-server-express';
import { jwtSchemaType, jwtSchemaQuery } from './modules/jwt/schema';
import { usersSchemaType, usersSchemaQuery, usersSchemaMutation} from './modules/users/schema';
import { artistsSchemaType, artistsSchemaQuery, artistsSchemaMutation} from './modules/artists/schema';
import { tracksSchemaType, tracksSchemaQuery, tracksSchemaMutation } from './modules/tracks/schema';
import { genresSchemaType, genresSchemaQuery, genresSchemaMutation } from './modules/genres/schema';
import { albumsSchemaType, albumsSchemaQuery, albumsSchemaMutation } from './modules/albums/schema';

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

	type Band {
		_id: ID!
		name: String
		origin: String
		members: [Member]
		website: String
		genres: String
	}

	type Favourites {
		_id: ID!
		userId: ID!
		bands: [ID]
		genres: [ID]
		artists: [ID]
		tracks: [ID]
	}

	type Member {
		_id: ID!
		artist: Artist
		instrument: String
		years: String
	}

	type Query {
		${jwtSchemaQuery}
		${usersSchemaQuery}
		${artistsSchemaQuery}
		${tracksSchemaQuery}
		${genresSchemaQuery}
		${albumsSchemaQuery}
		getBand(id: ID!): Band
		getBands: [Band]!
	}

	type Mutation {
		${usersSchemaMutation}
		${artistsSchemaMutation}
		${tracksSchemaMutation}
		${genresSchemaMutation}
		${albumsSchemaMutation}
	}
`;

export { typeDefs };
