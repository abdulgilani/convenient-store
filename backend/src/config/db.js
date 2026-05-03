import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    console.log("CONNECTED TO MONGODB SUCCESSFULLY!");
  } catch (error) {
    console.error(`Error connecting to database: ${error.message}`);
    process.exit(1); // exit with failure if failed to connect to database
  }
};
