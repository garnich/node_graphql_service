import { gql } from 'apollo-server-express';
import { jwtSchemaType, jwtSchemaQuery } from './modules/jwt/schema';
import { usersSchemaType, usersSchemaQuery, usersSchemaMutation} from './modules/users/schema';
import { artistsSchemaType, artistsSchemaQuery, artistsSchemaMutation} from './modules/artists/schema';
import { tracksSchemaType, tracksSchemaQuery, tracksSchemaMutation } from './modules/tracks/schema';
import { genresSchemaType, genresSchemaQuery, genresSchemaMutation } from './modules/genres/schema';

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

	type Album {
		_id: ID
		name: String
		released: Int
		artists: [Artist]
		bands: [Band]
		tracks: [Track]
		genres: [Genre]
		image: String
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
		getBand(id: ID!): Band
		getBands: [Band]!
		getAlbum(id: ID!): Album
		getAlbums: [Album]!
	}

	type Mutation {
		${usersSchemaMutation}
		${artistsSchemaMutation}
		${tracksSchemaMutation}
		${genresSchemaMutation}
	}
`;

export { typeDefs };
