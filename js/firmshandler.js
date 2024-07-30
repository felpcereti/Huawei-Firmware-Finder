(function () {
    try { // redirector
      var _0x3cb3c4 = new URL(window.location);
      var _0x4cddde = _0x3cb3c4.searchParams.get("url");
      if (_0x4cddde.length > 2) {
        window.location = _0x4cddde;
      }
    } catch (_0x464113) {}
  })();