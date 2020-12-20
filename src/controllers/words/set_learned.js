import { Word } from "../../models/Words";

export default async (req, res) => {

  const words = req.body.words;

  for(let i in words) {
    await new Promise(next => {
      Word.findById(words[i])
        .then(data => {
          if (!data) {
            return next();
          }
          data.location = "BACKLOG";
          return data.save();
        })
        .then(() => next())
    })
  }

  res.sendStatus(200);
};