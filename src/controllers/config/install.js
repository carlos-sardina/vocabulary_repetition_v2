import { Config } from "../../models/Config";

export default (req, res) => {
  new Config({ repeat_times: 0 }).save()
      .then(() => res.sendStatus(200))
      .catch(err => res.status(500).json(err))
};