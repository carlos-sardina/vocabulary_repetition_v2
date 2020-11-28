import { Word } from "../../models/Words";

export default (req, res) => {
  let operation = 201;

  Word.findOne({'word': req.body.word})
    .then(row => {
      if (row) {
        row.location = "ACTIVE";
        operation = 200;
        return row.save();
      }

      const word = new Word(req.body);
      return word.save();
    })
    .then(data => res.status(operation).json(data))
    .catch(err => res.status(500).json(err))
};