// Mixpanel - this is asynchronous, so you can be joyous.
function detectIE(a, b) {
    return result = !1, document.write('<SCRIPT LANGUAGE=VBScript>\n on error resume next \n result = IsObject(CreateObject("' + a + '"))</SCRIPT>\n'), result ? b + "," : ""
}
function detectNS(a, b) {
    return n = "", nse.indexOf(a) != -1 && navigator.mimeTypes[a].enabledPlugin != null && (n = b + ","), n
}
(function (a, b) {
    if (!b.__SV) {
        var c, d, e, f;
        window.mixpanel = b, c = a.createElement("script"), c.type = "text/javascript", c.async = !0, c.src = ("https:" === a.location.protocol ? "https:" : "http:") + "//cdn.mxpnl.com/libs/mixpanel-2.2.min.js", d = a.getElementsByTagName("script")[0], d.parentNode.insertBefore(c, d), b._i = [], b.init = function (a, c, d) {
            function h(a, b) {
                var c = b.split(".");
                2 == c.length && (a = a[c[0]], b = c[1]), a[b] = function () {
                    a.push([b].concat(Array.prototype.slice.call(arguments, 0)))
                }
            }

            var j = b;
            "undefined" != typeof d ? j = b[d] = [] : d = "mixpanel", j.people = j.people || [], j.toString = function (a) {
                var b = "mixpanel";
                return"mixpanel" !== d && (b += "." + d), a || (b += " (stub)"), b
            }, j.people.toString = function () {
                return j.toString(1) + ".people (stub)"
            }, e = "disable track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.track_charge people.clear_charges people.delete_user".split(" ");
            for (f = 0; f < e.length; f++)h(j, e[f]);
            b._i.push([a, c, d])
        }, b.__SV = 1.2
    }
})(document, window.mixpanel || []), function (a, b) {
    function h(a) {
        var b = g[a] = {}, c, d;
        a = a.split(/\s+/);
        for (c = 0, d = a.length; c < d; c++)b[a[c]] = !0;
        return b
    }

    function l(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(k, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNumeric(d) ? +d : j.test(d) ? f.parseJSON(d) : d
                } catch (g) {
                }
                f.data(a, c, d)
            } else d = b
        }
        return d
    }

    function m(a) {
        for (var b in a) {
            if (b === "data" && f.isEmptyObject(a[b]))continue;
            if (b !== "toJSON")return!1
        }
        return!0
    }

    function n(a, b, c) {
        var d = b + "defer", e = b + "queue", g = b + "mark", h = f._data(a, d);
        h && (c === "queue" || !f._data(a, e)) && (c === "mark" || !f._data(a, g)) && setTimeout(function () {
            !f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0), h.fire())
        }, 0)
    }

    function J() {
        return!1
    }

    function K() {
        return!0
    }

    function S(a) {
        return!a || !a.parentNode || a.parentNode.nodeType === 11
    }

    function T(a, b, c) {
        b = b || 0;
        if (f.isFunction(b))return f.grep(a, function (a, d) {
            var e = !!b.call(a, d, a);
            return e === c
        });
        if (b.nodeType)return f.grep(a, function (a, d) {
            return a === b === c
        });
        if (typeof b == "string") {
            var d = f.grep(a, function (a) {
                return a.nodeType === 1
            });
            if (O.test(b))return f.filter(b, d, !c);
            b = f.filter(b, d)
        }
        return f.grep(a, function (a, d) {
            return f.inArray(a, b) >= 0 === c
        })
    }

    function U(a) {
        var b = V.split("|"), c = a.createDocumentFragment();
        if (c.createElement)while (b.length)c.createElement(b.pop());
        return c
    }

    function ib(a, b) {
        return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function jb(a, b) {
        if (b.nodeType !== 1 || !f.hasData(a))return;
        var c, d, e, g = f._data(a), h = f._data(b, g), i = g.events;
        if (i) {
            delete h.handle, h.events = {};
            for (c in i)for (d = 0, e = i[c].length; d < e; d++)f.event.add(b, c, i[c][d])
        }
        h.data && (h.data = f.extend({}, h.data))
    }

    function kb(a, b) {
        var c;
        if (b.nodeType !== 1)return;
        b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), c === "object" ? b.outerHTML = a.outerHTML : c !== "input" || a.type !== "checkbox" && a.type !== "radio" ? c === "option" ? b.selected = a.defaultSelected : c === "input" || c === "textarea" ? b.defaultValue = a.defaultValue : c === "script" && b.text !== a.text && (b.text = a.text) : (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value)), b.removeAttribute(f.expando), b.removeAttribute("_submit_attached"), b.removeAttribute("_change_attached")
    }

    function lb(a) {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
    }

    function mb(a) {
        if (a.type === "checkbox" || a.type === "radio")a.defaultChecked = a.checked
    }

    function nb(a) {
        var b = (a.nodeName || "").toLowerCase();
        b === "input" ? mb(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && f.grep(a.getElementsByTagName("input"), mb)
    }

    function ob(a) {
        var b = c.createElement("div");
        return hb.appendChild(b), b.innerHTML = a.outerHTML, b.firstChild
    }

    function Bb(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight, e = b === "width" ? 1 : 0, g = 4;
        if (d > 0) {
            if (c !== "border")for (; e < g; e += 2)c || (d -= parseFloat(f.css(a, "padding" + xb[e])) || 0), c === "margin" ? d += parseFloat(f.css(a, c + xb[e])) || 0 : d -= parseFloat(f.css(a, "border" + xb[e] + "Width")) || 0;
            return d + "px"
        }
        d = yb(a, b);
        if (d < 0 || d == null)d = a.style[b];
        if (tb.test(d))return d;
        d = parseFloat(d) || 0;
        if (c)for (; e < g; e += 2)d += parseFloat(f.css(a, "padding" + xb[e])) || 0, c !== "padding" && (d += parseFloat(f.css(a, "border" + xb[e] + "Width")) || 0), c === "margin" && (d += parseFloat(f.css(a, c + xb[e])) || 0);
        return d + "px"
    }

    function Yb(a) {
        return function (b, c) {
            typeof b != "string" && (c = b, b = "*");
            if (f.isFunction(c)) {
                var d = b.toLowerCase().split(Ob), e = 0, g = d.length, h, i, j;
                for (; e < g; e++)h = d[e], j = /^\+/.test(h), j && (h = h.substr(1) || "*"), i = a[h] = a[h] || [], i[j ? "unshift" : "push"](c)
            }
        }
    }

    function Zb(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        var h = a[f], i = 0, j = h ? h.length : 0, k = a === Sb, l;
        for (; i < j && (k || !l); i++)l = h[i](c, d, e), typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l), l = Zb(a, c, d, e, l, g)));
        return(k || !l) && !g["*"] && (l = Zb(a, c, d, e, "*", g)), l
    }

    function $b(a, c) {
        var d, e, g = f.ajaxSettings.flatOptions || {};
        for (d in c)c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d]);
        e && f.extend(!0, a, e)
    }

    function _b(a, b, c, d) {
        if (f.isArray(b))f.each(b, function (b, e) {
            c || Db.test(a) ? d(a, e) : _b(a + "[" + (typeof e == "object" ? b : "") + "]", e, c, d)
        }); else if (!c && f.type(b) === "object")for (var e in b)_b(a + "[" + e + "]", b[e], c, d); else d(a, b)
    }

    function ac(a, c, d) {
        var e = a.contents, f = a.dataTypes, g = a.responseFields, h, i, j, k;
        for (i in g)i in d && (c[g[i]] = d[i]);
        while (f[0] === "*")f.shift(), h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
        if (h)for (i in e)if (e[i] && e[i].test(h)) {
            f.unshift(i);
            break
        }
        if (f[0]in d)j = f[0]; else {
            for (i in d) {
                if (!f[0] || a.converters[i + " " + f[0]]) {
                    j = i;
                    break
                }
                k || (k = i)
            }
            j = j || k
        }
        if (j)return j !== f[0] && f.unshift(j), d[j]
    }

    function bc(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d = a.dataTypes, e = {}, g, h, i = d.length, j, k = d[0], l, m, n, o, p;
        for (g = 1; g < i; g++) {
            if (g === 1)for (h in a.converters)typeof h == "string" && (e[h.toLowerCase()] = a.converters[h]);
            l = k, k = d[g];
            if (k === "*")k = l; else if (l !== "*" && l !== k) {
                m = l + " " + k, n = e[m] || e["* " + k];
                if (!n) {
                    p = b;
                    for (o in e) {
                        j = o.split(" ");
                        if (j[0] === l || j[0] === "*") {
                            p = e[j[1] + " " + k];
                            if (p) {
                                o = e[o], o === !0 ? n = p : p === !0 && (n = o);
                                break
                            }
                        }
                    }
                }
                !n && !p && f.error("No conversion from " + m.replace(" ", " to ")), n !== !0 && (c = n ? n(c) : p(o(c)))
            }
        }
        return c
    }

    function hc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {
        }
    }

    function ic() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {
        }
    }

    function rc() {
        return setTimeout(sc, 0), qc = f.now()
    }

    function sc() {
        qc = b
    }

    function tc(a, b) {
        var c = {};
        return f.each(pc.concat.apply([], pc.slice(0, b)), function () {
            c[this] = a
        }), c
    }

    function uc(a) {
        if (!jc[a]) {
            var b = c.body, d = f("<" + a + ">").appendTo(b), e = d.css("display");
            d.remove();
            if (e === "none" || e === "") {
                kc || (kc = c.createElement("iframe"), kc.frameBorder = kc.width = kc.height = 0), b.appendChild(kc);
                if (!lc || !kc.createElement)lc = (kc.contentWindow || kc.contentDocument).document, lc.write((f.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), lc.close();
                d = lc.createElement(a), lc.body.appendChild(d), e = f.css(d, "display"), b.removeChild(kc)
            }
            jc[a] = e
        }
        return jc[a]
    }

    function yc(a) {
        return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }

    var c = a.document, d = a.navigator, e = a.location, f = function () {
        function J() {
            if (e.isReady)return;
            try {
                c.documentElement.doScroll("left")
            } catch (a) {
                setTimeout(J, 1);
                return
            }
            e.ready()
        }

        var e = function (a, b) {
            return new e.fn.init(a, b, h)
        }, f = a.jQuery, g = a.$, h, i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, j = /\S/, k = /^\s+/, l = /\s+$/, m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, n = /^[\],:{}\s]*$/, o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, q = /(?:^|:|,)(?:\s*\[)+/g, r = /(webkit)[ \/]([\w.]+)/, s = /(opera)(?:.*version)?[ \/]([\w.]+)/, t = /(msie) ([\w.]+)/, u = /(mozilla)(?:.*? rv:([\w.]+))?/, v = /-([a-z]|[0-9])/ig, w = /^-ms-/, x = function (a, b) {
            return(b + "").toUpperCase()
        }, y = d.userAgent, z, A, B, C = Object.prototype.toString, D = Object.prototype.hasOwnProperty, E = Array.prototype.push, F = Array.prototype.slice, G = String.prototype.trim, H = Array.prototype.indexOf, I = {};
        return e.fn = e.prototype = {constructor: e, init: function (a, d, f) {
            var g, h, j, k;
            if (!a)return this;
            if (a.nodeType)return this.context = this[0] = a, this.length = 1, this;
            if (a === "body" && !d && c.body)return this.context = c, this[0] = c.body, this.selector = a, this.length = 1, this;
            if (typeof a == "string") {
                a.charAt(0) === "<" && a.charAt(a.length - 1) === ">" && a.length >= 3 ? g = [null, a, null] : g = i.exec(a);
                if (g && (g[1] || !d)) {
                    if (g[1])return d = d instanceof e ? d[0] : d, k = d ? d.ownerDocument || d : c, j = m.exec(a), j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])], e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]), a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes), e.merge(this, a);
                    h = c.getElementById(g[2]);
                    if (h && h.parentNode) {
                        if (h.id !== g[2])return f.find(a);
                        this.length = 1, this[0] = h
                    }
                    return this.context = c, this.selector = a, this
                }
                return!d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
            }
            return e.isFunction(a) ? f.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), e.makeArray(a, this))
        }, selector: "", jquery: "1.7.2", length: 0, size: function () {
            return this.length
        }, toArray: function () {
            return F.call(this, 0)
        }, get: function (a) {
            return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
        }, pushStack: function (a, b, c) {
            var d = this.constructor();
            return e.isArray(a) ? E.apply(d, a) : e.merge(d, a), d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"), d
        }, each: function (a, b) {
            return e.each(this, a, b)
        }, ready: function (a) {
            return e.bindReady(), A.add(a), this
        }, eq: function (a) {
            return a = +a, a === -1 ? this.slice(a) : this.slice(a, a + 1)
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, slice: function () {
            return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","))
        }, map: function (a) {
            return this.pushStack(e.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: E, sort: [].sort, splice: [].splice}, e.fn.init.prototype = e.fn, e.extend = e.fn.extend = function () {
            var a, c, d, f, g, h, i = arguments[0] || {}, j = 1, k = arguments.length, l = !1;
            typeof i == "boolean" && (l = i, i = arguments[1] || {}, j = 2), typeof i != "object" && !e.isFunction(i) && (i = {}), k === j && (i = this, --j);
            for (; j < k; j++)if ((a = arguments[j]) != null)for (c in a) {
                d = i[c], f = a[c];
                if (i === f)continue;
                l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {}, i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f)
            }
            return i
        }, e.extend({noConflict: function (b) {
            return a.$ === e && (a.$ = g), b && a.jQuery === e && (a.jQuery = f), e
        }, isReady: !1, readyWait: 1, holdReady: function (a) {
            a ? e.readyWait++ : e.ready(!0)
        }, ready: function (a) {
            if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
                if (!c.body)return setTimeout(e.ready, 1);
                e.isReady = !0;
                if (a !== !0 && --e.readyWait > 0)return;
                A.fireWith(c, [e]), e.fn.trigger && e(c).trigger("ready").off("ready")
            }
        }, bindReady: function () {
            if (A)return;
            A = e.Callbacks("once memory");
            if (c.readyState === "complete")return setTimeout(e.ready, 1);
            if (c.addEventListener)c.addEventListener("DOMContentLoaded", B, !1), a.addEventListener("load", e.ready, !1); else if (c.attachEvent) {
                c.attachEvent("onreadystatechange", B), a.attachEvent("onload", e.ready);
                var b = !1;
                try {
                    b = a.frameElement == null
                } catch (d) {
                }
                c.documentElement.doScroll && b && J()
            }
        }, isFunction: function (a) {
            return e.type(a) === "function"
        }, isArray: Array.isArray || function (a) {
            return e.type(a) === "array"
        }, isWindow: function (a) {
            return a != null && a == a.window
        }, isNumeric: function (a) {
            return!isNaN(parseFloat(a)) && isFinite(a)
        }, type: function (a) {
            return a == null ? String(a) : I[C.call(a)] || "object"
        }, isPlainObject: function (a) {
            if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a))return!1;
            try {
                if (a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf"))return!1
            } catch (c) {
                return!1
            }
            var d;
            for (d in a);
            return d === b || D.call(a, d)
        }, isEmptyObject: function (a) {
            for (var b in a)return!1;
            return!0
        }, error: function (a) {
            throw new Error(a)
        }, parseJSON: function (b) {
            if (typeof b != "string" || !b)return null;
            b = e.trim(b);
            if (a.JSON && a.JSON.parse)return a.JSON.parse(b);
            if (n.test(b.replace(o, "@").replace(p, "]").replace(q, "")))return(new Function("return " + b))();
            e.error("Invalid JSON: " + b)
        }, parseXML: function (c) {
            if (typeof c != "string" || !c)return null;
            var d, f;
            try {
                a.DOMParser ? (f = new DOMParser, d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
            } catch (g) {
                d = b
            }
            return(!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c), d
        }, noop: function () {
        }, globalEval: function (b) {
            b && j.test(b) && (a.execScript || function (b) {
                a.eval.call(a, b)
            })(b)
        }, camelCase: function (a) {
            return a.replace(w, "ms-").replace(v, x)
        }, nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
        }, each: function (a, c, d) {
            var f, g = 0, h = a.length, i = h === b || e.isFunction(a);
            if (d) {
                if (i) {
                    for (f in a)if (c.apply(a[f], d) === !1)break
                } else for (; g < h;)if (c.apply(a[g++], d) === !1)break
            } else if (i) {
                for (f in a)if (c.call(a[f], f, a[f]) === !1)break
            } else for (; g < h;)if (c.call(a[g], g, a[g++]) === !1)break;
            return a
        }, trim: G ? function (a) {
            return a == null ? "" : G.call(a)
        } : function (a) {
            return a == null ? "" : a.toString().replace(k, "").replace(l, "")
        }, makeArray: function (a, b) {
            var c = b || [];
            if (a != null) {
                var d = e.type(a);
                a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? E.call(c, a) : e.merge(c, a)
            }
            return c
        }, inArray: function (a, b, c) {
            var d;
            if (b) {
                if (H)return H.call(b, a, c);
                d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                for (; c < d; c++)if (c in b && b[c] === a)return c
            }
            return-1
        }, merge: function (a, c) {
            var d = a.length, e = 0;
            if (typeof c.length == "number")for (var f = c.length; e < f; e++)a[d++] = c[e]; else while (c[e] !== b)a[d++] = c[e++];
            return a.length = d, a
        }, grep: function (a, b, c) {
            var d = [], e;
            c = !!c;
            for (var f = 0, g = a.length; f < g; f++)e = !!b(a[f], f), c !== e && d.push(a[f]);
            return d
        }, map: function (a, c, d) {
            var f, g, h = [], i = 0, j = a.length, k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
            if (k)for (; i < j; i++)f = c(a[i], i, d), f != null && (h[h.length] = f); else for (g in a)f = c(a[g], g, d), f != null && (h[h.length] = f);
            return h.concat.apply([], h)
        }, guid: 1, proxy: function (a, c) {
            if (typeof c == "string") {
                var d = a[c];
                c = a, a = d
            }
            if (!e.isFunction(a))return b;
            var f = F.call(arguments, 2), g = function () {
                return a.apply(c, f.concat(F.call(arguments)))
            };
            return g.guid = a.guid = a.guid || g.guid || e.guid++, g
        }, access: function (a, c, d, f, g, h, i) {
            var j, k = d == null, l = 0, m = a.length;
            if (d && typeof d == "object") {
                for (l in d)e.access(a, c, l, d[l], 1, h, f);
                g = 1
            } else if (f !== b) {
                j = i === b && e.isFunction(f), k && (j ? (j = c, c = function (a, b, c) {
                    return j.call(e(a), c)
                }) : (c.call(a, f), c = null));
                if (c)for (; l < m; l++)c(a[l], d, j ? f.call(a[l], l, c(a[l], d)) : f, i);
                g = 1
            }
            return g ? a : k ? c.call(a) : m ? c(a[0], d) : h
        }, now: function () {
            return(new Date).getTime()
        }, uaMatch: function (a) {
            a = a.toLowerCase();
            var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf("compatible") < 0 && u.exec(a) || [];
            return{browser: b[1] || "", version: b[2] || "0"}
        }, sub: function () {
            function a(b, c) {
                return new a.fn.init(b, c)
            }

            e.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function (d, f) {
                return f && f instanceof e && !(f instanceof a) && (f = a(f)), e.fn.init.call(this, d, f, b)
            }, a.fn.init.prototype = a.fn;
            var b = a(c);
            return a
        }, browser: {}}), e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
            I["[object " + b + "]"] = b.toLowerCase()
        }), z = e.uaMatch(y), z.browser && (e.browser[z.browser] = !0, e.browser.version = z.version), e.browser.webkit && (e.browser.safari = !0), j.test("聽") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/), h = e(c), c.addEventListener ? B = function () {
            c.removeEventListener("DOMContentLoaded", B, !1), e.ready()
        } : c.attachEvent && (B = function () {
            c.readyState === "complete" && (c.detachEvent("onreadystatechange", B), e.ready())
        }), e
    }(), g = {};
    f.Callbacks = function (a) {
        a = a ? g[a] || h(a) : {};
        var c = [], d = [], e, i, j, k, l, m, n = function (b) {
            var d, e, g, h, i;
            for (d = 0, e = b.length; d < e; d++)g = b[d], h = f.type(g), h === "array" ? n(g) : h === "function" && (!a.unique || !p.has(g)) && c.push(g)
        }, o = function (b, f) {
            f = f || [], e = !a.memory || [b, f], i = !0, j = !0, m = k || 0, k = 0, l = c.length;
            for (; c && m < l; m++)if (c[m].apply(b, f) === !1 && a.stopOnFalse) {
                e = !0;
                break
            }
            j = !1, c && (a.once ? e === !0 ? p.disable() : c = [] : d && d.length && (e = d.shift(), p.fireWith(e[0], e[1])))
        }, p = {add: function () {
            if (c) {
                var a = c.length;
                n(arguments), j ? l = c.length : e && e !== !0 && (k = a, o(e[0], e[1]))
            }
            return this
        }, remove: function () {
            if (c) {
                var b = arguments, d = 0, e = b.length;
                for (; d < e; d++)for (var f = 0; f < c.length; f++)if (b[d] === c[f]) {
                    j && f <= l && (l--, f <= m && m--), c.splice(f--, 1);
                    if (a.unique)break
                }
            }
            return this
        }, has: function (a) {
            if (c) {
                var b = 0, d = c.length;
                for (; b < d; b++)if (a === c[b])return!0
            }
            return!1
        }, empty: function () {
            return c = [], this
        }, disable: function () {
            return c = d = e = b, this
        }, disabled: function () {
            return!c
        }, lock: function () {
            return d = b, (!e || e === !0) && p.disable(), this
        }, locked: function () {
            return!d
        }, fireWith: function (b, c) {
            return d && (j ? a.once || d.push([b, c]) : (!a.once || !e) && o(b, c)), this
        }, fire: function () {
            return p.fireWith(this, arguments), this
        }, fired: function () {
            return!!i
        }};
        return p
    };
    var i = [].slice;
    f.extend({Deferred: function (a) {
        var b = f.Callbacks("once memory"), c = f.Callbacks("once memory"), d = f.Callbacks("memory"), e = "pending", g = {resolve: b, reject: c, notify: d}, h = {done: b.add, fail: c.add, progress: d.add, state: function () {
            return e
        }, isResolved: b.fired, isRejected: c.fired, then: function (a, b, c) {
            return i.done(a).fail(b).progress(c), this
        }, always: function () {
            return i.done.apply(i, arguments).fail.apply(i, arguments), this
        }, pipe: function (a, b, c) {
            return f.Deferred(function (d) {
                f.each({done: [a, "resolve"], fail: [b, "reject"], progress: [c, "notify"]}, function (a, b) {
                    var c = b[0], e = b[1], g;
                    f.isFunction(c) ? i[a](function () {
                        g = c.apply(this, arguments), g && f.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[e + "With"](this === i ? d : this, [g])
                    }) : i[a](d[e])
                })
            }).promise()
        }, promise: function (a) {
            if (a == null)a = h; else for (var b in h)a[b] = h[b];
            return a
        }}, i = h.promise({}), j;
        for (j in g)i[j] = g[j].fire, i[j + "With"] = g[j].fireWith;
        return i.done(function () {
            e = "resolved"
        }, c.disable, d.lock).fail(function () {
            e = "rejected"
        }, b.disable, d.lock), a && a.call(i, i), i
    }, when: function (a) {
        function l(a) {
            return function (c) {
                b[a] = arguments.length > 1 ? i.call(arguments, 0) : c, --g || j.resolveWith(j, b)
            }
        }

        function m(a) {
            return function (b) {
                e[a] = arguments.length > 1 ? i.call(arguments, 0) : b, j.notifyWith(k, e)
            }
        }

        var b = i.call(arguments, 0), c = 0, d = b.length, e = new Array(d), g = d, h = d, j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred(), k = j.promise();
        if (d > 1) {
            for (; c < d; c++)b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g;
            g || j.resolveWith(j, b)
        } else j !== a && j.resolveWith(j, d ? [a] : []);
        return k
    }}), f.support = function () {
        var b, d, e, g, h, i, j, k, l, m, n, o, p = c.createElement("div"), q = c.documentElement;
        p.setAttribute("className", "t"), p.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", d = p.getElementsByTagName("*"), e = p.getElementsByTagName("a")[0];
        if (!d || !d.length || !e)return{};
        g = c.createElement("select"), h = g.appendChild(c.createElement("option")), i = p.getElementsByTagName("input")[0], b = {leadingWhitespace: p.firstChild.nodeType === 3, tbody: !p.getElementsByTagName("tbody").length, htmlSerialize: !!p.getElementsByTagName("link").length, style: /top/.test(e.getAttribute("style")), hrefNormalized: e.getAttribute("href") === "/a", opacity: /^0.55/.test(e.style.opacity), cssFloat: !!e.style.cssFloat, checkOn: i.value === "on", optSelected: h.selected, getSetAttribute: p.className !== "t", enctype: !!c.createElement("form").enctype, html5Clone: c.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>", submitBubbles: !0, changeBubbles: !0, focusinBubbles: !1, deleteExpando: !0, noCloneEvent: !0, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableMarginRight: !0, pixelMargin: !0}, f.boxModel = b.boxModel = c.compatMode === "CSS1Compat", i.checked = !0, b.noCloneChecked = i.cloneNode(!0).checked, g.disabled = !0, b.optDisabled = !h.disabled;
        try {
            delete p.test
        } catch (r) {
            b.deleteExpando = !1
        }
        !p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", function () {
            b.noCloneEvent = !1
        }), p.cloneNode(!0).fireEvent("onclick")), i = c.createElement("input"), i.value = "t", i.setAttribute("type", "radio"), b.radioValue = i.value === "t", i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), p.appendChild(i), j = c.createDocumentFragment(), j.appendChild(p.lastChild), b.checkClone = j.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = i.checked, j.removeChild(i), j.appendChild(p);
        if (p.attachEvent)for (n in{submit: 1, change: 1, focusin: 1})m = "on" + n, o = m in p, o || (p.setAttribute(m, "return;"), o = typeof p[m] == "function"), b[n + "Bubbles"] = o;
        return j.removeChild(p), j = g = h = p = i = null, f(function () {
            var d, e, g, h, i, j, l, m, n, q, r, s, t, u = c.getElementsByTagName("body")[0];
            if (!u)return;
            m = 1, t = "padding:0;margin:0;border:", r = "position:absolute;top:0;left:0;width:1px;height:1px;", s = t + "0;visibility:hidden;", n = "style='" + r + t + "5px solid #000;", q = "<div " + n + "display:block;'><div style='" + t + "0;display:block;overflow:hidden;'></div></div>" + "<table " + n + "' cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>", d = c.createElement("div"), d.style.cssText = s + "width:0;height:0;position:static;top:0;margin-top:" + m + "px", u.insertBefore(d, u.firstChild), p = c.createElement("div"), d.appendChild(p), p.innerHTML = "<table><tr><td style='" + t + "0;display:none'></td><td>t</td></tr></table>", k = p.getElementsByTagName("td"), o = k[0].offsetHeight === 0, k[0].style.display = "", k[1].style.display = "none", b.reliableHiddenOffsets = o && k[0].offsetHeight === 0, a.getComputedStyle && (p.innerHTML = "", l = c.createElement("div"), l.style.width = "0", l.style.marginRight = "0", p.style.width = "2px", p.appendChild(l), b.reliableMarginRight = (parseInt((a.getComputedStyle(l, null) || {marginRight: 0}).marginRight, 10) || 0) === 0), typeof p.style.zoom != "undefined" && (p.innerHTML = "", p.style.width = p.style.padding = "1px", p.style.border = 0, p.style.overflow = "hidden", p.style.display = "inline", p.style.zoom = 1, b.inlineBlockNeedsLayout = p.offsetWidth === 3, p.style.display = "block", p.style.overflow = "visible", p.innerHTML = "<div style='width:5px;'></div>", b.shrinkWrapBlocks = p.offsetWidth !== 3), p.style.cssText = r + s, p.innerHTML = q, e = p.firstChild, g = e.firstChild, i = e.nextSibling.firstChild.firstChild, j = {doesNotAddBorder: g.offsetTop !== 5, doesAddBorderForTableAndCells: i.offsetTop === 5}, g.style.position = "fixed", g.style.top = "20px", j.fixedPosition = g.offsetTop === 20 || g.offsetTop === 15, g.style.position = g.style.top = "", e.style.overflow = "hidden", e.style.position = "relative", j.subtractsBorderForOverflowNotVisible = g.offsetTop === -5, j.doesNotIncludeMarginInBodyOffset = u.offsetTop !== m, a.getComputedStyle && (p.style.marginTop = "1%", b.pixelMargin = (a.getComputedStyle(p, null) || {marginTop: 0}).marginTop !== "1%"), typeof d.style.zoom != "undefined" && (d.style.zoom = 1), u.removeChild(d), l = p = d = null, f.extend(b, j)
        }), b
    }();
    var j = /^(?:\{.*\}|\[.*\])$/, k = /([A-Z])/g;
    f.extend({cache: {}, uuid: 0, expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""), noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0}, hasData: function (a) {
        return a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando], !!a && !m(a)
    }, data: function (a, c, d, e) {
        if (!f.acceptData(a))return;
        var g, h, i, j = f.expando, k = typeof c == "string", l = a.nodeType, m = l ? f.cache : a, n = l ? a[j] : a[j] && j, o = c === "events";
        if ((!n || !m[n] || !o && !e && !m[n].data) && k && d === b)return;
        n || (l ? a[j] = n = ++f.uuid : n = j), m[n] || (m[n] = {}, l || (m[n].toJSON = f.noop));
        if (typeof c == "object" || typeof c == "function")e ? m[n] = f.extend(m[n], c) : m[n].data = f.extend(m[n].data, c);
        return g = h = m[n], e || (h.data || (h.data = {}), h = h.data), d !== b && (h[f.camelCase(c)] = d), o && !h[c] ? g.events : (k ? (i = h[c], i == null && (i = h[f.camelCase(c)])) : i = h, i)
    }, removeData: function (a, b, c) {
        if (!f.acceptData(a))return;
        var d, e, g, h = f.expando, i = a.nodeType, j = i ? f.cache : a, k = i ? a[h] : h;
        if (!j[k])return;
        if (b) {
            d = c ? j[k] : j[k].data;
            if (d) {
                f.isArray(b) || (b in d ? b = [b] : (b = f.camelCase(b), b in d ? b = [b] : b = b.split(" ")));
                for (e = 0, g = b.length; e < g; e++)delete d[b[e]];
                if (!(c ? m : f.isEmptyObject)(d))return
            }
        }
        if (!c) {
            delete j[k].data;
            if (!m(j[k]))return
        }
        f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null, i && (f.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null)
    }, _data: function (a, b, c) {
        return f.data(a, b, c, !0)
    }, acceptData: function (a) {
        if (a.nodeName) {
            var b = f.noData[a.nodeName.toLowerCase()];
            if (b)return b !== !0 && a.getAttribute("classid") === b
        }
        return!0
    }}), f.fn.extend({data: function (a, c) {
        var d, e, g, h, i, j = this[0], k = 0, m = null;
        if (a === b) {
            if (this.length) {
                m = f.data(j);
                if (j.nodeType === 1 && !f._data(j, "parsedAttrs")) {
                    g = j.attributes;
                    for (i = g.length; k < i; k++)h = g[k].name, h.indexOf("data-") === 0 && (h = f.camelCase(h.substring(5)), l(j, h, m[h]));
                    f._data(j, "parsedAttrs", !0)
                }
            }
            return m
        }
        return typeof a == "object" ? this.each(function () {
            f.data(this, a)
        }) : (d = a.split(".", 2), d[1] = d[1] ? "." + d[1] : "", e = d[1] + "!", f.access(this, function (c) {
            if (c === b)return m = this.triggerHandler("getData" + e, [d[0]]), m === b && j && (m = f.data(j, a), m = l(j, a, m)), m === b && d[1] ? this.data(d[0]) : m;
            d[1] = c, this.each(function () {
                var b = f(this);
                b.triggerHandler("setData" + e, d), f.data(this, a, c), b.triggerHandler("changeData" + e, d)
            })
        }, null, c, arguments.length > 1, null, !1))
    }, removeData: function (a) {
        return this.each(function () {
            f.removeData(this, a)
        })
    }}), f.extend({_mark: function (a, b) {
        a && (b = (b || "fx") + "mark", f._data(a, b, (f._data(a, b) || 0) + 1))
    }, _unmark: function (a, b, c) {
        a !== !0 && (c = b, b = a, a = !1);
        if (b) {
            c = c || "fx";
            var d = c + "mark", e = a ? 0 : (f._data(b, d) || 1) - 1;
            e ? f._data(b, d, e) : (f.removeData(b, d, !0), n(b, c, "mark"))
        }
    }, queue: function (a, b, c) {
        var d;
        if (a)return b = (b || "fx") + "queue", d = f._data(a, b), c && (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(c)) : d.push(c)), d || []
    }, dequeue: function (a, b) {
        b = b || "fx";
        var c = f.queue(a, b), d = c.shift(), e = {};
        d === "inprogress" && (d = c.shift()), d && (b === "fx" && c.unshift("inprogress"), f._data(a, b + ".run", e), d.call(a, function () {
            f.dequeue(a, b)
        }, e)), c.length || (f.removeData(a, b + "queue " + b + ".run", !0), n(a, b, "queue"))
    }}), f.fn.extend({queue: function (a, c) {
        var d = 2;
        return typeof a != "string" && (c = a, a = "fx", d--), arguments.length < d ? f.queue(this[0], a) : c === b ? this : this.each(function () {
            var b = f.queue(this, a, c);
            a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a)
        })
    }, dequeue: function (a) {
        return this.each(function () {
            f.dequeue(this, a)
        })
    }, delay: function (a, b) {
        return a = f.fx ? f.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(d)
            }
        })
    }, clearQueue: function (a) {
        return this.queue(a || "fx", [])
    }, promise: function (a, c) {
        function m() {
            --h || d.resolveWith(e, [e])
        }

        typeof a != "string" && (c = a, a = b), a = a || "fx";
        var d = f.Deferred(), e = this, g = e.length, h = 1, i = a + "defer", j = a + "queue", k = a + "mark", l;
        while (g--)if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks("once memory"), !0))h++, l.add(m);
        return m(), d.promise(c)
    }});
    var o = /[\n\t\r]/g, p = /\s+/, q = /\r/g, r = /^(?:button|input)$/i, s = /^(?:button|input|object|select|textarea)$/i, t = /^a(?:rea)?$/i, u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, v = f.support.getSetAttribute, w, x, y;
    f.fn.extend({attr: function (a, b) {
        return f.access(this, f.attr, a, b, arguments.length > 1)
    }, removeAttr: function (a) {
        return this.each(function () {
            f.removeAttr(this, a)
        })
    }, prop: function (a, b) {
        return f.access(this, f.prop, a, b, arguments.length > 1)
    }, removeProp: function (a) {
        return a = f.propFix[a] || a, this.each(function () {
            try {
                this[a] = b, delete this[a]
            } catch (c) {
            }
        })
    }, addClass: function (a) {
        var b, c, d, e, g, h, i;
        if (f.isFunction(a))return this.each(function (b) {
            f(this).addClass(a.call(this, b, this.className))
        });
        if (a && typeof a == "string") {
            b = a.split(p);
            for (c = 0, d = this.length; c < d; c++) {
                e = this[c];
                if (e.nodeType === 1)if (!e.className && b.length === 1)e.className = a; else {
                    g = " " + e.className + " ";
                    for (h = 0, i = b.length; h < i; h++)~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
                    e.className = f.trim(g)
                }
            }
        }
        return this
    }, removeClass: function (a) {
        var c, d, e, g, h, i, j;
        if (f.isFunction(a))return this.each(function (b) {
            f(this).removeClass(a.call(this, b, this.className))
        });
        if (a && typeof a == "string" || a === b) {
            c = (a || "").split(p);
            for (d = 0, e = this.length; d < e; d++) {
                g = this[d];
                if (g.nodeType === 1 && g.className)if (a) {
                    h = (" " + g.className + " ").replace(o, " ");
                    for (i = 0, j = c.length; i < j; i++)h = h.replace(" " + c[i] + " ", " ");
                    g.className = f.trim(h)
                } else g.className = ""
            }
        }
        return this
    }, toggleClass: function (a, b) {
        var c = typeof a, d = typeof b == "boolean";
        return f.isFunction(a) ? this.each(function (c) {
            f(this).toggleClass(a.call(this, c, this.className, b), b)
        }) : this.each(function () {
            if (c === "string") {
                var e, g = 0, h = f(this), i = b, j = a.split(p);
                while (e = j[g++])i = d ? i : !h.hasClass(e), h[i ? "addClass" : "removeClass"](e)
            } else if (c === "undefined" || c === "boolean")this.className && f._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || ""
        })
    }, hasClass: function (a) {
        var b = " " + a + " ", c = 0, d = this.length;
        for (; c < d; c++)if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(o, " ").indexOf(b) > -1)return!0;
        return!1
    }, val: function (a) {
        var c, d, e, g = this[0];
        if (!arguments.length) {
            if (g)return c = f.valHooks[g.type] || f.valHooks[g.nodeName.toLowerCase()], c && "get"in c && (d = c.get(g, "value")) !== b ? d : (d = g.value, typeof d == "string" ? d.replace(q, "") : d == null ? "" : d);
            return
        }
        return e = f.isFunction(a), this.each(function (d) {
            var g = f(this), h;
            if (this.nodeType !== 1)return;
            e ? h = a.call(this, d, g.val()) : h = a, h == null ? h = "" : typeof h == "number" ? h += "" : f.isArray(h) && (h = f.map(h, function (a) {
                return a == null ? "" : a + ""
            })), c = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()];
            if (!c || !("set"in c) || c.set(this, h, "value") === b)this.value = h
        })
    }}), f.extend({valHooks: {option: {get: function (a) {
        var b = a.attributes.value;
        return!b || b.specified ? a.value : a.text
    }}, select: {get: function (a) {
        var b, c, d, e, g = a.selectedIndex, h = [], i = a.options, j = a.type === "select-one";
        if (g < 0)return null;
        c = j ? g : 0, d = j ? g + 1 : i.length;
        for (; c < d; c++) {
            e = i[c];
            if (e.selected && (f.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !f.nodeName(e.parentNode, "optgroup"))) {
                b = f(e).val();
                if (j)return b;
                h.push(b)
            }
        }
        return j && !h.length && i.length ? f(i[g]).val() : h
    }, set: function (a, b) {
        var c = f.makeArray(b);
        return f(a).find("option").each(function () {
            this.selected = f.inArray(f(this).val(), c) >= 0
        }), c.length || (a.selectedIndex = -1), c
    }}}, attrFn: {val: !0, css: !0, html: !0, text: !0, data: !0, width: !0, height: !0, offset: !0}, attr: function (a, c, d, e) {
        var g, h, i, j = a.nodeType;
        if (!a || j === 3 || j === 8 || j === 2)return;
        if (e && c in f.attrFn)return f(a)[c](d);
        if (typeof a.getAttribute == "undefined")return f.prop(a, c, d);
        i = j !== 1 || !f.isXMLDoc(a), i && (c = c.toLowerCase(), h = f.attrHooks[c] || (u.test(c) ? x : w));
        if (d !== b) {
            if (d === null) {
                f.removeAttr(a, c);
                return
            }
            return h && "set"in h && i && (g = h.set(a, d, c)) !== b ? g : (a.setAttribute(c, "" + d), d)
        }
        return h && "get"in h && i && (g = h.get(a, c)) !== null ? g : (g = a.getAttribute(c), g === null ? b : g)
    }, removeAttr: function (a, b) {
        var c, d, e, g, h, i = 0;
        if (b && a.nodeType === 1) {
            d = b.toLowerCase().split(p), g = d.length;
            for (; i < g; i++)e = d[i], e && (c = f.propFix[e] || e, h = u.test(e), h || f.attr(a, e, ""), a.removeAttribute(v ? e : c), h && c in a && (a[c] = !1))
        }
    }, attrHooks: {type: {set: function (a, b) {
        if (r.test(a.nodeName) && a.parentNode)f.error("type property can't be changed"); else if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
            var c = a.value;
            return a.setAttribute("type", b), c && (a.value = c), b
        }
    }}, value: {get: function (a, b) {
        return w && f.nodeName(a, "button") ? w.get(a, b) : b in a ? a.value : null
    }, set: function (a, b, c) {
        if (w && f.nodeName(a, "button"))return w.set(a, b, c);
        a.value = b
    }}}, propFix: {tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable"}, prop: function (a, c, d) {
        var e, g, h, i = a.nodeType;
        if (!a || i === 3 || i === 8 || i === 2)return;
        return h = i !== 1 || !f.isXMLDoc(a), h && (c = f.propFix[c] || c, g = f.propHooks[c]), d !== b ? g && "set"in g && (e = g.set(a, d, c)) !== b ? e : a[c] = d : g && "get"in g && (e = g.get(a, c)) !== null ? e : a[c]
    }, propHooks: {tabIndex: {get: function (a) {
        var c = a.getAttributeNode("tabindex");
        return c && c.specified ? parseInt(c.value, 10) : s.test(a.nodeName) || t.test(a.nodeName) && a.href ? 0 : b
    }}}}), f.attrHooks.tabindex = f.propHooks.tabIndex, x = {get: function (a, c) {
        var d, e = f.prop(a, c);
        return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
    }, set: function (a, b, c) {
        var d;
        return b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())), c
    }}, v || (y = {name: !0, id: !0, coords: !0}, w = f.valHooks.button = {get: function (a, c) {
        var d;
        return d = a.getAttributeNode(c), d && (y[c] ? d.nodeValue !== "" : d.specified) ? d.nodeValue : b
    }, set: function (a, b, d) {
        var e = a.getAttributeNode(d);
        return e || (e = c.createAttribute(d), a.setAttributeNode(e)), e.nodeValue = b + ""
    }}, f.attrHooks.tabindex.set = w.set, f.each(["width", "height"], function (a, b) {
        f.attrHooks[b] = f.extend(f.attrHooks[b], {set: function (a, c) {
            if (c === "")return a.setAttribute(b, "auto"), c
        }})
    }), f.attrHooks.contenteditable = {get: w.get, set: function (a, b, c) {
        b === "" && (b = "false"), w.set(a, b, c)
    }}), f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function (a, c) {
        f.attrHooks[c] = f.extend
        (f.attrHooks[c], {get: function (a) {
            var d = a.getAttribute(c, 2);
            return d === null ? b : d
        }})
    }), f.support.style || (f.attrHooks.style = {get: function (a) {
        return a.style.cssText.toLowerCase() || b
    }, set: function (a, b) {
        return a.style.cssText = "" + b
    }}), f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {get: function (a) {
        var b = a.parentNode;
        return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
    }})), f.support.enctype || (f.propFix.enctype = "encoding"), f.support.checkOn || f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = {get: function (a) {
            return a.getAttribute("value") === null ? "on" : a.value
        }}
    }), f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = f.extend(f.valHooks[this], {set: function (a, b) {
            if (f.isArray(b))return a.checked = f.inArray(f(a).val(), b) >= 0
        }})
    });
    var z = /^(?:textarea|input|select)$/i, A = /^([^\.]*)?(?:\.(.+))?$/, B = /(?:^|\s)hover(\.\S+)?\b/, C = /^key/, D = /^(?:mouse|contextmenu)|click/, E = /^(?:focusinfocus|focusoutblur)$/, F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/, G = function (a) {
        var b = F.exec(a);
        return b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)")), b
    }, H = function (a, b) {
        var c = a.attributes || {};
        return(!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c["class"] || {}).value))
    }, I = function (a) {
        return f.event.special.hover ? a : a.replace(B, "mouseenter$1 mouseleave$1")
    };
    f.event = {add: function (a, c, d, e, g) {
        var h, i, j, k, l, m, n, o, p, q, r, s;
        if (a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))return;
        d.handler && (p = d, d = p.handler, g = p.selector), d.guid || (d.guid = f.guid++), j = h.events, j || (h.events = j = {}), i = h.handle, i || (h.handle = i = function (a) {
            return typeof f == "undefined" || !!a && f.event.triggered === a.type ? b : f.event.dispatch.apply(i.elem, arguments)
        }, i.elem = a), c = f.trim(I(c)).split(" ");
        for (k = 0; k < c.length; k++) {
            l = A.exec(c[k]) || [], m = l[1], n = (l[2] || "").split(".").sort(), s = f.event.special[m] || {}, m = (g ? s.delegateType : s.bindType) || m, s = f.event.special[m] || {}, o = f.extend({type: m, origType: l[1], data: e, handler: d, guid: d.guid, selector: g, quick: g && G(g), namespace: n.join(".")}, p), r = j[m];
            if (!r) {
                r = j[m] = [], r.delegateCount = 0;
                if (!s.setup || s.setup.call(a, e, n, i) === !1)a.addEventListener ? a.addEventListener(m, i, !1) : a.attachEvent && a.attachEvent("on" + m, i)
            }
            s.add && (s.add.call(a, o), o.handler.guid || (o.handler.guid = d.guid)), g ? r.splice(r.delegateCount++, 0, o) : r.push(o), f.event.global[m] = !0
        }
        a = null
    }, global: {}, remove: function (a, b, c, d, e) {
        var g = f.hasData(a) && f._data(a), h, i, j, k, l, m, n, o, p, q, r, s;
        if (!g || !(o = g.events))return;
        b = f.trim(I(b || "")).split(" ");
        for (h = 0; h < b.length; h++) {
            i = A.exec(b[h]) || [], j = k = i[1], l = i[2];
            if (!j) {
                for (j in o)f.event.remove(a, j + b[h], c, d, !0);
                continue
            }
            p = f.event.special[j] || {}, j = (d ? p.delegateType : p.bindType) || j, r = o[j] || [], m = r.length, l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
            for (n = 0; n < r.length; n++)s = r[n], (e || k === s.origType) && (!c || c.guid === s.guid) && (!l || l.test(s.namespace)) && (!d || d === s.selector || d === "**" && s.selector) && (r.splice(n--, 1), s.selector && r.delegateCount--, p.remove && p.remove.call(a, s));
            r.length === 0 && m !== r.length && ((!p.teardown || p.teardown.call(a, l) === !1) && f.removeEvent(a, j, g.handle), delete o[j])
        }
        f.isEmptyObject(o) && (q = g.handle, q && (q.elem = null), f.removeData(a, ["events", "handle"], !0))
    }, customEvent: {getData: !0, setData: !0, changeData: !0}, trigger: function (c, d, e, g) {
        if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
            var h = c.type || c, i = [], j, k, l, m, n, o, p, q, r, s;
            if (E.test(h + f.event.triggered))return;
            h.indexOf("!") >= 0 && (h = h.slice(0, -1), k = !0), h.indexOf(".") >= 0 && (i = h.split("."), h = i.shift(), i.sort());
            if ((!e || f.event.customEvent[h]) && !f.event.global[h])return;
            c = typeof c == "object" ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h), c.type = h, c.isTrigger = !0, c.exclusive = k, c.namespace = i.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, o = h.indexOf(":") < 0 ? "on" + h : "";
            if (!e) {
                j = f.cache;
                for (l in j)j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0);
                return
            }
            c.result = b, c.target || (c.target = e), d = d != null ? f.makeArray(d) : [], d.unshift(c), p = f.event.special[h] || {};
            if (p.trigger && p.trigger.apply(e, d) === !1)return;
            r = [
                [e, p.bindType || h]
            ];
            if (!g && !p.noBubble && !f.isWindow(e)) {
                s = p.delegateType || h, m = E.test(s + h) ? e : e.parentNode, n = null;
                for (; m; m = m.parentNode)r.push([m, s]), n = m;
                n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a, s])
            }
            for (l = 0; l < r.length && !c.isPropagationStopped(); l++)m = r[l][0], c.type = r[l][1], q = (f._data(m, "events") || {})[c.type] && f._data(m, "handle"), q && q.apply(m, d), q = o && m[o], q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault();
            return c.type = h, !g && !c.isDefaultPrevented() && (!p._default || p._default.apply(e.ownerDocument, d) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e) && o && e[h] && (h !== "focus" && h !== "blur" || c.target.offsetWidth !== 0) && !f.isWindow(e) && (n = e[o], n && (e[o] = null), f.event.triggered = h, e[h](), f.event.triggered = b, n && (e[o] = n)), c.result
        }
        return
    }, dispatch: function (c) {
        c = f.event.fix(c || a.event);
        var d = (f._data(this, "events") || {})[c.type] || [], e = d.delegateCount, g = [].slice.call(arguments, 0), h = !c.exclusive && !c.namespace, i = f.event.special[c.type] || {}, j = [], k, l, m, n, o, p, q, r, s, t, u;
        g[0] = c, c.delegateTarget = this;
        if (i.preDispatch && i.preDispatch.call(this, c) === !1)return;
        if (e && (!c.button || c.type !== "click")) {
            n = f(this), n.context = this.ownerDocument || this;
            for (m = c.target; m != this; m = m.parentNode || this)if (m.disabled !== !0) {
                p = {}, r = [], n[0] = m;
                for (k = 0; k < e; k++)s = d[k], t = s.selector, p[t] === b && (p[t] = s.quick ? H(m, s.quick) : n.is(t)), p[t] && r.push(s);
                r.length && j.push({elem: m, matches: r})
            }
        }
        d.length > e && j.push({elem: this, matches: d.slice(e)});
        for (k = 0; k < j.length && !c.isPropagationStopped(); k++) {
            q = j[k], c.currentTarget = q.elem;
            for (l = 0; l < q.matches.length && !c.isImmediatePropagationStopped(); l++) {
                s = q.matches[l];
                if (h || !c.namespace && !s.namespace || c.namespace_re && c.namespace_re.test(s.namespace))c.data = s.data, c.handleObj = s, o = ((f.event.special[s.origType] || {}).handle || s.handler).apply(q.elem, g), o !== b && (c.result = o, o === !1 && (c.preventDefault(), c.stopPropagation()))
            }
        }
        return i.postDispatch && i.postDispatch.call(this, c), c.result
    }, props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {props: "char charCode key keyCode".split(" "), filter: function (a, b) {
        return a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode), a
    }}, mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (a, d) {
        var e, f, g, h = d.button, i = d.fromElement;
        return a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c, f = e.documentElement, g = e.body, a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)), !a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement : i), !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0), a
    }}, fix: function (a) {
        if (a[f.expando])return a;
        var d, e, g = a, h = f.event.fixHooks[a.type] || {}, i = h.props ? this.props.concat(h.props) : this.props;
        a = f.Event(g);
        for (d = i.length; d;)e = i[--d], a[e] = g[e];
        return a.target || (a.target = g.srcElement || c), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey === b && (a.metaKey = a.ctrlKey), h.filter ? h.filter(a, g) : a
    }, special: {ready: {setup: f.bindReady}, load: {noBubble: !0}, focus: {delegateType: "focusin"}, blur: {delegateType: "focusout"}, beforeunload: {setup: function (a, b, c) {
        f.isWindow(this) && (this.onbeforeunload = c)
    }, teardown: function (a, b) {
        this.onbeforeunload === b && (this.onbeforeunload = null)
    }}}, simulate: function (a, b, c, d) {
        var e = f.extend(new f.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
        d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
    }}, f.event.handle = f.event.dispatch, f.removeEvent = c.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        a.detachEvent && a.detachEvent("on" + b, c)
    }, f.Event = function (a, b) {
        if (!(this instanceof f.Event))return new f.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? K : J) : this.type = a, b && f.extend(this, b), this.timeStamp = a && a.timeStamp || f.now(), this[f.expando] = !0
    }, f.Event.prototype = {preventDefault: function () {
        this.isDefaultPrevented = K;
        var a = this.originalEvent;
        if (!a)return;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    }, stopPropagation: function () {
        this.isPropagationStopped = K;
        var a = this.originalEvent;
        if (!a)return;
        a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0
    }, stopImmediatePropagation: function () {
        this.isImmediatePropagationStopped = K, this.stopPropagation()
    }, isDefaultPrevented: J, isPropagationStopped: J, isImmediatePropagationStopped: J}, f.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (a, b) {
        f.event.special[a] = {delegateType: b, bindType: b, handle: function (a) {
            var c = this, d = a.relatedTarget, e = a.handleObj, g = e.selector, h;
            if (!d || d !== c && !f.contains(c, d))a.type = e.origType, h = e.handler.apply(this, arguments), a.type = b;
            return h
        }}
    }), f.support.submitBubbles || (f.event.special.submit = {setup: function () {
        if (f.nodeName(this, "form"))return!1;
        f.event.add(this, "click._submit keypress._submit", function (a) {
            var c = a.target, d = f.nodeName(c, "input") || f.nodeName(c, "button") ? c.form : b;
            d && !d._submit_attached && (f.event.add(d, "submit._submit", function (a) {
                a._submit_bubble = !0
            }), d._submit_attached = !0)
        })
    }, postDispatch: function (a) {
        a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && f.event.simulate("submit", this.parentNode, a, !0))
    }, teardown: function () {
        if (f.nodeName(this, "form"))return!1;
        f.event.remove(this, "._submit")
    }}), f.support.changeBubbles || (f.event.special.change = {setup: function () {
        if (z.test(this.nodeName)) {
            if (this.type === "checkbox" || this.type === "radio")f.event.add(this, "propertychange._change", function (a) {
                a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
            }), f.event.add(this, "click._change", function (a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1, f.event.simulate("change", this, a, !0))
            });
            return!1
        }
        f.event.add(this, "beforeactivate._change", function (a) {
            var b = a.target;
            z.test(b.nodeName) && !b._change_attached && (f.event.add(b, "change._change", function (a) {
                this.parentNode && !a.isSimulated && !a.isTrigger && f.event.simulate("change", this.parentNode, a, !0)
            }), b._change_attached = !0)
        })
    }, handle: function (a) {
        var b = a.target;
        if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox")return a.handleObj.handler.apply(this, arguments)
    }, teardown: function () {
        return f.event.remove(this, "._change"), z.test(this.nodeName)
    }}), f.support.focusinBubbles || f.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var d = 0, e = function (a) {
            f.event.simulate(b, a.target, f.event.fix(a), !0)
        };
        f.event.special[b] = {setup: function () {
            d++ === 0 && c.addEventListener(a, e, !0)
        }, teardown: function () {
            --d === 0 && c.removeEventListener(a, e, !0)
        }}
    }), f.fn.extend({on: function (a, c, d, e, g) {
        var h, i;
        if (typeof a == "object") {
            typeof c != "string" && (d = d || c, c = b);
            for (i in a)this.on(i, c, d, a[i], g);
            return this
        }
        d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
        if (e === !1)e = J; else if (!e)return this;
        return g === 1 && (h = e, e = function (a) {
            return f().off(a), h.apply(this, arguments)
        }, e.guid = h.guid || (h.guid = f.guid++)), this.each(function () {
            f.event.add(this, a, e, d, c)
        })
    }, one: function (a, b, c, d) {
        return this.on(a, b, c, d, 1)
    }, off: function (a, c, d) {
        if (a && a.preventDefault && a.handleObj) {
            var e = a.handleObj;
            return f(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this
        }
        if (typeof a == "object") {
            for (var g in a)this.off(g, c, a[g]);
            return this
        }
        if (c === !1 || typeof c == "function")d = c, c = b;
        return d === !1 && (d = J), this.each(function () {
            f.event.remove(this, a, d, c)
        })
    }, bind: function (a, b, c) {
        return this.on(a, null, b, c)
    }, unbind: function (a, b) {
        return this.off(a, null, b)
    }, live: function (a, b, c) {
        return f(this.context).on(a, this.selector, b, c), this
    }, die: function (a, b) {
        return f(this.context).off(a, this.selector || "**", b), this
    }, delegate: function (a, b, c, d) {
        return this.on(b, a, c, d)
    }, undelegate: function (a, b, c) {
        return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c)
    }, trigger: function (a, b) {
        return this.each(function () {
            f.event.trigger(a, b, this)
        })
    }, triggerHandler: function (a, b) {
        if (this[0])return f.event.trigger(a, b, this[0], !0)
    }, toggle: function (a) {
        var b = arguments, c = a.guid || f.guid++, d = 0, e = function (c) {
            var e = (f._data(this, "lastToggle" + a.guid) || 0) % d;
            return f._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault(), b[e].apply(this, arguments) || !1
        };
        e.guid = c;
        while (d < b.length)b[d++].guid = c;
        return this.click(e)
    }, hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a)
    }}), f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        f.fn[b] = function (a, c) {
            return c == null && (c = a, a = null), arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }, f.attrFn && (f.attrFn[b] = !0), C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks), D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks)
    }), function () {
        function w(a, b, c, e, f, g) {
            for (var h = 0, i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break
                        }
                        j.nodeType === 1 && !g && (j[d] = c, j.sizset = h);
                        if (j.nodeName.toLowerCase() === b) {
                            k = j;
                            break
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }

        function x(a, b, c, e, f, g) {
            for (var h = 0, i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break
                        }
                        if (j.nodeType === 1) {
                            g || (j[d] = c, j.sizset = h);
                            if (typeof b != "string") {
                                if (j === b) {
                                    k = !0;
                                    break
                                }
                            } else if (m.filter(b, [j]).length > 0) {
                                k = j;
                                break
                            }
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }

        var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, d = "sizcache" + (Math.random() + "").replace(".", ""), e = 0, g = Object.prototype.toString, h = !1, i = !0, j = /\\/g, k = /\r\n/g, l = /\W/;
        [0, 0].sort(function () {
            return i = !1, 0
        });
        var m = function (b, d, e, f) {
            e = e || [], d = d || c;
            var h = d;
            if (d.nodeType !== 1 && d.nodeType !== 9)return[];
            if (!b || typeof b != "string")return e;
            var i, j, k, l, n, q, r, t, u = !0, v = m.isXML(d), w = [], x = b;
            do {
                a.exec(""), i = a.exec(x);
                if (i) {
                    x = i[3], w.push(i[1]);
                    if (i[2]) {
                        l = i[3];
                        break
                    }
                }
            } while (i);
            if (w.length > 1 && p.exec(b))if (w.length === 2 && o.relative[w[0]])j = y(w[0] + w[1], d, f); else {
                j = o.relative[w[0]] ? [d] : m(w.shift(), d);
                while (w.length)b = w.shift(), o.relative[b] && (b += w.shift()), j = y(b, j, f)
            } else {
                !f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v), d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]);
                if (d) {
                    n = f ? {expr: w.pop(), set: s(f)} : m.find(w.pop(), w.length !== 1 || w[0] !== "~" && w[0] !== "+" || !d.parentNode ? d : d.parentNode, v), j = n.expr ? m.filter(n.expr, n.set) : n.set, w.length > 0 ? k = s(j) : u = !1;
                    while (w.length)q = w.pop(), r = q, o.relative[q] ? r = w.pop() : q = "", r == null && (r = d), o.relative[q](k, r, v)
                } else k = w = []
            }
            k || (k = j), k || m.error(q || b);
            if (g.call(k) === "[object Array]")if (!u)e.push.apply(e, k); else if (d && d.nodeType === 1)for (t = 0; k[t] != null; t++)k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d, k[t])) && e.push(j[t]); else for (t = 0; k[t] != null; t++)k[t] && k[t].nodeType === 1 && e.push(j[t]); else s(k, e);
            return l && (m(l, h, e, f), m.uniqueSort(e)), e
        };
        m.uniqueSort = function (a) {
            if (u) {
                h = i, a.sort(u);
                if (h)for (var b = 1; b < a.length; b++)a[b] === a[b - 1] && a.splice(b--, 1)
            }
            return a
        }, m.matches = function (a, b) {
            return m(a, null, null, b)
        }, m.matchesSelector = function (a, b) {
            return m(b, null, null, [a]).length > 0
        }, m.find = function (a, b, c) {
            var d, e, f, g, h, i;
            if (!a)return[];
            for (e = 0, f = o.order.length; e < f; e++) {
                h = o.order[e];
                if (g = o.leftMatch[h].exec(a)) {
                    i = g[1], g.splice(1, 1);
                    if (i.substr(i.length - 1) !== "\\") {
                        g[1] = (g[1] || "").replace(j, ""), d = o.find[h](g, b, c);
                        if (d != null) {
                            a = a.replace(o.match[h], "");
                            break
                        }
                    }
                }
            }
            return d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []), {set: d, expr: a}
        }, m.filter = function (a, c, d, e) {
            var f, g, h, i, j, k, l, n, p, q = a, r = [], s = c, t = c && c[0] && m.isXML(c[0]);
            while (a && c.length) {
                for (h in o.filter)if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
                    k = o.filter[h], l = f[1], g = !1, f.splice(1, 1);
                    if (l.substr(l.length - 1) === "\\")continue;
                    s === r && (r = []);
                    if (o.preFilter[h]) {
                        f = o.preFilter[h](f, s, d, r, e, t);
                        if (!f)g = i = !0; else if (f === !0)continue
                    }
                    if (f)for (n = 0; (j = s[n]) != null; n++)j && (i = k(j, f, n, s), p = e ^ i, d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0));
                    if (i !== b) {
                        d || (s = r), a = a.replace(o.match[h], "");
                        if (!g)return[];
                        break
                    }
                }
                if (a === q) {
                    if (g != null)break;
                    m.error(a)
                }
                q = a
            }
            return s
        }, m.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        };
        var n = m.getText = function (a) {
            var b, c, d = a.nodeType, e = "";
            if (d) {
                if (d === 1 || d === 9 || d === 11) {
                    if (typeof a.textContent == "string")return a.textContent;
                    if (typeof a.innerText == "string")return a.innerText.replace(k, "");
                    for (a = a.firstChild; a; a = a.nextSibling)e += n(a)
                } else if (d === 3 || d === 4)return a.nodeValue
            } else for (b = 0; c = a[b]; b++)c.nodeType !== 8 && (e += n(c));
            return e
        }, o = m.selectors = {order: ["ID", "NAME", "TAG"], match: {ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/, ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/, TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/, CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/, POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/, PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/}, leftMatch: {}, attrMap: {"class": "className", "for": "htmlFor"}, attrHandle: {href: function (a) {
            return a.getAttribute("href")
        }, type: function (a) {
            return a.getAttribute("type")
        }}, relative: {"+": function (a, b) {
            var c = typeof b == "string", d = c && !l.test(b), e = c && !d;
            d && (b = b.toLowerCase());
            for (var f = 0, g = a.length, h; f < g; f++)if (h = a[f]) {
                while ((h = h.previousSibling) && h.nodeType !== 1);
                a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
            }
            e && m.filter(b, a, !0)
        }, ">": function (a, b) {
            var c, d = typeof b == "string", e = 0, f = a.length;
            if (d && !l.test(b)) {
                b = b.toLowerCase();
                for (; e < f; e++) {
                    c = a[e];
                    if (c) {
                        var g = c.parentNode;
                        a[e] = g.nodeName.toLowerCase() === b ? g : !1
                    }
                }
            } else {
                for (; e < f; e++)c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b);
                d && m.filter(b, a, !0)
            }
        }, "": function (a, b, c) {
            var d, f = e++, g = x;
            typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("parentNode", b, f, a, d, c)
        }, "~": function (a, b, c) {
            var d, f = e++, g = x;
            typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("previousSibling", b, f, a, d, c)
        }}, find: {ID: function (a, b, c) {
            if (typeof b.getElementById != "undefined" && !c) {
                var d = b.getElementById(a[1]);
                return d && d.parentNode ? [d] : []
            }
        }, NAME: function (a, b) {
            if (typeof b.getElementsByName != "undefined") {
                var c = [], d = b.getElementsByName(a[1]);
                for (var e = 0, f = d.length; e < f; e++)d[e].getAttribute("name") === a[1] && c.push(d[e]);
                return c.length === 0 ? null : c
            }
        }, TAG: function (a, b) {
            if (typeof b.getElementsByTagName != "undefined")return b.getElementsByTagName(a[1])
        }}, preFilter: {CLASS: function (a, b, c, d, e, f) {
            a = " " + a[1].replace(j, "") + " ";
            if (f)return a;
            for (var g = 0, h; (h = b[g]) != null; g++)h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
            return!1
        }, ID: function (a) {
            return a[1].replace(j, "")
        }, TAG: function (a, b) {
            return a[1].replace(j, "").toLowerCase()
        }, CHILD: function (a) {
            if (a[1] === "nth") {
                a[2] || m.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
                var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
            } else a[2] && m.error(a[0]);
            return a[0] = e++, a
        }, ATTR: function (a, b, c, d, e, f) {
            var g = a[1] = a[1].replace(j, "");
            return!f && o.attrMap[g] && (a[1] = o.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(j, ""), a[2] === "~=" && (a[4] = " " + a[4] + " "), a
        }, PSEUDO: function (b, c, d, e, f) {
            if (b[1] === "not") {
                if (!((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3]))) {
                    var g = m.filter(b[3], c, d, !0 ^ f);
                    return d || e.push.apply(e, g), !1
                }
                b[3] = m(b[3], null, null, c)
            } else if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0]))return!0;
            return b
        }, POS: function (a) {
            return a.unshift(!0), a
        }}, filters: {enabled: function (a) {
            return a.disabled === !1 && a.type !== "hidden"
        }, disabled: function (a) {
            return a.disabled === !0
        }, checked: function (a) {
            return a.checked === !0
        }, selected: function (a) {
            return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
        }, parent: function (a) {
            return!!a.firstChild
        }, empty: function (a) {
            return!a.firstChild
        }, has: function (a, b, c) {
            return!!m(c[3], a).length
        }, header: function (a) {
            return/h\d/i.test(a.nodeName)
        }, text: function (a) {
            var b = a.getAttribute("type"), c = a.type;
            return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
        }, radio: function (a) {
            return a.nodeName.toLowerCase() === "input" && "radio" === a.type
        }, checkbox: function (a) {
            return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
        }, file: function (a) {
            return a.nodeName.toLowerCase() === "input" && "file" === a.type
        }, password: function (a) {
            return a.nodeName.toLowerCase() === "input" && "password" === a.type
        }, submit: function (a) {
            var b = a.nodeName.toLowerCase();
            return(b === "input" || b === "button") && "submit" === a.type
        }, image: function (a) {
            return a.nodeName.toLowerCase() === "input" && "image" === a.type
        }, reset: function (a) {
            var b = a.nodeName.toLowerCase();
            return(b === "input" || b === "button") && "reset" === a.type
        }, button: function (a) {
            var b = a.nodeName.toLowerCase();
            return b === "input" && "button" === a.type || b === "button"
        }, input: function (a) {
            return/input|select|textarea|button/i.test(a.nodeName)
        }, focus: function (a) {
            return a === a.ownerDocument.activeElement
        }}, setFilters: {first: function (a, b) {
            return b === 0
        }, last: function (a, b, c, d) {
            return b === d.length - 1
        }, even: function (a, b) {
            return b % 2 === 0
        }, odd: function (a, b) {
            return b % 2 === 1
        }, lt: function (a, b, c) {
            return b < c[3] - 0
        }, gt: function (a, b, c) {
            return b > c[3] - 0
        }, nth: function (a, b, c) {
            return c[3] - 0 === b
        }, eq: function (a, b, c) {
            return c[3] - 0 === b
        }}, filter: {PSEUDO: function (a, b, c, d) {
            var e = b[1], f = o.filters[e];
            if (f)return f(a, c, b, d);
            if (e === "contains")return(a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0;
            if (e === "not") {
                var g = b[3];
                for (var h = 0, i = g.length; h < i; h++)if (g[h] === a)return!1;
                return!0
            }
            m.error(e)
        }, CHILD: function (a, b) {
            var c, e, f, g, h, i, j, k = b[1], l = a;
            switch (k) {
                case"only":
                case"first":
                    while (l = l.previousSibling)if (l.nodeType === 1)return!1;
                    if (k === "first")return!0;
                    l = a;
                case"last":
                    while (l = l.nextSibling)if (l.nodeType === 1)return!1;
                    return!0;
                case"nth":
                    c = b[2], e = b[3];
                    if (c === 1 && e === 0)return!0;
                    f = b[0], g = a.parentNode;
                    if (g && (g[d] !== f || !a.nodeIndex)) {
                        i = 0;
                        for (l = g.firstChild; l; l = l.nextSibling)l.nodeType === 1 && (l.nodeIndex = ++i);
                        g[d] = f
                    }
                    return j = a.nodeIndex - e, c === 0 ? j === 0 : j % c === 0 && j / c >= 0
            }
        }, ID: function (a, b) {
            return a.nodeType === 1 && a.getAttribute("id") === b
        }, TAG: function (a, b) {
            return b === "*" && a.nodeType === 1 || !!a.nodeName && a.nodeName.toLowerCase() === b
        }, CLASS: function (a, b) {
            return(" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
        }, ATTR: function (a, b) {
            var c = b[1], d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c), e = d + "", f = b[2], g = b[4];
            return d == null ? f === "!=" : !f && m.attr ? d != null : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
        }, POS: function (a, b, c, d) {
            var e = b[2], f = o.setFilters[e];
            if (f)return f(a, c, b, d)
        }}}, p = o.match.POS, q = function (a, b) {
            return"\\" + (b - 0 + 1)
        };
        for (var r in o.match)o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
        o.match.globalPOS = p;
        var s = function (a, b) {
            return a = Array.prototype.slice.call(a, 0), b ? (b.push.apply(b, a), b) : a
        };
        try {
            Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
        } catch (t) {
            s = function (a, b) {
                var c = 0, d = b || [];
                if (g.call(a) === "[object Array]")Array.prototype.push.apply(d, a); else if (typeof a.length == "number")for (var e = a.length; c < e; c++)d.push(a[c]); else for (; a[c]; c++)d.push(a[c]);
                return d
            }
        }
        var u, v;
        c.documentElement.compareDocumentPosition ? u = function (a, b) {
            return a === b ? (h = !0, 0) : !a.compareDocumentPosition || !b.compareDocumentPosition ? a.compareDocumentPosition ? -1 : 1 : a.compareDocumentPosition(b) & 4 ? -1 : 1
        } : (u = function (a, b) {
            if (a === b)return h = !0, 0;
            if (a.sourceIndex && b.sourceIndex)return a.sourceIndex - b.sourceIndex;
            var c, d, e = [], f = [], g = a.parentNode, i = b.parentNode, j = g;
            if (g === i)return v(a, b);
            if (!g)return-1;
            if (!i)return 1;
            while (j)e.unshift(j), j = j.parentNode;
            j = i;
            while (j)f.unshift(j), j = j.parentNode;
            c = e.length, d = f.length;
            for (var k = 0; k < c && k < d; k++)if (e[k] !== f[k])return v(e[k], f[k]);
            return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
        }, v = function (a, b, c) {
            if (a === b)return c;
            var d = a.nextSibling;
            while (d) {
                if (d === b)return-1;
                d = d.nextSibling
            }
            return 1
        }), function () {
            var a = c.createElement("div"), d = "script" + (new Date).getTime(), e = c.documentElement;
            a.innerHTML = "<a name='" + d + "'/>", e.insertBefore(a, e.firstChild), c.getElementById(d) && (o.find.ID = function (a, c, d) {
                if (typeof c.getElementById != "undefined" && !d) {
                    var e = c.getElementById(a[1]);
                    return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                }
            }, o.filter.ID = function (a, b) {
                var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                return a.nodeType === 1 && c && c.nodeValue === b
            }), e.removeChild(a), e = a = null
        }(), function () {
            var a = c.createElement("div");
            a.appendChild(c.createComment("")), a.getElementsByTagName("*").length > 0 && (o.find.TAG = function (a, b) {
                var c = b.getElementsByTagName(a[1]);
                if (a[1] === "*") {
                    var d = [];
                    for (var e = 0; c[e]; e++)c[e].nodeType === 1 && d.push(c[e]);
                    c = d
                }
                return c
            }), a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (o.attrHandle.href = function (a) {
                return a.getAttribute("href", 2)
            }), a = null
        }(), c.querySelectorAll && function () {
            var a = m, b = c.createElement("div"), d = "__sizzle__";
            b.innerHTML = "<p class='TEST'></p>";
            if (b.querySelectorAll && b.querySelectorAll(".TEST").length === 0)return;
            m = function (b, e, f, g) {
                e = e || c;
                if (!g && !m.isXML(e)) {
                    var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                    if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                        if (h[1])return s(e.getElementsByTagName(b), f);
                        if (h[2] && o.find.CLASS && e.getElementsByClassName)return s(e.getElementsByClassName(h[2]), f)
                    }
                    if (e.nodeType === 9) {
                        if (b === "body" && e.body)return s([e.body], f);
                        if (h && h[3]) {
                            var i = e.getElementById(h[3]);
                            if (!i || !i.parentNode)return s([], f);
                            if (i.id === h[3])return s([i], f)
                        }
                        try {
                            return s(e.querySelectorAll(b), f)
                        } catch (j) {
                        }
                    } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                        var k = e, l = e.getAttribute("id"), n = l || d, p = e.parentNode, q = /^\s*[+~]/.test(b);
                        l ? n = n.replace(/'/g, "\\$&") : e.setAttribute("id", n), q && p && (e = e.parentNode);
                        try {
                            if (!q || p)return s(e.querySelectorAll("[id='" + n + "'] " + b), f)
                        } catch (r) {
                        } finally {
                            l || k.removeAttribute("id")
                        }
                    }
                }
                return a(b, e, f, g)
            };
            for (var e in a)m[e] = a[e];
            b = null
        }(), function () {
            var a = c.documentElement, b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
            if (b) {
                var d = !b.call(c.createElement("div"), "div"), e = !1;
                try {
                    b.call(c.documentElement, "[test!='']:sizzle")
                } catch (f) {
                    e = !0
                }
                m.matchesSelector = function (a, c) {
                    c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!m.isXML(a))try {
                        if (e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) {
                            var f = b.call(a, c);
                            if (f || !d || a.document && a.document.nodeType !== 11)return f
                        }
                    } catch (g) {
                    }
                    return m(c, null, null, [a]).length > 0
                }
            }
        }(), function () {
            var a = c.createElement("div");
            a.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (!a.getElementsByClassName || a.getElementsByClassName("e").length === 0)return;
            a.lastChild.className = "e";
            if (a.getElementsByClassName("e").length === 1)return;
            o.order.splice(1, 0, "CLASS"), o.find.CLASS = function (a, b, c) {
                if (typeof b.getElementsByClassName != "undefined" && !c)return b.getElementsByClassName(a[1])
            }, a = null
        }(), c.documentElement.contains ? m.contains = function (a, b) {
            return a !== b && (a.contains ? a.contains(b) : !0)
        } : c.documentElement.compareDocumentPosition ? m.contains = function (a, b) {
            return!!(a.compareDocumentPosition(b) & 16)
        } : m.contains = function () {
            return!1
        }, m.isXML = function (a) {
            var b = (a ? a.ownerDocument || a : 0).documentElement;
            return b ? b.nodeName !== "HTML" : !1
        };
        var y = function (a, b, c) {
            var d, e = [], f = "", g = b.nodeType ? [b] : b;
            while (d = o.match.PSEUDO.exec(a))f += d[0], a = a.replace(o.match.PSEUDO, "");
            a = o.relative[a] ? a + "*" : a;
            for (var h = 0, i = g.length; h < i; h++)m(a, g[h], e, c);
            return m.filter(f, e)
        };
        m.attr = f.attr, m.selectors.attrMap = {}, f.find = m, f.expr = m.selectors, f.expr[":"] = f.expr.filters, f.unique = m.uniqueSort, f.text = m.getText, f.isXMLDoc = m.isXML, f.contains = m.contains
    }();
    var L = /Until$/, M = /^(?:parents|prevUntil|prevAll)/, N = /,/, O = /^.[^:#\[\.,]*$/, P = Array.prototype.slice, Q = f.expr.match.globalPOS, R = {children: !0, contents: !0, next: !0, prev: !0};
    f.fn.extend({find: function (a) {
        var b = this, c, d;
        if (typeof a != "string")return f(a).filter(function () {
            for (c = 0, d = b.length; c < d; c++)if (f.contains(b[c], this))return!0
        });
        var e = this.pushStack("", "find", a), g, h, i;
        for (c = 0, d = this.length; c < d; c++) {
            g = e.length, f.find(a, this[c], e);
            if (c > 0)for (h = g; h < e.length; h++)for (i = 0; i < g; i++)if (e[i] === e[h]) {
                e.splice(h--, 1);
                break
            }
        }
        return e
    }, has: function (a) {
        var b = f(a);
        return this.filter(function () {
            for (var a = 0, c = b.length; a < c; a++)if (f.contains(this, b[a]))return!0
        })
    }, not: function (a) {
        return this.pushStack(T(this, a, !1), "not", a)
    }, filter: function (a) {
        return this.pushStack(T(this, a, !0), "filter", a)
    }, is: function (a) {
        return!!a && (typeof a == "string" ? Q.test(a) ? f(a, this.context).index(this[0]) >= 0 : f.filter(a, this).length > 0 : this.filter(a).length > 0)
    }, closest: function (a, b) {
        var c = [], d, e, g = this[0];
        if (f.isArray(a)) {
            var h = 1;
            while (g && g.ownerDocument && g !== b) {
                for (d = 0; d < a.length; d++)f(g).is(a[d]) && c.push({selector: a[d], elem: g, level: h});
                g = g.parentNode, h++
            }
            return c
        }
        var i = Q.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
        for (d = 0, e = this.length; d < e; d++) {
            g = this[d];
            while (g) {
                if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
                    c.push(g);
                    break
                }
                g = g.parentNode;
                if (!g || !g.ownerDocument || g === b || g.nodeType === 11)break
            }
        }
        return c = c.length > 1 ? f.unique(c) : c, this.pushStack(c, "closest", a)
    }, index: function (a) {
        return a ? typeof a == "string" ? f.inArray(this[0], f(a)) : f.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
    }, add: function (a, b) {
        var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a), d = f.merge(this.get(), c);
        return this.pushStack(S(c[0]) || S(d[0]) ? d : f.unique(d))
    }, andSelf: function () {
        return this.add(this.prevObject)
    }}), f.each({parent: function (a) {
        var b = a.parentNode;
        return b && b.nodeType !== 11 ? b : null
    }, parents: function (a) {
        return f.dir(a, "parentNode")
    }, parentsUntil: function (a, b, c) {
        return f.dir(a, "parentNode", c)
    }, next: function (a) {
        return f.nth(a, 2, "nextSibling")
    }, prev: function (a) {
        return f.nth(a, 2, "previousSibling")
    }, nextAll: function (a) {
        return f.dir(a, "nextSibling")
    }, prevAll: function (a) {
        return f.dir(a, "previousSibling")
    }, nextUntil: function (a, b, c) {
        return f.dir(a, "nextSibling", c)
    }, prevUntil: function (a, b, c) {
        return f.dir(a, "previousSibling", c)
    }, siblings: function (a) {
        return f.sibling((a.parentNode || {}).firstChild, a)
    }, children: function (a) {
        return f.sibling(a.firstChild)
    }, contents: function (a) {
        return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes)
    }}, function (a, b) {
        f.fn[a] = function (c, d) {
            var e = f.map(this, b, c);
            return L.test(a) || (d = c), d && typeof d == "string" && (e = f.filter(d, e)), e = this.length > 1 && !R[a] ? f.unique(e) : e, (this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse()), this.pushStack(e, a, P.call(arguments).join(","))
        }
    }), f.extend({filter: function (a, b, c) {
        return c && (a = ":not(" + a + ")"), b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
    }, dir: function (a, c, d) {
        var e = [], g = a[c];
        while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d)))g.nodeType === 1 && e.push(g), g = g[c];
        return e
    }, nth: function (a, b, c, d) {
        b = b || 1;
        var e = 0;
        for (; a; a = a[c])if (a.nodeType === 1 && ++e === b)break;
        return a
    }, sibling: function (a, b) {
        var c = [];
        for (; a; a = a.nextSibling)a.nodeType === 1 && a !== b && c.push(a);
        return c
    }});
    var V = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", W = / jQuery\d+="(?:\d+|null)"/g, X = /^\s+/, Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig, Z = /<([\w:]+)/, $ = /<tbody/i, _ = /<|&#?\w+;/, ab = /<(?:script|style)/i, bb = /<(?:script|object|embed|option|style)/i, cb = new RegExp("<(?:" + V + ")[\\s/>]", "i"), db = /checked\s*(?:[^=]|=\s*.checked.)/i, eb = /\/(java|ecma)script/i, fb = /^\s*<!(?:\[CDATA\[|\-\-)/, gb = {option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], area: [1, "<map>", "</map>"], _default: [0, "", ""]}, hb = U(c);
    gb.optgroup = gb.option, gb.tbody = gb.tfoot = gb.colgroup = gb.caption = gb.thead, gb.th = gb.td, f.support.htmlSerialize || (gb._default = [1, "div<div>", "</div>"]), f.fn.extend({text: function (a) {
        return f.access(this, function (a) {
            return a === b ? f.text(this) : this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a))
        }, null, a, arguments.length)
    }, wrapAll: function (a) {
        if (f.isFunction(a))return this.each(function (b) {
            f(this).wrapAll(a.call(this, b))
        });
        if (this[0]) {
            var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode &&
            b.insertBefore(this[0]), b.map(function () {
                var a = this;
                while (a.firstChild && a.firstChild.nodeType === 1)a = a.firstChild;
                return a
            }).append(this)
        }
        return this
    }, wrapInner: function (a) {
        return f.isFunction(a) ? this.each(function (b) {
            f(this).wrapInner(a.call(this, b))
        }) : this.each(function () {
            var b = f(this), c = b.contents();
            c.length ? c.wrapAll(a) : b.append(a)
        })
    }, wrap: function (a) {
        var b = f.isFunction(a);
        return this.each(function (c) {
            f(this).wrapAll(b ? a.call(this, c) : a)
        })
    }, unwrap: function () {
        return this.parent().each(function () {
            f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
        }).end()
    }, append: function () {
        return this.domManip(arguments, !0, function (a) {
            this.nodeType === 1 && this.appendChild(a)
        })
    }, prepend: function () {
        return this.domManip(arguments, !0, function (a) {
            this.nodeType === 1 && this.insertBefore(a, this.firstChild)
        })
    }, before: function () {
        if (this[0] && this[0].parentNode)return this.domManip(arguments, !1, function (a) {
            this.parentNode.insertBefore(a, this)
        });
        if (arguments.length) {
            var a = f.clean(arguments);
            return a.push.apply(a, this.toArray()), this.pushStack(a, "before", arguments)
        }
    }, after: function () {
        if (this[0] && this[0].parentNode)return this.domManip(arguments, !1, function (a) {
            this.parentNode.insertBefore(a, this.nextSibling)
        });
        if (arguments.length) {
            var a = this.pushStack(this, "after", arguments);
            return a.push.apply(a, f.clean(arguments)), a
        }
    }, remove: function (a, b) {
        for (var c = 0, d; (d = this[c]) != null; c++)if (!a || f.filter(a, [d]).length)!b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
        return this
    }, empty: function () {
        for (var a = 0, b; (b = this[a]) != null; a++) {
            b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
            while (b.firstChild)b.removeChild(b.firstChild)
        }
        return this
    }, clone: function (a, b) {
        return a = a == null ? !1 : a, b = b == null ? a : b, this.map(function () {
            return f.clone(this, a, b)
        })
    }, html: function (a) {
        return f.access(this, function (a) {
            var c = this[0] || {}, d = 0, e = this.length;
            if (a === b)return c.nodeType === 1 ? c.innerHTML.replace(W, "") : null;
            if (typeof a == "string" && !ab.test(a) && (f.support.leadingWhitespace || !X.test(a)) && !gb[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
                a = a.replace(Y, "<$1></$2>");
                try {
                    for (; d < e; d++)c = this[d] || {}, c.nodeType === 1 && (f.cleanData(c.getElementsByTagName("*")), c.innerHTML = a);
                    c = 0
                } catch (g) {
                }
            }
            c && this.empty().append(a)
        }, null, a, arguments.length)
    }, replaceWith: function (a) {
        return this[0] && this[0].parentNode ? f.isFunction(a) ? this.each(function (b) {
            var c = f(this), d = c.html();
            c.replaceWith(a.call(this, b, d))
        }) : (typeof a != "string" && (a = f(a).detach()), this.each(function () {
            var b = this.nextSibling, c = this.parentNode;
            f(this).remove(), b ? f(b).before(a) : f(c).append(a)
        })) : this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
    }, detach: function (a) {
        return this.remove(a, !0)
    }, domManip: function (a, c, d) {
        var e, g, h, i, j = a[0], k = [];
        if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && db.test(j))return this.each(function () {
            f(this).domManip(a, c, d, !0)
        });
        if (f.isFunction(j))return this.each(function (e) {
            var g = f(this);
            a[0] = j.call(this, e, c ? g.html() : b), g.domManip(a, c, d)
        });
        if (this[0]) {
            i = j && j.parentNode, f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {fragment: i} : e = f.buildFragment(a, this, k), h = e.fragment, h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
            if (g) {
                c = c && f.nodeName(g, "tr");
                for (var l = 0, m = this.length, n = m - 1; l < m; l++)d.call(c ? ib(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
            }
            k.length && f.each(k, function (a, b) {
                b.src ? f.ajax({type: "GET", global: !1, url: b.src, async: !1, dataType: "script"}) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(fb, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b)
            })
        }
        return this
    }}), f.buildFragment = function (a, b, d) {
        var e, g, h, i, j = a[0];
        return b && b[0] && (i = b[0].ownerDocument || b[0]), i.createDocumentFragment || (i = c), a.length === 1 && typeof j == "string" && j.length < 512 && i === c && j.charAt(0) === "<" && !bb.test(j) && (f.support.checkClone || !db.test(j)) && (f.support.html5Clone || !cb.test(j)) && (g = !0, h = f.fragments[j], h && h !== 1 && (e = h)), e || (e = i.createDocumentFragment(), f.clean(a, i, e, d)), g && (f.fragments[j] = h ? e : 1), {fragment: e, cacheable: g}
    }, f.fragments = {}, f.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (a, b) {
        f.fn[a] = function (c) {
            var d = [], e = f(c), g = this.length === 1 && this[0].parentNode;
            if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1)return e[b](this[0]), this;
            for (var h = 0, i = e.length; h < i; h++) {
                var j = (h > 0 ? this.clone(!0) : this).get();
                f(e[h])[b](j), d = d.concat(j)
            }
            return this.pushStack(d, a, e.selector)
        }
    }), f.extend({clone: function (a, b, c) {
        var d, e, g, h = f.support.html5Clone || f.isXMLDoc(a) || !cb.test("<" + a.nodeName + ">") ? a.cloneNode(!0) : ob(a);
        if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
            kb(a, h), d = lb(a), e = lb(h);
            for (g = 0; d[g]; ++g)e[g] && kb(d[g], e[g])
        }
        if (b) {
            jb(a, h);
            if (c) {
                d = lb(a), e = lb(h);
                for (g = 0; d[g]; ++g)jb(d[g], e[g])
            }
        }
        return d = e = null, h
    }, clean: function (a, b, d, e) {
        var g, h, i, j = [];
        b = b || c, typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
        for (var k = 0, l; (l = a[k]) != null; k++) {
            typeof l == "number" && (l += "");
            if (!l)continue;
            if (typeof l == "string")if (!_.test(l))l = b.createTextNode(l); else {
                l = l.replace(Y, "<$1></$2>");
                var m = (Z.exec(l) || ["", ""])[1].toLowerCase(), n = gb[m] || gb._default, o = n[0], p = b.createElement("div"), q = hb.childNodes, r;
                b === c ? hb.appendChild(p) : U(b).appendChild(p), p.innerHTML = n[1] + l + n[2];
                while (o--)p = p.lastChild;
                if (!f.support.tbody) {
                    var s = $.test(l), t = m === "table" && !s ? p.firstChild && p.firstChild.childNodes : n[1] === "<table>" && !s ? p.childNodes : [];
                    for (i = t.length - 1; i >= 0; --i)f.nodeName(t[i], "tbody") && !t[i].childNodes.length && t[i].parentNode.removeChild(t[i])
                }
                !f.support.leadingWhitespace && X.test(l) && p.insertBefore(b.createTextNode(X.exec(l)[0]), p.firstChild), l = p.childNodes, p && (p.parentNode.removeChild(p), q.length > 0 && (r = q[q.length - 1], r && r.parentNode && r.parentNode.removeChild(r)))
            }
            var u;
            if (!f.support.appendChecked)if (l[0] && typeof (u = l.length) == "number")for (i = 0; i < u; i++)nb(l[i]); else nb(l);
            l.nodeType ? j.push(l) : j = f.merge(j, l)
        }
        if (d) {
            g = function (a) {
                return!a.type || eb.test(a.type)
            };
            for (k = 0; j[k]; k++) {
                h = j[k];
                if (e && f.nodeName(h, "script") && (!h.type || eb.test(h.type)))e.push(h.parentNode ? h.parentNode.removeChild(h) : h); else {
                    if (h.nodeType === 1) {
                        var v = f.grep(h.getElementsByTagName("script"), g);
                        j.splice.apply(j, [k + 1, 0].concat(v))
                    }
                    d.appendChild(h)
                }
            }
        }
        return j
    }, cleanData: function (a) {
        var b, c, d = f.cache, e = f.event.special, g = f.support.deleteExpando;
        for (var h = 0, i; (i = a[h]) != null; h++) {
            if (i.nodeName && f.noData[i.nodeName.toLowerCase()])continue;
            c = i[f.expando];
            if (c) {
                b = d[c];
                if (b && b.events) {
                    for (var j in b.events)e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle);
                    b.handle && (b.handle.elem = null)
                }
                g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando), delete d[c]
            }
        }
    }});
    var pb = /alpha\([^)]*\)/i, qb = /opacity=([^)]*)/, rb = /([A-Z]|^ms)/g, sb = /^[\-+]?(?:\d*\.)?\d+$/i, tb = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i, ub = /^([\-+])=([\-+.\de]+)/, vb = /^margin/, wb = {position: "absolute", visibility: "hidden", display: "block"}, xb = ["Top", "Right", "Bottom", "Left"], yb, zb, Ab;
    f.fn.css = function (a, c) {
        return f.access(this, function (a, c, d) {
            return d !== b ? f.style(a, c, d) : f.css(a, c)
        }, a, c, arguments.length > 1)
    }, f.extend({cssHooks: {opacity: {get: function (a, b) {
        if (b) {
            var c = yb(a, "opacity");
            return c === "" ? "1" : c
        }
        return a.style.opacity
    }}}, cssNumber: {fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {"float": f.support.cssFloat ? "cssFloat" : "styleFloat"}, style: function (a, c, d, e) {
        if (!a || a.nodeType === 3 || a.nodeType === 8 || !a.style)return;
        var g, h, i = f.camelCase(c), j = a.style, k = f.cssHooks[i];
        c = f.cssProps[i] || i;
        if (d === b)return k && "get"in k && (g = k.get(a, !1, e)) !== b ? g : j[c];
        h = typeof d, h === "string" && (g = ub.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = "number");
        if (d == null || h === "number" && isNaN(d))return;
        h === "number" && !f.cssNumber[i] && (d += "px");
        if (!k || !("set"in k) || (d = k.set(a, d)) !== b)try {
            j[c] = d
        } catch (l) {
        }
    }, css: function (a, c, d) {
        var e, g;
        c = f.camelCase(c), g = f.cssHooks[c], c = f.cssProps[c] || c, c === "cssFloat" && (c = "float");
        if (g && "get"in g && (e = g.get(a, !0, d)) !== b)return e;
        if (yb)return yb(a, c)
    }, swap: function (a, b, c) {
        var d = {}, e, f;
        for (f in b)d[f] = a.style[f], a.style[f] = b[f];
        e = c.call(a);
        for (f in b)a.style[f] = d[f];
        return e
    }}), f.curCSS = f.css, c.defaultView && c.defaultView.getComputedStyle && (zb = function (a, b) {
        var c, d, e, g, h = a.style;
        return b = b.replace(rb, "-$1").toLowerCase(), (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), c === "" && !f.contains(a.ownerDocument.documentElement, a) && (c = f.style(a, b))), !f.support.pixelMargin && e && vb.test(b) && tb.test(c) && (g = h.width, h.width = c, c = e.width, h.width = g), c
    }), c.documentElement.currentStyle && (Ab = function (a, b) {
        var c, d, e, f = a.currentStyle && a.currentStyle[b], g = a.style;
        return f == null && g && (e = g[b]) && (f = e), tb.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = b === "fontSize" ? "1em" : f, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d)), f === "" ? "auto" : f
    }), yb = zb || Ab, f.each(["height", "width"], function (a, b) {
        f.cssHooks[b] = {get: function (a, c, d) {
            if (c)return a.offsetWidth !== 0 ? Bb(a, b, d) : f.swap(a, wb, function () {
                return Bb(a, b, d)
            })
        }, set: function (a, b) {
            return sb.test(b) ? b + "px" : b
        }}
    }), f.support.opacity || (f.cssHooks.opacity = {get: function (a, b) {
        return qb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
    }, set: function (a, b) {
        var c = a.style, d = a.currentStyle, e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "", g = d && d.filter || c.filter || "";
        c.zoom = 1;
        if (b >= 1 && f.trim(g.replace(pb, "")) === "") {
            c.removeAttribute("filter");
            if (d && !d.filter)return
        }
        c.filter = pb.test(g) ? g.replace(pb, e) : g + " " + e
    }}), f(function () {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {get: function (a, b) {
            return f.swap(a, {display: "inline-block"}, function () {
                return b ? yb(a, "margin-right") : a.style.marginRight
            })
        }})
    }), f.expr && f.expr.filters && (f.expr.filters.hidden = function (a) {
        var b = a.offsetWidth, c = a.offsetHeight;
        return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, "display")) === "none"
    }, f.expr.filters.visible = function (a) {
        return!f.expr.filters.hidden(a)
    }), f.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        f.cssHooks[a + b] = {expand: function (c) {
            var d, e = typeof c == "string" ? c.split(" ") : [c], f = {};
            for (d = 0; d < 4; d++)f[a + xb[d] + b] = e[d] || e[d - 2] || e[0];
            return f
        }}
    });
    var Cb = /%20/g, Db = /\[\]$/, Eb = /\r?\n/g, Fb = /#.*$/, Gb = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, Hb = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, Ib = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, Jb = /^(?:GET|HEAD)$/, Kb = /^\/\//, Lb = /\?/, Mb = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, Nb = /^(?:select|textarea)/i, Ob = /\s+/, Pb = /([?&])_=[^&]*/, Qb = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, Rb = f.fn.load, Sb = {}, Tb = {}, Ub, Vb, Wb = ["*/"] + ["*"];
    try {
        Ub = e.href
    } catch (Xb) {
        Ub = c.createElement("a"), Ub.href = "", Ub = Ub.href
    }
    Vb = Qb.exec(Ub.toLowerCase()) || [], f.fn.extend({load: function (a, c, d) {
        if (typeof a != "string" && Rb)return Rb.apply(this, arguments);
        if (!this.length)return this;
        var e = a.indexOf(" ");
        if (e >= 0) {
            var g = a.slice(e, a.length);
            a = a.slice(0, e)
        }
        var h = "GET";
        c && (f.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional), h = "POST"));
        var i = this;
        return f.ajax({url: a, type: h, dataType: "html", data: c, complete: function (a, b, c) {
            c = a.responseText, a.isResolved() && (a.done(function (a) {
                c = a
            }), i.html(g ? f("<div>").append(c.replace(Mb, "")).find(g) : c)), d && i.each(d, [c, b, a])
        }}), this
    }, serialize: function () {
        return f.param(this.serializeArray())
    }, serializeArray: function () {
        return this.map(function () {
            return this.elements ? f.makeArray(this.elements) : this
        }).filter(function () {
            return this.name && !this.disabled && (this.checked || Nb.test(this.nodeName) || Hb.test(this.type))
        }).map(function (a, b) {
            var c = f(this).val();
            return c == null ? null : f.isArray(c) ? f.map(c, function (a, c) {
                return{name: b.name, value: a.replace(Eb, "\r\n")}
            }) : {name: b.name, value: c.replace(Eb, "\r\n")}
        }).get()
    }}), f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
        f.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), f.each(["get", "post"], function (a, c) {
        f[c] = function (a, d, e, g) {
            return f.isFunction(d) && (g = g || e, e = d, d = b), f.ajax({type: c, url: a, data: d, success: e, dataType: g})
        }
    }), f.extend({getScript: function (a, c) {
        return f.get(a, b, c, "script")
    }, getJSON: function (a, b, c) {
        return f.get(a, b, c, "json")
    }, ajaxSetup: function (a, b) {
        return b ? $b(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings), $b(a, b), a
    }, ajaxSettings: {url: Ub, isLocal: Ib.test(Vb[1]), global: !0, type: "GET", contentType: "application/x-www-form-urlencoded; charset=UTF-8", processData: !0, async: !0, accepts: {xml: "application/xml, text/xml", html: "text/html", text: "text/plain", json: "application/json, text/javascript", "*": Wb}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML", text: "responseText"}, converters: {"* text": a.String, "text html": !0, "text json": f.parseJSON, "text xml": f.parseXML}, flatOptions: {context: !0, url: !0}}, ajaxPrefilter: Yb(Sb), ajaxTransport: Yb(Tb), ajax: function (a, c) {
        function w(a, c, l, m) {
            if (s === 2)return;
            s = 2, q && clearTimeout(q), p = b, n = m || "", v.readyState = a > 0 ? 4 : 0;
            var o, r, u, w = c, x = l ? ac(d, v, l) : b, y, z;
            if (a >= 200 && a < 300 || a === 304) {
                if (d.ifModified) {
                    if (y = v.getResponseHeader("Last-Modified"))f.lastModified[k] = y;
                    if (z = v.getResponseHeader("Etag"))f.etag[k] = z
                }
                if (a === 304)w = "notmodified", o = !0; else try {
                    r = bc(d, x), w = "success", o = !0
                } catch (A) {
                    w = "parsererror", u = A
                }
            } else {
                u = w;
                if (!w || a)w = "error", a < 0 && (a = 0)
            }
            v.status = a, v.statusText = "" + (c || w), o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]), v.statusCode(j), j = b, t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]), i.fireWith(e, [v, w]), t && (g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop"))
        }

        typeof a == "object" && (c = a, a = b), c = c || {};
        var d = f.ajaxSetup({}, c), e = d.context || d, g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event, h = f.Deferred(), i = f.Callbacks("once memory"), j = d.statusCode || {}, k, l = {}, m = {}, n, o, p, q, r, s = 0, t, u, v = {readyState: 0, setRequestHeader: function (a, b) {
            if (!s) {
                var c = a.toLowerCase();
                a = m[c] = m[c] || a, l[a] = b
            }
            return this
        }, getAllResponseHeaders: function () {
            return s === 2 ? n : null
        }, getResponseHeader: function (a) {
            var c;
            if (s === 2) {
                if (!o) {
                    o = {};
                    while (c = Gb.exec(n))o[c[1].toLowerCase()] = c[2]
                }
                c = o[a.toLowerCase()]
            }
            return c === b ? null : c
        }, overrideMimeType: function (a) {
            return s || (d.mimeType = a), this
        }, abort: function (a) {
            return a = a || "abort", p && p.abort(a), w(0, a), this
        }};
        h.promise(v), v.success = v.done, v.error = v.fail, v.complete = i.add, v.statusCode = function (a) {
            if (a) {
                var b;
                if (s < 2)for (b in a)j[b] = [j[b], a[b]]; else b = a[v.status], v.then(b, b)
            }
            return this
        }, d.url = ((a || d.url) + "").replace(Fb, "").replace(Kb, Vb[1] + "//"), d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(Ob), d.crossDomain == null && (r = Qb.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == Vb[1] && r[2] == Vb[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (Vb[3] || (Vb[1] === "http:" ? 80 : 443)))), d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)), Zb(Sb, d, c, v);
        if (s === 2)return!1;
        t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !Jb.test(d.type), t && f.active++ === 0 && f.event.trigger("ajaxStart");
        if (!d.hasContent) {
            d.data && (d.url += (Lb.test(d.url) ? "&" : "?") + d.data, delete d.data), k = d.url;
            if (d.cache === !1) {
                var x = f.now(), y = d.url.replace(Pb, "$1_=" + x);
                d.url = y + (y === d.url ? (Lb.test(d.url) ? "&" : "?") + "_=" + x : "")
            }
        }
        (d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType), d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])), v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + Wb + "; q=0.01" : "") : d.accepts["*"]);
        for (u in d.headers)v.setRequestHeader(u, d.headers[u]);
        if (!d.beforeSend || d.beforeSend.call(e, v, d) !== !1 && s !== 2) {
            for (u in{success: 1, error: 1, complete: 1})v[u](d[u]);
            p = Zb(Tb, d, c, v);
            if (!p)w(-1, "No Transport"); else {
                v.readyState = 1, t && g.trigger("ajaxSend", [v, d]), d.async && d.timeout > 0 && (q = setTimeout(function () {
                    v.abort("timeout")
                }, d.timeout));
                try {
                    s = 1, p.send(l, w)
                } catch (z) {
                    if (!(s < 2))throw z;
                    w(-1, z)
                }
            }
            return v
        }
        return v.abort(), !1
    }, param: function (a, c) {
        var d = [], e = function (a, b) {
            b = f.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        c === b && (c = f.ajaxSettings.traditional);
        if (f.isArray(a) || a.jquery && !f.isPlainObject(a))f.each(a, function () {
            e(this.name, this.value)
        }); else for (var g in a)_b(g, a[g], c, e);
        return d.join("&").replace(Cb, "+")
    }}), f.extend({active: 0, lastModified: {}, etag: {}});
    var cc = f.now(), dc = /(\=)\?(&|$)|\?\?/i;
    f.ajaxSetup({jsonp: "callback", jsonpCallback: function () {
        return f.expando + "_" + cc++
    }}), f.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e = typeof b.data == "string" && /^application\/x\-www\-form\-urlencoded/.test(b.contentType);
        if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (dc.test(b.url) || e && dc.test(b.data))) {
            var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, i = a[h], j = b.url, k = b.data, l = "$1" + h + "$2";
            return b.jsonp !== !1 && (j = j.replace(dc, l), b.url === j && (e && (k = k.replace(dc, l)), b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))), b.url = j, b.data = k, a[h] = function (a) {
                g = [a]
            }, d.always(function () {
                a[h] = i, g && f.isFunction(i) && a[h](g[0])
            }), b.converters["script json"] = function () {
                return g || f.error(h + " was not called"), g[0]
            }, b.dataTypes[0] = "json", "script"
        }
    }), f.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /javascript|ecmascript/}, converters: {"text script": function (a) {
        return f.globalEval(a), a
    }}}), f.ajaxPrefilter("script", function (a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), f.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
            return{send: function (f, g) {
                d = c.createElement("script"), d.async = "async", a.scriptCharset && (d.charset = a.scriptCharset), d.src = a.url, d.onload = d.onreadystatechange = function (a, c) {
                    if (c || !d.readyState || /loaded|complete/.test(d.readyState))d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, c || g(200, "success")
                }, e.insertBefore(d, e.firstChild)
            }, abort: function () {
                d && d.onload(0, 1)
            }}
        }
    });
    var ec = a.ActiveXObject ? function () {
        for (var a in gc)gc[a](0, 1)
    } : !1, fc = 0, gc;
    f.ajaxSettings.xhr = a.ActiveXObject ? function () {
        return!this.isLocal && hc() || ic()
    } : hc, function (a) {
        f.extend(f.support, {ajax: !!a, cors: !!a && "withCredentials"in a})
    }(f.ajaxSettings.xhr()), f.support.ajax && f.ajaxTransport(function (c) {
        if (!c.crossDomain || f.support.cors) {
            var d;
            return{send: function (e, g) {
                var h = c.xhr(), i, j;
                c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
                if (c.xhrFields)for (j in c.xhrFields)h[j] = c.xhrFields[j];
                c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                try {
                    for (j in e)h.setRequestHeader(j, e[j])
                } catch (k) {
                }
                h.send(c.hasContent && c.data || null), d = function (a, e) {
                    var j, k, l, m, n;
                    try {
                        if (d && (e || h.readyState === 4)) {
                            d = b, i && (h.onreadystatechange = f.noop, ec && delete gc[i]);
                            if (e)h.readyState !== 4 && h.abort(); else {
                                j = h.status, l = h.getAllResponseHeaders(), m = {}, n = h.responseXML, n && n.documentElement && (m.xml = n);
                                try {
                                    m.text = h.responseText
                                } catch (a) {
                                }
                                try {
                                    k = h.statusText
                                } catch (o) {
                                    k = ""
                                }
                                !j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204)
                            }
                        }
                    } catch (p) {
                        e || g(-1, p)
                    }
                    m && g(j, k, m, l)
                }, !c.async || h.readyState === 4 ? d() : (i = ++fc, ec && (gc || (gc = {}, f(a).unload(ec)), gc[i] = d), h.onreadystatechange = d)
            }, abort: function () {
                d && d(0, 1)
            }}
        }
    });
    var jc = {}, kc, lc, mc = /^(?:toggle|show|hide)$/, nc = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, oc, pc = [
        ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
        ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
        ["opacity"]
    ], qc;
    f.fn.extend({show: function (a, b, c) {
        var d, e;
        if (a || a === 0)return this.animate(tc("show", 3), a, b, c);
        for (var g = 0, h = this.length; g < h; g++)d = this[g], d.style && (e = d.style.display, !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), (e === "" && f.css(d, "display") === "none" || !f.contains(d.ownerDocument.documentElement, d)) && f._data(d, "olddisplay", uc(d.nodeName)));
        for (g = 0; g < h; g++) {
            d = this[g];
            if (d.style) {
                e = d.style.display;
                if (e === "" || e === "none")d.style.display = f._data(d, "olddisplay") || ""
            }
        }
        return this
    }, hide: function (a, b, c) {
        if (a || a === 0)return this.animate(tc("hide", 3), a, b, c);
        var d, e, g = 0, h = this.length;
        for (; g < h; g++)d = this[g], d.style && (e = f.css(d, "display"), e !== "none" && !f._data(d, "olddisplay") && f._data(d, "olddisplay", e));
        for (g = 0; g < h; g++)this[g].style && (this[g].style.display = "none");
        return this
    }, _toggle: f.fn.toggle, toggle: function (a, b, c) {
        var d = typeof a == "boolean";
        return f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function () {
            var b = d ? a : f(this).is(":hidden");
            f(this)[b ? "show" : "hide"]()
        }) : this.animate(tc("toggle", 3), a, b, c), this
    }, fadeTo: function (a, b, c, d) {
        return this.filter(":hidden").css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
    }, animate: function (a, b, c, d) {
        function g() {
            e.queue === !1 && f._mark(this);
            var b = f.extend({}, e), c = this.nodeType === 1, d = c && f(this).is(":hidden"), g, h, i, j, k, l, m, n, o, p, q;
            b.animatedProperties = {};
            for (i in a) {
                g = f.camelCase(i), i !== g && (a[g] = a[i], delete a[i]);
                if ((k = f.cssHooks[g]) && "expand"in k) {
                    l = k.expand(a[g]), delete a[g];
                    for (i in l)i in a || (a[i] = l[i])
                }
            }
            for (g in a) {
                h = a[g], f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
                if (h === "hide" && d || h === "show" && !d)return b.complete.call(this);
                c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (!f.support.inlineBlockNeedsLayout || uc(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
            }
            b.overflow != null && (this.style.overflow = "hidden");
            for (i in a)j = new f.fx(this, b, i), h = a[i], mc.test(h) ? (q = f._data(this, "toggle" + i) || (h === "toggle" ? d ? "show" : "hide" : 0), q ? (f._data(this, "toggle" + i, q === "show" ? "hide" : "show"), j[q]()) : j[h]()) : (m = nc.exec(h), n = j.cur(), m ? (o = parseFloat(m[2]), p = m[3] || (f.cssNumber[i] ? "" : "px"), p !== "px" && (f.style(this, i, (o || 1) + p), n = (o || 1) / j.cur() * n, f.style(this, i, n + p)), m[1] && (o = (m[1] === "-=" ? -1 : 1) * o + n), j.custom(n, o, p)) : j.custom(n, h, ""));
            return!0
        }

        var e = f.speed(b, c, d);
        return f.isEmptyObject(a) ? this.each(e.complete, [!1]) : (a = f.extend({}, a), e.queue === !1 ? this.each(g) : this.queue(e.queue, g))
    }, stop: function (a, c, d) {
        return typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function () {
            function h(a, b, c) {
                var e = b[c];
                f.removeData(a, c, !0), e.stop(d)
            }

            var b, c = !1, e = f.timers, g = f._data(this);
            d || f._unmark(!0, this);
            if (a == null)for (b in g)g[b] && g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b); else g[b = a + ".run"] && g[b].stop && h(this, g, b);
            for (b = e.length; b--;)e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(), c = !0, e.splice(b, 1));
            (!d || !c) && f.dequeue(this, a)
        })
    }}), f.each({slideDown: tc("show", 1), slideUp: tc("hide", 1), slideToggle: tc("toggle", 1), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (a, b) {
        f.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), f.extend({speed: function (a, b, c) {
        var d = a && typeof a == "object" ? f.extend({}, a) : {complete: c || !c && b || f.isFunction(a) && a, duration: a, easing: c && b || b && !f.isFunction(b) && b};
        d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default;
        if (d.queue == null || d.queue === !0)d.queue = "fx";
        return d.old = d.complete, d.complete = function (a) {
            f.isFunction(d.old) && d.old.call(this), d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this)
        }, d
    }, easing: {linear: function (a) {
        return a
    }, swing: function (a) {
        return-Math.cos(a * Math.PI) / 2 + .5
    }}, timers: [], fx: function (a, b, c) {
        this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {}
    }}), f.fx.prototype = {update: function () {
        this.options.step && this.options.step.call(this.elem, this.now, this), (f.fx.step[this.prop] || f.fx.step._default)(this)
    }, cur: function () {
        if (this.elem[this.prop] == null || !!this.elem.style && this.elem.style[this.prop] != null) {
            var a, b = f.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
        }
        return this.elem[this.prop]
    }, custom: function (a, c, d) {
        function h(a) {
            return e.step(a)
        }

        var e = this, g = f.fx;
        this.startTime = qc || rc(), this.end = c, this.now = this.start = a, this.pos = this.state = 0, this.unit = d || this.unit || (f.cssNumber[this.prop] ? "" : "px"), h.queue = this.options.queue, h.elem = this.elem, h.saveState = function () {
            f._data(e.elem, "fxshow" + e.prop) === b && (e.options.hide ? f._data(e.elem, "fxshow" + e.prop, e.start) : e.options.show && f._data(e.elem, "fxshow" + e.prop, e.end))
        }, h() && f.timers.push(h) && !oc && (oc = setInterval(g.tick, g.interval))
    }, show: function () {
        var a = f._data(this.elem, "fxshow" + this.prop);
        this.options.orig[this.prop] = a || f.style(this.elem, this.prop), this.options.show = !0, a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), f(this.elem).show()
    }, hide: function () {
        this.options.orig[this.prop] = f._data(this.elem, "fxshow" + this.prop) || f.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
    }, step: function (a) {
        var b, c, d, e = qc || rc(), g = !0, h = this.elem, i = this.options;
        if (a || e >= i.duration + this.startTime) {
            this.now = this.end, this.pos = this.state = 1, this.update(), i.animatedProperties[this.prop] = !0;
            for (b in i.animatedProperties)i.animatedProperties[b] !== !0 && (g = !1);
            if (g) {
                i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function (a, b) {
                    h.style["overflow" + b] = i.overflow[a]
                }), i.hide && f(h).hide();
                if (i.hide || i.show)for (b in i.animatedProperties)f.style(h, b, i.orig[b]), f.removeData(h, "fxshow" + b, !0), f.removeData(h, "toggle" + b, !0);
                d = i.complete, d && (i.complete = !1, d.call(h))
            }
            return!1
        }
        return i.duration == Infinity ? this.now = e : (c = e - this.startTime, this.state = c / i.duration, this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0
    }}, f.extend(f.fx, {tick: function () {
        var a, b = f.timers, c = 0;
        for (; c < b.length; c++)a = b[c], !a() && b[c] === a && b.splice(c--, 1);
        b.length || f.fx.stop()
    }, interval: 13, stop: function () {
        clearInterval(oc), oc = null
    }, speeds: {slow: 600, fast: 200, _default: 400}, step: {opacity: function (a) {
        f.style(a.elem, "opacity", a.now)
    }, _default: function (a) {
        a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
    }}}), f.each(pc.concat.apply([], pc), function (a, b) {
        b.indexOf("margin") && (f.fx.step[b] = function (a) {
            f.style(a.elem, b, Math.max(0, a.now) + a.unit)
        })
    }), f.expr && f.expr.filters && (f.expr.filters.animated = function (a) {
        return f.grep(f.timers, function (b) {
            return a === b.elem
        }).length
    });
    var vc, wc = /^t(?:able|d|h)$/i, xc = /^(?:body|html)$/i;
    "getBoundingClientRect"in c.documentElement ? vc = function (a, b, c, d) {
        try {
            d = a.getBoundingClientRect()
        } catch (e) {
        }
        if (!d || !f.contains(c, a))return d ? {top: d.top, left: d.left} : {top: 0, left: 0};
        var g = b.body, h = yc(b), i = c.clientTop || g.clientTop || 0, j = c.clientLeft || g.clientLeft || 0, k = h.pageYOffset || f.support.boxModel && c.scrollTop || g.scrollTop, l = h.pageXOffset || f.support.boxModel && c.scrollLeft || g.scrollLeft, m = d.top + k - i, n = d.left + l - j;
        return{top: m, left: n}
    } : vc = function (a, b, c) {
        var d, e = a.offsetParent, g = a, h = b.body, i = b.defaultView, j = i ? i.getComputedStyle(a, null) : a.currentStyle, k = a.offsetTop, l = a.offsetLeft;
        while ((a = a.parentNode) && a !== h && a !== c) {
            if (f.support.fixedPosition && j.position === "fixed")break;
            d = i ? i.getComputedStyle(a, null) : a.currentStyle, k -= a.scrollTop, l -= a.scrollLeft, a === e && (k += a.offsetTop, l += a.offsetLeft, f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !wc.test(a.nodeName)) && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), g = e, e = a.offsetParent), f.support.subtractsBorderForOverflowNotVisible && d.overflow !== "visible" && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), j = d
        }
        if (j.position === "relative" || j.position === "static")k += h.offsetTop, l += h.offsetLeft;
        return f.support.fixedPosition && j.position === "fixed" && (k += Math.max(c.scrollTop, h.scrollTop), l += Math.max(c.scrollLeft, h.scrollLeft)), {top: k, left: l}
    }, f.fn.offset = function (a) {
        if (arguments.length)return a === b ? this : this.each(function (b) {
            f.offset.setOffset(this, a, b)
        });
        var c = this[0], d = c && c.ownerDocument;
        return d ? c === d.body ? f.offset.bodyOffset(c) : vc(c, d, d.documentElement) : null
    }, f.offset = {bodyOffset: function (a) {
        var b = a.offsetTop, c = a.offsetLeft;
        return f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0), {top: b, left: c}
    }, setOffset: function (a, b, c) {
        var d = f.css(a, "position");
        d === "static" && (a.style.position = "relative");
        var e = f(a), g = e.offset(), h = f.css(a, "top"), i = f.css(a, "left"), j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1, k = {}, l = {}, m, n;
        j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0), f.isFunction(b) && (b = b.call(a, c, g)), b.top != null && (k.top = b.top - g.top + m), b.left != null && (k.left = b.left - g.left + n), "using"in b ? b.using.call(a, k) : e.css(k)
    }}, f.fn.extend({position: function () {
        if (!this[0])return null;
        var a = this[0], b = this.offsetParent(), c = this.offset(), d = xc.test(b[0].nodeName) ? {top: 0, left: 0} : b.offset();
        return c.top -= parseFloat(f.css(a, "marginTop")) || 0, c.left -= parseFloat(f.css(a, "marginLeft")) || 0, d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0, {top: c.top - d.top, left: c.left - d.left}
    }, offsetParent: function () {
        return this.map(function () {
            var a = this.offsetParent || c.body;
            while (a && !xc.test(a.nodeName) && f.css(a, "position") === "static")a = a.offsetParent;
            return a
        })
    }}), f.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, c) {
        var d = /Y/.test(c);
        f.fn[a] = function (e) {
            return f.access(this, function (a, e, g) {
                var h = yc(a);
                if (g === b)return h ? c in h ? h[c] : f.support.boxModel && h.document.documentElement[e] || h.document.body[e] : a[e];
                h ? h.scrollTo(d ? f(h).scrollLeft() : g, d ? g : f(h).scrollTop()) : a[e] = g
            }, a, e, arguments.length, null)
        }
    }), f.each({Height: "height", Width: "width"}, function (a, c) {
        var d = "client" + a, e = "scroll" + a, g = "offset" + a;
        f.fn["inner" + a] = function () {
            var a = this[0];
            return a ? a.style ? parseFloat(f.css(a, c, "padding")) : this[c]() : null
        }, f.fn["outer" + a] = function (a) {
            var b = this[0];
            return b ? b.style ? parseFloat(f.css(b, c, a ? "margin" : "border")) : this[c]() : null
        }, f.fn[c] = function (a) {
            return f.access(this, function (a, c, h) {
                var i, j, k, l;
                if (f.isWindow(a))return i = a.document, j = i.documentElement[d], f.support.boxModel && j || i.body && i.body[d] || j;
                if (a.nodeType === 9)return i = a.documentElement, i[d] >= i[e] ? i[d] : Math.max(a.body[e], i[e], a.body[g], i[g]);
                if (h === b)return k = f.css(a, c), l = parseFloat(k), f.isNumeric(l) ? l : k;
                f(a).css(c, h)
            }, c, a, arguments.length, null)
        }
    }), a.jQuery = a.$ = f, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return f
    })
}(window), function (a, b) {
    var c;
    a.rails = c = {linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]", inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]", formSubmitSelector: "form", formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not(button[type])", disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]", enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled", requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])", fileInputSelector: "input:file", linkDisableSelector: "a[data-disable-with]", CSRFProtection: function (b) {
        var c = a('meta[name="csrf-token"]').attr("content");
        c && b.setRequestHeader("X-CSRF-Token", c)
    }, fire: function (b, c, d) {
        var e = a.Event(c);
        return b.trigger(e, d), e.result !== !1
    }, confirm: function (a) {
        return confirm(a)
    }, ajax: function (b) {
        return a.ajax(b)
    }, href: function (a) {
        return a.attr("href")
    }, handleRemote: function (d) {
        var e, f, g, h, i, j;
        if (c.fire(d, "ajax:before")) {
            h = d.data("cross-domain") || null, i = d.data("type") || a.ajaxSettings && a.ajaxSettings.dataType;
            if (d.is("form")) {
                e = d.attr("method"), f = d.attr("action"), g = d.serializeArray();
                var k = d.data("ujs:submit-button");
                k && (g.push(k), d.data("ujs:submit-button", null))
            } else d.is(c.inputChangeSelector) ? (e = d.data("method"), f = d.data("url"), g = d.serialize(), d.data("params") && (g = g + "&" + d.data("params"))) : (e = d.data("method"), f = c.href(d), g = d.data("params") || null);
            return j = {type: e || "GET", data: g, dataType: i, crossDomain: h, beforeSend: function (a, e) {
                return e.dataType === b && a.setRequestHeader("accept", "*/*;q=0.5, " + e.accepts.script), c.fire(d, "ajax:beforeSend", [a, e])
            }, success: function (a, b, c) {
                d.trigger("ajax:success", [a, b, c])
            }, complete: function (a, b) {
                d.trigger("ajax:complete", [a, b])
            }, error: function (a, b, c) {
                d.trigger("ajax:error", [a, b, c])
            }}, f && (j.url = f), c.ajax(j)
        }
        return!1
    }, handleMethod: function (d) {
        var e = c.href(d), f = d.data("method"), g = d.attr("target"), h = a("meta[name=csrf-token]").attr("content"), i = a("meta[name=csrf-param]").attr("content"), j = a('<form method="post" action="' + e + '"></form>'), k = '<input name="_method" value="' + f + '" type="hidden" />';
        i !== b &&
            h !== b && (k += '<input name="' + i + '" value="' + h + '" type="hidden" />'), g && j.attr("target", g), j.hide().append(k).appendTo("body"), j.submit()
    }, disableFormElements: function (b) {
        b.find(c.disableSelector).each(function () {
            var b = a(this), c = b.is("button") ? "html" : "val";
            b.data("ujs:enable-with", b[c]()), b[c](b.data("disable-with")), b.prop("disabled", !0)
        })
    }, enableFormElements: function (b) {
        b.find(c.enableSelector).each(function () {
            var b = a(this), c = b.is("button") ? "html" : "val";
            b.data("ujs:enable-with") && b[c](b.data("ujs:enable-with")), b.prop("disabled", !1)
        })
    }, allowAction: function (a) {
        var b = a.data("confirm"), d = !1, e;
        return b ? (c.fire(a, "confirm") && (d = c.confirm(b), e = c.fire(a, "confirm:complete", [d])), d && e) : !0
    }, blankInputs: function (b, c, d) {
        var e = a(), f, g = c || "input,textarea";
        return b.find(g).each(function () {
            f = a(this);
            if (d ? f.val() : !f.val())e = e.add(f)
        }), e.length ? e : !1
    }, nonBlankInputs: function (a, b) {
        return c.blankInputs(a, b, !0)
    }, stopEverything: function (b) {
        return a(b.target).trigger("ujs:everythingStopped"), b.stopImmediatePropagation(), !1
    }, callFormSubmitBindings: function (c, d) {
        var e = c.data("events"), f = !0;
        return e !== b && e.submit !== b && a.each(e.submit, function (a, b) {
            if (typeof b.handler == "function")return f = b.handler(d)
        }), f
    }, disableElement: function (a) {
        a.data("ujs:enable-with", a.html()), a.html(a.data("disable-with")), a.bind("click.railsDisable", function (a) {
            return c.stopEverything(a)
        })
    }, enableElement: function (a) {
        a.data("ujs:enable-with") !== b && (a.html(a.data("ujs:enable-with")), a.data("ujs:enable-with", !1)), a.unbind("click.railsDisable")
    }}, a.ajaxPrefilter(function (a, b, d) {
        a.crossDomain || c.CSRFProtection(d)
    }), a(document).delegate(c.linkDisableSelector, "ajax:complete", function () {
        c.enableElement(a(this))
    }), a(document).delegate(c.linkClickSelector, "click.rails", function (d) {
        var e = a(this), f = e.data("method"), g = e.data("params");
        if (!c.allowAction(e))return c.stopEverything(d);
        e.is(c.linkDisableSelector) && c.disableElement(e);
        if (e.data("remote") !== b)return(d.metaKey || d.ctrlKey) && (!f || f === "GET") && !g ? !0 : (c.handleRemote(e) === !1 && c.enableElement(e), !1);
        if (e.data("method"))return c.handleMethod(e), !1
    }), a(document).delegate(c.inputChangeSelector, "change.rails", function (b) {
        var d = a(this);
        return c.allowAction(d) ? (c.handleRemote(d), !1) : c.stopEverything(b)
    }), a(document).delegate(c.formSubmitSelector, "submit.rails", function (d) {
        var e = a(this), f = e.data("remote") !== b, g = c.blankInputs(e, c.requiredInputSelector), h = c.nonBlankInputs(e, c.fileInputSelector);
        if (!c.allowAction(e))return c.stopEverything(d);
        if (g && e.attr("novalidate") == b && c.fire(e, "ajax:aborted:required", [g]))return c.stopEverything(d);
        if (f)return h ? c.fire(e, "ajax:aborted:file", [h]) : !a.support.submitBubbles && a().jquery < "1.7" && c.callFormSubmitBindings(e, d) === !1 ? c.stopEverything(d) : (c.handleRemote(e), !1);
        setTimeout(function () {
            c.disableFormElements(e)
        }, 13)
    }), a(document).delegate(c.formInputClickSelector, "click.rails", function (b) {
        var d = a(this);
        if (!c.allowAction(d))return c.stopEverything(b);
        var e = d.attr("name"), f = e ? {name: e, value: d.val()} : null;
        d.closest("form").data("ujs:submit-button", f)
    }), a(document).delegate(c.formSubmitSelector, "ajax:beforeSend.rails", function (b) {
        this == b.target && c.disableFormElements(a(this))
    }), a(document).delegate(c.formSubmitSelector, "ajax:complete.rails", function (b) {
        this == b.target && c.enableFormElements(a(this))
    })
}(jQuery), function (a) {
    if (navigator.platform.indexOf("iPhone") != -1 || navigator.platform.indexOf("iPod") != -1 || navigator.platform.indexOf("iPad") != -1)a.browser.ios = !0;
    a.fn.console = function (b) {
        function y() {
            o = 0, p = "", t = 0, P(), k = a('<div class="jquery-console-prompt-box"></div>');
            var b = a('<span class="jquery-console-prompt-label"></span>'), c = x.continuedPrompt ? n : m;
            k.append(b.text(c).show()), b.html(b.html().replace(" ", "&nbsp;")), l = a('<span class="jquery-console-prompt"></span>'), k.append(l), i.append(k), bb()
        }

        function z(a) {
            j.consoleInsert(a)
        }

        function A(a) {
            return(a.keyCode == c.tab || a.keyCode == 192) && a.altKey
        }

        function B(a) {
            if (s.length == 0)return;
            t += a, t < 0 ? t = s.length : t > s.length && (t = 0);
            var c = p;
            t == 0 ? p = q : p = s[t - 1], b.historyPreserveColumn ? p.length < o + 1 ? o = p.length : o == 0 && (o = p.length) : o = p.length, bb()
        }

        function C() {
            B(-1)
        }

        function D() {
            B(1)
        }

        function E(a) {
            s.push(a), q = ""
        }

        function F() {
            return o < p.length ? (p = p.substring(0, o) + p.substring(o + 1), q = p, !0) : !1
        }

        function G() {
            T(-1) && (F(), bb())
        }

        function H() {
            F() && bb()
        }

        function I() {
            while (F())bb()
        }

        function J() {
            while (o < p.length && !_(p[o]))F(), bb();
            while (o < p.length && _(p[o]))F(), bb()
        }

        function K() {
            var a = p;
            if (typeof b.commandValidate == "function") {
                var c = b.commandValidate(a);
                c == 1 || c == 0 ? c && N() : Q(c, "jquery-console-message-error")
            } else N()
        }

        function L() {
            h.scrollTop(i[0].scrollHeight)
        }

        function M() {
            typeof b.cancelHandle == "function" && b.cancelHandle()
        }

        function N() {
            if (typeof b.commandHandle == "function") {
                O(), E(p);
                var c = p;
                x.continuedPrompt ? r ? r += "\n" + p : r = p : r = undefined, r && (c = r);
                var d = function (a) {
                    Q(a)
                }, e = function (a) {
                    Q(a, "jquery-console-message-error")
                }, f = function () {
                    Q()
                }, g = function (a, b) {
                    Q(a, "jquery-console-message-" + b)
                }, h = function (a) {
                    R(a)
                }, j = function () {
                    o = 0, p = "", t = 0, k = a('<div class="jquery-console-prompt-box"></div>');
                    var b = a('<span class="jquery-console-prompt-label"></span>');
                    b.html(b.html().replace(" ", "&nbsp;")), l = a('<span class="jquery-console-prompt"></span>'), k.append(l), i.append(k), a("span.jquery-console-cursor").remove(), bb()
                };
                j(), b.commandHandle(c, Q, h)
            }
        }

        function O() {
            v = !1
        }

        function P() {
            v = !0
        }

        function Q(a, b) {
            o = -1, bb();
            if (typeof a == "string")S(a, b); else for (var c in a) {
                var d = a[c];
                S(d.msg, d.className)
            }
            y()
        }

        function R(b) {
            o = -1, bb(), o = 0, p = "", t = 0, P(), k = a('<div class="jquery-console-prompt-box"></div>');
            var c = a('<span class="jquery-console-prompt-label"></span>'), d = b;
            k.append(c.text(d).show()), c.html(c.html().replace(" ", "&nbsp;")), l = a('<span class="jquery-console-prompt"></span>'), k.append(l), i.append(k), bb()
        }

        function S(b, c) {
            b = b.toString();
            var d = a('<div class="jquery-console-message"></div>');
            c && d.addClass(c), d.filledText(b.trim()).hide(), i.append(d), lines = b.split("\n").length, offset = 11, lines > 10 ? d.slideDown(lines * offset, function () {
                L()
            }) : d.show()
        }

        function T(a) {
            return o + a >= 0 && o + a <= p.length ? (o += a, !0) : !1
        }

        function U() {
            return T(1) ? (bb(), !0) : !1
        }

        function V() {
            return T(-1) ? (bb(), !0) : !1
        }

        function W() {
            T(-o) && bb()
        }

        function X() {
            T(p.length - o) && bb()
        }

        function Y() {
            while (o < p.length && !_(p[o]) && U());
            while (o < p.length && _(p[o]) && U());
        }

        function Z() {
            while (o - 1 >= 0 && !_(p[o - 1]) && V());
            while (o - 1 >= 0 && _(p[o - 1]) && V());
        }

        function _(a) {
            if (typeof a == "string") {
                var b = a.charCodeAt();
                return b >= "A".charCodeAt() && b <= "Z".charCodeAt() || b >= "a".charCodeAt() && b <= "z".charCodeAt() || b >= "0".charCodeAt() && b <= "9".charCodeAt()
            }
            return!1
        }

        function ab() {
        }

        function bb() {
            var a = p, b = "";
            if (o > 0 && a == "")b = f; else if (o == p.length)b = cb(a) + f; else {
                var c = a.substring(0, o), d = a.substring(o, o + 1);
                d && (d = '<span class="jquery-console-cursor">' + cb(d) + "</span>");
                var e = a.substring(o + 1);
                b = cb(c) + d + cb(e)
            }
            l.html(b), L()
        }

        function cb(a) {
            return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/</g, "&lt;").replace(/ /g, "&nbsp;").replace(/\n/g, "<br />").replace(/([^<>&]{10})/g, "$1" + g)
        }

        if (!a.browser.ios)var c = {37: V, 39: U, 38: C, 40: D, 8: G, 46: H, 35: X, 36: W, 13: K, 10: K, 18: ab}; else var c = {127: G, 10: K, 13: K, 8: G};
        var d = {65: W, 69: X, 68: H, 78: D, 80: C, 66: V, 70: U, 75: I}, e = {70: Y, 66: Z, 68: J}, f = '<span class="jquery-console-cursor">&nbsp;</span>', g = a.browser.opera ? "" : "<wbr>&shy;", h = a(this), i = a('<div class="jquery-console-inner"></div>'), j = a('<textarea class="jquery-console-typer"></textarea>'), k, l, m = b && b.promptLabel ? b.promptLabel : "> ", n = b && b.continuedPromptLabel ? b.continuedPromptLabel : "> ", o = 0, p = "", q = "", r = "", s = [], t = 0, u = 0, v = !0, w = !1, x = {};
        return function () {
            h.append(i), i.append(j), j.css({position: "absolute", top: 0, left: "-9999px"}), b.welcomeMessage && S(b.welcomeMessage, "jquery-console-welcome"), y(), b.autofocus && (i.addClass("jquery-console-focus"), j.focus(), setTimeout(function () {
                i.addClass("jquery-console-focus"), j.focus()
            }, 100)), x.inner = i, x.typer = j, x.scrollToBottom = L
        }(), x.reset = function () {
            var c = typeof b.welcomeMessage != "undefined";
            i.parent().fadeOut(function () {
                i.find("div").each(function () {
                    c ? c = !1 : a(this).remove()
                }), y(), i.parent().fadeIn(function () {
                    i.addClass("jquery-console-focus"), j.focus()
                })
            })
        }, x.focus = function () {
            i.addClass("jquery-console-focus"), j.focus()
        }, x.notice = function (b, c) {
            var d = a('<div class="notice"></div>').append(a("<div></div>").text(b)).css({visibility: "hidden"});
            h.append(d);
            var e = !0;
            if (c == "fadeout")setTimeout(function () {
                d.fadeOut(function () {
                    d.remove()
                })
            }, 4e3); else if (c == "prompt") {
                var f = a('<br/><div class="action"><a href="javascript:">OK</a><div class="clear"></div></div>');
                d.append(f), e = !1, f.click(function () {
                    d.fadeOut(function () {
                        d.remove(), i.css({opacity: 1})
                    })
                })
            }
            var g = d.height();
            return d.css({height: "0px", visibility: "visible"}).animate({height: g + "px"}, function () {
                e || i.css({opacity: .5})
            }), d.css("cursor", "default"), d
        }, h.click(function () {
            return i.addClass("jquery-console-focus"), i.removeClass("jquery-console-nofocus"), j.focus(), L(), !1
        }), j.blur(function () {
            i.removeClass("jquery-console-focus"), i.addClass("jquery-console-nofocus")
        }), j.bind("paste", function (a) {
            j.val(""), setTimeout(function () {
                j.consoleInsert(j.val()), j.val("")
            }, 0)
        }), j.keydown(function (a) {
            u = 0;
            var b = a.keyCode;
            if (a.ctrlKey && b == 67)return u = b, M(), !1;
            if (b == 229) {
                var f = "'";
                return a.shiftKey && (f = '"'), z(f), !1
            }
            if (v) {
                if (b in c)return u = b, c[b](), !1;
                if (a.ctrlKey && b in d)return u = b, d[b](), !1;
                if (a.altKey && b in e)return u = b, e[b](), !1
            }
        }), j.keypress(function (c) {
            var d = c.keyCode || c.which;
            if (A(c))return!1;
            if (c.ctrlKey && String.fromCharCode(d).toLowerCase() == "v")return!0;
            if (v && u != d && d >= 32) {
                if (u)return!1;
                (typeof b.charInsertTrigger == "undefined" || typeof b.charInsertTrigger == "function" && b.charInsertTrigger(d, p)) && j.consoleInsert(d)
            }
            if (a.browser.webkit || a.browser.mozilla)return!1
        }), j.consoleInsert = function (a) {
            var b = isNaN(a) ? a : String.fromCharCode(a);
            j.consoleInject(b)
        }, j.consoleInject = function (a) {
            var b = p.substring(0, o), c = p.substring(o);
            p = b + a + c, T(a.length), q = p, bb()
        }, x.promptText = function (a) {
            return a && (p = a, o = p.length, bb()), p
        }, x.setPromptLabel = function (a) {
            m = a
        }, x
    }, a.fn.filledText = function (b) {
        return a(this).text(b), a(this).html(a(this).html().replace(/ /g, "&nbsp;").replace(/\n/g, "<br/>").replace(/\\n/g, "<br/>")), this
    }
}(jQuery), function (a) {
    function b(b) {
        if (typeof b.data != "string")return;
        var c = b.handler, d = b.data.toLowerCase().split(" ");
        b.handler = function (b) {
            if (!(this === b.target || !/textarea|select/i.test(b.target.nodeName) && b.target.type !== "text"))return;
            var e = b.type !== "keypress" && a.hotkeys.specialKeys[b.which], f = String.fromCharCode(b.which).toLowerCase(), g, h = "", i = {};
            b.altKey && e !== "alt" && (h += "alt+"), b.ctrlKey && e !== "ctrl" && (h += "ctrl+"), b.metaKey && !b.ctrlKey && e !== "meta" && (h += "meta+"), b.shiftKey && e !== "shift" && (h += "shift+"), e ? i[h + e] = !0 : (i[h + f] = !0, i[h + a.hotkeys.shiftNums[f]] = !0, h === "shift+" && (i[a.hotkeys.shiftNums[f]] = !0));
            for (var j = 0, k = d.length; j < k; j++)if (i[d[j]])return c.apply(this, arguments)
        }
    }

    a.hotkeys = {version: "0.8", specialKeys: {8: "backspace", 9: "tab", 13: "return", 16: "shift", 17: "ctrl", 18: "alt", 19: "pause", 20: "capslock", 27: "esc", 32: "space", 33: "pageup", 34: "pagedown", 35: "end", 36: "home", 37: "left", 38: "up", 39: "right", 40: "down", 45: "insert", 46: "del", 96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7", 104: "8", 105: "9", 106: "*", 107: "+", 109: "-", 110: ".", 111: "/", 112: "f1", 113: "f2", 114: "f3", 115: "f4", 116: "f5", 117: "f6", 118: "f7", 119: "f8", 120: "f9", 121: "f10", 122: "f11", 123: "f12", 144: "numlock", 145: "scroll", 191: "/", 224: "meta"}, shiftNums: {"`": "~", 1: "!", 2: "@", 3: "#", 4: "$", 5: "%", 6: "^", 7: "&", 8: "*", 9: "(", 0: ")", "-": "_", "=": "+", ";": ": ", "'": '"', ",": "<", ".": ">", "/": "?", "\\": "|"}}, a.each(["keydown", "keyup", "keypress"], function () {
        a.event.special[this] = {add: b}
    })
}(jQuery), function (a) {
    function b(b) {
        if (a.facebox.settings.inited)return!0;
        a.facebox.settings.inited = !0, a(document).trigger("init.facebox"), e();
        var c = a.facebox.settings.imageTypes.join("|");
        a.facebox.settings.imageTypesRegexp = new RegExp(".(" + c + ")$", "i"), b && a.extend(a.facebox.settings, b), a("body").append(a.facebox.settings.faceboxHtml);
        var d = [new Image, new Image];
        d[0].src = a.facebox.settings.closeImage, d[1].src = a.facebox.settings.loadingImage, a("#facebox").find(".b:first, .bl").each(function () {
            d.push(new Image), d.slice(-1).src = a(this).css("background-image").replace(/url\((.+)\)/, "$1")
        }), a("#facebox .close").click(a.facebox.close), a("#facebox .close_image").attr("src", a.facebox.settings.closeImage)
    }

    function c() {
        var a, b;
        return self.pageYOffset ? (b = self.pageYOffset, a = self.pageXOffset) : document.documentElement && document.documentElement.scrollTop ? (b = document.documentElement.scrollTop, a = document.documentElement.scrollLeft) : document.body && (b = document.body.scrollTop, a = document.body.scrollLeft), new Array(a, b)
    }

    function d() {
        var a;
        return self.innerHeight ? a = self.innerHeight : document.documentElement && document.documentElement.clientHeight ? a = document.documentElement.clientHeight : document.body && (a = document.body.clientHeight), a
    }

    function e() {
        var b = a.facebox.settings;
        b.loadingImage = b.loading_image || b.loadingImage, b.closeImage = b.close_image || b.closeImage, b.imageTypes = b.image_types || b.imageTypes, b.faceboxHtml = b.facebox_html || b.faceboxHtml
    }

    function f(b, c) {
        if (b.match(/#/)) {
            var d = window.location.href.split("#")[0], e = b.replace(d, "");
            if (e == "#")return;
            a.facebox.reveal(a(e).html(), c)
        } else b.match(a.facebox.settings.imageTypesRegexp) ? g(b, c) : h(b, c)
    }

    function g(b, c) {
        var d = new Image;
        d.onload = function () {
            a.facebox.reveal('<div class="image"><img src="' + d.src + '" /></div>', c)
        }, d.src = b
    }

    function h(b, c) {
        a.get(b, function (b) {
            a.facebox.reveal(b, c)
        })
    }

    function i() {
        return a.facebox.settings.overlay == 0 || a.facebox.settings.opacity === null
    }

    function j() {
        if (i())return;
        return a("#facebox_overlay").length == 0 && a("body").append('<div id="facebox_overlay" class="facebox_hide"></div>'), a("#facebox_overlay").hide().addClass("facebox_overlayBG").css("opacity", a.facebox.settings.opacity).click(function () {
            a(document).trigger("close.facebox")
        }).fadeIn(200), !1
    }

    function k() {
        if (i())return;
        return a("#facebox_overlay").fadeOut(200, function () {
            a("#facebox_overlay").removeClass("facebox_overlayBG"), a("#facebox_overlay").addClass("facebox_hide"), a("#facebox_overlay").remove()
        }), !1
    }

    a.facebox = function (b, c) {
        a.facebox.loading(), b.ajax ? h(b.ajax, c) : b.image ? g(b.image, c) : b.div ? f(b.div, c) : a.isFunction(b) ? b.call(a) : a.facebox.reveal(b, c)
    }, a.extend(a.facebox, {settings: {opacity: .2, overlay: !0, loadingImage: "", closeImage: "", imageTypes: ["png", "jpg", "jpeg", "gif"], faceboxHtml: '    <div id="facebox" style="display:none;">       <div class="popup">         <div class="content">         </div>         <a href="#" class="close"><img src="//d13jv82ekraqyq.cloudfront.net/assets/sidebar-close-2f96a9377443e761140e118fc8a0962d.png" title="close" class="close_image" /></a>       </div>     </div>'}, loading: function () {
        b();
        if (a("#facebox .loading").length == 1)return!0;
        j(), a("#facebox .content").empty(), a("#facebox .body").children().hide().end().append('<div class="loading"><img src="' + a.facebox.settings.loadingImage + '"/></div>'), a("#facebox").css({top: c()[1] + d() / 10, left: a(window).width() / 2 - 205}).show(), a(document).bind("keydown.facebox", function (b) {
            return b.keyCode == 27 && a.facebox.close(), !0
        }), a(document).trigger("loading.facebox")
    }, reveal: function (b, c) {
        a(document).trigger("beforeReveal.facebox"), c && a("#facebox .content").addClass(c), a("#facebox .content").append(b), a("#facebox .loading").remove(), a("#facebox .body").children().fadeIn("normal"), a("#facebox").css("left", a(window).width() / 2 - a("#facebox .popup").width() / 2), a(document).trigger("reveal.facebox").trigger("afterReveal.facebox")
    }, close: function () {
        return a(document).trigger("close.facebox"), !1
    }}), a.fn.facebox = function (c) {
        function d() {
            a.facebox.loading(!0);
            var b = this.rel.match(/facebox\[?\.(\w+)\]?/);
            return b && (b = b[1]), f(this.href, b), !1
        }

        if (a(this).length == 0)return;
        return b(c), this.bind("click.facebox", d)
    }, a(document).bind("close.facebox", function () {
        a(document).unbind("keydown.facebox"), a("#facebox").fadeOut(function () {
            a("#facebox .content").removeClass().addClass("content"), a("#facebox .loading").remove(), a(document).trigger("afterClose.facebox")
        }), k()
    })
}(jQuery);
var JSON;
JSON || (JSON = {}), function () {
    function f(a) {
        return a < 10 ? "0" + a : a
    }

    function quote(a) {
        return escapable.lastIndex = 0, escapable.test(a) ? '"' + a.replace(escapable, function (a) {
            var b = meta[a];
            return typeof b == "string" ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + a + '"'
    }

    function str(a, b) {
        var c, d, e, f, g = gap, h, i = b[a];
        i && typeof i == "object" && typeof i.toJSON == "function" && (i = i.toJSON(a)), typeof rep == "function" && (i = rep.call(b, a, i));
        switch (typeof i) {
            case"string":
                return quote(i);
            case"number":
                return isFinite(i) ? String(i) : "null";
            case"boolean":
            case"null":
                return String(i);
            case"object":
                if (!i)return"null";
                gap += indent, h = [];
                if (Object.prototype.toString.apply(i) === "[object Array]") {
                    f = i.length;
                    for (c = 0; c < f; c += 1)h[c] = str(c, i) || "null";
                    return e = h.length === 0 ? "[]" : gap ? "[\n" + gap + h.join(",\n" + gap) + "\n" + g + "]" : "[" + h.join(",") + "]", gap = g, e
                }
                if (rep && typeof rep == "object") {
                    f = rep.length;
                    for (c = 0; c < f; c += 1)typeof rep[c] == "string" && (d = rep[c], e = str(d, i), e && h.push(quote(d) + (gap ? ": " : ":") + e))
                } else for (d in i)Object.prototype.hasOwnProperty.call(i, d) && (e = str(d, i), e && h.push(quote(d) + (gap ? ": " : ":") + e));
                return e = h.length === 0 ? "{}" : gap ? "{\n" + gap + h.join(",\n" + gap) + "\n" + g + "}" : "{" + h.join(",") + "}", gap = g, e
        }
    }

    "use strict", typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function (a) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (a) {
        return this.valueOf()
    });
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {"\b": "\\b", "	": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"}, rep;
    typeof JSON.stringify != "function" && (JSON.stringify = function (a, b, c) {
        var d;
        gap = "", indent = "";
        if (typeof c == "number")for (d = 0; d < c; d += 1)indent += " "; else typeof c == "string" && (indent = c);
        rep = b;
        if (!b || typeof b == "function" || typeof b == "object" && typeof b.length == "number")return str("", {"": a});
        throw new Error("JSON.stringify")
    }), typeof JSON.parse != "function" && (JSON.parse = function (text, reviver) {
        function walk(a, b) {
            var c, d, e = a[b];
            if (e && typeof e == "object")for (c in e)Object.prototype.hasOwnProperty.call(e, c) && (d = walk(e, c), d !== undefined ? e[c] = d : delete e[c]);
            return reviver.call(a, b, e)
        }

        var j;
        text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (a) {
            return"\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({"": j}, "") : j;
        throw new SyntaxError("JSON.parse")
    })
}(), function () {
    function A(a, b, c) {
        if (a === b)return a !== 0 || 1 / a == 1 / b;
        if (a == null || b == null)return a === b;
        a._chain && (a = a._wrapped), b._chain && (b = b._wrapped);
        if (a.isEqual && w.isFunction(a.isEqual))return a.isEqual(b);
        if (b.isEqual && w.isFunction(b.isEqual))return b.isEqual(a);
        var d = i.call(a);
        if (d != i.call(b))return!1;
        switch (d) {
            case"[object String]":
                return a == String(b);
            case"[object Number]":
                return a != +a ? b != +b : a == 0 ? 1 / a == 1 / b : a == +b;
            case"[object Date]":
            case"[object Boolean]":
                return+a == +b;
            case"[object RegExp]":
                return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase
        }
        if (typeof a != "object" || typeof b != "object")return!1;
        var e = c.length;
        while (e--)if (c[e] == a)return!0;
        c.push(a);
        var f = 0, g = !0;
        if (d == "[object Array]") {
            f = a.length, g = f == b.length;
            if (g)while (f--)if (!(g = f in a == f in b && A(a[f], b[f], c)))break
        } else {
            if ("constructor"in a != "constructor"in b || a.constructor != b.constructor)return!1;
            for (var h in a)if (w.has(a, h)) {
                f++;
                if (!(g = w.has(b, h) && A(a[h], b[h], c)))break
            }
            if (g) {
                for (h in b)if (w.has(b, h) && !(f--))break;
                g = !f
            }
        }
        return c.pop(), g
    }

    var a = this, b = a._, c = {}, d = Array.prototype, e = Object.prototype, f = Function.prototype, g = d.slice, h = d.unshift, i = e.toString, j = e.hasOwnProperty, k = d.forEach, l = d.map, m = d.reduce, n = d.reduceRight, o = d.filter, p = d.every, q = d.some, r = d.indexOf, s = d.lastIndexOf, t = Array.isArray, u = Object.keys, v = f.bind, w = function (a) {
        return new E(a)
    };
    typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = module.exports = w), exports._ = w) : a._ = w, w.VERSION = "1.3.1";
    var x = w.each = w.forEach = function (a, b, d) {
        if (a == null)return;
        if (k && a.forEach === k)a.forEach(b, d); else if (a.length === +a.length) {
            for (var e = 0, f = a.length; e < f; e++)if (e in a && b.call(d, a[e], e, a) === c)return
        } else for (var g in a)if (w.has(a, g) && b.call(d, a[g], g, a) === c)return
    };
    w.map = w.collect = function (a, b, c) {
        var d = [];
        return a == null ? d : l && a.map === l ? a.map(b, c) : (x(a, function (a, e, f) {
            d[d.length] = b.call(c, a, e, f)
        }), a.length === +a.length && (d.length = a.length), d)
    }, w.reduce = w.foldl = w.inject = function (a, b, c, d) {
        var e = arguments.length > 2;
        a == null && (a = []);
        if (m && a.reduce === m)return d && (b = w.bind(b, d)), e ? a.reduce(b, c) : a.reduce(b);
        x(a, function (a, f, g) {
            e ? c = b.call(d, c, a, f, g) : (c = a, e = !0)
        });
        if (!e)throw new TypeError("Reduce of empty array with no initial value");
        return c
    }, w.reduceRight = w.foldr = function (a, b, c, d) {
        var e = arguments.length > 2;
        a == null && (a = []);
        if (n && a.reduceRight === n)return d && (b = w.bind(b, d)), e ? a.reduceRight(b, c) : a.reduceRight(b);
        var f = w.toArray(a).reverse();
        return d && !e && (b = w.bind(b, d)), e ? w.reduce(f, b, c, d) : w.reduce(f, b)
    }, w.find = w.detect = function (a, b, c) {
        var d;
        return y(a, function (a, e, f) {
            if (b.call(c, a, e, f))return d = a, !0
        }), d
    }, w.filter = w.select = function (a, b, c) {
        var d = [];
        return a == null ? d : o && a.filter === o ? a.filter(b, c) : (x(a, function (a, e, f) {
            b.call(c, a, e, f) && (d[d.length] = a)
        }), d)
    }, w.reject = function (a, b, c) {
        var d = [];
        return a == null ? d : (x(a, function (a, e, f) {
            b.call(c, a, e, f) || (d[d.length] = a)
        }), d)
    }, w.every = w.all = function (a, b, d) {
        var e = !0;
        return a == null ? e : p && a.every === p ? a.every(b, d) : (x(a, function (a, f, g) {
            if (!(e = e && b.call(d, a, f, g)))return c
        }), e)
    };
    var y = w.some = w.any = function (a, b, d) {
        b || (b = w.identity);
        var e = !1;
        return a == null ? e : q && a.some === q ? a.some(b, d) : (x(a, function (a, f, g) {
            if (e || (e = b.call(d, a, f, g)))return c
        }), !!e)
    };
    w.include = w.contains = function (a, b) {
        var c = !1;
        return a == null ? c : r && a.indexOf === r ? a.indexOf(b) != -1 : (c = y(a, function (a) {
            return a === b
        }), c)
    }, w.invoke = function (a, b) {
        var c = g.call(arguments, 2);
        return w.map(a, function (a) {
            return(w.isFunction(b) ? b || a : a[b]).apply(a, c)
        })
    }, w.pluck = function (a, b) {
        return w.map(a, function (a) {
            return a[b]
        })
    }, w.max = function (a, b, c) {
        if (!b && w.isArray(a))return Math.max.apply(Math, a);
        if (!b && w.isEmpty(a))return-Infinity;
        var d = {computed: -Infinity};
        return x(a, function (a, e, f) {
            var g = b ? b.call(c, a, e, f) : a;
            g >= d.computed && (d = {value: a, computed: g})
        }), d.value
    }, w.min = function (a, b, c) {
        if (!b && w.isArray(a))return Math.min.apply(Math, a);
        if (!b && w.isEmpty(a))return Infinity;
        var d = {computed: Infinity};
        return x(a, function (a, e, f) {
            var g = b ? b.call(c, a, e, f) : a;
            g < d.computed && (d = {value: a, computed: g})
        }), d.value
    }, w.shuffle = function (a) {
        var b = [], c;
        return x(a, function (a, d, e) {
            d == 0 ? b[0] = a : (c = Math.floor(Math.random() * (d + 1)), b[d] = b[c], b[c] = a)
        }), b
    }, w.sortBy = function (a, b, c) {
        return w.pluck(w.map(a, function (a, d, e) {
            return{value: a, criteria: b.call(c, a, d, e)}
        }).sort(function (a, b) {
            var c = a.criteria, d = b.criteria;
            return c < d ? -1 : c > d ? 1 : 0
        }), "value")
    }, w.groupBy = function (a, b) {
        var c = {}, d = w.isFunction(b) ? b : function (a) {
            return a[b]
        };
        return x(a, function (a, b) {
            var e = d(a, b);
            (c[e] || (c[e] = [])).push(a)
        }), c
    }, w.sortedIndex = function (a, b, c) {
        c || (c = w.identity);
        var d = 0, e = a.length;
        while (d < e) {
            var f = d + e >> 1;
            c(a[f]) < c(b) ? d = f + 1 : e = f
        }
        return d
    }, w.toArray = function (a) {
        return a ? a.toArray ? a.toArray() : w.isArray(a) ? g.call(a) : w.isArguments(a) ? g.call(a) : w.values(a) : []
    }, w.size = function (a) {
        return w.toArray(a).length
    }, w.first = w.head = function (a, b, c) {
        return b != null && !c ? g.call(a, 0, b) : a[0]
    }, w.initial = function (a, b, c) {
        return g.call(a, 0, a.length - (b == null || c ? 1 : b))
    }, w.last = function (a, b, c) {
        return b != null && !c ? g.call(a, Math.max(a.length - b, 0)) : a[a.length - 1]
    }, w.rest = w.tail = function (a, b, c) {
        return g.call(a, b == null || c ? 1 : b)
    }, w.compact = function (a) {
        return w.filter(a, function (a) {
            return!!a
        })
    }, w.flatten = function (a, b) {
        return w.reduce(a, function (a, c) {
            return w.isArray(c) ? a.concat(b ? c : w.flatten(c)) : (a[a.length] = c, a)
        }, [])
    }, w.without = function (a) {
        return w.difference(a, g.call(arguments, 1))
    }, w.uniq = w.unique = function (a, b, c) {
        var d = c ? w.map(a, c) : a, e = [];
        return w.reduce(d, function (c, d, f) {
            if (0 == f || (b === !0 ? w.last(c) != d : !w.include(c, d)))c[c.length] = d, e[e.length] = a[f];
            return c
        }, []), e
    }, w.union = function () {
        return w.uniq(w.flatten(arguments, !0))
    }, w.intersection = w.intersect = function (a) {
        var b = g.call(arguments, 1);
        return w.filter(w.uniq(a), function (a) {
            return w.every(b, function (b) {
                return w.indexOf(b, a) >= 0
            })
        })
    }, w.difference = function (a) {
        var b = w.flatten(g.call(arguments, 1));
        return w.filter(a, function (a) {
            return!w.include(b, a)
        })
    }, w.zip = function () {
        var a = g.call(arguments), b = w.max(w.pluck(a, "length")), c = new Array(b);
        for (var d = 0; d < b; d++)c[d] = w.pluck(a, "" + d);
        return c
    }, w.indexOf = function (a, b, c) {
        if (a == null)return-1;
        var d, e;
        if (c)return d = w.sortedIndex(a, b), a[d] === b ? d : -1;
        if (r && a.indexOf === r)return a.indexOf(b);
        for (d = 0, e = a.length; d < e; d++)if (d in a && a[d] === b)return d;
        return-1
    }, w.lastIndexOf = function (a, b) {
        if (a == null)return-1;
        if (s && a.lastIndexOf === s)return a.lastIndexOf(b);
        var c = a.length;
        while (c--)if (c in a && a[c] === b)return c;
        return-1
    }, w.range = function (a, b, c) {
        arguments.length <= 1 && (b = a || 0, a = 0), c = arguments[2] || 1;
        var d = Math.max(Math.ceil((b - a) / c), 0), e = 0, f = new Array(d);
        while (e < d)f[e++] = a, a += c;
        return f
    };
    var z = function () {
    };
    w.bind = function (b, c) {
        var d, e;
        if (b.bind === v && v)return v.apply(b, g.call(arguments, 1));
        if (!w.isFunction(b))throw new TypeError;
        return e = g.call(arguments, 2), d = function () {
            if (this instanceof d) {
                z.prototype = b.prototype;
                var a = new z, f = b.apply(a, e.concat(g.call(arguments)));
                return Object(f) === f ? f : a
            }
            return b.apply(c, e.concat(g.call(arguments)))
        }
    }, w.bindAll = function (a) {
        var b = g.call(arguments, 1);
        return b.length == 0 && (b = w.functions(a)), x(b, function (b) {
            a[b] = w.bind(a[b], a)
        }), a
    }, w.memoize = function (a, b) {
        var c = {};
        return b || (b = w.identity), function () {
            var d = b.apply(this, arguments);
            return w.has(c, d) ? c[d] : c[d] = a.apply(this, arguments)
        }
    }, w.delay = function (a, b) {
        var c = g.call(arguments, 2);
        return setTimeout(function () {
            return a.apply(a, c)
        }, b)
    }, w.defer = function (a) {
        return w.delay.apply(w, [a, 1].concat(g.call(arguments, 1)))
    }, w.throttle = function (a, b) {
        var c, d, e, f, g, h = w.debounce(function () {
            g = f = !1
        }, b);
        return function () {
            c = this, d = arguments;
            var i = function () {
                e = null, g && a.apply(c, d), h()
            };
            e || (e = setTimeout(i, b)), f ? g = !0 : a.apply(c, d), h(), f = !0
        }
    }, w.debounce = function (a, b) {
        var c;
        return function () {
            var d = this, e = arguments, f = function () {
                c = null, a.apply(d, e)
            };
            clearTimeout(c), c = setTimeout(f, b)
        }
    }, w.once = function (a) {
        var b = !1, c;
        return function () {
            return b ? c : (b = !0, c = a.apply(this, arguments))
        }
    }, w.wrap = function (a, b) {
        return function () {
            var c = [a].concat(g.call(arguments, 0));
            return b.apply(this, c)
        }
    }, w.compose = function () {
        var a = arguments;
        return function () {
            var b = arguments;
            for (var c = a.length - 1; c >= 0; c--)b = [a[c].apply(this, b)];
            return b[0]
        }
    }, w.after = function (a, b) {
        return a <= 0 ? b() : function () {
            if (--a < 1)return b.apply(this, arguments)
        }
    }, w.keys = u || function (a) {
        if (a !== Object(a))throw new TypeError("Invalid object");
        var b = [];
        for (var c in a)w.has(a, c) && (b[b.length] = c);
        return b
    }, w.values = function (a) {
        return w.map(a, w.identity)
    }, w.functions = w.methods = function (a) {
        var b = [];
        for (var c in a)w.isFunction(a[c]) && b.push(c);
        return b.sort()
    }, w.extend = function (a) {
        return x(g.call(arguments, 1), function (b) {
            for (var c in b)a[c] = b[c]
        }), a
    }, w.defaults = function (a) {
        return x(g.call(arguments, 1), function (b) {
            for (var c in b)a[c] == null && (a[c] = b[c])
        }), a
    }, w.clone = function (a) {
        return w.isObject(a) ? w.isArray(a) ? a.slice() : w.extend({}, a) : a
    }, w.tap = function (a, b) {
        return b(a), a
    }, w.isEqual = function (a, b) {
        return A(a, b, [])
    }, w.isEmpty = function (a) {
        if (w.isArray(a) || w.isString(a))return a.length === 0;
        for (var b in a)if (w.has(a, b))return!1;
        return!0
    }, w.isElement = function (a) {
        return!!a && a.nodeType == 1
    }, w.isArray = t || function (a) {
        return i.call(a) == "[object Array]"
    }, w.isObject = function (a) {
        return a === Object(a)
    }, w.isArguments = function (a) {
        return i.call(a) == "[object Arguments]"
    }, w.isArguments(arguments) || (w.isArguments = function (a) {
        return!!a && !!w.has(a, "callee")
    }), w.isFunction = function (a) {
        return i.call(a) == "[object Function]"
    }, w.isString = function (a) {
        return i.call(a) == "[object String]"
    }, w.isNumber = function (a) {
        return i.call(a) == "[object Number]"
    }, w.isNaN = function (a) {
        return a !== a
    }, w.isBoolean = function (a) {
        return a === !0 || a === !1 || i.call(a) == "[object Boolean]"
    }, w.isDate = function (a) {
        return i.call(a) == "[object Date]"
    }, w.isRegExp = function (a) {
        return i.call(a) == "[object RegExp]"
    }, w.isNull = function (a) {
        return a === null
    }, w.isUndefined = function (a) {
        return a === void 0
    }, w.has = function (a, b) {
        return j.call(a, b)
    }, w.noConflict = function () {
        return a._ = b, this
    }, w.identity = function (a) {
        return a
    }, w.times = function (a, b, c) {
        for (var d = 0; d < a; d++)b.call(c, d)
    }, w.escape = function (a) {
        return("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;")
    }, w.mixin = function (a) {
        x(w.functions(a), function (b) {
            G(b, w[b] = a[b])
        })
    };
    var B = 0;
    w.uniqueId = function (a) {
        var b = B++;
        return a ? a + b : b
    }, w.templateSettings = {evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g};
    var C = /.^/, D = function (a) {
        return a.replace(/\\\\/g, "\\").replace(/\\'/g, "'")
    };
    w.template = function (a, b) {
        var c = w.templateSettings, d = "var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('" + a.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(c.escape || C, function (a, b) {
            return"',_.escape(" + D(b) + "),'"
        }).replace(c.interpolate || C, function (a, b) {
            return"'," + D(b) + ",'"
        }).replace(c.evaluate || C, function (a, b) {
            return"');" + D(b).replace(/[\r\n\t]/g, " ") + ";__p.push('"
        }).replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/\t/g, "\\t") + "');}return __p.join('');", e = new Function("obj", "_", d);
        return b ? e(b, w) : function (a) {
            return e.call(this, a, w)
        }
    }, w.chain = function (a) {
        return w(a).chain()
    };
    var E = function (a) {
        this._wrapped = a
    };
    w.prototype = E.prototype;
    var F = function (a, b) {
        return b ? w(a).chain() : a
    }, G = function (a, b) {
        E.prototype[a] = function () {
            var a = g.call(arguments);
            return h.call(a, this._wrapped), F(b.apply(w, a), this._chain)
        }
    };
    w.mixin(w), x(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (a) {
        var b = d[a];
        E.prototype[a] = function () {
            var c = this._wrapped;
            b.apply(c, arguments);
            var d = c.length;
            return(a == "shift" || a == "splice") && d === 0 && delete c[0], F(c, this._chain)
        }
    }), x(["concat", "join", "slice"], function (a) {
        var b = d[a];
        E.prototype[a] = function () {
            return F(b.apply(this._wrapped, arguments), this._chain)
        }
    }), E.prototype.chain = function () {
        return this._chain = !0, this
    }, E.prototype.value = function () {
        return this._wrapped
    }
}.call(this), function () {
    var a = this, b = a.Backbone, c = Array.prototype.slice, d = Array.prototype.splice, e;
    typeof exports != "undefined" ? e = exports : e = a.Backbone = {}, e.VERSION = "0.9.2";
    var f = a._;
    !f && typeof require != "undefined" && (f = require("underscore"));
    var g = a.jQuery || a.Zepto || a.ender;
    e.setDomLibrary = function (a) {
        g = a
    }, e.noConflict = function () {
        return a.Backbone = b, this
    }, e.emulateHTTP = !1, e.emulateJSON = !1;
    var h = /\s+/, i = e.Events = {on: function (a, b, c) {
        var d, e, f, g, i;
        if (!b)return this;
        a = a.split(h), d = this._callbacks || (this._callbacks = {});
        while (e = a.shift())i = d[e], f = i ? i.tail : {}, f.next = g = {}, f.context = c, f.callback = b, d[e] = {tail: g, next: i ? i.next : f};
        return this
    }, off: function (a, b, c) {
        var d, e, g, i, j, k;
        if (!(e = this._callbacks))return;
        if (!(a || b || c))return delete this._callbacks, this;
        a = a ? a.split(h) : f.keys(e);
        while (d = a.shift()) {
            g = e[d], delete e[d];
            if (!g || !b && !c)continue;
            i = g.tail;
            while ((g = g.next) !== i)j = g.callback, k = g.context, (b && j !== b || c && k !== c) && this.on(d, j, k)
        }
        return this
    }, trigger: function (a) {
        var b, d, e, f, g, i, j;
        if (!(e = this._callbacks))return this;
        i = e.all, a = a.split(h), j = c.call(arguments, 1);
        while (b = a.shift()) {
            if (d = e[b]) {
                f = d.tail;
                while ((d = d.next) !== f)d.callback.apply(d.context || this, j)
            }
            if (d = i) {
                f = d.tail, g = [b].concat(j);
                while ((d = d.next) !== f)d.callback.apply(d.context || this, g)
            }
        }
        return this
    }};
    i.bind = i.on, i.unbind = i.off;
    var j = e.Model = function (a, b) {
        var c;
        a || (a = {}), b && b.parse && (a = this.parse(a));
        if (c = A(this, "defaults"))a = f.extend({}, c, a);
        b && b.collection && (this.collection = b.collection), this.attributes = {}, this._escapedAttributes = {}, this.cid = f.uniqueId("c"), this.changed = {}, this._silent = {}, this._pending = {}, this.set(a, {silent: !0}), this.changed = {}, this._silent = {}, this._pending = {}, this._previousAttributes = f.clone(this.attributes), this.initialize.apply(this, arguments)
    };
    f.extend(j.prototype, i, {changed: null, _silent: null, _pending: null, idAttribute: "id", initialize: function () {
    }, toJSON: function (a) {
        return f.clone(this.attributes)
    }, get: function (a) {
        return this.attributes[a]
    }, escape: function (a) {
        var b;
        if (b = this._escapedAttributes[a])return b;
        var c = this.get(a);
        return this._escapedAttributes[a] = f.escape(c == null ? "" : "" + c)
    }, has: function (a) {
        return this.get(a) != null
    }, set: function (a, b, c) {
        var d, e, g;
        f.isObject(a) || a == null ? (d = a, c = b) : (d = {}, d[a] = b), c || (c = {});
        if (!d)return this;
        d instanceof j && (d = d.attributes);
        if (c.unset)for (e in d)d[e] = void 0;
        if (!this._validate(d, c))return!1;
        this.idAttribute in d &&
        (this.id = d[this.idAttribute]);
        var h = c.changes = {}, i = this.attributes, k = this._escapedAttributes, l = this._previousAttributes || {};
        for (e in d) {
            g = d[e];
            if (!f.isEqual(i[e], g) || c.unset && f.has(i, e))delete k[e], (c.silent ? this._silent : h)[e] = !0;
            c.unset ? delete i[e] : i[e] = g, !f.isEqual(l[e], g) || f.has(i, e) != f.has(l, e) ? (this.changed[e] = g, c.silent || (this._pending[e] = !0)) : (delete this.changed[e], delete this._pending[e])
        }
        return c.silent || this.change(c), this
    }, unset: function (a, b) {
        return(b || (b = {})).unset = !0, this.set(a, null, b)
    }, clear: function (a) {
        return(a || (a = {})).unset = !0, this.set(f.clone(this.attributes), a)
    }, fetch: function (a) {
        a = a ? f.clone(a) : {};
        var b = this, c = a.success;
        return a.success = function (d, e, f) {
            if (!b.set(b.parse(d, f), a))return!1;
            c && c(b, d)
        }, a.error = e.wrapError(a.error, b, a), (this.sync || e.sync).call(this, "read", this, a)
    }, save: function (a, b, c) {
        var d, g;
        f.isObject(a) || a == null ? (d = a, c = b) : (d = {}, d[a] = b), c = c ? f.clone(c) : {};
        if (c.wait) {
            if (!this._validate(d, c))return!1;
            g = f.clone(this.attributes)
        }
        var h = f.extend({}, c, {silent: !0});
        if (d && !this.set(d, c.wait ? h : c))return!1;
        var i = this, j = c.success;
        c.success = function (a, b, e) {
            var g = i.parse(a, e);
            c.wait && (delete c.wait, g = f.extend(d || {}, g));
            if (!i.set(g, c))return!1;
            j ? j(i, a) : i.trigger("sync", i, a, c)
        }, c.error = e.wrapError(c.error, i, c);
        var k = this.isNew() ? "create" : "update", l = (this.sync || e.sync).call(this, k, this, c);
        return c.wait && this.set(g, h), l
    }, destroy: function (a) {
        a = a ? f.clone(a) : {};
        var b = this, c = a.success, d = function () {
            b.trigger("destroy", b, b.collection, a)
        };
        if (this.isNew())return d(), !1;
        a.success = function (e) {
            a.wait && d(), c ? c(b, e) : b.trigger("sync", b, e, a)
        }, a.error = e.wrapError(a.error, b, a);
        var g = (this.sync || e.sync).call(this, "delete", this, a);
        return a.wait || d(), g
    }, url: function () {
        var a = A(this, "urlRoot") || A(this.collection, "url") || B();
        return this.isNew() ? a : a + (a.charAt(a.length - 1) == "/" ? "" : "/") + encodeURIComponent(this.id)
    }, parse: function (a, b) {
        return a
    }, clone: function () {
        return new this.constructor(this.attributes)
    }, isNew: function () {
        return this.id == null
    }, change: function (a) {
        a || (a = {});
        var b = this._changing;
        this._changing = !0;
        for (var c in this._silent)this._pending[c] = !0;
        var d = f.extend({}, a.changes, this._silent);
        this._silent = {};
        for (var c in d)this.trigger("change:" + c, this, this.get(c), a);
        if (b)return this;
        while (!f.isEmpty(this._pending)) {
            this._pending = {}, this.trigger("change", this, a);
            for (var c in this.changed) {
                if (this._pending[c] || this._silent[c])continue;
                delete this.changed[c]
            }
            this._previousAttributes = f.clone(this.attributes)
        }
        return this._changing = !1, this
    }, hasChanged: function (a) {
        return arguments.length ? f.has(this.changed, a) : !f.isEmpty(this.changed)
    }, changedAttributes: function (a) {
        if (!a)return this.hasChanged() ? f.clone(this.changed) : !1;
        var b, c = !1, d = this._previousAttributes;
        for (var e in a) {
            if (f.isEqual(d[e], b = a[e]))continue;
            (c || (c = {}))[e] = b
        }
        return c
    }, previous: function (a) {
        return!arguments.length || !this._previousAttributes ? null : this._previousAttributes[a]
    }, previousAttributes: function () {
        return f.clone(this._previousAttributes)
    }, isValid: function () {
        return!this.validate(this.attributes)
    }, _validate: function (a, b) {
        if (b.silent || !this.validate)return!0;
        a = f.extend({}, this.attributes, a);
        var c = this.validate(a, b);
        return c ? (b && b.error ? b.error(this, c, b) : this.trigger("error", this, c, b), !1) : !0
    }});
    var k = e.Collection = function (a, b) {
        b || (b = {}), b.model && (this.model = b.model), b.comparator && (this.comparator = b.comparator), this._reset(), this.initialize.apply(this, arguments), a && this.reset(a, {silent: !0, parse: b.parse})
    };
    f.extend(k.prototype, i, {model: j, initialize: function () {
    }, toJSON: function (a) {
        return this.map(function (b) {
            return b.toJSON(a)
        })
    }, add: function (a, b) {
        var c, e, g, h, i, j, k = {}, l = {}, m = [];
        b || (b = {}), a = f.isArray(a) ? a.slice() : [a];
        for (c = 0, g = a.length; c < g; c++) {
            if (!(h = a[c] = this._prepareModel(a[c], b)))throw new Error("Can't add an invalid model to a collection");
            i = h.cid, j = h.id;
            if (k[i] || this._byCid[i] || j != null && (l[j] || this._byId[j])) {
                m.push(c);
                continue
            }
            k[i] = l[j] = h
        }
        c = m.length;
        while (c--)a.splice(m[c], 1);
        for (c = 0, g = a.length; c < g; c++)(h = a[c]).on("all", this._onModelEvent, this), this._byCid[h.cid] = h, h.id != null && (this._byId[h.id] = h);
        this.length += g, e = b.at != null ? b.at : this.models.length, d.apply(this.models, [e, 0].concat(a)), this.comparator && this.sort({silent: !0});
        if (b.silent)return this;
        for (c = 0, g = this.models.length; c < g; c++) {
            if (!k[(h = this.models[c]).cid])continue;
            b.index = c, h.trigger("add", h, this, b)
        }
        return this
    }, remove: function (a, b) {
        var c, d, e, g;
        b || (b = {}), a = f.isArray(a) ? a.slice() : [a];
        for (c = 0, d = a.length; c < d; c++) {
            g = this.getByCid(a[c]) || this.get(a[c]);
            if (!g)continue;
            delete this._byId[g.id], delete this._byCid[g.cid], e = this.indexOf(g), this.models.splice(e, 1), this.length--, b.silent || (b.index = e, g.trigger("remove", g, this, b)), this._removeReference(g)
        }
        return this
    }, push: function (a, b) {
        return a = this._prepareModel(a, b), this.add(a, b), a
    }, pop: function (a) {
        var b = this.at(this.length - 1);
        return this.remove(b, a), b
    }, unshift: function (a, b) {
        return a = this._prepareModel(a, b), this.add(a, f.extend({at: 0}, b)), a
    }, shift: function (a) {
        var b = this.at(0);
        return this.remove(b, a), b
    }, get: function (a) {
        return a == null ? void 0 : this._byId[a.id != null ? a.id : a]
    }, getByCid: function (a) {
        return a && this._byCid[a.cid || a]
    }, at: function (a) {
        return this.models[a]
    }, where: function (a) {
        return f.isEmpty(a) ? [] : this.filter(function (b) {
            for (var c in a)if (a[c] !== b.get(c))return!1;
            return!0
        })
    }, sort: function (a) {
        a || (a = {});
        if (!this.comparator)throw new Error("Cannot sort a set without a comparator");
        var b = f.bind(this.comparator, this);
        return this.comparator.length == 1 ? this.models = this.sortBy(b) : this.models.sort(b), a.silent || this.trigger("reset", this, a), this
    }, pluck: function (a) {
        return f.map(this.models, function (b) {
            return b.get(a)
        })
    }, reset: function (a, b) {
        a || (a = []), b || (b = {});
        for (var c = 0, d = this.models.length; c < d; c++)this._removeReference(this.models[c]);
        return this._reset(), this.add(a, f.extend({silent: !0}, b)), b.silent || this.trigger("reset", this, b), this
    }, fetch: function (a) {
        a = a ? f.clone(a) : {}, a.parse === undefined && (a.parse = !0);
        var b = this, c = a.success;
        return a.success = function (d, e, f) {
            b[a.add ? "add" : "reset"](b.parse(d, f), a), c && c(b, d)
        }, a.error = e.wrapError(a.error, b, a), (this.sync || e.sync).call(this, "read", this, a)
    }, create: function (a, b) {
        var c = this;
        b = b ? f.clone(b) : {}, a = this._prepareModel(a, b);
        if (!a)return!1;
        b.wait || c.add(a, b);
        var d = b.success;
        return b.success = function (e, f, g) {
            b.wait && c.add(e, b), d ? d(e, f) : e.trigger("sync", a, f, b)
        }, a.save(null, b), a
    }, parse: function (a, b) {
        return a
    }, chain: function () {
        return f(this.models).chain()
    }, _reset: function (a) {
        this.length = 0, this.models = [], this._byId = {}, this._byCid = {}
    }, _prepareModel: function (a, b) {
        b || (b = {});
        if (a instanceof j)a.collection || (a.collection = this); else {
            var c = a;
            b.collection = this, a = new this.model(c, b), a._validate(a.attributes, b) || (a = !1)
        }
        return a
    }, _removeReference: function (a) {
        this == a.collection && delete a.collection, a.off("all", this._onModelEvent, this)
    }, _onModelEvent: function (a, b, c, d) {
        if ((a == "add" || a == "remove") && c != this)return;
        a == "destroy" && this.remove(b, d), b && a === "change:" + b.idAttribute && (delete this._byId[b.previous(b.idAttribute)], this._byId[b.id] = b), this.trigger.apply(this, arguments)
    }});
    var l = ["forEach", "each", "map", "reduce", "reduceRight", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "sortBy", "sortedIndex", "toArray", "size", "first", "initial", "rest", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "groupBy"];
    f.each(l, function (a) {
        k.prototype[a] = function () {
            return f[a].apply(f, [this.models].concat(f.toArray(arguments)))
        }
    });
    var m = e.Router = function (a) {
        a || (a = {}), a.routes && (this.routes = a.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
    }, n = /:\w+/g, o = /\*\w+/g, p = /[-[\]{}()+?.,\\^$|#\s]/g;
    f.extend(m.prototype, i, {initialize: function () {
    }, route: function (a, b, c) {
        return e.history || (e.history = new q), f.isRegExp(a) || (a = this._routeToRegExp(a)), c || (c = this[b]), e.history.route(a, f.bind(function (d) {
            var f = this._extractParameters(a, d);
            c && c.apply(this, f), this.trigger.apply(this, ["route:" + b].concat(f)), e.history.trigger("route", this, b, f)
        }, this)), this
    }, navigate: function (a, b) {
        e.history.navigate(a, b)
    }, _bindRoutes: function () {
        if (!this.routes)return;
        var a = [];
        for (var b in this.routes)a.unshift([b, this.routes[b]]);
        for (var c = 0, d = a.length; c < d; c++)this.route(a[c][0], a[c][1], this[a[c][1]])
    }, _routeToRegExp: function (a) {
        return a = a.replace(p, "\\$&").replace(n, "([^/]+)").replace(o, "(.*?)"), new RegExp("^" + a + "$")
    }, _extractParameters: function (a, b) {
        return a.exec(b).slice(1)
    }});
    var q = e.History = function () {
        this.handlers = [], f.bindAll(this, "checkUrl")
    }, r = /^[#\/]/, s = /msie [\w.]+/;
    q.started = !1, f.extend(q.prototype, i, {interval: 50, getHash: function (a) {
        var b = a ? a.location : window.location, c = b.href.match(/#(.*)$/);
        return c ? c[1] : ""
    }, getFragment: function (a, b) {
        if (a == null)if (this._hasPushState || b) {
            a = window.location.pathname;
            var c = window.location.search;
            c && (a += c)
        } else a = this.getHash();
        return a.indexOf(this.options.root) || (a = a.substr(this.options.root.length)), a.replace(r, "")
    }, start: function (a) {
        q.started = !0, this.options = f.extend({}, {root: "/"}, this.options, a), this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && window.history && window.history.pushState);
        var b = this.getFragment(), c = document.documentMode, d = s.exec(navigator.userAgent.toLowerCase()) && (!c || c <= 7);
        d && (this.iframe = g('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(b)), this._hasPushState ? g(window).bind("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange"in window && !d ? g(window).bind("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = b;
        var e = window.location, h = e.pathname == this.options.root;
        if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !h)return this.fragment = this.getFragment(null, !0), window.location.replace(this.options.root + "#" + this.fragment), !0;
        this._wantsPushState && this._hasPushState && h && e.hash && (this.fragment = this.getHash().replace(r, ""), window.history.replaceState({}, document.title, e.protocol + "//" + e.host + this.options.root + this.fragment));
        if (!this.options.silent)return this.loadUrl()
    }, stop: function () {
        g(window).unbind("popstate", this.checkUrl).unbind("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), q.started = !1
    }, route: function (a, b) {
        this.handlers.unshift({route: a, callback: b})
    }, checkUrl: function (a) {
        var b = this.getFragment();
        b == this.fragment && this.iframe && (b = this.getFragment(this.getHash(this.iframe)));
        if (b == this.fragment)return!1;
        this.iframe && this.navigate(b), this.loadUrl() || this.loadUrl(this.getHash())
    }, loadUrl: function (a) {
        var b = this.fragment = this.getFragment(a), c = f.any(this.handlers, function (a) {
            if (a.route.test(b))return a.callback(b), !0
        });
        return c
    }, navigate: function (a, b) {
        if (!q.started)return!1;
        if (!b || b === !0)b = {trigger: b};
        var c = (a || "").replace(r, "");
        if (this.fragment == c)return;
        this._hasPushState ? (c.indexOf(this.options.root) != 0 && (c = this.options.root + c), this.fragment = c, window.history[b.replace ? "replaceState" : "pushState"]({}, document.title, c)) : this._wantsHashChange ? (this.fragment = c, this._updateHash(window.location, c, b.replace), this.iframe && c != this.getFragment(this.getHash(this.iframe)) && (b.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, c, b.replace))) : window.location.assign(this.options.root + a), b.trigger && this.loadUrl(a)
    }, _updateHash: function (a, b, c) {
        c ? a.replace(a.toString().replace(/(javascript:|#).*$/, "") + "#" + b) : a.hash = b
    }});
    var t = e.View = function (a) {
        this.cid = f.uniqueId("view"), this._configure(a || {}), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
    }, u = /^(\S+)\s*(.*)$/, v = ["model", "collection", "el", "id", "attributes", "className", "tagName"];
    f.extend(t.prototype, i, {tagName: "div", $: function (a) {
        return this.$el.find(a)
    }, initialize: function () {
    }, render: function () {
        return this
    }, remove: function () {
        return this.$el.remove(), this
    }, make: function (a, b, c) {
        var d = document.createElement(a);
        return b && g(d).attr(b), c && g(d).html(c), d
    }, setElement: function (a, b) {
        return this.$el && this.undelegateEvents(), this.$el = a instanceof g ? a : g(a), this.el = this.$el[0], b !== !1 && this.delegateEvents(), this
    }, delegateEvents: function (a) {
        if (!a && !(a = A(this, "events")))return;
        this.undelegateEvents();
        for (var b in a) {
            var c = a[b];
            f.isFunction(c) || (c = this[a[b]]);
            if (!c)throw new Error('Method "' + a[b] + '" does not exist');
            var d = b.match(u), e = d[1], g = d[2];
            c = f.bind(c, this), e += ".delegateEvents" + this.cid, g === "" ? this.$el.bind(e, c) : this.$el.delegate(g, e, c)
        }
    }, undelegateEvents: function () {
        this.$el.unbind(".delegateEvents" + this.cid)
    }, _configure: function (a) {
        this.options && (a = f.extend({}, this.options, a));
        for (var b = 0, c = v.length; b < c; b++) {
            var d = v[b];
            a[d] && (this[d] = a[d])
        }
        this.options = a
    }, _ensureElement: function () {
        if (!this.el) {
            var a = A(this, "attributes") || {};
            this.id && (a.id = this.id), this.className && (a["class"] = this.className), this.setElement(this.make(this.tagName, a), !1)
        } else this.setElement(this.el, !1)
    }});
    var w = function (a, b) {
        var c = z(this, a, b);
        return c.extend = this.extend, c
    };
    j.extend = k.extend = m.extend = t.extend = w;
    var x = {create: "POST", update: "PUT", "delete": "DELETE", read: "GET"};
    e.sync = function (a, b, c) {
        var d = x[a];
        c || (c = {});
        var h = {type: d, dataType: "json"};
        return c.url || (h.url = A(b, "url") || B()), !c.data && b && (a == "create" || a == "update") && (h.contentType = "application/json", h.data = JSON.stringify(b.toJSON())), e.emulateJSON && (h.contentType = "application/x-www-form-urlencoded", h.data = h.data ? {model: h.data} : {}), e.emulateHTTP && (d === "PUT" || d === "DELETE") && (e.emulateJSON && (h.data._method = d), h.type = "POST", h.beforeSend = function (a) {
            a.setRequestHeader("X-HTTP-Method-Override", d)
        }), h.type !== "GET" && !e.emulateJSON && (h.processData = !1), g.ajax(f.extend(h, c))
    }, e.wrapError = function (a, b, c) {
        return function (d, e) {
            e = d === b ? e : d, a ? a(b, e, c) : b.trigger("error", b, e, c)
        }
    };
    var y = function () {
    }, z = function (a, b, c) {
        var d;
        return b && b.hasOwnProperty("constructor") ? d = b.constructor : d = function () {
            a.apply(this, arguments)
        }, f.extend(d, a), y.prototype = a.prototype, d.prototype = new y, b && f.extend(d.prototype, b), c && f.extend(d, c), d.prototype.constructor = d, d.__super__ = a.prototype, d
    }, A = function (a, b) {
        return!a || !a[b] ? null : f.isFunction(a[b]) ? a[b]() : a[b]
    }, B = function () {
        throw new Error('A "url" property or function must be specified')
    }
}.call(this), function () {
    window.CourseApp = {Models: {}, Views: {}, Collections: {}, vimMode: function () {
        var a;
        return((a = window.localStorage) != null ? a.vimMode : void 0) === "true"
    }, toggleVimMode: function () {
        var a;
        return(a = window.localStorage) != null ? a.vimMode = !this.vimMode() : void 0
    }, supports_pushstate: window.history != null && window.history.pushState != null, editor_views: [], setExperimentMode: function (a) {
        return this.app.inExperimentMode = a
    }, getExperimentMode: function () {
        return this.app.inExperimentMode
    }, init: function (a) {
        return this.app = new this.AppRouter(_.extend(a, {hintsActive: a.tabs.length === 0})), this.app.start(), this.initializeTabState()
    }, log: function (a) {
        if (typeof console != "undefined" && console !== null && console.log != null)return console.log(a)
    }, initializeFileBrowser: function (a) {
        return this.fileBrowser = FileBrowser.init(a)
    }, reload_resources_for_practice: function () {
        return $("#resource-tabs").empty(), $("#resource-group").empty(), this.hint_manager.url = "" + window.location.href + "/hints", this.tabs.url = "" + window.location.href + "/tabs?practice=true", this.hint_manager.fetch(), this.tabs.fetch({success: _.bind(this.initializeTabState, this)})
    }, render_html: function (a) {
        var b, c, d, e, f, g, h, i, j;
        return h = $("#resource-tabs"), g = $("#resource-group"), $("#rendered_html").length > 0 && (c = $("#rendered_html"), i = $("#challenge-panels nav a"), e = $("#challenge-panels .panel"), b = e.eq(i.index(c)), c.parent().remove(), b.remove()), f = new this.Models.Resource({anchor: "render", id: "rendered_html", panel_id: "rendered_html", render: {iframe: a}}), d = new this.Views.TabHeader({model: f}), h.append(d.render().el), j = new this.Views.IframeTab({model: f}), g.append(j.render().el), j.afterInsertIntoDom(), d.focus()
    }, get_main_editor_text: function () {
        var a;
        return(a = this.editor_views[0]) != null ? a.getCode() : void 0
    }, inject_javascript: function (a) {
        var b, c, d, e;
        d = $("#resource_iframe");
        if (d.length === 1)return b = d[0].contentWindow.document, c = b.getElementsByTagName("head")[0], e = b.createElement("script"), e.innerHTML = a, c.appendChild(e)
    }, inject_coffeescript: function (a) {
        var b;
        try {
            return b = CoffeeScript.compile(a, {bare: "on"}), this.inject_javascript(b)
        } catch (c) {
            return this.log(c)
        }
    }, compile_coffeescript: function (a) {
        var b;
        a == null && (a = this.get_main_editor_text());
        try {
            b = CoffeeScript.compile(a, {bare: "on"}), $("#rendered_coffeescript_code code").text(b), $("#rendered_coffeescript_code .error").html(""), $("#rendered_coffeescript_code code").attr({"data-parsed": !1})
        } catch (c) {
            $("#rendered_coffeescript_code .error").text(c.message)
        }
        return typeof CodeHighlighter != "undefined" && CodeHighlighter !== null ? CodeHighlighter.init() : void 0
    }, initializeTabState: function () {
        var a, b, c, d, e, f, g, h;
        return a = CourseApp.app, h = $("#challenge-panels nav li a"), e = $("#challenge-panels .panel"), d = $(".editor-tab"), g = $(".resource-tab"), b = $("#editor-group"), c = $(".editor.panel"), f = $(".resource-panel"), d.first().addClass("active editor-active"), b.addClass("active"), c.first().addClass("active editor-active"), g.first().addClass("resource-active"), f.first().addClass("resource-active"), $("#challenge-panels").delegate("nav li a", "click", function (c) {
            var d, f, g;
            return c.preventDefault(), h = $("#challenge-panels nav a"), e = $("#challenge-panels .panel"), h.removeClass("active"), e.removeClass("active"), f = $(this), d = e.eq(h.index(f)), f.addClass("active"), f.hasClass("editor-tab") ? (h.removeClass("editor-active"), e.removeClass("editor-active"), f.addClass("editor-active"), d.addClass("active editor-active"), b.addClass("active"), a.editors.map(function (a) {
                return a.set({focused: !1})
            }), g = a.editors.models[h.index(f)], g.set({focused: !0})) : (a.activateTabForIndex(h.index(f)), h.removeClass("resource-active"), e.removeClass("resource-active"), f.addClass("resource-active"), d.addClass("active resource-active"), b.removeClass("active"))
        })
    }}
}.call(this), function () {
    CourseApp.AppRouter = Backbone.Router.extend({routes: {"levels/:level_id/challenges/:id": "show", "levels/:level_id": "level"}, initialize: function (a) {
        var b, c, d, e, f;
        return this.firstRender = !0, this.revealUI = _.debounce(this.revealUI, 300), d = new CourseApp.Models.Lab(a.lab), d.resetChallenges(a.challenges), e = new CourseApp.Views.ChallengeMenu({model: d, el: $("#sidebar-nav")}), e.render(), this.active_challenge = new CourseApp.Models.Challenge(a.challenge), this.inExperimentMode = this.active_challenge.inExperimentMode(), b = new CourseApp.Views.ChallengeDetails({model: this.active_challenge, el: $("#challenge-objective")}), b.render(), c = new Backbone.Model(a.current_user), f = new CourseApp.Views.Scoreboard({model: c, el: $("#sidebar-points")}), f.render(), this.editors = new CourseApp.Collections.Editors, this.editor_group = new CourseApp.Views.EditorGroup({collection: this.editors, current_user: c, challenges: d.challenges, challenge: this.active_challenge, min_height: 700, content: "#challenge-objective", tabs_el: $("#editor-tabs"), group_el: $("#editor-group"), el: $("#challenge-panels")}), this.editors.reset(a.editors), this.tabs = new CourseApp.Collections.Resources, this.hints_header_model = new Backbone.Model({id: "hints_tab", anchor: "Hints", active: a.hintsActive}), this.hint_manager = new CourseApp.Models.HintManager(a.hints), this.hintsHeaderView = new CourseApp.Views.HintsHeader({model: this.hints_header_model}), this.hintsContentView = new CourseApp.Views.HintsContent({model: this.hint_manager, active_challenge: this.active_challenge}), this.resourceTabsView = new CourseApp.Views.ResourceTabs({el: $("#resource-tabs"), collection: this.tabs, hints_content: this.hintsContentView, hints_header: this.hintsHeaderView}), this.tabs.reset(a.tabs, {silent: !0})
    }, start: function () {
        if (!Backbone.history.start({pushState: CourseApp.supports_pushstate}))return this.show()
    }, activateTabForIndex: function (a) {
        var b, c;
        return c = a - this.editors.length, b = this.tabs.at(c), b != null ? b.trigger("activated") : void 0
    }, revealUI: function () {
        return $("body").removeClass("reveal")
    }, show: function (a, b) {
        var c;
        return CourseApp.reload && window.location.reload(), this.previous_parent_id && this.previous_parent_id === parseInt(b) ? window.location.reload() : (this.previous_id && (this.previous_parent_id = this.previous_id), this.previous_id = this.active_challenge.id), jQuery("#resource-tabs").empty(), jQuery("#resource-group").empty(), CourseApp.initializeFileBrowser(this.active_challenge.get("file_browser")), this.firstRender ? (this.resourceTabsView.render(), this.activateTabForIndex(this.editors.length), this.revealUI()) : (CourseApp.log("viewing level " + a + " and challenge " + b), c = "/levels/" + a + "/challenges/" + b, this.hint_manager.url = "" + c + "/hints", this.tabs.url = "" + c + "/tabs", this.hint_manager.fetch(), this.tabs.fetch({success: CourseApp.initializeTabState})), this.firstRender = !1
    }, level: function (a) {
        return window.location.reload()
    }})
}.call(this), function () {
    CourseApp.Models.Challenge = Backbone.Model.extend({inExperimentMode: function () {
        return this.get("all_experiment")
    }}), CourseApp.Collections.Challenges = Backbone.Collection.extend({model: CourseApp.Models.Challenge, url: "/levels/1/challenges"}), CourseApp.Models.Resource = Backbone.Model.extend({renderable: function () {
        return this.get("render").slides == null ? !0 : window.pluginlist.indexOf("Acrobat Reader") !== -1
    }, view_class: function () {
        return this.get("render").iframe != null ? CourseApp.Views.IframeTab : this.get("render").html != null ? CourseApp.Views.HtmlTab : this.get("render").console != null ? CourseApp.Views.PracticeConsoleTab : this.get("render").slides != null ? CourseApp.Views.SlideTab : this.get("render").data != null ? CourseApp.Views.DataTab : CourseApp.Views.Tab
    }}), CourseApp.Collections.Resources = Backbone.Collection.extend({model: CourseApp.Models.Resource}), CourseApp.Models.Hint = Backbone.Model.extend({}), CourseApp.Collections.UsedHints = Backbone.Collection.extend({model: CourseApp.Models.UsedHint}), CourseApp.Models.HintManager = Backbone.Model.extend({}), CourseApp.Models.Level = Backbone.Model.extend({}), CourseApp.Models.Editor = Backbone.Model.extend({}), CourseApp.Collections.Editors = Backbone.Collection.extend({model: CourseApp.Models.Editor}), CourseApp.Models.SubmitModel = Backbone.Model.extend({}), CourseApp.Models.Lab = Backbone.Model.extend({initialize: function () {
        return this.challenges = new CourseApp.Collections.Challenges
    }, resetChallenges: function (a) {
        return this.challenges.reset(a)
    }}), CourseApp.Models.Failure = Backbone.Model.extend({})
}.call(this), function (a) {
    var b = 1, c = {}, d = new RegExp("^(https?://)?gist.github.com/([0-9]+)(#file_(.*))?$");
    a.gist = function (c, d, e) {
        !c || c === a ? a(document).gist() : (e = e || ["gist", c, b++].join("-"), a("<div />", {id: e}).appendTo("body").gist(c, d))
    }, a.gist.url = function (b, c) {
        var e, f = !1;
        if (!b && (e = a(this)).is("a")) {
            var g = d.exec(e.attr("href"));
            g && (f = g[1] == "https://", b = g[2], c = g[4] || c)
        } else typeof b == "object" && (c = typeof b.file == "function" ? b.file.apply(this) : b.file, b = typeof b.id == "function" ? b.id.apply(this) : b.id);
        if (!b)return null;
        var h = "/gist/" + b + ".json?";
        return c && (h += "file=" + c + "&"), h += "callback=?", h
    }, a.fn.gist = function (b, d) {
        if (this.length === 0)return;
        if (!b && !this.is("a"))return this.find("a").gist();
        for (var e = 0, f = this.length; e < f; e++) {
            var g = this[e];
            a(g).addClass(".gist-loading");
            var h = a.gist.url.apply(g, arguments);
            h && a.ajax({url: h, dataType: "json", data: {}, context: g, success: function (b) {
                a(this).removeClass("gist-loading"), a(b.div).replaceAll(this).trigger("gistloaded", b), b.stylesheet && !c[b.stylesheet] && (a(document.head).find("link[rel=stylesheet]").filter(function () {
                    return this.href == b.stylesheet
                }).length || a(document.head).append('<link rel="stylesheet" href="' + b.stylesheet + '"/>'), c[b.stylesheet] = b.stylesheet)
            }})
        }
        return this
    }
}(jQuery), function () {
    window.GoogleRails || (window.GoogleRails = {append: function (a) {
        return $("body").append(a)
    }, bind: function (a, b, c) {
        return a.on != null ? a.on(b, c) : a.live(b, c)
    }})
}.call(this), function () {
    var a;
    a = function () {
        function a() {
            this.compiledTemplate = _.template(a.template)
        }

        return a.name = "GoogleAdWords", a.prototype.append = function (a) {
            return $("body").append(a)
        }, a.prototype.normalize = function (a) {
            return $.each(a, function (b, c) {
                if (c != null && c["replace"] != null)return a[b] = c.replace(/'/g, "\\'")
            }), a
        }, a.prototype.track = function (a) {
            return this.append(this.compiledTemplate(this.normalize(a)))
        }, a.template = '<script type="text/javascript">\n  /* <![CDATA[ */\n    var google_conversion_id = "<%= id %>";\n    var google_conversion_language = "en_US";\n    var google_conversion_format = "1";\n    var google_conversion_color = "e8f6f1";\n    var google_conversion_label = "<%= label %>";\n    var google_conversion_value = <%= value %>;\n  /* ]]> */\n</script>\n<script type="text/javascript" src="https://www.googleadservices.com/pagead/conversion.js"></script>\n<noscript><div style="display:inline;"><img height="1" width="1" style="border-style:none;" alt="" src="https://www.googleadservices.com/pagead/conversion/<%= id %>/?value=<%= value %>&amp;label=<%= label %>&amp;guid=ON&amp;script=0"/></div></noscript>', a
    }(), GoogleRails.GoogleAdWords = a
}.call(this), function () {
    var a;
    a = function () {
        function a() {
            this.ecommerceTemplate = _.template(a.ecommerceTemplate), this.pageviewTemplate = _.template(a.pageviewTemplate), this.eventTemplate = _.template(a.eventTemplate)
        }

        return a.name = "GoogleAnalytics", a.prototype.normalize = function (a) {
            return $.each(a, function (b, c) {
                if (c != null && c["replace"] != null)return a[b] = c.replace(/'/g, "\\'")
            }), a
        }, a.prototype.trackEvent = function (a) {
            return GoogleRails.append(this.eventTemplate(this.normalize(a)))
        }, a.prototype.trackPageview = function (a) {
            return GoogleRails.append(this.pageviewTemplate(this.normalize(a)))
        }, a.prototype.trackEcommerce = function (b) {
            return b.trackers = a.trackers, GoogleRails.append(this.ecommerceTemplate(this.normalize(b)))
        }, a.trackers = ["ua974074929", "ua974074923"], a.ecommerceTemplate = "<script type=\"text/javascript\">\n/* <![CDATA[ */\nvar _gaq = _gaq || [];\n\n<% _.each(trackers, function (tracker) { %>\n  _gaq.push(['<%= tracker %>._addTrans', '<%= transaction_id %>', '', '<%= value %>']);\n\n  <% _.each(line_items, function (lineItem) { %>\n    _gaq.push(['<%= tracker %>._addItem', '<%= transaction_id %>', '<%= lineItem.sku %>', '<%= lineItem.name %>', '', '<%= lineItem.value %>', '<%= lineItem.quantity %>']);\n  <% }) %>\n\n  _gaq.push(['<%= tracker %>._trackTrans']);\n<% }) %>\n/* ]]> */\n</script>", a.pageviewTemplate = "  <script type=\"text/javascript\">\n/* <![CDATA[ */\nvar _gaq = _gaq || [];\n_gaq.push(['ua974074929._require', 'inpage_linkid', '//www.google-analytics.com/plugins/ga/inpage_linkid.js']);_gaq.push(['ua974074923._require', 'inpage_linkid', '//www.google-analytics.com/plugins/ga/inpage_linkid.js']);\n_gaq.push(['ua974074929._setAccount', 'UA-9740749-29']);_gaq.push(['ua974074923._setAccount', 'UA-9740749-23']);\n_gaq.push(['ua974074923._setDomainName', 'none']);_gaq.push(['ua974074923._setAllowLinker', true]);_gaq.push(['ua974074923._addIgnoredRef', 'codeschool.com']);\n_gaq.push(['ua974074923._addIgnoredRef', 'try.github.com']);\n(function() {\nvar ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;\nga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';\nvar s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);\n})();\nvar _gaq = _gaq || [];\n_gaq.push(['ua974074929._trackPageview', '/<%= path %>']);\n_gaq.push(['ua974074923._trackPageview', '/try.github.com<%= path %>']);/* ]]> */\n</script>", a.eventTemplate = "<script type=\"text/javascript\">\n/* <![CDATA[ */\nvar _gaq = _gaq || [];_gaq.push(['ua974074929._trackEvent', '<%= category %>', '<%= action %>', '<%= label %>', <%= value %>, <%= interactive %>]);\n_gaq.push(['ua974074923._trackEvent', '<%= category %>', '<%= action %>', '<%= label %>', <%= value %>, <%= interactive %>]);/* ]]> */\n</script>", a
    }(), GoogleRails.GoogleAnalytics = a
}.call(this), function () {
    var a, b = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    };
    a = function () {
        function a() {
            this.submit_form = b(this.submit_form, this), this.click_link = b(this.click_link, this)
        }

        return a.name = "GoogleTracker", a.linker = "ua974074923.", a.prototype.track_links = function (b) {
            return b == null && (b = "internal"), a.linker != null && GoogleRails.bind($('a[rel~="' + b + '"]'), "click", this.click_link), this
        }, a.prototype.track_forms = function (b) {
            return b == null && (b = "internal"), a.linker != null && GoogleRails.bind($('form[data-rel~="' + b + '"]'), "submit", this.submit_form), this
        }, a.prototype.click_link = function (b) {
            if (this.link("" + a.linker + "_link", $(b.target).attr("href")))return b.preventDefault()
        }, a.prototype.submit_form = function (b) {
            return this.link("" + a.linker + "_linkByPost", b.target)
        }, a.prototype.link = function (a, b) {
            if (!$.isArray(_gaq) && typeof _gaq._createAsyncTracker != "undefined")return _gaq.push([a, b]), !0
        }, a
    }(), $(document).ready(function () {
        return(new a).track_links().track_forms()
    })
}.call(this), function () {
    var a, b = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    };
    a = function () {
        function a() {
            this.click_link = b(this.click_link, this), this.externalPageviewTemplate = _.template(a.externalPageviewTemplate)
        }

        return a.name = "GoogleExternalTracker", a.prototype.track_links = function (a) {
            return a == null && (a = "external"), GoogleRails.bind($('a[rel~="' + a + '"]'), "click", this.click_link)
        }, a.prototype.click_link = function (a) {
            var b, c, d;
            try {
                c = $(a.target).attr("href"), b = {path: this.get_path(c)}, GoogleRails.append(this.externalPageviewTemplate(b)), d = a.metaKey || a.ctrlKey || a.shiftKey || $(a.target).attr("target") != null;
                if (!d)return a.preventDefault(), setTimeout("document.location = '" + c + "'", 100)
            } catch (e) {
            }
        }, a.prototype.get_path = function (a) {
            var b, c, d;
            return c = /^https?:\/\/([\w\.\/]+)/i, b = /^mailto:(.*)/i, d = ["", "unrecognized"], a.match(c) ? d = c.exec(a) : a.match(b) && (d = b.exec(a)), d[1]
        }, a.externalPageviewTemplate = "<script type=\"text/javascript\">\n/* <![CDATA[ */\nvar _gaq = _gaq || [];\n_gaq.push(['ua974074929._trackPageview', '/outgoing/<%= path %>']);\n_gaq.push(['ua974074923._trackPageview', '/try.github.com/outgoing/<%= path %>']);/* ]]> */\n</script>", a
    }(), $(document).ready(function () {
        return(new a).track_links()
    })
}.call(this);
var agt = navigator.userAgent.toLowerCase(), ie = agt.indexOf("msie") != -1, ns = navigator.appName.indexOf("Netscape") != -1, win = agt.indexOf("win") != -1 || agt.indexOf("32bit") != -1, mac = agt.indexOf("mac") != -1;
ie && win && (pluginlist = detectIE("Adobe.SVGCtl", "SVG Viewer") + detectIE("SWCtl.SWCtl.1", "Shockwave Director") + detectIE("ShockwaveFlash.ShockwaveFlash.1", "Shockwave Flash") + detectIE("rmocx.RealPlayer G2 Control.1", "RealPlayer") + detectIE("QuickTimeCheckObject.QuickTimeCheck.1", "QuickTime") + detectIE("MediaPlayer.MediaPlayer.1", "Windows Media Player") + detectIE("PDF.PdfCtrl.5", "Acrobat Reader"));
if (ns || !win) {
    nse = "";
    for (var i = 0; i < navigator.mimeTypes.length; i++)nse += navigator.mimeTypes[i].type.toLowerCase();
    pluginlist = detectNS("image/svg-xml", "SVG Viewer") + detectNS("application/x-director", "Shockwave Director") + detectNS("application/x-shockwave-flash", "Shockwave Flash") + detectNS("audio/x-pn-realaudio-plugin", "RealPlayer") + detectNS("video/quicktime", "QuickTime") + detectNS("application/x-mplayer2", "Windows Media Player") + detectNS("application/pdf", "Acrobat Reader")
}
pluginlist += navigator.javaEnabled() ? "Java," : "", pluginlist.length > 0 && (pluginlist = pluginlist.substring(0, pluginlist.length - 1)), function () {
    window.FileBrowser = {Models: {}, Collections: {}, Views: {}, wrapper: "#file-browser", name: "", files: [], maxColumns: 0, init: function (a) {
        return _.extend(this, a), this.update(a.files, !0), this
    }, update: function (a, b) {
        if (a && $(this.wrapper).length > 0) {
            if (this.files !== a || b)this.fileTree = this._createFileTree(a), this.files = a;
            this.Views.fileWindow && (this.Views.fileWindow.off, this.Views.fileWindow.$el.html("")), this.Views.fileWindow = new this.Views.FileWindow({model: this.fileTree}), this.Views.fileWindow.render(), $(this.wrapper).html(this.Views.fileWindow.el)
        }
        return this
    }, _createFileTree: function (a) {
        var b;
        return b = new FileBrowser.Models.Directory({name: "root", root: !0}), _.each(a, function (a) {
            var c, d, e, f;
            a.constructor === String && (a = {name: a}), a.status || (a.status = "noStatus"), a.content || (a.content = ""), f = a.name.split("/"), c = b, e = [], d = f.pop(), _.each(f, function (a, b) {
                var d;
                return c.get("directories").where({name: a})[0] || c.get("directories").add({name: a, hierarchy: e}), e.push(c), d = c, c = c.get("directories").where({name: a})[0], c.set({parentDirectory: d})
            });
            if (d !== "")return c.get("files").add({name: d, status: a.status, content: a.content, hierarchy: e, parentDirectory: c})
        }), b
    }}
}.call(this), function () {
    FileBrowser.Models.Directory = Backbone.Model.extend({url: "#", initialize: function (a) {
        return this.set({files: new FileBrowser.Collections.Files}), this.set({directories: new FileBrowser.Collections.Directories})
    }})
}.call(this), function () {
    FileBrowser.Models.File = Backbone.Model.extend({rootUrl: "#"})
}.call(this), function () {
    FileBrowser.Collections.Directories = Backbone.Collection.extend({model: FileBrowser.Models.Directory, url: "#", comparator: function (a) {
        return a.get("name")
    }})
}.call(this), function () {
    FileBrowser.Collections
        .Files = Backbone.Collection.extend({model: FileBrowser.Models.File, url: "#", comparator: function (a) {
        return a.get("name")
    }})
}.call(this), function () {
    FileBrowser.Views.Directory = Backbone.View.extend({xPos: 0, yPos: 0, tagName: "ol", className: "directory", events: {"click [data-directory]": "_handleDirectoryClick", "click [data-file]": "_handleFileClick", click: "_handleRootClick", mousedown: "_handleMouseDown"}, listItemTemplate: _.template("    <li>      <a href='#' class='<%= classes.join(' ') %>'>        <span>          <%= value %>        </span>      </a>    </li>"), initialize: function (a) {
        return _.bindAll(this, "render", "_handleDirectoryClick", "_handleFileClick", "_handleRootClick", "_handleMouseDown"), this
    }, render: function () {
        return this.$el.empty(), this.model && (this.renderDirectories(), this.renderFiles()), this
    }, renderDirectories: function (a) {
        var b, c;
        return b = this.model.get("directories"), c = this, _.each(b.models, function (a) {
            var b;
            return b = $(c.listItemTemplate({classes: ["folder"], value: a.get("name")})), b.find("a").attr("data-directory", a.cid), c.$el.append(b)
        })
    }, renderFiles: function (a) {
        var b, c;
        return b = this.model.get("files"), c = this, _.each(b.models, function (a) {
            var b;
            return b = $(c.listItemTemplate({classes: [a.get("status")], value: a.get("name")})), b.find("a").attr("data-file", a.cid), c.$el.append(b)
        })
    }, setModel: function (a) {
        if (this.model !== a)return this.model = a, this.render()
    }, setSelected: function (a) {
        if (a.file)return this.setSelectedFile(a.file.cid);
        if (a.directory)return this.setSelectedDirectory(a.directory.cid)
    }, setSelectedFile: function (a) {
        return this.$el.find("[data-file]").removeClass("selected"), this.$el.find("[data-file='" + a + "']").addClass("selected")
    }, setSelectedDirectory: function (a) {
        return this.$el.find("[data-directory]").removeClass("selected"), this.$el.find("[data-directory='" + a + "']").addClass("selected")
    }, x: function (a) {
        return a ? (this.$el.css({left: "" + a + "px"}), this.xPos = a) : this.xPos
    }, y: function (a) {
        return a ? (this.$el.css("top", "" + a + "px"), this.yPos = a) : this.yPos
    }, move: function (a, b, c) {
        return c == null && (c = 200), this.xPos = a, this.yPos = b, this.$el.animate({left: "" + a + "px", top: "" + b + "px"}, c)
    }, fadeMove: function (a, b, c, d) {
        return d == null && (d = 200), this.xPos = a, this.yPos = b, this.$el.animate({left: "" + a + "px", top: "" + b + "px", opacity: c}, d)
    }, width: function (a) {
        return a ? (this.$el.css({width: "" + a + "px"}), a) : parseInt(this.$el.css("width"))
    }, height: function (a) {
        return a ? (this.$el.css({height: "" + a + "px"}), a) : parseInt(this.$el.css("height"))
    }, removeFromParent: function (a) {
        var b;
        return a == null && (a = 100), a === 0 ? this._remove(this) : (b = this, this.$el.fadeOut(a, function () {
            return b._remove(b)
        }))
    }, _remove: function (a) {
        return a.$el.remove(), a.off(), a.model.off()
    }, _handleDirectoryClick: function (a) {
        var b;
        return a.preventDefault(), a.stopPropagation(), b = $(a.currentTarget).attr("data-directory"), this.$el.trigger({type: "directoryClick", view: this, directory: this.model.get("directories").getByCid(b), parentDirectory: this.model})
    }, _handleFileClick: function (a) {
        var b;
        return a.preventDefault(), a.stopPropagation(), b = $(a.currentTarget).attr("data-file"), this.$el.trigger({type: "fileClick", view: this, file: this.model.get("files").getByCid(b)})
    }, _handleRootClick: function (a) {
        return a.preventDefault(), this.$el.trigger({type: "rootClick", view: this})
    }, _handleMouseDown: function (a) {
        return a.preventDefault()
    }})
}.call(this), function () {
    FileBrowser.Views.FileOutput = Backbone.View.extend({tagName: "p", className: "output", initialize: function () {
        return this
    }, setContent: function (a) {
        return this.$el.html(a)
    }})
}.call(this), function () {
}.call(this), function () {
    FileBrowser.Views.FileWindow = Backbone.View.extend({directoryViews: [], tagName: "div", className: "file-browser", template: _.template("    <div class='toolbar'>      <ul class='controls'>        <li>          <a class='close' href='#'>Close</a>        </li>        <li>          <a class='minimize' href='#'>Minimize</a>        </li>        <li>          <a class='maximize' href='#'>Maximize</a>        </li>      </ul>      <h2 class='title'><%= name%></h2>    </div>    <div class='directories'>          </div>    <div class='file-output'>    </div>  "), events: {"directoryClick ol": "_handleDirectoryClick", "fileClick ol": "_handleFileClick", "rootClick ol": "_handleRootClick"}, initialize: function (a) {
        return _.bindAll(this, "render", "_handleDirectoryClick", "setColumnDimensions", "_handleWindowResize", "_handleRootClick"), $(window).resize(this._handleWindowResize), this
    }, render: function () {
        var a;
        return this.$el.empty(), this.$el.html(this.template({name: FileBrowser.name})), this.renderFileOutput(), a = (new FileBrowser.Views.Directory({model: this.model})).render(), this.directoryViews = [a], this.$el.find(".directories").empty().append(a.el), setTimeout(this.setColumnDimensions, 0), this
    }, setColumnDimensions: function () {
        var a;
        return a = this.directoryViews[0], a.height(this.$el.find(".directories").height()), this.setDirectoriesSize(a.width(), a.height())
    }, renderFileOutput: function () {
        return this.fileOutput = (new FileBrowser.Views.FileOutput).render(), this.$el.find(".file-output").append(this.fileOutput.el)
    }, setDirectoriesSize: function (a, b) {
        return FileBrowser.maxColumns = Math.floor(parseFloat(this.$el.find(".directories").css("width"), 10) / a)
    }, _handleDirectoryClick: function (a) {
        var b, c, d, e, f, g, h, i, j, k, l;
        j = a.view, b = a.directory, i = a.directory.get("parentDirectory"), c = this.$el.find(".directories"), h = a.directory.get("hierarchy"), k = this, j.setSelectedDirectory(b.cid), j.$el.css({zIndex: "10"}), e = i.get("parentDirectory"), e && j === this.directoryViews[0] && (f = (new FileBrowser.Views.Directory({model: e})).render(), f.height(this.$el.find(".directories").height()), f.$el.hide(), f.setSelectedDirectory(i.cid), c.append(f.el), setTimeout(function () {
            return f.x(f.width() * -1), f.y(0), f.$el.css({zIndex: "0"}).show(), _.each(k.directoryViews, function (a) {
                return a.move(a.x() + f.width(), f.y())
            }), f.move(0, 0), k.directoryViews.unshift(f)
        }, 0)), this._goToDirectoryRoot(b, h), d = _.any(this.directoryViews, function (a) {
            return a.model === b
        });
        if (!d) {
            g = (new FileBrowser.Views.Directory({model: b})).render(), g.height(this.$el.find(".directories").height()), this.directoryViews.push(g), l = this.directoryViews.length > FileBrowser.maxColumns ? j.x() + j.width() : j.x(), g.x(l), g.y(j.y()), c.append(g.el), this.directoryViews.length > FileBrowser.maxColumns || g.move(j.x() + j.width(), j.y());
            if (j !== this.directoryViews[0] && e && j !== this.directoryViews[1] && this.directoryViews.length > FileBrowser.maxColumns)return this._shiftLeft()
        }
    }, _goToDirectoryRoot: function (a, b) {
        var c;
        return c = this, _.each(this.directoryViews, function (d) {
            a === d.model && d.setSelectedDirectory();
            if (!_.include(b, d.model) && a !== d.model)return c.directoryViews = _.reject(c.directoryViews, function (a) {
                return a === d
            }), d.removeFromParent(0)
        })
    }, _shiftLeft: function () {
        if (this.directoryViews.length >= FileBrowser.maxColumns)return _.each(this.directoryViews, function (a, b, c) {
            var d;
            return d = b > 0 ? c[0].width() : a.width(), a.move(a.x() - d, a.y())
        }), this.directoryViews.shift().removeFromParent()
    }, _handleFileClick: function (a) {
        return this.$el.find("[data-file]").removeClass("selected"), a.view.setSelectedFile(a.file.cid), this.fileOutput.setContent(a.file.get("content"))
    }, _handleRootClick: function (a) {
        var b, c;
        c = [];
        for (; ;) {
            b = this.directoryViews[this.directoryViews.length - 1];
            if (b === a.view) {
                a.view.setSelectedDirectory(null), a.view.setSelectedFile(null);
                break
            }
            this.directoryViews.pop(), c.push(b.removeFromParent(0))
        }
        return c
    }, _handleWindowResize: function (a) {
        return _.each(this.directoryViews, function (a, b, c) {
            return b === 0 ? (a.x(0), a.y(0)) : (a.x(c[b - 1].x() + c[b - 1].width()), a.y(c[b - 1].y()))
        })
    }})
    CourseApp.Views.Console = Backbone.View.extend({className: "editor console panel", initialize: function () {
        _.bindAll(this, "render", "commandValidate", "commandHandle", "cancelHandle", "handleExperiment", "handleChallengeAttempt", "handleChallengeChange", "goToNextChallenge", "goToPreviousChallenge", "focus"), this.type = "console", this.model.bind("change", this.render);
        if (this.options.challenge != null)return this.options.challenge.bind("change", this.render)
    }, render: function () {
        return this.cancelFlag = !1, this.editor == null && (this.editor = new CSConsole(this.el, {promptLabel: this.model.get("prompt"), animateScroll: !0, promptHistory: !0, welcomeMessage: this.model.get("welcome_message"), autoFocus: !0, commandValidate: this.commandValidate, commandHandle: this.commandHandle, cancelHandle: this.cancelHandle})), jQuery(this.el).attr({id: "editor" + this.model.get("id")}), this
    }, commandValidate: function (a) {
        return a !== ""
    }, doSubmitCode: function (a) {
        var b;
        return CourseApp.getExperimentMode() ? this.options.challenge.get("url").match(/play/) ? b = this.options.challenge.get("url") : b = "" + this.options.challenge.get("url") + "/play" : b = this.options.challenge.get("url"), jQuery.ajax({type: "PUT", url: b, data: {cmd: a}, error: this.commandError, success: this.commandSuccess, dataType: "json"}), jQuery(this.el).addClass("loading")
    }, goToPreviousChallenge: function (a) {
        var b;
        this.options.challenge.get("url").match(/play/) ? b = this.options.challenge.get("url").replace(/play/, "previous") : b = "" + this.options.challenge.get("url") + "/previous", CourseApp.setExperimentMode(!1), jQuery.ajax({type: "GET", url: b, success: this.handleChallengeChange, dataType: "json"});
        if (a == null)return this.current_prompt(this.model.get("prompt"))
    }, goToNextChallenge: function (a) {
        var b;
        this.options.challenge.get("url").match(/play/) ? b = this.options.challenge.get("url").replace(/play/, "next") : b = "" + this.options.challenge.get("url") + "/next", CourseApp.setExperimentMode(!1), jQuery.ajax({type: "GET", url: b, success: this.handleChallengeChange, dataType: "json"});
        if (a == null)return this.current_prompt(this.model.get("prompt"))
    }, commandHandle: function (a, b, c) {
        this.current_line = a, this.current_report = b, this.current_prompt = c, _.bindAll(this, "commandSuccess", "commandError");
        if (this.current_nesting_level != null && this.current_nesting_level !== 0)return this.doSubmitCode(this.current_line);
        switch (this.current_line) {
            case"clear":
                return this.editor.reset();
            case"next":
                return this.goToNextChallenge(), b(!1);
            case"back":
            case"prev":
            case"previous":
                return this.goToPreviousChallenge(), b(!1);
            default:
                return this.doSubmitCode(this.current_line)
        }
    }, handleChallengeChange: function (a) {
        var b;
        CourseApp.reload = a.reload, CourseApp.reload || this.options.challenge != null && this.options.challenge.set(a), a.console_prompt && a.console_prompt !== "" && this.editor.setPrompt(a.console_prompt);
        if (a.path != null)return b = a.path, b[0] === "/" && (b = b.substring(1, b.length)), CourseApp.app.navigate(b, !0)
    }, cancelHandle: function () {
        return this.cancelFlag = !0
    }, blur: function () {
        return this.editor.blur()
    }, focus: function () {
        return this.editor.focus()
    }, commandError: function (a, b, c) {
        return this.current_report()
    }, commandSuccess: function (a, b, c) {
        return CourseApp.getExperimentMode() ? this.handleExperiment(a, b, c) : this.handleChallengeAttempt(a, b, c), this.doExtraOutput(a.extra_output), jQuery(this.el).removeClass("loading")
    }, handleExperiment: function (a, b, c) {
        return CourseApp.log("handleExperiment"), a.output == null && a.result != null && (a.output = a.result), a.go_to_next_challenge ? (a.hide_output ? this.current_report("") : this.current_nesting_level != null && this.current_nesting_level > 0 ? this.outputDots(this.current_nesting_level) : this.current_report({content: "" + this.model.get("result_prompt") + " " + a.output}), this.goToNextChallenge(!0)) : (this.options.challenge.set({instructions: a.instructions, title: a.title}), this.current_nesting_level = a.nesting_level, this.current_nesting_level != null && this.current_nesting_level > 0 ? this.outputDots(this.current_nesting_level) : a.hide_output ? this.current_report("") : this.current_report({content: "" + this.model.get("result_prompt") + " " + a.output}))
    }, outputDots: function (a) {
        var b, c, d;
        b = "";
        for (c = d = 0; d < a; c = d += 1)b = "" + b + "..";
        return this.current_prompt("" + b + "	")
    }, doExtraOutput: function (a) {
        if (a != null && CourseApp[a.call] != null)return CourseApp[a.call](a.cmd)
    }, handleSuccessConsoleOutput: function (a) {
        return this.current_nesting_level != null && this.current_nesting_level > 0 ? this.outputDots(this.current_nesting_level) : a.hide_output ? this.current_report("") : a.output != null ? this.current_report([
            {content: "" + this.model.get("result_prompt") + " " + a.output},
            {content: a.result, className: "jquery-console-success-message"}
        ]) : this.current_report({content: a.result, className: "jquery-console-success-message"})
    }, handleFailureConsoleOutput: function (a) {
        return this.current_nesting_level != null && this.current_nesting_level > 0 ? this.outputDots(this.current_nesting_level) : a.result === a.output ? this.current_report({content: "" + this.model.get("result_prompt") + " " + a.output, className: "jquery-console-error-message"}) : this.model.get("experiment_until_correct") ? this.current_report({content: "" + this.model.get("result_prompt") + " " + a.output}) : a.hide_output ? this.current_report({content: a.result, className: "jquery-console-error-message"}) : a.show_output_only ? this.current_report({content: "" + this.model.get("result_prompt") + " " + a.output}) : this.current_report([
            {content: "" + this.model.get("result_prompt") + " " + a.output},
            {content: a.result, className: "jquery-console-error-message"}
        ])
    }, handleChallengeAttempt: function (a, b, c) {
        var d;
        return this.current_nesting_level = a.nesting_level, a.files && CourseApp.fileBrowser.update(a.files), a.success ? (a.experiment ? (CourseApp.setExperimentMode(!0), a.experiment_prompt != null && this.editor.setPrompt(a.experiment_prompt), d = "" + this.options.challenge.get("url") + "/play", this.options.challenge.set({url: d, instructions: a.instructions, title: a.title})) : (this.options.current_user != null && this.options.current_user.set({points: a.total_points}), this.options.challenges != null && a.challenges != null && this.options.challenges.reset(a.challenges), a.next_challenge != null && (console.log(this.model.get("noisy_success")), a.next_challenge.console && !this.model.get("noisy_success") ? this.handleChallengeChange(a.next_challenge) : this.options.parent.initializeSuccessBox(a))), this.handleSuccessConsoleOutput(a)) : this.handleFailureConsoleOutput(a)
    }}), CourseApp.Views.ConsoleSubmit = Backbone.View.extend({tagName: "footer", template: "<p>Press Enter / Return to submit code in Console mode</p>", initialize: function () {
        return _.bindAll(this, "render")
    }, render: function () {
        return jQuery(this.el).html(this.template), this
    }})
}.call(this), function () {
    CourseApp.Views.ChallengeDetails = Backbone.View.extend({template: _.template('<h1><em><%= level_number %>.<%= number %></em> <span><%= title %></span></h1>\n\n<div id="instructions">\n  <%= instructions %>\n</div>'), initialize: function () {
        return this.model.bind("change", this.render, this), this.lazyRevealTitle = _.debounce(this.revealTitle, 100), this.lazyRevealInstructions = _.debounce(this.revealInstructions, 400)
    }, render: function () {
        var a, b, c;
        return a = $(this.template(this.model.toJSON())), this.model.get("dontRevealInstructions") ? (b = this, a.css({visibility: "hidden"}), c = $("<div></div>"), c.html(a), this.$el.height(this.$el.height()), this.$el.find("h1").fadeOut(100), this.$el.find("#instructions").fadeOut(100, function () {
            return b.$el.html(c), setTimeout(function () {
                return b.$el.animate({height: c.height()}, 200, function () {
                    return c.remove(), a.hide(), a.css({visibility: "visible"}), b.$el.html(a), a.fadeIn(100)
                })
            }, 0)
        })) : (this.$el.html(a), this.revealTitleAndInstructions(), this.model.set({dontRevealInstructions: !0}, {silent: !0})), this
    }, revealTitleAndInstructions: function () {
        return this.$("h1").addClass("reveal"), this.$("p").addClass("reveal"), this.lazyRevealTitle(), this.lazyRevealInstructions()
    }, revealTitle: function () {
        return this.$("h1.reveal").removeClass("reveal")
    }, revealInstructions: function () {
        return this.$("p.reveal").removeClass("reveal")
    }})
}.call(this), function () {
    CourseApp.Views.TextEditor = Backbone.View.extend({className: "editor panel", initialize: function () {
        _.bindAll(this, "render", "submitForm", "getCode", "resize", "focus", "editorChanged", "changeInterval"), this.type = "text", this.model.bind("change", this.render);
        if (this.options.challenge != null)return this.options.challenge.bind("change", this.render)
    }, render: function () {
        var a, b;
        return this.editor == null ? (this.editor = window.ace.edit(this.el), this.model.get("worker") || this.editor.getSession().setUseWorker(!1), this.editor.renderer.setShowGutter(this.model.get("line_numbers")), b = require("ace/mode/" + this.model.get("syntax")).Mode, a = require("ace/keyboard/hash_handler").HashHandler, CourseApp.vimMode() ? this.editor.setKeyboardHandler(require("ace/keyboard/keybinding/vim").Vim) : this.editor.setKeyboardHandler(new a({submitform: "Command-Return|Command-s|Ctrl-s"})), this.editor.commands.addCommand({name: "submitform", exec: this.submitForm}), this.editor.getSession().setTabSize(2), this.editor.setTheme("ace/theme/course"), this.editor.getSession().setMode(new b), this.editor.moveCursorTo(0), this.model.get("initial_value") != null && this.editor.getSession().setValue(this.model.get("initial_value")), this.model.get("change_event") != null && (this.editor.getSession().on("change", this.editorChanged), this.changeIntervalID = setInterval(this.changeInterval, 1e3))) : this.editor.resize(), this.model.get("focused") && this.editor.focus(), this
    }, blur: function () {
        return this.editor.blur()
    }, setReadOnly: function (a) {
        return this.editor.setReadOnly(a), $(this.el).addClass("extra-credit-mode")
    }, editorChanged: function (a) {
        return this.codeChanged = !0
    }, changeInterval: function () {
        var a, b;
        if (this.codeChanged)try {
            return a = this.editor.getSession().getValue(), typeof CourseApp[b = this.model.get("change_event")] == "function" ? CourseApp[b](a) : void 0
        } finally {
            this.codeChanged = !1
        }
    }, focus: function () {
        return this.editor.focus()
    }, submitForm: function (a, b, c) {
        return this.options.parent.submitCode()
    }, getCode: function () {
        return this.editor.getSession().getValue()
    }, resize: function () {
        return this.editor.resize()
    }}), CourseApp.Views.TextEditorSubmit = Backbone.View.extend({tagName: "footer", template: "<a href='#' id='manual_submit' class='button'><b><span>Submit Code</span></b></a>", initialize: function () {
        return _.bindAll(this, "render"), this.model.bind("change", this.render)
    }, render: function () {
        return jQuery(this.el).html(this.template), this.model.get("loading") ? jQuery(this.el).addClass("loading") : jQuery(this.el).removeClass("loading"), this
    }})
}.call(this), function () {
    CourseApp.Views.Snippet = Backbone.View.extend({className: "snippet", tagName: "div", render: function () {
        var a, b, c, d;
        return a = require("ace/ext/static_highlight"), b = require("ace/mode/" + this.model.get("syntax")).Mode, c = require("ace/theme/course"), d = a.render(this.model.get("snippet"), new b, c), jQuery(this.el).attr("id", "snippet_" + this.model.get("id")), jQuery(this.el).html(d.html), this
    }})
}.call(this), function () {
    CourseApp.Views.EditorGroup = Backbone.View.extend({view_classes: {console: CourseApp.Views.Console, text: CourseApp.Views.TextEditor}, events: {"click #manual_submit": "submitCode"}, initialize: function () {
        return _.bindAll(this, "render", "adjustHeight", "handleSubmission", "submitCode", "focus"), this.collection.bind("reset", this.render, this), this.group_el = this.options.group_el, this.tabs_el = this.options.tabs_el, this.splitter = this.options.challenge.get("splitter"), this.editor_views = [], this.submit_model = new CourseApp.Models.SubmitModel
    }, addExperimentConsole: function () {
        var a, b, c, d;
        b = this.collection.at(0), c = this.editor_views[0];
        if (c.type === "console")return;
        return c.setReadOnly(!0), a = new CourseApp.Models.Editor({id: this.collection.length + 1, initial_value: "", snippet: "", change_event: null, experiment_until_correct: null, result_prompt: "", welcome_message: null, instructions: b.instructions, url: b.url, type: "console", prompt: "$ ", anchor: "Extra Credit", syntax: "ruby", focused: !0, noisy_success: !1}), this.collection.push(a), window.CourseApp.setExperimentMode(!0), this.renderEditor(a), $("#editor-group footer").hide(), d = new CourseApp.Views.ConsoleSubmit, this.group_el.append(d.render().el), $("[title=Extra]").click()
    }, renderEditors: function () {
        return this.collection.forEach(this.renderEditor, this)
    }, renderEditor: function (a) {
        var b, c, d, e, f;
        e = new CourseApp.Views.EditorTabHeader({model: a}), this.tabs_el.append(e.render().el), f = this.view_classes[a.get("type")];
        if (!f)throw"No view class for editor type " + a.get("type");
        return b = new f({model: a, challenge: this.options.challenge, current_user: this.options.current_user, challenges: this.options.challenges, parent: this}), this.storeEditorView(b), a.get("snippet") ? (c = $("<div></div>"), d = new CourseApp.Views.Snippet({model: a, parent: this}), c.addClass("snippet-active"), c.append(d.render().el), c.append(b.render().el), this.group_el.append(c)) : this.group_el.append(b.render().el)
    }, storeEditorView: function (a) {
        return this.editor_views.push(a), CourseApp.editor_views.push(a)
    }, render: function () {
        var a;
        return this.$(".editor").length === 0 && (this.tabs_el.addClass("tabs-" + this.collection.length), this.renderEditors(), this.hasTextEditor() ? (a = new CourseApp.Views.TextEditorSubmit({model: this.submit_model, editors: this.collection}), this.group_el.append(a.render().el)) : (a = new CourseApp.Views.ConsoleSubmit, this.group_el.append(a.render().el)), this.adjustHeight(), window.onresize = this.adjustHeight), this
    }, hasTextEditor: function () {
        return this.collection.any(function (a) {
            return a.get("type") !== "console"
        })
    }, codeSubmissionUrl: function () {
        return this.collection.first().get("url")
    }, switchToExperimentUrl: function () {
        var a;
        return a = this.codeSubmissionUrl(), this.codeSubmissionUrl = function () {
            return a + "/play"
        }
    }, changeSubmissionSuccessHandler: function (a) {
        return this.submissionSuccessHandler = a
    }, submissionSuccessHandler: function () {
        return this.handleSubmission
    }, initializeSuccessBox: function (a) {
        var b;
        return b = new CourseApp.Views.SuccessBox({model: a, textEditorView: this.editor_views[0], editorGroupView: this, codeSubmissionUrl: this.codeSubmissionUrl()}), b.render()
    }, allTextEditorCode: function () {
        var a, b;
        return b = function () {
            var b, c, d, e;
            d = this.editor_views, e = [];
            for (b = 0, c = d.length; b < c; b++)a = d[b], a.type === "text" && e.push(a);
            return e
        }.call(this), _.map(b, function (a) {
            return a.getCode()
        })
    }, submitCode: function (a) {
        var b, c, d, e, f;
        return a != null && a.preventDefault(), this.submit_model.set({loading: !0}), b = this.allTextEditorCode().join(this.splitter), f = this.codeSubmissionUrl(), e = this.submissionSuccessHandler(), d = {cmd: b}, c = typeof CourseApp.preprocessCode == "function" ? CourseApp.preprocessCode(b) : void 0, c != null && _.extend(d, c), jQuery.ajax({type: "PUT", url: f, data: d, success: e, dataType: "json"})
    }, handleSubmission: function (a, b, c) {
        var d, e, f;
        a.files && CourseApp.fileBrowser.update(a.files), this.submit_model.set({loading: !1});
        if (!a.success)return e = new CourseApp.Views.FailureBox({model: new CourseApp.Models.Failure(a)}), e.render(), this.focus();
        _.map(this.editor_views, function (a) {
            return a.blur()
        }), this.initializeSuccessBox(a), a.practice && CourseApp.reload_resources_for_practice(), f = jQuery("#sidebar"), f.addClass("increase"), setTimeout(function () {
            return f.removeClass("increase")
        }, 1e3), this.options.current_user != null && this.options.current_user.set({points: a.total_points});
        if (this.options.challenges != null) {
            d = this.options.challenges.get(a.id);
            if (d != null)return d.set({completed: !0})
        }
    }, focus: function () {
        if (this.editor_views[0])return this.editor_views[0].focus()
    }, adjustHeight: function () {
        var a, b;
        return a = jQuery("html").height(), a < this.options.min_height && (a = this.options.min_height), b = a - jQuery(this.options.content).outerHeight(), jQuery(this.el).css("height", b + "px"), this.collection.each(function (a) {
            return a.set({height: "changed"})
        })
    }}), CourseApp.Views.EditorTabHeader = Backbone.View.extend({tagName: "li", template: _.template("<a class=\"editor-tab\" href='#' title=<%= anchor %>><%= anchor %></a>"), initialize: function () {
        return _.bindAll(this, "render")
    }, render: function () {
        return jQuery(this.el).html(this.template(this.model.toJSON())), this
    }})
}.call(this), function () {
    CourseApp.Views.FailureBox = Backbone.View.extend({template: _.template('<div class="error">\n  <h3>Sorry, Try Again</h3>\n  <p class="error-msg <% if(model.get(\'result\').length > 85) { print(\'error-msg-full\') } %>">\n    <% if(line_number !== undefined && line_number !== null && line_number !== ""){ %>\n      Line <%= line_number %>\n    <% } %>\n    <%= model.escape(\'result\').replace(/\n/g, "<br />") %>\n  </p>\n  <span class="notifications-close">Click to Close</span>\n</div>'), initialize: function () {
        return _.bindAll(this, "render")
    }, render: function () {
        var a, b;
        return a = this.template(_.extend(this.model.toJSON(), {model: this.model})), b = jQuery("#notifications"), b.hide(), b.html(a).fadeIn(), this.model.get("extra_output") != null && this.model.get("line_number") == null && CourseApp[this.model.get("extra_output").call] != null && CourseApp[this.model.get("extra_output").call](this.model.get("extra_output").cmd), b.live("click", function (a) {
            return b.fadeOut(), a.preventDefault()
        }), jQuery(document).one("keydown", "esc", function (a) {
            return b.fadeOut(), a.preventDefault()
        }), this
    }})
}.call(this), function () {
    CourseApp.Views.IFrameView = function () {
        function a(a) {
            this.options = a, this.element = this.options.element.contents(), this.iframe = this.element[0], this.html = this.options.html, this.css = this.options.css, this.hiddenCss = this.options.hiddenCss, this.javascript = this.options.javascript, this.readyEvent = this.options.readyEvent
        }

        return a.name = "IFrameView", a.prototype.prependAssetPaths = function (a) {
            if (a == null)return;
            return a = a.replace(/src\s*=\s*['"]([A-Za-z_\-0-9.]+)['"]/gi, "src='/images/$1'").replace(/url\(['"]?([a-zA-Z0-9.\/\-]+)['"]?\)/gi, "url(/images/$1)"), this.extraPrependPaths != null ? this.extraPrependPaths(a) : a
        }, a.prototype.update = function (a) {
            if (a.html != null)return this.html = a.html, this.css = a.css, this.renderUpdate()
        }, a.prototype.addUserCss = function (a) {
            var b, c;
            return this.styleElement || (this.styleElement = this.iframe.getElementById("app-css")), this.styleElement != null ? this.styleElement.innerHTML = this.prependAssetPaths(a) : (b = this.iframe.getElementsByTagName("head")[0], c = this.iframe.createElement("style"), c.id = "app-css", c.innerHTML = this.prependAssetPaths(a), b.appendChild(c))
        }, a.prototype.renderUpdate = function () {
            var a, b, c, d, e, f = this;
            return this.iframe.open(), this.iframe.writeln(this.prependAssetPaths(this.html)), this.iframe.close(), b = this.iframe.getElementsByTagName("head")[0], d = this.iframe.createElement("script"), d.src = "//d13jv82ekraqyq.cloudfront.net/assets/iframe-5475d3569f393cbb581da96c4c3a989b.js", d.onload = function () {
                var a;
                if (f.javascript != null)return a = f.iframe.createElement("script"), a.innerHTML = f.javascript, b.appendChild(a)
            }, b.appendChild(d), a = this.prependAssetPaths(this.css), a != null && (e = this.iframe.createElement("style"), e.id = "app-css", e.innerHTML = a, b.insertBefore(e, b.firstChild)), c = this.prependAssetPaths(this.hiddenCss), c != null && (e = this.iframe.createElement("style"), e.id = "hidden-css", e.innerHTML = c, b.insertBefore(e, b.firstChild)), e = this.iframe.createElement("link"), e.href = "//d13jv82ekraqyq.cloudfront.net/assets/iframe-style.css", e.rel = "stylesheet", e.type = "text/css", b.insertBefore(e, b.firstChild)
        }, a.prototype.render = function () {
            var a = this;
            return this.element.ready(function () {
                return typeof a.readyEvent == "function" && a.readyEvent(), a.element.delegate("a", "click", function (a) {
                    return a.preventDefault(), !1
                })
            }), this.renderUpdate()
        }, a
    }()
}.call(this), function () {
    CourseApp.Views.ResourceTabs = Backbone.View.extend({initialize: function () {
        return _.bindAll(this, "render"), this.collection.bind("reset", this.render)
    }, render: function () {
        var a, b, c, d = this;
        return this.$el.addClass("tabs-" + (this.collection.length + 1)), a = this.collection, c = jQuery("#resource-group"), b = this.collection.filter(function (a) {
            return a.renderable()
        }), _.each(b, function (a) {
            var b;
            return b = new CourseApp.Views.TabHeader({model: a, collection: d.collection}), d.$el.append(b.render().el)
        }), _.each(b, function (a) {
            var b, d;
            return d = a.view_class(), b = new d({model: a, collection: this.collection}), c.append(b.render().el), b.afterInsertIntoDom()
        }), this.options.hints_content != null && this.options.hints_header != null && (this.$el.append(this.options.hints_header.render().el), c.append(this.options.hints_content.render().el)), this
    }}), CourseApp.Views.TabHeader = Backbone.View.extend({tagName: "li", template: _.template('<a href=# id="<%= id %>" class="resource-tab" title="<%= anchor %>"><%= anchor %></a>'), initialize: function () {
        return _.bindAll(this, "render", "focus"), this.model.bind("change", this.render)
    }, render: function () {
        var a;
        return a = this.template(this.model.toJSON()), jQuery(this.el).html(a), this.model.get("header_id") != null && jQuery(this.el).attr({id: this.model.get("header_id")}), this
    }, focus: function () {
        return this.$("a").click()
    }}), CourseApp.Views.Tab = Backbone.View.extend({className: "resource-panel panel", template: _.template("<a href='http://gist.github.com/<%= render.gist %>#file_<%= render.file %>' class='gist'><%= render.file %></a>"), initialize: function () {
        return _.bindAll(this, "render", "afterInsertIntoDom"), this.afterInsertIntoDom = _.once(this.afterInsertIntoDom), this.model.bind("change", this.render)
    }, render: function () {
        var a;
        return a = this.template(this.model.toJSON()), jQuery(this.el).html(a), this
    }, afterInsertIntoDom: function () {
        return this.$el.find("a.gist").not(".gist-loading").gist()
    }}), CourseApp.Views.SlideTab = CourseApp.Views.Tab.extend({initialize: function () {
        return this.activate = _.once(this.activate), this.model.on("activated", this.activate, this)
    }, template: _.template("<iframe id=resource_iframe src=\"<%= source %>\" style='width: 100%; height: 100%'></iframe>"), render: function () {
        return this
    }, afterInsertIntoDom: function () {
    }, activate: function () {
        return this.$el.html(this.template({source: this.model.get("render").slides}))
    }}), CourseApp.Views.IframeTab = CourseApp.Views.Tab.extend({template: _.template("<iframe id='resource_iframe'></iframe>\n<a href='#' id='view_frame_source'>View Source</a>"), afterInsertIntoDom: function () {
        var a;
        return this.model.get("render").iframe != null && (CourseApp.renderedHtml = new CourseApp.Views.IFrameView({element: $("#resource_iframe"), html: this.model.get("render").iframe, javascript: this.model.get("render").javascript, css: this.model.get("render").css, hiddenCss: this.model.get("render").hidden_css, readyEvent: (a = CourseApp[this.model.get("render").readyEvent]) != null ? a.bind(CourseApp) : void 0}), CourseApp.renderedHtml.render()), this.$("a").click(function (a) {
            var b, c, d;
            return a.preventDefault(), b = $("#resource_iframe").contents().find("body").html(), d = new Backbone.Model({html: b}), c = new CourseApp.Views.ViewSourceBox({model: d}), c.render()
        })
    }}), CourseApp.Views.DataTab = CourseApp.Views.Tab.extend({tagName: "div", id: "database-table", template: _.template("<% if(data.length) { %>\n  <h3><%= table %></h3>\n  <table>\n  <tr>\n    <% _.each(_.keys(data[0]), function(name) { %><th><%= name %></th><% }); %>\n  </tr>\n  <% _.each(data, function(row) { %>\n    <tr>\n      <% _.each(_.values(row), function(value) { %><td><%= value %></td><% }); %>\n    </tr>\n  <% }); %>\n  </table>\n<% } else { %>\n  <h3><%= table %> (empty)</h3>\n<% } %>"), render: function () {
        var a, b, c;
        c = this.model.toJSON().render.data;
        for (b in c)a = c[b], this.$el.append(this.template({table: b, data: a}));
        return this
    }}), CourseApp.rerenderDatabase = function (a) {
        var b, c, d, e;
        d = (new CourseApp.Views.DataTab({model: new Backbone.Model})).template, $("#database-table").empty(), e = [];
        for (c in a)b = a[c], e.push($("#database-table").append(d({table: c, data: b})));
        return e
    }, CourseApp.Views.HtmlTab = CourseApp.Views.Tab.extend({template: _.template("<%= render.html %>"), afterInsertIntoDom: function () {
        var extra_javascript;
        extra_javascript = this.model.get("render").javascript;
        if (extra_javascript != null)return eval(extra_javascript)
    }}), CourseApp.Views.UsedHint = Backbone.View.extend({tagName: "li", template: _.template("<%= model.get('body') %>\n<% if(model.get('code') !== undefined && model.get('code') !== null && model.get('code') !== \"\"){ %>\n<pre><code class='<%= model.get('syntax') %>'><%= model.escape('code') %></code></pre>\n<% } %>"), initialize: function () {
        return _.bindAll(this, "render")
    }, render: function () {
        var a;
        return a = this.template({model: this.model}), jQuery(this.el).html(a), this
    }}), CourseApp.Views.HintsHeader = CourseApp.Views.TabHeader.extend({}), CourseApp.Views.HintsContent = Backbone.View.extend({className: "resource-panel panel", id: "hints", template: _.template('<% if(has_more_hints) { %>\n  <p id=\'next-hint-button\'>\n    <% if(hint_cost > 0) { %>\n      <a id="next_hint" class="button" href="<%= url %>"><b>View Answer <span><%= "(-" + hint_cost + " Points)" %></span></b></a>\n    <% } else { %>\n      <a id="next_hint" class="button" href="<%= url %>"><b>Next Hint</span></b></a>\n    <% } %>\n    <span id="hints_remaining"><%= hints_remaining %> <%= hints_text %></span> Remaining\n  </p>\n<% } %>\n\n<ol></ol>'), events: {"click #next_hint": "nextHint"}, initialize: function () {
        return _.bindAll(this, "render", "nextHint", "handleNextHint"), this.model.bind("change", this.render), this.innerTemplate = _.template('<% if(hint_cost > 0) { %>\n  <a id="next_hint" class="button" href="<%= url %>"><b>View Answer <span><%= "(-" + hint_cost + " Points)" %></span></b></a>\n<% } else { %>\n  <a id="next_hint" class="button" href="<%= url %>"><b>Next Hint</span></b></a>\n<% } %>')
    }, render: function () {
        return this.model.get("hints") != null && (jQuery(this.el).removeClass("active").removeClass("resource-active"), jQuery(this.el).html(this.template(this.model.toJSON())), this.delegateEvents(this.events), this.addUsedHints(this
            .model.get("hints"))), this
    }, addUsedHints: function (a) {
        var b = this;
        return _.each(a, function (a) {
            var c;
            return c = new CourseApp.Views.UsedHint({model: new CourseApp.Models.Hint(a)}), b.$("ol").append(c.render().el)
        })
    }, nextHint: function (a) {
        var b;
        return a.preventDefault(), b = this.$("#next_hint"), b.addClass("loading"), jQuery.getJSON(b.attr("href"), this.handleNextHint)
    }, handleNextHint: function (a) {
        var b, c, d, e, f, g, h;
        return e = this.$("#next_hint"), b = this.$("ol"), c = this.$("#hints_remaining"), d = this.$("#next-hint-button"), f = jQuery("#challenge-objective"), e.removeClass("loading"), g = new CourseApp.Views.UsedHint({model: new CourseApp.Models.Hint(a.hint)}), b.append(g.render().el), f.addClass("decrease"), setTimeout(function () {
            return f.removeClass("decrease")
        }, 1e3), typeof CodeHighlighter != "undefined" && CodeHighlighter !== null && CodeHighlighter.init(), d.html(this.innerTemplate(_.extend(a, {url: this.model.get("url")}))), a.has_more_hints || this.$("#next_hint").remove(), (h = this.options.active_challenge) != null ? h.set({possible_points: a.possible_points, dontRevealInstructions: !0}) : void 0
    }})
}.call(this), function () {
    CourseApp.Views.ChallengeMenu = Backbone.View.extend({template: _.template('<h2>\n  <b>Level</b><%= number %>\n  <a class="change-level button" href="/levels/switch"><b>Change Level</b></a>\n</h2>\n<ol></ol>'), initialize: function () {
        return _.bindAll(this, "render", "addAll", "addOne"), this.model.bind("change", this.render, this), this.model.challenges.bind("reset", this.render, this)
    }, addAll: function () {
        return this.model.challenges.forEach(this.addOne)
    }, addOne: function (a) {
        var b;
        return b = new CourseApp.Views.ChallengeMenuItem({model: a}), this.$el.find("ol").append(b.render().el)
    }, render: function () {
        return jQuery(this.el).html(this.template(this.model.toJSON())), this.addAll(), this
    }}), CourseApp.Views.ChallengeMenuItem = Backbone.View.extend({tagName: "li", template: _.template('<a href="<%= url %>"><%= title %></a>'), initialize: function () {
        return _.bindAll(this, "render"), this.model.bind("change", this.render)
    }, render: function () {
        var a;
        return a = this.template(this.model.toJSON()), jQuery(this.el).html(a), this.model.get("completed") && jQuery(this.el).addClass("completed"), this.model.get("current") && jQuery(this.el).addClass("current"), this
    }}), CourseApp.Views.Scoreboard = Backbone.View.extend({template: _.template("<em><%= points %></em>\n<b>Total Points</b>"), initialize: function () {
        return this.model.bind("change", this.render, this)
    }, render: function () {
        var a;
        return a = this.template(this.model.toJSON()), jQuery(this.el).html(a), this
    }})
}.call(this), function () {
    CourseApp.Views.SuccessBox = Backbone.View.extend({template: _.template("<a href='#' class=\"success-close\">Close</a>\n<h2>Congratulations!</h2>\n<div class='extra-success' style='display:none;'></div>\n<div class='success-message'>\n  <% if(typeof(awarded_achievements) !== 'undefined' && awarded_achievements !== null){ %>\n    <div class='achievements'>\n      <h3>You've earned the following badge, which you can view from your <a href=\"<%= codeschool_profile_url %>\" title=\"Your Profile Page\" rel=internal>profile page</a>!</h3>\n      <ul>\n        <% _.each(awarded_achievements, function(a){ %>\n          <li>\n            <img src='<%= a.url %>' alt='<%= a.name %>' title=\"<%= a.name %>\">\n          </li>\n        <% }); %>\n      </ul>\n    </div>\n  <% } %>\n\n  <% if(completed_course){ %>\n    <% if (free_course_free_player){ %>\n      <a href='/enroll' id=\"next\" class=\"button\" rel=\"internal\"><b><span>Sign Up</span></b></a>\n      <h3>Congratulations, You've Finished this Code School Course!</h3>\n      <p>To save your progress, watch the final video, and claim your prizes, sign up at Code School!</p>\n    <% } else { %>\n      <a href='<%= course_wrap_up_url %>' id=\"next\" class=\"button\" rel=\"internal\"><b><span>Wrap Up</span></b></a>\n      <h3>Congratulations, You've Finished this Code School Course!</h3>\n      <p>And more importantly, unlocked the final video! Click next to view it now.</p>\n    <% } %>\n <% } else if(completed_lab) { %>\n    <% if (free_course_free_player){ %>\n      <a href='<%= next_level_url %>' id=\"next\" class=\"button\"><b><span>Next Level</span></b></a>\n      <h3>Congratulations, You've Completed Level <%= lab_number %>!</h3>\n      <p>\n        To save your progress and earn your badges, sign up at Code School!\n      </p>\n      <a href='/enroll' id=\"next\" class=\"button\" rel=\"internal\"><b><span>Sign Up</span></b></a>\n    <% } else { %>\n      <a href='<%= next_level_url %>' id=\"next\" class=\"button\"><b><span>Next Level</span></b></a>\n      <h3>Congratulations, You've Completed Level <%= lab_number %>!</h3>\n      <p>\n        You've unlocked the next video and set of challenges! Why not let your friends know about your awesome accomplishment?\n      </p>\n      <div class='share-stuff'></div>\n    <% } %>\n  <% } else { %>\n    <a href='<%= next_challenge_url %>' id=\"next\" class=\"button\"><b><span>Next Challenge</span></b></a>\n    <p>You've Successfully Completed Challenge <%= number %>!</p>\n    <% if (extra_credit_instructions.text) { %>\n      <p>\n        <a href='#' class='play-extra-credit'>Play extra credit</a>\n      </p>\n    <% } %>\n  <% } %>\n</div>"), initialize: function () {
        return this.textEditorView = this.options.textEditor, this.editorGroupView = this.options.editorGroupView, this.oldSubmissionUrl = this.options.codeSubmissionUrl, _.bindAll(this, "render")
    }, render: function () {
        return jQuery("#notifications").fadeOut(), this.model.extra_output != null && CourseApp[this.model.extra_output.call] != null && CourseApp[this.model.extra_output.call](this.model.extra_output.cmd), this.setupFaceboxModal(), this.setupSharingOptions(), this.setupNextLessonKeyboardNavigation(), this.setupExtraCredit(), this.setupPracticeConsole()
    }, setupExtraCredit: function () {
        var a, b;
        return a = this.editorGroupView, b = this.oldSubmissionUrl, jQuery(".play-extra-credit").live("click", function (b) {
            return jQuery(document).trigger("close.facebox"), b.preventDefault(), jQuery("#extra-credit-instructions").show(), jQuery("#instructions").css({"text-decoration": "line-through", opacity: .5}), a ? a.addExperimentConsole() : window.CourseApp.setExperimentMode(!0)
        })
    }, setupNextLessonKeyboardNavigation: function () {
        return jQuery(document).one("keydown", function (a) {
            if (a.which === 39 || a.which === 13)return document.location.href = jQuery("#next").attr("href"), a.preventDefault()
        })
    }, setupSharingOptions: function () {
        return jQuery(".success-message .share-stuff").append(jQuery("#twitter-button-wrapper").html())
    }, setupFaceboxModal: function () {
        var a;
        return a = this.template(this.model), jQuery.facebox(a, "success"), jQuery(".success-close").live("click", function (a) {
            return jQuery(document).trigger("close.facebox"), a.preventDefault()
        })
    }, setupPracticeConsole: function () {
        var a;
        if (this.model.practice_console != null)return a = new CourseApp.Views.PracticeConsole({model: this.model.practice_console}), jQuery(".extra-success").append(a.render().el), jQuery(".extra-success").show()
    }})
}.call(this), function () {
    CourseApp.Views.ViewSourceBox = Backbone.View.extend({template: _.template("<a href='#' class=\"view_source-close\">Close</a>\n<pre><code class='html'><%= model.escape('html') %></code></pre>"), initialize: function () {
        return _.bindAll(this, "render")
    }, render: function () {
        var a;
        return a = this.template({model: this.model}), jQuery.facebox(a, "view_source"), jQuery(".view_source-close").live("click", function (a) {
            return jQuery(document).trigger("close.facebox"), a.preventDefault()
        })
    }})
}.call(this), function () {
    CourseApp.Views.PracticeConsoleTab = CourseApp.Views.Tab.extend({afterInsertIntoDom: function () {
    }, render: function () {
        var a, b;
        return _.bindAll(this, "commandValidate", "commandHandle", "cancelHandle", "doSubmitCode"), this.cancelFlag = !1, this.editor == null && (this.editor = jQuery(this.el).console({promptLabel: (a = this.model.get("render")) != null ? a.console : void 0, animateScroll: !0, promptHistory: !0, welcomeMessage: (b = this.model.get("render")) != null ? b.welcome : void 0, autofocus: !0, commandValidate: this.commandValidate, commandHandle: this.commandHandle, cancelHandle: this.cancelHandle})), this
    }, commandValidate: function (a) {
        return a !== ""
    }, doSubmitCode: function (a) {
        var b, c;
        return c = window.location.href + "/practice", b = [CourseApp.get_main_editor_text(), a].join("###################"), jQuery.ajax({type: "PUT", url: c, data: {cmd: b}, success: this.commandSuccess, dataType: "json"}), jQuery(this.el).addClass("loading")
    }, commandHandle: function (a, b, c) {
        this.current_line = a, this.current_report = b, this.current_prompt = c, _.bindAll(this, "commandSuccess");
        switch (this.current_line) {
            case"clear":
                return this.editor.reset();
            default:
                return this.doSubmitCode(this.current_line)
        }
    }, cancelHandle: function () {
        return this.cancelFlag = !0
    }, blur: function () {
        return this.editor.blur()
    }, focus: function () {
        return this.editor.focus()
    }, commandSuccess: function (a, b, c) {
        return a.files && CourseApp.fileBrowser.update(a.files), this.handleSubmissionResponse(a, b, c), jQuery(this.el).removeClass("loading")
    }, handleSubmissionResponse: function (a, b, c) {
        var d, e;
        return d = a.output != null ? a.output : (e = this.model.get("render")) != null ? e.blank_message : void 0, this.current_report({msg1: {msg: d}})
    }})
}.call(this), function () {
    CourseApp.Views.PracticeConsole = Backbone.View.extend({render: function () {
        return _.bindAll(this, "commandValidate", "commandHandle", "cancelHandle", "doSubmitCode"), this.cancelFlag = !1, this.editor == null && (this.editor = jQuery(this.el).console({promptLabel: this.model.console, animateScroll: !0, promptHistory: !0, welcomeMessage: this.model.welcome, autofocus: !0, commandValidate: this.commandValidate, commandHandle: this.commandHandle, cancelHandle: this.cancelHandle})), this
    }, commandValidate: function (a) {
        return a !== ""
    }, doSubmitCode: function (a) {
        var b, c;
        return c = window.location.href + "/practice", b = [CourseApp.get_main_editor_text(), a].join("###################"), jQuery.ajax({type: "PUT", url: c, data: {cmd: b}, success: this.commandSuccess, dataType: "json"}), jQuery(this.el).addClass("loading")
    }, commandHandle: function (a, b, c) {
        this.current_line = a, this.current_report = b, this.current_prompt = c, _.bindAll(this, "commandSuccess");
        switch (this.current_line) {
            case"clear":
                return this.editor.reset();
            default:
                return this.doSubmitCode(this.current_line)
        }
    }, cancelHandle: function () {
        return this.cancelFlag = !0
    }, blur: function () {
        return this.editor.blur()
    }, focus: function () {
        return this.editor.focus()
    }, commandSuccess: function (a, b, c) {
        return a.files && CourseApp.fileBrowser.update(a.files), this.handleSubmissionResponse(a, b, c), jQuery(this.el).removeClass("loading")
    }, handleSubmissionResponse: function (a, b, c) {
        var d;
        return d = a.output != null ? a.output : this.model.blank_message, this.current_report({msg1: {msg: d}})
    }})
}.call(this), window.CodeMirror = function () {
    function w(a, c) {
        if (!(this instanceof w))return new w(a, c);
        this.options = c = c || {};
        for (var d in Sc)!c.hasOwnProperty(d) && Sc.hasOwnProperty(d) && (c[d] = Sc[d]);
        I(c);
        var e = typeof c.value == "string" ? 0 : c.value.first, f = this.display = x(a, e);
        f.wrapper.CodeMirror = this, F(this), c.autofocus && !o && Hb(this), this.state = {keyMaps: [], overlays: [], modeGen: 0, overwrite: !1, focused: !1, suppressEdits: !1, pasteIncoming: !1, draggingText: !1, highlight: new Ke}, D(this), c.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap");
        var g = c.value;
        typeof g == "string" && (g = new Yd(c.value, c.mode)), zb(this, ae)(this, g), b && setTimeout(Ue(Gb, this, !0), 20), Jb(this);
        var h;
        try {
            h = document.activeElement == f.input
        } catch (i) {
        }
        h || c.autofocus && !o ? setTimeout(Ue(dc, this), 20) : ec(this), zb(this, function () {
            for (var a in Rc)Rc.propertyIsEnumerable(a) && Rc[a](this, c[a], Uc);
            for (var b = 0; b < Yc.length; ++b)Yc[b](this)
        })()
    }

    function x(a, b) {
        var d = {}, f = d.input = Ze("textarea", null, null, "position: absolute; padding: 0; width: 1px; height: 1em; outline: none;");
        e ? f.style.width = "1000px" : f.setAttribute("wrap", "off"), n && (f.style.border = "1px solid black"), f.setAttribute("autocorrect", "off"), f.setAttribute("autocapitalize", "off"), d.inputDiv = Ze("div", [f], null, "overflow: hidden; position: relative; width: 3px; height: 0px;"), d.scrollbarH = Ze("div", [Ze("div", null, null, "height: 1px")], "CodeMirror-hscrollbar"), d.scrollbarV = Ze("div", [Ze("div", null, null, "width: 1px")], "CodeMirror-vscrollbar"), d.scrollbarFiller = Ze("div", null, "CodeMirror-scrollbar-filler"), d.lineDiv = Ze("div"), d.selectionDiv = Ze("div", null, null, "position: relative; z-index: 1"), d.cursor = Ze("div", "聽", "CodeMirror-cursor"), d.otherCursor = Ze("div", "聽", "CodeMirror-cursor CodeMirror-secondarycursor"), d.measure = Ze("div", null, "CodeMirror-measure"), d.lineSpace = Ze("div", [d.measure, d.selectionDiv, d.lineDiv, d.cursor, d.otherCursor], null, "position: relative; outline: none"), d.mover = Ze("div", [Ze("div", [d.lineSpace], "CodeMirror-lines")], null, "position: relative"), d.sizer = Ze("div", [d.mover], "CodeMirror-sizer"), d.heightForcer = Ze("div", null, null, "position: absolute; height: " + Ie + "px; width: 1px;"), d.gutters = Ze("div", null, "CodeMirror-gutters"), d.lineGutter = null;
        var g = Ze("div", [d.sizer, d.heightForcer, d.gutters], null, "position: relative; min-height: 100%");
        return d.scroller = Ze("div", [g], "CodeMirror-scroll"), d.scroller.setAttribute("tabIndex", "-1"), d.wrapper = Ze("div", [d.inputDiv, d.scrollbarH, d.scrollbarV, d.scrollbarFiller, d.scroller], "CodeMirror"), c && (d.gutters.style.zIndex = -1, d.scroller.style.paddingRight = 0), a.appendChild ? a.appendChild(d.wrapper) : a(d.wrapper), n && (f.style.width = "0px"), e || (d.scroller.draggable = !0), j ? (d.inputDiv.style.height = "1px", d.inputDiv.style.position = "absolute") : c && (d.scrollbarH.style.minWidth = d.scrollbarV.style.minWidth = "18px"), d.viewOffset = d.lastSizeC = 0, d.showingFrom = d.showingTo = b, d.lineNumWidth = d.lineNumInnerWidth = d.lineNumChars = null, d.prevInput = "", d.alignWidgets = !1, d.pollingFast = !1, d.poll = new Ke, d.draggingText = !1, d.cachedCharWidth = d.cachedTextHeight = null, d.measureLineCache = [], d.measureLineCachePos = 0, d.inaccurateSelection = !1, d.maxLine = null, d.maxLineLength = 0, d.maxLineChanged = !1, d.wheelDX = d.wheelDY = d.wheelStartX = d.wheelStartY = null, d
    }

    function y(a) {
        a.doc.mode = w.getMode(a.options, a.doc.modeOption), a.doc.iter(function (a) {
            a.stateAfter && (a.stateAfter = null), a.styles && (a.styles = null)
        }), a.doc.frontier = a.doc.first, _(a, 100), a.state.modeGen++, a.curOp && Cb(a)
    }

    function z(a) {
        a.options.lineWrapping ? (a.display.wrapper.className += " CodeMirror-wrap", a.display.sizer.style.minWidth = "") : (a.display.wrapper.className = a.display.wrapper.className.replace(" CodeMirror-wrap", ""), H(a)), B(a), Cb(a), lb(a), setTimeout(function () {
            J(a.display, a.doc.height)
        }, 100)
    }

    function A(a) {
        var b = ub(a.display), c = a.options.lineWrapping, d = c && Math.max(5, a.display.scroller.clientWidth / vb(a.display) - 3);
        return function (e) {
            return wd(a.doc, e) ? 0 : c ? (Math.ceil(e.text.length / d) || 1) * b : b
        }
    }

    function B(a) {
        var b = a.doc, c = A(a);
        b.iter(function (a) {
            var b = c(a);
            b != a.height && ee(a, b)
        })
    }

    function C(a) {
        var b = ad[a.options.keyMap].style;
        a.display.wrapper.className = a.display.wrapper.className.replace(/\s*cm-keymap-\S+/g, "") + (b ? " cm-keymap-" + b : "")
    }

    function D(a) {
        a.display.wrapper.className = a.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + a.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), lb(a)
    }

    function E(a) {
        F(a), Cb(a)
    }

    function F(a) {
        var b = a.display.gutters, c = a.options.gutters;
        $e(b);
        for (var d = 0; d < c.length; ++d) {
            var e = c[d], f = b.appendChild(Ze("div", null, "CodeMirror-gutter " + e));
            e == "CodeMirror-linenumbers" && (a.display.lineGutter = f, f.style.width = (a.display.lineNumWidth || 1) + "px")
        }
        b.style.display = d ? "" : "none"
    }

    function G(a, b) {
        if (b.height == 0)return 0;
        var c = b.text.length, d, e = b;
        while (d = td(e)) {
            var f = d.find();
            e = be(a, f.from.line), c += f.from.ch - f.to.ch
        }
        e = b;
        while (d = ud(e)) {
            var f = d.find();
            c -= e.text.length - f.from.ch, e = be(a, f.to.line), c += e.text.length - f.to.ch
        }
        return c
    }

    function H(a) {
        var b = a.display, c = a.doc;
        b.maxLine = be(c, c.first), b.maxLineLength = G(c, b.maxLine), b.maxLineChanged = !0, c.iter(function (a) {
            var d = G(c, a);
            d > b.maxLineLength && (b.maxLineLength = d, b.maxLine = a)
        })
    }

    function I(a) {
        var b = !1;
        for (var c = 0; c < a.gutters.length; ++c)a.gutters[c] == "CodeMirror-linenumbers" && (a.lineNumbers ? b = !0 : a.gutters.splice(c--, 1));
        !b && a.lineNumbers && a.gutters.push("CodeMirror-linenumbers")
    }

    function J(a, b) {
        var c = b + eb(a);
        a.sizer.style.minHeight = a.heightForcer.style.top = c + "px";
        var d = Math.max(c, a.scroller.scrollHeight), e = a.scroller.scrollWidth > a.scroller.clientWidth, f = d > a.scroller.clientHeight;
        f ? (a.scrollbarV.style.display = "block", a.scrollbarV.style.bottom = e ? ff(a.measure) + "px" : "0", a.scrollbarV.firstChild.style.height = d - a.scroller.clientHeight + a.scrollbarV.clientHeight + "px") : a.scrollbarV.style.display = "", e ? (a.scrollbarH.style.display = "block", a.scrollbarH.style.right = f ? ff(a.measure) + "px" : "0", a.scrollbarH.firstChild.style.width = a.scroller.scrollWidth - a.scroller.clientWidth + a.scrollbarH.clientWidth + "px") : a.scrollbarH.style.display = "", e && f ? (a.scrollbarFiller.style.display = "block", a.scrollbarFiller.style.height = a.scrollbarFiller.style.width = ff(a.measure) + "px") : a.scrollbarFiller.style.display = "", k && ff(a.measure) === 0 && (a.scrollbarV.style.minWidth = a.scrollbarH.style.minHeight = l ? "18px" : "12px")
    }

    function K(a, b, c) {
        var d = a.scroller.scrollTop, e = a.wrapper.clientHeight;
        typeof c == "number" ? d = c : c && (d = c.top, e = c.bottom - c.top), d = Math.floor(d - db(a));
        var f = Math.ceil(d + e);
        return{from: ge(b, d), to: ge(b, f)}
    }

    function L(a) {
        var b = a.display;
        if (!b.alignWidgets && (!b.gutters.firstChild || !a.options.fixedGutter))return;
        var c = O(b) - b.scroller.scrollLeft + a.doc.scrollLeft, d = b.gutters.offsetWidth, e = c + "px";
        for (var f = b.lineDiv.firstChild; f; f = f.nextSibling)if (f.alignable)for (var g = 0, h = f.alignable; g < h.length; ++g)h[g].style.left = e;
        a.options.fixedGutter && (b.gutters.style.left = c + d + "px")
    }

    function M(a) {
        if (!a.options.lineNumbers)return!1;
        var b = a.doc, c = N(a.options, b.first + b.size - 1), d = a.display;
        if (c.length != d.lineNumChars) {
            var e = d.measure.appendChild(Ze("div", [Ze("div", c)], "CodeMirror-linenumber CodeMirror-gutter-elt")), f = e.firstChild.offsetWidth, g = e.offsetWidth - f;
            return d.lineGutter.style.width = "", d.lineNumInnerWidth = Math.max(f, d.lineGutter.offsetWidth - g), d.lineNumWidth = d.lineNumInnerWidth + g, d.lineNumChars = d.lineNumInnerWidth ? c.length : -1, d.lineGutter.style.width = d.lineNumWidth + "px", !0
        }
        return!1
    }

    function N(a, b) {
        return String(a.lineNumberFormatter(b + a.firstLineNumber))
    }

    function O(a) {
        return bf(a.scroller).left - bf(a.sizer).left
    }

    function P(a, b, c) {
        var d = a.display.showingFrom, e = a.display.showingTo, f = Q(a, b, c);
        return f && (Fe(a, "update", a), (a.display.showingFrom != d || a.display.showingTo != e) && Fe(a, "viewportChange", a, a.display.showingFrom, a.display.showingTo)), X(a), J(a.display, a.doc.height), f
    }

    function Q(a, b, d) {
        var e = a.display, f = a.doc;
        if (!e.wrapper.clientWidth) {
            e.showingFrom = e.showingTo = f.first, e.viewOffset = 0;
            return
        }
        var g = K(e, f, d);
        if (b.length == 0 && g.from > e.showingFrom && g.to < e.showingTo)return;
        M(a) && (b = [
            {from: f.first, to: f.first + f.size}
        ]);
        var h = e.sizer.style.marginLeft = e.gutters.offsetWidth + "px";
        e.scrollbarH.style.left = a.options.fixedGutter ? h : "0";
        var i = Infinity;
        if (a.options.lineNumbers)for (var j = 0; j < b.length; ++j)if (b[j].diff) {
            i = b[j].from;
            break
        }
        var k = f.first + f.size, l = Math.max(g.from - a.options.viewportMargin, f.first), m = Math.min(k, g.to + a.options.viewportMargin);
        e.showingFrom < l && l - e.showingFrom < 20 && (l = Math.max(f.first, e.showingFrom)), e.showingTo > m && e.showingTo - m < 20 && (m = Math.min(k, e.showingTo));
        if (v) {
            l = fe(vd(f, be(f, l)));
            while (m < k && wd(f, be(f, m)))++m
        }
        var n = [
            {from: Math.max(e.showingFrom, f.first), to: Math.min(e.showingTo, k)}
        ];
        n[0].from >= n[0].to ? n = [] : n = S(n, b);
        if (v)for (var j = 0; j < n.length; ++j) {
            var o = n[j], p;
            while (p = ud(be(f, o.to - 1))) {
                var q = p.find().from.line;
                if (!(q > o.from)) {
                    n.splice(j--, 1);
                    break
                }
                o.to = q
            }
        }
        var r = 0;
        for (var j = 0; j < n.length; ++j) {
            var o = n[j];
            o.from < l && (o.from = l), o.to > m && (o.to = m), o.from >= o.to ? n.splice(j--, 1) : r += o.to - o.from
        }
        if (r == m - l && l == e.showingFrom && m == e.showingTo) {
            R(a);
            return
        }
        n.sort(function (a, b) {
            return a.from - b.from
        });
        var s = document.activeElement;
        r < (m - l) * .7 && (e.lineDiv.style.display = "none"), U(a, l, m, n, i), e.lineDiv.style.display = "", document.activeElement != s && s.offsetHeight && s.focus();
        var t = l != e.showingFrom || m != e.showingTo || e.lastSizeC != e.wrapper.clientHeight;
        t && (e.lastSizeC = e.wrapper.clientHeight), e.showingFrom = l, e.showingTo = m, _(a, 100);
        var u = e.lineDiv.offsetTop;
        for (var w = e.lineDiv.firstChild, x; w; w = w.nextSibling)if (w.lineObj) {
            if (c) {
                var y = w.offsetTop + w.offsetHeight;
                x = y - u, u = y
            } else {
                var z = bf(w);
                x = z.bottom - z.top
            }
            var A = w.lineObj.height - x;
            x < 2 && (x = ub(e));
            if (A > .001 || A < -0.001) {
                ee(w.lineObj, x);
                var B = w.lineObj.widgets;
                if (B)for (var j = 0; j < B.length; ++j)B[j].height = B[j].node.offsetHeight
            }
        }
        return R(a), K(e, f, d).to > m && Q(a, [], d), !0
    }

    function R(a) {
        var b = a.display.viewOffset = he(a, be(a.doc, a.display.showingFrom));
        a.display.mover.style.top = b + "px"
    }

    function S(a, b) {
        for (var c = 0, d = b.length || 0; c < d; ++c) {
            var e = b[c], f = [], g = e.diff || 0;
            for (var h = 0, i = a.length; h < i; ++h) {
                var j = a[h];
                e.to <= j.from && e.diff ? f.push({from: j.from + g, to: j.to + g}) : e.to <= j.from || e.from >= j.to ? f.push(j) : (e.from > j.from && f.push({from: j.from, to: e.from}), e.to < j.to && f.push({from: e.to + g, to: j.to + g}))
            }
            a = f
        }
        return a
    }

    function T(a) {
        var b = a.display, c = {}, d = {};
        for (var e = b.gutters.firstChild, f = 0; e; e = e.nextSibling, ++f)c[a.options.gutters[f]] = e.offsetLeft, d[a.options.gutters[f]] = e.offsetWidth;
        return{fixedPos: O(b), gutterTotalWidth: b.gutters.offsetWidth, gutterLeft: c, gutterWidth: d, wrapperWidth: b.wrapper.clientWidth}
    }

    function U(a, b, c, d, f) {
        function l(b) {
            var c = b.nextSibling;
            return e && p && a.display.currentWheelTarget == b ? (b.style.display = "none", b.lineObj = null) : b.parentNode.removeChild(b), c
        }

        var g = T(a), h = a.display, i = a.options.lineNumbers;
        !d.length && (!e || !a.display.currentWheelTarget) && $e(h.lineDiv);
        var j = h.lineDiv, k = j.firstChild, m = d.shift(), n = b;
        a.doc.iter(b, c, function (b) {
            m && m.to == n && (m = d.shift());
            if (wd(a.doc, b)) {
                b.height != 0 && ee(b, 0);
                if (b.widgets && k.previousSibling)for (var c = 0; c < b.widgets.length; ++c)if (b.widgets[c].showIfHidden) {
                    var e = k.previousSibling;
                    if (/pre/i.test(e.nodeName)) {
                        var h = Ze("div", null, null, "position: relative");
                        e.parentNode.replaceChild(h, e), h.appendChild(e), e = h
                    }
                    var o = e.appendChild(Ze("div", [b.widgets[c].node], "CodeMirror-linewidget"));
                    W(b.widgets[c], o, e, g)
                }
            } else if (m && m.from <= n && m.to > n) {
                while (k.lineObj != b)k = l(k);
                i && f <= n && k.lineNumber && af(k.lineNumber, N(a.options, n)), k = k.nextSibling
            } else {
                if (b.widgets)for (var p = 0, q = k, r; q && p < 20; ++p, q = q.nextSibling)if (q.lineObj == b && /div/i.test(q.nodeName)) {
                    r = q;
                    break
                }
                var s = V(a, b, n, g, r);
                if (s != r)j.insertBefore(s, k); else {
                    while (k != r)k = l(k);
                    k = k.nextSibling
                }
                s.lineObj = b
            }
            ++n
        });
        while (k)k = l(k)
    }

    function V(a, b, d, e, f) {
        var g = Nd(a, b), h = b.gutterMarkers, i = a.display, j;
        if (!a.options.lineNumbers && !h && !b.bgClass && !b.wrapClass && !b.widgets)return g;
        if (f) {
            f.alignable = null;
            var k = !0, l = 0;
            for (var m = f.firstChild, n; m; m = n) {
                n = m.nextSibling;
                if (!/\bCodeMirror-linewidget\b/.test(m.className))f.removeChild(m); else {
                    for (var o = 0, p = !0; o < b.widgets.length; ++o) {
                        var q = b.widgets[o], r = !1;
                        q.above || (r = p, p = !1);
                        if (q.node == m.firstChild) {
                            W(q, m, f, e), ++l, r && f.insertBefore(g, m);
                            break
                        }
                    }
                    if (o == b.widgets.length) {
                        k = !1;
                        break
                    }
                }
            }
            k && l == b.widgets.length && (j = f, f.className = b.wrapClass || "")
        }
        j || (j = Ze("div", null, b.wrapClass, "position: relative"), j.appendChild(g)), b.bgClass && j.insertBefore(Ze("div", null, b.bgClass + " CodeMirror-linebackground"), j.firstChild);
        if (a.options.lineNumbers || h) {
            var s = j.insertBefore(Ze("div", null, null, "position: absolute; left: " + (a.options.fixedGutter ? e.fixedPos : -e.gutterTotalWidth) + "px"), j.firstChild);
            a.options.fixedGutter && (j.alignable || (j.alignable = [])).push(s), a.options.lineNumbers && (!h || !h["CodeMirror-linenumbers"]) && (j.lineNumber = s.appendChild(Ze("div", N(a.options, d), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + e.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + i.lineNumInnerWidth + "px")));
            if (h)for (var t = 0; t < a.options.gutters.length; ++t) {
                var u = a.options.gutters[t], v = h.hasOwnProperty(u) && h[u];
                v && s.appendChild(Ze("div", [v], "CodeMirror-gutter-elt", "left: " + e.gutterLeft[u] + "px; width: " + e.gutterWidth[u] + "px"))
            }
        }
        c && (j.style.zIndex = 2);
        if (b.widgets && j != f)for (var o = 0, w = b.widgets; o < w.length; ++o) {
            var q = w[o], x = Ze("div", [q.node], "CodeMirror-linewidget");
            W(q, x, j, e), q.above ? j.insertBefore(x, a.options.lineNumbers && b.height != 0 ? s : g) : j.appendChild(x), Fe(q, "redraw")
        }
        return j
    }

    function W(a, b, c, d) {
        if (a.noHScroll) {
            (c.alignable || (c.alignable = [])).push(b);
            var e = d.wrapperWidth;
            b.style.left = d.fixedPos + "px", a.coverGutter || (e -= d.gutterTotalWidth, b.style.paddingLeft = d.gutterTotalWidth + "px"), b.style.width = e + "px"
        }
        a.coverGutter && (b.style.zIndex = 5, b.style.position = "relative", a.noHScroll || (b.style.marginLeft = -d.gutterTotalWidth + "px"))
    }

    function X(a) {
        var b = a.display, c = tc(a.doc.sel.from, a.doc.sel.to);
        c || a.options.showCursorWhenSelecting ? Y(a) : b.cursor.style.display = b.otherCursor.style.display = "none", c ? b.selectionDiv.style.display = "none" : Z(a);
        var d = pb(a, a.doc.sel.head, "div"), e = bf(b.wrapper), f = bf(b.lineDiv);
        b.inputDiv.style.top = Math.max(0, Math.min(b.wrapper.clientHeight - 10, d.top + f.top - e.top)) + "px", b.inputDiv.style.left = Math.max(0, Math.min(b.wrapper.clientWidth - 10, d.left + f.left - e.left)) + "px"
    }

    function Y(a) {
        var b = a.display, c = pb(a, a.doc.sel.head, "div");
        b.cursor.style.left = c.left + "px", b.cursor.style.top = c.top + "px", b.cursor.style.height = Math.max(0, c.bottom - c.top) * a.options.cursorHeight + "px", b.cursor.style.display = "", c.other ? (b.otherCursor.style.display = "", b.otherCursor.style.left = c.other.left + "px", b.otherCursor.style.top = c.other.top + "px", b.otherCursor.style.height = (c.other.bottom - c.other.top) * .85 + "px") : b.otherCursor.style.display = "none"
    }

    function Z(a) {
        function h(a, b, c, d) {
            b < 0 && (b = 0), e.appendChild(Ze("div", null, "CodeMirror-selected", "position: absolute; left: " + a + "px; top: " + b + "px; width: " + (c == null ? f - a : c) + "px; height: " + (d - b) + "px"))
        }

        function i(b, d, e, i) {
            function m(c) {
                return ob(a, sc(b, c), "div", j)
            }

            var j = be(c, b), k = j.text.length, l = i ? Infinity : -Infinity;
            return nf(ie(j), d || 0, e == null ? k : e, function (a, b, c) {
                var j = m(c == "rtl" ? b - 1 : a), n = m(c == "rtl" ? a : b - 1), o = j.left, p = n.right;
                n.top - j.top > 3 && (h(o, j.top, null, j.bottom), o = g, j.bottom < n.top && h(o, j.bottom, null, n.top)), e == null && b == k && (p = f), d == null && a == 0 && (o = g), l = i ? Math.min(n.top, l) : Math.max(n.bottom, l), o < g + 1 && (o = g), h(o, n.top, p - o, n.bottom)
            }), l
        }

        var b = a.display, c = a.doc, d = a.doc.sel, e = document.createDocumentFragment(), f = b.lineSpace.offsetWidth, g = fb(a.display);
        if (d.from.line == d.to.line)i(d.from.line, d.from.ch, d.to.ch); else {
            var j = be(c, d.from.line), k = j, l, m = [d.from.line, d.from.ch], n;
            while (l = ud(k)) {
                var o = l.find();
                m.push(o.from.ch, o.to.line, o.to.ch);
                if (o.to.line == d.to.line) {
                    m.push(d.to.ch), n = !0;
                    break
                }
                k = be(c, o.to.line)
            }
            if (n)for (var p = 0; p < m.length; p += 3)i(m[p], m[p + 1], m[p + 2]); else {
                var q, r, s = be(c, d.to.line);
                d.from.ch ? q = i(d.from.line, d.from.ch, null, !1) : q = he(a, j) - b.viewOffset, d.to.ch ? r = i(d.to.line, td(s) ? null : 0, d.to.ch, !0) : r = he(a, s) - b.viewOffset, q < r && h(g, q, null, r)
            }
        }
        _e(b.selectionDiv, e), b.selectionDiv.style.display = ""
    }

    function $(a) {
        var b = a.display;
        clearInterval(b.blinker);
        var c = !0;
        b.cursor.style.visibility = b.otherCursor.style.visibility = "", b.blinker = setInterval(function () {
            if (!b.cursor.offsetHeight)return;
            b.cursor.style.visibility = b.otherCursor.style.visibility = (c = !c) ? "" : "hidden"
        }, a.options.cursorBlinkRate)
    }

    function _(a, b) {
        a.doc.mode.startState && a.doc.frontier < a.display.showingTo && a.state.highlight.set(b, Ue(ab, a))
    }

    function ab(a) {
        var b = a.doc;
        b.frontier < b.first && (b.frontier = b.first);
        if (b.frontier >= a.display.showingTo)return;
        var c = +(new Date) + a.options.workTime, d = Zc(b.mode, cb(a, b.frontier)), e = [], f;
        b.iter(b.frontier, Math.min(b.first + b.size, a.display.showingTo + 500), function (g) {
            if (b.frontier >= a.display.showingFrom) {
                var h = g.styles;
                g.styles = Id(a, g, d);
                var i = !h || h.length != g.styles.length;
                for (var j = 0; !i && j < h.length; ++j)i = h[j] != g.styles[j];
                i && (f && f.end == b.frontier ? f.end++ : e.push(f = {start: b.frontier, end: b.frontier + 1})), g.stateAfter = Zc(b.mode, d)
            } else Kd(a, g, d), g.stateAfter = b.frontier % 5 == 0 ? Zc(b.mode, d) : null;
            ++b.frontier;
            if (+(new Date) > c)return _(a, a.options.workDelay), !0
        }), e.length && zb(a, function () {
            for (var a = 0; a < e.length; ++a)Cb(this, e[a].start, e[a].end)
        })()
    }

    function bb(a, b) {
        var c, d, e = a.doc;
        for (var f = b, g = b - 100; f > g; --f) {
            if (f <= e.first)return e.first;
            var h = be(e, f - 1);
            if (h.stateAfter)return f;
            var i = Le(h.text, null, a.options.tabSize);
            if (d == null || c > i)d = f - 1, c = i
        }
        return d
    }

    function cb(a, b) {
        var c = a.doc, d = a.display;
        if (!c.mode.startState)return!0;
        var e = bb(a, b), f = e > c.first && be(c, e - 1).stateAfter;
        return f ? f = Zc(c.mode, f) : f = $c(c.mode), c.iter(e, b, function (g) {
            Kd(a, g, f);
            var h = e == b - 1 || e % 5 == 0 || e >= d.showingFrom && e < d.showingTo;
            g.stateAfter = h ? Zc(c.mode, f) : null, ++e
        }), f
    }

    function db(a) {
        return a.lineSpace.offsetTop
    }

    function eb(a) {
        return a.mover.offsetHeight - a.lineSpace.offsetHeight
    }

    function fb(a) {
        var b = _e(a.measure, Ze("pre", null, null, "text-align: left")).appendChild(Ze("span", "x"));
        return b.offsetLeft
    }

    function gb(a, b, c, d) {
        var e = -1;
        d = d || ib(a, b);
        for (var f = c; ; f += e) {
            var g = d[f];
            if (g)break;
            e < 0 && f == 0 && (e = 1)
        }
        return{left: f < c ? g.right : g.left, right: f > c ? g.left : g.right, top: g.top, bottom: g.bottom}
    }

    function hb(a, b) {
        var c = a.display.measureLineCache;
        for (var d = 0; d < c.length; ++d) {
            var e = c[d];
            if (e.text == b.text && e.markedSpans == b.markedSpans && a.display.scroller.clientWidth == e.width && e.classes == b.textClass + "|" + b.bgClass + "|" + b.wrapClass)return e.measure
        }
    }

    function ib(a, b) {
        var c = hb(a, b);
        if (!c) {
            c = jb(a, b);
            var d = a.display.measureLineCache, e = {text: b.text, width: a.display.scroller.clientWidth, markedSpans: b.markedSpans, measure: c, classes: b.textClass + "|" + b.bgClass + "|" + b.wrapClass};
            d.length == 16 ? d[++a.display.measureLineCachePos % 16] = e : d.push(e)
        }
        return c
    }

    function jb(a, e) {
        var f = a.display, g = Te(e.text.length), h = Nd(a, e, g);
        if (b && !c && !a.options.lineWrapping && h.childNodes.length > 100) {
            var i = document.createDocumentFragment(), j = 10, k = h.childNodes.length;
            for (var l = 0, m = Math.ceil(k / j); l < m; ++l) {
                var n = Ze("div", null, null, "display: inline-block");
                for (var o = 0; o < j && k; ++o)n.appendChild(h.firstChild), --k;
                i.appendChild(n)
            }
            h.appendChild(i)
        }
        _e(f.measure, h);
        var p = bf(f.lineDiv), q = [], r = Te(e.text.length), s = h.offsetHeight;
        d && f.measure.first != h && _e(f.measure, h);
        for (var l = 0, t; l < g.length; ++l)if (t = g[l]) {
            var u = bf(t), v = Math.max(0, u.top - p.top), w = Math.min(u.bottom - p.top, s);
            for (var o = 0; o < q.length; o += 2) {
                var x = q[o], y = q[o + 1];
                if (x > w || y < v)continue;
                if (x <= v && y >= w || v <= x && w >= y || Math.min(w, y) - Math.max(v, x) >= w - v >> 1) {
                    q[o] = Math.min(v, x), q[o + 1] = Math.max(w, y);
                    break
                }
            }
            o == q.length && q.push(v, w);
            var z = u.right;
            t.measureRight && (z = bf(t.measureRight).left), r[l] = {left: u.left - p.left, right: z - p.left, top: o}
        }
        for (var l = 0, t; l < r.length; ++l)if (t = r[l]) {
            var A = t.top;
            t.top = q[A], t.bottom = q[A + 1]
        }
        return r
    }

    function kb(a, b) {
        var c = !1;
        if (b.markedSpans)for (var d = 0; d < b.markedSpans; ++d) {
            var e = b.markedSpans[d];
            e.collapsed && (e.to == null || e.to == b.text.length) && (c = !0)
        }
        var f = !c && hb(a, b);
        if (f)return gb(a, b, b.text.length, f).right;
        var g = Nd(a, b), h = g.appendChild(hf(a.display.measure));
        return _e(a.display.measure, g), bf(h).right - bf(a.display.lineDiv).left
    }

    function lb(a) {
        a.display.measureLineCache.length = a.display.measureLineCachePos = 0, a.display.cachedCharWidth = a.display.cachedTextHeight = null, a.display.maxLineChanged = !0, a.display.lineNumChars = null
    }

    function mb(a, b, c, d) {
        if (b.widgets)for (var e = 0; e < b.widgets.length; ++e)if (b.widgets[e].above) {
            var f = Cd(b.widgets[e]);
            c.top += f, c.bottom += f
        }
        if (d == "line")return c;
        d || (d = "local");
        var g = he(a, b);
        d != "local" && (g -= a.display.viewOffset);
        if (d == "page") {
            var h = bf(a.display.lineSpace);
            g += h.top + (window.pageYOffset || (document.documentElement || document.body).scrollTop);
            var i = h.left + (window.pageXOffset || (document.documentElement || document.body).scrollLeft);
            c.left += i, c.right += i
        }
        return c.top += g, c.bottom += g, c
    }

    function nb(a, b, c) {
        if (c == "div")return b;
        var d = b.left, e = b.top;
        c == "page" && (d -= window.pageXOffset || (document.documentElement || document.body).scrollLeft, e -= window.pageYOffset || (document.documentElement || document.body).scrollTop);
        var f = bf(a.display.lineSpace);
        d -= f.left, e -= f.top;
        if (c == "local" || !c) {
            var g = bf(a.display.wrapper);
            d -= g.left, e -= g.top
        }
        return{left: d, top: e}
    }

    function ob(a, b, c, d) {
        return d || (d = be(a.doc, b.line)), mb(a, d, gb(a, d, b.ch), c)
    }

    function pb(a, b, c, d, e) {
        function f(b, f) {
            var g = gb(a, d, b, e);
            return f ? g.left = g.right : g.right = g.left, mb(a, d, g, c)
        }

        d = d || be(a.doc, b.line), e || (e = ib(a, d));
        var g = ie(d), h = b.ch;
        if (!g)return f(h);
        var i, j, k = g[0].level;
        for (var l = 0; l < g.length; ++l) {
            var m = g[l], n = m.level % 2, o, p;
            if (m.from < h && m.to > h)return f(h, n);
            var q = n ? m.to : m.from, r = n ? m.from : m.to;
            if (q == h)l && m.level < (o = g[l - 1]).level ? p = f(o.level % 2 ? o.from : o.to - 1, !0) : p = f(n && m.from != m.to ? h - 1 : h), n == k ? i = p : j = p; else if (r == h) {
                var o = l < g.length - 1 && g[l + 1];
                if (!n && o && o.from == o.to)continue;
                o && m.level < o.level ? p = f(o.level % 2 ? o.to - 1 : o.from) : p = f(n ? h : h - 1, !0), n == k ? i = p : j = p
            }
        }
        return k && !h && (j = f(g[0].to - 1)), i ? (j && (i.other = j), i) : j
    }

    function qb(a, b, c) {
        var d = new sc(a, b);
        return c && (d.outside = !0), d
    }

    function rb(a, b, c) {
        var d = a.doc;
        c += a.display.viewOffset;
        if (c < 0)return qb(d.first, 0, !0);
        var e = ge(d, c), f = d.first + d.size - 1;
        if (e > f)return qb(d.first + d.size - 1, be(d, f).text.length, !0);
        b < 0 && (b = 0);
        for (; ;) {
            var g = be(d, e), h = sb(a, g, e, b, c), i = ud(g), j = i && i.find();
            if (!(i && h.ch >= j.from.ch))return h;
            e = j.to.line
        }
    }

    function sb(a, b, c, d, e) {
        function j(d) {
            var e = pb(a, sc(c, d), "line", b, i);
            return g = !0, f > e.bottom ? e.left - h : f < e.top ? e.left + h : (g = !1, e.left)
        }

        var f = e - he(a, b), g = !1, h = 2 * a.display.wrapper.clientWidth, i = ib(a, b), k = ie(b), l = b.text.length, m = qf(b), n = rf(b), o = j(m), p = g, q = j(n), r = g;
        if (d > q)return qb(c, n, r);
        for (; ;) {
            if (k ? n == m || n == uf(b, m, 1) : n - m <= 1) {
                var s = d - o < q - d, t = s ? m : n;
                while (Ye.test(b.text.charAt(t)))++t;
                var u = qb(c, t, s ? p : r);
                return u.after = s, u
            }
            var v = Math.ceil(l / 2), w = m + v;
            if (k) {
                w = m;
                for (var x = 0; x < v; ++x)w = uf(
                    b, w, 1)
            }
            var y = j(w);
            if (y > d) {
                n = w, q = y;
                if (r = g)q += 1e3;
                l -= v
            } else m = w, o = y, p = g, l = v
        }
    }

    function ub(a) {
        if (a.cachedTextHeight != null)return a.cachedTextHeight;
        if (tb == null) {
            tb = Ze("pre");
            for (var b = 0; b < 49; ++b)tb.appendChild(document.createTextNode("x")), tb.appendChild(Ze("br"));
            tb.appendChild(document.createTextNode("x"))
        }
        _e(a.measure, tb);
        var c = tb.offsetHeight / 50;
        return c > 3 && (a.cachedTextHeight = c), $e(a.measure), c || 1
    }

    function vb(a) {
        if (a.cachedCharWidth != null)return a.cachedCharWidth;
        var b = Ze("span", "x"), c = Ze("pre", [b]);
        _e(a.measure, c);
        var d = b.offsetWidth;
        return d > 2 && (a.cachedCharWidth = d), d || 10
    }

    function xb(a) {
        a.curOp = {changes: [], updateInput: null, userSelChange: null, textChanged: null, selectionChanged: !1, updateMaxLine: !1, updateScrollPos: !1, id: ++wb}, Ee++ || (De = [])
    }

    function yb(a) {
        var b = a.curOp, c = a.doc, d = a.display;
        a.curOp = null, b.updateMaxLine && H(a);
        if (d.maxLineChanged && !a.options.lineWrapping) {
            var e = kb(a, d.maxLine);
            d.sizer.style.minWidth = Math.max(0, e + 3 + Ie) + "px", d.maxLineChanged = !1;
            var f = Math.max(0, d.sizer.offsetLeft + d.sizer.offsetWidth - d.scroller.clientWidth);
            f < c.scrollLeft && !b.updateScrollPos && Tb(a, Math.min(d.scroller.scrollLeft, f), !0)
        }
        var g, h;
        if (b.updateScrollPos)g = b.updateScrollPos; else if (b.selectionChanged && d.scroller.clientHeight) {
            var i = pb(a, c.sel.head);
            g = Ic(a, i.left, i.top, i.left, i.bottom)
        }
        if (b.changes.length || g && g.scrollTop != null)h = P(a, b.changes, g && g.scrollTop), a.display.scroller.offsetHeight && (a.doc.scrollTop = a.display.scroller.scrollTop);
        !h && b.selectionChanged && X(a), b.updateScrollPos ? (d.scroller.scrollTop = d.scrollbarV.scrollTop = c.scrollTop = g.scrollTop, d.scroller.scrollLeft = d.scrollbarH.scrollLeft = c.scrollLeft = g.scrollLeft, L(a)) : g && Fc(a), b.selectionChanged && $(a), a.state.focused && b.updateInput && Gb(a, b.userSelChange);
        var j = b.maybeHiddenMarkers, k = b.maybeUnhiddenMarkers;
        if (j)for (var l = 0; l < j.length; ++l)j[l].lines.length || Ce(j[l], "hide");
        if (k)for (var l = 0; l < k.length; ++l)k[l].lines.length && Ce(k[l], "unhide");
        var m;
        --Ee || (m = De, De = null), b.textChanged && Ce(a, "change", a, b.textChanged), b.selectionChanged && Ce(a, "cursorActivity", a);
        if (m)for (var l = 0; l < m.length; ++l)m[l]()
    }

    function zb(a, b) {
        return function () {
            var c = a || this, d = !c.curOp;
            d && xb(c);
            try {
                var e = b.apply(c, arguments)
            } finally {
                d && yb(c)
            }
            return e
        }
    }

    function Ab(a) {
        return function () {
            var b = this.cm && !this.cm.curOp, c;
            b && xb(this.cm);
            try {
                c = a.apply(this, arguments)
            } finally {
                b && yb(this.cm)
            }
            return c
        }
    }

    function Bb(a, b) {
        var c = !a.curOp, d;
        c && xb(a);
        try {
            d = b()
        } finally {
            c && yb(a)
        }
        return d
    }

    function Cb(a, b, c, d) {
        b == null && (b = a.doc.first), c == null && (c = a.doc.first + a.doc.size), a.curOp.changes.push({from: b, to: c, diff: d})
    }

    function Db(a) {
        if (a.display.pollingFast)return;
        a.display.poll.set(a.options.pollInterval, function () {
            Fb(a), a.state.focused && Db(a)
        })
    }

    function Eb(a) {
        function c() {
            var d = Fb(a);
            !d && !b ? (b = !0, a.display.poll.set(60, c)) : (a.display.pollingFast = !1, Db(a))
        }

        var b = !1;
        a.display.pollingFast = !0, a.display.poll.set(20, c)
    }

    function Fb(a) {
        var c = a.display.input, d = a.display.prevInput, e = a.doc, f = e.sel;
        if (!a.state.focused || kf(c) || Ib(a))return!1;
        var g = c.value;
        if (g == d && tc(f.from, f.to))return!1;
        if (b && g && c.selectionStart === 0)return Gb(a, !0), !1;
        var h = !a.curOp;
        h && xb(a), f.shift = !1;
        var i = 0, j = Math.min(d.length, g.length);
        while (i < j && d[i] == g[i])++i;
        var k = f.from, l = f.to;
        i < d.length ? k = sc(k.line, k.ch - (d.length - i)) : a.state.overwrite && tc(k, l) && !a.state.pasteIncoming && (l = sc(l.line, Math.min(be(e, l.line).text.length, l.ch + (g.length - i))));
        var m = a.curOp.updateInput;
        return lc(a.doc, {from: k, to: l, text: jf(g.slice(i)), origin: a.state.pasteIncoming ? "paste" : "+input"}, "end"), a.curOp.updateInput = m, g.length > 1e3 || g.indexOf("\n") > -1 ? c.value = a.display.prevInput = "" : a.display.prevInput = g, h && yb(a), a.state.pasteIncoming = !1, !0
    }

    function Gb(a, b) {
        var c, d, e = a.doc;
        tc(e.sel.from, e.sel.to) ? b && (a.display.prevInput = a.display.input.value = "") : (a.display.prevInput = "", c = lf && (e.sel.to.line - e.sel.from.line > 100 || (d = a.getSelection()).length > 1e3), c ? a.display.input.value = "-" : a.display.input.value = d || a.getSelection(), a.state.focused && Pe(a.display.input)), a.display.inaccurateSelection = c
    }

    function Hb(a) {
        a.options.readOnly != "nocursor" && (!o || document.activeElement != a.display.input) && a.display.input.focus()
    }

    function Ib(a) {
        return a.options.readOnly || a.doc.cantEdit
    }

    function Jb(a) {
        function c() {
            a.state.focused && setTimeout(Ue(Hb, a), 0)
        }

        function d() {
            b.cachedCharWidth = b.cachedTextHeight = null, lb(a), Bb(a, Ue(Cb, a))
        }

        function e() {
            for (var a = b.wrapper.parentNode; a && a != document.body; a = a.parentNode);
            a ? setTimeout(e, 5e3) : Be(window, "resize", d)
        }

        function f(b) {
            if (a.options.onDragEvent && a.options.onDragEvent(a, ue(b)))return;
            xe(b)
        }

        function g() {
            b.inaccurateSelection && (b.prevInput = "", b.inaccurateSelection = !1, b.input.value = a.getSelection(), Pe(b.input))
        }

        var b = a.display;
        Ae(b.scroller, "mousedown", zb(a, Ob)), Ae(b.scroller, "dblclick", zb(a, ve)), Ae(b.lineSpace, "selectstart", function (a) {
            Kb(b, a) || ve(a)
        }), t || Ae(b.scroller, "contextmenu", function (b) {
            gc(a, b)
        }), Ae(b.scroller, "scroll", function () {
            b.scroller.clientHeight && (Sb(a, b.scroller.scrollTop), Tb(a, b.scroller.scrollLeft, !0), Ce(a, "scroll", a))
        }), Ae(b.scrollbarV, "scroll", function () {
            b.scroller.clientHeight && Sb(a, b.scrollbarV.scrollTop)
        }), Ae(b.scrollbarH, "scroll", function () {
            b.scroller.clientHeight && Tb(a, b.scrollbarH.scrollLeft)
        }), Ae(b.scroller, "mousewheel", function (b) {
            Wb(a, b)
        }), Ae(b.scroller, "DOMMouseScroll", function (b) {
            Wb(a, b)
        }), Ae(b.scrollbarH, "mousedown", c), Ae(b.scrollbarV, "mousedown", c), Ae(b.wrapper, "scroll", function () {
            b.wrapper.scrollTop = b.wrapper.scrollLeft = 0
        }), Ae(window, "resize", d), setTimeout(e, 5e3), Ae(b.input, "keyup", zb(a, function (b) {
            if (a.options.onKeyEvent && a.options.onKeyEvent(a, ue(b)))return;
            b.keyCode == 16 && (a.doc.sel.shift = !1)
        })), Ae(b.input, "input", Ue(Eb, a)), Ae(b.input, "keydown", zb(a, bc)), Ae(b.input, "keypress", zb(a, cc)), Ae(b.input, "focus", Ue(dc, a)), Ae(b.input, "blur", Ue(ec, a)), a.options.dragDrop && (Ae(b.scroller, "dragstart", function (b) {
            Rb(a, b)
        }), Ae(b.scroller, "dragenter", f), Ae(b.scroller, "dragover", f), Ae(b.scroller, "drop", zb(a, Pb))), Ae(b.scroller, "paste", function (c) {
            if (Kb(b, c))return;
            Hb(a), Eb(a)
        }), Ae(b.input, "paste", function () {
            a.state.pasteIncoming = !0, Eb(a)
        }), Ae(b.input, "cut", g), Ae(b.input, "copy", g), j && Ae(b.sizer, "mouseup", function () {
            document.activeElement == b.input && b.input.blur(), Hb(a)
        })
    }

    function Kb(a, b) {
        for (var c = ye(b); c != a.wrapper; c = c.parentNode) {
            if (!c)return!0;
            if (/\bCodeMirror-(?:line)?widget\b/.test(c.className) || c.parentNode == a.sizer && c != a.mover)return!0
        }
    }

    function Lb(a, b, c) {
        var d = a.display;
        if (!c) {
            var e = ye(b);
            if (e == d.scrollbarH || e == d.scrollbarH.firstChild || e == d.scrollbarV || e == d.scrollbarV.firstChild || e == d.scrollbarFiller)return null
        }
        var f, g, h = bf(d.lineSpace);
        try {
            f = b.clientX, g = b.clientY
        } catch (b) {
            return null
        }
        return rb(a, f - h.left, g - h.top)
    }

    function Ob(a) {
        function p(a) {
            if (j == "single") {
                Ac(c.doc, xc(f, h), a);
                return
            }
            n = xc(f, n), o = xc(f, o);
            if (j == "double") {
                var b = Pc(be(f, a.line).text, a);
                uc(a, n) ? Ac(c.doc, b.from, o) : Ac(c.doc, n, b.to)
            } else j == "triple" && (uc(a, n) ? Ac(c.doc, o, xc(f, sc(a.line, 0))) : Ac(c.doc, n, xc(f, sc(a.line + 1, 0))))
        }

        function s(a) {
            var b = ++r, e = Lb(c, a, !0);
            if (!e)return;
            if (!tc(e, l)) {
                c.state.focused || dc(c), l = e, p(e);
                var g = K(d, f);
                (e.line >= g.to || e.line < g.from) && setTimeout(zb(c, function () {
                    r == b && s(a)
                }), 150)
            } else {
                var h = a.clientY < q.top ? -20 : a.clientY > q.bottom ? 20 : 0;
                h && setTimeout(zb(c, function () {
                    if (r != b)return;
                    d.scroller.scrollTop += h, s(a)
                }), 50)
            }
        }

        function u(a) {
            r = Infinity;
            var b = Lb(c, a);
            b && p(b), ve(a), Hb(c), Be(document, "mousemove", v), Be(document, "mouseup", w)
        }

        var c = this, d = c.display, f = c.doc, g = f.sel;
        g.shift = a.shiftKey;
        if (Kb(d, a)) {
            e || (d.scroller.draggable = !1, setTimeout(function () {
                d.scroller.draggable = !0
            }, 100));
            return
        }
        if (Qb(c, a))return;
        var h = Lb(c, a);
        switch (ze(a)) {
            case 3:
                t && gc.call(c, c, a);
                return;
            case 2:
                h && Ac(c.doc, h), setTimeout(Ue(Hb, c), 20), ve(a);
                return
        }
        if (!h) {
            ye(a) == d.scroller && ve(a);
            return
        }
        c.state.focused || dc(c);
        var i = +(new Date), j = "single";
        if (Nb && Nb.time > i - 400 && tc(Nb.pos, h))j = "triple", ve(a), setTimeout(Ue(Hb, c), 20), Qc(c, h.line); else if (Mb && Mb.time > i - 400 && tc(Mb.pos, h)) {
            j = "double", Nb = {time: i, pos: h}, ve(a);
            var k = Pc(be(f, h.line).text, h);
            Ac(c.doc, k.from, k.to)
        } else Mb = {time: i, pos: h};
        var l = h;
        if (c.options.dragDrop && cf && !Ib(c) && !tc(g.from, g.to) && !uc(h, g.from) && !uc(g.to, h) && j == "single") {
            var m = zb(c, function (b) {
                e && (d.scroller.draggable = !1), c.state.draggingText = !1, Be(document, "mouseup", m), Be(d.scroller, "drop", m), Math.abs(a.clientX - b.clientX) + Math.abs(a.clientY - b.clientY) < 10 && (ve(b), Ac(c.doc, h), Hb(c))
            });
            e && (d.scroller.draggable = !0), c.state.draggingText = m, d.scroller.dragDrop && d.scroller.dragDrop(), Ae(document, "mouseup", m), Ae(d.scroller, "drop", m);
            return
        }
        ve(a), j == "single" && Ac(c.doc, xc(f, h));
        var n = g.from, o = g.to, q = bf(d.wrapper), r = 0, v = zb(c, function (a) {
            !b && !ze(a) ? u(a) : s(a)
        }), w = zb(c, u);
        Ae(document, "mousemove", v), Ae(document, "mouseup", w)
    }

    function Pb(a) {
        var b = this;
        if (Kb(b.display, a) || b.options.onDragEvent && b.options.onDragEvent(b, ue(a)))return;
        ve(a);
        var c = Lb(b, a, !0), d = a.dataTransfer.files;
        if (!c || Ib(b))return;
        if (d && d.length && window.FileReader && window.File) {
            var e = d.length, f = Array(e), g = 0, h = function (a, d) {
                var h = new FileReader;
                h.onload = function () {
                    f[d] = h.result, ++g == e && (c = xc(b.doc, c), lc(b.doc, {from: c, to: c, text: jf(f.join("\n")), origin: "paste"}, "around"))
                }, h.readAsText(a)
            };
            for (var i = 0; i < e; ++i)h(d[i], i)
        } else {
            if (b.state.draggingText && !uc(c, b.doc.sel.from) && !uc(b.doc.sel.to, c)) {
                b.state.draggingText(a), setTimeout(Ue(Hb, b), 20);
                return
            }
            try {
                var f = a.dataTransfer.getData("Text");
                if (f) {
                    var j = b.doc.sel.from, k = b.doc.sel.to;
                    Cc(b.doc, c, c), b.state.draggingText && rc(b.doc, "", j, k, "paste"), b.replaceSelection(f, null, "paste"), Hb(b), dc(b)
                }
            } catch (a) {
            }
        }
    }

    function Qb(a, b) {
        var c = a.display;
        try {
            var d = b.clientX, e = b.clientY
        } catch (b) {
            return!1
        }
        if (d >= Math.floor(bf(c.gutters).right))return!1;
        ve(b);
        if (!He(a, "gutterClick"))return!0;
        var f = bf(c.lineDiv);
        if (e > f.bottom)return!0;
        e -= f.top - c.viewOffset;
        for (var g = 0; g < a.options.gutters.length; ++g) {
            var h = c.gutters.childNodes[g];
            if (h && bf(h).right >= d) {
                var i = ge(a.doc, e), j = a.options.gutters[g];
                Fe(a, "gutterClick", a, i, j, b);
                break
            }
        }
        return!0
    }

    function Rb(a, b) {
        if (Kb(a.display, b))return;
        var c = a.getSelection();
        b.dataTransfer.setData("Text", c);
        if (b.dataTransfer.setDragImage) {
            var d = Ze("img", null, null, "position: fixed; left: 0; top: 0;");
            h && (d.width = d.height = 1, a.display.wrapper.appendChild(d), d._top = d.offsetTop), i && (a.display.dragImg ? d = a.display.dragImg : (a.display.dragImg = d, d.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", a.display.wrapper.appendChild(d))), b.dataTransfer.setDragImage(d, 0, 0), h && d.parentNode.removeChild(d)
        }
    }

    function Sb(b, c) {
        if (Math.abs(b.doc.scrollTop - c) < 2)return;
        b.doc.scrollTop = c, a || P(b, [], c), b.display.scroller.scrollTop != c && (b.display.scroller.scrollTop = c), b.display.scrollbarV.scrollTop != c && (b.display.scrollbarV.scrollTop = c), a && P(b, [])
    }

    function Tb(a, b, c) {
        if (c ? b == a.doc.scrollLeft : Math.abs(a.doc.scrollLeft - b) < 2)return;
        b = Math.min(b, a.display.scroller.scrollWidth - a.display.scroller.clientWidth), a.doc.scrollLeft = b, L(a), a.display.scroller.scrollLeft != b && (a.display.scroller.scrollLeft = b), a.display.scrollbarH.scrollLeft != b && (a.display.scrollbarH.scrollLeft = b)
    }

    function Wb(b, c) {
        var d = c.wheelDeltaX, f = c.wheelDeltaY;
        d == null && c.detail && c.axis == c.HORIZONTAL_AXIS && (d = c.detail), f == null && c.detail && c.axis == c.VERTICAL_AXIS ? f = c.detail : f == null && (f = c.wheelDelta);
        if (f && p && e)for (var g = c.target; g != j; g = g.parentNode)if (g.lineObj) {
            b.display.currentWheelTarget = g;
            break
        }
        var i = b.display, j = i.scroller;
        if (d && !a && !h && Vb != null) {
            f && Sb(b, Math.max(0, Math.min(j.scrollTop + f * Vb, j.scrollHeight - j.clientHeight))), Tb(b, Math.max(0, Math.min(j.scrollLeft + d * Vb, j.scrollWidth - j.clientWidth))), ve(c), i.wheelStartX = null;
            return
        }
        if (f && Vb != null) {
            var k = f * Vb, l = b.doc.scrollTop, m = l + i.wrapper.clientHeight;
            k < 0 ? l = Math.max(0, l + k - 50) : m = Math.min(b.doc.height, m + k + 50), P(b, [], {top: l, bottom: m})
        }
        Ub < 20 && (i.wheelStartX == null ? (i.wheelStartX = j.scrollLeft, i.wheelStartY = j.scrollTop, i.wheelDX = d, i.wheelDY = f, setTimeout(function () {
            if (i.wheelStartX == null)return;
            var a = j.scrollLeft - i.wheelStartX, b = j.scrollTop - i.wheelStartY, c = b && i.wheelDY && b / i.wheelDY || a && i.wheelDX && a / i.wheelDX;
            i.wheelStartX = i.wheelStartY = null;
            if (!c)return;
            Vb = (Vb * Ub + c) / (Ub + 1), ++Ub
        }, 200)) : (i.wheelDX += d, i.wheelDY += f))
    }

    function Xb(a, b, c) {
        if (typeof b == "string") {
            b = _c[b];
            if (!b)return!1
        }
        a.display.pollingFast && Fb(a) && (a.display.pollingFast = !1);
        var d = a.doc, e = d.sel.shift, f = !1;
        try {
            Ib(a) && (a.state.suppressEdits = !0), c && (d.sel.shift = !1), f = b(a) != Je
        } finally {
            d.sel.shift = e, a.state.suppressEdits = !1
        }
        return f
    }

    function Yb(a) {
        var b = a.state.keyMaps.slice(0);
        return a.options.extraKeys && b.push(a.options.extraKeys), b.push(a.options.keyMap), b
    }

    function $b(a, b) {
        var c = bd(a.options.keyMap), e = c.auto;
        clearTimeout(Zb), e && !dd(b) && (Zb = setTimeout(function () {
            bd(a.options.keyMap) == c && (a.options.keyMap = e.call ? e.call(null, a) : e)
        }, 50));
        var f = ed(b, !0), g = !1;
        if (!f)return!1;
        var h = Yb(a);
        return b.shiftKey ? g = cd("Shift-" + f, h, function (b) {
            return Xb(a, b, !0)
        }) || cd(f, h, function (b) {
            if (typeof b == "string" && /^go[A-Z]/.test(b))return Xb(a, b)
        }) : g = cd(f, h, function (b) {
            return Xb(a, b)
        }), g == "stop" && (g = !1), g && (ve(b), $(a), d && (b.oldKeyCode = b.keyCode, b.keyCode = 0)), g
    }

    function _b(a, b, c) {
        var d = cd("'" + c + "'", Yb(a), function (b) {
            return Xb(a, b, !0)
        });
        return d && (ve(b), $(a)), d
    }

    function bc(a) {
        var c = this;
        c.state.focused || dc(c), b && a.keyCode == 27 && (a.returnValue = !1);
        if (c.options.onKeyEvent && c.options.onKeyEvent(c, ue(a)))return;
        var d = a.keyCode;
        c.doc.sel.shift = d == 16 || a.shiftKey;
        var e = $b(c, a);
        h && (ac = e ? d : null, !e && d == 88 && !lf && (p ? a.metaKey : a.ctrlKey) && c.replaceSelection(""))
    }

    function cc(a) {
        var b = this;
        if (b.options.onKeyEvent && b.options.onKeyEvent(b, ue(a)))return;
        var c = a.keyCode, d = a.charCode;
        if (h && c == ac) {
            ac = null, ve(a);
            return
        }
        if ((h && (!a.which || a.which < 10) || j) && $b(b, a))return;
        var e = String.fromCharCode(d == null ? c : d);
        this.options.electricChars && this.doc.mode.electricChars && this.options.smartIndent && !Ib(this) && this.doc.mode.electricChars.indexOf(e) > -1 && setTimeout(zb(b, function () {
            Lc(b, b.doc.sel.to.line, "smart")
        }), 75);
        if (_b(b, a, e))return;
        Eb(b)
    }

    function dc(a) {
        if (a.options.readOnly == "nocursor")return;
        a.state.focused || (Ce(a, "focus", a), a.state.focused = !0, a.display.wrapper.className.search(/\bCodeMirror-focused\b/) == -1 && (a.display.wrapper.className += " CodeMirror-focused"), Gb(a, !0)), Db(a), $(a)
    }

    function ec(a) {
        a.state.focused && (Ce(a, "blur", a), a.state.focused = !1, a.display.wrapper.className = a.display.wrapper.className.replace(" CodeMirror-focused", "")), clearInterval(a.display.blinker), setTimeout(function () {
            a.state.focused || (a.doc.sel.shift = !1)
        }, 150)
    }

    function gc(a, c) {
        function k() {
            e.inputDiv.style.position = "relative", e.input.style.cssText = j, d && (e.scrollbarV.scrollTop = e.scroller.scrollTop = i), Db(a);
            if (e.input.selectionStart != null && (!b || d)) {
                clearTimeout(fc);
                var c = e.input.value = " " + (tc(f.from, f.to) ? "" : e.input.value), g = 0;
                e.prevInput = " ", e.input.selectionStart = 1, e.input.selectionEnd = c.length;
                var h = function () {
                    e.prevInput == " " && e.input.selectionStart == 0 ? zb(a, _c.selectAll)(a) : g++ < 10 ? fc = setTimeout(h, 500) : Gb(a)
                };
                fc = setTimeout(h, 200)
            }
        }

        var e = a.display, f = a.doc.sel;
        if (Kb(e, c))return;
        var g = Lb(a, c), i = e.scroller.scrollTop;
        if (!g || h)return;
        (tc(f.from, f.to) || uc(g, f.from) || !uc(g, f.to)) && zb(a, Cc)(a.doc, g, g);
        var j = e.input.style.cssText;
        e.inputDiv.style.position = "absolute", e.input.style.cssText = "position: fixed; width: 30px; height: 30px; top: " + (c.clientY - 5) + "px; left: " + (c.clientX - 5) + "px; z-index: 1000; background: white; outline: none;" + "border-width: 0; outline: none; overflow: hidden; opacity: .05; -ms-opacity: .05; filter: alpha(opacity=5);", Hb(a), Gb(a, !0), tc(f.from, f.to) && (e.input.value = e.prevInput = " ");
        if (t) {
            xe(c);
            var l = function () {
                Be(window, "mouseup", l), setTimeout(k, 20)
            };
            Ae(window, "mouseup", l)
        } else setTimeout(k, 50)
    }

    function hc(a) {
        return sc(a.from.line + a.text.length - 1, Oe(a.text).length + (a.text.length == 1 ? a.from.ch : 0))
    }

    function ic(a, b, c) {
        if (!uc(b.from, c))return xc(a, c);
        var d = b.text.length - 1 - (b.to.line - b.from.line);
        if (c.line > b.to.line + d) {
            var e = c.line - d, f = a.first + a.size - 1;
            return e > f ? sc(f, be(a, f).text.length) : yc(c, be(a, e).text.length)
        }
        if (c.line == b.to.line + d)return yc(c, Oe(b.text).length + (b.text.length == 1 ? b.from.ch : 0) + be(a, b.to.line).text.length - b.to.ch);
        var g = c.line - b.from.line;
        return yc(c, b.text[g].length + (g ? 0 : b.from.ch))
    }

    function jc(a, b, c) {
        if (c && typeof c == "object")return{anchor: ic(a, b, c.anchor), head: ic(a, b, c.head)};
        if (c == "start")return{anchor: b.from, head: b.from};
        var d = hc(b);
        if (c == "around")return{anchor: b.from, head: d};
        if (c == "end")return{anchor: d, head: d};
        var e = function (a) {
            if (uc(a, b.from))return a;
            if (!uc(b.to, a))return d;
            var c = a.line + b.text.length - (b.to.line - b.from.line) - 1, e = a.ch;
            return a.line == b.to.line && (e += d.ch - b.to.ch), sc(c, e)
        };
        return{anchor: e(a.sel.anchor), head: e(a.sel.head)}
    }

    function kc(a, b) {
        var c = {canceled: !1, from: b.from, to: b.to, text: b.text, origin: b.origin, update: function (b, c, d, e) {
            b && (this.from = xc(a, b)), c && (this.to = xc(a, c)), d && (this.text = d), e !== undefined && (this.origin = e)
        }, cancel: function () {
            this.canceled = !0
        }};
        return Ce(a, "beforeChange", a, c), a.cm && Ce(a.cm, "beforeChange", a.cm, c), c.canceled ? null : {from: c.from, to: c.to, text: c.text, origin: c.origin}
    }

    function lc(a, b, c, d) {
        if (a.cm) {
            if (!a.cm.curOp)return zb(a.cm, lc)(a, b, c, d);
            if (a.cm.state.suppressEdits)return
        }
        if (He(a, "beforeChange") || a.cm && He(a.cm, "beforeChange")) {
            b = kc(a, b);
            if (!b)return
        }
        var e = u && !d && rd(a, b.from, b.to);
        if (e) {
            for (var f = e.length - 1; f >= 1; --f)mc(a, {from: e[f].from, to: e[f].to, text: [""]});
            e.length && mc(a, {from: e[0].from, to: e[0].to, text: b.text}, c)
        } else mc(a, b, c)
    }

    function mc(a, b, c) {
        var d = jc(a, b, c);
        me(a, b, d, a.cm ? a.cm.curOp.id : NaN), pc(a, b, d, pd(a, b));
        var e = [];
        _d(a, function (a, c) {
            !c && Qe(e, a.history) == -1 && (se(a.history, b), e.push(a.history)), pc(a, b, null, pd(a, b))
        })
    }

    function nc(a, b) {
        if (a.cm && a.cm.state.suppressEdits)return;
        var c = a.history, d = (b == "undo" ? c.done : c.undone).pop();
        if (!d)return;
        c.dirtyCounter += b == "undo" ? -1 : 1;
        var e = {changes: [], anchorBefore: d.anchorAfter, headBefore: d.headAfter, anchorAfter: d.anchorBefore, headAfter: d.headBefore};
        (b == "undo" ? c.undone : c.done).push(e);
        for (var f = d.changes.length - 1; f >= 0; --f) {
            var g = d.changes[f];
            g.origin = b, e.changes.push(le(a, g));
            var h = f ? jc(a, g, null) : {anchor: d.anchorBefore, head: d.headBefore};
            pc(a, g, h, qd(a, g));
            var i = [];
            _d(a, function (a, b) {
                !b && Qe(i, a.history) == -1 && (se(a.history, g), i.push(a.history)), pc(a, g, null, qd(a, g))
            })
        }
    }

    function oc(a, b) {
        function c(a) {
            return sc(a.line + b, a.ch)
        }

        a.first += b, a.cm && Cb(a.cm, a.first, a.first, b), a.sel.head = c(a.sel.head), a.sel.anchor = c(a.sel.anchor), a.sel.from = c(a.sel.from), a.sel.to = c(a.sel.to)
    }

    function pc(a, b, c, d) {
        if (a.cm && !a.cm.curOp)return zb(a.cm, pc)(a, b, c, d);
        if (b.to.line < a.first) {
            oc(a, b.text.length - 1 - (b.to.line - b.from.line));
            return
        }
        if (b.from.line > a.lastLine())return;
        if (b.from.line < a.first) {
            var e = b.text.length - 1 - (a.first - b.from.line);
            oc(a, e), b = {from: sc(a.first, 0), to: sc(b.to.line + e, b.to.ch), text: [Oe(b.text)], origin: b.origin}
        }
        var f = a.lastLine();
        b.to.line > f && (b = {from: b.from, to: sc(f, be(a, f).text.length), text: [b.text[0]], origin: b.origin}), b.removed = ce(a, b.from, b.to), c || (c = jc(a, b, null)), a.cm ? qc(a.cm, b, d, c) : Ud(a, b, d, c)
    }

    function qc(a, b, c, d) {
        var e = a.doc, f = a.display, g = b.from, h = b.to, i = !1, j = g.line;
        a.options.lineWrapping || (j = fe(vd(e, be(e, g.line))), e.iter(j, h.line + 1, function (a) {
            if (a == f.maxLine)return i = !0, !0
        })), Ud(e, b, c, d, A(a)), a.options.lineWrapping || (e.iter(j, g.line + b.text.length, function (a) {
            var b = G(e, a);
            b > f.maxLineLength && (f.maxLine = a, f.maxLineLength = b, f.maxLineChanged = !0, i = !1)
        }), i && (a.curOp.updateMaxLine = !0)), e.frontier = Math.min(e.frontier, g.line), _(a, 400);
        var k = b.text.length - (h.line - g.line) - 1;
        Cb(a, g.line, h.line + 1, k);
        if (He(a, "change")) {
            var l = {from: g, to: h, text: b.text, removed: b.removed, origin: b.origin};
            if (a.curOp.textChanged) {
                for (var m = a.curOp.textChanged; m.next; m = m.next);
                m.next = l
            } else a.curOp.textChanged = l
        }
    }

    function rc(a, b, c, d, e) {
        d || (d = c);
        if (uc(d, c)) {
            var f = d;
            d = c, c = f
        }
        typeof b == "string" && (b = jf(b)), lc(a, {from: c, to: d, text: b, origin: e}, null)
    }

    function sc(a, b) {
        if (!(this instanceof sc))return new sc(a, b);
        this.line = a, this.ch = b
    }

    function tc(a, b) {
        return a.line == b.line && a.ch == b.ch
    }

    function uc(a, b) {
        return a.line < b.line || a.line == b.line && a.ch < b.ch
    }

    function vc(a) {
        return sc(a.line, a.ch)
    }

    function wc(a, b) {
        return Math.max(a.first, Math.min(b, a.first + a.size - 1))
    }

    function xc(a, b) {
        if (b.line < a.first)return sc(a.first, 0);
        var c = a.first + a.size - 1;
        return b.line > c ? sc(c, be(a, c).text.length) : yc(b, be(a, b.line).text.length)
    }

    function yc(a, b) {
        var c = a.ch;
        return c == null || c > b ? sc(a.line, b) : c < 0 ? sc(a.line, 0) : a
    }

    function zc(a, b) {
        return b >= a.first && b < a.first + a.size
    }

    function Ac(a, b, c, d) {
        if (a.sel.shift || a.sel.extend) {
            var e = a.sel.anchor;
            if (c) {
                var f = uc(b, e);
                f != uc(c, e) ? (e = b, b = c) : f != uc(b, c) && (b = c)
            }
            Cc(a, e, b, d)
        } else Cc(a, b, c || b, d);
        a.cm && (a.cm.curOp.userSelChange = !0)
    }

    function Bc(a, b, c) {
        var d = {anchor: b, head: c};
        return Ce(a, "beforeSelectionChange", a, d), a.cm && Ce(a.cm, "beforeSelectionChange", a.cm, d), d.anchor = xc(a, d.anchor), d.head = xc(a, d.head), d
    }

    function Cc(a, b, c, d, e) {
        if (!e && He(a, "beforeSelectionChange") || a.cm && He(a.cm, "beforeSelectionChange")) {
            var f = Bc(a, b, c);
            c = f.head, b = f.anchor
        }
        var g = a.sel;
        g.goalColumn = null;
        if (e || !tc(b, g.anchor))b = Ec(a, b, d, e != "push");
        if (e || !tc(c, g.head))c = Ec(a, c, d, e != "push");
        if (tc(g.anchor, b) && tc(g.head, c))return;
        g.anchor = b, g.head = c;
        var h = uc(c, b);
        g.from = h ? c : b, g.to = h ? b : c, a.cm && (a.cm.curOp.updateInput = a.cm.curOp.selectionChanged = !0), Fe(a, "cursorActivity", a)
    }

    function Dc(a) {
        Cc(a.doc, a.doc.sel.from, a.doc.sel.to, null, "push")
    }

    function Ec(a, b, c, d) {
        var e = !1, f = b, g = c || 1;
        a.cantEdit = !1;
        a:for (; ;) {
            var h = be(a, f.line);
            if (h.markedSpans)for (var i = 0; i < h.markedSpans.length; ++i) {
                var j = h.markedSpans[i], k = j.marker;
                if ((j.from == null || (k.inclusiveLeft ? j.from <= f.ch : j.from < f.ch)) && (j.to == null || (k.inclusiveRight ? j.to >= f.ch : j.to > f.ch))) {
                    if (d) {
                        Ce(k, "beforeCursorEnter");
                        if (k.explicitlyCleared) {
                            if (!h.markedSpans)break;
                            --i;
                            continue
                        }
                    }
                    if (!k.atomic)continue;
                    var l = k.find()[g < 0 ? "from" : "to"];
                    if (tc(l, f)) {
                        l.ch += g, l.ch < 0 ? l.line > a.first ? l = xc(a, sc(l.line - 1)) : l = null : l.ch > h.text.length && (l.line < a.first + a.size - 1 ? l = sc(l.line + 1, 0) : l = null);
                        if (!l) {
                            if (e)return d ? (a.cantEdit = !0, sc(a.first, 0)) : Ec(a, b, c, !0);
                            e = !0, l = b, g = -g
                        }
                    }
                    f = l;
                    continue a
                }
            }
            return f
        }
    }

    function Fc(a) {
        var b = Gc(a, a.doc.sel.head);
        if (!a.state.focused)return;
        var c = a.display, d = bf(c.sizer), e = null, f = db(a.display);
        b.top + f + d.top < 0 ? e = !0 : b.bottom + f + d.top > (window.innerHeight || document.documentElement.clientHeight) && (e = !1);
        if (e != null && !m) {
            var g = c.cursor.style.display == "none";
            g && (c.cursor.style.display = "", c.cursor.style.left = b.left + "px", c.cursor.style.top = b.top - c.viewOffset + "px"), c.cursor.scrollIntoView(e), g && (c.cursor.style.display = "none")
        }
    }

    function Gc(a, b, c) {
        c == null && (c = 0);
        for (; ;) {
            var d = !1, e = pb(a, b), f = Ic(a, e.left, e.top - c, e.left, e.bottom + c), g = a.doc.scrollTop, h = a.doc.scrollLeft;
            f.scrollTop != null && (Sb(a, f.scrollTop), Math.abs(a.doc.scrollTop - g) > 1 && (d = !0)), f.scrollLeft != null && (Tb(a, f.scrollLeft), Math.abs(a.doc.scrollLeft - h) > 1 && (d = !0));
            if (!d)return e
        }
    }

    function Hc(a, b, c, d, e) {
        var f = Ic(a, b, c, d, e);
        f.scrollTop != null && Sb(a, f.scrollTop), f.scrollLeft != null && Tb(a, f.scrollLeft)
    }

    function Ic(a, b, c, d, e) {
        var f = a.display, g = db(f);
        c += g, e += g;
        var h = f.scroller.clientHeight - Ie, i = f.scroller.scrollTop, j = {}, k = a.doc.height + eb(f), l = c < g + 10, m = e + g > k - 10;
        c < i ? j.scrollTop = l ? 0 : Math.max(0, c) : e > i + h && (j.scrollTop = (m ? k : e) - h);
        var n = f.scroller.clientWidth - Ie, o = f.scroller.scrollLeft;
        b += f.gutters.offsetWidth, d += f.gutters.offsetWidth;
        var p = f.gutters.offsetWidth, q = b < p + 10;
        return b < o + p || q ? (q && (b = 0), j.scrollLeft = Math.max(0, b - 10 - p)) : d > n + o - 3 && (j.scrollLeft = d + 10 - n), j
    }

    function Jc(a, b, c) {
        a.curOp.updateScrollPos = {scrollLeft: b, scrollTop: c}
    }

    function Kc(a, b, c) {
        var d = a.curOp.updateScrollPos || (a.curOp.updateScrollPos = {scrollLeft: a.doc.scrollLeft, scrollTop: a.doc.scrollTop}), e = a.display.scroller;
        d.scrollTop = Math.max(0, Math.min(e.scrollHeight - e.clientHeight, d.scrollTop + c)), d.scrollLeft = Math.max(0, Math.min(e.scrollWidth - e.clientWidth, d.scrollLeft + b))
    }

    function Lc(a, b, c, d) {
        var e = a.doc;
        c || (c = "add");
        if (c == "smart")if (!a.doc.mode.indent)c = "prev"; else var f = cb(a, b);
        var g = a.options.tabSize, h = be(e, b), i = Le(h.text, null, g), j = h.text.match(/^\s*/)[0], k;
        if (c == "smart") {
            k = a.doc.mode.indent(f, h.text.slice(j.length), h.text);
            if (k == Je) {
                if (!d)return;
                c = "prev"
            }
        }
        c == "prev" ? b > e.first ? k = Le(be(e, b - 1).text, null, g) : k = 0 : c == "add" ? k = i + a.options.indentUnit : c == "subtract" && (k = i - a.options.indentUnit), k = Math.max(0, k);
        var l = "", m = 0;
        if (a.options.indentWithTabs)for (var n = Math.floor(k / g); n; --n)m += g, l += "	";
        m < k && (l += Ne(k - m)), l != j && rc(a.doc, l, sc(b, 0), sc(b, j.length), "+input"), h.stateAfter = null
    }

    function Mc(a, b, c) {
        var d = b, e = b, f = a.doc;
        return typeof b == "number" ? e = be(f, wc(f, b)) : d = fe(b), d == null ? null : c(e, d) ? (Cb(a, d, d + 1), e) : null
    }

    function Nc(a, b, c, d, e) {
        function j() {
            var b = f + c;
            return b < a.first || b >= a.first + a.size ? i = !1 : (f = b, h = be(a, b))
        }

        function k(a) {
            var b = (e ? uf : vf)(h, g, c, !0);
            if (b == null) {
                if (!!a || !j())return i = !1;
                e ? g = (c < 0 ? rf : qf)(h) : g = c < 0 ? h.text.length : 0
            } else g = b;
            return!0
        }

        var f = b.line, g = b.ch, h = be(a, f), i = !0;
        if (d == "char")k(); else if (d == "column")k(!0); else if (d == "word" || d == "group") {
            var l = null, m = d == "group";
            for (var n = !0; ; n = !1) {
                if (c < 0 && !k(!n))break;
                var o = h.text.charAt(g) || "\n", p = We(o) ? "w" : m ? /\s/.test(o) ? null : "p" : null;
                if (l && l != p) {
                    c < 0 && (c = 1, k());
                    break
                }
                p && (l = p);
                if (c > 0 && !k(!n))break
            }
        }
        var q = Ec(a, sc(f, g), c, !0);
        return i || (q.hitSide = !0), q
    }

    function Oc(a, b, c, d) {
        var e = a.doc, f = b.left, g;
        if (d == "page") {
            var h = Math.min(a.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);
            g = b.top + c * (h - (c < 0 ? 1.5 : .5) * ub(a.display))
        } else d == "line" && (g = c > 0 ? b.bottom + 3 : b.top - 3);
        for (; ;) {
            var i = rb(a, f, g);
            if (!i.outside)break;
            if (c < 0 ? g <= 0 : g >= e.height) {
                i.hitSide = !0;
                break
            }
            g += c * 5
        }
        return i
    }

    function Pc(a, b) {
        var c = b.ch, d = b.ch;
        if (a) {
            b.after === !1 || d == a.length ? --c : ++d;
            var e = a.charAt(c), f = We(e) ? We : /\s/.test(e) ? function (a) {
                return/\s/.test(a)
            } : function (a) {
                return!/\s/.test(a) && !We(a)
            };
            while (c > 0 && f(a.charAt(c - 1)))--c;
            while (d < a.length && f(a.charAt(d)))++d
        }
        return{from: sc(b.line, c), to: sc(b.line, d)}
    }

    function Qc(a, b) {
        Ac(a.doc, sc(b, 0), xc(a.doc, sc(b + 1, 0)))
    }

    function Tc(a, b, c, d) {
        w.defaults[a] = b, c && (Rc[a] = d ? function (a, b, d) {
            d != Uc && c(a, b, d)
        } : c)
    }

    function Zc(a, b) {
        if (b === !0)return b;
        if (a.copyState)return a.copyState(b);
        var c = {};
        for (var d in b) {
            var e = b[d];
            e instanceof Array && (e = e.concat([])), c[d] = e
        }
        return c
    }

    function $c(a, b, c) {
        return a.startState ? a.startState(b, c) : !0
    }

    function bd(a) {
        return typeof a == "string" ? ad[a] : a
    }

    function cd(a, b, c) {
        function d(b) {
            b = bd(b);
            var e = b[a];
            if (e === !1)return"stop";
            if (e != null && c(e))return!0;
            if (b.nofallthrough)return"stop";
            var f = b.fallthrough;
            if (f == null)return!1;
            if (Object.prototype.toString.call(f) != "[object Array]")return d(f);
            for (var g = 0, h = f.length; g < h; ++g) {
                var i = d(f[g]);
                if (i)return i
            }
            return!1
        }

        for (var e = 0; e < b.length; ++e) {
            var f = d(b[e]);
            if (f)return f
        }
    }

    function dd(a) {
        var b = mf[a.keyCode];
        return b == "Ctrl" || b == "Alt" || b == "Shift" || b == "Mod"
    }

    function ed(a, b) {
        var c = mf[a.keyCode];
        if (c == null || a.altGraphKey)return!1;
        a.altKey && (c = "Alt-" + c);
        if (s ? a.metaKey : a.ctrlKey)c = "Ctrl-" + c;
        if (s ? a.ctrlKey : a.metaKey)c = "Cmd-" + c;
        return!b && a.shiftKey && (c = "Shift-" + c), c
    }

    function fd(a, b) {
        this.pos = this.start = 0, this.string = a, this.tabSize = b || 8, this.lastColumnPos = this.lastColumnValue = 0
    }

    function gd(a, b) {
        this.lines = [], this.type = b, this.doc = a
    }

    function hd(a, b, c, d, e) {
        if (d && d.shared)return jd(a, b, c, d, e);
        if (a.cm && !a.cm.curOp)return zb(a.cm, hd)(a, b, c, d, e);
        var f = new gd(a, e);
        if (e == "range" && !uc(b, c))return f;
        d && Se(d, f), f.replacedWith && (f.collapsed = !0, f.replacedWith = Ze("span", [f.replacedWith], "CodeMirror-widget")), f.collapsed && (v = !0);
        var g = b.line, h = 0, i, j, k = a.cm, l;
        a.iter(g, c.line + 1, function (d) {
            k && f.collapsed && !k.options.lineWrapping && vd(a, d) == k.display.maxLine && (l = !0);
            var e = {from: null, to: null, marker: f};
            h += d.text.length, g == b.line && (e.from = b.ch, h -= b.ch), g == c.line && (e.to = c.ch, h -= d.text.length - c.ch), f.collapsed && (g == c.line && (j = sd(d, c.ch)), g == b.line ? i = sd(d, b.ch) : ee(d, 0)), md(d, e), ++g
        }), f.collapsed && a.iter(b.line, c.line + 1, function (b) {
            wd(a, b) && ee(b, 0)
        }), f.clearOnEnter && Ae(f, "beforeCursorEnter", function () {
            f.clear()
        }), f.readOnly && (u = !0, (a.history.done.length || a.history.undone.length) && a.clearHistory());
        if (f.collapsed) {
            if (i != j)throw new Error("Inserting collapsed marker overlapping an existing one");
            f.size = h, f.atomic = !0
        }
        return k && (l && (k.curOp.updateMaxLine = !0), (f.className || f.startStyle || f.endStyle || f.collapsed) && Cb(k, b.line, c.line + 1), f.atomic && Dc(k)), f
    }

    function id(a, b) {
        this.markers = a, this.primary = b;
        for (var c = 0, d = this; c < a.length; ++c)a[c].parent = this, Ae(a[c], "clear", function () {
            d.clear()
        })
    }

    function jd(a, b, c, d, e) {
        d = Se(d), d.shared = !1;
        var f = [hd(a, b, c, d, e)], g = f[0], h = d.replacedWith;
        return _d(a, function (a) {
            h && (d.replacedWith = h.cloneNode(!0)), f.push(hd(a, xc(a, b), xc(a, c), d, e));
            for (var i = 0; i < a.linked.length; ++i)if (a.linked[i].isParent)return;
            g = Oe(f)
        }), new id(f, g)
    }

    function kd(a, b) {
        if (a)for (var c = 0; c < a.length; ++c) {
            var d = a[c];
            if (d.marker == b)return d
        }
    }

    function ld(a, b) {
        for (var c, d = 0; d < a.length; ++d)a[d] != b && (c || (c = [])).push(a[d]);
        return c
    }

    function md(a, b) {
        a.markedSpans = a.markedSpans ? a.markedSpans.concat([b]) : [b], b.marker.attachLine(a)
    }

    function nd(a, b, c) {
        if (a)for (var d = 0, e; d < a.length; ++d) {
            var f = a[d], g = f.marker, h = f.from == null || (g.inclusiveLeft ? f.from <= b : f.from < b);
            if (h || g.type == "bookmark" && f.from == b && (!c || !f.marker.insertLeft)) {
                var i = f.to == null || (g.inclusiveRight ? f.to >= b : f.to > b);
                (e || (e = [])).push({from: f.from, to: i ? null : f.to, marker: g})
            }
        }
        return e
    }

    function od(a, b, c) {
        if (a)for (var d = 0, e; d < a.length; ++d) {
            var f = a[d], g = f.marker, h = f.to == null || (g.inclusiveRight ? f.to >= b : f.to > b);
            if (h || g.type == "bookmark" && f.from == b && (!c || f.marker.insertLeft)) {
                var i = f.from == null || (g.inclusiveLeft ? f.from <= b : f.from < b);
                (e || (e = [])).push({from: i ? null : f.from - b, to: f.to == null ? null : f.to - b, marker: g})
            }
        }
        return e
    }

    function pd(a, b) {
        var c = zc(a, b.from.line) && be(a, b.from.line).markedSpans, d = zc(a, b.to.line) && be(a, b.to.line).markedSpans;
        if (!c && !d)return null;
        var e = b.from.ch, f = b.to.ch, g = tc(b.from, b.to), h = nd(c, e, g), i = od(d, f, g), j = b.text.length == 1, k = Oe(b.text).length + (j ? e : 0);
        if (h)for (var l = 0; l < h.length; ++l) {
            var m = h[l];
            if (m.to == null) {
                var n = kd(i, m.marker);
                n ? j && (m.to = n.to == null ? null : n.to + k) : m.to = e
            }
        }
        if (i)for (var l = 0; l < i.length; ++l) {
            var m = i[l];
            m.to != null && (m.to += k);
            if (m.from == null) {
                var n = kd(h, m.marker);
                n || (m.from = k, j && (h || (h = [])).push(m))
            } else m.from += k, j && (h || (h = [])).push(m)
        }
        var o = [h];
        if (!j) {
            var p = b.text.length - 2, q;
            if (p > 0 && h)for (var l = 0; l < h.length; ++l)h[l].to == null && (q || (q = [])).push({from: null, to: null, marker: h[l].marker});
            for (var l = 0; l < p; ++l)o.push(q);
            o.push(i)
        }
        return o
    }

    function qd(a, b) {
        var c = oe(a, b), d = pd(a, b);
        if (!c)return d;
        if (!d)return c;
        for (var e = 0; e < c.length; ++e) {
            var f = c[e], g = d[e];
            if (f && g)a:for (var h = 0; h < g.length; ++h) {
                var i = g[h];
                for (var j = 0; j < f.length; ++j)if (f[j].marker == i.marker)continue a;
                f.push(i)
            } else g && (c[e] = g)
        }
        return c
    }

    function rd(a, b, c) {
        var d = null;
        a.iter(b.line, c.line + 1, function (a) {
            if (a.markedSpans)for (var b = 0; b < a.markedSpans.length; ++b) {
                var c = a.markedSpans[b].marker;
                c.readOnly && (!d || Qe(d, c) == -1) && (d || (d = [])).push(c)
            }
        });
        if (!d)return null;
        var e = [
            {from: b, to: c}
        ];
        for (var f = 0; f < d.length; ++f) {
            var g = d[f], h = g.find();
            for (var i = 0; i < e.length; ++i) {
                var j = e[i];
                if (uc(j.to, h.from) || uc(h.to, j.from))continue;
                var k = [i, 1];
                (uc(j.from, h.from) || !g.inclusiveLeft && tc(j.from, h.from)) && k.push({from: j.from, to: h.from}), (uc(h.to, j.to) || !g.inclusiveRight && tc(j.to, h.to)) && k.push({from: h.to, to: j.to}), e.splice.apply(e, k), i += k.length - 1
            }
        }
        return e
    }

    function sd(a, b) {
        var c = v && a.markedSpans, d;
        if (c)for (var e, f = 0; f < c.length; ++f) {
            e = c[f];
            if (!e.marker.collapsed)continue;
            (e.from == null || e.from < b) && (e.to == null || e.to > b) && (!d || d.width < e.marker.width) && (d = e.marker)
        }
        return d
    }

    function td(a) {
        return sd(a, -1)
    }

    function ud(a) {
        return sd(a, a.text.length + 1)
    }

    function vd(a, b) {
        var c;
        while (c = td(b))b = be(a, c.find().from.line);
        return b
    }

    function wd(a, b) {
        var c = v && b.markedSpans;
        if (c)for (var d, e = 0; e < c.length; ++e) {
            d = c[e];
            if (!d.marker.collapsed)continue;
            if (d.from == null)return!0;
            if (d.from == 0 && d.marker.inclusiveLeft && xd(a, b, d))return!0
        }
    }

    function xd(a, b, c) {
        if (c.to == null) {
            var d = c.marker.find().to, e = be(a, d.line);
            return xd(a, e, kd(e.markedSpans, c.marker))
        }
        if (c.marker.inclusiveRight && c.to == b.text.length)return!0;
        for (var f, g = 0; g < b.markedSpans.length; ++g) {
            f = b.markedSpans[g];
            if (f.marker.collapsed && f.from == c.to && (f.marker.inclusiveLeft || c.marker.inclusiveRight) && xd(a, b, f))return!0
        }
    }

    function yd(a) {
        var b = a.markedSpans;
        if (!b)return;
        for (var c = 0; c < b.length; ++c)b[c].marker.detachLine(a);
        a.markedSpans = null
    }

    function zd(a, b) {
        if (!b)return;
        for (var c = 0; c < b.length; ++c)b[c].marker.attachLine(a);
        a.markedSpans = b
    }

    function Bd(a) {
        return function () {
            var b = !this.cm.curOp;
            b && xb(this.cm);
            try {
                var c = a.apply(this, arguments)
            } finally {
                b && yb(this.cm)
            }
            return c
        }
    }

    function Cd(a) {
        return a.height != null ? a.height : ((!a.node.parentNode || a.node.parentNode.nodeType != 1) && _e(a.cm.display.measure, Ze("div", [a.node], null, "position: relative")), a.height = a.node.offsetHeight)
    }

    function Dd(a, b, c, d) {
        var e = new Ad(a, c, d);
        return e.noHScroll && (a.display.alignWidgets = !0), Mc(a, b, function (b) {
            (b.widgets || (b.widgets = [])).push(e), e.line = b;
            if (!wd(a.doc, b) || e.showIfHidden) {
                var c = he(a, b) < a.display.scroller.scrollTop;
                ee(b, b.height + Cd(e)), c && Kc(a, 0, e.height)
            }
            return!0
        }), e
    }

    function Ed(a, b, c) {
        var d = {text: a};
        return zd(d, b), d.height = c ? c(d) : 1, d
    }

    function Fd(a, b, c, d) {
        a.text = b, a.stateAfter && (a.stateAfter = null), a.styles && (a.styles = null), a.order != null && (a.order = null), yd(a), zd(a, c);
        var e = d ? d(a) : 1;
        e != a.height && ee(a, e)
    }

    function Gd(a) {
        a.parent = null, yd(a)
    }

    function Hd(a, b, c, d, e) {
        var f = c.flattenSpans;
        f == null && (f = a.options.flattenSpans);
        var g = "", h = null, i = new fd(b, a.options.tabSize);
        b == "" && c.blankLine && c.blankLine(d);
        while (!i.eol()
            ) {
            var j = c.token(i, d);
            i.pos > 5e3 && (f = !1, i.pos = Math.min(b.length, i.start + 5e4), j = null);
            var k = i.current();
            i.start = i.pos, !f || h != j ? (g && e(g, h), g = k, h = j) : g += k
        }
        g && e(g, h)
    }

    function Id(a, b, c) {
        var d = [a.state.modeGen];
        Hd(a, b.text, a.doc.mode, c, function (a, b) {
            d.push(a, b)
        });
        for (var e = 0; e < a.state.overlays.length; ++e) {
            var f = a.state.overlays[e], g = 1;
            Hd(a, b.text, f.mode, !0, function (a, b) {
                var c = g, e = a.length;
                while (e) {
                    var h = d[g], i = h.length;
                    i <= e ? e -= i : (d.splice(g, 1, h.slice(0, e), d[g + 1], h.slice(e)), e = 0), g += 2
                }
                if (!b)return;
                if (f.opaque)d.splice(c, g - c, a, b), g = c + 2; else for (; c < g; c += 2) {
                    var h = d[c + 1];
                    d[c + 1] = h ? h + " " + b : b
                }
            })
        }
        return d
    }

    function Jd(a, b) {
        if (!b.styles || b.styles[0] != a.state.modeGen)b.styles = Id(a, b, b.stateAfter = cb(a, fe(b)));
        return b.styles
    }

    function Kd(a, b, c) {
        var d = a.doc.mode, e = new fd(b.text, a.options.tabSize);
        b.text == "" && d.blankLine && d.blankLine(c);
        while (!e.eol() && e.pos <= 5e3)d.token(e, c), e.start = e.pos
    }

    function Md(a) {
        return a ? Ld[a] || (Ld[a] = "cm-" + a.replace(/ +/g, " cm-")) : null
    }

    function Nd(a, c, d) {
        var f, g = c, h, i, j = !0;
        while (f = td(g))j = !1, g = be(a.doc, f.find().from.line), h || (h = g);
        var k = {pre: Ze("pre"), col: 0, pos: 0, display: !d, measure: null, addedOne: !1, cm: a};
        g.textClass && (k.pre.className = g.textClass);
        do {
            k.measure = g == c && d, k.pos = 0, k.addToken = k.measure ? Qd : Pd, (b || e) && a.getOption("lineWrapping") && (k.addToken = Rd(k.addToken)), d && i && g != c && !k.addedOne && (d[0] = k.pre.appendChild(hf(a.display.measure)), k.addedOne = !0);
            var l = Td(g, k, Jd(a, g));
            i = g == h, l && (g = be(a.doc, l.to.line), j = !1)
        } while (l);
        d && !k.addedOne && (d[0] = k.pre.appendChild(j ? Ze("span", "聽") : hf(a.display.measure))), !k.pre.firstChild && !wd(a.doc, c) && k.pre.appendChild(document.createTextNode("聽"));
        var m;
        if (d && b && (m = ie(g))) {
            var n = m.length - 1;
            m[n].from == m[n].to && --n;
            var o = m[n], p = m[n - 1];
            if (o.from + 1 == o.to && p && o.level < p.level) {
                var q = d[k.pos - 1];
                q && q.parentNode.insertBefore(q.measureRight = hf(a.display.measure), q.nextSibling)
            }
        }
        return Ce(a, "renderLine", a, c, k.pre), k.pre
    }

    function Pd(a, b, c, d, e) {
        if (!b)return;
        if (!Od.test(b)) {
            a.col += b.length;
            var f = document.createTextNode(b)
        } else {
            var f = document.createDocumentFragment(), g = 0;
            for (; ;) {
                Od.lastIndex = g;
                var h = Od.exec(b), i = h ? h.index - g : b.length - g;
                i && (f.appendChild(document.createTextNode(b.slice(g, g + i))), a.col += i);
                if (!h)break;
                g += i + 1;
                if (h[0] == "	") {
                    var j = a.cm.options.tabSize, k = j - a.col % j;
                    f.appendChild(Ze("span", Ne(k), "cm-tab")), a.col += k
                } else {
                    var l = Ze("span", "鈥�", "cm-invalidchar");
                    l.title = "\\u" + h[0].charCodeAt(0).toString(16), f.appendChild(l), a.col += 1
                }
            }
        }
        if (c || d || e || a.measure) {
            var m = c || "";
            return d && (m += d), e && (m += e), a.pre.appendChild(Ze("span", [f], m))
        }
        a.pre.appendChild(f)
    }

    function Qd(a, c, d, e, f) {
        var g = a.cm.options.lineWrapping;
        for (var h = 0; h < c.length; ++h) {
            var i = c.charAt(h), j = h == 0;
            i >= "頎€" && i < "懑�" && h < c.length - 1 ? (i = c.slice(h, h + 2), ++h) : h && g && df.test(c.slice(h - 1, h + 1)) && a.pre.appendChild(Ze("wbr"));
            var k = a.measure[a.pos] = Pd(a, i, d, j && e, h == c.length - 1 && f);
            b && g && i == " " && h && !/\s/.test(c.charAt(h - 1)) && h < c.length - 1 && !/\s/.test(c.charAt(h + 1)) && (k.style.whiteSpace = "normal"), a.pos += i.length
        }
        c.length && (a.addedOne = !0)
    }

    function Rd(a) {
        function b(a) {
            var b = " ";
            for (var c = 0; c < a.length - 2; ++c)b += c % 2 ? " " : "聽";
            return b += " ", b
        }

        return function (c, d, e, f, g) {
            return a(c, d.replace(/ {3,}/, b), e, f, g)
        }
    }

    function Sd(a, b, c) {
        c && (a.display || (c = c.cloneNode(!0)), a.pre.appendChild(c), a.measure && b && (a.measure[a.pos] = c, a.addedOne = !0)), a.pos += b
    }

    function Td(a, b, c) {
        var d = a.markedSpans;
        if (!d) {
            for (var e = 1; e < c.length; e += 2)b.addToken(b, c[e], Md(c[e + 1]));
            return
        }
        var f = a.text, g = f.length, h = 0, e = 1, i = "", j, k = 0, l, m, n, o;
        for (; ;) {
            if (k == h) {
                l = m = n = "", o = null, k = Infinity;
                var p = null;
                for (var q = 0; q < d.length; ++q) {
                    var r = d[q], s = r.marker;
                    r.from <= h && (r.to == null || r.to > h) ? (r.to != null && k > r.to && (k = r.to, m = ""), s.className && (l += " " + s.className), s.startStyle && r.from == h && (n += " " + s.startStyle), s.endStyle && r.to == k && (m += " " + s.endStyle), s.collapsed && (!o || o.marker.width < s.width) && (o = r)) : r.from > h && k > r.from && (k = r.from), s.type == "bookmark" && r.from == h && s.replacedWith && (p = s.replacedWith)
                }
                if (o && (o.from || 0) == h) {
                    Sd(b, (o.to == null ? g : o.to) - h, o.from != null && o.marker.replacedWith);
                    if (o.to == null)return o.marker.find()
                }
                p && !o && Sd(b, 0, p)
            }
            if (h >= g)break;
            var t = Math.min(g, k);
            for (; ;) {
                if (i) {
                    var u = h + i.length;
                    if (!o) {
                        var v = u > t ? i.slice(0, t - h) : i;
                        b.addToken(b, v, j ? j + l : l, n, h + v.length == k ? m : "")
                    }
                    if (u >= t) {
                        i = i.slice(t - h), h = t;
                        break
                    }
                    h = u, n = ""
                }
                i = c[e++], j = Md(c[e++])
            }
        }
    }

    function Ud(a, b, c, d, e) {
        function f(a) {
            return c ? c[a] : null
        }

        function g(a, c, d) {
            Fd(a, c, d, e), Fe(a, "change", a, b)
        }

        var h = b.from, i = b.to, j = b.text, k = be(a, h.line), l = be(a, i.line), m = Oe(j), n = f(j.length - 1), o = i.line - h.line;
        if (h.ch == 0 && i.ch == 0 && m == "") {
            for (var p = 0, q = j.length - 1, r = []; p < q; ++p)r.push(Ed(j[p], f(p), e));
            g(l, l.text, n), o && a.remove(h.line, o), r.length && a.insert(h.line, r)
        } else if (k == l)if (j.length == 1)g(k, k.text.slice(0, h.ch) + m + k.text.slice(i.ch), n); else {
            for (var r = [], p = 1, q = j.length - 1; p < q; ++p)r.push(Ed(j[p], f(p), e));
            r.push(Ed(m + k.text.slice(i.ch), n, e)), g(k, k.text.slice(0, h.ch) + j[0], f(0)), a.insert(h.line + 1, r)
        } else if (j.length == 1)g(k, k.text.slice(0, h.ch) + j[0] + l.text.slice(i.ch), f(0)), a.remove(h.line + 1, o); else {
            g(k, k.text.slice(0, h.ch) + j[0], f(0)), g(l, m + l.text.slice(i.ch), n);
            for (var p = 1, q = j.length - 1, r = []; p < q; ++p)r.push(Ed(j[p], f(p), e));
            o > 1 && a.remove(h.line + 1, o - 1), a.insert(h.line + 1, r)
        }
        Fe(a, "change", a, b), Cc(a, d.anchor, d.head, null, !0)
    }

    function Vd(a) {
        this.lines = a, this.parent = null;
        for (var b = 0, c = a.length, d = 0; b < c; ++b)a[b].parent = this, d += a[b].height;
        this.height = d
    }

    function Wd(a) {
        this.children = a;
        var b = 0, c = 0;
        for (var d = 0, e = a.length; d < e; ++d) {
            var f = a[d];
            b += f.chunkSize(), c += f.height, f.parent = this
        }
        this.size = b, this.height = c, this.parent = null
    }

    function _d(a, b, c) {
        function d(a, e, f) {
            if (a.linked)for (var g = 0; g < a.linked.length; ++g) {
                var h = a.linked[g];
                if (h.doc == e)continue;
                var i = f && h.sharedHist;
                if (c && !i)continue;
                b(h.doc, i), d(h.doc, a, i)
            }
        }

        d(a, null, !0)
    }

    function ae(a, b) {
        if (b.cm)throw new Error("This document is already in use.");
        a.doc = b, b.cm = a, B(a), y(a), a.options.lineWrapping || H(a), a.options.mode = b.modeOption, Cb(a)
    }

    function be(a, b) {
        b -= a.first;
        while (!a.lines)for (var c = 0; ; ++c) {
            var d = a.children[c], e = d.chunkSize();
            if (b < e) {
                a = d;
                break
            }
            b -= e
        }
        return a.lines[b]
    }

    function ce(a, b, c) {
        var d = [], e = b.line;
        return a.iter(b.line, c.line + 1, function (a) {
            var f = a.text;
            e == c.line && (f = f.slice(0, c.ch)), e == b.line && (f = f.slice(b.ch)), d.push(f), ++e
        }), d
    }

    function de(a, b, c) {
        var d = [];
        return a.iter(b, c, function (a) {
            d.push(a.text)
        }), d
    }

    function ee(a, b) {
        var c = b - a.height;
        for (var d = a; d; d = d.parent)d.height += c
    }

    function fe(a) {
        if (a.parent == null)return null;
        var b = a.parent, c = Qe(b.lines, a);
        for (var d = b.parent; d; b = d, d = d.parent)for (var e = 0; ; ++e) {
            if (d.children[e] == b)break;
            c += d.children[e].chunkSize()
        }
        return c + b.first
    }

    function ge(a, b) {
        var c = a.first;
        a:do {
            for (var d = 0, e = a.children.length; d < e; ++d) {
                var f = a.children[d], g = f.height;
                if (b < g) {
                    a = f;
                    continue a
                }
                b -= g, c += f.chunkSize()
            }
            return c
        } while (!a.lines);
        for (var d = 0, e = a.lines.length; d < e; ++d) {
            var h = a.lines[d], i = h.height;
            if (b < i)break;
            b -= i
        }
        return c + d
    }

    function he(a, b) {
        b = vd(a.doc, b);
        var c = 0, d = b.parent;
        for (var e = 0; e < d.lines.length; ++e) {
            var f = d.lines[e];
            if (f == b)break;
            c += f.height
        }
        for (var g = d.parent; g; d = g, g = d.parent)for (var e = 0; e < g.children.length; ++e) {
            var h = g.children[e];
            if (h == d)break;
            c += h.height
        }
        return c
    }

    function ie(a) {
        var b = a.order;
        return b == null && (b = a.order = wf(a.text)), b
    }

    function je() {
        return{done: [], undone: [], undoDepth: Infinity, lastTime: 0, lastOp: null, lastOrigin: null, dirtyCounter: 0}
    }

    function ke(a, b, c, d) {
        var e = b["spans_" + a.id], f = 0;
        a.iter(Math.max(a.first, c), Math.min(a.first + a.size, d), function (c) {
            c.markedSpans && ((e || (e = b["spans_" + a.id] = {}))[f] = c.markedSpans), ++f
        })
    }

    function le(a, b) {
        var c = {from: b.from, to: hc(b), text: ce(a, b.from, b.to)};
        return ke(a, c, b.from.line, b.to.line + 1), _d(a, function (a) {
            ke(a, c, b.from.line, b.to.line + 1)
        }, !0), c
    }

    function me(a, b, c, d) {
        var e = a.history;
        e.undone.length = 0;
        var f = +(new Date), g = Oe(e.done);
        if (g && (e.lastOp == d || e.lastOrigin == b.origin && b.origin && (b.origin.charAt(0) == "+" && e.lastTime > f - 600 || b.origin.charAt(0) == "*"))) {
            var h = Oe(g.changes);
            tc(b.from, b.to) && tc(b.from, h.to) ? h.to = hc(b) : g.changes.push(le(a, b)), g.anchorAfter = c.anchor, g.headAfter = c.head
        } else {
            g = {changes: [le(a, b)], anchorBefore: a.sel.anchor, headBefore: a.sel.head, anchorAfter: c.anchor, headAfter: c.head}, e.done.push(g);
            while (e.done.length > e.undoDepth)e.done.shift();
            e.dirtyCounter < 0 ? e.dirtyCounter = NaN : e.dirtyCounter++
        }
        e.lastTime = f, e.lastOp = d, e.lastOrigin = b.origin
    }

    function ne(a) {
        if (!a)return null;
        for (var b = 0, c; b < a.length; ++b)a[b].marker.explicitlyCleared ? c || (c = a.slice(0, b)) : c && c.push(a[b]);
        return c ? c.length ? c : null : a
    }

    function oe(a, b) {
        var c = b["spans_" + a.id];
        if (!c)return null;
        for (var d = 0, e = []; d < b.text.length; ++d)e.push(ne(c[d]));
        return e
    }

    function pe(a, b) {
        for (var c = 0, d = []; c < a.length; ++c) {
            var e = a[c], f = e.changes, g = [];
            d.push({changes: g, anchorBefore: e.anchorBefore, headBefore: e.headBefore, anchorAfter: e.anchorAfter, headAfter: e.headAfter});
            for (var h = 0; h < f.length; ++h) {
                var i = f[h], j;
                g.push({from: i.from, to: i.to, text: i.text});
                if (b)for (var k in i)(j = k.match(/^spans_(\d+)$/)) && Qe(b, Number(j[1])) > -1 && (Oe(g)[k] = i[k], delete i[k])
            }
        }
        return d
    }

    function qe(a, b, c, d) {
        c < a.line ? a.line += d : b < a.line && (a.line = b, a.ch = 0)
    }

    function re(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e], g = !0;
            for (var h = 0; h < f.changes.length; ++h) {
                var i = f.changes[h];
                f.copied || (i.from = vc(i.from), i.to = vc(i.to));
                if (c < i.from.line)i.from.line += d, i.to.line += d; else if (b <= i.to.line) {
                    g = !1;
                    break
                }
            }
            f.copied || (f.anchorBefore = vc(f.anchorBefore), f.headBefore = vc(f.headBefore), f.anchorAfter = vc(f.anchorAfter), f.readAfter = vc(f.headAfter), f.copied = !0), g ? (qe(f.anchorBefore), qe(f.headBefore), qe(f.anchorAfter), qe(f.headAfter)) : (a.splice(0, e + 1), e = 0)
        }
    }

    function se(a, b) {
        var c = b.from.line, d = b.to.line, e = b.text.length - (d - c) - 1;
        re(a.done, c, d, e), re(a.undone, c, d, e)
    }

    function te() {
        xe(this)
    }

    function ue(a) {
        return a.stop || (a.stop = te), a
    }

    function ve(a) {
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    }

    function we(a) {
        a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0
    }

    function xe(a) {
        ve(a), we(a)
    }

    function ye(a) {
        return a.target || a.srcElement
    }

    function ze(a) {
        var b = a.which;
        return b == null && (a.button & 1 ? b = 1 : a.button & 2 ? b = 3 : a.button & 4 && (b = 2)), p && a.ctrlKey && b == 1 && (b = 3), b
    }

    function Ae(a, b, c) {
        if (a.addEventListener)a.addEventListener(b, c, !1); else if (a.attachEvent)a.attachEvent("on" + b, c); else {
            var d = a._handlers || (a._handlers = {}), e = d[b] || (d[b] = []);
            e.push(c)
        }
    }

    function Be(a, b, c) {
        if (a.removeEventListener)a.removeEventListener(b, c, !1); else if (a.detachEvent)a.detachEvent("on" + b, c); else {
            var d = a._handlers && a._handlers[b];
            if (!d)return;
            for (var e = 0; e < d.length; ++e)if (d[e] == c) {
                d.splice(e, 1);
                break
            }
        }
    }

    function Ce(a, b) {
        var c = a._handlers && a._handlers[b];
        if (!c)return;
        var d = Array.prototype.slice.call(arguments, 2);
        for (var e = 0; e < c.length; ++e)c[e].apply(null, d)
    }

    function Fe(a, b) {
        function e(a) {
            return function () {
                a.apply(null, d)
            }
        }

        var c = a._handlers && a._handlers[b];
        if (!c)return;
        var d = Array.prototype.slice.call(arguments, 2);
        De || (++Ee, De = [], setTimeout(Ge, 0));
        for (var f = 0; f < c.length; ++f)De.push(e(c[f]))
    }

    function Ge() {
        --Ee;
        var a = De;
        De = null;
        for (var b = 0; b < a.length; ++b)a[b]()
    }

    function He(a, b) {
        var c = a._handlers && a._handlers[b];
        return c && c.length > 0
    }

    function Ke() {
        this.id = null
    }

    function Le(a, b, c, d, e) {
        b == null && (b = a.search(/[^\s\u00a0]/), b == -1 && (b = a.length));
        for (var f = d || 0, g = e || 0; f < b; ++f)a.charAt(f) == "	" ? g += c - g % c : ++g;
        return g
    }

    function Ne(a) {
        while (Me.length <= a)Me.push(Oe(Me) + " ");
        return Me[a]
    }

    function Oe(a) {
        return a[a.length - 1]
    }

    function Pe(a) {
        n ? (a.selectionStart = 0, a.selectionEnd = a.value.length) : a.select()
    }

    function Qe(a, b) {
        if (a.indexOf)return a.indexOf(b);
        for (var c = 0, d = a.length; c < d; ++c)if (a[c] == b)return c;
        return-1
    }

    function Re(a, b) {
        function c() {
        }

        c.prototype = a;
        var d = new c;
        return b && Se(b, d), d
    }

    function Se(a, b) {
        b || (b = {});
        for (var c in a)a.hasOwnProperty(c) && (b[c] = a[c]);
        return b
    }

    function Te(a) {
        for (var b = [], c = 0; c < a; ++c)b.push(undefined);
        return b
    }

    function Ue(a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return function () {
            return a.apply(null, b)
        }
    }

    function We(a) {
        return/\w/.test(a) || a > "聙" && (a.toUpperCase() != a.toLowerCase() || Ve.test(a))
    }

    function Xe(a) {
        for (var b in a)if (a.hasOwnProperty(b) && a[b])return!1;
        return!0
    }

    function Ze(a, b, c, d) {
        var e = document.createElement(a);
        c && (e.className = c), d && (e.style.cssText = d);
        if (typeof b == "string")af(e, b); else if (b)for (var f = 0; f < b.length; ++f)e.appendChild(b[f]);
        return e
    }

    function $e(a) {
        for (var b = a.childNodes.length; b > 0; --b)a.removeChild(a.firstChild);
        return a
    }

    function _e(a, b) {
        return $e(a).appendChild(b)
    }

    function af(a, b) {
        d ? (a.innerHTML = "", a.appendChild(document.createTextNode(b))) : a.textContent = b
    }

    function bf(a) {
        return a.getBoundingClientRect()
    }

    function ff(a) {
        if (ef != null)return ef;
        var b = Ze("div", null, null, "width: 50px; height: 50px; overflow-x: scroll");
        return _e(a, b), b.offsetWidth && (ef = b.offsetHeight - b.clientHeight), ef || 0
    }

    function hf(a) {
        if (gf == null) {
            var b = Ze("span", "鈥�");
            _e(a, Ze("span", [b, document.createTextNode("x")])), a.firstChild.offsetHeight != 0 && (gf = b.offsetWidth <= 1 && b.offsetHeight > 2 && !c)
        }
        return gf ? Ze("span", "鈥�") : Ze("span", "聽", null, "display: inline-block; width: 1px; margin-right: -1px")
    }

    function nf(a, b, c, d) {
        if (!a)return d(b, c, "ltr");
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            (f.from < c && f.to > b || b == c && f.to == b) && d(Math.max(f.from, b), Math.min(f.to, c), f.level == 1 ? "rtl" : "ltr")
        }
    }

    function of(a) {
        return a.level % 2 ? a.to : a.from
    }

    function pf(a) {
        return a.level % 2 ? a.from : a.to
    }

    function qf(a) {
        var b = ie(a);
        return b ? of(b[0]) : 0
    }

    function rf(a) {
        var b = ie(a);
        return b ? pf(Oe(b)) : a.text.length
    }

    function sf(a, b) {
        var c = be(a.doc, b), d = vd(a.doc, c);
        d != c && (b = fe(d));
        var e = ie(d), f = e ? e[0].level % 2 ? rf(d) : qf(d) : 0;
        return sc(b, f)
    }

    function tf(a, b) {
        var c, d;
        while (c = ud(d = be(a.doc, b)))b = c.find().to.line;
        var e = ie(d), f = e ? e[0].level % 2 ? qf(d) : rf(d) : d.text.length;
        return sc(b, f)
    }

    function uf(a, b, c, d) {
        var e = ie(a);
        if (!e)return vf(a, b, c, d);
        var f = d ? function (b, c) {
            do b += c; while (b > 0 && Ye.test(a.text.charAt(b)));
            return b
        } : function (a, b) {
            return a + b
        }, g = e[0].level;
        for (var h = 0; h < e.length; ++h) {
            var i = e[h], j = i.level % 2 == g;
            if (i.from < b && i.to > b || j && (i.from == b || i.to == b))break
        }
        var k = f(b, i.level % 2 ? -c : c);
        while (k != null)if (i.level % 2 == g) {
            if (!(k < i.from || k > i.to))break;
            i = e[h += c], k = i && (c > 0 == i.level % 2 ? f(i.to, -1) : f(i.from, 1))
        } else if (k == of(i))i = e[--h], k = i && pf(i); else {
            if (k != pf(i))break;
            i = e[++h], k = i && of(i)
        }
        return k < 0 || k > a.text.length ? null : k
    }

    function vf(a, b, c, d) {
        var e = b + c;
        if (d)while (e > 0 && Ye.test(a.text.charAt(e)))e += c;
        return e < 0 || e > a.text.length ? null : e
    }

    "use strict";
    var a = /gecko\/\d/i.test(navigator.userAgent), b = /MSIE \d/.test(navigator.userAgent), c = b && (document.documentMode == null || document.documentMode < 8), d = b && (document.documentMode == null || document.documentMode < 9), e = /WebKit\//.test(navigator.userAgent), f = e && /Qt\/\d+\.\d+/.test(navigator.userAgent), g = /Chrome\//.test(navigator.userAgent), h = /Opera\//.test(navigator.userAgent), i = /Apple Computer/.test(navigator.vendor), j = /KHTML\//.test(navigator.userAgent), k = /Mac OS X 1\d\D([7-9]|\d\d)\D/.test(navigator.userAgent), l = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(navigator.userAgent), m = /PhantomJS/.test(navigator.userAgent), n = /AppleWebKit/.test(navigator.userAgent) && /Mobile\/\w+/.test(navigator.userAgent), o = n || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(navigator.userAgent), p = n || /Mac/.test(navigator.platform), q = /windows/i.test(navigator.platform), r = h && navigator.userAgent.match(/Version\/(\d*\.\d*)/);
    r && (r = Number(r[1]));
    var s = p && (f || h && (r == null || r < 12.11)), t = a || b && !d, u = !1, v = !1, tb, wb = 0, Mb, Nb, Ub = 0, Vb = null;
    b ? Vb = -0.53 : a ? Vb = 15 : g ? Vb = -0.7 : i && (Vb = -1 / 3);
    var Zb, ac = null, fc;
    w.Pos = sc, w.prototype = {focus: function () {
        window.focus(), Hb(this), dc(this), Eb(this)
    }, setOption: function (a, b) {
        var c = this.options, d = c[a];
        if (c[a] == b && a != "mode")return;
        c[a] = b, Rc.hasOwnProperty(a) && zb(this, Rc[a])(this, b, d)
    }, getOption: function (a) {
        return this.options[a]
    }, getDoc: function () {
        return this.doc
    }, addKeyMap: function (a, b) {
        this.state.keyMaps[b ? "push" : "unshift"](a)
    }, removeKeyMap: function (a) {
        var b = this.state.keyMaps;
        for (var c = 0; c < b.length; ++c)if ((typeof a == "string" ? b[c].name : b[c]) == a)return b.splice(c, 1), !0
    }, addOverlay: zb(null, function (a, b) {
        var c = a.token ? a : w.getMode(this.options, a);
        if (c.startState)throw new Error("Overlays may not be stateful.");
        this.state.overlays.push({mode: c, modeSpec: a, opaque: b && b.opaque}), this.state.modeGen++, Cb(this)
    }), removeOverlay: zb(null, function (a) {
        var b = this.state.overlays;
        for (var c = 0; c < b.length; ++c)if (b[c].modeSpec == a) {
            b.splice(c, 1), this.state.modeGen++, Cb(this);
            return
        }
    }), indentLine: zb(null, function (a, b, c) {
        typeof b != "string" && (b == null ? b = this.options.smartIndent ? "smart" : "prev" : b = b ? "add" : "subtract"), zc(this.doc, a) && Lc(this, a, b, c)
    }), indentSelection: zb(null, function (a) {
        var b = this.doc.sel;
        if (tc(b.from, b.to))return Lc(this, b.from.line, a);
        var c = b.to.line - (b.to.ch ? 0 : 1);
        for (var d = b.from.line; d <= c; ++d)Lc(this, d, a)
    }), getTokenAt: function (a) {
        var b = this.doc;
        a = xc(b, a);
        var c = cb(this, a.line), d = this.doc.mode, e = be(b, a.line), f = new fd(e.text, this.options.tabSize);
        while (f.pos < a.ch && !f.eol()) {
            f.start = f.pos;
            var g = d.token(f, c)
        }
        return{start: f.start, end: f.pos, string: f.current(), className: g || null, type: g || null, state: c}
    }, getStateAfter: function (a) {
        var b = this.doc;
        return a = wc(b, a == null ? b.first + b.size - 1 : a), cb(this, a + 1)
    }, cursorCoords: function (a, b) {
        var c, d = this.doc.sel;
        return a == null ? c = d.head : typeof a == "object" ? c = xc(this.doc, a) : c = a ? d.from : d.to, pb(this, c, b || "page")
    }, charCoords: function (a, b) {
        return ob(this, xc(this.doc, a), b || "page")
    }, coordsChar: function (a, b) {
        return a = nb(this, a, b || "page"), rb(this, a.left, a.top)
    }, defaultTextHeight: function () {
        return ub(this.display)
    }, defaultCharWidth: function () {
        return vb(this.display)
    }, setGutterMarker: zb(null, function (a, b, c) {
        return Mc(this, a, function (a) {
            var d = a.gutterMarkers || (a.gutterMarkers = {});
            return d[b] = c, !c && Xe(d) && (a.gutterMarkers = null), !0
        })
    }), clearGutter: zb(null, function (a) {
        var b = this, c = b.doc, d = c.first;
        c.iter(function (c) {
            c.gutterMarkers && c.gutterMarkers[a] && (c.gutterMarkers[a] = null, Cb(b, d, d + 1), Xe(c.gutterMarkers) && (c.gutterMarkers = null)), ++d
        })
    }), addLineClass: zb(null, function (a, b, c) {
        return Mc(this, a, function (a) {
            var d = b == "text" ? "textClass" : b == "background" ? "bgClass" : "wrapClass";
            if (!a[d])a[d] = c; else {
                if ((new RegExp("\\b" + c + "\\b")).test(a[d]))return!1;
                a[d] += " " + c
            }
            return!0
        })
    }), removeLineClass: zb(null, function (a, b, c) {
        return Mc(this, a, function (a) {
            var d = b == "text" ? "textClass" : b == "background" ? "bgClass" : "wrapClass", e = a[d];
            if (!e)return!1;
            if (c == null)a[d] = null; else {
                var f = e.replace(new RegExp("^" + c + "\\b\\s*|\\s*\\b" + c + "\\b"), "");
                if (f == e)return!1;
                a[d] = f || null
            }
            return!0
        })
    }), addLineWidget: zb(null, function (a, b, c) {
        return Dd(this, a, b, c)
    }), removeLineWidget: function (a) {
        a.clear()
    }, lineInfo: function (a) {
        if (typeof a == "number") {
            if (!zc(this.doc, a))return null;
            var b = a;
            a = be(this.doc, a);
            if (!a)return null
        } else {
            var b = fe(a);
            if (b == null)return null
        }
        return{line: b, handle: a, text: a.text, gutterMarkers: a.gutterMarkers, textClass: a.textClass, bgClass: a.bgClass, wrapClass: a.wrapClass, widgets: a.widgets}
    }, getViewport: function () {
        return{from: this.display.showingFrom, to: this.display.showingTo}
    }, addWidget: function (a, b, c, d, e) {
        var f = this.display;
        a = pb(this, xc(this.doc, a));
        var g = a.bottom, h = a.left;
        b.style.position = "absolute", f.sizer.appendChild(b);
        if (d == "over")g = a.top; else if (d == "above" || d == "near") {
            var i = Math.max(f.wrapper.clientHeight, this.doc.height), j = Math.max(f.sizer.clientWidth, f.lineSpace.clientWidth);
            (d == "above" || a.bottom + b.offsetHeight > i) && a.top > b.offsetHeight ? g = a.top - b.offsetHeight : a.bottom + b.offsetHeight <= i && (g = a.bottom), h + b.offsetWidth > j && (h = j - b.offsetWidth)
        }
        b.style.top = g + db(f) + "px", b.style.left = b.style.right = "", e == "right" ? (h = f.sizer.clientWidth - b.offsetWidth, b.style.right = "0px") : (e == "left" ? h = 0 : e == "middle" && (h = (f.sizer.clientWidth - b.offsetWidth) / 2), b.style.left = h + "px"), c && Hc(this, h, g, h + b.offsetWidth, g + b.offsetHeight)
    }, triggerOnKeyDown: zb(null, bc), execCommand: function (a) {
        return _c[a](this)
    }, findPosH: function (a, b, c, d) {
        var e = 1;
        b < 0 && (e = -1, b = -b);
        for (var f = 0, g = xc(this.doc, a); f < b; ++f) {
            g = Nc(this.doc, g, e, c, d);
            if (g.hitSide)break
        }
        return g
    }, moveH: zb(null, function (a, b) {
        var c = this.doc.sel, d;
        c.shift || c.extend || tc(c.from, c.to) ? d = Nc(this.doc, c.head, a, b, this.options.rtlMoveVisually) : d = a < 0 ? c.from : c.to, Ac(this.doc, d, d, a)
    }), deleteH: zb(null, function (a, b) {
        var c = this.doc.sel;
        tc(c.from, c.to) ? rc(this.doc, "", c.from, Nc(this.doc, c.head, a, b, !1), "+delete") : rc(this.doc, "", c.from, c.to, "+delete"), this.curOp.userSelChange = !0
    }), findPosV: function (a, b, c, d) {
        var e = 1, f = d;
        b < 0 && (e = -1, b = -b);
        for (var g = 0, h = xc(this.doc, a); g < b; ++g) {
            var i = pb(this, h, "div");
            f == null ? f = i.left : i.left = f, h = Oc(this, i, e, c);
            if (h.hitSide)break
        }
        return h
    }, moveV: zb(null, function (a, b) {
        var c = this.doc.sel, d = pb(this, c.head, "div");
        c.goalColumn != null && (d.left = c.goalColumn);
        var e = Oc(this, d, a, b);
        b == "page" && Kc(this, 0, ob(this, e, "div").top - d.top), Ac(this.doc, e, e, a), c.goalColumn = d.left
    }), toggleOverwrite: function () {
        (this.state.overwrite = !this.state.overwrite) ? this.display.cursor.className += " CodeMirror-overwrite" : this.display.cursor.className = this.display.cursor.className.replace(" CodeMirror-overwrite", "")
    }, hasFocus: function () {
        return this.state.focused
    }, scrollTo: zb(null, function (a, b) {
        Jc(this, a, b)
    }), getScrollInfo: function () {
        var a = this.display.scroller, b = Ie;
        return{left: a.scrollLeft, top: a.scrollTop, height: a.scrollHeight - b, width: a.scrollWidth - b, clientHeight: a.clientHeight - b, clientWidth: a.clientWidth - b}
    }, scrollIntoView: function (a, b) {
        typeof a == "number" && (a = sc(a, 0)), !a || a.line != null ? (a = a ? xc(this.doc, a) : this.doc.sel.head, Gc(this, a, b)) : Hc(this, a.left, a.top - b, a.right, a.bottom + b)
    }, setSize: function (a, b) {
        function c(a) {
            return typeof a == "number" || /^\d+$/.test(String(a)) ? a + "px" : a
        }

        a != null && (this.display.wrapper.style.width = c(a)), b != null && (this.display.wrapper.style.height = c(b)), this.refresh()
    }, on: function (a, b) {
        Ae(this, a, b)
    }, off: function (a, b) {
        Be(this, a, b)
    }, operation: function (a) {
        return Bb(this, a)
    }, refresh: zb(null, function () {
        lb(this), Jc(this, this.doc.scrollLeft, this.doc.scrollTop), Cb(this)
    }), swapDoc: zb(null, function (a) {
        var b = this.doc;
        return b.cm = null, ae(this, a), lb(this), Jc(this, a.scrollLeft, a.scrollTop), b
    }), getInputField: function () {
        return this.display.input
    }, getWrapperElement: function () {
        return this.display.wrapper
    }, getScrollerElement: function () {
        return this.display.scroller
    }, getGutterElement: function () {
        return this.display.gutters
    }};
    var Rc = w.optionHandlers = {}, Sc = w.defaults = {}, Uc = w.Init = {toString: function () {
        return"CodeMirror.Init"
    }};
    Tc("value", "", function (a, b) {
        a.setValue(b)
    }, !0), Tc("mode", null, function (a, b) {
        a.doc.modeOption = b, y(a)
    }, !0), Tc("indentUnit", 2, y, !0), Tc("indentWithTabs", !1), Tc("smartIndent", !0), Tc("tabSize", 4, function (a) {
        y(a), lb(a), Cb(a)
    }, !0), Tc("electricChars", !0), Tc("rtlMoveVisually", !q), Tc("theme", "default", function (a) {
        D(a), E(a)
    }, !0), Tc("keyMap", "default", C), Tc("extraKeys", null), Tc("onKeyEvent", null), Tc("onDragEvent", null), Tc("lineWrapping", !1, z, !0), Tc("gutters", [], function (a) {
        I(a.options), E(a)
    }, !0), Tc("fixedGutter", !0, function (a, b) {
        a.display.gutters.style.left = b ? O(a.display) + "px" : "0", a.refresh()
    }, !0), Tc("lineNumbers", !1, function (a) {
        I(a.options), E(a)
    }, !0), Tc("firstLineNumber", 1, E, !0), Tc("lineNumberFormatter", function (a) {
        return a
    }, E, !0), Tc("showCursorWhenSelecting", !1, X, !0), Tc("readOnly", !1, function (a, b) {
        b == "nocursor" ? (ec(a), a.display.input.blur()) : b || Gb(a, !0)
    }), Tc("dragDrop", !0), Tc("cursorBlinkRate", 530), Tc("cursorHeight", 1), Tc("workTime", 100), Tc("workDelay", 100), Tc("flattenSpans", !0), Tc("pollInterval", 100), Tc("undoDepth", 40, function (a, b) {
        a.doc.history.undoDepth = b
    }), Tc("viewportMargin", 10, function (a) {
        a.refresh()
    }, !0), Tc("tabindex", null, function (a, b) {
        a.display.input.tabIndex = b || ""
    }), Tc("autofocus", null);
    var Vc = w.modes = {}, Wc = w.mimeModes = {};
    w.defineMode = function (a, b) {
        !w.defaults.mode && a != "null" && (w.defaults.mode = a);
        if (arguments.length > 2) {
            b.dependencies = [];
            for (var c = 2; c < arguments.length; ++c)b.dependencies.push(arguments[c])
        }
        Vc[a] = b
    }, w.defineMIME = function (a, b) {
        Wc[a] = b
    }, w.resolveMode = function (a) {
        if (typeof a == "string" && Wc.hasOwnProperty(a))a = Wc[a]; else if (typeof a == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(a))return w.resolveMode("application/xml");
        return typeof a == "string" ? {name: a} : a || {name: "null"}
    }, w.getMode = function (a, b) {
        b = w.resolveMode(b);
        var c = Vc[b.name];
        if (!c)return w.getMode(a, "text/plain");
        var d = c(a, b);
        if (Xc.hasOwnProperty(b.name)) {
            var e = Xc[b.name];
            for (var f in e) {
                if (!e.hasOwnProperty(f))continue;
                d.hasOwnProperty(f) && (d["_" + f] = d[f]), d[f] = e[f]
            }
        }
        return d.name = b.name, d
    }, w.defineMode("null", function () {
        return{token: function (a) {
            a.skipToEnd()
        }}
    }), w.defineMIME("text/plain", "null");
    var Xc = w.modeExtensions = {};
    w.extendMode = function (a, b) {
        var c = Xc.hasOwnProperty(a) ? Xc[a] : Xc[a] = {};
        Se(b, c)
    }, w.defineExtension = function (a, b) {
        w.prototype[a] = b
    }, w.defineOption = Tc;
    var Yc = [];
    w.defineInitHook = function (a) {
        Yc.push(a)
    }, w.copyState = Zc, w.startState = $c, w.innerMode = function (a, b) {
        while (a.innerMode) {
            var c = a.innerMode(b);
            b = c.state, a = c.mode
        }
        return c || {mode: a, state: b}
    };
    var _c = w.commands = {selectAll: function (a) {
        a.setSelection(sc(a.firstLine(), 0), sc(a.lastLine()))
    }, killLine: function (a) {
        var b = a.getCursor(!0), c = a.getCursor(!1), d = !tc(b, c);
        !d && a.getLine(b.line).length == b.ch ? a.replaceRange("", b, sc(b.line + 1, 0), "+delete") : a.replaceRange("", b, d ? c : sc(b.line), "+delete")
    }, deleteLine: function (a) {
        var b = a.getCursor().line;
        a.replaceRange("", sc(b, 0), sc(b), "+delete")
    }, undo: function (a) {
        a.undo()
    }, redo: function (a) {
        a.redo()
    }, goDocStart: function (a) {
        a.extendSelection(sc(a.firstLine(), 0))
    }, goDocEnd: function (a) {
        a.extendSelection(sc(a.lastLine()))
    }, goLineStart: function (a) {
        a.extendSelection(sf(a, a.getCursor().line))
    }, goLineStartSmart: function (a) {
        var b = a.getCursor(), c = sf(a, b.line), d = a.getLineHandle(c.line), e = ie(d);
        if (!e || e[0].level == 0) {
            var f = Math.max(0, d.text.search(/\S/)), g = b.line == c.line && b.ch <= f && b.ch;
            a.extendSelection(sc(c.line, g ? 0 : f))
        } else a.extendSelection(c)
    }, goLineEnd: function (a) {
        a.extendSelection(tf(a, a.getCursor().line))
    }, goLineRight: function (a) {
        var b = a.charCoords(a.getCursor(), "div").top + 5;
        a.extendSelection(a.coordsChar({left: a.display.lineDiv.offsetWidth + 100, top: b}, "div"))
    }, goLineLeft: function (a) {
        var b = a.charCoords(a.getCursor(), "div").top + 5;
        a.extendSelection(a.coordsChar({left: 0, top: b}, "div"))
    }, goLineUp: function (a) {
        a.moveV(-1, "line")
    }, goLineDown: function (a) {
        a.moveV(1, "line")
    }, goPageUp: function (a) {
        a.moveV(-1, "page")
    }, goPageDown: function (a) {
        a.moveV(1, "page")
    }, goCharLeft: function (a) {
        a.moveH(-1, "char")
    }, goCharRight: function (a) {
        a.moveH(1, "char")
    }, goColumnLeft: function (a) {
        a.moveH(-1, "column")
    }, goColumnRight: function (a) {
        a.moveH(1, "column")
    }, goWordLeft: function (a) {
        a.moveH(-1, "word")
    }, goGroupRight: function (a) {
        a.moveH(1, "group")
    }, goGroupLeft: function (a) {
        a.moveH(-1, "group")
    }, goWordRight: function (a) {
        a.moveH(1, "word")
    }, delCharBefore: function (a) {
        a.deleteH(-1, "char")
    }, delCharAfter: function (a) {
        a.deleteH(1, "char")
    }, delWordBefore: function (a) {
        a.deleteH(-1, "word")
    }, delWordAfter: function (a) {
        a.deleteH(1, "word")
    }, delGroupBefore: function (a) {
        a.deleteH(-1, "group")
    }, delGroupAfter: function (a) {
        a.deleteH(1, "group")
    }, indentAuto: function (a) {
        a.indentSelection("smart")
    }, indentMore: function (a) {
        a.indentSelection("add")
    }, indentLess: function (a) {
        a.indentSelection("subtract")
    }, insertTab: function (a) {
        a.replaceSelection("	", "end", "+input")
    }, defaultTab: function (a) {
        a.somethingSelected() ? a.indentSelection("add") : a.replaceSelection("	", "end", "+input")
    }, transposeChars: function (a) {
        var b = a.getCursor(), c = a.getLine(b.line);
        b.ch > 0 && b.ch < c.length - 1 && a.replaceRange(c.charAt(b.ch) + c.charAt(b.ch - 1), sc(b.line, b.ch - 1), sc(b.line, b.ch + 1))
    }, newlineAndIndent: function (a) {
        zb(a, function () {
            a.replaceSelection("\n", "end", "+input"), a.indentLine(a.getCursor().line, null, !0)
        })()
    }, toggleOverwrite: function (a) {
        a.toggleOverwrite()
    }}, ad = w.keyMap = {};
    ad.basic = {Left: "goCharLeft", Right: "goCharRight", Up: "goLineUp", Down: "goLineDown", End: "goLineEnd", Home: "goLineStartSmart", PageUp: "goPageUp", PageDown: "goPageDown", Delete: "delCharAfter", Backspace: "delCharBefore", Tab: "defaultTab", "Shift-Tab": "indentAuto", Enter: "newlineAndIndent", Insert: "toggleOverwrite"}, ad.pcDefault = {"Ctrl-A": "selectAll", "Ctrl-D": "deleteLine", "Ctrl-Z": "undo", "Shift-Ctrl-Z": "redo", "Ctrl-Y": "redo", "Ctrl-Home": "goDocStart", "Alt-Up": "goDocStart", "Ctrl-End": "goDocEnd", "Ctrl-Down": "goDocEnd", "Ctrl-Left": "goGroupLeft", "Ctrl-Right": "goGroupRight", "Alt-Left": "goLineStart", "Alt-Right": "goLineEnd", "Ctrl-Backspace": "delGroupBefore", "Ctrl-Delete": "delGroupAfter", "Ctrl-S": "save", "Ctrl-F": "find", "Ctrl-G": "findNext", "Shift-Ctrl-G": "findPrev", "Shift-Ctrl-F": "replace", "Shift-Ctrl-R": "replaceAll", "Ctrl-[": "indentLess", "Ctrl-]": "indentMore", fallthrough: "basic"}, ad.macDefault = {"Cmd-A": "selectAll", "Cmd-D": "deleteLine", "Cmd-Z": "undo", "Shift-Cmd-Z": "redo", "Cmd-Y": "redo", "Cmd-Up": "goDocStart", "Cmd-End": "goDocEnd", "Cmd-Down": "goDocEnd", "Alt-Left": "goGroupLeft", "Alt-Right": "goGroupRight", "Cmd-Left": "goLineStart", "Cmd-Right": "goLineEnd", "Alt-Backspace": "delGroupBefore", "Ctrl-Alt-Backspace": "delGroupAfter", "Alt-Delete": "delGroupAfter", "Cmd-S": "save", "Cmd-F": "find", "Cmd-G": "findNext", "Shift-Cmd-G": "findPrev", "Cmd-Alt-F": "replace", "Shift-Cmd-Alt-F": "replaceAll", "Cmd-[": "indentLess", "Cmd-]": "indentMore", fallthrough: ["basic", "emacsy"]}, ad["default"] = p ? ad.macDefault : ad.pcDefault, ad.emacsy = {"Ctrl-F": "goCharRight", "Ctrl-B": "goCharLeft", "Ctrl-P": "goLineUp", "Ctrl-N": "goLineDown", "Alt-F": "goWordRight", "Alt-B": "goWordLeft", "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd", "Ctrl-V": "goPageDown", "Shift-Ctrl-V": "goPageUp", "Ctrl-D": "delCharAfter", "Ctrl-H": "delCharBefore", "Alt-D": "delWordAfter", "Alt-Backspace": "delWordBefore", "Ctrl-K": "killLine", "Ctrl-T": "transposeChars"}, w.lookupKey = cd, w.isModifierKey = dd, w.keyName = ed, w.fromTextArea = function (a, b) {
        function e() {
            a.value = i.getValue()
        }

        b || (b = {}), b.value = a.value, !b.tabindex && a.tabindex && (b.tabindex = a.tabindex), !b.placeholder && a.placeholder && (b.placeholder = a.placeholder);
        if (b.autofocus == null) {
            var c = document.body;
            try {
                c = document.activeElement
            } catch (d) {
            }
            b.autofocus = c == a || a.getAttribute("autofocus") != null && c == document.body
        }
        if (a.form) {
            Ae(a.form, "submit", e);
            if (!b.leaveSubmitMethodAlone) {
                var f = a.form, g = f.submit;
                try {
                    var h = f.submit = function () {
                        e(), f.submit = g, f.submit(), f.submit = h
                    }
                } catch (d) {
                }
            }
        }
        a.style.display = "none";
        var i = w(function (b) {
            a.parentNode.insertBefore(b, a.nextSibling)
        }, b);
        return i.save = e, i.getTextArea = function () {
            return a
        }, i.toTextArea = function () {
            e(), a.parentNode.removeChild(i.getWrapperElement()), a.style.display = "", a.form && (Be(a.form, "submit", e), typeof a.form.submit == "function" && (a.form.submit = g))
        }, i
    }, fd.prototype = {eol: function () {
        return this.pos >= this.string.length
    }, sol: function () {
        return this.pos == 0
    }, peek: function () {
        return this.string.charAt(this.pos) || undefined
    }, next: function () {
        if (this.pos < this.string.length)return this.string.charAt(this.pos++)
    }, eat: function (a) {
        var b = this.string.charAt(this.pos);
        if (typeof a == "string")var c = b == a; else var c = b && (a.test ? a.test(b) : a(b));
        if (c)return++this.pos, b
    }, eatWhile: function (a) {
        var b = this.pos;
        while (this.eat(a));
        return this.pos > b
    }, eatSpace: function () {
        var a = this.pos;
        while (/[\s\u00a0]/.test(this.string.charAt(this.pos)))++this.pos;
        return this.pos > a
    }, skipToEnd: function () {
        this.pos = this.string.length
    }, skipTo: function (a) {
        var b = this.string.indexOf(a, this.pos);
        if (b > -1)return this.pos = b, !0
    }, backUp: function (a) {
        this.pos -= a
    }, column: function () {
        return this.lastColumnPos < this.start && (this.lastColumnValue = Le(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue
    }, indentation: function () {
        return Le(this.string, null, this.tabSize)
    }, match: function (a, b, c) {
        if (typeof a != "string") {
            var f = this.string.slice(this.pos).match(a);
            return f && f.index > 0 ? null : (f && b !== !1 && (this.pos += f[0].length), f)
        }
        var d = function (a) {
            return c ? a.toLowerCase() : a
        }, e = this.string.substr(this.pos, a.length);
        if (d(e) == d(a))return b !== !1 && (this.pos += a.length), !0
    }, current: function () {
        return this.string.slice(this.start, this.pos)
    }}, w.StringStream = fd, w.TextMarker = gd, gd.prototype.clear = function () {
        if (this.explicitlyCleared)return;
        var a = this.doc.cm, b = a && !a.curOp;
        b && xb(a);
        var c = null, d = null;
        for (var e = 0; e < this.lines.length; ++e) {
            var f = this.lines[e], g = kd(f.markedSpans, this);
            g.to != null && (d = fe(f)), f.markedSpans = ld(f.markedSpans, g), g.from != null ? c = fe(f) : this.collapsed && !wd(this.doc, f) && a && ee(f, ub(a.display))
        }
        if (a && this.collapsed && !a.options.lineWrapping)for (var e = 0; e < this.lines.length; ++e) {
            var h = vd(a.doc, this.lines[e]), i = G(a.doc, h);
            i > a.display.maxLineLength && (a.display.maxLine = h, a.display.maxLineLength = i, a.display.maxLineChanged = !0)
        }
        c != null && a && Cb(a, c, d + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.collapsed && this.doc.cantEdit && (this.doc.cantEdit = !1, a && Dc(a)), b && yb(a), Fe(this, "clear")
    }, gd.prototype.find = function () {
        var a, b;
        for (var c = 0; c < this.lines.length; ++c) {
            var d = this.lines[c], e = kd(d.markedSpans, this);
            if (e.from != null || e.to != null) {
                var f = fe(d);
                e.from != null && (a = sc(f, e.from)), e.to != null && (b = sc(f, e.to))
            }
        }
        return this.type == "bookmark" ? a : a && {from: a, to: b}
    }, gd.prototype.getOptions = function (a) {
        var b = this.replacedWith;
        return{className: this.className, inclusiveLeft: this.inclusiveLeft, inclusiveRight: this.inclusiveRight, atomic: this.atomic, collapsed: this.collapsed, replacedWith: a ? b && b.cloneNode(!0) : b, readOnly: this.readOnly, startStyle: this.startStyle, endStyle: this.endStyle}
    }, gd.prototype.attachLine = function (a) {
        if (!this.lines.length && this.doc.cm) {
            var b = this.doc.cm.curOp;
            (!b.maybeHiddenMarkers || Qe(b.maybeHiddenMarkers, this) == -1) && (b.maybeUnhiddenMarkers || (b.maybeUnhiddenMarkers = [])).push(this)
        }
        this.lines.push(a)
    }, gd.prototype.detachLine = function (a) {
        this.lines.splice
        (Qe(this.lines, a), 1);
        if (!this.lines.length && this.doc.cm) {
            var b = this.doc.cm.curOp;
            (b.maybeHiddenMarkers || (b.maybeHiddenMarkers = [])).push(this)
        }
    }, w.SharedTextMarker = id, id.prototype.clear = function () {
        if (this.explicitlyCleared)return;
        this.explicitlyCleared = !0;
        for (var a = 0; a < this.markers.length; ++a)this.markers[a].clear();
        Fe(this, "clear")
    }, id.prototype.find = function () {
        return this.primary.find()
    }, id.prototype.getOptions = function (a) {
        var b = this.primary.getOptions(a);
        return b.shared = !0, b
    };
    var Ad = w.LineWidget = function (a, b, c) {
        for (var d in c)c.hasOwnProperty(d) && (this[d] = c[d]);
        this.cm = a, this.node = b
    };
    Ad.prototype.clear = Bd(function () {
        var a = this.line.widgets, b = fe(this.line);
        if (b == null || !a)return;
        for (var c = 0; c < a.length; ++c)a[c] == this && a.splice(c--, 1);
        a.length || (this.line.widgets = null), ee(this.line, Math.max(0, this.line.height - Cd(this))), Cb(this.cm, b, b + 1)
    }), Ad.prototype.changed = Bd(function () {
        var a = this.height;
        this.height = null;
        var b = Cd(this) - a;
        if (!b)return;
        ee(this.line, this.line.height + b);
        var c = fe(this.line);
        Cb(this.cm, c, c + 1)
    });
    var Ld = {}, Od = /[\t\u0000-\u0019\u00ad\u200b\u2028\u2029\uFEFF]/g;
    Vd.prototype = {chunkSize: function () {
        return this.lines.length
    }, removeInner: function (a, b) {
        for (var c = a, d = a + b; c < d; ++c) {
            var e = this.lines[c];
            this.height -= e.height, Gd(e), Fe(e, "delete")
        }
        this.lines.splice(a, b)
    }, collapse: function (a) {
        a.splice.apply(a, [a.length, 0].concat(this.lines))
    }, insertInner: function (a, b, c) {
        this.height += c, this.lines = this.lines.slice(0, a).concat(b).concat(this.lines.slice(a));
        for (var d = 0, e = b.length; d < e; ++d)b[d].parent = this
    }, iterN: function (a, b, c) {
        for (var d = a + b; a < d; ++a)if (c(this.lines[a]))return!0
    }}, Wd.prototype = {chunkSize: function () {
        return this.size
    }, removeInner: function (a, b) {
        this.size -= b;
        for (var c = 0; c < this.children.length; ++c) {
            var d = this.children[c], e = d.chunkSize();
            if (a < e) {
                var f = Math.min(b, e - a), g = d.height;
                d.removeInner(a, f), this.height -= g - d.height, e == f && (this.children.splice(c--, 1), d.parent = null);
                if ((b -= f) == 0)break;
                a = 0
            } else a -= e
        }
        if (this.size - b < 25) {
            var h = [];
            this.collapse(h), this.children = [new Vd(h)], this.children[0].parent = this
        }
    }, collapse: function (a) {
        for (var b = 0, c = this.children.length; b < c; ++b)this.children[b].collapse(a)
    }, insertInner: function (a, b, c) {
        this.size += b.length, this.height += c;
        for (var d = 0, e = this.children.length; d < e; ++d) {
            var f = this.children[d], g = f.chunkSize();
            if (a <= g) {
                f.insertInner(a, b, c);
                if (f.lines && f.lines.length > 50) {
                    while (f.lines.length > 50) {
                        var h = f.lines.splice(f.lines.length - 25, 25), i = new Vd(h);
                        f.height -= i.height, this.children.splice(d + 1, 0, i), i.parent = this
                    }
                    this.maybeSpill()
                }
                break
            }
            a -= g
        }
    }, maybeSpill: function () {
        if (this.children.length <= 10)return;
        var a = this;
        do {
            var b = a.children.splice(a.children.length - 5, 5), c = new Wd(b);
            if (!a.parent) {
                var d = new Wd(a.children);
                d.parent = a, a.children = [d, c], a = d
            } else {
                a.size -= c.size, a.height -= c.height;
                var e = Qe(a.parent.children, a);
                a.parent.children.splice(e + 1, 0, c)
            }
            c.parent = a.parent
        } while (a.children.length > 10);
        a.parent.maybeSpill()
    }, iterN: function (a, b, c) {
        for (var d = 0, e = this.children.length; d < e; ++d) {
            var f = this.children[d], g = f.chunkSize();
            if (a < g) {
                var h = Math.min(b, g - a);
                if (f.iterN(a, h, c))return!0;
                if ((b -= h) == 0)break;
                a = 0
            } else a -= g
        }
    }};
    var Xd = 0, Yd = w.Doc = function (a, b, c) {
        if (!(this instanceof Yd))return new Yd(a, b, c);
        c == null && (c = 0), Wd.call(this, [new Vd([Ed("", null)])]), this.first = c, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.history = je(), this.frontier = c;
        var d = sc(c, 0);
        this.sel = {from: d, to: d, head: d, anchor: d, shift: !1, extend: !1, goalColumn: null}, this.id = ++Xd, this.modeOption = b, typeof a == "string" && (a = jf(a)), Ud(this, {from: d, to: d, text: a}, null, {head: d, anchor: d})
    };
    Yd.prototype = Re(Wd.prototype, {iter: function (a, b, c) {
        c ? this.iterN(a - this.first, b - a, c) : this.iterN(this.first, this.first + this.size, a)
    }, insert: function (a, b) {
        var c = 0;
        for (var d = 0, e = b.length; d < e; ++d)c += b[d].height;
        this.insertInner(a - this.first, b, c)
    }, remove: function (a, b) {
        this.removeInner(a - this.first, b)
    }, getValue: function (a) {
        var b = de(this, this.first, this.first + this.size);
        return a === !1 ? b : b.join(a || "\n")
    }, setValue: function (a) {
        var b = sc(this.first, 0), c = this.first + this.size - 1;
        lc(this, {from: b, to: sc(c, be(this, c).text.length), text: jf(a), origin: "setValue"}, {head: b, anchor: b}, !0)
    }, replaceRange: function (a, b, c, d) {
        b = xc(this, b), c = c ? xc(this, c) : b, rc(this, a, b, c, d)
    }, getRange: function (a, b, c) {
        var d = ce(this, xc(this, a), xc(this, b));
        return c === !1 ? d : d.join(c || "\n")
    }, getLine: function (a) {
        var b = this.getLineHandle(a);
        return b && b.text
    }, setLine: function (a, b) {
        zc(this, a) && rc(this, b, sc(a, 0), xc(this, sc(a)))
    }, removeLine: function (a) {
        zc(this, a) && rc(this, "", sc(a, 0), xc(this, sc(a + 1, 0)))
    }, getLineHandle: function (a) {
        if (zc(this, a))return be(this, a)
    }, getLineNumber: function (a) {
        return fe(a)
    }, lineCount: function () {
        return this.size
    }, firstLine: function () {
        return this.first
    }, lastLine: function () {
        return this.first + this.size - 1
    }, clipPos: function (a) {
        return xc(this, a)
    }, getCursor: function (a) {
        var b = this.sel, c;
        return a == null || a == "head" ? c = b.head : a == "anchor" ? c = b.anchor : a == "end" || a === !1 ? c = b.to : c = b.from, vc(c)
    }, somethingSelected: function () {
        return!tc(this.sel.head, this.sel.anchor)
    }, setCursor: Ab(function (a, b, c) {
        var d = xc(this, typeof a == "number" ? sc(a, b || 0) : a);
        c ? Ac(this, d) : Cc(this, d, d)
    }), setSelection: Ab(function (a, b) {
        Cc(this, xc(this, a), xc(this, b || a))
    }), extendSelection: Ab(function (a, b) {
        Ac(this, xc(this, a), b && xc(this, b))
    }), getSelection: function (a) {
        return this.getRange(this.sel.from, this.sel.to, a)
    }, replaceSelection: function (a, b, c) {
        lc(this, {from: this.sel.from, to: this.sel.to, text: jf(a), origin: c}, b || "around")
    }, undo: Ab(function () {
        nc(this, "undo")
    }), redo: Ab(function () {
        nc(this, "redo")
    }), setExtending: function (a) {
        this.sel.extend = a
    }, historySize: function () {
        var a = this.history;
        return{undo: a.done.length, redo: a.undone.length}
    }, clearHistory: function () {
        this.history = je()
    }, markClean: function () {
        this.history.dirtyCounter = 0, this.history.lastOp = this.history.lastOrigin = null
    }, isClean: function () {
        return this.history.dirtyCounter == 0
    }, getHistory: function () {
        return{done: pe(this.history.done), undone: pe(this.history.undone)}
    }, setHistory: function (a) {
        var b = this.history = je();
        b.done = a.done.slice(0), b.undone = a.undone.slice(0)
    }, markText: function (a, b, c) {
        return hd(this, xc(this, a), xc(this, b), c, "range")
    }, setBookmark: function (a, b) {
        var c = {replacedWith: b && (b.nodeType == null ? b.widget : b), insertLeft: b && b.insertLeft};
        return a = xc(this, a), hd(this, a, a, c, "bookmark")
    }, findMarksAt: function (a) {
        a = xc(this, a);
        var b = [], c = be(this, a.line).markedSpans;
        if (c)for (var d = 0; d < c.length; ++d) {
            var e = c[d];
            (e.from == null || e.from <= a.ch) && (e.to == null || e.to >= a.ch) && b.push(e.marker.parent || e.marker)
        }
        return b
    }, getAllMarks: function () {
        var a = [];
        return this.iter(function (b) {
            var c = b.markedSpans;
            if (c)for (var d = 0; d < c.length; ++d)c[d].from != null && a.push(c[d].marker)
        }), a
    }, posFromIndex: function (a) {
        var b, c = this.first;
        return this.iter(function (d) {
            var e = d.text.length + 1;
            if (e > a)return b = a, !0;
            a -= e, ++c
        }), xc(this, sc(c, b))
    }, indexFromPos: function (a) {
        a = xc(this, a);
        var b = a.ch;
        return a.line < this.first || a.ch < 0 ? 0 : (this.iter(this.first, a.line, function (a) {
            b += a.text.length + 1
        }), b)
    }, copy: function (a) {
        var b = new Yd(de(this, this.first, this.first + this.size), this.modeOption, this.first);
        return b.scrollTop = this.scrollTop, b.scrollLeft = this.scrollLeft, b.sel = {from: this.sel.from, to: this.sel.to, head: this.sel.head, anchor: this.sel.anchor, shift: this.sel.shift, extend: !1, goalColumn: this.sel.goalColumn}, a && (b.history.undoDepth = this.history.undoDepth, b.setHistory(this.getHistory())), b
    }, linkedDoc: function (a) {
        a || (a = {});
        var b = this.first, c = this.first + this.size;
        a.from != null && a.from > b && (b = a.from), a.to != null && a.to < c && (c = a.to);
        var d = new Yd(de(this, b, c), a.mode || this.modeOption, b);
        return a.sharedHist && (d.history = this.history), (this.linked || (this.linked = [])).push({doc: d, sharedHist: a.sharedHist}), d.linked = [
            {doc: this, isParent: !0, sharedHist: a.sharedHist}
        ], d
    }, unlinkDoc: function (a) {
        a instanceof w && (a = a.doc);
        if (this.linked)for (var b = 0; b < this.linked.length; ++b) {
            var c = this.linked[b];
            if (c.doc != a)continue;
            this.linked.splice(b, 1), a.unlinkDoc(this);
            break
        }
        if (a.history == this.history) {
            var d = [a.id];
            _d(a, function (a) {
                d.push(a.id)
            }, !0), a.history = je(), a.history.done = pe(this.history.done, d), a.history.undone = pe(this.history.undone, d)
        }
    }, iterLinkedDocs: function (a) {
        _d(this, a)
    }, getMode: function () {
        return this.mode
    }, getEditor: function () {
        return this.cm
    }}), Yd.prototype.eachLine = Yd.prototype.iter;
    var Zd = "iter insert remove copy getEditor".split(" ");
    for (var $d in Yd.prototype)Yd.prototype.hasOwnProperty($d) && Qe(Zd, $d) < 0 && (w.prototype[$d] = function (a) {
        return function () {
            return a.apply(this.doc, arguments)
        }
    }(Yd.prototype[$d]));
    w.e_stop = xe, w.e_preventDefault = ve, w.e_stopPropagation = we;
    var De, Ee = 0;
    w.on = Ae, w.off = Be, w.signal = Ce;
    var Ie = 30, Je = w.Pass = {toString: function () {
        return"CodeMirror.Pass"
    }};
    Ke.prototype = {set: function (a, b) {
        clearTimeout(this.id), this.id = setTimeout(b, a)
    }}, w.countColumn = Le;
    var Me = [""], Ve = /[\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc]/, Ye = /[\u0300-\u036F\u0483-\u0487\u0488-\u0489\u0591-\u05BD\u05BF\u05C1-\u05C2\u05C4-\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7-\u06E8\u06EA-\u06ED\uA66F\uA670-\uA672\uA674-\uA67D\uA69F\udc00-\udfff]/;
    w.replaceGetRect = function (a) {
        bf = a
    };
    var cf = function () {
        if (d)return!1;
        var a = Ze("div");
        return"draggable"in a || "dragDrop"in a
    }(), df = /^$/;
    a ? df = /$'/ : i && !/Version\/([6-9]|\d\d)\b/.test(navigator.userAgent) ? df = /\-[^ \-?]|\?[^ !'\"\),.\-\/:;\?\]\}]/ : e && (df = /[~!#%&*)=+}\]|\"\.>,:;][({[<]|-[^\-?\.]|\?[\w~`@#$%\^&*(_=+{[|><]/);
    var ef, gf, jf = "\n\nb".split(/\n/).length != 3 ? function (a) {
        var b = 0, c = [], d = a.length;
        while (b <= d) {
            var e = a.indexOf("\n", b);
            e == -1 && (e = a.length);
            var f = a.slice(b, a.charAt(e - 1) == "\r" ? e - 1 : e), g = f.indexOf("\r");
            g != -1 ? (c.push(f.slice(0, g)), b += g + 1) : (c.push(f), b = e + 1)
        }
        return c
    } : function (a) {
        return a.split(/\r\n?|\n/)
    };
    w.splitLines = jf;
    var kf = window.getSelection ? function (a) {
        try {
            return a.selectionStart != a.selectionEnd
        } catch (b) {
            return!1
        }
    } : function (a) {
        try {
            var b = a.ownerDocument.selection.createRange()
        } catch (c) {
        }
        return!b || b.parentElement() != a ? !1 : b.compareEndPoints("StartToEnd", b) != 0
    }, lf = function () {
        var a = Ze("div");
        return"oncopy"in a ? !0 : (a.setAttribute("oncopy", "return;"), typeof a.oncopy == "function")
    }(), mf = {3: "Enter", 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "PrintScrn", 45: "Insert", 46: "Delete", 59: ";", 91: "Mod", 92: "Mod", 93: "Mod", 109: "-", 107: "=", 127: "Delete", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'", 63276: "PageUp", 63277: "PageDown", 63275: "End", 63273: "Home", 63234: "Left", 63232: "Up", 63235: "Right", 63233: "Down", 63302: "Insert", 63272: "Delete"};
    w.keyNames = mf, function () {
        for (var a = 0; a < 10; a++)mf[a + 48] = String(a);
        for (var a = 65; a <= 90; a++)mf[a] = String.fromCharCode(a);
        for (var a = 1; a <= 12; a++)mf[a + 111] = mf[a + 63235] = "F" + a
    }();
    var wf = function () {
        function c(c) {
            return c <= 255 ? a.charAt(c) : 1424 <= c && c <= 1524 ? "R" : 1536 <= c && c <= 1791 ? b.charAt(c - 1536) : 1792 <= c && c <= 2220 ? "r" : "L"
        }

        var a = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLL", b = "rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmmrrrrrrrrrrrrrrrrrr", d = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/, e = /[stwN]/, f = /[LRr]/, g = /[Lb1n]/, h = /[1n]/, i = "L";
        return function (a) {
            if (!d.test(a))return!1;
            var b = a.length, j = [];
            for (var k = 0, l; k < b; ++k)j.push(l = c(a.charCodeAt(k)));
            for (var k = 0, m = i; k < b; ++k) {
                var l = j[k];
                l == "m" ? j[k] = m : m = l
            }
            for (var k = 0, n = i; k < b; ++k) {
                var l = j[k];
                l == "1" && n == "r" ? j[k] = "n" : f.test(l) && (n = l, l == "r" && (j[k] = "R"))
            }
            for (var k = 1, m = j[0]; k < b - 1; ++k) {
                var l = j[k];
                l == "+" && m == "1" && j[k + 1] == "1" ? j[k] = "1" : l == "," && m == j[k + 1] && (m == "1" || m == "n") && (j[k] = m), m = l
            }
            for (var k = 0; k < b; ++k) {
                var l = j[k];
                if (l == ",")j[k] = "N"; else if (l == "%") {
                    for (var o = k + 1; o < b && j[o] == "%"; ++o);
                    var p = k && j[k - 1] == "!" || o < b - 1 && j[o] == "1" ? "1" : "N";
                    for (var q = k; q < o; ++q)j[q] = p;
                    k = o - 1
                }
            }
            for (var k = 0, n = i; k < b; ++k) {
                var l = j[k];
                n == "L" && l == "1" ? j[k] = "L" : f.test(l) && (n = l)
            }
            for (var k = 0; k < b; ++k)if (e.test(j[k])) {
                for (var o = k + 1; o < b && e.test(j[o]); ++o);
                var r = (k ? j[k - 1] : i) == "L", s = (o < b - 1 ? j[o] : i) == "L", p = r || s ? "L" : "R";
                for (var q = k; q < o; ++q)j[q] = p;
                k = o - 1
            }
            var t = [], u;
            for (var k = 0; k < b;)if (g.test(j[k])) {
                var v = k;
                for (++k; k < b && g.test(j[k]); ++k);
                t.push({from: v, to: k, level: 0})
            } else {
                var w = k, x = t.length;
                for (++k; k < b && j[k] != "L"; ++k);
                for (var q = w; q < k;)if (h.test(j[q])) {
                    w < q && t.splice(x, 0, {from: w, to: q, level: 1});
                    var y = q;
                    for (++q; q < k && h.test(j[q]); ++q);
                    t.splice(x, 0, {from: y, to: q, level: 2}), w = q
                } else++q;
                w < k && t.splice(x, 0, {from: w, to: k, level: 1})
            }
            return t[0].level == 1 && (u = a.match(/^\s+/)) && (t[0].from = u[0].length, t.unshift({from: 0, to: u[0].length, level: 0})), Oe(t).level == 1 && (u = a.match(/\s+$/)) && (Oe(t).to -= u[0].length, t.push({from: b - u[0].length, to: b, level: 0})), t[0].level != Oe(t).level && t.push({from: b, to: b, level: t[0].level}), t
        }
    }();
    return w.version = "3.11", w
}(), function () {
    var a = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    };
    window.CSConsole = function () {
        function d(c, d) {
            this.moveInputForward = a(this.moveInputForward, this), this.addColors = a(this.addColors, this), this.formatWidgetElementText = a(this.formatWidgetElementText, this), this.buildWidget = a(this.buildWidget, this), this.renderResponse = a(this.renderResponse, this), this.responseObject = a(this.responseObject, this), this.lineNumber = a(this.lineNumber, this), this.inputLine = a(this.inputLine, this), this.promptLength = a(this.promptLength, this), this.submit = a(this.submit, this), this.initCallbacks = a(this.initCallbacks, this), this.showWelcomeMessage = a(this.showWelcomeMessage, this), this.previousHistory = a(this.previousHistory, this), this.nextHistory = a(this.nextHistory, this), this.focusInput = a(this.focusInput, this), this.innerConsole = a(this.innerConsole, this), this.reset = a(this.reset, this), this.getAllInput = a(this.getAllInput, this), this.appendToInput = a(this.appendToInput, this), this.setPrompt = a(this.setPrompt, this), this.getValue = a(this.getValue, this), this.setValue = a(this.setValue, this), this.options = d, this.options.prompt || (this.options.prompt = "> "), this.initCallbacks(d), this.initializeKeyMap(), this.initConsole(c), this.submitHistory = new b(this.options)
        }

        var b, c;
        return d.name = "CSConsole", d.prototype.keyMap = {"Alt-Delete": "delGroupAfter", "Alt-Left": "goGroupLeft", "Alt-Right": "goGroupRight", "Cmd-Right": "goLineEnd", "Ctrl-E": "goLineEnd", "Ctrl-Alt-Backspace": "delGroupAfter", Delete: "delCharAfter", End: "goLineEnd", Home: "goLineStartSmart", PageDown: "goPageDown", PageUp: "goPageUp", Right: "goCharRight", "Ctrl-F": "goCharRight"}, d.prototype.outputWidgets = [], d.prototype.currentLine = 0, d.prototype.submitInProgress = !1, d.prototype.setValue = function (a) {
            return this.console.setLine(this.lineNumber(), "" + this.options.prompt + a)
        }, d.prototype.getValue = function () {
            return this.getAllInput()
        }, d.prototype.setPrompt = function (a) {
            return this.options.prompt = a
        }, d.prototype.focus = function () {
            return this.console.getInputField().focus()
        }, d.prototype.appendToInput = function (a) {
            return this.console.setLine(this.lineNumber(), "" + this.console.getLine(this.lineNumber()) + a)
        }, d.prototype.getAllInput = function () {
            var a, b, c;
            c = this.currentLine, a = [];
            while (c <= this.lineNumber())c === this.currentLine ? (b = this.console.getLine(c).substr(this.promptLength(), this.console.getLine(this.currentLine).length), a.push(b)) : a.push(this.console.getLine(c)), c++;
            return a.join("\n")
        }, d.prototype.reset = function (a) {
            var b, c, d, e;
            a == null && (a = !0), this.submitInProgress = !1, this.console.setValue(""), e = this.outputWidgets;
            for (c = 0, d = e.length; c < d; c++)b = e[c], this.console.removeLineWidget(b);
            return this.options.welcomeMessage && a && (this.showWelcomeMessage(), this.moveInputForward()), this.console.refresh(), this.console.scrollIntoView()
        }, d.prototype.innerConsole = function () {
            return this.console
        }, d.prototype.initializeKeyMap = function () {
            return window.CodeMirror.keyMap.console = this.keyMap
        }, d.prototype.initConsole = function (a) {
            var b, d = this;
            a.className += " cs-console cs-console-height cs-console-width", b = new c(this.options), this.console = window.CodeMirror(a, {value: this.options.initialValue || "", mode: {name: this.options.syntax, useCPP: !0}, gutter: this.options.lineNumbers, lineNumbers: this.options.lineNumbers, theme: this.options.theme || "vibrant-ink", indentUnit: 2, tabSize: 2, keyMap: "console", lineWrapping: !0, onKeyEvent: this.focusInput, undoDepth: 0, autoFocus: this.options.autoFocus, extraKeys: {Enter: this.submit, "Ctrl-M": this.submit, Tab: this.noop, Left: b.goCharLeft, "Ctrl-B": b.goCharLeft, Backspace: b.delCharBefore, "Cmd-Up": b.goDocStart, "Cmd-Down": b.goDocEnd, "Cmd-Left": b.goLineStart, Home: b.goLineStart, "Ctrl-A": b.goLineStart, "Alt-Backspace": b.delGroupBefore, "Ctrl-W": b.delGroupBefore, "Cmd-Backspace": b.deleteLine, Up: this.nextHistory, Down: this.previousHistory, "Ctrl-P": this.nextHistory, "Ctrl-N": this.previousHistory, "Shift-Cmd-Right": this.noop, "Shift-Cmd-Left": this.noop, "Shift-Right": this.noop, "Shift-Alt-Right": this.noop, "Shift-Alt-Left": this.noop, "Ctrl-Enter": this.noop, "Alt-Enter": this.noop, "Shift-Tab": this.noop, "Cmd-S": this.noop, "Ctrl-Z": this.noop, "Cmd-Z": this.noop}}), b.setConsole(this.console), setTimeout(function () {
                return d.console.refresh()
            }, 1), this.console.getScrollerElement().className += " cs-console-height", this.console.getWrapperElement().className += " cs-console-height cs-console-width", this.options.welcomeMessage && (this.showWelcomeMessage(), this.moveInputForward());
            if (this.options.autoFocus)return setTimeout(function () {
                return d.console.getInputField().focus()
            }, 10)
        }, d.prototype.focusInput = function (a, b) {
            var c;
            return b.metaKey || b.altKey || b.ctrlKey || b.shiftKey ? !1 : (c = this.console.getCursor(), c.line === this.lineNumber() ? (this.storedCursorPosition = this.console.getCursor(), c.ch < this.promptLength() && this.console.setCursor({line: c.line, ch: this.promptLength()})) : this.console.setCursor(this.storedCursorPosition), !1)
        }, d.prototype.nextHistory = function () {
            return this.setValue(this.submitHistory.nextHistory())
        }, d.prototype.previousHistory = function () {
            return this.setValue(this.submitHistory.previousHistory())
        }, d.prototype.showWelcomeMessage = function () {
            this.console.setValue("" + this.options.welcomeMessage + "\n");
            if (this.options.initialValue)return this.setValue(this.options.initialValue)
        }, d.prototype.initCallbacks = function (a) {
            return this.commandValidate = a.commandValidate, this.commandHandle = a.commandHandle, this.cancelHandle = a.cancelHandle
        }, d.prototype.submit = function () {
            var a;
            return a = this.getAllInput(), this.options.commandValidate(a) && !this.submitInProgress ? (this.nonReactingNewline(), this.submitInProgress = !0, this.submitHistory.push(a), this.submitHistory.resetIndex(), this.commandHandle(a, this.responseObject(), this.options.prompt)) : this.submitInProgress ? this.nonReactingNewline() : this.moveInputForward()
        }, d.prototype.nonReactingNewline = function () {
            return this.currentLine = this.lineNumber(), this.console.setLine(this.currentLine, "" + this.inputLine() + "\n")
        }, d.prototype.promptLength = function () {
            return this.options.prompt.length
        }, d.prototype.inputLine = function () {
            return this.console.getLine(this.lineNumber())
        }, d.prototype.lineNumber = function () {
            return this.console.lineCount() - 1
        }, d.prototype.responseObject = function () {
            var a = this;
            return function (b) {
                return a.renderResponse(b)
            }
        }, d.prototype.renderResponse = function (a) {
            var b, c, d, e;
            if (!a) {
                this.moveInputForward(), this.submitInProgress = !1;
                return
            }
            c = this.lineNumber();
            if (a.constructor === Array)for (d = 0, e = a.length; d < e; d++)b = a[d], this.buildWidget(c, b); else this.buildWidget(c, a);
            return this.buildWidget(c, ""), this.moveInputForward(), this.submitInProgress = !1
        }, d.prototype.buildWidget = function (a, b) {
            var c, d, e;
            c = b ? b.content : "", this.isHtmlElement(c) ? d = c : (d = document.createElement("div"), d.innerHTML = this.formatWidgetElementText(_.escape(c)), d.className = "cs-console-output-element", d.style.whiteSpace = "pre-wrap");
            if (b != null ? b.className : void 0)d.className += " " + b.className;
            return e = {coverGutter: !1, noHScroll: !0}, this.outputWidgets.push(this.console.addLineWidget(a, d, e)), this.console.scrollIntoView({line: this.console.lineCount(), ch: 0})
        }, d.prototype.isHtmlElement = function (a) {
            return a && a.constructor.toString().search(/HTML.+Element/) > 0
        }, d.prototype.formatWidgetElementText = function (a) {
            return a = a.replace(/^\s/, ""), a = "<br/>" + a, a = a.replace(/\n/g, "<br/>"), this.addColors(a)
        }, d.prototype.addColors = function (a) {
            var b, c, d, e, f, g;
            c = {30: "black", 31: "red", 32: "green", 33: "yellow", 34: "blue", 35: "purple", 36: "cyan", 37: "white"}, g = Object.keys(c);
            for (e = 0, f = g.length; e < f; e++)b = g[e], d = "<span style='color:" + c[b] + "'>", a = a.replace(new RegExp("\\[" + b + "m", "g"), d);
            return a.replace(/\[m<br\s*\/>/g, "</span><br/>").replace(/\[m\s/g, "</span> ").replace(/\033\[39m/g, "</span>").replace(/\033\[1m/g, "<b>").replace(/\033\[22m/g, "</b>").replace(/\033\[3m/g, "<i>").replace(/\033\[23m/g, "</i>")
        }, d.prototype.moveInputForward = function () {
            return this.currentLine = this.lineNumber() + 1, this.console.setLine(this.currentLine - 1, "" + this.inputLine() + "\n" + this.options.prompt), this.storedCursorPosition = {line: this.currentLine, ch: this.promptLength()}, this.console.setCursor(this.storedCursorPosition)
        }, d.prototype.noop = function () {
        }, c = function () {
            function b(b) {
                this.isCursorAtPrompt = a(this.isCursorAtPrompt, this), this.promptLength = a(this.promptLength, this), this.consoleLineCount = a(this.consoleLineCount, this), this.deleteLine = a(this.deleteLine, this), this.delGroupBefore = a(this.delGroupBefore, this), this.goLineStart = a(this.goLineStart, this), this.goDocEnd = a(this.goDocEnd, this), this.goDocStart = a(this.goDocStart, this), this.delCharBefore = a(this.delCharBefore, this), this.goCharLeft = a(this.goCharLeft, this), this.setConsole = a(this.setConsole, this), this.options = b
            }

            return b.name = "KeyActions", b.prototype._defaultCommands = CodeMirror.commands, b.prototype.setConsole = function (a) {
                return this.console = a
            }, b.prototype.goCharLeft = function () {
                if (this.isCursorAtPrompt())return this._defaultCommands.goCharLeft(this.console)
            }, b.prototype.delCharBefore = function () {
                if (this.isCursorAtPrompt())return this._defaultCommands.delCharBefore(this.console)
            }, b.prototype.goDocStart = function () {
                return this.console.scrollIntoView({line: 0, ch: 0})
            }, b.prototype.goDocEnd = function () {
                return this.console.scrollIntoView({line: this.consoleLineCount(), ch: 0})
            }, b.prototype.goLineStart = function () {
                var a;
                return a = this.console.getCursor(), this.console.setCursor({line: a.line, ch: this.promptLength()})
            }, b.prototype.delGroupBefore = function () {
                var a, b;
                a = this.console.getCursor(), this.console.moveH(-1, "group"), b = this.console.getCursor().ch, this.console.setCursor(a);
                if (b >= this.promptLength())return this._defaultCommands.delGroupBefore(this.console)
            }, b.prototype.deleteLine = function () {
                return this.console.setLine(this.console.getCursor().line, this.options.prompt)
            }, b.prototype.consoleLineCount = function () {
                return this.console.lineCount() - 1
            }, b.prototype.promptLength = function () {
                return this.options.prompt.length
            }, b.prototype.isCursorAtPrompt = function () {
                return this.console.getCursor().ch > this.promptLength()
            }, b
        }(), b = function () {
            function b(b) {
                this.previousHistory = a(this.previousHistory, this), this.nextHistory = a(this.nextHistory, this), this.getHistory = a(this.getHistory, this), this.push = a(this.push, this);
                var c;
                this.options = b, this.options.historyLabel && (this.historyLabel = "cs-" + this.options.historyLabel + "-console-history"), this.localStorageExists() && (this.storage = window.localStorage, c = this.getHistory(), c && (this.cachedHistory = c), this.currentIndex = this.cachedHistory.length - 1)
            }

            return b.name = "CSConsoleHistory", b.prototype.storage = "", b.prototype.currentIndex = 0, b.prototype.historyLabel = "cs-console-history", b.prototype.cachedHistory = [], b.prototype.localStorageExists = function () {
                try {
                    return window.localStorage !== null && !!window.localStorage
                } catch (a) {
                    return!1
                }
            }, b.prototype.push = function (a) {
                var b;
                if (!a)return;
                b = this.getHistory();
                if (b[b.length - 1] === a)return;
                return b.push(a), this.cachedHistory = b, this.storage[this.historyLabel] = JSON.stringify(b), this.currentIndex = b.length - 1
            }, b.prototype.getHistory = function () {
                return this.storage[this.historyLabel] ? JSON.parse(this.storage[this.historyLabel]) : []
            }, b.prototype.nextHistory = function () {
                var a;
                return this.cachedHistory.length > 0 ? a = this.cachedHistory[this.currentIndex] : a = "", this.currentIndex > 0 && this.currentIndex--, a
            }, b.prototype.previousHistory = function () {
                return this.currentIndex < this.cachedHistory.length - 1 ? (this.currentIndex++, this.cachedHistory[this.currentIndex]) : ""
            }, b.prototype.clearHistory = function () {
                return this.storage[this.historyLabel] = "[]", this.cachedHistory = []
            }, b.prototype.resetIndex = function () {
                return this.currentIndex = this.cachedHistory.length - 1
            }, b
        }(), d
    }.call(this)
}.call(this), function () {
    $(function () {
        var a, b, c, d, e, f;
        return $(".codeschool-banner.show").show().animate({bottom: "0"}, 400), $("html").delegate("code.input, code.input-inline", "mousedown", function (a) {
            var b, d;
            d = CourseApp.editor_views[0].editor, b = $(a.target).html();
            if (!d.getValue().match(b))return c({speed: 70, editor: d, text: b})
        }), d = !1, c = function (a) {
            var b, c, e;
            a == null && (a = {}), b = 0, c = "", e = a.speed, a.text.length > 15 && (e = a.speed / 2);
            if (!d)return d = setInterval(function () {
                var c;
                c = a.text[b], b += 1, c ? a.editor.appendToInput(c) : (clearInterval(d), d = !1);
                if (b === 1)return a.editor.focus()
            }, e)
        }, $(".progress-bar").delegate("a", "mouseover", function (a) {
            var b, c, d, e;
            return d = $(a.currentTarget), b = d.position().left, c = d.position().top, e = $(a.currentTarget).next("span"), e.css({position: "absolute"}), e.css({left: b + d.width() / 2 - e.outerWidth() / 2, top: c + d.height() + 8}), e.show()
        }), $(".progress-bar").delegate("a", "mouseout", function (a) {
            return $(a.currentTarget).next("span").hide()
        }), e = f = !0, b = function () {
            return clearTimeout(e), e = setTimeout(function () {
                return f = !0
            }, 1e3)
        }, $("#challenge-panels").ajaxSuccess(function (a) {
            var c;
            b();
            if (f)return f = !1, c = $(".progress-bar").find("a[href='" + a.currentTarget.baseURI + "']").parent(), c.index() === $(".progress-bar li").last().index() && c.prev("li").hasClass("completed") ? c.addClass("completed") : c.prev("li").addClass("completed")
        }), $(".share-twitter").click(function (b) {
            return b.preventDefault(), a({width: 400, height: 300, title: "Tweet about Try Git", url: $(b.currentTarget).attr("href")})
        }), $(".share-facebook").click(function (b) {
            return b.preventDefault(), a({width: 1024, height: 500, title: "Share on Facebook", url: $(b.currentTarget).attr("href")})
        }), a = function (a) {
            var b, c, d;
            return a == null && (a = {}), c = a.width, b = a.height, d = window.open(a.url, a.title, "menubar=0,resizable=1,width=" + c + ",height=" + b), setTimeout(function () {
                var a, e;
                return a = $(window).width() / 2 - c / 2, e = $(window).height() / 2 - b / 2, console.log("" + a + " x " + e), d.moveTo(a, e)
            }, 10)
        }
    })
}.call(this);