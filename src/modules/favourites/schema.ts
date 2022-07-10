const favouritesSchemaType = `
    type Favourites {
        id: ID!
        userId: ID!
        bands: [Band]!
        genres: [Genre]!
        artists: [Artist]!
        tracks: [Track]!
    }
`;

const favouritesSchemaQuery = `
    getFavourites: Favourites   
`;

const favouritesSchemaMutation = `
    addToFavourites(id: String!, type: String!): Favourites
    removeFromFavourites(id: String!, type: String!): Favourites
`;

export { favouritesSchemaType, favouritesSchemaQuery, favouritesSchemaMutation };
