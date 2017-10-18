/*!
 * Simditor v2.1.13
 * http://simditor.tower.im/
 * 2015-06-23
 */

/*! WebUploader 0.1.5 */

/*
          Copyright (c) 2008, Adobe Systems Incorporated
          All rights reserved.
    
          Redistribution and use in source and binary forms, with or without
          modification, are permitted provided that the following conditions are
          met:
    
          * Redistributions of source code must retain the above copyright notice,
            this list of conditions and the following disclaimer.
    
          * Redistributions in binary form must reproduce the above copyright
            notice, this list of conditions and the following disclaimer in the
            documentation and/or other materials provided with the distribution.
    
          * Neither the name of Adobe Systems Incorporated nor the names of its
            contributors may be used to endorse or promote products derived from
            this software without specific prior written permission.
    
          THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
          IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
          THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
          PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
          CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
          EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
          PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
          PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
          LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
          NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
          SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
        */

/* ========================================================================
 * Bootstrap: transition.js v3.3.5
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* ========================================================================
 * Bootstrap: modal.js v3.3.5
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.5
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* ========================================================================
 * Bootstrap: collapse.js v3.3.5
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* =========================================================
 * bootstrap-datetimepicker.js
 * =========================================================
 * Copyright 2012 Stefan Petre
 * Improvements by Andrew Rowls
 * Improvements by Sébastien Malot
 * Improvements by Yun Lai
 * Improvements by Kenneth Henderick
 * Project URL : http://www.malot.fr/bootstrap-datetimepicker
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */

/* ========================================================================
 * Bootstrap (plugin): validator.js v0.9.0
 * ========================================================================
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Cina Saffary.
 * Made by @1000hz in the style of Bootstrap 3 era @fat
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * ======================================================================== */

(function(e, t) {
  typeof define == "function" && define.amd ? define("simple-module", ["jquery"], function(n) {
    return e.Module = t(n)
  }) : typeof exports == "object" ? module.exports = t(require("jquery")) : e.SimpleModule = t(jQuery)
})(this, function(e) {
  var t, n = [].slice;
  return t = function() {
    function t(t) {
      var n, r, i, s, o, u, a;
      this.opts = e.extend({}, this.opts, t), (n = this.constructor)._connectedClasses || (n._connectedClasses = []), o = function() {
        var e, t, n, i;
        n = this.constructor._connectedClasses, i = [];
        for (e = 0, t = n.length; e < t; e++) r = n[e], a = r.pluginName.charAt(0).toLowerCase() + r.pluginName.slice(1), r.prototype._connected && (r.prototype._module = this), i.push(this[a] = new r);
        return i
      }.call(this);
      if (this._connected) this.opts = e.extend({}, this.opts, this._module.opts);
      else {
        this._init();
        for (i = 0, u = o.length; i < u; i++) s = o[i], typeof s._init == "function" && s._init()
      }
      this.trigger("initialized")
    }
    return t.extend = function(e) {
      var t, n, r;
      if (e == null || typeof e != "object") return;
      for (t in e) r = e[t], t !== "included" && t !== "extended" && (this[t] = r);
      return (n = e.extended) != null ? n.call(this) : void 0
    }, t.include = function(e) {
      var t, n, r;
      if (e == null || typeof e != "object") return;
      for (t in e) r = e[t], t !== "included" && t !== "extended" && (this.prototype[t] = r);
      return (n = e.included) != null ? n.call(this) : void 0
    }, t.connect = function(e) {
      if (typeof e != "function") return;
      if (!e.pluginName) throw new Error("Module.connect: cannot connect plugin without pluginName");
      e.prototype._connected = !0, this._connectedClasses || (this._connectedClasses = []), this._connectedClasses.push(e);
      if (e.pluginName) return this[e.pluginName] = e
    }, t.prototype.opts = {}, t.prototype._init = function() {}, t.prototype.on = function() {
      var t, r;
      return t = 1 <= arguments.length ? n.call(arguments, 0) : [], (r = e(this)).on.apply(r, t), this
    }, t.prototype.one = function() {
      var t, r;
      return t = 1 <= arguments.length ? n.call(arguments, 0) : [], (r = e(this)).one.apply(r, t), this
    }, t.prototype.off = function() {
      var t, r;
      return t = 1 <= arguments.length ? n.call(arguments, 0) : [], (r = e(this)).off.apply(r, t), this
    }, t.prototype.trigger = function() {
      var t, r;
      return t = 1 <= arguments.length ? n.call(arguments, 0) : [], (r = e(this)).trigger.apply(r, t), this
    }, t.prototype.triggerHandler = function() {
      var t, r;
      return t = 1 <= arguments.length ? n.call(arguments, 0) : [], (r = e(this)).triggerHandler.apply(r, t)
    }, t.prototype._t = function() {
      var e, t;
      return e = 1 <= arguments.length ? n.call(arguments, 0) : [], (t = this.constructor)._t.apply(t, e)
    }, t._t = function() {
      var e, t, r, i;
      return t = arguments[0], e = 2 <= arguments.length ? n.call(arguments, 1) : [], i = ((r = this.i18n[this.locale]) != null ? r[t] : void 0) || "", e.length > 0 ? (i = i.replace(/([^%]|^)%(?:(\d+)\$)?s/g, function(t, n, r) {
        return r ? n + e[parseInt(r) - 1] : n + e.shift()
      }), i.replace(/%%s/g, "%s")) : i
    }, t.i18n = {
      "zh-CN": {}
    }, t.locale = "zh-CN", t
  }(), t
}),
function(e, t) {
  typeof define == "function" && define.amd ? define("simple-hotkeys", ["jquery", "simple-module"], function(n, r) {
    return e.hotkeys = t(n, r)
  }) : typeof exports == "object" ? module.exports = t(require("jquery"), require("simple-module")) : (e.simple = e.simple || {}, e.simple.hotkeys = t(jQuery, SimpleModule))
}(this, function(e, t) {
  var n, r, i = function(e, t) {
      function r() {
        this.constructor = e
      }
      for (var n in t) s.call(t, n) && (e[n] = t[n]);
      return r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype, e
    },
    s = {}.hasOwnProperty;
  return n = function(t) {
    function n() {
      return n.__super__.constructor.apply(this, arguments)
    }
    return i(n, t), n.count = 0, n.keyNameMap = {
      8: "Backspace",
      9: "Tab",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Esc",
      32: "Spacebar",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "Left",
      38: "Up",
      39: "Right",
      40: "Down",
      45: "Insert",
      46: "Del",
      91: "Meta",
      93: "Meta",
      48: "0",
      49: "1",
      50: "2",
      51: "3",
      52: "4",
      53: "5",
      54: "6",
      55: "7",
      56: "8",
      57: "9",
      65: "A",
      66: "B",
      67: "C",
      68: "D",
      69: "E",
      70: "F",
      71: "G",
      72: "H",
      73: "I",
      74: "J",
      75: "K",
      76: "L",
      77: "M",
      78: "N",
      79: "O",
      80: "P",
      81: "Q",
      82: "R",
      83: "S",
      84: "T",
      85: "U",
      86: "V",
      87: "W",
      88: "X",
      89: "Y",
      90: "Z",
      96: "0",
      97: "1",
      98: "2",
      99: "3",
      100: "4",
      101: "5",
      102: "6",
      103: "7",
      104: "8",
      105: "9",
      106: "Multiply",
      107: "Add",
      109: "Subtract",
      110: "Decimal",
      111: "Divide",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      124: "F13",
      125: "F14",
      126: "F15",
      127: "F16",
      128: "F17",
      129: "F18",
      130: "F19",
      131: "F20",
      132: "F21",
      133: "F22",
      134: "F23",
      135: "F24",
      59: ";",
      61: "=",
      186: ";",
      187: "=",
      188: ",",
      190: ".",
      191: "/",
      192: "`",
      219: "[",
      220: "\\",
      221: "]",
      222: "'"
    }, n.aliases = {
      escape: "esc",
      "delete": "del",
      "return": "enter",
      ctrl: "control",
      space: "spacebar",
      ins: "insert",
      cmd: "meta",
      command: "meta",
      wins: "meta",
      windows: "meta"
    }, n.normalize = function(e) {
      var t, n, r, i, s, o;
      s = e.toLowerCase().replace(/\s+/gi, "").split("+");
      for (t = n = 0, o = s.length; n < o; t = ++n) r = s[t], s[t] = this.aliases[r] || r;
      return i = s.pop(), s.sort().push(i), s.join("_")
    }, n.prototype.opts = {
      el: document
    }, n.prototype._init = function() {
      return this.id = ++this.constructor.count, this._map = {}, this._delegate = typeof this.opts.el == "string" ? document : this.opts.el, e(this._delegate).on("keydown.simple-hotkeys-" + this.id, this.opts.el, function(e) {
        return function(t) {
          var n;
          return (n = e._getHander(t)) != null ? n.call(e, t) : void 0
        }
      }(this))
    }, n.prototype._getHander = function(e) {
      var t, n;
      if (!(t = this.constructor.keyNameMap[e.which])) return;
      return n = "", e.altKey && (n += "alt_"), e.ctrlKey && (n += "control_"), e.metaKey && (n += "meta_"), e.shiftKey && (n += "shift_"), n += t.toLowerCase(), this._map[n]
    }, n.prototype.respondTo = function(e) {
      return typeof e == "string" ? this._map[this.constructor.normalize(e)] != null : this._getHander(e) != null
    }, n.prototype.add = function(e, t) {
      return this._map[this.constructor.normalize(e)] = t, this
    }, n.prototype.remove = function(e) {
      return delete this._map[this.constructor.normalize(e)], this
    }, n.prototype.destroy = function() {
      return e(this._delegate).off(".simple-hotkeys-" + this.id), this._map = {}, this
    }, n
  }(t), r = function(e) {
    return new n(e)
  }, r
}),
function(e, t) {
  typeof define == "function" && define.amd ? define("simple-uploader", ["jquery", "simple-module"], function(n, r) {
    return e.uploader = t(n, r)
  }) : typeof exports == "object" ? module.exports = t(require("jquery"), require("simple-module")) : (e.simple = e.simple || {}, e.simple.uploader = t(jQuery, SimpleModule))
}(this, function(e, t) {
  var n, r, i = function(e, t) {
      function r() {
        this.constructor = e
      }
      for (var n in t) s.call(t, n) && (e[n] = t[n]);
      return r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype, e
    },
    s = {}.hasOwnProperty;
  return n = function(t) {
    function n() {
      return n.__super__.constructor.apply(this, arguments)
    }
    return i(n, t), n.count = 0, n.prototype.opts = {
      url: "",
      params: null,
      fileKey: "upload_file",
      connectionCount: 3
    }, n.prototype._init = function() {
      return this.files = [], this.queue = [], this.id = ++n.count, this.on("uploadcomplete", function(t) {
        return function(n, r) {
          return t.files.splice(e.inArray(r, t.files), 1), t.queue.length > 0 && t.files.length < t.opts.connectionCount ? t.upload(t.queue.shift()) : t.uploading = !1
        }
      }(this)), e(window).on("beforeunload.uploader-" + this.id, function(e) {
        return function(t) {
          if (!e.uploading) return;
          return t.originalEvent.returnValue = e._t("leaveConfirm"), e._t("leaveConfirm")
        }
      }(this))
    }, n.prototype.generateId = function() {
      var e;
      return e = 0,
        function() {
          return e += 1
        }
    }(), n.prototype.upload = function(t, n) {
      var r, i, s, o;
      n == null && (n = {});
      if (t == null) return;
      if (e.isArray(t) || t instanceof FileList)
        for (i = 0, o = t.length; i < o; i++) r = t[i], this.upload(r, n);
      else if (e(t).is("input:file")) s = e(t).attr("name"), s && (n.fileKey = s), this.upload(e.makeArray(e(t)[0].files), n);
      else if (!t.id || !t.obj) t = this.getFile(t);
      if (!t || !t.obj) return;
      e.extend(t, n);
      if (this.files.length >= this.opts.connectionCount) {
        this.queue.push(t);
        return
      }
      if (this.triggerHandler("beforeupload", [t]) === !1) return;
      return this.files.push(t), this._xhrUpload(t), this.uploading = !0
    }, n.prototype.getFile = function(e) {
      var t, n, r;
      return e instanceof window.File || e instanceof window.Blob ? (t = (n = e.fileName) != null ? n : e.name, {
        id: this.generateId(),
        url: this.opts.url,
        params: this.opts.params,
        fileKey: this.opts.fileKey,
        name: t,
        size: (r = e.fileSize) != null ? r : e.size,
        ext: t ? t.split(".").pop().toLowerCase() : "",
        obj: e
      }) : null
    }, n.prototype._xhrUpload = function(t) {
      var n, r, i, s;
      n = new FormData, n.append(t.fileKey, t.obj), n.append("original_filename", t.name);
      if (t.params) {
        i = t.params;
        for (r in i) s = i[r], n.append(r, s)
      }
      return t.xhr = e.ajax({
        url: t.url,
        data: n,
        processData: !1,
        contentType: !1,
        type: "POST",
        beforeSend: function() {
          var e = "csrftoken=",
            t = document.cookie.split(";");
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            while (r.charAt(0) == " ") r = r.substring(1);
            r.indexOf(e) != -1 && (e = r.substring(e.length, r.length))
          }
          arguments[0].setRequestHeader("X-CSRFToken", e)
        },
        headers: {
          "X-File-Name": encodeURIComponent(t.name)
        },
        xhr: function() {
          var t;
          return t = e.ajaxSettings.xhr(), t && (t.upload.onprogress = function(e) {
            return function(t) {
              return e.progress(t)
            }
          }(this)), t
        },
        progress: function(e) {
          return function(n) {
            if (!n.lengthComputable) return;
            return e.trigger("uploadprogress", [t, n.loaded, n.total])
          }
        }(this),
        error: function(e) {
          return function(n, r, i) {
            return e.trigger("uploaderror", [t, n, r])
          }
        }(this),
        success: function(n) {
          return function(r) {
            return n.trigger("uploadprogress", [t, t.size, t.size]), n.trigger("uploadsuccess", [t, r]), e(document).trigger("uploadsuccess", [t, r, n])
          }
        }(this),
        complete: function(e) {
          return function(n, r) {
            return e.trigger("uploadcomplete", [t, n.responseText])
          }
        }(this)
      })
    }, n.prototype.cancel = function(e) {
      var t, n, r, i;
      if (!e.id) {
        i = this.files;
        for (n = 0, r = i.length; n < r; n++) {
          t = i[n];
          if (t.id === e * 1) {
            e = t;
            break
          }
        }
      }
      return this.trigger("uploadcancel", [e]), e.xhr && e.xhr.abort(), e.xhr = null
    }, n.prototype.readImageFile = function(t, n) {
      var r, i;
      if (!e.isFunction(n)) return;
      return i = new Image, i.onload = function() {
        return n(i)
      }, i.onerror = function() {
        return n()
      }, window.FileReader && FileReader.prototype.readAsDataURL && /^image/.test(t.type) ? (r = new FileReader, r.onload = function(e) {
        return i.src = e.target.result
      }, r.readAsDataURL(t)) : n()
    }, n.prototype.destroy = function() {
      var t, n, r, i;
      this.queue.length = 0, i = this.files;
      for (n = 0, r = i.length; n < r; n++) t = i[n], this.cancel(t);
      return e(window).off(".uploader-" + this.id), e(document).off(".uploader-" + this.id)
    }, n.i18n = {
      "zh-CN": {
        leaveConfirm: "正在上传文件，如果离开上传会自动取消"
      }
    }, n.locale = "zh-CN", n
  }(t), r = function(e) {
    return new n(e)
  }, r
}),
function(e, t) {
  typeof define == "function" && define.amd ? define("simditor", ["jquery", "simple-module", "simple-hotkeys", "simple-uploader"], function(n, r, i, s) {
    return e.Simditor = t(n, r, i, s)
  }) : typeof exports == "object" ? module.exports = t(require("jquery"), require("simple-module"), require("simple-hotkeys"), require("simple-uploader")) : e.Simditor = t(jQuery, SimpleModule, simple.hotkeys, simple.uploader)
}(this, function(e, t, n, r) {
  var i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L, A, O, M, _, D, P, H, B = function(e, t) {
      function r() {
        this.constructor = e
      }
      for (var n in t) j.call(t, n) && (e[n] = t[n]);
      return r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype, e
    },
    j = {}.hasOwnProperty,
    F = [].indexOf || function(e) {
      for (var t = 0, n = this.length; t < n; t++)
        if (t in this && this[t] === e) return t;
      return -1
    },
    I = [].slice;
  return C = function(t) {
    function n() {
      return n.__super__.constructor.apply(this, arguments)
    }
    return B(n, t), n.pluginName = "Selection", n.prototype._init = function() {
      return this.editor = this._module, this.sel = document.getSelection()
    }, n.prototype.clear = function() {
      var e;
      try {
        return this.sel.removeAllRanges()
      } catch (t) {
        e = t
      }
    }, n.prototype.getRange = function() {
      return !this.editor.inputManager.focused || !this.sel.rangeCount ? null : this.sel.getRangeAt(0)
    }, n.prototype.selectRange = function(e) {
      return this.clear(), this.sel.addRange(e), !this.editor.inputManager.focused && (this.editor.util.browser.firefox || this.editor.util.browser.msie) && this.editor.body.focus(), e
    }, n.prototype.rangeAtEndOf = function(t, n) {
      var r, i, s;
      n == null && (n = this.getRange());
      if (n == null || !n.collapsed) return;
      t = e(t)[0], r = n.endContainer, i = this.editor.util.getNodeLength(r);
      if (n.endOffset === i - 1 && !!e(r).contents().last().is("br") || n.endOffset === i) return t === r ? !0 : e.contains(t, r) ? (s = !0, e(r).parentsUntil(t).addBack().each(function(t) {
        return function(t, n) {
          var r, i;
          i = e(n).parent().contents().filter(function() {
            return this === n || this.nodeType !== 3 || !!this.nodeValue
          }), r = i.last();
          if (!(r.get(0) === n || r.is("br") && r.prev().get(0) === n)) return s = !1, !1
        }
      }(this)), s) : !1;
      return !1
    }, n.prototype.rangeAtStartOf = function(t, n) {
      var r, i;
      n == null && (n = this.getRange());
      if (n == null || !n.collapsed) return;
      return t = e(t)[0], i = n.startContainer, n.startOffset !== 0 ? !1 : t === i ? !0 : e.contains(t, i) ? (r = !0, e(i).parentsUntil(t).addBack().each(function(t) {
        return function(t, n) {
          var i;
          i = e(n).parent().contents().filter(function() {
            return this === n || this.nodeType !== 3 || !!this.nodeValue
          });
          if (i.first().get(0) !== n) return r = !1
        }
      }(this)), r) : !1
    }, n.prototype.insertNode = function(t, n) {
      n == null && (n = this.getRange());
      if (n == null) return;
      return t = e(t)[0], n.insertNode(t), this.setRangeAfter(t, n)
    }, n.prototype.setRangeAfter = function(t, n) {
      n == null && (n = this.getRange());
      if (n == null) return;
      return t = e(t)[0], n.setEndAfter(t), n.collapse(!1), this.selectRange(n)
    }, n.prototype.setRangeBefore = function(t, n) {
      n == null && (n = this.getRange());
      if (n == null) return;
      return t = e(t)[0], n.setEndBefore(t), n.collapse(!1), this.selectRange(n)
    }, n.prototype.setRangeAtStartOf = function(t, n) {
      return n == null && (n = this.getRange()), t = e(t).get(0), n.setEnd(t, 0), n.collapse(!1), this.selectRange(n)
    }, n.prototype.setRangeAtEndOf = function(t, n) {
      var r, i, s, o, u, a;
      return n == null && (n = this.getRange()), i = e(t), t = i.get(0), i.is("pre") ? (s = i.contents(), s.length > 0 ? (o = s.last(), u = o.text(), u.charAt(u.length - 1) === "\n" ? n.setEnd(o[0], this.editor.util.getNodeLength(o[0]) - 1) : n.setEnd(o[0], this.editor.util.getNodeLength(o[0]))) : n.setEnd(t, 0)) : (a = this.editor.util.getNodeLength(t), t.nodeType !== 3 && a > 0 && (r = e(t).contents().last(), r.is("br") ? a -= 1 : r[0].nodeType !== 3 && this.editor.util.isEmptyNode(r) && (r.append(this.editor.util.phBr), t = r[0], a = 0)), n.setEnd(t, a)), n.collapse(!1), this.selectRange(n)
    }, n.prototype.deleteRangeContents = function(e) {
      var t, n;
      return e == null && (e = this.getRange()), n = e.cloneRange(), t = e.cloneRange(), n.collapse(!0), t.collapse(!1), !e.collapsed && this.rangeAtStartOf(this.editor.body, n) && this.rangeAtEndOf(this.editor.body, t) ? (this.editor.body.empty(), e.setStart(this.editor.body[0], 0), e.collapse(!0), this.selectRange(e)) : e.deleteContents(), e
    }, n.prototype.breakBlockEl = function(t, n) {
      var r;
      return n == null && (n = this.getRange()), r = e(t), n.collapsed ? (n.setStartBefore(r.get(0)), n.collapsed ? r : r.before(n.extractContents())) : r
    }, n.prototype.save = function(t) {
      var n, r, i;
      t == null && (t = this.getRange());
      if (this._selectionSaved) return;
      return r = t.cloneRange(), r.collapse(!1), i = e("<span/>").addClass("simditor-caret-start"), n = e("<span/>").addClass("simditor-caret-end"), r.insertNode(n[0]), t.insertNode(i[0]), this.clear(), this._selectionSaved = !0
    }, n.prototype.restore = function() {
      var e, t, n, r, i, s, o;
      return this._selectionSaved ? (i = this.editor.body.find(".simditor-caret-start"), e = this.editor.body.find(".simditor-caret-end"), i.length && e.length ? (s = i.parent(), o = s.contents().index(i), t = e.parent(), n = t.contents().index(e), s[0] === t[0] && (n -= 1), r = document.createRange(), r.setStart(s.get(0), o), r.setEnd(t.get(0), n), i.remove(), e.remove(), this.selectRange(r)) : (i.remove(), e.remove()), this._selectionSaved = !1, r) : !1
    }, n
  }(t), c = function(t) {
    function n() {
      return n.__super__.constructor.apply(this, arguments)
    }
    return B(n, t), n.pluginName = "Formatter", n.prototype.opts = {
      allowedTags: null,
      allowedAttributes: null
    }, n.prototype._init = function() {
      return this.editor = this._module, this._allowedTags = this.opts.allowedTags || ["br", "a", "img", "b", "strong", "i", "u", "font", "p", "ul", "ol", "li", "blockquote", "pre", "code", "h1", "h2", "h3", "h4", "hr"], this._allowedAttributes = this.opts.allowedAttributes || {
        img: ["src", "alt", "width", "height", "data-non-image"],
        a: ["href", "target"],
        font: ["color"],
        code: ["class"]
      }, this._allowedStyles = this.opts.allowedStyles || {
        p: ["margin-left", "text-align"],
        h1: ["margin-left"],
        h2: ["margin-left"],
        h3: ["margin-left"],
        h4: ["margin-left"]
      }, this.editor.body.on("click", "a", function(e) {
        return !1
      })
    }, n.prototype.decorate = function(e) {
      return e == null && (e = this.editor.body), this.editor.trigger("decorate", [e])
    }, n.prototype.undecorate = function(t) {
      return t == null && (t = this.editor.body.clone()), this.editor.trigger("undecorate", [t]), e.trim(t.html())
    }, n.prototype.autolink = function(t) {
      var n, r, i, s, o, u, a, f, l, c, h, p, d;
      t == null && (t = this.editor.body), a = [], i = function(n) {
        return n.contents().each(function(n, r) {
          var s, o;
          s = e(r);
          if (s.is("a") || s.closest("a, pre", t).length) return;
          if (s.contents().length) return i(s);
          if ((o = s.text()) && /https?:\/\/|www\./ig.test(o)) return a.push(s)
        })
      }, i(t), l = /(https?:\/\/|www\.)[\w\-\.\?&=\/#%:,@\!\+]+/ig;
      for (s = 0, u = a.length; s < u; s++) {
        r = a[s], p = r.text(), c = [], f = null, o = 0;
        while ((f = l.exec(p)) !== null) h = p.substring(o, f.index), c.push(document.createTextNode(h)), o = l.lastIndex, d = /^(http(s)?:\/\/|\/)/.test(f[0]) ? f[0] : "http://" + f[0], n = e('<a href="' + d + '" rel="nofollow"></a>').text(f[0]), c.push(n[0]);
        c.push(document.createTextNode(p.substring(o))), r.replaceWith(e(c))
      }
      return t
    }, n.prototype.format = function(t) {
      var n, r, i, s, o, u, a, f, l, c;
      t == null && (t = this.editor.body);
      if (t.is(":empty")) return t.append("<p>" + this.editor.util.phBr + "</p>"), t;
      l = t.contents();
      for (i = 0, o = l.length; i < o; i++) a = l[i], this.cleanNode(a, !0);
      c = t.contents();
      for (s = 0, u = c.length; s < u; s++) {
        f = c[s], n = e(f);
        if (n.is("br")) typeof r != "undefined" && r !== null && (r = null), n.remove();
        else if (this.editor.util.isBlockNode(f)) n.is("li") ? r && r.is("ul, ol") ? r.append(f) : (r = e("<ul/>").insertBefore(f), r.append(f)) : r = null;
        else {
          if (!r || r.is("ul, ol")) r = e("<p/>").insertBefore(f);
          r.append(f)
        }
      }
      return t
    }, n.prototype.cleanNode = function(t, n) {
      var r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b;
      i = e(t);
      if (i.length > 0) {
        if (i[0].nodeType === 3) {
          y = i.text().replace(/(\r\n|\n|\r)/gm, ""), y ? (b = document.createTextNode(y), i.replaceWith(b)) : i.remove();
          return
        }
        f = i.contents(), l = i.is('[class^="simditor-"]');
        if (i.is(this._allowedTags.join(",")) || l) {
          i.is("a") && (r = i.find("img")).length > 0 && (i.replaceWith(r), i = r, f = null), i.is("img") && i.hasClass("uploading") && i.remove();
          if (!l) {
            u = this._allowedAttributes[i[0].tagName.toLowerCase()], m = e.makeArray(i[0].attributes);
            for (c = 0, p = m.length; c < p; c++) {
              a = m[c];
              if (a.name === "style") continue;
              u != null && (g = a.name, F.call(u, g) >= 0) || i.removeAttr(a.name), this._cleanNodeStyles(i)
            }
          }
        } else i[0].nodeType === 1 && !i.is(":empty") ? i.is("div, article, dl, header, footer, tr") ? (i.append("<br/>"), f.first().unwrap()) : i.is("table") ? (s = e("<p/>"), i.find("tr").each(function(t, n) {
          return s.append(e(n).text() + "<br/>")
        }), i.replaceWith(s), f = null) : i.is("thead, tfoot") ? (i.remove(), f = null) : i.is("th") ? (o = e("<td/>").append(i.contents()), i.replaceWith(o)) : f.first().unwrap() : (i.remove(), f = null);
        if (n && f != null && !i.is("pre"))
          for (h = 0, d = f.length; h < d; h++) v = f[h], this.cleanNode(v, !0);
        return null
      }
      return
    }, n.prototype._cleanNodeStyles = function(t) {
      var n, r, i, s, o, u, a, f, l;
      f = t.attr("style");
      if (!f) return;
      t.removeAttr("style"), n = this._allowedStyles[t[0].tagName.toLowerCase()];
      if (!(n && n.length > 0)) return t;
      l = {}, o = f.split(";");
      for (r = 0, i = o.length; r < i; r++) {
        a = o[r], a = e.trim(a), s = a.split(":");
        if (!(s.length = 2)) continue;
        if (u = s[0], F.call(n, u) >= 0) l[e.trim(s[0])] = $trim(s[1])
      }
      return Object.keys(l).length > 0 && t.css(l), t
    }, n.prototype.clearHtml = function(t, n) {
      var r, i, s;
      return n == null && (n = !0), r = e("<div/>").append(t), i = r.contents(), s = "", i.each(function(t) {
        return function(r, o) {
          var u, a;
          if (o.nodeType === 3) return s += o.nodeValue;
          if (o.nodeType === 1) {
            u = e(o), a = u.contents(), a.length > 0 && (s += t.clearHtml(a));
            if (n && r < i.length - 1 && u.is("br, p, div, li,tr, pre, address, artticle, aside, dl, figcaption, footer, h1, h2,h3, h4, header")) return s += "\n"
          }
        }
      }(this)), s
    }, n.prototype.beautify = function(t) {
      var n;
      return n = function(e) {
        return !!(e.is("p") && !e.text() && e.children(":not(br)").length < 1)
      }, t.each(function(t, r) {
        var i, s;
        return i = e(r), s = i.is(':not(img, br, col, td, hr, [class^="simditor-"]):empty'), (s || n(i)) && i.remove(), i.find(':not(img, br, col, td, hr, [class^="simditor-"]):empty').remove()
      })
    }, n
  }(t), g = function(t) {
    function r() {
      return r.__super__.constructor.apply(this, arguments)
    }
    return B(r, t), r.pluginName = "InputManager", r.prototype.opts = {
      pasteImage: !1
    }, r.prototype._modifierKeys = [16, 17, 18, 91, 93, 224], r.prototype._arrowKeys = [37, 38, 39, 40], r.prototype._init = function() {
      var t;
      this.editor = this._module, this.throttledTrigger = this.editor.util.throttle(function(e) {
        return function() {
          var t;
          return t = 1 <= arguments.length ? I.call(arguments, 0) : [], setTimeout(function() {
            var n;
            return (n = e.editor).trigger.apply(n, t)
          }, 10)
        }
      }(this), 300), this.opts.pasteImage && typeof this.opts.pasteImage != "string" && (this.opts.pasteImage = "inline"), this._keystrokeHandlers = {}, this.hotkeys = n({
        el: this.editor.body
      }), this._pasteArea = e("<div/>").css({
        width: "1px",
        height: "1px",
        overflow: "hidden",
        position: "fixed",
        right: "0",
        bottom: "100px"
      }).attr({
        tabIndex: "-1",
        contentEditable: !0
      }).addClass("simditor-paste-area").appendTo(this.editor.el), e(document).on("selectionchange.simditor" + this.editor.id, function(e) {
        return function(t) {
          if (!e.focused) return;
          return e._selectionTimer && (clearTimeout(e._selectionTimer), e._selectionTimer = null), e._selectionTimer = setTimeout(function() {
            return e.editor.trigger("selectionchanged")
          }, 20)
        }
      }(this)), this.editor.on("valuechanged", function(t) {
        return function() {
          !t.editor.util.closestBlockEl() && t.focused && (t.editor.selection.save(), t.editor.formatter.format(), t.editor.selection.restore()), t.editor.body.find("hr, pre, .simditor-table").each(function(n, r) {
            var i, s;
            i = e(r);
            if (i.parent().is("blockquote") || i.parent()[0] === t.editor.body[0]) {
              s = !1, i.next().length === 0 && (e("<p/>").append(t.editor.util.phBr).insertAfter(i), s = !0), i.prev().length === 0 && (e("<p/>").append(t.editor.util.phBr).insertBefore(i), s = !0);
              if (s) return setTimeout(function() {
                return t.editor.trigger("valuechanged")
              }, 10)
            }
          }), t.editor.body.find("pre:empty").append(t.editor.util.phBr);
          if (!t.editor.util.support.onselectionchange && t.focused) return t.editor.trigger("selectionchanged")
        }
      }(this)), this.editor.on("selectionchanged", function(e) {
        return function(t) {
          return e.editor.undoManager.update()
        }
      }(this)), this.editor.body.on("keydown", e.proxy(this._onKeyDown, this)).on("keypress", e.proxy(this._onKeyPress, this)).on("keyup", e.proxy(this._onKeyUp, this)).on("mouseup", e.proxy(this._onMouseUp, this)).on("focus", e.proxy(this._onFocus, this)).on("blur", e.proxy(this._onBlur, this)).on("paste", e.proxy(this._onPaste, this)).on("drop", e.proxy(this._onDrop, this)).on("input", e.proxy(this._onInput, this)), this.editor.util.browser.firefox && (this.addShortcut("cmd+left", function(e) {
        return function(t) {
          return t.preventDefault(), e.editor.selection.sel.modify("move", "backward", "lineboundary"), !1
        }
      }(this)), this.addShortcut("cmd+right", function(e) {
        return function(t) {
          return t.preventDefault(), e.editor.selection.sel.modify("move", "forward", "lineboundary"), !1
        }
      }(this)), this.addShortcut(this.editor.util.os.mac ? "cmd+a" : "ctrl+a", function(e) {
        return function(t) {
          var n, r, i, s;
          n = e.editor.body.children();
          if (n.length > 0) return r = n.first().get(0), i = n.last().get(0), s = document.createRange(), s.setStart(r, 0), s.setEnd(i, e.editor.util.getNodeLength(i)), e.editor.selection.selectRange(s), !1;
          return
        }
      }(this))), t = this.editor.util.os.mac ? "cmd+enter" : "ctrl+enter", this.addShortcut(t, function(e) {
        return function(t) {
          return e.editor.el.closest("form").find("button:submit").click(), !1
        }
      }(this));
      if (this.editor.textarea.attr("autofocus")) return setTimeout(function(e) {
        return function() {
          return e.editor.focus()
        }
      }(this), 0)
    }, r.prototype._onFocus = function(e) {
      return this.editor.el.addClass("focus").removeClass("error"), this.focused = !0, this.lastCaretPosition = null, setTimeout(function(e) {
        return function() {
          return e.editor.triggerHandler("focus"), e.editor.trigger("selectionchanged")
        }
      }(this), 0)
    }, r.prototype._onBlur = function(e) {
      var t;
      return this.editor.el.removeClass("focus"), this.editor.sync(), this.focused = !1, this.lastCaretPosition = (t = this.editor.undoManager.currentState()) != null ? t.caret : void 0, this.editor.triggerHandler("blur")
    }, r.prototype._onMouseUp = function(e) {
      if (!this.editor.util.support.onselectionchange) return setTimeout(function(e) {
        return function() {
          return e.editor.trigger("selectionchanged")
        }
      }(this), 0)
    }, r.prototype._onKeyDown = function(t) {
      var n, r, i, s;
      if (this.editor.triggerHandler(t) === !1) return !1;
      if (this.hotkeys.respondTo(t)) return;
      if (t.which in this._keystrokeHandlers) {
        s = typeof(n = this._keystrokeHandlers[t.which])["*"] == "function" ? n["*"](t) : void 0;
        if (s) return this.editor.trigger("valuechanged"), !1;
        this.editor.util.traverseUp(function(n) {
          return function(r) {
            var i, o;
            if (r.nodeType !== document.ELEMENT_NODE) return;
            i = (o = n._keystrokeHandlers[t.which]) != null ? o[r.tagName.toLowerCase()] : void 0, s = typeof i == "function" ? i(t, e(r)) : void 0;
            if (s === !0 || s === !1) return !1
          }
        }(this));
        if (s) return this.editor.trigger("valuechanged"), !1
      }
      if ((r = t.which, F.call(this._modifierKeys, r) >= 0) || (i = t.which, F.call(this._arrowKeys, i) >= 0)) return;
      if (this.editor.util.metaKey(t) && t.which === 86) return;
      return this.editor.util.support.oninput || this.throttledTrigger("valuechanged", ["typing"]), null
    }, r.prototype._onKeyPress = function(e) {
      if (this.editor.triggerHandler(e) === !1) return !1
    }, r.prototype._onKeyUp = function(t) {
      var n, r;
      if (this.editor.triggerHandler(t) === !1) return !1;
      if (!this.editor.util.support.onselectionchange && (r = t.which, F.call(this._arrowKeys, r) >= 0)) {
        this.editor.trigger("selectionchanged");
        return
      }(t.which === 8 || t.which === 46) && this.editor.util.isEmptyNode(this.editor.body) && (this.editor.body.empty(), n = e("<p/>").append(this.editor.util.phBr).appendTo(this.editor.body), this.editor.selection.setRangeAtStartOf(n))
    }, r.prototype._onPaste = function(t) {
      var n, r, i, s, o, u, a, f, l;
      if (this.editor.triggerHandler(t) === !1) return !1;
      a = this.editor.selection.deleteRangeContents(), a.collapsed || a.collapse(!0), n = this.editor.util.closestBlockEl(), r = n.is("pre, table");
      if (t.originalEvent.clipboardData && t.originalEvent.clipboardData.items && t.originalEvent.clipboardData.items.length > 0) {
        o = t.originalEvent.clipboardData.items[0];
        if (/^image\//.test(o.type) && !r) {
          i = o.getAsFile();
          if (i == null || !this.opts.pasteImage) return;
          return i.name || (i.name = "Clipboard Image.png"), l = {}, l[this.opts.pasteImage] = !0, (f = this.editor.uploader) != null && f.upload(i, l), !1
        }
      }
      return u = function(t) {
        return function(i) {
          var s, o, u, f, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k;
          if (t.editor.triggerHandler("pasting", [i]) === !1) return;
          if (!i) return;
          if (r)
            if (n.is("table")) {
              E = i.split("\n"), d = E.pop();
              for (c = 0, v = E.length; c < v; c++) w = E[c], t.editor.selection.insertNode(document.createTextNode(w)), t.editor.selection.insertNode(e("<br/>"));
              t.editor.selection.insertNode(document.createTextNode(d))
            } else {
              i = e("<div/>").text(i), N = i.contents();
              for (h = 0, m = N.length; h < m; h++) x = N[h], t.editor.selection.insertNode(e(x)[0], a)
            }
          else if (n.is(t.editor.body))
            for (p = 0, g = i.length; p < g; p++) x = i[p], t.editor.selection.insertNode(x, a);
          else {
            if (i.length < 1) return;
            if (i.length === 1)
              if (i.is("p")) {
                u = i.contents();
                if (u.length === 1 && u.is("img")) {
                  s = u;
                  if (/^data:image/.test(s.attr("src"))) {
                    if (!t.opts.pasteImage) return;
                    o = t.editor.util.dataURLtoBlob(s.attr("src")), o.name = "Clipboard Image.png", l = {}, l[t.opts.pasteImage] = !0, (C = t.editor.uploader) != null && C.upload(o, l);
                    return
                  }
                  if (s.is('img[src^="webkit-fake-url://"]')) return
                }
                for (S = 0, y = u.length; S < y; S++) x = u[S], t.editor.selection.insertNode(x, a)
              } else if (n.is("p") && t.editor.util.isEmptyNode(n)) n.replaceWith(i), t.editor.selection.setRangeAtEndOf(i, a);
            else if (i.is("ul, ol"))
              if (i.find("li").length === 1) {
                i = e("<div/>").text(i.text()), k = i.contents();
                for (T = 0, b = k.length; T < b; T++) x = k[T], t.editor.selection.insertNode(e(x)[0], a)
              } else n.is("li") ? (n.parent().after(i), t.editor.selection.setRangeAtEndOf(i, a)) : (n.after(i), t.editor.selection.setRangeAtEndOf(i, a));
            else n.after(i), t.editor.selection.setRangeAtEndOf(i, a);
            else n.is("li") && (n = n.parent()), t.editor.selection.rangeAtStartOf(n, a) ? f = "before" : t.editor.selection.rangeAtEndOf(n, a) ? f = "after" : (t.editor.selection.breakBlockEl(n, a), f = "before"), n[f](i), t.editor.selection.setRangeAtEndOf(i.last(), a)
          }
          return t.editor.trigger("valuechanged")
        }
      }(this), r ? (t.preventDefault(), this.editor.util.browser.msie ? s = window.clipboardData.getData("Text") : s = t.originalEvent.clipboardData.getData("text/plain"), u(s)) : (this.editor.selection.save(a), this._pasteArea.focus(), this.editor.util.browser.msie && this.editor.util.browser.version === 10 && (t.preventDefault(), this._pasteArea.html(window.clipboardData.getData("Text"))), setTimeout(function(t) {
        return function() {
          return t._pasteArea.is(":empty") ? s = null : (s = e("<div/>").append(t._pasteArea.contents()), s.find("table colgroup").remove(), t.editor.formatter.format(s), t.editor.formatter.decorate(s), t.editor.formatter.beautify(s.children()), s = s.contents()), t._pasteArea.empty(), a = t.editor.selection.restore(), u(s)
        }
      }(this), 10))
    }, r.prototype._onDrop = function(e) {
      return this.editor.triggerHandler(e) === !1 ? !1 : setTimeout(function(e) {
        return function() {
          return e.editor.trigger("valuechanged")
        }
      }(this), 0)
    }, r.prototype._onInput = function(e) {
      return this.throttledTrigger("valuechanged", ["oninput"])
    }, r.prototype.addKeystrokeHandler = function(e, t, n) {
      return this._keystrokeHandlers[e] || (this._keystrokeHandlers[e] = {}), this._keystrokeHandlers[e][t] = n
    }, r.prototype.addShortcut = function(t, n) {
      return this.hotkeys.add(t, e.proxy(n, this))
    }, r
  }(t), b = function(t) {
    function n() {
      return n.__super__.constructor.apply(this, arguments)
    }
    return B(n, t), n.pluginName = "Keystroke", n.prototype._init = function() {
      var t;
      this.editor = this._module, this.editor.util.browser.safari && this.editor.inputManager.addKeystrokeHandler("13", "*", function(t) {
        return function(n) {
          var r, i;
          if (!n.shiftKey) return;
          r = t.editor.util.closestBlockEl();
          if (r.is("pre")) return;
          return i = e("<br/>"), t.editor.selection.rangeAtEndOf(r) ? (t.editor.selection.insertNode(i), t.editor.selection.insertNode(e("<br/>")), t.editor.selection.setRangeBefore(i)) : t.editor.selection.insertNode(i), !0
        }
      }(this));
      if (this.editor.util.browser.webkit || this.editor.util.browser.msie) t = function(t) {
        return function(n, r) {
          var i;
          if (!t.editor.selection.rangeAtEndOf(r)) return;
          return i = e("<p/>").append(t.editor.util.phBr).insertAfter(r), t.editor.selection.setRangeAtStartOf(i), !0
        }
      }(this), this.editor.inputManager.addKeystrokeHandler("13", "h1", t), this.editor.inputManager.addKeystrokeHandler("13", "h2", t), this.editor.inputManager.addKeystrokeHandler("13", "h3", t), this.editor.inputManager.addKeystrokeHandler("13", "h4", t), this.editor.inputManager.addKeystrokeHandler("13", "h5", t), this.editor.inputManager.addKeystrokeHandler("13", "h6", t);
      return this.editor.inputManager.addKeystrokeHandler("8", "*", function(e) {
        return function(t) {
          var n, r, i;
          i = e.editor.util.furthestBlockEl(), r = i.prev();
          if (r.is("hr") && e.editor.selection.rangeAtStartOf(i)) return e.editor.selection.save(), r.remove(), e.editor.selection.restore(), !0;
          n = e.editor.util.closestBlockEl();
          if (e.editor.util.browser.webkit && e.editor.selection.rangeAtStartOf(n)) return e.editor.selection.save(), e.editor.formatter.cleanNode(n, !0), e.editor.selection.restore(), null
        }
      }(this)), this.editor.inputManager.addKeystrokeHandler("13", "li", function(t) {
        return function(n, r) {
          var i, s, o, u;
          i = r.clone(), i.find("ul, ol").remove();
          if (!t.editor.util.isEmptyNode(i) || !r.is(t.editor.util.closestBlockEl())) return;
          s = r.parent();
          if (r.next("li").length > 0) {
            if (!t.editor.util.isEmptyNode(r)) return;
            s.parent("li").length > 0 ? (o = e("<li/>").append(t.editor.util.phBr).insertAfter(s.parent("li")), u = e("<" + s[0].tagName + "/>").append(r.nextAll("li")), o.append(u)) : (o = e("<p/>").append(t.editor.util.phBr).insertAfter(s), u = e("<" + s[0].tagName + "/>").append(r.nextAll("li")), o.after(u))
          } else s.parent("li").length > 0 ? (o = e("<li/>").insertAfter(s.parent("li")), r.contents().length > 0 ? o.append(r.contents()) : o.append(t.editor.util.phBr)) : (o = e("<p/>").append(t.editor.util.phBr).insertAfter(s), r.children("ul, ol").length > 0 && o.after(r.children("ul, ol")));
          return r.prev("li").length ? r.remove() : s.remove(), t.editor.selection.setRangeAtStartOf(o), !0
        }
      }(this)), this.editor.inputManager.addKeystrokeHandler("13", "pre", function(t) {
        return function(n, r) {
          var i, s, o;
          return n.preventDefault(), n.shiftKey ? (i = e("<p/>").append(t.editor.util.phBr).insertAfter(r), t.editor.selection.setRangeAtStartOf(i), !0) : (o = t.editor.selection.getRange(), s = null, o.deleteContents(), !t.editor.util.browser.msie && t.editor.selection.rangeAtEndOf(r) ? (s = document.createTextNode("\n\n"), o.insertNode(s), o.setEnd(s, 1)) : (s = document.createTextNode("\n"), o.insertNode(s), o.setStartAfter(s)), o.collapse(!1), t.editor.selection.selectRange(o), !0)
        }
      }(this)), this.editor.inputManager.addKeystrokeHandler("13", "blockquote", function(e) {
        return function(t, n) {
          var r, i;
          r = e.editor.util.closestBlockEl();
          if (!(r.is("p") && !r.next().length && e.editor.util.isEmptyNode(r))) return;
          return n.after(r), i = document.createRange(), e.editor.selection.setRangeAtStartOf(r, i), !0
        }
      }(this)), this.editor.inputManager.addKeystrokeHandler("8", "li", function(t) {
        return function(n, r) {
          var i, s, o, u, a, f, l, c;
          s = r.children("ul, ol"), a = r.prev("li");
          if (s.length > 0 && a.length > 0) return c = "", f = null, r.contents().each(function(t, n) {
            if (n.nodeType === 1 && /UL|OL/.test(n.nodeName)) return !1;
            if (n.nodeType === 1 && /BR/.test(n.nodeName)) return;
            return n.nodeType === 3 && n.nodeValue ? c += n.nodeValue : n.nodeType === 1 && (c += e(n).text()), f = e(n)
          }), f && c.length === 1 && t.editor.util.browser.firefox && !f.next("br").length ? (i = e(t.editor.util.phBr).insertAfter(f), f.remove(), t.editor.selection.setRangeBefore(i), !0) : c.length > 0 ? !1 : (l = document.createRange(), u = a.children("ul, ol"), u.length > 0 ? (o = e("<li/>").append(t.editor.util.phBr).appendTo(u), u.append(s.children("li")), r.remove(), t.editor.selection.setRangeAtEndOf(o, l)) : (t.editor.selection.setRangeAtEndOf(a, l), a.append(s), r.remove(), t.editor.selection.selectRange(l)), !0);
          return !1
        }
      }(this)), this.editor.inputManager.addKeystrokeHandler("8", "pre", function(t) {
        return function(n, r) {
          var i, s, o;
          if (!t.editor.selection.rangeAtStartOf(r)) return;
          return s = r.html().replace("\n", "<br/>"), i = e("<p/>").append(s || t.editor.util.phBr).insertAfter(r), r.remove(), o = document.createRange(), t.editor.selection.setRangeAtStartOf(i, o), !0
        }
      }(this)), this.editor.inputManager.addKeystrokeHandler("8", "blockquote", function(e) {
        return function(t, n) {
          var r, i;
          if (!e.editor.selection.rangeAtStartOf(n)) return;
          return r = n.children().first().unwrap(), i = document.createRange(), e.editor.selection.setRangeAtStartOf(r, i), !0
        }
      }(this))
    }, n
  }(t), D = function(t) {
    function n() {
      return n.__super__.constructor.apply(this, arguments)
    }
    return B(n, t), n.pluginName = "UndoManager", n.prototype._index = -1, n.prototype._capacity = 50, n.prototype._timer = null, n.prototype._init = function() {
      var e, t;
      return this.editor = this._module, this._stack = [], this.editor.util.os.mac ? (t = "cmd+z", e = "shift+cmd+z") : this.editor.util.os.win ? (t = "ctrl+z", e = "ctrl+y") : (t = "ctrl+z", e = "shift+ctrl+z"), this.editor.inputManager.addShortcut(t, function(e) {
        return function(t) {
          return t.preventDefault(), e.undo(), !1
        }
      }(this)), this.editor.inputManager.addShortcut(e, function(e) {
        return function(t) {
          return t.preventDefault(), e.redo(), !1
        }
      }(this)), this.editor.on("valuechanged", function(e) {
        return function(t, n) {
          if (n === "undo" || n === "redo") return;
          return e._timer && (clearTimeout(e._timer), e._timer = null), e._timer = setTimeout(function() {
            return e._pushUndoState(), e._timer = null
          }, 200)
        }
      }(this))
    }, n.prototype._pushUndoState = function() {
      var e, t;
      if (this.editor.triggerHandler("pushundostate") === !1) return;
      e = this.currentState(), t = this.editor.body.html();
      if (e && e.html === t) return;
      this._index += 1, this._stack.length = this._index, this._stack.push({
        html: t,
        caret: this.caretPosition()
      });
      if (this._stack.length > this._capacity) return this._stack.shift(), this._index -= 1
    }, n.prototype.currentState = function() {
      return this._stack.length && this._index > -1 ? this._stack[this._index] : null
    }, n.prototype.undo = function() {
      var e;
      if (this._index < 1 || this._stack.length < 2) return;
      return this.editor.hidePopover(), this._index -= 1, e = this._stack[this._index], this.editor.body.html(e.html), this.caretPosition(e.caret), this.editor.body.find(".selected").removeClass("selected"), this.editor.sync(), this.editor.trigger("valuechanged", ["undo"])
    }, n.prototype.redo = function() {
      var e;
      if (this._index < 0 || this._stack.length < this._index + 2) return;
      return this.editor.hidePopover(), this._index += 1, e = this._stack[this._index], this.editor.body.html(e.html), this.caretPosition(e.caret), this.editor.body.find(".selected").removeClass("selected"), this.editor.sync(), this.editor.trigger("valuechanged", ["redo"])
    }, n.prototype.update = function() {
      var e, t;
      if (this._timer) return;
      e = this.currentState();
      if (!e) return;
      return t = this.editor.body.html(), e.html = t, e.caret = this.caretPosition()
    }, n.prototype._getNodeOffset = function(t, n) {
      var r, i, s;
      return n ? r = e(t) : r = e(t).parent(), s = 0, i = !1, r.contents().each(function(e) {
        return function(e, r) {
          return n === e || t === r ? !1 : (r.nodeType === 3 ? i || (s += 1, i = !0) : (s += 1, i = !1), null)
        }
      }(this)), s
    }, n.prototype._getNodePosition = function(e, t) {
      var n, r;
      if (e.nodeType === 3) {
        r = e.previousSibling;
        while (r && r.nodeType === 3) e = r, t += this.editor.util.getNodeLength(r), r = r.previousSibling
      } else t = this._getNodeOffset(e, t);
      return n = [], n.unshift(t), this.editor.util.traverseUp(function(e) {
        return function(t) {
          return n.unshift(e._getNodeOffset(t))
        }
      }(this), e), n
    }, n.prototype._getNodeByPosition = function(t) {
      var n, r, i, s, o, u, a, f;
      u = this.editor.body[0], f = t.slice(0, t.length - 1);
      for (i = s = 0, o = f.length; s < o; i = ++s) {
        a = f[i], r = u.childNodes;
        if (a > r.length - 1) {
          if (i !== t.length - 2 || !e(u).is("pre")) {
            u = null;
            break
          }
          n = document.createTextNode(""), u.appendChild(n), r = u.childNodes
        }
        u = r[a]
      }
      return u
    }, n.prototype.caretPosition = function(e) {
      var t, n, r, i, s;
      if (!e) return r = this.editor.selection.getRange(), !this.editor.inputManager.focused || r == null ? {} : (e = {
        start: [],
        end: null,
        collapsed: !0
      }, e.start = this._getNodePosition(r.startContainer, r.startOffset), r.collapsed || (e.end = this._getNodePosition(r.endContainer, r.endOffset), e.collapsed = !1), e);
      this.editor.inputManager.focused || this.editor.body.focus();
      if (!e.start) {
        this.editor.body.blur();
        return
      }
      i = this._getNodeByPosition(e.start), s = e.start[e.start.length - 1], e.collapsed ? (t = i, n = s) : (t = this._getNodeByPosition(e.end), n = e.start[e.start.length - 1]);
      if (!i || !t) throw new Error("simditor: invalid caret state");
      return r = document.createRange(), r.setStart(i, s), r.setEnd(t, n), this.editor.selection.selectRange(r)
    }, n
  }(t), H = function(t) {
    function n() {
      return n.__super__.constructor.apply(this, arguments)
    }
    return B(n, t), n.pluginName = "Util", n.prototype._init = function() {
      this.editor = this._module;
      if (this.browser.msie && this.browser.version < 11) return this.phBr = ""
    }, n.prototype.phBr = "<br/>", n.prototype.os = function() {
      var e;
      return e = {}, /Mac/.test(navigator.appVersion) ? e.mac = !0 : /Linux/.test(navigator.appVersion) ? e.linux = !0 : /Win/.test(navigator.appVersion) ? e.win = !0 : /X11/.test(navigator.appVersion) && (e.unix = !0), /Mobi/.test(navigator.appVersion) && (e.mobile = !0), e
    }(), n.prototype.browser = function() {
      var e, t, n, r, i, s, o, u, a;
      return a = navigator.userAgent, n = /(msie|trident)/i.test(a), e = /chrome|crios/i.test(a), u = /safari/i.test(a) && !e, t = /firefox/i.test(a), n ? {
        msie: !0,
        version: ((r = a.match(/(msie |rv:)(\d+(\.\d+)?)/i)) != null ? r[2] : void 0) * 1
      } : e ? {
        webkit: !0,
        chrome: !0,
        version: ((i = a.match(/(?:chrome|crios)\/(\d+(\.\d+)?)/i)) != null ? i[1] : void 0) * 1
      } : u ? {
        webkit: !0,
        safari: !0,
        version: ((s = a.match(/version\/(\d+(\.\d+)?)/i)) != null ? s[1] : void 0) * 1
      } : t ? {
        mozilla: !0,
        firefox: !0,
        version: ((o = a.match(/firefox\/(\d+(\.\d+)?)/i)) != null ? o[1] : void 0) * 1
      } : {}
    }(), n.prototype.support = function() {
      return {
        onselectionchange: function() {
          var e, t;
          t = document.onselectionchange;
          if (t !== void 0) try {
            return document.onselectionchange = 0, document.onselectionchange === null
          } catch (n) {
            e = n
          } finally {
            document.onselectionchange = t
          }
          return !1
        }(),
        oninput: function() {
          return !/(msie|trident)/i.test(navigator.userAgent)
        }()
      }
    }(), n.prototype.reflow = function(t) {
      return t == null && (t = document), e(t)[0].offsetHeight
    }, n.prototype.metaKey = function(e) {
      var t;
      return t = /Mac/.test(navigator.userAgent), t ? e.metaKey : e.ctrlKey
    }, n.prototype.isEmptyNode = function(t) {
      var n;
      return n = e(t), n.is(":empty") || !n.text() && !n.find(":not(br, span, div)").length
    }, n.prototype.blockNodes = ["div", "p", "ul", "ol", "li", "blockquote", "hr", "pre", "h1", "h2", "h3", "h4", "table"], n.prototype.isBlockNode = function(t) {
      return t = e(t)[0], !t || t.nodeType === 3 ? !1 : (new RegExp("^(" + this.blockNodes.join("|") + ")$")).test(t.nodeName.toLowerCase())
    }, n.prototype.closestBlockEl = function(t) {
      var n, r, i;
      return t == null && (i = this.editor.selection.getRange(), t = i != null ? i.commonAncestorContainer : void 0), n = e(t), n.length ? (r = n.parentsUntil(this.editor.body).addBack(), r = r.filter(function(e) {
        return function(t) {
          return e.isBlockNode(r.eq(t))
        }
      }(this)), r.length ? r.last() : null) : null
    }, n.prototype.furthestNode = function(t, n) {
      var r, i, s;
      return t == null && (s = this.editor.selection.getRange(), t = s != null ? s.commonAncestorContainer : void 0), r = e(t), r.length ? (i = r.parentsUntil(this.editor.body).addBack(), i = i.filter(function(t) {
        var r;
        return r = i.eq(t), e.isFunction(n) ? n(r) : r.is(n)
      }), i.length ? i.first() : null) : null
    }, n.prototype.furthestBlockEl = function(t) {
      return this.furthestNode(t, e.proxy(this.isBlockNode, this))
    }, n.prototype.getNodeLength = function(e) {
      switch (e.nodeType) {
        case 7:
        case 10:
          return 0;
        case 3:
        case 8:
          return e.length;
        default:
          return e.childNodes.length
      }
    }, n.prototype.traverseUp = function(t, n) {
      var r, i, s, o, u, a, f;
      n == null && (u = this.editor.selection.getRange(), n = u != null ? u.commonAncestorContainer : void 0);
      if (n == null || !e.contains(this.editor.body[0], n)) return !1;
      o = e(n).parentsUntil(this.editor.body).get(), o.unshift(n), f = [];
      for (r = 0, i = o.length; r < i; r++) {
        s = o[r], a = t(s);
        if (a === !1) break;
        f.push(void 0)
      }
      return f
    }, n.prototype.dataURLtoBlob = function(e) {
      var t, n, r, i, s, o, u, a, f, l, c, h, p;
      u = window.Blob && function() {
        var e;
        try {
          return Boolean(new Blob)
        } catch (t) {
          return e = t, !1
        }
      }(), o = u && window.Uint8Array && function() {
        var e;
        try {
          return (new Blob([new Uint8Array(100)])).size === 100
        } catch (t) {
          return e = t, !1
        }
      }(), t = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder, p = u || t;
      if (!(p && window.atob && window.ArrayBuffer && window.Uint8Array)) return !1;
      e.split(",")[0].indexOf("base64") >= 0 ? s = atob(e.split(",")[1]) : s = decodeURIComponent(e.split(",")[1]), n = new ArrayBuffer(s.length), f = new Uint8Array(n);
      for (a = l = 0, h = s.length; 0 <= h ? l <= h : l >= h; a = 0 <= h ? ++l : --l) f[a] = s.charCodeAt(a);
      return c = e.split(",")[0].split(":")[1].split(";")[0], u ? (i = o ? f : n, new Blob(i, {
        type: c
      })) : (r = new t, r.append(n), r.getBlob(c))
    }, n.prototype.throttle = function(e, t) {
      var n, r, i;
      return n = null, r = 0, i = function() {
          if (n) return clearTimeout(n), n = null
        },
        function() {
          var s, o, u, a;
          return o = Date.now(), r || (r = o), u = t - (o - r), a = null, 0 < u && u < t ? (r = o, i(), s = arguments, n = setTimeout(function() {
            return r = 0, n = null, a = e.apply(null, s)
          }, t)) : (i(), r !== o && (r = 0), a = e.apply(null, arguments)), a
        }
    }, n.prototype.formatHTML = function(t) {
      var n, r, i, s, o, u, a, f, l;
      u = /<(\/?)(.+?)(\/?)>/g, f = "", s = 0, i = null, r = "  ", a = function(e, t) {
        return (new Array(t + 1)).join(e)
      };
      while ((o = u.exec(t)) !== null) o.isBlockNode = e.inArray(o[2], this.blockNodes) > -1, o.isStartTag = o[1] !== "/" && o[3] !== "/", o.isEndTag = o[1] === "/" || o[3] === "/", n = i ? i.index + i[0].length : 0, (l = t.substring(n, o.index)).length > 0 && e.trim(l) && (f += l), o.isBlockNode && o.isEndTag && !o.isStartTag && (s -= 1), o.isBlockNode && o.isStartTag && (i && i.isBlockNode && i.isEndTag || (f += "\n"), f += a(r, s)), f += o[0], o.isBlockNode && o.isEndTag && (f += "\n"), o.isBlockNode && o.isStartTag && (s += 1), i = o;
      return e.trim(f)
    }, n
  }(t), M = function(t) {
    function n() {
      return n.__super__.constructor.apply(this, arguments)
    }
    return B(n, t), n.pluginName = "Toolbar", n.prototype.opts = {
      toolbar: !0,
      toolbarFloat: !0,
      toolbarHidden: !1,
      toolbarFloatOffset: 0
    }, n.prototype._tpl = {
      wrapper: '<div class="simditor-toolbar"><ul></ul></div>',
      separator: '<li><span class="separator"></span></li>'
    }, n.prototype._init = function() {
      var t;
      this.editor = this._module;
      if (!this.opts.toolbar) return;
      return e.isArray(this.opts.toolbar) || (this.opts.toolbar = ["bold", "italic", "underline", "strikethrough", "|", "ol", "ul", "blockquote", "code", "|", "link", "image", "|", "indent", "outdent"]), this._render(), this.list.on("click", function(e) {
        return function(e) {
          return !1
        }
      }(this)), this.wrapper.on("mousedown", function(e) {
        return function(t) {
          return e.list.find(".menu-on").removeClass(".menu-on")
        }
      }(this)), e(document).on("mousedown.simditor" + this.editor.id, function(e) {
        return function(t) {
          return e.list.find(".menu-on").removeClass(".menu-on")
        }
      }(this)), !this.opts.toolbarHidden && this.opts.toolbarFloat && (this.wrapper.css("top", this.opts.toolbarFloatOffset), t = 0, e(window).on("resize.simditor-" + this.editor.id, function(e) {
        return function(n) {
          return e.wrapper.css("position", "static"), e.wrapper.width("auto"), e.editor.util.reflow(e.wrapper), e.wrapper.width(e.wrapper.outerWidth()), e.wrapper.css("left", e.wrapper.offset().left), e.wrapper.css("position", ""), t = e.wrapper.outerHeight(), e.editor.placeholderEl.css("top", t)
        }
      }(this)).resize(), e(window).on("scroll.simditor-" + this.editor.id, function(n) {
        return function(r) {
          var i, s, o;
          o = n.editor.wrapper.offset().top, i = o + n.editor.wrapper.outerHeight() - 80, s = e(document).scrollTop() + n.opts.toolbarFloatOffset;
          if (s <= o || s >= i) {
            n.editor.wrapper.removeClass("toolbar-floating").css("padding-top", "");
            if (n.editor.util.os.mobile) return n.wrapper.css("top", n.opts.toolbarFloatOffset)
          } else {
            n.editor.wrapper.addClass("toolbar-floating").css("padding-top", t);
            if (n.editor.util.os.mobile) return n.wrapper.css("top", s - o + n.opts.toolbarFloatOffset)
          }
        }
      }(this))), this.editor.on("selectionchanged", function(e) {
        return function() {
          return e.toolbarStatus()
        }
      }(this)), this.editor.on("destroy", function(e) {
        return function() {
          return e.buttons.length = 0
        }
      }(this)), e(document).on("mousedown.simditor-" + this.editor.id, function(e) {
        return function(t) {
          return e.list.find("li.menu-on").removeClass("menu-on")
        }
      }(this))
    }, n.prototype._render = function() {
      var t, n, r, i;
      this.buttons = [], this.wrapper = e(this._tpl.wrapper).prependTo(this.editor.wrapper), this.list = this.wrapper.find("ul"), i = this.opts.toolbar;
      for (t = 0, n = i.length; t < n; t++) {
        r = i[t];
        if (r === "|") {
          e(this._tpl.separator).appendTo(this.list);
          continue
        }
        if (!this.constructor.buttons[r]) throw new Error('simditor: invalid toolbar button "' + r + '"');
        this.buttons.push(new this.constructor.buttons[r]({
          editor: this.editor
        }))
      }
      if (this.opts.toolbarHidden) return this.wrapper.hide()
    }, n.prototype.toolbarStatus = function(t) {
      var n;
      if (!this.editor.inputManager.focused) return;
      return n = this.buttons.slice(0), this.editor.util.traverseUp(function(r) {
        return function(r) {
          var i, s, o, u, a, f, l;
          l = [];
          for (s = o = 0, a = n.length; o < a; s = ++o) {
            i = n[s];
            if (t != null && i.name !== t) continue;
            (!i.status || i.status(e(r)) === !0) && l.push(i)
          }
          for (u = 0, f = l.length; u < f; u++) i = l[u], s = e.inArray(i, n), n.splice(s, 1);
          if (n.length === 0) return !1
        }
      }(this))
    }, n.prototype.findButton = function(e) {
      var t;
      return t = this.list.find(".toolbar-item-" + e).data("button"), t != null ? t : null
    }, n.addButton = function(e) {
      return this.buttons[e.prototype.name] = e
    }, n.buttons = {}, n
  }(t), m = function(t) {
    function n() {
      return n.__super__.constructor.apply(this, arguments)
    }
    return B(n, t), n.pluginName = "Indentation", n.prototype.opts = {
      tabIndent: !0
    }, n.prototype._init = function() {
      return this.editor = this._module, this.editor.inputManager.addKeystrokeHandler("9", "*", function(e) {
        return function(t) {
          var n;
          n = e.editor.toolbar.findButton("code");
          if (!(e.opts.tabIndent || n && n.active)) return;
          return e.indent(t.shiftKey)
        }
      }(this))
    }, n.prototype.indent = function(e) {
      var t, n, r, i, s;
      i = this.editor.selection.getRange();
      if (!i) return;
      return r = this.editor.util.closestBlockEl(i.startContainer), n = this.editor.util.closestBlockEl(i.endContainer), r.is("li") && n.is("li") && r.parent().is(n.parent()) || (r = this.editor.util.furthestBlockEl(r), n = this.editor.util.furthestBlockEl(n)), r.is(n) ? t = r : t = r.nextUntil(n).add(r).add(n), s = !1, t.each(function(t) {
        return function(n, r) {
          return s = e ? t.outdentBlock(r) : t.indentBlock(r)
        }
      }(this)), s
    }, n.prototype.indentBlock = function(t) {
      var n, r, i, s, o, u, a, f, l, c, h;
      n = e(t);
      if (!n.length) return;
      if (n.is("pre")) {
        c = this.editor.selection.getRange(), u = e(c.commonAncestorContainer);
        if (!u.is(n) && !u.closest("pre").is(n)) return;
        this.indentText(c)
      } else if (n.is("li")) {
        o = n.prev("li");
        if (o.length < 1) return;
        this.editor.selection.save(), h = n.parent()[0].tagName, r = o.children("ul, ol"), r.length > 0 ? r.append(n) : e("<" + h + "/>").append(n).appendTo(o), this.editor.selection.restore()
      } else if (n.is("p, h1, h2, h3, h4")) l = parseInt(n.css("margin-left")) || 0, l = (Math.round(l / this.opts.indentWidth) + 1) * this.opts.indentWidth, n.css("margin-left", l);
      else if (n.is("table") || n.is(".simditor-table")) {
        c = this.editor.selection.getRange(), a = e(c.commonAncestorContainer).closest("td, th"), i = a.next("td, th"), i.length > 0 || (f = a.parent("tr"), s = f.next("tr"), s.length < 1 && f.parent().is("thead") && (s = f.parent("thead").next("tbody").find("tr:first")), i = s.find("td:first, th:first"));
        if (!(a.length > 0 && i.length > 0)) return !1;
        this.editor.selection.setRangeAtEndOf(i)
      }
      return !0
    }, n.prototype.indentText = function(e) {
      var t, n;
      return t = e.toString().replace(/^(?=.+)/mg, "  "), n = document.createTextNode(t || "  "), e.deleteContents(), e.insertNode(n), t ? (e.selectNode(n), this.editor.selection.selectRange(e)) : this.editor.selection.setRangeAfter(n)
    }, n.prototype.outdentBlock = function(t) {
      var n, r, i, s, o, u, a, f, l, c, h;
      n = e(t);
      if (!(n && n.length > 0)) return;
      if (n.is("pre")) {
        h = this.editor.selection.getRange(), s = e(h.commonAncestorContainer);
        if (!s.is(n) && !s.closest("pre").is(n)) return;
        this.outdentText(h)
      } else if (n.is("li")) {
        r = n.parent(), i = r.parent("li");
        if (i.length < 1) {
          l = this.editor.toolbar.findButton(r[0].tagName.toLowerCase()), l != null && l.command();
          return
        }
        this.editor.selection.save(), n.next("li").length > 0 && e("<" + r[0].tagName + "/>").append(n.nextAll("li")).appendTo(n), n.insertAfter(i), r.children("li").length < 1 && r.remove(), this.editor.selection.restore()
      } else if (n.is("p, h1, h2, h3, h4")) c = parseInt(n.css("margin-left")) || 0, c = Math.max(Math.round(c / this.opts.indentWidth) - 1, 0) * this.opts.indentWidth, n.css("margin-left", c === 0 ? "" : c);
      else if (n.is("table") || n.is(".simditor-table")) {
        h = this.editor.selection.getRange(), a = e(h.commonAncestorContainer).closest("td, th"), o = a.prev("td, th"), o.length > 0 || (f = a.parent("tr"), u = f.prev("tr"), u.length < 1 && f.parent().is("tbody") && (u = f.parent("tbody").prev("thead").find("tr:first")), o = u.find("td:last, th:last"));
        if (!(a.length > 0 && o.length > 0)) return;
        this.editor.selection.setRangeAtEndOf(o)
      }
      return !0
    }, n.prototype.outdentText = function(e) {}, n
  }(t), k = function(t) {
    function n() {
      return n.__super__.constructor.apply(this, arguments)
    }
    return B(n, t), n.connect(H), n.connect(g), n.connect(D), n.connect(b), n.connect(c), n.connect(C), n.connect(M), n.connect(m), n.count = 0, n.prototype.opts = {
      textarea: null,
      placeholder: "",
      defaultImage: "images/image.png",
      params: {},
      upload: !1,
      indentWidth: 40
    }, n.prototype._init = function() {
      var t, i, s, o;
      this.textarea = e(this.opts.textarea), this.opts.placeholder = this.opts.placeholder || this.textarea.attr("placeholder");
      if (!this.textarea.length) throw new Error("simditor: param textarea is required.");
      i = this.textarea.data("simditor"), i != null && i.destroy(), this.id = ++n.count, this._render(), this.opts.upload && r && (o = typeof this.opts.upload == "object" ? this.opts.upload : {}, this.uploader = r(o)), s = this.textarea.closest("form"), s.length && (s.on("submit.simditor-" + this.id, function(e) {
        return function() {
          return e.sync()
        }
      }(this)), s.on("reset.simditor-" + this.id, function(e) {
        return function() {
          return e.setValue("")
        }
      }(this))), this.on("initialized", function(e) {
        return function() {
          return e.opts.placeholder && e.on("valuechanged", function() {
            return e._placeholder()
          }), e.setValue(e.textarea.val().trim() || "")
        }
      }(this));
      if (this.util.browser.mozilla) {
        this.util.reflow();
        try {
          return document.execCommand("enableObjectResizing", !1, !1), document.execCommand("enableInlineTableEditing", !1, !1)
        } catch (u) {
          t = u
        }
      }
    }, n.prototype._tpl = '<div class="simditor">\n  <div class="simditor-wrapper">\n    <div class="simditor-placeholder"></div>\n    <div class="simditor-body" contenteditable="true">\n    </div>\n  </div>\n</div>', n.prototype._render = function() {
      var t, n, r, i;
      this.el = e(this._tpl).insertBefore(this.textarea), this.wrapper = this.el.find(".simditor-wrapper"), this.body = this.wrapper.find(".simditor-body"), this.placeholderEl = this.wrapper.find(".simditor-placeholder").append(this.opts.placeholder), this.el.data("simditor", this), this.wrapper.append(this.textarea), this.textarea.data("simditor", this).blur(), this.body.attr("tabindex", this.textarea.attr("tabindex")), this.util.os.mac ? this.el.addClass("simditor-mac") : this.util.os.linux && this.el.addClass("simditor-linux"), this.util.os.mobile && this.el.addClass("simditor-mobile");
      if (this.opts.params) {
        n = this.opts.params, r = [];
        for (t in n) i = n[t], r.push(e("<input/>", {
          type: "hidden",
          name: t,
          value: i
        }).insertAfter(this.textarea));
        return r
      }
    }, n.prototype._placeholder = function() {
      var e;
      return e = this.body.children(), e.length === 0 || e.length === 1 && this.util.isEmptyNode(e) && parseInt(e.css("margin-left") || 0) < this.opts.indentWidth ? this.placeholderEl.show() : this.placeholderEl.hide()
    }, n.prototype.setValue = function(e) {
      return this.hidePopover(), this.textarea.val(e), this.body.html(e), this.formatter.format(), this.formatter.decorate(), this.util.reflow(this.body), this.inputManager.lastCaretPosition = null, this.trigger("valuechanged")
    }, n.prototype.getValue = function() {
      return this.sync()
    }, n.prototype.sync = function() {
      var t, n, r, i, s, o;
      n = this.body.clone(), this.formatter.undecorate(n), this.formatter.format(n), this.formatter.autolink(n), t = n.children(), s = t.last("p"), i = t.first("p");
      while (s.is("p") && this.util.isEmptyNode(s)) r = s, s = s.prev("p"), r.remove();
      while (i.is("p") && this.util.isEmptyNode(i)) r = i, i = s.next("p"), r.remove();
      return n.find("img.uploading").remove(), o = e.trim(n.html()), this.textarea.val(o), o
    }, n.prototype.focus = function() {
      var t, n;
      if (!this.body.is(":visible") || !this.body.is("[contenteditable]")) {
        this.el.find("textarea:visible").focus();
        return
      }
      return this.inputManager.lastCaretPosition ? this.undoManager.caretPosition(this.inputManager.lastCaretPosition) : (t = this.body.find("p").last(), t.length > 0 || (t = e("<p/>").append(this.util.phBr).appendTo(this.body)), n = document.createRange(), this.selection.setRangeAtEndOf(t, n), this.body.focus())
    }, n.prototype.blur = function() {
      return this.body.is(":visible") && this.body.is("[contenteditable]") ? this.body.blur() : this.body.find("textarea:visible").blur()
    }, n.prototype.hidePopover = function() {
      return this.el.find(".simditor-popover").each(function(t, n) {
        n = e(n).data("popover");
        if (n.active) return n.hide()
      })
    }, n.prototype.destroy = function() {
      return this.triggerHandler("destroy"), this.textarea.closest("form").off(".simditor .simditor-" + this.id), this.selection.clear(), this.inputManager.focused = !1, this.textarea.insertBefore(this.el).hide().val("").removeData("simditor"), this.el.remove(), e(document).off(".simditor-" + this.id), e(window).off(".simditor-" + this.id), this.off()
    }, n
  }(t), k.i18n = {
    "zh-CN": {
      blockquote: "引用",
      bold: "加粗文字",
      code: "插入代码",
      color: "文字颜色",
      hr: "分隔线",
      image: "插入图片",
      externalImage: "外链图片",
      uploadImage: "上传图片",
      uploadFailed: "上传失败了",
      uploadError: "上传出错了",
      imageUrl: "图片地址",
      imageSize: "图片尺寸",
      imageAlt: "图片描述",
      restoreImageSize: "还原图片尺寸",
      uploading: "正在上传",
      indent: "向右缩进",
      outdent: "向左缩进",
      italic: "斜体文字",
      link: "插入链接",
      text: "文本",
      linkText: "链接文字",
      linkUrl: "地址",
      removeLink: "移除链接",
      ol: "有序列表",
      ul: "无序列表",
      strikethrough: "删除线文字",
      table: "表格",
      deleteRow: "删除行",
      insertRowAbove: "在上面插入行",
      insertRowBelow: "在下面插入行",
      deleteColumn: "删除列",
      insertColumnLeft: "在左边插入列",
      insertColumnRight: "在右边插入列",
      deleteTable: "删除表格",
      title: "标题",
      normalText: "普通文本",
      underline: "下划线文字",
      alignment: "水平对齐",
      alignCenter: "居中",
      alignLeft: "居左",
      alignRight: "居右",
      selectLanguage: "选择程序语言"
    }
  }, u = function(t) {
    function n(e) {
      this.editor = e.editor, this.title = this._t(this.name), n.__super__.constructor.call(this, e)
    }
    return B(n, t), n.prototype._tpl = {
      item: '<li><a tabindex="-1" unselectable="on" class="toolbar-item" href="javascript:;"><span></span></a></li>',
      menuWrapper: '<div class="toolbar-menu"></div>',
      menuItem: '<li><a tabindex="-1" unselectable="on" class="menu-item" href="javascript:;"><span></span></a></li>',
      separator: '<li><span class="separator"></span></li>'
    }, n.prototype.name = "", n.prototype.icon = "", n.prototype.title = "", n.prototype.text = "", n.prototype.htmlTag = "", n.prototype.disableTag = "", n.prototype.menu = !1, n.prototype.active = !1, n.prototype.disabled = !1, n.prototype.needFocus = !0, n.prototype.shortcut = null, n.prototype._init = function() {
      var t, n, r, i, s;
      this.render(), this.el.on("mousedown", function(e) {
        return function(t) {
          var n, r;
          return t.preventDefault(), e.el.hasClass("disabled") || e.needFocus && !e.editor.inputManager.focused ? !1 : e.menu ? (e.wrapper.toggleClass("menu-on").siblings("li").removeClass("menu-on"), e.wrapper.is(".menu-on") && (n = e.menuWrapper.offset().left + e.menuWrapper.outerWidth() + 5 - e.editor.wrapper.offset().left - e.editor.wrapper.outerWidth(), n > 0 && e.menuWrapper.css({
            left: "auto",
            right: 0
          }), e.trigger("menuexpand")), !1) : (r = e.el.data("param"), e.command(r), !1)
        }
      }(this)), this.wrapper.on("click", "a.menu-item", function(t) {
        return function(n) {
          var r, i;
          return n.preventDefault(), r = e(n.currentTarget), t.wrapper.removeClass("menu-on"), r.hasClass("disabled") || t.needFocus && !t.editor.inputManager.focused ? !1 : (t.editor.toolbar.wrapper.removeClass("menu-on"), i = r.data("param"), t.command(i), !1)
        }
      }(this)), this.wrapper.on("mousedown", "a.menu-item", function(e) {
        return function(e) {
          return !1
        }
      }(this)), this.editor.on("blur", function(e) {
        return function() {
          if (!e.editor.body.is(":visible") || !e.editor.body.is("[contenteditable]")) return;
          return e.setActive(!1), e.setDisabled(!1)
        }
      }(this)), this.shortcut != null && this.editor.inputManager.addShortcut(this.shortcut, function(e) {
        return function(t) {
          return e.el.mousedown(), !1
        }
      }(this)), r = this.htmlTag.split(","), i = [];
      for (t = 0, n = r.length; t < n; t++) s = r[t], s = e.trim(s), s && e.inArray(s, this.editor.formatter._allowedTags) < 0 ? i.push(this.editor.formatter._allowedTags.push(s)) : i.push(void 0);
      return i
    }, n.prototype.iconClassOf = function(e) {
      return e ? "simditor-icon simditor-icon-" + e : ""
    }, n.prototype.setIcon = function(e) {
      return this.el.find("span").removeClass().addClass(this.iconClassOf(e)).text(this.text)
    }, n.prototype.render = function() {
      this.wrapper = e(this._tpl.item).appendTo(this.editor.toolbar.list), this.el = this.wrapper.find("a.toolbar-item"), this.el.attr("title", this.title).addClass("toolbar-item-" + this.name).data("button", this), this.setIcon(this.icon);
      if (!this.menu) return;
      return this.menuWrapper = e(this._tpl.menuWrapper).appendTo(this.wrapper), this.menuWrapper.addClass("toolbar-menu-" + this.name), this.renderMenu()
    }, n.prototype.renderMenu = function() {
      var t, n, r, i, s, o, u, a;
      if (!e.isArray(this.menu)) return;
      this.menuEl = e("<ul/>").appendTo(this.menuWrapper), o = this.menu, a = [];
      for (r = 0, i = o.length; r < i; r++) {
        s = o[r];
        if (s === "|") {
          e(this._tpl.separator).appendTo(this.menuEl);
          continue
        }
        n = e(this._tpl.menuItem).appendTo(this.menuEl), t = n.find("a.menu-item").attr({
          title: (u = s.title) != null ? u : s.text,
          "data-param": s.param
        }).addClass("menu-item-" + s.name), s.icon ? a.push(t.find("span").addClass(this.iconClassOf(s.icon))) : a.push(t.find("span").text(s.text))
      }
      return a
    }, n.prototype.setActive = function(e) {
      if (e === this.active) return;
      return this.active = e, this.el.toggleClass("active", this.active), this.editor.toolbar.trigger("buttonstatus", [this])
    }, n.prototype.setDisabled = function(e) {
      if (e === this.disabled) return;
      return this.disabled = e, this.el.toggleClass("disabled", this.disabled), this.editor.toolbar.trigger("buttonstatus", [this])
    }, n.prototype.status = function(e) {
      return e != null && this.setDisabled(e.is(this.disableTag)), this.disabled ? !0 : (e != null && this.setActive(e.is(this.htmlTag)), this.active)
    }, n.prototype.command = function(e) {}, n.prototype._t = function() {
      var e, t, r;
      return e = 1 <= arguments.length ? I.call(arguments, 0) : [], r = n.__super__._t.apply(this, e), r || (r = (t = this.editor)._t.apply(t, e)), r
    }, n
  }(t), k.Button = u, N = function(t) {
    function n(e) {
      this.button = e.button, this.editor = e.button.editor, n.__super__.constructor.call(this, e)
    }
    return B(n, t), n.prototype.offset = {
      top: 4,
      left: 0
    }, n.prototype.target = null, n.prototype.active = !1, n.prototype._init = function() {
      return this.el = e('<div class="simditor-popover"></div>').appendTo(this.editor.el).data("popover", this), this.render(), this.el.on("mouseenter", function(e) {
        return function(t) {
          return e.el.addClass("hover")
        }
      }(this)), this.el.on("mouseleave", function(e) {
        return function(t) {
          return e.el.removeClass("hover")
        }
      }(this))
    }, n.prototype.render = function() {}, n.prototype.show = function(t, n) {
      n == null && (n = "bottom");
      if (t == null) return;
      return this.el.siblings(".simditor-popover").each(function(t) {
        return function(t, n) {
          n = e(n).data("popover");
          if (n.active) return n.hide()
        }
      }(this)), this.active && this.target && this.target.removeClass("selected"), this.target = t.addClass("selected"), this.active ? (this.refresh(n), this.trigger("popovershow")) : (this.active = !0, this.el.css({
        left: -9999
      }).show(), setTimeout(function(e) {
        return function() {
          return e.refresh(n), e.trigger("popovershow")
        }
      }(this), 0))
    }, n.prototype.hide = function() {
      if (!this.active) return;
      return this.target && this.target.removeClass("selected"), this.target = null, this.active = !1, this.el.hide(), this.trigger("popoverhide")
    }, n.prototype.refresh = function(e) {
      var t, n, r, i, s;
      e == null && (e = "bottom");
      if (!this.active) return;
      return t = this.editor.el.offset(), i = this.target.offset(), r = this.target.outerHeight(), e === "bottom" ? s = i.top - t.top + r : e === "top" && (s = i.top - t.top - this.el.height()), n = Math.min(i.left - t.left, this.editor.wrapper.width() - this.el.outerWidth() - 10), this.el.css({
        top: s + this.offset.top,
        left: n + this.offset.left
      })
    }, n.prototype.destroy = function() {
      return this.target = null, this.active = !1, this.editor.off(".linkpopover"), this.el.remove()
    }, n.prototype._t = function() {
      var e, t, r;
      return e = 1 <= arguments.length ? I.call(arguments, 0) : [], r = n.__super__._t.apply(this, e), r || (r = (t = this.button)._t.apply(t, e)), r
    }, n
  }(t), k.Popover = N, O = function(t) {
    function n() {
      return n.__super__.constructor.apply(this, arguments)
    }
    return B(n, t), n.prototype.name = "title", n.prototype.htmlTag = "h1, h2, h3, h4", n.prototype.disableTag = "pre, table", n.prototype._init = function() {
      return this.menu = [{
        name: "normal",
        text: this._t("normalText"),
        param: "p"
      }, "|", {
        name: "h1",
        text: this._t("title") + " 1",
        param: "h1"
      }, {
        name: "h2",
        text: this._t("title") + " 2",
        param: "h2"
      }, {
        name: "h3",
        text: this._t("title") + " 3",
        param: "h3"
      }, {
        name: "h4",
        text: this._t("title") + " 4",
        param: "h4"
      }, {
        name: "h5",
        text: this._t("title") + " 5",
        param: "h5"
      }], n.__super__._init.call(this)
    }, n.prototype.setActive = function(e, t) {
      n.__super__.setActive.call(this, e), this.el.removeClass("active-p active-h1 active-h2 active-h3");
      if (e) return this.el.addClass("active active-" + t)
    }, n.prototype.status = function(e) {
      var t, n;
      return e != null && this.setDisabled(e.is(this.disableTag)), this.disabled ? !0 : (e != null && (t = (n = e[0].tagName) != null ? n.toLowerCase() : void 0, this.setActive(e.is(this.htmlTag), t)), this.active)
    }, n.prototype.command = function(t) {
      var n, r, i, s, o, u, a, f, l, c, h;
      f = this.editor.selection.getRange(), h = f.startContainer, s = f.endContainer, i = this.editor.util.closestBlockEl(h), r = this.editor.util.closestBlockEl(s), this.editor.selection.save(), f.setStartBefore(i[0]), f.setEndAfter(r[0]), n = e(f.extractContents()), c = [], n.children().each(function(e) {
        return function(n, r) {
          var i, s, o, u, a;
          s = e._convertEl(r, t), a = [];
          for (o = 0, u = s.length; o < u; o++) i = s[o], a.push(c.push(i));
          return a
        }
      }(this)), l = c.reverse();
      for (o = 0, u = l.length; o < u; o++) a = l[o], f.insertNode(a[0]);
      return this.editor.selection.restore(), this.editor.trigger("valuechanged")
    }, n.prototype._convertEl = function(t, n) {
      var r, i, s;
      return i = e(t), s = [], i.is(n) ? s.push(i) : (r = e("<" + n + "/>").append(i.contents()), s.push(r)), s
    }, n
  }(u), k.Toolbar.addButton(O), o = function(t) {
    function n() {
      return n.__super__.constructor.apply(this, arguments)
    }
    return B(n, t), n.prototype.name = "bold", n.prototype.icon = "bold", n.prototype.htmlTag = "b, strong", n.prototype.disableTag = "pre", n.prototype.shortcut = "cmd+b", n.prototype._init = function() {
      return this.editor.util.os.mac ? this.title = this.title + " ( Cmd + b )" : (this.title = this.title + " ( Ctrl + b )", this.shortcut = "ctrl+b"), n.__super__._init.call(this)
    }, n.prototype.status = function(e) {
      var t;
      return e != null && this.setDisabled(e.is(this.disableTag)), this.disabled ? !0 : (t = document.queryCommandState("bold") === !0, this.setActive(t), t)
    }, n.prototype.command = function() {
      return document.execCommand("bold"), this.editor.util.support.oninput || this.editor.trigger("valuechanged"), e(document).trigger("selectionchange")
    }, n
  }(u), k.Toolbar.addButton(o), y = function(t) {
    function n() {
      return n.__super__.constructor.apply(this, arguments)
    }
    return B(n, t), n.prototype.name = "italic", n.prototype.icon = "italic", n.prototype.htmlTag = "i", n.prototype.disableTag = "pre", n.prototype.shortcut = "cmd+i", n.prototype._init = function() {
      return this.editor.util.os.mac ? this.title = this.title + " ( Cmd + i )" : (this.title = this.title + " ( Ctrl + i )", this.shortcut = "ctrl+i"), n.__super__._init.call(this)
    }, n.prototype.status = function(e) {
      var t;
      return e != null && this.setDisabled(e.is(this.disableTag)), this.disabled ? this.disabled : (t = document.queryCommandState("italic") === !0, this.setActive(t), t)
    }, n.prototype.command = function() {
      return document.execCommand("italic"), this.editor.util.support.oninput || this.editor.trigger("valuechanged"), e(document).trigger("selectionchange")
    }, n
  }(u), k.Toolbar.addButton(y), _ = function(t) {
    function n() {
      return n.__super__.constructor.apply(this, arguments)
    }
    return B(n, t), n.prototype.name = "underline", n.prototype.icon = "underline", n.prototype.htmlTag = "u", n.prototype.disableTag = "pre", n.prototype.shortcut = "cmd+u", n.prototype.render = function() {
      return this.editor.util.os.mac ? this.title = this.title + " ( Cmd + u )" : (this.title = this.title + " ( Ctrl + u )", this.shortcut = "ctrl+u"), n.__super__.render.call(this)
    }, n.prototype.status = function(e) {
      var t;
      return e != null && this.setDisabled(e.is(this.disableTag)), this.disabled ? this.disabled : (t = document.queryCommandState("underline") === !0, this.setActive(t), t)
    }, n.prototype.command = function() {
      return document.execCommand("underline"), this.editor.util.support.oninput || this.editor.trigger("valuechanged"), e(document).trigger("selectionchange")
    }, n
  }(u), k.Toolbar.addButton(_), l = function(t) {
    function n() {
      return n.__super__.constructor.apply(this, arguments)
    }
    return B(n, t), n.prototype.name = "color", n.prototype.icon = "tint", n.prototype.disableTag = "pre", n.prototype.menu = !0, n.prototype.render = function() {
      var e;
      return e = 1 <= arguments.length ? I.call(arguments, 0) : [], n.__super__.render.apply(this, e)
    }, n.prototype.renderMenu = function() {
      return e('<ul class="color-list">\n  <li><a href="javascript:;" class="font-color font-color-1" data-color=""></a></li>\n  <li><a href="javascript:;" class="font-color font-color-2" data-color=""></a></li>\n  <li><a href="javascript:;" class="font-color font-color-3" data-color=""></a></li>\n  <li><a href="javascript:;" class="font-color font-color-4" data-color=""></a></li>\n  <li><a href="javascript:;" class="font-color font-color-5" data-color=""></a></li>\n  <li><a href="javascript:;" class="font-color font-color-6" data-color=""></a></li>\n  <li><a href="javascript:;" class="font-color font-color-7" data-color=""></a></li>\n  <li><a href="javascript:;" class="font-color font-color-default" data-color=""></a></li>\n</ul>').appendTo(this.menuWrapper), this.menuWrapper.on("mousedown", ".color-list", function(e) {
        return !1
      }), this.menuWrapper.on("click", ".font-color", function(t) {
        return function(n) {
          var r, i, s, o;
          t.wrapper.removeClass("menu-on"), r = e(n.currentTarget);
          if (r.hasClass("font-color-default")) {
            i = t.editor.body.find("p, li");
            if (!(i.length > 0)) return;
            o = window.getComputedStyle(i[0], null).getPropertyValue("color"), s = t._convertRgbToHex(o)
          } else o = window.getComputedStyle(r[0], null).getPropertyValue("background-color"), s = t._convertRgbToHex(o);
          if (!s) return;
          document.execCommand("foreColor", !1, s);
          if (!t.editor.util.support.oninput) return t.editor.trigger("valuechanged")
        }
      }(this))
    }, n.prototype._convertRgbToHex = function(e) {
      var t, n, r;
      return n = /rgb\((\d+),\s?(\d+),\s?(\d+)\)/g, t = n.exec(e), t ? (r = function(e, t, n) {
        var r;
        return r = function(e) {
          var t;
          return t = e.toString(16), t.length === 1 ? "0" + t : t
        }, "#" + r(e) + r(t) + r(n)
      }, r(t[1] * 1, t[2] * 1, t[3] * 1)) : ""
    }, n
  }(u), k.Toolbar.addButton(l), S = function(t) {
    function n() {
      return n.__super__.constructor.apply(this, arguments)
    }
    return B(n, t), n.prototype.type = "", n.prototype.disableTag = "pre, table", n.prototype.status = function(e) {
      var t;
      return e != null && this.setDisabled(e.is(this.disableTag)), this.disabled ? !0 : e == null ? this.active : (t = this.type === "ul" ? "ol" : "ul", e.is(t) ? (this.setActive(!1), !0) : (this.setActive(e.is(this.htmlTag)), this.active))
    }, n.prototype.command = function(t) {
      var n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y;
      d = this.editor.selection.getRange(), y = d.startContainer, f = d.endContainer, u = this.editor.util.closestBlockEl(y), r = this.editor.util.closestBlockEl(f), this.editor.selection.save(), d.setStartBefore(u[0]), d.setEndAfter(r[0]), u.is("li") && r.is("li") && (s = this.editor.util.furthestNode(u, "ul, ol"), i = this.editor.util.furthestNode(r, "ul, ol"), s.is(i) ? (l = function(e) {
        var t;
        t = 1;
        while (!e.parent().is(s)) t += 1, e = e.parent();
        return t
      }, g = l(u), a = l(r), g > a ? o = r.parent() : o = u.parent(), d.setStartBefore(o[0]), d.setEndAfter(o[0])) : (d.setStartBefore(s[0]), d.setEndAfter(i[0]))), n = e(d.extractContents()), m = [], n.children().each(function(e) {
        return function(t, n) {
          var r, i, s, o, u;
          i = e._convertEl(n), u = [];
          for (s = 0, o = i.length; s < o; s++) r = i[s], m.length && m[m.length - 1].is(e.type) && r.is(e.type) ? u.push(m[m.length - 1].append(r.children())) : u.push(m.push(r));
          return u
        }
      }(this)), v = m.reverse();
      for (c = 0, h = v.length; c < h; c++) p = v[c], d.insertNode(p[0]);
      return this.editor.selection.restore(), this.editor.trigger("valuechanged")
    }, n.prototype._convertEl = function(t) {
      var n, r, i, s, o, u, a, f, l;
      n = e(t), l = [], r = this.type === "ul" ? "ol" : "ul";
      if (n.is(this.type)) n.children("li").each(function(t) {
        return function(n, r) {
          var i, s, o;
          s = e(r), i = s.children("ul, ol").remove(), o = e("<p/>").append(e(r).html() || t.editor.util.phBr), l.push(o);
          if (i.length > 0) return l.push(i)
        }
      }(this));
      else if (n.is(r)) i = e("<" + this.type + "/>").append(n.html()), l.push(i);
      else if (n.is("blockquote")) {
        f = n.children().get();
        for (u = 0, a = f.length; u < a; u++) s = f[u], o = this._convertEl(s);
        e.merge(l, o)
      } else n.is("table") || (i = e("<" + this.type + "><li></li></" + this.type + ">"), i.find("li").append(n.html() || this.editor.util.phBr), l.push(i));
      return l
    }, n
  }(u), x = function(e) {
    function t() {
      return t.__super__.constructor.apply(this, arguments)
    }
    return B(t, e), t.prototype.type = "ol", t.prototype.name = "ol", t.prototype.icon = "list-ol", t.prototype.htmlTag = "ol", t.prototype.shortcut = "cmd+/", t.prototype._init = function() {
      return this.editor.util.os.mac ? this.title = this.title + " ( Cmd + / )" : (this.title = this.title + " ( ctrl + / )", this.shortcut = "ctrl+/"), t.__super__._init.call(this)
    }, t
  }(S), P = function(e) {
    function t() {
      return t.__super__.constructor.apply(this, arguments)
    }
    return B(t, e), t.prototype.type = "ul", t.prototype.name = "ul", t.prototype.icon = "list-ul", t.prototype.htmlTag = "ul", t.prototype.shortcut = "cmd+.", t.prototype._init = function() {
      return this.editor.util.os.mac ? this.title = this.title + " ( Cmd + . )" : (this.title = this.title + " ( Ctrl + . )", this.shortcut = "ctrl+."), t.__super__._init.call(this)
    }, t
  }(S), k.Toolbar.addButton(x), k.Toolbar.addButton(P), s = function(t) {
    function n() {
      return n.__super__.constructor.apply(this, arguments)
    }
    return B(n, t), n.prototype.name = "blockquote", n.prototype.icon = "quote-left", n.prototype.htmlTag = "blockquote", n.prototype.disableTag = "pre, table", n.prototype.command = function() {
      var t, n, r, i, s, o, u, a, f, l, c;
      a = this.editor.selection.getRange(), c = a.startContainer, i = a.endContainer, r = this.editor.util.furthestBlockEl(c), n = this.editor.util.furthestBlockEl(i), this.editor.selection.save(), a.setStartBefore(r[0]), a.setEndAfter(n[0]), t = e(a.extractContents()), l = [], t.children().each(function(e) {
        return function(t, n) {
          var r, i, s, o, u;
          i = e._convertEl(n), u = [];
          for (s = 0, o = i.length; s < o; s++) r = i[s], l.length && l[l.length - 1].is(e.htmlTag) && r.is(e.htmlTag) ? u.push(l[l.length - 1].append(r.children())) : u.push(l.push(r));
          return u
        }
      }(this)), f = l.reverse();
      for (s = 0, o = f.length; s < o; s++) u = f[s], a.insertNode(u[0]);
      return this.editor.selection.restore(), this.editor.trigger("valuechanged")
    }, n.prototype._convertEl = function(t) {
      var n, r, i;
      return n = e(t), i = [], n.is(this.htmlTag) ? n.children().each(function(t) {
        return function(t, n) {
          return i.push(e(n))
        }
      }(this)) : (r = e("<" + this.htmlTag + "/>").append(n), i.push(r)), i
    }, n
  }(u), k.Toolbar.addButton(s), a = function(t) {
    function n() {
      return n.__super__.constructor.apply(this, arguments)
    }
    return B(n, t), n.prototype.name = "code", n.prototype.icon = "code", n.prototype.htmlTag = "pre", n.prototype.disableTag = "li, table", n.prototype._init = function() {
      return n.__super__._init.call(this), this.editor.on("decorate", function(t) {
        return function(n, r) {
          return r.find("pre").each(function(n, r) {
            return t.decorate(e(r))
          })
        }
      }(this)), this.editor.on("undecorate", function(t) {
        return function(n, r) {
          return r.find("pre").each(function(n, r) {
            return t.undecorate(e(r))
          })
        }
      }(this))
    }, n.prototype.render = function() {
      var e;
      return e = 1 <= arguments.length ? I.call(arguments, 0) : [], n.__super__.render.apply(this, e), this.popover = new f({
        button: this
      })
    }, n.prototype.status = function(e) {
      var t;
      return t = n.__super__.status.call(this, e), this.active ? this.popover.show(e) : this.editor.util.isBlockNode(e) && this.popover.hide(), t
    }, n.prototype.decorate = function(e) {
      var t, n, r, i;
      t = e.find("> code");
      if (t.length > 0) {
        n = (r = t.attr("class")) != null ? (i = r.match(/lang-(\S+)/)) != null ? i[1] : void 0 : void 0, t.contents().unwrap();
        if (n) return e.attr("data-lang", n)
      }
    }, n.prototype.undecorate = function(t) {
      var n, r;
      return r = t.attr("data-lang"), n = e("<code/>"), r && r !== -1 && n.addClass("lang-" + r), t.wrapInner(n).removeAttr("data-lang")
    }, n.prototype.command = function() {
      var t, n, r, i, s, o, u, a, f, l, c;
      a = this.editor.selection.getRange(), c = a.startContainer, i = a.endContainer, r = this.editor.util.closestBlockEl(c), n = this.editor.util.closestBlockEl(i), a.setStartBefore(r[0]), a.setEndAfter(n[0]), t = e(a.extractContents()), l = [], t.children().each(function(e) {
        return function(t, n) {
          var r, i, s, o, u;
          i = e._convertEl(n), u = [];
          for (s = 0, o = i.length; s < o; s++) r = i[s], l.length && l[l.length - 1].is(e.htmlTag) && r.is(e.htmlTag) ? u.push(l[l.length - 1].append(r.contents())) : u.push(l.push(r));
          return u
        }
      }(this)), f = l.reverse();
      for (s = 0, o = f.length; s < o; s++) u = f[s], a.insertNode(u[0]);
      return this.editor.selection.setRangeAtEndOf(l[0]), this.editor.trigger("valuechanged")
    }, n.prototype._convertEl = function(t) {
      var n, r, i, s;
      return n = e(t), s = [], n.is(this.htmlTag) ? (r = e("<p/>").append(n.html().replace("\n", "<br/>")), s.push(r)) : (!n.text() && n.children().length === 1 && n.children().is("br") ? i = "\n" : i = this.editor.formatter.clearHtml(n), r = e("<" + this.htmlTag + "/>").text(i), s.push(r)), s
    }, n
  }(u), f = function(t) {
    function n() {
      return n.__super__.constructor.apply(this, arguments)
    }
    return B(n, t), n.prototype.render = function() {
      var t, n, r, i, s;
      this._tpl = '<div class="code-settings">\n  <div class="settings-field">\n    <select class="select-lang">\n      <option value="-1">' + this._t("selectLanguage") + "</option>\n    </select>\n  </div>\n</div>", this.langs = this.editor.opts.codeLanguages || [{
        name: "Bash",
        value: "bash"
      }, {
        name: "C++",
        value: "c++"
      }, {
        name: "C#",
        value: "cs"
      }, {
        name: "CSS",
        value: "css"
      }, {
        name: "Erlang",
        value: "erlang"
      }, {
        name: "Less",
        value: "less"
      }, {
        name: "Sass",
        value: "sass"
      }, {
        name: "Diff",
        value: "diff"
      }, {
        name: "CoffeeScript",
        value: "coffeescript"
      }, {
        name: "HTML,XML",
        value: "html"
      }, {
        name: "JSON",
        value: "json"
      }, {
        name: "Java",
        value: "java"
      }, {
        name: "JavaScript",
        value: "js"
      }, {
        name: "Markdown",
        value: "markdown"
      }, {
        name: "Objective C",
        value: "oc"
      }, {
        name: "PHP",
        value: "php"
      }, {
        name: "Perl",
        value: "parl"
      }, {
        name: "Python",
        value: "python"
      }, {
        name: "Ruby",
        value: "ruby"
      }, {
        name: "SQL",
        value: "sql"
      }], this.el.addClass("code-popover").append(this._tpl), this.selectEl = this.el.find(".select-lang"), s = this.langs;
      for (n = 0, i = s.length; n < i; n++) r = s[n], t = e("<option/>", {
        text: r.name,
        value: r.value
      }).appendTo(this.selectEl);
      return this.selectEl.on("change", function(e) {
        return function(t) {
          var n;
          return e.lang = e.selectEl.val(), n = e.target.hasClass("selected"), e.target.removeClass().removeAttr("data-lang"), e.lang !== -1 && e.target.attr("data-lang", e.lang), n && e.target.addClass("selected"), e.editor.trigger("valuechanged")
        }
      }(this)), this.editor.on("valuechanged", function(e) {
        return function(t) {
          if (e.active) return e.refresh()
        }
      }(this))
    }, n.prototype.show = function() {
      var e;
      return e = 1 <= arguments.length ? I.call(arguments, 0) : [], n.__super__.show.apply(this, e), this.lang = this.target.attr("data-lang"), this.lang != null ? this.selectEl.val(this.lang) : this.selectEl.val(-1)
    }, n
  }(N), k.Toolbar.addButton(a), w = function(t) {
    function n() {
      return n.__super__.constructor.apply(this, arguments)
    }
    return B(n, t), n.prototype.name = "link", n.prototype.icon = "link", n.prototype.htmlTag = "a", n.prototype.disableTag = "pre", n.prototype.render = function() {
      var e;
      return e = 1 <= arguments.length ? I.call(arguments, 0) : [], n.__super__.render.apply(this, e), this.popover = new E({
        button: this
      })
    }, n.prototype.status = function(e) {
      var t;
      return e != null && this.setDisabled(e.is(this.disableTag)), this.disabled ? !0 : e == null ? this.active : (t = !0, !e.is(this.htmlTag) || e.is('[class^="simditor-"]') ? (this.setActive(!1), t = !1) : this.editor.selection.rangeAtEndOf(e) ? (this.setActive(!0), t = !1) : this.setActive(!0), t ? this.popover.show(e) : this.editor.util.isBlockNode(e) && this.popover.hide(), this.active)
    }, n.prototype.command = function() {
      var t, n, r, i, s, o, u, a, f, l;
      return a = this.editor.selection.getRange(), this.active ? (r = e(a.commonAncestorContainer).closest("a"), l = document.createTextNode(r.text()), r.replaceWith(l), a.selectNode(l)) : (f = a.startContainer, o = a.endContainer, s = this.editor.util.closestBlockEl(f), n = this.editor.util.closestBlockEl(o), t = e(a.extractContents()), u = this.editor.formatter.clearHtml(t.contents(), !1), r = e("<a/>", {
        href: "http://www.example.com",
        target: "_blank",
        text: u || this._t("linkText")
      }), s[0] === n[0] ? a.insertNode(r[0]) : (i = e("<p/>").append(r), a.insertNode(i[0])), a.selectNodeContents(r[0]), this.popover.one("popovershow", function(e) {
        return function() {
          return u ? (e.popover.urlEl.focus(), e.popover.urlEl[0].select()) : (e.popover.textEl.focus(), e.popover.textEl[0].select())
        }
      }(this))), this.editor.selection.selectRange(a), this.editor.trigger("valuechanged")
    }, n
  }(u), E = function(t) {
    function n() {
      return n.__super__.constructor.apply(this, arguments)
    }
    return B(n, t), n.prototype.render = function() {
      var t;
      return t = '<div class="link-settings">\n  <div class="settings-field">\n    <label>' + this._t("text") + '</label>\n    <input class="link-text" type="text"/>\n    <a class="btn-unlink" href="javascript:;" title="' + this._t("removeLink") + '" tabindex="-1"><span class="simditor-icon simditor-icon-unlink"></span></a>\n  </div>\n  <div class="settings-field">\n    <label>' + this._t("linkUrl") + '</label>\n    <input class="link-url" type="text"/>\n  </div>\n</div>', this.el.addClass("link-popover").append(t), this.textEl = this.el.find(".link-text"), this.urlEl = this.el.find(".link-url"), this.unlinkEl = this.el.find(".btn-unlink"), this.textEl.on("keyup", function(e) {
        return function(t) {
          if (t.which === 13) return;
          return e.target.text(e.textEl.val())
        }
      }(this)), this.urlEl.on("keyup", function(e) {
        return function(t) {
          var n;
          if (t.which === 13) return;
          return n = e.urlEl.val(), !/https?:\/\/|^\//ig.test(n) && !!n && (n = "http://" + n), e.target.attr("href", n)
        }
      }(this)), e([this.urlEl[0], this.textEl[0]]).on("keydown", function(t) {
        return function(n) {
          if (n.which === 13 || n.which === 27 || !n.shiftKey && n.which === 9 && e(n.target).hasClass("link-url")) return n.preventDefault(), setTimeout(function() {
            var e;
            return e = document.createRange(), t.editor.selection.setRangeAfter(t.target, e), t.hide(), t.editor.trigger("valuechanged")
          }, 0)
        }
      }(this)), this.unlinkEl.on("click", function(e) {
        return function(t) {
          var n, r;
          return r = document.createTextNode(e.target.text()), e.target.replaceWith(r), e.hide(), n = document.createRange(), e.editor.selection.setRangeAfter(r, n), e.editor.trigger("valuechanged")
        }
      }(this))
    }, n.prototype.show = function() {
      var e;
      return e = 1 <= arguments.length ? I.call(arguments, 0) : [], n.__super__.show.apply(this, e), this.textEl.val(this.target.text()), this.urlEl.val(this.target.attr("href"))
    }, n
  }(N), k.Toolbar.addButton(w), p = function(t) {
    function n() {
      return n.__super__.constructor.apply(this, arguments)
    }
    return B(n, t), n.prototype.name = "image", n.prototype.icon = "picture-o", n.prototype.htmlTag = "img", n.prototype.disableTag = "pre, table", n.prototype.defaultImage = "", n.prototype.needFocus = !1, n.prototype._init = function() {
      var t, r, i, s;
      if (this.editor.opts.imageButton)
        if (Array.isArray(this.editor.opts.imageButton)) {
          this.menu = [], s = this.editor.opts.imageButton;
          for (r = 0, i = s.length; r < i; r++) t = s[r], this.menu.push({
            name: t + "-image",
            text: this._t(t + "Image")
          })
        } else this.menu = !1;
      else this.editor.uploader != null ? this.menu = [{
        name: "upload-image",
        text: this._t("uploadImage")
      }, {
        name: "external-image",
        text: this._t("externalImage")
      }] : this.menu = !1;
      return this.defaultImage = this.editor.opts.defaultImage, this.editor.body.on("click", "img:not([data-non-image])", function(t) {
        return function(n) {
          var r, i;
          return r = e(n.currentTarget), i = document.createRange(), i.selectNode(r[0]), t.editor.selection.selectRange(i), t.editor.util.support.onselectionchange || t.editor.trigger("selectionchanged"), !1
        }
      }(this)), this.editor.body.on("mouseup", "img:not([data-non-image])", function(e) {
        return function(e) {
          return !1
        }
      }(this)), this.editor.on("selectionchanged.image", function(t) {
        return function() {
          var n, r, i;
          i = t.editor.selection.getRange();
          if (i == null) return;
          return n = e(i.cloneContents()).contents(), n.length === 1 && n.is("img:not([data-non-image])") ? (r = e(i.startContainer).contents().eq(i.startOffset), t.popover.show(r)) : t.popover.hide()
        }
      }(this)), this.editor.on("valuechanged.image", function(t) {
        return function() {
          var n;
          n = t.editor.wrapper.find(".simditor-image-loading");
          if (n.length > 0) return n.each(function(n, r) {
            var i, s, o;
            s = e(r), i = s.data("img");
            if (!(i && i.parent().length > 0)) {
              s.remove();
              if (i) {
                o = i.data("file");
                if (o) {
                  t.editor.uploader.cancel(o);
                  if (t.editor.body.find("img.uploading").length < 1) return t.editor.uploader.trigger("uploadready", [o])
                }
              }
            }
          });
          return
        }
      }(this)), n.__super__._init.call(this)
    }, n.prototype.render = function() {
      var e;
      e = 1 <= arguments.length ? I.call(arguments, 0) : [], n.__super__.render.apply(this, e), this.popover = new d({
        button: this
      });
      if (this.editor.opts.imageButton === "upload") return this._initUploader(this.el)
    }, n.prototype.renderMenu = function() {
      return n.__super__.renderMenu.call(this), this._initUploader()
    }, n.prototype._initUploader = function(t) {
      var n, r;
      t == null && (t = this.menuEl.find(".menu-item-upload-image"));
      if (this.editor.uploader == null) {
        this.el.find(".btn-upload").remove();
        return
      }
      return n = null, r = function(r) {
        return function() {
          return n && n.remove(), n = e('<input type="file" title="' + r._t("uploadImage") + '" accept="image/*">').appendTo(t)
        }
      }(this), r(), t.on("click mousedown", "input[type=file]", function(e) {
        return function(e) {
          return e.stopPropagation()
        }
      }(this)), t.on("change", "input[type=file]", function(e) {
        return function(t) {
          return e.editor.inputManager.focused ? (e.editor.uploader.upload(n, {
            inline: !0
          }), r()) : (e.editor.one("focus", function(t) {
            return e.editor.uploader.upload(n, {
              inline: !0
            }), r()
          }), e.editor.focus()), e.wrapper.removeClass("menu-on")
        }
      }(this)), this.editor.uploader.on("beforeupload", function(t) {
        return function(n, r) {
          var i;
          if (!r.inline) return;
          return r.img ? i = e(r.img) : (i = t.createImage(r.name), r.img = i), i.addClass("uploading"), i.data("file", r), t.editor.uploader.readImageFile(r.obj, function(e) {
            var n;
            if (!i.hasClass("uploading")) return;
            return n = e ? e.src : t.defaultImage, t.loadImage(i, n, function() {
              if (t.popover.active) return t.popover.refresh(), t.popover.srcEl.val(t._t("uploading")).prop("disabled", !0)
            })
          })
        }
      }(this)), this.editor.uploader.on("uploadprogress", e.proxy(this.editor.util.throttle(function(e, t, n, r) {
        var i, s, o;
        if (!t.inline) return;
        s = t.img.data("mask");
        if (!s) return;
        i = s.data("img");
        if (!(i.hasClass("uploading") && i.parent().length > 0)) {
          s.remove();
          return
        }
        return o = n / r, o = (o * 100).toFixed(0), o > 99 && (o = 99), s.find(".progress").height(100 - o + "%")
      }, 500), this)), this.editor.uploader.on("uploadsuccess", function(t) {
        return function(n, r, i) {
          var s, o, u;
          if (!r.inline) return;
          s = r.img;
          if (!(s.hasClass("uploading") && s.parent().length > 0)) return;
          s.removeData("file"), s.removeClass("uploading").removeClass("loading"), o = s.data("mask"), o && o.remove(), s.removeData("mask");
          if (typeof i != "object") try {
            i = e.parseJSON(i)
          } catch (a) {
            n = a, i = {
              success: !1
            }
          }
          i.success === !1 ? (u = i.msg || t._t("uploadFailed"), alert(u), s.attr("src", t.defaultImage)) : s.attr("src", i.file_path), t.popover.active && (t.popover.srcEl.prop("disabled", !1), t.popover.srcEl.val(i.file_path)), t.editor.trigger("valuechanged");
          if (t.editor.body.find("img.uploading").length < 1) return t.editor.uploader.trigger("uploadready", [r, i])
        }
      }(this)), this.editor.uploader.on("uploaderror", function(t) {
        return function(n, r, i) {
          var s, o, u, a;
          if (!r.inline) return;
          if (i.statusText === "abort") return;
          if (i.responseText) {
            try {
              a = e.parseJSON(i.responseText), u = a.msg
            } catch (f) {
              n = f, u = t._t("uploadError")
            }
            alert(u)
          }
          s = r.img;
          if (!(s.hasClass("uploading") && s.parent().length > 0)) return;
          s.removeData("file"), s.removeClass("uploading").removeClass("loading"), o = s.data("mask"), o && o.remove(), s.removeData("mask"), s.attr("src", t.defaultImage), t.popover.active && (t.popover.srcEl.prop("disabled", !1), t.popover.srcEl.val(t.defaultImage)), t.editor.trigger("valuechanged");
          if (t.editor.body.find("img.uploading").length < 1) return t.editor.uploader.trigger("uploadready", [r, a])
        }
      }(this))
    }, n.prototype.status = function(e) {
      e != null && this.setDisabled(e.is(this.disableTag));
      if (this.disabled) return !0
    }, n.prototype.loadImage = function(t, n, r) {
      var i, s, o;
      return o = function(e) {
        return function() {
          var n, r;
          return n = t.offset(), r = e.editor.wrapper.offset(), i.css({
            top: n.top - r.top,
            left: n.left - r.left,
            width: t.width(),
            height: t.height()
          }).show()
        }
      }(this), t.addClass("loading"), i = t.data("mask"), i || (i = e('<div class="simditor-image-loading"><div class="progress"></div></div>').hide().appendTo(this.editor.wrapper), o(), t.data("mask", i), i.data("img", t)), s = new Image, s.onload = function(e) {
        return function() {
          var u, a;
          if (!t.hasClass("loading") && !t.hasClass("uploading")) return;
          return a = s.width, u = s.height, t.attr({
            src: n,
            "data-image-size": a + "," + u
          }).removeClass("loading"), t.hasClass("uploading") ? (e.editor.util.reflow(e.editor.body), o()) : (i.remove(), t.removeData("mask")), r(s)
        }
      }(this), s.onerror = function(e) {
        return function() {
          return r(!1), i.remove(), t.removeData("mask").removeClass("loading")
        }
      }(this), s.src = n
    }, n.prototype.createImage = function(t) {
      var n, r, i, s;
      return t == null && (t = "Image"), this.editor.inputManager.focused || this.editor.focus(), s = this.editor.selection.getRange(), s.deleteContents(), n = this.editor.util.closestBlockEl(), n.is("p") && !this.editor.util.isEmptyNode(n) && (n = e("<p/>").append(this.editor.util.phBr).insertAfter(n), this.editor.selection.setRangeAtStartOf(n, s)), r = e("<img/>").attr("alt", t), s.insertNode(r[0]), i = n.next("p"), i.length > 0 || (i = e("<p/>").append(this.editor.util.phBr).insertAfter(n)), this.editor.selection.setRangeAtStartOf(i), r
    }, n.prototype.command = function(e) {
      var t;
      return t = this.createImage(), this.loadImage(t, e || this.defaultImage, function(e) {
        return function() {
          return e.editor.trigger("valuechanged"), e.editor.util.reflow(t), t.click(), e.popover.one("popovershow", function() {
            return e.popover.srcEl.focus(), e.popover.srcEl[0].select()
          })
        }
      }(this))
    }, n
  }(u), d = function(t) {
    function n() {
      return n.__super__.constructor.apply(this, arguments)
    }
    return B(n, t), n.prototype.offset = {
      top: 6,
      left: -4
    }, n.prototype.render = function() {
      var t;
      return t = '<div class="link-settings">\n  <div class="settings-field">\n    <label>' + this._t("imageUrl") + '</label>\n    <input class="image-src" type="text" tabindex="1" />\n    <a class="btn-upload" href="javascript:;" title="' + this._t("uploadImage") + '" tabindex="-1">\n      <span class="simditor-icon simditor-icon-upload"></span>\n    </a>\n  </div>\n  <div class=\'settings-field\'>\n    <label>' + this._t("imageAlt") + '</label>\n    <input class="image-alt" id="image-alt" type="text" tabindex="1" />\n  </div>\n  <div class="settings-field">\n    <label>' + this._t("imageSize") + '</label>\n    <input class="image-size" id="image-width" type="text" tabindex="2" />\n    <span class="times">×</span>\n    <input class="image-size" id="image-height" type="text" tabindex="3" />\n    <a class="btn-restore" href="javascript:;" title="' + this._t("restoreImageSize") + '" tabindex="-1">\n      <span class="simditor-icon simditor-icon-undo"></span>\n    </a>\n  </div>\n</div>', this.el.addClass("image-popover").append(t), this.srcEl = this.el.find(".image-src"), this.widthEl = this.el.find("#image-width"), this.heightEl = this.el.find("#image-height"), this.altEl = this.el.find("#image-alt"), this.srcEl.on("keydown", function(e) {
        return function(t) {
          if (t.which === 13 && !e.target.hasClass("uploading")) return t.preventDefault(), e.button.editor.body.focus(), e.button.editor.selection.setRangeAfter(e.target), e.hide();
          return
        }
      }(this)), this.srcEl.on("blur", function(e) {
        return function(t) {
          return e._loadImage(e.srcEl.val())
        }
      }(this)), this.el.find(".image-size").on("blur", function(t) {
        return function(n) {
          return t._resizeImg(e(n.currentTarget)), t.el.data("popover").refresh()
        }
      }(this)), this.el.find(".image-size").on("keyup", function(t) {
        return function(n) {
          var r;
          r = e(n.currentTarget);
          if (n.which !== 13 && n.which !== 27 && n.which !== 9) return t._resizeImg(r, !0)
        }
      }(this)), this.el.find(".image-size").on("keydown", function(t) {
        return function(n) {
          var r;
          r = e(n.currentTarget);
          if (n.which === 13 || n.which === 27) return n.preventDefault(), n.which === 13 ? t._resizeImg(r) : t._restoreImg(), t.button.editor.body.focus(), t.button.editor.selection.setRangeAfter(t.target), t.hide();
          if (n.which === 9) return t.el.data("popover").refresh()
        }
      }(this)), this.altEl.on("keydown", function(e) {
        return function(t) {
          if (t.which === 13) return t.preventDefault(), e.button.editor.body.focus(), e.button.editor.selection.setRangeAfter(e.target), e.hide()
        }
      }(this)), this.altEl.on("keyup", function(e) {
        return function(t) {
          if (t.which === 13 || t.which === 27 || t.which === 9) return;
          return e.alt = e.altEl.val(), e.target.attr("alt", e.alt)
        }
      }(this)), this.el.find(".btn-restore").on("click", function(e) {
        return function(t) {
          return e._restoreImg(), e.el.data("popover").refresh()
        }
      }(this)), this.editor.on("valuechanged", function(e) {
        return function(t) {
          if (e.active) return e.refresh()
        }
      }(this)), this._initUploader()
    }, n.prototype._initUploader = function() {
      var t, n;
      t = this.el.find(".btn-upload");
      if (this.editor.uploader == null) {
        t.remove();
        return
      }
      return n = function(n) {
        return function() {
          return n.input && n.input.remove(), n.input = e('<input type="file" title="' + n._t("uploadImage") + '" accept="image/*">').appendTo(t)
        }
      }(this), n(), this.el.on("click mousedown", "input[type=file]", function(e) {
        return function(e) {
          return e.stopPropagation()
        }
      }(this)), this.el.on("change", "input[type=file]", function(e) {
        return function(t) {
          return e.editor.uploader.upload(e.input, {
            inline: !0,
            img: e.target
          }), n()
        }
      }(this))
    }, n.prototype._resizeImg = function(t, n) {
      var r, i, s;
      n == null && (n = !1), i = t.val() * 1;
      if (!(e.isNumeric(i) || i < 0)) return;
      return t.is(this.widthEl) ? (r = this.height * i / this.width, this.heightEl.val(r)) : (s = this.width * i / this.height, this.widthEl.val(s)), n || this.target.attr({
        width: s || i,
        height: r || i
      }), this.editor.trigger("valuechanged")
    }, n.prototype._restoreImg = function() {
      var e, t;
      return t = ((e = this.target.data("image-size")) != null ? e.split(",") : void 0) || [this.width, this.height], this.target.attr({
        width: t[0] * 1,
        height: t[1] * 1
      }), this.widthEl.val(t[0]), this.heightEl.val(t[1]), this.editor.trigger("valuechanged")
    }, n.prototype._loadImage = function(e, t) {
      if (/^data:image/.test(e) && !this.editor.uploader) {
        t && t(!1);
        return
      }
      return this.button.loadImage(this.target, e, function(n) {
        return function(r) {
          var i;
          if (!r) return;
          n.active && (n.width = r.width, n.height = r.height, n.widthEl.val(n.width), n.heightEl.val(n.height), n.target.removeAttr("width").removeAttr("height")), /^data:image/.test(e) ? (i = n.editor.util.dataURLtoBlob(e), i.name = "Base64 Image.png", n.editor.uploader.upload(i, {
            inline: !0,
            img: n.target
          })) : n.editor.trigger("valuechanged");
          if (t) return t(r)
        }
      }(this))
    }, n.prototype.show = function() {
      var e, t;
      return t = 1 <= arguments.length ? I.call(arguments, 0) : [], n.__super__.show.apply(this, t), e = this.target, this.width = e.width(), this.height = e.height(), this.alt = e.attr("alt"), e.hasClass("uploading") ? this.srcEl.val(this._t("uploading")).prop("disabled", !0) : (this.srcEl.val(e.attr("src")).prop("disabled", !1), this.widthEl.val(this.width), this.heightEl.val(this.height), this.altEl.val(this.alt))
    }, n
  }(N), k.Toolbar.addButton(p), v = function(e) {
    function t() {
      return t.__super__.constructor.apply(this, arguments)
    }
    return B(t, e), t.prototype.name = "indent", t.prototype.icon = "indent", t.prototype._init = function() {
      return this.title = this._t(this.name) + " (Tab)", t.__super__._init.call(this)
    }, t.prototype.status = function(e) {
      return !0
    }, t.prototype.command = function() {
      return this.editor.indentation.indent()
    }, t
  }(u), k.Toolbar.addButton(v), T = function(e) {
    function t() {
      return t.__super__.constructor.apply(this, arguments)
    }
    return B(t, e), t.prototype.name = "outdent", t.prototype.icon = "outdent", t.prototype._init = function() {
      return this.title = this._t(this.name) + " (Shift + Tab)", t.__super__._init.call(this)
    }, t.prototype.status = function(e) {
      return !0
    }, t.prototype.command = function() {
      return this.editor.indentation.indent(!0)
    }, t
  }(u), k.Toolbar.addButton(T), h = function(t) {
    function n() {
      return n.__super__.constructor.apply(this, arguments)
    }
    return B(n, t), n.prototype.name = "hr", n.prototype.icon = "minus", n.prototype.htmlTag = "hr", n.prototype.status = function(e) {
      return !0
    }, n.prototype.command = function() {
      var t, n, r, i;
      return i = this.editor.util.furthestBlockEl(), r = i.next(), r.length > 0 ? this.editor.selection.save() : n = e("<p/>").append(this.editor.util.phBr), t = e("<hr/>").insertAfter(i), n ? (n.insertAfter(t), this.editor.selection.setRangeAtStartOf(n)) : this.editor.selection.restore(), this.editor.trigger("valuechanged")
    }, n
  }(u), k.Toolbar.addButton(h), A = function(t) {
    function n() {
      return n.__super__.constructor.apply(this, arguments)
    }
    return B(n, t), n.prototype.name = "table", n.prototype.icon = "table", n.prototype.htmlTag = "table", n.prototype.disableTag = "pre, li, blockquote", n.prototype.menu = !0, n.prototype._init = function() {
      return n.__super__._init.call(this), e.merge(this.editor.formatter._allowedTags, ["thead", "th", "tbody", "tr", "td", "colgroup", "col"]), e.extend(this.editor.formatter._allowedAttributes, {
        td: ["rowspan", "colspan"],
        col: ["width"]
      }), this._initShortcuts(), this.editor.on("decorate", function(t) {
        return function(n, r) {
          return r.find("table").each(function(n, r) {
            return t.decorate(e(r))
          })
        }
      }(this)), this.editor.on("undecorate", function(t) {
        return function(n, r) {
          return r.find("table").each(function(n, r) {
            return t.undecorate(e(r))
          })
        }
      }(this)), this.editor.on("selectionchanged.table", function(t) {
        return function(n) {
          var r, i;
          t.editor.body.find(".simditor-table td, .simditor-table th").removeClass("active"), i = t.editor.selection.getRange();
          if (i == null) return;
          return r = e(i.commonAncestorContainer), i.collapsed && r.is(".simditor-table") && (t.editor.selection.rangeAtStartOf(r) ? r = r.find("th:first") : r = r.find("td:last"), t.editor.selection.setRangeAtEndOf(r)), r.closest("td, th", t.editor.body).addClass("active")
        }
      }(this)), this.editor.on("blur.table", function(e) {
        return function(t) {
          return e.editor.body.find(".simditor-table td, .simditor-table th").removeClass("active")
        }
      }(this)), this.editor.inputManager.addKeystrokeHandler("38", "td", function(e) {
        return function(t, n) {
          return e._tdNav(n, "up"), !0
        }
      }(this)), this.editor.inputManager.addKeystrokeHandler("38", "th", function(e) {
        return function(t, n) {
          return e._tdNav(n, "up"), !0
        }
      }(this)), this.editor.inputManager.addKeystrokeHandler("40", "td", function(e) {
        return function(t, n) {
          return e._tdNav(n, "down"), !0
        }
      }(this)), this.editor.inputManager.addKeystrokeHandler("40", "th", function(e) {
        return function(t, n) {
          return e._tdNav(n, "down"), !0
        }
      }(this))
    }, n.prototype._tdNav = function(e, t) {
      var n, r, i, s, o, u, a;
      return t == null && (t = "up"), i = t === "up" ? "prev" : "next", a = t === "up" ? ["tbody", "thead"] : ["thead", "tbody"], u = a[0], s = a[1], r = e.parent("tr"), n = this["_" + i + "Row"](r), n.length > 0 ? (o = r.find("td, th").index(e), this.editor.selection.setRangeAtEndOf(n.find("td, th").eq(o))) : !0
    }, n.prototype._nextRow = function(e) {
      var t;
      return t = e.next("tr"), t.length < 1 && e.parent("thead").length > 0 && (t = e.parent("thead").next("tbody").find("tr:first")), t
    }, n.prototype._prevRow = function(e) {
      var t;
      return t = e.prev("tr"), t.length < 1 && e.parent("tbody").length > 0 && (t = e.parent("tbody").prev("thead").find("tr")), t
    }, n.prototype.initResize = function(t) {
      var n, r, i;
      return i = t.parent(".simditor-table"), n = t.find("colgroup"), n.length < 1 && (n = e("<colgroup/>").prependTo(t), t.find("thead tr th").each(function(t) {
        return function(t, r) {
          var i;
          return i = e("<col/>").appendTo(n)
        }
      }(this)), this.refreshTableWidth(t)), r = e('<div class="simditor-resize-handle" contenteditable="false"></div>').appendTo(i), i.on("mousemove", "td, th", function(t) {
        return function(t) {
          var s, o, u, a, f, l;
          if (i.hasClass("resizing")) return;
          o = e(t.currentTarget), l = t.pageX - e(t.currentTarget).offset().left, l < 5 && o.prev().length > 0 && (o = o.prev());
          if (o.next("td, th").length < 1) {
            r.hide();
            return
          }
          if ((a = r.data("td")) != null ? a.is(o) : void 0) {
            r.show();
            return
          }
          u = o.parent().find("td, th").index(o), s = n.find("col").eq(u);
          if ((f = r.data("col")) != null ? f.is(s) : void 0) {
            r.show();
            return
          }
          return r.css("left", o.position().left + o.outerWidth() - 5).data("td", o).data("col", s).show()
        }
      }(this)), i.on("mouseleave", function(e) {
        return function(e) {
          return r.hide()
        }
      }(this)), i.on("mousedown", ".simditor-resize-handle", function(t) {
        return function(t) {
          var n, r, s, o, u, a, f, l, c, h, p;
          return n = e(t.currentTarget), s = n.data("td"), r = n.data("col"), u = s.next("td, th"), o = r.next("col"), h = t.pageX, l = s.outerWidth() * 1, c = u.outerWidth() * 1, f = parseFloat(n.css("left")), p = s.closest("table").width(), a = 50, e(document).on("mousemove.simditor-resize-table", function(e) {
            var t, i, s;
            return t = e.pageX - h, i = l + t, s = c - t, i < a ? (i = a, t = a - l, s = c - t) : s < a && (s = a, t = c - a, i = l + t), r.attr("width", i / p * 100 + "%"), o.attr("width", s / p * 100 + "%"), n.css("left", f + t)
          }), e(document).one("mouseup.simditor-resize-table", function(t) {
            return e(document).off(".simditor-resize-table"), i.removeClass("resizing")
          }), i.addClass("resizing"), !1
        }
      }(this))
    }, n.prototype._initShortcuts = function() {
      return this.editor.inputManager.addShortcut("ctrl+alt+up", function(e) {
        return function(t) {
          return e.editMenu.find(".menu-item[data-param=insertRowAbove]").click(), !1
        }
      }(this)), this.editor.inputManager.addShortcut("ctrl+alt+down", function(e) {
        return function(t) {
          return e.editMenu.find(".menu-item[data-param=insertRowBelow]").click(), !1
        }
      }(this)), this.editor.inputManager.addShortcut("ctrl+alt+left", function(e) {
        return function(t) {
          return e.editMenu.find(".menu-item[data-param=insertColLeft]").click(), !1
        }
      }(this)), this.editor.inputManager.addShortcut("ctrl+alt+right", function(e) {
        return function(t) {
          return e.editMenu.find(".menu-item[data-param=insertColRight]").click(), !1
        }
      }(this))
    }, n.prototype.decorate = function(e) {
      return e.parent(".simditor-table").length > 0 && this.undecorate(e), e.wrap('<div class="simditor-table"></div>'), this.initResize(e), e.parent()
    }, n.prototype.undecorate = function(e) {
      if (e.parent(".simditor-table").length > 0) return e.parent().replaceWith(e);
      return
    }, n.prototype.renderMenu = function() {
      var t;
      return e('<div class="menu-create-table">\n</div>\n<div class="menu-edit-table">\n  <ul>\n    <li><a tabindex="-1" unselectable="on" class="menu-item" href="javascript:;" data-param="deleteRow"><span>' + this._t("deleteRow") + '</span></a></li>\n    <li><a tabindex="-1" unselectable="on" class="menu-item" href="javascript:;" data-param="insertRowAbove"><span>' + this._t("insertRowAbove") + ' ( Ctrl + Alt + ↑ )</span></a></li>\n    <li><a tabindex="-1" unselectable="on" class="menu-item" href="javascript:;" data-param="insertRowBelow"><span>' + this._t("insertRowBelow") + ' ( Ctrl + Alt + ↓ )</span></a></li>\n    <li><span class="separator"></span></li>\n    <li><a tabindex="-1" unselectable="on" class="menu-item" href="javascript:;" data-param="deleteCol"><span>' + this._t("deleteColumn") + '</span></a></li>\n    <li><a tabindex="-1" unselectable="on" class="menu-item" href="javascript:;" data-param="insertColLeft"><span>' + this._t("insertColumnLeft") + ' ( Ctrl + Alt + ← )</span></a></li>\n    <li><a tabindex="-1" unselectable="on" class="menu-item" href="javascript:;" data-param="insertColRight"><span>' + this._t("insertColumnRight") + ' ( Ctrl + Alt + → )</span></a></li>\n    <li><span class="separator"></span></li>\n    <li><a tabindex="-1" unselectable="on" class="menu-item" href="javascript:;" data-param="deleteTable"><span>' + this._t("deleteTable") + "</span></a></li>\n  </ul>\n</div>").appendTo(this.menuWrapper), this.createMenu = this.menuWrapper.find(".menu-create-table"), this.editMenu = this.menuWrapper.find(".menu-edit-table"), t = this.createTable(6, 6).appendTo(this.createMenu), this.createMenu.on("mouseenter", "td, th", function(n) {
        return function(r) {
          var i, s, o, u;
          return n.createMenu.find("td, th").removeClass("selected"), i = e(r.currentTarget), s = i.parent(), u = s.find("td, th").index(i) + 1, o = s.prevAll("tr").addBack(), s.parent().is("tbody") && (o = o.add(t.find("thead tr"))), o.find("td:lt(" + u + "), th:lt(" + u + ")").addClass("selected")
        }
      }(this)), this.createMenu.on("mouseleave", function(t) {
        return function(t) {
          return e(t.currentTarget).find("td, th").removeClass("selected")
        }
      }(this)), this.createMenu.on("mousedown", "td, th", function(n) {
        return function(r) {
          var i, s, o, u, a;
          n.wrapper.removeClass("menu-on");
          if (!n.editor.inputManager.focused) return;
          return s = e(r.currentTarget), o = s.parent(), u = o.find("td").index(s) + 1, a = o.prevAll("tr").length + 1, o.parent().is("tbody") && (a += 1), t = n.createTable(a, u, !0), i = n.editor.util.closestBlockEl(), n.editor.util.isEmptyNode(i) ? i.replaceWith(t) : i.after(t), n.decorate(t), n.editor.selection.setRangeAtStartOf(t.find("th:first")), n.editor.trigger("valuechanged"), !1
        }
      }(this))
    }, n.prototype.createTable = function(t, n, r) {
      var i, s, o, u, a, f, l, c, h, p, d;
      i = e("<table/>"), u = e("<thead/>").appendTo(i), s = e("<tbody/>").appendTo(i);
      for (h = l = 0, p = t; 0 <= p ? l < p : l > p; h = 0 <= p ? ++l : --l) {
        a = e("<tr/>"), a.appendTo(h === 0 ? u : s);
        for (f = c = 0, d = n; 0 <= d ? c < d : c > d; f = 0 <= d ? ++c : --c) o = e(h === 0 ? "<th/>" : "<td/>").appendTo(a), r && o.append(this.editor.util.phBr)
      }
      return i
    }, n.prototype.refreshTableWidth = function(t) {
      var n, r;
      return r = t.width(), n = t.find("col"), t.find("thead tr th").each(function(t) {
        return function(t, i) {
          var s;
          return s = n.eq(t), s.attr("width", e(i).outerWidth() / r * 100 + "%")
        }
      }(this))
    }, n.prototype.setActive = function(e) {
      return n.__super__.setActive.call(this, e), e ? (this.createMenu.hide(), this.editMenu.show()) : (this.createMenu.show(), this.editMenu.hide())
    }, n.prototype._changeCellTag = function(t, n) {
      return t.find("td, th").each(function(t) {
        return function(t, r) {
          var i;
          return i = e(r), i.replaceWith("<" + n + ">" + i.html() + "</" + n + ">")
        }
      }(this))
    }, n.prototype.deleteRow = function(e) {
      var t, n, r;
      return n = e.parent("tr"), n.closest("table").find("tr").length < 1 ? this.deleteTable(e) : (t = this._nextRow(n), t.length > 0 || (t = this._prevRow(n)), r = n.find("td, th").index(e), n.parent().is("thead") && (t.appendTo(n.parent()), this._changeCellTag(t, "th")), n.remove(), this.editor.selection.setRangeAtEndOf(t.find("td, th").eq(r)))
    }, n.prototype.insertRow = function(t, n) {
      var r, i, s, o, u, a, f, l, c;
      n == null && (n = "after"), s = t.parent("tr"), i = s.closest("table"), u = 0, i.find("tr").each(function(t) {
        return function(t, n) {
          return u = Math.max(u, e(n).find("td").length)
        }
      }(this)), f = s.find("td, th").index(t), r = e("<tr/>"), o = "td", n === "after" && s.parent().is("thead") ? s.parent().next("tbody").prepend(r) : n === "before" && s.parent().is("thead") ? (s.before(r), s.parent().next("tbody").prepend(s), this._changeCellTag(s, "td"), o = "th") : s[n](r);
      for (a = l = 1, c = u; 1 <= c ? l <= c : l >= c; a = 1 <= c ? ++l : --l) e("<" + o + "/>").append(this.editor.util.phBr).appendTo(r);
      return this.editor.selection.setRangeAtStartOf(r.find("td, th").eq(f))
    }, n.prototype.deleteCol = function(t) {
      var n, r, i, s;
      return i = t.parent("tr"), i.closest("table").find("tr").length < 1 && t.siblings("td, th").length < 1 ? this.deleteTable(t) : (s = i.find("td, th").index(t), n = t.next("td, th"), n.length > 0 || (n = i.prev("td, th")), r = i.closest("table"), r.find("col").eq(s).remove(), r.find("tr").each(function(t) {
        return function(t, n) {
          return e(n).find("td, th").eq(s).remove()
        }
      }(this)), this.refreshTableWidth(r), this.editor.selection.setRangeAtEndOf(n))
    }, n.prototype.insertCol = function(t, n) {
      var r, i, s, o, u, a, f, l;
      return n == null && (n = "after"), u = t.parent("tr"), a = u.find("td, th").index(t), o = t.closest("table"), r = o.find("col").eq(a), o.find("tr").each(function(t) {
        return function(r, i) {
          var s, o;
          return o = e(i).parent().is("thead") ? "th" : "td", s = e("<" + o + "/>").append(t.editor.util.phBr), e(i).find("td, th").eq(a)[n](s)
        }
      }(this)), i = e("<col/>"), r[n](i), f = o.width(), l = Math.max(parseFloat(r.attr("width")) / 2, 50 / f * 100), r.attr("width", l + "%"), i.attr("width", l + "%"), this.refreshTableWidth(o), s = n === "after" ? t.next("td, th") : t.prev("td, th"), this.editor.selection.setRangeAtStartOf(s)
    }, n.prototype.deleteTable = function(e) {
      var t, n;
      n = e.closest(".simditor-table"), t = n.next("p"), n.remove();
      if (t.length > 0) return this.editor.selection.setRangeAtStartOf(t)
    }, n.prototype.command = function(t) {
      var n, r;
      r = this.editor.selection.getRange(), n = e(r.commonAncestorContainer).closest("td, th");
      if (n.length > 0) {
        if (t === "deleteRow") this.deleteRow(n);
        else if (t === "insertRowAbove") this.insertRow(n, "before");
        else if (t === "insertRowBelow") this.insertRow(n);
        else if (t === "deleteCol") this.deleteCol(n);
        else if (t === "insertColLeft") this.insertCol(n, "before");
        else if (t === "insertColRight") this.insertCol(n);
        else {
          if (t !== "deleteTable") return;
          this.deleteTable(n)
        }
        return this.editor.trigger("valuechanged")
      }
      return
    }, n
  }(u), k.Toolbar.addButton(A), L = function(t) {
    function n() {
      return n.__super__.constructor.apply(this, arguments)
    }
    return B(n, t), n.prototype.name = "strikethrough", n.prototype.icon = "strikethrough", n.prototype.htmlTag = "strike", n.prototype.disableTag = "pre", n.prototype.status = function(e) {
      var t;
      return e != null && this.setDisabled(e.is(this.disableTag)), this.disabled ? !0 : (t = document.queryCommandState("strikethrough") === !0, this.setActive(t), t)
    }, n.prototype.command = function() {
      return document.execCommand("strikethrough"), this.editor.util.support.oninput || this.editor.trigger("valuechanged"), e(document).trigger("selectionchange")
    }, n
  }(u), k.Toolbar.addButton(L), i = function(t) {
    function n() {
      return n.__super__.constructor.apply(this, arguments)
    }
    return B(n, t), n.prototype.name = "alignment", n.prototype.icon = "align-left", n.prototype.htmlTag = "p, h1, h2, h3, h4", n.prototype._init = function() {
      return this.menu = [{
        name: "left",
        text: this._t("alignLeft"),
        icon: "align-left",
        param: "left"
      }, {
        name: "center",
        text: this._t("alignCenter"),
        icon: "align-center",
        param: "center"
      }, {
        name: "right",
        text: this._t("alignRight"),
        icon: "align-right",
        param: "right"
      }], n.__super__._init.call(this)
    }, n.prototype.setActive = function(e, t) {
      return t == null && (t = "left"), t !== "left" && t !== "center" && t !== "right" && (t = "left"), t === "left" ? n.__super__.setActive.call(this, !1) : n.__super__.setActive.call(this, e), this.el.removeClass("align-left align-center align-right"), e && this.el.addClass("align-" + t), this.setIcon("align-" + t), this.menuEl.find(".menu-item").show().end().find(".menu-item-" + t).hide()
    }, n.prototype.status = function(e) {
      if (e == null) return !0;
      if (!this.editor.util.isBlockNode(e)) return;
      return this.setDisabled(!e.is(this.htmlTag)), this.disabled ? (this.setActive(!1), !0) : (this.setActive(!0, e.css("text-align")), this.active)
    }, n.prototype.command = function(t) {
      var n, r, i, s, o, u, a, f, l, c;
      if (["left", "center", "right"].indexOf(t) < 0) throw new Error("invalid " + t);
      f = this.editor.selection.getRange(), c = f.startContainer, o = f.endContainer, i = this.editor.util.closestBlockEl(c), r = this.editor.util.closestBlockEl(o), this.editor.selection.save(), n = i.is(r) ? i : i.nextUntil(r).addBack().add(r), l = n.filter(this.htmlTag);
      for (u = 0, a = l.length; u < a; u++) s = l[u], e(s).css("text-align", t === "left" ? "" : t);
      return this.editor.selection.restore(), this.editor.trigger("valuechanged")
    }, n
  }(u), k.Toolbar.addButton(i), k
}), define("editor", ["simditor"], function(e) {
    function t(t) {
      return new e({
        textarea: $(t),
        toolbar: ["bold", "color", "ol", "ul", "code", "link", "image"],
        toolbarFloat: !1,
        defaultImage: null,
        upload: {
          url: "/api/admin/upload_image/",
          params: null,
          fileKey: "image",
          connectionCount: 3,
          leaveConfirm: "正在上传文件，如果离开上传会自动取消"
        },
        pasteImage: !0,
        imageButton: ["upload"]
      })
    }
    return t
  }),
  function(e, t) {
    var n = {},
      r = function(e, t) {
        var n, r, i;
        if (typeof e == "string") return o(e);
        n = [];
        for (r = e.length, i = 0; i < r; i++) n.push(o(e[i]));
        return t.apply(null, n)
      },
      i = function(e, t, n) {
        arguments.length === 2 && (n = t, t = null), r(t || [], function() {
          s(e, n, arguments)
        })
      },
      s = function(e, t, i) {
        var s = {
            exports: t
          },
          o;
        typeof t == "function" && (i.length || (i = [r, s.exports, s]), o = t.apply(null, i), o !== undefined && (s.exports = o)), n[e] = s.exports
      },
      o = function(t) {
        var r = n[t] || e[t];
        if (!r) throw new Error("`" + t + "` is undefined");
        return r
      },
      u = function(e) {
        var t, r, i, s, o, u;
        u = function(e) {
          return e && e.charAt(0).toUpperCase() + e.substr(1)
        };
        for (t in n) {
          r = e;
          if (!n.hasOwnProperty(t)) continue;
          i = t.split("/"), o = u(i.pop());
          while (s = u(i.shift())) r[s] = r[s] || {}, r = r[s];
          r[o] = n[t]
        }
        return e
      },
      a = function(n) {
        return e.__dollar = n, u(t(e, i, r))
      },
      f;
    typeof module == "object" && typeof module.exports == "object" ? module.exports = a() : typeof define == "function" && define.amd ? define("webUploader", ["jquery"], a) : (f = e.WebUploader, e.WebUploader = a(), e.WebUploader.noConflict = function() {
      e.WebUploader = f
    })
  }(window, function(e, t, n) {
    return t("dollar-third", [], function() {
      var t = e.__dollar || e.jQuery || e.Zepto;
      if (!t) throw new Error("jQuery or Zepto not found!");
      return t
    }), t("dollar", ["dollar-third"], function(e) {
      return e
    }), t("promise-third", ["dollar"], function(e) {
      return {
        Deferred: e.Deferred,
        when: e.when,
        isPromise: function(e) {
          return e && typeof e.then == "function"
        }
      }
    }), t("promise", ["promise-third"], function(e) {
      return e
    }), t("base", ["dollar", "promise"], function(t, n) {
      function s(e) {
        return function() {
          return i.apply(e, arguments)
        }
      }

      function o(e, t) {
        return function() {
          return e.apply(t, arguments)
        }
      }

      function u(e) {
        var t;
        return Object.create ? Object.create(e) : (t = function() {}, t.prototype = e, new t)
      }
      var r = function() {},
        i = Function.call;
      return {
        version: "0.1.5",
        $: t,
        Deferred: n.Deferred,
        isPromise: n.isPromise,
        when: n.when,
        browser: function(e) {
          var t = {},
            n = e.match(/WebKit\/([\d.]+)/),
            r = e.match(/Chrome\/([\d.]+)/) || e.match(/CriOS\/([\d.]+)/),
            i = e.match(/MSIE\s([\d\.]+)/) || e.match(/(?:trident)(?:.*rv:([\w.]+))?/i),
            s = e.match(/Firefox\/([\d.]+)/),
            o = e.match(/Safari\/([\d.]+)/),
            u = e.match(/OPR\/([\d.]+)/);
          return n && (t.webkit = parseFloat(n[1])), r && (t.chrome = parseFloat(r[1])), i && (t.ie = parseFloat(i[1])), s && (t.firefox = parseFloat(s[1])), o && (t.safari = parseFloat(o[1])), u && (t.opera = parseFloat(u[1])), t
        }(navigator.userAgent),
        os: function(e) {
          var t = {},
            n = e.match(/(?:Android);?[\s\/]+([\d.]+)?/),
            r = e.match(/(?:iPad|iPod|iPhone).*OS\s([\d_]+)/);
          return n && (t.android = parseFloat(n[1])), r && (t.ios = parseFloat(r[1].replace(/_/g, "."))), t
        }(navigator.userAgent),
        inherits: function(e, n, r) {
          var i;
          return typeof n == "function" ? (i = n, n = null) : n && n.hasOwnProperty("constructor") ? i = n.constructor : i = function() {
            return e.apply(this, arguments)
          }, t.extend(!0, i, e, r || {}), i.__super__ = e.prototype, i.prototype = u(e.prototype), n && t.extend(!0, i.prototype, n), i
        },
        noop: r,
        bindFn: o,
        log: function() {
          return e.console ? o(console.log, console) : r
        }(),
        nextTick: function() {
          return function(e) {
            setTimeout(e, 1)
          }
        }(),
        slice: s([].slice),
        guid: function() {
          var e = 0;
          return function(t) {
            var n = (+(new Date)).toString(32),
              r = 0;
            for (; r < 5; r++) n += Math.floor(Math.random() * 65535).toString(32);
            return (t || "wu_") + n + (e++).toString(32)
          }
        }(),
        formatSize: function(e, t, n) {
          var r;
          n = n || ["B", "K", "M", "G", "TB"];
          while ((r = n.shift()) && e > 1024) e /= 1024;
          return (r === "B" ? e : e.toFixed(t || 2)) + r
        }
      }
    }), t("mediator", ["base"], function(e) {
      function s(e, n, r, i) {
        return t.grep(e, function(e) {
          return e && (!n || e.e === n) && (!r || e.cb === r || e.cb._cb === r) && (!i || e.ctx === i)
        })
      }

      function o(e, n, i) {
        t.each((e || "").split(r), function(e, t) {
          i(t, n)
        })
      }

      function u(e, t) {
        var n = !1,
          r = -1,
          i = e.length,
          s;
        while (++r < i) {
          s = e[r];
          if (s.cb.apply(s.ctx2, t) === !1) {
            n = !0;
            break
          }
        }
        return !n
      }
      var t = e.$,
        n = [].slice,
        r = /\s+/,
        i;
      return i = {
        on: function(e, t, n) {
          var r = this,
            i;
          return t ? (i = this._events || (this._events = []), o(e, t, function(e, t) {
            var s = {
              e: e
            };
            s.cb = t, s.ctx = n, s.ctx2 = n || r, s.id = i.length, i.push(s)
          }), this) : this
        },
        once: function(e, t, n) {
          var r = this;
          return t ? (o(e, t, function(e, t) {
            var i = function() {
              return r.off(e, i), t.apply(n || r, arguments)
            };
            i._cb = t, r.on(e, i, n)
          }), r) : r
        },
        off: function(e, n, r) {
          var i = this._events;
          return i ? !e && !n && !r ? (this._events = [], this) : (o(e, n, function(e, n) {
            t.each(s(i, e, n, r), function() {
              delete i[this.id]
            })
          }), this) : this
        },
        trigger: function(e) {
          var t, r, i;
          return !this._events || !e ? this : (t = n.call(arguments, 1), r = s(this._events, e), i = s(this._events, "all"), u(r, t) && u(i, arguments))
        }
      }, t.extend({
        installTo: function(e) {
          return t.extend(e, i)
        }
      }, i)
    }), t("uploader", ["base", "mediator"], function(e, t) {
      function r(e) {
        this.options = n.extend(!0, {}, r.options, e), this._init(this.options)
      }
      var n = e.$;
      return r.options = {}, t.installTo(r.prototype), n.each({
        upload: "start-upload",
        stop: "stop-upload",
        getFile: "get-file",
        getFiles: "get-files",
        addFile: "add-file",
        addFiles: "add-file",
        sort: "sort-files",
        removeFile: "remove-file",
        cancelFile: "cancel-file",
        skipFile: "skip-file",
        retry: "retry",
        isInProgress: "is-in-progress",
        makeThumb: "make-thumb",
        md5File: "md5-file",
        getDimension: "get-dimension",
        addButton: "add-btn",
        predictRuntimeType: "predict-runtime-type",
        refresh: "refresh",
        disable: "disable",
        enable: "enable",
        reset: "reset"
      }, function(e, t) {
        r.prototype[e] = function() {
          return this.request(t, arguments)
        }
      }), n.extend(r.prototype, {
        state: "pending",
        _init: function(e) {
          var t = this;
          t.request("init", e, function() {
            t.state = "ready", t.trigger("ready")
          })
        },
        option: function(e, t) {
          var r = this.options;
          if (!(arguments.length > 1)) return e ? r[e] : r;
          n.isPlainObject(t) && n.isPlainObject(r[e]) ? n.extend(r[e], t) : r[e] = t
        },
        getStats: function() {
          var e = this.request("get-stats");
          return e ? {
            successNum: e.numOfSuccess,
            progressNum: e.numOfProgress,
            cancelNum: e.numOfCancel,
            invalidNum: e.numOfInvalid,
            uploadFailNum: e.numOfUploadFailed,
            queueNum: e.numOfQueue,
            interruptNum: e.numofInterrupt
          } : {}
        },
        trigger: function(e) {
          var r = [].slice.call(arguments, 1),
            i = this.options,
            s = "on" + e.substring(0, 1).toUpperCase() + e.substring(1);
          return t.trigger.apply(this, arguments) === !1 || n.isFunction(i[s]) && i[s].apply(this, r) === !1 || n.isFunction(this[s]) && this[s].apply(this, r) === !1 || t.trigger.apply(t, [this, e].concat(r)) === !1 ? !1 : !0
        },
        destroy: function() {
          this.request("destroy", arguments), this.off()
        },
        request: e.noop
      }), e.create = r.create = function(e) {
        return new r(e)
      }, e.Uploader = r, r
    }), t("runtime/runtime", ["base", "mediator"], function(e, t) {
      function s(t) {
        this.options = n.extend({
          container: document.body
        }, t), this.uid = e.guid("rt_")
      }
      var n = e.$,
        r = {},
        i = function(e) {
          for (var t in e)
            if (e.hasOwnProperty(t)) return t;
          return null
        };
      return n.extend(s.prototype, {
        getContainer: function() {
          var e = this.options,
            t, r;
          return this._container ? this._container : (t = n(e.container || document.body), r = n(document.createElement("div")), r.attr("id", "rt_" + this.uid), r.css({
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "1px",
            height: "1px",
            overflow: "hidden"
          }), t.append(r), t.addClass("webuploader-container"), this._container = r, this._parent = t, r)
        },
        init: e.noop,
        exec: e.noop,
        destroy: function() {
          this._container && this._container.remove(), this._parent && this._parent.removeClass("webuploader-container"), this.off()
        }
      }), s.orders = "html5,flash", s.addRuntime = function(e, t) {
        r[e] = t
      }, s.hasRuntime = function(e) {
        return e ? !!r[e] : !!i(r)
      }, s.create = function(e, t) {
        var o, u;
        t = t || s.orders, n.each(t.split(/\s*,\s*/g), function() {
          if (r[this]) return o = this, !1
        }), o = o || i(r);
        if (!o) throw new Error("Runtime Error");
        return u = new r[o](e), u
      }, t.installTo(s.prototype), s
    }), t("runtime/client", ["base", "mediator", "runtime/runtime"], function(e, t, n) {
      function i(t, i) {
        var s = e.Deferred(),
          o;
        this.uid = e.guid("client_"), this.runtimeReady = function(e) {
          return s.done(e)
        }, this.connectRuntime = function(t, u) {
          if (o) throw new Error("already connected!");
          return s.done(u), typeof t == "string" && r.get(t) && (o = r.get(t)), o = o || r.get(null, i), o ? (e.$.extend(o.options, t), o.__promise.then(s.resolve), o.__client++) : (o = n.create(t, t.runtimeOrder), o.__promise = s.promise(), o.once("ready", s.resolve), o.init(), r.add(o), o.__client = 1), i && (o.__standalone = i), o
        }, this.getRuntime = function() {
          return o
        }, this.disconnectRuntime = function() {
          if (!o) return;
          o.__client--, o.__client <= 0 && (r.remove(o), delete o.__promise, o.destroy()), o = null
        }, this.exec = function() {
          if (!o) return;
          var n = e.slice(arguments);
          return t && n.unshift(t), o.exec.apply(this, n)
        }, this.getRuid = function() {
          return o && o.uid
        }, this.destroy = function(e) {
          return function() {
            e && e.apply(this, arguments), this.trigger("destroy"), this.off(), this.exec("destroy"), this.disconnectRuntime()
          }
        }(this.destroy)
      }
      var r;
      return r = function() {
        var e = {};
        return {
          add: function(t) {
            e[t.uid] = t
          },
          get: function(t, n) {
            var r;
            if (t) return e[t];
            for (r in e) {
              if (n && e[r].__standalone) continue;
              return e[r]
            }
            return null
          },
          remove: function(t) {
            delete e[t.uid]
          }
        }
      }(), t.installTo(i.prototype), i
    }), t("lib/dnd", ["base", "mediator", "runtime/client"], function(e, t, n) {
      function i(e) {
        e = this.options = r.extend({}, i.options, e), e.container = r(e.container);
        if (!e.container.length) return;
        n.call(this, "DragAndDrop")
      }
      var r = e.$;
      return i.options = {
        accept: null,
        disableGlobalDnd: !1
      }, e.inherits(n, {
        constructor: i,
        init: function() {
          var e = this;
          e.connectRuntime(e.options, function() {
            e.exec("init"), e.trigger("ready")
          })
        }
      }), t.installTo(i.prototype), i
    }), t("widgets/widget", ["base", "uploader"], function(e, t) {
      function u(e) {
        if (!e) return !1;
        var t = e.length,
          r = n.type(e);
        return e.nodeType === 1 && t ? !0 : r === "array" || r !== "function" && r !== "string" && (t === 0 || typeof t == "number" && t > 0 && t - 1 in e)
      }

      function a(e) {
        this.owner = e, this.options = e.options
      }
      var n = e.$,
        r = t.prototype._init,
        i = t.prototype.destroy,
        s = {},
        o = [];
      return n.extend(a.prototype, {
        init: e.noop,
        invoke: function(e, t) {
          var r = this.responseMap;
          return !!r && e in r && r[e] in this && !!n.isFunction(this[r[e]]) ? this[r[e]].apply(this, t) : s
        },
        request: function() {
          return this.owner.request.apply(this.owner, arguments)
        }
      }), n.extend(t.prototype, {
        _init: function() {
          var e = this,
            t = e._widgets = [],
            i = e.options.disableWidgets || "";
          return n.each(o, function(n, r) {
            (!i || !~i.indexOf(r._name)) && t.push(new r(e))
          }), r.apply(e, arguments)
        },
        request: function(t, n, r) {
          var i = 0,
            o = this._widgets,
            a = o && o.length,
            f = [],
            l = [],
            c, h, p, d;
          n = u(n) ? n : [n];
          for (; i < a; i++) c = o[i], h = c.invoke(t, n), h !== s && (e.isPromise(h) ? l.push(h) : f.push(h));
          return r || l.length ? (p = e.when.apply(e, l), d = p.pipe ? "pipe" : "then", p[d](function() {
            var t = e.Deferred(),
              n = arguments;
            return n.length === 1 && (n = n[0]), setTimeout(function() {
              t.resolve(n)
            }, 1), t.promise()
          })[r ? d : "done"](r || e.noop)) : f[0]
        },
        destroy: function() {
          i.apply(this, arguments), this._widgets = null
        }
      }), t.register = a.register = function(t, r) {
        var i = {
            init: "init",
            destroy: "destroy",
            name: "anonymous"
          },
          s;
        return arguments.length === 1 ? (r = t, n.each(r, function(e) {
          if (e[0] === "_" || e === "name") {
            e === "name" && (i.name = r.name);
            return
          }
          i[e.replace(/[A-Z]/g, "-$&").toLowerCase()] = e
        })) : i = n.extend(i, t), r.responseMap = i, s = e.inherits(a, r), s._name = i.name, o.push(s), s
      }, t.unRegister = a.unRegister = function(e) {
        if (!e || e === "anonymous") return;
        for (var t = o.length; t--;) o[t]._name === e && o.splice(t, 1)
      }, a
    }), t("widgets/filednd", ["base", "uploader", "lib/dnd", "widgets/widget"], function(e, t, n) {
      var r = e.$;
      return t.options.dnd = "", t.register({
        name: "dnd",
        init: function(t) {
          if (!t.dnd || this.request("predict-runtime-type") !== "html5") return;
          var i = this,
            s = e.Deferred(),
            o = r.extend({}, {
              disableGlobalDnd: t.disableGlobalDnd,
              container: t.dnd,
              accept: t.accept
            }),
            u;
          return this.dnd = u = new n(o), u.once("ready", s.resolve), u.on("drop", function(e) {
            i.request("add-file", [e])
          }), u.on("accept", function(e) {
            return i.owner.trigger("dndAccept", e)
          }), u.init(), s.promise()
        },
        destroy: function() {
          this.dnd && this.dnd.destroy()
        }
      })
    }), t("lib/filepaste", ["base", "mediator", "runtime/client"], function(e, t, n) {
      function i(e) {
        e = this.options = r.extend({}, e), e.container = r(e.container || document.body), n.call(this, "FilePaste")
      }
      var r = e.$;
      return e.inherits(n, {
        constructor: i,
        init: function() {
          var e = this;
          e.connectRuntime(e.options, function() {
            e.exec("init"), e.trigger("ready")
          })
        }
      }), t.installTo(i.prototype), i
    }), t("widgets/filepaste", ["base", "uploader", "lib/filepaste", "widgets/widget"], function(e, t, n) {
      var r = e.$;
      return t.register({
        name: "paste",
        init: function(t) {
          if (!t.paste || this.request("predict-runtime-type") !== "html5") return;
          var i = this,
            s = e.Deferred(),
            o = r.extend({}, {
              container: t.paste,
              accept: t.accept
            }),
            u;
          return this.paste = u = new n(o), u.once("ready", s.resolve), u.on("paste", function(e) {
            i.owner.request("add-file", [e])
          }), u.init(), s.promise()
        },
        destroy: function() {
          this.paste && this.paste.destroy()
        }
      })
    }), t("lib/blob", ["base", "runtime/client"], function(e, t) {
      function n(e, n) {
        var r = this;
        r.source = n, r.ruid = e, this.size = n.size || 0, !n.type && this.ext && ~"jpg,jpeg,png,gif,bmp".indexOf(this.ext) ? this.type = "image/" + (this.ext === "jpg" ? "jpeg" : this.ext) : this.type = n.type || "application/octet-stream", t.call(r, "Blob"), this.uid = n.uid || this.uid, e && r.connectRuntime(e)
      }
      return e.inherits(t, {
        constructor: n,
        slice: function(e, t) {
          return this.exec("slice", e, t)
        },
        getSource: function() {
          return this.source
        }
      }), n
    }), t("lib/file", ["base", "lib/blob"], function(e, t) {
      function i(e, i) {
        var s;
        this.name = i.name || "untitled" + n++, s = r.exec(i.name) ? RegExp.$1.toLowerCase() : "", !s && i.type && (s = /\/(jpg|jpeg|png|gif|bmp)$/i.exec(i.type) ? RegExp.$1.toLowerCase() : "", this.name += "." + s), this.ext = s, this.lastModifiedDate = i.lastModifiedDate || (new Date).toLocaleString(), t.apply(this, arguments)
      }
      var n = 1,
        r = /\.([^.]+)$/;
      return e.inherits(t, i)
    }), t("lib/filepicker", ["base", "runtime/client", "lib/file"], function(t, n, r) {
      function s(e) {
        e = this.options = i.extend({}, s.options, e), e.container = i(e.id);
        if (!e.container.length) throw new Error("按钮指定错误");
        e.innerHTML = e.innerHTML || e.label || e.container.html() || "", e.button = i(e.button || document.createElement("div")), e.button.html(e.innerHTML), e.container.html(e.button), n.call(this, "FilePicker", !0)
      }
      var i = t.$;
      return s.options = {
        button: null,
        container: null,
        label: null,
        innerHTML: null,
        multiple: !0,
        accept: null,
        name: "file"
      }, t.inherits(n, {
        constructor: s,
        init: function() {
          var n = this,
            s = n.options,
            o = s.button;
          o.addClass("webuploader-pick"), n.on("all", function(e) {
            var t;
            switch (e) {
              case "mouseenter":
                o.addClass("webuploader-pick-hover");
                break;
              case "mouseleave":
                o.removeClass("webuploader-pick-hover");
                break;
              case "change":
                t = n.exec("getFiles"), n.trigger("select", i.map(t, function(e) {
                  return e = new r(n.getRuid(), e), e._refer = s.container, e
                }), s.container)
            }
          }), n.connectRuntime(s, function() {
            n.refresh(), n.exec("init", s), n.trigger("ready")
          }), this._resizeHandler = t.bindFn(this.refresh, this), i(e).on("resize", this._resizeHandler)
        },
        refresh: function() {
          var e = this.getRuntime().getContainer(),
            t = this.options.button,
            n = t.outerWidth ? t.outerWidth() : t.width(),
            r = t.outerHeight ? t.outerHeight() : t.height(),
            i = t.offset();
          n && r && e.css({
            bottom: "auto",
            right: "auto",
            width: n + "px",
            height: r + "px"
          }).offset(i)
        },
        enable: function() {
          var e = this.options.button;
          e.removeClass("webuploader-pick-disable"), this.refresh()
        },
        disable: function() {
          var e = this.options.button;
          this.getRuntime().getContainer().css({
            top: "-99999px"
          }), e.addClass("webuploader-pick-disable")
        },
        destroy: function() {
          var t = this.options.button;
          i(e).off("resize", this._resizeHandler), t.removeClass("webuploader-pick-disable webuploader-pick-hover webuploader-pick")
        }
      }), s
    }), t("widgets/filepicker", ["base", "uploader", "lib/filepicker", "widgets/widget"], function(e, t, n) {
      var r = e.$;
      return r.extend(t.options, {
        pick: null,
        accept: null
      }), t.register({
        name: "picker",
        init: function(e) {
          return this.pickers = [], e.pick && this.addBtn(e.pick)
        },
        refresh: function() {
          r.each(this.pickers, function() {
            this.refresh()
          })
        },
        addBtn: function(t) {
          var i = this,
            s = i.options,
            o = s.accept,
            u = [];
          if (!t) return;
          return r.isPlainObject(t) || (t = {
            id: t
          }), r(t.id).each(function() {
            var a, f, l;
            l = e.Deferred(), a = r.extend({}, t, {
              accept: r.isPlainObject(o) ? [o] : o,
              swf: s.swf,
              runtimeOrder: s.runtimeOrder,
              id: this
            }), f = new n(a), f.once("ready", l.resolve), f.on("select", function(e) {
              i.owner.request("add-file", [e])
            }), f.init(), i.pickers.push(f), u.push(l.promise())
          }), e.when.apply(e, u)
        },
        disable: function() {
          r.each(this.pickers, function() {
            this.disable()
          })
        },
        enable: function() {
          r.each(this.pickers, function() {
            this.enable()
          })
        },
        destroy: function() {
          r.each(this.pickers, function() {
            this.destroy()
          }), this.pickers = null
        }
      })
    }), t("lib/image", ["base", "runtime/client", "lib/blob"], function(e, t, n) {
      function i(e) {
        this.options = r.extend({}, i.options, e), t.call(this, "Image"), this.on("load", function() {
          this._info = this.exec("info"), this._meta = this.exec("meta")
        })
      }
      var r = e.$;
      return i.options = {
        quality: 90,
        crop: !1,
        preserveHeaders: !1,
        allowMagnify: !1
      }, e.inherits(t, {
        constructor: i,
        info: function(e) {
          return e ? (this._info = e, this) : this._info
        },
        meta: function(e) {
          return e ? (this._meta = e, this) : this._meta
        },
        loadFromBlob: function(e) {
          var t = this,
            n = e.getRuid();
          this.connectRuntime(n, function() {
            t.exec("init", t.options), t.exec("loadFromBlob", e)
          })
        },
        resize: function() {
          var t = e.slice(arguments);
          return this.exec.apply(this, ["resize"].concat(t))
        },
        crop: function() {
          var t = e.slice(arguments);
          return this.exec.apply(this, ["crop"].concat(t))
        },
        getAsDataUrl: function(e) {
          return this.exec("getAsDataUrl", e)
        },
        getAsBlob: function(e) {
          var t = this.exec("getAsBlob", e);
          return new n(this.getRuid(), t)
        }
      }), i
    }), t("widgets/image", ["base", "uploader", "lib/image", "widgets/widget"], function(e, t, n) {
      var r = e.$,
        i;
      return i = function(e) {
        var t = 0,
          n = [],
          r = function() {
            var r;
            while (n.length && t < e) r = n.shift(), t += r[0], r[1]()
          };
        return function(e, i, s) {
          n.push([i, s]), e.once("destroy", function() {
            t -= i, setTimeout(r, 1)
          }), setTimeout(r, 1)
        }
      }(5242880), r.extend(t.options, {
        thumb: {
          width: 110,
          height: 110,
          quality: 70,
          allowMagnify: !0,
          crop: !0,
          preserveHeaders: !1,
          type: "image/jpeg"
        },
        compress: {
          width: 1600,
          height: 1600,
          quality: 90,
          allowMagnify: !1,
          crop: !1,
          preserveHeaders: !0
        }
      }), t.register({
        name: "image",
        makeThumb: function(e, t, s, o) {
          var u, a;
          e = this.request("get-file", e);
          if (!e.type.match(/^image/)) {
            t(!0);
            return
          }
          u = r.extend({}, this.options.thumb), r.isPlainObject(s) && (u = r.extend(u, s), s = null), s = s || u.width, o = o || u.height, a = new n(u), a.once("load", function() {
            e._info = e._info || a.info(), e._meta = e._meta || a.meta(), s <= 1 && s > 0 && (s = e._info.width * s), o <= 1 && o > 0 && (o = e._info.height * o), a.resize(s, o)
          }), a.once("complete", function() {
            t(!1, a.getAsDataUrl(u.type)), a.destroy()
          }), a.once("error", function(e) {
            t(e || !0), a.destroy()
          }), i(a, e.source.size, function() {
            e._info && a.info(e._info), e._meta && a.meta(e._meta), a.loadFromBlob(e.source)
          })
        },
        beforeSendFile: function(t) {
          var i = this.options.compress || this.options.resize,
            s = i && i.compressSize || 0,
            o = i && i.noCompressIfLarger || !1,
            u, a;
          t = this.request("get-file", t);
          if (!i || !~"image/jpeg,image/jpg".indexOf(t.type) || t.size < s || t._compressed) return;
          return i = r.extend({}, i), a = e.Deferred(), u = new n(i), a.always(function() {
            u.destroy(), u = null
          }), u.once("error", a.reject), u.once("load", function() {
            var e = i.width,
              n = i.height;
            t._info = t._info || u.info(), t._meta = t._meta || u.meta(), e <= 1 && e > 0 && (e = t._info.width * e), n <= 1 && n > 0 && (n = t._info.height * n), u.resize(e, n)
          }), u.once("complete", function() {
            var e, n;
            try {
              e = u.getAsBlob(i.type), n = t.size;
              if (!o || e.size < n) t.source = e, t.size = e.size, t.trigger("resize", e.size, n);
              t._compressed = !0, a.resolve()
            } catch (r) {
              a.resolve()
            }
          }), t._info && u.info(t._info), t._meta && u.meta(t._meta), u.loadFromBlob(t.source), a.promise()
        }
      })
    }), t("file", ["base", "mediator"], function(e, t) {
      function u() {
        return r + i++
      }

      function a(e) {
        this.name = e.name || "Untitled", this.size = e.size || 0, this.type = e.type || "application/octet-stream", this.lastModifiedDate = e.lastModifiedDate || new Date * 1, this.id = u(), this.ext = s.exec(this.name) ? RegExp.$1 : "", this.statusText = "", o[this.id] = a.Status.INITED, this.source = e, this.loaded = 0, this.on("error", function(e) {
          this.setStatus(a.Status.ERROR, e)
        })
      }
      var n = e.$,
        r = "WU_FILE_",
        i = 0,
        s = /\.([^.]+)$/,
        o = {};
      return n.extend(a.prototype, {
        setStatus: function(e, t) {
          var n = o[this.id];
          typeof t != "undefined" && (this.statusText = t), e !== n && (o[this.id] = e, this.trigger("statuschange", e, n))
        },
        getStatus: function() {
          return o[this.id]
        },
        getSource: function() {
          return this.source
        },
        destroy: function() {
          this.off(), delete o[this.id]
        }
      }), t.installTo(a.prototype), a.Status = {
        INITED: "inited",
        QUEUED: "queued",
        PROGRESS: "progress",
        ERROR: "error",
        COMPLETE: "complete",
        CANCELLED: "cancelled",
        INTERRUPT: "interrupt",
        INVALID: "invalid"
      }, a
    }), t("queue", ["base", "mediator", "file"], function(e, t, n) {
      function s() {
        this.stats = {
          numOfQueue: 0,
          numOfSuccess: 0,
          numOfCancel: 0,
          numOfProgress: 0,
          numOfUploadFailed: 0,
          numOfInvalid: 0,
          numofDeleted: 0,
          numofInterrupt: 0
        }, this._queue = [], this._map = {}
      }
      var r = e.$,
        i = n.Status;
      return r.extend(s.prototype, {
        append: function(e) {
          return this._queue.push(e), this._fileAdded(e), this
        },
        prepend: function(e) {
          return this._queue.unshift(e), this._fileAdded(e), this
        },
        getFile: function(e) {
          return typeof e != "string" ? e : this._map[e]
        },
        fetch: function(e) {
          var t = this._queue.length,
            n, r;
          e = e || i.QUEUED;
          for (n = 0; n < t; n++) {
            r = this._queue[n];
            if (e === r.getStatus()) return r
          }
          return null
        },
        sort: function(e) {
          typeof e == "function" && this._queue.sort(e)
        },
        getFiles: function() {
          var e = [].slice.call(arguments, 0),
            t = [],
            n = 0,
            i = this._queue.length,
            s;
          for (; n < i; n++) {
            s = this._queue[n];
            if (e.length && !~r.inArray(s.getStatus(), e)) continue;
            t.push(s)
          }
          return t
        },
        removeFile: function(e) {
          var t = this,
            n = this._map[e.id];
          n && (delete this._map[e.id], e.destroy(), this.stats.numofDeleted++)
        },
        _fileAdded: function(e) {
          var t = this,
            n = this._map[e.id];
          n || (this._map[e.id] = e, e.on("statuschange", function(e, n) {
            t._onFileStatusChange(e, n)
          }))
        },
        _onFileStatusChange: function(e, t) {
          var n = this.stats;
          switch (t) {
            case i.PROGRESS:
              n.numOfProgress--;
              break;
            case i.QUEUED:
              n.numOfQueue--;
              break;
            case i.ERROR:
              n.numOfUploadFailed--;
              break;
            case i.INVALID:
              n.numOfInvalid--;
              break;
            case i.INTERRUPT:
              n.numofInterrupt--
          }
          switch (e) {
            case i.QUEUED:
              n.numOfQueue++;
              break;
            case i.PROGRESS:
              n.numOfProgress++;
              break;
            case i.ERROR:
              n.numOfUploadFailed++;
              break;
            case i.COMPLETE:
              n.numOfSuccess++;
              break;
            case i.CANCELLED:
              n.numOfCancel++;
              break;
            case i.INVALID:
              n.numOfInvalid++;
              break;
            case i.INTERRUPT:
              n.numofInterrupt++
          }
        }
      }), t.installTo(s.prototype), s
    }), t("widgets/queue", ["base", "uploader", "queue", "file", "lib/file", "runtime/client", "widgets/widget"], function(e, t, n, r, i, s) {
      var o = e.$,
        u = /\.\w+$/,
        a = r.Status;
      return t.register({
        name: "queue",
        init: function(t) {
          var r = this,
            i, u, a, f, l, c, h;
          o.isPlainObject(t.accept) && (t.accept = [t.accept]);
          if (t.accept) {
            l = [];
            for (a = 0, u = t.accept.length; a < u; a++) f = t.accept[a].extensions, f && l.push(f);
            l.length && (c = "\\." + l.join(",").replace(/,/g, "$|\\.").replace(/\*/g, ".*") + "$"), r.accept = new RegExp(c, "i")
          }
          r.queue = new n, r.stats = r.queue.stats;
          if (this.request("predict-runtime-type") !== "html5") return;
          return i = e.Deferred(), this.placeholder = h = new s("Placeholder"), h.connectRuntime({
            runtimeOrder: "html5"
          }, function() {
            r._ruid = h.getRuid(), i.resolve()
          }), i.promise()
        },
        _wrapFile: function(e) {
          if (!(e instanceof r)) {
            if (!(e instanceof i)) {
              if (!this._ruid) throw new Error("Can't add external files.");
              e = new i(this._ruid, e)
            }
            e = new r(e)
          }
          return e
        },
        acceptFile: function(e) {
          var t = !e || !e.size || this.accept && u.exec(e.name) && !this.accept.test(e.name);
          return !t
        },
        _addFile: function(e) {
          var t = this;
          e = t._wrapFile(e);
          if (!t.owner.trigger("beforeFileQueued", e)) return;
          if (!t.acceptFile(e)) {
            t.owner.trigger("error", "Q_TYPE_DENIED", e);
            return
          }
          return t.queue.append(e), t.owner.trigger("fileQueued", e), e
        },
        getFile: function(e) {
          return this.queue.getFile(e)
        },
        addFile: function(e) {
          var t = this;
          e.length || (e = [e]), e = o.map(e, function(e) {
            return t._addFile(e)
          }), t.owner.trigger("filesQueued", e), t.options.auto && setTimeout(function() {
            t.request("start-upload")
          }, 20)
        },
        getStats: function() {
          return this.stats
        },
        removeFile: function(e, t) {
          var n = this;
          e = e.id ? e : n.queue.getFile(e), this.request("cancel-file", e), t && this.queue.removeFile(e)
        },
        getFiles: function() {
          return this.queue.getFiles.apply(this.queue, arguments)
        },
        fetchFile: function() {
          return this.queue.fetch.apply(this.queue, arguments)
        },
        retry: function(e, t) {
          var n = this,
            r, i, s;
          if (e) {
            e = e.id ? e : n.queue.getFile(e), e.setStatus(a.QUEUED), t || n.request("start-upload");
            return
          }
          r = n.queue.getFiles(a.ERROR), i = 0, s = r.length;
          for (; i < s; i++) e = r[i], e.setStatus(a.QUEUED);
          n.request("start-upload")
        },
        sortFiles: function() {
          return this.queue.sort.apply(this.queue, arguments)
        },
        reset: function() {
          this.owner.trigger("reset"), this.queue = new n, this.stats = this.queue.stats
        },
        destroy: function() {
          this.reset(), this.placeholder && this.placeholder.destroy()
        }
      })
    }), t("widgets/runtime", ["uploader", "runtime/runtime", "widgets/widget"], function(e, t) {
      return e.support = function() {
        return t.hasRuntime.apply(t, arguments)
      }, e.register({
        name: "runtime",
        init: function() {
          if (!this.predictRuntimeType()) throw Error("Runtime Error")
        },
        predictRuntimeType: function() {
          var e = this.options.runtimeOrder || t.orders,
            n = this.type,
            r, i;
          if (!n) {
            e = e.split(/\s*,\s*/g);
            for (r = 0, i = e.length; r < i; r++)
              if (t.hasRuntime(e[r])) {
                this.type = n = e[r];
                break
              }
          }
          return n
        }
      })
    }), t("lib/transport", ["base", "runtime/client", "mediator"], function(e, t, n) {
      function i(e) {
        var n = this;
        e = n.options = r.extend(!0, {}, i.options, e || {}), t.call(this, "Transport"), this._blob = null, this._formData = e.formData || {}, this._headers = e.headers || {}, this.on("progress", this._timeout), this.on("load error", function() {
          n.trigger("progress", 1), clearTimeout(n._timer)
        })
      }
      var r = e.$;
      return i.options = {
        server: "",
        method: "POST",
        withCredentials: !1,
        fileVal: "file",
        timeout: 12e4,
        formData: {},
        headers: {},
        sendAsBinary: !1
      }, r.extend(i.prototype, {
        appendBlob: function(e, t, n) {
          var r = this,
            i = r.options;
          r.getRuid() && r.disconnectRuntime(), r.connectRuntime(t.ruid, function() {
            r.exec("init")
          }), r._blob = t, i.fileVal = e || i.fileVal, i.filename = n || i.filename
        },
        append: function(e, t) {
          typeof e == "object" ? r.extend(this._formData, e) : this._formData[e] = t
        },
        setRequestHeader: function(e, t) {
          typeof e == "object" ? r.extend(this._headers, e) : this._headers[e] = t
        },
        send: function(e) {
          this.exec("send", e), this._timeout()
        },
        abort: function() {
          return clearTimeout(this._timer), this.exec("abort")
        },
        destroy: function() {
          this.trigger("destroy"), this.off(), this.exec("destroy"), this.disconnectRuntime()
        },
        getResponse: function() {
          return this.exec("getResponse")
        },
        getResponseAsJson: function() {
          return this.exec("getResponseAsJson")
        },
        getStatus: function() {
          return this.exec("getStatus")
        },
        _timeout: function() {
          var e = this,
            t = e.options.timeout;
          if (!t) return;
          clearTimeout(e._timer), e._timer = setTimeout(function() {
            e.abort(), e.trigger("error", "timeout")
          }, t)
        }
      }), n.installTo(i.prototype), i
    }), t("widgets/upload", ["base", "uploader", "file", "lib/transport", "widgets/widget"], function(e, t, n, r) {
      function u(e, t) {
        var n = [],
          r = e.source,
          i = r.size,
          s = t ? Math.ceil(i / t) : 1,
          o = 0,
          u = 0,
          a, f;
        f = {
          file: e,
          has: function() {
            return !!n.length
          },
          shift: function() {
            return n.shift()
          },
          unshift: function(e) {
            n.unshift(e)
          }
        };
        while (u < s) a = Math.min(t, i - o), n.push({
          file: e,
          start: o,
          end: t ? o + a : i,
          total: i,
          chunks: s,
          chunk: u++,
          cuted: f
        }), o += a;
        return e.blocks = n.concat(), e.remaning = n.length, f
      }
      var i = e.$,
        s = e.isPromise,
        o = n.Status;
      i.extend(t.options, {
        prepareNextFile: !1,
        chunked: !1,
        chunkSize: 5242880,
        chunkRetry: 2,
        threads: 3,
        formData: {}
      }), t.register({
        name: "upload",
        init: function() {
          var t = this.owner,
            n = this;
          this.runing = !1, this.progress = !1, t.on("startUpload", function() {
            n.progress = !0
          }).on("uploadFinished", function() {
            n.progress = !1
          }), this.pool = [], this.stack = [], this.pending = [], this.remaning = 0, this.__tick = e.bindFn(this._tick, this), t.on("uploadComplete", function(e) {
            e.blocks && i.each(e.blocks, function(e, t) {
              t.transport && (t.transport.abort(), t.transport.destroy()), delete t.transport
            }), delete e.blocks, delete e.remaning
          })
        },
        reset: function() {
          this.request("stop-upload", !0), this.runing = !1, this.pool = [], this.stack = [], this.pending = [], this.remaning = 0, this._trigged = !1, this._promise = null
        },
        startUpload: function(t) {
          var n = this;
          i.each(n.request("get-files", o.INVALID), function() {
            n.request("remove-file", this)
          });
          if (t) {
            t = t.id ? t : n.request("get-file", t);
            if (t.getStatus() === o.INTERRUPT) i.each(n.pool, function(e, n) {
              if (n.file !== t) return;
              n.transport && n.transport.send()
            }), t.setStatus(o.QUEUED);
            else {
              if (t.getStatus() === o.PROGRESS) return;
              t.setStatus(o.QUEUED)
            }
          } else i.each(n.request("get-files", [o.INITED]), function() {
            this.setStatus(o.QUEUED)
          });
          if (n.runing) return;
          n.runing = !0;
          var r = [];
          i.each(n.pool, function(e, t) {
            var i = t.file;
            i.getStatus() === o.INTERRUPT && (r.push(i), n._trigged = !1, t.transport && t.transport.send())
          });
          var t;
          while (t = r.shift()) t.setStatus(o.PROGRESS);
          t || i.each(n.request("get-files", o.INTERRUPT), function() {
            this.setStatus(o.PROGRESS)
          }), n._trigged = !1, e.nextTick(n.__tick), n.owner.trigger("startUpload")
        },
        stopUpload: function(t, n) {
          var r = this;
          t === !0 && (n = t, t = null);
          if (r.runing === !1) return;
          if (t) {
            t = t.id ? t : r.request("get-file", t);
            if (t.getStatus() !== o.PROGRESS && t.getStatus() !== o.QUEUED) return;
            return t.setStatus(o.INTERRUPT), i.each(r.pool, function(e, n) {
              if (n.file !== t) return;
              n.transport && n.transport.abort(), r._putback(n), r._popBlock(n)
            }), e.nextTick(r.__tick)
          }
          r.runing = !1, this._promise && this._promise.file && this._promise.file.setStatus(o.INTERRUPT), n && i.each(r.pool, function(e, t) {
            t.transport && t.transport.abort(), t.file.setStatus(o.INTERRUPT)
          }), r.owner.trigger("stopUpload")
        },
        cancelFile: function(e) {
          e = e.id ? e : this.request("get-file", e), e.blocks && i.each(e.blocks, function(e, t) {
            var n = t.transport;
            n && (n.abort(), n.destroy(), delete t.transport)
          }), e.setStatus(o.CANCELLED), this.owner.trigger("fileDequeued", e)
        },
        isInProgress: function() {
          return !!this.progress
        },
        _getStats: function() {
          return this.request("get-stats")
        },
        skipFile: function(e, t) {
          e = e.id ? e : this.request("get-file", e), e.setStatus(t || o.COMPLETE), e.skipped = !0, e.blocks && i.each(e.blocks, function(e, t) {
            var n = t.transport;
            n && (n.abort(), n.destroy(), delete t.transport)
          }), this.owner.trigger("uploadSkip", e)
        },
        _tick: function() {
          var t = this,
            n = t.options,
            r, i;
          if (t._promise) return t._promise.always(t.__tick);
          t.pool.length < n.threads && (i = t._nextBlock()) ? (t._trigged = !1, r = function(n) {
            t._promise = null, n && n.file && t._startSend(n), e.nextTick(t.__tick)
          }, t._promise = s(i) ? i.always(r) : r(i)) : !t.remaning && !t._getStats().numOfQueue && !t._getStats().numofInterrupt && (t.runing = !1, t._trigged || e.nextTick(function() {
            t.owner.trigger("uploadFinished")
          }), t._trigged = !0)
        },
        _putback: function(e) {
          var t;
          e.cuted.unshift(e), t = this.stack.indexOf(e.cuted), ~t || this.stack.unshift(e.cuted)
        },
        _getStack: function() {
          var e = 0,
            t;
          while (t = this.stack[e++]) {
            if (t.has() && t.file.getStatus() === o.PROGRESS) return t;
            (!t.has() || t.file.getStatus() !== o.PROGRESS && t.file.getStatus() !== o.INTERRUPT) && this.stack.splice(--e, 1)
          }
          return null
        },
        _nextBlock: function() {
          var e = this,
            t = e.options,
            n, r, i, o;
          if (n = this._getStack()) return t.prepareNextFile && !e.pending.length && e._prepareNextFile(), n.shift();
          if (e.runing) return !e.pending.length && e._getStats().numOfQueue && e._prepareNextFile(), r = e.pending.shift(), i = function(r) {
            return r ? (n = u(r, t.chunked ? t.chunkSize : 0), e.stack.push(n), n.shift()) : null
          }, s(r) ? (o = r.file, r = r[r.pipe ? "pipe" : "then"](i), r.file = o, r) : i(r)
        },
        _prepareNextFile: function() {
          var e = this,
            t = e.request("fetch-file"),
            n = e.pending,
            r;
          t && (r = e.request("before-send-file", t, function() {
            return t.getStatus() === o.PROGRESS || t.getStatus() === o.INTERRUPT ? t : e._finishFile(t)
          }), e.owner.trigger("uploadStart", t), t.setStatus(o.PROGRESS), r.file = t, r.done(function() {
            var e = i.inArray(r, n);
            ~e && n.splice(e, 1, t)
          }), r.fail(function(n) {
            t.setStatus(o.ERROR, n), e.owner.trigger("uploadError", t, n), e.owner.trigger("uploadComplete", t)
          }), n.push(r))
        },
        _popBlock: function(e) {
          var t = i.inArray(e, this.pool);
          this.pool.splice(t, 1), e.file.remaning--, this.remaning--
        },
        _startSend: function(t) {
          var n = this,
            r = t.file,
            i;
          if (r.getStatus() !== o.PROGRESS) {
            r.getStatus() === o.INTERRUPT && n._putback(t);
            return
          }
          n.pool.push(t), n.remaning++, t.blob = t.chunks === 1 ? r.source : r.source.slice(t.start, t.end), i = n.request("before-send", t, function() {
            r.getStatus() === o.PROGRESS ? n._doSend(t) : (n._popBlock(t), e.nextTick(n.__tick))
          }), i.fail(function() {
            r.remaning === 1 ? n._finishFile(r).always(function() {
              t.percentage = 1, n._popBlock(t), n.owner.trigger("uploadComplete", r), e.nextTick(n.__tick)
            }) : (t.percentage = 1, n.updateFileProgress(r), n._popBlock(t), e.nextTick(n.__tick))
          })
        },
        _doSend: function(t) {
          var n = this,
            s = n.owner,
            u = n.options,
            a = t.file,
            f = new r(u),
            l = i.extend({}, u.formData),
            c = i.extend({}, u.headers),
            h, p;
          t.transport = f, f.on("destroy", function() {
            delete t.transport, n._popBlock(t), e.nextTick(n.__tick)
          }), f.on("progress", function(e) {
            t.percentage = e, n.updateFileProgress(a)
          }), h = function(e) {
            var n;
            return p = f.getResponseAsJson() || {}, p._raw = f.getResponse(), n = function(t) {
              e = t
            }, s.trigger("uploadAccept", t, p, n) || (e = e || "server"), e
          }, f.on("error", function(e, n) {
            t.retried = t.retried || 0, t.chunks > 1 && ~"http,abort".indexOf(e) && t.retried < u.chunkRetry ? (t.retried++, f.send()) : (!n && e === "server" && (e = h(e)), a.setStatus(o.ERROR, e), s.trigger("uploadError", a, e), s.trigger("uploadComplete", a))
          }), f.on("load", function() {
            var e;
            if (e = h()) {
              f.trigger("error", e, !0);
              return
            }
            a.remaning === 1 ? n._finishFile(a, p) : f.destroy()
          }), l = i.extend(l, {
            id: a.id,
            name: a.name,
            type: a.type,
            lastModifiedDate: a.lastModifiedDate,
            size: a.size
          }), t.chunks > 1 && i.extend(l, {
            chunks: t.chunks,
            chunk: t.chunk
          }), s.trigger("uploadBeforeSend", t, l, c), f.appendBlob(u.fileVal, t.blob, a.name), f.append(l), f.setRequestHeader(c), f.send()
        },
        _finishFile: function(e, t, n) {
          var r = this.owner;
          return r.request("after-send-file", arguments, function() {
            e.setStatus(o.COMPLETE), r.trigger("uploadSuccess", e, t, n)
          }).fail(function(t) {
            e.getStatus() === o.PROGRESS && e.setStatus(o.ERROR, t), r.trigger("uploadError", e, t)
          }).always(function() {
            r.trigger("uploadComplete", e)
          })
        },
        updateFileProgress: function(e) {
          var t = 0,
            n = 0;
          if (!e.blocks) return;
          i.each(e.blocks, function(e, t) {
            n += (t.percentage || 0) * (t.end - t.start)
          }), t = n / e.size, this.owner.trigger("uploadProgress", e, t || 0)
        }
      })
    }), t("widgets/validator", ["base", "uploader", "file", "widgets/widget"], function(e, t, n) {
      var r = e.$,
        i = {},
        s;
      return s = {
        addValidator: function(e, t) {
          i[e] = t
        },
        removeValidator: function(e) {
          delete i[e]
        }
      }, t.register({
        name: "validator",
        init: function() {
          var t = this;
          e.nextTick(function() {
            r.each(i, function() {
              this.call(t.owner)
            })
          })
        }
      }), s.addValidator("fileNumLimit", function() {
        var e = this,
          t = e.options,
          n = 0,
          r = parseInt(t.fileNumLimit, 10),
          i = !0;
        if (!r) return;
        e.on("beforeFileQueued", function(e) {
          return n >= r && i && (i = !1, this.trigger("error", "Q_EXCEED_NUM_LIMIT", r, e), setTimeout(function() {
            i = !0
          }, 1)), n >= r ? !1 : !0
        }), e.on("fileQueued", function() {
          n++
        }), e.on("fileDequeued", function() {
          n--
        }), e.on("reset", function() {
          n = 0
        })
      }), s.addValidator("fileSizeLimit", function() {
        var e = this,
          t = e.options,
          n = 0,
          r = parseInt(t.fileSizeLimit, 10),
          i = !0;
        if (!r) return;
        e.on("beforeFileQueued", function(e) {
          var t = n + e.size > r;
          return t && i && (i = !1, this.trigger("error", "Q_EXCEED_SIZE_LIMIT", r, e), setTimeout(function() {
            i = !0
          }, 1)), t ? !1 : !0
        }), e.on("fileQueued", function(e) {
          n += e.size
        }), e.on("fileDequeued", function(e) {
          n -= e.size
        }), e.on("reset", function() {
          n = 0
        })
      }), s.addValidator("fileSingleSizeLimit", function() {
        var e = this,
          t = e.options,
          r = t.fileSingleSizeLimit;
        if (!r) return;
        e.on("beforeFileQueued", function(e) {
          if (e.size > r) return e.setStatus(n.Status.INVALID, "exceed_size"), this.trigger("error", "F_EXCEED_SIZE", r, e), !1
        })
      }), s.addValidator("duplicate", function() {
        function r(e) {
          var t = 0,
            n = 0,
            r = e.length,
            i;
          for (; n < r; n++) i = e.charCodeAt(n), t = i + (t << 6) + (t << 16) - t;
          return t
        }
        var e = this,
          t = e.options,
          n = {};
        if (t.duplicate) return;
        e.on("beforeFileQueued", function(e) {
          var t = e.__hash || (e.__hash = r(e.name + e.size + e.lastModifiedDate));
          if (n[t]) return this.trigger("error", "F_DUPLICATE", e), !1
        }), e.on("fileQueued", function(e) {
          var t = e.__hash;
          t && (n[t] = !0)
        }), e.on("fileDequeued", function(e) {
          var t = e.__hash;
          t && delete n[t]
        }), e.on("reset", function() {
          n = {}
        })
      }), s
    }), t("lib/md5", ["runtime/client", "mediator"], function(e, t) {
      function n() {
        e.call(this, "Md5")
      }
      return t.installTo(n.prototype), n.prototype.loadFromBlob = function(e) {
        var t = this;
        t.getRuid() && t.disconnectRuntime(), t.connectRuntime(e.ruid, function() {
          t.exec("init"), t.exec("loadFromBlob", e)
        })
      }, n.prototype.getResult = function() {
        return this.exec("getResult")
      }, n
    }), t("widgets/md5", ["base", "uploader", "lib/md5", "lib/blob", "widgets/widget"], function(e, t, n, r) {
      return t.register({
        name: "md5",
        md5File: function(t, i, s) {
          var o = new n,
            u = e.Deferred(),
            a = t instanceof r ? t : this.request("get-file", t).source;
          return o.on("progress load", function(e) {
            e = e || {}, u.notify(e.total ? e.loaded / e.total : 1)
          }), o.on("complete", function() {
            u.resolve(o.getResult())
          }), o.on("error", function(e) {
            u.reject(e)
          }), arguments.length > 1 && (i = i || 0, s = s || 0, i < 0 && (i = a.size + i), s < 0 && (s = a.size + s), s = Math.min(s, a.size), a = a.slice(i, s)), o.loadFromBlob(a), u.promise()
        }
      })
    }), t("runtime/compbase", [], function() {
      function e(e, t) {
        this.owner = e, this.options = e.options, this.getRuntime = function() {
          return t
        }, this.getRuid = function() {
          return t.uid
        }, this.trigger = function() {
          return e.trigger.apply(e, arguments)
        }
      }
      return e
    }), t("runtime/html5/runtime", ["base", "runtime/runtime", "runtime/compbase"], function(t, n, r) {
      function o() {
        var e = {},
          r = this,
          o = this.destroy;
        n.apply(r, arguments), r.type = i, r.exec = function(n, i) {
          var o = this,
            u = o.uid,
            a = t.slice(arguments, 2),
            f;
          if (s[n]) {
            f = e[u] = e[u] || new s[n](o, r);
            if (f[i]) return f[i].apply(f, a)
          }
        }, r.destroy = function() {
          return o && o.apply(this, arguments)
        }
      }
      var i = "html5",
        s = {};
      return t.inherits(n, {
        constructor: o,
        init: function() {
          var e = this;
          setTimeout(function() {
            e.trigger("ready")
          }, 1)
        }
      }), o.register = function(e, n) {
        var i = s[e] = t.inherits(r, n);
        return i
      }, e.Blob && e.FileReader && e.DataView && n.addRuntime(i, o), o
    }), t("runtime/html5/blob", ["runtime/html5/runtime", "lib/blob"], function(e, t) {
      return e.register("Blob", {
        slice: function(e, n) {
          var r = this.owner.source,
            i = r.slice || r.webkitSlice || r.mozSlice;
          return r = i.call(r, e, n), new t(this.getRuid(), r)
        }
      })
    }), t("runtime/html5/dnd", ["base", "runtime/html5/runtime", "lib/file"], function(e, t, n) {
      var r = e.$,
        i = "webuploader-dnd-";
      return t.register("DragAndDrop", {
        init: function() {
          var t = this.elem = this.options.container;
          this.dragEnterHandler = e.bindFn(this._dragEnterHandler, this), this.dragOverHandler = e.bindFn(this._dragOverHandler, this), this.dragLeaveHandler = e.bindFn(this._dragLeaveHandler, this), this.dropHandler = e.bindFn(this._dropHandler, this), this.dndOver = !1, t.on("dragenter", this.dragEnterHandler), t.on("dragover", this.dragOverHandler), t.on("dragleave", this.dragLeaveHandler), t.on("drop", this.dropHandler), this.options.disableGlobalDnd && (r(document).on("dragover", this.dragOverHandler), r(document).on("drop", this.dropHandler))
        },
        _dragEnterHandler: function(e) {
          var t = this,
            n = t._denied || !1,
            r;
          return e = e.originalEvent || e, t.dndOver || (t.dndOver = !0, r = e.dataTransfer.items, r && r.length && (t._denied = n = !t.trigger("accept", r)), t.elem.addClass(i + "over"), t.elem[n ? "addClass" : "removeClass"](i + "denied")), e.dataTransfer.dropEffect = n ? "none" : "copy", !1
        },
        _dragOverHandler: function(e) {
          var t = this.elem.parent().get(0);
          return t && !r.contains(t, e.currentTarget) ? !1 : (clearTimeout(this._leaveTimer), this._dragEnterHandler.call(this, e), !1)
        },
        _dragLeaveHandler: function() {
          var e = this,
            t;
          return t = function() {
            e.dndOver = !1, e.elem.removeClass(i + "over " + i + "denied")
          }, clearTimeout(e._leaveTimer), e._leaveTimer = setTimeout(t, 100), !1
        },
        _dropHandler: function(e) {
          var t = this,
            s = t.getRuid(),
            o = t.elem.parent().get(0),
            u, a;
          if (o && !r.contains(o, e.currentTarget)) return !1;
          e = e.originalEvent || e, u = e.dataTransfer;
          try {
            a = u.getData("text/html")
          } catch (f) {}
          if (a) return;
          return t._getTansferFiles(u, function(e) {
            t.trigger("drop", r.map(e, function(e) {
              return new n(s, e)
            }))
          }), t.dndOver = !1, t.elem.removeClass(i + "over"), !1
        },
        _getTansferFiles: function(t, n) {
          var r = [],
            i = [],
            s, o, u, a, f, l, c;
          s = t.items, o = t.files, c = !!s && !!s[0].webkitGetAsEntry;
          for (f = 0, l = o.length; f < l; f++) u = o[f], a = s && s[f], c && a.webkitGetAsEntry().isDirectory ? i.push(this._traverseDirectoryTree(a.webkitGetAsEntry(), r)) : r.push(u);
          e.when.apply(e, i).done(function() {
            if (!r.length) return;
            n(r)
          })
        },
        _traverseDirectoryTree: function(t, n) {
          var r = e.Deferred(),
            i = this;
          return t.isFile ? t.file(function(e) {
            n.push(e), r.resolve()
          }) : t.isDirectory && t.createReader().readEntries(function(t) {
            var s = t.length,
              o = [],
              u = [],
              a;
            for (a = 0; a < s; a++) o.push(i._traverseDirectoryTree(t[a], u));
            e.when.apply(e, o).then(function() {
              n.push.apply(n, u), r.resolve()
            }, r.reject)
          }), r.promise()
        },
        destroy: function() {
          var e = this.elem;
          if (!e) return;
          e.off("dragenter", this.dragEnterHandler), e.off("dragover", this.dragOverHandler), e.off("dragleave", this.dragLeaveHandler), e.off("drop", this.dropHandler), this.options.disableGlobalDnd && (r(document).off("dragover", this.dragOverHandler), r(document).off("drop", this.dropHandler))
        }
      })
    }), t("runtime/html5/filepaste", ["base", "runtime/html5/runtime", "lib/file"], function(e, t, n) {
      return t.register("FilePaste", {
        init: function() {
          var t = this.options,
            n = this.elem = t.container,
            r = ".*",
            i, s, o, u;
          if (t.accept) {
            i = [];
            for (s = 0, o = t.accept.length; s < o; s++) u = t.accept[s].mimeTypes, u && i.push(u);
            i.length && (r = i.join(","), r = r.replace(/,/g, "|").replace(/\*/g, ".*"))
          }
          this.accept = r = new RegExp(r, "i"), this.hander = e.bindFn(this._pasteHander, this), n.on("paste", this.hander)
        },
        _pasteHander: function(e) {
          var t = [],
            r = this.getRuid(),
            i, s, o, u, a;
          e = e.originalEvent || e, i = e.clipboardData.items;
          for (u = 0, a = i.length; u < a; u++) {
            s = i[u];
            if (s.kind !== "file" || !(o = s.getAsFile())) continue;
            t.push(new n(r, o))
          }
          t.length && (e.preventDefault(), e.stopPropagation(), this.trigger("paste", t))
        },
        destroy: function() {
          this.elem.off("paste", this.hander)
        }
      })
    }), t("runtime/html5/filepicker", ["base", "runtime/html5/runtime"], function(e, t) {
      var n = e.$;
      return t.register("FilePicker", {
        init: function() {
          var e = this.getRuntime().getContainer(),
            t = this,
            r = t.owner,
            i = t.options,
            s = this.label = n(document.createElement("label")),
            o = this.input = n(document.createElement("input")),
            u, a, f, l;
          o.attr("type", "file"), o.attr("name", i.name), o.addClass("webuploader-element-invisible"), s.on("click", function() {
            o.trigger("click")
          }), s.css({
            opacity: 0,
            width: "100%",
            height: "100%",
            display: "block",
            cursor: "pointer",
            background: "#ffffff"
          }), i.multiple && o.attr("multiple", "multiple");
          if (i.accept && i.accept.length > 0) {
            u = [];
            for (a = 0, f = i.accept.length; a < f; a++) u.push(i.accept[a].mimeTypes);
            o.attr("accept", u.join(","))
          }
          e.append(o), e.append(s), l = function(e) {
            r.trigger(e.type)
          }, o.on("change", function(e) {
            var i = arguments.callee,
              s;
            t.files = e.target.files, s = this.cloneNode(!0), s.value = null, this.parentNode.replaceChild(s, this), o.off(), o = n(s).on("change", i).on("mouseenter mouseleave", l), r.trigger("change")
          }), s.on("mouseenter mouseleave", l)
        },
        getFiles: function() {
          return this.files
        },
        destroy: function() {
          this.input.off(), this.label.off()
        }
      })
    }), t("runtime/html5/util", ["base"], function(t) {
      var n = e.createObjectURL && e || e.URL && URL.revokeObjectURL && URL || e.webkitURL,
        r = t.noop,
        i = r;
      return n && (r = function() {
        return n.createObjectURL.apply(n, arguments)
      }, i = function() {
        return n.revokeObjectURL.apply(n, arguments)
      }), {
        createObjectURL: r,
        revokeObjectURL: i,
        dataURL2Blob: function(e) {
          var t, n, r, i, s, o;
          o = e.split(","), ~o[0].indexOf("base64") ? t = atob(o[1]) : t = decodeURIComponent(o[1]), r = new ArrayBuffer(t.length), n = new Uint8Array(r);
          for (i = 0; i < t.length; i++) n[i] = t.charCodeAt(i);
          return s = o[0].split(":")[1].split(";")[0], this.arrayBufferToBlob(r, s)
        },
        dataURL2ArrayBuffer: function(e) {
          var t, n, r, i;
          i = e.split(","), ~i[0].indexOf("base64") ? t = atob(i[1]) : t = decodeURIComponent(i[1]), n = new Uint8Array(t.length);
          for (r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
          return n.buffer
        },
        arrayBufferToBlob: function(t, n) {
          var r = e.BlobBuilder || e.WebKitBlobBuilder,
            i;
          return r ? (i = new r, i.append(t), i.getBlob(n)) : new Blob([t], n ? {
            type: n
          } : {})
        },
        canvasToDataUrl: function(e, t, n) {
          return e.toDataURL(t, n / 100)
        },
        parseMeta: function(e, t) {
          t(!1, {})
        },
        updateImageHead: function(e) {
          return e
        }
      }
    }), t("runtime/html5/imagemeta", ["runtime/html5/util"], function(e) {
      var t;
      return t = {
        parsers: {
          65505: []
        },
        maxMetaDataSize: 262144,
        parse: function(e, t) {
          var n = this,
            r = new FileReader;
          r.onload = function() {
            t(!1, n._parse(this.result)), r = r.onload = r.onerror = null
          }, r.onerror = function(e) {
            t(e.message), r = r.onload = r.onerror = null
          }, e = e.slice(0, n.maxMetaDataSize), r.readAsArrayBuffer(e.getSource())
        },
        _parse: function(e, n) {
          if (e.byteLength < 6) return;
          var r = new DataView(e),
            i = 2,
            s = r.byteLength - 4,
            o = i,
            u = {},
            a, f, l, c;
          if (r.getUint16(0) === 65496) {
            while (i < s) {
              a = r.getUint16(i);
              if (!(a >= 65504 && a <= 65519 || a === 65534)) break;
              f = r.getUint16(i + 2) + 2;
              if (i + f > r.byteLength) break;
              l = t.parsers[a];
              if (!n && l)
                for (c = 0; c < l.length; c += 1) l[c].call(t, r, i, f, u);
              i += f, o = i
            }
            o > 6 && (e.slice ? u.imageHead = e.slice(2, o) : u.imageHead = (new Uint8Array(e)).subarray(2, o))
          }
          return u
        },
        updateImageHead: function(e, t) {
          var n = this._parse(e, !0),
            r, i, s;
          return s = 2, n.imageHead && (s = 2 + n.imageHead.byteLength), e.slice ? i = e.slice(s) : i = (new Uint8Array(e)).subarray(s), r = new Uint8Array(t.byteLength + 2 + i.byteLength), r[0] = 255, r[1] = 216, r.set(new Uint8Array(t), 2), r.set(new Uint8Array(i), t.byteLength + 2), r.buffer
        }
      }, e.parseMeta = function() {
        return t.parse.apply(t, arguments)
      }, e.updateImageHead = function() {
        return t.updateImageHead.apply(t, arguments)
      }, t
    }), t("runtime/html5/imagemeta/exif", ["base", "runtime/html5/imagemeta"], function(e, t) {
      var n = {};
      return n.ExifMap = function() {
        return this
      }, n.ExifMap.prototype.map = {
        Orientation: 274
      }, n.ExifMap.prototype.get = function(e) {
        return this[e] || this[this.map[e]]
      }, n.exifTagTypes = {
        1: {
          getValue: function(e, t) {
            return e.getUint8(t)
          },
          size: 1
        },
        2: {
          getValue: function(e, t) {
            return String.fromCharCode(e.getUint8(t))
          },
          size: 1,
          ascii: !0
        },
        3: {
          getValue: function(e, t, n) {
            return e.getUint16(t, n)
          },
          size: 2
        },
        4: {
          getValue: function(e, t, n) {
            return e.getUint32(t, n)
          },
          size: 4
        },
        5: {
          getValue: function(e, t, n) {
            return e.getUint32(t, n) / e.getUint32(t + 4, n)
          },
          size: 8
        },
        9: {
          getValue: function(e, t, n) {
            return e.getInt32(t, n)
          },
          size: 4
        },
        10: {
          getValue: function(e, t, n) {
            return e.getInt32(t, n) / e.getInt32(t + 4, n)
          },
          size: 8
        }
      }, n.exifTagTypes[7] = n.exifTagTypes[1], n.getExifValue = function(t, r, i, s, o, u) {
        var a = n.exifTagTypes[s],
          f, l, c, h, p, d;
        if (!a) {
          e.log("Invalid Exif data: Invalid tag type.");
          return
        }
        f = a.size * o, l = f > 4 ? r + t.getUint32(i + 8, u) : i + 8;
        if (l + f > t.byteLength) {
          e.log("Invalid Exif data: Invalid data offset.");
          return
        }
        if (o === 1) return a.getValue(t, l, u);
        c = [];
        for (h = 0; h < o; h += 1) c[h] = a.getValue(t, l + h * a.size, u);
        if (a.ascii) {
          p = "";
          for (h = 0; h < c.length; h += 1) {
            d = c[h];
            if (d === "\0") break;
            p += d
          }
          return p
        }
        return c
      }, n.parseExifTag = function(e, t, r, i, s) {
        var o = e.getUint16(r, i);
        s.exif[o] = n.getExifValue(e, t, r, e.getUint16(r + 2, i), e.getUint32(r + 4, i), i)
      }, n.parseExifTags = function(t, n, r, i, s) {
        var o, u, a;
        if (r + 6 > t.byteLength) {
          e.log("Invalid Exif data: Invalid directory offset.");
          return
        }
        o = t.getUint16(r, i), u = r + 2 + 12 * o;
        if (u + 4 > t.byteLength) {
          e.log("Invalid Exif data: Invalid directory size.");
          return
        }
        for (a = 0; a < o; a += 1) this.parseExifTag(t, n, r + 2 + 12 * a, i, s);
        return t.getUint32(u, i)
      }, n.parseExifData = function(t, r, i, s) {
        var o = r + 10,
          u, a;
        if (t.getUint32(r + 4) !== 1165519206) return;
        if (o + 8 > t.byteLength) {
          e.log("Invalid Exif data: Invalid segment size.");
          return
        }
        if (t.getUint16(r + 8) !== 0) {
          e.log("Invalid Exif data: Missing byte alignment offset.");
          return
        }
        switch (t.getUint16(o)) {
          case 18761:
            u = !0;
            break;
          case 19789:
            u = !1;
            break;
          default:
            e.log("Invalid Exif data: Invalid byte alignment marker.");
            return
        }
        if (t.getUint16(o + 2, u) !== 42) {
          e.log("Invalid Exif data: Missing TIFF marker.");
          return
        }
        a = t.getUint32(o + 4, u), s.exif = new n.ExifMap, a = n.parseExifTags(t, o, o + a, u, s)
      }, t.parsers[65505].push(n.parseExifData), n
    }), t("runtime/html5/jpegencoder", [], function(e, t, n) {
      function r(e) {
        function P(e) {
          var t = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99];
          for (var n = 0; n < 64; n++) {
            var a = r((t[n] * e + 50) / 100);
            a < 1 ? a = 1 : a > 255 && (a = 255), i[N[n]] = a
          }
          var f = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99];
          for (var l = 0; l < 64; l++) {
            var c = r((f[l] * e + 50) / 100);
            c < 1 ? c = 1 : c > 255 && (c = 255), s[N[l]] = c
          }
          var h = [1, 1.387039845, 1.306562965, 1.175875602, 1, .785694958, .5411961, .275899379],
            p = 0;
          for (var d = 0; d < 8; d++)
            for (var v = 0; v < 8; v++) o[p] = 1 / (i[N[p]] * h[d] * h[v] * 8), u[p] = 1 / (s[N[p]] * h[d] * h[v] * 8), p++
        }

        function H(e, t) {
          var n = 0,
            r = 0,
            i = new Array;
          for (var s = 1; s <= 16; s++) {
            for (var o = 1; o <= e[s]; o++) i[t[r]] = [], i[t[r]][0] = n, i[t[r]][1] = s, r++, n++;
            n *= 2
          }
          return i
        }

        function B() {
          a = H(C, k), f = H(O, M), l = H(L, A), c = H(_, D)
        }

        function j() {
          var e = 1,
            t = 2;
          for (var n = 1; n <= 15; n++) {
            for (var r = e; r < t; r++) p[32767 + r] = n, h[32767 + r] = [], h[32767 + r][1] = n, h[32767 + r][0] = r;
            for (var i = -(t - 1); i <= -e; i++) p[32767 + i] = n, h[32767 + i] = [], h[32767 + i][1] = n, h[32767 + i][0] = t - 1 + i;
            e <<= 1, t <<= 1
          }
        }

        function F() {
          for (var e = 0; e < 256; e++) x[e] = 19595 * e, x[e + 256 >> 0] = 38470 * e, x[e + 512 >> 0] = 7471 * e + 32768, x[e + 768 >> 0] = -11059 * e, x[e + 1024 >> 0] = -21709 * e, x[e + 1280 >> 0] = 32768 * e + 8421375, x[e + 1536 >> 0] = -27439 * e, x[e + 1792 >> 0] = -5329 * e
        }

        function I(e) {
          var t = e[0],
            n = e[1] - 1;
          while (n >= 0) t & 1 << n && (g |= 1 << y), n--, y--, y < 0 && (g == 255 ? (q(255), q(0)) : q(g), y = 7, g = 0)
        }

        function q(e) {
          m.push(S[e])
        }

        function R(e) {
          q(e >> 8 & 255), q(e & 255)
        }

        function U(e, t) {
          var n, r, i, s, o, u, a, f, l = 0,
            c, h = 8,
            p = 64;
          for (c = 0; c < h; ++c) {
            n = e[l], r = e[l + 1], i = e[l + 2], s = e[l + 3], o = e[l + 4], u = e[l + 5], a = e[l + 6], f = e[l + 7];
            var v = n + f,
              m = n - f,
              g = r + a,
              y = r - a,
              b = i + u,
              w = i - u,
              E = s + o,
              S = s - o,
              x = v + E,
              T = v - E,
              N = g + b,
              C = g - b;
            e[l] = x + N, e[l + 4] = x - N;
            var k = (C + T) * .707106781;
            e[l + 2] = T + k, e[l + 6] = T - k, x = S + w, N = w + y, C = y + m;
            var L = (x - C) * .382683433,
              A = .5411961 * x + L,
              O = 1.306562965 * C + L,
              M = N * .707106781,
              _ = m + M,
              D = m - M;
            e[l + 5] = D + A, e[l + 3] = D - A, e[l + 1] = _ + O, e[l + 7] = _ - O, l += 8
          }
          l = 0;
          for (c = 0; c < h; ++c) {
            n = e[l], r = e[l + 8], i = e[l + 16], s = e[l + 24], o = e[l + 32], u = e[l + 40], a = e[l + 48], f = e[l + 56];
            var P = n + f,
              H = n - f,
              B = r + a,
              j = r - a,
              F = i + u,
              I = i - u,
              q = s + o,
              R = s - o,
              U = P + q,
              z = P - q,
              W = B + F,
              X = B - F;
            e[l] = U + W, e[l + 32] = U - W;
            var V = (X + z) * .707106781;
            e[l + 16] = z + V, e[l + 48] = z - V, U = R + I, W = I + j, X = j + H;
            var $ = (U - X) * .382683433,
              J = .5411961 * U + $,
              K = 1.306562965 * X + $,
              Q = W * .707106781,
              G = H + Q,
              Y = H - Q;
            e[l + 40] = Y + J, e[l + 24] = Y - J, e[l + 8] = G + K, e[l + 56] = G - K, l++
          }
          var Z;
          for (c = 0; c < p; ++c) Z = e[c] * t[c], d[c] = Z > 0 ? Z + .5 | 0 : Z - .5 | 0;
          return d
        }

        function z() {
          R(65504), R(16), q(74), q(70), q(73), q(70), q(0), q(1), q(1), q(0), R(1), R(1), q(0), q(0)
        }

        function W(e, t) {
          R(65472), R(17), q(8), R(t), R(e), q(3), q(1), q(17), q(0), q(2), q(17), q(1), q(3), q(17), q(1)
        }

        function X() {
          R(65499), R(132), q(0);
          for (var e = 0; e < 64; e++) q(i[e]);
          q(1);
          for (var t = 0; t < 64; t++) q(s[t])
        }

        function V() {
          R(65476), R(418), q(0);
          for (var e = 0; e < 16; e++) q(C[e + 1]);
          for (var t = 0; t <= 11; t++) q(k[t]);
          q(16);
          for (var n = 0; n < 16; n++) q(L[n + 1]);
          for (var r = 0; r <= 161; r++) q(A[r]);
          q(1);
          for (var i = 0; i < 16; i++) q(O[i + 1]);
          for (var s = 0; s <= 11; s++) q(M[s]);
          q(17);
          for (var o = 0; o < 16; o++) q(_[o + 1]);
          for (var u = 0; u <= 161; u++) q(D[u])
        }

        function $() {
          R(65498), R(12), q(3), q(1), q(0), q(2), q(17), q(3), q(17), q(0), q(63), q(0)
        }

        function J(e, t, n, r, i) {
          var s = i[0],
            o = i[240],
            u, a = 16,
            f = 63,
            l = 64,
            c = U(e, t);
          for (var d = 0; d < l; ++d) v[N[d]] = c[d];
          var m = v[0] - n;
          n = v[0], m == 0 ? I(r[0]) : (u = 32767 + m, I(r[p[u]]), I(h[u]));
          var g = 63;
          for (; g > 0 && v[g] == 0; g--);
          if (g == 0) return I(s), n;
          var y = 1,
            b;
          while (y <= g) {
            var w = y;
            for (; v[y] == 0 && y <= g; ++y);
            var E = y - w;
            if (E >= a) {
              b = E >> 4;
              for (var S = 1; S <= b; ++S) I(o);
              E &= 15
            }
            u = 32767 + v[y], I(i[(E << 4) + p[u]]), I(h[u]), y++
          }
          return g != f && I(s), n
        }

        function K() {
          var e = String.fromCharCode;
          for (var t = 0; t < 256; t++) S[t] = e(t)
        }

        function Q(e) {
          e <= 0 && (e = 1), e > 100 && (e = 100);
          if (T == e) return;
          var t = 0;
          e < 50 ? t = Math.floor(5e3 / e) : t = Math.floor(200 - e * 2), P(t), T = e
        }

        function G() {
          e || (e = 50), K(), B(), j(), F(), Q(e)
        }
        var t = this,
          n = Math.round,
          r = Math.floor,
          i = new Array(64),
          s = new Array(64),
          o = new Array(64),
          u = new Array(64),
          a, f, l, c, h = new Array(65535),
          p = new Array(65535),
          d = new Array(64),
          v = new Array(64),
          m = [],
          g = 0,
          y = 7,
          b = new Array(64),
          w = new Array(64),
          E = new Array(64),
          S = new Array(256),
          x = new Array(2048),
          T, N = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63],
          C = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
          k = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          L = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125],
          A = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250],
          O = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
          M = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          _ = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119],
          D = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250];
        this.encode = function(e, t) {
          t && Q(t), m = new Array, g = 0, y = 7, R(65496), z(), X(), W(e.width, e.height), V(), $();
          var n = 0,
            r = 0,
            i = 0;
          g = 0, y = 7, this.encode.displayName = "_encode_";
          var s = e.data,
            h = e.width,
            p = e.height,
            d = h * 4,
            v = h * 3,
            S, T = 0,
            N, C, k, L, A, O, M, _;
          while (T < p) {
            S = 0;
            while (S < d) {
              L = d * T + S, A = L, O = -1, M = 0;
              for (_ = 0; _ < 64; _++) M = _ >> 3, O = (_ & 7) * 4, A = L + M * d + O, T + M >= p && (A -= d * (T + 1 + M - p)), S + O >= d && (A -= S + O - d + 4), N = s[A++], C = s[A++], k = s[A++], b[_] = (x[N] + x[C + 256 >> 0] + x[k + 512 >> 0] >> 16) - 128, w[_] = (x[N + 768 >> 0] + x[C + 1024 >> 0] + x[k + 1280 >> 0] >> 16) - 128, E[_] = (x[N + 1280 >> 0] + x[C + 1536 >> 0] + x[k + 1792 >> 0] >> 16) - 128;
              n = J(b, o, n, a, l), r = J(w, u, r, f, c), i = J(E, u, i, f, c), S += 32
            }
            T += 8
          }
          if (y >= 0) {
            var D = [];
            D[1] = y + 1, D[0] = (1 << y + 1) - 1, I(D)
          }
          R(65497);
          var P = "data:image/jpeg;base64," + btoa(m.join(""));
          return m = [], P
        }, G()
      }
      return r.encode = function(e, t) {
        var n = new r(t);
        return n.encode(e)
      }, r
    }), t("runtime/html5/androidpatch", ["runtime/html5/util", "runtime/html5/jpegencoder", "base"], function(e, t, n) {
      var r = e.canvasToDataUrl,
        i;
      e.canvasToDataUrl = function(e, s, o) {
        var u, a, f, l, c;
        return n.os.android ? (s === "image/jpeg" && typeof i == "undefined" && (l = r.apply(null, arguments), c = l.split(","), ~c[0].indexOf("base64") ? l = atob(c[1]) : l = decodeURIComponent(c[1]), l = l.substring(0, 2), i = l.charCodeAt(0) === 255 && l.charCodeAt(1) === 216), s === "image/jpeg" && !i ? (a = e.width, f = e.height, u = e.getContext("2d"), t.encode(u.getImageData(0, 0, a, f), o)) : r.apply(null, arguments)) : r.apply(null, arguments)
      }
    }), t("runtime/html5/image", ["base", "runtime/html5/runtime", "runtime/html5/util"], function(e, t, n) {
      var r = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D";
      return t.register("Image", {
        modified: !1,
        init: function() {
          var e = this,
            t = new Image;
          t.onload = function() {
            e._info = {
              type: e.type,
              width: this.width,
              height: this.height
            }, !e._metas && "image/jpeg" === e.type ? n.parseMeta(e._blob, function(t, n) {
              e._metas = n, e.owner.trigger("load")
            }) : e.owner.trigger("load")
          }, t.onerror = function() {
            e.owner.trigger("error")
          }, e._img = t
        },
        loadFromBlob: function(e) {
          var t = this,
            r = t._img;
          t._blob = e, t.type = e.type, r.src = n.createObjectURL(e.getSource()), t.owner.once("load", function() {
            n.revokeObjectURL(r.src)
          })
        },
        resize: function(e, t) {
          var n = this._canvas || (this._canvas = document.createElement("canvas"));
          this._resize(this._img, n, e, t), this._blob = null, this.modified = !0, this.owner.trigger("complete", "resize")
        },
        crop: function(e, t, n, r, i) {
          var s = this._canvas || (this._canvas = document.createElement("canvas")),
            o = this.options,
            u = this._img,
            a = u.naturalWidth,
            f = u.naturalHeight,
            l = this.getOrientation();
          i = i || 1, s.width = n, s.height = r, o.preserveHeaders || this._rotate2Orientaion(s, l), this._renderImageToCanvas(s, u, -e, -t, a * i, f * i), this._blob = null, this.modified = !0, this.owner.trigger("complete", "crop")
        },
        getAsBlob: function(e) {
          var t = this._blob,
            r = this.options,
            i;
          e = e || this.type;
          if (this.modified || this.type !== e) {
            i = this._canvas;
            if (e === "image/jpeg") {
              t = n.canvasToDataUrl(i, e, r.quality);
              if (r.preserveHeaders && this._metas && this._metas.imageHead) return t = n.dataURL2ArrayBuffer(t), t = n.updateImageHead(t, this._metas.imageHead), t = n.arrayBufferToBlob(t, e), t
            } else t = n.canvasToDataUrl(i, e);
            t = n.dataURL2Blob(t)
          }
          return t
        },
        getAsDataUrl: function(e) {
          var t = this.options;
          return e = e || this.type, e === "image/jpeg" ? n.canvasToDataUrl(this._canvas, e, t.quality) : this._canvas.toDataURL(e)
        },
        getOrientation: function() {
          return this._metas && this._metas.exif && this._metas.exif.get("Orientation") || 1
        },
        info: function(e) {
          return e ? (this._info = e, this) : this._info
        },
        meta: function(e) {
          return e ? (this._meta = e, this) : this._meta
        },
        destroy: function() {
          var e = this._canvas;
          this._img.onload = null, e && (e.getContext("2d").clearRect(0, 0, e.width, e.height), e.width = e.height = 0, this._canvas = null), this._img.src = r, this._img = this._blob = null
        },
        _resize: function(e, t, n, r) {
          var i = this.options,
            s = e.width,
            o = e.height,
            u = this.getOrientation(),
            a, f, l, c, h;
          ~[5, 6, 7, 8].indexOf(u) && (n ^= r, r ^= n, n ^= r), a = Math[i.crop ? "max" : "min"](n / s, r / o), i.allowMagnify || (a = Math.min(1, a)), f = s * a, l = o * a, i.crop ? (t.width = n, t.height = r) : (t.width = f, t.height = l), c = (t.width - f) / 2, h = (t.height - l) / 2, i.preserveHeaders || this._rotate2Orientaion(t, u), this._renderImageToCanvas(t, e, c, h, f, l)
        },
        _rotate2Orientaion: function(e, t) {
          var n = e.width,
            r = e.height,
            i = e.getContext("2d");
          switch (t) {
            case 5:
            case 6:
            case 7:
            case 8:
              e.width = r, e.height = n
          }
          switch (t) {
            case 2:
              i.translate(n, 0), i.scale(-1, 1);
              break;
            case 3:
              i.translate(n, r), i.rotate(Math.PI);
              break;
            case 4:
              i.translate(0, r), i.scale(1, -1);
              break;
            case 5:
              i.rotate(.5 * Math.PI), i.scale(1, -1);
              break;
            case 6:
              i.rotate(.5 * Math.PI), i.translate(0, -r);
              break;
            case 7:
              i.rotate(.5 * Math.PI), i.translate(n, -r), i.scale(-1, 1);
              break;
            case 8:
              i.rotate(-0.5 * Math.PI), i.translate(-n, 0)
          }
        },
        _renderImageToCanvas: function() {
          function t(e, t, n) {
            var r = document.createElement("canvas"),
              i = r.getContext("2d"),
              s = 0,
              o = n,
              u = n,
              a, f, l;
            r.width = 1, r.height = n, i.drawImage(e, 0, 0), a = i.getImageData(0, 0, 1, n).data;
            while (u > s) f = a[(u - 1) * 4 + 3], f === 0 ? o = u : s = u, u = o + s >> 1;
            return l = u / n, l === 0 ? 1 : l
          }

          function n(e) {
            var t = e.naturalWidth,
              n = e.naturalHeight,
              r, i;
            return t * n > 1048576 ? (r = document.createElement("canvas"), r.width = r.height = 1, i = r.getContext("2d"), i.drawImage(e, -t + 1, 0), i.getImageData(0, 0, 1, 1).data[3] === 0) : !1
          }
          return e.os.ios ? e.os.ios >= 7 ? function(e, n, r, i, s, o) {
            var u = n.naturalWidth,
              a = n.naturalHeight,
              f = t(n, u, a);
            return e.getContext("2d").drawImage(n, 0, 0, u * f, a * f, r, i, s, o)
          } : function(e, r, i, s, o, u) {
            var a = r.naturalWidth,
              f = r.naturalHeight,
              l = e.getContext("2d"),
              c = n(r),
              h = this.type === "image/jpeg",
              p = 1024,
              d = 0,
              v = 0,
              m, g, y, b, w, E, S;
            c && (a /= 2, f /= 2), l.save(), m = document.createElement("canvas"), m.width = m.height = p, g = m.getContext("2d"), y = h ? t(r, a, f) : 1, b = Math.ceil(p * o / a), w = Math.ceil(p * u / f / y);
            while (d < f) {
              E = 0, S = 0;
              while (E < a) g.clearRect(0, 0, p, p), g.drawImage(r, -E, -d), l.drawImage(m, 0, 0, p, p, i + S, s + v, b, w), E += p, S += b;
              d += p, v += w
            }
            l.restore(), m = g = null
          } : function(t) {
            var n = e.slice(arguments, 1),
              r = t.getContext("2d");
            r.drawImage.apply(r, n)
          }
        }()
      })
    }), t("runtime/html5/transport", ["base", "runtime/html5/runtime"], function(e, t) {
      var n = e.noop,
        r = e.$;
      return t.register("Transport", {
        init: function() {
          this._status = 0, this._response = null
        },
        send: function() {
          var t = this.owner,
            n = this.options,
            i = this._initAjax(),
            s = t._blob,
            o = n.server,
            u, a, f;
          n.sendAsBinary ? (o += (/\?/.test(o) ? "&" : "?") + r.param(t._formData), a = s.getSource()) : (u = new FormData, r.each(t._formData, function(e, t) {
            u.append(e, t)
          }), u.append(n.fileVal, s.getSource(), n.filename || t._formData.name || "")), n.withCredentials && "withCredentials" in i ? (i.open(n.method, o, !0), i.withCredentials = !0) : i.open(n.method, o), this._setRequestHeader(i, n.headers), a ? (i.overrideMimeType && i.overrideMimeType("application/octet-stream"), e.os.android ? (f = new FileReader, f.onload = function() {
            i.send(this.result), f = f.onload = null
          }, f.readAsArrayBuffer(a)) : i.send(a)) : i.send(u)
        },
        getResponse: function() {
          return this._response
        },
        getResponseAsJson: function() {
          return this._parseJson(this._response)
        },
        getStatus: function() {
          return this._status
        },
        abort: function() {
          var e = this._xhr;
          e && (e.upload.onprogress = n, e.onreadystatechange = n, e.abort(), this._xhr = e = null)
        },
        destroy: function() {
          this.abort()
        },
        _initAjax: function() {
          var e = this,
            t = new XMLHttpRequest,
            r = this.options;
          return r.withCredentials && !("withCredentials" in t) && typeof XDomainRequest != "undefined" && (t = new XDomainRequest), t.upload.onprogress = function(t) {
            var n = 0;
            return t.lengthComputable && (n = t.loaded / t.total), e.trigger("progress", n)
          }, t.onreadystatechange = function() {
            if (t.readyState !== 4) return;
            return t.upload.onprogress = n, t.onreadystatechange = n, e._xhr = null, e._status = t.status, t.status >= 200 && t.status < 300 ? (e._response = t.responseText, e.trigger("load")) : t.status >= 500 && t.status < 600 ? (e._response = t.responseText, e.trigger("error", "server")) : e.trigger("error", e._status ? "http" : "abort")
          }, e._xhr = t, t
        },
        _setRequestHeader: function(e, t) {
          r.each(t, function(t, n) {
            e.setRequestHeader(t, n)
          })
        },
        _parseJson: function(e) {
          var t;
          try {
            t = JSON.parse(e)
          } catch (n) {
            t = {}
          }
          return t
        }
      })
    }), t("runtime/html5/md5", ["runtime/html5/runtime"], function(e) {
      var t = function(e, t) {
          return e + t & 4294967295
        },
        n = function(e, n, r, i, s, o) {
          return n = t(t(n, e), t(i, o)), t(n << s | n >>> 32 - s, r)
        },
        r = function(e, t, r, i, s, o, u) {
          return n(t & r | ~t & i, e, t, s, o, u)
        },
        i = function(e, t, r, i, s, o, u) {
          return n(t & i | r & ~i, e, t, s, o, u)
        },
        s = function(e, t, r, i, s, o, u) {
          return n(t ^ r ^ i, e, t, s, o, u)
        },
        o = function(e, t, r, i, s, o, u) {
          return n(r ^ (t | ~i), e, t, s, o, u)
        },
        u = function(e, n) {
          var u = e[0],
            a = e[1],
            f = e[2],
            l = e[3];
          u = r(u, a, f, l, n[0], 7, -680876936), l = r(l, u, a, f, n[1], 12, -389564586), f = r(f, l, u, a, n[2], 17, 606105819), a = r(a, f, l, u, n[3], 22, -1044525330), u = r(u, a, f, l, n[4], 7, -176418897), l = r(l, u, a, f, n[5], 12, 1200080426), f = r(f, l, u, a, n[6], 17, -1473231341), a = r(a, f, l, u, n[7], 22, -45705983), u = r(u, a, f, l, n[8], 7, 1770035416), l = r(l, u, a, f, n[9], 12, -1958414417), f = r(f, l, u, a, n[10], 17, -42063), a = r(a, f, l, u, n[11], 22, -1990404162), u = r(u, a, f, l, n[12], 7, 1804603682), l = r(l, u, a, f, n[13], 12, -40341101), f = r(f, l, u, a, n[14], 17, -1502002290), a = r(a, f, l, u, n[15], 22, 1236535329), u = i(u, a, f, l, n[1], 5, -165796510), l = i(l, u, a, f, n[6], 9, -1069501632), f = i(f, l, u, a, n[11], 14, 643717713), a = i(a, f, l, u, n[0], 20, -373897302), u = i(u, a, f, l, n[5], 5, -701558691), l = i(l, u, a, f, n[10], 9, 38016083), f = i(f, l, u, a, n[15], 14, -660478335), a = i(a, f, l, u, n[4], 20, -405537848), u = i(u, a, f, l, n[9], 5, 568446438), l = i(l, u, a, f, n[14], 9, -1019803690), f = i(f, l, u, a, n[3], 14, -187363961), a = i(a, f, l, u, n[8], 20, 1163531501), u = i(u, a, f, l, n[13], 5, -1444681467), l = i(l, u, a, f, n[2], 9, -51403784), f = i(f, l, u, a, n[7], 14, 1735328473), a = i(a, f, l, u, n[12], 20, -1926607734), u = s(u, a, f, l, n[5], 4, -378558), l = s(l, u, a, f, n[8], 11, -2022574463), f = s(f, l, u, a, n[11], 16, 1839030562), a = s(a, f, l, u, n[14], 23, -35309556), u = s(u, a, f, l, n[1], 4, -1530992060), l = s(l, u, a, f, n[4], 11, 1272893353), f = s(f, l, u, a, n[7], 16, -155497632), a = s(a, f, l, u, n[10], 23, -1094730640), u = s(u, a, f, l, n[13], 4, 681279174), l = s(l, u, a, f, n[0], 11, -358537222), f = s(f, l, u, a, n[3], 16, -722521979), a = s(a, f, l, u, n[6], 23, 76029189), u = s(u, a, f, l, n[9], 4, -640364487), l = s(l, u, a, f, n[12], 11, -421815835), f = s(f, l, u, a, n[15], 16, 530742520), a = s(a, f, l, u, n[2], 23, -995338651), u = o(u, a, f, l, n[0], 6, -198630844), l = o(l, u, a, f, n[7], 10, 1126891415), f = o(f, l, u, a, n[14], 15, -1416354905), a = o(a, f, l, u, n[5], 21, -57434055), u = o(u, a, f, l, n[12], 6, 1700485571), l = o(l, u, a, f, n[3], 10, -1894986606), f = o(f, l, u, a, n[10], 15, -1051523), a = o(a, f, l, u, n[1], 21, -2054922799), u = o(u, a, f, l, n[8], 6, 1873313359), l = o(l, u, a, f, n[15], 10, -30611744), f = o(f, l, u, a, n[6], 15, -1560198380), a = o(a, f, l, u, n[13], 21, 1309151649), u = o(u, a, f, l, n[4], 6, -145523070), l = o(l, u, a, f, n[11], 10, -1120210379), f = o(f, l, u, a, n[2], 15, 718787259), a = o(a, f, l, u, n[9], 21, -343485551), e[0] = t(u, e[0]), e[1] = t(a, e[1]), e[2] = t(f, e[2]), e[3] = t(l, e[3])
        },
        a = function(e) {
          var t = [],
            n;
          for (n = 0; n < 64; n += 4) t[n >> 2] = e.charCodeAt(n) + (e.charCodeAt(n + 1) << 8) + (e.charCodeAt(n + 2) << 16) + (e.charCodeAt(n + 3) << 24);
          return t
        },
        f = function(e) {
          var t = [],
            n;
          for (n = 0; n < 64; n += 4) t[n >> 2] = e[n] + (e[n + 1] << 8) + (e[n + 2] << 16) + (e[n + 3] << 24);
          return t
        },
        l = function(e) {
          var t = e.length,
            n = [1732584193, -271733879, -1732584194, 271733878],
            r, i, s, o, f, l;
          for (r = 64; r <= t; r += 64) u(n, a(e.substring(r - 64, r)));
          e = e.substring(r - 64), i = e.length, s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          for (r = 0; r < i; r += 1) s[r >> 2] |= e.charCodeAt(r) << (r % 4 << 3);
          s[r >> 2] |= 128 << (r % 4 << 3);
          if (r > 55) {
            u(n, s);
            for (r = 0; r < 16; r += 1) s[r] = 0
          }
          return o = t * 8, o = o.toString(16).match(/(.*?)(.{0,8})$/), f = parseInt(o[2], 16), l = parseInt(o[1], 16) || 0, s[14] = f, s[15] = l, u(n, s), n
        },
        c = function(e) {
          var t = e.length,
            n = [1732584193, -271733879, -1732584194, 271733878],
            r, i, s, o, a, l;
          for (r = 64; r <= t; r += 64) u(n, f(e.subarray(r - 64, r)));
          e = r - 64 < t ? e.subarray(r - 64) : new Uint8Array(0), i = e.length, s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          for (r = 0; r < i; r += 1) s[r >> 2] |= e[r] << (r % 4 << 3);
          s[r >> 2] |= 128 << (r % 4 << 3);
          if (r > 55) {
            u(n, s);
            for (r = 0; r < 16; r += 1) s[r] = 0
          }
          return o = t * 8, o = o.toString(16).match(/(.*?)(.{0,8})$/), a = parseInt(o[2], 16), l = parseInt(o[1], 16) || 0, s[14] = a, s[15] = l, u(n, s), n
        },
        h = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"],
        p = function(e) {
          var t = "",
            n;
          for (n = 0; n < 4; n += 1) t += h[e >> n * 8 + 4 & 15] + h[e >> n * 8 & 15];
          return t
        },
        d = function(e) {
          var t;
          for (t = 0; t < e.length; t += 1) e[t] = p(e[t]);
          return e.join("")
        },
        v = function(e) {
          return d(l(e))
        },
        m = function() {
          this.reset()
        };
      return v("hello") !== "5d41402abc4b2a76b9719d911017c592" && (t = function(e, t) {
        var n = (e & 65535) + (t & 65535),
          r = (e >> 16) + (t >> 16) + (n >> 16);
        return r << 16 | n & 65535
      }), m.prototype.append = function(e) {
        return /[\u0080-\uFFFF]/.test(e) && (e = unescape(encodeURIComponent(e))), this.appendBinary(e), this
      }, m.prototype.appendBinary = function(e) {
        this._buff += e, this._length += e.length;
        var t = this._buff.length,
          n;
        for (n = 64; n <= t; n += 64) u(this._state, a(this._buff.substring(n - 64, n)));
        return this._buff = this._buff.substr(n - 64), this
      }, m.prototype.end = function(e) {
        var t = this._buff,
          n = t.length,
          r, i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          s;
        for (r = 0; r < n; r += 1) i[r >> 2] |= t.charCodeAt(r) << (r % 4 << 3);
        return this._finish(i, n), s = e ? this._state : d(this._state), this.reset(), s
      }, m.prototype._finish = function(e, t) {
        var n = t,
          r, i, s;
        e[n >> 2] |= 128 << (n % 4 << 3);
        if (n > 55) {
          u(this._state, e);
          for (n = 0; n < 16; n += 1) e[n] = 0
        }
        r = this._length * 8, r = r.toString(16).match(/(.*?)(.{0,8})$/), i = parseInt(r[2], 16), s = parseInt(r[1], 16) || 0, e[14] = i, e[15] = s, u(this._state, e)
      }, m.prototype.reset = function() {
        return this._buff = "", this._length = 0, this._state = [1732584193, -271733879, -1732584194, 271733878], this
      }, m.prototype.destroy = function() {
        delete this._state, delete this._buff, delete this._length
      }, m.hash = function(e, t) {
        /[\u0080-\uFFFF]/.test(e) && (e = unescape(encodeURIComponent(e)));
        var n = l(e);
        return t ? n : d(n)
      }, m.hashBinary = function(e, t) {
        var n = l(e);
        return t ? n : d(n)
      }, m.ArrayBuffer = function() {
        this.reset()
      }, m.ArrayBuffer.prototype.append = function(e) {
        var t = this._concatArrayBuffer(this._buff, e),
          n = t.length,
          r;
        this._length += e.byteLength;
        for (r = 64; r <= n; r += 64) u(this._state, f(t.subarray(r - 64, r)));
        return this._buff = r - 64 < n ? t.subarray(r - 64) : new Uint8Array(0), this
      }, m.ArrayBuffer.prototype.end = function(e) {
        var t = this._buff,
          n = t.length,
          r = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          i, s;
        for (i = 0; i < n; i += 1) r[i >> 2] |= t[i] << (i % 4 << 3);
        return this._finish(r, n), s = e ? this._state : d(this._state), this.reset(), s
      }, m.ArrayBuffer.prototype._finish = m.prototype._finish, m.ArrayBuffer.prototype.reset = function() {
        return this._buff = new Uint8Array(0), this._length = 0, this._state = [1732584193, -271733879, -1732584194, 271733878], this
      }, m.ArrayBuffer.prototype.destroy = m.prototype.destroy, m.ArrayBuffer.prototype._concatArrayBuffer = function(e, t) {
        var n = e.length,
          r = new Uint8Array(n + t.byteLength);
        return r.set(e), r.set(new Uint8Array(t), n), r
      }, m.ArrayBuffer.hash = function(e, t) {
        var n = c(new Uint8Array(e));
        return t ? n : d(n)
      }, e.register("Md5", {
        init: function() {},
        loadFromBlob: function(e) {
          var t = e.getSource(),
            n = 2097152,
            r = Math.ceil(t.size / n),
            i = 0,
            s = this.owner,
            o = new m.ArrayBuffer,
            u = this,
            a = t.mozSlice || t.webkitSlice || t.slice,
            f, l;
          l = new FileReader, f = function() {
            var c, h;
            c = i * n, h = Math.min(c + n, t.size), l.onload = function(t) {
              o.append(t.target.result), s.trigger("progress", {
                total: e.size,
                loaded: h
              })
            }, l.onloadend = function() {
              l.onloadend = l.onload = null, ++i < r ? setTimeout(f, 1) : setTimeout(function() {
                s.trigger("load"), u.result = o.end(), f = e = t = o = null, s.trigger("complete")
              }, 50)
            }, l.readAsArrayBuffer(a.call(t, c, h))
          }, f()
        },
        getResult: function() {
          return this.result
        }
      })
    }), t("runtime/flash/runtime", ["base", "runtime/runtime", "runtime/compbase"], function(t, n, r) {
      function u() {
        var e;
        try {
          e = navigator.plugins["Shockwave Flash"], e = e.description
        } catch (t) {
          try {
            e = (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version")
          } catch (n) {
            e = "0.0"
          }
        }
        return e = e.match(/\d+/g), parseFloat(e[0] + "." + e[1], 10)
      }

      function a() {
        function l(e, t) {
          var n = e.type || e,
            r, s;
          r = n.split("::"), s = r[0], n = r[1], n === "Ready" && s === a.uid ? a.trigger("ready") : i[s] && i[s].trigger(n.toLowerCase(), e, t)
        }
        var r = {},
          i = {},
          u = this.destroy,
          a = this,
          f = t.guid("webuploader_");
        n.apply(a, arguments), a.type = s, a.exec = function(e, n) {
          var s = this,
            u = s.uid,
            f = t.slice(arguments, 2),
            l;
          i[u] = s;
          if (o[e]) {
            r[u] || (r[u] = new o[e](s, a)), l = r[u];
            if (l[n]) return l[n].apply(l, f)
          }
          return a.flashExec.apply(s, arguments)
        }, e[f] = function() {
          var e = arguments;
          setTimeout(function() {
            l.apply(null, e)
          }, 1)
        }, this.jsreciver = f, this.destroy = function() {
          return u && u.apply(this, arguments)
        }, this.flashExec = function(e, n) {
          var r = a.getFlash(),
            i = t.slice(arguments, 2);
          return r.exec(this.uid, e, n, i)
        }
      }
      var i = t.$,
        s = "flash",
        o = {};
      return t.inherits(n, {
        constructor: a,
        init: function() {
          var e = this.getContainer(),
            n = this.options,
            r;
          e.css({
            position: "absolute",
            top: "-8px",
            left: "-8px",
            width: "9px",
            height: "9px",
            overflow: "hidden"
          }), r = '<object id="' + this.uid + '" type="application/' + 'x-shockwave-flash" data="' + n.swf + '" ', t.browser.ie && (r += 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" '), r += 'width="100%" height="100%" style="outline:0"><param name="movie" value="' + n.swf + '" />' + '<param name="flashvars" value="uid=' + this.uid + "&jsreciver=" + this.jsreciver + '" />' + '<param name="wmode" value="transparent" />' + '<param name="allowscriptaccess" value="always" />' + "</object>", e.html(r)
        },
        getFlash: function() {
          return this._flash ? this._flash : (this._flash = i("#" + this.uid).get(0), this._flash)
        }
      }), a.register = function(e, n) {
        return n = o[e] = t.inherits(r, i.extend({
          flashExec: function() {
            var e = this.owner,
              t = this.getRuntime();
            return t.flashExec.apply(e, arguments)
          }
        }, n)), n
      }, u() >= 11.4 && n.addRuntime(s, a), a
    }), t("runtime/flash/filepicker", ["base", "runtime/flash/runtime"], function(e, t) {
      var n = e.$;
      return t.register("FilePicker", {
        init: function(e) {
          var t = n.extend({}, e),
            r, i;
          r = t.accept && t.accept.length;
          for (i = 0; i < r; i++) t.accept[i].title || (t.accept[i].title = "Files");
          delete t.button, delete t.id, delete t.container, this.flashExec("FilePicker", "init", t)
        },
        destroy: function() {
          this.flashExec("FilePicker", "destroy")
        }
      })
    }), t("runtime/flash/image", ["runtime/flash/runtime"], function(e) {
      return e.register("Image", {
        loadFromBlob: function(e) {
          var t = this.owner;
          t.info() && this.flashExec("Image", "info", t.info()), t.meta() && this.flashExec("Image", "meta", t.meta()), this.flashExec("Image", "loadFromBlob", e.uid)
        }
      })
    }), t("runtime/flash/transport", ["base", "runtime/flash/runtime", "runtime/client"], function(t, n, r) {
      var i = t.$;
      return n.register("Transport", {
        init: function() {
          this._status = 0, this._response = null, this._responseJson = null
        },
        send: function() {
          var e = this.owner,
            t = this.options,
            n = this._initAjax(),
            r = e._blob,
            s = t.server,
            o;
          n.connectRuntime(r.ruid), t.sendAsBinary ? (s += (/\?/.test(s) ? "&" : "?") + i.param(e._formData), o = r.uid) : (i.each(e._formData, function(e, t) {
            n.exec("append", e, t)
          }), n.exec("appendBlob", t.fileVal, r.uid, t.filename || e._formData.name || "")), this._setRequestHeader(n, t.headers), n.exec("send", {
            method: t.method,
            url: s,
            forceURLStream: t.forceURLStream,
            mimeType: "application/octet-stream"
          }, o)
        },
        getStatus: function() {
          return this._status
        },
        getResponse: function() {
          return this._response || ""
        },
        getResponseAsJson: function() {
          return this._responseJson
        },
        abort: function() {
          var e = this._xhr;
          e && (e.exec("abort"), e.destroy(), this._xhr = e = null)
        },
        destroy: function() {
          this.abort()
        },
        _initAjax: function() {
          var t = this,
            n = new r("XMLHttpRequest");
          return n.on("uploadprogress progress", function(e) {
            var n = e.loaded / e.total;
            return n = Math.min(1, Math.max(0, n)), t.trigger("progress", n)
          }), n.on("load", function() {
            var r = n.exec("getStatus"),
              i = !1,
              s = "",
              o;
            return n.off(), t._xhr = null, r >= 200 && r < 300 ? i = !0 : r >= 500 && r < 600 ? (i = !0, s = "server") : s = "http", i && (t._response = n.exec("getResponse"), t._response = decodeURIComponent(t._response), o = e.JSON && e.JSON.parse || function(e) {
              try {
                return (new Function("return " + e)).call()
              } catch (t) {
                return {}
              }
            }, t._responseJson = t._response ? o(t._response) : {}), n.destroy(), n = null, s ? t.trigger("error", s) : t.trigger("load")
          }), n.on("error", function() {
            n.off(), t._xhr = null, t.trigger("error", "http")
          }), t._xhr = n, n
        },
        _setRequestHeader: function(e, t) {
          i.each(t, function(t, n) {
            e.exec("setRequestHeader", t, n)
          })
        }
      })
    }), t("runtime/flash/blob", ["runtime/flash/runtime", "lib/blob"], function(e, t) {
      return e.register("Blob", {
        slice: function(e, n) {
          var r = this.flashExec("Blob", "slice", e, n);
          return new t(r.uid, r)
        }
      })
    }), t("runtime/flash/md5", ["runtime/flash/runtime"], function(e) {
      return e.register("Md5", {
        init: function() {},
        loadFromBlob: function(e) {
          return this.flashExec("Md5", "loadFromBlob", e.uid)
        }
      })
    }), t("preset/all", ["base", "widgets/filednd", "widgets/filepaste", "widgets/filepicker", "widgets/image", "widgets/queue", "widgets/runtime", "widgets/upload", "widgets/validator", "widgets/md5", "runtime/html5/blob", "runtime/html5/dnd", "runtime/html5/filepaste", "runtime/html5/filepicker", "runtime/html5/imagemeta/exif", "runtime/html5/androidpatch", "runtime/html5/image", "runtime/html5/transport", "runtime/html5/md5", "runtime/flash/filepicker", "runtime/flash/image", "runtime/flash/transport", "runtime/flash/blob", "runtime/flash/md5"], function(e) {
      return e
    }), t("widgets/log", ["base", "uploader", "widgets/widget"], function(e, t) {
      function u(e) {
        var t = n.extend({}, o, e),
          i = r.replace(/^(.*)\?/, "$1" + n.param(t)),
          s = new Image;
        s.src = i
      }
      var n = e.$,
        r = " http://static.tieba.baidu.com/tb/pms/img/st.gif??",
        i = (location.hostname || location.host || "protected").toLowerCase(),
        s = i && /baidu/i.exec(i),
        o;
      if (!s) return;
      return o = {
        dv: 3,
        master: "webuploader",
        online: /test/.exec(i) ? 0 : 1,
        module: "",
        product: i,
        type: 0
      }, t.register({
        name: "log",
        init: function() {
          var e = this.owner,
            t = 0,
            n = 0;
          e.on("error", function(e) {
            u({
              type: 2,
              c_error_code: e
            })
          }).on("uploadError", function(e, t) {
            u({
              type: 2,
              c_error_code: "UPLOAD_ERROR",
              c_reason: "" + t
            })
          }).on("uploadComplete", function(e) {
            t++, n += e.size
          }).on("uploadFinished", function() {
            u({
              c_count: t,
              c_size: n
            }), t = n = 0
          }), u({
            c_usage: 1
          })
        }
      })
    }), t("webuploader", ["preset/all", "widgets/log"], function(e) {
      return e
    }), n("webuploader")
  }), define("csrfToken", [], function() {
    function e(e) {
      var t = e + "=",
        n = document.cookie.split(";");
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        while (i.charAt(0) == " ") i = i.substring(1);
        if (i.indexOf(t) != -1) return i.substring(t.length, i.length)
      }
      return ""
    }

    function t() {
      arguments.length == 2 ? arguments[0].setRequestHeader("X-CSRFToken", e("csrftoken")) : arguments.length == 3 && (arguments[2]["X-CSRFToken"] = e("csrftoken"))
    }
    return t
  }), define("uploader", ["webUploader", "csrfToken"], function(e, t) {
    function n(n, r, i, s, o) {
      var u = e.create({
        auto: !0,
        swf: "/static/img/Uploader.swf",
        server: r,
        pick: n,
        resize: !1,
        uploadBeforeSend: t,
        accept: i
      });
      return u.on("uploadBeforeSend", t), u.on("uploadSuccess", s), u.on("uploadProgress", o), u
    }
    return n
  }), define("transition", ["jquery", "transition"], function(e) {
    + function(e) {
      "use strict";

      function t() {
        var e = document.createElement("bootstrap"),
          t = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
          };
        for (var n in t)
          if (e.style[n] !== undefined) return {
            end: t[n]
          };
        return !1
      }
      e.fn.emulateTransitionEnd = function(t) {
        var n = !1,
          r = this;
        e(this).one("bsTransitionEnd", function() {
          n = !0
        });
        var i = function() {
          n || e(r).trigger(e.support.transition.end)
        };
        return setTimeout(i, t), this
      }, e(function() {
        e.support.transition = t();
        if (!e.support.transition) return;
        e.event.special.bsTransitionEnd = {
          bindType: e.support.transition.end,
          delegateType: e.support.transition.end,
          handle: function(t) {
            if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
          }
        }
      })
    }(e)
  }), define("modal", ["jquery", "transition"], function(e) {
    + function(e) {
      "use strict";

      function n(n, r) {
        return this.each(function() {
          var i = e(this),
            s = i.data("bs.modal"),
            o = e.extend({}, t.DEFAULTS, i.data(), typeof n == "object" && n);
          s || i.data("bs.modal", s = new t(this, o)), typeof n == "string" ? s[n](r) : o.show && s.show(r)
        })
      }
      var t = function(t, n) {
        this.options = n, this.$body = e(document.body), this.$element = e(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
          this.$element.trigger("loaded.bs.modal")
        }, this))
      };
      t.VERSION = "3.3.5", t.TRANSITION_DURATION = 300, t.BACKDROP_TRANSITION_DURATION = 150, t.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
      }, t.prototype.toggle = function(e) {
        return this.isShown ? this.hide() : this.show(e)
      }, t.prototype.show = function(n) {
        var r = this,
          i = e.Event("show.bs.modal", {
            relatedTarget: n
          });
        this.$element.trigger(i);
        if (this.isShown || i.isDefaultPrevented()) return;
        this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
          r.$element.one("mouseup.dismiss.bs.modal", function(t) {
            e(t.target).is(r.$element) && (r.ignoreBackdropClick = !0)
          })
        }), this.backdrop(function() {
          var i = e.support.transition && r.$element.hasClass("fade");
          r.$element.parent().length || r.$element.appendTo(r.$body), r.$element.show().scrollTop(0), r.adjustDialog(), i && r.$element[0].offsetWidth, r.$element.addClass("in"), r.enforceFocus();
          var s = e.Event("shown.bs.modal", {
            relatedTarget: n
          });
          i ? r.$dialog.one("bsTransitionEnd", function() {
            r.$element.trigger("focus").trigger(s)
          }).emulateTransitionEnd(t.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(s)
        })
      }, t.prototype.hide = function(n) {
        n && n.preventDefault(), n = e.Event("hide.bs.modal"), this.$element.trigger(n);
        if (!this.isShown || n.isDefaultPrevented()) return;
        this.isShown = !1, this.escape(), this.resize(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : this.hideModal()
      }, t.prototype.enforceFocus = function() {
        e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
          this.$element[0] !== e.target && !this.$element.has(e.target).length && this.$element.trigger("focus")
        }, this))
      }, t.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function(e) {
          e.which == 27 && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
      }, t.prototype.resize = function() {
        this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
      }, t.prototype.hideModal = function() {
        var e = this;
        this.$element.hide(), this.backdrop(function() {
          e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
        })
      }, t.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
      }, t.prototype.backdrop = function(n) {
        var r = this,
          i = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var s = e.support.transition && i;
          this.$backdrop = e(document.createElement("div")).addClass("modal-backdrop " + i).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
            if (this.ignoreBackdropClick) {
              this.ignoreBackdropClick = !1;
              return
            }
            if (e.target !== e.currentTarget) return;
            this.options.backdrop == "static" ? this.$element[0].focus() : this.hide()
          }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in");
          if (!n) return;
          s ? this.$backdrop.one("bsTransitionEnd", n).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : n()
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          var o = function() {
            r.removeBackdrop(), n && n()
          };
          e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : o()
        } else n && n()
      }, t.prototype.handleUpdate = function() {
        this.adjustDialog()
      }, t.prototype.adjustDialog = function() {
        var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
        })
      }, t.prototype.resetAdjustments = function() {
        this.$element.css({
          paddingLeft: "",
          paddingRight: ""
        })
      }, t.prototype.checkScrollbar = function() {
        var e = window.innerWidth;
        if (!e) {
          var t = document.documentElement.getBoundingClientRect();
          e = t.right - Math.abs(t.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar()
      }, t.prototype.setScrollbar = function() {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
      }, t.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
      }, t.prototype.measureScrollbar = function() {
        var e = document.createElement("div");
        e.className = "modal-scrollbar-measure", this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e), t
      };
      var r = e.fn.modal;
      e.fn.modal = n, e.fn.modal.Constructor = t, e.fn.modal.noConflict = function() {
        return e.fn.modal = r, this
      }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
        var r = e(this),
          i = r.attr("href"),
          s = e(r.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
          o = s.data("bs.modal") ? "toggle" : e.extend({
            remote: !/#/.test(i) && i
          }, s.data(), r.data());
        r.is("a") && t.preventDefault(), s.one("show.bs.modal", function(e) {
          if (e.isDefaultPrevented()) return;
          s.one("hidden.bs.modal", function() {
            r.is(":visible") && r.trigger("focus")
          })
        }), n.call(s, o, this)
      })
    }(e)
  }), define("dropdown", ["jquery", "transition"], function(e) {
    + function(e) {
      "use strict";

      function i(t) {
        var n = t.attr("data-target");
        n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var r = n && e(n);
        return r && r.length ? r : t.parent()
      }

      function s(r) {
        if (r && r.which === 3) return;
        e(t).remove(), e(n).each(function() {
          var t = e(this),
            n = i(t),
            s = {
              relatedTarget: this
            };
          if (!n.hasClass("open")) return;
          if (r && r.type == "click" && /input|textarea/i.test(r.target.tagName) && e.contains(n[0], r.target)) return;
          n.trigger(r = e.Event("hide.bs.dropdown", s));
          if (r.isDefaultPrevented()) return;
          t.attr("aria-expanded", "false"), n.removeClass("open").trigger(e.Event("hidden.bs.dropdown", s))
        })
      }

      function o(t) {
        return this.each(function() {
          var n = e(this),
            i = n.data("bs.dropdown");
          i || n.data("bs.dropdown", i = new r(this)), typeof t == "string" && i[t].call(n)
        })
      }
      var t = ".dropdown-backdrop",
        n = '[data-toggle="dropdown"]',
        r = function(t) {
          e(t).on("click.bs.dropdown", this.toggle)
        };
      r.VERSION = "3.3.5", r.prototype.toggle = function(t) {
        var n = e(this);
        if (n.is(".disabled, :disabled")) return;
        var r = i(n),
          o = r.hasClass("open");
        s();
        if (!o) {
          "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click", s);
          var u = {
            relatedTarget: this
          };
          r.trigger(t = e.Event("show.bs.dropdown", u));
          if (t.isDefaultPrevented()) return;
          n.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger(e.Event("shown.bs.dropdown", u))
        }
        return !1
      }, r.prototype.keydown = function(t) {
        if (!/(38|40|27|32)/.test(t.which) || /input|textarea/i.test(t.target.tagName)) return;
        var r = e(this);
        t.preventDefault(), t.stopPropagation();
        if (r.is(".disabled, :disabled")) return;
        var s = i(r),
          o = s.hasClass("open");
        if (!o && t.which != 27 || o && t.which == 27) return t.which == 27 && s.find(n).trigger("focus"), r.trigger("click");
        var u = " li:not(.disabled):visible a",
          a = s.find(".dropdown-menu" + u);
        if (!a.length) return;
        var f = a.index(t.target);
        t.which == 38 && f > 0 && f--, t.which == 40 && f < a.length - 1 && f++, ~f || (f = 0), a.eq(f).trigger("focus")
      };
      var u = e.fn.dropdown;
      e.fn.dropdown = o, e.fn.dropdown.Constructor = r, e.fn.dropdown.noConflict = function() {
        return e.fn.dropdown = u, this
      }, e(document).on("click.bs.dropdown.data-api", s).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation()
      }).on("click.bs.dropdown.data-api", n, r.prototype.toggle).on("keydown.bs.dropdown.data-api", n, r.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", r.prototype.keydown)
    }(e)
  }), define("collapse", ["jquery", "./transition"], function(e) {
    + function(e) {
      "use strict";

      function n(t) {
        var n, r = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return e(r)
      }

      function r(n) {
        return this.each(function() {
          var r = e(this),
            i = r.data("bs.collapse"),
            s = e.extend({}, t.DEFAULTS, r.data(), typeof n == "object" && n);
          !i && s.toggle && /show|hide/.test(n) && (s.toggle = !1), i || r.data("bs.collapse", i = new t(this, s)), typeof n == "string" && i[n]()
        })
      }
      var t = function(n, r) {
        this.$element = e(n), this.options = e.extend({}, t.DEFAULTS, r), this.$trigger = e('[data-toggle="collapse"][href="#' + n.id + '"],' + '[data-toggle="collapse"][data-target="#' + n.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
      };
      t.VERSION = "3.3.5", t.TRANSITION_DURATION = 350, t.DEFAULTS = {
        toggle: !0
      }, t.prototype.dimension = function() {
        var e = this.$element.hasClass("width");
        return e ? "width" : "height"
      }, t.prototype.show = function() {
        if (this.transitioning || this.$element.hasClass("in")) return;
        var n, i = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
        if (i && i.length) {
          n = i.data("bs.collapse");
          if (n && n.transitioning) return
        }
        var s = e.Event("show.bs.collapse");
        this.$element.trigger(s);
        if (s.isDefaultPrevented()) return;
        i && i.length && (r.call(i, "hide"), n || i.data("bs.collapse", null));
        var o = this.dimension();
        this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
        var u = function() {
          this.$element.removeClass("collapsing").addClass("collapse in")[o](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
        };
        if (!e.support.transition) return u.call(this);
        var a = e.camelCase(["scroll", o].join("-"));
        this.$element.one("bsTransitionEnd", e.proxy(u, this)).emulateTransitionEnd(t.TRANSITION_DURATION)[o](this.$element[0][a])
      }, t.prototype.hide = function() {
        if (this.transitioning || !this.$element.hasClass("in")) return;
        var n = e.Event("hide.bs.collapse");
        this.$element.trigger(n);
        if (n.isDefaultPrevented()) return;
        var r = this.dimension();
        this.$element[r](this.$element[r]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
        var i = function() {
          this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
        };
        if (!e.support.transition) return i.call(this);
        this.$element[r](0).one("bsTransitionEnd", e.proxy(i, this)).emulateTransitionEnd(t.TRANSITION_DURATION)
      }, t.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
      }, t.prototype.getParent = function() {
        return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function(t, r) {
          var i = e(r);
          this.addAriaAndCollapsedClass(n(i), i)
        }, this)).end()
      }, t.prototype.addAriaAndCollapsedClass = function(e, t) {
        var n = e.hasClass("in");
        e.attr("aria-expanded", n), t.toggleClass("collapsed", !n).attr("aria-expanded", n)
      };
      var i = e.fn.collapse;
      e.fn.collapse = r, e.fn.collapse.Constructor = t, e.fn.collapse.noConflict = function() {
        return e.fn.collapse = i, this
      }, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(t) {
        var i = e(this);
        i.attr("data-target") || t.preventDefault();
        var s = n(i),
          o = s.data("bs.collapse"),
          u = o ? "toggle" : i.data();
        r.call(s, u)
      })
    }(e)
  }), require(["jquery", "modal", "dropdown", "transition", "collapse"]), define("bootstrap", function() {}), define("bsAlert", ["jquery", "bootstrap"], function(e) {
    function t(t) {
      if (!e("#alert-modal").length) {
        var n = '<div class="modal fade" id="alert-modal" tabindex="-1" role="dialog"> <div class="modal-dialog modal-sm"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><spanaria-hidden="true">&times;</span></button> <h4 class="modal-title">提示</h4> </div> <div class="modal-body"> <p id="modal-text"></p> </div> <div class="modal-footer"> <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button> </div> </div> </div> </div>';
        e("body").append(n)
      }
      e("#modal-text").html(t), e("#alert-modal").modal()
    }
    return t
  }),
  function(e) {
    typeof define == "function" && define.amd ? define("datetimePicker", ["jquery"], e) : typeof exports == "object" ? e(require("jquery")) : e(jQuery)
  }(function(e, t) {
    function n() {
      return new Date(Date.UTC.apply(Date, arguments))
    }

    function r() {
      var e = new Date;
      return n(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), 0)
    }
    var i = function(n, r) {
      var i = this;
      this.element = e(n), this.container = r.container || "body", this.language = r.language || this.element.data("date-language") || "en", this.language = this.language in o ? this.language : "en", this.isRTL = o[this.language].rtl || !1, this.formatType = r.formatType || this.element.data("format-type") || "standard", this.format = u.parseFormat(r.format || this.element.data("date-format") || o[this.language].format || u.getDefaultFormat(this.formatType, "input"), this.formatType), this.isInline = !1, this.isVisible = !1, this.isInput = this.element.is("input"), this.fontAwesome = r.fontAwesome || this.element.data("font-awesome") || !1, this.bootcssVer = r.bootcssVer || (this.isInput ? this.element.is(".form-control") ? 3 : 2 : this.bootcssVer = this.element.is(".input-group") ? 3 : 2), this.component = this.element.is(".date") ? this.bootcssVer == 3 ? this.element.find(".input-group-addon .glyphicon-th, .input-group-addon .glyphicon-time, .input-group-addon .glyphicon-calendar, .input-group-addon .glyphicon-calendar, .input-group-addon .fa-calendar, .input-group-addon .fa-clock-o").parent() : this.element.find(".add-on .icon-th, .add-on .icon-time, .add-on .icon-calendar .fa-calendar .fa-clock-o").parent() : !1, this.componentReset = this.element.is(".date") ? this.bootcssVer == 3 ? this.element.find(".input-group-addon .glyphicon-remove, .input-group-addon .fa-times").parent() : this.element.find(".add-on .icon-remove, .add-on .fa-times").parent() : !1, this.hasInput = this.component && this.element.find("input").length, this.component && this.component.length === 0 && (this.component = !1), this.linkField = r.linkField || this.element.data("link-field") || !1, this.linkFormat = u.parseFormat(r.linkFormat || this.element.data("link-format") || u.getDefaultFormat(this.formatType, "link"), this.formatType), this.minuteStep = r.minuteStep || this.element.data("minute-step") || 5, this.pickerPosition = r.pickerPosition || this.element.data("picker-position") || "bottom-right", this.showMeridian = r.showMeridian || this.element.data("show-meridian") || !1, this.initialDate = r.initialDate || new Date, this.zIndex = r.zIndex || this.element.data("z-index") || t, this.icons = {
        leftArrow: this.fontAwesome ? "fa-arrow-left" : this.bootcssVer === 3 ? "glyphicon-arrow-left" : "icon-arrow-left",
        rightArrow: this.fontAwesome ? "fa-arrow-right" : this.bootcssVer === 3 ? "glyphicon-arrow-right" : "icon-arrow-right"
      }, this.icontype = this.fontAwesome ? "fa" : "glyphicon", this._attachEvents(), this.formatViewType = "datetime", "formatViewType" in r ? this.formatViewType = r.formatViewType : "formatViewType" in this.element.data() && (this.formatViewType = this.element.data("formatViewType")), this.minView = 0, "minView" in r ? this.minView = r.minView : "minView" in this.element.data() && (this.minView = this.element.data("min-view")), this.minView = u.convertViewMode(this.minView), this.maxView = u.modes.length - 1, "maxView" in r ? this.maxView = r.maxView : "maxView" in this.element.data() && (this.maxView = this.element.data("max-view")), this.maxView = u.convertViewMode(this.maxView), this.wheelViewModeNavigation = !1, "wheelViewModeNavigation" in r ? this.wheelViewModeNavigation = r.wheelViewModeNavigation : "wheelViewModeNavigation" in this.element.data() && (this.wheelViewModeNavigation = this.element.data("view-mode-wheel-navigation")), this.wheelViewModeNavigationInverseDirection = !1, "wheelViewModeNavigationInverseDirection" in r ? this.wheelViewModeNavigationInverseDirection = r.wheelViewModeNavigationInverseDirection : "wheelViewModeNavigationInverseDirection" in this.element.data() && (this.wheelViewModeNavigationInverseDirection = this.element.data("view-mode-wheel-navigation-inverse-dir")), this.wheelViewModeNavigationDelay = 100, "wheelViewModeNavigationDelay" in r ? this.wheelViewModeNavigationDelay = r.wheelViewModeNavigationDelay : "wheelViewModeNavigationDelay" in this.element.data() && (this.wheelViewModeNavigationDelay = this.element.data("view-mode-wheel-navigation-delay")), this.startViewMode = 2, "startView" in r ? this.startViewMode = r.startView : "startView" in this.element.data() && (this.startViewMode = this.element.data("start-view")), this.startViewMode = u.convertViewMode(this.startViewMode), this.viewMode = this.startViewMode, this.viewSelect = this.minView, "viewSelect" in r ? this.viewSelect = r.viewSelect : "viewSelect" in this.element.data() && (this.viewSelect = this.element.data("view-select")), this.viewSelect = u.convertViewMode(this.viewSelect), this.forceParse = !0, "forceParse" in r ? this.forceParse = r.forceParse : "dateForceParse" in this.element.data() && (this.forceParse = this.element.data("date-force-parse"));
      var s = this.bootcssVer === 3 ? u.templateV3 : u.template;
      while (s.indexOf("{iconType}") !== -1) s = s.replace("{iconType}", this.icontype);
      while (s.indexOf("{leftArrow}") !== -1) s = s.replace("{leftArrow}", this.icons.leftArrow);
      while (s.indexOf("{rightArrow}") !== -1) s = s.replace("{rightArrow}", this.icons.rightArrow);
      this.picker = e(s).appendTo(this.isInline ? this.element : this.container).on({
        click: e.proxy(this.click, this),
        mousedown: e.proxy(this.mousedown, this)
      }), this.wheelViewModeNavigation && (e.fn.mousewheel ? this.picker.on({
        mousewheel: e.proxy(this.mousewheel, this)
      }) : console.log("Mouse Wheel event is not supported. Please include the jQuery Mouse Wheel plugin before enabling this option")), this.isInline ? this.picker.addClass("datetimepicker-inline") : this.picker.addClass("datetimepicker-dropdown-" + this.pickerPosition + " dropdown-menu");
      if (this.isRTL) {
        this.picker.addClass("datetimepicker-rtl");
        var a = this.bootcssVer === 3 ? ".prev span, .next span" : ".prev i, .next i";
        this.picker.find(a).toggleClass(this.icons.leftArrow + " " + this.icons.rightArrow)
      }
      e(document).on("mousedown", function(t) {
        e(t.target).closest(".datetimepicker").length === 0 && i.hide()
      }), this.autoclose = !1, "autoclose" in r ? this.autoclose = r.autoclose : "dateAutoclose" in this.element.data() && (this.autoclose = this.element.data("date-autoclose")), this.keyboardNavigation = !0, "keyboardNavigation" in r ? this.keyboardNavigation = r.keyboardNavigation : "dateKeyboardNavigation" in this.element.data() && (this.keyboardNavigation = this.element.data("date-keyboard-navigation")), this.todayBtn = r.todayBtn || this.element.data("date-today-btn") || !1, this.todayHighlight = r.todayHighlight || this.element.data("date-today-highlight") || !1, this.weekStart = (r.weekStart || this.element.data("date-weekstart") || o[this.language].weekStart || 0) % 7, this.weekEnd = (this.weekStart + 6) % 7, this.startDate = -Infinity, this.endDate = Infinity, this.daysOfWeekDisabled = [], this.setStartDate(r.startDate || this.element.data("date-startdate")), this.setEndDate(r.endDate || this.element.data("date-enddate")), this.setDaysOfWeekDisabled(r.daysOfWeekDisabled || this.element.data("date-days-of-week-disabled")), this.setMinutesDisabled(r.minutesDisabled || this.element.data("date-minute-disabled")), this.setHoursDisabled(r.hoursDisabled || this.element.data("date-hour-disabled")), this.fillDow(), this.fillMonths(), this.update(), this.showMode(), this.isInline && this.show()
    };
    i.prototype = {
      constructor: i,
      _events: [],
      _attachEvents: function() {
        this._detachEvents(), this.isInput ? this._events = [
          [this.element, {
            focus: e.proxy(this.show, this),
            keyup: e.proxy(this.update, this),
            keydown: e.proxy(this.keydown, this)
          }]
        ] : this.component && this.hasInput ? (this._events = [
          [this.element.find("input"), {
            focus: e.proxy(this.show, this),
            keyup: e.proxy(this.update, this),
            keydown: e.proxy(this.keydown, this)
          }],
          [this.component, {
            click: e.proxy(this.show, this)
          }]
        ], this.componentReset && this._events.push([this.componentReset, {
          click: e.proxy(this.reset, this)
        }])) : this.element.is("div") ? this.isInline = !0 : this._events = [
          [this.element, {
            click: e.proxy(this.show, this)
          }]
        ];
        for (var t = 0, n, r; t < this._events.length; t++) n = this._events[t][0], r = this._events[t][1], n.on(r)
      },
      _detachEvents: function() {
        for (var e = 0, t, n; e < this._events.length; e++) t = this._events[e][0], n = this._events[e][1], t.off(n);
        this._events = []
      },
      show: function(t) {
        this.picker.show(), this.height = this.component ? this.component.outerHeight() : this.element.outerHeight(), this.forceParse && this.update(), this.place(), e(window).on("resize", e.proxy(this.place, this)), t && (t.stopPropagation(), t.preventDefault()), this.isVisible = !0, this.element.trigger({
          type: "show",
          date: this.date
        })
      },
      hide: function(t) {
        if (!this.isVisible) return;
        if (this.isInline) return;
        this.picker.hide(), e(window).off("resize", this.place), this.viewMode = this.startViewMode, this.showMode(), this.isInput || e(document).off("mousedown", this.hide), this.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this.isVisible = !1, this.element.trigger({
          type: "hide",
          date: this.date
        })
      },
      remove: function() {
        this._detachEvents(), this.picker.remove(), delete this.picker, delete this.element.data().datetimepicker
      },
      getDate: function() {
        var e = this.getUTCDate();
        return new Date(e.getTime() + e.getTimezoneOffset() * 6e4)
      },
      getUTCDate: function() {
        return this.date
      },
      setDate: function(e) {
        this.setUTCDate(new Date(e.getTime() - e.getTimezoneOffset() * 6e4))
      },
      setUTCDate: function(e) {
        e >= this.startDate && e <= this.endDate ? (this.date = e, this.setValue(), this.viewDate = this.date, this.fill()) : this.element.trigger({
          type: "outOfRange",
          date: e,
          startDate: this.startDate,
          endDate: this.endDate
        })
      },
      setFormat: function(e) {
        this.format = u.parseFormat(e, this.formatType);
        var t;
        this.isInput ? t = this.element : this.component && (t = this.element.find("input")), t && t.val() && this.setValue()
      },
      setValue: function() {
        var t = this.getFormattedDate();
        this.isInput ? this.element.val(t) : (this.component && this.element.find("input").val(t), this.element.data("date", t)), this.linkField && e("#" + this.linkField).val(this.getFormattedDate(this.linkFormat))
      },
      getFormattedDate: function(e) {
        return e == t && (e = this.format), u.formatDate(this.date, e, this.language, this.formatType)
      },
      setStartDate: function(e) {
        this.startDate = e || -Infinity, this.startDate !== -Infinity && (this.startDate = u.parseDate(this.startDate, this.format, this.language, this.formatType)), this.update(), this.updateNavArrows()
      },
      setEndDate: function(e) {
        this.endDate = e || Infinity, this.endDate !== Infinity && (this.endDate = u.parseDate(this.endDate, this.format, this.language, this.formatType)), this.update(), this.updateNavArrows()
      },
      setDaysOfWeekDisabled: function(t) {
        this.daysOfWeekDisabled = t || [], e.isArray(this.daysOfWeekDisabled) || (this.daysOfWeekDisabled = this.daysOfWeekDisabled.split(/,\s*/)), this.daysOfWeekDisabled = e.map(this.daysOfWeekDisabled, function(e) {
          return parseInt(e, 10)
        }), this.update(), this.updateNavArrows()
      },
      setMinutesDisabled: function(t) {
        this.minutesDisabled = t || [], e.isArray(this.minutesDisabled) || (this.minutesDisabled = this.minutesDisabled.split(/,\s*/)), this.minutesDisabled = e.map(this.minutesDisabled, function(e) {
          return parseInt(e, 10)
        }), this.update(), this.updateNavArrows()
      },
      setHoursDisabled: function(t) {
        this.hoursDisabled = t || [], e.isArray(this.hoursDisabled) || (this.hoursDisabled = this.hoursDisabled.split(/,\s*/)), this.hoursDisabled = e.map(this.hoursDisabled, function(e) {
          return parseInt(e, 10)
        }), this.update(), this.updateNavArrows()
      },
      place: function() {
        if (this.isInline) return;
        if (!this.zIndex) {
          var t = 0;
          e("div").each(function() {
            var n = parseInt(e(this).css("zIndex"), 10);
            n > t && (t = n)
          }), this.zIndex = t + 10
        }
        var n, r, i, s;
        this.container instanceof e ? s = this.container.offset() : s = e(this.container).offset();
        if (this.component) {
          n = this.component.offset(), i = n.left;
          if (this.pickerPosition == "bottom-left" || this.pickerPosition == "top-left") i += this.component.outerWidth() - this.picker.outerWidth()
        } else n = this.element.offset(), i = n.left;
        i + 220 > document.body.clientWidth && (i = document.body.clientWidth - 220), this.pickerPosition == "top-left" || this.pickerPosition == "top-right" ? r = n.top - this.picker.outerHeight() : r = n.top + this.height, r -= s.top, i -= s.left, this.container != "body" && (r += document.body.scrollTop), this.picker.css({
          top: r,
          left: i,
          zIndex: this.zIndex
        })
      },
      update: function() {
        var e, t = !1;
        if (arguments && arguments.length && (typeof arguments[0] == "string" || arguments[0] instanceof Date)) e = arguments[0], t = !0;
        else {
          e = (this.isInput ? this.element.val() : this.element.find("input").val()) || this.element.data("date") || this.initialDate;
          if (typeof e == "string" || e instanceof String) e = e.replace(/^\s+|\s+$/g, "")
        }
        e || (e = new Date, t = !1), this.date = u.parseDate(e, this.format, this.language, this.formatType), t && this.setValue(), this.date < this.startDate ? this.viewDate = new Date(this.startDate) : this.date > this.endDate ? this.viewDate = new Date(this.endDate) : this.viewDate = new Date(this.date), this.fill()
      },
      fillDow: function() {
        var e = this.weekStart,
          t = "<tr>";
        while (e < this.weekStart + 7) t += '<th class="dow">' + o[this.language].daysMin[e++ % 7] + "</th>";
        t += "</tr>", this.picker.find(".datetimepicker-days thead").append(t)
      },
      fillMonths: function() {
        var e = "",
          t = 0;
        while (t < 12) e += '<span class="month">' + o[this.language].monthsShort[t++] + "</span>";
        this.picker.find(".datetimepicker-months td").html(e)
      },
      fill: function() {
        if (this.date == null || this.viewDate == null) return;
        var t = new Date(this.viewDate),
          r = t.getUTCFullYear(),
          i = t.getUTCMonth(),
          s = t.getUTCDate(),
          a = t.getUTCHours(),
          f = t.getUTCMinutes(),
          l = this.startDate !== -Infinity ? this.startDate.getUTCFullYear() : -Infinity,
          c = this.startDate !== -Infinity ? this.startDate.getUTCMonth() + 1 : -Infinity,
          h = this.endDate !== Infinity ? this.endDate.getUTCFullYear() : Infinity,
          p = this.endDate !== Infinity ? this.endDate.getUTCMonth() + 1 : Infinity,
          d = (new n(this.date.getUTCFullYear(), this.date.getUTCMonth(), this.date.getUTCDate())).valueOf(),
          v = new Date;
        this.picker.find(".datetimepicker-days thead th:eq(1)").text(o[this.language].months[i] + " " + r);
        if (this.formatViewType == "time") {
          var m = this.getFormattedDate();
          this.picker.find(".datetimepicker-hours thead th:eq(1)").text(m), this.picker.find(".datetimepicker-minutes thead th:eq(1)").text(m)
        } else this.picker.find(".datetimepicker-hours thead th:eq(1)").text(s + " " + o[this.language].months[i] + " " + r), this.picker.find(".datetimepicker-minutes thead th:eq(1)").text(s + " " + o[this.language].months[i] + " " + r);
        this.picker.find("tfoot th.today").text(o[this.language].today).toggle(this.todayBtn !== !1), this.updateNavArrows(), this.fillMonths();
        var g = n(r, i - 1, 28, 0, 0, 0, 0),
          y = u.getDaysInMonth(g.getUTCFullYear(), g.getUTCMonth());
        g.setUTCDate(y), g.setUTCDate(y - (g.getUTCDay() - this.weekStart + 7) % 7);
        var b = new Date(g);
        b.setUTCDate(b.getUTCDate() + 42), b = b.valueOf();
        var w = [],
          E;
        while (g.valueOf() < b) {
          g.getUTCDay() == this.weekStart && w.push("<tr>"), E = "";
          if (g.getUTCFullYear() < r || g.getUTCFullYear() == r && g.getUTCMonth() < i) E += " old";
          else if (g.getUTCFullYear() > r || g.getUTCFullYear() == r && g.getUTCMonth() > i) E += " new";
          this.todayHighlight && g.getUTCFullYear() == v.getFullYear() && g.getUTCMonth() == v.getMonth() && g.getUTCDate() == v.getDate() && (E += " today"), g.valueOf() == d && (E += " active");
          if (g.valueOf() + 864e5 <= this.startDate || g.valueOf() > this.endDate || e.inArray(g.getUTCDay(), this.daysOfWeekDisabled) !== -1) E += " disabled";
          w.push('<td class="day' + E + '">' + g.getUTCDate() + "</td>"), g.getUTCDay() == this.weekEnd && w.push("</tr>"), g.setUTCDate(g.getUTCDate() + 1)
        }
        this.picker.find(".datetimepicker-days tbody").empty().append(w.join("")), w = [];
        var S = "",
          x = "",
          T = "",
          N = this.hoursDisabled || [];
        for (var C = 0; C < 24; C++) {
          if (N.indexOf(C) !== -1) continue;
          var k = n(r, i, s, C);
          E = "", k.valueOf() + 36e5 <= this.startDate || k.valueOf() > this.endDate ? E += " disabled" : a == C && (E += " active"), this.showMeridian && o[this.language].meridiem.length == 2 ? (x = C < 12 ? o[this.language].meridiem[0] : o[this.language].meridiem[1], x != T && (T != "" && w.push("</fieldset>"), w.push('<fieldset class="hour"><legend>' + x.toUpperCase() + "</legend>")), T = x, S = C % 12 ? C % 12 : 12, w.push('<span class="hour' + E + " hour_" + (C < 12 ? "am" : "pm") + '">' + S + "</span>"), C == 23 && w.push("</fieldset>")) : (S = C + ":00", w.push('<span class="hour' + E + '">' + S + "</span>"))
        }
        this.picker.find(".datetimepicker-hours td").html(w.join("")), w = [], S = "", x = "", T = "";
        var L = this.minutesDisabled || [];
        for (var C = 0; C < 60; C += this.minuteStep) {
          if (L.indexOf(C) !== -1) continue;
          var k = n(r, i, s, a, C, 0);
          E = "", k.valueOf() < this.startDate || k.valueOf() > this.endDate ? E += " disabled" : Math.floor(f / this.minuteStep) == Math.floor(C / this.minuteStep) && (E += " active"), this.showMeridian && o[this.language].meridiem.length == 2 ? (x = a < 12 ? o[this.language].meridiem[0] : o[this.language].meridiem[1], x != T && (T != "" && w.push("</fieldset>"), w.push('<fieldset class="minute"><legend>' + x.toUpperCase() + "</legend>")), T = x, S = a % 12 ? a % 12 : 12, w.push('<span class="minute' + E + '">' + S + ":" + (C < 10 ? "0" + C : C) + "</span>"), C == 59 && w.push("</fieldset>")) : (S = C + ":00", w.push('<span class="minute' + E + '">' + a + ":" + (C < 10 ? "0" + C : C) + "</span>"))
        }
        this.picker.find(".datetimepicker-minutes td").html(w.join(""));
        var A = this.date.getUTCFullYear(),
          O = this.picker.find(".datetimepicker-months").find("th:eq(1)").text(r).end().find("span").removeClass("active");
        A == r && O.eq(this.date.getUTCMonth() + 2).addClass("active"), (r < l || r > h) && O.addClass("disabled"), r == l && O.slice(0, c + 1).addClass("disabled"), r == h && O.slice(p).addClass("disabled"), w = "", r = parseInt(r / 10, 10) * 10;
        var M = this.picker.find(".datetimepicker-years").find("th:eq(1)").text(r + "-" + (r + 9)).end().find("td");
        r -= 1;
        for (var C = -1; C < 11; C++) w += '<span class="year' + (C == -1 || C == 10 ? " old" : "") + (A == r ? " active" : "") + (r < l || r > h ? " disabled" : "") + '">' + r + "</span>", r += 1;
        M.html(w), this.place()
      },
      updateNavArrows: function() {
        var e = new Date(this.viewDate),
          t = e.getUTCFullYear(),
          n = e.getUTCMonth(),
          r = e.getUTCDate(),
          i = e.getUTCHours();
        switch (this.viewMode) {
          case 0:
            this.startDate !== -Infinity && t <= this.startDate.getUTCFullYear() && n <= this.startDate.getUTCMonth() && r <= this.startDate.getUTCDate() && i <= this.startDate.getUTCHours() ? this.picker.find(".prev").css({
              visibility: "hidden"
            }) : this.picker.find(".prev").css({
              visibility: "visible"
            }), this.endDate !== Infinity && t >= this.endDate.getUTCFullYear() && n >= this.endDate.getUTCMonth() && r >= this.endDate.getUTCDate() && i >= this.endDate.getUTCHours() ? this.picker.find(".next").css({
              visibility: "hidden"
            }) : this.picker.find(".next").css({
              visibility: "visible"
            });
            break;
          case 1:
            this.startDate !== -Infinity && t <= this.startDate.getUTCFullYear() && n <= this.startDate.getUTCMonth() && r <= this.startDate.getUTCDate() ? this.picker.find(".prev").css({
              visibility: "hidden"
            }) : this.picker.find(".prev").css({
              visibility: "visible"
            }), this.endDate !== Infinity && t >= this.endDate.getUTCFullYear() && n >= this.endDate.getUTCMonth() && r >= this.endDate.getUTCDate() ? this.picker.find(".next").css({
              visibility: "hidden"
            }) : this.picker.find(".next").css({
              visibility: "visible"
            });
            break;
          case 2:
            this.startDate !== -Infinity && t <= this.startDate.getUTCFullYear() && n <= this.startDate.getUTCMonth() ? this.picker.find(".prev").css({
              visibility: "hidden"
            }) : this.picker.find(".prev").css({
              visibility: "visible"
            }), this.endDate !== Infinity && t >= this.endDate.getUTCFullYear() && n >= this.endDate.getUTCMonth() ? this.picker.find(".next").css({
              visibility: "hidden"
            }) : this.picker.find(".next").css({
              visibility: "visible"
            });
            break;
          case 3:
          case 4:
            this.startDate !== -Infinity && t <= this.startDate.getUTCFullYear() ? this.picker.find(".prev").css({
              visibility: "hidden"
            }) : this.picker.find(".prev").css({
              visibility: "visible"
            }), this.endDate !== Infinity && t >= this.endDate.getUTCFullYear() ? this.picker.find(".next").css({
              visibility: "hidden"
            }) : this.picker.find(".next").css({
              visibility: "visible"
            })
        }
      },
      mousewheel: function(t) {
        t.preventDefault(), t.stopPropagation();
        if (this.wheelPause) return;
        this.wheelPause = !0;
        var n = t.originalEvent,
          r = n.wheelDelta,
          i = r > 0 ? 1 : r === 0 ? 0 : -1;
        this.wheelViewModeNavigationInverseDirection && (i = -i), this.showMode(i), setTimeout(e.proxy(function() {
          this.wheelPause = !1
        }, this), this.wheelViewModeNavigationDelay)
      },
      click: function(t) {
        t.stopPropagation(), t.preventDefault();
        var r = e(t.target).closest("span, td, th, legend");
        r.is("." + this.icontype) && (r = e(r).parent().closest("span, td, th, legend"));
        if (r.length == 1) {
          if (r.is(".disabled")) {
            this.element.trigger({
              type: "outOfRange",
              date: this.viewDate,
              startDate: this.startDate,
              endDate: this.endDate
            });
            return
          }
          switch (r[0].nodeName.toLowerCase()) {
            case "th":
              switch (r[0].className) {
                case "switch":
                  this.showMode(1);
                  break;
                case "prev":
                case "next":
                  var i = u.modes[this.viewMode].navStep * (r[0].className == "prev" ? -1 : 1);
                  switch (this.viewMode) {
                    case 0:
                      this.viewDate = this.moveHour(this.viewDate, i);
                      break;
                    case 1:
                      this.viewDate = this.moveDate(this.viewDate, i);
                      break;
                    case 2:
                      this.viewDate = this.moveMonth(this.viewDate, i);
                      break;
                    case 3:
                    case 4:
                      this.viewDate = this.moveYear(this.viewDate, i)
                  }
                  this.fill(), this.element.trigger({
                    type: r[0].className + ":" + this.convertViewModeText(this.viewMode),
                    date: this.viewDate,
                    startDate: this.startDate,
                    endDate: this.endDate
                  });
                  break;
                case "today":
                  var s = new Date;
                  s = n(s.getFullYear(), s.getMonth(), s.getDate(), s.getHours(), s.getMinutes(), s.getSeconds(), 0), s < this.startDate ? s = this.startDate : s > this.endDate && (s = this.endDate), this.viewMode = this.startViewMode, this.showMode(0), this._setDate(s), this.fill(), this.autoclose && this.hide()
              }
              break;
            case "span":
              if (!r.is(".disabled")) {
                var o = this.viewDate.getUTCFullYear(),
                  a = this.viewDate.getUTCMonth(),
                  f = this.viewDate.getUTCDate(),
                  l = this.viewDate.getUTCHours(),
                  c = this.viewDate.getUTCMinutes(),
                  h = this.viewDate.getUTCSeconds();
                if (r.is(".month")) this.viewDate.setUTCDate(1), a = r.parent().find("span").index(r), f = this.viewDate.getUTCDate(), this.viewDate.setUTCMonth(a), this.element.trigger({
                  type: "changeMonth",
                  date: this.viewDate
                }), this.viewSelect >= 3 && this._setDate(n(o, a, f, l, c, h, 0));
                else if (r.is(".year")) this.viewDate.setUTCDate(1), o = parseInt(r.text(), 10) || 0, this.viewDate.setUTCFullYear(o), this.element.trigger({
                  type: "changeYear",
                  date: this.viewDate
                }), this.viewSelect >= 4 && this._setDate(n(o, a, f, l, c, h, 0));
                else if (r.is(".hour")) {
                  l = parseInt(r.text(), 10) || 0;
                  if (r.hasClass("hour_am") || r.hasClass("hour_pm")) l == 12 && r.hasClass("hour_am") ? l = 0 : l != 12 && r.hasClass("hour_pm") && (l += 12);
                  this.viewDate.setUTCHours(l), this.element.trigger({
                    type: "changeHour",
                    date: this.viewDate
                  }), this.viewSelect >= 1 && this._setDate(n(o, a, f, l, c, h, 0))
                } else r.is(".minute") && (c = parseInt(r.text().substr(r.text().indexOf(":") + 1), 10) || 0, this.viewDate.setUTCMinutes(c), this.element.trigger({
                  type: "changeMinute",
                  date: this.viewDate
                }), this.viewSelect >= 0 && this._setDate(n(o, a, f, l, c, h, 0)));
                if (this.viewMode != 0) {
                  var p = this.viewMode;
                  this.showMode(-1), this.fill(), p == this.viewMode && this.autoclose && this.hide()
                } else this.fill(), this.autoclose && this.hide()
              }
              break;
            case "td":
              if (r.is(".day") && !r.is(".disabled")) {
                var f = parseInt(r.text(), 10) || 1,
                  o = this.viewDate.getUTCFullYear(),
                  a = this.viewDate.getUTCMonth(),
                  l = this.viewDate.getUTCHours(),
                  c = this.viewDate.getUTCMinutes(),
                  h = this.viewDate.getUTCSeconds();
                r.is(".old") ? a === 0 ? (a = 11, o -= 1) : a -= 1 : r.is(".new") && (a == 11 ? (a = 0, o += 1) : a += 1), this.viewDate.setUTCFullYear(o), this.viewDate.setUTCMonth(a, f), this.element.trigger({
                  type: "changeDay",
                  date: this.viewDate
                }), this.viewSelect >= 2 && this._setDate(n(o, a, f, l, c, h, 0))
              }
              var p = this.viewMode;
              this.showMode(-1), this.fill(), p == this.viewMode && this.autoclose && this.hide()
          }
        }
      },
      _setDate: function(e, t) {
        if (!t || t == "date") this.date = e;
        if (!t || t == "view") this.viewDate = e;
        this.fill(), this.setValue();
        var n;
        this.isInput ? n = this.element : this.component && (n = this.element.find("input")), n && (n.change(), this.autoclose && (!t || t == "date")), this.element.trigger({
          type: "changeDate",
          date: this.date
        })
      },
      moveMinute: function(e, t) {
        if (!t) return e;
        var n = new Date(e.valueOf());
        return n.setUTCMinutes(n.getUTCMinutes() + t * this.minuteStep), n
      },
      moveHour: function(e, t) {
        if (!t) return e;
        var n = new Date(e.valueOf());
        return n.setUTCHours(n.getUTCHours() + t), n
      },
      moveDate: function(e, t) {
        if (!t) return e;
        var n = new Date(e.valueOf());
        return n.setUTCDate(n.getUTCDate() + t), n
      },
      moveMonth: function(e, t) {
        if (!t) return e;
        var n = new Date(e.valueOf()),
          r = n.getUTCDate(),
          i = n.getUTCMonth(),
          s = Math.abs(t),
          o, u;
        t = t > 0 ? 1 : -1;
        if (s == 1) {
          u = t == -1 ? function() {
            return n.getUTCMonth() == i
          } : function() {
            return n.getUTCMonth() != o
          }, o = i + t, n.setUTCMonth(o);
          if (o < 0 || o > 11) o = (o + 12) % 12
        } else {
          for (var a = 0; a < s; a++) n = this.moveMonth(n, t);
          o = n.getUTCMonth(), n.setUTCDate(r), u = function() {
            return o != n.getUTCMonth()
          }
        }
        while (u()) n.setUTCDate(--r), n.setUTCMonth(o);
        return n
      },
      moveYear: function(e, t) {
        return this.moveMonth(e, t * 12)
      },
      dateWithinRange: function(e) {
        return e >= this.startDate && e <= this.endDate
      },
      keydown: function(e) {
        if (this.picker.is(":not(:visible)")) {
          e.keyCode == 27 && this.show();
          return
        }
        var t = !1,
          n, r, i, s, o;
        switch (e.keyCode) {
          case 27:
            this.hide(), e.preventDefault();
            break;
          case 37:
          case 39:
            if (!this.keyboardNavigation) break;
            n = e.keyCode == 37 ? -1 : 1, viewMode = this.viewMode, e.ctrlKey ? viewMode += 2 : e.shiftKey && (viewMode += 1), viewMode == 4 ? (s = this.moveYear(this.date, n), o = this.moveYear(this.viewDate, n)) : viewMode == 3 ? (s = this.moveMonth(this.date, n), o = this.moveMonth(this.viewDate, n)) : viewMode == 2 ? (s = this.moveDate(this.date, n), o = this.moveDate(this.viewDate, n)) : viewMode == 1 ? (s = this.moveHour(this.date, n), o = this.moveHour(this.viewDate, n)) : viewMode == 0 && (s = this.moveMinute(this.date, n), o = this.moveMinute(this.viewDate, n)), this.dateWithinRange(s) && (this.date = s, this.viewDate = o, this.setValue(), this.update(), e.preventDefault(), t = !0);
            break;
          case 38:
          case 40:
            if (!this.keyboardNavigation) break;
            n = e.keyCode == 38 ? -1 : 1, viewMode = this.viewMode, e.ctrlKey ? viewMode += 2 : e.shiftKey && (viewMode += 1), viewMode == 4 ? (s = this.moveYear(this.date, n), o = this.moveYear(this.viewDate, n)) : viewMode == 3 ? (s = this.moveMonth(this.date, n), o = this.moveMonth(this.viewDate, n)) : viewMode == 2 ? (s = this.moveDate(this.date, n * 7), o = this.moveDate(this.viewDate, n * 7)) : viewMode == 1 ? this.showMeridian ? (s = this.moveHour(this.date, n * 6), o = this.moveHour(this.viewDate, n * 6)) : (s = this.moveHour(this.date, n * 4), o = this.moveHour(this.viewDate, n * 4)) : viewMode == 0 && (s = this.moveMinute(this.date, n * 4), o = this.moveMinute(this.viewDate, n * 4)), this.dateWithinRange(s) && (this.date = s, this.viewDate = o, this.setValue(), this.update(), e.preventDefault(), t = !0);
            break;
          case 13:
            if (this.viewMode != 0) {
              var u = this.viewMode;
              this.showMode(-1), this.fill(), u == this.viewMode && this.autoclose && this.hide()
            } else this.fill(), this.autoclose && this.hide();
            e.preventDefault();
            break;
          case 9:
            this.hide()
        }
        if (t) {
          var a;
          this.isInput ? a = this.element : this.component && (a = this.element.find("input")), a && a.change(), this.element.trigger({
            type: "changeDate",
            date: this.date
          })
        }
      },
      showMode: function(e) {
        if (e) {
          var t = Math.max(0, Math.min(u.modes.length - 1, this.viewMode + e));
          t >= this.minView && t <= this.maxView && (this.element.trigger({
            type: "changeMode",
            date: this.viewDate,
            oldViewMode: this.viewMode,
            newViewMode: t
          }), this.viewMode = t)
        }
        this.picker.find(">div").hide().filter(".datetimepicker-" + u.modes[this.viewMode].clsName).css("display", "block"), this.updateNavArrows()
      },
      reset: function(e) {
        this._setDate(null, "date")
      },
      convertViewModeText: function(e) {
        switch (e) {
          case 4:
            return "decade";
          case 3:
            return "year";
          case 2:
            return "month";
          case 1:
            return "day";
          case 0:
            return "hour"
        }
      }
    };
    var s = e.fn.datetimepicker;
    e.fn.datetimepicker = function(n) {
      var r = Array.apply(null, arguments);
      r.shift();
      var s;
      return this.each(function() {
        var o = e(this),
          u = o.data("datetimepicker"),
          a = typeof n == "object" && n;
        u || o.data("datetimepicker", u = new i(this, e.extend({}, e.fn.datetimepicker.defaults, a)));
        if (typeof n == "string" && typeof u[n] == "function") {
          s = u[n].apply(u, r);
          if (s !== t) return !1
        }
      }), s !== t ? s : this
    }, e.fn.datetimepicker.defaults = {}, e.fn.datetimepicker.Constructor = i;
    var o = e.fn.datetimepicker.dates = {
        en: {
          days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
          months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          meridiem: ["am", "pm"],
          suffix: ["st", "nd", "rd", "th"],
          today: "Today"
        }
      },
      u = {
        modes: [{
          clsName: "minutes",
          navFnc: "Hours",
          navStep: 1
        }, {
          clsName: "hours",
          navFnc: "Date",
          navStep: 1
        }, {
          clsName: "days",
          navFnc: "Month",
          navStep: 1
        }, {
          clsName: "months",
          navFnc: "FullYear",
          navStep: 1
        }, {
          clsName: "years",
          navFnc: "FullYear",
          navStep: 10
        }],
        isLeapYear: function(e) {
          return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
        },
        getDaysInMonth: function(e, t) {
          return [31, u.isLeapYear(e) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t]
        },
        getDefaultFormat: function(e, t) {
          if (e == "standard") return t == "input" ? "yyyy-mm-dd hh:ii" : "yyyy-mm-dd hh:ii:ss";
          if (e == "php") return t == "input" ? "Y-m-d H:i" : "Y-m-d H:i:s";
          throw new Error("Invalid format type.")
        },
        validParts: function(e) {
          if (e == "standard") return /hh?|HH?|p|P|ii?|ss?|dd?|DD?|mm?|MM?|yy(?:yy)?/g;
          if (e == "php") return /[dDjlNwzFmMnStyYaABgGhHis]/g;
          throw new Error("Invalid format type.")
        },
        nonpunctuation: /[^ -\/:-@\[-`{-~\t\n\rTZ]+/g,
        parseFormat: function(e, t) {
          var n = e.replace(this.validParts(t), "\0").split("\0"),
            r = e.match(this.validParts(t));
          if (!n || !n.length || !r || r.length == 0) throw new Error("Invalid date format.");
          return {
            separators: n,
            parts: r
          }
        },
        parseDate: function(t, r, s, u) {
          if (t instanceof Date) {
            var a = new Date(t.valueOf() - t.getTimezoneOffset() * 6e4);
            return a.setMilliseconds(0), a
          }
          /^\d{4}\-\d{1,2}\-\d{1,2}$/.test(t) && (r = this.parseFormat("yyyy-mm-dd", u)), /^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}$/.test(t) && (r = this.parseFormat("yyyy-mm-dd hh:ii", u)), /^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}\:\d{1,2}[Z]{0,1}$/.test(t) && (r = this.parseFormat("yyyy-mm-dd hh:ii:ss", u));
          if (/^[-+]\d+[dmwy]([\s,]+[-+]\d+[dmwy])*$/.test(t)) {
            var f = /([-+]\d+)([dmwy])/,
              l = t.match(/([-+]\d+)([dmwy])/g),
              c, h;
            t = new Date;
            for (var p = 0; p < l.length; p++) {
              c = f.exec(l[p]), h = parseInt(c[1]);
              switch (c[2]) {
                case "d":
                  t.setUTCDate(t.getUTCDate() + h);
                  break;
                case "m":
                  t = i.prototype.moveMonth.call(i.prototype, t, h);
                  break;
                case "w":
                  t.setUTCDate(t.getUTCDate() + h * 7);
                  break;
                case "y":
                  t = i.prototype.moveYear.call(i.prototype, t, h)
              }
            }
            return n(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), t.getUTCHours(), t.getUTCMinutes(), t.getUTCSeconds(), 0)
          }
          var l = t && t.toString().match(this.nonpunctuation) || [],
            t = new Date(0, 0, 0, 0, 0, 0, 0),
            d = {},
            v = ["hh", "h", "ii", "i", "ss", "s", "yyyy", "yy", "M", "MM", "m", "mm", "D", "DD", "d", "dd", "H", "HH", "p", "P"],
            m = {
              hh: function(e, t) {
                return e.setUTCHours(t)
              },
              h: function(e, t) {
                return e.setUTCHours(t)
              },
              HH: function(e, t) {
                return e.setUTCHours(t == 12 ? 0 : t)
              },
              H: function(e, t) {
                return e.setUTCHours(t == 12 ? 0 : t)
              },
              ii: function(e, t) {
                return e.setUTCMinutes(t)
              },
              i: function(e, t) {
                return e.setUTCMinutes(t)
              },
              ss: function(e, t) {
                return e.setUTCSeconds(t)
              },
              s: function(e, t) {
                return e.setUTCSeconds(t)
              },
              yyyy: function(e, t) {
                return e.setUTCFullYear(t)
              },
              yy: function(e, t) {
                return e.setUTCFullYear(2e3 + t)
              },
              m: function(e, t) {
                t -= 1;
                while (t < 0) t += 12;
                t %= 12, e.setUTCMonth(t);
                while (e.getUTCMonth() != t) {
                  if (isNaN(e.getUTCMonth())) return e;
                  e.setUTCDate(e.getUTCDate() - 1)
                }
                return e
              },
              d: function(e, t) {
                return e.setUTCDate(t)
              },
              p: function(e, t) {
                return e.setUTCHours(t == 1 ? e.getUTCHours() + 12 : e.getUTCHours())
              }
            },
            g, y, c;
          m.M = m.MM = m.mm = m.m, m.dd = m.d, m.P = m.p, t = n(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds());
          if (l.length == r.parts.length) {
            for (var p = 0, b = r.parts.length; p < b; p++) {
              g = parseInt(l[p], 10), c = r.parts[p];
              if (isNaN(g)) switch (c) {
                case "MM":
                  y = e(o[s].months).filter(function() {
                    var e = this.slice(0, l[p].length),
                      t = l[p].slice(0, e.length);
                    return e == t
                  }), g = e.inArray(y[0], o[s].months) + 1;
                  break;
                case "M":
                  y = e(o[s].monthsShort).filter(function() {
                    var e = this.slice(0, l[p].length),
                      t = l[p].slice(0, e.length);
                    return e.toLowerCase() == t.toLowerCase()
                  }), g = e.inArray(y[0], o[s].monthsShort) + 1;
                  break;
                case "p":
                case "P":
                  g = e.inArray(l[p].toLowerCase(), o[s].meridiem)
              }
              d[c] = g
            }
            for (var p = 0, w; p < v.length; p++) w = v[p], w in d && !isNaN(d[w]) && m[w](t, d[w])
          }
          return t
        },
        formatDate: function(t, n, r, i) {
          if (t == null) return "";
          var s;
          if (i == "standard") s = {
            yy: t.getUTCFullYear().toString().substring(2),
            yyyy: t.getUTCFullYear(),
            m: t.getUTCMonth() + 1,
            M: o[r].monthsShort[t.getUTCMonth()],
            MM: o[r].months[t.getUTCMonth()],
            d: t.getUTCDate(),
            D: o[r].daysShort[t.getUTCDay()],
            DD: o[r].days[t.getUTCDay()],
            p: o[r].meridiem.length == 2 ? o[r].meridiem[t.getUTCHours() < 12 ? 0 : 1] : "",
            h: t.getUTCHours(),
            i: t.getUTCMinutes(),
            s: t.getUTCSeconds()
          }, o[r].meridiem.length == 2 ? s.H = s.h % 12 == 0 ? 12 : s.h % 12 : s.H = s.h, s.HH = (s.H < 10 ? "0" : "") + s.H, s.P = s.p.toUpperCase(), s.hh = (s.h < 10 ? "0" : "") + s.h, s.ii = (s.i < 10 ? "0" : "") + s.i, s.ss = (s.s < 10 ? "0" : "") + s.s, s.dd = (s.d < 10 ? "0" : "") + s.d, s.mm = (s.m < 10 ? "0" : "") + s.m;
          else {
            if (i != "php") throw new Error("Invalid format type.");
            s = {
              y: t.getUTCFullYear().toString().substring(2),
              Y: t.getUTCFullYear(),
              F: o[r].months[t.getUTCMonth()],
              M: o[r].monthsShort[t.getUTCMonth()],
              n: t.getUTCMonth() + 1,
              t: u.getDaysInMonth(t.getUTCFullYear(), t.getUTCMonth()),
              j: t.getUTCDate(),
              l: o[r].days[t.getUTCDay()],
              D: o[r].daysShort[t.getUTCDay()],
              w: t.getUTCDay(),
              N: t.getUTCDay() == 0 ? 7 : t.getUTCDay(),
              S: t.getUTCDate() % 10 <= o[r].suffix.length ? o[r].suffix[t.getUTCDate() % 10 - 1] : "",
              a: o[r].meridiem.length == 2 ? o[r].meridiem[t.getUTCHours() < 12 ? 0 : 1] : "",
              g: t.getUTCHours() % 12 == 0 ? 12 : t.getUTCHours() % 12,
              G: t.getUTCHours(),
              i: t.getUTCMinutes(),
              s: t.getUTCSeconds()
            }, s.m = (s.n < 10 ? "0" : "") + s.n, s.d = (s.j < 10 ? "0" : "") + s.j, s.A = s.a.toString().toUpperCase(), s.h = (s.g < 10 ? "0" : "") + s.g, s.H = (s.G < 10 ? "0" : "") + s.G, s.i = (s.i < 10 ? "0" : "") + s.i, s.s = (s.s < 10 ? "0" : "") + s.s
          }
          var t = [],
            a = e.extend([], n.separators);
          for (var f = 0, l = n.parts.length; f < l; f++) a.length && t.push(a.shift()), t.push(s[n.parts[f]]);
          return a.length && t.push(a.shift()), t.join("")
        },
        convertViewMode: function(e) {
          switch (e) {
            case 4:
            case "decade":
              e = 4;
              break;
            case 3:
            case "year":
              e = 3;
              break;
            case 2:
            case "month":
              e = 2;
              break;
            case 1:
            case "day":
              e = 1;
              break;
            case 0:
            case "hour":
              e = 0
          }
          return e
        },
        headTemplate: '<thead><tr><th class="prev"><i class="{leftArrow}"/></th><th colspan="5" class="switch"></th><th class="next"><i class="{rightArrow}"/></th></tr></thead>',
        headTemplateV3: '<thead><tr><th class="prev"><span class="{iconType} {leftArrow}"></span> </th><th colspan="5" class="switch"></th><th class="next"><span class="{iconType} {rightArrow}"></span> </th></tr></thead>',
        contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
        footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr></tfoot>'
      };
    u.template = '<div class="datetimepicker"><div class="datetimepicker-minutes"><table class=" table-condensed">' + u.headTemplate + u.contTemplate + u.footTemplate + "</table>" + "</div>" + '<div class="datetimepicker-hours">' + '<table class=" table-condensed">' + u.headTemplate + u.contTemplate + u.footTemplate + "</table>" + "</div>" + '<div class="datetimepicker-days">' + '<table class=" table-condensed">' + u.headTemplate + "<tbody></tbody>" + u.footTemplate + "</table>" + "</div>" + '<div class="datetimepicker-months">' + '<table class="table-condensed">' + u.headTemplate + u.contTemplate + u.footTemplate + "</table>" + "</div>" + '<div class="datetimepicker-years">' + '<table class="table-condensed">' + u.headTemplate + u.contTemplate + u.footTemplate + "</table>" + "</div>" + "</div>", u.templateV3 = '<div class="datetimepicker"><div class="datetimepicker-minutes"><table class=" table-condensed">' + u.headTemplateV3 + u.contTemplate + u.footTemplate + "</table>" + "</div>" + '<div class="datetimepicker-hours">' + '<table class=" table-condensed">' + u.headTemplateV3 + u.contTemplate + u.footTemplate + "</table>" + "</div>" + '<div class="datetimepicker-days">' + '<table class=" table-condensed">' + u.headTemplateV3 + "<tbody></tbody>" + u.footTemplate + "</table>" + "</div>" + '<div class="datetimepicker-months">' + '<table class="table-condensed">' + u.headTemplateV3 + u.contTemplate + u.footTemplate + "</table>" + "</div>" + '<div class="datetimepicker-years">' + '<table class="table-condensed">' + u.headTemplateV3 + u.contTemplate + u.footTemplate + "</table>" + "</div>" + "</div>", e.fn.datetimepicker.DPGlobal = u, e.fn.datetimepicker.dates["zh-CN"] = {
      days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
      daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      daysMin: ["日", "一", "二", "三", "四", "五", "六", "日"],
      months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
      monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
      today: "今天",
      suffix: [],
      meridiem: ["上午", "下午"]
    }, e.fn.datetimepicker.noConflict = function() {
      return e.fn.datetimepicker = s, this
    }, e(document).on("focus.datetimepicker.data-api click.datetimepicker.data-api", '[data-provide="datetimepicker"]', function(t) {
      var n = e(this);
      if (n.data("datetimepicker")) return;
      t.preventDefault(), n.datetimepicker("show")
    }), e(function() {
      e('[data-provide="datetimepicker-inline"]').datetimepicker()
    })
  }), ! function(e, t) {
    typeof define == "function" && define.amd ? define("validator", ["jquery"], t) : t(e.jQuery)
  }(this, function(e) {
    "use strict";

    function n(n) {
      return this.each(function() {
        var r = e(this),
          i = e.extend({}, t.DEFAULTS, r.data(), typeof n == "object" && n),
          s = r.data("bs.validator");
        if (!s && n == "destroy") return;
        s || r.data("bs.validator", s = new t(this, i)), typeof n == "string" && s[n]()
      })
    }
    var t = function(n, r) {
      this.$element = e(n), this.options = r, r.errors = e.extend({}, t.DEFAULTS.errors, r.errors);
      for (var i in r.custom)
        if (!r.errors[i]) throw new Error("Missing default error message for custom validator: " + i);
      e.extend(t.VALIDATORS, r.custom), this.$element.attr("novalidate", !0), this.toggleSubmit(), this.$element.on("input.bs.validator change.bs.validator focusout.bs.validator", e.proxy(this.validateInput, this)), this.$element.on("submit.bs.validator", e.proxy(this.onSubmit, this)), this.$element.find("[data-match]").each(function() {
        var t = e(this),
          n = t.data("match");
        e(n).on("input.bs.validator", function(e) {
          t.val() && t.trigger("input.bs.validator")
        })
      })
    };
    t.INPUT_SELECTOR = ':input:not([type="submit"], button):enabled:visible', t.DEFAULTS = {
      delay: 500,
      html: !1,
      disable: !0,
      custom: {},
      errors: {
        match: "Does not match",
        minlength: "Not long enough"
      },
      feedback: {
        success: "glyphicon-ok",
        error: "glyphicon-remove"
      }
    }, t.VALIDATORS = {
      "native": function(e) {
        var t = e[0];
        return t.checkValidity ? t.checkValidity() : !0
      },
      match: function(t) {
        var n = t.data("match");
        return !t.val() || t.val() === e(n).val()
      },
      minlength: function(e) {
        var t = e.data("minlength");
        return !e.val() || e.val().length >= t
      }
    }, t.prototype.validateInput = function(t) {
      var n = e(t.target),
        r = n.data("bs.validator.errors"),
        i;
      n.is('[type="radio"]') && (n = this.$element.find('input[name="' + n.attr("name") + '"]')), this.$element.trigger(t = e.Event("validate.bs.validator", {
        relatedTarget: n[0]
      }));
      if (t.isDefaultPrevented()) return;
      var s = this;
      this.runValidators(n).done(function(i) {
        n.data("bs.validator.errors", i), i.length ? s.showErrors(n) : s.clearErrors(n);
        if (!r || i.toString() !== r.toString()) t = i.length ? e.Event("invalid.bs.validator", {
          relatedTarget: n[0],
          detail: i
        }) : e.Event("valid.bs.validator", {
          relatedTarget: n[0],
          detail: r
        }), s.$element.trigger(t);
        s.toggleSubmit(), s.$element.trigger(e.Event("validated.bs.validator", {
          relatedTarget: n[0]
        }))
      })
    }, t.prototype.runValidators = function(n) {
      function o(e) {
        return n.data(e + "-error") || n.data("error") || e == "native" && n[0].validationMessage || s.errors[e]
      }
      var r = [],
        i = e.Deferred(),
        s = this.options;
      return n.data("bs.validator.deferred") && n.data("bs.validator.deferred").reject(), n.data("bs.validator.deferred", i), e.each(t.VALIDATORS, e.proxy(function(e, t) {
        if ((n.data(e) || e == "native") && !t.call(this, n)) {
          var i = o(e);
          !~r.indexOf(i) && r.push(i)
        }
      }, this)), !r.length && n.val() && n.data("remote") ? this.defer(n, function() {
        var t = {};
        t[n.attr("name")] = n.val(), e.get(n.data("remote"), t).fail(function(e, t, n) {
          r.push(o("remote") || n)
        }).always(function() {
          i.resolve(r)
        })
      }) : i.resolve(r), i.promise()
    }, t.prototype.validate = function() {
      var e = this.options.delay;
      return this.options.delay = 0, this.$element.find(t.INPUT_SELECTOR).trigger("input.bs.validator"), this.options.delay = e, this
    }, t.prototype.showErrors = function(t) {
      var n = this.options.html ? "html" : "text";
      this.defer(t, function() {
        var r = t.closest(".form-group"),
          i = r.find(".help-block.with-errors"),
          s = r.find(".form-control-feedback"),
          o = t.data("bs.validator.errors");
        if (!o.length) return;
        o = e("<ul/>").addClass("list-unstyled").append(e.map(o, function(t) {
          return e("<li/>")[n](t)
        })), i.data("bs.validator.originalContent") === undefined && i.data("bs.validator.originalContent", i.html()), i.empty().append(o), r.addClass("has-error"), s.length && s.removeClass(this.options.feedback.success) && s.addClass(this.options.feedback.error) && r.removeClass("has-success")
      })
    }, t.prototype.clearErrors = function(e) {
      var t = e.closest(".form-group"),
        n = t.find(".help-block.with-errors"),
        r = t.find(".form-control-feedback");
      n.html(n.data("bs.validator.originalContent")), t.removeClass("has-error"), r.length && r.removeClass(this.options.feedback.error) && r.addClass(this.options.feedback.success) && t.addClass("has-success")
    }, t.prototype.hasErrors = function() {
      function n() {
        return !!(e(this).data("bs.validator.errors") || []).length
      }
      return !!this.$element.find(t.INPUT_SELECTOR).filter(n).length
    }, t.prototype.isIncomplete = function() {
      function n() {
        return this.type === "checkbox" ? !this.checked : this.type === "radio" ? !e('[name="' + this.name + '"]:checked').length : e.trim(this.value) === ""
      }
      return !!this.$element.find(t.INPUT_SELECTOR).filter("[required]").filter(n).length
    }, t.prototype.onSubmit = function(e) {
      this.validate(), (this.isIncomplete() || this.hasErrors()) && e.preventDefault()
    }, t.prototype.toggleSubmit = function() {
      if (!this.options.disable) return;
      var t = e('button[type="submit"], input[type="submit"]').filter('[form="' + this.$element.attr("id") + '"]').add(this.$element.find('input[type="submit"], button[type="submit"]'));
      t.toggleClass("disabled", this.isIncomplete() || this.hasErrors())
    }, t.prototype.defer = function(t, n) {
      n = e.proxy(n, this);
      if (!this.options.delay) return n();
      window.clearTimeout(t.data("bs.validator.timeout")), t.data("bs.validator.timeout", window.setTimeout(n, this.options.delay))
    }, t.prototype.destroy = function() {
      return this.$element.removeAttr("novalidate").removeData("bs.validator").off(".bs.validator"), this.$element.find(t.INPUT_SELECTOR).off(".bs.validator").removeData(["bs.validator.errors", "bs.validator.deferred"]).each(function() {
        var t = e(this),
          n = t.data("bs.validator.timeout");
        window.clearTimeout(n) && t.removeData("bs.validator.timeout")
      }), this.$element.find(".help-block.with-errors").each(function() {
        var t = e(this),
          n = t.data("bs.validator.originalContent");
        t.removeData("bs.validator.originalContent").html(n)
      }), this.$element.find('input[type="submit"], button[type="submit"]').removeClass("disabled"), this.$element.find(".has-error").removeClass("has-error"), this
    };
    var r = e.fn.validator;
    e.fn.validator = n, e.fn.validator.Constructor = t, e.fn.validator.noConflict = function() {
      return e.fn.validator = r, this
    }, e(window).on("load", function() {
      e('form[data-toggle="validator"]').each(function() {
        var t = e(this);
        n.call(t, t.data())
      })
    })
  }), define("editorComponent", ["jquery", "avalon", "editor"], function(e, t, n) {
    t.component("ms:editor", {
      $template: "<textarea ms-attr-id='{{ editorId }}' ms-duplex='content' ms-attr-placeholder='placeholder'></textarea>",
      editorId: "editorId",
      content: "",
      placeholder: "",
      $editor: {},
      $ready: function(t, r) {
        r.msRetain = !0, t.$editor = n(e("#" + t.editorId)), t.$watch("content", function(e, n) {
          t.$editor.setValue(e)
        })
      }
    })
  }), require(["jquery", "avalon", "editor", "uploader", "bsAlert", "csrfToken", "datetimePicker", "validator", "editorComponent"], function(e, t, n, r, i, s) {
    e("#add-contest-form").validator().on("submit", function(n) {
      if (!n.isDefaultPrevented()) {
        n.preventDefault();
        var r = {
            title: o.title,
            description: t.vmodels.contestDescriptionEditor.content,
            contest_type: 0,
            real_time_rank: o.realTimeRank,
            start_time: o.startTime,
            end_time: o.endTime,
            visible: !1
          },
          s = [];
        if (!o.isGlobal) {
          for (var u = 0; u < o.allGroups.length; u++) o.allGroups[u].isSelected && s.push(o.allGroups[u].id);
          o.password && (r.password = o.password, r.contest_type = 3), r.groups = s
        } else o.password ? (r.password = o.password, r.contest_type = 2) : r.contest_type = 1;
        if (!o.isGlobal && !s.length) return i("你没有选择参赛用户!"), !1;
        if (r.description.trim() == "") return i("作业描述不能为空!"), !1;
        e.ajax({
          url: "/api/admin/contest/",
          dataType: "json",
          contentType: "application/json;charset=UTF-8",
          data: JSON.stringify(r),
          method: "post",
          success: function(e) {
            e.code ? i(e.data) : (i("添加成功！接下来下需要为作业添加问题(注意作业当前状态为:隐藏)"), location.hash = "#contest/contest_list")
          }
        })
      }
      return !1
    });
    if (t.vmodels.add_contest) {
      var o = t.vmodels.add_contest;
      o.title = "", o.startTime = "", o.endTime = "", o.password = "", o.isGlobal = !0, o.allGroups = [], o.showGlobalViewRadio = !0, o.realTimeRank = !0, t.vmodels.contestDescriptionEditor.content = ""
    } else var o = t.define({
      $id: "add_contest",
      title: "",
      startTime: "",
      endTime: "",
      password: "",
      isGlobal: !0,
      allGroups: [],
      showGlobalViewRadio: !0,
      realTimeRank: !0,
      contestDescriptionEditor: {
        editorId: "contest-description-editor",
        placeholder: "作业介绍内容"
      }
    });
    e.ajax({
      url: "/api/user/",
      method: "get",
      dataType: "json",
      success: function(t) {
        if (!t.code) {
          var n = t.data.admin_type;
          t.data.admin_type == 1 && (o.isGlobal = !1, o.showGlobalViewRadio = !1)
        }
        e.ajax({
          url: "/api/admin/group/",
          method: "get",
          dataType: "json",
          success: function(e) {
            if (!e.code) {
              if (!e.data.length) {
                n != 2 && i("您的用户权限只能创建小组内作业，但是您还没有创建过小组");
                return
              }
              o.allGroups = [];
              for (var t = 0; t < e.data.length; t++) {
                var r = e.data[t];
                r.isSelected = !1, o.allGroups.push(r)
              }
            } else i(e.data)
          }
        })
      }
    }), t.scan(), e("#contest_start_time").datetimepicker({
      format: "yyyy-mm-dd hh:ii",
      minuteStep: 5,
      weekStart: 1,
      language: "zh-CN"
    }), e("#contest_end_time").datetimepicker({
      format: "yyyy-mm-dd hh:ii",
      minuteStep: 5,
      weekStart: 1,
      language: "zh-CN"
    })
  }), define("addContest_13_pack", function() {});