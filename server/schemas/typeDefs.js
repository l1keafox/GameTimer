const { gql } = require("apollo-server-express");
const { User, Group, Location, Place } = require("./../models");

const typeDefs = gql`
  scalar Date
  scalar JSON
  type Auth {
    token: ID!
    user: User
  }
  
  type Query {

  }

  type Mutation {
  }
`;
module.exports = typeDefs;
