import mongoose from "mongoose";

const connection = { isConnected: false }; /* creating connection object*/

let uri = process.env.MONGODB_URI_CLOUD;

if (!uri) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

export default function dbConnect() {
  let db;

  if (!connection.isConnected) {
    db = mongoose.connect(uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    connection.isConnected = db.connections[0].readyState;
    console.log("-----db isConnected-----", models);
  }
  return db; // IMPORTANT! -- return an instance of the db
}