const albumsSchemaType = `
    type Album {
        id: ID
        name: String
        released: Int
        artists: [Artist]
        bands: [Band]
        tracks: [Track]
        genres: [Genre]
        image: String
    }

    type AlbumOutput {
        id: ID
        name: String
        released: Int
        artistsIds: [ID]!
        bandsIds: [ID]!
        trackIds: [ID]!
        genresIds: [ID]!
        image: String
    }
`;

const albumsSchemaQuery = `
    getAlbum(id: ID!): Album
	getAlbums: [Album]!
`;

const albumsSchemaMutation = `
    createAlbum( name: String, released: Int, artistsIds: [ID]!, bandsIds: [ID]!, trackIds: [ID]!, genresIds: [ID]!, image: String ): AlbumOutput
    updateAlbum( id: ID!, name: String, released: Int, artistsIds: [ID], bandsIds: [ID], trackIds: [ID], genresIds: [ID], image: String ): AlbumOutput
    deleteAlbum( id: ID! ): DeletedItem
`;

export { albumsSchemaType, albumsSchemaQuery, albumsSchemaMutation };
