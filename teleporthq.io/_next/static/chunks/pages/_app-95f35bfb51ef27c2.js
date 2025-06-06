(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2888], {
        2746: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(833),
                i = r(1163);
            var o = function(e) {
                return e && "object" == typeof e && "default" in e ? e : {
                    default: e
                }
            }(r(7294));

            function s() {
                return s = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, s.apply(this, arguments)
            }
            var a = ["locale"];
            t.NextIntlProvider = function(e) {
                var t, r = e.locale,
                    h = function(e, t) {
                        if (null == e) return {};
                        var r, n, i = {},
                            o = Object.keys(e);
                        for (n = 0; n < o.length; n++) t.indexOf(r = o[n]) >= 0 || (i[r] = e[r]);
                        return i
                    }(e, a);
                try {
                    t = i.useRouter()
                } catch (n) {}
                if (!r && t && (r = t.locale), !r) throw new Error(void 0);
                return o.default.createElement(n.IntlProvider, s({
                    locale: r
                }, h))
            }, Object.keys(n).forEach((function(e) {
                "default" === e || t.hasOwnProperty(e) || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return n[e]
                    }
                })
            }))
        },
        1118: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return r(2601)
            }])
        },
        2601: function(e, t, r) {
            "use strict";

            function n(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    })))), i.forEach((function(t) {
                        n(e, t, r[t])
                    }))
                }
                return e
            }
            r.r(t), r.d(t, {
                default: function() {
                    return c
                }
            });
            var o = r(5893),
                s = (r(8794), r(7294)),
                a = r(2746),
                h = (0, s.createContext)(null),
                u = function(e) {
                    var t = e.initialLocales,
                        r = e.children,
                        n = (0, a.useLocale)(),
                        i = (0, s.useState)(null !== t && void 0 !== t ? t : [{
                            name: "English",
                            short: "en"
                        }]),
                        u = i[0],
                        c = i[1],
                        l = (0, s.useState)({
                            name: "English",
                            short: "en"
                        }),
                        f = l[0],
                        p = l[1];
                    (0, s.useEffect)((function() {
                        if (u) {
                            var e = u.find((function(e) {
                                return e.short === n
                            }));
                            p(e)
                        }
                    }), [u]);
                    var m = (0, s.useMemo)((function() {
                        return {
                            locales: u,
                            locale: f,
                            setLocales: c,
                            setLocale: p
                        }
                    }), [u, f]);
                    return (0, o.jsx)(h.Provider, {
                        value: m,
                        children: r
                    })
                };

            function c(e) {
                var t = e.Component,
                    r = e.pageProps;
                return (0, o.jsx)(a.NextIntlProvider, {
                    messages: null === r || void 0 === r ? void 0 : r.messages,
                    children: (0, o.jsx)(u, {
                        children: (0, o.jsx)(t, i({}, r))
                    })
                })
            }
        },
        8794: function() {},
        1163: function(e, t, r) {
            e.exports = r(387)
        },
        833: function(e, t, r) {
            "use strict";

            function n() {
                return n = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, n.apply(this, arguments)
            }

            function i(e) {
                return i = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, i(e)
            }

            function o(e, t) {
                return o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, o(e, t)
            }

            function s() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }

            function a(e, t, r) {
                return a = s() ? Reflect.construct.bind() : function(e, t, r) {
                    var n = [null];
                    n.push.apply(n, t);
                    var i = new(Function.bind.apply(e, n));
                    return r && o(i, r.prototype), i
                }, a.apply(null, arguments)
            }

            function h(e) {
                var t = "function" === typeof Map ? new Map : void 0;
                return h = function(e) {
                    if (null === e || (r = e, -1 === Function.toString.call(r).indexOf("[native code]"))) return e;
                    var r;
                    if ("function" !== typeof e) throw new TypeError("Super expression must either be null or a function");
                    if ("undefined" !== typeof t) {
                        if (t.has(e)) return t.get(e);
                        t.set(e, n)
                    }

                    function n() {
                        return a(e, arguments, i(this).constructor)
                    }
                    return n.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: n,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), o(n, e)
                }, h(e)
            }

            function u(e, t) {
                if (null == e) return {};
                var r, n, i = {},
                    o = Object.keys(e);
                for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                return i
            }
            var c;
            r.r(t), r.d(t, {
                    IntlError: function() {
                        return m
                    },
                    IntlErrorCode: function() {
                        return c
                    },
                    IntlProvider: function() {
                        return st
                    },
                    createFormatter: function() {
                        return et
                    },
                    createIntl: function() {
                        return tt
                    },
                    createTranslator: function() {
                        return Ze
                    },
                    useFormatter: function() {
                        return mt
                    },
                    useIntl: function() {
                        return gt
                    },
                    useLocale: function() {
                        return ut
                    },
                    useMessages: function() {
                        return pt
                    },
                    useNow: function() {
                        return lt
                    },
                    useTimeZone: function() {
                        return ft
                    },
                    useTranslations: function() {
                        return ht
                    }
                }),
                function(e) {
                    e.MISSING_MESSAGE = "MISSING_MESSAGE", e.MISSING_FORMAT = "MISSING_FORMAT", e.ENVIRONMENT_FALLBACK = "ENVIRONMENT_FALLBACK", e.INSUFFICIENT_PATH = "INSUFFICIENT_PATH", e.INVALID_MESSAGE = "INVALID_MESSAGE", e.INVALID_KEY = "INVALID_KEY", e.FORMATTING_ERROR = "FORMATTING_ERROR"
                }(c || (c = {}));
            var l, f, p, m = function(e) {
                    var t, r;

                    function n(t, r) {
                        var n, i = t;
                        return r && (i += ": " + r), (n = e.call(this, i) || this).code = void 0, n.originalMessage = void 0, n.code = t, r && (n.originalMessage = r), n
                    }
                    return r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, o(t, r), n
                }(h(Error)),
                E = r(7582);

            function g(e) {
                return e.type === f.literal
            }

            function b(e) {
                return e.type === f.argument
            }

            function v(e) {
                return e.type === f.number
            }

            function _(e) {
                return e.type === f.date
            }

            function y(e) {
                return e.type === f.time
            }

            function d(e) {
                return e.type === f.select
            }

            function T(e) {
                return e.type === f.plural
            }

            function H(e) {
                return e.type === f.pound
            }

            function A(e) {
                return e.type === f.tag
            }

            function B(e) {
                return !(!e || "object" !== typeof e || e.type !== p.number)
            }

            function S(e) {
                return !(!e || "object" !== typeof e || e.type !== p.dateTime)
            }! function(e) {
                e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
            }(l || (l = {})),
            function(e) {
                e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
            }(f || (f = {})),
            function(e) {
                e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
            }(p || (p = {}));
            var I = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
                N = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

            function P(e) {
                var t = {};
                return e.replace(N, (function(e) {
                    var r = e.length;
                    switch (e[0]) {
                        case "G":
                            t.era = 4 === r ? "long" : 5 === r ? "narrow" : "short";
                            break;
                        case "y":
                            t.year = 2 === r ? "2-digit" : "numeric";
                            break;
                        case "Y":
                        case "u":
                        case "U":
                        case "r":
                            throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
                        case "q":
                        case "Q":
                            throw new RangeError("`q/Q` (quarter) patterns are not supported");
                        case "M":
                        case "L":
                            t.month = ["numeric", "2-digit", "short", "long", "narrow"][r - 1];
                            break;
                        case "w":
                        case "W":
                            throw new RangeError("`w/W` (week) patterns are not supported");
                        case "d":
                            t.day = ["numeric", "2-digit"][r - 1];
                            break;
                        case "D":
                        case "F":
                        case "g":
                            throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
                        case "E":
                            t.weekday = 4 === r ? "short" : 5 === r ? "narrow" : "short";
                            break;
                        case "e":
                            if (r < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
                            t.weekday = ["short", "long", "narrow", "short"][r - 4];
                            break;
                        case "c":
                            if (r < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
                            t.weekday = ["short", "long", "narrow", "short"][r - 4];
                            break;
                        case "a":
                            t.hour12 = !0;
                            break;
                        case "b":
                        case "B":
                            throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
                        case "h":
                            t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][r - 1];
                            break;
                        case "H":
                            t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][r - 1];
                            break;
                        case "K":
                            t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][r - 1];
                            break;
                        case "k":
                            t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][r - 1];
                            break;
                        case "j":
                        case "J":
                        case "C":
                            throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
                        case "m":
                            t.minute = ["numeric", "2-digit"][r - 1];
                            break;
                        case "s":
                            t.second = ["numeric", "2-digit"][r - 1];
                            break;
                        case "S":
                        case "A":
                            throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
                        case "z":
                            t.timeZoneName = r < 4 ? "short" : "long";
                            break;
                        case "Z":
                        case "O":
                        case "v":
                        case "V":
                        case "X":
                        case "x":
                            throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")
                    }
                    return ""
                })), t
            }
            var L = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
            var R = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
                M = /^(@+)?(\+|#+)?[rs]?$/g,
                O = /(\*)(0+)|(#+)(0+)|(0+)/g,
                C = /^(0+)$/;

            function w(e) {
                var t = {};
                return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(M, (function(e, r, n) {
                    return "string" !== typeof n ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === n ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + ("string" === typeof n ? n.length : 0)), ""
                })), t
            }

            function G(e) {
                switch (e) {
                    case "sign-auto":
                        return {
                            signDisplay: "auto"
                        };
                    case "sign-accounting":
                    case "()":
                        return {
                            currencySign: "accounting"
                        };
                    case "sign-always":
                    case "+!":
                        return {
                            signDisplay: "always"
                        };
                    case "sign-accounting-always":
                    case "()!":
                        return {
                            signDisplay: "always",
                            currencySign: "accounting"
                        };
                    case "sign-except-zero":
                    case "+?":
                        return {
                            signDisplay: "exceptZero"
                        };
                    case "sign-accounting-except-zero":
                    case "()?":
                        return {
                            signDisplay: "exceptZero",
                            currencySign: "accounting"
                        };
                    case "sign-never":
                    case "+_":
                        return {
                            signDisplay: "never"
                        }
                }
            }

            function U(e) {
                var t;
                if ("E" === e[0] && "E" === e[1] ? (t = {
                        notation: "engineering"
                    }, e = e.slice(2)) : "E" === e[0] && (t = {
                        notation: "scientific"
                    }, e = e.slice(1)), t) {
                    var r = e.slice(0, 2);
                    if ("+!" === r ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === r && (t.signDisplay = "exceptZero", e = e.slice(2)), !C.test(e)) throw new Error("Malformed concise eng/scientific notation");
                    t.minimumIntegerDigits = e.length
                }
                return t
            }

            function F(e) {
                var t = G(e);
                return t || {}
            }

            function D(e) {
                for (var t = {}, r = 0, n = e; r < n.length; r++) {
                    var i = n[r];
                    switch (i.stem) {
                        case "percent":
                        case "%":
                            t.style = "percent";
                            continue;
                        case "%x100":
                            t.style = "percent", t.scale = 100;
                            continue;
                        case "currency":
                            t.style = "currency", t.currency = i.options[0];
                            continue;
                        case "group-off":
                        case ",_":
                            t.useGrouping = !1;
                            continue;
                        case "precision-integer":
                        case ".":
                            t.maximumFractionDigits = 0;
                            continue;
                        case "measure-unit":
                        case "unit":
                            t.style = "unit", t.unit = i.options[0].replace(/^(.*?)-/, "");
                            continue;
                        case "compact-short":
                        case "K":
                            t.notation = "compact", t.compactDisplay = "short";
                            continue;
                        case "compact-long":
                        case "KK":
                            t.notation = "compact", t.compactDisplay = "long";
                            continue;
                        case "scientific":
                            t = (0, E.__assign)((0, E.__assign)((0, E.__assign)({}, t), {
                                notation: "scientific"
                            }), i.options.reduce((function(e, t) {
                                return (0, E.__assign)((0, E.__assign)({}, e), F(t))
                            }), {}));
                            continue;
                        case "engineering":
                            t = (0, E.__assign)((0, E.__assign)((0, E.__assign)({}, t), {
                                notation: "engineering"
                            }), i.options.reduce((function(e, t) {
                                return (0, E.__assign)((0, E.__assign)({}, e), F(t))
                            }), {}));
                            continue;
                        case "notation-simple":
                            t.notation = "standard";
                            continue;
                        case "unit-width-narrow":
                            t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
                            continue;
                        case "unit-width-short":
                            t.currencyDisplay = "code", t.unitDisplay = "short";
                            continue;
                        case "unit-width-full-name":
                            t.currencyDisplay = "name", t.unitDisplay = "long";
                            continue;
                        case "unit-width-iso-code":
                            t.currencyDisplay = "symbol";
                            continue;
                        case "scale":
                            t.scale = parseFloat(i.options[0]);
                            continue;
                        case "integer-width":
                            if (i.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
                            i.options[0].replace(O, (function(e, r, n, i, o, s) {
                                if (r) t.minimumIntegerDigits = n.length;
                                else {
                                    if (i && o) throw new Error("We currently do not support maximum integer digits");
                                    if (s) throw new Error("We currently do not support exact integer digits")
                                }
                                return ""
                            }));
                            continue
                    }
                    if (C.test(i.stem)) t.minimumIntegerDigits = i.stem.length;
                    else if (R.test(i.stem)) {
                        if (i.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
                        i.stem.replace(R, (function(e, r, n, i, o, s) {
                            return "*" === n ? t.minimumFractionDigits = r.length : i && "#" === i[0] ? t.maximumFractionDigits = i.length : o && s ? (t.minimumFractionDigits = o.length, t.maximumFractionDigits = o.length + s.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), ""
                        }));
                        var o = i.options[0];
                        "w" === o ? t = (0, E.__assign)((0, E.__assign)({}, t), {
                            trailingZeroDisplay: "stripIfInteger"
                        }) : o && (t = (0, E.__assign)((0, E.__assign)({}, t), w(o)))
                    } else if (M.test(i.stem)) t = (0, E.__assign)((0, E.__assign)({}, t), w(i.stem));
                    else {
                        var s = G(i.stem);
                        s && (t = (0, E.__assign)((0, E.__assign)({}, t), s));
                        var a = U(i.stem);
                        a && (t = (0, E.__assign)((0, E.__assign)({}, t), a))
                    }
                }
                return t
            }
            var k, V = {
                AX: ["H"],
                BQ: ["H"],
                CP: ["H"],
                CZ: ["H"],
                DK: ["H"],
                FI: ["H"],
                ID: ["H"],
                IS: ["H"],
                ML: ["H"],
                NE: ["H"],
                RU: ["H"],
                SE: ["H"],
                SJ: ["H"],
                SK: ["H"],
                AS: ["h", "H"],
                BT: ["h", "H"],
                DJ: ["h", "H"],
                ER: ["h", "H"],
                GH: ["h", "H"],
                IN: ["h", "H"],
                LS: ["h", "H"],
                PG: ["h", "H"],
                PW: ["h", "H"],
                SO: ["h", "H"],
                TO: ["h", "H"],
                VU: ["h", "H"],
                WS: ["h", "H"],
                "001": ["H", "h"],
                AL: ["h", "H", "hB"],
                TD: ["h", "H", "hB"],
                "ca-ES": ["H", "h", "hB"],
                CF: ["H", "h", "hB"],
                CM: ["H", "h", "hB"],
                "fr-CA": ["H", "h", "hB"],
                "gl-ES": ["H", "h", "hB"],
                "it-CH": ["H", "h", "hB"],
                "it-IT": ["H", "h", "hB"],
                LU: ["H", "h", "hB"],
                NP: ["H", "h", "hB"],
                PF: ["H", "h", "hB"],
                SC: ["H", "h", "hB"],
                SM: ["H", "h", "hB"],
                SN: ["H", "h", "hB"],
                TF: ["H", "h", "hB"],
                VA: ["H", "h", "hB"],
                CY: ["h", "H", "hb", "hB"],
                GR: ["h", "H", "hb", "hB"],
                CO: ["h", "H", "hB", "hb"],
                DO: ["h", "H", "hB", "hb"],
                KP: ["h", "H", "hB", "hb"],
                KR: ["h", "H", "hB", "hb"],
                NA: ["h", "H", "hB", "hb"],
                PA: ["h", "H", "hB", "hb"],
                PR: ["h", "H", "hB", "hb"],
                VE: ["h", "H", "hB", "hb"],
                AC: ["H", "h", "hb", "hB"],
                AI: ["H", "h", "hb", "hB"],
                BW: ["H", "h", "hb", "hB"],
                BZ: ["H", "h", "hb", "hB"],
                CC: ["H", "h", "hb", "hB"],
                CK: ["H", "h", "hb", "hB"],
                CX: ["H", "h", "hb", "hB"],
                DG: ["H", "h", "hb", "hB"],
                FK: ["H", "h", "hb", "hB"],
                GB: ["H", "h", "hb", "hB"],
                GG: ["H", "h", "hb", "hB"],
                GI: ["H", "h", "hb", "hB"],
                IE: ["H", "h", "hb", "hB"],
                IM: ["H", "h", "hb", "hB"],
                IO: ["H", "h", "hb", "hB"],
                JE: ["H", "h", "hb", "hB"],
                LT: ["H", "h", "hb", "hB"],
                MK: ["H", "h", "hb", "hB"],
                MN: ["H", "h", "hb", "hB"],
                MS: ["H", "h", "hb", "hB"],
                NF: ["H", "h", "hb", "hB"],
                NG: ["H", "h", "hb", "hB"],
                NR: ["H", "h", "hb", "hB"],
                NU: ["H", "h", "hb", "hB"],
                PN: ["H", "h", "hb", "hB"],
                SH: ["H", "h", "hb", "hB"],
                SX: ["H", "h", "hb", "hB"],
                TA: ["H", "h", "hb", "hB"],
                ZA: ["H", "h", "hb", "hB"],
                "af-ZA": ["H", "h", "hB", "hb"],
                AR: ["H", "h", "hB", "hb"],
                CL: ["H", "h", "hB", "hb"],
                CR: ["H", "h", "hB", "hb"],
                CU: ["H", "h", "hB", "hb"],
                EA: ["H", "h", "hB", "hb"],
                "es-BO": ["H", "h", "hB", "hb"],
                "es-BR": ["H", "h", "hB", "hb"],
                "es-EC": ["H", "h", "hB", "hb"],
                "es-ES": ["H", "h", "hB", "hb"],
                "es-GQ": ["H", "h", "hB", "hb"],
                "es-PE": ["H", "h", "hB", "hb"],
                GT: ["H", "h", "hB", "hb"],
                HN: ["H", "h", "hB", "hb"],
                IC: ["H", "h", "hB", "hb"],
                KG: ["H", "h", "hB", "hb"],
                KM: ["H", "h", "hB", "hb"],
                LK: ["H", "h", "hB", "hb"],
                MA: ["H", "h", "hB", "hb"],
                MX: ["H", "h", "hB", "hb"],
                NI: ["H", "h", "hB", "hb"],
                PY: ["H", "h", "hB", "hb"],
                SV: ["H", "h", "hB", "hb"],
                UY: ["H", "h", "hB", "hb"],
                JP: ["H", "h", "K"],
                AD: ["H", "hB"],
                AM: ["H", "hB"],
                AO: ["H", "hB"],
                AT: ["H", "hB"],
                AW: ["H", "hB"],
                BE: ["H", "hB"],
                BF: ["H", "hB"],
                BJ: ["H", "hB"],
                BL: ["H", "hB"],
                BR: ["H", "hB"],
                CG: ["H", "hB"],
                CI: ["H", "hB"],
                CV: ["H", "hB"],
                DE: ["H", "hB"],
                EE: ["H", "hB"],
                FR: ["H", "hB"],
                GA: ["H", "hB"],
                GF: ["H", "hB"],
                GN: ["H", "hB"],
                GP: ["H", "hB"],
                GW: ["H", "hB"],
                HR: ["H", "hB"],
                IL: ["H", "hB"],
                IT: ["H", "hB"],
                KZ: ["H", "hB"],
                MC: ["H", "hB"],
                MD: ["H", "hB"],
                MF: ["H", "hB"],
                MQ: ["H", "hB"],
                MZ: ["H", "hB"],
                NC: ["H", "hB"],
                NL: ["H", "hB"],
                PM: ["H", "hB"],
                PT: ["H", "hB"],
                RE: ["H", "hB"],
                RO: ["H", "hB"],
                SI: ["H", "hB"],
                SR: ["H", "hB"],
                ST: ["H", "hB"],
                TG: ["H", "hB"],
                TR: ["H", "hB"],
                WF: ["H", "hB"],
                YT: ["H", "hB"],
                BD: ["h", "hB", "H"],
                PK: ["h", "hB", "H"],
                AZ: ["H", "hB", "h"],
                BA: ["H", "hB", "h"],
                BG: ["H", "hB", "h"],
                CH: ["H", "hB", "h"],
                GE: ["H", "hB", "h"],
                LI: ["H", "hB", "h"],
                ME: ["H", "hB", "h"],
                RS: ["H", "hB", "h"],
                UA: ["H", "hB", "h"],
                UZ: ["H", "hB", "h"],
                XK: ["H", "hB", "h"],
                AG: ["h", "hb", "H", "hB"],
                AU: ["h", "hb", "H", "hB"],
                BB: ["h", "hb", "H", "hB"],
                BM: ["h", "hb", "H", "hB"],
                BS: ["h", "hb", "H", "hB"],
                CA: ["h", "hb", "H", "hB"],
                DM: ["h", "hb", "H", "hB"],
                "en-001": ["h", "hb", "H", "hB"],
                FJ: ["h", "hb", "H", "hB"],
                FM: ["h", "hb", "H", "hB"],
                GD: ["h", "hb", "H", "hB"],
                GM: ["h", "hb", "H", "hB"],
                GU: ["h", "hb", "H", "hB"],
                GY: ["h", "hb", "H", "hB"],
                JM: ["h", "hb", "H", "hB"],
                KI: ["h", "hb", "H", "hB"],
                KN: ["h", "hb", "H", "hB"],
                KY: ["h", "hb", "H", "hB"],
                LC: ["h", "hb", "H", "hB"],
                LR: ["h", "hb", "H", "hB"],
                MH: ["h", "hb", "H", "hB"],
                MP: ["h", "hb", "H", "hB"],
                MW: ["h", "hb", "H", "hB"],
                NZ: ["h", "hb", "H", "hB"],
                SB: ["h", "hb", "H", "hB"],
                SG: ["h", "hb", "H", "hB"],
                SL: ["h", "hb", "H", "hB"],
                SS: ["h", "hb", "H", "hB"],
                SZ: ["h", "hb", "H", "hB"],
                TC: ["h", "hb", "H", "hB"],
                TT: ["h", "hb", "H", "hB"],
                UM: ["h", "hb", "H", "hB"],
                US: ["h", "hb", "H", "hB"],
                VC: ["h", "hb", "H", "hB"],
                VG: ["h", "hb", "H", "hB"],
                VI: ["h", "hb", "H", "hB"],
                ZM: ["h", "hb", "H", "hB"],
                BO: ["H", "hB", "h", "hb"],
                EC: ["H", "hB", "h", "hb"],
                ES: ["H", "hB", "h", "hb"],
                GQ: ["H", "hB", "h", "hb"],
                PE: ["H", "hB", "h", "hb"],
                AE: ["h", "hB", "hb", "H"],
                "ar-001": ["h", "hB", "hb", "H"],
                BH: ["h", "hB", "hb", "H"],
                DZ: ["h", "hB", "hb", "H"],
                EG: ["h", "hB", "hb", "H"],
                EH: ["h", "hB", "hb", "H"],
                HK: ["h", "hB", "hb", "H"],
                IQ: ["h", "hB", "hb", "H"],
                JO: ["h", "hB", "hb", "H"],
                KW: ["h", "hB", "hb", "H"],
                LB: ["h", "hB", "hb", "H"],
                LY: ["h", "hB", "hb", "H"],
                MO: ["h", "hB", "hb", "H"],
                MR: ["h", "hB", "hb", "H"],
                OM: ["h", "hB", "hb", "H"],
                PH: ["h", "hB", "hb", "H"],
                PS: ["h", "hB", "hb", "H"],
                QA: ["h", "hB", "hb", "H"],
                SA: ["h", "hB", "hb", "H"],
                SD: ["h", "hB", "hb", "H"],
                SY: ["h", "hB", "hb", "H"],
                TN: ["h", "hB", "hb", "H"],
                YE: ["h", "hB", "hb", "H"],
                AF: ["H", "hb", "hB", "h"],
                LA: ["H", "hb", "hB", "h"],
                CN: ["H", "hB", "hb", "h"],
                LV: ["H", "hB", "hb", "h"],
                TL: ["H", "hB", "hb", "h"],
                "zu-ZA": ["H", "hB", "hb", "h"],
                CD: ["hB", "H"],
                IR: ["hB", "H"],
                "hi-IN": ["hB", "h", "H"],
                "kn-IN": ["hB", "h", "H"],
                "ml-IN": ["hB", "h", "H"],
                "te-IN": ["hB", "h", "H"],
                KH: ["hB", "h", "H", "hb"],
                "ta-IN": ["hB", "h", "hb", "H"],
                BN: ["hb", "hB", "h", "H"],
                MY: ["hb", "hB", "h", "H"],
                ET: ["hB", "hb", "h", "H"],
                "gu-IN": ["hB", "hb", "h", "H"],
                "mr-IN": ["hB", "hb", "h", "H"],
                "pa-IN": ["hB", "hb", "h", "H"],
                TW: ["hB", "hb", "h", "H"],
                KE: ["hB", "hb", "H", "h"],
                MM: ["hB", "hb", "H", "h"],
                TZ: ["hB", "hb", "H", "h"],
                UG: ["hB", "hb", "H", "h"]
            };

            function j(e) {
                var t = e.hourCycle;
                if (void 0 === t && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
                    case "h24":
                        return "k";
                    case "h23":
                        return "H";
                    case "h12":
                        return "h";
                    case "h11":
                        return "K";
                    default:
                        throw new Error("Invalid hourCycle")
                }
                var r, n = e.language;
                return "root" !== n && (r = e.maximize().region), (V[r || ""] || V[n || ""] || V["".concat(n, "-001")] || V["001"])[0]
            }
            var x = new RegExp("^".concat(I.source, "*")),
                X = new RegExp("".concat(I.source, "*$"));

            function K(e, t) {
                return {
                    start: e,
                    end: t
                }
            }
            var Z = !!String.prototype.startsWith,
                Y = !!String.fromCodePoint,
                W = !!Object.fromEntries,
                z = !!String.prototype.codePointAt,
                Q = !!String.prototype.trimStart,
                q = !!String.prototype.trimEnd,
                J = !!Number.isSafeInteger ? Number.isSafeInteger : function(e) {
                    return "number" === typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
                },
                $ = !0;
            try {
                $ = "a" === (null === (k = ae("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === k ? void 0 : k[0])
            } catch (bt) {
                $ = !1
            }
            var ee, te = Z ? function(e, t, r) {
                    return e.startsWith(t, r)
                } : function(e, t, r) {
                    return e.slice(r, r + t.length) === t
                },
                re = Y ? String.fromCodePoint : function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    for (var r, n = "", i = e.length, o = 0; i > o;) {
                        if ((r = e[o++]) > 1114111) throw RangeError(r + " is not a valid code point");
                        n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
                    }
                    return n
                },
                ne = W ? Object.fromEntries : function(e) {
                    for (var t = {}, r = 0, n = e; r < n.length; r++) {
                        var i = n[r],
                            o = i[0],
                            s = i[1];
                        t[o] = s
                    }
                    return t
                },
                ie = z ? function(e, t) {
                    return e.codePointAt(t)
                } : function(e, t) {
                    var r = e.length;
                    if (!(t < 0 || t >= r)) {
                        var n, i = e.charCodeAt(t);
                        return i < 55296 || i > 56319 || t + 1 === r || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? i : n - 56320 + (i - 55296 << 10) + 65536
                    }
                },
                oe = Q ? function(e) {
                    return e.trimStart()
                } : function(e) {
                    return e.replace(x, "")
                },
                se = q ? function(e) {
                    return e.trimEnd()
                } : function(e) {
                    return e.replace(X, "")
                };

            function ae(e, t) {
                return new RegExp(e, t)
            }
            if ($) {
                var he = ae("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
                ee = function(e, t) {
                    var r;
                    return he.lastIndex = t, null !== (r = he.exec(e)[1]) && void 0 !== r ? r : ""
                }
            } else ee = function(e, t) {
                for (var r = [];;) {
                    var n = ie(e, t);
                    if (void 0 === n || le(n) || fe(n)) break;
                    r.push(n), t += n >= 65536 ? 2 : 1
                }
                return re.apply(void 0, r)
            };
            var ue = function() {
                function e(e, t) {
                    void 0 === t && (t = {}), this.message = e, this.position = {
                        offset: 0,
                        line: 1,
                        column: 1
                    }, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons
                }
                return e.prototype.parse = function() {
                    if (0 !== this.offset()) throw Error("parser can only be used once");
                    return this.parseMessage(0, "", !1)
                }, e.prototype.parseMessage = function(e, t, r) {
                    for (var n = []; !this.isEOF();) {
                        var i = this.char();
                        if (123 === i) {
                            if ((o = this.parseArgument(e, r)).err) return o;
                            n.push(o.val)
                        } else {
                            if (125 === i && e > 0) break;
                            if (35 !== i || "plural" !== t && "selectordinal" !== t) {
                                if (60 === i && !this.ignoreTag && 47 === this.peek()) {
                                    if (r) break;
                                    return this.error(l.UNMATCHED_CLOSING_TAG, K(this.clonePosition(), this.clonePosition()))
                                }
                                if (60 === i && !this.ignoreTag && ce(this.peek() || 0)) {
                                    if ((o = this.parseTag(e, t)).err) return o;
                                    n.push(o.val)
                                } else {
                                    var o;
                                    if ((o = this.parseLiteral(e, t)).err) return o;
                                    n.push(o.val)
                                }
                            } else {
                                var s = this.clonePosition();
                                this.bump(), n.push({
                                    type: f.pound,
                                    location: K(s, this.clonePosition())
                                })
                            }
                        }
                    }
                    return {
                        val: n,
                        err: null
                    }
                }, e.prototype.parseTag = function(e, t) {
                    var r = this.clonePosition();
                    this.bump();
                    var n = this.parseTagName();
                    if (this.bumpSpace(), this.bumpIf("/>")) return {
                        val: {
                            type: f.literal,
                            value: "<".concat(n, "/>"),
                            location: K(r, this.clonePosition())
                        },
                        err: null
                    };
                    if (this.bumpIf(">")) {
                        var i = this.parseMessage(e + 1, t, !0);
                        if (i.err) return i;
                        var o = i.val,
                            s = this.clonePosition();
                        if (this.bumpIf("</")) {
                            if (this.isEOF() || !ce(this.char())) return this.error(l.INVALID_TAG, K(s, this.clonePosition()));
                            var a = this.clonePosition();
                            return n !== this.parseTagName() ? this.error(l.UNMATCHED_CLOSING_TAG, K(a, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                                val: {
                                    type: f.tag,
                                    value: n,
                                    children: o,
                                    location: K(r, this.clonePosition())
                                },
                                err: null
                            } : this.error(l.INVALID_TAG, K(s, this.clonePosition())))
                        }
                        return this.error(l.UNCLOSED_TAG, K(r, this.clonePosition()))
                    }
                    return this.error(l.INVALID_TAG, K(r, this.clonePosition()))
                }, e.prototype.parseTagName = function() {
                    var e, t = this.offset();
                    for (this.bump(); !this.isEOF() && (45 === (e = this.char()) || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039);) this.bump();
                    return this.message.slice(t, this.offset())
                }, e.prototype.parseLiteral = function(e, t) {
                    for (var r = this.clonePosition(), n = "";;) {
                        var i = this.tryParseQuote(t);
                        if (i) n += i;
                        else {
                            var o = this.tryParseUnquoted(e, t);
                            if (o) n += o;
                            else {
                                var s = this.tryParseLeftAngleBracket();
                                if (!s) break;
                                n += s
                            }
                        }
                    }
                    var a = K(r, this.clonePosition());
                    return {
                        val: {
                            type: f.literal,
                            value: n,
                            location: a
                        },
                        err: null
                    }
                }, e.prototype.tryParseLeftAngleBracket = function() {
                    return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (ce(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
                    var e
                }, e.prototype.tryParseQuote = function(e) {
                    if (this.isEOF() || 39 !== this.char()) return null;
                    switch (this.peek()) {
                        case 39:
                            return this.bump(), this.bump(), "'";
                        case 123:
                        case 60:
                        case 62:
                        case 125:
                            break;
                        case 35:
                            if ("plural" === e || "selectordinal" === e) break;
                            return null;
                        default:
                            return null
                    }
                    this.bump();
                    var t = [this.char()];
                    for (this.bump(); !this.isEOF();) {
                        var r = this.char();
                        if (39 === r) {
                            if (39 !== this.peek()) {
                                this.bump();
                                break
                            }
                            t.push(39), this.bump()
                        } else t.push(r);
                        this.bump()
                    }
                    return re.apply(void 0, t)
                }, e.prototype.tryParseUnquoted = function(e, t) {
                    if (this.isEOF()) return null;
                    var r = this.char();
                    return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), re(r))
                }, e.prototype.parseArgument = function(e, t) {
                    var r = this.clonePosition();
                    if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(l.EXPECT_ARGUMENT_CLOSING_BRACE, K(r, this.clonePosition()));
                    if (125 === this.char()) return this.bump(), this.error(l.EMPTY_ARGUMENT, K(r, this.clonePosition()));
                    var n = this.parseIdentifierIfPossible().value;
                    if (!n) return this.error(l.MALFORMED_ARGUMENT, K(r, this.clonePosition()));
                    if (this.bumpSpace(), this.isEOF()) return this.error(l.EXPECT_ARGUMENT_CLOSING_BRACE, K(r, this.clonePosition()));
                    switch (this.char()) {
                        case 125:
                            return this.bump(), {
                                val: {
                                    type: f.argument,
                                    value: n,
                                    location: K(r, this.clonePosition())
                                },
                                err: null
                            };
                        case 44:
                            return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(l.EXPECT_ARGUMENT_CLOSING_BRACE, K(r, this.clonePosition())) : this.parseArgumentOptions(e, t, n, r);
                        default:
                            return this.error(l.MALFORMED_ARGUMENT, K(r, this.clonePosition()))
                    }
                }, e.prototype.parseIdentifierIfPossible = function() {
                    var e = this.clonePosition(),
                        t = this.offset(),
                        r = ee(this.message, t),
                        n = t + r.length;
                    return this.bumpTo(n), {
                        value: r,
                        location: K(e, this.clonePosition())
                    }
                }, e.prototype.parseArgumentOptions = function(e, t, r, n) {
                    var i, o = this.clonePosition(),
                        s = this.parseIdentifierIfPossible().value,
                        a = this.clonePosition();
                    switch (s) {
                        case "":
                            return this.error(l.EXPECT_ARGUMENT_TYPE, K(o, a));
                        case "number":
                        case "date":
                        case "time":
                            this.bumpSpace();
                            var h = null;
                            if (this.bumpIf(",")) {
                                this.bumpSpace();
                                var u = this.clonePosition();
                                if ((d = this.parseSimpleArgStyleIfPossible()).err) return d;
                                if (0 === (b = se(d.val)).length) return this.error(l.EXPECT_ARGUMENT_STYLE, K(this.clonePosition(), this.clonePosition()));
                                h = {
                                    style: b,
                                    styleLocation: K(u, this.clonePosition())
                                }
                            }
                            if ((T = this.tryParseArgumentClose(n)).err) return T;
                            var c = K(n, this.clonePosition());
                            if (h && te(null === h || void 0 === h ? void 0 : h.style, "::", 0)) {
                                var m = oe(h.style.slice(2));
                                if ("number" === s) return (d = this.parseNumberSkeletonFromString(m, h.styleLocation)).err ? d : {
                                    val: {
                                        type: f.number,
                                        value: r,
                                        location: c,
                                        style: d.val
                                    },
                                    err: null
                                };
                                if (0 === m.length) return this.error(l.EXPECT_DATE_TIME_SKELETON, c);
                                var g = m;
                                this.locale && (g = function(e, t) {
                                    for (var r = "", n = 0; n < e.length; n++) {
                                        var i = e.charAt(n);
                                        if ("j" === i) {
                                            for (var o = 0; n + 1 < e.length && e.charAt(n + 1) === i;) o++, n++;
                                            var s = 1 + (1 & o),
                                                a = o < 2 ? 1 : 3 + (o >> 1),
                                                h = j(t);
                                            for ("H" != h && "k" != h || (a = 0); a-- > 0;) r += "a";
                                            for (; s-- > 0;) r = h + r
                                        } else r += "J" === i ? "H" : i
                                    }
                                    return r
                                }(m, this.locale));
                                var b = {
                                    type: p.dateTime,
                                    pattern: g,
                                    location: h.styleLocation,
                                    parsedOptions: this.shouldParseSkeletons ? P(g) : {}
                                };
                                return {
                                    val: {
                                        type: "date" === s ? f.date : f.time,
                                        value: r,
                                        location: c,
                                        style: b
                                    },
                                    err: null
                                }
                            }
                            return {
                                val: {
                                    type: "number" === s ? f.number : "date" === s ? f.date : f.time,
                                    value: r,
                                    location: c,
                                    style: null !== (i = null === h || void 0 === h ? void 0 : h.style) && void 0 !== i ? i : null
                                },
                                err: null
                            };
                        case "plural":
                        case "selectordinal":
                        case "select":
                            var v = this.clonePosition();
                            if (this.bumpSpace(), !this.bumpIf(",")) return this.error(l.EXPECT_SELECT_ARGUMENT_OPTIONS, K(v, (0, E.__assign)({}, v)));
                            this.bumpSpace();
                            var _ = this.parseIdentifierIfPossible(),
                                y = 0;
                            if ("select" !== s && "offset" === _.value) {
                                if (!this.bumpIf(":")) return this.error(l.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, K(this.clonePosition(), this.clonePosition()));
                                var d;
                                if (this.bumpSpace(), (d = this.tryParseDecimalInteger(l.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, l.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return d;
                                this.bumpSpace(), _ = this.parseIdentifierIfPossible(), y = d.val
                            }
                            var T, H = this.tryParsePluralOrSelectOptions(e, s, t, _);
                            if (H.err) return H;
                            if ((T = this.tryParseArgumentClose(n)).err) return T;
                            var A = K(n, this.clonePosition());
                            return "select" === s ? {
                                val: {
                                    type: f.select,
                                    value: r,
                                    options: ne(H.val),
                                    location: A
                                },
                                err: null
                            } : {
                                val: {
                                    type: f.plural,
                                    value: r,
                                    options: ne(H.val),
                                    offset: y,
                                    pluralType: "plural" === s ? "cardinal" : "ordinal",
                                    location: A
                                },
                                err: null
                            };
                        default:
                            return this.error(l.INVALID_ARGUMENT_TYPE, K(o, a))
                    }
                }, e.prototype.tryParseArgumentClose = function(e) {
                    return this.isEOF() || 125 !== this.char() ? this.error(l.EXPECT_ARGUMENT_CLOSING_BRACE, K(e, this.clonePosition())) : (this.bump(), {
                        val: !0,
                        err: null
                    })
                }, e.prototype.parseSimpleArgStyleIfPossible = function() {
                    for (var e = 0, t = this.clonePosition(); !this.isEOF();) {
                        switch (this.char()) {
                            case 39:
                                this.bump();
                                var r = this.clonePosition();
                                if (!this.bumpUntil("'")) return this.error(l.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, K(r, this.clonePosition()));
                                this.bump();
                                break;
                            case 123:
                                e += 1, this.bump();
                                break;
                            case 125:
                                if (!(e > 0)) return {
                                    val: this.message.slice(t.offset, this.offset()),
                                    err: null
                                };
                                e -= 1;
                                break;
                            default:
                                this.bump()
                        }
                    }
                    return {
                        val: this.message.slice(t.offset, this.offset()),
                        err: null
                    }
                }, e.prototype.parseNumberSkeletonFromString = function(e, t) {
                    var r = [];
                    try {
                        r = function(e) {
                            if (0 === e.length) throw new Error("Number skeleton cannot be empty");
                            for (var t = [], r = 0, n = e.split(L).filter((function(e) {
                                    return e.length > 0
                                })); r < n.length; r++) {
                                var i = n[r].split("/");
                                if (0 === i.length) throw new Error("Invalid number skeleton");
                                for (var o = i[0], s = i.slice(1), a = 0, h = s; a < h.length; a++)
                                    if (0 === h[a].length) throw new Error("Invalid number skeleton");
                                t.push({
                                    stem: o,
                                    options: s
                                })
                            }
                            return t
                        }(e)
                    } catch (n) {
                        return this.error(l.INVALID_NUMBER_SKELETON, t)
                    }
                    return {
                        val: {
                            type: p.number,
                            tokens: r,
                            location: t,
                            parsedOptions: this.shouldParseSkeletons ? D(r) : {}
                        },
                        err: null
                    }
                }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, n) {
                    for (var i, o = !1, s = [], a = new Set, h = n.value, u = n.location;;) {
                        if (0 === h.length) {
                            var c = this.clonePosition();
                            if ("select" === t || !this.bumpIf("=")) break;
                            var f = this.tryParseDecimalInteger(l.EXPECT_PLURAL_ARGUMENT_SELECTOR, l.INVALID_PLURAL_ARGUMENT_SELECTOR);
                            if (f.err) return f;
                            u = K(c, this.clonePosition()), h = this.message.slice(c.offset, this.offset())
                        }
                        if (a.has(h)) return this.error("select" === t ? l.DUPLICATE_SELECT_ARGUMENT_SELECTOR : l.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, u);
                        "other" === h && (o = !0), this.bumpSpace();
                        var p = this.clonePosition();
                        if (!this.bumpIf("{")) return this.error("select" === t ? l.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : l.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, K(this.clonePosition(), this.clonePosition()));
                        var m = this.parseMessage(e + 1, t, r);
                        if (m.err) return m;
                        var E = this.tryParseArgumentClose(p);
                        if (E.err) return E;
                        s.push([h, {
                            value: m.val,
                            location: K(p, this.clonePosition())
                        }]), a.add(h), this.bumpSpace(), h = (i = this.parseIdentifierIfPossible()).value, u = i.location
                    }
                    return 0 === s.length ? this.error("select" === t ? l.EXPECT_SELECT_ARGUMENT_SELECTOR : l.EXPECT_PLURAL_ARGUMENT_SELECTOR, K(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(l.MISSING_OTHER_CLAUSE, K(this.clonePosition(), this.clonePosition())) : {
                        val: s,
                        err: null
                    }
                }, e.prototype.tryParseDecimalInteger = function(e, t) {
                    var r = 1,
                        n = this.clonePosition();
                    this.bumpIf("+") || this.bumpIf("-") && (r = -1);
                    for (var i = !1, o = 0; !this.isEOF();) {
                        var s = this.char();
                        if (!(s >= 48 && s <= 57)) break;
                        i = !0, o = 10 * o + (s - 48), this.bump()
                    }
                    var a = K(n, this.clonePosition());
                    return i ? J(o *= r) ? {
                        val: o,
                        err: null
                    } : this.error(t, a) : this.error(e, a)
                }, e.prototype.offset = function() {
                    return this.position.offset
                }, e.prototype.isEOF = function() {
                    return this.offset() === this.message.length
                }, e.prototype.clonePosition = function() {
                    return {
                        offset: this.position.offset,
                        line: this.position.line,
                        column: this.position.column
                    }
                }, e.prototype.char = function() {
                    var e = this.position.offset;
                    if (e >= this.message.length) throw Error("out of bound");
                    var t = ie(this.message, e);
                    if (void 0 === t) throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
                    return t
                }, e.prototype.error = function(e, t) {
                    return {
                        val: null,
                        err: {
                            kind: e,
                            message: this.message,
                            location: t
                        }
                    }
                }, e.prototype.bump = function() {
                    if (!this.isEOF()) {
                        var e = this.char();
                        10 === e ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2)
                    }
                }, e.prototype.bumpIf = function(e) {
                    if (te(this.message, e, this.offset())) {
                        for (var t = 0; t < e.length; t++) this.bump();
                        return !0
                    }
                    return !1
                }, e.prototype.bumpUntil = function(e) {
                    var t = this.offset(),
                        r = this.message.indexOf(e, t);
                    return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1)
                }, e.prototype.bumpTo = function(e) {
                    if (this.offset() > e) throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
                    for (e = Math.min(e, this.message.length);;) {
                        var t = this.offset();
                        if (t === e) break;
                        if (t > e) throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
                        if (this.bump(), this.isEOF()) break
                    }
                }, e.prototype.bumpSpace = function() {
                    for (; !this.isEOF() && le(this.char());) this.bump()
                }, e.prototype.peek = function() {
                    if (this.isEOF()) return null;
                    var e = this.char(),
                        t = this.offset(),
                        r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
                    return null !== r && void 0 !== r ? r : null
                }, e
            }();

            function ce(e) {
                return e >= 97 && e <= 122 || e >= 65 && e <= 90
            }

            function le(e) {
                return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
            }

            function fe(e) {
                return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
            }

            function pe(e) {
                e.forEach((function(e) {
                    if (delete e.location, d(e) || T(e))
                        for (var t in e.options) delete e.options[t].location, pe(e.options[t].value);
                    else v(e) && B(e.style) || (_(e) || y(e)) && S(e.style) ? delete e.style.location : A(e) && pe(e.children)
                }))
            }

            function me(e, t) {
                void 0 === t && (t = {}), t = (0, E.__assign)({
                    shouldParseSkeletons: !0,
                    requiresOtherClause: !0
                }, t);
                var r = new ue(e, t).parse();
                if (r.err) {
                    var n = SyntaxError(l[r.err.kind]);
                    throw n.location = r.err.location, n.originalMessage = r.err.message, n
                }
                return (null === t || void 0 === t ? void 0 : t.captureLocation) || pe(r.val), r.val
            }

            function Ee(e, t) {
                var r = t && t.cache ? t.cache : He,
                    n = t && t.serializer ? t.serializer : ye;
                return (t && t.strategy ? t.strategy : _e)(e, {
                    cache: r,
                    serializer: n
                })
            }

            function ge(e, t, r, n) {
                var i, o = null == (i = n) || "number" === typeof i || "boolean" === typeof i ? n : r(n),
                    s = t.get(o);
                return "undefined" === typeof s && (s = e.call(this, n), t.set(o, s)), s
            }

            function be(e, t, r) {
                var n = Array.prototype.slice.call(arguments, 3),
                    i = r(n),
                    o = t.get(i);
                return "undefined" === typeof o && (o = e.apply(this, n), t.set(i, o)), o
            }

            function ve(e, t, r, n, i) {
                return r.bind(t, e, n, i)
            }

            function _e(e, t) {
                return ve(e, this, 1 === e.length ? ge : be, t.cache.create(), t.serializer)
            }
            var ye = function() {
                return JSON.stringify(arguments)
            };

            function de() {
                this.cache = Object.create(null)
            }
            de.prototype.get = function(e) {
                return this.cache[e]
            }, de.prototype.set = function(e, t) {
                this.cache[e] = t
            };
            var Te, He = {
                    create: function() {
                        return new de
                    }
                },
                Ae = {
                    variadic: function(e, t) {
                        return ve(e, this, be, t.cache.create(), t.serializer)
                    },
                    monadic: function(e, t) {
                        return ve(e, this, ge, t.cache.create(), t.serializer)
                    }
                };
            ! function(e) {
                e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API"
            }(Te || (Te = {}));
            var Be, Se = function(e) {
                    function t(t, r, n) {
                        var i = e.call(this, t) || this;
                        return i.code = r, i.originalMessage = n, i
                    }
                    return (0, E.__extends)(t, e), t.prototype.toString = function() {
                        return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
                    }, t
                }(Error),
                Ie = function(e) {
                    function t(t, r, n, i) {
                        return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(r, '". Options are "').concat(Object.keys(n).join('", "'), '"'), Te.INVALID_VALUE, i) || this
                    }
                    return (0, E.__extends)(t, e), t
                }(Se),
                Ne = function(e) {
                    function t(t, r, n) {
                        return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(r), Te.INVALID_VALUE, n) || this
                    }
                    return (0, E.__extends)(t, e), t
                }(Se),
                Pe = function(e) {
                    function t(t, r) {
                        return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(r, '"'), Te.MISSING_VALUE, r) || this
                    }
                    return (0, E.__extends)(t, e), t
                }(Se);

            function Le(e) {
                return "function" === typeof e
            }

            function Re(e, t, r, n, i, o, s) {
                if (1 === e.length && g(e[0])) return [{
                    type: Be.literal,
                    value: e[0].value
                }];
                for (var a = [], h = 0, u = e; h < u.length; h++) {
                    var c = u[h];
                    if (g(c)) a.push({
                        type: Be.literal,
                        value: c.value
                    });
                    else if (H(c)) "number" === typeof o && a.push({
                        type: Be.literal,
                        value: r.getNumberFormat(t).format(o)
                    });
                    else {
                        var l = c.value;
                        if (!i || !(l in i)) throw new Pe(l, s);
                        var f = i[l];
                        if (b(c)) f && "string" !== typeof f && "number" !== typeof f || (f = "string" === typeof f || "number" === typeof f ? String(f) : ""), a.push({
                            type: "string" === typeof f ? Be.literal : Be.object,
                            value: f
                        });
                        else if (_(c)) {
                            var p = "string" === typeof c.style ? n.date[c.style] : S(c.style) ? c.style.parsedOptions : void 0;
                            a.push({
                                type: Be.literal,
                                value: r.getDateTimeFormat(t, p).format(f)
                            })
                        } else if (y(c)) {
                            p = "string" === typeof c.style ? n.time[c.style] : S(c.style) ? c.style.parsedOptions : n.time.medium;
                            a.push({
                                type: Be.literal,
                                value: r.getDateTimeFormat(t, p).format(f)
                            })
                        } else if (v(c)) {
                            (p = "string" === typeof c.style ? n.number[c.style] : B(c.style) ? c.style.parsedOptions : void 0) && p.scale && (f *= p.scale || 1), a.push({
                                type: Be.literal,
                                value: r.getNumberFormat(t, p).format(f)
                            })
                        } else {
                            if (A(c)) {
                                var m = c.children,
                                    E = c.value,
                                    I = i[E];
                                if (!Le(I)) throw new Ne(E, "function", s);
                                var N = I(Re(m, t, r, n, i, o).map((function(e) {
                                    return e.value
                                })));
                                Array.isArray(N) || (N = [N]), a.push.apply(a, N.map((function(e) {
                                    return {
                                        type: "string" === typeof e ? Be.literal : Be.object,
                                        value: e
                                    }
                                })))
                            }
                            if (d(c)) {
                                if (!(P = c.options[f] || c.options.other)) throw new Ie(c.value, f, Object.keys(c.options), s);
                                a.push.apply(a, Re(P.value, t, r, n, i))
                            } else if (T(c)) {
                                var P;
                                if (!(P = c.options["=".concat(f)])) {
                                    if (!Intl.PluralRules) throw new Se('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', Te.MISSING_INTL_API, s);
                                    var L = r.getPluralRules(t, {
                                        type: c.pluralType
                                    }).select(f - (c.offset || 0));
                                    P = c.options[L] || c.options.other
                                }
                                if (!P) throw new Ie(c.value, f, Object.keys(c.options), s);
                                a.push.apply(a, Re(P.value, t, r, n, i, f - (c.offset || 0)))
                            } else;
                        }
                    }
                }
                return function(e) {
                    return e.length < 2 ? e : e.reduce((function(e, t) {
                        var r = e[e.length - 1];
                        return r && r.type === Be.literal && t.type === Be.literal ? r.value += t.value : e.push(t), e
                    }), [])
                }(a)
            }

            function Me(e, t) {
                return t ? Object.keys(e).reduce((function(r, n) {
                    var i, o;
                    return r[n] = (i = e[n], (o = t[n]) ? (0, E.__assign)((0, E.__assign)((0, E.__assign)({}, i || {}), o || {}), Object.keys(i).reduce((function(e, t) {
                        return e[t] = (0, E.__assign)((0, E.__assign)({}, i[t]), o[t] || {}), e
                    }), {})) : i), r
                }), (0, E.__assign)({}, e)) : e
            }

            function Oe(e) {
                return {
                    create: function() {
                        return {
                            get: function(t) {
                                return e[t]
                            },
                            set: function(t, r) {
                                e[t] = r
                            }
                        }
                    }
                }
            }! function(e) {
                e[e.literal = 0] = "literal", e[e.object = 1] = "object"
            }(Be || (Be = {}));
            var Ce = function() {
                    function e(t, r, n, i) {
                        var o, s = this;
                        if (void 0 === r && (r = e.defaultLocale), this.formatterCache = {
                                number: {},
                                dateTime: {},
                                pluralRules: {}
                            }, this.format = function(e) {
                                var t = s.formatToParts(e);
                                if (1 === t.length) return t[0].value;
                                var r = t.reduce((function(e, t) {
                                    return e.length && t.type === Be.literal && "string" === typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
                                }), []);
                                return r.length <= 1 ? r[0] || "" : r
                            }, this.formatToParts = function(e) {
                                return Re(s.ast, s.locales, s.formatters, s.formats, e, void 0, s.message)
                            }, this.resolvedOptions = function() {
                                return {
                                    locale: s.resolvedLocale.toString()
                                }
                            }, this.getAst = function() {
                                return s.ast
                            }, this.locales = r, this.resolvedLocale = e.resolveLocale(r), "string" === typeof t) {
                            if (this.message = t, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
                            this.ast = e.__parse(t, {
                                ignoreTag: null === i || void 0 === i ? void 0 : i.ignoreTag,
                                locale: this.resolvedLocale
                            })
                        } else this.ast = t;
                        if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
                        this.formats = Me(e.formats, n), this.formatters = i && i.formatters || (void 0 === (o = this.formatterCache) && (o = {
                            number: {},
                            dateTime: {},
                            pluralRules: {}
                        }), {
                            getNumberFormat: Ee((function() {
                                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                return new((e = Intl.NumberFormat).bind.apply(e, (0, E.__spreadArray)([void 0], t, !1)))
                            }), {
                                cache: Oe(o.number),
                                strategy: Ae.variadic
                            }),
                            getDateTimeFormat: Ee((function() {
                                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                return new((e = Intl.DateTimeFormat).bind.apply(e, (0, E.__spreadArray)([void 0], t, !1)))
                            }), {
                                cache: Oe(o.dateTime),
                                strategy: Ae.variadic
                            }),
                            getPluralRules: Ee((function() {
                                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                return new((e = Intl.PluralRules).bind.apply(e, (0, E.__spreadArray)([void 0], t, !1)))
                            }), {
                                cache: Oe(o.pluralRules),
                                strategy: Ae.variadic
                            })
                        })
                    }
                    return Object.defineProperty(e, "defaultLocale", {
                        get: function() {
                            return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = (new Intl.NumberFormat).resolvedOptions().locale), e.memoizedDefaultLocale
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.memoizedDefaultLocale = null, e.resolveLocale = function(e) {
                        var t = Intl.NumberFormat.supportedLocalesOf(e);
                        return t.length > 0 ? new Intl.Locale(t[0]) : new Intl.Locale("string" === typeof e ? e : e[0])
                    }, e.__parse = me, e.formats = {
                        number: {
                            integer: {
                                maximumFractionDigits: 0
                            },
                            currency: {
                                style: "currency"
                            },
                            percent: {
                                style: "percent"
                            }
                        },
                        date: {
                            short: {
                                month: "numeric",
                                day: "numeric",
                                year: "2-digit"
                            },
                            medium: {
                                month: "short",
                                day: "numeric",
                                year: "numeric"
                            },
                            long: {
                                month: "long",
                                day: "numeric",
                                year: "numeric"
                            },
                            full: {
                                weekday: "long",
                                month: "long",
                                day: "numeric",
                                year: "numeric"
                            }
                        },
                        time: {
                            short: {
                                hour: "numeric",
                                minute: "numeric"
                            },
                            medium: {
                                hour: "numeric",
                                minute: "numeric",
                                second: "numeric"
                            },
                            long: {
                                hour: "numeric",
                                minute: "numeric",
                                second: "numeric",
                                timeZoneName: "short"
                            },
                            full: {
                                hour: "numeric",
                                minute: "numeric",
                                second: "numeric",
                                timeZoneName: "short"
                            }
                        }
                    }, e
                }(),
                we = Ce,
                Ge = r(7294);

            function Ue(e, t) {
                return e ? Object.keys(e).reduce((function(r, i) {
                    return r[i] = n({
                        timeZone: t
                    }, e[i]), r
                }), {}) : e
            }

            function Fe(e) {
                return [e.namespace, e.key].filter((function(e) {
                    return null != e
                })).join(".")
            }

            function De(e) {
                console.error(e)
            }

            function ke(e, t, r) {
                if (!e) throw new Error(void 0);
                var n = e;
                return t.split(".").forEach((function(e) {
                    var t = n[e];
                    if (null == e || null == t) throw new Error(void 0);
                    n = t
                })), n
            }

            function Ve(e) {
                var t = e.messages,
                    r = e.namespace,
                    n = e.onError,
                    i = void 0 === n ? De : n;
                try {
                    if (!t) throw new Error(void 0);
                    var o = r ? ke(t, r) : t;
                    if (!o) throw new Error(void 0);
                    return o
                } catch (a) {
                    var s = new m(c.MISSING_MESSAGE, a.message);
                    return i(s), s
                }
            }

            function je(e) {
                var t = e.defaultTranslationValues,
                    r = e.formats,
                    i = e.getMessageFallback,
                    o = void 0 === i ? Fe : i,
                    s = e.locale,
                    a = e.messageFormatCache,
                    h = e.messagesOrError,
                    u = e.namespace,
                    l = e.onError,
                    f = e.timeZone;

                function p(e, t, r) {
                    var n = new m(t, r);
                    return l(n), o({
                        error: n,
                        key: e,
                        namespace: u
                    })
                }

                function E(e, i, l) {
                    if (h instanceof m) return o({
                        error: h,
                        key: e,
                        namespace: u
                    });
                    var E, g = h;
                    try {
                        E = ke(g, e)
                    } catch (d) {
                        return p(e, c.MISSING_MESSAGE, d.message)
                    }
                    var b, v = [s, u, e, String(E)].filter((function(e) {
                        return null != e
                    })).join(".");
                    if (null != a && a.has(v)) b = a.get(v);
                    else {
                        if ("object" === typeof E) return p(e, Array.isArray(E) ? c.INVALID_MESSAGE : c.INSUFFICIENT_PATH, undefined);
                        var _ = function(e, t) {
                            if (!t) {
                                var r = e.replace(/'([{}])/gi, "$1");
                                return /<|{/.test(r) ? void 0 : r
                            }
                        }(E, i);
                        if (_) return _;
                        try {
                            b = new we(E, s, function(e, t) {
                                var r = t ? n({}, e, {
                                        dateTime: Ue(e.dateTime, t)
                                    }) : e,
                                    i = we.formats.date,
                                    o = t ? Ue(i, t) : i,
                                    s = we.formats.time,
                                    a = t ? Ue(s, t) : s;
                                return n({}, r, {
                                    date: n({}, o, null == r ? void 0 : r.dateTime),
                                    time: n({}, a, null == r ? void 0 : r.dateTime)
                                })
                            }(n({}, r, l), f))
                        } catch (d) {
                            return p(e, c.INVALID_MESSAGE, d.message)
                        }
                        null == a || a.set(v, b)
                    }
                    try {
                        var y = b.format(function(e) {
                            if (0 !== Object.keys(e).length) {
                                var t = {};
                                return Object.keys(e).forEach((function(r) {
                                    var n, i = 0,
                                        o = e[r];
                                    n = "function" === typeof o ? function(e) {
                                        var t = o(e);
                                        return (0, Ge.isValidElement)(t) ? (0, Ge.cloneElement)(t, {
                                            key: r + i++
                                        }) : t
                                    } : o, t[r] = n
                                })), t
                            }
                        }(n({}, t, i)));
                        if (null == y) throw new Error(void 0);
                        return (0, Ge.isValidElement)(y) || Array.isArray(y) || "string" === typeof y ? y : String(y)
                    } catch (d) {
                        return p(e, c.FORMATTING_ERROR, d.message)
                    }
                }

                function g(e, t, r) {
                    var n = E(e, t, r);
                    return "string" !== typeof n ? p(e, c.INVALID_MESSAGE, void 0) : n
                }
                return g.rich = E, g.raw = function(e) {
                    if (h instanceof m) return o({
                        error: h,
                        key: e,
                        namespace: u
                    });
                    var t = h;
                    try {
                        return ke(t, e)
                    } catch (r) {
                        return p(e, c.MISSING_MESSAGE, r.message)
                    }
                }, g
            }

            function xe(e, t) {
                return e === t ? void 0 : e.slice((t + ".").length)
            }
            var Xe = ["getMessageFallback", "messages", "namespace", "onError"];
            var Ke = ["getMessageFallback", "messages", "namespace", "onError"];

            function Ze(e) {
                var t = e.getMessageFallback,
                    r = void 0 === t ? Fe : t,
                    i = e.messages,
                    o = e.namespace,
                    s = e.onError,
                    a = void 0 === s ? De : s;
                return function(e, t) {
                    var r = e.getMessageFallback,
                        i = e.messages,
                        o = e.namespace,
                        s = e.onError,
                        a = u(e, Xe);
                    i = i[t], o = xe(o, t);
                    var h = je(n({}, a, {
                            onError: s,
                            getMessageFallback: r,
                            messagesOrError: Ve({
                                messages: i,
                                namespace: o,
                                onError: s
                            })
                        })),
                        l = h.rich;

                    function f() {
                        return h.apply(void 0, arguments)
                    }
                    return f.rich = function(e, t, n) {
                        var i = l(e, t, n);
                        if ("string" !== typeof i) {
                            var a = new m(c.FORMATTING_ERROR, void 0);
                            return s(a), r({
                                error: a,
                                key: e,
                                namespace: o
                            })
                        }
                        return i
                    }, f.raw = h.raw, f
                }(n({}, u(e, Ke), {
                    onError: a,
                    getMessageFallback: r,
                    messages: {
                        "!": i
                    },
                    namespace: o ? "!." + o : "!"
                }), "!")
            }
            var Ye = 3600,
                We = 86400,
                ze = 7 * We,
                Qe = 2628e3,
                qe = 7884e3,
                Je = 365 * We,
                $e = {
                    second: 1,
                    seconds: 1,
                    minute: 60,
                    minutes: 60,
                    hour: Ye,
                    hours: Ye,
                    day: We,
                    days: We,
                    week: ze,
                    weeks: ze,
                    month: Qe,
                    months: Qe,
                    quarter: qe,
                    quarters: qe,
                    year: Je,
                    years: Je
                };

            function et(e) {
                var t = e.formats,
                    r = e.locale,
                    i = e.now,
                    o = e.onError,
                    s = void 0 === o ? De : o,
                    a = e.timeZone;

                function h(e, t, r, n) {
                    var i;
                    try {
                        i = function(e, t) {
                            var r;
                            if ("string" === typeof t) {
                                if (!(r = null == e ? void 0 : e[t])) {
                                    var n = new m(c.MISSING_FORMAT, void 0);
                                    throw s(n), n
                                }
                            } else r = t;
                            return r
                        }(r, t)
                    } catch (o) {
                        return String(e)
                    }
                    try {
                        return n(i)
                    } catch (o) {
                        return s(new m(c.FORMATTING_ERROR, o.message)), String(e)
                    }
                }

                function u(e) {
                    return e instanceof Date || "number" === typeof e ? new Date(e) : void 0 !== (null == e ? void 0 : e.now) ? new Date(e.now) : i || (s(new m(c.ENVIRONMENT_FALLBACK, void 0)), new Date)
                }
                return {
                    dateTime: function(e, i) {
                        return h(e, i, null == t ? void 0 : t.dateTime, (function(t) {
                            var i;
                            return null != (i = t) && i.timeZone || (a ? t = n({}, t, {
                                timeZone: a
                            }) : s(new m(c.ENVIRONMENT_FALLBACK, void 0))), new Intl.DateTimeFormat(r, t).format(e)
                        }))
                    },
                    number: function(e, n) {
                        return h(e, n, null == t ? void 0 : t.number, (function(t) {
                            return new Intl.NumberFormat(r, t).format(e)
                        }))
                    },
                    relativeTime: function(e, t) {
                        try {
                            var n = new Date(e),
                                i = u(t),
                                o = (n.getTime() - i.getTime()) / 1e3,
                                a = "number" === typeof t || t instanceof Date || void 0 === (null == t ? void 0 : t.unit) ? function(e) {
                                    var t = Math.abs(e);
                                    return t < 60 ? "second" : t < Ye ? "minute" : t < We ? "hour" : t < ze ? "day" : t < Qe ? "week" : t < Je ? "month" : "year"
                                }(o) : t.unit,
                                h = function(e, t) {
                                    return Math.round(e / $e[t])
                                }(o, a);
                            return new Intl.RelativeTimeFormat(r, {
                                numeric: "auto"
                            }).format(h, a)
                        } catch (l) {
                            return s(new m(c.FORMATTING_ERROR, l.message)), String(e)
                        }
                    },
                    list: function(e, n) {
                        return h(e, n, null == t ? void 0 : t.list, (function(t) {
                            return new Intl.ListFormat(r, t).format(e)
                        }))
                    }
                }
            }

            function tt() {
                var e = et.apply(void 0, arguments);
                return {
                    formatDateTime: e.dateTime,
                    formatNumber: e.number,
                    formatRelativeTime: e.relativeTime
                }
            }
            var rt = (0, Ge.createContext)(void 0),
                nt = ["getMessageFallback", "messages", "onError"];

            function it(e) {
                var t = e.getMessageFallback,
                    r = e.messages,
                    i = e.onError;
                return n({}, u(e, nt), {
                    messages: r,
                    onError: i || De,
                    getMessageFallback: t || Fe
                })
            }
            var ot = ["children"];

            function st(e) {
                var t = e.children,
                    r = u(e, ot),
                    i = (0, Ge.useState)((function() {
                        return new Map
                    }))[0];
                return Ge.createElement(rt.Provider, {
                    value: n({}, it(r), {
                        messageFormatCache: i
                    })
                }, t)
            }

            function at() {
                var e = (0, Ge.useContext)(rt);
                if (!e) throw new Error(void 0);
                return e
            }

            function ht(e) {
                return function(e, t, r) {
                    var n = at(),
                        i = n.defaultTranslationValues,
                        o = n.formats,
                        s = n.getMessageFallback,
                        a = n.locale,
                        h = n.messageFormatCache,
                        u = n.onError,
                        c = n.timeZone;
                    e = e[r], t = xe(t, r);
                    var l = (0, Ge.useMemo)((function() {
                        return Ve({
                            messages: e,
                            namespace: t,
                            onError: u
                        })
                    }), [e, t, u]);
                    return (0, Ge.useMemo)((function() {
                        return je({
                            messageFormatCache: h,
                            getMessageFallback: s,
                            messagesOrError: l,
                            defaultTranslationValues: i,
                            namespace: t,
                            onError: u,
                            formats: o,
                            locale: a,
                            timeZone: c
                        })
                    }), [h, s, l, i, t, u, o, a, c])
                }({
                    "!": at().messages
                }, e ? "!." + e : "!", "!")
            }

            function ut() {
                return at().locale
            }

            function ct() {
                return new Date
            }

            function lt(e) {
                var t = null == e ? void 0 : e.updateInterval,
                    r = at().now,
                    n = (0, Ge.useState)(r || ct()),
                    i = n[0],
                    o = n[1];
                return (0, Ge.useEffect)((function() {
                    if (t) {
                        var e = setInterval((function() {
                            o(ct())
                        }), t);
                        return function() {
                            clearInterval(e)
                        }
                    }
                }), [r, t]), i
            }

            function ft() {
                return at().timeZone
            }

            function pt() {
                return at().messages
            }

            function mt() {
                var e = at(),
                    t = e.formats,
                    r = e.locale,
                    n = e.now,
                    i = e.onError,
                    o = e.timeZone;
                return (0, Ge.useMemo)((function() {
                    return et({
                        formats: t,
                        locale: r,
                        now: n,
                        onError: i,
                        timeZone: o
                    })
                }), [t, n, r, i, o])
            }
            var Et = !1;

            function gt() {
                var e = at(),
                    t = e.formats,
                    r = e.locale,
                    n = e.now,
                    i = e.onError,
                    o = e.timeZone;
                return Et || (Et = !0, console.warn("`useIntl()` is deprecated and will be removed in the next major version. Please switch to `useFormatter()`.")), (0, Ge.useMemo)((function() {
                    return tt({
                        formats: t,
                        locale: r,
                        now: n,
                        onError: i,
                        timeZone: o
                    })
                }), [t, n, r, i, o])
            }
        }
    },
    function(e) {
        var t = function(t) {
            return e(e.s = t)
        };
        e.O(0, [9774, 179], (function() {
            return t(1118), t(387)
        }));
        var r = e.O();
        _N_E = r
    }
]);