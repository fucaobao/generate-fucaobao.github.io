! function(a, b, c) {
    function d() {
        return k.short_name ? r + "//" + k.short_name + "." + B.DOMAIN : B.REMOTE
    }

    function e() {
        function b() {
            for (var b; b = t.shift();) {
                var d = b.url,
                    e = new c(b.title, {
                        dir: "auto",
                        icon: b.iconUrl,
                        body: b.body
                    });
                try {
                    e.onclick = function() {
                        a.focus(), n.href = d, e.close()
                    }
                } catch (f) {}
                setTimeout(function() {
                    e.close && e.close()
                }, 8e3)
            }
        }
        var c = a.Notification;
        "Notification" in a && "denied" !== c.permission && ("granted" === c.permission && b(), c.requestPermission(function(a) {
            "granted" === a && b()
        }))
    }

    function f() {
        return 0 == ga.data.user_id
    }

    function g(a) {
        B.theme = a, "none" != a && h.injectStylesheet(B.STATIC_URL + "/styles/embed" + (a ? "." + a + ".css?" + L[a] : "." + short_name) + ".css")
    }
    var h = {},
        i = b.getElementsByTagName("head")[0] || b.getElementsByTagName("body")[0];
    if (h.extend = function(a, b) {
        for (var c in b) a[c] = b[c];
        return a
    }, h.injectScript = function(d, e) {
        var f = b.createElement("script"),
            g = b.head || b.getElementsByTagName("head")[0] || b.documentElement;
        f.type = "text/javascript", f.src = d, f.async = "async", f.charset = "utf-8", e && (f.onload = f.onreadystatechange = function(b, d) {
            var h = d || !f.readyState || /loaded|complete/.test(f.readyState);
            h && (f.onload = f.onreadystatechange = null, g && f.parentNode && g.removeChild(f), f = c, d || e.call(a))
        }), g.insertBefore(f, g.firstChild)
    }, h.injectStylesheet = function(a) {
        var c = b.createElement("link");
        c.type = "text/css", c.rel = "stylesheet", c.href = a, i.appendChild(c)
    }, h.injectStyle = function(a) {
        var c = b.createElement("style");
        return c.type = "text/css", i.appendChild(c), a = a.replace(/\}/g, "}\n"), c.styleSheet ? c.styleSheet.cssText = a : c.appendChild(b.createTextNode(a)), c
    }, h.getCookie = function(a) {
        for (var d, e, f, g = " " + a + "=", h = b.cookie.split(";"), i = 0; i < h.length; i++)
            if (d = " " + h[i], e = d.indexOf(g), e >= 0 && e + g.length == (f = d.indexOf("=") + 1)) return decodeURIComponent(d.substring(f, d.length).replace(/\+/g, ""));
        return c
    }, h.param = function(a) {
        var b = [];
        for (var d in a) a[d] != c && b.push(d + "=" + encodeURIComponent(a[d]));
        return b.join("&")
    }, h.cssProperty = function(a, c) {
        var d = (b.body || b.documentElement).style;
        if ("undefined" == typeof d) return !1;
        if ("string" == typeof d[a]) return c ? a : !0;
        for (var e = ["Moz", "Webkit", "ms"], a = a.charAt(0).toUpperCase() + a.substr(1), f = 0; f < e.length; f++)
            if ("string" == typeof d[e[f] + a]) return c ? e[f] + a : !0
    }, !a.DUOSHUO) {
        for (var j in Object.prototype) return alert("Object.prototype \u4e0d\u4e3a\u7a7a\uff0c\u8bf7\u4e0d\u8981\u7ed9 Object.prototype \u8bbe\u7f6e\u65b9\u6cd5");
        var k, l, m = a.JSON,
            n = a.location,
            o = a.XMLHttpRequest,
            p = m && m.stringify && a.localStorage,
            q = a.navigator.userAgent,
            r = "https:" == b.location.protocol ? "https:" : "http:",
            s = 0,
            t = [],
            u = l = function() {
                function a(a) {
                    return b[a] || "&amp;"
                }
                var b = {
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#x27;",
                        "`": "&#x60;"
                    },
                    c = /&(?!\w+;)|[<>"'`]/g,
                    d = /[&<>"'`]/;
                return function(b) {
                    return null == b || b === !1 ? "" : d.test(b) ? b.replace(c, a) : b
                }
            }(),
            v = function(a) {
                if (a.match(/^(http|https):/)) return a;
                var c = b.createElement("a");
                return c.href = a, D.hrefNormalized ? c.href : c.getAttribute("href", 4)
            },
            w = function(a) {
                return function() {
                    return a
                }
            },
            x = function() {
                for (var a = {}, b = 0; b < arguments.length; b++) arguments[b] && h.extend(a, arguments[b]);
                var c = h.param(a);
                return c ? "?" + c : ""
            },
            y = function() {
                var a = h.getCookie("duoshuo_token");
                return a ? {
                    jwt: a
                } : k.remote_auth ? {
                    short_name: k.short_name,
                    remote_auth: k.remote_auth
                } : c
            },
            z = function() {
                if (!k && (k = a.duoshuoQuery)) {
                    if (!k.short_name || "your_duoshuo_short_name" === k.short_name) return k = c, void alert("\u4f60\u8fd8\u6ca1\u6709\u8bbe\u7f6e\u591a\u8bf4\u57df\u540d(duoshuoQuery.short_name)\uff0c\u586b\u5165\u5df2\u6709\u57df\u540d\u6216\u521b\u5efa\u65b0\u7ad9\u70b9\uff1ahttp://duoshuo.com/create-site/");
                    ea.trigger("queryDefined")
                }
                return k
            },
            A = function(a) {
                return a && a.error && a.warn ? a : {
                    error: function() {},
                    log: function() {},
                    warn: function() {}
                }
            }(a.console),
            B = a.DUOSHUO = {
                sourceName: {
                    weibo: "\u65b0\u6d6a\u5fae\u535a",
                    qq: "QQ",
                    qzone: "QQ\u7a7a\u95f4",
                    wechat: "\u5fae\u4fe1",
                    weixin: "\u5fae\u4fe1"
                },
                serviceNames: {
                    weibo: "\u5fae\u535a",
                    qq: "QQ",
                    wechat: "\u5fae\u4fe1",
                    weixin: "\u5fae\u4fe1"
                },
                parseDate: function(a) {
                    return a.parse("2011-10-28T00:00:00+08:00") && function(b) {
                        return new a(b)
                    } || a.parse("2011/10/28T00:00:00+0800") && function(b) {
                        return new a(b.replace(/-/g, "/").replace(/:(\d\d)$/, "$1"))
                    } || a.parse("2011/10/28 00:00:00+0800") && function(b) {
                        return new a(b.replace(/-/g, "/").replace(/:(\d\d)$/, "$1").replace("T", " "))
                    } || function(b) {
                        return new a(b)
                    }
                }(Date),
                fullTime: function(a) {
                    var b = B.parseDate(a);
                    return b.getFullYear() + "\u5e74" + (b.getMonth() + 1) + "\u6708" + b.getDate() + "\u65e5 " + b.toLocaleTimeString()
                },
                elapsedTime: function(a) {
                    var b = B.parseDate(a),
                        c = new Date,
                        d = (c - s - b) / 1e3;
                    return 10 > d ? "\u521a\u521a" : 60 > d ? Math.round(d) + "\u79d2\u524d" : 3600 > d ? Math.round(d / 60) + "\u5206\u949f\u524d" : 86400 > d ? Math.round(d / 3600) + "\u5c0f\u65f6\u524d" : (c.getFullYear() == b.getFullYear() ? "" : b.getFullYear() + "\u5e74") + (b.getMonth() + 1) + "\u6708" + b.getDate() + "\u65e5"
                },
                compileStyle: function(a) {
                    var b = "",
                        c = {};
                    if (c.textbox = "#ds-thread #ds-reset .ds-replybox .ds-textarea-wrapper", !a) return b;
                    for (var d in a) b += c[d] + "{" + a[d] + "}\n";
                    return b
                },
                init: function(a, b) {
                    a && !E[a] && (E[a] = b || {
                        type: "EmbedThread"
                    }), B.initView && B.initView()
                }
            },
            C = b.all,
            D = B.support = function() {
                var c = b.createElement("div");
                c.innerHTML = '<a href="/a" style="opacity:.55;">a</a><input type="checkbox"/>';
                var d = c.getElementsByTagName("a")[0],
                    e = c.getElementsByTagName("input")[0],
                    f = {
                        placeholder: "placeholder" in e,
                        touch: "ontouchstart" in a || "onmsgesturechange" in a,
                        opacity: /^0.55$/.test(d.style.opacity),
                        hrefNormalized: "/a" === d.getAttribute("href"),
                        iOS: q.match(/ \((iPad|iPhone|iPod);( U;)? CPU( iPhone)? OS /),
                        android: q.match(/ \(Linux; U; Android /)
                    };
                return f.ie6 = !o && "undefined" == typeof c.style.maxHeight, f.authInWin = a.postMessage && a.screen.width > 800 && !f.iOS && !f.android && n.origin, f
            }(),
            E = B.selectors = {
                ".ds-thread": {
                    type: "EmbedThread"
                },
                ".ds-recent-comments": {
                    type: "RecentComments"
                },
                ".ds-recent-visitors": {
                    type: "RecentVisitors"
                },
                ".ds-top-users": {
                    type: "TopUsers"
                },
                ".ds-top-threads": {
                    type: "TopThreads"
                },
                ".ds-login": {
                    type: "LoginWidget"
                },
                ".ds-thread-count": {
                    type: "ThreadCount"
                },
                ".ds-share": {
                    type: "ShareWidget"
                }
            },
            F = B.openDialog = function(a) {
                return B.dialog !== c && B.dialog.el.remove(), B.dialog = new ca.Dialog(aa.dialog(a)).open()
            },
            G = B.smilies = {};
        B.require = function() {
            function b(a) {
                var b = M[a] ? "?" + M[a] + ".js" : "";
                return B.STATIC_URL + "/libs/" + a + ".js" + b
            }
            var c = {
                mzadxN: "undefined" != typeof mzadxN
            };
            return "undefined" != typeof jQuery && jQuery.fn.jquery >= "1.5" && (c["embed.compat"] = !0, B.jQuery = a.jQuery),
                function(a, d) {
                    if ("string" == typeof a) c[a] ? d() : h.injectScript(b(a), function() {
                        c[a] = !0, d()
                    });
                    else if ("object" == typeof a) {
                        var e, f = !0;
                        for (e = 0; e < a.length; e++)(function(g) {
                            c[a[e]] || (f = !1, h.injectScript(b(g), function() {
                                c[g] = !0;
                                for (var b = 0; b < a.length; b++)
                                    if (!c[a[b]]) return;
                                d()
                            }))
                        })(a[e]);
                        f && d()
                    }
                }
        }();
        for (var H = 0, I = ["EmbedThread", "RecentComments", "RecentVisitors", "TopUsers", "TopThreads", "LoginWidget", "ThreadCount"]; H < I.length; H++) B[I[H]] = function(a) {
            return function(b, c) {
                c = c || {}, c.type = a, b && !E[b] && (E[b] = c), B.initSelector && B.initSelector(b, c)
            }
        }(I[H]), B["create" + I[H]] = function(a) {
            return function(c, d) {
                var e = b.createElement(c);
                for (var f in d) e.setAttribute("data-" + f, d[f]);
                return B[a](e), e
            }
        }(I[H]);
        B.RecentCommentsWidget = B.RecentComments;
        var J = B.API = {
                ajax: function(a, b, e, f, g) {
                    function i(a) {
                        var b = a.getResponseHeader("Date");
                        b && (s = new Date - new Date(b))
                    }

                    function j(a, b, c) {
                        var d, e, h, j = b;
                        if (a >= 200 && 300 > a || 304 === a)
                            if (304 === a) j = "notmodified", h = !0;
                            else try {
                                d = m.parse(c), j = "success", h = !0
                            } catch (k) {
                                j = "parsererror", e = k
                            } else {
                                e = j, (!j || a) && (j = "error", 0 > a && (a = 0));
                                try {
                                    d = m.parse(c)
                                } catch (k) {
                                    j = "parsererror", e = k
                                }
                            }
                            h ? f && f(d): "parseerror" === j ? A.error("\u89e3\u6790\u9519\u8bef: " + c) : (A.error("\u51fa\u9519\u5566(" + d.code + "): " + d.errorMessage), g && g(d), d.errorTrace && A.error(d.errorTrace)),
                        i(p)
                    }
                    var l = h.getCookie("duoshuo_token");
                    e = e || {}, e.v = B.version, l ? e.jwt = l : k.remote_auth && (e.remote_auth = k.remote_auth);
                    var n = o && m && m.parse;
                    if (n) {
                        var p = new o,
                            q = !!p && "withCredentials" in p;
                        if (q) {
                            var r;
                            return p.open(a, d() + "/api/" + b + ".json" + ("GET" == a ? "?" + h.param(e) : ""), !0), p.withCredentials = !0, p.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), p.send("GET" == a ? null : h.param(e)), r = function(a, b) {
                                var d, e, f, g;
                                try {
                                    if (r && (b || 4 === p.readyState))
                                        if (r = c, b) 4 !== p.readyState && p.abort();
                                        else {
                                            d = p.status, f = p.getAllResponseHeaders();
                                            try {
                                                g = p.responseText
                                            } catch (a) {}
                                            try {
                                                e = p.statusText
                                            } catch (h) {
                                                e = ""
                                            }
                                        }
                                } catch (i) {
                                    b || j(-1, i)
                                }
                                g && j(d, e, g, f)
                            }, void(4 === p.readyState ? r() : p.onreadystatechange = r)
                        }
                    }
                    "GET" != a && (e._method = "POST");
                    var t = "cb_" + Math.round(1e6 * Math.random());
                    J[t] = function(a) {
                        switch (a.code) {
                            case 0:
                                f && f(a);
                                break;
                            default:
                                g && g(a), A.error("\u51fa\u9519\u5566(" + a.code + "): " + a.errorMessage), a.errorTrace && A.error(a.errorTrace)
                        }
                    }, e.callback = "DUOSHUO.API['" + t + "']", h.injectScript(d() + "/api/" + b + ".jsonp?" + h.param(e))
                },
                get: function(a, b, c, d) {
                    return this.ajax("GET", a, b, c, d)
                },
                post: function(a, b, c, d) {
                    return this.ajax("POST", a, b, c, d)
                }
            },
            K = B.ws = {
                messages: [],
                send: function(c) {
                    if (!("WebSocket" in a && m)) return !1;
                    var d = this;
                    if (d.messages.push(m.stringify(c)), !d.webSocket) {
                        var f = "https:" === b.location.protocol ? "wss://ws.duoshuo.com:8202/" : "ws://ws.duoshuo.com:8201/",
                            g = d.webSocket = new WebSocket(f);
                        g.onopen = function() {
                            var a, b = 1 === g.readyState;
                            if (b)
                                for (; a = d.messages.shift();) g.send(a)
                        }, g.onmessage = function(a) {
                            try {
                                var b = m.parse(a.data)
                            } catch (c) {
                                return
                            }
                            switch (b.type) {
                                case "post":
                                    for (var d, f = 0; f < B.pagelets.length; f++) d = B.pagelets[f], d.threadId == b.thread_id && d.onMessage(b);
                                    break;
                                case "notification":
                                    t.push(b), e()
                            }
                        }, a.addEventListener("beforeunload", function() {
                            g.close()
                        })
                    }
                    d.webSocket.onopen()
                }
            };
        B.DOMAIN = "duoshuo.com", B.STATIC_URL = r + "//static.duoshuo.com", B.REMOTE = r + "//duoshuo.com", B.version = "15.11.15";
        var L = {
                "default": "79dc948b",
                dark: "ddc346d8",
                bluebox: "0f0f035c",
                newhua: "dc453ca2"
            },
            M = {
                "embed.compat": "24f8ca3f",
                smilies: "921e8eda"
            },
            N = {
                post: "\u53d1\u5e03",
                posting: "\u6b63\u5728\u53d1\u5e03",
                settings: "\u8bbe\u7f6e",
                reply: "\u56de\u590d",
                like: "\u9876",
                repost: "\u8f6c\u53d1",
                report: "\u4e3e\u62a5",
                "delete": "\u5220\u9664",
                reply_to: "\u56de\u590d ",
                reposts: "\u8f6c\u53d1",
                comments: "\u8bc4\u8bba",
                floor: "\u697c",
                latest: "\u6700\u65b0",
                earliest: "\u6700\u65e9",
                hottest: "\u6700\u70ed",
                share_to: "\u5206\u4eab\u5230:",
                leave_a_message: "\u8bf4\u70b9\u4ec0\u4e48\u5427\u2026",
                no_comments_yet: "\u8fd8\u6ca1\u6709\u8bc4\u8bba\uff0c\u6c99\u53d1\u7b49\u4f60\u6765\u62a2",
                repost_reason: "\u8bf7\u8f93\u5165\u8f6c\u53d1\u7406\u7531",
                hot_posts_title: "\u88ab\u9876\u8d77\u6765\u7684\u8bc4\u8bba",
                comments_zero: "\u6682\u65e0\u8bc4\u8bba",
                comments_one: "1\u6761\u8bc4\u8bba",
                comments_multiple: "{num}\u6761\u8bc4\u8bba",
                reposts_zero: "\u6682\u65e0\u8f6c\u53d1",
                reposts_one: "1\u6761\u8f6c\u53d1",
                reposts_multiple: "{num}\u6761\u8f6c\u53d1",
                weibo_reposts_zero: "\u6682\u65e0\u65b0\u6d6a\u5fae\u535a",
                weibo_reposts_one: "1\u6761\u65b0\u6d6a\u5fae\u535a",
                weibo_reposts_multiple: "{num}\u6761\u65b0\u6d6a\u5fae\u535a",
                qqt_reposts_zero: "\u6682\u65e0\u817e\u8baf\u5fae\u535a",
                qqt_reposts_one: "1\u6761\u817e\u8baf\u5fae\u535a",
                qqt_reposts_multiple: "{num}\u6761\u817e\u8baf\u5fae\u535a"
            },
            O = {
                get: function(a) {
                    return p ? p[a] : void 0
                },
                save: function(a, b) {
                    if (p) try {
                        p.removeItem(a), p[a] = m.stringify(b), p.removeItem(a + ":timestamp"), p[a + ":timestamp"] = Math.floor((new Date - s) / 1e3)
                    } catch (c) {}
                }
            },
            P = B.loadRequire = function(b) {
                if (b.visitor && (!ga.data && b.visitor.user_id && a.Notification && K.send({
                    logged_user_id: b.visitor.user_id
                }), ga.reset(b.visitor)), b.site && (fa.reset(b.site), O.save("ds_site_" + k.short_name, b.site)), !B.theme && fa.data.theme && g(fa.data.theme), b.lang && (h.extend(N, b.lang), O.save("ds_lang_" + k.short_name, b.lang)), b.stylesheets)
                    for (var c = 0; c < b.stylesheets.length; c++) h.injectStylesheet(b.stylesheets[c]);
                if (b.nonce && (B.nonce = b.nonce), b.style && h.injectStyle((b.style || "") + B.compileStyle(k.component_style)), b.unread && ha.reset(b.unread), b.warnings)
                    for (var c = 0; c < b.warnings.length; c++) A.warn(b.warnings[c])
            },
            Q = 0,
            R = B.Class = function() {};
        R.extend = function(a) {
            function b() {
                !Q && this.init && this.init.apply(this, arguments)
            }
            Q = 1;
            var c = new this;
            Q = 0;
            for (var d in a) c[d] = a[d];
            return b.prototype = c, b.prototype.constructor = b, b.extend = arguments.callee, b
        };
        var S = B.Event = R.extend({
                on: function(a, b) {
                    var d = this.handlers || (this.handlers = {});
                    return d[a] === c && (d[a] = []), d[a].push(b), this
                },
                trigger: function(a, b) {
                    var c = (this.handlers || (this.handlers = {}))[a];
                    if (c)
                        for (var d = 0; d < c.length && c[d].call(this, b) !== !1; d++);
                    return this
                }
            }),
            T = B.Widget = S.extend({
                init: function(a, b) {
                    this.el = a, this.options = b || {}, this.render()
                },
                render: function() {},
                reset: function() {},
                load: function(a) {
                    switch (a.code) {
                        case 0:
                            P(a);
                            var b = this.prepare(a);
                            b.options = h.extend(this.options, a.options), this.onload(b);
                            break;
                        default:
                            this.onError(a)
                    }
                },
                onload: function(a) {
                    this.el.html(aa[this.tmpl](a))
                },
                prepare: function(a) {
                    return a
                },
                onMessage: function() {},
                onError: function(a) {
                    A.error("\u51fa\u9519\u5566(" + a.code + "): " + a.errorMessage), a.errorTrace && A.error(a.errorTrace)
                }
            }),
            U = B.Model = S.extend({
                init: function(a) {
                    this.data = a
                },
                reset: function(a) {
                    this.data = a, this.trigger("reset")
                },
                remove: function(a) {
                    this.data.splice(a, 1), this.trigger("reset")
                },
                set: function(a, b) {
                    if (b === c)
                        for (var d in a) this.data[d] = a[d];
                    else this.data[a] = b;
                    return this.trigger("reset"), this
                },
                toJSON: function() {
                    return h.extend({}, this.data)
                }
            }),
            V = U.extend({
                toJSON: function() {
                    return h.extend({}, this.data)
                }
            }),
            W = U.extend({
                toJSON: function() {
                    var a = h.extend({}, this.data);
                    return a.theAuthor = ka[this.data.author_id] && ka[this.data.author_id].data || this.data.author, a.parents = this.data.parents || [], a
                }
            }),
            X = U.extend({
                toJSON: function() {
                    return h.extend({}, this.data)
                }
            }),
            Y = function(a) {
                this.model = a
            };
        Y.prototype.set = function(a) {
            for (var b in a) a[b] && (this[b] ? this[b].set(a[b]) : this[b] = new this.model(a[b]))
        }, Y.prototype.get = function(a) {
            for (var b = 0, c = []; b < a.length; b++) c[b] = this[a[b]];
            return c
        }, Y.prototype.getJSON = function(a) {
            for (var b = 0, c = []; b < a.length; b++) this[a[b]] && c.push(this[a[b]].toJSON());
            return c
        };
        var Z = {
                userUrl: function(a) {
                    return a.url
                },
                avatarUrl: function(a) {
                    return a.avatar_url || fa.data.default_avatar_url
                },
                loginUrl: function(a, b) {
                    return b || (b = {}), k.sso && k.sso.login && (b.sso = 1, b.redirect_uri = k.sso.login), d() + "/login/" + a + "/" + x(b)
                },
                bindUrl: function(a) {
                    return d() + "/bind/" + a + "/" + x(k.sso && k.sso.login ? {
                        sso: 1,
                        redirect_uri: k.sso.login
                    } : null, y())
                },
                logoutUrl: function() {
                    return d() + "/logout/" + x(k.sso && k.sso.logout ? {
                        sso: 1,
                        redirect_uri: k.sso.logout
                    } : null)
                }
            },
            $ = ["weixin", "weibo", "qq", "renren"],
            _ = ["douban", "kaixin", "baidu", "google"],
            aa = B.templates = {
                userAnchor: function(a) {
                    return a.url ? '<a rel="nofollow author" target="_blank" href="' + u(a.url) + '">' + u(a.name) + "</a>" : u(a.name)
                },
                avatarImg: function(a, b) {
                    return '<img src="' + u(Z.avatarUrl(a, b)) + '" alt="' + u(a.name) + '"' + (b ? ' style="width:' + b + "px;height:" + b + 'px"' : "") + "/>"
                },
                avatar: function(a, b) {
                    var c = aa.avatarImg(a, b),
                        e = Z.userUrl(a);
                    return e ? '<a rel="nofollow author" target="_blank" href="' + u(e) + '" ' + (a.user_id ? " onclick=\"this.href='" + d() + "/user-url/?user_id=" + a.user_id + "';\"" : "") + ' title="' + u(a.name) + '">' + c + "</a>" : c
                },
                timeText: function(a) {
                    return a ? '<span class="ds-time" datetime="' + a + '" title="' + B.fullTime(a) + '">' + B.elapsedTime(a) + "</span>" : ""
                },
                timeAnchor: function(a, b) {
                    return a ? '<a href="' + b + '" target="_blank" rel="nofollow" class="ds-time" datetime="' + a + '" title="' + B.fullTime(a) + '">' + B.elapsedTime(a) + "</a>" : ""
                },
                serviceIcon: function(a, b) {
                    return '<a href="javascript:void(0)" class="ds-service-icon' + (b ? "-grey" : "") + " ds-" + a + '" data-service="' + a + '" title="' + B.sourceName[a] + '"></a>'
                },
                poweredBy: function(a) {
                    return '<p class="ds-powered-by"><a href="http://duoshuo.com" target="_blank" rel="nofollow">' + u(a) + "</a></p>"
                },
                indicator: w('<div id="ds-indicator"></div>'),
                waitingImg: w('<div id="ds-waiting"></div>'),
                loginItem: function(a, b) {
                    var c = Z[b ? "bindUrl" : "loginUrl"](a);
                    return '<li>    <a href="' + c + '" rel="nofollow" class="ds-service-link ds-' + a + '">' + B.serviceNames[a] + (ga.data.social_uid[a] ? ' <span class="ds-icon ds-icon-ok"></span>' : "") + "</a></li>"
                }
            },
            ba = function(a) {
                var b = [];
                for (var c in a) b.push('<input type="hidden" name="' + c + '" value="' + u(a[c]) + '" />');
                return b.join("\n")
            };
        aa.commentList = function(a) {
            var b = "",
                c = a.list;
            if (c)
                for (var d, e = -1, f = c.length - 1; f > e;) d = c[e += 1], b += '<li class="ds-comment', a.options.show_avatars && (b += " ds-show-avatars"), b += '" data-post-id="' + d.post_id + '">', a.options.show_avatars && (b += '<div class="ds-avatar">' + aa.avatar(d.theAuthor, a.options.avatar_size) + "</div>"), b += '<div class="ds-meta">' + aa.userAnchor(d.theAuthor), a.options.show_time && (b += aa.timeText(d.created_at)), b += "</div>", b += a.options.show_title ? '<div class="ds-thread-title">\u5728 <a href="' + l(d.thread.url) + '#comments">' + l(d.thread.title) + '</a> \u4e2d\u8bc4\u8bba</div><div class="ds-excerpt">' + d.message + "</div>" : '<a class="ds-excerpt" title="' + d.thread.title + ' \u4e2d\u7684\u8bc4\u8bba" href="' + l(d.thread.url) + '#comments">' + d.message + "</a>", b += "</li>";
            return b
        }, aa.ctxPost = function(a) {
            var b = "";
            return a.post && (b += '<li class="ds-ctx-entry"', a.hidden && (b += ' style="display:none"'), b += ' data-post-id="' + a.post.post_id + '"><div class="ds-avatar">' + aa.avatar(a.post.theAuthor || a.post.author) + '</div><div class="ds-ctx-body"><div class="ds-ctx-head">' + aa.userAnchor(a.post.theAuthor || a.post.author) + aa.timeAnchor(a.post.created_at, a.post.url), a.index >= 0 && (b += '<div class="ds-ctx-nth" title="' + B.fullTime(a.post.created_at) + '">' + (a.index + 1) + N.floor + "</div>"), b += '</div><div class="ds-ctx-content">' + a.post.message, a.index >= 0 && (b += '\u3000\u3000\u3000\u3000\u3000\u3000\u3000<div class="ds-comment-actions', a.post.vote > 0 && (b += " ds-post-liked"), b += '">' + aa.likePost(a.post) + '<a class="ds-post-repost" href="javascript:void(0);"><span class="ds-icon ds-icon-share"></span>' + N.repost + '</a><a class="ds-post-reply" href="javascript:void(0);"><span class="ds-icon ds-icon-reply"></span>' + N.reply + "</a></div>"), b += "</div></div></li>"), b
        }, aa["dialog-anonymous"] = function(a) {
            var b = '<h2>\u793e\u4ea4\u5e10\u53f7\u767b\u5f55</h2><div class="ds-icons-32">',
                c = a.services;
            if (c)
                for (var d, e = -1, f = c.length - 1; f > e;) d = c[e += 1], b += '<a class="ds-' + d + '" href="' + Z.loginUrl(d) + '">' + B.sourceName[d] + "</a>";
            return b += "</div>", a.options.deny_anonymous || (b += '<h2>\u4f5c\u4e3a\u6e38\u5ba2\u7559\u8a00</h2><form><div class="ds-control-group"><input type="text" name="author_name" id="ds-dialog-name" value="' + l(ga.data.name) + '" required /><label for="ds-dialog-name">\u540d\u5b57(\u5fc5\u586b)</label></div>', a.options.require_guest_email && (b += '<div class="ds-control-group"><input type="email" name="author_email" id="ds-dialog-email" value="' + l(ga.data.email) + '" required /><label for="ds-dialog-email">\u90ae\u7bb1(\u5fc5\u586b)</label></div>'), a.options.require_guest_url && (b += '<div class="ds-control-group"><input type="url" name="author_url" id="ds-dialog-url" placeholder="http://" value="' + l(ga.data.url) + '" /><label for="ds-dialog-url">\u7f51\u5740(\u53ef\u9009)</label></div>'), b += '<button type="submit">\u53d1\u5e03</button></form>'), b
        }, aa["dialog-ask-for-auth"] = function() {
            var a = '<h2>\u793e\u4ea4\u5e10\u53f7\u767b\u5f55</h2><ul class="ds-service-list">' + aa.serviceList($) + '</ul><ul class="ds-service-list ds-additional-services">' + aa.serviceList(_) + "</ul>";
            return a
        }, aa["dialog-bind-more"] = function() {
            var a = '<h2>\u7ed1\u5b9a\u66f4\u591a\u5e10\u53f7</h2><ul class="ds-service-list">' + aa.serviceBindList($) + '</ul><ul class="ds-service-list ds-additional-services">' + aa.serviceBindList(_) + '</ul><div style="clear:both"></div>';
            return a
        }, aa["dialog-qrcode"] = function(a) {
            var b = '<h2>\u5fae\u4fe1\u626b\u4e00\u626b\uff0c\u5206\u4eab\u5230\u670b\u53cb\u5708</h2><div class="ds-share-qrcode" style="text-align:center;"><img src="' + a.qrcode_url + '" alt="' + a.url + '"></div>';
            return b
        }, aa["dialog-reposts"] = function(a) {
            var b = '<h2>\u8f6c\u53d1\u5230\u5fae\u535a</h2><div class="ds-quote"><strong>@' + l(a.post.theAuthor.name) + "</strong>: " + a.post.message + "</div><form>" + ba({
                post_id: a.post.post_id
            }) + '<div class="ds-textarea-wrapper"><textarea name="message" title="Ctrl+Enter\u5feb\u6377\u63d0\u4ea4" placeholder="' + l(N.repost_reason) + '">' + l(a.repostMessage) + '</textarea><pre class="ds-hidden-text"></pre>';
            return b += '</div><div class="ds-actions">', a.service ? b += ba({
                "service[]": a.service
            }) : (b += '<label><input type="checkbox" name="service[]" value="weibo"', ga.data.social_uid.weibo && (b += ' checked="checked"'), b += ' /><span class="ds-service-icon ds-weibo"></span>\u65b0\u6d6a\u5fae\u535a</label><label><input type="checkbox" name="service[]" value="qqt"', ga.data.social_uid.qq && (b += ' checked="checked"'), b += ' /><span class="ds-service-icon ds-qqt"></span>\u817e\u8baf\u5fae\u535a</label>'), b += '<button type="submit">' + N.repost + "</button></div></form>"
        }, aa.dialog = function(a) {
            var b = '<div class="ds-dialog"><div class="ds-dialog-inner ds-rounded"><div class="ds-dialog-body">' + a + '</div><div class="ds-dialog-footer"><a href="http://duoshuo.com/" target="_blank" class="ds-logo"></a><span>\u793e\u4f1a\u5316\u8bc4\u8bba\u6846</span></div><a class="ds-dialog-close" href="javascript:void(0)" title="\u5173\u95ed"></a></div></div>';
            return b
        }, aa.hotPosts = function(a) {
            var b = '<div class="ds-header ds-gradient-bg">' + l(N.hot_posts_title) + "</div><ul>",
                c = a.list;
            if (c)
                for (var d, e = -1, f = c.length - 1; f > e;) d = c[e += 1], b += aa.post({
                    post: d,
                    options: a.options
                });
            return b += "</ul>"
        }, aa.likePost = function(a) {
            var b = '<a class="ds-post-likes" href="javascript:void(0);"><span class="ds-icon ds-icon-like"></span>' + N.like;
            return a.likes > 0 && (b += "(" + a.likes + ")"), b += "</a>"
        }, aa.likeTooltip = function(a) {
            var b = '<div class="ds-like-tooltip ds-rounded"><p>\u5f88\u9ad8\u5174\u4f60\u80fd\u559c\u6b22\uff0c\u5206\u4eab\u4e00\u4e0b\u5427\uff1a</p><ul>';
            for (var c in a.services) b += '<li><a class="ds-share-to-' + c + " ds-service-link ds-" + c + '" href="' + d() + "/share-proxy/?" + h.param({
                service: c,
                thread_id: a.thread_id
            }) + '">' + a.services[c] + "</a></li>";
            return b += '</ul><p class="ds-like-tooltip-footer"><a class="ds-like-tooltip-close">\u7b97\u4e86</a></p></div>'
        }, aa.loginButtons = function() {
            var a = '<div class="ds-login-buttons"><p>\u793e\u4ea4\u5e10\u53f7\u767b\u5f55:</p><div class="ds-social-links"><ul class="ds-service-list">' + aa.serviceList($) + '<li><a class="ds-more-services" href="javascript:void(0)">\u66f4\u591a\xbb</a></li></ul><ul class="ds-service-list ds-additional-services">' + aa.serviceList(_) + "</ul></div></div>";
            return a
        }, aa.loginWidget = function(a) {
            var b = '<div class="ds-icons-32">',
                c = a;
            if (c)
                for (var d, e = -1, f = c.length - 1; f > e;) d = c[e += 1], b += '<a class="ds-' + d + '" href="' + Z.loginUrl(d) + '">' + B.sourceName[d] + "</a>";
            return b += "</div>"
        }, aa.meta = function(a) {
            var b = '<div class="ds-meta"><a href="javascript:void(0)" class="ds-like-thread-button ds-rounded';
            return a.user_vote > 0 && (b += " ds-thread-liked"), b += '"><span class="ds-icon ds-icon-heart"></span> <span class="ds-thread-like-text">', b += a.user_vote > 0 ? "\u5df2\u559c\u6b22" : "\u559c\u6b22", b += '</span><span class="ds-thread-cancel-like">\u53d6\u6d88\u559c\u6b22</span></a><span class="ds-like-panel"></span></div>'
        }, aa.notify = function(a) {
            var b = '<div id="ds-reset"><a class="ds-logo" href="http://duoshuo.com/" target="_blank" title="\u591a\u8bf4"></a><ul class="ds-notify-unread"><li';
            return a.comments || (b += ' style="display:none;"'), b += '><a data-type="unread-comments" href="javascript:void(0);">\u4f60\u6709' + a.comments + "\u6761\u65b0\u56de\u590d</a></li><li", a.notifications || (b += ' style="display:none;"'), b += '><a data-type="unread-notifications" href="javascript:void(0);">\u4f60\u6709' + a.notifications + "\u6761\u7cfb\u7edf\u6d88\u606f</a></li></ul></div>"
        }, aa.post = function(a) {
            var b = "",
                c = a.post,
                e = a.options,
                f = c.author;
            if (b += '<li class="ds-post" data-post-id="' + c.post_id + '"><div class="ds-post-self" data-post-id="' + c.post_id + '" data-thread-id="' + c.thread_id + '" data-root-id="' + c.root_id + '" data-source="' + c.source + '"><div class="ds-avatar"', f.user_id && (b += ' data-user-id="' + f.user_id + '"'), b += ">" + aa.avatar(f), B.sourceName[c.source] && (b += aa.serviceIcon(c.source)), b += '</div><div class="ds-comment-body"><div class="ds-comment-header">', f.url ? (b += '<a class="ds-user-name ds-highlight" data-qqt-account="' + (f.qqt_account || "") + '" href="' + l(f.url) + '" ', f.user_id && (b += " onclick=\"this.href='" + d() + "/user-url/?user_id=" + f.user_id + "';\""), b += ' rel="nofollow" target="_blank"', f.user_id && (b += ' data-user-id="' + f.user_id + '"'), b += ">" + l(f.name) + "</a>") : (b += '<span class="ds-user-name"', f.user_id && (b += ' data-user-id="' + f.user_id + '"'), b += ' data-qqt-account="' + (f.qqt_account || "") + '">' + l(f.name) + "</span>"), b += "</div>", 1 == e.max_depth && e.show_context && c.parents.length) {
                b += '<ol id="ds-ctx">';
                var g = ja.getJSON(c.parents);
                if (g)
                    for (var h, i = -1, j = g.length - 1; j > i;) h = g[i += 1], 1 == i && c.parents.length > 2 && (b += '<li class="ds-ctx-entry"><a href="javascript:void(0);" class="ds-expand">\u8fd8\u6709' + (c.parents.length - 2) + "\u6761\u8bc4\u8bba</a></li>"), b += aa.ctxPost({
                        post: h,
                        index: i,
                        hidden: i && i < c.parents.length - 1
                    });
                b += "</ol>"
            }
            if (b += "<p>", c.parents.length >= e.max_depth && (!e.show_context || e.max_depth > 1) && c.parent_id && ja[c.parent_id] && (b += '<a class="ds-comment-context" data-post-id="' + c.post_id + '" data-parent-id="' + c.parent_id + '">' + N.reply_to + l(ja[c.parent_id].toJSON().author.name) + ": </a>"), b += c.message + '</p><div class="ds-comment-footer ds-comment-actions', c.vote > 0 && (b += " ds-post-liked"), b += '">', b += c.url ? aa.timeAnchor(c.created_at, c.url) : aa.timeText(c.created_at), "duoshuo" == c.source ? (b += '<a class="ds-post-reply" href="javascript:void(0);"><span class="ds-icon ds-icon-reply"></span>' + N.reply + "</a>" + aa.likePost(c) + '<a class="ds-post-repost" href="javascript:void(0);"><span class="ds-icon ds-icon-share"></span>' + N.repost + '</a><a class="ds-post-report" href="javascript:void(0);"><span class="ds-icon ds-icon-report"></span>' + N.report + "</a>", c.privileges["delete"] && (b += '<a class="ds-post-delete" href="javascript:void(0);"><span class="ds-icon ds-icon-delete"></span>' + N["delete"] + "</a>")) : ("qqt" == c.source || "weibo" == c.source) && (b += '<a class="ds-weibo-comments" href="javascript:void(0);">' + N.comments, c.type.match(/\-comment$/) || (b += '(<span class="ds-count">' + c.comments + "</span>)"), b += '</a><a class="ds-weibo-reposts" href="javascript:void(0);">' + N.reposts, c.type.match(/\-comment$/) || (b += '(<span class="ds-count">' + c.reposts + "</span>)"), b += "</a>"), b += "</div></div></div>", e.max_depth > 1 && (c.childrenArray || c.children) && "weibo" != c.source && "qqt" != c.source) {
                b += '<ul class="ds-children">';
                var k = ja.getJSON(c.childrenArray || c.children);
                if (k)
                    for (var c, i = -1, m = k.length - 1; m > i;) c = k[i += 1], b += aa.post({
                        post: c,
                        options: e
                    });
                b += "</ul>"
            }
            return b += "</li>"
        }, aa.postListHead = function(a) {
            var b = '<div class="ds-comments-info"><div class="ds-sort"><a class="ds-order-desc">' + N.latest + '</a><a class="ds-order-asc">' + N.earliest + '</a><a class="ds-order-hot">' + N.hottest + '</a></div><ul class="ds-comments-tabs"><li class="ds-tab"><a class="ds-comments-tab-duoshuo ds-current" href="javascript:void(0);"></a></li>';
            return a.options.show_reposts && a.thread.reposts && (b += '<li class="ds-tab"><a class="ds-comments-tab-repost" href="javascript:void(0);"></a></li>'), b += " ", a.options.show_weibo && a.thread.weibo_reposts && (b += '<li class="ds-tab"><a class="ds-comments-tab-weibo" href="javascript:void(0);"></a></li>'), b += " ", a.options.show_qqt && a.thread.qqt_reposts && (b += '<li class="ds-tab"><a class="ds-comments-tab-qqt" href="javascript:void(0);"></a></li>'), b += "</ul></div>"
        }, aa.recentVisitors = function(a) {
            var b = "",
                c = a.response;
            if (c)
                for (var d, e = -1, f = c.length - 1; f > e;) d = c[e += 1], b += '<div class="ds-avatar">' + aa.avatar(d, a.options.avatar_size) + "</div>";
            return b
        }, aa.replybox = function(a) {
            var b = '<div class="ds-replybox"><a class="ds-avatar"';
            if (b += f() ? ' href="javascript:void(0);" onclick="return false"' : ' href="' + B.REMOTE + "/settings/avatar/" + x(y()) + '" target="_blank" title="\u8bbe\u7f6e\u5934\u50cf"', b += ">" + aa.avatarImg(ga.data) + '</a><form method="post">' + ba(a.params) + '<div class="ds-textarea-wrapper ds-rounded-top"><textarea name="message" title="Ctrl+Enter\u5feb\u6377\u63d0\u4ea4" placeholder="' + l(N.leave_a_message) + '"></textarea><pre class="ds-hidden-text"></pre>', b += "</div>", b += '<div class="ds-post-toolbar"><div class="ds-post-options ds-gradient-bg"><span class="ds-sync">', !f() && ga.data.repostOptions) {
                b += '<input id="ds-sync-checkbox', a.inline && (b += "-inline"), b += '" type="checkbox" name="repost" ', a.checked && (b += 'checked="checked" '), b += 'value="' + a.repostArray.join(",") + '"> <label for="ds-sync-checkbox', a.inline && (b += "-inline"), b += '">' + N.share_to + "</label>";
                for (var c in ga.data.repostOptions) b += aa.serviceIcon(c, !ga.data.repostOptions[c])
            }
            return b += "</span>", b += "</div>", b += '<button class="ds-post-button" type="submit">' + l(N.post) + '</button><div class="ds-toolbar-buttons">', a.options.use_smilies && (b += '<a class="ds-toolbar-button ds-add-emote" title="\u63d2\u5165\u8868\u60c5"></a>'), a.options.use_images && a.options.parse_html_enabled && (b += '<a class="ds-toolbar-button ds-add-image" title="\u63d2\u5165\u56fe\u7247"></a>'), b += "</div></div>", b += "</form></div>"
        }, aa.serviceBindList = function(a) {
            var b = "",
                c = a;
            if (c)
                for (var d, e = -1, f = c.length - 1; f > e;) d = c[e += 1], b += '<li><a href="' + Z.bindUrl(d) + '" rel="nofollow" class="ds-service-link ds-' + d + '">' + B.serviceNames[d], ga.data.social_uid[d] && (b += ' <span class="ds-icon ds-icon-ok"></span>'), b += "</a></li>";
            return b
        }, aa.serviceList = function(a) {
            var b = "",
                c = a;
            if (c)
                for (var d, e = -1, f = c.length - 1; f > e;) d = c[e += 1], b += '<li><a href="' + Z.loginUrl(d) + '" rel="nofollow" class="ds-service-link ds-' + d + '">' + B.serviceNames[d] + "</a></li>";
            return b
        }, aa.shareWidget = function(a) {
            var b = '<div class="ds-share-icons"> <div class="ds-share-icons-inner"> <ul class="ds-share-icons-16"> ',
                c = a.services;
            if (c)
                for (var d, e = -1, f = c.length - 1; f > e;) d = c[e += 1], b += ' <li> <a class="ds-' + d + '" href="javascript:void(0);" data-service="' + d + '">' + B.sourceName[d] + "</a> </li> ";
            return b += ' </ul> </div> <div class="ds-share-icons-footer">' + a.copyright + "</div></div>"
        }, aa.smiliesTooltip = function(a) {
            var b = '<div id="ds-smilies-tooltip"><ul class="ds-smilies-tabs">';
            for (var c in a) b += "<li><a>" + c + "</a></li>";
            return b += '</ul><div class="ds-smilies-container"></div></div>'
        }, aa.toolbar = function() {
            var a = '<div class="ds-toolbar"><div class="ds-account-control"><span class="ds-icon ds-icon-settings"></span> <span>\u5e10\u53f7\u7ba1\u7406</span><ul><li><a class="ds-bind-more" href="javascript:void(0);" style="border-top: none">\u7ed1\u5b9a\u66f4\u591a</a></li><li><a target="_blank" href="' + B.REMOTE + "/settings/" + x(y()) + '">' + l(N.settings) + '</a></li><li><a rel="nofollow" href="' + Z.logoutUrl() + '" style="border-bottom: none">\u767b\u51fa</a></li></ul></div><div class="ds-visitor">';
            return a += ga.data.url ? '<a class="ds-visitor-name" href="' + l(ga.data.url) + '" target="_blank">' + l(ga.data.name) + "</a>" : '<span class="ds-visitor-name">' + l(ga.data.name) + "</span>", a += '<a class="ds-unread-comments-count" href="javascript:void(0);" title="\u65b0\u56de\u590d"></a></div></div>'
        }, aa.topThreads = function(a) {
            var b = "",
                c = a.response;
            if (c)
                for (var d, e = -1, f = c.length - 1; f > e;) d = c[e += 1], b += '<li><a target="_blank" href="' + l(d.url) + '" title="' + l(d.title) + '">' + l(d.title) + "</a></li>";
            return b
        }, aa.topUsers = function(a) {
            var b = "",
                c = a.response;
            if (c)
                for (var d, e = -1, f = c.length - 1; f > e;) d = c[e += 1], b += '<div class="ds-avatar">' + aa.avatar(d, a.options.avatar_size) + "<h4>" + l(d.name) + "</h4></div>";
            return b
        }, aa.userInfo = function(a) {
            var b = '<a href="' + l(a.url) + '" onclick="this.href=\'' + d() + "/user-url/?user_id=" + a.user_id + '\';" class="ds-avatar" target="_blank">' + aa.avatarImg(a) + '</a><a href="' + l(a.url) + '" onclick="this.href=\'' + d() + "/user-url/?user_id=" + a.user_id + '\';" class="ds-user-name ds-highlight" target="_blank">' + l(a.name) + "</a>";
            for (var c in a.social_uid) b += '<a href="' + B.REMOTE + "/user-proxy/" + c + "/" + a.social_uid[c] + '/" target="_blank" class="ds-service-icon ds-' + c + '" title="' + B.sourceName[c] + '"></a>';
            return b += '<p class="ds-user-card-meta"><a href="' + B.REMOTE + "/profile/" + a.user_id + '/" target="_blank"><span class="ds-highlight">' + a.comments + "</span>\u6761\u8bc4\u8bba</a></p>", a.description && (b += '<p class="ds-user-description">' + l(a.description) + "</p>"), b
        };
        var ca = B.Views = {},
            da = (B.Callbacks = {}, B.pagelets = []),
            ea = B.events = new S,
            fa = B.site = new U,
            ga = B.visitor = new V,
            ha = B.unread = new U,
            ia = B.threadPool = new Y(X),
            ja = B.postPool = new Y(W),
            ka = B.userPool = new Y(V);
        ea.on("queryDefined", function() {
            var a = k.short_name;
            if (k.theme && g(k.theme), p) {
                var b = p["ds_site_" + a],
                    c = p["ds_lang_" + a];
                b && fa.reset(m.parse(b)), c && h.extend(N, m.parse(c))
            }
        }), z(), B.require("embed.compat", function() {
            function e(a) {
                a.stopPropagation()
            }

            function g(a) {
                (a.ctrlKey && 13 == a.which || 10 == a.which) && R(this.form).trigger("submit");
            }

            function i() {
                var a = R(this);
                a.height(Math.max(54, a.next(".ds-hidden-text").text(this.value).height() + 27))
            }

            function j() {
                if (D.authInWin) {
                    var a = this.href.match(/\/(login|bind)\/(\w+)\//i);
                    if (a && B.serviceNames[a[2]]) return !s(a[2], this.href)
                }
            }

            function l() {
                var a, c, d, e, f, g = this,
                    h = 0,
                    i = 0;
                b.selection && (c = b.selection.createRange(), c && c.parentElement() == g && (e = g.value.length, a = g.value.replace(/\r\n/g, "\n"), d = g.createTextRange(), d.moveToBookmark(c.getBookmark()), f = g.createTextRange(), f.collapse(!1), d.compareEndPoints("StartToEnd", f) > -1 ? h = i = e : (h = -d.moveStart("character", -e), h += a.slice(0, h).split("\n").length - 1, d.compareEndPoints("EndToEnd", f) > -1 ? i = e : (i = -d.moveEnd("character", -e), i += a.slice(0, i).split("\n").length - 1)))), R(g).data("ds-range-start", h).data("ds-range-end", i)
            }

            function m(a) {
                return D.touch && a.addClass("ds-touch"), h.cssProperty("transition") || a.addClass("ds-no-transition"), D.ie6 && a.addClass("ds-ie6"), D.opacity || a.addClass("ds-no-opacity"), a
            }

            function o(a) {
                if (!D.placeholder) {
                    var b = a.attr("placeholder");
                    a.val(b).focus(function() {
                        this.value === b && (this.value = "")
                    }).blur(function() {
                        "" === this.value && (this.value = b)
                    })
                }
                return a
            }

            function r(a) {
                if ("http://duoshuo.com" === a.origin) switch (a.data.type) {
                    case "login":
                        n.href = a.data.redirectUrl
                }
            }

            function s(b, c) {
                var d = {
                    weibo: [760, 600],
                    renren: [420, 322],
                    qq: [504, 445],
                    weixin: [450, 550],
                    google: [600, 440]
                }[b] || [550, 400];
                return a.open(c + (-1 == c.indexOf("?") ? "?" : "&") + h.param({
                    origin: n.origin || "http://" + n.host
                }), "_blank", "width=" + d[0] + ",height=" + d[1] + ",toolbar=no,menubar=no,location=yes")
            }

            function t(a) {
                var b = Z[f() ? "loginUrl" : "bindUrl"](a);
                D.authInWin && s(a, b) || (n.href = b)
            }

            function w() {
                var a = F(aa["dialog-ask-for-auth"]({})).el.find(".ds-dialog").css("width", "300px");
                a.find("a.ds-service-link").click(j)
            }

            function x(a, b, c, d) {
                function e() {
                    function a(a) {
                        if (c && d) {
                            var b = c.options,
                                e = L(c.postList.el, a.response[d], b);
                            "asc" == b.order == ("top" == b.formPosition) && B.scrollTo(e);
                            var f = c.el.find(".ds-comments-tab-" + d + " span.ds-highlight");
                            f.html(parseInt(f.html()) + 1)
                        }
                    }
                    return d || j.find("[type=checkbox]:checked")[0] ? (J.post("posts/repost", B.toJSON(j), a), h.close(), !1) : (alert("\u8fd8\u6ca1\u6709\u9009\u53d1\u5e03\u5230\u54ea\u513f\u5462"), !1)
                }

                function f() {
                    var a = this.value;
                    return this.checked && !ga.data.social_uid["qqt" == a ? "qq" : a] ? void t(a) : void 0
                }
                var h = F(aa["dialog-reposts"]({
                        post: a.toJSON(),
                        repostMessage: b,
                        service: d
                    })),
                    j = h.el.find("form");
                return j.submit(e), j.find(".ds-actions [type=checkbox]").change(f), o(j.find("textarea")).keyup(g).keyup(i).focus(), !1
            }

            function y(a) {
                var b = {
                        "unread-comments": {
                            title: "\u65b0\u7559\u8a00\u53ca\u56de\u590d",
                            apiUrl: "users/unreadComments",
                            tmpl: function(a) {
                                return a.thread ? '<li data-thread-id="' + a.thread.thread_id + '">' + R.map(a.authors, aa.userAnchor).join("\u3001") + ' \u5728 <a class="ds-read" href="' + a.thread.url + '#comments" target="_blank">' + u(a.thread.title || "\u65e0\u6807\u9898") + '</a> \u4e2d\u56de\u590d\u4e86\u4f60 <a class="ds-delete ds-read" title="\u77e5\u9053\u4e86" href="javascript:void(0)">\u77e5\u9053\u4e86</a></li>' : ""
                            },
                            read: function(a) {
                                var b = a.attr("data-thread-id");
                                J.post("threads/read", {
                                    thread_id: b
                                }), ha.data.comments--
                            }
                        },
                        "unread-notifications": {
                            title: "\u7cfb\u7edf\u6d88\u606f",
                            apiUrl: "users/unreadNotifications",
                            tmpl: function(a) {
                                return '<li data-notification-id="' + a.notification_id + '" data-notification-type="' + a.type + '">' + a.content + ' <a class="ds-delete ds-read" title="\u77e5\u9053\u4e86" href="javascript:void(0)">\u77e5\u9053\u4e86</a></li>'
                            },
                            read: function(a) {
                                var b = a.attr("data-notification-id");
                                J.post("notifications/read", {
                                    notification_id: b
                                }), ha.data.notifications--
                            }
                        }
                    }[a],
                    c = F("<h2>" + b.title + '</h2><ul class="ds-unread-list"></ul>');
                c.on("close", B.resetNotify);
                var d = c.el.find(".ds-unread-list").delegate(".ds-delete", "click", function() {
                    return R(this).parent().remove(), 0 === d.children().length && c.close(), !1
                }).delegate(".ds-read", "click", function() {
                    b.read(R(this).parent())
                });
                R("#ds-notify").hide(), J.get(b.apiUrl, {}, function(a) {
                    c.el.find(".ds-unread-list").html(R.map(a.response, b.tmpl).join("\n"))
                })
            }

            function H() {
                bubbleOutTimer && (clearTimeout(bubbleOutTimer), bubbleOutTimer = 0)
            }

            function I() {
                bubbleOutTimer = setTimeout(function() {
                    bubbleOutTimer = 0, $.detach()
                }, 400)
            }

            function L(a, b, c) {
                return a.find(".ds-post[data-post-id=" + b.data.post_id + "]")[0] ? void 0 : (a.find(".ds-post-placeholder").remove(), R(aa.post({
                    post: b.toJSON(),
                    options: c
                })).hide()["asc" == c.order ? "appendTo" : "prependTo"](a).slideDown(function() {}))
            }

            function M(a, b) {
                function c() {
                    if (f()) return w(), !1;
                    var a = R(this).parent(),
                        b = a.hasClass("ds-post-liked"),
                        c = R(this).html().match(/\((\d+)\)/),
                        d = (c ? parseInt(c[1]) : 0) + (b ? -1 : 1);
                    return J.post("posts/vote", {
                        post_id: a.closest(".ds-ctx-entry, .ds-post-self").attr("data-post-id"),
                        vote: b ? 0 : 1
                    }), R(this).html(R(this).html().replace(/\(\d+\)/, "") + (d ? "(" + d + ")" : "")), a[b ? "removeClass" : "addClass"]("ds-post-liked"), !1
                }

                function d() {
                    var a = R(this).closest(".ds-post-self"),
                        b = ja[a.attr("data-post-id")];
                    return x(b, ""), !1
                }

                function e() {
                    if (!confirm("\u786e\u5b9a\u8981\u5220\u9664\u8fd9\u6761\u8bc4\u8bba\u5417\uff1f")) return !1;
                    var b = R(this).closest(".ds-post-self");
                    return J.post("posts/remove", {
                        post_id: b.attr("data-post-id")
                    }), b.parent().fadeOut(200, function() {
                        a.data.comments--, a.updateCounter("duoshuo"), R(this).remove()
                    }), !1
                }

                function g() {
                    if (!confirm("\u786e\u5b9a\u8981\u4e3e\u62a5\u8fd9\u6761\u8bc4\u8bba\u5417\uff1f")) return !1;
                    var a = R(this).closest(".ds-post-self");
                    return J.post("posts/report", {
                        post_id: a.attr("data-post-id")
                    }), alert("\u611f\u8c22\u60a8\u7684\u53cd\u9988\uff01"), !1
                }

                function h() {
                    var c = R(this),
                        d = c.closest(".ds-comment-actions");
                    if (d.hasClass("ds-reply-active")) n.el.fadeOut(200, function() {
                        R(this).detach()
                    }), d.removeClass("ds-reply-active");
                    else {
                        var e = c.closest(".ds-ctx-entry, .ds-post-self");
                        n ? n.actionsBar.removeClass("ds-reply-active") : (n = new ca.Replybox(a), n.render(!0).el.addClass("ds-inline-replybox").detach()), n.el.find("[name=parent_id]").val(e.attr("data-post-id")), n.el.show().appendTo(c.closest(".ds-ctx-body, .ds-comment-body")).find("textarea").focus(), n.actionsBar = d.addClass("ds-reply-active"), b.max_depth <= 1 ? n.postList = a.postList.el : (n.postList = e.siblings(".ds-children"), n.postList[0] || (n.postList = R('<ul class="ds-children"></ul>').insertAfter(e)))
                    }
                    return !1
                }

                function i() {
                    function a(a) {
                        P(a), e.append(R.map(a.response, function(a) {
                            return aa.post({
                                post: a,
                                options: b
                            })
                        }).join(""))
                    }
                    var c = R(this).closest(".ds-post-self"),
                        d = c.attr("data-post-id");
                    if (c.data("source"), 0 != c.attr("data-root-id")) return !1;
                    var e = c.siblings(".ds-children");
                    return e[0] ? (e.remove(), !1) : (e = R('<ul class="ds-children"></ul>').insertAfter(c), J.get("posts/listComments", Q({
                        post_id: d
                    }), a), !1)
                }

                function j() {
                    var b = R(this).closest(".ds-post-self"),
                        c = ja[b.attr("data-post-id")],
                        d = c.data.source;
                    if (!ga.data.social_uid["qqt" == d ? "qq" : d]) return void t(d);
                    var e = c.data.root_id,
                        f = "0" != e ? ja[e] : c,
                        g = "";
                    if ("0" != e) {
                        var h = prepatePost(c.data).theAuthor;
                        g = ("weibo" == d ? "//@" + h.name : "|| @" + h.qqt_account) + ":" + c.data.message
                    }
                    return x(f, g, a, d), !1
                }

                function k() {
                    var a = R(this).parent();
                    return a.siblings().show(), a.remove(), !1
                }

                function l() {
                    function b() {
                        function b(a) {
                            var b = a.response;
                            ka[k] ? ka[k].set(b) : ka[k] = new V(b), $.owner == c && _.html(aa.userInfo(b))
                        }
                        ba = 0, $.owner = c, H();
                        var e = d.offset(),
                            f = a.el.offset(),
                            g = d.innerWidth() / 2,
                            h = a.el.innerHeight() - (e.top - f.top) + 6,
                            i = e.left - f.left - 35 + (g > 35 ? 35 : g);
                        try {
                            if (d.hasClass("ds-comment-context")) _.attr("id", "ds-ctx-bubble").attr("data-post-id", d.attr("data-post-id")).html('<ul id="ds-ctx">' + aa.ctxPost({
                                post: ja[d.attr("data-parent-id")].toJSON()
                            }) + '</ul><div class="ds-bubble-footer"><a class="ds-ctx-open" href="javascript:void(0);">\u67e5\u770b\u5bf9\u8bdd</a></div>');
                            else if (d.hasClass("ds-avatar") || d.hasClass("ds-user-name")) {
                                var j = {},
                                    k = j.user_id = d.attr("data-user-id");
                                if (!k) throw "no info";
                                _.attr("id", "ds-user-card").attr("data-user-id", k).empty(), ka[k] ? _.html(aa.userInfo(ka[k].data)) : J.get("users/profile", Q(j), b)
                            }
                            $.css({
                                bottom: h,
                                left: i
                            }).appendTo(a.innerEl)
                        } catch (l) {
                            $.detach()
                        }
                    }
                    var c = this;
                    if (bubbleOutTimer && $.owner == c) return clearTimeout(bubbleOutTimer), void(bubbleOutTimer = 0);
                    var d = R(c);
                    ba = setTimeout(b, 200)
                }

                function m() {
                    ba ? (clearTimeout(ba), ba = 0) : bubbleOutTimer || I()
                }
                var n;
                this.delegate("a.ds-post-likes", "click", c).delegate("a.ds-post-repost", "click", d).delegate("a.ds-post-delete", "click", e).delegate("a.ds-post-report", "click", g).delegate("a.ds-post-reply", "click", h).delegate("a.ds-weibo-comments", "click", i).delegate("a.ds-weibo-reposts", "click", j).delegate("a.ds-expand", "click", k), D.touch || this.delegate("a.ds-comment-context, .ds-avatar, .ds-user-name", "mouseenter", l).delegate("a.ds-comment-context, .ds-avatar, .ds-user-name", "mouseleave", m)
            }

            function Q(a) {
                var c = {
                    require: "site,visitor,nonce,lang" + (ea++ ? "" : ",unread,log,extraCss"),
                    site_ims: O.get("ds_site_" + k.short_name + ":timestamp"),
                    lang_ims: O.get("ds_lang_" + k.short_name + ":timestamp"),
                    referer: b.referrer
                };
                k.stylePatch && (c.style_patch = k.stylePatch);
                for (var d in c) c[d] && (!D.ie6 || encodeURIComponent(c[d]).length < 200) && (a[d] = c[d]);
                return a
            }
            var R = B.jQuery,
                U = R(a),
                Y = R(b);
            a.postMessage && (a.addEventListener ? a.addEventListener("message", r, !1) : a.attachEvent && a.attachEvent("onmessage", r)), B.scrollTo = function(a) {
                var b = a.offset().top;
                (b < U.scrollTop() || b > U.scrollTop() + U.height()) && R("html, body").animate({
                    scrollTop: b - 40
                }, 200, "swing")
            }, B.toJSON = function(a) {
                var b = /\r?\n/g,
                    c = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
                    d = /^(?:select|textarea)/i,
                    e = a.map(function() {
                        return this.elements ? R.makeArray(this.elements) : this
                    }).filter(function() {
                        return this.name && !this.disabled && (this.checked || d.test(this.nodeName) || c.test(this.type))
                    }).map(function(a, c) {
                        var d = R(this).val();
                        return null == d ? null : R.isArray(d) ? R.map(d, function(a) {
                            return {
                                name: c.name,
                                value: a.replace(b, "\r\n")
                            }
                        }) : {
                            name: c.name,
                            value: d.replace(b, "\r\n")
                        }
                    }).toArray(),
                    f = {};
                return R.each(e, function() {
                    f[this.name] = this.value
                }), f
            }, B.resetNotify = function() {
                var a = R("#ds-notify"),
                    c = ha.data;
                a[0] || (a = R('<div id="ds-notify"></div>').css({
                    hidden: {
                        display: "none"
                    },
                    "top-right": {
                        top: "24px",
                        right: "24px"
                    },
                    "bottom-right": {
                        bottom: "24px",
                        right: "24px"
                    }
                }[fa.data.notify_position]).delegate(".ds-notify-unread a", "click", function() {
                    return y(R(this).data("type")), !1
                }).appendTo(b.body)), a.html(aa.notify(c))[!c.comments && !c.notifications || "hidden" === fa.data.notify_position || R(".ds-dialog")[0] ? "hide" : "show"]()
            }, ha.on("reset", B.resetNotify), ca.Replybox = function(a) {
                this.embedThread = a
            }, ca.Replybox.prototype = {
                render: function(a) {
                    function c(a) {
                        a.data("submitting", !0), a.find(".ds-post-button").addClass("ds-waiting").html(N.posting)[0].disabled = !0
                    }

                    function d(a) {
                        a.data("submitting", !1), a.find(".ds-post-button").removeClass("ds-waiting").html(N.post)[0].disabled = !1
                    }
                    var e = this,
                        h = e.embedThread,
                        k = h.options,
                        m = function() {
                            B.require("smilies", function() {})
                        },
                        n = {
                            thread: h,
                            options: k,
                            inline: a,
                            params: {
                                thread_id: h.threadId,
                                parent_id: "",
                                nonce: B.nonce
                            },
                            repostArray: [],
                            checked: 0
                        };
                    for (var q in ga.data.repostOptions) ga.data.repostOptions[q] && (n.repostArray.push(q), n.checked = 1);
                    var r = e.el = R(aa.replybox(n)).click(m),
                        s = r.find("form"),
                        t = s.find("input[type=checkbox]")[0],
                        u = s.find("a.ds-service-icon, a.ds-service-icon-grey"),
                        v = o(s.find("textarea")).focus(m).keyup(g).keyup(i).bind("focus mousedown mouseup keyup", l),
                        w = r.find(".ds-add-emote").click(function(a) {
                            var c = B.smiliesTooltip;
                            return w.toggleClass("ds-expanded").hasClass("ds-expanded") ? (c || (c = B.smiliesTooltip = new ca.SmiliesTooltip, c.render(), B.require("smilies", function() {
                                c.reset("\u5fae\u535a-\u9ed8\u8ba4")
                            })), c.replybox = e, c.el.appendTo(b.body).css({
                                top: e.el.offset().top + e.el.outerHeight() + 4 + "px",
                                left: e.el.find(".ds-textarea-wrapper").offset().left + "px"
                            }), R(b.body).click(x)) : x(a), !1
                        }),
                        x = (r.find(".ds-add-image").click(function(a) {
                            var c = v[0],
                                d = c.value,
                                e = "\u8bf7\u8f93\u5165\u56fe\u7247\u5730\u5740",
                                f = '<img src="' + e + '" />';
                            if (b.selection) {
                                c.value = d.substring(0, v.data("ds-range-start")) + f + d.substring(v.data("ds-range-end"), d.length), c.value = c.value.replace("\u8bf4\u70b9\u4ec0\u4e48\u5427 ...", ""), c.focus();
                                var g = b.selection.createRange();
                                g.collapse(), g.findText(e), g.select()
                            } else {
                                c.value = d.substring(0, c.selectionStart) + f + d.substring(c.selectionEnd);
                                var h = c.value.search(e);
                                c.setSelectionRange(h, h + e.length), c.focus()
                            }
                            a.preventDefault()
                        }), e.hideSmilies = function() {
                            w.removeClass("ds-expanded"), B.smiliesTooltip.el.detach(), R(b.body).unbind("click", x)
                        }),
                        y = function(a, b) {
                            var c = F(aa["dialog-anonymous"]({
                                    services: ["weixin", "weibo", "qq", "renren", "kaixin", "douban"],
                                    options: k
                                })),
                                d = c.el.find(".ds-dialog").css("width", "320px");
                            if (d.find(".ds-icons-32 a").click(j), !k.deny_anonymous) {
                                var e = c.el.find("form");
                                e.submit(function() {
                                    var a = e.find("input[name=author_email]").val();
                                    return !a && !k.require_guest_email || a.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? (b(B.toJSON(e)), c.close(), !1) : (alert("\u8bf7\u8f93\u5165\u4e00\u4e2a\u6709\u6548\u7684email\u5730\u5740."), !1)
                                }), e.find("input[name=author_name]")[0].focus()
                            }
                        };
                    k.deny_anonymous && v.focus(function() {
                        if (f()) {
                            y(s, z);
                            var a = function(b) {
                                b.stopPropagation(), v.unbind("click", a)
                            };
                            v.click(a)
                        }
                        return !1
                    });
                    var z = function(a) {
                        c(s), J.post("posts/create", R.extend(B.toJSON(s), a), function(a) {
                            var b = ja[a.response.post_id] = new W(a.response),
                                c = L(e.postList, b, k);
                            if ("asc" == k.order == ("top" == k.formPosition) && B.scrollTo(c), h.data.comments++, h.updateCounter("duoshuo"), v.val("").trigger("keyup"), d(s), r.hasClass("ds-inline-replybox") && (r.detach(), e.actionsBar.removeClass("ds-reply-active")), p) try {
                                p.removeItem("ds_draft_" + h.threadId)
                            } catch (f) {}
                        }, function(a) {
                            d(s), alert(a.errorMessage)
                        })
                    };
                    s.submit(function() {
                        if (s.data("submitting")) return !1;
                        var a = R.trim(s[0].message.value);
                        return "" == a || !D.placeholder && a == v.attr("placeholder") ? (alert("\u60a8\u8fd8\u6ca1\u5199\u5185\u5bb9\u5462"), !1) : (f() ? y(s, z) : z(), !1)
                    });
                    var A = function(a) {
                        return R(a).hasClass("ds-service-icon-grey") ? null : R(a).attr("data-service")
                    };
                    if (u.click(function() {
                        return R(this).toggleClass("ds-service-icon-grey").toggleClass("ds-service-icon"), t.value = R.map(u, A).join(","), t.checked = "" != t.value, !1
                    }), R(t).change(function() {
                        var a = this.checked;
                        u[a ? "removeClass" : "addClass"]("ds-service-icon-grey")[a ? "addClass" : "removeClass"]("ds-service-icon"), this.value = R.map(u, A).join(",")
                    }), !a && p) {
                        var C = "ds_draft_" + h.threadId;
                        v.bind("focus blur keyup", function(a) {
                            var b = R(a.currentTarget).val();
                            try {
                                p[C] = b
                            } catch (a) {}
                        }), p[C] && v.val(p[C])
                    }
                    return this
                }
            }, ca.Dialog = S.extend({
                init: function(a, b) {
                    (this.el = R("#ds-wrapper"))[0] || (this.el = m(R('<div id="ds-wrapper"></div>'))), this.options = R.extend({
                        width: 600
                    }, b), a !== c && R(a).attr("id", "ds-reset").appendTo(this.el)
                },
                open: function() {
                    function a(a) {
                        return 27 == a.which ? (d.close(), !1) : void 0
                    }

                    function c() {
                        return d.close(), !1
                    }
                    var d = this;
                    return d.el.hide().appendTo(b.body).fadeIn(200), D.ie6 && d.el.css("top", U.scrollTop() + 100), d.el.show().find(".ds-dialog").delegate("a.ds-dialog-close", "click", function() {
                        return d.close(), !1
                    }).click(e), Y.keydown(a), R(b.body).click(c), d.close = function() {
                        Y.unbind("keydown", a), R(b.body).unbind("click", c), d.el.fadeOut(200, function() {
                            R(this).remove()
                        }), d.trigger("close")
                    }, d
                }
            }), aa.likePanel = function(a) {
                return a.likes ? '<span class="ds-highlight">' + a.likes + "</span> \u4eba\u559c\u6b22" : ""
            }, ca.Meta = function(a) {
                this.embedThread = a
            }, ca.Meta.prototype = {
                render: function() {
                    function d(d) {
                        function f(a) {
                            h.set(a), g.resetLikePanel()
                        }

                        function k() {
                            g.tooltip.detach(), R(b.body).unbind("click", k)
                        }

                        function l(b) {
                            switch (this.className) {
                                case "ds-like-tooltip-close":
                                    k(b);
                                    break;
                                default:
                                    if (!a.open(this.href, "_blank", "height=500,width=600,top=0,left=0,toolbar=no,menubar=no,resizable=yes,location=yes,status=no")) return
                            }
                            return !1
                        }
                        var m = j.hasClass("ds-thread-liked");
                        if (J.post("threads/vote", {
                            thread_id: g.embedThread.threadId,
                            vote: m ? 0 : 1
                        }, f), j.toggleClass("ds-thread-liked"), j.find(".ds-thread-like-text").text(m ? "\u559c\u6b22" : "\u5df2\u559c\u6b22"), m) return g.tooltip && k(d), !1;
                        if (g.tooltip === c) {
                            var n = aa.likeTooltip({
                                services: {
                                    qzone: "QQ\u7a7a\u95f4",
                                    weibo: "\u65b0\u6d6a\u5fae\u535a",
                                    qqt: "\u817e\u8baf\u5fae\u535a",
                                    renren: "\u4eba\u4eba\u7f51",
                                    kaixin: "\u5f00\u5fc3\u7f51",
                                    douban: "\u8c46\u74e3\u7f51",
                                    baidu: "\u767e\u5ea6\u641c\u85cf"
                                },
                                thread_id: h.data.thread_id
                            });
                            g.tooltip = R(n).click(e).delegate("a", "click", l)
                        }
                        var o = {};
                        return o.left = 0, o.top = i.position().top + i.outerHeight() - 4 + "px", g.tooltip.appendTo(g.embedThread.innerEl).css(o), R(b.body).click(k), !1
                    }
                    var g = this,
                        h = g.embedThread.model,
                        i = g.el = R(aa.meta(h.toJSON())),
                        j = i.find(".ds-like-thread-button");
                    return j.click(d), g.resetLikePanel(), f() && i.hide(), g
                },
                resetLikePanel: function() {
                    this.el.find(".ds-like-panel").html(aa.likePanel(this.embedThread.model.toJSON()))
                }
            }, ca.PostListHead = function(a) {
                this.embedThread = a
            }, ca.PostListHead.prototype = {
                render: function() {
                    function a(a) {
                        f.find("a.ds-current").removeClass("ds-current"), d.params.page = 1;
                        var b = a.currentTarget;
                        switch (b.className) {
                            case "ds-comments-tab-duoshuo":
                                d.params.source = "duoshuo", c.replybox.el.show();
                                break;
                            case "ds-comments-tab-repost":
                                d.params.source = "repost", c.replybox.el.hide();
                                break;
                            case "ds-comments-tab-weibo":
                                d.params.source = "weibo", c.replybox.el.hide();
                                break;
                            case "ds-comments-tab-qqt":
                                d.params.source = "qqt", c.replybox.el.hide()
                        }
                        return R(b).addClass("ds-current"), d.refetch(), !1
                    }

                    function b() {
                        return g.find("a.ds-current").removeClass("ds-current"), d.params.order = c.options.order = this.className.replace("ds-order-", ""), d.params.page = 1, d.refetch(), R(this).addClass("ds-current"), !1
                    }
                    var c = this.embedThread,
                        d = c.postList,
                        e = this.el = R(aa.postListHead({
                            thread: c.model.toJSON(),
                            options: c.options
                        })),
                        f = e.find("ul.ds-comments-tabs");
                    f.delegate(".ds-tab a", "click", a);
                    var g = e.find(".ds-sort");
                    return g.delegate("a", "click", b), g.find(".ds-order-" + d.params.order).addClass("ds-current"), this
                }
            }, ca.Paginator = function(a) {
                function b() {
                    return e.params.page = parseInt(this.innerHTML), e.refetch(), d.find(".ds-current").removeClass("ds-current"), R(this).addClass("ds-current"), !1
                }
                a = a || {};
                var c = this,
                    d = c.el = a.el || R('<div class="ds-paginator"></div>'),
                    e = c.collection = a.collection;
                d.delegate("a", "click", b)
            }, ca.Paginator.prototype = {
                reset: function(a) {
                    function b(a) {
                        e.push('<a data-page="' + a + '" href="javascript:void(0);">' + a + "</a>")
                    }
                    var c, d = this.collection.params.page || 1,
                        e = [];
                    if (d > 1)
                        for (b(1), c = d > 4 ? d - 2 : 2, c > 2 && e.push('<span class="page-break">...</span>'); d > c; c++) b(c);
                    if (e.push('<a data-page="' + d + '" href="javascript:void(0);" class="ds-current">' + d + "</a>"), d < a.pages) {
                        for (c = d + 1; d + 4 >= c && c < a.pages; c++) b(c);
                        c < a.pages && e.push('<span class="page-break">...</span>'), b(a.pages)
                    }
                    this.el.html('<div class="ds-border"></div>' + e.join(" "))[a.pages > 1 ? "show" : "hide"]()
                }
            }, B.addSmilies = function(a, b) {
                var c = B.smiliesTooltip;
                c && c.el.find("ul.ds-smilies-tabs").append("<li><a>" + a + "</a></li>"), B.smilies[a] = b
            }, ca.SmiliesTooltip = function() {}, ca.SmiliesTooltip.prototype = {
                render: function() {
                    function a() {
                        var a = c.replybox,
                            d = a.el.find("textarea"),
                            e = d[0],
                            f = e.value;
                        if (b.selection) {
                            e.value = f.substring(0, d.data("ds-range-start")) + this.title + f.substring(d.data("ds-range-end"), f.length), e.value = e.value.replace(N.leave_a_message, ""), e.focus();
                            var g = b.selection.createRange();
                            g.moveStart("character", d.data("ds-range-start") + this.title.length), g.collapse(), g.select()
                        } else {
                            var h = e.selectionStart + this.title.length;
                            e.value = f.substring(0, e.selectionStart) + this.title + f.substring(e.selectionEnd), e.setSelectionRange(h, h)
                        }
                        a.hideSmilies(), e.focus()
                    }
                    var c = this,
                        d = c.el = R(aa.smiliesTooltip(G));
                    return d.click(e).find("ul.ds-smilies-tabs").delegate("a", "click", function() {
                        c.reset(this.innerHTML)
                    }), d.find(".ds-smilies-container").delegate("img", "click", a), this
                },
                reset: function(a) {
                    function b(b, c) {
                        var e = 0 === a.indexOf("\u5fae\u535a") ? "http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/" + c.replace("_org", "_thumb") : B.STATIC_URL + "/images/smilies/" + c;
                        "WordPress" === a && (b = " " + b + " "), d += '<li><img src="' + e + '" title="' + u(b) + '" /></li>'
                    }
                    var c = this.el.find("ul.ds-smilies-tabs");
                    c.find("a.ds-current").removeClass("ds-current"), c.find("a").filter(function() {
                        return this.innerHTML == a
                    }).addClass("ds-current");
                    var d = "<ul>";
                    return R.each(G[a], b), d += "</ul>", this.el.find(".ds-smilies-container").html(d), this
                }
            }, aa.postPlaceholder = function() {
                return ['<li class="ds-post ds-post-placeholder">', N.no_comments_yet, "</li>"].join("")
            };
            var $ = R('<div id="ds-bubble"><div class="ds-bubble-content"></div><div class="ds-arrow ds-arrow-down ds-arrow-border"></div><div class="ds-arrow ds-arrow-down"></div></div>'),
                _ = $.find(".ds-bubble-content").delegate("a.ds-ctx-open", "click", function() {
                    function a(a) {
                        function b(a, b) {
                            return aa.ctxPost({
                                post: a,
                                index: b
                            })
                        }
                        A.log(R.map(a.response, b).join("\n")), c.el.find("ol"), c.el.find("ol").html(R.map(a.response, b).join("\n"))
                    }
                    var b = {};
                    b.post_id = _.attr("data-post-id"), J.get("posts/conversation", b, a);
                    var c = F('<h2>\u67e5\u770b\u5bf9\u8bdd</h2><ol id="ds-ctx"></ol>');
                    return c.el.find(".ds-dialog").css("width", "600px"), c.el.find(".ds-dialog-body").css({
                        "max-height": "350px",
                        _height: "350px",
                        "overflow-y": "auto",
                        "padding-top": "10px"
                    }), !1
                }),
                ba = bubbleOutTimer = 0;
            $.mouseenter(H).mouseleave(I), ca.PostList = function(a) {
                a && (a.params && (this.params = a.params), a.embedThread && (this.embedThread = a.embedThread)), this.el = R('<ul class="ds-comments"></ul>')
            }, ca.PostList.prototype = {
                url: "threads/listPosts",
                render: function() {
                    return M.call(this.el, this.embedThread, this.embedThread.options), this
                },
                reset: function(a) {
                    var b = this.embedThread.options;
                    this.el.html(a[0] ? R.map(ja.getJSON(a), function(a) {
                        return aa.post({
                            post: a,
                            options: b
                        })
                    }).join("") : aa.postPlaceholder())
                },
                refetch: function() {
                    function a(a) {
                        ja.set(a.parentPosts || a.relatedPosts), ka.set(a.users), c.reset(a.response), c.embedThread.paginator.reset(a.cursor), c.el.fadeTo(200, 1), B.scrollTo(c.el), d.remove()
                    }
                    var c = this,
                        d = R(aa.indicator()).appendTo(b.body).fadeIn(200);
                    c.el.fadeTo(200, .5), J.get(c.url, c.params, a)
                }
            }, ca.EmbedThread = T.extend({
                uri: "threads/listPosts",
                params: "thread-id local-thread-id source-thread-id thread-key category channel-key author-key author-id url limit order max-depth form-position container-url" + (q.match(/MSIE 6\.0/) ? "" : " title image thumbnail"),
                render: function() {
                    var a = this.el;
                    if ("\u8bf7\u5c06\u6b64\u5904\u66ff\u6362\u6210\u6587\u7ae0\u5728\u4f60\u7684\u7ad9\u70b9\u4e2d\u7684ID" === a.data("thread-key")) return alert("\u8bf7\u8bbe\u7f6e\u6b63\u786e\u7684 data-thread-key \u5c5e\u6027"), !1;
                    a.attr("id", "ds-thread").append(aa.waitingImg());
                    var b = a.width(),
                        c = a.data("url") || !a.attr("data-thread-id") && R("link[rel=canonical]").attr("href");
                    c ? a.data("url", v(c)) : a.data("container-url", n.href), b && 400 >= b && a.addClass("ds-narrow").data("max-depth", 1)
                },
                updateCounter: function(a) {
                    function b(a) {
                        return a.substr(a.indexOf("}") + 1)
                    }
                    var c = {
                        duoshuo: ["comments", b(N.comments_multiple) || "\u8bc4\u8bba"],
                        repost: ["reposts", b(N.reposts_multiple) || "\u8f6c\u8f7d"],
                        weibo: ["weibo_reposts", b(N.weibo_reposts_multiple) || "\u65b0\u6d6a\u5fae\u535a"],
                        qqt: ["qqt_reposts", b(N.qqt_reposts_multiple) || "\u817e\u8baf\u5fae\u535a"]
                    };
                    for (var d in c)
                        if (!a || a == d) {
                            var e = this.data[c[d][0]];
                            this.el.find(".ds-comments-tab-" + d).html(this.el.hasClass("ds-narrow") ? '<span class="ds-service-icon ds-' + d + '"></span>' + e : (e ? '<span class="ds-highlight">' + e + "</span>" : "0") + c[d][1])
                        }
                },
                onError: function(a) {
                    this.el.html("\u8bc4\u8bba\u6846\u51fa\u9519\u5566(" + a.code + "): " + a.errorMessage)
                },
                onload: function(b) {
                    var d = this,
                        e = d.threadId = b.thread.thread_id,
                        g = b.cursor,
                        h = d.options = b.options,
                        i = d.innerEl = m(R('<div id="ds-reset"></div>').appendTo(d.el));
                    d.model = new X(d.data = b.thread), ja.set(b.parentPosts || b.relatedPosts), ka.set(b.users), d.el.find("#ds-waiting").remove(), h.like_thread_enabled && (d.meta = new ca.Meta(d), i.append(d.meta.render().el)), h.hot_posts && b.hotPosts && b.hotPosts.length && (d.hotPosts = new ca.HotPosts(R('<div class="ds-rounded"></div>'), {
                        max_depth: 1,
                        show_context: h.show_context
                    }), d.hotPosts.thread = d, i.append(d.hotPosts.el), d.hotPosts.onload({
                        list: ja.getJSON(b.hotPosts)
                    })), d.postListHead = new ca.PostListHead(d), d.postList = new ca.PostList({
                        embedThread: d,
                        params: {
                            source: "duoshuo",
                            thread_id: e,
                            max_depth: h.max_depth,
                            order: h.order,
                            limit: h.limit
                        }
                    }), d.postList.render().reset(b.response), d.paginator = new ca.Paginator({
                        collection: d.postList
                    }), d.paginator.reset(g);
                    var k = d.replybox = new ca.Replybox(d);
                    k.postList = d.postList.el, f() ? d.loginButtons = R(aa.loginButtons()).delegate("a.ds-more-services", "click", function() {
                        return d.loginButtons.find(".ds-additional-services").toggle(), !1
                    }).delegate("a.ds-service-link", "click", j) : d.toolbar = R(aa.toolbar()).delegate(".ds-account-control", "mouseenter", function() {
                        R(this).addClass("ds-active")
                    }).delegate(".ds-account-control", "mouseleave", function() {
                        R(this).removeClass("ds-active")
                    }).delegate("a.ds-bind-more", "click", function() {
                        var a = F(aa["dialog-bind-more"]()).el.find(".ds-dialog").addClass("ds-dialog-bind-more").css("width", "300px");
                        return a.find("a.ds-service-link").click(j), !1
                    }).delegate("a.ds-unread-comments-count", "click", function() {
                        return y("unread-comments"), !1
                    });
                    var l = ['<a name="respond"></a>', d.toolbar || d.loginButtons, k.render().el];
                    "top" == h.formPosition && R.fn.append.apply(i, l), i.append(d.postListHead.render().el, d.postList.el, d.paginator.el), "bottom" == h.formPosition && R.fn.append.apply(i, l), i.append(aa.poweredBy(h.poweredby_text)), d.updateCounter(), b.alerts && R.each(b.alerts, function(a, b) {
                        R('<div class="ds-alert">' + b + "</div>").insertBefore(d.toolbar || loginButtons)
                    }), h.message && k.el.find("textarea").val(h.message).focus(), ha.on("reset", function() {
                        var a = ha.data.comments || 0;
                        i.find("a.ds-unread-comments-count").html(a).attr("title", a ? "\u4f60\u6709" + a + "\u6761\u65b0\u56de\u590d" : "\u4f60\u6ca1\u6709\u65b0\u56de\u590d").css("display", a ? "inline" : "none")
                    }), h.mzadx_id && (B.require("mzadxN", function() {}), R('<div id="MZADX_' + h.mzadx_id + '" style="margin:0 auto;"></div>').appendTo(i), __mz_rpq = a.__mz_rpq || [], __mz_rpq.push({
                        l: [h.mzadx_id],
                        r: "1",
                        _srv: "MZADX",
                        _callback: function() {}
                    })), B.thread = d, ha.data !== c && ha.trigger("reset"), f() || K.send({
                        visit_thread_id: d.threadId
                    })
                },
                onMessage: function(a) {
                    L(this.postList.el, new W(a), this.options)
                }
            }), ca.HotPosts = T.extend({
                tmpl: "hotPosts",
                params: "show-quote",
                render: function() {
                    return this.el.attr("id", "ds-hot-posts"), this
                },
                onload: function(a) {
                    a.options = R.extend(this.options, a.options), T.prototype.onload.call(this, a), M.call(this.el.find("ul"), this.thread, this.options)
                }
            }), ca.RecentComments = T.extend({
                tmpl: "commentList",
                uri: "sites/listRecentPosts",
                params: "show-avatars show-time show-title avatar-size show-admin excerpt-length num-items channel-key",
                render: function() {
                    this.el.attr("id", "ds-recent-comments")
                },
                prepare: function(a) {
                    return {
                        list: R.map(a.response, function(a) {
                            return new W(a).toJSON()
                        })
                    }
                }
            }), ca.RecentVisitors = T.extend({
                tmpl: "recentVisitors",
                uri: "sites/listVisitors",
                params: "show-time avatar-size num-items channel-key",
                render: function() {
                    this.el.children().detach(), this.el.attr("id", "ds-recent-visitors").append(this.waitingEl = R(aa.waitingImg()))
                }
            }), ca.TopThreads = T.extend({
                tmpl: "topThreads",
                uri: "sites/listTopThreads",
                params: "range num-items channel-key",
                render: function() {
                    this.el.children().detach(), this.el.attr("id", "ds-top-threads").append(this.waitingEl = R(aa.waitingImg()))
                }
            }), ca.LoginWidget = T.extend({
                tmpl: "loginWidget",
                render: function() {
                    var a = this.el;
                    a.attr("id", "ds-login").html(aa.loginWidget(["weixin", "weibo", "qq", "renren", "kaixin", "douban"])), a.find("a").click(j), a.find("a.ds-logout").attr("href", Z.logoutUrl())
                }
            }), ca.ThreadCount = T.extend({
                onload: function(a) {
                    var b = this.el,
                        c = b.data("count-type") || "comments",
                        d = a.data[c];
                    b[b.data("replace") ? "replaceWith" : "html"](N[c + "_" + (d ? d > 1 ? "multiple" : "one" : "zero")].replace("{num}", d))
                }
            }), ca.ShareWidget = T.extend({
                tmpl: "shareWidget",
                render: function() {
                    var a = {
                        copyright: "\u591a\u8bf4\u5206\u4eab\u63d2\u4ef6",
                        services: ["weibo", "qq", "wechat"]
                    };
                    this.el.attr("id", "ds-share"), this.el.children().attr("id", "ds-reset"), this.el.find(".ds-share-aside-inner").html(aa.shareWidget(a)), this.el.find(".ds-share-icons-more").html(aa.shareWidget(a)), this.el.find(".ds-share-icons-more").hide(), this.el.hasClass("flat") && this.el.find("a").each(function() {
                        R(this).addClass("flat")
                    }), m(this.el), this.delegateEvents()
                },
                delegateEvents: function() {
                    var c = this,
                        e = c.el;
                    if (e.children().hasClass("ds-share-inline")) {
                        var f = ".ds-share-icons-more",
                            g = e.find(f),
                            i = "[data-toggle=ds-share-icons-more]";
                        e.delegate(i, "mouseover", function() {
                            g.show()
                        }), e.delegate(i, "mouseout", function() {
                            g.hide()
                        }), e.delegate(f, "mouseover", function() {
                            g.show()
                        }), e.delegate(f, "mouseout", function() {
                            g.hide()
                        })
                    } else {
                        var j = e.children().hasClass("ds-share-aside-left") ? "slide-to-right" : "slide-to-left",
                            k = e.children();
                        if (!h.cssProperty("transition")) {
                            var l = e.children().hasClass("ds-share-aside-left") ? "left" : "right";
                            e.delegate(".ds-share-aside-toggle", "mouseover", function() {
                                var a = {},
                                    c = D.ie6 && "right" === l;
                                c ? a.left = (b.documentElement.scrollLeft + b.documentElement.clientWidth - this.offsetWidth - (parseInt(this.currentStyle.marginLeft, 10) || 0) - parseInt(this.currentStyle.marginRight, 10) || 0) - 195 : a[l] = 0, k.animate(a, 200)
                            }), e.delegate(".ds-share-aside-inner", "mouseleave", function() {
                                var a = {},
                                    c = D.ie6 && "right" === l;
                                c ? a.left = (b.documentElement.scrollLeft + b.documentElement.clientWidth - this.offsetWidth - (parseInt(this.currentStyle.marginLeft, 10) || 0) - parseInt(this.currentStyle.marginRight, 10) || 0) + 230 : a[l] = -229, k.animate(a, 200)
                            })
                        }
                        e.delegate(".ds-share-aside-toggle,.ds-share-aside-inner", "mouseover", function() {
                            k.addClass(j)
                        }), e.delegate(".ds-share-aside-toggle,.ds-share-aside-inner", "mouseleave", function() {
                            k.removeClass(j)
                        })
                    }
                    e.delegate("a", "click", function(b) {
                        var c = R(this).data("service");
                        if (!e.data("url")) return void alert("\u8bf7\u8bbe\u7f6edata-url");
                        if ("wechat" === c) {
                            var f = d() + "/api/qrcode/getImage.png",
                                g = "?size=240&text=" + e.data("url"),
                                i = F(aa["dialog-qrcode"]({
                                    qrcode_url: f + g,
                                    url: e.data("url")
                                }));
                            i.el.find(".ds-dialog").css("width", "320px")
                        } else {
                            var j = d() + "/share-proxy/?" + h.param({
                                service: R(this).data("service"),
                                thread_key: e.data("threadKey"),
                                title: e.data("title"),
                                images: e.data("images"),
                                content: e.data("content"),
                                url: e.data("url")
                            });
                            a.open(j, "_blank")
                        }
                        b.preventDefault(), b.stopPropagation()
                    })
                }
            });
            var ea = 0;
            B.initSelector = function(a, b) {
                function c(a) {
                    P(a), h.extend(N, a.options), ia.set(a.response)
                }
                var d = [];
                !z() || !R.isReady && C || R(a).each(function(a, c) {
                    var e = R(c);
                    if (!e.data("initialized")) {
                        e.data("initialized", !0);
                        var f = new ca[b.type](e, b);
                        if (da.push(f), "ThreadCount" === b.type) {
                            var g = e.attr("data-thread-key");
                            e.attr("data-channel-key") && (g = e.attr("data-channel-key") + ":" + g), d.push(g), ia[g] || (ia[g] = new X({})), ia[g].on("reset", function() {
                                f.onload(this)
                            })
                        } else if (f.uri) {
                            var h = {};
                            R.each(f.params.split(" "), function(a, b) {
                                h[b.replace(/-/g, "_")] = e.attr("data-" + b) || e.data(b)
                            }), J.get(f.uri, Q(h), function(a) {
                                f.load(a)
                            })
                        }
                    }
                }), d.length && J.get("threads/counts", Q({
                    threads: d.join(",")
                }), c)
            }, (B.initView = function() {
                R.each(E, B.initSelector)
            })(), R(function() {
                if (!k) {
                    if (!z()) return A.error("\u7f3a\u5c11 duoshuoQuery \u7684\u5b9a\u4e49");
                    A.warn("\u8bf7\u5728\u52a0\u8f7d\u591a\u8bf4 embed.js \u4e4b\u524d\u5b9a\u4e49 duoshuoQuery")
                }
                setInterval(function() {
                    R(".ds-time").each(function() {
                        var a = R(this).attr("datetime");
                        a && (this.innerHTML = B.elapsedTime(a))
                    })
                }, 2e4), k.ondomready && k.ondomready(), B.initView(), !ea && k.short_name && J.get("analytics/ping", Q({}), P)
            })
        })
    }
}(window, document);