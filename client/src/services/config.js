import axios from 'axios';

export const getConfig = (language) => {
  return new Promise((resolve, reject) => {
    axios.get(process.env.REACT_APP_SERVER_IP + '/config/load/' + language)
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  })
};

export const updateTimesToRepeat = (id, times) => {
  return new Promise((resolve, reject) => {
    axios.post(process.env.REACT_APP_SERVER_IP + '/config/update/' + id, { times })
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  })
};