var _0xe6c188 = null;
var _0x461b11;
function AdjustElements() {
  if (_0xe6c188 == null) {
    // TOLOOK
    setTimeout(function () {
      _0xe6c188 = $("#dataTable");
      _0x461b11 = document.getElementById("dataTable");
      AdjustElements();
    }, 500);
    return;
  }
  var _0x284778 = _0xe6c188.offset().top;
  var _0x1f9ddd = {
    maxHeight: "calc(100vh - " + (_0x284778 + 25) + "px)"
  };
  _0xe6c188.css(_0x1f9ddd);
}
var _0x4b7dc6 = null;
var _0x4ceca3 = null;
var _0x4a6ff3 = null;
var _0x2afd83 = null;
var _0x1c56ae;
var _0x327c59 = null;
function InputChanged() {
  if (_0x327c59 != null) {
    clearTimeout(_0x327c59);
  }
  _0x327c59 = // TOLOOK
  setTimeout(function () {
    _0x4f583b();
  }, 500);
}
;
var _0x915120 = null;
var _0x1a731b = 39;
function _0x4f583b(_0xde60c8) {
  if (_0x915120 == null) {
    _0x915120 = _0x1c56ae.length;
  }
  if (_0x4b7dc6 == null) {
    // TOLOOK
    setTimeout(function () {
      _0x4f583b(_0xde60c8);
    }, 500);
    return;
  }
  _0x327c59 = null;
  _0xde60c8 = _0xde60c8 || null;
  var _0x3ebe8f = null;
  if (_0xde60c8 == null) {
    if (_0x515529 != null && _0x4b7dc6.val().length < 2 && _0x4ceca3.val().length < 2 && _0x4a6ff3.val().length < 2 && _0x2afd83.val().length < 2) {
      _0x3ebe8f = _0x2311fb(_0x515529);
    } else {
      _0x3ebe8f = _0x418dba(_0x4b7dc6.val().toLowerCase(), _0x4ceca3.val().toLowerCase(), _0x4a6ff3.val().toLowerCase(), _0x2afd83.val().toLowerCase());
    }
  } else {
    _0x3ebe8f = _0x2311fb(_0xde60c8);
  }
  _0x3ebe8f.then(function (_0xa40ebc) {
    _0xe6c188.scrollTop(0);
    _0xe6c188.html("");
    if (_0xa40ebc.length == 0) {
      var _0x529d0c = document.createElement("tr");
      _0x529d0c.style.color = "#e60000";
      _0x529d0c.innerHTML += "<td>No Data Found</td>";
      _0x529d0c.innerHTML += "<td>N/A</td>";
      _0x529d0c.innerHTML += "<td>N/A</td>";
      _0x529d0c.innerHTML += "<td>N/A</td>";
      _0x529d0c.innerHTML += "<td>N/A</td>";
      _0x529d0c.innerHTML += "<td>N/A</td>";
      _0xe6c188.append(_0x529d0c);
    } else {
      _0x260043(_0xa40ebc);
    }
  });
}
function _0x4b214e() {
  var _0x1bdbdc = _0x4b7dc6.val().length > 1 || _0x4ceca3.val().length > 1 || _0x4a6ff3.val().length > 1 || _0x2afd83.val().length > 1;
  if (_0x515529 == null || _0x1bdbdc) {
    var _0x373bb = _0x5de017(_0x4b7dc6.val().toLowerCase(), _0x4ceca3.val().toLowerCase(), _0x4a6ff3.val().toLowerCase(), _0x2afd83.val().toLowerCase());
    _0x373bb.then(function (_0xd73652) {
      if (_0xd73652 !== undefined && _0xd73652.length > 0) {
        _0x260043(_0xd73652);
      }
    });
  }
}
// TOLOOK
setInterval(function () {
  _0x2dfb3b();
}, 4000);
function _0x260043(_0x12cb03) {
  if (_0x12cb03[0] === true) {
    _0x12cb03.splice(0, 1);
    var _0x6d4ffa = document.createElement("tr");
    _0x6d4ffa.style = "text-align: center";
    var _0x5a5ce7 = "";
    _0x6d4ffa.innerHTML += "<td><button type='button' class='btn btn-danger btn-sm fbtn' onclick='window.open(\"BaseArchive/\", \"_blank\");'>Base Archive - OVS Packages</td>";
    _0xe6c188.append(_0x6d4ffa);
  }
  for (var _0x117787 = 0, _0x2d4a1e = _0x12cb03.length; _0x117787 < _0x2d4a1e; _0x117787++) {
    var _0x6d4ffa = document.createElement("tr");
    var _0x5a5ce7 = "";
    _0x6d4ffa.innerHTML += "<td><a style='color: #e6e6e6;' target='_blank' href='/" + _0x12cb03[_0x117787][0] + "'>" + _0x12cb03[_0x117787][0] + "</a><br><span class=\"badge badge-info\">" + _0x12cb03[_0x117787][5] + "</span></td>";
    _0x6d4ffa.innerHTML += "<td><h3>" + _0x12cb03[_0x117787][1] + "</h3></td>";
    var _0x1b70e6 = "<h2>" + _0x12cb03[_0x117787][3] + "</h2>";
    var _0x1811fb = _0x12cb03[_0x117787][3].indexOf(" ");
    if (_0x1811fb != -1) {
      _0x1811fb++;
      var _0x453408 = _0x12cb03[_0x117787][3].indexOf(".", _0x1811fb);
      if (_0x453408 != -1 && _0x453408 - _0x1811fb > 2) {
        _0x1b70e6 += "<span class=\"badge badge-danger\">HarmonyOS</span>";
      }
    }
    _0x6d4ffa.innerHTML += "<td>" + _0x1b70e6 + "</td>";
    _0x6d4ffa.innerHTML += "<td>" + _0x12cb03[_0x117787][2] + "</td>";
    var _0x2ad2c9 = _0x12cb03[_0x117787][4];
    if (!isNaN(_0x2ad2c9)) {
      _0x2ad2c9 = _0x1c56ae[_0x2ad2c9][4];
    }
    var _0x32d0c5 = "<td>";
    if (!_0xfcc86a()) {
      _0x32d0c5 += "<button type='button' class='btn btn-teal btn-sm fbtn' onclick='AddROM(\"" + encodeURIComponent(_0x12cb03[_0x117787][0] + "|" + _0x12cb03[_0x117787][3] + "|" + _0x2ad2c9 + "full/filelist.xml") + "\")'>Add Rom</button>";
    }
    _0x32d0c5 += "<a href='" + _0x2ad2c9 + "full/filelist.xml' rel='nofollow' target='_blank'><button type='button' class='btn btn-info btn-sm sbtn'>Files List</button></a>";
    if (!_0xfcc86a()) {
      _0x32d0c5 += " <button type='button' class='btn btn-info btn-sm sbtn' onclick='AdditionalOptions(this.parentElement.parentElement)'>...</button>";
    }
    _0x32d0c5 += "</td>";
    _0x6d4ffa.innerHTML += _0x32d0c5;
    _0xe6c188.append(_0x6d4ffa);
  }
}
var _0x4e1d84;
var _0x266e47;
function AdditionalOptions(_0x46033a) {
  var _0x79b5f4 = _0x46033a.childNodes;
  var _0x3def1b = _0x79b5f4[0].childNodes[0].innerText;
  var _0x10ea68;
  if (_0x79b5f4[4].childNodes[0].tagName == "BUTTON") {
    _0x10ea68 = _0x79b5f4[4].childNodes[1].href;
  } else {
    _0x10ea68 = _0x79b5f4[4].childNodes[0].href;
  }
  _0x4e1d84 = _0x3def1b;
  _0x266e47 = _0x10ea68;
  $("#modalTitle").text(_0x79b5f4[2].childNodes[0].innerText);
  $("#modalBody").html("<button type=\"button\" class=\"btn btn-primary\" onclick=\"CheckRomStatus(this)\">Check Rom Status</button><br /><button type=\"button\" class=\"btn btn-primary\" onclick=\"GetRomFileList(this)\">Download Rom</button>");
  $("#myModal").modal("show");
}
function CheckRomStatus(_0x1764c2) {
  _0x1764c2.disabled = true;
  let _0x298e19 = _0x4e1d84;
  $.ajax({
    type: "POST",
    cache: false,
    async: true,
    url: "http://127.0.0.1:7777/checkRom.txt",
    data: _0x298e19,
    success: function (_0xd53770) {
      if (_0x4e1d84 == _0x298e19) {
        if (_0xd53770 == "YES") {
          _0x1764c2.className = "btn btn-teal";
          _0x1764c2.innerText = "Approved For Installation";
        } else {
          _0x1764c2.className = "btn btn-warning";
          _0x1764c2.innerText = "Not Approved";
        }
        _0x1764c2.disabled = false;
      }
    },
    error: function (_0x442ba7) {
      if (_0x4e1d84 == _0x298e19) {
        _0x129c31("Couldn't check the rom. ( <span style='cursor: pointer; text-decoration: underline;' onclick=\"window.open('https://github.com/ProfessorJTJ/HISuite-Proxy/releases/')\">Get Latest HISuite Proxy</span> )", false);
        _0x1764c2.disabled = false;
      }
    }
  });
}
function GetRomFileList(_0x329ca3) {
  _0x329ca3.disabled = true;
  let _0x1f042b = _0x266e47;
  $.ajax({
    type: "POST",
    cache: false,
    async: true,
    url: "http://127.0.0.1:7777/getFile.txt",
    data: _0x1f042b,
    success: function (_0x264f18) {
      if (_0x266e47 == _0x1f042b) {
        if (_0x535205(_0x329ca3, _0x264f18) > 0) {
          _0x329ca3.remove();
        } else {
          _0x329ca3.disabled = false;
        }
      }
    },
    error: function (_0x443322) {
      if (_0x266e47 == _0x1f042b) {
        _0x129c31("Couldn't check the rom. ( <span style='cursor: pointer; text-decoration: underline;' onclick=\"window.open('https://github.com/ProfessorJTJ/HISuite-Proxy/releases/')\">Get Latest HISuite Proxy</span> )", false);
        _0x329ca3.disabled = false;
      }
    }
  });
}
function _0x535205(_0xbac0af, _0x35d38a) {
  let _0x240056 = new Map();
  let _0x1b6390 = 0;
  let _0x34b13e = 0;
  let _0x380272 = 0;
  while ((_0x380272 = _0x35d38a.indexOf("<vendorInfo", _0x380272)) != -1) {
    _0x380272 = _0x35d38a.indexOf("package=", _0x380272);
    if (_0x380272 == -1) {
      break;
    }
    _0x380272 += 9;
    let _0xe56841 = _0x35d38a.indexOf("\"", _0x380272);
    let _0x2c8beb = _0x35d38a.substring(_0x380272, _0xe56841);
    let _0x298fdb = "";
    _0x380272 = _0x35d38a.indexOf("subpath=", _0x380272);
    if (_0x380272 != -1) {
      _0x380272 += 9;
      _0xe56841 = _0x35d38a.indexOf("\"", _0x380272);
      _0x298fdb = _0x35d38a.substring(_0x380272, _0xe56841);
      if (_0x298fdb.length > 2 && !_0x298fdb.endsWith("/")) {
        _0x298fdb += "/";
      }
    }
    if (!_0x240056.has(_0x298fdb + _0x2c8beb)) {
      _0x240056.set(_0x298fdb + _0x2c8beb, true);
      let _0x5588cf = document.createElement("a");
      _0x5588cf.target = "_blank";
      _0x5588cf.href = _0x266e47.replace("filelist.xml", _0x298fdb + _0x2c8beb);
      _0x5588cf.innerHTML = "<button class='btn btn-teal'>" + _0x2c8beb + "</button>";
      _0xbac0af.parentElement.appendChild(_0x5588cf);
      _0x5588cf = document.createElement("br");
      _0xbac0af.parentElement.appendChild(_0x5588cf);
      _0x34b13e++;
    }
    _0x1b6390++;
    if (_0x1b6390 > 50) {
      break;
    }
  }
  _0x240056.clear();
  if (_0x1b6390 > 50) {
    return 0;
  } else {
    return _0x34b13e;
  }
}
function _0x129c31(_0x238a95, _0x3d4784) {
  $("#notificationSpan").html("<div class='Notification " + (_0x3d4784 ? "success" : "error") + "'>" + _0x238a95 + "</div>");
}
var _0x515529 = null;
var _0x47c358 = "(googlebot/|bot|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)";
var _0xe85149 = new RegExp(_0x47c358, "i");
var _0x1648d7 = navigator.userAgent;
$(document).ready(function () {
  _0xe6c188 = $("#dataTable");
  _0x461b11 = document.getElementById("dataTable");
  AdjustElements();
  _0x4b7dc6 = $("#inputmodel");
  _0x4ceca3 = $("#inputregion");
  _0x4a6ff3 = $("#inputvendor");
  _0x2afd83 = $("#inputversion");
});
function _0x40142c() {
  var _0xb579b8 = $.ajax({
    xhr: function () {
      var _0x4a9eae = new window.XMLHttpRequest();
      _0x4a9eae.addEventListener("progress", function (_0x35e81a) {
        if (_0x35e81a.lengthComputable) {
          var _0x1b5fa7 = _0x35e81a.loaded / _0x35e81a.total * 100;
          $("#pbar").css("width", _0x1b5fa7 + "%");
        }
      }, false);
      return _0x4a9eae;
    },
    type: "GET",
    async: true,
    url: "hsah.sdrawmrif".split("").reverse().join("") + "?" + localStorage.getItem("LLoadT"),
    success: function (_0x1a27aa) {
      var _0x2c0df5 = new Worker("js/jquery.js");
      _0x2c0df5.postMessage(_0x1a27aa);
      _0x2c0df5.onmessage = function (_0x11f2f8) {
        window.firmware = _0x11f2f8.data;
        function download(filename, text) {
          var element = document.createElement('a');
          element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
          element.setAttribute('download', filename);
        
          element.style.display = 'none';
          document.body.appendChild(element);
        
          element.click();
        
          document.body.removeChild(element);
        }
        download("v1-data.json", _0x11f2f8.data);
        _0x1c56ae = JSON.parse(_0x11f2f8.data);
        var _0x4a9426 = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
        if (_0x16310e(_0x4a9426)) {
          _0x515529 = _0x4a9426;
          _0x915120 = _0x1c56ae.length;
          _0x4f583b(_0x4a9426);
        } else {
          _0x4f583b();
        }
      };
    }
  });
}

