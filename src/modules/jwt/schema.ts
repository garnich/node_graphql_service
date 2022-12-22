const jwtSchemaType = `
    type JWT {
        jwt: String!
    }
`;

const jwtSchemaQuery = `
    getJwt(email: String!, password: String!): JWT
`;

export { jwtSchemaType, jwtSchemaQuery };
