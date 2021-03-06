import { Config } from "../../models/Config";

export default (req, res) => {
  Config.findById(req.params.id)
    .then(data => {
      data.repeat_times = req.body.times
      return data.save()
    })
    .then(done => res.status(200).json(done))
    .catch(err => res.status(500).json(err))
};