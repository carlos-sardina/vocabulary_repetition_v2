import { setAverageTimes, setRepeatTimes } from '../redux/actions';
import { Store } from '../redux/store';

export const setInitialData = (data) => {
  console.log(data)
  Store.dispatch(setAverageTimes(data.average))
  Store.dispatch(setRepeatTimes(data.config))
}