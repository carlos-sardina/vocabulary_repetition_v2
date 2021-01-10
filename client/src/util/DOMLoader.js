import { Store } from '../redux/store';
import { setDOMLoaderStatus } from '../redux/actions';

export const DOMLoader = {
  element: document.getElementById('ipl-progress-indicator'),
  hidde: function() {
    if (this.element) {
      setTimeout(() => {
        this.element.classList.add('available');
        Store.dispatch(setDOMLoaderStatus(false))
      }, 100)
    }
  },
  show: function() {
    if (this.element) {
      this.element.classList.remove('available');
      Store.dispatch(setDOMLoaderStatus(true))
    }
  }
}