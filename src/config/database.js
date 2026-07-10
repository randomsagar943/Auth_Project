import mongoose from "mongoose";
import config from "./config.js";



async function connectDB() {

    await mongoose.connect(config.mongoURI)

    console.log("Connected to DB successfully");


}

export default connectDB;