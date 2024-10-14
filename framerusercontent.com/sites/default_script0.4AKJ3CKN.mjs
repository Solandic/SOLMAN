import {$ as D, D as g, E as l, F as f, G as E, I as F, L as v, N as I, Q as k, T as b, W as P, e as r, h as d} from "./chunk-VNLYU6PN.mjs";
import {c as t} from "./chunk-ELYU6EKT.mjs";
var A = "default"in l ? g : l
  , c = {}
  , N = A;
c.createRoot = N.createRoot;
c.hydrateRoot = N.hydrateRoot;
var p = c.createRoot
  , O = c.hydrateRoot;
t.__framer_importFromPackage = (e, o) => () => r(v, {
    error: 'Package component not supported: "' + o + '" in "' + e + '"'
});
t.process = {
    ...t.process,
    env: {
        ...t.process ? t.process.env : void 0,
        NODE_ENV: "production"
    }
};
I();
t.__framer_events = t.__framer_events || [];
function x() {
    t.__framer_events.push(arguments)
}
(async () => {
    let e = {
        augiA20Il: {
            elements: {
                ce_tysghM: "links",
                cy0wHCQcG: "how-to-buy",
                jUFl27kr9: "tokenomics",
                mlakVCiPs: "about"
            },
            page: f( () => import("./xGiId_BuOVQZu-pdmHf5jq61k3EBt1TGdU8I9Tm4x3A.6MEIPHH7.mjs")),
            path: "/"
        }
    }, o = {}, u = [{
        code: "en-US",
        id: "default",
        name: "English",
        slug: ""
    }], C = f( () => import("./__framer-not-found-page.ERLPQBYR.mjs")), s = document.getElementById("main"), n, i, _, m = !1;
    if ("framerHydrateV2"in s.dataset) {
        let a = JSON.parse(s.dataset.framerHydrateV2);
        n = a.routeId,
        i = a.localeId,
        _ = a.pathVariables,
        m = !0
    } else {
        let a = F(e, decodeURIComponent(location.pathname), !0, u);
        n = a.routeId,
        i = a.localeId,
        _ = a.pathVariables
    }
    let R = await e[n].page.preload();
    e[n].page = R;
    let y = !1
      , H = r(D, {
        RootComponent: R,
        isWebsite: !0,
        routeId: n,
        pathVariables: _,
        routes: e,
        collectionUtils: o,
        notFoundPage: C,
        isReducedMotion: void 0,
        localeId: i,
        locales: u,
        preserveQueryParams: void 0,
        enableImproveInpDuringHydration: y,
        shouldMarkHydrationEnd: m
    })
      , M = r(k, {
        children: H,
        value: {
            imgSizesWorkaroundEnabled: !1
        }
    })
      , h = r(E, {
        children: M,
        value: {
            routes: {}
        }
    });
    m ? d( () => {
        performance.mark("framer-hydration-start"),
        y && t.__FRAMER_TURN_OFF_REACT_EVENT_HANDLING__?.(),
        O(s, h)
    }
    ) : p(s).render(h)
}
)().catch(e => {
    throw x("published_site_load_error", {
        message: String(e),
        stack: e instanceof Error && typeof e.stack == "string" ? e.stack : null
    }),
    e
}
);
(async () => {
    let {default: e} = await import("./__framer-badge.S2NEBKHE.mjs")
      , o = b(P);
    d( () => {
        p(document.getElementById("__framer-badge-container")).render(r(o, {
            className: "__framer-badge",
            __framer__threshold: .5,
            __framer__animateOnce: !0,
            __framer__opacity: 0,
            __framer__targetOpacity: 1,
            __framer__rotate: 0,
            __framer__x: 0,
            __framer__y: 10,
            __framer__scale: 1,
            __framer__transition: {
                type: "spring",
                ease: [.44, 0, .56, 1],
                duration: .3,
                delay: 1,
                stiffness: 350,
                damping: 40,
                mass: 1.5
            },
            __framer__rotateX: 0,
            __framer__rotateY: 0,
            __framer__perspective: 1200
        }, r(e)))
    }
    )
}
)();
//# sourceMappingURL=default_script0.4AKJ3CKN.mjs.map
