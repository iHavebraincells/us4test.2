importScripts('./uv.bundle.js');
importScripts('./uv.config.js');
const sw = new UVServiceWorker();
self.addEventListener('fetch', e => e.respondWith(sw.fetch(e)));
