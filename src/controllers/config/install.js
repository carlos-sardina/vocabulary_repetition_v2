import { Config } from "../../models/Config";

export default (req, res) => {
  const initialConfig = [ 0 , { loopOneTimeEach: 0 } ];
  const config = new Config({ config: initialConfig });
  return config.save()
    .then(data => res.sendStatus(200))
    .catch(err => res.status(500).json(err))
};