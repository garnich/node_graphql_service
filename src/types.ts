import { gql } from 'apollo-server-express';

const typeDefs = gql`
	type JWT {
		jwt: String!
	}

	type User {
		_id: ID!
		firstName: String
		lastName: String
		password: String!
		email: String!
	}

	type Track {
		_id: ID!
		title: String
		albums: String
		bands: [Band]
		duration: Int
		released: Int
		genres: [Genre]
	}

	type Artist {
		_id: ID!
		firstName: String
		secondName: String
		middleName: String
		birthDate: String
		birthPlace: String
		country: String
		bands: [ID]
		instruments: String
	}

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
		getArtist(id: ID!): Artist
		getArtists: [Artist]!
		getGenre(id: ID!): Genre
		getGenres: [Genre]!
		getTrack(id: ID!): Track
		getTracks: [Track]!
		getBand(id: ID!): Band
		getBands: [Band]!
		getAlbum(id: ID!): Album
		getAlbums: [Album]!
		getJwt: JWT
		getUser(id: ID!): User
	}

	type Mutation {
		register(firstName: String!, lastName: String!, password: String!, email: String!): User
	}
`;

export { typeDefs };
