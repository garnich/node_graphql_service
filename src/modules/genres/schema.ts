const genresSchemaType = `
    type Genre {
        id: ID!
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
    updateGenre(_id: ID!, name: String, description: String, country: String, year: Int): Genre
    deleteGenre(_id: ID!): DeletedItem
`;

export { genresSchemaType, genresSchemaQuery, genresSchemaMutation };
