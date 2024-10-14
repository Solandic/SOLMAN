import "./chunk-42U43NKG.mjs";
import {H as Z, M as T, P as _, R as I, U as N, X as R, c as h, g as w, ia as F, j as v, l as b, n as y, na as g, o as M, oa as D, r as a, s as V, t as f, v as d, w as k} from "./chunk-VNLYU6PN.mjs";
import {c as l} from "./chunk-ELYU6EKT.mjs";
function H(t) {
    return e => a("a", {
        href: "https://www.framer.com",
        title: "Framer - Custom website builder for designers, agencies and startups.",
        children: a(t, {
            ...e,
            onClick: o => {
                var r, C;
                o.preventDefault(),
                l.open(`https://www.framer.com/r/badge/?utm_campaign=freeplanbadge&utm_source=${encodeURIComponent((C = l) === null || C === void 0 || (r = C.location) === null || r === void 0 ? void 0 : r.origin)}`)
            }
            ,
            style: {
                ...e.style,
                cursor: "pointer"
            }
        })
    })
}
var j = H(d.div)
  , X = ["HK2sXlagE", "AN4QiK4rL"]
  , O = "framer-TLVk2"
  , B = {
    AN4QiK4rL: "framer-v-17nhh09",
    HK2sXlagE: "framer-v-n0ccwk"
};
function x(t, ...e) {
    let o = {};
    return e?.forEach(r => r && Object.assign(o, t[r])),
    o
}
var z = {
    damping: 60,
    delay: 0,
    mass: 1,
    stiffness: 500,
    type: "spring"
}
  , G = (t, e) => `translate(-50%, -50%) ${e}`
  , J = ({value: t, children: e}) => {
    let o = v(f)
      , r = t ?? o.transition
      , C = y( () => ({
        ...o,
        transition: r
    }), [JSON.stringify(r)]);
    return a(f.Provider, {
        value: C,
        children: e
    })
}
  , $ = d(h)
  , q = {
    Dark: "AN4QiK4rL",
    Light: "HK2sXlagE"
}
  , Y = ({height: t, id: e, width: o, ...r}) => {
    var C, n;
    return {
        ...r,
        variant: (n = (C = q[r.variant]) !== null && C !== void 0 ? C : r.variant) !== null && n !== void 0 ? n : "HK2sXlagE"
    }
}
  , e1 = (t, e) => e.join("-") + t.layoutDependency
  , t1 = w(function(t, e) {
    let {activeLocale: o, setLocale: r} = Z()
      , {style: C, className: n, layoutId: p, variant: K, ...A} = Y(t)
      , {baseVariant: m, classNames: E, gestureVariant: c, setGestureState: i, setVariant: C1, variants: u} = F({
        cycleOrder: X,
        defaultVariant: "HK2sXlagE",
        variant: K,
        variantClassNames: B
    })
      , L = e1(t, u)
      , P = M(null)
      , U = b()
      , S = []
      , a1 = N();
    return a(k, {
        id: p ?? U,
        children: a($, {
            animate: u,
            initial: !1,
            children: a(J, {
                value: z,
                children: a(j, {
                    ...A,
                    className: I(O, ...S, "framer-n0ccwk", n, E),
                    "data-framer-name": "Light",
                    layoutDependency: L,
                    layoutId: "HK2sXlagE",
                    onHoverEnd: () => i({
                        isHovered: !1
                    }),
                    onHoverStart: () => i({
                        isHovered: !0
                    }),
                    onTap: () => i({
                        isPressed: !1
                    }),
                    onTapCancel: () => i({
                        isPressed: !1
                    }),
                    onTapStart: () => i({
                        isPressed: !0
                    }),
                    ref: e ?? P,
                    style: {
                        "--border-bottom-width": "0px",
                        "--border-color": "rgba(0, 0, 0, 0)",
                        "--border-left-width": "0px",
                        "--border-right-width": "0px",
                        "--border-style": "solid",
                        "--border-top-width": "0px",
                        backgroundColor: "rgb(255, 255, 255)",
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        boxShadow: "0px 0.6369534988189116px 1.1465162978740409px -1.125px rgba(0, 0, 0, 0.26045), 0px 1.9316049144836143px 3.4768888460705054px -2.25px rgba(0, 0, 0, 0.24103), 0px 5.106122817187569px 9.191021070937623px -3.375px rgba(0, 0, 0, 0.19341), 0px 16px 28.799999999999997px -4.5px rgba(0, 0, 0, 0.03)",
                        ...C
                    },
                    variants: {
                        AN4QiK4rL: {
                            "--border-bottom-width": "1px",
                            "--border-color": "rgba(255, 255, 255, 0.15)",
                            "--border-left-width": "1px",
                            "--border-right-width": "1px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                            backgroundColor: "rgb(0, 0, 0)",
                            boxShadow: "0.3184767494094558px 0.6369534988189116px 0.7121356609327092px -0.9375px rgba(0, 0, 0, 0.51107), 0.9658024572418071px 1.9316049144836143px 2.159599947229015px -1.875px rgba(0, 0, 0, 0.48275), 2.5530614085937846px 5.106122817187569px 5.708818860347068px -2.8125px rgba(0, 0, 0, 0.4133), 8px 16px 17.88854381999832px -3.75px rgba(0, 0, 0, 0.175)"
                        }
                    },
                    ...x({
                        AN4QiK4rL: {
                            "data-border": !0,
                            "data-framer-name": "Dark"
                        }
                    }, m, c),
                    children: V(d.div, {
                        className: "framer-19yaanm",
                        layoutDependency: L,
                        layoutId: "U6HIU1IEW",
                        transformTemplate: G,
                        children: [a(g, {
                            className: "framer-tmnpxq",
                            "data-framer-name": "madeinframer",
                            layout: "position",
                            layoutDependency: L,
                            layoutId: "yNIM1QDb2",
                            opacity: 1,
                            svgContentId: 2813378046,
                            withExternalLayout: !0,
                            ...x({
                                AN4QiK4rL: {
                                    svgContentId: 2172475473
                                }
                            }, m, c)
                        }), a(g, {
                            className: "framer-1v3cvgh",
                            description: "Made in Framer. The professional custom website design builder for startups, designers and agencies.",
                            layout: "position",
                            layoutDependency: L,
                            layoutId: "JJTRaVRyb-shape",
                            opacity: 1,
                            svgContentId: 3303098675,
                            title: "Framer - Custom site builder",
                            withExternalLayout: !0,
                            ...x({
                                AN4QiK4rL: {
                                    svgContentId: 4141894882
                                }
                            }, m, c)
                        })]
                    })
                })
            })
        })
    })
})
  , r1 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-TLVk2.framer-bmpgw8, .framer-TLVk2 .framer-bmpgw8 { display: block; }", ".framer-TLVk2.framer-n0ccwk { height: 36px; overflow: hidden; position: relative; width: 142px; will-change: var(--framer-will-change-override, transform); }", ".framer-TLVk2 .framer-19yaanm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; left: 50%; overflow: visible; padding: 0px; position: absolute; top: 50%; width: min-content; }", ".framer-TLVk2 .framer-tmnpxq { flex: none; height: 16px; position: relative; width: 11px; z-index: 2; }", ".framer-TLVk2 .framer-1v3cvgh { flex: none; height: 11px; position: relative; width: 92px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-TLVk2 .framer-19yaanm { gap: 0px; } .framer-TLVk2 .framer-19yaanm > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-TLVk2 .framer-19yaanm > :first-child { margin-left: 0px; } .framer-TLVk2 .framer-19yaanm > :last-child { margin-right: 0px; } }", '.framer-TLVk2[data-border="true"]::after, .framer-TLVk2 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }']
  , s = R(t1, r1, "framer-TLVk2")
  , m1 = s;
s.displayName = "Badge";
s.defaultProps = {
    height: 36,
    width: 142
};
_(s, {
    variant: {
        options: ["HK2sXlagE", "AN4QiK4rL"],
        optionTitles: ["Light", "Dark"],
        title: "Variant",
        type: T.Enum
    }
});
D(s, [{
    explicitInter: !0,
    fonts: []
}], {
    supportsExplicitInterCodegen: !0
});
var c1 = {
    exports: {
        Props: {
            type: "tsType",
            annotations: {
                framerContractVersion: "1"
            }
        },
        default: {
            type: "reactComponent",
            name: "FramerPX9hIOIVM",
            slots: [],
            annotations: {
                framerIntrinsicHeight: "36",
                framerCanvasComponentVariantDetails: '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"AN4QiK4rL":{"layout":["fixed","fixed"]}}}',
                framerDisplayContentsDiv: "false",
                framerComponentViewportWidth: "true",
                framerIntrinsicWidth: "142",
                framerContractVersion: "1",
                framerImmutableVariables: "true"
            }
        },
        __FramerMetadata__: {
            type: "variable"
        }
    }
};
export {c1 as __FramerMetadata__, m1 as default};
//# sourceMappingURL=__framer-badge.S2NEBKHE.mjs.map
