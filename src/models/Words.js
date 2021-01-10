import { Schema, model } from 'mongoose';

const wordsSchema = new Schema({
  word: { type: String, required: [true, "Word is required"], unique: true },
  meaning: { type: String, required: [true, "Meaning is required"] },
  times_played: { type: Number, default: 0 },
  created: { type: Date },
  location: { type: String, default: 'ACTIVE' },
  language: { type: String, required: [true, "Language is required"] },
  image_url: { type: String, default: null }
});

export const Word = model("words", wordsSchema);