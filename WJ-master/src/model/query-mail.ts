// models.ts

import mongoose, { Schema, Document } from "mongoose";

// Define the interface for the data to be stored
interface IFormData extends Document {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  verified: boolean;
}

// Define the Mongoose schema
const FormDataSchema: Schema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
  verified: { type: Boolean, default: false },
});

// Create and export the Mongoose model
export const QueryFormData: mongoose.Model<IFormData> =
  mongoose.models.QueryFormData ||
  mongoose.model<IFormData>("QueryFormData", FormDataSchema);
