window.Ultraviolet = {
  codec: {
    xor: {
      encode: str => btoa([...(str||"")].map((c,i)=> i%2 ? String.fromCharCode(c.charCodeAt() ^ 2) : c).join("")),
      decode: b64 => atob(b64)
    }
  }
};
// A stub ServiceWorker class for proxy routing
class UVServiceWorker {
  async fetch(ev) {
    const prefix = window.__uv$config.prefix;
    const urlPath = new URL(ev.request.url).pathname;
    if (!urlPath.startsWith(prefix)) return fetch(ev.request);
    const target = window.__uv$config.decodeUrl(urlPath.slice(prefix.length + 1));
    return fetch(target);
  }
}
window.UVServiceWorker = UVServiceWorker;
