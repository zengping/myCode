! function (A, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.kscreenshot = e() : A.kscreenshot = e()
}(window, function () {
  return function (A) {
    var e = {};

    function t(r) {
      if (e[r]) return e[r].exports;
      var n = e[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return A[r].call(n.exports, n, n.exports, t), n.l = !0, n.exports
    }
    return t.m = A, t.c = e, t.d = function (A, e, r) {
      t.o(A, e) || Object.defineProperty(A, e, {
        enumerable: !0,
        get: r
      })
    }, t.r = function (A) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(A, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(A, "__esModule", {
        value: !0
      })
    }, t.t = function (A, e) {
      if (1 & e && (A = t(A)), 8 & e) return A;
      if (4 & e && "object" == typeof A && A && A.__esModule) return A;
      var r = Object.create(null);
      if (t.r(r), Object.defineProperty(r, "default", {
          enumerable: !0,
          value: A
        }), 2 & e && "string" != typeof A)
        for (var n in A) t.d(r, n, function (e) {
          return A[e]
        }.bind(null, n));
      return r
    }, t.n = function (A) {
      var e = A && A.__esModule ? function () {
        return A.default
      } : function () {
        return A
      };
      return t.d(e, "a", e), e
    }, t.o = function (A, e) {
      return Object.prototype.hasOwnProperty.call(A, e)
    }, t.p = "./", t(t.s = 11)
  }([function (A, e, t) {
    "use strict";

    function r(A, e) {
      return A.className.match(new RegExp("(\\s|^)" + e + "(\\s|$)"))
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.css = function (A, e) {
      for (var t in e) A.style[t] = e[t]
    }, e.remove = function (A) {
      A instanceof HTMLElement ? A.parentNode.removeChild(A) : A instanceof HTMLCollection && Array.prototype.forEach.call(A, function (A) {
        A.parentNode.removeChild(A)
      })
    }, e.domType = function (A) {
      return Object.prototype.toString.call(A)
    }, e.hasClass = r, e.addClass = function (A, e) {
      r(A, e) || (A.className += " " + e)
    }, e.removeClass = function (A, e) {
      if (r(A, e)) {
        var t = new RegExp("(\\s|^)" + e + "(\\s|$)");
        A.className = A.className.replace(t, " ")
      }
    }, e.computed = function (A, e, t, r) {
      Object.defineProperty(A, e, {
        set: function (e) {
          t.forEach(function (n, o) {
            r[o](A, e, t[o])
          })
        }
      })
    }, e.typeChecking = function (A) {
      return Object.prototype.toString.call(A)
    }
  }, function (A, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function (A) {
      var e = document.getElementsByClassName("kssToolbarItemBT");
      Array.prototype.forEach.call(e, function (A) {
        (0, r.removeClass)(A, "kssToolbarActiveItemBT")
      }), A ? ((0, r.addClass)(A, "kssToolbarActiveItemBT"), document.getElementById("kssRectangleCanvas").style.cursor = "crosshair") : document.getElementById("kssRectangleCanvas").style.cursor = "move"
    };
    var r = t(0)
  }, function (A, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function (A, e) {
      "textLayer" === e ? ((0, r.css)(A.kssTextLayer, {
        "z-index": 99
      }), (0, r.css)(A.rectangleCanvas, {
        "z-index": 98
      })) : "canvasLayer" === e && ((0, r.css)(A.rectangleCanvas, {
        "z-index": 99
      }), (0, r.css)(A.kssTextLayer, {
        "z-index": 98
      }))
    };
    var r = t(0)
  }, function (A, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function (A) {
      A.rectangleCanvas.getContext("2d").drawImage(A.rectangleCanvas, 0, 0, A.width, A.height, 0, 0, A.width, A.height);
      var e = A.rectangleCanvas.toDataURL("image/png");
      A.snapshootList.push(e), A.currentImgDom.src = e
    }
  }, function (A, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function (A) {
      A.rectangleCanvas.width = A.width, A.rectangleCanvas.height = A.height, A.rectangleCanvas.getContext("2d").drawImage(A.kss, A.startX, A.startY, A.width, A.height, 0, 0, A.width, A.height);
      var e = A.rectangleCanvas.toDataURL("image/png");
      A.imgBase64 = e, A.snapshootList[0] = e, A.currentImgDom.src = A.imgBase64
    }
  }, function (A, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function (A) {
      A.rectangleCanvas.getContext("2d").drawImage(A.currentImgDom, 0, 0, A.width, A.height, 0, 0, A.width, A.height)
    }
  }, function (A, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function (A, e, t, n, o, s) {
      var a = document.documentElement.clientHeight,
        i = A.toolbarWidth - e - o;
      i > 0 ? (0, r.css)(s, {
        right: "-" + i + "px"
      }) : (0, r.css)(s, {
        right: "0px"
      });
      a - n - t - A.toolbarMarginTop - A.toolbarHeight < 0 ? n >= 35 ? (0, r.css)(s, {
        top: "-" + (A.toolbarHeight + A.toolbarMarginTop) + "px"
      }) : (0, r.css)(s, {
        top: A.toolbarMarginTop + "px"
      }) : (0, r.css)(s, {
        top: t + A.toolbarMarginTop + "px"
      })
    };
    var r = t(0)
  }, function (A, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function (A) {
      (0, r.removeClass)(document.body, "kssBody"), A.kss && (0, r.remove)(A.kss), A.kssScreenShotWrapper && (0, r.remove)(A.kssScreenShotWrapper), A.style && (0, r.remove)(A.style), A.kss = null, A.rectangleCanvas = null, A.kssTextLayer = null, A.kssScreenShotWrapper = null, A.drawingStatus = null, A.toolbar = null, A.currentToolType = null, A.snapshootList = [], A.isScreenshot = !1, A.isEdit = !1, A.toolmousedown = null, A.toolmousemove = null, A.toolmouseup = null, document.removeEventListener("keydown", A.endScreenShot), setTimeout(function () {
        document.removeEventListener("contextmenu", A.preventContextMenu)
      }, 0), document.removeEventListener("mouseup", A.cancelDrawingStatus), "[object Function]" === (0, r.typeChecking)(A.endCB) && A.endCB()
    };
    var r = t(0)
  }, function (A, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function (A) {
      A.rectangleCanvas.width = A.width, A.rectangleCanvas.height = A.height, A.rectangleCanvas.getContext("2d").clearRect(0, 0, A.width, A.height)
    }
  }, function (A, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function (A) {
      var e = document.documentElement.clientHeight,
        t = document.documentElement.clientWidth,
        r = A.clientX,
        n = A.clientY;
      r < 0 && (r = 0);
      r > t && (r = t);
      n < 0 && (n = 0);
      n > e && (n = e);
      return [r, n]
    }
  }, function (A, e) {
    A.exports = "data:image/x-icon;base64,AAABAAQAICAAAAEACACoCAAARgAAABAQAAABAAgAaAUAAO4IAAAgIAAAAQAgAKgQAABWDgAAEBAAAAEAIABoBAAA/h4AACgAAAAgAAAAQAAAAAEACAAAAAAAAAQAAAAAAAAAAAAAAAEAAAABAAAAAAAAAFX/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wEBAQH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8BAf//AQH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wEB//8BAf8AAAAAAAAAAAAAAAAAAAAAAAAAAP//AAD/AQH//wEB/wAAAAAAAAAAAAAAAAAAAAAAAAAA/wD/AP8BAf//AQH/AAAAAAAAAAAAAAAAAAAAAAAAAAD/AAD//wEB//8BAf8AAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/////////AAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/////////////////////////////////////////////////////////////////////////////////////8P///+B////AP///wD///MA///xAP//8AD///AB///wB///8A////Af///wP///8H////D////x////8/////KAAAABAAAAAgAAAAAQAIAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAEAAAAAAAAAVf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wAAAAAAAAD/////AAAAAAAAAAAAAAD/AQEBAf8AAAAAAAAAAAD/AQH//wEB/wAAAAAAAAAA/wEB//8BAf8AAAAA//8AAP8BAf//AQH/AAAAAP8A/wD/AQH//wEB/wAAAAD/AAD//wEB//8BAf8AAAAA/wAAAP////////8AAAAAAP8AAAAAAAAA/wAAAAAAAAD/AAAAAAAA/wAAAAAAAAAA/wAAAAAA/wAAAAAAAAAAAP8AAAAA/wAAAAAAAAAAAAD/AAAA/wAAAAAAAAAAAAAA/wAA/wAAAAAAAAAAAAAAAP8A/wAAAAAAAAAAAAAAAAD//wAAAAAAAAAAAAAAAAAA/D8AAPgfAADwDwAA8A8AADAPAAAQDwAAAA8AAAAfAAAAfwAAAP8AAAH/AAAD/wAAB/8AAA//AAAf/wAAP/8AACgAAAAgAAAAQAAAAAEAIAAAAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AFX//wBV//8AVf//AFX///////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wBV//8AVf////////////8AVf//AFX///////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AFX//wBV/////////////wBV//8AVf///////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////8AAAAAAAAAAP////8AVf//AFX/////////////AFX//wBV////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAA//////8AAAAA/////wBV//8AVf////////////8AVf//AFX///////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAD/AAAA////////////AFX//wBV/////////////wBV//8AVf///////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAP8AAAD/AAAA//////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA//////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP//////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAP8AAAD/AAAA/wAAAP8AAAD//////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAA/wAAAP8AAAD/AAAA//////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAD/AAAA/wAAAP//////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAP8AAAD//////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAA//////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////////////////////////////////////////w////4H///8A////AP//8wD///EA///wAP//8AH///AH///wD///8B////A////wf///8P////H////z////8oAAAAEAAAACAAAAABACAAAAAAAEAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wBV//8AVf//AFX//wBV////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wBV//8AVf////////////8AVf//AFX///////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AVf//AFX/////////////AFX//wBV////////AAAAAAAAAAAAAAAAAAAAAP//////////AAAAAAAAAAD/////AFX//wBV/////////////wBV//8AVf///////wAAAAAAAAAAAAAAAAAAAAD/////AAAA//////8AAAAA/////wBV//8AVf////////////8AVf//AFX///////8AAAAAAAAAAAAAAAAAAAAA/////wAAAP8AAAD///////////8AVf//AFX/////////////AFX//wBV////////AAAAAAAAAAAAAAAAAAAAAP////8AAAD/AAAA/wAAAP//////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA//////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA//////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAD/AAAA/wAAAP8AAAD/AAAA//////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAA/wAAAP8AAAD/AAAA//////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAP8AAAD/AAAA//////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAD/AAAA//////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAA//////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPw/AAD4HwAA8A8AAPAPAAAwDwAAEA8AAAAPAAAAHwAAAH8AAAD/AAAB/wAAA/8AAAf/AAAP/wAAH/8AAD//AAA="
  }, function (A, e, t) {
    A.exports = t(12)
  }, function (A, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var r = u(t(13)),
      n = t(0),
      o = u(t(15)),
      s = u(t(16)),
      a = u(t(4)),
      i = u(t(8)),
      B = u(t(7)),
      l = u(t(9)),
      c = u(t(6));
    u(t(10));

    function u(A) {
      return A && A.__esModule ? A : {
        default: A
      }
    }
    t(40);
    var d = function () {
      var A = void 0,
        e = function (e) {
          var t = this;
          return A || (this.kss = null, this.style = null, this.kssScreenShotWrapper = null, this.kssTextLayer = null, this.rectangleCanvas = null, this.toolbar = null, this.currentImgDom = null, this.isScreenshot = !1, this.snapshootList = [], this.drawingStatus = null, this.currentToolType = null, this.imgBase64 = null, this.isEdit = !1, this.startX = null, this.startY = null, this.width = null, this.height = null, this.dotSize = 6, this.lineSize = 2, this.toolShow = e.toolShow, this.toolbarWidth = null, this.toolbarHeight = 30, this.toolbarMarginTop = 5, this.toolbarColor = "#fb3838", this.toolbarLineWidth = 10, this.toolmousedown = null, this.toolmousemove = null, this.toolmouseup = null, this.copyPath = e.copyPath, this.needDownload = e.needDownload, this.endCB = e.endCB, this.startDrawDown = function (A) {
            var e = t;
            if (document.addEventListener("mouseup", e.cancelDrawingStatus), document.addEventListener("contextmenu", e.preventContextMenu), 0 === A.button && null === e.drawingStatus) {
              e.drawingStatus = 1, e.startX = A.clientX, e.startY = A.clientY, (0, n.remove)(document.getElementById("kssScreenShotWrapper"));
              var r = document.createElement("div");
              r.id = "kssScreenShotWrapper", e.kssScreenShotWrapper = r;
              var o = document.createElement("div");
              o.id = "kssTextLayer", e.kssTextLayer = o, r.appendChild(o), document.body.appendChild(r), document.addEventListener("mousemove", e.drawing), document.addEventListener("mouseup", e.endDraw)
            }
          }, this.drawing = function (A) {
            var e = t;
            e.drawingStatus = 2;
            var r = (0, l.default)(A),
              o = r[0],
              s = r[1];
            (0, n.css)(e.kssScreenShotWrapper, {
              height: Math.abs(s - e.startY) + "px",
              width: Math.abs(o - e.startX) + "px",
              top: Math.min(e.startY, s) + "px",
              left: Math.min(e.startX, o) + "px"
            })
          }, this.endDraw = function (A) {
            if (0 === A.button) {
              var e = t;
              if (e.drawingStatus = 3, e.startX === A.clientX && e.startY === A.clientY) {
                var r = document.documentElement.clientHeight,
                  B = document.documentElement.clientWidth;
                e.startX = 2, e.startY = 2, e.height = r - 4, e.width = B - 4, (0, n.css)(e.kssScreenShotWrapper, {
                  height: e.height + "px",
                  width: e.width + "px",
                  top: e.startY + "px",
                  left: e.startX + "px"
                })
              } else {
                var u = (0, l.default)(A),
                  d = u[0],
                  w = u[1];
                e.width = Math.abs(d - e.startX), e.height = Math.abs(w - e.startY), e.startX = Math.min(e.startX, d), e.startY = Math.min(e.startY, w)
              }
              document.removeEventListener("mousemove", e.drawing);
              var Q = document.createElement("canvas");
              Q.id = "kssRectangleCanvas", e.kssScreenShotWrapper.appendChild(Q), e.rectangleCanvas = Q, Q.addEventListener("mousedown", function (A) {
                if (!e.isEdit && 2 !== A.button) {
                  (0, i.default)(e);
                  var t = A.clientX,
                    r = A.clientY;
                  document.addEventListener("mousemove", B), document.addEventListener("mouseup", function A(t) {
                    void 0 === o && (o = e.startY);
                    void 0 === s && (s = e.startX);
                    e.startY = o;
                    e.startX = s;
                    document.removeEventListener("mousemove", B);
                    document.removeEventListener("mouseup", A);
                    (0, a.default)(e)
                  });
                  var o = void 0,
                    s = void 0
                }

                function B(A) {
                  var a = document.documentElement.clientHeight,
                    i = document.documentElement.clientWidth;
                  o = e.startY + A.clientY - r, e.startY + A.clientY - r + e.height > a && (o = a - e.height), e.startY + A.clientY - r < 0 && (o = 0), s = e.startX + A.clientX - t, e.startX + A.clientX - t + e.width > i && (s = i - e.width), e.startX + A.clientX - t < 0 && (s = 0), (0, n.css)(e.kssScreenShotWrapper, {
                    top: o + "px",
                    left: s + "px"
                  }), (0, c.default)(e, e.width, e.height, o, s, e.toolbar)
                }
              }), e.kss.removeEventListener("mousedown", e.startDrawDown), document.removeEventListener("mouseup", e.endDraw), (0, o.default)(e.kssScreenShotWrapper, e.dotSize, e.lineSize, e);
              var g = document.createElement("img");
              g.id = "kssCurrentImgDom", e.kssScreenShotWrapper.appendChild(g), e.currentImgDom = g, (0, a.default)(e), e.toolbar = (0, s.default)(e)
            }
          }, this.preventContextMenu = function (A) {
            A.preventDefault()
          }, this.cancelDrawingStatus = function (A) {
            var e = t;
            if (2 === A.button) {
              if (null === e.drawingStatus) return document.removeEventListener("mouseup", e.cancelDrawingStatus), setTimeout(function () {
                document.removeEventListener("contextmenu", e.preventContextMenu)
              }, 0), void(0, B.default)(e);
              (0, n.remove)(e.kssScreenShotWrapper), e.kssScreenShotWrapper = null, e.kssTextLayer = null, e.rectangleCanvas = null, e.drawingStatus = null, e.isEdit = !1, e.snapshootList = [], e.currentToolType = null, e.toolmousedown = null, e.toolmousemove = null, e.toolmouseup = null, e.kss.addEventListener("mousedown", e.startDrawDown)
            }
          }, this.startScreenShot = function () {
            t.start()
          }, this.endScreenShot = function () {
            (0, B.default)(t)
          }, this.init(e.key, e.immediately), A = this)
        };
      return e.prototype.init = function (A, e) {
        var t = this;
        if (!0 === e && (t.start(), t.end()), void 0 === A) A = 65;
        else if (null === A) return;
        document.addEventListener("keydown", function (A, e) {
          e.keyCode === A && e.shiftKey && !t.isScreenshot && (t.start(), t.end())
        }.bind(null, A))
      }, e.prototype.start = function () {
        var A = this;
        A.isScreenshot || (A.isScreenshot = !0, (0, r.default)(document.body, {
          useCORS: !0
        }).then(function (e) {
          A.kss = e, e.id = "kss", document.body.appendChild(e), (0, n.addClass)(document.body, "kssBody"), e.addEventListener("mousedown", A.startDrawDown)
        }))
      }, e.prototype.end = function () {
        var A = this;
        document.addEventListener("keydown", function e(t) {
          27 === t.keyCode && ((0, B.default)(A), document.removeEventListener("keydown", e))
        })
      }, e
    }();
    e.default = d
  }, function (A, e, t) {
    "use strict";
    (function (A) {
      var t, r, n, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (A) {
        return typeof A
      } : function (A) {
        return A && "function" == typeof Symbol && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A
      };
      ! function (s, a) {
        "object" == o(e) && "object" == o(A) ? A.exports = a() : (r = [], void 0 === (n = "function" == typeof (t = a) ? t.apply(e, r) : t) || (A.exports = n))
      }(0, function () {
        return function (A) {
          var e = {};

          function t(r) {
            if (e[r]) return e[r].exports;
            var n = e[r] = {
              i: r,
              l: !1,
              exports: {}
            };
            return A[r].call(n.exports, n, n.exports, t), n.l = !0, n.exports
          }
          return t.m = A, t.c = e, t.d = function (A, e, r) {
            t.o(A, e) || Object.defineProperty(A, e, {
              configurable: !1,
              enumerable: !0,
              get: r
            })
          }, t.n = function (A) {
            var e = A && A.__esModule ? function () {
              return A.default
            } : function () {
              return A
            };
            return t.d(e, "a", e), e
          }, t.o = function (A, e) {
            return Object.prototype.hasOwnProperty.call(A, e)
          }, t.p = "", t(t.s = 27)
        }([function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          });
          var r = function (A, e) {
              if (Array.isArray(A)) return A;
              if (Symbol.iterator in Object(A)) return function (A, e) {
                var t = [],
                  r = !0,
                  n = !1,
                  o = void 0;
                try {
                  for (var s, a = A[Symbol.iterator](); !(r = (s = a.next()).done) && (t.push(s.value), !e || t.length !== e); r = !0);
                } catch (A) {
                  n = !0, o = A
                } finally {
                  try {
                    !r && a.return && a.return()
                  } finally {
                    if (n) throw o
                  }
                }
                return t
              }(A, e);
              throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            n = function () {
              function A(A, e) {
                for (var t = 0; t < e.length; t++) {
                  var r = e[t];
                  r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(A, r.key, r)
                }
              }
              return function (e, t, r) {
                return t && A(e.prototype, t), r && A(e, r), e
              }
            }(),
            o = /^#([a-f0-9]{3})$/i,
            s = function (A) {
              var e = A.match(o);
              return !!e && [parseInt(e[1][0] + e[1][0], 16), parseInt(e[1][1] + e[1][1], 16), parseInt(e[1][2] + e[1][2], 16), null]
            },
            a = /^#([a-f0-9]{6})$/i,
            i = function (A) {
              var e = A.match(a);
              return !!e && [parseInt(e[1].substring(0, 2), 16), parseInt(e[1].substring(2, 4), 16), parseInt(e[1].substring(4, 6), 16), null]
            },
            B = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/,
            l = function (A) {
              var e = A.match(B);
              return !!e && [Number(e[1]), Number(e[2]), Number(e[3]), null]
            },
            c = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/,
            u = function (A) {
              var e = A.match(c);
              return !!(e && e.length > 4) && [Number(e[1]), Number(e[2]), Number(e[3]), Number(e[4])]
            },
            d = function (A) {
              return [Math.min(A[0], 255), Math.min(A[1], 255), Math.min(A[2], 255), A.length > 3 ? A[3] : null]
            },
            w = function (A) {
              return g[A.toLowerCase()] || !1
            },
            Q = function () {
              function A(e) {
                ! function (A, e) {
                  if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, A);
                var t = Array.isArray(e) ? d(e) : s(e) || l(e) || u(e) || w(e) || i(e) || [0, 0, 0, null],
                  n = r(t, 4),
                  o = n[0],
                  a = n[1],
                  B = n[2],
                  c = n[3];
                this.r = o, this.g = a, this.b = B, this.a = c
              }
              return n(A, [{
                key: "isTransparent",
                value: function () {
                  return 0 === this.a
                }
              }, {
                key: "toString",
                value: function () {
                  return null !== this.a && 1 !== this.a ? "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")" : "rgb(" + this.r + "," + this.g + "," + this.b + ")"
                }
              }]), A
            }();
          e.default = Q;
          var g = {
            transparent: [0, 0, 0, 0],
            aliceblue: [240, 248, 255, null],
            antiquewhite: [250, 235, 215, null],
            aqua: [0, 255, 255, null],
            aquamarine: [127, 255, 212, null],
            azure: [240, 255, 255, null],
            beige: [245, 245, 220, null],
            bisque: [255, 228, 196, null],
            black: [0, 0, 0, null],
            blanchedalmond: [255, 235, 205, null],
            blue: [0, 0, 255, null],
            blueviolet: [138, 43, 226, null],
            brown: [165, 42, 42, null],
            burlywood: [222, 184, 135, null],
            cadetblue: [95, 158, 160, null],
            chartreuse: [127, 255, 0, null],
            chocolate: [210, 105, 30, null],
            coral: [255, 127, 80, null],
            cornflowerblue: [100, 149, 237, null],
            cornsilk: [255, 248, 220, null],
            crimson: [220, 20, 60, null],
            cyan: [0, 255, 255, null],
            darkblue: [0, 0, 139, null],
            darkcyan: [0, 139, 139, null],
            darkgoldenrod: [184, 134, 11, null],
            darkgray: [169, 169, 169, null],
            darkgreen: [0, 100, 0, null],
            darkgrey: [169, 169, 169, null],
            darkkhaki: [189, 183, 107, null],
            darkmagenta: [139, 0, 139, null],
            darkolivegreen: [85, 107, 47, null],
            darkorange: [255, 140, 0, null],
            darkorchid: [153, 50, 204, null],
            darkred: [139, 0, 0, null],
            darksalmon: [233, 150, 122, null],
            darkseagreen: [143, 188, 143, null],
            darkslateblue: [72, 61, 139, null],
            darkslategray: [47, 79, 79, null],
            darkslategrey: [47, 79, 79, null],
            darkturquoise: [0, 206, 209, null],
            darkviolet: [148, 0, 211, null],
            deeppink: [255, 20, 147, null],
            deepskyblue: [0, 191, 255, null],
            dimgray: [105, 105, 105, null],
            dimgrey: [105, 105, 105, null],
            dodgerblue: [30, 144, 255, null],
            firebrick: [178, 34, 34, null],
            floralwhite: [255, 250, 240, null],
            forestgreen: [34, 139, 34, null],
            fuchsia: [255, 0, 255, null],
            gainsboro: [220, 220, 220, null],
            ghostwhite: [248, 248, 255, null],
            gold: [255, 215, 0, null],
            goldenrod: [218, 165, 32, null],
            gray: [128, 128, 128, null],
            green: [0, 128, 0, null],
            greenyellow: [173, 255, 47, null],
            grey: [128, 128, 128, null],
            honeydew: [240, 255, 240, null],
            hotpink: [255, 105, 180, null],
            indianred: [205, 92, 92, null],
            indigo: [75, 0, 130, null],
            ivory: [255, 255, 240, null],
            khaki: [240, 230, 140, null],
            lavender: [230, 230, 250, null],
            lavenderblush: [255, 240, 245, null],
            lawngreen: [124, 252, 0, null],
            lemonchiffon: [255, 250, 205, null],
            lightblue: [173, 216, 230, null],
            lightcoral: [240, 128, 128, null],
            lightcyan: [224, 255, 255, null],
            lightgoldenrodyellow: [250, 250, 210, null],
            lightgray: [211, 211, 211, null],
            lightgreen: [144, 238, 144, null],
            lightgrey: [211, 211, 211, null],
            lightpink: [255, 182, 193, null],
            lightsalmon: [255, 160, 122, null],
            lightseagreen: [32, 178, 170, null],
            lightskyblue: [135, 206, 250, null],
            lightslategray: [119, 136, 153, null],
            lightslategrey: [119, 136, 153, null],
            lightsteelblue: [176, 196, 222, null],
            lightyellow: [255, 255, 224, null],
            lime: [0, 255, 0, null],
            limegreen: [50, 205, 50, null],
            linen: [250, 240, 230, null],
            magenta: [255, 0, 255, null],
            maroon: [128, 0, 0, null],
            mediumaquamarine: [102, 205, 170, null],
            mediumblue: [0, 0, 205, null],
            mediumorchid: [186, 85, 211, null],
            mediumpurple: [147, 112, 219, null],
            mediumseagreen: [60, 179, 113, null],
            mediumslateblue: [123, 104, 238, null],
            mediumspringgreen: [0, 250, 154, null],
            mediumturquoise: [72, 209, 204, null],
            mediumvioletred: [199, 21, 133, null],
            midnightblue: [25, 25, 112, null],
            mintcream: [245, 255, 250, null],
            mistyrose: [255, 228, 225, null],
            moccasin: [255, 228, 181, null],
            navajowhite: [255, 222, 173, null],
            navy: [0, 0, 128, null],
            oldlace: [253, 245, 230, null],
            olive: [128, 128, 0, null],
            olivedrab: [107, 142, 35, null],
            orange: [255, 165, 0, null],
            orangered: [255, 69, 0, null],
            orchid: [218, 112, 214, null],
            palegoldenrod: [238, 232, 170, null],
            palegreen: [152, 251, 152, null],
            paleturquoise: [175, 238, 238, null],
            palevioletred: [219, 112, 147, null],
            papayawhip: [255, 239, 213, null],
            peachpuff: [255, 218, 185, null],
            peru: [205, 133, 63, null],
            pink: [255, 192, 203, null],
            plum: [221, 160, 221, null],
            powderblue: [176, 224, 230, null],
            purple: [128, 0, 128, null],
            rebeccapurple: [102, 51, 153, null],
            red: [255, 0, 0, null],
            rosybrown: [188, 143, 143, null],
            royalblue: [65, 105, 225, null],
            saddlebrown: [139, 69, 19, null],
            salmon: [250, 128, 114, null],
            sandybrown: [244, 164, 96, null],
            seagreen: [46, 139, 87, null],
            seashell: [255, 245, 238, null],
            sienna: [160, 82, 45, null],
            silver: [192, 192, 192, null],
            skyblue: [135, 206, 235, null],
            slateblue: [106, 90, 205, null],
            slategray: [112, 128, 144, null],
            slategrey: [112, 128, 144, null],
            snow: [255, 250, 250, null],
            springgreen: [0, 255, 127, null],
            steelblue: [70, 130, 180, null],
            tan: [210, 180, 140, null],
            teal: [0, 128, 128, null],
            thistle: [216, 191, 216, null],
            tomato: [255, 99, 71, null],
            turquoise: [64, 224, 208, null],
            violet: [238, 130, 238, null],
            wheat: [245, 222, 179, null],
            white: [255, 255, 255, null],
            whitesmoke: [245, 245, 245, null],
            yellow: [255, 255, 0, null],
            yellowgreen: [154, 205, 50, null]
          };
          e.TRANSPARENT = new Q([0, 0, 0, 0])
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.calculateLengthFromValueWithUnit = e.LENGTH_TYPE = void 0;
          var r, n = function () {
            function A(A, e) {
              for (var t = 0; t < e.length; t++) {
                var r = e[t];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(A, r.key, r)
              }
            }
            return function (e, t, r) {
              return t && A(e.prototype, t), r && A(e, r), e
            }
          }();
          (r = t(3)) && r.__esModule;
          var o = e.LENGTH_TYPE = {
              PX: 0,
              PERCENTAGE: 1
            },
            s = function () {
              function A(e) {
                ! function (A, e) {
                  if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, A), this.type = "%" === e.substr(e.length - 1) ? o.PERCENTAGE : o.PX;
                var t = parseFloat(e);
                this.value = isNaN(t) ? 0 : t
              }
              return n(A, [{
                key: "isPercentage",
                value: function () {
                  return this.type === o.PERCENTAGE
                }
              }, {
                key: "getAbsoluteValue",
                value: function (A) {
                  return this.isPercentage() ? A * (this.value / 100) : this.value
                }
              }], [{
                key: "create",
                value: function (e) {
                  return new A(e)
                }
              }]), A
            }();
          e.default = s, e.calculateLengthFromValueWithUnit = function (A, e, t) {
            switch (t) {
              case "px":
              case "%":
                return new s(e + t);
              case "em":
              case "rem":
                var r = new s(e);
                return r.value *= "em" === t ? parseFloat(A.style.font.fontSize) : function A(e) {
                  var t = e.parent;
                  return t ? A(t) : parseFloat(e.style.font.fontSize)
                }(A), r;
              default:
                return new s("0")
            }
          }
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.parseBoundCurves = e.calculatePaddingBoxPath = e.calculateBorderBoxPath = e.parsePathForBorder = e.parseDocumentSize = e.calculateContentBox = e.calculatePaddingBox = e.parseBounds = e.Bounds = void 0;
          var r = function () {
              function A(A, e) {
                for (var t = 0; t < e.length; t++) {
                  var r = e[t];
                  r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(A, r.key, r)
                }
              }
              return function (e, t, r) {
                return t && A(e.prototype, t), r && A(e, r), e
              }
            }(),
            n = s(t(7)),
            o = s(t(32));

          function s(A) {
            return A && A.__esModule ? A : {
              default: A
            }
          }
          var a = e.Bounds = function () {
              function A(e, t, r, n) {
                ! function (A, e) {
                  if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, A), this.left = e, this.top = t, this.width = r, this.height = n
              }
              return r(A, null, [{
                key: "fromClientRect",
                value: function (e, t, r) {
                  return new A(e.left + t, e.top + r, e.width, e.height)
                }
              }]), A
            }(),
            i = (e.parseBounds = function (A, e, t) {
              return a.fromClientRect(A.getBoundingClientRect(), e, t)
            }, e.calculatePaddingBox = function (A, e) {
              return new a(A.left + e[3].borderWidth, A.top + e[0].borderWidth, A.width - (e[1].borderWidth + e[3].borderWidth), A.height - (e[0].borderWidth + e[2].borderWidth))
            }, e.calculateContentBox = function (A, e, t) {
              var r = e[0].value,
                n = e[1].value,
                o = e[2].value,
                s = e[3].value;
              return new a(A.left + s + t[3].borderWidth, A.top + r + t[0].borderWidth, A.width - (t[1].borderWidth + t[3].borderWidth + s + n), A.height - (t[0].borderWidth + t[2].borderWidth + r + o))
            }, e.parseDocumentSize = function (A) {
              var e = A.body,
                t = A.documentElement;
              if (!e || !t) throw new Error("");
              var r = Math.max(Math.max(e.scrollWidth, t.scrollWidth), Math.max(e.offsetWidth, t.offsetWidth), Math.max(e.clientWidth, t.clientWidth)),
                n = Math.max(Math.max(e.scrollHeight, t.scrollHeight), Math.max(e.offsetHeight, t.offsetHeight), Math.max(e.clientHeight, t.clientHeight));
              return new a(0, 0, r, n)
            }, e.parsePathForBorder = function (A, e) {
              switch (e) {
                case 0:
                  return i(A.topLeftOuter, A.topLeftInner, A.topRightOuter, A.topRightInner);
                case 1:
                  return i(A.topRightOuter, A.topRightInner, A.bottomRightOuter, A.bottomRightInner);
                case 2:
                  return i(A.bottomRightOuter, A.bottomRightInner, A.bottomLeftOuter, A.bottomLeftInner);
                case 3:
                default:
                  return i(A.bottomLeftOuter, A.bottomLeftInner, A.topLeftOuter, A.topLeftInner)
              }
            }, function (A, e, t, r) {
              var n = [];
              return A instanceof o.default ? n.push(A.subdivide(.5, !1)) : n.push(A), t instanceof o.default ? n.push(t.subdivide(.5, !0)) : n.push(t), r instanceof o.default ? n.push(r.subdivide(.5, !0).reverse()) : n.push(r), e instanceof o.default ? n.push(e.subdivide(.5, !1).reverse()) : n.push(e), n
            }),
            B = (e.calculateBorderBoxPath = function (A) {
              return [A.topLeftOuter, A.topRightOuter, A.bottomRightOuter, A.bottomLeftOuter]
            }, e.calculatePaddingBoxPath = function (A) {
              return [A.topLeftInner, A.topRightInner, A.bottomRightInner, A.bottomLeftInner]
            }, e.parseBoundCurves = function (A, e, t) {
              var r = t[B.TOP_LEFT][0].getAbsoluteValue(A.width),
                o = t[B.TOP_LEFT][1].getAbsoluteValue(A.height),
                s = t[B.TOP_RIGHT][0].getAbsoluteValue(A.width),
                a = t[B.TOP_RIGHT][1].getAbsoluteValue(A.height),
                i = t[B.BOTTOM_RIGHT][0].getAbsoluteValue(A.width),
                c = t[B.BOTTOM_RIGHT][1].getAbsoluteValue(A.height),
                u = t[B.BOTTOM_LEFT][0].getAbsoluteValue(A.width),
                d = t[B.BOTTOM_LEFT][1].getAbsoluteValue(A.height),
                w = [];
              w.push((r + s) / A.width), w.push((u + i) / A.width), w.push((o + d) / A.height), w.push((a + c) / A.height);
              var Q = Math.max.apply(Math, w);
              Q > 1 && (r /= Q, o /= Q, s /= Q, a /= Q, i /= Q, c /= Q, u /= Q, d /= Q);
              var g = A.width - s,
                h = A.height - c,
                f = A.width - i,
                U = A.height - d;
              return {
                topLeftOuter: r > 0 || o > 0 ? l(A.left, A.top, r, o, B.TOP_LEFT) : new n.default(A.left, A.top),
                topLeftInner: r > 0 || o > 0 ? l(A.left + e[3].borderWidth, A.top + e[0].borderWidth, Math.max(0, r - e[3].borderWidth), Math.max(0, o - e[0].borderWidth), B.TOP_LEFT) : new n.default(A.left + e[3].borderWidth, A.top + e[0].borderWidth),
                topRightOuter: s > 0 || a > 0 ? l(A.left + g, A.top, s, a, B.TOP_RIGHT) : new n.default(A.left + A.width, A.top),
                topRightInner: s > 0 || a > 0 ? l(A.left + Math.min(g, A.width + e[3].borderWidth), A.top + e[0].borderWidth, g > A.width + e[3].borderWidth ? 0 : s - e[3].borderWidth, a - e[0].borderWidth, B.TOP_RIGHT) : new n.default(A.left + A.width - e[1].borderWidth, A.top + e[0].borderWidth),
                bottomRightOuter: i > 0 || c > 0 ? l(A.left + f, A.top + h, i, c, B.BOTTOM_RIGHT) : new n.default(A.left + A.width, A.top + A.height),
                bottomRightInner: i > 0 || c > 0 ? l(A.left + Math.min(f, A.width - e[3].borderWidth), A.top + Math.min(h, A.height + e[0].borderWidth), Math.max(0, i - e[1].borderWidth), c - e[2].borderWidth, B.BOTTOM_RIGHT) : new n.default(A.left + A.width - e[1].borderWidth, A.top + A.height - e[2].borderWidth),
                bottomLeftOuter: u > 0 || d > 0 ? l(A.left, A.top + U, u, d, B.BOTTOM_LEFT) : new n.default(A.left, A.top + A.height),
                bottomLeftInner: u > 0 || d > 0 ? l(A.left + e[3].borderWidth, A.top + U, Math.max(0, u - e[3].borderWidth), d - e[2].borderWidth, B.BOTTOM_LEFT) : new n.default(A.left + e[3].borderWidth, A.top + A.height - e[2].borderWidth)
              }
            }, {
              TOP_LEFT: 0,
              TOP_RIGHT: 1,
              BOTTOM_RIGHT: 2,
              BOTTOM_LEFT: 3
            }),
            l = function (A, e, t, r, s) {
              var a = (Math.sqrt(2) - 1) / 3 * 4,
                i = t * a,
                l = r * a,
                c = A + t,
                u = e + r;
              switch (s) {
                case B.TOP_LEFT:
                  return new o.default(new n.default(A, u), new n.default(A, u - l), new n.default(c - i, e), new n.default(c, e));
                case B.TOP_RIGHT:
                  return new o.default(new n.default(A, e), new n.default(A + i, e), new n.default(c, u - l), new n.default(c, u));
                case B.BOTTOM_RIGHT:
                  return new o.default(new n.default(c, e), new n.default(c, e + l), new n.default(A + i, u), new n.default(A, u));
                case B.BOTTOM_LEFT:
                default:
                  return new o.default(new n.default(c, u), new n.default(c - i, u), new n.default(A, e + l), new n.default(A, e))
              }
            }
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          });
          var r, n = function () {
              function A(A, e) {
                for (var t = 0; t < e.length; t++) {
                  var r = e[t];
                  r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(A, r.key, r)
                }
              }
              return function (e, t, r) {
                return t && A(e.prototype, t), r && A(e, r), e
              }
            }(),
            o = (r = t(0)) && r.__esModule ? r : {
              default: r
            },
            s = t(4),
            a = t(5),
            i = t(12),
            B = t(33),
            l = t(34),
            c = t(35),
            u = t(36),
            d = t(37),
            w = t(38),
            Q = t(8),
            g = t(39),
            h = t(40),
            f = t(18),
            U = t(17),
            C = t(19),
            E = t(11),
            F = t(41),
            p = t(20),
            H = t(42),
            m = t(43),
            v = t(44),
            b = t(45),
            I = t(2),
            T = t(21),
            N = t(14),
            y = ["INPUT", "TEXTAREA", "SELECT"],
            K = function () {
              function A(e, t, r, n) {
                var s = this;
                ! function (A, e) {
                  if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, A), this.parent = t, this.tagName = e.tagName, this.index = n, this.childNodes = [], this.listItems = [], "number" == typeof e.start && (this.listStart = e.start);
                var K = e.ownerDocument.defaultView,
                  L = K.pageXOffset,
                  M = K.pageYOffset,
                  D = K.getComputedStyle(e, null),
                  O = (0, l.parseDisplay)(D.display),
                  _ = "radio" === e.type || "checkbox" === e.type,
                  R = (0, C.parsePosition)(D.position);
                if (this.style = {
                    background: _ ? T.INPUT_BACKGROUND : (0, a.parseBackground)(D, r),
                    border: _ ? T.INPUT_BORDERS : (0, i.parseBorder)(D),
                    borderRadius: (e instanceof K.HTMLInputElement || e instanceof HTMLInputElement) && _ ? (0, T.getInputBorderRadius)(e) : (0, B.parseBorderRadius)(D),
                    color: _ ? T.INPUT_COLOR : new o.default(D.color),
                    display: O,
                    float: (0, c.parseCSSFloat)(D.float),
                    font: (0, u.parseFont)(D),
                    letterSpacing: (0, d.parseLetterSpacing)(D.letterSpacing),
                    listStyle: O === l.DISPLAY.LIST_ITEM ? (0, Q.parseListStyle)(D) : null,
                    lineBreak: (0, w.parseLineBreak)(D.lineBreak),
                    margin: (0, g.parseMargin)(D),
                    opacity: parseFloat(D.opacity),
                    overflow: -1 === y.indexOf(e.tagName) ? (0, h.parseOverflow)(D.overflow) : h.OVERFLOW.HIDDEN,
                    overflowWrap: (0, f.parseOverflowWrap)(D.overflowWrap ? D.overflowWrap : D.wordWrap),
                    padding: (0, U.parsePadding)(D),
                    position: R,
                    textDecoration: (0, E.parseTextDecoration)(D),
                    textShadow: (0, F.parseTextShadow)(D.textShadow),
                    textTransform: (0, p.parseTextTransform)(D.textTransform),
                    transform: (0, H.parseTransform)(D),
                    visibility: (0, m.parseVisibility)(D.visibility),
                    wordBreak: (0, v.parseWordBreak)(D.wordBreak),
                    zIndex: (0, b.parseZIndex)(R !== C.POSITION.STATIC ? D.zIndex : "auto")
                  }, this.isTransformed() && (e.style.transform = "matrix(1,0,0,1,0,0)"), O === l.DISPLAY.LIST_ITEM) {
                  var P = (0, N.getListOwner)(this);
                  if (P) {
                    var k = P.listItems.length;
                    P.listItems.push(this), this.listIndex = e.hasAttribute("value") && "number" == typeof e.value ? e.value : 0 === k ? "number" == typeof P.listStart ? P.listStart : 1 : P.listItems[k - 1].listIndex + 1
                  }
                }
                "IMG" === e.tagName && e.addEventListener("load", function () {
                  s.bounds = (0, I.parseBounds)(e, L, M), s.curvedBounds = (0, I.parseBoundCurves)(s.bounds, s.style.border, s.style.borderRadius)
                }), this.image = S(e, r), this.bounds = _ ? (0, T.reformatInputBounds)((0, I.parseBounds)(e, L, M)) : (0, I.parseBounds)(e, L, M), this.curvedBounds = (0, I.parseBoundCurves)(this.bounds, this.style.border, this.style.borderRadius)
              }
              return n(A, [{
                key: "getClipPaths",
                value: function () {
                  var A = this.parent ? this.parent.getClipPaths() : [];
                  return this.style.overflow !== h.OVERFLOW.VISIBLE ? A.concat([(0, I.calculatePaddingBoxPath)(this.curvedBounds)]) : A
                }
              }, {
                key: "isInFlow",
                value: function () {
                  return this.isRootElement() && !this.isFloating() && !this.isAbsolutelyPositioned()
                }
              }, {
                key: "isVisible",
                value: function () {
                  return !(0, s.contains)(this.style.display, l.DISPLAY.NONE) && this.style.opacity > 0 && this.style.visibility === m.VISIBILITY.VISIBLE
                }
              }, {
                key: "isAbsolutelyPositioned",
                value: function () {
                  return this.style.position !== C.POSITION.STATIC && this.style.position !== C.POSITION.RELATIVE
                }
              }, {
                key: "isPositioned",
                value: function () {
                  return this.style.position !== C.POSITION.STATIC
                }
              }, {
                key: "isFloating",
                value: function () {
                  return this.style.float !== c.FLOAT.NONE
                }
              }, {
                key: "isRootElement",
                value: function () {
                  return null === this.parent
                }
              }, {
                key: "isTransformed",
                value: function () {
                  return null !== this.style.transform
                }
              }, {
                key: "isPositionedWithZIndex",
                value: function () {
                  return this.isPositioned() && !this.style.zIndex.auto
                }
              }, {
                key: "isInlineLevel",
                value: function () {
                  return (0, s.contains)(this.style.display, l.DISPLAY.INLINE) || (0, s.contains)(this.style.display, l.DISPLAY.INLINE_BLOCK) || (0, s.contains)(this.style.display, l.DISPLAY.INLINE_FLEX) || (0, s.contains)(this.style.display, l.DISPLAY.INLINE_GRID) || (0, s.contains)(this.style.display, l.DISPLAY.INLINE_LIST_ITEM) || (0, s.contains)(this.style.display, l.DISPLAY.INLINE_TABLE)
                }
              }, {
                key: "isInlineBlockOrInlineTable",
                value: function () {
                  return (0, s.contains)(this.style.display, l.DISPLAY.INLINE_BLOCK) || (0, s.contains)(this.style.display, l.DISPLAY.INLINE_TABLE)
                }
              }]), A
            }();
          e.default = K;
          var S = function (A, e) {
            if (A instanceof A.ownerDocument.defaultView.SVGSVGElement || A instanceof SVGSVGElement) {
              var t = new XMLSerializer;
              return e.loadImage("data:image/svg+xml," + encodeURIComponent(t.serializeToString(A)))
            }
            switch (A.tagName) {
              case "IMG":
                var r = A;
                return e.loadImage(r.currentSrc || r.src);
              case "CANVAS":
                var n = A;
                return e.loadCanvas(n);
              case "IFRAME":
                var o = A.getAttribute("data-html2canvas-internal-iframe-key");
                if (o) return o
            }
            return null
          }
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.contains = function (A, e) {
            return 0 != (A & e)
          }, e.distance = function (A, e) {
            return Math.sqrt(A * A + e * e)
          }, e.copyCSSStyles = function (A, e) {
            for (var t = A.length - 1; t >= 0; t--) {
              var r = A.item(t);
              "content" !== r && e.style.setProperty(r, A.getPropertyValue(r))
            }
            return e
          }, e.SMALL_IMAGE = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.parseBackgroundImage = e.parseBackground = e.calculateBackgroundRepeatPath = e.calculateBackgroundPosition = e.calculateBackgroungPositioningArea = e.calculateBackgroungPaintingArea = e.calculateGradientBackgroundSize = e.calculateBackgroundSize = e.BACKGROUND_ORIGIN = e.BACKGROUND_CLIP = e.BACKGROUND_SIZE = e.BACKGROUND_REPEAT = void 0;
          var r = B(t(0)),
            n = B(t(1)),
            o = B(t(31)),
            s = B(t(7)),
            a = t(2),
            i = t(17);

          function B(A) {
            return A && A.__esModule ? A : {
              default: A
            }
          }
          var l = e.BACKGROUND_REPEAT = {
              REPEAT: 0,
              NO_REPEAT: 1,
              REPEAT_X: 2,
              REPEAT_Y: 3
            },
            c = e.BACKGROUND_SIZE = {
              AUTO: 0,
              CONTAIN: 1,
              COVER: 2,
              LENGTH: 3
            },
            u = e.BACKGROUND_CLIP = {
              BORDER_BOX: 0,
              PADDING_BOX: 1,
              CONTENT_BOX: 2
            },
            d = e.BACKGROUND_ORIGIN = u,
            w = function A(e) {
              switch (function (A, e) {
                if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
              }(this, A), e) {
                case "contain":
                  this.size = c.CONTAIN;
                  break;
                case "cover":
                  this.size = c.COVER;
                  break;
                case "auto":
                  this.size = c.AUTO;
                  break;
                default:
                  this.value = new n.default(e)
              }
            },
            Q = (e.calculateBackgroundSize = function (A, e, t) {
              var r = 0,
                n = 0,
                s = A.size;
              if (s[0].size === c.CONTAIN || s[0].size === c.COVER) {
                var a = t.width / t.height,
                  i = e.width / e.height;
                return a < i != (s[0].size === c.COVER) ? new o.default(t.width, t.width / i) : new o.default(t.height * i, t.height)
              }
              return s[0].value && (r = s[0].value.getAbsoluteValue(t.width)), s[0].size === c.AUTO && s[1].size === c.AUTO ? n = e.height : s[1].size === c.AUTO ? n = r / e.width * e.height : s[1].value && (n = s[1].value.getAbsoluteValue(t.height)), s[0].size === c.AUTO && (r = n / e.height * e.width), new o.default(r, n)
            }, e.calculateGradientBackgroundSize = function (A, e) {
              var t = A.size,
                r = t[0].value ? t[0].value.getAbsoluteValue(e.width) : e.width,
                n = t[1].value ? t[1].value.getAbsoluteValue(e.height) : t[0].value ? r : e.height;
              return new o.default(r, n)
            }, new w("auto")),
            g = (e.calculateBackgroungPaintingArea = function (A, e) {
              switch (e) {
                case u.BORDER_BOX:
                  return (0, a.calculateBorderBoxPath)(A);
                case u.PADDING_BOX:
                default:
                  return (0, a.calculatePaddingBoxPath)(A)
              }
            }, e.calculateBackgroungPositioningArea = function (A, e, t, r) {
              var n = (0, a.calculatePaddingBox)(e, r);
              switch (A) {
                case d.BORDER_BOX:
                  return e;
                case d.CONTENT_BOX:
                  var o = t[i.PADDING_SIDES.LEFT].getAbsoluteValue(e.width),
                    s = t[i.PADDING_SIDES.RIGHT].getAbsoluteValue(e.width),
                    B = t[i.PADDING_SIDES.TOP].getAbsoluteValue(e.width),
                    l = t[i.PADDING_SIDES.BOTTOM].getAbsoluteValue(e.width);
                  return new a.Bounds(n.left + o, n.top + B, n.width - o - s, n.height - B - l);
                case d.PADDING_BOX:
                default:
                  return n
              }
            }, e.calculateBackgroundPosition = function (A, e, t) {
              return new s.default(A[0].getAbsoluteValue(t.width - e.width), A[1].getAbsoluteValue(t.height - e.height))
            }, e.calculateBackgroundRepeatPath = function (A, e, t, r, n) {
              switch (A.repeat) {
                case l.REPEAT_X:
                  return [new s.default(Math.round(n.left), Math.round(r.top + e.y)), new s.default(Math.round(n.left + n.width), Math.round(r.top + e.y)), new s.default(Math.round(n.left + n.width), Math.round(t.height + r.top + e.y)), new s.default(Math.round(n.left), Math.round(t.height + r.top + e.y))];
                case l.REPEAT_Y:
                  return [new s.default(Math.round(r.left + e.x), Math.round(n.top)), new s.default(Math.round(r.left + e.x + t.width), Math.round(n.top)), new s.default(Math.round(r.left + e.x + t.width), Math.round(n.height + n.top)), new s.default(Math.round(r.left + e.x), Math.round(n.height + n.top))];
                case l.NO_REPEAT:
                  return [new s.default(Math.round(r.left + e.x), Math.round(r.top + e.y)), new s.default(Math.round(r.left + e.x + t.width), Math.round(r.top + e.y)), new s.default(Math.round(r.left + e.x + t.width), Math.round(r.top + e.y + t.height)), new s.default(Math.round(r.left + e.x), Math.round(r.top + e.y + t.height))];
                default:
                  return [new s.default(Math.round(n.left), Math.round(n.top)), new s.default(Math.round(n.left + n.width), Math.round(n.top)), new s.default(Math.round(n.left + n.width), Math.round(n.height + n.top)), new s.default(Math.round(n.left), Math.round(n.height + n.top))]
              }
            }, e.parseBackground = function (A, e) {
              return {
                backgroundColor: new r.default(A.backgroundColor),
                backgroundImage: f(A, e),
                backgroundClip: g(A.backgroundClip),
                backgroundOrigin: h(A.backgroundOrigin)
              }
            }, function (A) {
              switch (A) {
                case "padding-box":
                  return u.PADDING_BOX;
                case "content-box":
                  return u.CONTENT_BOX
              }
              return u.BORDER_BOX
            }),
            h = function (A) {
              switch (A) {
                case "padding-box":
                  return d.PADDING_BOX;
                case "content-box":
                  return d.CONTENT_BOX
              }
              return d.BORDER_BOX
            },
            f = function (A, e) {
              var t = E(A.backgroundImage).map(function (A) {
                  if ("url" === A.method) {
                    var t = e.loadImage(A.args[0]);
                    A.args = t ? [t] : []
                  }
                  return A
                }),
                r = A.backgroundPosition.split(","),
                n = A.backgroundRepeat.split(","),
                o = A.backgroundSize.split(",");
              return t.map(function (A, e) {
                var t = (o[e] || "auto").trim().split(" ").map(U),
                  s = (r[e] || "auto").trim().split(" ").map(C);
                return {
                  source: A,
                  repeat: function (A) {
                    switch (("string" == typeof n[e] ? n[e] : n[0]).trim()) {
                      case "no-repeat":
                        return l.NO_REPEAT;
                      case "repeat-x":
                      case "repeat no-repeat":
                        return l.REPEAT_X;
                      case "repeat-y":
                      case "no-repeat repeat":
                        return l.REPEAT_Y;
                      case "repeat":
                        return l.REPEAT
                    }
                    return l.REPEAT
                  }(),
                  size: t.length < 2 ? [t[0], Q] : [t[0], t[1]],
                  position: s.length < 2 ? [s[0], s[0]] : [s[0], s[1]]
                }
              })
            },
            U = function (A) {
              return "auto" === A ? Q : new w(A)
            },
            C = function (A) {
              switch (A) {
                case "bottom":
                case "right":
                  return new n.default("100%");
                case "left":
                case "top":
                  return new n.default("0%");
                case "auto":
                  return new n.default("0")
              }
              return new n.default(A)
            },
            E = e.parseBackgroundImage = function (A) {
              var e = /^\s$/,
                t = [],
                r = [],
                n = "",
                o = null,
                s = "",
                a = 0,
                i = 0,
                B = function () {
                  var A = "";
                  if (n) {
                    '"' === s.substr(0, 1) && (s = s.substr(1, s.length - 2)), s && r.push(s.trim());
                    var e = n.indexOf("-", 1) + 1;
                    "-" === n.substr(0, 1) && e > 0 && (A = n.substr(0, e).toLowerCase(), n = n.substr(e)), "none" !== (n = n.toLowerCase()) && t.push({
                      prefix: A,
                      method: n,
                      args: r
                    })
                  }
                  r = [], n = s = ""
                };
              return A.split("").forEach(function (A) {
                if (0 !== a || !e.test(A)) {
                  switch (A) {
                    case '"':
                      o ? o === A && (o = null) : o = A;
                      break;
                    case "(":
                      if (o) break;
                      if (0 === a) return void(a = 1);
                      i++;
                      break;
                    case ")":
                      if (o) break;
                      if (1 === a) {
                        if (0 === i) return a = 0, void B();
                        i--
                      }
                      break;
                    case ",":
                      if (o) break;
                      if (0 === a) return void B();
                      if (1 === a && 0 === i && !n.match(/^url$/i)) return r.push(s.trim()), void(s = "")
                  }
                  0 === a ? n += A : s += A
                }
              }), B(), t
            }
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.PATH = {
            VECTOR: 0,
            BEZIER_CURVE: 1,
            CIRCLE: 2
          }
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          });
          var r = t(6);
          e.default = function A(e, t) {
            ! function (A, e) {
              if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, A), this.type = r.PATH.VECTOR, this.x = e, this.y = t
          }
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.parseListStyle = e.parseListStyleType = e.LIST_STYLE_TYPE = e.LIST_STYLE_POSITION = void 0;
          var r = t(5),
            n = e.LIST_STYLE_POSITION = {
              INSIDE: 0,
              OUTSIDE: 1
            },
            o = e.LIST_STYLE_TYPE = {
              NONE: -1,
              DISC: 0,
              CIRCLE: 1,
              SQUARE: 2,
              DECIMAL: 3,
              CJK_DECIMAL: 4,
              DECIMAL_LEADING_ZERO: 5,
              LOWER_ROMAN: 6,
              UPPER_ROMAN: 7,
              LOWER_GREEK: 8,
              LOWER_ALPHA: 9,
              UPPER_ALPHA: 10,
              ARABIC_INDIC: 11,
              ARMENIAN: 12,
              BENGALI: 13,
              CAMBODIAN: 14,
              CJK_EARTHLY_BRANCH: 15,
              CJK_HEAVENLY_STEM: 16,
              CJK_IDEOGRAPHIC: 17,
              DEVANAGARI: 18,
              ETHIOPIC_NUMERIC: 19,
              GEORGIAN: 20,
              GUJARATI: 21,
              GURMUKHI: 22,
              HEBREW: 22,
              HIRAGANA: 23,
              HIRAGANA_IROHA: 24,
              JAPANESE_FORMAL: 25,
              JAPANESE_INFORMAL: 26,
              KANNADA: 27,
              KATAKANA: 28,
              KATAKANA_IROHA: 29,
              KHMER: 30,
              KOREAN_HANGUL_FORMAL: 31,
              KOREAN_HANJA_FORMAL: 32,
              KOREAN_HANJA_INFORMAL: 33,
              LAO: 34,
              LOWER_ARMENIAN: 35,
              MALAYALAM: 36,
              MONGOLIAN: 37,
              MYANMAR: 38,
              ORIYA: 39,
              PERSIAN: 40,
              SIMP_CHINESE_FORMAL: 41,
              SIMP_CHINESE_INFORMAL: 42,
              TAMIL: 43,
              TELUGU: 44,
              THAI: 45,
              TIBETAN: 46,
              TRAD_CHINESE_FORMAL: 47,
              TRAD_CHINESE_INFORMAL: 48,
              UPPER_ARMENIAN: 49,
              DISCLOSURE_OPEN: 50,
              DISCLOSURE_CLOSED: 51
            },
            s = e.parseListStyleType = function (A) {
              switch (A) {
                case "disc":
                  return o.DISC;
                case "circle":
                  return o.CIRCLE;
                case "square":
                  return o.SQUARE;
                case "decimal":
                  return o.DECIMAL;
                case "cjk-decimal":
                  return o.CJK_DECIMAL;
                case "decimal-leading-zero":
                  return o.DECIMAL_LEADING_ZERO;
                case "lower-roman":
                  return o.LOWER_ROMAN;
                case "upper-roman":
                  return o.UPPER_ROMAN;
                case "lower-greek":
                  return o.LOWER_GREEK;
                case "lower-alpha":
                  return o.LOWER_ALPHA;
                case "upper-alpha":
                  return o.UPPER_ALPHA;
                case "arabic-indic":
                  return o.ARABIC_INDIC;
                case "armenian":
                  return o.ARMENIAN;
                case "bengali":
                  return o.BENGALI;
                case "cambodian":
                  return o.CAMBODIAN;
                case "cjk-earthly-branch":
                  return o.CJK_EARTHLY_BRANCH;
                case "cjk-heavenly-stem":
                  return o.CJK_HEAVENLY_STEM;
                case "cjk-ideographic":
                  return o.CJK_IDEOGRAPHIC;
                case "devanagari":
                  return o.DEVANAGARI;
                case "ethiopic-numeric":
                  return o.ETHIOPIC_NUMERIC;
                case "georgian":
                  return o.GEORGIAN;
                case "gujarati":
                  return o.GUJARATI;
                case "gurmukhi":
                  return o.GURMUKHI;
                case "hebrew":
                  return o.HEBREW;
                case "hiragana":
                  return o.HIRAGANA;
                case "hiragana-iroha":
                  return o.HIRAGANA_IROHA;
                case "japanese-formal":
                  return o.JAPANESE_FORMAL;
                case "japanese-informal":
                  return o.JAPANESE_INFORMAL;
                case "kannada":
                  return o.KANNADA;
                case "katakana":
                  return o.KATAKANA;
                case "katakana-iroha":
                  return o.KATAKANA_IROHA;
                case "khmer":
                  return o.KHMER;
                case "korean-hangul-formal":
                  return o.KOREAN_HANGUL_FORMAL;
                case "korean-hanja-formal":
                  return o.KOREAN_HANJA_FORMAL;
                case "korean-hanja-informal":
                  return o.KOREAN_HANJA_INFORMAL;
                case "lao":
                  return o.LAO;
                case "lower-armenian":
                  return o.LOWER_ARMENIAN;
                case "malayalam":
                  return o.MALAYALAM;
                case "mongolian":
                  return o.MONGOLIAN;
                case "myanmar":
                  return o.MYANMAR;
                case "oriya":
                  return o.ORIYA;
                case "persian":
                  return o.PERSIAN;
                case "simp-chinese-formal":
                  return o.SIMP_CHINESE_FORMAL;
                case "simp-chinese-informal":
                  return o.SIMP_CHINESE_INFORMAL;
                case "tamil":
                  return o.TAMIL;
                case "telugu":
                  return o.TELUGU;
                case "thai":
                  return o.THAI;
                case "tibetan":
                  return o.TIBETAN;
                case "trad-chinese-formal":
                  return o.TRAD_CHINESE_FORMAL;
                case "trad-chinese-informal":
                  return o.TRAD_CHINESE_INFORMAL;
                case "upper-armenian":
                  return o.UPPER_ARMENIAN;
                case "disclosure-open":
                  return o.DISCLOSURE_OPEN;
                case "disclosure-closed":
                  return o.DISCLOSURE_CLOSED;
                case "none":
                default:
                  return o.NONE
              }
            },
            a = (e.parseListStyle = function (A) {
              var e = (0, r.parseBackgroundImage)(A.getPropertyValue("list-style-image"));
              return {
                listStyleType: s(A.getPropertyValue("list-style-type")),
                listStyleImage: e.length ? e[0] : null,
                listStylePosition: a(A.getPropertyValue("list-style-position"))
              }
            }, function (A) {
              switch (A) {
                case "inside":
                  return n.INSIDE;
                case "outside":
                default:
                  return n.OUTSIDE
              }
            })
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          });
          var r = function () {
              function A(A, e) {
                for (var t = 0; t < e.length; t++) {
                  var r = e[t];
                  r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(A, r.key, r)
                }
              }
              return function (e, t, r) {
                return t && A(e.prototype, t), r && A(e, r), e
              }
            }(),
            n = t(20),
            o = t(22),
            s = function () {
              function A(e, t, r) {
                ! function (A, e) {
                  if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, A), this.text = e, this.parent = t, this.bounds = r
              }
              return r(A, null, [{
                key: "fromTextNode",
                value: function (e, t) {
                  var r = i(e.data, t.style.textTransform);
                  return new A(r, t, (0, o.parseTextBounds)(r, t, e))
                }
              }]), A
            }();
          e.default = s;
          var a = /(^|\s|:|-|\(|\))([a-z])/g,
            i = function (A, e) {
              switch (e) {
                case n.TEXT_TRANSFORM.LOWERCASE:
                  return A.toLowerCase();
                case n.TEXT_TRANSFORM.CAPITALIZE:
                  return A.replace(a, B);
                case n.TEXT_TRANSFORM.UPPERCASE:
                  return A.toUpperCase();
                default:
                  return A
              }
            };

          function B(A, e, t) {
            return A.length > 0 ? e + t.toUpperCase() : A
          }
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          });
          var r = t(23),
            n = function (A) {
              return 0 === A[0] && 255 === A[1] && 0 === A[2] && 255 === A[3]
            },
            o = {
              get SUPPORT_RANGE_BOUNDS() {
                var A = function (A) {
                  if (A.createRange) {
                    var e = A.createRange();
                    if (e.getBoundingClientRect) {
                      var t = A.createElement("boundtest");
                      t.style.height = "123px", t.style.display = "block", A.body.appendChild(t), e.selectNode(t);
                      var r = e.getBoundingClientRect(),
                        n = Math.round(r.height);
                      if (A.body.removeChild(t), 123 === n) return !0
                    }
                  }
                  return !1
                }(document);
                return Object.defineProperty(o, "SUPPORT_RANGE_BOUNDS", {
                  value: A
                }), A
              },
              get SUPPORT_SVG_DRAWING() {
                var A = function (A) {
                  var e = new Image,
                    t = A.createElement("canvas"),
                    r = t.getContext("2d");
                  e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
                  try {
                    r.drawImage(e, 0, 0), t.toDataURL()
                  } catch (A) {
                    return !1
                  }
                  return !0
                }(document);
                return Object.defineProperty(o, "SUPPORT_SVG_DRAWING", {
                  value: A
                }), A
              },
              get SUPPORT_BASE64_DRAWING() {
                return function (A) {
                  var e = function (A, e) {
                    var t = new Image,
                      r = A.createElement("canvas"),
                      n = r.getContext("2d");
                    return new Promise(function (A) {
                      t.src = e;
                      var o = function () {
                        try {
                          n.drawImage(t, 0, 0), r.toDataURL()
                        } catch (e) {
                          return A(!1)
                        }
                        return A(!0)
                      };
                      t.onload = o, t.onerror = function () {
                        return A(!1)
                      }, !0 === t.complete && setTimeout(function () {
                        o()
                      }, 500)
                    })
                  }(document, A);
                  return Object.defineProperty(o, "SUPPORT_BASE64_DRAWING", {
                    value: function () {
                      return e
                    }
                  }), e
                }
              },
              get SUPPORT_FOREIGNOBJECT_DRAWING() {
                var A = "function" == typeof Array.from && "function" == typeof window.fetch ? function (A) {
                  var e = A.createElement("canvas");
                  e.width = 100, e.height = 100;
                  var t = e.getContext("2d");
                  t.fillStyle = "rgb(0, 255, 0)", t.fillRect(0, 0, 100, 100);
                  var o = new Image,
                    s = e.toDataURL();
                  o.src = s;
                  var a = (0, r.createForeignObjectSVG)(100, 100, 0, 0, o);
                  return t.fillStyle = "red", t.fillRect(0, 0, 100, 100), (0, r.loadSerializedSVG)(a).then(function (e) {
                    t.drawImage(e, 0, 0);
                    var o = t.getImageData(0, 0, 100, 100).data;
                    t.fillStyle = "red", t.fillRect(0, 0, 100, 100);
                    var a = A.createElement("div");
                    return a.style.backgroundImage = "url(" + s + ")", a.style.height = "100px", n(o) ? (0, r.loadSerializedSVG)((0, r.createForeignObjectSVG)(100, 100, 0, 0, a)) : Promise.reject(!1)
                  }).then(function (A) {
                    return t.drawImage(A, 0, 0), n(t.getImageData(0, 0, 100, 100).data)
                  }).catch(function (A) {
                    return !1
                  })
                }(document) : Promise.resolve(!1);
                return Object.defineProperty(o, "SUPPORT_FOREIGNOBJECT_DRAWING", {
                  value: A
                }), A
              },
              get SUPPORT_CORS_IMAGES() {
                var A = void 0 !== (new Image).crossOrigin;
                return Object.defineProperty(o, "SUPPORT_CORS_IMAGES", {
                  value: A
                }), A
              },
              get SUPPORT_RESPONSE_TYPE() {
                var A = "string" == typeof (new XMLHttpRequest).responseType;
                return Object.defineProperty(o, "SUPPORT_RESPONSE_TYPE", {
                  value: A
                }), A
              },
              get SUPPORT_CORS_XHR() {
                var A = "withCredentials" in new XMLHttpRequest;
                return Object.defineProperty(o, "SUPPORT_CORS_XHR", {
                  value: A
                }), A
              }
            };
          e.default = o
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.parseTextDecoration = e.TEXT_DECORATION_LINE = e.TEXT_DECORATION = e.TEXT_DECORATION_STYLE = void 0;
          var r, n = (r = t(0)) && r.__esModule ? r : {
              default: r
            },
            o = e.TEXT_DECORATION_STYLE = {
              SOLID: 0,
              DOUBLE: 1,
              DOTTED: 2,
              DASHED: 3,
              WAVY: 4
            },
            s = e.TEXT_DECORATION = {
              NONE: null
            },
            a = e.TEXT_DECORATION_LINE = {
              UNDERLINE: 1,
              OVERLINE: 2,
              LINE_THROUGH: 3,
              BLINK: 4
            },
            i = function (A) {
              switch (A) {
                case "underline":
                  return a.UNDERLINE;
                case "overline":
                  return a.OVERLINE;
                case "line-through":
                  return a.LINE_THROUGH
              }
              return a.BLINK
            };
          e.parseTextDecoration = function (A) {
            var e, t = "none" === (e = A.textDecorationLine ? A.textDecorationLine : A.textDecoration) ? null : e.split(" ").map(i);
            return null === t ? s.NONE : {
              textDecorationLine: t,
              textDecorationColor: A.textDecorationColor ? new n.default(A.textDecorationColor) : null,
              textDecorationStyle: function (A) {
                switch (A) {
                  case "double":
                    return o.DOUBLE;
                  case "dotted":
                    return o.DOTTED;
                  case "dashed":
                    return o.DASHED;
                  case "wavy":
                    return o.WAVY
                }
                return o.SOLID
              }(A.textDecorationStyle)
            }
          }
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.parseBorder = e.BORDER_SIDES = e.BORDER_STYLE = void 0;
          var r, n = (r = t(0)) && r.__esModule ? r : {
              default: r
            },
            o = e.BORDER_STYLE = {
              NONE: 0,
              SOLID: 1
            },
            s = e.BORDER_SIDES = {
              TOP: 0,
              RIGHT: 1,
              BOTTOM: 2,
              LEFT: 3
            },
            a = Object.keys(s).map(function (A) {
              return A.toLowerCase()
            });
          e.parseBorder = function (A) {
            return a.map(function (e) {
              var t = new n.default(A.getPropertyValue("border-" + e + "-color")),
                r = function (A) {
                  switch (A) {
                    case "none":
                      return o.NONE
                  }
                  return o.SOLID
                }(A.getPropertyValue("border-" + e + "-style")),
                s = parseFloat(A.getPropertyValue("border-" + e + "-width"));
              return {
                borderColor: t,
                borderStyle: r,
                borderWidth: isNaN(s) ? 0 : s
              }
            })
          }
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.toCodePoints = function (A) {
            for (var e = [], t = 0, r = A.length; t < r;) {
              var n = A.charCodeAt(t++);
              if (n >= 55296 && n <= 56319 && t < r) {
                var o = A.charCodeAt(t++);
                56320 == (64512 & o) ? e.push(((1023 & n) << 10) + (1023 & o) + 65536) : (e.push(n), t--)
              } else e.push(n)
            }
            return e
          }, e.fromCodePoint = function () {
            if (String.fromCodePoint) return String.fromCodePoint.apply(String, arguments);
            var A = arguments.length;
            if (!A) return "";
            for (var e = [], t = -1, r = ""; ++t < A;) {
              var n = arguments.length <= t ? void 0 : arguments[t];
              n <= 65535 ? e.push(n) : (n -= 65536, e.push(55296 + (n >> 10), n % 1024 + 56320)), (t + 1 === A || e.length > 16384) && (r += String.fromCharCode.apply(String, e), e.length = 0)
            }
            return r
          };
          for (var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), o = 0; o < r.length; o++) n[r.charCodeAt(o)] = o;
          e.decode = function (A) {
            var e = .75 * A.length,
              t = A.length,
              r = void 0,
              o = 0,
              s = void 0,
              a = void 0,
              i = void 0,
              B = void 0;
            "=" === A[A.length - 1] && (e--, "=" === A[A.length - 2] && e--);
            var l = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.slice ? new ArrayBuffer(e) : new Array(e),
              c = Array.isArray(l) ? l : new Uint8Array(l);
            for (r = 0; r < t; r += 4) s = n[A.charCodeAt(r)], a = n[A.charCodeAt(r + 1)], i = n[A.charCodeAt(r + 2)], B = n[A.charCodeAt(r + 3)], c[o++] = s << 2 | a >> 4, c[o++] = (15 & a) << 4 | i >> 2, c[o++] = (3 & i) << 6 | 63 & B;
            return l
          }, e.polyUint16Array = function (A) {
            for (var e = A.length, t = [], r = 0; r < e; r += 2) t.push(A[r + 1] << 8 | A[r]);
            return t
          }, e.polyUint32Array = function (A) {
            for (var e = A.length, t = [], r = 0; r < e; r += 4) t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
            return t
          }
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.createCounterText = e.inlineListItemElement = e.getListOwner = void 0;
          var r = t(4),
            n = i(t(3)),
            o = i(t(9)),
            s = t(8),
            a = t(24);

          function i(A) {
            return A && A.__esModule ? A : {
              default: A
            }
          }
          var B = ["OL", "UL", "MENU"],
            l = (e.getListOwner = function (A) {
              var e = A.parent;
              if (!e) return null;
              do {
                if (-1 !== B.indexOf(e.tagName)) return e;
                e = e.parent
              } while (e);
              return A.parent
            }, e.inlineListItemElement = function (A, e, t) {
              var a = e.style.listStyle;
              if (a) {
                var i = A.ownerDocument.defaultView.getComputedStyle(A, null),
                  B = A.ownerDocument.createElement("html2canvaswrapper");
                switch ((0, r.copyCSSStyles)(i, B), B.style.position = "absolute", B.style.bottom = "auto", B.style.display = "block", B.style.letterSpacing = "normal", a.listStylePosition) {
                  case s.LIST_STYLE_POSITION.OUTSIDE:
                    B.style.left = "auto", B.style.right = A.ownerDocument.defaultView.innerWidth - e.bounds.left - e.style.margin[1].getAbsoluteValue(e.bounds.width) + 7 + "px", B.style.textAlign = "right";
                    break;
                  case s.LIST_STYLE_POSITION.INSIDE:
                    B.style.left = e.bounds.left - e.style.margin[3].getAbsoluteValue(e.bounds.width) + "px", B.style.right = "auto", B.style.textAlign = "left"
                }
                var l = void 0,
                  c = e.style.margin[0].getAbsoluteValue(e.bounds.width),
                  u = a.listStyleImage;
                if (u)
                  if ("url" === u.method) {
                    var d = A.ownerDocument.createElement("img");
                    d.src = u.args[0], B.style.top = e.bounds.top - c + "px", B.style.width = "auto", B.style.height = "auto", B.appendChild(d)
                  } else {
                    var w = .5 * parseFloat(e.style.font.fontSize);
                    B.style.top = e.bounds.top - c + e.bounds.height - 1.5 * w + "px", B.style.width = w + "px", B.style.height = w + "px", B.style.backgroundImage = i.listStyleImage
                  }
                else "number" == typeof e.listIndex && (l = A.ownerDocument.createTextNode(U(e.listIndex, a.listStyleType, !0)), B.appendChild(l), B.style.top = e.bounds.top - c + "px");
                var Q = A.ownerDocument.body;
                Q.appendChild(B), l ? (e.childNodes.push(o.default.fromTextNode(l, e)), Q.removeChild(B)) : e.childNodes.push(new n.default(B, e, t, 0))
              }
            }, {
              integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
              values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
            }),
            c = {
              integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
              values: ["Ք", "Փ", "Ւ", "Ց", "Ր", "Տ", "Վ", "Ս", "Ռ", "Ջ", "Պ", "Չ", "Ո", "Շ", "Ն", "Յ", "Մ", "Ճ", "Ղ", "Ձ", "Հ", "Կ", "Ծ", "Խ", "Լ", "Ի", "Ժ", "Թ", "Ը", "Է", "Զ", "Ե", "Դ", "Գ", "Բ", "Ա"]
            },
            u = {
              integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
              values: ["י׳", "ט׳", "ח׳", "ז׳", "ו׳", "ה׳", "ד׳", "ג׳", "ב׳", "א׳", "ת", "ש", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "יט", "יח", "יז", "טז", "טו", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"]
            },
            d = {
              integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
              values: ["ჵ", "ჰ", "ჯ", "ჴ", "ხ", "ჭ", "წ", "ძ", "ც", "ჩ", "შ", "ყ", "ღ", "ქ", "ფ", "ჳ", "ტ", "ს", "რ", "ჟ", "პ", "ო", "ჲ", "ნ", "მ", "ლ", "კ", "ი", "თ", "ჱ", "ზ", "ვ", "ე", "დ", "გ", "ბ", "ა"]
            },
            w = function (A, e, t, r, n, o) {
              return A < e || A > t ? U(A, n, o.length > 0) : r.integers.reduce(function (e, t, n) {
                for (; A >= t;) A -= t, e += r.values[n];
                return e
              }, "") + o
            },
            Q = function (A, e, t, r) {
              var n = "";
              do {
                t || A--, n = r(A) + n, A /= e
              } while (A * e >= e);
              return n
            },
            g = function (A, e, t, r, n) {
              var o = t - e + 1;
              return (A < 0 ? "-" : "") + (Q(Math.abs(A), o, r, function (A) {
                return (0, a.fromCodePoint)(Math.floor(A % o) + e)
              }) + n)
            },
            h = function (A, e) {
              var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ". ",
                r = e.length;
              return Q(Math.abs(A), r, !1, function (A) {
                return e[Math.floor(A % r)]
              }) + t
            },
            f = function (A, e, t, n, o, a) {
              if (A < -9999 || A > 9999) return U(A, s.LIST_STYLE_TYPE.CJK_DECIMAL, o.length > 0);
              var i = Math.abs(A),
                B = o;
              if (0 === i) return e[0] + B;
              for (var l = 0; i > 0 && l <= 4; l++) {
                var c = i % 10;
                0 === c && (0, r.contains)(a, 1) && "" !== B ? B = e[c] + B : c > 1 || 1 === c && 0 === l || 1 === c && 1 === l && (0, r.contains)(a, 2) || 1 === c && 1 === l && (0, r.contains)(a, 4) && A > 100 || 1 === c && l > 1 && (0, r.contains)(a, 8) ? B = e[c] + (l > 0 ? t[l - 1] : "") + B : 1 === c && l > 0 && (B = t[l - 1] + B), i = Math.floor(i / 10)
              }
              return (A < 0 ? n : "") + B
            },
            U = e.createCounterText = function (A, e, t) {
              var r = t ? ". " : "",
                n = t ? "、" : "",
                o = t ? ", " : "";
              switch (e) {
                case s.LIST_STYLE_TYPE.DISC:
                  return "•";
                case s.LIST_STYLE_TYPE.CIRCLE:
                  return "◦";
                case s.LIST_STYLE_TYPE.SQUARE:
                  return "◾";
                case s.LIST_STYLE_TYPE.DECIMAL_LEADING_ZERO:
                  var a = g(A, 48, 57, !0, r);
                  return a.length < 4 ? "0" + a : a;
                case s.LIST_STYLE_TYPE.CJK_DECIMAL:
                  return h(A, "〇一二三四五六七八九", n);
                case s.LIST_STYLE_TYPE.LOWER_ROMAN:
                  return w(A, 1, 3999, l, s.LIST_STYLE_TYPE.DECIMAL, r).toLowerCase();
                case s.LIST_STYLE_TYPE.UPPER_ROMAN:
                  return w(A, 1, 3999, l, s.LIST_STYLE_TYPE.DECIMAL, r);
                case s.LIST_STYLE_TYPE.LOWER_GREEK:
                  return g(A, 945, 969, !1, r);
                case s.LIST_STYLE_TYPE.LOWER_ALPHA:
                  return g(A, 97, 122, !1, r);
                case s.LIST_STYLE_TYPE.UPPER_ALPHA:
                  return g(A, 65, 90, !1, r);
                case s.LIST_STYLE_TYPE.ARABIC_INDIC:
                  return g(A, 1632, 1641, !0, r);
                case s.LIST_STYLE_TYPE.ARMENIAN:
                case s.LIST_STYLE_TYPE.UPPER_ARMENIAN:
                  return w(A, 1, 9999, c, s.LIST_STYLE_TYPE.DECIMAL, r);
                case s.LIST_STYLE_TYPE.LOWER_ARMENIAN:
                  return w(A, 1, 9999, c, s.LIST_STYLE_TYPE.DECIMAL, r).toLowerCase();
                case s.LIST_STYLE_TYPE.BENGALI:
                  return g(A, 2534, 2543, !0, r);
                case s.LIST_STYLE_TYPE.CAMBODIAN:
                case s.LIST_STYLE_TYPE.KHMER:
                  return g(A, 6112, 6121, !0, r);
                case s.LIST_STYLE_TYPE.CJK_EARTHLY_BRANCH:
                  return h(A, "子丑寅卯辰巳午未申酉戌亥", n);
                case s.LIST_STYLE_TYPE.CJK_HEAVENLY_STEM:
                  return h(A, "甲乙丙丁戊己庚辛壬癸", n);
                case s.LIST_STYLE_TYPE.CJK_IDEOGRAPHIC:
                case s.LIST_STYLE_TYPE.TRAD_CHINESE_INFORMAL:
                  return f(A, "零一二三四五六七八九", "十百千萬", "負", n, 14);
                case s.LIST_STYLE_TYPE.TRAD_CHINESE_FORMAL:
                  return f(A, "零壹貳參肆伍陸柒捌玖", "拾佰仟萬", "負", n, 15);
                case s.LIST_STYLE_TYPE.SIMP_CHINESE_INFORMAL:
                  return f(A, "零一二三四五六七八九", "十百千萬", "负", n, 14);
                case s.LIST_STYLE_TYPE.SIMP_CHINESE_FORMAL:
                  return f(A, "零壹贰叁肆伍陆柒捌玖", "拾佰仟萬", "负", n, 15);
                case s.LIST_STYLE_TYPE.JAPANESE_INFORMAL:
                  return f(A, "〇一二三四五六七八九", "十百千万", "マイナス", n, 0);
                case s.LIST_STYLE_TYPE.JAPANESE_FORMAL:
                  return f(A, "零壱弐参四伍六七八九", "拾百千万", "マイナス", n, 7);
                case s.LIST_STYLE_TYPE.KOREAN_HANGUL_FORMAL:
                  return f(A, "영일이삼사오육칠팔구", "십백천만", "마이너스 ", o, 7);
                case s.LIST_STYLE_TYPE.KOREAN_HANJA_INFORMAL:
                  return f(A, "零一二三四五六七八九", "十百千萬", "마이너스 ", o, 0);
                case s.LIST_STYLE_TYPE.KOREAN_HANJA_FORMAL:
                  return f(A, "零壹貳參四五六七八九", "拾百千", "마이너스 ", o, 7);
                case s.LIST_STYLE_TYPE.DEVANAGARI:
                  return g(A, 2406, 2415, !0, r);
                case s.LIST_STYLE_TYPE.GEORGIAN:
                  return w(A, 1, 19999, d, s.LIST_STYLE_TYPE.DECIMAL, r);
                case s.LIST_STYLE_TYPE.GUJARATI:
                  return g(A, 2790, 2799, !0, r);
                case s.LIST_STYLE_TYPE.GURMUKHI:
                  return g(A, 2662, 2671, !0, r);
                case s.LIST_STYLE_TYPE.HEBREW:
                  return w(A, 1, 10999, u, s.LIST_STYLE_TYPE.DECIMAL, r);
                case s.LIST_STYLE_TYPE.HIRAGANA:
                  return h(A, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
                case s.LIST_STYLE_TYPE.HIRAGANA_IROHA:
                  return h(A, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
                case s.LIST_STYLE_TYPE.KANNADA:
                  return g(A, 3302, 3311, !0, r);
                case s.LIST_STYLE_TYPE.KATAKANA:
                  return h(A, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", n);
                case s.LIST_STYLE_TYPE.KATAKANA_IROHA:
                  return h(A, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", n);
                case s.LIST_STYLE_TYPE.LAO:
                  return g(A, 3792, 3801, !0, r);
                case s.LIST_STYLE_TYPE.MONGOLIAN:
                  return g(A, 6160, 6169, !0, r);
                case s.LIST_STYLE_TYPE.MYANMAR:
                  return g(A, 4160, 4169, !0, r);
                case s.LIST_STYLE_TYPE.ORIYA:
                  return g(A, 2918, 2927, !0, r);
                case s.LIST_STYLE_TYPE.PERSIAN:
                  return g(A, 1776, 1785, !0, r);
                case s.LIST_STYLE_TYPE.TAMIL:
                  return g(A, 3046, 3055, !0, r);
                case s.LIST_STYLE_TYPE.TELUGU:
                  return g(A, 3174, 3183, !0, r);
                case s.LIST_STYLE_TYPE.THAI:
                  return g(A, 3664, 3673, !0, r);
                case s.LIST_STYLE_TYPE.TIBETAN:
                  return g(A, 3872, 3881, !0, r);
                case s.LIST_STYLE_TYPE.DECIMAL:
                default:
                  return g(A, 48, 57, !0, r)
              }
            }
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          });
          var r = function () {
              function A(A, e) {
                for (var t = 0; t < e.length; t++) {
                  var r = e[t];
                  r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(A, r.key, r)
                }
              }
              return function (e, t, r) {
                return t && A(e.prototype, t), r && A(e, r), e
              }
            }(),
            n = t(6),
            o = t(11),
            s = function (A, e) {
              var t = Math.max.apply(null, A.colorStops.map(function (A) {
                  return A.stop
                })),
                r = 1 / Math.max(1, t);
              A.colorStops.forEach(function (A) {
                e.addColorStop(r * A.stop, A.color.toString())
              })
            },
            a = function () {
              function A(e) {
                ! function (A, e) {
                  if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, A), this.canvas = e || document.createElement("canvas")
              }
              return r(A, [{
                key: "render",
                value: function (A) {
                  this.ctx = this.canvas.getContext("2d"), this.options = A, this.canvas.width = Math.floor(A.width * A.scale), this.canvas.height = Math.floor(A.height * A.scale), this.canvas.style.width = A.width + "px", this.canvas.style.height = A.height + "px", this.ctx.scale(this.options.scale, this.options.scale), this.ctx.translate(-A.x, -A.y), this.ctx.textBaseline = "bottom", A.logger.log("Canvas renderer initialized (" + A.width + "x" + A.height + " at " + A.x + "," + A.y + ") with scale " + this.options.scale)
                }
              }, {
                key: "clip",
                value: function (A, e) {
                  var t = this;
                  A.length && (this.ctx.save(), A.forEach(function (A) {
                    t.path(A), t.ctx.clip()
                  })), e(), A.length && this.ctx.restore()
                }
              }, {
                key: "drawImage",
                value: function (A, e, t) {
                  this.ctx.drawImage(A, e.left, e.top, e.width, e.height, t.left, t.top, t.width, t.height)
                }
              }, {
                key: "drawShape",
                value: function (A, e) {
                  this.path(A), this.ctx.fillStyle = e.toString(), this.ctx.fill()
                }
              }, {
                key: "fill",
                value: function (A) {
                  this.ctx.fillStyle = A.toString(), this.ctx.fill()
                }
              }, {
                key: "getTarget",
                value: function () {
                  return this.canvas.getContext("2d").setTransform(1, 0, 0, 1, 0, 0), Promise.resolve(this.canvas)
                }
              }, {
                key: "path",
                value: function (A) {
                  var e = this;
                  this.ctx.beginPath(), Array.isArray(A) ? A.forEach(function (A, t) {
                    var r = A.type === n.PATH.VECTOR ? A : A.start;
                    0 === t ? e.ctx.moveTo(r.x, r.y) : e.ctx.lineTo(r.x, r.y), A.type === n.PATH.BEZIER_CURVE && e.ctx.bezierCurveTo(A.startControl.x, A.startControl.y, A.endControl.x, A.endControl.y, A.end.x, A.end.y)
                  }) : this.ctx.arc(A.x + A.radius, A.y + A.radius, A.radius, 0, 2 * Math.PI, !0), this.ctx.closePath()
                }
              }, {
                key: "rectangle",
                value: function (A, e, t, r, n) {
                  this.ctx.fillStyle = n.toString(), this.ctx.fillRect(A, e, t, r)
                }
              }, {
                key: "renderLinearGradient",
                value: function (A, e) {
                  var t = this.ctx.createLinearGradient(A.left + e.direction.x1, A.top + e.direction.y1, A.left + e.direction.x0, A.top + e.direction.y0);
                  s(e, t), this.ctx.fillStyle = t, this.ctx.fillRect(A.left, A.top, A.width, A.height)
                }
              }, {
                key: "renderRadialGradient",
                value: function (A, e) {
                  var t = this,
                    r = A.left + e.center.x,
                    n = A.top + e.center.y,
                    o = this.ctx.createRadialGradient(r, n, 0, r, n, e.radius.x);
                  if (o)
                    if (s(e, o), this.ctx.fillStyle = o, e.radius.x !== e.radius.y) {
                      var a = A.left + .5 * A.width,
                        i = A.top + .5 * A.height,
                        B = e.radius.y / e.radius.x,
                        l = 1 / B;
                      this.transform(a, i, [1, 0, 0, B, 0, 0], function () {
                        return t.ctx.fillRect(A.left, l * (A.top - i) + i, A.width, A.height * l)
                      })
                    } else this.ctx.fillRect(A.left, A.top, A.width, A.height)
                }
              }, {
                key: "renderRepeat",
                value: function (A, e, t, r, n) {
                  this.path(A), this.ctx.fillStyle = this.ctx.createPattern(this.resizeImage(e, t), "repeat"), this.ctx.translate(r, n), this.ctx.fill(), this.ctx.translate(-r, -n)
                }
              }, {
                key: "renderTextNode",
                value: function (A, e, t, r, n) {
                  var s = this;
                  this.ctx.font = [t.fontStyle, t.fontVariant, t.fontWeight, t.fontSize, t.fontFamily].join(" "), A.forEach(function (A) {
                    if (s.ctx.fillStyle = e.toString(), n && A.text.trim().length ? n.slice(0).reverse().forEach(function (e) {
                        s.ctx.shadowColor = e.color.toString(), s.ctx.shadowOffsetX = e.offsetX * s.options.scale, s.ctx.shadowOffsetY = e.offsetY * s.options.scale, s.ctx.shadowBlur = e.blur, s.ctx.fillText(A.text, A.bounds.left, A.bounds.top + A.bounds.height)
                      }) : s.ctx.fillText(A.text, A.bounds.left, A.bounds.top + A.bounds.height), null !== r) {
                      var a = r.textDecorationColor || e;
                      r.textDecorationLine.forEach(function (e) {
                        switch (e) {
                          case o.TEXT_DECORATION_LINE.UNDERLINE:
                            var r = s.options.fontMetrics.getMetrics(t).baseline;
                            s.rectangle(A.bounds.left, Math.round(A.bounds.top + r), A.bounds.width, 1, a);
                            break;
                          case o.TEXT_DECORATION_LINE.OVERLINE:
                            s.rectangle(A.bounds.left, Math.round(A.bounds.top), A.bounds.width, 1, a);
                            break;
                          case o.TEXT_DECORATION_LINE.LINE_THROUGH:
                            var n = s.options.fontMetrics.getMetrics(t).middle;
                            s.rectangle(A.bounds.left, Math.ceil(A.bounds.top + n), A.bounds.width, 1, a)
                        }
                      })
                    }
                  })
                }
              }, {
                key: "resizeImage",
                value: function (A, e) {
                  if (A.width === e.width && A.height === e.height) return A;
                  var t = this.canvas.ownerDocument.createElement("canvas");
                  return t.width = e.width, t.height = e.height, t.getContext("2d").drawImage(A, 0, 0, A.width, A.height, 0, 0, e.width, e.height), t
                }
              }, {
                key: "setOpacity",
                value: function (A) {
                  this.ctx.globalAlpha = A
                }
              }, {
                key: "transform",
                value: function (A, e, t, r) {
                  this.ctx.save(), this.ctx.translate(A, e), this.ctx.transform(t[0], t[1], t[2], t[3], t[4], t[5]), this.ctx.translate(-A, -e), r(), this.ctx.restore()
                }
              }]), A
            }();
          e.default = a
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          });
          var r = function () {
              function A(A, e) {
                for (var t = 0; t < e.length; t++) {
                  var r = e[t];
                  r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(A, r.key, r)
                }
              }
              return function (e, t, r) {
                return t && A(e.prototype, t), r && A(e, r), e
              }
            }(),
            n = function () {
              function A(e, t, r) {
                ! function (A, e) {
                  if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, A), this.enabled = "undefined" != typeof window && e, this.start = r || Date.now(), this.id = t
              }
              return r(A, [{
                key: "child",
                value: function (e) {
                  return new A(this.enabled, e, this.start)
                }
              }, {
                key: "log",
                value: function () {
                  if (this.enabled && window.console && window.console.log) {
                    for (var A = arguments.length, e = Array(A), t = 0; t < A; t++) e[t] = arguments[t];
                    Function.prototype.bind.call(window.console.log, window.console).apply(window.console, [Date.now() - this.start + "ms", this.id ? "html2canvas (" + this.id + "):" : "html2canvas:"].concat([].slice.call(e, 0)))
                  }
                }
              }, {
                key: "error",
                value: function () {
                  if (this.enabled && window.console && window.console.error) {
                    for (var A = arguments.length, e = Array(A), t = 0; t < A; t++) e[t] = arguments[t];
                    Function.prototype.bind.call(window.console.error, window.console).apply(window.console, [Date.now() - this.start + "ms", this.id ? "html2canvas (" + this.id + "):" : "html2canvas:"].concat([].slice.call(e, 0)))
                  }
                }
              }]), A
            }();
          e.default = n
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.parsePadding = e.PADDING_SIDES = void 0;
          var r, n = (r = t(1)) && r.__esModule ? r : {
            default: r
          };
          e.PADDING_SIDES = {
            TOP: 0,
            RIGHT: 1,
            BOTTOM: 2,
            LEFT: 3
          };
          var o = ["top", "right", "bottom", "left"];
          e.parsePadding = function (A) {
            return o.map(function (e) {
              return new n.default(A.getPropertyValue("padding-" + e))
            })
          }
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          });
          var r = e.OVERFLOW_WRAP = {
            NORMAL: 0,
            BREAK_WORD: 1
          };
          e.parseOverflowWrap = function (A) {
            switch (A) {
              case "break-word":
                return r.BREAK_WORD;
              case "normal":
              default:
                return r.NORMAL
            }
          }
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          });
          var r = e.POSITION = {
            STATIC: 0,
            RELATIVE: 1,
            ABSOLUTE: 2,
            FIXED: 3,
            STICKY: 4
          };
          e.parsePosition = function (A) {
            switch (A) {
              case "relative":
                return r.RELATIVE;
              case "absolute":
                return r.ABSOLUTE;
              case "fixed":
                return r.FIXED;
              case "sticky":
                return r.STICKY
            }
            return r.STATIC
          }
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          });
          var r = e.TEXT_TRANSFORM = {
            NONE: 0,
            LOWERCASE: 1,
            UPPERCASE: 2,
            CAPITALIZE: 3
          };
          e.parseTextTransform = function (A) {
            switch (A) {
              case "uppercase":
                return r.UPPERCASE;
              case "lowercase":
                return r.LOWERCASE;
              case "capitalize":
                return r.CAPITALIZE
            }
            return r.NONE
          }
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.reformatInputBounds = e.inlineSelectElement = e.inlineTextAreaElement = e.inlineInputElement = e.getInputBorderRadius = e.INPUT_BACKGROUND = e.INPUT_BORDERS = e.INPUT_COLOR = void 0;
          var r = c(t(9)),
            n = t(5),
            o = t(12),
            s = c(t(50)),
            a = c(t(7)),
            i = c(t(0)),
            B = c(t(1)),
            l = (t(2), t(22), t(4));

          function c(A) {
            return A && A.__esModule ? A : {
              default: A
            }
          }
          e.INPUT_COLOR = new i.default([42, 42, 42]);
          var u = new i.default([165, 165, 165]),
            d = new i.default([222, 222, 222]),
            w = {
              borderWidth: 1,
              borderColor: u,
              borderStyle: o.BORDER_STYLE.SOLID
            },
            Q = (e.INPUT_BORDERS = [w, w, w, w], e.INPUT_BACKGROUND = {
              backgroundColor: d,
              backgroundImage: [],
              backgroundClip: n.BACKGROUND_CLIP.PADDING_BOX,
              backgroundOrigin: n.BACKGROUND_ORIGIN.PADDING_BOX
            }, new B.default("50%")),
            g = [Q, Q],
            h = [g, g, g, g],
            f = new B.default("3px"),
            U = [f, f],
            C = [U, U, U, U],
            E = (e.getInputBorderRadius = function (A) {
              return "radio" === A.type ? h : C
            }, e.inlineInputElement = function (A, e) {
              if ("radio" === A.type || "checkbox" === A.type) {
                if (A.checked) {
                  var t = Math.min(e.bounds.width, e.bounds.height);
                  e.childNodes.push("checkbox" === A.type ? [new a.default(e.bounds.left + .39363 * t, e.bounds.top + .79 * t), new a.default(e.bounds.left + .16 * t, e.bounds.top + .5549 * t), new a.default(e.bounds.left + .27347 * t, e.bounds.top + .44071 * t), new a.default(e.bounds.left + .39694 * t, e.bounds.top + .5649 * t), new a.default(e.bounds.left + .72983 * t, e.bounds.top + .23 * t), new a.default(e.bounds.left + .84 * t, e.bounds.top + .34085 * t), new a.default(e.bounds.left + .39363 * t, e.bounds.top + .79 * t)] : new s.default(e.bounds.left + t / 4, e.bounds.top + t / 4, t / 4))
                }
              } else E(F(A), A, e, !1)
            }, e.inlineTextAreaElement = function (A, e) {
              E(A.value, A, e, !0)
            }, e.inlineSelectElement = function (A, e) {
              var t = A.options[A.selectedIndex || 0];
              E(t && t.text || "", A, e, !1)
            }, e.reformatInputBounds = function (A) {
              return A.width > A.height ? (A.left += (A.width - A.height) / 2, A.width = A.height) : A.width < A.height && (A.top += (A.height - A.width) / 2, A.height = A.width), A
            }, function (A, e, t, n) {
              var o = e.ownerDocument.body;
              if (A.length > 0 && o) {
                var s = e.ownerDocument.createElement("html2canvaswrapper");
                (0, l.copyCSSStyles)(e.ownerDocument.defaultView.getComputedStyle(e, null), s), s.style.position = "absolute", s.style.left = t.bounds.left + "px", s.style.top = t.bounds.top + "px", n || (s.style.whiteSpace = "nowrap");
                var a = e.ownerDocument.createTextNode(A);
                s.appendChild(a), o.appendChild(s), t.childNodes.push(r.default.fromTextNode(a, t)), o.removeChild(s)
              }
            }),
            F = function (A) {
              var e = "password" === A.type ? new Array(A.value.length + 1).join("•") : A.value;
              return 0 === e.length ? A.placeholder || "" : e
            }
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.parseTextBounds = e.TextBounds = void 0;
          var r, n = t(2),
            o = t(11),
            s = (r = t(10)) && r.__esModule ? r : {
              default: r
            },
            a = t(24),
            i = e.TextBounds = function A(e, t) {
              ! function (A, e) {
                if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
              }(this, A), this.text = e, this.bounds = t
            },
            B = (e.parseTextBounds = function (A, e, t) {
              for (var r = 0 !== e.style.letterSpacing ? (0, a.toCodePoints)(A).map(function (A) {
                  return (0, a.fromCodePoint)(A)
                }) : (0, a.breakWords)(A, e), n = r.length, c = t.parentNode ? t.parentNode.ownerDocument.defaultView : null, u = c ? c.pageXOffset : 0, d = c ? c.pageYOffset : 0, w = [], Q = 0, g = 0; g < n; g++) {
                var h = r[g];
                if (e.style.textDecoration !== o.TEXT_DECORATION.NONE || h.trim().length > 0)
                  if (s.default.SUPPORT_RANGE_BOUNDS) w.push(new i(h, l(t, Q, h.length, u, d)));
                  else {
                    var f = t.splitText(h.length);
                    w.push(new i(h, B(t, u, d))), t = f
                  }
                else s.default.SUPPORT_RANGE_BOUNDS || (t = t.splitText(h.length));
                Q += h.length
              }
              return w
            }, function (A, e, t) {
              var r = A.ownerDocument.createElement("html2canvaswrapper");
              r.appendChild(A.cloneNode(!0));
              var o = A.parentNode;
              if (o) {
                o.replaceChild(r, A);
                var s = (0, n.parseBounds)(r, e, t);
                return r.firstChild && o.replaceChild(r.firstChild, r), s
              }
              return new n.Bounds(0, 0, 0, 0)
            }),
            l = function (A, e, t, r, o) {
              var s = A.ownerDocument.createRange();
              return s.setStart(A, e), s.setEnd(A, e + t), n.Bounds.fromClientRect(s.getBoundingClientRect(), r, o)
            }
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          });
          var r = function () {
              function A(A, e) {
                for (var t = 0; t < e.length; t++) {
                  var r = e[t];
                  r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(A, r.key, r)
                }
              }
              return function (e, t, r) {
                return t && A(e.prototype, t), r && A(e, r), e
              }
            }(),
            n = function () {
              function A(e) {
                ! function (A, e) {
                  if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, A), this.element = e
              }
              return r(A, [{
                key: "render",
                value: function (A) {
                  var e = this;
                  this.options = A, this.canvas = document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), this.canvas.width = Math.floor(A.width) * A.scale, this.canvas.height = Math.floor(A.height) * A.scale, this.canvas.style.width = A.width + "px", this.canvas.style.height = A.height + "px", A.logger.log("ForeignObject renderer initialized (" + A.width + "x" + A.height + " at " + A.x + "," + A.y + ") with scale " + A.scale);
                  var t = o(Math.max(A.windowWidth, A.width) * A.scale, Math.max(A.windowHeight, A.height) * A.scale, A.scrollX * A.scale, A.scrollY * A.scale, this.element);
                  return s(t).then(function (t) {
                    return A.backgroundColor && (e.ctx.fillStyle = A.backgroundColor.toString(), e.ctx.fillRect(0, 0, A.width * A.scale, A.height * A.scale)), e.ctx.drawImage(t, -A.x * A.scale, -A.y * A.scale), e.canvas
                  })
                }
              }]), A
            }();
          e.default = n;
          var o = e.createForeignObjectSVG = function (A, e, t, r, n) {
              var o = "http://www.w3.org/2000/svg",
                s = document.createElementNS(o, "svg"),
                a = document.createElementNS(o, "foreignObject");
              return s.setAttributeNS(null, "width", A), s.setAttributeNS(null, "height", e), a.setAttributeNS(null, "width", "100%"), a.setAttributeNS(null, "height", "100%"), a.setAttributeNS(null, "x", t), a.setAttributeNS(null, "y", r), a.setAttributeNS(null, "externalResourcesRequired", "true"), s.appendChild(a), a.appendChild(n), s
            },
            s = e.loadSerializedSVG = function (A) {
              return new Promise(function (e, t) {
                var r = new Image;
                r.onload = function () {
                  return e(r)
                }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent((new XMLSerializer).serializeToString(A))
              })
            }
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.breakWords = e.fromCodePoint = e.toCodePoints = void 0;
          var r = t(46);
          Object.defineProperty(e, "toCodePoints", {
            enumerable: !0,
            get: function () {
              return r.toCodePoints
            }
          }), Object.defineProperty(e, "fromCodePoint", {
            enumerable: !0,
            get: function () {
              return r.fromCodePoint
            }
          });
          var n, o = ((n = t(3)) && n.__esModule, t(18));
          e.breakWords = function (A, e) {
            for (var t = (0, r.LineBreaker)(A, {
                lineBreak: e.style.lineBreak,
                wordBreak: e.style.overflowWrap === o.OVERFLOW_WRAP.BREAK_WORD ? "break-word" : e.style.wordBreak
              }), n = [], s = void 0; !(s = t.next()).done;) n.push(s.value.slice());
            return n
          }
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.FontMetrics = void 0;
          var r = function () {
              function A(A, e) {
                for (var t = 0; t < e.length; t++) {
                  var r = e[t];
                  r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(A, r.key, r)
                }
              }
              return function (e, t, r) {
                return t && A(e.prototype, t), r && A(e, r), e
              }
            }(),
            n = t(4);
          e.FontMetrics = function () {
            function A(e) {
              ! function (A, e) {
                if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
              }(this, A), this._data = {}, this._document = e
            }
            return r(A, [{
              key: "_parseMetrics",
              value: function (A) {
                var e = this._document.createElement("div"),
                  t = this._document.createElement("img"),
                  r = this._document.createElement("span"),
                  o = this._document.body;
                if (!o) throw new Error("");
                e.style.visibility = "hidden", e.style.fontFamily = A.fontFamily, e.style.fontSize = A.fontSize, e.style.margin = "0", e.style.padding = "0", o.appendChild(e), t.src = n.SMALL_IMAGE, t.width = 1, t.height = 1, t.style.margin = "0", t.style.padding = "0", t.style.verticalAlign = "baseline", r.style.fontFamily = A.fontFamily, r.style.fontSize = A.fontSize, r.style.margin = "0", r.style.padding = "0", r.appendChild(this._document.createTextNode("Hidden Text")), e.appendChild(r), e.appendChild(t);
                var s = t.offsetTop - r.offsetTop + 2;
                e.removeChild(r), e.appendChild(this._document.createTextNode("Hidden Text")), e.style.lineHeight = "normal", t.style.verticalAlign = "super";
                var a = t.offsetTop - e.offsetTop + 2;
                return o.removeChild(e), {
                  baseline: s,
                  middle: a
                }
              }
            }, {
              key: "getMetrics",
              value: function (A) {
                var e = A.fontFamily + " " + A.fontSize;
                return void 0 === this._data[e] && (this._data[e] = this._parseMetrics(A)), this._data[e]
              }
            }]), A
          }()
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.Proxy = void 0;
          var r, n = (r = t(10)) && r.__esModule ? r : {
            default: r
          };
          e.Proxy = function (A, e) {
            if (!e.proxy) return Promise.reject(null);
            var t = e.proxy;
            return new Promise(function (r, o) {
              var s = n.default.SUPPORT_CORS_XHR && n.default.SUPPORT_RESPONSE_TYPE ? "blob" : "text",
                a = n.default.SUPPORT_CORS_XHR ? new XMLHttpRequest : new XDomainRequest;
              if (a.onload = function () {
                  if (a instanceof XMLHttpRequest)
                    if (200 === a.status)
                      if ("text" === s) r(a.response);
                      else {
                        var A = new FileReader;
                        A.addEventListener("load", function () {
                          return r(A.result)
                        }, !1), A.addEventListener("error", function (A) {
                          return o(A)
                        }, !1), A.readAsDataURL(a.response)
                      }
                  else o("");
                  else r(a.responseText)
                }, a.onerror = o, a.open("GET", t + "?url=" + encodeURIComponent(A) + "&responseType=" + s), "text" !== s && a instanceof XMLHttpRequest && (a.responseType = s), e.imageTimeout) {
                var i = e.imageTimeout;
                a.timeout = i, a.ontimeout = function () {
                  return o("")
                }
              }
              a.send()
            })
          }
        }, function (A, e, t) {
          var r = Object.assign || function (A) {
              for (var e = 1; e < arguments.length; e++) {
                var t = arguments[e];
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (A[r] = t[r])
              }
              return A
            },
            n = a(t(15)),
            o = a(t(16)),
            s = t(28);

          function a(A) {
            return A && A.__esModule ? A : {
              default: A
            }
          }
          var i = function (A, e) {
            var t = e || {},
              a = new o.default("boolean" != typeof t.logging || t.logging);
            a.log("html2canvas 1.0.0-alpha.11");
            var i = A.ownerDocument;
            if (!i) return Promise.reject("Provided element is not within a Document");
            var B = i.defaultView,
              l = {
                async: !0,
                allowTaint: !1,
                backgroundColor: "#ffffff",
                imageTimeout: 15e3,
                logging: !0,
                proxy: null,
                removeContainer: !0,
                foreignObjectRendering: !1,
                scale: B.devicePixelRatio || 1,
                target: new n.default(t.canvas),
                useCORS: !1,
                windowWidth: B.innerWidth,
                windowHeight: B.innerHeight,
                scrollX: B.pageXOffset,
                scrollY: B.pageYOffset
              };
            return (0, s.renderElement)(A, r({}, l, t), a)
          };
          i.CanvasRenderer = n.default, A.exports = i
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.renderElement = void 0;
          var r = function (A, e) {
              if (Array.isArray(A)) return A;
              if (Symbol.iterator in Object(A)) return function (A, e) {
                var t = [],
                  r = !0,
                  n = !1,
                  o = void 0;
                try {
                  for (var s, a = A[Symbol.iterator](); !(r = (s = a.next()).done) && (t.push(s.value), !e || t.length !== e); r = !0);
                } catch (A) {
                  n = !0, o = A
                } finally {
                  try {
                    !r && a.return && a.return()
                  } finally {
                    if (n) throw o
                  }
                }
                return t
              }(A, e);
              throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            n = (d(t(16)), t(29)),
            o = d(t(51)),
            s = d(t(23)),
            a = d(t(10)),
            i = t(2),
            B = t(54),
            l = t(25),
            c = t(0),
            u = d(c);

          function d(A) {
            return A && A.__esModule ? A : {
              default: A
            }
          }
          e.renderElement = function A(e, t, d) {
            var w = e.ownerDocument,
              Q = new i.Bounds(t.scrollX, t.scrollY, t.windowWidth, t.windowHeight),
              g = w.documentElement ? new u.default(getComputedStyle(w.documentElement).backgroundColor) : c.TRANSPARENT,
              h = w.body ? new u.default(getComputedStyle(w.body).backgroundColor) : c.TRANSPARENT,
              f = e === w.documentElement ? g.isTransparent() ? h.isTransparent() ? t.backgroundColor ? new u.default(t.backgroundColor) : null : h : g : t.backgroundColor ? new u.default(t.backgroundColor) : null;
            return (t.foreignObjectRendering ? a.default.SUPPORT_FOREIGNOBJECT_DRAWING : Promise.resolve(!1)).then(function (a) {
              return a ? (u = new B.DocumentCloner(e, t, d, !0, A)).inlineFonts(w).then(function () {
                return u.resourceLoader.ready()
              }).then(function () {
                var A = new s.default(u.documentElement),
                  r = w.defaultView,
                  n = r.pageXOffset,
                  o = r.pageYOffset,
                  a = "HTML" === e.tagName || "BODY" === e.tagName ? (0, i.parseDocumentSize)(w) : (0, i.parseBounds)(e, n, o),
                  B = a.width,
                  l = a.height,
                  c = a.left,
                  Q = a.top;
                return A.render({
                  backgroundColor: f,
                  logger: d,
                  scale: t.scale,
                  x: "number" == typeof t.x ? t.x : c,
                  y: "number" == typeof t.y ? t.y : Q,
                  width: "number" == typeof t.width ? t.width : Math.ceil(B),
                  height: "number" == typeof t.height ? t.height : Math.ceil(l),
                  windowWidth: t.windowWidth,
                  windowHeight: t.windowHeight,
                  scrollX: t.scrollX,
                  scrollY: t.scrollY
                })
              }) : (0, B.cloneWindow)(w, Q, e, t, d, A).then(function (A) {
                var e = r(A, 3),
                  s = e[0],
                  a = e[1],
                  B = e[2],
                  u = (0, n.NodeParser)(a, B, d),
                  Q = a.ownerDocument;
                return f === u.container.style.background.backgroundColor && (u.container.style.background.backgroundColor = c.TRANSPARENT), B.ready().then(function (A) {
                  var e = new l.FontMetrics(Q),
                    r = Q.defaultView,
                    n = r.pageXOffset,
                    B = r.pageYOffset,
                    c = "HTML" === a.tagName || "BODY" === a.tagName ? (0, i.parseDocumentSize)(w) : (0, i.parseBounds)(a, n, B),
                    g = c.width,
                    h = c.height,
                    U = c.left,
                    C = c.top,
                    E = {
                      backgroundColor: f,
                      fontMetrics: e,
                      imageStore: A,
                      logger: d,
                      scale: t.scale,
                      x: "number" == typeof t.x ? t.x : U,
                      y: "number" == typeof t.y ? t.y : C,
                      width: "number" == typeof t.width ? t.width : Math.ceil(g),
                      height: "number" == typeof t.height ? t.height : Math.ceil(h)
                    };
                  if (Array.isArray(t.target)) return Promise.all(t.target.map(function (A) {
                    return new o.default(A, E).render(u)
                  }));
                  var F = new o.default(t.target, E).render(u);
                  return !0 === t.removeContainer && s.parentNode && s.parentNode.removeChild(s), F
                })
              });
              var u
            })
          }
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.NodeParser = void 0;
          var r = B(t(30)),
            n = B(t(3)),
            o = B(t(9)),
            s = t(21),
            a = t(14),
            i = t(8);

          function B(A) {
            return A && A.__esModule ? A : {
              default: A
            }
          }
          e.NodeParser = function (A, e, t) {
            var o = 0,
              s = new n.default(A, null, e, o++),
              a = new r.default(s, null, !0);
            return c(A, s, a, e, o), a
          };
          var l = ["SCRIPT", "HEAD", "TITLE", "OBJECT", "BR", "OPTION"],
            c = function A(e, t, B, c, w) {
              for (var Q, g = e.firstChild; g; g = Q) {
                Q = g.nextSibling;
                var h = g.ownerDocument.defaultView;
                if (g instanceof h.Text || g instanceof Text || h.parent && g instanceof h.parent.Text) g.data.trim().length > 0 && t.childNodes.push(o.default.fromTextNode(g, t));
                else if (g instanceof h.HTMLElement || g instanceof HTMLElement || h.parent && g instanceof h.parent.HTMLElement) {
                  if (-1 === l.indexOf(g.nodeName)) {
                    var f = new n.default(g, t, c, w++);
                    if (f.isVisible()) {
                      "INPUT" === g.tagName ? (0, s.inlineInputElement)(g, f) : "TEXTAREA" === g.tagName ? (0, s.inlineTextAreaElement)(g, f) : "SELECT" === g.tagName ? (0, s.inlineSelectElement)(g, f) : f.style.listStyle && f.style.listStyle.listStyleType !== i.LIST_STYLE_TYPE.NONE && (0, a.inlineListItemElement)(g, f, c);
                      var U = "TEXTAREA" !== g.tagName,
                        C = u(f, g);
                      if (C || d(f)) {
                        var E = C || f.isPositioned() ? B.getRealParentStackingContext() : B,
                          F = new r.default(f, E, C);
                        E.contexts.push(F), U && A(g, f, F, c, w)
                      } else B.children.push(f), U && A(g, f, B, c, w)
                    }
                  }
                } else if (g instanceof h.SVGSVGElement || g instanceof SVGSVGElement || h.parent && g instanceof h.parent.SVGSVGElement) {
                  var p = new n.default(g, t, c, w++),
                    H = u(p, g);
                  if (H || d(p)) {
                    var m = H || p.isPositioned() ? B.getRealParentStackingContext() : B,
                      v = new r.default(p, m, H);
                    m.contexts.push(v)
                  } else B.children.push(p)
                }
              }
            },
            u = function (A, e) {
              return A.isRootElement() || A.isPositionedWithZIndex() || A.style.opacity < 1 || A.isTransformed() || w(A, e)
            },
            d = function (A) {
              return A.isPositioned() || A.isFloating()
            },
            w = function (A, e) {
              return "BODY" === e.nodeName && A.parent instanceof n.default && A.parent.style.background.backgroundColor.isTransparent()
            }
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          });
          var r, n = function () {
            function A(A, e) {
              for (var t = 0; t < e.length; t++) {
                var r = e[t];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(A, r.key, r)
              }
            }
            return function (e, t, r) {
              return t && A(e.prototype, t), r && A(e, r), e
            }
          }();
          (r = t(3)) && r.__esModule, t(19);
          var o = function () {
            function A(e, t, r) {
              ! function (A, e) {
                if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
              }(this, A), this.container = e, this.parent = t, this.contexts = [], this.children = [], this.treatAsRealStackingContext = r
            }
            return n(A, [{
              key: "getOpacity",
              value: function () {
                return this.parent ? this.container.style.opacity * this.parent.getOpacity() : this.container.style.opacity
              }
            }, {
              key: "getRealParentStackingContext",
              value: function () {
                return !this.parent || this.treatAsRealStackingContext ? this : this.parent.getRealParentStackingContext()
              }
            }]), A
          }();
          e.default = o
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.default = function A(e, t) {
            ! function (A, e) {
              if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, A), this.width = e, this.height = t
          }
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          });
          var r, n = function () {
              function A(A, e) {
                for (var t = 0; t < e.length; t++) {
                  var r = e[t];
                  r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(A, r.key, r)
                }
              }
              return function (e, t, r) {
                return t && A(e.prototype, t), r && A(e, r), e
              }
            }(),
            o = t(6),
            s = (r = t(7)) && r.__esModule ? r : {
              default: r
            },
            a = function (A, e, t) {
              return new s.default(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t)
            },
            i = function () {
              function A(e, t, r, n) {
                ! function (A, e) {
                  if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, A), this.type = o.PATH.BEZIER_CURVE, this.start = e, this.startControl = t, this.endControl = r, this.end = n
              }
              return n(A, [{
                key: "subdivide",
                value: function (e, t) {
                  var r = a(this.start, this.startControl, e),
                    n = a(this.startControl, this.endControl, e),
                    o = a(this.endControl, this.end, e),
                    s = a(r, n, e),
                    i = a(n, o, e),
                    B = a(s, i, e);
                  return t ? new A(this.start, r, s, B) : new A(B, i, o, this.end)
                }
              }, {
                key: "reverse",
                value: function () {
                  return new A(this.end, this.endControl, this.startControl, this.start)
                }
              }]), A
            }();
          e.default = i
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.parseBorderRadius = void 0;
          var r, n = function (A, e) {
              if (Array.isArray(A)) return A;
              if (Symbol.iterator in Object(A)) return function (A, e) {
                var t = [],
                  r = !0,
                  n = !1,
                  o = void 0;
                try {
                  for (var s, a = A[Symbol.iterator](); !(r = (s = a.next()).done) && (t.push(s.value), !e || t.length !== e); r = !0);
                } catch (A) {
                  n = !0, o = A
                } finally {
                  try {
                    !r && a.return && a.return()
                  } finally {
                    if (n) throw o
                  }
                }
                return t
              }(A, e);
              throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            o = (r = t(1)) && r.__esModule ? r : {
              default: r
            },
            s = ["top-left", "top-right", "bottom-right", "bottom-left"];
          e.parseBorderRadius = function (A) {
            return s.map(function (e) {
              var t = A.getPropertyValue("border-" + e + "-radius").split(" ").map(o.default.create),
                r = n(t, 2),
                s = r[0],
                a = r[1];
              return void 0 === a ? [s, s] : [s, a]
            })
          }
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          });
          var r = e.DISPLAY = {
              NONE: 1,
              BLOCK: 2,
              INLINE: 4,
              RUN_IN: 8,
              FLOW: 16,
              FLOW_ROOT: 32,
              TABLE: 64,
              FLEX: 128,
              GRID: 256,
              RUBY: 512,
              SUBGRID: 1024,
              LIST_ITEM: 2048,
              TABLE_ROW_GROUP: 4096,
              TABLE_HEADER_GROUP: 8192,
              TABLE_FOOTER_GROUP: 16384,
              TABLE_ROW: 32768,
              TABLE_CELL: 65536,
              TABLE_COLUMN_GROUP: 1 << 17,
              TABLE_COLUMN: 1 << 18,
              TABLE_CAPTION: 1 << 19,
              RUBY_BASE: 1 << 20,
              RUBY_TEXT: 1 << 21,
              RUBY_BASE_CONTAINER: 1 << 22,
              RUBY_TEXT_CONTAINER: 1 << 23,
              CONTENTS: 1 << 24,
              INLINE_BLOCK: 1 << 25,
              INLINE_LIST_ITEM: 1 << 26,
              INLINE_TABLE: 1 << 27,
              INLINE_FLEX: 1 << 28,
              INLINE_GRID: 1 << 29
            },
            n = function (A, e) {
              return A | function (A) {
                switch (e) {
                  case "block":
                    return r.BLOCK;
                  case "inline":
                    return r.INLINE;
                  case "run-in":
                    return r.RUN_IN;
                  case "flow":
                    return r.FLOW;
                  case "flow-root":
                    return r.FLOW_ROOT;
                  case "table":
                    return r.TABLE;
                  case "flex":
                    return r.FLEX;
                  case "grid":
                    return r.GRID;
                  case "ruby":
                    return r.RUBY;
                  case "subgrid":
                    return r.SUBGRID;
                  case "list-item":
                    return r.LIST_ITEM;
                  case "table-row-group":
                    return r.TABLE_ROW_GROUP;
                  case "table-header-group":
                    return r.TABLE_HEADER_GROUP;
                  case "table-footer-group":
                    return r.TABLE_FOOTER_GROUP;
                  case "table-row":
                    return r.TABLE_ROW;
                  case "table-cell":
                    return r.TABLE_CELL;
                  case "table-column-group":
                    return r.TABLE_COLUMN_GROUP;
                  case "table-column":
                    return r.TABLE_COLUMN;
                  case "table-caption":
                    return r.TABLE_CAPTION;
                  case "ruby-base":
                    return r.RUBY_BASE;
                  case "ruby-text":
                    return r.RUBY_TEXT;
                  case "ruby-base-container":
                    return r.RUBY_BASE_CONTAINER;
                  case "ruby-text-container":
                    return r.RUBY_TEXT_CONTAINER;
                  case "contents":
                    return r.CONTENTS;
                  case "inline-block":
                    return r.INLINE_BLOCK;
                  case "inline-list-item":
                    return r.INLINE_LIST_ITEM;
                  case "inline-table":
                    return r.INLINE_TABLE;
                  case "inline-flex":
                    return r.INLINE_FLEX;
                  case "inline-grid":
                    return r.INLINE_GRID
                }
                return r.NONE
              }()
            };
          e.parseDisplay = function (A) {
            return A.split(" ").reduce(n, 0)
          }
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          });
          var r = e.FLOAT = {
            NONE: 0,
            LEFT: 1,
            RIGHT: 2,
            INLINE_START: 3,
            INLINE_END: 4
          };
          e.parseCSSFloat = function (A) {
            switch (A) {
              case "left":
                return r.LEFT;
              case "right":
                return r.RIGHT;
              case "inline-start":
                return r.INLINE_START;
              case "inline-end":
                return r.INLINE_END
            }
            return r.NONE
          }
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.parseFont = function (A) {
            return {
              fontFamily: A.fontFamily,
              fontSize: A.fontSize,
              fontStyle: A.fontStyle,
              fontVariant: A.fontVariant,
              fontWeight: function (A) {
                switch (A) {
                  case "normal":
                    return 400;
                  case "bold":
                    return 700
                }
                var e = parseInt(A, 10);
                return isNaN(e) ? 400 : e
              }(A.fontWeight)
            }
          }
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.parseLetterSpacing = function (A) {
            if ("normal" === A) return 0;
            var e = parseFloat(A);
            return isNaN(e) ? 0 : e
          }
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          });
          var r = e.LINE_BREAK = {
            NORMAL: "normal",
            STRICT: "strict"
          };
          e.parseLineBreak = function (A) {
            switch (A) {
              case "strict":
                return r.STRICT;
              case "normal":
              default:
                return r.NORMAL
            }
          }
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.parseMargin = void 0;
          var r, n = (r = t(1)) && r.__esModule ? r : {
              default: r
            },
            o = ["top", "right", "bottom", "left"];
          e.parseMargin = function (A) {
            return o.map(function (e) {
              return new n.default(A.getPropertyValue("margin-" + e))
            })
          }
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          });
          var r = e.OVERFLOW = {
            VISIBLE: 0,
            HIDDEN: 1,
            SCROLL: 2,
            AUTO: 3
          };
          e.parseOverflow = function (A) {
            switch (A) {
              case "hidden":
                return r.HIDDEN;
              case "scroll":
                return r.SCROLL;
              case "auto":
                return r.AUTO;
              case "visible":
              default:
                return r.VISIBLE
            }
          }
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.parseTextShadow = void 0;
          var r, n = (r = t(0)) && r.__esModule ? r : {
              default: r
            },
            o = /^([+-]|\d|\.)$/i;
          e.parseTextShadow = function (A) {
            if ("none" === A || "string" != typeof A) return null;
            for (var e = "", t = !1, r = [], s = [], a = 0, i = null, B = function () {
                e.length && (t ? r.push(parseFloat(e)) : i = new n.default(e)), t = !1, e = ""
              }, l = function () {
                r.length && null !== i && s.push({
                  color: i,
                  offsetX: r[0] || 0,
                  offsetY: r[1] || 0,
                  blur: r[2] || 0
                }), r.splice(0, r.length), i = null
              }, c = 0; c < A.length; c++) {
              var u = A[c];
              switch (u) {
                case "(":
                  e += u, a++;
                  break;
                case ")":
                  e += u, a--;
                  break;
                case ",":
                  0 === a ? (B(), l()) : e += u;
                  break;
                case " ":
                  0 === a ? B() : e += u;
                  break;
                default:
                  0 === e.length && o.test(u) && (t = !0), e += u
              }
            }
            return B(), l(), 0 === s.length ? null : s
          }
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.parseTransform = void 0;
          var r, n = (r = t(1)) && r.__esModule ? r : {
              default: r
            },
            o = function (A) {
              return parseFloat(A.trim())
            },
            s = /(matrix|matrix3d)\((.+)\)/,
            a = (e.parseTransform = function (A) {
              var e = i(A.transform || A.webkitTransform || A.mozTransform || A.msTransform || A.oTransform);
              return null === e ? null : {
                transform: e,
                transformOrigin: a(A.transformOrigin || A.webkitTransformOrigin || A.mozTransformOrigin || A.msTransformOrigin || A.oTransformOrigin)
              }
            }, function (A) {
              if ("string" != typeof A) {
                var e = new n.default("0");
                return [e, e]
              }
              var t = A.split(" ").map(n.default.create);
              return [t[0], t[1]]
            }),
            i = function (A) {
              if ("none" === A || "string" != typeof A) return null;
              var e = A.match(s);
              if (e) {
                if ("matrix" === e[1]) {
                  var t = e[2].split(",").map(o);
                  return [t[0], t[1], t[2], t[3], t[4], t[5]]
                }
                var r = e[2].split(",").map(o);
                return [r[0], r[1], r[4], r[5], r[12], r[13]]
              }
              return null
            }
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          });
          var r = e.VISIBILITY = {
            VISIBLE: 0,
            HIDDEN: 1,
            COLLAPSE: 2
          };
          e.parseVisibility = function (A) {
            switch (A) {
              case "hidden":
                return r.HIDDEN;
              case "collapse":
                return r.COLLAPSE;
              case "visible":
              default:
                return r.VISIBLE
            }
          }
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          });
          var r = e.WORD_BREAK = {
            NORMAL: "normal",
            BREAK_ALL: "break-all",
            KEEP_ALL: "keep-all"
          };
          e.parseWordBreak = function (A) {
            switch (A) {
              case "break-all":
                return r.BREAK_ALL;
              case "keep-all":
                return r.KEEP_ALL;
              case "normal":
              default:
                return r.NORMAL
            }
          }
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.parseZIndex = function (A) {
            var e = "auto" === A;
            return {
              auto: e,
              order: e ? 0 : parseInt(A, 10)
            }
          }
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          });
          var r = t(13);
          Object.defineProperty(e, "toCodePoints", {
            enumerable: !0,
            get: function () {
              return r.toCodePoints
            }
          }), Object.defineProperty(e, "fromCodePoint", {
            enumerable: !0,
            get: function () {
              return r.fromCodePoint
            }
          });
          var n = t(47);
          Object.defineProperty(e, "LineBreaker", {
            enumerable: !0,
            get: function () {
              return n.LineBreaker
            }
          })
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.LineBreaker = e.inlineBreakOpportunities = e.lineBreakAtIndex = e.codePointsToCharacterClasses = e.UnicodeTrie = e.BREAK_ALLOWED = e.BREAK_NOT_ALLOWED = e.BREAK_MANDATORY = e.classes = e.LETTER_NUMBER_MODIFIER = void 0;
          var r, n = function () {
              function A(A, e) {
                for (var t = 0; t < e.length; t++) {
                  var r = e[t];
                  r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(A, r.key, r)
                }
              }
              return function (e, t, r) {
                return t && A(e.prototype, t), r && A(e, r), e
              }
            }(),
            o = function (A, e) {
              if (Array.isArray(A)) return A;
              if (Symbol.iterator in Object(A)) return function (A, e) {
                var t = [],
                  r = !0,
                  n = !1,
                  o = void 0;
                try {
                  for (var s, a = A[Symbol.iterator](); !(r = (s = a.next()).done) && (t.push(s.value), !e || t.length !== e); r = !0);
                } catch (A) {
                  n = !0, o = A
                } finally {
                  try {
                    !r && a.return && a.return()
                  } finally {
                    if (n) throw o
                  }
                }
                return t
              }(A, e);
              throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            s = t(48),
            a = (r = t(49)) && r.__esModule ? r : {
              default: r
            },
            i = t(13),
            B = e.LETTER_NUMBER_MODIFIER = 50,
            l = 10,
            c = 13,
            u = 15,
            d = 17,
            w = 18,
            Q = 19,
            g = 20,
            h = 21,
            f = 22,
            U = 24,
            C = 25,
            E = 26,
            F = 27,
            p = 28,
            H = 30,
            m = 32,
            v = 33,
            b = 34,
            I = 35,
            T = 37,
            N = 38,
            y = 39,
            K = 40,
            S = 42,
            L = (e.classes = {
              BK: 1,
              CR: 2,
              LF: 3,
              CM: 4,
              NL: 5,
              SG: 6,
              WJ: 7,
              ZW: 8,
              GL: 9,
              SP: l,
              ZWJ: 11,
              B2: 12,
              BA: c,
              BB: 14,
              HY: u,
              CB: 16,
              CL: d,
              CP: w,
              EX: Q,
              IN: g,
              NS: h,
              OP: f,
              QU: 23,
              IS: U,
              NU: C,
              PO: E,
              PR: F,
              SY: p,
              AI: 29,
              AL: H,
              CJ: 31,
              EB: m,
              EM: v,
              H2: b,
              H3: I,
              HL: 36,
              ID: T,
              JL: N,
              JV: y,
              JT: K,
              RI: 41,
              SA: S,
              XX: 43
            }, e.BREAK_MANDATORY = "!"),
            M = e.BREAK_NOT_ALLOWED = "×",
            D = e.BREAK_ALLOWED = "÷",
            O = e.UnicodeTrie = (0, s.createTrieFromBase64)(a.default),
            _ = [H, 36],
            R = [1, 2, 3, 5],
            P = [l, 8],
            k = [F, E],
            x = R.concat(P),
            X = [N, y, K, b, I],
            z = [u, c],
            V = e.codePointsToCharacterClasses = function (A) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "strict",
                t = [],
                r = [],
                n = [];
              return A.forEach(function (A, o) {
                var s = O.get(A);
                if (s > B ? (n.push(!0), s -= B) : n.push(!1), -1 !== ["normal", "auto", "loose"].indexOf(e) && -1 !== [8208, 8211, 12316, 12448].indexOf(A)) return r.push(o), t.push(16);
                if (4 === s || 11 === s) {
                  if (0 === o) return r.push(o), t.push(H);
                  var a = t[o - 1];
                  return -1 === x.indexOf(a) ? (r.push(r[o - 1]), t.push(a)) : (r.push(o), t.push(H))
                }
                return r.push(o), 31 === s ? t.push("strict" === e ? h : T) : s === S ? t.push(H) : 29 === s ? t.push(H) : 43 === s ? A >= 131072 && A <= 196605 || A >= 196608 && A <= 262141 ? t.push(T) : t.push(H) : void t.push(s)
              }), [r, t, n]
            },
            Y = function (A, e, t, r) {
              var n = r[t];
              if (Array.isArray(A) ? -1 !== A.indexOf(n) : A === n)
                for (var o = t; o <= r.length;) {
                  var s = r[++o];
                  if (s === e) return !0;
                  if (s !== l) break
                }
              if (n === l)
                for (var a = t; a > 0;) {
                  var i = r[--a];
                  if (Array.isArray(A) ? -1 !== A.indexOf(i) : A === i)
                    for (var B = t; B <= r.length;) {
                      var c = r[++B];
                      if (c === e) return !0;
                      if (c !== l) break
                    }
                  if (i !== l) break
                }
              return !1
            },
            G = function (A, e) {
              for (var t = A; t >= 0;) {
                var r = e[t];
                if (r !== l) return r;
                t--
              }
              return 0
            },
            J = function (A, e, t, r, n) {
              if (0 === t[r]) return M;
              var o = r - 1;
              if (Array.isArray(n) && !0 === n[o]) return M;
              var s = o - 1,
                a = o + 1,
                i = e[o],
                B = s >= 0 ? e[s] : 0,
                H = e[a];
              if (2 === i && 3 === H) return M;
              if (-1 !== R.indexOf(i)) return L;
              if (-1 !== R.indexOf(H)) return M;
              if (-1 !== P.indexOf(H)) return M;
              if (8 === G(o, e)) return D;
              if (11 === O.get(A[o]) && (H === T || H === m || H === v)) return M;
              if (7 === i || 7 === H) return M;
              if (9 === i) return M;
              if (-1 === [l, c, u].indexOf(i) && 9 === H) return M;
              if (-1 !== [d, w, Q, U, p].indexOf(H)) return M;
              if (G(o, e) === f) return M;
              if (Y(23, f, o, e)) return M;
              if (Y([d, w], h, o, e)) return M;
              if (Y(12, 12, o, e)) return M;
              if (i === l) return D;
              if (23 === i || 23 === H) return M;
              if (16 === H || 16 === i) return D;
              if (-1 !== [c, u, h].indexOf(H) || 14 === i) return M;
              if (36 === B && -1 !== z.indexOf(i)) return M;
              if (i === p && 36 === H) return M;
              if (H === g && -1 !== _.concat(g, Q, C, T, m, v).indexOf(i)) return M;
              if (-1 !== _.indexOf(H) && i === C || -1 !== _.indexOf(i) && H === C) return M;
              if (i === F && -1 !== [T, m, v].indexOf(H) || -1 !== [T, m, v].indexOf(i) && H === E) return M;
              if (-1 !== _.indexOf(i) && -1 !== k.indexOf(H) || -1 !== k.indexOf(i) && -1 !== _.indexOf(H)) return M;
              if (-1 !== [F, E].indexOf(i) && (H === C || -1 !== [f, u].indexOf(H) && e[a + 1] === C) || -1 !== [f, u].indexOf(i) && H === C || i === C && -1 !== [C, p, U].indexOf(H)) return M;
              if (-1 !== [C, p, U, d, w].indexOf(H))
                for (var S = o; S >= 0;) {
                  var x = e[S];
                  if (x === C) return M;
                  if (-1 === [p, U].indexOf(x)) break;
                  S--
                }
              if (-1 !== [F, E].indexOf(H))
                for (var V = -1 !== [d, w].indexOf(i) ? s : o; V >= 0;) {
                  var J = e[V];
                  if (J === C) return M;
                  if (-1 === [p, U].indexOf(J)) break;
                  V--
                }
              if (N === i && -1 !== [N, y, b, I].indexOf(H) || -1 !== [y, b].indexOf(i) && -1 !== [y, K].indexOf(H) || -1 !== [K, I].indexOf(i) && H === K) return M;
              if (-1 !== X.indexOf(i) && -1 !== [g, E].indexOf(H) || -1 !== X.indexOf(H) && i === F) return M;
              if (-1 !== _.indexOf(i) && -1 !== _.indexOf(H)) return M;
              if (i === U && -1 !== _.indexOf(H)) return M;
              if (-1 !== _.concat(C).indexOf(i) && H === f || -1 !== _.concat(C).indexOf(H) && i === w) return M;
              if (41 === i && 41 === H) {
                for (var W = t[o], j = 1; W > 0 && 41 === e[--W];) j++;
                if (j % 2 != 0) return M
              }
              return i === m && H === v ? M : D
            },
            W = (e.lineBreakAtIndex = function (A, e) {
              if (0 === e) return M;
              if (e >= A.length) return L;
              var t = V(A),
                r = o(t, 2),
                n = r[0],
                s = r[1];
              return J(A, s, n, e)
            }, function (A, e) {
              e || (e = {
                lineBreak: "normal",
                wordBreak: "normal"
              });
              var t = V(A, e.lineBreak),
                r = o(t, 3),
                n = r[0],
                s = r[1],
                a = r[2];
              return "break-all" !== e.wordBreak && "break-word" !== e.wordBreak || (s = s.map(function (A) {
                return -1 !== [C, H, S].indexOf(A) ? T : A
              })), [n, s, "keep-all" === e.wordBreak ? a.map(function (e, t) {
                return e && A[t] >= 19968 && A[t] <= 40959
              }) : null]
            }),
            j = (e.inlineBreakOpportunities = function (A, e) {
              var t = (0, i.toCodePoints)(A),
                r = M,
                n = W(t, e),
                s = o(n, 3),
                a = s[0],
                B = s[1],
                l = s[2];
              return t.forEach(function (A, e) {
                r += (0, i.fromCodePoint)(A) + (e >= t.length - 1 ? L : J(t, B, a, e + 1, l))
              }), r
            }, function () {
              function A(e, t, r, n) {
                ! function (A, e) {
                  if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, A), this._codePoints = e, this.required = t === L, this.start = r, this.end = n
              }
              return n(A, [{
                key: "slice",
                value: function () {
                  return i.fromCodePoint.apply(void 0, function (A) {
                    if (Array.isArray(A)) {
                      for (var e = 0, t = Array(A.length); e < A.length; e++) t[e] = A[e];
                      return t
                    }
                    return Array.from(A)
                  }(this._codePoints.slice(this.start, this.end)))
                }
              }]), A
            }());
          e.LineBreaker = function (A, e) {
            var t = (0, i.toCodePoints)(A),
              r = W(t, e),
              n = o(r, 3),
              s = n[0],
              a = n[1],
              B = n[2],
              l = t.length,
              c = 0,
              u = 0;
            return {
              next: function () {
                if (u >= l) return {
                  done: !0
                };
                for (var A = M; u < l && (A = J(t, a, s, ++u, B)) === M;);
                if (A !== M || u === l) {
                  var e = new j(t, A, c, u);
                  return c = u, {
                    value: e,
                    done: !1
                  }
                }
                return {
                  done: !0
                }
              }
            }
          }
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.Trie = e.createTrieFromBase64 = e.UTRIE2_INDEX_2_MASK = e.UTRIE2_INDEX_2_BLOCK_LENGTH = e.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = e.UTRIE2_INDEX_1_OFFSET = e.UTRIE2_UTF8_2B_INDEX_2_LENGTH = e.UTRIE2_UTF8_2B_INDEX_2_OFFSET = e.UTRIE2_INDEX_2_BMP_LENGTH = e.UTRIE2_LSCP_INDEX_2_LENGTH = e.UTRIE2_DATA_MASK = e.UTRIE2_DATA_BLOCK_LENGTH = e.UTRIE2_LSCP_INDEX_2_OFFSET = e.UTRIE2_SHIFT_1_2 = e.UTRIE2_INDEX_SHIFT = e.UTRIE2_SHIFT_1 = e.UTRIE2_SHIFT_2 = void 0;
          var r = function () {
              function A(A, e) {
                for (var t = 0; t < e.length; t++) {
                  var r = e[t];
                  r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(A, r.key, r)
                }
              }
              return function (e, t, r) {
                return t && A(e.prototype, t), r && A(e, r), e
              }
            }(),
            n = t(13),
            o = e.UTRIE2_SHIFT_2 = 5,
            s = e.UTRIE2_SHIFT_1 = 11,
            a = e.UTRIE2_INDEX_SHIFT = 2,
            i = e.UTRIE2_SHIFT_1_2 = s - o,
            B = e.UTRIE2_LSCP_INDEX_2_OFFSET = 65536 >> o,
            l = e.UTRIE2_DATA_BLOCK_LENGTH = 1 << o,
            c = e.UTRIE2_DATA_MASK = l - 1,
            u = e.UTRIE2_LSCP_INDEX_2_LENGTH = 1024 >> o,
            d = e.UTRIE2_INDEX_2_BMP_LENGTH = B + u,
            w = e.UTRIE2_UTF8_2B_INDEX_2_OFFSET = d,
            Q = e.UTRIE2_UTF8_2B_INDEX_2_LENGTH = 32,
            g = e.UTRIE2_INDEX_1_OFFSET = w + Q,
            h = e.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 65536 >> s,
            f = e.UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << i,
            U = e.UTRIE2_INDEX_2_MASK = f - 1,
            C = (e.createTrieFromBase64 = function (A) {
              var e = (0, n.decode)(A),
                t = Array.isArray(e) ? (0, n.polyUint32Array)(e) : new Uint32Array(e),
                r = Array.isArray(e) ? (0, n.polyUint16Array)(e) : new Uint16Array(e),
                o = r.slice(12, t[4] / 2),
                s = 2 === t[5] ? r.slice((24 + t[4]) / 2) : t.slice(Math.ceil((24 + t[4]) / 4));
              return new C(t[0], t[1], t[2], t[3], o, s)
            }, e.Trie = function () {
              function A(e, t, r, n, o, s) {
                ! function (A, e) {
                  if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, A), this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = o, this.data = s
              }
              return r(A, [{
                key: "get",
                value: function (A) {
                  var e = void 0;
                  if (A >= 0) {
                    if (A < 55296 || A > 56319 && A <= 65535) return e = ((e = this.index[A >> o]) << a) + (A & c), this.data[e];
                    if (A <= 65535) return e = ((e = this.index[B + (A - 55296 >> o)]) << a) + (A & c), this.data[e];
                    if (A < this.highStart) return e = g - h + (A >> s), e = this.index[e], e += A >> o & U, e = ((e = this.index[e]) << a) + (A & c), this.data[e];
                    if (A <= 1114111) return this.data[this.highValueIndex]
                  }
                  return this.errorValue
                }
              }]), A
            }())
        }, function (A, e, t) {
          A.exports = "KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA"
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          });
          var r = t(6);
          e.default = function A(e, t, n) {
            ! function (A, e) {
              if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, A), this.type = r.PATH.CIRCLE, this.x = e, this.y = t, this.radius = n
          }
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          });
          var r, n = function (A, e) {
              if (Array.isArray(A)) return A;
              if (Symbol.iterator in Object(A)) return function (A, e) {
                var t = [],
                  r = !0,
                  n = !1,
                  o = void 0;
                try {
                  for (var s, a = A[Symbol.iterator](); !(r = (s = a.next()).done) && (t.push(s.value), !e || t.length !== e); r = !0);
                } catch (A) {
                  n = !0, o = A
                } finally {
                  try {
                    !r && a.return && a.return()
                  } finally {
                    if (n) throw o
                  }
                }
                return t
              }(A, e);
              throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            o = function () {
              function A(A, e) {
                for (var t = 0; t < e.length; t++) {
                  var r = e[t];
                  r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(A, r.key, r)
                }
              }
              return function (e, t, r) {
                return t && A(e.prototype, t), r && A(e, r), e
              }
            }(),
            s = t(2),
            a = (t(25), t(52)),
            i = (r = t(9)) && r.__esModule ? r : {
              default: r
            },
            B = t(5),
            l = t(12),
            c = function () {
              function A(e, t) {
                ! function (A, e) {
                  if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, A), this.target = e, this.options = t, e.render(t)
              }
              return o(A, [{
                key: "renderNode",
                value: function (A) {
                  A.isVisible() && (this.renderNodeBackgroundAndBorders(A), this.renderNodeContent(A))
                }
              }, {
                key: "renderNodeContent",
                value: function (A) {
                  var e = this,
                    t = function () {
                      if (A.childNodes.length && A.childNodes.forEach(function (t) {
                          if (t instanceof i.default) {
                            var r = t.parent.style;
                            e.target.renderTextNode(t.bounds, r.color, r.font, r.textDecoration, r.textShadow)
                          } else e.target.drawShape(t, A.style.color)
                        }), A.image) {
                        var t = e.options.imageStore.get(A.image);
                        if (t) {
                          var r = (0, s.calculateContentBox)(A.bounds, A.style.padding, A.style.border),
                            n = "number" == typeof t.width && t.width > 0 ? t.width : r.width,
                            o = "number" == typeof t.height && t.height > 0 ? t.height : r.height;
                          n > 0 && o > 0 && e.target.clip([(0, s.calculatePaddingBoxPath)(A.curvedBounds)], function () {
                            e.target.drawImage(t, new s.Bounds(0, 0, n, o), r)
                          })
                        }
                      }
                    },
                    r = A.getClipPaths();
                  r.length ? this.target.clip(r, t) : t()
                }
              }, {
                key: "renderNodeBackgroundAndBorders",
                value: function (A) {
                  var e = this,
                    t = !A.style.background.backgroundColor.isTransparent() || A.style.background.backgroundImage.length,
                    r = A.style.border.some(function (A) {
                      return A.borderStyle !== l.BORDER_STYLE.NONE && !A.borderColor.isTransparent()
                    }),
                    n = function () {
                      var r = (0, B.calculateBackgroungPaintingArea)(A.curvedBounds, A.style.background.backgroundClip);
                      t && e.target.clip([r], function () {
                        A.style.background.backgroundColor.isTransparent() || e.target.fill(A.style.background.backgroundColor), e.renderBackgroundImage(A)
                      }), A.style.border.forEach(function (t, r) {
                        t.borderStyle === l.BORDER_STYLE.NONE || t.borderColor.isTransparent() || e.renderBorder(t, r, A.curvedBounds)
                      })
                    };
                  if (t || r) {
                    var o = A.parent ? A.parent.getClipPaths() : [];
                    o.length ? this.target.clip(o, n) : n()
                  }
                }
              }, {
                key: "renderBackgroundImage",
                value: function (A) {
                  var e = this;
                  A.style.background.backgroundImage.slice(0).reverse().forEach(function (t) {
                    "url" === t.source.method && t.source.args.length ? e.renderBackgroundRepeat(A, t) : /gradient/i.test(t.source.method) && e.renderBackgroundGradient(A, t)
                  })
                }
              }, {
                key: "renderBackgroundRepeat",
                value: function (A, e) {
                  var t = this.options.imageStore.get(e.source.args[0]);
                  if (t) {
                    var r = (0, B.calculateBackgroungPositioningArea)(A.style.background.backgroundOrigin, A.bounds, A.style.padding, A.style.border),
                      n = (0, B.calculateBackgroundSize)(e, t, r),
                      o = (0, B.calculateBackgroundPosition)(e.position, n, r),
                      s = (0, B.calculateBackgroundRepeatPath)(e, o, n, r, A.bounds),
                      a = Math.round(r.left + o.x),
                      i = Math.round(r.top + o.y);
                    this.target.renderRepeat(s, t, n, a, i)
                  }
                }
              }, {
                key: "renderBackgroundGradient",
                value: function (A, e) {
                  var t = (0, B.calculateBackgroungPositioningArea)(A.style.background.backgroundOrigin, A.bounds, A.style.padding, A.style.border),
                    r = (0, B.calculateGradientBackgroundSize)(e, t),
                    n = (0, B.calculateBackgroundPosition)(e.position, r, t),
                    o = new s.Bounds(Math.round(t.left + n.x), Math.round(t.top + n.y), r.width, r.height),
                    i = (0, a.parseGradient)(A, e.source, o);
                  if (i) switch (i.type) {
                    case a.GRADIENT_TYPE.LINEAR_GRADIENT:
                      this.target.renderLinearGradient(o, i);
                      break;
                    case a.GRADIENT_TYPE.RADIAL_GRADIENT:
                      this.target.renderRadialGradient(o, i)
                  }
                }
              }, {
                key: "renderBorder",
                value: function (A, e, t) {
                  this.target.drawShape((0, s.parsePathForBorder)(t, e), A.borderColor)
                }
              }, {
                key: "renderStack",
                value: function (A) {
                  var e = this;
                  if (A.container.isVisible()) {
                    var t = A.getOpacity();
                    t !== this._opacity && (this.target.setOpacity(A.getOpacity()), this._opacity = t);
                    var r = A.container.style.transform;
                    null !== r ? this.target.transform(A.container.bounds.left + r.transformOrigin[0].value, A.container.bounds.top + r.transformOrigin[1].value, r.transform, function () {
                      return e.renderStackContent(A)
                    }) : this.renderStackContent(A)
                  }
                }
              }, {
                key: "renderStackContent",
                value: function (A) {
                  var e = d(A),
                    t = n(e, 5),
                    r = t[0],
                    o = t[1],
                    s = t[2],
                    a = t[3],
                    i = t[4],
                    B = u(A),
                    l = n(B, 2),
                    c = l[0],
                    Q = l[1];
                  this.renderNodeBackgroundAndBorders(A.container), r.sort(w).forEach(this.renderStack, this), this.renderNodeContent(A.container), Q.forEach(this.renderNode, this), a.forEach(this.renderStack, this), i.forEach(this.renderStack, this), c.forEach(this.renderNode, this), o.forEach(this.renderStack, this), s.sort(w).forEach(this.renderStack, this)
                }
              }, {
                key: "render",
                value: function (A) {
                  return this.options.backgroundColor && this.target.rectangle(this.options.x, this.options.y, this.options.width, this.options.height, this.options.backgroundColor), this.renderStack(A), this.target.getTarget()
                }
              }]), A
            }();
          e.default = c;
          var u = function (A) {
              for (var e = [], t = [], r = A.children.length, n = 0; n < r; n++) {
                var o = A.children[n];
                o.isInlineLevel() ? e.push(o) : t.push(o)
              }
              return [e, t]
            },
            d = function (A) {
              for (var e = [], t = [], r = [], n = [], o = [], s = A.contexts.length, a = 0; a < s; a++) {
                var i = A.contexts[a];
                i.container.isPositioned() || i.container.style.opacity < 1 || i.container.isTransformed() ? i.container.style.zIndex.order < 0 ? e.push(i) : i.container.style.zIndex.order > 0 ? r.push(i) : t.push(i) : i.container.isFloating() ? n.push(i) : o.push(i)
              }
              return [e, t, r, n, o]
            },
            w = function (A, e) {
              return A.container.style.zIndex.order > e.container.style.zIndex.order ? 1 : A.container.style.zIndex.order < e.container.style.zIndex.order ? -1 : A.container.index > e.container.index ? 1 : -1
            }
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.transformWebkitRadialGradientArgs = e.parseGradient = e.RadialGradient = e.LinearGradient = e.RADIAL_GRADIENT_SHAPE = e.GRADIENT_TYPE = void 0;
          var r = function (A, e) {
              if (Array.isArray(A)) return A;
              if (Symbol.iterator in Object(A)) return function (A, e) {
                var t = [],
                  r = !0,
                  n = !1,
                  o = void 0;
                try {
                  for (var s, a = A[Symbol.iterator](); !(r = (s = a.next()).done) && (t.push(s.value), !e || t.length !== e); r = !0);
                } catch (A) {
                  n = !0, o = A
                } finally {
                  try {
                    !r && a.return && a.return()
                  } finally {
                    if (n) throw o
                  }
                }
                return t
              }(A, e);
              throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            n = (B(t(3)), t(53)),
            o = B(t(0)),
            s = t(1),
            a = B(s),
            i = t(4);

          function B(A) {
            return A && A.__esModule ? A : {
              default: A
            }
          }

          function l(A, e) {
            if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
          }
          var c = /^(to )?(left|top|right|bottom)( (left|top|right|bottom))?$/i,
            u = /^([+-]?\d*\.?\d+)% ([+-]?\d*\.?\d+)%$/i,
            d = /(px)|%|( 0)$/i,
            w = /^(from|to|color-stop)\((?:([\d.]+)(%)?,\s*)?(.+?)\)$/i,
            Q = /^\s*(circle|ellipse)?\s*((?:([\d.]+)(px|r?em|%)\s*(?:([\d.]+)(px|r?em|%))?)|closest-side|closest-corner|farthest-side|farthest-corner)?\s*(?:at\s*(?:(left|center|right)|([\d.]+)(px|r?em|%))\s+(?:(top|center|bottom)|([\d.]+)(px|r?em|%)))?(?:\s|$)/i,
            g = e.GRADIENT_TYPE = {
              LINEAR_GRADIENT: 0,
              RADIAL_GRADIENT: 1
            },
            h = e.RADIAL_GRADIENT_SHAPE = {
              CIRCLE: 0,
              ELLIPSE: 1
            },
            f = {
              left: new a.default("0%"),
              top: new a.default("0%"),
              center: new a.default("50%"),
              right: new a.default("100%"),
              bottom: new a.default("100%")
            },
            U = e.LinearGradient = function A(e, t) {
              l(this, A), this.type = g.LINEAR_GRADIENT, this.colorStops = e, this.direction = t
            },
            C = e.RadialGradient = function A(e, t, r, n) {
              l(this, A), this.type = g.RADIAL_GRADIENT, this.colorStops = e, this.shape = t, this.center = r, this.radius = n
            },
            E = (e.parseGradient = function (A, e, t) {
              var r = e.args,
                n = e.method,
                o = e.prefix;
              return "linear-gradient" === n ? F(r, t, !!o) : "gradient" === n && "linear" === r[0] ? F(["to bottom"].concat(y(r.slice(3))), t, !!o) : "radial-gradient" === n ? p(A, "-webkit-" === o ? N(r) : r, t) : "gradient" === n && "radial" === r[0] ? p(A, y(N(r.slice(1))), t) : void 0
            }, function (A, e, t) {
              for (var r = [], n = e; n < A.length; n++) {
                var s = A[n],
                  i = d.test(s),
                  B = s.lastIndexOf(" "),
                  l = new o.default(i ? s.substring(0, B) : s),
                  c = i ? new a.default(s.substring(B + 1)) : n === e ? new a.default("0%") : n === A.length - 1 ? new a.default("100%") : null;
                r.push({
                  color: l,
                  stop: c
                })
              }
              for (var u = r.map(function (A) {
                  var e = A.color,
                    r = A.stop;
                  return {
                    color: e,
                    stop: 0 === t ? 0 : r ? r.getAbsoluteValue(t) / t : null
                  }
                }), w = u[0].stop, Q = 0; Q < u.length; Q++)
                if (null !== w) {
                  var g = u[Q].stop;
                  if (null === g) {
                    for (var h = Q; null === u[h].stop;) h++;
                    for (var f = h - Q + 1, U = (u[h].stop - w) / f; Q < h; Q++) w = u[Q].stop = w + U
                  } else w = g
                } return u
            }),
            F = function (A, e, t) {
              var r = (0, n.parseAngle)(A[0]),
                o = c.test(A[0]),
                s = o || null !== r || u.test(A[0]),
                a = s ? null !== r ? H(t ? r - .5 * Math.PI : r, e) : o ? v(A[0], e) : b(A[0], e) : H(Math.PI, e),
                B = s ? 1 : 0,
                l = Math.min((0, i.distance)(Math.abs(a.x0) + Math.abs(a.x1), Math.abs(a.y0) + Math.abs(a.y1)), 2 * e.width, 2 * e.height);
              return new U(E(A, B, l), a)
            },
            p = function (A, e, t) {
              var r = e[0].match(Q),
                n = r && ("circle" === r[1] || void 0 !== r[3] && void 0 === r[5]) ? h.CIRCLE : h.ELLIPSE,
                o = {},
                a = {};
              r && (void 0 !== r[3] && (o.x = (0, s.calculateLengthFromValueWithUnit)(A, r[3], r[4]).getAbsoluteValue(t.width)), void 0 !== r[5] && (o.y = (0, s.calculateLengthFromValueWithUnit)(A, r[5], r[6]).getAbsoluteValue(t.height)), r[7] ? a.x = f[r[7].toLowerCase()] : void 0 !== r[8] && (a.x = (0, s.calculateLengthFromValueWithUnit)(A, r[8], r[9])), r[10] ? a.y = f[r[10].toLowerCase()] : void 0 !== r[11] && (a.y = (0, s.calculateLengthFromValueWithUnit)(A, r[11], r[12])));
              var i = {
                  x: void 0 === a.x ? t.width / 2 : a.x.getAbsoluteValue(t.width),
                  y: void 0 === a.y ? t.height / 2 : a.y.getAbsoluteValue(t.height)
                },
                B = T(r && r[2] || "farthest-corner", n, i, o, t);
              return new C(E(e, r ? 1 : 0, Math.min(B.x, B.y)), n, i, B)
            },
            H = function (A, e) {
              var t = e.width,
                r = e.height,
                n = .5 * t,
                o = .5 * r,
                s = (Math.abs(t * Math.sin(A)) + Math.abs(r * Math.cos(A))) / 2,
                a = n + Math.sin(A) * s,
                i = o - Math.cos(A) * s;
              return {
                x0: a,
                x1: t - a,
                y0: i,
                y1: r - i
              }
            },
            m = function (A) {
              return Math.acos(A.width / 2 / ((0, i.distance)(A.width, A.height) / 2))
            },
            v = function (A, e) {
              switch (A) {
                case "bottom":
                case "to top":
                  return H(0, e);
                case "left":
                case "to right":
                  return H(Math.PI / 2, e);
                case "right":
                case "to left":
                  return H(3 * Math.PI / 2, e);
                case "top right":
                case "right top":
                case "to bottom left":
                case "to left bottom":
                  return H(Math.PI + m(e), e);
                case "top left":
                case "left top":
                case "to bottom right":
                case "to right bottom":
                  return H(Math.PI - m(e), e);
                case "bottom left":
                case "left bottom":
                case "to top right":
                case "to right top":
                  return H(m(e), e);
                case "bottom right":
                case "right bottom":
                case "to top left":
                case "to left top":
                  return H(2 * Math.PI - m(e), e);
                case "top":
                case "to bottom":
                default:
                  return H(Math.PI, e)
              }
            },
            b = function (A, e) {
              var t = A.split(" ").map(parseFloat),
                n = r(t, 2),
                o = n[0],
                s = n[1],
                a = o / 100 * e.width / (s / 100 * e.height);
              return H(Math.atan(isNaN(a) ? 1 : a) + Math.PI / 2, e)
            },
            I = function (A, e, t, r) {
              return [{
                x: 0,
                y: 0
              }, {
                x: 0,
                y: A.height
              }, {
                x: A.width,
                y: 0
              }, {
                x: A.width,
                y: A.height
              }].reduce(function (A, n) {
                var o = (0, i.distance)(e - n.x, t - n.y);
                return (r ? o < A.optimumDistance : o > A.optimumDistance) ? {
                  optimumCorner: n,
                  optimumDistance: o
                } : A
              }, {
                optimumDistance: r ? 1 / 0 : -1 / 0,
                optimumCorner: null
              }).optimumCorner
            },
            T = function (A, e, t, r, n) {
              var o = t.x,
                s = t.y,
                a = 0,
                B = 0;
              switch (A) {
                case "closest-side":
                  e === h.CIRCLE ? a = B = Math.min(Math.abs(o), Math.abs(o - n.width), Math.abs(s), Math.abs(s - n.height)) : e === h.ELLIPSE && (a = Math.min(Math.abs(o), Math.abs(o - n.width)), B = Math.min(Math.abs(s), Math.abs(s - n.height)));
                  break;
                case "closest-corner":
                  if (e === h.CIRCLE) a = B = Math.min((0, i.distance)(o, s), (0, i.distance)(o, s - n.height), (0, i.distance)(o - n.width, s), (0, i.distance)(o - n.width, s - n.height));
                  else if (e === h.ELLIPSE) {
                    var l = Math.min(Math.abs(s), Math.abs(s - n.height)) / Math.min(Math.abs(o), Math.abs(o - n.width)),
                      c = I(n, o, s, !0);
                    B = l * (a = (0, i.distance)(c.x - o, (c.y - s) / l))
                  }
                  break;
                case "farthest-side":
                  e === h.CIRCLE ? a = B = Math.max(Math.abs(o), Math.abs(o - n.width), Math.abs(s), Math.abs(s - n.height)) : e === h.ELLIPSE && (a = Math.max(Math.abs(o), Math.abs(o - n.width)), B = Math.max(Math.abs(s), Math.abs(s - n.height)));
                  break;
                case "farthest-corner":
                  if (e === h.CIRCLE) a = B = Math.max((0, i.distance)(o, s), (0, i.distance)(o, s - n.height), (0, i.distance)(o - n.width, s), (0, i.distance)(o - n.width, s - n.height));
                  else if (e === h.ELLIPSE) {
                    var u = Math.max(Math.abs(s), Math.abs(s - n.height)) / Math.max(Math.abs(o), Math.abs(o - n.width)),
                      d = I(n, o, s, !1);
                    B = u * (a = (0, i.distance)(d.x - o, (d.y - s) / u))
                  }
                  break;
                default:
                  a = r.x || 0, B = void 0 !== r.y ? r.y : a
              }
              return {
                x: a,
                y: B
              }
            },
            N = e.transformWebkitRadialGradientArgs = function (A) {
              var e = "",
                t = "",
                r = "",
                n = "",
                o = 0,
                s = /^(left|center|right|\d+(?:px|r?em|%)?)(?:\s+(top|center|bottom|\d+(?:px|r?em|%)?))?$/i,
                a = /^\d+(px|r?em|%)?(?:\s+\d+(px|r?em|%)?)?$/i,
                i = A[o].match(s);
              i && o++;
              var B = A[o].match(/^(circle|ellipse)?\s*(closest-side|closest-corner|farthest-side|farthest-corner|contain|cover)?$/i);
              B && (e = B[1] || "", "contain" === (r = B[2] || "") ? r = "closest-side" : "cover" === r && (r = "farthest-corner"), o++);
              var l = A[o].match(a);
              l && o++;
              var c = A[o].match(s);
              c && o++;
              var u = A[o].match(a);
              u && o++;
              var d = c || i;
              d && d[1] && (n = d[1] + (/^\d+$/.test(d[1]) ? "px" : ""), d[2] && (n += " " + d[2] + (/^\d+$/.test(d[2]) ? "px" : "")));
              var w = u || l;
              return w && (t = w[0], w[1] || (t += "px")), !n || e || t || r || (t = n, n = ""), n && (n = "at " + n), [
                [e, r, t, n].filter(function (A) {
                  return !!A
                }).join(" ")
              ].concat(A.slice(o))
            },
            y = function (A) {
              return A.map(function (A) {
                return A.match(w)
              }).map(function (e, t) {
                if (!e) return A[t];
                switch (e[1]) {
                  case "from":
                    return e[4] + " 0%";
                  case "to":
                    return e[4] + " 100%";
                  case "color-stop":
                    return "%" === e[3] ? e[4] + " " + e[2] : e[4] + " " + 100 * parseFloat(e[2]) + "%"
                }
              })
            }
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          });
          var r = /([+-]?\d*\.?\d+)(deg|grad|rad|turn)/i;
          e.parseAngle = function (A) {
            var e = A.match(r);
            if (e) {
              var t = parseFloat(e[1]);
              switch (e[2].toLowerCase()) {
                case "deg":
                  return Math.PI * t / 180;
                case "grad":
                  return Math.PI / 200 * t;
                case "rad":
                  return t;
                case "turn":
                  return 2 * Math.PI * t
              }
            }
            return null
          }
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.cloneWindow = e.DocumentCloner = void 0;
          var r = function (A, e) {
              if (Array.isArray(A)) return A;
              if (Symbol.iterator in Object(A)) return function (A, e) {
                var t = [],
                  r = !0,
                  n = !1,
                  o = void 0;
                try {
                  for (var s, a = A[Symbol.iterator](); !(r = (s = a.next()).done) && (t.push(s.value), !e || t.length !== e); r = !0);
                } catch (A) {
                  n = !0, o = A
                } finally {
                  try {
                    !r && a.return && a.return()
                  } finally {
                    if (n) throw o
                  }
                }
                return t
              }(A, e);
              throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            n = function () {
              function A(A, e) {
                for (var t = 0; t < e.length; t++) {
                  var r = e[t];
                  r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(A, r.key, r)
                }
              }
              return function (e, t, r) {
                return t && A(e.prototype, t), r && A(e, r), e
              }
            }(),
            o = t(2),
            s = t(26),
            a = u(t(55)),
            i = t(4),
            B = t(5),
            l = u(t(15)),
            c = t(56);

          function u(A) {
            return A && A.__esModule ? A : {
              default: A
            }
          }
          var d = e.DocumentCloner = function () {
              function A(e, t, r, n, o) {
                ! function (A, e) {
                  if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, A), this.referenceElement = e, this.scrolledElements = [], this.copyStyles = n, this.inlineImages = n, this.logger = r, this.options = t, this.renderer = o, this.resourceLoader = new a.default(t, r, window), this.pseudoContentData = {
                  counters: {},
                  quoteDepth: 0
                }, this.documentElement = this.cloneNode(e.ownerDocument.documentElement)
              }
              return n(A, [{
                key: "inlineAllImages",
                value: function (A) {
                  var e = this;
                  if (this.inlineImages && A) {
                    var t = A.style;
                    Promise.all((0, B.parseBackgroundImage)(t.backgroundImage).map(function (A) {
                      return "url" === A.method ? e.resourceLoader.inlineImage(A.args[0]).then(function (A) {
                        return A && "string" == typeof A.src ? 'url("' + A.src + '")' : "none"
                      }).catch(function (A) {}) : Promise.resolve("" + A.prefix + A.method + "(" + A.args.join(",") + ")")
                    })).then(function (A) {
                      A.length > 1 && (t.backgroundColor = ""), t.backgroundImage = A.join(",")
                    }), A instanceof HTMLImageElement && this.resourceLoader.inlineImage(A.src).then(function (e) {
                      if (e && A instanceof HTMLImageElement && A.parentNode) {
                        var t = A.parentNode,
                          r = (0, i.copyCSSStyles)(A.style, e.cloneNode(!1));
                        t.replaceChild(r, A)
                      }
                    }).catch(function (A) {})
                  }
                }
              }, {
                key: "inlineFonts",
                value: function (A) {
                  var e = this;
                  return Promise.all(Array.from(A.styleSheets).map(function (e) {
                    return e.href ? fetch(e.href).then(function (A) {
                      return A.text()
                    }).then(function (A) {
                      return Q(A, e.href)
                    }).catch(function (A) {
                      return []
                    }) : w(e, A)
                  })).then(function (A) {
                    return A.reduce(function (A, e) {
                      return A.concat(e)
                    }, [])
                  }).then(function (A) {
                    return Promise.all(A.map(function (A) {
                      return fetch(A.formats[0].src).then(function (A) {
                        return A.blob()
                      }).then(function (A) {
                        return new Promise(function (e, t) {
                          var r = new FileReader;
                          r.onerror = t, r.onload = function () {
                            var A = r.result;
                            e(A)
                          }, r.readAsDataURL(A)
                        })
                      }).then(function (e) {
                        return A.fontFace.setProperty("src", 'url("' + e + '")'), "@font-face {" + A.fontFace.cssText + " "
                      })
                    }))
                  }).then(function (t) {
                    var r = A.createElement("style");
                    r.textContent = t.join("\n"), e.documentElement.appendChild(r)
                  })
                }
              }, {
                key: "createElementClone",
                value: function (A) {
                  var e = this;
                  if (this.copyStyles && A instanceof HTMLCanvasElement) {
                    var t = A.ownerDocument.createElement("img");
                    try {
                      return t.src = A.toDataURL(), t
                    } catch (A) {}
                  }
                  if (A instanceof HTMLIFrameElement) {
                    var r = A.cloneNode(!1),
                      n = m();
                    r.setAttribute("data-html2canvas-internal-iframe-key", n);
                    var s = (0, o.parseBounds)(A, 0, 0),
                      a = s.width,
                      B = s.height;
                    return this.resourceLoader.cache[n] = b(A, this.options).then(function (A) {
                      return e.renderer(A, {
                        async: e.options.async,
                        allowTaint: e.options.allowTaint,
                        backgroundColor: "#ffffff",
                        canvas: null,
                        imageTimeout: e.options.imageTimeout,
                        logging: e.options.logging,
                        proxy: e.options.proxy,
                        removeContainer: e.options.removeContainer,
                        scale: e.options.scale,
                        foreignObjectRendering: e.options.foreignObjectRendering,
                        useCORS: e.options.useCORS,
                        target: new l.default,
                        width: a,
                        height: B,
                        x: 0,
                        y: 0,
                        windowWidth: A.ownerDocument.defaultView.innerWidth,
                        windowHeight: A.ownerDocument.defaultView.innerHeight,
                        scrollX: A.ownerDocument.defaultView.pageXOffset,
                        scrollY: A.ownerDocument.defaultView.pageYOffset
                      }, e.logger.child(n))
                    }).then(function (e) {
                      return new Promise(function (t, n) {
                        var o = document.createElement("img");
                        o.onload = function () {
                          return t(e)
                        }, o.onerror = n, o.src = e.toDataURL(), r.parentNode && r.parentNode.replaceChild((0, i.copyCSSStyles)(A.ownerDocument.defaultView.getComputedStyle(A), o), r)
                      })
                    }), r
                  }
                  if (A instanceof HTMLStyleElement && A.sheet && A.sheet.cssRules) {
                    var c = [].slice.call(A.sheet.cssRules, 0).reduce(function (A, t) {
                        try {
                          return t && t.cssText ? A + t.cssText : A
                        } catch (r) {
                          return e.logger.log("Unable to access cssText property", t.name), A
                        }
                      }, ""),
                      u = A.cloneNode(!1);
                    return u.textContent = c, u
                  }
                  return A.cloneNode(!1)
                }
              }, {
                key: "cloneNode",
                value: function (A) {
                  var e = A.nodeType === Node.TEXT_NODE ? document.createTextNode(A.nodeValue) : this.createElementClone(A),
                    t = A.ownerDocument.defaultView,
                    r = A instanceof t.HTMLElement ? t.getComputedStyle(A) : null,
                    n = A instanceof t.HTMLElement ? t.getComputedStyle(A, ":before") : null,
                    o = A instanceof t.HTMLElement ? t.getComputedStyle(A, ":after") : null;
                  this.referenceElement === A && e instanceof t.HTMLElement && (this.clonedReferenceElement = e), e instanceof t.HTMLBodyElement && F(e);
                  for (var s = (0, c.parseCounterReset)(r, this.pseudoContentData), a = (0, c.resolvePseudoContent)(A, n, this.pseudoContentData), B = A.firstChild; B; B = B.nextSibling) B.nodeType === Node.ELEMENT_NODE && ("SCRIPT" === B.nodeName || B.hasAttribute("data-html2canvas-ignore") || "function" == typeof this.options.ignoreElements && this.options.ignoreElements(B)) || this.copyStyles && "STYLE" === B.nodeName || e.appendChild(this.cloneNode(B));
                  var l = (0, c.resolvePseudoContent)(A, o, this.pseudoContentData);
                  if ((0, c.popCounters)(s, this.pseudoContentData), A instanceof t.HTMLElement && e instanceof t.HTMLElement) switch (n && this.inlineAllImages(h(A, e, n, a, f)), o && this.inlineAllImages(h(A, e, o, l, U)), !r || !this.copyStyles || A instanceof HTMLIFrameElement || (0, i.copyCSSStyles)(r, e), this.inlineAllImages(e), 0 === A.scrollTop && 0 === A.scrollLeft || this.scrolledElements.push([e, A.scrollLeft, A.scrollTop]), A.nodeName) {
                    case "CANVAS":
                      this.copyStyles || g(A, e);
                      break;
                    case "TEXTAREA":
                    case "SELECT":
                      e.value = A.value
                  }
                  return e
                }
              }]), A
            }(),
            w = function (A, e) {
              return (A.cssRules ? Array.from(A.cssRules) : []).filter(function (A) {
                return A.type === CSSRule.FONT_FACE_RULE
              }).map(function (A) {
                for (var t = (0, B.parseBackgroundImage)(A.style.getPropertyValue("src")), r = [], n = 0; n < t.length; n++)
                  if ("url" === t[n].method && t[n + 1] && "format" === t[n + 1].method) {
                    var o = e.createElement("a");
                    o.href = t[n].args[0], e.body && e.body.appendChild(o);
                    var s = {
                      src: o.href,
                      format: t[n + 1].args[0]
                    };
                    r.push(s)
                  } return {
                  formats: r.filter(function (A) {
                    return /^woff/i.test(A.format)
                  }),
                  fontFace: A.style
                }
              }).filter(function (A) {
                return A.formats.length
              })
            },
            Q = function (A, e) {
              var t = document.implementation.createHTMLDocument(""),
                r = document.createElement("base");
              r.href = e;
              var n = document.createElement("style");
              return n.textContent = A, t.head && t.head.appendChild(r), t.body && t.body.appendChild(n), n.sheet ? w(n.sheet, t) : []
            },
            g = function (A, e) {
              try {
                if (e) {
                  e.width = A.width, e.height = A.height;
                  var t = A.getContext("2d"),
                    r = e.getContext("2d");
                  t ? r.putImageData(t.getImageData(0, 0, A.width, A.height), 0, 0) : r.drawImage(A, 0, 0)
                }
              } catch (A) {}
            },
            h = function (A, e, t, r, n) {
              if (t && t.content && "none" !== t.content && "-moz-alt-content" !== t.content && "none" !== t.display) {
                var o = e.ownerDocument.createElement("html2canvaspseudoelement");
                if ((0, i.copyCSSStyles)(t, o), r)
                  for (var s = r.length, a = 0; a < s; a++) {
                    var l = r[a];
                    switch (l.type) {
                      case c.PSEUDO_CONTENT_ITEM_TYPE.IMAGE:
                        var u = e.ownerDocument.createElement("img");
                        u.src = (0, B.parseBackgroundImage)("url(" + l.value + ")")[0].args[0], u.style.opacity = "1", o.appendChild(u);
                        break;
                      case c.PSEUDO_CONTENT_ITEM_TYPE.TEXT:
                        o.appendChild(e.ownerDocument.createTextNode(l.value))
                    }
                  }
                return o.className = C + " " + E, e.className += n === f ? " " + C : " " + E, n === f ? e.insertBefore(o, e.firstChild) : e.appendChild(o), o
              }
            },
            f = ":before",
            U = ":after",
            C = "___html2canvas___pseudoelement_before",
            E = "___html2canvas___pseudoelement_after",
            F = function (A) {
              p(A, "." + C + f + '{\n    content: "" !important;\n    display: none !important;\n}\n         .' + E + U + '{\n    content: "" !important;\n    display: none !important;\n}')
            },
            p = function (A, e) {
              var t = A.ownerDocument.createElement("style");
              t.innerHTML = e, A.appendChild(t)
            },
            H = function (A) {
              var e = r(A, 3),
                t = e[0],
                n = e[1],
                o = e[2];
              t.scrollLeft = n, t.scrollTop = o
            },
            m = function () {
              return Math.ceil(Date.now() + 1e7 * Math.random()).toString(16)
            },
            v = /^data:text\/(.+);(base64)?,(.*)$/i,
            b = function (A, e) {
              try {
                return Promise.resolve(A.contentWindow.document.documentElement)
              } catch (t) {
                return e.proxy ? (0, s.Proxy)(A.src, e).then(function (A) {
                  var e = A.match(v);
                  return e ? "base64" === e[2] ? window.atob(decodeURIComponent(e[3])) : decodeURIComponent(e[3]) : Promise.reject()
                }).then(function (e) {
                  return I(A.ownerDocument, (0, o.parseBounds)(A, 0, 0)).then(function (A) {
                    var t = A.contentWindow.document;
                    t.open(), t.write(e);
                    var r = T(A).then(function () {
                      return t.documentElement
                    });
                    return t.close(), r
                  })
                }) : Promise.reject()
              }
            },
            I = function (A, e) {
              var t = A.createElement("iframe");
              return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = e.width.toString(), t.height = e.height.toString(), t.scrolling = "no", t.setAttribute("data-html2canvas-ignore", "true"), A.body ? (A.body.appendChild(t), Promise.resolve(t)) : Promise.reject("")
            },
            T = function (A) {
              var e = A.contentWindow,
                t = e.document;
              return new Promise(function (r, n) {
                e.onload = A.onload = t.onreadystatechange = function () {
                  var e = setInterval(function () {
                    t.body.childNodes.length > 0 && "complete" === t.readyState && (clearInterval(e), r(A))
                  }, 50)
                }
              })
            },
            N = (e.cloneWindow = function (A, e, t, r, n, o) {
              var s = new d(t, r, n, !1, o),
                a = A.defaultView.pageXOffset,
                i = A.defaultView.pageYOffset;
              return I(A, e).then(function (n) {
                var o = n.contentWindow,
                  B = o.document,
                  l = T(n).then(function () {
                    s.scrolledElements.forEach(H), o.scrollTo(e.left, e.top), !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || o.scrollY === e.top && o.scrollX === e.left || (B.documentElement.style.top = -e.top + "px", B.documentElement.style.left = -e.left + "px", B.documentElement.style.position = "absolute");
                    var t = Promise.resolve([n, s.clonedReferenceElement, s.resourceLoader]),
                      a = r.onclone;
                    return s.clonedReferenceElement instanceof o.HTMLElement || s.clonedReferenceElement instanceof A.defaultView.HTMLElement || s.clonedReferenceElement instanceof HTMLElement ? "function" == typeof a ? Promise.resolve().then(function () {
                      return a(B)
                    }).then(function () {
                      return t
                    }) : t : Promise.reject("")
                  });
                return B.open(), B.write(N(document.doctype) + "<html></html>"),
                  function (A, e, t) {
                    !A.defaultView || e === A.defaultView.pageXOffset && t === A.defaultView.pageYOffset || A.defaultView.scrollTo(e, t)
                  }(t.ownerDocument, a, i), B.replaceChild(B.adoptNode(s.documentElement), B.documentElement), B.close(), l
              })
            }, function (A) {
              var e = "";
              return A && (e += "<!DOCTYPE ", A.name && (e += A.name), A.internalSubset && (e += A.internalSubset), A.publicId && (e += '"' + A.publicId + '"'), A.systemId && (e += '"' + A.systemId + '"'), e += ">"), e
            })
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.ResourceStore = void 0;
          var r, n = function () {
              function A(A, e) {
                for (var t = 0; t < e.length; t++) {
                  var r = e[t];
                  r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(A, r.key, r)
                }
              }
              return function (e, t, r) {
                return t && A(e.prototype, t), r && A(e, r), e
              }
            }(),
            o = (r = t(10)) && r.__esModule ? r : {
              default: r
            },
            s = t(26);

          function a(A, e) {
            if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
          }
          var i = function () {
            function A(e, t, r) {
              a(this, A), this.options = e, this._window = r, this.origin = this.getOrigin(r.location.href), this.cache = {}, this.logger = t, this._index = 0
            }
            return n(A, [{
              key: "loadImage",
              value: function (A) {
                var e = this;
                if (this.hasResourceInCache(A)) return A;
                if (Q(A)) return this.cache[A] = h(A, this.options.imageTimeout || 0), A;
                if (!g(A) || o.default.SUPPORT_SVG_DRAWING) {
                  if (!0 === this.options.allowTaint || d(A) || this.isSameOrigin(A)) return this.addImage(A, A, !1);
                  if (!this.isSameOrigin(A)) {
                    if ("string" == typeof this.options.proxy) return this.cache[A] = (0, s.Proxy)(A, this.options).then(function (A) {
                      return h(A, e.options.imageTimeout || 0)
                    }), A;
                    if (!0 === this.options.useCORS && o.default.SUPPORT_CORS_IMAGES) return this.addImage(A, A, !0)
                  }
                }
              }
            }, {
              key: "inlineImage",
              value: function (A) {
                var e = this;
                return d(A) ? h(A, this.options.imageTimeout || 0) : this.hasResourceInCache(A) ? this.cache[A] : this.isSameOrigin(A) || "string" != typeof this.options.proxy ? this.xhrImage(A) : this.cache[A] = (0, s.Proxy)(A, this.options).then(function (A) {
                  return h(A, e.options.imageTimeout || 0)
                })
              }
            }, {
              key: "xhrImage",
              value: function (A) {
                var e = this;
                return this.cache[A] = new Promise(function (t, r) {
                  var n = new XMLHttpRequest;
                  if (n.onreadystatechange = function () {
                      if (4 === n.readyState)
                        if (200 !== n.status) r("Failed to fetch image " + A.substring(0, 256) + " with status code " + n.status);
                        else {
                          var e = new FileReader;
                          e.addEventListener("load", function () {
                            var A = e.result;
                            t(A)
                          }, !1), e.addEventListener("error", function (A) {
                            return r(A)
                          }, !1), e.readAsDataURL(n.response)
                        }
                    }, n.responseType = "blob", e.options.imageTimeout) {
                    var o = e.options.imageTimeout;
                    n.timeout = o, n.ontimeout = function () {
                      return r("")
                    }
                  }
                  n.open("GET", A, !0), n.send()
                }).then(function (A) {
                  return h(A, e.options.imageTimeout || 0)
                }), this.cache[A]
              }
            }, {
              key: "loadCanvas",
              value: function (A) {
                var e = String(this._index++);
                return this.cache[e] = Promise.resolve(A), e
              }
            }, {
              key: "hasResourceInCache",
              value: function (A) {
                return void 0 !== this.cache[A]
              }
            }, {
              key: "addImage",
              value: function (A, e, t) {
                var r = this,
                  n = function (A) {
                    return new Promise(function (n, o) {
                      var s = new Image;
                      if (s.onload = function () {
                          return n(s)
                        }, A && !t || (s.crossOrigin = "anonymous"), s.onerror = o, s.src = e, !0 === s.complete && setTimeout(function () {
                          n(s)
                        }, 500), r.options.imageTimeout) {
                        var a = r.options.imageTimeout;
                        setTimeout(function () {
                          return o("")
                        }, a)
                      }
                    })
                  };
                return this.cache[A] = w(e) && !g(e) ? o.default.SUPPORT_BASE64_DRAWING(e).then(n) : n(!0), A
              }
            }, {
              key: "isSameOrigin",
              value: function (A) {
                return this.getOrigin(A) === this.origin
              }
            }, {
              key: "getOrigin",
              value: function (A) {
                var e = this._link || (this._link = this._window.document.createElement("a"));
                return e.href = A, e.href = e.href, e.protocol + e.hostname + e.port
              }
            }, {
              key: "ready",
              value: function () {
                var A = this,
                  e = Object.keys(this.cache),
                  t = e.map(function (e) {
                    return A.cache[e].catch(function (A) {
                      return null
                    })
                  });
                return Promise.all(t).then(function (A) {
                  return new B(e, A)
                })
              }
            }]), A
          }();
          e.default = i;
          var B = e.ResourceStore = function () {
              function A(e, t) {
                a(this, A), this._keys = e, this._resources = t
              }
              return n(A, [{
                key: "get",
                value: function (A) {
                  var e = this._keys.indexOf(A);
                  return -1 === e ? null : this._resources[e]
                }
              }]), A
            }(),
            l = /^data:image\/svg\+xml/i,
            c = /^data:image\/.*;base64,/i,
            u = /^data:image\/.*/i,
            d = function (A) {
              return u.test(A)
            },
            w = function (A) {
              return c.test(A)
            },
            Q = function (A) {
              return "blob" === A.substr(0, 4)
            },
            g = function (A) {
              return "svg" === A.substr(-3).toLowerCase() || l.test(A)
            },
            h = function (A, e) {
              return new Promise(function (t, r) {
                var n = new Image;
                n.onload = function () {
                  return t(n)
                }, n.onerror = r, n.src = A, !0 === n.complete && setTimeout(function () {
                  t(n)
                }, 500), e && setTimeout(function () {
                  return r("")
                }, e)
              })
            }
        }, function (A, e, t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.parseContent = e.resolvePseudoContent = e.popCounters = e.parseCounterReset = e.TOKEN_TYPE = e.PSEUDO_CONTENT_ITEM_TYPE = void 0;
          var r = function (A, e) {
              if (Array.isArray(A)) return A;
              if (Symbol.iterator in Object(A)) return function (A, e) {
                var t = [],
                  r = !0,
                  n = !1,
                  o = void 0;
                try {
                  for (var s, a = A[Symbol.iterator](); !(r = (s = a.next()).done) && (t.push(s.value), !e || t.length !== e); r = !0);
                } catch (A) {
                  n = !0, o = A
                } finally {
                  try {
                    !r && a.return && a.return()
                  } finally {
                    if (n) throw o
                  }
                }
                return t
              }(A, e);
              throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            n = t(14),
            o = t(8),
            s = e.PSEUDO_CONTENT_ITEM_TYPE = {
              TEXT: 0,
              IMAGE: 1
            },
            a = e.TOKEN_TYPE = {
              STRING: 0,
              ATTRIBUTE: 1,
              URL: 2,
              COUNTER: 3,
              COUNTERS: 4,
              OPENQUOTE: 5,
              CLOSEQUOTE: 6
            },
            i = (e.parseCounterReset = function (A, e) {
              if (!A || !A.counterReset || "none" === A.counterReset) return [];
              for (var t = [], n = A.counterReset.split(/\s*,\s*/), o = n.length, s = 0; s < o; s++) {
                var a = n[s].split(/\s+/),
                  i = r(a, 2),
                  B = i[0],
                  l = i[1];
                t.push(B);
                var c = e.counters[B];
                c || (c = e.counters[B] = []), c.push(parseInt(l || 0, 10))
              }
              return t
            }, e.popCounters = function (A, e) {
              for (var t = A.length, r = 0; r < t; r++) e.counters[A[r]].pop()
            }, e.resolvePseudoContent = function (A, e, t) {
              if (!e || !e.content || "none" === e.content || "-moz-alt-content" === e.content || "none" === e.display) return null;
              var n = i(e.content),
                o = n.length,
                B = [],
                u = "",
                d = e.counterIncrement;
              if (d && "none" !== d) {
                var w = d.split(/\s+/),
                  Q = r(w, 2),
                  g = Q[0],
                  h = Q[1],
                  f = t.counters[g];
                f && (f[f.length - 1] += void 0 === h ? 1 : parseInt(h, 10))
              }
              for (var U = 0; U < o; U++) {
                var C = n[U];
                switch (C.type) {
                  case a.STRING:
                    u += C.value || "";
                    break;
                  case a.ATTRIBUTE:
                    A instanceof HTMLElement && C.value && (u += A.getAttribute(C.value) || "");
                    break;
                  case a.COUNTER:
                    var E = t.counters[C.name || ""];
                    E && (u += c([E[E.length - 1]], "", C.format));
                    break;
                  case a.COUNTERS:
                    var F = t.counters[C.name || ""];
                    F && (u += c(F, C.glue, C.format));
                    break;
                  case a.OPENQUOTE:
                    u += l(e, !0, t.quoteDepth), t.quoteDepth++;
                    break;
                  case a.CLOSEQUOTE:
                    t.quoteDepth--, u += l(e, !1, t.quoteDepth);
                    break;
                  case a.URL:
                    u && (B.push({
                      type: s.TEXT,
                      value: u
                    }), u = ""), B.push({
                      type: s.IMAGE,
                      value: C.value || ""
                    })
                }
              }
              return u && B.push({
                type: s.TEXT,
                value: u
              }), B
            }, e.parseContent = function (A, e) {
              if (e && e[A]) return e[A];
              for (var t = [], r = A.length, n = !1, o = !1, s = !1, i = "", l = "", c = [], u = 0; u < r; u++) {
                var d = A.charAt(u);
                switch (d) {
                  case "'":
                  case '"':
                    o ? i += d : (n = !n, s || n || (t.push({
                      type: a.STRING,
                      value: i
                    }), i = ""));
                    break;
                  case "\\":
                    o ? (i += d, o = !1) : o = !0;
                    break;
                  case "(":
                    n ? i += d : (s = !0, l = i, i = "", c = []);
                    break;
                  case ")":
                    if (n) i += d;
                    else if (s) {
                      switch (i && c.push(i), l) {
                        case "attr":
                          c.length > 0 && t.push({
                            type: a.ATTRIBUTE,
                            value: c[0]
                          });
                          break;
                        case "counter":
                          if (c.length > 0) {
                            var w = {
                              type: a.COUNTER,
                              name: c[0]
                            };
                            c.length > 1 && (w.format = c[1]), t.push(w)
                          }
                          break;
                        case "counters":
                          if (c.length > 0) {
                            var Q = {
                              type: a.COUNTERS,
                              name: c[0]
                            };
                            c.length > 1 && (Q.glue = c[1]), c.length > 2 && (Q.format = c[2]), t.push(Q)
                          }
                          break;
                        case "url":
                          c.length > 0 && t.push({
                            type: a.URL,
                            value: c[0]
                          })
                      }
                      s = !1, i = ""
                    }
                    break;
                  case ",":
                    n ? i += d : s && (c.push(i), i = "");
                    break;
                  case " ":
                  case "\t":
                    n ? i += d : i && (B(t, i), i = "");
                    break;
                  default:
                    i += d
                }
                "\\" !== d && (o = !1)
              }
              return i && B(t, i), e && (e[A] = t), t
            }),
            B = function (A, e) {
              switch (e) {
                case "open-quote":
                  A.push({
                    type: a.OPENQUOTE
                  });
                  break;
                case "close-quote":
                  A.push({
                    type: a.CLOSEQUOTE
                  })
              }
            },
            l = function (A, e, t) {
              var r = A.quotes ? A.quotes.split(/\s+/) : ["'\"'", "'\"'"],
                n = 2 * t;
              return n >= r.length && (n = r.length - 2), e || ++n, r[n].replace(/^["']|["']$/g, "")
            },
            c = function (A, e, t) {
              for (var r = A.length, s = "", a = 0; a < r; a++) a > 0 && (s += e || ""), s += (0, n.createCounterText)(A[a], (0, o.parseListStyleType)(t || "decimal"), !1);
              return s
            }
        }])
      })
    }).call(this, t(14)(A))
  }, function (A, e) {
    A.exports = function (A) {
      return A.webpackPolyfill || (A.deprecate = function () {}, A.paths = [], A.children || (A.children = []), Object.defineProperty(A, "loaded", {
        enumerable: !0,
        get: function () {
          return A.l
        }
      }), Object.defineProperty(A, "id", {
        enumerable: !0,
        get: function () {
          return A.i
        }
      }), A.webpackPolyfill = 1), A
    }
  }, function (A, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function (A, e, t, n) {
      [{
        name: "n",
        style: {
          top: "-" + t / 2 + "px",
          left: 0,
          width: "100%",
          height: t / 2 + "px"
        }
      }, {
        name: "s",
        style: {
          bottom: "-" + t / 2 + "px",
          left: 0,
          width: "100%",
          height: t / 2 + "px"
        }
      }, {
        name: "w",
        style: {
          top: 0,
          left: "-" + t / 2 + "px",
          width: t / 2 + "px",
          height: "100%"
        }
      }, {
        name: "e",
        style: {
          top: 0,
          right: "-" + t / 2 + "px",
          width: t / 2 + "px",
          height: "100%"
        }
      }].forEach(function (e) {
        A.appendChild(function (A, e, t) {
          var n = document.createElement("div");
          return n.id = A + "kssLine", n.className = "kssLine", (0, r.css)(n, {
            cursor: A + "-resize"
          }), (0, r.css)(n, e), n
        }(e.name, e.style))
      }), [{
        name: "nw",
        style: {
          top: "-" + e / 2 + "px",
          left: "-" + e / 2 + "px"
        }
      }, {
        name: "ne",
        style: {
          top: "-" + e / 2 + "px",
          right: "-" + e / 2 + "px"
        }
      }, {
        name: "se",
        style: {
          bottom: "-" + e / 2 + "px",
          right: "-" + e / 2 + "px"
        }
      }, {
        name: "e",
        style: {
          top: "calc(50% - " + e / 2 + "px)",
          right: "-" + e / 2 + "px"
        }
      }, {
        name: "w",
        style: {
          top: "calc(50% - " + e / 2 + "px)",
          left: "-" + e / 2 + "px"
        }
      }, {
        name: "n",
        style: {
          top: "-" + e / 2 + "px",
          left: "calc(50% - " + e / 2 + "px)"
        }
      }, {
        name: "s",
        style: {
          bottom: "-" + e / 2 + "px",
          left: "calc(50% - " + e / 2 + "px)"
        }
      }, {
        name: "sw",
        style: {
          bottom: "-" + e / 2 + "px",
          left: "-" + e / 2 + "px"
        }
      }].forEach(function (t) {
        A.appendChild(function (A, e, t) {
          var n = document.createElement("div");
          return n.id = A + "kssDot", n.className = "kssDot", (0, r.css)(n, {
            width: t + "px",
            height: t + "px",
            cursor: A + "-resize"
          }), (0, r.css)(n, e), n
        }(t.name, t.style, e, t.id))
      }), B("swkssDot", A, n), B("sekssDot", A, n), B("nwkssDot", A, n), B("nekssDot", A, n), l("horizontal", "ekssDot", A, n), l("horizontal", "wkssDot", A, n), l("horizontal", "ekssLine", A, n), l("horizontal", "wkssLine", A, n), l("vertical", "nkssDot", A, n), l("vertical", "skssDot", A, n), l("vertical", "nkssLine", A, n), l("vertical", "skssLine", A, n)
    };
    var r = t(0),
      n = i(t(4)),
      o = i(t(8)),
      s = i(t(9)),
      a = i(t(6));

    function i(A) {
      return A && A.__esModule ? A : {
        default: A
      }
    }

    function B(A, e, t) {
      document.getElementById(A).addEventListener("mousedown", function (A) {
        if (!t.isEdit) {
          (0, o.default)(t), document.addEventListener("mousemove", l);
          var i = c(t.startX, t.width, A.clientX),
            B = c(t.startY, t.height, A.clientY);
          t.startX = 2 * (t.startX + t.width / 2) - i, t.startY = 2 * (t.startY + t.height / 2) - B;
          A.clientX, A.clientY;
          document.addEventListener("mouseup", function A(e) {
            var r = (0, s.default)(e);
            var o = r[0];
            var a = r[1];
            t.width = Math.abs(o - t.startX);
            t.height = Math.abs(a - t.startY);
            t.startX = Math.min(o, t.startX);
            t.startY = Math.min(t.startY, a);
            document.removeEventListener("mousemove", l);
            document.removeEventListener("mouseup", A);
            (0, n.default)(t)
          })
        }

        function l(A) {
          var n = (0, s.default)(A),
            o = n[0],
            i = n[1],
            B = Math.abs(i - t.startY),
            l = Math.abs(o - t.startX),
            c = Math.min(t.startY, i),
            u = Math.min(t.startX, o),
            d = {
              height: B + "px",
              width: l + "px",
              top: c + "px",
              left: u + "px"
            };
          (0, r.css)(e, d), (0, a.default)(t, l, B, c, u, t.toolbar)
        }
      })
    }

    function l(A, e, t, i) {
      document.getElementById(e).addEventListener("mousedown", function (e) {
        if (!i.isEdit) {
          (0, o.default)(i), document.addEventListener("mousemove", u);
          var B = c(i.startX, i.width, e.clientX),
            l = c(i.startY, i.height, e.clientY);
          "horizontal" === A ? i.startX = 2 * (i.startX + i.width / 2) - B : "vertical" === A && (i.startY = 2 * (i.startY + i.height / 2) - l);
          e.clientX, e.clientY;
          document.addEventListener("mouseup", function e(t) {
            var r = (0, s.default)(t);
            var o = r[0];
            var a = r[1];
            "horizontal" === A ? (i.width = Math.abs(o - i.startX), i.startX = Math.min(o, i.startX)) : "vertical" === A && (i.height = Math.abs(a - i.startY), i.startY = Math.min(i.startY, a));
            document.removeEventListener("mousemove", u);
            document.removeEventListener("mouseup", e);
            (0, n.default)(i)
          })
        }

        function u(e) {
          var n = (0, s.default)(e),
            o = n[0],
            B = n[1],
            l = Math.abs(B - i.startY),
            c = Math.abs(o - i.startX),
            u = Math.min(i.startY, B),
            d = Math.min(i.startX, o),
            w = void 0;
          "horizontal" === A ? w = {
            width: c + "px",
            left: d + "px"
          } : "vertical" === A && (w = {
            height: l + "px",
            top: u + "px"
          }), (0, r.css)(t, w);
          (0, a.default)(i, c, l, u, d, i.toolbar), "horizontal" === A ? (0, a.default)(i, c, i.height, i.startY, d, i.toolbar) : "vertical" === A && (0, a.default)(i, i.width, l, u, i.left, i.toolbar)
        }
      })
    }

    function c(A, e, t) {
      return Math.abs(t - A) >= Math.abs(t - A - e) ? A + e : A
    }
  }, function (A, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function (A) {
      var e = document.createElement("div");
      e.id = "kssToolbar", "[object Object]" !== (0, r.typeChecking)(A.toolShow) && (A.toolShow = {});
      var t = 0;
      return g.forEach(function (r) {
        !1 !== A.toolShow[r.show] && (e.appendChild(r.component(A)), t += r.width)
      }), t += 10, A.toolbarWidth = t, (0, r.css)(e, {
        top: A.height + A.toolbarMarginTop + "px",
        width: t + "px",
        height: A.toolbarHeight + "px"
      }), (0, w.default)(A, A.width, A.height, A.startY, A.startX, e), e.appendChild((0, d.default)(A)), A.kssScreenShotWrapper.appendChild(e), e
    };
    var r = t(0),
      n = Q(t(17)),
      o = Q(t(20)),
      s = Q(t(22)),
      a = Q(t(25)),
      i = Q(t(27)),
      B = Q(t(29)),
      l = Q(t(31)),
      c = Q(t(33)),
      u = Q(t(35)),
      d = Q(t(37)),
      w = Q(t(6));

    function Q(A) {
      return A && A.__esModule ? A : {
        default: A
      }
    }
    var g = [{
      component: n.default,
      show: "complete",
      width: 40
    }, {
      component: o.default,
      show: "quit",
      width: 30
    }, {
      component: a.default,
      show: "back",
      width: 30
    }, {
      component: s.default,
      show: "arrow",
      width: 30
    }, {
      component: i.default,
      show: "drawLine",
      width: 30
    }, {
      component: B.default,
      show: "rect",
      width: 30
    }, {
      component: l.default,
      show: "ellipse",
      width: 30
    }, {
      component: u.default,
      show: "text",
      width: 30
    }, {
      component: c.default,
      show: "color",
      width: 30
    }]
  }, function (A, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function (A) {
      var e = document.createElement("span");
      return e.id = "kssCompleteBT", e.className = "kssToolbarItemBT", e.innerHTML = "完成", e.title = "完成截图", (0, r.css)(e, {
        width: "40px",
        "line-height": "28px"
      }), e.addEventListener("click", async function () {
        A.isEdit = !0, (0, n.default)(A, A.snapshootList[A.snapshootList.length - 1]), !0 === A.needDownload && await (0, o.default)(A), (0, s.default)(A)
      }), e
    };
    var r = t(0),
      n = (a(t(4)), a(t(18))),
      o = a(t(19)),
      s = a(t(7));

    function a(A) {
      return A && A.__esModule ? A : {
        default: A
      }
    }
  }, function (A, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function (A, e) {
      var t = document.createElement("span");
      (0, r.css)(t, {
        opacity: "0"
      });
      var n = document.createElement("img"),
        o = void 0;
      o = "[object Function]" === (0, r.typeChecking)(A.copyPath) ? A.copyPath(e) : null;
      if (null === o) return;
      n.src = o;
      t.appendChild(n), document.body.appendChild(t), setTimeout(function () {
        var A = window.getSelection(),
          e = document.createRange();
        e.selectNodeContents(t), A.removeAllRanges(), A.addRange(e), document.execCommand("Copy"), (0, r.remove)(t)
      }, 0)
    };
    var r = t(0)
  }, function (A, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function (A) {
      return new Promise(function (e) {
        var t = A.snapshootList[A.snapshootList.length - 1],
          r = document.createElement("a");
        if ("download" in r) {
          r.href = t, r.download = "kss" + (new Date).getTime() + ".png";
          var n = document.createEvent("MouseEvents");
          n.initEvent("click", !1, !1), r.dispatchEvent(n)
        } else {
          var o = t.replace("image/png", "image/octet-stream");
          window.location.href = o
        }
        e()
      })
    }
  }, function (A, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function (A) {
      var e = document.createElement("span");
      e.id = "kssQuitBT", e.className = "kssToolbarItemBT", e.title = "退出截图";
      var t = document.createElement("img");
      return t.className = "kssToolbarItemImg", t.src = r.default, A.quitBT = t, e.appendChild(t), e.addEventListener("click", function () {
        A.isEdit = !0, (0, n.default)(A)
      }), e
    };
    t(0), o(t(4));
    var r = o(t(21)),
      n = o(t(7));

    function o(A) {
      return A && A.__esModule ? A : {
        default: A
      }
    }
  }, function (A, e) {
    A.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABkElEQVRYR+2Wv07CcBDHf1eaaNq+haMv4Ao9dk18BZhAF1iITsQ4QFxgEZ7B6EyO2Vdw8iloownhTKsltemfX69DGfitvbvvp9+73x9QNS+oWV8dAQ7Tge9m83xrmk/AvLCIXqrMie+6NzvDuDCZ706JPpO1Uh3wEF8VwGUQDMx9i2gugfARewwwC3OZ32yiKz2AdnuklHqIgiUQ/8QD/d1u5KzXj1oAQZCHuFAAHQlEUlwxL22ibpqLuUMogdggDgBgshfLEQ9bXNTbJAQzDx2iaVpeivjcJurnaRQC/LVjpgB6UaE0CIm4lgORqIeYCSEVLwWQ5URYJNZzZp46RMOi1u6HWzcwy4l4flnx0g7kQUjExQAbxAkADKr+vQggOYxVIbS2Yab1zPfhN4Bx7OAp3PtxaG2AWrehzmkoPQsKHdARjyyVQBzmZcRKgY/4XNt17NX9IIk/yRRz1yZalj2yg3jxk+yr1TrbNhpjg/ndIvp90wmX77rXbBgdE+D2ZLX6SJYp3AVCXe20I8DRgR/EvCcwIlPjxgAAAABJRU5ErkJggg=="
  }, function (A, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function (A) {
      var e = document.createElement("span");
      e.id = "kssArrowBT", e.className = "kssToolbarItemBT", e.title = "箭头工具";
      var t = document.createElement("img");
      return t.className = "kssToolbarItemImg", t.src = s.default, A.arrowBT = e, e.appendChild(t), e.addEventListener("click", function () {
        function t(e) {
          if (2 !== e.button) {
            var t = e.clientX,
              s = e.clientY;
            document.addEventListener("mousemove", i), document.addEventListener("mouseup", B), A.toolmousemove = i, A.toolmouseup = B;
            var a = {
              distance: null,
              twoSide: null,
              bottomSide: null,
              crossWidth: null
            }
          }

          function i(e) {
            (0, n.default)(A);
            var o = e.clientX,
              i = e.clientY;
            o < A.startX ? o = A.startX : o > A.startX + A.width && (o = A.startX + A.width), i < A.startY ? i = A.startY : i > A.startY + A.height && (i = A.startY + A.height), (0, r.default)({
              x: t - A.startX,
              y: s - A.startY
            }, {
              x: o - A.startX,
              y: i - A.startY
            }, a, A)
          }

          function B(e) {
            var r = e.clientX,
              n = e.clientY;
            if (t === r && s === n) return document.removeEventListener("mousemove", i), void document.removeEventListener("mouseup", B);
            document.removeEventListener("mousemove", i), document.removeEventListener("mouseup", B), (0, o.default)(A)
          }
        }
        A.isEdit = !0, "arrow" !== A.currentToolType && (A.currentToolType = "arrow", (0, a.default)(e), (0, i.default)(A, "canvasLayer"), A.toolmousedown && (A.rectangleCanvas.removeEventListener("mousedown", A.toolmousedown), document.removeEventListener("mousemove", A.toolmousemove), document.removeEventListener("mouseup", A.toolmouseup)), A.rectangleCanvas.addEventListener("mousedown", t), A.toolmousedown = t)
      }), e
    };
    t(0);
    var r = B(t(23)),
      n = B(t(5)),
      o = B(t(3)),
      s = B(t(24)),
      a = B(t(1)),
      i = B(t(2));

    function B(A) {
      return A && A.__esModule ? A : {
        default: A
      }
    }
  }, function (A, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function (A, e, t, n) {
      var o = A.x,
        s = A.y,
        a = e.x,
        i = e.y;
      (0, r.computed)(t, "distance", ["twoSide", "bottomSide", "crossWidth"], [function (A, e, t) {
        A[t] = e / 2 * 1.1 <= 20 ? e / 2 * 1.1 : 20
      }, function (A, e, t) {
        A[t] = e / 2 * 1.1 <= 20 ? e / 2 * 1.1 * .8 : 16
      }, function (A, e, t) {
        A[t] = e / 2 * 1.1 <= 20 ? e / 2 * 1.1 * .4 : 8
      }]);
      var B = Math.sqrt(Math.pow(o - a, 2) + Math.pow(s - i, 2));
      t.distance = B;
      var l = Math.sqrt(Math.pow(t.twoSide, 2) - Math.pow(t.bottomSide / 2, 2)),
        c = Math.sqrt(Math.pow(l, 2) + Math.pow(t.crossWidth / 2, 2)),
        u = 180 * Math.atan(t.bottomSide / 2 / l) / Math.PI,
        d = 180 * Math.atan(t.crossWidth / 2 / l) / Math.PI,
        w = void 0,
        Q = void 0,
        g = void 0,
        h = void 0,
        f = void 0,
        U = void 0,
        C = void 0,
        E = void 0;
      if (o > a && s > i || o < a && s < i) {
        var F = 180 * Math.atan(Math.abs(o - a) / Math.abs(s - i)) / Math.PI,
          p = Math.cos(2 * (d + F) * Math.PI / 360) * c,
          H = Math.sin(2 * (d + F) * Math.PI / 360) * c,
          m = 1;
        o < a && s < i && (m = -1), w = a + H * m, Q = i + p * m;
        var v = Math.cos(2 * (u + F) * Math.PI / 360) * t.twoSide,
          b = Math.sin(2 * (u + F) * Math.PI / 360) * t.twoSide;
        g = a + b * m, h = i + v * m;
        var I = Math.cos(2 * F * Math.PI / 360) * l,
          T = Math.sin(2 * F * Math.PI / 360) * l,
          N = a + T * m,
          y = i + I * m;
        C = 2 * N - w, E = 2 * y - Q, f = 2 * N - g, U = 2 * y - h
      } else if (o < a && s > i || o > a && s < i) {
        var K = 180 * Math.atan(Math.abs(s - i) / Math.abs(o - a)) / Math.PI,
          S = Math.cos(2 * (d + K) * Math.PI / 360) * c,
          L = Math.sin(2 * (d + K) * Math.PI / 360) * c,
          M = 1;
        o < a && s > i && (M = -1), w = a + S * M, Q = i - L * M;
        var D = Math.cos(2 * (u + K) * Math.PI / 360) * t.twoSide,
          O = Math.sin(2 * (u + K) * Math.PI / 360) * t.twoSide;
        g = a + D * M, h = i - O * M;
        var _ = Math.cos(2 * K * Math.PI / 360) * l,
          R = Math.sin(2 * K * Math.PI / 360) * l,
          P = a + _ * M,
          k = i - R * M;
        C = 2 * P - w, E = 2 * k - Q, f = 2 * P - g, U = 2 * k - h
      } else if (o === a) {
        var x = 1;
        s < i && (x = -1);
        var X = a,
          z = i + l * x;
        w = X + t.crossWidth / 2 * x, Q = z, g = X + t.bottomSide / 2 * x, h = z, C = X - t.crossWidth / 2 * x, E = z, f = X - t.bottomSide / 2 * x, U = z
      } else if (s === i) {
        var V = 1;
        o < a && (V = -1);
        var Y = a + l * V,
          G = i;
        w = Y, Q = G + t.crossWidth / 2 * V, g = Y, h = G + t.bottomSide / 2 * V, C = Y, E = G - t.crossWidth / 2 * V, f = Y, U = G - t.bottomSide / 2 * V
      }
      var J = n.rectangleCanvas.getContext("2d");
      J.beginPath(), J.lineWidth = 1, J.moveTo(o, s), J.lineTo(w, Q), J.lineTo(g, h), J.lineTo(a, i), J.lineTo(f, U), J.lineTo(C, E), J.lineTo(o, s), J.fillStyle = n.toolbarColor, J.fill(), J.closePath()
    };
    var r = t(0)
  }, function (A, e) {
    A.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAABvElEQVRIS+XWvUrDUBQH8P+51qZ+0C6u4uwoRQenCsXG78kX8AHEVsFRxw7aFDdBH0A3QUojIk6KID6BoELB3YKStM2RoNXaJjVpbxUxU4Z78jvn3nPvDeGXHvolF38HntrhMMrlESZvSTNXCnoqdFs/s74qTmSMBSIcAFB8LREjl08pM7UxvmBVM44AzPtC3wczKKongzfVWF9wQjPSBKy3AgNiIp/sPm8JXjzkrmLBWAZRxAlnRpQIs86JtQE3q1TNmqNgPgUQ/jHYRpn5jIB+9+QkV+yCGgBfAhT7TEQi7I4KFbBsdEM63Ay1u1fVjE3p8HeoXaV02AsqHfaKSoUnt0vjJCy9bssYgFBrT6RqM0mZahsVZJ2C0FOzT11Re8ykZi4J8L79zkAJCA7pSXr0fGQ6oowXkJh2qrT6Yft4fSoYWYAGWfDeyUro2PPt5IZaLOInq90XrV0Wb1Gut1MnUVe406gj/BNoAxzb4gFFmPdE6PtYP8aLjDWt74cva5zImGNEfNVptKHiuV3uNZ/NawKGwShaLNR2u9et8xu6Op7mSEApj4hK4C63Rg/tbJlmsb5+9mQm8f/gVxWf/x9Ysb+OAAAAAElFTkSuQmCC"
  }, function (A, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function (A) {
      var e = document.createElement("span");
      e.id = "kssbackeBT", e.className = "kssToolbarItemBT", e.title = "后退";
      var t = document.createElement("img");

      function a() {
        A.isEdit = !1, A.currentToolType = null, A.rectangleCanvas.removeEventListener("mousedown", A.toolmousedown), document.removeEventListener("mousemove", A.toolmousemove), document.removeEventListener("mouseup", A.toolmouseup), (0, o.default)(null)
      }
      return t.className = "kssToolbarItemImg", t.src = n.default, A.backBT = e, e.appendChild(t), e.addEventListener("click", function () {
        A.snapshootList.length > 1 ? (2 === A.snapshootList.length && ((0, s.default)(A, "canvasLayer"), a()), A.snapshootList.pop()) : 1 === A.snapshootList.length && ((0, s.default)(A, "canvasLayer"), a()), A.currentImgDom.src = A.snapshootList[A.snapshootList.length - 1], setTimeout(function () {
          (0, r.default)(A)
        }, 0)
      }), e
    };
    t(0);
    var r = a(t(5)),
      n = a(t(26)),
      o = a(t(1)),
      s = a(t(2));

    function a(A) {
      return A && A.__esModule ? A : {
        default: A
      }
    }
  }, function (A, e) {
    A.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAEfElEQVRIS8WWa4hUZRjH//8zXtKFFArybs05wUISUULqB9E9R7vQBT8YIblSGVgWVu6MVpSTZLt7xkzQbhSpGXSTEhGzPGeWgqhPiYZCcs7squgSUX0xNzfn/GNGZ52ZHecSgufT8M7zPL/neZ/L+xBX6eNV4qJxsMAO35plEAsFTQEwieB5Sf0g+6Tcvo1O7+FGA6kLfmafNfqa0UoAXEXg+pqGhayMaEN6fnYbCNWSrQlOeuZ8EdsITocUgfQjRtuRM07njRrUeADTQMyQMI/kzRdhhxhFS7sXZH+5HPyy4KRnrgbggjQA7DmvKLHJyR6rFUWyJz5TkbGVwJ2CBiA8mnbCz6rpVAUnPOtVEq9I+JsGlrhtwZ5Gc5eXS3hmkkBn3ulIWLrRCT6u1B8G7vCsRwxiJ6SzNKI53W29h5qBFmUT/k0LgdheSPkbuy/thPtL7ZSB1xyIj4tonCBxLZRb7Dq9uyqhiz9H7Mbr4g+l7ewn9RxKZMx2ijsknWyZGFqpWzBY1CkDJ33zNYAvSdibdoL7q0PNLwguGqHchNed3t/qwZOe9SOIWUD0nGtnNw8HC0z61u+CxsdiaO2aHwalRi9EegGaPx8c+e+kzXOP99cFZ+I2ZHiAfnXtsHUYeI1vzhH4g4Dv0nYwrxa0GXBeNumZp0FOFGCl7SDMnw1dddK31gFIUVjd7QSbiuDKSEscOiOoD2IfoKMRuOMNJzha7QaSvrkF4NNA9KRrZ98tB3vmdpDLJN1TrMAa0GH2BQnCzhH45/lO59QfpQJJz3oKxFtQ1Ok62RfLwAnPPEDSIXO3FVso4ZvvE1xeL4+l/ws4FdPg3C7nRLZ43uGbiwzwSwDbXDt4rCpYwB1pO/i5kBs/vgIw3mkGXJAVDrpOcPsQOGM9aAi7BX2QtsMnKsE7SLZDWuQ64e6iUtKPPwsYbzYLF3J3pe3eb0sDkLA+7QT5WiorrhSAdQK60nbwQlmO/ge8FJLwzc0EV4nR4+m27Idl4GI7QTrhOuH0yggrIx877mxLaubps6kejDhjTJ+K3MhbGWkFybsv6Gqna4ft+V8J3+wnOAG5c5PdhScLL9ulyVUYIOZfIMdFkL3RDjO14EVwpUyHb7ZR/ArQ12knfDh5aYAcce1wRlG+fGRmzJchrofwk+sEs6vlNeFbayltGBjk2C33Bueq9m2PNSWWGxjotE/9mchYRwm0QljpOsHbVcH5bWPMKB0DOa1ykJQC1nrT4qXtcrnCS2TiWyljZd1HIm+gw7NmG8T3gmKGsKTbCT9ttqILeR1605Wr+ywOtVDGTEB0C9OIWl6sxEYcyD+tMoyPADyQl294ERiCe+ZqAd0kYxB2iVhbHPDVHOj45oYWxlqWg0wRHC/hHKBlTa0+JfCyZU/gYRA9FAIZUR8jjhIxFcJMEIsJjrnYSkcEthcnYDVHm1hvsbLQizU+QccBdbe0Zd9LEVEt2brgIeWLCz0RLQA5lcBkgech9dNgn5HD/q4FwcFG6qB8gDSqcYXkGo/4CgGLZv4D60EPPWzjB68AAAAASUVORK5CYII="
  }, function (A, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function (A) {
      var e = document.createElement("span");
      e.id = "kssDrawLineBT", e.className = "kssToolbarItemBT", e.title = "画刷工具";
      var t = document.createElement("img");
      return t.className = "kssToolbarItemImg", t.src = o.default, A.drawLineBT = e, e.appendChild(t), e.addEventListener("click", function () {
        A.isEdit = !0;
        var t = document.getElementById("kssSetLineWidth");

        function o(e) {
          if (2 !== e.button) {
            var t = A.rectangleCanvas.getContext("2d");
            t.beginPath(), t.moveTo(e.clientX - A.startX, e.clientY - A.startY), t.strokeStyle = A.toolbarColor, document.addEventListener("mousemove", r), document.addEventListener("mouseup", o), A.toolmousemove = r, A.toolmouseup = o
          }

          function r(e) {
            t.lineWidth = A.toolbarLineWidth, t.lineTo(e.clientX - A.startX, e.clientY - A.startY), t.stroke()
          }

          function o(e) {
            t.closePath(), document.removeEventListener("mousemove", r), document.removeEventListener("mouseup", o), (0, n.default)(A)
          }
        }
        document.documentElement.clientHeight - A.startY - A.height - A.toolbarMarginTop - A.toolbarHeight < 0 ? (0, r.css)(t, {
          top: "30px"
        }) : (0, r.css)(t, {
          top: "-40px"
        }), t.style.display = "block", t.focus(), "drawLine" !== A.currentToolType && (A.currentToolType = "drawLine", (0, s.default)(e), (0, a.default)(A, "canvasLayer"), A.toolmousedown && (A.rectangleCanvas.removeEventListener("mousedown", A.toolmousedown), document.removeEventListener("mousemove", A.toolmousemove), document.removeEventListener("mouseup", A.toolmouseup)), A.rectangleCanvas.addEventListener("mousedown", o), A.toolmousedown = o)
      }), e
    };
    var r = t(0),
      n = i(t(3)),
      o = i(t(28)),
      s = i(t(1)),
      a = i(t(2));

    function i(A) {
      return A && A.__esModule ? A : {
        default: A
      }
    }
  }, function (A, e) {
    A.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAACM0lEQVRIS+3UO2hTYRgG4PftyR+Q9CqCEkgGJc2pRWgRBCkIVtChIDrYQR1EHFx0cnJROqh066IEFHRz00UXg9R08AJaXDRBRcwpQXBw0dj85/JJYkOjPWlzOTFLM2XI+Z687/efn+jSh11ysQn/t+YDr/rDVvS7veohwIMAchA9aVoo/JsoUHgFfQZwrAqJ4PqIpS93DPZDK5gn58wl+05H4C9xDP2CelqbdAV6nMzrowTcwOEyWhS1QHK0driIPDEte4qA7Xdi29pxXRR4ZOb18Xpo+Y+0DG+AHiPgrPdutgTnotjmGWp+bb14YFp6eiO0pcR/DlL4OYDk3zutoCf8DlIgO/48iMFSn8qA3LP6rsp907JPN4o2lfjrdkS+h9XtkItZV9sfsUWlQe4TqaAnCUgz921DOy6nXO5XaYJ7ReQnKUcinvOmSHV22LJvNouum7hSaa+6CmJCgDGSodVEUjIc7E8U7MVmUtb+1jexAKFsTC0S2CGQGxC8JnumQFwqPywiLwZc+1C0gGKg8PuYOgMiFQLHE3n9rjo8G1Ovyt/dZXty9Bt+tIr6Vv1pCAO6L/wWwL2RvL5SOzwbV2l6kkkuOTPtoGvgbDw0AeEtkBEjr3cngFKlWoC5uLoAcI7iHUhazkLAcHgaIncBvCSYgrgloTEO4hSAnRBJmZZ9vl3Ut+psFEkY6qKAhwnZBUJDON8D79qw5WSCQJu6QIICq3MaukCCRjcTd6LRujO7tuPfh7/TH020z8AAAAAASUVORK5CYII="
  }, function (A, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function (A) {
      var e = document.createElement("span");
      e.id = "kssRectBT", e.className = "kssToolbarItemBT", e.title = "方形工具";
      var t = document.createElement("img");
      return t.className = "kssToolbarItemImg", t.src = o.default, A.rectBT = e, e.appendChild(t), e.addEventListener("click", function () {
        function t(e) {
          if (2 !== e.button) {
            var t = e.clientX - A.startX,
              o = e.clientY - A.startY;
            document.addEventListener("mousemove", s), document.addEventListener("mouseup", a), A.toolmousemove = s, A.toolmouseup = a
          }

          function s(e) {
            (0, r.default)(A);
            var n = A.rectangleCanvas.getContext("2d"),
              s = e.clientX,
              a = e.clientY;
            s < A.startX ? s = A.startX : s > A.startX + A.width && (s = A.startX + A.width), s -= A.startX, a < A.startY ? a = A.startY : a > A.startY + A.height && (a = A.startY + A.height), a -= A.startY, n.beginPath(), n.moveTo(Math.min(t, s), Math.min(o, a)), n.lineTo(Math.max(t, s), Math.min(o, a)), n.lineTo(Math.max(t, s), Math.max(o, a)), n.lineTo(Math.min(t, s), Math.max(o, a)), n.lineTo(Math.min(t, s), Math.min(o, a)), n.lineWidth = 1, n.strokeStyle = A.toolbarColor, n.stroke(), n.closePath()
          }

          function a(e) {
            document.removeEventListener("mousemove", s), document.removeEventListener("mouseup", a), (0, n.default)(A)
          }
        }
        A.isEdit = !0, "rect" !== A.currentToolType && (A.currentToolType = "rect", (0, s.default)(e), (0, a.default)(A, "canvasLayer"), A.toolmousedown && (A.rectangleCanvas.removeEventListener("mousedown", A.toolmousedown), document.removeEventListener("mousemove", A.toolmousemove), document.removeEventListener("mouseup", A.toolmouseup)), A.rectangleCanvas.addEventListener("mousedown", t), A.toolmousedown = t)
      }), e
    };
    t(0);
    var r = i(t(5)),
      n = i(t(3)),
      o = i(t(30)),
      s = i(t(1)),
      a = i(t(2));

    function i(A) {
      return A && A.__esModule ? A : {
        default: A
      }
    }
  }, function (A, e) {
    A.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAA5klEQVRIS2NkGCDAOED2MoxaDA75ouWfUhkYGKWpEQ2MjIzveW9wT25oYPyHbB5GUBct/5TEyMA4lxqWIsz4X90byddGwOLPDYwMDPX/GRg2MjAwXKDEAYz/GVQYGBmi//9nmNkXxZtBpMWMiX2RPAsosbhw2RcPJsb/20ctBoUilsQFi+PRoCY9mY0mrtF8jJJqipaPZifSsxFMx2h2GvTZqZOJ4f8O8mOYgeH///9mDIyMnUTVx8XLPpWBFFNiIaZeIpo+oav+M8v9+5rz//9/QWpYTnRjjxqWEWPGaIOemFCiihoAPCwYLhqAkIYAAAAASUVORK5CYII="
  }, function (A, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function (A) {
      var e = document.createElement("span");
      e.id = "kssArrowBT", e.className = "kssToolbarItemBT", e.title = "椭圆工具";
      var t = document.createElement("img");
      return t.className = "kssToolbarItemImg", t.src = o.default, A.ellipseBT = e, e.appendChild(t), e.addEventListener("click", function () {
        function t(e) {
          if (2 !== e.button) {
            var t = e.clientX - A.startX,
              o = e.clientY - A.startY;
            document.addEventListener("mousemove", s), document.addEventListener("mouseup", a), A.toolmousemove = s, A.toolmouseup = a
          }

          function s(e) {
            (0, r.default)(A);
            var n = A.rectangleCanvas.getContext("2d"),
              s = e.clientX,
              a = e.clientY;
            s < A.startX ? s = A.startX : s > A.startX + A.width && (s = A.startX + A.width), s -= A.startX, a < A.startY ? a = A.startY : a > A.startY + A.height && (a = A.startY + A.height), a -= A.startY;
            var i = (t + s) / 2,
              B = (o + a) / 2,
              l = Math.abs(s - t) / 2,
              c = Math.abs(a - o) / 2,
              u = .5522848,
              d = l * u,
              w = c * u;
            n.beginPath(), n.lineWidth = 1, n.strokeStyle = A.toolbarColor, n.moveTo(i - l, B), n.bezierCurveTo(i - l, B - w, i - d, B - c, i, B - c), n.bezierCurveTo(i + d, B - c, i + l, B - w, i + l, B), n.bezierCurveTo(i + l, B + w, i + d, B + c, i, B + c), n.bezierCurveTo(i - d, B + c, i - l, B + w, i - l, B), n.stroke(), n.closePath()
          }

          function a(e) {
            document.removeEventListener("mousemove", s), document.removeEventListener("mouseup", a), (0, n.default)(A)
          }
        }
        A.isEdit = !0, "ellipse" !== A.currentToolType && (A.currentToolType = "ellipse", (0, s.default)(e), (0, a.default)(A, "canvasLayer"), A.toolmousedown && (A.rectangleCanvas.removeEventListener("mousedown", A.toolmousedown), document.removeEventListener("mousemove", A.toolmousemove), document.removeEventListener("mouseup", A.toolmouseup)), A.rectangleCanvas.addEventListener("mousedown", t), A.toolmousedown = t)
      }), e
    };
    t(0);
    var r = i(t(5)),
      n = i(t(3)),
      o = i(t(32)),
      s = i(t(1)),
      a = i(t(2));

    function i(A) {
      return A && A.__esModule ? A : {
        default: A
      }
    }
  }, function (A, e) {
    A.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAADQElEQVRIS9WWT2gUZxjGn3dmIsbsrOhF8E+1hXpKQKtUD56sxaZFPKjb3Un00IqFQquZXXMUr0p2llAoVApVSWbWzUWkBGlpexQV06LisbZWhV4s3dl1Q3dmHhllIerszmQ1hM5xvvd9ft/7fR/v+wgW6ZNF4uL/AR6pcKXi1zIgBiBcT8AXyn0CN6mlpkoZeZT0BBNVPOLUtyr0T0BkEIAG8F9Q7lIgAm4AZDkAj+A0oJ60cn2/xm2gI7hwnn3sqZ0FsB/AbZDjAZf8XBpa+vtc4ZHJ2bdE+e89gXwJoJ/A1Kya+uTrjNTabaAt+Gil8YbmNX8AsJqCvJXVv4UIO1ZCill2DwtRBOSBp2m7xzO996JyIsFfTDDdo7o3AGkqqvbRWKb3btzRzV0vVBpv0vOmKdSavr7lq2GpvpgfCc7b7o8UbPQp744bqb/nA23FHnMaG1Q2bwJytWjo78eCC3Z9DxFcDDTZVMqkbnUDbeUUbDdDwQWKssfK9n0/V+ulik3HnRHwdjGXPvQq0Fau6VSvA6JaOf2dtuBRp77aR/AgCNRtpaFl114HOF+uD4LBtOqr604PL7vf0nyuYtN2PxPhqWJWXxH7ghPu6kCF6jrPfQTIqGXo30SC83Z1jCKbrJy+K6FuorC87f5E4YyVSx+PrthxJ4Vg0dCHEykmDDIjdJ876rztToRaCwEGGVhG+mCbO66GHWezZeg7ExaTKCzvuL+AvFE00oXoOy67RxBw7J6mr5jKiJ9INS6IlHzZ/Qcio8WsfiYSPDrxeK2v+n8FlMGSkbocp5lk3Sw/3i70r6hQ1pzO9T2MBIc/TSfs0WxYufSOJMJxMaZdPQeRfiunb+nYuZ62TAkuCfHxmKFX4oQ7rY9UagOKx9+oKHtjW2Yo9GxIcLsEPf3Fod4/u4EftWurNOEMiDuJhkQIaY1FIXzRegbnOxaPT86+HUjz0rzH4tOqJxvrId5lgGsoOGZl9e9i22j4gh33UwBWaARA7YN2J9bR+nxeYWqpVzsrgn3ztD4XZtXU4a6sz9x7NZ36ZsA/KZAPW2aPkD/CmAUxey8+qtDeilc7AMFACFxwe9vNq47LSeSr40S6WV808BNkBHIuAp7D7gAAAABJRU5ErkJggg=="
  }, function (A, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function (A) {
      var e = document.createElement("span");
      e.id = "kssColorBT", e.className = "kssToolbarItemBT", e.title = "颜色工具";
      var t = document.createElement("img");
      return t.className = "kssToolbarItemImg", t.src = n.default, A.colorBT = e, e.appendChild(t), e.addEventListener("click", function () {
        var e = document.documentElement.clientHeight,
          t = document.getElementById("kssColorBoard");
        e - A.startY - A.height - A.toolbarMarginTop - A.toolbarHeight < 0 ? (0, r.css)(t, {
          top: "30px"
        }) : (0, r.css)(t, {
          top: "-40px"
        }), t.style.display = "block", t.focus()
      }), e
    };
    var r = t(0),
      n = function (A) {
        return A && A.__esModule ? A : {
          default: A
        }
      }(t(34))
  }, function (A, e) {
    A.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAEUElEQVRIS+2VXWwUZRSG3/ebbUuhf7Oh1QtR2+4umAbTBONP/Enw5wLxQhLDBRilQFi7w4+aYDDRpIlCg6ka2842jVAMMQRMBLzQVKMJJMRIVBLQAO5sqVgUhWRmtxCK7c4cM1vAtdLdLSb0xrmazHfmPOd9v3O+j5imh9PExf/gm+b8jVndJqqi1pobULzFr5Siucy4g/b68JliKy8aHOy2mkRxLSHNEJkP4oyAv4+DRBGcC0i5gN/DVeuddY0/5CuiMLhNAnpd8hUINpLodJUc0kZ52F4fHs5NrPcO3H6JmDFzzF0IYgsEW53z4Q600bteAXnB1fFEgwL2Ahhmhst8K3XTWp5NDAx6Glalo+GBoJnYAXKFiGQAbhDRPiUzH5I4YMcir08N7CutTR4RyPaUEXnv6s9B0xoCcVvWYGCrU1H5hn7xQpqAlv0mOOIY4QVV24aCgdGRHz0VWJR6oeHoRPikivW4tRki9Y7LlmqFpvSswHG01F/WzcRBko+MJ2LUPte4Ta+z/iA4+wr4E8cIP+2/6/HkIor3tl071oylTaO58OuCq+PJBZrIfrhogiYfgFwiIp85RmRxRU+yrsSTNwEec2obe7CUbo2ZaCbYDkrKQ1ksHbvDuQrR44lBIVtSreEDBcF63NopRJ8fHIwnDgO8VyBHnVikudhx+Rts7QO5x2kN7S4IDpqJL20j8njWrq6B+dS8JzylfXV1r6q7fq5X2ugmt7T81eHVc+x8xehmcisgpx0jHM8PfmeoXC8b6fcUOpXwWVfUlmGj8dvcn6q6E/cFFL8B5NeMaEsmrv9jzExrjwdsTxvhL/KCq3uSjypPngcwh8RCgXQ4scjGiaqCZmKvv/cQOWkbkbsmUx00E8cvB0ofuxS982xesN498CSUtxxkHJ68hoCKOtHGXyYmruz9abbmqnYFrPaIVanWcN+/4L1Somess44RyXZ8fsXxRIMmPGgHQg2IcqxQM+k9Vis8dAvYkjJCO3Pja3qslUow346FXyoIzjaUae0nxHOpNqe1xmOFCsjCBaYIV1yDbz9ZGbysfWfPcO/BqnkXigKj0yqrCcgyCp4BcT+gPnJioVa0iaqpGzAo8hDBHbYR6r82NlfgFEZtI/R+jWl1gDydioW6ruda4UvCPFehM93vUntZEzcC4KnREm1D6Vjma6e8pMk/zXLhFMRFuE4owdTs0Gb/gLkx8Lj17STOC3iCIitHFY1SkUN2eeDuXLAPqIlbLyrgXR/uGKHuyXqksOLsmXvqYYj78Z9Qi0vpPUjBA1Tos1vDn/uJZ5mDt5Yws4bAcxSu9SjzfDiEG20j1HHDirNKzMQGEm8BOAEwNZ5MdABVEA6S3G1L1S4YdRdzlU8GL0rxtYp7f5tZlRlpUsqbBfFvQBlKxyKnJrNTN61NJNohXOM3XN45LjS3U12/4tR5JxbZdVPB/6m5pqqymPip7XExGYuMmTbwX5NFzi48sixUAAAAAElFTkSuQmCC"
  }, function (A, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function (A) {
      var e = document.createElement("span");
      e.id = "kssTextBT", e.className = "kssToolbarItemBT", e.title = "字体工具";
      var t = document.createElement("img");
      return t.className = "kssToolbarItemImg", t.src = a.default, A.textBT = e, e.appendChild(t), e.addEventListener("click", function () {
        if (A.isEdit = !0, "text" !== A.currentToolType) {
          A.currentToolType = "text", (0, o.default)(e), (0, s.default)(A, "textLayer"), A.toolmousedown && (A.rectangleCanvas.removeEventListener("mousedown", A.toolmousedown), document.removeEventListener("mousemove", A.toolmousemove), document.removeEventListener("mouseup", A.toolmouseup));
          var t = !1;
          A.textClickEvent || (A.textClickEvent = function (e) {
            if (!t) {
              var o = e.clientX - A.startX,
                s = e.clientY - A.startY,
                a = document.createElement("div");
              a.className = "kssTextarea", a.contentEditable = !0, a.tabIndex = -1;
              var i = 0,
                B = 0;
              A.width - o < 60 ? i = 60 - (A.width - o) : (0, r.css)(a, {
                "min-width": "60px"
              }), A.height - s < 36 ? B = 36 - (A.height - s) : (0, r.css)(a, {
                "min-height": "36px"
              }), (0, r.css)(a, {
                position: "absolute",
                top: s - B + "px",
                left: o - i + "px",
                "max-width": A.width - o + "px",
                "max-height": A.height - s + "px"
              }), A.kssTextLayer.appendChild(a), a.addEventListener("focus", function () {
                t = !0, (0, r.css)(a, {
                  color: A.toolbarColor
                })
              }), a.addEventListener("blur", function (e) {
                if (t = !1, "" !== a.innerHTML) {
                  var l = A.rectangleCanvas.getContext("2d");
                  l.font = "16px 宋体";
                  var c = [];
                  a.innerHTML.split("<div>").forEach(function (e, t) {
                    var r = e;
                    t > 0 && (r = e.replace("</div>", "")), r = r.replace(/&nbsp;|\<br\>/g, "  ");
                    var n = A.width - o > 60 ? A.width - o : 60,
                      s = 0,
                      a = "";
                    Array.prototype.forEach.call(r, function (A, e) {
                      (s += l.measureText(A).width) >= n ? (s = l.measureText(A).width, c.push(a), a = A) : a += A
                    }), c.push(a)
                  }), l.fillStyle = A.toolbarColor, c.forEach(function (A, e) {
                    l.fillText(A, o - i, s - B + 15 + 18 * e)
                  }), (0, n.default)(A), (0, r.remove)(a)
                } else(0, r.remove)(a)
              }), setTimeout(function () {
                a.focus()
              }, 0)
            }
          }), A.kssTextLayer.removeEventListener("mousedown", A.textClickEvent), A.kssTextLayer.addEventListener("mousedown", A.textClickEvent)
        }
      }), e
    };
    var r = t(0),
      n = i(t(3)),
      o = i(t(1)),
      s = i(t(2)),
      a = i(t(36));

    function i(A) {
      return A && A.__esModule ? A : {
        default: A
      }
    }
  }, function (A, e) {
    A.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAApUlEQVRIS2NkGCDAOED2MoxaTLeQxxnUHn0/DjAwMtpT5pL/B3YUcjhiM4PWFu/bUcjhTJrF/b8SGBj+K2D18X8GBQZGhnio3AIGBoaH2NT9Z2S8t7OAbRFJFuMLYvfe346MTP/2gdQw/mdy2F7EepDUKCErO41aPBrUxCS00cRFTCgxjGan0exETEIZzU7EhNIIzE5EBQsBRWQlrlGLyQmBAQtqAM8ijR/H6NfmAAAAAElFTkSuQmCC"
  }, function (A, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function (A) {
      document.documentElement.clientHeight;
      var e = document.createElement("span");
      return e.id = "kssToolbarMiddleArea", e.appendChild((0, r.default)(A)), e.appendChild((0, n.default)(A)), e
    };
    t(0);
    var r = o(t(38)),
      n = o(t(39));

    function o(A) {
      return A && A.__esModule ? A : {
        default: A
      }
    }
  }, function (A, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function (A) {
      var e = document.createElement("span");
      e.id = "kssColorBoard", e.title = "颜色板", e.tabIndex = "-1";
      var t = document.createElement("span");
      t.id = "kssCurrentColor", (0, r.css)(t, {
        background: A.toolbarColor
      }), e.appendChild(t);
      var o = document.createElement("div");
      return o.id = "kssColorItemWrapper", n.forEach(function (e, s) {
        var a = document.createElement("span");
        a.className = "kssColorItem kss" + e, a.dataset.color = e, (0, r.css)(a, {
          background: e
        }), s <= n.length / 2 - 1 && (0, r.css)(a, {
          "margin-bottom": "2px"
        }), a.addEventListener("click", function (e) {
          var r = e.currentTarget.dataset.color;
          A.toolbarColor = r, t.style.background = r
        }), o.appendChild(a)
      }), e.appendChild(o), e.addEventListener("focus", function (A) {
        A.currentTarget.style.display = "block"
      }), e.addEventListener("blur", function (A) {
        A.currentTarget.style.display = "none"
      }), e
    };
    var r = t(0),
      n = ["#000", "#808080", "#800000", "#f7883a", "#308430", "#385ad3", "#800080", "#009999", "#fff", "#c0c0c0", "#fb3838", "#ffff00", "#99cc00", "#3894e4", "#f31af3", "#16dcdc"]
  }, function (A, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function (A) {
      var e = document.createElement("span");
      e.id = "kssSetLineWidth", e.tabIndex = "-1";
      var t = document.createElement("div");
      t.id = "kssNumInputWrapper";
      var n = document.createElement("input");
      n.id = "kssNumInput", n.value = A.toolbarLineWidth, t.appendChild(n), n.addEventListener("input", function (e) {
        var t = parseInt(e.currentTarget.value);
        t > 20 ? t = 20 : t <= 0 && (t = 1), n.value = t, A.toolbarLineWidth = t, (0, r.css)(B, {
          width: A.toolbarLineWidth + "px"
        })
      });
      var o = document.createElement("span");
      o.id = "kssArrowNumWrapper";
      var s = document.createElement("div");
      s.id = "kssUpNum", s.innerHTML = "▲";
      var a = document.createElement("div");
      a.id = "kssDownNum", a.innerHTML = "▼", s.addEventListener("click", function () {
        n.value < 20 && (n.value = parseInt(n.value) + 1, A.toolbarLineWidth = n.value, (0, r.css)(B, {
          width: A.toolbarLineWidth + "px"
        }))
      }), a.addEventListener("click", function () {
        n.value > 1 && (n.value = parseInt(n.value) - 1, A.toolbarLineWidth = n.value, (0, r.css)(B, {
          width: A.toolbarLineWidth + "px"
        }))
      }), o.appendChild(s), o.appendChild(a), t.appendChild(o), e.appendChild(t);
      var i = document.createElement("div");
      i.id = "kssShowLineWidthWrapper";
      var B = document.createElement("span");
      return B.id = "kssShowLineWidth", (0, r.css)(B, {
        width: A.toolbarLineWidth + "px",
        background: "#fb3838"
      }), i.appendChild(B), e.appendChild(i), e.addEventListener("focus", function (A) {
        A.currentTarget.style.display = "block"
      }), e.addEventListener("blur", function () {
        setTimeout(function () {
          n !== document.activeElement && (e.style.display = "none")
        }, 0)
      }), n.addEventListener("blur", function () {
        setTimeout(function () {
          e !== document.activeElement && (e.style.display = "none")
        }, 0)
      }), e
    };
    var r = t(0)
  }, function (A, e, t) {
    var r = t(41);
    "string" == typeof r && (r = [
      [A.i, r, ""]
    ]);
    var n = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    t(44)(r, n);
    r.locals && (A.exports = r.locals)
  }, function (A, e, t) {
    var r = t(42);
    (A.exports = t(43)(!1)).push([A.i, '@charset "UTF-8";\n.kssBody {\n  cursor: url(' + r(t(10)) + "), auto;\n  user-select: none; }\n  .kssBody #kss {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 10000; }\n  .kssBody #kssScreenShotWrapper {\n    position: fixed;\n    background: transparent;\n    box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.3);\n    z-index: 10001; }\n    .kssBody #kssScreenShotWrapper #kssTextLayer {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      z-index: 98;\n      cursor: crosshair; }\n      .kssBody #kssScreenShotWrapper #kssTextLayer .kssTextarea {\n        background: transparent;\n        resize: none;\n        min-width: 60px;\n        min-height: 36px;\n        box-sizing: border-box;\n        border-color: transparent;\n        overflow: hidden;\n        font-family: 宋体; }\n        .kssBody #kssScreenShotWrapper #kssTextLayer .kssTextarea:hover {\n          cursor: text;\n          outline: #488ff9 solid 1px; }\n    .kssBody #kssScreenShotWrapper #kssRectangleCanvas {\n      height: 100%;\n      width: 100%;\n      top: 0;\n      left: 0;\n      cursor: move;\n      position: absolute;\n      z-index: 99; }\n    .kssBody #kssScreenShotWrapper .kssDot, .kssBody #kssScreenShotWrapper .kssLine {\n      position: absolute;\n      background: #488ff9;\n      z-index: 100; }\n    .kssBody #kssScreenShotWrapper #kssCurrentImgDom {\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      top: 0;\n      left: 0;\n      display: none; }\n    .kssBody #kssScreenShotWrapper #kssToolbar {\n      position: absolute;\n      right: 0;\n      background: #f1f1f1;\n      font-size: 14px;\n      border: 1px solid #dedede;\n      border-radius: 4px;\n      box-sizing: border-box;\n      z-index: 100; }\n      .kssBody #kssScreenShotWrapper #kssToolbar .kssToolbarItemBT {\n        display: inline-block;\n        width: 30px;\n        height: 28px;\n        text-align: center;\n        float: right;\n        cursor: pointer; }\n        .kssBody #kssScreenShotWrapper #kssToolbar .kssToolbarItemBT:hover {\n          background: #dedede; }\n        .kssBody #kssScreenShotWrapper #kssToolbar .kssToolbarItemBT .kssToolbarItemImg {\n          width: 20px;\n          height: 20px;\n          margin-top: 5px; }\n      .kssBody #kssScreenShotWrapper #kssToolbar .kssToolbarActiveItemBT {\n        background: #dedede; }\n      .kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssColorBoard {\n        position: absolute;\n        width: 180px;\n        height: 40px;\n        right: 0;\n        background: #fff;\n        border: 1px solid #bbb;\n        border-radius: 4px;\n        display: none;\n        outline: none;\n        cursor: default;\n        z-index: 100; }\n        .kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssColorBoard #kssCurrentColor {\n          display: inline-block;\n          width: 30px;\n          height: 30px;\n          margin: 5px 8px 0 8px;\n          box-sizing: border-box;\n          border: 1px solid #333; }\n        .kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssColorBoard #kssColorItemWrapper {\n          display: inline-block;\n          vertical-align: top;\n          width: 130px;\n          margin-top: 5px;\n          font-size: 0; }\n          .kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssColorBoard #kssColorItemWrapper .kssColorItem {\n            display: inline-block;\n            width: 14px;\n            height: 14px;\n            margin-right: 2px;\n            box-sizing: border-box;\n            border: 1px solid #333;\n            cursor: pointer; }\n      .kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth {\n        position: absolute;\n        width: 155px;\n        height: 40px;\n        right: 0;\n        background: #fff;\n        border: 1px solid #bbb;\n        border-radius: 4px;\n        display: none;\n        outline: none;\n        cursor: default;\n        z-index: 100; }\n        .kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssNumInputWrapper {\n          margin: 7px 0 0 8px;\n          position: relative;\n          display: inline-block; }\n          .kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssNumInputWrapper #kssNumInput {\n            width: 40px;\n            height: 24px;\n            border: 1px solid #bbb;\n            border-radius: 4px;\n            padding: 0 15px 0 8px; }\n          .kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssNumInputWrapper #kssArrowNumWrapper {\n            position: absolute;\n            right: 0;\n            top: 1px;\n            border-radius: 0 4px 4px 0;\n            font-size: 0;\n            line-height: 12px; }\n            .kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssNumInputWrapper #kssArrowNumWrapper #kssUpNum, .kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssNumInputWrapper #kssArrowNumWrapper #kssDownNum {\n              height: 12px;\n              font-size: 12px;\n              cursor: pointer; }\n              .kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssNumInputWrapper #kssArrowNumWrapper #kssUpNum:hover, .kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssNumInputWrapper #kssArrowNumWrapper #kssDownNum:hover {\n                background: #dedede; }\n        .kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssShowLineWidthWrapper {\n          display: inline-block;\n          height: 40px;\n          line-height: 40px;\n          vertical-align: top;\n          width: 80px;\n          text-align: center; }\n          .kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssShowLineWidthWrapper #kssShowLineWidth {\n            height: 20px;\n            display: inline-block;\n            vertical-align: middle; }\n", ""])
  }, function (A, e) {
    A.exports = function (A) {
      return "string" != typeof A ? A : (/^['"].*['"]$/.test(A) && (A = A.slice(1, -1)), /["'() \t\n]/.test(A) ? '"' + A.replace(/"/g, '\\"').replace(/\n/g, "\\n") + '"' : A)
    }
  }, function (A, e) {
    A.exports = function (A) {
      var e = [];
      return e.toString = function () {
        return this.map(function (e) {
          var t = function (A, e) {
            var t = A[1] || "",
              r = A[3];
            if (!r) return t;
            if (e && "function" == typeof btoa) {
              var n = function (A) {
                  return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(A)))) + " */"
                }(r),
                o = r.sources.map(function (A) {
                  return "/*# sourceURL=" + r.sourceRoot + A + " */"
                });
              return [t].concat(o).concat([n]).join("\n")
            }
            return [t].join("\n")
          }(e, A);
          return e[2] ? "@media " + e[2] + "{" + t + "}" : t
        }).join("")
      }, e.i = function (A, t) {
        "string" == typeof A && (A = [
          [null, A, ""]
        ]);
        for (var r = {}, n = 0; n < this.length; n++) {
          var o = this[n][0];
          "number" == typeof o && (r[o] = !0)
        }
        for (n = 0; n < A.length; n++) {
          var s = A[n];
          "number" == typeof s[0] && r[s[0]] || (t && !s[2] ? s[2] = t : t && (s[2] = "(" + s[2] + ") and (" + t + ")"), e.push(s))
        }
      }, e
    }
  }, function (A, e, t) {
    var r = {},
      n = function (A) {
        var e;
        return function () {
          return void 0 === e && (e = A.apply(this, arguments)), e
        }
      }(function () {
        return window && document && document.all && !window.atob
      }),
      o = function (A) {
        var e = {};
        return function (A) {
          if ("function" == typeof A) return A();
          if (void 0 === e[A]) {
            var t = function (A) {
              return document.querySelector(A)
            }.call(this, A);
            if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
              t = t.contentDocument.head
            } catch (A) {
              t = null
            }
            e[A] = t
          }
          return e[A]
        }
      }(),
      s = null,
      a = 0,
      i = [],
      B = t(45);

    function l(A, e) {
      for (var t = 0; t < A.length; t++) {
        var n = A[t],
          o = r[n.id];
        if (o) {
          o.refs++;
          for (var s = 0; s < o.parts.length; s++) o.parts[s](n.parts[s]);
          for (; s < n.parts.length; s++) o.parts.push(g(n.parts[s], e))
        } else {
          var a = [];
          for (s = 0; s < n.parts.length; s++) a.push(g(n.parts[s], e));
          r[n.id] = {
            id: n.id,
            refs: 1,
            parts: a
          }
        }
      }
    }

    function c(A, e) {
      for (var t = [], r = {}, n = 0; n < A.length; n++) {
        var o = A[n],
          s = e.base ? o[0] + e.base : o[0],
          a = {
            css: o[1],
            media: o[2],
            sourceMap: o[3]
          };
        r[s] ? r[s].parts.push(a) : t.push(r[s] = {
          id: s,
          parts: [a]
        })
      }
      return t
    }

    function u(A, e) {
      var t = o(A.insertInto);
      if (!t) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
      var r = i[i.length - 1];
      if ("top" === A.insertAt) r ? r.nextSibling ? t.insertBefore(e, r.nextSibling) : t.appendChild(e) : t.insertBefore(e, t.firstChild), i.push(e);
      else if ("bottom" === A.insertAt) t.appendChild(e);
      else {
        if ("object" != typeof A.insertAt || !A.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
        var n = o(A.insertInto + " " + A.insertAt.before);
        t.insertBefore(e, n)
      }
    }

    function d(A) {
      if (null === A.parentNode) return !1;
      A.parentNode.removeChild(A);
      var e = i.indexOf(A);
      e >= 0 && i.splice(e, 1)
    }

    function w(A) {
      var e = document.createElement("style");
      return void 0 === A.attrs.type && (A.attrs.type = "text/css"), Q(e, A.attrs), u(A, e), e
    }

    function Q(A, e) {
      Object.keys(e).forEach(function (t) {
        A.setAttribute(t, e[t])
      })
    }

    function g(A, e) {
      var t, r, n, o;
      if (e.transform && A.css) {
        if (!(o = e.transform(A.css))) return function () {};
        A.css = o
      }
      if (e.singleton) {
        var i = a++;
        t = s || (s = w(e)), r = f.bind(null, t, i, !1), n = f.bind(null, t, i, !0)
      } else A.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (t = function (A) {
        var e = document.createElement("link");
        return void 0 === A.attrs.type && (A.attrs.type = "text/css"), A.attrs.rel = "stylesheet", Q(e, A.attrs), u(A, e), e
      }(e), r = function (A, e, t) {
        var r = t.css,
          n = t.sourceMap,
          o = void 0 === e.convertToAbsoluteUrls && n;
        (e.convertToAbsoluteUrls || o) && (r = B(r));
        n && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */");
        var s = new Blob([r], {
            type: "text/css"
          }),
          a = A.href;
        A.href = URL.createObjectURL(s), a && URL.revokeObjectURL(a)
      }.bind(null, t, e), n = function () {
        d(t), t.href && URL.revokeObjectURL(t.href)
      }) : (t = w(e), r = function (A, e) {
        var t = e.css,
          r = e.media;
        r && A.setAttribute("media", r);
        if (A.styleSheet) A.styleSheet.cssText = t;
        else {
          for (; A.firstChild;) A.removeChild(A.firstChild);
          A.appendChild(document.createTextNode(t))
        }
      }.bind(null, t), n = function () {
        d(t)
      });
      return r(A),
        function (e) {
          if (e) {
            if (e.css === A.css && e.media === A.media && e.sourceMap === A.sourceMap) return;
            r(A = e)
          } else n()
        }
    }
    A.exports = function (A, e) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
      (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = n()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
      var t = c(A, e);
      return l(t, e),
        function (A) {
          for (var n = [], o = 0; o < t.length; o++) {
            var s = t[o];
            (a = r[s.id]).refs--, n.push(a)
          }
          A && l(c(A, e), e);
          for (o = 0; o < n.length; o++) {
            var a;
            if (0 === (a = n[o]).refs) {
              for (var i = 0; i < a.parts.length; i++) a.parts[i]();
              delete r[a.id]
            }
          }
        }
    };
    var h = function () {
      var A = [];
      return function (e, t) {
        return A[e] = t, A.filter(Boolean).join("\n")
      }
    }();

    function f(A, e, t, r) {
      var n = t ? "" : r.css;
      if (A.styleSheet) A.styleSheet.cssText = h(e, n);
      else {
        var o = document.createTextNode(n),
          s = A.childNodes;
        s[e] && A.removeChild(s[e]), s.length ? A.insertBefore(o, s[e]) : A.appendChild(o)
      }
    }
  }, function (A, e) {
    A.exports = function (A) {
      var e = "undefined" != typeof window && window.location;
      if (!e) throw new Error("fixUrls requires window.location");
      if (!A || "string" != typeof A) return A;
      var t = e.protocol + "//" + e.host,
        r = t + e.pathname.replace(/\/[^\/]*$/, "/");
      return A.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (A, e) {
        var n, o = e.trim().replace(/^"(.*)"$/, function (A, e) {
          return e
        }).replace(/^'(.*)'$/, function (A, e) {
          return e
        });
        return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o) ? A : (n = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? t + o : r + o.replace(/^\.\//, ""), "url(" + JSON.stringify(n) + ")")
      })
    }
  }]).default
});