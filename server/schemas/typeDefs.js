const { gql } = require('apollo-server-express');

// Not sure what the return data will be for the rating
// this might have to be adjusted later on

const typeDefs = gql`
type Reviews {
    _id: ID!
    name: String!
    reviewText: String!
    rating: String!
}

type Query{
    reviews: [Reviews]
}
`;

module.exports = typeDefs;