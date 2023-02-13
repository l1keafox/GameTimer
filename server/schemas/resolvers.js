const { AuthenticationError } = require("apollo-server-express");
const { User, Group, Location } = require("../models");
const { GraphQLScalarType, Kind } = require("graphql");
const { signToken } = require("../utils/auth");
const {GraphQLJSON} = require('graphql-type-json');
const getCenterPoint = require('./../utils/centerPoint')
//this is a custom decoding strategy for dealing with dates.
const dateScalar = new GraphQLScalarType({
  name: "Date",
  description: "Date custom scalar type",
  serialize(value) {
    return value.getTime(); // Convert outgoing Date to integer for JSON
  },
  parseValue(value) {
    return new Date(value); // Convert incoming integer to Date
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      // Convert hard-coded AST string to integer and then to Date
      return new Date(parseInt(ast.value, 10));
    }
    // Invalid hard-coded value (not an integer)
    return null;
  },
});

const resolvers = {
  //specifies that when "Date" is the datatype dateScalar should be used to resolve it.
  Date: dateScalar,
  JSON: {
    serialize(value) {
        return GraphQLJSON.parseValue(value);
    } 
  },

  Query: {
   
  },

  Mutation: {
    
  },
};
module.exports = resolvers;
