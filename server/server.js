import express, { urlencoded, json, static } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { join } from 'path';

import { typeDefs, resolvers } from './schemas';
import { once } from './config/connection';

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({ app });

app.use(urlencoded({ extended: false }));
app.use(json());

// Serve up static assets
app.use('/images', static(join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(static(join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '../client/build/index.html'));
});

once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
