if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/static/uv/uv.sw.js', {
    scope: '/service/',
  });
}
