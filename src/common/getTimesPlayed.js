import { Word } from "../models/Words";

export const getTimesPlayed = async () => {
  const data = await Word.find().select('times_played');
  return data.reduce((sum, curr) => sum + curr.times_played, 0)
}