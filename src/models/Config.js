import { Schema, model } from 'mongoose';

const configSchema = new Schema({
  repeat_times: { type: Number, required: [true, "Times to repeat is required"] }
});

export const Config = model("config", configSchema);