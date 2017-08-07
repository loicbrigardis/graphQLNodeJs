const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema.js');

const app = express();


app.use('/graphql', expressGraphQL({
  schema,
  graphiql:true
}));


app.listen(8888, _ => console.log('server is running on port 8888'));
