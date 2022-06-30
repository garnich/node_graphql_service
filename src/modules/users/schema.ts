const usersSchemaType = `
    type User {
        _id: ID!
        firstName: String
        lastName: String
        password: String!
        email: String!
    }
`;

const usersSchemaQuery = `
    getUser(id: ID!): User
`;

const usersSchemaMutation = `
    register(firstName: String!, lastName: String!, password: String!, email: String!): User
`;


export { usersSchemaType, usersSchemaQuery, usersSchemaMutation};
