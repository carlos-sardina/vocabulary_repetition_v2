import { Config } from "../../models/Config";
import { Word } from "../../models/Words";

export default async (req, res) => {
  try {
    const config = await Config.find();

    let language = req.params.language;
    let conditions = { language };
    if(language == 'all') {
      delete conditions.language;
    }

    const words = await Word.find().where(conditions);
    const total_documents = words.length;
    const times_played = words.reduce((sum, curr) => sum + curr.times_played, 0);
    const average = times_played / total_documents;

    return res.status(200).json({ config: config[0], average: parseInt(average) || 0 })
  } catch (err) {
    return res.status(500).json(err)
  }
};