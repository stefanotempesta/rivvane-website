const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let mongoDbUrl = "mongodb://localhost:27017"

if (process.env.MONGODB_URI) { 
  mongoDbUrl = process.env.MONGODB_URI
}

let database;

async function connectToDatabase() {
  const client = await MongoClient.connect(mongoDbUrl);
  database = client.db("online-shop");
}

function getDb() {
  if (!database) {
    throw new Error("You must connect first!");
  }
  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb,
};