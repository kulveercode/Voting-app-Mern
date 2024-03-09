import mongoose from "mongoose";

const connectDB = async(username, password) => {
    try {
        const URL = `mongodb+srv://${username}:${password}@votingapp.3ozfyxw.mongodb.net/?retryWrites=true&w=majority&appName=votingapp`
        const connectionInstance= await mongoose.connect(URL)
        console.log(`MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log(`MongoDB connection error ${error}`);
        process.exit(1)
    }
}

export default connectDB;

