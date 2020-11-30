export const DOMLoader = {
  element: document.getElementById('ipl-progress-indicator'),
  hidde: function() {
    if (this.element) {
      setTimeout(() => {
        this.element.classList.add('available');
      }, 100)
    }
  },
  show: function() {
    if (this.element) {
      this.element.classList.remove('available')
    }
  }
}