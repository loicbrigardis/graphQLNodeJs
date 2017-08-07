const RootQuery = require('./queries');
const Mutation = require('./mutations');
const {
  graphql,
  GraphQLSchema
} = require('graphql');

const Schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});

module.exports = Schema;
