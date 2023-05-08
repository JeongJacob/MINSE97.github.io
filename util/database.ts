import { MongoClient } from "mongodb";

const url = process.env.NEXT_PUBLIC_MONGODB_URI;
let mongoClient: MongoClient | null = null;

async function connectDB(): Promise<MongoClient> {
  if (!mongoClient && url) {
    mongoClient = new MongoClient(url);
    await mongoClient.connect();
  }
  return mongoClient!;
}

export { connectDB };
