const expressSession = require('express-session')
const mongoDbStore = require("connect-mongodb-session");

function createSessionStore() {
  const MongoDBStore = mongoDbStore(expressSession);

  const store = new MongoDBStore({
    uri: process.env.MONGODB_URI,
    databaseName: process.env.MONGODB_NAME,
    collection: "session",
  });
  return store;
}

function createSessionConfig() {
  return {
    secret: "rivv-2024-nath-plays-1979",
    resave: false,
    saveUninitialized: false,
    store: createSessionStore(),
    cookie: {
      maxAge: 2 * 24 * 60 * 60 * 1000,
    },
  };
}

module.exports = createSessionConfig;
