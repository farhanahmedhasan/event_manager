import mongoose from 'mongoose';

const DB = process.env.CONNECTION_URL.replace('<PASSWORD>', process.env.PASSWORD);

export const connectToMongoDB = async () => {
  try {
    await mongoose.connect(DB);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(error);
  }
};
