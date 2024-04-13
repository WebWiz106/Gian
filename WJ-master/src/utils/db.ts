import mongoose from "mongoose";

// Define the MongoDB connection URI
const MONGODB_URI = "mongodb://localhost:27017/my_database";

// Create a function to connect to the MongoDB database
export const connectDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
