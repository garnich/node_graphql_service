const artistsSchemaType = `
    type Artist {
        _id: ID!
        firstName: String
        secondName: String
        middleName: String
        birthDate: String
        birthPlace: String
        country: String
        bandsIds: [ID]
        instruments: [String]
    }
`;

const artistsSchemaQuery = `
    getArtist(id: ID!): Artist
	getArtists: [Artist]!
`;

const artistsSchemaMutation = `
    createArtist(firstName: String, secondName: String,	middleName: String,	birthDate: String, birthPlace: String,	country: String, bandsIds: [ID], instruments: [String]): Artist
    updateArtist(id: ID!, firstName: String, secondName: String, middleName: String,	birthDate: String, birthPlace: String,	country: String, bandsIds: [ID], instruments: [String]): Artist
    deleteArtist(id: ID!): DeletedItem
`;

export { artistsSchemaType, artistsSchemaQuery, artistsSchemaMutation };
