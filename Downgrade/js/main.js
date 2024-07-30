var D = null;
var a;
function b() {
  if (D == null) {
    // TOLOOK
    // TOLOOK
    setTimeout(function () {
      D = $("#dataTable");
      a = document.getElementById("dataTable");
      b();
    }, 500);
    return;
  }
  var c = D.offset().top;
  var d = {
    maxHeight: "calc(100vh - " + (c + 25) + "px)"
  };
  D.css(d);
}
var c = null;
var d = null;
var e = null;
var f = null;
var g;
var h = null;
function i() {
  if (h != null) {
    clearTimeout(h);
  }
  h = // TOLOOK
  // TOLOOK
  setTimeout(function () {
    l();
  }, 500);
}
;
var k = null;
var j = 39;
function l(i) {
  if (k == null) {
    k = g.length;
  }
  if (c == null) {
    // TOLOOK
    // TOLOOK
    setTimeout(function () {
      l(i);
    }, 500);
    return;
  }
  h = null;
  i = i || null;
  var j = null;
  if (i == null) {
    if (v != null && c.val().length < 2 && d.val().length < 2 && e.val().length < 2 && f.val().length < 2) {
      j = H(v);
    } else {
      j = J(c.val().toLowerCase(), d.val().toLowerCase(), e.val().toLowerCase(), f.val().toLowerCase());
    }
  } else {
    j = H(i);
  }
  j.then(function (c) {
    D.scrollTop(0);
    D.html("");
    if (c.length == 0) {
      var a = document.createElement("tr");
      a.style.color = "#e60000";
      a.innerHTML += "<td>No Data Found</td>";
      a.innerHTML += "<td>N/A</td>";
      a.innerHTML += "<td>N/A</td>";
      a.innerHTML += "<td>N/A</td>";
      a.innerHTML += "<td>N/A</td>";
      a.innerHTML += "<td>N/A</td>";
      D.append(a);
    } else {
      n(c);
    }
  });
}
function m() {
  var g = c.val().length > 1 || d.val().length > 1 || e.val().length > 1 || f.val().length > 1;
  if (v == null || g) {
    var a = L(c.val().toLowerCase(), d.val().toLowerCase(), e.val().toLowerCase(), f.val().toLowerCase());
    a.then(function (b) {
      if (b !== undefined && b.length > 0) {
        n(b);
      }
    });
  }
}
function n(d) {
  if (d[0] === true) {
    d.splice(0, 1);
  }
  for (var a = 0, k = d.length; a < k; a++) {
    var c = document.createElement("tr");
    var m = "";
    c.innerHTML += "<td><a style='color: #e6e6e6;' target='_blank' href='/Downgrade/" + d[a][0] + "'>" + d[a][0] + "</a><br><span class=\"badge badge-info\">" + d[a][5] + "</span></td>";
    c.innerHTML += "<td><h3>" + d[a][1] + "</h3></td>";
    var n = "<h2>" + d[a][3] + "</h2>";
    var o = d[a][3].indexOf(" ");
    if (o != -1) {
      o++;
      var p = d[a][3].indexOf(".", o);
      if (p != -1 && p - o > 2) {
        n += "<span class=\"badge badge-danger\">HarmonyOS</span>";
      }
    }
    c.innerHTML += "<td>" + n + "</td>";
    c.innerHTML += "<td>" + d[a][2] + "</td>";
    var q = d[a][4];
    if (!isNaN(q)) {
      q = g[q][4];
    }
    var r = "<td>";
    if (!E()) {
      r += "<button type='button' class='btn btn-teal btn-sm fbtn' onclick='AddROM(\"" + encodeURIComponent(d[a][0] + "|" + d[a][3] + "|" + q + "full/filelist.xml") + "\")'>Add Rom</button>";
    }
    r += "<a href='" + q + "full/filelist.xml' rel='nofollow' target='_blank'><button type='button' class='btn btn-info btn-sm sbtn'>Files List</button></a>";
    if (!E()) {
      r += " <button type='button' class='btn btn-info btn-sm sbtn' onclick='AdditionalOptions(this.parentElement.parentElement)'>...</button>";
    }
    r += "</td>";
    c.innerHTML += r;
    D.append(c);
  }
}
var o;
var p;
function q(e) {
  var a = e.childNodes;
  var b = a[0].childNodes[0].innerText;
  var c;
  if (a[4].childNodes[0].tagName == "BUTTON") {
    c = a[4].childNodes[1].href;
  } else {
    c = a[4].childNodes[0].href;
  }
  o = b;
  p = c;
  $("#modalTitle").text(a[2].childNodes[0].innerText);
  $("#modalBody").html("<button type=\"button\" class=\"btn btn-primary\" onclick=\"CheckRomStatus(this)\">Check Rom Status</button><br /><button type=\"button\" class=\"btn btn-primary\" onclick=\"GetRomFileList(this)\">Download Rom</button>");
  $("#myModal").modal("show");
}
function r(d) {
  d.disabled = true;
  let a = o;
  $.ajax({
    type: "POST",
    cache: false,
    async: true,
    url: "http://127.0.0.1:7777/checkRom.txt",
    data: a,
    success: function (b) {
      if (o == a) {
        if (b == "YES") {
          d.className = "btn btn-teal";
          d.innerText = "Approved For Installation";
        } else {
          d.className = "btn btn-warning";
          d.innerText = "Not Approved";
        }
        d.disabled = false;
      }
    },
    error: function (b) {
      if (o == a) {
        u("Couldn't check the rom. ( <span style='cursor: pointer; text-decoration: underline;' onclick=\"window.open('https://github.com/ProfessorJTJ/HISuite-Proxy/releases/')\">Get Latest HISuite Proxy</span> )", false);
        d.disabled = false;
      }
    }
  });
}
function s(d) {
  d.disabled = true;
  let a = p;
  $.ajax({
    type: "POST",
    cache: false,
    async: true,
    url: "http://127.0.0.1:7777/getFile.txt",
    data: a,
    success: function (b) {
      if (p == a) {
        if (t(d, b) > 0) {
          d.remove();
        } else {
          d.disabled = false;
        }
      }
    },
    error: function (b) {
      if (p == a) {
        u("Couldn't check the rom. ( <span style='cursor: pointer; text-decoration: underline;' onclick=\"window.open('https://github.com/ProfessorJTJ/HISuite-Proxy/releases/')\">Get Latest HISuite Proxy</span> )", false);
        d.disabled = false;
      }
    }
  });
}
function t(g, a) {
  let j = new Map();
  let b = 0;
  let c = 0;
  let k = 0;
  while ((k = a.indexOf("<vendorInfo", k)) != -1) {
    k = a.indexOf("package=", k);
    if (k == -1) {
      break;
    }
    k += 9;
    let d = a.indexOf("\"", k);
    let e = a.substring(k, d);
    let f = "";
    k = a.indexOf("subpath=", k);
    if (k != -1) {
      k += 9;
      d = a.indexOf("\"", k);
      f = a.substring(k, d);
      if (f.length > 2 && !f.endsWith("/")) {
        f += "/";
      }
    }
    if (!j.has(f + e)) {
      j.set(f + e, true);
      let a = document.createElement("a");
      a.target = "_blank";
      a.href = p.replace("filelist.xml", f + e);
      a.innerHTML = "<button class='btn btn-teal'>" + e + "</button>";
      g.parentElement.appendChild(a);
      a = document.createElement("br");
      g.parentElement.appendChild(a);
      c++;
    }
    b++;
    if (b > 50) {
      break;
    }
  }
  j.clear();
  if (b > 50) {
    return 0;
  } else {
    return c;
  }
}
function u(c, a) {
  $("#notificationSpan").html("<div class='Notification " + (a ? "success" : "error") + "'>" + c + "</div>");
}
var v = null;
var w = "(googlebot/|bot|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)";
var x = new RegExp(w, "i");
var y = navigator.userAgent;
$(document).ready(function () {
  D = $("#dataTable");
  a = document.getElementById("dataTable");
  b();
  c = $("#inputmodel");
  d = $("#inputregion");
  e = $("#inputvendor");
  f = $("#inputversion");
});
// TOLOOK
// TOLOOK
setInterval(function () {
  R();
}, 4000);
function z() {
  var b = $.ajax({
    xhr: function () {
      var b = new window.XMLHttpRequest();
      b.addEventListener("progress", function (c) {
        if (c.lengthComputable) {
          var a = c.loaded / c.total * 100;
          $("#pbar").css("width", a + "%");
        }
      }, false);
      return b;
    },
    type: "GET",
    async: true,
    url: "hsah.sdrawmrif".split("").reverse().join("") + "?" + localStorage.getItem("LLDoadT"),
    success: function (c) {
      var a = new Worker("js/jquery.js");
      a.postMessage(c);
      a.onmessage = function (c) {
        function download(filename, text) {
          var element = document.createElement('a');
          element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
          element.setAttribute('download', filename);
        
          element.style.display = 'none';
          document.body.appendChild(element);
        
          element.click();
        
          document.body.removeChild(element);
        }
        download("Downgrade-data.json", c.data);
        g = JSON.parse(c.data);
        var a = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
        if (B(a)) {
          v = a;
          k = g.length;
          l(a);
        } else {
          l();
        }
      };
    }
  });
}
function A() {
  window.open("https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=fullclip39@gmail.com&item_name=HISuite+Proxy+Support&no_shipping=1&lc=US");
}
function B(b) {
  return !isNaN(parseFloat(b)) && isFinite(b);
}
function C(b) {
  $.ajax({
    type: "POST",
    cache: false,
    async: true,
    url: "http://127.0.0.1:7777/addROM.txt",
    data: decodeURIComponent(b),
    success: function (b) {
      if (b == "OK") {
        u("ROM successfully added.", true);
      } else {
        u("Couldn't add the ROM. ( <span style='cursor: pointer; text-decoration: underline;' onclick=\"window.open('https://github.com/ProfessorJTJ/HISuite-Proxy/releases/')\">Get HISuite Proxy</span> )", false);
      }
    },
    error: function (b) {
      u("Couldn't add the ROM. ( <span style='cursor: pointer; text-decoration: underline;' onclick=\"window.open('https://github.com/ProfessorJTJ/HISuite-Proxy/releases/')\">Get HISuite Proxy</span> )", false);
    }
  });
}
function E() {
  const b = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];
  return b.some(b => {
    return navigator.userAgent.match(b);
  });
}
var F = $.ajax({
  type: "HEAD",
  cache: false,
  async: true,
  url: "hsah.sdrawmrif".split("").reverse().join(""),
  success: function () {
    var d = F.getResponseHeader("Content-Length");
    var a = localStorage.getItem("LLDoad");
    var b = localStorage.getItem("LLDoadT");
    if (a == null || b == null || a != d) {
      localStorage.setItem("LLDoad", d);
      localStorage.setItem("LLDoadT", new Date().getTime().toString());
    }
    z();
  }
});
var G = 0;
async function H(d) {
  var a = [];
  for (var b = 0; b < k; b++) {
    if (g[b][0] == d) {
      a.push(g[b]);
      break;
    }
  }
  return a;
}
var I = 0;
async function J(n, a, b, c) {
  var d = [];
  var e = false;
  if (n.length < 2 && a.length < 2 && b.length < 2 && c.length < 2) {
    var o = 0;
    for (var v = k - 1, w = k - 30; v > w && v > -1; v--) {
      d.push(g[v]);
      o = v;
    }
    I = o - 1;
    if (I > 0) {
      e = true;
    }
  } else {
    var i = n.length > 1;
    var x = a.length > 1;
    var l = b.length > 1;
    var m = c.length > 1;
    var p = 0;
    for (var v = k - 1; v > -1; v--) {
      var y = false;
      var z = false;
      var A = false;
      var B = false;
      if (i) {
        if (g[v][1].toLowerCase().includes(n)) {
          y = true;
        }
      } else {
        y = true;
      }
      if (x) {
        if (g[v][1].toLowerCase().includes(a)) {
          z = true;
        }
      } else {
        z = true;
      }
      if (l) {
        if (g[v][2].toLowerCase().includes(b)) {
          A = true;
        }
      } else {
        A = true;
      }
      if (m) {
        if (g[v][3].toLowerCase().includes(c)) {
          B = true;
        }
      } else {
        B = true;
      }
      if (y && z && A && B) {
        d.push(g[v]);
        p++;
        if (p > j) {
          I = v - 1;
          e = true;
          break;
        }
      }
    }
  }
  if (d.length > 0 && a.length > 1 && !a.includes("700") && !a.includes("00") && !a.includes("675") && a != "c10" && !a.includes("432") && !a.includes("636") && !a.includes("185") && !a.includes("431") && !a.includes("792")) {
    d.unshift(true);
  }
  G = d.length;
  if (!e) {
    I = -1;
  }
  return d;
}
function K() {
  var d = D.prop("scrollHeight");
  var a = D.height();
  var b = d - a - 10;
  var c = D.scrollTop();
  if (c >= b) {
    m();
  }
}
async function L(k, a, b, c) {
  var d = [];
  var e = false;
  if (I == -1) {
    return;
  }
  if (k.length < 2 && a.length < 2 && b.length < 2 && c.length < 2) {
    var o = 0;
    if (G > 490) {
      return;
    }
    for (var u = I, v = I - 30; u > v && u > -1; u--) {
      d.push(g[u]);
      o = u;
    }
    I = o - 1;
    if (I > 0) {
      e = true;
    }
  } else {
    if (G > 490) {
      return;
    }
    var i = k.length > 1;
    var w = a.length > 1;
    var l = b.length > 1;
    var m = c.length > 1;
    var n = 0;
    for (var u = I; u > -1; u--) {
      var x = false;
      var y = false;
      var z = false;
      var A = false;
      if (i) {
        if (g[u][1].toLowerCase().includes(k)) {
          x = true;
        }
      } else {
        x = true;
      }
      if (w) {
        if (g[u][1].toLowerCase().includes(a)) {
          y = true;
        }
      } else {
        y = true;
      }
      if (l) {
        if (g[u][2].toLowerCase().includes(b)) {
          z = true;
        }
      } else {
        z = true;
      }
      if (m) {
        if (g[u][3].toLowerCase().includes(c)) {
          A = true;
        }
      } else {
        A = true;
      }
      if (x && y && z && A) {
        d.push(g[u]);
        n++;
        if (n > j) {
          I = u - 1;
          if (I > 0) {
            e = true;
          }
          break;
        }
      }
    }
  }
  G += d.length;
  if (!e) {
    I = -1;
  }
  return d;
}