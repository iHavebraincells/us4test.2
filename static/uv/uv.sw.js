importScripts('/static/uv/uv.bundle.js');
importScripts('/static/uv/uv.config.js');

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (!url.pathname.startsWith(self.__uv$config.prefix)) {
    return; // ignore non-proxy requests
  }
  
  const target = self.__uv$config.decodeUrl(
    url.pathname.slice(self.__uv$config.prefix.length)
  );
  
  event.respondWith(fetch(target));
});
