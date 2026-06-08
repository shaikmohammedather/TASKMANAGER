import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const cnct = await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongodb is successfully connected");
  } catch (error) {
    console.error(`Mongodb is ${error.message}`);
  }
};

export default connectDb;
