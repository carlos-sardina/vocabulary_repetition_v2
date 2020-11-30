export const PlayerBar = {
  /**
   * Show player bar
   */
  showPlayer: () => {
    const notification = document.getElementById('player');
    notification.style.display = "block";
  },
  /**
   * Hidde player bar
   */
  hiddePlayer: () => {
    const notification = document.getElementById('player');
    notification.style.animationName = 'fadeOutDown';
      setTimeout(() => {
        notification.style.display = 'none';
        notification.style.animationName = 'fadeInUp';
      }, 180);
  }
}