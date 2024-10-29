import * as f from "react";
import Se, { useState as xe, useEffect as ge, useContext as ln, useRef as ze, useLayoutEffect as gc, useCallback as kt, useMemo as Be, createContext as Gr, memo as hc, useReducer as li, cloneElement as bc, forwardRef as yc } from "react";
import xr, { unstable_batchedUpdates as vr, createPortal as wc } from "react-dom";
function xc(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var xa = { exports: {} }, gr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ti;
function Ec() {
  if (Ti) return gr;
  Ti = 1;
  var n = Se, t = Symbol.for("react.element"), e = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, r = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(l, s, c) {
    var u, d = {}, m = null, v = null;
    c !== void 0 && (m = "" + c), s.key !== void 0 && (m = "" + s.key), s.ref !== void 0 && (v = s.ref);
    for (u in s) o.call(s, u) && !a.hasOwnProperty(u) && (d[u] = s[u]);
    if (l && l.defaultProps) for (u in s = l.defaultProps, s) d[u] === void 0 && (d[u] = s[u]);
    return { $$typeof: t, type: l, key: m, ref: v, props: d, _owner: r.current };
  }
  return gr.Fragment = e, gr.jsx = i, gr.jsxs = i, gr;
}
var hr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ii;
function Sc() {
  return Ii || (Ii = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Se, t = Symbol.for("react.element"), e = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), l = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), x = Symbol.iterator, h = "@@iterator";
    function S(g) {
      if (g === null || typeof g != "object")
        return null;
      var O = x && g[x] || g[h];
      return typeof O == "function" ? O : null;
    }
    var w = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(g) {
      {
        for (var O = arguments.length, H = new Array(O > 1 ? O - 1 : 0), ie = 1; ie < O; ie++)
          H[ie - 1] = arguments[ie];
        C("error", g, H);
      }
    }
    function C(g, O, H) {
      {
        var ie = w.ReactDebugCurrentFrame, be = ie.getStackAddendum();
        be !== "" && (O += "%s", H = H.concat([be]));
        var oe = H.map(function(T) {
          return String(T);
        });
        oe.unshift("Warning: " + O), Function.prototype.apply.call(console[g], console, oe);
      }
    }
    var q = !1, y = !1, P = !1, I = !1, V = !1, N;
    N = Symbol.for("react.module.reference");
    function _(g) {
      return !!(typeof g == "string" || typeof g == "function" || g === o || g === a || V || g === r || g === c || g === u || I || g === v || q || y || P || typeof g == "object" && g !== null && (g.$$typeof === m || g.$$typeof === d || g.$$typeof === i || g.$$typeof === l || g.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      g.$$typeof === N || g.getModuleId !== void 0));
    }
    function k(g, O, H) {
      var ie = g.displayName;
      if (ie)
        return ie;
      var be = O.displayName || O.name || "";
      return be !== "" ? H + "(" + be + ")" : H;
    }
    function X(g) {
      return g.displayName || "Context";
    }
    function M(g) {
      if (g == null)
        return null;
      if (typeof g.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof g == "function")
        return g.displayName || g.name || null;
      if (typeof g == "string")
        return g;
      switch (g) {
        case o:
          return "Fragment";
        case e:
          return "Portal";
        case a:
          return "Profiler";
        case r:
          return "StrictMode";
        case c:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case l:
            var O = g;
            return X(O) + ".Consumer";
          case i:
            var H = g;
            return X(H._context) + ".Provider";
          case s:
            return k(g, g.render, "ForwardRef");
          case d:
            var ie = g.displayName || null;
            return ie !== null ? ie : M(g.type) || "Memo";
          case m: {
            var be = g, oe = be._payload, T = be._init;
            try {
              return M(T(oe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var J = Object.assign, te = 0, me, ye, se, Q, R, Y, ae;
    function G() {
    }
    G.__reactDisabledLog = !0;
    function K() {
      {
        if (te === 0) {
          me = console.log, ye = console.info, se = console.warn, Q = console.error, R = console.group, Y = console.groupCollapsed, ae = console.groupEnd;
          var g = {
            configurable: !0,
            enumerable: !0,
            value: G,
            writable: !0
          };
          Object.defineProperties(console, {
            info: g,
            log: g,
            warn: g,
            error: g,
            group: g,
            groupCollapsed: g,
            groupEnd: g
          });
        }
        te++;
      }
    }
    function ue() {
      {
        if (te--, te === 0) {
          var g = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: J({}, g, {
              value: me
            }),
            info: J({}, g, {
              value: ye
            }),
            warn: J({}, g, {
              value: se
            }),
            error: J({}, g, {
              value: Q
            }),
            group: J({}, g, {
              value: R
            }),
            groupCollapsed: J({}, g, {
              value: Y
            }),
            groupEnd: J({}, g, {
              value: ae
            })
          });
        }
        te < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var de = w.ReactCurrentDispatcher, pe;
    function U(g, O, H) {
      {
        if (pe === void 0)
          try {
            throw Error();
          } catch (be) {
            var ie = be.stack.trim().match(/\n( *(at )?)/);
            pe = ie && ie[1] || "";
          }
        return `
` + pe + g;
      }
    }
    var j = !1, $;
    {
      var le = typeof WeakMap == "function" ? WeakMap : Map;
      $ = new le();
    }
    function F(g, O) {
      if (!g || j)
        return "";
      {
        var H = $.get(g);
        if (H !== void 0)
          return H;
      }
      var ie;
      j = !0;
      var be = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var oe;
      oe = de.current, de.current = null, K();
      try {
        if (O) {
          var T = function() {
            throw Error();
          };
          if (Object.defineProperty(T.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(T, []);
            } catch (Ee) {
              ie = Ee;
            }
            Reflect.construct(g, [], T);
          } else {
            try {
              T.call();
            } catch (Ee) {
              ie = Ee;
            }
            g.call(T.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ee) {
            ie = Ee;
          }
          g();
        }
      } catch (Ee) {
        if (Ee && ie && typeof Ee.stack == "string") {
          for (var D = Ee.stack.split(`
`), W = ie.stack.split(`
`), Z = D.length - 1, re = W.length - 1; Z >= 1 && re >= 0 && D[Z] !== W[re]; )
            re--;
          for (; Z >= 1 && re >= 0; Z--, re--)
            if (D[Z] !== W[re]) {
              if (Z !== 1 || re !== 1)
                do
                  if (Z--, re--, re < 0 || D[Z] !== W[re]) {
                    var ne = `
` + D[Z].replace(" at new ", " at ");
                    return g.displayName && ne.includes("<anonymous>") && (ne = ne.replace("<anonymous>", g.displayName)), typeof g == "function" && $.set(g, ne), ne;
                  }
                while (Z >= 1 && re >= 0);
              break;
            }
        }
      } finally {
        j = !1, de.current = oe, ue(), Error.prepareStackTrace = be;
      }
      var ce = g ? g.displayName || g.name : "", Ie = ce ? U(ce) : "";
      return typeof g == "function" && $.set(g, Ie), Ie;
    }
    function qe(g, O, H) {
      return F(g, !1);
    }
    function ke(g) {
      var O = g.prototype;
      return !!(O && O.isReactComponent);
    }
    function _e(g, O, H) {
      if (g == null)
        return "";
      if (typeof g == "function")
        return F(g, ke(g));
      if (typeof g == "string")
        return U(g);
      switch (g) {
        case c:
          return U("Suspense");
        case u:
          return U("SuspenseList");
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case s:
            return qe(g.render);
          case d:
            return _e(g.type, O, H);
          case m: {
            var ie = g, be = ie._payload, oe = ie._init;
            try {
              return _e(oe(be), O, H);
            } catch {
            }
          }
        }
      return "";
    }
    var Re = Object.prototype.hasOwnProperty, He = {}, qt = w.ReactDebugCurrentFrame;
    function dt(g) {
      if (g) {
        var O = g._owner, H = _e(g.type, g._source, O ? O.type : null);
        qt.setExtraStackFrame(H);
      } else
        qt.setExtraStackFrame(null);
    }
    function et(g, O, H, ie, be) {
      {
        var oe = Function.call.bind(Re);
        for (var T in g)
          if (oe(g, T)) {
            var D = void 0;
            try {
              if (typeof g[T] != "function") {
                var W = Error((ie || "React class") + ": " + H + " type `" + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[T] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw W.name = "Invariant Violation", W;
              }
              D = g[T](O, T, ie, H, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Z) {
              D = Z;
            }
            D && !(D instanceof Error) && (dt(be), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ie || "React class", H, T, typeof D), dt(null)), D instanceof Error && !(D.message in He) && (He[D.message] = !0, dt(be), E("Failed %s type: %s", H, D.message), dt(null));
          }
      }
    }
    var tt = Array.isArray;
    function yt(g) {
      return tt(g);
    }
    function Pt(g) {
      {
        var O = typeof Symbol == "function" && Symbol.toStringTag, H = O && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return H;
      }
    }
    function Ge(g) {
      try {
        return nt(g), !1;
      } catch {
        return !0;
      }
    }
    function nt(g) {
      return "" + g;
    }
    function Ht(g) {
      if (Ge(g))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Pt(g)), nt(g);
    }
    var rt = w.ReactCurrentOwner, ot = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, it, Lt, ft;
    ft = {};
    function vt(g) {
      if (Re.call(g, "ref")) {
        var O = Object.getOwnPropertyDescriptor(g, "ref").get;
        if (O && O.isReactWarning)
          return !1;
      }
      return g.ref !== void 0;
    }
    function we(g) {
      if (Re.call(g, "key")) {
        var O = Object.getOwnPropertyDescriptor(g, "key").get;
        if (O && O.isReactWarning)
          return !1;
      }
      return g.key !== void 0;
    }
    function z(g, O) {
      if (typeof g.ref == "string" && rt.current && O && rt.current.stateNode !== O) {
        var H = M(rt.current.type);
        ft[H] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', M(rt.current.type), g.ref), ft[H] = !0);
      }
    }
    function fe(g, O) {
      {
        var H = function() {
          it || (it = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        H.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: H,
          configurable: !0
        });
      }
    }
    function Te(g, O) {
      {
        var H = function() {
          Lt || (Lt = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        H.isReactWarning = !0, Object.defineProperty(g, "ref", {
          get: H,
          configurable: !0
        });
      }
    }
    var Ce = function(g, O, H, ie, be, oe, T) {
      var D = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: g,
        key: O,
        ref: H,
        props: T,
        // Record the component responsible for creating this element.
        _owner: oe
      };
      return D._store = {}, Object.defineProperty(D._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(D, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ie
      }), Object.defineProperty(D, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: be
      }), Object.freeze && (Object.freeze(D.props), Object.freeze(D)), D;
    };
    function Oe(g, O, H, ie, be) {
      {
        var oe, T = {}, D = null, W = null;
        H !== void 0 && (Ht(H), D = "" + H), we(O) && (Ht(O.key), D = "" + O.key), vt(O) && (W = O.ref, z(O, be));
        for (oe in O)
          Re.call(O, oe) && !ot.hasOwnProperty(oe) && (T[oe] = O[oe]);
        if (g && g.defaultProps) {
          var Z = g.defaultProps;
          for (oe in Z)
            T[oe] === void 0 && (T[oe] = Z[oe]);
        }
        if (D || W) {
          var re = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          D && fe(T, re), W && Te(T, re);
        }
        return Ce(g, D, W, be, ie, rt.current, T);
      }
    }
    var Me = w.ReactCurrentOwner, lt = w.ReactDebugCurrentFrame;
    function Ne(g) {
      if (g) {
        var O = g._owner, H = _e(g.type, g._source, O ? O.type : null);
        lt.setExtraStackFrame(H);
      } else
        lt.setExtraStackFrame(null);
    }
    var Ae;
    Ae = !1;
    function Fe(g) {
      return typeof g == "object" && g !== null && g.$$typeof === t;
    }
    function Xe() {
      {
        if (Me.current) {
          var g = M(Me.current.type);
          if (g)
            return `

Check the render method of \`` + g + "`.";
        }
        return "";
      }
    }
    function Je(g) {
      return "";
    }
    var Ze = {};
    function Qe(g) {
      {
        var O = Xe();
        if (!O) {
          var H = typeof g == "string" ? g : g.displayName || g.name;
          H && (O = `

Check the top-level render call using <` + H + ">.");
        }
        return O;
      }
    }
    function pt(g, O) {
      {
        if (!g._store || g._store.validated || g.key != null)
          return;
        g._store.validated = !0;
        var H = Qe(O);
        if (Ze[H])
          return;
        Ze[H] = !0;
        var ie = "";
        g && g._owner && g._owner !== Me.current && (ie = " It was passed a child from " + M(g._owner.type) + "."), Ne(g), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', H, ie), Ne(null);
      }
    }
    function Ye(g, O) {
      {
        if (typeof g != "object")
          return;
        if (yt(g))
          for (var H = 0; H < g.length; H++) {
            var ie = g[H];
            Fe(ie) && pt(ie, O);
          }
        else if (Fe(g))
          g._store && (g._store.validated = !0);
        else if (g) {
          var be = S(g);
          if (typeof be == "function" && be !== g.entries)
            for (var oe = be.call(g), T; !(T = oe.next()).done; )
              Fe(T.value) && pt(T.value, O);
        }
      }
    }
    function wt(g) {
      {
        var O = g.type;
        if (O == null || typeof O == "string")
          return;
        var H;
        if (typeof O == "function")
          H = O.propTypes;
        else if (typeof O == "object" && (O.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        O.$$typeof === d))
          H = O.propTypes;
        else
          return;
        if (H) {
          var ie = M(O);
          et(H, g.props, "prop", ie, g);
        } else if (O.PropTypes !== void 0 && !Ae) {
          Ae = !0;
          var be = M(O);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", be || "Unknown");
        }
        typeof O.getDefaultProps == "function" && !O.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function xt(g) {
      {
        for (var O = Object.keys(g.props), H = 0; H < O.length; H++) {
          var ie = O[H];
          if (ie !== "children" && ie !== "key") {
            Ne(g), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ie), Ne(null);
            break;
          }
        }
        g.ref !== null && (Ne(g), E("Invalid attribute `ref` supplied to `React.Fragment`."), Ne(null));
      }
    }
    var Et = {};
    function $t(g, O, H, ie, be, oe) {
      {
        var T = _(g);
        if (!T) {
          var D = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (D += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var W = Je();
          W ? D += W : D += Xe();
          var Z;
          g === null ? Z = "null" : yt(g) ? Z = "array" : g !== void 0 && g.$$typeof === t ? (Z = "<" + (M(g.type) || "Unknown") + " />", D = " Did you accidentally export a JSX literal instead of a component?") : Z = typeof g, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Z, D);
        }
        var re = Oe(g, O, H, be, oe);
        if (re == null)
          return re;
        if (T) {
          var ne = O.children;
          if (ne !== void 0)
            if (ie)
              if (yt(ne)) {
                for (var ce = 0; ce < ne.length; ce++)
                  Ye(ne[ce], g);
                Object.freeze && Object.freeze(ne);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ye(ne, g);
        }
        if (Re.call(O, "key")) {
          var Ie = M(g), Ee = Object.keys(O).filter(function(at) {
            return at !== "key";
          }), Ke = Ee.length > 0 ? "{key: someKey, " + Ee.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Et[Ie + Ke]) {
            var gt = Ee.length > 0 ? "{" + Ee.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ke, Ie, gt, Ie), Et[Ie + Ke] = !0;
          }
        }
        return g === o ? xt(re) : wt(re), re;
      }
    }
    function en(g, O, H) {
      return $t(g, O, H, !0);
    }
    function Ft(g, O, H) {
      return $t(g, O, H, !1);
    }
    var Nt = Ft, Kt = en;
    hr.Fragment = o, hr.jsx = Nt, hr.jsxs = Kt;
  }()), hr;
}
process.env.NODE_ENV === "production" ? xa.exports = Ec() : xa.exports = Sc();
var p = xa.exports;
class Cc {
  constructor(t) {
    this.label = t;
  }
}
class Ao extends Cc {
  constructor(t) {
    super(
      t.label
    );
  }
}
class Oc {
  constructor(t, e) {
    this.render = t, this.validation = e;
  }
}
class Rt extends Oc {
  constructor(t) {
    super(
      t.render,
      t.validation
    );
  }
}
class qc {
  constructor(t, e, o, r, a, i, l, s, c) {
    this.form = t, this.settings = e, this.type = o, this.heading = r, this.description = a, this.hidden = i, this.icon = l, this.data = s, this.group = c, this.group || (this.group = new Ao({
      label: "None"
    }));
  }
}
let _n = class extends qc {
  constructor(t) {
    super(
      t.form,
      t.settings,
      t.type,
      t.heading,
      t.description,
      t.hidden,
      t.icon,
      t.data,
      t.group
    );
  }
};
class Lo {
  constructor(t = null, e = []) {
    this.group = t, this.items = e;
  }
  registerItem(t, e) {
    e ? t.group = e : this.group && (t.group = this.group), this.items.push(t);
  }
  addRegistry(t) {
    for (const e of t)
      this.items.push(e);
  }
  getByItem(t) {
    if (t)
      return this.items.find((e) => e.type === t.type);
  }
  //
  // getByType(type: string): Item | undefined {
  //     return this.items.find(item => item.type === type);
  // }
  *[Symbol.iterator]() {
    for (const t of this.items)
      yield t;
  }
  map(t) {
    return this.items.map((e, o, r) => t(e, o, r));
  }
}
const oa = {
  id: null,
  label: null,
  created_at: null,
  items: []
}, _i = (n) => (n.items.map((t) => {
  let e = kn.getByItem(t);
  return e ? { ...e.data, ...t } : t;
}), n), Zl = (n = oa) => {
  const t = { ...oa, ...n }, [e, o] = xe(_i(t));
  return {
    form: e,
    setForm: (r) => {
      o(_i({ ...oa, ...r }));
    }
  };
}, Pc = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let sn = (n = 21) => {
  let t = "", e = crypto.getRandomValues(new Uint8Array(n));
  for (; n--; )
    t += Pc[e[n] & 63];
  return t;
};
const Qn = {
  id: sn(),
  type: "content-html",
  label: "",
  value: "",
  placeholder: ""
}, Tc = ({ item: n, onChange: t, config: e }) => {
  const [o, r] = xe({ ...Qn, ...n });
  ge(() => {
    r({ ...Qn, ...n });
  }, [n]);
  const a = Math.random().toString(36).substring(2, 15);
  return /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsx("article", { children: /* @__PURE__ */ p.jsxs("div", { className: "flex flex-column gap-2", children: [
    /* @__PURE__ */ p.jsx("label", { htmlFor: a, children: o.label }),
    /* @__PURE__ */ p.jsx("div", { dangerouslySetInnerHTML: { __html: o.value } })
  ] }) }) });
}, Ic = (n) => ({});
var ki;
function Ea() {
  return Ea = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e) ({}).hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, Ea.apply(null, arguments);
}
var _c = function(t) {
  return /* @__PURE__ */ f.createElement("svg", Ea({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 512"
  }, t), ki || (ki = /* @__PURE__ */ f.createElement("path", {
    d: "M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6m80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3l89.3 89.4-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3"
  })));
};
function kc(n) {
  if (Array.isArray(n)) return n;
}
function Rc(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var o, r, a, i, l = [], s = !0, c = !1;
    try {
      if (a = (e = e.call(n)).next, t !== 0) for (; !(s = (o = a.call(e)).done) && (l.push(o.value), l.length !== t); s = !0) ;
    } catch (u) {
      c = !0, r = u;
    } finally {
      try {
        if (!s && e.return != null && (i = e.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw r;
      }
    }
    return l;
  }
}
function Sa(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, o = new Array(t); e < t; e++) o[e] = n[e];
  return o;
}
function Ql(n, t) {
  if (n) {
    if (typeof n == "string") return Sa(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Sa(n, t);
  }
}
function jc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yo(n, t) {
  return kc(n) || Rc(n, t) || Ql(n, t) || jc();
}
function Ot(n) {
  "@babel/helpers - typeof";
  return Ot = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ot(n);
}
function ve() {
  for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++)
    t[e] = arguments[e];
  if (t) {
    for (var o = [], r = 0; r < t.length; r++) {
      var a = t[r];
      if (a) {
        var i = Ot(a);
        if (i === "string" || i === "number")
          o.push(a);
        else if (i === "object") {
          var l = Array.isArray(a) ? a : Object.entries(a).map(function(s) {
            var c = yo(s, 2), u = c[0], d = c[1];
            return d ? u : null;
          });
          o = l.length ? o.concat(l.filter(function(s) {
            return !!s;
          })) : o;
        }
      }
    }
    return o.join(" ").trim();
  }
}
function Dc(n) {
  if (Array.isArray(n)) return Sa(n);
}
function Nc(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function Ac() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Eo(n) {
  return Dc(n) || Nc(n) || Ql(n) || Ac();
}
function si(n, t) {
  if (!(n instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Lc(n, t) {
  if (Ot(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t || "default");
    if (Ot(o) !== "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function es(n) {
  var t = Lc(n, "string");
  return Ot(t) === "symbol" ? t : String(t);
}
function $c(n, t) {
  for (var e = 0; e < t.length; e++) {
    var o = t[e];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(n, es(o.key), o);
  }
}
function ci(n, t, e) {
  return e && $c(n, e), Object.defineProperty(n, "prototype", {
    writable: !1
  }), n;
}
function $o(n, t, e) {
  return t = es(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function aa(n, t) {
  var e = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (!e) {
    if (Array.isArray(n) || (e = Fc(n)) || t) {
      e && (n = e);
      var o = 0, r = function() {
      };
      return { s: r, n: function() {
        return o >= n.length ? { done: !0 } : { done: !1, value: n[o++] };
      }, e: function(c) {
        throw c;
      }, f: r };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a = !0, i = !1, l;
  return { s: function() {
    e = e.call(n);
  }, n: function() {
    var c = e.next();
    return a = c.done, c;
  }, e: function(c) {
    i = !0, l = c;
  }, f: function() {
    try {
      !a && e.return != null && e.return();
    } finally {
      if (i) throw l;
    }
  } };
}
function Fc(n, t) {
  if (n) {
    if (typeof n == "string") return Ri(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Ri(n, t);
  }
}
function Ri(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, o = new Array(t); e < t; e++) o[e] = n[e];
  return o;
}
var L = /* @__PURE__ */ function() {
  function n() {
    si(this, n);
  }
  return ci(n, null, [{
    key: "innerWidth",
    value: function(e) {
      if (e) {
        var o = e.offsetWidth, r = getComputedStyle(e);
        return o = o + (parseFloat(r.paddingLeft) + parseFloat(r.paddingRight)), o;
      }
      return 0;
    }
  }, {
    key: "width",
    value: function(e) {
      if (e) {
        var o = e.offsetWidth, r = getComputedStyle(e);
        return o = o - (parseFloat(r.paddingLeft) + parseFloat(r.paddingRight)), o;
      }
      return 0;
    }
  }, {
    key: "getBrowserLanguage",
    value: function() {
      return navigator.userLanguage || navigator.languages && navigator.languages.length && navigator.languages[0] || navigator.language || navigator.browserLanguage || navigator.systemLanguage || "en";
    }
  }, {
    key: "getWindowScrollTop",
    value: function() {
      var e = document.documentElement;
      return (window.pageYOffset || e.scrollTop) - (e.clientTop || 0);
    }
  }, {
    key: "getWindowScrollLeft",
    value: function() {
      var e = document.documentElement;
      return (window.pageXOffset || e.scrollLeft) - (e.clientLeft || 0);
    }
  }, {
    key: "getOuterWidth",
    value: function(e, o) {
      if (e) {
        var r = e.getBoundingClientRect().width || e.offsetWidth;
        if (o) {
          var a = getComputedStyle(e);
          r = r + (parseFloat(a.marginLeft) + parseFloat(a.marginRight));
        }
        return r;
      }
      return 0;
    }
  }, {
    key: "getOuterHeight",
    value: function(e, o) {
      if (e) {
        var r = e.getBoundingClientRect().height || e.offsetHeight;
        if (o) {
          var a = getComputedStyle(e);
          r = r + (parseFloat(a.marginTop) + parseFloat(a.marginBottom));
        }
        return r;
      }
      return 0;
    }
  }, {
    key: "getClientHeight",
    value: function(e, o) {
      if (e) {
        var r = e.clientHeight;
        if (o) {
          var a = getComputedStyle(e);
          r = r + (parseFloat(a.marginTop) + parseFloat(a.marginBottom));
        }
        return r;
      }
      return 0;
    }
  }, {
    key: "getClientWidth",
    value: function(e, o) {
      if (e) {
        var r = e.clientWidth;
        if (o) {
          var a = getComputedStyle(e);
          r = r + (parseFloat(a.marginLeft) + parseFloat(a.marginRight));
        }
        return r;
      }
      return 0;
    }
  }, {
    key: "getViewport",
    value: function() {
      var e = window, o = document, r = o.documentElement, a = o.getElementsByTagName("body")[0], i = e.innerWidth || r.clientWidth || a.clientWidth, l = e.innerHeight || r.clientHeight || a.clientHeight;
      return {
        width: i,
        height: l
      };
    }
  }, {
    key: "getOffset",
    value: function(e) {
      if (e) {
        var o = e.getBoundingClientRect();
        return {
          top: o.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
          left: o.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
        };
      }
      return {
        top: "auto",
        left: "auto"
      };
    }
  }, {
    key: "index",
    value: function(e) {
      if (e)
        for (var o = e.parentNode.childNodes, r = 0, a = 0; a < o.length; a++) {
          if (o[a] === e)
            return r;
          o[a].nodeType === 1 && r++;
        }
      return -1;
    }
  }, {
    key: "addMultipleClasses",
    value: function(e, o) {
      if (e && o)
        if (e.classList)
          for (var r = o.split(" "), a = 0; a < r.length; a++)
            e.classList.add(r[a]);
        else
          for (var i = o.split(" "), l = 0; l < i.length; l++)
            e.className = e.className + (" " + i[l]);
    }
  }, {
    key: "removeMultipleClasses",
    value: function(e, o) {
      if (e && o)
        if (e.classList)
          for (var r = o.split(" "), a = 0; a < r.length; a++)
            e.classList.remove(r[a]);
        else
          for (var i = o.split(" "), l = 0; l < i.length; l++)
            e.className = e.className.replace(new RegExp("(^|\\b)" + i[l].split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
  }, {
    key: "addClass",
    value: function(e, o) {
      e && o && (e.classList ? e.classList.add(o) : e.className = e.className + (" " + o));
    }
  }, {
    key: "removeClass",
    value: function(e, o) {
      e && o && (e.classList ? e.classList.remove(o) : e.className = e.className.replace(new RegExp("(^|\\b)" + o.split(" ").join("|") + "(\\b|$)", "gi"), " "));
    }
  }, {
    key: "hasClass",
    value: function(e, o) {
      return e ? e.classList ? e.classList.contains(o) : new RegExp("(^| )" + o + "( |$)", "gi").test(e.className) : !1;
    }
  }, {
    key: "addStyles",
    value: function(e) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      e && Object.entries(o).forEach(function(r) {
        var a = yo(r, 2), i = a[0], l = a[1];
        return e.style[i] = l;
      });
    }
  }, {
    key: "find",
    value: function(e, o) {
      return e ? Array.from(e.querySelectorAll(o)) : [];
    }
  }, {
    key: "findSingle",
    value: function(e, o) {
      return e ? e.querySelector(o) : null;
    }
  }, {
    key: "setAttributes",
    value: function(e) {
      var o = this, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (e) {
        var a = function i(l, s) {
          var c, u, d = e != null && (c = e.$attrs) !== null && c !== void 0 && c[l] ? [e == null || (u = e.$attrs) === null || u === void 0 ? void 0 : u[l]] : [];
          return [s].flat().reduce(function(m, v) {
            if (v != null) {
              var x = Ot(v);
              if (x === "string" || x === "number")
                m.push(v);
              else if (x === "object") {
                var h = Array.isArray(v) ? i(l, v) : Object.entries(v).map(function(S) {
                  var w = yo(S, 2), E = w[0], C = w[1];
                  return l === "style" && (C || C === 0) ? "".concat(E.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), ":").concat(C) : C ? E : void 0;
                });
                m = h.length ? m.concat(h.filter(function(S) {
                  return !!S;
                })) : m;
              }
            }
            return m;
          }, d);
        };
        Object.entries(r).forEach(function(i) {
          var l = yo(i, 2), s = l[0], c = l[1];
          if (c != null) {
            var u = s.match(/^on(.+)/);
            u ? e.addEventListener(u[1].toLowerCase(), c) : s === "p-bind" ? o.setAttributes(e, c) : (c = s === "class" ? Eo(new Set(a("class", c))).join(" ").trim() : s === "style" ? a("style", c).join(";").trim() : c, (e.$attrs = e.$attrs || {}) && (e.$attrs[s] = c), e.setAttribute(s, c));
          }
        });
      }
    }
  }, {
    key: "getAttribute",
    value: function(e, o) {
      if (e) {
        var r = e.getAttribute(o);
        return isNaN(r) ? r === "true" || r === "false" ? r === "true" : r : +r;
      }
    }
  }, {
    key: "isAttributeEquals",
    value: function(e, o, r) {
      return e ? this.getAttribute(e, o) === r : !1;
    }
  }, {
    key: "isAttributeNotEquals",
    value: function(e, o, r) {
      return !this.isAttributeEquals(e, o, r);
    }
  }, {
    key: "getHeight",
    value: function(e) {
      if (e) {
        var o = e.offsetHeight, r = getComputedStyle(e);
        return o = o - (parseFloat(r.paddingTop) + parseFloat(r.paddingBottom) + parseFloat(r.borderTopWidth) + parseFloat(r.borderBottomWidth)), o;
      }
      return 0;
    }
  }, {
    key: "getWidth",
    value: function(e) {
      if (e) {
        var o = e.offsetWidth, r = getComputedStyle(e);
        return o = o - (parseFloat(r.paddingLeft) + parseFloat(r.paddingRight) + parseFloat(r.borderLeftWidth) + parseFloat(r.borderRightWidth)), o;
      }
      return 0;
    }
  }, {
    key: "alignOverlay",
    value: function(e, o, r) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0;
      e && o && (r === "self" ? this.relativePosition(e, o) : (a && (e.style.minWidth = n.getOuterWidth(o) + "px"), this.absolutePosition(e, o)));
    }
  }, {
    key: "absolutePosition",
    value: function(e, o) {
      var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "left";
      if (e && o) {
        var a = e.offsetParent ? {
          width: e.offsetWidth,
          height: e.offsetHeight
        } : this.getHiddenElementDimensions(e), i = a.height, l = a.width, s = o.offsetHeight, c = o.offsetWidth, u = o.getBoundingClientRect(), d = this.getWindowScrollTop(), m = this.getWindowScrollLeft(), v = this.getViewport(), x, h;
        u.top + s + i > v.height ? (x = u.top + d - i, x < 0 && (x = d), e.style.transformOrigin = "bottom") : (x = s + u.top + d, e.style.transformOrigin = "top");
        var S = u.left, w = r === "left" ? 0 : l - c;
        S + c + l > v.width ? h = Math.max(0, S + m + c - l) : h = S - w + m, e.style.top = x + "px", e.style.left = h + "px";
      }
    }
  }, {
    key: "relativePosition",
    value: function(e, o) {
      if (e && o) {
        var r = e.offsetParent ? {
          width: e.offsetWidth,
          height: e.offsetHeight
        } : this.getHiddenElementDimensions(e), a = o.offsetHeight, i = o.getBoundingClientRect(), l = this.getViewport(), s, c;
        i.top + a + r.height > l.height ? (s = -1 * r.height, i.top + s < 0 && (s = -1 * i.top), e.style.transformOrigin = "bottom") : (s = a, e.style.transformOrigin = "top"), r.width > l.width ? c = i.left * -1 : i.left + r.width > l.width ? c = (i.left + r.width - l.width) * -1 : c = 0, e.style.top = s + "px", e.style.left = c + "px";
      }
    }
  }, {
    key: "flipfitCollision",
    value: function(e, o) {
      var r = this, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "left top", i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "left bottom", l = arguments.length > 4 ? arguments[4] : void 0;
      if (e && o) {
        var s = o.getBoundingClientRect(), c = this.getViewport(), u = a.split(" "), d = i.split(" "), m = function(w, E) {
          return E ? +w.substring(w.search(/(\+|-)/g)) || 0 : w.substring(0, w.search(/(\+|-)/g)) || w;
        }, v = {
          my: {
            x: m(u[0]),
            y: m(u[1] || u[0]),
            offsetX: m(u[0], !0),
            offsetY: m(u[1] || u[0], !0)
          },
          at: {
            x: m(d[0]),
            y: m(d[1] || d[0]),
            offsetX: m(d[0], !0),
            offsetY: m(d[1] || d[0], !0)
          }
        }, x = {
          left: function() {
            var w = v.my.offsetX + v.at.offsetX;
            return w + s.left + (v.my.x === "left" ? 0 : -1 * (v.my.x === "center" ? r.getOuterWidth(e) / 2 : r.getOuterWidth(e)));
          },
          top: function() {
            var w = v.my.offsetY + v.at.offsetY;
            return w + s.top + (v.my.y === "top" ? 0 : -1 * (v.my.y === "center" ? r.getOuterHeight(e) / 2 : r.getOuterHeight(e)));
          }
        }, h = {
          count: {
            x: 0,
            y: 0
          },
          left: function() {
            var w = x.left(), E = n.getWindowScrollLeft();
            e.style.left = w + E + "px", this.count.x === 2 ? (e.style.left = E + "px", this.count.x = 0) : w < 0 && (this.count.x++, v.my.x = "left", v.at.x = "right", v.my.offsetX *= -1, v.at.offsetX *= -1, this.right());
          },
          right: function() {
            var w = x.left() + n.getOuterWidth(o), E = n.getWindowScrollLeft();
            e.style.left = w + E + "px", this.count.x === 2 ? (e.style.left = c.width - n.getOuterWidth(e) + E + "px", this.count.x = 0) : w + n.getOuterWidth(e) > c.width && (this.count.x++, v.my.x = "right", v.at.x = "left", v.my.offsetX *= -1, v.at.offsetX *= -1, this.left());
          },
          top: function() {
            var w = x.top(), E = n.getWindowScrollTop();
            e.style.top = w + E + "px", this.count.y === 2 ? (e.style.left = E + "px", this.count.y = 0) : w < 0 && (this.count.y++, v.my.y = "top", v.at.y = "bottom", v.my.offsetY *= -1, v.at.offsetY *= -1, this.bottom());
          },
          bottom: function() {
            var w = x.top() + n.getOuterHeight(o), E = n.getWindowScrollTop();
            e.style.top = w + E + "px", this.count.y === 2 ? (e.style.left = c.height - n.getOuterHeight(e) + E + "px", this.count.y = 0) : w + n.getOuterHeight(o) > c.height && (this.count.y++, v.my.y = "bottom", v.at.y = "top", v.my.offsetY *= -1, v.at.offsetY *= -1, this.top());
          },
          center: function(w) {
            if (w === "y") {
              var E = x.top() + n.getOuterHeight(o) / 2;
              e.style.top = E + n.getWindowScrollTop() + "px", E < 0 ? this.bottom() : E + n.getOuterHeight(o) > c.height && this.top();
            } else {
              var C = x.left() + n.getOuterWidth(o) / 2;
              e.style.left = C + n.getWindowScrollLeft() + "px", C < 0 ? this.left() : C + n.getOuterWidth(e) > c.width && this.right();
            }
          }
        };
        h[v.at.x]("x"), h[v.at.y]("y"), this.isFunction(l) && l(v);
      }
    }
  }, {
    key: "findCollisionPosition",
    value: function(e) {
      if (e) {
        var o = e === "top" || e === "bottom", r = e === "left" ? "right" : "left", a = e === "top" ? "bottom" : "top";
        return o ? {
          axis: "y",
          my: "center ".concat(a),
          at: "center ".concat(e)
        } : {
          axis: "x",
          my: "".concat(r, " center"),
          at: "".concat(e, " center")
        };
      }
    }
  }, {
    key: "getParents",
    value: function(e) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      return e.parentNode === null ? o : this.getParents(e.parentNode, o.concat([e.parentNode]));
    }
  }, {
    key: "getScrollableParents",
    value: function(e) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = [];
      if (e) {
        var a = this.getParents(e), i = /(auto|scroll)/, l = function(C) {
          var q = C ? getComputedStyle(C) : null;
          return q && (i.test(q.getPropertyValue("overflow")) || i.test(q.getPropertyValue("overflow-x")) || i.test(q.getPropertyValue("overflow-y")));
        }, s = function(C) {
          o ? r.push(C.nodeName === "BODY" || C.nodeName === "HTML" || C.nodeType === 9 ? window : C) : r.push(C);
        }, c = aa(a), u;
        try {
          for (c.s(); !(u = c.n()).done; ) {
            var d = u.value, m = d.nodeType === 1 && d.dataset.scrollselectors;
            if (m) {
              var v = m.split(","), x = aa(v), h;
              try {
                for (x.s(); !(h = x.n()).done; ) {
                  var S = h.value, w = this.findSingle(d, S);
                  w && l(w) && s(w);
                }
              } catch (E) {
                x.e(E);
              } finally {
                x.f();
              }
            }
            d.nodeType === 1 && l(d) && s(d);
          }
        } catch (E) {
          c.e(E);
        } finally {
          c.f();
        }
      }
      return r.some(function(E) {
        return E === document.body || E === window;
      }) || r.push(window), r;
    }
  }, {
    key: "getHiddenElementOuterHeight",
    value: function(e) {
      if (e) {
        e.style.visibility = "hidden", e.style.display = "block";
        var o = e.offsetHeight;
        return e.style.display = "none", e.style.visibility = "visible", o;
      }
      return 0;
    }
  }, {
    key: "getHiddenElementOuterWidth",
    value: function(e) {
      if (e) {
        e.style.visibility = "hidden", e.style.display = "block";
        var o = e.offsetWidth;
        return e.style.display = "none", e.style.visibility = "visible", o;
      }
      return 0;
    }
  }, {
    key: "getHiddenElementDimensions",
    value: function(e) {
      var o = {};
      return e && (e.style.visibility = "hidden", e.style.display = "block", o.width = e.offsetWidth, o.height = e.offsetHeight, e.style.display = "none", e.style.visibility = "visible"), o;
    }
  }, {
    key: "fadeIn",
    value: function(e, o) {
      if (e) {
        e.style.opacity = 0;
        var r = +/* @__PURE__ */ new Date(), a = 0, i = function l() {
          a = +e.style.opacity + ((/* @__PURE__ */ new Date()).getTime() - r) / o, e.style.opacity = a, r = +/* @__PURE__ */ new Date(), +a < 1 && (window.requestAnimationFrame && requestAnimationFrame(l) || setTimeout(l, 16));
        };
        i();
      }
    }
  }, {
    key: "fadeOut",
    value: function(e, o) {
      if (e)
        var r = 1, a = 50, i = a / o, l = setInterval(function() {
          r = r - i, r <= 0 && (r = 0, clearInterval(l)), e.style.opacity = r;
        }, a);
    }
  }, {
    key: "getUserAgent",
    value: function() {
      return navigator.userAgent;
    }
  }, {
    key: "isIOS",
    value: function() {
      return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    }
  }, {
    key: "isAndroid",
    value: function() {
      return /(android)/i.test(navigator.userAgent);
    }
  }, {
    key: "isChrome",
    value: function() {
      return /(chrome)/i.test(navigator.userAgent);
    }
  }, {
    key: "isClient",
    value: function() {
      return !!(typeof window < "u" && window.document && window.document.createElement);
    }
  }, {
    key: "isTouchDevice",
    value: function() {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    }
  }, {
    key: "isFunction",
    value: function(e) {
      return !!(e && e.constructor && e.call && e.apply);
    }
  }, {
    key: "appendChild",
    value: function(e, o) {
      if (this.isElement(o))
        o.appendChild(e);
      else if (o.el && o.el.nativeElement)
        o.el.nativeElement.appendChild(e);
      else
        throw new Error("Cannot append " + o + " to " + e);
    }
  }, {
    key: "removeChild",
    value: function(e, o) {
      if (this.isElement(o))
        o.removeChild(e);
      else if (o.el && o.el.nativeElement)
        o.el.nativeElement.removeChild(e);
      else
        throw new Error("Cannot remove " + e + " from " + o);
    }
  }, {
    key: "isElement",
    value: function(e) {
      return (typeof HTMLElement > "u" ? "undefined" : Ot(HTMLElement)) === "object" ? e instanceof HTMLElement : e && Ot(e) === "object" && e !== null && e.nodeType === 1 && typeof e.nodeName == "string";
    }
  }, {
    key: "scrollInView",
    value: function(e, o) {
      var r = getComputedStyle(e).getPropertyValue("border-top-width"), a = r ? parseFloat(r) : 0, i = getComputedStyle(e).getPropertyValue("padding-top"), l = i ? parseFloat(i) : 0, s = e.getBoundingClientRect(), c = o.getBoundingClientRect(), u = c.top + document.body.scrollTop - (s.top + document.body.scrollTop) - a - l, d = e.scrollTop, m = e.clientHeight, v = this.getOuterHeight(o);
      u < 0 ? e.scrollTop = d + u : u + v > m && (e.scrollTop = d + u - m + v);
    }
  }, {
    key: "clearSelection",
    value: function() {
      if (window.getSelection)
        window.getSelection().empty ? window.getSelection().empty() : window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0 && window.getSelection().removeAllRanges();
      else if (document.selection && document.selection.empty)
        try {
          document.selection.empty();
        } catch {
        }
    }
  }, {
    key: "calculateScrollbarWidth",
    value: function(e) {
      if (e) {
        var o = getComputedStyle(e);
        return e.offsetWidth - e.clientWidth - parseFloat(o.borderLeftWidth) - parseFloat(o.borderRightWidth);
      }
      if (this.calculatedScrollbarWidth != null)
        return this.calculatedScrollbarWidth;
      var r = document.createElement("div");
      r.className = "p-scrollbar-measure", document.body.appendChild(r);
      var a = r.offsetWidth - r.clientWidth;
      return document.body.removeChild(r), this.calculatedScrollbarWidth = a, a;
    }
  }, {
    key: "calculateBodyScrollbarWidth",
    value: function() {
      return window.innerWidth - document.documentElement.offsetWidth;
    }
  }, {
    key: "getBrowser",
    value: function() {
      if (!this.browser) {
        var e = this.resolveUserAgent();
        this.browser = {}, e.browser && (this.browser[e.browser] = !0, this.browser.version = e.version), this.browser.chrome ? this.browser.webkit = !0 : this.browser.webkit && (this.browser.safari = !0);
      }
      return this.browser;
    }
  }, {
    key: "resolveUserAgent",
    value: function() {
      var e = navigator.userAgent.toLowerCase(), o = /(chrome)[ ]([\w.]+)/.exec(e) || /(webkit)[ ]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ ]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
      return {
        browser: o[1] || "",
        version: o[2] || "0"
      };
    }
  }, {
    key: "blockBodyScroll",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "p-overflow-hidden", o = !!document.body.style.getPropertyValue("--scrollbar-width");
      !o && document.body.style.setProperty("--scrollbar-width", this.calculateBodyScrollbarWidth() + "px"), this.addClass(document.body, e);
    }
  }, {
    key: "unblockBodyScroll",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "p-overflow-hidden";
      document.body.style.removeProperty("--scrollbar-width"), this.removeClass(document.body, e);
    }
  }, {
    key: "isVisible",
    value: function(e) {
      return e && (e.clientHeight !== 0 || e.getClientRects().length !== 0 || getComputedStyle(e).display !== "none");
    }
  }, {
    key: "isExist",
    value: function(e) {
      return !!(e !== null && typeof e < "u" && e.nodeName && e.parentNode);
    }
  }, {
    key: "getFocusableElements",
    value: function(e) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = n.find(e, 'button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(o, `,
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(o, `,
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(o, `,
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(o, `,
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(o, `,
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(o, `,
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(o)), a = [], i = aa(r), l;
      try {
        for (i.s(); !(l = i.n()).done; ) {
          var s = l.value;
          getComputedStyle(s).display !== "none" && getComputedStyle(s).visibility !== "hidden" && a.push(s);
        }
      } catch (c) {
        i.e(c);
      } finally {
        i.f();
      }
      return a;
    }
  }, {
    key: "getFirstFocusableElement",
    value: function(e, o) {
      var r = n.getFocusableElements(e, o);
      return r.length > 0 ? r[0] : null;
    }
  }, {
    key: "getLastFocusableElement",
    value: function(e, o) {
      var r = n.getFocusableElements(e, o);
      return r.length > 0 ? r[r.length - 1] : null;
    }
    /**
     * Focus an input element if it does not already have focus.
     *
     * @param {HTMLElement} el a HTML element
     * @param {boolean} scrollTo flag to control whether to scroll to the element, false by default
     */
  }, {
    key: "focus",
    value: function(e, o) {
      var r = o === void 0 ? !0 : !o;
      e && document.activeElement !== e && e.focus({
        preventScroll: r
      });
    }
    /**
     * Focus the first focusable element if it does not already have focus.
     *
     * @param {HTMLElement} el a HTML element
     * @param {boolean} scrollTo flag to control whether to scroll to the element, false by default
     * @return {HTMLElement | undefined} the first focusable HTML element found
     */
  }, {
    key: "focusFirstElement",
    value: function(e, o) {
      if (e) {
        var r = n.getFirstFocusableElement(e);
        return r && n.focus(r, o), r;
      }
    }
  }, {
    key: "getCursorOffset",
    value: function(e, o, r, a) {
      if (e) {
        var i = getComputedStyle(e), l = document.createElement("div");
        l.style.position = "absolute", l.style.top = "0px", l.style.left = "0px", l.style.visibility = "hidden", l.style.pointerEvents = "none", l.style.overflow = i.overflow, l.style.width = i.width, l.style.height = i.height, l.style.padding = i.padding, l.style.border = i.border, l.style.overflowWrap = i.overflowWrap, l.style.whiteSpace = i.whiteSpace, l.style.lineHeight = i.lineHeight, l.innerHTML = o.replace(/\r\n|\r|\n/g, "<br />");
        var s = document.createElement("span");
        s.textContent = a, l.appendChild(s);
        var c = document.createTextNode(r);
        l.appendChild(c), document.body.appendChild(l);
        var u = s.offsetLeft, d = s.offsetTop, m = s.clientHeight;
        return document.body.removeChild(l), {
          left: Math.abs(u - e.scrollLeft),
          top: Math.abs(d - e.scrollTop) + m
        };
      }
      return {
        top: "auto",
        left: "auto"
      };
    }
  }, {
    key: "invokeElementMethod",
    value: function(e, o, r) {
      e[o].apply(e, r);
    }
  }, {
    key: "isClickable",
    value: function(e) {
      var o = e.nodeName, r = e.parentElement && e.parentElement.nodeName;
      return o === "INPUT" || o === "TEXTAREA" || o === "BUTTON" || o === "A" || r === "INPUT" || r === "TEXTAREA" || r === "BUTTON" || r === "A" || this.hasClass(e, "p-button") || this.hasClass(e.parentElement, "p-button") || this.hasClass(e.parentElement, "p-checkbox") || this.hasClass(e.parentElement, "p-radiobutton");
    }
  }, {
    key: "applyStyle",
    value: function(e, o) {
      if (typeof o == "string")
        e.style.cssText = this.style;
      else
        for (var r in this.style)
          e.style[r] = o[r];
    }
  }, {
    key: "exportCSV",
    value: function(e, o) {
      var r = new Blob([e], {
        type: "application/csv;charset=utf-8;"
      });
      if (window.navigator.msSaveOrOpenBlob)
        navigator.msSaveOrOpenBlob(r, o + ".csv");
      else {
        var a = n.saveAs({
          name: o + ".csv",
          src: URL.createObjectURL(r)
        });
        a || (e = "data:text/csv;charset=utf-8," + e, window.open(encodeURI(e)));
      }
    }
  }, {
    key: "saveAs",
    value: function(e) {
      if (e) {
        var o = document.createElement("a");
        if (o.download !== void 0) {
          var r = e.name, a = e.src;
          return o.setAttribute("href", a), o.setAttribute("download", r), o.style.display = "none", document.body.appendChild(o), o.click(), document.body.removeChild(o), !0;
        }
      }
      return !1;
    }
  }, {
    key: "createInlineStyle",
    value: function(e, o) {
      var r = document.createElement("style");
      return n.addNonce(r, e), o || (o = document.head), o.appendChild(r), r;
    }
  }, {
    key: "removeInlineStyle",
    value: function(e) {
      if (this.isExist(e)) {
        try {
          e.parentNode.removeChild(e);
        } catch {
        }
        e = null;
      }
      return e;
    }
  }, {
    key: "addNonce",
    value: function(e, o) {
      try {
        o || (o = process.env.REACT_APP_CSS_NONCE);
      } catch {
      }
      o && e.setAttribute("nonce", o);
    }
  }, {
    key: "getTargetElement",
    value: function(e) {
      if (!e)
        return null;
      if (e === "document")
        return document;
      if (e === "window")
        return window;
      if (Ot(e) === "object" && e.hasOwnProperty("current"))
        return this.isExist(e.current) ? e.current : null;
      var o = function(i) {
        return !!(i && i.constructor && i.call && i.apply);
      }, r = o(e) ? e() : e;
      return r && r.nodeType === 9 || this.isExist(r) ? r : null;
    }
    /**
     * Get the attribute names for an element and sorts them alpha for comparison
     */
  }, {
    key: "getAttributeNames",
    value: function(e) {
      var o, r, a;
      for (r = [], a = e.attributes, o = 0; o < a.length; ++o)
        r.push(a[o].nodeName);
      return r.sort(), r;
    }
    /**
     * Compare two elements for equality.  Even will compare if the style element
     * is out of order for example:
     *
     * elem1 = style="color: red; font-size: 28px"
     * elem2 = style="font-size: 28px; color: red"
     */
  }, {
    key: "isEqualElement",
    value: function(e, o) {
      var r, a, i, l, s;
      if (r = n.getAttributeNames(e), a = n.getAttributeNames(o), r.join(",") !== a.join(","))
        return !1;
      for (var c = 0; c < r.length; ++c)
        if (i = r[c], i === "style")
          for (var u = e.style, d = o.style, m = /^\d+$/, v = 0, x = Object.keys(u); v < x.length; v++) {
            var h = x[v];
            if (!m.test(h) && u[h] !== d[h])
              return !1;
          }
        else if (e.getAttribute(i) !== o.getAttribute(i))
          return !1;
      for (l = e.firstChild, s = o.firstChild; l && s; l = l.nextSibling, s = s.nextSibling) {
        if (l.nodeType !== s.nodeType)
          return !1;
        if (l.nodeType === 1) {
          if (!n.isEqualElement(l, s))
            return !1;
        } else if (l.nodeValue !== s.nodeValue)
          return !1;
      }
      return !(l || s);
    }
  }, {
    key: "hasCSSAnimation",
    value: function(e) {
      if (e) {
        var o = getComputedStyle(e), r = parseFloat(o.getPropertyValue("animation-duration") || "0");
        return r > 0;
      }
      return !1;
    }
  }, {
    key: "hasCSSTransition",
    value: function(e) {
      if (e) {
        var o = getComputedStyle(e), r = parseFloat(o.getPropertyValue("transition-duration") || "0");
        return r > 0;
      }
      return !1;
    }
  }]);
}();
$o(L, "DATA_PROPS", ["data-"]);
$o(L, "ARIA_PROPS", ["aria", "focus-target"]);
function Mc() {
  var n = /* @__PURE__ */ new Map();
  return {
    on: function(e, o) {
      var r = n.get(e);
      r ? r.push(o) : r = [o], n.set(e, r);
    },
    off: function(e, o) {
      var r = n.get(e);
      r && r.splice(r.indexOf(o) >>> 0, 1);
    },
    emit: function(e, o) {
      var r = n.get(e);
      r && r.slice().forEach(function(a) {
        return a(o);
      });
    }
  };
}
function Ca() {
  return Ca = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, Ca.apply(this, arguments);
}
function zc(n, t) {
  var e = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (!e) {
    if (Array.isArray(n) || (e = Hc(n)) || t) {
      e && (n = e);
      var o = 0, r = function() {
      };
      return { s: r, n: function() {
        return o >= n.length ? { done: !0 } : { done: !1, value: n[o++] };
      }, e: function(c) {
        throw c;
      }, f: r };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a = !0, i = !1, l;
  return { s: function() {
    e = e.call(n);
  }, n: function() {
    var c = e.next();
    return a = c.done, c;
  }, e: function(c) {
    i = !0, l = c;
  }, f: function() {
    try {
      !a && e.return != null && e.return();
    } finally {
      if (i) throw l;
    }
  } };
}
function Hc(n, t) {
  if (n) {
    if (typeof n == "string") return ji(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return ji(n, t);
  }
}
function ji(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, o = new Array(t); e < t; e++) o[e] = n[e];
  return o;
}
var A = /* @__PURE__ */ function() {
  function n() {
    si(this, n);
  }
  return ci(n, null, [{
    key: "equals",
    value: function(e, o, r) {
      return r && e && Ot(e) === "object" && o && Ot(o) === "object" ? this.deepEquals(this.resolveFieldData(e, r), this.resolveFieldData(o, r)) : this.deepEquals(e, o);
    }
    /**
     * Compares two JSON objects for deep equality recursively comparing both objects.
     * @param {*} a the first JSON object
     * @param {*} b the second JSON object
     * @returns true if equals, false it not
     */
  }, {
    key: "deepEquals",
    value: function(e, o) {
      if (e === o)
        return !0;
      if (e && o && Ot(e) === "object" && Ot(o) === "object") {
        var r = Array.isArray(e), a = Array.isArray(o), i, l, s;
        if (r && a) {
          if (l = e.length, l !== o.length)
            return !1;
          for (i = l; i-- !== 0; )
            if (!this.deepEquals(e[i], o[i]))
              return !1;
          return !0;
        }
        if (r !== a)
          return !1;
        var c = e instanceof Date, u = o instanceof Date;
        if (c !== u)
          return !1;
        if (c && u)
          return e.getTime() === o.getTime();
        var d = e instanceof RegExp, m = o instanceof RegExp;
        if (d !== m)
          return !1;
        if (d && m)
          return e.toString() === o.toString();
        var v = Object.keys(e);
        if (l = v.length, l !== Object.keys(o).length)
          return !1;
        for (i = l; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(o, v[i]))
            return !1;
        for (i = l; i-- !== 0; )
          if (s = v[i], !this.deepEquals(e[s], o[s]))
            return !1;
        return !0;
      }
      return e !== e && o !== o;
    }
  }, {
    key: "resolveFieldData",
    value: function(e, o) {
      if (!e || !o)
        return null;
      try {
        var r = e[o];
        if (this.isNotEmpty(r))
          return r;
      } catch {
      }
      if (Object.keys(e).length) {
        if (this.isFunction(o))
          return o(e);
        if (this.isNotEmpty(e[o]))
          return e[o];
        if (o.indexOf(".") === -1)
          return e[o];
        for (var a = o.split("."), i = e, l = 0, s = a.length; l < s; ++l) {
          if (i == null)
            return null;
          i = i[a[l]];
        }
        return i;
      }
      return null;
    }
  }, {
    key: "findDiffKeys",
    value: function(e, o) {
      return !e || !o ? {} : Object.keys(e).filter(function(r) {
        return !o.hasOwnProperty(r);
      }).reduce(function(r, a) {
        return r[a] = e[a], r;
      }, {});
    }
    /**
     * Removes keys from a JSON object that start with a string such as "data" to get all "data-id" type properties.
     *
     * @param {any} obj the JSON object to reduce
     * @param {string[]} startsWiths the string(s) to check if the property starts with this key
     * @returns the JSON object containing only the key/values that match the startsWith string
     */
  }, {
    key: "reduceKeys",
    value: function(e, o) {
      var r = {};
      return !e || !o || o.length === 0 || Object.keys(e).filter(function(a) {
        return o.some(function(i) {
          return a.startsWith(i);
        });
      }).forEach(function(a) {
        r[a] = e[a], delete e[a];
      }), r;
    }
  }, {
    key: "reorderArray",
    value: function(e, o, r) {
      e && o !== r && (r >= e.length && (r = r % e.length, o = o % e.length), e.splice(r, 0, e.splice(o, 1)[0]));
    }
  }, {
    key: "findIndexInList",
    value: function(e, o, r) {
      var a = this;
      return o ? r ? o.findIndex(function(i) {
        return a.equals(i, e, r);
      }) : o.findIndex(function(i) {
        return i === e;
      }) : -1;
    }
  }, {
    key: "getJSXElement",
    value: function(e) {
      for (var o = arguments.length, r = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++)
        r[a - 1] = arguments[a];
      return this.isFunction(e) ? e.apply(void 0, r) : e;
    }
  }, {
    key: "getItemValue",
    value: function(e) {
      for (var o = arguments.length, r = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++)
        r[a - 1] = arguments[a];
      return this.isFunction(e) ? e.apply(void 0, r) : e;
    }
  }, {
    key: "getProp",
    value: function(e) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = e ? e[o] : void 0;
      return a === void 0 ? r[o] : a;
    }
  }, {
    key: "getPropCaseInsensitive",
    value: function(e, o) {
      var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = this.toFlatCase(o);
      for (var i in e)
        if (e.hasOwnProperty(i) && this.toFlatCase(i) === a)
          return e[i];
      for (var l in r)
        if (r.hasOwnProperty(l) && this.toFlatCase(l) === a)
          return r[l];
    }
  }, {
    key: "getMergedProps",
    value: function(e, o) {
      return Object.assign({}, o, e);
    }
  }, {
    key: "getDiffProps",
    value: function(e, o) {
      return this.findDiffKeys(e, o);
    }
  }, {
    key: "getPropValue",
    value: function(e) {
      for (var o = arguments.length, r = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++)
        r[a - 1] = arguments[a];
      return this.isFunction(e) ? e.apply(void 0, r) : e;
    }
  }, {
    key: "getComponentProp",
    value: function(e) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this.isNotEmpty(e) ? this.getProp(e.props, o, r) : void 0;
    }
  }, {
    key: "getComponentProps",
    value: function(e, o) {
      return this.isNotEmpty(e) ? this.getMergedProps(e.props, o) : void 0;
    }
  }, {
    key: "getComponentDiffProps",
    value: function(e, o) {
      return this.isNotEmpty(e) ? this.getDiffProps(e.props, o) : void 0;
    }
  }, {
    key: "isValidChild",
    value: function(e, o, r) {
      if (e) {
        var a, i = this.getComponentProp(e, "__TYPE") || (e.type ? e.type.displayName : void 0);
        !i && e !== null && e !== void 0 && (a = e.type) !== null && a !== void 0 && (a = a._payload) !== null && a !== void 0 && a.value && (i = e.type._payload.value.find(function(c) {
          return c === o;
        }));
        var l = i === o;
        try {
          var s;
        } catch {
        }
        return l;
      }
      return !1;
    }
  }, {
    key: "getRefElement",
    value: function(e) {
      return e ? Ot(e) === "object" && e.hasOwnProperty("current") ? e.current : e : null;
    }
  }, {
    key: "combinedRefs",
    value: function(e, o) {
      e && o && (typeof o == "function" ? o(e.current) : o.current = e.current);
    }
  }, {
    key: "removeAccents",
    value: function(e) {
      return e && e.search(/[\xC0-\xFF]/g) > -1 && (e = e.replace(/[\xC0-\xC5]/g, "A").replace(/[\xC6]/g, "AE").replace(/[\xC7]/g, "C").replace(/[\xC8-\xCB]/g, "E").replace(/[\xCC-\xCF]/g, "I").replace(/[\xD0]/g, "D").replace(/[\xD1]/g, "N").replace(/[\xD2-\xD6\xD8]/g, "O").replace(/[\xD9-\xDC]/g, "U").replace(/[\xDD]/g, "Y").replace(/[\xDE]/g, "P").replace(/[\xE0-\xE5]/g, "a").replace(/[\xE6]/g, "ae").replace(/[\xE7]/g, "c").replace(/[\xE8-\xEB]/g, "e").replace(/[\xEC-\xEF]/g, "i").replace(/[\xF1]/g, "n").replace(/[\xF2-\xF6\xF8]/g, "o").replace(/[\xF9-\xFC]/g, "u").replace(/[\xFE]/g, "p").replace(/[\xFD\xFF]/g, "y")), e;
    }
  }, {
    key: "toFlatCase",
    value: function(e) {
      return this.isNotEmpty(e) && this.isString(e) ? e.replace(/(-|_)/g, "").toLowerCase() : e;
    }
  }, {
    key: "toCapitalCase",
    value: function(e) {
      return this.isNotEmpty(e) && this.isString(e) ? e[0].toUpperCase() + e.slice(1) : e;
    }
  }, {
    key: "trim",
    value: function(e) {
      return this.isNotEmpty(e) && this.isString(e) ? e.trim() : e;
    }
  }, {
    key: "isEmpty",
    value: function(e) {
      return e == null || e === "" || Array.isArray(e) && e.length === 0 || !(e instanceof Date) && Ot(e) === "object" && Object.keys(e).length === 0;
    }
  }, {
    key: "isNotEmpty",
    value: function(e) {
      return !this.isEmpty(e);
    }
  }, {
    key: "isFunction",
    value: function(e) {
      return !!(e && e.constructor && e.call && e.apply);
    }
  }, {
    key: "isObject",
    value: function(e) {
      return e !== null && e instanceof Object && e.constructor === Object;
    }
  }, {
    key: "isDate",
    value: function(e) {
      return e !== null && e instanceof Date && e.constructor === Date;
    }
  }, {
    key: "isArray",
    value: function(e) {
      return e !== null && Array.isArray(e);
    }
  }, {
    key: "isString",
    value: function(e) {
      return e !== null && typeof e == "string";
    }
  }, {
    key: "isPrintableCharacter",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return this.isNotEmpty(e) && e.length === 1 && e.match(/\S| /);
    }
  }, {
    key: "isLetter",
    value: function(e) {
      return /^[a-zA-Z\u00C0-\u017F]$/.test(e);
    }
  }, {
    key: "isScalar",
    value: function(e) {
      return e != null && (typeof e == "string" || typeof e == "number" || typeof e == "bigint" || typeof e == "boolean");
    }
    /**
     * Firefox-v103 does not currently support the "findLast" method. It is stated that this method will be supported with Firefox-v104.
     * https://caniuse.com/mdn-javascript_builtins_array_findlast
     */
  }, {
    key: "findLast",
    value: function(e, o) {
      var r;
      if (this.isNotEmpty(e))
        try {
          r = e.findLast(o);
        } catch {
          r = Eo(e).reverse().find(o);
        }
      return r;
    }
    /**
     * Firefox-v103 does not currently support the "findLastIndex" method. It is stated that this method will be supported with Firefox-v104.
     * https://caniuse.com/mdn-javascript_builtins_array_findlastindex
     */
  }, {
    key: "findLastIndex",
    value: function(e, o) {
      var r = -1;
      if (this.isNotEmpty(e))
        try {
          r = e.findLastIndex(o);
        } catch {
          r = e.lastIndexOf(Eo(e).reverse().find(o));
        }
      return r;
    }
  }, {
    key: "sort",
    value: function(e, o) {
      var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, a = arguments.length > 3 ? arguments[3] : void 0, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 1, l = this.compare(e, o, a, r), s = r;
      return (this.isEmpty(e) || this.isEmpty(o)) && (s = i === 1 ? r : i), s * l;
    }
  }, {
    key: "compare",
    value: function(e, o, r) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1, i = -1, l = this.isEmpty(e), s = this.isEmpty(o);
      return l && s ? i = 0 : l ? i = a : s ? i = -a : typeof e == "string" && typeof o == "string" ? i = r(e, o) : i = e < o ? -1 : e > o ? 1 : 0, i;
    }
  }, {
    key: "localeComparator",
    value: function(e) {
      return new Intl.Collator(e, {
        numeric: !0
      }).compare;
    }
  }, {
    key: "findChildrenByKey",
    value: function(e, o) {
      var r = zc(e), a;
      try {
        for (r.s(); !(a = r.n()).done; ) {
          var i = a.value;
          if (i.key === o)
            return i.children || [];
          if (i.children) {
            var l = this.findChildrenByKey(i.children, o);
            if (l.length > 0)
              return l;
          }
        }
      } catch (s) {
        r.e(s);
      } finally {
        r.f();
      }
      return [];
    }
    /**
     * This function takes mutates and object with a new value given
     * a specific field. This will handle deeply nested fields that
     * need to be modified or created.
     *
     * e.g:
     * data = {
     *  nested: {
     *      foo: "bar"
     *  }
     * }
     *
     * field = "nested.foo"
     * value = "baz"
     *
     * The function will mutate data to be
     * e.g:
     * data = {
     *  nested: {
     *      foo: "baz"
     *  }
     * }
     *
     * @param {object} data the object to be modified
     * @param {string} field the field in the object to replace
     * @param {any} value the value to have replaced in the field
     */
  }, {
    key: "mutateFieldData",
    value: function(e, o, r) {
      if (!(Ot(e) !== "object" || typeof o != "string"))
        for (var a = o.split("."), i = e, l = 0, s = a.length; l < s; ++l) {
          if (l + 1 - s === 0) {
            i[a[l]] = r;
            break;
          }
          i[a[l]] || (i[a[l]] = {}), i = i[a[l]];
        }
    }
  }]);
}();
function Di(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function Bc(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Di(Object(e), !0).forEach(function(o) {
      $o(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Di(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
var Yt = /* @__PURE__ */ function() {
  function n() {
    si(this, n);
  }
  return ci(n, null, [{
    key: "getJSXIcon",
    value: function(e) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = null;
      if (e !== null) {
        var i = Ot(e), l = ve(o.className, i === "string" && e);
        if (a = /* @__PURE__ */ f.createElement("span", Ca({}, o, {
          className: l
        })), i !== "string") {
          var s = Bc({
            iconProps: o,
            element: a
          }, r);
          return A.getJSXElement(e, s);
        }
      }
      return a;
    }
  }]);
}();
function Ni(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function Ai(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ni(Object(e), !0).forEach(function(o) {
      $o(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Ni(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
function So(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (n) {
    var e = function(i) {
      return typeof i == "function";
    }, o = t.classNameMergeFunction, r = e(o);
    return n.reduce(function(a, i) {
      if (!i)
        return a;
      var l = function() {
        var u = i[s];
        if (s === "style")
          a.style = Ai(Ai({}, a.style), i.style);
        else if (s === "className") {
          var d = "";
          r ? d = o(a.className, i.className) : d = [a.className, i.className].join(" ").trim(), a.className = d || void 0;
        } else if (e(u)) {
          var m = a[s];
          a[s] = m ? function() {
            m.apply(void 0, arguments), u.apply(void 0, arguments);
          } : u;
        } else
          a[s] = u;
      };
      for (var s in i)
        l();
      return a;
    }, {});
  }
}
var Li = 0;
function ui() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pr_id_";
  return Li++, "".concat(n).concat(Li);
}
function Wc() {
  var n = [], t = function(l, s) {
    var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 999, u = r(l, s, c), d = u.value + (u.key === l ? 0 : c) + 1;
    return n.push({
      key: l,
      value: d
    }), d;
  }, e = function(l) {
    n = n.filter(function(s) {
      return s.value !== l;
    });
  }, o = function(l, s) {
    return r(l, s).value;
  }, r = function(l, s) {
    var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    return Eo(n).reverse().find(function(u) {
      return s ? !0 : u.key === l;
    }) || {
      key: l,
      value: c
    };
  }, a = function(l) {
    return l && parseInt(l.style.zIndex, 10) || 0;
  };
  return {
    get: a,
    set: function(l, s, c, u) {
      s && (s.style.zIndex = String(t(l, c, u)));
    },
    clear: function(l) {
      l && (e(rn.get(l)), l.style.zIndex = "");
    },
    getCurrent: function(l, s) {
      return o(l, s);
    }
  };
}
var rn = Wc(), _t = Object.freeze({
  STARTS_WITH: "startsWith",
  CONTAINS: "contains",
  NOT_CONTAINS: "notContains",
  ENDS_WITH: "endsWith",
  EQUALS: "equals",
  NOT_EQUALS: "notEquals",
  IN: "in",
  LESS_THAN: "lt",
  LESS_THAN_OR_EQUAL_TO: "lte",
  GREATER_THAN: "gt",
  GREATER_THAN_OR_EQUAL_TO: "gte",
  BETWEEN: "between",
  DATE_IS: "dateIs",
  DATE_IS_NOT: "dateIsNot",
  DATE_BEFORE: "dateBefore",
  DATE_AFTER: "dateAfter",
  CUSTOM: "custom"
});
function $i(n, t) {
  var e = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (!e) {
    if (Array.isArray(n) || (e = Vc(n)) || t) {
      e && (n = e);
      var o = 0, r = function() {
      };
      return { s: r, n: function() {
        return o >= n.length ? { done: !0 } : { done: !1, value: n[o++] };
      }, e: function(c) {
        throw c;
      }, f: r };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a = !0, i = !1, l;
  return { s: function() {
    e = e.call(n);
  }, n: function() {
    var c = e.next();
    return a = c.done, c;
  }, e: function(c) {
    i = !0, l = c;
  }, f: function() {
    try {
      !a && e.return != null && e.return();
    } finally {
      if (i) throw l;
    }
  } };
}
function Vc(n, t) {
  if (n) {
    if (typeof n == "string") return Fi(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Fi(n, t);
  }
}
function Fi(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, o = new Array(t); e < t; e++) o[e] = n[e];
  return o;
}
var Mi = {
  filter: function(t, e, o, r, a) {
    var i = [];
    if (!t)
      return i;
    var l = $i(t), s;
    try {
      for (l.s(); !(s = l.n()).done; ) {
        var c = s.value;
        if (typeof c == "string") {
          if (this.filters[r](c, o, a)) {
            i.push(c);
            continue;
          }
        } else {
          var u = $i(e), d;
          try {
            for (u.s(); !(d = u.n()).done; ) {
              var m = d.value, v = A.resolveFieldData(c, m);
              if (this.filters[r](v, o, a)) {
                i.push(c);
                break;
              }
            }
          } catch (x) {
            u.e(x);
          } finally {
            u.f();
          }
        }
      }
    } catch (x) {
      l.e(x);
    } finally {
      l.f();
    }
    return i;
  },
  filters: {
    startsWith: function(t, e, o) {
      if (e == null || e.trim() === "")
        return !0;
      if (t == null)
        return !1;
      var r = A.removeAccents(e.toString()).toLocaleLowerCase(o), a = A.removeAccents(t.toString()).toLocaleLowerCase(o);
      return a.slice(0, r.length) === r;
    },
    contains: function(t, e, o) {
      if (e == null || typeof e == "string" && e.trim() === "")
        return !0;
      if (t == null)
        return !1;
      var r = A.removeAccents(e.toString()).toLocaleLowerCase(o), a = A.removeAccents(t.toString()).toLocaleLowerCase(o);
      return a.indexOf(r) !== -1;
    },
    notContains: function(t, e, o) {
      if (e == null || typeof e == "string" && e.trim() === "")
        return !0;
      if (t == null)
        return !1;
      var r = A.removeAccents(e.toString()).toLocaleLowerCase(o), a = A.removeAccents(t.toString()).toLocaleLowerCase(o);
      return a.indexOf(r) === -1;
    },
    endsWith: function(t, e, o) {
      if (e == null || e.trim() === "")
        return !0;
      if (t == null)
        return !1;
      var r = A.removeAccents(e.toString()).toLocaleLowerCase(o), a = A.removeAccents(t.toString()).toLocaleLowerCase(o);
      return a.indexOf(r, a.length - r.length) !== -1;
    },
    equals: function(t, e, o) {
      return e == null || typeof e == "string" && e.trim() === "" ? !0 : t == null ? !1 : t.getTime && e.getTime ? t.getTime() === e.getTime() : A.removeAccents(t.toString()).toLocaleLowerCase(o) === A.removeAccents(e.toString()).toLocaleLowerCase(o);
    },
    notEquals: function(t, e, o) {
      return e == null || typeof e == "string" && e.trim() === "" || t == null ? !0 : t.getTime && e.getTime ? t.getTime() !== e.getTime() : A.removeAccents(t.toString()).toLocaleLowerCase(o) !== A.removeAccents(e.toString()).toLocaleLowerCase(o);
    },
    in: function(t, e) {
      if (e == null || e.length === 0)
        return !0;
      for (var o = 0; o < e.length; o++)
        if (A.equals(t, e[o]))
          return !0;
      return !1;
    },
    notIn: function(t, e) {
      if (e == null || e.length === 0)
        return !0;
      for (var o = 0; o < e.length; o++)
        if (A.equals(t, e[o]))
          return !1;
      return !0;
    },
    between: function(t, e) {
      return e == null || e[0] == null || e[1] == null ? !0 : t == null ? !1 : t.getTime ? e[0].getTime() <= t.getTime() && t.getTime() <= e[1].getTime() : e[0] <= t && t <= e[1];
    },
    lt: function(t, e) {
      return e == null ? !0 : t == null ? !1 : t.getTime && e.getTime ? t.getTime() < e.getTime() : t < e;
    },
    lte: function(t, e) {
      return e == null ? !0 : t == null ? !1 : t.getTime && e.getTime ? t.getTime() <= e.getTime() : t <= e;
    },
    gt: function(t, e) {
      return e == null ? !0 : t == null ? !1 : t.getTime && e.getTime ? t.getTime() > e.getTime() : t > e;
    },
    gte: function(t, e) {
      return e == null ? !0 : t == null ? !1 : t.getTime && e.getTime ? t.getTime() >= e.getTime() : t >= e;
    },
    dateIs: function(t, e) {
      return e == null ? !0 : t == null ? !1 : t.toDateString() === e.toDateString();
    },
    dateIsNot: function(t, e) {
      return e == null ? !0 : t == null ? !1 : t.toDateString() !== e.toDateString();
    },
    dateBefore: function(t, e) {
      return e == null ? !0 : t == null ? !1 : t.getTime() < e.getTime();
    },
    dateAfter: function(t, e) {
      return e == null ? !0 : t == null ? !1 : t.getTime() > e.getTime();
    }
  },
  register: function(t, e) {
    this.filters[t] = e;
  }
};
function _r(n) {
  "@babel/helpers - typeof";
  return _r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _r(n);
}
function Kc(n, t) {
  if (_r(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t || "default");
    if (_r(o) !== "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function Uc(n) {
  var t = Kc(n, "string");
  return _r(t) === "symbol" ? t : String(t);
}
function Vt(n, t, e) {
  return t = Uc(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function Yc(n, t, e) {
  return Object.defineProperty(n, "prototype", {
    writable: !1
  }), n;
}
function Gc(n, t) {
  if (!(n instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
var jt = /* @__PURE__ */ Yc(function n() {
  Gc(this, n);
});
Vt(jt, "ripple", !1);
Vt(jt, "inputStyle", "outlined");
Vt(jt, "locale", "en");
Vt(jt, "appendTo", null);
Vt(jt, "cssTransition", !0);
Vt(jt, "autoZIndex", !0);
Vt(jt, "hideOverlaysOnDocumentScrolling", !1);
Vt(jt, "nonce", null);
Vt(jt, "nullSortOrder", 1);
Vt(jt, "zIndex", {
  modal: 1100,
  overlay: 1e3,
  menu: 1e3,
  tooltip: 1100,
  toast: 1200
});
Vt(jt, "pt", void 0);
Vt(jt, "filterMatchModeOptions", {
  text: [_t.STARTS_WITH, _t.CONTAINS, _t.NOT_CONTAINS, _t.ENDS_WITH, _t.EQUALS, _t.NOT_EQUALS],
  numeric: [_t.EQUALS, _t.NOT_EQUALS, _t.LESS_THAN, _t.LESS_THAN_OR_EQUAL_TO, _t.GREATER_THAN, _t.GREATER_THAN_OR_EQUAL_TO],
  date: [_t.DATE_IS, _t.DATE_IS_NOT, _t.DATE_BEFORE, _t.DATE_AFTER]
});
Vt(jt, "changeTheme", function(n, t, e, o) {
  var r, a = document.getElementById(e);
  if (!a)
    throw Error("Element with id ".concat(e, " not found."));
  var i = a.getAttribute("href").replace(n, t), l = document.createElement("link");
  l.setAttribute("rel", "stylesheet"), l.setAttribute("id", e), l.setAttribute("href", i), l.addEventListener("load", function() {
    o && o();
  }), (r = a.parentNode) === null || r === void 0 || r.replaceChild(l, a);
});
var Xc = {
  en: {
    accept: "Yes",
    addRule: "Add Rule",
    am: "AM",
    apply: "Apply",
    cancel: "Cancel",
    choose: "Choose",
    chooseDate: "Choose Date",
    chooseMonth: "Choose Month",
    chooseYear: "Choose Year",
    clear: "Clear",
    completed: "Completed",
    contains: "Contains",
    custom: "Custom",
    dateAfter: "Date is after",
    dateBefore: "Date is before",
    dateFormat: "mm/dd/yy",
    dateIs: "Date is",
    dateIsNot: "Date is not",
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    emptyFilterMessage: "No results found",
    emptyMessage: "No available options",
    emptySearchMessage: "No results found",
    emptySelectionMessage: "No selected item",
    endsWith: "Ends with",
    equals: "Equals",
    fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    filter: "Filter",
    firstDayOfWeek: 0,
    gt: "Greater than",
    gte: "Greater than or equal to",
    lt: "Less than",
    lte: "Less than or equal to",
    matchAll: "Match All",
    matchAny: "Match Any",
    medium: "Medium",
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    nextDecade: "Next Decade",
    nextHour: "Next Hour",
    nextMinute: "Next Minute",
    nextMonth: "Next Month",
    nextSecond: "Next Second",
    nextYear: "Next Year",
    noFilter: "No Filter",
    notContains: "Not contains",
    notEquals: "Not equals",
    now: "Now",
    passwordPrompt: "Enter a password",
    pending: "Pending",
    pm: "PM",
    prevDecade: "Previous Decade",
    prevHour: "Previous Hour",
    prevMinute: "Previous Minute",
    prevMonth: "Previous Month",
    prevSecond: "Previous Second",
    prevYear: "Previous Year",
    reject: "No",
    removeRule: "Remove Rule",
    searchMessage: "{0} results are available",
    selectionMessage: "{0} items selected",
    showMonthAfterYear: !1,
    startsWith: "Starts with",
    strong: "Strong",
    today: "Today",
    upload: "Upload",
    weak: "Weak",
    weekHeader: "Wk",
    aria: {
      cancelEdit: "Cancel Edit",
      close: "Close",
      collapseRow: "Row Collapsed",
      editRow: "Edit Row",
      expandRow: "Row Expanded",
      falseLabel: "False",
      filterConstraint: "Filter Constraint",
      filterOperator: "Filter Operator",
      firstPageLabel: "First Page",
      gridView: "Grid View",
      hideFilterMenu: "Hide Filter Menu",
      jumpToPageDropdownLabel: "Jump to Page Dropdown",
      jumpToPageInputLabel: "Jump to Page Input",
      lastPageLabel: "Last Page",
      listView: "List View",
      moveAllToSource: "Move All to Source",
      moveAllToTarget: "Move All to Target",
      moveBottom: "Move Bottom",
      moveDown: "Move Down",
      moveToSource: "Move to Source",
      moveToTarget: "Move to Target",
      moveTop: "Move Top",
      moveUp: "Move Up",
      navigation: "Navigation",
      next: "Next",
      nextPageLabel: "Next Page",
      nullLabel: "Not Selected",
      pageLabel: "Page {page}",
      otpLabel: "Please enter one time password character {0}",
      passwordHide: "Hide Password",
      passwordShow: "Show Password",
      previous: "Previous",
      previousPageLabel: "Previous Page",
      rotateLeft: "Rotate Left",
      rotateRight: "Rotate Right",
      rowsPerPageLabel: "Rows per page",
      saveEdit: "Save Edit",
      scrollTop: "Scroll Top",
      selectAll: "All items selected",
      selectRow: "Row Selected",
      showFilterMenu: "Show Filter Menu",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      star: "1 star",
      stars: "{star} stars",
      trueLabel: "True",
      unselectAll: "All items unselected",
      unselectRow: "Row Unselected",
      zoomImage: "Zoom Image",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out"
    }
  }
};
function er(n, t) {
  if (n.includes("__proto__") || n.includes("prototype"))
    throw new Error("Unsafe key detected");
  var e = jt.locale;
  try {
    return Jc(e)[n];
  } catch {
    throw new Error("The ".concat(n, " option is not found in the current locale('").concat(e, "')."));
  }
}
function Jc(n) {
  var t = n || jt.locale;
  if (t.includes("__proto__") || t.includes("prototype"))
    throw new Error("Unsafe locale detected");
  return Xc[t];
}
var ut = /* @__PURE__ */ Se.createContext(), ct = jt;
function Zc(n) {
  if (Array.isArray(n)) return n;
}
function Qc(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var o, r, a, i, l = [], s = !0, c = !1;
    try {
      if (a = (e = e.call(n)).next, t === 0) {
        if (Object(e) !== e) return;
        s = !1;
      } else for (; !(s = (o = a.call(e)).done) && (l.push(o.value), l.length !== t); s = !0) ;
    } catch (u) {
      c = !0, r = u;
    } finally {
      try {
        if (!s && e.return != null && (i = e.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw r;
      }
    }
    return l;
  }
}
function Oa(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, o = new Array(t); e < t; e++) o[e] = n[e];
  return o;
}
function ts(n, t) {
  if (n) {
    if (typeof n == "string") return Oa(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Oa(n, t);
  }
}
function eu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xn(n, t) {
  return Zc(n) || Qc(n, t) || ts(n, t) || eu();
}
var kr = function(t) {
  var e = f.useRef(null);
  return f.useEffect(function() {
    return e.current = t, function() {
      e.current = null;
    };
  }, [t]), e.current;
}, cn = function(t) {
  return f.useEffect(function() {
    return t;
  }, []);
}, En = function(t) {
  var e = t.target, o = e === void 0 ? "document" : e, r = t.type, a = t.listener, i = t.options, l = t.when, s = l === void 0 ? !0 : l, c = f.useRef(null), u = f.useRef(null), d = kr(a), m = kr(i), v = function() {
    var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, C = E.target;
    A.isNotEmpty(C) && (x(), (E.when || s) && (c.current = L.getTargetElement(C))), !u.current && c.current && (u.current = function(q) {
      return a && a(q);
    }, c.current.addEventListener(r, u.current, i));
  }, x = function() {
    u.current && (c.current.removeEventListener(r, u.current, i), u.current = null);
  }, h = function() {
    x(), d = null, m = null;
  }, S = f.useCallback(function() {
    s ? c.current = L.getTargetElement(o) : (x(), c.current = null);
  }, [o, s]);
  return f.useEffect(function() {
    S();
  }, [S]), f.useEffect(function() {
    var w = "".concat(d) !== "".concat(a), E = m !== i, C = u.current;
    C && (w || E) ? (x(), s && v()) : C || h();
  }, [a, i, s]), cn(function() {
    h();
  }), [v, x];
}, jn = {}, tu = function(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, o = f.useState(function() {
    return ui();
  }), r = xn(o, 1), a = r[0], i = f.useState(0), l = xn(i, 2), s = l[0], c = l[1];
  return f.useEffect(function() {
    if (e) {
      jn[t] || (jn[t] = []);
      var u = jn[t].push(a);
      return c(u), function() {
        delete jn[t][u - 1];
        var d = jn[t].length - 1, m = A.findLastIndex(jn[t], function(v) {
          return v !== void 0;
        });
        m !== d && jn[t].splice(m + 1), c(void 0);
      };
    }
  }, [t, a, e]), s;
};
function nu(n) {
  if (Array.isArray(n)) return Oa(n);
}
function ru(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function ou() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zi(n) {
  return nu(n) || ru(n) || ts(n) || ou();
}
var ns = {
  SIDEBAR: 100,
  SLIDE_MENU: 200,
  DIALOG: 300,
  IMAGE: 400,
  MENU: 500,
  OVERLAY_PANEL: 600,
  PASSWORD: 700,
  CASCADE_SELECT: 800,
  SPLIT_BUTTON: 900,
  SPEED_DIAL: 1e3,
  TOOLTIP: 1200
}, rs = {
  /**
   * Mapping from ESC_KEY_HANDLING_PRIORITY to array of related listeners, grouped by priority
   * @example
   * Map<{
   *     [ESC_KEY_HANDLING_PRIORITIES.SIDEBAR]: Map<{
   *         1: () => {...},
   *         2: () => {...}
   *     }>,
   *     [ESC_KEY_HANDLING_PRIORITIES.DIALOG]: Map<{
   *         1: () => {...},
   *         2: () => {...}
   *     }>
   * }>;
   */
  escKeyListeners: /* @__PURE__ */ new Map(),
  /**
   * Keydown handler (attached to any keydown)
   */
  onGlobalKeyDown: function(t) {
    if (t.code === "Escape") {
      var e = rs.escKeyListeners, o = Math.max.apply(Math, zi(e.keys())), r = e.get(o), a = Math.max.apply(Math, zi(r.keys())), i = r.get(a);
      i(t);
    }
  },
  /**
   * Attach global keydown listener if there are any "esc" key handlers assigned,
   * otherwise detach.
   */
  refreshGlobalKeyDownListener: function() {
    var t = L.getTargetElement("document");
    this.escKeyListeners.size > 0 ? t.addEventListener("keydown", this.onGlobalKeyDown) : t.removeEventListener("keydown", this.onGlobalKeyDown);
  },
  /**
   * Add "Esc" key handler
   */
  addListener: function(t, e) {
    var o = this, r = xn(e, 2), a = r[0], i = r[1], l = this.escKeyListeners;
    l.has(a) || l.set(a, /* @__PURE__ */ new Map());
    var s = l.get(a);
    if (s.has(i))
      throw new Error("Unexpected: global esc key listener with priority [".concat(a, ", ").concat(i, "] already exists."));
    return s.set(i, t), this.refreshGlobalKeyDownListener(), function() {
      s.delete(i), s.size === 0 && l.delete(a), o.refreshGlobalKeyDownListener();
    };
  }
}, os = function(t) {
  var e = t.callback, o = t.when, r = t.priority;
  ge(function() {
    if (o)
      return rs.addListener(e, r);
  }, [e, o, r]);
}, Dt = function() {
  var t = ln(ut);
  return function() {
    for (var e = arguments.length, o = new Array(e), r = 0; r < e; r++)
      o[r] = arguments[r];
    return So(o, t == null ? void 0 : t.ptOptions);
  };
}, Zt = function(t) {
  var e = f.useRef(!1);
  return f.useEffect(function() {
    if (!e.current)
      return e.current = !0, t && t();
  }, []);
}, as = function(t) {
  var e = t.target, o = t.listener, r = t.options, a = t.when, i = a === void 0 ? !0 : a, l = f.useContext(ut), s = f.useRef(null), c = f.useRef(null), u = f.useRef([]), d = kr(o), m = kr(r), v = function() {
    var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (A.isNotEmpty(E.target) && (x(), (E.when || i) && (s.current = L.getTargetElement(E.target))), !c.current && s.current) {
      var C = l ? l.hideOverlaysOnDocumentScrolling : ct.hideOverlaysOnDocumentScrolling, q = u.current = L.getScrollableParents(s.current, C);
      c.current = function(y) {
        return o && o(y);
      }, q.forEach(function(y) {
        return y.addEventListener("scroll", c.current, r);
      });
    }
  }, x = function() {
    if (c.current) {
      var E = u.current;
      E.forEach(function(C) {
        return C.removeEventListener("scroll", c.current, r);
      }), c.current = null;
    }
  }, h = function() {
    x(), u.current = null, d = null, m = null;
  }, S = f.useCallback(function() {
    i ? s.current = L.getTargetElement(e) : (x(), s.current = null);
  }, [e, i]);
  return f.useEffect(function() {
    S();
  }, [S]), f.useEffect(function() {
    var w = "".concat(d) !== "".concat(o), E = m !== r, C = c.current;
    C && (w || E) ? (x(), i && v()) : C || h();
  }, [o, r, i]), cn(function() {
    h();
  }), [v, x];
}, di = function(t) {
  var e = t.listener, o = t.when, r = o === void 0 ? !0 : o;
  return En({
    target: "window",
    type: "resize",
    listener: e,
    when: r
  });
}, au = function(t) {
  var e = t.target, o = t.overlay, r = t.listener, a = t.when, i = a === void 0 ? !0 : a, l = t.type, s = l === void 0 ? "click" : l, c = f.useRef(null), u = f.useRef(null), d = En({
    target: "window",
    type: s,
    listener: function(te) {
      r && r(te, {
        type: "outside",
        valid: te.which !== 3 && k(te)
      });
    }
  }), m = xn(d, 2), v = m[0], x = m[1], h = di({
    target: "window",
    listener: function(te) {
      r && r(te, {
        type: "resize",
        valid: !L.isTouchDevice()
      });
    }
  }), S = xn(h, 2), w = S[0], E = S[1], C = En({
    target: "window",
    type: "orientationchange",
    listener: function(te) {
      r && r(te, {
        type: "orientationchange",
        valid: !0
      });
    }
  }), q = xn(C, 2), y = q[0], P = q[1], I = as({
    target: e,
    listener: function(te) {
      r && r(te, {
        type: "scroll",
        valid: !0
      });
    }
  }), V = xn(I, 2), N = V[0], _ = V[1], k = function(te) {
    return c.current && !(c.current.isSameNode(te.target) || c.current.contains(te.target) || u.current && u.current.contains(te.target));
  }, X = function() {
    v(), w(), y(), N();
  }, M = function() {
    x(), E(), P(), _();
  };
  return f.useEffect(function() {
    i ? (c.current = L.getTargetElement(e), u.current = L.getTargetElement(o)) : (M(), c.current = u.current = null);
  }, [e, o, i]), f.useEffect(function() {
    M();
  }, [i]), cn(function() {
    M();
  }), [X, M];
}, iu = 0, Ln = function(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = xe(!1), r = xn(o, 2), a = r[0], i = r[1], l = ze(null), s = ln(ut), c = L.isClient() ? window.document : void 0, u = e.document, d = u === void 0 ? c : u, m = e.manual, v = m === void 0 ? !1 : m, x = e.name, h = x === void 0 ? "style_".concat(++iu) : x, S = e.id, w = S === void 0 ? void 0 : S, E = e.media, C = E === void 0 ? void 0 : E, q = function(N) {
    var _ = N.querySelector('style[data-primereact-style-id="'.concat(h, '"]'));
    if (_)
      return _;
    if (w !== void 0) {
      var k = d.getElementById(w);
      if (k)
        return k;
    }
    return d.createElement("style");
  }, y = function(N) {
    a && t !== N && (l.current.textContent = N);
  }, P = function() {
    if (!(!d || a)) {
      var N = (s == null ? void 0 : s.styleContainer) || d.head;
      l.current = q(N), l.current.isConnected || (l.current.type = "text/css", w && (l.current.id = w), C && (l.current.media = C), L.addNonce(l.current, s && s.nonce || ct.nonce), N.appendChild(l.current), h && l.current.setAttribute("data-primereact-style-id", h)), l.current.textContent = t, i(!0);
    }
  }, I = function() {
    !d || !l.current || (L.removeInlineStyle(l.current), i(!1));
  };
  return ge(function() {
    v || P();
  }, [v]), {
    id: w,
    name: h,
    update: y,
    unload: I,
    load: P,
    isLoaded: a
  };
}, Ue = function(t, e) {
  var o = f.useRef(!1);
  return f.useEffect(function() {
    if (!o.current) {
      o.current = !0;
      return;
    }
    return t && t();
  }, e);
};
function qa(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, o = new Array(t); e < t; e++) o[e] = n[e];
  return o;
}
function lu(n) {
  if (Array.isArray(n)) return qa(n);
}
function su(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function cu(n, t) {
  if (n) {
    if (typeof n == "string") return qa(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return qa(n, t);
  }
}
function uu() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Hi(n) {
  return lu(n) || su(n) || cu(n) || uu();
}
function Rr(n) {
  "@babel/helpers - typeof";
  return Rr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Rr(n);
}
function du(n, t) {
  if (Rr(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t || "default");
    if (Rr(o) !== "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function fu(n) {
  var t = du(n, "string");
  return Rr(t) === "symbol" ? t : String(t);
}
function Pa(n, t, e) {
  return t = fu(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function Bi(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function St(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bi(Object(e), !0).forEach(function(o) {
      Pa(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Bi(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
var pu = `
.p-hidden-accessible {
    border: 0;
    padding: 0;
    margin: -1px;
    position: absolute;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    clip-path: inset(50%);
    white-space: nowrap;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: var(--scrollbar-width);
}
`, mu = `
.p-button {
    margin: 0;
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    vertical-align: bottom;
    text-align: center;
    overflow: hidden;
    position: relative;
}

.p-button-label {
    flex: 1 1 auto;
}

.p-button-icon-right {
    order: 1;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-only {
    justify-content: center;
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
    flex: 0 0 auto;
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-group .p-button {
    margin: 0;
}

.p-button-group .p-button:not(:last-child) {
    border-right: 0 none;
}

.p-button-group .p-button:not(:first-of-type):not(:last-of-type) {
    border-radius: 0;
}

.p-button-group .p-button:first-of-type {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-button-group .p-button:last-of-type {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-button-group .p-button:focus {
    position: relative;
    z-index: 1;
}
`, vu = `
.p-inputtext {
    margin: 0;
}

.p-fluid .p-inputtext {
    width: 100%;
}

/* InputGroup */
.p-inputgroup {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup-addon {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-inputgroup .p-float-label {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-fluid .p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper,
.p-fluid .p-inputgroup .p-input {
    flex: 1 1 auto;
    width: 1%;
}

/* Floating Label */
.p-float-label {
    display: block;
    position: relative;
}

.p-float-label label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    margin-top: -0.5rem;
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
}

.p-float-label textarea ~ label,
.p-float-label .p-mention ~ label {
    top: 1rem;
}

.p-float-label input:focus ~ label,
.p-float-label input:-webkit-autofill ~ label,
.p-float-label input.p-filled ~ label,
.p-float-label textarea:focus ~ label,
.p-float-label textarea.p-filled ~ label,
.p-float-label .p-inputwrapper-focus ~ label,
.p-float-label .p-inputwrapper-filled ~ label,
.p-float-label .p-tooltip-target-wrapper ~ label {
    top: -0.75rem;
    font-size: 12px;
}

.p-float-label .p-placeholder,
.p-float-label input::placeholder,
.p-float-label .p-inputtext::placeholder {
    opacity: 0;
    transition-property: all;
    transition-timing-function: ease;
}

.p-float-label .p-focus .p-placeholder,
.p-float-label input:focus::placeholder,
.p-float-label .p-inputtext:focus::placeholder {
    opacity: 1;
    transition-property: all;
    transition-timing-function: ease;
}

.p-input-icon-left,
.p-input-icon-right {
    position: relative;
    display: inline-block;
}

.p-input-icon-left > i,
.p-input-icon-right > i,
.p-input-icon-left > svg,
.p-input-icon-right > svg,
.p-input-icon-left > .p-input-prefix,
.p-input-icon-right > .p-input-suffix {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
}

.p-fluid .p-input-icon-left,
.p-fluid .p-input-icon-right {
    display: block;
    width: 100%;
}
`, gu = `
.p-icon {
    display: inline-block;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

svg.p-icon {
    pointer-events: auto;
}

svg.p-icon g,
.p-disabled svg.p-icon {
    pointer-events: none;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`, hu = `
@layer primereact {
    .p-component, .p-component * {
        box-sizing: border-box;
    }

    .p-hidden {
        display: none;
    }

    .p-hidden-space {
        visibility: hidden;
    }

    .p-reset {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        text-decoration: none;
        font-size: 100%;
        list-style: none;
    }

    .p-disabled, .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-component-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-unselectable-text {
        user-select: none;
    }

    .p-scrollbar-measure {
        width: 100px;
        height: 100px;
        overflow: scroll;
        position: absolute;
        top: -9999px;
    }

    @-webkit-keyframes p-fadein {
      0%   { opacity: 0; }
      100% { opacity: 1; }
    }
    @keyframes p-fadein {
      0%   { opacity: 0; }
      100% { opacity: 1; }
    }

    .p-link {
        text-align: left;
        background-color: transparent;
        margin: 0;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-link:disabled {
        cursor: default;
    }

    /* Non react overlay animations */
    .p-connected-overlay {
        opacity: 0;
        transform: scaleY(0.8);
        transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-visible {
        opacity: 1;
        transform: scaleY(1);
    }

    .p-connected-overlay-hidden {
        opacity: 0;
        transform: scaleY(1);
        transition: opacity .1s linear;
    }

    /* React based overlay animations */
    .p-connected-overlay-enter {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-connected-overlay-enter-active {
        opacity: 1;
        transform: scaleY(1);
        transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-enter-done {
        transform: none;
    }

    .p-connected-overlay-exit {
        opacity: 1;
    }

    .p-connected-overlay-exit-active {
        opacity: 0;
        transition: opacity .1s linear;
    }

    /* Toggleable Content */
    .p-toggleable-content-enter {
        max-height: 0;
    }

    .p-toggleable-content-enter-active {
        overflow: hidden;
        max-height: 1000px;
        transition: max-height 1s ease-in-out;
    }

    .p-toggleable-content-enter-done {
        transform: none;
    }

    .p-toggleable-content-exit {
        max-height: 1000px;
    }

    .p-toggleable-content-exit-active {
        overflow: hidden;
        max-height: 0;
        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
    }

    .p-sr-only {
        border: 0;
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
        word-wrap: normal;
    }

    /* @todo Refactor */
    .p-menu .p-menuitem-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }

    `.concat(mu, `
    `).concat(vu, `
    `).concat(gu, `
}
`), je = {
  cProps: void 0,
  cParams: void 0,
  cName: void 0,
  defaultProps: {
    pt: void 0,
    ptOptions: void 0,
    unstyled: !1
  },
  context: {},
  globalCSS: void 0,
  classes: {},
  styles: "",
  extend: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = t.css, o = St(St({}, t.defaultProps), je.defaultProps), r = {}, a = function(u) {
      var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return je.context = d, je.cProps = u, A.getMergedProps(u, o);
    }, i = function(u) {
      return A.getDiffProps(u, o);
    }, l = function() {
      var u, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", v = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, x = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0;
      d.hasOwnProperty("pt") && d.pt !== void 0 && (d = d.pt);
      var h = m, S = /./g.test(h) && !!v[h.split(".")[0]], w = S ? A.toFlatCase(h.split(".")[1]) : A.toFlatCase(h), E = v.hostName && A.toFlatCase(v.hostName), C = E || v.props && v.props.__TYPE && A.toFlatCase(v.props.__TYPE) || "", q = w === "transition", y = "data-pc-", P = function ye(se) {
        return se != null && se.props ? se.hostName ? se.props.__TYPE === se.hostName ? se.props : ye(se.parent) : se.parent : void 0;
      }, I = function(se) {
        var Q, R;
        return ((Q = v.props) === null || Q === void 0 ? void 0 : Q[se]) || ((R = P(v)) === null || R === void 0 ? void 0 : R[se]);
      };
      je.cParams = v, je.cName = C;
      var V = I("ptOptions") || je.context.ptOptions || {}, N = V.mergeSections, _ = N === void 0 ? !0 : N, k = V.mergeProps, X = k === void 0 ? !1 : k, M = function() {
        var se = Sn.apply(void 0, arguments);
        return Array.isArray(se) ? {
          className: ve.apply(void 0, Hi(se))
        } : A.isString(se) ? {
          className: se
        } : se != null && se.hasOwnProperty("className") && Array.isArray(se.className) ? {
          className: ve.apply(void 0, Hi(se.className))
        } : se;
      }, J = x ? S ? is(M, h, v) : ls(M, h, v) : void 0, te = S ? void 0 : Mo(Fo(d, C), M, h, v), me = !q && St(St({}, w === "root" && Pa({}, "".concat(y, "name"), v.props && v.props.__parentMetadata ? A.toFlatCase(v.props.__TYPE) : C)), {}, Pa({}, "".concat(y, "section"), w));
      return _ || !_ && te ? X ? So([J, te, Object.keys(me).length ? me : {}], {
        classNameMergeFunction: (u = je.context.ptOptions) === null || u === void 0 ? void 0 : u.classNameMergeFunction
      }) : St(St(St({}, J), te), Object.keys(me).length ? me : {}) : St(St({}, te), Object.keys(me).length ? me : {});
    }, s = function() {
      var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, d = u.props, m = u.state, v = function() {
        var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return l((d || {}).pt, C, St(St({}, u), q));
      }, x = function() {
        var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return l(C, q, y, !1);
      }, h = function() {
        return je.context.unstyled || ct.unstyled || d.unstyled;
      }, S = function() {
        var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return h() ? void 0 : Sn(e && e.classes, C, St({
          props: d,
          state: m
        }, q));
      }, w = function() {
        var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
        if (y) {
          var P, I = Sn(e && e.inlineStyles, C, St({
            props: d,
            state: m
          }, q)), V = Sn(r, C, St({
            props: d,
            state: m
          }, q));
          return So([V, I], {
            classNameMergeFunction: (P = je.context.ptOptions) === null || P === void 0 ? void 0 : P.classNameMergeFunction
          });
        }
      };
      return {
        ptm: v,
        ptmo: x,
        sx: w,
        cx: S,
        isUnstyled: h
      };
    };
    return St(St({
      getProps: a,
      getOtherProps: i,
      setMetaData: s
    }, t), {}, {
      defaultProps: o
    });
  }
}, Sn = function n(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = String(A.toFlatCase(e)).split("."), a = r.shift(), i = A.isNotEmpty(t) ? Object.keys(t).find(function(l) {
    return A.toFlatCase(l) === a;
  }) : "";
  return a ? A.isObject(t) ? n(A.getItemValue(t[i], o), r.join("."), o) : void 0 : A.getItemValue(t, o);
}, Fo = function(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 ? arguments[2] : void 0, r = t == null ? void 0 : t._usept, a = function(l) {
    var s, c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, u = o ? o(l) : l, d = A.toFlatCase(e);
    return (s = c ? d !== je.cName ? u == null ? void 0 : u[d] : void 0 : u == null ? void 0 : u[d]) !== null && s !== void 0 ? s : u;
  };
  return A.isNotEmpty(r) ? {
    _usept: r,
    originalValue: a(t.originalValue),
    value: a(t.value)
  } : a(t, !0);
}, Mo = function(t, e, o, r) {
  var a = function(h) {
    return e(h, o, r);
  };
  if (t != null && t.hasOwnProperty("_usept")) {
    var i = t._usept || je.context.ptOptions || {}, l = i.mergeSections, s = l === void 0 ? !0 : l, c = i.mergeProps, u = c === void 0 ? !1 : c, d = i.classNameMergeFunction, m = a(t.originalValue), v = a(t.value);
    return m === void 0 && v === void 0 ? void 0 : A.isString(v) ? v : A.isString(m) ? m : s || !s && v ? u ? So([m, v], {
      classNameMergeFunction: d
    }) : St(St({}, m), v) : v;
  }
  return a(t);
}, bu = function() {
  return Fo(je.context.pt || ct.pt, void 0, function(t) {
    return A.getItemValue(t, je.cParams);
  });
}, yu = function() {
  return Fo(je.context.pt || ct.pt, void 0, function(t) {
    return Sn(t, je.cName, je.cParams) || A.getItemValue(t, je.cParams);
  });
}, is = function(t, e, o) {
  return Mo(bu(), t, e, o);
}, ls = function(t, e, o) {
  return Mo(yu(), t, e, o);
}, Qt = function(t) {
  var e = arguments.length > 2 ? arguments[2] : void 0, o = e.name, r = e.styled, a = r === void 0 ? !1 : r, i = e.hostName, l = i === void 0 ? "" : i, s = is(Sn, "global.css", je.cParams), c = A.toFlatCase(o), u = Ln(pu, {
    name: "base",
    manual: !0
  }), d = u.load, m = Ln(hu, {
    name: "common",
    manual: !0
  }), v = m.load, x = Ln(s, {
    name: "global",
    manual: !0
  }), h = x.load, S = Ln(t, {
    name: o,
    manual: !0
  }), w = S.load, E = function(q) {
    if (!l) {
      var y = Mo(Fo((je.cProps || {}).pt, c), Sn, "hooks.".concat(q)), P = ls(Sn, "hooks.".concat(q));
      y == null || y(), P == null || P();
    }
  };
  E("useMountEffect"), Zt(function() {
    d(), h(), v(), a || w();
  }), Ue(function() {
    E("useUpdateEffect");
  }), cn(function() {
    E("useUnmountEffect");
  });
};
function Co() {
  return Co = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e) ({}).hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, Co.apply(null, arguments);
}
function ss(n, t) {
  if (n == null) return {};
  var e = {};
  for (var o in n) if ({}.hasOwnProperty.call(n, o)) {
    if (t.includes(o)) continue;
    e[o] = n[o];
  }
  return e;
}
function Ta(n, t) {
  return Ta = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, o) {
    return e.__proto__ = o, e;
  }, Ta(n, t);
}
function cs(n, t) {
  n.prototype = Object.create(t.prototype), n.prototype.constructor = n, Ta(n, t);
}
var Ia = { exports: {} }, no = { exports: {} }, Le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wi;
function wu() {
  if (Wi) return Le;
  Wi = 1;
  var n = typeof Symbol == "function" && Symbol.for, t = n ? Symbol.for("react.element") : 60103, e = n ? Symbol.for("react.portal") : 60106, o = n ? Symbol.for("react.fragment") : 60107, r = n ? Symbol.for("react.strict_mode") : 60108, a = n ? Symbol.for("react.profiler") : 60114, i = n ? Symbol.for("react.provider") : 60109, l = n ? Symbol.for("react.context") : 60110, s = n ? Symbol.for("react.async_mode") : 60111, c = n ? Symbol.for("react.concurrent_mode") : 60111, u = n ? Symbol.for("react.forward_ref") : 60112, d = n ? Symbol.for("react.suspense") : 60113, m = n ? Symbol.for("react.suspense_list") : 60120, v = n ? Symbol.for("react.memo") : 60115, x = n ? Symbol.for("react.lazy") : 60116, h = n ? Symbol.for("react.block") : 60121, S = n ? Symbol.for("react.fundamental") : 60117, w = n ? Symbol.for("react.responder") : 60118, E = n ? Symbol.for("react.scope") : 60119;
  function C(y) {
    if (typeof y == "object" && y !== null) {
      var P = y.$$typeof;
      switch (P) {
        case t:
          switch (y = y.type, y) {
            case s:
            case c:
            case o:
            case a:
            case r:
            case d:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case l:
                case u:
                case x:
                case v:
                case i:
                  return y;
                default:
                  return P;
              }
          }
        case e:
          return P;
      }
    }
  }
  function q(y) {
    return C(y) === c;
  }
  return Le.AsyncMode = s, Le.ConcurrentMode = c, Le.ContextConsumer = l, Le.ContextProvider = i, Le.Element = t, Le.ForwardRef = u, Le.Fragment = o, Le.Lazy = x, Le.Memo = v, Le.Portal = e, Le.Profiler = a, Le.StrictMode = r, Le.Suspense = d, Le.isAsyncMode = function(y) {
    return q(y) || C(y) === s;
  }, Le.isConcurrentMode = q, Le.isContextConsumer = function(y) {
    return C(y) === l;
  }, Le.isContextProvider = function(y) {
    return C(y) === i;
  }, Le.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, Le.isForwardRef = function(y) {
    return C(y) === u;
  }, Le.isFragment = function(y) {
    return C(y) === o;
  }, Le.isLazy = function(y) {
    return C(y) === x;
  }, Le.isMemo = function(y) {
    return C(y) === v;
  }, Le.isPortal = function(y) {
    return C(y) === e;
  }, Le.isProfiler = function(y) {
    return C(y) === a;
  }, Le.isStrictMode = function(y) {
    return C(y) === r;
  }, Le.isSuspense = function(y) {
    return C(y) === d;
  }, Le.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === o || y === c || y === a || y === r || y === d || y === m || typeof y == "object" && y !== null && (y.$$typeof === x || y.$$typeof === v || y.$$typeof === i || y.$$typeof === l || y.$$typeof === u || y.$$typeof === S || y.$$typeof === w || y.$$typeof === E || y.$$typeof === h);
  }, Le.typeOf = C, Le;
}
var $e = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vi;
function xu() {
  return Vi || (Vi = 1, process.env.NODE_ENV !== "production" && function() {
    var n = typeof Symbol == "function" && Symbol.for, t = n ? Symbol.for("react.element") : 60103, e = n ? Symbol.for("react.portal") : 60106, o = n ? Symbol.for("react.fragment") : 60107, r = n ? Symbol.for("react.strict_mode") : 60108, a = n ? Symbol.for("react.profiler") : 60114, i = n ? Symbol.for("react.provider") : 60109, l = n ? Symbol.for("react.context") : 60110, s = n ? Symbol.for("react.async_mode") : 60111, c = n ? Symbol.for("react.concurrent_mode") : 60111, u = n ? Symbol.for("react.forward_ref") : 60112, d = n ? Symbol.for("react.suspense") : 60113, m = n ? Symbol.for("react.suspense_list") : 60120, v = n ? Symbol.for("react.memo") : 60115, x = n ? Symbol.for("react.lazy") : 60116, h = n ? Symbol.for("react.block") : 60121, S = n ? Symbol.for("react.fundamental") : 60117, w = n ? Symbol.for("react.responder") : 60118, E = n ? Symbol.for("react.scope") : 60119;
    function C(F) {
      return typeof F == "string" || typeof F == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      F === o || F === c || F === a || F === r || F === d || F === m || typeof F == "object" && F !== null && (F.$$typeof === x || F.$$typeof === v || F.$$typeof === i || F.$$typeof === l || F.$$typeof === u || F.$$typeof === S || F.$$typeof === w || F.$$typeof === E || F.$$typeof === h);
    }
    function q(F) {
      if (typeof F == "object" && F !== null) {
        var qe = F.$$typeof;
        switch (qe) {
          case t:
            var ke = F.type;
            switch (ke) {
              case s:
              case c:
              case o:
              case a:
              case r:
              case d:
                return ke;
              default:
                var _e = ke && ke.$$typeof;
                switch (_e) {
                  case l:
                  case u:
                  case x:
                  case v:
                  case i:
                    return _e;
                  default:
                    return qe;
                }
            }
          case e:
            return qe;
        }
      }
    }
    var y = s, P = c, I = l, V = i, N = t, _ = u, k = o, X = x, M = v, J = e, te = a, me = r, ye = d, se = !1;
    function Q(F) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), R(F) || q(F) === s;
    }
    function R(F) {
      return q(F) === c;
    }
    function Y(F) {
      return q(F) === l;
    }
    function ae(F) {
      return q(F) === i;
    }
    function G(F) {
      return typeof F == "object" && F !== null && F.$$typeof === t;
    }
    function K(F) {
      return q(F) === u;
    }
    function ue(F) {
      return q(F) === o;
    }
    function de(F) {
      return q(F) === x;
    }
    function pe(F) {
      return q(F) === v;
    }
    function U(F) {
      return q(F) === e;
    }
    function j(F) {
      return q(F) === a;
    }
    function $(F) {
      return q(F) === r;
    }
    function le(F) {
      return q(F) === d;
    }
    $e.AsyncMode = y, $e.ConcurrentMode = P, $e.ContextConsumer = I, $e.ContextProvider = V, $e.Element = N, $e.ForwardRef = _, $e.Fragment = k, $e.Lazy = X, $e.Memo = M, $e.Portal = J, $e.Profiler = te, $e.StrictMode = me, $e.Suspense = ye, $e.isAsyncMode = Q, $e.isConcurrentMode = R, $e.isContextConsumer = Y, $e.isContextProvider = ae, $e.isElement = G, $e.isForwardRef = K, $e.isFragment = ue, $e.isLazy = de, $e.isMemo = pe, $e.isPortal = U, $e.isProfiler = j, $e.isStrictMode = $, $e.isSuspense = le, $e.isValidElementType = C, $e.typeOf = q;
  }()), $e;
}
var Ki;
function us() {
  return Ki || (Ki = 1, process.env.NODE_ENV === "production" ? no.exports = wu() : no.exports = xu()), no.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ia, Ui;
function Eu() {
  if (Ui) return ia;
  Ui = 1;
  var n = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, e = Object.prototype.propertyIsEnumerable;
  function o(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function r() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var i = {}, l = 0; l < 10; l++)
        i["_" + String.fromCharCode(l)] = l;
      var s = Object.getOwnPropertyNames(i).map(function(u) {
        return i[u];
      });
      if (s.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        c[u] = u;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ia = r() ? Object.assign : function(a, i) {
    for (var l, s = o(a), c, u = 1; u < arguments.length; u++) {
      l = Object(arguments[u]);
      for (var d in l)
        t.call(l, d) && (s[d] = l[d]);
      if (n) {
        c = n(l);
        for (var m = 0; m < c.length; m++)
          e.call(l, c[m]) && (s[c[m]] = l[c[m]]);
      }
    }
    return s;
  }, ia;
}
var la, Yi;
function fi() {
  if (Yi) return la;
  Yi = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return la = n, la;
}
var sa, Gi;
function ds() {
  return Gi || (Gi = 1, sa = Function.call.bind(Object.prototype.hasOwnProperty)), sa;
}
var ca, Xi;
function Su() {
  if (Xi) return ca;
  Xi = 1;
  var n = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = fi(), e = {}, o = ds();
    n = function(a) {
      var i = "Warning: " + a;
      typeof console < "u" && console.error(i);
      try {
        throw new Error(i);
      } catch {
      }
    };
  }
  function r(a, i, l, s, c) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in a)
        if (o(a, u)) {
          var d;
          try {
            if (typeof a[u] != "function") {
              var m = Error(
                (s || "React class") + ": " + l + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            d = a[u](i, u, s, l, null, t);
          } catch (x) {
            d = x;
          }
          if (d && !(d instanceof Error) && n(
            (s || "React class") + ": type specification of " + l + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in e)) {
            e[d.message] = !0;
            var v = c ? c() : "";
            n(
              "Failed " + l + " type: " + d.message + (v ?? "")
            );
          }
        }
    }
  }
  return r.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (e = {});
  }, ca = r, ca;
}
var ua, Ji;
function Cu() {
  if (Ji) return ua;
  Ji = 1;
  var n = us(), t = Eu(), e = fi(), o = ds(), r = Su(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(l) {
    var s = "Warning: " + l;
    typeof console < "u" && console.error(s);
    try {
      throw new Error(s);
    } catch {
    }
  });
  function i() {
    return null;
  }
  return ua = function(l, s) {
    var c = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(R) {
      var Y = R && (c && R[c] || R[u]);
      if (typeof Y == "function")
        return Y;
    }
    var m = "<<anonymous>>", v = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: E(),
      arrayOf: C,
      element: q(),
      elementType: y(),
      instanceOf: P,
      node: _(),
      objectOf: V,
      oneOf: I,
      oneOfType: N,
      shape: X,
      exact: M
    };
    function x(R, Y) {
      return R === Y ? R !== 0 || 1 / R === 1 / Y : R !== R && Y !== Y;
    }
    function h(R, Y) {
      this.message = R, this.data = Y && typeof Y == "object" ? Y : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function S(R) {
      if (process.env.NODE_ENV !== "production")
        var Y = {}, ae = 0;
      function G(ue, de, pe, U, j, $, le) {
        if (U = U || m, $ = $ || pe, le !== e) {
          if (s) {
            var F = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw F.name = "Invariant Violation", F;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var qe = U + ":" + pe;
            !Y[qe] && // Avoid spamming the console because they are often not actionable except for lib authors
            ae < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + $ + "` prop on `" + U + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), Y[qe] = !0, ae++);
          }
        }
        return de[pe] == null ? ue ? de[pe] === null ? new h("The " + j + " `" + $ + "` is marked as required " + ("in `" + U + "`, but its value is `null`.")) : new h("The " + j + " `" + $ + "` is marked as required in " + ("`" + U + "`, but its value is `undefined`.")) : null : R(de, pe, U, j, $);
      }
      var K = G.bind(null, !1);
      return K.isRequired = G.bind(null, !0), K;
    }
    function w(R) {
      function Y(ae, G, K, ue, de, pe) {
        var U = ae[G], j = me(U);
        if (j !== R) {
          var $ = ye(U);
          return new h(
            "Invalid " + ue + " `" + de + "` of type " + ("`" + $ + "` supplied to `" + K + "`, expected ") + ("`" + R + "`."),
            { expectedType: R }
          );
        }
        return null;
      }
      return S(Y);
    }
    function E() {
      return S(i);
    }
    function C(R) {
      function Y(ae, G, K, ue, de) {
        if (typeof R != "function")
          return new h("Property `" + de + "` of component `" + K + "` has invalid PropType notation inside arrayOf.");
        var pe = ae[G];
        if (!Array.isArray(pe)) {
          var U = me(pe);
          return new h("Invalid " + ue + " `" + de + "` of type " + ("`" + U + "` supplied to `" + K + "`, expected an array."));
        }
        for (var j = 0; j < pe.length; j++) {
          var $ = R(pe, j, K, ue, de + "[" + j + "]", e);
          if ($ instanceof Error)
            return $;
        }
        return null;
      }
      return S(Y);
    }
    function q() {
      function R(Y, ae, G, K, ue) {
        var de = Y[ae];
        if (!l(de)) {
          var pe = me(de);
          return new h("Invalid " + K + " `" + ue + "` of type " + ("`" + pe + "` supplied to `" + G + "`, expected a single ReactElement."));
        }
        return null;
      }
      return S(R);
    }
    function y() {
      function R(Y, ae, G, K, ue) {
        var de = Y[ae];
        if (!n.isValidElementType(de)) {
          var pe = me(de);
          return new h("Invalid " + K + " `" + ue + "` of type " + ("`" + pe + "` supplied to `" + G + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return S(R);
    }
    function P(R) {
      function Y(ae, G, K, ue, de) {
        if (!(ae[G] instanceof R)) {
          var pe = R.name || m, U = Q(ae[G]);
          return new h("Invalid " + ue + " `" + de + "` of type " + ("`" + U + "` supplied to `" + K + "`, expected ") + ("instance of `" + pe + "`."));
        }
        return null;
      }
      return S(Y);
    }
    function I(R) {
      if (!Array.isArray(R))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), i;
      function Y(ae, G, K, ue, de) {
        for (var pe = ae[G], U = 0; U < R.length; U++)
          if (x(pe, R[U]))
            return null;
        var j = JSON.stringify(R, function(le, F) {
          var qe = ye(F);
          return qe === "symbol" ? String(F) : F;
        });
        return new h("Invalid " + ue + " `" + de + "` of value `" + String(pe) + "` " + ("supplied to `" + K + "`, expected one of " + j + "."));
      }
      return S(Y);
    }
    function V(R) {
      function Y(ae, G, K, ue, de) {
        if (typeof R != "function")
          return new h("Property `" + de + "` of component `" + K + "` has invalid PropType notation inside objectOf.");
        var pe = ae[G], U = me(pe);
        if (U !== "object")
          return new h("Invalid " + ue + " `" + de + "` of type " + ("`" + U + "` supplied to `" + K + "`, expected an object."));
        for (var j in pe)
          if (o(pe, j)) {
            var $ = R(pe, j, K, ue, de + "." + j, e);
            if ($ instanceof Error)
              return $;
          }
        return null;
      }
      return S(Y);
    }
    function N(R) {
      if (!Array.isArray(R))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var Y = 0; Y < R.length; Y++) {
        var ae = R[Y];
        if (typeof ae != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + se(ae) + " at index " + Y + "."
          ), i;
      }
      function G(K, ue, de, pe, U) {
        for (var j = [], $ = 0; $ < R.length; $++) {
          var le = R[$], F = le(K, ue, de, pe, U, e);
          if (F == null)
            return null;
          F.data && o(F.data, "expectedType") && j.push(F.data.expectedType);
        }
        var qe = j.length > 0 ? ", expected one of type [" + j.join(", ") + "]" : "";
        return new h("Invalid " + pe + " `" + U + "` supplied to " + ("`" + de + "`" + qe + "."));
      }
      return S(G);
    }
    function _() {
      function R(Y, ae, G, K, ue) {
        return J(Y[ae]) ? null : new h("Invalid " + K + " `" + ue + "` supplied to " + ("`" + G + "`, expected a ReactNode."));
      }
      return S(R);
    }
    function k(R, Y, ae, G, K) {
      return new h(
        (R || "React class") + ": " + Y + " type `" + ae + "." + G + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + K + "`."
      );
    }
    function X(R) {
      function Y(ae, G, K, ue, de) {
        var pe = ae[G], U = me(pe);
        if (U !== "object")
          return new h("Invalid " + ue + " `" + de + "` of type `" + U + "` " + ("supplied to `" + K + "`, expected `object`."));
        for (var j in R) {
          var $ = R[j];
          if (typeof $ != "function")
            return k(K, ue, de, j, ye($));
          var le = $(pe, j, K, ue, de + "." + j, e);
          if (le)
            return le;
        }
        return null;
      }
      return S(Y);
    }
    function M(R) {
      function Y(ae, G, K, ue, de) {
        var pe = ae[G], U = me(pe);
        if (U !== "object")
          return new h("Invalid " + ue + " `" + de + "` of type `" + U + "` " + ("supplied to `" + K + "`, expected `object`."));
        var j = t({}, ae[G], R);
        for (var $ in j) {
          var le = R[$];
          if (o(R, $) && typeof le != "function")
            return k(K, ue, de, $, ye(le));
          if (!le)
            return new h(
              "Invalid " + ue + " `" + de + "` key `" + $ + "` supplied to `" + K + "`.\nBad object: " + JSON.stringify(ae[G], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(R), null, "  ")
            );
          var F = le(pe, $, K, ue, de + "." + $, e);
          if (F)
            return F;
        }
        return null;
      }
      return S(Y);
    }
    function J(R) {
      switch (typeof R) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !R;
        case "object":
          if (Array.isArray(R))
            return R.every(J);
          if (R === null || l(R))
            return !0;
          var Y = d(R);
          if (Y) {
            var ae = Y.call(R), G;
            if (Y !== R.entries) {
              for (; !(G = ae.next()).done; )
                if (!J(G.value))
                  return !1;
            } else
              for (; !(G = ae.next()).done; ) {
                var K = G.value;
                if (K && !J(K[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function te(R, Y) {
      return R === "symbol" ? !0 : Y ? Y["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && Y instanceof Symbol : !1;
    }
    function me(R) {
      var Y = typeof R;
      return Array.isArray(R) ? "array" : R instanceof RegExp ? "object" : te(Y, R) ? "symbol" : Y;
    }
    function ye(R) {
      if (typeof R > "u" || R === null)
        return "" + R;
      var Y = me(R);
      if (Y === "object") {
        if (R instanceof Date)
          return "date";
        if (R instanceof RegExp)
          return "regexp";
      }
      return Y;
    }
    function se(R) {
      var Y = ye(R);
      switch (Y) {
        case "array":
        case "object":
          return "an " + Y;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + Y;
        default:
          return Y;
      }
    }
    function Q(R) {
      return !R.constructor || !R.constructor.name ? m : R.constructor.name;
    }
    return v.checkPropTypes = r, v.resetWarningCache = r.resetWarningCache, v.PropTypes = v, v;
  }, ua;
}
var da, Zi;
function Ou() {
  if (Zi) return da;
  Zi = 1;
  var n = fi();
  function t() {
  }
  function e() {
  }
  return e.resetWarningCache = t, da = function() {
    function o(i, l, s, c, u, d) {
      if (d !== n) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
      }
    }
    o.isRequired = o;
    function r() {
      return o;
    }
    var a = {
      array: o,
      bigint: o,
      bool: o,
      func: o,
      number: o,
      object: o,
      string: o,
      symbol: o,
      any: o,
      arrayOf: r,
      element: o,
      elementType: o,
      instanceOf: r,
      node: o,
      objectOf: r,
      oneOf: r,
      oneOfType: r,
      shape: r,
      exact: r,
      checkPropTypes: e,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, da;
}
if (process.env.NODE_ENV !== "production") {
  var qu = us(), Pu = !0;
  Ia.exports = Cu()(qu.isElement, Pu);
} else
  Ia.exports = Ou()();
var Dn = Ia.exports;
const Pe = /* @__PURE__ */ xc(Dn);
function Tu(n, t) {
  return n.classList ? !!t && n.classList.contains(t) : (" " + (n.className.baseVal || n.className) + " ").indexOf(" " + t + " ") !== -1;
}
function Iu(n, t) {
  n.classList ? n.classList.add(t) : Tu(n, t) || (typeof n.className == "string" ? n.className = n.className + " " + t : n.setAttribute("class", (n.className && n.className.baseVal || "") + " " + t));
}
function Qi(n, t) {
  return n.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function _u(n, t) {
  n.classList ? n.classList.remove(t) : typeof n.className == "string" ? n.className = Qi(n.className, t) : n.setAttribute("class", Qi(n.className && n.className.baseVal || "", t));
}
const el = {
  disabled: !1
};
var ku = process.env.NODE_ENV !== "production" ? Pe.oneOfType([Pe.number, Pe.shape({
  enter: Pe.number,
  exit: Pe.number,
  appear: Pe.number
}).isRequired]) : null, Ru = process.env.NODE_ENV !== "production" ? Pe.oneOfType([Pe.string, Pe.shape({
  enter: Pe.string,
  exit: Pe.string,
  active: Pe.string
}), Pe.shape({
  enter: Pe.string,
  enterDone: Pe.string,
  enterActive: Pe.string,
  exit: Pe.string,
  exitDone: Pe.string,
  exitActive: Pe.string
})]) : null;
const fs = Se.createContext(null);
var ps = function(t) {
  return t.scrollTop;
}, Er = "unmounted", Nn = "exited", An = "entering", Un = "entered", _a = "exiting", un = /* @__PURE__ */ function(n) {
  cs(t, n);
  function t(o, r) {
    var a;
    a = n.call(this, o, r) || this;
    var i = r, l = i && !i.isMounting ? o.enter : o.appear, s;
    return a.appearStatus = null, o.in ? l ? (s = Nn, a.appearStatus = An) : s = Un : o.unmountOnExit || o.mountOnEnter ? s = Er : s = Nn, a.state = {
      status: s
    }, a.nextCallback = null, a;
  }
  t.getDerivedStateFromProps = function(r, a) {
    var i = r.in;
    return i && a.status === Er ? {
      status: Nn
    } : null;
  };
  var e = t.prototype;
  return e.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, e.componentDidUpdate = function(r) {
    var a = null;
    if (r !== this.props) {
      var i = this.state.status;
      this.props.in ? i !== An && i !== Un && (a = An) : (i === An || i === Un) && (a = _a);
    }
    this.updateStatus(!1, a);
  }, e.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, e.getTimeouts = function() {
    var r = this.props.timeout, a, i, l;
    return a = i = l = r, r != null && typeof r != "number" && (a = r.exit, i = r.enter, l = r.appear !== void 0 ? r.appear : i), {
      exit: a,
      enter: i,
      appear: l
    };
  }, e.updateStatus = function(r, a) {
    if (r === void 0 && (r = !1), a !== null)
      if (this.cancelNextCallback(), a === An) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var i = this.props.nodeRef ? this.props.nodeRef.current : xr.findDOMNode(this);
          i && ps(i);
        }
        this.performEnter(r);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Nn && this.setState({
      status: Er
    });
  }, e.performEnter = function(r) {
    var a = this, i = this.props.enter, l = this.context ? this.context.isMounting : r, s = this.props.nodeRef ? [l] : [xr.findDOMNode(this), l], c = s[0], u = s[1], d = this.getTimeouts(), m = l ? d.appear : d.enter;
    if (!r && !i || el.disabled) {
      this.safeSetState({
        status: Un
      }, function() {
        a.props.onEntered(c);
      });
      return;
    }
    this.props.onEnter(c, u), this.safeSetState({
      status: An
    }, function() {
      a.props.onEntering(c, u), a.onTransitionEnd(m, function() {
        a.safeSetState({
          status: Un
        }, function() {
          a.props.onEntered(c, u);
        });
      });
    });
  }, e.performExit = function() {
    var r = this, a = this.props.exit, i = this.getTimeouts(), l = this.props.nodeRef ? void 0 : xr.findDOMNode(this);
    if (!a || el.disabled) {
      this.safeSetState({
        status: Nn
      }, function() {
        r.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: _a
    }, function() {
      r.props.onExiting(l), r.onTransitionEnd(i.exit, function() {
        r.safeSetState({
          status: Nn
        }, function() {
          r.props.onExited(l);
        });
      });
    });
  }, e.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, e.safeSetState = function(r, a) {
    a = this.setNextCallback(a), this.setState(r, a);
  }, e.setNextCallback = function(r) {
    var a = this, i = !0;
    return this.nextCallback = function(l) {
      i && (i = !1, a.nextCallback = null, r(l));
    }, this.nextCallback.cancel = function() {
      i = !1;
    }, this.nextCallback;
  }, e.onTransitionEnd = function(r, a) {
    this.setNextCallback(a);
    var i = this.props.nodeRef ? this.props.nodeRef.current : xr.findDOMNode(this), l = r == null && !this.props.addEndListener;
    if (!i || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var s = this.props.nodeRef ? [this.nextCallback] : [i, this.nextCallback], c = s[0], u = s[1];
      this.props.addEndListener(c, u);
    }
    r != null && setTimeout(this.nextCallback, r);
  }, e.render = function() {
    var r = this.state.status;
    if (r === Er)
      return null;
    var a = this.props, i = a.children;
    a.in, a.mountOnEnter, a.unmountOnExit, a.appear, a.enter, a.exit, a.timeout, a.addEndListener, a.onEnter, a.onEntering, a.onEntered, a.onExit, a.onExiting, a.onExited, a.nodeRef;
    var l = ss(a, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Se.createElement(fs.Provider, {
        value: null
      }, typeof i == "function" ? i(r, l) : Se.cloneElement(Se.Children.only(i), l))
    );
  }, t;
}(Se.Component);
un.contextType = fs;
un.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: Pe.shape({
    current: typeof Element > "u" ? Pe.any : function(n, t, e, o, r, a) {
      var i = n[t];
      return Pe.instanceOf(i && "ownerDocument" in i ? i.ownerDocument.defaultView.Element : Element)(n, t, e, o, r, a);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: Pe.oneOfType([Pe.func.isRequired, Pe.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: Pe.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: Pe.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: Pe.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: Pe.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: Pe.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: Pe.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var e = ku;
    t.addEndListener || (e = e.isRequired);
    for (var o = arguments.length, r = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++)
      r[a - 1] = arguments[a];
    return e.apply(void 0, [t].concat(r));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: Pe.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: Pe.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: Pe.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: Pe.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: Pe.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: Pe.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: Pe.func
} : {};
function Wn() {
}
un.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Wn,
  onEntering: Wn,
  onEntered: Wn,
  onExit: Wn,
  onExiting: Wn,
  onExited: Wn
};
un.UNMOUNTED = Er;
un.EXITED = Nn;
un.ENTERING = An;
un.ENTERED = Un;
un.EXITING = _a;
var ju = function(t, e) {
  return t && e && e.split(" ").forEach(function(o) {
    return Iu(t, o);
  });
}, fa = function(t, e) {
  return t && e && e.split(" ").forEach(function(o) {
    return _u(t, o);
  });
}, pi = /* @__PURE__ */ function(n) {
  cs(t, n);
  function t() {
    for (var o, r = arguments.length, a = new Array(r), i = 0; i < r; i++)
      a[i] = arguments[i];
    return o = n.call.apply(n, [this].concat(a)) || this, o.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    }, o.onEnter = function(l, s) {
      var c = o.resolveArguments(l, s), u = c[0], d = c[1];
      o.removeClasses(u, "exit"), o.addClass(u, d ? "appear" : "enter", "base"), o.props.onEnter && o.props.onEnter(l, s);
    }, o.onEntering = function(l, s) {
      var c = o.resolveArguments(l, s), u = c[0], d = c[1], m = d ? "appear" : "enter";
      o.addClass(u, m, "active"), o.props.onEntering && o.props.onEntering(l, s);
    }, o.onEntered = function(l, s) {
      var c = o.resolveArguments(l, s), u = c[0], d = c[1], m = d ? "appear" : "enter";
      o.removeClasses(u, m), o.addClass(u, m, "done"), o.props.onEntered && o.props.onEntered(l, s);
    }, o.onExit = function(l) {
      var s = o.resolveArguments(l), c = s[0];
      o.removeClasses(c, "appear"), o.removeClasses(c, "enter"), o.addClass(c, "exit", "base"), o.props.onExit && o.props.onExit(l);
    }, o.onExiting = function(l) {
      var s = o.resolveArguments(l), c = s[0];
      o.addClass(c, "exit", "active"), o.props.onExiting && o.props.onExiting(l);
    }, o.onExited = function(l) {
      var s = o.resolveArguments(l), c = s[0];
      o.removeClasses(c, "exit"), o.addClass(c, "exit", "done"), o.props.onExited && o.props.onExited(l);
    }, o.resolveArguments = function(l, s) {
      return o.props.nodeRef ? [o.props.nodeRef.current, l] : [l, s];
    }, o.getClassNames = function(l) {
      var s = o.props.classNames, c = typeof s == "string", u = c && s ? s + "-" : "", d = c ? "" + u + l : s[l], m = c ? d + "-active" : s[l + "Active"], v = c ? d + "-done" : s[l + "Done"];
      return {
        baseClassName: d,
        activeClassName: m,
        doneClassName: v
      };
    }, o;
  }
  var e = t.prototype;
  return e.addClass = function(r, a, i) {
    var l = this.getClassNames(a)[i + "ClassName"], s = this.getClassNames("enter"), c = s.doneClassName;
    a === "appear" && i === "done" && c && (l += " " + c), i === "active" && r && ps(r), l && (this.appliedClasses[a][i] = l, ju(r, l));
  }, e.removeClasses = function(r, a) {
    var i = this.appliedClasses[a], l = i.base, s = i.active, c = i.done;
    this.appliedClasses[a] = {}, l && fa(r, l), s && fa(r, s), c && fa(r, c);
  }, e.render = function() {
    var r = this.props;
    r.classNames;
    var a = ss(r, ["classNames"]);
    return /* @__PURE__ */ Se.createElement(un, Co({}, a, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  }, t;
}(Se.Component);
pi.defaultProps = {
  classNames: ""
};
pi.propTypes = process.env.NODE_ENV !== "production" ? Co({}, un.propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: Ru,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: Pe.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: Pe.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: Pe.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: Pe.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: Pe.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: Pe.func
}) : {};
function jr(n) {
  "@babel/helpers - typeof";
  return jr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, jr(n);
}
function Du(n, t) {
  if (jr(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t || "default");
    if (jr(o) !== "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function Nu(n) {
  var t = Du(n, "string");
  return jr(t) === "symbol" ? t : String(t);
}
function Au(n, t, e) {
  return t = Nu(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
var ka = {
  defaultProps: {
    __TYPE: "CSSTransition",
    children: void 0
  },
  getProps: function(t) {
    return A.getMergedProps(t, ka.defaultProps);
  },
  getOtherProps: function(t) {
    return A.getDiffProps(t, ka.defaultProps);
  }
};
function tl(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function pa(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tl(Object(e), !0).forEach(function(o) {
      Au(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : tl(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
var zo = /* @__PURE__ */ f.forwardRef(function(n, t) {
  var e = ka.getProps(n), o = f.useContext(ut), r = e.disabled || e.options && e.options.disabled || o && !o.cssTransition || !ct.cssTransition, a = function(h, S) {
    e.onEnter && e.onEnter(h, S), e.options && e.options.onEnter && e.options.onEnter(h, S);
  }, i = function(h, S) {
    e.onEntering && e.onEntering(h, S), e.options && e.options.onEntering && e.options.onEntering(h, S);
  }, l = function(h, S) {
    e.onEntered && e.onEntered(h, S), e.options && e.options.onEntered && e.options.onEntered(h, S);
  }, s = function(h) {
    e.onExit && e.onExit(h), e.options && e.options.onExit && e.options.onExit(h);
  }, c = function(h) {
    e.onExiting && e.onExiting(h), e.options && e.options.onExiting && e.options.onExiting(h);
  }, u = function(h) {
    e.onExited && e.onExited(h), e.options && e.options.onExited && e.options.onExited(h);
  };
  if (Ue(function() {
    if (r) {
      var x = A.getRefElement(e.nodeRef);
      e.in ? (a(x, !0), i(x, !0), l(x, !0)) : (s(x), c(x), u(x));
    }
  }, [e.in]), r)
    return e.in ? e.children : null;
  var d = {
    nodeRef: e.nodeRef,
    in: e.in,
    onEnter: a,
    onEntering: i,
    onEntered: l,
    onExit: s,
    onExiting: c,
    onExited: u
  }, m = {
    classNames: e.classNames,
    timeout: e.timeout,
    unmountOnExit: e.unmountOnExit
  }, v = pa(pa(pa({}, m), e.options || {}), d);
  return /* @__PURE__ */ f.createElement(pi, v, e.children);
});
zo.displayName = "CSSTransition";
var Wt = {
  defaultProps: {
    __TYPE: "IconBase",
    className: null,
    label: null,
    spin: !1
  },
  getProps: function(t) {
    return A.getMergedProps(t, Wt.defaultProps);
  },
  getOtherProps: function(t) {
    return A.getDiffProps(t, Wt.defaultProps);
  },
  getPTI: function(t) {
    var e = A.isEmpty(t.label), o = Wt.getOtherProps(t), r = {
      className: ve("p-icon", {
        "p-icon-spin": t.spin
      }, t.className),
      role: e ? void 0 : "img",
      "aria-label": e ? void 0 : t.label,
      "aria-hidden": e
    };
    return A.getMergedProps(o, r);
  }
};
function Ra() {
  return Ra = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, Ra.apply(this, arguments);
}
var mi = /* @__PURE__ */ f.memo(/* @__PURE__ */ f.forwardRef(function(n, t) {
  var e = Wt.getPTI(n);
  return /* @__PURE__ */ f.createElement("svg", Ra({
    ref: t,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e), /* @__PURE__ */ f.createElement("path", {
    d: "M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z",
    fill: "currentColor"
  }));
}));
mi.displayName = "ChevronDownIcon";
function ja() {
  return ja = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, ja.apply(this, arguments);
}
var ms = /* @__PURE__ */ f.memo(/* @__PURE__ */ f.forwardRef(function(n, t) {
  var e = Wt.getPTI(n);
  return /* @__PURE__ */ f.createElement("svg", ja({
    ref: t,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e), /* @__PURE__ */ f.createElement("path", {
    d: "M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z",
    fill: "currentColor"
  }));
}));
ms.displayName = "ChevronRightIcon";
function Oo() {
  return Oo = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, Oo.apply(this, arguments);
}
function Da(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, o = new Array(t); e < t; e++) o[e] = n[e];
  return o;
}
function Lu(n) {
  if (Array.isArray(n)) return Da(n);
}
function $u(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function vs(n, t) {
  if (n) {
    if (typeof n == "string") return Da(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Da(n, t);
  }
}
function Fu() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Mu(n) {
  return Lu(n) || $u(n) || vs(n) || Fu();
}
function Dr(n) {
  "@babel/helpers - typeof";
  return Dr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Dr(n);
}
function zu(n, t) {
  if (Dr(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t || "default");
    if (Dr(o) !== "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function Hu(n) {
  var t = zu(n, "string");
  return Dr(t) === "symbol" ? t : String(t);
}
function Bu(n, t, e) {
  return t = Hu(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function Wu(n) {
  if (Array.isArray(n)) return n;
}
function Vu(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var o, r, a, i, l = [], s = !0, c = !1;
    try {
      if (a = (e = e.call(n)).next, t !== 0) for (; !(s = (o = a.call(e)).done) && (l.push(o.value), l.length !== t); s = !0) ;
    } catch (u) {
      c = !0, r = u;
    } finally {
      try {
        if (!s && e.return != null && (i = e.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw r;
      }
    }
    return l;
  }
}
function Ku() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nl(n, t) {
  return Wu(n) || Vu(n, t) || vs(n, t) || Ku();
}
var Uu = {
  root: "p-accordion p-component",
  accordiontab: {
    root: function(t) {
      var e = t.selected;
      return ve("p-accordion-tab", {
        "p-accordion-tab-active": e
      });
    },
    content: "p-accordion-content",
    header: function(t) {
      var e = t.selected, o = t.getTabProp, r = t.tab;
      return ve("p-accordion-header", {
        "p-highlight": e,
        "p-disabled": o(r, "disabled")
      });
    },
    headeraction: "p-accordion-header-link",
    headericon: "p-accordion-toggle-icon",
    headertitle: "p-accordion-header-text",
    toggleablecontent: "p-toggleable-content",
    transition: "p-toggleable-content"
  }
}, Yu = `
@layer primereact {
    .p-accordion-header-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        user-select: none;
        position: relative;
        text-decoration: none;
    }
    
    .p-accordion-header-link:focus {
        z-index: 1;
    }
    
    .p-accordion-header-text {
        line-height: 1;
        width: 100%;
    }
}
`, ro = je.extend({
  defaultProps: {
    __TYPE: "Accordion",
    id: null,
    activeIndex: null,
    className: null,
    style: null,
    multiple: !1,
    expandIcon: null,
    collapseIcon: null,
    transitionOptions: null,
    onTabOpen: null,
    onTabClose: null,
    onTabChange: null,
    children: void 0
  },
  css: {
    classes: Uu,
    styles: Yu
  }
}), Jn = je.extend({
  defaultProps: {
    __TYPE: "AccordionTab",
    className: null,
    contentClassName: null,
    contentStyle: null,
    disabled: !1,
    header: null,
    headerClassName: null,
    headerStyle: null,
    headerTemplate: null,
    style: null,
    tabIndex: 0,
    children: void 0
  },
  getCProp: function(t, e) {
    return A.getComponentProp(t, e, Jn.defaultProps);
  },
  getCProps: function(t) {
    return A.getComponentProps(t, Jn.defaultProps);
  },
  getCOtherProps: function(t) {
    return A.getComponentDiffProps(t, Jn.defaultProps);
  }
});
function rl(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function Vn(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rl(Object(e), !0).forEach(function(o) {
      Bu(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : rl(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
var zt = function() {
}, an = /* @__PURE__ */ f.forwardRef(function(n, t) {
  var e = Dt(), o = f.useContext(ut), r = ro.getProps(n, o), a = f.useState(r.id), i = nl(a, 2), l = i[0], s = i[1], c = f.useState(r.activeIndex), u = nl(c, 2), d = u[0], m = u[1], v = f.useRef(null), x = r.onTabChange ? r.activeIndex : d, h = f.Children.count(r.children), S = {
    props: r,
    state: {
      id: l,
      activeIndex: d
    }
  }, w = ro.setMetaData(Vn({}, S)), E = w.ptm, C = w.ptmo, q = w.cx, y = w.isUnstyled;
  Qt(ro.css.styles, y, {
    name: "accordion"
  });
  var P = function(j, $) {
    return Jn.getCProp(j, $);
  }, I = function(j, $, le) {
    var F = {
      // props: atProps, /* @todo */
      parent: S,
      context: {
        index: le,
        count: h,
        first: le === 0,
        last: le === h - 1,
        selected: Y(le),
        disabled: P(j, "disabled")
      }
    };
    return e(E("tab.".concat($), {
      tab: F
    }), E("accordiontab.".concat($), {
      accordiontab: F
    }), E("accordiontab.".concat($), F), C(P(j, "pt"), $, F));
  }, V = function(j, $, le) {
    N(j, $, le);
  }, N = function(j, $, le) {
    if (!P($, "disabled")) {
      var F = Y(le), qe = null;
      if (r.multiple) {
        var ke = x || [];
        qe = F ? ke.filter(function(Re) {
          return Re !== le;
        }) : [].concat(Mu(ke), [le]);
      } else
        qe = F ? null : le;
      var _e = F ? r.onTabClose : r.onTabOpen;
      _e && _e({
        originalEvent: j,
        index: le
      }), r.onTabChange ? r.onTabChange({
        originalEvent: j,
        index: qe
      }) : m(qe);
    }
    j.preventDefault();
  }, _ = function(j, $, le) {
    switch (j.code) {
      case "ArrowDown":
        k(j);
        break;
      case "ArrowUp":
        X(j);
        break;
      case "Home":
        M(j);
        break;
      case "End":
        J(j);
        break;
      case "Enter":
      case "NumpadEnter":
      case "Space":
        te(j, $, le);
        break;
    }
  }, k = function(j) {
    var $ = me(j.target.parentElement.parentElement);
    $ ? R($) : M(j), j.preventDefault();
  }, X = function(j) {
    var $ = ye(j.target.parentElement.parentElement);
    $ ? R($) : J(j), j.preventDefault();
  }, M = function(j) {
    var $ = se();
    R($), j.preventDefault();
  }, J = function(j) {
    var $ = Q();
    R($), j.preventDefault();
  }, te = function(j, $, le) {
    N(j, $, le), j.preventDefault();
  }, me = function U(j) {
    var $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, le = $ ? j : j.nextElementSibling, F = L.findSingle(le, '[data-pc-section="header"]');
    return F ? L.getAttribute(F, "data-p-disabled") ? U(F.parentElement) : L.findSingle(F, '[data-pc-section="headeraction"]') : null;
  }, ye = function U(j) {
    var $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, le = $ ? j : j.previousElementSibling, F = L.findSingle(le, '[data-pc-section="header"]');
    return F ? L.getAttribute(F, "data-p-disabled") ? U(F.parentElement) : L.findSingle(F, '[data-pc-section="headeraction"]') : null;
  }, se = function() {
    return me(v.current.firstElementChild, !0);
  }, Q = function() {
    return ye(v.current.lastElementChild, !0);
  }, R = function(j) {
    j && L.focus(j);
  }, Y = function(j) {
    return r.multiple && Array.isArray(x) ? x && x.some(function($) {
      return $ === j;
    }) : x === j;
  };
  if (f.useImperativeHandle(t, function() {
    return {
      props: r,
      getElement: function() {
        return v.current;
      }
    };
  }), Zt(function() {
    l || s(ui());
  }), !l)
    return null;
  var ae = function(j, $, le) {
    var F = Vn(Vn({}, P(j, "style") || {}), P(j, "headerStyle") || {}), qe = l + "_header_" + le, ke = l + "_content_" + le, _e = P(j, "disabled") ? -1 : P(j, "tabIndex"), Re = e({
      className: q("accordiontab.headertitle")
    }, I(j, "headertitle", le)), He = Jn.getCProps(j), qt = P(j, "headerTemplate") ? A.getJSXElement(P(j, "headerTemplate"), He) : /* @__PURE__ */ f.createElement("span", Re, A.getJSXElement(P(j, "header"), He)), dt = e({
      "aria-hidden": "true",
      className: q("accordiontab.headericon")
    }, I(j, "headericon", le)), et = $ ? r.collapseIcon || /* @__PURE__ */ f.createElement(mi, dt) : r.expandIcon || /* @__PURE__ */ f.createElement(ms, dt), tt = Yt.getJSXIcon(et, Vn({}, dt), {
      props: r,
      selected: $
    }), yt = e({
      className: ve(P(j, "headerClassName"), P(j, "className"), q("accordiontab.header", {
        selected: $,
        getTabProp: P,
        tab: j
      })),
      style: F,
      "data-p-highlight": $,
      "data-p-disabled": P(j, "disabled")
    }, I(j, "header", le)), Pt = e({
      id: qe,
      href: "#" + ke,
      className: q("accordiontab.headeraction"),
      role: "button",
      tabIndex: _e,
      onClick: function(nt) {
        return V(nt, j, le);
      },
      onKeyDown: function(nt) {
        return _(nt, j, le);
      },
      "aria-disabled": P(j, "disabled"),
      "aria-controls": ke,
      "aria-expanded": $
    }, I(j, "headeraction", le));
    return /* @__PURE__ */ f.createElement("div", yt, /* @__PURE__ */ f.createElement("a", Pt, tt, qt));
  }, G = function(j, $, le) {
    var F = Vn(Vn({}, P(j, "style") || {}), P(j, "contentStyle") || {}), qe = l + "_content_" + le, ke = l + "_header_" + le, _e = /* @__PURE__ */ f.createRef(), Re = e({
      id: qe,
      ref: _e,
      className: ve(P(j, "contentClassName"), P(j, "className"), q("accordiontab.toggleablecontent")),
      style: F,
      role: "region",
      "aria-labelledby": ke
    }, I(j, "toggleablecontent", le)), He = e({
      className: q("accordiontab.content")
    }, I(j, "content", le)), qt = e({
      classNames: q("accordiontab.transition"),
      timeout: {
        enter: 1e3,
        exit: 450
      },
      in: $,
      unmountOnExit: !0,
      options: r.transitionOptions
    }, I(j, "transition", le));
    return /* @__PURE__ */ f.createElement(zo, Oo({
      nodeRef: _e
    }, qt), /* @__PURE__ */ f.createElement("div", Re, /* @__PURE__ */ f.createElement("div", He, P(j, "children"))));
  }, K = function(j, $) {
    if (A.isValidChild(j, "AccordionTab")) {
      var le = l + "_" + $, F = Y($), qe = ae(j, F, $), ke = G(j, F, $), _e = e({
        key: le,
        className: q("accordiontab.root", {
          selected: F
        })
      }, Jn.getCOtherProps(j), I(j, "root", $));
      return /* @__PURE__ */ f.createElement("div", _e, qe, ke);
    }
    return null;
  }, ue = function() {
    return f.Children.map(r.children, K);
  }, de = ue(), pe = e({
    className: ve(r.className, q("root")),
    style: r.style
  }, ro.getOtherProps(r), E("root"));
  return /* @__PURE__ */ f.createElement("div", Oo({
    id: l,
    ref: v
  }, pe), de);
});
zt.displayName = "AccordionTab";
an.displayName = "Accordion";
function Na() {
  return Na = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, Na.apply(this, arguments);
}
function Nr(n) {
  "@babel/helpers - typeof";
  return Nr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Nr(n);
}
function Gu(n, t) {
  if (Nr(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t || "default");
    if (Nr(o) !== "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function Xu(n) {
  var t = Gu(n, "string");
  return Nr(t) === "symbol" ? t : String(t);
}
function Ju(n, t, e) {
  return t = Xu(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function Zu(n) {
  if (Array.isArray(n)) return n;
}
function Qu(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var o, r, a, i, l = [], s = !0, c = !1;
    try {
      if (a = (e = e.call(n)).next, t !== 0) for (; !(s = (o = a.call(e)).done) && (l.push(o.value), l.length !== t); s = !0) ;
    } catch (u) {
      c = !0, r = u;
    } finally {
      try {
        if (!s && e.return != null && (i = e.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw r;
      }
    }
    return l;
  }
}
function ol(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, o = new Array(t); e < t; e++) o[e] = n[e];
  return o;
}
function ed(n, t) {
  if (n) {
    if (typeof n == "string") return ol(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return ol(n, t);
  }
}
function td() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nd(n, t) {
  return Zu(n) || Qu(n, t) || ed(n, t) || td();
}
var rd = {
  root: function(t) {
    var e = t.props;
    return ve("", e.className);
  },
  toolbar: "",
  content: ""
}, od = `
/*!
 * Quill Editor v2.0.2
 * https://quilljs.com
 * Copyright (c) 2017-2024, Slab
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */
.ql-container {
  box-sizing: border-box;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 13px;
  height: 100%;
  margin: 0;
  position: relative;
}
.ql-container.ql-disabled .ql-tooltip {
  visibility: hidden;
}
.ql-container:not(.ql-disabled) li[data-list="checked"] > .ql-ui,
.ql-container:not(.ql-disabled) li[data-list="unchecked"] > .ql-ui {
  cursor: pointer;
}
.ql-clipboard {
  left: -100000px;
  height: 1px;
  overflow-y: hidden;
  position: absolute;
  top: 50%;
}
.ql-clipboard p {
  margin: 0;
  padding: 0;
}
.ql-editor {
  box-sizing: border-box;
  counter-reset: list-0 list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8
    list-9;
  line-height: 1.42;
  height: 100%;
  outline: none;
  overflow-y: auto;
  padding: 12px 15px;
  tab-size: 4;
  -moz-tab-size: 4;
  text-align: left;
  white-space: pre-wrap;
  word-wrap: break-word;
}
.ql-editor > * {
  cursor: text;
}
.ql-editor p,
.ql-editor ol,
.ql-editor pre,
.ql-editor blockquote,
.ql-editor h1,
.ql-editor h2,
.ql-editor h3,
.ql-editor h4,
.ql-editor h5,
.ql-editor h6 {
  margin: 0;
  padding: 0;
}
@supports (counter-set: none) {
  .ql-editor p,
  .ql-editor h1,
  .ql-editor h2,
  .ql-editor h3,
  .ql-editor h4,
  .ql-editor h5,
  .ql-editor h6 {
    counter-set: list-0 list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8
      list-9;
  }
}
@supports not (counter-set: none) {
  .ql-editor p,
  .ql-editor h1,
  .ql-editor h2,
  .ql-editor h3,
  .ql-editor h4,
  .ql-editor h5,
  .ql-editor h6 {
    counter-reset: list-0 list-1 list-2 list-3 list-4 list-5 list-6 list-7
      list-8 list-9;
  }
}
.ql-editor table {
  border-collapse: collapse;
}
.ql-editor td {
  border: 1px solid #000;
  padding: 2px 5px;
}
.ql-editor ol {
  padding-left: 1.5em;
}
.ql-editor li {
  list-style-type: none;
  padding-left: 1.5em;
  position: relative;
}
.ql-editor li > .ql-ui:before {
  display: inline-block;
  margin-left: -1.5em;
  margin-right: 0.3em;
  text-align: right;
  white-space: nowrap;
  width: 1.2em;
}
.ql-editor li[data-list="checked"] > .ql-ui,
.ql-editor li[data-list="unchecked"] > .ql-ui {
  color: #777;
}
.ql-editor li[data-list="bullet"] > .ql-ui:before {
  content: "\\2022";
}
.ql-editor li[data-list="checked"] > .ql-ui:before {
  content: "\\2611";
}
.ql-editor li[data-list="unchecked"] > .ql-ui:before {
  content: "\\2610";
}
@supports (counter-set: none) {
  .ql-editor li[data-list] {
    counter-set: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
  }
}
@supports not (counter-set: none) {
  .ql-editor li[data-list] {
    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8
      list-9;
  }
}
.ql-editor li[data-list="ordered"] {
  counter-increment: list-0;
}
.ql-editor li[data-list="ordered"] > .ql-ui:before {
  content: counter(list-0, decimal) ". ";
}
.ql-editor li[data-list="ordered"].ql-indent-1 {
  counter-increment: list-1;
}
.ql-editor li[data-list="ordered"].ql-indent-1 > .ql-ui:before {
  content: counter(list-1, lower-alpha) ". ";
}
@supports (counter-set: none) {
  .ql-editor li[data-list].ql-indent-1 {
    counter-set: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
  }
}
@supports not (counter-set: none) {
  .ql-editor li[data-list].ql-indent-1 {
    counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
  }
}
.ql-editor li[data-list="ordered"].ql-indent-2 {
  counter-increment: list-2;
}
.ql-editor li[data-list="ordered"].ql-indent-2 > .ql-ui:before {
  content: counter(list-2, lower-roman) ". ";
}
@supports (counter-set: none) {
  .ql-editor li[data-list].ql-indent-2 {
    counter-set: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
  }
}
@supports not (counter-set: none) {
  .ql-editor li[data-list].ql-indent-2 {
    counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
  }
}
.ql-editor li[data-list="ordered"].ql-indent-3 {
  counter-increment: list-3;
}
.ql-editor li[data-list="ordered"].ql-indent-3 > .ql-ui:before {
  content: counter(list-3, decimal) ". ";
}
@supports (counter-set: none) {
  .ql-editor li[data-list].ql-indent-3 {
    counter-set: list-4 list-5 list-6 list-7 list-8 list-9;
  }
}
@supports not (counter-set: none) {
  .ql-editor li[data-list].ql-indent-3 {
    counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;
  }
}
.ql-editor li[data-list="ordered"].ql-indent-4 {
  counter-increment: list-4;
}
.ql-editor li[data-list="ordered"].ql-indent-4 > .ql-ui:before {
  content: counter(list-4, lower-alpha) ". ";
}
@supports (counter-set: none) {
  .ql-editor li[data-list].ql-indent-4 {
    counter-set: list-5 list-6 list-7 list-8 list-9;
  }
}
@supports not (counter-set: none) {
  .ql-editor li[data-list].ql-indent-4 {
    counter-reset: list-5 list-6 list-7 list-8 list-9;
  }
}
.ql-editor li[data-list="ordered"].ql-indent-5 {
  counter-increment: list-5;
}
.ql-editor li[data-list="ordered"].ql-indent-5 > .ql-ui:before {
  content: counter(list-5, lower-roman) ". ";
}
@supports (counter-set: none) {
  .ql-editor li[data-list].ql-indent-5 {
    counter-set: list-6 list-7 list-8 list-9;
  }
}
@supports not (counter-set: none) {
  .ql-editor li[data-list].ql-indent-5 {
    counter-reset: list-6 list-7 list-8 list-9;
  }
}
.ql-editor li[data-list="ordered"].ql-indent-6 {
  counter-increment: list-6;
}
.ql-editor li[data-list="ordered"].ql-indent-6 > .ql-ui:before {
  content: counter(list-6, decimal) ". ";
}
@supports (counter-set: none) {
  .ql-editor li[data-list].ql-indent-6 {
    counter-set: list-7 list-8 list-9;
  }
}
@supports not (counter-set: none) {
  .ql-editor li[data-list].ql-indent-6 {
    counter-reset: list-7 list-8 list-9;
  }
}
.ql-editor li[data-list="ordered"].ql-indent-7 {
  counter-increment: list-7;
}
.ql-editor li[data-list="ordered"].ql-indent-7 > .ql-ui:before {
  content: counter(list-7, lower-alpha) ". ";
}
@supports (counter-set: none) {
  .ql-editor li[data-list].ql-indent-7 {
    counter-set: list-8 list-9;
  }
}
@supports not (counter-set: none) {
  .ql-editor li[data-list].ql-indent-7 {
    counter-reset: list-8 list-9;
  }
}
.ql-editor li[data-list="ordered"].ql-indent-8 {
  counter-increment: list-8;
}
.ql-editor li[data-list="ordered"].ql-indent-8 > .ql-ui:before {
  content: counter(list-8, lower-roman) ". ";
}
@supports (counter-set: none) {
  .ql-editor li[data-list].ql-indent-8 {
    counter-set: list-9;
  }
}
@supports not (counter-set: none) {
  .ql-editor li[data-list].ql-indent-8 {
    counter-reset: list-9;
  }
}
.ql-editor li[data-list="ordered"].ql-indent-9 {
  counter-increment: list-9;
}
.ql-editor li[data-list="ordered"].ql-indent-9 > .ql-ui:before {
  content: counter(list-9, decimal) ". ";
}
.ql-editor .ql-indent-1:not(.ql-direction-rtl) {
  padding-left: 3em;
}
.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {
  padding-left: 4.5em;
}
.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {
  padding-right: 3em;
}
.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {
  padding-right: 4.5em;
}
.ql-editor .ql-indent-2:not(.ql-direction-rtl) {
  padding-left: 6em;
}
.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {
  padding-left: 7.5em;
}
.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {
  padding-right: 6em;
}
.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {
  padding-right: 7.5em;
}
.ql-editor .ql-indent-3:not(.ql-direction-rtl) {
  padding-left: 9em;
}
.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {
  padding-left: 10.5em;
}
.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {
  padding-right: 9em;
}
.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {
  padding-right: 10.5em;
}
.ql-editor .ql-indent-4:not(.ql-direction-rtl) {
  padding-left: 12em;
}
.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {
  padding-left: 13.5em;
}
.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {
  padding-right: 12em;
}
.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {
  padding-right: 13.5em;
}
.ql-editor .ql-indent-5:not(.ql-direction-rtl) {
  padding-left: 15em;
}
.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {
  padding-left: 16.5em;
}
.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {
  padding-right: 15em;
}
.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {
  padding-right: 16.5em;
}
.ql-editor .ql-indent-6:not(.ql-direction-rtl) {
  padding-left: 18em;
}
.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {
  padding-left: 19.5em;
}
.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {
  padding-right: 18em;
}
.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {
  padding-right: 19.5em;
}
.ql-editor .ql-indent-7:not(.ql-direction-rtl) {
  padding-left: 21em;
}
.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {
  padding-left: 22.5em;
}
.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {
  padding-right: 21em;
}
.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {
  padding-right: 22.5em;
}
.ql-editor .ql-indent-8:not(.ql-direction-rtl) {
  padding-left: 24em;
}
.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {
  padding-left: 25.5em;
}
.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {
  padding-right: 24em;
}
.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {
  padding-right: 25.5em;
}
.ql-editor .ql-indent-9:not(.ql-direction-rtl) {
  padding-left: 27em;
}
.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {
  padding-left: 28.5em;
}
.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {
  padding-right: 27em;
}
.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {
  padding-right: 28.5em;
}
.ql-editor li.ql-direction-rtl {
  padding-right: 1.5em;
}
.ql-editor li.ql-direction-rtl > .ql-ui:before {
  margin-left: 0.3em;
  margin-right: -1.5em;
  text-align: left;
}
.ql-editor table {
  table-layout: fixed;
  width: 100%;
}
.ql-editor table td {
  outline: none;
}
.ql-editor .ql-code-block-container {
  font-family: monospace;
}
.ql-editor .ql-video {
  display: block;
  max-width: 100%;
}
.ql-editor .ql-video.ql-align-center {
  margin: 0 auto;
}
.ql-editor .ql-video.ql-align-right {
  margin: 0 0 0 auto;
}
.ql-editor .ql-bg-black {
  background-color: #000;
}
.ql-editor .ql-bg-red {
  background-color: #e60000;
}
.ql-editor .ql-bg-orange {
  background-color: #f90;
}
.ql-editor .ql-bg-yellow {
  background-color: #ff0;
}
.ql-editor .ql-bg-green {
  background-color: #008a00;
}
.ql-editor .ql-bg-blue {
  background-color: #06c;
}
.ql-editor .ql-bg-purple {
  background-color: #93f;
}
.ql-editor .ql-color-white {
  color: #fff;
}
.ql-editor .ql-color-red {
  color: #e60000;
}
.ql-editor .ql-color-orange {
  color: #f90;
}
.ql-editor .ql-color-yellow {
  color: #ff0;
}
.ql-editor .ql-color-green {
  color: #008a00;
}
.ql-editor .ql-color-blue {
  color: #06c;
}
.ql-editor .ql-color-purple {
  color: #93f;
}
.ql-editor .ql-font-serif {
  font-family: Georgia, Times New Roman, serif;
}
.ql-editor .ql-font-monospace {
  font-family: Monaco, Courier New, monospace;
}
.ql-editor .ql-size-small {
  font-size: 0.75em;
}
.ql-editor .ql-size-large {
  font-size: 1.5em;
}
.ql-editor .ql-size-huge {
  font-size: 2.5em;
}
.ql-editor .ql-direction-rtl {
  direction: rtl;
  text-align: inherit;
}
.ql-editor .ql-align-center {
  text-align: center;
}
.ql-editor .ql-align-justify {
  text-align: justify;
}
.ql-editor .ql-align-right {
  text-align: right;
}
.ql-editor .ql-ui {
  position: absolute;
}
.ql-editor.ql-blank::before {
  color: rgba(0, 0, 0, 0.6);
  content: attr(data-placeholder);
  font-style: italic;
  left: 15px;
  pointer-events: none;
  position: absolute;
  right: 15px;
}
.ql-snow.ql-toolbar:after,
.ql-snow .ql-toolbar:after {
  clear: both;
  content: "";
  display: table;
}
.ql-snow.ql-toolbar button,
.ql-snow .ql-toolbar button {
  background: none;
  border: none;
  cursor: pointer;
  display: inline-block;
  float: left;
  height: 24px;
  padding: 3px 5px;
  width: 28px;
}
.ql-snow.ql-toolbar button svg,
.ql-snow .ql-toolbar button svg {
  float: left;
  height: 100%;
}
.ql-snow.ql-toolbar button:active:hover,
.ql-snow .ql-toolbar button:active:hover {
  outline: none;
}
.ql-snow.ql-toolbar input.ql-image[type="file"],
.ql-snow .ql-toolbar input.ql-image[type="file"] {
  display: none;
}
.ql-snow.ql-toolbar button:hover,
.ql-snow .ql-toolbar button:hover,
.ql-snow.ql-toolbar button:focus,
.ql-snow .ql-toolbar button:focus,
.ql-snow.ql-toolbar button.ql-active,
.ql-snow .ql-toolbar button.ql-active,
.ql-snow.ql-toolbar .ql-picker-label:hover,
.ql-snow .ql-toolbar .ql-picker-label:hover,
.ql-snow.ql-toolbar .ql-picker-label.ql-active,
.ql-snow .ql-toolbar .ql-picker-label.ql-active,
.ql-snow.ql-toolbar .ql-picker-item:hover,
.ql-snow .ql-toolbar .ql-picker-item:hover,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected {
  color: #06c;
}
.ql-snow.ql-toolbar button:hover .ql-fill,
.ql-snow .ql-toolbar button:hover .ql-fill,
.ql-snow.ql-toolbar button:focus .ql-fill,
.ql-snow .ql-toolbar button:focus .ql-fill,
.ql-snow.ql-toolbar button.ql-active .ql-fill,
.ql-snow .ql-toolbar button.ql-active .ql-fill,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
  fill: #06c;
}
.ql-snow.ql-toolbar button:hover .ql-stroke,
.ql-snow .ql-toolbar button:hover .ql-stroke,
.ql-snow.ql-toolbar button:focus .ql-stroke,
.ql-snow .ql-toolbar button:focus .ql-stroke,
.ql-snow.ql-toolbar button.ql-active .ql-stroke,
.ql-snow .ql-toolbar button.ql-active .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow.ql-toolbar button:hover .ql-stroke-miter,
.ql-snow .ql-toolbar button:hover .ql-stroke-miter,
.ql-snow.ql-toolbar button:focus .ql-stroke-miter,
.ql-snow .ql-toolbar button:focus .ql-stroke-miter,
.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
  stroke: #06c;
}
@media (pointer: coarse) {
  .ql-snow.ql-toolbar button:hover:not(.ql-active),
  .ql-snow .ql-toolbar button:hover:not(.ql-active) {
    color: #444;
  }
  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,
  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,
  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {
    fill: #444;
  }
  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,
  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,
  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,
  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {
    stroke: #444;
  }
}
.ql-snow {
  box-sizing: border-box;
}
.ql-snow * {
  box-sizing: border-box;
}
.ql-snow .ql-hidden {
  display: none;
}
.ql-snow .ql-out-bottom,
.ql-snow .ql-out-top {
  visibility: hidden;
}
.ql-snow .ql-tooltip {
  position: absolute;
  transform: translateY(10px);
}
.ql-snow .ql-tooltip a {
  cursor: pointer;
  text-decoration: none;
}
.ql-snow .ql-tooltip.ql-flip {
  transform: translateY(-10px);
}
.ql-snow .ql-formats {
  display: inline-block;
  vertical-align: middle;
}
.ql-snow .ql-formats:after {
  clear: both;
  content: "";
  display: table;
}
.ql-snow .ql-stroke {
  fill: none;
  stroke: #444;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2;
}
.ql-snow .ql-stroke-miter {
  fill: none;
  stroke: #444;
  stroke-miterlimit: 10;
  stroke-width: 2;
}
.ql-snow .ql-fill,
.ql-snow .ql-stroke.ql-fill {
  fill: #444;
}
.ql-snow .ql-empty {
  fill: none;
}
.ql-snow .ql-even {
  fill-rule: evenodd;
}
.ql-snow .ql-thin,
.ql-snow .ql-stroke.ql-thin {
  stroke-width: 1;
}
.ql-snow .ql-transparent {
  opacity: 0.4;
}
.ql-snow .ql-direction svg:last-child {
  display: none;
}
.ql-snow .ql-direction.ql-active svg:last-child {
  display: inline;
}
.ql-snow .ql-direction.ql-active svg:first-child {
  display: none;
}
.ql-snow .ql-editor h1 {
  font-size: 2em;
}
.ql-snow .ql-editor h2 {
  font-size: 1.5em;
}
.ql-snow .ql-editor h3 {
  font-size: 1.17em;
}
.ql-snow .ql-editor h4 {
  font-size: 1em;
}
.ql-snow .ql-editor h5 {
  font-size: 0.83em;
}
.ql-snow .ql-editor h6 {
  font-size: 0.67em;
}
.ql-snow .ql-editor a {
  text-decoration: underline;
}
.ql-snow .ql-editor blockquote {
  border-left: 4px solid #ccc;
  margin-bottom: 5px;
  margin-top: 5px;
  padding-left: 16px;
}
.ql-snow .ql-editor code,
.ql-snow .ql-editor .ql-code-block-container {
  background-color: #f0f0f0;
  border-radius: 3px;
}
.ql-snow .ql-editor .ql-code-block-container {
  margin-bottom: 5px;
  margin-top: 5px;
  padding: 5px 10px;
}
.ql-snow .ql-editor code {
  font-size: 85%;
  padding: 2px 4px;
}
.ql-snow .ql-editor .ql-code-block-container {
  background-color: #23241f;
  color: #f8f8f2;
  overflow: visible;
}
.ql-snow .ql-editor img {
  max-width: 100%;
}
.ql-snow .ql-picker {
  color: #444;
  display: inline-block;
  float: left;
  font-size: 14px;
  font-weight: 500;
  height: 24px;
  position: relative;
  vertical-align: middle;
}
.ql-snow .ql-picker-label {
  cursor: pointer;
  display: inline-block;
  height: 100%;
  padding-left: 8px;
  padding-right: 2px;
  position: relative;
  width: 100%;
}
.ql-snow .ql-picker-label::before {
  display: inline-block;
  line-height: 22px;
}
.ql-snow .ql-picker-options {
  background-color: #fff;
  display: none;
  min-width: 100%;
  padding: 4px 8px;
  position: absolute;
  white-space: nowrap;
}
.ql-snow .ql-picker-options .ql-picker-item {
  cursor: pointer;
  display: block;
  padding-bottom: 5px;
  padding-top: 5px;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label {
  color: #ccc;
  z-index: 2;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
  fill: #ccc;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
  stroke: #ccc;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-options {
  display: block;
  margin-top: -1px;
  top: 100%;
  z-index: 1;
}
.ql-snow .ql-color-picker,
.ql-snow .ql-icon-picker {
  width: 28px;
}
.ql-snow .ql-color-picker .ql-picker-label,
.ql-snow .ql-icon-picker .ql-picker-label {
  padding: 2px 4px;
}
.ql-snow .ql-color-picker .ql-picker-label svg,
.ql-snow .ql-icon-picker .ql-picker-label svg {
  right: 4px;
}
.ql-snow .ql-icon-picker .ql-picker-options {
  padding: 4px 0;
}
.ql-snow .ql-icon-picker .ql-picker-item {
  height: 24px;
  width: 24px;
  padding: 2px 4px;
}
.ql-snow .ql-color-picker .ql-picker-options {
  padding: 3px 5px;
  width: 152px;
}
.ql-snow .ql-color-picker .ql-picker-item {
  border: 1px solid transparent;
  float: left;
  height: 16px;
  margin: 2px;
  padding: 0;
  width: 16px;
}
.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
  position: absolute;
  margin-top: -9px;
  right: 0;
  top: 50%;
  width: 18px;
}
.ql-snow
  .ql-picker.ql-header
  .ql-picker-label[data-label]:not([data-label=""])::before,
.ql-snow
  .ql-picker.ql-font
  .ql-picker-label[data-label]:not([data-label=""])::before,
.ql-snow
  .ql-picker.ql-size
  .ql-picker-label[data-label]:not([data-label=""])::before,
.ql-snow
  .ql-picker.ql-header
  .ql-picker-item[data-label]:not([data-label=""])::before,
.ql-snow
  .ql-picker.ql-font
  .ql-picker-item[data-label]:not([data-label=""])::before,
.ql-snow
  .ql-picker.ql-size
  .ql-picker-item[data-label]:not([data-label=""])::before {
  content: attr(data-label);
}
.ql-snow .ql-picker.ql-header {
  width: 98px;
}
.ql-snow .ql-picker.ql-header .ql-picker-label::before,
.ql-snow .ql-picker.ql-header .ql-picker-item::before {
  content: "Normal";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
  content: "Heading 1";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
  content: "Heading 2";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
  content: "Heading 3";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
  content: "Heading 4";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
  content: "Heading 5";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
  content: "Heading 6";
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
  font-size: 2em;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
  font-size: 1.5em;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
  font-size: 1.17em;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
  font-size: 1em;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
  font-size: 0.83em;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
  font-size: 0.67em;
}
.ql-snow .ql-picker.ql-font {
  width: 108px;
}
.ql-snow .ql-picker.ql-font .ql-picker-label::before,
.ql-snow .ql-picker.ql-font .ql-picker-item::before {
  content: "Sans Serif";
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="serif"]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="serif"]::before {
  content: "Serif";
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="monospace"]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="monospace"]::before {
  content: "Monospace";
}
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="serif"]::before {
  font-family: Georgia, Times New Roman, serif;
}
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="monospace"]::before {
  font-family: Monaco, Courier New, monospace;
}
.ql-snow .ql-picker.ql-size {
  width: 98px;
}
.ql-snow .ql-picker.ql-size .ql-picker-label::before,
.ql-snow .ql-picker.ql-size .ql-picker-item::before {
  content: "Normal";
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="small"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="small"]::before {
  content: "Small";
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="large"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="large"]::before {
  content: "Large";
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="huge"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="huge"]::before {
  content: "Huge";
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="small"]::before {
  font-size: 10px;
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="large"]::before {
  font-size: 18px;
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="huge"]::before {
  font-size: 32px;
}
.ql-snow .ql-color-picker.ql-background .ql-picker-item {
  background-color: #fff;
}
.ql-snow .ql-color-picker.ql-color .ql-picker-item {
  background-color: #000;
}
.ql-code-block-container {
  position: relative;
}
.ql-code-block-container .ql-ui {
  right: 5px;
  top: 5px;
}
.ql-toolbar.ql-snow {
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  padding: 8px;
}
.ql-toolbar.ql-snow .ql-formats {
  margin-right: 15px;
}
.ql-toolbar.ql-snow .ql-picker-label {
  border: 1px solid transparent;
}
.ql-toolbar.ql-snow .ql-picker-options {
  border: 1px solid transparent;
  box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;
}
.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
  border-color: #ccc;
}
.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
  border-color: #ccc;
}
.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,
.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {
  border-color: #000;
}
.ql-toolbar.ql-snow + .ql-container.ql-snow {
  border-top: 0;
}
.ql-snow .ql-tooltip {
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 0 5px #ddd;
  color: #444;
  padding: 5px 12px;
  white-space: nowrap;
}
.ql-snow .ql-tooltip::before {
  content: "Visit URL:";
  line-height: 26px;
  margin-right: 8px;
}
.ql-snow .ql-tooltip input[type="text"] {
  display: none;
  border: 1px solid #ccc;
  font-size: 13px;
  height: 26px;
  margin: 0;
  padding: 3px 5px;
  width: 170px;
}
.ql-snow .ql-tooltip a.ql-preview {
  display: inline-block;
  max-width: 200px;
  overflow-x: hidden;
  text-overflow: ellipsis;
  vertical-align: top;
}
.ql-snow .ql-tooltip a.ql-action::after {
  border-right: 1px solid #ccc;
  content: "Edit";
  margin-left: 16px;
  padding-right: 8px;
}
.ql-snow .ql-tooltip a.ql-remove::before {
  content: "Remove";
  margin-left: 8px;
}
.ql-snow .ql-tooltip a {
  line-height: 26px;
}
.ql-snow .ql-tooltip.ql-editing a.ql-preview,
.ql-snow .ql-tooltip.ql-editing a.ql-remove {
  display: none;
}
.ql-snow .ql-tooltip.ql-editing input[type="text"] {
  display: inline-block;
}
.ql-snow .ql-tooltip.ql-editing a.ql-action::after {
  border-right: 0;
  content: "Save";
  padding-right: 0;
}
.ql-snow .ql-tooltip[data-mode="link"]::before {
  content: "Enter link:";
}
.ql-snow .ql-tooltip[data-mode="formula"]::before {
  content: "Enter formula:";
}
.ql-snow .ql-tooltip[data-mode="video"]::before {
  content: "Enter video:";
}
.ql-snow a {
  color: #06c;
}
.ql-container.ql-snow {
  border: 1px solid #ccc;
}
`, oo = je.extend({
  defaultProps: {
    __TYPE: "Editor",
    id: null,
    value: null,
    style: null,
    className: null,
    placeholder: null,
    readOnly: !1,
    modules: null,
    formats: null,
    theme: "snow",
    showHeader: !0,
    headerTemplate: null,
    onTextChange: null,
    onSelectionChange: null,
    onLoad: null,
    maxLength: null,
    children: void 0
  },
  css: {
    classes: rd,
    styles: od
  }
});
function al(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function il(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? al(Object(e), !0).forEach(function(o) {
      Ju(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : al(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
var ad = function() {
  try {
    return Quill;
  } catch {
    return null;
  }
}(), gs = /* @__PURE__ */ f.memo(/* @__PURE__ */ f.forwardRef(function(n, t) {
  var e = Dt(), o = f.useContext(ut), r = oo.getProps(n, o), a = oo.setMetaData({
    props: r
  }), i = a.ptm, l = a.cx, s = a.isUnstyled;
  Qt(oo.css.styles, s, {
    name: "editor"
  });
  var c = f.useRef(null), u = f.useRef(null), d = f.useRef(null), m = f.useRef(null), v = f.useRef(!1), x = f.useState(!1), h = nd(x, 2), S = h[0], w = h[1];
  Zt(function() {
    if (!v.current) {
      var k = {
        modules: il({
          toolbar: r.showHeader ? d.current : !1
        }, r.modules),
        placeholder: r.placeholder,
        readOnly: r.readOnly,
        theme: r.theme,
        formats: r.formats
      };
      ad ? y(new Quill(u.current, k)) : import("quill").then(function(X) {
        if (X && L.isExist(u.current)) {
          var M;
          X.default ? M = new X.default(u.current, k) : M = new X(u.current, k), y(M);
        }
      }), v.current = !0;
    }
  });
  var E = function(X, M, J) {
    var te = u.current.children[0], me = te ? te.innerHTML : null, ye = m.current.getText();
    if (me === "<p><br></p>" && (me = null), J === "api") {
      var se = u.current.children[0], Q = document.createElement("div");
      if (Q.innerHTML = r.value || "", L.isEqualElement(se, Q))
        return;
    }
    if (r.maxLength) {
      var R = m.current.getLength();
      R > r.maxLength && m.current.deleteText(r.maxLength, R);
    }
    r.onTextChange && r.onTextChange({
      htmlValue: me,
      textValue: ye,
      delta: X,
      source: J
    });
  }, C = function(X, M, J) {
    r.onSelectionChange && r.onSelectionChange({
      range: X,
      oldRange: M,
      source: J
    });
  }, q = ze(r.value);
  q.current = r.value;
  var y = function(X) {
    m.current = X, q.current && X.setContents(X.clipboard.convert({
      html: q.current,
      text: ""
    })), w(!0);
  };
  Ue(function() {
    if (S)
      return m.current.on("text-change", E), m.current.on("selection-change", C), function() {
        m.current.off("text-change", E), m.current.off("selection-change", C);
      };
  }), Ue(function() {
    S && m.current && m.current.getModule("toolbar") && r.onLoad && r.onLoad(m.current);
  }, [S]), Ue(function() {
    m.current && !m.current.hasFocus() && (r.value ? m.current.setContents(m.current.clipboard.convert({
      html: r.value,
      text: ""
    })) : m.current.setText(""));
  }, [r.value]), f.useImperativeHandle(t, function() {
    return {
      props: r,
      getQuill: function() {
        return m.current;
      },
      getElement: function() {
        return c.current;
      },
      getContent: function() {
        return u.current;
      },
      getToolbar: function() {
        return d.current;
      }
    };
  });
  var P = function() {
    var X = e({
      ref: d,
      className: l("toolbar")
    }, i("toolbar"));
    if (r.showHeader === !1)
      return null;
    if (r.headerTemplate)
      return /* @__PURE__ */ f.createElement("div", X, r.headerTemplate);
    var M = function(me, ye) {
      return e(me && il({}, me), i(ye));
    }, J = e({
      className: "ql-formats"
    }, i("formats"));
    return /* @__PURE__ */ f.createElement("div", X, /* @__PURE__ */ f.createElement("span", J, /* @__PURE__ */ f.createElement("select", M({
      className: "ql-header",
      defaultValue: "0"
    }, "header"), /* @__PURE__ */ f.createElement("option", M({
      value: "1"
    }, "option"), "Heading"), /* @__PURE__ */ f.createElement("option", M({
      value: "2"
    }, "option"), "Subheading"), /* @__PURE__ */ f.createElement("option", M({
      value: "0"
    }, "option"), "Normal")), /* @__PURE__ */ f.createElement("select", M({
      className: "ql-font"
    }, "font"), /* @__PURE__ */ f.createElement("option", M(void 0, "option")), /* @__PURE__ */ f.createElement("option", M({
      value: "serif"
    }, "option")), /* @__PURE__ */ f.createElement("option", M({
      value: "monospace"
    }, "option")))), /* @__PURE__ */ f.createElement("span", J, /* @__PURE__ */ f.createElement("button", M({
      type: "button",
      className: "ql-bold",
      "aria-label": "Bold"
    }, "bold")), /* @__PURE__ */ f.createElement("button", M({
      type: "button",
      className: "ql-italic",
      "aria-label": "Italic"
    }, "italic")), /* @__PURE__ */ f.createElement("button", M({
      type: "button",
      className: "ql-underline",
      "aria-label": "Underline"
    }, "underline"))), /* @__PURE__ */ f.createElement("span", J, /* @__PURE__ */ f.createElement("select", M({
      className: "ql-color"
    }, "color")), /* @__PURE__ */ f.createElement("select", M({
      className: "ql-background"
    }, "background"))), /* @__PURE__ */ f.createElement("span", J, /* @__PURE__ */ f.createElement("button", M({
      type: "button",
      className: "ql-list",
      value: "ordered",
      "aria-label": "Ordered List"
    }, "list")), /* @__PURE__ */ f.createElement("button", M({
      type: "button",
      className: "ql-list",
      value: "bullet",
      "aria-label": "Unordered List"
    }, "list")), /* @__PURE__ */ f.createElement("select", M({
      className: "ql-align"
    }, "select"), /* @__PURE__ */ f.createElement("option", M({
      defaultValue: !0
    }, "option")), /* @__PURE__ */ f.createElement("option", M({
      value: "center"
    }, "option")), /* @__PURE__ */ f.createElement("option", M({
      value: "right"
    }, "option")), /* @__PURE__ */ f.createElement("option", M({
      value: "justify"
    }, "option")))), /* @__PURE__ */ f.createElement("span", J, /* @__PURE__ */ f.createElement("button", M({
      type: "button",
      className: "ql-link",
      "aria-label": "Insert Link"
    }, "link")), /* @__PURE__ */ f.createElement("button", M({
      type: "button",
      className: "ql-image",
      "aria-label": "Insert Image"
    }, "image")), /* @__PURE__ */ f.createElement("button", M({
      type: "button",
      className: "ql-code-block",
      "aria-label": "Insert Code Block"
    }, "codeBlock"))), /* @__PURE__ */ f.createElement("span", J, /* @__PURE__ */ f.createElement("button", M({
      type: "button",
      className: "ql-clean",
      "aria-label": "Remove Styles"
    }, "clean"))));
  }, I = P(), V = e({
    ref: u,
    className: l("content"),
    style: r.style
  }, i("content")), N = /* @__PURE__ */ f.createElement("div", V), _ = e({
    className: ve(r.className, l("root"))
  }, oo.getOtherProps(r), i("root"));
  return /* @__PURE__ */ f.createElement("div", Na({
    id: r.id,
    ref: c
  }, _), I, N);
}));
gs.displayName = "Editor";
function Aa(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, o = new Array(t); e < t; e++) o[e] = n[e];
  return o;
}
function id(n) {
  if (Array.isArray(n)) return Aa(n);
}
function ld(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function sd(n, t) {
  if (n) {
    if (typeof n == "string") return Aa(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Aa(n, t);
  }
}
function cd() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ud(n) {
  return id(n) || ld(n) || sd(n) || cd();
}
var Gn = {
  /* eslint-disable */
  DEFAULT_MASKS: {
    pint: /[\d]/,
    int: /[\d\-]/,
    pnum: /[\d\.]/,
    money: /[\d\.\s,]/,
    num: /[\d\-\.]/,
    hex: /[0-9a-f]/i,
    email: /[a-z0-9_\.\-@]/i,
    alpha: /[a-z_]/i,
    alphanum: /[a-z0-9_]/i
  },
  /* eslint-enable */
  getRegex: function(t) {
    return Gn.DEFAULT_MASKS[t] ? Gn.DEFAULT_MASKS[t] : t;
  },
  onBeforeInput: function(t, e, o) {
    o || !L.isAndroid() || this.validateKey(t, t.data, e);
  },
  onKeyPress: function(t, e, o) {
    o || L.isAndroid() || t.ctrlKey || t.altKey || t.metaKey || this.validateKey(t, t.key, e);
  },
  onPaste: function(t, e, o) {
    if (!o) {
      var r = this.getRegex(e), a = t.clipboardData.getData("text");
      ud(a).forEach(function(i) {
        if (!r.test(i))
          return t.preventDefault(), !1;
      });
    }
  },
  validateKey: function(t, e, o) {
    if (e != null) {
      var r = e.length <= 2;
      if (r) {
        var a = this.getRegex(o);
        a.test(e) || t.preventDefault();
      }
    }
  },
  validate: function(t, e) {
    var o = t.target.value, r = !0, a = this.getRegex(e);
    return o && !a.test(o) && (r = !1), r;
  }
};
function dd(n) {
  if (Array.isArray(n)) return n;
}
function fd(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var o, r, a, i, l = [], s = !0, c = !1;
    try {
      if (a = (e = e.call(n)).next, t !== 0) for (; !(s = (o = a.call(e)).done) && (l.push(o.value), l.length !== t); s = !0) ;
    } catch (u) {
      c = !0, r = u;
    } finally {
      try {
        if (!s && e.return != null && (i = e.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw r;
      }
    }
    return l;
  }
}
function ll(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, o = new Array(t); e < t; e++) o[e] = n[e];
  return o;
}
function pd(n, t) {
  if (n) {
    if (typeof n == "string") return ll(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return ll(n, t);
  }
}
function md() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vd(n, t) {
  return dd(n) || fd(n, t) || pd(n, t) || md();
}
var La = {
  defaultProps: {
    __TYPE: "Portal",
    element: null,
    appendTo: null,
    visible: !1,
    onMounted: null,
    onUnmounted: null,
    children: void 0
  },
  getProps: function(t) {
    return A.getMergedProps(t, La.defaultProps);
  },
  getOtherProps: function(t) {
    return A.getDiffProps(t, La.defaultProps);
  }
}, Xr = /* @__PURE__ */ f.memo(function(n) {
  var t = La.getProps(n), e = f.useContext(ut), o = f.useState(t.visible && L.isClient()), r = vd(o, 2), a = r[0], i = r[1];
  Zt(function() {
    L.isClient() && !a && (i(!0), t.onMounted && t.onMounted());
  }), Ue(function() {
    t.onMounted && t.onMounted();
  }, [a]), cn(function() {
    t.onUnmounted && t.onUnmounted();
  });
  var l = t.element || t.children;
  if (l && a) {
    var s = t.appendTo || e && e.appendTo || ct.appendTo;
    return A.isFunction(s) && (s = s()), s || (s = document.body), s === "self" ? l : /* @__PURE__ */ xr.createPortal(l, s);
  }
  return null;
});
Xr.displayName = "Portal";
function qo() {
  return qo = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, qo.apply(this, arguments);
}
function Ar(n) {
  "@babel/helpers - typeof";
  return Ar = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ar(n);
}
function gd(n, t) {
  if (Ar(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t || "default");
    if (Ar(o) !== "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function hd(n) {
  var t = gd(n, "string");
  return Ar(t) === "symbol" ? t : String(t);
}
function hs(n, t, e) {
  return t = hd(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function $a(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, o = new Array(t); e < t; e++) o[e] = n[e];
  return o;
}
function bd(n) {
  if (Array.isArray(n)) return $a(n);
}
function yd(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function bs(n, t) {
  if (n) {
    if (typeof n == "string") return $a(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return $a(n, t);
  }
}
function wd() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xd(n) {
  return bd(n) || yd(n) || bs(n) || wd();
}
function Ed(n) {
  if (Array.isArray(n)) return n;
}
function Sd(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var o, r, a, i, l = [], s = !0, c = !1;
    try {
      if (a = (e = e.call(n)).next, t !== 0) for (; !(s = (o = a.call(e)).done) && (l.push(o.value), l.length !== t); s = !0) ;
    } catch (u) {
      c = !0, r = u;
    } finally {
      try {
        if (!s && e.return != null && (i = e.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw r;
      }
    }
    return l;
  }
}
function Cd() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function br(n, t) {
  return Ed(n) || Sd(n, t) || bs(n, t) || Cd();
}
var Od = {
  root: function(t) {
    var e = t.positionState, o = t.classNameState;
    return ve("p-tooltip p-component", hs({}, "p-tooltip-".concat(e), !0), o);
  },
  arrow: "p-tooltip-arrow",
  text: "p-tooltip-text"
}, qd = {
  arrow: function(t) {
    var e = t.context;
    return {
      top: e.bottom ? "0" : e.right || e.left || !e.right && !e.left && !e.top && !e.bottom ? "50%" : null,
      bottom: e.top ? "0" : null,
      left: e.right || !e.right && !e.left && !e.top && !e.bottom ? "0" : e.top || e.bottom ? "50%" : null,
      right: e.left ? "0" : null
    };
  }
}, Pd = `
@layer primereact {
    .p-tooltip {
        position: absolute;
        padding: .25em .5rem;
        /* #3687: Tooltip prevent scrollbar flickering */
        top: -9999px;
        left: -9999px;
    }
    
    .p-tooltip.p-tooltip-right,
    .p-tooltip.p-tooltip-left {
        padding: 0 .25rem;
    }
    
    .p-tooltip.p-tooltip-top,
    .p-tooltip.p-tooltip-bottom {
        padding:.25em 0;
    }
    
    .p-tooltip .p-tooltip-text {
       white-space: pre-line;
       word-break: break-word;
    }
    
    .p-tooltip-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
    }
    
    .p-tooltip-right .p-tooltip-arrow {
        top: 50%;
        left: 0;
        margin-top: -.25rem;
        border-width: .25em .25em .25em 0;
    }
    
    .p-tooltip-left .p-tooltip-arrow {
        top: 50%;
        right: 0;
        margin-top: -.25rem;
        border-width: .25em 0 .25em .25rem;
    }
    
    .p-tooltip.p-tooltip-top {
        padding: .25em 0;
    }
    
    .p-tooltip-top .p-tooltip-arrow {
        bottom: 0;
        left: 50%;
        margin-left: -.25rem;
        border-width: .25em .25em 0;
    }
    
    .p-tooltip-bottom .p-tooltip-arrow {
        top: 0;
        left: 50%;
        margin-left: -.25rem;
        border-width: 0 .25em .25rem;
    }

    .p-tooltip-target-wrapper {
        display: inline-flex;
    }
}
`, ao = je.extend({
  defaultProps: {
    __TYPE: "Tooltip",
    appendTo: null,
    at: null,
    autoHide: !0,
    autoZIndex: !0,
    baseZIndex: 0,
    className: null,
    closeOnEscape: !1,
    content: null,
    disabled: !1,
    event: null,
    hideDelay: 0,
    hideEvent: "mouseleave",
    id: null,
    mouseTrack: !1,
    mouseTrackLeft: 5,
    mouseTrackTop: 5,
    my: null,
    onBeforeHide: null,
    onBeforeShow: null,
    onHide: null,
    onShow: null,
    position: "right",
    showDelay: 0,
    showEvent: "mouseenter",
    showOnDisabled: !1,
    style: null,
    target: null,
    updateDelay: 0,
    children: void 0
  },
  css: {
    classes: Od,
    styles: Pd,
    inlineStyles: qd
  }
});
function sl(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function Td(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sl(Object(e), !0).forEach(function(o) {
      hs(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : sl(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
var rr = /* @__PURE__ */ f.memo(/* @__PURE__ */ f.forwardRef(function(n, t) {
  var e = Dt(), o = f.useContext(ut), r = ao.getProps(n, o), a = f.useState(!1), i = br(a, 2), l = i[0], s = i[1], c = f.useState(r.position || "right"), u = br(c, 2), d = u[0], m = u[1], v = f.useState(""), x = br(v, 2), h = x[0], S = x[1], w = {
    props: r,
    state: {
      visible: l,
      position: d,
      className: h
    },
    context: {
      right: d === "right",
      left: d === "left",
      top: d === "top",
      bottom: d === "bottom"
    }
  }, E = ao.setMetaData(w), C = E.ptm, q = E.cx, y = E.sx, P = E.isUnstyled;
  Qt(ao.css.styles, P, {
    name: "tooltip"
  }), os({
    callback: function() {
      Re();
    },
    when: r.closeOnEscape,
    priority: [ns.TOOLTIP, 0]
  });
  var I = f.useRef(null), V = f.useRef(null), N = f.useRef(null), _ = f.useRef(null), k = f.useRef(!0), X = f.useRef({}), M = f.useRef(null), J = di({
    listener: function(z) {
      !L.isTouchDevice() && Re(z);
    }
  }), te = br(J, 2), me = te[0], ye = te[1], se = as({
    target: N.current,
    listener: function(z) {
      Re(z);
    },
    when: l
  }), Q = br(se, 2), R = Q[0], Y = Q[1], ae = function(z) {
    return !(r.content || U(z, "tooltip"));
  }, G = function(z) {
    return !(r.content || U(z, "tooltip") || r.children);
  }, K = function(z) {
    return U(z, "mousetrack") || r.mouseTrack;
  }, ue = function(z) {
    return U(z, "disabled") === "true" || j(z, "disabled") || r.disabled;
  }, de = function(z) {
    return U(z, "showondisabled") || r.showOnDisabled;
  }, pe = function() {
    return U(N.current, "autohide") || r.autoHide;
  }, U = function(z, fe) {
    return j(z, "data-pr-".concat(fe)) ? z.getAttribute("data-pr-".concat(fe)) : null;
  }, j = function(z, fe) {
    return z && z.hasAttribute(fe);
  }, $ = function(z) {
    var fe = [U(z, "showevent") || r.showEvent], Te = [U(z, "hideevent") || r.hideEvent];
    if (K(z))
      fe = ["mousemove"], Te = ["mouseleave"];
    else {
      var Ce = U(z, "event") || r.event;
      Ce === "focus" && (fe = ["focus"], Te = ["blur"]), Ce === "both" && (fe = ["focus", "mouseenter"], Te = ["blur", "mouseleave"]);
    }
    return {
      showEvents: fe,
      hideEvents: Te
    };
  }, le = function(z) {
    return U(z, "position") || d;
  }, F = function(z) {
    var fe = U(z, "mousetracktop") || r.mouseTrackTop, Te = U(z, "mousetrackleft") || r.mouseTrackLeft;
    return {
      top: fe,
      left: Te
    };
  }, qe = function(z, fe) {
    if (V.current) {
      var Te = U(z, "tooltip") || r.content;
      Te ? (V.current.innerHTML = "", V.current.appendChild(document.createTextNode(Te)), fe()) : r.children && fe();
    }
  }, ke = function(z) {
    qe(N.current, function() {
      var fe = M.current, Te = fe.pageX, Ce = fe.pageY;
      r.autoZIndex && !rn.get(I.current) && rn.set("tooltip", I.current, o && o.autoZIndex || ct.autoZIndex, r.baseZIndex || o && o.zIndex.tooltip || ct.zIndex.tooltip), I.current.style.left = "", I.current.style.top = "", pe() && (I.current.style.pointerEvents = "none");
      var Oe = K(N.current) || z === "mouse";
      (Oe && !_.current || Oe) && (_.current = {
        width: L.getOuterWidth(I.current),
        height: L.getOuterHeight(I.current)
      }), He(N.current, {
        x: Te,
        y: Ce
      }, z);
    });
  }, _e = function(z) {
    N.current = z.currentTarget;
    var fe = ue(N.current), Te = G(de(N.current) && fe ? N.current.firstChild : N.current);
    if (!(Te || fe))
      if (M.current = z, l)
        Pt("updateDelay", ke);
      else {
        var Ce = Ge(r.onBeforeShow, {
          originalEvent: z,
          target: N.current
        });
        Ce && Pt("showDelay", function() {
          s(!0), Ge(r.onShow, {
            originalEvent: z,
            target: N.current
          });
        });
      }
  }, Re = function(z) {
    if (nt(), l) {
      var fe = Ge(r.onBeforeHide, {
        originalEvent: z,
        target: N.current
      });
      fe && Pt("hideDelay", function() {
        !pe() && k.current === !1 || (rn.clear(I.current), L.removeClass(I.current, "p-tooltip-active"), s(!1), Ge(r.onHide, {
          originalEvent: z,
          target: N.current
        }));
      });
    }
  }, He = function(z, fe, Te) {
    var Ce = 0, Oe = 0, Me = Te || d;
    if ((K(z) || Me == "mouse") && fe) {
      var lt = {
        width: L.getOuterWidth(I.current),
        height: L.getOuterHeight(I.current)
      };
      Ce = fe.x, Oe = fe.y;
      var Ne = F(z), Ae = Ne.top, Fe = Ne.left;
      switch (Me) {
        case "left":
          Ce = Ce - (lt.width + Fe), Oe = Oe - (lt.height / 2 - Ae);
          break;
        case "right":
        case "mouse":
          Ce = Ce + Fe, Oe = Oe - (lt.height / 2 - Ae);
          break;
        case "top":
          Ce = Ce - (lt.width / 2 - Fe), Oe = Oe - (lt.height + Ae);
          break;
        case "bottom":
          Ce = Ce - (lt.width / 2 - Fe), Oe = Oe + Ae;
          break;
      }
      Ce <= 0 || _.current.width > lt.width ? (I.current.style.left = "0px", I.current.style.right = window.innerWidth - lt.width - Ce + "px") : (I.current.style.right = "", I.current.style.left = Ce + "px"), I.current.style.top = Oe + "px", L.addClass(I.current, "p-tooltip-active");
    } else {
      var Xe = L.findCollisionPosition(Me), Je = U(z, "my") || r.my || Xe.my, Ze = U(z, "at") || r.at || Xe.at;
      I.current.style.padding = "0px", L.flipfitCollision(I.current, z, Je, Ze, function(Qe) {
        var pt = Qe.at, Ye = pt.x, wt = pt.y, xt = Qe.my.x, Et = r.at ? Ye !== "center" && Ye !== xt ? Ye : wt : Qe.at["".concat(Xe.axis)];
        I.current.style.padding = "", m(Et), qt(Et), L.addClass(I.current, "p-tooltip-active");
      });
    }
  }, qt = function(z) {
    if (I.current) {
      var fe = getComputedStyle(I.current);
      z === "left" ? I.current.style.left = parseFloat(fe.left) - parseFloat(fe.paddingLeft) * 2 + "px" : z === "top" && (I.current.style.top = parseFloat(fe.top) - parseFloat(fe.paddingTop) * 2 + "px");
    }
  }, dt = function() {
    pe() || (k.current = !1);
  }, et = function(z) {
    pe() || (k.current = !0, Re(z));
  }, tt = function(z) {
    if (z) {
      var fe = $(z), Te = fe.showEvents, Ce = fe.hideEvents, Oe = Ht(z);
      Te.forEach(function(Me) {
        return Oe == null ? void 0 : Oe.addEventListener(Me, _e);
      }), Ce.forEach(function(Me) {
        return Oe == null ? void 0 : Oe.addEventListener(Me, Re);
      });
    }
  }, yt = function(z) {
    if (z) {
      var fe = $(z), Te = fe.showEvents, Ce = fe.hideEvents, Oe = Ht(z);
      Te.forEach(function(Me) {
        return Oe == null ? void 0 : Oe.removeEventListener(Me, _e);
      }), Ce.forEach(function(Me) {
        return Oe == null ? void 0 : Oe.removeEventListener(Me, Re);
      });
    }
  }, Pt = function(z, fe) {
    nt();
    var Te = U(N.current, z.toLowerCase()) || r[z];
    Te ? X.current["".concat(z)] = setTimeout(function() {
      return fe();
    }, Te) : fe();
  }, Ge = function(z) {
    if (z) {
      for (var fe = arguments.length, Te = new Array(fe > 1 ? fe - 1 : 0), Ce = 1; Ce < fe; Ce++)
        Te[Ce - 1] = arguments[Ce];
      var Oe = z.apply(void 0, Te);
      return Oe === void 0 && (Oe = !0), Oe;
    }
    return !0;
  }, nt = function() {
    Object.values(X.current).forEach(function(z) {
      return clearTimeout(z);
    });
  }, Ht = function(z) {
    if (z) {
      if (de(z)) {
        if (!z.hasWrapper) {
          var fe = document.createElement("div"), Te = z.nodeName === "INPUT";
          return Te ? L.addMultipleClasses(fe, "p-tooltip-target-wrapper p-inputwrapper") : L.addClass(fe, "p-tooltip-target-wrapper"), z.parentNode.insertBefore(fe, z), fe.appendChild(z), z.hasWrapper = !0, fe;
        }
        return z.parentElement;
      } else if (z.hasWrapper) {
        var Ce;
        (Ce = z.parentElement).replaceWith.apply(Ce, xd(z.parentElement.childNodes)), delete z.hasWrapper;
      }
      return z;
    }
    return null;
  }, rt = function(z) {
    it(z), ot(z);
  }, ot = function(z) {
    Lt(z || r.target, tt);
  }, it = function(z) {
    Lt(z || r.target, yt);
  }, Lt = function(z, fe) {
    if (z = A.getRefElement(z), z)
      if (L.isElement(z))
        fe(z);
      else {
        var Te = function(Oe) {
          var Me = L.find(document, Oe);
          Me.forEach(function(lt) {
            fe(lt);
          });
        };
        z instanceof Array ? z.forEach(function(Ce) {
          Te(Ce);
        }) : Te(z);
      }
  };
  Zt(function() {
    l && N.current && ue(N.current) && Re();
  }), Ue(function() {
    return ot(), function() {
      it();
    };
  }, [_e, Re, r.target]), Ue(function() {
    if (l) {
      var we = le(N.current), z = U(N.current, "classname");
      m(we), S(z), ke(we), me(), R();
    } else
      m(r.position || "right"), S(""), N.current = null, _.current = null, k.current = !0;
    return function() {
      ye(), Y();
    };
  }, [l]), Ue(function() {
    var we = le(N.current);
    l && we !== "mouse" && Pt("updateDelay", function() {
      qe(N.current, function() {
        He(N.current);
      });
    });
  }, [r.content]), cn(function() {
    Re(), rn.clear(I.current);
  }), f.useImperativeHandle(t, function() {
    return {
      props: r,
      updateTargetEvents: rt,
      loadTargetEvents: ot,
      unloadTargetEvents: it,
      show: _e,
      hide: Re,
      getElement: function() {
        return I.current;
      },
      getTarget: function() {
        return N.current;
      }
    };
  });
  var ft = function() {
    var z = ae(N.current), fe = e({
      id: r.id,
      className: ve(r.className, q("root", {
        positionState: d,
        classNameState: h
      })),
      style: r.style,
      role: "tooltip",
      "aria-hidden": l,
      onMouseEnter: function(Me) {
        return dt();
      },
      onMouseLeave: function(Me) {
        return et(Me);
      }
    }, ao.getOtherProps(r), C("root")), Te = e({
      className: q("arrow"),
      style: y("arrow", Td({}, w))
    }, C("arrow")), Ce = e({
      className: q("text")
    }, C("text"));
    return /* @__PURE__ */ f.createElement("div", qo({
      ref: I
    }, fe), /* @__PURE__ */ f.createElement("div", Te), /* @__PURE__ */ f.createElement("div", qo({
      ref: V
    }, Ce), z && r.children));
  };
  if (l) {
    var vt = ft();
    return /* @__PURE__ */ f.createElement(Xr, {
      element: vt,
      appendTo: r.appendTo,
      visible: !0
    });
  }
  return null;
}));
rr.displayName = "Tooltip";
function Po() {
  return Po = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, Po.apply(this, arguments);
}
function Lr(n) {
  "@babel/helpers - typeof";
  return Lr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Lr(n);
}
function Id(n, t) {
  if (Lr(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t || "default");
    if (Lr(o) !== "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function _d(n) {
  var t = Id(n, "string");
  return Lr(t) === "symbol" ? t : String(t);
}
function kd(n, t, e) {
  return t = _d(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
var Rd = {
  root: function(t) {
    var e = t.props, o = t.isFilled, r = t.context;
    return ve("p-inputtext p-component", {
      "p-disabled": e.disabled,
      "p-filled": o,
      "p-invalid": e.invalid,
      "p-variant-filled": e.variant ? e.variant === "filled" : r && r.inputStyle === "filled"
    });
  }
}, io = je.extend({
  defaultProps: {
    __TYPE: "InputText",
    __parentMetadata: null,
    children: void 0,
    className: null,
    invalid: !1,
    variant: null,
    keyfilter: null,
    onBeforeInput: null,
    onInput: null,
    onKeyDown: null,
    onPaste: null,
    tooltip: null,
    tooltipOptions: null,
    validateOnly: !1,
    iconPosition: null
  },
  css: {
    classes: Rd
  }
});
function cl(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function ul(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cl(Object(e), !0).forEach(function(o) {
      kd(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : cl(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
var We = /* @__PURE__ */ f.memo(/* @__PURE__ */ f.forwardRef(function(n, t) {
  var e = Dt(), o = f.useContext(ut), r = io.getProps(n, o), a = io.setMetaData(ul(ul({
    props: r
  }, r.__parentMetadata), {}, {
    context: {
      disabled: r.disabled,
      iconPosition: r.iconPosition
    }
  })), i = a.ptm, l = a.cx, s = a.isUnstyled;
  Qt(io.css.styles, s, {
    name: "inputtext",
    styled: !0
  });
  var c = f.useRef(t), u = function(E) {
    r.onKeyDown && r.onKeyDown(E), r.keyfilter && Gn.onKeyPress(E, r.keyfilter, r.validateOnly);
  }, d = function(E) {
    r.onBeforeInput && r.onBeforeInput(E), r.keyfilter && Gn.onBeforeInput(E, r.keyfilter, r.validateOnly);
  }, m = function(E) {
    var C = E.target, q = !0;
    r.keyfilter && r.validateOnly && (q = Gn.validate(E, r.keyfilter)), r.onInput && r.onInput(E, q), A.isNotEmpty(C.value) ? L.addClass(C, "p-filled") : L.removeClass(C, "p-filled");
  }, v = function(E) {
    r.onPaste && r.onPaste(E), r.keyfilter && Gn.onPaste(E, r.keyfilter, r.validateOnly);
  };
  f.useEffect(function() {
    A.combinedRefs(c, t);
  }, [c, t]);
  var x = f.useMemo(function() {
    return A.isNotEmpty(r.value) || A.isNotEmpty(r.defaultValue);
  }, [r.value, r.defaultValue]), h = A.isNotEmpty(r.tooltip), S = e({
    className: ve(r.className, l("root", {
      context: o,
      isFilled: x
    })),
    onBeforeInput: d,
    onInput: m,
    onKeyDown: u,
    onPaste: v
  }, io.getOtherProps(r), i("root"));
  return /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement("input", Po({
    ref: c
  }, S)), h && /* @__PURE__ */ f.createElement(rr, Po({
    target: c,
    content: r.tooltip,
    pt: i("tooltip")
  }, r.tooltipOptions)));
}));
We.displayName = "InputText";
const jd = ({ item: n, onChange: t, config: e }) => {
  const [o, r] = xe({ ...Qn, ...n }), a = (l) => {
    const s = { ...o, [l.target.name]: l.target.value };
    r(s), t(s);
  }, i = (l) => {
    const s = { ...o, value: l };
    r(s), t(s);
  };
  return ge(() => {
    r({ ...Qn, ...n });
  }, [n]), /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsx(an, { activeIndex: 0, children: /* @__PURE__ */ p.jsx(zt, { header: "General", children: /* @__PURE__ */ p.jsxs("div", { className: "form-item flex flex-column gap-4", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "flex flex-column gap-2", children: [
      /* @__PURE__ */ p.jsx("label", { htmlFor: "label", children: "Label" }),
      /* @__PURE__ */ p.jsx(
        We,
        {
          id: "label",
          value: o.label || "",
          name: "label",
          onChange: a,
          className: "w-full"
        }
      )
    ] }),
    /* @__PURE__ */ p.jsx(
      gs,
      {
        value: o.value,
        name: "value",
        onTextChange: (l) => i(l.htmlValue ?? ""),
        style: { minHeight: "300px" }
      }
    )
  ] }) }, "general") }) });
}, Dd = (n) => ({}), Nd = new _n({
  type: Qn.type,
  form: new Rt({
    render: Tc,
    validation: Ic
  }),
  settings: new Rt({
    render: jd,
    validation: Dd
  }),
  heading: "HTML Content",
  description: "WYSIWYG editor for adding in content to the form",
  hidden: !1,
  icon: _c,
  data: Qn
}), ys = new Lo(new Ao({ label: "Content" }));
ys.registerItem(Nd);
const $n = {
  id: sn(),
  type: "input-number",
  label: "",
  value: "",
  placeholder: ""
}, Ad = ({ item: n, onChange: t, config: e }) => {
  const [o, r] = xe({ ...$n, ...n });
  ge(() => {
    r({ ...$n, ...n });
  }, [n]);
  const a = (l) => {
    const s = { ...$n, ...n, value: l.target.value };
    t(s);
  }, i = Math.random().toString(36).substring(2, 15);
  return /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsx("article", { children: /* @__PURE__ */ p.jsxs("div", { className: "flex flex-column gap-2", children: [
    /* @__PURE__ */ p.jsx("label", { htmlFor: i, children: o.label }),
    /* @__PURE__ */ p.jsx(
      We,
      {
        type: "number",
        value: o.value,
        onChange: a,
        placeholder: o.placeholder || "",
        className: "w-full",
        id: i
      }
    )
  ] }) }) });
}, Ld = (n) => ({});
var dl;
function Fa() {
  return Fa = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e) ({}).hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, Fa.apply(null, arguments);
}
var $d = function(t) {
  return /* @__PURE__ */ f.createElement("svg", Fa({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 320 512"
  }, t), dl || (dl = /* @__PURE__ */ f.createElement("path", {
    d: "M0 64c0-17.7 14.3-32 32-32h256c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-224 384c-8.9 15.3-28.5 20.4-43.8 11.5s-20.4-28.5-11.5-43.8L232.3 96H32C14.3 96 0 81.7 0 64"
  })));
};
const Fd = ({ item: n, onChange: t, config: e }) => {
  const [o, r] = xe({ ...$n, ...n }), a = (i) => {
    const l = { ...o, [i.target.name]: i.target.value };
    r(l), t(l);
  };
  return ge(() => {
    r({ ...$n, ...n });
  }, [n]), /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsxs(an, { activeIndex: 0, children: [
    " ",
    /* @__PURE__ */ p.jsx(zt, { header: "General", children: /* @__PURE__ */ p.jsxs("div", { className: "form-item flex flex-column gap-4", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "flex flex-column gap-2", children: [
        /* @__PURE__ */ p.jsx("label", { htmlFor: "label", children: "Label" }),
        /* @__PURE__ */ p.jsx(
          We,
          {
            id: "label",
            value: o.label || "",
            name: "label",
            onChange: a,
            className: "w-full"
          }
        )
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "flex flex-column gap-2", children: [
        /* @__PURE__ */ p.jsx("label", { htmlFor: "placeholder", children: "Placeholder" }),
        /* @__PURE__ */ p.jsx(
          We,
          {
            id: "placeholder",
            value: o.placeholder || "",
            name: "placeholder",
            onChange: a,
            className: "w-full"
          }
        )
      ] })
    ] }) }, "general"),
    " "
  ] }) });
}, Md = (n) => ({}), zd = new _n({
  type: $n.type,
  form: new Rt({
    render: Ad,
    validation: Ld
  }),
  settings: new Rt({
    render: Fd,
    validation: Md
  }),
  heading: "Number input",
  description: "a simple box to insert a number value into",
  hidden: !1,
  icon: $d,
  data: $n
}), Cn = {
  id: sn(),
  type: "input-select",
  label: "",
  value: "",
  source: "local",
  options: [],
  placeholder: ""
};
function Ma() {
  return Ma = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, Ma.apply(this, arguments);
}
var ws = /* @__PURE__ */ f.memo(/* @__PURE__ */ f.forwardRef(function(n, t) {
  var e = Wt.getPTI(n);
  return /* @__PURE__ */ f.createElement("svg", Ma({
    ref: t,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e), /* @__PURE__ */ f.createElement("path", {
    d: "M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z",
    fill: "currentColor"
  }));
}));
ws.displayName = "ChevronUpIcon";
function za() {
  return za = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, za.apply(this, arguments);
}
var Ho = /* @__PURE__ */ f.memo(/* @__PURE__ */ f.forwardRef(function(n, t) {
  var e = Wt.getPTI(n);
  return /* @__PURE__ */ f.createElement("svg", za({
    ref: t,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e), /* @__PURE__ */ f.createElement("path", {
    d: "M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",
    fill: "currentColor"
  }));
}));
Ho.displayName = "SpinnerIcon";
function Ha() {
  return Ha = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, Ha.apply(this, arguments);
}
var Bo = /* @__PURE__ */ f.memo(/* @__PURE__ */ f.forwardRef(function(n, t) {
  var e = Wt.getPTI(n);
  return /* @__PURE__ */ f.createElement("svg", Ha({
    ref: t,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e), /* @__PURE__ */ f.createElement("path", {
    d: "M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",
    fill: "currentColor"
  }));
}));
Bo.displayName = "TimesIcon";
var Fn = Mc();
function Ba() {
  return Ba = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, Ba.apply(this, arguments);
}
var xs = /* @__PURE__ */ f.memo(/* @__PURE__ */ f.forwardRef(function(n, t) {
  var e = Wt.getPTI(n);
  return /* @__PURE__ */ f.createElement("svg", Ba({
    ref: t,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e), /* @__PURE__ */ f.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z",
    fill: "currentColor"
  }));
}));
xs.displayName = "SearchIcon";
function Wa() {
  return Wa = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, Wa.apply(this, arguments);
}
function $r(n) {
  "@babel/helpers - typeof";
  return $r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $r(n);
}
function Hd(n, t) {
  if ($r(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t || "default");
    if ($r(o) !== "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function Bd(n) {
  var t = Hd(n, "string");
  return $r(t) === "symbol" ? t : String(t);
}
function Es(n, t, e) {
  return t = Bd(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function Wd(n) {
  if (Array.isArray(n)) return n;
}
function Vd(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var o, r, a, i, l = [], s = !0, c = !1;
    try {
      if (a = (e = e.call(n)).next, t === 0) {
        if (Object(e) !== e) return;
        s = !1;
      } else for (; !(s = (o = a.call(e)).done) && (l.push(o.value), l.length !== t); s = !0) ;
    } catch (u) {
      c = !0, r = u;
    } finally {
      try {
        if (!s && e.return != null && (i = e.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw r;
      }
    }
    return l;
  }
}
function fl(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, o = new Array(t); e < t; e++) o[e] = n[e];
  return o;
}
function Kd(n, t) {
  if (n) {
    if (typeof n == "string") return fl(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return fl(n, t);
  }
}
function Ud() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pn(n, t) {
  return Wd(n) || Vd(n, t) || Kd(n, t) || Ud();
}
var Yd = `
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}

.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    /*contain: content;*/
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}

.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}

.p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-virtualscroller-loader.p-component-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-virtualscroller-loading-icon {
    font-size: 2rem;
}

.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

/* Inline */
.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}
`, lo = je.extend({
  defaultProps: {
    __TYPE: "VirtualScroller",
    __parentMetadata: null,
    id: null,
    style: null,
    className: null,
    tabIndex: 0,
    items: null,
    itemSize: 0,
    scrollHeight: null,
    scrollWidth: null,
    orientation: "vertical",
    step: 0,
    numToleratedItems: null,
    delay: 0,
    resizeDelay: 10,
    appendOnly: !1,
    inline: !1,
    lazy: !1,
    disabled: !1,
    loaderDisabled: !1,
    loadingIcon: null,
    columns: null,
    loading: void 0,
    autoSize: !1,
    showSpacer: !0,
    showLoader: !1,
    loadingTemplate: null,
    loaderIconTemplate: null,
    itemTemplate: null,
    contentTemplate: null,
    onScroll: null,
    onScrollIndexChange: null,
    onLazyLoad: null,
    children: void 0
  },
  css: {
    styles: Yd
  }
});
function pl(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function Kn(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pl(Object(e), !0).forEach(function(o) {
      Es(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : pl(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
var Ss = /* @__PURE__ */ f.memo(/* @__PURE__ */ f.forwardRef(function(n, t) {
  var e = Dt(), o = f.useContext(ut), r = lo.getProps(n, o), a = kr(n) || {}, i = r.orientation === "vertical", l = r.orientation === "horizontal", s = r.orientation === "both", c = f.useState(s ? {
    rows: 0,
    cols: 0
  } : 0), u = pn(c, 2), d = u[0], m = u[1], v = f.useState(s ? {
    rows: 0,
    cols: 0
  } : 0), x = pn(v, 2), h = x[0], S = x[1], w = f.useState(0), E = pn(w, 2), C = E[0], q = E[1], y = f.useState(s ? {
    rows: 0,
    cols: 0
  } : 0), P = pn(y, 2), I = P[0], V = P[1], N = f.useState(r.numToleratedItems), _ = pn(N, 2), k = _[0], X = _[1], M = f.useState(r.loading || !1), J = pn(M, 2), te = J[0], me = J[1], ye = f.useState([]), se = pn(ye, 2), Q = se[0], R = se[1], Y = lo.setMetaData({
    props: r,
    state: {
      first: d,
      last: h,
      page: C,
      numItemsInViewport: I,
      numToleratedItems: k,
      loading: te,
      loaderArr: Q
    }
  }), ae = Y.ptm;
  Ln(lo.css.styles, {
    name: "virtualscroller"
  });
  var G = f.useRef(null), K = f.useRef(null), ue = f.useRef(null), de = f.useRef(null), pe = f.useRef(s ? {
    top: 0,
    left: 0
  } : 0), U = f.useRef(null), j = f.useRef(null), $ = f.useRef({}), le = f.useRef({}), F = f.useRef(null), qe = f.useRef(null), ke = f.useRef(null), _e = f.useRef(null), Re = f.useRef(!1), He = f.useRef(null), qt = di({
    listener: function(T) {
      return Je();
    },
    when: !r.disabled
  }), dt = pn(qt, 1), et = dt[0], tt = En({
    target: "window",
    type: "orientationchange",
    listener: function(T) {
      return Je();
    },
    when: !r.disabled
  }), yt = pn(tt, 1), Pt = yt[0], Ge = function() {
    return G;
  }, nt = function(T) {
    return Math.floor((T + k * 4) / (r.step || 1));
  }, Ht = function(T) {
    K.current = T || K.current || L.findSingle(G.current, ".p-virtualscroller-content");
  }, rt = function(T) {
    return r.step ? C !== nt(T) : !0;
  }, ot = function(T) {
    pe.current = s ? {
      top: 0,
      left: 0
    } : 0, G.current && G.current.scrollTo(T);
  }, it = function(T) {
    var D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "auto", W = z(), Z = W.numToleratedItems, re = Oe(), ne = function() {
      var at = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, Bt = arguments.length > 1 ? arguments[1] : void 0;
      return at <= Bt ? 0 : at;
    }, ce = function(at, Bt, dn) {
      return at * Bt + dn;
    }, Ie = function() {
      var at = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, Bt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return ot({
        left: at,
        top: Bt,
        behavior: D
      });
    }, Ee = s ? {
      rows: 0,
      cols: 0
    } : 0, Ke = !1;
    s ? (Ee = {
      rows: ne(T[0], Z[0]),
      cols: ne(T[1], Z[1])
    }, Ie(ce(Ee.cols, r.itemSize[1], re.left), ce(Ee.rows, r.itemSize[0], re.top)), Ke = d.rows !== Ee.rows || d.cols !== Ee.cols) : (Ee = ne(T, Z), l ? Ie(ce(Ee, r.itemSize, re.left), 0) : Ie(0, ce(Ee, r.itemSize, re.top)), Ke = d !== Ee), Re.current = Ke, m(Ee);
  }, Lt = function(T, D) {
    var W = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "auto";
    if (D) {
      var Z = we(), re = Z.first, ne = Z.viewport, ce = function() {
        var Bt = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, dn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        return ot({
          left: Bt,
          top: dn,
          behavior: W
        });
      }, Ie = D === "to-start", Ee = D === "to-end";
      if (Ie) {
        if (s)
          ne.first.rows - re.rows > T[0] ? ce(ne.first.cols * r.itemSize[1], (ne.first.rows - 1) * r.itemSize[0]) : ne.first.cols - re.cols > T[1] && ce((ne.first.cols - 1) * r.itemSize[1], ne.first.rows * r.itemSize[0]);
        else if (ne.first - re > T) {
          var Ke = (ne.first - 1) * r.itemSize;
          l ? ce(Ke, 0) : ce(0, Ke);
        }
      } else if (Ee) {
        if (s)
          ne.last.rows - re.rows <= T[0] + 1 ? ce(ne.first.cols * r.itemSize[1], (ne.first.rows + 1) * r.itemSize[0]) : ne.last.cols - re.cols <= T[1] + 1 && ce((ne.first.cols + 1) * r.itemSize[1], ne.first.rows * r.itemSize[0]);
        else if (ne.last - re <= T + 1) {
          var gt = (ne.first + 1) * r.itemSize;
          l ? ce(gt, 0) : ce(0, gt);
        }
      }
    } else
      it(T, W);
  }, ft = function() {
    return te ? r.loaderDisabled ? Q : [] : pt();
  }, vt = function() {
    return r.columns && s || l ? te && r.loaderDisabled ? s ? Q[0] : Q : r.columns.slice(s ? d.cols : d, s ? h.cols : h) : r.columns;
  }, we = function() {
    var T = function(Ee, Ke) {
      return Math.floor(Ee / (Ke || Ee));
    }, D = d, W = 0;
    if (G.current) {
      var Z = G.current, re = Z.scrollTop, ne = Z.scrollLeft;
      if (s)
        D = {
          rows: T(re, r.itemSize[0]),
          cols: T(ne, r.itemSize[1])
        }, W = {
          rows: D.rows + I.rows,
          cols: D.cols + I.cols
        };
      else {
        var ce = l ? ne : re;
        D = T(ce, r.itemSize), W = D + I;
      }
    }
    return {
      first: d,
      last: h,
      viewport: {
        first: D,
        last: W
      }
    };
  }, z = function() {
    var T = Oe(), D = G.current ? G.current.offsetWidth - T.left : 0, W = G.current ? G.current.offsetHeight - T.top : 0, Z = function(Ee, Ke) {
      return Math.ceil(Ee / (Ke || Ee));
    }, re = function(Ee) {
      return Math.ceil(Ee / 2);
    }, ne = s ? {
      rows: Z(W, r.itemSize[0]),
      cols: Z(D, r.itemSize[1])
    } : Z(l ? D : W, r.itemSize), ce = k || (s ? [re(ne.rows), re(ne.cols)] : re(ne));
    return {
      numItemsInViewport: ne,
      numToleratedItems: ce
    };
  }, fe = function() {
    var T = z(), D = T.numItemsInViewport, W = T.numToleratedItems, Z = function(ce, Ie, Ee) {
      var Ke = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      return Ce(ce + Ie + (ce < Ee ? 2 : 3) * Ee, Ke);
    }, re = s ? {
      rows: Z(d.rows, D.rows, W[0]),
      cols: Z(d.cols, D.cols, W[1], !0)
    } : Z(d, D, W);
    V(D), X(W), S(re), r.showLoader && R(s ? Array.from({
      length: D.rows
    }).map(function() {
      return Array.from({
        length: D.cols
      });
    }) : Array.from({
      length: D
    })), r.lazy && Promise.resolve().then(function() {
      He.current = {
        first: r.step ? s ? {
          rows: 0,
          cols: d.cols
        } : 0 : d,
        last: Math.min(r.step ? r.step : re, (r.items || []).length)
      }, r.onLazyLoad && r.onLazyLoad(He.current);
    });
  }, Te = function(T) {
    r.autoSize && !T && Promise.resolve().then(function() {
      if (K.current) {
        K.current.style.minHeight = K.current.style.minWidth = "auto", K.current.style.position = "relative", G.current.style.contain = "none";
        var D = [L.getWidth(G.current), L.getHeight(G.current)], W = D[0], Z = D[1];
        (s || l) && (G.current.style.width = (W < F.current ? W : r.scrollWidth || F.current) + "px"), (s || i) && (G.current.style.height = (Z < qe.current ? Z : r.scrollHeight || qe.current) + "px"), K.current.style.minHeight = K.current.style.minWidth = "", K.current.style.position = "", G.current.style.contain = "";
      }
    });
  }, Ce = function() {
    var T, D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, W = arguments.length > 1 ? arguments[1] : void 0;
    return r.items ? Math.min(W ? ((T = r.columns || r.items[0]) === null || T === void 0 ? void 0 : T.length) || 0 : (r.items || []).length, D) : 0;
  }, Oe = function() {
    if (K.current) {
      var T = getComputedStyle(K.current), D = parseFloat(T.paddingLeft) + Math.max(parseFloat(T.left) || 0, 0), W = parseFloat(T.paddingRight) + Math.max(parseFloat(T.right) || 0, 0), Z = parseFloat(T.paddingTop) + Math.max(parseFloat(T.top) || 0, 0), re = parseFloat(T.paddingBottom) + Math.max(parseFloat(T.bottom) || 0, 0);
      return {
        left: D,
        right: W,
        top: Z,
        bottom: re,
        x: D + W,
        y: Z + re
      };
    }
    return {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      x: 0,
      y: 0
    };
  }, Me = function() {
    if (G.current) {
      var T = G.current.parentElement, D = r.scrollWidth || "".concat(G.current.offsetWidth || T.offsetWidth, "px"), W = r.scrollHeight || "".concat(G.current.offsetHeight || T.offsetHeight, "px"), Z = function(ne, ce) {
        return G.current.style[ne] = ce;
      };
      s || l ? (Z("height", W), Z("width", D)) : Z("height", W);
    }
  }, lt = function() {
    var T = r.items;
    if (T) {
      var D = Oe(), W = function(re, ne, ce) {
        var Ie = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
        return le.current = Kn(Kn({}, le.current), Es({}, "".concat(re), (ne || []).length * ce + Ie + "px"));
      };
      s ? (W("height", T, r.itemSize[0], D.y), W("width", r.columns || T[1], r.itemSize[1], D.x)) : l ? W("width", r.columns || T, r.itemSize, D.x) : W("height", T, r.itemSize, D.y);
    }
  }, Ne = function(T) {
    if (K.current && !r.appendOnly) {
      var D = T ? T.first : d, W = function(ce, Ie) {
        return ce * Ie;
      }, Z = function() {
        var ce = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, Ie = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        de.current && (de.current.style.top = "-".concat(Ie, "px")), $.current = Kn(Kn({}, $.current), {
          transform: "translate3d(".concat(ce, "px, ").concat(Ie, "px, 0)")
        });
      };
      if (s)
        Z(W(D.cols, r.itemSize[1]), W(D.rows, r.itemSize[0]));
      else {
        var re = W(D, r.itemSize);
        l ? Z(re, 0) : Z(0, re);
      }
    }
  }, Ae = function(T) {
    var D = T.target, W = Oe(), Z = function(ht, Mt) {
      return ht ? ht > Mt ? ht - Mt : ht : 0;
    }, re = function(ht, Mt) {
      return Math.floor(ht / (Mt || ht));
    }, ne = function(ht, Mt, bn, Hn, tn, fn) {
      return ht <= tn ? tn : fn ? bn - Hn - tn : Mt + tn - 1;
    }, ce = function(ht, Mt, bn, Hn, tn, fn, Rn) {
      return ht <= fn ? 0 : Math.max(0, Rn ? ht < Mt ? bn : ht - fn : ht > Mt ? bn : ht - 2 * fn);
    }, Ie = function(ht, Mt, bn, Hn, tn, fn) {
      var Rn = Mt + Hn + 2 * tn;
      return ht >= tn && (Rn = Rn + (tn + 1)), Ce(Rn, fn);
    }, Ee = Z(D.scrollTop, W.top), Ke = Z(D.scrollLeft, W.left), gt = s ? {
      rows: 0,
      cols: 0
    } : 0, at = h, Bt = !1, dn = pe.current;
    if (s) {
      var ur = pe.current.top <= Ee, dr = pe.current.left <= Ke;
      if (!r.appendOnly || r.appendOnly && (ur || dr)) {
        var hn = {
          rows: re(Ee, r.itemSize[0]),
          cols: re(Ke, r.itemSize[1])
        }, to = {
          rows: ne(hn.rows, d.rows, h.rows, I.rows, k[0], ur),
          cols: ne(hn.cols, d.cols, h.cols, I.cols, k[1], dr)
        };
        gt = {
          rows: ce(hn.rows, to.rows, d.rows, h.rows, I.rows, k[0], ur),
          cols: ce(hn.cols, to.cols, d.cols, h.cols, I.cols, k[1], dr)
        }, at = {
          rows: Ie(hn.rows, gt.rows, h.rows, I.rows, k[0]),
          cols: Ie(hn.cols, gt.cols, h.cols, I.cols, k[1], !0)
        }, Bt = gt.rows !== d.rows || at.rows !== h.rows || gt.cols !== d.cols || at.cols !== h.cols || Re.current, dn = {
          top: Ee,
          left: Ke
        };
      }
    } else {
      var fr = l ? Ke : Ee, pr = pe.current <= fr;
      if (!r.appendOnly || r.appendOnly && pr) {
        var mr = re(fr, r.itemSize), mt = ne(mr, d, h, I, k, pr);
        gt = ce(mr, mt, d, h, I, k, pr), at = Ie(mr, gt, h, I, k), Bt = gt !== d || at !== h || Re.current, dn = fr;
      }
    }
    return {
      first: gt,
      last: at,
      isRangeChanged: Bt,
      scrollPos: dn
    };
  }, Fe = function(T) {
    var D = Ae(T), W = D.first, Z = D.last, re = D.isRangeChanged, ne = D.scrollPos;
    if (re) {
      var ce = {
        first: W,
        last: Z
      };
      if (Ne(ce), m(W), S(Z), pe.current = ne, r.onScrollIndexChange && r.onScrollIndexChange(ce), r.lazy && rt(W)) {
        var Ie = {
          first: r.step ? Math.min(nt(W) * r.step, (r.items || []).length - r.step) : W,
          last: Math.min(r.step ? (nt(W) + 1) * r.step : Z, (r.items || []).length)
        }, Ee = !He.current || He.current.first !== Ie.first || He.current.last !== Ie.last;
        Ee && r.onLazyLoad && r.onLazyLoad(Ie), He.current = Ie;
      }
    }
  }, Xe = function(T) {
    if (r.onScroll && r.onScroll(T), r.delay) {
      if (U.current && clearTimeout(U.current), rt(d)) {
        if (!te && r.showLoader) {
          var D = Ae(T), W = D.isRangeChanged, Z = W || (r.step ? rt(d) : !1);
          Z && me(!0);
        }
        U.current = setTimeout(function() {
          Fe(T), te && r.showLoader && (!r.lazy || r.loading === void 0) && (me(!1), q(nt(d)));
        }, r.delay);
      }
    } else
      Fe(T);
  }, Je = function() {
    j.current && clearTimeout(j.current), j.current = setTimeout(function() {
      if (G.current) {
        var T = [L.getWidth(G.current), L.getHeight(G.current)], D = T[0], W = T[1], Z = D !== F.current, re = W !== qe.current, ne = s ? Z || re : l ? Z : i ? re : !1;
        ne && (X(r.numToleratedItems), F.current = D, qe.current = W, ke.current = L.getWidth(K.current), _e.current = L.getHeight(K.current));
      }
    }, r.resizeDelay);
  }, Ze = function(T) {
    var D = (r.items || []).length, W = s ? d.rows + T : d + T;
    return {
      index: W,
      count: D,
      first: W === 0,
      last: W === D - 1,
      even: W % 2 === 0,
      odd: W % 2 !== 0,
      props: r
    };
  }, Qe = function(T, D) {
    var W = Q.length || 0;
    return Kn({
      index: T,
      count: W,
      first: T === 0,
      last: T === W - 1,
      even: T % 2 === 0,
      odd: T % 2 !== 0,
      props: r
    }, D);
  }, pt = function() {
    var T = r.items;
    return T && !te ? s ? T.slice(r.appendOnly ? 0 : d.rows, h.rows).map(function(D) {
      return r.columns ? D : D.slice(r.appendOnly ? 0 : d.cols, h.cols);
    }) : l && r.columns ? T : T.slice(r.appendOnly ? 0 : d, h) : [];
  }, Ye = function() {
    G.current && L.isVisible(G.current) && (Ht(K.current), wt(), et(), Pt(), F.current = L.getWidth(G.current), qe.current = L.getHeight(G.current), ke.current = L.getWidth(K.current), _e.current = L.getHeight(K.current));
  }, wt = function() {
    r.disabled || (Me(), fe(), lt());
  };
  Zt(function() {
    Ye();
  }), Ue(function() {
    wt();
  }, [r.itemSize, r.scrollHeight, r.scrollWidth]), Ue(function() {
    r.numToleratedItems !== k && X(r.numToleratedItems);
  }, [r.numToleratedItems]), Ue(function() {
    r.numToleratedItems === k && wt();
  }, [k]), Ue(function() {
    var oe = a.items !== void 0 && a.items !== null, T = r.items !== void 0 && r.items !== null, D = oe ? a.items.length : 0, W = T ? r.items.length : 0, Z = D !== W;
    if (s && !Z) {
      var re = oe && a.items.length > 0 ? a.items[0].length : 0, ne = T && r.items.length > 0 ? r.items[0].length : 0;
      Z = re !== ne;
    }
    (!oe || Z) && wt();
    var ce = te;
    r.lazy && a.loading !== r.loading && r.loading !== te && (me(r.loading), ce = r.loading), Te(ce);
  }), Ue(function() {
    pe.current = s ? {
      top: 0,
      left: 0
    } : 0;
  }, [r.orientation]), f.useImperativeHandle(t, function() {
    return {
      props: r,
      getElementRef: Ge,
      scrollTo: ot,
      scrollToIndex: it,
      scrollInView: Lt,
      getRenderedRange: we
    };
  });
  var xt = function(T) {
    var D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, W = Qe(T, D), Z = A.getJSXElement(r.loadingTemplate, W);
    return /* @__PURE__ */ f.createElement(f.Fragment, {
      key: T
    }, Z);
  }, Et = function() {
    var T = "p-virtualscroller-loading-icon", D = e({
      className: T
    }, ae("loadingIcon")), W = r.loadingIcon || /* @__PURE__ */ f.createElement(Ho, Wa({}, D, {
      spin: !0
    })), Z = Yt.getJSXIcon(W, Kn({}, D), {
      props: r
    });
    if (!r.loaderDisabled && r.showLoader && te) {
      var re = ve("p-virtualscroller-loader", {
        "p-component-overlay": !r.loadingTemplate
      }), ne = Z;
      if (r.loadingTemplate)
        ne = Q.map(function(Ee, Ke) {
          return xt(Ke, s && {
            numCols: I.cols
          });
        });
      else if (r.loaderIconTemplate) {
        var ce = {
          iconClassName: T,
          element: ne,
          props: r
        };
        ne = A.getJSXElement(r.loaderIconTemplate, ce);
      }
      var Ie = e({
        className: re
      }, ae("loader"));
      return /* @__PURE__ */ f.createElement("div", Ie, ne);
    }
    return null;
  }, $t = function() {
    if (r.showSpacer) {
      var T = e({
        ref: ue,
        style: le.current,
        className: "p-virtualscroller-spacer"
      }, ae("spacer"));
      return /* @__PURE__ */ f.createElement("div", T);
    }
    return null;
  }, en = function(T, D) {
    var W = Ze(D), Z = A.getJSXElement(r.itemTemplate, T, W);
    return /* @__PURE__ */ f.createElement(f.Fragment, {
      key: W.index
    }, Z);
  }, Ft = function() {
    var T = pt();
    return T.map(en);
  }, Nt = function() {
    var T = Ft(), D = ve("p-virtualscroller-content", {
      "p-virtualscroller-loading": te
    }), W = e({
      ref: K,
      style: $.current,
      className: D
    }, ae("content")), Z = /* @__PURE__ */ f.createElement("div", W, T);
    if (r.contentTemplate) {
      var re = {
        style: $.current,
        className: D,
        spacerStyle: le.current,
        contentRef: function(ce) {
          return K.current = A.getRefElement(ce);
        },
        spacerRef: function(ce) {
          return ue.current = A.getRefElement(ce);
        },
        stickyRef: function(ce) {
          return de.current = A.getRefElement(ce);
        },
        items: pt(),
        getItemOptions: function(ce) {
          return Ze(ce);
        },
        children: T,
        element: Z,
        props: r,
        loading: te,
        getLoaderOptions: function(ce, Ie) {
          return Qe(ce, Ie);
        },
        loadingTemplate: r.loadingTemplate,
        itemSize: r.itemSize,
        rows: ft(),
        columns: vt(),
        vertical: i,
        horizontal: l,
        both: s
      };
      return A.getJSXElement(r.contentTemplate, re);
    }
    return Z;
  };
  if (r.disabled) {
    var Kt = A.getJSXElement(r.contentTemplate, {
      items: r.items,
      rows: r.items,
      columns: r.columns
    });
    return /* @__PURE__ */ f.createElement(f.Fragment, null, r.children, Kt);
  }
  var g = ve("p-virtualscroller", {
    "p-virtualscroller-inline": r.inline,
    "p-virtualscroller-both p-both-scroll": s,
    "p-virtualscroller-horizontal p-horizontal-scroll": l
  }, r.className), O = Et(), H = Nt(), ie = $t(), be = e({
    ref: G,
    className: g,
    tabIndex: r.tabIndex,
    style: r.style,
    onScroll: function(T) {
      return Xe(T);
    }
  }, lo.getOtherProps(r), ae("root"));
  return /* @__PURE__ */ f.createElement("div", be, H, ie, O);
}));
Ss.displayName = "VirtualScroller";
function Va() {
  return Va = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, Va.apply(this, arguments);
}
function Fr(n) {
  "@babel/helpers - typeof";
  return Fr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fr(n);
}
function Gd(n, t) {
  if (Fr(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t || "default");
    if (Fr(o) !== "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function Xd(n) {
  var t = Gd(n, "string");
  return Fr(t) === "symbol" ? t : String(t);
}
function Jd(n, t, e) {
  return t = Xd(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function Zd(n) {
  if (Array.isArray(n)) return n;
}
function Qd(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var o, r, a, i, l = [], s = !0, c = !1;
    try {
      if (a = (e = e.call(n)).next, t !== 0) for (; !(s = (o = a.call(e)).done) && (l.push(o.value), l.length !== t); s = !0) ;
    } catch (u) {
      c = !0, r = u;
    } finally {
      try {
        if (!s && e.return != null && (i = e.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw r;
      }
    }
    return l;
  }
}
function ml(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, o = new Array(t); e < t; e++) o[e] = n[e];
  return o;
}
function ef(n, t) {
  if (n) {
    if (typeof n == "string") return ml(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return ml(n, t);
  }
}
function tf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nf(n, t) {
  return Zd(n) || Qd(n, t) || ef(n, t) || tf();
}
var rf = `
@layer primereact {
    .p-ripple {
        overflow: hidden;
        position: relative;
    }
    
    .p-ink {
        display: block;
        position: absolute;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 100%;
        transform: scale(0);
    }
    
    .p-ink-active {
        animation: ripple 0.4s linear;
    }
    
    .p-ripple-disabled .p-ink {
        display: none;
    }
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}

`, of = {
  root: "p-ink"
}, Xn = je.extend({
  defaultProps: {
    __TYPE: "Ripple",
    children: void 0
  },
  css: {
    styles: rf,
    classes: of
  },
  getProps: function(t) {
    return A.getMergedProps(t, Xn.defaultProps);
  },
  getOtherProps: function(t) {
    return A.getDiffProps(t, Xn.defaultProps);
  }
});
function vl(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function af(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vl(Object(e), !0).forEach(function(o) {
      Jd(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : vl(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
var Mr = /* @__PURE__ */ f.memo(/* @__PURE__ */ f.forwardRef(function(n, t) {
  var e = f.useState(!1), o = nf(e, 2), r = o[0], a = o[1], i = f.useRef(null), l = f.useRef(null), s = Dt(), c = f.useContext(ut), u = Xn.getProps(n, c), d = c && c.ripple || ct.ripple, m = {
    props: u
  };
  Ln(Xn.css.styles, {
    name: "ripple",
    manual: !d
  });
  var v = Xn.setMetaData(af({}, m)), x = v.ptm, h = v.cx, S = function() {
    return i.current && i.current.parentElement;
  }, w = function() {
    l.current && l.current.addEventListener("pointerdown", C);
  }, E = function() {
    l.current && l.current.removeEventListener("pointerdown", C);
  }, C = function(N) {
    var _ = L.getOffset(l.current), k = N.pageX - _.left + document.body.scrollTop - L.getWidth(i.current) / 2, X = N.pageY - _.top + document.body.scrollLeft - L.getHeight(i.current) / 2;
    q(k, X);
  }, q = function(N, _) {
    !i.current || getComputedStyle(i.current, null).display === "none" || (L.removeClass(i.current, "p-ink-active"), P(), i.current.style.top = _ + "px", i.current.style.left = N + "px", L.addClass(i.current, "p-ink-active"));
  }, y = function(N) {
    L.removeClass(N.currentTarget, "p-ink-active");
  }, P = function() {
    if (i.current && !L.getHeight(i.current) && !L.getWidth(i.current)) {
      var N = Math.max(L.getOuterWidth(l.current), L.getOuterHeight(l.current));
      i.current.style.height = N + "px", i.current.style.width = N + "px";
    }
  };
  if (f.useImperativeHandle(t, function() {
    return {
      props: u,
      getInk: function() {
        return i.current;
      },
      getTarget: function() {
        return l.current;
      }
    };
  }), Zt(function() {
    a(!0);
  }), Ue(function() {
    r && i.current && (l.current = S(), P(), w());
  }, [r]), Ue(function() {
    i.current && !l.current && (l.current = S(), P(), w());
  }), cn(function() {
    i.current && (l.current = null, E());
  }), !d)
    return null;
  var I = s({
    "aria-hidden": !0,
    className: ve(h("root"))
  }, Xn.getOtherProps(u), x("root"));
  return /* @__PURE__ */ f.createElement("span", Va({
    role: "presentation",
    ref: i
  }, I, {
    onAnimationEnd: y
  }));
}));
Mr.displayName = "Ripple";
function Ka() {
  return Ka = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, Ka.apply(this, arguments);
}
var vi = /* @__PURE__ */ f.memo(/* @__PURE__ */ f.forwardRef(function(n, t) {
  var e = Wt.getPTI(n);
  return /* @__PURE__ */ f.createElement("svg", Ka({
    ref: t,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e), /* @__PURE__ */ f.createElement("path", {
    d: "M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z",
    fill: "currentColor"
  }));
}));
vi.displayName = "CheckIcon";
function gn() {
  return gn = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, gn.apply(this, arguments);
}
function tr(n) {
  "@babel/helpers - typeof";
  return tr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, tr(n);
}
function lf(n, t) {
  if (tr(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t || "default");
    if (tr(o) !== "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function sf(n) {
  var t = lf(n, "string");
  return tr(t) === "symbol" ? t : String(t);
}
function Wo(n, t, e) {
  return t = sf(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function cf(n) {
  if (Array.isArray(n)) return n;
}
function uf(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var o, r, a, i, l = [], s = !0, c = !1;
    try {
      if (a = (e = e.call(n)).next, t !== 0) for (; !(s = (o = a.call(e)).done) && (l.push(o.value), l.length !== t); s = !0) ;
    } catch (u) {
      c = !0, r = u;
    } finally {
      try {
        if (!s && e.return != null && (i = e.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw r;
      }
    }
    return l;
  }
}
function gl(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, o = new Array(t); e < t; e++) o[e] = n[e];
  return o;
}
function df(n, t) {
  if (n) {
    if (typeof n == "string") return gl(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return gl(n, t);
  }
}
function ff() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yr(n, t) {
  return cf(n) || uf(n, t) || df(n, t) || ff();
}
function hl(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function pf(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hl(Object(e), !0).forEach(function(o) {
      Wo(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : hl(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
var mf = {
  root: function(t) {
    var e = t.props, o = t.focusedState, r = t.overlayVisibleState, a = t.context;
    return ve("p-dropdown p-component p-inputwrapper", {
      "p-disabled": e.disabled,
      "p-invalid": e.invalid,
      "p-focus": o,
      "p-variant-filled": e.variant ? e.variant === "filled" : a && a.inputStyle === "filled",
      "p-dropdown-clearable": e.showClear && !e.disabled,
      "p-inputwrapper-filled": A.isNotEmpty(e.value),
      "p-inputwrapper-focus": o || r
    });
  },
  input: function(t) {
    var e = t.props, o = t.label;
    return e.editable ? "p-dropdown-label p-inputtext" : ve("p-dropdown-label p-inputtext", {
      "p-placeholder": o === null && e.placeholder,
      "p-dropdown-label-empty": o === null && !e.placeholder
    });
  },
  trigger: "p-dropdown-trigger",
  emptyMessage: "p-dropdown-empty-message",
  itemGroup: function(t) {
    var e = t.optionGroupLabel;
    return ve("p-dropdown-item-group", {
      "p-dropdown-item-empty": !e || e.length === 0
    });
  },
  itemGroupLabel: "p-dropdown-item-group-label",
  dropdownIcon: "p-dropdown-trigger-icon p-clickable",
  loadingIcon: "p-dropdown-trigger-icon p-clickable",
  clearIcon: "p-dropdown-clear-icon p-clickable",
  filterIcon: "p-dropdown-filter-icon",
  filterClearIcon: "p-dropdown-filter-clear-icon",
  filterContainer: function(t) {
    var e = t.clearIcon;
    return ve("p-dropdown-filter-container", {
      "p-dropdown-clearable-filter": !!e
    });
  },
  filterInput: function(t) {
    var e = t.props, o = t.context;
    return ve("p-dropdown-filter p-inputtext p-component", {
      "p-variant-filled": e.variant ? e.variant === "filled" : o && o.inputStyle === "filled"
    });
  },
  list: function(t) {
    var e = t.virtualScrollerOptions;
    return "p-dropdown-items";
  },
  panel: function(t) {
    var e = t.context;
    return ve("p-dropdown-panel p-component", {
      "p-input-filled": e && e.inputStyle === "filled" || ct.inputStyle === "filled",
      "p-ripple-disabled": e && e.ripple === !1 || ct.ripple === !1
    });
  },
  item: function(t) {
    var e = t.selected, o = t.disabled, r = t.label, a = t.index, i = t.focusedOptionIndex, l = t.highlightOnSelect;
    return ve("p-dropdown-item", {
      "p-highlight": e && l,
      "p-disabled": o,
      "p-focus": a === i,
      "p-dropdown-item-empty": !r || r.length === 0
    });
  },
  itemLabel: "p-dropdown-item-label",
  checkIcon: "p-dropdown-check-icon",
  blankIcon: "p-dropdown-blank-icon",
  wrapper: "p-dropdown-items-wrapper",
  header: "p-dropdown-header",
  footer: "p-dropdown-footer",
  transition: "p-connected-overlay"
}, vf = `
@layer primereact {
    .p-dropdown {
        display: inline-flex;
        cursor: pointer;
        position: relative;
        user-select: none;
    }
    
    .p-dropdown-trigger {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }
    
    .p-dropdown-label {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        flex: 1 1 auto;
        width: 1%;
        text-overflow: ellipsis;
        cursor: pointer;
    }
    
    .p-dropdown-label-empty {
        overflow: hidden;
        visibility: hidden;
    }
    
    input.p-dropdown-label  {
        cursor: default;
    }
    
    .p-dropdown .p-dropdown-panel {
        min-width: 100%;
    }
    
    .p-dropdown-panel {
        position: absolute;
        top: 0;
        left: 0;
    }
    
    .p-dropdown-items-wrapper {
        overflow: auto;
    }
    
    .p-dropdown-item {
        cursor: pointer;
        font-weight: normal;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
    }
    
    .p-dropdown-items {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
    
    .p-dropdown-filter {
        width: 100%;
    }
    
    .p-dropdown-filter-container {
        position: relative;
    }
    
    .p-dropdown-clear-icon,
    .p-dropdown-filter-icon,
    .p-dropdown-filter-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -.5rem;
        right: 2rem;
    }
    
    .p-fluid .p-dropdown {
        display: flex;
    }
    
    .p-fluid .p-dropdown .p-dropdown-label {
        width: 1%;
    }
}
`, gf = {
  wrapper: function(t) {
    var e = t.props;
    return {
      maxHeight: e.scrollHeight || "auto"
    };
  },
  panel: function(t) {
    var e = t.props;
    return pf({}, e.panelStyle);
  }
}, so = je.extend({
  defaultProps: {
    __TYPE: "Dropdown",
    __parentMetadata: null,
    appendTo: null,
    ariaLabel: null,
    ariaLabelledBy: null,
    autoFocus: !1,
    children: void 0,
    className: null,
    clearIcon: null,
    dataKey: null,
    disabled: !1,
    dropdownIcon: null,
    collapseIcon: null,
    editable: !1,
    emptyFilterMessage: null,
    highlightOnSelect: !0,
    checkmark: !1,
    emptyMessage: null,
    filter: !1,
    filterBy: null,
    filterClearIcon: null,
    filterIcon: null,
    filterInputAutoFocus: !1,
    filterLocale: void 0,
    filterMatchMode: "contains",
    filterPlaceholder: null,
    filterTemplate: null,
    focusInputRef: null,
    id: null,
    inputId: null,
    inputRef: null,
    invalid: !1,
    variant: null,
    itemTemplate: null,
    loading: !1,
    loadingIcon: null,
    maxLength: null,
    name: null,
    onBlur: null,
    onChange: null,
    onContextMenu: null,
    onFilter: null,
    onFocus: null,
    onHide: null,
    onMouseDown: null,
    onShow: null,
    optionDisabled: null,
    optionGroupChildren: "items",
    selectOnFocus: !1,
    focusOnHover: !0,
    autoOptionFocus: !1,
    optionGroupLabel: null,
    optionGroupTemplate: null,
    optionLabel: null,
    optionValue: null,
    options: null,
    panelClassName: null,
    panelFooterTemplate: null,
    panelStyle: null,
    placeholder: null,
    required: !1,
    resetFilterOnHide: !1,
    scrollHeight: "200px",
    showClear: !1,
    showFilterClear: !1,
    showOnFocus: !1,
    style: null,
    tabIndex: null,
    tooltip: null,
    tooltipOptions: null,
    transitionOptions: null,
    value: null,
    valueTemplate: null,
    virtualScrollerOptions: null
  },
  css: {
    classes: mf,
    styles: vf,
    inlineStyles: gf
  }
}), Cs = /* @__PURE__ */ f.memo(/* @__PURE__ */ f.forwardRef(function(n, t) {
  var e = Wt.getPTI(n);
  return /* @__PURE__ */ f.createElement("svg", gn({
    ref: t,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e), /* @__PURE__ */ f.createElement("rect", {
    width: "1",
    height: "1",
    fill: "currentColor",
    fillOpacity: "0"
  }));
}));
Cs.displayName = "BlankIcon";
var Os = /* @__PURE__ */ f.memo(function(n) {
  var t = Dt(), e = n.ptm, o = n.cx, r = n.selected, a = n.disabled, i = n.option, l = n.label, s = n.index, c = n.focusedOptionIndex, u = n.ariaSetSize, d = n.checkmark, m = n.highlightOnSelect, v = n.onInputKeyDown, x = function(y) {
    return e(y, {
      context: {
        selected: r,
        disabled: a,
        focused: s === c
      }
    });
  }, h = function(y, P) {
    n.onClick && n.onClick({
      originalEvent: y,
      option: i
    });
  }, S = n.template ? A.getJSXElement(n.template, n.option) : n.label, w = t({
    id: "dropdownItem_".concat(s),
    role: "option",
    key: n.label,
    className: ve(i.className, o("item", {
      selected: r,
      disabled: a,
      label: l,
      index: s,
      focusedOptionIndex: c,
      highlightOnSelect: m
    })),
    style: n.style,
    tabIndex: 0,
    onClick: function(y) {
      return h(y);
    },
    onKeyDown: function(y) {
      return v(y);
    },
    onMouseMove: function(y) {
      return n == null ? void 0 : n.onMouseMove(y, s);
    },
    "aria-setsize": u,
    "aria-posinset": s + 1,
    "aria-label": l,
    "aria-selected": r,
    "data-p-highlight": r,
    "data-p-focused": c === s,
    "data-p-disabled": a
  }, x("item")), E = t({
    className: o("itemLabel")
  }, x("itemLabel")), C = function() {
    if (r) {
      var y = t({
        className: o("checkIcon")
      }, x("checkIcon"));
      return /* @__PURE__ */ f.createElement(vi, y);
    }
    var P = t({
      className: o("blankIcon")
    }, x("blankIcon"));
    return /* @__PURE__ */ f.createElement(Cs, P);
  };
  return /* @__PURE__ */ f.createElement("li", w, d && C(), /* @__PURE__ */ f.createElement("span", E, S), /* @__PURE__ */ f.createElement(Mr, null));
});
Os.displayName = "DropdownItem";
function bl(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function nn(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bl(Object(e), !0).forEach(function(o) {
      Wo(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : bl(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
var qs = /* @__PURE__ */ f.memo(/* @__PURE__ */ f.forwardRef(function(n, t) {
  var e = Dt(), o = n.ptm, r = n.cx, a = n.sx, i = f.useContext(ut), l = f.useRef(null), s = !(n.visibleOptions && n.visibleOptions.length) && n.hasFilter, c = n.visibleOptions ? n.visibleOptions.length : 0, u = {
    filter: function(_) {
      return x(_);
    },
    reset: function() {
      return n.resetFilter();
    }
  }, d = function(_, k) {
    return o(_, nn({
      hostName: n.hostName
    }, k));
  }, m = function() {
    n.onEnter(function() {
      if (n.virtualScrollerRef.current) {
        var _ = n.getSelectedOptionIndex();
        _ !== -1 && setTimeout(function() {
          return n.virtualScrollerRef.current.scrollToIndex(_);
        }, 0);
      }
    });
  }, v = function() {
    n.onEntered(function() {
      n.filter && n.filterInputAutoFocus && L.focus(l.current, !1);
    });
  }, x = function(_) {
    n.onFilterInputChange && n.onFilterInputChange(_);
  }, h = function() {
    if (n.panelFooterTemplate) {
      var _ = A.getJSXElement(n.panelFooterTemplate, n, n.onOverlayHide), k = e({
        className: r("footer")
      }, d("footer"));
      return /* @__PURE__ */ f.createElement("div", k, _);
    }
    return null;
  }, S = function(_, k) {
    if (n.focusOnHover) {
      var X;
      n == null || (X = n.changeFocusedOptionIndex) === null || X === void 0 || X.call(n, _, k);
    }
  }, w = function(_, k) {
    var X = A.getJSXElement(_, n) || er(k ? "emptyFilterMessage" : "emptyMessage"), M = e({
      className: r("emptyMessage")
    }, d("emptyMessage"));
    return /* @__PURE__ */ f.createElement("li", M, X);
  }, E = function(_, k) {
    var X = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, M = {
      height: X.props ? X.props.itemSize : void 0
    };
    if (M = nn(nn({}, M), _.style), _.group && _.optionGroup && n.optionGroupLabel) {
      var J = n.optionGroupLabel, te = n.optionGroupTemplate ? A.getJSXElement(n.optionGroupTemplate, _, k) : n.getOptionGroupLabel(_), me = k + "_" + n.getOptionGroupRenderKey(_), ye = e({
        className: r("itemGroup", {
          optionGroupLabel: J
        }),
        style: M,
        "data-p-highlight": n.selected
      }, d("itemGroup")), se = e({
        className: r("itemGroupLabel")
      }, d("itemGroupLabel"));
      return /* @__PURE__ */ f.createElement("li", gn({
        key: me
      }, ye), /* @__PURE__ */ f.createElement("span", se, te));
    }
    var Q = n.getOptionRenderKey(_) + "_" + k, R = n.getOptionLabel(_), Y = n.isOptionDisabled(_);
    return /* @__PURE__ */ f.createElement(Os, {
      key: Q,
      label: R,
      index: k,
      focusedOptionIndex: n.focusedOptionIndex,
      option: _,
      ariaSetSize: c,
      onInputKeyDown: n.onInputKeyDown,
      style: M,
      template: n.itemTemplate,
      selected: n.isSelected(_),
      highlightOnSelect: n.highlightOnSelect,
      disabled: Y,
      onClick: n.onOptionClick,
      onMouseMove: S,
      ptm: o,
      cx: r,
      checkmark: n.checkmark
    });
  }, C = function() {
    return A.isNotEmpty(n.visibleOptions) ? n.visibleOptions.map(E) : n.hasFilter ? w(n.emptyFilterMessage, !0) : w(n.emptyMessage);
  }, q = function() {
    if (n.showFilterClear && n.filterValue) {
      var _ = er("clear"), k = e({
        className: r("filterClearIcon"),
        "aria-label": _,
        onClick: function() {
          return n.onFilterClearIconClick(function() {
            return L.focus(l.current);
          });
        }
      }, d("filterClearIcon")), X = n.filterClearIcon || /* @__PURE__ */ f.createElement(Bo, k), M = Yt.getJSXIcon(X, nn({}, k), {
        props: n
      });
      return M;
    }
    return null;
  }, y = function() {
    if (n.filter) {
      var _ = q(), k = e({
        className: r("filterIcon")
      }, d("filterIcon")), X = n.filterIcon || /* @__PURE__ */ f.createElement(xs, k), M = Yt.getJSXIcon(X, nn({}, k), {
        props: n
      }), J = e({
        className: r("filterContainer", {
          clearIcon: _
        })
      }, d("filterContainer")), te = e({
        ref: l,
        type: "text",
        autoComplete: "off",
        className: r("filterInput", {
          context: i
        }),
        placeholder: n.filterPlaceholder,
        onKeyDown: n.onFilterInputKeyDown,
        onChange: function(R) {
          return x(R);
        },
        value: n.filterValue
      }, d("filterInput")), me = /* @__PURE__ */ f.createElement("div", J, /* @__PURE__ */ f.createElement("input", te), _, M);
      if (n.filterTemplate) {
        var ye = {
          className: ve("p-dropdown-filter-container", {
            "p-dropdown-clearable-filter": !!_
          }),
          element: me,
          filterOptions: u,
          filterInputKeyDown: n.onFilterInputKeyDown,
          filterInputChange: x,
          filterIconClassName: "p-dropdown-filter-icon",
          clearIcon: _,
          props: n
        };
        me = A.getJSXElement(n.filterTemplate, ye);
      }
      var se = e({
        className: r("header")
      }, d("header"));
      return /* @__PURE__ */ f.createElement("div", se, me);
    }
    return null;
  }, P = function() {
    if (n.virtualScrollerOptions) {
      var _ = nn(nn({}, n.virtualScrollerOptions), {
        style: nn(nn({}, n.virtualScrollerOptions.style), {
          height: n.scrollHeight
        }),
        className: ve("p-dropdown-items-wrapper", n.virtualScrollerOptions.className),
        items: n.visibleOptions,
        autoSize: !0,
        onLazyLoad: function(te) {
          return n.virtualScrollerOptions.onLazyLoad(nn(nn({}, te), {
            filter: n.filterValue
          }));
        },
        itemTemplate: function(te, me) {
          return te && E(te, me.index, me);
        },
        contentTemplate: function(te) {
          var me = n.hasFilter ? n.emptyFilterMessage : n.emptyMessage, ye = s ? w(me) : te.children, se = e({
            ref: te.contentRef,
            style: te.style,
            className: ve(te.className, r("list", {
              virtualScrollerProps: n.virtualScrollerOptions
            })),
            role: "listbox"
          }, d("list"));
          return /* @__PURE__ */ f.createElement("ul", se, ye);
        }
      });
      return /* @__PURE__ */ f.createElement(Ss, gn({
        ref: n.virtualScrollerRef
      }, _, {
        pt: o("virtualScroller")
      }));
    }
    var k = C(), X = e({
      className: r("wrapper"),
      style: a("wrapper")
    }, d("wrapper")), M = e({
      className: r("list"),
      role: "listbox"
    }, d("list"));
    return /* @__PURE__ */ f.createElement("div", X, /* @__PURE__ */ f.createElement("ul", M, k));
  }, I = function() {
    var _ = y(), k = P(), X = h(), M = e({
      className: ve(n.panelClassName, r("panel", {
        context: i
      })),
      style: a("panel"),
      onClick: n.onClick
    }, d("panel")), J = e({
      classNames: r("transition"),
      in: n.in,
      timeout: {
        enter: 120,
        exit: 100
      },
      options: n.transitionOptions,
      unmountOnExit: !0,
      onEnter: m,
      onEntered: v,
      onExit: n.onExit,
      onExited: n.onExited
    }, d("transition"));
    return /* @__PURE__ */ f.createElement(zo, gn({
      nodeRef: t
    }, J), /* @__PURE__ */ f.createElement("div", gn({
      ref: t
    }, M), n.firstFocusableElement, _, k, X, n.lastFocusableElement));
  }, V = I();
  return /* @__PURE__ */ f.createElement(Xr, {
    element: V,
    appendTo: n.appendTo
  });
}));
qs.displayName = "DropdownPanel";
function hf(n, t) {
  var e = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (!e) {
    if (Array.isArray(n) || (e = bf(n)) || t) {
      e && (n = e);
      var o = 0, r = function() {
      };
      return { s: r, n: function() {
        return o >= n.length ? { done: !0 } : { done: !1, value: n[o++] };
      }, e: function(c) {
        throw c;
      }, f: r };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a = !0, i = !1, l;
  return { s: function() {
    e = e.call(n);
  }, n: function() {
    var c = e.next();
    return a = c.done, c;
  }, e: function(c) {
    i = !0, l = c;
  }, f: function() {
    try {
      !a && e.return != null && e.return();
    } finally {
      if (i) throw l;
    }
  } };
}
function bf(n, t) {
  if (n) {
    if (typeof n == "string") return yl(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return yl(n, t);
  }
}
function yl(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, o = new Array(t); e < t; e++) o[e] = n[e];
  return o;
}
function wl(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function mn(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wl(Object(e), !0).forEach(function(o) {
      Wo(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : wl(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
var gi = /* @__PURE__ */ f.memo(/* @__PURE__ */ f.forwardRef(function(n, t) {
  var e = Dt(), o = f.useContext(ut), r = so.getProps(n, o), a = f.useState(""), i = yr(a, 2), l = i[0], s = i[1], c = f.useState(!1), u = yr(c, 2), d = u[0], m = u[1], v = f.useState(-1), x = yr(v, 2), h = x[0], S = x[1], w = f.useState(!1), E = yr(w, 2), C = E[0], q = E[1], y = f.useRef(!1), P = f.useRef(null), I = f.useRef(null), V = f.useRef(null), N = f.useRef(null), _ = f.useRef(r.inputRef), k = f.useRef(r.focusInputRef), X = f.useRef(null), M = f.useRef(null), J = f.useRef(null), te = r.virtualScrollerOptions && r.virtualScrollerOptions.lazy, me = A.isNotEmpty(l), ye = r.appendTo || o && o.appendTo || ct.appendTo, se = so.setMetaData(mn(mn({
    props: r
  }, r.__parentMetadata), {}, {
    state: {
      filter: l,
      focused: d,
      overlayVisible: C
    }
  })), Q = se.ptm, R = se.cx, Y = se.sx, ae = se.isUnstyled;
  Qt(so.css.styles, ae, {
    name: "dropdown"
  });
  var G = au({
    target: P,
    overlay: I,
    listener: function(b, B) {
      var he = B.type, Ve = B.valid;
      Ve && (he === "outside" ? !le(b) && O() : O());
    },
    when: C
  }), K = yr(G, 2), ue = K[0], de = K[1], pe = function(b) {
    return (b || []).reduce(function(B, he, Ve) {
      B.push({
        optionGroup: he,
        group: !0,
        index: Ve,
        code: he.code,
        label: he.label
      });
      var st = at(he);
      return st && st.forEach(function(Bn) {
        return B.push(Bn);
      }), B;
    }, []);
  }, U = function() {
    var b = r.optionGroupLabel ? pe(r.options) : r.options;
    if (me && !te) {
      var B = l.trim().toLocaleLowerCase(r.filterLocale), he = r.filterBy ? r.filterBy.split(",") : [r.optionLabel || "label"];
      if (r.optionGroupLabel) {
        var Ve = [], st = hf(r.options), Bn;
        try {
          for (st.s(); !(Bn = st.n()).done; ) {
            var Pi = Bn.value, ra = Mi.filter(at(Pi), he, B, r.filterMatchMode, r.filterLocale);
            ra && ra.length && Ve.push(mn(mn({}, Pi), Wo({}, "".concat(r.optionGroupChildren), ra)));
          }
        } catch (vc) {
          st.e(vc);
        } finally {
          st.f();
        }
        return pe(Ve);
      }
      return Mi.filter(b, he, B, r.filterMatchMode, r.filterLocale);
    }
    return b;
  }, j = function(b) {
    var B = b.relatedTarget === k.current ? L.getFirstFocusableElement(I.current, ':not([data-p-hidden-focusable="true"])') : k.current;
    L.focus(B);
  }, $ = function(b) {
    var B = b.relatedTarget === k.current ? L.getLastFocusableElement(I.current, ':not([data-p-hidden-focusable="true"])') : k.current;
    L.focus(B);
  }, le = function(b) {
    return L.isAttributeEquals(b.target, "data-pc-section", "clearicon") || L.isAttributeEquals(b.target.parentElement || b.target, "data-pc-section", "filterclearicon");
  }, F = function(b) {
    r.disabled || r.loading || (r.onClick && r.onClick(b), !b.defaultPrevented && (le(b) || b.target.tagName === "INPUT" || ((!I.current || !(I.current && I.current.contains(b.target))) && (L.focus(k.current), C ? O() : g()), y.current = !0)));
  }, qe = function(b) {
    r.showOnFocus && !C && g(), m(!0), r.onFocus && r.onFocus(b);
  }, ke = function(b) {
    m(!1), r.onBlur && setTimeout(function() {
      var B = _.current ? _.current.value : void 0;
      r.onBlur({
        originalEvent: b.originalEvent,
        value: B,
        stopPropagation: function() {
          b.originalEvent.stopPropagation();
        },
        preventDefault: function() {
          b.originalEvent.preventDefault();
        },
        target: {
          name: r.name,
          id: r.id,
          value: B
        }
      });
    }, 200);
  }, _e = function(b, B) {
    var he = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, Ve = ne(B);
    $t({
      originalEvent: b,
      option: Ve
    }), he && O();
  }, Re = function(b) {
    Fn.emit("overlay-click", {
      originalEvent: b,
      target: P.current
    });
  }, He = function(b) {
    if (r.disabled) {
      b.preventDefault();
      return;
    }
    var B = b.metaKey || b.ctrlKey, he = L.isAndroid() ? b.key : b.code;
    switch (he) {
      case "ArrowDown":
        z(b);
        break;
      case "ArrowUp":
        fe(b);
        break;
      case "ArrowLeft":
      case "ArrowRight":
        Te(b, r.editable);
        break;
      case "Home":
        Ce(b);
        break;
      case "End":
        Oe(b);
        break;
      case "PageDown":
        lt(b);
        break;
      case "PageUp":
        Me(b);
        break;
      case "Space":
        Ne(b, r.editable);
        break;
      case "NumpadEnter":
      case "Enter":
        Ae(b);
        break;
      case "Escape":
        Fe(b);
        break;
      case "Tab":
        Xe(b);
        break;
      case "Backspace":
        Je(b, r.editable);
        break;
      case "ShiftLeft":
      case "ShiftRight":
        break;
      default:
        !B && A.isPrintableCharacter(b.key) && (!C && !r.editable && g(), !r.editable && Ht(b, b.key));
        break;
    }
    y.current = !1;
  }, qt = function(b) {
    switch (b.code) {
      case "ArrowDown":
        z(b);
        break;
      case "ArrowUp":
        fe(b);
        break;
      case "ArrowLeft":
      case "ArrowRight":
        Te(b, !0);
        break;
      case "Escape":
      case "Enter":
      case "NumpadEnter":
        Ae(b), b.preventDefault();
        break;
    }
  }, dt = function() {
    return L.getFocusableElements(I.current, ':not([data-p-hidden-focusable="true"])').length > 0;
  }, et = function(b) {
    var B;
    return tt(b) && ((B = re(b)) === null || B === void 0 ? void 0 : B.toLocaleLowerCase(r.filterLocale).startsWith(J.current.toLocaleLowerCase(r.filterLocale)));
  }, tt = function(b) {
    return A.isNotEmpty(b) && !(Ee(b) || Ie(b));
  }, yt = function() {
    return A.isNotEmpty(r.value);
  }, Pt = function(b) {
    return tt(b) && Kt(b);
  }, Ge = function() {
    return yt ? mt.findIndex(function(b) {
      return Pt(b);
    }) : -1;
  }, nt = function() {
    var b = Ge();
    return b < 0 ? ot() : b;
  }, Ht = function(b, B) {
    J.current = (J.current || "") + B;
    var he = -1, Ve = !1;
    return A.isNotEmpty(J.current) && (h !== -1 ? (he = mt.slice(h).findIndex(function(st) {
      return et(st);
    }), he = he === -1 ? mt.slice(0, h).findIndex(function(st) {
      return et(st);
    }) : he + h) : he = mt.findIndex(function(st) {
      return et(st);
    }), he !== -1 && (Ve = !0), he === -1 && h === -1 && (he = nt()), he !== -1 && vt(b, he)), M.current && clearTimeout(M.current), M.current = setTimeout(function() {
      J.current = "", M.current = null;
    }, 500), Ve;
  }, rt = function() {
    var b = Ge();
    return b < 0 ? it() : b;
  }, ot = function() {
    return mt.findIndex(function(b) {
      return tt(b);
    });
  }, it = function() {
    return A.findLastIndex(mt, function(b) {
      return tt(b);
    });
  }, Lt = function(b) {
    var B = b < mt.length - 1 ? mt.slice(b + 1).findIndex(function(he) {
      return tt(he);
    }) : -1;
    return B > -1 ? B + b + 1 : b;
  }, ft = function(b) {
    var B = b > 0 ? A.findLastIndex(mt.slice(0, b), function(he) {
      return tt(he);
    }) : -1;
    return B > -1 ? B : b;
  }, vt = function(b, B) {
    h !== B && (S(B), we(B), r.selectOnFocus && _e(b, mt[B], !1));
  }, we = function(b) {
    var B = L.findSingle(I.current, 'li[id="dropdownItem_'.concat(b, '"]'));
    B && B.focus();
  }, z = function(b) {
    if (!C)
      g(), r.editable && vt(b, Ge());
    else {
      var B = h !== -1 ? Lt(h) : y.current ? ot() : nt();
      vt(b, B);
    }
    b.preventDefault();
  }, fe = function(b) {
    var B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (b.altKey && !B)
      h !== -1 && _e(b, mt[h]), state.overlayVisible && O(), b.preventDefault();
    else {
      var he = h !== -1 ? ft(h) : y.current ? it() : rt();
      vt(b, he), !C && g(), b.preventDefault();
    }
  }, Te = function(b) {
    var B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    B && S(-1);
  }, Ce = function(b) {
    var B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    B ? (b.currentTarget.setSelectionRange(0, 0), S(-1)) : (vt(b, ot()), !C && g()), b.preventDefault();
  }, Oe = function(b) {
    var B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (B) {
      var he = b.currentTarget, Ve = he.value.length;
      he.setSelectionRange(Ve, Ve), S(-1);
    } else
      vt(b, it()), !C && g();
    b.preventDefault();
  }, Me = function(b) {
    b.preventDefault();
  }, lt = function(b) {
    b.preventDefault();
  }, Ne = function(b) {
    var B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    !B && Ae(b);
  }, Ae = function(b) {
    C ? (h !== -1 && _e(b, mt[h]), O()) : (S(-1), z(b)), b.preventDefault();
  }, Fe = function(b) {
    C && O(), b.preventDefault();
  }, Xe = function(b) {
    var B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    B || (C && !dt() ? (L.focus(V.current), b.preventDefault()) : (h !== -1 && _e(b, mt[h]), C && O()));
  }, Je = function(b) {
    var B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    b && B && !C && g();
  }, Ze = function(b) {
    !C && g();
    var B = null;
    b.target.value && mt && (B = mt.findIndex(function(he) {
      return re(he).toLocaleLowerCase().startsWith(b.target.value.toLocaleLowerCase());
    })), S(B), r.onChange && r.onChange({
      originalEvent: b.originalEvent,
      value: b.target.value,
      stopPropagation: function() {
        b.originalEvent.stopPropagation();
      },
      preventDefault: function() {
        b.originalEvent.preventDefault();
      },
      target: {
        name: r.name,
        id: r.id,
        value: b.target.value
      }
    });
  }, Qe = function(b) {
    m(!0), O(), r.onFocus && r.onFocus(b);
  }, pt = function(b) {
    var B = b.option;
    B.disabled || ($t(b), L.focus(k.current)), O();
  }, Ye = function(b) {
    var B = b.target.value;
    s(B), r.onFilter && r.onFilter({
      originalEvent: b,
      filter: B
    });
  }, wt = function(b) {
    xt(b);
  }, xt = function(b) {
    s(""), r.onFilter && r.onFilter({
      filter: ""
    }), b && b();
  }, Et = function(b) {
    r.onChange && r.onChange({
      originalEvent: b,
      value: void 0,
      stopPropagation: function() {
        b == null || b.stopPropagation();
      },
      preventDefault: function() {
        b == null || b.preventDefault();
      },
      target: {
        name: r.name,
        id: r.id,
        value: void 0
      }
    }), r.filter && xt(), Z();
  }, $t = function(b) {
    if (It !== b.option) {
      Z(b.option), S(-1);
      var B = ne(b.option), he = Nt(b.option, mt);
      r.onChange && r.onChange({
        originalEvent: b.originalEvent,
        value: B,
        stopPropagation: function() {
          b.originalEvent.stopPropagation();
        },
        preventDefault: function() {
          b.originalEvent.preventDefault();
        },
        target: {
          name: r.name,
          id: r.id,
          value: B
        }
      }), vt(b.originalEvent, he);
    }
  }, en = function(b) {
    if (b = b || mt, r.value != null && b)
      if (r.optionGroupLabel)
        for (var B = 0; B < b.length; B++) {
          var he = Nt(r.value, at(b[B]));
          if (he !== -1)
            return {
              group: B,
              option: he
            };
        }
      else
        return Nt(r.value, b);
    return -1;
  }, Ft = function() {
    return r.optionValue ? null : r.dataKey;
  }, Nt = function(b, B) {
    var he = Ft();
    return B.findIndex(function(Ve) {
      return A.equals(b, ne(Ve), he);
    });
  }, Kt = function(b) {
    return A.equals(r.value, ne(b), Ft());
  }, g = function() {
    S(h !== -1 ? h : r.autoOptionFocus ? nt() : r.editable ? -1 : Ge()), q(!0);
  }, O = function() {
    q(!1), y.current = !1;
  }, H = function() {
    r.editable && !C && y.current === !1 && L.focus(_.current);
  }, ie = function(b) {
    rn.set("overlay", I.current, o && o.autoZIndex || ct.autoZIndex, o && o.zIndex.overlay || ct.zIndex.overlay), L.addStyles(I.current, {
      position: "absolute",
      top: "0",
      left: "0"
    }), D(), b && b();
  }, be = function(b) {
    b && b(), ue(), r.onShow && r.onShow();
  }, oe = function() {
    de();
  }, T = function() {
    r.filter && r.resetFilterOnHide && xt(), rn.clear(I.current), r.onHide && r.onHide();
  }, D = function() {
    L.alignOverlay(I.current, _.current.parentElement, r.appendTo || o && o.appendTo || ct.appendTo);
  }, W = function() {
    var b = L.findSingle(I.current, 'li[data-p-focused="true"]');
    if (b && b.scrollIntoView)
      b.scrollIntoView({
        block: "nearest",
        inline: "nearest"
      });
    else {
      var B = L.findSingle(I.current, 'li[data-p-highlight="true"]');
      B && B.scrollIntoView && B.scrollIntoView({
        block: "nearest",
        inline: "nearest"
      });
    }
  }, Z = function(b) {
    _.current && (_.current.value = b ? re(b) : r.value || "", k.current && (k.current.value = _.current.value));
  }, re = function(b) {
    if (A.isScalar(b))
      return "".concat(b);
    var B = r.optionLabel ? A.resolveFieldData(b, r.optionLabel) : b.label;
    return "".concat(B);
  }, ne = function(b) {
    if (r.useOptionAsValue)
      return b;
    var B = r.optionValue ? A.resolveFieldData(b, r.optionValue) : b ? b.value : A.resolveFieldData(b, "value");
    return r.optionValue || A.isNotEmpty(B) ? B : b;
  }, ce = function(b) {
    return r.dataKey ? A.resolveFieldData(b, r.dataKey) : re(b);
  }, Ie = function(b) {
    return r.optionGroupLabel && b.optionGroup && b.group;
  }, Ee = function(b) {
    return r.optionDisabled ? A.isFunction(r.optionDisabled) ? r.optionDisabled(b) : A.resolveFieldData(b, r.optionDisabled) : b && b.disabled !== void 0 ? b.disabled : !1;
  }, Ke = function(b) {
    return A.resolveFieldData(b, r.optionGroupLabel);
  }, gt = function(b) {
    return A.resolveFieldData(b, r.optionGroupLabel);
  }, at = function(b) {
    return A.resolveFieldData(b, r.optionGroupChildren);
  }, Bt = function() {
    if (r.editable && _.current) {
      var b = It ? re(It) : null, B = b || r.value || "";
      _.current.value = B, k.current && (k.current.value = B);
    }
  }, dn = function() {
    var b = en(r.options);
    return b !== -1 ? r.optionGroupLabel ? at(r.options[b.group])[b.option] : r.options[b] : null;
  };
  f.useImperativeHandle(t, function() {
    return {
      props: r,
      show: g,
      hide: O,
      clear: Et,
      focus: function() {
        return L.focus(k.current);
      },
      getElement: function() {
        return P.current;
      },
      getOverlay: function() {
        return I.current;
      },
      getInput: function() {
        return _.current;
      },
      getFocusInput: function() {
        return k.current;
      },
      getVirtualScroller: function() {
        return X.current;
      }
    };
  }), f.useEffect(function() {
    A.combinedRefs(_, r.inputRef), A.combinedRefs(k, r.focusInputRef);
  }, [_, r.inputRef, k, r.focusInputRef]), Zt(function() {
    r.autoFocus && L.focus(k.current, r.autoFocus), D();
  }), Ue(function() {
    C && (r.value || h >= 0) && W();
  }, [C, r.value, h]), Ue(function() {
    C && l && r.filter && D();
  }, [C, l, r.filter]), Ue(function() {
    X.current && X.current.scrollInView(0);
  }, [l]), Ue(function() {
    l && (!r.options || r.options.length === 0) && s(""), Bt(), _.current && (_.current.selectedIndex = 1);
  }), cn(function() {
    rn.clear(I.current);
  });
  var ur = function() {
    var b = {
      value: "",
      label: r.placeholder
    };
    if (It) {
      var B = ne(It);
      b = {
        value: tr(B) === "object" ? r.options.findIndex(function(Bn) {
          return Bn === B;
        }) : B,
        label: re(It)
      };
    }
    var he = e({
      className: "p-hidden-accessible p-dropdown-hidden-select"
    }, Q("hiddenSelectedMessage")), Ve = e({
      ref: _,
      required: r.required,
      defaultValue: b.value,
      name: r.name,
      tabIndex: -1,
      "aria-hidden": "true"
    }, Q("select")), st = e({
      value: b.value
    }, Q("option"));
    return /* @__PURE__ */ f.createElement("div", he, /* @__PURE__ */ f.createElement("select", Ve, /* @__PURE__ */ f.createElement("option", st, b.label)));
  }, dr = function() {
    var b = A.isNotEmpty(It) ? re(It) : null;
    r.editable && (b = b || r.value || "");
    var B = e({
      className: "p-hidden-accessible"
    }, Q("hiddenSelectedMessage")), he = e(mn({
      ref: k,
      id: r.inputId,
      defaultValue: b,
      type: "text",
      readOnly: !0,
      "aria-haspopup": "listbox",
      onFocus: qe,
      onBlur: ke,
      onKeyDown: He,
      disabled: r.disabled,
      tabIndex: r.disabled ? -1 : r.tabIndex || 0
    }, bn), Q("input"));
    return /* @__PURE__ */ f.createElement("div", B, /* @__PURE__ */ f.createElement("input", he));
  }, hn = function() {
    var b = A.isNotEmpty(It) ? re(It) : null;
    if (r.editable) {
      var B = b || r.value || "", he = e(mn({
        ref: _,
        type: "text",
        defaultValue: B,
        className: R("input", {
          label: b
        }),
        disabled: r.disabled,
        placeholder: r.placeholder,
        maxLength: r.maxLength,
        onInput: Ze,
        onFocus: Qe,
        onKeyDown: He,
        onBlur: ke,
        tabIndex: r.disabled ? -1 : r.tabIndex || 0,
        "aria-haspopup": "listbox"
      }, bn), Q("input"));
      return /* @__PURE__ */ f.createElement("input", he);
    }
    var Ve = r.valueTemplate ? A.getJSXElement(r.valueTemplate, It, r) : b || r.placeholder || r.emptyMessage || /* @__PURE__ */ f.createElement(f.Fragment, null, " "), st = e({
      ref: _,
      className: R("input", {
        label: b
      }),
      tabIndex: "-1"
    }, Q("input"));
    return /* @__PURE__ */ f.createElement("span", st, Ve);
  }, to = function(b) {
    (b.key === "Enter" || b.code === "Space") && (Et(b), b.preventDefault());
  }, fr = function() {
    if (r.value != null && r.showClear && !r.disabled && !A.isEmpty(r.options)) {
      var b = e({
        className: R("clearIcon"),
        onPointerUp: Et,
        tabIndex: r.tabIndex || "0",
        onKeyDown: to,
        "aria-label": er("clear")
      }, Q("clearIcon")), B = r.clearIcon || /* @__PURE__ */ f.createElement(Bo, b);
      return Yt.getJSXIcon(B, mn({}, b), {
        props: r
      });
    }
    return null;
  }, pr = function() {
    var b = e({
      className: R("loadingIcon"),
      "data-pr-overlay-visible": C
    }, Q("loadingIcon")), B = r.loadingIcon || /* @__PURE__ */ f.createElement(Ho, {
      spin: !0
    }), he = Yt.getJSXIcon(B, mn({}, b), {
      props: r
    }), Ve = r.placeholder || r.ariaLabel, st = e({
      className: R("trigger"),
      role: "button",
      "aria-haspopup": "listbox",
      "aria-expanded": C,
      "aria-label": Ve
    }, Q("trigger"));
    return /* @__PURE__ */ f.createElement("div", st, he);
  }, mr = function() {
    var b = e({
      className: R("dropdownIcon"),
      "data-pr-overlay-visible": C
    }, Q("dropdownIcon")), B = C ? r.collapseIcon || /* @__PURE__ */ f.createElement(ws, b) : r.dropdownIcon || /* @__PURE__ */ f.createElement(mi, b), he = Yt.getJSXIcon(B, mn({}, b), {
      props: r
    }), Ve = r.placeholder || r.ariaLabel, st = e({
      className: R("trigger"),
      role: "button",
      "aria-haspopup": "listbox",
      "aria-expanded": C,
      "aria-label": Ve
    }, Q("trigger"));
    return /* @__PURE__ */ f.createElement("div", st, he);
  }, mt = U(), It = dn(), ht = A.isNotEmpty(r.tooltip), Mt = so.getOtherProps(r), bn = A.reduceKeys(Mt, L.ARIA_PROPS), Hn = ur(), tn = dr(), fn = hn(), Rn = r.loading ? pr() : mr(), dc = fr(), fc = e({
    id: r.id,
    ref: P,
    className: ve(r.className, R("root", {
      context: o,
      focusedState: d,
      overlayVisibleState: C
    })),
    style: r.style,
    onClick: function(b) {
      return F(b);
    },
    onMouseDown: r.onMouseDown,
    onContextMenu: r.onContextMenu,
    onFocus: H,
    "data-p-disabled": r.disabled,
    "data-p-focus": d,
    "aria-activedescendant": d ? "dropdownItem_".concat(h) : void 0
  }, Mt, Q("root")), pc = e({
    ref: V,
    role: "presentation",
    "aria-hidden": "true",
    className: "p-hidden-accessible p-hidden-focusable",
    tabIndex: "0",
    onFocus: j,
    "data-p-hidden-accessible": !0,
    "data-p-hidden-focusable": !0
  }, Q("hiddenFirstFocusableEl")), mc = e({
    ref: N,
    role: "presentation",
    "aria-hidden": "true",
    className: "p-hidden-accessible p-hidden-focusable",
    tabIndex: "0",
    onFocus: $,
    "data-p-hidden-accessible": !0,
    "data-p-hidden-focusable": !0
  }, Q("hiddenLastFocusableEl"));
  return /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement("div", fc, tn, Hn, fn, dc, Rn, /* @__PURE__ */ f.createElement(qs, gn({
    hostName: "Dropdown",
    ref: I,
    visibleOptions: mt,
    virtualScrollerRef: X
  }, r, {
    appendTo: ye,
    cx: R,
    filterValue: l,
    focusedOptionIndex: h,
    getOptionGroupChildren: at,
    getOptionGroupLabel: gt,
    getOptionGroupRenderKey: Ke,
    getOptionLabel: re,
    getOptionRenderKey: ce,
    getSelectedOptionIndex: en,
    hasFilter: me,
    in: C,
    isOptionDisabled: Ee,
    isSelected: Kt,
    onClick: Re,
    onEnter: ie,
    onEntered: be,
    onExit: oe,
    onExited: T,
    onFilterClearIconClick: wt,
    onFilterInputChange: Ye,
    onFilterInputKeyDown: qt,
    onOptionClick: pt,
    onInputKeyDown: He,
    ptm: Q,
    resetFilter: xt,
    changeFocusedOptionIndex: vt,
    firstFocusableElement: /* @__PURE__ */ f.createElement("span", pc),
    lastFocusableElement: /* @__PURE__ */ f.createElement("span", mc),
    sx: Y
  }))), ht && /* @__PURE__ */ f.createElement(rr, gn({
    target: P,
    content: r.tooltip,
    pt: Q("tooltip")
  }, r.tooltipOptions)));
}));
gi.displayName = "Dropdown";
const yf = ({ item: n, onChange: t, config: e }) => {
  const [o, r] = xe({ ...Cn, ...n }), [a, i] = xe(o.options);
  ge(() => {
    r({ ...Cn, ...n });
  }, [n]), ge(() => {
    if (i(o.options), o.source != "local") {
      const c = e.external_select_options.find((u) => u.key == o.source);
      c && (c.options && i(c.options), c.options_func && c.options_func().then((u) => {
        i(u);
      }));
    }
  }, [o.source, o.options]);
  const l = (c) => {
    const u = { ...Cn, ...n, value: c.target.value };
    t(u);
  }, s = Math.random().toString(36).substring(2, 15);
  return /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsx("article", { children: /* @__PURE__ */ p.jsxs("div", { className: "flex flex-column gap-2", children: [
    /* @__PURE__ */ p.jsx("label", { htmlFor: s, children: o.label }),
    /* @__PURE__ */ p.jsx(
      gi,
      {
        id: s,
        value: o.value || "",
        onChange: l,
        options: a,
        showClear: !0,
        placeholder: o.placeholder || "",
        className: "w-full",
        children: " "
      }
    )
  ] }) }) });
}, wf = (n) => ({});
var xl;
function Ua() {
  return Ua = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e) ({}).hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, Ua.apply(null, arguments);
}
var xf = function(t) {
  return /* @__PURE__ */ f.createElement("svg", Ua({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, t), xl || (xl = /* @__PURE__ */ f.createElement("path", {
    d: "M384 432c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16zm64-16c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64zm-224-64c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4h208c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7"
  })));
};
function Gt(n) {
  return JSON.parse(JSON.stringify(n));
}
function Ef() {
  for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++)
    t[e] = arguments[e];
  return Be(
    () => (o) => {
      t.forEach((r) => r(o));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  );
}
const Vo = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function or(n) {
  const t = Object.prototype.toString.call(n);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function hi(n) {
  return "nodeType" in n;
}
function At(n) {
  var t, e;
  return n ? or(n) ? n : hi(n) && (t = (e = n.ownerDocument) == null ? void 0 : e.defaultView) != null ? t : window : window;
}
function bi(n) {
  const {
    Document: t
  } = At(n);
  return n instanceof t;
}
function Jr(n) {
  return or(n) ? !1 : n instanceof At(n).HTMLElement;
}
function Ps(n) {
  return n instanceof At(n).SVGElement;
}
function ar(n) {
  return n ? or(n) ? n.document : hi(n) ? bi(n) ? n : Jr(n) || Ps(n) ? n.ownerDocument : document : document : document;
}
const Xt = Vo ? gc : ge;
function Ko(n) {
  const t = ze(n);
  return Xt(() => {
    t.current = n;
  }), kt(function() {
    for (var e = arguments.length, o = new Array(e), r = 0; r < e; r++)
      o[r] = arguments[r];
    return t.current == null ? void 0 : t.current(...o);
  }, []);
}
function Sf() {
  const n = ze(null), t = kt((o, r) => {
    n.current = setInterval(o, r);
  }, []), e = kt(() => {
    n.current !== null && (clearInterval(n.current), n.current = null);
  }, []);
  return [t, e];
}
function zr(n, t) {
  t === void 0 && (t = [n]);
  const e = ze(n);
  return Xt(() => {
    e.current !== n && (e.current = n);
  }, t), e;
}
function Zr(n, t) {
  const e = ze();
  return Be(
    () => {
      const o = n(e.current);
      return e.current = o, o;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
function To(n) {
  const t = Ko(n), e = ze(null), o = kt(
    (r) => {
      r !== e.current && (t == null || t(r, e.current)), e.current = r;
    },
    //eslint-disable-next-line
    []
  );
  return [e, o];
}
function Io(n) {
  const t = ze();
  return ge(() => {
    t.current = n;
  }, [n]), t.current;
}
let ma = {};
function Qr(n, t) {
  return Be(() => {
    if (t)
      return t;
    const e = ma[n] == null ? 0 : ma[n] + 1;
    return ma[n] = e, n + "-" + e;
  }, [n, t]);
}
function Ts(n) {
  return function(t) {
    for (var e = arguments.length, o = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
      o[r - 1] = arguments[r];
    return o.reduce((a, i) => {
      const l = Object.entries(i);
      for (const [s, c] of l) {
        const u = a[s];
        u != null && (a[s] = u + n * c);
      }
      return a;
    }, {
      ...t
    });
  };
}
const Zn = /* @__PURE__ */ Ts(1), Hr = /* @__PURE__ */ Ts(-1);
function Cf(n) {
  return "clientX" in n && "clientY" in n;
}
function Uo(n) {
  if (!n)
    return !1;
  const {
    KeyboardEvent: t
  } = At(n.target);
  return t && n instanceof t;
}
function Of(n) {
  if (!n)
    return !1;
  const {
    TouchEvent: t
  } = At(n.target);
  return t && n instanceof t;
}
function _o(n) {
  if (Of(n)) {
    if (n.touches && n.touches.length) {
      const {
        clientX: t,
        clientY: e
      } = n.touches[0];
      return {
        x: t,
        y: e
      };
    } else if (n.changedTouches && n.changedTouches.length) {
      const {
        clientX: t,
        clientY: e
      } = n.changedTouches[0];
      return {
        x: t,
        y: e
      };
    }
  }
  return Cf(n) ? {
    x: n.clientX,
    y: n.clientY
  } : null;
}
const Jt = /* @__PURE__ */ Object.freeze({
  Translate: {
    toString(n) {
      if (!n)
        return;
      const {
        x: t,
        y: e
      } = n;
      return "translate3d(" + (t ? Math.round(t) : 0) + "px, " + (e ? Math.round(e) : 0) + "px, 0)";
    }
  },
  Scale: {
    toString(n) {
      if (!n)
        return;
      const {
        scaleX: t,
        scaleY: e
      } = n;
      return "scaleX(" + t + ") scaleY(" + e + ")";
    }
  },
  Transform: {
    toString(n) {
      if (n)
        return [Jt.Translate.toString(n), Jt.Scale.toString(n)].join(" ");
    }
  },
  Transition: {
    toString(n) {
      let {
        property: t,
        duration: e,
        easing: o
      } = n;
      return t + " " + e + "ms " + o;
    }
  }
}), El = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function qf(n) {
  return n.matches(El) ? n : n.querySelector(El);
}
const Pf = {
  display: "none"
};
function Tf(n) {
  let {
    id: t,
    value: e
  } = n;
  return Se.createElement("div", {
    id: t,
    style: Pf
  }, e);
}
function If(n) {
  let {
    id: t,
    announcement: e,
    ariaLiveType: o = "assertive"
  } = n;
  const r = {
    position: "fixed",
    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    clipPath: "inset(100%)",
    whiteSpace: "nowrap"
  };
  return Se.createElement("div", {
    id: t,
    style: r,
    role: "status",
    "aria-live": o,
    "aria-atomic": !0
  }, e);
}
function _f() {
  const [n, t] = xe("");
  return {
    announce: kt((o) => {
      o != null && t(o);
    }, []),
    announcement: n
  };
}
const Is = /* @__PURE__ */ Gr(null);
function kf(n) {
  const t = ln(Is);
  ge(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(n);
  }, [n, t]);
}
function Rf() {
  const [n] = xe(() => /* @__PURE__ */ new Set()), t = kt((o) => (n.add(o), () => n.delete(o)), [n]);
  return [kt((o) => {
    let {
      type: r,
      event: a
    } = o;
    n.forEach((i) => {
      var l;
      return (l = i[r]) == null ? void 0 : l.call(i, a);
    });
  }, [n]), t];
}
const jf = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, Df = {
  onDragStart(n) {
    let {
      active: t
    } = n;
    return "Picked up draggable item " + t.id + ".";
  },
  onDragOver(n) {
    let {
      active: t,
      over: e
    } = n;
    return e ? "Draggable item " + t.id + " was moved over droppable area " + e.id + "." : "Draggable item " + t.id + " is no longer over a droppable area.";
  },
  onDragEnd(n) {
    let {
      active: t,
      over: e
    } = n;
    return e ? "Draggable item " + t.id + " was dropped over droppable area " + e.id : "Draggable item " + t.id + " was dropped.";
  },
  onDragCancel(n) {
    let {
      active: t
    } = n;
    return "Dragging was cancelled. Draggable item " + t.id + " was dropped.";
  }
};
function Nf(n) {
  let {
    announcements: t = Df,
    container: e,
    hiddenTextDescribedById: o,
    screenReaderInstructions: r = jf
  } = n;
  const {
    announce: a,
    announcement: i
  } = _f(), l = Qr("DndLiveRegion"), [s, c] = xe(!1);
  if (ge(() => {
    c(!0);
  }, []), kf(Be(() => ({
    onDragStart(d) {
      let {
        active: m
      } = d;
      a(t.onDragStart({
        active: m
      }));
    },
    onDragMove(d) {
      let {
        active: m,
        over: v
      } = d;
      t.onDragMove && a(t.onDragMove({
        active: m,
        over: v
      }));
    },
    onDragOver(d) {
      let {
        active: m,
        over: v
      } = d;
      a(t.onDragOver({
        active: m,
        over: v
      }));
    },
    onDragEnd(d) {
      let {
        active: m,
        over: v
      } = d;
      a(t.onDragEnd({
        active: m,
        over: v
      }));
    },
    onDragCancel(d) {
      let {
        active: m,
        over: v
      } = d;
      a(t.onDragCancel({
        active: m,
        over: v
      }));
    }
  }), [a, t])), !s)
    return null;
  const u = Se.createElement(Se.Fragment, null, Se.createElement(Tf, {
    id: o,
    value: r.draggable
  }), Se.createElement(If, {
    id: l,
    announcement: i
  }));
  return e ? wc(u, e) : u;
}
var bt;
(function(n) {
  n.DragStart = "dragStart", n.DragMove = "dragMove", n.DragEnd = "dragEnd", n.DragCancel = "dragCancel", n.DragOver = "dragOver", n.RegisterDroppable = "registerDroppable", n.SetDroppableDisabled = "setDroppableDisabled", n.UnregisterDroppable = "unregisterDroppable";
})(bt || (bt = {}));
function ko() {
}
function Tn(n, t) {
  return Be(
    () => ({
      sensor: n,
      options: t ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, t]
  );
}
function Yo() {
  for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++)
    t[e] = arguments[e];
  return Be(
    () => [...t].filter((o) => o != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
const on = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function _s(n, t) {
  return Math.sqrt(Math.pow(n.x - t.x, 2) + Math.pow(n.y - t.y, 2));
}
function Af(n, t) {
  const e = _o(n);
  if (!e)
    return "0 0";
  const o = {
    x: (e.x - t.left) / t.width * 100,
    y: (e.y - t.top) / t.height * 100
  };
  return o.x + "% " + o.y + "%";
}
function ks(n, t) {
  let {
    data: {
      value: e
    }
  } = n, {
    data: {
      value: o
    }
  } = t;
  return e - o;
}
function Lf(n, t) {
  let {
    data: {
      value: e
    }
  } = n, {
    data: {
      value: o
    }
  } = t;
  return o - e;
}
function Sl(n) {
  let {
    left: t,
    top: e,
    height: o,
    width: r
  } = n;
  return [{
    x: t,
    y: e
  }, {
    x: t + r,
    y: e
  }, {
    x: t,
    y: e + o
  }, {
    x: t + r,
    y: e + o
  }];
}
function Rs(n, t) {
  if (!n || n.length === 0)
    return null;
  const [e] = n;
  return e[t];
}
function Cl(n, t, e) {
  return t === void 0 && (t = n.left), e === void 0 && (e = n.top), {
    x: t + n.width * 0.5,
    y: e + n.height * 0.5
  };
}
const Go = (n) => {
  let {
    collisionRect: t,
    droppableRects: e,
    droppableContainers: o
  } = n;
  const r = Cl(t, t.left, t.top), a = [];
  for (const i of o) {
    const {
      id: l
    } = i, s = e.get(l);
    if (s) {
      const c = _s(Cl(s), r);
      a.push({
        id: l,
        data: {
          droppableContainer: i,
          value: c
        }
      });
    }
  }
  return a.sort(ks);
}, $f = (n) => {
  let {
    collisionRect: t,
    droppableRects: e,
    droppableContainers: o
  } = n;
  const r = Sl(t), a = [];
  for (const i of o) {
    const {
      id: l
    } = i, s = e.get(l);
    if (s) {
      const c = Sl(s), u = r.reduce((m, v, x) => m + _s(c[x], v), 0), d = Number((u / 4).toFixed(4));
      a.push({
        id: l,
        data: {
          droppableContainer: i,
          value: d
        }
      });
    }
  }
  return a.sort(ks);
};
function Ff(n, t) {
  const e = Math.max(t.top, n.top), o = Math.max(t.left, n.left), r = Math.min(t.left + t.width, n.left + n.width), a = Math.min(t.top + t.height, n.top + n.height), i = r - o, l = a - e;
  if (o < r && e < a) {
    const s = t.width * t.height, c = n.width * n.height, u = i * l, d = u / (s + c - u);
    return Number(d.toFixed(4));
  }
  return 0;
}
const Mf = (n) => {
  let {
    collisionRect: t,
    droppableRects: e,
    droppableContainers: o
  } = n;
  const r = [];
  for (const a of o) {
    const {
      id: i
    } = a, l = e.get(i);
    if (l) {
      const s = Ff(l, t);
      s > 0 && r.push({
        id: i,
        data: {
          droppableContainer: a,
          value: s
        }
      });
    }
  }
  return r.sort(Lf);
};
function zf(n, t, e) {
  return {
    ...n,
    scaleX: t && e ? t.width / e.width : 1,
    scaleY: t && e ? t.height / e.height : 1
  };
}
function js(n, t) {
  return n && t ? {
    x: n.left - t.left,
    y: n.top - t.top
  } : on;
}
function Hf(n) {
  return function(e) {
    for (var o = arguments.length, r = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++)
      r[a - 1] = arguments[a];
    return r.reduce((i, l) => ({
      ...i,
      top: i.top + n * l.y,
      bottom: i.bottom + n * l.y,
      left: i.left + n * l.x,
      right: i.right + n * l.x
    }), {
      ...e
    });
  };
}
const Bf = /* @__PURE__ */ Hf(1);
function Ds(n) {
  if (n.startsWith("matrix3d(")) {
    const t = n.slice(9, -1).split(/, /);
    return {
      x: +t[12],
      y: +t[13],
      scaleX: +t[0],
      scaleY: +t[5]
    };
  } else if (n.startsWith("matrix(")) {
    const t = n.slice(7, -1).split(/, /);
    return {
      x: +t[4],
      y: +t[5],
      scaleX: +t[0],
      scaleY: +t[3]
    };
  }
  return null;
}
function Wf(n, t, e) {
  const o = Ds(t);
  if (!o)
    return n;
  const {
    scaleX: r,
    scaleY: a,
    x: i,
    y: l
  } = o, s = n.left - i - (1 - r) * parseFloat(e), c = n.top - l - (1 - a) * parseFloat(e.slice(e.indexOf(" ") + 1)), u = r ? n.width / r : n.width, d = a ? n.height / a : n.height;
  return {
    width: u,
    height: d,
    top: c,
    right: s + u,
    bottom: c + d,
    left: s
  };
}
const Vf = {
  ignoreTransform: !1
};
function ir(n, t) {
  t === void 0 && (t = Vf);
  let e = n.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      transform: c,
      transformOrigin: u
    } = At(n).getComputedStyle(n);
    c && (e = Wf(e, c, u));
  }
  const {
    top: o,
    left: r,
    width: a,
    height: i,
    bottom: l,
    right: s
  } = e;
  return {
    top: o,
    left: r,
    width: a,
    height: i,
    bottom: l,
    right: s
  };
}
function Ol(n) {
  return ir(n, {
    ignoreTransform: !0
  });
}
function Kf(n) {
  const t = n.innerWidth, e = n.innerHeight;
  return {
    top: 0,
    left: 0,
    right: t,
    bottom: e,
    width: t,
    height: e
  };
}
function Uf(n, t) {
  return t === void 0 && (t = At(n).getComputedStyle(n)), t.position === "fixed";
}
function Yf(n, t) {
  t === void 0 && (t = At(n).getComputedStyle(n));
  const e = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((r) => {
    const a = t[r];
    return typeof a == "string" ? e.test(a) : !1;
  });
}
function Xo(n, t) {
  const e = [];
  function o(r) {
    if (t != null && e.length >= t || !r)
      return e;
    if (bi(r) && r.scrollingElement != null && !e.includes(r.scrollingElement))
      return e.push(r.scrollingElement), e;
    if (!Jr(r) || Ps(r) || e.includes(r))
      return e;
    const a = At(n).getComputedStyle(r);
    return r !== n && Yf(r, a) && e.push(r), Uf(r, a) ? e : o(r.parentNode);
  }
  return n ? o(n) : e;
}
function Ns(n) {
  const [t] = Xo(n, 1);
  return t ?? null;
}
function va(n) {
  return !Vo || !n ? null : or(n) ? n : hi(n) ? bi(n) || n === ar(n).scrollingElement ? window : Jr(n) ? n : null : null;
}
function As(n) {
  return or(n) ? n.scrollX : n.scrollLeft;
}
function Ls(n) {
  return or(n) ? n.scrollY : n.scrollTop;
}
function Ya(n) {
  return {
    x: As(n),
    y: Ls(n)
  };
}
var Ct;
(function(n) {
  n[n.Forward = 1] = "Forward", n[n.Backward = -1] = "Backward";
})(Ct || (Ct = {}));
function $s(n) {
  return !Vo || !n ? !1 : n === document.scrollingElement;
}
function Fs(n) {
  const t = {
    x: 0,
    y: 0
  }, e = $s(n) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: n.clientHeight,
    width: n.clientWidth
  }, o = {
    x: n.scrollWidth - e.width,
    y: n.scrollHeight - e.height
  }, r = n.scrollTop <= t.y, a = n.scrollLeft <= t.x, i = n.scrollTop >= o.y, l = n.scrollLeft >= o.x;
  return {
    isTop: r,
    isLeft: a,
    isBottom: i,
    isRight: l,
    maxScroll: o,
    minScroll: t
  };
}
const Gf = {
  x: 0.2,
  y: 0.2
};
function Xf(n, t, e, o, r) {
  let {
    top: a,
    left: i,
    right: l,
    bottom: s
  } = e;
  o === void 0 && (o = 10), r === void 0 && (r = Gf);
  const {
    isTop: c,
    isBottom: u,
    isLeft: d,
    isRight: m
  } = Fs(n), v = {
    x: 0,
    y: 0
  }, x = {
    x: 0,
    y: 0
  }, h = {
    height: t.height * r.y,
    width: t.width * r.x
  };
  return !c && a <= t.top + h.height ? (v.y = Ct.Backward, x.y = o * Math.abs((t.top + h.height - a) / h.height)) : !u && s >= t.bottom - h.height && (v.y = Ct.Forward, x.y = o * Math.abs((t.bottom - h.height - s) / h.height)), !m && l >= t.right - h.width ? (v.x = Ct.Forward, x.x = o * Math.abs((t.right - h.width - l) / h.width)) : !d && i <= t.left + h.width && (v.x = Ct.Backward, x.x = o * Math.abs((t.left + h.width - i) / h.width)), {
    direction: v,
    speed: x
  };
}
function Jf(n) {
  if (n === document.scrollingElement) {
    const {
      innerWidth: a,
      innerHeight: i
    } = window;
    return {
      top: 0,
      left: 0,
      right: a,
      bottom: i,
      width: a,
      height: i
    };
  }
  const {
    top: t,
    left: e,
    right: o,
    bottom: r
  } = n.getBoundingClientRect();
  return {
    top: t,
    left: e,
    right: o,
    bottom: r,
    width: n.clientWidth,
    height: n.clientHeight
  };
}
function Ms(n) {
  return n.reduce((t, e) => Zn(t, Ya(e)), on);
}
function Zf(n) {
  return n.reduce((t, e) => t + As(e), 0);
}
function Qf(n) {
  return n.reduce((t, e) => t + Ls(e), 0);
}
function zs(n, t) {
  if (t === void 0 && (t = ir), !n)
    return;
  const {
    top: e,
    left: o,
    bottom: r,
    right: a
  } = t(n);
  Ns(n) && (r <= 0 || a <= 0 || e >= window.innerHeight || o >= window.innerWidth) && n.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const ep = [["x", ["left", "right"], Zf], ["y", ["top", "bottom"], Qf]];
class yi {
  constructor(t, e) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const o = Xo(e), r = Ms(o);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [a, i, l] of ep)
      for (const s of i)
        Object.defineProperty(this, s, {
          get: () => {
            const c = l(o), u = r[a] - c;
            return this.rect[s] + u;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class Sr {
  constructor(t) {
    this.target = void 0, this.listeners = [], this.removeAll = () => {
      this.listeners.forEach((e) => {
        var o;
        return (o = this.target) == null ? void 0 : o.removeEventListener(...e);
      });
    }, this.target = t;
  }
  add(t, e, o) {
    var r;
    (r = this.target) == null || r.addEventListener(t, e, o), this.listeners.push([t, e, o]);
  }
}
function tp(n) {
  const {
    EventTarget: t
  } = At(n);
  return n instanceof t ? n : ar(n);
}
function ga(n, t) {
  const e = Math.abs(n.x), o = Math.abs(n.y);
  return typeof t == "number" ? Math.sqrt(e ** 2 + o ** 2) > t : "x" in t && "y" in t ? e > t.x && o > t.y : "x" in t ? e > t.x : "y" in t ? o > t.y : !1;
}
var Ut;
(function(n) {
  n.Click = "click", n.DragStart = "dragstart", n.Keydown = "keydown", n.ContextMenu = "contextmenu", n.Resize = "resize", n.SelectionChange = "selectionchange", n.VisibilityChange = "visibilitychange";
})(Ut || (Ut = {}));
function ql(n) {
  n.preventDefault();
}
function np(n) {
  n.stopPropagation();
}
var De;
(function(n) {
  n.Space = "Space", n.Down = "ArrowDown", n.Right = "ArrowRight", n.Left = "ArrowLeft", n.Up = "ArrowUp", n.Esc = "Escape", n.Enter = "Enter";
})(De || (De = {}));
const Hs = {
  start: [De.Space, De.Enter],
  cancel: [De.Esc],
  end: [De.Space, De.Enter]
}, rp = (n, t) => {
  let {
    currentCoordinates: e
  } = t;
  switch (n.code) {
    case De.Right:
      return {
        ...e,
        x: e.x + 25
      };
    case De.Left:
      return {
        ...e,
        x: e.x - 25
      };
    case De.Down:
      return {
        ...e,
        y: e.y + 25
      };
    case De.Up:
      return {
        ...e,
        y: e.y - 25
      };
  }
};
class lr {
  constructor(t) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
    const {
      event: {
        target: e
      }
    } = t;
    this.props = t, this.listeners = new Sr(ar(e)), this.windowListeners = new Sr(At(e)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(Ut.Resize, this.handleCancel), this.windowListeners.add(Ut.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(Ut.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: e
    } = this.props, o = t.node.current;
    o && zs(o), e(on);
  }
  handleKeyDown(t) {
    if (Uo(t)) {
      const {
        active: e,
        context: o,
        options: r
      } = this.props, {
        keyboardCodes: a = Hs,
        coordinateGetter: i = rp,
        scrollBehavior: l = "smooth"
      } = r, {
        code: s
      } = t;
      if (a.end.includes(s)) {
        this.handleEnd(t);
        return;
      }
      if (a.cancel.includes(s)) {
        this.handleCancel(t);
        return;
      }
      const {
        collisionRect: c
      } = o.current, u = c ? {
        x: c.left,
        y: c.top
      } : on;
      this.referenceCoordinates || (this.referenceCoordinates = u);
      const d = i(t, {
        active: e,
        context: o.current,
        currentCoordinates: u
      });
      if (d) {
        const m = Hr(d, u), v = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: x
        } = o.current;
        for (const h of x) {
          const S = t.code, {
            isTop: w,
            isRight: E,
            isLeft: C,
            isBottom: q,
            maxScroll: y,
            minScroll: P
          } = Fs(h), I = Jf(h), V = {
            x: Math.min(S === De.Right ? I.right - I.width / 2 : I.right, Math.max(S === De.Right ? I.left : I.left + I.width / 2, d.x)),
            y: Math.min(S === De.Down ? I.bottom - I.height / 2 : I.bottom, Math.max(S === De.Down ? I.top : I.top + I.height / 2, d.y))
          }, N = S === De.Right && !E || S === De.Left && !C, _ = S === De.Down && !q || S === De.Up && !w;
          if (N && V.x !== d.x) {
            const k = h.scrollLeft + m.x, X = S === De.Right && k <= y.x || S === De.Left && k >= P.x;
            if (X && !m.y) {
              h.scrollTo({
                left: k,
                behavior: l
              });
              return;
            }
            X ? v.x = h.scrollLeft - k : v.x = S === De.Right ? h.scrollLeft - y.x : h.scrollLeft - P.x, v.x && h.scrollBy({
              left: -v.x,
              behavior: l
            });
            break;
          } else if (_ && V.y !== d.y) {
            const k = h.scrollTop + m.y, X = S === De.Down && k <= y.y || S === De.Up && k >= P.y;
            if (X && !m.x) {
              h.scrollTo({
                top: k,
                behavior: l
              });
              return;
            }
            X ? v.y = h.scrollTop - k : v.y = S === De.Down ? h.scrollTop - y.y : h.scrollTop - P.y, v.y && h.scrollBy({
              top: -v.y,
              behavior: l
            });
            break;
          }
        }
        this.handleMove(t, Zn(Hr(d, this.referenceCoordinates), v));
      }
    }
  }
  handleMove(t, e) {
    const {
      onMove: o
    } = this.props;
    t.preventDefault(), o(e);
  }
  handleEnd(t) {
    const {
      onEnd: e
    } = this.props;
    t.preventDefault(), this.detach(), e();
  }
  handleCancel(t) {
    const {
      onCancel: e
    } = this.props;
    t.preventDefault(), this.detach(), e();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll();
  }
}
lr.activators = [{
  eventName: "onKeyDown",
  handler: (n, t, e) => {
    let {
      keyboardCodes: o = Hs,
      onActivation: r
    } = t, {
      active: a
    } = e;
    const {
      code: i
    } = n.nativeEvent;
    if (o.start.includes(i)) {
      const l = a.activatorNode.current;
      return l && n.target !== l ? !1 : (n.preventDefault(), r == null || r({
        event: n.nativeEvent
      }), !0);
    }
    return !1;
  }
}];
function Pl(n) {
  return !!(n && "distance" in n);
}
function Tl(n) {
  return !!(n && "delay" in n);
}
class wi {
  constructor(t, e, o) {
    var r;
    o === void 0 && (o = tp(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = e;
    const {
      event: a
    } = t, {
      target: i
    } = a;
    this.props = t, this.events = e, this.document = ar(i), this.documentListeners = new Sr(this.document), this.listeners = new Sr(o), this.windowListeners = new Sr(At(i)), this.initialCoordinates = (r = _o(a)) != null ? r : on, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
  }
  attach() {
    const {
      events: t,
      props: {
        options: {
          activationConstraint: e,
          bypassActivationConstraint: o
        }
      }
    } = this;
    if (this.listeners.add(t.move.name, this.handleMove, {
      passive: !1
    }), this.listeners.add(t.end.name, this.handleEnd), this.windowListeners.add(Ut.Resize, this.handleCancel), this.windowListeners.add(Ut.DragStart, ql), this.windowListeners.add(Ut.VisibilityChange, this.handleCancel), this.windowListeners.add(Ut.ContextMenu, ql), this.documentListeners.add(Ut.Keydown, this.handleKeydown), e) {
      if (o != null && o({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (Tl(e)) {
        this.timeoutId = setTimeout(this.handleStart, e.delay);
        return;
      }
      if (Pl(e))
        return;
    }
    this.handleStart();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll(), setTimeout(this.documentListeners.removeAll, 50), this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null);
  }
  handleStart() {
    const {
      initialCoordinates: t
    } = this, {
      onStart: e
    } = this.props;
    t && (this.activated = !0, this.documentListeners.add(Ut.Click, np, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(Ut.SelectionChange, this.removeTextSelection), e(t));
  }
  handleMove(t) {
    var e;
    const {
      activated: o,
      initialCoordinates: r,
      props: a
    } = this, {
      onMove: i,
      options: {
        activationConstraint: l
      }
    } = a;
    if (!r)
      return;
    const s = (e = _o(t)) != null ? e : on, c = Hr(r, s);
    if (!o && l) {
      if (Pl(l)) {
        if (l.tolerance != null && ga(c, l.tolerance))
          return this.handleCancel();
        if (ga(c, l.distance))
          return this.handleStart();
      }
      return Tl(l) && ga(c, l.tolerance) ? this.handleCancel() : void 0;
    }
    t.cancelable && t.preventDefault(), i(s);
  }
  handleEnd() {
    const {
      onEnd: t
    } = this.props;
    this.detach(), t();
  }
  handleCancel() {
    const {
      onCancel: t
    } = this.props;
    this.detach(), t();
  }
  handleKeydown(t) {
    t.code === De.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const op = {
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};
class sr extends wi {
  constructor(t) {
    const {
      event: e
    } = t, o = ar(e.target);
    super(t, op, o);
  }
}
sr.activators = [{
  eventName: "onPointerDown",
  handler: (n, t) => {
    let {
      nativeEvent: e
    } = n, {
      onActivation: o
    } = t;
    return !e.isPrimary || e.button !== 0 ? !1 : (o == null || o({
      event: e
    }), !0);
  }
}];
const ap = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var Ga;
(function(n) {
  n[n.RightClick = 2] = "RightClick";
})(Ga || (Ga = {}));
class ip extends wi {
  constructor(t) {
    super(t, ap, ar(t.event.target));
  }
}
ip.activators = [{
  eventName: "onMouseDown",
  handler: (n, t) => {
    let {
      nativeEvent: e
    } = n, {
      onActivation: o
    } = t;
    return e.button === Ga.RightClick ? !1 : (o == null || o({
      event: e
    }), !0);
  }
}];
const ha = {
  move: {
    name: "touchmove"
  },
  end: {
    name: "touchend"
  }
};
class lp extends wi {
  constructor(t) {
    super(t, ha);
  }
  static setup() {
    return window.addEventListener(ha.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(ha.move.name, t);
    };
    function t() {
    }
  }
}
lp.activators = [{
  eventName: "onTouchStart",
  handler: (n, t) => {
    let {
      nativeEvent: e
    } = n, {
      onActivation: o
    } = t;
    const {
      touches: r
    } = e;
    return r.length > 1 ? !1 : (o == null || o({
      event: e
    }), !0);
  }
}];
var Cr;
(function(n) {
  n[n.Pointer = 0] = "Pointer", n[n.DraggableRect = 1] = "DraggableRect";
})(Cr || (Cr = {}));
var Ro;
(function(n) {
  n[n.TreeOrder = 0] = "TreeOrder", n[n.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(Ro || (Ro = {}));
function sp(n) {
  let {
    acceleration: t,
    activator: e = Cr.Pointer,
    canScroll: o,
    draggingRect: r,
    enabled: a,
    interval: i = 5,
    order: l = Ro.TreeOrder,
    pointerCoordinates: s,
    scrollableAncestors: c,
    scrollableAncestorRects: u,
    delta: d,
    threshold: m
  } = n;
  const v = up({
    delta: d,
    disabled: !a
  }), [x, h] = Sf(), S = ze({
    x: 0,
    y: 0
  }), w = ze({
    x: 0,
    y: 0
  }), E = Be(() => {
    switch (e) {
      case Cr.Pointer:
        return s ? {
          top: s.y,
          bottom: s.y,
          left: s.x,
          right: s.x
        } : null;
      case Cr.DraggableRect:
        return r;
    }
  }, [e, r, s]), C = ze(null), q = kt(() => {
    const P = C.current;
    if (!P)
      return;
    const I = S.current.x * w.current.x, V = S.current.y * w.current.y;
    P.scrollBy(I, V);
  }, []), y = Be(() => l === Ro.TreeOrder ? [...c].reverse() : c, [l, c]);
  ge(
    () => {
      if (!a || !c.length || !E) {
        h();
        return;
      }
      for (const P of y) {
        if ((o == null ? void 0 : o(P)) === !1)
          continue;
        const I = c.indexOf(P), V = u[I];
        if (!V)
          continue;
        const {
          direction: N,
          speed: _
        } = Xf(P, V, E, t, m);
        for (const k of ["x", "y"])
          v[k][N[k]] || (_[k] = 0, N[k] = 0);
        if (_.x > 0 || _.y > 0) {
          h(), C.current = P, x(q, i), S.current = _, w.current = N;
          return;
        }
      }
      S.current = {
        x: 0,
        y: 0
      }, w.current = {
        x: 0,
        y: 0
      }, h();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      t,
      q,
      o,
      h,
      a,
      i,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(E),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(v),
      x,
      c,
      y,
      u,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(m)
    ]
  );
}
const cp = {
  x: {
    [Ct.Backward]: !1,
    [Ct.Forward]: !1
  },
  y: {
    [Ct.Backward]: !1,
    [Ct.Forward]: !1
  }
};
function up(n) {
  let {
    delta: t,
    disabled: e
  } = n;
  const o = Io(t);
  return Zr((r) => {
    if (e || !o || !r)
      return cp;
    const a = {
      x: Math.sign(t.x - o.x),
      y: Math.sign(t.y - o.y)
    };
    return {
      x: {
        [Ct.Backward]: r.x[Ct.Backward] || a.x === -1,
        [Ct.Forward]: r.x[Ct.Forward] || a.x === 1
      },
      y: {
        [Ct.Backward]: r.y[Ct.Backward] || a.y === -1,
        [Ct.Forward]: r.y[Ct.Forward] || a.y === 1
      }
    };
  }, [e, t, o]);
}
function dp(n, t) {
  const e = t !== null ? n.get(t) : void 0, o = e ? e.node.current : null;
  return Zr((r) => {
    var a;
    return t === null ? null : (a = o ?? r) != null ? a : null;
  }, [o, t]);
}
function fp(n, t) {
  return Be(() => n.reduce((e, o) => {
    const {
      sensor: r
    } = o, a = r.activators.map((i) => ({
      eventName: i.eventName,
      handler: t(i.handler, o)
    }));
    return [...e, ...a];
  }, []), [n, t]);
}
var Br;
(function(n) {
  n[n.Always = 0] = "Always", n[n.BeforeDragging = 1] = "BeforeDragging", n[n.WhileDragging = 2] = "WhileDragging";
})(Br || (Br = {}));
var Xa;
(function(n) {
  n.Optimized = "optimized";
})(Xa || (Xa = {}));
const Il = /* @__PURE__ */ new Map();
function pp(n, t) {
  let {
    dragging: e,
    dependencies: o,
    config: r
  } = t;
  const [a, i] = xe(null), {
    frequency: l,
    measure: s,
    strategy: c
  } = r, u = ze(n), d = S(), m = zr(d), v = kt(function(w) {
    w === void 0 && (w = []), !m.current && i((E) => E === null ? w : E.concat(w.filter((C) => !E.includes(C))));
  }, [m]), x = ze(null), h = Zr((w) => {
    if (d && !e)
      return Il;
    if (!w || w === Il || u.current !== n || a != null) {
      const E = /* @__PURE__ */ new Map();
      for (let C of n) {
        if (!C)
          continue;
        if (a && a.length > 0 && !a.includes(C.id) && C.rect.current) {
          E.set(C.id, C.rect.current);
          continue;
        }
        const q = C.node.current, y = q ? new yi(s(q), q) : null;
        C.rect.current = y, y && E.set(C.id, y);
      }
      return E;
    }
    return w;
  }, [n, a, e, d, s]);
  return ge(() => {
    u.current = n;
  }, [n]), ge(
    () => {
      d || v();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, d]
  ), ge(
    () => {
      a && a.length > 0 && i(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(a)]
  ), ge(
    () => {
      d || typeof l != "number" || x.current !== null || (x.current = setTimeout(() => {
        v(), x.current = null;
      }, l));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [l, d, v, ...o]
  ), {
    droppableRects: h,
    measureDroppableContainers: v,
    measuringScheduled: a != null
  };
  function S() {
    switch (c) {
      case Br.Always:
        return !1;
      case Br.BeforeDragging:
        return e;
      default:
        return !e;
    }
  }
}
function xi(n, t) {
  return Zr((e) => n ? e || (typeof t == "function" ? t(n) : n) : null, [t, n]);
}
function mp(n, t) {
  return xi(n, t);
}
function vp(n) {
  let {
    callback: t,
    disabled: e
  } = n;
  const o = Ko(t), r = Be(() => {
    if (e || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: a
    } = window;
    return new a(o);
  }, [o, e]);
  return ge(() => () => r == null ? void 0 : r.disconnect(), [r]), r;
}
function Jo(n) {
  let {
    callback: t,
    disabled: e
  } = n;
  const o = Ko(t), r = Be(
    () => {
      if (e || typeof window > "u" || typeof window.ResizeObserver > "u")
        return;
      const {
        ResizeObserver: a
      } = window;
      return new a(o);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e]
  );
  return ge(() => () => r == null ? void 0 : r.disconnect(), [r]), r;
}
function gp(n) {
  return new yi(ir(n), n);
}
function _l(n, t, e) {
  t === void 0 && (t = gp);
  const [o, r] = li(l, null), a = vp({
    callback(s) {
      if (n)
        for (const c of s) {
          const {
            type: u,
            target: d
          } = c;
          if (u === "childList" && d instanceof HTMLElement && d.contains(n)) {
            r();
            break;
          }
        }
    }
  }), i = Jo({
    callback: r
  });
  return Xt(() => {
    r(), n ? (i == null || i.observe(n), a == null || a.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (i == null || i.disconnect(), a == null || a.disconnect());
  }, [n]), o;
  function l(s) {
    if (!n)
      return null;
    if (n.isConnected === !1) {
      var c;
      return (c = s ?? e) != null ? c : null;
    }
    const u = t(n);
    return JSON.stringify(s) === JSON.stringify(u) ? s : u;
  }
}
function hp(n) {
  const t = xi(n);
  return js(n, t);
}
const kl = [];
function bp(n) {
  const t = ze(n), e = Zr((o) => n ? o && o !== kl && n && t.current && n.parentNode === t.current.parentNode ? o : Xo(n) : kl, [n]);
  return ge(() => {
    t.current = n;
  }, [n]), e;
}
function yp(n) {
  const [t, e] = xe(null), o = ze(n), r = kt((a) => {
    const i = va(a.target);
    i && e((l) => l ? (l.set(i, Ya(i)), new Map(l)) : null);
  }, []);
  return ge(() => {
    const a = o.current;
    if (n !== a) {
      i(a);
      const l = n.map((s) => {
        const c = va(s);
        return c ? (c.addEventListener("scroll", r, {
          passive: !0
        }), [c, Ya(c)]) : null;
      }).filter((s) => s != null);
      e(l.length ? new Map(l) : null), o.current = n;
    }
    return () => {
      i(n), i(a);
    };
    function i(l) {
      l.forEach((s) => {
        const c = va(s);
        c == null || c.removeEventListener("scroll", r);
      });
    }
  }, [r, n]), Be(() => n.length ? t ? Array.from(t.values()).reduce((a, i) => Zn(a, i), on) : Ms(n) : on, [n, t]);
}
function Rl(n, t) {
  t === void 0 && (t = []);
  const e = ze(null);
  return ge(
    () => {
      e.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), ge(() => {
    const o = n !== on;
    o && !e.current && (e.current = n), !o && e.current && (e.current = null);
  }, [n]), e.current ? Hr(n, e.current) : on;
}
function wp(n) {
  ge(
    () => {
      if (!Vo)
        return;
      const t = n.map((e) => {
        let {
          sensor: o
        } = e;
        return o.setup == null ? void 0 : o.setup();
      });
      return () => {
        for (const e of t)
          e == null || e();
      };
    },
    // TO-DO: Sensors length could theoretically change which would not be a valid dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n.map((t) => {
      let {
        sensor: e
      } = t;
      return e;
    })
  );
}
function xp(n, t) {
  return Be(() => n.reduce((e, o) => {
    let {
      eventName: r,
      handler: a
    } = o;
    return e[r] = (i) => {
      a(i, t);
    }, e;
  }, {}), [n, t]);
}
function Bs(n) {
  return Be(() => n ? Kf(n) : null, [n]);
}
const ba = [];
function Ep(n, t) {
  t === void 0 && (t = ir);
  const [e] = n, o = Bs(e ? At(e) : null), [r, a] = li(l, ba), i = Jo({
    callback: a
  });
  return n.length > 0 && r === ba && a(), Xt(() => {
    n.length ? n.forEach((s) => i == null ? void 0 : i.observe(s)) : (i == null || i.disconnect(), a());
  }, [n]), r;
  function l() {
    return n.length ? n.map((s) => $s(s) ? o : new yi(t(s), s)) : ba;
  }
}
function Ws(n) {
  if (!n)
    return null;
  if (n.children.length > 1)
    return n;
  const t = n.children[0];
  return Jr(t) ? t : n;
}
function Sp(n) {
  let {
    measure: t
  } = n;
  const [e, o] = xe(null), r = kt((c) => {
    for (const {
      target: u
    } of c)
      if (Jr(u)) {
        o((d) => {
          const m = t(u);
          return d ? {
            ...d,
            width: m.width,
            height: m.height
          } : m;
        });
        break;
      }
  }, [t]), a = Jo({
    callback: r
  }), i = kt((c) => {
    const u = Ws(c);
    a == null || a.disconnect(), u && (a == null || a.observe(u)), o(u ? t(u) : null);
  }, [t, a]), [l, s] = To(i);
  return Be(() => ({
    nodeRef: l,
    rect: e,
    setRef: s
  }), [e, l, s]);
}
const Cp = [{
  sensor: sr,
  options: {}
}, {
  sensor: lr,
  options: {}
}], Op = {
  current: {}
}, wo = {
  draggable: {
    measure: Ol
  },
  droppable: {
    measure: Ol,
    strategy: Br.WhileDragging,
    frequency: Xa.Optimized
  },
  dragOverlay: {
    measure: ir
  }
};
class Or extends Map {
  get(t) {
    var e;
    return t != null && (e = super.get(t)) != null ? e : void 0;
  }
  toArray() {
    return Array.from(this.values());
  }
  getEnabled() {
    return this.toArray().filter((t) => {
      let {
        disabled: e
      } = t;
      return !e;
    });
  }
  getNodeFor(t) {
    var e, o;
    return (e = (o = this.get(t)) == null ? void 0 : o.node.current) != null ? e : void 0;
  }
}
const qp = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new Or(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: ko
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: wo,
  measureDroppableContainers: ko,
  windowRect: null,
  measuringScheduled: !1
}, Vs = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: ko,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: ko
}, eo = /* @__PURE__ */ Gr(Vs), Ks = /* @__PURE__ */ Gr(qp);
function Pp() {
  return {
    draggable: {
      active: null,
      initialCoordinates: {
        x: 0,
        y: 0
      },
      nodes: /* @__PURE__ */ new Map(),
      translate: {
        x: 0,
        y: 0
      }
    },
    droppable: {
      containers: new Or()
    }
  };
}
function Tp(n, t) {
  switch (t.type) {
    case bt.DragStart:
      return {
        ...n,
        draggable: {
          ...n.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active
        }
      };
    case bt.DragMove:
      return n.draggable.active ? {
        ...n,
        draggable: {
          ...n.draggable,
          translate: {
            x: t.coordinates.x - n.draggable.initialCoordinates.x,
            y: t.coordinates.y - n.draggable.initialCoordinates.y
          }
        }
      } : n;
    case bt.DragEnd:
    case bt.DragCancel:
      return {
        ...n,
        draggable: {
          ...n.draggable,
          active: null,
          initialCoordinates: {
            x: 0,
            y: 0
          },
          translate: {
            x: 0,
            y: 0
          }
        }
      };
    case bt.RegisterDroppable: {
      const {
        element: e
      } = t, {
        id: o
      } = e, r = new Or(n.droppable.containers);
      return r.set(o, e), {
        ...n,
        droppable: {
          ...n.droppable,
          containers: r
        }
      };
    }
    case bt.SetDroppableDisabled: {
      const {
        id: e,
        key: o,
        disabled: r
      } = t, a = n.droppable.containers.get(e);
      if (!a || o !== a.key)
        return n;
      const i = new Or(n.droppable.containers);
      return i.set(e, {
        ...a,
        disabled: r
      }), {
        ...n,
        droppable: {
          ...n.droppable,
          containers: i
        }
      };
    }
    case bt.UnregisterDroppable: {
      const {
        id: e,
        key: o
      } = t, r = n.droppable.containers.get(e);
      if (!r || o !== r.key)
        return n;
      const a = new Or(n.droppable.containers);
      return a.delete(e), {
        ...n,
        droppable: {
          ...n.droppable,
          containers: a
        }
      };
    }
    default:
      return n;
  }
}
function Ip(n) {
  let {
    disabled: t
  } = n;
  const {
    active: e,
    activatorEvent: o,
    draggableNodes: r
  } = ln(eo), a = Io(o), i = Io(e == null ? void 0 : e.id);
  return ge(() => {
    if (!t && !o && a && i != null) {
      if (!Uo(a) || document.activeElement === a.target)
        return;
      const l = r.get(i);
      if (!l)
        return;
      const {
        activatorNode: s,
        node: c
      } = l;
      if (!s.current && !c.current)
        return;
      requestAnimationFrame(() => {
        for (const u of [s.current, c.current]) {
          if (!u)
            continue;
          const d = qf(u);
          if (d) {
            d.focus();
            break;
          }
        }
      });
    }
  }, [o, t, r, i, a]), null;
}
function Us(n, t) {
  let {
    transform: e,
    ...o
  } = t;
  return n != null && n.length ? n.reduce((r, a) => a({
    transform: r,
    ...o
  }), e) : e;
}
function _p(n) {
  return Be(
    () => ({
      draggable: {
        ...wo.draggable,
        ...n == null ? void 0 : n.draggable
      },
      droppable: {
        ...wo.droppable,
        ...n == null ? void 0 : n.droppable
      },
      dragOverlay: {
        ...wo.dragOverlay,
        ...n == null ? void 0 : n.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n == null ? void 0 : n.draggable, n == null ? void 0 : n.droppable, n == null ? void 0 : n.dragOverlay]
  );
}
function kp(n) {
  let {
    activeNode: t,
    measure: e,
    initialRect: o,
    config: r = !0
  } = n;
  const a = ze(!1), {
    x: i,
    y: l
  } = typeof r == "boolean" ? {
    x: r,
    y: r
  } : r;
  Xt(() => {
    if (!i && !l || !t) {
      a.current = !1;
      return;
    }
    if (a.current || !o)
      return;
    const c = t == null ? void 0 : t.node.current;
    if (!c || c.isConnected === !1)
      return;
    const u = e(c), d = js(u, o);
    if (i || (d.x = 0), l || (d.y = 0), a.current = !0, Math.abs(d.x) > 0 || Math.abs(d.y) > 0) {
      const m = Ns(c);
      m && m.scrollBy({
        top: d.y,
        left: d.x
      });
    }
  }, [t, i, l, o, e]);
}
const Zo = /* @__PURE__ */ Gr({
  ...on,
  scaleX: 1,
  scaleY: 1
});
var wn;
(function(n) {
  n[n.Uninitialized = 0] = "Uninitialized", n[n.Initializing = 1] = "Initializing", n[n.Initialized = 2] = "Initialized";
})(wn || (wn = {}));
const Qo = /* @__PURE__ */ hc(function(t) {
  var e, o, r, a;
  let {
    id: i,
    accessibility: l,
    autoScroll: s = !0,
    children: c,
    sensors: u = Cp,
    collisionDetection: d = Mf,
    measuring: m,
    modifiers: v,
    ...x
  } = t;
  const h = li(Tp, void 0, Pp), [S, w] = h, [E, C] = Rf(), [q, y] = xe(wn.Uninitialized), P = q === wn.Initialized, {
    draggable: {
      active: I,
      nodes: V,
      translate: N
    },
    droppable: {
      containers: _
    }
  } = S, k = I ? V.get(I) : null, X = ze({
    initial: null,
    translated: null
  }), M = Be(() => {
    var Ne;
    return I != null ? {
      id: I,
      // It's possible for the active node to unmount while dragging
      data: (Ne = k == null ? void 0 : k.data) != null ? Ne : Op,
      rect: X
    } : null;
  }, [I, k]), J = ze(null), [te, me] = xe(null), [ye, se] = xe(null), Q = zr(x, Object.values(x)), R = Qr("DndDescribedBy", i), Y = Be(() => _.getEnabled(), [_]), ae = _p(m), {
    droppableRects: G,
    measureDroppableContainers: K,
    measuringScheduled: ue
  } = pp(Y, {
    dragging: P,
    dependencies: [N.x, N.y],
    config: ae.droppable
  }), de = dp(V, I), pe = Be(() => ye ? _o(ye) : null, [ye]), U = lt(), j = mp(de, ae.draggable.measure);
  kp({
    activeNode: I ? V.get(I) : null,
    config: U.layoutShiftCompensation,
    initialRect: j,
    measure: ae.draggable.measure
  });
  const $ = _l(de, ae.draggable.measure, j), le = _l(de ? de.parentElement : null), F = ze({
    activatorEvent: null,
    active: null,
    activeNode: de,
    collisionRect: null,
    collisions: null,
    droppableRects: G,
    draggableNodes: V,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: _,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), qe = _.getNodeFor((e = F.current.over) == null ? void 0 : e.id), ke = Sp({
    measure: ae.dragOverlay.measure
  }), _e = (o = ke.nodeRef.current) != null ? o : de, Re = P ? (r = ke.rect) != null ? r : $ : null, He = !!(ke.nodeRef.current && ke.rect), qt = hp(He ? null : $), dt = Bs(_e ? At(_e) : null), et = bp(P ? qe ?? de : null), tt = Ep(et), yt = Us(v, {
    transform: {
      x: N.x - qt.x,
      y: N.y - qt.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: ye,
    active: M,
    activeNodeRect: $,
    containerNodeRect: le,
    draggingNodeRect: Re,
    over: F.current.over,
    overlayNodeRect: ke.rect,
    scrollableAncestors: et,
    scrollableAncestorRects: tt,
    windowRect: dt
  }), Pt = pe ? Zn(pe, N) : null, Ge = yp(et), nt = Rl(Ge), Ht = Rl(Ge, [$]), rt = Zn(yt, nt), ot = Re ? Bf(Re, yt) : null, it = M && ot ? d({
    active: M,
    collisionRect: ot,
    droppableRects: G,
    droppableContainers: Y,
    pointerCoordinates: Pt
  }) : null, Lt = Rs(it, "id"), [ft, vt] = xe(null), we = He ? yt : Zn(yt, Ht), z = zf(we, (a = ft == null ? void 0 : ft.rect) != null ? a : null, $), fe = kt(
    (Ne, Ae) => {
      let {
        sensor: Fe,
        options: Xe
      } = Ae;
      if (J.current == null)
        return;
      const Je = V.get(J.current);
      if (!Je)
        return;
      const Ze = Ne.nativeEvent, Qe = new Fe({
        active: J.current,
        activeNode: Je,
        event: Ze,
        options: Xe,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: F,
        onStart(Ye) {
          const wt = J.current;
          if (wt == null)
            return;
          const xt = V.get(wt);
          if (!xt)
            return;
          const {
            onDragStart: Et
          } = Q.current, $t = {
            active: {
              id: wt,
              data: xt.data,
              rect: X
            }
          };
          vr(() => {
            Et == null || Et($t), y(wn.Initializing), w({
              type: bt.DragStart,
              initialCoordinates: Ye,
              active: wt
            }), E({
              type: "onDragStart",
              event: $t
            });
          });
        },
        onMove(Ye) {
          w({
            type: bt.DragMove,
            coordinates: Ye
          });
        },
        onEnd: pt(bt.DragEnd),
        onCancel: pt(bt.DragCancel)
      });
      vr(() => {
        me(Qe), se(Ne.nativeEvent);
      });
      function pt(Ye) {
        return async function() {
          const {
            active: xt,
            collisions: Et,
            over: $t,
            scrollAdjustedTranslate: en
          } = F.current;
          let Ft = null;
          if (xt && en) {
            const {
              cancelDrop: Nt
            } = Q.current;
            Ft = {
              activatorEvent: Ze,
              active: xt,
              collisions: Et,
              delta: en,
              over: $t
            }, Ye === bt.DragEnd && typeof Nt == "function" && await Promise.resolve(Nt(Ft)) && (Ye = bt.DragCancel);
          }
          J.current = null, vr(() => {
            w({
              type: Ye
            }), y(wn.Uninitialized), vt(null), me(null), se(null);
            const Nt = Ye === bt.DragEnd ? "onDragEnd" : "onDragCancel";
            if (Ft) {
              const Kt = Q.current[Nt];
              Kt == null || Kt(Ft), E({
                type: Nt,
                event: Ft
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [V]
  ), Te = kt((Ne, Ae) => (Fe, Xe) => {
    const Je = Fe.nativeEvent, Ze = V.get(Xe);
    if (
      // Another sensor is already instantiating
      J.current !== null || // No active draggable
      !Ze || // Event has already been captured
      Je.dndKit || Je.defaultPrevented
    )
      return;
    const Qe = {
      active: Ze
    };
    Ne(Fe, Ae.options, Qe) === !0 && (Je.dndKit = {
      capturedBy: Ae.sensor
    }, J.current = Xe, fe(Fe, Ae));
  }, [V, fe]), Ce = fp(u, Te);
  wp(u), Xt(() => {
    $ && q === wn.Initializing && y(wn.Initialized);
  }, [$, q]), ge(
    () => {
      const {
        onDragMove: Ne
      } = Q.current, {
        active: Ae,
        activatorEvent: Fe,
        collisions: Xe,
        over: Je
      } = F.current;
      if (!Ae || !Fe)
        return;
      const Ze = {
        active: Ae,
        activatorEvent: Fe,
        collisions: Xe,
        delta: {
          x: rt.x,
          y: rt.y
        },
        over: Je
      };
      vr(() => {
        Ne == null || Ne(Ze), E({
          type: "onDragMove",
          event: Ze
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [rt.x, rt.y]
  ), ge(
    () => {
      const {
        active: Ne,
        activatorEvent: Ae,
        collisions: Fe,
        droppableContainers: Xe,
        scrollAdjustedTranslate: Je
      } = F.current;
      if (!Ne || J.current == null || !Ae || !Je)
        return;
      const {
        onDragOver: Ze
      } = Q.current, Qe = Xe.get(Lt), pt = Qe && Qe.rect.current ? {
        id: Qe.id,
        rect: Qe.rect.current,
        data: Qe.data,
        disabled: Qe.disabled
      } : null, Ye = {
        active: Ne,
        activatorEvent: Ae,
        collisions: Fe,
        delta: {
          x: Je.x,
          y: Je.y
        },
        over: pt
      };
      vr(() => {
        vt(pt), Ze == null || Ze(Ye), E({
          type: "onDragOver",
          event: Ye
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Lt]
  ), Xt(() => {
    F.current = {
      activatorEvent: ye,
      active: M,
      activeNode: de,
      collisionRect: ot,
      collisions: it,
      droppableRects: G,
      draggableNodes: V,
      draggingNode: _e,
      draggingNodeRect: Re,
      droppableContainers: _,
      over: ft,
      scrollableAncestors: et,
      scrollAdjustedTranslate: rt
    }, X.current = {
      initial: Re,
      translated: ot
    };
  }, [M, de, it, ot, V, _e, Re, G, _, ft, et, rt]), sp({
    ...U,
    delta: N,
    draggingRect: ot,
    pointerCoordinates: Pt,
    scrollableAncestors: et,
    scrollableAncestorRects: tt
  });
  const Oe = Be(() => ({
    active: M,
    activeNode: de,
    activeNodeRect: $,
    activatorEvent: ye,
    collisions: it,
    containerNodeRect: le,
    dragOverlay: ke,
    draggableNodes: V,
    droppableContainers: _,
    droppableRects: G,
    over: ft,
    measureDroppableContainers: K,
    scrollableAncestors: et,
    scrollableAncestorRects: tt,
    measuringConfiguration: ae,
    measuringScheduled: ue,
    windowRect: dt
  }), [M, de, $, ye, it, le, ke, V, _, G, ft, K, et, tt, ae, ue, dt]), Me = Be(() => ({
    activatorEvent: ye,
    activators: Ce,
    active: M,
    activeNodeRect: $,
    ariaDescribedById: {
      draggable: R
    },
    dispatch: w,
    draggableNodes: V,
    over: ft,
    measureDroppableContainers: K
  }), [ye, Ce, M, $, w, R, V, ft, K]);
  return Se.createElement(Is.Provider, {
    value: C
  }, Se.createElement(eo.Provider, {
    value: Me
  }, Se.createElement(Ks.Provider, {
    value: Oe
  }, Se.createElement(Zo.Provider, {
    value: z
  }, c)), Se.createElement(Ip, {
    disabled: (l == null ? void 0 : l.restoreFocus) === !1
  })), Se.createElement(Nf, {
    ...l,
    hiddenTextDescribedById: R
  }));
  function lt() {
    const Ne = (te == null ? void 0 : te.autoScrollEnabled) === !1, Ae = typeof s == "object" ? s.enabled === !1 : s === !1, Fe = P && !Ne && !Ae;
    return typeof s == "object" ? {
      ...s,
      enabled: Fe
    } : {
      enabled: Fe
    };
  }
}), Rp = /* @__PURE__ */ Gr(null), jl = "button", jp = "Droppable";
function Ys(n) {
  let {
    id: t,
    data: e,
    disabled: o = !1,
    attributes: r
  } = n;
  const a = Qr(jp), {
    activators: i,
    activatorEvent: l,
    active: s,
    activeNodeRect: c,
    ariaDescribedById: u,
    draggableNodes: d,
    over: m
  } = ln(eo), {
    role: v = jl,
    roleDescription: x = "draggable",
    tabIndex: h = 0
  } = r ?? {}, S = (s == null ? void 0 : s.id) === t, w = ln(S ? Zo : Rp), [E, C] = To(), [q, y] = To(), P = xp(i, t), I = zr(e);
  Xt(
    () => (d.set(t, {
      id: t,
      key: a,
      node: E,
      activatorNode: q,
      data: I
    }), () => {
      const N = d.get(t);
      N && N.key === a && d.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [d, t]
  );
  const V = Be(() => ({
    role: v,
    tabIndex: h,
    "aria-disabled": o,
    "aria-pressed": S && v === jl ? !0 : void 0,
    "aria-roledescription": x,
    "aria-describedby": u.draggable
  }), [o, v, h, S, x, u.draggable]);
  return {
    active: s,
    activatorEvent: l,
    activeNodeRect: c,
    attributes: V,
    isDragging: S,
    listeners: o ? void 0 : P,
    node: E,
    over: m,
    setNodeRef: C,
    setActivatorNodeRef: y,
    transform: w
  };
}
function Gs() {
  return ln(Ks);
}
const Dp = "Droppable", Np = {
  timeout: 25
};
function Xs(n) {
  let {
    data: t,
    disabled: e = !1,
    id: o,
    resizeObserverConfig: r
  } = n;
  const a = Qr(Dp), {
    active: i,
    dispatch: l,
    over: s,
    measureDroppableContainers: c
  } = ln(eo), u = ze({
    disabled: e
  }), d = ze(!1), m = ze(null), v = ze(null), {
    disabled: x,
    updateMeasurementsFor: h,
    timeout: S
  } = {
    ...Np,
    ...r
  }, w = zr(h ?? o), E = kt(
    () => {
      if (!d.current) {
        d.current = !0;
        return;
      }
      v.current != null && clearTimeout(v.current), v.current = setTimeout(() => {
        c(Array.isArray(w.current) ? w.current : [w.current]), v.current = null;
      }, S);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [S]
  ), C = Jo({
    callback: E,
    disabled: x || !i
  }), q = kt((V, N) => {
    C && (N && (C.unobserve(N), d.current = !1), V && C.observe(V));
  }, [C]), [y, P] = To(q), I = zr(t);
  return ge(() => {
    !C || !y.current || (C.disconnect(), d.current = !1, C.observe(y.current));
  }, [y, C]), Xt(
    () => (l({
      type: bt.RegisterDroppable,
      element: {
        id: o,
        key: a,
        disabled: e,
        node: y,
        rect: m,
        data: I
      }
    }), () => l({
      type: bt.UnregisterDroppable,
      key: a,
      id: o
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [o]
  ), ge(() => {
    e !== u.current.disabled && (l({
      type: bt.SetDroppableDisabled,
      id: o,
      key: a,
      disabled: e
    }), u.current.disabled = e);
  }, [o, a, e, l]), {
    active: i,
    rect: m,
    isOver: (s == null ? void 0 : s.id) === o,
    node: y,
    over: s,
    setNodeRef: P
  };
}
function Ap(n) {
  let {
    animation: t,
    children: e
  } = n;
  const [o, r] = xe(null), [a, i] = xe(null), l = Io(e);
  return !e && !o && l && r(l), Xt(() => {
    if (!a)
      return;
    const s = o == null ? void 0 : o.key, c = o == null ? void 0 : o.props.id;
    if (s == null || c == null) {
      r(null);
      return;
    }
    Promise.resolve(t(c, a)).then(() => {
      r(null);
    });
  }, [t, o, a]), Se.createElement(Se.Fragment, null, e, o ? bc(o, {
    ref: i
  }) : null);
}
const Lp = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function $p(n) {
  let {
    children: t
  } = n;
  return Se.createElement(eo.Provider, {
    value: Vs
  }, Se.createElement(Zo.Provider, {
    value: Lp
  }, t));
}
const Fp = {
  position: "fixed",
  touchAction: "none"
}, Mp = (n) => Uo(n) ? "transform 250ms ease" : void 0, zp = /* @__PURE__ */ yc((n, t) => {
  let {
    as: e,
    activatorEvent: o,
    adjustScale: r,
    children: a,
    className: i,
    rect: l,
    style: s,
    transform: c,
    transition: u = Mp
  } = n;
  if (!l)
    return null;
  const d = r ? c : {
    ...c,
    scaleX: 1,
    scaleY: 1
  }, m = {
    ...Fp,
    width: l.width,
    height: l.height,
    top: l.top,
    left: l.left,
    transform: Jt.Transform.toString(d),
    transformOrigin: r && o ? Af(o, l) : void 0,
    transition: typeof u == "function" ? u(o) : u,
    ...s
  };
  return Se.createElement(e, {
    className: i,
    style: m,
    ref: t
  }, a);
}), Hp = (n) => (t) => {
  let {
    active: e,
    dragOverlay: o
  } = t;
  const r = {}, {
    styles: a,
    className: i
  } = n;
  if (a != null && a.active)
    for (const [l, s] of Object.entries(a.active))
      s !== void 0 && (r[l] = e.node.style.getPropertyValue(l), e.node.style.setProperty(l, s));
  if (a != null && a.dragOverlay)
    for (const [l, s] of Object.entries(a.dragOverlay))
      s !== void 0 && o.node.style.setProperty(l, s);
  return i != null && i.active && e.node.classList.add(i.active), i != null && i.dragOverlay && o.node.classList.add(i.dragOverlay), function() {
    for (const [s, c] of Object.entries(r))
      e.node.style.setProperty(s, c);
    i != null && i.active && e.node.classList.remove(i.active);
  };
}, Bp = (n) => {
  let {
    transform: {
      initial: t,
      final: e
    }
  } = n;
  return [{
    transform: Jt.Transform.toString(t)
  }, {
    transform: Jt.Transform.toString(e)
  }];
}, Wp = {
  duration: 250,
  easing: "ease",
  keyframes: Bp,
  sideEffects: /* @__PURE__ */ Hp({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function Vp(n) {
  let {
    config: t,
    draggableNodes: e,
    droppableContainers: o,
    measuringConfiguration: r
  } = n;
  return Ko((a, i) => {
    if (t === null)
      return;
    const l = e.get(a);
    if (!l)
      return;
    const s = l.node.current;
    if (!s)
      return;
    const c = Ws(i);
    if (!c)
      return;
    const {
      transform: u
    } = At(i).getComputedStyle(i), d = Ds(u);
    if (!d)
      return;
    const m = typeof t == "function" ? t : Kp(t);
    return zs(s, r.draggable.measure), m({
      active: {
        id: a,
        data: l.data,
        node: s,
        rect: r.draggable.measure(s)
      },
      draggableNodes: e,
      dragOverlay: {
        node: i,
        rect: r.dragOverlay.measure(c)
      },
      droppableContainers: o,
      measuringConfiguration: r,
      transform: d
    });
  });
}
function Kp(n) {
  const {
    duration: t,
    easing: e,
    sideEffects: o,
    keyframes: r
  } = {
    ...Wp,
    ...n
  };
  return (a) => {
    let {
      active: i,
      dragOverlay: l,
      transform: s,
      ...c
    } = a;
    if (!t)
      return;
    const u = {
      x: l.rect.left - i.rect.left,
      y: l.rect.top - i.rect.top
    }, d = {
      scaleX: s.scaleX !== 1 ? i.rect.width * s.scaleX / l.rect.width : 1,
      scaleY: s.scaleY !== 1 ? i.rect.height * s.scaleY / l.rect.height : 1
    }, m = {
      x: s.x - u.x,
      y: s.y - u.y,
      ...d
    }, v = r({
      ...c,
      active: i,
      dragOverlay: l,
      transform: {
        initial: s,
        final: m
      }
    }), [x] = v, h = v[v.length - 1];
    if (JSON.stringify(x) === JSON.stringify(h))
      return;
    const S = o == null ? void 0 : o({
      active: i,
      dragOverlay: l,
      ...c
    }), w = l.node.animate(v, {
      duration: t,
      easing: e,
      fill: "forwards"
    });
    return new Promise((E) => {
      w.onfinish = () => {
        S == null || S(), E();
      };
    });
  };
}
let Dl = 0;
function Up(n) {
  return Be(() => {
    if (n != null)
      return Dl++, Dl;
  }, [n]);
}
const Yp = /* @__PURE__ */ Se.memo((n) => {
  let {
    adjustScale: t = !1,
    children: e,
    dropAnimation: o,
    style: r,
    transition: a,
    modifiers: i,
    wrapperElement: l = "div",
    className: s,
    zIndex: c = 999
  } = n;
  const {
    activatorEvent: u,
    active: d,
    activeNodeRect: m,
    containerNodeRect: v,
    draggableNodes: x,
    droppableContainers: h,
    dragOverlay: S,
    over: w,
    measuringConfiguration: E,
    scrollableAncestors: C,
    scrollableAncestorRects: q,
    windowRect: y
  } = Gs(), P = ln(Zo), I = Up(d == null ? void 0 : d.id), V = Us(i, {
    activatorEvent: u,
    active: d,
    activeNodeRect: m,
    containerNodeRect: v,
    draggingNodeRect: S.rect,
    over: w,
    overlayNodeRect: S.rect,
    scrollableAncestors: C,
    scrollableAncestorRects: q,
    transform: P,
    windowRect: y
  }), N = xi(m), _ = Vp({
    config: o,
    draggableNodes: x,
    droppableContainers: h,
    measuringConfiguration: E
  }), k = N ? S.setRef : void 0;
  return Se.createElement($p, null, Se.createElement(Ap, {
    animation: _
  }, d && I ? Se.createElement(zp, {
    key: I,
    id: d.id,
    ref: k,
    as: l,
    activatorEvent: u,
    adjustScale: t,
    className: s,
    transition: a,
    rect: N,
    style: {
      zIndex: c,
      ...r
    },
    transform: V
  }, e) : null));
});
function On(n, t, e) {
  const o = n.slice();
  return o.splice(e < 0 ? o.length + e : e, 0, o.splice(t, 1)[0]), o;
}
function Gp(n, t) {
  return n.reduce((e, o, r) => {
    const a = t.get(o);
    return a && (e[r] = a), e;
  }, Array(n.length));
}
function co(n) {
  return n !== null && n >= 0;
}
function Xp(n, t) {
  if (n === t)
    return !0;
  if (n.length !== t.length)
    return !1;
  for (let e = 0; e < n.length; e++)
    if (n[e] !== t[e])
      return !1;
  return !0;
}
function Jp(n) {
  return typeof n == "boolean" ? {
    draggable: n,
    droppable: n
  } : n;
}
const Js = (n) => {
  let {
    rects: t,
    activeIndex: e,
    overIndex: o,
    index: r
  } = n;
  const a = On(t, o, e), i = t[r], l = a[r];
  return !l || !i ? null : {
    x: l.left - i.left,
    y: l.top - i.top,
    scaleX: l.width / i.width,
    scaleY: l.height / i.height
  };
}, Zp = (n) => {
  let {
    activeIndex: t,
    index: e,
    rects: o,
    overIndex: r
  } = n, a, i;
  return e === t && (a = o[e], i = o[r]), e === r && (a = o[e], i = o[t]), !i || !a ? null : {
    x: i.left - a.left,
    y: i.top - a.top,
    scaleX: i.width / a.width,
    scaleY: i.height / a.height
  };
}, uo = {
  scaleX: 1,
  scaleY: 1
}, Ei = (n) => {
  var t;
  let {
    activeIndex: e,
    activeNodeRect: o,
    index: r,
    rects: a,
    overIndex: i
  } = n;
  const l = (t = a[e]) != null ? t : o;
  if (!l)
    return null;
  if (r === e) {
    const c = a[i];
    return c ? {
      x: 0,
      y: e < i ? c.top + c.height - (l.top + l.height) : c.top - l.top,
      ...uo
    } : null;
  }
  const s = Qp(a, r, e);
  return r > e && r <= i ? {
    x: 0,
    y: -l.height - s,
    ...uo
  } : r < e && r >= i ? {
    x: 0,
    y: l.height + s,
    ...uo
  } : {
    x: 0,
    y: 0,
    ...uo
  };
};
function Qp(n, t, e) {
  const o = n[t], r = n[t - 1], a = n[t + 1];
  return o ? e < t ? r ? o.top - (r.top + r.height) : a ? a.top - (o.top + o.height) : 0 : a ? a.top - (o.top + o.height) : r ? o.top - (r.top + r.height) : 0 : 0;
}
const Zs = "Sortable", Qs = /* @__PURE__ */ Se.createContext({
  activeIndex: -1,
  containerId: Zs,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: Js,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function ea(n) {
  let {
    children: t,
    id: e,
    items: o,
    strategy: r = Js,
    disabled: a = !1
  } = n;
  const {
    active: i,
    dragOverlay: l,
    droppableRects: s,
    over: c,
    measureDroppableContainers: u
  } = Gs(), d = Qr(Zs, e), m = l.rect !== null, v = Be(() => o.map((P) => typeof P == "object" && "id" in P ? P.id : P), [o]), x = i != null, h = i ? v.indexOf(i.id) : -1, S = c ? v.indexOf(c.id) : -1, w = ze(v), E = !Xp(v, w.current), C = S !== -1 && h === -1 || E, q = Jp(a);
  Xt(() => {
    E && x && u(v);
  }, [E, v, x, u]), ge(() => {
    w.current = v;
  }, [v]);
  const y = Be(
    () => ({
      activeIndex: h,
      containerId: d,
      disabled: q,
      disableTransforms: C,
      items: v,
      overIndex: S,
      useDragOverlay: m,
      sortedRects: Gp(v, s),
      strategy: r
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [h, d, q.draggable, q.droppable, C, v, S, s, m, r]
  );
  return Se.createElement(Qs.Provider, {
    value: y
  }, t);
}
const em = (n) => {
  let {
    id: t,
    items: e,
    activeIndex: o,
    overIndex: r
  } = n;
  return On(e, o, r).indexOf(t);
}, tm = (n) => {
  let {
    containerId: t,
    isSorting: e,
    wasDragging: o,
    index: r,
    items: a,
    newIndex: i,
    previousItems: l,
    previousContainerId: s,
    transition: c
  } = n;
  return !c || !o || l !== a && r === i ? !1 : e ? !0 : i !== r && t === s;
}, nm = {
  duration: 200,
  easing: "ease"
}, ec = "transform", rm = /* @__PURE__ */ Jt.Transition.toString({
  property: ec,
  duration: 0,
  easing: "linear"
}), om = {
  roleDescription: "sortable"
};
function am(n) {
  let {
    disabled: t,
    index: e,
    node: o,
    rect: r
  } = n;
  const [a, i] = xe(null), l = ze(e);
  return Xt(() => {
    if (!t && e !== l.current && o.current) {
      const s = r.current;
      if (s) {
        const c = ir(o.current, {
          ignoreTransform: !0
        }), u = {
          x: s.left - c.left,
          y: s.top - c.top,
          scaleX: s.width / c.width,
          scaleY: s.height / c.height
        };
        (u.x || u.y) && i(u);
      }
    }
    e !== l.current && (l.current = e);
  }, [t, e, o, r]), ge(() => {
    a && i(null);
  }, [a]), a;
}
function ta(n) {
  let {
    animateLayoutChanges: t = tm,
    attributes: e,
    disabled: o,
    data: r,
    getNewIndex: a = em,
    id: i,
    strategy: l,
    resizeObserverConfig: s,
    transition: c = nm
  } = n;
  const {
    items: u,
    containerId: d,
    activeIndex: m,
    disabled: v,
    disableTransforms: x,
    sortedRects: h,
    overIndex: S,
    useDragOverlay: w,
    strategy: E
  } = ln(Qs), C = im(o, v), q = u.indexOf(i), y = Be(() => ({
    sortable: {
      containerId: d,
      index: q,
      items: u
    },
    ...r
  }), [d, r, q, u]), P = Be(() => u.slice(u.indexOf(i)), [u, i]), {
    rect: I,
    node: V,
    isOver: N,
    setNodeRef: _
  } = Xs({
    id: i,
    data: y,
    disabled: C.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: P,
      ...s
    }
  }), {
    active: k,
    activatorEvent: X,
    activeNodeRect: M,
    attributes: J,
    setNodeRef: te,
    listeners: me,
    isDragging: ye,
    over: se,
    setActivatorNodeRef: Q,
    transform: R
  } = Ys({
    id: i,
    data: y,
    attributes: {
      ...om,
      ...e
    },
    disabled: C.draggable
  }), Y = Ef(_, te), ae = !!k, G = ae && !x && co(m) && co(S), K = !w && ye, ue = K && G ? R : null, pe = G ? ue ?? (l ?? E)({
    rects: h,
    activeNodeRect: M,
    activeIndex: m,
    overIndex: S,
    index: q
  }) : null, U = co(m) && co(S) ? a({
    id: i,
    items: u,
    activeIndex: m,
    overIndex: S
  }) : q, j = k == null ? void 0 : k.id, $ = ze({
    activeId: j,
    items: u,
    newIndex: U,
    containerId: d
  }), le = u !== $.current.items, F = t({
    active: k,
    containerId: d,
    isDragging: ye,
    isSorting: ae,
    id: i,
    index: q,
    items: u,
    newIndex: $.current.newIndex,
    previousItems: $.current.items,
    previousContainerId: $.current.containerId,
    transition: c,
    wasDragging: $.current.activeId != null
  }), qe = am({
    disabled: !F,
    index: q,
    node: V,
    rect: I
  });
  return ge(() => {
    ae && $.current.newIndex !== U && ($.current.newIndex = U), d !== $.current.containerId && ($.current.containerId = d), u !== $.current.items && ($.current.items = u);
  }, [ae, U, d, u]), ge(() => {
    if (j === $.current.activeId)
      return;
    if (j && !$.current.activeId) {
      $.current.activeId = j;
      return;
    }
    const _e = setTimeout(() => {
      $.current.activeId = j;
    }, 50);
    return () => clearTimeout(_e);
  }, [j]), {
    active: k,
    activeIndex: m,
    attributes: J,
    data: y,
    rect: I,
    index: q,
    newIndex: U,
    items: u,
    isOver: N,
    isSorting: ae,
    isDragging: ye,
    listeners: me,
    node: V,
    overIndex: S,
    over: se,
    setNodeRef: Y,
    setActivatorNodeRef: Q,
    setDroppableNodeRef: _,
    setDraggableNodeRef: te,
    transform: qe ?? pe,
    transition: ke()
  };
  function ke() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      qe || // Or to prevent items jumping to back to their "new" position when items change
      le && $.current.newIndex === q
    )
      return rm;
    if (!(K && !Uo(X) || !c) && (ae || F))
      return Jt.Transition.toString({
        ...c,
        property: ec
      });
  }
}
function im(n, t) {
  var e, o;
  return typeof n == "boolean" ? {
    draggable: n,
    // Backwards compatibility
    droppable: !1
  } : {
    draggable: (e = n == null ? void 0 : n.draggable) != null ? e : t.draggable,
    droppable: (o = n == null ? void 0 : n.droppable) != null ? o : t.droppable
  };
}
function jo(n) {
  if (!n)
    return !1;
  const t = n.data.current;
  return !!(t && "sortable" in t && typeof t.sortable == "object" && "containerId" in t.sortable && "items" in t.sortable && "index" in t.sortable);
}
const lm = [De.Down, De.Right, De.Up, De.Left], na = (n, t) => {
  let {
    context: {
      active: e,
      collisionRect: o,
      droppableRects: r,
      droppableContainers: a,
      over: i,
      scrollableAncestors: l
    }
  } = t;
  if (lm.includes(n.code)) {
    if (n.preventDefault(), !e || !o)
      return;
    const s = [];
    a.getEnabled().forEach((d) => {
      if (!d || d != null && d.disabled)
        return;
      const m = r.get(d.id);
      if (m)
        switch (n.code) {
          case De.Down:
            o.top < m.top && s.push(d);
            break;
          case De.Up:
            o.top > m.top && s.push(d);
            break;
          case De.Left:
            o.left > m.left && s.push(d);
            break;
          case De.Right:
            o.left < m.left && s.push(d);
            break;
        }
    });
    const c = $f({
      active: e,
      collisionRect: o,
      droppableRects: r,
      droppableContainers: s,
      pointerCoordinates: null
    });
    let u = Rs(c, "id");
    if (u === (i == null ? void 0 : i.id) && c.length > 1 && (u = c[1].id), u != null) {
      const d = a.get(e.id), m = a.get(u), v = m ? r.get(m.id) : null, x = m == null ? void 0 : m.node.current;
      if (x && v && d && m) {
        const S = Xo(x).some((P, I) => l[I] !== P), w = tc(d, m), E = sm(d, m), C = S || !w ? {
          x: 0,
          y: 0
        } : {
          x: E ? o.width - v.width : 0,
          y: E ? o.height - v.height : 0
        }, q = {
          x: v.left,
          y: v.top
        };
        return C.x && C.y ? q : Hr(q, C);
      }
    }
  }
};
function tc(n, t) {
  return !jo(n) || !jo(t) ? !1 : n.data.current.sortable.containerId === t.data.current.sortable.containerId;
}
function sm(n, t) {
  return !jo(n) || !jo(t) || !tc(n, t) ? !1 : n.data.current.sortable.index < t.data.current.sortable.index;
}
function qr() {
  return qr = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, qr.apply(this, arguments);
}
function Wr(n) {
  "@babel/helpers - typeof";
  return Wr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wr(n);
}
function cm(n, t) {
  if (Wr(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t || "default");
    if (Wr(o) !== "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function um(n) {
  var t = cm(n, "string");
  return Wr(t) === "symbol" ? t : String(t);
}
function vn(n, t, e) {
  return t = um(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
var dm = {
  root: function(t) {
    var e = t.props;
    return ve("p-badge p-component", vn({
      "p-badge-no-gutter": A.isNotEmpty(e.value) && String(e.value).length === 1,
      "p-badge-dot": A.isEmpty(e.value),
      "p-badge-lg": e.size === "large",
      "p-badge-xl": e.size === "xlarge"
    }, "p-badge-".concat(e.severity), e.severity !== null));
  }
}, fm = `
@layer primereact {
    .p-badge {
        display: inline-block;
        border-radius: 10px;
        text-align: center;
        padding: 0 .5rem;
    }
    
    .p-overlay-badge {
        position: relative;
    }
    
    .p-overlay-badge .p-badge {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%,-50%);
        transform-origin: 100% 0;
        margin: 0;
    }
    
    .p-badge-dot {
        width: .5rem;
        min-width: .5rem;
        height: .5rem;
        border-radius: 50%;
        padding: 0;
    }
    
    .p-badge-no-gutter {
        padding: 0;
        border-radius: 50%;
    }
}
`, fo = je.extend({
  defaultProps: {
    __TYPE: "Badge",
    __parentMetadata: null,
    value: null,
    severity: null,
    size: null,
    style: null,
    className: null,
    children: void 0
  },
  css: {
    classes: dm,
    styles: fm
  }
});
function Nl(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function pm(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nl(Object(e), !0).forEach(function(o) {
      vn(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Nl(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
var nc = /* @__PURE__ */ f.memo(/* @__PURE__ */ f.forwardRef(function(n, t) {
  var e = Dt(), o = f.useContext(ut), r = fo.getProps(n, o), a = fo.setMetaData(pm({
    props: r
  }, r.__parentMetadata)), i = a.ptm, l = a.cx, s = a.isUnstyled;
  Qt(fo.css.styles, s, {
    name: "badge"
  });
  var c = f.useRef(null);
  f.useImperativeHandle(t, function() {
    return {
      props: r,
      getElement: function() {
        return c.current;
      }
    };
  });
  var u = e({
    ref: c,
    style: r.style,
    className: ve(r.className, l("root"))
  }, fo.getOtherProps(r), i("root"));
  return /* @__PURE__ */ f.createElement("span", u, r.value);
}));
nc.displayName = "Badge";
var mm = {
  icon: function(t) {
    var e = t.props;
    return ve("p-button-icon p-c", vn({}, "p-button-icon-".concat(e.iconPos), e.label));
  },
  loadingIcon: function(t) {
    var e = t.props, o = t.className;
    return ve(o, {
      "p-button-loading-icon": e.loading
    });
  },
  label: "p-button-label p-c",
  root: function(t) {
    var e = t.props, o = t.size, r = t.disabled;
    return ve("p-button p-component", vn(vn(vn(vn({
      "p-button-icon-only": (e.icon || e.loading) && !e.label && !e.children,
      "p-button-vertical": (e.iconPos === "top" || e.iconPos === "bottom") && e.label,
      "p-disabled": r,
      "p-button-loading": e.loading,
      "p-button-outlined": e.outlined,
      "p-button-raised": e.raised,
      "p-button-link": e.link,
      "p-button-text": e.text,
      "p-button-rounded": e.rounded,
      "p-button-loading-label-only": e.loading && !e.icon && e.label
    }, "p-button-loading-".concat(e.iconPos), e.loading && e.label), "p-button-".concat(o), o), "p-button-".concat(e.severity), e.severity), "p-button-plain", e.plain));
  }
}, po = je.extend({
  defaultProps: {
    __TYPE: "Button",
    __parentMetadata: null,
    badge: null,
    badgeClassName: null,
    className: null,
    children: void 0,
    disabled: !1,
    icon: null,
    iconPos: "left",
    label: null,
    link: !1,
    loading: !1,
    loadingIcon: null,
    outlined: !1,
    plain: !1,
    raised: !1,
    rounded: !1,
    severity: null,
    size: null,
    text: !1,
    tooltip: null,
    tooltipOptions: null,
    visible: !0
  },
  css: {
    classes: mm
  }
});
function Al(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function ya(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Al(Object(e), !0).forEach(function(o) {
      vn(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Al(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
var Tt = /* @__PURE__ */ f.memo(/* @__PURE__ */ f.forwardRef(function(n, t) {
  var e = Dt(), o = f.useContext(ut), r = po.getProps(n, o), a = r.disabled || r.loading, i = ya(ya({
    props: r
  }, r.__parentMetadata), {}, {
    context: {
      disabled: a
    }
  }), l = po.setMetaData(i), s = l.ptm, c = l.cx, u = l.isUnstyled;
  Qt(po.css.styles, u, {
    name: "button",
    styled: !0
  });
  var d = f.useRef(t);
  if (f.useEffect(function() {
    A.combinedRefs(d, t);
  }, [d, t]), r.visible === !1)
    return null;
  var m = function() {
    var N = ve("p-button-icon p-c", vn({}, "p-button-icon-".concat(r.iconPos), r.label)), _ = e({
      className: c("icon")
    }, s("icon"));
    N = ve(N, {
      "p-button-loading-icon": r.loading
    });
    var k = e({
      className: c("loadingIcon", {
        className: N
      })
    }, s("loadingIcon")), X = r.loading ? r.loadingIcon || /* @__PURE__ */ f.createElement(Ho, qr({}, k, {
      spin: !0
    })) : r.icon;
    return Yt.getJSXIcon(X, ya({}, _), {
      props: r
    });
  }, v = function() {
    var N = e({
      className: c("label")
    }, s("label"));
    return r.label ? /* @__PURE__ */ f.createElement("span", N, r.label) : !r.children && !r.label && /* @__PURE__ */ f.createElement("span", qr({}, N, {
      dangerouslySetInnerHTML: {
        __html: "&nbsp;"
      }
    }));
  }, x = function() {
    if (r.badge) {
      var N = e({
        className: ve(r.badgeClassName),
        value: r.badge,
        unstyled: r.unstyled,
        __parentMetadata: {
          parent: i
        }
      }, s("badge"));
      return /* @__PURE__ */ f.createElement(nc, N, r.badge);
    }
    return null;
  }, h = !a || r.tooltipOptions && r.tooltipOptions.showOnDisabled, S = A.isNotEmpty(r.tooltip) && h, w = {
    large: "lg",
    small: "sm"
  }, E = w[r.size], C = m(), q = v(), y = x(), P = r.label ? r.label + (r.badge ? " " + r.badge : "") : r["aria-label"], I = e({
    ref: d,
    "aria-label": P,
    "data-pc-autofocus": r.autoFocus,
    className: ve(r.className, c("root", {
      size: E,
      disabled: a
    })),
    disabled: a
  }, po.getOtherProps(r), s("root"));
  return /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement("button", I, C, q, r.children, y, /* @__PURE__ */ f.createElement(Mr, null)), S && /* @__PURE__ */ f.createElement(rr, qr({
    target: d,
    content: r.tooltip,
    pt: s("tooltip")
  }, r.tooltipOptions)));
}));
Tt.displayName = "Button";
function Pr() {
  return Pr = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, Pr.apply(this, arguments);
}
function Vr(n) {
  "@babel/helpers - typeof";
  return Vr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vr(n);
}
function vm(n, t) {
  if (Vr(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t || "default");
    if (Vr(o) !== "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function gm(n) {
  var t = vm(n, "string");
  return Vr(t) === "symbol" ? t : String(t);
}
function hm(n, t, e) {
  return t = gm(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
var bm = {
  root: function(t) {
    var e = t.props, o = t.context;
    return ve("p-radiobutton p-component", {
      "p-highlight": e.checked,
      "p-disabled": e.disabled,
      "p-invalid": e.invalid,
      "p-variant-filled": e.variant ? e.variant === "filled" : o && o.inputStyle === "filled"
    });
  },
  box: "p-radiobutton-box",
  input: "p-radiobutton-input",
  icon: "p-radiobutton-icon"
}, mo = je.extend({
  defaultProps: {
    __TYPE: "RadioButton",
    autoFocus: !1,
    checked: !1,
    className: null,
    disabled: !1,
    id: null,
    inputId: null,
    inputRef: null,
    invalid: !1,
    variant: null,
    name: null,
    onChange: null,
    onClick: null,
    required: !1,
    style: null,
    tabIndex: null,
    tooltip: null,
    tooltipOptions: null,
    value: null,
    children: void 0
  },
  css: {
    classes: bm
  }
});
function Ll(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function ym(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ll(Object(e), !0).forEach(function(o) {
      hm(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Ll(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
var In = /* @__PURE__ */ f.memo(/* @__PURE__ */ f.forwardRef(function(n, t) {
  var e = Dt(), o = f.useContext(ut), r = mo.getProps(n, o), a = f.useRef(null), i = f.useRef(r.inputRef), l = mo.setMetaData({
    props: r
  }), s = l.ptm, c = l.cx, u = l.isUnstyled;
  Qt(mo.css.styles, u, {
    name: "radiobutton"
  });
  var d = function(y) {
    m(y);
  }, m = function(y) {
    if (!(r.disabled || r.readonly) && r.onChange) {
      var P = r.checked, I = y.target instanceof HTMLDivElement, V = y.target === i.current, N = V && y.target.checked !== P, _ = I && (L.hasClass(a.current, "p-radiobutton-checked") === P ? !P : !1), k = !P, X = {
        originalEvent: y,
        value: r.value,
        checked: k,
        stopPropagation: function() {
          y == null || y.stopPropagation();
        },
        preventDefault: function() {
          y == null || y.preventDefault();
        },
        target: {
          type: "radio",
          name: r.name,
          id: r.id,
          value: r.value,
          checked: k
        }
      };
      if (N || _) {
        var M;
        if (r == null || (M = r.onChange) === null || M === void 0 || M.call(r, X), y.defaultPrevented)
          return;
        _ && (i.current.checked = k);
      }
      L.focus(i.current);
    }
  }, v = function(y) {
    var P;
    r == null || (P = r.onFocus) === null || P === void 0 || P.call(r, y);
  }, x = function(y) {
    var P;
    r == null || (P = r.onBlur) === null || P === void 0 || P.call(r, y);
  };
  f.useImperativeHandle(t, function() {
    return {
      props: r,
      select: d,
      focus: function() {
        return L.focus(i.current);
      },
      getElement: function() {
        return a.current;
      },
      getInput: function() {
        return i.current;
      }
    };
  }), f.useEffect(function() {
    i.current && (i.current.checked = r.checked);
  }, [r.checked]), f.useEffect(function() {
    A.combinedRefs(i, r.inputRef);
  }, [i, r.inputRef]), Zt(function() {
    r.autoFocus && L.focus(i.current, r.autoFocus);
  });
  var h = A.isNotEmpty(r.tooltip), S = mo.getOtherProps(r), w = e({
    id: r.id,
    className: ve(r.className, c("root", {
      context: o
    })),
    style: r.style,
    "data-p-checked": r.checked
  }, S, s("root"));
  delete w.input, delete w.box, delete w.icon;
  var E = function() {
    var y = A.reduceKeys(S, L.ARIA_PROPS), P = e(ym({
      id: r.inputId,
      type: "radio",
      name: r.name,
      defaultChecked: r.checked,
      onFocus: v,
      onBlur: x,
      onChange: m,
      disabled: r.disabled,
      readOnly: r.readonly,
      required: r.required,
      tabIndex: r.tabIndex,
      className: c("input")
    }, y), n.input, s("input"));
    return /* @__PURE__ */ f.createElement("input", Pr({
      ref: i
    }, P));
  }, C = function() {
    var y = e({
      className: c("box")
    }, n.box, s("box")), P = e({
      className: c("icon")
    }, n.icon, s("icon"));
    return /* @__PURE__ */ f.createElement("div", y, /* @__PURE__ */ f.createElement("div", P));
  };
  return /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement("div", Pr({
    ref: a
  }, w), E(), C()), h && /* @__PURE__ */ f.createElement(rr, Pr({
    target: a,
    content: r.tooltip,
    pt: s("tooltip")
  }, r.tooltipOptions)));
}));
In.displayName = "RadioButton";
const wm = ({ option: n, onChange: t, index: e }) => {
  const [o, r] = xe(n), a = (m) => {
    const v = {
      value: o.value,
      label: o.label,
      [m.target.name]: m.target.value
    };
    r(v), t(v);
  };
  ge(() => {
    r(n);
  }, [n]);
  const {
    attributes: i,
    listeners: l,
    setNodeRef: s,
    setActivatorNodeRef: c,
    transform: u
  } = ta({ id: e }), d = {
    transform: Jt.Transform.toString(u)
    // transition,
  };
  return /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsxs("div", { className: "flex flex-row gap-2", ref: s, style: d, ...i, children: [
    /* @__PURE__ */ p.jsx(
      Tt,
      {
        icon: "pi pi-sort",
        className: "px-0 border-noround border-0",
        style: { width: "1rem", color: "#E1E1E1", background: "transparent" },
        severity: "secondary",
        size: "small",
        ref: c,
        ...l
      }
    ),
    /* @__PURE__ */ p.jsxs("div", { className: "p-inputgroup flex-1", children: [
      /* @__PURE__ */ p.jsx(
        We,
        {
          id: "value",
          value: o.value,
          name: "value",
          onChange: a,
          className: "flex-1",
          placeholder: "Value"
        }
      ),
      /* @__PURE__ */ p.jsx(
        We,
        {
          id: "label",
          value: o.label,
          name: "label",
          onChange: a,
          className: "flex-1",
          placeholder: "Label"
        }
      )
    ] }),
    /* @__PURE__ */ p.jsx(Tt, { icon: "pi pi-trash", onClick: () => t(null) })
  ] }) });
}, xm = ({ onInsert: n }) => {
  const t = {
    value: "",
    label: ""
  }, [e, o] = xe(t), r = (i) => {
    const l = {
      value: e.value,
      label: e.label,
      [i.target.name]: i.target.value
    };
    o(l);
  }, a = () => {
    n({ value: e.value, label: e.label }), o(t);
  };
  return /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsxs("div", { className: "flex flex-row gap-2", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "p-inputgroup flex-1", children: [
      /* @__PURE__ */ p.jsx(
        We,
        {
          id: "value",
          value: e.value,
          name: "value",
          onChange: r,
          className: "",
          placeholder: "Value"
        }
      ),
      /* @__PURE__ */ p.jsx(
        We,
        {
          id: "label",
          value: e.label,
          name: "label",
          onChange: r,
          className: "",
          placeholder: "Label"
        }
      )
    ] }),
    /* @__PURE__ */ p.jsx(
      Tt,
      {
        icon: "pi pi-plus",
        onClick: a
      }
    )
  ] }) });
}, Em = ({ item: n, onChange: t, form: e, config: o }) => {
  const [r, a] = xe({ ...Cn, ...n }), i = (u, d) => {
    const m = Gt(r.options);
    u ? m[d] = u : m.splice(d, 1);
    const v = { ...r, options: m };
    a(v), t(v);
  }, l = (u) => {
    const d = Gt(r.options);
    d.push(u);
    const m = { ...r, options: d };
    a(m), t(m);
  }, s = Yo(
    Tn(sr),
    Tn(lr, {
      coordinateGetter: na
    })
  );
  function c(u) {
    const { active: d, over: m } = u;
    if (m && d.id !== m.id) {
      let v = function(S) {
        return parseInt(S.replace("option-", ""));
      };
      const x = On(r.options, v(m.id.toString()), v(d.id.toString())), h = { ...r, options: x };
      a(h), t(h);
    }
  }
  return /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsxs("div", { className: "form-item flex flex-column gap-4", children: [
    /* @__PURE__ */ p.jsx(
      Qo,
      {
        sensors: s,
        collisionDetection: Go,
        onDragEnd: c,
        children: /* @__PURE__ */ p.jsx(
          ea,
          {
            items: r.options.map((u, d) => `option-${d}`),
            strategy: Ei,
            children: r.options.map((u, d) => /* @__PURE__ */ p.jsx(
              wm,
              {
                option: u,
                index: `option-${d}`,
                onChange: (m) => {
                  i(m, d);
                }
              },
              `option-${d}`
            ))
          }
        )
      }
    ),
    /* @__PURE__ */ p.jsx(
      xm,
      {
        onInsert: l
      },
      "item-new"
    )
  ] }) });
}, Sm = ({ item: n, onChange: t, form: e, config: o }) => {
  const [r, a] = xe({ ...Cn, ...n }), i = (l) => {
    const s = { ...r, [l.target.name]: l.target.value };
    a(s), t(s);
  };
  return ge(() => {
    a({ ...Cn, ...n });
  }, [n]), /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsxs(an, { activeIndex: 0, children: [
    /* @__PURE__ */ p.jsx(zt, { header: "General", children: /* @__PURE__ */ p.jsxs("div", { className: "form-item flex flex-column gap-4", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "flex flex-column gap-2", children: [
        /* @__PURE__ */ p.jsx("label", { htmlFor: "label", children: "Label" }),
        /* @__PURE__ */ p.jsx(
          We,
          {
            id: "label",
            value: r.label || "",
            name: "label",
            onChange: i,
            className: "w-full"
          }
        )
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "flex flex-column gap-2", children: [
        /* @__PURE__ */ p.jsx("label", { htmlFor: "placeholder", children: "Placeholder" }),
        /* @__PURE__ */ p.jsx(
          We,
          {
            id: "placeholder",
            value: r.placeholder || "",
            name: "placeholder",
            onChange: i,
            className: "w-full"
          }
        )
      ] })
    ] }) }, "general"),
    /* @__PURE__ */ p.jsxs(zt, { header: "Options", children: [
      o.external_select_options.map((l) => /* @__PURE__ */ p.jsxs("div", { className: "flex align-items-center", children: [
        /* @__PURE__ */ p.jsx(
          In,
          {
            inputId: l.key,
            name: "source",
            value: l.key,
            onChange: i,
            checked: r.source === l.key
          }
        ),
        /* @__PURE__ */ p.jsx("label", { htmlFor: l.key, className: "ml-2", children: l.label })
      ] }, l.key)),
      /* @__PURE__ */ p.jsxs("div", { className: "flex align-items-center", children: [
        /* @__PURE__ */ p.jsx(
          In,
          {
            inputId: "local",
            name: "source",
            value: "local",
            onChange: i,
            checked: r.source === "local"
          }
        ),
        /* @__PURE__ */ p.jsx("label", { htmlFor: "local", className: "ml-2", children: "Custom" })
      ] }, "local"),
      /* @__PURE__ */ p.jsx("div", { className: "mt-4", children: r.source === "local" && /* @__PURE__ */ p.jsx(Em, { item: r, onChange: t, config: o, form: e }) })
    ] }, "options")
  ] }) });
}, Cm = (n) => ({}), Om = new _n({
  type: Cn.type,
  form: new Rt({
    render: yf,
    validation: wf
  }),
  settings: new Rt({
    render: Sm,
    validation: Cm
  }),
  heading: "Select box",
  description: "select from a list of items in a drop down",
  hidden: !1,
  icon: xf,
  data: Cn
}), Mn = {
  id: sn(),
  type: "input-text",
  label: "",
  value: "",
  placeholder: ""
}, qm = ({ item: n, onChange: t, config: e }) => {
  const [o, r] = xe({ ...Mn, ...n });
  ge(() => {
    r({ ...Mn, ...n });
  }, [n]);
  const a = (l) => {
    const s = { ...Mn, ...n, value: l.target.value };
    t(s);
  }, i = Math.random().toString(36).substring(2, 15);
  return /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsx("article", { children: /* @__PURE__ */ p.jsxs("div", { className: "flex flex-column gap-2", children: [
    /* @__PURE__ */ p.jsx("label", { htmlFor: i, children: o.label }),
    /* @__PURE__ */ p.jsx(
      We,
      {
        value: o.value,
        onChange: a,
        placeholder: o.placeholder,
        className: "w-full",
        id: i
      }
    )
  ] }) }) });
}, Pm = (n) => ({});
var $l;
function Ja() {
  return Ja = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e) ({}).hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, Ja.apply(null, arguments);
}
var Tm = function(t) {
  return /* @__PURE__ */ f.createElement("svg", Ja({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, t), $l || ($l = /* @__PURE__ */ f.createElement("path", {
    d: "M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-1.8l18-48h159.6l18 48H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-25.8zM279.8 304H168.2L224 155.1z"
  })));
};
const Im = ({ item: n, onChange: t, config: e }) => {
  const [o, r] = xe({ ...Mn, ...n }), a = (i) => {
    const l = { ...o, [i.target.name]: i.target.value };
    r(l), t(l);
  };
  return ge(() => {
    r({ ...Mn, ...n });
  }, [n]), /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsx(an, { activeIndex: 0, children: /* @__PURE__ */ p.jsx(zt, { header: "General", children: /* @__PURE__ */ p.jsxs("div", { className: "form-item flex flex-column gap-4", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "flex flex-column gap-2", children: [
      /* @__PURE__ */ p.jsx("label", { htmlFor: "label", children: "Label" }),
      /* @__PURE__ */ p.jsx(
        We,
        {
          id: "label",
          value: o.label || "",
          name: "label",
          onChange: a,
          className: "w-full"
        }
      )
    ] }),
    /* @__PURE__ */ p.jsxs("div", { className: "flex flex-column gap-2", children: [
      /* @__PURE__ */ p.jsx("label", { htmlFor: "placeholder", children: "Placeholder" }),
      /* @__PURE__ */ p.jsx(
        We,
        {
          id: "placeholder",
          value: o.placeholder || "",
          name: "placeholder",
          onChange: a,
          className: "w-full"
        }
      )
    ] })
  ] }) }, "general") }) });
}, _m = (n) => ({}), km = new _n({
  type: Mn.type,
  form: new Rt({
    render: qm,
    validation: Pm
  }),
  settings: new Rt({
    render: Im,
    validation: _m
  }),
  heading: "Text input",
  description: "a simple box to insert a value into",
  hidden: !1,
  icon: Tm,
  data: Mn
}), qn = {
  id: sn(),
  type: "input-checkbox",
  label: "",
  value: [],
  source: "local",
  options: []
};
function Tr() {
  return Tr = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, Tr.apply(this, arguments);
}
function Kr(n) {
  "@babel/helpers - typeof";
  return Kr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Kr(n);
}
function Rm(n, t) {
  if (Kr(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t || "default");
    if (Kr(o) !== "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function jm(n) {
  var t = Rm(n, "string");
  return Kr(t) === "symbol" ? t : String(t);
}
function Dm(n, t, e) {
  return t = jm(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function Nm(n) {
  if (Array.isArray(n)) return n;
}
function Am(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var o, r, a, i, l = [], s = !0, c = !1;
    try {
      if (a = (e = e.call(n)).next, t !== 0) for (; !(s = (o = a.call(e)).done) && (l.push(o.value), l.length !== t); s = !0) ;
    } catch (u) {
      c = !0, r = u;
    } finally {
      try {
        if (!s && e.return != null && (i = e.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw r;
      }
    }
    return l;
  }
}
function Fl(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, o = new Array(t); e < t; e++) o[e] = n[e];
  return o;
}
function Lm(n, t) {
  if (n) {
    if (typeof n == "string") return Fl(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Fl(n, t);
  }
}
function $m() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Fm(n, t) {
  return Nm(n) || Am(n, t) || Lm(n, t) || $m();
}
var Mm = {
  box: "p-checkbox-box",
  input: "p-checkbox-input",
  icon: "p-checkbox-icon",
  root: function(t) {
    var e = t.props, o = t.checked, r = t.context;
    return ve("p-checkbox p-component", {
      "p-highlight": o,
      "p-disabled": e.disabled,
      "p-invalid": e.invalid,
      "p-variant-filled": e.variant ? e.variant === "filled" : r && r.inputStyle === "filled"
    });
  }
}, vo = je.extend({
  defaultProps: {
    __TYPE: "Checkbox",
    autoFocus: !1,
    checked: !1,
    className: null,
    disabled: !1,
    falseValue: !1,
    icon: null,
    id: null,
    inputId: null,
    inputRef: null,
    invalid: !1,
    variant: null,
    name: null,
    onChange: null,
    onContextMenu: null,
    onMouseDown: null,
    readOnly: !1,
    required: !1,
    style: null,
    tabIndex: null,
    tooltip: null,
    tooltipOptions: null,
    trueValue: !0,
    value: null,
    children: void 0
  },
  css: {
    classes: Mm
  }
});
function Ml(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function zl(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ml(Object(e), !0).forEach(function(o) {
      Dm(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Ml(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
var rc = /* @__PURE__ */ f.memo(/* @__PURE__ */ f.forwardRef(function(n, t) {
  var e = Dt(), o = f.useContext(ut), r = vo.getProps(n, o), a = f.useState(!1), i = Fm(a, 2), l = i[0], s = i[1], c = vo.setMetaData({
    props: r,
    state: {
      focused: l
    },
    context: {
      checked: r.checked === r.trueValue,
      disabled: r.disabled
    }
  }), u = c.ptm, d = c.cx, m = c.isUnstyled;
  Qt(vo.css.styles, m, {
    name: "checkbox"
  });
  var v = f.useRef(null), x = f.useRef(r.inputRef), h = function() {
    return r.checked === r.trueValue;
  }, S = function(_) {
    if (!(r.disabled || r.readonly) && r.onChange) {
      var k, X = h(), M = X ? r.falseValue : r.trueValue, J = {
        originalEvent: _,
        value: r.value,
        checked: M,
        stopPropagation: function() {
          _ == null || _.stopPropagation();
        },
        preventDefault: function() {
          _ == null || _.preventDefault();
        },
        target: {
          type: "checkbox",
          name: r.name,
          id: r.id,
          value: r.value,
          checked: M
        }
      };
      if (r == null || (k = r.onChange) === null || k === void 0 || k.call(r, J), _.defaultPrevented)
        return;
      L.focus(x.current);
    }
  }, w = function() {
    var _;
    s(!0), r == null || (_ = r.onFocus) === null || _ === void 0 || _.call(r);
  }, E = function() {
    var _;
    s(!1), r == null || (_ = r.onBlur) === null || _ === void 0 || _.call(r);
  };
  f.useImperativeHandle(t, function() {
    return {
      props: r,
      focus: function() {
        return L.focus(x.current);
      },
      getElement: function() {
        return v.current;
      },
      getInput: function() {
        return x.current;
      }
    };
  }), f.useEffect(function() {
    A.combinedRefs(x, r.inputRef);
  }, [x, r.inputRef]), Ue(function() {
    x.current.checked = h();
  }, [r.checked, r.trueValue]), Zt(function() {
    r.autoFocus && L.focus(x.current, r.autoFocus);
  });
  var C = h(), q = A.isNotEmpty(r.tooltip), y = vo.getOtherProps(r), P = e({
    id: r.id,
    className: ve(r.className, d("root", {
      checked: C,
      context: o
    })),
    style: r.style,
    "data-p-highlight": C,
    "data-p-disabled": r.disabled,
    onContextMenu: r.onContextMenu,
    onMouseDown: r.onMouseDown
  }, y, u("root")), I = function() {
    var _ = A.reduceKeys(y, L.ARIA_PROPS), k = e(zl({
      id: r.inputId,
      type: "checkbox",
      className: d("input"),
      name: r.name,
      tabIndex: r.tabIndex,
      onFocus: function(M) {
        return w();
      },
      onBlur: function(M) {
        return E();
      },
      onChange: function(M) {
        return S(M);
      },
      disabled: r.disabled,
      readOnly: r.readOnly,
      required: r.required,
      "aria-invalid": r.invalid,
      checked: C
    }, _), u("input"));
    return /* @__PURE__ */ f.createElement("input", Tr({
      ref: x
    }, k));
  }, V = function() {
    var _ = e({
      className: d("icon")
    }, u("icon")), k = e({
      className: d("box", {
        checked: C
      }),
      "data-p-highlight": C,
      "data-p-disabled": r.disabled
    }, u("box")), X = C ? r.icon || /* @__PURE__ */ f.createElement(vi, _) : null, M = Yt.getJSXIcon(X, zl({}, _), {
      props: r,
      checked: C
    });
    return /* @__PURE__ */ f.createElement("div", k, M);
  };
  return /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement("div", Tr({
    ref: v
  }, P), I(), V()), q && /* @__PURE__ */ f.createElement(rr, Tr({
    target: v,
    content: r.tooltip,
    pt: u("tooltip")
  }, r.tooltipOptions)));
}));
rc.displayName = "Checkbox";
const zm = ({ item: n, onChange: t, config: e }) => {
  const [o, r] = xe({ ...qn, ...n }), [a, i] = xe(o.options);
  ge(() => {
    r({ ...qn, ...n });
  }, [n]), ge(() => {
    if (i(o.options), o.source != "local") {
      const c = e.external_select_options.find((u) => u.key == o.source);
      c && (c.options && i(c.options), c.options_func && c.options_func().then((u) => {
        i(u);
      }));
    }
  }, [o.source, o.options]);
  const l = (c) => {
    const u = { ...qn, ...n }, d = c.target;
    d.checked ? u.value.push(d.value) : u.value = u.value.filter((m) => m != d.value), t(u);
  }, s = Math.random().toString(36).substring(2, 15);
  return /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsx("article", { children: /* @__PURE__ */ p.jsxs("div", { className: "flex flex-column gap-2", children: [
    /* @__PURE__ */ p.jsx("label", { htmlFor: s, children: o.label }),
    a.map((c) => /* @__PURE__ */ p.jsxs("div", { className: "flex align-items-center", children: [
      /* @__PURE__ */ p.jsx(
        rc,
        {
          inputId: c.value,
          name: "value",
          value: c.value,
          onChange: l,
          checked: o.value.includes(c.value)
        }
      ),
      /* @__PURE__ */ p.jsx("label", { htmlFor: c.value, className: "ml-2", children: c.label })
    ] }, c.value))
  ] }) }) });
}, Hm = (n) => ({});
var Hl;
function Za() {
  return Za = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e) ({}).hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, Za.apply(null, arguments);
}
var Bm = function(t) {
  return /* @__PURE__ */ f.createElement("svg", Za({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, t), Hl || (Hl = /* @__PURE__ */ f.createElement("path", {
    d: "M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm337 113L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
  })));
};
const Wm = ({ option: n, onChange: t, index: e }) => {
  const [o, r] = xe(n), a = (m) => {
    const v = {
      value: o.value,
      label: o.label,
      [m.target.name]: m.target.value
    };
    r(v), t(v);
  };
  ge(() => {
    r(n);
  }, [n]);
  const {
    attributes: i,
    listeners: l,
    setNodeRef: s,
    setActivatorNodeRef: c,
    transform: u
  } = ta({ id: e }), d = {
    transform: Jt.Transform.toString(u)
    // transition,
  };
  return /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsxs("div", { className: "flex flex-row gap-2", ref: s, style: d, ...i, children: [
    /* @__PURE__ */ p.jsx(
      Tt,
      {
        icon: "pi pi-sort",
        className: "px-0 border-noround border-0",
        style: { width: "1rem", color: "#E1E1E1", background: "transparent" },
        severity: "secondary",
        size: "small",
        ref: c,
        ...l
      }
    ),
    /* @__PURE__ */ p.jsxs("div", { className: "p-inputgroup flex-1", children: [
      /* @__PURE__ */ p.jsx(
        We,
        {
          id: "value",
          value: o.value,
          name: "value",
          onChange: a,
          className: "flex-1",
          placeholder: "Value"
        }
      ),
      /* @__PURE__ */ p.jsx(
        We,
        {
          id: "label",
          value: o.label,
          name: "label",
          onChange: a,
          className: "flex-1",
          placeholder: "Label"
        }
      )
    ] }),
    /* @__PURE__ */ p.jsx(Tt, { icon: "pi pi-trash", onClick: () => t(null) })
  ] }) });
}, Vm = ({ onInsert: n }) => {
  const t = {
    value: "",
    label: ""
  }, [e, o] = xe(t), r = (i) => {
    const l = {
      value: e.value,
      label: e.label,
      [i.target.name]: i.target.value
    };
    o(l);
  }, a = () => {
    n({ value: e.value, label: e.label }), o(t);
  };
  return /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsxs("div", { className: "flex flex-row gap-2", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "p-inputgroup flex-1", children: [
      /* @__PURE__ */ p.jsx(
        We,
        {
          id: "value",
          value: e.value,
          name: "value",
          onChange: r,
          className: "",
          placeholder: "Value"
        }
      ),
      /* @__PURE__ */ p.jsx(
        We,
        {
          id: "label",
          value: e.label,
          name: "label",
          onChange: r,
          className: "",
          placeholder: "Label"
        }
      )
    ] }),
    /* @__PURE__ */ p.jsx(
      Tt,
      {
        icon: "pi pi-plus",
        onClick: a
      }
    )
  ] }) });
}, Km = ({ item: n, onChange: t, form: e, config: o }) => {
  const [r, a] = xe({ ...qn, ...n }), i = (u, d) => {
    const m = Gt(r.options);
    u ? m[d] = u : m.splice(d, 1);
    const v = { ...r, options: m };
    a(v), t(v);
  }, l = (u) => {
    const d = Gt(r.options);
    d.push(u);
    const m = { ...r, options: d };
    a(m), t(m);
  }, s = Yo(
    Tn(sr),
    Tn(lr, {
      coordinateGetter: na
    })
  );
  function c(u) {
    const { active: d, over: m } = u;
    if (m && d.id !== m.id) {
      let v = function(S) {
        return parseInt(S.replace("option-", ""));
      };
      const x = On(r.options, v(m.id.toString()), v(d.id.toString())), h = { ...r, options: x };
      a(h), t(h);
    }
  }
  return /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsxs("div", { className: "form-item flex flex-column gap-4", children: [
    /* @__PURE__ */ p.jsx(
      Qo,
      {
        sensors: s,
        collisionDetection: Go,
        onDragEnd: c,
        children: /* @__PURE__ */ p.jsx(
          ea,
          {
            items: r.options.map((u, d) => `option-${d}`),
            strategy: Ei,
            children: r.options.map((u, d) => /* @__PURE__ */ p.jsx(
              Wm,
              {
                option: u,
                index: `option-${d}`,
                onChange: (m) => {
                  i(m, d);
                }
              },
              `option-${d}`
            ))
          }
        )
      }
    ),
    /* @__PURE__ */ p.jsx(
      Vm,
      {
        onInsert: l
      },
      "item-new"
    )
  ] }) });
}, Um = ({ item: n, onChange: t, form: e, config: o }) => {
  const [r, a] = xe({ ...qn, ...n }), i = (l) => {
    const s = { ...r, [l.target.name]: l.target.value };
    a(s), t(s);
  };
  return ge(() => {
    a({ ...qn, ...n });
  }, [n]), /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsxs(an, { activeIndex: 0, children: [
    /* @__PURE__ */ p.jsx(zt, { header: "General", children: /* @__PURE__ */ p.jsx("div", { className: "form-item flex flex-column gap-4", children: /* @__PURE__ */ p.jsxs("div", { className: "flex flex-column gap-2", children: [
      /* @__PURE__ */ p.jsx("label", { htmlFor: "label", children: "Label" }),
      /* @__PURE__ */ p.jsx(
        We,
        {
          id: "label",
          value: r.label || "",
          name: "label",
          onChange: i,
          className: "w-full"
        }
      )
    ] }) }) }, "general"),
    /* @__PURE__ */ p.jsxs(zt, { header: "Options", children: [
      o.external_select_options.map((l) => /* @__PURE__ */ p.jsxs("div", { className: "flex align-items-center", children: [
        /* @__PURE__ */ p.jsx(
          In,
          {
            inputId: l.key,
            name: "source",
            value: l.key,
            onChange: i,
            checked: r.source === l.key
          }
        ),
        /* @__PURE__ */ p.jsx("label", { htmlFor: l.key, className: "ml-2", children: l.label })
      ] }, l.key)),
      /* @__PURE__ */ p.jsxs("div", { className: "flex align-items-center", children: [
        /* @__PURE__ */ p.jsx(
          In,
          {
            inputId: "local",
            name: "source",
            value: "local",
            onChange: i,
            checked: r.source === "local"
          }
        ),
        /* @__PURE__ */ p.jsx("label", { htmlFor: "local", className: "ml-2", children: "Custom" })
      ] }, "local"),
      /* @__PURE__ */ p.jsx("div", { className: "mt-4", children: r.source === "local" && /* @__PURE__ */ p.jsx(Km, { item: r, onChange: t, config: o, form: e }) })
    ] }, "options")
  ] }) });
}, Ym = (n) => ({}), Gm = new _n({
  type: qn.type,
  form: new Rt({
    render: zm,
    validation: Hm
  }),
  settings: new Rt({
    render: Um,
    validation: Ym
  }),
  heading: "Checkbox input",
  description: "select one or more items from a checkbox",
  hidden: !1,
  icon: Bm,
  data: qn
}), Pn = {
  id: sn(),
  type: "input-radio",
  label: "",
  value: "",
  source: "local",
  options: []
}, Xm = ({ item: n, onChange: t, config: e }) => {
  const [o, r] = xe({ ...Pn, ...n }), [a, i] = xe(o.options);
  ge(() => {
    r({ ...Pn, ...n });
  }, [n]), ge(() => {
    if (i(o.options), o.source != "local") {
      const c = e.external_select_options.find((u) => u.key == o.source);
      c && (c.options && i(c.options), c.options_func && c.options_func().then((u) => {
        i(u);
      }));
    }
  }, [o.source, o.options]);
  const l = (c) => {
    const u = { ...Pn, ...n, value: c.target.value };
    t(u);
  }, s = Math.random().toString(36).substring(2, 15);
  return /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsx("article", { children: /* @__PURE__ */ p.jsxs("div", { className: "flex flex-column gap-2", children: [
    /* @__PURE__ */ p.jsx("label", { htmlFor: s, children: o.label }),
    a.map((c) => /* @__PURE__ */ p.jsxs("div", { className: "flex align-items-center", children: [
      /* @__PURE__ */ p.jsx(
        In,
        {
          inputId: c.value,
          name: "value",
          value: c.value,
          onChange: l,
          checked: o.value == c.value
        }
      ),
      /* @__PURE__ */ p.jsx("label", { htmlFor: c.value, className: "ml-2", children: c.label })
    ] }, c.value))
  ] }) }) });
}, Jm = (n) => ({});
var Bl;
function Qa() {
  return Qa = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e) ({}).hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, Qa.apply(null, arguments);
}
var Zm = function(t) {
  return /* @__PURE__ */ f.createElement("svg", Qa({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, t), Bl || (Bl = /* @__PURE__ */ f.createElement("path", {
    d: "M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192"
  })));
};
const Qm = ({ option: n, onChange: t, index: e }) => {
  const [o, r] = xe(n), a = (m) => {
    const v = {
      value: o.value,
      label: o.label,
      [m.target.name]: m.target.value
    };
    r(v), t(v);
  };
  ge(() => {
    r(n);
  }, [n]);
  const {
    attributes: i,
    listeners: l,
    setNodeRef: s,
    setActivatorNodeRef: c,
    transform: u
  } = ta({ id: e }), d = {
    transform: Jt.Transform.toString(u)
    // transition,
  };
  return /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsxs("div", { className: "flex flex-row gap-2", ref: s, style: d, ...i, children: [
    /* @__PURE__ */ p.jsx(
      Tt,
      {
        icon: "pi pi-sort",
        className: "px-0 border-noround border-0",
        style: { width: "1rem", color: "#E1E1E1", background: "transparent" },
        severity: "secondary",
        size: "small",
        ref: c,
        ...l
      }
    ),
    /* @__PURE__ */ p.jsxs("div", { className: "p-inputgroup flex-1", children: [
      /* @__PURE__ */ p.jsx(
        We,
        {
          id: "value",
          value: o.value,
          name: "value",
          onChange: a,
          className: "flex-1",
          placeholder: "Value"
        }
      ),
      /* @__PURE__ */ p.jsx(
        We,
        {
          id: "label",
          value: o.label,
          name: "label",
          onChange: a,
          className: "flex-1",
          placeholder: "Label"
        }
      )
    ] }),
    /* @__PURE__ */ p.jsx(Tt, { icon: "pi pi-trash", onClick: () => t(null) })
  ] }) });
}, ev = ({ onInsert: n }) => {
  const t = {
    value: "",
    label: ""
  }, [e, o] = xe(t), r = (i) => {
    const l = {
      value: e.value,
      label: e.label,
      [i.target.name]: i.target.value
    };
    o(l);
  }, a = () => {
    n({ value: e.value, label: e.label }), o(t);
  };
  return /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsxs("div", { className: "flex flex-row gap-2", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "p-inputgroup flex-1", children: [
      /* @__PURE__ */ p.jsx(
        We,
        {
          id: "value",
          value: e.value,
          name: "value",
          onChange: r,
          className: "",
          placeholder: "Value"
        }
      ),
      /* @__PURE__ */ p.jsx(
        We,
        {
          id: "label",
          value: e.label,
          name: "label",
          onChange: r,
          className: "",
          placeholder: "Label"
        }
      )
    ] }),
    /* @__PURE__ */ p.jsx(
      Tt,
      {
        icon: "pi pi-plus",
        onClick: a
      }
    )
  ] }) });
}, tv = ({ item: n, onChange: t, form: e, config: o }) => {
  const [r, a] = xe({ ...Pn, ...n }), i = (u, d) => {
    const m = Gt(r.options);
    u ? m[d] = u : m.splice(d, 1);
    const v = { ...r, options: m };
    a(v), t(v);
  }, l = (u) => {
    const d = Gt(r.options);
    d.push(u);
    const m = { ...r, options: d };
    a(m), t(m);
  }, s = Yo(
    Tn(sr),
    Tn(lr, {
      coordinateGetter: na
    })
  );
  function c(u) {
    const { active: d, over: m } = u;
    if (m && d.id !== m.id) {
      let v = function(S) {
        return parseInt(S.replace("option-", ""));
      };
      const x = On(r.options, v(m.id.toString()), v(d.id.toString())), h = { ...r, options: x };
      a(h), t(h);
    }
  }
  return /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsxs("div", { className: "form-item flex flex-column gap-4", children: [
    /* @__PURE__ */ p.jsx(
      Qo,
      {
        sensors: s,
        collisionDetection: Go,
        onDragEnd: c,
        children: /* @__PURE__ */ p.jsx(
          ea,
          {
            items: r.options.map((u, d) => `option-${d}`),
            strategy: Ei,
            children: r.options.map((u, d) => /* @__PURE__ */ p.jsx(
              Qm,
              {
                option: u,
                index: `option-${d}`,
                onChange: (m) => {
                  i(m, d);
                }
              },
              `option-${d}`
            ))
          }
        )
      }
    ),
    /* @__PURE__ */ p.jsx(
      ev,
      {
        onInsert: l
      },
      "item-new"
    )
  ] }) });
}, nv = ({ item: n, onChange: t, form: e, config: o }) => {
  const [r, a] = xe({ ...Pn, ...n }), i = (l) => {
    const s = { ...r, [l.target.name]: l.target.value };
    a(s), t(s);
  };
  return ge(() => {
    a({ ...Pn, ...n });
  }, [n]), /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsxs(an, { activeIndex: 0, children: [
    /* @__PURE__ */ p.jsx(zt, { header: "General", children: /* @__PURE__ */ p.jsx("div", { className: "form-item flex flex-column gap-4", children: /* @__PURE__ */ p.jsxs("div", { className: "flex flex-column gap-2", children: [
      /* @__PURE__ */ p.jsx("label", { htmlFor: "label", children: "Label" }),
      /* @__PURE__ */ p.jsx(
        We,
        {
          id: "label",
          value: r.label || "",
          name: "label",
          onChange: i,
          className: "w-full"
        }
      )
    ] }) }) }, "general"),
    /* @__PURE__ */ p.jsxs(zt, { header: "Options", children: [
      o.external_select_options.map((l) => /* @__PURE__ */ p.jsxs("div", { className: "flex align-items-center", children: [
        /* @__PURE__ */ p.jsx(
          In,
          {
            inputId: l.key,
            name: "source",
            value: l.key,
            onChange: i,
            checked: r.source === l.key
          }
        ),
        /* @__PURE__ */ p.jsx("label", { htmlFor: l.key, className: "ml-2", children: l.label })
      ] }, l.key)),
      /* @__PURE__ */ p.jsxs("div", { className: "flex align-items-center", children: [
        /* @__PURE__ */ p.jsx(
          In,
          {
            inputId: "local",
            name: "source",
            value: "local",
            onChange: i,
            checked: r.source === "local"
          }
        ),
        /* @__PURE__ */ p.jsx("label", { htmlFor: "local", className: "ml-2", children: "Custom" })
      ] }, "local"),
      /* @__PURE__ */ p.jsx("div", { className: "mt-4", children: r.source === "local" && /* @__PURE__ */ p.jsx(tv, { item: r, onChange: t, config: o, form: e }) })
    ] }, "options")
  ] }) });
}, rv = (n) => ({}), ov = new _n({
  type: Pn.type,
  form: new Rt({
    render: Xm,
    validation: Jm
  }),
  settings: new Rt({
    render: nv,
    validation: rv
  }),
  heading: "Radio input",
  description: "select an item from a radio group",
  hidden: !1,
  icon: Zm,
  data: Pn
}), cr = new Lo(new Ao({ label: "Inputs" }));
cr.registerItem(zd);
cr.registerItem(Om);
cr.registerItem(km);
cr.registerItem(Gm);
cr.registerItem(ov);
const nr = {
  id: sn(),
  type: "special-signature",
  label: "",
  value: [],
  color: "#000000"
};
/*!
 * Signature Pad v5.0.3 | https://github.com/szimek/signature_pad
 * (c) 2024 Szymon Nowak | Released under the MIT license
 */
class Do {
  constructor(t, e, o, r) {
    if (isNaN(t) || isNaN(e))
      throw new Error(`Point is invalid: (${t}, ${e})`);
    this.x = +t, this.y = +e, this.pressure = o || 0, this.time = r || Date.now();
  }
  distanceTo(t) {
    return Math.sqrt(Math.pow(this.x - t.x, 2) + Math.pow(this.y - t.y, 2));
  }
  equals(t) {
    return this.x === t.x && this.y === t.y && this.pressure === t.pressure && this.time === t.time;
  }
  velocityFrom(t) {
    return this.time !== t.time ? this.distanceTo(t) / (this.time - t.time) : 0;
  }
}
class Si {
  static fromPoints(t, e) {
    const o = this.calculateControlPoints(t[0], t[1], t[2]).c2, r = this.calculateControlPoints(t[1], t[2], t[3]).c1;
    return new Si(t[1], o, r, t[2], e.start, e.end);
  }
  static calculateControlPoints(t, e, o) {
    const r = t.x - e.x, a = t.y - e.y, i = e.x - o.x, l = e.y - o.y, s = { x: (t.x + e.x) / 2, y: (t.y + e.y) / 2 }, c = { x: (e.x + o.x) / 2, y: (e.y + o.y) / 2 }, u = Math.sqrt(r * r + a * a), d = Math.sqrt(i * i + l * l), m = s.x - c.x, v = s.y - c.y, x = u + d == 0 ? 0 : d / (u + d), h = { x: c.x + m * x, y: c.y + v * x }, S = e.x - h.x, w = e.y - h.y;
    return {
      c1: new Do(s.x + S, s.y + w),
      c2: new Do(c.x + S, c.y + w)
    };
  }
  constructor(t, e, o, r, a, i) {
    this.startPoint = t, this.control2 = e, this.control1 = o, this.endPoint = r, this.startWidth = a, this.endWidth = i;
  }
  length() {
    let e = 0, o, r;
    for (let a = 0; a <= 10; a += 1) {
      const i = a / 10, l = this.point(i, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x), s = this.point(i, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);
      if (a > 0) {
        const c = l - o, u = s - r;
        e += Math.sqrt(c * c + u * u);
      }
      o = l, r = s;
    }
    return e;
  }
  point(t, e, o, r, a) {
    return e * (1 - t) * (1 - t) * (1 - t) + 3 * o * (1 - t) * (1 - t) * t + 3 * r * (1 - t) * t * t + a * t * t * t;
  }
}
class av {
  constructor() {
    try {
      this._et = new EventTarget();
    } catch {
      this._et = document;
    }
  }
  addEventListener(t, e, o) {
    this._et.addEventListener(t, e, o);
  }
  dispatchEvent(t) {
    return this._et.dispatchEvent(t);
  }
  removeEventListener(t, e, o) {
    this._et.removeEventListener(t, e, o);
  }
}
function iv(n, t = 250) {
  let e = 0, o = null, r, a, i;
  const l = () => {
    e = Date.now(), o = null, r = n.apply(a, i), o || (a = null, i = []);
  };
  return function(...c) {
    const u = Date.now(), d = t - (u - e);
    return a = this, i = c, d <= 0 || d > t ? (o && (clearTimeout(o), o = null), e = u, r = n.apply(a, i), o || (a = null, i = [])) : o || (o = window.setTimeout(l, d)), r;
  };
}
class No extends av {
  constructor(t, e = {}) {
    var o, r, a;
    super(), this.canvas = t, this._drawingStroke = !1, this._isEmpty = !0, this._lastPoints = [], this._data = [], this._lastVelocity = 0, this._lastWidth = 0, this._handleMouseDown = (i) => {
      !this._isLeftButtonPressed(i, !0) || this._drawingStroke || this._strokeBegin(this._pointerEventToSignatureEvent(i));
    }, this._handleMouseMove = (i) => {
      if (!this._isLeftButtonPressed(i, !0) || !this._drawingStroke) {
        this._strokeEnd(this._pointerEventToSignatureEvent(i), !1);
        return;
      }
      this._strokeMoveUpdate(this._pointerEventToSignatureEvent(i));
    }, this._handleMouseUp = (i) => {
      this._isLeftButtonPressed(i) || this._strokeEnd(this._pointerEventToSignatureEvent(i));
    }, this._handleTouchStart = (i) => {
      i.targetTouches.length !== 1 || this._drawingStroke || (i.cancelable && i.preventDefault(), this._strokeBegin(this._touchEventToSignatureEvent(i)));
    }, this._handleTouchMove = (i) => {
      if (i.targetTouches.length === 1) {
        if (i.cancelable && i.preventDefault(), !this._drawingStroke) {
          this._strokeEnd(this._touchEventToSignatureEvent(i), !1);
          return;
        }
        this._strokeMoveUpdate(this._touchEventToSignatureEvent(i));
      }
    }, this._handleTouchEnd = (i) => {
      i.targetTouches.length === 0 && (i.cancelable && i.preventDefault(), this.canvas.removeEventListener("touchmove", this._handleTouchMove), this._strokeEnd(this._touchEventToSignatureEvent(i)));
    }, this._handlePointerDown = (i) => {
      !this._isLeftButtonPressed(i) || this._drawingStroke || (i.preventDefault(), this._strokeBegin(this._pointerEventToSignatureEvent(i)));
    }, this._handlePointerMove = (i) => {
      if (!this._isLeftButtonPressed(i, !0) || !this._drawingStroke) {
        this._strokeEnd(this._pointerEventToSignatureEvent(i), !1);
        return;
      }
      i.preventDefault(), this._strokeMoveUpdate(this._pointerEventToSignatureEvent(i));
    }, this._handlePointerUp = (i) => {
      this._isLeftButtonPressed(i) || (i.preventDefault(), this._strokeEnd(this._pointerEventToSignatureEvent(i)));
    }, this.velocityFilterWeight = e.velocityFilterWeight || 0.7, this.minWidth = e.minWidth || 0.5, this.maxWidth = e.maxWidth || 2.5, this.throttle = (o = e.throttle) !== null && o !== void 0 ? o : 16, this.minDistance = (r = e.minDistance) !== null && r !== void 0 ? r : 5, this.dotSize = e.dotSize || 0, this.penColor = e.penColor || "black", this.backgroundColor = e.backgroundColor || "rgba(0,0,0,0)", this.compositeOperation = e.compositeOperation || "source-over", this.canvasContextOptions = (a = e.canvasContextOptions) !== null && a !== void 0 ? a : {}, this._strokeMoveUpdate = this.throttle ? iv(No.prototype._strokeUpdate, this.throttle) : No.prototype._strokeUpdate, this._ctx = t.getContext("2d", this.canvasContextOptions), this.clear(), this.on();
  }
  clear() {
    const { _ctx: t, canvas: e } = this;
    t.fillStyle = this.backgroundColor, t.clearRect(0, 0, e.width, e.height), t.fillRect(0, 0, e.width, e.height), this._data = [], this._reset(this._getPointGroupOptions()), this._isEmpty = !0;
  }
  fromDataURL(t, e = {}) {
    return new Promise((o, r) => {
      const a = new Image(), i = e.ratio || window.devicePixelRatio || 1, l = e.width || this.canvas.width / i, s = e.height || this.canvas.height / i, c = e.xOffset || 0, u = e.yOffset || 0;
      this._reset(this._getPointGroupOptions()), a.onload = () => {
        this._ctx.drawImage(a, c, u, l, s), o();
      }, a.onerror = (d) => {
        r(d);
      }, a.crossOrigin = "anonymous", a.src = t, this._isEmpty = !1;
    });
  }
  toDataURL(t = "image/png", e) {
    switch (t) {
      case "image/svg+xml":
        return typeof e != "object" && (e = void 0), `data:image/svg+xml;base64,${btoa(this.toSVG(e))}`;
      default:
        return typeof e != "number" && (e = void 0), this.canvas.toDataURL(t, e);
    }
  }
  on() {
    this.canvas.style.touchAction = "none", this.canvas.style.msTouchAction = "none", this.canvas.style.userSelect = "none";
    const t = /Macintosh/.test(navigator.userAgent) && "ontouchstart" in document;
    window.PointerEvent && !t ? this._handlePointerEvents() : (this._handleMouseEvents(), "ontouchstart" in window && this._handleTouchEvents());
  }
  off() {
    this.canvas.style.touchAction = "auto", this.canvas.style.msTouchAction = "auto", this.canvas.style.userSelect = "auto", this.canvas.removeEventListener("pointerdown", this._handlePointerDown), this.canvas.removeEventListener("mousedown", this._handleMouseDown), this.canvas.removeEventListener("touchstart", this._handleTouchStart), this._removeMoveUpEventListeners();
  }
  _getListenerFunctions() {
    var t;
    const e = window.document === this.canvas.ownerDocument ? window : (t = this.canvas.ownerDocument.defaultView) !== null && t !== void 0 ? t : this.canvas.ownerDocument;
    return {
      addEventListener: e.addEventListener.bind(e),
      removeEventListener: e.removeEventListener.bind(e)
    };
  }
  _removeMoveUpEventListeners() {
    const { removeEventListener: t } = this._getListenerFunctions();
    t("pointermove", this._handlePointerMove), t("pointerup", this._handlePointerUp), t("mousemove", this._handleMouseMove), t("mouseup", this._handleMouseUp), t("touchmove", this._handleTouchMove), t("touchend", this._handleTouchEnd);
  }
  isEmpty() {
    return this._isEmpty;
  }
  fromData(t, { clear: e = !0 } = {}) {
    e && this.clear(), this._fromData(t, this._drawCurve.bind(this), this._drawDot.bind(this)), this._data = this._data.concat(t);
  }
  toData() {
    return this._data;
  }
  _isLeftButtonPressed(t, e) {
    return e ? t.buttons === 1 : (t.buttons & 1) === 1;
  }
  _pointerEventToSignatureEvent(t) {
    return {
      event: t,
      type: t.type,
      x: t.clientX,
      y: t.clientY,
      pressure: "pressure" in t ? t.pressure : 0
    };
  }
  _touchEventToSignatureEvent(t) {
    const e = t.changedTouches[0];
    return {
      event: t,
      type: t.type,
      x: e.clientX,
      y: e.clientY,
      pressure: e.force
    };
  }
  _getPointGroupOptions(t) {
    return {
      penColor: t && "penColor" in t ? t.penColor : this.penColor,
      dotSize: t && "dotSize" in t ? t.dotSize : this.dotSize,
      minWidth: t && "minWidth" in t ? t.minWidth : this.minWidth,
      maxWidth: t && "maxWidth" in t ? t.maxWidth : this.maxWidth,
      velocityFilterWeight: t && "velocityFilterWeight" in t ? t.velocityFilterWeight : this.velocityFilterWeight,
      compositeOperation: t && "compositeOperation" in t ? t.compositeOperation : this.compositeOperation
    };
  }
  _strokeBegin(t) {
    if (!this.dispatchEvent(new CustomEvent("beginStroke", { detail: t, cancelable: !0 })))
      return;
    const { addEventListener: o } = this._getListenerFunctions();
    switch (t.event.type) {
      case "mousedown":
        o("mousemove", this._handleMouseMove), o("mouseup", this._handleMouseUp);
        break;
      case "touchstart":
        o("touchmove", this._handleTouchMove), o("touchend", this._handleTouchEnd);
        break;
      case "pointerdown":
        o("pointermove", this._handlePointerMove), o("pointerup", this._handlePointerUp);
        break;
    }
    this._drawingStroke = !0;
    const r = this._getPointGroupOptions(), a = Object.assign(Object.assign({}, r), { points: [] });
    this._data.push(a), this._reset(r), this._strokeUpdate(t);
  }
  _strokeUpdate(t) {
    if (!this._drawingStroke)
      return;
    if (this._data.length === 0) {
      this._strokeBegin(t);
      return;
    }
    this.dispatchEvent(new CustomEvent("beforeUpdateStroke", { detail: t }));
    const e = this._createPoint(t.x, t.y, t.pressure), o = this._data[this._data.length - 1], r = o.points, a = r.length > 0 && r[r.length - 1], i = a ? e.distanceTo(a) <= this.minDistance : !1, l = this._getPointGroupOptions(o);
    if (!a || !(a && i)) {
      const s = this._addPoint(e, l);
      a ? s && this._drawCurve(s, l) : this._drawDot(e, l), r.push({
        time: e.time,
        x: e.x,
        y: e.y,
        pressure: e.pressure
      });
    }
    this.dispatchEvent(new CustomEvent("afterUpdateStroke", { detail: t }));
  }
  _strokeEnd(t, e = !0) {
    this._removeMoveUpEventListeners(), this._drawingStroke && (e && this._strokeUpdate(t), this._drawingStroke = !1, this.dispatchEvent(new CustomEvent("endStroke", { detail: t })));
  }
  _handlePointerEvents() {
    this._drawingStroke = !1, this.canvas.addEventListener("pointerdown", this._handlePointerDown);
  }
  _handleMouseEvents() {
    this._drawingStroke = !1, this.canvas.addEventListener("mousedown", this._handleMouseDown);
  }
  _handleTouchEvents() {
    this.canvas.addEventListener("touchstart", this._handleTouchStart);
  }
  _reset(t) {
    this._lastPoints = [], this._lastVelocity = 0, this._lastWidth = (t.minWidth + t.maxWidth) / 2, this._ctx.fillStyle = t.penColor, this._ctx.globalCompositeOperation = t.compositeOperation;
  }
  _createPoint(t, e, o) {
    const r = this.canvas.getBoundingClientRect();
    return new Do(t - r.left, e - r.top, o, (/* @__PURE__ */ new Date()).getTime());
  }
  _addPoint(t, e) {
    const { _lastPoints: o } = this;
    if (o.push(t), o.length > 2) {
      o.length === 3 && o.unshift(o[0]);
      const r = this._calculateCurveWidths(o[1], o[2], e), a = Si.fromPoints(o, r);
      return o.shift(), a;
    }
    return null;
  }
  _calculateCurveWidths(t, e, o) {
    const r = o.velocityFilterWeight * e.velocityFrom(t) + (1 - o.velocityFilterWeight) * this._lastVelocity, a = this._strokeWidth(r, o), i = {
      end: a,
      start: this._lastWidth
    };
    return this._lastVelocity = r, this._lastWidth = a, i;
  }
  _strokeWidth(t, e) {
    return Math.max(e.maxWidth / (t + 1), e.minWidth);
  }
  _drawCurveSegment(t, e, o) {
    const r = this._ctx;
    r.moveTo(t, e), r.arc(t, e, o, 0, 2 * Math.PI, !1), this._isEmpty = !1;
  }
  _drawCurve(t, e) {
    const o = this._ctx, r = t.endWidth - t.startWidth, a = Math.ceil(t.length()) * 2;
    o.beginPath(), o.fillStyle = e.penColor;
    for (let i = 0; i < a; i += 1) {
      const l = i / a, s = l * l, c = s * l, u = 1 - l, d = u * u, m = d * u;
      let v = m * t.startPoint.x;
      v += 3 * d * l * t.control1.x, v += 3 * u * s * t.control2.x, v += c * t.endPoint.x;
      let x = m * t.startPoint.y;
      x += 3 * d * l * t.control1.y, x += 3 * u * s * t.control2.y, x += c * t.endPoint.y;
      const h = Math.min(t.startWidth + c * r, e.maxWidth);
      this._drawCurveSegment(v, x, h);
    }
    o.closePath(), o.fill();
  }
  _drawDot(t, e) {
    const o = this._ctx, r = e.dotSize > 0 ? e.dotSize : (e.minWidth + e.maxWidth) / 2;
    o.beginPath(), this._drawCurveSegment(t.x, t.y, r), o.closePath(), o.fillStyle = e.penColor, o.fill();
  }
  _fromData(t, e, o) {
    for (const r of t) {
      const { points: a } = r, i = this._getPointGroupOptions(r);
      if (a.length > 1)
        for (let l = 0; l < a.length; l += 1) {
          const s = a[l], c = new Do(s.x, s.y, s.pressure, s.time);
          l === 0 && this._reset(i);
          const u = this._addPoint(c, i);
          u && e(u, i);
        }
      else
        this._reset(i), o(a[0], i);
    }
  }
  toSVG({ includeBackgroundColor: t = !1 } = {}) {
    const e = this._data, o = Math.max(window.devicePixelRatio || 1, 1), r = 0, a = 0, i = this.canvas.width / o, l = this.canvas.height / o, s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    if (s.setAttribute("xmlns", "http://www.w3.org/2000/svg"), s.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), s.setAttribute("viewBox", `${r} ${a} ${i} ${l}`), s.setAttribute("width", i.toString()), s.setAttribute("height", l.toString()), t && this.backgroundColor) {
      const c = document.createElement("rect");
      c.setAttribute("width", "100%"), c.setAttribute("height", "100%"), c.setAttribute("fill", this.backgroundColor), s.appendChild(c);
    }
    return this._fromData(e, (c, { penColor: u }) => {
      const d = document.createElement("path");
      if (!isNaN(c.control1.x) && !isNaN(c.control1.y) && !isNaN(c.control2.x) && !isNaN(c.control2.y)) {
        const m = `M ${c.startPoint.x.toFixed(3)},${c.startPoint.y.toFixed(3)} C ${c.control1.x.toFixed(3)},${c.control1.y.toFixed(3)} ${c.control2.x.toFixed(3)},${c.control2.y.toFixed(3)} ${c.endPoint.x.toFixed(3)},${c.endPoint.y.toFixed(3)}`;
        d.setAttribute("d", m), d.setAttribute("stroke-width", (c.endWidth * 2.25).toFixed(3)), d.setAttribute("stroke", u), d.setAttribute("fill", "none"), d.setAttribute("stroke-linecap", "round"), s.appendChild(d);
      }
    }, (c, { penColor: u, dotSize: d, minWidth: m, maxWidth: v }) => {
      const x = document.createElement("circle"), h = d > 0 ? d : (m + v) / 2;
      x.setAttribute("r", h.toString()), x.setAttribute("cx", c.x.toString()), x.setAttribute("cy", c.y.toString()), x.setAttribute("fill", u), s.appendChild(x);
    }), s.outerHTML;
  }
}
function lv(n, t, e) {
  var o = e || {}, r = o.noTrailing, a = r === void 0 ? !1 : r, i = o.noLeading, l = i === void 0 ? !1 : i, s = o.debounceMode, c = s === void 0 ? void 0 : s, u, d = !1, m = 0;
  function v() {
    u && clearTimeout(u);
  }
  function x(S) {
    var w = S || {}, E = w.upcomingOnly, C = E === void 0 ? !1 : E;
    v(), d = !C;
  }
  function h() {
    for (var S = arguments.length, w = new Array(S), E = 0; E < S; E++)
      w[E] = arguments[E];
    var C = this, q = Date.now() - m;
    if (d)
      return;
    function y() {
      m = Date.now(), t.apply(C, w);
    }
    function P() {
      u = void 0;
    }
    !l && c && !u && y(), v(), c === void 0 && q > n ? l ? (m = Date.now(), a || (u = setTimeout(c ? P : y, n))) : y() : a !== !0 && (u = setTimeout(c ? P : y, c === void 0 ? n - q : n));
  }
  return h.cancel = x, h;
}
function sv(n, t, e) {
  var o = {}, r = o.atBegin, a = r === void 0 ? !1 : r;
  return lv(n, t, {
    debounceMode: a !== !1
  });
}
class xo extends f.PureComponent {
  constructor(t) {
    super(t), Object.defineProperty(this, "canvasRef", { enumerable: !0, configurable: !0, writable: !0, value: f.createRef() }), Object.defineProperty(this, "signaturePad", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "callResizeHandler", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this.state = { canvasWidth: 0, canvasHeight: 0 }, this.callResizeHandler = sv(this.props.debounceInterval, this.handleResize.bind(this));
  }
  componentDidMount() {
    const t = this.canvasRef.current;
    t && (this.props.width && this.props.height || (t.style.width = "100%", window.addEventListener("resize", this.callResizeHandler)), this.signaturePad = new No(t, this.props.options), this.scaleCanvas(t));
  }
  componentWillUnmount() {
    this.props.width && this.props.height || window.removeEventListener("resize", this.callResizeHandler), this.signaturePad.off();
  }
  get instance() {
    return this.signaturePad;
  }
  get canvas() {
    return this.canvasRef;
  }
  set dotSize(t) {
    this.signaturePad.dotSize = t;
  }
  get dotSize() {
    return this.signaturePad.dotSize;
  }
  set minWidth(t) {
    this.signaturePad.minWidth = t;
  }
  get minWidth() {
    return this.signaturePad.minWidth;
  }
  set maxWidth(t) {
    this.signaturePad.maxWidth = t;
  }
  get maxWidth() {
    return this.signaturePad.maxWidth;
  }
  set throttle(t) {
    this.signaturePad.throttle = t;
  }
  get throttle() {
    return this.signaturePad.throttle;
  }
  set backgroundColor(t) {
    this.signaturePad.backgroundColor = t;
  }
  get backgroundColor() {
    return this.signaturePad.backgroundColor;
  }
  set penColor(t) {
    this.signaturePad.penColor = t;
  }
  get penColor() {
    return this.signaturePad.penColor;
  }
  set velocityFilterWeight(t) {
    this.signaturePad.velocityFilterWeight = t;
  }
  get velocityFilterWeight() {
    return this.signaturePad.velocityFilterWeight;
  }
  isEmpty() {
    return this.signaturePad.isEmpty();
  }
  clear() {
    this.signaturePad.clear();
  }
  fromDataURL(t, e = {}) {
    this.signaturePad.fromDataURL(t, e);
  }
  toDataURL(t, e) {
    return this.signaturePad.toDataURL(t, e);
  }
  toSVG(t) {
    return this.signaturePad.toSVG(t);
  }
  fromData(t) {
    this.signaturePad.fromData(t);
  }
  toData() {
    return this.signaturePad.toData();
  }
  off() {
    this.signaturePad.off();
  }
  on() {
    this.signaturePad.on();
  }
  handleResize() {
    const t = this.canvasRef.current;
    t && this.scaleCanvas(t);
  }
  scaleCanvas(t) {
    const e = Math.max(window.devicePixelRatio || 1, 1), o = (this.props.width || t.offsetWidth) * e, r = (this.props.height || t.offsetHeight) * e, { canvasWidth: a, canvasHeight: i } = this.state;
    if (o === a && r === i) return;
    let l;
    this.props.redrawOnResize && this.signaturePad && !this.signaturePad.isEmpty() && (l = this.signaturePad.toDataURL()), t.width = o, t.height = r, this.setState({ canvasWidth: o, canvasHeight: r });
    const s = t.getContext("2d");
    s && s.scale(e, e), l ? this.signaturePad.fromDataURL(l) : this.signaturePad && this.signaturePad.clear();
  }
  render() {
    const { canvasProps: t } = this.props;
    return f.createElement("canvas", Object.assign({ "data-testid": "canvas-element", ref: this.canvasRef }, t));
  }
}
Object.defineProperty(xo, "displayName", { enumerable: !0, configurable: !0, writable: !0, value: "react-signature-pad-wrapper" }), Object.defineProperty(xo, "propTypes", { enumerable: !0, configurable: !0, writable: !0, value: { width: Dn.number, height: Dn.number, options: Dn.object, canvasProps: Dn.object, redrawOnResize: Dn.bool.isRequired, debounceInterval: Dn.number.isRequired } }), Object.defineProperty(xo, "defaultProps", { enumerable: !0, configurable: !0, writable: !0, value: { redrawOnResize: !1, debounceInterval: 150 } });
const cv = ({ item: n, onChange: t, config: e }) => {
  const [o, r] = xe({ ...nr, ...n });
  ge(() => {
    r({ ...nr, ...n });
  }, [n]);
  const a = Math.random().toString(36).substring(2, 15), i = Se.createRef(), l = () => {
    const u = i.current;
    u && u.instance.clear();
    const d = Gt(o);
    d.value = [], r(d), t(d);
  }, s = () => {
    const u = i.current;
    if (!u)
      return;
    const d = Gt(o);
    u.isEmpty() ? d.value = [] : d.value = u.toData(), r(d), t(d);
  };
  ge(() => {
    o.value && i.current && i.current.fromData(o.value);
  }, [o]);
  const c = {
    height: "10rem",
    width: "100%",
    border: "1px solid #cccccc",
    boxShadow: "0 0 0.32rem #ccc inset"
  };
  return /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsx("article", { children: /* @__PURE__ */ p.jsxs("div", { className: "flex flex-column gap-2", children: [
    /* @__PURE__ */ p.jsx("label", { htmlFor: a, children: o.label }),
    /* @__PURE__ */ p.jsx("div", { children: /* @__PURE__ */ p.jsx(
      xo,
      {
        ref: i,
        options: { penColor: "rgb(0, 0, 0)" },
        redrawOnResize: !0,
        canvasProps: { style: c }
      }
    ) }),
    /* @__PURE__ */ p.jsx("button", { onClick: l, children: "clear" }),
    /* @__PURE__ */ p.jsx("button", { onClick: s, children: "save" })
  ] }) }) });
}, uv = (n) => ({});
var Wl;
function ei() {
  return ei = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e) ({}).hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, ei.apply(null, arguments);
}
var dv = function(t) {
  return /* @__PURE__ */ f.createElement("svg", ei({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512"
  }, t), Wl || (Wl = /* @__PURE__ */ f.createElement("path", {
    d: "M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64v-19.3c-2.7 1.1-5.4 2-8.2 2.7l-60.1 15c-3 .7-6 1.2-9 1.4-.9.1-1.8.2-2.7.2h-64c-6.1 0-11.6-3.4-14.3-8.8l-8.8-17.7c-1.7-3.4-5.1-5.5-8.8-5.5s-7.2 2.1-8.8 5.5l-8.8 17.7c-2.9 5.9-9.2 9.4-15.7 8.8s-12.1-5.1-13.9-11.3L144 381l-9.8 32.8c-6.1 20.3-24.8 34.2-46 34.2H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h8.2c7.1 0 13.3-4.6 15.3-11.4l14.9-49.5c3.4-11.3 13.8-19.1 25.6-19.1s22.2 7.8 25.6 19.1l11.6 38.6c7.4-6.2 16.8-9.7 26.8-9.7 15.9 0 30.4 9 37.5 23.2l4.4 8.8h8.9c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l94.8-94.8V160H256c-17.7 0-32-14.3-32-32V0zm192 0v128h128zm293.8 139.7c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6zM311.9 321c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5.2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4l129.2-129.3-71-71z"
  })));
};
const fv = ({ item: n, onChange: t, config: e }) => {
  const [o, r] = xe({ ...nr, ...n }), a = (i) => {
    const l = { ...o, [i.target.name]: i.target.value };
    r(l), t(l);
  };
  return ge(() => {
    r({ ...nr, ...n });
  }, [n]), /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsx(an, { activeIndex: 0, children: /* @__PURE__ */ p.jsx(zt, { header: "General", children: /* @__PURE__ */ p.jsx("div", { className: "form-item flex flex-column gap-4", children: /* @__PURE__ */ p.jsxs("div", { className: "flex flex-column gap-2", children: [
    /* @__PURE__ */ p.jsx("label", { htmlFor: "label", children: "Label" }),
    /* @__PURE__ */ p.jsx(
      We,
      {
        id: "label",
        value: o.label || "",
        name: "label",
        onChange: a,
        className: "w-full"
      }
    )
  ] }) }) }, "general") }) });
}, pv = (n) => ({}), mv = new _n({
  type: nr.type,
  form: new Rt({
    render: cv,
    validation: uv
  }),
  settings: new Rt({
    render: fv,
    validation: pv
  }),
  heading: "Signature",
  description: "Signature capture block",
  hidden: !1,
  icon: dv,
  data: nr
}), zn = {
  id: sn(),
  type: "embedded-form",
  label: "",
  form_id: "",
  items: []
}, vv = ({ item: n, onChange: t, form: e, config: o }) => {
  const [r, a] = xe({ ...zn, ...n }), [i, l] = xe();
  ge(() => {
    a({ ...zn, ...n }), r.form_id && r.form_id != (i == null ? void 0 : i.id) && l(o.forms.find((c) => c.id === r.form_id));
  }, [n]);
  const s = (c) => {
    const u = Gt(r);
    u.items = c.items, a(u), t(u);
  };
  return i ? /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsx("article", { children: /* @__PURE__ */ p.jsxs("div", { className: "flex flex-column gap-2", children: [
    /* @__PURE__ */ p.jsx("label", { children: r.label }),
    /* @__PURE__ */ p.jsx(
      Qv,
      {
        onChange: s,
        form: i,
        config: o
      }
    )
  ] }) }) }) : /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsx("div", { children: "No child form found" }) });
};
var Vl;
function ti() {
  return ti = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e) ({}).hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, ti.apply(null, arguments);
}
var gv = function(t) {
  return /* @__PURE__ */ f.createElement("svg", ti({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, t), Vl || (Vl = /* @__PURE__ */ f.createElement("path", {
    d: "M448 416v-64H64v64zm0 64H64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64M288 160c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h304c44.2 0 80 35.8 80 80v16h38.1c21.4 0 32.1 25.9 17 41L433 239c-9.4 9.4-24.6 9.4-33.9 0L329 169c-15.1-15.1-4.4-41 17-41h38.1v-16c0-8.8-7.2-16-16-16h-80v64z"
  })));
};
const hv = ({ item: n, onChange: t, form: e, config: o }) => {
  const [r, a] = xe({ ...zn, ...n }), i = (s) => {
    const c = { ...r, [s.target.name]: s.target.value };
    a(c), t(c);
  };
  ge(() => {
    a({ ...zn, ...n });
  }, [n]);
  const l = o.forms.map((s) => ({ value: s.id, label: s.label })).filter((s) => s.value != e.id);
  return /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsx(an, { activeIndex: 0, children: /* @__PURE__ */ p.jsxs(zt, { header: "General", children: [
    /* @__PURE__ */ p.jsx("div", { className: "form-item flex flex-column gap-4", children: /* @__PURE__ */ p.jsxs("div", { className: "flex flex-column gap-2", children: [
      /* @__PURE__ */ p.jsx("label", { htmlFor: "label", children: "Label" }),
      /* @__PURE__ */ p.jsx(
        We,
        {
          id: "label",
          value: r.label || "",
          name: "label",
          onChange: i,
          className: "w-full"
        }
      )
    ] }) }),
    /* @__PURE__ */ p.jsxs("div", { className: "flex flex-column gap-2", children: [
      /* @__PURE__ */ p.jsx("label", { htmlFor: "form_id", children: "Form" }),
      /* @__PURE__ */ p.jsx(
        gi,
        {
          id: "form_id",
          value: r.form_id || "",
          onChange: i,
          options: l,
          name: "form_id",
          showClear: !0,
          placeholder: "Select a form",
          className: "w-full",
          children: " "
        }
      )
    ] })
  ] }, "general") }) });
}, bv = (n) => ({}), yv = new _n({
  type: zn.type,
  form: new Rt({
    render: vv,
    validation: null
  }),
  settings: new Rt({
    render: hv,
    validation: bv
  }),
  heading: "Embedded form",
  description: "Embed a form",
  hidden: !1,
  icon: gv,
  data: zn
}), Ci = new Lo(new Ao({ label: "Special" }));
Ci.registerItem(mv);
Ci.registerItem(yv);
const kn = new Lo();
kn.addRegistry(cr);
kn.addRegistry(ys);
kn.addRegistry(Ci);
const Oi = ({ item: n, onChange: t, form: e, config: o }) => {
  const r = kn.getByItem(n);
  return n && r ? Se.createElement(r.form.render, {
    item: n,
    onChange: t,
    form: e,
    config: o
  }) : Se.createElement(
    () => /* @__PURE__ */ p.jsxs("div", { children: [
      "The component ",
      n.type,
      " was not found."
    ] })
  );
}, wv = ({ item: n, onChange: t, form: e, config: o }) => {
  const r = kn.getByItem(n);
  return n && r ? Se.createElement(r.settings.render, {
    item: n,
    onChange: t,
    form: e,
    config: o
  }) : Se.createElement(
    () => /* @__PURE__ */ p.jsxs("div", { children: [
      "The component ",
      n.type,
      " was not found."
    ] })
  );
};
var xv = {
  root: "p-button-group p-component"
}, go = je.extend({
  defaultProps: {
    __TYPE: "ButtonGroup",
    children: void 0
  },
  css: {
    classes: xv
  }
}), oc = /* @__PURE__ */ f.memo(/* @__PURE__ */ f.forwardRef(function(n, t) {
  var e = Dt(), o = f.useContext(ut), r = go.getProps(n, o), a = f.useRef(t), i = go.setMetaData({
    props: r
  }), l = i.ptm, s = i.cx, c = i.isUnstyled;
  Qt(go.css.styles, c, {
    name: "buttongroup"
  }), f.useEffect(function() {
    A.combinedRefs(a, t);
  }, [a, t]);
  var u = e({
    ref: a,
    className: ve(s("root")),
    role: "group"
  }, go.getOtherProps(r), l("root"));
  return /* @__PURE__ */ f.createElement("span", u, r.children);
}));
oc.displayName = "ButtonGroup";
function ni() {
  return ni = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, ni.apply(this, arguments);
}
var ac = /* @__PURE__ */ f.memo(/* @__PURE__ */ f.forwardRef(function(n, t) {
  var e = Wt.getPTI(n);
  return /* @__PURE__ */ f.createElement("svg", ni({
    ref: t,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e), /* @__PURE__ */ f.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z",
    fill: "currentColor"
  }));
}));
ac.displayName = "WindowMaximizeIcon";
function ri() {
  return ri = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, ri.apply(this, arguments);
}
var ic = /* @__PURE__ */ f.memo(/* @__PURE__ */ f.forwardRef(function(n, t) {
  var e = Wt.getPTI(n);
  return /* @__PURE__ */ f.createElement("svg", ri({
    ref: t,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e), /* @__PURE__ */ f.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z",
    fill: "currentColor"
  }));
}));
ic.displayName = "WindowMinimizeIcon";
function oi() {
  return oi = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, oi.apply(this, arguments);
}
function Ur(n) {
  "@babel/helpers - typeof";
  return Ur = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ur(n);
}
function ai(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, o = new Array(t); e < t; e++) o[e] = n[e];
  return o;
}
function Ev(n) {
  if (Array.isArray(n)) return ai(n);
}
function Sv(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function lc(n, t) {
  if (n) {
    if (typeof n == "string") return ai(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return ai(n, t);
  }
}
function Cv() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ov(n) {
  return Ev(n) || Sv(n) || lc(n) || Cv();
}
function qv(n, t) {
  if (Ur(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t || "default");
    if (Ur(o) !== "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function Pv(n) {
  var t = qv(n, "string");
  return Ur(t) === "symbol" ? t : String(t);
}
function qi(n, t, e) {
  return t = Pv(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function Tv(n) {
  if (Array.isArray(n)) return n;
}
function Iv(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var o, r, a, i, l = [], s = !0, c = !1;
    try {
      if (a = (e = e.call(n)).next, t !== 0) for (; !(s = (o = a.call(e)).done) && (l.push(o.value), l.length !== t); s = !0) ;
    } catch (u) {
      c = !0, r = u;
    } finally {
      try {
        if (!s && e.return != null && (i = e.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw r;
      }
    }
    return l;
  }
}
function _v() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yn(n, t) {
  return Tv(n) || Iv(n, t) || lc(n, t) || _v();
}
var kv = "", Ir = je.extend({
  defaultProps: {
    __TYPE: "FocusTrap",
    children: void 0
  },
  css: {
    styles: kv
  },
  getProps: function(t) {
    return A.getMergedProps(t, Ir.defaultProps);
  },
  getOtherProps: function(t) {
    return A.getDiffProps(t, Ir.defaultProps);
  }
});
function Kl(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function Rv(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kl(Object(e), !0).forEach(function(o) {
      qi(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Kl(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
var jv = /* @__PURE__ */ Se.memo(/* @__PURE__ */ Se.forwardRef(function(n, t) {
  var e = Se.useRef(null), o = Se.useRef(null), r = Se.useRef(null), a = Se.useContext(ut), i = Ir.getProps(n, a), l = {
    props: i
  };
  Ln(Ir.css.styles, {
    name: "focustrap"
  });
  var s = Ir.setMetaData(Rv({}, l));
  s.ptm, Se.useImperativeHandle(t, function() {
    return {
      props: i,
      getInk: function() {
        return o.current;
      },
      getTarget: function() {
        return e.current;
      }
    };
  }), Zt(function() {
    i.disabled || (e.current = c(), u(e.current));
  });
  var c = function() {
    return o.current && o.current.parentElement;
  }, u = function(S) {
    var w = i || {}, E = w.autoFocusSelector, C = E === void 0 ? "" : E, q = w.firstFocusableSelector, y = q === void 0 ? "" : q, P = w.autoFocus, I = P === void 0 ? !1 : P, V = "".concat(d(C)), N = "[autofocus]".concat(V, ", [data-pc-autofocus='true']").concat(V), _ = L.getFirstFocusableElement(S, N);
    I && !_ && (_ = L.getFirstFocusableElement(S, d(y))), L.focus(_);
  }, d = function(S) {
    return ':not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])'.concat(S ?? "");
  }, m = function(S) {
    var w, E = S.currentTarget, C = S.relatedTarget, q = C === E.$_pfocustrap_lasthiddenfocusableelement || !((w = e.current) !== null && w !== void 0 && w.contains(C)) ? L.getFirstFocusableElement(E.parentElement, d(E.$_pfocustrap_focusableselector)) : E.$_pfocustrap_lasthiddenfocusableelement;
    L.focus(q);
  }, v = function(S) {
    var w, E = S.currentTarget, C = S.relatedTarget, q = C === E.$_pfocustrap_firsthiddenfocusableelement || !((w = e.current) !== null && w !== void 0 && w.contains(C)) ? L.getLastFocusableElement(E.parentElement, d(E.$_pfocustrap_focusableselector)) : E.$_pfocustrap_firsthiddenfocusableelement;
    L.focus(q);
  }, x = function() {
    var S = i || {}, w = S.tabIndex, E = w === void 0 ? 0 : w, C = function(I, V) {
      return /* @__PURE__ */ Se.createElement("span", {
        ref: V === "firstfocusableelement" ? o : r,
        className: "p-hidden-accessible p-hidden-focusable",
        tabIndex: E,
        role: "presentation",
        "aria-hidden": !0,
        "data-p-hidden-accessible": !0,
        "data-p-hidden-focusable": !0,
        onFocus: I,
        "data-pc-section": V
      });
    }, q = C(m, "firstfocusableelement"), y = C(v, "lastfocusableelement");
    return q.ref.current && y.ref.current && (q.ref.current.$_pfocustrap_lasthiddenfocusableelement = y.ref.current, y.ref.current.$_pfocustrap_firsthiddenfocusableelement = q.ref.current), /* @__PURE__ */ Se.createElement(Se.Fragment, null, q, i.children, y);
  };
  return x();
})), Dv = jv;
function Ul(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function Nv(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ul(Object(e), !0).forEach(function(o) {
      qi(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Ul(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
var Av = {
  closeButtonIcon: "p-dialog-header-close-icon",
  closeButton: "p-dialog-header-icon p-dialog-header-close p-link",
  maximizableIcon: "p-dialog-header-maximize-icon",
  maximizableButton: "p-dialog-header-icon p-dialog-header-maximize p-link",
  header: function(t) {
    var e = t.props;
    return ve("p-dialog-header", e.headerClassName);
  },
  headerTitle: "p-dialog-title",
  headerIcons: "p-dialog-header-icons",
  content: function(t) {
    var e = t.props;
    return ve("p-dialog-content", e.contentClassName);
  },
  footer: function(t) {
    var e = t.props;
    return ve("p-dialog-footer", e.footerClassName);
  },
  mask: function(t) {
    var e = t.props, o = t.maskVisibleState, r = ["center", "left", "right", "top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right"], a = r.find(function(i) {
      return i === e.position || i.replace("-", "") === e.position;
    });
    return ve("p-dialog-mask", a ? "p-dialog-".concat(a) : "", {
      "p-component-overlay p-component-overlay-enter": e.modal,
      "p-dialog-visible": o,
      "p-dialog-draggable": e.draggable,
      "p-dialog-resizable": e.resizable
    }, e.maskClassName);
  },
  root: function(t) {
    var e = t.props, o = t.maximized, r = t.context;
    return ve("p-dialog p-component", {
      "p-dialog-rtl": e.rtl,
      "p-dialog-maximized": o,
      "p-dialog-default": !o,
      "p-input-filled": r && r.inputStyle === "filled" || ct.inputStyle === "filled",
      "p-ripple-disabled": r && r.ripple === !1 || ct.ripple === !1
    });
  },
  transition: "p-dialog"
}, Lv = `
@layer primereact {
    .p-dialog-mask {
        background-color: transparent;
        transition-property: background-color;
    }

    .p-dialog-visible {
        display: flex;
    }

    .p-dialog-mask.p-component-overlay {
        pointer-events: auto;
    }

    .p-dialog {
        display: flex;
        flex-direction: column;
        pointer-events: auto;
        max-height: 90%;
        transform: scale(1);
        position: relative;
    }

    .p-dialog-content {
        overflow-y: auto;
        flex-grow: 1;
    }

    .p-dialog-header {
        display: flex;
        align-items: center;
        flex-shrink: 0;
    }

    .p-dialog-footer {
        flex-shrink: 0;
    }

    .p-dialog .p-dialog-header-icons {
        display: flex;
        align-items: center;
        align-self: flex-start;
        flex-shrink: 0;
    }

    .p-dialog .p-dialog-header-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
    }

    .p-dialog .p-dialog-title {
        flex-grow: 1;
    }

    /* Fluid */
    .p-fluid .p-dialog-footer .p-button {
        width: auto;
    }

    /* Animation */
    /* Center */
    .p-dialog-enter {
        opacity: 0;
        transform: scale(0.7);
    }

    .p-dialog-enter-active {
        opacity: 1;
        transform: scale(1);
        transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
    }

    .p-dialog-enter-done {
        transform: none;
    }

    .p-dialog-exit-active {
        opacity: 0;
        transform: scale(0.7);
        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Top, Bottom, Left, Right, Top* and Bottom* */
    .p-dialog-top .p-dialog,
    .p-dialog-bottom .p-dialog,
    .p-dialog-left .p-dialog,
    .p-dialog-right .p-dialog,
    .p-dialog-top-left .p-dialog,
    .p-dialog-top-right .p-dialog,
    .p-dialog-bottom-left .p-dialog,
    .p-dialog-bottom-right .p-dialog {
        margin: 0.75em;
    }

    .p-dialog-top .p-dialog-enter,
    .p-dialog-top .p-dialog-exit-active {
        transform: translate3d(0px, -100%, 0px);
    }

    .p-dialog-bottom .p-dialog-enter,
    .p-dialog-bottom .p-dialog-exit-active {
        transform: translate3d(0px, 100%, 0px);
    }

    .p-dialog-left .p-dialog-enter,
    .p-dialog-left .p-dialog-exit-active,
    .p-dialog-top-left .p-dialog-enter,
    .p-dialog-top-left .p-dialog-exit-active,
    .p-dialog-bottom-left .p-dialog-enter,
    .p-dialog-bottom-left .p-dialog-exit-active {
        transform: translate3d(-100%, 0px, 0px);
    }

    .p-dialog-right .p-dialog-enter,
    .p-dialog-right .p-dialog-exit-active,
    .p-dialog-top-right .p-dialog-enter,
    .p-dialog-top-right .p-dialog-exit-active,
    .p-dialog-bottom-right .p-dialog-enter,
    .p-dialog-bottom-right .p-dialog-exit-active {
        transform: translate3d(100%, 0px, 0px);
    }

    .p-dialog-top .p-dialog-enter-active,
    .p-dialog-bottom .p-dialog-enter-active,
    .p-dialog-left .p-dialog-enter-active,
    .p-dialog-top-left .p-dialog-enter-active,
    .p-dialog-bottom-left .p-dialog-enter-active,
    .p-dialog-right .p-dialog-enter-active,
    .p-dialog-top-right .p-dialog-enter-active,
    .p-dialog-bottom-right .p-dialog-enter-active {
        transform: translate3d(0px, 0px, 0px);
        transition: all 0.3s ease-out;
    }

    .p-dialog-top .p-dialog-exit-active,
    .p-dialog-bottom .p-dialog-exit-active,
    .p-dialog-left .p-dialog-exit-active,
    .p-dialog-top-left .p-dialog-exit-active,
    .p-dialog-bottom-left .p-dialog-exit-active,
    .p-dialog-right .p-dialog-exit-active,
    .p-dialog-top-right .p-dialog-exit-active,
    .p-dialog-bottom-right .p-dialog-exit-active {
        transition: all 0.3s ease-out;
    }

    /* Maximize */
    .p-dialog-maximized {
        transition: none;
        transform: none;
        margin: 0;
        width: 100vw !important;
        height: 100vh !important;
        max-height: 100%;
        top: 0px !important;
        left: 0px !important;
    }

    .p-dialog-maximized .p-dialog-content {
        flex-grow: 1;
    }

    .p-confirm-dialog .p-dialog-content {
        display: flex;
        align-items: center;
    }

    /* Resizable */
    .p-dialog .p-resizable-handle {
        position: absolute;
        font-size: 0.1px;
        display: block;
        cursor: se-resize;
        width: 12px;
        height: 12px;
        right: 1px;
        bottom: 1px;
    }

    .p-dialog-draggable .p-dialog-header {
        cursor: move;
    }
}
`, $v = {
  mask: function(t) {
    var e = t.props;
    return Nv({
      position: "fixed",
      height: "100%",
      width: "100%",
      left: 0,
      top: 0,
      display: "flex",
      justifyContent: e.position === "left" || e.position === "top-left" || e.position === "bottom-left" ? "flex-start" : e.position === "right" || e.position === "top-right" || e.position === "bottom-right" ? "flex-end" : "center",
      alignItems: e.position === "top" || e.position === "top-left" || e.position === "top-right" ? "flex-start" : e.position === "bottom" || e.position === "bottom-left" || e.position === "bottom-right" ? "flex-end" : "center",
      pointerEvents: !e.modal && "none"
    }, e.maskStyle);
  }
}, ho = je.extend({
  defaultProps: {
    __TYPE: "Dialog",
    __parentMetadata: null,
    appendTo: null,
    ariaCloseIconLabel: null,
    baseZIndex: 0,
    blockScroll: !1,
    breakpoints: null,
    className: null,
    closable: !0,
    closeIcon: null,
    closeOnEscape: !0,
    content: null,
    contentClassName: null,
    contentStyle: null,
    dismissableMask: !1,
    draggable: !0,
    focusOnShow: !0,
    footer: null,
    footerClassName: null,
    header: null,
    headerClassName: null,
    headerStyle: null,
    icons: null,
    id: null,
    keepInViewport: !0,
    maskClassName: null,
    maskStyle: null,
    maximizable: !1,
    maximizeIcon: null,
    maximized: !1,
    minX: 0,
    minY: 0,
    minimizeIcon: null,
    modal: !0,
    onClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragStart: null,
    onHide: null,
    onMaskClick: null,
    onMaximize: null,
    onResize: null,
    onResizeEnd: null,
    onResizeStart: null,
    onShow: null,
    position: "center",
    resizable: !0,
    rtl: !1,
    showHeader: !0,
    style: null,
    transitionOptions: null,
    visible: !1,
    children: void 0
  },
  css: {
    classes: Av,
    styles: Lv,
    inlineStyles: $v
  }
});
function Yl(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function wa(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yl(Object(e), !0).forEach(function(o) {
      qi(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Yl(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
var sc = /* @__PURE__ */ f.forwardRef(function(n, t) {
  var e = Dt(), o = f.useContext(ut), r = ho.getProps(n, o), a = r.id ? r.id : ui(), i = f.useState(a), l = yn(i, 2), s = l[0];
  l[1];
  var c = f.useState(!1), u = yn(c, 2), d = u[0], m = u[1], v = f.useState(!1), x = yn(v, 2), h = x[0], S = x[1], w = f.useState(r.maximized), E = yn(w, 2), C = E[0], q = E[1], y = f.useRef(null), P = f.useRef(null), I = f.useRef(null), V = f.useRef(null), N = f.useRef(null), _ = f.useRef(null), k = f.useRef(null), X = f.useRef(!1), M = f.useRef(!1), J = f.useRef(null), te = f.useRef(null), me = f.useRef(null), ye = f.useRef(a), se = f.useRef(null), Q = r.onMaximize ? r.maximized : C, R = h && (r.blockScroll || r.maximizable && Q), Y = r.closable && r.closeOnEscape && h, ae = tu("dialog", Y), G = ho.setMetaData(wa(wa({
    props: r
  }, r.__parentMetadata), {}, {
    state: {
      id: s,
      maximized: Q,
      containerVisible: d
    }
  })), K = G.ptm, ue = G.cx, de = G.sx, pe = G.isUnstyled;
  Qt(ho.css.styles, pe, {
    name: "dialog"
  }), os({
    callback: function(O) {
      Ge(O);
    },
    when: Y && ae,
    priority: [ns.DIALOG, ae]
  });
  var U = En({
    type: "mousemove",
    target: function() {
      return window.document;
    },
    listener: function(O) {
      return z(O);
    }
  }), j = yn(U, 2), $ = j[0], le = j[1], F = En({
    type: "mouseup",
    target: function() {
      return window.document;
    },
    listener: function(O) {
      return fe(O);
    }
  }), qe = yn(F, 2), ke = qe[0], _e = qe[1], Re = En({
    type: "mousemove",
    target: function() {
      return window.document;
    },
    listener: function(O) {
      return Lt(O);
    }
  }), He = yn(Re, 2), qt = He[0], dt = He[1], et = En({
    type: "mouseup",
    target: function() {
      return window.document;
    },
    listener: function(O) {
      return ft(O);
    }
  }), tt = yn(et, 2), yt = tt[0], Pt = tt[1], Ge = function(O) {
    r.onHide(), O.preventDefault();
  }, nt = function() {
    var O = document.activeElement, H = O && y.current && y.current.contains(O);
    !H && r.closable && r.showHeader && k.current && k.current.focus();
  }, Ht = function(O) {
    I.current = O.target, r.onPointerDown && r.onPointerDown(O);
  }, rt = function(O) {
    r.dismissableMask && r.modal && P.current === O.target && !I.current && Ge(O), r.onMaskClick && r.onMaskClick(O), I.current = null;
  }, ot = function(O) {
    r.onMaximize ? r.onMaximize({
      originalEvent: O,
      maximized: !Q
    }) : q(function(H) {
      return !H;
    }), O.preventDefault();
  }, it = function(O) {
    L.hasClass(O.target, "p-dialog-header-icon") || L.hasClass(O.target.parentElement, "p-dialog-header-icon") || r.draggable && (X.current = !0, J.current = O.pageX, te.current = O.pageY, y.current.style.margin = "0", L.addClass(document.body, "p-unselectable-text"), r.onDragStart && r.onDragStart(O));
  }, Lt = function(O) {
    if (X.current) {
      var H = L.getOuterWidth(y.current), ie = L.getOuterHeight(y.current), be = O.pageX - J.current, oe = O.pageY - te.current, T = y.current.getBoundingClientRect(), D = T.left + be, W = T.top + oe, Z = L.getViewport(), re = getComputedStyle(y.current), ne = parseFloat(re.marginLeft), ce = parseFloat(re.marginTop);
      y.current.style.position = "fixed", r.keepInViewport ? (D >= r.minX && D + H < Z.width && (J.current = O.pageX, y.current.style.left = D - ne + "px"), W >= r.minY && W + ie < Z.height && (te.current = O.pageY, y.current.style.top = W - ce + "px")) : (J.current = O.pageX, y.current.style.left = D - ne + "px", te.current = O.pageY, y.current.style.top = W - ce + "px"), r.onDrag && r.onDrag(O);
    }
  }, ft = function(O) {
    X.current && (X.current = !1, L.removeClass(document.body, "p-unselectable-text"), r.onDragEnd && r.onDragEnd(O));
  }, vt = function(O) {
    r.resizable && (M.current = !0, J.current = O.pageX, te.current = O.pageY, L.addClass(document.body, "p-unselectable-text"), r.onResizeStart && r.onResizeStart(O));
  }, we = function(O, H, ie) {
    !ie && (ie = L.getViewport());
    var be = parseInt(O);
    return /^(\d+|(\.\d+))(\.\d+)?%$/.test(O) ? be * (ie[H] / 100) : be;
  }, z = function(O) {
    if (M.current) {
      var H = O.pageX - J.current, ie = O.pageY - te.current, be = L.getOuterWidth(y.current), oe = L.getOuterHeight(y.current), T = y.current.getBoundingClientRect(), D = L.getViewport(), W = !parseInt(y.current.style.top) || !parseInt(y.current.style.left), Z = we(y.current.style.minWidth, "width", D), re = we(y.current.style.minHeight, "height", D), ne = be + H, ce = oe + ie;
      W && (ne = ne + H, ce = ce + ie), (!Z || ne > Z) && T.left + ne < D.width && (y.current.style.width = ne + "px"), (!re || ce > re) && T.top + ce < D.height && (y.current.style.height = ce + "px"), J.current = O.pageX, te.current = O.pageY, r.onResize && r.onResize(O);
    }
  }, fe = function(O) {
    M.current && (M.current = !1, L.removeClass(document.body, "p-unselectable-text"), r.onResizeEnd && r.onResizeEnd(O));
  }, Te = function() {
    y.current.style.position = "", y.current.style.left = "", y.current.style.top = "", y.current.style.margin = "";
  }, Ce = function() {
    y.current.setAttribute(ye.current, "");
  }, Oe = function() {
    r.onShow && r.onShow(), r.focusOnShow && nt(), Ne();
  }, Me = function() {
    r.modal && !pe() && L.addClass(P.current, "p-component-overlay-leave");
  }, lt = function() {
    X.current = !1, rn.clear(P.current), m(!1), Ae(), L.focus(se.current), se.current = null;
  }, Ne = function() {
    Je();
  }, Ae = function() {
    Ze();
  }, Fe = function() {
    var O = document.primeDialogParams && document.primeDialogParams.some(function(H) {
      return H.hasBlockScroll;
    });
    O ? L.blockBodyScroll() : L.unblockBodyScroll();
  }, Xe = function(O) {
    if (O && h) {
      var H = {
        id: s,
        hasBlockScroll: R
      };
      document.primeDialogParams || (document.primeDialogParams = []);
      var ie = document.primeDialogParams.findIndex(function(be) {
        return be.id === s;
      });
      ie === -1 ? document.primeDialogParams = [].concat(Ov(document.primeDialogParams), [H]) : document.primeDialogParams = document.primeDialogParams.toSpliced(ie, 1, H);
    } else
      document.primeDialogParams = document.primeDialogParams && document.primeDialogParams.filter(function(be) {
        return be.id !== s;
      });
    Fe();
  }, Je = function() {
    r.draggable && (qt(), yt()), r.resizable && ($(), ke());
  }, Ze = function() {
    dt(), Pt(), le(), _e();
  }, Qe = function() {
    me.current = L.createInlineStyle(o && o.nonce || ct.nonce, o && o.styleContainer);
    var O = "";
    for (var H in r.breakpoints)
      O = O + `
                @media screen and (max-width: `.concat(H, `) {
                     [data-pc-name="dialog"][`).concat(ye.current, `] {
                        width: `).concat(r.breakpoints[H], ` !important;
                    }
                }
            `);
    me.current.innerHTML = O;
  }, pt = function() {
    me.current = L.removeInlineStyle(me.current);
  };
  Zt(function() {
    Xe(!0), r.visible && m(!0);
  }), f.useEffect(function() {
    return r.breakpoints && Qe(), function() {
      pt();
    };
  }, [r.breakpoints]), Ue(function() {
    r.visible && !d && m(!0), r.visible !== h && d && S(r.visible), r.visible && (se.current = document.activeElement);
  }, [r.visible, d]), Ue(function() {
    d && (rn.set("modal", P.current, o && o.autoZIndex || ct.autoZIndex, r.baseZIndex || o && o.zIndex.modal || ct.zIndex.modal), S(!0));
  }, [d]), Ue(function() {
    Xe(!0);
  }, [R, h]), cn(function() {
    Ae(), Xe(!1), L.removeInlineStyle(me.current), rn.clear(P.current);
  }), f.useImperativeHandle(t, function() {
    return {
      props: r,
      resetPosition: Te,
      getElement: function() {
        return y.current;
      },
      getMask: function() {
        return P.current;
      },
      getContent: function() {
        return V.current;
      },
      getHeader: function() {
        return N.current;
      },
      getFooter: function() {
        return _.current;
      },
      getCloseButton: function() {
        return k.current;
      }
    };
  });
  var Ye = function() {
    if (r.closable) {
      var O = r.ariaCloseIconLabel || er("close"), H = e({
        className: ue("closeButtonIcon"),
        "aria-hidden": !0
      }, K("closeButtonIcon")), ie = r.closeIcon || /* @__PURE__ */ f.createElement(Bo, H), be = Yt.getJSXIcon(ie, wa({}, H), {
        props: r
      }), oe = e({
        ref: k,
        type: "button",
        className: ue("closeButton"),
        "aria-label": O,
        onClick: Ge,
        onKeyDown: function(D) {
          D.key !== "Escape" && D.stopPropagation();
        }
      }, K("closeButton"));
      return /* @__PURE__ */ f.createElement("button", oe, be, /* @__PURE__ */ f.createElement(Mr, null));
    }
    return null;
  }, wt = function() {
    var O, H = e({
      className: ue("maximizableIcon")
    }, K("maximizableIcon"));
    Q ? O = r.minimizeIcon || /* @__PURE__ */ f.createElement(ic, H) : O = r.maximizeIcon || /* @__PURE__ */ f.createElement(ac, H);
    var ie = Yt.getJSXIcon(O, H, {
      props: r
    });
    if (r.maximizable) {
      var be = e({
        type: "button",
        className: ue("maximizableButton"),
        onClick: ot
      }, K("maximizableButton"));
      return /* @__PURE__ */ f.createElement("button", be, ie, /* @__PURE__ */ f.createElement(Mr, null));
    }
    return null;
  }, xt = function() {
    if (r.showHeader) {
      var O = Ye(), H = wt(), ie = A.getJSXElement(r.icons, r), be = A.getJSXElement(r.header, r), oe = s + "_header", T = e({
        ref: N,
        style: r.headerStyle,
        className: ue("header"),
        onMouseDown: it
      }, K("header")), D = e({
        id: oe,
        className: ue("headerTitle")
      }, K("headerTitle")), W = e({
        className: ue("headerIcons")
      }, K("headerIcons"));
      return /* @__PURE__ */ f.createElement("div", T, /* @__PURE__ */ f.createElement("div", D, be), /* @__PURE__ */ f.createElement("div", W, ie, H, O));
    }
    return null;
  }, Et = function() {
    var O = s + "_content", H = e({
      id: O,
      ref: V,
      style: r.contentStyle,
      className: ue("content")
    }, K("content"));
    return /* @__PURE__ */ f.createElement("div", H, r.children);
  }, $t = function() {
    var O = A.getJSXElement(r.footer, r), H = e({
      ref: _,
      className: ue("footer")
    }, K("footer"));
    return O && /* @__PURE__ */ f.createElement("div", H, O);
  }, en = function() {
    return r.resizable ? /* @__PURE__ */ f.createElement("span", {
      className: "p-resizable-handle",
      style: {
        zIndex: 90
      },
      onMouseDown: vt
    }) : null;
  }, Ft = function() {
    var O, H = {
      header: r.header,
      content: r.message,
      message: r == null || (O = r.children) === null || O === void 0 || (O = O[1]) === null || O === void 0 || (O = O.props) === null || O === void 0 ? void 0 : O.children
    }, ie = {
      headerRef: N,
      contentRef: V,
      footerRef: _,
      closeRef: k,
      hide: Ge,
      message: H
    };
    return A.getJSXElement(n.content, ie);
  }, Nt = function() {
    var O = xt(), H = Et(), ie = $t(), be = en();
    return /* @__PURE__ */ f.createElement(f.Fragment, null, O, H, ie, be);
  }, Kt = function() {
    var O = s + "_header", H = s + "_content", ie = {
      enter: r.position === "center" ? 150 : 300,
      exit: r.position === "center" ? 150 : 300
    }, be = e({
      ref: P,
      style: de("mask"),
      className: ue("mask"),
      onPointerUp: rt
    }, K("mask")), oe = e({
      ref: y,
      id: s,
      className: ve(r.className, ue("root", {
        props: r,
        maximized: Q,
        context: o
      })),
      style: r.style,
      onClick: r.onClick,
      role: "dialog",
      "aria-labelledby": O,
      "aria-describedby": H,
      "aria-modal": r.modal,
      onPointerDown: Ht
    }, ho.getOtherProps(r), K("root")), T = e({
      classNames: ue("transition"),
      timeout: ie,
      in: h,
      options: r.transitionOptions,
      unmountOnExit: !0,
      onEnter: Ce,
      onEntered: Oe,
      onExiting: Me,
      onExited: lt
    }, K("transition")), D = null;
    n != null && n.content ? D = Ft() : D = Nt();
    var W = /* @__PURE__ */ f.createElement("div", be, /* @__PURE__ */ f.createElement(zo, oi({
      nodeRef: y
    }, T), /* @__PURE__ */ f.createElement("div", oe, /* @__PURE__ */ f.createElement(Dv, {
      autoFocus: r.focusOnShow
    }, D))));
    return /* @__PURE__ */ f.createElement(Xr, {
      element: W,
      appendTo: r.appendTo,
      visible: !0
    });
  };
  return d && Kt();
});
sc.displayName = "Dialog";
function ii() {
  return ii = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, ii.apply(this, arguments);
}
function Fv(n) {
  if (Array.isArray(n)) return n;
}
function Mv(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var o, r, a, i, l = [], s = !0, c = !1;
    try {
      if (a = (e = e.call(n)).next, t !== 0) for (; !(s = (o = a.call(e)).done) && (l.push(o.value), l.length !== t); s = !0) ;
    } catch (u) {
      c = !0, r = u;
    } finally {
      try {
        if (!s && e.return != null && (i = e.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw r;
      }
    }
    return l;
  }
}
function Gl(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, o = new Array(t); e < t; e++) o[e] = n[e];
  return o;
}
function zv(n, t) {
  if (n) {
    if (typeof n == "string") return Gl(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Gl(n, t);
  }
}
function Hv() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xl(n, t) {
  return Fv(n) || Mv(n, t) || zv(n, t) || Hv();
}
function Yr(n) {
  "@babel/helpers - typeof";
  return Yr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Yr(n);
}
function Bv(n, t) {
  if (Yr(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t || "default");
    if (Yr(o) !== "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function Wv(n) {
  var t = Bv(n, "string");
  return Yr(t) === "symbol" ? t : String(t);
}
function Vv(n, t, e) {
  return t = Wv(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
var Kv = {
  root: "p-confirm-dialog",
  message: "p-confirm-dialog-message",
  icon: "p-confirm-dialog-icon",
  acceptButton: "p-confirm-dialog-accept",
  rejectButton: function(t) {
    var e = t.getPropValue;
    return ve("p-confirm-dialog-reject", {
      "p-button-text": !e("rejectClassName")
    });
  }
}, bo = je.extend({
  defaultProps: {
    __TYPE: "ConfirmDialog",
    accept: null,
    acceptClassName: null,
    acceptIcon: null,
    acceptLabel: null,
    appendTo: null,
    breakpoints: null,
    children: void 0,
    className: null,
    content: null,
    defaultFocus: "accept",
    footer: null,
    icon: null,
    message: null,
    onHide: null,
    reject: null,
    rejectClassName: null,
    rejectIcon: null,
    rejectLabel: null,
    tagKey: void 0,
    visible: void 0
  },
  css: {
    classes: Kv
  }
});
function Jl(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function Yn(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Jl(Object(e), !0).forEach(function(o) {
      Vv(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Jl(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
var Uv = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  t = Yn(Yn({}, t), {
    visible: t.visible === void 0 ? !0 : t.visible
  }), t.visible && Fn.emit("confirm-dialog", t);
  var e = function() {
    var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Fn.emit("confirm-dialog", Yn(Yn(Yn({}, t), a), {
      visible: !0
    }));
  }, o = function() {
    Fn.emit("confirm-dialog", {
      visible: !1
    });
  };
  return {
    show: e,
    hide: o
  };
}, cc = /* @__PURE__ */ f.memo(/* @__PURE__ */ f.forwardRef(function(n, t) {
  var e = Dt(), o = f.useContext(ut), r = bo.getProps(n, o), a = f.useState(r.visible), i = Xl(a, 2), l = i[0], s = i[1], c = f.useState(!1), u = Xl(c, 2), d = u[0], m = u[1], v = f.useRef(null), x = f.useRef(!1), h = f.useRef(null), S = function() {
    var Q = r.group;
    return v.current && (Q = v.current.group), Object.assign({}, r, v.current, {
      group: Q
    });
  }, w = function(Q) {
    return S()[Q];
  }, E = function(Q) {
    for (var R = arguments.length, Y = new Array(R > 1 ? R - 1 : 0), ae = 1; ae < R; ae++)
      Y[ae - 1] = arguments[ae];
    return A.getPropValue(w(Q), Y);
  }, C = w("acceptLabel") || er("accept"), q = w("rejectLabel") || er("reject"), y = {
    props: r,
    state: {
      visible: l
    }
  }, P = bo.setMetaData(y), I = P.ptm, V = P.cx, N = P.isUnstyled;
  Qt(bo.css.styles, N, {
    name: "confirmdialog"
  });
  var _ = function() {
    x.current || (x.current = !0, E("accept"), M("accept"));
  }, k = function() {
    x.current || (x.current = !0, E("reject"), M("reject"));
  }, X = function() {
    var Q = S();
    Q.group === r.group && (s(!0), x.current = !1, h.current = document.activeElement);
  }, M = function() {
    var Q = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "cancel";
    s(!1), E("onHide", {
      result: Q
    }), L.focus(h.current), h.current = null;
  }, J = function(Q) {
    if (Q.tagKey === r.tagKey) {
      var R = l !== Q.visible, Y = w("target") !== Q.target;
      Y && !r.target ? (M(), v.current = Q, m(!0)) : R && (v.current = Q, Q.visible ? X() : M());
    }
  };
  f.useEffect(function() {
    r.visible ? X() : M();
  }, [r.visible]), f.useEffect(function() {
    return !r.target && !r.message && Fn.on("confirm-dialog", J), function() {
      Fn.off("confirm-dialog", J);
    };
  }, [r.target]), Ue(function() {
    d && X();
  }, [d]), cn(function() {
    Fn.off("confirm-dialog", J);
  }), f.useImperativeHandle(t, function() {
    return {
      props: r,
      confirm: J
    };
  });
  var te = function() {
    var Q = w("defaultFocus"), R = ve("p-confirm-dialog-accept", w("acceptClassName")), Y = ve("p-confirm-dialog-reject", {
      "p-button-text": !w("rejectClassName")
    }, w("rejectClassName")), ae = e({
      label: q,
      autoFocus: Q === "reject",
      icon: w("rejectIcon"),
      className: ve(w("rejectClassName"), V("rejectButton", {
        getPropValue: w
      })),
      onClick: k,
      pt: I("rejectButton"),
      unstyled: r.unstyled,
      __parentMetadata: {
        parent: y
      }
    }, I("rejectButton")), G = e({
      label: C,
      autoFocus: Q === void 0 || Q === "accept",
      icon: w("acceptIcon"),
      className: ve(w("acceptClassName"), V("acceptButton")),
      onClick: _,
      pt: I("acceptButton"),
      unstyled: r.unstyled,
      __parentMetadata: {
        parent: y
      }
    }, I("acceptButton")), K = /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement(Tt, ae), /* @__PURE__ */ f.createElement(Tt, G));
    if (w("footer")) {
      var ue = {
        accept: _,
        reject: k,
        acceptClassName: R,
        rejectClassName: Y,
        acceptLabel: C,
        rejectLabel: q,
        element: K,
        props: S()
      };
      return A.getJSXElement(w("footer"), ue);
    }
    return K;
  }, me = function() {
    var Q = S(), R = A.getJSXElement(w("message"), Q), Y = e({
      className: V("icon")
    }, I("icon")), ae = Yt.getJSXIcon(w("icon"), Yn({}, Y), {
      props: Q
    }), G = te(), K = e({
      className: V("message")
    }, I("message")), ue = e({
      visible: l,
      className: ve(w("className"), V("root")),
      footer: G,
      onHide: M,
      breakpoints: w("breakpoints"),
      pt: Q.pt,
      unstyled: r.unstyled,
      appendTo: w("appendTo"),
      __parentMetadata: {
        parent: y
      }
    }, bo.getOtherProps(Q));
    return /* @__PURE__ */ f.createElement(sc, ii({}, ue, {
      content: n == null ? void 0 : n.content
    }), ae, /* @__PURE__ */ f.createElement("span", K, R));
  }, ye = me();
  return /* @__PURE__ */ f.createElement(Xr, {
    element: ye,
    appendTo: w("appendTo")
  });
}));
cc.displayName = "ConfirmDialog";
function Yv({ id: n, item: t, active: e, setActive: o, onItemChange: r, onItemRemove: a, config: i, form: l }) {
  const { attributes: s, listeners: c, setNodeRef: u, setActivatorNodeRef: d, transform: m, transition: v } = ta({
    id: n,
    data: {
      id: n,
      item: t
    }
  }), x = {
    transform: Jt.Transform.toString(m),
    transition: v
  };
  let h = "sortable-item";
  t.id == (e == null ? void 0 : e.id) && (h = h + " active");
  const S = [zn.type].includes(t.type), w = () => {
    Uv({
      message: "Are you sure you want to remove this item?",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      accept: () => a(n)
      // reject: () => rejectFunc()
    });
  };
  let E = /* @__PURE__ */ p.jsx(Tt, { size: "small", outlined: !0, label: "Edit", icon: "pi pi-pencil", onClick: () => o(t) });
  return e && e.id == t.id && (E = /* @__PURE__ */ p.jsx(Tt, { size: "small", outlined: !0, label: "Done", icon: "pi pi-pencil", onClick: () => o(void 0) })), /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsxs("div", { ref: u, style: x, ...s, className: h, children: [
    /* @__PURE__ */ p.jsx(Oi, { item: t, onChange: r, config: i, form: l }),
    S ? /* @__PURE__ */ p.jsx("div", { className: "mask" }) : null,
    /* @__PURE__ */ p.jsxs("div", { className: "flex flex-row align-items-center item-footer", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "flex-grow-1 item-type", children: [
        " ",
        t.type
      ] }),
      /* @__PURE__ */ p.jsxs(oc, { children: [
        " ",
        /* @__PURE__ */ p.jsx(
          Tt,
          {
            ...c,
            ref: d,
            size: "small",
            outlined: !0,
            label: "Order",
            icon: "pi pi-sort"
          }
        ),
        E,
        /* @__PURE__ */ p.jsx(Tt, { size: "small", outlined: !0, label: "Remove", icon: "pi pi-trash", onClick: w })
      ] })
    ] })
  ] }) });
}
function Gv({ form: n, onFormChange: t, activeItem: e, setActiveItem: o, config: r }) {
  const [a, i] = xe((n == null ? void 0 : n.items) ?? []);
  ge(() => {
    n && n.items && n.items != a && i(n.items ?? []);
  }, [n]);
  const l = (x) => {
    const h = Gt(n);
    h.items = h.items.filter(
      (S) => S.id != x
    ), t(h), e && e.id == x && o(void 0);
  }, s = (x) => {
    const h = a.map((w) => w.id == x.id ? x : w);
    i(h);
    const S = Gt(n);
    S.items = h, t(S);
  }, { listeners: c, setNodeRef: u, transform: d, transition: m } = Xs({
    id: "canvas_droppable",
    data: {
      parent: null,
      isContainer: !0
    }
  }), v = {
    transform: Jt.Transform.toString(d),
    transition: m
  };
  return /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsxs("div", { ref: u, className: "canvas form-area", style: v, ...c, children: [
    /* @__PURE__ */ p.jsx("h1", { children: n.label }),
    a == null ? void 0 : a.map((x) => /* @__PURE__ */ p.jsx(
      Yv,
      {
        id: x.id,
        item: x,
        active: e,
        setActive: o,
        onItemChange: s,
        onItemRemove: l,
        config: r,
        form: n
      },
      x.id
    ))
  ] }) });
}
function Xv({ ...n }) {
  const [t, e] = xe(n.form), [o, r] = xe(n.activeItem), a = (s) => {
    r(s);
    const c = Gt(t);
    c.items = c.items.map((u) => u.id == s.id ? s : u), n.onFormChange(c);
  }, i = (s) => {
    const c = { ...t, [s.target.name]: s.target.value };
    e(c), n.onFormChange(c);
  }, l = () => {
    n.setActiveItem(void 0);
  };
  if (ge(() => {
    r(n.activeItem);
  }, [n.activeItem]), ge(() => {
    e(n.form);
  }, [n.form]), o) {
    const s = kn.getByItem(o);
    if (s) {
      const c = s.icon;
      return /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsxs("div", { className: "properties active", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "item-panel-item flex align-items-center", children: [
          /* @__PURE__ */ p.jsxs("div", { className: "flex-grow-1 flex align-items-center", children: [
            /* @__PURE__ */ p.jsx("div", { className: "item-icon mr-2", children: /* @__PURE__ */ p.jsx(c, {}) }),
            /* @__PURE__ */ p.jsx("div", { children: /* @__PURE__ */ p.jsx("h2", { children: s.heading }) })
          ] }),
          /* @__PURE__ */ p.jsx(Tt, { onClick: l, size: "small", outlined: !0, icon: "pi pi-times" })
        ] }),
        /* @__PURE__ */ p.jsx(wv, { item: o, onChange: a, form: t, config: n.config })
      ] }) });
    }
    return Se.createElement(
      () => /* @__PURE__ */ p.jsxs("div", { children: [
        "The component ",
        o.type,
        " was not found."
      ] })
    );
  } else
    return /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsxs("div", { className: "properties", children: [
      /* @__PURE__ */ p.jsx("div", { className: "item-panel-item flex px-3", children: /* @__PURE__ */ p.jsx("div", { children: /* @__PURE__ */ p.jsx("h2", { children: "Form Settings" }) }) }),
      /* @__PURE__ */ p.jsx(an, { activeIndex: 0, children: /* @__PURE__ */ p.jsx(zt, { header: "General", children: /* @__PURE__ */ p.jsx("div", { className: "form-item flex flex-column gap-4", children: /* @__PURE__ */ p.jsxs("div", { className: "flex flex-column gap-2", children: [
        /* @__PURE__ */ p.jsx("label", { htmlFor: "label", children: "Form label" }),
        /* @__PURE__ */ p.jsx(
          We,
          {
            onChange: i,
            name: "label",
            value: t.label ?? "",
            className: "w-full"
          }
        )
      ] }) }) }, "general") })
    ] }) });
}
function uc({ item: n }) {
  const t = n.icon;
  return /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsx("article", { className: "sidebar-field", children: /* @__PURE__ */ p.jsxs("div", { className: "item-panel-item flex p-2 w-100", children: [
    /* @__PURE__ */ p.jsx("div", { className: "item-icon mr-2", children: /* @__PURE__ */ p.jsx(t, {}) }),
    /* @__PURE__ */ p.jsxs("div", { children: [
      /* @__PURE__ */ p.jsx("div", { className: "item-title", children: n.heading }),
      /* @__PURE__ */ p.jsx("div", { className: "item-text", children: n.description })
    ] })
  ] }) }) });
}
function Jv({ item: n }) {
  const t = ze(sn()), { attributes: e, listeners: o, setNodeRef: r } = Ys({
    id: t.current,
    data: {
      item: n,
      fromSidebar: !0
    }
  });
  return /* @__PURE__ */ p.jsx("div", { ref: r, className: "sidebar-field", ...e, ...o, children: /* @__PURE__ */ p.jsx(uc, { item: n }) });
}
function Zv({ ...n }) {
  const t = {};
  return kn.map((e) => {
    var r, a;
    const o = ((r = e.group) == null ? void 0 : r.label) || "";
    Object.keys(t).includes(o) || (t[o] = {
      label: ((a = e.group) == null ? void 0 : a.label) || "",
      items: []
    }), t[o].items.push(e);
  }), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    /* @__PURE__ */ p.jsx(an, { activeIndex: 0, children: Object.keys(t).map((e) => /* @__PURE__ */ p.jsx(zt, { header: t[e].label, children: t[e].items.map((o) => /* @__PURE__ */ p.jsx(Jv, { item: o }, `sidebar-${o.type}`)) }, e)) })
  ] });
}
function wr(n) {
  var t;
  return ((t = n == null ? void 0 : n.data) == null ? void 0 : t.current) ?? {};
}
const rg = ({ ...n }) => {
  const { form: t, setForm: e } = Zl(n.form), [o, r] = xe(void 0);
  ge(() => {
    n.form && e(n.form);
  }, [n.form]), ge(() => {
    t && n.onChange(t);
  }, [t]);
  const a = Yo(
    Tn(sr),
    Tn(lr, {
      coordinateGetter: na
    })
  ), [i, l] = xe(), [s, c] = xe(), u = () => {
    l(void 0), c(void 0);
  }, d = (h) => {
    const { active: S } = h, w = wr(S), { item: E } = w;
    if (w.fromSidebar) {
      const C = E.data;
      C.id = sn(), E.id = C.id, l(E), r(C);
    } else
      c(w.item);
  }, m = (h) => {
    const { active: S, over: w } = h, E = wr(S), C = wr(w);
    if (E.fromSidebar)
      if (t.items.findIndex((q) => q.id === E.item.id) == -1) {
        t.items.push(E.item.data);
        const q = t.items.findIndex((P) => P.id === E.item.id), y = t.items.findIndex((P) => P.id === C.id);
        y != -1 && y != q && (t.items = On(t.items, q, y)), e(t);
      } else if (!w)
        t.items = t.items.filter((q) => q.id !== E.item.id), e(t);
      else {
        const q = t.items.findIndex((P) => P.id === E.item.id), y = t.items.findIndex((P) => P.id === C.id);
        t.items = On(t.items, q, y), e(t);
      }
    else
      t.items.findIndex((q) => q.id === E.item.id), t.items.findIndex((q) => q.id === C.id);
  }, v = (h) => {
    const { active: S, over: w } = h, E = wr(S), C = wr(w), q = t.items.findIndex((P) => P.id === E.item.id), y = t.items.findIndex((P) => P.id === C.id);
    q != y && (t.items = On(t.items, q, y), e(t)), u();
  }, x = {
    form: t,
    onFormChange: e,
    activeItem: o,
    setActiveItem: r,
    config: n.config
  };
  return t ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx("div", { className: "form-builder", children: /* @__PURE__ */ p.jsxs(
      Qo,
      {
        sensors: a,
        onDragStart: d,
        onDragOver: m,
        onDragEnd: v,
        collisionDetection: Go,
        autoScroll: !0,
        children: [
          /* @__PURE__ */ p.jsx("div", { className: "sidebar-area", children: /* @__PURE__ */ p.jsx(Zv, { ...x }) }),
          /* @__PURE__ */ p.jsx("div", { className: "canvas-area", children: /* @__PURE__ */ p.jsx(
            ea,
            {
              strategy: Zp,
              items: t.items.map((h) => h.id),
              children: /* @__PURE__ */ p.jsx(Gv, { ...x })
            }
          ) }),
          /* @__PURE__ */ p.jsx("div", { className: "properties-area", children: /* @__PURE__ */ p.jsx(Xv, { ...x }) }),
          /* @__PURE__ */ p.jsxs(Yp, { dropAnimation: null, children: [
            i ? /* @__PURE__ */ p.jsx(uc, { item: i }) : null,
            " ",
            s ? /* @__PURE__ */ p.jsx(
              Oi,
              {
                item: s,
                onChange: () => {
                },
                config: n.config,
                form: n.form
              }
            ) : null
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ p.jsx(cc, {})
  ] }) : /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsx("div", { children: "No form config loaded" }) });
}, Qv = ({ ...n }) => {
  var r;
  const { form: t, setForm: e } = Zl(n.form);
  ge(() => {
    n.form && e(n.form);
  }, [n.form]), ge(() => {
    t && n.onChange(t);
  }, [t]);
  const o = (a) => {
    t.items = t.items.map((i) => i.id == a.id ? a : i), e(t);
  };
  return t && t.id ? /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsxs("div", { className: "form-area", children: [
    /* @__PURE__ */ p.jsx("h1", { children: t.label }),
    (r = t.items) == null ? void 0 : r.map((a) => /* @__PURE__ */ p.jsx(
      Oi,
      {
        item: a,
        onChange: o,
        form: t,
        config: n.config
      },
      a.id
    ))
  ] }) }) : /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsx("div", { children: "No form config loaded" }) });
};
export {
  Qv as Form,
  rg as FormBuilder,
  Oi as Item
};
//# sourceMappingURL=index.js.map
