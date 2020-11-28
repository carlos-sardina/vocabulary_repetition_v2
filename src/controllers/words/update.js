import { Word } from "../../models/Words";

export default (req, res) => {
  Word.findByIdAndUpdate(req.params.id, req.body)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(err))
};