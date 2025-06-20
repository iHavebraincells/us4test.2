if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/static/uv/uv.sw.js', { scope: '/' })
      .then(() => console.log('UV service worker registered'))
      .catch(err => console.error('SW registration failed:', err));
  });
}
