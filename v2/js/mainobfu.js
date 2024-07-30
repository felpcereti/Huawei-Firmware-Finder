var _0x5f0a70 = null;
var _0x47514c;
function AdjustElements() {
  if (_0x5f0a70 == null) {
    // TOLOOK
    setTimeout(function () {
      _0x5f0a70 = $("#dataTable");
      _0x47514c = document.getElementById("dataTable");
      AdjustElements();
    }, 500);
    return;
  }
  var _0x36d2e8 = _0x5f0a70.offset().top;
  var _0xb8d03e = {
    maxHeight: "calc(100vh - " + (_0x36d2e8 + 25) + "px)"
  };
  _0x5f0a70.css(_0xb8d03e);
}
var _0x3a7ba8 = null;
var _0x2d5114 = null;
var _0x32445c = null;
var _0x15d30f = null;
var _0x2dec33;
var _0x2b0296 = null;
function InputChanged() {
  if (_0x2b0296 != null) {
    clearTimeout(_0x2b0296);
  }
  _0x2b0296 = // TOLOOK
  setTimeout(function () {
    _0x37dcfa();
  }, 500);
}
;
var _0x2d5b26 = null;
var _0x5232f7 = 39;
function _0x37dcfa() {
  if (_0x2d5b26 == null) {
    _0x2d5b26 = _0x2dec33.length;
  }
  if (_0x3a7ba8 == null) {
    // TOLOOK
    setTimeout(function () {
      _0x37dcfa();
    }, 500);
    return;
  }
  _0x2b0296 = null;
  var _0x1dc8d4 = _0x44c56d(_0x3a7ba8.val().toLowerCase(), _0x2d5114.val().toLowerCase(), _0x32445c.val().toLowerCase(), _0x15d30f.val().toLowerCase());
  _0x1dc8d4.then(function (_0x271e70) {
    _0x5f0a70.scrollTop(0);
    _0x5f0a70.html("");
    if (_0x271e70.length == 0) {
      var _0x4b4851 = document.createElement("tr");
      _0x4b4851.style.color = "#e60000";
      _0x4b4851.innerHTML += "<td>No Data Found</td>";
      _0x4b4851.innerHTML += "<td>N/A</td>";
      _0x4b4851.innerHTML += "<td>N/A</td>";
      _0x4b4851.innerHTML += "<td>N/A</td>";
      _0x5f0a70.append(_0x4b4851);
    } else {
      _0x34d381(_0x271e70);
    }
  });
}
function _0x253488() {
  var _0x3de852 = _0x3a7ba8.val().length > 1 || _0x2d5114.val().length > 1 || _0x32445c.val().length > 1 || _0x15d30f.val().length > 1;
  if (_0x3de852) {
    var _0x3bfbd5 = _0x419aed(_0x3a7ba8.val().toLowerCase(), _0x2d5114.val().toLowerCase(), _0x32445c.val().toLowerCase(), _0x15d30f.val().toLowerCase());
    _0x3bfbd5.then(function (_0x5ba741) {
      if (_0x5ba741 !== undefined && _0x5ba741.length > 0) {
        _0x34d381(_0x5ba741);
      }
    });
  }
}
function _0x203961(_0x1ad97c, _0x221102) {
  if (_0x221102.length > 2) {
    let _0x5ac4cb = null;
    let _0x41a282 = null;
    let _0x1cd6fb = null;
    let _0x18b089 = null;
    let _0x5bc29c = null;
    let _0x369787 = _0x221102[0].indexOf(" ", 5);
    if (_0x369787 != -1) {
      _0x5ac4cb = _0x221102[0].substr(_0x369787);
    }
    _0x369787 = _0x221102[1].lastIndexOf(".");
    if (_0x369787 != -1) {
      _0x369787++;
      let _0x2b214e = _0x221102[1].indexOf("(", _0x369787);
      if (_0x2b214e != -1) {
        _0x1cd6fb = "E" + _0x221102[1].substring(_0x369787, _0x2b214e);
      }
    }
    _0x369787 = _0x221102[1].lastIndexOf("(");
    if (_0x369787 != -1) {
      _0x369787++;
      let _0xdb7bd8 = _0x221102[1].indexOf(")", _0x369787);
      if (_0xdb7bd8 != -1) {
        _0x41a282 = _0x221102[1].substring(_0x369787, _0xdb7bd8);
      }
    }
    _0x369787 = _0x221102[2].lastIndexOf(".");
    if (_0x369787 != -1) {
      _0x369787++;
      let _0x5e504f = _0x221102[2].indexOf("(", _0x369787);
      if (_0x5e504f != -1) {
        _0x5bc29c = "P" + _0x221102[2].substring(_0x369787, _0x5e504f) + ")";
      }
    }
    _0x369787 = _0x221102[2].lastIndexOf("R");
    if (_0x369787 != -1) {
      let _0xab2a2f = _0x221102[2].indexOf(")", _0x369787);
      if (_0xab2a2f != -1) {
        _0x18b089 = _0x221102[2].substring(_0x369787, _0xab2a2f);
      }
    }
    if (_0x5ac4cb != null && _0x41a282 != null && _0x1cd6fb != null && _0x18b089 != null && _0x5bc29c != null) {
      return _0x1ad97c + _0x5ac4cb + "(" + _0x41a282 + _0x1cd6fb + _0x18b089 + _0x5bc29c;
    } else {
      return _0x221102[0];
    }
  } else {
    return _0x221102[0];
  }
}
function _0x34d381(_0x3d77cd) {
  if (_0x3d77cd[0] === true) {
    _0x3d77cd.splice(0, 1);
  }
  for (var _0x2dcb5b = 0, _0x3fe129 = _0x3d77cd.length; _0x2dcb5b < _0x3fe129; _0x2dcb5b++) {
    var _0x18aa52 = document.createElement("tr");
    var _0x58bfa9 = "";
    _0x18aa52.innerHTML += "<td><h3>" + _0x3d77cd[_0x2dcb5b][0] + "</h3></td>";
    var _0x5acb69 = _0x3d77cd[_0x2dcb5b][2][0];
    var _0xa5a716 = _0x3d77cd[_0x2dcb5b][2][0].indexOf(" ");
    if (_0xa5a716 != -1) {
      _0xa5a716++;
      var _0x40080a = _0x3d77cd[_0x2dcb5b][2][0].indexOf(".", _0xa5a716);
      if (_0x40080a != -1 && _0x40080a - _0xa5a716 > 2) {
        if (_0x5acb69.includes("CHN")) {
          _0x5acb69 = "<span class=\"badge badge-danger\">HarmonyOS</span>";
        } else {
          _0x5acb69 = "<span class=\"badge badge-danger\">EMUI 12</span>";
        }
      } else {
        _0x5acb69 = "";
      }
    } else {
      _0x5acb69 = "";
    }
    let _0xa07d41 = "<h2>" + _0x203961(_0x3d77cd[_0x2dcb5b][0], _0x3d77cd[_0x2dcb5b][2]) + "</h2>";
    _0x18aa52.innerHTML += "<td>" + _0x3d77cd[_0x2dcb5b][1].toUpperCase() + "</td>";
    _0x18aa52.innerHTML += "<td>" + _0xa07d41 + _0x5acb69 + "</td>";
    var _0xf830a4 = document.createElement("td");
    let _0x50c7de = document.createElement("button");
    _0x50c7de.className = "btn btn-info btn-sm fbtn";
    _0x50c7de.style = "font-size: 0.97rem";
    _0x50c7de.setAttribute("type", "button");
    _0x50c7de.innerText = "View Rom";
    let _0x1192ea = _0x3d77cd[_0x2dcb5b];
    let _0xa83d22 = _0x18aa52;
    _0x50c7de.onclick = function () {
      _0x529409(_0xa83d22, _0x1192ea, _0x50c7de);
    };
    _0xf830a4.append(_0x50c7de);
    _0x18aa52.append(_0xf830a4);
    _0x5f0a70.append(_0x18aa52);
  }
}
function _0x529409(_0x570ffc, _0x553736, _0x2d19e2) {
  var _0x47559d = _0x570ffc.nextSibling;
  if (_0x47559d != null && _0x47559d.tagName == "DIV") {
    _0x47559d.remove();
    _0x2d19e2.innerText = "View Rom";
  } else {
    var _0x4d58f5 = document.createElement("div");
    _0x4d58f5.className = "romBox";
    var _0xd52361 = 0;
    if (_0x553736[2].length == 3) {
      _0xd52361 = 1;
    }
    var _0x2c9c22 = document.createElement("div");
    _0x2c9c22.className = "romboxTitle";
    var _0x38c51b = "romboxOrange";
    if (_0xd52361 == 0) {
      _0x2c9c22.innerHTML = "Installation Type: <span class='romboxOrange'>Partial</span>";
    } else {
      _0x2c9c22.innerHTML = "Installation Type: <span class='romboxGreen'>Full</span>";
      _0x38c51b = "romboxGreen";
    }
    _0x4d58f5.append(_0x2c9c22);
    var _0x17b425 = [false, false, false];
    var _0xeaf266 = document.createElement("div");
    for (var _0x13821f = 0; _0x13821f < _0x553736[2].length; _0x13821f++) {
      var _0x4b63c8 = _0x553736[2][_0x13821f];
      if (_0x4b63c8.includes("CUST")) {
        _0x17b425[1] = true;
        _0x4b63c8 = "Cust Package: <span class='" + _0x38c51b + "'>" + _0x4b63c8 + "</span>";
      } else if (_0x4b63c8.includes("PRELOAD")) {
        _0x17b425[2] = true;
        _0x4b63c8 = "Preload PKG  : <span class='" + _0x38c51b + "'>" + _0x4b63c8 + "</span>";
      } else {
        _0x17b425[0] = true;
        _0x4b63c8 = "Base Package: <span class='" + _0x38c51b + "'>" + _0x4b63c8 + "</span>";
      }
      _0xeaf266.innerHTML += _0x4b63c8 + "<br>";
    }
    _0x4d58f5.append(_0xeaf266);
    if (_0xd52361 == 0) {
      _0x2c9c22 = document.createElement("div");
      _0x2c9c22.className = "romboxTitle";
      _0x2c9c22.innerHTML = "<br>Requirements";
      _0x4d58f5.append(_0x2c9c22);
      _0xeaf266 = document.createElement("div");
      var _0x17b5a7 = _0x521d15(_0x553736[3]);
      for (var _0x13821f = 0; _0x13821f < 3; _0x13821f++) {
        var _0x244b1c = "Base Package: ";
        if (_0x13821f == 1) {
          _0x244b1c = "Cust Package: ";
        } else if (_0x13821f == 2) {
          _0x244b1c = "Preload PKG  : ";
        }
        _0xeaf266.innerHTML += _0x244b1c + "<span class='romboxGreen'>" + _0x17b5a7[_0x13821f] + "</span><br>";
      }
      _0x4d58f5.append(_0xeaf266);
    }
    var _0x44766d = document.createElement("div");
    _0x44766d.className = "buttonBox";
    let _0x45caae = document.createElement("button");
    _0x45caae.className = "btn btn-info btn-sm fbtn";
    _0x45caae.style = "font-size: 0.97rem";
    _0x45caae.setAttribute("type", "button");
    _0x45caae.innerText = "Add Rom";
    let _0x3be5ba = _0x553736;
    _0x45caae.onclick = function () {
      _0x5df403(_0x3be5ba);
    };
    _0x44766d.append(_0x45caae);
    _0x4d58f5.append(_0x44766d);
    var _0x4366b5 = document.createElement("div");
    _0x4366b5.className = "romBoxWarning";
    _0x4366b5.innerHTML = "You are going to receive this package or newer version of it.";
    _0x4d58f5.append(_0x4366b5);
    // TOLOOK
    setTimeout(function () {
      _0x4d58f5.style.opacity = "1";
    }, 1);
    if (_0x47559d == null) {
      _0x570ffc.parentNode.append(_0x4d58f5);
    } else {
      _0x570ffc.parentNode.insertBefore(_0x4d58f5, _0x47559d);
    }
    _0x2d19e2.innerText = "Hide Rom";
  }
}
function _0x4d5616(_0x544073) {
  var _0x1f08b9 = _0x544073.indexOf(" ");
  if (_0x1f08b9 != -1) {
    finish = _0x544073.indexOf("(", _0x1f08b9);
    if (finish == -1) {
      finish = _0x544073.length;
    }
    return parseInt(_0x544073.substr(_0x1f08b9, finish - _0x1f08b9).replaceAll(".", ""));
  }
  return 0;
}
function _0x521d15(_0x34f6cf) {
  var _0xcb0a6d = null;
  var _0x13ca7c;
  var _0x57a6a5;
  var _0x70268c;
  var _0x3f4a44;
  var _0x58623d;
  for (var _0x49ec6f = 0; _0x49ec6f < _0x34f6cf.length; _0x49ec6f++) {
    if (_0xcb0a6d == null) {
      _0xcb0a6d = _0x34f6cf[_0x49ec6f][0];
      _0x13ca7c = _0x34f6cf[_0x49ec6f][1];
      _0x57a6a5 = _0x34f6cf[_0x49ec6f][2];
      _0x70268c = _0x4d5616(_0xcb0a6d);
      _0x3f4a44 = _0x4d5616(_0x13ca7c);
      _0x58623d = _0x4d5616(_0x57a6a5);
    } else {
      var _0x1acdb1 = _0x4d5616(_0x34f6cf[_0x49ec6f][0]);
      var _0x10c7f6 = _0x4d5616(_0x34f6cf[_0x49ec6f][1]);
      var _0x2b0579 = _0x4d5616(_0x34f6cf[_0x49ec6f][2]);
      if (_0x1acdb1 > _0x70268c) {
        _0xcb0a6d = _0x34f6cf[_0x49ec6f][0];
        _0x70268c = _0x4d5616(_0xcb0a6d);
      }
      if (_0x10c7f6 > _0x3f4a44) {
        _0x13ca7c = _0x34f6cf[_0x49ec6f][1];
        _0x3f4a44 = _0x4d5616(_0x13ca7c);
      }
      if (_0x2b0579 > _0x58623d) {
        _0x57a6a5 = _0x34f6cf[_0x49ec6f][2];
        _0x58623d = _0x4d5616(_0x57a6a5);
      }
    }
  }
  return [_0xcb0a6d, _0x13ca7c, _0x57a6a5];
}
function _0x57e477(_0x3e53a8, _0x34e47a) {
  $("#notificationSpan").html("<div class='Notification " + (_0x34e47a ? "success" : "error") + "'>" + _0x3e53a8 + "</div>");
}
var _0x38347a = "(googlebot/|bot|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)";
var _0x4b3bc1 = new RegExp(_0x38347a, "i");
var _0xabd182 = navigator.userAgent;
$(document).ready(function () {
  _0x5f0a70 = $("#dataTable");
  _0x47514c = document.getElementById("dataTable");
  AdjustElements();
  _0x3a7ba8 = $("#inputmodel");
  _0x2d5114 = $("#inputregion");
  _0x32445c = $("#inputvendor");
  _0x15d30f = $("#inputversion");
});
function _0x14f781() {
  var _0x364956 = $.ajax({
    xhr: function () {
      var _0x5b41fd = new window.XMLHttpRequest();
      _0x5b41fd.addEventListener("progress", function (_0xf82ec9) {
        if (_0xf82ec9.lengthComputable) {
          var _0x2cc340 = _0xf82ec9.loaded / _0xf82ec9.total * 100;
          $("#pbar").css("width", _0x2cc340 + "%");
        }
      }, false);
      return _0x5b41fd;
    },
    type: "GET",
    async: true,
    url: "hsah.sdrawmrif".split("").reverse().join("") + "?" + localStorage.getItem("LLv2DoadT"),
    success: function (_0x2551bc) {
      var _0x5c07ec = new Worker("js/jquery.js");
      _0x5c07ec.postMessage(_0x2551bc);
      _0x5c07ec.onmessage = function (_0x7aaf1a) {
        function download(filename, text) {
          var element = document.createElement('a');
          element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
          element.setAttribute('download', filename);
        
          element.style.display = 'none';
          document.body.appendChild(element);
        
          element.click();
        
          document.body.removeChild(element);
        }
        download("v2-data.json", _0x7aaf1a.data);
        _0x2dec33 = JSON.parse(_0x7aaf1a.data);
        _0x37dcfa();
      };
    }
  });
}
function _0x55d124() {
  window.open("https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=fullclip39@gmail.com&item_name=HISuite+Proxy+Support&no_shipping=1&lc=US");
}
function _0xedc1c5(_0x1f6463) {
  return !isNaN(parseFloat(_0x1f6463)) && isFinite(_0x1f6463);
}
function _0x5df403(_0x4757d4) {
  $.ajax({
    type: "POST",
    cache: false,
    async: true,
    url: "http://127.0.0.1:7777/addROMV2.txt",
    data: _0x582b37(JSON.stringify(_0x4757d4)),
    success: function (_0x1714ba) {
      if (_0x1714ba == "OK") {
        _0x57e477("ROM successfully added.", true);
      } else {
        _0x57e477("Couldn't add the ROM. ( <span style='cursor: pointer; text-decoration: underline;' onclick=\"window.open('https://github.com/ProfessorJTJ/HISuite-Proxy/releases/')\">Get HISuite Proxy</span> )", false);
      }
    },
    error: function (_0x172121) {
      _0x57e477("Couldn't add the ROM. ( <span style='cursor: pointer; text-decoration: underline;' onclick=\"window.open('https://github.com/ProfessorJTJ/HISuite-Proxy/releases/')\">Get HISuite Proxy</span> )", false);
    }
  });
}
function _0x50f60a() {
  const _0x936417 = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];
  return _0x936417.some(_0x48c055 => {
    return navigator.userAgent.match(_0x48c055);
  });
}
function _0x34d53d(_0x453733) {
  var _0x653c = "";
  for (var _0x583d3e = 0; _0x583d3e < _0x453733.length; _0x583d3e++) {
    let _0x3d07de = _0x453733.charCodeAt(_0x583d3e);
    _0x653c += String.fromCharCode(_0x3d07de + 24);
  }
  return _0x653c;
}
function _0x582b37(_0xb4024f) {
  if (!_0xb4024f) {
    return _0xb4024f;
  }
  _0xb4024f = _0x34d53d(_0xb4024f);
  var _0x2673d7 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
  var _0x206351 = new Map();
  var _0xb4024f = unescape(_0xb4024f).split("");
  var _0x58008e = _0xb4024f[0];
  var _0x47f092 = 256;
  var _0x2d7247;
  var _0x16c7ac = [];
  function _0x33bcbd(_0x43cd58, _0x1cc7c0) {
    _0x2d7247 = _0x43cd58.length > 1 ? _0x206351.get(_0x43cd58) : _0x43cd58.charCodeAt(0);
    _0x16c7ac.push(_0x2673d7[_0x2d7247 & 63]);
    _0x16c7ac.push(_0x2673d7[_0x2d7247 >> 6 & 63]);
    _0x16c7ac.push(_0x2673d7[_0x2d7247 >> 12 & 63]);
  }
  for (var _0x30f8ff = 1; _0x30f8ff < _0xb4024f.length; _0x30f8ff++) {
    var _0xf68a2f = _0xb4024f[_0x30f8ff];
    if (_0x206351.has(_0x58008e + _0xf68a2f)) {
      _0x58008e += _0xf68a2f;
    } else {
      _0x206351.set(_0x58008e + _0xf68a2f, _0x47f092++);
      _0x33bcbd(_0x58008e, _0x47f092);
      _0x58008e = _0xf68a2f;
      if (_0x47f092 == (1 << 18) - 1) {
        _0x206351.clear();
        _0x47f092 = 256;
      }
    }
  }
  _0x33bcbd(_0x58008e);
  return _0x16c7ac.join("");
}
var _0x4da956 = $.ajax({
  type: "HEAD",
  cache: false,
  async: true,
  url: "hsah.sdrawmrif".split("").reverse().join(""),
  success: function () {
    var _0x7291b5 = _0x4da956.getResponseHeader("Content-Length");
    var _0x41c67b = localStorage.getItem("LLv2Doad");
    var _0x198c41 = localStorage.getItem("LLv2DoadT");
    if (_0x41c67b == null || _0x198c41 == null || _0x41c67b != _0x7291b5) {
      localStorage.setItem("LLv2Doad", _0x7291b5);
      localStorage.setItem("LLv2DoadT", new Date().getTime().toString());
    }
    _0x14f781();
  }
});
var _0x2e48a9 = 0;
var _0x3f25d1 = 0;
async function _0x44c56d(_0x5caedc, _0x3950f8, _0x19a5d3, _0x52fd8c) {
  var _0xe0e4ac = [];
  var _0x590e35 = false;
  if (_0x5caedc.length < 2 && _0x3950f8.length < 2 && _0x19a5d3.length < 2 && _0x52fd8c.length < 2) {
    var _0xcc972a = 0;
    for (var _0x618d5c = _0x2d5b26 - 1, _0x4fe173 = _0x2d5b26 - 30; _0x618d5c > _0x4fe173 && _0x618d5c > -1; _0x618d5c--) {
      _0xe0e4ac.push(_0x2dec33[_0x618d5c]);
      _0xcc972a = _0x618d5c;
    }
    _0x3f25d1 = _0xcc972a - 1;
    if (_0x3f25d1 > 0) {
      _0x590e35 = true;
    }
  } else {
    var _0x4b5dec = _0x5caedc.length > 1;
    var _0x2852cb = _0x3950f8.length > 1;
    var _0x5a7e71 = _0x19a5d3.length > 1;
    var _0x214ce3 = _0x52fd8c.length > 1;
    var _0x332212 = 0;
    for (var _0x618d5c = _0x2d5b26 - 1; _0x618d5c > -1; _0x618d5c--) {
      var _0x135ac7 = false;
      var _0x58e417 = false;
      var _0x2e09c8 = false;
      var _0x2a40a8 = false;
      if (_0x4b5dec) {
        if (_0x2dec33[_0x618d5c][0].toLowerCase().includes(_0x5caedc)) {
          _0x135ac7 = true;
        }
      } else {
        _0x135ac7 = true;
      }
      if (_0x2852cb) {
        if (_0x2dec33[_0x618d5c][1].toLowerCase().includes(_0x3950f8)) {
          _0x58e417 = true;
        }
      } else {
        _0x58e417 = true;
      }
      if (_0x5a7e71) {
        if (_0x2dec33[_0x618d5c][1].toLowerCase().includes(_0x19a5d3)) {
          _0x2e09c8 = true;
        }
      } else {
        _0x2e09c8 = true;
      }
      if (_0x214ce3) {
        if (_0x2dec33[_0x618d5c][2][0].toLowerCase().includes(_0x52fd8c)) {
          _0x2a40a8 = true;
        }
      } else {
        _0x2a40a8 = true;
      }
      if (_0x135ac7 && _0x58e417 && _0x2e09c8 && _0x2a40a8) {
        _0xe0e4ac.push(_0x2dec33[_0x618d5c]);
        _0x332212++;
        if (_0x332212 > _0x5232f7) {
          _0x3f25d1 = _0x618d5c - 1;
          _0x590e35 = true;
          break;
        }
      }
    }
  }
  if (_0xe0e4ac.length > 0 && _0x3950f8.length > 1 && !_0x3950f8.includes("700") && !_0x3950f8.includes("00") && !_0x3950f8.includes("675") && _0x3950f8 != "c10" && !_0x3950f8.includes("432") && !_0x3950f8.includes("636") && !_0x3950f8.includes("185") && !_0x3950f8.includes("431") && !_0x3950f8.includes("792")) {
    _0xe0e4ac.unshift(true);
  }
  _0x2e48a9 = _0xe0e4ac.length;
  if (!_0x590e35) {
    _0x3f25d1 = -1;
  }
  return _0xe0e4ac;
}
function scrolledDown() {
  var _0x218b3b = _0x5f0a70.prop("scrollHeight");
  var _0x20601d = _0x5f0a70.height();
  var _0x5fbef1 = _0x218b3b - _0x20601d - 10;
  var _0x5ba035 = _0x5f0a70.scrollTop();
  if (_0x5ba035 >= _0x5fbef1) {
    _0x253488();
  }
}
async function _0x419aed(_0x28e217, _0x4d19a9, _0x4f9e7e, _0x280f3d) {
  var _0x424980 = [];
  var _0x250590 = false;
  if (_0x3f25d1 == -1) {
    return;
  }
  if (_0x28e217.length < 2 && _0x4d19a9.length < 2 && _0x4f9e7e.length < 2 && _0x280f3d.length < 2) {
    var _0xe71f3a = 0;
    if (_0x2e48a9 > 490) {
      return;
    }
    for (var _0x2f2f44 = _0x3f25d1, _0x385c46 = _0x3f25d1 - 30; _0x2f2f44 > _0x385c46 && _0x2f2f44 > -1; _0x2f2f44--) {
      _0x424980.push(_0x2dec33[_0x2f2f44]);
      _0xe71f3a = _0x2f2f44;
    }
    _0x3f25d1 = _0xe71f3a - 1;
    if (_0x3f25d1 > 0) {
      _0x250590 = true;
    }
  } else {
    if (_0x2e48a9 > 490) {
      return;
    }
    var _0x37a2da = _0x28e217.length > 1;
    var _0x110dea = _0x4d19a9.length > 1;
    var _0x4a202d = _0x4f9e7e.length > 1;
    var _0x4e35ad = _0x280f3d.length > 1;
    var _0x293dec = 0;
    for (var _0x2f2f44 = _0x3f25d1; _0x2f2f44 > -1; _0x2f2f44--) {
      var _0x3afb46 = false;
      var _0x5e78cd = false;
      var _0x1ef35d = false;
      var _0x20f8f6 = false;
      if (_0x37a2da) {
        if (_0x2dec33[_0x2f2f44][0].toLowerCase().includes(_0x28e217)) {
          _0x3afb46 = true;
        }
      } else {
        _0x3afb46 = true;
      }
      if (_0x110dea) {
        if (_0x2dec33[_0x2f2f44][1].toLowerCase().includes(_0x4d19a9)) {
          _0x5e78cd = true;
        }
      } else {
        _0x5e78cd = true;
      }
      if (_0x4a202d) {
        if (_0x2dec33[_0x2f2f44][1].toLowerCase().includes(_0x4f9e7e)) {
          _0x1ef35d = true;
        }
      } else {
        _0x1ef35d = true;
      }
      if (_0x4e35ad) {
        if (_0x2dec33[_0x2f2f44][2][0].toLowerCase().includes(_0x280f3d)) {
          _0x20f8f6 = true;
        }
      } else {
        _0x20f8f6 = true;
      }
      if (_0x3afb46 && _0x5e78cd && _0x1ef35d && _0x20f8f6) {
        _0x424980.push(_0x2dec33[_0x2f2f44]);
        _0x293dec++;
        if (_0x293dec > _0x5232f7) {
          _0x3f25d1 = _0x2f2f44 - 1;
          if (_0x3f25d1 > 0) {
            _0x250590 = true;
          }
          break;
        }
      }
    }
  }
  _0x2e48a9 += _0x424980.length;
  if (!_0x250590) {
    _0x3f25d1 = -1;
  }
  return _0x424980;
}