import { getTimesPlayed } from "../../common/getTimesPlayed";

export default (req, res) => {
  getTimesPlayed()
    .then(data => {
      res.status(200).json(data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
    })
    .catch(err => res.status(500).json(err))
};