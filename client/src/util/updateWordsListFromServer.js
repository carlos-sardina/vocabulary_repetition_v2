import { getWords } from '../services/words';
import { Store } from '../redux/store';
import { setWordsList } from '../redux/actions/words';

export const updateActiveWordListFromAPI = () => {
  return new Promise((resolve, reject) => {
    getWords('JP')
      .then(data => Store.dispatch(setWordsList(data)))
      .then(() => resolve())
      .catch(err => reject(err))
  })
}