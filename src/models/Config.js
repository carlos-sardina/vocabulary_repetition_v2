import { Schema, model } from 'mongoose';

const configSchema = new Schema({
  config: { type: Object, required: [true, "Config is required"] }
});

export const Config = model("config", configSchema);