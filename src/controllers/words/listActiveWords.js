import { Word } from "../../models/Words";

export default (req, res) => {
  Word.find().where("location", "ACTIVE").sort({created: 'desc'})
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(err))
};