import axios from 'axios';

export const getWords = (language) => {
  console.log(language);
  return new Promise((resolve, reject) => {
    axios.get(process.env.REACT_APP_SERVER_IP + '/words/list/active')
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  })
};

export const deleteWord = (id) => {
  return new Promise((resolve, reject) => {
    axios.delete(process.env.REACT_APP_SERVER_IP + '/words/delete/' + id)
      .then(res => resolve(res))
      .catch(err => reject(err));
  })
};

export const setWordAsLearned = (id) => {
  return new Promise((resolve, reject) => {
    axios.put(process.env.REACT_APP_SERVER_IP + '/words/setLearned/' + id)
      .then(res => resolve(res))
      .catch(err => reject(err));
  })
};

export const createWord = (word) => {
  return new Promise((resolve, reject) => {
    axios.post(process.env.REACT_APP_SERVER_IP + '/words/create', word)
      .then(res => resolve(res.status))
      .catch(err => reject(err));
  })
};

export const editWord = (word) => {
  return new Promise((resolve, reject) => {
    axios.put(process.env.REACT_APP_SERVER_IP + '/words/update/' + word._id, word)
      .then(res => resolve(res))
      .catch(err => reject(err));
  })
};

export const matchWord = (value) => {
  return new Promise((resolve, reject) => {
    axios.get(process.env.REACT_APP_SERVER_IP + '/words/match/' + value)
      .then(res => resolve(res))
      .catch(err => reject(err));
  })
};