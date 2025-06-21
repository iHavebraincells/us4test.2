window.Ultraviolet = {
  codec: {
    xor: {
      encode: function (str) {
        return btoa([...str].map((c,i) =>
          i % 2 ? String.fromCharCode(c.charCodeAt() ^ 2) : c
        ).join(''));
      },
      decode: function (b64) {
        return atob(b64);
      }
    }
  }
};
