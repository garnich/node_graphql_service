const tracksSchemaType = `
    type Track {
        id: ID!
        title: String
        album: Album
        bands: [Band]!
        duration: Int
        released: Int
        genres: [Genre]!
    }
`;

const tracksSchemaQuery = `
    getTrack(id: ID!): Track
    getTracks: [Track]!
`;

const tracksSchemaMutation = `
    createTrack(title: String, albumId: ID, bandsIds: [String], duration: Int, released: Int, genresIds: [String]): Track
    updateTrack(id: ID!, title: String, albumId: String, bandsIds: [String], duration: Int, released: Int, genresIds: [String]): Track
    deleteTrack(id: ID!): DeletedItem
`;

export { tracksSchemaType, tracksSchemaQuery, tracksSchemaMutation };