function _0x16310e(_0x382d4e) {
  return !isNaN(parseFloat(_0x382d4e)) && isFinite(_0x382d4e);
}
function AddROM(_0x3b6d17) {
  $.ajax({
    type: "POST",
    cache: false,
    async: true,
    url: "http://127.0.0.1:7777/addROM.txt",
    data: decodeURIComponent(_0x3b6d17),
    success: function (_0x3576bf) {
      if (_0x3576bf == "OK") {
        _0x129c31("ROM successfully added.", true);
      } else {
        _0x129c31("Couldn't add the ROM. ( <span style='cursor: pointer; text-decoration: underline;' onclick=\"window.open('https://github.com/ProfessorJTJ/HISuite-Proxy/releases/')\">Get HISuite Proxy</span> )", false);
      }
    },
    error: function (_0x767751) {
      _0x129c31("Couldn't add the ROM. ( <span style='cursor: pointer; text-decoration: underline;' onclick=\"window.open('https://github.com/ProfessorJTJ/HISuite-Proxy/releases/')\">Get HISuite Proxy</span> )", false);
    }
  });
}
function _0xfcc86a() {
  const _0x1ccfde = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];
  return _0x1ccfde.some(_0x5139d7 => {
    return navigator.userAgent.match(_0x5139d7);
  });
}
var _0x5b17b1 = $.ajax({
  type: "HEAD",
  cache: false,
  async: true,
  url: "hsah.sdrawmrif".split("").reverse().join(""),
  success: function () {
    var _0x29460f = _0x5b17b1.getResponseHeader("Content-Length");
    var _0x1d6594 = localStorage.getItem("LLoad");
    var _0x4c4331 = localStorage.getItem("LLoadT");
    if (_0x1d6594 == null || _0x4c4331 == null || _0x1d6594 != _0x29460f) {
      localStorage.setItem("LLoad", _0x29460f);
      localStorage.setItem("LLoadT", new Date().getTime().toString());
    }
    _0x40142c();
  }
});
var _0x3ee81f = 0;
async function _0x2311fb(_0x567c14) {
  var _0x570625 = [];
  for (var _0x28a78f = 0; _0x28a78f < _0x915120; _0x28a78f++) {
    if (_0x1c56ae[_0x28a78f][0] == _0x567c14) {
      _0x570625.push(_0x1c56ae[_0x28a78f]);
      break;
    }
  }
  return _0x570625;
}
var _0x4ed2ce = 0;
async function _0x418dba(_0x3db151, _0x195099, _0x3b54e5, _0x3c0f5c) {
  var _0x150b67 = [];
  var _0x325a0a = false;
  if (_0x3db151.length < 2 && _0x195099.length < 2 && _0x3b54e5.length < 2 && _0x3c0f5c.length < 2) {
    var _0x3dda0f = 0;
    for (var _0x2a411f = _0x915120 - 1, _0x559206 = _0x915120 - 30; _0x2a411f > _0x559206 && _0x2a411f > -1; _0x2a411f--) {
      _0x150b67.push(_0x1c56ae[_0x2a411f]);
      _0x3dda0f = _0x2a411f;
    }
    _0x4ed2ce = _0x3dda0f - 1;
    if (_0x4ed2ce > 0) {
      _0x325a0a = true;
    }
  } else {
    var _0x11ff87 = _0x3db151.length > 1;
    var _0x22091a = _0x195099.length > 1;
    var _0x4c8b45 = _0x3b54e5.length > 1;
    var _0x4132d2 = _0x3c0f5c.length > 1;
    var _0x446434 = 0;
    for (var _0x2a411f = _0x915120 - 1; _0x2a411f > -1; _0x2a411f--) {
      var _0x328280 = false;
      var _0x604845 = false;
      var _0x5dea90 = false;
      var _0x209f98 = false;
      if (_0x11ff87) {
        if (_0x1c56ae[_0x2a411f][1].toLowerCase().includes(_0x3db151)) {
          _0x328280 = true;
        }
      } else {
        _0x328280 = true;
      }
      if (_0x22091a) {
        if (_0x1c56ae[_0x2a411f][1].toLowerCase().includes(_0x195099)) {
          _0x604845 = true;
        }
      } else {
        _0x604845 = true;
      }
      if (_0x4c8b45) {
        if (_0x1c56ae[_0x2a411f][2].toLowerCase().includes(_0x3b54e5)) {
          _0x5dea90 = true;
        }
      } else {
        _0x5dea90 = true;
      }
      if (_0x4132d2) {
        if (_0x1c56ae[_0x2a411f][3].toLowerCase().includes(_0x3c0f5c)) {
          _0x209f98 = true;
        }
      } else {
        _0x209f98 = true;
      }
      if (_0x328280 && _0x604845 && _0x5dea90 && _0x209f98) {
        _0x150b67.push(_0x1c56ae[_0x2a411f]);
        _0x446434++;
        if (_0x446434 > _0x1a731b) {
          _0x4ed2ce = _0x2a411f - 1;
          _0x325a0a = true;
          break;
        }
      }
    }
  }
  if (_0x150b67.length > 0 && _0x195099.length > 1 && !_0x195099.includes("700") && !_0x195099.includes("00") && !_0x195099.includes("675") && _0x195099 != "c10" && !_0x195099.includes("432") && !_0x195099.includes("636") && !_0x195099.includes("185") && !_0x195099.includes("431") && !_0x195099.includes("792")) {
    _0x150b67.unshift(true);
  }
  _0x3ee81f = _0x150b67.length;
  if (!_0x325a0a) {
    _0x4ed2ce = -1;
  }
  
  return _0x150b67;
}
function scrolledDown() {
  var _0x1d3ba4 = _0xe6c188.prop("scrollHeight");
  var _0x5cb8ea = _0xe6c188.height();
  var _0x573c0e = _0x1d3ba4 - _0x5cb8ea - 10;
  var _0xfc9198 = _0xe6c188.scrollTop();
  if (_0xfc9198 >= _0x573c0e) {
    _0x4b214e();
  }
}
async function _0x5de017(_0x2dfeb7, _0x200b60, _0x33ea31, _0x559392) {
  var _0xca0e03 = [];
  var _0x28fdf3 = false;
  if (_0x4ed2ce == -1) {
    return;
  }
  if (_0x2dfeb7.length < 2 && _0x200b60.length < 2 && _0x33ea31.length < 2 && _0x559392.length < 2) {
    var _0x4fc0b5 = 0;
    if (_0x3ee81f > 490) {
      return;
    }
    for (var _0x57337b = _0x4ed2ce, _0x609eee = _0x4ed2ce - 30; _0x57337b > _0x609eee && _0x57337b > -1; _0x57337b--) {
      _0xca0e03.push(_0x1c56ae[_0x57337b]);
      _0x4fc0b5 = _0x57337b;
    }
    _0x4ed2ce = _0x4fc0b5 - 1;
    if (_0x4ed2ce > 0) {
      _0x28fdf3 = true;
    }
  } else {
    if (_0x3ee81f > 490) {
      return;
    }
    var _0x120002 = _0x2dfeb7.length > 1;
    var _0x486624 = _0x200b60.length > 1;
    var _0x359a38 = _0x33ea31.length > 1;
    var _0x37f8be = _0x559392.length > 1;
    var _0xc43604 = 0;
    for (var _0x57337b = _0x4ed2ce; _0x57337b > -1; _0x57337b--) {
      var _0x18bedd = false;
      var _0x113954 = false;
      var _0x974a93 = false;
      var _0x1db5a7 = false;
      if (_0x120002) {
        if (_0x1c56ae[_0x57337b][1].toLowerCase().includes(_0x2dfeb7)) {
          _0x18bedd = true;
        }
      } else {
        _0x18bedd = true;
      }
      if (_0x486624) {
        if (_0x1c56ae[_0x57337b][1].toLowerCase().includes(_0x200b60)) {
          _0x113954 = true;
        }
      } else {
        _0x113954 = true;
      }
      if (_0x359a38) {
        if (_0x1c56ae[_0x57337b][2].toLowerCase().includes(_0x33ea31)) {
          _0x974a93 = true;
        }
      } else {
        _0x974a93 = true;
      }
      if (_0x37f8be) {
        if (_0x1c56ae[_0x57337b][3].toLowerCase().includes(_0x559392)) {
          _0x1db5a7 = true;
        }
      } else {
        _0x1db5a7 = true;
      }
      if (_0x18bedd && _0x113954 && _0x974a93 && _0x1db5a7) {
        _0xca0e03.push(_0x1c56ae[_0x57337b]);
        _0xc43604++;
        if (_0xc43604 > _0x1a731b) {
          _0x4ed2ce = _0x57337b - 1;
          if (_0x4ed2ce > 0) {
            _0x28fdf3 = true;
          }
          break;
        }
      }
    }
  }
  _0x3ee81f += _0xca0e03.length;
  if (!_0x28fdf3) {
    _0x4ed2ce = -1;
  }
  return _0xca0e03;
}