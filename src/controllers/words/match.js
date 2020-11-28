import { Word } from "../../models/Words";

export default (req, res) => {
  const { word } = req.params;
  Word.find({ word })
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(err))
};