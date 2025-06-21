// register-sw.js
navigator.serviceWorker.register('./static/uv/uv.sw.js', {
  scope: __uv$config.prefix
});
