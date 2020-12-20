import { Word } from "../../models/Words";

export default (req, res) => {
  let conditions = { location: 'ACTIVE' };

  Word.find().where(conditions).sort({created: 'desc'})
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(err))
};