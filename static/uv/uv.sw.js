self.__uv$config = {
  prefix: '/service/',
  bare: 'https://uv.bypass.workers.dev/',
  encodeUrl: function (url) {
    return new URL(self.__uv$config.prefix + btoa(url).replace(/=/g, ''), location).toString();
  },
};

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (!url.pathname.startsWith(self.__uv$config.prefix)) return;
  const target = atob(url.pathname.slice(self.__uv$config.prefix.length));
  event.respondWith(fetch(new Request(target, event.request)));
});
