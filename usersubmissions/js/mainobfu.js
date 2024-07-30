var Element = null;
var dataTable;
function AdjustElements() {
  if (Element == null) {
    // TOLOOK
    setTimeout(function () {
      Element = $("#dataTable");
      dataTable = document.getElementById("dataTable");
      AdjustElements();
    }, 500);
    return;
  }
  var _0x37b407 = Element.offset().top;
  const _0x5669cf = {
    maxHeight: "calc(100vh - " + (_0x37b407 + 25) + "px)"
  };
  Element.css(_0x5669cf);
}
var InputModel = null;
var InputRegion = null;
var InputVendor = null;
var InputVersion = null;
var taDataOkPLAZE;
var theTimer = null;
function InputChanged() {
  if (theTimer != null) {
    clearTimeout(theTimer);
  }
  theTimer = // TOLOOK
  setTimeout(function () {
    SetDataTable();
  }, 500);
}
;
var FirmLen = null;
var DataLimit = 39;
function SetDataTable() {
  if (FirmLen == null) {
    FirmLen = taDataOkPLAZE.length;
  }
  if (InputModel == null) {
    // TOLOOK
    setTimeout(function () {
      SetDataTable();
    }, 500);
    return;
  }
  theTimer = null;
  var _0x2c6b6c = SearchForRom(InputModel.val().toLowerCase(), InputRegion.val().toLowerCase(), InputVendor.val().toLowerCase(), InputVersion.val().toLowerCase());
  _0x2c6b6c.then(function (_0x49e46b) {
    Element.scrollTop(0);
    Element.html("");
    if (_0x49e46b.length == 0) {
      var _0x4bdbe4 = document.createElement("tr");
      _0x4bdbe4.style.color = "#e60000";
      _0x4bdbe4.innerHTML += "<td>No Data Found</td>";
      _0x4bdbe4.innerHTML += "<td>N/A</td>";
      _0x4bdbe4.innerHTML += "<td>N/A</td>";
      _0x4bdbe4.innerHTML += "<td>N/A</td>";
      Element.append(_0x4bdbe4);
    } else {
      parseOutput(_0x49e46b);
    }
  });
}
function ResumeDataTable() {
  var _0x512e26 = InputModel.val().length > 1 || InputRegion.val().length > 1 || InputVendor.val().length > 1 || InputVersion.val().length > 1;
  if (_0x512e26) {
    var _0x351918 = resumeSearch(InputModel.val().toLowerCase(), InputRegion.val().toLowerCase(), InputVendor.val().toLowerCase(), InputVersion.val().toLowerCase());
    _0x351918.then(function (_0x420867) {
      if (_0x420867 !== undefined && _0x420867.length > 0) {
        parseOutput(_0x420867);
      }
    });
  }
}
function getRomName(_0x249896, _0x232aae) {
  if (_0x232aae.length > 2) {
    let _0x19595 = null;
    let _0x44d131 = null;
    let _0x12550f = null;
    let _0x3c7482 = null;
    let _0x5cf5cc = null;
    let _0x4bbe4c = _0x232aae[0][0].indexOf(" ", 5);
    if (_0x4bbe4c != -1) {
      _0x19595 = _0x232aae[0][0].substr(_0x4bbe4c);
    }
    _0x4bbe4c = _0x232aae[1][0].lastIndexOf(".");
    if (_0x4bbe4c != -1) {
      _0x4bbe4c++;
      let _0x1585db = _0x232aae[1][0].indexOf("(", _0x4bbe4c);
      if (_0x1585db != -1) {
        _0x12550f = "E" + _0x232aae[1][0].substring(_0x4bbe4c, _0x1585db);
      }
    }
    _0x4bbe4c = _0x232aae[1][0].lastIndexOf("(");
    if (_0x4bbe4c != -1) {
      _0x4bbe4c++;
      let _0x2c5be6 = _0x232aae[1][0].indexOf(")", _0x4bbe4c);
      if (_0x2c5be6 != -1) {
        _0x44d131 = _0x232aae[1][0].substring(_0x4bbe4c, _0x2c5be6);
      }
    }
    _0x4bbe4c = _0x232aae[2][0].lastIndexOf(".");
    if (_0x4bbe4c != -1) {
      _0x4bbe4c++;
      let _0x1b8968 = _0x232aae[2][0].indexOf("(", _0x4bbe4c);
      if (_0x1b8968 != -1) {
        _0x5cf5cc = "P" + _0x232aae[2][0].substring(_0x4bbe4c, _0x1b8968) + ")";
      }
    }
    _0x4bbe4c = _0x232aae[2][0].lastIndexOf("R");
    if (_0x4bbe4c != -1) {
      let _0x4c0ba3 = _0x232aae[2][0].indexOf(")", _0x4bbe4c);
      if (_0x4c0ba3 != -1) {
        _0x3c7482 = _0x232aae[2][0].substring(_0x4bbe4c, _0x4c0ba3);
      }
    }
    if (_0x19595 != null && _0x44d131 != null && _0x12550f != null && _0x3c7482 != null && _0x5cf5cc != null) {
      return _0x249896 + _0x19595 + "(" + _0x44d131 + _0x12550f + _0x3c7482 + _0x5cf5cc;
    } else {
      return _0x232aae[0][0];
    }
  } else {
    return _0x232aae[0][0];
  }
}
function parseOutput(_0x2684e1) {
  if (_0x2684e1[0] === true) {
    _0x2684e1.splice(0, 1);
  }
  for (var _0x1ff220 = 0, _0x1193ac = _0x2684e1.length; _0x1ff220 < _0x1193ac; _0x1ff220++) {
    var _0x10cb9b = document.createElement("tr");
    var _0x1a92ba = "";
    _0x10cb9b.innerHTML += "<td><h3>" + _0x2684e1[_0x1ff220][0] + "</h3></td>";
    var _0x272208 = _0x2684e1[_0x1ff220][2][0][0];
    var _0xb1f8ce = _0x2684e1[_0x1ff220][2][0][0].indexOf(" ");
    if (_0xb1f8ce != -1) {
      _0xb1f8ce++;
      var _0x5a8e8c = _0x2684e1[_0x1ff220][2][0][0].indexOf(".", _0xb1f8ce);
      if (_0x5a8e8c != -1 && _0x5a8e8c - _0xb1f8ce > 2) {
        _0xb1f8ce += 2;
        let _0x3fcff3 = _0x2684e1[_0x1ff220][2][0][0].substr(_0xb1f8ce, _0x5a8e8c - _0xb1f8ce);
        if (_0x272208.includes("CHN")) {
          _0x272208 = "<span class=\"badge badge-danger\">HarmonyOS</span>";
        } else {
          _0x272208 = "<span class=\"badge badge-danger\">EMUI 1" + _0x3fcff3 + "</span>";
        }
      } else {
        _0x272208 = "";
      }
    } else {
      _0x272208 = "";
    }
    let _0x2e000b = "<h2>" + getRomName(_0x2684e1[_0x1ff220][0], _0x2684e1[_0x1ff220][2]) + "</h2>";
    _0x10cb9b.innerHTML += "<td>" + _0x2684e1[_0x1ff220][1].toUpperCase() + "</td>";
    _0x10cb9b.innerHTML += "<td>" + _0x2e000b + " " + _0x272208 + "</td>";
    var _0x134cd4 = document.createElement("td");
    let _0x26c666 = document.createElement("button");
    _0x26c666.className = "btn btn-info btn-sm fbtn";
    _0x26c666.style = "font-size: 0.97rem";
    _0x26c666.setAttribute("type", "button");
    _0x26c666.innerText = "View Rom";
    let _0x188d1d = _0x2684e1[_0x1ff220];
    let _0x267add = _0x10cb9b;
    _0x26c666.onclick = function () {
      appendRomDataToElement(_0x267add, _0x188d1d, _0x26c666);
    };
    _0x134cd4.append(_0x26c666);
    _0x10cb9b.append(_0x134cd4);
    Element.append(_0x10cb9b);
  }
}
function appendRomDataToElement(_0x31200f, _0x1611e2, _0x11f3b6) {
  var _0x2b5ced = _0x31200f.nextSibling;
  if (_0x2b5ced != null && _0x2b5ced.tagName == "DIV") {
    _0x2b5ced.remove();
    _0x11f3b6.innerText = "View Rom";
  } else {
    var _0x271aa8 = document.createElement("div");
    _0x271aa8.className = "romBox";
    var _0x343b0a = 0;
    if (_0x1611e2[2].length == 3) {
      _0x343b0a = 1;
    }
    var _0x11ef60 = document.createElement("div");
    _0x11ef60.className = "romboxTitle";
    var _0x1f0d47 = "romboxOrange";
    if (_0x343b0a == 0) {
      _0x11ef60.innerHTML = "Installation Type: <span class='romboxOrange'>Partial</span>";
    } else {
      _0x11ef60.innerHTML = "Installation Type: <span class='romboxGreen'>Full</span>";
      _0x1f0d47 = "romboxGreen";
    }
    _0x271aa8.append(_0x11ef60);
    var _0x49cb76 = [false, false, false];
    var _0x522f97 = document.createElement("div");
    for (var _0xfacb78 = 0; _0xfacb78 < _0x1611e2[2].length; _0xfacb78++) {
      var _0x17ec91 = _0x1611e2[2][_0xfacb78][0];
      if (_0x17ec91.includes("CUST")) {
        _0x49cb76[1] = true;
        let _0x424440 = null;
        if (_0x1611e2[2][_0xfacb78].length > 1) {
          _0x424440 = _0x1611e2[2][_0xfacb78][1] + "full/filelist.xml";
        }
        if (_0x424440 == null) {
          _0x17ec91 = "Cust Package: <span class='" + _0x1f0d47 + "'>" + _0x17ec91 + "</span>";
        } else {
          _0x17ec91 = "Cust Package: <a href='" + _0x424440 + "' target='_blank'><span class='" + _0x1f0d47 + "'>" + _0x17ec91 + "</span></a>";
        }
      } else if (_0x17ec91.includes("PRELOAD")) {
        let _0x31c3af = null;
        if (_0x1611e2[2][_0xfacb78].length > 1) {
          _0x31c3af = _0x1611e2[2][_0xfacb78][1] + "full/filelist.xml";
        }
        _0x49cb76[2] = true;
        if (_0x31c3af == null) {
          _0x17ec91 = "Preload PKG  : <span class='" + _0x1f0d47 + "'>" + _0x17ec91 + "</span>";
        } else {
          _0x17ec91 = "Preload PKG  : <a href='" + _0x31c3af + "' target='_blank'><span class='" + _0x1f0d47 + "'>" + _0x17ec91 + "</span></a>";
        }
      } else {
        let _0x3798f2 = null;
        if (_0x1611e2[2][_0xfacb78].length > 1) {
          _0x3798f2 = _0x1611e2[2][_0xfacb78][1] + "full/filelist.xml";
        }
        _0x49cb76[0] = true;
        if (_0x3798f2 == null) {
          _0x17ec91 = "Base Package: <span class='" + _0x1f0d47 + "'>" + _0x17ec91 + "</span>";
        } else {
          _0x17ec91 = "Base Package: <a href='" + _0x3798f2 + "' target='_blank'><span class='" + _0x1f0d47 + "'>" + _0x17ec91 + "</span></a>";
        }
      }
      _0x522f97.innerHTML += _0x17ec91 + "<br>";
    }
    _0x271aa8.append(_0x522f97);
    if (_0x343b0a == 0) {
      _0x11ef60 = document.createElement("div");
      _0x11ef60.className = "romboxTitle";
      _0x11ef60.innerHTML = "<br>Requirements";
      _0x271aa8.append(_0x11ef60);
      _0x522f97 = document.createElement("div");
      var _0x49ad37 = findRequirements(_0x1611e2[3]);
      for (var _0xfacb78 = 0; _0xfacb78 < 3; _0xfacb78++) {
        var _0x1dd11b = "Base Package: ";
        if (_0xfacb78 == 1) {
          _0x1dd11b = "Cust Package: ";
        } else if (_0xfacb78 == 2) {
          _0x1dd11b = "Preload PKG  : ";
        }
        _0x522f97.innerHTML += _0x1dd11b + "<span class='romboxGreen'>" + _0x49ad37[_0xfacb78] + "</span><br>";
      }
      _0x271aa8.append(_0x522f97);
    }
    var _0x393537 = document.createElement("div");
    _0x393537.className = "buttonBox";
    let _0x42c4b2 = document.createElement("button");
    _0x42c4b2.className = "btn btn-info btn-sm fbtn";
    _0x42c4b2.style = "font-size: 0.97rem";
    _0x42c4b2.setAttribute("type", "button");
    _0x42c4b2.innerText = "Add Rom";
    let _0x523dab = _0x1611e2;
    _0x42c4b2.onclick = function () {
      AddROMv2(_0x523dab);
    };
    _0x393537.append(_0x42c4b2);
    _0x271aa8.append(_0x393537);
    var _0x4ac881 = document.createElement("div");
    _0x4ac881.className = "romBoxWarning";
    _0x4ac881.innerHTML = "You are going to receive this package or newer version of it.";
    _0x271aa8.append(_0x4ac881);
    // TOLOOK
    setTimeout(function () {
      _0x271aa8.style.opacity = "1";
    }, 1);
    if (_0x2b5ced == null) {
      _0x31200f.parentNode.append(_0x271aa8);
    } else {
      _0x31200f.parentNode.insertBefore(_0x271aa8, _0x2b5ced);
    }
    _0x11f3b6.innerText = "Hide Rom";
  }
}
function getPackageValue(_0x2b9997) {
  var _0x55f3b3 = _0x2b9997.indexOf(" ");
  if (_0x55f3b3 != -1) {
    finish = _0x2b9997.indexOf("(", _0x55f3b3);
    if (finish == -1) {
      finish = _0x2b9997.length;
    }
    return parseInt(_0x2b9997.substr(_0x55f3b3, finish - _0x55f3b3).replaceAll(".", ""));
  }
  return 0;
}
function findRequirements(_0xb793d0) {
  var _0x30fe0c = null;
  var _0x543800;
  var _0x1a4b04;
  var _0x2115b8;
  var _0x5c7181;
  var _0x36e114;
  for (var _0x202954 = 0; _0x202954 < _0xb793d0.length; _0x202954++) {
    if (_0x30fe0c == null) {
      _0x30fe0c = _0xb793d0[_0x202954][0];
      _0x543800 = _0xb793d0[_0x202954][1];
      _0x1a4b04 = _0xb793d0[_0x202954][2];
      _0x2115b8 = getPackageValue(_0x30fe0c);
      _0x5c7181 = getPackageValue(_0x543800);
      _0x36e114 = getPackageValue(_0x1a4b04);
    } else {
      var _0x392f04 = getPackageValue(_0xb793d0[_0x202954][0]);
      var _0x484d8e = getPackageValue(_0xb793d0[_0x202954][1]);
      var _0x41b1bd = getPackageValue(_0xb793d0[_0x202954][2]);
      if (_0x392f04 > _0x2115b8) {
        _0x30fe0c = _0xb793d0[_0x202954][0];
        _0x2115b8 = getPackageValue(_0x30fe0c);
      }
      if (_0x484d8e > _0x5c7181) {
        _0x543800 = _0xb793d0[_0x202954][1];
        _0x5c7181 = getPackageValue(_0x543800);
      }
      if (_0x41b1bd > _0x36e114) {
        _0x1a4b04 = _0xb793d0[_0x202954][2];
        _0x36e114 = getPackageValue(_0x1a4b04);
      }
    }
  }
  return [_0x30fe0c, _0x543800, _0x1a4b04];
}
function Notify(_0x23a9ce, _0x3cd146) {
  $("#notificationSpan").html("<div class='Notification " + (_0x3cd146 ? "success" : "error") + "'>" + _0x23a9ce + "</div>");
}
var botPattern = "(googlebot/|bot|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)";
var re = new RegExp(botPattern, "i");
var userAgent = navigator.userAgent;
$(document).ready(function () {
  Element = $("#dataTable");
  dataTable = document.getElementById("dataTable");
  AdjustElements();
  InputModel = $("#inputmodel");
  InputRegion = $("#inputregion");
  InputVendor = $("#inputvendor");
  InputVersion = $("#inputversion");
});
function LoadDatabase() {
  var _0x4c77df = $.ajax({
    xhr: function () {
      var _0x368afb = new window.XMLHttpRequest();
      _0x368afb.addEventListener("progress", function (_0x4af25a) {
        if (_0x4af25a.lengthComputable) {
          var _0x1a20f7 = _0x4af25a.loaded / _0x4af25a.total * 100;
          $("#pbar").css("width", _0x1a20f7 + "%");
        }
      }, false);
      return _0x368afb;
    },
    type: "GET",
    async: true,
    url: "hsah.sdrawmrif".split("").reverse().join("") + "?" + localStorage.getItem("LLv2DoadT"),
    success: function (_0x126081) {
      var _0x26ef05 = new Worker("js/jquery.js");
      _0x26ef05.postMessage(_0x126081);
      _0x26ef05.onmessage = function (_0x1fce7a) {
        function download(filename, text) {
            var element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
            element.setAttribute('download', filename);
          
            element.style.display = 'none';
            document.body.appendChild(element);
          
            element.click();
          
            document.body.removeChild(element);
          }
          download("usersubmissions-data.json", _0x1fce7a.data);
        taDataOkPLAZE = JSON.parse(_0x1fce7a.data);
        SetDataTable();
      };
    }
  });
}
function DonateWoohoo() {
  window.open("https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=fullclip39@gmail.com&item_name=HISuite+Proxy+Support&no_shipping=1&lc=US");
}
function isNumeric(_0x694b4d) {
  return !isNaN(parseFloat(_0x694b4d)) && isFinite(_0x694b4d);
}
function AddROMv2(_0xcf7e92) {
  let _0x25f1b5 = [_0xcf7e92[0], _0xcf7e92[1], [_0xcf7e92[2][0][0], _0xcf7e92[2][1][0], _0xcf7e92[2][2][0]], _0xcf7e92[3], _0xcf7e92[4], _0xcf7e92[5]];
  $.ajax({
    type: "POST",
    cache: false,
    async: true,
    url: "http://127.0.0.1:7777/addROMV2.txt",
    data: encodethedata(JSON.stringify(_0x25f1b5)),
    success: function (_0x41dfda) {
      if (_0x41dfda == "OK") {
        Notify("ROM successfully added.", true);
      } else {
        Notify("Couldn't add the ROM. ( <span style='cursor: pointer; text-decoration: underline;' onclick=\"window.open('https://github.com/ProfessorJTJ/HISuite-Proxy/releases/')\">Get HISuite Proxy</span> )", false);
      }
    },
    error: function (_0x1de8c7) {
      Notify("Couldn't add the ROM. ( <span style='cursor: pointer; text-decoration: underline;' onclick=\"window.open('https://github.com/ProfessorJTJ/HISuite-Proxy/releases/')\">Get HISuite Proxy</span> )", false);
    }
  });
}
function detectMob() {
  const _0x12f097 = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];
  return _0x12f097.some(_0x169939 => {
    return navigator.userAgent.match(_0x169939);
  });
}
function encrypstring(_0x574de6) {
  var _0x243f1f = "";
  for (var _0x2ec75e = 0; _0x2ec75e < _0x574de6.length; _0x2ec75e++) {
    let _0x777aa2 = _0x574de6.charCodeAt(_0x2ec75e);
    _0x243f1f += String.fromCharCode(_0x777aa2 + 24);
  }
  return _0x243f1f;
}
function encodethedata(_0x6b7a34) {
  if (!_0x6b7a34) {
    return _0x6b7a34;
  }
  _0x6b7a34 = encrypstring(_0x6b7a34);
  var _0x44dee4 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
  var _0x5031c9 = new Map();
  var _0x6b7a34 = unescape(_0x6b7a34).split("");
  var _0x566c80 = _0x6b7a34[0];
  var _0x3e7a10 = 256;
  var _0x55e39f;
  var _0x1d5c8a = [];
  function _0x4cb6b0(_0x112648, _0x311e72) {
    _0x55e39f = _0x112648.length > 1 ? _0x5031c9.get(_0x112648) : _0x112648.charCodeAt(0);
    _0x1d5c8a.push(_0x44dee4[_0x55e39f & 63]);
    _0x1d5c8a.push(_0x44dee4[_0x55e39f >> 6 & 63]);
    _0x1d5c8a.push(_0x44dee4[_0x55e39f >> 12 & 63]);
  }
  for (var _0x2b8ed2 = 1; _0x2b8ed2 < _0x6b7a34.length; _0x2b8ed2++) {
    var _0x13c8c0 = _0x6b7a34[_0x2b8ed2];
    if (_0x5031c9.has(_0x566c80 + _0x13c8c0)) {
      _0x566c80 += _0x13c8c0;
    } else {
      _0x5031c9.set(_0x566c80 + _0x13c8c0, _0x3e7a10++);
      _0x4cb6b0(_0x566c80, _0x3e7a10);
      _0x566c80 = _0x13c8c0;
      if (_0x3e7a10 == (1 << 18) - 1) {
        _0x5031c9.clear();
        _0x3e7a10 = 256;
      }
    }
  }
  _0x4cb6b0(_0x566c80);
  return _0x1d5c8a.join("");
}
var xhr = $.ajax({
  type: "HEAD",
  cache: false,
  async: true,
  url: "hsah.sdrawmrif".split("").reverse().join(""),
  success: function () {
    var _0x47a665 = xhr.getResponseHeader("Content-Length");
    var _0x5e906b = localStorage.getItem("LLv2Doad");
    var _0xc1fbc9 = localStorage.getItem("LLv2DoadT");
    if (_0x5e906b == null || _0xc1fbc9 == null || _0x5e906b != _0x47a665) {
      localStorage.setItem("LLv2Doad", _0x47a665);
      localStorage.setItem("LLv2DoadT", new Date().getTime().toString());
    }
    LoadDatabase();
  }
});
var insertedRom = 0;
var lastIndex = 0;
async function SearchForRom(_0x557776, _0x207fce, _0xba2ba1, _0x246f2a) {
  var _0x35e4af = [];
  var _0x591523 = false;
  if (_0x557776.length < 2 && _0x207fce.length < 2 && _0xba2ba1.length < 2 && _0x246f2a.length < 2) {
    var _0x1c8156 = 0;
    for (var _0x3dc0c9 = FirmLen - 1, _0x885fb = FirmLen - 30; _0x3dc0c9 > _0x885fb && _0x3dc0c9 > -1; _0x3dc0c9--) {
      _0x35e4af.push(taDataOkPLAZE[_0x3dc0c9]);
      _0x1c8156 = _0x3dc0c9;
    }
    lastIndex = _0x1c8156 - 1;
    if (lastIndex > 0) {
      _0x591523 = true;
    }
  } else {
    var _0x5eb43b = _0x557776.length > 1;
    var _0x43b086 = _0x207fce.length > 1;
    var _0x18ba91 = _0xba2ba1.length > 1;
    var _0x2c3f94 = _0x246f2a.length > 1;
    var _0x3060da = 0;
    for (var _0x3dc0c9 = FirmLen - 1; _0x3dc0c9 > -1; _0x3dc0c9--) {
      var _0x56b9d6 = false;
      var _0x13ceac = false;
      var _0x37f36f = false;
      var _0x496f2f = false;
      if (_0x5eb43b) {
        if (taDataOkPLAZE[_0x3dc0c9][0].toLowerCase().includes(_0x557776)) {
          _0x56b9d6 = true;
        }
      } else {
        _0x56b9d6 = true;
      }
      if (_0x43b086) {
        if (taDataOkPLAZE[_0x3dc0c9][1].toLowerCase().includes(_0x207fce)) {
          _0x13ceac = true;
        }
      } else {
        _0x13ceac = true;
      }
      if (_0x18ba91) {
        if (taDataOkPLAZE[_0x3dc0c9][1].toLowerCase().includes(_0xba2ba1)) {
          _0x37f36f = true;
        }
      } else {
        _0x37f36f = true;
      }
      if (_0x2c3f94) {
        if (taDataOkPLAZE[_0x3dc0c9][2][0][0].toLowerCase().includes(_0x246f2a)) {
          _0x496f2f = true;
        }
      } else {
        _0x496f2f = true;
      }
      if (_0x56b9d6 && _0x13ceac && _0x37f36f && _0x496f2f) {
        _0x35e4af.push(taDataOkPLAZE[_0x3dc0c9]);
        _0x3060da++;
        if (_0x3060da > DataLimit) {
          lastIndex = _0x3dc0c9 - 1;
          _0x591523 = true;
          break;
        }
      }
    }
  }
  if (_0x35e4af.length > 0 && _0x207fce.length > 1 && !_0x207fce.includes("700") && !_0x207fce.includes("00") && !_0x207fce.includes("675") && _0x207fce != "c10" && !_0x207fce.includes("432") && !_0x207fce.includes("636") && !_0x207fce.includes("185") && !_0x207fce.includes("431") && !_0x207fce.includes("792")) {
    _0x35e4af.unshift(true);
  }
  insertedRom = _0x35e4af.length;
  if (!_0x591523) {
    lastIndex = -1;
  }
  return _0x35e4af;
}
function scrolledDown() {
  var _0x17b30c = Element.prop("scrollHeight");
  var _0x507e78 = Element.height();
  var _0x2cd628 = _0x17b30c - _0x507e78 - 10;
  var _0x40245c = Element.scrollTop();
  if (_0x40245c >= _0x2cd628) {
    ResumeDataTable();
  }
}
async function resumeSearch(_0x3ec4bc, _0x398e87, _0x506342, _0xf70990) {
  var _0x2502ed = [];
  var _0x4cf948 = false;
  if (lastIndex == -1) {
    return;
  }
  if (_0x3ec4bc.length < 2 && _0x398e87.length < 2 && _0x506342.length < 2 && _0xf70990.length < 2) {
    var _0x5ee5f8 = 0;
    if (insertedRom > 490) {
      return;
    }
    for (var _0x509d5f = lastIndex, _0x5741cf = lastIndex - 30; _0x509d5f > _0x5741cf && _0x509d5f > -1; _0x509d5f--) {
      _0x2502ed.push(taDataOkPLAZE[_0x509d5f]);
      _0x5ee5f8 = _0x509d5f;
    }
    lastIndex = _0x5ee5f8 - 1;
    if (lastIndex > 0) {
      _0x4cf948 = true;
    }
  } else {
    if (insertedRom > 490) {
      return;
    }
    var _0x446e65 = _0x3ec4bc.length > 1;
    var _0x402d2d = _0x398e87.length > 1;
    var _0x2fd735 = _0x506342.length > 1;
    var _0x49ea92 = _0xf70990.length > 1;
    var _0x26f2eb = 0;
    for (var _0x509d5f = lastIndex; _0x509d5f > -1; _0x509d5f--) {
      var _0x4bba6b = false;
      var _0xd6baed = false;
      var _0x111d28 = false;
      var _0x1373d0 = false;
      if (_0x446e65) {
        if (taDataOkPLAZE[_0x509d5f][0].toLowerCase().includes(_0x3ec4bc)) {
          _0x4bba6b = true;
        }
      } else {
        _0x4bba6b = true;
      }
      if (_0x402d2d) {
        if (taDataOkPLAZE[_0x509d5f][1].toLowerCase().includes(_0x398e87)) {
          _0xd6baed = true;
        }
      } else {
        _0xd6baed = true;
      }
      if (_0x2fd735) {
        if (taDataOkPLAZE[_0x509d5f][1].toLowerCase().includes(_0x506342)) {
          _0x111d28 = true;
        }
      } else {
        _0x111d28 = true;
      }
      if (_0x49ea92) {
        if (taDataOkPLAZE[_0x509d5f][2][0][0].toLowerCase().includes(_0xf70990)) {
          _0x1373d0 = true;
        }
      } else {
        _0x1373d0 = true;
      }
      if (_0x4bba6b && _0xd6baed && _0x111d28 && _0x1373d0) {
        _0x2502ed.push(taDataOkPLAZE[_0x509d5f]);
        _0x26f2eb++;
        if (_0x26f2eb > DataLimit) {
          lastIndex = _0x509d5f - 1;
          if (lastIndex > 0) {
            _0x4cf948 = true;
          }
          break;
        }
      }
    }
  }
  insertedRom += _0x2502ed.length;
  if (!_0x4cf948) {
    lastIndex = -1;
  }
  return _0x2502ed;
}
function BuildNumberReview() {
  const _0x42fab2 = document.getElementById("firmbnumber");
  if (_0x42fab2.value.length > 0) {
    let _0xb94ea8 = false;
    let _0x561840 = _0x42fab2.value;
    let _0x122a9e = _0x561840.indexOf(" ");
    if (_0x122a9e != -1) {
      let _0x1784c4 = _0x561840.substr(0, _0x122a9e).split("-");
      if (_0x1784c4.length > 2 && _0x1784c4.length < 5 && _0x1784c4[2].toLowerCase().includes("lgrp")) {
        _0x122a9e++;
        let _0x1f71d7 = _0x561840.indexOf("(", _0x122a9e);
        if (_0x1f71d7 != -1) {
          let _0x4b65a6 = _0x561840.substr(_0x122a9e, _0x1f71d7 - _0x122a9e).split(".");
          if (_0x4b65a6.length == 4) {
            _0x1f71d7++;
            let _0x536216 = _0x561840.indexOf(")", _0x1f71d7);
            if (_0x536216 != -1) {
              let _0x8f970f = _0x561840.substr(_0x1f71d7, _0x536216 - _0x1f71d7);
              let _0x41ebcc = _0x8f970f.indexOf("C");
              let _0x4f6793 = FindNumber("C", _0x8f970f);
              let _0x1f2f2a = FindNumber("E", _0x8f970f, _0x41ebcc);
              let _0x18fe22 = FindNumber("P", _0x8f970f, _0x41ebcc);
              let _0x319111 = FindNumber("R", _0x8f970f, _0x41ebcc);
              if (_0x4f6793 != null && _0x1f2f2a != null && _0x18fe22 != null && _0x319111 != null) {
                _0xb94ea8 = true;
                if (_0x1784c4.length > 3) {
                  _0x1784c4[2] += "-" + _0x1784c4[3];
                }
                let _0x3c05a7 = _0x42fab2.parentNode.children;
                _0x3c05a7[1].value = _0x1784c4[0] + "-" + _0x1784c4[1];
                _0x3c05a7[2].value = "C" + _0x4f6793;
                _0x3c05a7[3].value = GetVendorName(_0x4f6793);
                if (isModelChinese(_0x1784c4[2])) {
                  _0x3c05a7[4].value = _0x1784c4[0] + "-" + _0x1784c4[2] + "-CHN " + _0x4b65a6[0] + "." + _0x4b65a6[1] + "." + _0x4b65a6[2] + "." + _0x4b65a6[3];
                } else {
                  _0x3c05a7[4].value = _0x1784c4[0] + "-" + _0x1784c4[2] + "-OVS " + _0x4b65a6[0] + "." + _0x4b65a6[1] + "." + _0x4b65a6[2] + "." + _0x4b65a6[3];
                }
                _0x3c05a7[5].value = _0x1784c4[0] + "-" + _0x1784c4[1] + "-CUST " + _0x4b65a6[0] + "." + _0x4b65a6[1] + "." + _0x4b65a6[2] + "." + _0x1f2f2a + "(C" + _0x4f6793 + ")";
                _0x3c05a7[6].value = _0x1784c4[0] + "-" + _0x1784c4[1] + "-PRELOAD " + _0x4b65a6[0] + "." + _0x4b65a6[1] + "." + _0x4b65a6[2] + "." + _0x18fe22 + "(C" + _0x4f6793 + "R" + _0x319111 + ")";
              }
            }
          }
        }
      }
    }
    if (!_0xb94ea8) {
      _0x42fab2.style.borderBottom = "3px solid red";
    } else {
      _0x42fab2.style.borderBottom = "3px solid limegreen";
    }
  } else {
    _0x42fab2.style.borderBottom = "unset";
  }
}
function FindNumber(_0x4ca370, _0x510b33, _0x2ccf9f) {
  _0x2ccf9f = _0x2ccf9f || 0;
  let _0x25d0ad = _0x510b33.indexOf(_0x4ca370, _0x2ccf9f);
  if (_0x25d0ad === -1) {
    return null;
  }
  for (var _0x137016 = ++_0x25d0ad, _0x380568 = _0x510b33.length; _0x137016 < _0x380568; _0x137016++) {
    let _0x5b19f2 = _0x510b33[_0x137016];
    if ((_0x5b19f2 < "0" || _0x5b19f2 > "9") && _0x5b19f2 !== "-") {
      return _0x510b33.substr(_0x25d0ad, _0x137016 - _0x25d0ad);
    }
  }
  return _0x510b33.substr(_0x25d0ad);
}
function isModelChinese(_0x118481) {
  _0x118481 = parseInt(_0x118481.substr(_0x118481.length - 1));
  if (!isNaN(_0x118481)) {
    if (_0x118481 % 2 == 0) {
      return false;
    } else {
      return true;
    }
  }
  return null;
}
function submitFirmware() {
  let _0x270058 = document.getElementById("firmbnumber").parentNode.children;
  let _0x1509fd = _0x270058[1].value;
  let _0x3e0997 = _0x270058[2].value.toUpperCase();
  let _0x3da532 = _0x270058[3].value.toUpperCase();
  let _0x53c140 = [_0x270058[4].value];
  let _0x4762e0 = [_0x270058[5].value];
  let _0x2c1c97 = [_0x270058[6].value];
  if (_0x1509fd.length > 2 && _0x3e0997.length > 2 && _0x3da532.length > 2 && _0x53c140[0].length > 2 && _0x53c140[0].includes("LGRP") && _0x4762e0[0].length > 2 && _0x4762e0[0].includes("-CUST") && _0x2c1c97[0].length > 2 && _0x2c1c97[0].includes("-PRELOAD")) {
    _0x53c140 = GetPackageRange(0, _0x53c140);
    _0x4762e0 = GetPackageRange(1, _0x4762e0);
    _0x2c1c97 = GetPackageRange(2, _0x2c1c97);
    let _0x3ac9ff = document.querySelector("button.subbutton");
    combinationsList = [[_0x1509fd, _0x3e0997, _0x3da532]];
    _0x53c140.forEach(_0xe51086 => {
      _0x4762e0.forEach(_0x35400c => {
        _0x2c1c97.forEach(_0x556977 => {
          combinationsList.push([_0xe51086, _0x35400c, _0x556977]);
        });
      });
    });
    if (combinationsList.length > 1) {
      subRespond(true, "");
      MultipleRoms = combinationsList.length > 2;
      let _0x45d0ef = userAgent.toLowerCase();
      if (_0x45d0ef.includes("firefox/")) {
        isSafeBrowser = true;
      }
      if (MultipleRoms && !isSafeBrowser) {
        subRespond(false, "Range feature is only available on FireFox browser.");
        return;
      }
      _0x3ac9ff.disabled = true;
      StartSendingRequests();
    } else {
      subRespond(false, "Invalid firmware information passed.");
    }
  } else {
    subRespond(false, "Invalid firmware information passed.");
  }
}
let maximumThreads = 5;
let runningThreads = 0;
let combinationsList = [];
let MultipleRoms = false;
let isSafeBrowser = false;
function StartSendingRequests() {
  for (let _0x2e9899 = 0; _0x2e9899 < maximumThreads; _0x2e9899++) {
    if (combinationsList.length == 1) {
      break;
    }
    SendRequest(combinationsList[0], combinationsList[1]);
    combinationsList.splice(1, 1);
  }
}
function SendNextRequest() {
  if (combinationsList.length == 1) {
    if (runningThreads == 0) {
      return false;
    } else {
      return true;
    }
  } else {
    SendRequest(combinationsList[0], combinationsList[1]);
    combinationsList.splice(1, 1);
  }
}
function GetPackagesDetails(_0xeddc96, _0x2db2ce) {
  let _0x3011fa = _0x2db2ce.indexOf(" ");
  if (_0x3011fa == -1) {
    return "";
  }
  _0x3011fa++;
  let _0x3bf37b = _0x2db2ce.indexOf("(", _0x3011fa);
  if (_0x3bf37b == -1) {
    return "";
  }
  let _0x466f1f = _0x2db2ce.substr(_0x3011fa, _0x3bf37b - _0x3011fa).split(".");
  if (_0x466f1f.length != 4 || isNaN(parseInt(_0x466f1f[3]))) {
    return "";
  }
  let _0x233af2 = _0x2db2ce.substr(_0x3bf37b, _0x2db2ce.indexOf(")", _0x3bf37b) - _0x3bf37b) + "P" + _0x466f1f[3] + ")";
  _0x3011fa = _0xeddc96.indexOf(" ");
  if (_0x3011fa == -1) {
    return _0x233af2;
  }
  _0x3011fa++;
  _0x3bf37b = _0xeddc96.indexOf("(", _0x3011fa);
  if (_0x3bf37b == -1) {
    return _0x233af2;
  }
  _0x466f1f = _0xeddc96.substr(_0x3011fa, _0x3bf37b - _0x3011fa).split(".");
  if (_0x466f1f.length != 4 || isNaN(parseInt(_0x466f1f[3]))) {
    return _0x233af2;
  }
  let _0x1a17dc = _0x233af2.lastIndexOf("R");
  if (_0x1a17dc == -1) {
    return _0x233af2;
  }
  _0x233af2 = _0x233af2.substr(0, _0x1a17dc) + "E" + _0x466f1f[3] + _0x233af2.substr(_0x1a17dc);
  return _0x233af2;
}
function SendRequest(_0x14f1c5, _0x13fdbf) {
  runningThreads++;
  const _0xc1f7a5 = {
    model: _0x14f1c5[0],
    region: _0x14f1c5[1],
    vendor: _0x14f1c5[2],
    base: _0x13fdbf[0],
    cust: _0x13fdbf[1],
    preload: _0x13fdbf[2],
    isrange: MultipleRoms
  };
  let _0x347599 = _0xc1f7a5;
  let _0x550152 = _0x13fdbf[0] + GetPackagesDetails(_0x13fdbf[1], _0x13fdbf[2]);
  let _0x1e6965 = {};
  if (isSafeBrowser) {
    _0x1e6965["User-Agent"] = "Googlebot/2.1 (+http://www.google.com/bot.html)";
  }
  $.ajax({
    type: "POST",
    cache: false,
    async: true,
    url: "php/submit.php",
    contentType: "text",
    headers: _0x1e6965,
    data: encodethedata(JSON.stringify(_0x347599)),
    success: function (_0x185a51) {
      runningThreads--;
      if (!MultipleRoms) {
        let _0x5d15ff = document.querySelector("button.subbutton");
        _0x5d15ff.disabled = false;
        try {
          _0x185a51 = JSON.parse(_0x185a51);
          if ("Success" in _0x185a51) {
            subRespond(_0x185a51.Success, _0x185a51.Message);
          } else {
            subRespond(false, "An unexpected error has occurred!");
          }
        } catch (_0x5a40d6) {
          subRespond(false, "An unexpected error has occurred!");
        }
      } else {
        try {
          _0x185a51 = JSON.parse(_0x185a51);
          if ("Success" in _0x185a51) {
            subAppendRespond(_0x550152, _0x185a51.Success);
          } else {
            subAppendRespond(_0x550152, false);
          }
        } catch (_0x294d10) {
          subAppendRespond(_0x550152, false);
        }
        if (SendNextRequest() == false) {
          let _0x54fb69 = document.querySelector("button.subbutton");
          _0x54fb69.disabled = false;
        }
      }
    },
    error: function (_0x228913) {
      runningThreads--;
      if (!MultipleRoms) {
        let _0x7d8e4d = document.querySelector("button.subbutton");
        _0x7d8e4d.disabled = false;
        subRespond(false, "An unexpected error has occurred!");
      } else {
        subAppendRespond(_0x550152, false);
        if (SendNextRequest() == false) {
          let _0x23ebdd = document.querySelector("button.subbutton");
          _0x23ebdd.disabled = false;
        }
      }
    }
  });
}
function GetPackageRange(_0x15ae54, _0x2f5657) {
  if (_0x15ae54 == 0) {
    let _0xee11aa = [];
    let _0x350a62 = _0x2f5657[0].indexOf(" ");
    if (_0x350a62 == -1) {
      return _0x2f5657;
    }
    let _0x25dfa1 = _0x2f5657[0].substr(0, _0x350a62).split("-");
    if (_0x25dfa1.length == 4) {
      let _0x37f99f = _0x25dfa1[1].indexOf("LGRP");
      if (_0x37f99f != -1) {
        _0x37f99f += 4;
        let _0x44b8ca = parseInt(_0x25dfa1[1].substr(_0x37f99f));
        let _0x58dc4c = parseInt(_0x25dfa1[2]);
        if (!isNaN(_0x44b8ca) && !isNaN(_0x58dc4c) && _0x58dc4c > _0x44b8ca) {
          for (let _0x49afad = _0x44b8ca; _0x49afad <= _0x58dc4c; _0x49afad++) {
            let _0x5b2e13 = _0x25dfa1[0] + "-LGRP" + _0x49afad.toString() + (!(_0x49afad % 2) ? "-OVS " : "-CHN ");
            let _0x1b458f = _0x2f5657[0].substr(_0x350a62 + 1).split(".");
            let _0x25f9d0 = GetSmallStringRange(_0x1b458f[0]);
            let _0x31df99 = GetSmallStringRange(_0x1b458f[1]);
            let _0x57adbc = GetSmallStringRange(_0x1b458f[2]);
            let _0x502414 = GetSmallStringRange(_0x1b458f[3]);
            for (let _0x5275a1 = _0x25f9d0[0]; _0x5275a1 <= _0x25f9d0[1]; _0x5275a1++) {
              for (let _0xa6193a = _0x31df99[0]; _0xa6193a <= _0x31df99[1]; _0xa6193a++) {
                for (let _0x5460ab = _0x57adbc[0]; _0x5460ab <= _0x57adbc[1]; _0x5460ab++) {
                  for (let _0x18ff79 = _0x502414[0]; _0x18ff79 <= _0x502414[1]; _0x18ff79++) {
                    _0xee11aa.push(_0x5b2e13 + _0x5275a1 + "." + _0xa6193a + "." + _0x5460ab + "." + _0x18ff79);
                  }
                }
              }
            }
          }
        }
      }
    } else {
      let _0x43a59f = _0x25dfa1[0] + "-" + _0x25dfa1[1] + "-" + _0x25dfa1[2] + " ";
      let _0x47f865 = _0x2f5657[0].substr(_0x350a62 + 1).split(".");
      let _0x1a044b = GetSmallStringRange(_0x47f865[0]);
      let _0x1650be = GetSmallStringRange(_0x47f865[1]);
      let _0x448fdb = GetSmallStringRange(_0x47f865[2]);
      let _0x4a5e7e = GetSmallStringRange(_0x47f865[3]);
      for (let _0x1e5504 = _0x1a044b[0]; _0x1e5504 <= _0x1a044b[1]; _0x1e5504++) {
        for (let _0x20bd15 = _0x1650be[0]; _0x20bd15 <= _0x1650be[1]; _0x20bd15++) {
          for (let _0x3e3795 = _0x448fdb[0]; _0x3e3795 <= _0x448fdb[1]; _0x3e3795++) {
            for (let _0x28734e = _0x4a5e7e[0]; _0x28734e <= _0x4a5e7e[1]; _0x28734e++) {
              _0xee11aa.push(_0x43a59f + _0x1e5504 + "." + _0x20bd15 + "." + _0x3e3795 + "." + _0x28734e);
            }
          }
        }
      }
    }
    return _0xee11aa;
  } else if (_0x15ae54 == 1) {
    let _0x25ae6d = [];
    let _0x40c252 = _0x2f5657[0].indexOf(" ");
    let _0x1e7da1 = _0x2f5657[0].indexOf("(");
    if (_0x40c252 == -1 || _0x1e7da1 == -1) {
      return _0x2f5657;
    }
    let _0x295ecf = _0x2f5657[0].substr(0, _0x40c252) + " ";
    _0x40c252++;
    let _0xb7c228 = _0x2f5657[0].substr(_0x40c252, _0x1e7da1 - _0x40c252).split(".");
    let _0x30d8ff = GetSmallStringRange(_0xb7c228[0]);
    let _0x5dcc37 = GetSmallStringRange(_0xb7c228[1]);
    let _0x5f459e = GetSmallStringRange(_0xb7c228[2]);
    let _0x3c798e = GetSmallStringRange(_0xb7c228[3]);
    let _0x484076 = _0x2f5657[0].substr(_0x1e7da1);
    for (let _0x2e878b = _0x30d8ff[0]; _0x2e878b <= _0x30d8ff[1]; _0x2e878b++) {
      for (let _0x46f029 = _0x5dcc37[0]; _0x46f029 <= _0x5dcc37[1]; _0x46f029++) {
        for (let _0x26201a = _0x5f459e[0]; _0x26201a <= _0x5f459e[1]; _0x26201a++) {
          for (let _0x47f3a0 = _0x3c798e[0]; _0x47f3a0 <= _0x3c798e[1]; _0x47f3a0++) {
            _0x25ae6d.push(_0x295ecf + _0x2e878b + "." + _0x46f029 + "." + _0x26201a + "." + _0x47f3a0 + _0x484076);
          }
        }
      }
    }
    return _0x25ae6d;
  } else if (_0x15ae54 == 2) {
    let _0x4fed79 = [];
    let _0x332766 = _0x2f5657[0].indexOf(" ");
    let _0x3315aa = _0x2f5657[0].indexOf("(");
    if (_0x332766 == -1 || _0x3315aa == -1) {
      return _0x2f5657;
    }
    let _0x2c6a68 = _0x2f5657[0].substr(0, _0x332766) + " ";
    _0x332766++;
    let _0x2de9e9 = _0x2f5657[0].substr(_0x332766, _0x3315aa - _0x332766).split(".");
    let _0x5d3203 = GetSmallStringRange(_0x2de9e9[0]);
    let _0x39b5aa = GetSmallStringRange(_0x2de9e9[1]);
    let _0x2a2b5c = GetSmallStringRange(_0x2de9e9[2]);
    let _0x39e16d = GetSmallStringRange(_0x2de9e9[3]);
    let _0x153cd2 = _0x2f5657[0].lastIndexOf("R");
    if (_0x153cd2 == -1) {
      return _0x2f5657;
    }
    _0x153cd2++;
    let _0x2a549b = _0x2f5657[0].substr(_0x3315aa, _0x153cd2 - _0x3315aa);
    let _0x2b1cc8 = _0x2f5657[0].indexOf(")", _0x153cd2);
    if (_0x2b1cc8 == -1) {
      return _0x2f5657;
    }
    let _0x48c6bb = GetSmallStringRange(_0x2f5657[0].substr(_0x153cd2, _0x2b1cc8 - _0x153cd2));
    for (let _0x217849 = _0x5d3203[0]; _0x217849 <= _0x5d3203[1]; _0x217849++) {
      for (let _0x1d2606 = _0x39b5aa[0]; _0x1d2606 <= _0x39b5aa[1]; _0x1d2606++) {
        for (let _0x4d4901 = _0x2a2b5c[0]; _0x4d4901 <= _0x2a2b5c[1]; _0x4d4901++) {
          for (let _0x526f32 = _0x39e16d[0]; _0x526f32 <= _0x39e16d[1]; _0x526f32++) {
            let _0x394987 = _0x2c6a68 + _0x217849 + "." + _0x1d2606 + "." + _0x4d4901 + "." + _0x526f32 + _0x2a549b;
            for (let _0x283615 = _0x48c6bb[0]; _0x283615 <= _0x48c6bb[1]; _0x283615++) {
              let _0x223f9a = _0x394987 + _0x283615 + ")";
              _0x4fed79.push(_0x223f9a);
            }
          }
        }
      }
    }
    return _0x4fed79;
  }
}
function GetSmallStringRange(_0x248284) {
  let _0x1f43f5 = _0x248284.indexOf("-");
  if (_0x1f43f5 != -1) {
    let _0x2194e7 = parseInt(_0x248284.substr(0, _0x1f43f5));
    let _0x40d774 = parseInt(_0x248284.substr(_0x1f43f5 + 1));
    if (_0x40d774 >= _0x40d774) {
      return [_0x2194e7, _0x40d774];
    } else {
      return [_0x2194e7, _0x2194e7];
    }
  } else {
    let _0x341067 = parseInt(_0x248284);
    return [_0x341067, _0x341067];
  }
}
function subRespond(_0x5a3c93, _0x50462a) {
  let _0x52c3f3 = document.querySelector(".subSpan");
  if (_0x52c3f3 == null) {
    alert(_0x50462a);
  } else {
    if (_0x50462a.length > 0) {
      _0x52c3f3.style = "display: unset";
    } else {
      _0x52c3f3.style = "";
    }
    if (_0x5a3c93) {
      _0x52c3f3.className = "subSpan";
    } else {
      _0x52c3f3.className = "subSpan error";
    }
    _0x52c3f3.innerText = _0x50462a;
  }
}
function subAppendRespond(_0xe9552b, _0x412243) {
  let _0x56eaff = document.querySelector(".subSpan");
  if (_0x56eaff != null) {
    _0x56eaff.style.display = "block";
    _0x56eaff.style.borderBottom = "unset";
    _0x56eaff.style.position = "absolute";
    _0x56eaff.style.height = "calc(100.0vh - 220px)";
    _0x56eaff.style.maxHeight = "300px";
    _0x56eaff.style.overflow = "auto";
    const _0x3b1397 = document.createElement("div");
    if (_0x412243) {
      _0x3b1397.style = "border-bottom: 2px solid limegreen; display: inline-block; margin-bottom: 9px; padding: 4px 7px; color: white; border-radius: 4px 4px 0px 0px; background: rgba(0, 0, 0, 0.3)";
    } else {
      _0x3b1397.style = "border-bottom: 2px solid orangered; display: inline-block; margin-bottom: 9px; padding: 4px 7px; color: white; border-radius: 4px 4px 0px 0px; background: rgba(0, 0, 0, 0.3)";
    }
    _0x3b1397.innerText = _0xe9552b + ": " + (_0x412243 ? "Success" : "Failed");
    if (_0x56eaff.firstChild != null) {
      _0x56eaff.insertBefore(document.createElement("br"), _0x56eaff.firstChild);
      _0x56eaff.insertBefore(_0x3b1397, _0x56eaff.firstChild);
    } else {
      _0x56eaff.append(_0x3b1397);
    }
    let _0x4def5c = _0x56eaff.children.length;
    if (_0x4def5c > 100) {
      _0x56eaff.children[_0x4def5c - 2].remove();
      _0x56eaff.children[_0x4def5c - 2].remove();
    }
  }
}
const VendorsInformation = [[700, "all-cn"], [635, "hw-jp"], [786, "porsche-cn"], [0, "all-cn"], [675, "hw-in"], [10, "hw-ru"], [301, "channel-id"], [69, "telcel-mx"], [25, "claro-la"], [432, "hw-eu"], [636, "hw-spcseas"], [792, "telus-ca-C792"], [1, "cmcc-cn"], [93, "channel-th"], [185, "hw-meafnaf"], [94, "hw-tr"], [555, "h3g-ie"], [111, "softbank-jp"], [130, "etcstore-th"], [109, "orange-all"], [33, "altice-all"], [40, "tef-normal"], [521, "telefonica-mx"], [77, "hw-la"], [16, "mtn-za"], [771, "hw-la"], [578, "hw-ca"], [800, "softbankcorp-jp"], [2, "vodafone-es"], [781, "hw-eu"], [828, "porsche-ru"], [106, "ice-cr"], [721, "porsche-normal"], [782, "hw-eu"], [316, "vodacom-za"], [55, "ti-it"], [212, "iusacell-mx"], [45, "tigo-la"], [461, "hw-cea"], [346, "vha-au"], [605, "hw-la"], [431, "hw-eea"], [34, "optus-au"], [900, "hw-normal"], [451, "telstra-au"]];
function GetVendorName(_0x332366) {
  _0x332366 = parseInt(_0x332366);
  if (isNaN(_0x332366)) {
    return "";
  } else {
    for (let _0x475baf = 0, _0x457e53 = VendorsInformation.length; _0x475baf < _0x457e53; _0x475baf++) {
      console.log(VendorsInformation[_0x475baf]);
      if (VendorsInformation[_0x475baf][0] == _0x332366) {
        return VendorsInformation[_0x475baf][1];
      }
    }
  }
  return "";
}
function switchPage(_0x259d2c) {
  searchingRoms = !searchingRoms;
  if (searchingRoms) {
    _0x259d2c.className = "liteyt";
    let _0x1dcda0 = document.querySelector(".submission");
    _0x1dcda0.style.opacity = "0";
    // TOLOOK
    setTimeout(function () {
      _0x1dcda0.style.display = "none";
      let _0x2258ad = document.querySelector(".holder");
      _0x2258ad.style.opacity = 0;
      _0x2258ad.style.display = "block";
      // TOLOOK
      setTimeout(function () {
        _0x2258ad.style.opacity = 1;
      }, 25);
    }, 150);
  } else {
    _0x259d2c.className = "liteyt active";
    let _0x394d12 = document.querySelector(".holder");
    _0x394d12.style.opacity = "0";
    // TOLOOK
    setTimeout(function () {
      _0x394d12.style.display = "none";
      let _0x2813cd = document.querySelector(".submission");
      _0x2813cd.style.opacity = 0;
      _0x2813cd.style.display = "block";
      // TOLOOK
      setTimeout(function () {
        _0x2813cd.style.opacity = 1;
      }, 25);
    }, 150);
  }
}