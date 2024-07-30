onmessage = function (_0x41eab2) {
    var _0x39a8b9 = _0x41eab2.data;
    var _0x47950a = {};
    for (var _0x575028 = 0; _0x575028 < 64; _0x575028++) {
      _0x47950a["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(_0x575028)] = _0x575028;
    }
    var _0x2b6716 = new Map();
    var _0x42aaa2 = 256;
    var _0x5278b1 = String.fromCharCode(_0x47950a[_0x39a8b9[0]] + (_0x47950a[_0x39a8b9[1]] << 6) + (_0x47950a[_0x39a8b9[2]] << 12) - 24);
    var _0x3f1395 = _0x5278b1;
    var _0x5f0f33 = [_0x5278b1];
    for (var _0x575028 = 3; _0x575028 < _0x39a8b9.length; _0x575028 += 3) {
      var _0x4acc71 = _0x47950a[_0x39a8b9[_0x575028]] + (_0x47950a[_0x39a8b9[_0x575028 + 1]] << 6) + (_0x47950a[_0x39a8b9[_0x575028 + 2]] << 12);
      _0x5278b1 = _0x4acc71 < 256 ? String.fromCharCode(_0x4acc71 - 24) : _0x2b6716.has(_0x4acc71) ? _0x2b6716.get(_0x4acc71) : _0x5278b1 + _0x5278b1.charAt(0);
      _0x5f0f33.push(_0x5278b1);
      _0x2b6716.set(_0x42aaa2++, _0x3f1395 + _0x5278b1.charAt(0));
      _0x3f1395 = _0x5278b1;
      if (_0x42aaa2 == 262143) {
        _0x2b6716.clear();
        _0x42aaa2 = 256;
      }
    }
    postMessage(_0x5f0f33.join(''));
  };