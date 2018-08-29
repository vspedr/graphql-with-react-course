const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const app = express();
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true,
}));

const port = process.env.PORT || 4000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.info(`Listening on port ${port}`);
});
