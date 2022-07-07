const bandsSchemaType = `
    type Member {
        artist: Artist
        instrument: String
        years: String
    }

    input MemberInput {
        artistIds: ID! 
        instrument: String
        years: String
    }

    type Band {
        id: ID!
        name: String
        origin: String
        members: [Member]!
        website: String
        genres: [Genre]!
    }
`;

const bandsSchemaQuery = `
    getBand(id: ID!): Band
	getBands: [Band]!
`;

const bandsSchemaMutation = `
    createBand( name: String, origin: String, members: [MemberInput], website: String, genres: [ID]): Band
    updateBand(id: ID!, name: String, origin: String, members: [MemberInput], website: String, genres: [ID]): Band
    deleteBand(id: ID!): DeletedItem
`;

export { bandsSchemaType, bandsSchemaQuery, bandsSchemaMutation };
