import { MongoClient } from "mongodb";

const url = process.env.NEXT_PUBLIC_MONGODB_URI;
let mongoClient: MongoClient | null = null;
let connectDB: Promise<MongoClient> | null = null;

if (process.env.NODE_ENV === "development") {
  if (!mongoClient && url) {
    mongoClient = new MongoClient(url);
    connectDB = mongoClient.connect();
  }
} else {
  if (url) {
    mongoClient = new MongoClient(url);
    connectDB = mongoClient.connect();
  }
}

export { connectDB };
