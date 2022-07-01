const genresSchemaType = `
    type Genre {
        _id: ID!
        name: String
        description: String
        country: String
        year: Int
    }
`;

const genresSchemaQuery = `
    getGenre(id: ID!): Genre
    getGenres: [Genre]!
`;

const genresSchemaMutation = `
    createGenre(name: String, description: String, country: String, year: Int): Genre
    updateGenre(id: ID!, name: String, description: String, country: String, year: Int): Genre
    deleteGenre(id: ID!): DeletedItem
`;

export { genresSchemaType, genresSchemaQuery, genresSchemaMutation };
