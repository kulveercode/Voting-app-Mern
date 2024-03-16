import mongoose from "mongoose";


const connectDB = async () => {
  try {
    const URL = process.env.MONGODB_URL;
    // const URL = process.env.MONGODB_URL_LOCAL;

    const connectionInstance = await mongoose.connect(URL);
    console.log(
      `MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`MongoDB connection error ${error}`);
    process.exit(1);
  }
};


export default connectDB;
