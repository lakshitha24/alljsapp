import mongoose from "mongoose";
import { config } from "./config";

const connectMongoDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(`${config.mongoDB.URL}`, {
      retryWrites: true,
    });
    console.log("DB connected");
  } catch (error) {
    console.log(error);
  }
};

export { connectMongoDB };
