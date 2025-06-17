import { Schema } from 'mongoose';

export const YourSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
});