import {a as gu, b as Ge, c as I} from "./chunk-ELYU6EKT.mjs";
var wt = {};
gu(wt, {
    Children: () => gn,
    Component: () => me,
    Fragment: () => Fo,
    Profiler: () => Wk,
    PureComponent: () => Uk,
    StrictMode: () => Xk,
    Suspense: () => Lo,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => Yk,
    cloneElement: () => rn,
    createContext: () => ye,
    createElement: () => ku,
    createFactory: () => Gk,
    createRef: () => Pm,
    default: () => b,
    forwardRef: () => je,
    isValidElement: () => yn,
    lazy: () => Kk,
    memo: () => qk,
    startTransition: () => cr,
    unstable_act: () => Qk,
    useCallback: () => le,
    useContext: () => M,
    useDebugValue: () => Zk,
    useDeferredValue: () => Jk,
    useEffect: () => $,
    useId: () => Gr,
    useImperativeHandle: () => eC,
    useInsertionEffect: () => xt,
    useLayoutEffect: () => bn,
    useMemo: () => ce,
    useReducer: () => tC,
    useRef: () => D,
    useState: () => St,
    useSyncExternalStore: () => nC,
    useTransition: () => rC,
    version: () => iC
});
var b = {}
  , Io = Symbol.for("react.element")
  , _k = Symbol.for("react.portal")
  , Ik = Symbol.for("react.fragment")
  , Fk = Symbol.for("react.strict_mode")
  , Lk = Symbol.for("react.profiler")
  , Mk = Symbol.for("react.provider")
  , Ok = Symbol.for("react.context")
  , Dk = Symbol.for("react.forward_ref")
  , Ak = Symbol.for("react.suspense")
  , Vk = Symbol.for("react.memo")
  , Bk = Symbol.for("react.lazy")
  , gm = Symbol.iterator;
function zk(e) {
    return e === null || typeof e != "object" ? null : (e = gm && e[gm] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var xm = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Sm = Object.assign
  , wm = {};
function Ri(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = wm,
    this.updater = n || xm
}
Ri.prototype.isReactComponent = {};
Ri.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Ri.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function km() {}
km.prototype = Ri.prototype;
function bu(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = wm,
    this.updater = n || xm
}
var xu = bu.prototype = new km;
xu.constructor = bu;
Sm(xu, Ri.prototype);
xu.isPureReactComponent = !0;
var ym = Array.isArray
  , Cm = Object.prototype.hasOwnProperty
  , Su = {
    current: null
}
  , Tm = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Em(e, t, n) {
    var r, i = {}, o = null, s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t)
            Cm.call(t, r) && !Tm.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        i.children = n;
    else if (1 < a) {
        for (var l = Array(a), c = 0; c < a; c++)
            l[c] = arguments[c + 2];
        i.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
        a)
            i[r] === void 0 && (i[r] = a[r]);
    return {
        $$typeof: Io,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: Su.current
    }
}
function Nk(e, t) {
    return {
        $$typeof: Io,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function wu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Io
}
function $k(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var bm = /\/+/g;
function yu(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? $k("" + e.key) : t.toString(36)
}
function Ea(e, t, n, r, i) {
    var o = typeof e;
    o !== "undefined" && o !== "boolean" || (e = null);
    var s = !1;
    if (e === null)
        s = !0;
    else
        switch (o) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case Io:
            case _k:
                s = !0
            }
        }
    if (s)
        return s = e,
        i = i(s),
        e = r === "" ? "." + yu(s, 0) : r,
        ym(i) ? (n = "",
        e != null && (n = e.replace(bm, "$&/") + "/"),
        Ea(i, t, n, "", function(c) {
            return c
        })) : i != null && (wu(i) && (i = Nk(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(bm, "$&/") + "/") + e)),
        t.push(i)),
        1;
    if (s = 0,
    r = r === "" ? "." : r + ":",
    ym(e))
        for (var a = 0; a < e.length; a++) {
            o = e[a];
            var l = r + yu(o, a);
            s += Ea(o, t, n, l, i)
        }
    else if (l = zk(e),
    typeof l == "function")
        for (e = l.call(e),
        a = 0; !(o = e.next()).done; )
            o = o.value,
            l = r + yu(o, a++),
            s += Ea(o, t, n, l, i);
    else if (o === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function Ta(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , i = 0;
    return Ea(e, r, "", "", function(o) {
        return t.call(n, o, i++)
    }),
    r
}
function Hk(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            e._status !== 0 && e._status !== -1 || (e._status = 1,
            e._result = n)
        }, function(n) {
            e._status !== 0 && e._status !== -1 || (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var ct = {
    current: null
}
  , Pa = {
    transition: null
}
  , jk = {
    ReactCurrentDispatcher: ct,
    ReactCurrentBatchConfig: Pa,
    ReactCurrentOwner: Su
};
b.Children = {
    map: Ta,
    forEach: function(e, t, n) {
        Ta(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Ta(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Ta(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!wu(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
b.Component = Ri;
b.Fragment = Ik;
b.Profiler = Lk;
b.PureComponent = bu;
b.StrictMode = Fk;
b.Suspense = Ak;
b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jk;
b.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Sm({}, e.props)
      , i = e.key
      , o = e.ref
      , s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref,
        s = Su.current),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (l in t)
            Cm.call(t, l) && !Tm.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var c = 0; c < l; c++)
            a[c] = arguments[c + 2];
        r.children = a
    }
    return {
        $$typeof: Io,
        type: e.type,
        key: i,
        ref: o,
        props: r,
        _owner: s
    }
}
;
b.createContext = function(e) {
    return e = {
        $$typeof: Ok,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Mk,
        _context: e
    },
    e.Consumer = e
}
;
b.createElement = Em;
b.createFactory = function(e) {
    var t = Em.bind(null, e);
    return t.type = e,
    t
}
;
b.createRef = function() {
    return {
        current: null
    }
}
;
b.forwardRef = function(e) {
    return {
        $$typeof: Dk,
        render: e
    }
}
;
b.isValidElement = wu;
b.lazy = function(e) {
    return {
        $$typeof: Bk,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Hk
    }
}
;
b.memo = function(e, t) {
    return {
        $$typeof: Vk,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
b.startTransition = function(e) {
    var t = Pa.transition;
    Pa.transition = {};
    try {
        e()
    } finally {
        Pa.transition = t
    }
}
;
b.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
}
;
b.useCallback = function(e, t) {
    return ct.current.useCallback(e, t)
}
;
b.useContext = function(e) {
    return ct.current.useContext(e)
}
;
b.useDebugValue = function() {}
;
b.useDeferredValue = function(e) {
    return ct.current.useDeferredValue(e)
}
;
b.useEffect = function(e, t) {
    return ct.current.useEffect(e, t)
}
;
b.useId = function() {
    return ct.current.useId()
}
;
b.useImperativeHandle = function(e, t, n) {
    return ct.current.useImperativeHandle(e, t, n)
}
;
b.useInsertionEffect = function(e, t) {
    return ct.current.useInsertionEffect(e, t)
}
;
b.useLayoutEffect = function(e, t) {
    return ct.current.useLayoutEffect(e, t)
}
;
b.useMemo = function(e, t) {
    return ct.current.useMemo(e, t)
}
;
b.useReducer = function(e, t, n) {
    return ct.current.useReducer(e, t, n)
}
;
b.useRef = function(e) {
    return ct.current.useRef(e)
}
;
b.useState = function(e) {
    return ct.current.useState(e)
}
;
b.useSyncExternalStore = function(e, t, n) {
    return ct.current.useSyncExternalStore(e, t, n)
}
;
b.useTransition = function() {
    return ct.current.useTransition()
}
;
b.version = "18.2.0";
var gn = b.Children
  , me = b.Component
  , Fo = b.Fragment
  , Wk = b.Profiler
  , Uk = b.PureComponent
  , Xk = b.StrictMode
  , Lo = b.Suspense
  , Yk = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , rn = b.cloneElement
  , ye = b.createContext
  , ku = b.createElement
  , Gk = b.createFactory
  , Pm = b.createRef
  , je = b.forwardRef
  , yn = b.isValidElement
  , Kk = b.lazy
  , qk = b.memo
  , cr = b.startTransition
  , Qk = b.unstable_act
  , le = b.useCallback
  , M = b.useContext
  , Zk = b.useDebugValue
  , Jk = b.useDeferredValue
  , $ = b.useEffect
  , Gr = b.useId
  , eC = b.useImperativeHandle
  , xt = b.useInsertionEffect
  , bn = b.useLayoutEffect
  , ce = b.useMemo
  , tC = b.useReducer
  , D = b.useRef
  , St = b.useState
  , nC = b.useSyncExternalStore
  , rC = b.useTransition
  , iC = b.version;
var oC = "default"in wt ? b : wt
  , _i = {}
  , sC = oC
  , aC = Symbol.for("react.element")
  , lC = Symbol.for("react.fragment")
  , cC = Object.prototype.hasOwnProperty
  , uC = sC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , fC = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Rm(e, t, n) {
    var r, i = {}, o = null, s = null;
    n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
    for (r in t)
        cC.call(t, r) && !fC.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: aC,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: uC.current
    }
}
_i.Fragment = lC;
_i.jsx = Rm;
_i.jsxs = Rm;
var Ce = _i.Fragment
  , k = _i.jsx
  , Q = _i.jsxs;
var dC = Object.create
  , tf = Object.defineProperty
  , hC = Object.getOwnPropertyDescriptor
  , Xv = Object.getOwnPropertyNames
  , pC = Object.getPrototypeOf
  , mC = Object.prototype.hasOwnProperty
  , vC = (e, t, n) => t in e ? tf(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , En = (e, t) => function() {
    return t || (0,
    e[Xv(e)[0]])((t = {
        exports: {}
    }).exports, t),
    t.exports
}
  , gC = (e, t, n, r) => {
    if (t && typeof t == "object" || typeof t == "function")
        for (let i of Xv(t))
            !mC.call(e, i) && i !== n && tf(e, i, {
                get: () => t[i],
                enumerable: !(r = hC(t, i)) || r.enumerable
            });
    return e
}
  , on = (e, t, n) => (n = e != null ? dC(pC(e)) : {},
gC(t || !e || !e.__esModule ? tf(n, "default", {
    value: e,
    enumerable: !0
}) : n, e))
  , P = (e, t, n) => (vC(e, typeof t != "symbol" ? t + "" : t, n),
n)
  , Yv = (e, t, n) => {
    if (!t.has(e))
        throw TypeError("Cannot " + n)
}
  , Tt = (e, t, n) => (Yv(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , Xo = (e, t, n) => {
    if (t.has(e))
        throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, n)
}
  , nf = (e, t, n, r) => (Yv(e, t, "write to private field"),
r ? r.call(e, n) : t.set(e, n),
n)
  , yC = En({
    "../../../node_modules/@emotion/memoize/dist/memoize.browser.cjs.js"(e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        function t(n) {
            var r = {};
            return function(i) {
                return r[i] === void 0 && (r[i] = n(i)),
                r[i]
            }
        }
        e.default = t
    }
})
  , bC = En({
    "../../../node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.cjs.js"(e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        function t(o) {
            return o && typeof o == "object" && "default"in o ? o.default : o
        }
        var n = t(yC())
          , r = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/
          , i = n(function(o) {
            return r.test(o) || o.charCodeAt(0) === 111 && o.charCodeAt(1) === 110 && o.charCodeAt(2) < 91
        });
        e.default = i
    }
})
  , Tn = ye({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: "never"
})
  , Yo = ye({})
  , Ai = ye(null)
  , Wa = typeof document < "u"
  , mr = Wa ? bn : $
  , rf = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , xC = "framerAppearId"
  , Ua = "data-" + rf(xC)
  , Xa = {
    skipAnimations: !1,
    useManualTiming: !1
}
  , jo = ye({})
  , Ya = ye({})
  , Gv = ye({
    strict: !1
})
  , _m = class {
    constructor() {
        this.order = [],
        this.scheduled = new Set
    }
    add(e) {
        if (!this.scheduled.has(e))
            return this.scheduled.add(e),
            this.order.push(e),
            !0
    }
    remove(e) {
        let t = this.order.indexOf(e);
        t !== -1 && (this.order.splice(t, 1),
        this.scheduled.delete(e))
    }
    clear() {
        this.order.length = 0,
        this.scheduled.clear()
    }
}
;
function SC(e) {
    let t = new _m
      , n = new _m
      , r = 0
      , i = !1
      , o = !1
      , s = new WeakSet
      , a = {
        schedule: (l, c=!1, u=!1) => {
            let f = u && i
              , d = f ? t : n;
            return c && s.add(l),
            d.add(l) && f && i && (r = t.order.length),
            l
        }
        ,
        cancel: l => {
            n.remove(l),
            s.delete(l)
        }
        ,
        process: l => {
            if (i) {
                o = !0;
                return
            }
            if (i = !0,
            [t,n] = [n, t],
            n.clear(),
            r = t.order.length,
            r)
                for (let c = 0; c < r; c++) {
                    let u = t.order[c];
                    s.has(u) && (a.schedule(u),
                    e()),
                    u(l)
                }
            i = !1,
            o && (o = !1,
            a.process(l))
        }
    };
    return a
}
var Do = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"]
  , wC = 40;
function Kv(e, t) {
    let n = !1
      , r = !0
      , i = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , o = Do.reduce( (f, d) => (f[d] = SC( () => n = !0),
    f), {})
      , s = f => {
        o[f].process(i)
    }
      , a = () => {
        let f = Xa.useManualTiming ? i.timestamp : performance.now();
        n = !1,
        i.delta = r ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, wC), 1),
        i.timestamp = f,
        i.isProcessing = !0,
        Do.forEach(s),
        i.isProcessing = !1,
        n && t && (r = !1,
        e(a))
    }
      , l = () => {
        n = !0,
        r = !0,
        i.isProcessing || e(a)
    }
    ;
    return {
        schedule: Do.reduce( (f, d) => {
            let m = o[d];
            return f[d] = (g, y=!1, S=!1) => (n || l(),
            m.schedule(g, y, S)),
            f
        }
        , {}),
        cancel: f => Do.forEach(d => o[d].cancel(f)),
        state: i,
        steps: o
    }
}
var {schedule: of, cancel: F5} = Kv(queueMicrotask, !1);
function kC(e, t, n, r) {
    let {visualElement: i} = M(Yo)
      , o = M(Gv)
      , s = M(Ai)
      , a = M(Tn).reducedMotion
      , l = D();
    r = r || o.renderer,
    !l.current && r && (l.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: a
    }));
    let c = l.current;
    xt( () => {
        c && c.update(n, s)
    }
    );
    let u = D(!!(n[Ua] && !I.HandoffComplete));
    return mr( () => {
        c && (of.postRender(c.render),
        u.current && c.animationState && c.animationState.animateChanges())
    }
    ),
    $( () => {
        c && (c.updateFeatures(),
        !u.current && c.animationState && c.animationState.animateChanges(),
        u.current && (u.current = !1,
        I.HandoffComplete = !0))
    }
    ),
    c
}
function Ii(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function CC(e, t, n) {
    return le(r => {
        r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Ii(n) && (n.current = r))
    }
    , [t])
}
function Wo(e) {
    return typeof e == "string" || Array.isArray(e)
}
function Ga(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
var sf = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , af = ["initial", ...sf];
function Ka(e) {
    return Ga(e.animate) || af.some(t => Wo(e[t]))
}
function qv(e) {
    return !!(Ka(e) || e.variants)
}
function TC(e, t) {
    if (Ka(e)) {
        let {initial: n, animate: r} = e;
        return {
            initial: n === !1 || Wo(n) ? n : void 0,
            animate: Wo(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}
function EC(e) {
    let {initial: t, animate: n} = TC(e, M(Yo));
    return ce( () => ({
        initial: t,
        animate: n
    }), [Im(t), Im(n)])
}
function Im(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
var Fm = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , Uo = {};
for (let e in Fm)
    Uo[e] = {
        isEnabled: t => Fm[e].some(n => !!t[n])
    };
function PC(e) {
    for (let t in e)
        Uo[t] = {
            ...Uo[t],
            ...e[t]
        }
}
var lf = Symbol.for("motionComponentSymbol");
function Qv({preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i}) {
    e && PC(e);
    function o(a, l) {
        let c, u = {
            ...M(Tn),
            ...a,
            layoutId: RC(a)
        }, {isStatic: f} = u, d = EC(a), m = r(a, f);
        if (!f && Wa) {
            d.visualElement = kC(i, m, u, t);
            let g = M(Ya)
              , y = M(Gv).strict;
            d.visualElement && (c = d.visualElement.loadFeatures(u, y, e, g))
        }
        return Q(Yo.Provider, {
            value: d,
            children: [c && d.visualElement ? k(c, {
                visualElement: d.visualElement,
                ...u
            }) : null, n(i, a, CC(m, d.visualElement, l), m, f, d.visualElement)]
        })
    }
    let s = je(o);
    return s[lf] = i,
    s
}
function RC({layoutId: e}) {
    let t = M(jo).id;
    return t && e !== void 0 ? t + "-" + e : e
}
var Aa = {};
function cf(e) {
    Object.assign(Aa, e)
}
var ve = e => !!(e && e.getVelocity)
  , Go = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , ni = new Set(Go)
  , _C = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , IC = Go.length;
function Zv(e, {enableHardwareAcceleration: t=!0, allowTransformNone: n=!0}, r, i) {
    let o = "";
    for (let s = 0; s < IC; s++) {
        let a = Go[s];
        if (e[a] !== void 0) {
            let l = _C[a] || a;
            o += `${l}(${e[a]}) `
        }
    }
    return t && !e.z && (o += "translateZ(0)"),
    o = o.trim(),
    i ? o = i(e, r ? "" : o) : n && r && (o = "none"),
    o
}
var Wn = (e, t, n) => n > t ? t : n < e ? e : n
  , Vo = e => Math.round(e * 1e5) / 1e5
  , uf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu
  , FC = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu
  , LC = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function Ko(e) {
    return typeof e == "string"
}
var qo = e => ({
    test: t => Ko(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`
})
  , ur = qo("deg")
  , xn = qo("%")
  , N = qo("px")
  , MC = qo("vh")
  , OC = qo("vw")
  , Lm = {
    ...xn,
    parse: e => xn.parse(e) / 100,
    transform: e => xn.transform(e * 100)
}
  , DC = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function Oi(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || DC.has(e)
}
var Jv = e => !Oi(e);
function eg(e) {
    e && (Jv = t => t.startsWith("on") ? !Oi(t) : e(t))
}
try {
    eg(bC().default)
} catch {}
function tg(e, t, n) {
    let r = {};
    for (let i in e)
        i === "values" && typeof e.values == "object" || (Jv(i) || n === !0 && Oi(i) || !t && !Oi(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r
}
var Vu = e => Array.isArray(e)
  , AC = e => !!(e && typeof e == "object" && e.mix && e.toValue)
  , VC = e => Vu(e) ? e[e.length - 1] || 0 : e;
function rt(e) {
    let t = ve(e) ? e.get() : e;
    return AC(t) ? t.toValue() : t
}
function ff(e, t, n, r={}, i={}) {
    return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    t
}
function Yn(e) {
    let t = D(null);
    return t.current === null && (t.current = e()),
    t.current
}
function BC({scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n}, r, i, o) {
    let s = {
        latestValues: zC(r, i, o, e),
        renderState: t()
    };
    return n && (s.mount = a => n(r, a, s)),
    s
}
var qa = e => (t, n) => {
    let r = M(Yo)
      , i = M(Ai)
      , o = () => BC(e, t, r, i);
    return n ? o() : Yn(o)
}
;
function zC(e, t, n, r) {
    let i = {}
      , o = r(e, {});
    for (let d in o)
        i[d] = rt(o[d]);
    let {initial: s, animate: a} = e
      , l = Ka(e)
      , c = qv(e);
    t && c && !l && e.inherit !== !1 && (s === void 0 && (s = t.initial),
    a === void 0 && (a = t.animate));
    let u = n ? n.initial === !1 : !1;
    u = u || s === !1;
    let f = u ? a : s;
    return f && typeof f != "boolean" && !Ga(f) && (Array.isArray(f) ? f : [f]).forEach(m => {
        let g = ff(e, m);
        if (!g)
            return;
        let {transitionEnd: y, transition: S, ...h} = g;
        for (let p in h) {
            let v = h[p];
            if (Array.isArray(v)) {
                let x = u ? v.length - 1 : 0;
                v = v[x]
            }
            v !== null && (i[p] = v)
        }
        for (let p in y)
            i[p] = y[p]
    }
    ),
    i
}
var qe = e => e
  , {schedule: J, cancel: ut, state: Ee, steps: Fa} = Kv(typeof requestAnimationFrame < "u" ? requestAnimationFrame : qe, !0)
  , ng = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Qa(e, t="page") {
    return {
        point: {
            x: e[`${t}X`],
            y: e[`${t}Y`]
        }
    }
}
var rg = e => t => ng(t) && e(t, Qa(t));
function jn(e, t, n, r={
    passive: !0
}) {
    return e.addEventListener(t, n, r),
    () => e.removeEventListener(t, n)
}
function Sn(e, t, n, r) {
    return jn(e, t, rg(n), r)
}
var NC = (e, t) => n => t(e(n))
  , wn = (...e) => e.reduce(NC);
function ig(e) {
    let t = null;
    return () => {
        let n = () => {
            t = null
        }
        ;
        return t === null ? (t = e,
        n) : !1
    }
}
var Mm = ig("dragHorizontal")
  , Om = ig("dragVertical");
function og(e) {
    let t = !1;
    if (e === "y")
        t = Om();
    else if (e === "x")
        t = Mm();
    else {
        let n = Mm()
          , r = Om();
        n && r ? t = () => {
            n(),
            r()
        }
        : (n && n(),
        r && r())
    }
    return t
}
function df() {
    let e = og(!0);
    return e ? (e(),
    !1) : !0
}
var Qo = qe
  , kt = qe
  , Vi = {
    test: e => typeof e == "number",
    parse: parseFloat,
    transform: e => e
}
  , Bo = {
    ...Vi,
    transform: e => Wn(0, 1, e)
}
  , _a = {
    ...Vi,
    default: 1
}
  , hf = (e, t) => n => !!(Ko(n) && LC.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t))
  , sg = (e, t, n) => r => {
    if (!Ko(r))
        return r;
    let[i,o,s,a] = r.match(uf);
    return {
        [e]: parseFloat(i),
        [t]: parseFloat(o),
        [n]: parseFloat(s),
        alpha: a !== void 0 ? parseFloat(a) : 1
    }
}
  , $C = e => Wn(0, 255, e)
  , Cu = {
    ...Vi,
    transform: e => Math.round($C(e))
}
  , Jr = {
    test: hf("rgb", "red"),
    parse: sg("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: r=1}) => "rgba(" + Cu.transform(e) + ", " + Cu.transform(t) + ", " + Cu.transform(n) + ", " + Vo(Bo.transform(r)) + ")"
};
function HC(e) {
    let t = ""
      , n = ""
      , r = ""
      , i = "";
    return e.length > 5 ? (t = e.substring(1, 3),
    n = e.substring(3, 5),
    r = e.substring(5, 7),
    i = e.substring(7, 9)) : (t = e.substring(1, 2),
    n = e.substring(2, 3),
    r = e.substring(3, 4),
    i = e.substring(4, 5),
    t += t,
    n += n,
    r += r,
    i += i),
    {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
var Bu = {
    test: hf("#"),
    parse: HC,
    transform: Jr.transform
}
  , Fi = {
    test: hf("hsl", "hue"),
    parse: sg("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: r=1}) => "hsla(" + Math.round(e) + ", " + xn.transform(Vo(t)) + ", " + xn.transform(Vo(n)) + ", " + Vo(Bo.transform(r)) + ")"
}
  , Ke = {
    test: e => Jr.test(e) || Bu.test(e) || Fi.test(e),
    parse: e => Jr.test(e) ? Jr.parse(e) : Fi.test(e) ? Fi.parse(e) : Bu.parse(e),
    transform: e => Ko(e) ? e : e.hasOwnProperty("red") ? Jr.transform(e) : Fi.transform(e)
};
function jC(e) {
    var t, n;
    return isNaN(e) && Ko(e) && (((t = e.match(uf)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(FC)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
var ag = "number"
  , lg = "color"
  , WC = "var"
  , UC = "var("
  , Dm = "${}"
  , XC = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Va(e) {
    let t = e.toString()
      , n = []
      , r = {
        color: [],
        number: [],
        var: []
    }
      , i = []
      , o = 0
      , a = t.replace(XC, l => (Ke.test(l) ? (r.color.push(o),
    i.push(lg),
    n.push(Ke.parse(l))) : l.startsWith(UC) ? (r.var.push(o),
    i.push(WC),
    n.push(l)) : (r.number.push(o),
    i.push(ag),
    n.push(parseFloat(l))),
    ++o,
    Dm)).split(Dm);
    return {
        values: n,
        split: a,
        indexes: r,
        types: i
    }
}
function cg(e) {
    return Va(e).values
}
function ug(e) {
    let {split: t, types: n} = Va(e)
      , r = t.length;
    return i => {
        let o = "";
        for (let s = 0; s < r; s++)
            if (o += t[s],
            i[s] !== void 0) {
                let a = n[s];
                a === ag ? o += Vo(i[s]) : a === lg ? o += Ke.transform(i[s]) : o += i[s]
            }
        return o
    }
}
var YC = e => typeof e == "number" ? 0 : e;
function GC(e) {
    let t = cg(e);
    return ug(e)(t.map(YC))
}
var Un = {
    test: jC,
    parse: cg,
    createTransformer: ug,
    getAnimatableNone: GC
}
  , kn = e => e * 1e3
  , Cn = e => e / 1e3;
function pf(e, t) {
    return t ? e * (1e3 / t) : 0
}
var KC = 5;
function fg(e, t, n) {
    let r = Math.max(t - KC, 0);
    return pf(n - e(r), t - r)
}
var Tu = .001
  , qC = .01
  , Am = 10
  , QC = .05
  , ZC = 1;
function JC({duration: e=800, bounce: t=.25, velocity: n=0, mass: r=1}) {
    let i, o;
    Qo(e <= kn(Am), "Spring duration must be 10 seconds or less");
    let s = 1 - t;
    s = Wn(QC, ZC, s),
    e = Wn(qC, Am, Cn(e)),
    s < 1 ? (i = c => {
        let u = c * s
          , f = u * e
          , d = u - n
          , m = zu(c, s)
          , g = Math.exp(-f);
        return Tu - d / m * g
    }
    ,
    o = c => {
        let f = c * s * e
          , d = f * n + n
          , m = Math.pow(s, 2) * Math.pow(c, 2) * e
          , g = Math.exp(-f)
          , y = zu(Math.pow(c, 2), s);
        return (-i(c) + Tu > 0 ? -1 : 1) * ((d - m) * g) / y
    }
    ) : (i = c => {
        let u = Math.exp(-c * e)
          , f = (c - n) * e + 1;
        return -Tu + u * f
    }
    ,
    o = c => {
        let u = Math.exp(-c * e)
          , f = (n - c) * (e * e);
        return u * f
    }
    );
    let a = 5 / e
      , l = tT(i, o, a);
    if (e = kn(e),
    isNaN(l))
        return {
            stiffness: 100,
            damping: 10,
            duration: e
        };
    {
        let c = Math.pow(l, 2) * r;
        return {
            stiffness: c,
            damping: s * 2 * Math.sqrt(r * c),
            duration: e
        }
    }
}
var eT = 12;
function tT(e, t, n) {
    let r = n;
    for (let i = 1; i < eT; i++)
        r = r - e(r) / t(r);
    return r
}
function zu(e, t) {
    return e * Math.sqrt(1 - t * t)
}
var nT = ["duration", "bounce"]
  , rT = ["stiffness", "damping", "mass"];
function Vm(e, t) {
    return t.some(n => e[n] !== void 0)
}
function iT(e) {
    let t = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!Vm(e, rT) && Vm(e, nT)) {
        let n = JC(e);
        t = {
            ...t,
            ...n,
            mass: 1
        },
        t.isResolvedFromDuration = !0
    }
    return t
}
function Zo({keyframes: e, restDelta: t, restSpeed: n, ...r}) {
    let i = e[0]
      , o = e[e.length - 1]
      , s = {
        done: !1,
        value: i
    }
      , {stiffness: a, damping: l, mass: c, duration: u, velocity: f, isResolvedFromDuration: d} = iT({
        ...r,
        velocity: -Cn(r.velocity || 0)
    })
      , m = f || 0
      , g = l / (2 * Math.sqrt(a * c))
      , y = o - i
      , S = Cn(Math.sqrt(a / c))
      , h = Math.abs(y) < 5;
    n || (n = h ? .01 : 2),
    t || (t = h ? .005 : .5);
    let p;
    if (g < 1) {
        let v = zu(S, g);
        p = x => {
            let C = Math.exp(-g * S * x);
            return o - C * ((m + g * S * y) / v * Math.sin(v * x) + y * Math.cos(v * x))
        }
    } else if (g === 1)
        p = v => o - Math.exp(-S * v) * (y + (m + S * y) * v);
    else {
        let v = S * Math.sqrt(g * g - 1);
        p = x => {
            let C = Math.exp(-g * S * x)
              , w = Math.min(v * x, 300);
            return o - C * ((m + g * S * y) * Math.sinh(w) + v * y * Math.cosh(w)) / v
        }
    }
    return {
        calculatedDuration: d && u || null,
        next: v => {
            let x = p(v);
            if (d)
                s.done = v >= u;
            else {
                let C = m;
                v !== 0 && (g < 1 ? C = fg(p, v, x) : C = 0);
                let w = Math.abs(C) <= n
                  , T = Math.abs(o - x) <= t;
                s.done = w && T
            }
            return s.value = s.done ? o : x,
            s
        }
    }
}
var dg = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
  , oT = 1e-7
  , sT = 12;
function aT(e, t, n, r, i) {
    let o, s, a = 0;
    do
        s = t + (n - t) / 2,
        o = dg(s, r, i) - e,
        o > 0 ? n = s : t = s;
    while (Math.abs(o) > oT && ++a < sT);
    return s
}
function Bi(e, t, n, r) {
    if (e === t && n === r)
        return qe;
    let i = o => aT(o, 0, 1, e, n);
    return o => o === 0 || o === 1 ? o : dg(i(o), t, r)
}
var hg = Bi(.42, 0, 1, 1)
  , pg = Bi(0, 0, .58, 1)
  , mf = Bi(.42, 0, .58, 1)
  , vf = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , gf = e => t => 1 - e(1 - t)
  , Za = e => 1 - Math.sin(Math.acos(e))
  , yf = gf(Za)
  , mg = vf(Za)
  , bf = Bi(.33, 1.53, .69, .99)
  , Ja = gf(bf)
  , vg = vf(Ja)
  , gg = e => (e *= 2) < 1 ? .5 * Ja(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
  , pr = (e, t, n) => {
    let r = t - e;
    return r === 0 ? 1 : (n - e) / r
}
  , fe = (e, t, n) => e + (t - e) * n;
function Eu(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function lT({hue: e, saturation: t, lightness: n, alpha: r}) {
    e /= 360,
    t /= 100,
    n /= 100;
    let i = 0
      , o = 0
      , s = 0;
    if (!t)
        i = o = s = n;
    else {
        let a = n < .5 ? n * (1 + t) : n + t - n * t
          , l = 2 * n - a;
        i = Eu(l, a, e + 1 / 3),
        o = Eu(l, a, e),
        s = Eu(l, a, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(o * 255),
        blue: Math.round(s * 255),
        alpha: r
    }
}
var Pu = (e, t, n) => {
    let r = e * e
      , i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i)
}
  , cT = [Bu, Jr, Fi]
  , uT = e => cT.find(t => t.test(e));
function Bm(e) {
    let t = uT(e);
    kt(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`);
    let n = t.parse(e);
    return t === Fi && (n = lT(n)),
    n
}
var zm = (e, t) => {
    let n = Bm(e)
      , r = Bm(t)
      , i = {
        ...n
    };
    return o => (i.red = Pu(n.red, r.red, o),
    i.green = Pu(n.green, r.green, o),
    i.blue = Pu(n.blue, r.blue, o),
    i.alpha = fe(n.alpha, r.alpha, o),
    Jr.transform(i))
}
  , yg = e => t => typeof t == "string" && t.startsWith(e)
  , bg = yg("--")
  , fT = yg("var(--")
  , xf = e => fT(e) ? dT.test(e.split("/*")[0].trim()) : !1
  , dT = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Nu(e, t) {
    return n => n > 0 ? t : e
}
function hT(e, t) {
    return n => fe(e, t, n)
}
function Sf(e) {
    return typeof e == "number" ? hT : typeof e == "string" ? xf(e) ? Nu : Ke.test(e) ? zm : vT : Array.isArray(e) ? xg : typeof e == "object" ? Ke.test(e) ? zm : pT : Nu
}
function xg(e, t) {
    let n = [...e]
      , r = n.length
      , i = e.map( (o, s) => Sf(o)(o, t[s]));
    return o => {
        for (let s = 0; s < r; s++)
            n[s] = i[s](o);
        return n
    }
}
function pT(e, t) {
    let n = {
        ...e,
        ...t
    }
      , r = {};
    for (let i in n)
        e[i] !== void 0 && t[i] !== void 0 && (r[i] = Sf(e[i])(e[i], t[i]));
    return i => {
        for (let o in r)
            n[o] = r[o](i);
        return n
    }
}
function mT(e, t) {
    var n;
    let r = []
      , i = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let o = 0; o < t.values.length; o++) {
        let s = t.types[o]
          , a = e.indexes[s][i[s]]
          , l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
        r[o] = l,
        i[s]++
    }
    return r
}
var vT = (e, t) => {
    let n = Un.createTransformer(t)
      , r = Va(e)
      , i = Va(t);
    return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? wn(xg(mT(r, i), i.values), n) : (Qo(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),
    Nu(e, t))
}
;
function wf(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? fe(e, t, n) : Sf(e)(e, t)
}
function gT(e, t, n) {
    let r = []
      , i = n || wf
      , o = e.length - 1;
    for (let s = 0; s < o; s++) {
        let a = i(e[s], e[s + 1]);
        if (t) {
            let l = Array.isArray(t) ? t[s] || qe : t;
            a = wn(l, a)
        }
        r.push(a)
    }
    return r
}
function zi(e, t, {clamp: n=!0, ease: r, mixer: i}={}) {
    let o = e.length;
    if (kt(o === t.length, "Both input and output ranges must be the same length"),
    o === 1)
        return () => t[0];
    if (o === 2 && e[0] === e[1])
        return () => t[1];
    e[0] > e[o - 1] && (e = [...e].reverse(),
    t = [...t].reverse());
    let s = gT(t, r, i)
      , a = s.length
      , l = c => {
        let u = 0;
        if (a > 1)
            for (; u < e.length - 2 && !(c < e[u + 1]); u++)
                ;
        let f = pr(e[u], e[u + 1], c);
        return s[u](f)
    }
    ;
    return n ? c => l(Wn(e[0], e[o - 1], c)) : l
}
var yT = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"])
  , Nm = e => e === Vi || e === N
  , $m = (e, t) => parseFloat(e.split(", ")[t])
  , Hm = (e, t) => (n, {transform: r}) => {
    if (r === "none" || !r)
        return 0;
    let i = r.match(/^matrix3d\((.+)\)$/u);
    if (i)
        return $m(i[1], t);
    {
        let o = r.match(/^matrix\((.+)\)$/u);
        return o ? $m(o[1], e) : 0
    }
}
  , bT = new Set(["x", "y", "z"])
  , xT = Go.filter(e => !bT.has(e));
function ST(e) {
    let t = [];
    return xT.forEach(n => {
        let r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]),
        r.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    t
}
var Di = {
    width: ({x: e}, {paddingLeft: t="0", paddingRight: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({y: e}, {paddingTop: t="0", paddingBottom: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {top: t}) => parseFloat(t),
    left: (e, {left: t}) => parseFloat(t),
    bottom: ({y: e}, {top: t}) => parseFloat(t) + (e.max - e.min),
    right: ({x: e}, {left: t}) => parseFloat(t) + (e.max - e.min),
    x: Hm(4, 13),
    y: Hm(5, 14)
};
Di.translateX = Di.x;
Di.translateY = Di.y;
var ei = new Set
  , $u = !1
  , Hu = !1;
function Sg() {
    if (Hu) {
        let e = Array.from(ei).filter(r => r.needsMeasurement)
          , t = new Set(e.map(r => r.element))
          , n = new Map;
        t.forEach(r => {
            let i = ST(r);
            i.length && (n.set(r, i),
            r.render())
        }
        ),
        e.forEach(r => r.measureInitialState()),
        t.forEach(r => {
            r.render();
            let i = n.get(r);
            i && i.forEach( ([o,s]) => {
                var a;
                (a = r.getValue(o)) === null || a === void 0 || a.set(s)
            }
            )
        }
        ),
        e.forEach(r => r.measureEndState()),
        e.forEach(r => {
            r.suspendedScrollY !== void 0 && I.scrollTo(0, r.suspendedScrollY)
        }
        )
    }
    Hu = !1,
    $u = !1,
    ei.forEach(e => e.complete()),
    ei.clear()
}
function wg() {
    ei.forEach(e => {
        e.readKeyframes(),
        e.needsMeasurement && (Hu = !0)
    }
    )
}
function wT() {
    wg(),
    Sg()
}
var kf = class {
    constructor(e, t, n, r, i, o=!1) {
        this.isComplete = !1,
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.isScheduled = !1,
        this.unresolvedKeyframes = [...e],
        this.onComplete = t,
        this.name = n,
        this.motionValue = r,
        this.element = i,
        this.isAsync = o
    }
    scheduleResolve() {
        this.isScheduled = !0,
        this.isAsync ? (ei.add(this),
        $u || ($u = !0,
        J.read(wg),
        J.resolveKeyframes(Sg))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        let {unresolvedKeyframes: e, name: t, element: n, motionValue: r} = this;
        for (let i = 0; i < e.length; i++)
            if (e[i] === null)
                if (i === 0) {
                    let o = r?.get()
                      , s = e[e.length - 1];
                    if (o !== void 0)
                        e[0] = o;
                    else if (n && t) {
                        let a = n.readValue(t, s);
                        a != null && (e[0] = a)
                    }
                    e[0] === void 0 && (e[0] = s),
                    r && o === void 0 && r.set(e[0])
                } else
                    e[i] = e[i - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0,
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        ei.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1,
        ei.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
;
function jm({keyframes: e, velocity: t=0, power: n=.8, timeConstant: r=325, bounceDamping: i=10, bounceStiffness: o=500, modifyTarget: s, min: a, max: l, restDelta: c=.5, restSpeed: u}) {
    let f = e[0]
      , d = {
        done: !1,
        value: f
    }
      , m = E => a !== void 0 && E < a || l !== void 0 && E > l
      , g = E => a === void 0 ? l : l === void 0 || Math.abs(a - E) < Math.abs(l - E) ? a : l
      , y = n * t
      , S = f + y
      , h = s === void 0 ? S : s(S);
    h !== S && (y = h - f);
    let p = E => -y * Math.exp(-E / r), v = E => h + p(E), x = E => {
        let _ = p(E)
          , R = v(E);
        d.done = Math.abs(_) <= c,
        d.value = d.done ? h : R
    }
    , C, w, T = E => {
        m(d.value) && (C = E,
        w = Zo({
            keyframes: [d.value, g(d.value)],
            velocity: fg(v, E, d.value),
            damping: i,
            stiffness: o,
            restDelta: c,
            restSpeed: u
        }))
    }
    ;
    return T(0),
    {
        calculatedDuration: null,
        next: E => {
            let _ = !1;
            return !w && C === void 0 && (_ = !0,
            x(E),
            T(E)),
            C !== void 0 && E >= C ? w.next(E - C) : (!_ && x(E),
            d)
        }
    }
}
var kg = e => Array.isArray(e) && typeof e[0] != "number"
  , Wm = {
    linear: qe,
    easeIn: hg,
    easeInOut: mf,
    easeOut: pg,
    circIn: Za,
    circInOut: mg,
    circOut: yf,
    backIn: Ja,
    backInOut: vg,
    backOut: bf,
    anticipate: gg
}
  , Um = e => {
    if (Array.isArray(e)) {
        kt(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
        let[t,n,r,i] = e;
        return Bi(t, n, r, i)
    } else if (typeof e == "string")
        return kt(Wm[e] !== void 0, `Invalid easing type '${e}'`),
        Wm[e];
    return e
}
;
function Cg(e, t) {
    let n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        let i = pr(0, t, r);
        e.push(fe(n, 1, i))
    }
}
function Cf(e) {
    let t = [0];
    return Cg(t, e.length - 1),
    t
}
function kT(e, t) {
    return e.map(n => n * t)
}
function CT(e, t) {
    return e.map( () => t || mf).splice(0, e.length - 1)
}
function Ba({duration: e=300, keyframes: t, times: n, ease: r="easeInOut"}) {
    let i = kg(r) ? r.map(Um) : Um(r)
      , o = {
        done: !1,
        value: t[0]
    }
      , s = kT(n && n.length === t.length ? n : Cf(t), e)
      , a = zi(s, t, {
        ease: Array.isArray(i) ? i : CT(t, i)
    });
    return {
        calculatedDuration: e,
        next: l => (o.value = a(l),
        o.done = l >= e,
        o)
    }
}
var za = {
    current: !1
}
  , Xm = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (Un.test(e) || e === "0") && !e.startsWith("url("));
function TT(e) {
    let t = e[0];
    if (e.length === 1)
        return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t)
            return !0
}
function ET(e, t, n, r) {
    let i = e[0];
    if (i === null)
        return !1;
    let o = e[e.length - 1]
      , s = Xm(i, t)
      , a = Xm(o, t);
    return Qo(s === a, `You are trying to animate ${t} from "${i}" to "${o}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${o} via the \`style\` property.`),
    !s || !a ? !1 : TT(e) || n === "spring" && r
}
var PT = e => e !== null;
function el(e, {repeat: t, repeatType: n="loop"}, r) {
    let i = e.filter(PT)
      , o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
    return !o || r === void 0 ? i[o] : r
}
var Tg = class {
    constructor({autoplay: e=!0, delay: t=0, type: n="keyframes", repeat: r=0, repeatDelay: i=0, repeatType: o="loop", ...s}) {
        this.isStopped = !1,
        this.hasAttemptedResolve = !1,
        this.options = {
            autoplay: e,
            delay: t,
            type: n,
            repeat: r,
            repeatDelay: i,
            repeatType: o,
            ...s
        },
        this.updateFinishedPromise()
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && wT(),
        this._resolved
    }
    onKeyframesResolved(e, t) {
        this.hasAttemptedResolve = !0;
        let {name: n, type: r, velocity: i, delay: o, onComplete: s, onUpdate: a, isGenerator: l} = this.options;
        if (!l && !ET(e, n, r, i))
            if (za.current || !o) {
                a?.(el(e, this.options, t)),
                s?.(),
                this.resolveFinishedPromise();
                return
            } else
                this.options.duration = 0;
        let c = this.initPlayback(e, t);
        c !== !1 && (this._resolved = {
            keyframes: e,
            finalKeyframe: t,
            ...c
        },
        this.onPostResolved())
    }
    onPostResolved() {}
    then(e, t) {
        return this.currentFinishedPromise.then(e, t)
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(e => {
            this.resolveFinishedPromise = e
        }
        )
    }
}
  , ju = 2e4;
function Eg(e) {
    let t = 0
      , n = 50
      , r = e.next(t);
    for (; !r.done && t < ju; )
        t += n,
        r = e.next(t);
    return t >= ju ? 1 / 0 : t
}
var La;
function RT() {
    La = void 0
}
var hr = {
    now: () => (La === void 0 && hr.set(Ee.isProcessing || Xa.useManualTiming ? Ee.timestamp : performance.now()),
    La),
    set: e => {
        La = e,
        queueMicrotask(RT)
    }
}
  , _T = e => {
    let t = ({timestamp: n}) => e(n);
    return {
        start: () => J.update(t, !0),
        stop: () => ut(t),
        now: () => Ee.isProcessing ? Ee.timestamp : hr.now()
    }
}
  , IT = {
    decay: jm,
    inertia: jm,
    tween: Ba,
    keyframes: Ba,
    spring: Zo
}
  , FT = e => e / 100
  , tl = class extends Tg {
    constructor({KeyframeResolver: e=kf, ...t}) {
        super(t),
        this.holdTime = null,
        this.startTime = null,
        this.cancelTime = null,
        this.currentTime = 0,
        this.playbackSpeed = 1,
        this.pendingPlayState = "running",
        this.state = "idle",
        this.stop = () => {
            if (this.resolver.cancel(),
            this.isStopped = !0,
            this.state === "idle")
                return;
            this.teardown();
            let {onStop: s} = this.options;
            s && s()
        }
        ;
        let {name: n, motionValue: r, keyframes: i} = this.options
          , o = (s, a) => this.onKeyframesResolved(s, a);
        n && r && r.owner ? this.resolver = r.owner.resolveKeyframes(i, o, n, r) : this.resolver = new e(i,o,n,r),
        this.resolver.scheduleResolve()
    }
    initPlayback(e) {
        let {type: t="keyframes", repeat: n=0, repeatDelay: r=0, repeatType: i, velocity: o=0} = this.options, s = IT[t] || Ba, a, l;
        s !== Ba && typeof e[0] != "number" && (a = wn(FT, wf(e[0], e[1])),
        e = [0, 100]);
        let c = s({
            ...this.options,
            keyframes: e
        });
        i === "mirror" && (l = s({
            ...this.options,
            keyframes: [...e].reverse(),
            velocity: -o
        })),
        c.calculatedDuration === null && (c.calculatedDuration = Eg(c));
        let {calculatedDuration: u} = c
          , f = u + r
          , d = f * (n + 1) - r;
        return {
            generator: c,
            mirroredGenerator: l,
            mapPercentToKeyframes: a,
            calculatedDuration: u,
            resolvedDuration: f,
            totalDuration: d
        }
    }
    onPostResolved() {
        let {autoplay: e=!0} = this.options;
        this.play(),
        this.pendingPlayState === "paused" || !e ? this.pause() : this.state = this.pendingPlayState
    }
    tick(e, t=!1) {
        let {resolved: n} = this;
        if (!n) {
            let {keyframes: T} = this.options;
            return {
                done: !0,
                value: T[T.length - 1]
            }
        }
        let {finalKeyframe: r, generator: i, mirroredGenerator: o, mapPercentToKeyframes: s, keyframes: a, calculatedDuration: l, totalDuration: c, resolvedDuration: u} = n;
        if (this.startTime === null)
            return i.next(0);
        let {delay: f, repeat: d, repeatType: m, repeatDelay: g, onUpdate: y} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - c / this.speed, this.startTime)),
        t ? this.currentTime = e : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
        let S = this.currentTime - f * (this.speed >= 0 ? 1 : -1)
          , h = this.speed >= 0 ? S < 0 : S > c;
        this.currentTime = Math.max(S, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = c);
        let p = this.currentTime
          , v = i;
        if (d) {
            let T = Math.min(this.currentTime, c) / u
              , E = Math.floor(T)
              , _ = T % 1;
            !_ && T >= 1 && (_ = 1),
            _ === 1 && E--,
            E = Math.min(E, d + 1),
            !!(E % 2) && (m === "reverse" ? (_ = 1 - _,
            g && (_ -= g / u)) : m === "mirror" && (v = o)),
            p = Wn(0, 1, _) * u
        }
        let x = h ? {
            done: !1,
            value: a[0]
        } : v.next(p);
        s && (x.value = s(x.value));
        let {done: C} = x;
        !h && l !== null && (C = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
        let w = this.holdTime === null && (this.state === "finished" || this.state === "running" && C);
        return w && r !== void 0 && (x.value = el(a, this.options, r)),
        y && y(x.value),
        w && this.finish(),
        x
    }
    get duration() {
        let {resolved: e} = this;
        return e ? Cn(e.calculatedDuration) : 0
    }
    get time() {
        return Cn(this.currentTime)
    }
    set time(e) {
        e = kn(e),
        this.currentTime = e,
        this.holdTime !== null || this.speed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(e) {
        let t = this.playbackSpeed !== e;
        this.playbackSpeed = e,
        t && (this.time = Cn(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(),
        !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped)
            return;
        let {driver: e=_T, onPlay: t} = this.options;
        this.driver || (this.driver = e(r => this.tick(r))),
        t && t();
        let n = this.driver.now();
        this.holdTime !== null ? this.startTime = n - this.holdTime : (!this.startTime || this.state === "finished") && (this.startTime = n),
        this.state === "finished" && this.updateFinishedPromise(),
        this.cancelTime = this.startTime,
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        var e;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused",
        this.holdTime = (e = this.currentTime) !== null && e !== void 0 ? e : 0
    }
    complete() {
        this.state !== "running" && this.play(),
        this.pendingPlayState = this.state = "finished",
        this.holdTime = null
    }
    finish() {
        this.teardown(),
        this.state = "finished";
        let {onComplete: e} = this.options;
        e && e()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        this.startTime = this.cancelTime = null,
        this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(e) {
        return this.startTime = 0,
        this.tick(e, !0)
    }
}
;
function Tf(e) {
    return new tl(e)
}
var Pg = e => /^0[^.\s]+$/u.test(e);
function LT(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Pg(e) : !0
}
var Rg = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e)
  , MT = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function OT(e) {
    let t = MT.exec(e);
    if (!t)
        return [, ];
    let[,n,r,i] = t;
    return [`--${n ?? r}`, i]
}
var DT = 4;
function _g(e, t, n=1) {
    kt(n <= DT, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
    let[r,i] = OT(e);
    if (!r)
        return;
    let o = I.getComputedStyle(t).getPropertyValue(r);
    if (o) {
        let s = o.trim();
        return Rg(s) ? parseFloat(s) : s
    }
    return xf(i) ? _g(i, t, n + 1) : i
}
var Ig = e => t => t.test(e)
  , AT = {
    test: e => e === "auto",
    parse: e => e
}
  , Fg = [Vi, N, xn, ur, OC, MC, AT]
  , Ym = e => Fg.find(Ig(e))
  , VT = new Set(["brightness", "contrast", "saturate", "opacity"]);
function BT(e) {
    let[t,n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    let[r] = n.match(uf) || [];
    if (!r)
        return e;
    let i = n.replace(r, "")
      , o = VT.has(t) ? 1 : 0;
    return r !== n && (o *= 100),
    t + "(" + o + i + ")"
}
var zT = /\b([a-z-]*)\(.*?\)/gu
  , Wu = {
    ...Un,
    getAnimatableNone: e => {
        let t = e.match(zT);
        return t ? t.map(BT).join(" ") : e
    }
}
  , Gm = {
    ...Vi,
    transform: Math.round
}
  , Lg = {
    borderWidth: N,
    borderTopWidth: N,
    borderRightWidth: N,
    borderBottomWidth: N,
    borderLeftWidth: N,
    borderRadius: N,
    radius: N,
    borderTopLeftRadius: N,
    borderTopRightRadius: N,
    borderBottomRightRadius: N,
    borderBottomLeftRadius: N,
    width: N,
    maxWidth: N,
    height: N,
    maxHeight: N,
    size: N,
    top: N,
    right: N,
    bottom: N,
    left: N,
    padding: N,
    paddingTop: N,
    paddingRight: N,
    paddingBottom: N,
    paddingLeft: N,
    margin: N,
    marginTop: N,
    marginRight: N,
    marginBottom: N,
    marginLeft: N,
    rotate: ur,
    rotateX: ur,
    rotateY: ur,
    rotateZ: ur,
    scale: _a,
    scaleX: _a,
    scaleY: _a,
    scaleZ: _a,
    skew: ur,
    skewX: ur,
    skewY: ur,
    distance: N,
    translateX: N,
    translateY: N,
    translateZ: N,
    x: N,
    y: N,
    z: N,
    perspective: N,
    transformPerspective: N,
    opacity: Bo,
    originX: Lm,
    originY: Lm,
    originZ: N,
    zIndex: Gm,
    backgroundPositionX: N,
    backgroundPositionY: N,
    fillOpacity: Bo,
    strokeOpacity: Bo,
    numOctaves: Gm
}
  , NT = {
    ...Lg,
    color: Ke,
    backgroundColor: Ke,
    outlineColor: Ke,
    fill: Ke,
    stroke: Ke,
    borderColor: Ke,
    borderTopColor: Ke,
    borderRightColor: Ke,
    borderBottomColor: Ke,
    borderLeftColor: Ke,
    filter: Wu,
    WebkitFilter: Wu
}
  , Ef = e => NT[e];
function Mg(e, t) {
    let n = Ef(e);
    return n !== Wu && (n = Un),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
function $T(e, t, n) {
    let r = 0, i;
    for (; r < e.length && !i; )
        typeof e[r] == "string" && e[r] !== "none" && e[r] !== "0" && (i = e[r]),
        r++;
    if (i && n)
        for (let o of t)
            e[o] = Mg(n, i)
}
var Og = class extends kf {
    constructor(e, t, n, r) {
        super(e, t, n, r, r?.owner, !0)
    }
    readKeyframes() {
        let {unresolvedKeyframes: e, element: t, name: n} = this;
        if (!t.current)
            return;
        super.readKeyframes();
        for (let a = 0; a < e.length; a++) {
            let l = e[a];
            if (typeof l == "string" && xf(l)) {
                let c = _g(l, t.current);
                c !== void 0 && (e[a] = c),
                a === e.length - 1 && (this.finalKeyframe = l)
            }
        }
        if (!yT.has(n) || e.length !== 2)
            return this.resolveNoneKeyframes();
        let[r,i] = e
          , o = Ym(r)
          , s = Ym(i);
        if (o !== s)
            if (Nm(o) && Nm(s))
                for (let a = 0; a < e.length; a++) {
                    let l = e[a];
                    typeof l == "string" && (e[a] = parseFloat(l))
                }
            else
                this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        let {unresolvedKeyframes: e, name: t} = this
          , n = [];
        for (let r = 0; r < e.length; r++)
            LT(e[r]) && n.push(r);
        n.length && $T(e, n, t)
    }
    measureInitialState() {
        let {element: e, unresolvedKeyframes: t, name: n} = this;
        if (!e.current)
            return;
        n === "height" && (this.suspendedScrollY = I.pageYOffset),
        this.measuredOrigin = Di[n](e.measureViewportBox(), I.getComputedStyle(e.current)),
        t[0] = this.measuredOrigin;
        let r = t[t.length - 1];
        r !== void 0 && e.getValue(n, r).jump(r, !1)
    }
    measureEndState() {
        var e;
        let {element: t, name: n, unresolvedKeyframes: r} = this;
        if (!t.current)
            return;
        let i = t.getValue(n);
        i && i.jump(this.measuredOrigin, !1);
        let o = r.length - 1
          , s = r[o];
        r[o] = Di[n](t.measureViewportBox(), I.getComputedStyle(t.current)),
        s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s),
        !((e = this.removedTransforms) === null || e === void 0) && e.length && this.removedTransforms.forEach( ([a,l]) => {
            t.getValue(a).set(l)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
;
function Dg(e) {
    let t;
    return () => (t === void 0 && (t = e()),
    t)
}
var Ag = e => Array.isArray(e) && typeof e[0] == "number";
function Vg(e) {
    return !!(!e || typeof e == "string" && e in Pf || Ag(e) || Array.isArray(e) && e.every(Vg))
}
var Ao = ([e,t,n,r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`
  , Pf = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Ao([0, .65, .55, 1]),
    circOut: Ao([.55, 0, 1, .45]),
    backIn: Ao([.31, .01, .66, -.59]),
    backOut: Ao([.33, 1.53, .69, .99])
};
function HT(e) {
    return Bg(e) || Pf.easeOut
}
function Bg(e) {
    if (e)
        return Ag(e) ? Ao(e) : Array.isArray(e) ? e.map(HT) : Pf[e]
}
function jT(e, t, n, {delay: r=0, duration: i=300, repeat: o=0, repeatType: s="loop", ease: a, times: l}={}) {
    let c = {
        [t]: n
    };
    l && (c.offset = l);
    let u = Bg(a);
    return Array.isArray(u) && (c.easing = u),
    e.animate(c, {
        delay: r,
        duration: i,
        easing: Array.isArray(u) ? "linear" : u,
        fill: "both",
        iterations: o + 1,
        direction: s === "reverse" ? "alternate" : "normal"
    })
}
var WT = Dg( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
  , UT = new Set(["opacity", "clipPath", "filter", "transform"])
  , Na = 10
  , XT = 2e4;
function YT(e) {
    return e.type === "spring" || e.name === "backgroundColor" || !Vg(e.ease)
}
function GT(e, t) {
    let n = new tl({
        ...t,
        keyframes: e,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    })
      , r = {
        done: !1,
        value: e[0]
    }
      , i = []
      , o = 0;
    for (; !r.done && o < XT; )
        r = n.sample(o),
        i.push(r.value),
        o += Na;
    return {
        times: void 0,
        keyframes: i,
        duration: o - Na,
        ease: "linear"
    }
}
var Uu = class extends Tg {
    constructor(e) {
        super(e);
        let {name: t, motionValue: n, keyframes: r} = this.options;
        this.resolver = new Og(r, (i, o) => this.onKeyframesResolved(i, o),t,n),
        this.resolver.scheduleResolve()
    }
    initPlayback(e, t) {
        var n;
        let {duration: r=300, times: i, ease: o, type: s, motionValue: a, name: l} = this.options;
        if (!(!((n = a.owner) === null || n === void 0) && n.current))
            return !1;
        if (YT(this.options)) {
            let {onComplete: u, onUpdate: f, motionValue: d, ...m} = this.options
              , g = GT(e, m);
            e = g.keyframes,
            e.length === 1 && (e[1] = e[0]),
            r = g.duration,
            i = g.times,
            o = g.ease,
            s = "keyframes"
        }
        let c = jT(a.owner.current, l, e, {
            ...this.options,
            duration: r,
            times: i,
            ease: o
        });
        return c.startTime = hr.now(),
        this.pendingTimeline ? (c.timeline = this.pendingTimeline,
        this.pendingTimeline = void 0) : c.onfinish = () => {
            let {onComplete: u} = this.options;
            a.set(el(e, this.options, t)),
            u && u(),
            this.cancel(),
            this.resolveFinishedPromise()
        }
        ,
        {
            animation: c,
            duration: r,
            times: i,
            type: s,
            ease: o,
            keyframes: e
        }
    }
    get duration() {
        let {resolved: e} = this;
        if (!e)
            return 0;
        let {duration: t} = e;
        return Cn(t)
    }
    get time() {
        let {resolved: e} = this;
        if (!e)
            return 0;
        let {animation: t} = e;
        return Cn(t.currentTime || 0)
    }
    set time(e) {
        let {resolved: t} = this;
        if (!t)
            return;
        let {animation: n} = t;
        n.currentTime = kn(e)
    }
    get speed() {
        let {resolved: e} = this;
        if (!e)
            return 1;
        let {animation: t} = e;
        return t.playbackRate
    }
    set speed(e) {
        let {resolved: t} = this;
        if (!t)
            return;
        let {animation: n} = t;
        n.playbackRate = e
    }
    get state() {
        let {resolved: e} = this;
        if (!e)
            return "idle";
        let {animation: t} = e;
        return t.playState
    }
    attachTimeline(e) {
        if (!this._resolved)
            this.pendingTimeline = e;
        else {
            let {resolved: t} = this;
            if (!t)
                return qe;
            let {animation: n} = t;
            n.timeline = e,
            n.onfinish = null
        }
        return qe
    }
    play() {
        if (this.isStopped)
            return;
        let {resolved: e} = this;
        if (!e)
            return;
        let {animation: t} = e;
        t.playState === "finished" && this.updateFinishedPromise(),
        t.play()
    }
    pause() {
        let {resolved: e} = this;
        if (!e)
            return;
        let {animation: t} = e;
        t.pause()
    }
    stop() {
        if (this.resolver.cancel(),
        this.isStopped = !0,
        this.state === "idle")
            return;
        let {resolved: e} = this;
        if (!e)
            return;
        let {animation: t, keyframes: n, duration: r, type: i, ease: o, times: s} = e;
        if (!(t.playState === "idle" || t.playState === "finished")) {
            if (this.time) {
                let {motionValue: a, onUpdate: l, onComplete: c, ...u} = this.options
                  , f = new tl({
                    ...u,
                    keyframes: n,
                    duration: r,
                    type: i,
                    ease: o,
                    times: s,
                    isGenerator: !0
                })
                  , d = kn(this.time);
                a.setWithVelocity(f.sample(d - Na).value, f.sample(d).value, Na)
            }
            this.cancel()
        }
    }
    complete() {
        let {resolved: e} = this;
        e && e.animation.finish()
    }
    cancel() {
        let {resolved: e} = this;
        e && e.animation.cancel()
    }
    static supports(e) {
        let {motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: o, type: s} = e;
        return WT() && n && UT.has(n) && t && t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate && !r && i !== "mirror" && o !== 0 && s !== "inertia"
    }
}
;
function Rf(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function nl(e, t) {
    let n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
function KT([...e], t, n) {
    let r = t < 0 ? e.length + t : t;
    if (r >= 0 && r < e.length) {
        let i = n < 0 ? e.length + n : n
          , [o] = e.splice(t, 1);
        e.splice(i, 0, o)
    }
    return e
}
var _f = class {
    constructor() {
        this.subscriptions = []
    }
    add(e) {
        return Rf(this.subscriptions, e),
        () => nl(this.subscriptions, e)
    }
    notify(e, t, n) {
        let r = this.subscriptions.length;
        if (r)
            if (r === 1)
                this.subscriptions[0](e, t, n);
            else
                for (let i = 0; i < r; i++) {
                    let o = this.subscriptions[i];
                    o && o(e, t, n)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
  , Km = 30
  , qT = e => !isNaN(parseFloat(e))
  , zo = {
    current: void 0
}
  , rl = class {
    constructor(e, t={}) {
        this.version = "11.1.7",
        this.canTrackVelocity = !1,
        this.events = {},
        this.updateAndNotify = (n, r=!0) => {
            let i = hr.now();
            this.updatedAt !== i && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(n),
            this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
            r && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(e),
        this.canTrackVelocity = qT(this.current),
        this.owner = t.owner
    }
    setCurrent(e) {
        this.current = e,
        this.updatedAt = hr.now()
    }
    setPrevFrameValue(e=this.current) {
        this.prevFrameValue = e,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(e) {
        return this.on("change", e)
    }
    on(e, t) {
        this.events[e] || (this.events[e] = new _f);
        let n = this.events[e].add(t);
        return e === "change" ? () => {
            n(),
            J.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : n
    }
    clearListeners() {
        for (let e in this.events)
            this.events[e].clear()
    }
    attach(e, t) {
        this.passiveEffect = e,
        this.stopPassiveEffect = t
    }
    set(e, t=!0) {
        !t || !this.passiveEffect ? this.updateAndNotify(e, t) : this.passiveEffect(e, this.updateAndNotify)
    }
    setWithVelocity(e, t, n) {
        this.set(t),
        this.prev = void 0,
        this.prevFrameValue = e,
        this.prevUpdatedAt = this.updatedAt - n
    }
    jump(e, t=!0) {
        this.updateAndNotify(e),
        this.prev = e,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        t && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return zo.current && zo.current.push(this),
        this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        let e = hr.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Km)
            return 0;
        let t = Math.min(this.updatedAt - this.prevUpdatedAt, Km);
        return pf(parseFloat(this.current) - parseFloat(this.prevFrameValue), t)
    }
    start(e) {
        return this.stop(),
        new Promise(t => {
            this.hasAnimated = !0,
            this.animation = e(t),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
;
function Pe(e, t) {
    return new rl(e,t)
}
function QT(e) {
    let t = {};
    return e.values.forEach( (n, r) => t[r] = n.get()),
    t
}
function ZT(e) {
    let t = {};
    return e.values.forEach( (n, r) => t[r] = n.getVelocity()),
    t
}
function il(e, t, n) {
    let r = e.getProps();
    return ff(r, t, n !== void 0 ? n : r.custom, QT(e), ZT(e))
}
var JT = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , eE = e => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , tE = {
    type: "keyframes",
    duration: .8
}
  , nE = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , rE = (e, {keyframes: t}) => t.length > 2 ? tE : ni.has(e) ? e.startsWith("scale") ? eE(t[1]) : JT : nE;
function iE({when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: o, repeatType: s, repeatDelay: a, from: l, elapsed: c, ...u}) {
    return !!Object.keys(u).length
}
function If(e, t) {
    return e[t] || e.default || e
}
var Ff = (e, t, n, r={}, i, o) => s => {
    let a = If(r, e) || {}
      , l = a.delay || r.delay || 0
      , {elapsed: c=0} = r;
    c = c - kn(l);
    let u = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -c,
        onUpdate: d => {
            t.set(d),
            a.onUpdate && a.onUpdate(d)
        }
        ,
        onComplete: () => {
            s(),
            a.onComplete && a.onComplete()
        }
        ,
        name: e,
        motionValue: t,
        element: o ? void 0 : i
    };
    iE(a) || (u = {
        ...u,
        ...rE(e, u)
    }),
    u.duration && (u.duration = kn(u.duration)),
    u.repeatDelay && (u.repeatDelay = kn(u.repeatDelay)),
    u.from !== void 0 && (u.keyframes[0] = u.from);
    let f = !1;
    if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (u.duration = 0,
    u.delay === 0 && (f = !0)),
    (za.current || Xa.skipAnimations) && (f = !0,
    u.duration = 0,
    u.delay = 0),
    f && !o && t.get() !== void 0) {
        let d = el(u.keyframes, a);
        if (d !== void 0) {
            J.update( () => {
                u.onUpdate(d),
                u.onComplete()
            }
            );
            return
        }
    }
    return !o && Uu.supports(u) ? new Uu(u) : new tl(u)
}
;
function $a(e) {
    return !!(ve(e) && e.add)
}
function oE(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Pe(n))
}
function Lf(e, t) {
    let n = il(e, t)
      , {transitionEnd: r={}, transition: i={}, ...o} = n || {};
    o = {
        ...o,
        ...r
    };
    for (let s in o) {
        let a = VC(o[s]);
        oE(e, s, a)
    }
}
function sE({protectedKeys: e, needsAnimating: t}, n) {
    let r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1,
    r
}
function Mf(e, t, {delay: n=0, transitionOverride: r, type: i}={}) {
    var o;
    let {transition: s=e.getDefaultTransition(), transitionEnd: a, ...l} = t
      , c = e.getValue("willChange");
    r && (s = r);
    let u = []
      , f = i && e.animationState && e.animationState.getState()[i];
    for (let d in l) {
        let m = e.getValue(d, (o = e.latestValues[d]) !== null && o !== void 0 ? o : null)
          , g = l[d];
        if (g === void 0 || f && sE(f, d))
            continue;
        let y = {
            delay: n,
            elapsed: 0,
            ...If(s || {}, d)
        }
          , S = !1;
        if (I.HandoffAppearAnimations) {
            let v = e.getProps()[Ua];
            if (v) {
                let x = I.HandoffAppearAnimations(v, d);
                x !== null && (y.elapsed = x,
                S = !0)
            }
        }
        m.start(Ff(d, m, g, e.shouldReduceMotion && ni.has(d) ? {
            type: !1
        } : y, e, S));
        let h = m.animation;
        h && ($a(c) && (c.add(d),
        h.then( () => c.remove(d))),
        u.push(h))
    }
    return a && Promise.all(u).then( () => {
        J.update( () => {
            a && Lf(e, a)
        }
        )
    }
    ),
    u
}
function Xu(e, t, n={}) {
    var r;
    let i = il(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0)
      , {transition: o=e.getDefaultTransition() || {}} = i || {};
    n.transitionOverride && (o = n.transitionOverride);
    let s = i ? () => Promise.all(Mf(e, i, n)) : () => Promise.resolve()
      , a = e.variantChildren && e.variantChildren.size ? (c=0) => {
        let {delayChildren: u=0, staggerChildren: f, staggerDirection: d} = o;
        return aE(e, t, u + c, f, d, n)
    }
    : () => Promise.resolve()
      , {when: l} = o;
    if (l) {
        let[c,u] = l === "beforeChildren" ? [s, a] : [a, s];
        return c().then( () => u())
    } else
        return Promise.all([s(), a(n.delay)])
}
function aE(e, t, n=0, r=0, i=1, o) {
    let s = []
      , a = (e.variantChildren.size - 1) * r
      , l = i === 1 ? (c=0) => c * r : (c=0) => a - c * r;
    return Array.from(e.variantChildren).sort(lE).forEach( (c, u) => {
        c.notify("AnimationStart", t),
        s.push(Xu(c, t, {
            ...o,
            delay: n + l(u)
        }).then( () => c.notify("AnimationComplete", t)))
    }
    ),
    Promise.all(s)
}
function lE(e, t) {
    return e.sortNodePosition(t)
}
function Of(e, t, n={}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        let i = t.map(o => Xu(e, o, n));
        r = Promise.all(i)
    } else if (typeof t == "string")
        r = Xu(e, t, n);
    else {
        let i = typeof t == "function" ? il(e, t, n.custom) : t;
        r = Promise.all(Mf(e, i, n))
    }
    return r.then( () => {
        J.postRender( () => {
            e.notify("AnimationComplete", t)
        }
        )
    }
    )
}
function zg(e, t) {
    if (!Array.isArray(t))
        return !1;
    let n = t.length;
    if (n !== e.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r])
            return !1;
    return !0
}
var cE = [...sf].reverse()
  , uE = sf.length;
function fE(e) {
    return t => Promise.all(t.map( ({animation: n, options: r}) => Of(e, n, r)))
}
function dE(e) {
    let t = fE(e)
      , n = pE()
      , r = !0
      , i = l => (c, u) => {
        var f;
        let d = il(e, u, l === "exit" ? (f = e.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
        if (d) {
            let {transition: m, transitionEnd: g, ...y} = d;
            c = {
                ...c,
                ...y,
                ...g
            }
        }
        return c
    }
    ;
    function o(l) {
        t = l(e)
    }
    function s(l) {
        let c = e.getProps()
          , u = e.getVariantContext(!0) || {}
          , f = []
          , d = new Set
          , m = {}
          , g = 1 / 0;
        for (let S = 0; S < uE; S++) {
            let h = cE[S]
              , p = n[h]
              , v = c[h] !== void 0 ? c[h] : u[h]
              , x = Wo(v)
              , C = h === l ? p.isActive : null;
            C === !1 && (g = S);
            let w = v === u[h] && v !== c[h] && x;
            if (w && r && e.manuallyAnimateOnMount && (w = !1),
            p.protectedKeys = {
                ...m
            },
            !p.isActive && C === null || !v && !p.prevProp || Ga(v) || typeof v == "boolean")
                continue;
            let E = hE(p.prevProp, v) || h === l && p.isActive && !w && x || S > g && x
              , _ = !1
              , R = Array.isArray(v) ? v : [v]
              , B = R.reduce(i(h), {});
            C === !1 && (B = {});
            let {prevResolvedValues: A={}} = p
              , ne = {
                ...A,
                ...B
            }
              , q = H => {
                E = !0,
                d.has(H) && (_ = !0,
                d.delete(H)),
                p.needsAnimating[H] = !0;
                let Z = e.getValue(H);
                Z && (Z.liveStyle = !1)
            }
            ;
            for (let H in ne) {
                let Z = B[H]
                  , ie = A[H];
                if (m.hasOwnProperty(H))
                    continue;
                let G = !1;
                Vu(Z) && Vu(ie) ? G = !zg(Z, ie) : G = Z !== ie,
                G ? Z != null ? q(H) : d.add(H) : Z !== void 0 && d.has(H) ? q(H) : p.protectedKeys[H] = !0
            }
            p.prevProp = v,
            p.prevResolvedValues = B,
            p.isActive && (m = {
                ...m,
                ...B
            }),
            r && e.blockInitialAnimation && (E = !1),
            E && (!w || _) && f.push(...R.map(H => ({
                animation: H,
                options: {
                    type: h
                }
            })))
        }
        if (d.size) {
            let S = {};
            d.forEach(h => {
                let p = e.getBaseTarget(h)
                  , v = e.getValue(h);
                v && (v.liveStyle = !0),
                S[h] = p ?? null
            }
            ),
            f.push({
                animation: S
            })
        }
        let y = !!f.length;
        return r && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (y = !1),
        r = !1,
        y ? t(f) : Promise.resolve()
    }
    function a(l, c) {
        var u;
        if (n[l].isActive === c)
            return Promise.resolve();
        (u = e.variantChildren) === null || u === void 0 || u.forEach(d => {
            var m;
            return (m = d.animationState) === null || m === void 0 ? void 0 : m.setActive(l, c)
        }
        ),
        n[l].isActive = c;
        let f = s(l);
        for (let d in n)
            n[d].protectedKeys = {};
        return f
    }
    return {
        animateChanges: s,
        setActive: a,
        setAnimateFunction: o,
        getState: () => n
    }
}
function hE(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !zg(t, e) : !1
}
function Kr(e=!1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function pE() {
    return {
        animate: Kr(!0),
        whileInView: Kr(),
        whileHover: Kr(),
        whileTap: Kr(),
        whileDrag: Kr(),
        whileFocus: Kr(),
        exit: Kr()
    }
}
var vr = class {
    constructor(e) {
        this.isMounted = !1,
        this.node = e
    }
    update() {}
}
  , mE = class extends vr {
    constructor(e) {
        super(e),
        e.animationState || (e.animationState = dE(e))
    }
    updateAnimationControlsSubscription() {
        let {animate: e} = this.node.getProps();
        this.unmount(),
        Ga(e) && (this.unmount = e.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        let {animate: e} = this.node.getProps()
          , {animate: t} = this.node.prevProps || {};
        e !== t && this.updateAnimationControlsSubscription()
    }
    unmount() {}
}
  , vE = 0
  , gE = class extends vr {
    constructor() {
        super(...arguments),
        this.id = vE++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        let {isPresent: e, onExitComplete: t} = this.node.presenceContext
          , {isPresent: n} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || e === n)
            return;
        let r = this.node.animationState.setActive("exit", !e);
        t && !e && r.then( () => t(this.id))
    }
    mount() {
        let {register: e} = this.node.presenceContext || {};
        e && (this.unmount = e(this.id))
    }
    unmount() {}
}
  , Df = {
    animation: {
        Feature: mE
    },
    exit: {
        Feature: gE
    }
}
  , Yu = (e, t) => Math.abs(e - t);
function Ng(e, t) {
    let n = Yu(e.x, t.x)
      , r = Yu(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
function Ct(e) {
    return e.max - e.min
}
function Gu(e, t=0, n=.01) {
    return Math.abs(e - t) <= n
}
function qm(e, t, n, r=.5) {
    e.origin = r,
    e.originPoint = fe(t.min, t.max, e.origin),
    e.scale = Ct(n) / Ct(t),
    (Gu(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    e.translate = fe(n.min, n.max, e.origin) - e.originPoint,
    (Gu(e.translate) || isNaN(e.translate)) && (e.translate = 0)
}
function No(e, t, n, r) {
    qm(e.x, t.x, n.x, r ? r.originX : void 0),
    qm(e.y, t.y, n.y, r ? r.originY : void 0)
}
function Qm(e, t, n) {
    e.min = n.min + t.min,
    e.max = e.min + Ct(t)
}
function yE(e, t, n) {
    Qm(e.x, t.x, n.x),
    Qm(e.y, t.y, n.y)
}
function Zm(e, t, n) {
    e.min = t.min - n.min,
    e.max = e.min + Ct(t)
}
function $o(e, t, n) {
    Zm(e.x, t.x, n.x),
    Zm(e.y, t.y, n.y)
}
var Jm = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , Li = () => ({
    x: Jm(),
    y: Jm()
})
  , ev = () => ({
    min: 0,
    max: 0
})
  , Te = () => ({
    x: ev(),
    y: ev()
});
function Af() {
    let e = M(Ai);
    if (e === null)
        return [!0, null];
    let {isPresent: t, onExitComplete: n, register: r} = e
      , i = Gr();
    return $( () => r(i), []),
    !t && n ? [!1, () => n && n(i)] : [!0]
}
var bE = (e, t) => e.depth - t.depth
  , $g = class {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(e) {
        Rf(this.children, e),
        this.isDirty = !0
    }
    remove(e) {
        nl(this.children, e),
        this.isDirty = !0
    }
    forEach(e) {
        this.isDirty && this.children.sort(bE),
        this.isDirty = !1,
        this.children.forEach(e)
    }
}
;
function Hg(e, t) {
    let n = hr.now()
      , r = ({timestamp: i}) => {
        let o = i - n;
        o >= t && (ut(r),
        e(o - t))
    }
    ;
    return J.read(r, !0),
    () => ut(r)
}
var Xn = new WeakMap
  , Ha = {
    current: null
}
  , Vf = {
    current: !1
};
function jg() {
    if (Vf.current = !0,
    !!Wa)
        if (I.matchMedia) {
            let e = I.matchMedia("(prefers-reduced-motion)")
              , t = () => Ha.current = e.matches;
            e.addListener(t),
            t()
        } else
            Ha.current = !1
}
function xE(e, t, n) {
    let {willChange: r} = t;
    for (let i in t) {
        let o = t[i]
          , s = n[i];
        if (ve(o))
            e.addValue(i, o),
            $a(r) && r.add(i);
        else if (ve(s))
            e.addValue(i, Pe(o, {
                owner: e
            })),
            $a(r) && r.remove(i);
        else if (s !== o)
            if (e.hasValue(i)) {
                let a = e.getValue(i);
                a.liveStyle === !0 ? a.jump(o) : a.hasAnimated || a.set(o)
            } else {
                let a = e.getStaticValue(i);
                e.addValue(i, Pe(a !== void 0 ? a : o, {
                    owner: e
                }))
            }
    }
    for (let i in n)
        t[i] === void 0 && e.removeValue(i);
    return t
}
var SE = [...Fg, Ke, Un]
  , wE = e => SE.find(Ig(e))
  , Wg = Object.keys(Uo)
  , kE = Wg.length
  , tv = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"]
  , CE = af.length;
function Ug(e) {
    if (e)
        return e.options.allowProjection !== !1 ? e.projection : Ug(e.parent)
}
var Xg = class {
    scrapeMotionValuesFromProps(e, t, n) {
        return {}
    }
    constructor({parent: e, props: t, presenceContext: n, reducedMotionConfig: r, blockInitialAnimation: i, visualState: o}, s={}) {
        this.resolveKeyframes = (f, d, m, g) => new this.KeyframeResolver(f,d,m,g,this),
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = kf,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.scheduleRender = () => J.render(this.render, !1, !0);
        let {latestValues: a, renderState: l} = o;
        this.latestValues = a,
        this.baseTarget = {
            ...a
        },
        this.initialValues = t.initial ? {
            ...a
        } : {},
        this.renderState = l,
        this.parent = e,
        this.props = t,
        this.presenceContext = n,
        this.depth = e ? e.depth + 1 : 0,
        this.reducedMotionConfig = r,
        this.options = s,
        this.blockInitialAnimation = !!i,
        this.isControllingVariants = Ka(t),
        this.isVariantNode = qv(t),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(e && e.current);
        let {willChange: c, ...u} = this.scrapeMotionValuesFromProps(t, {}, this);
        for (let f in u) {
            let d = u[f];
            a[f] !== void 0 && ve(d) && (d.set(a[f], !1),
            $a(c) && c.add(f))
        }
    }
    mount(e) {
        this.current = e,
        Xn.set(e, this),
        this.projection && !this.projection.instance && this.projection.mount(e),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (t, n) => this.bindToMotionValue(n, t)),
        Vf.current || jg(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Ha.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        var e;
        Xn.delete(this.current),
        this.projection && this.projection.unmount(),
        ut(this.notifyUpdate),
        ut(this.render),
        this.valueSubscriptions.forEach(t => t()),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (let t in this.events)
            this.events[t].clear();
        for (let t in this.features)
            (e = this.features[t]) === null || e === void 0 || e.unmount();
        this.current = null
    }
    bindToMotionValue(e, t) {
        let n = ni.has(e)
          , r = t.on("change", o => {
            this.latestValues[e] = o,
            this.props.onUpdate && J.preRender(this.notifyUpdate),
            n && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , i = t.on("renderRequest", this.scheduleRender);
        this.valueSubscriptions.set(e, () => {
            r(),
            i(),
            t.owner && t.stop()
        }
        )
    }
    sortNodePosition(e) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current)
    }
    loadFeatures({children: e, ...t}, n, r, i) {
        let o, s;
        for (let a = 0; a < kE; a++) {
            let l = Wg[a]
              , {isEnabled: c, Feature: u, ProjectionNode: f, MeasureLayout: d} = Uo[l];
            f && (o = f),
            c(t) && (!this.features[l] && u && (this.features[l] = new u(this)),
            d && (s = d))
        }
        if ((this.type === "html" || this.type === "svg") && !this.projection && o) {
            this.projection = new o(this.latestValues,Ug(this.parent));
            let {layoutId: a, layout: l, drag: c, dragConstraints: u, layoutScroll: f, layoutRoot: d} = t;
            this.projection.setOptions({
                layoutId: a,
                layout: l,
                alwaysMeasureLayout: !!c || u && Ii(u),
                visualElement: this,
                scheduleRender: () => this.scheduleRender(),
                animationType: typeof l == "string" ? l : "both",
                initialPromotionConfig: i,
                layoutScroll: f,
                layoutRoot: d
            })
        }
        return s
    }
    updateFeatures() {
        for (let e in this.features) {
            let t = this.features[e];
            t.isMounted ? t.update() : (t.mount(),
            t.isMounted = !0)
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.options, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Te()
    }
    getStaticValue(e) {
        return this.latestValues[e]
    }
    setStaticValue(e, t) {
        this.latestValues[e] = t
    }
    update(e, t) {
        (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = e,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = t;
        for (let n = 0; n < tv.length; n++) {
            let r = tv[n];
            this.propEventSubscriptions[r] && (this.propEventSubscriptions[r](),
            delete this.propEventSubscriptions[r]);
            let i = "on" + r
              , o = e[i];
            o && (this.propEventSubscriptions[r] = this.on(r, o))
        }
        this.prevMotionValues = xE(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(e) {
        return this.props.variants ? this.props.variants[e] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    getVariantContext(e=!1) {
        if (e)
            return this.parent ? this.parent.getVariantContext() : void 0;
        if (!this.isControllingVariants) {
            let n = this.parent ? this.parent.getVariantContext() || {} : {};
            return this.props.initial !== void 0 && (n.initial = this.props.initial),
            n
        }
        let t = {};
        for (let n = 0; n < CE; n++) {
            let r = af[n]
              , i = this.props[r];
            (Wo(i) || i === !1) && (t[r] = i)
        }
        return t
    }
    addVariantChild(e) {
        let t = this.getClosestVariantNode();
        if (t)
            return t.variantChildren && t.variantChildren.add(e),
            () => t.variantChildren.delete(e)
    }
    addValue(e, t) {
        let n = this.values.get(e);
        t !== n && (n && this.removeValue(e),
        this.bindToMotionValue(e, t),
        this.values.set(e, t),
        this.latestValues[e] = t.get())
    }
    removeValue(e) {
        this.values.delete(e);
        let t = this.valueSubscriptions.get(e);
        t && (t(),
        this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState)
    }
    hasValue(e) {
        return this.values.has(e)
    }
    getValue(e, t) {
        if (this.props.values && this.props.values[e])
            return this.props.values[e];
        let n = this.values.get(e);
        return n === void 0 && t !== void 0 && (n = Pe(t === null ? void 0 : t, {
            owner: this
        }),
        this.addValue(e, n)),
        n
    }
    readValue(e, t) {
        var n;
        let r = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (n = this.getBaseTargetFromProps(this.props, e)) !== null && n !== void 0 ? n : this.readValueFromInstance(this.current, e, this.options);
        return r != null && (typeof r == "string" && (Rg(r) || Pg(r)) ? r = parseFloat(r) : !wE(r) && Un.test(t) && (r = Mg(e, t)),
        this.setBaseTarget(e, ve(r) ? r.get() : r)),
        ve(r) ? r.get() : r
    }
    setBaseTarget(e, t) {
        this.baseTarget[e] = t
    }
    getBaseTarget(e) {
        var t;
        let {initial: n} = this.props, r;
        if (typeof n == "string" || typeof n == "object") {
            let o = ff(this.props, n, (t = this.presenceContext) === null || t === void 0 ? void 0 : t.custom);
            o && (r = o[e])
        }
        if (n && r !== void 0)
            return r;
        let i = this.getBaseTargetFromProps(this.props, e);
        return i !== void 0 && !ve(i) ? i : this.initialValues[e] !== void 0 && r === void 0 ? void 0 : this.baseTarget[e]
    }
    on(e, t) {
        return this.events[e] || (this.events[e] = new _f),
        this.events[e].add(t)
    }
    notify(e, ...t) {
        this.events[e] && this.events[e].notify(...t)
    }
}
;
function Yg(e) {
    function t(r, i={}) {
        return Qv(e(r, i))
    }
    if (typeof Proxy > "u")
        return t;
    let n = new Map;
    return new Proxy(t,{
        get: (r, i) => (n.has(i) || n.set(i, t(i)),
        n.get(i))
    })
}
var TE = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function Bf(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(TE.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
function Gg(e, {layout: t, layoutId: n}) {
    return ni.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Aa[e] || e === "opacity")
}
var EE = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
function zf(e, t, n, r) {
    let {style: i, vars: o, transform: s, transformOrigin: a} = e
      , l = !1
      , c = !1
      , u = !0;
    for (let f in t) {
        let d = t[f];
        if (bg(f)) {
            o[f] = d;
            continue
        }
        let m = Lg[f]
          , g = EE(d, m);
        if (ni.has(f)) {
            if (l = !0,
            s[f] = g,
            !u)
                continue;
            d !== (m.default || 0) && (u = !1)
        } else
            f.startsWith("origin") ? (c = !0,
            a[f] = g) : i[f] = g
    }
    if (t.transform || (l || r ? i.transform = Zv(e.transform, n, u, r) : i.transform && (i.transform = "none")),
    c) {
        let {originX: f="50%", originY: d="50%", originZ: m=0} = a;
        i.transformOrigin = `${f} ${d} ${m}`
    }
}
var Nf = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function Kg(e, t, n) {
    for (let r in t)
        !ve(t[r]) && !Gg(r, n) && (e[r] = t[r])
}
function PE({transformTemplate: e}, t, n) {
    return ce( () => {
        let r = Nf();
        return zf(r, t, {
            enableHardwareAcceleration: !n
        }, e),
        Object.assign({}, r.vars, r.style)
    }
    , [t])
}
function RE(e, t, n) {
    let r = e.style || {}
      , i = {};
    return Kg(i, r, e),
    Object.assign(i, PE(e, t, n)),
    i
}
function _E(e, t, n) {
    let r = {}
      , i = RE(e, t, n);
    return e.drag && e.dragListener !== !1 && (r.draggable = !1,
    i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none",
    i.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0),
    r.style = i,
    r
}
function nv(e, t, n) {
    return typeof e == "string" ? e : N.transform(t + n * e)
}
function IE(e, t, n) {
    let r = nv(t, e.x, e.width)
      , i = nv(n, e.y, e.height);
    return `${r} ${i}`
}
var FE = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , LE = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function ME(e, t, n=1, r=0, i=!0) {
    e.pathLength = 1;
    let o = i ? FE : LE;
    e[o.offset] = N.transform(-r);
    let s = N.transform(t)
      , a = N.transform(n);
    e[o.array] = `${s} ${a}`
}
function $f(e, {attrX: t, attrY: n, attrScale: r, originX: i, originY: o, pathLength: s, pathSpacing: a=1, pathOffset: l=0, ...c}, u, f, d) {
    if (zf(e, c, u, d),
    f) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
    e.style = {};
    let {attrs: m, style: g, dimensions: y} = e;
    m.transform && (y && (g.transform = m.transform),
    delete m.transform),
    y && (i !== void 0 || o !== void 0 || g.transform) && (g.transformOrigin = IE(y, i !== void 0 ? i : .5, o !== void 0 ? o : .5)),
    t !== void 0 && (m.x = t),
    n !== void 0 && (m.y = n),
    r !== void 0 && (m.scale = r),
    s !== void 0 && ME(m, s, a, l, !1)
}
var qg = () => ({
    ...Nf(),
    attrs: {}
})
  , Hf = e => typeof e == "string" && e.toLowerCase() === "svg";
function OE(e, t, n, r) {
    let i = ce( () => {
        let o = qg();
        return $f(o, t, {
            enableHardwareAcceleration: !1
        }, Hf(r), e.transformTemplate),
        {
            ...o.attrs,
            style: {
                ...o.style
            }
        }
    }
    , [t]);
    if (e.style) {
        let o = {};
        Kg(o, e.style, e),
        i.style = {
            ...o,
            ...i.style
        }
    }
    return i
}
function DE(e=!1) {
    return (n, r, i, {latestValues: o}, s) => {
        let l = (Bf(n) ? OE : _E)(r, o, s, n)
          , c = tg(r, typeof n == "string", e)
          , u = n !== Fo ? {
            ...c,
            ...l,
            ref: i
        } : {}
          , {children: f} = r
          , d = ce( () => ve(f) ? f.get() : f, [f]);
        return ku(n, {
            ...u,
            children: d
        })
    }
}
function Qg(e, {style: t, vars: n}, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (let o in n)
        e.style.setProperty(o, n[o])
}
var Zg = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function Jg(e, t, n, r) {
    Qg(e, t, void 0, r);
    for (let i in t.attrs)
        e.setAttribute(Zg.has(i) ? i : rf(i), t.attrs[i])
}
function jf(e, t, n) {
    var r;
    let {style: i} = e
      , o = {};
    for (let s in i)
        (ve(i[s]) || t.style && ve(t.style[s]) || Gg(s, e) || ((r = n?.getValue(s)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (o[s] = i[s]);
    return o
}
function ey(e, t, n) {
    let r = jf(e, t, n);
    for (let i in e)
        if (ve(e[i]) || ve(t[i])) {
            let o = Go.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
            r[o] = e[i]
        }
    return r
}
var AE = {
    useVisualState: qa({
        scrapeMotionValuesFromProps: ey,
        createRenderState: qg,
        onMount: (e, t, {renderState: n, latestValues: r}) => {
            J.read( () => {
                try {
                    n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
                } catch {
                    n.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }
            }
            ),
            J.render( () => {
                $f(n, r, {
                    enableHardwareAcceleration: !1
                }, Hf(t.tagName), e.transformTemplate),
                Jg(t, n)
            }
            )
        }
    })
}
  , VE = {
    useVisualState: qa({
        scrapeMotionValuesFromProps: jf,
        createRenderState: Nf
    })
};
function ty(e, {forwardMotionProps: t=!1}, n, r) {
    return {
        ...Bf(e) ? AE : VE,
        preloadedFeatures: n,
        useRender: DE(t),
        createVisualElement: r,
        Component: e
    }
}
function rv(e, t) {
    let n = t ? "pointerenter" : "pointerleave"
      , r = t ? "onHoverStart" : "onHoverEnd"
      , i = (o, s) => {
        if (o.pointerType === "touch" || df())
            return;
        let a = e.getProps();
        e.animationState && a.whileHover && e.animationState.setActive("whileHover", t);
        let l = a[r];
        l && l(o, s)
    }
    ;
    return Sn(e.current, n, i, {
        passive: !e.getProps()[r]
    })
}
var BE = class extends vr {
    mount() {
        this.unmount = wn(rv(this.node, !0), rv(this.node, !1))
    }
    unmount() {}
}
  , zE = class extends vr {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let e = !1;
        try {
            e = this.node.current.matches(":focus-visible")
        } catch {
            e = !0
        }
        !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = wn(jn(this.node.current, "focus", () => this.onFocus()), jn(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
  , ny = (e, t) => t ? e === t ? !0 : ny(e, t.parentElement) : !1;
function Ru(e, t) {
    if (!t)
        return;
    let n = new PointerEvent("pointer" + e);
    t(n, Qa(n))
}
var NE = class extends vr {
    constructor() {
        super(...arguments),
        this.removeStartListeners = qe,
        this.removeEndListeners = qe,
        this.removeAccessibleListeners = qe,
        this.startPointerPress = (e, t) => {
            if (this.isPressing)
                return;
            this.removeEndListeners();
            let n = this.node.getProps()
              , i = Sn(I, "pointerup", (s, a) => {
                if (!this.checkPressEnd())
                    return;
                let {onTap: l, onTapCancel: c, globalTapTarget: u} = this.node.getProps();
                !u && !ny(this.node.current, s.target) ? c && c(s, a) : l && l(s, a)
            }
            , {
                passive: !(n.onTap || n.onPointerUp)
            })
              , o = Sn(I, "pointercancel", (s, a) => this.cancelPress(s, a), {
                passive: !(n.onTapCancel || n.onPointerCancel)
            });
            this.removeEndListeners = wn(i, o),
            this.startPress(e, t)
        }
        ,
        this.startAccessiblePress = () => {
            let e = i => {
                if (i.key !== "Enter" || this.isPressing)
                    return;
                let o = s => {
                    s.key !== "Enter" || !this.checkPressEnd() || Ru("up", (a, l) => {
                        let {onTap: c} = this.node.getProps();
                        c && c(a, l)
                    }
                    )
                }
                ;
                this.removeEndListeners(),
                this.removeEndListeners = jn(this.node.current, "keyup", o),
                Ru("down", (s, a) => {
                    this.startPress(s, a)
                }
                )
            }
              , t = jn(this.node.current, "keydown", e)
              , n = () => {
                this.isPressing && Ru("cancel", (i, o) => this.cancelPress(i, o))
            }
              , r = jn(this.node.current, "blur", n);
            this.removeAccessibleListeners = wn(t, r)
        }
    }
    startPress(e, t) {
        this.isPressing = !0;
        let {onTapStart: n, whileTap: r} = this.node.getProps();
        r && this.node.animationState && this.node.animationState.setActive("whileTap", !0),
        n && n(e, t)
    }
    checkPressEnd() {
        return this.removeEndListeners(),
        this.isPressing = !1,
        this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1),
        !df()
    }
    cancelPress(e, t) {
        if (!this.checkPressEnd())
            return;
        let {onTapCancel: n} = this.node.getProps();
        n && n(e, t)
    }
    mount() {
        let e = this.node.getProps()
          , t = Sn(e.globalTapTarget ? I : this.node.current, "pointerdown", this.startPointerPress, {
            passive: !(e.onTapStart || e.onPointerStart)
        })
          , n = jn(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = wn(t, n)
    }
    unmount() {
        this.removeStartListeners(),
        this.removeEndListeners(),
        this.removeAccessibleListeners()
    }
}
  , Ku = new WeakMap
  , _u = new WeakMap
  , $E = e => {
    let t = Ku.get(e.target);
    t && t(e)
}
  , HE = e => {
    e.forEach($E)
}
;
function jE({root: e, ...t}) {
    let n = e || document;
    _u.has(n) || _u.set(n, {});
    let r = _u.get(n)
      , i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(HE,{
        root: e,
        ...t
    })),
    r[i]
}
function WE(e, t, n) {
    let r = jE(t);
    return Ku.set(e, n),
    r.observe(e),
    () => {
        Ku.delete(e),
        r.unobserve(e)
    }
}
var UE = {
    some: 0,
    all: 1
}
  , XE = class extends vr {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        let {viewport: e={}} = this.node.getProps()
          , {root: t, margin: n, amount: r="some", once: i} = e
          , o = {
            root: t ? t.current : void 0,
            rootMargin: n,
            threshold: typeof r == "number" ? r : UE[r]
        }
          , s = a => {
            let {isIntersecting: l} = a;
            if (this.isInView === l || (this.isInView = l,
            i && !l && this.hasEnteredView))
                return;
            l && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", l);
            let {onViewportEnter: c, onViewportLeave: u} = this.node.getProps()
              , f = l ? c : u;
            f && f(a)
        }
        ;
        return WE(this.node.current, o, s)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        let {props: e, prevProps: t} = this.node;
        ["amount", "margin", "root"].some(YE(e, t)) && this.startObserver()
    }
    unmount() {}
}
;
function YE({viewport: e={}}, {viewport: t={}}={}) {
    return n => e[n] !== t[n]
}
var ry = {
    inView: {
        Feature: XE
    },
    tap: {
        Feature: NE
    },
    focus: {
        Feature: zE
    },
    hover: {
        Feature: BE
    }
}
  , iy = class {
    constructor(e, t, {transformPagePoint: n, contextWindow: r, dragSnapToOrigin: i=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = I,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            let u = Fu(this.lastMoveEventInfo, this.history)
              , f = this.startEvent !== null
              , d = Ng(u.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!f && !d)
                return;
            let {point: m} = u
              , {timestamp: g} = Ee;
            this.history.push({
                ...m,
                timestamp: g
            });
            let {onStart: y, onMove: S} = this.handlers;
            f || (y && y(this.lastMoveEvent, u),
            this.startEvent = this.lastMoveEvent),
            S && S(this.lastMoveEvent, u)
        }
        ,
        this.handlePointerMove = (u, f) => {
            this.lastMoveEvent = u,
            this.lastMoveEventInfo = Iu(f, this.transformPagePoint),
            J.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (u, f) => {
            this.end();
            let {onEnd: d, onSessionEnd: m, resumeAnimation: g} = this.handlers;
            if (this.dragSnapToOrigin && g && g(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            let y = Fu(u.type === "pointercancel" ? this.lastMoveEventInfo : Iu(f, this.transformPagePoint), this.history);
            this.startEvent && d && d(u, y),
            m && m(u, y)
        }
        ,
        !ng(e))
            return;
        this.dragSnapToOrigin = i,
        this.handlers = t,
        this.transformPagePoint = n,
        this.contextWindow = r || I;
        let o = Qa(e)
          , s = Iu(o, this.transformPagePoint)
          , {point: a} = s
          , {timestamp: l} = Ee;
        this.history = [{
            ...a,
            timestamp: l
        }];
        let {onSessionStart: c} = t;
        c && c(e, Fu(s, this.history)),
        this.removeListeners = wn(Sn(this.contextWindow, "pointermove", this.handlePointerMove), Sn(this.contextWindow, "pointerup", this.handlePointerUp), Sn(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(e) {
        this.handlers = e
    }
    end() {
        this.removeListeners && this.removeListeners(),
        ut(this.updatePoint)
    }
}
;
function Iu(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}
function iv(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}
function Fu({point: e}, t) {
    return {
        point: e,
        delta: iv(e, oy(t)),
        offset: iv(e, GE(t)),
        velocity: KE(t, .1)
    }
}
function GE(e) {
    return e[0]
}
function oy(e) {
    return e[e.length - 1]
}
function KE(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = e.length - 1
      , r = null
      , i = oy(e);
    for (; n >= 0 && (r = e[n],
    !(i.timestamp - r.timestamp > kn(t))); )
        n--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    let o = Cn(i.timestamp - r.timestamp);
    if (o === 0)
        return {
            x: 0,
            y: 0
        };
    let s = {
        x: (i.x - r.x) / o,
        y: (i.y - r.y) / o
    };
    return s.x === 1 / 0 && (s.x = 0),
    s.y === 1 / 0 && (s.y = 0),
    s
}
function qE(e, {min: t, max: n}, r) {
    return t !== void 0 && e < t ? e = r ? fe(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? fe(n, e, r.max) : Math.min(e, n)),
    e
}
function ov(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}
function QE(e, {top: t, left: n, bottom: r, right: i}) {
    return {
        x: ov(e.x, n, i),
        y: ov(e.y, t, r)
    }
}
function sv(e, t) {
    let n = t.min - e.min
      , r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n,r] = [r, n]),
    {
        min: n,
        max: r
    }
}
function ZE(e, t) {
    return {
        x: sv(e.x, t.x),
        y: sv(e.y, t.y)
    }
}
function JE(e, t) {
    let n = .5
      , r = Ct(e)
      , i = Ct(t);
    return i > r ? n = pr(t.min, t.max - r, e.min) : r > i && (n = pr(e.min, e.max - i, t.min)),
    Wn(0, 1, n)
}
function eP(e, t) {
    let n = {};
    return t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
}
var qu = .35;
function tP(e=qu) {
    return e === !1 ? e = 0 : e === !0 && (e = qu),
    {
        x: av(e, "left", "right"),
        y: av(e, "top", "bottom")
    }
}
function av(e, t, n) {
    return {
        min: lv(e, t),
        max: lv(e, n)
    }
}
function lv(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
function Ut(e) {
    return [e("x"), e("y")]
}
function sy({top: e, left: t, right: n, bottom: r}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}
function nP({x: e, y: t}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}
function rP(e, t) {
    if (!t)
        return e;
    let n = t({
        x: e.left,
        y: e.top
    })
      , r = t({
        x: e.right,
        y: e.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
function Lu(e) {
    return e === void 0 || e === 1
}
function Qu({scale: e, scaleX: t, scaleY: n}) {
    return !Lu(e) || !Lu(t) || !Lu(n)
}
function qr(e) {
    return Qu(e) || ay(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}
function ay(e) {
    return cv(e.x) || cv(e.y)
}
function cv(e) {
    return e && e !== "0%"
}
function ja(e, t, n) {
    let r = e - n
      , i = t * r;
    return n + i
}
function uv(e, t, n, r, i) {
    return i !== void 0 && (e = ja(e, i, r)),
    ja(e, n, r) + t
}
function Zu(e, t=0, n=1, r, i) {
    e.min = uv(e.min, t, n, r, i),
    e.max = uv(e.max, t, n, r, i)
}
function ly(e, {x: t, y: n}) {
    Zu(e.x, t.translate, t.scale, t.originPoint),
    Zu(e.y, n.translate, n.scale, n.originPoint)
}
function iP(e, t, n, r=!1) {
    let i = n.length;
    if (!i)
        return;
    t.x = t.y = 1;
    let o, s;
    for (let a = 0; a < i; a++) {
        o = n[a],
        s = o.projectionDelta;
        let l = o.instance;
        l && l.style && l.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && Mi(e, {
            x: -o.scroll.offset.x,
            y: -o.scroll.offset.y
        }),
        s && (t.x *= s.x.scale,
        t.y *= s.y.scale,
        ly(e, s)),
        r && qr(o.latestValues) && Mi(e, o.latestValues))
    }
    t.x = fv(t.x),
    t.y = fv(t.y)
}
function fv(e) {
    return Number.isInteger(e) || e > 1.0000000000001 || e < .999999999999 ? e : 1
}
function dr(e, t) {
    e.min = e.min + t,
    e.max = e.max + t
}
function dv(e, t, [n,r,i]) {
    let o = t[i] !== void 0 ? t[i] : .5
      , s = fe(e.min, e.max, o);
    Zu(e, t[n], t[r], s, t.scale)
}
var oP = ["x", "scaleX", "originX"]
  , sP = ["y", "scaleY", "originY"];
function Mi(e, t) {
    dv(e.x, t, oP),
    dv(e.y, t, sP)
}
function cy(e, t) {
    return sy(rP(e.getBoundingClientRect(), t))
}
function aP(e, t, n) {
    let r = cy(e, n)
      , {scroll: i} = t;
    return i && (dr(r.x, i.offset.x),
    dr(r.y, i.offset.y)),
    r
}
var uy = ({current: e}) => e ? e.ownerDocument.defaultView : null
  , lP = new WeakMap
  , cP = class {
    constructor(e) {
        this.openGlobalLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = Te(),
        this.visualElement = e
    }
    start(e, {snapToCursor: t=!1}={}) {
        let {presenceContext: n} = this.visualElement;
        if (n && n.isPresent === !1)
            return;
        let r = c => {
            let {dragSnapToOrigin: u} = this.getProps();
            u ? this.pauseAnimation() : this.stopAnimation(),
            t && this.snapToCursor(Qa(c, "page").point)
        }
          , i = (c, u) => {
            let {drag: f, dragPropagation: d, onDragStart: m} = this.getProps();
            if (f && !d && (this.openGlobalLock && this.openGlobalLock(),
            this.openGlobalLock = og(f),
            !this.openGlobalLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            Ut(y => {
                let S = this.getAxisMotionValue(y).get() || 0;
                if (xn.test(S)) {
                    let {projection: h} = this.visualElement;
                    if (h && h.layout) {
                        let p = h.layout.layoutBox[y];
                        p && (S = Ct(p) * (parseFloat(S) / 100))
                    }
                }
                this.originPoint[y] = S
            }
            ),
            m && m(c, u);
            let {animationState: g} = this.visualElement;
            g && g.setActive("whileDrag", !0)
        }
          , o = (c, u) => {
            let {dragPropagation: f, dragDirectionLock: d, onDirectionLock: m, onDrag: g} = this.getProps();
            if (!f && !this.openGlobalLock)
                return;
            let {offset: y} = u;
            if (d && this.currentDirection === null) {
                this.currentDirection = uP(y),
                this.currentDirection !== null && m && m(this.currentDirection);
                return
            }
            this.updateAxis("x", u.point, y),
            this.updateAxis("y", u.point, y),
            this.visualElement.render(),
            g && g(c, u)
        }
          , s = (c, u) => this.stop(c, u)
          , a = () => Ut(c => {
            var u;
            return this.getAnimationState(c) === "paused" && ((u = this.getAxisMotionValue(c).animation) === null || u === void 0 ? void 0 : u.play())
        }
        )
          , {dragSnapToOrigin: l} = this.getProps();
        this.panSession = new iy(e,{
            onSessionStart: r,
            onStart: i,
            onMove: o,
            onSessionEnd: s,
            resumeAnimation: a
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: l,
            contextWindow: uy(this.visualElement)
        })
    }
    stop(e, t) {
        let n = this.isDragging;
        if (this.cancel(),
        !n)
            return;
        let {velocity: r} = t;
        this.startAnimation(r);
        let {onDragEnd: i} = this.getProps();
        i && i(e, t)
    }
    cancel() {
        this.isDragging = !1;
        let {projection: e, animationState: t} = this.visualElement;
        e && (e.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        let {dragPropagation: n} = this.getProps();
        !n && this.openGlobalLock && (this.openGlobalLock(),
        this.openGlobalLock = null),
        t && t.setActive("whileDrag", !1)
    }
    updateAxis(e, t, n) {
        let {drag: r} = this.getProps();
        if (!n || !Ia(e, r, this.currentDirection))
            return;
        let i = this.getAxisMotionValue(e)
          , o = this.originPoint[e] + n[e];
        this.constraints && this.constraints[e] && (o = qE(o, this.constraints[e], this.elastic[e])),
        i.set(o)
    }
    resolveConstraints() {
        var e;
        let {dragConstraints: t, dragElastic: n} = this.getProps()
          , r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout
          , i = this.constraints;
        t && Ii(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = QE(r.layoutBox, t) : this.constraints = !1,
        this.elastic = tP(n),
        i !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && Ut(o => {
            this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = eP(r.layoutBox[o], this.constraints[o]))
        }
        )
    }
    resolveRefConstraints() {
        let {dragConstraints: e, onMeasureDragConstraints: t} = this.getProps();
        if (!e || !Ii(e))
            return !1;
        let n = e.current;
        kt(n !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
        let {projection: r} = this.visualElement;
        if (!r || !r.layout)
            return !1;
        let i = aP(n, r.root, this.visualElement.getTransformPagePoint())
          , o = ZE(r.layout.layoutBox, i);
        if (t) {
            let s = t(nP(o));
            this.hasMutatedConstraints = !!s,
            s && (o = sy(s))
        }
        return o
    }
    startAnimation(e) {
        let {drag: t, dragMomentum: n, dragElastic: r, dragTransition: i, dragSnapToOrigin: o, onDragTransitionEnd: s} = this.getProps()
          , a = this.constraints || {}
          , l = Ut(c => {
            if (!Ia(c, t, this.currentDirection))
                return;
            let u = a && a[c] || {};
            o && (u = {
                min: 0,
                max: 0
            });
            let f = r ? 200 : 1e6
              , d = r ? 40 : 1e7
              , m = {
                type: "inertia",
                velocity: n ? e[c] : 0,
                bounceStiffness: f,
                bounceDamping: d,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...i,
                ...u
            };
            return this.startAxisValueAnimation(c, m)
        }
        );
        return Promise.all(l).then(s)
    }
    startAxisValueAnimation(e, t) {
        let n = this.getAxisMotionValue(e);
        return n.start(Ff(e, n, 0, t, this.visualElement))
    }
    stopAnimation() {
        Ut(e => this.getAxisMotionValue(e).stop())
    }
    pauseAnimation() {
        Ut(e => {
            var t;
            return (t = this.getAxisMotionValue(e).animation) === null || t === void 0 ? void 0 : t.pause()
        }
        )
    }
    getAnimationState(e) {
        var t;
        return (t = this.getAxisMotionValue(e).animation) === null || t === void 0 ? void 0 : t.state
    }
    getAxisMotionValue(e) {
        let t = `_drag${e.toUpperCase()}`
          , n = this.visualElement.getProps()
          , r = n[t];
        return r || this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0)
    }
    snapToCursor(e) {
        Ut(t => {
            let {drag: n} = this.getProps();
            if (!Ia(t, n, this.currentDirection))
                return;
            let {projection: r} = this.visualElement
              , i = this.getAxisMotionValue(t);
            if (r && r.layout) {
                let {min: o, max: s} = r.layout.layoutBox[t];
                i.set(e[t] - fe(o, s, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        let {drag: e, dragConstraints: t} = this.getProps()
          , {projection: n} = this.visualElement;
        if (!Ii(t) || !n || !this.constraints)
            return;
        this.stopAnimation();
        let r = {
            x: 0,
            y: 0
        };
        Ut(o => {
            let s = this.getAxisMotionValue(o);
            if (s && this.constraints !== !1) {
                let a = s.get();
                r[o] = JE({
                    min: a,
                    max: a
                }, this.constraints[o])
            }
        }
        );
        let {transformTemplate: i} = this.visualElement.getProps();
        this.visualElement.current.style.transform = i ? i({}, "") : "none",
        n.root && n.root.updateScroll(),
        n.updateLayout(),
        this.resolveConstraints(),
        Ut(o => {
            if (!Ia(o, e, null))
                return;
            let s = this.getAxisMotionValue(o)
              , {min: a, max: l} = this.constraints[o];
            s.set(fe(a, l, r[o]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        lP.set(this.visualElement, this);
        let e = this.visualElement.current
          , t = Sn(e, "pointerdown", a => {
            let {drag: l, dragListener: c=!0} = this.getProps();
            l && c && this.start(a)
        }
        )
          , n = () => {
            let {dragConstraints: a} = this.getProps();
            Ii(a) && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: r} = this.visualElement
          , i = r.addEventListener("measure", n);
        r && !r.layout && (r.root && r.root.updateScroll(),
        r.updateLayout()),
        n();
        let o = jn(I, "resize", () => this.scalePositionWithinConstraints())
          , s = r.addEventListener("didUpdate", ({delta: a, hasLayoutChanged: l}) => {
            this.isDragging && l && (Ut(c => {
                let u = this.getAxisMotionValue(c);
                u && (this.originPoint[c] += a[c].translate,
                u.set(u.get() + a[c].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            o(),
            t(),
            i(),
            s && s()
        }
    }
    getProps() {
        let e = this.visualElement.getProps()
          , {drag: t=!1, dragDirectionLock: n=!1, dragPropagation: r=!1, dragConstraints: i=!1, dragElastic: o=qu, dragMomentum: s=!0} = e;
        return {
            ...e,
            drag: t,
            dragDirectionLock: n,
            dragPropagation: r,
            dragConstraints: i,
            dragElastic: o,
            dragMomentum: s
        }
    }
}
;
function Ia(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}
function uP(e, t=10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"),
    n
}
var fP = class extends vr {
    constructor(e) {
        super(e),
        this.removeGroupControls = qe,
        this.removeListeners = qe,
        this.controls = new cP(e)
    }
    mount() {
        let {dragControls: e} = this.node.getProps();
        e && (this.removeGroupControls = e.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || qe
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
  , hv = e => (t, n) => {
    e && e(t, n)
}
  , dP = class extends vr {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = qe
    }
    onPointerDown(e) {
        this.session = new iy(e,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: uy(this.node)
        })
    }
    createPanHandlers() {
        let {onPanSessionStart: e, onPanStart: t, onPan: n, onPanEnd: r} = this.node.getProps();
        return {
            onSessionStart: hv(e),
            onStart: hv(t),
            onMove: n,
            onEnd: (i, o) => {
                delete this.session,
                r && r(i, o)
            }
        }
    }
    mount() {
        this.removePointerDownListener = Sn(this.node.current, "pointerdown", e => this.onPointerDown(e))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
  , Ma = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function pv(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
var Mo = {
    correct: (e, t) => {
        if (!t.target)
            return e;
        if (typeof e == "string")
            if (N.test(e))
                e = parseFloat(e);
            else
                return e;
        let n = pv(e, t.target.x)
          , r = pv(e, t.target.y);
        return `${n}% ${r}%`
    }
}
  , hP = {
    correct: (e, {treeScale: t, projectionDelta: n}) => {
        let r = e
          , i = Un.parse(e);
        if (i.length > 5)
            return r;
        let o = Un.createTransformer(e)
          , s = typeof i[0] != "number" ? 1 : 0
          , a = n.x.scale * t.x
          , l = n.y.scale * t.y;
        i[0 + s] /= a,
        i[1 + s] /= l;
        let c = fe(a, l, .5);
        return typeof i[2 + s] == "number" && (i[2 + s] /= c),
        typeof i[3 + s] == "number" && (i[3 + s] /= c),
        o(i)
    }
}
  , pP = class extends me {
    componentDidMount() {
        let {visualElement: e, layoutGroup: t, switchLayoutGroup: n, layoutId: r} = this.props
          , {projection: i} = e;
        cf(mP),
        i && (t.group && t.group.add(i),
        n && n.register && r && n.register(i),
        i.root.didUpdate(),
        i.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        i.setOptions({
            ...i.options,
            onExitComplete: () => this.safeToRemove()
        })),
        Ma.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(e) {
        let {layoutDependency: t, visualElement: n, drag: r, isPresent: i} = this.props
          , o = n.projection;
        return o && (o.isPresent = i,
        r || e.layoutDependency !== t || t === void 0 ? o.willUpdate() : this.safeToRemove(),
        e.isPresent !== i && (i ? o.promote() : o.relegate() || J.postRender( () => {
            let s = o.getStack();
            (!s || !s.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        let {projection: e} = this.props.visualElement;
        e && (e.root.didUpdate(),
        of.postRender( () => {
            !e.currentAnimation && e.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        let {visualElement: e, layoutGroup: t, switchLayoutGroup: n} = this.props
          , {projection: r} = e;
        r && (r.scheduleCheckAfterUnmount(),
        t && t.group && t.group.remove(r),
        n && n.deregister && n.deregister(r))
    }
    safeToRemove() {
        let {safeToRemove: e} = this.props;
        e && e()
    }
    render() {
        return null
    }
}
;
function fy(e) {
    let[t,n] = Af()
      , r = M(jo);
    return k(pP, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: M(Ya),
        isPresent: t,
        safeToRemove: n
    })
}
var mP = {
    borderRadius: {
        ...Mo,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: Mo,
    borderTopRightRadius: Mo,
    borderBottomLeftRadius: Mo,
    borderBottomRightRadius: Mo,
    boxShadow: hP
}
  , dy = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , vP = dy.length
  , mv = e => typeof e == "string" ? parseFloat(e) : e
  , vv = e => typeof e == "number" || N.test(e);
function gP(e, t, n, r, i, o) {
    i ? (e.opacity = fe(0, n.opacity !== void 0 ? n.opacity : 1, yP(r)),
    e.opacityExit = fe(t.opacity !== void 0 ? t.opacity : 1, 0, bP(r))) : o && (e.opacity = fe(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let s = 0; s < vP; s++) {
        let a = `border${dy[s]}Radius`
          , l = gv(t, a)
          , c = gv(n, a);
        if (l === void 0 && c === void 0)
            continue;
        l || (l = 0),
        c || (c = 0),
        l === 0 || c === 0 || vv(l) === vv(c) ? (e[a] = Math.max(fe(mv(l), mv(c), r), 0),
        (xn.test(c) || xn.test(l)) && (e[a] += "%")) : e[a] = c
    }
    (t.rotate || n.rotate) && (e.rotate = fe(t.rotate || 0, n.rotate || 0, r))
}
function gv(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
var yP = hy(0, .5, yf)
  , bP = hy(.5, .95, qe);
function hy(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(pr(e, t, r))
}
function yv(e, t) {
    e.min = t.min,
    e.max = t.max
}
function Wt(e, t) {
    yv(e.x, t.x),
    yv(e.y, t.y)
}
function bv(e, t, n, r, i) {
    return e -= t,
    e = ja(e, 1 / n, r),
    i !== void 0 && (e = ja(e, 1 / i, r)),
    e
}
function xP(e, t=0, n=1, r=.5, i, o=e, s=e) {
    if (xn.test(t) && (t = parseFloat(t),
    t = fe(s.min, s.max, t / 100) - s.min),
    typeof t != "number")
        return;
    let a = fe(o.min, o.max, r);
    e === o && (a -= t),
    e.min = bv(e.min, t, n, a, i),
    e.max = bv(e.max, t, n, a, i)
}
function xv(e, t, [n,r,i], o, s) {
    xP(e, t[n], t[r], t[i], t.scale, o, s)
}
var SP = ["x", "scaleX", "originX"]
  , wP = ["y", "scaleY", "originY"];
function Sv(e, t, n, r) {
    xv(e.x, t, SP, n ? n.x : void 0, r ? r.x : void 0),
    xv(e.y, t, wP, n ? n.y : void 0, r ? r.y : void 0)
}
function wv(e) {
    return e.translate === 0 && e.scale === 1
}
function py(e) {
    return wv(e.x) && wv(e.y)
}
function kP(e, t) {
    return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
}
function my(e, t) {
    return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max)
}
function kv(e) {
    return Ct(e.x) / Ct(e.y)
}
var CP = class {
    constructor() {
        this.members = []
    }
    add(e) {
        Rf(this.members, e),
        e.scheduleRender()
    }
    remove(e) {
        if (nl(this.members, e),
        e === this.prevLead && (this.prevLead = void 0),
        e === this.lead) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t)
        }
    }
    relegate(e) {
        let t = this.members.findIndex(r => e === r);
        if (t === 0)
            return !1;
        let n;
        for (let r = t; r >= 0; r--) {
            let i = this.members[r];
            if (i.isPresent !== !1) {
                n = i;
                break
            }
        }
        return n ? (this.promote(n),
        !0) : !1
    }
    promote(e, t) {
        let n = this.lead;
        if (e !== n && (this.prevLead = n,
        this.lead = e,
        e.show(),
        n)) {
            n.instance && n.scheduleRender(),
            e.scheduleRender(),
            e.resumeFrom = n,
            t && (e.resumeFrom.preserveOpacity = !0),
            n.snapshot && (e.snapshot = n.snapshot,
            e.snapshot.latestValues = n.animationValues || n.latestValues),
            e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            let {crossfade: r} = e.options;
            r === !1 && n.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(e => {
            let {options: t, resumingFrom: n} = e;
            t.onExitComplete && t.onExitComplete(),
            n && n.options.onExitComplete && n.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(e => {
            e.instance && e.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
;
function Cv(e, t, n) {
    let r = ""
      , i = e.x.translate / t.x
      , o = e.y.translate / t.y
      , s = n?.z || 0;
    if ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n) {
        let {transformPerspective: c, rotate: u, rotateX: f, rotateY: d, skewX: m, skewY: g} = n;
        c && (r = `perspective(${c}px) ${r}`),
        u && (r += `rotate(${u}deg) `),
        f && (r += `rotateX(${f}deg) `),
        d && (r += `rotateY(${d}deg) `),
        m && (r += `skewX(${m}deg) `),
        g && (r += `skewY(${g}deg) `)
    }
    let a = e.x.scale * t.x
      , l = e.y.scale * t.y;
    return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`),
    r || "none"
}
function TP(e) {
    I.MotionDebug && I.MotionDebug.record(e)
}
function vy(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}
function Wf(e, t, n) {
    let r = ve(e) ? e : Pe(e);
    return r.start(Ff("", r, t, n)),
    r.animation
}
var Mu = ["", "X", "Y", "Z"]
  , EP = {
    visibility: "hidden"
}
  , Tv = 1e3
  , PP = 0
  , Qr = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
};
function Ou(e, t, n, r) {
    let {latestValues: i} = t;
    i[e] && (n[e] = i[e],
    t.setStaticValue(e, 0),
    r && (r[e] = 0))
}
function gy({attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i}) {
    return class {
        constructor(s={}, a=t?.()) {
            this.id = PP++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                Qr.totalNodes = Qr.resolvedTargetDeltas = Qr.recalculatedProjection = 0,
                this.nodes.forEach(IP),
                this.nodes.forEach(DP),
                this.nodes.forEach(AP),
                this.nodes.forEach(FP),
                TP(Qr)
            }
            ,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = s,
            this.root = a ? a.root || a : this,
            this.path = a ? [...a.path, a] : [],
            this.parent = a,
            this.depth = a ? a.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++)
                this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new $g)
        }
        addEventListener(s, a) {
            return this.eventHandlers.has(s) || this.eventHandlers.set(s, new _f),
            this.eventHandlers.get(s).add(a)
        }
        notifyListeners(s, ...a) {
            let l = this.eventHandlers.get(s);
            l && l.notify(...a)
        }
        hasListeners(s) {
            return this.eventHandlers.has(s)
        }
        mount(s, a=this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = vy(s),
            this.instance = s;
            let {layoutId: l, layout: c, visualElement: u} = this.options;
            if (u && !u.current && u.mount(s),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            a && (c || l) && (this.isLayoutDirty = !0),
            e) {
                let f, d = () => this.root.updateBlockedByResize = !1;
                e(s, () => {
                    this.root.updateBlockedByResize = !0,
                    f && f(),
                    f = Hg(d, 250),
                    Ma.hasAnimatedSinceResize && (Ma.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(Pv))
                }
                )
            }
            l && this.root.registerSharedNode(l, this),
            this.options.animate !== !1 && u && (l || c) && this.addEventListener("didUpdate", ({delta: f, hasLayoutChanged: d, hasRelativeTargetChanged: m, layout: g}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                let y = this.options.transition || u.getDefaultTransition() || $P
                  , {onLayoutAnimationStart: S, onLayoutAnimationComplete: h} = u.getProps()
                  , p = !this.targetLayout || !my(this.targetLayout, g) || m
                  , v = !d && m;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || v || d && (p || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(f, v);
                    let x = {
                        ...If(y, "layout"),
                        onPlay: S,
                        onComplete: h
                    };
                    (u.shouldReduceMotion || this.options.layoutRoot) && (x.delay = 0,
                    x.type = !1),
                    this.startAnimation(x)
                } else
                    d || Pv(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = g
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            let s = this.getStack();
            s && s.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            ut(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(VP),
            this.animationId++)
        }
        getTransformTemplate() {
            let {visualElement: s} = this.options;
            return s && s.getProps().transformTemplate
        }
        willUpdate(s=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (!this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let u = 0; u < this.path.length; u++) {
                let f = this.path[u];
                f.shouldResetTransform = !0,
                f.updateScroll("snapshot"),
                f.options.layoutRoot && f.willUpdate(!1)
            }
            let {layoutId: a, layout: l} = this.options;
            if (a === void 0 && !l)
                return;
            let c = this.getTransformTemplate();
            this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            s && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(Ev);
                return
            }
            this.isUpdating || this.nodes.forEach(MP),
            this.isUpdating = !1,
            I.HandoffCancelAllAnimations && I.HandoffCancelAllAnimations(),
            this.nodes.forEach(OP),
            this.nodes.forEach(RP),
            this.nodes.forEach(_P),
            this.clearAllSnapshots();
            let a = hr.now();
            Ee.delta = Wn(0, 1e3 / 60, a - Ee.timestamp),
            Ee.timestamp = a,
            Ee.isProcessing = !0,
            Fa.update.process(Ee),
            Fa.preRender.process(Ee),
            Fa.render.process(Ee),
            Ee.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            of.read( () => this.update()))
        }
        clearAllSnapshots() {
            this.nodes.forEach(LP),
            this.sharedNodes.forEach(BP)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            J.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            J.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++)
                    this.path[l].updateScroll();
            let s = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = Te(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            let {visualElement: a} = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0)
        }
        updateScroll(s="measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (a = !1),
            a && (this.scroll = {
                animationId: this.root.animationId,
                phase: s,
                isRoot: r(this.instance),
                offset: n(this.instance)
            })
        }
        resetTransform() {
            if (!i)
                return;
            let s = this.isLayoutDirty || this.shouldResetTransform
              , a = this.projectionDelta && !py(this.projectionDelta)
              , l = this.getTransformTemplate()
              , c = l ? l(this.latestValues, "") : void 0
              , u = c !== this.prevTransformTemplateValue;
            s && (a || qr(this.latestValues) || u) && (i(this.instance, c),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(s=!0) {
            let a = this.measurePageBox()
              , l = this.removeElementScroll(a);
            return s && (l = this.removeTransform(l)),
            HP(l),
            {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            let {visualElement: s} = this.options;
            if (!s)
                return Te();
            let a = s.measureViewportBox()
              , {scroll: l} = this.root;
            return l && (dr(a.x, l.offset.x),
            dr(a.y, l.offset.y)),
            a
        }
        removeElementScroll(s) {
            let a = Te();
            Wt(a, s);
            for (let l = 0; l < this.path.length; l++) {
                let c = this.path[l]
                  , {scroll: u, options: f} = c;
                if (c !== this.root && u && f.layoutScroll) {
                    if (u.isRoot) {
                        Wt(a, s);
                        let {scroll: d} = this.root;
                        d && (dr(a.x, -d.offset.x),
                        dr(a.y, -d.offset.y))
                    }
                    dr(a.x, u.offset.x),
                    dr(a.y, u.offset.y)
                }
            }
            return a
        }
        applyTransform(s, a=!1) {
            let l = Te();
            Wt(l, s);
            for (let c = 0; c < this.path.length; c++) {
                let u = this.path[c];
                !a && u.options.layoutScroll && u.scroll && u !== u.root && Mi(l, {
                    x: -u.scroll.offset.x,
                    y: -u.scroll.offset.y
                }),
                qr(u.latestValues) && Mi(l, u.latestValues)
            }
            return qr(this.latestValues) && Mi(l, this.latestValues),
            l
        }
        removeTransform(s) {
            let a = Te();
            Wt(a, s);
            for (let l = 0; l < this.path.length; l++) {
                let c = this.path[l];
                if (!c.instance || !qr(c.latestValues))
                    continue;
                Qu(c.latestValues) && c.updateSnapshot();
                let u = Te()
                  , f = c.measurePageBox();
                Wt(u, f),
                Sv(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u)
            }
            return qr(this.latestValues) && Sv(a, this.latestValues),
            a
        }
        setTargetDelta(s) {
            this.targetDelta = s,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(s) {
            this.options = {
                ...this.options,
                ...s,
                crossfade: s.crossfade !== void 0 ? s.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ee.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(s=!1) {
            var a;
            let l = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
            let c = !!this.resumingFrom || this !== l;
            if (!(s || c && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget))
                return;
            let {layout: f, layoutId: d} = this.options;
            if (!(!this.layout || !(f || d))) {
                if (this.resolvedRelativeTargetAt = Ee.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    let m = this.getClosestProjectingParent();
                    m && m.layout && this.animationProgress !== 1 ? (this.relativeParent = m,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = Te(),
                    this.relativeTargetOrigin = Te(),
                    $o(this.relativeTargetOrigin, this.layout.layoutBox, m.layout.layoutBox),
                    Wt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = Te(),
                    this.targetWithTransforms = Te()),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                    yE(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Wt(this.target, this.layout.layoutBox),
                    ly(this.target, this.targetDelta)) : Wt(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        let m = this.getClosestProjectingParent();
                        m && !!m.resumingFrom == !!this.resumingFrom && !m.options.layoutScroll && m.target && this.animationProgress !== 1 ? (this.relativeParent = m,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = Te(),
                        this.relativeTargetOrigin = Te(),
                        $o(this.relativeTargetOrigin, this.target, m.target),
                        Wt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    Qr.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Qu(this.parent.latestValues) || ay(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var s;
            let a = this.getLead()
              , l = !!this.resumingFrom || this !== a
              , c = !0;
            if ((this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty) && (c = !1),
            l && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1),
            this.resolvedRelativeTargetAt === Ee.timestamp && (c = !1),
            c)
                return;
            let {layout: u, layoutId: f} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(u || f))
                return;
            Wt(this.layoutCorrected, this.layout.layoutBox);
            let d = this.treeScale.x
              , m = this.treeScale.y;
            iP(this.layoutCorrected, this.treeScale, this.path, l),
            a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox,
            a.targetWithTransforms = Te());
            let {target: g} = a;
            if (!g) {
                this.projectionTransform && (this.projectionDelta = Li(),
                this.projectionTransform = "none",
                this.scheduleRender());
                return
            }
            this.projectionDelta || (this.projectionDelta = Li(),
            this.projectionDeltaWithTransform = Li());
            let y = this.projectionTransform;
            No(this.projectionDelta, this.layoutCorrected, g, this.latestValues),
            this.projectionTransform = Cv(this.projectionDelta, this.treeScale),
            (this.projectionTransform !== y || this.treeScale.x !== d || this.treeScale.y !== m) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", g)),
            Qr.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(s=!0) {
            if (this.options.scheduleRender && this.options.scheduleRender(),
            s) {
                let a = this.getStack();
                a && a.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        setAnimationOrigin(s, a=!1) {
            let l = this.snapshot
              , c = l ? l.latestValues : {}
              , u = {
                ...this.latestValues
            }
              , f = Li();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !a;
            let d = Te()
              , m = l ? l.source : void 0
              , g = this.layout ? this.layout.source : void 0
              , y = m !== g
              , S = this.getStack()
              , h = !S || S.members.length <= 1
              , p = !!(y && !h && this.options.crossfade === !0 && !this.path.some(NP));
            this.animationProgress = 0;
            let v;
            this.mixTargetDelta = x => {
                let C = x / 1e3;
                Rv(f.x, s.x, C),
                Rv(f.y, s.y, C),
                this.setTargetDelta(f),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && ($o(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                zP(this.relativeTarget, this.relativeTargetOrigin, d, C),
                v && kP(this.relativeTarget, v) && (this.isProjectionDirty = !1),
                v || (v = Te()),
                Wt(v, this.relativeTarget)),
                y && (this.animationValues = u,
                gP(u, c, this.latestValues, C, p, h)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = C
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(s) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (ut(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = J.update( () => {
                Ma.hasAnimatedSinceResize = !0,
                this.currentAnimation = Wf(0, Tv, {
                    ...s,
                    onUpdate: a => {
                        this.mixTargetDelta(a),
                        s.onUpdate && s.onUpdate(a)
                    }
                    ,
                    onComplete: () => {
                        s.onComplete && s.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            let s = this.getStack();
            s && s.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Tv),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            let s = this.getLead()
              , {targetWithTransforms: a, target: l, layout: c, latestValues: u} = s;
            if (!(!a || !l || !c)) {
                if (this !== s && this.layout && c && yy(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
                    l = this.target || Te();
                    let f = Ct(this.layout.layoutBox.x);
                    l.x.min = s.target.x.min,
                    l.x.max = l.x.min + f;
                    let d = Ct(this.layout.layoutBox.y);
                    l.y.min = s.target.y.min,
                    l.y.max = l.y.min + d
                }
                Wt(a, l),
                Mi(a, u),
                No(this.projectionDeltaWithTransform, this.layoutCorrected, a, u)
            }
        }
        registerSharedNode(s, a) {
            this.sharedNodes.has(s) || this.sharedNodes.set(s, new CP),
            this.sharedNodes.get(s).add(a);
            let c = a.options.initialPromotionConfig;
            a.promote({
                transition: c ? c.transition : void 0,
                preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            let s = this.getStack();
            return s ? s.lead === this : !0
        }
        getLead() {
            var s;
            let {layoutId: a} = this.options;
            return a ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this
        }
        getPrevLead() {
            var s;
            let {layoutId: a} = this.options;
            return a ? (s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead : void 0
        }
        getStack() {
            let {layoutId: s} = this.options;
            if (s)
                return this.root.sharedNodes.get(s)
        }
        promote({needsReset: s, transition: a, preserveFollowOpacity: l}={}) {
            let c = this.getStack();
            c && c.promote(this, l),
            s && (this.projectionDelta = void 0,
            this.needsReset = !0),
            a && this.setOptions({
                transition: a
            })
        }
        relegate() {
            let s = this.getStack();
            return s ? s.relegate(this) : !1
        }
        resetSkewAndRotation() {
            let {visualElement: s} = this.options;
            if (!s)
                return;
            let a = !1
              , {latestValues: l} = s;
            if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0),
            !a)
                return;
            let c = {};
            l.z && Ou("z", s, c, this.animationValues);
            for (let u = 0; u < Mu.length; u++)
                Ou(`rotate${Mu[u]}`, s, c, this.animationValues),
                Ou(`skew${Mu[u]}`, s, c, this.animationValues);
            s.render();
            for (let u in c)
                s.setStaticValue(u, c[u]),
                this.animationValues && (this.animationValues[u] = c[u]);
            s.scheduleRender()
        }
        getProjectionStyles(s) {
            var a, l;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return EP;
            let c = {
                visibility: ""
            }
              , u = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                c.opacity = "",
                c.pointerEvents = rt(s?.pointerEvents) || "",
                c.transform = u ? u(this.latestValues, "") : "none",
                c;
            let f = this.getLead();
            if (!this.projectionDelta || !this.layout || !f.target) {
                let y = {};
                return this.options.layoutId && (y.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                y.pointerEvents = rt(s?.pointerEvents) || ""),
                this.hasProjected && !qr(this.latestValues) && (y.transform = u ? u({}, "") : "none",
                this.hasProjected = !1),
                y
            }
            let d = f.animationValues || f.latestValues;
            this.applyTransformsToTarget(),
            c.transform = Cv(this.projectionDeltaWithTransform, this.treeScale, d),
            u && (c.transform = u(d, c.transform));
            let {x: m, y: g} = this.projectionDelta;
            c.transformOrigin = `${m.origin * 100}% ${g.origin * 100}% 0`,
            f.animationValues ? c.opacity = f === this ? (l = (a = d.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : c.opacity = f === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
            for (let y in Aa) {
                if (d[y] === void 0)
                    continue;
                let {correct: S, applyTo: h} = Aa[y]
                  , p = c.transform === "none" ? d[y] : S(d[y], f);
                if (h) {
                    let v = h.length;
                    for (let x = 0; x < v; x++)
                        c[h[x]] = p
                } else
                    c[y] = p
            }
            return this.options.layoutId && (c.pointerEvents = f === this ? rt(s?.pointerEvents) || "" : "none"),
            c
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(s => {
                var a;
                return (a = s.currentAnimation) === null || a === void 0 ? void 0 : a.stop()
            }
            ),
            this.root.nodes.forEach(Ev),
            this.root.sharedNodes.clear()
        }
    }
}
function RP(e) {
    e.updateLayout()
}
function _P(e) {
    var t;
    let n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        let {layoutBox: r, measuredBox: i} = e.layout
          , {animationType: o} = e.options
          , s = n.source !== e.layout.source;
        o === "size" ? Ut(f => {
            let d = s ? n.measuredBox[f] : n.layoutBox[f]
              , m = Ct(d);
            d.min = r[f].min,
            d.max = d.min + m
        }
        ) : yy(o, n.layoutBox, r) && Ut(f => {
            let d = s ? n.measuredBox[f] : n.layoutBox[f]
              , m = Ct(r[f]);
            d.max = d.min + m,
            e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
            e.relativeTarget[f].max = e.relativeTarget[f].min + m)
        }
        );
        let a = Li();
        No(a, r, n.layoutBox);
        let l = Li();
        s ? No(l, e.applyTransform(i, !0), n.measuredBox) : No(l, r, n.layoutBox);
        let c = !py(a)
          , u = !1;
        if (!e.resumeFrom) {
            let f = e.getClosestProjectingParent();
            if (f && !f.resumeFrom) {
                let {snapshot: d, layout: m} = f;
                if (d && m) {
                    let g = Te();
                    $o(g, n.layoutBox, d.layoutBox);
                    let y = Te();
                    $o(y, r, m.layoutBox),
                    my(g, y) || (u = !0),
                    f.options.layoutRoot && (e.relativeTarget = y,
                    e.relativeTargetOrigin = g,
                    e.relativeParent = f)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: c,
            hasRelativeTargetChanged: u
        })
    } else if (e.isLead()) {
        let {onExitComplete: r} = e.options;
        r && r()
    }
    e.options.transition = void 0
}
function IP(e) {
    Qr.totalNodes++,
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function FP(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function LP(e) {
    e.clearSnapshot()
}
function Ev(e) {
    e.clearMeasurements()
}
function MP(e) {
    e.isLayoutDirty = !1
}
function OP(e) {
    let {visualElement: t} = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform()
}
function Pv(e) {
    e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0,
    e.isProjectionDirty = !0
}
function DP(e) {
    e.resolveTargetDelta()
}
function AP(e) {
    e.calcProjection()
}
function VP(e) {
    e.resetSkewAndRotation()
}
function BP(e) {
    e.removeLeadSnapshot()
}
function Rv(e, t, n) {
    e.translate = fe(t.translate, 0, n),
    e.scale = fe(t.scale, 1, n),
    e.origin = t.origin,
    e.originPoint = t.originPoint
}
function _v(e, t, n, r) {
    e.min = fe(t.min, n.min, r),
    e.max = fe(t.max, n.max, r)
}
function zP(e, t, n, r) {
    _v(e.x, t.x, n.x, r),
    _v(e.y, t.y, n.y, r)
}
function NP(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
var $P = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , Iv = e => typeof Ge < "u" && Ge.userAgent && Ge.userAgent.toLowerCase().includes(e)
  , Fv = Iv("applewebkit/") && !Iv("chrome/") ? Math.round : qe;
function Lv(e) {
    e.min = Fv(e.min),
    e.max = Fv(e.max)
}
function HP(e) {
    Lv(e.x),
    Lv(e.y)
}
function yy(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !Gu(kv(t), kv(n), .2)
}
var jP = gy({
    attachResizeListener: (e, t) => jn(e, "resize", t),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , ti = {
    current: void 0
}
  , by = gy({
    measureScroll: e => ({
        x: e.scrollLeft,
        y: e.scrollTop
    }),
    defaultParent: () => {
        if (!ti.current) {
            let e = new jP({});
            e.mount(I),
            e.setOptions({
                layoutScroll: !0
            }),
            ti.current = e
        }
        return ti.current
    }
    ,
    resetTransform: (e, t) => {
        e.style.transform = t !== void 0 ? t : "none"
    }
    ,
    checkIsScrollRoot: e => I.getComputedStyle(e).position === "fixed"
})
  , xy = {
    pan: {
        Feature: dP
    },
    drag: {
        Feature: fP,
        ProjectionNode: by,
        MeasureLayout: fy
    }
}
  , Sy = class extends Xg {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = Og
    }
    sortInstanceNodePosition(e, t) {
        return e.compareDocumentPosition(t) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(e, t) {
        return e.style ? e.style[t] : void 0
    }
    removeValueFromRenderState(e, {vars: t, style: n}) {
        delete t[e],
        delete n[e]
    }
}
;
function WP(e) {
    return I.getComputedStyle(e)
}
var wy = class extends Sy {
    constructor() {
        super(...arguments),
        this.type = "html"
    }
    readValueFromInstance(e, t) {
        if (ni.has(t)) {
            let n = Ef(t);
            return n && n.default || 0
        } else {
            let n = WP(e)
              , r = (bg(t) ? n.getPropertyValue(t) : n[t]) || 0;
            return typeof r == "string" ? r.trim() : r
        }
    }
    measureInstanceViewportBox(e, {transformPagePoint: t}) {
        return cy(e, t)
    }
    build(e, t, n, r) {
        zf(e, t, n, r.transformTemplate)
    }
    scrapeMotionValuesFromProps(e, t, n) {
        return jf(e, t, n)
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        let {children: e} = this.props;
        ve(e) && (this.childSubscription = e.on("change", t => {
            this.current && (this.current.textContent = `${t}`)
        }
        ))
    }
    renderInstance(e, t, n, r) {
        Qg(e, t, n, r)
    }
}
  , ky = class extends Sy {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1
    }
    getBaseTargetFromProps(e, t) {
        return e[t]
    }
    readValueFromInstance(e, t) {
        if (ni.has(t)) {
            let n = Ef(t);
            return n && n.default || 0
        }
        return t = Zg.has(t) ? t : rf(t),
        e.getAttribute(t)
    }
    measureInstanceViewportBox() {
        return Te()
    }
    scrapeMotionValuesFromProps(e, t, n) {
        return ey(e, t, n)
    }
    build(e, t, n, r) {
        $f(e, t, n, this.isSVGTag, r.transformTemplate)
    }
    renderInstance(e, t, n, r) {
        Jg(e, t, n, r)
    }
    mount(e) {
        this.isSVGTag = Hf(e.tagName),
        super.mount(e)
    }
}
  , Cy = (e, t) => Bf(e) ? new ky(t,{
    enableHardwareAcceleration: !1
}) : new wy(t,{
    allowProjection: e !== Fo,
    enableHardwareAcceleration: !0
})
  , Ty = {
    layout: {
        ProjectionNode: by,
        MeasureLayout: fy
    }
}
  , UP = {
    ...Df,
    ...ry,
    ...xy,
    ...Ty
}
  , ft = Yg( (e, t) => ty(e, t, UP, Cy));
var XP = Yg(ty);
function Ey() {
    let e = D(!1);
    return mr( () => (e.current = !0,
    () => {
        e.current = !1
    }
    ), []),
    e
}
function ol() {
    let e = Ey()
      , [t,n] = St(0)
      , r = le( () => {
        e.current && n(t + 1)
    }
    , [t]);
    return [le( () => J.postRender(r), [r]), t]
}
function Py(e) {
    return $( () => () => e(), [])
}
var YP = class extends me {
    getSnapshotBeforeUpdate(e) {
        let t = this.props.childRef.current;
        if (t && e.isPresent && !this.props.isPresent) {
            let n = this.props.sizeRef.current;
            n.height = t.offsetHeight || 0,
            n.width = t.offsetWidth || 0,
            n.top = t.offsetTop,
            n.left = t.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
;
function GP({children: e, isPresent: t}) {
    let n = Gr()
      , r = D(null)
      , i = D({
        width: 0,
        height: 0,
        top: 0,
        left: 0
    })
      , {nonce: o} = M(Tn);
    return xt( () => {
        let {width: s, height: a, top: l, left: c} = i.current;
        if (t || !r.current || !s || !a)
            return;
        r.current.dataset.motionPopId = n;
        let u = document.createElement("style");
        return o && (u.nonce = o),
        document.head.appendChild(u),
        u.sheet && u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),
        () => {
            document.head.removeChild(u)
        }
    }
    , [t]),
    k(YP, {
        isPresent: t,
        childRef: r,
        sizeRef: i,
        children: rn(e, {
            ref: r
        })
    })
}
var Du = ({children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: o, mode: s}) => {
    let a = Yn(KP)
      , l = Gr()
      , c = ce( () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: u => {
            a.set(u, !0);
            for (let f of a.values())
                if (!f)
                    return;
            r && r()
        }
        ,
        register: u => (a.set(u, !1),
        () => a.delete(u))
    }), o ? [Math.random()] : [n]);
    return ce( () => {
        a.forEach( (u, f) => a.set(f, !1))
    }
    , [n]),
    $( () => {
        !n && !a.size && r && r()
    }
    , [n]),
    s === "popLayout" && (e = k(GP, {
        isPresent: n,
        children: e
    })),
    k(Ai.Provider, {
        value: c,
        children: e
    })
}
;
function KP() {
    return new Map
}
var Zr = e => e.key || "";
function qP(e, t) {
    e.forEach(n => {
        let r = Zr(n);
        t.set(r, n)
    }
    )
}
function QP(e) {
    let t = [];
    return gn.forEach(e, n => {
        yn(n) && t.push(n)
    }
    ),
    t
}
var Uf = ({children: e, custom: t, initial: n=!0, onExitComplete: r, exitBeforeEnter: i, presenceAffectsLayout: o=!0, mode: s="sync"}) => {
    kt(!i, "Replace exitBeforeEnter with mode='wait'");
    let a = M(jo).forceRender || ol()[0]
      , l = Ey()
      , c = QP(e)
      , u = c
      , f = D(new Map).current
      , d = D(u)
      , m = D(new Map).current
      , g = D(!0);
    if (mr( () => {
        g.current = !1,
        qP(c, m),
        d.current = u
    }
    ),
    Py( () => {
        g.current = !0,
        m.clear(),
        f.clear()
    }
    ),
    g.current)
        return k(Ce, {
            children: u.map(p => k(Du, {
                isPresent: !0,
                initial: n ? void 0 : !1,
                presenceAffectsLayout: o,
                mode: s,
                children: p
            }, Zr(p)))
        });
    u = [...u];
    let y = d.current.map(Zr)
      , S = c.map(Zr)
      , h = y.length;
    for (let p = 0; p < h; p++) {
        let v = y[p];
        S.indexOf(v) === -1 && !f.has(v) && f.set(v, void 0)
    }
    return s === "wait" && f.size && (u = []),
    f.forEach( (p, v) => {
        if (S.indexOf(v) !== -1)
            return;
        let x = m.get(v);
        if (!x)
            return;
        let C = y.indexOf(v)
          , w = p;
        w || (w = k(Du, {
            isPresent: !1,
            onExitComplete: () => {
                f.delete(v);
                let E = Array.from(m.keys()).filter(_ => !S.includes(_));
                if (E.forEach(_ => m.delete(_)),
                d.current = c.filter(_ => {
                    let R = Zr(_);
                    return R === v || E.includes(R)
                }
                ),
                !f.size) {
                    if (l.current === !1)
                        return;
                    a(),
                    r && r()
                }
            }
            ,
            custom: t,
            presenceAffectsLayout: o,
            mode: s,
            children: x
        }, Zr(x)),
        f.set(v, w)),
        u.splice(C, 0, w)
    }
    ),
    u = u.map(p => {
        let v = p.key;
        return f.has(v) ? p : k(Du, {
            isPresent: !0,
            presenceAffectsLayout: o,
            mode: s,
            children: p
        }, Zr(p))
    }
    ),
    k(Ce, {
        children: f.size ? u : u.map(p => rn(p))
    })
}
;
function Ry({children: e, isValidProp: t, ...n}) {
    t && eg(t),
    n = {
        ...M(Tn),
        ...n
    },
    n.isStatic = Yn( () => n.isStatic);
    let r = ce( () => n, [JSON.stringify(n.transition), n.transformPagePoint, n.reducedMotion]);
    return k(Tn.Provider, {
        value: r,
        children: e
    })
}
var _y = ye(null)
  , ZP = e => !e.isLayoutDirty && e.willUpdate(!1);
function Mv() {
    let e = new Set
      , t = new WeakMap
      , n = () => e.forEach(ZP);
    return {
        add: r => {
            e.add(r),
            t.set(r, r.addEventListener("willUpdate", n))
        }
        ,
        remove: r => {
            e.delete(r);
            let i = t.get(r);
            i && (i(),
            t.delete(r)),
            n()
        }
        ,
        dirty: n
    }
}
var Iy = e => e === !0
  , JP = e => Iy(e === !0) || e === "id"
  , Fy = ({children: e, id: t, inherit: n=!0}) => {
    let r = M(jo)
      , i = M(_y)
      , [o,s] = ol()
      , a = D(null)
      , l = r.id || i;
    a.current === null && (JP(n) && l && (t = t ? l + "-" + t : l),
    a.current = {
        id: t,
        group: Iy(n) && r.group || Mv()
    });
    let c = ce( () => ({
        ...a.current,
        forceRender: o
    }), [s]);
    return k(jo.Provider, {
        value: c,
        children: e
    })
}
;
function Pn(e) {
    let t = Yn( () => Pe(e))
      , {isStatic: n} = M(Tn);
    if (n) {
        let[,r] = St(e);
        $( () => t.on("change", r), [])
    }
    return t
}
var eR = e => e && typeof e == "object" && e.mix
  , tR = e => eR(e) ? e.mix : void 0;
function Jo(...e) {
    let t = !Array.isArray(e[0])
      , n = t ? 0 : -1
      , r = e[0 + n]
      , i = e[1 + n]
      , o = e[2 + n]
      , s = e[3 + n]
      , a = zi(i, o, {
        mixer: tR(o[0]),
        ...s
    });
    return t ? a(r) : a
}
function Ly(e, t) {
    let n = Pn(t())
      , r = () => n.set(t());
    return r(),
    mr( () => {
        let i = () => J.preRender(r, !1, !0)
          , o = e.map(s => s.on("change", i));
        return () => {
            o.forEach(s => s()),
            ut(r)
        }
    }
    ),
    n
}
function nR(e) {
    zo.current = [],
    e();
    let t = Ly(zo.current, e);
    return zo.current = void 0,
    t
}
function dt(e, t, n, r) {
    if (typeof e == "function")
        return nR(e);
    let i = typeof t == "function" ? t : Jo(t, n, r);
    return Array.isArray(e) ? Ov(e, i) : Ov([e], ([o]) => i(o))
}
function Ov(e, t) {
    let n = Yn( () => []);
    return Ly(e, () => {
        n.length = 0;
        let r = e.length;
        for (let i = 0; i < r; i++)
            n[i] = e[i].get();
        return t(n)
    }
    )
}
var My = ye(null);
function rR(e, t, n, r) {
    if (!r)
        return e;
    let i = e.findIndex(u => u.value === t);
    if (i === -1)
        return e;
    let o = r > 0 ? 1 : -1
      , s = e[i + o];
    if (!s)
        return e;
    let a = e[i]
      , l = s.layout
      , c = fe(l.min, l.max, .5);
    return o === 1 && a.layout.max + n > c || o === -1 && a.layout.min + n < c ? KT(e, i, i + o) : e
}
function iR({children: e, as: t="ul", axis: n="y", onReorder: r, values: i, ...o}, s) {
    let a = Yn( () => ft(t))
      , l = []
      , c = D(!1);
    kt(!!i, "Reorder.Group must be provided a values prop");
    let u = {
        axis: n,
        registerItem: (f, d) => {
            let m = l.findIndex(g => f === g.value);
            m !== -1 ? l[m].layout = d[n] : l.push({
                value: f,
                layout: d[n]
            }),
            l.sort(sR)
        }
        ,
        updateOrder: (f, d, m) => {
            if (c.current)
                return;
            let g = rR(l, f, d, m);
            l !== g && (c.current = !0,
            r(g.map(oR).filter(y => i.indexOf(y) !== -1)))
        }
    };
    return $( () => {
        c.current = !1
    }
    ),
    k(a, {
        ...o,
        ref: s,
        ignoreStrict: !0,
        children: k(My.Provider, {
            value: u,
            children: e
        })
    })
}
var uB = je(iR);
function oR(e) {
    return e.value
}
function sR(e, t) {
    return e.layout.min - t.layout.min
}
function Dv(e, t=0) {
    return ve(e) ? e : Pn(t)
}
function aR({children: e, style: t={}, value: n, as: r="li", onDrag: i, layout: o=!0, ...s}, a) {
    let l = Yn( () => ft(r))
      , c = M(My)
      , u = {
        x: Dv(t.x),
        y: Dv(t.y)
    }
      , f = dt([u.x, u.y], ([y,S]) => y || S ? 1 : "unset");
    kt(!!c, "Reorder.Item must be a child of Reorder.Group");
    let {axis: d, registerItem: m, updateOrder: g} = c;
    return k(l, {
        drag: d,
        ...s,
        dragSnapToOrigin: !0,
        style: {
            ...t,
            x: u.x,
            y: u.y,
            zIndex: f
        },
        layout: o,
        onDrag: (y, S) => {
            let {velocity: h} = S;
            h[d] && g(n, u[d].get(), h[d]),
            i && i(y, S)
        }
        ,
        onLayoutMeasure: y => m(n, y),
        ref: a,
        ignoreStrict: !0,
        children: e
    })
}
var hB = je(aR);
var Oy = {
    renderer: Cy,
    ...Df,
    ...ry
}
  , lR = {
    ...Oy,
    ...xy,
    ...Ty
};
function Xf(e, t={}) {
    let {isStatic: n} = M(Tn)
      , r = D(null)
      , i = Pn(ve(e) ? e.get() : e)
      , o = () => {
        r.current && r.current.stop()
    }
    ;
    return xt( () => i.attach( (s, a) => {
        if (n)
            return a(s);
        let l = r.current;
        return l && l.time === 0 && l.sample(Ee.delta),
        o(),
        r.current = Tf({
            keyframes: [i.get(), s],
            velocity: i.getVelocity(),
            type: "spring",
            restDelta: .001,
            restSpeed: .01,
            ...t,
            onUpdate: a
        }),
        i.get()
    }
    , o), [JSON.stringify(t)]),
    mr( () => {
        if (ve(e))
            return e.on("change", s => i.set(parseFloat(s)))
    }
    , [i]),
    i
}
function sl(e, t, n) {
    var r;
    if (typeof e == "string") {
        let i = document;
        t && (kt(!!t.current, "Scope provided, but no element detected."),
        i = t.current),
        n ? ((r = n[e]) !== null && r !== void 0 || (n[e] = i.querySelectorAll(e)),
        e = n[e]) : e = i.querySelectorAll(e)
    } else
        e instanceof Element && (e = [e]);
    return Array.from(e || [])
}
var Oa = new WeakMap, fr;
function cR(e, t) {
    if (t) {
        let {inlineSize: n, blockSize: r} = t[0];
        return {
            width: n,
            height: r
        }
    } else
        return e instanceof SVGElement && "getBBox"in e ? e.getBBox() : {
            width: e.offsetWidth,
            height: e.offsetHeight
        }
}
function uR({target: e, contentRect: t, borderBoxSize: n}) {
    var r;
    (r = Oa.get(e)) === null || r === void 0 || r.forEach(i => {
        i({
            target: e,
            contentSize: t,
            get size() {
                return cR(e, n)
            }
        })
    }
    )
}
function fR(e) {
    e.forEach(uR)
}
function dR() {
    typeof ResizeObserver > "u" || (fr = new ResizeObserver(fR))
}
function hR(e, t) {
    fr || dR();
    let n = sl(e);
    return n.forEach(r => {
        let i = Oa.get(r);
        i || (i = new Set,
        Oa.set(r, i)),
        i.add(t),
        fr?.observe(r)
    }
    ),
    () => {
        n.forEach(r => {
            let i = Oa.get(r);
            i?.delete(t),
            i?.size || fr?.unobserve(r)
        }
        )
    }
}
var Da = new Set, Ho;
function pR() {
    Ho = () => {
        let e = {
            width: I.innerWidth,
            height: I.innerHeight
        }
          , t = {
            target: I,
            size: e,
            contentSize: e
        };
        Da.forEach(n => n(t))
    }
    ,
    I.addEventListener("resize", Ho)
}
function mR(e) {
    return Da.add(e),
    Ho || pR(),
    () => {
        Da.delete(e),
        !Da.size && Ho && (Ho = void 0)
    }
}
function vR(e, t) {
    return typeof e == "function" ? mR(e) : hR(e, t)
}
var gR = 50
  , Av = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0
})
  , yR = () => ({
    time: 0,
    x: Av(),
    y: Av()
})
  , bR = {
    x: {
        length: "Width",
        position: "Left"
    },
    y: {
        length: "Height",
        position: "Top"
    }
};
function Vv(e, t, n, r) {
    let i = n[t]
      , {length: o, position: s} = bR[t]
      , a = i.current
      , l = n.time;
    i.current = e[`scroll${s}`],
    i.scrollLength = e[`scroll${o}`] - e[`client${o}`],
    i.offset.length = 0,
    i.offset[0] = 0,
    i.offset[1] = i.scrollLength,
    i.progress = pr(0, i.scrollLength, i.current);
    let c = r - l;
    i.velocity = c > gR ? 0 : pf(i.current - a, c)
}
function xR(e, t, n) {
    Vv(e, "x", t, n),
    Vv(e, "y", t, n),
    t.time = n
}
function SR(e, t) {
    let n = {
        x: 0,
        y: 0
    }
      , r = e;
    for (; r && r !== t; )
        if (r instanceof HTMLElement)
            n.x += r.offsetLeft,
            n.y += r.offsetTop,
            r = r.offsetParent;
        else if (r.tagName === "svg") {
            let i = r.getBoundingClientRect();
            r = r.parentElement;
            let o = r.getBoundingClientRect();
            n.x += i.left - o.left,
            n.y += i.top - o.top
        } else if (r instanceof SVGGraphicsElement) {
            let {x: i, y: o} = r.getBBox();
            n.x += i,
            n.y += o;
            let s = null
              , a = r.parentNode;
            for (; !s; )
                a.tagName === "svg" && (s = a),
                a = r.parentNode;
            r = s
        } else
            break;
    return n
}
var wR = {
    Enter: [[0, 1], [1, 1]],
    Exit: [[0, 0], [1, 0]],
    Any: [[1, 0], [0, 1]],
    All: [[0, 0], [1, 1]]
}
  , Ju = {
    start: 0,
    center: .5,
    end: 1
};
function Bv(e, t, n=0) {
    let r = 0;
    if (e in Ju && (e = Ju[e]),
    typeof e == "string") {
        let i = parseFloat(e);
        e.endsWith("px") ? r = i : e.endsWith("%") ? e = i / 100 : e.endsWith("vw") ? r = i / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? r = i / 100 * document.documentElement.clientHeight : e = i
    }
    return typeof e == "number" && (r = t * e),
    n + r
}
var kR = [0, 0];
function CR(e, t, n, r) {
    let i = Array.isArray(e) ? e : kR
      , o = 0
      , s = 0;
    return typeof e == "number" ? i = [e, e] : typeof e == "string" && (e = e.trim(),
    e.includes(" ") ? i = e.split(" ") : i = [e, Ju[e] ? e : "0"]),
    o = Bv(i[0], n, r),
    s = Bv(i[1], t),
    o - s
}
var TR = {
    x: 0,
    y: 0
};
function ER(e) {
    return "getBBox"in e && e.tagName !== "svg" ? e.getBBox() : {
        width: e.clientWidth,
        height: e.clientHeight
    }
}
function PR(e, t, n) {
    let {offset: r=wR.All} = n
      , {target: i=e, axis: o="y"} = n
      , s = o === "y" ? "height" : "width"
      , a = i !== e ? SR(i, e) : TR
      , l = i === e ? {
        width: e.scrollWidth,
        height: e.scrollHeight
    } : ER(i)
      , c = {
        width: e.clientWidth,
        height: e.clientHeight
    };
    t[o].offset.length = 0;
    let u = !t[o].interpolate
      , f = r.length;
    for (let d = 0; d < f; d++) {
        let m = CR(r[d], c[s], l[s], a[o]);
        !u && m !== t[o].interpolatorOffsets[d] && (u = !0),
        t[o].offset[d] = m
    }
    u && (t[o].interpolate = zi(t[o].offset, Cf(r)),
    t[o].interpolatorOffsets = [...t[o].offset]),
    t[o].progress = t[o].interpolate(t[o].current)
}
function RR(e, t=e, n) {
    if (n.x.targetOffset = 0,
    n.y.targetOffset = 0,
    t !== e) {
        let r = t;
        for (; r && r !== e; )
            n.x.targetOffset += r.offsetLeft,
            n.y.targetOffset += r.offsetTop,
            r = r.offsetParent
    }
    n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth,
    n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight,
    n.x.containerLength = e.clientWidth,
    n.y.containerLength = e.clientHeight
}
function _R(e, t, n, r={}) {
    return {
        measure: () => RR(e, r.target, n),
        update: i => {
            xR(e, n, i),
            (r.offset || r.target) && PR(e, n, r)
        }
        ,
        notify: () => t(n)
    }
}
var Oo = new WeakMap
  , zv = new WeakMap
  , Au = new WeakMap
  , Nv = e => e === document.documentElement ? I : e;
function Ni(e, {container: t=document.documentElement, ...n}={}) {
    let r = Au.get(t);
    r || (r = new Set,
    Au.set(t, r));
    let i = yR()
      , o = _R(t, e, i, n);
    if (r.add(o),
    !Oo.has(t)) {
        let a = () => {
            for (let d of r)
                d.measure()
        }
          , l = () => {
            for (let d of r)
                d.update(Ee.timestamp)
        }
          , c = () => {
            for (let d of r)
                d.notify()
        }
          , u = () => {
            J.read(a, !1, !0),
            J.read(l, !1, !0),
            J.update(c, !1, !0)
        }
        ;
        Oo.set(t, u);
        let f = Nv(t);
        I.addEventListener("resize", u, {
            passive: !0
        }),
        t !== document.documentElement && zv.set(t, vR(t, u)),
        f.addEventListener("scroll", u, {
            passive: !0
        })
    }
    let s = Oo.get(t);
    return J.read(s, !1, !0),
    () => {
        var a;
        ut(s);
        let l = Au.get(t);
        if (!l || (l.delete(o),
        l.size))
            return;
        let c = Oo.get(t);
        Oo.delete(t),
        c && (Nv(t).removeEventListener("scroll", c),
        (a = zv.get(t)) === null || a === void 0 || a(),
        I.removeEventListener("resize", c))
    }
}
function $v(e, t) {
    Qo(!!(!t || t.current), `You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)
}
var IR = () => ({
    scrollX: Pe(0),
    scrollY: Pe(0),
    scrollXProgress: Pe(0),
    scrollYProgress: Pe(0)
});
function Dy({container: e, target: t, layoutEffect: n=!0, ...r}={}) {
    let i = Yn(IR);
    return (n ? mr : $)( () => ($v("target", t),
    $v("container", e),
    Ni( ({x: s, y: a}) => {
        i.scrollX.set(s.current),
        i.scrollXProgress.set(s.progress),
        i.scrollY.set(a.current),
        i.scrollYProgress.set(a.progress)
    }
    , {
        ...r,
        container: e?.current || void 0,
        target: t?.current || void 0
    })), [e, t, JSON.stringify(r.offset)]),
    i
}
function FR(e) {
    let t = D(0)
      , {isStatic: n} = M(Tn);
    $( () => {
        if (n)
            return;
        let r = ({timestamp: i, delta: o}) => {
            t.current || (t.current = i),
            e(i - t.current, o)
        }
        ;
        return J.update(r, !0),
        () => ut(r)
    }
    , [e])
}
function Ay() {
    !Vf.current && jg();
    let[e] = St(Ha.current);
    return e
}
function ri() {
    let e = Ay()
      , {reducedMotion: t} = M(Tn);
    return t === "never" ? !1 : t === "always" ? !0 : e
}
function LR(e) {
    e.values.forEach(t => t.stop())
}
function ef(e, t) {
    [...t].reverse().forEach(r => {
        let i = e.getVariant(r);
        i && Lf(e, i),
        e.variantChildren && e.variantChildren.forEach(o => {
            ef(o, t)
        }
        )
    }
    )
}
function MR(e, t) {
    if (Array.isArray(t))
        return ef(e, t);
    if (typeof t == "string")
        return ef(e, [t]);
    Lf(e, t)
}
function Vy() {
    let e = !1
      , t = new Set
      , n = {
        subscribe(r) {
            return t.add(r),
            () => void t.delete(r)
        },
        start(r, i) {
            kt(e, "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");
            let o = [];
            return t.forEach(s => {
                o.push(Of(s, r, {
                    transitionOverride: i
                }))
            }
            ),
            Promise.all(o)
        },
        set(r) {
            return kt(e, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),
            t.forEach(i => {
                MR(i, r)
            }
            )
        },
        stop() {
            t.forEach(r => {
                LR(r)
            }
            )
        },
        mount() {
            return e = !0,
            () => {
                e = !1,
                n.stop()
            }
        }
    };
    return n
}
var By = (e, t, n) => {
    let r = t - e;
    return ((n - e) % r + r) % r + e
}
;
function OR(e, t) {
    let n, r = () => {
        let {currentTime: i} = t
          , s = (i === null ? 0 : i.value) / 100;
        n !== s && e(s),
        n = s
    }
    ;
    return J.update(r, !0),
    () => ut(r)
}
var DR = Dg( () => I.ScrollTimeline !== void 0)
  , zy = class {
    constructor(e) {
        this.animations = e.filter(Boolean)
    }
    then(e, t) {
        return Promise.all(this.animations).then(e).catch(t)
    }
    getAll(e) {
        return this.animations[0][e]
    }
    setAll(e, t) {
        for (let n = 0; n < this.animations.length; n++)
            this.animations[n][e] = t
    }
    attachTimeline(e) {
        let t = this.animations.map(n => {
            if (DR() && n.attachTimeline)
                n.attachTimeline(e);
            else
                return n.pause(),
                OR(r => {
                    n.time = n.duration * r
                }
                , e)
        }
        );
        return () => {
            t.forEach( (n, r) => {
                n && n(),
                this.animations[r].stop()
            }
            )
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(e) {
        this.setAll("time", e)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(e) {
        this.setAll("speed", e)
    }
    get duration() {
        let e = 0;
        for (let t = 0; t < this.animations.length; t++)
            e = Math.max(e, this.animations[t].duration);
        return e
    }
    runAll(e) {
        this.animations.forEach(t => t[e]())
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    stop() {
        this.runAll("stop")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}
;
function AR(e) {
    return typeof e == "object" && !Array.isArray(e)
}
function VR(e) {
    let t = {
        presenceContext: null,
        props: {},
        visualState: {
            renderState: {
                transform: {},
                transformOrigin: {},
                style: {},
                vars: {},
                attrs: {}
            },
            latestValues: {}
        }
    }
      , n = vy(e) ? new ky(t,{
        enableHardwareAcceleration: !1
    }) : new wy(t,{
        enableHardwareAcceleration: !0
    });
    n.mount(e),
    Xn.set(e, n)
}
function BR(e, t=100) {
    let n = Zo({
        keyframes: [0, t],
        ...e
    })
      , r = Math.min(Eg(n), ju);
    return {
        type: "keyframes",
        ease: i => n.next(r * i).value / t,
        duration: Cn(r)
    }
}
function Hv(e, t, n, r) {
    var i;
    return typeof t == "number" ? t : t.startsWith("-") || t.startsWith("+") ? Math.max(0, e + parseFloat(t)) : t === "<" ? n : (i = r.get(t)) !== null && i !== void 0 ? i : e
}
function zR(e, t) {
    return kg(e) ? e[By(0, e.length, t)] : e
}
function NR(e, t, n) {
    for (let r = 0; r < e.length; r++) {
        let i = e[r];
        i.at > t && i.at < n && (nl(e, i),
        r--)
    }
}
function $R(e, t, n, r, i, o) {
    NR(e, i, o);
    for (let s = 0; s < t.length; s++)
        e.push({
            value: t[s],
            at: fe(i, o, r[s]),
            easing: zR(n, s)
        })
}
function HR(e, t) {
    return e.at === t.at ? e.value === null ? 1 : t.value === null ? -1 : 0 : e.at - t.at
}
var jR = "easeInOut";
function WR(e, {defaultTransition: t={}, ...n}={}, r) {
    let i = t.duration || .3
      , o = new Map
      , s = new Map
      , a = {}
      , l = new Map
      , c = 0
      , u = 0
      , f = 0;
    for (let d = 0; d < e.length; d++) {
        let m = e[d];
        if (typeof m == "string") {
            l.set(m, u);
            continue
        } else if (!Array.isArray(m)) {
            l.set(m.name, Hv(u, m.at, c, l));
            continue
        }
        let[g,y,S={}] = m;
        S.at !== void 0 && (u = Hv(u, S.at, c, l));
        let h = 0
          , p = (v, x, C, w=0, T=0) => {
            let E = UR(v)
              , {delay: _=0, times: R=Cf(E), type: B="keyframes", ...A} = x
              , {ease: ne=t.ease || "easeOut", duration: q} = x
              , H = typeof _ == "function" ? _(w, T) : _
              , Z = E.length;
            if (Z <= 2 && B === "spring") {
                let oe = 100;
                if (Z === 2 && GR(E)) {
                    let K = E[1] - E[0];
                    oe = Math.abs(K)
                }
                let Le = {
                    ...A
                };
                q !== void 0 && (Le.duration = kn(q));
                let U = BR(Le, oe);
                ne = U.ease,
                q = U.duration
            }
            q ?? (q = i);
            let ie = u + H
              , G = ie + q;
            R.length === 1 && R[0] === 0 && (R[1] = 1);
            let Y = R.length - E.length;
            Y > 0 && Cg(R, Y),
            E.length === 1 && E.unshift(null),
            $R(C, E, ne, R, ie, G),
            h = Math.max(H + q, h),
            f = Math.max(G, f)
        }
        ;
        if (ve(g)) {
            let v = jv(g, s);
            p(y, S, Wv("default", v))
        } else {
            let v = sl(g, r, a)
              , x = v.length;
            for (let C = 0; C < x; C++) {
                y = y,
                S = S;
                let w = v[C]
                  , T = jv(w, s);
                for (let E in y)
                    p(y[E], XR(S, E), Wv(E, T), C, x)
            }
        }
        c = u,
        u += h
    }
    return s.forEach( (d, m) => {
        for (let g in d) {
            let y = d[g];
            y.sort(HR);
            let S = []
              , h = []
              , p = [];
            for (let x = 0; x < y.length; x++) {
                let {at: C, value: w, easing: T} = y[x];
                S.push(w),
                h.push(pr(0, f, C)),
                p.push(T || "easeOut")
            }
            h[0] !== 0 && (h.unshift(0),
            S.unshift(S[0]),
            p.unshift(jR)),
            h[h.length - 1] !== 1 && (h.push(1),
            S.push(null)),
            o.has(m) || o.set(m, {
                keyframes: {},
                transition: {}
            });
            let v = o.get(m);
            v.keyframes[g] = S,
            v.transition[g] = {
                ...t,
                duration: f,
                ease: p,
                times: h,
                ...n
            }
        }
    }
    ),
    o
}
function jv(e, t) {
    return !t.has(e) && t.set(e, {}),
    t.get(e)
}
function Wv(e, t) {
    return t[e] || (t[e] = []),
    t[e]
}
function UR(e) {
    return Array.isArray(e) ? e : [e]
}
function XR(e, t) {
    return e[t] ? {
        ...e,
        ...e[t]
    } : {
        ...e
    }
}
var YR = e => typeof e == "number"
  , GR = e => e.every(YR);
function Ny(e, t, n, r) {
    let i = sl(e, r)
      , o = i.length;
    kt(!!o, "No valid element provided.");
    let s = [];
    for (let a = 0; a < o; a++) {
        let l = i[a];
        Xn.has(l) || VR(l);
        let c = Xn.get(l)
          , u = {
            ...n
        };
        typeof u.delay == "function" && (u.delay = u.delay(a, o)),
        s.push(...Mf(c, {
            ...t,
            transition: u
        }, {}))
    }
    return new zy(s)
}
var KR = e => Array.isArray(e) && Array.isArray(e[0]);
function qR(e, t, n) {
    let r = [];
    return WR(e, t, n).forEach( ({keyframes: o, transition: s}, a) => {
        let l;
        ve(a) ? l = Wf(a, o.default, s.default) : l = Ny(a, o, s),
        r.push(l)
    }
    ),
    new zy(r)
}
var $y = e => {
    function t(n, r, i) {
        let o;
        return KR(n) ? o = qR(n, r, e) : AR(r) ? o = Ny(n, r, i, e) : o = Wf(n, r, i),
        e && e.animations.push(o),
        o
    }
    return t
}
  , $i = $y();
function Hy() {
    let e = Yn(Vy);
    return mr(e.mount, []),
    e
}
var jy = Hy;
var QR = {
    some: 0,
    all: 1
};
function Wy(e, t, {root: n, margin: r, amount: i="some"}={}) {
    let o = sl(e)
      , s = new WeakMap
      , a = c => {
        c.forEach(u => {
            let f = s.get(u.target);
            if (u.isIntersecting !== !!f)
                if (u.isIntersecting) {
                    let d = t(u);
                    typeof d == "function" ? s.set(u.target, d) : l.unobserve(u.target)
                } else
                    f && (f(u),
                    s.delete(u.target))
        }
        )
    }
      , l = new IntersectionObserver(a,{
        root: n,
        rootMargin: r,
        threshold: typeof i == "number" ? i : QR[i]
    });
    return o.forEach(c => l.observe(c)),
    () => l.disconnect()
}
function ZR(e, {root: t, margin: n, amount: r, once: i=!1}={}) {
    let[o,s] = St(!1);
    return $( () => {
        if (!e.current || i && o)
            return;
        let a = () => (s(!0),
        i ? void 0 : () => s(!1))
          , l = {
            root: t && t.current || void 0,
            margin: n,
            amount: r
        };
        return Wy(e.current, a, l)
    }
    , [t, e, n, i, r]),
    o
}
function Yf(e) {
    return e !== null && typeof e == "object" && lf in e
}
function Uy(e) {
    if (Yf(e))
        return e[lf]
}
function Gf() {
    return JR
}
function JR(e) {
    ti.current && (ti.current.isUpdating = !1,
    ti.current.blockUpdate(),
    e && e())
}
function Xy() {
    let[e,t] = ol()
      , n = Gf()
      , r = D();
    return $( () => {
        J.postRender( () => J.postRender( () => {
            t === r.current && (za.current = !1)
        }
        ))
    }
    , [t]),
    i => {
        n( () => {
            za.current = !0,
            e(),
            i(),
            r.current = t + 1
        }
        )
    }
}
function Yy() {
    return le( () => {
        let t = ti.current;
        t && t.resetTree()
    }
    , [])
}
var Uv = () => ({});
var EB = qa({
    scrapeMotionValuesFromProps: Uv,
    createRenderState: Uv
});
var e_ = Do.reduce( (e, t) => (e[t] = n => ut(n),
e), {});
var DF = {};
gu(DF, {
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => kF,
    createPortal: () => CF,
    createRoot: () => TF,
    default: () => u1,
    findDOMNode: () => EF,
    flushSync: () => PF,
    hydrate: () => RF,
    hydrateRoot: () => _F,
    render: () => IF,
    unmountComponentAtNode: () => FF,
    unstable_batchedUpdates: () => LF,
    unstable_renderSubtreeIntoContainer: () => MF,
    version: () => OF
});
var dl = {};
gu(dl, {
    default: () => j,
    unstable_IdlePriority: () => r_,
    unstable_ImmediatePriority: () => i_,
    unstable_LowPriority: () => o_,
    unstable_NormalPriority: () => s_,
    unstable_Profiling: () => a_,
    unstable_UserBlockingPriority: () => l_,
    unstable_cancelCallback: () => c_,
    unstable_continueExecution: () => u_,
    unstable_forceFrameRate: () => f_,
    unstable_getCurrentPriorityLevel: () => d_,
    unstable_getFirstCallbackNode: () => h_,
    unstable_next: () => p_,
    unstable_now: () => n_,
    unstable_pauseExecution: () => m_,
    unstable_requestPaint: () => v_,
    unstable_runWithPriority: () => g_,
    unstable_scheduleCallback: () => y_,
    unstable_shouldYield: () => b_,
    unstable_wrapCallback: () => x_
});
var j = {};
function Zf(e, t) {
    var n = e.length;
    e.push(t);
    e: for (; 0 < n; ) {
        var r = n - 1 >>> 1
          , i = e[r];
        if (!(0 < al(i, t)))
            break e;
        e[r] = t,
        e[n] = i,
        n = r
    }
}
function sn(e) {
    return e.length === 0 ? null : e[0]
}
function cl(e) {
    if (e.length === 0)
        return null;
    var t = e[0]
      , n = e.pop();
    if (n !== t) {
        e[0] = n;
        e: for (var r = 0, i = e.length, o = i >>> 1; r < o; ) {
            var s = 2 * (r + 1) - 1
              , a = e[s]
              , l = s + 1
              , c = e[l];
            if (0 > al(a, n))
                l < i && 0 > al(c, a) ? (e[r] = c,
                e[l] = n,
                r = l) : (e[r] = a,
                e[s] = n,
                r = s);
            else {
                if (!(l < i && 0 > al(c, n)))
                    break e;
                e[r] = c,
                e[l] = n,
                r = l
            }
        }
    }
    return t
}
function al(e, t) {
    var n = e.sortIndex - t.sortIndex;
    return n !== 0 ? n : e.id - t.id
}
typeof performance == "object" && typeof performance.now == "function" ? (Gy = performance,
j.unstable_now = function() {
    return Gy.now()
}
) : (Kf = Date,
Ky = Kf.now(),
j.unstable_now = function() {
    return Kf.now() - Ky
}
);
var Gy, Kf, Ky, Rn = [], gr = [], t_ = 1, Xt = null, it = 3, ul = !1, ii = !1, ts = !1, Zy = typeof setTimeout == "function" ? setTimeout : null, Jy = typeof clearTimeout == "function" ? clearTimeout : null, qy = typeof setImmediate < "u" ? setImmediate : null;
typeof Ge < "u" && Ge.scheduling !== void 0 && Ge.scheduling.isInputPending !== void 0 && Ge.scheduling.isInputPending.bind(Ge.scheduling);
function Jf(e) {
    for (var t = sn(gr); t !== null; ) {
        if (t.callback === null)
            cl(gr);
        else {
            if (!(t.startTime <= e))
                break;
            cl(gr),
            t.sortIndex = t.expirationTime,
            Zf(Rn, t)
        }
        t = sn(gr)
    }
}
function ed(e) {
    if (ts = !1,
    Jf(e),
    !ii)
        if (sn(Rn) !== null)
            ii = !0,
            nd(td);
        else {
            var t = sn(gr);
            t !== null && rd(ed, t.startTime - e)
        }
}
function td(e, t) {
    ii = !1,
    ts && (ts = !1,
    Jy(ns),
    ns = -1),
    ul = !0;
    var n = it;
    try {
        for (Jf(t),
        Xt = sn(Rn); Xt !== null && (!(Xt.expirationTime > t) || e && !n0()); ) {
            var r = Xt.callback;
            if (typeof r == "function") {
                Xt.callback = null,
                it = Xt.priorityLevel;
                var i = r(Xt.expirationTime <= t);
                t = j.unstable_now(),
                typeof i == "function" ? Xt.callback = i : Xt === sn(Rn) && cl(Rn),
                Jf(t)
            } else
                cl(Rn);
            Xt = sn(Rn)
        }
        if (Xt !== null)
            var o = !0;
        else {
            var s = sn(gr);
            s !== null && rd(ed, s.startTime - t),
            o = !1
        }
        return o
    } finally {
        Xt = null,
        it = n,
        ul = !1
    }
}
var fl = !1
  , ll = null
  , ns = -1
  , e0 = 5
  , t0 = -1;
function n0() {
    return !(j.unstable_now() - t0 < e0)
}
function qf() {
    if (ll !== null) {
        var e = j.unstable_now();
        t0 = e;
        var t = !0;
        try {
            t = ll(!0, e)
        } finally {
            t ? es() : (fl = !1,
            ll = null)
        }
    } else
        fl = !1
}
var es;
typeof qy == "function" ? es = function() {
    qy(qf)
}
: typeof MessageChannel < "u" ? (Qf = new MessageChannel,
Qy = Qf.port2,
Qf.port1.onmessage = qf,
es = function() {
    Qy.postMessage(null)
}
) : es = function() {
    Zy(qf, 0)
}
;
var Qf, Qy;
function nd(e) {
    ll = e,
    fl || (fl = !0,
    es())
}
function rd(e, t) {
    ns = Zy(function() {
        e(j.unstable_now())
    }, t)
}
j.unstable_IdlePriority = 5;
j.unstable_ImmediatePriority = 1;
j.unstable_LowPriority = 4;
j.unstable_NormalPriority = 3;
j.unstable_Profiling = null;
j.unstable_UserBlockingPriority = 2;
j.unstable_cancelCallback = function(e) {
    e.callback = null
}
;
j.unstable_continueExecution = function() {
    ii || ul || (ii = !0,
    nd(td))
}
;
j.unstable_forceFrameRate = function(e) {
    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : e0 = 0 < e ? Math.floor(1e3 / e) : 5
}
;
j.unstable_getCurrentPriorityLevel = function() {
    return it
}
;
j.unstable_getFirstCallbackNode = function() {
    return sn(Rn)
}
;
j.unstable_next = function(e) {
    switch (it) {
    case 1:
    case 2:
    case 3:
        var t = 3;
        break;
    default:
        t = it
    }
    var n = it;
    it = t;
    try {
        return e()
    } finally {
        it = n
    }
}
;
j.unstable_pauseExecution = function() {}
;
j.unstable_requestPaint = function() {}
;
j.unstable_runWithPriority = function(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        break;
    default:
        e = 3
    }
    var n = it;
    it = e;
    try {
        return t()
    } finally {
        it = n
    }
}
;
j.unstable_scheduleCallback = function(e, t, n) {
    var r = j.unstable_now();
    switch (typeof n == "object" && n !== null ? (n = n.delay,
    n = typeof n == "number" && 0 < n ? r + n : r) : n = r,
    e) {
    case 1:
        var i = -1;
        break;
    case 2:
        i = 250;
        break;
    case 5:
        i = 1073741823;
        break;
    case 4:
        i = 1e4;
        break;
    default:
        i = 5e3
    }
    return i = n + i,
    e = {
        id: t_++,
        callback: t,
        priorityLevel: e,
        startTime: n,
        expirationTime: i,
        sortIndex: -1
    },
    n > r ? (e.sortIndex = n,
    Zf(gr, e),
    sn(Rn) === null && e === sn(gr) && (ts ? (Jy(ns),
    ns = -1) : ts = !0,
    rd(ed, n - r))) : (e.sortIndex = i,
    Zf(Rn, e),
    ii || ul || (ii = !0,
    nd(td))),
    e
}
;
j.unstable_shouldYield = n0;
j.unstable_wrapCallback = function(e) {
    var t = it;
    return function() {
        var n = it;
        it = t;
        try {
            return e.apply(this, arguments)
        } finally {
            it = n
        }
    }
}
;
var n_ = j.unstable_now
  , r_ = j.unstable_IdlePriority
  , i_ = j.unstable_ImmediatePriority
  , o_ = j.unstable_LowPriority
  , s_ = j.unstable_NormalPriority
  , a_ = j.unstable_Profiling
  , l_ = j.unstable_UserBlockingPriority
  , c_ = j.unstable_cancelCallback
  , u_ = j.unstable_continueExecution
  , f_ = j.unstable_forceFrameRate
  , d_ = j.unstable_getCurrentPriorityLevel
  , h_ = j.unstable_getFirstCallbackNode
  , p_ = j.unstable_next
  , m_ = j.unstable_pauseExecution
  , v_ = j.unstable_requestPaint
  , g_ = j.unstable_runWithPriority
  , y_ = j.unstable_scheduleCallback
  , b_ = j.unstable_shouldYield
  , x_ = j.unstable_wrapCallback;
var S_ = "default"in wt ? b : wt
  , w_ = "default"in dl ? j : dl
  , Bt = {}
  , cb = S_
  , Vt = w_;
function F(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var ub = new Set
  , Cs = {};
function gi(e, t) {
    lo(e, t),
    lo(e + "Capture", t)
}
function lo(e, t) {
    for (Cs[e] = t,
    e = 0; e < t.length; e++)
        ub.add(t[e])
}
var Jn = !(typeof I > "u" || typeof I.document > "u" || typeof I.document.createElement > "u")
  , Ed = Object.prototype.hasOwnProperty
  , k_ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , r0 = {}
  , i0 = {};
function C_(e) {
    return Ed.call(i0, e) ? !0 : Ed.call(r0, e) ? !1 : k_.test(e) ? i0[e] = !0 : (r0[e] = !0,
    !1)
}
function T_(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function E_(e, t, n, r) {
    if (t === null || typeof t > "u" || T_(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function mt(e, t, n, r, i, o, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = o,
    this.removeEmptyString = s
}
var Je = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Je[e] = new mt(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Je[t] = new mt(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Je[e] = new mt(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Je[e] = new mt(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Je[e] = new mt(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Je[e] = new mt(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    Je[e] = new mt(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Je[e] = new mt(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    Je[e] = new mt(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var gh = /[\-:]([a-z])/g;
function yh(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(gh, yh);
    Je[t] = new mt(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(gh, yh);
    Je[t] = new mt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(gh, yh);
    Je[t] = new mt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Je[e] = new mt(e,1,!1,e.toLowerCase(),null,!1,!1)
});
Je.xlinkHref = new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Je[e] = new mt(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function bh(e, t, n, r) {
    var i = Je.hasOwnProperty(t) ? Je[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (E_(t, n, i, r) && (n = null),
    r || i === null ? C_(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type !== 3 && "" : n : (t = i.attributeName,
    r = i.attributeNamespace,
    n === null ? e.removeAttribute(t) : (i = i.type,
    n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var rr = cb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , hl = Symbol.for("react.element")
  , Wi = Symbol.for("react.portal")
  , Ui = Symbol.for("react.fragment")
  , xh = Symbol.for("react.strict_mode")
  , Pd = Symbol.for("react.profiler")
  , fb = Symbol.for("react.provider")
  , db = Symbol.for("react.context")
  , Sh = Symbol.for("react.forward_ref")
  , Rd = Symbol.for("react.suspense")
  , _d = Symbol.for("react.suspense_list")
  , wh = Symbol.for("react.memo")
  , br = Symbol.for("react.lazy");
Symbol.for("react.scope");
Symbol.for("react.debug_trace_mode");
var hb = Symbol.for("react.offscreen");
Symbol.for("react.legacy_hidden");
Symbol.for("react.cache");
Symbol.for("react.tracing_marker");
var o0 = Symbol.iterator;
function rs(e) {
    return e === null || typeof e != "object" ? null : (e = o0 && e[o0] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var id, Se = Object.assign;
function fs(e) {
    if (id === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            id = t && t[1] || ""
        }
    return `
` + id + e
}
var od = !1;
function sd(e, t) {
    if (!e || od)
        return "";
    od = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (c) {
                    var r = c
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (c) {
                    r = c
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (c) {
                r = c
            }
            e()
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (var i = c.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, a = o.length - 1; 1 <= s && 0 <= a && i[s] !== o[a]; )
                a--;
            for (; 1 <= s && 0 <= a; s--,
            a--)
                if (i[s] !== o[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if (s--,
                            a--,
                            0 > a || i[s] !== o[a]) {
                                var l = `
` + i[s].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= s && 0 <= a);
                    break
                }
        }
    } finally {
        od = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? fs(e) : ""
}
function P_(e) {
    switch (e.tag) {
    case 5:
        return fs(e.type);
    case 16:
        return fs("Lazy");
    case 13:
        return fs("Suspense");
    case 19:
        return fs("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = sd(e.type, !1),
        e;
    case 11:
        return e = sd(e.type.render, !1),
        e;
    case 1:
        return e = sd(e.type, !0),
        e;
    default:
        return ""
    }
}
function Id(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Ui:
        return "Fragment";
    case Wi:
        return "Portal";
    case Pd:
        return "Profiler";
    case xh:
        return "StrictMode";
    case Rd:
        return "Suspense";
    case _d:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case db:
            return (e.displayName || "Context") + ".Consumer";
        case fb:
            return (e._context.displayName || "Context") + ".Provider";
        case Sh:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case wh:
            return t = e.displayName || null,
            t !== null ? t : Id(e.type) || "Memo";
        case br:
            t = e._payload,
            e = e._init;
            try {
                return Id(e(t))
            } catch {}
        }
    return null
}
function R_(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Id(t);
    case 8:
        return t === xh ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Mr(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function pb(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function __(e) {
    var t = pb(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
          , o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(s) {
                r = "" + s,
                o.call(this, s)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function pl(e) {
    e._valueTracker || (e._valueTracker = __(e))
}
function mb(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = pb(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n && (t.setValue(e),
    !0)
}
function Hl(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Fd(e, t) {
    var n = t.checked;
    return Se({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function s0(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Mr(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function vb(e, t) {
    t = t.checked,
    t != null && bh(e, "checked", t, !1)
}
function Ld(e, t) {
    vb(e, t);
    var n = Mr(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Md(e, t.type, n) : t.hasOwnProperty("defaultValue") && Md(e, t.type, Mr(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function a0(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Md(e, t, n) {
    t === "number" && Hl(e.ownerDocument) === e || (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var ds = Array.isArray;
function no(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var i = 0; i < n.length; i++)
            t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            i = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Mr(n),
        t = null,
        i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0,
                r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}
function Od(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(F(91));
    return Se({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function l0(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(F(92));
            if (ds(n)) {
                if (1 < n.length)
                    throw Error(F(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Mr(n)
    }
}
function gb(e, t) {
    var n = Mr(t.value)
      , r = Mr(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function c0(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function yb(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Dd(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? yb(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var ml, bb = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (ml = ml || document.createElement("div"),
        ml.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = ml.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Ts(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var ms = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , I_ = ["Webkit", "ms", "Moz", "O"];
Object.keys(ms).forEach(function(e) {
    I_.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        ms[t] = ms[e]
    })
});
function xb(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ms.hasOwnProperty(e) && ms[e] ? ("" + t).trim() : t + "px"
}
function Sb(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , i = xb(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, i) : e[n] = i
        }
}
var F_ = Se({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Ad(e, t) {
    if (t) {
        if (F_[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(F(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(F(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(F(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(F(62))
    }
}
function Vd(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Bd = null;
function kh(e) {
    return e = e.target || e.srcElement || I,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var zd = null
  , ro = null
  , io = null;
function u0(e) {
    if (e = js(e)) {
        if (typeof zd != "function")
            throw Error(F(280));
        var t = e.stateNode;
        t && (t = vc(t),
        zd(e.stateNode, e.type, t))
    }
}
function wb(e) {
    ro ? io ? io.push(e) : io = [e] : ro = e
}
function kb() {
    if (ro) {
        var e = ro
          , t = io;
        if (io = ro = null,
        u0(e),
        t)
            for (e = 0; e < t.length; e++)
                u0(t[e])
    }
}
function Cb(e, t) {
    return e(t)
}
function Tb() {}
var ad = !1;
function Eb(e, t, n) {
    if (ad)
        return e(t, n);
    ad = !0;
    try {
        return Cb(e, t, n)
    } finally {
        ad = !1,
        (ro !== null || io !== null) && (Tb(),
        kb())
    }
}
function Es(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = vc(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(F(231, t, typeof n));
    return n
}
var Nd = !1;
if (Jn)
    try {
        Hi = {},
        Object.defineProperty(Hi, "passive", {
            get: function() {
                Nd = !0
            }
        }),
        I.addEventListener("test", Hi, Hi),
        I.removeEventListener("test", Hi, Hi)
    } catch {
        Nd = !1
    }
var Hi;
function L_(e, t, n, r, i, o, s, a, l) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c)
    } catch (u) {
        this.onError(u)
    }
}
var vs = !1
  , jl = null
  , Wl = !1
  , $d = null
  , M_ = {
    onError: function(e) {
        vs = !0,
        jl = e
    }
};
function O_(e, t, n, r, i, o, s, a, l) {
    vs = !1,
    jl = null,
    L_.apply(M_, arguments)
}
function D_(e, t, n, r, i, o, s, a, l) {
    if (O_.apply(this, arguments),
    vs) {
        if (!vs)
            throw Error(F(198));
        var c = jl;
        vs = !1,
        jl = null,
        Wl || (Wl = !0,
        $d = c)
    }
}
function yi(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            4098 & t.flags && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Pb(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function f0(e) {
    if (yi(e) !== e)
        throw Error(F(188))
}
function A_(e) {
    var t = e.alternate;
    if (!t) {
        if (t = yi(e),
        t === null)
            throw Error(F(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null)
            break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o; ) {
                if (o === n)
                    return f0(i),
                    e;
                if (o === r)
                    return f0(i),
                    t;
                o = o.sibling
            }
            throw Error(F(188))
        }
        if (n.return !== r.return)
            n = i,
            r = o;
        else {
            for (var s = !1, a = i.child; a; ) {
                if (a === n) {
                    s = !0,
                    n = i,
                    r = o;
                    break
                }
                if (a === r) {
                    s = !0,
                    r = i,
                    n = o;
                    break
                }
                a = a.sibling
            }
            if (!s) {
                for (a = o.child; a; ) {
                    if (a === n) {
                        s = !0,
                        n = o,
                        r = i;
                        break
                    }
                    if (a === r) {
                        s = !0,
                        r = o,
                        n = i;
                        break
                    }
                    a = a.sibling
                }
                if (!s)
                    throw Error(F(189))
            }
        }
        if (n.alternate !== r)
            throw Error(F(190))
    }
    if (n.tag !== 3)
        throw Error(F(188));
    return n.stateNode.current === n ? e : t
}
function Rb(e) {
    return e = A_(e),
    e !== null ? _b(e) : null
}
function _b(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = _b(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Ib = Vt.unstable_scheduleCallback
  , d0 = Vt.unstable_cancelCallback
  , V_ = Vt.unstable_shouldYield
  , B_ = Vt.unstable_requestPaint
  , Me = Vt.unstable_now
  , z_ = Vt.unstable_getCurrentPriorityLevel
  , Ch = Vt.unstable_ImmediatePriority
  , Fb = Vt.unstable_UserBlockingPriority
  , Ul = Vt.unstable_NormalPriority
  , N_ = Vt.unstable_LowPriority
  , Lb = Vt.unstable_IdlePriority
  , dc = null
  , Ln = null;
function $_(e) {
    if (Ln && typeof Ln.onCommitFiberRoot == "function")
        try {
            Ln.onCommitFiberRoot(dc, e, void 0, (128 & e.current.flags) === 128)
        } catch {}
}
var fn = Math.clz32 ? Math.clz32 : W_
  , H_ = Math.log
  , j_ = Math.LN2;
function W_(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (H_(e) / j_ | 0) | 0
}
var vl = 64
  , gl = 4194304;
function hs(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return 4194240 & e;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return 130023424 & e;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Xl(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , i = e.suspendedLanes
      , o = e.pingedLanes
      , s = 268435455 & n;
    if (s !== 0) {
        var a = s & ~i;
        a !== 0 ? r = hs(a) : (o &= s,
        o !== 0 && (r = hs(o)))
    } else
        s = n & ~i,
        s !== 0 ? r = hs(s) : o !== 0 && (r = hs(o));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r,
    o = t & -t,
    i >= o || i === 16 && (4194240 & o) !== 0))
        return t;
    if (4 & r && (r |= 16 & n),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - fn(t),
            i = 1 << n,
            r |= e[n],
            t &= ~i;
    return r
}
function U_(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function X_(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
        var s = 31 - fn(o)
          , a = 1 << s
          , l = i[s];
        l === -1 ? a & n && !(a & r) || (i[s] = U_(a, t)) : l <= t && (e.expiredLanes |= a),
        o &= ~a
    }
}
function Hd(e) {
    return e = -1073741825 & e.pendingLanes,
    e !== 0 ? e : 1073741824 & e ? 1073741824 : 0
}
function Mb() {
    var e = vl;
    return vl <<= 1,
    !(4194240 & vl) && (vl = 64),
    e
}
function ld(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function $s(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - fn(t),
    e[t] = n
}
function Y_(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - fn(n)
          , o = 1 << i;
        t[i] = 0,
        r[i] = -1,
        e[i] = -1,
        n &= ~o
    }
}
function Th(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - fn(n)
          , i = 1 << r;
        i & t | e[r] & t && (e[r] |= t),
        n &= ~i
    }
}
var se = 0;
function Ob(e) {
    return e &= -e,
    1 < e ? 4 < e ? 268435455 & e ? 16 : 536870912 : 4 : 1
}
var Db, Eh, Ab, Vb, Bb, jd = !1, yl = [], Tr = null, Er = null, Pr = null, Ps = new Map, Rs = new Map, Sr = [], G_ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function h0(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Tr = null;
        break;
    case "dragenter":
    case "dragleave":
        Er = null;
        break;
    case "mouseover":
    case "mouseout":
        Pr = null;
        break;
    case "pointerover":
    case "pointerout":
        Ps.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Rs.delete(t.pointerId)
    }
}
function is(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    },
    t !== null && (t = js(t),
    t !== null && Eh(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    i !== null && t.indexOf(i) === -1 && t.push(i),
    e)
}
function K_(e, t, n, r, i) {
    switch (t) {
    case "focusin":
        return Tr = is(Tr, e, t, n, r, i),
        !0;
    case "dragenter":
        return Er = is(Er, e, t, n, r, i),
        !0;
    case "mouseover":
        return Pr = is(Pr, e, t, n, r, i),
        !0;
    case "pointerover":
        var o = i.pointerId;
        return Ps.set(o, is(Ps.get(o) || null, e, t, n, r, i)),
        !0;
    case "gotpointercapture":
        return o = i.pointerId,
        Rs.set(o, is(Rs.get(o) || null, e, t, n, r, i)),
        !0
    }
    return !1
}
function zb(e) {
    var t = ai(e.target);
    if (t !== null) {
        var n = yi(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Pb(n),
                t !== null) {
                    e.blockedOn = t,
                    Bb(e.priority, function() {
                        Ab(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Ll(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Wd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n !== null)
            return t = js(n),
            t !== null && Eh(t),
            e.blockedOn = n,
            !1;
        n = e.nativeEvent;
        var r = new n.constructor(n.type,n);
        Bd = r,
        n.target.dispatchEvent(r),
        Bd = null,
        t.shift()
    }
    return !0
}
function p0(e, t, n) {
    Ll(e) && n.delete(t)
}
function q_() {
    jd = !1,
    Tr !== null && Ll(Tr) && (Tr = null),
    Er !== null && Ll(Er) && (Er = null),
    Pr !== null && Ll(Pr) && (Pr = null),
    Ps.forEach(p0),
    Rs.forEach(p0)
}
function os(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    jd || (jd = !0,
    Vt.unstable_scheduleCallback(Vt.unstable_NormalPriority, q_)))
}
function _s(e) {
    function t(i) {
        return os(i, e)
    }
    if (0 < yl.length) {
        os(yl[0], e);
        for (var n = 1; n < yl.length; n++) {
            var r = yl[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Tr !== null && os(Tr, e),
    Er !== null && os(Er, e),
    Pr !== null && os(Pr, e),
    Ps.forEach(t),
    Rs.forEach(t),
    n = 0; n < Sr.length; n++)
        r = Sr[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Sr.length && (n = Sr[0],
    n.blockedOn === null); )
        zb(n),
        n.blockedOn === null && Sr.shift()
}
var oo = rr.ReactCurrentBatchConfig
  , Yl = !0;
function Q_(e, t, n, r) {
    var i = se
      , o = oo.transition;
    oo.transition = null;
    try {
        se = 1,
        Ph(e, t, n, r)
    } finally {
        se = i,
        oo.transition = o
    }
}
function Z_(e, t, n, r) {
    var i = se
      , o = oo.transition;
    oo.transition = null;
    try {
        se = 4,
        Ph(e, t, n, r)
    } finally {
        se = i,
        oo.transition = o
    }
}
function Ph(e, t, n, r) {
    if (Yl) {
        var i = Wd(e, t, n, r);
        if (i === null)
            md(e, t, r, Gl, n),
            h0(e, r);
        else if (K_(i, e, t, n, r))
            r.stopPropagation();
        else if (h0(e, r),
        4 & t && -1 < G_.indexOf(e)) {
            for (; i !== null; ) {
                var o = js(i);
                if (o !== null && Db(o),
                o = Wd(e, t, n, r),
                o === null && md(e, t, r, Gl, n),
                o === i)
                    break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else
            md(e, t, r, null, n)
    }
}
var Gl = null;
function Wd(e, t, n, r) {
    if (Gl = null,
    e = kh(r),
    e = ai(e),
    e !== null)
        if (t = yi(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Pb(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Gl = e,
    null
}
function Nb(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (z_()) {
        case Ch:
            return 1;
        case Fb:
            return 4;
        case Ul:
        case N_:
            return 16;
        case Lb:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var kr = null
  , Rh = null
  , Ml = null;
function $b() {
    if (Ml)
        return Ml;
    var e, t, n = Rh, r = n.length, i = "value"in kr ? kr.value : kr.textContent, o = i.length;
    for (e = 0; e < r && n[e] === i[e]; e++)
        ;
    var s = r - e;
    for (t = 1; t <= s && n[r - t] === i[o - t]; t++)
        ;
    return Ml = i.slice(e, 1 < t ? 1 - t : void 0)
}
function Ol(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function bl() {
    return !0
}
function m0() {
    return !1
}
function zt(e) {
    function t(n, r, i, o, s) {
        this._reactName = n,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = o,
        this.target = s,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
            this[a] = n ? n(o) : o[a]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? bl : m0,
        this.isPropagationStopped = m0,
        this
    }
    return Se(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = bl)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = bl)
        },
        persist: function() {},
        isPersistent: bl
    }),
    t
}
var cd, ud, ss, vo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, _h = zt(vo), Hs = Se({}, vo, {
    view: 0,
    detail: 0
}), J_ = zt(Hs), hc = Se({}, Hs, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ih,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== ss && (ss && e.type === "mousemove" ? (cd = e.screenX - ss.screenX,
        ud = e.screenY - ss.screenY) : ud = cd = 0,
        ss = e),
        cd)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : ud
    }
}), v0 = zt(hc), eI = Se({}, hc, {
    dataTransfer: 0
}), tI = zt(eI), nI = Se({}, Hs, {
    relatedTarget: 0
}), fd = zt(nI), rI = Se({}, vo, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), iI = zt(rI), oI = Se({}, vo, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : I.clipboardData
    }
}), sI = zt(oI), aI = Se({}, vo, {
    data: 0
}), g0 = zt(aI), lI = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, cI = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
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
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, uI = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function fI(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : !!(e = uI[e]) && !!t[e]
}
function Ih() {
    return fI
}
var dI = Se({}, Hs, {
    key: function(e) {
        if (e.key) {
            var t = lI[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Ol(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? cI[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ih,
    charCode: function(e) {
        return e.type === "keypress" ? Ol(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Ol(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , hI = zt(dI)
  , pI = Se({}, hc, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , y0 = zt(pI)
  , mI = Se({}, Hs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ih
})
  , vI = zt(mI)
  , gI = Se({}, vo, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , yI = zt(gI)
  , bI = Se({}, hc, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , xI = zt(bI)
  , SI = [9, 13, 27, 32]
  , Fh = Jn && "CompositionEvent"in I
  , gs = null;
Jn && "documentMode"in document && (gs = document.documentMode);
var wI = Jn && "TextEvent"in I && !gs
  , Hb = Jn && (!Fh || gs && 8 < gs && 11 >= gs)
  , b0 = String.fromCharCode(32)
  , x0 = !1;
function jb(e, t) {
    switch (e) {
    case "keyup":
        return SI.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Wb(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Xi = !1;
function kI(e, t) {
    switch (e) {
    case "compositionend":
        return Wb(t);
    case "keypress":
        return t.which !== 32 ? null : (x0 = !0,
        b0);
    case "textInput":
        return e = t.data,
        e === b0 && x0 ? null : e;
    default:
        return null
    }
}
function CI(e, t) {
    if (Xi)
        return e === "compositionend" || !Fh && jb(e, t) ? (e = $b(),
        Ml = Rh = kr = null,
        Xi = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Hb && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var TI = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function S0(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!TI[e.type] : t === "textarea"
}
function Ub(e, t, n, r) {
    wb(r),
    t = Kl(t, "onChange"),
    0 < t.length && (n = new _h("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var ys = null
  , Is = null;
function EI(e) {
    nx(e, 0)
}
function pc(e) {
    var t = Ki(e);
    if (mb(t))
        return e
}
function PI(e, t) {
    if (e === "change")
        return t
}
var Xb = !1;
Jn && (Jn ? (Sl = "oninput"in document,
Sl || (dd = document.createElement("div"),
dd.setAttribute("oninput", "return;"),
Sl = typeof dd.oninput == "function"),
xl = Sl) : xl = !1,
Xb = xl && (!document.documentMode || 9 < document.documentMode));
var xl, Sl, dd;
function w0() {
    ys && (ys.detachEvent("onpropertychange", Yb),
    Is = ys = null)
}
function Yb(e) {
    if (e.propertyName === "value" && pc(Is)) {
        var t = [];
        Ub(t, Is, e, kh(e)),
        Eb(EI, t)
    }
}
function RI(e, t, n) {
    e === "focusin" ? (w0(),
    ys = t,
    Is = n,
    ys.attachEvent("onpropertychange", Yb)) : e === "focusout" && w0()
}
function _I(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return pc(Is)
}
function II(e, t) {
    if (e === "click")
        return pc(t)
}
function FI(e, t) {
    if (e === "input" || e === "change")
        return pc(t)
}
function LI(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var hn = typeof Object.is == "function" ? Object.is : LI;
function Fs(e, t) {
    if (hn(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Ed.call(t, i) || !hn(e[i], t[i]))
            return !1
    }
    return !0
}
function k0(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function C0(e, t) {
    var n = k0(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = k0(n)
    }
}
function Gb(e, t) {
    return !(!e || !t) && (e === t || (!e || e.nodeType !== 3) && (t && t.nodeType === 3 ? Gb(e, t.parentNode) : "contains"in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
}
function Kb() {
    for (var e = I, t = Hl(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (!n)
            break;
        e = t.contentWindow,
        t = Hl(e.document)
    }
    return t
}
function Lh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function MI(e) {
    var t = Kb()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Gb(n.ownerDocument.documentElement, n)) {
        if (r !== null && Lh(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || I,
            e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length
                  , o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i),
                !e.extend && o > r && (i = r,
                r = o,
                o = i),
                i = C0(n, o);
                var s = C0(n, r);
                i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
                t.setStart(i.node, i.offset),
                e.removeAllRanges(),
                o > r ? (e.addRange(t),
                e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var OI = Jn && "documentMode"in document && 11 >= document.documentMode
  , Yi = null
  , Ud = null
  , bs = null
  , Xd = !1;
function T0(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Xd || Yi == null || Yi !== Hl(r) || (r = Yi,
    "selectionStart"in r && Lh(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || I).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    bs && Fs(bs, r) || (bs = r,
    r = Kl(Ud, "onSelect"),
    0 < r.length && (t = new _h("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Yi)))
}
function wl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Gi = {
    animationend: wl("Animation", "AnimationEnd"),
    animationiteration: wl("Animation", "AnimationIteration"),
    animationstart: wl("Animation", "AnimationStart"),
    transitionend: wl("Transition", "TransitionEnd")
}
  , hd = {}
  , qb = {};
Jn && (qb = document.createElement("div").style,
"AnimationEvent"in I || (delete Gi.animationend.animation,
delete Gi.animationiteration.animation,
delete Gi.animationstart.animation),
"TransitionEvent"in I || delete Gi.transitionend.transition);
function mc(e) {
    if (hd[e])
        return hd[e];
    if (!Gi[e])
        return e;
    var t, n = Gi[e];
    for (t in n)
        if (n.hasOwnProperty(t) && t in qb)
            return hd[e] = n[t];
    return e
}
var Qb = mc("animationend")
  , Zb = mc("animationiteration")
  , Jb = mc("animationstart")
  , ex = mc("transitionend")
  , tx = new Map
  , E0 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Dr(e, t) {
    tx.set(e, t),
    gi(t, [e])
}
for (kl = 0; kl < E0.length; kl++)
    Cl = E0[kl],
    P0 = Cl.toLowerCase(),
    R0 = Cl[0].toUpperCase() + Cl.slice(1),
    Dr(P0, "on" + R0);
var Cl, P0, R0, kl;
Dr(Qb, "onAnimationEnd");
Dr(Zb, "onAnimationIteration");
Dr(Jb, "onAnimationStart");
Dr("dblclick", "onDoubleClick");
Dr("focusin", "onFocus");
Dr("focusout", "onBlur");
Dr(ex, "onTransitionEnd");
lo("onMouseEnter", ["mouseout", "mouseover"]);
lo("onMouseLeave", ["mouseout", "mouseover"]);
lo("onPointerEnter", ["pointerout", "pointerover"]);
lo("onPointerLeave", ["pointerout", "pointerover"]);
gi("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
gi("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
gi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
gi("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
gi("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
gi("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ps = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , DI = new Set("cancel close invalid load scroll toggle".split(" ").concat(ps));
function _0(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    D_(r, t, void 0, e),
    e.currentTarget = null
}
function nx(e, t) {
    t = (4 & t) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s]
                      , l = a.instance
                      , c = a.currentTarget;
                    if (a = a.listener,
                    l !== o && i.isPropagationStopped())
                        break e;
                    _0(i, a, c),
                    o = l
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (a = r[s],
                    l = a.instance,
                    c = a.currentTarget,
                    a = a.listener,
                    l !== o && i.isPropagationStopped())
                        break e;
                    _0(i, a, c),
                    o = l
                }
        }
    }
    if (Wl)
        throw e = $d,
        Wl = !1,
        $d = null,
        e
}
function de(e, t) {
    var n = t[Qd];
    n === void 0 && (n = t[Qd] = new Set);
    var r = e + "__bubble";
    n.has(r) || (rx(t, e, 2, !1),
    n.add(r))
}
function pd(e, t, n) {
    var r = 0;
    t && (r |= 4),
    rx(n, e, r, t)
}
var Tl = "_reactListening" + Math.random().toString(36).slice(2);
function Ls(e) {
    if (!e[Tl]) {
        e[Tl] = !0,
        ub.forEach(function(n) {
            n !== "selectionchange" && (DI.has(n) || pd(n, !1, e),
            pd(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Tl] || (t[Tl] = !0,
        pd("selectionchange", !1, t))
    }
}
function rx(e, t, n, r) {
    switch (Nb(t)) {
    case 1:
        var i = Q_;
        break;
    case 4:
        i = Z_;
        break;
    default:
        i = Ph
    }
    n = i.bind(null, t, n, e),
    i = void 0,
    !Nd || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
    r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}
function md(e, t, n, r, i) {
    var o = r;
    if (!(1 & t) && !(2 & t) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var a = r.stateNode.containerInfo;
                if (a === i || a.nodeType === 8 && a.parentNode === i)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var l = s.tag;
                        if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo,
                        l === i || l.nodeType === 8 && l.parentNode === i))
                            return;
                        s = s.return
                    }
                for (; a !== null; ) {
                    if (s = ai(a),
                    s === null)
                        return;
                    if (l = s.tag,
                    l === 5 || l === 6) {
                        r = o = s;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    Eb(function() {
        var c = o
          , u = kh(n)
          , f = [];
        e: {
            var d = tx.get(e);
            if (d !== void 0) {
                var m = _h
                  , g = e;
                switch (e) {
                case "keypress":
                    if (Ol(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    m = hI;
                    break;
                case "focusin":
                    g = "focus",
                    m = fd;
                    break;
                case "focusout":
                    g = "blur",
                    m = fd;
                    break;
                case "beforeblur":
                case "afterblur":
                    m = fd;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    m = v0;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    m = tI;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    m = vI;
                    break;
                case Qb:
                case Zb:
                case Jb:
                    m = iI;
                    break;
                case ex:
                    m = yI;
                    break;
                case "scroll":
                    m = J_;
                    break;
                case "wheel":
                    m = xI;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    m = sI;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    m = y0
                }
                var y = (4 & t) !== 0
                  , S = !y && e === "scroll"
                  , h = y ? d !== null ? d + "Capture" : null : d;
                y = [];
                for (var p, v = c; v !== null; ) {
                    p = v;
                    var x = p.stateNode;
                    if (p.tag === 5 && x !== null && (p = x,
                    h !== null && (x = Es(v, h),
                    x != null && y.push(Ms(v, x, p)))),
                    S)
                        break;
                    v = v.return
                }
                0 < y.length && (d = new m(d,g,null,n,u),
                f.push({
                    event: d,
                    listeners: y
                }))
            }
        }
        if (!(7 & t)) {
            if (d = e === "mouseover" || e === "pointerover",
            m = e === "mouseout" || e === "pointerout",
            (!d || n === Bd || !(g = n.relatedTarget || n.fromElement) || !ai(g) && !g[er]) && (m || d) && (d = u.window === u ? u : (d = u.ownerDocument) ? d.defaultView || d.parentWindow : I,
            m ? (g = n.relatedTarget || n.toElement,
            m = c,
            g = g ? ai(g) : null,
            g !== null && (S = yi(g),
            g !== S || g.tag !== 5 && g.tag !== 6) && (g = null)) : (m = null,
            g = c),
            m !== g)) {
                if (y = v0,
                x = "onMouseLeave",
                h = "onMouseEnter",
                v = "mouse",
                e !== "pointerout" && e !== "pointerover" || (y = y0,
                x = "onPointerLeave",
                h = "onPointerEnter",
                v = "pointer"),
                S = m == null ? d : Ki(m),
                p = g == null ? d : Ki(g),
                d = new y(x,v + "leave",m,n,u),
                d.target = S,
                d.relatedTarget = p,
                x = null,
                ai(u) === c && (y = new y(h,v + "enter",g,n,u),
                y.target = p,
                y.relatedTarget = S,
                x = y),
                S = x,
                m && g)
                    e: {
                        for (y = m,
                        h = g,
                        v = 0,
                        p = y; p; p = ji(p))
                            v++;
                        for (p = 0,
                        x = h; x; x = ji(x))
                            p++;
                        for (; 0 < v - p; )
                            y = ji(y),
                            v--;
                        for (; 0 < p - v; )
                            h = ji(h),
                            p--;
                        for (; v--; ) {
                            if (y === h || h !== null && y === h.alternate)
                                break e;
                            y = ji(y),
                            h = ji(h)
                        }
                        y = null
                    }
                else
                    y = null;
                m !== null && I0(f, d, m, y, !1),
                g !== null && S !== null && I0(f, S, g, y, !0)
            }
            if (d = c ? Ki(c) : I,
            m = d.nodeName && d.nodeName.toLowerCase(),
            m === "select" || m === "input" && d.type === "file")
                var C = PI;
            else if (S0(d))
                if (Xb)
                    C = FI;
                else {
                    C = _I;
                    var w = RI
                }
            else
                (m = d.nodeName) && m.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (C = II);
            switch (C && (C = C(e, c)) ? Ub(f, C, n, u) : (w && w(e, d, c),
            e === "focusout" && (w = d._wrapperState) && w.controlled && d.type === "number" && Md(d, "number", d.value)),
            w = c ? Ki(c) : I,
            e) {
            case "focusin":
                (S0(w) || w.contentEditable === "true") && (Yi = w,
                Ud = c,
                bs = null);
                break;
            case "focusout":
                bs = Ud = Yi = null;
                break;
            case "mousedown":
                Xd = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Xd = !1,
                T0(f, n, u);
                break;
            case "selectionchange":
                if (OI)
                    break;
            case "keydown":
            case "keyup":
                T0(f, n, u)
            }
            var T;
            if (Fh)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var E = "onCompositionStart";
                        break e;
                    case "compositionend":
                        E = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        E = "onCompositionUpdate";
                        break e
                    }
                    E = void 0
                }
            else
                Xi ? jb(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
            E && (Hb && n.locale !== "ko" && (Xi || E !== "onCompositionStart" ? E === "onCompositionEnd" && Xi && (T = $b()) : (kr = u,
            Rh = "value"in kr ? kr.value : kr.textContent,
            Xi = !0)),
            w = Kl(c, E),
            0 < w.length && (E = new g0(E,e,null,n,u),
            f.push({
                event: E,
                listeners: w
            }),
            T ? E.data = T : (T = Wb(n),
            T !== null && (E.data = T)))),
            (T = wI ? kI(e, n) : CI(e, n)) && (c = Kl(c, "onBeforeInput"),
            0 < c.length && (u = new g0("onBeforeInput","beforeinput",null,n,u),
            f.push({
                event: u,
                listeners: c
            }),
            u.data = T))
        }
        nx(f, t)
    })
}
function Ms(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Kl(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e
          , o = i.stateNode;
        i.tag === 5 && o !== null && (i = o,
        o = Es(e, n),
        o != null && r.unshift(Ms(e, o, i)),
        o = Es(e, t),
        o != null && r.push(Ms(e, o, i))),
        e = e.return
    }
    return r
}
function ji(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function I0(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r; ) {
        var a = n
          , l = a.alternate
          , c = a.stateNode;
        if (l !== null && l === r)
            break;
        a.tag === 5 && c !== null && (a = c,
        i ? (l = Es(n, o),
        l != null && s.unshift(Ms(n, l, a))) : i || (l = Es(n, o),
        l != null && s.push(Ms(n, l, a)))),
        n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var AI = /\r\n?/g
  , VI = /\u0000|\uFFFD/g;
function F0(e) {
    return (typeof e == "string" ? e : "" + e).replace(AI, `
`).replace(VI, "")
}
function El(e, t, n) {
    if (t = F0(t),
    F0(e) !== t && n)
        throw Error(F(425))
}
function ql() {}
var Yd = null
  , Gd = null;
function Kd(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var qd = typeof setTimeout == "function" ? setTimeout : void 0
  , BI = typeof clearTimeout == "function" ? clearTimeout : void 0
  , L0 = typeof Promise == "function" ? Promise : void 0
  , zI = typeof queueMicrotask == "function" ? queueMicrotask : typeof L0 < "u" ? function(e) {
    return L0.resolve(null).then(e).catch(NI)
}
: qd;
function NI(e) {
    setTimeout(function() {
        throw e
    })
}
function vd(e, t) {
    var n = t
      , r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n),
        i && i.nodeType === 8)
            if (n = i.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(i),
                    _s(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    _s(t)
}
function Rr(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function M0(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var go = Math.random().toString(36).slice(2)
  , Fn = "__reactFiber$" + go
  , Os = "__reactProps$" + go
  , er = "__reactContainer$" + go
  , Qd = "__reactEvents$" + go
  , $I = "__reactListeners$" + go
  , HI = "__reactHandles$" + go;
function ai(e) {
    var t = e[Fn];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[er] || n[Fn]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = M0(e); e !== null; ) {
                    if (n = e[Fn])
                        return n;
                    e = M0(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function js(e) {
    return e = e[Fn] || e[er],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Ki(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(F(33))
}
function vc(e) {
    return e[Os] || null
}
var Zd = []
  , qi = -1;
function Ar(e) {
    return {
        current: e
    }
}
function he(e) {
    0 > qi || (e.current = Zd[qi],
    Zd[qi] = null,
    qi--)
}
function ue(e, t) {
    qi++,
    Zd[qi] = e.current,
    e.current = t
}
var Or = {}
  , lt = Ar(Or)
  , Rt = Ar(!1)
  , di = Or;
function co(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Or;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i, o = {};
    for (i in n)
        o[i] = t[i];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function _t(e) {
    return e = e.childContextTypes,
    e != null
}
function Ql() {
    he(Rt),
    he(lt)
}
function O0(e, t, n) {
    if (lt.current !== Or)
        throw Error(F(168));
    ue(lt, t),
    ue(Rt, n)
}
function ix(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t))
            throw Error(F(108, R_(e) || "Unknown", i));
    return Se({}, n, r)
}
function Zl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Or,
    di = lt.current,
    ue(lt, e),
    ue(Rt, Rt.current),
    !0
}
function D0(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(F(169));
    n ? (e = ix(e, t, di),
    r.__reactInternalMemoizedMergedChildContext = e,
    he(Rt),
    he(lt),
    ue(lt, e)) : he(Rt),
    ue(Rt, n)
}
var Kn = null
  , gc = !1
  , gd = !1;
function ox(e) {
    Kn === null ? Kn = [e] : Kn.push(e)
}
function jI(e) {
    gc = !0,
    ox(e)
}
function Vr() {
    if (!gd && Kn !== null) {
        gd = !0;
        var e = 0
          , t = se;
        try {
            var n = Kn;
            for (se = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Kn = null,
            gc = !1
        } catch (i) {
            throw Kn !== null && (Kn = Kn.slice(e + 1)),
            Ib(Ch, Vr),
            i
        } finally {
            se = t,
            gd = !1
        }
    }
    return null
}
var Qi = []
  , Zi = 0
  , Jl = null
  , ec = 0
  , Yt = []
  , Gt = 0
  , hi = null
  , qn = 1
  , Qn = "";
function oi(e, t) {
    Qi[Zi++] = ec,
    Qi[Zi++] = Jl,
    Jl = e,
    ec = t
}
function sx(e, t, n) {
    Yt[Gt++] = qn,
    Yt[Gt++] = Qn,
    Yt[Gt++] = hi,
    hi = e;
    var r = qn;
    e = Qn;
    var i = 32 - fn(r) - 1;
    r &= ~(1 << i),
    n += 1;
    var o = 32 - fn(t) + i;
    if (30 < o) {
        var s = i - i % 5;
        o = (r & (1 << s) - 1).toString(32),
        r >>= s,
        i -= s,
        qn = 1 << 32 - fn(t) + i | n << i | r,
        Qn = o + e
    } else
        qn = 1 << o | n << i | r,
        Qn = e
}
function Mh(e) {
    e.return !== null && (oi(e, 1),
    sx(e, 1, 0))
}
function Oh(e) {
    for (; e === Jl; )
        Jl = Qi[--Zi],
        Qi[Zi] = null,
        ec = Qi[--Zi],
        Qi[Zi] = null;
    for (; e === hi; )
        hi = Yt[--Gt],
        Yt[Gt] = null,
        Qn = Yt[--Gt],
        Yt[Gt] = null,
        qn = Yt[--Gt],
        Yt[Gt] = null
}
var At = null
  , Dt = null
  , ge = !1
  , un = null;
function ax(e, t) {
    var n = Kt(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function A0(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null && (e.stateNode = t,
        At = e,
        Dt = Rr(t.firstChild),
        !0);
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null && (e.stateNode = t,
        At = e,
        Dt = null,
        !0);
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null && (n = hi !== null ? {
            id: qn,
            overflow: Qn
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Kt(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        At = e,
        Dt = null,
        !0);
    default:
        return !1
    }
}
function Jd(e) {
    return (1 & e.mode) !== 0 && (128 & e.flags) === 0
}
function eh(e) {
    if (ge) {
        var t = Dt;
        if (t) {
            var n = t;
            if (!A0(e, t)) {
                if (Jd(e))
                    throw Error(F(418));
                t = Rr(n.nextSibling);
                var r = At;
                t && A0(e, t) ? ax(r, n) : (e.flags = -4097 & e.flags | 2,
                ge = !1,
                At = e)
            }
        } else {
            if (Jd(e))
                throw Error(F(418));
            e.flags = -4097 & e.flags | 2,
            ge = !1,
            At = e
        }
    }
}
function V0(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    At = e
}
function Pl(e) {
    if (e !== At)
        return !1;
    if (!ge)
        return V0(e),
        ge = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Kd(e.type, e.memoizedProps)),
    t && (t = Dt)) {
        if (Jd(e))
            throw lx(),
            Error(F(418));
        for (; t; )
            ax(e, t),
            t = Rr(t.nextSibling)
    }
    if (V0(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(F(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Dt = Rr(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Dt = null
        }
    } else
        Dt = At ? Rr(e.stateNode.nextSibling) : null;
    return !0
}
function lx() {
    for (var e = Dt; e; )
        e = Rr(e.nextSibling)
}
function uo() {
    Dt = At = null,
    ge = !1
}
function Dh(e) {
    un === null ? un = [e] : un.push(e)
}
var WI = rr.ReactCurrentBatchConfig;
function ln(e, t) {
    if (e && e.defaultProps) {
        t = Se({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
var tc = Ar(null)
  , nc = null
  , Ji = null
  , Ah = null;
function Vh() {
    Ah = Ji = nc = null
}
function Bh(e) {
    var t = tc.current;
    he(tc),
    e._currentValue = t
}
function th(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function so(e, t) {
    nc = e,
    Ah = Ji = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Pt = !0),
    e.firstContext = null)
}
function Qt(e) {
    var t = e._currentValue;
    if (Ah !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Ji === null) {
            if (nc === null)
                throw Error(F(308));
            Ji = e,
            nc.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Ji = Ji.next = e;
    return t
}
var li = null;
function zh(e) {
    li === null ? li = [e] : li.push(e)
}
function cx(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n,
    zh(t)) : (n.next = i.next,
    i.next = n),
    t.interleaved = n,
    tr(e, r)
}
function tr(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var xr = !1;
function Nh(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function ux(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Zn(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function _r(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    2 & ee) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next,
        i.next = t),
        r.pending = t,
        tr(e, n)
    }
    return i = r.interleaved,
    i === null ? (t.next = t,
    zh(r)) : (t.next = i.next,
    i.next = t),
    r.interleaved = t,
    tr(e, n)
}
function Dl(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (4194240 & n) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Th(e, n)
    }
}
function B0(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r === null || (r = r.updateQueue,
    n !== r))
        e = n.lastBaseUpdate,
        e === null ? n.firstBaseUpdate = t : e.next = t,
        n.lastBaseUpdate = t;
    else {
        var i = null
          , o = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = s : o = o.next = s,
                n = n.next
            } while (n !== null);
            o === null ? i = o = t : o = o.next = t
        } else
            i = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n
    }
}
function rc(e, t, n, r) {
    var i = e.updateQueue;
    xr = !1;
    var o = i.firstBaseUpdate
      , s = i.lastBaseUpdate
      , a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var l = a
          , c = l.next;
        l.next = null,
        s === null ? o = c : s.next = c,
        s = l;
        var u = e.alternate;
        u !== null && (u = u.updateQueue,
        a = u.lastBaseUpdate,
        a !== s && (a === null ? u.firstBaseUpdate = c : a.next = c,
        u.lastBaseUpdate = l))
    }
    if (o !== null) {
        var f = i.baseState;
        s = 0,
        u = c = l = null,
        a = o;
        do {
            var d = a.lane
              , m = a.eventTime;
            if ((r & d) === d) {
                u !== null && (u = u.next = {
                    eventTime: m,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var g = e
                      , y = a;
                    switch (d = t,
                    m = n,
                    y.tag) {
                    case 1:
                        if (g = y.payload,
                        typeof g == "function") {
                            f = g.call(m, f, d);
                            break e
                        }
                        f = g;
                        break e;
                    case 3:
                        g.flags = -65537 & g.flags | 128;
                    case 0:
                        if (g = y.payload,
                        d = typeof g == "function" ? g.call(m, f, d) : g,
                        d == null)
                            break e;
                        f = Se({}, f, d);
                        break e;
                    case 2:
                        xr = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                d = i.effects,
                d === null ? i.effects = [a] : d.push(a))
            } else
                m = {
                    eventTime: m,
                    lane: d,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                u === null ? (c = u = m,
                l = f) : u = u.next = m,
                s |= d;
            if (a = a.next,
            a === null) {
                if (a = i.shared.pending,
                a === null)
                    break;
                d = a,
                a = d.next,
                d.next = null,
                i.lastBaseUpdate = d,
                i.shared.pending = null
            }
        } while (1);
        if (u === null && (l = f),
        i.baseState = l,
        i.firstBaseUpdate = c,
        i.lastBaseUpdate = u,
        t = i.shared.interleaved,
        t !== null) {
            i = t;
            do
                s |= i.lane,
                i = i.next;
            while (i !== t)
        } else
            o === null && (i.shared.lanes = 0);
        mi |= s,
        e.lanes = s,
        e.memoizedState = f
    }
}
function z0(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                r = n,
                typeof i != "function")
                    throw Error(F(191, i));
                i.call(r)
            }
        }
}
var fx = new cb.Component().refs;
function nh(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : Se({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var yc = {
    isMounted: function(e) {
        return !!(e = e._reactInternals) && yi(e) === e
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = pt()
          , i = Fr(e)
          , o = Zn(r, i);
        o.payload = t,
        n != null && (o.callback = n),
        t = _r(e, o, i),
        t !== null && (dn(t, e, i, r),
        Dl(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = pt()
          , i = Fr(e)
          , o = Zn(r, i);
        o.tag = 1,
        o.payload = t,
        n != null && (o.callback = n),
        t = _r(e, o, i),
        t !== null && (dn(t, e, i, r),
        Dl(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = pt()
          , r = Fr(e)
          , i = Zn(n, r);
        i.tag = 2,
        t != null && (i.callback = t),
        t = _r(e, i, r),
        t !== null && (dn(t, e, r, n),
        Dl(t, e, r))
    }
};
function N0(e, t, n, r, i, o, s) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : !t.prototype || !t.prototype.isPureReactComponent || !Fs(n, r) || !Fs(i, o)
}
function dx(e, t, n) {
    var r = !1
      , i = Or
      , o = t.contextType;
    return typeof o == "object" && o !== null ? o = Qt(o) : (i = _t(t) ? di : lt.current,
    r = t.contextTypes,
    o = (r = r != null) ? co(e, i) : Or),
    t = new t(n,o),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = yc,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = i,
    e.__reactInternalMemoizedMaskedChildContext = o),
    t
}
function $0(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && yc.enqueueReplaceState(t, t.state, null)
}
function rh(e, t, n, r) {
    var i = e.stateNode;
    i.props = n,
    i.state = e.memoizedState,
    i.refs = fx,
    Nh(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = Qt(o) : (o = _t(t) ? di : lt.current,
    i.context = co(e, o)),
    i.state = e.memoizedState,
    o = t.getDerivedStateFromProps,
    typeof o == "function" && (nh(e, t, o, n),
    i.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    t !== i.state && yc.enqueueReplaceState(i, i.state, null),
    rc(e, n, i, r),
    i.state = e.memoizedState),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function as(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(F(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(F(147, e));
            var i = r
              , o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
                var a = i.refs;
                a === fx && (a = i.refs = {}),
                s === null ? delete a[o] : a[o] = s
            }
            ,
            t._stringRef = o,
            t)
        }
        if (typeof e != "string")
            throw Error(F(284));
        if (!n._owner)
            throw Error(F(290, e))
    }
    return e
}
function Rl(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(F(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function H0(e) {
    var t = e._init;
    return t(e._payload)
}
function hx(e) {
    function t(h, p) {
        if (e) {
            var v = h.deletions;
            v === null ? (h.deletions = [p],
            h.flags |= 16) : v.push(p)
        }
    }
    function n(h, p) {
        if (!e)
            return null;
        for (; p !== null; )
            t(h, p),
            p = p.sibling;
        return null
    }
    function r(h, p) {
        for (h = new Map; p !== null; )
            p.key !== null ? h.set(p.key, p) : h.set(p.index, p),
            p = p.sibling;
        return h
    }
    function i(h, p) {
        return h = Lr(h, p),
        h.index = 0,
        h.sibling = null,
        h
    }
    function o(h, p, v) {
        return h.index = v,
        e ? (v = h.alternate,
        v !== null ? (v = v.index,
        v < p ? (h.flags |= 2,
        p) : v) : (h.flags |= 2,
        p)) : (h.flags |= 1048576,
        p)
    }
    function s(h) {
        return e && h.alternate === null && (h.flags |= 2),
        h
    }
    function a(h, p, v, x) {
        return p === null || p.tag !== 6 ? (p = Cd(v, h.mode, x),
        p.return = h,
        p) : (p = i(p, v),
        p.return = h,
        p)
    }
    function l(h, p, v, x) {
        var C = v.type;
        return C === Ui ? u(h, p, v.props.children, x, v.key) : p !== null && (p.elementType === C || typeof C == "object" && C !== null && C.$$typeof === br && H0(C) === p.type) ? (x = i(p, v.props),
        x.ref = as(h, p, v),
        x.return = h,
        x) : (x = $l(v.type, v.key, v.props, null, h.mode, x),
        x.ref = as(h, p, v),
        x.return = h,
        x)
    }
    function c(h, p, v, x) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== v.containerInfo || p.stateNode.implementation !== v.implementation ? (p = Td(v, h.mode, x),
        p.return = h,
        p) : (p = i(p, v.children || []),
        p.return = h,
        p)
    }
    function u(h, p, v, x, C) {
        return p === null || p.tag !== 7 ? (p = fi(v, h.mode, x, C),
        p.return = h,
        p) : (p = i(p, v),
        p.return = h,
        p)
    }
    function f(h, p, v) {
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return p = Cd("" + p, h.mode, v),
            p.return = h,
            p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case hl:
                return v = $l(p.type, p.key, p.props, null, h.mode, v),
                v.ref = as(h, null, p),
                v.return = h,
                v;
            case Wi:
                return p = Td(p, h.mode, v),
                p.return = h,
                p;
            case br:
                var x = p._init;
                return f(h, x(p._payload), v)
            }
            if (ds(p) || rs(p))
                return p = fi(p, h.mode, v, null),
                p.return = h,
                p;
            Rl(h, p)
        }
        return null
    }
    function d(h, p, v, x) {
        var C = p !== null ? p.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number")
            return C !== null ? null : a(h, p, "" + v, x);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case hl:
                return v.key === C ? l(h, p, v, x) : null;
            case Wi:
                return v.key === C ? c(h, p, v, x) : null;
            case br:
                return C = v._init,
                d(h, p, C(v._payload), x)
            }
            if (ds(v) || rs(v))
                return C !== null ? null : u(h, p, v, x, null);
            Rl(h, v)
        }
        return null
    }
    function m(h, p, v, x, C) {
        if (typeof x == "string" && x !== "" || typeof x == "number")
            return h = h.get(v) || null,
            a(p, h, "" + x, C);
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
            case hl:
                return h = h.get(x.key === null ? v : x.key) || null,
                l(p, h, x, C);
            case Wi:
                return h = h.get(x.key === null ? v : x.key) || null,
                c(p, h, x, C);
            case br:
                var w = x._init;
                return m(h, p, v, w(x._payload), C)
            }
            if (ds(x) || rs(x))
                return h = h.get(v) || null,
                u(p, h, x, C, null);
            Rl(p, x)
        }
        return null
    }
    function g(h, p, v, x) {
        for (var C = null, w = null, T = p, E = p = 0, _ = null; T !== null && E < v.length; E++) {
            T.index > E ? (_ = T,
            T = null) : _ = T.sibling;
            var R = d(h, T, v[E], x);
            if (R === null) {
                T === null && (T = _);
                break
            }
            e && T && R.alternate === null && t(h, T),
            p = o(R, p, E),
            w === null ? C = R : w.sibling = R,
            w = R,
            T = _
        }
        if (E === v.length)
            return n(h, T),
            ge && oi(h, E),
            C;
        if (T === null) {
            for (; E < v.length; E++)
                T = f(h, v[E], x),
                T !== null && (p = o(T, p, E),
                w === null ? C = T : w.sibling = T,
                w = T);
            return ge && oi(h, E),
            C
        }
        for (T = r(h, T); E < v.length; E++)
            _ = m(T, h, E, v[E], x),
            _ !== null && (e && _.alternate !== null && T.delete(_.key === null ? E : _.key),
            p = o(_, p, E),
            w === null ? C = _ : w.sibling = _,
            w = _);
        return e && T.forEach(function(B) {
            return t(h, B)
        }),
        ge && oi(h, E),
        C
    }
    function y(h, p, v, x) {
        var C = rs(v);
        if (typeof C != "function")
            throw Error(F(150));
        if (v = C.call(v),
        v == null)
            throw Error(F(151));
        for (var w = C = null, T = p, E = p = 0, _ = null, R = v.next(); T !== null && !R.done; E++,
        R = v.next()) {
            T.index > E ? (_ = T,
            T = null) : _ = T.sibling;
            var B = d(h, T, R.value, x);
            if (B === null) {
                T === null && (T = _);
                break
            }
            e && T && B.alternate === null && t(h, T),
            p = o(B, p, E),
            w === null ? C = B : w.sibling = B,
            w = B,
            T = _
        }
        if (R.done)
            return n(h, T),
            ge && oi(h, E),
            C;
        if (T === null) {
            for (; !R.done; E++,
            R = v.next())
                R = f(h, R.value, x),
                R !== null && (p = o(R, p, E),
                w === null ? C = R : w.sibling = R,
                w = R);
            return ge && oi(h, E),
            C
        }
        for (T = r(h, T); !R.done; E++,
        R = v.next())
            R = m(T, h, E, R.value, x),
            R !== null && (e && R.alternate !== null && T.delete(R.key === null ? E : R.key),
            p = o(R, p, E),
            w === null ? C = R : w.sibling = R,
            w = R);
        return e && T.forEach(function(A) {
            return t(h, A)
        }),
        ge && oi(h, E),
        C
    }
    function S(h, p, v, x) {
        if (typeof v == "object" && v !== null && v.type === Ui && v.key === null && (v = v.props.children),
        typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case hl:
                e: {
                    for (var C = v.key, w = p; w !== null; ) {
                        if (w.key === C) {
                            if (C = v.type,
                            C === Ui) {
                                if (w.tag === 7) {
                                    n(h, w.sibling),
                                    p = i(w, v.props.children),
                                    p.return = h,
                                    h = p;
                                    break e
                                }
                            } else if (w.elementType === C || typeof C == "object" && C !== null && C.$$typeof === br && H0(C) === w.type) {
                                n(h, w.sibling),
                                p = i(w, v.props),
                                p.ref = as(h, w, v),
                                p.return = h,
                                h = p;
                                break e
                            }
                            n(h, w);
                            break
                        }
                        t(h, w),
                        w = w.sibling
                    }
                    v.type === Ui ? (p = fi(v.props.children, h.mode, x, v.key),
                    p.return = h,
                    h = p) : (x = $l(v.type, v.key, v.props, null, h.mode, x),
                    x.ref = as(h, p, v),
                    x.return = h,
                    h = x)
                }
                return s(h);
            case Wi:
                e: {
                    for (w = v.key; p !== null; ) {
                        if (p.key === w) {
                            if (p.tag === 4 && p.stateNode.containerInfo === v.containerInfo && p.stateNode.implementation === v.implementation) {
                                n(h, p.sibling),
                                p = i(p, v.children || []),
                                p.return = h,
                                h = p;
                                break e
                            }
                            n(h, p);
                            break
                        }
                        t(h, p),
                        p = p.sibling
                    }
                    p = Td(v, h.mode, x),
                    p.return = h,
                    h = p
                }
                return s(h);
            case br:
                return w = v._init,
                S(h, p, w(v._payload), x)
            }
            if (ds(v))
                return g(h, p, v, x);
            if (rs(v))
                return y(h, p, v, x);
            Rl(h, v)
        }
        return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v,
        p !== null && p.tag === 6 ? (n(h, p.sibling),
        p = i(p, v),
        p.return = h,
        h = p) : (n(h, p),
        p = Cd(v, h.mode, x),
        p.return = h,
        h = p),
        s(h)) : n(h, p)
    }
    return S
}
var fo = hx(!0)
  , px = hx(!1)
  , Ws = {}
  , Mn = Ar(Ws)
  , Ds = Ar(Ws)
  , As = Ar(Ws);
function ci(e) {
    if (e === Ws)
        throw Error(F(174));
    return e
}
function $h(e, t) {
    switch (ue(As, t),
    ue(Ds, e),
    ue(Mn, Ws),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Dd(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Dd(t, e)
    }
    he(Mn),
    ue(Mn, t)
}
function ho() {
    he(Mn),
    he(Ds),
    he(As)
}
function mx(e) {
    ci(As.current);
    var t = ci(Mn.current)
      , n = Dd(t, e.type);
    t !== n && (ue(Ds, e),
    ue(Mn, n))
}
function Hh(e) {
    Ds.current === e && (he(Mn),
    he(Ds))
}
var be = Ar(0);
function ic(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (128 & t.flags)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var yd = [];
function jh() {
    for (var e = 0; e < yd.length; e++)
        yd[e]._workInProgressVersionPrimary = null;
    yd.length = 0
}
var Al = rr.ReactCurrentDispatcher
  , bd = rr.ReactCurrentBatchConfig
  , pi = 0
  , xe = null
  , Ne = null
  , We = null
  , oc = !1
  , xs = !1
  , Vs = 0
  , UI = 0;
function ot() {
    throw Error(F(321))
}
function Wh(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!hn(e[n], t[n]))
            return !1;
    return !0
}
function Uh(e, t, n, r, i, o) {
    if (pi = o,
    xe = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Al.current = e === null || e.memoizedState === null ? KI : qI,
    e = n(r, i),
    xs) {
        o = 0;
        do {
            if (xs = !1,
            Vs = 0,
            25 <= o)
                throw Error(F(301));
            o += 1,
            We = Ne = null,
            t.updateQueue = null,
            Al.current = QI,
            e = n(r, i)
        } while (xs)
    }
    if (Al.current = sc,
    t = Ne !== null && Ne.next !== null,
    pi = 0,
    We = Ne = xe = null,
    oc = !1,
    t)
        throw Error(F(300));
    return e
}
function Xh() {
    var e = Vs !== 0;
    return Vs = 0,
    e
}
function In() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return We === null ? xe.memoizedState = We = e : We = We.next = e,
    We
}
function Zt() {
    if (Ne === null) {
        var e = xe.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = Ne.next;
    var t = We === null ? xe.memoizedState : We.next;
    if (t !== null)
        We = t,
        Ne = e;
    else {
        if (e === null)
            throw Error(F(310));
        Ne = e,
        e = {
            memoizedState: Ne.memoizedState,
            baseState: Ne.baseState,
            baseQueue: Ne.baseQueue,
            queue: Ne.queue,
            next: null
        },
        We === null ? xe.memoizedState = We = e : We = We.next = e
    }
    return We
}
function Bs(e, t) {
    return typeof t == "function" ? t(e) : t
}
function xd(e) {
    var t = Zt()
      , n = t.queue;
    if (n === null)
        throw Error(F(311));
    n.lastRenderedReducer = e;
    var r = Ne
      , i = r.baseQueue
      , o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var s = i.next;
            i.next = o.next,
            o.next = s
        }
        r.baseQueue = i = o,
        n.pending = null
    }
    if (i !== null) {
        o = i.next,
        r = r.baseState;
        var a = s = null
          , l = null
          , c = o;
        do {
            var u = c.lane;
            if ((pi & u) === u)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                }),
                r = c.hasEagerState ? c.eagerState : e(r, c.action);
            else {
                var f = {
                    lane: u,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                l === null ? (a = l = f,
                s = r) : l = l.next = f,
                xe.lanes |= u,
                mi |= u
            }
            c = c.next
        } while (c !== null && c !== o);
        l === null ? s = r : l.next = a,
        hn(r, t.memoizedState) || (Pt = !0),
        t.memoizedState = r,
        t.baseState = s,
        t.baseQueue = l,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        i = e;
        do
            o = i.lane,
            xe.lanes |= o,
            mi |= o,
            i = i.next;
        while (i !== e)
    } else
        i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Sd(e) {
    var t = Zt()
      , n = t.queue;
    if (n === null)
        throw Error(F(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , i = n.pending
      , o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var s = i = i.next;
        do
            o = e(o, s.action),
            s = s.next;
        while (s !== i);
        hn(o, t.memoizedState) || (Pt = !0),
        t.memoizedState = o,
        t.baseQueue === null && (t.baseState = o),
        n.lastRenderedState = o
    }
    return [o, r]
}
function vx() {}
function gx(e, t) {
    var n = xe
      , r = Zt()
      , i = t()
      , o = !hn(r.memoizedState, i);
    if (o && (r.memoizedState = i,
    Pt = !0),
    r = r.queue,
    Yh(xx.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || We !== null && 1 & We.memoizedState.tag) {
        if (n.flags |= 2048,
        zs(9, bx.bind(null, n, r, i, t), void 0, null),
        Ue === null)
            throw Error(F(349));
        30 & pi || yx(n, t, i)
    }
    return i
}
function yx(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = xe.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    xe.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function bx(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Sx(t) && wx(e)
}
function xx(e, t, n) {
    return n(function() {
        Sx(t) && wx(e)
    })
}
function Sx(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !hn(e, n)
    } catch {
        return !0
    }
}
function wx(e) {
    var t = tr(e, 1);
    t !== null && dn(t, e, 1, -1)
}
function j0(e) {
    var t = In();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Bs,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = GI.bind(null, xe, e),
    [t.memoizedState, e]
}
function zs(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = xe.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    xe.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function kx() {
    return Zt().memoizedState
}
function Vl(e, t, n, r) {
    var i = In();
    xe.flags |= e,
    i.memoizedState = zs(1 | t, n, void 0, r === void 0 ? null : r)
}
function bc(e, t, n, r) {
    var i = Zt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Ne !== null) {
        var s = Ne.memoizedState;
        if (o = s.destroy,
        r !== null && Wh(r, s.deps)) {
            i.memoizedState = zs(t, n, o, r);
            return
        }
    }
    xe.flags |= e,
    i.memoizedState = zs(1 | t, n, o, r)
}
function W0(e, t) {
    return Vl(8390656, 8, e, t)
}
function Yh(e, t) {
    return bc(2048, 8, e, t)
}
function Cx(e, t) {
    return bc(4, 2, e, t)
}
function Tx(e, t) {
    return bc(4, 4, e, t)
}
function Ex(e, t) {
    return typeof t == "function" ? (e = e(),
    t(e),
    function() {
        t(null)
    }
    ) : t != null ? (e = e(),
    t.current = e,
    function() {
        t.current = null
    }
    ) : void 0
}
function Px(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    bc(4, 4, Ex.bind(null, t, e), n)
}
function Gh() {}
function Rx(e, t) {
    var n = Zt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Wh(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function _x(e, t) {
    var n = Zt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Wh(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Ix(e, t, n) {
    return 21 & pi ? (hn(n, t) || (n = Mb(),
    xe.lanes |= n,
    mi |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Pt = !0),
    e.memoizedState = n)
}
function XI(e, t) {
    var n = se;
    se = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = bd.transition;
    bd.transition = {};
    try {
        e(!1),
        t()
    } finally {
        se = n,
        bd.transition = r
    }
}
function Fx() {
    return Zt().memoizedState
}
function YI(e, t, n) {
    var r = Fr(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Lx(e))
        Mx(t, n);
    else if (n = cx(e, t, n, r),
    n !== null) {
        var i = pt();
        dn(n, e, r, i),
        Ox(n, t, r)
    }
}
function GI(e, t, n) {
    var r = Fr(e)
      , i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Lx(e))
        Mx(t, i);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
        o !== null))
            try {
                var s = t.lastRenderedState
                  , a = o(s, n);
                if (i.hasEagerState = !0,
                i.eagerState = a,
                hn(a, s)) {
                    var l = t.interleaved;
                    l === null ? (i.next = i,
                    zh(t)) : (i.next = l.next,
                    l.next = i),
                    t.interleaved = i;
                    return
                }
            } catch {}
        n = cx(e, t, i, r),
        n !== null && (i = pt(),
        dn(n, e, r, i),
        Ox(n, t, r))
    }
}
function Lx(e) {
    var t = e.alternate;
    return e === xe || t !== null && t === xe
}
function Mx(e, t) {
    xs = oc = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function Ox(e, t, n) {
    if (4194240 & n) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Th(e, n)
    }
}
var sc = {
    readContext: Qt,
    useCallback: ot,
    useContext: ot,
    useEffect: ot,
    useImperativeHandle: ot,
    useInsertionEffect: ot,
    useLayoutEffect: ot,
    useMemo: ot,
    useReducer: ot,
    useRef: ot,
    useState: ot,
    useDebugValue: ot,
    useDeferredValue: ot,
    useTransition: ot,
    useMutableSource: ot,
    useSyncExternalStore: ot,
    useId: ot,
    unstable_isNewReconciler: !1
}
  , KI = {
    readContext: Qt,
    useCallback: function(e, t) {
        return In().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Qt,
    useEffect: W0,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Vl(4194308, 4, Ex.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Vl(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Vl(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = In();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = In();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = YI.bind(null, xe, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = In();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: j0,
    useDebugValue: Gh,
    useDeferredValue: function(e) {
        return In().memoizedState = e
    },
    useTransition: function() {
        var e = j0(!1)
          , t = e[0];
        return e = XI.bind(null, e[1]),
        In().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = xe
          , i = In();
        if (ge) {
            if (n === void 0)
                throw Error(F(407));
            n = n()
        } else {
            if (n = t(),
            Ue === null)
                throw Error(F(349));
            30 & pi || yx(r, t, n)
        }
        i.memoizedState = n;
        var o = {
            value: n,
            getSnapshot: t
        };
        return i.queue = o,
        W0(xx.bind(null, r, o, e), [e]),
        r.flags |= 2048,
        zs(9, bx.bind(null, r, o, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = In()
          , t = Ue.identifierPrefix;
        if (ge) {
            var n = Qn
              , r = qn;
            n = (r & ~(1 << 32 - fn(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Vs++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = UI++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , qI = {
    readContext: Qt,
    useCallback: Rx,
    useContext: Qt,
    useEffect: Yh,
    useImperativeHandle: Px,
    useInsertionEffect: Cx,
    useLayoutEffect: Tx,
    useMemo: _x,
    useReducer: xd,
    useRef: kx,
    useState: function() {
        return xd(Bs)
    },
    useDebugValue: Gh,
    useDeferredValue: function(e) {
        var t = Zt();
        return Ix(t, Ne.memoizedState, e)
    },
    useTransition: function() {
        var e = xd(Bs)[0]
          , t = Zt().memoizedState;
        return [e, t]
    },
    useMutableSource: vx,
    useSyncExternalStore: gx,
    useId: Fx,
    unstable_isNewReconciler: !1
}
  , QI = {
    readContext: Qt,
    useCallback: Rx,
    useContext: Qt,
    useEffect: Yh,
    useImperativeHandle: Px,
    useInsertionEffect: Cx,
    useLayoutEffect: Tx,
    useMemo: _x,
    useReducer: Sd,
    useRef: kx,
    useState: function() {
        return Sd(Bs)
    },
    useDebugValue: Gh,
    useDeferredValue: function(e) {
        var t = Zt();
        return Ne === null ? t.memoizedState = e : Ix(t, Ne.memoizedState, e)
    },
    useTransition: function() {
        var e = Sd(Bs)[0]
          , t = Zt().memoizedState;
        return [e, t]
    },
    useMutableSource: vx,
    useSyncExternalStore: gx,
    useId: Fx,
    unstable_isNewReconciler: !1
};
function po(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += P_(r),
            r = r.return;
        while (r);
        var i = n
    } catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}
function wd(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function ih(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var ZI = typeof WeakMap == "function" ? WeakMap : Map;
function Dx(e, t, n) {
    n = Zn(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        lc || (lc = !0,
        hh = r),
        ih(e, t)
    }
    ,
    n
}
function Ax(e, t, n) {
    n = Zn(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }
        ,
        n.callback = function() {
            ih(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        ih(e, t),
        typeof r != "function" && (Ir === null ? Ir = new Set([this]) : Ir.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
    n
}
function U0(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new ZI;
        var i = new Set;
        r.set(t, i)
    } else
        i = r.get(t),
        i === void 0 && (i = new Set,
        r.set(t, i));
    i.has(n) || (i.add(n),
    e = dF.bind(null, e, t, n),
    t.then(e, e))
}
function X0(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t === null || t.dehydrated !== null),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Y0(e, t, n, r, i) {
    return 1 & e.mode ? (e.flags |= 65536,
    e.lanes = i,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Zn(-1, 1),
    t.tag = 2,
    _r(n, t, 1))),
    n.lanes |= 1),
    e)
}
var JI = rr.ReactCurrentOwner
  , Pt = !1;
function ht(e, t, n, r) {
    t.child = e === null ? px(t, null, n, r) : fo(t, e.child, n, r)
}
function G0(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return so(t, i),
    r = Uh(e, t, n, r, o, i),
    n = Xh(),
    e !== null && !Pt ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    nr(e, t, i)) : (ge && n && Mh(t),
    t.flags |= 1,
    ht(e, t, r, i),
    t.child)
}
function K0(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !np(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = o,
        Vx(e, t, o, r, i)) : (e = $l(n.type, null, r, t, t.mode, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (o = e.child,
    !(e.lanes & i)) {
        var s = o.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Fs,
        n(s, r) && e.ref === t.ref)
            return nr(e, t, i)
    }
    return t.flags |= 1,
    e = Lr(o, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Vx(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Fs(o, r) && e.ref === t.ref) {
            if (Pt = !1,
            t.pendingProps = r = o,
            (e.lanes & i) === 0)
                return t.lanes = e.lanes,
                nr(e, t, i);
            131072 & e.flags && (Pt = !0)
        }
    }
    return oh(e, t, n, r, i)
}
function Bx(e, t, n) {
    var r = t.pendingProps
      , i = r.children
      , o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(1 & t.mode))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            ue(to, Ot),
            Ot |= n;
        else {
            if (!(1073741824 & n))
                return e = o !== null ? o.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                ue(to, Ot),
                Ot |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = o !== null ? o.baseLanes : n,
            ue(to, Ot),
            Ot |= r
        }
    else
        o !== null ? (r = o.baseLanes | n,
        t.memoizedState = null) : r = n,
        ue(to, Ot),
        Ot |= r;
    return ht(e, t, i, n),
    t.child
}
function zx(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function oh(e, t, n, r, i) {
    var o = _t(n) ? di : lt.current;
    return o = co(t, o),
    so(t, i),
    n = Uh(e, t, n, r, o, i),
    r = Xh(),
    e !== null && !Pt ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    nr(e, t, i)) : (ge && r && Mh(t),
    t.flags |= 1,
    ht(e, t, n, i),
    t.child)
}
function q0(e, t, n, r, i) {
    if (_t(n)) {
        var o = !0;
        Zl(t)
    } else
        o = !1;
    if (so(t, i),
    t.stateNode === null)
        Bl(e, t),
        dx(t, n, r),
        rh(t, n, r, i),
        r = !0;
    else if (e === null) {
        var s = t.stateNode
          , a = t.memoizedProps;
        s.props = a;
        var l = s.context
          , c = n.contextType;
        typeof c == "object" && c !== null ? c = Qt(c) : (c = _t(n) ? di : lt.current,
        c = co(t, c));
        var u = n.getDerivedStateFromProps
          , f = typeof u == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== c) && $0(t, s, r, c),
        xr = !1;
        var d = t.memoizedState;
        s.state = d,
        rc(t, r, s, i),
        l = t.memoizedState,
        a !== r || d !== l || Rt.current || xr ? (typeof u == "function" && (nh(t, n, u, r),
        l = t.memoizedState),
        (a = xr || N0(t, n, a, r, d, l, c)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
        typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = l),
        s.props = r,
        s.state = l,
        s.context = c,
        r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        s = t.stateNode,
        ux(e, t),
        a = t.memoizedProps,
        c = t.type === t.elementType ? a : ln(t.type, a),
        s.props = c,
        f = t.pendingProps,
        d = s.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = Qt(l) : (l = _t(n) ? di : lt.current,
        l = co(t, l));
        var m = n.getDerivedStateFromProps;
        (u = typeof m == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== f || d !== l) && $0(t, s, r, l),
        xr = !1,
        d = t.memoizedState,
        s.state = d,
        rc(t, r, s, i);
        var g = t.memoizedState;
        a !== f || d !== g || Rt.current || xr ? (typeof m == "function" && (nh(t, n, m, r),
        g = t.memoizedState),
        (c = xr || N0(t, n, c, r, d, g, l) || !1) ? (u || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, g, l),
        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, g, l)),
        typeof s.componentDidUpdate == "function" && (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = g),
        s.props = r,
        s.state = g,
        s.context = l,
        r = c) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return sh(e, t, n, r, o, i)
}
function sh(e, t, n, r, i, o) {
    zx(e, t);
    var s = (128 & t.flags) !== 0;
    if (!r && !s)
        return i && D0(t, n, !1),
        nr(e, t, o);
    r = t.stateNode,
    JI.current = t;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && s ? (t.child = fo(t, e.child, null, o),
    t.child = fo(t, null, a, o)) : ht(e, t, a, o),
    t.memoizedState = r.state,
    i && D0(t, n, !0),
    t.child
}
function Nx(e) {
    var t = e.stateNode;
    t.pendingContext ? O0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && O0(e, t.context, !1),
    $h(e, t.containerInfo)
}
function Q0(e, t, n, r, i) {
    return uo(),
    Dh(i),
    t.flags |= 256,
    ht(e, t, n, r),
    t.child
}
var ah = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function lh(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function $x(e, t, n) {
    var r, i = t.pendingProps, o = be.current, s = !1, a = (128 & t.flags) !== 0;
    if ((r = a) || (r = (e === null || e.memoizedState !== null) && (2 & o) !== 0),
    r ? (s = !0,
    t.flags &= -129) : e !== null && e.memoizedState === null || (o |= 1),
    ue(be, 1 & o),
    e === null)
        return eh(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (1 & t.mode ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (a = i.children,
        e = i.fallback,
        s ? (i = t.mode,
        s = t.child,
        a = {
            mode: "hidden",
            children: a
        },
        !(1 & i) && s !== null ? (s.childLanes = 0,
        s.pendingProps = a) : s = wc(a, i, 0, null),
        e = fi(e, i, n, null),
        s.return = t,
        e.return = t,
        s.sibling = e,
        t.child = s,
        t.child.memoizedState = lh(n),
        t.memoizedState = ah,
        e) : Kh(t, a));
    if (o = e.memoizedState,
    o !== null && (r = o.dehydrated,
    r !== null))
        return eF(e, t, a, i, r, o, n);
    if (s) {
        s = i.fallback,
        a = t.mode,
        o = e.child,
        r = o.sibling;
        var l = {
            mode: "hidden",
            children: i.children
        };
        return !(1 & a) && t.child !== o ? (i = t.child,
        i.childLanes = 0,
        i.pendingProps = l,
        t.deletions = null) : (i = Lr(o, l),
        i.subtreeFlags = 14680064 & o.subtreeFlags),
        r !== null ? s = Lr(r, s) : (s = fi(s, a, n, null),
        s.flags |= 2),
        s.return = t,
        i.return = t,
        i.sibling = s,
        t.child = i,
        i = s,
        s = t.child,
        a = e.child.memoizedState,
        a = a === null ? lh(n) : {
            baseLanes: a.baseLanes | n,
            cachePool: null,
            transitions: a.transitions
        },
        s.memoizedState = a,
        s.childLanes = e.childLanes & ~n,
        t.memoizedState = ah,
        i
    }
    return s = e.child,
    e = s.sibling,
    i = Lr(s, {
        mode: "visible",
        children: i.children
    }),
    !(1 & t.mode) && (i.lanes = n),
    i.return = t,
    i.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = i,
    t.memoizedState = null,
    i
}
function Kh(e, t) {
    return t = wc({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function _l(e, t, n, r) {
    return r !== null && Dh(r),
    fo(t, e.child, null, n),
    e = Kh(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function eF(e, t, n, r, i, o, s) {
    if (n)
        return 256 & t.flags ? (t.flags &= -257,
        r = wd(Error(F(422))),
        _l(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (o = r.fallback,
        i = t.mode,
        r = wc({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        o = fi(o, i, s, null),
        o.flags |= 2,
        r.return = t,
        o.return = t,
        r.sibling = o,
        t.child = r,
        1 & t.mode && fo(t, e.child, null, s),
        t.child.memoizedState = lh(s),
        t.memoizedState = ah,
        o);
    if (!(1 & t.mode))
        return _l(e, t, s, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        o = Error(F(419)),
        r = wd(o, r, void 0),
        _l(e, t, s, r)
    }
    if (a = (s & e.childLanes) !== 0,
    Pt || a) {
        if (r = Ue,
        r !== null) {
            switch (s & -s) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default:
                i = 0
            }
            i = i & (r.suspendedLanes | s) ? 0 : i,
            i !== 0 && i !== o.retryLane && (o.retryLane = i,
            tr(e, i),
            dn(r, e, i, -1))
        }
        return tp(),
        r = wd(Error(F(421))),
        _l(e, t, s, r)
    }
    return i.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = hF.bind(null, e),
    i._reactRetry = t,
    null) : (e = o.treeContext,
    Dt = Rr(i.nextSibling),
    At = t,
    ge = !0,
    un = null,
    e !== null && (Yt[Gt++] = qn,
    Yt[Gt++] = Qn,
    Yt[Gt++] = hi,
    qn = e.id,
    Qn = e.overflow,
    hi = t),
    t = Kh(t, r.children),
    t.flags |= 4096,
    t)
}
function Z0(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    th(e.return, t, n)
}
function kd(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (o.isBackwards = t,
    o.rendering = null,
    o.renderingStartTime = 0,
    o.last = r,
    o.tail = n,
    o.tailMode = i)
}
function Hx(e, t, n) {
    var r = t.pendingProps
      , i = r.revealOrder
      , o = r.tail;
    if (ht(e, t, r.children, n),
    r = be.current,
    2 & r)
        r = 1 & r | 2,
        t.flags |= 128;
    else {
        if (e !== null && 128 & e.flags)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Z0(e, n, t);
                else if (e.tag === 19)
                    Z0(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (ue(be, r),
    !(1 & t.mode))
        t.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (n = t.child,
            i = null; n !== null; )
                e = n.alternate,
                e !== null && ic(e) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = t.child,
            t.child = null) : (i = n.sibling,
            n.sibling = null),
            kd(t, !1, i, n, o);
            break;
        case "backwards":
            for (n = null,
            i = t.child,
            t.child = null; i !== null; ) {
                if (e = i.alternate,
                e !== null && ic(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling,
                i.sibling = n,
                n = i,
                i = e
            }
            kd(t, !0, n, null, o);
            break;
        case "together":
            kd(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Bl(e, t) {
    !(1 & t.mode) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function nr(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    mi |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(F(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Lr(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Lr(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function tF(e, t, n) {
    switch (t.tag) {
    case 3:
        Nx(t),
        uo();
        break;
    case 5:
        mx(t);
        break;
    case 1:
        _t(t.type) && Zl(t);
        break;
    case 4:
        $h(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , i = t.memoizedProps.value;
        ue(tc, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (ue(be, 1 & be.current),
            t.flags |= 128,
            null) : n & t.child.childLanes ? $x(e, t, n) : (ue(be, 1 & be.current),
            e = nr(e, t, n),
            e !== null ? e.sibling : null);
        ue(be, 1 & be.current);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        128 & e.flags) {
            if (r)
                return Hx(e, t, n);
            t.flags |= 128
        }
        if (i = t.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        ue(be, be.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        Bx(e, t, n)
    }
    return nr(e, t, n)
}
var jx, ch, Wx, Ux;
jx = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
ch = function() {}
;
Wx = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode,
        ci(Mn.current);
        var o = null;
        switch (n) {
        case "input":
            i = Fd(e, i),
            r = Fd(e, r),
            o = [];
            break;
        case "select":
            i = Se({}, i, {
                value: void 0
            }),
            r = Se({}, r, {
                value: void 0
            }),
            o = [];
            break;
        case "textarea":
            i = Od(e, i),
            r = Od(e, r),
            o = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ql)
        }
        Ad(n, r);
        var s;
        n = null;
        for (c in i)
            if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
                if (c === "style") {
                    var a = i[c];
                    for (s in a)
                        a.hasOwnProperty(s) && (n || (n = {}),
                        n[s] = "")
                } else
                    c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Cs.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
        for (c in r) {
            var l = r[c];
            if (a = i?.[c],
            r.hasOwnProperty(c) && l !== a && (l != null || a != null))
                if (c === "style")
                    if (a) {
                        for (s in a)
                            !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}),
                            n[s] = "");
                        for (s in l)
                            l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}),
                            n[s] = l[s])
                    } else
                        n || (o || (o = []),
                        o.push(c, n)),
                        n = l;
                else
                    c === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    a = a ? a.__html : void 0,
                    l != null && a !== l && (o = o || []).push(c, l)) : c === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(c, "" + l) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Cs.hasOwnProperty(c) ? (l != null && c === "onScroll" && de("scroll", e),
                    o || a === l || (o = [])) : (o = o || []).push(c, l))
        }
        n && (o = o || []).push("style", n);
        var c = o;
        (t.updateQueue = c) && (t.flags |= 4)
    }
}
;
Ux = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function ls(e, t) {
    if (!ge)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function st(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= 14680064 & i.subtreeFlags,
            r |= 14680064 & i.flags,
            i.return = e,
            i = i.sibling;
    else
        for (i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags,
            r |= i.flags,
            i.return = e,
            i = i.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function nF(e, t, n) {
    var r = t.pendingProps;
    switch (Oh(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return st(t),
        null;
    case 1:
        return _t(t.type) && Ql(),
        st(t),
        null;
    case 3:
        return r = t.stateNode,
        ho(),
        he(Rt),
        he(lt),
        jh(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        e !== null && e.child !== null || (Pl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(256 & t.flags) || (t.flags |= 1024,
        un !== null && (vh(un),
        un = null))),
        ch(e, t),
        st(t),
        null;
    case 5:
        Hh(t);
        var i = ci(As.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Wx(e, t, n, r, i),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(F(166));
                return st(t),
                null
            }
            if (e = ci(Mn.current),
            Pl(t)) {
                r = t.stateNode,
                n = t.type;
                var o = t.memoizedProps;
                switch (r[Fn] = t,
                r[Os] = o,
                e = (1 & t.mode) !== 0,
                n) {
                case "dialog":
                    de("cancel", r),
                    de("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    de("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < ps.length; i++)
                        de(ps[i], r);
                    break;
                case "source":
                    de("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    de("error", r),
                    de("load", r);
                    break;
                case "details":
                    de("toggle", r);
                    break;
                case "input":
                    s0(r, o),
                    de("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!o.multiple
                    },
                    de("invalid", r);
                    break;
                case "textarea":
                    l0(r, o),
                    de("invalid", r)
                }
                Ad(n, o),
                i = null;
                for (var s in o)
                    if (o.hasOwnProperty(s)) {
                        var a = o[s];
                        s === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && El(r.textContent, a, e),
                        i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && El(r.textContent, a, e),
                        i = ["children", "" + a]) : Cs.hasOwnProperty(s) && a != null && s === "onScroll" && de("scroll", r)
                    }
                switch (n) {
                case "input":
                    pl(r),
                    a0(r, o, !0);
                    break;
                case "textarea":
                    pl(r),
                    c0(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof o.onClick == "function" && (r.onclick = ql)
                }
                r = i,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                s = i.nodeType === 9 ? i : i.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = yb(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                    is: r.is
                }) : (e = s.createElement(n),
                n === "select" && (s = e,
                r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                e[Fn] = t,
                e[Os] = r,
                jx(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (s = Vd(n, r),
                    n) {
                    case "dialog":
                        de("cancel", e),
                        de("close", e),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        de("load", e),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < ps.length; i++)
                            de(ps[i], e);
                        i = r;
                        break;
                    case "source":
                        de("error", e),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        de("error", e),
                        de("load", e),
                        i = r;
                        break;
                    case "details":
                        de("toggle", e),
                        i = r;
                        break;
                    case "input":
                        s0(e, r),
                        i = Fd(e, r),
                        de("invalid", e);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = Se({}, r, {
                            value: void 0
                        }),
                        de("invalid", e);
                        break;
                    case "textarea":
                        l0(e, r),
                        i = Od(e, r),
                        de("invalid", e);
                        break;
                    default:
                        i = r
                    }
                    Ad(n, i),
                    a = i;
                    for (o in a)
                        if (a.hasOwnProperty(o)) {
                            var l = a[o];
                            o === "style" ? Sb(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && bb(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Ts(e, l) : typeof l == "number" && Ts(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Cs.hasOwnProperty(o) ? l != null && o === "onScroll" && de("scroll", e) : l != null && bh(e, o, l, s))
                        }
                    switch (n) {
                    case "input":
                        pl(e),
                        a0(e, r, !1);
                        break;
                    case "textarea":
                        pl(e),
                        c0(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Mr(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        o = r.value,
                        o != null ? no(e, !!r.multiple, o, !1) : r.defaultValue != null && no(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (e.onclick = ql)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return st(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            Ux(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(F(166));
            if (n = ci(As.current),
            ci(Mn.current),
            Pl(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[Fn] = t,
                (o = r.nodeValue !== n) && (e = At,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        El(r.nodeValue, n, (1 & e.mode) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && El(r.nodeValue, n, (1 & e.mode) !== 0)
                    }
                o && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Fn] = t,
                t.stateNode = r
        }
        return st(t),
        null;
    case 13:
        if (he(be),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (ge && Dt !== null && 1 & t.mode && !(128 & t.flags))
                lx(),
                uo(),
                t.flags |= 98560,
                o = !1;
            else if (o = Pl(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!o)
                        throw Error(F(318));
                    if (o = t.memoizedState,
                    o = o !== null ? o.dehydrated : null,
                    !o)
                        throw Error(F(317));
                    o[Fn] = t
                } else
                    uo(),
                    !(128 & t.flags) && (t.memoizedState = null),
                    t.flags |= 4;
                st(t),
                o = !1
            } else
                un !== null && (vh(un),
                un = null),
                o = !0;
            if (!o)
                return 65536 & t.flags ? t : null
        }
        return 128 & t.flags ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        1 & t.mode && (e === null || 1 & be.current ? $e === 0 && ($e = 3) : tp())),
        t.updateQueue !== null && (t.flags |= 4),
        st(t),
        null);
    case 4:
        return ho(),
        ch(e, t),
        e === null && Ls(t.stateNode.containerInfo),
        st(t),
        null;
    case 10:
        return Bh(t.type._context),
        st(t),
        null;
    case 17:
        return _t(t.type) && Ql(),
        st(t),
        null;
    case 19:
        if (he(be),
        o = t.memoizedState,
        o === null)
            return st(t),
            null;
        if (r = (128 & t.flags) !== 0,
        s = o.rendering,
        s === null)
            if (r)
                ls(o, !1);
            else {
                if ($e !== 0 || e !== null && 128 & e.flags)
                    for (e = t.child; e !== null; ) {
                        if (s = ic(e),
                        s !== null) {
                            for (t.flags |= 128,
                            ls(o, !1),
                            r = s.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                o = n,
                                e = r,
                                o.flags &= 14680066,
                                s = o.alternate,
                                s === null ? (o.childLanes = 0,
                                o.lanes = e,
                                o.child = null,
                                o.subtreeFlags = 0,
                                o.memoizedProps = null,
                                o.memoizedState = null,
                                o.updateQueue = null,
                                o.dependencies = null,
                                o.stateNode = null) : (o.childLanes = s.childLanes,
                                o.lanes = s.lanes,
                                o.child = s.child,
                                o.subtreeFlags = 0,
                                o.deletions = null,
                                o.memoizedProps = s.memoizedProps,
                                o.memoizedState = s.memoizedState,
                                o.updateQueue = s.updateQueue,
                                o.type = s.type,
                                e = s.dependencies,
                                o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return ue(be, 1 & be.current | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                o.tail !== null && Me() > mo && (t.flags |= 128,
                r = !0,
                ls(o, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = ic(s),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    ls(o, !0),
                    o.tail === null && o.tailMode === "hidden" && !s.alternate && !ge)
                        return st(t),
                        null
                } else
                    2 * Me() - o.renderingStartTime > mo && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    ls(o, !1),
                    t.lanes = 4194304);
            o.isBackwards ? (s.sibling = t.child,
            t.child = s) : (n = o.last,
            n !== null ? n.sibling = s : t.child = s,
            o.last = s)
        }
        return o.tail !== null ? (t = o.tail,
        o.rendering = t,
        o.tail = t.sibling,
        o.renderingStartTime = Me(),
        t.sibling = null,
        n = be.current,
        ue(be, r ? 1 & n | 2 : 1 & n),
        t) : (st(t),
        null);
    case 22:
    case 23:
        return ep(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && 1 & t.mode ? 1073741824 & Ot && (st(t),
        6 & t.subtreeFlags && (t.flags |= 8192)) : st(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(F(156, t.tag))
}
function rF(e, t) {
    switch (Oh(t),
    t.tag) {
    case 1:
        return _t(t.type) && Ql(),
        e = t.flags,
        65536 & e ? (t.flags = -65537 & e | 128,
        t) : null;
    case 3:
        return ho(),
        he(Rt),
        he(lt),
        jh(),
        e = t.flags,
        65536 & e && !(128 & e) ? (t.flags = -65537 & e | 128,
        t) : null;
    case 5:
        return Hh(t),
        null;
    case 13:
        if (he(be),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(F(340));
            uo()
        }
        return e = t.flags,
        65536 & e ? (t.flags = -65537 & e | 128,
        t) : null;
    case 19:
        return he(be),
        null;
    case 4:
        return ho(),
        null;
    case 10:
        return Bh(t.type._context),
        null;
    case 22:
    case 23:
        return ep(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Il = !1
  , at = !1
  , iF = typeof WeakSet == "function" ? WeakSet : Set
  , O = null;
function eo(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                Re(e, t, r)
            }
        else
            n.current = null
}
function Xx(e, t, n) {
    try {
        n()
    } catch (r) {
        Re(e, t, r)
    }
}
var J0 = !1;
function oF(e, t) {
    if (Yd = Yl,
    e = Kb(),
    Lh(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || I;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                      , o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                      , a = -1
                      , l = -1
                      , c = 0
                      , u = 0
                      , f = e
                      , d = null;
                    t: for (; ; ) {
                        for (var m; f !== n || i !== 0 && f.nodeType !== 3 || (a = s + i),
                        f !== o || r !== 0 && f.nodeType !== 3 || (l = s + r),
                        f.nodeType === 3 && (s += f.nodeValue.length),
                        (m = f.firstChild) !== null; )
                            d = f,
                            f = m;
                        for (; ; ) {
                            if (f === e)
                                break t;
                            if (d === n && ++c === i && (a = s),
                            d === o && ++u === r && (l = s),
                            (m = f.nextSibling) !== null)
                                break;
                            f = d,
                            d = f.parentNode
                        }
                        f = m
                    }
                    n = a === -1 || l === -1 ? null : {
                        start: a,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Gd = {
        focusedElem: e,
        selectionRange: n
    },
    Yl = !1,
    O = t; O !== null; )
        if (t = O,
        e = t.child,
        (1028 & t.subtreeFlags) !== 0 && e !== null)
            e.return = t,
            O = e;
        else
            for (; O !== null; ) {
                t = O;
                try {
                    var g = t.alternate;
                    if (1024 & t.flags)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (g !== null) {
                                var y = g.memoizedProps
                                  , S = g.memoizedState
                                  , h = t.stateNode
                                  , p = h.getSnapshotBeforeUpdate(t.elementType === t.type ? y : ln(t.type, y), S);
                                h.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var v = t.stateNode.containerInfo;
                            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(F(163))
                        }
                } catch (x) {
                    Re(t, t.return, x)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    O = e;
                    break
                }
                O = t.return
            }
    return g = J0,
    J0 = !1,
    g
}
function Ss(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                i.destroy = void 0,
                o !== void 0 && Xx(t, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}
function xc(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function uh(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Yx(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    Yx(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Fn],
    delete t[Os],
    delete t[Qd],
    delete t[$I],
    delete t[HI])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Gx(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function eb(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Gx(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (2 & e.flags || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(2 & e.flags))
            return e.stateNode
    }
}
function fh(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = ql));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (fh(e, t, n),
        e = e.sibling; e !== null; )
            fh(e, t, n),
            e = e.sibling
}
function dh(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (dh(e, t, n),
        e = e.sibling; e !== null; )
            dh(e, t, n),
            e = e.sibling
}
var Qe = null
  , cn = !1;
function yr(e, t, n) {
    for (n = n.child; n !== null; )
        Kx(e, t, n),
        n = n.sibling
}
function Kx(e, t, n) {
    if (Ln && typeof Ln.onCommitFiberUnmount == "function")
        try {
            Ln.onCommitFiberUnmount(dc, n)
        } catch {}
    switch (n.tag) {
    case 5:
        at || eo(n, t);
    case 6:
        var r = Qe
          , i = cn;
        Qe = null,
        yr(e, t, n),
        Qe = r,
        cn = i,
        Qe !== null && (cn ? (e = Qe,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Qe.removeChild(n.stateNode));
        break;
    case 18:
        Qe !== null && (cn ? (e = Qe,
        n = n.stateNode,
        e.nodeType === 8 ? vd(e.parentNode, n) : e.nodeType === 1 && vd(e, n),
        _s(e)) : vd(Qe, n.stateNode));
        break;
    case 4:
        r = Qe,
        i = cn,
        Qe = n.stateNode.containerInfo,
        cn = !0,
        yr(e, t, n),
        Qe = r,
        cn = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!at && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var o = i
                  , s = o.destroy;
                o = o.tag,
                s !== void 0 && (2 & o || 4 & o) && Xx(n, t, s),
                i = i.next
            } while (i !== r)
        }
        yr(e, t, n);
        break;
    case 1:
        if (!at && (eo(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                Re(n, t, a)
            }
        yr(e, t, n);
        break;
    case 21:
        yr(e, t, n);
        break;
    case 22:
        1 & n.mode ? (at = (r = at) || n.memoizedState !== null,
        yr(e, t, n),
        at = r) : yr(e, t, n);
        break;
    default:
        yr(e, t, n)
    }
}
function tb(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new iF),
        t.forEach(function(r) {
            var i = pF.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(i, i))
        })
    }
}
function an(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e
                  , s = t
                  , a = s;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        Qe = a.stateNode,
                        cn = !1;
                        break e;
                    case 3:
                        Qe = a.stateNode.containerInfo,
                        cn = !0;
                        break e;
                    case 4:
                        Qe = a.stateNode.containerInfo,
                        cn = !0;
                        break e
                    }
                    a = a.return
                }
                if (Qe === null)
                    throw Error(F(160));
                Kx(o, s, i),
                Qe = null,
                cn = !1;
                var l = i.alternate;
                l !== null && (l.return = null),
                i.return = null
            } catch (c) {
                Re(i, t, c)
            }
        }
    if (12854 & t.subtreeFlags)
        for (t = t.child; t !== null; )
            qx(t, e),
            t = t.sibling
}
function qx(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (an(t, e),
        _n(e),
        4 & r) {
            try {
                Ss(3, e, e.return),
                xc(3, e)
            } catch (y) {
                Re(e, e.return, y)
            }
            try {
                Ss(5, e, e.return)
            } catch (y) {
                Re(e, e.return, y)
            }
        }
        break;
    case 1:
        an(t, e),
        _n(e),
        512 & r && n !== null && eo(n, n.return);
        break;
    case 5:
        if (an(t, e),
        _n(e),
        512 & r && n !== null && eo(n, n.return),
        32 & e.flags) {
            var i = e.stateNode;
            try {
                Ts(i, "")
            } catch (y) {
                Re(e, e.return, y)
            }
        }
        if (4 & r && (i = e.stateNode,
        i != null)) {
            var o = e.memoizedProps
              , s = n !== null ? n.memoizedProps : o
              , a = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    a === "input" && o.type === "radio" && o.name != null && vb(i, o),
                    Vd(a, s);
                    var c = Vd(a, o);
                    for (s = 0; s < l.length; s += 2) {
                        var u = l[s]
                          , f = l[s + 1];
                        u === "style" ? Sb(i, f) : u === "dangerouslySetInnerHTML" ? bb(i, f) : u === "children" ? Ts(i, f) : bh(i, u, f, c)
                    }
                    switch (a) {
                    case "input":
                        Ld(i, o);
                        break;
                    case "textarea":
                        gb(i, o);
                        break;
                    case "select":
                        var d = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!o.multiple;
                        var m = o.value;
                        m != null ? no(i, !!o.multiple, m, !1) : d !== !!o.multiple && (o.defaultValue != null ? no(i, !!o.multiple, o.defaultValue, !0) : no(i, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    i[Os] = o
                } catch (y) {
                    Re(e, e.return, y)
                }
        }
        break;
    case 6:
        if (an(t, e),
        _n(e),
        4 & r) {
            if (e.stateNode === null)
                throw Error(F(162));
            i = e.stateNode,
            o = e.memoizedProps;
            try {
                i.nodeValue = o
            } catch (y) {
                Re(e, e.return, y)
            }
        }
        break;
    case 3:
        if (an(t, e),
        _n(e),
        4 & r && n !== null && n.memoizedState.isDehydrated)
            try {
                _s(t.containerInfo)
            } catch (y) {
                Re(e, e.return, y)
            }
        break;
    case 4:
        an(t, e),
        _n(e);
        break;
    case 13:
        an(t, e),
        _n(e),
        i = e.child,
        8192 & i.flags && (o = i.memoizedState !== null,
        i.stateNode.isHidden = o,
        !o || i.alternate !== null && i.alternate.memoizedState !== null || (Zh = Me())),
        4 & r && tb(e);
        break;
    case 22:
        if (u = n !== null && n.memoizedState !== null,
        1 & e.mode ? (at = (c = at) || u,
        an(t, e),
        at = c) : an(t, e),
        _n(e),
        8192 & r) {
            if (c = e.memoizedState !== null,
            (e.stateNode.isHidden = c) && !u && 1 & e.mode)
                for (O = e,
                u = e.child; u !== null; ) {
                    for (f = O = u; O !== null; ) {
                        switch (d = O,
                        m = d.child,
                        d.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Ss(4, d, d.return);
                            break;
                        case 1:
                            eo(d, d.return);
                            var g = d.stateNode;
                            if (typeof g.componentWillUnmount == "function") {
                                r = d,
                                n = d.return;
                                try {
                                    t = r,
                                    g.props = t.memoizedProps,
                                    g.state = t.memoizedState,
                                    g.componentWillUnmount()
                                } catch (y) {
                                    Re(r, n, y)
                                }
                            }
                            break;
                        case 5:
                            eo(d, d.return);
                            break;
                        case 22:
                            if (d.memoizedState !== null) {
                                rb(f);
                                continue
                            }
                        }
                        m !== null ? (m.return = d,
                        O = m) : rb(f)
                    }
                    u = u.sibling
                }
            e: for (u = null,
            f = e; ; ) {
                if (f.tag === 5) {
                    if (u === null) {
                        u = f;
                        try {
                            i = f.stateNode,
                            c ? (o = i.style,
                            typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = f.stateNode,
                            l = f.memoizedProps.style,
                            s = l != null && l.hasOwnProperty("display") ? l.display : null,
                            a.style.display = xb("display", s))
                        } catch (y) {
                            Re(e, e.return, y)
                        }
                    }
                } else if (f.tag === 6) {
                    if (u === null)
                        try {
                            f.stateNode.nodeValue = c ? "" : f.memoizedProps
                        } catch (y) {
                            Re(e, e.return, y)
                        }
                } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                    f.child.return = f,
                    f = f.child;
                    continue
                }
                if (f === e)
                    break e;
                for (; f.sibling === null; ) {
                    if (f.return === null || f.return === e)
                        break e;
                    u === f && (u = null),
                    f = f.return
                }
                u === f && (u = null),
                f.sibling.return = f.return,
                f = f.sibling
            }
        }
        break;
    case 19:
        an(t, e),
        _n(e),
        4 & r && tb(e);
        break;
    case 21:
        break;
    default:
        an(t, e),
        _n(e)
    }
}
function _n(e) {
    var t = e.flags;
    if (2 & t) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Gx(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(F(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                32 & r.flags && (Ts(i, ""),
                r.flags &= -33);
                var o = eb(e);
                dh(e, o, i);
                break;
            case 3:
            case 4:
                var s = r.stateNode.containerInfo
                  , a = eb(e);
                fh(e, a, s);
                break;
            default:
                throw Error(F(161))
            }
        } catch (l) {
            Re(e, e.return, l)
        }
        e.flags &= -3
    }
    4096 & t && (e.flags &= -4097)
}
function sF(e, t, n) {
    O = e,
    Qx(e, t, n)
}
function Qx(e, t, n) {
    for (var r = (1 & e.mode) !== 0; O !== null; ) {
        var i = O
          , o = i.child;
        if (i.tag === 22 && r) {
            var s = i.memoizedState !== null || Il;
            if (!s) {
                var a = i.alternate
                  , l = a !== null && a.memoizedState !== null || at;
                a = Il;
                var c = at;
                if (Il = s,
                (at = l) && !c)
                    for (O = i; O !== null; )
                        s = O,
                        l = s.child,
                        s.tag === 22 && s.memoizedState !== null ? ib(i) : l !== null ? (l.return = s,
                        O = l) : ib(i);
                for (; o !== null; )
                    O = o,
                    Qx(o, t, n),
                    o = o.sibling;
                O = i,
                Il = a,
                at = c
            }
            nb(e, t, n)
        } else
            8772 & i.subtreeFlags && o !== null ? (o.return = i,
            O = o) : nb(e, t, n)
    }
}
function nb(e) {
    for (; O !== null; ) {
        var t = O;
        if (8772 & t.flags) {
            var n = t.alternate;
            try {
                if (8772 & t.flags)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        at || xc(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (4 & t.flags && !at)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : ln(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && z0(t, o, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            z0(t, s, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && 4 & t.flags) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && n.focus();
                                break;
                            case "img":
                                l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var c = t.alternate;
                            if (c !== null) {
                                var u = c.memoizedState;
                                if (u !== null) {
                                    var f = u.dehydrated;
                                    f !== null && _s(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(F(163))
                    }
                at || 512 & t.flags && uh(t)
            } catch (d) {
                Re(t, t.return, d)
            }
        }
        if (t === e) {
            O = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            O = n;
            break
        }
        O = t.return
    }
}
function rb(e) {
    for (; O !== null; ) {
        var t = O;
        if (t === e) {
            O = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            O = n;
            break
        }
        O = t.return
    }
}
function ib(e) {
    for (; O !== null; ) {
        var t = O;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    xc(4, t)
                } catch (l) {
                    Re(t, n, l)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = t.return;
                    try {
                        r.componentDidMount()
                    } catch (l) {
                        Re(t, i, l)
                    }
                }
                var o = t.return;
                try {
                    uh(t)
                } catch (l) {
                    Re(t, o, l)
                }
                break;
            case 5:
                var s = t.return;
                try {
                    uh(t)
                } catch (l) {
                    Re(t, s, l)
                }
            }
        } catch (l) {
            Re(t, t.return, l)
        }
        if (t === e) {
            O = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            O = a;
            break
        }
        O = t.return
    }
}
var aF = Math.ceil
  , ac = rr.ReactCurrentDispatcher
  , qh = rr.ReactCurrentOwner
  , qt = rr.ReactCurrentBatchConfig
  , ee = 0
  , Ue = null
  , Ve = null
  , Ze = 0
  , Ot = 0
  , to = Ar(0)
  , $e = 0
  , Ns = null
  , mi = 0
  , Sc = 0
  , Qh = 0
  , ws = null
  , Et = null
  , Zh = 0
  , mo = 1 / 0
  , Gn = null
  , lc = !1
  , hh = null
  , Ir = null
  , Fl = !1
  , Cr = null
  , cc = 0
  , ks = 0
  , ph = null
  , zl = -1
  , Nl = 0;
function pt() {
    return 6 & ee ? Me() : zl !== -1 ? zl : zl = Me()
}
function Fr(e) {
    return 1 & e.mode ? 2 & ee && Ze !== 0 ? Ze & -Ze : WI.transition !== null ? (Nl === 0 && (Nl = Mb()),
    Nl) : (e = se,
    e !== 0 || (e = I.event,
    e = e === void 0 ? 16 : Nb(e.type)),
    e) : 1
}
function dn(e, t, n, r) {
    if (50 < ks)
        throw ks = 0,
        ph = null,
        Error(F(185));
    $s(e, n, r),
    2 & ee && e === Ue || (e === Ue && (!(2 & ee) && (Sc |= n),
    $e === 4 && wr(e, Ze)),
    It(e, r),
    n === 1 && ee === 0 && !(1 & t.mode) && (mo = Me() + 500,
    gc && Vr()))
}
function It(e, t) {
    var n = e.callbackNode;
    X_(e, t);
    var r = Xl(e, e === Ue ? Ze : 0);
    if (r === 0)
        n !== null && d0(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && d0(n),
        t === 1)
            e.tag === 0 ? jI(ob.bind(null, e)) : ox(ob.bind(null, e)),
            zI(function() {
                !(6 & ee) && Vr()
            }),
            n = null;
        else {
            switch (Ob(r)) {
            case 1:
                n = Ch;
                break;
            case 4:
                n = Fb;
                break;
            case 16:
                n = Ul;
                break;
            case 536870912:
                n = Lb;
                break;
            default:
                n = Ul
            }
            n = o1(n, Zx.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Zx(e, t) {
    if (zl = -1,
    Nl = 0,
    6 & ee)
        throw Error(F(327));
    var n = e.callbackNode;
    if (ao() && e.callbackNode !== n)
        return null;
    var r = Xl(e, e === Ue ? Ze : 0);
    if (r === 0)
        return null;
    if (30 & r || r & e.expiredLanes || t)
        t = uc(e, r);
    else {
        t = r;
        var i = ee;
        ee |= 2;
        var o = e1();
        Ue === e && Ze === t || (Gn = null,
        mo = Me() + 500,
        ui(e, t));
        do
            try {
                uF();
                break
            } catch (a) {
                Jx(e, a)
            }
        while (1);
        Vh(),
        ac.current = o,
        ee = i,
        Ve !== null ? t = 0 : (Ue = null,
        Ze = 0,
        t = $e)
    }
    if (t !== 0) {
        if (t === 2 && (i = Hd(e),
        i !== 0 && (r = i,
        t = mh(e, i))),
        t === 1)
            throw n = Ns,
            ui(e, 0),
            wr(e, r),
            It(e, Me()),
            n;
        if (t === 6)
            wr(e, r);
        else {
            if (i = e.current.alternate,
            !(30 & r) && !lF(i) && (t = uc(e, r),
            t === 2 && (o = Hd(e),
            o !== 0 && (r = o,
            t = mh(e, o))),
            t === 1))
                throw n = Ns,
                ui(e, 0),
                wr(e, r),
                It(e, Me()),
                n;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(F(345));
            case 2:
                si(e, Et, Gn);
                break;
            case 3:
                if (wr(e, r),
                (130023424 & r) === r && (t = Zh + 500 - Me(),
                10 < t)) {
                    if (Xl(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes,
                    (i & r) !== r) {
                        pt(),
                        e.pingedLanes |= e.suspendedLanes & i;
                        break
                    }
                    e.timeoutHandle = qd(si.bind(null, e, Et, Gn), t);
                    break
                }
                si(e, Et, Gn);
                break;
            case 4:
                if (wr(e, r),
                (4194240 & r) === r)
                    break;
                for (t = e.eventTimes,
                i = -1; 0 < r; ) {
                    var s = 31 - fn(r);
                    o = 1 << s,
                    s = t[s],
                    s > i && (i = s),
                    r &= ~o
                }
                if (r = i,
                r = Me() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * aF(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = qd(si.bind(null, e, Et, Gn), r);
                    break
                }
                si(e, Et, Gn);
                break;
            case 5:
                si(e, Et, Gn);
                break;
            default:
                throw Error(F(329))
            }
        }
    }
    return It(e, Me()),
    e.callbackNode === n ? Zx.bind(null, e) : null
}
function mh(e, t) {
    var n = ws;
    return e.current.memoizedState.isDehydrated && (ui(e, t).flags |= 256),
    e = uc(e, t),
    e !== 2 && (t = Et,
    Et = n,
    t !== null && vh(t)),
    e
}
function vh(e) {
    Et === null ? Et = e : Et.push.apply(Et, e)
}
function lF(e) {
    for (var t = e; ; ) {
        if (16384 & t.flags) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                      , o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!hn(o(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        16384 & t.subtreeFlags && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function wr(e, t) {
    for (t &= ~Qh,
    t &= ~Sc,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - fn(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function ob(e) {
    if (6 & ee)
        throw Error(F(327));
    ao();
    var t = Xl(e, 0);
    if (!(1 & t))
        return It(e, Me()),
        null;
    var n = uc(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Hd(e);
        r !== 0 && (t = r,
        n = mh(e, r))
    }
    if (n === 1)
        throw n = Ns,
        ui(e, 0),
        wr(e, t),
        It(e, Me()),
        n;
    if (n === 6)
        throw Error(F(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    si(e, Et, Gn),
    It(e, Me()),
    null
}
function Jh(e, t) {
    var n = ee;
    ee |= 1;
    try {
        return e(t)
    } finally {
        ee = n,
        ee === 0 && (mo = Me() + 500,
        gc && Vr())
    }
}
function vi(e) {
    Cr !== null && Cr.tag === 0 && !(6 & ee) && ao();
    var t = ee;
    ee |= 1;
    var n = qt.transition
      , r = se;
    try {
        if (qt.transition = null,
        se = 1,
        e)
            return e()
    } finally {
        se = r,
        qt.transition = n,
        ee = t,
        !(6 & ee) && Vr()
    }
}
function ep() {
    Ot = to.current,
    he(to)
}
function ui(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    BI(n)),
    Ve !== null)
        for (n = Ve.return; n !== null; ) {
            var r = n;
            switch (Oh(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Ql();
                break;
            case 3:
                ho(),
                he(Rt),
                he(lt),
                jh();
                break;
            case 5:
                Hh(r);
                break;
            case 4:
                ho();
                break;
            case 13:
                he(be);
                break;
            case 19:
                he(be);
                break;
            case 10:
                Bh(r.type._context);
                break;
            case 22:
            case 23:
                ep()
            }
            n = n.return
        }
    if (Ue = e,
    Ve = e = Lr(e.current, null),
    Ze = Ot = t,
    $e = 0,
    Ns = null,
    Qh = Sc = mi = 0,
    Et = ws = null,
    li !== null) {
        for (t = 0; t < li.length; t++)
            if (n = li[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var i = r.next
                  , o = n.pending;
                if (o !== null) {
                    var s = o.next;
                    o.next = i,
                    r.next = s
                }
                n.pending = r
            }
        li = null
    }
    return e
}
function Jx(e, t) {
    do {
        var n = Ve;
        try {
            if (Vh(),
            Al.current = sc,
            oc) {
                for (var r = xe.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                oc = !1
            }
            if (pi = 0,
            We = Ne = xe = null,
            xs = !1,
            Vs = 0,
            qh.current = null,
            n === null || n.return === null) {
                $e = 1,
                Ns = t,
                Ve = null;
                break
            }
            e: {
                var o = e
                  , s = n.return
                  , a = n
                  , l = t;
                if (t = Ze,
                a.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var c = l
                      , u = a
                      , f = u.tag;
                    if (!(1 & u.mode) && (f === 0 || f === 11 || f === 15)) {
                        var d = u.alternate;
                        d ? (u.updateQueue = d.updateQueue,
                        u.memoizedState = d.memoizedState,
                        u.lanes = d.lanes) : (u.updateQueue = null,
                        u.memoizedState = null)
                    }
                    var m = X0(s);
                    if (m !== null) {
                        m.flags &= -257,
                        Y0(m, s, a, o, t),
                        1 & m.mode && U0(o, c, t),
                        t = m,
                        l = c;
                        var g = t.updateQueue;
                        if (g === null) {
                            var y = new Set;
                            y.add(l),
                            t.updateQueue = y
                        } else
                            g.add(l);
                        break e
                    }
                    if (!(1 & t)) {
                        U0(o, c, t),
                        tp();
                        break e
                    }
                    l = Error(F(426))
                } else if (ge && 1 & a.mode) {
                    var S = X0(s);
                    if (S !== null) {
                        !(65536 & S.flags) && (S.flags |= 256),
                        Y0(S, s, a, o, t),
                        Dh(po(l, a));
                        break e
                    }
                }
                o = l = po(l, a),
                $e !== 4 && ($e = 2),
                ws === null ? ws = [o] : ws.push(o),
                o = s;
                do {
                    switch (o.tag) {
                    case 3:
                        o.flags |= 65536,
                        t &= -t,
                        o.lanes |= t;
                        var h = Dx(o, l, t);
                        B0(o, h);
                        break e;
                    case 1:
                        a = l;
                        var p = o.type
                          , v = o.stateNode;
                        if (!(128 & o.flags) && (typeof p.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (Ir === null || !Ir.has(v)))) {
                            o.flags |= 65536,
                            t &= -t,
                            o.lanes |= t;
                            var x = Ax(o, a, t);
                            B0(o, x);
                            break e
                        }
                    }
                    o = o.return
                } while (o !== null)
            }
            n1(n)
        } catch (C) {
            t = C,
            Ve === n && n !== null && (Ve = n = n.return);
            continue
        }
        break
    } while (1)
}
function e1() {
    var e = ac.current;
    return ac.current = sc,
    e === null ? sc : e
}
function tp() {
    $e !== 0 && $e !== 3 && $e !== 2 || ($e = 4),
    Ue === null || !(268435455 & mi) && !(268435455 & Sc) || wr(Ue, Ze)
}
function uc(e, t) {
    var n = ee;
    ee |= 2;
    var r = e1();
    Ue === e && Ze === t || (Gn = null,
    ui(e, t));
    do
        try {
            cF();
            break
        } catch (i) {
            Jx(e, i)
        }
    while (1);
    if (Vh(),
    ee = n,
    ac.current = r,
    Ve !== null)
        throw Error(F(261));
    return Ue = null,
    Ze = 0,
    $e
}
function cF() {
    for (; Ve !== null; )
        t1(Ve)
}
function uF() {
    for (; Ve !== null && !V_(); )
        t1(Ve)
}
function t1(e) {
    var t = i1(e.alternate, e, Ot);
    e.memoizedProps = e.pendingProps,
    t === null ? n1(e) : Ve = t,
    qh.current = null
}
function n1(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        32768 & t.flags) {
            if (n = rF(n, t),
            n !== null) {
                n.flags &= 32767,
                Ve = n;
                return
            }
            if (e === null) {
                $e = 6,
                Ve = null;
                return
            }
            e.flags |= 32768,
            e.subtreeFlags = 0,
            e.deletions = null
        } else if (n = nF(n, t, Ot),
        n !== null) {
            Ve = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            Ve = t;
            return
        }
        Ve = t = e
    } while (t !== null);
    $e === 0 && ($e = 5)
}
function si(e, t, n) {
    var r = se
      , i = qt.transition;
    try {
        qt.transition = null,
        se = 1,
        fF(e, t, n, r)
    } finally {
        qt.transition = i,
        se = r
    }
    return null
}
function fF(e, t, n, r) {
    do
        ao();
    while (Cr !== null);
    if (6 & ee)
        throw Error(F(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(F(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (Y_(e, o),
    e === Ue && (Ve = Ue = null,
    Ze = 0),
    !(2064 & n.subtreeFlags) && !(2064 & n.flags) || Fl || (Fl = !0,
    o1(Ul, function() {
        return ao(),
        null
    })),
    o = (15990 & n.flags) !== 0,
    15990 & n.subtreeFlags || o) {
        o = qt.transition,
        qt.transition = null;
        var s = se;
        se = 1;
        var a = ee;
        ee |= 4,
        qh.current = null,
        oF(e, n),
        qx(n, e),
        MI(Gd),
        Yl = !!Yd,
        Gd = Yd = null,
        e.current = n,
        sF(n, e, i),
        B_(),
        ee = a,
        se = s,
        qt.transition = o
    } else
        e.current = n;
    if (Fl && (Fl = !1,
    Cr = e,
    cc = i),
    o = e.pendingLanes,
    o === 0 && (Ir = null),
    $_(n.stateNode, r),
    It(e, Me()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            i = t[n],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if (lc)
        throw lc = !1,
        e = hh,
        hh = null,
        e;
    return 1 & cc && e.tag !== 0 && ao(),
    o = e.pendingLanes,
    1 & o ? e === ph ? ks++ : (ks = 0,
    ph = e) : ks = 0,
    Vr(),
    null
}
function ao() {
    if (Cr !== null) {
        var e = Ob(cc)
          , t = qt.transition
          , n = se;
        try {
            if (qt.transition = null,
            se = 16 > e ? 16 : e,
            Cr === null)
                var r = !1;
            else {
                if (e = Cr,
                Cr = null,
                cc = 0,
                6 & ee)
                    throw Error(F(331));
                var i = ee;
                for (ee |= 4,
                O = e.current; O !== null; ) {
                    var o = O
                      , s = o.child;
                    if (16 & O.flags) {
                        var a = o.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var c = a[l];
                                for (O = c; O !== null; ) {
                                    var u = O;
                                    switch (u.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ss(8, u, o)
                                    }
                                    var f = u.child;
                                    if (f !== null)
                                        f.return = u,
                                        O = f;
                                    else
                                        for (; O !== null; ) {
                                            u = O;
                                            var d = u.sibling
                                              , m = u.return;
                                            if (Yx(u),
                                            u === c) {
                                                O = null;
                                                break
                                            }
                                            if (d !== null) {
                                                d.return = m,
                                                O = d;
                                                break
                                            }
                                            O = m
                                        }
                                }
                            }
                            var g = o.alternate;
                            if (g !== null) {
                                var y = g.child;
                                if (y !== null) {
                                    g.child = null;
                                    do {
                                        var S = y.sibling;
                                        y.sibling = null,
                                        y = S
                                    } while (y !== null)
                                }
                            }
                            O = o
                        }
                    }
                    if (2064 & o.subtreeFlags && s !== null)
                        s.return = o,
                        O = s;
                    else
                        e: for (; O !== null; ) {
                            if (o = O,
                            2048 & o.flags)
                                switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Ss(9, o, o.return)
                                }
                            var h = o.sibling;
                            if (h !== null) {
                                h.return = o.return,
                                O = h;
                                break e
                            }
                            O = o.return
                        }
                }
                var p = e.current;
                for (O = p; O !== null; ) {
                    s = O;
                    var v = s.child;
                    if (2064 & s.subtreeFlags && v !== null)
                        v.return = s,
                        O = v;
                    else
                        e: for (s = p; O !== null; ) {
                            if (a = O,
                            2048 & a.flags)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        xc(9, a)
                                    }
                                } catch (C) {
                                    Re(a, a.return, C)
                                }
                            if (a === s) {
                                O = null;
                                break e
                            }
                            var x = a.sibling;
                            if (x !== null) {
                                x.return = a.return,
                                O = x;
                                break e
                            }
                            O = a.return
                        }
                }
                if (ee = i,
                Vr(),
                Ln && typeof Ln.onPostCommitFiberRoot == "function")
                    try {
                        Ln.onPostCommitFiberRoot(dc, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            se = n,
            qt.transition = t
        }
    }
    return !1
}
function sb(e, t, n) {
    t = po(n, t),
    t = Dx(e, t, 1),
    e = _r(e, t, 1),
    t = pt(),
    e !== null && ($s(e, 1, t),
    It(e, t))
}
function Re(e, t, n) {
    if (e.tag === 3)
        sb(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                sb(t, e, n);
                break
            }
            if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ir === null || !Ir.has(r))) {
                    e = po(n, e),
                    e = Ax(t, e, 1),
                    t = _r(t, e, 1),
                    e = pt(),
                    t !== null && ($s(t, 1, e),
                    It(t, e));
                    break
                }
            }
            t = t.return
        }
}
function dF(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = pt(),
    e.pingedLanes |= e.suspendedLanes & n,
    Ue === e && (Ze & n) === n && ($e === 4 || $e === 3 && (130023424 & Ze) === Ze && 500 > Me() - Zh ? ui(e, 0) : Qh |= n),
    It(e, t)
}
function r1(e, t) {
    t === 0 && (1 & e.mode ? (t = gl,
    gl <<= 1,
    !(130023424 & gl) && (gl = 4194304)) : t = 1);
    var n = pt();
    e = tr(e, t),
    e !== null && ($s(e, t, n),
    It(e, n))
}
function hF(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    r1(e, n)
}
function pF(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(F(314))
    }
    r !== null && r.delete(t),
    r1(e, n)
}
var i1;
i1 = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Rt.current)
            Pt = !0;
        else {
            if (!(e.lanes & n) && !(128 & t.flags))
                return Pt = !1,
                tF(e, t, n);
            Pt = (131072 & e.flags) !== 0
        }
    else
        Pt = !1,
        ge && 1048576 & t.flags && sx(t, ec, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Bl(e, t),
        e = t.pendingProps;
        var i = co(t, lt.current);
        so(t, n),
        i = Uh(null, t, r, e, i, n);
        var o = Xh();
        return t.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        _t(r) ? (o = !0,
        Zl(t)) : o = !1,
        t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        Nh(t),
        i.updater = yc,
        t.stateNode = i,
        i._reactInternals = t,
        rh(t, r, e, n),
        t = sh(null, t, r, !0, o, n)) : (t.tag = 0,
        ge && o && Mh(t),
        ht(null, t, i, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Bl(e, t),
            e = t.pendingProps,
            i = r._init,
            r = i(r._payload),
            t.type = r,
            i = t.tag = vF(r),
            e = ln(r, e),
            i) {
            case 0:
                t = oh(null, t, r, e, n);
                break e;
            case 1:
                t = q0(null, t, r, e, n);
                break e;
            case 11:
                t = G0(null, t, r, e, n);
                break e;
            case 14:
                t = K0(null, t, r, ln(r.type, e), n);
                break e
            }
            throw Error(F(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : ln(r, i),
        oh(e, t, r, i, n);
    case 1:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : ln(r, i),
        q0(e, t, r, i, n);
    case 3:
        e: {
            if (Nx(t),
            e === null)
                throw Error(F(387));
            r = t.pendingProps,
            o = t.memoizedState,
            i = o.element,
            ux(e, t),
            rc(t, r, null, n);
            var s = t.memoizedState;
            if (r = s.element,
            o.isDehydrated) {
                if (o = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                },
                t.updateQueue.baseState = o,
                t.memoizedState = o,
                256 & t.flags) {
                    i = po(Error(F(423)), t),
                    t = Q0(e, t, r, n, i);
                    break e
                }
                if (r !== i) {
                    i = po(Error(F(424)), t),
                    t = Q0(e, t, r, n, i);
                    break e
                }
                for (Dt = Rr(t.stateNode.containerInfo.firstChild),
                At = t,
                ge = !0,
                un = null,
                n = px(t, null, r, n),
                t.child = n; n; )
                    n.flags = -3 & n.flags | 4096,
                    n = n.sibling
            } else {
                if (uo(),
                r === i) {
                    t = nr(e, t, n);
                    break e
                }
                ht(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return mx(t),
        e === null && eh(t),
        r = t.type,
        i = t.pendingProps,
        o = e !== null ? e.memoizedProps : null,
        s = i.children,
        Kd(r, i) ? s = null : o !== null && Kd(r, o) && (t.flags |= 32),
        zx(e, t),
        ht(e, t, s, n),
        t.child;
    case 6:
        return e === null && eh(t),
        null;
    case 13:
        return $x(e, t, n);
    case 4:
        return $h(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = fo(t, null, r, n) : ht(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : ln(r, i),
        G0(e, t, r, i, n);
    case 7:
        return ht(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return ht(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return ht(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            i = t.pendingProps,
            o = t.memoizedProps,
            s = i.value,
            ue(tc, r._currentValue),
            r._currentValue = s,
            o !== null)
                if (hn(o.value, s)) {
                    if (o.children === i.children && !Rt.current) {
                        t = nr(e, t, n);
                        break e
                    }
                } else
                    for (o = t.child,
                    o !== null && (o.return = t); o !== null; ) {
                        var a = o.dependencies;
                        if (a !== null) {
                            s = o.child;
                            for (var l = a.firstContext; l !== null; ) {
                                if (l.context === r) {
                                    if (o.tag === 1) {
                                        l = Zn(-1, n & -n),
                                        l.tag = 2;
                                        var c = o.updateQueue;
                                        if (c !== null) {
                                            c = c.shared;
                                            var u = c.pending;
                                            u === null ? l.next = l : (l.next = u.next,
                                            u.next = l),
                                            c.pending = l
                                        }
                                    }
                                    o.lanes |= n,
                                    l = o.alternate,
                                    l !== null && (l.lanes |= n),
                                    th(o.return, n, t),
                                    a.lanes |= n;
                                    break
                                }
                                l = l.next
                            }
                        } else if (o.tag === 10)
                            s = o.type === t.type ? null : o.child;
                        else if (o.tag === 18) {
                            if (s = o.return,
                            s === null)
                                throw Error(F(341));
                            s.lanes |= n,
                            a = s.alternate,
                            a !== null && (a.lanes |= n),
                            th(s, n, t),
                            s = o.sibling
                        } else
                            s = o.child;
                        if (s !== null)
                            s.return = o;
                        else
                            for (s = o; s !== null; ) {
                                if (s === t) {
                                    s = null;
                                    break
                                }
                                if (o = s.sibling,
                                o !== null) {
                                    o.return = s.return,
                                    s = o;
                                    break
                                }
                                s = s.return
                            }
                        o = s
                    }
            ht(e, t, i.children, n),
            t = t.child
        }
        return t;
    case 9:
        return i = t.type,
        r = t.pendingProps.children,
        so(t, n),
        i = Qt(i),
        r = r(i),
        t.flags |= 1,
        ht(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        i = ln(r, t.pendingProps),
        i = ln(r.type, i),
        K0(e, t, r, i, n);
    case 15:
        return Vx(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : ln(r, i),
        Bl(e, t),
        t.tag = 1,
        _t(r) ? (e = !0,
        Zl(t)) : e = !1,
        so(t, n),
        dx(t, r, i),
        rh(t, r, i, n),
        sh(null, t, r, !0, e, n);
    case 19:
        return Hx(e, t, n);
    case 22:
        return Bx(e, t, n)
    }
    throw Error(F(156, t.tag))
}
;
function o1(e, t) {
    return Ib(e, t)
}
function mF(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Kt(e, t, n, r) {
    return new mF(e,t,n,r)
}
function np(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function vF(e) {
    if (typeof e == "function")
        return np(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Sh)
            return 11;
        if (e === wh)
            return 14
    }
    return 2
}
function Lr(e, t) {
    var n = e.alternate;
    return n === null ? (n = Kt(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = 14680064 & e.flags,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function $l(e, t, n, r, i, o) {
    var s = 2;
    if (r = e,
    typeof e == "function")
        np(e) && (s = 1);
    else if (typeof e == "string")
        s = 5;
    else
        e: switch (e) {
        case Ui:
            return fi(n.children, i, o, t);
        case xh:
            s = 8,
            i |= 8;
            break;
        case Pd:
            return e = Kt(12, n, t, 2 | i),
            e.elementType = Pd,
            e.lanes = o,
            e;
        case Rd:
            return e = Kt(13, n, t, i),
            e.elementType = Rd,
            e.lanes = o,
            e;
        case _d:
            return e = Kt(19, n, t, i),
            e.elementType = _d,
            e.lanes = o,
            e;
        case hb:
            return wc(n, i, o, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case fb:
                    s = 10;
                    break e;
                case db:
                    s = 9;
                    break e;
                case Sh:
                    s = 11;
                    break e;
                case wh:
                    s = 14;
                    break e;
                case br:
                    s = 16,
                    r = null;
                    break e
                }
            throw Error(F(130, e == null ? e : typeof e, ""))
        }
    return t = Kt(s, n, t, i),
    t.elementType = e,
    t.type = r,
    t.lanes = o,
    t
}
function fi(e, t, n, r) {
    return e = Kt(7, e, r, t),
    e.lanes = n,
    e
}
function wc(e, t, n, r) {
    return e = Kt(22, e, r, t),
    e.elementType = hb,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Cd(e, t, n) {
    return e = Kt(6, e, null, t),
    e.lanes = n,
    e
}
function Td(e, t, n) {
    return t = Kt(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function gF(e, t, n, r, i) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = ld(0),
    this.expirationTimes = ld(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = ld(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function rp(e, t, n, r, i, o, s, a, l) {
    return e = new gF(e,t,n,a,l),
    t === 1 ? (t = 1,
    o === !0 && (t |= 8)) : t = 0,
    o = Kt(3, null, null, t),
    e.current = o,
    o.stateNode = e,
    o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Nh(o),
    e
}
function yF(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Wi,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function s1(e) {
    if (!e)
        return Or;
    e = e._reactInternals;
    e: {
        if (yi(e) !== e || e.tag !== 1)
            throw Error(F(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (_t(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(F(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (_t(n))
            return ix(e, n, t)
    }
    return t
}
function a1(e, t, n, r, i, o, s, a, l) {
    return e = rp(n, r, !0, e, i, o, s, a, l),
    e.context = s1(null),
    n = e.current,
    r = pt(),
    i = Fr(n),
    o = Zn(r, i),
    o.callback = t ?? null,
    _r(n, o, i),
    e.current.lanes = i,
    $s(e, i, r),
    It(e, r),
    e
}
function kc(e, t, n, r) {
    var i = t.current
      , o = pt()
      , s = Fr(i);
    return n = s1(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Zn(o, s),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = _r(i, t, s),
    e !== null && (dn(e, i, s, o),
    Dl(e, i, s)),
    s
}
function fc(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function ab(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function ip(e, t) {
    ab(e, t),
    (e = e.alternate) && ab(e, t)
}
function bF() {
    return null
}
var l1 = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function op(e) {
    this._internalRoot = e
}
Cc.prototype.render = op.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(F(409));
    kc(e, t, null, null)
}
;
Cc.prototype.unmount = op.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        vi(function() {
            kc(null, e, null, null)
        }),
        t[er] = null
    }
}
;
function Cc(e) {
    this._internalRoot = e
}
Cc.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Vb();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Sr.length && t !== 0 && t < Sr[n].priority; n++)
            ;
        Sr.splice(n, 0, e),
        n === 0 && zb(e)
    }
}
;
function sp(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Tc(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function lb() {}
function xF(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var c = fc(s);
                o.call(c)
            }
        }
        var s = a1(t, r, e, 0, null, !1, !1, "", lb);
        return e._reactRootContainer = s,
        e[er] = s.current,
        Ls(e.nodeType === 8 ? e.parentNode : e),
        vi(),
        s
    }
    for (; i = e.lastChild; )
        e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var c = fc(l);
            a.call(c)
        }
    }
    var l = rp(e, 0, !1, null, null, !1, !1, "", lb);
    return e._reactRootContainer = l,
    e[er] = l.current,
    Ls(e.nodeType === 8 ? e.parentNode : e),
    vi(function() {
        kc(t, l, n, r)
    }),
    l
}
function Ec(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var s = o;
        if (typeof i == "function") {
            var a = i;
            i = function() {
                var l = fc(s);
                a.call(l)
            }
        }
        kc(t, s, e, i)
    } else
        s = xF(n, t, e, i, r);
    return fc(s)
}
Db = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = hs(t.pendingLanes);
            n !== 0 && (Th(t, 1 | n),
            It(t, Me()),
            !(6 & ee) && (mo = Me() + 500,
            Vr()))
        }
        break;
    case 13:
        vi(function() {
            var r = tr(e, 1);
            if (r !== null) {
                var i = pt();
                dn(r, e, 1, i)
            }
        }),
        ip(e, 1)
    }
}
;
Eh = function(e) {
    if (e.tag === 13) {
        var t = tr(e, 134217728);
        if (t !== null) {
            var n = pt();
            dn(t, e, 134217728, n)
        }
        ip(e, 134217728)
    }
}
;
Ab = function(e) {
    if (e.tag === 13) {
        var t = Fr(e)
          , n = tr(e, t);
        if (n !== null) {
            var r = pt();
            dn(n, e, t, r)
        }
        ip(e, t)
    }
}
;
Vb = function() {
    return se
}
;
Bb = function(e, t) {
    var n = se;
    try {
        return se = e,
        t()
    } finally {
        se = n
    }
}
;
zd = function(e, t, n) {
    switch (t) {
    case "input":
        if (Ld(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var i = vc(r);
                    if (!i)
                        throw Error(F(90));
                    mb(r),
                    Ld(r, i)
                }
            }
        }
        break;
    case "textarea":
        gb(e, n);
        break;
    case "select":
        t = n.value,
        t != null && no(e, !!n.multiple, t, !1)
    }
}
;
Cb = Jh;
Tb = vi;
var SF = {
    usingClientEntryPoint: !1,
    Events: [js, Ki, vc, wb, kb, Jh]
}
  , cs = {
    findFiberByHostInstance: ai,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom"
}
  , wF = {
    bundleType: cs.bundleType,
    version: cs.version,
    rendererPackageName: cs.rendererPackageName,
    rendererConfig: cs.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: rr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Rb(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: cs.findFiberByHostInstance || bF,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && (us = __REACT_DEVTOOLS_GLOBAL_HOOK__,
!us.isDisabled && us.supportsFiber))
    try {
        dc = us.inject(wF),
        Ln = us
    } catch {}
var us;
Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = SF;
Bt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!sp(t))
        throw Error(F(200));
    return yF(e, t, null, n)
}
;
Bt.createRoot = function(e, t) {
    if (!sp(e))
        throw Error(F(299));
    var n = !1
      , r = ""
      , i = l1;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    t = rp(e, 1, !1, null, null, n, !1, r, i),
    e[er] = t.current,
    Ls(e.nodeType === 8 ? e.parentNode : e),
    new op(t)
}
;
Bt.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(F(188)) : (e = Object.keys(e).join(","),
        Error(F(268, e)));
    return e = Rb(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Bt.flushSync = function(e) {
    return vi(e)
}
;
Bt.hydrate = function(e, t, n) {
    if (!Tc(t))
        throw Error(F(200));
    return Ec(null, e, t, !0, n)
}
;
Bt.hydrateRoot = function(e, t, n) {
    if (!sp(e))
        throw Error(F(405));
    var r = n != null && n.hydratedSources || null
      , i = !1
      , o = ""
      , s = l1;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    t = a1(t, null, e, 1, n ?? null, i, !1, o, s),
    e[er] = t.current,
    Ls(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            i = n._getVersion,
            i = i(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new Cc(t)
}
;
Bt.render = function(e, t, n) {
    if (!Tc(t))
        throw Error(F(200));
    return Ec(null, e, t, !1, n)
}
;
Bt.unmountComponentAtNode = function(e) {
    if (!Tc(e))
        throw Error(F(40));
    return !!e._reactRootContainer && (vi(function() {
        Ec(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[er] = null
        })
    }),
    !0)
}
;
Bt.unstable_batchedUpdates = Jh;
Bt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Tc(n))
        throw Error(F(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(F(38));
    return Ec(e, t, n, !1, r)
}
;
Bt.version = "18.2.0-next-9e3b772b8-20220608";
function c1() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function")
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c1)
        } catch (e) {
            console.error(e)
        }
}
c1();
var Nt = Bt
  , u1 = Nt
  , kF = Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , CF = Nt.createPortal
  , TF = Nt.createRoot
  , EF = Nt.findDOMNode
  , PF = Nt.flushSync
  , RF = Nt.hydrate
  , _F = Nt.hydrateRoot
  , IF = Nt.render
  , FF = Nt.unmountComponentAtNode
  , LF = Nt.unstable_batchedUpdates
  , MF = Nt.unstable_renderSubtreeIntoContainer
  , OF = Nt.version;
var AF = En({
    "../../../node_modules/eventemitter3/index.js"(e, t) {
        "use strict";
        var n = Object.prototype.hasOwnProperty
          , r = "~";
        function i() {}
        Object.create && (i.prototype = Object.create(null),
        new i().__proto__ || (r = !1));
        function o(c, u, f) {
            this.fn = c,
            this.context = u,
            this.once = f || !1
        }
        function s(c, u, f, d, m) {
            if (typeof f != "function")
                throw new TypeError("The listener must be a function");
            var g = new o(f,d || c,m)
              , y = r ? r + u : u;
            return c._events[y] ? c._events[y].fn ? c._events[y] = [c._events[y], g] : c._events[y].push(g) : (c._events[y] = g,
            c._eventsCount++),
            c
        }
        function a(c, u) {
            --c._eventsCount === 0 ? c._events = new i : delete c._events[u]
        }
        function l() {
            this._events = new i,
            this._eventsCount = 0
        }
        l.prototype.eventNames = function() {
            var u = [], f, d;
            if (this._eventsCount === 0)
                return u;
            for (d in f = this._events)
                n.call(f, d) && u.push(r ? d.slice(1) : d);
            return Object.getOwnPropertySymbols ? u.concat(Object.getOwnPropertySymbols(f)) : u
        }
        ,
        l.prototype.listeners = function(u) {
            var f = r ? r + u : u
              , d = this._events[f];
            if (!d)
                return [];
            if (d.fn)
                return [d.fn];
            for (var m = 0, g = d.length, y = new Array(g); m < g; m++)
                y[m] = d[m].fn;
            return y
        }
        ,
        l.prototype.listenerCount = function(u) {
            var f = r ? r + u : u
              , d = this._events[f];
            return d ? d.fn ? 1 : d.length : 0
        }
        ,
        l.prototype.emit = function(u, f, d, m, g, y) {
            var S = r ? r + u : u;
            if (!this._events[S])
                return !1;
            var h = this._events[S], p = arguments.length, v, x;
            if (h.fn) {
                switch (h.once && this.removeListener(u, h.fn, void 0, !0),
                p) {
                case 1:
                    return h.fn.call(h.context),
                    !0;
                case 2:
                    return h.fn.call(h.context, f),
                    !0;
                case 3:
                    return h.fn.call(h.context, f, d),
                    !0;
                case 4:
                    return h.fn.call(h.context, f, d, m),
                    !0;
                case 5:
                    return h.fn.call(h.context, f, d, m, g),
                    !0;
                case 6:
                    return h.fn.call(h.context, f, d, m, g, y),
                    !0
                }
                for (x = 1,
                v = new Array(p - 1); x < p; x++)
                    v[x - 1] = arguments[x];
                h.fn.apply(h.context, v)
            } else {
                var C = h.length, w;
                for (x = 0; x < C; x++)
                    switch (h[x].once && this.removeListener(u, h[x].fn, void 0, !0),
                    p) {
                    case 1:
                        h[x].fn.call(h[x].context);
                        break;
                    case 2:
                        h[x].fn.call(h[x].context, f);
                        break;
                    case 3:
                        h[x].fn.call(h[x].context, f, d);
                        break;
                    case 4:
                        h[x].fn.call(h[x].context, f, d, m);
                        break;
                    default:
                        if (!v)
                            for (w = 1,
                            v = new Array(p - 1); w < p; w++)
                                v[w - 1] = arguments[w];
                        h[x].fn.apply(h[x].context, v)
                    }
            }
            return !0
        }
        ,
        l.prototype.on = function(u, f, d) {
            return s(this, u, f, d, !1)
        }
        ,
        l.prototype.once = function(u, f, d) {
            return s(this, u, f, d, !0)
        }
        ,
        l.prototype.removeListener = function(u, f, d, m) {
            var g = r ? r + u : u;
            if (!this._events[g])
                return this;
            if (!f)
                return a(this, g),
                this;
            var y = this._events[g];
            if (y.fn)
                y.fn === f && (!m || y.once) && (!d || y.context === d) && a(this, g);
            else {
                for (var S = 0, h = [], p = y.length; S < p; S++)
                    (y[S].fn !== f || m && !y[S].once || d && y[S].context !== d) && h.push(y[S]);
                h.length ? this._events[g] = h.length === 1 ? h[0] : h : a(this, g)
            }
            return this
        }
        ,
        l.prototype.removeAllListeners = function(u) {
            var f;
            return u ? (f = r ? r + u : u,
            this._events[f] && a(this, f)) : (this._events = new i,
            this._eventsCount = 0),
            this
        }
        ,
        l.prototype.off = l.prototype.removeListener,
        l.prototype.addListener = l.prototype.on,
        l.prefixed = r,
        l.EventEmitter = l,
        typeof t < "u" && (t.exports = l)
    }
})
  , Np = En({
    "../../../node_modules/process/browser.js"(e, t) {
        var n = t.exports = {}, r, i;
        function o() {
            throw new Error("setTimeout has not been defined")
        }
        function s() {
            throw new Error("clearTimeout has not been defined")
        }
        (function() {
            try {
                typeof setTimeout == "function" ? r = setTimeout : r = o
            } catch {
                r = o
            }
            try {
                typeof clearTimeout == "function" ? i = clearTimeout : i = s
            } catch {
                i = s
            }
        }
        )();
        function a(h) {
            if (r === setTimeout)
                return setTimeout(h, 0);
            if ((r === o || !r) && setTimeout)
                return r = setTimeout,
                setTimeout(h, 0);
            try {
                return r(h, 0)
            } catch {
                try {
                    return r.call(null, h, 0)
                } catch {
                    return r.call(this, h, 0)
                }
            }
        }
        function l(h) {
            if (i === clearTimeout)
                return clearTimeout(h);
            if ((i === s || !i) && clearTimeout)
                return i = clearTimeout,
                clearTimeout(h);
            try {
                return i(h)
            } catch {
                try {
                    return i.call(null, h)
                } catch {
                    return i.call(this, h)
                }
            }
        }
        var c = [], u = !1, f, d = -1;
        function m() {
            !u || !f || (u = !1,
            f.length ? c = f.concat(c) : d = -1,
            c.length && g())
        }
        function g() {
            if (!u) {
                var h = a(m);
                u = !0;
                for (var p = c.length; p; ) {
                    for (f = c,
                    c = []; ++d < p; )
                        f && f[d].run();
                    d = -1,
                    p = c.length
                }
                f = null,
                u = !1,
                l(h)
            }
        }
        n.nextTick = function(h) {
            var p = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var v = 1; v < arguments.length; v++)
                    p[v - 1] = arguments[v];
            c.push(new y(h,p)),
            c.length === 1 && !u && a(g)
        }
        ;
        function y(h, p) {
            this.fun = h,
            this.array = p
        }
        y.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        n.title = "browser",
        n.browser = !0,
        n.env = {},
        n.argv = [],
        n.version = "",
        n.versions = {};
        function S() {}
        n.on = S,
        n.addListener = S,
        n.once = S,
        n.off = S,
        n.removeListener = S,
        n.removeAllListeners = S,
        n.emit = S,
        n.prependListener = S,
        n.prependOnceListener = S,
        n.listeners = function(h) {
            return []
        }
        ,
        n.binding = function(h) {
            throw new Error("process.binding is not supported")
        }
        ,
        n.cwd = function() {
            return "/"
        }
        ,
        n.chdir = function(h) {
            throw new Error("process.chdir is not supported")
        }
        ,
        n.umask = function() {
            return 0
        }
    }
})
  , VF = En({
    "../../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js"(e) {
        "use strict";
        var t = typeof Symbol == "function" && Symbol.for
          , n = t ? Symbol.for("react.element") : 60103
          , r = t ? Symbol.for("react.portal") : 60106
          , i = t ? Symbol.for("react.fragment") : 60107
          , o = t ? Symbol.for("react.strict_mode") : 60108
          , s = t ? Symbol.for("react.profiler") : 60114
          , a = t ? Symbol.for("react.provider") : 60109
          , l = t ? Symbol.for("react.context") : 60110
          , c = t ? Symbol.for("react.async_mode") : 60111
          , u = t ? Symbol.for("react.concurrent_mode") : 60111
          , f = t ? Symbol.for("react.forward_ref") : 60112
          , d = t ? Symbol.for("react.suspense") : 60113
          , m = t ? Symbol.for("react.suspense_list") : 60120
          , g = t ? Symbol.for("react.memo") : 60115
          , y = t ? Symbol.for("react.lazy") : 60116
          , S = t ? Symbol.for("react.block") : 60121
          , h = t ? Symbol.for("react.fundamental") : 60117
          , p = t ? Symbol.for("react.responder") : 60118
          , v = t ? Symbol.for("react.scope") : 60119;
        function x(w) {
            if (typeof w == "object" && w !== null) {
                var T = w.$$typeof;
                switch (T) {
                case n:
                    switch (w = w.type,
                    w) {
                    case c:
                    case u:
                    case i:
                    case s:
                    case o:
                    case d:
                        return w;
                    default:
                        switch (w = w && w.$$typeof,
                        w) {
                        case l:
                        case f:
                        case y:
                        case g:
                        case a:
                            return w;
                        default:
                            return T
                        }
                    }
                case r:
                    return T
                }
            }
        }
        function C(w) {
            return x(w) === u
        }
        e.AsyncMode = c,
        e.ConcurrentMode = u,
        e.ContextConsumer = l,
        e.ContextProvider = a,
        e.Element = n,
        e.ForwardRef = f,
        e.Fragment = i,
        e.Lazy = y,
        e.Memo = g,
        e.Portal = r,
        e.Profiler = s,
        e.StrictMode = o,
        e.Suspense = d,
        e.isAsyncMode = function(w) {
            return C(w) || x(w) === c
        }
        ,
        e.isConcurrentMode = C,
        e.isContextConsumer = function(w) {
            return x(w) === l
        }
        ,
        e.isContextProvider = function(w) {
            return x(w) === a
        }
        ,
        e.isElement = function(w) {
            return typeof w == "object" && w !== null && w.$$typeof === n
        }
        ,
        e.isForwardRef = function(w) {
            return x(w) === f
        }
        ,
        e.isFragment = function(w) {
            return x(w) === i
        }
        ,
        e.isLazy = function(w) {
            return x(w) === y
        }
        ,
        e.isMemo = function(w) {
            return x(w) === g
        }
        ,
        e.isPortal = function(w) {
            return x(w) === r
        }
        ,
        e.isProfiler = function(w) {
            return x(w) === s
        }
        ,
        e.isStrictMode = function(w) {
            return x(w) === o
        }
        ,
        e.isSuspense = function(w) {
            return x(w) === d
        }
        ,
        e.isValidElementType = function(w) {
            return typeof w == "string" || typeof w == "function" || w === i || w === u || w === s || w === o || w === d || w === m || typeof w == "object" && w !== null && (w.$$typeof === y || w.$$typeof === g || w.$$typeof === a || w.$$typeof === l || w.$$typeof === f || w.$$typeof === h || w.$$typeof === p || w.$$typeof === v || w.$$typeof === S)
        }
        ,
        e.typeOf = x
    }
})
  , BF = En({
    "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(e, t) {
        "use strict";
        t.exports = VF()
    }
})
  , ru = En({
    "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(e, t) {
        "use strict";
        var n = BF()
          , r = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0
        }
          , i = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0
        }
          , o = {
            $$typeof: !0,
            render: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0
        }
          , s = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0
        }
          , a = {};
        a[n.ForwardRef] = o,
        a[n.Memo] = s;
        function l(S) {
            return n.isMemo(S) ? s : a[S.$$typeof] || r
        }
        var c = Object.defineProperty
          , u = Object.getOwnPropertyNames
          , f = Object.getOwnPropertySymbols
          , d = Object.getOwnPropertyDescriptor
          , m = Object.getPrototypeOf
          , g = Object.prototype;
        function y(S, h, p) {
            if (typeof h != "string") {
                if (g) {
                    var v = m(h);
                    v && v !== g && y(S, v, p)
                }
                var x = u(h);
                f && (x = x.concat(f(h)));
                for (var C = l(S), w = l(h), T = 0; T < x.length; ++T) {
                    var E = x[T];
                    if (!i[E] && !(p && p[E]) && !(w && w[E]) && !(C && C[E])) {
                        var _ = d(h, E);
                        try {
                            c(S, E, _)
                        } catch {}
                    }
                }
            }
            return S
        }
        t.exports = y
    }
})
  , zF = En({
    "../../../node_modules/archy/index.js"(e, t) {
        t.exports = function n(r, i, o) {
            i === void 0 && (i = ""),
            o || (o = {});
            var s = function(u) {
                var f = {
                    "\u2502": "|",
                    "\u2514": "`",
                    "\u251C": "+",
                    "\u2500": "-",
                    "\u252C": "-"
                };
                return o.unicode === !1 ? f[u] : u
            };
            typeof r == "string" && (r = {
                label: r
            });
            var a = r.nodes || []
              , l = (r.label || "").split(`
`)
              , c = `
` + i + (a.length ? s("\u2502") : " ") + " ";
            return i + l.join(c) + `
` + a.map(function(u, f) {
                var d = f === a.length - 1
                  , m = u.nodes && u.nodes.length
                  , g = i + (d ? " " : s("\u2502")) + " ";
                return i + s(d ? "\u2514" : "\u251C") + s("\u2500") + s(m ? "\u252C" : "\u2500") + " " + n(u, g, o).slice(i.length + 2)
            }).join("")
        }
    }
})
  , NF = En({
    "../../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js"(e, t) {
        (function() {
            function n(h, p) {
                document.addEventListener ? h.addEventListener("scroll", p, !1) : h.attachEvent("scroll", p)
            }
            function r(h) {
                document.body ? h() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function p() {
                    document.removeEventListener("DOMContentLoaded", p),
                    h()
                }) : document.attachEvent("onreadystatechange", function p() {
                    (document.readyState == "interactive" || document.readyState == "complete") && (document.detachEvent("onreadystatechange", p),
                    h())
                })
            }
            function i(h) {
                this.a = document.createElement("div"),
                this.a.setAttribute("aria-hidden", "true"),
                this.a.appendChild(document.createTextNode(h)),
                this.b = document.createElement("span"),
                this.c = document.createElement("span"),
                this.h = document.createElement("span"),
                this.f = document.createElement("span"),
                this.g = -1,
                this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",
                this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",
                this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",
                this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",
                this.b.appendChild(this.h),
                this.c.appendChild(this.f),
                this.a.appendChild(this.b),
                this.a.appendChild(this.c)
            }
            function o(h, p) {
                h.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + p + ";"
            }
            function s(h) {
                var p = h.a.offsetWidth
                  , v = p + 100;
                return h.f.style.width = v + "px",
                h.c.scrollLeft = v,
                h.b.scrollLeft = h.b.scrollWidth + 100,
                h.g !== p ? (h.g = p,
                !0) : !1
            }
            function a(h, p) {
                function v() {
                    var C = x;
                    s(C) && C.a.parentNode && p(C.g)
                }
                var x = h;
                n(h.b, v),
                n(h.c, v),
                s(h)
            }
            function l(h, p) {
                var v = p || {};
                this.family = h,
                this.style = v.style || "normal",
                this.weight = v.weight || "normal",
                this.stretch = v.stretch || "normal"
            }
            var c = null
              , u = null
              , f = null
              , d = null;
            function m() {
                if (u === null)
                    if (g() && /Apple/.test(I.navigator.vendor)) {
                        var h = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(I.navigator.userAgent);
                        u = !!h && 603 > parseInt(h[1], 10)
                    } else
                        u = !1;
                return u
            }
            function g() {
                return d === null && (d = !!document.fonts),
                d
            }
            function y() {
                if (f === null) {
                    var h = document.createElement("div");
                    try {
                        h.style.font = "condensed 100px sans-serif"
                    } catch {}
                    f = h.style.font !== ""
                }
                return f
            }
            function S(h, p) {
                return [h.style, h.weight, y() ? h.stretch : "", "100px", p].join(" ")
            }
            l.prototype.load = function(h, p) {
                var v = this
                  , x = h || "BESbswy"
                  , C = 0
                  , w = p || 3e3
                  , T = new Date().getTime();
                return new Promise(function(E, _) {
                    if (g() && !m()) {
                        var R = new Promise(function(A, ne) {
                            function q() {
                                new Date().getTime() - T >= w ? ne(Error("" + w + "ms timeout exceeded")) : document.fonts.load(S(v, '"' + v.family + '"'), x).then(function(H) {
                                    1 <= H.length ? A() : setTimeout(q, 25)
                                }, ne)
                            }
                            q()
                        }
                        )
                          , B = new Promise(function(A, ne) {
                            C = setTimeout(function() {
                                ne(Error("" + w + "ms timeout exceeded"))
                            }, w)
                        }
                        );
                        Promise.race([B, R]).then(function() {
                            clearTimeout(C),
                            E(v)
                        }, _)
                    } else
                        r(function() {
                            function A() {
                                var X;
                                (X = ie != -1 && G != -1 || ie != -1 && Y != -1 || G != -1 && Y != -1) && ((X = ie != G && ie != Y && G != Y) || (c === null && (X = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(I.navigator.userAgent),
                                c = !!X && (536 > parseInt(X[1], 10) || parseInt(X[1], 10) === 536 && 11 >= parseInt(X[2], 10))),
                                X = c && (ie == oe && G == oe && Y == oe || ie == Le && G == Le && Y == Le || ie == U && G == U && Y == U)),
                                X = !X),
                                X && (K.parentNode && K.parentNode.removeChild(K),
                                clearTimeout(C),
                                E(v))
                            }
                            function ne() {
                                if (new Date().getTime() - T >= w)
                                    K.parentNode && K.parentNode.removeChild(K),
                                    _(Error("" + w + "ms timeout exceeded"));
                                else {
                                    var X = document.hidden;
                                    (X === !0 || X === void 0) && (ie = q.a.offsetWidth,
                                    G = H.a.offsetWidth,
                                    Y = Z.a.offsetWidth,
                                    A()),
                                    C = setTimeout(ne, 50)
                                }
                            }
                            var q = new i(x)
                              , H = new i(x)
                              , Z = new i(x)
                              , ie = -1
                              , G = -1
                              , Y = -1
                              , oe = -1
                              , Le = -1
                              , U = -1
                              , K = document.createElement("div");
                            K.dir = "ltr",
                            o(q, S(v, "sans-serif")),
                            o(H, S(v, "serif")),
                            o(Z, S(v, "monospace")),
                            K.appendChild(q.a),
                            K.appendChild(H.a),
                            K.appendChild(Z.a),
                            document.body.appendChild(K),
                            oe = q.a.offsetWidth,
                            Le = H.a.offsetWidth,
                            U = Z.a.offsetWidth,
                            ne(),
                            a(q, function(X) {
                                ie = X,
                                A()
                            }),
                            o(q, S(v, '"' + v.family + '",sans-serif')),
                            a(H, function(X) {
                                G = X,
                                A()
                            }),
                            o(H, S(v, '"' + v.family + '",serif')),
                            a(Z, function(X) {
                                Y = X,
                                A()
                            }),
                            o(Z, S(v, '"' + v.family + '",monospace'))
                        })
                }
                )
            }
            ,
            typeof t == "object" ? t.exports = l : (I.FontFaceObserver = l,
            I.FontFaceObserver.prototype.load = l.prototype.load)
        }
        )()
    }
});
function Rp(e, t) {
    let n = {
        style: t
    };
    return b.isValidElement(e) ? b.cloneElement(e, n) : b.createElement(e, n)
}
var $F = class extends Error {
}
  , DS = class extends Error {
}
  , HF = class extends me {
    constructor(e) {
        super(e),
        this.state = {
            error: void 0,
            forceUpdateKey: e.forceUpdateKey
        }
    }
    static getDerivedStateFromError(e) {
        return {
            error: e
        }
    }
    static getDerivedStateFromProps(e, t) {
        if (e.forceUpdateKey !== t.forceUpdateKey) {
            let n = {
                forceUpdateKey: e.forceUpdateKey
            };
            return t.error && (n.error = void 0),
            n
        }
        return null
    }
    render() {
        if (this.state.error === void 0)
            return this.props.children;
        if (!(this.state.error instanceof $F)) {
            let n = new DS;
            throw n.cause = this.state.error,
            n
        }
        let {notFoundPage: e, defaultPageStyle: t} = this.props;
        if (!e)
            throw this.state.error;
        return Rp(e, t)
    }
}
  , jF = ":([a-z]\\w*)"
  , ki = new RegExp(jF,"gi");
function AS(e, t) {
    return e.replace(ki, (n, r) => {
        let i = t[r];
        return typeof i != "string" || i.length === 0 ? n : encodeURIComponent(i)
    }
    )
}
function VS(e, t) {
    if (!e.startsWith("/") || !t.startsWith("/"))
        throw new Error("from/to paths are expected to be absolute");
    let[n] = f1(e)
      , [r,i] = f1(t)
      , o = WF(n, r);
    return o === "" && (o = "."),
    !o.startsWith(".") && !o.startsWith("/") && (o = "./" + o),
    o + "/" + i
}
function f1(e) {
    let t = e.lastIndexOf("/");
    return [e.substring(0, t + 1), e.substring(t + 1)]
}
var ap = 46
  , bo = 47
  , Wr = (e, t) => e.charCodeAt(t)
  , d1 = (e, t) => e.lastIndexOf(t)
  , So = (e, t, n) => e.slice(t, n);
function WF(e, t) {
    if (e === t || (e = "/" + p1(e),
    t = "/" + p1(t),
    e === t))
        return "";
    let n = 1
      , r = e.length
      , i = r - n
      , o = 1
      , s = t.length - o
      , a = i < s ? i : s
      , l = -1
      , c = 0;
    for (; c < a; c++) {
        let f = Wr(e, n + c);
        if (f !== Wr(t, o + c))
            break;
        f === bo && (l = c)
    }
    if (c === a)
        if (s > a) {
            if (Wr(t, o + c) === bo)
                return So(t, o + c + 1);
            if (c === 0)
                return So(t, o + c)
        } else
            i > a && (Wr(e, n + c) === bo ? l = c : c === 0 && (l = 0));
    let u = "";
    for (c = n + l + 1; c <= r; ++c)
        (c === r || Wr(e, c) === bo) && (u += u.length === 0 ? ".." : "/..");
    return `${u}${So(t, o + l)}`
}
var UF = !1
  , Pc = "/"
  , h1 = e => e === bo;
function p1(e) {
    let t = ""
      , n = 0
      , r = -1
      , i = 0
      , o = 0;
    for (let s = 0; s <= e.length; ++s) {
        if (s < e.length)
            o = Wr(e, s);
        else {
            if (h1(o))
                break;
            o = bo
        }
        if (h1(o)) {
            if (!(r === s - 1 || i === 1))
                if (i === 2) {
                    if (t.length < 2 || n !== 2 || Wr(t, t.length - 1) !== ap || Wr(t, t.length - 2) !== ap) {
                        if (t.length > 2) {
                            let a = d1(t, Pc);
                            a === -1 ? (t = "",
                            n = 0) : (t = So(t, 0, a),
                            n = t.length - 1 - d1(t, Pc)),
                            r = s,
                            i = 0;
                            continue
                        } else if (t.length !== 0) {
                            t = "",
                            n = 0,
                            r = s,
                            i = 0;
                            continue
                        }
                    }
                    UF && (t += t.length > 0 ? `${Pc}..` : "..",
                    n = 2)
                } else
                    t.length > 0 ? t += `${Pc}${So(e, r + 1, s)}` : t = So(e, r + 1, s),
                    n = s - r - 1;
            r = s,
            i = 0
        } else
            o === ap && i !== -1 ? ++i : i = -1
    }
    return t
}
function BS(e) {
    let t = typeof I < "u" ? I.location.search : "";
    return t ? XF(t, e) : e
}
function XF(e, t) {
    let n = t.indexOf("#")
      , r = n === -1 ? t : t.substring(0, n)
      , i = n === -1 ? "" : t.substring(n)
      , o = r.indexOf("?");
    if (o === -1)
        return r + e + i;
    let s = new URLSearchParams(e)
      , a = r.substring(o + 1)
      , l = new URLSearchParams(a);
    for (let[c,u] of s)
        l.has(c) || l.append(c, u);
    return r.substring(0, o + 1) + l.toString() + i
}
function ta(e) {
    return typeof e == "object" && e !== null && !Array.isArray(e)
}
function wo(e) {
    return typeof e == "string"
}
var YF = "preload";
function zS(e) {
    return typeof e == "object" && e !== null && !b.isValidElement(e) && YF in e
}
function Vz(e) {
    let t = b.lazy(e), n, r, i = b.forwardRef(function(s, a) {
        return b.createElement(r ?? t, Object.assign(a ? {
            ref: a
        } : {}, s))
    });
    return i.preload = () => (n || (n = e().then(o => (r = o.default,
    r))),
    n),
    i
}
function iu(e, t) {
    if (t && e)
        return e.elements && t in e.elements ? e.elements[t] : t
}
function GF(e) {
    return /bot|Mediapartners-Google|Google-PageRenderer|yandex|ia_archiver/i.test(e)
}
async function KF(e, t, n, r, i, o, s) {
    var a, l, c;
    let u = e
      , f = !1
      , d = {
        ...o
    }
      , m = Array.from(u.matchAll(ki))
      , g = await Promise.all(m.map(async p => {
        var v;
        let x = p?.[0]
          , C = p?.[1];
        if (!x || !C)
            throw new Error("Failed to replace path variables: unexpected regex match group");
        let w = o[C];
        if (!w || !wo(w))
            throw new Error(`No slug found for path variable ${C}`);
        let T = await ((v = s?.[i]) === null || v === void 0 ? void 0 : v.call(s));
        if (!T || !t)
            return w;
        let E = await T.getRecordIdBySlug(w, t);
        if (!E)
            return w;
        let _ = await T.getSlugByRecordId(E, n);
        if (!_) {
            f = !0;
            let R = await T.getSlugByRecordId(E, r);
            return R && (d[C] = R),
            R ?? w
        }
        return d[C] = _,
        _
    }
    ))
      , y = 0
      , S = ""
      , h = !1;
    for (let p = 0; p < m.length; p++) {
        let v = m[p]
          , x = g[p];
        !v || !x || (S += u.substring(y, v.index),
        y = ((a = v.index) !== null && a !== void 0 ? a : 0) + ((c = (l = v[0]) === null || l === void 0 ? void 0 : l.length) !== null && c !== void 0 ? c : 0),
        S += g[p],
        h = !0)
    }
    return h && (u = S),
    {
        path: u,
        pathVariables: d,
        isMissingInLocale: f
    }
}
async function qF({currentLocale: e, nextLocale: t, defaultLocale: n, route: r, pathVariables: i, collectionUtils: o, preserveQueryParams: s}) {
    let {path: a} = r
      , l = {
        path: a,
        pathVariables: i,
        isMissingInLocale: !1
    };
    if (!a)
        return l;
    if (i && r.collectionId)
        try {
            l = await KF(a, e, t, n, r.collectionId, i, o)
        } catch {}
    return t.slug && (l.path = "/" + t.slug + l.path),
    s && l.path && (l.path = BS(l.path)),
    l
}
function QF(e, t, {global: n, routes: r}) {
    var i;
    return ((i = r[e]) === null || i === void 0 ? void 0 : i[t]) || n
}
var ZF = {
    global: void 0,
    routes: {}
}
  , NS = b.createContext(ZF);
function $z({children: e, value: t}) {
    return k(NS.Provider, {
        value: t,
        children: e
    })
}
function JF() {
    return b.useContext(NS)
}
var lp = 10
  , e2 = 1e4;
function t2(e) {
    let t = lp
      , n = e.next(0)
      , r = [n.value];
    for (; !n.done && t < e2; )
        n = e.next(t),
        r.push(n.value),
        t += lp;
    return r.length === 1 && r.push(n.value),
    {
        easing: `linear(${r.join(",")})`,
        duration: t - lp
    }
}
var ar = e => `--view-transition-${e}`;
function _p(e) {
    return [parseFloat(e), e.endsWith("px") ? "px" : "%"]
}
function $S(e) {
    let {innerWidth: t, innerHeight: n} = I
      , [r,i] = _p(e.x)
      , [o,s] = _p(e.y);
    return {
        x: i === "px" ? r : t * (r / 100),
        y: s === "px" ? o : n * (o / 100)
    }
}
var n2 = {
    makeKeyframe: (e, t, n) => {
        let r = 0;
        return (n === "exit" && e.angularDirection === "clockwise" && t === "start" || n === "exit" && e.angularDirection === "counter-clockwise" && t === "end" || n === "enter" && e.angularDirection === "counter-clockwise" && t === "start" || n === "enter" && e.angularDirection === "clockwise" && t === "end") && (r = e.sweepAngle / 360 * 100),
        `${ar("conic-offset")}: ${r}%;`
    }
    ,
    makeStyles: (e, t) => {
        let n = `var(${ar("conic-offset")})`
          , r = t === "exit" && e.angularDirection === "clockwise" || t === "enter" && e.angularDirection === "counter-clockwise"
          , i = r ? "transparent" : "black"
          , o = r ? "black" : "transparent"
          , s = "conic-gradient(from ";
        return s += `${e.angle}deg at ${e.x} ${e.y}, `,
        s += `${i} 0%, ${i} ${n}, `,
        s += `${o} ${n}, ${o} 100%)`,
        `mask-image: ${s}; -webkit-mask-image: ${s};`
    }
    ,
    makePropertyRules: () => `
        @property ${ar("conic-offset")} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `
}
  , r2 = {
    makeKeyframe: (e, t) => {
        let {x: n, y: r} = $S(e);
        return t === "start" ? `clip-path: circle(0 at ${n}px ${r}px);` : `clip-path: circle(${Math.hypot(Math.max(n, I.innerWidth - n), Math.max(r, I.innerHeight - r))}px at ${n}px ${r}px);`
    }
}
  , i2 = {
    makeKeyframe: (e, t) => {
        let {x: n, y: r} = $S(e)
          , i = I.innerHeight - r
          , o = I.innerWidth - n;
        return t === "start" ? `clip-path: inset(${r}px ${o}px ${i}px ${n}px round ${e.round}px);` : "clip-path: inset(0 round 0);"
    }
}
  , o2 = {
    makeKeyframe: (e, t, n) => {
        let[,r] = _p(e.width)
          , i = `0${r}`;
        return (t === "start" && n === "exit" || t === "end" && n === "enter") && (i = e.width),
        `${ar("blinds-width")}: ${i};`
    }
    ,
    makeStyles: (e, t) => {
        let n = `var(${ar("blinds-width")})`
          , r = t === "exit" ? "transparent" : "black"
          , i = t === "exit" ? "black" : "transparent"
          , o = "repeating-linear-gradient(";
        return o += e.angle + 90 + "deg, ",
        o += `${r} 0px, ${r} ${n}, `,
        o += `${i} ${n}, ${i} ${e.width})`,
        `mask-image: ${o}; -webkit-mask-image: ${o};`
    }
    ,
    makePropertyRules: () => `
            @property ${ar("blinds-width")} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `
}
  , s2 = {
    makeKeyframe: (e, t, n) => {
        let r = t === "start" && n === "exit" || t === "end" && n === "enter" ? 1 : 0;
        return `${ar("wipe-offset")}: ${r};`
    }
    ,
    makeStyles: (e, t) => {
        let n = `var(${ar("wipe-offset")})`
          , r = t === "exit" ? "transparent" : "black"
          , i = t === "exit" ? "black" : "transparent"
          , o = "linear-gradient(";
        return o += e.angle + 90 + "deg, ",
        o += `${r} calc(calc(0% - ${e.width}) + calc(calc(100% + ${e.width}) * ${n})), `,
        o += `${i} calc(calc(100% + ${e.width}) * ${n}))`,
        `mask-image: ${o}; -webkit-mask-image: ${o};`
    }
    ,
    makePropertyRules: () => `
            @property ${ar("wipe-offset")} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `
}
  , a2 = {
    circle: r2,
    conic: n2,
    inset: i2,
    blinds: o2,
    wipe: s2
}
  , l2 = {
    opacity: 1,
    x: "0px",
    y: "0px",
    scale: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    mask: void 0
};
function m1(e, t, n, r) {
    var i;
    let o = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
    return e.mask && (o += ((i = r?.makeKeyframe) === null || i === void 0 ? void 0 : i.call(r, e.mask, t, n)) || ""),
    o
}
function c2(e) {
    return e ? a2[e] : void 0
}
function v1(e, {transition: t, ...n}) {
    var r;
    let i = "view-transition-" + e
      , o = {
        duration: "0s",
        easing: "linear"
    };
    if (t.type === "tween")
        o.duration = t.duration + "s",
        o.easing = `cubic-bezier(${t.ease.join(",")})`;
    else if (t.type === "spring") {
        let {easing: c, duration: u} = t2(Zo({
            keyframes: [0, 1],
            stiffness: t.stiffness,
            damping: t.damping,
            mass: t.mass,
            restDelta: .001,
            restSpeed: 1e-4
        }));
        o.duration = u + "ms",
        o.easing = c
    }
    let s = c2((r = n?.mask) === null || r === void 0 ? void 0 : r.type)
      , a = m1(n, "start", e, s)
      , l = m1({
        ...l2,
        mask: n.mask
    }, "end", e, s);
    return e === "exit" && ([a,l] = [l, a]),
    `
        ${n.mask && s?.makePropertyRules ? s.makePropertyRules(n.mask) : ""}

        @keyframes ${i} {
            0% {
                ${a}
            }

            100% {
                ${l}
            }
        }

        ::view-transition-${e === "enter" ? "new" : "old"}(root) {
            animation-name: ${i};
            animation-duration: ${o.duration};
            animation-delay: ${t.delay}s;
            animation-timing-function: ${o.easing};
            animation-fill-mode: both;
            ${n.mask && s?.makeStyles ? s.makeStyles(n.mask, e) : ""}
        }
    `
}
var HS = "view-transition-styles"
  , u2 = {
    x: "0px",
    y: "0px",
    scale: 1,
    opacity: 1,
    rotate3d: !1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    mask: void 0,
    transition: {
        type: "tween",
        delay: 0,
        duration: .2,
        ease: [.27, 0, .51, 1],
        stiffness: 400,
        damping: 30,
        mass: 1
    }
};
function f2({exit: e=u2, enter: t}) {
    let n = document.createElement("style");
    n.id = HS;
    let r = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;
            }
        }
    `;
    (e.mask || t.mask || e.opacity || t.opacity || e.transition.delay || t.transition.delay) && (r += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;
            }
        `),
    r += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;
        }
    `,
    r += v1("exit", e),
    r += v1("enter", t),
    n.textContent = r,
    document.head.appendChild(n)
}
function d2() {
    J.render( () => {
        let e = document.getElementById(HS);
        e && document.head.removeChild(e)
    }
    )
}
function h2() {
    return !!document.startViewTransition
}
function p2(e, t) {
    if (!h2())
        return void e();
    f2(t);
    let n = document.startViewTransition(e);
    return Promise.all([n.ready, n.finished]).then(d2).catch( () => {}
    ),
    n
}
function jS() {
    let e = JF()
      , t = D(void 0);
    return $( () => {
        t.current && (t.current(),
        t.current = void 0)
    }
    ),
    le( (n, r, i) => {
        let o = QF(n, r, e);
        if (o) {
            let s = new Promise(l => {
                t.current = l
            }
            );
            return p2(async () => {
                i(),
                await s
            }
            , o)
        } else
            return i()
    }
    , [e])
}
function g1(e, t, {currentRoutePath: n, currentPathVariables: r, hash: i, pathVariables: o, localeId: s, preserveQueryParams: a}) {
    let {path: l} = t;
    if (l)
        try {
            let c = $p(t, {
                currentRoutePath: n,
                currentPathVariables: r,
                hash: i,
                pathVariables: o,
                preserveQueryParams: a
            });
            US({
                routeId: e,
                hash: i,
                pathVariables: o,
                localeId: s
            }, c)
        } catch {}
}
function m2(e) {
    let t = "routeId";
    return ta(e) && wo(e[t])
}
function WS(e, t) {
    I.history.replaceState(e, "", t)
}
function US(e, t) {
    I.history.pushState(e, "", t)
}
function v2({disabled: e, routeId: t, initialPathVariables: n, initialLocaleId: r}) {
    b.useLayoutEffect( () => {
        e || WS({
            routeId: t,
            pathVariables: n,
            localeId: r
        })
    }
    , [])
}
function g2(e, t) {
    let n = jS()
      , r = b.useRef(void 0)
      , i = b.useCallback( ({state: s}) => {
        var a, l, c;
        if (!ta(s))
            return;
        let {routeId: u, hash: f, pathVariables: d, localeId: m} = s;
        if (!wo(u))
            return;
        let g = () => {
            t(u, wo(m) ? m : void 0, wo(f) ? f : void 0, ta(d) ? d : void 0, !1, !0)
        }
          , y = n(e.current, u, g);
        y ? y.updateCallbackDone.then((a = r.current) === null || a === void 0 ? void 0 : a.resolve).catch((l = r.current) === null || l === void 0 ? void 0 : l.reject) : (c = r.current) === null || c === void 0 || c.resolve()
    }
    , [e, t, n])
      , o = le(s => {
        s.navigationType === "traverse" && s.intercept({
            async handler() {
                await new Promise( (a, l) => {
                    r.current = {
                        resolve: a,
                        reject: l
                    }
                }
                )
            },
            scroll: "after-transition"
        })
    }
    , []);
    b.useEffect( () => {
        var s;
        return I.addEventListener("popstate", i),
        (s = I.navigation) === null || s === void 0 || s.addEventListener("navigate", o),
        () => {
            var a;
            I.removeEventListener("popstate", i),
            (a = I.navigation) === null || a === void 0 || a.removeEventListener("navigate", o)
        }
    }
    , [i, o])
}
function y2(e, t, n) {
    let r = iu(t, e);
    if (!r)
        return;
    let i = Object.assign({}, t?.elements, n);
    return r.replace(ki, (o, s) => {
        var a;
        return String((a = i[s]) !== null && a !== void 0 ? a : o)
    }
    )
}
function $p(e, {currentRoutePath: t, currentPathVariables: n, hash: r, pathVariables: i, hashVariables: o, relative: s=!0, preserveQueryParams: a}) {
    var l;
    let c = t ?? "/";
    n && (c = c.replace(ki, (g, y) => String(n[y] || g)));
    let f = (l = e?.path) !== null && l !== void 0 ? l : "/";
    i && (f = f.replace(ki, (g, y) => String(i[y] || g)));
    let d = y2(r, e, o)
      , m = c === f && d;
    return s && (f = VS(c, f)),
    (a || m) && (f = BS(f)),
    d && (f = `${f}#${d}`),
    f
}
async function b2(e, t, n) {
    if (!e.path || !t)
        return !1;
    let i = `${n.slug ? `/${n.slug}` : ""}${AS(e.path, t)}`;
    return (await fetch(i, {
        method: "HEAD",
        redirect: "manual"
    })).type === "opaqueredirect" ? (I.location.href = I.location.origin + i,
    !0) : !1
}
async function x2(e) {
    let t = await qF(e);
    if (t) {
        try {
            localStorage.setItem("preferredLocale", e.nextLocale.code)
        } catch {}
        try {
            if (typeof t.path != "string")
                throw new Error("Expected result.path to be a string");
            if (t.isMissingInLocale && await b2(e.route, t.pathVariables, e.nextLocale))
                return;
            US({
                routeId: e.routeId,
                pathVariables: t.pathVariables,
                localeId: e.nextLocale.id,
                paginationInfo: e.paginationInfo
            }, t.path)
        } catch {}
        return t
    }
}
function S2(e) {
    try {
        let t = I.history.state;
        if (!m2(t))
            return;
        WS({
            ...t,
            paginationInfo: e
        })
    } catch {}
}
function w2(e, t) {
    if (e.routeId !== t.routeId)
        return !1;
    if (e.pathVariables === t.pathVariables)
        return !0;
    let n = e.pathVariables || {}
      , r = t.pathVariables || {};
    return n.length === r.length && Object.keys(n).every(i => n[i] === r[i])
}
var Qs = ["mousedown", "mouseup", "touchcancel", "touchend", "touchstart", "auxclick", "dblclick", "pointercancel", "pointerdown", "pointerup", "dragend", "dragstart", "drop", "compositionend", "compositionstart", "keydown", "keypress", "keyup", "input", "textInput", "copy", "cut", "paste", "click", "change", "contextmenu", "reset"]
  , XS = e => {
    var t, n;
    !((n = (t = e.target) === null || t === void 0 ? void 0 : t.closest) === null || n === void 0) && n.call(t, "#main") && (e.stopPropagation(),
    performance.mark("framer-react-event-handling-prevented"))
}
;
typeof I < "u" && (I.__FRAMER_TURN_OFF_REACT_EVENT_HANDLING__ = function() {
    if (!Qs)
        return;
    let e = {
        capture: !0
    };
    Qs.forEach(t => document.body.addEventListener(t, XS, e)),
    I.__FRAMER_TURN_OFF_REACT_EVENT_HANDLING__ = void 0
}
);
function k2() {
    if (!Qs)
        return;
    let e = {
        capture: !0
    };
    Qs.forEach(t => document.body.removeEventListener(t, XS, e)),
    Qs = void 0
}
var y1 = !1;
function C2({addHydrationEndMarker: e, turnOffEventHandlerHack: t}) {
    return bn( () => {
        y1 || (y1 = !0,
        t && k2(),
        e && (performance.mark("framer-hydration-end"),
        performance.measure("framer-hydration", "framer-hydration-start", "framer-hydration-end")))
    }
    , []),
    null
}
function YS(e) {
    return b.useCallback(t => e[t], [e])
}
var Hp = b.createContext({});
function T2({api: e, children: t}) {
    return k(Hp.Provider, {
        value: e,
        children: t
    })
}
function va() {
    return b.useContext(Hp)
}
function E2({routes: e, children: t}) {
    let n = YS(e);
    return k(Hp.Provider, {
        value: {
            getRoute: n
        },
        children: t
    })
}
var P2 = class extends me {
    constructor() {
        super(...arguments),
        this.state = {
            error: void 0
        }
    }
    static getDerivedStateFromError(e) {
        return console.error("Derived error in SuspenseErrorBoundary", e),
        {
            error: e
        }
    }
    componentDidCatch(e, t) {
        var n;
        console.error("Caught error in SuspenseErrorBoundary", e, t),
        (n = I.__framer_events) === null || n === void 0 || n.push(["published_site_load_recoverable_error", {
            message: String(e),
            componentStack: t?.componentStack
        }])
    }
    render() {
        if (this.state.error === void 0)
            return this.props.children;
        if (this.state.error instanceof DS)
            throw this.state.error.cause;
        return k(Lo, {
            children: this.props.fallbackChildren
        })
    }
}
  , R2 = typeof I < "u" ? new Promise( () => {}
) : null;
function _2() {
    if (typeof I > "u")
        return null;
    throw R2
}
function I2({children: e}) {
    return k(P2, {
        fallbackChildren: e,
        children: k(Lo, {
            fallback: k(_2, {}),
            children: e
        })
    })
}
var b1 = "default"
  , x1 = async () => {}
  , F2 = {
    paginationInfo: void 0,
    setPaginationInfo: x1,
    loadMore: x1
}
  , L2 = b.createContext(F2);
function M2() {
    let[e,t] = b.useState(0);
    return [e, b.useCallback( () => t(n => n + 1), [])]
}
var O2 = async () => {}
  , D2 = {
    activeLocale: null,
    locales: [],
    setLocale: O2
}
  , GS = b.createContext(D2);
function A2() {
    return b.useContext(GS)
}
function V2(e) {
    let t = `start-${e}`
      , n = `end-${e}`
      , r = D(void 0);
    return $( () => {
        r.current && (r.current(),
        r.current = void 0)
    }
    ),
    le( () => {
        let i = new Promise(o => {
            r.current = o
        }
        );
        performance.mark(t),
        i.then( () => {
            performance.mark(n),
            performance.measure(e, t, n)
        }
        ).catch( () => {}
        )
    }
    , [e, t, n])
}
function S1(e, t, n) {
    let r = e && document.getElementById(e);
    if (r) {
        N2(r, t);
        return
    }
    n || I.scrollTo(0, 0)
}
function B2(e) {
    let t = b.useRef([]);
    return b.useLayoutEffect( () => {
        var n;
        !((n = t.current) === null || n === void 0) && n.length && (t.current.forEach(r => r()),
        t.current = [])
    }
    , [e]),
    b.useCallback(n => {
        t.current.push(n)
    }
    , [])
}
function z2({defaultPageStyle: e, disableHistory: t, initialPathVariables: n, initialRoute: r, notFoundPage: i, collectionUtils: o, routes: s, initialLocaleId: a, locales: l=[], preserveQueryParams: c=!1, enableImproveInpDuringHydration: u=!1, shouldMarkHydrationEnd: f=!1}) {
    var d, m;
    v2({
        disabled: t,
        routeId: r,
        initialPathVariables: n,
        initialLocaleId: a
    });
    let g = jS()
      , y = V2("route-change")
      , S = b.useRef(r)
      , h = b.useRef(n)
      , p = b.useRef(a)
      , v = p.current
      , x = b.useMemo( () => {
        var U;
        return (U = l.find( ({id: K}) => v ? K === v : K === b1)) !== null && U !== void 0 ? U : null
    }
    , [v, l])
      , [C,w] = M2()
      , [T,E] = b.useState(typeof I < "u" ? (m = (d = I === null || I === void 0 ? void 0 : I.history) === null || d === void 0 ? void 0 : d.state) === null || m === void 0 ? void 0 : m.pagination : void 0)
      , _ = b.useMemo( () => ({
        paginationInfo: T,
        setPaginationInfo: async U => {
            cr( () => {
                E(U)
            }
            )
        }
        ,
        loadMore: async () => {
            if (T?.type !== "loadMore")
                return;
            let U = {
                ...T,
                currentPage: T.currentPage + 1
            };
            S2(U),
            cr( () => {
                E(U)
            }
            )
        }
    }), [T])
      , R = b.useMemo( () => ({
        activeLocale: x,
        locales: l,
        setLocale: async U => {
            let K;
            wo(U) ? K = U : ta(U) && (K = U.id);
            let X = l.find( ({id: z}) => z === b1)
              , nt = l.find( ({id: z}) => z === K);
            if (!nt)
                return;
            let ae = S.current
              , ze = s[ae];
            if (ze)
                try {
                    let z = await x2({
                        currentLocale: x,
                        nextLocale: nt,
                        route: ze,
                        routeId: ae,
                        defaultLocale: X,
                        pathVariables: h.current,
                        collectionUtils: o,
                        preserveQueryParams: c,
                        paginationInfo: T
                    });
                    if (!z)
                        return;
                    h.current = z.pathVariables,
                    p.current = nt.id,
                    g(S.current, ae, () => cr(w)),
                    y()
                } catch {}
        }
    }), [x, o, w, l, y, T, c, s, g])
      , B = B2(C)
      , A = b.useCallback( (U, K, X, nt, ae=!1, ze=!1) => {
        S.current = U,
        h.current = nt,
        p.current = K,
        B( () => {
            S1(X, ae, ze)
        }
        ),
        cr(w),
        y()
    }
    , [w, y, B]);
    g2(S, A);
    let ne = b.useCallback( (U, K, X, nt) => {
        var ae, ze;
        let z = s[U];
        if (X) {
            let He = new Set
              , Pi = (ae = z?.path) !== null && ae !== void 0 ? ae : "/";
            for (let vn of Pi.matchAll(ki)) {
                let Mt = vn[1];
                if (Mt === void 0)
                    throw new Error("A matching path variable should not be undefined");
                He.add(Mt)
            }
            X = Object.fromEntries(Object.entries(X).filter( ([vn]) => He.has(vn)))
        }
        let Hn = iu(z, K);
        if (w2({
            routeId: S.current,
            pathVariables: h.current
        }, {
            routeId: U,
            pathVariables: X
        })) {
            if (((ze = I.history.state) === null || ze === void 0 ? void 0 : ze.hash) !== K && !t) {
                let He = s[U];
                He && g1(U, He, {
                    currentRoutePath: He.path,
                    currentPathVariables: h.current,
                    pathVariables: X,
                    hash: K,
                    localeId: p.current,
                    preserveQueryParams: c
                })
            }
            S1(Hn, nt, !1);
            return
        }
        if (!z)
            return;
        if (!t) {
            let He = s[S.current];
            g1(U, z, {
                currentRoutePath: He?.path,
                currentPathVariables: h.current,
                hash: K,
                pathVariables: X,
                localeId: p.current,
                preserveQueryParams: c
            })
        }
        let nn = () => A(U, p.current, Hn, X, nt, !1);
        g(S.current, U, nn)
    }
    , [s, t, A, g, c])
      , q = YS(s)
      , H = S.current
      , Z = h.current
      , ie = b.useMemo( () => ({
        navigate: ne,
        getRoute: q,
        currentRouteId: H,
        currentPathVariables: Z,
        routes: s,
        collectionUtils: o,
        preserveQueryParams: c
    }), [ne, q, H, Z, s, o, c])
      , G = s[S.current];
    if (!G)
        throw new Error(`Router cannot find route for ${S.current}`);
    let Y = !x || !G.includedLocales || G.includedLocales.includes(x.id)
      , oe = G.path && Z ? AS(G.path, Z) : G.path
      , Le = String(v) + oe;
    return k(T2, {
        api: ie,
        children: k(GS.Provider, {
            value: R,
            children: k(L2.Provider, {
                value: _,
                children: Q(I2, {
                    children: [k(HF, {
                        notFoundPage: i,
                        defaultPageStyle: e,
                        forceUpdateKey: C,
                        children: k(b.Fragment, {
                            children: Y ? Rp(G.page, e) : i && Rp(i, e)
                        }, Le)
                    }), k(C2, {
                        addHydrationEndMarker: f,
                        turnOffEventHandlerHack: u
                    })]
                })
            })
        })
    })
}
function N2(e, t) {
    let n = t ? {
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    } : void 0;
    e.scrollIntoView(n)
}
var Rc, cp, w1;
function $2(e) {
    if (w1 !== e) {
        Rc = {};
        for (let[t,{path: n}] of Object.entries(e))
            n && (Rc[n] = {
                path: n,
                depth: j2(n),
                routeId: t
            });
        cp = Object.values(Rc),
        cp.sort( ({depth: t}, {depth: n}) => n - t),
        w1 = e
    }
    return [Rc, cp]
}
function H2(e, t, n=!0, r=[]) {
    let[i,o] = $2(e), s, a, l = t;
    if (r.length > 0) {
        let d = l.split("/").find(Boolean);
        if (d && (s = r.find( ({slug: m}) => m === d),
        s && (a = s.id,
        l = l.substring(s.slug.length + 1))),
        !a) {
            let m = r.find( ({slug: g}) => g === "");
            m && (a = m.id)
        }
    }
    let c = i[l];
    if (c) {
        let d = k1(l, c.path);
        if (d.isMatch)
            return {
                routeId: c.routeId,
                localeId: a,
                pathVariables: d.pathVariables
            }
    }
    for (let {path: d, routeId: m} of o) {
        let g = k1(l, d);
        if (g.isMatch)
            return {
                routeId: m,
                localeId: a,
                pathVariables: g.pathVariables
            }
    }
    if (!n)
        throw new Error("No exact match found for path");
    let u = i["/"];
    if (u)
        return {
            routeId: u.routeId,
            localeId: a
        };
    let f = Object.keys(e)[0];
    if (!f)
        throw new Error("Router should not have undefined routes");
    return {
        routeId: f,
        localeId: a
    }
}
function j2(e) {
    let t = e.replace(/^\/|\/$/gu, "");
    return t === "" ? 0 : t.split("/").length
}
function k1(e, t) {
    let n = []
      , i = W2(t).replace(ki, (c, u) => (n.push(u),
    "([^/]+)"))
      , o = new RegExp(i + "$")
      , s = e.match(o);
    if (!s)
        return {
            isMatch: !1
        };
    if (s.length === 1)
        return {
            isMatch: !0
        };
    let a = {}
      , l = s.slice(1);
    for (let c = 0; c < n.length; ++c) {
        let u = n[c];
        if (u === void 0)
            continue;
        let f = l[c]
          , d = a[u];
        if (d) {
            if (d !== f)
                return {
                    isMatch: !1
                };
            continue
        }
        if (f === void 0)
            throw new Error("Path variable values cannot be undefined");
        a[u] = f
    }
    return {
        isMatch: !0,
        pathVariables: a
    }
}
function W2(e) {
    return e.replace(/[|\\{}()[\]^$+*?.]/gu, "\\$&").replace(/-/gu, "\\x2d")
}
var U2 = "page";
function C1(e) {
    return ta(e) && U2 in e && e.page !== void 0
}
var X2 = b.createContext(void 0);
function ou() {
    var e;
    let t = va()
      , n = M(X2)
      , r = n ?? t.currentRouteId;
    if (!r)
        return;
    let i = (e = t.getRoute) === null || e === void 0 ? void 0 : e.call(t, r);
    if (i)
        return {
            ...i,
            id: r,
            pathVariables: n ? void 0 : t.currentPathVariables
        }
}
function Y2(e) {
    var t;
    let n = va();
    if (e)
        return (t = n.getRoute) === null || t === void 0 ? void 0 : t.call(n, e)
}
var KS = typeof I < "u" && !GF(Ge.userAgent);
function G2(e, t=!0) {
    let {getRoute: n} = va();
    b.useEffect( () => {
        if (!(!n || !t || !KS))
            for (let r of e) {
                let i = n(r);
                i?.page && jp(i.page)
            }
    }
    , [e, n, t])
}
function jp(e) {
    KS && zS(e) && e.preload()
}
function sN(e, t) {
    var n;
    let r = ou()
      , i = (n = Y2(t)) !== null && n !== void 0 ? n : r;
    return b.useMemo( () => i ? iu(i, e) : e, [e, i])
}
var T1 = new Set;
function na(e, ...t) {
    T1.has(e) || (T1.add(e),
    console.warn(e, ...t))
}
function K2(e, t, n) {
    let r = n ? `, use ${n} instead` : ""
      , i = `Deprecation warning: ${e} will be removed in version ${t}${r}.`;
    na(i)
}
var qS = class {
    constructor() {
        P(this, "observers", new Set),
        P(this, "transactions", {})
    }
    add(e) {
        this.observers.add(e);
        let t = !1;
        return () => {
            t || (t = !0,
            this.remove(e))
        }
    }
    remove(e) {
        this.observers.delete(e)
    }
    notify(e, t) {
        if (t) {
            let n = this.transactions[t] || e;
            n.value = e.value,
            this.transactions[t] = n
        } else
            this.callObservers(e)
    }
    finishTransaction(e) {
        let t = this.transactions[e];
        return delete this.transactions[e],
        this.callObservers(t, e)
    }
    callObservers(e, t) {
        let n = [];
        return new Set(this.observers).forEach(r => {
            typeof r == "function" ? r(e, t) : (r.update(e, t),
            n.push(r.finish))
        }
        ),
        n
    }
}
  , Be = ( () => {
    function e(t) {
        return K2("Animatable()", "2.0.0", "the new animation API (https://www.framer.com/api/animation/)"),
        pn(t) ? t : new Q2(t)
    }
    return e.transaction = t => {
        let n = Math.random()
          , r = new Set;
        t( (s, a) => {
            s.set(a, n),
            r.add(s)
        }
        , n);
        let o = [];
        r.forEach(s => {
            o.push(...s.finishTransaction(n))
        }
        ),
        o.forEach(s => {
            s(n)
        }
        )
    }
    ,
    e.getNumber = (t, n=0) => e.get(t, n),
    e.get = (t, n) => t == null ? n : pn(t) ? t.get() : t,
    e.objectToValues = t => {
        if (!t)
            return t;
        let n = {};
        for (let r in t) {
            let i = t[r];
            pn(i) ? n[r] = i.get() : n[r] = i
        }
        return n
    }
    ,
    e
}
)()
  , E1 = "onUpdate"
  , P1 = "finishTransaction";
function pn(e) {
    return e !== null && typeof e == "object" && E1 in e && e[E1]instanceof Function && P1 in e && e[P1]instanceof Function
}
function q2(e, t) {
    return {
        interpolate(n, r) {
            let i = n.get()
              , o = r.get()
              , s = Be(i);
            return a => {
                let l = t.interpolate(i, o)(a);
                return s.set(l),
                s
            }
        },
        difference(n, r) {
            let i = n.get();
            return t.difference(i, r.get())
        }
    }
}
var Q2 = class {
    constructor(e) {
        this.value = e,
        P(this, "observers", new qS)
    }
    static interpolationFor(e, t) {
        if (pn(e))
            return q2(e, t)
    }
    get() {
        return this.value
    }
    set(e, t) {
        let n = this.value;
        pn(e) && (e = e.get()),
        this.value = e;
        let r = {
            value: e,
            oldValue: n
        };
        this.observers.notify(r, t)
    }
    finishTransaction(e) {
        return this.observers.finishTransaction(e)
    }
    onUpdate(e) {
        return this.observers.add(e)
    }
}
;
function _c(e, t) {
    let r = 10 ** Math.round(Math.abs(t));
    return Math.round(e * r) / r
}
function R1(e, t) {
    return t === 0 ? Math.round(e) : (t -= t | 0,
    t < 0 && (t = 1 - t),
    Math.round(e - t) + t)
}
function et(e, t) {
    return {
        x: e,
        y: t
    }
}
(e => {
    e.add = (...i) => i.reduce( (o, s) => ({
        x: o.x + s.x,
        y: o.y + s.y
    }), {
        x: 0,
        y: 0
    }),
    e.subtract = (i, o) => ({
        x: i.x - o.x,
        y: i.y - o.y
    }),
    e.multiply = (i, o) => ({
        x: i.x * o,
        y: i.y * o
    }),
    e.divide = (i, o) => ({
        x: i.x / o,
        y: i.y / o
    }),
    e.absolute = i => ({
        x: Math.abs(i.x),
        y: Math.abs(i.y)
    }),
    e.reverse = i => ({
        x: i.x * -1,
        y: i.y * -1
    }),
    e.pixelAligned = (i, o={
        x: 0,
        y: 0
    }) => ({
        x: R1(i.x, o.x),
        y: R1(i.y, o.y)
    }),
    e.distance = (i, o) => {
        let s = Math.abs(i.x - o.x)
          , a = Math.abs(i.y - o.y);
        return Math.sqrt(s * s + a * a)
    }
    ,
    e.angle = (i, o) => Math.atan2(o.y - i.y, o.x - i.x) * 180 / Math.PI - 90,
    e.angleFromX = (i, o) => Math.atan2(o.y - i.y, o.x - i.x) * 180 / Math.PI,
    e.isEqual = (i, o) => i.x === o.x && i.y === o.y,
    e.rotationNormalizer = () => {
        let i;
        return o => {
            typeof i != "number" && (i = o);
            let s = i - o
              , a = Math.abs(s) + 180
              , l = Math.floor(a / 360);
            return s < 180 && (o -= l * 360),
            s > 180 && (o += l * 360),
            i = o,
            o
        }
    }
    ;
    function t(i, o) {
        return {
            x: (i.x + o.x) / 2,
            y: (i.y + o.y) / 2
        }
    }
    e.center = t;
    function n(i) {
        let o = 0
          , s = 0;
        i.forEach(c => {
            o += c.x,
            s += c.y
        }
        );
        let a = o / i.length
          , l = s / i.length;
        return {
            x: a,
            y: l
        }
    }
    e.centroid = n;
    function r(i) {
        let o = e.centroid(i)
          , s = new Map;
        for (let a = 0; a < i.length; a++) {
            let l = i[a];
            s.set(l, Math.atan2(l.x - o.x, l.y - o.y))
        }
        return i.sort( (a, l) => s.get(a) - s.get(l))
    }
    e.sortClockwise = r
}
)(et || (et = {}));
var lN = Number.MIN_VALUE;
var cN = {
    tension: 500,
    friction: 10,
    tolerance: 1 / 1e4,
    velocity: 0
};
var L = class {
    constructor() {
        this.hex = "#000000",
        this.rgb_r = 0,
        this.rgb_g = 0,
        this.rgb_b = 0,
        this.xyz_x = 0,
        this.xyz_y = 0,
        this.xyz_z = 0,
        this.luv_l = 0,
        this.luv_u = 0,
        this.luv_v = 0,
        this.lch_l = 0,
        this.lch_c = 0,
        this.lch_h = 0,
        this.hsluv_h = 0,
        this.hsluv_s = 0,
        this.hsluv_l = 0,
        this.hpluv_h = 0,
        this.hpluv_p = 0,
        this.hpluv_l = 0,
        this.r0s = 0,
        this.r0i = 0,
        this.r1s = 0,
        this.r1i = 0,
        this.g0s = 0,
        this.g0i = 0,
        this.g1s = 0,
        this.g1i = 0,
        this.b0s = 0,
        this.b0i = 0,
        this.b1s = 0,
        this.b1i = 0
    }
    static fromLinear(e) {
        return e <= .0031308 ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - .055
    }
    static toLinear(e) {
        return e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92
    }
    static yToL(e) {
        return e <= L.epsilon ? e / L.refY * L.kappa : 116 * Math.pow(e / L.refY, 1 / 3) - 16
    }
    static lToY(e) {
        return e <= 8 ? L.refY * e / L.kappa : L.refY * Math.pow((e + 16) / 116, 3)
    }
    static rgbChannelToHex(e) {
        let t = Math.round(e * 255)
          , n = t % 16
          , r = (t - n) / 16 | 0;
        return L.hexChars.charAt(r) + L.hexChars.charAt(n)
    }
    static hexToRgbChannel(e, t) {
        let n = L.hexChars.indexOf(e.charAt(t))
          , r = L.hexChars.indexOf(e.charAt(t + 1));
        return (n * 16 + r) / 255
    }
    static distanceFromOriginAngle(e, t, n) {
        let r = t / (Math.sin(n) - e * Math.cos(n));
        return r < 0 ? 1 / 0 : r
    }
    static distanceFromOrigin(e, t) {
        return Math.abs(t) / Math.sqrt(Math.pow(e, 2) + 1)
    }
    static min6(e, t, n, r, i, o) {
        return Math.min(e, Math.min(t, Math.min(n, Math.min(r, Math.min(i, o)))))
    }
    rgbToHex() {
        this.hex = "#",
        this.hex += L.rgbChannelToHex(this.rgb_r),
        this.hex += L.rgbChannelToHex(this.rgb_g),
        this.hex += L.rgbChannelToHex(this.rgb_b)
    }
    hexToRgb() {
        this.hex = this.hex.toLowerCase(),
        this.rgb_r = L.hexToRgbChannel(this.hex, 1),
        this.rgb_g = L.hexToRgbChannel(this.hex, 3),
        this.rgb_b = L.hexToRgbChannel(this.hex, 5)
    }
    xyzToRgb() {
        this.rgb_r = L.fromLinear(L.m_r0 * this.xyz_x + L.m_r1 * this.xyz_y + L.m_r2 * this.xyz_z),
        this.rgb_g = L.fromLinear(L.m_g0 * this.xyz_x + L.m_g1 * this.xyz_y + L.m_g2 * this.xyz_z),
        this.rgb_b = L.fromLinear(L.m_b0 * this.xyz_x + L.m_b1 * this.xyz_y + L.m_b2 * this.xyz_z)
    }
    rgbToXyz() {
        let e = L.toLinear(this.rgb_r)
          , t = L.toLinear(this.rgb_g)
          , n = L.toLinear(this.rgb_b);
        this.xyz_x = .41239079926595 * e + .35758433938387 * t + .18048078840183 * n,
        this.xyz_y = .21263900587151 * e + .71516867876775 * t + .072192315360733 * n,
        this.xyz_z = .019330818715591 * e + .11919477979462 * t + .95053215224966 * n
    }
    xyzToLuv() {
        let e = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z
          , t = 4 * this.xyz_x
          , n = 9 * this.xyz_y;
        e !== 0 ? (t /= e,
        n /= e) : (t = NaN,
        n = NaN),
        this.luv_l = L.yToL(this.xyz_y),
        this.luv_l === 0 ? (this.luv_u = 0,
        this.luv_v = 0) : (this.luv_u = 13 * this.luv_l * (t - L.refU),
        this.luv_v = 13 * this.luv_l * (n - L.refV))
    }
    luvToXyz() {
        if (this.luv_l === 0) {
            this.xyz_x = 0,
            this.xyz_y = 0,
            this.xyz_z = 0;
            return
        }
        let e = this.luv_u / (13 * this.luv_l) + L.refU
          , t = this.luv_v / (13 * this.luv_l) + L.refV;
        this.xyz_y = L.lToY(this.luv_l),
        this.xyz_x = 0 - 9 * this.xyz_y * e / ((e - 4) * t - e * t),
        this.xyz_z = (9 * this.xyz_y - 15 * t * this.xyz_y - t * this.xyz_x) / (3 * t)
    }
    luvToLch() {
        if (this.lch_l = this.luv_l,
        this.lch_c = Math.sqrt(this.luv_u * this.luv_u + this.luv_v * this.luv_v),
        this.lch_c < 1e-8)
            this.lch_h = 0;
        else {
            let e = Math.atan2(this.luv_v, this.luv_u);
            this.lch_h = e * 180 / Math.PI,
            this.lch_h < 0 && (this.lch_h = 360 + this.lch_h)
        }
    }
    lchToLuv() {
        let e = this.lch_h / 180 * Math.PI;
        this.luv_l = this.lch_l,
        this.luv_u = Math.cos(e) * this.lch_c,
        this.luv_v = Math.sin(e) * this.lch_c
    }
    calculateBoundingLines(e) {
        let t = Math.pow(e + 16, 3) / 1560896
          , n = t > L.epsilon ? t : e / L.kappa
          , r = n * (284517 * L.m_r0 - 94839 * L.m_r2)
          , i = n * (838422 * L.m_r2 + 769860 * L.m_r1 + 731718 * L.m_r0)
          , o = n * (632260 * L.m_r2 - 126452 * L.m_r1)
          , s = n * (284517 * L.m_g0 - 94839 * L.m_g2)
          , a = n * (838422 * L.m_g2 + 769860 * L.m_g1 + 731718 * L.m_g0)
          , l = n * (632260 * L.m_g2 - 126452 * L.m_g1)
          , c = n * (284517 * L.m_b0 - 94839 * L.m_b2)
          , u = n * (838422 * L.m_b2 + 769860 * L.m_b1 + 731718 * L.m_b0)
          , f = n * (632260 * L.m_b2 - 126452 * L.m_b1);
        this.r0s = r / o,
        this.r0i = i * e / o,
        this.r1s = r / (o + 126452),
        this.r1i = (i - 769860) * e / (o + 126452),
        this.g0s = s / l,
        this.g0i = a * e / l,
        this.g1s = s / (l + 126452),
        this.g1i = (a - 769860) * e / (l + 126452),
        this.b0s = c / f,
        this.b0i = u * e / f,
        this.b1s = c / (f + 126452),
        this.b1i = (u - 769860) * e / (f + 126452)
    }
    calcMaxChromaHpluv() {
        let e = L.distanceFromOrigin(this.r0s, this.r0i)
          , t = L.distanceFromOrigin(this.r1s, this.r1i)
          , n = L.distanceFromOrigin(this.g0s, this.g0i)
          , r = L.distanceFromOrigin(this.g1s, this.g1i)
          , i = L.distanceFromOrigin(this.b0s, this.b0i)
          , o = L.distanceFromOrigin(this.b1s, this.b1i);
        return L.min6(e, t, n, r, i, o)
    }
    calcMaxChromaHsluv(e) {
        let t = e / 360 * Math.PI * 2
          , n = L.distanceFromOriginAngle(this.r0s, this.r0i, t)
          , r = L.distanceFromOriginAngle(this.r1s, this.r1i, t)
          , i = L.distanceFromOriginAngle(this.g0s, this.g0i, t)
          , o = L.distanceFromOriginAngle(this.g1s, this.g1i, t)
          , s = L.distanceFromOriginAngle(this.b0s, this.b0i, t)
          , a = L.distanceFromOriginAngle(this.b1s, this.b1i, t);
        return L.min6(n, r, i, o, s, a)
    }
    hsluvToLch() {
        if (this.hsluv_l > 99.9999999)
            this.lch_l = 100,
            this.lch_c = 0;
        else if (this.hsluv_l < 1e-8)
            this.lch_l = 0,
            this.lch_c = 0;
        else {
            this.lch_l = this.hsluv_l,
            this.calculateBoundingLines(this.hsluv_l);
            let e = this.calcMaxChromaHsluv(this.hsluv_h);
            this.lch_c = e / 100 * this.hsluv_s
        }
        this.lch_h = this.hsluv_h
    }
    lchToHsluv() {
        if (this.lch_l > 99.9999999)
            this.hsluv_s = 0,
            this.hsluv_l = 100;
        else if (this.lch_l < 1e-8)
            this.hsluv_s = 0,
            this.hsluv_l = 0;
        else {
            this.calculateBoundingLines(this.lch_l);
            let e = this.calcMaxChromaHsluv(this.lch_h);
            this.hsluv_s = this.lch_c / e * 100,
            this.hsluv_l = this.lch_l
        }
        this.hsluv_h = this.lch_h
    }
    hpluvToLch() {
        if (this.hpluv_l > 99.9999999)
            this.lch_l = 100,
            this.lch_c = 0;
        else if (this.hpluv_l < 1e-8)
            this.lch_l = 0,
            this.lch_c = 0;
        else {
            this.lch_l = this.hpluv_l,
            this.calculateBoundingLines(this.hpluv_l);
            let e = this.calcMaxChromaHpluv();
            this.lch_c = e / 100 * this.hpluv_p
        }
        this.lch_h = this.hpluv_h
    }
    lchToHpluv() {
        if (this.lch_l > 99.9999999)
            this.hpluv_p = 0,
            this.hpluv_l = 100;
        else if (this.lch_l < 1e-8)
            this.hpluv_p = 0,
            this.hpluv_l = 0;
        else {
            this.calculateBoundingLines(this.lch_l);
            let e = this.calcMaxChromaHpluv();
            this.hpluv_p = this.lch_c / e * 100,
            this.hpluv_l = this.lch_l
        }
        this.hpluv_h = this.lch_h
    }
    hsluvToRgb() {
        this.hsluvToLch(),
        this.lchToLuv(),
        this.luvToXyz(),
        this.xyzToRgb()
    }
    hpluvToRgb() {
        this.hpluvToLch(),
        this.lchToLuv(),
        this.luvToXyz(),
        this.xyzToRgb()
    }
    hsluvToHex() {
        this.hsluvToRgb(),
        this.rgbToHex()
    }
    hpluvToHex() {
        this.hpluvToRgb(),
        this.rgbToHex()
    }
    rgbToHsluv() {
        this.rgbToXyz(),
        this.xyzToLuv(),
        this.luvToLch(),
        this.lchToHpluv(),
        this.lchToHsluv()
    }
    rgbToHpluv() {
        this.rgbToXyz(),
        this.xyzToLuv(),
        this.luvToLch(),
        this.lchToHpluv(),
        this.lchToHpluv()
    }
    hexToHsluv() {
        this.hexToRgb(),
        this.rgbToHsluv()
    }
    hexToHpluv() {
        this.hexToRgb(),
        this.rgbToHpluv()
    }
}
;
L.hexChars = "0123456789abcdef";
L.refY = 1;
L.refU = .19783000664283;
L.refV = .46831999493879;
L.kappa = 903.2962962;
L.epsilon = .0088564516;
L.m_r0 = 3.240969941904521;
L.m_r1 = -1.537383177570093;
L.m_r2 = -.498610760293;
L.m_g0 = -.96924363628087;
L.m_g1 = 1.87596750150772;
L.m_g2 = .041555057407175;
L.m_b0 = .055630079696993;
L.m_b1 = -.20397695888897;
L.m_b2 = 1.056971514242878;
var Ip = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
};
function Br(e, t, n, r=!1) {
    let[i,o] = t
      , [s,a] = n
      , l = o - i;
    if (l === 0)
        return (a + s) / 2;
    let c = a - s;
    if (c === 0)
        return s;
    let u = s + (e - i) / l * c;
    if (r === !0)
        if (s < a) {
            if (u < s)
                return s;
            if (u > a)
                return a
        } else {
            if (u > s)
                return s;
            if (u < a)
                return a
        }
    return u
}
function ko(e) {
    return !isNaN(e) && isFinite(e)
}
function zr(e) {
    let t = Fp(e);
    return t !== void 0 ? e.includes("%") ? t / 100 : t : 0
}
function Fp(e) {
    let t = /\d?\.?\d+/u.exec(e);
    return t ? Number(t[0]) : void 0
}
var Ft = new L;
function Z2(e, t, n) {
    return Ft.rgb_r = e / 255,
    Ft.rgb_g = t / 255,
    Ft.rgb_b = n / 255,
    Ft.rgbToHsluv(),
    {
        h: Ft.hsluv_h,
        s: Ft.hsluv_s,
        l: Ft.hsluv_l
    }
}
function J2(e, t, n, r=1) {
    return Ft.hsluv_h = e,
    Ft.hsluv_s = t,
    Ft.hsluv_l = n,
    Ft.hsluvToRgb(),
    {
        r: Ft.rgb_r * 255,
        g: Ft.rgb_g * 255,
        b: Ft.rgb_b * 255,
        a: r
    }
}
function Ic(e, t, n, r) {
    let i = Math.round(e)
      , o = Math.round(t * 100)
      , s = Math.round(n * 100);
    return r === void 0 || r === 1 ? "hsv(" + i + ", " + o + "%, " + s + "%)" : "hsva(" + i + ", " + o + "%, " + s + "%, " + r + ")"
}
function eL(e, t, n) {
    return {
        r: ko(e) ? gt(e, 255) * 255 : 0,
        g: ko(t) ? gt(t, 255) * 255 : 0,
        b: ko(n) ? gt(n, 255) * 255 : 0
    }
}
function _1(e, t, n, r) {
    let i = [fp(Math.round(e).toString(16)), fp(Math.round(t).toString(16)), fp(Math.round(n).toString(16))];
    return r && i[0].charAt(0) === i[0].charAt(1) && i[1].charAt(0) === i[1].charAt(1) && i[2].charAt(0) === i[2].charAt(1) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("")
}
function Wp(e, t, n) {
    let r, i, o = gt(e, 255), s = gt(t, 255), a = gt(n, 255), l = Math.max(o, s, a), c = Math.min(o, s, a), u = i = r = (l + c) / 2;
    if (l === c)
        u = i = 0;
    else {
        let f = l - c;
        switch (i = r > .5 ? f / (2 - l - c) : f / (l + c),
        l) {
        case o:
            u = (s - a) / f + (s < a ? 6 : 0);
            break;
        case s:
            u = (a - o) / f + 2;
            break;
        case a:
            u = (o - s) / f + 4;
            break
        }
        u /= 6
    }
    return {
        h: u * 360,
        s: i,
        l: r
    }
}
function up(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function tL(e, t, n) {
    let r, i, o;
    if (e = gt(e, 360),
    t = gt(t * 100, 100),
    n = gt(n * 100, 100),
    t === 0)
        r = i = o = n;
    else {
        let s = n < .5 ? n * (1 + t) : n + t - n * t
          , a = 2 * n - s;
        r = up(a, s, e + 1 / 3),
        i = up(a, s, e),
        o = up(a, s, e - 1 / 3)
    }
    return {
        r: r * 255,
        g: i * 255,
        b: o * 255
    }
}
function I1(e, t, n) {
    e = gt(e, 255),
    t = gt(t, 255),
    n = gt(n, 255);
    let r = Math.max(e, t, n), i = Math.min(e, t, n), o = r - i, s, a = r === 0 ? 0 : o / r, l = r;
    if (r === i)
        s = 0;
    else {
        switch (r) {
        case e:
            s = (t - n) / o + (t < n ? 6 : 0);
            break;
        case t:
            s = (n - e) / o + 2;
            break;
        case n:
            s = (e - t) / o + 4;
            break
        }
        s /= 6
    }
    return {
        h: s,
        s: a,
        v: l
    }
}
function nL(e, t, n) {
    e = gt(e, 360) * 6,
    t = gt(t * 100, 100),
    n = gt(n * 100, 100);
    let r = Math.floor(e)
      , i = e - r
      , o = n * (1 - t)
      , s = n * (1 - i * t)
      , a = n * (1 - (1 - i) * t)
      , l = r % 6
      , c = [n, s, o, o, a, n][l]
      , u = [a, n, n, s, o, o][l]
      , f = [o, o, a, n, n, s][l];
    return {
        r: c * 255,
        g: u * 255,
        b: f * 255
    }
}
function gt(e, t) {
    let n, r;
    if (typeof t == "string" ? n = parseFloat(t) : n = t,
    typeof e == "string") {
        rL(e) && (e = "100%");
        let i = iL(e);
        r = Math.min(n, Math.max(0, parseFloat(e))),
        i && (r = Math.floor(r * n) / 100)
    } else
        r = e;
    return Math.abs(r - n) < 1e-6 ? 1 : r % n / n
}
function rL(e) {
    return typeof e == "string" && e.includes(".") && parseFloat(e) === 1
}
function iL(e) {
    return typeof e == "string" && e.includes("%")
}
function fp(e) {
    return e.length === 1 ? "0" + e : "" + e
}
var On = ( () => {
    let e = "[-\\+]?\\d+%?"
      , n = "(?:" + "[-\\+]?\\d*\\.\\d+%?" + ")|(?:" + e + ")"
      , r = "[\\s|\\(]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")\\s*\\)?"
      , i = "[\\s|\\(]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")\\s*\\)?";
    return {
        rgb: new RegExp("rgb" + r),
        rgba: new RegExp("rgba" + i),
        hsl: new RegExp("hsl" + r),
        hsla: new RegExp("hsla" + i),
        hsv: new RegExp("hsv" + r),
        hsva: new RegExp("hsva" + i),
        hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
        hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
        hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
        hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu
    }
}
)();
function Up(e) {
    if (e.includes("gradient(") || e.includes("var("))
        return !1;
    let t = /^[\s,#]+/u
      , n = e.replace(t, "").trimEnd().toLowerCase()
      , r = Ip[n];
    if (r && (n = r),
    n === "transparent")
        return {
            r: 0,
            g: 0,
            b: 0,
            a: 0,
            format: "name"
        };
    let i;
    return (i = On.rgb.exec(n)) ? {
        r: parseInt(i[1] ?? ""),
        g: parseInt(i[2] ?? ""),
        b: parseInt(i[3] ?? ""),
        a: 1,
        format: "rgb"
    } : (i = On.rgba.exec(n)) ? {
        r: parseInt(i[1] ?? ""),
        g: parseInt(i[2] ?? ""),
        b: parseInt(i[3] ?? ""),
        a: parseFloat(i[4] ?? ""),
        format: "rgb"
    } : (i = On.hsl.exec(n)) ? {
        h: parseInt(i[1] ?? ""),
        s: zr(i[2] ?? ""),
        l: zr(i[3] ?? ""),
        a: 1,
        format: "hsl"
    } : (i = On.hsla.exec(n)) ? {
        h: parseInt(i[1] ?? ""),
        s: zr(i[2] ?? ""),
        l: zr(i[3] ?? ""),
        a: parseFloat(i[4] ?? ""),
        format: "hsl"
    } : (i = On.hsv.exec(n)) ? {
        h: parseInt(i[1] ?? ""),
        s: zr(i[2] ?? ""),
        v: zr(i[3] ?? ""),
        a: 1,
        format: "hsv"
    } : (i = On.hsva.exec(n)) ? {
        h: parseInt(i[1] ?? ""),
        s: zr(i[2] ?? ""),
        v: zr(i[3] ?? ""),
        a: parseFloat(i[4] ?? ""),
        format: "hsv"
    } : (i = On.hex8.exec(n)) ? {
        r: $t(i[1] ?? ""),
        g: $t(i[2] ?? ""),
        b: $t(i[3] ?? ""),
        a: F1(i[4] ?? ""),
        format: r ? "name" : "hex"
    } : (i = On.hex6.exec(n)) ? {
        r: $t(i[1] ?? ""),
        g: $t(i[2] ?? ""),
        b: $t(i[3] ?? ""),
        a: 1,
        format: r ? "name" : "hex"
    } : (i = On.hex4.exec(n)) ? {
        r: $t(`${i[1]}${i[1]}`),
        g: $t(`${i[2]}${i[2]}`),
        b: $t(`${i[3]}${i[3]}`),
        a: F1(i[4] + "" + i[4]),
        format: r ? "name" : "hex"
    } : (i = On.hex3.exec(n)) ? {
        r: $t(`${i[1]}${i[1]}`),
        g: $t(`${i[2]}${i[2]}`),
        b: $t(`${i[3]}${i[3]}`),
        a: 1,
        format: r ? "name" : "hex"
    } : !1
}
function $t(e) {
    return parseInt(e, 16)
}
function F1(e) {
    return $t(e) / 255
}
var L1 = new Map
  , V = ( () => {
    function e(o, s, a, l) {
        if (typeof o == "string") {
            let u = L1.get(o);
            return u || (u = t(o),
            u === void 0 ? {
                ...e("black"),
                isValid: !1
            } : (L1.set(o, u),
            u))
        }
        let c = t(o, s, a, l);
        return c !== void 0 ? c : {
            ...e("black"),
            isValid: !1
        }
    }
    function t(o, s, a, l) {
        if (o === "")
            return;
        let c = oL(o, s, a, l);
        if (c) {
            let u = {
                r: c.r,
                g: c.g,
                b: c.b,
                a: c.a,
                h: c.h,
                s: c.s,
                l: c.l,
                initialValue: typeof o == "string" && c.format !== "hsv" ? o : void 0,
                roundA: Math.round(100 * c.a) / 100,
                format: c.format,
                mix: e.mix,
                toValue: () => e.toRgbString(u)
            };
            return u
        } else
            return
    }
    let n = {
        isRGB(o) {
            return o === "rgb" || o === "rgba"
        },
        isHSL(o) {
            return o === "hsl" || o === "hsla"
        }
    };
    e.inspect = (o, s) => o.format === "hsl" ? `<${o.constructor.name} h:${o.h} s:${o.s} l:${o.l} a:${o.a}>` : o.format === "hex" || o.format === "name" ? `<${o.constructor.name} "${s}">` : `<${o.constructor.name} r:${o.r} g:${o.g} b:${o.b} a:${o.a}>`,
    e.isColor = o => typeof o == "string" ? e.isColorString(o) : e.isColorObject(o),
    e.isColorString = o => typeof o == "string" ? Up(o) !== !1 : !1,
    e.isColorObject = o => o && typeof o != "string" && typeof o.r == "number" && typeof o.g == "number" && typeof o.b == "number" && typeof o.h == "number" && typeof o.s == "number" && typeof o.l == "number" && typeof o.a == "number" && typeof o.roundA == "number" && typeof o.format == "string",
    e.toString = o => e.toRgbString(o),
    e.toHex = (o, s=!1) => _1(o.r, o.g, o.b, s),
    e.toHexString = (o, s=!1) => `#${e.toHex(o, s)}`,
    e.toRgbString = o => o.a === 1 ? "rgb(" + Math.round(o.r) + ", " + Math.round(o.g) + ", " + Math.round(o.b) + ")" : "rgba(" + Math.round(o.r) + ", " + Math.round(o.g) + ", " + Math.round(o.b) + ", " + o.roundA + ")",
    e.toHusl = o => ({
        ...Z2(o.r, o.g, o.b),
        a: o.roundA
    }),
    e.toHslString = o => {
        let s = e.toHsl(o)
          , a = Math.round(s.h)
          , l = Math.round(s.s * 100)
          , c = Math.round(s.l * 100);
        return o.a === 1 ? "hsl(" + a + ", " + l + "%, " + c + "%)" : "hsla(" + a + ", " + l + "%, " + c + "%, " + o.roundA + ")"
    }
    ,
    e.toHsv = o => {
        let s = I1(o.r, o.g, o.b);
        return {
            h: s.h * 360,
            s: s.s,
            v: s.v,
            a: o.a
        }
    }
    ,
    e.toHsvString = o => {
        let s = I1(o.r, o.g, o.b)
          , a = Math.round(s.h * 360)
          , l = Math.round(s.s * 100)
          , c = Math.round(s.v * 100);
        return o.a === 1 ? "hsv(" + a + ", " + l + "%, " + c + "%)" : "hsva(" + a + ", " + l + "%, " + c + "%, " + o.roundA + ")"
    }
    ,
    e.toName = o => {
        if (o.a === 0)
            return "transparent";
        if (o.a < 1)
            return !1;
        let s = _1(o.r, o.g, o.b, !0);
        for (let a of Object.keys(Ip))
            if (Ip[a] === s)
                return a;
        return !1
    }
    ,
    e.toHsl = o => ({
        h: Math.round(o.h),
        s: o.s,
        l: o.l,
        a: o.a
    }),
    e.toRgb = o => ({
        r: Math.round(o.r),
        g: Math.round(o.g),
        b: Math.round(o.b),
        a: o.a
    }),
    e.brighten = (o, s=10) => {
        let a = e.toRgb(o);
        return a.r = Math.max(0, Math.min(255, a.r - Math.round(255 * -(s / 100)))),
        a.g = Math.max(0, Math.min(255, a.g - Math.round(255 * -(s / 100)))),
        a.b = Math.max(0, Math.min(255, a.b - Math.round(255 * -(s / 100)))),
        e(a)
    }
    ,
    e.lighten = (o, s=10) => {
        let a = e.toHsl(o);
        return a.l += s / 100,
        a.l = Math.min(1, Math.max(0, a.l)),
        e(a)
    }
    ,
    e.darken = (o, s=10) => {
        let a = e.toHsl(o);
        return a.l -= s / 100,
        a.l = Math.min(1, Math.max(0, a.l)),
        e(a)
    }
    ,
    e.saturate = (o, s=10) => {
        let a = e.toHsl(o);
        return a.s += s / 100,
        a.s = Math.min(1, Math.max(0, a.s)),
        e(a)
    }
    ,
    e.desaturate = (o, s=10) => {
        let a = e.toHsl(o);
        return a.s -= s / 100,
        a.s = Math.min(1, Math.max(0, a.s)),
        e(a)
    }
    ,
    e.grayscale = o => e.desaturate(o, 100),
    e.hueRotate = (o, s) => {
        let a = e.toHsl(o);
        return a.h += s,
        a.h = a.h > 360 ? a.h - 360 : a.h,
        e(a)
    }
    ,
    e.alpha = (o, s=1) => e({
        r: o.r,
        g: o.g,
        b: o.b,
        a: s
    }),
    e.transparent = o => e.alpha(o, 0),
    e.multiplyAlpha = (o, s=1) => e({
        r: o.r,
        g: o.g,
        b: o.b,
        a: o.a * s
    }),
    e.interpolate = (o, s, a="rgb") => {
        if (!e.isColorObject(o) || !e.isColorObject(s))
            throw new TypeError("Both arguments for Color.interpolate must be Color objects");
        return l => e.mixAsColor(o, s, l, !1, a)
    }
    ,
    e.mix = (o, s, {model: a="rgb"}={}) => {
        let l = typeof o == "string" ? e(o) : o
          , c = e.interpolate(l, s, a);
        return u => e.toRgbString(c(u))
    }
    ,
    e.mixAsColor = (o, s, a=.5, l=!1, c="rgb") => {
        let u = null;
        if (n.isRGB(c))
            u = e({
                r: Br(a, [0, 1], [o.r, s.r], l),
                g: Br(a, [0, 1], [o.g, s.g], l),
                b: Br(a, [0, 1], [o.b, s.b], l),
                a: Br(a, [0, 1], [o.a, s.a], l)
            });
        else {
            let f, d;
            n.isHSL(c) ? (f = e.toHsl(o),
            d = e.toHsl(s)) : (f = e.toHusl(o),
            d = e.toHusl(s)),
            f.s === 0 ? f.h = d.h : d.s === 0 && (d.h = f.h);
            let m = f.h
              , g = d.h
              , y = g - m;
            y > 180 ? y = g - 360 - m : y < -180 && (y = g + 360 - m);
            let S = {
                h: Br(a, [0, 1], [m, m + y], l),
                s: Br(a, [0, 1], [f.s, d.s], l),
                l: Br(a, [0, 1], [f.l, d.l], l),
                a: Br(a, [0, 1], [o.a, s.a], l)
            };
            n.isHSL(c) ? u = e(S) : u = e(J2(S.h, S.s, S.l, S.a))
        }
        return u
    }
    ,
    e.random = (o=1) => {
        function s() {
            return Math.floor(Math.random() * 255)
        }
        return e("rgba(" + s() + ", " + s() + ", " + s() + ", " + o + ")")
    }
    ,
    e.grey = (o=.5, s=1) => (o = Math.floor(o * 255),
    e("rgba(" + o + ", " + o + ", " + o + ", " + s + ")")),
    e.gray = e.grey,
    e.rgbToHsl = (o, s, a) => Wp(o, s, a),
    e.isValidColorProperty = (o, s) => !!((o.toLowerCase().slice(-5) === "color" || o === "fill" || o === "stroke") && typeof s == "string" && e.isColorString(s)),
    e.difference = (o, s) => {
        let a = (o.r + s.r) / 2
          , l = o.r - s.r
          , c = o.g - s.g
          , u = o.b - s.b
          , f = Math.pow(l, 2)
          , d = Math.pow(c, 2)
          , m = Math.pow(u, 2);
        return Math.sqrt(2 * f + 4 * d + 3 * m + a * (f - m) / 256)
    }
    ,
    e.equal = (o, s, a=.1) => !(Math.abs(o.r - s.r) >= a || Math.abs(o.g - s.g) >= a || Math.abs(o.b - s.b) >= a || Math.abs(o.a - s.a) * 256 >= a);
    let r = zi([0, 255], [0, 1]);
    function i(o) {
        o = r(o);
        let s = Math.abs(o);
        return s < .04045 ? o / 12.92 : (Math.sign(o) || 1) * Math.pow((s + .055) / 1.055, 2.4)
    }
    return e.luminance = o => {
        let {r: s, g: a, b: l} = e.toRgb(o);
        return .2126 * i(s) + .7152 * i(a) + .0722 * i(l)
    }
    ,
    e.contrast = (o, s) => {
        let a = e.luminance(o)
          , l = e.luminance(s);
        return (Math.max(a, l) + .05) / (Math.min(a, l) + .05)
    }
    ,
    e
}
)();
function oL(e, t, n, r=1) {
    let i;
    return typeof e == "number" && !Number.isNaN(e) && typeof t == "number" && !Number.isNaN(t) && typeof n == "number" && !Number.isNaN(n) ? i = Lp({
        r: e,
        g: t,
        b: n,
        a: r
    }) : typeof e == "string" ? i = sL(e) : typeof e == "object" && (e.hasOwnProperty("r") && e.hasOwnProperty("g") && e.hasOwnProperty("b") ? i = Lp(e) : i = QS(e)),
    i
}
function sL(e) {
    let t = Up(e);
    if (t)
        return t.format === "hsl" ? QS(t) : t.format === "hsv" ? aL(t) : Lp(t)
}
function aL(e) {
    let t = nL(e.h, e.s, e.v);
    return {
        ...Wp(t.r, t.g, t.b),
        ...t,
        format: "rgb",
        a: e.a !== void 0 ? ZS(e.a) : 1
    }
}
function Lp(e) {
    let t = eL(e.r, e.g, e.b);
    return {
        ...Wp(t.r, t.g, t.b),
        ...t,
        format: "rgb",
        a: e.a !== void 0 ? ZS(e.a) : 1
    }
}
function QS(e) {
    let t, n, r, i = {
        r: 0,
        g: 0,
        b: 0
    }, o = {
        h: 0,
        s: 0,
        l: 0
    };
    return t = ko(e.h) ? e.h : 0,
    t = (t + 360) % 360,
    n = ko(e.s) ? e.s : 1,
    typeof e.s == "string" && (n = Fp(e.s)),
    r = ko(e.l) ? e.l : .5,
    typeof e.l == "string" && (r = Fp(e.l)),
    i = tL(t, n, r),
    o = {
        h: t,
        s: n,
        l: r
    },
    {
        ...i,
        ...o,
        a: e.a === void 0 ? 1 : e.a,
        format: "hsl"
    }
}
function ZS(e) {
    return e = parseFloat(e),
    e < 0 && (e = 0),
    (isNaN(e) || e > 1) && (e = 1),
    e
}
var M1 = e => e instanceof rl
  , uN = {
    delta: 1 / 60,
    maxValues: 1e4
};
var lL = on(AF(), 1)
  , {EventEmitter: cL} = lL.default
  , uL = class {
    constructor() {
        P(this, "_emitter", new cL)
    }
    eventNames() {
        return this._emitter.eventNames()
    }
    eventListeners() {
        let e = {};
        for (let t of this._emitter.eventNames())
            e[t] = this._emitter.listeners(t);
        return e
    }
    on(e, t) {
        this.addEventListener(e, t, !1, !1, this)
    }
    off(e, t) {
        this.removeEventListeners(e, t)
    }
    once(e, t) {
        this.addEventListener(e, t, !0, !1, this)
    }
    unique(e, t) {
        this.addEventListener(e, t, !1, !0, this)
    }
    addEventListener(e, t, n, r, i) {
        if (r) {
            for (let o of this._emitter.eventNames())
                if (t === this._emitter.listeners(o))
                    return
        }
        n === !0 ? this._emitter.once(e, t, i) : this._emitter.addListener(e, t, i)
    }
    removeEventListeners(e, t) {
        e ? this._emitter.removeListener(e, t) : this.removeAllEventListeners()
    }
    removeAllEventListeners() {
        this._emitter.removeAllListeners()
    }
    countEventListeners(e, t) {
        if (e)
            return this._emitter.listeners(e).length;
        {
            let n = 0;
            for (let r of this._emitter.eventNames())
                n += this._emitter.listeners(r).length;
            return n
        }
    }
    emit(e, ...t) {
        this._emitter.emit(e, ...t)
    }
}
  , fL = {
    addEventListener: () => {}
    ,
    removeEventListener: () => {}
    ,
    dispatchEvent: () => !1,
    ResizeObserver: void 0,
    onpointerdown: !1,
    onpointermove: !1,
    onpointerup: !1,
    ontouchstart: !1,
    ontouchmove: !1,
    ontouchend: !1,
    onmousedown: !1,
    onmousemove: !1,
    onmouseup: !1,
    devicePixelRatio: 1,
    scrollX: 0,
    scrollY: 0,
    location: {
        href: ""
    },
    setTimeout: () => 0,
    clearTimeout: () => {}
    ,
    setInterval: () => 0,
    clearInterval: () => {}
    ,
    requestAnimationFrame: () => 0,
    cancelAnimationFrame: () => {}
    ,
    getSelection: () => null,
    matchMedia: e => ({
        matches: !1,
        media: e,
        onchange: () => {}
        ,
        addEventListener: () => {}
        ,
        removeEventListener: () => {}
        ,
        addListener: () => {}
        ,
        removeListener: () => {}
        ,
        dispatchEvent: () => !1
    }),
    innerHeight: 0,
    innerWidth: 0,
    SVGSVGElement: {}
}
  , jt = typeof I > "u" ? fL : I
  , dL = e => {
    setTimeout(e, 1 / 60)
}
  , hL = jt.requestAnimationFrame || dL
  , O1 = e => hL(e)
  , Us = 1 / 60
  , pL = class extends uL {
    constructor(e=!1) {
        super(),
        P(this, "_started", !1),
        P(this, "_frame", 0),
        P(this, "_frameTasks", []),
        P(this, "tick", () => {
            this._started && (O1(this.tick),
            this.emit("update", this._frame, Us),
            this.emit("render", this._frame, Us),
            this._processFrameTasks(),
            this._frame++)
        }
        ),
        e && this.start()
    }
    addFrameTask(e) {
        this._frameTasks.push(e)
    }
    _processFrameTasks() {
        var e;
        let t = this._frameTasks
          , n = t.length;
        if (n !== 0) {
            for (let r = 0; r < n; r++)
                (e = t[r]) == null || e.call(t);
            t.length = 0
        }
    }
    static set TimeStep(e) {
        Us = e
    }
    static get TimeStep() {
        return Us
    }
    start() {
        return this._started ? this : (this._frame = 0,
        this._started = !0,
        O1(this.tick),
        this)
    }
    stop() {
        return this._started = !1,
        this
    }
    get frame() {
        return this._frame
    }
    get time() {
        return this._frame * Us
    }
}
  , JS = new pL
  , Fe = (e => (e.canvas = "CANVAS",
e.export = "EXPORT",
e.thumbnail = "THUMBNAIL",
e.preview = "PREVIEW",
e))(Fe || {})
  , Yc = {
    target: "PREVIEW",
    zoom: 1
};
(e => {
    function t() {
        return Yc.target
    }
    e.current = t;
    function n() {
        let r = Yc.target;
        return r === "CANVAS" || r === "EXPORT"
    }
    e.hasRestrictions = n
}
)(Fe || (Fe = {}));
var Fc = e => ({
    correct: (t, {delta: n, treeScale: r}) => {
        if (typeof t == "string" && (t = parseFloat(t)),
        t === 0)
            return "0px";
        let i = t;
        return n && r && (i = Math.round(t / n[e].scale / r[e]),
        i = Math.max(i, 1)),
        i + "px"
    }
});
cf({
    borderTopWidth: Fc("y"),
    borderLeftWidth: Fc("x"),
    borderRightWidth: Fc("x"),
    borderBottomWidth: Fc("y")
});
function re(e, ...t) {
    var n, r;
    if (e)
        return;
    let i = Error("Assertion Error" + (t.length > 0 ? ": " + t.join(" ") : ""));
    if (i.stack)
        try {
            let o = i.stack.split(`
`);
            (n = o[1]) != null && n.includes("assert") ? (o.splice(1, 1),
            i.stack = o.join(`
`)) : (r = o[0]) != null && r.includes("assert") && (o.splice(0, 1),
            i.stack = o.join(`
`))
        } catch {}
    throw i
}
function Lt(e, t) {
    throw t || new Error(e ? `Unexpected value: ${e}` : "Application entered invalid state")
}
var To = b.createContext({
    getLayoutId: e => null,
    persistLayoutIdCache: () => {}
    ,
    top: !1,
    enabled: !0
});
function mL({children: e}) {
    if (M(To).top)
        return k(Ce, {
            children: e
        });
    let n = D({
        byId: {},
        byName: {},
        byLastId: {},
        byPossibleId: {},
        byLastName: {},
        byLayoutId: {},
        count: {
            byId: {},
            byName: {}
        }
    })
      , r = D({
        byId: {},
        byName: {},
        byLastId: {},
        byPossibleId: {},
        byLastName: {},
        byLayoutId: {}
    })
      , i = D(new Set).current
      , o = le( ({id: l, name: c, duplicatedFrom: u}) => {
        if (!l)
            return null;
        let f = c ? "byName" : "byId"
          , d = n.current[f][l];
        if (d)
            return d;
        let m = c || l;
        if (!u && !i.has(m) && (!n.current.byLayoutId[m] || n.current.byLayoutId[m] === m))
            return n.current.count[f][m] === void 0 && (n.current.count[f][m] = 0,
            n.current.byLayoutId[m] = m,
            r.current[f][l] = m),
            i.add(m),
            m;
        let g;
        if (u?.length)
            for (let w = u.length - 1; w >= 0; w--) {
                let T = u[w];
                re(!!T, "duplicatedId must be defined");
                let E = n.current[f][T]
                  , _ = n.current.byLastId[T];
                if (_ && !g) {
                    let A = n.current.byLayoutId[_]
                      , ne = !A || A === c;
                    _ && !i.has(_) && (!c || ne) && (g = [_, T])
                }
                let R = E ? n.current.byLayoutId[E] : void 0
                  , B = !R || R === c;
                if (E && !i.has(E) && (!c || B))
                    return r.current[f][l] = E,
                    r.current.byLastId[T] = E,
                    i.add(E),
                    E
            }
        let y = n.current.byLastId[l];
        if (y && !i.has(y))
            return i.add(y),
            r.current.byId[l] = y,
            y;
        if (g) {
            let[w,T] = g;
            return r.current[f][l] = w,
            r.current.byLastId[T] = w,
            i.add(w),
            w
        }
        let S = n.current.byPossibleId[l];
        if (S && !i.has(S))
            return i.add(S),
            r.current.byId[l] = S,
            S;
        let h = u?.[0]
          , p = c || h || l
          , v = (n.current.count[f][p] ?? -1) + 1
          , {layoutId: x, value: C} = vL(p, v, i);
        if (n.current.count[f][p] = C,
        r.current[f][l] = x,
        u?.length && !c) {
            let w = u[u.length - 1];
            if (w && (r.current.byLastId[w] = x),
            u.length > 1)
                for (let T = 0; T < u.length - 1; T++) {
                    let E = u[T];
                    E !== void 0 && (r.current.byPossibleId[E] || (r.current.byPossibleId[E] = x))
                }
        }
        return r.current.byLayoutId[x] = m,
        i.add(x),
        x
    }
    , [])
      , s = le( () => {
        n.current = {
            byId: {
                ...n.current.byId,
                ...r.current.byId
            },
            byLastId: {
                ...n.current.byLastId,
                ...r.current.byLastId
            },
            byPossibleId: {
                ...n.current.byPossibleId,
                ...r.current.byPossibleId
            },
            byName: {
                ...n.current.byName,
                ...r.current.byName
            },
            byLastName: {
                ...n.current.byLastName,
                ...r.current.byLastName
            },
            byLayoutId: {
                ...n.current.byLayoutId,
                ...r.current.byLayoutId
            },
            count: {
                ...n.current.count,
                byName: {}
            }
        },
        r.current = {
            byId: {},
            byName: {},
            byLastId: {},
            byPossibleId: {},
            byLastName: {},
            byLayoutId: {}
        },
        i.clear()
    }
    , [])
      , a = D({
        getLayoutId: o,
        persistLayoutIdCache: s,
        top: !0,
        enabled: !0
    }).current;
    return k(To.Provider, {
        value: a,
        children: e
    })
}
function vL(e, t, n) {
    let r = t
      , i = r ? `${e}-${r}` : e;
    for (; n.has(i); )
        r++,
        i = `${e}-${r}`;
    return {
        layoutId: i,
        value: r
    }
}
function gL({enabled: e=!0, ...t}) {
    let n = M(To)
      , r = ce( () => ({
        ...n,
        enabled: e
    }), [e]);
    return k(To.Provider, {
        ...t,
        value: r
    })
}
function $n(e) {
    let t = D(null);
    return t.current === null && (t.current = e()),
    t.current
}
var yL = {
    background: void 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    lineHeight: "1.4em",
    textOverflow: "ellipsis",
    overflow: "hidden",
    minHeight: 0,
    width: "100%",
    height: "100%"
}
  , bL = {
    ...yL,
    border: "1px solid rgba(149, 149, 149, 0.15)",
    borderRadius: 6,
    fontSize: "12px",
    backgroundColor: "rgba(149, 149, 149, 0.1)",
    color: "#a5a5a5"
}
  , ew = {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    maxWidth: "100%",
    flexShrink: 0,
    padding: "0 10px"
}
  , xL = {
    ...ew,
    fontWeight: 500
}
  , SL = {
    ...ew,
    whiteSpace: "pre",
    maxHeight: "calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))",
    WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)"
};
function gN(e) {
    let {error: t, file: n} = e
      , r = n ? `Error in ${wL(n)}` : "Error"
      , i = t instanceof Error ? t.message : "" + t;
    return Q("div", {
        style: bL,
        children: [k("div", {
            className: "text",
            style: xL,
            children: r
        }), i && k("div", {
            className: "text",
            style: SL,
            children: i
        })]
    })
}
function wL(e) {
    return e.startsWith("./") ? e.replace("./", "") : e
}
var bN = 992 - 5;
function W(e) {
    return typeof e == "number" && isFinite(e)
}
function kL(e) {
    return !e || !Object.keys(e).length && e.constructor === Object
}
function zc(e) {
    return typeof e != "string" && typeof e != "number"
}
function Nc(e) {
    return e !== null && typeof e < "u" && typeof e != "boolean" && !kL(e)
}
function CL(e) {
    return e * (Math.PI / 180)
}
var Jt = ( () => {
    function e(t, n) {
        return {
            a: t,
            b: n
        }
    }
    return e.offset = (t, n) => {
        let r = et.angleFromX(t.a, t.b)
          , i = CL(r)
          , o = n * Math.sin(i)
          , s = n * Math.cos(i);
        return e({
            x: t.a.x + o,
            y: t.a.y - s
        }, {
            x: t.b.x + o,
            y: t.b.y - s
        })
    }
    ,
    e.intersection = (t, n, r) => {
        let i = t.a.x
          , o = t.a.y
          , s = t.b.x
          , a = t.b.y
          , l = n.a.x
          , c = n.a.y
          , u = n.b.x
          , f = n.b.y
          , d = (u - l) * (c - o) - (f - c) * (l - i)
          , m = (u - l) * (a - o) - (f - c) * (s - i)
          , g = (s - i) * (c - o) - (a - o) * (l - i);
        if (d === 0 && m === 0 || m === 0)
            return null;
        let y = d / m
          , S = g / m;
        return r && (y < 0 || y > 1 || S < 0 || S > 1) ? null : {
            x: i + y * (s - i),
            y: o + y * (a - o)
        }
    }
    ,
    e.intersectionAngle = (t, n) => {
        let r = t.b.x - t.a.x
          , i = t.b.y - t.a.y
          , o = n.b.x - n.a.x
          , s = n.b.y - n.a.y;
        return Math.atan2(r * s - i * o, r * o + i * s) * (180 / Math.PI)
    }
    ,
    e.isOrthogonal = t => t.a.x === t.b.x || t.a.y === t.b.y,
    e.perpendicular = (t, n) => {
        let r = t.a.x - t.b.x
          , i = t.a.y - t.b.y
          , o = et(n.x - i, n.y + r);
        return e(o, n)
    }
    ,
    e.projectPoint = (t, n) => {
        let r = e.perpendicular(t, n);
        return e.intersection(t, r)
    }
    ,
    e.pointAtPercentDistance = (t, n) => {
        let r = e.distance(t)
          , i = n * r / r;
        return {
            x: i * t.b.x + (1 - i) * t.a.x,
            y: i * t.b.y + (1 - i) * t.a.y
        }
    }
    ,
    e.distance = t => et.distance(t.a, t.b),
    e
}
)(), Gc;
(e => {
    function t(i, o) {
        return i === o ? !0 : !i || !o ? !1 : i.x === o.x && i.y === o.y && i.width === o.width && i.height === o.height
    }
    e.equals = t,
    e.atOrigin = i => ({
        ...i,
        x: 0,
        y: 0
    }),
    e.fromTwoPoints = (i, o) => ({
        x: Math.min(i.x, o.x),
        y: Math.min(i.y, o.y),
        width: Math.abs(i.x - o.x),
        height: Math.abs(i.y - o.y)
    }),
    e.fromRect = i => ({
        x: i.left,
        y: i.top,
        width: i.right - i.left,
        height: i.bottom - i.top
    }),
    e.multiply = (i, o) => ({
        x: i.x * o,
        y: i.y * o,
        width: i.width * o,
        height: i.height * o
    }),
    e.divide = (i, o) => (0,
    e.multiply)(i, 1 / o),
    e.offset = (i, o) => {
        let s = typeof o.x == "number" ? o.x : 0
          , a = typeof o.y == "number" ? o.y : 0;
        return {
            ...i,
            x: i.x + s,
            y: i.y + a
        }
    }
    ;
    function n(i, o) {
        if (o === 0)
            return i;
        let s = 2 * o;
        return {
            x: i.x - o,
            y: i.y - o,
            width: i.width + s,
            height: i.height + s
        }
    }
    e.inflate = n,
    e.pixelAligned = i => {
        let o = Math.round(i.x)
          , s = Math.round(i.y)
          , a = Math.round(i.x + i.width)
          , l = Math.round(i.y + i.height)
          , c = Math.max(a - o, 0)
          , u = Math.max(l - s, 0);
        return {
            x: o,
            y: s,
            width: c,
            height: u
        }
    }
    ,
    e.halfPixelAligned = i => {
        let o = Math.round(i.x * 2) / 2
          , s = Math.round(i.y * 2) / 2
          , a = Math.round((i.x + i.width) * 2) / 2
          , l = Math.round((i.y + i.height) * 2) / 2
          , c = Math.max(a - o, 1)
          , u = Math.max(l - s, 1);
        return {
            x: o,
            y: s,
            width: c,
            height: u
        }
    }
    ,
    e.round = (i, o=0) => {
        let s = _c(i.x, o)
          , a = _c(i.y, o)
          , l = _c(i.width, o)
          , c = _c(i.height, o);
        return {
            x: s,
            y: a,
            width: l,
            height: c
        }
    }
    ,
    e.roundToOutside = i => {
        let o = Math.floor(i.x)
          , s = Math.floor(i.y)
          , a = Math.ceil(i.x + i.width)
          , l = Math.ceil(i.y + i.height)
          , c = Math.max(a - o, 0)
          , u = Math.max(l - s, 0);
        return {
            x: o,
            y: s,
            width: c,
            height: u
        }
    }
    ,
    e.minX = i => i.x,
    e.maxX = i => i.x + i.width,
    e.minY = i => i.y,
    e.maxY = i => i.y + i.height,
    e.positions = i => ({
        minX: i.x,
        midX: i.x + i.width / 2,
        maxX: (0,
        e.maxX)(i),
        minY: i.y,
        midY: i.y + i.height / 2,
        maxY: (0,
        e.maxY)(i)
    }),
    e.center = i => ({
        x: i.x + i.width / 2,
        y: i.y + i.height / 2
    }),
    e.boundingRectFromPoints = i => {
        let o = 1 / 0
          , s = -1 / 0
          , a = 1 / 0
          , l = -1 / 0;
        for (let c = 0; c < i.length; c++) {
            let u = i[c];
            o = Math.min(o, u.x),
            s = Math.max(s, u.x),
            a = Math.min(a, u.y),
            l = Math.max(l, u.y)
        }
        return {
            x: o,
            y: a,
            width: s - o,
            height: l - a
        }
    }
    ,
    e.fromPoints = i => {
        let[o,s,a,l] = i
          , {x: c, y: u} = o
          , f = et.distance(o, s)
          , d = et.distance(o, l);
        return {
            x: c,
            y: u,
            width: f,
            height: d
        }
    }
    ,
    e.merge = (...i) => {
        let o = {
            x: Math.min(...i.map(e.minX)),
            y: Math.min(...i.map(e.minY))
        }
          , s = {
            x: Math.max(...i.map(e.maxX)),
            y: Math.max(...i.map(e.maxY))
        };
        return (0,
        e.fromTwoPoints)(o, s)
    }
    ,
    e.intersection = (i, o) => {
        let s = Math.max(i.x, o.x)
          , a = Math.min(i.x + i.width, o.x + o.width)
          , l = Math.max(i.y, o.y)
          , c = Math.min(i.y + i.height, o.y + o.height);
        return {
            x: s,
            y: l,
            width: a - s,
            height: c - l
        }
    }
    ,
    e.points = i => [{
        x: (0,
        e.minX)(i),
        y: (0,
        e.minY)(i)
    }, {
        x: (0,
        e.minX)(i),
        y: (0,
        e.maxY)(i)
    }, {
        x: (0,
        e.maxX)(i),
        y: (0,
        e.minY)(i)
    }, {
        x: (0,
        e.maxX)(i),
        y: (0,
        e.maxY)(i)
    }],
    e.pointsAtOrigin = i => [{
        x: 0,
        y: 0
    }, {
        x: i.width,
        y: 0
    }, {
        x: i.width,
        y: i.height
    }, {
        x: 0,
        y: i.height
    }],
    e.transform = (i, o) => {
        let {x: s, y: a} = o.transformPoint({
            x: i.x,
            y: i.y
        })
          , {x: l, y: c} = o.transformPoint({
            x: i.x + i.width,
            y: i.y
        })
          , {x: u, y: f} = o.transformPoint({
            x: i.x + i.width,
            y: i.y + i.height
        })
          , {x: d, y: m} = o.transformPoint({
            x: i.x,
            y: i.y + i.height
        })
          , g = Math.min(s, l, u, d)
          , y = Math.max(s, l, u, d) - g
          , S = Math.min(a, c, f, m)
          , h = Math.max(a, c, f, m) - S;
        return {
            x: g,
            y: S,
            width: y,
            height: h
        }
    }
    ,
    e.containsPoint = (i, o) => !(o.x < (0,
    e.minX)(i) || o.x > (0,
    e.maxX)(i) || o.y < (0,
    e.minY)(i) || o.y > (0,
    e.maxY)(i) || isNaN(i.x) || isNaN(i.y)),
    e.containsRect = (i, o) => {
        for (let s of (0,
        e.points)(o))
            if (!(0,
            e.containsPoint)(i, s))
                return !1;
        return !0
    }
    ,
    e.toCSS = i => ({
        display: "block",
        transform: `translate(${i.x}px, ${i.y}px)`,
        width: `${i.width}px`,
        height: `${i.height}px`
    }),
    e.inset = (i, o) => ({
        x: i.x + o,
        y: i.y + o,
        width: Math.max(0, i.width - 2 * o),
        height: Math.max(0, i.height - 2 * o)
    }),
    e.intersects = (i, o) => !(o.x >= (0,
    e.maxX)(i) || (0,
    e.maxX)(o) <= i.x || o.y >= (0,
    e.maxY)(i) || (0,
    e.maxY)(o) <= i.y),
    e.overlapHorizontally = (i, o) => {
        let s = e.maxX(i)
          , a = e.maxX(o);
        return s > o.x && a > i.x
    }
    ,
    e.overlapVertically = (i, o) => {
        let s = e.maxY(i)
          , a = e.maxY(o);
        return s > o.y && a > i.y
    }
    ,
    e.doesNotIntersect = (i, o) => o.find(s => e.intersects(s, i)) === void 0,
    e.isEqual = (i, o) => e.equals(i, o),
    e.cornerPoints = i => {
        let o = i.x
          , s = i.x + i.width
          , a = i.y
          , l = i.y + i.height;
        return [{
            x: o,
            y: a
        }, {
            x: s,
            y: a
        }, {
            x: s,
            y: l
        }, {
            x: o,
            y: l
        }]
    }
    ,
    e.midPoints = i => {
        let o = i.x
          , s = i.x + i.width / 2
          , a = i.x + i.width
          , l = i.y
          , c = i.y + i.height / 2
          , u = i.y + i.height;
        return [{
            x: s,
            y: l
        }, {
            x: a,
            y: c
        }, {
            x: s,
            y: u
        }, {
            x: o,
            y: c
        }]
    }
    ,
    e.pointDistance = (i, o) => {
        let s = 0
          , a = 0;
        return o.x < i.x ? s = i.x - o.x : o.x > e.maxX(i) && (s = o.x - e.maxX(i)),
        o.y < i.y ? a = i.y - o.y : o.y > e.maxY(i) && (a = o.y - e.maxY(i)),
        et.distance({
            x: s,
            y: a
        }, {
            x: 0,
            y: 0
        })
    }
    ;
    let r = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };
    e.fromAny = (i, o=r) => ({
        x: i.x || o.x,
        y: i.y || o.y,
        width: i.width || o.width,
        height: i.height || o.height
    }),
    e.delta = (i, o) => {
        let s = {
            x: (0,
            e.minX)(i),
            y: (0,
            e.minY)(i)
        }
          , a = {
            x: (0,
            e.minX)(o),
            y: (0,
            e.minY)(o)
        };
        return {
            x: s.x - a.x,
            y: s.y - a.y
        }
    }
    ,
    e.withMinSize = (i, o) => {
        let {width: s, height: a} = o
          , l = i.width - s
          , c = i.height - a;
        return {
            width: Math.max(i.width, s),
            height: Math.max(i.height, a),
            x: i.width < s ? i.x + l / 2 : i.x,
            y: i.height < a ? i.y + c / 2 : i.y
        }
    }
    ,
    e.anyPointsOutsideRect = (i, o) => {
        let s = (0,
        e.minX)(i)
          , a = (0,
        e.minY)(i)
          , l = (0,
        e.maxX)(i)
          , c = (0,
        e.maxY)(i);
        for (let u of o)
            if (u.x < s || u.x > l || u.y < a || u.y > c)
                return !0;
        return !1
    }
    ,
    e.edges = i => {
        let[o,s,a,l] = (0,
        e.cornerPoints)(i);
        return [Jt(o, s), Jt(s, a), Jt(a, l), Jt(l, o)]
    }
    ,
    e.rebaseRectOnto = (i, o, s, a) => {
        let l = {
            ...i
        };
        switch (s) {
        case "bottom":
        case "top":
            switch (a) {
            case "start":
                l.x = o.x;
                break;
            case "center":
                l.x = o.x + o.width / 2 - i.width / 2;
                break;
            case "end":
                l.x = o.x + o.width - i.width;
                break;
            default:
                Lt(a)
            }
            break;
        case "left":
            l.x = o.x - i.width;
            break;
        case "right":
            l.x = o.x + o.width;
            break;
        default:
            Lt(s)
        }
        switch (s) {
        case "left":
        case "right":
            switch (a) {
            case "start":
                l.y = o.y;
                break;
            case "center":
                l.y = o.y + o.height / 2 - i.height / 2;
                break;
            case "end":
                l.y = o.y + o.height - i.height;
                break;
            default:
                Lt(a)
            }
            break;
        case "top":
            l.y = o.y - i.height;
            break;
        case "bottom":
            l.y = o.y + o.height;
            break;
        default:
            Lt(s)
        }
        return l
    }
}
)(Gc || (Gc = {}));
var Kc;
(e => {
    e.quickfix = t => ((t.widthType === 2 || t.heightType === 2) && (t.aspectRatio = null),
    W(t.aspectRatio) && (t.left && t.right && (t.widthType = 0),
    t.top && t.bottom && (t.heightType = 0),
    t.left && t.right && t.top && t.bottom && (t.bottom = !1),
    t.widthType !== 0 && t.heightType !== 0 && (t.heightType = 0)),
    t.left && t.right && ((t.fixedSize || t.widthType === 2 || W(t.maxWidth)) && (t.right = !1),
    t.widthType = 0),
    t.top && t.bottom && ((t.fixedSize || t.heightType === 2 || W(t.maxHeight)) && (t.bottom = !1),
    t.heightType = 0),
    t)
}
)(Kc || (Kc = {}));
function qc(e) {
    if (typeof e == "string") {
        let t = e.trim();
        if (t === "auto")
            return 2;
        if (t.endsWith("fr"))
            return 3;
        if (t.endsWith("%"))
            return 1;
        if (t.endsWith("vw") || t.endsWith("vh"))
            return 4
    }
    return 0
}
var Mp;
(e => {
    e.fromProperties = t => {
        let {left: n, right: r, top: i, bottom: o, width: s, height: a, centerX: l, centerY: c, aspectRatio: u, autoSize: f} = t
          , d = Kc.quickfix({
            left: W(n) || pn(n),
            right: W(r) || pn(r),
            top: W(i) || pn(i),
            bottom: W(o) || pn(o),
            widthType: qc(s),
            heightType: qc(a),
            aspectRatio: u || null,
            fixedSize: f === !0
        })
          , m = null
          , g = null
          , y = 0
          , S = 0;
        if (d.widthType !== 0 && typeof s == "string") {
            let v = parseFloat(s);
            s.endsWith("fr") ? (y = 3,
            m = v) : s === "auto" ? y = 2 : (y = 1,
            m = v / 100)
        } else
            s !== void 0 && typeof s != "string" && (m = Be.getNumber(s));
        if (d.heightType !== 0 && typeof a == "string") {
            let v = parseFloat(a);
            a.endsWith("fr") ? (S = 3,
            g = v) : a === "auto" ? S = 2 : (S = 1,
            g = parseFloat(a) / 100)
        } else
            a !== void 0 && typeof a != "string" && (g = Be.getNumber(a));
        let h = .5
          , p = .5;
        return l && (h = parseFloat(l) / 100),
        c && (p = parseFloat(c) / 100),
        {
            left: d.left ? Be.getNumber(n) : null,
            right: d.right ? Be.getNumber(r) : null,
            top: d.top ? Be.getNumber(i) : null,
            bottom: d.bottom ? Be.getNumber(o) : null,
            widthType: y,
            heightType: S,
            width: m,
            height: g,
            aspectRatio: d.aspectRatio || null,
            centerAnchorX: h,
            centerAnchorY: p
        }
    }
    ,
    e.toSize = (t, n, r, i) => {
        let o = null
          , s = null
          , a = n?.sizing ? Be.getNumber(n?.sizing.width) : null
          , l = n?.sizing ? Be.getNumber(n?.sizing.height) : null
          , c = D1(t.left, t.right);
        if (a && W(c))
            o = a - c;
        else if (r && t.widthType === 2)
            o = r.width;
        else if (W(t.width))
            switch (t.widthType) {
            case 0:
                o = t.width;
                break;
            case 3:
                o = i ? i.freeSpaceInParent.width / i.freeSpaceUnitDivisor.width * t.width : null;
                break;
            case 1:
            case 4:
                a && (o = a * t.width);
                break;
            case 2:
                break;
            default:
                Lt(t.widthType)
            }
        let u = D1(t.top, t.bottom);
        if (l && W(u))
            s = l - u;
        else if (r && t.heightType === 2)
            s = r.height;
        else if (W(t.height))
            switch (t.heightType) {
            case 0:
                s = t.height;
                break;
            case 3:
                s = i ? i.freeSpaceInParent.height / i.freeSpaceUnitDivisor.height * t.height : null;
                break;
            case 1:
            case 4:
                l && (s = l * t.height);
                break;
            case 2:
                break;
            default:
                Lt(t.heightType)
            }
        return _L(o, s, t, {
            height: l ?? 0,
            width: a ?? 0
        }, n?.viewport)
    }
    ,
    e.toRect = (t, n=null, r=null, i=!1, o=null) => {
        let s = t.left || 0
          , a = t.top || 0
          , {width: l, height: c} = e.toSize(t, n, r, o)
          , u = n?.positioning ?? null
          , f = u ? Be.getNumber(u.width) : null
          , d = u ? Be.getNumber(u.height) : null;
        t.left !== null ? s = t.left : f && t.right !== null ? s = f - t.right - l : f && (s = t.centerAnchorX * f - l / 2),
        t.top !== null ? a = t.top : d && t.bottom !== null ? a = d - t.bottom - c : d && (a = t.centerAnchorY * d - c / 2);
        let m = {
            x: s,
            y: a,
            width: l,
            height: c
        };
        return i ? Gc.pixelAligned(m) : m
    }
}
)(Mp || (Mp = {}));
var TL = 200
  , EL = 200;
function Qc(e, t, n, r) {
    if (typeof t == "string") {
        if (t.endsWith("%") && n)
            switch (e) {
            case "maxWidth":
            case "minWidth":
                return parseFloat(t) / 100 * n.width;
            case "maxHeight":
            case "minHeight":
                return parseFloat(t) / 100 * n.height;
            default:
                break
            }
        if (t.endsWith("vh") && r)
            switch (e) {
            case "maxWidth":
            case "minWidth":
                return parseFloat(t) / 100 * r.width;
            case "maxHeight":
            case "minHeight":
                return parseFloat(t) / 100 * r.height;
            default:
                break
            }
        return parseFloat(t)
    }
    return t
}
function PL(e, t, n, r) {
    return t.minHeight && (e = Math.max(Qc("minHeight", t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(Qc("maxHeight", t.maxHeight, n, r), e)),
    e
}
function RL(e, t, n, r) {
    return t.minWidth && (e = Math.max(Qc("minWidth", t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(Qc("maxWidth", t.maxWidth, n, r), e)),
    e
}
function _L(e, t, n, r, i) {
    let o = RL(W(e) ? e : TL, n, r, i)
      , s = PL(W(t) ? t : EL, n, r, i);
    return W(n.aspectRatio) && n.aspectRatio > 0 && (W(n.left) && W(n.right) ? s = o / n.aspectRatio : W(n.top) && W(n.bottom) ? o = s * n.aspectRatio : n.widthType !== 0 ? s = o / n.aspectRatio : o = s * n.aspectRatio),
    {
        width: o,
        height: s
    }
}
function D1(e, t) {
    return !W(e) || !W(t) ? null : e + t
}
function IL(e) {
    return typeof e.right == "string" || typeof e.bottom == "string" || typeof e.left == "string" && (!e.center || e.center === "y") || typeof e.top == "string" && (!e.center || e.center === "x")
}
function ga(e) {
    return !e._constraints || IL(e) ? !1 : e._constraints.enabled
}
function FL(e) {
    let {size: t} = e
      , {width: n, height: r} = e;
    return W(t) && (n === void 0 && (n = t),
    r === void 0 && (r = t)),
    W(n) && W(r) ? {
        width: n,
        height: r
    } : null
}
function LL(e) {
    let t = FL(e);
    if (t === null)
        return null;
    let {left: n, top: r} = e;
    return W(n) && W(r) ? {
        x: n,
        y: r,
        ...t
    } : null
}
function ra(e, t, n=!0) {
    if (e.positionFixed || e.positionAbsolute)
        return null;
    let r = t === 1 || t === 2;
    if (!ga(e) || r)
        return LL(e);
    let i = ML(e)
      , o = OL(t)
      , s = o ? {
        sizing: o,
        positioning: o,
        viewport: null
    } : null;
    return Mp.toRect(i, s, null, n, null)
}
function ML(e) {
    let {left: t, right: n, top: r, bottom: i, center: o, _constraints: s, size: a} = e
      , {width: l, height: c} = e;
    l === void 0 && (l = a),
    c === void 0 && (c = a);
    let {aspectRatio: u, autoSize: f} = s
      , d = Kc.quickfix({
        left: W(t),
        right: W(n),
        top: W(r),
        bottom: W(i),
        widthType: qc(l),
        heightType: qc(c),
        aspectRatio: u || null,
        fixedSize: f === !0
    })
      , m = null
      , g = null
      , y = 0
      , S = 0;
    if (d.widthType !== 0 && typeof l == "string") {
        let v = parseFloat(l);
        l.endsWith("fr") ? (y = 3,
        m = v) : l === "auto" ? y = 2 : (y = 1,
        m = v / 100)
    } else
        l !== void 0 && typeof l != "string" && (m = l);
    if (d.heightType !== 0 && typeof c == "string") {
        let v = parseFloat(c);
        c.endsWith("fr") ? (S = 3,
        g = v) : c === "auto" ? S = 2 : (S = 1,
        g = parseFloat(c) / 100)
    } else
        c !== void 0 && typeof c != "string" && (g = c);
    let h = .5
      , p = .5;
    return (o === !0 || o === "x") && (d.left = !1,
    typeof t == "string" && (h = parseFloat(t) / 100)),
    (o === !0 || o === "y") && (d.top = !1,
    typeof r == "string" && (p = parseFloat(r) / 100)),
    {
        left: d.left ? t : null,
        right: d.right ? n : null,
        top: d.top ? r : null,
        bottom: d.bottom ? i : null,
        widthType: y,
        heightType: S,
        width: m,
        height: g,
        aspectRatio: d.aspectRatio || null,
        centerAnchorX: h,
        centerAnchorY: p,
        minHeight: e.minHeight,
        maxHeight: e.maxHeight,
        minWidth: e.minWidth,
        maxWidth: e.maxWidth
    }
}
var Xp = b.createContext({
    parentSize: 0
});
function OL(e) {
    return e === 0 || e === 1 || e === 2 ? null : e
}
function ya() {
    return b.useContext(Xp).parentSize
}
function tw(e) {
    return typeof e == "object"
}
var DL = e => {
    let t = ya()
      , {parentSize: n, children: r} = e
      , i = b.useMemo( () => ({
        parentSize: n
    }), [AL(n), VL(n)]);
    return t === 1 ? r ? k(Ce, {
        children: r
    }) : null : k(Xp.Provider, {
        value: i,
        children: r
    })
}
;
function AL(e) {
    return tw(e) ? e.width : e
}
function VL(e) {
    return tw(e) ? e.height : e
}
var kN = Xp.Consumer;
function BL(e, t) {
    return k(DL, {
        parentSize: t,
        children: e
    })
}
function zL(e) {
    let t = ya();
    return ra(e, t, !0)
}
var NL = (e => (e.Boolean = "boolean",
e.Number = "number",
e.String = "string",
e.RichText = "richtext",
e.FusedNumber = "fusednumber",
e.Enum = "enum",
e.SegmentedEnum = "segmentedenum",
e.Color = "color",
e.Image = "image",
e.ResponsiveImage = "responsiveimage",
e.File = "file",
e.ComponentInstance = "componentinstance",
e.Array = "array",
e.EventHandler = "eventhandler",
e.Transition = "transition",
e.BoxShadow = "boxshadow",
e.Link = "link",
e.Date = "date",
e.Object = "object",
e.Font = "font",
e.PageScope = "pagescope",
e.ScrollSectionRef = "scrollsectionref",
e.CustomCursor = "customcursor",
e.Border = "border",
e.Cursor = "cursor",
e.Padding = "padding",
e.BorderRadius = "borderradius",
e))(NL || {}), dp;
function $L() {
    if (dp !== void 0)
        return dp;
    let e = document.createElement("div");
    Object.assign(e.style, {
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        rowGap: "1px"
    }),
    e.appendChild(document.createElement("div")),
    e.appendChild(document.createElement("div")),
    document.body.appendChild(e);
    let t = e.scrollHeight === 1;
    return e.parentNode && e.parentNode.removeChild(e),
    dp = t,
    t
}
var Ci = "flexbox-gap-not-supported"
  , A1 = !1;
function CN() {
    A1 || (A1 = !0,
    !$L() && document.body.classList.add(Ci))
}
var HL = `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6,
[data-framer-component-type="DeprecatedRichText"] li,
[data-framer-component-type="DeprecatedRichText"] ol,
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] span:not([data-text-fill]) {
    font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
    font-style: var(--framer-font-style, normal);
    font-weight: var(--framer-font-weight, 400);
    color: var(--framer-text-color, #000);
    font-size: var(--framer-font-size, 16px);
    letter-spacing: var(--framer-letter-spacing, 0);
    text-transform: var(--framer-text-transform, none);
    text-decoration: var(--framer-text-decoration, none);
    line-height: var(--framer-line-height, 1.2em);
    text-align: var(--framer-text-alignment, start);
}
`, jL = `
[data-framer-component-type="DeprecatedRichText"] p:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] div:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h1:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h2:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h3:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h4:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h5:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h6:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ol:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ul:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] .framer-image:not(:first-child) {
    margin-top: var(--framer-paragraph-spacing, 0);
}
`, WL = `
[data-framer-component-type="DeprecatedRichText"] span[data-text-fill] {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`, UL = `
[data-framer-component-type="DeprecatedRichText"] a,
[data-framer-component-type="DeprecatedRichText"] a span:not([data-text-fill]) {
    font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
    font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
    font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
    color: var(--framer-link-text-color, var(--framer-text-color, #000));
    font-size: var(--framer-link-font-size, var(--framer-font-size, 16px));
    text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
    text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
}
`, XL = `
[data-framer-component-type="DeprecatedRichText"] a:hover,
[data-framer-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`, YL = `
a[data-framer-page-link-current],
a[data-framer-page-link-current] span:not([data-text-fill]) {
    font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`, GL = `
a[data-framer-page-link-current]:hover,
a[data-framer-page-link-current]:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
    color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
}
`, KL = `
[data-framer-component-type="DeprecatedRichText"] strong {
    font-weight: bolder;
}
`, qL = `
[data-framer-component-type="DeprecatedRichText"] em {
    font-style: italic;
}
`, QL = `
[data-framer-component-type="DeprecatedRichText"] .framer-image {
    display: block;
    max-width: 100%;
    height: auto;
}
`, ZL = `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6 {
    margin: 0;
    padding: 0;
}
`, JL = `
[data-framer-component-type="DeprecatedRichText"] .text-styles-preset-reset {
    --framer-font-family: Inter, Inter Placeholder, sans-serif;
    --framer-font-style: normal;
    --framer-font-weight: 500;
    --framer-text-color: #000;
    --framer-font-size: 16px;
    --framer-letter-spacing: 0;
    --framer-text-transform: none;
    --framer-text-decoration: none;
    --framer-line-height: 1.2em;
    --framer-text-alignment: start;
}
`, eM = `
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] ol {
    display: table;
    width: 100%;
    padding-left: 0;
    margin: 0;
}
`, tM = `
[data-framer-component-type="DeprecatedRichText"] li {
    display: table-row;
    counter-increment: list-item;
    list-style: none;
}
`, nM = `
[data-framer-component-type="DeprecatedRichText"] ol > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: counter(list-item) ".";
    white-space: nowrap;
}
`, rM = `
[data-framer-component-type="DeprecatedRichText"] ul > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: "\u2022";
}
`, iM = ['[data-framer-component-type="DeprecatedRichText"] { cursor: inherit; }', JL, ZL, HL, jL, WL, UL, XL, YL, GL, KL, qL, QL, eM, tM, nM, rM], oM = [`
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `, `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
            font-style: var(--framer-font-style, normal);
            font-weight: var(--framer-font-weight, 400);
            color: var(--framer-text-color, #000);
            font-size: calc(var(--framer-font-size, 16px) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-letter-spacing, 0);
            text-transform: var(--framer-text-transform, none);
            text-decoration: var(--framer-text-decoration, none);
            line-height: var(--framer-line-height, 1.2em);
            text-align: var(--framer-text-alignment, start);
        }
    `, `
        .framer-fit-text .framer-text {
            white-space: nowrap;
            white-space-collapse: preserve;
        }
    `, `
        strong.framer-text {
            font-family: var(--framer-font-family-bold);
            font-style: var(--framer-font-style-bold);
            font-weight: var(--framer-font-weight-bold, bolder);
        }
    `, `
        em.framer-text {
            font-family: var(--framer-font-family-italic);
            font-style: var(--framer-font-style-italic, italic);
            font-weight: var(--framer-font-weight-italic);
        }
    `, `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-font-family-bold-italic);
            font-style: var(--framer-font-style-bold-italic, italic);
            font-weight: var(--framer-font-weight-bold-italic, bolder);
        }
    `, `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-paragraph-spacing, 0);
        }
    `, `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `, `
        .framer-text[data-text-fill] {
            display: inline-block;
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-line-height, 1.3em)) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-line-height, 1.3em)) / -2));
        }
    `, `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-code-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-font-size, 16px) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-letter-spacing, 0);
            line-height: var(--framer-line-height, 1.2em);
        }
    `, `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-link-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
            text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
        }
    `, `
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-link-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
        }
    `, `
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
        }
    `, `
        code.framer-text a.framer-text:hover,
        code.framer-text a.framer-text:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `, `
        a.framer-text[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
        }
    `, `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `, `
        a.framer-text[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
        }
    `, `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
        }
    `, `
        .framer-image.framer-text {
            display: block;
            max-width: 100%;
            height: auto;
        }
    `, `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
        }
    `, `
        ol.framer-text {
            --list-style-type: decimal;
        }
    `, `
        ul.framer-text,
        ol.framer-text {
            display: table;
            width: 100%;
        }
    `, `
        li.framer-text {
            display: table-row;
            counter-increment: list-item;
            list-style: none;
        }
    `, `
        ol.framer-text > li.framer-text::before {
            display: table-cell;
            width: 2.25ch;
            box-sizing: border-box;
            padding-inline-end: 0.75ch;
            content: counter(list-item, var(--list-style-type)) ".";
            white-space: nowrap;
        }
    `, `
        ul.framer-text > li.framer-text::before {
            display: table-cell;
            width: 2.25ch;
            box-sizing: border-box;
            padding-inline-end: 0.75ch;
            content: "\u2022";
        }
    `, `
        .framer-text-module[style*="aspect-ratio"] > :first-child {
            width: 100%;
        }
    `, `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"] {
                position: relative;
            }
        }
    `, `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"]::before {
                content: "";
                display: block;
                padding-bottom: calc(100% / calc(var(--aspect-ratio)));
            }
        }
    `, `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"] > :first-child {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
            }
        }
    `], sM = new Set, hp;
function nw(e, t, n=sM) {
    if (!(!e || n.has(e) || typeof document > "u")) {
        if (n.add(e),
        !t) {
            if (!hp) {
                let r = document.createElement("style");
                if (r.setAttribute("type", "text/css"),
                r.setAttribute("data-framer-css", "true"),
                !document.head) {
                    console.warn("not injecting CSS: the document is missing a <head> element");
                    return
                }
                if (document.head.appendChild(r),
                r.sheet)
                    hp = r.sheet;
                else {
                    console.warn("not injecting CSS: injected <style> element does not have a sheet", r);
                    return
                }
            }
            t = hp
        }
        try {
            t.insertRule(e, t.cssRules.length)
        } catch {}
    }
}
var aM = ["[data-framer-component-type] { position: absolute; }"]
  , lM = `
[data-framer-component-type="Text"] > * {
    text-align: var(--framer-text-alignment, start);
}`
  , cM = `
[data-framer-component-type="Text"] span span,
[data-framer-component-type="Text"] p span,
[data-framer-component-type="Text"] h1 span,
[data-framer-component-type="Text"] h2 span,
[data-framer-component-type="Text"] h3 span,
[data-framer-component-type="Text"] h4 span,
[data-framer-component-type="Text"] h5 span,
[data-framer-component-type="Text"] h6 span {
    display: block;
}`
  , uM = `
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span {
    display: unset;
}`
  , fM = `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: min(calc(var(--framer-font-weight-increase, 0) + var(--font-weight, 400)), 900);
    color: var(--text-color);
    letter-spacing: var(--letter-spacing);
    font-size: var(--font-size);
    text-transform: var(--text-transform);
    text-decoration: var(--text-decoration);
    line-height: var(--line-height);
}`
  , dM = `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    --font-family: var(--framer-font-family);
    --font-style: var(--framer-font-style);
    --font-weight: var(--framer-font-weight);
    --text-color: var(--framer-text-color);
    --letter-spacing: var(--framer-letter-spacing);
    --font-size: var(--framer-font-size);
    --text-transform: var(--framer-text-transform);
    --text-decoration: var(--framer-text-decoration);
    --line-height: var(--framer-line-height);
}`
  , hM = `
[data-framer-component-type="Text"] a,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] a span span span,
[data-framer-component-type="Text"] a p span span,
[data-framer-component-type="Text"] a h1 span span,
[data-framer-component-type="Text"] a h2 span span,
[data-framer-component-type="Text"] a h3 span span,
[data-framer-component-type="Text"] a h4 span span,
[data-framer-component-type="Text"] a h5 span span,
[data-framer-component-type="Text"] a h6 span span {
    --font-family: var(--framer-link-font-family, var(--framer-font-family));
    --font-style: var(--framer-link-font-style, var(--framer-font-style));
    --font-weight: var(--framer-link-font-weight, var(--framer-font-weight));
    --text-color: var(--framer-link-text-color, var(--framer-text-color));
    --font-size: var(--framer-link-font-size, var(--framer-font-size));
    --text-transform: var(--framer-link-text-transform, var(--framer-text-transform));
    --text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration));
}`
  , pM = `
[data-framer-component-type="Text"] a:hover,
[data-framer-component-type="Text"] a div span:hover,
[data-framer-component-type="Text"] a span span span:hover,
[data-framer-component-type="Text"] a p span span:hover,
[data-framer-component-type="Text"] a h1 span span:hover,
[data-framer-component-type="Text"] a h2 span span:hover,
[data-framer-component-type="Text"] a h3 span span:hover,
[data-framer-component-type="Text"] a h4 span span:hover,
[data-framer-component-type="Text"] a h5 span span:hover,
[data-framer-component-type="Text"] a h6 span span:hover {
    --font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration)));
}`
  , mM = `
[data-framer-component-type="Text"].isCurrent a,
[data-framer-component-type="Text"].isCurrent a div span,
[data-framer-component-type="Text"].isCurrent a span span span,
[data-framer-component-type="Text"].isCurrent a p span span,
[data-framer-component-type="Text"].isCurrent a h1 span span,
[data-framer-component-type="Text"].isCurrent a h2 span span,
[data-framer-component-type="Text"].isCurrent a h3 span span,
[data-framer-component-type="Text"].isCurrent a h4 span span,
[data-framer-component-type="Text"].isCurrent a h5 span span,
[data-framer-component-type="Text"].isCurrent a h6 span span {
    --font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration)));
}`
  , vM = ['[data-framer-component-type="Text"] { cursor: inherit; }', "[data-framer-component-text-autosized] * { white-space: pre; }", lM, cM, uM, fM, dM, hM, pM, mM]
  , gM = `
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-component-type],
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > [data-framer-component-type] {
    position: relative;
}`
  , yM = [`[data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: var(--stack-native-row-gap);
        column-gap: var(--stack-native-column-gap);
    }`, `.${Ci} [data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: unset;
        column-gap: unset;
    }`]
  , bM = `
.${Ci} [data-framer-legacy-stack-gap-enabled="true"] > *, [data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"] {
    margin-top: calc(var(--stack-gap-y) / 2);
    margin-bottom: calc(var(--stack-gap-y) / 2);
    margin-right: calc(var(--stack-gap-x) / 2);
    margin-left: calc(var(--stack-gap-x) / 2);
}
`
  , xM = `
.${Ci}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child,
.${Ci}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child {
    margin-top: 0;
    margin-left: 0;
}`
  , SM = `
.${Ci}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child,
.${Ci}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child {
    margin-right: 0;
    margin-bottom: 0;
}`
  , wM = [gM, bM, ...yM, xM, SM]
  , kM = [`
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}`]
  , CM = ['[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }', '[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }']
  , TM = ['[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }', '[data-framer-component-type="NativeScroll"] > * { position: relative; }', '[data-framer-component-type="NativeScroll"].direction-both { overflow-x: scroll; overflow-y: scroll; }', '[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: scroll; }', '[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: scroll; overflow-y: hidden; }', '[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }', '[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }', '[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }']
  , EM = ['[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }']
  , PM = ['[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }']
  , RM = ['[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }']
  , _M = ['[data-framer-cursor="pointer"] { cursor: pointer; }', '[data-framer-cursor="grab"] { cursor: grab; }', '[data-framer-cursor="grab"]:active { cursor: grabbing; }']
  , IM = ['[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }', "[data-framer-generated] * { pointer-events: unset }"]
  , FM = [`[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`]
  , LM = ['[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }', '[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }']
  , MM = e => e ? IM : []
  , OM = [".svgContainer svg { display: block; }"]
  , rw = e => [...aM, ...vM, ...oM, ...iM, ...wM, ...kM, ...CM, ...TM, ...PM, ...EM, ...RM, ..._M, ...MM(e), ...OM, ...FM, ...LM]
  , DM = rw(!1)
  , AM = rw(!0)
  , V1 = !1;
function ba() {
    if (V1)
        return;
    V1 = !0;
    let e = Fe.current() === "PREVIEW" ? AM : DM;
    for (let t of e)
        nw(t, void 0, void 0)
}
function ia(e) {
    return typeof e == "function"
}
function iw(e) {
    return typeof e == "boolean"
}
function ke(e) {
    return typeof e == "string"
}
function mn(e) {
    return Number.isFinite(e)
}
function Yp(e) {
    return Array.isArray(e)
}
function Ie(e) {
    return e !== null && typeof e == "object" && !Yp(e)
}
function yt(e) {
    return typeof e > "u"
}
function _e(e) {
    return e === null
}
function Eo(e) {
    return yt(e) || _e(e)
}
function ow(e) {
    return e instanceof Date && !isNaN(e.getTime())
}
function VM(e) {
    return Ie(e) || ia(e)
}
var B1 = "optional";
function BM(e) {
    return !!e && B1 in e && e[B1] === !0
}
function zM(e) {
    try {
        switch (e.type) {
        case "string":
        case "color":
        case "date":
        case "link":
        case "boxshadow":
        case "padding":
        case "borderradius":
            return ke(e.defaultValue) ? e.defaultValue : void 0;
        case "boolean":
            return iw(e.defaultValue) ? e.defaultValue : void 0;
        case "enum":
            return yt(e.defaultValue) ? void 0 : e.options.includes(e.defaultValue) ? e.defaultValue : void 0;
        case "fusednumber":
        case "number":
            return mn(e.defaultValue) ? e.defaultValue : void 0;
        case "transition":
            return Ie(e.defaultValue) ? e.defaultValue : void 0;
        case "border":
            return Ie(e.defaultValue) ? e.defaultValue : void 0;
        case "font":
            return Ie(e.defaultValue) ? e.defaultValue : void 0;
        case "object":
            {
                let t = Ie(e.defaultValue) ? e.defaultValue : {};
                return Ie(e.controls) && sw(t, e.controls),
                t
            }
        case "array":
            return Yp(e.defaultValue) ? e.defaultValue : void 0;
        case "file":
        case "image":
        case "richtext":
        case "pagescope":
        case "eventhandler":
        case "segmentedenum":
        case "responsiveimage":
        case "componentinstance":
        case "scrollsectionref":
        case "customcursor":
        case "cursor":
            return;
        default:
            return
        }
    } catch {
        return
    }
}
function sw(e, t) {
    for (let n in t) {
        let r = t[n];
        if (!r)
            continue;
        let i = e[n];
        if (!yt(i) || BM(r))
            continue;
        let o = zM(r);
        yt(o) || (e[n] = o)
    }
}
function NM(e) {
    if (Ie(e.defaultProps))
        return e.defaultProps;
    let t = {};
    return e.defaultProps = t,
    t
}
function $M(e, t) {
    if (!VM(e))
        return;
    let n = NM(e);
    sw(n, t)
}
function TN(e, t) {
    Object.assign(e, {
        propertyControls: t
    }),
    $M(e, t)
}
function aw(e) {
    return e.propertyControls
}
var Dn = {
    iPhonePro: {
        screenRadius: 0,
        clayBezelLeft: 21,
        clayBezelRight: 21,
        clayBezelTop: 21,
        clayBezelBottom: 21,
        clayBezelRadius: 38 + 21
    },
    iPhone8: {
        screenRadius: 0,
        clayBezelLeft: 24,
        clayBezelRight: 24,
        clayBezelTop: 96,
        clayBezelBottom: 96,
        clayBezelRadius: 38 * 1.5
    },
    iPadPro: {
        screenRadius: 25,
        clayBezelLeft: 38,
        clayBezelRight: 38,
        clayBezelTop: 38,
        clayBezelBottom: 38,
        clayBezelRadius: 25 + 38
    },
    desktop: {
        clayBezelLeft: 20,
        clayBezelRight: 20,
        clayBezelTop: 20,
        clayBezelBottom: 20,
        clayBezelRadius: 20
    }
}
  , HM = [{
    id: "iphone-12",
    title: "iPhone 12",
    screenRadius: 0,
    clayBezelLeft: 22,
    clayBezelRight: 22,
    clayBezelTop: 22,
    clayBezelBottom: 22,
    clayBezelRadius: 66,
    screenWidth: 390,
    screenHeight: 844,
    externalClay: {
        width: 500,
        height: 974,
        screenOffsetTop: 65,
        screenOffsetLeft: 55
    },
    screenMask: '<g style="transform: scale(0.5);"><path d="M171.2 0c2.3 0 4 .5 5.4 1.3 1.6 1 2.8 2.2 3.7 3.8.8 1.6 1.2 2.3 1.2 4.9 0 12 2.2 19 6.2 26.5s9.8 13.3 17.3 17.4c7.5 4 15.8 6.1 30.6 6.1h311.5c14.3 0 22.5-2.2 29.9-6.1 7.5-4 13.3-10 17.3-17.4 4-7.5 6.2-14.5 6.2-26.5 0-2.6.4-3.2 1.1-4.9.8-1.6 2-2.9 3.4-3.8 1.4-.8 3.2-1.3 5.4-1.3h54.2c40.1 0 54.7 4.2 69.4 12a81.8 81.8 0 0134 34c7.8 14.7 12 29.3 12 69.4v1457.2c0 40.1-4.2 54.7-12 69.4a81.8 81.8 0 01-34 34c-14.7 7.8-29.3 12-69.4 12H115.4c-40.1 0-54.7-4.2-69.4-12a81.8 81.8 0 01-34-34c-7.8-14.7-12-29.3-12-69.4V115.4C0 75.3 4.2 60.7 12 46a81.8 81.8 0 0134-34C60.7 4.2 75.3 0 115.4 0h55.4z" fill="#000" fill-rule="evenodd"/></g>',
    realisticImage: {
        width: 490,
        height: 944,
        screenOffsetLeft: 50,
        screenOffsetTop: 50,
        availableColors: [{
            id: "black",
            title: "Black",
            colorValue: "#2E2C36"
        }, {
            id: "white",
            title: "White",
            colorValue: "#F7F3F0"
        }, {
            id: "blue",
            title: "Blue",
            colorValue: "#14496D"
        }, {
            id: "green",
            title: "Green",
            colorValue: "#DAF0D9"
        }, {
            id: "red",
            title: "Red",
            colorValue: "#DB4141"
        }],
        handOffset: {
            left: 29,
            right: 29,
            bottom: 29
        }
    }
}, {
    id: "iphone-12-mini",
    title: "iPhone 12 Mini",
    screenRadius: 0,
    clayBezelLeft: 22,
    clayBezelRight: 22,
    clayBezelTop: 22,
    clayBezelBottom: 22,
    clayBezelRadius: 66,
    screenWidth: 360,
    screenHeight: 780,
    externalClay: {
        width: 450,
        height: 890,
        screenOffsetTop: 55,
        screenOffsetLeft: 45
    },
    screenMask: '<g style="transform: scale(0.5);"><path d="M142 18c0 19 14 47 43 48h349c31 0 44-29 44-48 0-12 4-18 14-18h18c38 0 52 4 66 11 14 8 25 19 33 33v1c7 14 11 28 11 65v1340c0 38-4 52-11 66-8 14-19 25-33 33h-1c-14 7-28 11-65 11H110c-38 0-52-4-66-11-14-8-25-19-33-33v-1c-7-13-11-27-11-64V110c0-38 4-52 11-66 8-14 19-25 33-33h1C58 4 72 0 109 0h16c11 0 17 6 17 18z" fill="#000" fill-rule="evenodd"/></g>',
    realisticImage: {
        width: 460,
        height: 880,
        screenOffsetLeft: 50,
        screenOffsetTop: 50,
        availableColors: [{
            id: "black",
            title: "Black",
            colorValue: "#2E2C36"
        }, {
            id: "white",
            title: "White",
            colorValue: "#F7F3F0"
        }, {
            id: "blue",
            title: "Blue",
            colorValue: "#14496D"
        }, {
            id: "green",
            title: "Green",
            colorValue: "#DAF0D9"
        }, {
            id: "red",
            title: "Red",
            colorValue: "#DB4141"
        }],
        handOffset: {
            left: 31.5,
            right: 30.5,
            bottom: 30
        }
    }
}, {
    id: "iphone-12-pro",
    title: "iPhone 12 Pro",
    screenRadius: 0,
    clayBezelLeft: 22,
    clayBezelRight: 22,
    clayBezelTop: 22,
    clayBezelBottom: 22,
    clayBezelRadius: 66,
    screenWidth: 390,
    screenHeight: 844,
    externalClay: {
        width: 494,
        height: 968,
        screenOffsetTop: 62,
        screenOffsetLeft: 52
    },
    screenMask: '<g style="transform: scale(0.5);"><path d="M171.2 0c2.3 0 4 .5 5.4 1.3 1.6 1 2.8 2.2 3.7 3.8.8 1.6 1.2 2.3 1.2 4.9 0 12 2.2 19 6.2 26.5s9.8 13.3 17.3 17.4c7.5 4 15.8 6.1 30.6 6.1h311.5c14.3 0 22.5-2.2 29.9-6.1 7.5-4 13.3-10 17.3-17.4 4-7.5 6.2-14.5 6.2-26.5 0-2.6.4-3.2 1.1-4.9.8-1.6 2-2.9 3.4-3.8 1.4-.8 3.2-1.3 5.4-1.3h54.2c40.1 0 54.7 4.2 69.4 12a81.8 81.8 0 0134 34c7.8 14.7 12 29.3 12 69.4v1457.2c0 40.1-4.2 54.7-12 69.4a81.8 81.8 0 01-34 34c-14.7 7.8-29.3 12-69.4 12H115.4c-40.1 0-54.7-4.2-69.4-12a81.8 81.8 0 01-34-34c-7.8-14.7-12-29.3-12-69.4V115.4C0 75.3 4.2 60.7 12 46a81.8 81.8 0 0134-34C60.7 4.2 75.3 0 115.4 0h55.4z" fill="#000" fill-rule="evenodd"/></g>',
    realisticImage: {
        width: 490,
        height: 944,
        screenOffsetLeft: 50,
        screenOffsetTop: 50,
        availableColors: [{
            id: "graphite",
            title: "Graphite",
            colorValue: "#585753"
        }, {
            id: "silver",
            title: "Silver",
            colorValue: "#E5E6E1"
        }, {
            id: "pacific-blue",
            title: "Pacific Blue",
            colorValue: "#415D6C"
        }, {
            id: "gold",
            title: "Gold",
            colorValue: "#FCECD5"
        }],
        handOffset: {
            left: 29,
            right: 29,
            bottom: 29
        }
    }
}, {
    id: "iphone-12-pro-max",
    title: "iPhone 12 Pro Max",
    screenRadius: 50,
    clayBezelLeft: 22,
    clayBezelRight: 22,
    clayBezelTop: 22,
    clayBezelBottom: 22,
    clayBezelRadius: 66,
    screenWidth: 428,
    screenHeight: 926,
    externalClay: {
        width: 532,
        height: 1050,
        screenOffsetTop: 62,
        screenOffsetLeft: 52
    },
    screenMask: '<path d="M102 0c6 0 7 3 7 9 0 10 7 23 24 23h164c13 0 22-12 22-23 0-6 1-9 7-9h34c24 0 32 2 41 7s15 11 20 20 7 17 7 41v790c0 24-2 32-7 41s-11 15-20 20-17 7-41 7H68c-24 0-32-2-41-7s-15-11-20-20-7-17-7-41V68c0-24 2-32 7-41S18 12 27 7s17-7 41-7h34z" fill="#000" fill-rule="evenodd"/>',
    realisticImage: {
        width: 528,
        height: 1026,
        screenOffsetLeft: 50,
        screenOffsetTop: 50,
        availableColors: [{
            id: "graphite",
            title: "Graphite",
            colorValue: "#585753"
        }, {
            id: "silver",
            title: "Silver",
            colorValue: "#E5E6E1"
        }, {
            id: "pacific-blue",
            title: "Pacific Blue",
            colorValue: "#415D6C"
        }, {
            id: "gold",
            title: "Gold",
            colorValue: "#FCECD5"
        }],
        handOffset: {
            left: 28.5,
            right: 28,
            bottom: 29
        }
    }
}, {
    id: "iphone-11",
    title: "iPhone 11",
    screenRadius: 0,
    clayBezelLeft: 35.5,
    clayBezelRight: 35.5,
    clayBezelTop: 35.5,
    clayBezelBottom: 35.5,
    clayBezelRadius: 77,
    screenWidth: 414,
    screenHeight: 896,
    externalClay: {
        width: 524,
        height: 1026,
        screenOffsetTop: 65,
        screenOffsetLeft: 55
    },
    screenMask: '<path d="M85.5 0C89.1 0 92 3 92 6.5c.3 6 1.5 10 3.4 13.5 2.2 4.1 5.5 7.4 9.6 9.6 4.2 2.2 8.9 3.4 17 3.4h170c8.1 0 12.8-1.2 17-3.4 4.1-2.2 7.4-5.5 9.6-9.6A31 31 0 00322 6.5c0-3.6 3-6.5 6.5-6.5h32.3c18.5 0 25.2 2 32 5.5 6.7 3.7 12 9 15.7 15.7 3.6 6.8 5.5 13.5 5.5 32v789.6c0 18.5-2 25.2-5.5 32-3.7 6.7-9 12-15.7 15.7-6.8 3.6-13.5 5.5-32 5.5H53.2c-18.5 0-25.2-2-32-5.5-6.7-3.7-12-9-15.7-15.7C2 868 0 861.3 0 842.8V53.2c0-18.5 2-25.2 5.5-32 3.7-6.7 9-12 15.7-15.7C28 2 34.7 0 53.2 0h32.3z" fill="#000" fill-rule="nonzero"/>',
    realisticImage: {
        width: 514,
        height: 996,
        screenOffsetLeft: 50,
        screenOffsetTop: 50,
        availableColors: [{
            id: "black",
            title: "Black",
            colorValue: "#202120"
        }, {
            id: "white",
            title: "White",
            colorValue: "#F9F6EF"
        }, {
            id: "purple",
            title: "Purple",
            colorValue: "#D1CDDB"
        }, {
            id: "green",
            title: "Green",
            colorValue: "#ADE0CD"
        }, {
            id: "red",
            title: "Red",
            colorValue: "#B90D2E"
        }, {
            id: "yellow",
            title: "Yellow",
            colorValue: "#FFE680"
        }],
        handOffset: {
            left: 14.5,
            right: 14.5,
            bottom: 14.5
        }
    }
}, {
    id: "iphone-11-pro",
    title: "iPhone 11 Pro",
    ...Dn.iPhonePro,
    screenWidth: 375,
    screenHeight: 812,
    externalClay: {
        width: 485,
        height: 942,
        screenOffsetTop: 65,
        screenOffsetLeft: 55
    },
    screenMask: '<path d="M292 8.668V9c0 9.266-7.07 21-23.332 21h-162C90.402 30 83.332 18.266 83.332 9v-.332c0-4.285 0-8.668-7.664-8.668H43.332C16.312 0 0 16.313 0 43.332v725.336C0 795.688 16.313 812 43.332 812h288.336c27.02 0 43.332-16.313 43.332-43.332V43.332C375 16.312 358.687 0 331.668 0h-32C292 0 292 4.383 292 8.668zm0 0"/>',
    realisticImage: {
        width: 475,
        height: 912,
        screenOffsetLeft: 50,
        screenOffsetTop: 50,
        availableColors: [{
            id: "space-grey",
            title: "Space Grey",
            colorValue: "#52514F"
        }, {
            id: "silver",
            title: "Silver",
            colorValue: "#EBEBE3"
        }, {
            id: "gold",
            title: "Gold",
            colorValue: "#FBD7BD"
        }, {
            id: "midnight-green",
            title: "Midnight Green",
            colorValue: "#4F5850"
        }],
        handOffset: {
            left: 24.5,
            right: 24.5,
            bottom: 23.5
        }
    }
}, {
    id: "iphone-11-pro-max",
    title: "iPhone 11 Pro Max",
    ...Dn.iPhonePro,
    screenWidth: 414,
    screenHeight: 896,
    externalClay: {
        width: 524,
        height: 1026,
        screenOffsetTop: 65,
        screenOffsetLeft: 55
    },
    screenMask: '<path d="M96 0c3.313 0 5.91 2.688 6 6 .18 6.645 1.191 10.148 2.938 13.41 1.917 3.586 4.73 6.402 8.316 8.317 3.586 1.918 7.441 2.941 15.445 2.941h156.602c8.004 0 11.86-1.023 15.445-2.941 3.586-1.915 6.399-4.73 8.317-8.317 1.746-3.265 2.746-6.758 2.937-13.41.094-3.313 2.688-6 6-6h46.004c17.387 0 23.687 1.809 30.043 5.21 6.355 3.4 11.344 8.388 14.742 14.743C412.191 26.31 414 32.61 414 49.996v796.008c0 17.387-1.809 23.687-5.21 30.043-3.4 6.355-8.388 11.344-14.743 14.742-6.356 3.402-12.656 5.211-30.043 5.211H49.996c-17.387 0-23.687-1.809-30.043-5.21-6.355-3.4-11.344-8.388-14.742-14.743C1.809 869.69 0 863.39 0 846.004V49.996C0 32.61 1.809 26.31 5.21 19.953c3.4-6.355 8.388-11.344 14.743-14.742C26.31 1.809 32.61 0 49.996 0zm0 0"/>',
    realisticImage: {
        width: 514,
        height: 996,
        screenOffsetLeft: 50,
        screenOffsetTop: 50,
        availableColors: [{
            id: "space-grey",
            title: "Space Grey",
            colorValue: "#52514F"
        }, {
            id: "silver",
            title: "Silver",
            colorValue: "#EBEBE3"
        }, {
            id: "gold",
            title: "Gold",
            colorValue: "#FBD7BD"
        }, {
            id: "midnight-green",
            title: "Midnight Green",
            colorValue: "#4F5850"
        }],
        handOffset: {
            left: 23.5,
            right: 24.5,
            bottom: 24
        }
    }
}, {
    id: "iphone-8",
    title: "iPhone 8",
    ...Dn.iPhone8,
    screenWidth: 375,
    screenHeight: 667,
    externalClay: {
        width: 491,
        height: 971,
        screenOffsetLeft: 58,
        screenOffsetTop: 152
    },
    realisticImage: {
        width: 475,
        height: 927,
        screenOffsetLeft: 50,
        screenOffsetTop: 130,
        availableColors: [{
            id: "space-grey",
            title: "Space Grey",
            colorValue: "#28282A"
        }, {
            id: "silver",
            title: "Silver",
            colorValue: "#DFE1E2"
        }, {
            id: "gold",
            title: "Gold",
            colorValue: "#F6E6DB"
        }],
        handOffset: {
            left: 22,
            right: 22,
            bottom: 18.5
        }
    }
}, {
    id: "iphone-8-plus",
    title: "iPhone 8 Plus",
    ...Dn.iPhone8,
    screenWidth: 414,
    screenHeight: 736,
    externalClay: {
        width: 530,
        height: 1064,
        screenOffsetLeft: 58,
        screenOffsetTop: 164
    },
    realisticImage: {
        width: 514,
        height: 996,
        screenOffsetLeft: 50,
        screenOffsetTop: 130,
        availableColors: [{
            id: "space-grey",
            title: "Space Grey",
            colorValue: "#28282A"
        }, {
            id: "silver",
            title: "Silver",
            colorValue: "#DFE1E2"
        }, {
            id: "gold",
            title: "Gold",
            colorValue: "#F6E6DB"
        }],
        handOffset: {
            left: 21,
            right: 20.5,
            bottom: 19
        }
    }
}, {
    id: "iphone-se",
    title: "iPhone SE",
    screenWidth: 320,
    screenHeight: 568,
    screenRadius: 0,
    clayBezelLeft: 20,
    clayBezelRight: 20,
    clayBezelTop: 112,
    clayBezelBottom: 112,
    clayBezelRadius: 38 * 1.5,
    externalClay: {
        width: 436,
        height: 872,
        screenOffsetLeft: 58,
        screenOffsetTop: 152
    },
    realisticImage: {
        width: 420,
        height: 828,
        screenOffsetLeft: 50,
        screenOffsetTop: 130,
        availableColors: [{
            id: "space-grey",
            title: "Space Grey",
            colorValue: "#C3C4C8"
        }, {
            id: "silver",
            title: "Silver",
            colorValue: "#E1E2E4"
        }, {
            id: "gold",
            title: "Gold",
            colorValue: "#EFD8BD"
        }, {
            id: "rose-gold",
            title: "Rose Gold",
            colorValue: "#F7CFCA"
        }],
        handOffset: {
            left: 22,
            right: 22,
            bottom: 26.5
        }
    }
}, {
    id: "samsung-galaxy-s7",
    title: "Samsung Galaxy S7",
    screenRadius: 0,
    clayBezelLeft: 22,
    clayBezelRight: 22,
    clayBezelTop: 22,
    clayBezelBottom: 22,
    clayBezelRadius: 66,
    screenWidth: 360,
    screenHeight: 640,
    externalClay: {
        width: 454,
        height: 880,
        screenOffsetTop: 120,
        screenOffsetLeft: 47
    },
    realisticImage: {
        width: 440,
        height: 860,
        screenOffsetLeft: 40,
        screenOffsetTop: 110,
        availableColors: [{
            id: "black",
            title: "Black",
            colorValue: "#2E2C36"
        }, {
            id: "white",
            title: "White",
            colorValue: "#F7F3F0"
        }, {
            id: "silver",
            title: "Silver",
            colorValue: "#E5E6E1"
        }, {
            id: "gold",
            title: "Gold",
            colorValue: "#FCECD5"
        }],
        handOffset: {
            left: 26,
            right: 25.5,
            bottom: 32
        }
    }
}, {
    id: "samsung-note-10",
    title: "Samsung Note 10",
    screenWidth: 360,
    screenHeight: 760,
    screenRadius: 10,
    clayBezelLeft: 7,
    clayBezelRight: 7,
    clayBezelTop: 15,
    clayBezelBottom: 15,
    clayBezelRadius: 15
}, {
    id: "pixel-5",
    title: "Google Pixel 5",
    screenRadius: 31,
    clayBezelLeft: 22,
    clayBezelRight: 22,
    clayBezelTop: 22,
    clayBezelBottom: 22,
    clayBezelRadius: 66,
    screenWidth: 360,
    screenHeight: 780,
    externalClay: {
        width: 460,
        height: 900,
        screenOffsetTop: 60,
        screenOffsetLeft: 50
    },
    realisticImage: {
        width: 920 / 2,
        height: 1760 / 2,
        screenOffsetLeft: 100 / 2,
        screenOffsetTop: 100 / 2,
        availableColors: [{
            id: "just-black",
            title: "Just Black",
            colorValue: "#2E2C36"
        }, {
            id: "sorta-sage",
            title: "Sorta Sage",
            colorValue: "#B7C9C0"
        }],
        handOffset: {
            left: 31.5,
            right: 31,
            bottom: 31
        }
    }
}, {
    id: "pixel-4",
    title: "Google Pixel 4",
    screenWidth: 360,
    screenHeight: 760,
    screenRadius: 34,
    clayBezelLeft: 10,
    clayBezelRight: 10,
    clayBezelTop: 50,
    clayBezelBottom: 25,
    clayBezelRadius: 50,
    externalClay: {
        width: 460,
        height: 938,
        screenOffsetLeft: 50,
        screenOffsetTop: 89
    },
    realisticImage: {
        width: 460,
        height: 920,
        screenOffsetLeft: 50,
        screenOffsetTop: 80,
        availableColors: [{
            id: "clearly-white",
            title: "Clearly White",
            colorValue: "#EAEDF2"
        }, {
            id: "just-black",
            title: "Just Black",
            colorValue: "#1A1A1A"
        }, {
            id: "oh-so-orange",
            title: "Oh So Orange",
            colorValue: "#FF7A68"
        }],
        handOffset: {
            left: 35.5,
            right: 35.5,
            bottom: 57
        }
    }
}, {
    id: "macbook-air",
    title: "MacBook Air",
    screenWidth: 1440,
    screenHeight: 900,
    disableRotation: !0,
    externalClay: {
        width: 1890,
        height: 1125,
        screenOffsetLeft: 225,
        screenOffsetTop: 98
    },
    realisticImage: {
        width: 3848 / 2,
        height: 2240 / 2,
        screenOffsetLeft: 484 / 2,
        screenOffsetTop: 196 / 2,
        availableColors: [{
            id: "silver",
            title: "Silver",
            colorValue: "#E5E6E1"
        }, {
            id: "space-grey",
            title: "Space Grey",
            colorValue: "#B1B5B7"
        }, {
            id: "gold",
            title: "Gold",
            colorValue: "#FCECD5"
        }]
    }
}, {
    id: "macbook-pro-13",
    title: 'MacBook Pro 13"',
    screenWidth: 1440,
    screenHeight: 900,
    disableRotation: !0,
    externalClay: {
        width: 1914,
        height: 1169,
        screenOffsetLeft: 236,
        screenOffsetTop: 109
    },
    realisticImage: {
        width: 3916 / 2,
        height: 2330 / 2,
        screenOffsetLeft: 518 / 2,
        screenOffsetTop: 218 / 2,
        availableColors: [{
            id: "silver",
            title: "Silver",
            colorValue: "#E5E6E1"
        }, {
            id: "space-grey",
            title: "Space Grey",
            colorValue: "#B1B5B7"
        }]
    }
}, {
    id: "macbook-pro-16",
    title: 'MacBook Pro 16"',
    screenWidth: 1536,
    screenHeight: 960,
    disableRotation: !0,
    externalClay: {
        width: 1984,
        height: 1179,
        screenOffsetLeft: 225,
        screenOffsetTop: 78
    },
    realisticImage: {
        width: 4032 / 2,
        height: 2348 / 2,
        screenOffsetLeft: 480 / 2,
        screenOffsetTop: 148 / 2,
        availableColors: [{
            id: "silver",
            title: "Silver",
            colorValue: "#E5E6E1"
        }, {
            id: "space-grey",
            title: "Space Grey",
            colorValue: "#B1B5B7"
        }]
    }
}, {
    id: "imac-21-5",
    title: 'iMac 21.5"',
    screenWidth: 2048,
    screenHeight: 1152,
    disableRotation: !0,
    externalClay: {
        width: 2288,
        height: 1892,
        screenOffsetLeft: 120,
        screenOffsetTop: 120
    },
    realisticImage: {
        width: 4562 / 2,
        height: 3796 / 2,
        screenOffsetLeft: 232 / 2,
        screenOffsetTop: 244 / 2
    }
}, {
    id: "imac-27",
    title: 'iMac 27"',
    screenWidth: 2560,
    screenHeight: 1440,
    disableRotation: !0,
    externalClay: {
        width: 2848,
        height: 2351,
        screenOffsetLeft: 144,
        screenOffsetTop: 151
    },
    realisticImage: {
        width: 5676 / 2,
        height: 4720 / 2,
        screenOffsetLeft: 278 / 2,
        screenOffsetTop: 292 / 2,
        availableColors: [{
            id: "silver",
            title: "Silver",
            colorValue: "#E5E6E1"
        }, {
            id: "pro",
            title: "Pro",
            colorValue: "#5F5E63"
        }]
    }
}, {
    id: "pro-display-xdr",
    title: "Pro Display XDR",
    screenWidth: 3008,
    screenHeight: 1692,
    disableRotation: !0,
    externalClay: {
        width: 3148,
        height: 2325,
        screenOffsetLeft: 70,
        screenOffsetTop: 60
    },
    realisticImage: {
        width: 6276 / 2,
        height: 4695 / 2,
        screenOffsetLeft: 130 / 2,
        screenOffsetTop: 130 / 2
    }
}, {
    id: "dell-xps",
    title: "Dell XPS",
    screenWidth: 1920,
    screenHeight: 1080,
    disableRotation: !0,
    externalClay: {
        width: 2624,
        height: 1381,
        screenOffsetLeft: 352,
        screenOffsetTop: 57
    },
    realisticImage: {
        width: 5412 / 2,
        height: 2746 / 2,
        screenOffsetLeft: 786 / 2,
        screenOffsetTop: 108 / 2
    }
}, {
    id: "surface-book",
    title: "Microsoft Surface Book",
    screenWidth: 1500,
    screenHeight: 1e3,
    disableRotation: !0,
    externalClay: {
        width: 2089,
        height: 1234,
        screenOffsetLeft: 296,
        screenOffsetTop: 93
    },
    realisticImage: {
        width: 4200 / 2,
        height: 2508 / 2,
        screenOffsetLeft: 600 / 2,
        screenOffsetTop: 210 / 2
    }
}, {
    id: "ipad",
    title: "iPad",
    screenRadius: 0,
    screenWidth: 810,
    screenHeight: 1080,
    clayBezelLeft: 30,
    clayBezelRight: 30,
    clayBezelTop: 95,
    clayBezelBottom: 95,
    clayBezelRadius: 0,
    externalClay: {
        width: 966,
        height: 1378,
        screenOffsetLeft: 78,
        screenOffsetTop: 149
    },
    realisticImage: {
        width: 1920 / 2,
        height: 2720 / 2,
        screenOffsetLeft: 75,
        screenOffsetTop: 140,
        availableColors: [{
            id: "space-grey",
            title: "Space Grey",
            colorValue: "#C3C4C8"
        }, {
            id: "silver",
            title: "Silver",
            colorValue: "#E1E2E4"
        }, {
            id: "gold",
            title: "Gold",
            colorValue: "#EFD8BD"
        }]
    }
}, {
    id: "ipad-mini",
    title: "iPad Mini",
    screenRadius: 0,
    clayBezelLeft: 49,
    clayBezelRight: 49,
    clayBezelTop: 49,
    clayBezelBottom: 49,
    clayBezelRadius: 49,
    screenWidth: 768,
    screenHeight: 1024,
    externalClay: {
        width: 924,
        height: 1384,
        screenOffsetLeft: 78,
        screenOffsetTop: 180
    },
    realisticImage: {
        width: 1856 / 2,
        height: 2728 / 2,
        screenOffsetLeft: 160 / 2,
        screenOffsetTop: 340 / 2,
        availableColors: [{
            id: "space-grey",
            title: "Space Grey",
            colorValue: "#C3C4C8"
        }, {
            id: "silver",
            title: "Silver",
            colorValue: "#E1E2E4"
        }, {
            id: "gold",
            title: "Gold",
            colorValue: "#EFD8BD"
        }]
    }
}, {
    id: "ipad-air",
    title: "iPad Air",
    screenRadius: 18,
    clayBezelLeft: 49,
    clayBezelRight: 49,
    clayBezelTop: 49,
    clayBezelBottom: 49,
    clayBezelRadius: 49,
    screenWidth: 820,
    screenHeight: 1180,
    externalClay: {
        width: 994,
        height: 1374,
        screenOffsetLeft: 87,
        screenOffsetTop: 97
    },
    realisticImage: {
        width: 1960 / 2,
        height: 2680 / 2,
        screenOffsetLeft: 160 / 2,
        screenOffsetTop: 160 / 2,
        availableColors: [{
            id: "space-grey",
            title: "Space Grey",
            colorValue: "#C3C4C8"
        }, {
            id: "silver",
            title: "Silver",
            colorValue: "#E1E2E4"
        }, {
            id: "rose-gold",
            title: "Rose Gold",
            colorValue: "#ECCBC4"
        }, {
            id: "blue",
            title: "Blue",
            colorValue: "#CBDAE6"
        }, {
            id: "green",
            title: "Green",
            colorValue: "#DAF0D9"
        }]
    }
}, {
    id: "ipad-pro-11",
    title: "iPad Pro 11\u2033",
    screenRadius: 17,
    clayBezelLeft: 49,
    clayBezelRight: 49,
    clayBezelTop: 49,
    clayBezelBottom: 49,
    clayBezelRadius: 49,
    screenWidth: 834,
    screenHeight: 1194,
    externalClay: {
        width: 990,
        height: 1370,
        screenOffsetLeft: 78,
        screenOffsetTop: 88
    },
    realisticImage: {
        width: 1968 / 2,
        height: 2688 / 2,
        screenOffsetLeft: 75,
        screenOffsetTop: 75,
        availableColors: [{
            id: "space-grey",
            title: "Space Grey",
            colorValue: "#C3C4C8"
        }, {
            id: "silver",
            title: "Silver",
            colorValue: "#E1E2E4"
        }]
    }
}, {
    id: "ipad-pro-12-9",
    title: "iPad Pro 12.9\u2033",
    ...Dn.iPadPro,
    screenRadius: 17,
    screenWidth: 1024,
    screenHeight: 1366,
    externalClay: {
        width: 1180,
        height: 1542,
        screenOffsetLeft: 78,
        screenOffsetTop: 88
    },
    realisticImage: {
        width: 2348 / 2,
        height: 3032 / 2,
        screenOffsetLeft: 75,
        screenOffsetTop: 75,
        availableColors: [{
            id: "space-grey",
            title: "Space Grey",
            colorValue: "#C3C4C8"
        }, {
            id: "silver",
            title: "Silver",
            colorValue: "#E1E2E4"
        }]
    }
}, {
    id: "surface-3",
    title: "Microsoft Surface 3",
    screenRadius: 0,
    clayBezelLeft: 49,
    clayBezelRight: 49,
    clayBezelTop: 49,
    clayBezelBottom: 49,
    clayBezelRadius: 49,
    screenWidth: 960,
    screenHeight: 640,
    externalClay: {
        width: 1184,
        height: 864,
        screenOffsetLeft: 112,
        screenOffsetTop: 112
    },
    realisticImage: {
        width: 2280 / 2,
        height: 1580 / 2,
        screenOffsetLeft: 180 / 2,
        screenOffsetTop: 150 / 2
    }
}, {
    id: "surface-pro-4",
    title: "Microsoft Surface Pro 4",
    screenRadius: 0,
    clayBezelLeft: 49,
    clayBezelRight: 49,
    clayBezelTop: 49,
    clayBezelBottom: 49,
    clayBezelRadius: 49,
    screenWidth: 1368,
    screenHeight: 912,
    externalClay: {
        width: 1592,
        height: 1136,
        screenOffsetLeft: 112,
        screenOffsetTop: 112
    },
    realisticImage: {
        width: 3176 / 2,
        height: 2224 / 2,
        screenOffsetLeft: 220 / 2,
        screenOffsetTop: 200 / 2
    }
}, {
    id: "apple-watch-44",
    title: "Apple Watch 44mm",
    screenRadius: 33,
    screenWidth: 184,
    screenHeight: 224,
    disableRotation: !0,
    externalClay: {
        width: 298,
        height: 502,
        screenOffsetLeft: 57,
        screenOffsetTop: 129
    },
    realisticImage: {
        width: 548 / 2,
        height: 908 / 2,
        screenOffsetLeft: 90 / 2,
        screenOffsetTop: 230 / 2,
        availableColors: [{
            id: "black",
            title: "Black",
            colorValue: "#2E2C36"
        }, {
            id: "white",
            title: "White",
            colorValue: "#F7F3F0"
        }, {
            id: "yellow",
            title: "Yellow",
            colorValue: "#FDDC6C"
        }, {
            id: "orange",
            title: "Orange",
            colorValue: "#F35C56"
        }]
    }
}, {
    id: "apple-watch-40",
    title: "Apple Watch 40mm",
    screenRadius: 27,
    screenWidth: 162,
    screenHeight: 197,
    disableRotation: !0,
    externalClay: {
        width: 280,
        height: 463,
        screenOffsetLeft: 59,
        screenOffsetTop: 124
    },
    realisticImage: {
        width: 504 / 2,
        height: 854 / 2,
        screenOffsetLeft: 90 / 2,
        screenOffsetTop: 230 / 2,
        availableColors: [{
            id: "black",
            title: "Black",
            colorValue: "#2E2C36"
        }, {
            id: "white",
            title: "White",
            colorValue: "#F7F3F0"
        }, {
            id: "yellow",
            title: "Yellow",
            colorValue: "#FDDC6C"
        }, {
            id: "orange",
            title: "Orange",
            colorValue: "#F35C56"
        }]
    }
}, {
    id: "tv-full-hd",
    title: "Full HD",
    screenRadius: 0,
    screenWidth: 1920,
    screenHeight: 1080,
    externalClay: {
        width: 1968,
        height: 1168,
        screenOffsetLeft: 24,
        screenOffsetTop: 12
    },
    realisticImage: {
        width: 4040 / 2,
        height: 2360 / 2,
        screenOffsetLeft: 100 / 2,
        screenOffsetTop: 100 / 2
    }
}, {
    id: "tv-4k",
    title: "4K",
    screenRadius: 0,
    screenWidth: 3840,
    screenHeight: 2160,
    externalClay: {
        width: 3908,
        height: 2308,
        screenOffsetLeft: 34,
        screenOffsetTop: 24
    },
    realisticImage: {
        width: 7960 / 2,
        height: 4600 / 2,
        screenOffsetLeft: 140 / 2,
        screenOffsetTop: 140 / 2
    }
}, {
    id: "720p",
    title: "720p",
    ...Dn.desktop,
    screenWidth: 720,
    screenHeight: 1280
}, {
    id: "900p",
    title: "900p",
    ...Dn.desktop,
    screenWidth: 900,
    screenHeight: 1440
}, {
    id: "1080p",
    title: "1080p",
    ...Dn.desktop,
    screenWidth: 1080,
    screenHeight: 1920
}, {
    id: "1440p",
    title: "1440p",
    ...Dn.desktop,
    screenWidth: 1440,
    screenHeight: 2560
}, {
    id: "4k",
    title: "4K",
    ...Dn.desktop,
    screenWidth: 2160,
    screenHeight: 3840
}];
var EN = HM.reduce( (e, t) => (e[t.id] = t,
e), {});
var De = e => e;
function jM(e) {
    let t = Object.create(Object.prototype);
    return n => (t[n] === void 0 && (t[n] = e(n)),
    t[n])
}
var WM = /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/
  , UM = jM(e => WM.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
  , lw = b.createContext(void 0)
  , MN = lw.Provider
  , XM = () => b.useContext(lw) ?? {}
  , YM = on(Np(), 1)
  , en = typeof Ge < "u" ? Ge : void 0
  , lr = () => typeof document == "object";
var GM = () => {
    let e = -1
      , n = en && /Version\/([\d.]+)/.exec(en.userAgent);
    return n && n[1] && (e = parseFloat(n[1])),
    e
}
  , KM = () => en && /Chrome/.test(en.userAgent) && /Google Inc/.test(en.vendor) && !QM()
  , cw = () => en && /Safari/.test(en.userAgent) && /Apple Computer/.test(en.vendor);
var qM = () => en && /FramerX/.test(en.userAgent)
  , QM = () => en && /Edg\//.test(en.userAgent);
var uw = () => YM.default.env.NODE_ENV === "test";
var z1 = e => () => {
    na(e)
}
  , ZM = () => () => {}
  , JM = {
    useImageSource(e) {
        return e.src ?? ""
    },
    useImageElement(e, t, n) {
        let r = new Image;
        return r.src = Ye.useImageSource(e, t, n),
        e.srcSet && (r.srcset = e.srcSet),
        r
    },
    canRenderOptimizedCanvasImage() {
        return !1
    }
}
  , eO = !1
  , tO = {
    get(e, t, n) {
        return Reflect.has(e, t) ? Reflect.get(e, t, n) : ["getLogger"].includes(String(t)) ? ZM() : z1(eO ? `${String(t)} is not available in this version of Framer.` : `${String(t)} is only available inside of Framer. https://www.framer.com/`)
    }
}
  , Ye = new Proxy(JM,tO);
function nO(e, t, n=1) {
    let {width: r, height: i} = t
      , o = e.pixelWidth ?? e.intrinsicWidth ?? 0
      , s = e.pixelHeight ?? e.intrinsicHeight ?? 0;
    if (r < 1 || i < 1 || o < 1 || s < 1)
        return;
    r *= n,
    i *= n;
    let a = r / i
      , l = o / s;
    switch (e.fit) {
    case "fill":
        return l > a ? s / i : o / r;
    case "fit":
    case "stretch":
        return Math.max(o / r, s / i)
    }
}
function N1(e, t) {
    return t && Math.max(1, e) > t ? "pixelated" : "auto"
}
var $1 = {
    position: "absolute",
    borderRadius: "inherit",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
}
  , rO = {
    backgroundSize: "16px 16px",
    backgroundImage: "repeating-linear-gradient(45deg, rgba(180, 180, 180, 0.8) 0, rgba(180, 180, 180, 0.8) 1px, rgba(255, 255, 255, 0.2) 0, rgba(255, 255, 255, 0.2) 50%)",
    border: "1px solid #c4c4c4"
};
function iO(e) {
    switch (e) {
    case "fit":
        return "contain";
    case "stretch":
        return "fill";
    default:
        return "cover"
    }
}
function fw(e, t) {
    let n = e ?? "center"
      , r = t ?? "center";
    return n === "center" && r === "center" ? "center" : n + " " + r
}
function oO(e, t) {
    if (!t)
        return "auto";
    let n = Fe.current() === "CANVAS" ? jt.devicePixelRatio : 1
      , r = nO(e, t, n);
    return Fe.current() === "CANVAS" ? N1(1, r) : N1(Yc.zoom, r)
}
function Gp(e, t) {
    return {
        display: "block",
        width: "100%",
        height: "100%",
        borderRadius: "inherit",
        objectPosition: fw(e.positionX, e.positionY),
        objectFit: iO(e.fit),
        imageRendering: oO(e, t)
    }
}
function sO({image: e, containerSize: t, nodeId: n, alt: r}) {
    let i = Ye.useImageSource(e, t, n)
      , o = Gp(e, t)
      , [s,a] = b.useState()
      , l = b.useRef(null)
      , c = XM();
    return b.useEffect( () => {
        if (!c.imgSizesWorkaroundEnabled)
            return;
        let u = l.current;
        if (!u || uw() || !e.sizes || !u.closest("[data-framer-name]"))
            return;
        let d = u.clientWidth
          , m = Number(e.sizes.replace("px", ""));
        !isNaN(m) && d < m || a(d + "px")
    }
    , [e.sizes]),
    k("img", {
        ref: l,
        decoding: "async",
        loading: e.loading,
        sizes: s ?? e.sizes,
        srcSet: e.srcSet,
        src: i,
        alt: r ?? e.alt,
        style: o
    })
}
function aO({image: e, containerSize: t, nodeId: n}) {
    let r = b.useRef(null)
      , i = Ye.useImageElement(e, t, n)
      , o = Gp(e, t);
    return b.useLayoutEffect( () => {
        let s = r.current;
        if (s !== null)
            return s.appendChild(i),
            () => {
                s.removeChild(i)
            }
    }
    , [i]),
    Object.assign(i.style, o),
    k("div", {
        ref: r,
        style: {
            display: "contents",
            borderRadius: "inherit"
        }
    })
}
function lO({nodeId: e, image: t, containerSize: n}) {
    let r = b.useRef(null)
      , i = Ye.useImageSource(t, n, e);
    return b.useLayoutEffect( () => {
        let o = r.current;
        if (o === null)
            return;
        let s = Gp(t, n);
        Ye.renderOptimizedCanvasImage(o, i, s, e)
    }
    , [e, t, i, n]),
    k("div", {
        ref: r,
        style: {
            display: "contents",
            borderRadius: "inherit"
        }
    })
}
function dw({layoutId: e, image: t, ...n}) {
    e && (e = e + "-background");
    let r = {
        ...$1,
        ...rO
    }
      , i = null;
    if (ke(t.src))
        if (t.fit === "tile" && t.pixelWidth && t.pixelHeight) {
            let o = mn(t.backgroundSize) ? t.backgroundSize : 1
              , s = {
                width: Math.round(o * t.pixelWidth),
                height: Math.round(o * t.pixelHeight)
            }
              , a = Ye.useImageSource(t, s);
            r.backgroundImage = `url(${a})`,
            r.backgroundRepeat = "repeat",
            r.backgroundPosition = fw(t.positionX, t.positionY),
            t.pixelWidth && (r.backgroundSize = `${(o * (t.pixelWidth / 2)).toFixed(2)}px auto`),
            r.border = 0,
            i = null
        } else
            Fe.current() !== "CANVAS" ? i = k(sO, {
                image: t,
                ...n
            }) : Ye.canRenderOptimizedCanvasImage(Ye.useImageSource(t)) ? i = k(lO, {
                image: t,
                ...n
            }) : i = k(aO, {
                image: t,
                ...n
            });
    return k(ft.div, {
        layoutId: e,
        style: i ? $1 : r,
        "data-framer-background-image-wrapper": !0,
        children: i
    })
}
var cO = "src", sr;
(e => {
    e.isImageObject = function(t) {
        return !t || typeof t == "string" ? !1 : cO in t
    }
}
)(sr || (sr = {}));
function uO(e, t) {
    let {_forwardedOverrideId: n, _forwardedOverrides: r, id: i} = t
      , o = n ?? i
      , s = r && o ? r[o] : void 0;
    return s && typeof s == "string" && (e = {
        ...e,
        src: s
    }),
    e
}
function fO(e) {
    let {background: t, image: n} = e;
    if (n !== void 0 && t && !sr.isImageObject(t))
        return;
    let r = null;
    if (ke(n) ? r = {
        alt: "",
        src: n
    } : r = Be.get(t, null),
    !!sr.isImageObject(r))
        return uO(r, e)
}
function dO(e, t, n=!0) {
    let {borderWidth: r, borderStyle: i, borderColor: o} = e;
    if (!r)
        return;
    let s, a, l, c;
    if (typeof r == "number" ? s = a = l = c = r : (s = r.top || 0,
    a = r.bottom || 0,
    l = r.left || 0,
    c = r.right || 0),
    !(s === 0 && a === 0 && l === 0 && c === 0)) {
        if (n && s === a && s === l && s === c) {
            t.border = `${s}px ${i} ${o}`;
            return
        }
        t.borderStyle = e.borderStyle,
        t.borderColor = e.borderColor,
        t.borderTopWidth = `${s}px`,
        t.borderBottomWidth = `${a}px`,
        t.borderLeftWidth = `${l}px`,
        t.borderRightWidth = `${c}px`
    }
}
function hO(e) {
    let t = e.layoutId ? `${e.layoutId}-border` : void 0;
    if (!e.borderWidth)
        return null;
    let n = {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        borderRadius: "inherit",
        pointerEvents: "none"
    };
    return e.border ? (n.border = e.border,
    k(ft.div, {
        style: n
    })) : (dO(e, n, !1),
    k(ft.div, {
        "data-frame-border": !0,
        style: n,
        layoutId: t
    }))
}
function su(e) {
    return e && e !== "search" && e !== "slot" && e !== "template" ? ft(e) : ft.div
}
var pO = KM();
function hw(e) {
    let t = {};
    return !pO || Fe.current() !== "CANVAS" || ((e === !0 || e === "x") && (t["data-framer-layout-hint-center-x"] = !0),
    (e === !0 || e === "y") && (t["data-framer-layout-hint-center-y"] = !0)),
    t
}
function Kp(e) {
    return e.replace(/^id_/, "").replace(/\\/g, "")
}
function mO(e, t) {
    if (!t && (t = e.children,
    !t))
        return {
            props: e,
            children: t
        };
    let n = e._forwardedOverrides
      , r = e._overrideForwardingDescription;
    if (r) {
        n = void 0;
        for (let i in r) {
            let o = r[i];
            e[o] !== void 0 && (n || (n = {},
            e = {
                ...e
            }),
            n[i] = e[o],
            delete e[o])
        }
    }
    return n ? (t = b.Children.map(t, i => b.isValidElement(i) ? b.cloneElement(i, {
        _forwardedOverrides: n
    }) : i),
    {
        props: e,
        children: t
    }) : {
        props: e,
        children: t
    }
}
function au(e) {
    return (t, n) => e === !0 ? `translate(-50%, -50%) ${n}` : e === "x" ? `translateX(-50%) ${n}` : e === "y" ? `translateY(-50%) ${n}` : n || "none"
}
function xa(e, {specificLayoutId: t, postfix: n}={}) {
    let {name: r, layoutIdKey: i, duplicatedFrom: o, __fromCodeComponentNode: s=!1, drag: a} = e
      , {getLayoutId: l, enabled: c} = M(To);
    return ce( () => {
        if (!c)
            return e.layoutId;
        let u = t || e.layoutId;
        if (!u && (a || !i || s))
            return;
        let f = u || l({
            id: i,
            name: r,
            duplicatedFrom: o
        });
        if (f)
            return n ? `${f}-${n}` : f
    }
    , [c])
}
var pw = typeof document < "u" ? bn : $, _o = b.createContext(!1), xi = [], vO = function() {
    return xi.some(function(e) {
        return e.activeTargets.length > 0
    })
}, gO = function() {
    return xi.some(function(e) {
        return e.skippedTargets.length > 0
    })
}, H1 = "ResizeObserver loop completed with undelivered notifications.", yO = function() {
    var e;
    typeof ErrorEvent == "function" ? e = new ErrorEvent("error",{
        message: H1
    }) : (e = document.createEvent("Event"),
    e.initEvent("error", !1, !1),
    e.message = H1),
    I.dispatchEvent(e)
}, oa;
(function(e) {
    e.BORDER_BOX = "border-box",
    e.CONTENT_BOX = "content-box",
    e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box"
}
)(oa || (oa = {}));
var Si = function(e) {
    return Object.freeze(e)
}, bO = function() {
    function e(t, n) {
        this.inlineSize = t,
        this.blockSize = n,
        Si(this)
    }
    return e
}(), mw = function() {
    function e(t, n, r, i) {
        return this.x = t,
        this.y = n,
        this.width = r,
        this.height = i,
        this.top = this.y,
        this.left = this.x,
        this.bottom = this.top + this.height,
        this.right = this.left + this.width,
        Si(this)
    }
    return e.prototype.toJSON = function() {
        var t = this
          , n = t.x
          , r = t.y
          , i = t.top
          , o = t.right
          , s = t.bottom
          , a = t.left
          , l = t.width
          , c = t.height;
        return {
            x: n,
            y: r,
            top: i,
            right: o,
            bottom: s,
            left: a,
            width: l,
            height: c
        }
    }
    ,
    e.fromRect = function(t) {
        return new e(t.x,t.y,t.width,t.height)
    }
    ,
    e
}(), qp = function(e) {
    return e instanceof SVGElement && "getBBox"in e
}, vw = function(e) {
    if (qp(e)) {
        var t = e.getBBox()
          , n = t.width
          , r = t.height;
        return !n && !r
    }
    var i = e
      , o = i.offsetWidth
      , s = i.offsetHeight;
    return !(o || s || e.getClientRects().length)
}, j1 = function(e) {
    var t, n;
    if (e instanceof Element)
        return !0;
    var r = (n = (t = e) === null || t === void 0 ? void 0 : t.ownerDocument) === null || n === void 0 ? void 0 : n.defaultView;
    return !!(r && e instanceof r.Element)
}, xO = function(e) {
    switch (e.tagName) {
    case "INPUT":
        if (e.type !== "image")
            break;
    case "VIDEO":
    case "AUDIO":
    case "EMBED":
    case "OBJECT":
    case "CANVAS":
    case "IFRAME":
    case "IMG":
        return !0
    }
    return !1
}, Zs = typeof I < "u" ? I : {}, Lc = new WeakMap, W1 = /auto|scroll/, SO = /^tb|vertical/, wO = /msie|trident/i.test(Zs.navigator && Zs.navigator.userAgent), An = function(e) {
    return parseFloat(e || "0")
}, Co = function(e, t, n) {
    return e === void 0 && (e = 0),
    t === void 0 && (t = 0),
    n === void 0 && (n = !1),
    new bO((n ? t : e) || 0,(n ? e : t) || 0)
}, U1 = Si({
    devicePixelContentBoxSize: Co(),
    borderBoxSize: Co(),
    contentBoxSize: Co(),
    contentRect: new mw(0,0,0,0)
}), gw = function(e, t) {
    if (t === void 0 && (t = !1),
    Lc.has(e) && !t)
        return Lc.get(e);
    if (vw(e))
        return Lc.set(e, U1),
        U1;
    var n = getComputedStyle(e)
      , r = qp(e) && e.ownerSVGElement && e.getBBox()
      , i = !wO && n.boxSizing === "border-box"
      , o = SO.test(n.writingMode || "")
      , s = !r && W1.test(n.overflowY || "")
      , a = !r && W1.test(n.overflowX || "")
      , l = r ? 0 : An(n.paddingTop)
      , c = r ? 0 : An(n.paddingRight)
      , u = r ? 0 : An(n.paddingBottom)
      , f = r ? 0 : An(n.paddingLeft)
      , d = r ? 0 : An(n.borderTopWidth)
      , m = r ? 0 : An(n.borderRightWidth)
      , g = r ? 0 : An(n.borderBottomWidth)
      , y = r ? 0 : An(n.borderLeftWidth)
      , S = f + c
      , h = l + u
      , p = y + m
      , v = d + g
      , x = a ? e.offsetHeight - v - e.clientHeight : 0
      , C = s ? e.offsetWidth - p - e.clientWidth : 0
      , w = i ? S + p : 0
      , T = i ? h + v : 0
      , E = r ? r.width : An(n.width) - w - C
      , _ = r ? r.height : An(n.height) - T - x
      , R = E + S + C + p
      , B = _ + h + x + v
      , A = Si({
        devicePixelContentBoxSize: Co(Math.round(E * devicePixelRatio), Math.round(_ * devicePixelRatio), o),
        borderBoxSize: Co(R, B, o),
        contentBoxSize: Co(E, _, o),
        contentRect: new mw(f,l,E,_)
    });
    return Lc.set(e, A),
    A
}, yw = function(e, t, n) {
    var r = gw(e, n)
      , i = r.borderBoxSize
      , o = r.contentBoxSize
      , s = r.devicePixelContentBoxSize;
    switch (t) {
    case oa.DEVICE_PIXEL_CONTENT_BOX:
        return s;
    case oa.BORDER_BOX:
        return i;
    default:
        return o
    }
}, kO = function() {
    function e(t) {
        var n = gw(t);
        this.target = t,
        this.contentRect = n.contentRect,
        this.borderBoxSize = Si([n.borderBoxSize]),
        this.contentBoxSize = Si([n.contentBoxSize]),
        this.devicePixelContentBoxSize = Si([n.devicePixelContentBoxSize])
    }
    return e
}(), bw = function(e) {
    if (vw(e))
        return 1 / 0;
    for (var t = 0, n = e.parentNode; n; )
        t += 1,
        n = n.parentNode;
    return t
}, CO = function() {
    var e = 1 / 0
      , t = [];
    xi.forEach(function(s) {
        if (s.activeTargets.length !== 0) {
            var a = [];
            s.activeTargets.forEach(function(c) {
                var u = new kO(c.target)
                  , f = bw(c.target);
                a.push(u),
                c.lastReportedSize = yw(c.target, c.observedBox),
                f < e && (e = f)
            }),
            t.push(function() {
                s.callback.call(s.observer, a, s.observer)
            }),
            s.activeTargets.splice(0, s.activeTargets.length)
        }
    });
    for (var n = 0, r = t; n < r.length; n++) {
        var i = r[n];
        i()
    }
    return e
}, X1 = function(e) {
    xi.forEach(function(n) {
        n.activeTargets.splice(0, n.activeTargets.length),
        n.skippedTargets.splice(0, n.skippedTargets.length),
        n.observationTargets.forEach(function(i) {
            i.isActive() && (bw(i.target) > e ? n.activeTargets.push(i) : n.skippedTargets.push(i))
        })
    })
}, TO = function() {
    var e = 0;
    for (X1(e); vO(); )
        e = CO(),
        X1(e);
    return gO() && yO(),
    e > 0
}, pp, xw = [], EO = function() {
    return xw.splice(0).forEach(function(e) {
        return e()
    })
}, PO = function(e) {
    if (!pp) {
        var t = 0
          , n = document.createTextNode("")
          , r = {
            characterData: !0
        };
        new MutationObserver(function() {
            return EO()
        }
        ).observe(n, r),
        pp = function() {
            n.textContent = "" + (t ? t-- : t++)
        }
    }
    xw.push(e),
    pp()
}, RO = function(e) {
    PO(function() {
        requestAnimationFrame(e)
    })
}, $c = 0, _O = function() {
    return !!$c
}, IO = 250, FO = {
    attributes: !0,
    characterData: !0,
    childList: !0,
    subtree: !0
}, Y1 = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"], G1 = function(e) {
    return e === void 0 && (e = 0),
    Date.now() + e
}, mp = !1, LO = function() {
    function e() {
        var t = this;
        this.stopped = !0,
        this.listener = function() {
            return t.schedule()
        }
    }
    return e.prototype.run = function(t) {
        var n = this;
        if (t === void 0 && (t = IO),
        !mp) {
            mp = !0;
            var r = G1(t);
            RO(function() {
                var i = !1;
                try {
                    i = TO()
                } finally {
                    if (mp = !1,
                    t = r - G1(),
                    !_O())
                        return;
                    i ? n.run(1e3) : t > 0 ? n.run(t) : n.start()
                }
            })
        }
    }
    ,
    e.prototype.schedule = function() {
        this.stop(),
        this.run()
    }
    ,
    e.prototype.observe = function() {
        var t = this
          , n = function() {
            return t.observer && t.observer.observe(document.body, FO)
        };
        document.body ? n() : Zs.addEventListener("DOMContentLoaded", n)
    }
    ,
    e.prototype.start = function() {
        var t = this;
        this.stopped && (this.stopped = !1,
        this.observer = new MutationObserver(this.listener),
        this.observe(),
        Y1.forEach(function(n) {
            return Zs.addEventListener(n, t.listener, !0)
        }))
    }
    ,
    e.prototype.stop = function() {
        var t = this;
        this.stopped || (this.observer && this.observer.disconnect(),
        Y1.forEach(function(n) {
            return Zs.removeEventListener(n, t.listener, !0)
        }),
        this.stopped = !0)
    }
    ,
    e
}(), Op = new LO, K1 = function(e) {
    !$c && e > 0 && Op.start(),
    $c += e,
    !$c && Op.stop()
}, MO = function(e) {
    return !qp(e) && !xO(e) && getComputedStyle(e).display === "inline"
}, OO = function() {
    function e(t, n) {
        this.target = t,
        this.observedBox = n || oa.CONTENT_BOX,
        this.lastReportedSize = {
            inlineSize: 0,
            blockSize: 0
        }
    }
    return e.prototype.isActive = function() {
        var t = yw(this.target, this.observedBox, !0);
        return MO(this.target) && (this.lastReportedSize = t),
        this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize
    }
    ,
    e
}(), DO = function() {
    function e(t, n) {
        this.activeTargets = [],
        this.skippedTargets = [],
        this.observationTargets = [],
        this.observer = t,
        this.callback = n
    }
    return e
}(), Mc = new WeakMap, q1 = function(e, t) {
    for (var n = 0; n < e.length; n += 1)
        if (e[n].target === t)
            return n;
    return -1
}, Oc = function() {
    function e() {}
    return e.connect = function(t, n) {
        var r = new DO(t,n);
        Mc.set(t, r)
    }
    ,
    e.observe = function(t, n, r) {
        var i = Mc.get(t)
          , o = i.observationTargets.length === 0;
        q1(i.observationTargets, n) < 0 && (o && xi.push(i),
        i.observationTargets.push(new OO(n,r && r.box)),
        K1(1),
        Op.schedule())
    }
    ,
    e.unobserve = function(t, n) {
        var r = Mc.get(t)
          , i = q1(r.observationTargets, n)
          , o = r.observationTargets.length === 1;
        i >= 0 && (o && xi.splice(xi.indexOf(r), 1),
        r.observationTargets.splice(i, 1),
        K1(-1))
    }
    ,
    e.disconnect = function(t) {
        var n = this
          , r = Mc.get(t);
        r.observationTargets.slice().forEach(function(i) {
            return n.unobserve(t, i.target)
        }),
        r.activeTargets.splice(0, r.activeTargets.length)
    }
    ,
    e
}(), AO = function() {
    function e(t) {
        if (arguments.length === 0)
            throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
        if (typeof t != "function")
            throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
        Oc.connect(this, t)
    }
    return e.prototype.observe = function(t, n) {
        if (arguments.length === 0)
            throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
        if (!j1(t))
            throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
        Oc.observe(this, t, n)
    }
    ,
    e.prototype.unobserve = function(t) {
        if (arguments.length === 0)
            throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
        if (!j1(t))
            throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
        Oc.unobserve(this, t)
    }
    ,
    e.prototype.disconnect = function() {
        Oc.disconnect(this)
    }
    ,
    e.toString = function() {
        return "function ResizeObserver () { [polyfill code] }"
    }
    ,
    e
}();
function lu() {
    let[e,t] = b.useState(0);
    return b.useCallback( () => t(n => n + 1), [])
}
var Gs, Ks, VO = class {
    constructor() {
        Xo(this, Gs, void 0),
        Xo(this, Ks, new WeakMap);
        let e = jt.ResizeObserver ?? AO;
        nf(this, Gs, new e(this.updateResizedElements.bind(this)))
    }
    updateResizedElements(e) {
        for (let t of e) {
            let n = Tt(this, Ks).get(t.target);
            n && n(t.contentRect)
        }
    }
    observeElementWithCallback(e, t) {
        Tt(this, Gs).observe(e),
        Tt(this, Ks).set(e, t)
    }
    unobserve(e) {
        Tt(this, Gs).unobserve(e),
        Tt(this, Ks).delete(e)
    }
}
;
Gs = new WeakMap;
Ks = new WeakMap;
var Dc = lr() ? new VO : void 0;
function BO(e) {
    let t = lu();
    $( () => {
        let n = e?.current;
        if (n)
            return Dc?.observeElementWithCallback(e.current, t),
            () => {
                Dc?.unobserve(n)
            }
    }
    , [e, t])
}
var zO = "data-framer-size-compatibility-wrapper";
function NO(e) {
    return [...e.firstElementChild && e.firstElementChild.hasAttribute(zO) ? e.firstElementChild.children : e.children].filter(Sw).map(ww)
}
function Sw(e) {
    return e instanceof HTMLBaseElement || e instanceof HTMLHeadElement || e instanceof HTMLLinkElement || e instanceof HTMLMetaElement || e instanceof HTMLScriptElement || e instanceof HTMLStyleElement || e instanceof HTMLTitleElement ? !1 : e instanceof HTMLElement || e instanceof SVGElement
}
function ww(e) {
    if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== "contents")
        return e;
    let t = [...e.children].find(Sw);
    return t ? ww(t) : e
}
function cu(e, t, n= () => [], r={}) {
    let {id: i, visible: o, _needsMeasure: s} = e
      , {skipHook: a=!1} = r
      , l = !!M(_o)
      , c = Fe.current() === "CANVAS";
    pw( () => {
        !c || l || a || t.current && i && o && s && Ye.queueMeasureRequest(Kp(i), t.current, n(t.current))
    }
    )
}
function $O(e) {
    let t = e.closest("[data-framer-component-container]");
    t && Ye.queueMeasureRequest(Kp(t.id), t, NO(t))
}
var Ti = Object.keys;
function sa(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
}
function Q1(e) {
    return sa(e, "equals") ? typeof e.equals == "function" : !1
}
function Qp(e, t) {
    return e === t ? !0 : e !== e && t !== t
}
function HO(e, t) {
    let n = e.length;
    if (n !== t.length)
        return !1;
    for (let r = n; r-- !== 0; )
        if (!Qp(e[r], t[r]))
            return !1;
    return !0
}
function jO(e, t) {
    let n = e.length;
    if (n !== t.length)
        return !1;
    for (let r = n; r-- !== 0; )
        if (!uu(e[r], t[r], !0))
            return !1;
    return !0
}
function WO(e, t) {
    if (e.size !== t.size)
        return !1;
    for (let[n,r] of e.entries())
        if (!Qp(r, t.get(n)))
            return !1;
    return !0
}
function UO(e, t) {
    if (e.size !== t.size)
        return !1;
    for (let[n,r] of e.entries())
        if (!uu(r, t.get(n), !0))
            return !1;
    return !0
}
function XO(e, t) {
    if (e.size !== t.size)
        return !1;
    for (let n of e.keys())
        if (!t.has(n))
            return !1;
    return !0
}
function YO(e, t) {
    let n = Ti(e);
    if (n.length !== Ti(t).length)
        return !1;
    for (let r of n) {
        if (!sa(t, r))
            return !1;
        if (!(r === "_owner" && sa(e, "$$typeof") && e.$$typeof) && !Qp(e[r], t[r]))
            return !1
    }
    return !0
}
function GO(e, t) {
    let n = Ti(e);
    if (n.length !== Ti(t).length)
        return !1;
    for (let r of n) {
        if (!sa(t, r))
            return !1;
        if (!(r === "_owner" && sa(e, "$$typeof") && e.$$typeof) && !uu(e[r], t[r], !0))
            return !1
    }
    return !0
}
function uu(e, t, n) {
    if (e === t)
        return !0;
    if (!e || !t)
        return e !== e && t !== t;
    let r = typeof e;
    if (r !== typeof t || r !== "object")
        return !1;
    let o = Array.isArray(e)
      , s = Array.isArray(t);
    if (o && s)
        return n ? jO(e, t) : HO(e, t);
    if (o !== s)
        return !1;
    let a = e instanceof Map
      , l = t instanceof Map;
    if (a && l)
        return n ? UO(e, t) : WO(e, t);
    if (a !== l)
        return !1;
    let c = e instanceof Set
      , u = t instanceof Set;
    if (c && u)
        return XO(e, t);
    if (c !== u)
        return !1;
    let f = e instanceof Date
      , d = t instanceof Date;
    if (f && d)
        return e.getTime() === t.getTime();
    if (f !== d)
        return !1;
    let m = e instanceof RegExp
      , g = t instanceof RegExp;
    return m && g ? e.toString() === t.toString() : m !== g ? !1 : Q1(e) && Q1(t) ? e.equals(t) : n ? GO(e, t) : YO(e, t)
}
function Ae(e, t, n=!0) {
    try {
        return uu(e, t, n)
    } catch (r) {
        if (r instanceof Error && /stack|recursion/iu.exec(r.message))
            return console.warn("Warning: isEqual does not handle circular references.", r.name, r.message),
            !1;
        throw r
    }
}
var kw = "0.000001px"
  , vp = ` translateZ(${kw})`
  , Cw = qM() || cw() || uw();
function KO(e) {
    e.willChange = "transform";
    let t = Fe.current() === "CANVAS";
    Cw && t && (e.translateZ = kw)
}
function Zp(e) {
    e.willChange = "transform",
    qO(e, !0)
}
function qO(e, t) {
    let n = Fe.current() === "CANVAS";
    if (!Cw || !n)
        return;
    let r = ke(e.transform) && e.transform || "";
    t ? r.includes(vp) || (e.transform = r + vp) : e.transform = r.replace(vp, "")
}
function Tw(e, t, n, r=!0) {
    if (!e)
        return;
    let i = De(e.style)
      , o = n || i[t]
      , s = () => {
        i[t] = o
    }
    ;
    i[t] = null,
    r ? Promise.resolve().then(s) : setTimeout(s, 0)
}
var Js = class extends me {
    constructor() {
        super(...arguments),
        P(this, "layerElement", null),
        P(this, "setLayerElement", e => {
            this.layerElement = e
        }
        )
    }
    static applyWillChange(e, t, n) {
        e.willChangeTransform && (n ? KO(t) : Zp(t))
    }
    shouldComponentUpdate(e, t) {
        return e._needsMeasure || this.state !== t || !Ae(this.props, e)
    }
    componentDidUpdate(e) {
        De(this.props).clip && De(this.props).radius === 0 && De(e).radius !== 0 && Tw(this.layerElement, "overflow", "hidden", !1)
    }
}
;
P(Js, "defaultProps", {});
function QO(e, t) {
    if (e.size < t)
        return;
    let r = Math.round(Math.random());
    for (let i of e.keys())
        (++r & 1) !== 1 && e.delete(i)
}
function ZO(e, t, n, r) {
    let i = t.get(n);
    if (i)
        return i;
    QO(t, e);
    let o = r(n);
    return t.set(n, o),
    o
}
var Ew = e => {
    let t = 0, n, r;
    if (e.length === 0)
        return t;
    for (n = 0; n < e.length; n++)
        r = e.charCodeAt(n),
        t = (t << 5) - t + r,
        t |= 0;
    return t
}
  , Jp = {
    hueRotate: (e, t) => V.toHslString(V.hueRotate(V(e), t)),
    setAlpha: (e, t) => V.toRgbString(V.alpha(V(e), t)),
    getAlpha: e => {
        let t = Up(e);
        return t ? t.a : 1
    }
    ,
    multiplyAlpha: (e, t) => V.toRgbString(V.multiplyAlpha(V(e), t)),
    toHex: e => V.toHexString(V(e)).toUpperCase(),
    toRgb: e => V.toRgb(V(e)),
    toRgbString: e => V.toRgbString(V(e)),
    toHSV: e => V.toHsv(V(e)),
    toHSL: e => V.toHsl(V(e)),
    toHslString: e => V.toHslString(V(e)),
    toHsvString: e => V.toHsvString(V(e)),
    hsvToHSLString: e => V.toHslString(V(Ic(e.h, e.s, e.v, e.a))),
    hsvToHex: e => V.toHexString(V(Ic(e.h, e.s, e.v, e.a))).toUpperCase(),
    hsvToRgbString: e => V.toRgbString(V(Ic(e.h, e.s, e.v, e.a))),
    hsvToString: e => Ic(e.h, e.s, e.v),
    rgbaToString: e => V.toRgbString(V(e)),
    rgbToHexString: e => V.toHexString(V(e)),
    hslToString: e => V.toHslString(V(e)),
    hslToRgbString: e => V.toRgbString(V(e)),
    toColorPickerSquare: e => V.toRgbString(V({
        h: e,
        s: 1,
        l: .5,
        a: 1
    })),
    isValid: e => V(e).isValid !== !1,
    equals: (e, t) => (typeof e == "string" && (e = V(e)),
    typeof t == "string" && (t = V(t)),
    V.equal(e, t)),
    toHexOrRgbaString: e => {
        let t = V(e);
        return t.a !== 1 ? V.toRgbString(t) : V.toHexString(t)
    }
}
  , JO = /var\(.+\)/
  , eD = new Map;
function tD(e, t) {
    let n = [e, t];
    return JO.test(e) ? e : ZO(1e3, eD, n, () => Jp.multiplyAlpha(e, t))
}
function Sa(e, t=1) {
    let n;
    return "stops"in e ? n = e.stops : n = [{
        value: e.start,
        position: 0
    }, {
        value: e.end,
        position: 1
    }],
    t === 1 ? n : n.map(r => ({
        ...r,
        value: tD(r.value, t)
    }))
}
function Pw(e, t) {
    let n = 0;
    return Sa(e, t).forEach(r => {
        n ^= Ew(r.value) ^ r.position
    }
    ),
    n
}
var nD = ["stops"];
function Rw(e) {
    return e && nD.every(t => t in e)
}
var rD = ["start", "end"];
function _w(e) {
    return e && rD.every(t => t in e)
}
var iD = ["angle", "alpha"]
  , aa = {
    isLinearGradient: e => e && iD.every(t => t in e) && (_w(e) || Rw(e)),
    hash: e => e.angle ^ Pw(e, e.alpha),
    toCSS: (e, t) => {
        let n = Sa(e, e.alpha)
          , r = t !== void 0 ? t : e.angle
          , i = n.map(o => `${o.value} ${o.position * 100}%`);
        return `linear-gradient(${r}deg, ${i.join(", ")})`
    }
}
  , oD = ["widthFactor", "heightFactor", "centerAnchorX", "centerAnchorY", "alpha"]
  , la = {
    isRadialGradient: e => e && oD.every(t => t in e) && (_w(e) || Rw(e)),
    hash: e => e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ Pw(e, e.alpha),
    toCSS: e => {
        let {alpha: t, widthFactor: n, heightFactor: r, centerAnchorX: i, centerAnchorY: o} = e
          , s = Sa(e, t)
          , a = s.map( (l, c) => {
            let u = s[c + 1]
              , f = l.position === 1 && u?.position === 1 ? l.position - 1e-4 : l.position;
            return `${l.value} ${f * 100}%`
        }
        );
        return `radial-gradient(${n * 100}% ${r * 100}% at ${i * 100}% ${o * 100}%, ${a.join(", ")})`
    }
};
function sD({background: e, backgroundColor: t}, n) {
    t ? typeof t == "string" || M1(t) ? n.backgroundColor = t : V.isColorObject(e) && (n.backgroundColor = e.initialValue || V.toRgbString(e)) : e && (e = Be.get(e, null),
    typeof e == "string" || M1(e) ? n.background = e : aa.isLinearGradient(e) ? n.background = aa.toCSS(e) : la.isRadialGradient(e) ? n.background = la.toCSS(e) : V.isColorObject(e) && (n.backgroundColor = e.initialValue || V.toRgbString(e)))
}
function te(e, t, n, r) {
    if (r === void 0 && (r = t),
    e[t] !== void 0) {
        n[r] = e[t];
        return
    }
}
function aD(e) {
    return e ? e.left !== void 0 && e.right !== void 0 : !1
}
function lD(e) {
    return e ? e.top !== void 0 && e.bottom !== void 0 : !1
}
function cD(e) {
    if (!e)
        return {};
    let t = {};
    return e.preserve3d === !0 ? t.transformStyle = "preserve-3d" : e.preserve3d === !1 && (t.transformStyle = "flat"),
    e.backfaceVisible === !0 ? t.backfaceVisibility = "visible" : e.backfaceVisible === !1 && (t.backfaceVisibility = "hidden"),
    t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility),
    e.perspective !== void 0 && (t.perspective = t.WebkitPerspective = e.perspective),
    e.__fromCanvasComponent || (e.center === !0 ? (t.left = "50%",
    t.top = "50%") : e.center === "x" ? t.left = "50%" : e.center === "y" && (t.top = "50%")),
    te(e, "size", t),
    te(e, "width", t),
    te(e, "height", t),
    te(e, "minWidth", t),
    te(e, "minHeight", t),
    te(e, "top", t),
    te(e, "right", t),
    te(e, "bottom", t),
    te(e, "left", t),
    te(e, "position", t),
    te(e, "overflow", t),
    te(e, "opacity", t),
    (!e._border || !e._border.borderWidth) && te(e, "border", t),
    te(e, "borderRadius", t),
    te(e, "radius", t, "borderRadius"),
    te(e, "color", t),
    te(e, "shadow", t, "boxShadow"),
    te(e, "x", t),
    te(e, "y", t),
    te(e, "z", t),
    te(e, "rotate", t),
    te(e, "rotateX", t),
    te(e, "rotateY", t),
    te(e, "rotateZ", t),
    te(e, "scale", t),
    te(e, "scaleX", t),
    te(e, "scaleY", t),
    te(e, "skew", t),
    te(e, "skewX", t),
    te(e, "skewY", t),
    te(e, "originX", t),
    te(e, "originY", t),
    te(e, "originZ", t),
    sD(e, t),
    t
}
function uD(e) {
    for (let t in e)
        if (t === "drag" || t.startsWith("while") || typeof De(e)[t] == "function" && t.startsWith("on") && !t.includes("Animation"))
            return !0;
    return !1
}
var Z1 = ["onClick", "onDoubleClick", "onMouse", "onMouseDown", "onMouseUp", "onTapDown", "onTap", "onTapUp", "onPointer", "onPointerDown", "onPointerUp", "onTouch", "onTouchDown", "onTouchUp"]
  , fD = new Set([...Z1, ...Z1.map(e => `${e}Capture`)]);
function dD(e) {
    if (e.drag)
        return "grab";
    for (let t in e)
        if (fD.has(t))
            return "pointer"
}
var gp = "overflow";
function hD(e) {
    return J1(e) ? !0 : e.style ? !!J1(e.style) : !1
}
function J1(e) {
    return gp in e && (e[gp] === "scroll" || e[gp] === "auto")
}
function Iw(e) {
    let {left: t, top: n, bottom: r, right: i, width: o, height: s, center: a, _constraints: l, size: c, widthType: u, heightType: f, positionFixed: d, positionAbsolute: m} = e
      , g = rt(e.minWidth)
      , y = rt(e.minHeight)
      , S = rt(e.maxWidth)
      , h = rt(e.maxHeight);
    return {
        top: rt(n),
        left: rt(t),
        bottom: rt(r),
        right: rt(i),
        width: rt(o),
        height: rt(s),
        size: rt(c),
        center: a,
        _constraints: l,
        widthType: u,
        heightType: f,
        positionFixed: d,
        positionAbsolute: m,
        minWidth: g,
        minHeight: y,
        maxWidth: S,
        maxHeight: h
    }
}
var eS = {
    x: 0,
    y: 0,
    width: 200,
    height: 200
};
function pD(e) {
    b.useInsertionEffect( () => {
        ba()
    }
    , []);
    let t = !!M(_o)
      , {style: n, _initialStyle: r, __fromCanvasComponent: i, size: o} = e
      , s = Iw(e)
      , a = zL(s)
      , l = {
        display: "block",
        flex: n?.flex ?? "0 0 auto",
        userSelect: Fe.current() !== "PREVIEW" ? "none" : void 0
    };
    e.__fromCanvasComponent || (l.backgroundColor = e.background === void 0 ? "rgba(0, 170, 255, 0.3)" : void 0);
    let c = !uD(e) && !e.__fromCanvasComponent && !hD(e)
      , u = e.style ? !("pointerEvents"in e.style) : !0;
    c && u && (l.pointerEvents = "none");
    let d = b.Children.count(e.children) > 0 && b.Children.toArray(e.children).every(h => typeof h == "string" || typeof h == "number") && {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    }
      , m = cD(e);
    o === void 0 && !i && (aD(m) || (l.width = eS.width),
    lD(m) || (l.height = eS.height)),
    s.minWidth !== void 0 && (l.minWidth = s.minWidth),
    s.minHeight !== void 0 && (l.minHeight = s.minHeight);
    let g = {};
    ga(s) && a && !Fw(e) && (g = {
        left: a.x,
        top: a.y,
        width: a.width,
        height: a.height,
        right: void 0,
        bottom: void 0
    }),
    Object.assign(l, d, r, m, g, n),
    Object.assign(l, {
        overflowX: l.overflowX ?? l.overflow,
        overflowY: l.overflowY ?? l.overflow,
        overflow: void 0
    }),
    Js.applyWillChange(e, l, !0);
    let y = l;
    l.transform || (y = {
        x: 0,
        y: 0,
        ...l
    });
    let S = Fe.current() === "CANVAS";
    return e.positionSticky ? (!S || t) && (y.position = "sticky",
    y.willChange = "transform",
    y.zIndex = 1,
    y.top = e.positionStickyTop,
    y.right = e.positionStickyRight,
    y.bottom = e.positionStickyBottom,
    y.left = e.positionStickyLeft) : S && (e.positionFixed || e.positionAbsolute) && (y.position = "absolute"),
    "rotate"in y && y.rotate === void 0 && delete y.rotate,
    [y, a]
}
var mD = new Set(["width", "height", "opacity", "overflow", "radius", "background", "color", "x", "y", "z", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "skew", "skewX", "skewY", "originX", "originY", "originZ"]);
function vD(e) {
    let t = {};
    for (let n in e)
        (Oi(n) || UM(n)) && !mD.has(n) ? t[n] = De(e)[n] : (n === "positionTransition" || n === "layoutTransition") && (t.layout = !0,
        typeof De(e)[n] != "boolean" && !e.transition && (t.transition = De(e)[n]));
    return t
}
function gD(e) {
    return "data-framer-name"in e
}
var yD = je(function(t, n) {
    let {name: r, center: i, border: o, _border: s, __portal: a} = t
      , {props: l, children: c} = mO(t)
      , u = vD(l)
      , f = xa(t)
      , d = dD(t)
      , m = D(null)
      , g = n ?? m
      , y = {
        "data-framer-component-type": t.componentType ?? "Frame",
        "data-framer-cursor": d,
        "data-framer-highlight": d === "pointer" ? !0 : void 0,
        "data-layoutid": f,
        "data-framer-offset-parent-id": De(t)["data-framer-offset-parent-id"]
    };
    !gD(t) && r && (De(y)["data-framer-name"] = r);
    let[S,h] = pD(l)
      , p = Iw(l)
      , v = Fw(p);
    i && !(h && !v && ga(p)) ? (u.transformTemplate || (u.transformTemplate = au(i)),
    Object.assign(y, hw(i))) : u.transformTemplate || (u.transformTemplate = void 0),
    cu(t, g);
    let x = fO(t)
      , C = !!M(_o)
      , w = bD(l, p, h, C)
      , T = BL(Q(Ce, {
        children: [x ? k(dw, {
            alt: t.alt ?? "",
            image: x,
            containerSize: h ?? void 0,
            nodeId: t.id && Kp(t.id),
            layoutId: f
        }) : null, c, k(hO, {
            ...s,
            border: o,
            layoutId: f
        })]
    }), w)
      , E = su(t.as)
      , {size: _, radius: R, shadow: B} = S;
    return _ !== void 0 && (delete S.size,
    S.height === void 0 && (S.height = _),
    S.width === void 0 && (S.width = _)),
    R !== void 0 && (delete S.radius,
    S.borderRadius = R),
    B !== void 0 && (delete S.shadow,
    S.boxShadow = B),
    Q(E, {
        ...y,
        ...u,
        layoutId: f,
        style: S,
        ref: g,
        children: [T, a]
    })
})
  , Hc = je(function(t, n) {
    let {visible: r=!0} = t;
    return r ? k(yD, {
        ...t,
        ref: n
    }) : null
});
function bD(e, t, n, r) {
    if (r)
        return n ? {
            width: n.width,
            height: n.height
        } : 1;
    let {_usesDOMRect: i} = e
      , {widthType: o=0, heightType: s=0, width: a, height: l} = t;
    return n && !i ? n : o === 0 && s === 0 && typeof a == "number" && typeof l == "number" ? {
        width: a,
        height: l
    } : i || e.positionFixed || e.positionAbsolute ? 2 : 0
}
function Fw({width: e, height: t}) {
    return e === "auto" || e === "min-content" || t === "auto" || t === "min-content"
}
var em = "__LAYOUT_TREE_ROOT"
  , Lw = b.createContext({
    schedulePromoteTree: () => {}
    ,
    scheduleProjectionDidUpdate: () => {}
    ,
    initLead: () => {}
})
  , xD = class extends me {
    constructor() {
        super(...arguments),
        P(this, "shouldAnimate", !1),
        P(this, "transition"),
        P(this, "lead"),
        P(this, "follow"),
        P(this, "scheduledPromotion", !1),
        P(this, "scheduledDidUpdate", !1),
        P(this, "scheduleProjectionDidUpdate", () => {
            this.scheduledDidUpdate = !0
        }
        ),
        P(this, "schedulePromoteTree", (e, t, n) => {
            this.follow = this.lead,
            this.shouldAnimate = n,
            this.lead = e,
            this.transition = t,
            this.scheduledPromotion = !0
        }
        ),
        P(this, "initLead", (e, t) => {
            this.follow = this.lead,
            this.lead = e,
            this.follow && t && (this.follow.layoutMaybeMutated = !0)
        }
        ),
        P(this, "sharedLayoutContext", {
            schedulePromoteTree: this.schedulePromoteTree,
            scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate,
            initLead: this.initLead
        })
    }
    getSnapshotBeforeUpdate() {
        var e;
        if (!this.scheduledPromotion || !this.lead || !this.follow)
            return null;
        let t = !!((e = this.lead) != null && e.layoutMaybeMutated) && !this.shouldAnimate;
        return this.lead.projectionNodes.forEach(n => {
            var r;
            n?.promote({
                needsReset: t,
                transition: this.shouldAnimate ? this.transition : void 0,
                preserveFollowOpacity: n.options.layoutId === em && !((r = this.follow) != null && r.isExiting)
            })
        }
        ),
        this.shouldAnimate ? this.follow.layoutMaybeMutated = !0 : this.scheduleProjectionDidUpdate(),
        this.lead.layoutMaybeMutated = !1,
        this.transition = void 0,
        this.scheduledPromotion = !1,
        null
    }
    componentDidUpdate() {
        var e, t;
        if (!this.lead)
            return null;
        this.scheduledDidUpdate && ((t = (e = this.lead.rootProjectionNode) == null ? void 0 : e.root) == null || t.didUpdate(),
        this.scheduledDidUpdate = !1)
    }
    render() {
        return k(Lw.Provider, {
            value: this.sharedLayoutContext,
            children: this.props.children
        })
    }
}
  , SD = {
    width: "100%",
    height: "100%",
    backgroundColor: "none"
};
function wD(e) {
    return k(ft.div, {
        layoutId: em,
        style: SD,
        children: e.children
    })
}
var $r, qs, kD = class {
    constructor(e) {
        Xo(this, $r, void 0),
        Xo(this, qs, new WeakMap),
        document && nf(this, $r, new IntersectionObserver(this.resizeObserverCallback.bind(this),e))
    }
    resizeObserverCallback(e, t) {
        for (let n of e) {
            let r = Tt(this, qs).get(n.target);
            r && r([n], t)
        }
    }
    observeElementWithCallback(e, t) {
        Tt(this, $r) && (Tt(this, $r).observe(e),
        Tt(this, qs).set(e, t))
    }
    unobserve(e) {
        Tt(this, $r) && (Tt(this, $r).unobserve(e),
        Tt(this, qs).delete(e))
    }
    get root() {
        var e;
        return (e = Tt(this, $r)) == null ? void 0 : e.root
    }
}
;
$r = new WeakMap;
qs = new WeakMap;
var CD = b.createContext(new Map);
function TD(e, t, n) {
    if (typeof IntersectionObserver > "u")
        return;
    let r = $n( () => `${n.rootMargin}`)
      , i = b.useContext(CD)
      , {enabled: o} = n;
    b.useEffect( () => {
        var s;
        let a = e.current;
        if (!o || !a)
            return;
        let l = i.get(r);
        if (!l || l.root !== ((s = n.root) == null ? void 0 : s.current)) {
            let {root: c, ...u} = n;
            l = new kD({
                ...u,
                root: c?.current
            }),
            i.set(r, l)
        }
        return l.observeElementWithCallback(a, t),
        () => l?.unobserve(a)
    }
    , [o])
}
var ED = new Array(100).fill(void 0).map( (e, t) => t * .01)
  , PD = b.createContext(null);
function RD(e, t, n) {
    let r = b.useRef({
        isInView: !1,
        hasAnimatedOnce: !1
    })
      , {enabled: i, animateOnce: o, threshold: s, rootMargin: a="0px 0px 0px 0px"} = n
      , l = b.useCallback( ([c]) => {
        if (!c)
            return;
        let {isInView: u, hasAnimatedOnce: f} = r.current
          , d = ID(c, s?.y ?? 0);
        if (d && !u) {
            if (o && f)
                return;
            r.current.hasAnimatedOnce = !0,
            r.current.isInView = !0,
            t(!0);
            return
        }
        if (!d && u) {
            if (r.current.isInView = !1,
            o)
                return;
            t(!1);
            return
        }
    }
    , [o, s?.y, t]);
    TD(e, l, {
        threshold: ED,
        rootMargin: a,
        enabled: i ?? !0
    })
}
function _D(e, t) {
    return t.height === 0 ? 0 : e.height / Math.min(t.height, jt.innerHeight)
}
function ID({boundingClientRect: e, intersectionRect: t, isIntersecting: n}, r) {
    return e.height === 0 ? n : n && _D(t, e) >= r
}
var r6 = on(ru(), 1);
var o6 = on(ru(), 1);
var l6 = b.createContext({
    dragging: !1
});
var FD = {
    onMouseEnter: "mouseenter",
    onMouseLeave: "mouseleave"
}
  , u6 = Object.keys(FD);
var tS = (e, t) => Object.prototype.hasOwnProperty.call(e, t)
  , ir = Symbol("private")
  , yp = ( () => {
    function e(t={}, n=!1, r=!0) {
        let i = {
            [ir]: {
                makeAnimatables: n,
                observeAnimatables: r,
                observers: new qS,
                reset() {
                    for (let s in o)
                        if (tS(o, s)) {
                            let a = tS(t, s) ? De(t)[s] : void 0;
                            a !== void 0 ? o[s] = a : delete o[s]
                        }
                },
                transactions: new Set
            }
        }
          , o = new Proxy(i,MD);
        return Object.assign(o, t),
        o
    }
    return e.resetObject = t => t[ir].reset(),
    e.addObserver = (t, n) => t[ir].observers.add(n),
    e
}
)()
  , LD = class {
    constructor() {
        P(this, "set", (e, t, n, r) => {
            if (t === ir)
                return !1;
            let i = e[ir], o, s;
            if (pn(n) ? (o = n,
            s = o.get()) : s = n,
            i.makeAnimatables && typeof n != "function" && typeof n != "object" && !o && (o = Be(n)),
            i.observeAnimatables && o) {
                let u = i.transactions;
                o.onUpdate({
                    update: (f, d) => {
                        d && u.add(d),
                        i.observers.notify({
                            value: r
                        }, d)
                    }
                    ,
                    finish: f => {
                        u.delete(f) && i.observers.finishTransaction(f)
                    }
                })
            }
            let a = !1
              , l = !0
              , c = De(e)[t];
            if (c !== void 0) {
                pn(c) ? (l = c.get() !== s,
                c.set(s)) : (l = c !== s,
                De(e)[t] = s);
                let u = s !== null && typeof s == "object";
                (Array.isArray(s) || u) && (l = !0),
                a = !0
            } else
                o && (n = o),
                a = Reflect.set(e, t, n);
            return l && i.observers.notify({
                value: r
            }),
            a
        }
        ),
        P(this, "get", (e, t, n) => {
            if (t === ir)
                return De(e)[t];
            let r = Reflect.get(e, t, n);
            return typeof r == "function" ? r.bind(n) : r
        }
        )
    }
    deleteProperty(e, t) {
        let n = Reflect.deleteProperty(e, t);
        return e[ir].observers.notify({
            value: e
        }),
        n
    }
    ownKeys(e) {
        let t = Reflect.ownKeys(e)
          , n = t.indexOf(ir);
        return n !== -1 && t.splice(n, 1),
        t
    }
    getOwnPropertyDescriptor(e, t) {
        if (t !== ir)
            return Reflect.getOwnPropertyDescriptor(e, t)
    }
}
  , MD = new LD;
var OD = "opacity";
function DD(e) {
    return OD in e
}
function AD(e, t) {
    if (!DD(e))
        return;
    let n = Be.getNumber(e.opacity);
    n !== 1 && (t.opacity = n)
}
function VD(e) {
    let t = [];
    if (e && e.length) {
        let n = e.map(r => `drop-shadow(${r.x}px ${r.y}px ${r.blur}px ${r.color})`);
        t.push(...n)
    }
    return t
}
function Mw(e, t) {
    if (!e.shadows || e.shadows.length === 0)
        return;
    let n = e.shadows.map(r => `${r.x}px ${r.y}px ${r.blur}px ${r.color}`).join(", ");
    n && (t.textShadow = n)
}
function BD(e, t) {
    let n = [];
    W(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    W(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    W(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    W(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    W(e.invert) && n.push(`invert(${e.invert / 100})`),
    W(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    W(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    W(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...VD(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(" "))
}
function zD(e, t) {
    W(e.backgroundBlur) && (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`)
}
function tm(e, t) {
    zD(e, t),
    BD(e, t)
}
var {getNumber: h6} = Be;
var ND = class extends me {
    constructor() {
        super(...arguments),
        P(this, "layoutMaybeMutated"),
        P(this, "projectionNodes", new Map),
        P(this, "rootProjectionNode"),
        P(this, "isExiting"),
        P(this, "shouldPreserveFollowOpacity", e => e.options.layoutId === em && !this.props.isExiting),
        P(this, "switchLayoutGroupContext", {
            register: e => this.addChild(e),
            deregister: e => this.removeChild(e),
            transition: this.props.isLead !== void 0 && this.props.animatesLayout ? this.props.transition : void 0,
            shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity
        })
    }
    componentDidMount() {
        this.props.isLead && this.props.sharedLayoutContext.initLead(this, !!this.props.animatesLayout)
    }
    shouldComponentUpdate(e) {
        let {isLead: t, isExiting: n, isOverlayed: r, animatesLayout: i, transition: o, sharedLayoutContext: s} = e;
        if (this.isExiting = n,
        t === void 0)
            return !0;
        let a = !this.props.isLead && !!t
          , l = this.props.isExiting && !n
          , c = a || l
          , u = !!this.props.isLead && !t
          , f = this.props.isOverlayed !== r;
        return (c || u) && this.projectionNodes.forEach(d => d?.willUpdate()),
        c ? s.schedulePromoteTree(this, o, !!i) : f && s.scheduleProjectionDidUpdate(),
        !!c && !!i
    }
    addChild(e) {
        let t = e.options.layoutId;
        t && (this.projectionNodes.set(t, e),
        this.setRootChild(e))
    }
    setRootChild(e) {
        if (!this.rootProjectionNode)
            return this.rootProjectionNode = e;
        this.rootProjectionNode = this.rootProjectionNode.depth < e.depth ? this.rootProjectionNode : e
    }
    removeChild(e) {
        let t = e.options.layoutId;
        t && this.projectionNodes.delete(t)
    }
    render() {
        return k(Ya.Provider, {
            value: this.switchLayoutGroupContext,
            children: this.props.children
        })
    }
}
  , $D = e => {
    let t = b.useContext(Lw);
    return k(ND, {
        ...e,
        sharedLayoutContext: t
    })
}
  , HD = b.createContext(!0);
function jD() {
    return new Map
}
function WD() {
    return $n(jD)
}
var UD = ye({
    register: () => {}
    ,
    deregister: () => {}
})
  , XD = ({isCurrent: e, isOverlayed: t, children: n}) => {
    let r = WD()
      , i = le(a => {
        if (r.has(a)) {
            console.warn("NavigationTargetWrapper: already registered");
            return
        }
        r.set(a, void 0)
    }
    , [r])
      , o = le(a => {
        let l = r.get(a);
        l?.(),
        r.delete(a)
    }
    , [r])
      , s = D({
        register: i,
        deregister: o
    }).current;
    return $( () => (r.forEach( (a, l) => {
        let c = l(e, t);
        r.set(l, ia(c) ? c : void 0)
    }
    ),
    () => {
        r.forEach( (a, l) => {
            a && (a(),
            r.set(l, void 0))
        }
        )
    }
    ), [e, t, r]),
    k(UD.Provider, {
        value: s,
        children: n
    })
}
;
var bp = b.memo(function({isLayeredContainer: t, isCurrent: n, isPrevious: r, isOverlayed: i=!1, visible: o, transitionProps: s, children: a, backdropColor: l, onTapBackdrop: c, backfaceVisible: u, exitBackfaceVisible: f, animation: d, exitAnimation: m, instant: g, initialProps: y, exitProps: S, position: h={
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
}, withMagicMotion: p, index: v, areMagicMotionLayersPresent: x, id: C, isInitial: w}) {
    let T = jy()
      , E = M(Ai)
      , {persistLayoutIdCache: _} = M(To)
      , R = D({
        wasCurrent: void 0,
        wasPrevious: !1,
        wasBeingRemoved: !1,
        wasReset: !0,
        origins: nS({}, y, s)
    })
      , B = D(null)
      , A = E !== null && !E.isPresent;
    n && R.current.wasCurrent === void 0 && _(),
    $( () => {
        if (t || !T)
            return;
        if (A) {
            R.current = {
                ...R.current,
                wasBeingRemoved: A
            };
            return
        }
        let {wasPrevious: K, wasCurrent: X} = R.current
          , nt = n && !X || !A && R.current.wasBeingRemoved && n
          , ae = r && !K
          , ze = nS(R.current.origins, y, s)
          , z = R.current.wasReset;
        nt || ae ? (T.stop(),
        T.start({
            zIndex: v,
            ...ze,
            ...s
        }),
        z = !1) : z === !1 && (T.stop(),
        T.set({
            zIndex: v,
            ...bi,
            opacity: 0
        }),
        z = !0),
        R.current = {
            wasCurrent: !!n,
            wasPrevious: !!r,
            wasBeingRemoved: !1,
            wasReset: z,
            origins: ze
        }
    }
    , [n, r, A]);
    let ne = g ? {
        type: !1
    } : "velocity"in d ? {
        ...d,
        velocity: 0
    } : d
      , q = g ? {
        type: !1
    } : m || d
      , H = {
        ...h
    };
    (H.left === void 0 || H.right === void 0) && (H.width = "auto"),
    (H.top === void 0 || H.bottom === void 0) && (H.height = "auto");
    let ie = (rS(s) || rS(y)) && (t || n || r) ? 1200 : void 0
      , G = {
        ...bi,
        ...R.current.origins
    }
      , Y = t ? {
        initial: {
            ...G,
            ...y
        },
        animate: {
            ...G,
            ...s,
            transition: ne
        },
        exit: {
            ...G,
            ...S,
            transition: d
        }
    } : {
        animate: T,
        exit: {
            ...G,
            ...S,
            transition: q
        }
    }
      , oe = !(A || x === !1)
      , Le = !!n && oe;
    return Q(Hc, {
        "data-framer-component-type": "NavigationContainerWrapper",
        width: "100%",
        height: "100%",
        style: {
            position: "absolute",
            transformStyle: "flat",
            backgroundColor: "transparent",
            overflow: "hidden",
            zIndex: t || A || n && p ? v : void 0,
            pointerEvents: void 0,
            visibility: o ? "visible" : "hidden",
            perspective: ie
        },
        children: [t && k(Hc, {
            width: "100%",
            height: "100%",
            "data-framer-component-type": "NavigationContainerBackdrop",
            transition: d,
            initial: {
                opacity: g && o ? 1 : 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            backgroundColor: l || "transparent",
            onTap: A ? void 0 : c
        }), k(Hc, {
            ...H,
            ...Y,
            transition: {
                default: ne,
                originX: {
                    type: !1
                },
                originY: {
                    type: !1
                },
                originZ: {
                    type: !1
                }
            },
            backgroundColor: "transparent",
            backfaceVisible: A ? f : u,
            "data-framer-component-type": "NavigationContainer",
            "data-framer-is-current-navigation-target": !!n,
            style: {
                pointerEvents: void 0,
                opacity: n && w || t || n && p ? 1 : 0
            },
            "data-is-present": oe ? void 0 : !1,
            ref: B,
            children: k(PD.Provider, {
                value: B,
                children: k(HD.Provider, {
                    value: Le,
                    children: k(XD, {
                        isCurrent: Le,
                        isOverlayed: i,
                        children: k($D, {
                            isLead: n,
                            animatesLayout: !!p,
                            transition: ne,
                            isExiting: !oe,
                            isOverlayed: i,
                            id: C,
                            children: a
                        })
                    })
                })
            })
        })]
    })
}, YD);
function YD(e, t) {
    return !(t.isCurrent === void 0 || e.isCurrent !== t.isCurrent || e.isPrevious !== t.isPrevious || t.isCurrent && e.isOverlayed !== t.isOverlayed)
}
function nS(e, t, n) {
    let r = {
        ...e
    };
    return t && (W(t.originX) && (r.originX = t.originX),
    W(t.originY) && (r.originY = t.originY),
    W(t.originZ) && (r.originZ = t.originZ)),
    n && (W(n.originX) && (r.originX = n.originX),
    W(n.originY) && (r.originY = n.originY),
    W(n.originZ) && (r.originZ = n.originZ)),
    r
}
function rS(e) {
    var t, n, r;
    if (!e || !("rotateX"in e || "rotateY"in e || "z"in e))
        return !1;
    let o = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0
      , s = ((t = e?.transition) == null ? void 0 : t.rotateX.from) !== 0 || ((n = e?.transition) == null ? void 0 : n.rotateY.from) !== 0 || ((r = e?.transition) == null ? void 0 : r.z.from) !== 0;
    return o || s
}
var bi = {
    x: 0,
    y: 0,
    z: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    scale: 1,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1,
    skew: 0,
    skewX: 0,
    skewY: 0,
    originX: .5,
    originY: .5,
    originZ: 0,
    opacity: 1
}
  , GD = class {
    constructor() {
        P(this, "warning", () => {
            na("The Navigator API is only available inside of Framer: https://www.framer.com/")
        }
        ),
        P(this, "goBack", () => this.warning()),
        P(this, "instant", () => this.warning()),
        P(this, "fade", () => this.warning()),
        P(this, "push", () => this.warning()),
        P(this, "modal", () => this.warning()),
        P(this, "overlay", () => this.warning()),
        P(this, "flip", () => this.warning()),
        P(this, "customTransition", () => this.warning()),
        P(this, "magicMotion", () => this.warning())
    }
}
  , KD = new GD
  , Ow = ye(KD)
  , Xe = {
    Fade: {
        exit: {
            opacity: 0
        },
        enter: {
            opacity: 0
        }
    },
    PushLeft: {
        exit: {
            x: "-30%"
        },
        enter: {
            x: "100%"
        }
    },
    PushRight: {
        exit: {
            x: "30%"
        },
        enter: {
            x: "-100%"
        }
    },
    PushUp: {
        exit: {
            y: "-30%"
        },
        enter: {
            y: "100%"
        }
    },
    PushDown: {
        exit: {
            y: "30%"
        },
        enter: {
            y: "-100%"
        }
    },
    Instant: {
        animation: {
            type: !1
        },
        enter: {
            opacity: 0
        }
    },
    Modal: {
        overCurrentContext: !0,
        goBackOnTapOutside: !0,
        position: {
            center: !0
        },
        enter: {
            opacity: 0,
            scale: 1.2
        }
    },
    OverlayLeft: {
        overCurrentContext: !0,
        goBackOnTapOutside: !0,
        position: {
            right: 0,
            top: 0,
            bottom: 0
        },
        enter: {
            x: "100%"
        }
    },
    OverlayRight: {
        overCurrentContext: !0,
        goBackOnTapOutside: !0,
        position: {
            left: 0,
            top: 0,
            bottom: 0
        },
        enter: {
            x: "-100%"
        }
    },
    OverlayUp: {
        overCurrentContext: !0,
        goBackOnTapOutside: !0,
        position: {
            bottom: 0,
            left: 0,
            right: 0
        },
        enter: {
            y: "100%"
        }
    },
    OverlayDown: {
        overCurrentContext: !0,
        goBackOnTapOutside: !0,
        position: {
            top: 0,
            left: 0,
            right: 0
        },
        enter: {
            y: "-100%"
        }
    },
    FlipLeft: {
        backfaceVisible: !1,
        exit: {
            rotateY: -180
        },
        enter: {
            rotateY: 180
        }
    },
    FlipRight: {
        backfaceVisible: !1,
        exit: {
            rotateY: 180
        },
        enter: {
            rotateY: -180
        }
    },
    FlipUp: {
        backfaceVisible: !1,
        exit: {
            rotateX: 180
        },
        enter: {
            rotateX: -180
        }
    },
    FlipDown: {
        backfaceVisible: !1,
        exit: {
            rotateX: -180
        },
        enter: {
            rotateX: 180
        }
    },
    MagicMotion: {
        withMagicMotion: !0
    }
};
function qD(e) {
    switch (e && e.appearsFrom ? e.appearsFrom : "right") {
    case "right":
        return Xe.PushLeft;
    case "left":
        return Xe.PushRight;
    case "bottom":
        return Xe.PushUp;
    case "top":
        return Xe.PushDown
    }
}
function QD(e) {
    switch (e && e.appearsFrom ? e.appearsFrom : "bottom") {
    case "right":
        return Xe.OverlayLeft;
    case "left":
        return Xe.OverlayRight;
    case "bottom":
        return Xe.OverlayUp;
    case "top":
        return Xe.OverlayDown
    }
}
function ZD(e) {
    switch (e && e.appearsFrom ? e.appearsFrom : "bottom") {
    case "right":
        return Xe.FlipLeft;
    case "left":
        return Xe.FlipRight;
    case "bottom":
        return Xe.FlipUp;
    case "top":
        return Xe.FlipDown
    }
}
var JD = () => ({
    current: -1,
    previous: -1,
    currentOverlay: -1,
    previousOverlay: -1,
    visualIndex: 0,
    overlayItemId: 0,
    historyItemId: 0,
    history: [],
    overlayStack: [],
    containers: {},
    containerIndex: {},
    containerVisualIndex: {},
    containerIsRemoved: {},
    transitionForContainer: {},
    previousTransition: null
});
function iS(e, t) {
    switch (t.type) {
    case "addOverlay":
        return tA(e, t.transition, t.component);
    case "removeOverlay":
        return nA(e);
    case "add":
        return Dw(e, t.key, t.transition, t.component);
    case "remove":
        return Aw(e);
    case "update":
        return eA(e, t.key, t.component);
    case "back":
        return rA(e);
    case "forward":
        return iA(e);
    default:
        return
    }
}
function eA(e, t, n) {
    return {
        ...e,
        containers: {
            ...e.containers,
            [t]: n
        }
    }
}
function tA(e, t, n) {
    let r = e.overlayStack[e.currentOverlay];
    if (r && r.component === n)
        return;
    let i = e.overlayItemId + 1
      , o = [...e.overlayStack, {
        key: `stack-${i}`,
        component: n,
        transition: t
    }];
    return {
        ...e,
        overlayStack: o,
        overlayItemId: i,
        currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, o.length - 1)),
        previousOverlay: e.currentOverlay
    }
}
function nA(e) {
    return {
        ...e,
        overlayStack: [],
        currentOverlay: -1,
        previousOverlay: e.currentOverlay
    }
}
function Dw(e, t, n, r) {
    e.containers[t] || (e.containers[t] = r),
    e.history = e.history.slice(0, e.current + 1),
    e.visualIndex = Math.max(e.history.length, 0);
    let i = e.history[e.history.length - 1]
      , o = i && i.key === t;
    if (e.overlayStack = [],
    o && e.currentOverlay > -1)
        return {
            ...e,
            currentOverlay: -1,
            previousOverlay: e.currentOverlay
        };
    if (o)
        return;
    let s = e.containerVisualIndex[t]
      , a = e.containerIsRemoved[t]
      , l = i?.key && n.withMagicMotion ? lA(t, s, a, e.history) : !0;
    e.history.push({
        key: t,
        transition: n,
        visualIndex: l ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t]
    });
    let c = e.current + 1
      , u = e.current;
    for (let g in e.containerIndex)
        e.containerIndex[g] === c && (e.containerIndex[g] = aA(g, e.history));
    e.containerIndex[t] = c;
    let {containerVisualIndex: f, containerIsRemoved: d} = oA(e, t, l)
      , m = Vw(c, u, e.history, e.containerIndex, e.transitionForContainer);
    return {
        ...e,
        current: c,
        previous: u,
        containerVisualIndex: f,
        containerIsRemoved: d,
        transitionForContainer: m,
        previousTransition: null,
        currentOverlay: -1,
        historyItemId: e.historyItemId + 1,
        previousOverlay: e.currentOverlay
    }
}
function rA(e) {
    let t = {
        ...e.containers
    }
      , n = Aw(e);
    if (n)
        return n.containers = t,
        n
}
function iA(e) {
    let t = e.history[e.current + 1];
    if (!t)
        return;
    let {key: n, transition: r, component: i} = t
      , o = [...e.history]
      , s = Dw(e, n, r, i);
    if (s)
        return s.history = o,
        s
}
function Aw(e) {
    let t = [...e.history.slice(0, e.current + 1)];
    if (t.length === 1)
        return;
    let n = t.pop();
    if (!n)
        return;
    let r = t[t.length - 1];
    re(r, "The navigation history must have at least one component"),
    e.containerIndex[r.key] = t.length - 1,
    t.every(d => d.key !== n.key) && delete e.containers[n.key];
    let o = e.current - 1
      , s = e.current
      , {containerIsRemoved: a, containerVisualIndex: l, previousTransition: c, visualIndex: u} = sA(e, r, n)
      , f = Vw(o, s, e.history, e.containerIndex, e.transitionForContainer);
    return {
        ...e,
        current: o,
        previous: s,
        containerIsRemoved: a,
        containerVisualIndex: l,
        previousTransition: c,
        visualIndex: u,
        transitionForContainer: f
    }
}
function oA(e, t, n) {
    let r = {
        containerVisualIndex: {
            ...e.containerVisualIndex
        },
        containerIsRemoved: {
            ...e.containerIsRemoved
        }
    };
    if (n)
        r.containerVisualIndex[t] = e.history.length - 1,
        r.containerIsRemoved[t] = !1;
    else {
        let i = e.containerVisualIndex[t];
        for (let[o,s] of Object.entries(e.containerVisualIndex))
            i !== void 0 && s > i && (r.containerIsRemoved[o] = !0)
    }
    return r
}
function sA(e, t, n) {
    let r = [t.key, n.key]
      , i = e.history[e.history.length - 2]
      , o = e.previousTransition === null ? null : {
        ...e.previousTransition
    }
      , s = {
        containerIsRemoved: {
            ...e.containerIsRemoved
        },
        containerVisualIndex: {
            ...e.containerVisualIndex
        },
        previousTransition: o,
        visualIndex: e.visualIndex
    };
    i && r.push(i.key);
    let a = e.containerVisualIndex[t.key]
      , l = e.containerVisualIndex[n.key]
      , c = a !== void 0 && l !== void 0 && a <= l || t.visualIndex !== void 0 && t.visualIndex < e.history.length - 1
      , u = t.visualIndex;
    return c ? (s.containerIsRemoved[n.key] = !0,
    s.containerVisualIndex[t.key] = u !== void 0 ? u : e.history.length - 1) : (s.visualIndex = e.visualIndex + 1,
    s.containerVisualIndex[t.key] = e.visualIndex + 1),
    n.transition.withMagicMotion && (s.previousTransition = n.transition || null),
    e.containerIsRemoved[t.key] = !1,
    s
}
function aA(e, t) {
    var n;
    for (let r = t.length; r > t.length; r--)
        if (((n = t[r]) == null ? void 0 : n.key) === e)
            return r;
    return -1
}
function Vw(e, t, n, r, i) {
    let o = {
        ...i
    };
    for (let[s,a] of Object.entries(r)) {
        let l = cA(a, {
            current: e,
            previous: t,
            history: n
        });
        l && (o[s] = l)
    }
    return o
}
function lA(e, t, n, r) {
    return n || t === void 0 ? !0 : t === 0 ? !1 : r.slice(t, r.length).findIndex(s => s.key === e) > -1 ? !0 : !(r.slice(0, t - 1).findIndex(s => s.key === e) > -1)
}
function cA(e, t) {
    let {current: n, previous: r, history: i} = t;
    if (!(e !== n && e !== r)) {
        if (e === n && n > r) {
            let o = i[e];
            return Ac("enter", o?.transition.enter, o?.transition.animation)
        }
        if (e === r && n > r) {
            let o = i[e + 1];
            return Ac("exit", o?.transition.exit, o?.transition.animation)
        }
        if (e === n && n < r) {
            let o = i[e + 1];
            return Ac("enter", o?.transition.exit, o?.transition.animation)
        }
        if (e === r && n < r) {
            let o = i[e];
            return Ac("exit", o?.transition.enter, o?.transition.animation)
        }
    }
}
var uA = Ti(bi);
function Ac(e, t, n) {
    let r = {}
      , i = {};
    return uA.forEach(o => {
        r[o] = bi[o],
        i[o] = {
            ...n,
            from: bi[o]
        }
    }
    ),
    t && Object.keys(t).forEach(o => {
        if (t[o] === void 0)
            return;
        let s = t[o]
          , a = typeof t[o] == "string" ? `${De(bi)[o]}%` : De(bi)[o];
        De(r)[o] = e === "enter" ? a : s,
        i[o] = {
            ...n,
            from: e === "enter" ? s : a,
            velocity: 0
        }
    }
    ),
    {
        ...r,
        transition: {
            ...i
        }
    }
}
var C6 = Ow.Consumer
  , Bw = b.createContext(void 0)
  , T6 = Bw.Provider
  , zw = b.createContext(void 0)
  , nm = class extends me {
    constructor(e) {
        var t;
        super(e),
        P(this, "lastEventTimeStamp", null),
        P(this, "state", JD()),
        P(this, "navigationAction", a => {
            if (!this.props.enabled && this.state.history.length > 0)
                return;
            let l = iS(this.state, a);
            if (!l)
                return;
            let {skipLayoutAnimation: c} = this.props
              , u = l.history[l.current]
              , f = a.type === "add" && a.transition.withMagicMotion || a.type === "forward" && u?.transition.withMagicMotion || a.type === "remove" && !!l.previousTransition
              , d = () => {
                var m;
                this.setState(l),
                u?.key && ((m = this.context) == null || m.call(this, u.key))
            }
            ;
            c && !f ? c(d) : d()
        }
        ),
        P(this, "goBack", () => {
            var a;
            if (!this.isSameEventTransition())
                return this.lastEventTimeStamp = ((a = globalThis.event) == null ? void 0 : a.timeStamp) || null,
                this.state.currentOverlay !== -1 ? this.navigationAction({
                    type: "removeOverlay"
                }) : this.navigationAction({
                    type: "remove"
                })
        }
        );
        let n = this.props.children;
        if (!n || !Nc(n) || !zc(n))
            return;
        let r = {
            ...Xe.Instant
        }
          , o = {
            type: "add",
            key: ((t = n.key) == null ? void 0 : t.toString()) || `stack-${this.state.historyItemId + 1}`,
            transition: r,
            component: n
        }
          , s = iS(this.state, o);
        s && (this.state = s)
    }
    componentDidMount() {
        var e;
        let t = this.state.history[this.state.current];
        t && ((e = this.context) == null || e.call(this, t.key))
    }
    UNSAFE_componentWillReceiveProps(e) {
        var t;
        let n = e.children;
        if (!Nc(n) || !zc(n))
            return;
        let r = (t = n.key) == null ? void 0 : t.toString();
        r && (this.state.history.length === 0 ? this.transition(n, Xe.Instant) : this.navigationAction({
            type: "update",
            key: r,
            component: n
        }))
    }
    componentWillUnmount() {
        var e, t;
        (t = (e = this.props).resetProjection) == null || t.call(e)
    }
    getStackState(e) {
        let {current: t, previous: n, currentOverlay: r, previousOverlay: i} = this.state;
        return e.overCurrentContext ? {
            current: r,
            previous: i,
            history: this.state.overlayStack
        } : {
            current: t,
            previous: n,
            history: this.state.history
        }
    }
    isSameEventTransition() {
        return globalThis.event ? this.lastEventTimeStamp === globalThis.event.timeStamp : !1
    }
    transition(e, t, n) {
        var r, i;
        if (this.isSameEventTransition() || (this.lastEventTimeStamp = ((r = globalThis.event) == null ? void 0 : r.timeStamp) || null,
        !e || !Nc(e) || !zc(e)))
            return;
        let o = {
            ...t,
            ...n
        };
        if (!!o.overCurrentContext)
            return this.navigationAction({
                type: "addOverlay",
                transition: o,
                component: e
            });
        let a = ((i = e.key) == null ? void 0 : i.toString()) || `stack-${this.state.historyItemId + 1}`;
        this.navigationAction({
            type: "add",
            key: a,
            transition: o,
            component: e
        })
    }
    instant(e) {
        this.transition(e, Xe.Instant, void 0)
    }
    fade(e, t) {
        this.transition(e, Xe.Fade, t)
    }
    push(e, t) {
        this.transition(e, qD(t), t)
    }
    modal(e, t) {
        this.transition(e, Xe.Modal, t)
    }
    overlay(e, t) {
        this.transition(e, QD(t), t)
    }
    flip(e, t) {
        this.transition(e, ZD(t), t)
    }
    magicMotion(e, t) {
        this.transition(e, Xe.MagicMotion, t)
    }
    customTransition(e, t) {
        this.transition(e, t)
    }
    render() {
        var e, t, n, r, i;
        let o = this.getStackState({
            overCurrentContext: !1
        })
          , s = this.getStackState({
            overCurrentContext: !0
        })
          , a = fA(s)
          , l = s.current > -1
          , c = this.state.history.length === 1
          , u = [];
        for (let[d,m] of Object.entries(this.state.containers)) {
            let g = this.state.containerIndex[d];
            re(g !== void 0, "Container's index must be registered");
            let y = this.state.containerVisualIndex[d];
            re(y !== void 0, "Container's visual index must be registered");
            let S = this.state.containerIsRemoved[d]
              , h = this.state.history[g]
              , p = this.state.transitionForContainer[d]
              , v = g === this.state.current
              , x = g === this.state.previous
              , C = v ? !1 : S
              , w = ((e = h?.transition) == null ? void 0 : e.withMagicMotion) || v && !!this.state.previousTransition;
            u.push(k(bp, {
                id: d,
                index: y,
                isInitial: c,
                isCurrent: v,
                isPrevious: x,
                isOverlayed: l,
                visible: v || x,
                position: (t = h?.transition) == null ? void 0 : t.position,
                instant: sS(g, o),
                transitionProps: p,
                animation: oS(g, o),
                backfaceVisible: yA(g, o),
                exitAnimation: (n = h?.transition) == null ? void 0 : n.animation,
                exitBackfaceVisible: (r = h?.transition) == null ? void 0 : r.backfaceVisible,
                exitProps: (i = h?.transition) == null ? void 0 : i.enter,
                withMagicMotion: w,
                areMagicMotionLayersPresent: C ? !1 : void 0,
                children: k(wD, {
                    children: aS({
                        component: m,
                        transition: h?.transition
                    })
                })
            }, d))
        }
        let f = this.state.overlayStack.map( (d, m) => k(bp, {
            isLayeredContainer: !0,
            isCurrent: m === this.state.currentOverlay,
            position: d.transition.position,
            initialProps: gA(m, s),
            transitionProps: bA(m, s),
            instant: sS(m, s, !0),
            animation: oS(m, s),
            exitProps: d.transition.enter,
            visible: xA(m, s),
            backdropColor: mA(d.transition),
            backfaceVisible: vA(m, s),
            onTapBackdrop: SA(d.transition, this.goBack),
            index: this.state.current + 1 + m,
            children: aS({
                component: d.component,
                transition: d.transition
            })
        }, d.key));
        return k(Hc, {
            "data-framer-component-type": "NavigationRoot",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            position: "relative",
            style: {
                overflow: "hidden",
                backgroundColor: "unset",
                pointerEvents: void 0,
                ...this.props.style
            },
            children: k(Ow.Provider, {
                value: this,
                children: Q(zw.Provider, {
                    value: c,
                    children: [k(bp, {
                        isLayeredContainer: !0,
                        position: void 0,
                        initialProps: {},
                        instant: !1,
                        transitionProps: dA(a),
                        animation: hA(a),
                        backfaceVisible: pA(a),
                        visible: !0,
                        backdropColor: void 0,
                        onTapBackdrop: void 0,
                        index: 0,
                        children: k(mL, {
                            children: k(xD, {
                                children: k(Uf, {
                                    presenceAffectsLayout: !1,
                                    children: u
                                })
                            })
                        })
                    }), k(Uf, {
                        children: f
                    })]
                })
            })
        })
    }
}
;
P(nm, "defaultProps", {
    enabled: !0
});
P(nm, "contextType", Bw);
var Nw = {
    stiffness: 500,
    damping: 50,
    restDelta: 1,
    type: "spring"
};
function fA(e) {
    let t, n;
    return e.current !== -1 ? t = e.history[e.current] : n = e.history[e.previous],
    {
        currentOverlayItem: t,
        previousOverlayItem: n
    }
}
function dA({currentOverlayItem: e}) {
    return e && e.transition.exit
}
function hA({currentOverlayItem: e, previousOverlayItem: t}) {
    return e && e.transition.animation ? e.transition.animation : t && t.transition.animation ? t.transition.animation : Nw
}
function pA({currentOverlayItem: e, previousOverlayItem: t}) {
    return e ? e.transition.backfaceVisible : t && t.transition.backfaceVisible
}
function mA(e) {
    if (e.backdropColor)
        return e.backdropColor;
    if (e.overCurrentContext)
        return "rgba(4,4,15,.4)"
}
function vA(e, t) {
    let {current: n, history: r} = t;
    if (e === n) {
        let i = r[e];
        return i && i.transition ? i.transition.backfaceVisible : !0
    } else if (e < n) {
        let i = r[e + 1];
        return i && i.transition ? i.transition.backfaceVisible : !0
    } else {
        let i = r[e];
        return i && i.transition ? i.transition.backfaceVisible : !0
    }
}
function gA(e, t) {
    let n = t.history[e];
    if (n)
        return n.transition.enter
}
function yA(e, t) {
    var n, r, i, o;
    let {current: s, previous: a, history: l} = t;
    return e === a && s > a || e === s && s < a ? (r = (n = l[e + 1]) == null ? void 0 : n.transition) == null ? void 0 : r.backfaceVisible : (o = (i = l[e]) == null ? void 0 : i.transition) == null ? void 0 : o.backfaceVisible
}
function bA(e, t) {
    let {current: n, history: r} = t;
    if (e !== n)
        if (e < n) {
            let i = r[e + 1];
            if (i && i.transition)
                return i.transition.exit
        } else {
            let i = r[e];
            if (i && i.transition)
                return i.transition.enter
        }
}
function oS(e, t) {
    let {current: n, previous: r, history: i} = t
      , o = r > n ? r : n;
    if (e < o) {
        let s = i[e + 1];
        if (s && s.transition.animation)
            return s.transition.animation
    } else if (e !== o) {
        let s = i[e];
        if (s && s.transition.animation)
            return s.transition.animation
    } else {
        let s = i[e];
        if (s?.transition.animation)
            return s.transition.animation
    }
    return Nw
}
function sS(e, t, n) {
    let {current: r, previous: i, history: o} = t;
    return !!(n && o.length > 1 || e !== i && e !== r || r === i)
}
function xA(e, t) {
    let {current: n, previous: r} = t;
    return e > n && e > r ? !1 : e === n
}
function aS(e) {
    return b.Children.map(e.component, n => {
        var r;
        if (!Nc(n) || !zc(n) || !n.props)
            return n;
        let i = {
            style: n.props.style ?? {}
        }
          , o = (r = e?.transition) == null ? void 0 : r.position
          , s = !o || o.left !== void 0 && o.right !== void 0
          , a = !o || o.top !== void 0 && o.bottom !== void 0
          , l = "style"in n.props ? Ie(n.props.style) : !0;
        return s && ("width"in n.props && (i.width = "100%"),
        l && (i.style.width = "100%")),
        a && ("height"in n.props && (i.height = "100%"),
        l && (i.style.height = "100%")),
        b.cloneElement(n, i)
    }
    )
}
function SA(e, t) {
    if (e.goBackOnTapOutside !== !1)
        return t
}
function wA() {
    return b.useInsertionEffect( () => {
        ba()
    }
    , []),
    null
}
function kA(e) {
    let t = Yy()
      , n = Gf();
    return Q(nm, {
        ...e,
        resetProjection: t,
        skipLayoutAnimation: n,
        children: [e.children, k(wA, {})]
    })
}
var E6 = on(ru(), 1);
var _6 = on(Np(), 1);
var O6 = !!(cw() && GM() < 15.4);
function rm(...e) {
    return e.filter(Boolean).join(" ")
}
var CA = {};
Object.freeze(CA);
var q6 = 4 / 60 * 1e3;
var TA = ( () => {
    function e(t={}) {
        let n = yp(t, !1, !1);
        return e.addData(n),
        n
    }
    return e._stores = [],
    e.addData = t => {
        e._stores.push(t)
    }
    ,
    e.reset = () => {
        e._stores.forEach(t => yp.resetObject(t))
    }
    ,
    e.addObserver = (t, n) => yp.addObserver(t, n),
    e
}
)()
  , xp = TA;
var EA = {
    update: 0
}
  , PA = b.createContext({
    update: NaN
});
var RA = class extends me {
    constructor() {
        super(...arguments),
        P(this, "observers", []),
        P(this, "state", EA),
        P(this, "taskAdded", !1),
        P(this, "frameTask", () => {
            this.setState({
                update: this.state.update + 1
            }),
            this.taskAdded = !1
        }
        ),
        P(this, "observer", () => {
            this.taskAdded || (this.taskAdded = !0,
            JS.addFrameTask(this.frameTask))
        }
        )
    }
    componentWillUnmount() {
        this.observers.map(e => e()),
        xp.reset()
    }
    render() {
        let {children: e} = this.props;
        return this.observers.map(t => t()),
        this.observers = [],
        xp._stores.forEach(t => {
            let n = xp.addObserver(t, this.observer);
            this.observers.push(n)
        }
        ),
        k(PA.Provider, {
            value: {
                ...this.state
            },
            children: e
        })
    }
}
  , r$ = on(ru(), 1);
var $w = "__framer__"
  , _A = $w.length;
function IA(e) {
    if (e.startsWith($w))
        return e.substr(_A)
}
var Bn = ["opacity", "x", "y", "scale", "rotate", "rotateX", "rotateY", "skewX", "skewY", "transformPerspective"]
  , Zc = e => ({
    x: Pe(e?.x ?? 0),
    y: Pe(e?.y ?? 0),
    opacity: Pe(e?.opacity ?? 1),
    scale: Pe(e?.scale ?? 1),
    rotate: Pe(e?.rotate ?? 0),
    rotateX: Pe(e?.rotateX ?? 0),
    rotateY: Pe(e?.rotateY ?? 0),
    skewX: Pe(e?.skewX ?? 0),
    skewY: Pe(e?.skewY ?? 0),
    transformPerspective: Pe(e?.transformPerspective ?? 0)
})
  , Oe = {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    skewX: 0,
    skewY: 0,
    transformPerspective: 0
};
function Hw(e) {
    return e in Oe
}
function jw(e, t) {
    let n = $n( () => ({
        values: Zc(t ? e : void 0)
    }));
    return b.useEffect( () => {
        if (!t)
            for (let r of Bn) {
                let i = Oe[r];
                yt(i) || n.values[r].set(i)
            }
    }
    , [n, t]),
    n
}
var FA = new Set(["loopEffectEnabled", "loopTransition", "loop", "loopRepeatType", "loopRepeatDelay"])
  , LA = () => {
    let e = D();
    return $( () => () => {
        clearTimeout(e.current)
    }
    , []),
    async t => new Promise(n => {
        e.current = setTimeout( () => {
            n(!0)
        }
        , t * 1e3)
    }
    )
}
;
function MA({loopEffectEnabled: e, loopRepeatDelay: t, loopTransition: n, loopRepeatType: r, loop: i}) {
    let o = ri()
      , s = $n( () => ({
        values: Zc()
    }))
      , a = b.useRef(!1)
      , l = LA()
      , c = async () => {
        if (!i)
            return;
        let d = n || void 0
          , m = a.current && r === "mirror"
          , g = m ? Oe : i
          , y = m ? i : Oe;
        return a.current = !a.current,
        Promise.all(Bn.map(S => {
            if (!(o && S !== "opacity"))
                return s.values[S].set(y[S] ?? Oe[S]),
                new Promise(h => {
                    let p = {
                        ...d,
                        onComplete: () => h()
                    };
                    $i(s.values[S], g[S] ?? y[S], p)
                }
                )
        }
        ))
    }
      , u = async () => {
        e && (await c(),
        await l(t ?? 0),
        await u())
    }
      , f = le( () => {
        Bn.forEach(d => {
            s.values[d].stop()
        }
        ),
        Bn.forEach(d => {
            s.values[d].set(Oe[d])
        }
        ),
        a.current = !1
    }
    , [s]);
    return b.useEffect( () => (e && i ? u() : f(),
    () => f()), [e]),
    s
}
function OA(e, t, n, r, i) {
    let o = n / 100 - 1
      , s = i ? (t - r) * o : 0
      , a = -e * o;
    return s + a
}
var DA = new Set(["speed", "adjustPosition", "offset", "parallaxTransformEnabled"]);
function AA(e, t, n) {
    let {speed: r=100, offset: i=0, adjustPosition: o=!1, parallaxTransformEnabled: s} = e
      , a = b.useRef(null)
      , l = ri()
      , c = b.useCallback(g => a.current === null || r === 100 ? 0 : OA(g, a.current, r, i, o), [a, r, i, o]);
    b.useLayoutEffect( () => {
        J.read( () => {
            var g, y;
            a.current = ((y = (g = t.current) == null ? void 0 : g.getBoundingClientRect()) == null ? void 0 : y.top) ?? 0
        }
        ),
        J.update( () => {
            f.set(c(u.get())),
            o && d.set(n ?? "initial")
        }
        )
    }
    , [t, a, o]);
    let {scrollY: u} = Dy()
      , f = dt(u, c)
      , d = Pn(o && a.current === null ? "hidden" : n)
      , m = Pn(0);
    return {
        values: {
            y: l || !s ? m : f
        },
        style: s ? {
            visibility: d
        } : void 0
    }
}
function VA(e) {
    if (!(ke(e) || !Ie(e)))
        return e?.transition
}
async function Sp(e, t, n, r, i, o) {
    let s = VA(e);
    return Promise.all(Bn.map(a => new Promise(l => {
        if (n && a !== "opacity")
            return l();
        let c = t.values[a];
        c.stop();
        let u = Ie(e) ? e?.[a] ?? Oe[a] : Oe[a];
        if (ve(u) && (u = u.get()),
        !mn(u))
            return l();
        let f = Xn.get(r.current);
        f && f.setBaseTarget(a, u);
        let d = ke(i) && !c?.hasAnimated && jt.HandoffAppearAnimations ? {
            elapsed: jt.HandoffAppearAnimations(i, a, c, J)
        } : void 0;
        o ? c.set(u) : $i(c, u, {
            ...s,
            velocity: 0,
            elapsed: 0,
            ...d,
            onComplete: () => l()
        })
    }
    )))
}
var BA = new Set(["presenceInitial", "presenceAnimate", "presenceExit"]);
function zA({initial: e, animate: t, exit: n, presenceInitial: r, presenceAnimate: i, presenceExit: o}, s, a, l, c) {
    let u = r ?? e
      , f = i ?? t
      , d = o ?? n
      , m = D(!1)
      , g = D(f)
      , [y,S] = Af()
      , h = D(!1)
      , p = $n( () => {
        var x;
        let C = u ?? l;
        if (!Ie(C))
            return {
                values: Zc()
            };
        let w = {};
        for (let T in C) {
            let E = Ie(C) ? (x = De(C)) == null ? void 0 : x[T] : void 0;
            mn(E) && (w[T] = E)
        }
        return {
            values: Zc(w)
        }
    }
    );
    bn( () => {
        if (m.current && f)
            return;
        let x = Xn.get(s.current);
        if (x) {
            m.current = !0;
            for (let C in p.values) {
                if (!Hw(C))
                    continue;
                let w = l?.[C];
                x.setBaseTarget(C, mn(w) ? w : Oe[C])
            }
        }
    }
    , [f]);
    let v = ri();
    return bn( () => {
        if (!a) {
            S?.();
            return
        }
        if (y !== h.current)
            h.current = y,
            y ? u && f && Sp(f, p, v, s, c) : d ? Sp(d, p, v, s, c).then( () => S()) : S();
        else {
            if (!!Ae(f, g.current) || !f)
                return;
            g.current = f,
            Sp(f, p, v, s, c, !0)
        }
    }
    ),
    p
}
function NA(e, t) {
    let n = 0
      , r = e;
    for (; r && r !== t && r instanceof HTMLElement; )
        n += r.offsetTop,
        r = r.offsetParent;
    return n
}
var $A = 1;
function Ww(e, t=0, n) {
    var r;
    let i = []
      , o = [];
    for (let s = e.length; s >= 0; s--) {
        let {ref: a, offset: l} = e[s] ?? {};
        if (!a || !a.current)
            continue;
        let u = NA(a.current, document.documentElement) - $A - (l ?? 0) - t
          , f = ((r = a.current) == null ? void 0 : r.clientHeight) ?? 0
          , d = i[i.length - 1]
          , m = Math.max(u + f, 0);
        i.push(u),
        o.unshift(Math.max(u, 0), d === void 0 ? m : Math.min(m, Math.max(d - 1, 0))),
        n?.(s)
    }
    return o
}
function HA(e, t=0) {
    return e < t ? "up" : "down"
}
var jA = 4;
function WA(e, t, n={}) {
    let {direction: r, target: i} = e ?? {}
      , {repeat: o=!0, enabled: s=!0} = n;
    b.useEffect( () => {
        if (!r || !s)
            return;
        let a, l = 0, c, u;
        return Ni( ({y: f}) => {
            if (!o && u === i || f.current > f.scrollLength || f.current < 0)
                return;
            let d = HA(f.current, a);
            a = f.current;
            let m = d !== c;
            if (c = d,
            m)
                l = f.current;
            else {
                if (Math.abs(f.current - l) < jA)
                    return;
                let y = d === r ? i : void 0;
                y !== u && t(y),
                u = y
            }
        }
        )
    }
    , [r, o, i, s, t])
}
var UA = new Set(["threshold", "animateOnce", "opacity", "targetOpacity", "x", "y", "scale", "transition", "rotate", "rotateX", "rotateY", "perspective", "enter", "exit", "animate", "styleAppearEffectEnabled", "targets", "scrollDirection"])
  , XA = ["animate", "animate"]
  , lS = {
    inputRange: [],
    outputRange: []
};
function YA(e, t, n) {
    let r = Ww(e, t)
      , i = [...XA]
      , o = r[0];
    if (!mn(o))
        return lS;
    if (o > 1 && (r.unshift(0, o - 1),
    i.unshift("initial", "initial")),
    n) {
        let s = r.length - 1
          , a = r[s];
        if (!mn(a))
            return lS;
        r.push(a + 1),
        i.push("exit")
    }
    return {
        inputRange: r,
        outputRange: i
    }
}
function wp(e) {
    return {
        x: e?.x ?? Oe.x,
        y: e?.y ?? Oe.y,
        scale: e?.scale ?? Oe.scale,
        opacity: e?.opacity ?? Oe.opacity,
        transformPerspective: e?.transformPerspective ?? Oe.transformPerspective,
        rotate: e?.rotate ?? Oe.rotate,
        rotateX: e?.rotateX ?? Oe.rotateX,
        rotateY: e?.rotateY ?? Oe.rotateY,
        skewX: e?.skewX ?? Oe.skewX,
        skewY: e?.skewY ?? Oe.skewY,
        transition: e?.transition ?? void 0
    }
}
function GA({opacity: e, targetOpacity: t, perspective: n, enter: r, exit: i, animate: o, ...s}) {
    return b.useMemo( () => ({
        initial: r ?? wp({
            ...s,
            opacity: e ?? t ?? 1,
            transformPerspective: n
        }),
        animate: o ?? wp({
            opacity: t
        }),
        exit: i ?? wp()
    }), [o, s, r, i, e, t, n])
}
function KA(e, t) {
    let n = ri()
      , r = GA(e)
      , i = e.styleAppearEffectEnabled
      , o = jw(i ? r.initial : r.animate, i)
      , s = b.useRef({
        isPlaying: !1,
        scheduledAppearState: void 0,
        lastAppearState: !e.styleAppearEffectEnabled
    })
      , a = b.useRef()
      , l = b.useCallback(async ({transition: d, ...m}, g) => {
        let y = d ?? r.animate.transition ?? e.transition;
        await a.current,
        a.current = Promise.all(Bn.map(S => {
            g && o.values[S].set(r.initial[S] ?? Oe[S]);
            let h = m[S] ?? Oe[S]
              , p = Xn.get(t.current);
            return p && typeof h != "object" && p.setBaseTarget(S, h),
            new Promise(v => {
                if (n && S !== "opacity")
                    v();
                else {
                    let x = {
                        restDelta: S === "scale" ? .001 : void 0,
                        ...y,
                        onComplete: () => v()
                    };
                    $i(o.values[S], h, x)
                }
            }
            )
        }
        ))
    }
    , [])
      , c = e.animateOnce && s.current.lastAppearState === !0
      , u = !e.targets && e.styleAppearEffectEnabled && !e.scrollDirection && !c;
    RD(t, d => {
        let {isPlaying: m, lastAppearState: g} = s.current;
        if (m) {
            s.current.scheduledAppearState = d;
            return
        }
        s.current.scheduledAppearState = void 0,
        s.current.lastAppearState = d,
        g !== d && l(d ? r.animate : r.exit, d)
    }
    , {
        enabled: u,
        animateOnce: !!e.animateOnce,
        threshold: {
            y: e.threshold
        }
    });
    let f = e.targets && i && !e.scrollDirection;
    return b.useEffect( () => {
        if (!f)
            return;
        let d = {
            initial: !0
        }
          , m = "initial";
        return Ni( ({y: g}) => {
            let {targets: y} = e;
            if (!y || !y[0] || y[0].ref && !y[0].ref.current)
                return;
            let {inputRange: S, outputRange: h} = YA(y, (e.threshold ?? 0) * g.containerLength, !!e.exit);
            if (S.length === 0 || S.length !== h.length)
                return;
            let p = Jo(g.current, S, h);
            if (e.animateOnce && d[p] || (d[p] = !0,
            m === p))
                return;
            m = p;
            let v = De(r)[p];
            v && l(v)
        }
        )
    }
    , [f]),
    WA(e.scrollDirection, d => l(d ?? r.animate), {
        enabled: i,
        repeat: !e.animateOnce
    }),
    o
}
var qA = new Set(["transformViewportThreshold", "styleTransformEffectEnabled", "transformTargets", "spring", "transformTrigger"])
  , QA = (e, t) => {
    var n;
    let r = (n = e?.[0]) == null ? void 0 : n.target;
    return t ? {
        opacity: r?.opacity ?? 1
    } : r
}
  , Uw = () => ({
    opacity: [],
    x: [],
    y: [],
    scale: [],
    rotate: [],
    rotateX: [],
    rotateY: [],
    skewX: [],
    skewY: [],
    transformPerspective: []
});
function ZA(e, t) {
    let n = b.useRef({});
    b.useEffect( () => {
        if (t !== void 0)
            for (let r of Ti(e)) {
                let i = e[r];
                i.attach( (o, s) => {
                    let a = n.current[r];
                    if (a && a.stop(),
                    n.current[r] = Tf({
                        keyframes: [i.get(), o],
                        velocity: i.getVelocity(),
                        ...t,
                        restDelta: .001,
                        onUpdate: s
                    }),
                    !Ee.isProcessing) {
                        let l = performance.now() - Ee.timestamp;
                        l < 40 && (n.current[r].time = l / 1e3)
                    }
                    return i.get()
                }
                )
            }
    }
    , [JSON.stringify(t)])
}
function JA(e, t) {
    let n = Uw();
    return {
        inputRange: Ww(e, t, i => {
            var o, s, a;
            let l = (o = e[i - 1]) == null ? void 0 : o.target
              , c = (s = e[i]) == null ? void 0 : s.target;
            for (let u of Bn)
                (a = n[u]) == null || a.unshift(l?.[u] ?? 0, c?.[u] ?? 0)
        }
        ),
        effectKeyOutputRange: n
    }
}
function eV(e) {
    var t;
    let n = Uw();
    for (let {target: r} of e)
        for (let i of Bn)
            (t = n[i]) == null || t.push(r[i]);
    return n
}
var cS = [0, 1];
function tV({transformTrigger: e, styleTransformEffectEnabled: t, transformTargets: n, spring: r, transformViewportThreshold: i=0}, o) {
    let s = ri()
      , a = jw(QA(n, s), t);
    return b.useLayoutEffect( () => {
        if (!(!t || !n))
            if (e !== "onScrollTarget") {
                let l = eV(n);
                return Ni( ({y: c}) => {
                    for (let u of Bn)
                        s && u !== "opacity" || cS.length === l[u].length && l[u][0] !== void 0 && a.values[u].set(Jo(c.progress, cS, l[u]))
                }
                , e === "onInView" ? {
                    target: o.current ?? void 0,
                    offset: ["start end", "end end"]
                } : void 0)
            } else
                return Ni( ({y: l}) => {
                    if (!n[0] || n[0].ref && !n[0].ref.current)
                        return;
                    let {inputRange: c, effectKeyOutputRange: u} = JA(n, i * l.containerLength);
                    if (c.length !== 0)
                        for (let f of Bn)
                            s && f !== "opacity" || c.length === u[f].length && u[f][0] !== void 0 && a.values[f].set(Jo(l.current, c, u[f]))
                }
                )
    }
    , [s, e, o, i, t, a, n]),
    ZA(a.values, r),
    a
}
var Xw = {
    parallax: DA,
    styleAppear: UA,
    styleTransform: qA,
    loop: FA,
    presence: BA
}
  , nV = Ti(Xw);
function uS(e, t, n) {
    return !(e in n) && t in n || n[e] === !0
}
function rV(e) {
    let t = {
        parallax: {},
        styleAppear: {},
        styleTransform: {},
        presence: {
            animate: e.animate,
            initial: e.initial,
            exit: e.exit
        },
        loop: {},
        forwardedProps: {}
    };
    for (let n in e) {
        let r = IA(n);
        if (r)
            for (let i of nV) {
                let o = Xw[i];
                if (o?.has(r)) {
                    t[i][r] = De(e)[n];
                    break
                }
            }
        else
            t.forwardedProps[n] = De(e)[n]
    }
    return t.parallax.parallaxTransformEnabled = uS("parallaxTransformEnabled", "speed", t.parallax),
    t.styleAppear.styleAppearEffectEnabled = uS("styleAppearEffectEnabled", "animateOnce", t.styleAppear),
    t
}
var Nr = e => e.reduce( (t, n) => t += n, 0)
  , fS = e => e.reduce( (t, n) => t = t * n, 1)
  , iV = "current";
function oV(e) {
    return Ie(e) && iV in e
}
function sV(e, t) {
    if (!e || !Ie(e))
        return t;
    for (let n in e) {
        let r = e[n];
        !ve(r) || !Hw(n) || mn(r.get()) && t[n].push(r)
    }
}
function Xs(e) {
    return ke(e) || Array.isArray(e)
}
var aV = e => b.forwardRef( (t, n) => {
    if (t.__withFX)
        return k(e, {
            ...t,
            animate: void 0,
            initial: void 0,
            exit: void 0,
            ref: n
        });
    if (Fe.current() === "CANVAS") {
        let K = Xs(t.animate) ? t.animate : void 0
          , X = Xs(t.initial) ? t.initial : void 0;
        return k(e, {
            ...t,
            animate: K,
            initial: X,
            exit: void 0,
            ref: n
        })
    }
    let r = b.useRef(null)
      , i = n ?? r
      , {parallax: o={}, styleAppear: s={}, styleTransform: a={}, presence: l={}, loop: c={}, forwardedProps: u} = rV(t)
      , {__targetOpacity: f, __perspectiveFX: d, __smartComponentFX: m=!1} = t
      , g = Pn(f ?? 1)
      , {values: y} = zA(l, i, m, t.style, t[Ua])
      , {values: S, style: h} = AA(o, i)
      , {values: p} = tV(a, i)
      , {values: v} = KA(s, i)
      , {values: x} = MA(c)
      , C = b.useMemo( () => ({
        scale: [v.scale, x.scale, y.scale, p.scale],
        opacity: [v.opacity, x.opacity, y.opacity, g, p.opacity],
        x: [v.x, x.x, y.x, p.x],
        y: [v.y, x.y, S.y, y.y, p.y],
        rotate: [v.rotate, x.rotate, y.rotate, p.rotate],
        rotateX: [v.rotateX, x.rotateX, y.rotateX, p.rotateX],
        rotateY: [v.rotateY, x.rotateY, y.rotateY, p.rotateY],
        skewX: [v.skewX, x.skewX, y.skewX, p.skewX],
        skewY: [v.skewY, x.skewY, y.skewY, p.skewY],
        transformPerspective: [p.transformPerspective, v.transformPerspective]
    }), [g, p, S, v, x, y]);
    sV(t.style, C);
    let w = dt(C.scale, fS)
      , T = dt(C.opacity, fS)
      , E = dt(C.x, Nr)
      , _ = dt(C.y, Nr)
      , R = dt(C.rotate, Nr)
      , B = dt(C.rotateX, Nr)
      , A = dt(C.rotateY, Nr)
      , ne = dt(C.skewX, Nr)
      , q = dt(C.skewY, Nr)
      , H = dt(C.transformPerspective, Nr)
      , {drag: Z, dragConstraints: ie} = u;
    BO(Z && oV(ie) ? ie : void 0);
    let G = {
        opacity: T,
        scale: w,
        x: E,
        y: _,
        rotate: R,
        rotateX: B,
        rotateY: A,
        skewX: ne,
        skewY: q
    };
    yt(d) && (G.transformPerspective = H);
    let Y = Xs(t.animate) ? t.animate : void 0
      , oe = Xs(t.initial) ? t.initial : void 0
      , Le = Xs(t.exit) ? t.exit : void 0
      , U = m && !l.presenceInitial ? {
        initial: oe,
        animate: Y,
        exit: Le
    } : {};
    return k(e, {
        ...u,
        ...U,
        __withFX: !0,
        style: {
            ...t.style,
            ...h,
            ...G
        },
        values: y,
        ref: i
    })
}
);
var m$ = aV;
function im(e) {
    let t = $n( () => lV(e));
    return t.useSetup(e),
    t.cloneAsElement
}
function lV(e) {
    let t = {
        forwardedRef: e,
        childRef: null,
        ref: null
    };
    t.ref = dS(t);
    let n = (s, a) => {
        if (!t.forwardedRef && t.forwardedRef === s) {
            t.ref = a;
            return
        }
        let l = !1;
        t.childRef !== a && (t.childRef = a,
        l = !0),
        t.forwardedRef !== s && (t.forwardedRef = s,
        l = !0),
        l && (t.ref = dS(t))
    }
      , r = !1;
    function i(s, a) {
        if (r)
            throw new ReferenceError("useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle.");
        return r = !0,
        gn.count(s) > 1 && e && (t.forwardedRef = void 0,
        t.ref = t.childRef),
        gn.map(s, l => {
            if (yn(l)) {
                let c = "ref"in l ? l.ref : void 0;
                n(t.forwardedRef, c);
                let u = t.ref !== c ? {
                    ...a,
                    ref: t.ref
                } : a;
                return rn(l, u)
            }
            return l
        }
        )
    }
    let o = function(a, l) {
        return k(Ce, {
            children: i(a, l)
        })
    };
    return o.cloneAsArray = i,
    {
        useSetup: s => {
            r = !1,
            n(s, t.childRef)
        }
        ,
        cloneAsElement: o
    }
}
function dS(e) {
    if (!e.forwardedRef)
        return e.childRef;
    let {forwardedRef: t, childRef: n} = e;
    return r => {
        hS(n, r),
        hS(t, r)
    }
}
function hS(e, t) {
    ia(e) ? e(t) : cV(e) && (e.current = t)
}
function cV(e) {
    return Ie(e) && "current"in e
}
var Yw = b.createContext({});
function S$() {
    return b.useContext(Yw)
}
var w$ = b.forwardRef( ({width: e, children: t, ...n}, r) => {
    let i = b.useMemo( () => ({
        width: e
    }), [e])
      , o = im(r);
    return k(Yw.Provider, {
        value: i,
        children: o(t, n)
    })
}
)
  , uV = e => b.forwardRef( (t, n) => {
    let r = xa(t);
    return k(e, {
        layoutId: r,
        ...t,
        layoutIdKey: void 0,
        duplicatedFrom: void 0,
        ref: n
    })
}
)
  , fV = class extends b.Component {
    constructor() {
        super(...arguments),
        P(this, "state", {
            hasError: !1
        })
    }
    static getDerivedStateFromError() {
        return console.error("Error in component (see previous error log). This component has been hidden."),
        {
            hasError: !0
        }
    }
    render() {
        let {children: e} = this.props
          , {hasError: t} = this.state;
        return t ? null : e
    }
}
  , dV = b.forwardRef( ({children: e, layoutId: t, ...n}, r) => {
    let i = $n( () => t ? `${t}-container` : void 0);
    return k(ft.div, {
        layoutId: i,
        ...n,
        ref: r,
        children: k(_o.Provider, {
            value: !0,
            children: k(gL, {
                enabled: !1,
                children: k(Fy, {
                    id: t ?? "",
                    inherit: "id",
                    children: k(fV, {
                        children: b.Children.map(e, o => b.isValidElement(o) ? b.cloneElement(o, {
                            layoutId: t
                        }) : o)
                    })
                })
            })
        })
    })
}
)
  , R$ = uV(dV)
  , hV = b.createContext(void 0);
if (lr())
    for (let e of document.querySelectorAll("style[data-framer-css-ssr]"))
        document.head.appendChild(e);
var pV = ( () => {
    var e;
    if (!lr())
        return new Set;
    let t = (e = document.querySelector("style[data-framer-css-ssr-minified]")) == null ? void 0 : e.getAttribute("data-framer-components");
    return t ? new Set(t.split(" ")) : new Set
}
)()
  , Gw = {
    "data-framer-css-ssr": !0
}
  , Kw = (e, t, n) => b.forwardRef( (r, i) => {
    let {sheet: o, cache: s} = b.useContext(hV) ?? {};
    if (!lr()) {
        let a = Array.isArray(t) ? t.join(`
`) : t;
        return Q(Ce, {
            children: [k("style", {
                ...Gw,
                "data-framer-component": n,
                dangerouslySetInnerHTML: {
                    __html: a
                }
            }), k(e, {
                ...r,
                ref: i
            })]
        })
    }
    return b.useInsertionEffect( () => {
        if (n && pV.has(n))
            return;
        (Array.isArray(t) ? t : t.split(`
`)).forEach(l => l && nw(l, o, s))
    }
    , []),
    k(e, {
        ...r,
        ref: i
    })
}
)
  , om = b.createContext({
    onRegisterCursors: () => () => {}
    ,
    registerCursors: () => {}
})
  , Jc = "framer-cursor-none"
  , Dp = "framer-pointer-events-none"
  , mV = b.memo(function({children: t}) {
    let n = $n( () => {
        let i = new Set
          , o = {};
        return {
            onRegisterCursors: s => (s(o),
            i.add(s),
            () => i.delete(s)),
            registerCursors: s => {
                let a = {};
                for (let l in s) {
                    let c = o[l] ?? s[l];
                    c && (a[l] = c)
                }
                o = a;
                for (let l of i)
                    l(o)
            }
        }
    }
    )
      , r = ri();
    return Q(om.Provider, {
        value: n,
        children: [t, !r && k(SV, {})]
    })
})
  , vV = Kw(mV, [`.${Jc}, .${Jc} * { cursor: none !important; }`, `.${Dp}, .${Dp} * { pointer-events: none !important; }`])
  , gV = {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 12 + 1,
    pointerEvents: "none"
};
function yV(e) {
    return !(!e || e.placement || e.alignment)
}
function Vc(e) {
    switch (e) {
    case "start":
        return "0%";
    case "center":
        return "-50%";
    case "end":
        return "-100%";
    default:
        Lt(e)
    }
}
function bV(e, t="center") {
    switch (e) {
    case "top":
        return `${Vc(t)}, -100%`;
    case "right":
        return `0%, ${Vc(t)}`;
    case "bottom":
        return `${Vc(t)}, 0%`;
    case "left":
        return `-100%, ${Vc(t)}`;
    default:
        return "-50%, -50%"
    }
}
var pS = "data-framer-portal-id";
function mS(e, t) {
    let n = document.elementFromPoint(e, t);
    for (; n; ) {
        if (n === document.body)
            return;
        let r = n.getAttribute("data-framer-cursor");
        if (r)
            return r;
        if (n.hasAttribute(pS)) {
            let i = n.getAttribute(pS);
            n = n.parentElement,
            i && (n = document.getElementById(i) ?? n)
        } else
            n = n.parentElement
    }
}
function xV(e) {
    for (let t in e)
        return !1;
    return !0
}
var SV = b.memo(function() {
    let {onRegisterCursors: t} = M(om)
      , n = Pn(0)
      , r = Pn(0)
      , i = Pn(0)
      , o = b.useRef(null)
      , s = b.useRef({
        cursors: {},
        cursorHash: void 0
    })
      , a = lu()
      , l = !xV(s.current.cursors);
    b.useEffect( () => {
        let w = 0
          , T = 0;
        function E() {
            n.set(w),
            r.set(T),
            $i(i, 1, {
                type: "tween",
                duration: .2
            })
        }
        function _(A) {
            A.pointerType !== "touch" && (w = A.clientX,
            T = A.clientY,
            J.update(E))
        }
        let R = () => {
            if (!l)
                return;
            let A = mS(w, T);
            A !== s.current.cursorHash && (s.current.cursorHash = A,
            J.update( () => a()))
        }
        ;
        J.read(R, !0);
        function B(A) {
            if (A.target === o.current || !o.current)
                return;
            let ne = new PointerEvent(A.type,{
                bubbles: !0,
                cancelable: A.cancelable,
                pointerType: A.pointerType,
                pointerId: A.pointerId,
                composed: A.composed,
                isPrimary: A.isPrimary,
                buttons: A.buttons,
                button: A.button
            });
            J.update( () => {
                var q;
                (q = o.current) == null || q.dispatchEvent(ne)
            }
            )
        }
        return jt.addEventListener("pointermove", _),
        document.addEventListener("pointerdown", B),
        document.addEventListener("pointerup", B),
        () => {
            jt.removeEventListener("pointermove", _),
            document.removeEventListener("pointerdown", B),
            document.removeEventListener("pointerup", B),
            ut(R)
        }
    }
    , [i, n, r, l, a]),
    b.useEffect( () => {
        function w() {
            $i(i, 0, {
                type: "tween",
                duration: .2
            })
        }
        return document.addEventListener("mouseleave", w),
        jt.addEventListener("blur", w),
        () => {
            document.removeEventListener("mouseleave", w),
            jt.removeEventListener("blur", w)
        }
    }
    , [i]),
    b.useLayoutEffect( () => {
        function w(E) {
            s.current.cursors = E,
            s.current.cursorHash = mS(n.get(), r.get()),
            a()
        }
        let T = t(w);
        return () => {
            T(),
            document.body.classList.toggle(Jc, !1)
        }
    }
    , [n, r, t, a]);
    let {cursors: c, cursorHash: u} = s.current
      , f = u ? c[u] : null
      , d = yV(f);
    b.useLayoutEffect( () => {
        document.body.classList.toggle(Jc, d)
    }
    , [d]);
    let m = f?.component
      , g = f?.transition ?? {
        duration: 0
    }
      , y = Xf(n, g)
      , S = Xf(r, g)
      , h = dt( () => {
        var w;
        return y.get() + (((w = f?.offset) == null ? void 0 : w.x) ?? 0)
    }
    )
      , p = dt( () => {
        var w;
        return S.get() + (((w = f?.offset) == null ? void 0 : w.y) ?? 0)
    }
    )
      , v = f?.alignment
      , x = f?.placement
      , C = b.useCallback( (w, T) => `translate(${bV(x, v)}) ${T}`, [v, x]);
    return !f || !m ? null : k(m, {
        transformTemplate: C,
        style: {
            ...gV,
            x: h,
            y: p,
            opacity: i
        },
        globalTapTarget: !0,
        variant: f?.variant,
        ref: o,
        className: Dp
    })
});
function O$(e) {
    let {registerCursors: t} = M(om)
      , n = $n( () => e);
    b.useLayoutEffect( () => {
        t(n)
    }
    , [n, t])
}
var wV = b.createContext(void 0)
  , sm = class {
    constructor(e) {
        this.resolver = e,
        P(this, "status")
    }
    static is(e) {
        return e instanceof sm
    }
    preload() {
        if (this.status) {
            let t = this.status;
            return t.type !== "pending" ? void 0 : t.promise
        }
        let e = this.resolver().then(t => {
            this.status = {
                type: "fulfilled",
                value: t
            }
        }
        , t => {
            this.status = {
                type: "rejected",
                error: t
            }
        }
        );
        return this.status = {
            type: "pending",
            promise: e
        },
        e
    }
    read() {
        let e = this.status;
        if (!e)
            throw new Error("Need to call preload() before read()");
        switch (e.type) {
        case "pending":
            throw new Error("Need to wait for preload() to resolve");
        case "fulfilled":
            return e.value;
        case "rejected":
            throw e.error;
        default:
            Lt(e)
        }
    }
}
;
function am(e, t) {
    return e instanceof HTMLAnchorElement ? e : e instanceof Element ? e === t ? null : am(e.parentElement, t) : null
}
var vS = "element"
  , kV = "collection"
  , CV = "collectionItemId"
  , TV = "pathVariables"
  , qw = "framer/page-link,";
function Qw(e) {
    return ke(e) && e.startsWith(`data:${qw}`)
}
function lm(e) {
    if (Qw(e))
        try {
            let t = new URL(e), n = t.pathname.substring(qw.length), r = t.searchParams, i = r.has(vS) ? r.get(vS) : void 0, o, s = r.get(kV), a = r.get(CV), l = r.get(TV);
            if (s && a && l) {
                let c = Object.fromEntries(new URLSearchParams(l).entries());
                o = {
                    collection: s,
                    collectionItemId: a,
                    pathVariables: c
                }
            }
            return {
                target: n === "none" ? null : n,
                element: i === "none" ? void 0 : i,
                collectionItem: o
            }
        } catch {
            return
        }
}
function EV(e, t, n) {
    var r;
    let i = t.getAttribute("data-framer-page-link-target"), o, s;
    if (i) {
        o = t.getAttribute("data-framer-page-link-element") ?? void 0;
        let l = t.getAttribute("data-framer-page-link-path-variables");
        l && (s = Object.fromEntries(new URLSearchParams(l).entries()))
    } else {
        let l = t.getAttribute("href");
        if (!l)
            return !1;
        let c = lm(l);
        if (!c || !c.target)
            return !1;
        i = c.target,
        o = c.element ?? void 0,
        s = (r = c.collectionItem) == null ? void 0 : r.pathVariables
    }
    let a = o ? t.dataset.framerSmoothScroll !== void 0 : void 0;
    return e(i, o, Object.assign({}, n, s), a),
    !0
}
var kp = {}
  , Bc = new WeakMap;
function PV(e, t, n) {
    var r, i;
    let o = (i = (r = Bc?.get(n ?? kp)) == null ? void 0 : r.get(e.collectionId)) == null ? void 0 : i.get(e.collectionItemId);
    if (o)
        return o;
    let s = Bc.get(n ?? kp) ?? new Map;
    Bc.set(n ?? kp, s);
    let a = s.get(e.collectionId) ?? new Map;
    s.set(e.collectionId, a);
    let l = new sm(async () => {
        try {
            let c = t[e.collectionId];
            if (!c)
                throw new Error(`Key not found in collection utils for collection id: "${e.collectionId}`);
            let u = await c();
            if (!u)
                throw new Error("Collection does not contain utility functions");
            return await u.getSlugByRecordId(e.collectionItemId, n ?? void 0)
        } catch (c) {

            return
        }
    }
    );
    return a.set(e.collectionItemId, l),
    l
}
var RV = "webPageId";
function _V(e) {
    return !!(e && typeof e == "object" && RV in e)
}
function IV(e) {
    if (!e)
        return;
    let t = {};
    for (let n in e.pathVariables) {
        let r = e.pathVariables[n];
        r && (t[n] = r)
    }
    return t
}
function Zw(e) {
    if (!Qw(e))
        return e;
    let t = lm(e);
    if (!t)
        return;
    let {target: n, element: r, collectionItem: i} = t;
    if (n)
        return {
            webPageId: n,
            hash: r ?? void 0,
            pathVariables: IV(i)
        }
}
var Jw = /:([a-z]\w*)/gi
  , FV = b.createContext(void 0);
function ek() {
    var e;
    let t = b.useContext(FV)
      , n = (e = ou()) == null ? void 0 : e.pathVariables;
    return t || n
}
function tk(e, {webPageId: t, hash: n, pathVariables: r}, i) {
    if (t !== e.id || n)
        return !1;
    if (e.path && e.pathVariables) {
        let o = Object.assign({}, i, r);
        for (let[,s] of e.path.matchAll(Jw))
            if (!s || e.pathVariables[s] !== o[s])
                return !1
    }
    return !0
}
function nk(e) {
    return e === void 0 ? !1 : !!(e.startsWith("#") || e.startsWith("/") || e.startsWith("."))
}
function LV(e, t) {
    try {
        return !!new URL(e).protocol
    } catch {}
    return t
}
function cm(e, t) {
    return e !== void 0 ? e ? "_blank" : void 0 : t ? void 0 : "_blank"
}
function gS(e, t=void 0) {
    let n = nk(e)
      , r = cm(t, n);
    return {
        href: LV(e, n) ? e : `https://${e}`,
        target: r,
        rel: n ? void 0 : "noopener"
    }
}
function rk(e, t, n, r, i) {
    return async o => {
        var s, a;
        if (o.metaKey)
            return;
        let l = am(o.target);
        if (!l || l.getAttribute("target") === "_blank")
            return;
        o.preventDefault();
        let c = (s = e.getRoute) == null ? void 0 : s.call(e, t);
        c && zS(c?.page) && await c.page.preload(),
        (a = e.navigate) == null || a.call(e, t, n, r, i)
    }
}
function MV(e, t, n, r, i, o) {
    let s = nk(e);
    if (!n.routes || !n.getRoute || !r || !s)
        return gS(e, t);
    try {
        let[a,l] = e.split("#", 2);
        re(a !== void 0, "A href must have a defined pathname.");
        let[c] = a.split("?", 2);
        re(c !== void 0, "A href must have a defined pathname.");
        let {routeId: u, pathVariables: f} = H2(n.routes, c)
          , d = n.getRoute(u);
        if (d) {
            jp(d.page);
            let m = Object.assign({}, i, f)
              , g = $p(d, {
                currentRoutePath: r.path,
                currentPathVariables: r.pathVariables,
                hash: l || void 0,
                pathVariables: m,
                preserveQueryParams: n.preserveQueryParams
            })
              , y = cm(t, !0);
            return {
                href: g,
                target: y,
                onClick: rk(n, u, l || void 0, m, o)
            }
        }
    } catch {}
    return gS(e, t)
}
function OV(e, t, n, r) {
    let i = [];
    function o(a) {
        if (!a || !n)
            return;
        let l = {};
        for (let c in a) {
            let u = a[c];
            re(u, "unresolvedSlug should be defined");
            let f = PV(u, n, r)
              , d = f.preload();
            if (d)
                i.push(d);
            else {
                let m = f.read();
                m && (l[c] = m)
            }
        }
        return l
    }
    let s = {
        path: o(e),
        hash: o(t)
    };
    if (i.length)
        throw Promise.allSettled(i);
    return s
}
var N$ = b.forwardRef( ({children: e, href: t, openInNewTab: n, smoothScroll: r, ...i}, o) => {
    let s = va()
      , a = ou()
      , l = ek()
      , {activeLocale: c} = A2()
      , u = im(o)
      , f = b.useMemo( () => {
        var d;
        if (!t)
            return {};
        let m = _V(t) ? t : Zw(t);
        if (!m)
            return {};
        if (ke(m))
            return MV(m, n, s, a, l, r);
        let {webPageId: g, hash: y, pathVariables: S, hashVariables: h, unresolvedHashSlugs: p, unresolvedPathSlugs: v} = m
          , x = (d = s.getRoute) == null ? void 0 : d.call(s, g)
          , C = OV(v, p, s.collectionUtils, c);
        x && jp(x.page);
        let w = Object.assign({}, l, S, C?.path)
          , T = Object.assign({}, l, h, C?.hash)
          , E = cm(n, !0)
          , _ = $p(x, {
            currentRoutePath: a?.path,
            currentPathVariables: a?.pathVariables,
            hash: y,
            pathVariables: w,
            hashVariables: T,
            preserveQueryParams: s.preserveQueryParams
        })
          , R = _.split("#", 2)[1];
        return {
            href: _,
            target: E,
            onClick: rk(s, g, R, w, r),
            "data-framer-page-link-current": a && tk(a, m, l) || void 0
        }
    }
    , [t, s, c, l, n, a, r]);
    return u(e, {
        ...i,
        ...f
    })
}
);
function j$({RootComponent: e, isWebsite: t, routeId: n, pathVariables: r, routes: i, collectionUtils: o, notFoundPage: s, isReducedMotion: a=!1, includeDataObserver: l=!1, localeId: c, locales: u, preserveQueryParams: f, enableImproveInpDuringHydration: d, shouldMarkHydrationEnd: m=!1}) {
    if (b.useEffect( () => {
        t || JS.start()
    }
    , []),
    t)
        return k(Ry, {
            reducedMotion: a ? "user" : "never",
            children: k(vV, {
                children: k(z2, {
                    initialRoute: n,
                    initialPathVariables: r,
                    initialLocaleId: c,
                    routes: i,
                    collectionUtils: o,
                    notFoundPage: s,
                    locales: u,
                    defaultPageStyle: {
                        minHeight: "100vh",
                        width: "auto"
                    },
                    preserveQueryParams: f,
                    enableImproveInpDuringHydration: d,
                    shouldMarkHydrationEnd: m
                })
            })
        });
    {
        let g = l ? RA : b.Fragment;
        return k(g, {
            children: k(E2, {
                routes: i,
                children: k(kA, {
                    children: b.isValidElement(e) ? e : b.createElement(e, {
                        key: n
                    })
                })
            })
        })
    }
}
function Cp(e, t, n) {
    let r = gn.map(e, i => yn(i) ? rn(i, t) : i);
    return n ? r : k(Ce, {
        children: r
    })
}
var ik = b.createContext(void 0)
  , yS = "ssr-variant";
function DV(e, t, n, r, i, o, s) {
    if (lr())
        throw new Error("This should not be called on the client");
    let a = b.Children.toArray(t)
      , l = a[0];
    if (a.length !== 1 || !b.isValidElement(l))
        return console.warn(s + ": expected exactly one React element for a child", t),
        Cp(t, n);
    let c = []
      , u = [];
    for (let[g] of Object.entries(r)) {
        if (g === i)
            continue;
        let y = e[g];
        if (!y || !VV(l.props, y)) {
            u.push(g);
            continue
        }
        let S = bS([g], o);
        S.length && c.push({
            variants: S,
            propOverrides: y
        })
    }
    if (c.length === 0)
        return Cp(l, n);
    let f = [i, ...u]
      , d = bS(f, o);
    d.length && c.unshift({
        variants: d
    });
    let m = `.${yS} { display: contents }`;
    return Q(Ce, {
        children: [!o && k("style", {
            ...Gw,
            children: m
        }), c.map( ({variants: g, propOverrides: y}) => {
            let S = g.join("+")
              , h = k(ik.Provider, {
                value: new Set(g),
                children: Cp(l, {
                    ...n,
                    ...y
                })
            }, S)
              , p = AV(g, o, r);
            return p.length ? (re(c.length > 1, "Must branch out when there are hiddenClassNames"),
            h = k("div", {
                className: `${yS} ${p.join(" ")}`,
                children: h
            }, S)) : re(c.length === 1, "Cannot branch out when hiddenClassNames is empty"),
            h
        }
        )]
    })
}
function AV(e, t, n) {
    let r = [];
    for (let[i,o] of Object.entries(n)) {
        let s = t && !t.has(i);
        if (e.includes(i) || s)
            continue;
        let a = o.split("-")[2];
        r.push(`hidden-${a}`)
    }
    return r
}
function bS(e, t) {
    return t ? e.filter(n => t.has(n)) : e
}
function VV(e, t) {
    for (let n of Object.keys(t))
        if (!Ae(e[n], t[n], !0))
            return !0;
    return !1
}
function BV(e, t, n) {
    return !n || !e ? t : {
        ...t,
        ...n[e]
    }
}
var Y$ = b.forwardRef(function({breakpoint: t, overrides: n, children: r, ...i}, o) {
    let s = im(o);
    if (lr())
        return s(r, BV(t, i, n));
    let a = b.useContext(wV);
    if (!a)
        return console.warn("PropertyOverrides is missing GeneratedComponentContext"),
        s(r, i);
    let {primaryVariantId: l, variantClassNames: c} = a
      , u = b.useContext(ik);
    return DV(n, r, i, c, l, u, "PropertyOverrides")
});
var zV = on(zF(), 1);
function NV(e) {
    return {
        trace(...t) {
            var n;
            return (n = Ye.getLogger(e)) == null ? void 0 : n.trace(...t)
        },
        debug(...t) {
            var n;
            return (n = Ye.getLogger(e)) == null ? void 0 : n.debug(...t)
        },
        info(...t) {
            var n;
            return (n = Ye.getLogger(e)) == null ? void 0 : n.info(...t)
        },
        warn(...t) {
            var n;
            return (n = Ye.getLogger(e)) == null ? void 0 : n.warn(...t)
        },
        error(...t) {
            var n;
            return (n = Ye.getLogger(e)) == null ? void 0 : n.error(...t)
        }
    }
}
function $V(e) {
    return Yp(e) && e.every(Ie)
}
function ok(e) {
    return Ie(e) && ia(e.read) && ia(e.preload)
}
function HV(e) {
    return $V(e) || ok(e)
}
function jV(e) {
    return Ie(e) && Ie(e.schema)
}
function um(e) {
    return Ie(e) && Ie(e.collectionByLocaleId)
}
async function xS(e, t) {
    return ok(e) ? (await e.preload(t),
    e.read(t)) : e
}
var WV = class {
    constructor(e, t) {
        this.collection = e,
        this.locale = t,
        P(this, "schema"),
        P(this, "indexes", []);
        let n = aw(e);
        re(n, "Collection does not have properties");
        let r = {
            id: {
                type: "string",
                isNullable: !1
            }
        }
          , i = Object.entries(n);
        for (let[o,s] of i)
            s && (r[o] = {
                type: s.type,
                isNullable: !0
            });
        this.schema = r
    }
    getDatabaseItem(e, t) {
        let n = {};
        for (let r in this.schema) {
            let i = e[r];
            if (Eo(i))
                continue;
            let o = this.schema[r];
            yt(o) || (n[r] = {
                type: o.type,
                value: i
            })
        }
        return {
            pointer: t,
            data: n
        }
    }
    async resolveRichText(e) {
        if (sm.is(e)) {
            let t = e.preload();
            return t && await t,
            e.read()
        }
        return e
    }
    async scanItems() {
        return (await xS(this.collection, this.locale)).map( (t, n) => {
            let r = String(n);
            return this.getDatabaseItem(t, r)
        }
        )
    }
    async resolveItems(e) {
        let t = await xS(this.collection, this.locale);
        return e.map(n => {
            let r = Number(n)
              , i = t[r];
            return re(i, "Can't find collection item"),
            this.getDatabaseItem(i, n)
        }
        )
    }
    compareItems(e, t) {
        return Number(e.pointer) - Number(t.pointer)
    }
}
  , tn = {
    equal(e, t, n) {
        return e?.type !== t?.type ? !1 : Ys(e, t, n) === 0
    },
    lessThan(e, t, n) {
        return e?.type !== t?.type ? !1 : Ys(e, t, n) < 0
    },
    lessThanOrEqual(e, t, n) {
        return e?.type !== t?.type ? !1 : Ys(e, t, n) <= 0
    },
    greaterThan(e, t, n) {
        return e?.type !== t?.type ? !1 : Ys(e, t, n) > 0
    },
    greaterThanOrEqual(e, t, n) {
        return e?.type !== t?.type ? !1 : Ys(e, t, n) >= 0
    },
    stringify(e) {
        if (e === null)
            return "null";
        switch (e.type) {
        case "boolean":
        case "number":
            return String(e.value);
        case "string":
            return `'${e.value}'`;
        case "enum":
            return `'${e.value}' /* Enum */`;
        case "color":
            return `'${e.value}' /* Color */`;
        case "date":
            return `'${e.value}' /* Date */`;
        case "richtext":
            return "RichText";
        case "responsiveimage":
            return "ResponsiveImage";
        case "file":
            return "File";
        case "link":
            return ke(e.value) ? `'${e.value}' /* Link */` : "Link";
        default:
            Lt(e)
        }
    }
};
function Ys(e, t, n) {
    if (_e(e) || _e(t))
        return re(e === t),
        0;
    switch (e.type) {
    case "boolean":
        return re(e.type === t.type),
        e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
    case "color":
        return re(e.type === t.type),
        e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
    case "date":
        {
            re(e.type === t.type);
            let r = new Date(e.value)
              , i = new Date(t.value);
            return r < i ? -1 : r > i ? 1 : 0
        }
    case "enum":
        return re(e.type === t.type),
        e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
    case "file":
        return re(e.type === t.type),
        e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
    case "responsiveimage":
        {
            re(e.type === t.type);
            let r = JSON.stringify(e.value)
              , i = JSON.stringify(t.value);
            return r < i ? -1 : r > i ? 1 : 0
        }
    case "link":
        {
            re(e.type === t.type);
            let r = JSON.stringify(e.value)
              , i = JSON.stringify(t.value);
            return r < i ? -1 : r > i ? 1 : 0
        }
    case "number":
        return re(e.type === t.type),
        e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
    case "richtext":
        {
            re(e.type === t.type);
            let r = e.value
              , i = t.value;
            return r < i ? -1 : r > i ? 1 : 0
        }
    case "string":
        {
            re(e.type === t.type);
            let r = e.value
              , i = t.value;
            return n.type === 0 && (r = e.value.toLowerCase(),
            i = t.value.toLowerCase()),
            r < i ? -1 : r > i ? 1 : 0
        }
    default:
        Lt(e)
    }
}
var Ap = "index"
  , vt = class {
    static from(e, t) {
        return Vn(e, t, void 0)
    }
}
  , tt = class extends vt {
    constructor(e, t) {
        super(),
        this.schema = e,
        this.name = t,
        P(this, "definition"),
        t === Ap ? this.definition = {
            type: "number",
            isNullable: !1
        } : this.definition = e[t] ?? null
    }
    stringify() {
        return this.name
    }
    equals(e) {
        return e instanceof tt && Ae(this.definition, e.definition) && Ae(e.name, this.name)
    }
    evaluate(e) {
        let t = this.name;
        if (yt(e) || t === Ap)
            throw new Error(`Can't evaluate identifier: ${t}`);
        return e.data[t] ?? null
    }
    canEvaluate() {
        return !1
    }
}
  , we = class extends vt {
    constructor(e, t) {
        super(),
        this.definition = e,
        this.value = t
    }
    stringify() {
        return tn.stringify(this.value)
    }
    static fromNull() {
        return new we(null,null)
    }
    static fromBoolean(e) {
        return new we({
            type: "boolean",
            isNullable: _e(e)
        },_e(e) ? null : {
            type: "boolean",
            value: e
        })
    }
    static fromDate(e) {
        return new we({
            type: "date",
            isNullable: _e(e)
        },_e(e) ? null : {
            type: "date",
            value: e.toISOString()
        })
    }
    static fromEnum(e) {
        return new we({
            type: "enum",
            isNullable: _e(e)
        },_e(e) ? null : {
            type: "enum",
            value: e
        })
    }
    static fromNumber(e) {
        return new we({
            type: "number",
            isNullable: _e(e)
        },_e(e) ? null : {
            type: "number",
            value: e
        })
    }
    static fromString(e) {
        return new we({
            type: "string",
            isNullable: _e(e)
        },_e(e) ? null : {
            type: "string",
            value: e
        })
    }
    equals(e) {
        return e instanceof we && Ae(this.definition, e.definition) && Ae(e.value, this.value)
    }
    evaluate() {
        return this.value
    }
    canEvaluate() {
        return !0
    }
}
  , wa = class extends vt {
    constructor(e) {
        super(),
        this.argumentExpressions = e,
        P(this, "collation", {
            type: 0
        })
    }
    getArgumentExpression(e) {
        let t = this.argumentExpressions[e];
        if (yt(t))
            throw new Error("Missing argument in function call");
        return t
    }
    equals(e) {
        return e instanceof wa && Ae(this.constructor, e.constructor) && Ae(this.argumentExpressions, e.argumentExpressions)
    }
    canEvaluate() {
        return this.argumentExpressions.every(e => e.canEvaluate())
    }
}
  , fu = class extends wa {
    constructor() {
        super(...arguments),
        P(this, "definition", fu.getDefinition()),
        P(this, "sourceExpression", this.getArgumentExpression(0)),
        P(this, "targetExpression", this.getArgumentExpression(1))
    }
    static getDefinition() {
        return {
            type: "boolean",
            isNullable: !1
        }
    }
    stringify() {
        return `CONTAINS(${this.sourceExpression.stringify()}, ${this.targetExpression.stringify()})`
    }
    getValue(e, t) {
        if (_e(e) || e.type !== "string" || _e(t) || t.type !== "string")
            return !1;
        let n = e.value
          , r = t.value;
        return this.collation.type === 0 && (n = n.toLowerCase(),
        r = r.toLowerCase()),
        n.includes(r)
    }
    evaluate(e) {
        let t = this.sourceExpression.evaluate(e)
          , n = this.targetExpression.evaluate(e);
        return {
            type: "boolean",
            value: this.getValue(t, n)
        }
    }
}
  , du = class extends wa {
    constructor() {
        super(...arguments),
        P(this, "definition", du.getDefinition()),
        P(this, "sourceExpression", this.getArgumentExpression(0)),
        P(this, "targetExpression", this.getArgumentExpression(1))
    }
    static getDefinition() {
        return {
            type: "boolean",
            isNullable: !1
        }
    }
    stringify() {
        return `STARTS_WITH(${this.sourceExpression.stringify()}, ${this.targetExpression.stringify()})`
    }
    getValue(e, t) {
        if (_e(e) || e.type !== "string" || _e(t) || t.type !== "string")
            return !1;
        let n = e.value
          , r = t.value;
        return this.collation.type === 0 && (n = n.toLowerCase(),
        r = r.toLowerCase()),
        n.startsWith(r)
    }
    evaluate(e) {
        let t = this.sourceExpression.evaluate(e)
          , n = this.targetExpression.evaluate(e);
        return {
            type: "boolean",
            value: this.getValue(t, n)
        }
    }
}
  , hu = class extends wa {
    constructor() {
        super(...arguments),
        P(this, "definition", hu.getDefinition()),
        P(this, "sourceExpression", this.getArgumentExpression(0)),
        P(this, "targetExpression", this.getArgumentExpression(1))
    }
    static getDefinition() {
        return {
            type: "boolean",
            isNullable: !1
        }
    }
    stringify() {
        return `ENDS_WITH(${this.sourceExpression.stringify()}, ${this.targetExpression.stringify()})`
    }
    getValue(e, t) {
        if (_e(e) || e.type !== "string" || _e(t) || t.type !== "string")
            return !1;
        let n = e.value
          , r = t.value;
        return this.collation.type === 0 && (n = n.toLowerCase(),
        r = r.toLowerCase()),
        n.endsWith(r)
    }
    evaluate(e) {
        let t = this.sourceExpression.evaluate(e)
          , n = this.targetExpression.evaluate(e);
        return {
            type: "boolean",
            value: this.getValue(t, n)
        }
    }
}
  , eu = class extends vt {
    constructor(e, t, n) {
        super(),
        this.valueExpression = e,
        this.conditions = t,
        this.elseExpression = n,
        P(this, "definition"),
        P(this, "collation", {
            type: 0
        });
        let r = [];
        for (let {thenExpression: i} of t)
            r.push(i.definition);
        n && r.push(n.definition),
        this.definition = eu.getDefinition(r)
    }
    static getDefinition(e) {
        let t = null
          , n = !1;
        for (let r of e) {
            if (t ?? (t = r),
            t && r && t.type !== r.type)
                throw new Error("Incompatible types in CASE expression");
            n || (n = r?.isNullable ?? !0)
        }
        return t ? {
            type: t.type,
            isNullable: n
        } : null
    }
    stringify() {
        let e = "CASE";
        this.valueExpression && (e += ` ${this.valueExpression.stringify()}`);
        for (let {whenExpression: t, thenExpression: n} of this.conditions)
            e += ` WHEN ${t.stringify()} THEN ${n.stringify()}`;
        return this.elseExpression && (e += ` ELSE ${this.elseExpression.stringify()}`),
        e += " END",
        e
    }
    equals(e) {
        return e instanceof eu && Ae(this.valueExpression, e.valueExpression) && Ae(this.conditions, e.conditions) && Ae(this.elseExpression, e.elseExpression)
    }
    evaluate(e) {
        var t, n;
        let r = ((t = this.valueExpression) == null ? void 0 : t.evaluate(e)) ?? null;
        for (let {whenExpression: i, thenExpression: o} of this.conditions) {
            let s = i.evaluate(e);
            if (this.valueExpression ? tn.equal(s, r, this.collation) : Ei(s))
                return o.evaluate(e)
        }
        return ((n = this.elseExpression) == null ? void 0 : n.evaluate(e)) ?? null
    }
    canEvaluate() {
        let e = [];
        this.valueExpression && e.push(this.valueExpression);
        for (let t of this.conditions)
            e.push(t.whenExpression),
            e.push(t.thenExpression);
        return this.elseExpression && e.push(this.elseExpression),
        e.every(t => t.canEvaluate())
    }
}
  , UV = class {
    constructor(e, t) {
        this.whenExpression = e,
        this.thenExpression = t
    }
}
  , sk = class extends vt {
    constructor(e) {
        super(),
        this.valueExpression = e
    }
    equals(e) {
        return e instanceof sk && Ae(this.constructor, e.constructor) && Ae(this.valueExpression, e.valueExpression)
    }
    canEvaluate() {
        return this.valueExpression.canEvaluate()
    }
}
  , ca = class extends sk {
    constructor() {
        super(...arguments),
        P(this, "definition", ca.getDefinition())
    }
    static getDefinition() {
        return {
            type: "boolean",
            isNullable: !1
        }
    }
    stringify() {
        return `NOT ${this.valueExpression.stringify()}`
    }
    evaluate(e) {
        let t = this.valueExpression.evaluate(e);
        return {
            type: "boolean",
            value: !Ei(t)
        }
    }
}
  , ua = class extends vt {
    constructor(e) {
        super(),
        this.operandExpressions = e,
        P(this, "definition", ua.getDefinition())
    }
    static getDefinition() {
        return {
            type: "boolean",
            isNullable: !1
        }
    }
    stringify() {
        return this.operandExpressions.map(e => e.stringify()).join(" AND ")
    }
    equals(e) {
        return e instanceof ua && Ae(this.constructor, e.constructor) && Ae(this.operandExpressions, e.operandExpressions)
    }
    canEvaluate() {
        return this.operandExpressions.every(e => e.canEvaluate())
    }
}
  , wi = class extends ua {
    constructor() {
        super(...arguments),
        P(this, "operator", "AND")
    }
    evaluate(e) {
        return {
            type: "boolean",
            value: this.operandExpressions.every(n => {
                let r = n.evaluate(e);
                return Ei(r)
            }
            )
        }
    }
}
  , ea = class extends ua {
    constructor() {
        super(...arguments),
        P(this, "operator", "OR")
    }
    evaluate(e) {
        return {
            type: "boolean",
            value: this.operandExpressions.some(n => {
                let r = n.evaluate(e);
                return Ei(r)
            }
            )
        }
    }
}
  , zn = class extends vt {
    constructor(e, t) {
        super(),
        this.leftExpression = e,
        this.rightExpression = t,
        P(this, "definition", zn.getDefinition()),
        P(this, "collation", {
            type: 0
        })
    }
    static getDefinition() {
        return {
            type: "boolean",
            isNullable: !1
        }
    }
    stringify() {
        return `${this.leftExpression.stringify()} ${this.operator} ${this.rightExpression.stringify()}`
    }
    equals(e) {
        return e instanceof zn && Ae(this.constructor, e.constructor) && Ae(this.leftExpression, e.leftExpression) && Ae(this.rightExpression, e.rightExpression)
    }
    canEvaluate() {
        return this.leftExpression.canEvaluate() && this.rightExpression.canEvaluate()
    }
}
  , Po = class extends zn {
    constructor() {
        super(...arguments),
        P(this, "operator", "=")
    }
    evaluate(e) {
        let t = this.leftExpression.evaluate(e)
          , n = this.rightExpression.evaluate(e);
        return {
            type: "boolean",
            value: tn.equal(t, n, this.collation)
        }
    }
}
  , Ro = class extends zn {
    constructor() {
        super(...arguments),
        P(this, "operator", "!=")
    }
    evaluate(e) {
        let t = this.leftExpression.evaluate(e)
          , n = this.rightExpression.evaluate(e);
        return {
            type: "boolean",
            value: !tn.equal(t, n, this.collation)
        }
    }
}
  , fa = class extends zn {
    constructor() {
        super(...arguments),
        P(this, "operator", "<")
    }
    evaluate(e) {
        let t = this.leftExpression.evaluate(e)
          , n = this.rightExpression.evaluate(e);
        return {
            type: "boolean",
            value: tn.lessThan(t, n, this.collation)
        }
    }
}
  , da = class extends zn {
    constructor() {
        super(...arguments),
        P(this, "operator", "<=")
    }
    evaluate(e) {
        let t = this.leftExpression.evaluate(e)
          , n = this.rightExpression.evaluate(e);
        return {
            type: "boolean",
            value: tn.lessThanOrEqual(t, n, this.collation)
        }
    }
}
  , ha = class extends zn {
    constructor() {
        super(...arguments),
        P(this, "operator", ">")
    }
    evaluate(e) {
        let t = this.leftExpression.evaluate(e)
          , n = this.rightExpression.evaluate(e);
        return {
            type: "boolean",
            value: tn.greaterThan(t, n, this.collation)
        }
    }
}
  , pa = class extends zn {
    constructor() {
        super(...arguments),
        P(this, "operator", ">=")
    }
    evaluate(e) {
        let t = this.leftExpression.evaluate(e)
          , n = this.rightExpression.evaluate(e);
        return {
            type: "boolean",
            value: tn.greaterThanOrEqual(t, n, this.collation)
        }
    }
}
  , ka = class extends vt {
    constructor(e) {
        super(),
        this.valueExpression = e
    }
    stringify() {
        return `CAST(${this.valueExpression.stringify()} AS ${this.dataType})`
    }
    equals(e) {
        return e instanceof ka && Ae(this.constructor, e.constructor) && Ae(this.valueExpression, e.valueExpression)
    }
    canEvaluate() {
        return this.valueExpression.canEvaluate()
    }
}
  , pu = class extends ka {
    constructor() {
        super(...arguments),
        P(this, "dataType", "BOOLEAN"),
        P(this, "definition", pu.getDefinition())
    }
    static getDefinition() {
        return {
            type: "boolean",
            isNullable: !1
        }
    }
    evaluate(e) {
        let t = this.valueExpression.evaluate(e);
        return {
            type: "boolean",
            value: Ei(t)
        }
    }
}
;
function Ei(e) {
    switch (e?.type) {
    case "boolean":
    case "number":
    case "string":
        return !!e.value
    }
    return !1
}
var fm = class extends ka {
    constructor() {
        super(...arguments),
        P(this, "dataType", "DATE"),
        P(this, "definition", fm.getDefinition())
    }
    static getDefinition() {
        return {
            type: "date",
            isNullable: !0
        }
    }
    evaluate(e) {
        let t = this.valueExpression.evaluate(e)
          , n = ak(t);
        return _e(n) ? null : {
            type: "date",
            value: n.toISOString()
        }
    }
}
;
function ak(e) {
    switch (e?.type) {
    case "date":
    case "number":
    case "string":
        {
            let t = new Date(e.value);
            return ow(t) ? t : null
        }
    }
    return null
}
var dm = class extends ka {
    constructor() {
        super(...arguments),
        P(this, "dataType", "NUMBER"),
        P(this, "definition", dm.getDefinition())
    }
    static getDefinition() {
        return {
            type: "number",
            isNullable: !0
        }
    }
    evaluate(e) {
        let t = this.valueExpression.evaluate(e)
          , n = lk(t);
        return _e(n) ? null : {
            type: "number",
            value: n
        }
    }
}
;
function lk(e) {
    switch (e?.type) {
    case "number":
    case "string":
        {
            let t = Number(e.value);
            return Number.isFinite(t) ? t : null
        }
    }
    return null
}
var hm = class extends ka {
    constructor() {
        super(...arguments),
        P(this, "dataType", "STRING"),
        P(this, "definition", hm.getDefinition())
    }
    static getDefinition() {
        return {
            type: "string",
            isNullable: !0
        }
    }
    evaluate(e) {
        let t = this.valueExpression.evaluate(e)
          , n = ck(t);
        return _e(n) ? null : {
            type: "string",
            value: n
        }
    }
}
;
function ck(e) {
    switch (e?.type) {
    case "string":
    case "number":
        return String(e.value)
    }
    return null
}
function Vn(e, t, n) {
    let r = XV(e, t, n)
      , i = r instanceof we;
    if (r.canEvaluate() && !i) {
        let o = r.evaluate();
        return new we(r.definition,o)
    }
    return r
}
function XV(e, t, n) {
    switch (e.type) {
    case "Identifier":
        return YV(e, t);
    case "LiteralValue":
        return GV(e, n);
    case "FunctionCall":
        return qV(e, t);
    case "Case":
        return QV(e, t, n);
    case "UnaryOperation":
        return ZV(e, t);
    case "BinaryOperation":
        return JV(e, t);
    case "TypeCast":
        return l3(e, t);
    default:
        throw new Error(`Unsupported expression: ${JSON.stringify(e)}`)
    }
}
function YV(e, t) {
    return new tt(t,e.name)
}
function GV(e, t) {
    var n;
    let r = KV(e.value);
    switch (t?.type) {
    case "boolean":
        {
            let i = Ei(r.value);
            return we.fromBoolean(i)
        }
    case "date":
        {
            let i = ak(r.value);
            return we.fromDate(i)
        }
    case "enum":
        return ((n = r.value) == null ? void 0 : n.type) === "string" ? we.fromEnum(r.value.value) : r;
    case "number":
        {
            let i = lk(r.value);
            return we.fromNumber(i)
        }
    case "string":
        {
            let i = ck(r.value);
            return we.fromString(i)
        }
    }
    return r
}
function KV(e) {
    return iw(e) ? we.fromBoolean(e) : ow(e) ? we.fromDate(e) : mn(e) ? we.fromNumber(e) : ke(e) ? we.fromString(e) : we.fromNull()
}
function qV(e, t) {
    let n = e.arguments.map(r => Vn(r, t, void 0));
    switch (e.functionName) {
    case "CONTAINS":
        return new fu(n);
    case "STARTS_WITH":
        return new du(n);
    case "ENDS_WITH":
        return new hu(n);
    default:
        throw new Error(`Unsupported function name: ${e.functionName}`)
    }
}
function QV(e, t, n) {
    let r = e.value && Vn(e.value, t, void 0)
      , i = e.value && ma(e.value, t)
      , o = e.conditions.map(a => {
        let l = Vn(a.when, t, i)
          , c = Vn(a.then, t, n);
        return new UV(l,c)
    }
    )
      , s = e.else && Vn(e.else, t, n);
    return new eu(r,o,s)
}
function ZV(e, t) {
    let n = Vn(e.value, t, void 0);
    switch (e.operator) {
    case "not":
        return Vp(n);
    default:
        throw new Error(`Unsupported unary operator: ${e.operator}`)
    }
}
function Vp(e) {
    var t;
    if (e instanceof ca) {
        let n = e.valueExpression;
        return ((t = n.definition) == null ? void 0 : t.type) === "boolean" ? n : new pu(n)
    }
    if (e instanceof Po) {
        let {leftExpression: n, rightExpression: r} = e;
        return new Ro(n,r)
    }
    if (e instanceof Ro) {
        let {leftExpression: n, rightExpression: r} = e;
        return new Po(n,r)
    }
    if (e instanceof fa) {
        let {leftExpression: n, rightExpression: r} = e;
        return new pa(n,r)
    }
    if (e instanceof da) {
        let {leftExpression: n, rightExpression: r} = e;
        return new ha(n,r)
    }
    if (e instanceof ha) {
        let {leftExpression: n, rightExpression: r} = e;
        return new da(n,r)
    }
    if (e instanceof pa) {
        let {leftExpression: n, rightExpression: r} = e;
        return new fa(n,r)
    }
    if (e instanceof wi) {
        let {operandExpressions: n} = e
          , r = n.map(Vp);
        return new ea(r)
    }
    if (e instanceof wi) {
        let {operandExpressions: n} = e
          , r = n.map(Vp);
        return new wi(r)
    }
    return new ca(e)
}
function JV(e, t) {
    let n = e.operator !== "and" && e.operator !== "or" ? ma(e.left, t) || ma(e.right, t) : void 0
      , r = Vn(e.left, t, n)
      , i = Vn(e.right, t, n);
    switch (e.operator) {
    case "and":
        return e3(r, i);
    case "or":
        return t3(r, i);
    case "==":
        return n3(r, i);
    case "!=":
        return r3(r, i);
    case "<":
        return i3(r, i);
    case "<=":
        return o3(r, i);
    case ">":
        return s3(r, i);
    case ">=":
        return a3(r, i);
    default:
        throw new Error(`Unsupported binary operator: ${e.operator}`)
    }
}
function e3(e, t) {
    let n = [];
    return e instanceof wi ? n.push(...e.operandExpressions) : n.push(e),
    t instanceof wi ? n.push(...t.operandExpressions) : n.push(t),
    new wi(n)
}
function t3(e, t) {
    let n = [];
    return e instanceof ea ? n.push(...e.operandExpressions) : n.push(e),
    t instanceof ea ? n.push(...t.operandExpressions) : n.push(t),
    new ea(n)
}
function n3(e, t) {
    let n = e instanceof tt;
    return t instanceof tt && !n ? new Po(t,e) : new Po(e,t)
}
function r3(e, t) {
    let n = e instanceof tt;
    return t instanceof tt && !n ? new Ro(t,e) : new Ro(e,t)
}
function i3(e, t) {
    let n = e instanceof tt;
    return t instanceof tt && !n ? new ha(t,e) : new fa(e,t)
}
function o3(e, t) {
    let n = e instanceof tt;
    return t instanceof tt && !n ? new pa(t,e) : new da(e,t)
}
function s3(e, t) {
    let n = e instanceof tt;
    return t instanceof tt && !n ? new fa(t,e) : new ha(e,t)
}
function a3(e, t) {
    let n = e instanceof tt;
    return t instanceof tt && !n ? new da(t,e) : new pa(e,t)
}
function l3(e, t) {
    let n = Vn(e.value, t, void 0);
    switch (e.dataType) {
    case "BOOLEAN":
        return c3(n);
    case "DATE":
        return u3(n);
    case "NUMBER":
        return f3(n);
    case "STRING":
        return d3(n);
    default:
        throw new Error(`Unsupported data type: ${e.dataType}`)
    }
}
function c3(e) {
    var t;
    return ((t = e.definition) == null ? void 0 : t.type) === "boolean" ? e : new pu(e)
}
function u3(e) {
    var t;
    return ((t = e.definition) == null ? void 0 : t.type) === "date" ? e : new fm(e)
}
function f3(e) {
    var t;
    return ((t = e.definition) == null ? void 0 : t.type) === "number" ? e : new dm(e)
}
function d3(e) {
    var t;
    return ((t = e.definition) == null ? void 0 : t.type) === "string" ? e : new hm(e)
}
function ma(e, t) {
    switch (e.type) {
    case "Identifier":
        return h3(e, t);
    case "LiteralValue":
        return;
    case "FunctionCall":
        return p3(e);
    case "Case":
        return m3(e, t);
    case "UnaryOperation":
        return v3(e);
    case "BinaryOperation":
        return g3(e);
    case "TypeCast":
        return y3(e);
    default:
        throw new Error(`Unsupported expression: ${JSON.stringify(e)}`)
    }
}
function h3(e, t) {
    return t[e.name]
}
function p3(e) {
    switch (e.functionName) {
    case "CONTAINS":
        return fu.getDefinition();
    case "STARTS_WITH":
        return du.getDefinition();
    case "ENDS_WITH":
        return hu.getDefinition();
    default:
        throw new Error(`Unsupported function name: ${e.functionName}`)
    }
}
function m3(e, t) {
    let n = [];
    for (let r of e.conditions) {
        let i = ma(r.then, t);
        yt(i) || n.push(i)
    }
    if (e.else) {
        let r = ma(e.else, t);
        yt(r) || n.push(r)
    }
    return eu.getDefinition(n) ?? void 0
}
function v3(e) {
    switch (e.operator) {
    case "not":
        return ca.getDefinition();
    default:
        throw new Error(`Unsupported unary operator: ${e.operator}`)
    }
}
function g3(e) {
    switch (e.operator) {
    case "and":
    case "or":
        return ua.getDefinition();
    case "==":
    case "!=":
    case "<":
    case "<=":
    case ">":
    case ">=":
        return zn.getDefinition();
    default:
        throw new Error(`Unsupported binary operator: ${e.operator}`)
    }
}
function y3(e) {
    switch (e.dataType) {
    case "BOOLEAN":
        return pu.getDefinition();
    case "DATE":
        return fm.getDefinition();
    case "NUMBER":
        return dm.getDefinition();
    case "STRING":
        return hm.getDefinition();
    default:
        throw new Error(`Unsupported data type: ${e.dataType}`)
    }
}
function Ur(e, t) {
    return `(self: ${e}ms${t ? `, total: ${t}ms` : ""})`
}
function Nn(e) {
    return `(items: ${e})`
}
var Xr = class {
    constructor() {
        P(this, "executionTime", 0),
        P(this, "itemCount", 0)
    }
    async execute() {
        let e = performance.now()
          , t = await this._execute();
        return this.executionTime = performance.now() - e,
        this.itemCount = t.length,
        t
    }
}
  , uk = class extends Xr {
    constructor(e) {
        super(),
        this.collection = e
    }
    inspect() {
        return {
            label: `ScanCollectionPlan ${Ur(this.executionTime)} ${Nn(this.itemCount)}`
        }
    }
    async _execute() {
        return this.collection.scanItems()
    }
}
  , or = class extends Xr {
    constructor(e, t) {
        super(),
        this.index = e,
        this.query = t
    }
    inspect() {
        let e = []
          , t = n => {
            switch (n.type) {
            case "All":
                return n.type;
            case "Equals":
            case "NotEquals":
            case "LessThan":
            case "GreaterThan":
            case "Contains":
            case "StartsWith":
            case "EndsWith":
                return `${n.type} ${tn.stringify(n.value)}`;
            default:
                Lt(n)
            }
        }
        ;
        for (let n = 0; n < this.index.fields.length; n++) {
            let r = this.index.fields[n]
              , i = this.query[n];
            !r || r.type !== "Identifier" || !i || i.type === "All" || e.push(`${r.name} ${t(i)}`)
        }
        return {
            label: `LookupIndexPlan(${e.join(", ")}) ${Ur(this.executionTime)} ${Nn(this.itemCount)}`
        }
    }
    async _execute() {
        return this.index.lookupItems(this.query)
    }
}
  , b3 = class extends Xr {
    constructor(e) {
        super(),
        this.childPlans = e
    }
    inspect() {
        let e = Math.max(...this.childPlans.map(t => t.executionTime ?? 0));
        return {
            label: `UnionPlan ${Ur(this.executionTime - e, this.executionTime)} ${Nn(this.itemCount)}`,
            nodes: this.childPlans.map(t => t.inspect())
        }
    }
    async _execute() {
        let e = await Promise.all(this.childPlans.map(async n => {
            let r = await n.execute();
            return new tu(r)
        }
        )), t;
        for (let n of e)
            t ? t = t.union(n) : t = n;
        return t?.items() ?? []
    }
}
  , x3 = class extends Xr {
    constructor(e) {
        super(),
        this.childPlans = e
    }
    inspect() {
        let e = Math.max(...this.childPlans.map(t => t.executionTime ?? 0));
        return {
            label: `IntersectionPlan ${Ur(this.executionTime - e, this.executionTime)} ${Nn(this.itemCount)} ${Nn(this.itemCount)}`,
            nodes: this.childPlans.map(t => t.inspect())
        }
    }
    async _execute() {
        let e = await Promise.all(this.childPlans.map(async n => {
            let r = await n.execute();
            return new tu(r)
        }
        )), t;
        for (let n of e)
            t ? t = t.intersection(n) : t = n;
        return t?.items() ?? []
    }
}
  , S3 = class extends Xr {
    constructor(e, t, n, r) {
        super(),
        this.childPlan = e,
        this.collection = t,
        this.richTextResolver = n,
        this.select = r
    }
    inspect() {
        return {
            label: `ResolveItemsPlan ${Ur(this.executionTime - this.childPlan.executionTime, this.executionTime)} ${Nn(this.itemCount)}`,
            nodes: [this.childPlan.inspect()]
        }
    }
    async _execute() {
        let e = await this.childPlan.execute()
          , t = e.map(n => n.pointer);
        for (let n of e)
            for (let r of this.select) {
                if (r.type !== "Identifier")
                    continue;
                let i = n.data[r.name];
                i?.type === "richtext" && this.richTextResolver.resolve(i.value)
            }
        return this.collection.resolveItems(t)
    }
}
  , w3 = class extends Xr {
    constructor(e, t) {
        super(),
        this.childPlan = e,
        this.filterExpression = t
    }
    inspect() {
        return {
            label: `FilterItemsPlan(${this.filterExpression.stringify()}) ${Ur(this.executionTime - this.childPlan.executionTime, this.executionTime)} ${Nn(this.itemCount)} ${Nn(this.itemCount)}`,
            nodes: [this.childPlan.inspect()]
        }
    }
    async _execute() {
        return (await this.childPlan.execute()).filter(t => {
            let n = this.filterExpression.evaluate(t);
            return Ei(n)
        }
        )
    }
}
  , k3 = class extends Xr {
    constructor(e, t, n) {
        super(),
        this.childPlan = e,
        this.orderExpressions = t,
        this.collection = n
    }
    inspect() {
        return {
            label: `SortItemsPlan(${this.orderExpressions.map(t => `${t.expression.stringify()} ${t.direction.toUpperCase()}`).join(", ")}) ${Ur(this.executionTime - this.childPlan.executionTime, this.executionTime)} ${Nn(this.itemCount)}`,
            nodes: [this.childPlan.inspect()]
        }
    }
    async _execute() {
        return (await this.childPlan.execute()).sort( (t, n) => {
            for (let {expression: r, direction: i, collation: o} of this.orderExpressions) {
                let s = i === "asc";
                if (r instanceof tt && r.name === Ap) {
                    let c = this.collection.compareItems(t, n);
                    return s ? c : -c
                }
                let a = r.evaluate(t)
                  , l = r.evaluate(n);
                if (!tn.equal(a, l, o)) {
                    if (tn.lessThan(a, l, o) || Eo(a))
                        return s ? -1 : 1;
                    if (tn.greaterThan(a, l, o) || Eo(l))
                        return s ? 1 : -1;
                    throw new Error("Invalid comparison result.")
                }
            }
            return this.collection.compareItems(t, n)
        }
        )
    }
}
  , C3 = class {
    constructor(e, t, n) {
        this.expression = e,
        this.direction = t,
        this.collation = n
    }
}
  , T3 = class extends Xr {
    constructor(e, t, n) {
        super(),
        this.childPlan = e,
        this.offsetExpression = t,
        this.limitExpression = n
    }
    inspect() {
        var e, t;
        return {
            label: `SliceItemsPlan(LIMIT ${((e = this.limitExpression) == null ? void 0 : e.stringify()) ?? "Infinity"}, OFFSET ${((t = this.offsetExpression) == null ? void 0 : t.stringify()) ?? "0"}) ${Ur(this.executionTime - this.childPlan.executionTime, this.executionTime)} ${Nn(this.itemCount)}`,
            nodes: [this.childPlan.inspect()]
        }
    }
    getOffset() {
        var e;
        let t = (e = this.offsetExpression) == null ? void 0 : e.evaluate();
        if (!(Eo(t) || t.type !== "number"))
            return t.value
    }
    getLimit() {
        var e;
        let t = (e = this.limitExpression) == null ? void 0 : e.evaluate();
        if (!(Eo(t) || t.type !== "number"))
            return t.value
    }
    async _execute() {
        let e = await this.childPlan.execute()
          , t = this.getOffset() ?? 0
          , n = this.getLimit() ?? 1 / 0;
        return e.slice(t, t + n)
    }
}
  , tu = class extends Map {
    constructor(e=[]) {
        super();
        for (let t of e)
            this.set(t.pointer, t)
    }
    union(e) {
        let t = new tu;
        for (let[n,r] of this)
            t.set(n, r);
        for (let[n,r] of e)
            t.set(n, r);
        return t
    }
    intersection(e) {
        let t = new tu;
        for (let[n,r] of this)
            e.has(n) && t.set(n, r);
        return t
    }
    items() {
        return [...this.values()]
    }
}
  , E3 = class {
    constructor(e) {
        this.collection = e,
        P(this, "cache", new Map)
    }
    resolve(e) {
        let t = this.cache.get(e);
        if (t)
            return t;
        let n = this.collection.resolveRichText(e);
        return this.cache.set(e, n),
        n
    }
}
;
function P3(e, t) {
    var n;
    if (um(e)) {
        let r = aw(e)
          , i = (n = r?.[t.name]) == null ? void 0 : n.title;
        if (i)
            return `"${t.name}" /* ${i} */`
    }
    return `"${t.name}"`
}
function R3(e) {
    return typeof e.value == "string" ? `'${e.value}'` : e.value
}
function _3(e, t) {
    return `${t.functionName}(${t.arguments.map(n => Ht(e, n)).join(", ")})`
}
function I3(e, t) {
    let n = "CASE";
    t.value && (n += ` ${Ht(e, t.value)}`);
    for (let r of t.conditions)
        n += ` WHEN ${Ht(e, r.when)} THEN ${Ht(e, r.then)}`;
    return t.else && (n += ` ELSE ${t.else}`),
    n += " END",
    n
}
function F3(e, t) {
    let n = Ht(e, t.value);
    return `${t.operator.toUpperCase()} ${n}`
}
function L3(e, t) {
    let n = Ht(e, t.left)
      , r = Ht(e, t.right)
      , i = t.operator.toUpperCase();
    return `${n} ${i} ${r}`
}
function M3(e, t) {
    return `CAST(${Ht(e, t.value)} as ${t.dataType})`
}
function Ht(e, t) {
    switch (t.type) {
    case "Identifier":
        return P3(e, t);
    case "LiteralValue":
        return R3(t);
    case "FunctionCall":
        return _3(e, t);
    case "Case":
        return I3(e, t);
    case "UnaryOperation":
        return F3(e, t);
    case "BinaryOperation":
        return L3(e, t);
    case "TypeCast":
        return M3(e, t);
    default:
        Lt(t)
    }
}
function O3(e) {
    let t = "";
    return e.split(/\s+/u).forEach(r => {
        r !== "" && (["SELECT", "FROM", "WHERE", "ORDER", "LIMIT", "OFFSET"].includes(r) ? t += `
${r}` : ["AND", "OR"].includes(r) ? t += `
	${r}` : t += ` ${r}`)
    }
    ),
    t.trim()
}
function D3(e) {
    let t = "";
    return t += `SELECT ${e.select.map(n => {
        letr = Ht(e.from.data, n);
        return n.alias ? `${r} AS ${n.alias}` : r
    }
    ).join(", ")}`,
    um(e.from.data) ? t += ` FROM ${e.from.data.displayName}` : t += ` FROM ${e.from.data.displayName}`,
    e.where && (t += ` WHERE ${Ht(e.from.data, e.where)}`),
    e.orderBy && (t += ` ORDER BY ${e.orderBy.map(n => `${Ht(e.from.data, n)} ${n.direction ?? "asc"}`).join(", ")}`),
    e.limit && (t += ` LIMIT ${Ht(e.from.data, e.limit)}`),
    e.offset && (t += ` OFFSET ${Ht(e.from.data, e.offset)}`),
    O3(t)
}
var A3 = NV("query-engine");
function V3({data: e}, t) {
    if (HV(e))
        return new WV(e,t);
    if (jV(e))
        return e;
    if (um(e)) {
        for (; t; ) {
            let n = e.collectionByLocaleId[t.id];
            if (n)
                return n;
            t = t.fallback
        }
        return e.collectionByLocaleId.default
    }
    Lt(e, "Unsupported collection type")
}
var G$ = class {
    async query(e, t) {
        let n = V3(e.from, t)
          , r = new E3(n)
          , i = this.createQueryPlan(n, r, e)
          , o = await this.executeQueryPlan(n, r, e, i);
        return A3.debug(`Query:
${D3(e)}

${(0,
        zV.default)(i.inspect())}`),
        o
    }
    createQueryPlan(e, t, n) {
        var r;
        let i = new uk(e);
        if (n.where) {
            let l = vt.from(n.where, e.schema);
            i = Bp(e, l)
        }
        let o = (r = n.orderBy) == null ? void 0 : r.map(l => new C3(vt.from(l, e.schema),l.direction ?? "asc",{
            type: 0
        }));
        i = new k3(i,o ?? [],e);
        let s;
        n.offset && (s = vt.from(n.offset, e.schema));
        let a;
        return n.limit && (a = vt.from(n.limit, e.schema)),
        (s || a) && (i = new T3(i,s,a)),
        n.select.length > 0 && (i = new S3(i,e,t,n.select)),
        i
    }
    async executeQueryPlan(e, t, n, r) {
        let i = await r.execute();
        return Promise.all(i.map(async o => {
            let s = {};
            for (let a of n.select) {
                let l = vt.from(a, e.schema)
                  , c = B3(a)
                  , u = l.evaluate(o);
                s[c] = await z3(t, u)
            }
            return s
        }
        ))
    }
}
;
function B3(e) {
    if (e.alias)
        return e.alias;
    if (e.type === "Identifier")
        return e.name;
    throw new Error("Can't serialize expression")
}
async function z3(e, t) {
    return Eo(t) ? null : t.type === "richtext" ? e.resolve(t.value) : t.value
}
function Bp(e, t) {
    if (t instanceof wi) {
        let n = t.operandExpressions.map(r => Bp(e, r));
        return new x3(n)
    }
    if (t instanceof ea) {
        let n = t.operandExpressions.map(r => Bp(e, r));
        return new b3(n)
    }
    return N3(e, t) ?? H3(e, t)
}
function N3(e, t) {
    var n, r;
    if (t instanceof zn)
        return Tp(e, t);
    if (t instanceof wa)
        return $3(e, t);
    if (t instanceof tt && ((n = t.definition) == null ? void 0 : n.type) === "boolean") {
        let i = we.fromBoolean(!0)
          , o = new Po(t,i);
        return Tp(e, o)
    }
    if (t instanceof ca && t.valueExpression instanceof tt && ((r = t.valueExpression.definition) == null ? void 0 : r.type) === "boolean") {
        let i = we.fromBoolean(!0)
          , o = new Ro(t.valueExpression,i);
        return Tp(e, o)
    }
}
function Tp(e, t) {
    let n = t.leftExpression
      , r = t.rightExpression;
    if (r instanceof we)
        for (let i of e.indexes) {
            let o = i.fields[0];
            if (yt(o))
                continue;
            let s = vt.from(o, e.schema);
            if (!n.equals(s))
                continue;
            let a = new Array(i.fields.length - 1).fill({
                type: "All"
            });
            if (t instanceof Po && i.supportedLookupTypes.includes("Equals"))
                return new or(i,[{
                    type: "Equals",
                    value: r.evaluate()
                }, ...a]);
            if (t instanceof Ro && i.supportedLookupTypes.includes("NotEquals"))
                return new or(i,[{
                    type: "NotEquals",
                    value: r.evaluate()
                }, ...a]);
            if (t instanceof fa && i.supportedLookupTypes.includes("LessThan"))
                return new or(i,[{
                    type: "LessThan",
                    value: r.evaluate(),
                    inclusive: !1
                }, ...a]);
            if (t instanceof da && i.supportedLookupTypes.includes("LessThan"))
                return new or(i,[{
                    type: "LessThan",
                    value: r.evaluate(),
                    inclusive: !0
                }, ...a]);
            if (t instanceof ha && i.supportedLookupTypes.includes("GreaterThan"))
                return new or(i,[{
                    type: "GreaterThan",
                    value: r.evaluate(),
                    inclusive: !1
                }, ...a]);
            if (t instanceof pa && i.supportedLookupTypes.includes("GreaterThan"))
                return new or(i,[{
                    type: "GreaterThan",
                    value: r.evaluate(),
                    inclusive: !0
                }, ...a])
        }
}
function $3(e, t) {
    if (t.argumentExpressions.length !== 2)
        return;
    let n = t.argumentExpressions[0]
      , r = t.argumentExpressions[1];
    if (!yt(n) && !yt(r) && r instanceof we)
        for (let i of e.indexes) {
            let o = i.fields[0];
            if (yt(o))
                continue;
            let s = vt.from(o, e.schema);
            if (!n.equals(s))
                continue;
            let a = new Array(i.fields.length - 1).fill({
                type: "All"
            });
            if (t instanceof fu && i.supportedLookupTypes.includes("Contains"))
                return new or(i,[{
                    type: "Contains",
                    value: r.evaluate()
                }, ...a]);
            if (t instanceof du && i.supportedLookupTypes.includes("StartsWith"))
                return new or(i,[{
                    type: "StartsWith",
                    value: r.evaluate()
                }, ...a]);
            if (t instanceof hu && i.supportedLookupTypes.includes("EndsWith"))
                return new or(i,[{
                    type: "EndsWith",
                    value: r.evaluate()
                }, ...a])
        }
}
function H3(e, t) {
    let n = new uk(e);
    return new w3(n,t)
}
var j3 = class {
    constructor() {
        P(this, "entries", new Map)
    }
    set(e, t, n, r) {
        let i = this.entries.get(e);
        switch (t) {
        case "transformTemplate":
            {
                re(typeof n == "string", `transformTemplate must be a string, received: ${n}`),
                i ? i.transformTemplate = n : this.entries.set(e, {
                    transformTemplate: n
                });
                break
            }
        case "initial":
        case "animate":
            {
                re(typeof n == "object", `${t} must be a valid object, received: ${n}`),
                i ? (i[t] = n,
                i.variantHash || (i.variantHash = r)) : this.entries.set(e, {
                    [t]: n,
                    variantHash: r
                });
                break
            }
        default:
            break
        }
    }
    clear() {
        this.entries.clear()
    }
    toObject() {
        return Object.fromEntries(this.entries)
    }
}
  , W3 = new j3
  , K$ = (e, t, n, r) => (lr() || W3.set(t, e, n, r),
n)
  , q$ = "__Appear_Animation_Transform__";
var Q$ = "data-framer-appear-id"
  , Z$ = "data-framer-appear-animation";
function U3(e, t, n) {
    return b.useCallback(r => {
        var i, o, s;
        return n ? e ? t ? Object.assign({}, (i = n[e]) == null ? void 0 : i[r], (o = n[t]) == null ? void 0 : o[r]) : ((s = n[e]) == null ? void 0 : s[r]) || {} : {} : {}
    }
    , [e, t, n])
}
function X3(e) {
    for (let[t,n] of Object.entries(e))
        if (jt.matchMedia(n).matches)
            return t
}
function n8(e, t, n=!0) {
    let r = M(zw)
      , i = D(lr() ? X3(t) ?? e : e)
      , o = D(n && r ? e : i.current)
      , s = lu()
      , a = Xy()
      , l = le(c => {
        (c !== i.current || c !== o.current) && a( () => {
            i.current = o.current = c,
            cr( () => {
                s()
            }
            )
        }
        )
    }
    , [a, s]);
    return pw( () => {
        !n || r !== !0 || l(i.current)
    }
    , []),
    $( () => {
        let c = [];
        for (let[u,f] of Object.entries(t)) {
            let d = jt.matchMedia(f)
              , m = g => {
                g.matches && l(u)
            }
            ;
            Y3(d, m),
            c.push([d, m])
        }
        return () => c.forEach( ([u,f]) => G3(u, f))
    }
    , [t, l]),
    [i.current, o.current]
}
function Y3(e, t) {
    e.addEventListener ? e.addEventListener("change", t) : e.addListener(t)
}
function G3(e, t) {
    e.removeEventListener ? e.removeEventListener("change", t) : e.removeListener(t)
}
function fk() {
    return Fe.current() === "CANVAS"
}
function K3(e, t) {
    return `${e}-${t}`
}
function q3(e, t) {
    let r = e.indexOf(t) + 1;
    r >= e.length && (r = 0);
    let i = e[r];
    return re(i !== void 0, "nextVariant should be defined"),
    i
}
function Q3(e, t) {
    if (e) {
        if (t) {
            let n = e[t];
            if (n)
                return n
        }
        return e.default
    }
}
function SS(e, t, n) {
    let {hover: r, pressed: i} = e || {};
    if (i && n)
        return "pressed";
    if (r && t)
        return "hover"
}
function Z3(e, t) {
    let n = t[e];
    return n || `framer-v-${e}`
}
function wS(e, t, n) {
    return e && n.has(e) ? e : t
}
var J3 = Symbol("cycle");
function d8({variant: e, defaultVariant: t, transitions: n, enabledGestures: r, cycleOrder: i=[], variantProps: o={}, variantClassNames: s={}}) {
    let a = lu()
      , l = $n( () => new Set(i))
      , c = b.useRef({
        isHovered: !1,
        isPressed: !1,
        baseVariant: wS(e, t, l),
        lastVariant: e,
        gestureVariant: void 0,
        defaultVariant: t,
        enabledGestures: r,
        cycleOrder: i,
        transitions: n
    })
      , u = b.useCallback(x => {
        let {isHovered: C, isPressed: w, enabledGestures: T, defaultVariant: E} = c.current
          , _ = wS(x, E, l)
          , R = SS(T?.[_], C, w)
          , B = R ? K3(_, R) : void 0;
        return [_, B]
    }
    , [l])
      , f = b.useCallback( ({isHovered: x, isPressed: C}) => {
        x !== void 0 && (c.current.isHovered = x),
        C !== void 0 && (c.current.isPressed = C);
        let {baseVariant: w, gestureVariant: T, defaultVariant: E} = c.current
          , [_,R] = u(w);
        (_ !== w || R !== T) && (c.current.baseVariant = _ || E,
        c.current.gestureVariant = R,
        a())
    }
    , [u, a])
      , d = b.useCallback(x => {
        let {defaultVariant: C, cycleOrder: w, baseVariant: T, gestureVariant: E} = c.current
          , _ = x === J3 ? q3(w || [], T || C) : x
          , [R,B] = u(_);
        (R !== T || B !== E) && (c.current.baseVariant = R || C,
        c.current.gestureVariant = B,
        a())
    }
    , [u, a]);
    if (e !== c.current.lastVariant) {
        let[x,C] = u(e);
        c.current.lastVariant = x,
        (x !== c.current.baseVariant || C !== c.current.gestureVariant) && (c.current.baseVariant = x,
        c.current.gestureVariant = C)
    }
    let {baseVariant: m, gestureVariant: g, defaultVariant: y, enabledGestures: S, isHovered: h, isPressed: p} = c.current
      , v = U3(c.current.baseVariant, c.current.gestureVariant, o);
    return b.useMemo( () => {
        let x = [];
        return m !== y && x.push(m),
        g && x.push(g),
        {
            variants: x,
            baseVariant: m,
            gestureVariant: g,
            transition: Q3(c.current.transitions, m),
            setVariant: d,
            setGestureState: f,
            addVariantProps: v,
            classNames: rm(Z3(m, s), SS(S?.[m], h, p))
        }
    }
    , [m, g, h, p, v, d, y, S, f, s])
}
var e4 = b.createContext(void 0)
  , t4 = () => b.useContext(e4);
var n4 = {
    Arial: {
        Regular: {
            selector: "Arial",
            weight: void 0
        },
        Black: {
            selector: "Arial-Black",
            weight: void 0
        },
        Narrow: {
            selector: "Arial Narrow",
            weight: void 0
        },
        "Rounded Bold": {
            selector: "Arial Rounded MT Bold",
            weight: void 0
        }
    },
    Avenir: {
        Book: {
            selector: "Avenir",
            weight: void 0
        },
        Light: {
            selector: "Avenir-Light",
            weight: void 0
        },
        Medium: {
            selector: "Avenir-Medium",
            weight: void 0
        },
        Heavy: {
            selector: "Avenir-Heavy",
            weight: void 0
        },
        Black: {
            selector: "Avenir-Black",
            weight: void 0
        }
    },
    "Avenir Next": {
        Regular: {
            selector: "Avenir Next",
            weight: void 0
        },
        "Ultra Light": {
            selector: "AvenirNext-UltraLight",
            weight: void 0
        },
        Medium: {
            selector: "AvenirNext-Medium",
            weight: void 0
        },
        "Demi Bold": {
            selector: "AvenirNext-DemiBold",
            weight: void 0
        },
        Heavy: {
            selector: "AvenirNext-Heavy",
            weight: void 0
        }
    },
    "Avenir Next Condensed": {
        Regular: {
            selector: "Avenir Next Condensed",
            weight: void 0
        },
        "Ultra Light": {
            selector: "AvenirNextCondensed-UltraLight",
            weight: void 0
        },
        Medium: {
            selector: "AvenirNextCondensed-Medium",
            weight: void 0
        },
        "Demi Bold": {
            selector: "AvenirNextCondensed-DemiBold",
            weight: void 0
        },
        Heavy: {
            selector: "AvenirNextCondensed-Heavy",
            weight: void 0
        }
    },
    Baskerville: {
        Regular: {
            selector: "Baskerville",
            weight: void 0
        },
        "Semi Bold": {
            selector: "Baskerville-SemiBold",
            weight: void 0
        }
    },
    "Bodoni 72": {
        Book: {
            selector: "Bodoni 72",
            weight: void 0
        },
        Oldstyle: {
            selector: "Bodoni 72 Oldstyle",
            weight: void 0
        },
        Smallcaps: {
            selector: "Bodoni 72 Smallcaps",
            weight: void 0
        }
    },
    Courier: {
        Regular: {
            selector: "Courier",
            weight: void 0
        }
    },
    "Courier New": {
        Regular: {
            selector: "Courier New",
            weight: void 0
        }
    },
    Futura: {
        Medium: {
            selector: "Futura",
            weight: void 0
        },
        Condensed: {
            selector: "Futura-CondensedMedium",
            weight: void 0
        },
        "Condensed ExtraBold": {
            selector: "Futura-CondensedExtraBold",
            weight: void 0
        }
    },
    Georgia: {
        Regular: {
            selector: "Georgia",
            weight: void 0
        }
    },
    "Gill Sans": {
        Regular: {
            selector: "Gill Sans",
            weight: void 0
        },
        Light: {
            selector: "GillSans-Light",
            weight: void 0
        },
        SemiBold: {
            selector: "GillSans-SemiBold",
            weight: void 0
        },
        UltraBold: {
            selector: "GillSans-UltraBold",
            weight: void 0
        }
    },
    Helvetica: {
        Regular: {
            selector: "Helvetica",
            weight: void 0
        },
        Light: {
            selector: "Helvetica-Light",
            weight: void 0
        },
        Bold: {
            selector: "Helvetica-Bold",
            weight: void 0
        },
        Oblique: {
            selector: "Helvetica-Oblique",
            weight: void 0
        },
        "Light Oblique": {
            selector: "Helvetica-LightOblique",
            weight: void 0
        },
        "Bold Oblique": {
            selector: "Helvetica-BoldOblique",
            weight: void 0
        }
    },
    "Helvetica Neue": {
        Regular: {
            selector: "Helvetica Neue",
            weight: void 0
        },
        UltraLight: {
            selector: "HelveticaNeue-UltraLight",
            weight: void 0
        },
        Thin: {
            selector: "HelveticaNeue-Thin",
            weight: void 0
        },
        Light: {
            selector: "HelveticaNeue-Light",
            weight: void 0
        },
        Medium: {
            selector: "HelveticaNeue-Medium",
            weight: void 0
        },
        Bold: {
            selector: "HelveticaNeue-Bold",
            weight: void 0
        },
        Italic: {
            selector: "HelveticaNeue-Italic",
            weight: void 0
        },
        "UltraLight Italic": {
            selector: "HelveticaNeue-UltraLightItalic",
            weight: void 0
        },
        "Thin Italic": {
            selector: "HelveticaNeue-ThinItalic",
            weight: void 0
        },
        "Light Italic": {
            selector: "HelveticaNeue-LightItalic",
            weight: void 0
        },
        "Medium Italic": {
            selector: "HelveticaNeue-MediumItalic",
            weight: void 0
        },
        "Bold Italic": {
            selector: "HelveticaNeue-BoldItalic",
            weight: void 0
        },
        "Condensed Bold": {
            selector: "HelveticaNeue-CondensedBold",
            weight: void 0
        },
        "Condensed Black": {
            selector: "HelveticaNeue-CondensedBlack",
            weight: void 0
        }
    },
    "Hoefler Text": {
        Regular: {
            selector: "Hoefler Text",
            weight: void 0
        }
    },
    Impact: {
        Regular: {
            selector: "Impact",
            weight: void 0
        }
    },
    "Lucida Grande": {
        Regular: {
            selector: "Lucida Grande",
            weight: void 0
        }
    },
    Menlo: {
        Regular: {
            selector: "Menlo",
            weight: void 0
        }
    },
    Monaco: {
        Regular: {
            selector: "Monaco",
            weight: void 0
        }
    },
    Optima: {
        Regular: {
            selector: "Optima",
            weight: void 0
        },
        ExtraBlack: {
            selector: "Optima-ExtraBlack",
            weight: void 0
        }
    },
    Palatino: {
        Regular: {
            selector: "Palatino",
            weight: void 0
        }
    },
    "SF Pro Display": {
        Regular: {
            selector: "__SF-UI-Display-Regular__",
            weight: 400
        },
        Ultralight: {
            selector: "__SF-UI-Display-Ultralight__",
            weight: 100
        },
        Thin: {
            selector: "__SF-UI-Display-Thin__",
            weight: 200
        },
        Light: {
            selector: "__SF-UI-Display-Light__",
            weight: 300
        },
        Medium: {
            selector: "__SF-UI-Display-Medium__",
            weight: 500
        },
        Semibold: {
            selector: "__SF-UI-Display-Semibold__",
            weight: 600
        },
        Bold: {
            selector: "__SF-UI-Display-Bold__",
            weight: 700
        },
        Heavy: {
            selector: "__SF-UI-Display-Heavy__",
            weight: 800
        },
        Black: {
            selector: "__SF-UI-Display-Black__",
            weight: 900
        },
        Italic: {
            selector: "__SF-UI-Display-Italic__",
            weight: 400
        },
        "Ultralight Italic": {
            selector: "__SF-UI-Display-Ultralight-Italic__",
            weight: 100
        },
        "Thin Italic": {
            selector: "__SF-UI-Display-Thin-Italic__",
            weight: 200
        },
        "Light Italic": {
            selector: "__SF-UI-Display-Light-Italic__",
            weight: 300
        },
        "Medium Italic": {
            selector: "__SF-UI-Display-Medium-Italic__",
            weight: 500
        },
        "Semibold Italic": {
            selector: "__SF-UI-Display-Semibold-Italic__",
            weight: 600
        },
        "Bold Italic": {
            selector: "__SF-UI-Display-Bold-Italic__",
            weight: 700
        },
        "Heavy Italic": {
            selector: "__SF-UI-Display-Heavy-Italic__",
            weight: 800
        },
        "Black Italic": {
            selector: "__SF-UI-Display-Black-Italic__",
            weight: 900
        }
    },
    "SF Pro Display Condensed": {
        Regular: {
            selector: "__SF-UI-Display-Condensed-Regular__",
            weight: 400
        },
        Ultralight: {
            selector: "__SF-UI-Display-Condensed-Ultralight__",
            weight: 100
        },
        Thin: {
            selector: "__SF-UI-Display-Condensed-Thin__",
            weight: 200
        },
        Light: {
            selector: "__SF-UI-Display-Condensed-Light__",
            weight: 300
        },
        Medium: {
            selector: "__SF-UI-Display-Condensed-Medium__",
            weight: 500
        },
        Semibold: {
            selector: "__SF-UI-Display-Condensed-Semibold__",
            weight: 600
        },
        Bold: {
            selector: "__SF-UI-Display-Condensed-Bold__",
            weight: 700
        },
        Heavy: {
            selector: "__SF-UI-Display-Condensed-Heavy__",
            weight: 800
        },
        Black: {
            selector: "__SF-UI-Display-Condensed-Black__",
            weight: 900
        }
    },
    "SF Pro Text": {
        Regular: {
            selector: "__SF-UI-Text-Regular__",
            weight: 400
        },
        Light: {
            selector: "__SF-UI-Text-Light__",
            weight: 200
        },
        Medium: {
            selector: "__SF-UI-Text-Medium__",
            weight: 500
        },
        Semibold: {
            selector: "__SF-UI-Text-Semibold__",
            weight: 600
        },
        Bold: {
            selector: "__SF-UI-Text-Bold__",
            weight: 700
        },
        Heavy: {
            selector: "__SF-UI-Text-Heavy__",
            weight: 800
        },
        Italic: {
            selector: "__SF-UI-Text-Italic__",
            weight: 400
        },
        "Light Italic": {
            selector: "__SF-UI-Text-Light-Italic__",
            weight: 200
        },
        "Medium Italic": {
            selector: "__SF-UI-Text-Medium-Italic__",
            weight: 500
        },
        "Semibold Italic": {
            selector: "__SF-UI-Text-Semibold-Italic__",
            weight: 600
        },
        "Bold Italic": {
            selector: "__SF-UI-Text-Bold-Italic__",
            weight: 700
        },
        "Heavy Italic": {
            selector: "__SF-UI-Text-Heavy-Italic__",
            weight: 800
        }
    },
    "SF Pro Text Condensed": {
        Regular: {
            selector: "__SF-UI-Text-Condensed-Regular__",
            weight: 400
        },
        Light: {
            selector: "__SF-UI-Text-Condensed-Light__",
            weight: 200
        },
        Medium: {
            selector: "__SF-UI-Text-Condensed-Medium__",
            weight: 500
        },
        Semibold: {
            selector: "__SF-UI-Text-Condensed-Semibold__",
            weight: 600
        },
        Bold: {
            selector: "__SF-UI-Text-Condensed-Bold__",
            weight: 700
        },
        Heavy: {
            selector: "__SF-UI-Text-Condensed-Heavy__",
            weight: 800
        }
    },
    Tahoma: {
        Regular: {
            selector: "Tahoma",
            weight: void 0
        }
    },
    Times: {
        Regular: {
            selector: "Times",
            weight: void 0
        }
    },
    "Times New Roman": {
        Regular: {
            selector: "Times New Roman",
            weight: void 0
        }
    },
    Trebuchet: {
        Regular: {
            selector: "Trebuchet MS",
            weight: void 0
        }
    },
    Verdana: {
        Regular: {
            selector: "Verdana",
            weight: void 0
        }
    }
}
  , r4 = {
    "__SF-Compact-Display-Regular__": "SFCompactDisplay-Regular|.SFCompactDisplay-Regular",
    "__SF-Compact-Display-Ultralight__": "SFCompactDisplay-Ultralight|.SFCompactDisplay-Ultralight",
    "__SF-Compact-Display-Thin__": "SFCompactDisplay-Thin|.SFCompactDisplay-Thin",
    "__SF-Compact-Display-Light__": "SFCompactDisplay-Light|.SFCompactDisplay-Light",
    "__SF-Compact-Display-Medium__": "SFCompactDisplay-Medium|.SFCompactDisplay-Medium",
    "__SF-Compact-Display-Semibold__": "SFCompactDisplay-Semibold|.SFCompactDisplay-Semibold",
    "__SF-Compact-Display-Heavy__": "SFCompactDisplay-Heavy|.SFCompactDisplay-Heavy",
    "__SF-Compact-Display-Black__": "SFCompactDisplay-Black|.SFCompactDisplay-Black",
    "__SF-Compact-Display-Bold__": "SFCompactDisplay-Bold|.SFCompactDisplay-Bold",
    "__SF-UI-Text-Regular__": ".SFNSText|SFProText-Regular|SFUIText-Regular|.SFUIText",
    "__SF-UI-Text-Light__": ".SFNSText-Light|SFProText-Light|SFUIText-Light|.SFUIText-Light",
    "__SF-UI-Text-Medium__": ".SFNSText-Medium|SFProText-Medium|SFUIText-Medium|.SFUIText-Medium",
    "__SF-UI-Text-Semibold__": ".SFNSText-Semibold|SFProText-Semibold|SFUIText-Semibold|.SFUIText-Semibold",
    "__SF-UI-Text-Bold__": ".SFNSText-Bold|SFProText-Bold|SFUIText-Bold|.SFUIText-Bold",
    "__SF-UI-Text-Heavy__": ".SFNSText-Heavy|SFProText-Heavy|.SFUIText-Heavy",
    "__SF-UI-Text-Italic__": ".SFNSText-Italic|SFProText-Italic|SFUIText-Italic|.SFUIText-Italic",
    "__SF-UI-Text-Light-Italic__": ".SFNSText-LightItalic|SFProText-LightItalic|SFUIText-LightItalic|.SFUIText-LightItalic",
    "__SF-UI-Text-Medium-Italic__": ".SFNSText-MediumItalic|SFProText-MediumItalic|SFUIText-MediumItalic|.SFUIText-MediumItalic",
    "__SF-UI-Text-Semibold-Italic__": ".SFNSText-SemiboldItalic|SFProText-SemiboldItalic|SFUIText-SemiboldItalic|.SFUIText-SemiboldItalic",
    "__SF-UI-Text-Bold-Italic__": ".SFNSText-BoldItalic|SFProText-BoldItalic|SFUIText-BoldItalic|.SFUIText-BoldItalic",
    "__SF-UI-Text-Heavy-Italic__": ".SFNSText-HeavyItalic|SFProText-HeavyItalic|.SFUIText-HeavyItalic",
    "__SF-Compact-Text-Regular__": "SFCompactText-Regular|.SFCompactText-Regular",
    "__SF-Compact-Text-Light__": "SFCompactText-Light|.SFCompactText-Light",
    "__SF-Compact-Text-Medium__": "SFCompactText-Medium|.SFCompactText-Medium",
    "__SF-Compact-Text-Semibold__": "SFCompactText-Semibold|.SFCompactText-Semibold",
    "__SF-Compact-Text-Bold__": "SFCompactText-Bold|.SFCompactText-Bold",
    "__SF-Compact-Text-Heavy__": "SFCompactText-Heavy|.SFCompactText-Heavy",
    "__SF-Compact-Text-Italic__": "SFCompactText-Italic|.SFCompactText-Italic",
    "__SF-Compact-Text-Light-Italic__": "SFCompactText-LightItalic|.SFCompactText-LightItalic",
    "__SF-Compact-Text-Medium-Italic__": "SFCompactText-MediumItalic|.SFCompactText-MediumItalic",
    "__SF-Compact-Text-Semibold-Italic__": "SFCompactText-SemiboldItalic|.SFCompactText-SemiboldItalic",
    "__SF-Compact-Text-Bold-Italic__": "SFCompactText-BoldItalic|.SFCompactText-BoldItalic",
    "__SF-Compact-Text-Heavy-Italic__": "SFCompactText-HeavyItalic|.SFCompactText-HeavyItalic",
    "__SF-UI-Display-Condensed-Regular__": ".SFNSDisplayCondensed-Regular|SFUIDisplayCondensed-Regular|.SFUIDisplayCondensed-Regular",
    "__SF-UI-Display-Condensed-Ultralight__": ".SFNSDisplayCondensed-Ultralight|SFUIDisplayCondensed-Ultralight|.SFUIDisplayCondensed-Ultralight",
    "__SF-UI-Display-Condensed-Thin__": ".SFNSDisplayCondensed-Thin|SFUIDisplayCondensed-Thin|.SFUIDisplayCondensed-Thin",
    "__SF-UI-Display-Condensed-Light__": ".SFNSDisplayCondensed-Light|SFUIDisplayCondensed-Light|.SFUIDisplayCondensed-Light",
    "__SF-UI-Display-Condensed-Medium__": ".SFNSDisplayCondensed-Medium|SFUIDisplayCondensed-Medium|.SFUIDisplayCondensed-Medium",
    "__SF-UI-Display-Condensed-Semibold__": ".SFNSDisplayCondensed-Semibold|SFUIDisplayCondensed-Semibold|.SFUIDisplayCondensed-Semibold",
    "__SF-UI-Display-Condensed-Bold__": ".SFNSDisplayCondensed-Bold|SFUIDisplayCondensed-Bold|.SFUIDisplayCondensed-Bold",
    "__SF-UI-Display-Condensed-Heavy__": ".SFNSDisplayCondensed-Heavy|SFUIDisplayCondensed-Heavy|.SFUIDisplayCondensed-Heavy",
    "__SF-UI-Display-Condensed-Black__": ".SFNSDisplayCondensed-Black|.SFUIDisplayCondensed-Black",
    "__SF-UI-Display-Regular__": ".SFNSDisplay|SFProDisplay-Regular|SFUIDisplay-Regular|.SFUIDisplay",
    "__SF-UI-Display-Ultralight__": ".SFNSDisplay-Ultralight|SFProDisplay-Ultralight|SFUIDisplay-Ultralight|.SFUIDisplay-Ultralight",
    "__SF-UI-Display-Thin__": ".SFNSDisplay-Thin|SFProDisplay-Thin|SFUIDisplay-Thin|.SFUIDisplay-Thin",
    "__SF-UI-Display-Light__": ".SFNSDisplay-Light|SFProDisplay-Light|SFUIDisplay-Light|.SFUIDisplay-Light",
    "__SF-UI-Display-Medium__": ".SFNSDisplay-Medium|SFProDisplay-Medium|SFUIDisplay-Medium|.SFUIDisplay-Medium",
    "__SF-UI-Display-Semibold__": ".SFNSDisplay-Semibold|SFProDisplay-Semibold|SFUIDisplay-Semibold|.SFUIDisplay-Semibold",
    "__SF-UI-Display-Bold__": ".SFNSDisplay-Bold|SFProDisplay-Bold|SFUIDisplay-Bold|.SFUIDisplay-Bold",
    "__SF-UI-Display-Heavy__": ".SFNSDisplay-Heavy|SFProDisplay-Heavy|SFUIDisplay-Heavy|.SFUIDisplay-Heavy",
    "__SF-UI-Display-Black__": ".SFNSDisplay-Black|SFProDisplay-Black|.SFUIDisplay-Black",
    "__SF-UI-Display-Italic__": ".SFNSDisplay-Italic|SFProDisplay-Italic|SFUIDisplay-Italic",
    "__SF-UI-Display-Ultralight-Italic__": ".SFNSDisplay-UltralightItalic|SFProDisplay-UltralightItalic|SFUIDisplay-UltralightItalic|.SFUIDisplay-UltralightItalic",
    "__SF-UI-Display-Thin-Italic__": ".SFNSDisplay-ThinItalic|SFProDisplay-ThinItalic|SFUIDisplay-ThinItalic|.SFUIDisplay-ThinItalic",
    "__SF-UI-Display-Light-Italic__": ".SFNSDisplay-LightItalic|SFProDisplay-LightItalic|SFUIDisplay-LightItalic|.SFUIDisplay-LightItalic",
    "__SF-UI-Display-Medium-Italic__": ".SFNSDisplay-MediumItalic|SFProDisplay-MediumItalic|SFUIDisplay-MediumItalic|.SFUIDisplay-MediumItalic",
    "__SF-UI-Display-Semibold-Italic__": ".SFNSDisplay-SemiboldItalic|SFProDisplay-SemiboldItalic|SFUIDisplay-SemiboldItalic|.SFUIDisplay-SemiboldItalic",
    "__SF-UI-Display-Bold-Italic__": ".SFNSDisplay-BoldItalic|SFProDisplay-BoldItalic|SFUIDisplay-BoldItalic|.SFUIDisplay-BoldItalic",
    "__SF-UI-Display-Heavy-Italic__": ".SFNSDisplay-HeavyItalic|SFProDisplay-HeavyItalic|SFUIDisplay-HeavyItalic|.SFUIDisplay-HeavyItalic",
    "__SF-UI-Display-Black-Italic__": ".SFNSDisplay-BlackItalic|SFProDisplay-BlackItalic|.SFUIDisplay-BlackItalic",
    "__SF-UI-Text-Condensed-Regular__": ".SFNSTextCondensed-Regular|SFUITextCondensed-Regular|.SFUITextCondensed-Regular",
    "__SF-UI-Text-Condensed-Light__": ".SFNSTextCondensed-Light|SFUITextCondensed-Light|.SFUITextCondensed-Light",
    "__SF-UI-Text-Condensed-Medium__": ".SFNSTextCondensed-Medium|SFUITextCondensed-Medium|.SFUITextCondensed-Medium",
    "__SF-UI-Text-Condensed-Semibold__": ".SFNSTextCondensed-Semibold|SFUITextCondensed-Semibold|.SFUITextCondensed-Semibold",
    "__SF-UI-Text-Condensed-Bold__": ".SFNSTextCondensed-Bold|SFUITextCondensed-Bold|.SFUITextCondensed-Bold",
    "__SF-UI-Text-Condensed-Heavy__": ".SFNSTextCondensed-Heavy|.SFUITextCondensed-Heavy",
    "__SF-Compact-Rounded-Regular__": "SFCompactRounded-Regular|.SFCompactRounded-Regular",
    "__SF-Compact-Rounded-Ultralight__": "SFCompactRounded-Ultralight|.SFCompactRounded-Ultralight",
    "__SF-Compact-Rounded-Thin__": "SFCompactRounded-Thin|.SFCompactRounded-Thin",
    "__SF-Compact-Rounded-Light__": "SFCompactRounded-Light|.SFCompactRounded-Light",
    "__SF-Compact-Rounded-Medium__": "SFCompactRounded-Medium|.SFCompactRounded-Medium",
    "__SF-Compact-Rounded-Semibold__": "SFCompactRounded-Semibold|.SFCompactRounded-Semibold",
    "__SF-Compact-Rounded-Bold__": "SFCompactRounded-Bold|.SFCompactRounded-Bold",
    "__SF-Compact-Rounded-Heavy__": "SFCompactRounded-Heavy|.SFCompactRounded-Heavy",
    "__SF-Compact-Rounded-Black__": "SFCompactRounded-Black|.SFCompactRounded-Black"
}
  , kS = n4;
var i4 = "System Default"
  , o4 = class {
    constructor() {
        P(this, "name", "local"),
        P(this, "fontFamilies", []),
        P(this, "byFamilyName", new Map),
        P(this, "fontAliasBySelector", new Map),
        P(this, "fontAliases", new Map)
    }
    getFontFamilyByName(e) {
        return this.byFamilyName.get(e) ?? null
    }
    createFontFamily(e) {
        let t = {
            name: e,
            fonts: [],
            source: this.name
        };
        return this.addFontFamily(t),
        t
    }
    addFontFamily(e) {
        this.fontFamilies.push(e),
        this.byFamilyName.set(e.name, e)
    }
    importFonts() {
        let e = [];
        for (let r of Object.keys(kS)) {
            let i = kS[r];
            if (!i)
                continue;
            let o = this.createFontFamily(r);
            for (let s of Object.keys(i)) {
                let a = i[s];
                if (!a)
                    continue;
                let {selector: l, weight: c} = a
                  , u = {
                    variant: s,
                    selector: l,
                    weight: c,
                    family: o
                };
                o.fonts.push(u)
            }
            e.push(...o.fonts)
        }
        for (let[r,i] of Object.entries(r4))
            this.addFontAlias(r, i);
        let {fontFamily: t, aliases: n} = this.getSystemFontFamily();
        this.addFontFamily(t);
        for (let[r,i] of n)
            this.addFontAlias(r, i);
        return e.push(...t.fonts),
        e
    }
    addFontAlias(e, t) {
        this.fontAliases.set(e, t),
        this.fontAliasBySelector.set(t, e)
    }
    getSystemFontFamily() {
        let e = "system-ui|-apple-system|BlinkMacSystemFont|Segoe UI|Roboto|Oxygen|Ubuntu|Cantarell|Fira Sans|Droid Sans|Helvetica Neue|sans-serif"
          , t = {
            name: i4,
            fonts: [],
            source: this.name
        }
          , n = new Map
          , r = [400, 100, 200, 300, 500, 600, 700, 800, 900]
          , i = ["normal", "italic"];
        for (let o of i)
            for (let s of r) {
                let a = s4(s, o)
                  , l = `__SystemDefault-${s}-${o}__`
                  , c = {
                    variant: a,
                    selector: l,
                    style: o,
                    weight: s,
                    family: t
                };
                t.fonts.push(c),
                n.set(l, e)
            }
        return {
            fontFamily: t,
            aliases: n
        }
    }
    getFontAliasBySelector(e) {
        return this.fontAliasBySelector.get(e) || null
    }
    getFontSelectorByAlias(e) {
        return this.fontAliases.get(e) || null
    }
    isFontFamilyAlias(e) {
        return !!(e && /^__.*__$/u.exec(e))
    }
}
  , CS = {
    100: "Thin",
    200: "Extra Light",
    300: "Light",
    400: "Normal",
    500: "Medium",
    600: "Semi Bold",
    700: "Bold",
    800: "Extra Bold",
    900: "Black"
};
function s4(e, t) {
    let n = t === "normal" ? "Regular" : "Italic";
    return e === 400 ? n : t !== "normal" ? `${CS[e]} ${n}` : `${CS[e]}`
}
var a4 = on(Np(), 1)
  , xo = "CUSTOM;";
function l4(e, t) {
    if (!t)
        return e.substring(0, e.lastIndexOf("."));
    let n = t.font.preferredFamily === "" ? t.font.fontFamily : t.font.preferredFamily
      , r = t.font.preferredSubFamily === "" ? t.font.fontSubFamily : t.font.preferredSubFamily;
    return `${n} ${r}`
}
var c4 = class {
    constructor() {
        P(this, "name", "custom"),
        P(this, "fontFamilies", []),
        P(this, "byFamilyName", new Map),
        P(this, "assetsByFamily", new Map)
    }
    importFonts(e) {
        var t;
        this.fontFamilies.length = 0,
        this.byFamilyName.clear(),
        this.assetsByFamily.clear();
        let n = [];
        for (let r of e) {
            if (!this.isValidCustomFontAsset(r))
                continue;
            let i = l4(r.name, r.properties)
              , o = this.createFontFamily(i)
              , s = {
                family: o,
                selector: `${xo}${i}`,
                variant: this.inferVariantName(i),
                postscriptName: (t = r.properties) == null ? void 0 : t.font.postscriptName,
                file: r.url
            };
            o.fonts.push(s),
            o.owner = r.ownerType === "team" ? "team" : "project",
            this.assetsByFamily.set(i, r),
            n.push(...o.fonts)
        }
        return n
    }
    isValidCustomFontAsset(e) {
        var t;
        return !e.mimeType.startsWith("font/") || ((t = e.properties) == null ? void 0 : t.kind) !== "font" || !e.properties.font ? !1 : "fontFamily"in e.properties.font
    }
    inferVariantName(e) {
        let t = ["thin", "ultra light", "extra light", "light", "normal", "medium", "semi bold", "bold", "extra bold", "black"]
          , n = [...t.map(s => `${s} italic`), ...t]
          , r = e.toLowerCase()
          , i = [...r.split(" "), ...r.split("-"), ...r.split("_")]
          , o = n.find(s => i.includes(s) || i.includes(s.replace(/\s+/g, "")));
        return o ? o.replace(/^\w|\s\w/g, s => s.toUpperCase()) : "Regular"
    }
    createFontFamily(e) {
        let t = this.byFamilyName.get(e);
        if (t)
            return t;
        let n = {
            source: this.name,
            name: e,
            fonts: []
        };
        return this.addFontFamily(n),
        n
    }
    addFontFamily(e) {
        this.fontFamilies.push(e),
        this.byFamilyName.set(e.name, e)
    }
    parseSelector(e) {
        if (!e.startsWith(xo))
            return null;
        let t = e.split(xo);
        return t[1] === void 0 ? null : {
            source: "custom",
            name: t[1]
        }
    }
    getFontBySelector(e, t=!0) {
        let n = this.parseSelector(e);
        if (!n || !t && !this.byFamilyName.get(n.name))
            return;
        let r = this.getFontFamilyByName(n.name).fonts;
        return r.find(o => {
            var s;
            return (s = o.file) == null ? void 0 : s.endsWith(".woff2")
        }
        ) || r[0]
    }
    getFontFamilyByName(e) {
        let t = this.byFamilyName.get(e);
        if (t)
            return t;
        let n = {
            source: "custom",
            name: e,
            fonts: []
        };
        return n.fonts.push({
            selector: `${xo}${e}`,
            variant: this.inferVariantName(e),
            family: n
        }),
        n
    }
}
;
function dk(e, t, n) {
    if (t.length === 0)
        return {};
    let r = n(e);
    if (!r)
        return {};
    let {weight: i, style: o} = r
      , s = new Map
      , a = new Map;
    t.forEach(f => {
        let d = ke(f) ? f : f.name.toLocaleLowerCase()
          , m = n(d);
        m && (s.set(`${m.weight}-${m.style}`, d),
        !(m.weight <= i) && (a.has(m.style) || a.set(m.style, d)))
    }
    );
    let l = a.get(o)
      , c = a.get("italic") ?? a.get("oblique");
    r.weight <= 300 ? (l = s.get(`400-${o}`) ?? l,
    c = s.get("400-italic") ?? s.get("400-oblique") ?? c) : r.weight <= 500 ? (l = s.get(`700-${o}`) ?? l,
    c = s.get("700-italic") ?? s.get("700-oblique") ?? c) : (l = s.get(`900-${o}`) ?? l,
    c = s.get("900-italic") ?? s.get("900-oblique") ?? c);
    let u = s.get(`${i}-italic`) ?? s.get(`${i}-oblique`);
    return {
        variantBold: l,
        variantItalic: u,
        variantBoldItalic: c
    }
}
var u4 = ["display", "sans", "serif", "slab", "handwritten", "script"];
function f4(e) {
    return e.split(",").map(t => t.trim().toLowerCase()).filter(d4)
}
function d4(e) {
    return u4.includes(e)
}
var jc = "FS;"
  , hk = {
    thin: 100,
    hairline: 100,
    extralight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    ultra: 800,
    black: 900,
    heavy: 900
}
  , pk = Object.keys(hk)
  , h4 = new RegExp(`^(?:${[...pk, "italic"].join("|")})`,"u")
  , Hr = class {
    constructor() {
        P(this, "name", "fontshare"),
        P(this, "fontFamilies", []),
        P(this, "byFamilyName", new Map)
    }
    getFontFamilyByName(e) {
        return this.byFamilyName.get(e) ?? null
    }
    static parseVariant(e) {
        let t = e.split(" ")
          , n = pk.find(s => t.includes(s))
          , r = e.includes("italic") ? "italic" : "normal";
        return {
            weight: n && hk[n] || 400,
            style: r === "italic" ? r : "normal"
        }
    }
    parseSelector(e) {
        if (!e.startsWith(jc))
            return null;
        let t = e.split("-");
        if (t.length !== 2)
            return null;
        let[n,r] = t;
        return !n || !r ? null : {
            name: n.replace(jc, ""),
            variant: r,
            source: this.name
        }
    }
    static createSelector(e, t) {
        return `${jc}${e}-${t}`
    }
    addFontFamily(e) {
        this.fontFamilies.push(e),
        this.byFamilyName.set(e.name, e)
    }
    importFonts(e) {
        this.fontFamilies.length = 0,
        this.byFamilyName.clear();
        let t = [];
        for (let n of e) {
            let r = n.font_styles.filter(i => {
                let o = i.name.toLowerCase();
                return !(!h4.exec(o) || o.endsWith("wide"))
            }
            );
            for (let i of r) {
                let {name: o} = n
                  , s = i.name.toLowerCase()
                  , a = this.getFontFamilyByName(o);
                a || (a = {
                    name: o,
                    fonts: [],
                    source: this.name
                },
                this.addFontFamily(a));
                let l = Hr.createSelector(o, s)
                  , c = Hr.parseVariant(s) || {
                    weight: void 0,
                    style: void 0
                }
                  , {weight: u, style: f} = c
                  , {variantBold: d, variantBoldItalic: m, variantItalic: g} = dk(s, r, Hr.parseVariant)
                  , y = {
                    family: a,
                    variant: s,
                    selector: l,
                    selectorBold: d ? Hr.createSelector(o, d) : void 0,
                    selectorBoldItalic: m ? Hr.createSelector(o, m) : void 0,
                    selectorItalic: g ? Hr.createSelector(o, g) : void 0,
                    weight: u,
                    style: f,
                    file: i.file,
                    category: p4(n.category)
                };
                a.fonts.push(y),
                t.push(y)
            }
        }
        return t
    }
}
;
function p4(e) {
    let t = {
        serif: "serif",
        sans: "sans-serif",
        slab: "slab",
        display: "display",
        handwritten: "handwriting",
        script: "handwriting"
    }
      , n = f4(e)[0];
    return n && t[n]
}
var m4 = "Inter"
  , v4 = {
    Thin: 100,
    ExtraLight: 200,
    Light: 300,
    "": 400,
    Medium: 500,
    SemiBold: 600,
    Bold: 700,
    ExtraBold: 800,
    Black: 900
}
  , TS = class {
    constructor() {
        P(this, "name", "framer"),
        P(this, "fontFamilies", []),
        P(this, "byFamilyName", new Map)
    }
    getFontFamilyByName(e) {
        return this.byFamilyName.get(e) ?? null
    }
    addFontFamily(e) {
        let t = {
            name: e,
            fonts: [],
            source: this.name
        };
        return this.fontFamilies.push(t),
        this.byFamilyName.set(t.name, t),
        t
    }
    static getDraftFontPropertiesBySelector(e) {
        if (!e.startsWith(m4))
            return null;
        let t = e.split("-")
          , [n,r=""] = t;
        if (!n)
            return null;
        let i = r.includes("Italic") ? "italic" : "normal"
          , o = r.replace("Italic", "")
          , s = o && v4[o] || 400;
        return {
            family: n,
            style: i,
            weight: s,
            source: "framer",
            variant: void 0,
            category: "sans-serif"
        }
    }
    importFonts(e) {
        this.fontFamilies.length = 0,
        this.byFamilyName.clear();
        let t = [];
        return e.forEach(n => {
            let {familyName: r, ...i} = n
              , o = this.getFontFamilyByName(r);
            o || (o = this.addFontFamily(r));
            let s = {
                ...i,
                family: o
            };
            o.fonts.push(s),
            t.push(s)
        }
        ),
        t
    }
}
  , Wc = "GF;"
  , jr = class {
    constructor() {
        P(this, "name", "google"),
        P(this, "fontFamilies", []),
        P(this, "byFamilyName", new Map)
    }
    getFontFamilyByName(e) {
        return this.byFamilyName.get(e) ?? null
    }
    static parseVariant(e) {
        if (e === "regular")
            return {
                style: "normal",
                weight: 400
            };
        let t = /(\d*)(normal|italic)?/.exec(e);
        if (!t)
            return null;
        let n = parseInt(t[1] || "400")
          , r = t[2] === "italic" ? "italic" : "normal";
        return {
            weight: n,
            style: r
        }
    }
    parseSelector(e) {
        if (!e.startsWith(Wc))
            return null;
        let t = e.split("-");
        if (t.length !== 2)
            return null;
        let[n,r] = t;
        return !n || !r ? null : {
            name: n.replace(Wc, ""),
            variant: r,
            source: this.name
        }
    }
    static createSelector(e, t) {
        return `${Wc}${e}-${t}`
    }
    addFontFamily(e) {
        let t = {
            name: e,
            fonts: [],
            source: this.name
        };
        return this.fontFamilies.push(t),
        this.byFamilyName.set(t.name, t),
        t
    }
    importFonts(e) {
        this.fontFamilies.length = 0,
        this.byFamilyName.clear();
        let t = [];
        return e.forEach(n => {
            n.variants.forEach(r => {
                var i;
                let o = n.family
                  , s = this.getFontFamilyByName(o);
                s || (s = this.addFontFamily(o));
                let a = jr.parseVariant(r) ?? {}
                  , {weight: l, style: c} = a
                  , u = jr.createSelector(o, r)
                  , {variantBold: f, variantItalic: d, variantBoldItalic: m} = dk(r, n.variants, jr.parseVariant)
                  , g = {
                    family: s,
                    variant: r,
                    selector: u,
                    selectorBold: f ? jr.createSelector(o, f) : void 0,
                    selectorBoldItalic: m ? jr.createSelector(o, m) : void 0,
                    selectorItalic: d ? jr.createSelector(o, d) : void 0,
                    weight: l,
                    style: c,
                    category: g4(n.category),
                    file: (i = n.files[r]) == null ? void 0 : i.replace("http://", "https://")
                };
                s.fonts.push(g),
                t.push(g)
            }
            )
        }
        ),
        t
    }
}
;
function g4(e) {
    let t = {
        serif: "serif",
        "sans-serif": "sans-serif",
        display: "display",
        handwriting: "handwriting",
        monospace: "monospace"
    };
    if (e)
        return t[e]
}
var y4 = on(NF(), 1)
  , ES = 5e3
  , b4 = 3
  , mk = class extends Error {
    constructor(e) {
        super(e),
        this.name = "FontLoadingError"
    }
}
  , Ep = new Map
  , Pp = new Map
  , x4 = (e, t) => vk(e, t);
async function vk(e, t, n=0) {
    let {family: r, url: i, stretch: o, unicodeRange: s} = e
      , a = e.weight || 500
      , l = e.style || "normal"
      , c = `${r}-${l}-${a}-${i}`;
    if (!Ep.has(c) || n > 0) {
        let u = new FontFace(r,`url(${i})`,{
            weight: ke(a) ? a : a?.toString(),
            style: l,
            stretch: o,
            unicodeRange: s
        })
          , f = u.load().then( () => (t.fonts.add(u),
        gk(r, l, a))).catch(d => {
            if (d.name !== "NetworkError")
                throw d;
            if (n < b4)
                return vk(e, t, n + 1);
            throw new mk(`Font loading failed after ${n} retries due to network error: ${JSON.stringify({
                family: r,
                style: l,
                weight: a,
                url: i,
                stretch: o,
                unicodeRange: s
            })}`)
        }
        );
        Ep.set(c, f)
    }
    await Ep.get(c)
}
async function gk(e, t, n) {
    let r = `${e}-${t}-${n}`;
    if (!Pp.has(r)) {
        let o = new y4.default(e,{
            style: t,
            weight: n
        }).load(null, ES);
        Pp.set(r, o)
    }
    try {
        await Pp.get(r)
    } catch {
        throw new mk(`Failed to check if font is ready (${ES}ms timeout exceeded): ${JSON.stringify({
            family: e,
            style: t,
            weight: n
        })}`)
    }
}
var S4 = class {
    constructor() {
        P(this, "enabled", !1),
        P(this, "bySelector", new Map),
        P(this, "getGoogleFontsListPromise"),
        P(this, "getFontshareFontsListPromise"),
        P(this, "loadedSelectors", new Set),
        P(this, "googleFamilyNames", new Set),
        P(this, "local"),
        P(this, "google"),
        P(this, "fontshare"),
        P(this, "framer"),
        P(this, "custom"),
        this.local = new o4,
        this.google = new jr,
        this.fontshare = new Hr,
        this.framer = new TS,
        this.custom = new c4,
        this.bySelector = new Map,
        this.importLocalFonts()
    }
    addFont(e) {
        this.bySelector.set(e.selector, e)
    }
    getAvailableFonts() {
        return Array.from(this.bySelector.values())
    }
    importLocalFonts() {
        for (let e of this.local.importFonts())
            this.addFont(e),
            this.loadFont(e)
    }
    async importGoogleFonts() {
        if (!this.getGoogleFontsListPromise) {
            this.getGoogleFontsListPromise = Ye.fetchGoogleFontsList();
            let e = await this.getGoogleFontsListPromise;
            for (let t of this.google.importFonts(e))
                this.googleFamilyNames.add(t.family.name.toLowerCase()),
                this.addFont(t)
        }
        return this.getGoogleFontsListPromise
    }
    async importFontshareFonts() {
        if (!this.getFontshareFontsListPromise) {
            this.getFontshareFontsListPromise = Ye.fetchFontshareFontsList();
            let e = await this.getFontshareFontsListPromise;
            for (let t of this.fontshare.importFonts(e))
                this.googleFamilyNames.has(t.family.name.toLowerCase()) || this.addFont(t)
        }
        return this.getFontshareFontsListPromise
    }
    importFramerFonts(e) {
        this.framer.importFonts(e).forEach(t => {
            this.addFont(t)
        }
        )
    }
    importCustomFonts(e) {
        this.bySelector.forEach( (t, n) => {
            n.startsWith(xo) && this.bySelector.delete(n)
        }
        );
        for (let t of this.custom.importFonts(e))
            this.addFont(t)
    }
    getFontFamily(e) {
        return this[e.source].getFontFamilyByName(e.name)
    }
    getFontBySelector(e, t=!0) {
        return e.startsWith(xo) ? this.custom.getFontBySelector(e, t) : this.bySelector.get(e)
    }
    getDraftPropertiesBySelector(e) {
        let t = this.getFontBySelector(e);
        if (t)
            return {
                style: t.style,
                weight: t.weight,
                variant: t.variant,
                family: t.family.name,
                source: t.family.source,
                category: t.category
            };
        let n = this.google.parseSelector(e);
        if (n) {
            let o = jr.parseVariant(n.variant);
            if (o)
                return {
                    style: o.style,
                    weight: o.weight,
                    variant: n.variant,
                    family: n.name,
                    source: "google",
                    category: void 0
                }
        }
        let r = this.fontshare.parseSelector(e);
        if (r) {
            let o = Hr.parseVariant(r.variant);
            if (o)
                return {
                    style: o.style,
                    weight: o.weight,
                    variant: r.variant,
                    family: r.name,
                    source: "fontshare",
                    category: void 0
                }
        }
        let i = TS.getDraftFontPropertiesBySelector(e);
        return i || null
    }
    isSelectorLoaded(e) {
        return this.loadedSelectors.has(e)
    }
    async loadFont(e) {
        if (this.isSelectorLoaded(e.selector))
            return 0;
        let t = e.family.source;
        switch (t) {
        case "local":
            return this.loadedSelectors.add(e.selector),
            1;
        case "framer":
            return a4.default.env.NODE_ENV !== "test" && await gk(e.family.name, e.style, e.weight),
            this.loadedSelectors.add(e.selector),
            1;
        case "google":
        case "fontshare":
        case "custom":
            return e.file ? (await x4({
                family: e.family.name,
                url: e.file,
                weight: e.weight,
                style: e.style
            }, document),
            this.loadedSelectors.add(e.selector),
            1) : Promise.reject(`Unable to load font: ${e.selector}`);
        default:
            Lt(t)
        }
    }
    async loadFontsFromSelectors(e) {
        if (!this.enabled)
            return [];
        let t = e.some(i => i.startsWith(Wc))
          , n = e.some(i => i.startsWith(jc));
        if (t || n) {
            try {
                await this.importGoogleFonts()
            } catch (i) {
                na("Failed to load Google fonts:", i)
            }
            try {
                await this.importFontshareFonts()
            } catch (i) {
                na("Failed to load Fontshare fonts:", i)
            }
        }
        let r = e.map(i => this.bySelector.get(i)).filter(i => !!i);
        return Promise.allSettled(r.map(i => this.loadFont(i)))
    }
    async loadFonts(e) {
        return {
            newlyLoadedFontCount: (await this.loadFontsFromSelectors(e)).filter(r => r.status === "fulfilled" && r.value === 1).length
        }
    }
    async loadMissingFonts(e, t) {
        let n = e.filter(i => !Uc.isSelectorLoaded(i));
        if (n.length === 0)
            return;
        await Uc.loadWebFontsFromSelectors(n),
        n.every(i => Uc.isSelectorLoaded(i)) && t && t()
    }
    async loadWebFontsFromSelectors(e) {
        return this.loadFontsFromSelectors(e)
    }
    get defaultFont() {
        let e = this.getFontBySelector("Inter");
        return re(e, "Can\u2019t find Inter font"),
        e
    }
}
  , Uc = new S4;
Promise.allSettled = Promise.allSettled || (e => Promise.all(e.map(t => t.then(n => ({
    status: "fulfilled",
    value: n
})).catch(n => ({
    status: "rejected",
    reason: n
})))));
var w4 = {
    "data-1p-ignore": !0,
    "data-lpignore": !0
}
  , k4 = {
    autocomplete: "off"
}
  , C4 = {
    display: "flex",
    flexDirection: "column",
    marginBottom: 8
}
  , zp = "framer-form-input"
  , yk = "framer-form-label"
  , T4 = b.forwardRef(function(t, n) {
    let {style: r, inputName: i, label: o, type: s, required: a, autoFocus: l, placeholder: c, hideInputLabel: u, ...f} = t
      , d = {
        ...k4,
        ...w4
    }
      , m = {
        display: "flex",
        flexDirection: "column"
    }
      , g = s === "hidden"
      , y = {
        width: "100%",
        flexGrow: 1
    }
      , S = k(ft.input, {
        id: i,
        ...d,
        type: s,
        required: a,
        autoFocus: l,
        name: i,
        style: y,
        placeholder: c,
        className: zp
    });
    return g ? S : Q(ft.div, {
        ref: n,
        style: {
            ...m,
            ...r
        },
        ...f,
        children: [o && !u && k("label", {
            htmlFor: i,
            style: {
                ...C4
            },
            className: yk,
            children: o
        }), S]
    })
})
  , R8 = Kw(T4, [`.${zp} {
        padding: var(--framer-input-padding);
        border-radius: var(--framer-input-border-radius);
        border-color: var(--framer-input-border-color);
        border-width: var(--framer-input-border-width);
        border-style: var(--framer-input-border-style);
        background: var(--framer-input-background);
        font-family: var(--framer-input-font-family);
        font-weight: var(--framer-input-font-weight);
        font-size: var(--framer-input-font-size);
        color: var(--framer-input-font-color);
        box-shadow: var(--framer-input-box-shadow);
    }`, `.${zp}::placeholder {
        color: var(--framer-input-placeholder-color);
    }`, `.${yk} {
        font-family: var(--framer-input-label-font-family);
        font-weight: var(--framer-input-label-font-weight);
        font-size: var(--framer-input-label-font-size);
        color: var(--framer-input-label-font-color);
    }`])
  , F8 = b.forwardRef(function(t, n) {
    let {background: r, children: i, alt: o, ...s} = t
      , a = {
        ...s.style
    };
    r && delete a.background;
    let l = su(t.as);
    return Q(l, {
        ...s,
        style: a,
        ref: n,
        children: [r && k(dw, {
            image: r,
            alt: o
        }), i]
    })
});
function E4(e, t) {
    return e.length === t.length && e.every( (n, r) => n === t[r])
}
var P4 = /[&<>'"]/g
  , R4 = e => e.replace(P4, t => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
})[t] || t)
  , _4 = /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi;
function I4(e, t, n, r) {
    return e.replace(_4, (i, o, s, a, l, c, u) => {
        var f, d;
        if (s.toLowerCase() !== "a")
            return i;
        let m = l || c
          , g = lm(m.replace(/&amp;/g, "&"));
        if (!g || !g.target)
            return i;
        let y = t(g.target);
        if (!C1(y) || !C1(n))
            return i;
        let S = y.path
          , h = n.path;
        if (!S || !h)
            return i;
        let p = ` data-framer-page-link-target="${g.target}"`
          , v = iu(y, g.element ?? void 0);
        v && (p += ` data-framer-page-link-element="${g.element}"`);
        let x = Zw(m);
        if (!x || ke(x))
            return i;
        tk(n, x, r) && (p += " data-framer-page-link-current");
        let C = S
          , w = Object.assign({}, r, (f = g.collectionItem) == null ? void 0 : f.pathVariables);
        if (Object.keys(w).length > 0 && (C = C.replace(Jw, (T, E) => "" + w[E])),
        (d = g.collectionItem) != null && d.pathVariables) {
            let T = new URLSearchParams(g.collectionItem.pathVariables);
            p += ` data-framer-page-link-path-variables="${T}"`
        }
        return C = VS(h, C),
        o + a + `"${R4(C + (v ? `#${v}` : ""))}"` + p + u
    }
    )
}
var F4 = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
}
  , bk = /[&<>"']/gu
  , L4 = RegExp(bk.source);
function PS(e) {
    return e && L4.test(e) ? e.replace(bk, t => F4[t] ?? "") : e || ""
}
var RS = "{{ text-placeholder }}"
  , M4 = "rich-text-wrapper"
  , O4 = je(function(t, n) {
    let {id: r, name: i, html: o, htmlFromDesign: s, text: a, textFromDesign: l, fonts: c=[], width: u, height: f, left: d, right: m, top: g, bottom: y, center: S, className: h, stylesPresetsClassName: p, visible: v=!0, opacity: x, rotation: C=0, verticalAlignment: w="top", isEditable: T=!1, willChangeTransform: E, environment: _=Fe.current, withExternalLayout: R=!1, positionSticky: B, positionStickyTop: A, positionStickyRight: ne, positionStickyBottom: q, positionStickyLeft: H, __htmlStructure: Z, __fromCanvasComponent: ie=!1, _forwardedOverrideId: G, _forwardedOverrides: Y, _usesDOMRect: oe, children: Le, ...U} = t
      , K = ya()
      , X = xa(t)
      , nt = D(null)
      , ae = n ?? nt
      , {navigate: ze, getRoute: z} = va()
      , Hn = ou();
    G2(t.preload ?? []),
    cu(t, ae);
    let nn = M(_o)
      , He = fk()
      , Pi = a
      , vn = G ?? r;
    if (vn && Y) {
        let bt = Y[vn];
        typeof bt == "string" && (Pi = bt)
    }
    let Mt = "";
    if (Pi) {
        let bt = PS(Pi);
        Mt = Z ? Z.replace(RS, bt) : `<p>${bt}</p>`
    } else if (o)
        Mt = o;
    else if (l) {
        let bt = PS(l);
        Mt = Z ? Z.replace(RS, bt) : `<p>${bt}</p>`
    } else
        s && (Mt = s);
    let Ca = ek()
      , Ek = ce( () => He || !z || !Hn ? Mt : I4(Mt, z, Hn, Ca), [He, Mt, z, Hn, Ca]);
    if ($( () => {
        let bt = ae.current;
        if (bt === null)
            return;
        function vm(mu) {
            let vu = am(mu.target, ae.current);
            if (mu.metaKey || !ze || !vu || vu.getAttribute("target") === "_blank")
                return;
            EV(ze, vu, Ca) && mu.preventDefault()
        }
        return bt.addEventListener("click", vm),
        () => {
            bt.removeEventListener("click", vm)
        }
    }
    , [ze, Ca]),
    Sk(c, ie, ae),
    xt( () => {
        ba()
    }
    , []),
    !v)
        return null;
    let Pk = T && _() === "CANVAS"
      , pe = {
        outline: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: xk(w),
        opacity: Pk ? 0 : x,
        flexShrink: 0
    }
      , pm = Fe.hasRestrictions()
      , Yr = ra(t, K || 0, !1)
      , mm = oe && (u === "auto" || f === "auto")
      , Rk = !!t.transformTemplate || !Yr || !pm || ie || mm ? t.transformTemplate ?? au(S) : void 0;
    if (!R) {
        if (Yr && pm && !mm) {
            let bt = Be.getNumber(C).toFixed(4);
            pe.transform = `translate(${Yr.x}px, ${Yr.y}px) rotate(${bt}deg)`,
            pe.width = Yr.width,
            pe.minWidth = Yr.width,
            pe.height = Yr.height
        } else
            pe.left = d,
            pe.right = m,
            pe.top = g,
            pe.bottom = y,
            pe.width = u,
            pe.height = f,
            pe.rotate = C;
        B ? (!He || nn) && (pe.position = "sticky",
        pe.willChange = "transform",
        pe.zIndex = 1,
        pe.top = A,
        pe.right = ne,
        pe.bottom = q,
        pe.left = H) : He && (t.positionFixed || t.positionAbsolute) && (pe.position = "absolute")
    }
    return tm(t, pe),
    Mw(t, pe),
    E && Zp(pe),
    Object.assign(pe, t.style),
    k(ft.div, {
        id: r,
        ref: ae,
        ...U,
        style: pe,
        layoutId: X,
        "data-framer-name": i,
        "data-framer-component-type": "DeprecatedRichText",
        "data-center": S,
        className: rm(h, p, M4),
        transformTemplate: Rk,
        dangerouslySetInnerHTML: {
            __html: Ek
        }
    })
});
function xk(e) {
    switch (e) {
    case "top":
        return "flex-start";
    case "center":
        return "center";
    case "bottom":
        return "flex-end"
    }
}
function Sk(e, t, n) {
    let r = D([]);
    E4(r.current, e) || (r.current = e,
    Uc.loadFonts(e).then( ({newlyLoadedFontCount: i}) => {
        !t || !n.current || Fe.current() !== "CANVAS" || i > 0 && $O(n.current)
    }
    ))
}
var _S = je( ({viewBoxScale: e, viewBox: t, children: n, ...r}, i) => k(ft.svg, {
    ref: i,
    ...r,
    viewBox: t,
    children: k(ft.foreignObject, {
        width: "100%",
        height: "100%",
        className: "framer-fit-text",
        transform: `scale(${e})`,
        style: {
            overflow: "visible",
            transformOrigin: "center center"
        },
        children: n
    })
}))
  , D4 = je( (e, t) => {
    let {__fromCanvasComponent: n=!1, _forwardedOverrideId: r, _forwardedOverrides: i, _usesDOMRect: o, as: s, bottom: a, center: l, children: c, environment: u=Fe.current, fonts: f=[], height: d, isEditable: m=!1, left: g, name: y, opacity: S, positionSticky: h, positionStickyBottom: p, positionStickyLeft: v, positionStickyRight: x, positionStickyTop: C, right: w, rotation: T=0, style: E, _initialStyle: _, stylesPresetsClassNames: R, text: B, top: A, verticalAlignment: ne="top", visible: q=!0, width: H, willChangeTransform: Z, withExternalLayout: ie=!1, viewBox: G, viewBoxScale: Y=1, ...oe} = e
      , Le = ya()
      , U = fk()
      , K = M(_o)
      , X = xa(e)
      , nt = D(null)
      , ae = t ?? nt;
    if (cu(e, ae),
    Sk(f, n, ae),
    xt( () => {
        ba()
    }
    , []),
    !q)
        return null;
    let ze = m && u() === "CANVAS"
      , z = {
        outline: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: xk(ne),
        opacity: ze ? 0 : S,
        flexShrink: 0
    }
      , Hn = Fe.hasRestrictions()
      , nn = ra(e, Le || 0, !1)
      , He = o && (H === "auto" || d === "auto")
      , vn = !!e.transformTemplate || !nn || !Hn || n || He ? e.transformTemplate ?? au(l) : void 0;
    ie || (nn && Hn && !He ? (z.x = nn.x,
    z.y = nn.y,
    z.rotate = Be.getNumber(T),
    z.width = nn.width,
    z.minWidth = nn.width,
    z.height = nn.height) : (z.left = g,
    z.right = w,
    z.top = A,
    z.bottom = a,
    z.width = H,
    z.height = d,
    z.rotate = T),
    h ? (!U || K) && (z.position = "sticky",
    z.willChange = "transform",
    z.zIndex = 1,
    z.top = C,
    z.right = x,
    z.bottom = p,
    z.left = v) : U && (e.positionFixed || e.positionAbsolute) && (z.position = "absolute")),
    tm(e, z),
    Mw(e, z),
    Z && Zp(z),
    Object.assign(z, _, E),
    X && (oe.layout = "preserve-aspect");
    let Mt = su(e.as);
    return ke(e.viewBox) ? e.as !== void 0 ? k(Mt, {
        ...oe,
        ref: ae,
        style: z,
        layoutId: X,
        transformTemplate: vn,
        "data-framer-name": y,
        "data-framer-component-type": "RichTextContainer",
        children: k(_S, {
            viewBox: G,
            viewBoxScale: Y,
            style: {
                width: "100%",
                height: "100%"
            },
            children: c && Xc(c, R, B)
        })
    }) : k(_S, {
        ...oe,
        ref: ae,
        style: z,
        layoutId: X,
        viewBox: G,
        viewBoxScale: Y,
        transformTemplate: vn,
        "data-framer-name": y,
        "data-framer-component-type": "RichTextContainer",
        children: c && Xc(c, R, B)
    }) : k(Mt, {
        ...oe,
        ref: ae,
        style: z,
        layoutId: X,
        transformTemplate: vn,
        "data-framer-name": y,
        "data-framer-component-type": "RichTextContainer",
        children: c && Xc(c, R, B)
    })
}
);
function Xc(e, t, n) {
    let r = gn.toArray(e.props.children);
    ke(n) && (r = r.slice(0, 1)),
    r = r.map(s => yn(s) ? Xc(s, t, n) : ke(n) ? n : s);
    let {["data-preset-tag"]: i, ...o} = e.props;
    if (ke(e.type) || Yf(e.type)) {
        let s = i || Uy(e.type) || e.type
          , a = ke(s) ? t?.[s] : void 0;
        o.className = rm("framer-text", o.className, a)
    }
    return rn(e, o, ...r)
}
var A8 = je( ({children: e, html: t, htmlFromDesign: n, ...r}, i) => {
    let o = t || e || n;
    if (ke(o)) {
        !r.stylesPresetsClassName && Ie(r.stylesPresetsClassNames) && (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(" "));
        let s = {
            [ke(t) ? "html" : "htmlFromDesign"]: o
        };
        return k(O4, {
            ...r,
            ...s,
            ref: i
        })
    }
    if (!r.stylesPresetsClassNames && ke(r.stylesPresetsClassName)) {
        let[s,a,l,c,u] = r.stylesPresetsClassName.split(" ");
        s === void 0 || a === void 0 || l === void 0 || c === void 0 || u === void 0 ? console.warn(`Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`) : r.stylesPresetsClassNames = {
            h1: s,
            h2: a,
            h3: l,
            p: c,
            a: u
        }
    }
    return k(D4, {
        ...r,
        ref: i,
        children: yn(o) ? o : void 0
    })
}
);
function A4(e) {
    var t, n;
    let r = e * Math.PI / 180
      , i = {
        x: -Math.sin(r) * 100,
        y: Math.cos(r) * 100
    }
      , o = et(i.x, i.y)
      , s = Jt(et(.5, .5), o)
      , a = Gc.points({
        x: 0,
        y: 0,
        width: 1,
        height: 1
    })
      , l = a.map(y => ({
        point: y,
        distance: et.distance(o, y)
    })).sort( (y, S) => y.distance - S.distance)
      , c = (t = l[0]) == null ? void 0 : t.point
      , u = (n = l[1]) == null ? void 0 : n.point;
    re(c && u, "linearGradientLine: Must have 2 closest points.");
    let[f,d] = a.filter(y => !et.isEqual(y, c) && !et.isEqual(y, u));
    re(f && d, "linearGradientLine: Must have 2 opposing points.");
    let m = Jt.intersection(s, Jt(c, u))
      , g = Jt.intersection(s, Jt(f, d));
    return re(m && g, "linearGradientLine: Must have a start and end point."),
    Jt(m, g)
}
function V4(e, t) {
    var n, r;
    let i = A4(e.angle)
      , o = Sa(e)
      , s = ((n = o[0]) == null ? void 0 : n.position) ?? 0
      , a = ((r = o[o.length - 1]) == null ? void 0 : r.position) ?? 1
      , l = Jt.pointAtPercentDistance(i, s)
      , c = Jt.pointAtPercentDistance(i, a)
      , u = zi([s, a], [0, 1]);
    return {
        id: `id${t}g${aa.hash(e)}`,
        x1: l.x,
        y1: l.y,
        x2: c.x,
        y2: c.y,
        stops: o.map(f => ({
            color: f.value,
            alpha: Jp.getAlpha(f.value) * e.alpha,
            position: u(f.position)
        }))
    }
}
function B4(e, t) {
    return {
        id: `id${t}g${la.hash(e)}`,
        widthFactor: e.widthFactor,
        heightFactor: e.heightFactor,
        centerAnchorX: e.centerAnchorX,
        centerAnchorY: e.centerAnchorY,
        stops: Sa(e).map(n => ({
            color: n.value,
            alpha: Jp.getAlpha(n.value) * e.alpha,
            position: n.position
        }))
    }
}
function wk(e) {
    if (!ke(e) || e.charAt(e.length - 1) !== "%")
        return !1;
    let n = e.slice(0, -1)
      , r = parseFloat(n);
    return mn(r)
}
function kk(e) {
    let t = e.slice(0, -1)
      , n = parseFloat(t);
    return mn(n) ? n : 50
}
function IS(e) {
    return wk(e) ? kk(e) / 100 : e === "left" ? 0 : e === "right" ? 1 : .5
}
function FS(e) {
    return wk(e) ? kk(e) / 100 : e === "top" ? 0 : e === "bottom" ? 1 : .5
}
function z4(e, t, n, r) {
    if (e = Be.get(e, "#09F"),
    !sr.isImageObject(e) || !e.pixelWidth || !e.pixelHeight)
        return;
    let i = e.pixelWidth, o = e.pixelHeight, s, {fit: a} = e, l = 1, c = 1, u = 0, f = 0;
    if (a === "fill" || a === "fit" || a === "tile" || !a) {
        let m = 1
          , g = 1
          , y = i / o
          , S = t.height * y
          , h = t.width / y
          , p = S / t.width
          , v = h / t.height;
        if (a === "tile") {
            e.backgroundSize ?? (e.backgroundSize = 1),
            l = Math.round(e.backgroundSize * (i / 2)),
            c = Math.round(e.backgroundSize * (o / 2));
            let x = t.x ?? 0
              , C = t.y ?? 0
              , w = 0
              , T = 0;
            r && (w = x,
            T = C),
            u = (t.width - l) * IS(e.positionX) + w,
            f = (t.height - c) * FS(e.positionY) + T,
            s = `translate(${u + x}, ${f + C})`
        } else
            (a === "fill" || !a ? v > p : v < p) ? (g = v,
            f = (1 - v) * FS(e.positionY)) : (m = p,
            u = (1 - p) * IS(e.positionX)),
            s = `translate(${u}, ${f}) scale(${m}, ${g})`
    }
    return {
        id: `id${n}g-fillImage`,
        path: e.src ?? "",
        transform: s,
        width: l,
        height: c,
        offsetX: u,
        offsetY: f
    }
}
var N4 = "framer/asset-reference,";
function $4(e) {
    return e.startsWith(`data:${N4}`)
}
function H4(e, t) {
    if (/^\w+:/.test(e) && !$4(e))
        return e;
    typeof t != "number" ? t = void 0 : t <= 512 ? t = 512 : t <= 1024 ? t = 1024 : t <= 2048 ? t = 2048 : t = 4096;
    let n = Fe.current() === "EXPORT";
    return Ye.assetResolver(e, {
        pixelSize: t,
        isExport: n
    }) ?? ""
}
var j4 = ({id: e, path: t, transform: n, repeat: r, width: i, height: o, offsetX: s, offsetY: a}) => {
    let l = H4(t);
    return k("pattern", {
        id: e,
        width: r ? i : "100%",
        height: r ? o : "100%",
        patternContentUnits: r ? void 0 : "objectBoundingBox",
        patternUnits: r ? "userSpaceOnUse" : void 0,
        x: r ? s : void 0,
        y: r ? a : void 0,
        children: k("image", {
            width: r ? i : 1,
            height: r ? o : 1,
            href: l,
            preserveAspectRatio: "none",
            transform: r ? void 0 : n,
            x: r ? 0 : void 0,
            y: r ? 0 : void 0
        }, l)
    })
}
  , LS = lr()
  , W4 = class {
    constructor(e, t, n, r, i=0) {
        this.id = e,
        this.svg = t,
        this.innerHTML = n,
        this.viewBox = r,
        this.count = i
    }
}
  , U4 = class {
    constructor() {
        P(this, "entries", new Map)
    }
    debugGetEntries() {
        return this.entries
    }
    subscribe(e, t, n) {
        if (!e || e === "")
            return "";
        let r = this.entries.get(e);
        if (!r) {
            n || (n = "svg" + String(Ew(e)) + "_" + String(e.length));
            let i = e, o, s = X4(e);
            s && (t && Y4(s, n),
            s.id = n,
            o = Q4(s),
            i = s.outerHTML),
            r = this.createDOMElementFor(i, n, o),
            this.entries.set(e, r)
        }
        return r.count += 1,
        r.innerHTML
    }
    getViewBox(e) {
        if (!e || e === "")
            return;
        let t = this.entries.get(e);
        return t?.viewBox
    }
    unsubscribe(e) {
        if (!e || e === "")
            return;
        let t = this.entries.get(e);
        t && (t.count -= 1,
        !(t.count > 0) && setTimeout( () => this.maybeRemoveEntry(e), 5e3))
    }
    maybeRemoveEntry(e) {
        let t = this.entries.get(e);
        t && (t.count > 0 || (this.entries.delete(e),
        this.removeDOMElement(t)))
    }
    removeDOMElement(e) {
        let t = "container_" + e.id;
        if (LS) {
            let n = document?.querySelector("#" + t);
            n?.remove()
        }
    }
    createDOMElementFor(e, t, n) {
        let r = "container_" + t;
        if (LS) {
            let a = document.querySelector("#svg-templates");
            if (a || (a = document.createElement("div"),
            a.id = "svg-templates",
            a.style.position = "absolute",
            a.style.top = "0",
            a.style.left = "0",
            a.style.width = "0",
            a.style.height = "0",
            a.style.overflow = "hidden",
            document.body.appendChild(a)),
            !document.querySelector("#" + r)) {
                let l = document.createElement("div");
                l.id = r,
                l.innerHTML = e,
                l.firstElementChild && (l.firstElementChild.id = t),
                a.appendChild(l)
            }
        }
        let i = n ? `0 0 ${n.width} ${n.height}` : void 0
          , s = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="width: 100%; height: 100%"${i ? ` viewBox="${i}"` : ""}><use href="#${t}"></use></svg>`;
        return new W4(t,e,s,i)
    }
    clear() {
        this.entries.clear()
    }
    generateTemplates() {
        let e = []
          , t = "position: absolute; overflow: hidden; top: 0; left: 0; width: 0; height: 0";
        e.push(`<div id="svg-templates" style="${t}">`);
        for (let n of this.entries.values()) {
            let r = "container_" + n.id;
            e.push(`  <div id="${r}">`),
            e.push(`    ${n.svg}`),
            e.push("  </div>")
        }
        return e.push("</div>"),
        e.join(`
`)
    }
}
  , yo = new U4;
function X4(e) {
    if (typeof DOMParser > "u") {
        console.warn("unable to find DOMParser");
        return
    }
    try {
        let r = new DOMParser().parseFromString(e, "text/html").getElementsByTagName("svg")[0];
        if (!r)
            throw Error("no svg element found");
        return r
    } catch {
        return
    }
}
function Y4(e, t) {
    let n = G4(t);
    Ck(e, n)
}
function G4(e) {
    return e.replace(/[^\w\-:.]|^[^a-z]+/gi, "")
}
function Ck(e, t) {
    K4(e, t),
    Array.from(e.children).forEach(r => {
        Ck(r, t)
    }
    )
}
function K4(e, t) {
    e.getAttributeNames().forEach(r => {
        let i = e.getAttribute(r);
        if (!i)
            return;
        if (r === "id" && e.setAttribute(r, `${t}_${i}`),
        r === "href" || r === "xlink:href") {
            let[s,a] = i.split("#");
            if (s)
                return;
            e.setAttribute(r, `#${t}_${a}`);
            return
        }
        let o = "url(#";
        if (i.includes(o)) {
            let s = i.replace(o, `${o}${t}_`);
            e.setAttribute(r, s)
        }
    }
    )
}
var q4 = {
    cm: 96 / 2.54,
    mm: 96 / 2.54 / 10,
    Q: 96 / 2.54 / 40,
    in: 96,
    pc: 96 / 6,
    pt: 96 / 72,
    px: 1,
    em: 16,
    ex: 8,
    ch: 8,
    rem: 16
};
function MS(e) {
    var t;
    if (!e)
        return;
    let n = /(-?[\d.]+)([a-z%]*)/.exec(e);
    if (!(n?.[1] === void 0 || n?.[2] === void 0) && !((t = n[2]) != null && t.startsWith("%")))
        return Math.round(parseFloat(n[1]) * (q4[n[2]] || 1))
}
function Q4(e) {
    let t = MS(e.getAttribute("width"))
      , n = MS(e.getAttribute("height"));
    if (!(typeof t != "number" || typeof n != "number") && !(t <= 0 || n <= 0))
        return {
            width: t,
            height: n
        }
}
function N8(e) {
    let t = ya()
      , n = xa(e)
      , r = b.useRef(null)
      , i = t4();
    return cu(e, r),
    k(r5, {
        ...e,
        innerRef: r,
        parentSize: t,
        layoutId: n,
        providedWindow: i
    })
}
var Z4 = 5e4;
function J4(e) {
    return e.indexOf("image") >= 0
}
function e5(e) {
    return e.indexOf("var(--") >= 0
}
function t5(e) {
    return !!(e.borderRadius || e.borderBottomLeftRadius || e.borderBottomRightRadius || e.borderTopLeftRadius || e.borderTopRightRadius)
}
function OS(e, t) {
    var n, r;
    let i = e.current;
    if (!i)
        return;
    let o = t.providedWindow ?? jt
      , s = i.firstElementChild;
    if (!s || !(s instanceof o.SVGSVGElement))
        return;
    if (!s.getAttribute("viewBox")) {
        let m = yo.getViewBox(t.svg);
        m && s.setAttribute("viewBox", m)
    }
    let {withExternalLayout: a, parentSize: l} = t;
    if (!a && ga(t) && l !== 1 && l !== 2)
        return;
    let {intrinsicWidth: u, intrinsicHeight: f, _constraints: d} = t;
    ((n = s.viewBox.baseVal) == null ? void 0 : n.width) === 0 && ((r = s.viewBox.baseVal) == null ? void 0 : r.height) === 0 && W(u) && W(f) && s.setAttribute("viewBox", `0 0 ${u} ${f}`),
    d && d.aspectRatio ? s.setAttribute("preserveAspectRatio", "") : s.setAttribute("preserveAspectRatio", "none"),
    s.setAttribute("width", "100%"),
    s.setAttribute("height", "100%")
}
function n5() {
    return b.useInsertionEffect( () => {
        ba()
    }
    , []),
    null
}
var r5 = ( () => {
    var e;
    return e = class extends Js {
        constructor() {
            super(...arguments),
            P(this, "container", b.createRef()),
            P(this, "svgElement", null),
            P(this, "setSVGElement", t => {
                this.svgElement = t,
                this.setLayerElement(t)
            }
            ),
            P(this, "previouslyRenderedSVG", ""),
            P(this, "unmountedSVG", "")
        }
        static frame(t) {
            return ra(t, t.parentSize || 0)
        }
        get frame() {
            return ra(this.props, this.props.parentSize || 0)
        }
        componentDidMount() {
            if (this.unmountedSVG) {
                let {svgContentId: t} = this.props
                  , n = t ? "svg" + t : null;
                yo.subscribe(this.unmountedSVG, !t, n),
                this.previouslyRenderedSVG = this.unmountedSVG
            }
            this.props.svgContentId || OS(this.container, this.props)
        }
        componentWillUnmount() {
            yo.unsubscribe(this.previouslyRenderedSVG),
            this.unmountedSVG = this.previouslyRenderedSVG,
            this.previouslyRenderedSVG = ""
        }
        componentDidUpdate(t) {
            if (super.componentDidUpdate(t),
            this.props.svgContentId)
                return;
            let {fill: n} = this.props;
            sr.isImageObject(n) && sr.isImageObject(t.fill) && n.src !== t.fill.src && Tw(this.svgElement, "fill", null, !1),
            OS(this.container, this.props)
        }
        collectLayout(t, n) {
            if (this.props.withExternalLayout) {
                n.width = "100%",
                n.height = "100%",
                n.aspectRatio = "inherit";
                return
            }
            let r = this.frame
              , {rotation: i, intrinsicWidth: o, intrinsicHeight: s, width: a, height: l} = this.props
              , c = Be.getNumber(i);
            if (t.opacity = W(this.props.opacity) ? this.props.opacity : 1,
            Fe.hasRestrictions() && r) {
                Object.assign(t, {
                    transform: `translate(${r.x}px, ${r.y}px) rotate(${c.toFixed(4)}deg)`,
                    width: `${r.width}px`,
                    height: `${r.height}px`
                }),
                ga(this.props) && (t.position = "absolute");
                let u = r.width / (o || 1)
                  , f = r.height / (s || 1);
                n.transformOrigin = "top left";
                let {zoom: d, target: m} = Yc;
                if (m === "EXPORT") {
                    let g = d > 1 ? d : 1;
                    n.transform = `scale(${u * g}, ${f * g})`,
                    n.zoom = 1 / g
                } else
                    n.transform = `scale(${u}, ${f})`;
                o && s && (n.width = o,
                n.height = s)
            } else {
                let {left: u, right: f, top: d, bottom: m} = this.props;
                Object.assign(t, {
                    left: u,
                    right: f,
                    top: d,
                    bottom: m,
                    width: a,
                    height: l,
                    rotate: c
                }),
                Object.assign(n, {
                    left: 0,
                    top: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute"
                })
            }
        }
        render() {
            let {id: t, visible: n, style: r, fill: i, svg: o, intrinsicHeight: s, intrinsicWidth: a, title: l, description: c, layoutId: u, className: f, variants: d, withExternalLayout: m, innerRef: g, svgContentId: y, height: S, opacity: h, width: p, ...v} = this.props;
            if (!m && (!n || !t))
                return null;
            let x = t ?? u ?? "svg"
              , C = this.frame
              , w = C || {
                width: a || 100,
                height: s || 100
            }
              , T = {
                ...r,
                imageRendering: "pixelated",
                flexShrink: 0
            }
              , E = {};
            this.collectLayout(T, E),
            AD(this.props, T),
            tm(this.props, T),
            Js.applyWillChange(this.props, T, !1);
            let _ = null;
            if (typeof i == "string" || V.isColorObject(i)) {
                let Y = V.isColorObject(i) ? i.initialValue || V.toRgbString(i) : i;
                T.fill = Y,
                T.color = Y
            } else if (aa.isLinearGradient(i)) {
                let Y = i
                  , oe = `${encodeURI(t || "")}g${aa.hash(Y)}`;
                T.fill = `url(#${oe})`;
                let {stops: Le, x1: U, x2: K, y1: X, y2: nt} = V4(Y, x);
                _ = k("svg", {
                    ref: this.setSVGElement,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "100%",
                    height: "100%",
                    style: {
                        position: "absolute"
                    },
                    children: k("linearGradient", {
                        id: oe,
                        x1: U,
                        x2: K,
                        y1: X,
                        y2: nt,
                        children: Le.map( (ae, ze) => k("stop", {
                            offset: ae.position,
                            stopColor: ae.color,
                            stopOpacity: ae.alpha
                        }, ze))
                    })
                })
            } else if (la.isRadialGradient(i)) {
                let Y = i
                  , oe = `${encodeURI(t || "")}g${la.hash(Y)}`;
                T.fill = `url(#${oe})`;
                let Le = B4(Y, x);
                _ = k("svg", {
                    ref: this.setSVGElement,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "100%",
                    height: "100%",
                    style: {
                        position: "absolute"
                    },
                    children: k("radialGradient", {
                        id: oe,
                        cy: Y.centerAnchorY,
                        cx: Y.centerAnchorX,
                        r: Y.widthFactor,
                        children: Le.stops.map( (U, K) => k("stop", {
                            offset: U.position,
                            stopColor: U.color,
                            stopOpacity: U.alpha
                        }, K))
                    })
                })
            } else if (sr.isImageObject(i)) {
                let Y = z4(i, w, x);
                Y && (T.fill = `url(#${Y.id})`,
                _ = k("svg", {
                    ref: this.setSVGElement,
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    width: "100%",
                    height: "100%",
                    style: {
                        position: "absolute"
                    },
                    children: k("defs", {
                        children: k(j4, {
                            ...Y
                        })
                    })
                }))
            }
            let R = {
                "data-framer-component-type": "SVG"
            }
              , B = !C;
            B && Object.assign(R, hw(this.props.center));
            let A = !_ && !T.fill && !T.background && !T.backgroundImage && o.length < Z4 && !J4(o) && !e5(o)
              , ne = null;
            if (A)
                T.backgroundSize = "100% 100%",
                T.backgroundImage = `url('data:image/svg+xml;utf8,${encodeURIComponent(o)}')`,
                yo.unsubscribe(this.previouslyRenderedSVG),
                this.previouslyRenderedSVG = "";
            else {
                let Y = y ? "svg" + y : null
                  , oe = yo.subscribe(o, !y, Y);
                yo.unsubscribe(this.previouslyRenderedSVG),
                this.previouslyRenderedSVG = o,
                t5(T) && (T.overflow = "hidden"),
                ne = Q(Ce, {
                    children: [_, k("div", {
                        className: "svgContainer",
                        style: E,
                        ref: this.container,
                        dangerouslySetInnerHTML: {
                            __html: oe
                        }
                    }, sr.isImageObject(i) ? i.src : "")]
                })
            }
            let q = su(this.props.as)
              , {href: H, target: Z, rel: ie, onClick: G} = this.props;
            return Q(q, {
                ...R,
                ...v,
                layoutId: u,
                transformTemplate: B ? au(this.props.center) : void 0,
                id: t,
                ref: g,
                style: T,
                className: f,
                variants: d,
                tabIndex: this.props.tabIndex,
                role: l || c ? "img" : void 0,
                "aria-label": l,
                "aria-description": c,
                href: H,
                target: Z,
                rel: ie,
                onClick: G,
                children: [ne, k(n5, {})]
            })
        }
    }
    ,
    P(e, "supportsConstraints", !0),
    P(e, "defaultSVGProps", {
        left: void 0,
        right: void 0,
        top: void 0,
        bottom: void 0,
        style: void 0,
        _constraints: {
            enabled: !0,
            aspectRatio: null
        },
        parentSize: 0,
        rotation: 0,
        visible: !0,
        svg: "",
        shadows: []
    }),
    P(e, "defaultProps", {
        ...Js.defaultProps,
        ...e.defaultSVGProps
    }),
    e
}
)();
var i5 = "(?:<a[^>]*>)?"
  , o5 = "(?:</a>)?"
  , s5 = "<[^>]+>"
  , a5 = "</[^>]+>"
  , l5 = "<(?:div|span)[^>]*>"
  , c5 = "</(?:div|span)>"
  , u5 = "<[^>]+>"
  , f5 = "</[^>]+>"
  , W8 = new RegExp(`^(${i5}${s5}${l5}${u5}).*?(${f5}).*?(${c5}${a5}${o5})$`,"s");
var nu = class {
    constructor(e) {
        P(this, "__class", "PathSegment"),
        P(this, "x", 0),
        P(this, "y", 0),
        P(this, "handleMirroring", "straight"),
        P(this, "handleOutX", 0),
        P(this, "handleOutY", 0),
        P(this, "handleInX", 0),
        P(this, "handleInY", 0),
        P(this, "radius", 0),
        e && Object.assign(this, e)
    }
    merge(e) {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this, e)
    }
}
;
P(nu, "displayName", "WithClassDiscriminatorMixin(PathSegment)");
nu.prototype.__class = "PathSegment";
(e => {
    e.point = t => ({
        x: t.x,
        y: t.y
    }),
    e.handleOut = t => ({
        x: t.handleOutX,
        y: t.handleOutY
    }),
    e.handleIn = t => ({
        x: t.handleInX,
        y: t.handleInY
    }),
    e.calculatedHandleOut = t => {
        switch (t.handleMirroring) {
        case "symmetric":
        case "disconnected":
        case "asymmetric":
            return et.add((0,
            e.point)(t), (0,
            e.handleOut)(t));
        default:
            return {
                x: t.x,
                y: t.y
            }
        }
    }
    ,
    e.calculatedHandleIn = t => {
        switch (t.handleMirroring) {
        case "symmetric":
            return et.subtract((0,
            e.point)(t), (0,
            e.handleOut)(t));
        case "disconnected":
        case "asymmetric":
            return et.add((0,
            e.point)(t), (0,
            e.handleIn)(t));
        default:
            return (0,
            e.point)(t)
        }
    }
    ,
    e.curveDefault = (t, n) => {
        if (t.length > 2) {
            let r, i;
            n === 0 ? r = t[t.length - 1] : r = t[n - 1],
            n === t.length - 1 ? i = t[0] : i = t[n + 1],
            re(r, "pointBefore should be defined"),
            re(i, "pointAfter should be defined");
            let o = et.subtract((0,
            e.point)(i), (0,
            e.point)(r));
            return {
                x: o.x / 4,
                y: o.y / 4
            }
        }
        return {
            x: 10,
            y: 10
        }
    }
}
)(nu || (nu = {}));
function Q8(e, t, n) {
    let r = Tk(t);
    !n?.supportsExplicitInterCodegen && !r.some(i => i.explicitInter === !1) && r.push({
        explicitInter: !1,
        fonts: []
    }),
    Object.assign(e, {
        fonts: r
    })
}
function Z8(e) {
    return e.fonts ?? []
}
function J8(e) {
    return e.length === 0 ? [{
        explicitInter: !1,
        fonts: []
    }] : Tk(e)
}
function Tk(e) {
    let t = {
        explicitInter: !1,
        fonts: []
    }
      , n = [];
    for (let r of e)
        h5(r) ? n.push(r) : t.fonts.push(p5(r));
    return t.fonts.length > 0 && n.push(t),
    n
}
var d5 = "explicitInter";
function h5(e) {
    return d5 in e
}
function p5(e) {
    let t;
    return e.url.startsWith("https://fonts.gstatic.com/s/") ? t = "google" : e.url.startsWith("https://framerusercontent.com/third-party-assets/fontshare/") ? t = "fontshare" : t = "custom",
    {
        ...e,
        source: t
    }
}
var m5 = {
    name: "framer",
    version: "2.4.1",
    main: "build/index.js",
    type: "module",
    exports: {
        ".": "./build/index.js",
        "./package.json": "./package.json",
        "./*": "./build/*"
    },
    files: ["build", "CHANGELOG.md", "README.md", "LICENSE.md", "postinstall.cjs"],
    types: "./build/index.d.ts",
    author: "Framer",
    license: "MIT",
    scripts: {
        prepublishOnly: "make build",
        coverage: "yarn :jest --coverage",
        lint: "yarn format-check:ts && yarn :eslint ./src --ext .ts,.tsx --format codeframe --quiet",
        "format:ts": 'yarn :format "src/**/*.{ts,tsx}"',
        "format-check:ts": 'yarn :format-check "src/**/*.{ts,tsx}"',
        "lint:fix": "yarn lint --fix --cache",
        test: "yarn :jest",
        watch: "yarn :jest --watch",
        postinstall: "node postinstall.cjs"
    },
    dependencies: {
        "@framerjs/router": "workspace:*",
        "@juggle/resize-observer": "^3.3.1",
        eventemitter3: "^3.1.0",
        fontfaceobserver: "^2.1.0",
        "hoist-non-react-statics": "^3.3.2",
        hsluv: "^1.0.1"
    },
    devDependencies: {
        "@microsoft/api-extractor": "^7.42.3",
        "@testing-library/dom": "^8.19.1",
        "@testing-library/jest-dom": "^5.16.5",
        "@testing-library/react": "^13.4.0",
        "@testing-library/user-event": "^14.4.3",
        "@types/google.fonts": "1.0.3",
        "@types/node": "^18.17.15",
        "@types/react": "^18.2.67",
        "@types/react-dom": "^18.2.22",
        "@types/yargs": "^17.0.19",
        "@typescript-eslint/eslint-plugin": "^6.16.0",
        "@typescript-eslint/parser": "^6.16.0",
        chalk: "^4.1.2",
        eslint: "^8.56.0",
        immutable: "^3.8.2",
        "jest-diff": "^29.3.1",
        "jest-junit": "^15.0.0",
        react: "^18.2.0",
        "react-dom": "^18.2.0",
        semver: "^7.5.2",
        typescript: "^5.3.3",
        yargs: "^17.6.2"
    },
    peerDependencies: {
        "framer-motion": "11.1.7",
        react: "^18.2.0",
        "react-dom": "^18.2.0"
    },
    tsdoc: {
        tsdocFlavor: "AEDoc"
    },
    framer: {
        components: [{
            name: "Scroll",
            children: !0,
            properties: [{
                key: "direction",
                title: "Direction",
                kind: "enum",
                options: ["horizontal", "vertical", "both"]
            }]
        }, {
            name: "Page"
        }]
    }
}
  , {version: tH} = m5;
rl.prototype.addChild = function({transformer: e=t => t}) {
    let t = Pe(e(this.get()));
    return this.onChange(n => t.set(e(n))),
    t
}
;
/**
 * @license Emotion v11.0.0
 * MIT License
 *
 * Copyright (c) Emotion team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/*! Bundled license information:

react-is/cjs/react-is.production.min.js:
  (** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
export {b as a, gn as b, Fo as c, rn as d, ku as e, Pm as f, je as g, cr as h, le as i, M as j, $ as k, Gr as l, xt as m, ce as n, D as o, St as p, wt as q, k as r, Q as s, Tn as t, J as u, ft as v, Fy as w, Pn as x, dt as y, FR as z, Ay as A, By as B, ZR as C, u1 as D, DF as E, Vz as F, $z as G, A2 as H, H2 as I, sN as J, Fe as K, gN as L, NL as M, CN as N, AM as O, TN as P, MN as Q, rm as R, aV as S, m$ as T, S$ as U, w$ as V, R$ as W, Kw as X, O$ as Y, wV as Z, N$ as _, j$ as $, Y$ as aa, G$ as ba, W3 as ca, K$ as da, q$ as ea, Q$ as fa, Z$ as ga, n8 as ha, d8 as ia, Uc as ja, F8 as ka, A8 as la, yo as ma, N8 as na, Q8 as oa, Z8 as pa, J8 as qa};
//# sourceMappingURL=chunk-VNLYU6PN.mjs.map
