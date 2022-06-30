import { gql } from 'apollo-server-express';
import { jwtSchemaType, jwtSchemaQuery } from './modules/jwt/schema';
import { usersSchemaType, usersSchemaQuery, usersSchemaMutation} from './modules/users/schema';
import { artistsSchemaType, artistsSchemaQuery, artistsSchemaMutation} from './modules/artists/schema';

const typeDefs = gql`
	type DeletedItem {
		acknowledged: Boolean
		deletedCount: Int
	}

	${jwtSchemaType}
	${usersSchemaType}

	type Track {
		_id: ID!
		title: String
		albums: String
		bands: [Band]
		duration: Int
		released: Int
		genres: [Genre]
	}

	${artistsSchemaType}

	type Band {
		_id: ID!
		name: String
		origin: String
		members: [Member]
		website: String
		genres: String
	}

	type Genre {
		_id: ID!
		name: String
		description: String
		country: String
		year: Int
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
		getGenre(id: ID!): Genre
		getGenres: [Genre]!
		getTrack(id: ID!): Track
		getTracks: [Track]!
		getBand(id: ID!): Band
		getBands: [Band]!
		getAlbum(id: ID!): Album
		getAlbums: [Album]!
	}

	type Mutation {
		${usersSchemaMutation}
		${artistsSchemaMutation}
	}
`;

export { typeDefs };
