import { Word } from "../../models/Words";

export default (req, res) => {
  Word.findByIdAndDelete(req.params.id)
    .then(done => res.status(200).json(done))
    .catch(err => res.status(500).json(err))
};