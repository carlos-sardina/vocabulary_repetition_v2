import { Config } from "../../models/Config";
import { getTimesPlayed } from "../../common/getTimesPlayed";
import { Word } from "../../models/Words";

export default async (req, res) => {
  try {
    const config = await Config.find();
    const times_played = await getTimesPlayed();
    const total_documents = await Word.countDocuments();
    const average = times_played / total_documents;

    return res.status(200).json({ config: config[0], average: parseInt(average) })
  } catch (err) {
    return res.status(500).json(err)
  }
} 