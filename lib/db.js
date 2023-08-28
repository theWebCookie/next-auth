import { MongoClient } from 'mongodb';

async function connectToDatabase() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.kefqvdm.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  );
  return client;
}

export default connectToDatabase;
