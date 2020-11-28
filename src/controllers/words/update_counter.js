import { Word } from "../../models/Words";

export default (req, res) => {
  Word.findById(req.params.id)
    .then(data => {
      if (!data) {
        return res.sendStatus(404);
      }
      data.times_played = data.times_played + 1;
      return data.save();
    })
    .then(done => res.sendStatus(200))
    .catch(err => res.status(500).json(err))
};