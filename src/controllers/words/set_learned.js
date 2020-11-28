import { Word } from "../../models/Words";

export default (req, res) => {
  Word.findById(req.params.id)
    .then(data => {
      if (!data) {
        return res.sendStatus(404);
      }
      data.location = "BACKLOG";
      return data.save();
    })
    .then(done => res.status(200).json(done))
    .catch(err => res.status(500).json(err))
};