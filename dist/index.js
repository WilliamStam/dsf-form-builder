import * as u from "react";
import Te, { useState as $e, useEffect as Re, useContext as nn, useRef as Xe, useLayoutEffect as vc, useCallback as Lt, useMemo as Ze, createContext as Mr, memo as mc, useReducer as ni, cloneElement as gc, forwardRef as hc } from "react";
import vr, { unstable_batchedUpdates as lr, createPortal as bc } from "react-dom";
function yc(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var ga = { exports: {} }, sr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bi;
function wc() {
  if (bi) return sr;
  bi = 1;
  var n = Te, t = Symbol.for("react.element"), e = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(l, s, c) {
    var d, f = {}, m = null, h = null;
    c !== void 0 && (m = "" + c), s.key !== void 0 && (m = "" + s.key), s.ref !== void 0 && (h = s.ref);
    for (d in s) r.call(s, d) && !a.hasOwnProperty(d) && (f[d] = s[d]);
    if (l && l.defaultProps) for (d in s = l.defaultProps, s) f[d] === void 0 && (f[d] = s[d]);
    return { $$typeof: t, type: l, key: m, ref: h, props: f, _owner: o.current };
  }
  return sr.Fragment = e, sr.jsx = i, sr.jsxs = i, sr;
}
var cr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yi;
function xc() {
  return yi || (yi = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Te, t = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), l = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), x = Symbol.iterator, g = "@@iterator";
    function C(p) {
      if (p === null || typeof p != "object")
        return null;
      var E = x && p[x] || p[g];
      return typeof E == "function" ? E : null;
    }
    var y = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(p) {
      {
        for (var E = arguments.length, H = new Array(E > 1 ? E - 1 : 0), de = 1; de < E; de++)
          H[de - 1] = arguments[de];
        S("error", p, H);
      }
    }
    function S(p, E, H) {
      {
        var de = y.ReactDebugCurrentFrame, xe = de.getStackAddendum();
        xe !== "" && (E += "%s", H = H.concat([xe]));
        var se = H.map(function(q) {
          return String(q);
        });
        se.unshift("Warning: " + E), Function.prototype.apply.call(console[p], console, se);
      }
    }
    var P = !1, b = !1, T = !1, I = !1, U = !1, $;
    $ = Symbol.for("react.module.reference");
    function j(p) {
      return !!(typeof p == "string" || typeof p == "function" || p === r || p === a || U || p === o || p === c || p === d || I || p === h || P || b || T || typeof p == "object" && p !== null && (p.$$typeof === m || p.$$typeof === f || p.$$typeof === i || p.$$typeof === l || p.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      p.$$typeof === $ || p.getModuleId !== void 0));
    }
    function R(p, E, H) {
      var de = p.displayName;
      if (de)
        return de;
      var xe = E.displayName || E.name || "";
      return xe !== "" ? H + "(" + xe + ")" : H;
    }
    function ne(p) {
      return p.displayName || "Context";
    }
    function B(p) {
      if (p == null)
        return null;
      if (typeof p.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof p == "function")
        return p.displayName || p.name || null;
      if (typeof p == "string")
        return p;
      switch (p) {
        case r:
          return "Fragment";
        case e:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case c:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case l:
            var E = p;
            return ne(E) + ".Consumer";
          case i:
            var H = p;
            return ne(H._context) + ".Provider";
          case s:
            return R(p, p.render, "ForwardRef");
          case f:
            var de = p.displayName || null;
            return de !== null ? de : B(p.type) || "Memo";
          case m: {
            var xe = p, se = xe._payload, q = xe._init;
            try {
              return B(q(se));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var re = Object.assign, ae = 0, he, Se, pe, Z, _, J, Q;
    function X() {
    }
    X.__reactDisabledLog = !0;
    function Y() {
      {
        if (ae === 0) {
          he = console.log, Se = console.info, pe = console.warn, Z = console.error, _ = console.group, J = console.groupCollapsed, Q = console.groupEnd;
          var p = {
            configurable: !0,
            enumerable: !0,
            value: X,
            writable: !0
          };
          Object.defineProperties(console, {
            info: p,
            log: p,
            warn: p,
            error: p,
            group: p,
            groupCollapsed: p,
            groupEnd: p
          });
        }
        ae++;
      }
    }
    function fe() {
      {
        if (ae--, ae === 0) {
          var p = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: re({}, p, {
              value: he
            }),
            info: re({}, p, {
              value: Se
            }),
            warn: re({}, p, {
              value: pe
            }),
            error: re({}, p, {
              value: Z
            }),
            group: re({}, p, {
              value: _
            }),
            groupCollapsed: re({}, p, {
              value: J
            }),
            groupEnd: re({}, p, {
              value: Q
            })
          });
        }
        ae < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ve = y.ReactCurrentDispatcher, ce;
    function K(p, E, H) {
      {
        if (ce === void 0)
          try {
            throw Error();
          } catch (xe) {
            var de = xe.stack.trim().match(/\n( *(at )?)/);
            ce = de && de[1] || "";
          }
        return `
` + ce + p;
      }
    }
    var D = !1, F;
    {
      var ue = typeof WeakMap == "function" ? WeakMap : Map;
      F = new ue();
    }
    function M(p, E) {
      if (!p || D)
        return "";
      {
        var H = F.get(p);
        if (H !== void 0)
          return H;
      }
      var de;
      D = !0;
      var xe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var se;
      se = ve.current, ve.current = null, Y();
      try {
        if (E) {
          var q = function() {
            throw Error();
          };
          if (Object.defineProperty(q.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(q, []);
            } catch (Oe) {
              de = Oe;
            }
            Reflect.construct(p, [], q);
          } else {
            try {
              q.call();
            } catch (Oe) {
              de = Oe;
            }
            p.call(q.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Oe) {
            de = Oe;
          }
          p();
        }
      } catch (Oe) {
        if (Oe && de && typeof Oe.stack == "string") {
          for (var k = Oe.stack.split(`
`), W = de.stack.split(`
`), te = k.length - 1, ie = W.length - 1; te >= 1 && ie >= 0 && k[te] !== W[ie]; )
            ie--;
          for (; te >= 1 && ie >= 0; te--, ie--)
            if (k[te] !== W[ie]) {
              if (te !== 1 || ie !== 1)
                do
                  if (te--, ie--, ie < 0 || k[te] !== W[ie]) {
                    var oe = `
` + k[te].replace(" at new ", " at ");
                    return p.displayName && oe.includes("<anonymous>") && (oe = oe.replace("<anonymous>", p.displayName)), typeof p == "function" && F.set(p, oe), oe;
                  }
                while (te >= 1 && ie >= 0);
              break;
            }
        }
      } finally {
        D = !1, ve.current = se, fe(), Error.prepareStackTrace = xe;
      }
      var me = p ? p.displayName || p.name : "", De = me ? K(me) : "";
      return typeof p == "function" && F.set(p, De), De;
    }
    function Ie(p, E, H) {
      return M(p, !1);
    }
    function Ne(p) {
      var E = p.prototype;
      return !!(E && E.isReactComponent);
    }
    function je(p, E, H) {
      if (p == null)
        return "";
      if (typeof p == "function")
        return M(p, Ne(p));
      if (typeof p == "string")
        return K(p);
      switch (p) {
        case c:
          return K("Suspense");
        case d:
          return K("SuspenseList");
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case s:
            return Ie(p.render);
          case f:
            return je(p.type, E, H);
          case m: {
            var de = p, xe = de._payload, se = de._init;
            try {
              return je(se(xe), E, H);
            } catch {
            }
          }
        }
      return "";
    }
    var Ae = Object.prototype.hasOwnProperty, We = {}, xt = y.ReactDebugCurrentFrame;
    function dt(p) {
      if (p) {
        var E = p._owner, H = je(p.type, p._source, E ? E.type : null);
        xt.setExtraStackFrame(H);
      } else
        xt.setExtraStackFrame(null);
    }
    function lt(p, E, H, de, xe) {
      {
        var se = Function.call.bind(Ae);
        for (var q in p)
          if (se(p, q)) {
            var k = void 0;
            try {
              if (typeof p[q] != "function") {
                var W = Error((de || "React class") + ": " + H + " type `" + q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw W.name = "Invariant Violation", W;
              }
              k = p[q](E, q, de, H, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (te) {
              k = te;
            }
            k && !(k instanceof Error) && (dt(xe), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", de || "React class", H, q, typeof k), dt(null)), k instanceof Error && !(k.message in We) && (We[k.message] = !0, dt(xe), w("Failed %s type: %s", H, k.message), dt(null));
          }
      }
    }
    var nt = Array.isArray;
    function pt(p) {
      return nt(p);
    }
    function Et(p) {
      {
        var E = typeof Symbol == "function" && Symbol.toStringTag, H = E && p[Symbol.toStringTag] || p.constructor.name || "Object";
        return H;
      }
    }
    function rt(p) {
      try {
        return Je(p), !1;
      } catch {
        return !0;
      }
    }
    function Je(p) {
      return "" + p;
    }
    function Mt(p) {
      if (rt(p))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Et(p)), Je(p);
    }
    var Ge = y.ReactCurrentOwner, ot = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ct, kt, ft;
    ft = {};
    function vt(p) {
      if (Ae.call(p, "ref")) {
        var E = Object.getOwnPropertyDescriptor(p, "ref").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return p.ref !== void 0;
    }
    function Ce(p) {
      if (Ae.call(p, "key")) {
        var E = Object.getOwnPropertyDescriptor(p, "key").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return p.key !== void 0;
    }
    function z(p, E) {
      if (typeof p.ref == "string" && Ge.current && E && Ge.current.stateNode !== E) {
        var H = B(Ge.current.type);
        ft[H] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', B(Ge.current.type), p.ref), ft[H] = !0);
      }
    }
    function ge(p, E) {
      {
        var H = function() {
          ct || (ct = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        H.isReactWarning = !0, Object.defineProperty(p, "key", {
          get: H,
          configurable: !0
        });
      }
    }
    function _e(p, E) {
      {
        var H = function() {
          kt || (kt = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        H.isReactWarning = !0, Object.defineProperty(p, "ref", {
          get: H,
          configurable: !0
        });
      }
    }
    var Pe = function(p, E, H, de, xe, se, q) {
      var k = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: p,
        key: E,
        ref: H,
        props: q,
        // Record the component responsible for creating this element.
        _owner: se
      };
      return k._store = {}, Object.defineProperty(k._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(k, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: de
      }), Object.defineProperty(k, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: xe
      }), Object.freeze && (Object.freeze(k.props), Object.freeze(k)), k;
    };
    function qe(p, E, H, de, xe) {
      {
        var se, q = {}, k = null, W = null;
        H !== void 0 && (Mt(H), k = "" + H), Ce(E) && (Mt(E.key), k = "" + E.key), vt(E) && (W = E.ref, z(E, xe));
        for (se in E)
          Ae.call(E, se) && !ot.hasOwnProperty(se) && (q[se] = E[se]);
        if (p && p.defaultProps) {
          var te = p.defaultProps;
          for (se in te)
            q[se] === void 0 && (q[se] = te[se]);
        }
        if (k || W) {
          var ie = typeof p == "function" ? p.displayName || p.name || "Unknown" : p;
          k && ge(q, ie), W && _e(q, ie);
        }
        return Pe(p, k, W, xe, de, Ge.current, q);
      }
    }
    var Ve = y.ReactCurrentOwner, ut = y.ReactDebugCurrentFrame;
    function Fe(p) {
      if (p) {
        var E = p._owner, H = je(p.type, p._source, E ? E.type : null);
        ut.setExtraStackFrame(H);
      } else
        ut.setExtraStackFrame(null);
    }
    var Me;
    Me = !1;
    function He(p) {
      return typeof p == "object" && p !== null && p.$$typeof === t;
    }
    function at() {
      {
        if (Ve.current) {
          var p = B(Ve.current.type);
          if (p)
            return `

Check the render method of \`` + p + "`.";
        }
        return "";
      }
    }
    function it(p) {
      return "";
    }
    var be = {};
    function N(p) {
      {
        var E = at();
        if (!E) {
          var H = typeof p == "string" ? p : p.displayName || p.name;
          H && (E = `

Check the top-level render call using <` + H + ">.");
        }
        return E;
      }
    }
    function G(p, E) {
      {
        if (!p._store || p._store.validated || p.key != null)
          return;
        p._store.validated = !0;
        var H = N(E);
        if (be[H])
          return;
        be[H] = !0;
        var de = "";
        p && p._owner && p._owner !== Ve.current && (de = " It was passed a child from " + B(p._owner.type) + "."), Fe(p), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', H, de), Fe(null);
      }
    }
    function ee(p, E) {
      {
        if (typeof p != "object")
          return;
        if (pt(p))
          for (var H = 0; H < p.length; H++) {
            var de = p[H];
            He(de) && G(de, E);
          }
        else if (He(p))
          p._store && (p._store.validated = !0);
        else if (p) {
          var xe = C(p);
          if (typeof xe == "function" && xe !== p.entries)
            for (var se = xe.call(p), q; !(q = se.next()).done; )
              He(q.value) && G(q.value, E);
        }
      }
    }
    function ye(p) {
      {
        var E = p.type;
        if (E == null || typeof E == "string")
          return;
        var H;
        if (typeof E == "function")
          H = E.propTypes;
        else if (typeof E == "object" && (E.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        E.$$typeof === f))
          H = E.propTypes;
        else
          return;
        if (H) {
          var de = B(E);
          lt(H, p.props, "prop", de, p);
        } else if (E.PropTypes !== void 0 && !Me) {
          Me = !0;
          var xe = B(E);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", xe || "Unknown");
        }
        typeof E.getDefaultProps == "function" && !E.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Be(p) {
      {
        for (var E = Object.keys(p.props), H = 0; H < E.length; H++) {
          var de = E[H];
          if (de !== "children" && de !== "key") {
            Fe(p), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", de), Fe(null);
            break;
          }
        }
        p.ref !== null && (Fe(p), w("Invalid attribute `ref` supplied to `React.Fragment`."), Fe(null));
      }
    }
    var Qe = {};
    function Pt(p, E, H, de, xe, se) {
      {
        var q = j(p);
        if (!q) {
          var k = "";
          (p === void 0 || typeof p == "object" && p !== null && Object.keys(p).length === 0) && (k += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var W = it();
          W ? k += W : k += at();
          var te;
          p === null ? te = "null" : pt(p) ? te = "array" : p !== void 0 && p.$$typeof === t ? (te = "<" + (B(p.type) || "Unknown") + " />", k = " Did you accidentally export a JSX literal instead of a component?") : te = typeof p, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", te, k);
        }
        var ie = qe(p, E, H, xe, se);
        if (ie == null)
          return ie;
        if (q) {
          var oe = E.children;
          if (oe !== void 0)
            if (de)
              if (pt(oe)) {
                for (var me = 0; me < oe.length; me++)
                  ee(oe[me], p);
                Object.freeze && Object.freeze(oe);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ee(oe, p);
        }
        if (Ae.call(E, "key")) {
          var De = B(p), Oe = Object.keys(E).filter(function(st) {
            return st !== "key";
          }), Ye = Oe.length > 0 ? "{key: someKey, " + Oe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Qe[De + Ye]) {
            var mt = Oe.length > 0 ? "{" + Oe.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ye, De, mt, De), Qe[De + Ye] = !0;
          }
        }
        return p === r ? Be(ie) : ye(ie), ie;
      }
    }
    function zt(p, E, H) {
      return Pt(p, E, H, !0);
    }
    function qt(p, E, H) {
      return Pt(p, E, H, !1);
    }
    var Tt = qt, Ht = zt;
    cr.Fragment = r, cr.jsx = Tt, cr.jsxs = Ht;
  }()), cr;
}
process.env.NODE_ENV === "production" ? ga.exports = wc() : ga.exports = xc();
var O = ga.exports;
class Ec {
  constructor(t) {
    this.label = t;
  }
}
class jo extends Ec {
  constructor(t) {
    super(
      t.label
    );
  }
}
class Sc {
  constructor(t, e) {
    this.render = t, this.validation = e;
  }
}
class rn extends Sc {
  constructor(t) {
    super(
      t.render,
      t.validation
    );
  }
}
class Cc {
  constructor(t, e, r, o, a, i, l, s, c) {
    this.form = t, this.settings = e, this.type = r, this.heading = o, this.description = a, this.hidden = i, this.icon = l, this.data = s, this.group = c, this.group || (this.group = new jo({
      label: "None"
    }));
  }
}
let zr = class extends Cc {
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
class Ao {
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
    return this.items.map((e, r, o) => t(e, r, o));
  }
}
const Qo = {
  id: null,
  label: null,
  created_at: null,
  items: []
}, Oc = (n = Qo) => {
  const [t, e] = $e({ ...Qo, ...n });
  return {
    form: t,
    setForm: (r) => {
      e({ ...Qo, ...r });
    }
  };
}, Pc = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let jn = (n = 21) => {
  let t = "", e = crypto.getRandomValues(new Uint8Array(n));
  for (; n--; )
    t += Pc[e[n] & 63];
  return t;
};
const Gn = {
  id: jn(),
  type: "content-html",
  label: "",
  value: "",
  placeholder: ""
}, qc = ({ item: n, onChange: t, config: e }) => {
  const [r, o] = $e({ ...Gn, ...n });
  Re(() => {
    o({ ...Gn, ...n });
  }, [n]);
  const a = Math.random().toString(36).substring(2, 15);
  return /* @__PURE__ */ O.jsx(O.Fragment, { children: /* @__PURE__ */ O.jsxs("div", { className: "flex flex-column gap-2", children: [
    /* @__PURE__ */ O.jsx("label", { htmlFor: a, children: r.label }),
    /* @__PURE__ */ O.jsx("div", { dangerouslySetInnerHTML: { __html: r.value } })
  ] }) });
}, Tc = (n) => ({});
var wi;
function ha() {
  return ha = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var r in e) ({}).hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, ha.apply(null, arguments);
}
var Ic = function(t) {
  return /* @__PURE__ */ u.createElement("svg", ha({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 512"
  }, t), wi || (wi = /* @__PURE__ */ u.createElement("path", {
    d: "M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6m80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3l89.3 89.4-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3"
  })));
};
function _c(n) {
  if (Array.isArray(n)) return n;
}
function Rc(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var r, o, a, i, l = [], s = !0, c = !1;
    try {
      if (a = (e = e.call(n)).next, t !== 0) for (; !(s = (r = a.call(e)).done) && (l.push(r.value), l.length !== t); s = !0) ;
    } catch (d) {
      c = !0, o = d;
    } finally {
      try {
        if (!s && e.return != null && (i = e.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw o;
      }
    }
    return l;
  }
}
function ba(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, r = new Array(t); e < t; e++) r[e] = n[e];
  return r;
}
function $l(n, t) {
  if (n) {
    if (typeof n == "string") return ba(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return ba(n, t);
  }
}
function kc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mo(n, t) {
  return _c(n) || Rc(n, t) || $l(n, t) || kc();
}
function Rt(n) {
  "@babel/helpers - typeof";
  return Rt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Rt(n);
}
function we() {
  for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++)
    t[e] = arguments[e];
  if (t) {
    for (var r = [], o = 0; o < t.length; o++) {
      var a = t[o];
      if (a) {
        var i = Rt(a);
        if (i === "string" || i === "number")
          r.push(a);
        else if (i === "object") {
          var l = Array.isArray(a) ? a : Object.entries(a).map(function(s) {
            var c = mo(s, 2), d = c[0], f = c[1];
            return f ? d : null;
          });
          r = l.length ? r.concat(l.filter(function(s) {
            return !!s;
          })) : r;
        }
      }
    }
    return r.join(" ").trim();
  }
}
function Dc(n) {
  if (Array.isArray(n)) return ba(n);
}
function jc(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function Ac() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yo(n) {
  return Dc(n) || jc(n) || $l(n) || Ac();
}
function ri(n, t) {
  if (!(n instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Nc(n, t) {
  if (Rt(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var r = e.call(n, t || "default");
    if (Rt(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function Fl(n) {
  var t = Nc(n, "string");
  return Rt(t) === "symbol" ? t : String(t);
}
function Lc(n, t) {
  for (var e = 0; e < t.length; e++) {
    var r = t[e];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, Fl(r.key), r);
  }
}
function oi(n, t, e) {
  return e && Lc(n, e), Object.defineProperty(n, "prototype", {
    writable: !1
  }), n;
}
function No(n, t, e) {
  return t = Fl(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function ea(n, t) {
  var e = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (!e) {
    if (Array.isArray(n) || (e = $c(n)) || t) {
      e && (n = e);
      var r = 0, o = function() {
      };
      return { s: o, n: function() {
        return r >= n.length ? { done: !0 } : { done: !1, value: n[r++] };
      }, e: function(c) {
        throw c;
      }, f: o };
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
function $c(n, t) {
  if (n) {
    if (typeof n == "string") return xi(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return xi(n, t);
  }
}
function xi(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, r = new Array(t); e < t; e++) r[e] = n[e];
  return r;
}
var A = /* @__PURE__ */ function() {
  function n() {
    ri(this, n);
  }
  return oi(n, null, [{
    key: "innerWidth",
    value: function(e) {
      if (e) {
        var r = e.offsetWidth, o = getComputedStyle(e);
        return r = r + (parseFloat(o.paddingLeft) + parseFloat(o.paddingRight)), r;
      }
      return 0;
    }
  }, {
    key: "width",
    value: function(e) {
      if (e) {
        var r = e.offsetWidth, o = getComputedStyle(e);
        return r = r - (parseFloat(o.paddingLeft) + parseFloat(o.paddingRight)), r;
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
    value: function(e, r) {
      if (e) {
        var o = e.getBoundingClientRect().width || e.offsetWidth;
        if (r) {
          var a = getComputedStyle(e);
          o = o + (parseFloat(a.marginLeft) + parseFloat(a.marginRight));
        }
        return o;
      }
      return 0;
    }
  }, {
    key: "getOuterHeight",
    value: function(e, r) {
      if (e) {
        var o = e.getBoundingClientRect().height || e.offsetHeight;
        if (r) {
          var a = getComputedStyle(e);
          o = o + (parseFloat(a.marginTop) + parseFloat(a.marginBottom));
        }
        return o;
      }
      return 0;
    }
  }, {
    key: "getClientHeight",
    value: function(e, r) {
      if (e) {
        var o = e.clientHeight;
        if (r) {
          var a = getComputedStyle(e);
          o = o + (parseFloat(a.marginTop) + parseFloat(a.marginBottom));
        }
        return o;
      }
      return 0;
    }
  }, {
    key: "getClientWidth",
    value: function(e, r) {
      if (e) {
        var o = e.clientWidth;
        if (r) {
          var a = getComputedStyle(e);
          o = o + (parseFloat(a.marginLeft) + parseFloat(a.marginRight));
        }
        return o;
      }
      return 0;
    }
  }, {
    key: "getViewport",
    value: function() {
      var e = window, r = document, o = r.documentElement, a = r.getElementsByTagName("body")[0], i = e.innerWidth || o.clientWidth || a.clientWidth, l = e.innerHeight || o.clientHeight || a.clientHeight;
      return {
        width: i,
        height: l
      };
    }
  }, {
    key: "getOffset",
    value: function(e) {
      if (e) {
        var r = e.getBoundingClientRect();
        return {
          top: r.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
          left: r.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
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
        for (var r = e.parentNode.childNodes, o = 0, a = 0; a < r.length; a++) {
          if (r[a] === e)
            return o;
          r[a].nodeType === 1 && o++;
        }
      return -1;
    }
  }, {
    key: "addMultipleClasses",
    value: function(e, r) {
      if (e && r)
        if (e.classList)
          for (var o = r.split(" "), a = 0; a < o.length; a++)
            e.classList.add(o[a]);
        else
          for (var i = r.split(" "), l = 0; l < i.length; l++)
            e.className = e.className + (" " + i[l]);
    }
  }, {
    key: "removeMultipleClasses",
    value: function(e, r) {
      if (e && r)
        if (e.classList)
          for (var o = r.split(" "), a = 0; a < o.length; a++)
            e.classList.remove(o[a]);
        else
          for (var i = r.split(" "), l = 0; l < i.length; l++)
            e.className = e.className.replace(new RegExp("(^|\\b)" + i[l].split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
  }, {
    key: "addClass",
    value: function(e, r) {
      e && r && (e.classList ? e.classList.add(r) : e.className = e.className + (" " + r));
    }
  }, {
    key: "removeClass",
    value: function(e, r) {
      e && r && (e.classList ? e.classList.remove(r) : e.className = e.className.replace(new RegExp("(^|\\b)" + r.split(" ").join("|") + "(\\b|$)", "gi"), " "));
    }
  }, {
    key: "hasClass",
    value: function(e, r) {
      return e ? e.classList ? e.classList.contains(r) : new RegExp("(^| )" + r + "( |$)", "gi").test(e.className) : !1;
    }
  }, {
    key: "addStyles",
    value: function(e) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      e && Object.entries(r).forEach(function(o) {
        var a = mo(o, 2), i = a[0], l = a[1];
        return e.style[i] = l;
      });
    }
  }, {
    key: "find",
    value: function(e, r) {
      return e ? Array.from(e.querySelectorAll(r)) : [];
    }
  }, {
    key: "findSingle",
    value: function(e, r) {
      return e ? e.querySelector(r) : null;
    }
  }, {
    key: "setAttributes",
    value: function(e) {
      var r = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (e) {
        var a = function i(l, s) {
          var c, d, f = e != null && (c = e.$attrs) !== null && c !== void 0 && c[l] ? [e == null || (d = e.$attrs) === null || d === void 0 ? void 0 : d[l]] : [];
          return [s].flat().reduce(function(m, h) {
            if (h != null) {
              var x = Rt(h);
              if (x === "string" || x === "number")
                m.push(h);
              else if (x === "object") {
                var g = Array.isArray(h) ? i(l, h) : Object.entries(h).map(function(C) {
                  var y = mo(C, 2), w = y[0], S = y[1];
                  return l === "style" && (S || S === 0) ? "".concat(w.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), ":").concat(S) : S ? w : void 0;
                });
                m = g.length ? m.concat(g.filter(function(C) {
                  return !!C;
                })) : m;
              }
            }
            return m;
          }, f);
        };
        Object.entries(o).forEach(function(i) {
          var l = mo(i, 2), s = l[0], c = l[1];
          if (c != null) {
            var d = s.match(/^on(.+)/);
            d ? e.addEventListener(d[1].toLowerCase(), c) : s === "p-bind" ? r.setAttributes(e, c) : (c = s === "class" ? yo(new Set(a("class", c))).join(" ").trim() : s === "style" ? a("style", c).join(";").trim() : c, (e.$attrs = e.$attrs || {}) && (e.$attrs[s] = c), e.setAttribute(s, c));
          }
        });
      }
    }
  }, {
    key: "getAttribute",
    value: function(e, r) {
      if (e) {
        var o = e.getAttribute(r);
        return isNaN(o) ? o === "true" || o === "false" ? o === "true" : o : +o;
      }
    }
  }, {
    key: "isAttributeEquals",
    value: function(e, r, o) {
      return e ? this.getAttribute(e, r) === o : !1;
    }
  }, {
    key: "isAttributeNotEquals",
    value: function(e, r, o) {
      return !this.isAttributeEquals(e, r, o);
    }
  }, {
    key: "getHeight",
    value: function(e) {
      if (e) {
        var r = e.offsetHeight, o = getComputedStyle(e);
        return r = r - (parseFloat(o.paddingTop) + parseFloat(o.paddingBottom) + parseFloat(o.borderTopWidth) + parseFloat(o.borderBottomWidth)), r;
      }
      return 0;
    }
  }, {
    key: "getWidth",
    value: function(e) {
      if (e) {
        var r = e.offsetWidth, o = getComputedStyle(e);
        return r = r - (parseFloat(o.paddingLeft) + parseFloat(o.paddingRight) + parseFloat(o.borderLeftWidth) + parseFloat(o.borderRightWidth)), r;
      }
      return 0;
    }
  }, {
    key: "alignOverlay",
    value: function(e, r, o) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0;
      e && r && (o === "self" ? this.relativePosition(e, r) : (a && (e.style.minWidth = n.getOuterWidth(r) + "px"), this.absolutePosition(e, r)));
    }
  }, {
    key: "absolutePosition",
    value: function(e, r) {
      var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "left";
      if (e && r) {
        var a = e.offsetParent ? {
          width: e.offsetWidth,
          height: e.offsetHeight
        } : this.getHiddenElementDimensions(e), i = a.height, l = a.width, s = r.offsetHeight, c = r.offsetWidth, d = r.getBoundingClientRect(), f = this.getWindowScrollTop(), m = this.getWindowScrollLeft(), h = this.getViewport(), x, g;
        d.top + s + i > h.height ? (x = d.top + f - i, x < 0 && (x = f), e.style.transformOrigin = "bottom") : (x = s + d.top + f, e.style.transformOrigin = "top");
        var C = d.left, y = o === "left" ? 0 : l - c;
        C + c + l > h.width ? g = Math.max(0, C + m + c - l) : g = C - y + m, e.style.top = x + "px", e.style.left = g + "px";
      }
    }
  }, {
    key: "relativePosition",
    value: function(e, r) {
      if (e && r) {
        var o = e.offsetParent ? {
          width: e.offsetWidth,
          height: e.offsetHeight
        } : this.getHiddenElementDimensions(e), a = r.offsetHeight, i = r.getBoundingClientRect(), l = this.getViewport(), s, c;
        i.top + a + o.height > l.height ? (s = -1 * o.height, i.top + s < 0 && (s = -1 * i.top), e.style.transformOrigin = "bottom") : (s = a, e.style.transformOrigin = "top"), o.width > l.width ? c = i.left * -1 : i.left + o.width > l.width ? c = (i.left + o.width - l.width) * -1 : c = 0, e.style.top = s + "px", e.style.left = c + "px";
      }
    }
  }, {
    key: "flipfitCollision",
    value: function(e, r) {
      var o = this, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "left top", i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "left bottom", l = arguments.length > 4 ? arguments[4] : void 0;
      if (e && r) {
        var s = r.getBoundingClientRect(), c = this.getViewport(), d = a.split(" "), f = i.split(" "), m = function(y, w) {
          return w ? +y.substring(y.search(/(\+|-)/g)) || 0 : y.substring(0, y.search(/(\+|-)/g)) || y;
        }, h = {
          my: {
            x: m(d[0]),
            y: m(d[1] || d[0]),
            offsetX: m(d[0], !0),
            offsetY: m(d[1] || d[0], !0)
          },
          at: {
            x: m(f[0]),
            y: m(f[1] || f[0]),
            offsetX: m(f[0], !0),
            offsetY: m(f[1] || f[0], !0)
          }
        }, x = {
          left: function() {
            var y = h.my.offsetX + h.at.offsetX;
            return y + s.left + (h.my.x === "left" ? 0 : -1 * (h.my.x === "center" ? o.getOuterWidth(e) / 2 : o.getOuterWidth(e)));
          },
          top: function() {
            var y = h.my.offsetY + h.at.offsetY;
            return y + s.top + (h.my.y === "top" ? 0 : -1 * (h.my.y === "center" ? o.getOuterHeight(e) / 2 : o.getOuterHeight(e)));
          }
        }, g = {
          count: {
            x: 0,
            y: 0
          },
          left: function() {
            var y = x.left(), w = n.getWindowScrollLeft();
            e.style.left = y + w + "px", this.count.x === 2 ? (e.style.left = w + "px", this.count.x = 0) : y < 0 && (this.count.x++, h.my.x = "left", h.at.x = "right", h.my.offsetX *= -1, h.at.offsetX *= -1, this.right());
          },
          right: function() {
            var y = x.left() + n.getOuterWidth(r), w = n.getWindowScrollLeft();
            e.style.left = y + w + "px", this.count.x === 2 ? (e.style.left = c.width - n.getOuterWidth(e) + w + "px", this.count.x = 0) : y + n.getOuterWidth(e) > c.width && (this.count.x++, h.my.x = "right", h.at.x = "left", h.my.offsetX *= -1, h.at.offsetX *= -1, this.left());
          },
          top: function() {
            var y = x.top(), w = n.getWindowScrollTop();
            e.style.top = y + w + "px", this.count.y === 2 ? (e.style.left = w + "px", this.count.y = 0) : y < 0 && (this.count.y++, h.my.y = "top", h.at.y = "bottom", h.my.offsetY *= -1, h.at.offsetY *= -1, this.bottom());
          },
          bottom: function() {
            var y = x.top() + n.getOuterHeight(r), w = n.getWindowScrollTop();
            e.style.top = y + w + "px", this.count.y === 2 ? (e.style.left = c.height - n.getOuterHeight(e) + w + "px", this.count.y = 0) : y + n.getOuterHeight(r) > c.height && (this.count.y++, h.my.y = "bottom", h.at.y = "top", h.my.offsetY *= -1, h.at.offsetY *= -1, this.top());
          },
          center: function(y) {
            if (y === "y") {
              var w = x.top() + n.getOuterHeight(r) / 2;
              e.style.top = w + n.getWindowScrollTop() + "px", w < 0 ? this.bottom() : w + n.getOuterHeight(r) > c.height && this.top();
            } else {
              var S = x.left() + n.getOuterWidth(r) / 2;
              e.style.left = S + n.getWindowScrollLeft() + "px", S < 0 ? this.left() : S + n.getOuterWidth(e) > c.width && this.right();
            }
          }
        };
        g[h.at.x]("x"), g[h.at.y]("y"), this.isFunction(l) && l(h);
      }
    }
  }, {
    key: "findCollisionPosition",
    value: function(e) {
      if (e) {
        var r = e === "top" || e === "bottom", o = e === "left" ? "right" : "left", a = e === "top" ? "bottom" : "top";
        return r ? {
          axis: "y",
          my: "center ".concat(a),
          at: "center ".concat(e)
        } : {
          axis: "x",
          my: "".concat(o, " center"),
          at: "".concat(e, " center")
        };
      }
    }
  }, {
    key: "getParents",
    value: function(e) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      return e.parentNode === null ? r : this.getParents(e.parentNode, r.concat([e.parentNode]));
    }
  }, {
    key: "getScrollableParents",
    value: function(e) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, o = [];
      if (e) {
        var a = this.getParents(e), i = /(auto|scroll)/, l = function(S) {
          var P = S ? getComputedStyle(S) : null;
          return P && (i.test(P.getPropertyValue("overflow")) || i.test(P.getPropertyValue("overflow-x")) || i.test(P.getPropertyValue("overflow-y")));
        }, s = function(S) {
          r ? o.push(S.nodeName === "BODY" || S.nodeName === "HTML" || S.nodeType === 9 ? window : S) : o.push(S);
        }, c = ea(a), d;
        try {
          for (c.s(); !(d = c.n()).done; ) {
            var f = d.value, m = f.nodeType === 1 && f.dataset.scrollselectors;
            if (m) {
              var h = m.split(","), x = ea(h), g;
              try {
                for (x.s(); !(g = x.n()).done; ) {
                  var C = g.value, y = this.findSingle(f, C);
                  y && l(y) && s(y);
                }
              } catch (w) {
                x.e(w);
              } finally {
                x.f();
              }
            }
            f.nodeType === 1 && l(f) && s(f);
          }
        } catch (w) {
          c.e(w);
        } finally {
          c.f();
        }
      }
      return o.some(function(w) {
        return w === document.body || w === window;
      }) || o.push(window), o;
    }
  }, {
    key: "getHiddenElementOuterHeight",
    value: function(e) {
      if (e) {
        e.style.visibility = "hidden", e.style.display = "block";
        var r = e.offsetHeight;
        return e.style.display = "none", e.style.visibility = "visible", r;
      }
      return 0;
    }
  }, {
    key: "getHiddenElementOuterWidth",
    value: function(e) {
      if (e) {
        e.style.visibility = "hidden", e.style.display = "block";
        var r = e.offsetWidth;
        return e.style.display = "none", e.style.visibility = "visible", r;
      }
      return 0;
    }
  }, {
    key: "getHiddenElementDimensions",
    value: function(e) {
      var r = {};
      return e && (e.style.visibility = "hidden", e.style.display = "block", r.width = e.offsetWidth, r.height = e.offsetHeight, e.style.display = "none", e.style.visibility = "visible"), r;
    }
  }, {
    key: "fadeIn",
    value: function(e, r) {
      if (e) {
        e.style.opacity = 0;
        var o = +/* @__PURE__ */ new Date(), a = 0, i = function l() {
          a = +e.style.opacity + ((/* @__PURE__ */ new Date()).getTime() - o) / r, e.style.opacity = a, o = +/* @__PURE__ */ new Date(), +a < 1 && (window.requestAnimationFrame && requestAnimationFrame(l) || setTimeout(l, 16));
        };
        i();
      }
    }
  }, {
    key: "fadeOut",
    value: function(e, r) {
      if (e)
        var o = 1, a = 50, i = a / r, l = setInterval(function() {
          o = o - i, o <= 0 && (o = 0, clearInterval(l)), e.style.opacity = o;
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
    value: function(e, r) {
      if (this.isElement(r))
        r.appendChild(e);
      else if (r.el && r.el.nativeElement)
        r.el.nativeElement.appendChild(e);
      else
        throw new Error("Cannot append " + r + " to " + e);
    }
  }, {
    key: "removeChild",
    value: function(e, r) {
      if (this.isElement(r))
        r.removeChild(e);
      else if (r.el && r.el.nativeElement)
        r.el.nativeElement.removeChild(e);
      else
        throw new Error("Cannot remove " + e + " from " + r);
    }
  }, {
    key: "isElement",
    value: function(e) {
      return (typeof HTMLElement > "u" ? "undefined" : Rt(HTMLElement)) === "object" ? e instanceof HTMLElement : e && Rt(e) === "object" && e !== null && e.nodeType === 1 && typeof e.nodeName == "string";
    }
  }, {
    key: "scrollInView",
    value: function(e, r) {
      var o = getComputedStyle(e).getPropertyValue("border-top-width"), a = o ? parseFloat(o) : 0, i = getComputedStyle(e).getPropertyValue("padding-top"), l = i ? parseFloat(i) : 0, s = e.getBoundingClientRect(), c = r.getBoundingClientRect(), d = c.top + document.body.scrollTop - (s.top + document.body.scrollTop) - a - l, f = e.scrollTop, m = e.clientHeight, h = this.getOuterHeight(r);
      d < 0 ? e.scrollTop = f + d : d + h > m && (e.scrollTop = f + d - m + h);
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
        var r = getComputedStyle(e);
        return e.offsetWidth - e.clientWidth - parseFloat(r.borderLeftWidth) - parseFloat(r.borderRightWidth);
      }
      if (this.calculatedScrollbarWidth != null)
        return this.calculatedScrollbarWidth;
      var o = document.createElement("div");
      o.className = "p-scrollbar-measure", document.body.appendChild(o);
      var a = o.offsetWidth - o.clientWidth;
      return document.body.removeChild(o), this.calculatedScrollbarWidth = a, a;
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
      var e = navigator.userAgent.toLowerCase(), r = /(chrome)[ ]([\w.]+)/.exec(e) || /(webkit)[ ]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ ]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
      return {
        browser: r[1] || "",
        version: r[2] || "0"
      };
    }
  }, {
    key: "blockBodyScroll",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "p-overflow-hidden", r = !!document.body.style.getPropertyValue("--scrollbar-width");
      !r && document.body.style.setProperty("--scrollbar-width", this.calculateBodyScrollbarWidth() + "px"), this.addClass(document.body, e);
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
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = n.find(e, 'button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(r, `,
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(r, `,
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(r, `,
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(r, `,
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(r, `,
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(r, `,
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(r)), a = [], i = ea(o), l;
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
    value: function(e, r) {
      var o = n.getFocusableElements(e, r);
      return o.length > 0 ? o[0] : null;
    }
  }, {
    key: "getLastFocusableElement",
    value: function(e, r) {
      var o = n.getFocusableElements(e, r);
      return o.length > 0 ? o[o.length - 1] : null;
    }
    /**
     * Focus an input element if it does not already have focus.
     *
     * @param {HTMLElement} el a HTML element
     * @param {boolean} scrollTo flag to control whether to scroll to the element, false by default
     */
  }, {
    key: "focus",
    value: function(e, r) {
      var o = r === void 0 ? !0 : !r;
      e && document.activeElement !== e && e.focus({
        preventScroll: o
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
    value: function(e, r) {
      if (e) {
        var o = n.getFirstFocusableElement(e);
        return o && n.focus(o, r), o;
      }
    }
  }, {
    key: "getCursorOffset",
    value: function(e, r, o, a) {
      if (e) {
        var i = getComputedStyle(e), l = document.createElement("div");
        l.style.position = "absolute", l.style.top = "0px", l.style.left = "0px", l.style.visibility = "hidden", l.style.pointerEvents = "none", l.style.overflow = i.overflow, l.style.width = i.width, l.style.height = i.height, l.style.padding = i.padding, l.style.border = i.border, l.style.overflowWrap = i.overflowWrap, l.style.whiteSpace = i.whiteSpace, l.style.lineHeight = i.lineHeight, l.innerHTML = r.replace(/\r\n|\r|\n/g, "<br />");
        var s = document.createElement("span");
        s.textContent = a, l.appendChild(s);
        var c = document.createTextNode(o);
        l.appendChild(c), document.body.appendChild(l);
        var d = s.offsetLeft, f = s.offsetTop, m = s.clientHeight;
        return document.body.removeChild(l), {
          left: Math.abs(d - e.scrollLeft),
          top: Math.abs(f - e.scrollTop) + m
        };
      }
      return {
        top: "auto",
        left: "auto"
      };
    }
  }, {
    key: "invokeElementMethod",
    value: function(e, r, o) {
      e[r].apply(e, o);
    }
  }, {
    key: "isClickable",
    value: function(e) {
      var r = e.nodeName, o = e.parentElement && e.parentElement.nodeName;
      return r === "INPUT" || r === "TEXTAREA" || r === "BUTTON" || r === "A" || o === "INPUT" || o === "TEXTAREA" || o === "BUTTON" || o === "A" || this.hasClass(e, "p-button") || this.hasClass(e.parentElement, "p-button") || this.hasClass(e.parentElement, "p-checkbox") || this.hasClass(e.parentElement, "p-radiobutton");
    }
  }, {
    key: "applyStyle",
    value: function(e, r) {
      if (typeof r == "string")
        e.style.cssText = this.style;
      else
        for (var o in this.style)
          e.style[o] = r[o];
    }
  }, {
    key: "exportCSV",
    value: function(e, r) {
      var o = new Blob([e], {
        type: "application/csv;charset=utf-8;"
      });
      if (window.navigator.msSaveOrOpenBlob)
        navigator.msSaveOrOpenBlob(o, r + ".csv");
      else {
        var a = n.saveAs({
          name: r + ".csv",
          src: URL.createObjectURL(o)
        });
        a || (e = "data:text/csv;charset=utf-8," + e, window.open(encodeURI(e)));
      }
    }
  }, {
    key: "saveAs",
    value: function(e) {
      if (e) {
        var r = document.createElement("a");
        if (r.download !== void 0) {
          var o = e.name, a = e.src;
          return r.setAttribute("href", a), r.setAttribute("download", o), r.style.display = "none", document.body.appendChild(r), r.click(), document.body.removeChild(r), !0;
        }
      }
      return !1;
    }
  }, {
    key: "createInlineStyle",
    value: function(e, r) {
      var o = document.createElement("style");
      return n.addNonce(o, e), r || (r = document.head), r.appendChild(o), o;
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
    value: function(e, r) {
      try {
        r || (r = process.env.REACT_APP_CSS_NONCE);
      } catch {
      }
      r && e.setAttribute("nonce", r);
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
      if (Rt(e) === "object" && e.hasOwnProperty("current"))
        return this.isExist(e.current) ? e.current : null;
      var r = function(i) {
        return !!(i && i.constructor && i.call && i.apply);
      }, o = r(e) ? e() : e;
      return o && o.nodeType === 9 || this.isExist(o) ? o : null;
    }
    /**
     * Get the attribute names for an element and sorts them alpha for comparison
     */
  }, {
    key: "getAttributeNames",
    value: function(e) {
      var r, o, a;
      for (o = [], a = e.attributes, r = 0; r < a.length; ++r)
        o.push(a[r].nodeName);
      return o.sort(), o;
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
    value: function(e, r) {
      var o, a, i, l, s;
      if (o = n.getAttributeNames(e), a = n.getAttributeNames(r), o.join(",") !== a.join(","))
        return !1;
      for (var c = 0; c < o.length; ++c)
        if (i = o[c], i === "style")
          for (var d = e.style, f = r.style, m = /^\d+$/, h = 0, x = Object.keys(d); h < x.length; h++) {
            var g = x[h];
            if (!m.test(g) && d[g] !== f[g])
              return !1;
          }
        else if (e.getAttribute(i) !== r.getAttribute(i))
          return !1;
      for (l = e.firstChild, s = r.firstChild; l && s; l = l.nextSibling, s = s.nextSibling) {
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
        var r = getComputedStyle(e), o = parseFloat(r.getPropertyValue("animation-duration") || "0");
        return o > 0;
      }
      return !1;
    }
  }, {
    key: "hasCSSTransition",
    value: function(e) {
      if (e) {
        var r = getComputedStyle(e), o = parseFloat(r.getPropertyValue("transition-duration") || "0");
        return o > 0;
      }
      return !1;
    }
  }]);
}();
No(A, "DATA_PROPS", ["data-"]);
No(A, "ARIA_PROPS", ["aria", "focus-target"]);
function Fc() {
  var n = /* @__PURE__ */ new Map();
  return {
    on: function(e, r) {
      var o = n.get(e);
      o ? o.push(r) : o = [r], n.set(e, o);
    },
    off: function(e, r) {
      var o = n.get(e);
      o && o.splice(o.indexOf(r) >>> 0, 1);
    },
    emit: function(e, r) {
      var o = n.get(e);
      o && o.slice().forEach(function(a) {
        return a(r);
      });
    }
  };
}
function ya() {
  return ya = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, ya.apply(this, arguments);
}
function Mc(n, t) {
  var e = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (!e) {
    if (Array.isArray(n) || (e = zc(n)) || t) {
      e && (n = e);
      var r = 0, o = function() {
      };
      return { s: o, n: function() {
        return r >= n.length ? { done: !0 } : { done: !1, value: n[r++] };
      }, e: function(c) {
        throw c;
      }, f: o };
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
function zc(n, t) {
  if (n) {
    if (typeof n == "string") return Ei(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Ei(n, t);
  }
}
function Ei(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, r = new Array(t); e < t; e++) r[e] = n[e];
  return r;
}
var L = /* @__PURE__ */ function() {
  function n() {
    ri(this, n);
  }
  return oi(n, null, [{
    key: "equals",
    value: function(e, r, o) {
      return o && e && Rt(e) === "object" && r && Rt(r) === "object" ? this.deepEquals(this.resolveFieldData(e, o), this.resolveFieldData(r, o)) : this.deepEquals(e, r);
    }
    /**
     * Compares two JSON objects for deep equality recursively comparing both objects.
     * @param {*} a the first JSON object
     * @param {*} b the second JSON object
     * @returns true if equals, false it not
     */
  }, {
    key: "deepEquals",
    value: function(e, r) {
      if (e === r)
        return !0;
      if (e && r && Rt(e) === "object" && Rt(r) === "object") {
        var o = Array.isArray(e), a = Array.isArray(r), i, l, s;
        if (o && a) {
          if (l = e.length, l !== r.length)
            return !1;
          for (i = l; i-- !== 0; )
            if (!this.deepEquals(e[i], r[i]))
              return !1;
          return !0;
        }
        if (o !== a)
          return !1;
        var c = e instanceof Date, d = r instanceof Date;
        if (c !== d)
          return !1;
        if (c && d)
          return e.getTime() === r.getTime();
        var f = e instanceof RegExp, m = r instanceof RegExp;
        if (f !== m)
          return !1;
        if (f && m)
          return e.toString() === r.toString();
        var h = Object.keys(e);
        if (l = h.length, l !== Object.keys(r).length)
          return !1;
        for (i = l; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(r, h[i]))
            return !1;
        for (i = l; i-- !== 0; )
          if (s = h[i], !this.deepEquals(e[s], r[s]))
            return !1;
        return !0;
      }
      return e !== e && r !== r;
    }
  }, {
    key: "resolveFieldData",
    value: function(e, r) {
      if (!e || !r)
        return null;
      try {
        var o = e[r];
        if (this.isNotEmpty(o))
          return o;
      } catch {
      }
      if (Object.keys(e).length) {
        if (this.isFunction(r))
          return r(e);
        if (this.isNotEmpty(e[r]))
          return e[r];
        if (r.indexOf(".") === -1)
          return e[r];
        for (var a = r.split("."), i = e, l = 0, s = a.length; l < s; ++l) {
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
    value: function(e, r) {
      return !e || !r ? {} : Object.keys(e).filter(function(o) {
        return !r.hasOwnProperty(o);
      }).reduce(function(o, a) {
        return o[a] = e[a], o;
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
    value: function(e, r) {
      var o = {};
      return !e || !r || r.length === 0 || Object.keys(e).filter(function(a) {
        return r.some(function(i) {
          return a.startsWith(i);
        });
      }).forEach(function(a) {
        o[a] = e[a], delete e[a];
      }), o;
    }
  }, {
    key: "reorderArray",
    value: function(e, r, o) {
      e && r !== o && (o >= e.length && (o = o % e.length, r = r % e.length), e.splice(o, 0, e.splice(r, 1)[0]));
    }
  }, {
    key: "findIndexInList",
    value: function(e, r, o) {
      var a = this;
      return r ? o ? r.findIndex(function(i) {
        return a.equals(i, e, o);
      }) : r.findIndex(function(i) {
        return i === e;
      }) : -1;
    }
  }, {
    key: "getJSXElement",
    value: function(e) {
      for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
        o[a - 1] = arguments[a];
      return this.isFunction(e) ? e.apply(void 0, o) : e;
    }
  }, {
    key: "getItemValue",
    value: function(e) {
      for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
        o[a - 1] = arguments[a];
      return this.isFunction(e) ? e.apply(void 0, o) : e;
    }
  }, {
    key: "getProp",
    value: function(e) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = e ? e[r] : void 0;
      return a === void 0 ? o[r] : a;
    }
  }, {
    key: "getPropCaseInsensitive",
    value: function(e, r) {
      var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = this.toFlatCase(r);
      for (var i in e)
        if (e.hasOwnProperty(i) && this.toFlatCase(i) === a)
          return e[i];
      for (var l in o)
        if (o.hasOwnProperty(l) && this.toFlatCase(l) === a)
          return o[l];
    }
  }, {
    key: "getMergedProps",
    value: function(e, r) {
      return Object.assign({}, r, e);
    }
  }, {
    key: "getDiffProps",
    value: function(e, r) {
      return this.findDiffKeys(e, r);
    }
  }, {
    key: "getPropValue",
    value: function(e) {
      for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
        o[a - 1] = arguments[a];
      return this.isFunction(e) ? e.apply(void 0, o) : e;
    }
  }, {
    key: "getComponentProp",
    value: function(e) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this.isNotEmpty(e) ? this.getProp(e.props, r, o) : void 0;
    }
  }, {
    key: "getComponentProps",
    value: function(e, r) {
      return this.isNotEmpty(e) ? this.getMergedProps(e.props, r) : void 0;
    }
  }, {
    key: "getComponentDiffProps",
    value: function(e, r) {
      return this.isNotEmpty(e) ? this.getDiffProps(e.props, r) : void 0;
    }
  }, {
    key: "isValidChild",
    value: function(e, r, o) {
      if (e) {
        var a, i = this.getComponentProp(e, "__TYPE") || (e.type ? e.type.displayName : void 0);
        !i && e !== null && e !== void 0 && (a = e.type) !== null && a !== void 0 && (a = a._payload) !== null && a !== void 0 && a.value && (i = e.type._payload.value.find(function(c) {
          return c === r;
        }));
        var l = i === r;
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
      return e ? Rt(e) === "object" && e.hasOwnProperty("current") ? e.current : e : null;
    }
  }, {
    key: "combinedRefs",
    value: function(e, r) {
      e && r && (typeof r == "function" ? r(e.current) : r.current = e.current);
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
      return e == null || e === "" || Array.isArray(e) && e.length === 0 || !(e instanceof Date) && Rt(e) === "object" && Object.keys(e).length === 0;
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
    value: function(e, r) {
      var o;
      if (this.isNotEmpty(e))
        try {
          o = e.findLast(r);
        } catch {
          o = yo(e).reverse().find(r);
        }
      return o;
    }
    /**
     * Firefox-v103 does not currently support the "findLastIndex" method. It is stated that this method will be supported with Firefox-v104.
     * https://caniuse.com/mdn-javascript_builtins_array_findlastindex
     */
  }, {
    key: "findLastIndex",
    value: function(e, r) {
      var o = -1;
      if (this.isNotEmpty(e))
        try {
          o = e.findLastIndex(r);
        } catch {
          o = e.lastIndexOf(yo(e).reverse().find(r));
        }
      return o;
    }
  }, {
    key: "sort",
    value: function(e, r) {
      var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, a = arguments.length > 3 ? arguments[3] : void 0, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 1, l = this.compare(e, r, a, o), s = o;
      return (this.isEmpty(e) || this.isEmpty(r)) && (s = i === 1 ? o : i), s * l;
    }
  }, {
    key: "compare",
    value: function(e, r, o) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1, i = -1, l = this.isEmpty(e), s = this.isEmpty(r);
      return l && s ? i = 0 : l ? i = a : s ? i = -a : typeof e == "string" && typeof r == "string" ? i = o(e, r) : i = e < r ? -1 : e > r ? 1 : 0, i;
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
    value: function(e, r) {
      var o = Mc(e), a;
      try {
        for (o.s(); !(a = o.n()).done; ) {
          var i = a.value;
          if (i.key === r)
            return i.children || [];
          if (i.children) {
            var l = this.findChildrenByKey(i.children, r);
            if (l.length > 0)
              return l;
          }
        }
      } catch (s) {
        o.e(s);
      } finally {
        o.f();
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
    value: function(e, r, o) {
      if (!(Rt(e) !== "object" || typeof r != "string"))
        for (var a = r.split("."), i = e, l = 0, s = a.length; l < s; ++l) {
          if (l + 1 - s === 0) {
            i[a[l]] = o;
            break;
          }
          i[a[l]] || (i[a[l]] = {}), i = i[a[l]];
        }
    }
  }]);
}();
function Si(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function Hc(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Si(Object(e), !0).forEach(function(r) {
      No(n, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Si(Object(e)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return n;
}
var Nt = /* @__PURE__ */ function() {
  function n() {
    ri(this, n);
  }
  return oi(n, null, [{
    key: "getJSXIcon",
    value: function(e) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = null;
      if (e !== null) {
        var i = Rt(e), l = we(r.className, i === "string" && e);
        if (a = /* @__PURE__ */ u.createElement("span", ya({}, r, {
          className: l
        })), i !== "string") {
          var s = Hc({
            iconProps: r,
            element: a
          }, o);
          return L.getJSXElement(e, s);
        }
      }
      return a;
    }
  }]);
}();
function Ci(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function Oi(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ci(Object(e), !0).forEach(function(r) {
      No(n, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Ci(Object(e)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return n;
}
function wo(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (n) {
    var e = function(i) {
      return typeof i == "function";
    }, r = t.classNameMergeFunction, o = e(r);
    return n.reduce(function(a, i) {
      if (!i)
        return a;
      var l = function() {
        var d = i[s];
        if (s === "style")
          a.style = Oi(Oi({}, a.style), i.style);
        else if (s === "className") {
          var f = "";
          o ? f = r(a.className, i.className) : f = [a.className, i.className].join(" ").trim(), a.className = f || void 0;
        } else if (e(d)) {
          var m = a[s];
          a[s] = m ? function() {
            m.apply(void 0, arguments), d.apply(void 0, arguments);
          } : d;
        } else
          a[s] = d;
      };
      for (var s in i)
        l();
      return a;
    }, {});
  }
}
var Pi = 0;
function Lo() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pr_id_";
  return Pi++, "".concat(n).concat(Pi);
}
function Bc() {
  var n = [], t = function(l, s) {
    var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 999, d = o(l, s, c), f = d.value + (d.key === l ? 0 : c) + 1;
    return n.push({
      key: l,
      value: f
    }), f;
  }, e = function(l) {
    n = n.filter(function(s) {
      return s.value !== l;
    });
  }, r = function(l, s) {
    return o(l, s).value;
  }, o = function(l, s) {
    var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    return yo(n).reverse().find(function(d) {
      return s ? !0 : d.key === l;
    }) || {
      key: l,
      value: c
    };
  }, a = function(l) {
    return l && parseInt(l.style.zIndex, 10) || 0;
  };
  return {
    get: a,
    set: function(l, s, c, d) {
      s && (s.style.zIndex = String(t(l, c, d)));
    },
    clear: function(l) {
      l && (e(Qt.get(l)), l.style.zIndex = "");
    },
    getCurrent: function(l, s) {
      return r(l, s);
    }
  };
}
var Qt = Bc(), At = Object.freeze({
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
function qi(n, t) {
  var e = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (!e) {
    if (Array.isArray(n) || (e = Wc(n)) || t) {
      e && (n = e);
      var r = 0, o = function() {
      };
      return { s: o, n: function() {
        return r >= n.length ? { done: !0 } : { done: !1, value: n[r++] };
      }, e: function(c) {
        throw c;
      }, f: o };
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
function Wc(n, t) {
  if (n) {
    if (typeof n == "string") return Ti(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Ti(n, t);
  }
}
function Ti(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, r = new Array(t); e < t; e++) r[e] = n[e];
  return r;
}
var Ii = {
  filter: function(t, e, r, o, a) {
    var i = [];
    if (!t)
      return i;
    var l = qi(t), s;
    try {
      for (l.s(); !(s = l.n()).done; ) {
        var c = s.value;
        if (typeof c == "string") {
          if (this.filters[o](c, r, a)) {
            i.push(c);
            continue;
          }
        } else {
          var d = qi(e), f;
          try {
            for (d.s(); !(f = d.n()).done; ) {
              var m = f.value, h = L.resolveFieldData(c, m);
              if (this.filters[o](h, r, a)) {
                i.push(c);
                break;
              }
            }
          } catch (x) {
            d.e(x);
          } finally {
            d.f();
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
    startsWith: function(t, e, r) {
      if (e == null || e.trim() === "")
        return !0;
      if (t == null)
        return !1;
      var o = L.removeAccents(e.toString()).toLocaleLowerCase(r), a = L.removeAccents(t.toString()).toLocaleLowerCase(r);
      return a.slice(0, o.length) === o;
    },
    contains: function(t, e, r) {
      if (e == null || typeof e == "string" && e.trim() === "")
        return !0;
      if (t == null)
        return !1;
      var o = L.removeAccents(e.toString()).toLocaleLowerCase(r), a = L.removeAccents(t.toString()).toLocaleLowerCase(r);
      return a.indexOf(o) !== -1;
    },
    notContains: function(t, e, r) {
      if (e == null || typeof e == "string" && e.trim() === "")
        return !0;
      if (t == null)
        return !1;
      var o = L.removeAccents(e.toString()).toLocaleLowerCase(r), a = L.removeAccents(t.toString()).toLocaleLowerCase(r);
      return a.indexOf(o) === -1;
    },
    endsWith: function(t, e, r) {
      if (e == null || e.trim() === "")
        return !0;
      if (t == null)
        return !1;
      var o = L.removeAccents(e.toString()).toLocaleLowerCase(r), a = L.removeAccents(t.toString()).toLocaleLowerCase(r);
      return a.indexOf(o, a.length - o.length) !== -1;
    },
    equals: function(t, e, r) {
      return e == null || typeof e == "string" && e.trim() === "" ? !0 : t == null ? !1 : t.getTime && e.getTime ? t.getTime() === e.getTime() : L.removeAccents(t.toString()).toLocaleLowerCase(r) === L.removeAccents(e.toString()).toLocaleLowerCase(r);
    },
    notEquals: function(t, e, r) {
      return e == null || typeof e == "string" && e.trim() === "" || t == null ? !0 : t.getTime && e.getTime ? t.getTime() !== e.getTime() : L.removeAccents(t.toString()).toLocaleLowerCase(r) !== L.removeAccents(e.toString()).toLocaleLowerCase(r);
    },
    in: function(t, e) {
      if (e == null || e.length === 0)
        return !0;
      for (var r = 0; r < e.length; r++)
        if (L.equals(t, e[r]))
          return !0;
      return !1;
    },
    notIn: function(t, e) {
      if (e == null || e.length === 0)
        return !0;
      for (var r = 0; r < e.length; r++)
        if (L.equals(t, e[r]))
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
function Er(n) {
  "@babel/helpers - typeof";
  return Er = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Er(n);
}
function Vc(n, t) {
  if (Er(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var r = e.call(n, t || "default");
    if (Er(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function Kc(n) {
  var t = Vc(n, "string");
  return Er(t) === "symbol" ? t : String(t);
}
function Kt(n, t, e) {
  return t = Kc(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function Uc(n, t, e) {
  return Object.defineProperty(n, "prototype", {
    writable: !1
  }), n;
}
function Yc(n, t) {
  if (!(n instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
var Dt = /* @__PURE__ */ Uc(function n() {
  Yc(this, n);
});
Kt(Dt, "ripple", !1);
Kt(Dt, "inputStyle", "outlined");
Kt(Dt, "locale", "en");
Kt(Dt, "appendTo", null);
Kt(Dt, "cssTransition", !0);
Kt(Dt, "autoZIndex", !0);
Kt(Dt, "hideOverlaysOnDocumentScrolling", !1);
Kt(Dt, "nonce", null);
Kt(Dt, "nullSortOrder", 1);
Kt(Dt, "zIndex", {
  modal: 1100,
  overlay: 1e3,
  menu: 1e3,
  tooltip: 1100,
  toast: 1200
});
Kt(Dt, "pt", void 0);
Kt(Dt, "filterMatchModeOptions", {
  text: [At.STARTS_WITH, At.CONTAINS, At.NOT_CONTAINS, At.ENDS_WITH, At.EQUALS, At.NOT_EQUALS],
  numeric: [At.EQUALS, At.NOT_EQUALS, At.LESS_THAN, At.LESS_THAN_OR_EQUAL_TO, At.GREATER_THAN, At.GREATER_THAN_OR_EQUAL_TO],
  date: [At.DATE_IS, At.DATE_IS_NOT, At.DATE_BEFORE, At.DATE_AFTER]
});
Kt(Dt, "changeTheme", function(n, t, e, r) {
  var o, a = document.getElementById(e);
  if (!a)
    throw Error("Element with id ".concat(e, " not found."));
  var i = a.getAttribute("href").replace(n, t), l = document.createElement("link");
  l.setAttribute("rel", "stylesheet"), l.setAttribute("id", e), l.setAttribute("href", i), l.addEventListener("load", function() {
    r && r();
  }), (o = a.parentNode) === null || o === void 0 || o.replaceChild(l, a);
});
var Gc = {
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
function Xn(n, t) {
  if (n.includes("__proto__") || n.includes("prototype"))
    throw new Error("Unsafe key detected");
  var e = Dt.locale;
  try {
    return Ml(e)[n];
  } catch {
    throw new Error("The ".concat(n, " option is not found in the current locale('").concat(e, "')."));
  }
}
function _i(n, t) {
  if (n.includes("__proto__") || n.includes("prototype"))
    throw new Error("Unsafe ariaKey detected");
  var e = Dt.locale;
  try {
    var r = Ml(e).aria[n];
    if (r)
      for (var o in t)
        t.hasOwnProperty(o) && (r = r.replace("{".concat(o, "}"), t[o]));
    return r;
  } catch {
    throw new Error("The ".concat(n, " option is not found in the current locale('").concat(e, "')."));
  }
}
function Ml(n) {
  var t = n || Dt.locale;
  if (t.includes("__proto__") || t.includes("prototype"))
    throw new Error("Unsafe locale detected");
  return Gc[t];
}
var yt = /* @__PURE__ */ Te.createContext(), bt = Dt;
function Xc(n) {
  if (Array.isArray(n)) return n;
}
function Jc(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var r, o, a, i, l = [], s = !0, c = !1;
    try {
      if (a = (e = e.call(n)).next, t === 0) {
        if (Object(e) !== e) return;
        s = !1;
      } else for (; !(s = (r = a.call(e)).done) && (l.push(r.value), l.length !== t); s = !0) ;
    } catch (d) {
      c = !0, o = d;
    } finally {
      try {
        if (!s && e.return != null && (i = e.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw o;
      }
    }
    return l;
  }
}
function wa(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, r = new Array(t); e < t; e++) r[e] = n[e];
  return r;
}
function zl(n, t) {
  if (n) {
    if (typeof n == "string") return wa(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return wa(n, t);
  }
}
function Zc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bn(n, t) {
  return Xc(n) || Jc(n, t) || zl(n, t) || Zc();
}
var Sr = function(t) {
  var e = u.useRef(null);
  return u.useEffect(function() {
    return e.current = t, function() {
      e.current = null;
    };
  }, [t]), e.current;
}, an = function(t) {
  return u.useEffect(function() {
    return t;
  }, []);
}, yn = function(t) {
  var e = t.target, r = e === void 0 ? "document" : e, o = t.type, a = t.listener, i = t.options, l = t.when, s = l === void 0 ? !0 : l, c = u.useRef(null), d = u.useRef(null), f = Sr(a), m = Sr(i), h = function() {
    var w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, S = w.target;
    L.isNotEmpty(S) && (x(), (w.when || s) && (c.current = A.getTargetElement(S))), !d.current && c.current && (d.current = function(P) {
      return a && a(P);
    }, c.current.addEventListener(o, d.current, i));
  }, x = function() {
    d.current && (c.current.removeEventListener(o, d.current, i), d.current = null);
  }, g = function() {
    x(), f = null, m = null;
  }, C = u.useCallback(function() {
    s ? c.current = A.getTargetElement(r) : (x(), c.current = null);
  }, [r, s]);
  return u.useEffect(function() {
    C();
  }, [C]), u.useEffect(function() {
    var y = "".concat(f) !== "".concat(a), w = m !== i, S = d.current;
    S && (y || w) ? (x(), s && h()) : S || g();
  }, [a, i, s]), an(function() {
    g();
  }), [h, x];
}, On = {}, Qc = function(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, r = u.useState(function() {
    return Lo();
  }), o = bn(r, 1), a = o[0], i = u.useState(0), l = bn(i, 2), s = l[0], c = l[1];
  return u.useEffect(function() {
    if (e) {
      On[t] || (On[t] = []);
      var d = On[t].push(a);
      return c(d), function() {
        delete On[t][d - 1];
        var f = On[t].length - 1, m = L.findLastIndex(On[t], function(h) {
          return h !== void 0;
        });
        m !== f && On[t].splice(m + 1), c(void 0);
      };
    }
  }, [t, a, e]), s;
};
function eu(n) {
  if (Array.isArray(n)) return wa(n);
}
function tu(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function nu() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ri(n) {
  return eu(n) || tu(n) || zl(n) || nu();
}
var Hl = {
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
}, Bl = {
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
      var e = Bl.escKeyListeners, r = Math.max.apply(Math, Ri(e.keys())), o = e.get(r), a = Math.max.apply(Math, Ri(o.keys())), i = o.get(a);
      i(t);
    }
  },
  /**
   * Attach global keydown listener if there are any "esc" key handlers assigned,
   * otherwise detach.
   */
  refreshGlobalKeyDownListener: function() {
    var t = A.getTargetElement("document");
    this.escKeyListeners.size > 0 ? t.addEventListener("keydown", this.onGlobalKeyDown) : t.removeEventListener("keydown", this.onGlobalKeyDown);
  },
  /**
   * Add "Esc" key handler
   */
  addListener: function(t, e) {
    var r = this, o = bn(e, 2), a = o[0], i = o[1], l = this.escKeyListeners;
    l.has(a) || l.set(a, /* @__PURE__ */ new Map());
    var s = l.get(a);
    if (s.has(i))
      throw new Error("Unexpected: global esc key listener with priority [".concat(a, ", ").concat(i, "] already exists."));
    return s.set(i, t), this.refreshGlobalKeyDownListener(), function() {
      s.delete(i), s.size === 0 && l.delete(a), r.refreshGlobalKeyDownListener();
    };
  }
}, Wl = function(t) {
  var e = t.callback, r = t.when, o = t.priority;
  Re(function() {
    if (r)
      return Bl.addListener(e, o);
  }, [e, r, o]);
}, Ft = function() {
  var t = nn(yt);
  return function() {
    for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
      r[o] = arguments[o];
    return wo(r, t == null ? void 0 : t.ptOptions);
  };
}, Gt = function(t) {
  var e = u.useRef(!1);
  return u.useEffect(function() {
    if (!e.current)
      return e.current = !0, t && t();
  }, []);
}, Vl = function(t) {
  var e = t.target, r = t.listener, o = t.options, a = t.when, i = a === void 0 ? !0 : a, l = u.useContext(yt), s = u.useRef(null), c = u.useRef(null), d = u.useRef([]), f = Sr(r), m = Sr(o), h = function() {
    var w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (L.isNotEmpty(w.target) && (x(), (w.when || i) && (s.current = A.getTargetElement(w.target))), !c.current && s.current) {
      var S = l ? l.hideOverlaysOnDocumentScrolling : bt.hideOverlaysOnDocumentScrolling, P = d.current = A.getScrollableParents(s.current, S);
      c.current = function(b) {
        return r && r(b);
      }, P.forEach(function(b) {
        return b.addEventListener("scroll", c.current, o);
      });
    }
  }, x = function() {
    if (c.current) {
      var w = d.current;
      w.forEach(function(S) {
        return S.removeEventListener("scroll", c.current, o);
      }), c.current = null;
    }
  }, g = function() {
    x(), d.current = null, f = null, m = null;
  }, C = u.useCallback(function() {
    i ? s.current = A.getTargetElement(e) : (x(), s.current = null);
  }, [e, i]);
  return u.useEffect(function() {
    C();
  }, [C]), u.useEffect(function() {
    var y = "".concat(f) !== "".concat(r), w = m !== o, S = c.current;
    S && (y || w) ? (x(), i && h()) : S || g();
  }, [r, o, i]), an(function() {
    g();
  }), [h, x];
}, ai = function(t) {
  var e = t.listener, r = t.when, o = r === void 0 ? !0 : r;
  return yn({
    target: "window",
    type: "resize",
    listener: e,
    when: o
  });
}, ru = function(t) {
  var e = t.target, r = t.overlay, o = t.listener, a = t.when, i = a === void 0 ? !0 : a, l = t.type, s = l === void 0 ? "click" : l, c = u.useRef(null), d = u.useRef(null), f = yn({
    target: "window",
    type: s,
    listener: function(ae) {
      o && o(ae, {
        type: "outside",
        valid: ae.which !== 3 && R(ae)
      });
    }
  }), m = bn(f, 2), h = m[0], x = m[1], g = ai({
    target: "window",
    listener: function(ae) {
      o && o(ae, {
        type: "resize",
        valid: !A.isTouchDevice()
      });
    }
  }), C = bn(g, 2), y = C[0], w = C[1], S = yn({
    target: "window",
    type: "orientationchange",
    listener: function(ae) {
      o && o(ae, {
        type: "orientationchange",
        valid: !0
      });
    }
  }), P = bn(S, 2), b = P[0], T = P[1], I = Vl({
    target: e,
    listener: function(ae) {
      o && o(ae, {
        type: "scroll",
        valid: !0
      });
    }
  }), U = bn(I, 2), $ = U[0], j = U[1], R = function(ae) {
    return c.current && !(c.current.isSameNode(ae.target) || c.current.contains(ae.target) || d.current && d.current.contains(ae.target));
  }, ne = function() {
    h(), y(), b(), $();
  }, B = function() {
    x(), w(), T(), j();
  };
  return u.useEffect(function() {
    i ? (c.current = A.getTargetElement(e), d.current = A.getTargetElement(r)) : (B(), c.current = d.current = null);
  }, [e, r, i]), u.useEffect(function() {
    B();
  }, [i]), an(function() {
    B();
  }), [ne, B];
}, ou = 0, In = function(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = $e(!1), o = bn(r, 2), a = o[0], i = o[1], l = Xe(null), s = nn(yt), c = A.isClient() ? window.document : void 0, d = e.document, f = d === void 0 ? c : d, m = e.manual, h = m === void 0 ? !1 : m, x = e.name, g = x === void 0 ? "style_".concat(++ou) : x, C = e.id, y = C === void 0 ? void 0 : C, w = e.media, S = w === void 0 ? void 0 : w, P = function($) {
    var j = $.querySelector('style[data-primereact-style-id="'.concat(g, '"]'));
    if (j)
      return j;
    if (y !== void 0) {
      var R = f.getElementById(y);
      if (R)
        return R;
    }
    return f.createElement("style");
  }, b = function($) {
    a && t !== $ && (l.current.textContent = $);
  }, T = function() {
    if (!(!f || a)) {
      var $ = (s == null ? void 0 : s.styleContainer) || f.head;
      l.current = P($), l.current.isConnected || (l.current.type = "text/css", y && (l.current.id = y), S && (l.current.media = S), A.addNonce(l.current, s && s.nonce || bt.nonce), $.appendChild(l.current), g && l.current.setAttribute("data-primereact-style-id", g)), l.current.textContent = t, i(!0);
    }
  }, I = function() {
    !f || !l.current || (A.removeInlineStyle(l.current), i(!1));
  };
  return Re(function() {
    h || T();
  }, [h]), {
    id: y,
    name: g,
    update: b,
    unload: I,
    load: T,
    isLoaded: a
  };
}, tt = function(t, e) {
  var r = u.useRef(!1);
  return u.useEffect(function() {
    if (!r.current) {
      r.current = !0;
      return;
    }
    return t && t();
  }, e);
};
function xa(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, r = new Array(t); e < t; e++) r[e] = n[e];
  return r;
}
function au(n) {
  if (Array.isArray(n)) return xa(n);
}
function iu(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function lu(n, t) {
  if (n) {
    if (typeof n == "string") return xa(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return xa(n, t);
  }
}
function su() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ki(n) {
  return au(n) || iu(n) || lu(n) || su();
}
function Cr(n) {
  "@babel/helpers - typeof";
  return Cr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Cr(n);
}
function cu(n, t) {
  if (Cr(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var r = e.call(n, t || "default");
    if (Cr(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function uu(n) {
  var t = cu(n, "string");
  return Cr(t) === "symbol" ? t : String(t);
}
function Ea(n, t, e) {
  return t = uu(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function Di(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function It(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Di(Object(e), !0).forEach(function(r) {
      Ea(n, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Di(Object(e)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return n;
}
var du = `
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
`, fu = `
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
`, pu = `
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
`, vu = `
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
`, mu = `
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

    `.concat(fu, `
    `).concat(pu, `
    `).concat(vu, `
}
`), Le = {
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
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = t.css, r = It(It({}, t.defaultProps), Le.defaultProps), o = {}, a = function(d) {
      var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return Le.context = f, Le.cProps = d, L.getMergedProps(d, r);
    }, i = function(d) {
      return L.getDiffProps(d, r);
    }, l = function() {
      var d, f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, x = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0;
      f.hasOwnProperty("pt") && f.pt !== void 0 && (f = f.pt);
      var g = m, C = /./g.test(g) && !!h[g.split(".")[0]], y = C ? L.toFlatCase(g.split(".")[1]) : L.toFlatCase(g), w = h.hostName && L.toFlatCase(h.hostName), S = w || h.props && h.props.__TYPE && L.toFlatCase(h.props.__TYPE) || "", P = y === "transition", b = "data-pc-", T = function Se(pe) {
        return pe != null && pe.props ? pe.hostName ? pe.props.__TYPE === pe.hostName ? pe.props : Se(pe.parent) : pe.parent : void 0;
      }, I = function(pe) {
        var Z, _;
        return ((Z = h.props) === null || Z === void 0 ? void 0 : Z[pe]) || ((_ = T(h)) === null || _ === void 0 ? void 0 : _[pe]);
      };
      Le.cParams = h, Le.cName = S;
      var U = I("ptOptions") || Le.context.ptOptions || {}, $ = U.mergeSections, j = $ === void 0 ? !0 : $, R = U.mergeProps, ne = R === void 0 ? !1 : R, B = function() {
        var pe = wn.apply(void 0, arguments);
        return Array.isArray(pe) ? {
          className: we.apply(void 0, ki(pe))
        } : L.isString(pe) ? {
          className: pe
        } : pe != null && pe.hasOwnProperty("className") && Array.isArray(pe.className) ? {
          className: we.apply(void 0, ki(pe.className))
        } : pe;
      }, re = x ? C ? Kl(B, g, h) : Ul(B, g, h) : void 0, ae = C ? void 0 : Fo($o(f, S), B, g, h), he = !P && It(It({}, y === "root" && Ea({}, "".concat(b, "name"), h.props && h.props.__parentMetadata ? L.toFlatCase(h.props.__TYPE) : S)), {}, Ea({}, "".concat(b, "section"), y));
      return j || !j && ae ? ne ? wo([re, ae, Object.keys(he).length ? he : {}], {
        classNameMergeFunction: (d = Le.context.ptOptions) === null || d === void 0 ? void 0 : d.classNameMergeFunction
      }) : It(It(It({}, re), ae), Object.keys(he).length ? he : {}) : It(It({}, ae), Object.keys(he).length ? he : {});
    }, s = function() {
      var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, f = d.props, m = d.state, h = function() {
        var S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return l((f || {}).pt, S, It(It({}, d), P));
      }, x = function() {
        var S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return l(S, P, b, !1);
      }, g = function() {
        return Le.context.unstyled || bt.unstyled || f.unstyled;
      }, C = function() {
        var S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return g() ? void 0 : wn(e && e.classes, S, It({
          props: f,
          state: m
        }, P));
      }, y = function() {
        var S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
        if (b) {
          var T, I = wn(e && e.inlineStyles, S, It({
            props: f,
            state: m
          }, P)), U = wn(o, S, It({
            props: f,
            state: m
          }, P));
          return wo([U, I], {
            classNameMergeFunction: (T = Le.context.ptOptions) === null || T === void 0 ? void 0 : T.classNameMergeFunction
          });
        }
      };
      return {
        ptm: h,
        ptmo: x,
        sx: y,
        cx: C,
        isUnstyled: g
      };
    };
    return It(It({
      getProps: a,
      getOtherProps: i,
      setMetaData: s
    }, t), {}, {
      defaultProps: r
    });
  }
}, wn = function n(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = String(L.toFlatCase(e)).split("."), a = o.shift(), i = L.isNotEmpty(t) ? Object.keys(t).find(function(l) {
    return L.toFlatCase(l) === a;
  }) : "";
  return a ? L.isObject(t) ? n(L.getItemValue(t[i], r), o.join("."), r) : void 0 : L.getItemValue(t, r);
}, $o = function(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 ? arguments[2] : void 0, o = t == null ? void 0 : t._usept, a = function(l) {
    var s, c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, d = r ? r(l) : l, f = L.toFlatCase(e);
    return (s = c ? f !== Le.cName ? d == null ? void 0 : d[f] : void 0 : d == null ? void 0 : d[f]) !== null && s !== void 0 ? s : d;
  };
  return L.isNotEmpty(o) ? {
    _usept: o,
    originalValue: a(t.originalValue),
    value: a(t.value)
  } : a(t, !0);
}, Fo = function(t, e, r, o) {
  var a = function(g) {
    return e(g, r, o);
  };
  if (t != null && t.hasOwnProperty("_usept")) {
    var i = t._usept || Le.context.ptOptions || {}, l = i.mergeSections, s = l === void 0 ? !0 : l, c = i.mergeProps, d = c === void 0 ? !1 : c, f = i.classNameMergeFunction, m = a(t.originalValue), h = a(t.value);
    return m === void 0 && h === void 0 ? void 0 : L.isString(h) ? h : L.isString(m) ? m : s || !s && h ? d ? wo([m, h], {
      classNameMergeFunction: f
    }) : It(It({}, m), h) : h;
  }
  return a(t);
}, gu = function() {
  return $o(Le.context.pt || bt.pt, void 0, function(t) {
    return L.getItemValue(t, Le.cParams);
  });
}, hu = function() {
  return $o(Le.context.pt || bt.pt, void 0, function(t) {
    return wn(t, Le.cName, Le.cParams) || L.getItemValue(t, Le.cParams);
  });
}, Kl = function(t, e, r) {
  return Fo(gu(), t, e, r);
}, Ul = function(t, e, r) {
  return Fo(hu(), t, e, r);
}, Xt = function(t) {
  var e = arguments.length > 2 ? arguments[2] : void 0, r = e.name, o = e.styled, a = o === void 0 ? !1 : o, i = e.hostName, l = i === void 0 ? "" : i, s = Kl(wn, "global.css", Le.cParams), c = L.toFlatCase(r), d = In(du, {
    name: "base",
    manual: !0
  }), f = d.load, m = In(mu, {
    name: "common",
    manual: !0
  }), h = m.load, x = In(s, {
    name: "global",
    manual: !0
  }), g = x.load, C = In(t, {
    name: r,
    manual: !0
  }), y = C.load, w = function(P) {
    if (!l) {
      var b = Fo($o((Le.cProps || {}).pt, c), wn, "hooks.".concat(P)), T = Ul(wn, "hooks.".concat(P));
      b == null || b(), T == null || T();
    }
  };
  w("useMountEffect"), Gt(function() {
    f(), g(), h(), a || y();
  }), tt(function() {
    w("useUpdateEffect");
  }), an(function() {
    w("useUnmountEffect");
  });
};
function xo() {
  return xo = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var r in e) ({}).hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, xo.apply(null, arguments);
}
function Yl(n, t) {
  if (n == null) return {};
  var e = {};
  for (var r in n) if ({}.hasOwnProperty.call(n, r)) {
    if (t.includes(r)) continue;
    e[r] = n[r];
  }
  return e;
}
function Sa(n, t) {
  return Sa = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, r) {
    return e.__proto__ = r, e;
  }, Sa(n, t);
}
function Gl(n, t) {
  n.prototype = Object.create(t.prototype), n.prototype.constructor = n, Sa(n, t);
}
var Ca = { exports: {} }, Xr = { exports: {} }, Ke = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ji;
function bu() {
  if (ji) return Ke;
  ji = 1;
  var n = typeof Symbol == "function" && Symbol.for, t = n ? Symbol.for("react.element") : 60103, e = n ? Symbol.for("react.portal") : 60106, r = n ? Symbol.for("react.fragment") : 60107, o = n ? Symbol.for("react.strict_mode") : 60108, a = n ? Symbol.for("react.profiler") : 60114, i = n ? Symbol.for("react.provider") : 60109, l = n ? Symbol.for("react.context") : 60110, s = n ? Symbol.for("react.async_mode") : 60111, c = n ? Symbol.for("react.concurrent_mode") : 60111, d = n ? Symbol.for("react.forward_ref") : 60112, f = n ? Symbol.for("react.suspense") : 60113, m = n ? Symbol.for("react.suspense_list") : 60120, h = n ? Symbol.for("react.memo") : 60115, x = n ? Symbol.for("react.lazy") : 60116, g = n ? Symbol.for("react.block") : 60121, C = n ? Symbol.for("react.fundamental") : 60117, y = n ? Symbol.for("react.responder") : 60118, w = n ? Symbol.for("react.scope") : 60119;
  function S(b) {
    if (typeof b == "object" && b !== null) {
      var T = b.$$typeof;
      switch (T) {
        case t:
          switch (b = b.type, b) {
            case s:
            case c:
            case r:
            case a:
            case o:
            case f:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case l:
                case d:
                case x:
                case h:
                case i:
                  return b;
                default:
                  return T;
              }
          }
        case e:
          return T;
      }
    }
  }
  function P(b) {
    return S(b) === c;
  }
  return Ke.AsyncMode = s, Ke.ConcurrentMode = c, Ke.ContextConsumer = l, Ke.ContextProvider = i, Ke.Element = t, Ke.ForwardRef = d, Ke.Fragment = r, Ke.Lazy = x, Ke.Memo = h, Ke.Portal = e, Ke.Profiler = a, Ke.StrictMode = o, Ke.Suspense = f, Ke.isAsyncMode = function(b) {
    return P(b) || S(b) === s;
  }, Ke.isConcurrentMode = P, Ke.isContextConsumer = function(b) {
    return S(b) === l;
  }, Ke.isContextProvider = function(b) {
    return S(b) === i;
  }, Ke.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, Ke.isForwardRef = function(b) {
    return S(b) === d;
  }, Ke.isFragment = function(b) {
    return S(b) === r;
  }, Ke.isLazy = function(b) {
    return S(b) === x;
  }, Ke.isMemo = function(b) {
    return S(b) === h;
  }, Ke.isPortal = function(b) {
    return S(b) === e;
  }, Ke.isProfiler = function(b) {
    return S(b) === a;
  }, Ke.isStrictMode = function(b) {
    return S(b) === o;
  }, Ke.isSuspense = function(b) {
    return S(b) === f;
  }, Ke.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === r || b === c || b === a || b === o || b === f || b === m || typeof b == "object" && b !== null && (b.$$typeof === x || b.$$typeof === h || b.$$typeof === i || b.$$typeof === l || b.$$typeof === d || b.$$typeof === C || b.$$typeof === y || b.$$typeof === w || b.$$typeof === g);
  }, Ke.typeOf = S, Ke;
}
var Ue = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ai;
function yu() {
  return Ai || (Ai = 1, process.env.NODE_ENV !== "production" && function() {
    var n = typeof Symbol == "function" && Symbol.for, t = n ? Symbol.for("react.element") : 60103, e = n ? Symbol.for("react.portal") : 60106, r = n ? Symbol.for("react.fragment") : 60107, o = n ? Symbol.for("react.strict_mode") : 60108, a = n ? Symbol.for("react.profiler") : 60114, i = n ? Symbol.for("react.provider") : 60109, l = n ? Symbol.for("react.context") : 60110, s = n ? Symbol.for("react.async_mode") : 60111, c = n ? Symbol.for("react.concurrent_mode") : 60111, d = n ? Symbol.for("react.forward_ref") : 60112, f = n ? Symbol.for("react.suspense") : 60113, m = n ? Symbol.for("react.suspense_list") : 60120, h = n ? Symbol.for("react.memo") : 60115, x = n ? Symbol.for("react.lazy") : 60116, g = n ? Symbol.for("react.block") : 60121, C = n ? Symbol.for("react.fundamental") : 60117, y = n ? Symbol.for("react.responder") : 60118, w = n ? Symbol.for("react.scope") : 60119;
    function S(M) {
      return typeof M == "string" || typeof M == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      M === r || M === c || M === a || M === o || M === f || M === m || typeof M == "object" && M !== null && (M.$$typeof === x || M.$$typeof === h || M.$$typeof === i || M.$$typeof === l || M.$$typeof === d || M.$$typeof === C || M.$$typeof === y || M.$$typeof === w || M.$$typeof === g);
    }
    function P(M) {
      if (typeof M == "object" && M !== null) {
        var Ie = M.$$typeof;
        switch (Ie) {
          case t:
            var Ne = M.type;
            switch (Ne) {
              case s:
              case c:
              case r:
              case a:
              case o:
              case f:
                return Ne;
              default:
                var je = Ne && Ne.$$typeof;
                switch (je) {
                  case l:
                  case d:
                  case x:
                  case h:
                  case i:
                    return je;
                  default:
                    return Ie;
                }
            }
          case e:
            return Ie;
        }
      }
    }
    var b = s, T = c, I = l, U = i, $ = t, j = d, R = r, ne = x, B = h, re = e, ae = a, he = o, Se = f, pe = !1;
    function Z(M) {
      return pe || (pe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), _(M) || P(M) === s;
    }
    function _(M) {
      return P(M) === c;
    }
    function J(M) {
      return P(M) === l;
    }
    function Q(M) {
      return P(M) === i;
    }
    function X(M) {
      return typeof M == "object" && M !== null && M.$$typeof === t;
    }
    function Y(M) {
      return P(M) === d;
    }
    function fe(M) {
      return P(M) === r;
    }
    function ve(M) {
      return P(M) === x;
    }
    function ce(M) {
      return P(M) === h;
    }
    function K(M) {
      return P(M) === e;
    }
    function D(M) {
      return P(M) === a;
    }
    function F(M) {
      return P(M) === o;
    }
    function ue(M) {
      return P(M) === f;
    }
    Ue.AsyncMode = b, Ue.ConcurrentMode = T, Ue.ContextConsumer = I, Ue.ContextProvider = U, Ue.Element = $, Ue.ForwardRef = j, Ue.Fragment = R, Ue.Lazy = ne, Ue.Memo = B, Ue.Portal = re, Ue.Profiler = ae, Ue.StrictMode = he, Ue.Suspense = Se, Ue.isAsyncMode = Z, Ue.isConcurrentMode = _, Ue.isContextConsumer = J, Ue.isContextProvider = Q, Ue.isElement = X, Ue.isForwardRef = Y, Ue.isFragment = fe, Ue.isLazy = ve, Ue.isMemo = ce, Ue.isPortal = K, Ue.isProfiler = D, Ue.isStrictMode = F, Ue.isSuspense = ue, Ue.isValidElementType = S, Ue.typeOf = P;
  }()), Ue;
}
var Ni;
function Xl() {
  return Ni || (Ni = 1, process.env.NODE_ENV === "production" ? Xr.exports = bu() : Xr.exports = yu()), Xr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ta, Li;
function wu() {
  if (Li) return ta;
  Li = 1;
  var n = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, e = Object.prototype.propertyIsEnumerable;
  function r(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var i = {}, l = 0; l < 10; l++)
        i["_" + String.fromCharCode(l)] = l;
      var s = Object.getOwnPropertyNames(i).map(function(d) {
        return i[d];
      });
      if (s.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        c[d] = d;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ta = o() ? Object.assign : function(a, i) {
    for (var l, s = r(a), c, d = 1; d < arguments.length; d++) {
      l = Object(arguments[d]);
      for (var f in l)
        t.call(l, f) && (s[f] = l[f]);
      if (n) {
        c = n(l);
        for (var m = 0; m < c.length; m++)
          e.call(l, c[m]) && (s[c[m]] = l[c[m]]);
      }
    }
    return s;
  }, ta;
}
var na, $i;
function ii() {
  if ($i) return na;
  $i = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return na = n, na;
}
var ra, Fi;
function Jl() {
  return Fi || (Fi = 1, ra = Function.call.bind(Object.prototype.hasOwnProperty)), ra;
}
var oa, Mi;
function xu() {
  if (Mi) return oa;
  Mi = 1;
  var n = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = ii(), e = {}, r = Jl();
    n = function(a) {
      var i = "Warning: " + a;
      typeof console < "u" && console.error(i);
      try {
        throw new Error(i);
      } catch {
      }
    };
  }
  function o(a, i, l, s, c) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in a)
        if (r(a, d)) {
          var f;
          try {
            if (typeof a[d] != "function") {
              var m = Error(
                (s || "React class") + ": " + l + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            f = a[d](i, d, s, l, null, t);
          } catch (x) {
            f = x;
          }
          if (f && !(f instanceof Error) && n(
            (s || "React class") + ": type specification of " + l + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in e)) {
            e[f.message] = !0;
            var h = c ? c() : "";
            n(
              "Failed " + l + " type: " + f.message + (h ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (e = {});
  }, oa = o, oa;
}
var aa, zi;
function Eu() {
  if (zi) return aa;
  zi = 1;
  var n = Xl(), t = wu(), e = ii(), r = Jl(), o = xu(), a = function() {
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
  return aa = function(l, s) {
    var c = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function f(_) {
      var J = _ && (c && _[c] || _[d]);
      if (typeof J == "function")
        return J;
    }
    var m = "<<anonymous>>", h = {
      array: y("array"),
      bigint: y("bigint"),
      bool: y("boolean"),
      func: y("function"),
      number: y("number"),
      object: y("object"),
      string: y("string"),
      symbol: y("symbol"),
      any: w(),
      arrayOf: S,
      element: P(),
      elementType: b(),
      instanceOf: T,
      node: j(),
      objectOf: U,
      oneOf: I,
      oneOfType: $,
      shape: ne,
      exact: B
    };
    function x(_, J) {
      return _ === J ? _ !== 0 || 1 / _ === 1 / J : _ !== _ && J !== J;
    }
    function g(_, J) {
      this.message = _, this.data = J && typeof J == "object" ? J : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function C(_) {
      if (process.env.NODE_ENV !== "production")
        var J = {}, Q = 0;
      function X(fe, ve, ce, K, D, F, ue) {
        if (K = K || m, F = F || ce, ue !== e) {
          if (s) {
            var M = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw M.name = "Invariant Violation", M;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Ie = K + ":" + ce;
            !J[Ie] && // Avoid spamming the console because they are often not actionable except for lib authors
            Q < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + F + "` prop on `" + K + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), J[Ie] = !0, Q++);
          }
        }
        return ve[ce] == null ? fe ? ve[ce] === null ? new g("The " + D + " `" + F + "` is marked as required " + ("in `" + K + "`, but its value is `null`.")) : new g("The " + D + " `" + F + "` is marked as required in " + ("`" + K + "`, but its value is `undefined`.")) : null : _(ve, ce, K, D, F);
      }
      var Y = X.bind(null, !1);
      return Y.isRequired = X.bind(null, !0), Y;
    }
    function y(_) {
      function J(Q, X, Y, fe, ve, ce) {
        var K = Q[X], D = he(K);
        if (D !== _) {
          var F = Se(K);
          return new g(
            "Invalid " + fe + " `" + ve + "` of type " + ("`" + F + "` supplied to `" + Y + "`, expected ") + ("`" + _ + "`."),
            { expectedType: _ }
          );
        }
        return null;
      }
      return C(J);
    }
    function w() {
      return C(i);
    }
    function S(_) {
      function J(Q, X, Y, fe, ve) {
        if (typeof _ != "function")
          return new g("Property `" + ve + "` of component `" + Y + "` has invalid PropType notation inside arrayOf.");
        var ce = Q[X];
        if (!Array.isArray(ce)) {
          var K = he(ce);
          return new g("Invalid " + fe + " `" + ve + "` of type " + ("`" + K + "` supplied to `" + Y + "`, expected an array."));
        }
        for (var D = 0; D < ce.length; D++) {
          var F = _(ce, D, Y, fe, ve + "[" + D + "]", e);
          if (F instanceof Error)
            return F;
        }
        return null;
      }
      return C(J);
    }
    function P() {
      function _(J, Q, X, Y, fe) {
        var ve = J[Q];
        if (!l(ve)) {
          var ce = he(ve);
          return new g("Invalid " + Y + " `" + fe + "` of type " + ("`" + ce + "` supplied to `" + X + "`, expected a single ReactElement."));
        }
        return null;
      }
      return C(_);
    }
    function b() {
      function _(J, Q, X, Y, fe) {
        var ve = J[Q];
        if (!n.isValidElementType(ve)) {
          var ce = he(ve);
          return new g("Invalid " + Y + " `" + fe + "` of type " + ("`" + ce + "` supplied to `" + X + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return C(_);
    }
    function T(_) {
      function J(Q, X, Y, fe, ve) {
        if (!(Q[X] instanceof _)) {
          var ce = _.name || m, K = Z(Q[X]);
          return new g("Invalid " + fe + " `" + ve + "` of type " + ("`" + K + "` supplied to `" + Y + "`, expected ") + ("instance of `" + ce + "`."));
        }
        return null;
      }
      return C(J);
    }
    function I(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), i;
      function J(Q, X, Y, fe, ve) {
        for (var ce = Q[X], K = 0; K < _.length; K++)
          if (x(ce, _[K]))
            return null;
        var D = JSON.stringify(_, function(ue, M) {
          var Ie = Se(M);
          return Ie === "symbol" ? String(M) : M;
        });
        return new g("Invalid " + fe + " `" + ve + "` of value `" + String(ce) + "` " + ("supplied to `" + Y + "`, expected one of " + D + "."));
      }
      return C(J);
    }
    function U(_) {
      function J(Q, X, Y, fe, ve) {
        if (typeof _ != "function")
          return new g("Property `" + ve + "` of component `" + Y + "` has invalid PropType notation inside objectOf.");
        var ce = Q[X], K = he(ce);
        if (K !== "object")
          return new g("Invalid " + fe + " `" + ve + "` of type " + ("`" + K + "` supplied to `" + Y + "`, expected an object."));
        for (var D in ce)
          if (r(ce, D)) {
            var F = _(ce, D, Y, fe, ve + "." + D, e);
            if (F instanceof Error)
              return F;
          }
        return null;
      }
      return C(J);
    }
    function $(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var J = 0; J < _.length; J++) {
        var Q = _[J];
        if (typeof Q != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + pe(Q) + " at index " + J + "."
          ), i;
      }
      function X(Y, fe, ve, ce, K) {
        for (var D = [], F = 0; F < _.length; F++) {
          var ue = _[F], M = ue(Y, fe, ve, ce, K, e);
          if (M == null)
            return null;
          M.data && r(M.data, "expectedType") && D.push(M.data.expectedType);
        }
        var Ie = D.length > 0 ? ", expected one of type [" + D.join(", ") + "]" : "";
        return new g("Invalid " + ce + " `" + K + "` supplied to " + ("`" + ve + "`" + Ie + "."));
      }
      return C(X);
    }
    function j() {
      function _(J, Q, X, Y, fe) {
        return re(J[Q]) ? null : new g("Invalid " + Y + " `" + fe + "` supplied to " + ("`" + X + "`, expected a ReactNode."));
      }
      return C(_);
    }
    function R(_, J, Q, X, Y) {
      return new g(
        (_ || "React class") + ": " + J + " type `" + Q + "." + X + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + Y + "`."
      );
    }
    function ne(_) {
      function J(Q, X, Y, fe, ve) {
        var ce = Q[X], K = he(ce);
        if (K !== "object")
          return new g("Invalid " + fe + " `" + ve + "` of type `" + K + "` " + ("supplied to `" + Y + "`, expected `object`."));
        for (var D in _) {
          var F = _[D];
          if (typeof F != "function")
            return R(Y, fe, ve, D, Se(F));
          var ue = F(ce, D, Y, fe, ve + "." + D, e);
          if (ue)
            return ue;
        }
        return null;
      }
      return C(J);
    }
    function B(_) {
      function J(Q, X, Y, fe, ve) {
        var ce = Q[X], K = he(ce);
        if (K !== "object")
          return new g("Invalid " + fe + " `" + ve + "` of type `" + K + "` " + ("supplied to `" + Y + "`, expected `object`."));
        var D = t({}, Q[X], _);
        for (var F in D) {
          var ue = _[F];
          if (r(_, F) && typeof ue != "function")
            return R(Y, fe, ve, F, Se(ue));
          if (!ue)
            return new g(
              "Invalid " + fe + " `" + ve + "` key `" + F + "` supplied to `" + Y + "`.\nBad object: " + JSON.stringify(Q[X], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(_), null, "  ")
            );
          var M = ue(ce, F, Y, fe, ve + "." + F, e);
          if (M)
            return M;
        }
        return null;
      }
      return C(J);
    }
    function re(_) {
      switch (typeof _) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !_;
        case "object":
          if (Array.isArray(_))
            return _.every(re);
          if (_ === null || l(_))
            return !0;
          var J = f(_);
          if (J) {
            var Q = J.call(_), X;
            if (J !== _.entries) {
              for (; !(X = Q.next()).done; )
                if (!re(X.value))
                  return !1;
            } else
              for (; !(X = Q.next()).done; ) {
                var Y = X.value;
                if (Y && !re(Y[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ae(_, J) {
      return _ === "symbol" ? !0 : J ? J["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && J instanceof Symbol : !1;
    }
    function he(_) {
      var J = typeof _;
      return Array.isArray(_) ? "array" : _ instanceof RegExp ? "object" : ae(J, _) ? "symbol" : J;
    }
    function Se(_) {
      if (typeof _ > "u" || _ === null)
        return "" + _;
      var J = he(_);
      if (J === "object") {
        if (_ instanceof Date)
          return "date";
        if (_ instanceof RegExp)
          return "regexp";
      }
      return J;
    }
    function pe(_) {
      var J = Se(_);
      switch (J) {
        case "array":
        case "object":
          return "an " + J;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + J;
        default:
          return J;
      }
    }
    function Z(_) {
      return !_.constructor || !_.constructor.name ? m : _.constructor.name;
    }
    return h.checkPropTypes = o, h.resetWarningCache = o.resetWarningCache, h.PropTypes = h, h;
  }, aa;
}
var ia, Hi;
function Su() {
  if (Hi) return ia;
  Hi = 1;
  var n = ii();
  function t() {
  }
  function e() {
  }
  return e.resetWarningCache = t, ia = function() {
    function r(i, l, s, c, d, f) {
      if (f !== n) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
      }
    }
    r.isRequired = r;
    function o() {
      return r;
    }
    var a = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: o,
      element: r,
      elementType: r,
      instanceOf: o,
      node: r,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: e,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, ia;
}
if (process.env.NODE_ENV !== "production") {
  var Cu = Xl(), Ou = !0;
  Ca.exports = Eu()(Cu.isElement, Ou);
} else
  Ca.exports = Su()();
var Pn = Ca.exports;
const ke = /* @__PURE__ */ yc(Pn);
function Pu(n, t) {
  return n.classList ? !!t && n.classList.contains(t) : (" " + (n.className.baseVal || n.className) + " ").indexOf(" " + t + " ") !== -1;
}
function qu(n, t) {
  n.classList ? n.classList.add(t) : Pu(n, t) || (typeof n.className == "string" ? n.className = n.className + " " + t : n.setAttribute("class", (n.className && n.className.baseVal || "") + " " + t));
}
function Bi(n, t) {
  return n.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function Tu(n, t) {
  n.classList ? n.classList.remove(t) : typeof n.className == "string" ? n.className = Bi(n.className, t) : n.setAttribute("class", Bi(n.className && n.className.baseVal || "", t));
}
const Wi = {
  disabled: !1
};
var Iu = process.env.NODE_ENV !== "production" ? ke.oneOfType([ke.number, ke.shape({
  enter: ke.number,
  exit: ke.number,
  appear: ke.number
}).isRequired]) : null, _u = process.env.NODE_ENV !== "production" ? ke.oneOfType([ke.string, ke.shape({
  enter: ke.string,
  exit: ke.string,
  active: ke.string
}), ke.shape({
  enter: ke.string,
  enterDone: ke.string,
  enterActive: ke.string,
  exit: ke.string,
  exitDone: ke.string,
  exitActive: ke.string
})]) : null;
const Zl = Te.createContext(null);
var Ql = function(t) {
  return t.scrollTop;
}, mr = "unmounted", qn = "exited", Tn = "entering", zn = "entered", Oa = "exiting", ln = /* @__PURE__ */ function(n) {
  Gl(t, n);
  function t(r, o) {
    var a;
    a = n.call(this, r, o) || this;
    var i = o, l = i && !i.isMounting ? r.enter : r.appear, s;
    return a.appearStatus = null, r.in ? l ? (s = qn, a.appearStatus = Tn) : s = zn : r.unmountOnExit || r.mountOnEnter ? s = mr : s = qn, a.state = {
      status: s
    }, a.nextCallback = null, a;
  }
  t.getDerivedStateFromProps = function(o, a) {
    var i = o.in;
    return i && a.status === mr ? {
      status: qn
    } : null;
  };
  var e = t.prototype;
  return e.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, e.componentDidUpdate = function(o) {
    var a = null;
    if (o !== this.props) {
      var i = this.state.status;
      this.props.in ? i !== Tn && i !== zn && (a = Tn) : (i === Tn || i === zn) && (a = Oa);
    }
    this.updateStatus(!1, a);
  }, e.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, e.getTimeouts = function() {
    var o = this.props.timeout, a, i, l;
    return a = i = l = o, o != null && typeof o != "number" && (a = o.exit, i = o.enter, l = o.appear !== void 0 ? o.appear : i), {
      exit: a,
      enter: i,
      appear: l
    };
  }, e.updateStatus = function(o, a) {
    if (o === void 0 && (o = !1), a !== null)
      if (this.cancelNextCallback(), a === Tn) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var i = this.props.nodeRef ? this.props.nodeRef.current : vr.findDOMNode(this);
          i && Ql(i);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === qn && this.setState({
      status: mr
    });
  }, e.performEnter = function(o) {
    var a = this, i = this.props.enter, l = this.context ? this.context.isMounting : o, s = this.props.nodeRef ? [l] : [vr.findDOMNode(this), l], c = s[0], d = s[1], f = this.getTimeouts(), m = l ? f.appear : f.enter;
    if (!o && !i || Wi.disabled) {
      this.safeSetState({
        status: zn
      }, function() {
        a.props.onEntered(c);
      });
      return;
    }
    this.props.onEnter(c, d), this.safeSetState({
      status: Tn
    }, function() {
      a.props.onEntering(c, d), a.onTransitionEnd(m, function() {
        a.safeSetState({
          status: zn
        }, function() {
          a.props.onEntered(c, d);
        });
      });
    });
  }, e.performExit = function() {
    var o = this, a = this.props.exit, i = this.getTimeouts(), l = this.props.nodeRef ? void 0 : vr.findDOMNode(this);
    if (!a || Wi.disabled) {
      this.safeSetState({
        status: qn
      }, function() {
        o.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: Oa
    }, function() {
      o.props.onExiting(l), o.onTransitionEnd(i.exit, function() {
        o.safeSetState({
          status: qn
        }, function() {
          o.props.onExited(l);
        });
      });
    });
  }, e.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, e.safeSetState = function(o, a) {
    a = this.setNextCallback(a), this.setState(o, a);
  }, e.setNextCallback = function(o) {
    var a = this, i = !0;
    return this.nextCallback = function(l) {
      i && (i = !1, a.nextCallback = null, o(l));
    }, this.nextCallback.cancel = function() {
      i = !1;
    }, this.nextCallback;
  }, e.onTransitionEnd = function(o, a) {
    this.setNextCallback(a);
    var i = this.props.nodeRef ? this.props.nodeRef.current : vr.findDOMNode(this), l = o == null && !this.props.addEndListener;
    if (!i || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var s = this.props.nodeRef ? [this.nextCallback] : [i, this.nextCallback], c = s[0], d = s[1];
      this.props.addEndListener(c, d);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, e.render = function() {
    var o = this.state.status;
    if (o === mr)
      return null;
    var a = this.props, i = a.children;
    a.in, a.mountOnEnter, a.unmountOnExit, a.appear, a.enter, a.exit, a.timeout, a.addEndListener, a.onEnter, a.onEntering, a.onEntered, a.onExit, a.onExiting, a.onExited, a.nodeRef;
    var l = Yl(a, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Te.createElement(Zl.Provider, {
        value: null
      }, typeof i == "function" ? i(o, l) : Te.cloneElement(Te.Children.only(i), l))
    );
  }, t;
}(Te.Component);
ln.contextType = Zl;
ln.propTypes = process.env.NODE_ENV !== "production" ? {
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
  nodeRef: ke.shape({
    current: typeof Element > "u" ? ke.any : function(n, t, e, r, o, a) {
      var i = n[t];
      return ke.instanceOf(i && "ownerDocument" in i ? i.ownerDocument.defaultView.Element : Element)(n, t, e, r, o, a);
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
  children: ke.oneOfType([ke.func.isRequired, ke.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: ke.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: ke.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: ke.bool,
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
  appear: ke.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: ke.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: ke.bool,
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
    var e = Iu;
    t.addEndListener || (e = e.isRequired);
    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      o[a - 1] = arguments[a];
    return e.apply(void 0, [t].concat(o));
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
  addEndListener: ke.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: ke.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: ke.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: ke.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: ke.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: ke.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: ke.func
} : {};
function $n() {
}
ln.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: $n,
  onEntering: $n,
  onEntered: $n,
  onExit: $n,
  onExiting: $n,
  onExited: $n
};
ln.UNMOUNTED = mr;
ln.EXITED = qn;
ln.ENTERING = Tn;
ln.ENTERED = zn;
ln.EXITING = Oa;
var Ru = function(t, e) {
  return t && e && e.split(" ").forEach(function(r) {
    return qu(t, r);
  });
}, la = function(t, e) {
  return t && e && e.split(" ").forEach(function(r) {
    return Tu(t, r);
  });
}, li = /* @__PURE__ */ function(n) {
  Gl(t, n);
  function t() {
    for (var r, o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return r = n.call.apply(n, [this].concat(a)) || this, r.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    }, r.onEnter = function(l, s) {
      var c = r.resolveArguments(l, s), d = c[0], f = c[1];
      r.removeClasses(d, "exit"), r.addClass(d, f ? "appear" : "enter", "base"), r.props.onEnter && r.props.onEnter(l, s);
    }, r.onEntering = function(l, s) {
      var c = r.resolveArguments(l, s), d = c[0], f = c[1], m = f ? "appear" : "enter";
      r.addClass(d, m, "active"), r.props.onEntering && r.props.onEntering(l, s);
    }, r.onEntered = function(l, s) {
      var c = r.resolveArguments(l, s), d = c[0], f = c[1], m = f ? "appear" : "enter";
      r.removeClasses(d, m), r.addClass(d, m, "done"), r.props.onEntered && r.props.onEntered(l, s);
    }, r.onExit = function(l) {
      var s = r.resolveArguments(l), c = s[0];
      r.removeClasses(c, "appear"), r.removeClasses(c, "enter"), r.addClass(c, "exit", "base"), r.props.onExit && r.props.onExit(l);
    }, r.onExiting = function(l) {
      var s = r.resolveArguments(l), c = s[0];
      r.addClass(c, "exit", "active"), r.props.onExiting && r.props.onExiting(l);
    }, r.onExited = function(l) {
      var s = r.resolveArguments(l), c = s[0];
      r.removeClasses(c, "exit"), r.addClass(c, "exit", "done"), r.props.onExited && r.props.onExited(l);
    }, r.resolveArguments = function(l, s) {
      return r.props.nodeRef ? [r.props.nodeRef.current, l] : [l, s];
    }, r.getClassNames = function(l) {
      var s = r.props.classNames, c = typeof s == "string", d = c && s ? s + "-" : "", f = c ? "" + d + l : s[l], m = c ? f + "-active" : s[l + "Active"], h = c ? f + "-done" : s[l + "Done"];
      return {
        baseClassName: f,
        activeClassName: m,
        doneClassName: h
      };
    }, r;
  }
  var e = t.prototype;
  return e.addClass = function(o, a, i) {
    var l = this.getClassNames(a)[i + "ClassName"], s = this.getClassNames("enter"), c = s.doneClassName;
    a === "appear" && i === "done" && c && (l += " " + c), i === "active" && o && Ql(o), l && (this.appliedClasses[a][i] = l, Ru(o, l));
  }, e.removeClasses = function(o, a) {
    var i = this.appliedClasses[a], l = i.base, s = i.active, c = i.done;
    this.appliedClasses[a] = {}, l && la(o, l), s && la(o, s), c && la(o, c);
  }, e.render = function() {
    var o = this.props;
    o.classNames;
    var a = Yl(o, ["classNames"]);
    return /* @__PURE__ */ Te.createElement(ln, xo({}, a, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  }, t;
}(Te.Component);
li.defaultProps = {
  classNames: ""
};
li.propTypes = process.env.NODE_ENV !== "production" ? xo({}, ln.propTypes, {
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
  classNames: _u,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: ke.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: ke.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: ke.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: ke.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: ke.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: ke.func
}) : {};
function Or(n) {
  "@babel/helpers - typeof";
  return Or = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Or(n);
}
function ku(n, t) {
  if (Or(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var r = e.call(n, t || "default");
    if (Or(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function Du(n) {
  var t = ku(n, "string");
  return Or(t) === "symbol" ? t : String(t);
}
function ju(n, t, e) {
  return t = Du(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
var Pa = {
  defaultProps: {
    __TYPE: "CSSTransition",
    children: void 0
  },
  getProps: function(t) {
    return L.getMergedProps(t, Pa.defaultProps);
  },
  getOtherProps: function(t) {
    return L.getDiffProps(t, Pa.defaultProps);
  }
};
function Vi(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function sa(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vi(Object(e), !0).forEach(function(r) {
      ju(n, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Vi(Object(e)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return n;
}
var Mo = /* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Pa.getProps(n), r = u.useContext(yt), o = e.disabled || e.options && e.options.disabled || r && !r.cssTransition || !bt.cssTransition, a = function(g, C) {
    e.onEnter && e.onEnter(g, C), e.options && e.options.onEnter && e.options.onEnter(g, C);
  }, i = function(g, C) {
    e.onEntering && e.onEntering(g, C), e.options && e.options.onEntering && e.options.onEntering(g, C);
  }, l = function(g, C) {
    e.onEntered && e.onEntered(g, C), e.options && e.options.onEntered && e.options.onEntered(g, C);
  }, s = function(g) {
    e.onExit && e.onExit(g), e.options && e.options.onExit && e.options.onExit(g);
  }, c = function(g) {
    e.onExiting && e.onExiting(g), e.options && e.options.onExiting && e.options.onExiting(g);
  }, d = function(g) {
    e.onExited && e.onExited(g), e.options && e.options.onExited && e.options.onExited(g);
  };
  if (tt(function() {
    if (o) {
      var x = L.getRefElement(e.nodeRef);
      e.in ? (a(x, !0), i(x, !0), l(x, !0)) : (s(x), c(x), d(x));
    }
  }, [e.in]), o)
    return e.in ? e.children : null;
  var f = {
    nodeRef: e.nodeRef,
    in: e.in,
    onEnter: a,
    onEntering: i,
    onEntered: l,
    onExit: s,
    onExiting: c,
    onExited: d
  }, m = {
    classNames: e.classNames,
    timeout: e.timeout,
    unmountOnExit: e.unmountOnExit
  }, h = sa(sa(sa({}, m), e.options || {}), f);
  return /* @__PURE__ */ u.createElement(li, h, e.children);
});
Mo.displayName = "CSSTransition";
var Vt = {
  defaultProps: {
    __TYPE: "IconBase",
    className: null,
    label: null,
    spin: !1
  },
  getProps: function(t) {
    return L.getMergedProps(t, Vt.defaultProps);
  },
  getOtherProps: function(t) {
    return L.getDiffProps(t, Vt.defaultProps);
  },
  getPTI: function(t) {
    var e = L.isEmpty(t.label), r = Vt.getOtherProps(t), o = {
      className: we("p-icon", {
        "p-icon-spin": t.spin
      }, t.className),
      role: e ? void 0 : "img",
      "aria-label": e ? void 0 : t.label,
      "aria-hidden": e
    };
    return L.getMergedProps(r, o);
  }
};
function qa() {
  return qa = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, qa.apply(this, arguments);
}
var si = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Vt.getPTI(n);
  return /* @__PURE__ */ u.createElement("svg", qa({
    ref: t,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e), /* @__PURE__ */ u.createElement("path", {
    d: "M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z",
    fill: "currentColor"
  }));
}));
si.displayName = "ChevronDownIcon";
function Ta() {
  return Ta = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, Ta.apply(this, arguments);
}
var ci = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Vt.getPTI(n);
  return /* @__PURE__ */ u.createElement("svg", Ta({
    ref: t,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e), /* @__PURE__ */ u.createElement("path", {
    d: "M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z",
    fill: "currentColor"
  }));
}));
ci.displayName = "ChevronRightIcon";
function Eo() {
  return Eo = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, Eo.apply(this, arguments);
}
function Ia(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, r = new Array(t); e < t; e++) r[e] = n[e];
  return r;
}
function Au(n) {
  if (Array.isArray(n)) return Ia(n);
}
function Nu(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function es(n, t) {
  if (n) {
    if (typeof n == "string") return Ia(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Ia(n, t);
  }
}
function Lu() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $u(n) {
  return Au(n) || Nu(n) || es(n) || Lu();
}
function Pr(n) {
  "@babel/helpers - typeof";
  return Pr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pr(n);
}
function Fu(n, t) {
  if (Pr(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var r = e.call(n, t || "default");
    if (Pr(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function Mu(n) {
  var t = Fu(n, "string");
  return Pr(t) === "symbol" ? t : String(t);
}
function zu(n, t, e) {
  return t = Mu(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function Hu(n) {
  if (Array.isArray(n)) return n;
}
function Bu(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var r, o, a, i, l = [], s = !0, c = !1;
    try {
      if (a = (e = e.call(n)).next, t !== 0) for (; !(s = (r = a.call(e)).done) && (l.push(r.value), l.length !== t); s = !0) ;
    } catch (d) {
      c = !0, o = d;
    } finally {
      try {
        if (!s && e.return != null && (i = e.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw o;
      }
    }
    return l;
  }
}
function Wu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ki(n, t) {
  return Hu(n) || Bu(n, t) || es(n, t) || Wu();
}
var Vu = {
  root: "p-accordion p-component",
  accordiontab: {
    root: function(t) {
      var e = t.selected;
      return we("p-accordion-tab", {
        "p-accordion-tab-active": e
      });
    },
    content: "p-accordion-content",
    header: function(t) {
      var e = t.selected, r = t.getTabProp, o = t.tab;
      return we("p-accordion-header", {
        "p-highlight": e,
        "p-disabled": r(o, "disabled")
      });
    },
    headeraction: "p-accordion-header-link",
    headericon: "p-accordion-toggle-icon",
    headertitle: "p-accordion-header-text",
    toggleablecontent: "p-toggleable-content",
    transition: "p-toggleable-content"
  }
}, Ku = `
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
`, Jr = Le.extend({
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
    classes: Vu,
    styles: Ku
  }
}), Vn = Le.extend({
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
    return L.getComponentProp(t, e, Vn.defaultProps);
  },
  getCProps: function(t) {
    return L.getComponentProps(t, Vn.defaultProps);
  },
  getCOtherProps: function(t) {
    return L.getComponentDiffProps(t, Vn.defaultProps);
  }
});
function Ui(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function Fn(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ui(Object(e), !0).forEach(function(r) {
      zu(n, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Ui(Object(e)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return n;
}
var pn = function() {
}, Sn = /* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Ft(), r = u.useContext(yt), o = Jr.getProps(n, r), a = u.useState(o.id), i = Ki(a, 2), l = i[0], s = i[1], c = u.useState(o.activeIndex), d = Ki(c, 2), f = d[0], m = d[1], h = u.useRef(null), x = o.onTabChange ? o.activeIndex : f, g = u.Children.count(o.children), C = {
    props: o,
    state: {
      id: l,
      activeIndex: f
    }
  }, y = Jr.setMetaData(Fn({}, C)), w = y.ptm, S = y.ptmo, P = y.cx, b = y.isUnstyled;
  Xt(Jr.css.styles, b, {
    name: "accordion"
  });
  var T = function(D, F) {
    return Vn.getCProp(D, F);
  }, I = function(D, F, ue) {
    var M = {
      // props: atProps, /* @todo */
      parent: C,
      context: {
        index: ue,
        count: g,
        first: ue === 0,
        last: ue === g - 1,
        selected: J(ue),
        disabled: T(D, "disabled")
      }
    };
    return e(w("tab.".concat(F), {
      tab: M
    }), w("accordiontab.".concat(F), {
      accordiontab: M
    }), w("accordiontab.".concat(F), M), S(T(D, "pt"), F, M));
  }, U = function(D, F, ue) {
    $(D, F, ue);
  }, $ = function(D, F, ue) {
    if (!T(F, "disabled")) {
      var M = J(ue), Ie = null;
      if (o.multiple) {
        var Ne = x || [];
        Ie = M ? Ne.filter(function(Ae) {
          return Ae !== ue;
        }) : [].concat($u(Ne), [ue]);
      } else
        Ie = M ? null : ue;
      var je = M ? o.onTabClose : o.onTabOpen;
      je && je({
        originalEvent: D,
        index: ue
      }), o.onTabChange ? o.onTabChange({
        originalEvent: D,
        index: Ie
      }) : m(Ie);
    }
    D.preventDefault();
  }, j = function(D, F, ue) {
    switch (D.code) {
      case "ArrowDown":
        R(D);
        break;
      case "ArrowUp":
        ne(D);
        break;
      case "Home":
        B(D);
        break;
      case "End":
        re(D);
        break;
      case "Enter":
      case "NumpadEnter":
      case "Space":
        ae(D, F, ue);
        break;
    }
  }, R = function(D) {
    var F = he(D.target.parentElement.parentElement);
    F ? _(F) : B(D), D.preventDefault();
  }, ne = function(D) {
    var F = Se(D.target.parentElement.parentElement);
    F ? _(F) : re(D), D.preventDefault();
  }, B = function(D) {
    var F = pe();
    _(F), D.preventDefault();
  }, re = function(D) {
    var F = Z();
    _(F), D.preventDefault();
  }, ae = function(D, F, ue) {
    $(D, F, ue), D.preventDefault();
  }, he = function K(D) {
    var F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, ue = F ? D : D.nextElementSibling, M = A.findSingle(ue, '[data-pc-section="header"]');
    return M ? A.getAttribute(M, "data-p-disabled") ? K(M.parentElement) : A.findSingle(M, '[data-pc-section="headeraction"]') : null;
  }, Se = function K(D) {
    var F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, ue = F ? D : D.previousElementSibling, M = A.findSingle(ue, '[data-pc-section="header"]');
    return M ? A.getAttribute(M, "data-p-disabled") ? K(M.parentElement) : A.findSingle(M, '[data-pc-section="headeraction"]') : null;
  }, pe = function() {
    return he(h.current.firstElementChild, !0);
  }, Z = function() {
    return Se(h.current.lastElementChild, !0);
  }, _ = function(D) {
    D && A.focus(D);
  }, J = function(D) {
    return o.multiple && Array.isArray(x) ? x && x.some(function(F) {
      return F === D;
    }) : x === D;
  };
  if (u.useImperativeHandle(t, function() {
    return {
      props: o,
      getElement: function() {
        return h.current;
      }
    };
  }), Gt(function() {
    l || s(Lo());
  }), !l)
    return null;
  var Q = function(D, F, ue) {
    var M = Fn(Fn({}, T(D, "style") || {}), T(D, "headerStyle") || {}), Ie = l + "_header_" + ue, Ne = l + "_content_" + ue, je = T(D, "disabled") ? -1 : T(D, "tabIndex"), Ae = e({
      className: P("accordiontab.headertitle")
    }, I(D, "headertitle", ue)), We = Vn.getCProps(D), xt = T(D, "headerTemplate") ? L.getJSXElement(T(D, "headerTemplate"), We) : /* @__PURE__ */ u.createElement("span", Ae, L.getJSXElement(T(D, "header"), We)), dt = e({
      "aria-hidden": "true",
      className: P("accordiontab.headericon")
    }, I(D, "headericon", ue)), lt = F ? o.collapseIcon || /* @__PURE__ */ u.createElement(si, dt) : o.expandIcon || /* @__PURE__ */ u.createElement(ci, dt), nt = Nt.getJSXIcon(lt, Fn({}, dt), {
      props: o,
      selected: F
    }), pt = e({
      className: we(T(D, "headerClassName"), T(D, "className"), P("accordiontab.header", {
        selected: F,
        getTabProp: T,
        tab: D
      })),
      style: M,
      "data-p-highlight": F,
      "data-p-disabled": T(D, "disabled")
    }, I(D, "header", ue)), Et = e({
      id: Ie,
      href: "#" + Ne,
      className: P("accordiontab.headeraction"),
      role: "button",
      tabIndex: je,
      onClick: function(Je) {
        return U(Je, D, ue);
      },
      onKeyDown: function(Je) {
        return j(Je, D, ue);
      },
      "aria-disabled": T(D, "disabled"),
      "aria-controls": Ne,
      "aria-expanded": F
    }, I(D, "headeraction", ue));
    return /* @__PURE__ */ u.createElement("div", pt, /* @__PURE__ */ u.createElement("a", Et, nt, xt));
  }, X = function(D, F, ue) {
    var M = Fn(Fn({}, T(D, "style") || {}), T(D, "contentStyle") || {}), Ie = l + "_content_" + ue, Ne = l + "_header_" + ue, je = /* @__PURE__ */ u.createRef(), Ae = e({
      id: Ie,
      ref: je,
      className: we(T(D, "contentClassName"), T(D, "className"), P("accordiontab.toggleablecontent")),
      style: M,
      role: "region",
      "aria-labelledby": Ne
    }, I(D, "toggleablecontent", ue)), We = e({
      className: P("accordiontab.content")
    }, I(D, "content", ue)), xt = e({
      classNames: P("accordiontab.transition"),
      timeout: {
        enter: 1e3,
        exit: 450
      },
      in: F,
      unmountOnExit: !0,
      options: o.transitionOptions
    }, I(D, "transition", ue));
    return /* @__PURE__ */ u.createElement(Mo, Eo({
      nodeRef: je
    }, xt), /* @__PURE__ */ u.createElement("div", Ae, /* @__PURE__ */ u.createElement("div", We, T(D, "children"))));
  }, Y = function(D, F) {
    if (L.isValidChild(D, "AccordionTab")) {
      var ue = l + "_" + F, M = J(F), Ie = Q(D, M, F), Ne = X(D, M, F), je = e({
        key: ue,
        className: P("accordiontab.root", {
          selected: M
        })
      }, Vn.getCOtherProps(D), I(D, "root", F));
      return /* @__PURE__ */ u.createElement("div", je, Ie, Ne);
    }
    return null;
  }, fe = function() {
    return u.Children.map(o.children, Y);
  }, ve = fe(), ce = e({
    className: we(o.className, P("root")),
    style: o.style
  }, Jr.getOtherProps(o), w("root"));
  return /* @__PURE__ */ u.createElement("div", Eo({
    id: l,
    ref: h
  }, ce), ve);
});
pn.displayName = "AccordionTab";
Sn.displayName = "Accordion";
function _a() {
  return _a = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, _a.apply(this, arguments);
}
function qr(n) {
  "@babel/helpers - typeof";
  return qr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qr(n);
}
function Uu(n, t) {
  if (qr(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var r = e.call(n, t || "default");
    if (qr(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function Yu(n) {
  var t = Uu(n, "string");
  return qr(t) === "symbol" ? t : String(t);
}
function Gu(n, t, e) {
  return t = Yu(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function Xu(n) {
  if (Array.isArray(n)) return n;
}
function Ju(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var r, o, a, i, l = [], s = !0, c = !1;
    try {
      if (a = (e = e.call(n)).next, t !== 0) for (; !(s = (r = a.call(e)).done) && (l.push(r.value), l.length !== t); s = !0) ;
    } catch (d) {
      c = !0, o = d;
    } finally {
      try {
        if (!s && e.return != null && (i = e.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw o;
      }
    }
    return l;
  }
}
function Yi(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, r = new Array(t); e < t; e++) r[e] = n[e];
  return r;
}
function Zu(n, t) {
  if (n) {
    if (typeof n == "string") return Yi(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Yi(n, t);
  }
}
function Qu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ed(n, t) {
  return Xu(n) || Ju(n, t) || Zu(n, t) || Qu();
}
var td = {
  root: function(t) {
    var e = t.props;
    return we("", e.className);
  },
  toolbar: "",
  content: ""
}, nd = `
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
`, Zr = Le.extend({
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
    classes: td,
    styles: nd
  }
});
function Gi(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function Xi(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gi(Object(e), !0).forEach(function(r) {
      Gu(n, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Gi(Object(e)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return n;
}
var rd = function() {
  try {
    return Quill;
  } catch {
    return null;
  }
}(), ts = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Ft(), r = u.useContext(yt), o = Zr.getProps(n, r), a = Zr.setMetaData({
    props: o
  }), i = a.ptm, l = a.cx, s = a.isUnstyled;
  Xt(Zr.css.styles, s, {
    name: "editor"
  });
  var c = u.useRef(null), d = u.useRef(null), f = u.useRef(null), m = u.useRef(null), h = u.useRef(!1), x = u.useState(!1), g = ed(x, 2), C = g[0], y = g[1];
  Gt(function() {
    if (!h.current) {
      var R = {
        modules: Xi({
          toolbar: o.showHeader ? f.current : !1
        }, o.modules),
        placeholder: o.placeholder,
        readOnly: o.readOnly,
        theme: o.theme,
        formats: o.formats
      };
      rd ? b(new Quill(d.current, R)) : import("quill").then(function(ne) {
        if (ne && A.isExist(d.current)) {
          var B;
          ne.default ? B = new ne.default(d.current, R) : B = new ne(d.current, R), b(B);
        }
      }), h.current = !0;
    }
  });
  var w = function(ne, B, re) {
    var ae = d.current.children[0], he = ae ? ae.innerHTML : null, Se = m.current.getText();
    if (he === "<p><br></p>" && (he = null), re === "api") {
      var pe = d.current.children[0], Z = document.createElement("div");
      if (Z.innerHTML = o.value || "", A.isEqualElement(pe, Z))
        return;
    }
    if (o.maxLength) {
      var _ = m.current.getLength();
      _ > o.maxLength && m.current.deleteText(o.maxLength, _);
    }
    o.onTextChange && o.onTextChange({
      htmlValue: he,
      textValue: Se,
      delta: ne,
      source: re
    });
  }, S = function(ne, B, re) {
    o.onSelectionChange && o.onSelectionChange({
      range: ne,
      oldRange: B,
      source: re
    });
  }, P = Xe(o.value);
  P.current = o.value;
  var b = function(ne) {
    m.current = ne, P.current && ne.setContents(ne.clipboard.convert({
      html: P.current,
      text: ""
    })), y(!0);
  };
  tt(function() {
    if (C)
      return m.current.on("text-change", w), m.current.on("selection-change", S), function() {
        m.current.off("text-change", w), m.current.off("selection-change", S);
      };
  }), tt(function() {
    C && m.current && m.current.getModule("toolbar") && o.onLoad && o.onLoad(m.current);
  }, [C]), tt(function() {
    m.current && !m.current.hasFocus() && (o.value ? m.current.setContents(m.current.clipboard.convert({
      html: o.value,
      text: ""
    })) : m.current.setText(""));
  }, [o.value]), u.useImperativeHandle(t, function() {
    return {
      props: o,
      getQuill: function() {
        return m.current;
      },
      getElement: function() {
        return c.current;
      },
      getContent: function() {
        return d.current;
      },
      getToolbar: function() {
        return f.current;
      }
    };
  });
  var T = function() {
    var ne = e({
      ref: f,
      className: l("toolbar")
    }, i("toolbar"));
    if (o.showHeader === !1)
      return null;
    if (o.headerTemplate)
      return /* @__PURE__ */ u.createElement("div", ne, o.headerTemplate);
    var B = function(he, Se) {
      return e(he && Xi({}, he), i(Se));
    }, re = e({
      className: "ql-formats"
    }, i("formats"));
    return /* @__PURE__ */ u.createElement("div", ne, /* @__PURE__ */ u.createElement("span", re, /* @__PURE__ */ u.createElement("select", B({
      className: "ql-header",
      defaultValue: "0"
    }, "header"), /* @__PURE__ */ u.createElement("option", B({
      value: "1"
    }, "option"), "Heading"), /* @__PURE__ */ u.createElement("option", B({
      value: "2"
    }, "option"), "Subheading"), /* @__PURE__ */ u.createElement("option", B({
      value: "0"
    }, "option"), "Normal")), /* @__PURE__ */ u.createElement("select", B({
      className: "ql-font"
    }, "font"), /* @__PURE__ */ u.createElement("option", B(void 0, "option")), /* @__PURE__ */ u.createElement("option", B({
      value: "serif"
    }, "option")), /* @__PURE__ */ u.createElement("option", B({
      value: "monospace"
    }, "option")))), /* @__PURE__ */ u.createElement("span", re, /* @__PURE__ */ u.createElement("button", B({
      type: "button",
      className: "ql-bold",
      "aria-label": "Bold"
    }, "bold")), /* @__PURE__ */ u.createElement("button", B({
      type: "button",
      className: "ql-italic",
      "aria-label": "Italic"
    }, "italic")), /* @__PURE__ */ u.createElement("button", B({
      type: "button",
      className: "ql-underline",
      "aria-label": "Underline"
    }, "underline"))), /* @__PURE__ */ u.createElement("span", re, /* @__PURE__ */ u.createElement("select", B({
      className: "ql-color"
    }, "color")), /* @__PURE__ */ u.createElement("select", B({
      className: "ql-background"
    }, "background"))), /* @__PURE__ */ u.createElement("span", re, /* @__PURE__ */ u.createElement("button", B({
      type: "button",
      className: "ql-list",
      value: "ordered",
      "aria-label": "Ordered List"
    }, "list")), /* @__PURE__ */ u.createElement("button", B({
      type: "button",
      className: "ql-list",
      value: "bullet",
      "aria-label": "Unordered List"
    }, "list")), /* @__PURE__ */ u.createElement("select", B({
      className: "ql-align"
    }, "select"), /* @__PURE__ */ u.createElement("option", B({
      defaultValue: !0
    }, "option")), /* @__PURE__ */ u.createElement("option", B({
      value: "center"
    }, "option")), /* @__PURE__ */ u.createElement("option", B({
      value: "right"
    }, "option")), /* @__PURE__ */ u.createElement("option", B({
      value: "justify"
    }, "option")))), /* @__PURE__ */ u.createElement("span", re, /* @__PURE__ */ u.createElement("button", B({
      type: "button",
      className: "ql-link",
      "aria-label": "Insert Link"
    }, "link")), /* @__PURE__ */ u.createElement("button", B({
      type: "button",
      className: "ql-image",
      "aria-label": "Insert Image"
    }, "image")), /* @__PURE__ */ u.createElement("button", B({
      type: "button",
      className: "ql-code-block",
      "aria-label": "Insert Code Block"
    }, "codeBlock"))), /* @__PURE__ */ u.createElement("span", re, /* @__PURE__ */ u.createElement("button", B({
      type: "button",
      className: "ql-clean",
      "aria-label": "Remove Styles"
    }, "clean"))));
  }, I = T(), U = e({
    ref: d,
    className: l("content"),
    style: o.style
  }, i("content")), $ = /* @__PURE__ */ u.createElement("div", U), j = e({
    className: we(o.className, l("root"))
  }, Zr.getOtherProps(o), i("root"));
  return /* @__PURE__ */ u.createElement("div", _a({
    id: o.id,
    ref: c
  }, j), I, $);
}));
ts.displayName = "Editor";
function Ra(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, r = new Array(t); e < t; e++) r[e] = n[e];
  return r;
}
function od(n) {
  if (Array.isArray(n)) return Ra(n);
}
function ad(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function id(n, t) {
  if (n) {
    if (typeof n == "string") return Ra(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Ra(n, t);
  }
}
function ld() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sd(n) {
  return od(n) || ad(n) || id(n) || ld();
}
var Bn = {
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
    return Bn.DEFAULT_MASKS[t] ? Bn.DEFAULT_MASKS[t] : t;
  },
  onBeforeInput: function(t, e, r) {
    r || !A.isAndroid() || this.validateKey(t, t.data, e);
  },
  onKeyPress: function(t, e, r) {
    r || A.isAndroid() || t.ctrlKey || t.altKey || t.metaKey || this.validateKey(t, t.key, e);
  },
  onPaste: function(t, e, r) {
    if (!r) {
      var o = this.getRegex(e), a = t.clipboardData.getData("text");
      sd(a).forEach(function(i) {
        if (!o.test(i))
          return t.preventDefault(), !1;
      });
    }
  },
  validateKey: function(t, e, r) {
    if (e != null) {
      var o = e.length <= 2;
      if (o) {
        var a = this.getRegex(r);
        a.test(e) || t.preventDefault();
      }
    }
  },
  validate: function(t, e) {
    var r = t.target.value, o = !0, a = this.getRegex(e);
    return r && !a.test(r) && (o = !1), o;
  }
};
function cd(n) {
  if (Array.isArray(n)) return n;
}
function ud(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var r, o, a, i, l = [], s = !0, c = !1;
    try {
      if (a = (e = e.call(n)).next, t !== 0) for (; !(s = (r = a.call(e)).done) && (l.push(r.value), l.length !== t); s = !0) ;
    } catch (d) {
      c = !0, o = d;
    } finally {
      try {
        if (!s && e.return != null && (i = e.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw o;
      }
    }
    return l;
  }
}
function Ji(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, r = new Array(t); e < t; e++) r[e] = n[e];
  return r;
}
function dd(n, t) {
  if (n) {
    if (typeof n == "string") return Ji(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Ji(n, t);
  }
}
function fd() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pd(n, t) {
  return cd(n) || ud(n, t) || dd(n, t) || fd();
}
var ka = {
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
    return L.getMergedProps(t, ka.defaultProps);
  },
  getOtherProps: function(t) {
    return L.getDiffProps(t, ka.defaultProps);
  }
}, Hr = /* @__PURE__ */ u.memo(function(n) {
  var t = ka.getProps(n), e = u.useContext(yt), r = u.useState(t.visible && A.isClient()), o = pd(r, 2), a = o[0], i = o[1];
  Gt(function() {
    A.isClient() && !a && (i(!0), t.onMounted && t.onMounted());
  }), tt(function() {
    t.onMounted && t.onMounted();
  }, [a]), an(function() {
    t.onUnmounted && t.onUnmounted();
  });
  var l = t.element || t.children;
  if (l && a) {
    var s = t.appendTo || e && e.appendTo || bt.appendTo;
    return L.isFunction(s) && (s = s()), s || (s = document.body), s === "self" ? l : /* @__PURE__ */ vr.createPortal(l, s);
  }
  return null;
});
Hr.displayName = "Portal";
function So() {
  return So = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, So.apply(this, arguments);
}
function Tr(n) {
  "@babel/helpers - typeof";
  return Tr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Tr(n);
}
function vd(n, t) {
  if (Tr(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var r = e.call(n, t || "default");
    if (Tr(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function md(n) {
  var t = vd(n, "string");
  return Tr(t) === "symbol" ? t : String(t);
}
function ns(n, t, e) {
  return t = md(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function Da(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, r = new Array(t); e < t; e++) r[e] = n[e];
  return r;
}
function gd(n) {
  if (Array.isArray(n)) return Da(n);
}
function hd(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function rs(n, t) {
  if (n) {
    if (typeof n == "string") return Da(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Da(n, t);
  }
}
function bd() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yd(n) {
  return gd(n) || hd(n) || rs(n) || bd();
}
function wd(n) {
  if (Array.isArray(n)) return n;
}
function xd(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var r, o, a, i, l = [], s = !0, c = !1;
    try {
      if (a = (e = e.call(n)).next, t !== 0) for (; !(s = (r = a.call(e)).done) && (l.push(r.value), l.length !== t); s = !0) ;
    } catch (d) {
      c = !0, o = d;
    } finally {
      try {
        if (!s && e.return != null && (i = e.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw o;
      }
    }
    return l;
  }
}
function Ed() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ur(n, t) {
  return wd(n) || xd(n, t) || rs(n, t) || Ed();
}
var Sd = {
  root: function(t) {
    var e = t.positionState, r = t.classNameState;
    return we("p-tooltip p-component", ns({}, "p-tooltip-".concat(e), !0), r);
  },
  arrow: "p-tooltip-arrow",
  text: "p-tooltip-text"
}, Cd = {
  arrow: function(t) {
    var e = t.context;
    return {
      top: e.bottom ? "0" : e.right || e.left || !e.right && !e.left && !e.top && !e.bottom ? "50%" : null,
      bottom: e.top ? "0" : null,
      left: e.right || !e.right && !e.left && !e.top && !e.bottom ? "0" : e.top || e.bottom ? "50%" : null,
      right: e.left ? "0" : null
    };
  }
}, Od = `
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
`, Qr = Le.extend({
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
    classes: Sd,
    styles: Od,
    inlineStyles: Cd
  }
});
function Zi(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function Pd(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zi(Object(e), !0).forEach(function(r) {
      ns(n, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Zi(Object(e)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return n;
}
var Br = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Ft(), r = u.useContext(yt), o = Qr.getProps(n, r), a = u.useState(!1), i = ur(a, 2), l = i[0], s = i[1], c = u.useState(o.position || "right"), d = ur(c, 2), f = d[0], m = d[1], h = u.useState(""), x = ur(h, 2), g = x[0], C = x[1], y = {
    props: o,
    state: {
      visible: l,
      position: f,
      className: g
    },
    context: {
      right: f === "right",
      left: f === "left",
      top: f === "top",
      bottom: f === "bottom"
    }
  }, w = Qr.setMetaData(y), S = w.ptm, P = w.cx, b = w.sx, T = w.isUnstyled;
  Xt(Qr.css.styles, T, {
    name: "tooltip"
  }), Wl({
    callback: function() {
      Ae();
    },
    when: o.closeOnEscape,
    priority: [Hl.TOOLTIP, 0]
  });
  var I = u.useRef(null), U = u.useRef(null), $ = u.useRef(null), j = u.useRef(null), R = u.useRef(!0), ne = u.useRef({}), B = u.useRef(null), re = ai({
    listener: function(z) {
      !A.isTouchDevice() && Ae(z);
    }
  }), ae = ur(re, 2), he = ae[0], Se = ae[1], pe = Vl({
    target: $.current,
    listener: function(z) {
      Ae(z);
    },
    when: l
  }), Z = ur(pe, 2), _ = Z[0], J = Z[1], Q = function(z) {
    return !(o.content || K(z, "tooltip"));
  }, X = function(z) {
    return !(o.content || K(z, "tooltip") || o.children);
  }, Y = function(z) {
    return K(z, "mousetrack") || o.mouseTrack;
  }, fe = function(z) {
    return K(z, "disabled") === "true" || D(z, "disabled") || o.disabled;
  }, ve = function(z) {
    return K(z, "showondisabled") || o.showOnDisabled;
  }, ce = function() {
    return K($.current, "autohide") || o.autoHide;
  }, K = function(z, ge) {
    return D(z, "data-pr-".concat(ge)) ? z.getAttribute("data-pr-".concat(ge)) : null;
  }, D = function(z, ge) {
    return z && z.hasAttribute(ge);
  }, F = function(z) {
    var ge = [K(z, "showevent") || o.showEvent], _e = [K(z, "hideevent") || o.hideEvent];
    if (Y(z))
      ge = ["mousemove"], _e = ["mouseleave"];
    else {
      var Pe = K(z, "event") || o.event;
      Pe === "focus" && (ge = ["focus"], _e = ["blur"]), Pe === "both" && (ge = ["focus", "mouseenter"], _e = ["blur", "mouseleave"]);
    }
    return {
      showEvents: ge,
      hideEvents: _e
    };
  }, ue = function(z) {
    return K(z, "position") || f;
  }, M = function(z) {
    var ge = K(z, "mousetracktop") || o.mouseTrackTop, _e = K(z, "mousetrackleft") || o.mouseTrackLeft;
    return {
      top: ge,
      left: _e
    };
  }, Ie = function(z, ge) {
    if (U.current) {
      var _e = K(z, "tooltip") || o.content;
      _e ? (U.current.innerHTML = "", U.current.appendChild(document.createTextNode(_e)), ge()) : o.children && ge();
    }
  }, Ne = function(z) {
    Ie($.current, function() {
      var ge = B.current, _e = ge.pageX, Pe = ge.pageY;
      o.autoZIndex && !Qt.get(I.current) && Qt.set("tooltip", I.current, r && r.autoZIndex || bt.autoZIndex, o.baseZIndex || r && r.zIndex.tooltip || bt.zIndex.tooltip), I.current.style.left = "", I.current.style.top = "", ce() && (I.current.style.pointerEvents = "none");
      var qe = Y($.current) || z === "mouse";
      (qe && !j.current || qe) && (j.current = {
        width: A.getOuterWidth(I.current),
        height: A.getOuterHeight(I.current)
      }), We($.current, {
        x: _e,
        y: Pe
      }, z);
    });
  }, je = function(z) {
    $.current = z.currentTarget;
    var ge = fe($.current), _e = X(ve($.current) && ge ? $.current.firstChild : $.current);
    if (!(_e || ge))
      if (B.current = z, l)
        Et("updateDelay", Ne);
      else {
        var Pe = rt(o.onBeforeShow, {
          originalEvent: z,
          target: $.current
        });
        Pe && Et("showDelay", function() {
          s(!0), rt(o.onShow, {
            originalEvent: z,
            target: $.current
          });
        });
      }
  }, Ae = function(z) {
    if (Je(), l) {
      var ge = rt(o.onBeforeHide, {
        originalEvent: z,
        target: $.current
      });
      ge && Et("hideDelay", function() {
        !ce() && R.current === !1 || (Qt.clear(I.current), A.removeClass(I.current, "p-tooltip-active"), s(!1), rt(o.onHide, {
          originalEvent: z,
          target: $.current
        }));
      });
    }
  }, We = function(z, ge, _e) {
    var Pe = 0, qe = 0, Ve = _e || f;
    if ((Y(z) || Ve == "mouse") && ge) {
      var ut = {
        width: A.getOuterWidth(I.current),
        height: A.getOuterHeight(I.current)
      };
      Pe = ge.x, qe = ge.y;
      var Fe = M(z), Me = Fe.top, He = Fe.left;
      switch (Ve) {
        case "left":
          Pe = Pe - (ut.width + He), qe = qe - (ut.height / 2 - Me);
          break;
        case "right":
        case "mouse":
          Pe = Pe + He, qe = qe - (ut.height / 2 - Me);
          break;
        case "top":
          Pe = Pe - (ut.width / 2 - He), qe = qe - (ut.height + Me);
          break;
        case "bottom":
          Pe = Pe - (ut.width / 2 - He), qe = qe + Me;
          break;
      }
      Pe <= 0 || j.current.width > ut.width ? (I.current.style.left = "0px", I.current.style.right = window.innerWidth - ut.width - Pe + "px") : (I.current.style.right = "", I.current.style.left = Pe + "px"), I.current.style.top = qe + "px", A.addClass(I.current, "p-tooltip-active");
    } else {
      var at = A.findCollisionPosition(Ve), it = K(z, "my") || o.my || at.my, be = K(z, "at") || o.at || at.at;
      I.current.style.padding = "0px", A.flipfitCollision(I.current, z, it, be, function(N) {
        var G = N.at, ee = G.x, ye = G.y, Be = N.my.x, Qe = o.at ? ee !== "center" && ee !== Be ? ee : ye : N.at["".concat(at.axis)];
        I.current.style.padding = "", m(Qe), xt(Qe), A.addClass(I.current, "p-tooltip-active");
      });
    }
  }, xt = function(z) {
    if (I.current) {
      var ge = getComputedStyle(I.current);
      z === "left" ? I.current.style.left = parseFloat(ge.left) - parseFloat(ge.paddingLeft) * 2 + "px" : z === "top" && (I.current.style.top = parseFloat(ge.top) - parseFloat(ge.paddingTop) * 2 + "px");
    }
  }, dt = function() {
    ce() || (R.current = !1);
  }, lt = function(z) {
    ce() || (R.current = !0, Ae(z));
  }, nt = function(z) {
    if (z) {
      var ge = F(z), _e = ge.showEvents, Pe = ge.hideEvents, qe = Mt(z);
      _e.forEach(function(Ve) {
        return qe == null ? void 0 : qe.addEventListener(Ve, je);
      }), Pe.forEach(function(Ve) {
        return qe == null ? void 0 : qe.addEventListener(Ve, Ae);
      });
    }
  }, pt = function(z) {
    if (z) {
      var ge = F(z), _e = ge.showEvents, Pe = ge.hideEvents, qe = Mt(z);
      _e.forEach(function(Ve) {
        return qe == null ? void 0 : qe.removeEventListener(Ve, je);
      }), Pe.forEach(function(Ve) {
        return qe == null ? void 0 : qe.removeEventListener(Ve, Ae);
      });
    }
  }, Et = function(z, ge) {
    Je();
    var _e = K($.current, z.toLowerCase()) || o[z];
    _e ? ne.current["".concat(z)] = setTimeout(function() {
      return ge();
    }, _e) : ge();
  }, rt = function(z) {
    if (z) {
      for (var ge = arguments.length, _e = new Array(ge > 1 ? ge - 1 : 0), Pe = 1; Pe < ge; Pe++)
        _e[Pe - 1] = arguments[Pe];
      var qe = z.apply(void 0, _e);
      return qe === void 0 && (qe = !0), qe;
    }
    return !0;
  }, Je = function() {
    Object.values(ne.current).forEach(function(z) {
      return clearTimeout(z);
    });
  }, Mt = function(z) {
    if (z) {
      if (ve(z)) {
        if (!z.hasWrapper) {
          var ge = document.createElement("div"), _e = z.nodeName === "INPUT";
          return _e ? A.addMultipleClasses(ge, "p-tooltip-target-wrapper p-inputwrapper") : A.addClass(ge, "p-tooltip-target-wrapper"), z.parentNode.insertBefore(ge, z), ge.appendChild(z), z.hasWrapper = !0, ge;
        }
        return z.parentElement;
      } else if (z.hasWrapper) {
        var Pe;
        (Pe = z.parentElement).replaceWith.apply(Pe, yd(z.parentElement.childNodes)), delete z.hasWrapper;
      }
      return z;
    }
    return null;
  }, Ge = function(z) {
    ct(z), ot(z);
  }, ot = function(z) {
    kt(z || o.target, nt);
  }, ct = function(z) {
    kt(z || o.target, pt);
  }, kt = function(z, ge) {
    if (z = L.getRefElement(z), z)
      if (A.isElement(z))
        ge(z);
      else {
        var _e = function(qe) {
          var Ve = A.find(document, qe);
          Ve.forEach(function(ut) {
            ge(ut);
          });
        };
        z instanceof Array ? z.forEach(function(Pe) {
          _e(Pe);
        }) : _e(z);
      }
  };
  Gt(function() {
    l && $.current && fe($.current) && Ae();
  }), tt(function() {
    return ot(), function() {
      ct();
    };
  }, [je, Ae, o.target]), tt(function() {
    if (l) {
      var Ce = ue($.current), z = K($.current, "classname");
      m(Ce), C(z), Ne(Ce), he(), _();
    } else
      m(o.position || "right"), C(""), $.current = null, j.current = null, R.current = !0;
    return function() {
      Se(), J();
    };
  }, [l]), tt(function() {
    var Ce = ue($.current);
    l && Ce !== "mouse" && Et("updateDelay", function() {
      Ie($.current, function() {
        We($.current);
      });
    });
  }, [o.content]), an(function() {
    Ae(), Qt.clear(I.current);
  }), u.useImperativeHandle(t, function() {
    return {
      props: o,
      updateTargetEvents: Ge,
      loadTargetEvents: ot,
      unloadTargetEvents: ct,
      show: je,
      hide: Ae,
      getElement: function() {
        return I.current;
      },
      getTarget: function() {
        return $.current;
      }
    };
  });
  var ft = function() {
    var z = Q($.current), ge = e({
      id: o.id,
      className: we(o.className, P("root", {
        positionState: f,
        classNameState: g
      })),
      style: o.style,
      role: "tooltip",
      "aria-hidden": l,
      onMouseEnter: function(Ve) {
        return dt();
      },
      onMouseLeave: function(Ve) {
        return lt(Ve);
      }
    }, Qr.getOtherProps(o), S("root")), _e = e({
      className: P("arrow"),
      style: b("arrow", Pd({}, y))
    }, S("arrow")), Pe = e({
      className: P("text")
    }, S("text"));
    return /* @__PURE__ */ u.createElement("div", So({
      ref: I
    }, ge), /* @__PURE__ */ u.createElement("div", _e), /* @__PURE__ */ u.createElement("div", So({
      ref: U
    }, Pe), z && o.children));
  };
  if (l) {
    var vt = ft();
    return /* @__PURE__ */ u.createElement(Hr, {
      element: vt,
      appendTo: o.appendTo,
      visible: !0
    });
  }
  return null;
}));
Br.displayName = "Tooltip";
function Co() {
  return Co = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, Co.apply(this, arguments);
}
function Ir(n) {
  "@babel/helpers - typeof";
  return Ir = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ir(n);
}
function qd(n, t) {
  if (Ir(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var r = e.call(n, t || "default");
    if (Ir(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function Td(n) {
  var t = qd(n, "string");
  return Ir(t) === "symbol" ? t : String(t);
}
function Id(n, t, e) {
  return t = Td(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
var _d = {
  root: function(t) {
    var e = t.props, r = t.isFilled, o = t.context;
    return we("p-inputtext p-component", {
      "p-disabled": e.disabled,
      "p-filled": r,
      "p-invalid": e.invalid,
      "p-variant-filled": e.variant ? e.variant === "filled" : o && o.inputStyle === "filled"
    });
  }
}, eo = Le.extend({
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
    classes: _d
  }
});
function Qi(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function el(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qi(Object(e), !0).forEach(function(r) {
      Id(n, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Qi(Object(e)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return n;
}
var $t = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Ft(), r = u.useContext(yt), o = eo.getProps(n, r), a = eo.setMetaData(el(el({
    props: o
  }, o.__parentMetadata), {}, {
    context: {
      disabled: o.disabled,
      iconPosition: o.iconPosition
    }
  })), i = a.ptm, l = a.cx, s = a.isUnstyled;
  Xt(eo.css.styles, s, {
    name: "inputtext",
    styled: !0
  });
  var c = u.useRef(t), d = function(w) {
    o.onKeyDown && o.onKeyDown(w), o.keyfilter && Bn.onKeyPress(w, o.keyfilter, o.validateOnly);
  }, f = function(w) {
    o.onBeforeInput && o.onBeforeInput(w), o.keyfilter && Bn.onBeforeInput(w, o.keyfilter, o.validateOnly);
  }, m = function(w) {
    var S = w.target, P = !0;
    o.keyfilter && o.validateOnly && (P = Bn.validate(w, o.keyfilter)), o.onInput && o.onInput(w, P), L.isNotEmpty(S.value) ? A.addClass(S, "p-filled") : A.removeClass(S, "p-filled");
  }, h = function(w) {
    o.onPaste && o.onPaste(w), o.keyfilter && Bn.onPaste(w, o.keyfilter, o.validateOnly);
  };
  u.useEffect(function() {
    L.combinedRefs(c, t);
  }, [c, t]);
  var x = u.useMemo(function() {
    return L.isNotEmpty(o.value) || L.isNotEmpty(o.defaultValue);
  }, [o.value, o.defaultValue]), g = L.isNotEmpty(o.tooltip), C = e({
    className: we(o.className, l("root", {
      context: r,
      isFilled: x
    })),
    onBeforeInput: f,
    onInput: m,
    onKeyDown: d,
    onPaste: h
  }, eo.getOtherProps(o), i("root"));
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement("input", Co({
    ref: c
  }, C)), g && /* @__PURE__ */ u.createElement(Br, Co({
    target: c,
    content: o.tooltip,
    pt: i("tooltip")
  }, o.tooltipOptions)));
}));
$t.displayName = "InputText";
const Rd = ({ item: n, onChange: t, config: e }) => {
  const [r, o] = $e({ ...Gn, ...n }), a = (l) => {
    const s = { ...r, [l.target.name]: l.target.value };
    o(s), t(s);
  }, i = (l) => {
    const s = { ...r, value: l };
    o(s), t(s);
  };
  return Re(() => {
    o({ ...Gn, ...n });
  }, [n]), /* @__PURE__ */ O.jsx(O.Fragment, { children: /* @__PURE__ */ O.jsx(Sn, { activeIndex: 0, children: /* @__PURE__ */ O.jsx(pn, { header: "General", children: /* @__PURE__ */ O.jsxs("div", { className: "form-item flex flex-column gap-4", children: [
    /* @__PURE__ */ O.jsxs("div", { className: "flex flex-column gap-2", children: [
      /* @__PURE__ */ O.jsx("label", { htmlFor: "label", children: "Label" }),
      /* @__PURE__ */ O.jsx(
        $t,
        {
          id: "label",
          value: r.label || "",
          name: "label",
          onChange: a,
          className: "w-full"
        }
      )
    ] }),
    /* @__PURE__ */ O.jsx(
      ts,
      {
        value: r.value,
        name: "value",
        onTextChange: (l) => i(l.htmlValue ?? ""),
        style: { minHeight: "300px" }
      }
    )
  ] }) }, "general") }) });
}, kd = (n) => ({}), Dd = new zr({
  type: Gn.type,
  form: new rn({
    render: qc,
    validation: Tc
  }),
  settings: new rn({
    render: Rd,
    validation: kd
  }),
  heading: "HTML Content",
  description: "WYSIWYG editor for adding in content to the form",
  hidden: !1,
  icon: Ic,
  data: Gn
}), os = new Ao(new jo({ label: "Content" }));
os.registerItem(Dd);
const _n = {
  id: jn(),
  type: "input-number",
  label: "",
  value: "",
  placeholder: ""
}, jd = ({ item: n, onChange: t, config: e }) => {
  const [r, o] = $e({ ..._n, ...n });
  Re(() => {
    o({ ..._n, ...n });
  }, [n]);
  const a = (l) => {
    const s = { ..._n, ...n, value: l.target.value };
    t(s);
  }, i = Math.random().toString(36).substring(2, 15);
  return /* @__PURE__ */ O.jsx(O.Fragment, { children: /* @__PURE__ */ O.jsxs("div", { className: "flex flex-column gap-2", children: [
    /* @__PURE__ */ O.jsx("label", { htmlFor: i, children: r.label }),
    /* @__PURE__ */ O.jsx(
      $t,
      {
        type: "number",
        value: r.value,
        onChange: a,
        placeholder: r.placeholder || "",
        className: "w-full",
        id: i
      }
    )
  ] }) });
}, Ad = (n) => ({});
var tl;
function ja() {
  return ja = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var r in e) ({}).hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, ja.apply(null, arguments);
}
var Nd = function(t) {
  return /* @__PURE__ */ u.createElement("svg", ja({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 320 512"
  }, t), tl || (tl = /* @__PURE__ */ u.createElement("path", {
    d: "M0 64c0-17.7 14.3-32 32-32h256c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-224 384c-8.9 15.3-28.5 20.4-43.8 11.5s-20.4-28.5-11.5-43.8L232.3 96H32C14.3 96 0 81.7 0 64"
  })));
};
const Ld = ({ item: n, onChange: t, config: e }) => {
  const [r, o] = $e({ ..._n, ...n }), a = (i) => {
    const l = { ...r, [i.target.name]: i.target.value };
    o(l), t(l);
  };
  return Re(() => {
    o({ ..._n, ...n });
  }, [n]), /* @__PURE__ */ O.jsx(O.Fragment, { children: /* @__PURE__ */ O.jsxs(Sn, { activeIndex: 0, children: [
    " ",
    /* @__PURE__ */ O.jsx(pn, { header: "General", children: /* @__PURE__ */ O.jsxs("div", { className: "form-item flex flex-column gap-4", children: [
      /* @__PURE__ */ O.jsxs("div", { className: "flex flex-column gap-2", children: [
        /* @__PURE__ */ O.jsx("label", { htmlFor: "label", children: "Label" }),
        /* @__PURE__ */ O.jsx(
          $t,
          {
            id: "label",
            value: r.label || "",
            name: "label",
            onChange: a,
            className: "w-full"
          }
        )
      ] }),
      /* @__PURE__ */ O.jsxs("div", { className: "flex flex-column gap-2", children: [
        /* @__PURE__ */ O.jsx("label", { htmlFor: "placeholder", children: "Placeholder" }),
        /* @__PURE__ */ O.jsx(
          $t,
          {
            id: "placeholder",
            value: r.placeholder || "",
            name: "placeholder",
            onChange: a,
            className: "w-full"
          }
        )
      ] })
    ] }) }, "general"),
    " "
  ] }) });
}, $d = (n) => ({}), Fd = new zr({
  type: _n.type,
  form: new rn({
    render: jd,
    validation: Ad
  }),
  settings: new rn({
    render: Ld,
    validation: $d
  }),
  heading: "Number input",
  description: "a simple box to insert a number value into",
  hidden: !1,
  icon: Nd,
  data: _n
}), xn = {
  id: jn(),
  type: "select-select",
  label: "",
  value: "",
  source: "local",
  options: [],
  placeholder: ""
};
function Aa() {
  return Aa = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, Aa.apply(this, arguments);
}
var as = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Vt.getPTI(n);
  return /* @__PURE__ */ u.createElement("svg", Aa({
    ref: t,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e), /* @__PURE__ */ u.createElement("path", {
    d: "M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z",
    fill: "currentColor"
  }));
}));
as.displayName = "ChevronUpIcon";
function Na() {
  return Na = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, Na.apply(this, arguments);
}
var zo = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Vt.getPTI(n);
  return /* @__PURE__ */ u.createElement("svg", Na({
    ref: t,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e), /* @__PURE__ */ u.createElement("path", {
    d: "M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",
    fill: "currentColor"
  }));
}));
zo.displayName = "SpinnerIcon";
function La() {
  return La = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, La.apply(this, arguments);
}
var Wr = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Vt.getPTI(n);
  return /* @__PURE__ */ u.createElement("svg", La({
    ref: t,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e), /* @__PURE__ */ u.createElement("path", {
    d: "M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",
    fill: "currentColor"
  }));
}));
Wr.displayName = "TimesIcon";
var Rn = Fc();
function $a() {
  return $a = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, $a.apply(this, arguments);
}
var is = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Vt.getPTI(n);
  return /* @__PURE__ */ u.createElement("svg", $a({
    ref: t,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e), /* @__PURE__ */ u.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z",
    fill: "currentColor"
  }));
}));
is.displayName = "SearchIcon";
function Fa() {
  return Fa = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, Fa.apply(this, arguments);
}
function _r(n) {
  "@babel/helpers - typeof";
  return _r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _r(n);
}
function Md(n, t) {
  if (_r(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var r = e.call(n, t || "default");
    if (_r(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function zd(n) {
  var t = Md(n, "string");
  return _r(t) === "symbol" ? t : String(t);
}
function ls(n, t, e) {
  return t = zd(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function Hd(n) {
  if (Array.isArray(n)) return n;
}
function Bd(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var r, o, a, i, l = [], s = !0, c = !1;
    try {
      if (a = (e = e.call(n)).next, t === 0) {
        if (Object(e) !== e) return;
        s = !1;
      } else for (; !(s = (r = a.call(e)).done) && (l.push(r.value), l.length !== t); s = !0) ;
    } catch (d) {
      c = !0, o = d;
    } finally {
      try {
        if (!s && e.return != null && (i = e.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw o;
      }
    }
    return l;
  }
}
function nl(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, r = new Array(t); e < t; e++) r[e] = n[e];
  return r;
}
function Wd(n, t) {
  if (n) {
    if (typeof n == "string") return nl(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return nl(n, t);
  }
}
function Vd() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cn(n, t) {
  return Hd(n) || Bd(n, t) || Wd(n, t) || Vd();
}
var Kd = `
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
`, to = Le.extend({
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
    styles: Kd
  }
});
function rl(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function Mn(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rl(Object(e), !0).forEach(function(r) {
      ls(n, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : rl(Object(e)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return n;
}
var ss = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Ft(), r = u.useContext(yt), o = to.getProps(n, r), a = Sr(n) || {}, i = o.orientation === "vertical", l = o.orientation === "horizontal", s = o.orientation === "both", c = u.useState(s ? {
    rows: 0,
    cols: 0
  } : 0), d = cn(c, 2), f = d[0], m = d[1], h = u.useState(s ? {
    rows: 0,
    cols: 0
  } : 0), x = cn(h, 2), g = x[0], C = x[1], y = u.useState(0), w = cn(y, 2), S = w[0], P = w[1], b = u.useState(s ? {
    rows: 0,
    cols: 0
  } : 0), T = cn(b, 2), I = T[0], U = T[1], $ = u.useState(o.numToleratedItems), j = cn($, 2), R = j[0], ne = j[1], B = u.useState(o.loading || !1), re = cn(B, 2), ae = re[0], he = re[1], Se = u.useState([]), pe = cn(Se, 2), Z = pe[0], _ = pe[1], J = to.setMetaData({
    props: o,
    state: {
      first: f,
      last: g,
      page: S,
      numItemsInViewport: I,
      numToleratedItems: R,
      loading: ae,
      loaderArr: Z
    }
  }), Q = J.ptm;
  In(to.css.styles, {
    name: "virtualscroller"
  });
  var X = u.useRef(null), Y = u.useRef(null), fe = u.useRef(null), ve = u.useRef(null), ce = u.useRef(s ? {
    top: 0,
    left: 0
  } : 0), K = u.useRef(null), D = u.useRef(null), F = u.useRef({}), ue = u.useRef({}), M = u.useRef(null), Ie = u.useRef(null), Ne = u.useRef(null), je = u.useRef(null), Ae = u.useRef(!1), We = u.useRef(null), xt = ai({
    listener: function(q) {
      return it();
    },
    when: !o.disabled
  }), dt = cn(xt, 1), lt = dt[0], nt = yn({
    target: "window",
    type: "orientationchange",
    listener: function(q) {
      return it();
    },
    when: !o.disabled
  }), pt = cn(nt, 1), Et = pt[0], rt = function() {
    return X;
  }, Je = function(q) {
    return Math.floor((q + R * 4) / (o.step || 1));
  }, Mt = function(q) {
    Y.current = q || Y.current || A.findSingle(X.current, ".p-virtualscroller-content");
  }, Ge = function(q) {
    return o.step ? S !== Je(q) : !0;
  }, ot = function(q) {
    ce.current = s ? {
      top: 0,
      left: 0
    } : 0, X.current && X.current.scrollTo(q);
  }, ct = function(q) {
    var k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "auto", W = z(), te = W.numToleratedItems, ie = qe(), oe = function() {
      var st = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, St = arguments.length > 1 ? arguments[1] : void 0;
      return st <= St ? 0 : st;
    }, me = function(st, St, gt) {
      return st * St + gt;
    }, De = function() {
      var st = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, St = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return ot({
        left: st,
        top: St,
        behavior: k
      });
    }, Oe = s ? {
      rows: 0,
      cols: 0
    } : 0, Ye = !1;
    s ? (Oe = {
      rows: oe(q[0], te[0]),
      cols: oe(q[1], te[1])
    }, De(me(Oe.cols, o.itemSize[1], ie.left), me(Oe.rows, o.itemSize[0], ie.top)), Ye = f.rows !== Oe.rows || f.cols !== Oe.cols) : (Oe = oe(q, te), l ? De(me(Oe, o.itemSize, ie.left), 0) : De(0, me(Oe, o.itemSize, ie.top)), Ye = f !== Oe), Ae.current = Ye, m(Oe);
  }, kt = function(q, k) {
    var W = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "auto";
    if (k) {
      var te = Ce(), ie = te.first, oe = te.viewport, me = function() {
        var St = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, gt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        return ot({
          left: St,
          top: gt,
          behavior: W
        });
      }, De = k === "to-start", Oe = k === "to-end";
      if (De) {
        if (s)
          oe.first.rows - ie.rows > q[0] ? me(oe.first.cols * o.itemSize[1], (oe.first.rows - 1) * o.itemSize[0]) : oe.first.cols - ie.cols > q[1] && me((oe.first.cols - 1) * o.itemSize[1], oe.first.rows * o.itemSize[0]);
        else if (oe.first - ie > q) {
          var Ye = (oe.first - 1) * o.itemSize;
          l ? me(Ye, 0) : me(0, Ye);
        }
      } else if (Oe) {
        if (s)
          oe.last.rows - ie.rows <= q[0] + 1 ? me(oe.first.cols * o.itemSize[1], (oe.first.rows + 1) * o.itemSize[0]) : oe.last.cols - ie.cols <= q[1] + 1 && me((oe.first.cols + 1) * o.itemSize[1], oe.first.rows * o.itemSize[0]);
        else if (oe.last - ie <= q + 1) {
          var mt = (oe.first + 1) * o.itemSize;
          l ? me(mt, 0) : me(0, mt);
        }
      }
    } else
      ct(q, W);
  }, ft = function() {
    return ae ? o.loaderDisabled ? Z : [] : G();
  }, vt = function() {
    return o.columns && s || l ? ae && o.loaderDisabled ? s ? Z[0] : Z : o.columns.slice(s ? f.cols : f, s ? g.cols : g) : o.columns;
  }, Ce = function() {
    var q = function(Oe, Ye) {
      return Math.floor(Oe / (Ye || Oe));
    }, k = f, W = 0;
    if (X.current) {
      var te = X.current, ie = te.scrollTop, oe = te.scrollLeft;
      if (s)
        k = {
          rows: q(ie, o.itemSize[0]),
          cols: q(oe, o.itemSize[1])
        }, W = {
          rows: k.rows + I.rows,
          cols: k.cols + I.cols
        };
      else {
        var me = l ? oe : ie;
        k = q(me, o.itemSize), W = k + I;
      }
    }
    return {
      first: f,
      last: g,
      viewport: {
        first: k,
        last: W
      }
    };
  }, z = function() {
    var q = qe(), k = X.current ? X.current.offsetWidth - q.left : 0, W = X.current ? X.current.offsetHeight - q.top : 0, te = function(Oe, Ye) {
      return Math.ceil(Oe / (Ye || Oe));
    }, ie = function(Oe) {
      return Math.ceil(Oe / 2);
    }, oe = s ? {
      rows: te(W, o.itemSize[0]),
      cols: te(k, o.itemSize[1])
    } : te(l ? k : W, o.itemSize), me = R || (s ? [ie(oe.rows), ie(oe.cols)] : ie(oe));
    return {
      numItemsInViewport: oe,
      numToleratedItems: me
    };
  }, ge = function() {
    var q = z(), k = q.numItemsInViewport, W = q.numToleratedItems, te = function(me, De, Oe) {
      var Ye = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      return Pe(me + De + (me < Oe ? 2 : 3) * Oe, Ye);
    }, ie = s ? {
      rows: te(f.rows, k.rows, W[0]),
      cols: te(f.cols, k.cols, W[1], !0)
    } : te(f, k, W);
    U(k), ne(W), C(ie), o.showLoader && _(s ? Array.from({
      length: k.rows
    }).map(function() {
      return Array.from({
        length: k.cols
      });
    }) : Array.from({
      length: k
    })), o.lazy && Promise.resolve().then(function() {
      We.current = {
        first: o.step ? s ? {
          rows: 0,
          cols: f.cols
        } : 0 : f,
        last: Math.min(o.step ? o.step : ie, (o.items || []).length)
      }, o.onLazyLoad && o.onLazyLoad(We.current);
    });
  }, _e = function(q) {
    o.autoSize && !q && Promise.resolve().then(function() {
      if (Y.current) {
        Y.current.style.minHeight = Y.current.style.minWidth = "auto", Y.current.style.position = "relative", X.current.style.contain = "none";
        var k = [A.getWidth(X.current), A.getHeight(X.current)], W = k[0], te = k[1];
        (s || l) && (X.current.style.width = (W < M.current ? W : o.scrollWidth || M.current) + "px"), (s || i) && (X.current.style.height = (te < Ie.current ? te : o.scrollHeight || Ie.current) + "px"), Y.current.style.minHeight = Y.current.style.minWidth = "", Y.current.style.position = "", X.current.style.contain = "";
      }
    });
  }, Pe = function() {
    var q, k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, W = arguments.length > 1 ? arguments[1] : void 0;
    return o.items ? Math.min(W ? ((q = o.columns || o.items[0]) === null || q === void 0 ? void 0 : q.length) || 0 : (o.items || []).length, k) : 0;
  }, qe = function() {
    if (Y.current) {
      var q = getComputedStyle(Y.current), k = parseFloat(q.paddingLeft) + Math.max(parseFloat(q.left) || 0, 0), W = parseFloat(q.paddingRight) + Math.max(parseFloat(q.right) || 0, 0), te = parseFloat(q.paddingTop) + Math.max(parseFloat(q.top) || 0, 0), ie = parseFloat(q.paddingBottom) + Math.max(parseFloat(q.bottom) || 0, 0);
      return {
        left: k,
        right: W,
        top: te,
        bottom: ie,
        x: k + W,
        y: te + ie
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
  }, Ve = function() {
    if (X.current) {
      var q = X.current.parentElement, k = o.scrollWidth || "".concat(X.current.offsetWidth || q.offsetWidth, "px"), W = o.scrollHeight || "".concat(X.current.offsetHeight || q.offsetHeight, "px"), te = function(oe, me) {
        return X.current.style[oe] = me;
      };
      s || l ? (te("height", W), te("width", k)) : te("height", W);
    }
  }, ut = function() {
    var q = o.items;
    if (q) {
      var k = qe(), W = function(ie, oe, me) {
        var De = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
        return ue.current = Mn(Mn({}, ue.current), ls({}, "".concat(ie), (oe || []).length * me + De + "px"));
      };
      s ? (W("height", q, o.itemSize[0], k.y), W("width", o.columns || q[1], o.itemSize[1], k.x)) : l ? W("width", o.columns || q, o.itemSize, k.x) : W("height", q, o.itemSize, k.y);
    }
  }, Fe = function(q) {
    if (Y.current && !o.appendOnly) {
      var k = q ? q.first : f, W = function(me, De) {
        return me * De;
      }, te = function() {
        var me = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, De = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        ve.current && (ve.current.style.top = "-".concat(De, "px")), F.current = Mn(Mn({}, F.current), {
          transform: "translate3d(".concat(me, "px, ").concat(De, "px, 0)")
        });
      };
      if (s)
        te(W(k.cols, o.itemSize[1]), W(k.rows, o.itemSize[0]));
      else {
        var ie = W(k, o.itemSize);
        l ? te(ie, 0) : te(0, ie);
      }
    }
  }, Me = function(q) {
    var k = q.target, W = qe(), te = function(Ct, Wt) {
      return Ct ? Ct > Wt ? Ct - Wt : Ct : 0;
    }, ie = function(Ct, Wt) {
      return Math.floor(Ct / (Wt || Ct));
    }, oe = function(Ct, Wt, mn, Nn, Jt, sn) {
      return Ct <= Jt ? Jt : sn ? mn - Nn - Jt : Wt + Jt - 1;
    }, me = function(Ct, Wt, mn, Nn, Jt, sn, Cn) {
      return Ct <= sn ? 0 : Math.max(0, Cn ? Ct < Wt ? mn : Ct - sn : Ct > Wt ? mn : Ct - 2 * sn);
    }, De = function(Ct, Wt, mn, Nn, Jt, sn) {
      var Cn = Wt + Nn + 2 * Jt;
      return Ct >= Jt && (Cn = Cn + (Jt + 1)), Pe(Cn, sn);
    }, Oe = te(k.scrollTop, W.top), Ye = te(k.scrollLeft, W.left), mt = s ? {
      rows: 0,
      cols: 0
    } : 0, st = g, St = !1, gt = ce.current;
    if (s) {
      var nr = ce.current.top <= Oe, rr = ce.current.left <= Ye;
      if (!o.appendOnly || o.appendOnly && (nr || rr)) {
        var vn = {
          rows: ie(Oe, o.itemSize[0]),
          cols: ie(Ye, o.itemSize[1])
        }, Gr = {
          rows: oe(vn.rows, f.rows, g.rows, I.rows, R[0], nr),
          cols: oe(vn.cols, f.cols, g.cols, I.cols, R[1], rr)
        };
        mt = {
          rows: me(vn.rows, Gr.rows, f.rows, g.rows, I.rows, R[0], nr),
          cols: me(vn.cols, Gr.cols, f.cols, g.cols, I.cols, R[1], rr)
        }, st = {
          rows: De(vn.rows, mt.rows, g.rows, I.rows, R[0]),
          cols: De(vn.cols, mt.cols, g.cols, I.cols, R[1], !0)
        }, St = mt.rows !== f.rows || st.rows !== g.rows || mt.cols !== f.cols || st.cols !== g.cols || Ae.current, gt = {
          top: Oe,
          left: Ye
        };
      }
    } else {
      var or = l ? Ye : Oe, ar = ce.current <= or;
      if (!o.appendOnly || o.appendOnly && ar) {
        var ir = ie(or, o.itemSize), wt = oe(ir, f, g, I, R, ar);
        mt = me(ir, wt, f, g, I, R, ar), st = De(ir, mt, g, I, R), St = mt !== f || st !== g || Ae.current, gt = or;
      }
    }
    return {
      first: mt,
      last: st,
      isRangeChanged: St,
      scrollPos: gt
    };
  }, He = function(q) {
    var k = Me(q), W = k.first, te = k.last, ie = k.isRangeChanged, oe = k.scrollPos;
    if (ie) {
      var me = {
        first: W,
        last: te
      };
      if (Fe(me), m(W), C(te), ce.current = oe, o.onScrollIndexChange && o.onScrollIndexChange(me), o.lazy && Ge(W)) {
        var De = {
          first: o.step ? Math.min(Je(W) * o.step, (o.items || []).length - o.step) : W,
          last: Math.min(o.step ? (Je(W) + 1) * o.step : te, (o.items || []).length)
        }, Oe = !We.current || We.current.first !== De.first || We.current.last !== De.last;
        Oe && o.onLazyLoad && o.onLazyLoad(De), We.current = De;
      }
    }
  }, at = function(q) {
    if (o.onScroll && o.onScroll(q), o.delay) {
      if (K.current && clearTimeout(K.current), Ge(f)) {
        if (!ae && o.showLoader) {
          var k = Me(q), W = k.isRangeChanged, te = W || (o.step ? Ge(f) : !1);
          te && he(!0);
        }
        K.current = setTimeout(function() {
          He(q), ae && o.showLoader && (!o.lazy || o.loading === void 0) && (he(!1), P(Je(f)));
        }, o.delay);
      }
    } else
      He(q);
  }, it = function() {
    D.current && clearTimeout(D.current), D.current = setTimeout(function() {
      if (X.current) {
        var q = [A.getWidth(X.current), A.getHeight(X.current)], k = q[0], W = q[1], te = k !== M.current, ie = W !== Ie.current, oe = s ? te || ie : l ? te : i ? ie : !1;
        oe && (ne(o.numToleratedItems), M.current = k, Ie.current = W, Ne.current = A.getWidth(Y.current), je.current = A.getHeight(Y.current));
      }
    }, o.resizeDelay);
  }, be = function(q) {
    var k = (o.items || []).length, W = s ? f.rows + q : f + q;
    return {
      index: W,
      count: k,
      first: W === 0,
      last: W === k - 1,
      even: W % 2 === 0,
      odd: W % 2 !== 0,
      props: o
    };
  }, N = function(q, k) {
    var W = Z.length || 0;
    return Mn({
      index: q,
      count: W,
      first: q === 0,
      last: q === W - 1,
      even: q % 2 === 0,
      odd: q % 2 !== 0,
      props: o
    }, k);
  }, G = function() {
    var q = o.items;
    return q && !ae ? s ? q.slice(o.appendOnly ? 0 : f.rows, g.rows).map(function(k) {
      return o.columns ? k : k.slice(o.appendOnly ? 0 : f.cols, g.cols);
    }) : l && o.columns ? q : q.slice(o.appendOnly ? 0 : f, g) : [];
  }, ee = function() {
    X.current && A.isVisible(X.current) && (Mt(Y.current), ye(), lt(), Et(), M.current = A.getWidth(X.current), Ie.current = A.getHeight(X.current), Ne.current = A.getWidth(Y.current), je.current = A.getHeight(Y.current));
  }, ye = function() {
    o.disabled || (Ve(), ge(), ut());
  };
  Gt(function() {
    ee();
  }), tt(function() {
    ye();
  }, [o.itemSize, o.scrollHeight, o.scrollWidth]), tt(function() {
    o.numToleratedItems !== R && ne(o.numToleratedItems);
  }, [o.numToleratedItems]), tt(function() {
    o.numToleratedItems === R && ye();
  }, [R]), tt(function() {
    var se = a.items !== void 0 && a.items !== null, q = o.items !== void 0 && o.items !== null, k = se ? a.items.length : 0, W = q ? o.items.length : 0, te = k !== W;
    if (s && !te) {
      var ie = se && a.items.length > 0 ? a.items[0].length : 0, oe = q && o.items.length > 0 ? o.items[0].length : 0;
      te = ie !== oe;
    }
    (!se || te) && ye();
    var me = ae;
    o.lazy && a.loading !== o.loading && o.loading !== ae && (he(o.loading), me = o.loading), _e(me);
  }), tt(function() {
    ce.current = s ? {
      top: 0,
      left: 0
    } : 0;
  }, [o.orientation]), u.useImperativeHandle(t, function() {
    return {
      props: o,
      getElementRef: rt,
      scrollTo: ot,
      scrollToIndex: ct,
      scrollInView: kt,
      getRenderedRange: Ce
    };
  });
  var Be = function(q) {
    var k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, W = N(q, k), te = L.getJSXElement(o.loadingTemplate, W);
    return /* @__PURE__ */ u.createElement(u.Fragment, {
      key: q
    }, te);
  }, Qe = function() {
    var q = "p-virtualscroller-loading-icon", k = e({
      className: q
    }, Q("loadingIcon")), W = o.loadingIcon || /* @__PURE__ */ u.createElement(zo, Fa({}, k, {
      spin: !0
    })), te = Nt.getJSXIcon(W, Mn({}, k), {
      props: o
    });
    if (!o.loaderDisabled && o.showLoader && ae) {
      var ie = we("p-virtualscroller-loader", {
        "p-component-overlay": !o.loadingTemplate
      }), oe = te;
      if (o.loadingTemplate)
        oe = Z.map(function(Oe, Ye) {
          return Be(Ye, s && {
            numCols: I.cols
          });
        });
      else if (o.loaderIconTemplate) {
        var me = {
          iconClassName: q,
          element: oe,
          props: o
        };
        oe = L.getJSXElement(o.loaderIconTemplate, me);
      }
      var De = e({
        className: ie
      }, Q("loader"));
      return /* @__PURE__ */ u.createElement("div", De, oe);
    }
    return null;
  }, Pt = function() {
    if (o.showSpacer) {
      var q = e({
        ref: fe,
        style: ue.current,
        className: "p-virtualscroller-spacer"
      }, Q("spacer"));
      return /* @__PURE__ */ u.createElement("div", q);
    }
    return null;
  }, zt = function(q, k) {
    var W = be(k), te = L.getJSXElement(o.itemTemplate, q, W);
    return /* @__PURE__ */ u.createElement(u.Fragment, {
      key: W.index
    }, te);
  }, qt = function() {
    var q = G();
    return q.map(zt);
  }, Tt = function() {
    var q = qt(), k = we("p-virtualscroller-content", {
      "p-virtualscroller-loading": ae
    }), W = e({
      ref: Y,
      style: F.current,
      className: k
    }, Q("content")), te = /* @__PURE__ */ u.createElement("div", W, q);
    if (o.contentTemplate) {
      var ie = {
        style: F.current,
        className: k,
        spacerStyle: ue.current,
        contentRef: function(me) {
          return Y.current = L.getRefElement(me);
        },
        spacerRef: function(me) {
          return fe.current = L.getRefElement(me);
        },
        stickyRef: function(me) {
          return ve.current = L.getRefElement(me);
        },
        items: G(),
        getItemOptions: function(me) {
          return be(me);
        },
        children: q,
        element: te,
        props: o,
        loading: ae,
        getLoaderOptions: function(me, De) {
          return N(me, De);
        },
        loadingTemplate: o.loadingTemplate,
        itemSize: o.itemSize,
        rows: ft(),
        columns: vt(),
        vertical: i,
        horizontal: l,
        both: s
      };
      return L.getJSXElement(o.contentTemplate, ie);
    }
    return te;
  };
  if (o.disabled) {
    var Ht = L.getJSXElement(o.contentTemplate, {
      items: o.items,
      rows: o.items,
      columns: o.columns
    });
    return /* @__PURE__ */ u.createElement(u.Fragment, null, o.children, Ht);
  }
  var p = we("p-virtualscroller", {
    "p-virtualscroller-inline": o.inline,
    "p-virtualscroller-both p-both-scroll": s,
    "p-virtualscroller-horizontal p-horizontal-scroll": l
  }, o.className), E = Qe(), H = Tt(), de = Pt(), xe = e({
    ref: X,
    className: p,
    tabIndex: o.tabIndex,
    style: o.style,
    onScroll: function(q) {
      return at(q);
    }
  }, to.getOtherProps(o), Q("root"));
  return /* @__PURE__ */ u.createElement("div", xe, H, de, E);
}));
ss.displayName = "VirtualScroller";
function Ma() {
  return Ma = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, Ma.apply(this, arguments);
}
function Rr(n) {
  "@babel/helpers - typeof";
  return Rr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Rr(n);
}
function Ud(n, t) {
  if (Rr(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var r = e.call(n, t || "default");
    if (Rr(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function Yd(n) {
  var t = Ud(n, "string");
  return Rr(t) === "symbol" ? t : String(t);
}
function Gd(n, t, e) {
  return t = Yd(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function Xd(n) {
  if (Array.isArray(n)) return n;
}
function Jd(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var r, o, a, i, l = [], s = !0, c = !1;
    try {
      if (a = (e = e.call(n)).next, t !== 0) for (; !(s = (r = a.call(e)).done) && (l.push(r.value), l.length !== t); s = !0) ;
    } catch (d) {
      c = !0, o = d;
    } finally {
      try {
        if (!s && e.return != null && (i = e.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw o;
      }
    }
    return l;
  }
}
function ol(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, r = new Array(t); e < t; e++) r[e] = n[e];
  return r;
}
function Zd(n, t) {
  if (n) {
    if (typeof n == "string") return ol(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return ol(n, t);
  }
}
function Qd() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ef(n, t) {
  return Xd(n) || Jd(n, t) || Zd(n, t) || Qd();
}
var tf = `
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

`, nf = {
  root: "p-ink"
}, Wn = Le.extend({
  defaultProps: {
    __TYPE: "Ripple",
    children: void 0
  },
  css: {
    styles: tf,
    classes: nf
  },
  getProps: function(t) {
    return L.getMergedProps(t, Wn.defaultProps);
  },
  getOtherProps: function(t) {
    return L.getDiffProps(t, Wn.defaultProps);
  }
});
function al(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function rf(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? al(Object(e), !0).forEach(function(r) {
      Gd(n, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : al(Object(e)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return n;
}
var En = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = u.useState(!1), r = ef(e, 2), o = r[0], a = r[1], i = u.useRef(null), l = u.useRef(null), s = Ft(), c = u.useContext(yt), d = Wn.getProps(n, c), f = c && c.ripple || bt.ripple, m = {
    props: d
  };
  In(Wn.css.styles, {
    name: "ripple",
    manual: !f
  });
  var h = Wn.setMetaData(rf({}, m)), x = h.ptm, g = h.cx, C = function() {
    return i.current && i.current.parentElement;
  }, y = function() {
    l.current && l.current.addEventListener("pointerdown", S);
  }, w = function() {
    l.current && l.current.removeEventListener("pointerdown", S);
  }, S = function($) {
    var j = A.getOffset(l.current), R = $.pageX - j.left + document.body.scrollTop - A.getWidth(i.current) / 2, ne = $.pageY - j.top + document.body.scrollLeft - A.getHeight(i.current) / 2;
    P(R, ne);
  }, P = function($, j) {
    !i.current || getComputedStyle(i.current, null).display === "none" || (A.removeClass(i.current, "p-ink-active"), T(), i.current.style.top = j + "px", i.current.style.left = $ + "px", A.addClass(i.current, "p-ink-active"));
  }, b = function($) {
    A.removeClass($.currentTarget, "p-ink-active");
  }, T = function() {
    if (i.current && !A.getHeight(i.current) && !A.getWidth(i.current)) {
      var $ = Math.max(A.getOuterWidth(l.current), A.getOuterHeight(l.current));
      i.current.style.height = $ + "px", i.current.style.width = $ + "px";
    }
  };
  if (u.useImperativeHandle(t, function() {
    return {
      props: d,
      getInk: function() {
        return i.current;
      },
      getTarget: function() {
        return l.current;
      }
    };
  }), Gt(function() {
    a(!0);
  }), tt(function() {
    o && i.current && (l.current = C(), T(), y());
  }, [o]), tt(function() {
    i.current && !l.current && (l.current = C(), T(), y());
  }), an(function() {
    i.current && (l.current = null, w());
  }), !f)
    return null;
  var I = s({
    "aria-hidden": !0,
    className: we(g("root"))
  }, Wn.getOtherProps(d), x("root"));
  return /* @__PURE__ */ u.createElement("span", Ma({
    role: "presentation",
    ref: i
  }, I, {
    onAnimationEnd: b
  }));
}));
En.displayName = "Ripple";
function za() {
  return za = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, za.apply(this, arguments);
}
var cs = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Vt.getPTI(n);
  return /* @__PURE__ */ u.createElement("svg", za({
    ref: t,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e), /* @__PURE__ */ u.createElement("path", {
    d: "M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z",
    fill: "currentColor"
  }));
}));
cs.displayName = "CheckIcon";
function fn() {
  return fn = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, fn.apply(this, arguments);
}
function Jn(n) {
  "@babel/helpers - typeof";
  return Jn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Jn(n);
}
function of(n, t) {
  if (Jn(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var r = e.call(n, t || "default");
    if (Jn(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function af(n) {
  var t = of(n, "string");
  return Jn(t) === "symbol" ? t : String(t);
}
function Ho(n, t, e) {
  return t = af(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function lf(n) {
  if (Array.isArray(n)) return n;
}
function sf(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var r, o, a, i, l = [], s = !0, c = !1;
    try {
      if (a = (e = e.call(n)).next, t !== 0) for (; !(s = (r = a.call(e)).done) && (l.push(r.value), l.length !== t); s = !0) ;
    } catch (d) {
      c = !0, o = d;
    } finally {
      try {
        if (!s && e.return != null && (i = e.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw o;
      }
    }
    return l;
  }
}
function il(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, r = new Array(t); e < t; e++) r[e] = n[e];
  return r;
}
function cf(n, t) {
  if (n) {
    if (typeof n == "string") return il(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return il(n, t);
  }
}
function uf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function dr(n, t) {
  return lf(n) || sf(n, t) || cf(n, t) || uf();
}
function ll(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function df(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ll(Object(e), !0).forEach(function(r) {
      Ho(n, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : ll(Object(e)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return n;
}
var ff = {
  root: function(t) {
    var e = t.props, r = t.focusedState, o = t.overlayVisibleState, a = t.context;
    return we("p-dropdown p-component p-inputwrapper", {
      "p-disabled": e.disabled,
      "p-invalid": e.invalid,
      "p-focus": r,
      "p-variant-filled": e.variant ? e.variant === "filled" : a && a.inputStyle === "filled",
      "p-dropdown-clearable": e.showClear && !e.disabled,
      "p-inputwrapper-filled": L.isNotEmpty(e.value),
      "p-inputwrapper-focus": r || o
    });
  },
  input: function(t) {
    var e = t.props, r = t.label;
    return e.editable ? "p-dropdown-label p-inputtext" : we("p-dropdown-label p-inputtext", {
      "p-placeholder": r === null && e.placeholder,
      "p-dropdown-label-empty": r === null && !e.placeholder
    });
  },
  trigger: "p-dropdown-trigger",
  emptyMessage: "p-dropdown-empty-message",
  itemGroup: function(t) {
    var e = t.optionGroupLabel;
    return we("p-dropdown-item-group", {
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
    return we("p-dropdown-filter-container", {
      "p-dropdown-clearable-filter": !!e
    });
  },
  filterInput: function(t) {
    var e = t.props, r = t.context;
    return we("p-dropdown-filter p-inputtext p-component", {
      "p-variant-filled": e.variant ? e.variant === "filled" : r && r.inputStyle === "filled"
    });
  },
  list: function(t) {
    var e = t.virtualScrollerOptions;
    return "p-dropdown-items";
  },
  panel: function(t) {
    var e = t.context;
    return we("p-dropdown-panel p-component", {
      "p-input-filled": e && e.inputStyle === "filled" || bt.inputStyle === "filled",
      "p-ripple-disabled": e && e.ripple === !1 || bt.ripple === !1
    });
  },
  item: function(t) {
    var e = t.selected, r = t.disabled, o = t.label, a = t.index, i = t.focusedOptionIndex, l = t.highlightOnSelect;
    return we("p-dropdown-item", {
      "p-highlight": e && l,
      "p-disabled": r,
      "p-focus": a === i,
      "p-dropdown-item-empty": !o || o.length === 0
    });
  },
  itemLabel: "p-dropdown-item-label",
  checkIcon: "p-dropdown-check-icon",
  blankIcon: "p-dropdown-blank-icon",
  wrapper: "p-dropdown-items-wrapper",
  header: "p-dropdown-header",
  footer: "p-dropdown-footer",
  transition: "p-connected-overlay"
}, pf = `
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
`, vf = {
  wrapper: function(t) {
    var e = t.props;
    return {
      maxHeight: e.scrollHeight || "auto"
    };
  },
  panel: function(t) {
    var e = t.props;
    return df({}, e.panelStyle);
  }
}, no = Le.extend({
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
    classes: ff,
    styles: pf,
    inlineStyles: vf
  }
}), us = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Vt.getPTI(n);
  return /* @__PURE__ */ u.createElement("svg", fn({
    ref: t,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e), /* @__PURE__ */ u.createElement("rect", {
    width: "1",
    height: "1",
    fill: "currentColor",
    fillOpacity: "0"
  }));
}));
us.displayName = "BlankIcon";
var ds = /* @__PURE__ */ u.memo(function(n) {
  var t = Ft(), e = n.ptm, r = n.cx, o = n.selected, a = n.disabled, i = n.option, l = n.label, s = n.index, c = n.focusedOptionIndex, d = n.ariaSetSize, f = n.checkmark, m = n.highlightOnSelect, h = n.onInputKeyDown, x = function(b) {
    return e(b, {
      context: {
        selected: o,
        disabled: a,
        focused: s === c
      }
    });
  }, g = function(b, T) {
    n.onClick && n.onClick({
      originalEvent: b,
      option: i
    });
  }, C = n.template ? L.getJSXElement(n.template, n.option) : n.label, y = t({
    id: "dropdownItem_".concat(s),
    role: "option",
    key: n.label,
    className: we(i.className, r("item", {
      selected: o,
      disabled: a,
      label: l,
      index: s,
      focusedOptionIndex: c,
      highlightOnSelect: m
    })),
    style: n.style,
    tabIndex: 0,
    onClick: function(b) {
      return g(b);
    },
    onKeyDown: function(b) {
      return h(b);
    },
    onMouseMove: function(b) {
      return n == null ? void 0 : n.onMouseMove(b, s);
    },
    "aria-setsize": d,
    "aria-posinset": s + 1,
    "aria-label": l,
    "aria-selected": o,
    "data-p-highlight": o,
    "data-p-focused": c === s,
    "data-p-disabled": a
  }, x("item")), w = t({
    className: r("itemLabel")
  }, x("itemLabel")), S = function() {
    if (o) {
      var b = t({
        className: r("checkIcon")
      }, x("checkIcon"));
      return /* @__PURE__ */ u.createElement(cs, b);
    }
    var T = t({
      className: r("blankIcon")
    }, x("blankIcon"));
    return /* @__PURE__ */ u.createElement(us, T);
  };
  return /* @__PURE__ */ u.createElement("li", y, f && S(), /* @__PURE__ */ u.createElement("span", w, C), /* @__PURE__ */ u.createElement(En, null));
});
ds.displayName = "DropdownItem";
function sl(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function Zt(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sl(Object(e), !0).forEach(function(r) {
      Ho(n, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : sl(Object(e)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return n;
}
var fs = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Ft(), r = n.ptm, o = n.cx, a = n.sx, i = u.useContext(yt), l = u.useRef(null), s = !(n.visibleOptions && n.visibleOptions.length) && n.hasFilter, c = n.visibleOptions ? n.visibleOptions.length : 0, d = {
    filter: function(j) {
      return x(j);
    },
    reset: function() {
      return n.resetFilter();
    }
  }, f = function(j, R) {
    return r(j, Zt({
      hostName: n.hostName
    }, R));
  }, m = function() {
    n.onEnter(function() {
      if (n.virtualScrollerRef.current) {
        var j = n.getSelectedOptionIndex();
        j !== -1 && setTimeout(function() {
          return n.virtualScrollerRef.current.scrollToIndex(j);
        }, 0);
      }
    });
  }, h = function() {
    n.onEntered(function() {
      n.filter && n.filterInputAutoFocus && A.focus(l.current, !1);
    });
  }, x = function(j) {
    n.onFilterInputChange && n.onFilterInputChange(j);
  }, g = function() {
    if (n.panelFooterTemplate) {
      var j = L.getJSXElement(n.panelFooterTemplate, n, n.onOverlayHide), R = e({
        className: o("footer")
      }, f("footer"));
      return /* @__PURE__ */ u.createElement("div", R, j);
    }
    return null;
  }, C = function(j, R) {
    if (n.focusOnHover) {
      var ne;
      n == null || (ne = n.changeFocusedOptionIndex) === null || ne === void 0 || ne.call(n, j, R);
    }
  }, y = function(j, R) {
    var ne = L.getJSXElement(j, n) || Xn(R ? "emptyFilterMessage" : "emptyMessage"), B = e({
      className: o("emptyMessage")
    }, f("emptyMessage"));
    return /* @__PURE__ */ u.createElement("li", B, ne);
  }, w = function(j, R) {
    var ne = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, B = {
      height: ne.props ? ne.props.itemSize : void 0
    };
    if (B = Zt(Zt({}, B), j.style), j.group && j.optionGroup && n.optionGroupLabel) {
      var re = n.optionGroupLabel, ae = n.optionGroupTemplate ? L.getJSXElement(n.optionGroupTemplate, j, R) : n.getOptionGroupLabel(j), he = R + "_" + n.getOptionGroupRenderKey(j), Se = e({
        className: o("itemGroup", {
          optionGroupLabel: re
        }),
        style: B,
        "data-p-highlight": n.selected
      }, f("itemGroup")), pe = e({
        className: o("itemGroupLabel")
      }, f("itemGroupLabel"));
      return /* @__PURE__ */ u.createElement("li", fn({
        key: he
      }, Se), /* @__PURE__ */ u.createElement("span", pe, ae));
    }
    var Z = n.getOptionRenderKey(j) + "_" + R, _ = n.getOptionLabel(j), J = n.isOptionDisabled(j);
    return /* @__PURE__ */ u.createElement(ds, {
      key: Z,
      label: _,
      index: R,
      focusedOptionIndex: n.focusedOptionIndex,
      option: j,
      ariaSetSize: c,
      onInputKeyDown: n.onInputKeyDown,
      style: B,
      template: n.itemTemplate,
      selected: n.isSelected(j),
      highlightOnSelect: n.highlightOnSelect,
      disabled: J,
      onClick: n.onOptionClick,
      onMouseMove: C,
      ptm: r,
      cx: o,
      checkmark: n.checkmark
    });
  }, S = function() {
    return L.isNotEmpty(n.visibleOptions) ? n.visibleOptions.map(w) : n.hasFilter ? y(n.emptyFilterMessage, !0) : y(n.emptyMessage);
  }, P = function() {
    if (n.showFilterClear && n.filterValue) {
      var j = Xn("clear"), R = e({
        className: o("filterClearIcon"),
        "aria-label": j,
        onClick: function() {
          return n.onFilterClearIconClick(function() {
            return A.focus(l.current);
          });
        }
      }, f("filterClearIcon")), ne = n.filterClearIcon || /* @__PURE__ */ u.createElement(Wr, R), B = Nt.getJSXIcon(ne, Zt({}, R), {
        props: n
      });
      return B;
    }
    return null;
  }, b = function() {
    if (n.filter) {
      var j = P(), R = e({
        className: o("filterIcon")
      }, f("filterIcon")), ne = n.filterIcon || /* @__PURE__ */ u.createElement(is, R), B = Nt.getJSXIcon(ne, Zt({}, R), {
        props: n
      }), re = e({
        className: o("filterContainer", {
          clearIcon: j
        })
      }, f("filterContainer")), ae = e({
        ref: l,
        type: "text",
        autoComplete: "off",
        className: o("filterInput", {
          context: i
        }),
        placeholder: n.filterPlaceholder,
        onKeyDown: n.onFilterInputKeyDown,
        onChange: function(_) {
          return x(_);
        },
        value: n.filterValue
      }, f("filterInput")), he = /* @__PURE__ */ u.createElement("div", re, /* @__PURE__ */ u.createElement("input", ae), j, B);
      if (n.filterTemplate) {
        var Se = {
          className: we("p-dropdown-filter-container", {
            "p-dropdown-clearable-filter": !!j
          }),
          element: he,
          filterOptions: d,
          filterInputKeyDown: n.onFilterInputKeyDown,
          filterInputChange: x,
          filterIconClassName: "p-dropdown-filter-icon",
          clearIcon: j,
          props: n
        };
        he = L.getJSXElement(n.filterTemplate, Se);
      }
      var pe = e({
        className: o("header")
      }, f("header"));
      return /* @__PURE__ */ u.createElement("div", pe, he);
    }
    return null;
  }, T = function() {
    if (n.virtualScrollerOptions) {
      var j = Zt(Zt({}, n.virtualScrollerOptions), {
        style: Zt(Zt({}, n.virtualScrollerOptions.style), {
          height: n.scrollHeight
        }),
        className: we("p-dropdown-items-wrapper", n.virtualScrollerOptions.className),
        items: n.visibleOptions,
        autoSize: !0,
        onLazyLoad: function(ae) {
          return n.virtualScrollerOptions.onLazyLoad(Zt(Zt({}, ae), {
            filter: n.filterValue
          }));
        },
        itemTemplate: function(ae, he) {
          return ae && w(ae, he.index, he);
        },
        contentTemplate: function(ae) {
          var he = n.hasFilter ? n.emptyFilterMessage : n.emptyMessage, Se = s ? y(he) : ae.children, pe = e({
            ref: ae.contentRef,
            style: ae.style,
            className: we(ae.className, o("list", {
              virtualScrollerProps: n.virtualScrollerOptions
            })),
            role: "listbox"
          }, f("list"));
          return /* @__PURE__ */ u.createElement("ul", pe, Se);
        }
      });
      return /* @__PURE__ */ u.createElement(ss, fn({
        ref: n.virtualScrollerRef
      }, j, {
        pt: r("virtualScroller")
      }));
    }
    var R = S(), ne = e({
      className: o("wrapper"),
      style: a("wrapper")
    }, f("wrapper")), B = e({
      className: o("list"),
      role: "listbox"
    }, f("list"));
    return /* @__PURE__ */ u.createElement("div", ne, /* @__PURE__ */ u.createElement("ul", B, R));
  }, I = function() {
    var j = b(), R = T(), ne = g(), B = e({
      className: we(n.panelClassName, o("panel", {
        context: i
      })),
      style: a("panel"),
      onClick: n.onClick
    }, f("panel")), re = e({
      classNames: o("transition"),
      in: n.in,
      timeout: {
        enter: 120,
        exit: 100
      },
      options: n.transitionOptions,
      unmountOnExit: !0,
      onEnter: m,
      onEntered: h,
      onExit: n.onExit,
      onExited: n.onExited
    }, f("transition"));
    return /* @__PURE__ */ u.createElement(Mo, fn({
      nodeRef: t
    }, re), /* @__PURE__ */ u.createElement("div", fn({
      ref: t
    }, B), n.firstFocusableElement, j, R, ne, n.lastFocusableElement));
  }, U = I();
  return /* @__PURE__ */ u.createElement(Hr, {
    element: U,
    appendTo: n.appendTo
  });
}));
fs.displayName = "DropdownPanel";
function mf(n, t) {
  var e = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (!e) {
    if (Array.isArray(n) || (e = gf(n)) || t) {
      e && (n = e);
      var r = 0, o = function() {
      };
      return { s: o, n: function() {
        return r >= n.length ? { done: !0 } : { done: !1, value: n[r++] };
      }, e: function(c) {
        throw c;
      }, f: o };
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
function gf(n, t) {
  if (n) {
    if (typeof n == "string") return cl(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return cl(n, t);
  }
}
function cl(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, r = new Array(t); e < t; e++) r[e] = n[e];
  return r;
}
function ul(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function un(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ul(Object(e), !0).forEach(function(r) {
      Ho(n, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : ul(Object(e)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return n;
}
var ps = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Ft(), r = u.useContext(yt), o = no.getProps(n, r), a = u.useState(""), i = dr(a, 2), l = i[0], s = i[1], c = u.useState(!1), d = dr(c, 2), f = d[0], m = d[1], h = u.useState(-1), x = dr(h, 2), g = x[0], C = x[1], y = u.useState(!1), w = dr(y, 2), S = w[0], P = w[1], b = u.useRef(!1), T = u.useRef(null), I = u.useRef(null), U = u.useRef(null), $ = u.useRef(null), j = u.useRef(o.inputRef), R = u.useRef(o.focusInputRef), ne = u.useRef(null), B = u.useRef(null), re = u.useRef(null), ae = o.virtualScrollerOptions && o.virtualScrollerOptions.lazy, he = L.isNotEmpty(l), Se = o.appendTo || r && r.appendTo || bt.appendTo, pe = no.setMetaData(un(un({
    props: o
  }, o.__parentMetadata), {}, {
    state: {
      filter: l,
      focused: f,
      overlayVisible: S
    }
  })), Z = pe.ptm, _ = pe.cx, J = pe.sx, Q = pe.isUnstyled;
  Xt(no.css.styles, Q, {
    name: "dropdown"
  });
  var X = ru({
    target: T,
    overlay: I,
    listener: function(v, V) {
      var Ee = V.type, et = V.valid;
      et && (Ee === "outside" ? !ue(v) && E() : E());
    },
    when: S
  }), Y = dr(X, 2), fe = Y[0], ve = Y[1], ce = function(v) {
    return (v || []).reduce(function(V, Ee, et) {
      V.push({
        optionGroup: Ee,
        group: !0,
        index: et,
        code: Ee.code,
        label: Ee.label
      });
      var ht = st(Ee);
      return ht && ht.forEach(function(Ln) {
        return V.push(Ln);
      }), V;
    }, []);
  }, K = function() {
    var v = o.optionGroupLabel ? ce(o.options) : o.options;
    if (he && !ae) {
      var V = l.trim().toLocaleLowerCase(o.filterLocale), Ee = o.filterBy ? o.filterBy.split(",") : [o.optionLabel || "label"];
      if (o.optionGroupLabel) {
        var et = [], ht = mf(o.options), Ln;
        try {
          for (ht.s(); !(Ln = ht.n()).done; ) {
            var hi = Ln.value, Zo = Ii.filter(st(hi), Ee, V, o.filterMatchMode, o.filterLocale);
            Zo && Zo.length && et.push(un(un({}, hi), Ho({}, "".concat(o.optionGroupChildren), Zo)));
          }
        } catch (pc) {
          ht.e(pc);
        } finally {
          ht.f();
        }
        return ce(et);
      }
      return Ii.filter(v, Ee, V, o.filterMatchMode, o.filterLocale);
    }
    return v;
  }, D = function(v) {
    var V = v.relatedTarget === R.current ? A.getFirstFocusableElement(I.current, ':not([data-p-hidden-focusable="true"])') : R.current;
    A.focus(V);
  }, F = function(v) {
    var V = v.relatedTarget === R.current ? A.getLastFocusableElement(I.current, ':not([data-p-hidden-focusable="true"])') : R.current;
    A.focus(V);
  }, ue = function(v) {
    return A.isAttributeEquals(v.target, "data-pc-section", "clearicon") || A.isAttributeEquals(v.target.parentElement || v.target, "data-pc-section", "filterclearicon");
  }, M = function(v) {
    o.disabled || o.loading || (o.onClick && o.onClick(v), !v.defaultPrevented && (ue(v) || v.target.tagName === "INPUT" || ((!I.current || !(I.current && I.current.contains(v.target))) && (A.focus(R.current), S ? E() : p()), b.current = !0)));
  }, Ie = function(v) {
    o.showOnFocus && !S && p(), m(!0), o.onFocus && o.onFocus(v);
  }, Ne = function(v) {
    m(!1), o.onBlur && setTimeout(function() {
      var V = j.current ? j.current.value : void 0;
      o.onBlur({
        originalEvent: v.originalEvent,
        value: V,
        stopPropagation: function() {
          v.originalEvent.stopPropagation();
        },
        preventDefault: function() {
          v.originalEvent.preventDefault();
        },
        target: {
          name: o.name,
          id: o.id,
          value: V
        }
      });
    }, 200);
  }, je = function(v, V) {
    var Ee = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, et = oe(V);
    Pt({
      originalEvent: v,
      option: et
    }), Ee && E();
  }, Ae = function(v) {
    Rn.emit("overlay-click", {
      originalEvent: v,
      target: T.current
    });
  }, We = function(v) {
    if (o.disabled) {
      v.preventDefault();
      return;
    }
    var V = v.metaKey || v.ctrlKey, Ee = A.isAndroid() ? v.key : v.code;
    switch (Ee) {
      case "ArrowDown":
        z(v);
        break;
      case "ArrowUp":
        ge(v);
        break;
      case "ArrowLeft":
      case "ArrowRight":
        _e(v, o.editable);
        break;
      case "Home":
        Pe(v);
        break;
      case "End":
        qe(v);
        break;
      case "PageDown":
        ut(v);
        break;
      case "PageUp":
        Ve(v);
        break;
      case "Space":
        Fe(v, o.editable);
        break;
      case "NumpadEnter":
      case "Enter":
        Me(v);
        break;
      case "Escape":
        He(v);
        break;
      case "Tab":
        at(v);
        break;
      case "Backspace":
        it(v, o.editable);
        break;
      case "ShiftLeft":
      case "ShiftRight":
        break;
      default:
        !V && L.isPrintableCharacter(v.key) && (!S && !o.editable && p(), !o.editable && Mt(v, v.key));
        break;
    }
    b.current = !1;
  }, xt = function(v) {
    switch (v.code) {
      case "ArrowDown":
        z(v);
        break;
      case "ArrowUp":
        ge(v);
        break;
      case "ArrowLeft":
      case "ArrowRight":
        _e(v, !0);
        break;
      case "Escape":
      case "Enter":
      case "NumpadEnter":
        Me(v), v.preventDefault();
        break;
    }
  }, dt = function() {
    return A.getFocusableElements(I.current, ':not([data-p-hidden-focusable="true"])').length > 0;
  }, lt = function(v) {
    var V;
    return nt(v) && ((V = ie(v)) === null || V === void 0 ? void 0 : V.toLocaleLowerCase(o.filterLocale).startsWith(re.current.toLocaleLowerCase(o.filterLocale)));
  }, nt = function(v) {
    return L.isNotEmpty(v) && !(Oe(v) || De(v));
  }, pt = function() {
    return L.isNotEmpty(o.value);
  }, Et = function(v) {
    return nt(v) && Ht(v);
  }, rt = function() {
    return pt ? wt.findIndex(function(v) {
      return Et(v);
    }) : -1;
  }, Je = function() {
    var v = rt();
    return v < 0 ? ot() : v;
  }, Mt = function(v, V) {
    re.current = (re.current || "") + V;
    var Ee = -1, et = !1;
    return L.isNotEmpty(re.current) && (g !== -1 ? (Ee = wt.slice(g).findIndex(function(ht) {
      return lt(ht);
    }), Ee = Ee === -1 ? wt.slice(0, g).findIndex(function(ht) {
      return lt(ht);
    }) : Ee + g) : Ee = wt.findIndex(function(ht) {
      return lt(ht);
    }), Ee !== -1 && (et = !0), Ee === -1 && g === -1 && (Ee = Je()), Ee !== -1 && vt(v, Ee)), B.current && clearTimeout(B.current), B.current = setTimeout(function() {
      re.current = "", B.current = null;
    }, 500), et;
  }, Ge = function() {
    var v = rt();
    return v < 0 ? ct() : v;
  }, ot = function() {
    return wt.findIndex(function(v) {
      return nt(v);
    });
  }, ct = function() {
    return L.findLastIndex(wt, function(v) {
      return nt(v);
    });
  }, kt = function(v) {
    var V = v < wt.length - 1 ? wt.slice(v + 1).findIndex(function(Ee) {
      return nt(Ee);
    }) : -1;
    return V > -1 ? V + v + 1 : v;
  }, ft = function(v) {
    var V = v > 0 ? L.findLastIndex(wt.slice(0, v), function(Ee) {
      return nt(Ee);
    }) : -1;
    return V > -1 ? V : v;
  }, vt = function(v, V) {
    g !== V && (C(V), Ce(V), o.selectOnFocus && je(v, wt[V], !1));
  }, Ce = function(v) {
    var V = A.findSingle(I.current, 'li[id="dropdownItem_'.concat(v, '"]'));
    V && V.focus();
  }, z = function(v) {
    if (!S)
      p(), o.editable && vt(v, rt());
    else {
      var V = g !== -1 ? kt(g) : b.current ? ot() : Je();
      vt(v, V);
    }
    v.preventDefault();
  }, ge = function(v) {
    var V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (v.altKey && !V)
      g !== -1 && je(v, wt[g]), state.overlayVisible && E(), v.preventDefault();
    else {
      var Ee = g !== -1 ? ft(g) : b.current ? ct() : Ge();
      vt(v, Ee), !S && p(), v.preventDefault();
    }
  }, _e = function(v) {
    var V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    V && C(-1);
  }, Pe = function(v) {
    var V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    V ? (v.currentTarget.setSelectionRange(0, 0), C(-1)) : (vt(v, ot()), !S && p()), v.preventDefault();
  }, qe = function(v) {
    var V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (V) {
      var Ee = v.currentTarget, et = Ee.value.length;
      Ee.setSelectionRange(et, et), C(-1);
    } else
      vt(v, ct()), !S && p();
    v.preventDefault();
  }, Ve = function(v) {
    v.preventDefault();
  }, ut = function(v) {
    v.preventDefault();
  }, Fe = function(v) {
    var V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    !V && Me(v);
  }, Me = function(v) {
    S ? (g !== -1 && je(v, wt[g]), E()) : (C(-1), z(v)), v.preventDefault();
  }, He = function(v) {
    S && E(), v.preventDefault();
  }, at = function(v) {
    var V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    V || (S && !dt() ? (A.focus(U.current), v.preventDefault()) : (g !== -1 && je(v, wt[g]), S && E()));
  }, it = function(v) {
    var V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    v && V && !S && p();
  }, be = function(v) {
    !S && p();
    var V = null;
    v.target.value && wt && (V = wt.findIndex(function(Ee) {
      return ie(Ee).toLocaleLowerCase().startsWith(v.target.value.toLocaleLowerCase());
    })), C(V), o.onChange && o.onChange({
      originalEvent: v.originalEvent,
      value: v.target.value,
      stopPropagation: function() {
        v.originalEvent.stopPropagation();
      },
      preventDefault: function() {
        v.originalEvent.preventDefault();
      },
      target: {
        name: o.name,
        id: o.id,
        value: v.target.value
      }
    });
  }, N = function(v) {
    m(!0), E(), o.onFocus && o.onFocus(v);
  }, G = function(v) {
    var V = v.option;
    V.disabled || (Pt(v), A.focus(R.current)), E();
  }, ee = function(v) {
    var V = v.target.value;
    s(V), o.onFilter && o.onFilter({
      originalEvent: v,
      filter: V
    });
  }, ye = function(v) {
    Be(v);
  }, Be = function(v) {
    s(""), o.onFilter && o.onFilter({
      filter: ""
    }), v && v();
  }, Qe = function(v) {
    o.onChange && o.onChange({
      originalEvent: v,
      value: void 0,
      stopPropagation: function() {
        v == null || v.stopPropagation();
      },
      preventDefault: function() {
        v == null || v.preventDefault();
      },
      target: {
        name: o.name,
        id: o.id,
        value: void 0
      }
    }), o.filter && Be(), te();
  }, Pt = function(v) {
    if (jt !== v.option) {
      te(v.option), C(-1);
      var V = oe(v.option), Ee = Tt(v.option, wt);
      o.onChange && o.onChange({
        originalEvent: v.originalEvent,
        value: V,
        stopPropagation: function() {
          v.originalEvent.stopPropagation();
        },
        preventDefault: function() {
          v.originalEvent.preventDefault();
        },
        target: {
          name: o.name,
          id: o.id,
          value: V
        }
      }), vt(v.originalEvent, Ee);
    }
  }, zt = function(v) {
    if (v = v || wt, o.value != null && v)
      if (o.optionGroupLabel)
        for (var V = 0; V < v.length; V++) {
          var Ee = Tt(o.value, st(v[V]));
          if (Ee !== -1)
            return {
              group: V,
              option: Ee
            };
        }
      else
        return Tt(o.value, v);
    return -1;
  }, qt = function() {
    return o.optionValue ? null : o.dataKey;
  }, Tt = function(v, V) {
    var Ee = qt();
    return V.findIndex(function(et) {
      return L.equals(v, oe(et), Ee);
    });
  }, Ht = function(v) {
    return L.equals(o.value, oe(v), qt());
  }, p = function() {
    C(g !== -1 ? g : o.autoOptionFocus ? Je() : o.editable ? -1 : rt()), P(!0);
  }, E = function() {
    P(!1), b.current = !1;
  }, H = function() {
    o.editable && !S && b.current === !1 && A.focus(j.current);
  }, de = function(v) {
    Qt.set("overlay", I.current, r && r.autoZIndex || bt.autoZIndex, r && r.zIndex.overlay || bt.zIndex.overlay), A.addStyles(I.current, {
      position: "absolute",
      top: "0",
      left: "0"
    }), k(), v && v();
  }, xe = function(v) {
    v && v(), fe(), o.onShow && o.onShow();
  }, se = function() {
    ve();
  }, q = function() {
    o.filter && o.resetFilterOnHide && Be(), Qt.clear(I.current), o.onHide && o.onHide();
  }, k = function() {
    A.alignOverlay(I.current, j.current.parentElement, o.appendTo || r && r.appendTo || bt.appendTo);
  }, W = function() {
    var v = A.findSingle(I.current, 'li[data-p-focused="true"]');
    if (v && v.scrollIntoView)
      v.scrollIntoView({
        block: "nearest",
        inline: "nearest"
      });
    else {
      var V = A.findSingle(I.current, 'li[data-p-highlight="true"]');
      V && V.scrollIntoView && V.scrollIntoView({
        block: "nearest",
        inline: "nearest"
      });
    }
  }, te = function(v) {
    j.current && (j.current.value = v ? ie(v) : o.value || "", R.current && (R.current.value = j.current.value));
  }, ie = function(v) {
    if (L.isScalar(v))
      return "".concat(v);
    var V = o.optionLabel ? L.resolveFieldData(v, o.optionLabel) : v.label;
    return "".concat(V);
  }, oe = function(v) {
    if (o.useOptionAsValue)
      return v;
    var V = o.optionValue ? L.resolveFieldData(v, o.optionValue) : v ? v.value : L.resolveFieldData(v, "value");
    return o.optionValue || L.isNotEmpty(V) ? V : v;
  }, me = function(v) {
    return o.dataKey ? L.resolveFieldData(v, o.dataKey) : ie(v);
  }, De = function(v) {
    return o.optionGroupLabel && v.optionGroup && v.group;
  }, Oe = function(v) {
    return o.optionDisabled ? L.isFunction(o.optionDisabled) ? o.optionDisabled(v) : L.resolveFieldData(v, o.optionDisabled) : v && v.disabled !== void 0 ? v.disabled : !1;
  }, Ye = function(v) {
    return L.resolveFieldData(v, o.optionGroupLabel);
  }, mt = function(v) {
    return L.resolveFieldData(v, o.optionGroupLabel);
  }, st = function(v) {
    return L.resolveFieldData(v, o.optionGroupChildren);
  }, St = function() {
    if (o.editable && j.current) {
      var v = jt ? ie(jt) : null, V = v || o.value || "";
      j.current.value = V, R.current && (R.current.value = V);
    }
  }, gt = function() {
    var v = zt(o.options);
    return v !== -1 ? o.optionGroupLabel ? st(o.options[v.group])[v.option] : o.options[v] : null;
  };
  u.useImperativeHandle(t, function() {
    return {
      props: o,
      show: p,
      hide: E,
      clear: Qe,
      focus: function() {
        return A.focus(R.current);
      },
      getElement: function() {
        return T.current;
      },
      getOverlay: function() {
        return I.current;
      },
      getInput: function() {
        return j.current;
      },
      getFocusInput: function() {
        return R.current;
      },
      getVirtualScroller: function() {
        return ne.current;
      }
    };
  }), u.useEffect(function() {
    L.combinedRefs(j, o.inputRef), L.combinedRefs(R, o.focusInputRef);
  }, [j, o.inputRef, R, o.focusInputRef]), Gt(function() {
    o.autoFocus && A.focus(R.current, o.autoFocus), k();
  }), tt(function() {
    S && (o.value || g >= 0) && W();
  }, [S, o.value, g]), tt(function() {
    S && l && o.filter && k();
  }, [S, l, o.filter]), tt(function() {
    ne.current && ne.current.scrollInView(0);
  }, [l]), tt(function() {
    l && (!o.options || o.options.length === 0) && s(""), St(), j.current && (j.current.selectedIndex = 1);
  }), an(function() {
    Qt.clear(I.current);
  });
  var nr = function() {
    var v = {
      value: "",
      label: o.placeholder
    };
    if (jt) {
      var V = oe(jt);
      v = {
        value: Jn(V) === "object" ? o.options.findIndex(function(Ln) {
          return Ln === V;
        }) : V,
        label: ie(jt)
      };
    }
    var Ee = e({
      className: "p-hidden-accessible p-dropdown-hidden-select"
    }, Z("hiddenSelectedMessage")), et = e({
      ref: j,
      required: o.required,
      defaultValue: v.value,
      name: o.name,
      tabIndex: -1,
      "aria-hidden": "true"
    }, Z("select")), ht = e({
      value: v.value
    }, Z("option"));
    return /* @__PURE__ */ u.createElement("div", Ee, /* @__PURE__ */ u.createElement("select", et, /* @__PURE__ */ u.createElement("option", ht, v.label)));
  }, rr = function() {
    var v = L.isNotEmpty(jt) ? ie(jt) : null;
    o.editable && (v = v || o.value || "");
    var V = e({
      className: "p-hidden-accessible"
    }, Z("hiddenSelectedMessage")), Ee = e(un({
      ref: R,
      id: o.inputId,
      defaultValue: v,
      type: "text",
      readOnly: !0,
      "aria-haspopup": "listbox",
      onFocus: Ie,
      onBlur: Ne,
      onKeyDown: We,
      disabled: o.disabled,
      tabIndex: o.disabled ? -1 : o.tabIndex || 0
    }, mn), Z("input"));
    return /* @__PURE__ */ u.createElement("div", V, /* @__PURE__ */ u.createElement("input", Ee));
  }, vn = function() {
    var v = L.isNotEmpty(jt) ? ie(jt) : null;
    if (o.editable) {
      var V = v || o.value || "", Ee = e(un({
        ref: j,
        type: "text",
        defaultValue: V,
        className: _("input", {
          label: v
        }),
        disabled: o.disabled,
        placeholder: o.placeholder,
        maxLength: o.maxLength,
        onInput: be,
        onFocus: N,
        onKeyDown: We,
        onBlur: Ne,
        tabIndex: o.disabled ? -1 : o.tabIndex || 0,
        "aria-haspopup": "listbox"
      }, mn), Z("input"));
      return /* @__PURE__ */ u.createElement("input", Ee);
    }
    var et = o.valueTemplate ? L.getJSXElement(o.valueTemplate, jt, o) : v || o.placeholder || o.emptyMessage || /* @__PURE__ */ u.createElement(u.Fragment, null, " "), ht = e({
      ref: j,
      className: _("input", {
        label: v
      }),
      tabIndex: "-1"
    }, Z("input"));
    return /* @__PURE__ */ u.createElement("span", ht, et);
  }, Gr = function(v) {
    (v.key === "Enter" || v.code === "Space") && (Qe(v), v.preventDefault());
  }, or = function() {
    if (o.value != null && o.showClear && !o.disabled && !L.isEmpty(o.options)) {
      var v = e({
        className: _("clearIcon"),
        onPointerUp: Qe,
        tabIndex: o.tabIndex || "0",
        onKeyDown: Gr,
        "aria-label": Xn("clear")
      }, Z("clearIcon")), V = o.clearIcon || /* @__PURE__ */ u.createElement(Wr, v);
      return Nt.getJSXIcon(V, un({}, v), {
        props: o
      });
    }
    return null;
  }, ar = function() {
    var v = e({
      className: _("loadingIcon"),
      "data-pr-overlay-visible": S
    }, Z("loadingIcon")), V = o.loadingIcon || /* @__PURE__ */ u.createElement(zo, {
      spin: !0
    }), Ee = Nt.getJSXIcon(V, un({}, v), {
      props: o
    }), et = o.placeholder || o.ariaLabel, ht = e({
      className: _("trigger"),
      role: "button",
      "aria-haspopup": "listbox",
      "aria-expanded": S,
      "aria-label": et
    }, Z("trigger"));
    return /* @__PURE__ */ u.createElement("div", ht, Ee);
  }, ir = function() {
    var v = e({
      className: _("dropdownIcon"),
      "data-pr-overlay-visible": S
    }, Z("dropdownIcon")), V = S ? o.collapseIcon || /* @__PURE__ */ u.createElement(as, v) : o.dropdownIcon || /* @__PURE__ */ u.createElement(si, v), Ee = Nt.getJSXIcon(V, un({}, v), {
      props: o
    }), et = o.placeholder || o.ariaLabel, ht = e({
      className: _("trigger"),
      role: "button",
      "aria-haspopup": "listbox",
      "aria-expanded": S,
      "aria-label": et
    }, Z("trigger"));
    return /* @__PURE__ */ u.createElement("div", ht, Ee);
  }, wt = K(), jt = gt(), Ct = L.isNotEmpty(o.tooltip), Wt = no.getOtherProps(o), mn = L.reduceKeys(Wt, A.ARIA_PROPS), Nn = nr(), Jt = rr(), sn = vn(), Cn = o.loading ? ar() : ir(), cc = or(), uc = e({
    id: o.id,
    ref: T,
    className: we(o.className, _("root", {
      context: r,
      focusedState: f,
      overlayVisibleState: S
    })),
    style: o.style,
    onClick: function(v) {
      return M(v);
    },
    onMouseDown: o.onMouseDown,
    onContextMenu: o.onContextMenu,
    onFocus: H,
    "data-p-disabled": o.disabled,
    "data-p-focus": f,
    "aria-activedescendant": f ? "dropdownItem_".concat(g) : void 0
  }, Wt, Z("root")), dc = e({
    ref: U,
    role: "presentation",
    "aria-hidden": "true",
    className: "p-hidden-accessible p-hidden-focusable",
    tabIndex: "0",
    onFocus: D,
    "data-p-hidden-accessible": !0,
    "data-p-hidden-focusable": !0
  }, Z("hiddenFirstFocusableEl")), fc = e({
    ref: $,
    role: "presentation",
    "aria-hidden": "true",
    className: "p-hidden-accessible p-hidden-focusable",
    tabIndex: "0",
    onFocus: F,
    "data-p-hidden-accessible": !0,
    "data-p-hidden-focusable": !0
  }, Z("hiddenLastFocusableEl"));
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement("div", uc, Jt, Nn, sn, cc, Cn, /* @__PURE__ */ u.createElement(fs, fn({
    hostName: "Dropdown",
    ref: I,
    visibleOptions: wt,
    virtualScrollerRef: ne
  }, o, {
    appendTo: Se,
    cx: _,
    filterValue: l,
    focusedOptionIndex: g,
    getOptionGroupChildren: st,
    getOptionGroupLabel: mt,
    getOptionGroupRenderKey: Ye,
    getOptionLabel: ie,
    getOptionRenderKey: me,
    getSelectedOptionIndex: zt,
    hasFilter: he,
    in: S,
    isOptionDisabled: Oe,
    isSelected: Ht,
    onClick: Ae,
    onEnter: de,
    onEntered: xe,
    onExit: se,
    onExited: q,
    onFilterClearIconClick: ye,
    onFilterInputChange: ee,
    onFilterInputKeyDown: xt,
    onOptionClick: G,
    onInputKeyDown: We,
    ptm: Z,
    resetFilter: Be,
    changeFocusedOptionIndex: vt,
    firstFocusableElement: /* @__PURE__ */ u.createElement("span", dc),
    lastFocusableElement: /* @__PURE__ */ u.createElement("span", fc),
    sx: J
  }))), Ct && /* @__PURE__ */ u.createElement(Br, fn({
    target: T,
    content: o.tooltip,
    pt: Z("tooltip")
  }, o.tooltipOptions)));
}));
ps.displayName = "Dropdown";
const hf = ({ item: n, onChange: t, config: e }) => {
  const [r, o] = $e({ ...xn, ...n }), [a, i] = $e(r.options);
  Re(() => {
    o({ ...xn, ...n });
  }, [n]), Re(() => {
    if (i(r.options), r.source != "local") {
      const c = e.external_select_options.find((d) => d.key == r.source);
      c && (c.options && i(c.options), c.options_func && c.options_func().then((d) => {
        i(d);
      }));
    }
  }, [r.source, r.options]);
  const l = (c) => {
    const d = { ...xn, ...n, value: c.target.value };
    t(d);
  }, s = Math.random().toString(36).substring(2, 15);
  return /* @__PURE__ */ O.jsx(O.Fragment, { children: /* @__PURE__ */ O.jsxs("div", { className: "flex flex-column gap-2", children: [
    /* @__PURE__ */ O.jsx("label", { htmlFor: s, children: r.label }),
    /* @__PURE__ */ O.jsx(
      ps,
      {
        id: s,
        value: r.value || "",
        onChange: l,
        options: a,
        showClear: !0,
        placeholder: r.placeholder || "",
        className: "w-full",
        children: " "
      }
    )
  ] }) });
}, bf = (n) => ({});
var dl;
function Ha() {
  return Ha = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var r in e) ({}).hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, Ha.apply(null, arguments);
}
var yf = function(t) {
  return /* @__PURE__ */ u.createElement("svg", Ha({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, t), dl || (dl = /* @__PURE__ */ u.createElement("path", {
    d: "M384 432c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16zm64-16c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64zm-224-64c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4h208c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7"
  })));
};
function Dn(n) {
  return JSON.parse(JSON.stringify(n));
}
function wf() {
  for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++)
    t[e] = arguments[e];
  return Ze(
    () => (r) => {
      t.forEach((o) => o(r));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  );
}
const Bo = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Qn(n) {
  const t = Object.prototype.toString.call(n);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function ui(n) {
  return "nodeType" in n;
}
function Bt(n) {
  var t, e;
  return n ? Qn(n) ? n : ui(n) && (t = (e = n.ownerDocument) == null ? void 0 : e.defaultView) != null ? t : window : window;
}
function di(n) {
  const {
    Document: t
  } = Bt(n);
  return n instanceof t;
}
function Vr(n) {
  return Qn(n) ? !1 : n instanceof Bt(n).HTMLElement;
}
function vs(n) {
  return n instanceof Bt(n).SVGElement;
}
function er(n) {
  return n ? Qn(n) ? n.document : ui(n) ? di(n) ? n : Vr(n) || vs(n) ? n.ownerDocument : document : document : document;
}
const Yt = Bo ? vc : Re;
function Wo(n) {
  const t = Xe(n);
  return Yt(() => {
    t.current = n;
  }), Lt(function() {
    for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function xf() {
  const n = Xe(null), t = Lt((r, o) => {
    n.current = setInterval(r, o);
  }, []), e = Lt(() => {
    n.current !== null && (clearInterval(n.current), n.current = null);
  }, []);
  return [t, e];
}
function kr(n, t) {
  t === void 0 && (t = [n]);
  const e = Xe(n);
  return Yt(() => {
    e.current !== n && (e.current = n);
  }, t), e;
}
function Kr(n, t) {
  const e = Xe();
  return Ze(
    () => {
      const r = n(e.current);
      return e.current = r, r;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
function Oo(n) {
  const t = Wo(n), e = Xe(null), r = Lt(
    (o) => {
      o !== e.current && (t == null || t(o, e.current)), e.current = o;
    },
    //eslint-disable-next-line
    []
  );
  return [e, r];
}
function Po(n) {
  const t = Xe();
  return Re(() => {
    t.current = n;
  }, [n]), t.current;
}
let ca = {};
function Ur(n, t) {
  return Ze(() => {
    if (t)
      return t;
    const e = ca[n] == null ? 0 : ca[n] + 1;
    return ca[n] = e, n + "-" + e;
  }, [n, t]);
}
function ms(n) {
  return function(t) {
    for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++)
      r[o - 1] = arguments[o];
    return r.reduce((a, i) => {
      const l = Object.entries(i);
      for (const [s, c] of l) {
        const d = a[s];
        d != null && (a[s] = d + n * c);
      }
      return a;
    }, {
      ...t
    });
  };
}
const Kn = /* @__PURE__ */ ms(1), Dr = /* @__PURE__ */ ms(-1);
function Ef(n) {
  return "clientX" in n && "clientY" in n;
}
function Vo(n) {
  if (!n)
    return !1;
  const {
    KeyboardEvent: t
  } = Bt(n.target);
  return t && n instanceof t;
}
function Sf(n) {
  if (!n)
    return !1;
  const {
    TouchEvent: t
  } = Bt(n.target);
  return t && n instanceof t;
}
function qo(n) {
  if (Sf(n)) {
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
  return Ef(n) ? {
    x: n.clientX,
    y: n.clientY
  } : null;
}
const on = /* @__PURE__ */ Object.freeze({
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
        return [on.Translate.toString(n), on.Scale.toString(n)].join(" ");
    }
  },
  Transition: {
    toString(n) {
      let {
        property: t,
        duration: e,
        easing: r
      } = n;
      return t + " " + e + "ms " + r;
    }
  }
}), fl = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function Cf(n) {
  return n.matches(fl) ? n : n.querySelector(fl);
}
const Of = {
  display: "none"
};
function Pf(n) {
  let {
    id: t,
    value: e
  } = n;
  return Te.createElement("div", {
    id: t,
    style: Of
  }, e);
}
function qf(n) {
  let {
    id: t,
    announcement: e,
    ariaLiveType: r = "assertive"
  } = n;
  const o = {
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
  return Te.createElement("div", {
    id: t,
    style: o,
    role: "status",
    "aria-live": r,
    "aria-atomic": !0
  }, e);
}
function Tf() {
  const [n, t] = $e("");
  return {
    announce: Lt((r) => {
      r != null && t(r);
    }, []),
    announcement: n
  };
}
const gs = /* @__PURE__ */ Mr(null);
function If(n) {
  const t = nn(gs);
  Re(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(n);
  }, [n, t]);
}
function _f() {
  const [n] = $e(() => /* @__PURE__ */ new Set()), t = Lt((r) => (n.add(r), () => n.delete(r)), [n]);
  return [Lt((r) => {
    let {
      type: o,
      event: a
    } = r;
    n.forEach((i) => {
      var l;
      return (l = i[o]) == null ? void 0 : l.call(i, a);
    });
  }, [n]), t];
}
const Rf = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, kf = {
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
function Df(n) {
  let {
    announcements: t = kf,
    container: e,
    hiddenTextDescribedById: r,
    screenReaderInstructions: o = Rf
  } = n;
  const {
    announce: a,
    announcement: i
  } = Tf(), l = Ur("DndLiveRegion"), [s, c] = $e(!1);
  if (Re(() => {
    c(!0);
  }, []), If(Ze(() => ({
    onDragStart(f) {
      let {
        active: m
      } = f;
      a(t.onDragStart({
        active: m
      }));
    },
    onDragMove(f) {
      let {
        active: m,
        over: h
      } = f;
      t.onDragMove && a(t.onDragMove({
        active: m,
        over: h
      }));
    },
    onDragOver(f) {
      let {
        active: m,
        over: h
      } = f;
      a(t.onDragOver({
        active: m,
        over: h
      }));
    },
    onDragEnd(f) {
      let {
        active: m,
        over: h
      } = f;
      a(t.onDragEnd({
        active: m,
        over: h
      }));
    },
    onDragCancel(f) {
      let {
        active: m,
        over: h
      } = f;
      a(t.onDragCancel({
        active: m,
        over: h
      }));
    }
  }), [a, t])), !s)
    return null;
  const d = Te.createElement(Te.Fragment, null, Te.createElement(Pf, {
    id: r,
    value: o.draggable
  }), Te.createElement(qf, {
    id: l,
    announcement: i
  }));
  return e ? bc(d, e) : d;
}
var Ot;
(function(n) {
  n.DragStart = "dragStart", n.DragMove = "dragMove", n.DragEnd = "dragEnd", n.DragCancel = "dragCancel", n.DragOver = "dragOver", n.RegisterDroppable = "registerDroppable", n.SetDroppableDisabled = "setDroppableDisabled", n.UnregisterDroppable = "unregisterDroppable";
})(Ot || (Ot = {}));
function To() {
}
function Io(n, t) {
  return Ze(
    () => ({
      sensor: n,
      options: t ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, t]
  );
}
function hs() {
  for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++)
    t[e] = arguments[e];
  return Ze(
    () => [...t].filter((r) => r != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
const tn = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function bs(n, t) {
  return Math.sqrt(Math.pow(n.x - t.x, 2) + Math.pow(n.y - t.y, 2));
}
function jf(n, t) {
  const e = qo(n);
  if (!e)
    return "0 0";
  const r = {
    x: (e.x - t.left) / t.width * 100,
    y: (e.y - t.top) / t.height * 100
  };
  return r.x + "% " + r.y + "%";
}
function ys(n, t) {
  let {
    data: {
      value: e
    }
  } = n, {
    data: {
      value: r
    }
  } = t;
  return e - r;
}
function Af(n, t) {
  let {
    data: {
      value: e
    }
  } = n, {
    data: {
      value: r
    }
  } = t;
  return r - e;
}
function pl(n) {
  let {
    left: t,
    top: e,
    height: r,
    width: o
  } = n;
  return [{
    x: t,
    y: e
  }, {
    x: t + o,
    y: e
  }, {
    x: t,
    y: e + r
  }, {
    x: t + o,
    y: e + r
  }];
}
function ws(n, t) {
  if (!n || n.length === 0)
    return null;
  const [e] = n;
  return e[t];
}
function vl(n, t, e) {
  return t === void 0 && (t = n.left), e === void 0 && (e = n.top), {
    x: t + n.width * 0.5,
    y: e + n.height * 0.5
  };
}
const xs = (n) => {
  let {
    collisionRect: t,
    droppableRects: e,
    droppableContainers: r
  } = n;
  const o = vl(t, t.left, t.top), a = [];
  for (const i of r) {
    const {
      id: l
    } = i, s = e.get(l);
    if (s) {
      const c = bs(vl(s), o);
      a.push({
        id: l,
        data: {
          droppableContainer: i,
          value: c
        }
      });
    }
  }
  return a.sort(ys);
}, Nf = (n) => {
  let {
    collisionRect: t,
    droppableRects: e,
    droppableContainers: r
  } = n;
  const o = pl(t), a = [];
  for (const i of r) {
    const {
      id: l
    } = i, s = e.get(l);
    if (s) {
      const c = pl(s), d = o.reduce((m, h, x) => m + bs(c[x], h), 0), f = Number((d / 4).toFixed(4));
      a.push({
        id: l,
        data: {
          droppableContainer: i,
          value: f
        }
      });
    }
  }
  return a.sort(ys);
};
function Lf(n, t) {
  const e = Math.max(t.top, n.top), r = Math.max(t.left, n.left), o = Math.min(t.left + t.width, n.left + n.width), a = Math.min(t.top + t.height, n.top + n.height), i = o - r, l = a - e;
  if (r < o && e < a) {
    const s = t.width * t.height, c = n.width * n.height, d = i * l, f = d / (s + c - d);
    return Number(f.toFixed(4));
  }
  return 0;
}
const $f = (n) => {
  let {
    collisionRect: t,
    droppableRects: e,
    droppableContainers: r
  } = n;
  const o = [];
  for (const a of r) {
    const {
      id: i
    } = a, l = e.get(i);
    if (l) {
      const s = Lf(l, t);
      s > 0 && o.push({
        id: i,
        data: {
          droppableContainer: a,
          value: s
        }
      });
    }
  }
  return o.sort(Af);
};
function Ff(n, t, e) {
  return {
    ...n,
    scaleX: t && e ? t.width / e.width : 1,
    scaleY: t && e ? t.height / e.height : 1
  };
}
function Es(n, t) {
  return n && t ? {
    x: n.left - t.left,
    y: n.top - t.top
  } : tn;
}
function Mf(n) {
  return function(e) {
    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      o[a - 1] = arguments[a];
    return o.reduce((i, l) => ({
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
const zf = /* @__PURE__ */ Mf(1);
function Ss(n) {
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
function Hf(n, t, e) {
  const r = Ss(t);
  if (!r)
    return n;
  const {
    scaleX: o,
    scaleY: a,
    x: i,
    y: l
  } = r, s = n.left - i - (1 - o) * parseFloat(e), c = n.top - l - (1 - a) * parseFloat(e.slice(e.indexOf(" ") + 1)), d = o ? n.width / o : n.width, f = a ? n.height / a : n.height;
  return {
    width: d,
    height: f,
    top: c,
    right: s + d,
    bottom: c + f,
    left: s
  };
}
const Bf = {
  ignoreTransform: !1
};
function tr(n, t) {
  t === void 0 && (t = Bf);
  let e = n.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      transform: c,
      transformOrigin: d
    } = Bt(n).getComputedStyle(n);
    c && (e = Hf(e, c, d));
  }
  const {
    top: r,
    left: o,
    width: a,
    height: i,
    bottom: l,
    right: s
  } = e;
  return {
    top: r,
    left: o,
    width: a,
    height: i,
    bottom: l,
    right: s
  };
}
function ml(n) {
  return tr(n, {
    ignoreTransform: !0
  });
}
function Wf(n) {
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
function Vf(n, t) {
  return t === void 0 && (t = Bt(n).getComputedStyle(n)), t.position === "fixed";
}
function Kf(n, t) {
  t === void 0 && (t = Bt(n).getComputedStyle(n));
  const e = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((o) => {
    const a = t[o];
    return typeof a == "string" ? e.test(a) : !1;
  });
}
function Ko(n, t) {
  const e = [];
  function r(o) {
    if (t != null && e.length >= t || !o)
      return e;
    if (di(o) && o.scrollingElement != null && !e.includes(o.scrollingElement))
      return e.push(o.scrollingElement), e;
    if (!Vr(o) || vs(o) || e.includes(o))
      return e;
    const a = Bt(n).getComputedStyle(o);
    return o !== n && Kf(o, a) && e.push(o), Vf(o, a) ? e : r(o.parentNode);
  }
  return n ? r(n) : e;
}
function Cs(n) {
  const [t] = Ko(n, 1);
  return t ?? null;
}
function ua(n) {
  return !Bo || !n ? null : Qn(n) ? n : ui(n) ? di(n) || n === er(n).scrollingElement ? window : Vr(n) ? n : null : null;
}
function Os(n) {
  return Qn(n) ? n.scrollX : n.scrollLeft;
}
function Ps(n) {
  return Qn(n) ? n.scrollY : n.scrollTop;
}
function Ba(n) {
  return {
    x: Os(n),
    y: Ps(n)
  };
}
var _t;
(function(n) {
  n[n.Forward = 1] = "Forward", n[n.Backward = -1] = "Backward";
})(_t || (_t = {}));
function qs(n) {
  return !Bo || !n ? !1 : n === document.scrollingElement;
}
function Ts(n) {
  const t = {
    x: 0,
    y: 0
  }, e = qs(n) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: n.clientHeight,
    width: n.clientWidth
  }, r = {
    x: n.scrollWidth - e.width,
    y: n.scrollHeight - e.height
  }, o = n.scrollTop <= t.y, a = n.scrollLeft <= t.x, i = n.scrollTop >= r.y, l = n.scrollLeft >= r.x;
  return {
    isTop: o,
    isLeft: a,
    isBottom: i,
    isRight: l,
    maxScroll: r,
    minScroll: t
  };
}
const Uf = {
  x: 0.2,
  y: 0.2
};
function Yf(n, t, e, r, o) {
  let {
    top: a,
    left: i,
    right: l,
    bottom: s
  } = e;
  r === void 0 && (r = 10), o === void 0 && (o = Uf);
  const {
    isTop: c,
    isBottom: d,
    isLeft: f,
    isRight: m
  } = Ts(n), h = {
    x: 0,
    y: 0
  }, x = {
    x: 0,
    y: 0
  }, g = {
    height: t.height * o.y,
    width: t.width * o.x
  };
  return !c && a <= t.top + g.height ? (h.y = _t.Backward, x.y = r * Math.abs((t.top + g.height - a) / g.height)) : !d && s >= t.bottom - g.height && (h.y = _t.Forward, x.y = r * Math.abs((t.bottom - g.height - s) / g.height)), !m && l >= t.right - g.width ? (h.x = _t.Forward, x.x = r * Math.abs((t.right - g.width - l) / g.width)) : !f && i <= t.left + g.width && (h.x = _t.Backward, x.x = r * Math.abs((t.left + g.width - i) / g.width)), {
    direction: h,
    speed: x
  };
}
function Gf(n) {
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
    right: r,
    bottom: o
  } = n.getBoundingClientRect();
  return {
    top: t,
    left: e,
    right: r,
    bottom: o,
    width: n.clientWidth,
    height: n.clientHeight
  };
}
function Is(n) {
  return n.reduce((t, e) => Kn(t, Ba(e)), tn);
}
function Xf(n) {
  return n.reduce((t, e) => t + Os(e), 0);
}
function Jf(n) {
  return n.reduce((t, e) => t + Ps(e), 0);
}
function _s(n, t) {
  if (t === void 0 && (t = tr), !n)
    return;
  const {
    top: e,
    left: r,
    bottom: o,
    right: a
  } = t(n);
  Cs(n) && (o <= 0 || a <= 0 || e >= window.innerHeight || r >= window.innerWidth) && n.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const Zf = [["x", ["left", "right"], Xf], ["y", ["top", "bottom"], Jf]];
class fi {
  constructor(t, e) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = Ko(e), o = Is(r);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [a, i, l] of Zf)
      for (const s of i)
        Object.defineProperty(this, s, {
          get: () => {
            const c = l(r), d = o[a] - c;
            return this.rect[s] + d;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class gr {
  constructor(t) {
    this.target = void 0, this.listeners = [], this.removeAll = () => {
      this.listeners.forEach((e) => {
        var r;
        return (r = this.target) == null ? void 0 : r.removeEventListener(...e);
      });
    }, this.target = t;
  }
  add(t, e, r) {
    var o;
    (o = this.target) == null || o.addEventListener(t, e, r), this.listeners.push([t, e, r]);
  }
}
function Qf(n) {
  const {
    EventTarget: t
  } = Bt(n);
  return n instanceof t ? n : er(n);
}
function da(n, t) {
  const e = Math.abs(n.x), r = Math.abs(n.y);
  return typeof t == "number" ? Math.sqrt(e ** 2 + r ** 2) > t : "x" in t && "y" in t ? e > t.x && r > t.y : "x" in t ? e > t.x : "y" in t ? r > t.y : !1;
}
var Ut;
(function(n) {
  n.Click = "click", n.DragStart = "dragstart", n.Keydown = "keydown", n.ContextMenu = "contextmenu", n.Resize = "resize", n.SelectionChange = "selectionchange", n.VisibilityChange = "visibilitychange";
})(Ut || (Ut = {}));
function gl(n) {
  n.preventDefault();
}
function ep(n) {
  n.stopPropagation();
}
var ze;
(function(n) {
  n.Space = "Space", n.Down = "ArrowDown", n.Right = "ArrowRight", n.Left = "ArrowLeft", n.Up = "ArrowUp", n.Esc = "Escape", n.Enter = "Enter";
})(ze || (ze = {}));
const Rs = {
  start: [ze.Space, ze.Enter],
  cancel: [ze.Esc],
  end: [ze.Space, ze.Enter]
}, tp = (n, t) => {
  let {
    currentCoordinates: e
  } = t;
  switch (n.code) {
    case ze.Right:
      return {
        ...e,
        x: e.x + 25
      };
    case ze.Left:
      return {
        ...e,
        x: e.x - 25
      };
    case ze.Down:
      return {
        ...e,
        y: e.y + 25
      };
    case ze.Up:
      return {
        ...e,
        y: e.y - 25
      };
  }
};
class Uo {
  constructor(t) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
    const {
      event: {
        target: e
      }
    } = t;
    this.props = t, this.listeners = new gr(er(e)), this.windowListeners = new gr(Bt(e)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(Ut.Resize, this.handleCancel), this.windowListeners.add(Ut.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(Ut.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: e
    } = this.props, r = t.node.current;
    r && _s(r), e(tn);
  }
  handleKeyDown(t) {
    if (Vo(t)) {
      const {
        active: e,
        context: r,
        options: o
      } = this.props, {
        keyboardCodes: a = Rs,
        coordinateGetter: i = tp,
        scrollBehavior: l = "smooth"
      } = o, {
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
      } = r.current, d = c ? {
        x: c.left,
        y: c.top
      } : tn;
      this.referenceCoordinates || (this.referenceCoordinates = d);
      const f = i(t, {
        active: e,
        context: r.current,
        currentCoordinates: d
      });
      if (f) {
        const m = Dr(f, d), h = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: x
        } = r.current;
        for (const g of x) {
          const C = t.code, {
            isTop: y,
            isRight: w,
            isLeft: S,
            isBottom: P,
            maxScroll: b,
            minScroll: T
          } = Ts(g), I = Gf(g), U = {
            x: Math.min(C === ze.Right ? I.right - I.width / 2 : I.right, Math.max(C === ze.Right ? I.left : I.left + I.width / 2, f.x)),
            y: Math.min(C === ze.Down ? I.bottom - I.height / 2 : I.bottom, Math.max(C === ze.Down ? I.top : I.top + I.height / 2, f.y))
          }, $ = C === ze.Right && !w || C === ze.Left && !S, j = C === ze.Down && !P || C === ze.Up && !y;
          if ($ && U.x !== f.x) {
            const R = g.scrollLeft + m.x, ne = C === ze.Right && R <= b.x || C === ze.Left && R >= T.x;
            if (ne && !m.y) {
              g.scrollTo({
                left: R,
                behavior: l
              });
              return;
            }
            ne ? h.x = g.scrollLeft - R : h.x = C === ze.Right ? g.scrollLeft - b.x : g.scrollLeft - T.x, h.x && g.scrollBy({
              left: -h.x,
              behavior: l
            });
            break;
          } else if (j && U.y !== f.y) {
            const R = g.scrollTop + m.y, ne = C === ze.Down && R <= b.y || C === ze.Up && R >= T.y;
            if (ne && !m.x) {
              g.scrollTo({
                top: R,
                behavior: l
              });
              return;
            }
            ne ? h.y = g.scrollTop - R : h.y = C === ze.Down ? g.scrollTop - b.y : g.scrollTop - T.y, h.y && g.scrollBy({
              top: -h.y,
              behavior: l
            });
            break;
          }
        }
        this.handleMove(t, Kn(Dr(f, this.referenceCoordinates), h));
      }
    }
  }
  handleMove(t, e) {
    const {
      onMove: r
    } = this.props;
    t.preventDefault(), r(e);
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
Uo.activators = [{
  eventName: "onKeyDown",
  handler: (n, t, e) => {
    let {
      keyboardCodes: r = Rs,
      onActivation: o
    } = t, {
      active: a
    } = e;
    const {
      code: i
    } = n.nativeEvent;
    if (r.start.includes(i)) {
      const l = a.activatorNode.current;
      return l && n.target !== l ? !1 : (n.preventDefault(), o == null || o({
        event: n.nativeEvent
      }), !0);
    }
    return !1;
  }
}];
function hl(n) {
  return !!(n && "distance" in n);
}
function bl(n) {
  return !!(n && "delay" in n);
}
class pi {
  constructor(t, e, r) {
    var o;
    r === void 0 && (r = Qf(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = e;
    const {
      event: a
    } = t, {
      target: i
    } = a;
    this.props = t, this.events = e, this.document = er(i), this.documentListeners = new gr(this.document), this.listeners = new gr(r), this.windowListeners = new gr(Bt(i)), this.initialCoordinates = (o = qo(a)) != null ? o : tn, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
  }
  attach() {
    const {
      events: t,
      props: {
        options: {
          activationConstraint: e,
          bypassActivationConstraint: r
        }
      }
    } = this;
    if (this.listeners.add(t.move.name, this.handleMove, {
      passive: !1
    }), this.listeners.add(t.end.name, this.handleEnd), this.windowListeners.add(Ut.Resize, this.handleCancel), this.windowListeners.add(Ut.DragStart, gl), this.windowListeners.add(Ut.VisibilityChange, this.handleCancel), this.windowListeners.add(Ut.ContextMenu, gl), this.documentListeners.add(Ut.Keydown, this.handleKeydown), e) {
      if (r != null && r({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (bl(e)) {
        this.timeoutId = setTimeout(this.handleStart, e.delay);
        return;
      }
      if (hl(e))
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
    t && (this.activated = !0, this.documentListeners.add(Ut.Click, ep, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(Ut.SelectionChange, this.removeTextSelection), e(t));
  }
  handleMove(t) {
    var e;
    const {
      activated: r,
      initialCoordinates: o,
      props: a
    } = this, {
      onMove: i,
      options: {
        activationConstraint: l
      }
    } = a;
    if (!o)
      return;
    const s = (e = qo(t)) != null ? e : tn, c = Dr(o, s);
    if (!r && l) {
      if (hl(l)) {
        if (l.tolerance != null && da(c, l.tolerance))
          return this.handleCancel();
        if (da(c, l.distance))
          return this.handleStart();
      }
      return bl(l) && da(c, l.tolerance) ? this.handleCancel() : void 0;
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
    t.code === ze.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const np = {
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};
class Yo extends pi {
  constructor(t) {
    const {
      event: e
    } = t, r = er(e.target);
    super(t, np, r);
  }
}
Yo.activators = [{
  eventName: "onPointerDown",
  handler: (n, t) => {
    let {
      nativeEvent: e
    } = n, {
      onActivation: r
    } = t;
    return !e.isPrimary || e.button !== 0 ? !1 : (r == null || r({
      event: e
    }), !0);
  }
}];
const rp = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var Wa;
(function(n) {
  n[n.RightClick = 2] = "RightClick";
})(Wa || (Wa = {}));
class op extends pi {
  constructor(t) {
    super(t, rp, er(t.event.target));
  }
}
op.activators = [{
  eventName: "onMouseDown",
  handler: (n, t) => {
    let {
      nativeEvent: e
    } = n, {
      onActivation: r
    } = t;
    return e.button === Wa.RightClick ? !1 : (r == null || r({
      event: e
    }), !0);
  }
}];
const fa = {
  move: {
    name: "touchmove"
  },
  end: {
    name: "touchend"
  }
};
class ap extends pi {
  constructor(t) {
    super(t, fa);
  }
  static setup() {
    return window.addEventListener(fa.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(fa.move.name, t);
    };
    function t() {
    }
  }
}
ap.activators = [{
  eventName: "onTouchStart",
  handler: (n, t) => {
    let {
      nativeEvent: e
    } = n, {
      onActivation: r
    } = t;
    const {
      touches: o
    } = e;
    return o.length > 1 ? !1 : (r == null || r({
      event: e
    }), !0);
  }
}];
var hr;
(function(n) {
  n[n.Pointer = 0] = "Pointer", n[n.DraggableRect = 1] = "DraggableRect";
})(hr || (hr = {}));
var _o;
(function(n) {
  n[n.TreeOrder = 0] = "TreeOrder", n[n.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(_o || (_o = {}));
function ip(n) {
  let {
    acceleration: t,
    activator: e = hr.Pointer,
    canScroll: r,
    draggingRect: o,
    enabled: a,
    interval: i = 5,
    order: l = _o.TreeOrder,
    pointerCoordinates: s,
    scrollableAncestors: c,
    scrollableAncestorRects: d,
    delta: f,
    threshold: m
  } = n;
  const h = sp({
    delta: f,
    disabled: !a
  }), [x, g] = xf(), C = Xe({
    x: 0,
    y: 0
  }), y = Xe({
    x: 0,
    y: 0
  }), w = Ze(() => {
    switch (e) {
      case hr.Pointer:
        return s ? {
          top: s.y,
          bottom: s.y,
          left: s.x,
          right: s.x
        } : null;
      case hr.DraggableRect:
        return o;
    }
  }, [e, o, s]), S = Xe(null), P = Lt(() => {
    const T = S.current;
    if (!T)
      return;
    const I = C.current.x * y.current.x, U = C.current.y * y.current.y;
    T.scrollBy(I, U);
  }, []), b = Ze(() => l === _o.TreeOrder ? [...c].reverse() : c, [l, c]);
  Re(
    () => {
      if (!a || !c.length || !w) {
        g();
        return;
      }
      for (const T of b) {
        if ((r == null ? void 0 : r(T)) === !1)
          continue;
        const I = c.indexOf(T), U = d[I];
        if (!U)
          continue;
        const {
          direction: $,
          speed: j
        } = Yf(T, U, w, t, m);
        for (const R of ["x", "y"])
          h[R][$[R]] || (j[R] = 0, $[R] = 0);
        if (j.x > 0 || j.y > 0) {
          g(), S.current = T, x(P, i), C.current = j, y.current = $;
          return;
        }
      }
      C.current = {
        x: 0,
        y: 0
      }, y.current = {
        x: 0,
        y: 0
      }, g();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      t,
      P,
      r,
      g,
      a,
      i,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(w),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(h),
      x,
      c,
      b,
      d,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(m)
    ]
  );
}
const lp = {
  x: {
    [_t.Backward]: !1,
    [_t.Forward]: !1
  },
  y: {
    [_t.Backward]: !1,
    [_t.Forward]: !1
  }
};
function sp(n) {
  let {
    delta: t,
    disabled: e
  } = n;
  const r = Po(t);
  return Kr((o) => {
    if (e || !r || !o)
      return lp;
    const a = {
      x: Math.sign(t.x - r.x),
      y: Math.sign(t.y - r.y)
    };
    return {
      x: {
        [_t.Backward]: o.x[_t.Backward] || a.x === -1,
        [_t.Forward]: o.x[_t.Forward] || a.x === 1
      },
      y: {
        [_t.Backward]: o.y[_t.Backward] || a.y === -1,
        [_t.Forward]: o.y[_t.Forward] || a.y === 1
      }
    };
  }, [e, t, r]);
}
function cp(n, t) {
  const e = t !== null ? n.get(t) : void 0, r = e ? e.node.current : null;
  return Kr((o) => {
    var a;
    return t === null ? null : (a = r ?? o) != null ? a : null;
  }, [r, t]);
}
function up(n, t) {
  return Ze(() => n.reduce((e, r) => {
    const {
      sensor: o
    } = r, a = o.activators.map((i) => ({
      eventName: i.eventName,
      handler: t(i.handler, r)
    }));
    return [...e, ...a];
  }, []), [n, t]);
}
var jr;
(function(n) {
  n[n.Always = 0] = "Always", n[n.BeforeDragging = 1] = "BeforeDragging", n[n.WhileDragging = 2] = "WhileDragging";
})(jr || (jr = {}));
var Va;
(function(n) {
  n.Optimized = "optimized";
})(Va || (Va = {}));
const yl = /* @__PURE__ */ new Map();
function dp(n, t) {
  let {
    dragging: e,
    dependencies: r,
    config: o
  } = t;
  const [a, i] = $e(null), {
    frequency: l,
    measure: s,
    strategy: c
  } = o, d = Xe(n), f = C(), m = kr(f), h = Lt(function(y) {
    y === void 0 && (y = []), !m.current && i((w) => w === null ? y : w.concat(y.filter((S) => !w.includes(S))));
  }, [m]), x = Xe(null), g = Kr((y) => {
    if (f && !e)
      return yl;
    if (!y || y === yl || d.current !== n || a != null) {
      const w = /* @__PURE__ */ new Map();
      for (let S of n) {
        if (!S)
          continue;
        if (a && a.length > 0 && !a.includes(S.id) && S.rect.current) {
          w.set(S.id, S.rect.current);
          continue;
        }
        const P = S.node.current, b = P ? new fi(s(P), P) : null;
        S.rect.current = b, b && w.set(S.id, b);
      }
      return w;
    }
    return y;
  }, [n, a, e, f, s]);
  return Re(() => {
    d.current = n;
  }, [n]), Re(
    () => {
      f || h();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, f]
  ), Re(
    () => {
      a && a.length > 0 && i(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(a)]
  ), Re(
    () => {
      f || typeof l != "number" || x.current !== null || (x.current = setTimeout(() => {
        h(), x.current = null;
      }, l));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [l, f, h, ...r]
  ), {
    droppableRects: g,
    measureDroppableContainers: h,
    measuringScheduled: a != null
  };
  function C() {
    switch (c) {
      case jr.Always:
        return !1;
      case jr.BeforeDragging:
        return e;
      default:
        return !e;
    }
  }
}
function vi(n, t) {
  return Kr((e) => n ? e || (typeof t == "function" ? t(n) : n) : null, [t, n]);
}
function fp(n, t) {
  return vi(n, t);
}
function pp(n) {
  let {
    callback: t,
    disabled: e
  } = n;
  const r = Wo(t), o = Ze(() => {
    if (e || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: a
    } = window;
    return new a(r);
  }, [r, e]);
  return Re(() => () => o == null ? void 0 : o.disconnect(), [o]), o;
}
function Go(n) {
  let {
    callback: t,
    disabled: e
  } = n;
  const r = Wo(t), o = Ze(
    () => {
      if (e || typeof window > "u" || typeof window.ResizeObserver > "u")
        return;
      const {
        ResizeObserver: a
      } = window;
      return new a(r);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e]
  );
  return Re(() => () => o == null ? void 0 : o.disconnect(), [o]), o;
}
function vp(n) {
  return new fi(tr(n), n);
}
function wl(n, t, e) {
  t === void 0 && (t = vp);
  const [r, o] = ni(l, null), a = pp({
    callback(s) {
      if (n)
        for (const c of s) {
          const {
            type: d,
            target: f
          } = c;
          if (d === "childList" && f instanceof HTMLElement && f.contains(n)) {
            o();
            break;
          }
        }
    }
  }), i = Go({
    callback: o
  });
  return Yt(() => {
    o(), n ? (i == null || i.observe(n), a == null || a.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (i == null || i.disconnect(), a == null || a.disconnect());
  }, [n]), r;
  function l(s) {
    if (!n)
      return null;
    if (n.isConnected === !1) {
      var c;
      return (c = s ?? e) != null ? c : null;
    }
    const d = t(n);
    return JSON.stringify(s) === JSON.stringify(d) ? s : d;
  }
}
function mp(n) {
  const t = vi(n);
  return Es(n, t);
}
const xl = [];
function gp(n) {
  const t = Xe(n), e = Kr((r) => n ? r && r !== xl && n && t.current && n.parentNode === t.current.parentNode ? r : Ko(n) : xl, [n]);
  return Re(() => {
    t.current = n;
  }, [n]), e;
}
function hp(n) {
  const [t, e] = $e(null), r = Xe(n), o = Lt((a) => {
    const i = ua(a.target);
    i && e((l) => l ? (l.set(i, Ba(i)), new Map(l)) : null);
  }, []);
  return Re(() => {
    const a = r.current;
    if (n !== a) {
      i(a);
      const l = n.map((s) => {
        const c = ua(s);
        return c ? (c.addEventListener("scroll", o, {
          passive: !0
        }), [c, Ba(c)]) : null;
      }).filter((s) => s != null);
      e(l.length ? new Map(l) : null), r.current = n;
    }
    return () => {
      i(n), i(a);
    };
    function i(l) {
      l.forEach((s) => {
        const c = ua(s);
        c == null || c.removeEventListener("scroll", o);
      });
    }
  }, [o, n]), Ze(() => n.length ? t ? Array.from(t.values()).reduce((a, i) => Kn(a, i), tn) : Is(n) : tn, [n, t]);
}
function El(n, t) {
  t === void 0 && (t = []);
  const e = Xe(null);
  return Re(
    () => {
      e.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), Re(() => {
    const r = n !== tn;
    r && !e.current && (e.current = n), !r && e.current && (e.current = null);
  }, [n]), e.current ? Dr(n, e.current) : tn;
}
function bp(n) {
  Re(
    () => {
      if (!Bo)
        return;
      const t = n.map((e) => {
        let {
          sensor: r
        } = e;
        return r.setup == null ? void 0 : r.setup();
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
function yp(n, t) {
  return Ze(() => n.reduce((e, r) => {
    let {
      eventName: o,
      handler: a
    } = r;
    return e[o] = (i) => {
      a(i, t);
    }, e;
  }, {}), [n, t]);
}
function ks(n) {
  return Ze(() => n ? Wf(n) : null, [n]);
}
const pa = [];
function wp(n, t) {
  t === void 0 && (t = tr);
  const [e] = n, r = ks(e ? Bt(e) : null), [o, a] = ni(l, pa), i = Go({
    callback: a
  });
  return n.length > 0 && o === pa && a(), Yt(() => {
    n.length ? n.forEach((s) => i == null ? void 0 : i.observe(s)) : (i == null || i.disconnect(), a());
  }, [n]), o;
  function l() {
    return n.length ? n.map((s) => qs(s) ? r : new fi(t(s), s)) : pa;
  }
}
function Ds(n) {
  if (!n)
    return null;
  if (n.children.length > 1)
    return n;
  const t = n.children[0];
  return Vr(t) ? t : n;
}
function xp(n) {
  let {
    measure: t
  } = n;
  const [e, r] = $e(null), o = Lt((c) => {
    for (const {
      target: d
    } of c)
      if (Vr(d)) {
        r((f) => {
          const m = t(d);
          return f ? {
            ...f,
            width: m.width,
            height: m.height
          } : m;
        });
        break;
      }
  }, [t]), a = Go({
    callback: o
  }), i = Lt((c) => {
    const d = Ds(c);
    a == null || a.disconnect(), d && (a == null || a.observe(d)), r(d ? t(d) : null);
  }, [t, a]), [l, s] = Oo(i);
  return Ze(() => ({
    nodeRef: l,
    rect: e,
    setRef: s
  }), [e, l, s]);
}
const Ep = [{
  sensor: Yo,
  options: {}
}, {
  sensor: Uo,
  options: {}
}], Sp = {
  current: {}
}, go = {
  draggable: {
    measure: ml
  },
  droppable: {
    measure: ml,
    strategy: jr.WhileDragging,
    frequency: Va.Optimized
  },
  dragOverlay: {
    measure: tr
  }
};
class br extends Map {
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
    var e, r;
    return (e = (r = this.get(t)) == null ? void 0 : r.node.current) != null ? e : void 0;
  }
}
const Cp = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new br(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: To
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: go,
  measureDroppableContainers: To,
  windowRect: null,
  measuringScheduled: !1
}, js = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: To,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: To
}, Yr = /* @__PURE__ */ Mr(js), As = /* @__PURE__ */ Mr(Cp);
function Op() {
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
      containers: new br()
    }
  };
}
function Pp(n, t) {
  switch (t.type) {
    case Ot.DragStart:
      return {
        ...n,
        draggable: {
          ...n.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active
        }
      };
    case Ot.DragMove:
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
    case Ot.DragEnd:
    case Ot.DragCancel:
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
    case Ot.RegisterDroppable: {
      const {
        element: e
      } = t, {
        id: r
      } = e, o = new br(n.droppable.containers);
      return o.set(r, e), {
        ...n,
        droppable: {
          ...n.droppable,
          containers: o
        }
      };
    }
    case Ot.SetDroppableDisabled: {
      const {
        id: e,
        key: r,
        disabled: o
      } = t, a = n.droppable.containers.get(e);
      if (!a || r !== a.key)
        return n;
      const i = new br(n.droppable.containers);
      return i.set(e, {
        ...a,
        disabled: o
      }), {
        ...n,
        droppable: {
          ...n.droppable,
          containers: i
        }
      };
    }
    case Ot.UnregisterDroppable: {
      const {
        id: e,
        key: r
      } = t, o = n.droppable.containers.get(e);
      if (!o || r !== o.key)
        return n;
      const a = new br(n.droppable.containers);
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
function qp(n) {
  let {
    disabled: t
  } = n;
  const {
    active: e,
    activatorEvent: r,
    draggableNodes: o
  } = nn(Yr), a = Po(r), i = Po(e == null ? void 0 : e.id);
  return Re(() => {
    if (!t && !r && a && i != null) {
      if (!Vo(a) || document.activeElement === a.target)
        return;
      const l = o.get(i);
      if (!l)
        return;
      const {
        activatorNode: s,
        node: c
      } = l;
      if (!s.current && !c.current)
        return;
      requestAnimationFrame(() => {
        for (const d of [s.current, c.current]) {
          if (!d)
            continue;
          const f = Cf(d);
          if (f) {
            f.focus();
            break;
          }
        }
      });
    }
  }, [r, t, o, i, a]), null;
}
function Ns(n, t) {
  let {
    transform: e,
    ...r
  } = t;
  return n != null && n.length ? n.reduce((o, a) => a({
    transform: o,
    ...r
  }), e) : e;
}
function Tp(n) {
  return Ze(
    () => ({
      draggable: {
        ...go.draggable,
        ...n == null ? void 0 : n.draggable
      },
      droppable: {
        ...go.droppable,
        ...n == null ? void 0 : n.droppable
      },
      dragOverlay: {
        ...go.dragOverlay,
        ...n == null ? void 0 : n.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n == null ? void 0 : n.draggable, n == null ? void 0 : n.droppable, n == null ? void 0 : n.dragOverlay]
  );
}
function Ip(n) {
  let {
    activeNode: t,
    measure: e,
    initialRect: r,
    config: o = !0
  } = n;
  const a = Xe(!1), {
    x: i,
    y: l
  } = typeof o == "boolean" ? {
    x: o,
    y: o
  } : o;
  Yt(() => {
    if (!i && !l || !t) {
      a.current = !1;
      return;
    }
    if (a.current || !r)
      return;
    const c = t == null ? void 0 : t.node.current;
    if (!c || c.isConnected === !1)
      return;
    const d = e(c), f = Es(d, r);
    if (i || (f.x = 0), l || (f.y = 0), a.current = !0, Math.abs(f.x) > 0 || Math.abs(f.y) > 0) {
      const m = Cs(c);
      m && m.scrollBy({
        top: f.y,
        left: f.x
      });
    }
  }, [t, i, l, r, e]);
}
const Xo = /* @__PURE__ */ Mr({
  ...tn,
  scaleX: 1,
  scaleY: 1
});
var hn;
(function(n) {
  n[n.Uninitialized = 0] = "Uninitialized", n[n.Initializing = 1] = "Initializing", n[n.Initialized = 2] = "Initialized";
})(hn || (hn = {}));
const Ls = /* @__PURE__ */ mc(function(t) {
  var e, r, o, a;
  let {
    id: i,
    accessibility: l,
    autoScroll: s = !0,
    children: c,
    sensors: d = Ep,
    collisionDetection: f = $f,
    measuring: m,
    modifiers: h,
    ...x
  } = t;
  const g = ni(Pp, void 0, Op), [C, y] = g, [w, S] = _f(), [P, b] = $e(hn.Uninitialized), T = P === hn.Initialized, {
    draggable: {
      active: I,
      nodes: U,
      translate: $
    },
    droppable: {
      containers: j
    }
  } = C, R = I ? U.get(I) : null, ne = Xe({
    initial: null,
    translated: null
  }), B = Ze(() => {
    var Fe;
    return I != null ? {
      id: I,
      // It's possible for the active node to unmount while dragging
      data: (Fe = R == null ? void 0 : R.data) != null ? Fe : Sp,
      rect: ne
    } : null;
  }, [I, R]), re = Xe(null), [ae, he] = $e(null), [Se, pe] = $e(null), Z = kr(x, Object.values(x)), _ = Ur("DndDescribedBy", i), J = Ze(() => j.getEnabled(), [j]), Q = Tp(m), {
    droppableRects: X,
    measureDroppableContainers: Y,
    measuringScheduled: fe
  } = dp(J, {
    dragging: T,
    dependencies: [$.x, $.y],
    config: Q.droppable
  }), ve = cp(U, I), ce = Ze(() => Se ? qo(Se) : null, [Se]), K = ut(), D = fp(ve, Q.draggable.measure);
  Ip({
    activeNode: I ? U.get(I) : null,
    config: K.layoutShiftCompensation,
    initialRect: D,
    measure: Q.draggable.measure
  });
  const F = wl(ve, Q.draggable.measure, D), ue = wl(ve ? ve.parentElement : null), M = Xe({
    activatorEvent: null,
    active: null,
    activeNode: ve,
    collisionRect: null,
    collisions: null,
    droppableRects: X,
    draggableNodes: U,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: j,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), Ie = j.getNodeFor((e = M.current.over) == null ? void 0 : e.id), Ne = xp({
    measure: Q.dragOverlay.measure
  }), je = (r = Ne.nodeRef.current) != null ? r : ve, Ae = T ? (o = Ne.rect) != null ? o : F : null, We = !!(Ne.nodeRef.current && Ne.rect), xt = mp(We ? null : F), dt = ks(je ? Bt(je) : null), lt = gp(T ? Ie ?? ve : null), nt = wp(lt), pt = Ns(h, {
    transform: {
      x: $.x - xt.x,
      y: $.y - xt.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: Se,
    active: B,
    activeNodeRect: F,
    containerNodeRect: ue,
    draggingNodeRect: Ae,
    over: M.current.over,
    overlayNodeRect: Ne.rect,
    scrollableAncestors: lt,
    scrollableAncestorRects: nt,
    windowRect: dt
  }), Et = ce ? Kn(ce, $) : null, rt = hp(lt), Je = El(rt), Mt = El(rt, [F]), Ge = Kn(pt, Je), ot = Ae ? zf(Ae, pt) : null, ct = B && ot ? f({
    active: B,
    collisionRect: ot,
    droppableRects: X,
    droppableContainers: J,
    pointerCoordinates: Et
  }) : null, kt = ws(ct, "id"), [ft, vt] = $e(null), Ce = We ? pt : Kn(pt, Mt), z = Ff(Ce, (a = ft == null ? void 0 : ft.rect) != null ? a : null, F), ge = Lt(
    (Fe, Me) => {
      let {
        sensor: He,
        options: at
      } = Me;
      if (re.current == null)
        return;
      const it = U.get(re.current);
      if (!it)
        return;
      const be = Fe.nativeEvent, N = new He({
        active: re.current,
        activeNode: it,
        event: be,
        options: at,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: M,
        onStart(ee) {
          const ye = re.current;
          if (ye == null)
            return;
          const Be = U.get(ye);
          if (!Be)
            return;
          const {
            onDragStart: Qe
          } = Z.current, Pt = {
            active: {
              id: ye,
              data: Be.data,
              rect: ne
            }
          };
          lr(() => {
            Qe == null || Qe(Pt), b(hn.Initializing), y({
              type: Ot.DragStart,
              initialCoordinates: ee,
              active: ye
            }), w({
              type: "onDragStart",
              event: Pt
            });
          });
        },
        onMove(ee) {
          y({
            type: Ot.DragMove,
            coordinates: ee
          });
        },
        onEnd: G(Ot.DragEnd),
        onCancel: G(Ot.DragCancel)
      });
      lr(() => {
        he(N), pe(Fe.nativeEvent);
      });
      function G(ee) {
        return async function() {
          const {
            active: Be,
            collisions: Qe,
            over: Pt,
            scrollAdjustedTranslate: zt
          } = M.current;
          let qt = null;
          if (Be && zt) {
            const {
              cancelDrop: Tt
            } = Z.current;
            qt = {
              activatorEvent: be,
              active: Be,
              collisions: Qe,
              delta: zt,
              over: Pt
            }, ee === Ot.DragEnd && typeof Tt == "function" && await Promise.resolve(Tt(qt)) && (ee = Ot.DragCancel);
          }
          re.current = null, lr(() => {
            y({
              type: ee
            }), b(hn.Uninitialized), vt(null), he(null), pe(null);
            const Tt = ee === Ot.DragEnd ? "onDragEnd" : "onDragCancel";
            if (qt) {
              const Ht = Z.current[Tt];
              Ht == null || Ht(qt), w({
                type: Tt,
                event: qt
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [U]
  ), _e = Lt((Fe, Me) => (He, at) => {
    const it = He.nativeEvent, be = U.get(at);
    if (
      // Another sensor is already instantiating
      re.current !== null || // No active draggable
      !be || // Event has already been captured
      it.dndKit || it.defaultPrevented
    )
      return;
    const N = {
      active: be
    };
    Fe(He, Me.options, N) === !0 && (it.dndKit = {
      capturedBy: Me.sensor
    }, re.current = at, ge(He, Me));
  }, [U, ge]), Pe = up(d, _e);
  bp(d), Yt(() => {
    F && P === hn.Initializing && b(hn.Initialized);
  }, [F, P]), Re(
    () => {
      const {
        onDragMove: Fe
      } = Z.current, {
        active: Me,
        activatorEvent: He,
        collisions: at,
        over: it
      } = M.current;
      if (!Me || !He)
        return;
      const be = {
        active: Me,
        activatorEvent: He,
        collisions: at,
        delta: {
          x: Ge.x,
          y: Ge.y
        },
        over: it
      };
      lr(() => {
        Fe == null || Fe(be), w({
          type: "onDragMove",
          event: be
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Ge.x, Ge.y]
  ), Re(
    () => {
      const {
        active: Fe,
        activatorEvent: Me,
        collisions: He,
        droppableContainers: at,
        scrollAdjustedTranslate: it
      } = M.current;
      if (!Fe || re.current == null || !Me || !it)
        return;
      const {
        onDragOver: be
      } = Z.current, N = at.get(kt), G = N && N.rect.current ? {
        id: N.id,
        rect: N.rect.current,
        data: N.data,
        disabled: N.disabled
      } : null, ee = {
        active: Fe,
        activatorEvent: Me,
        collisions: He,
        delta: {
          x: it.x,
          y: it.y
        },
        over: G
      };
      lr(() => {
        vt(G), be == null || be(ee), w({
          type: "onDragOver",
          event: ee
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [kt]
  ), Yt(() => {
    M.current = {
      activatorEvent: Se,
      active: B,
      activeNode: ve,
      collisionRect: ot,
      collisions: ct,
      droppableRects: X,
      draggableNodes: U,
      draggingNode: je,
      draggingNodeRect: Ae,
      droppableContainers: j,
      over: ft,
      scrollableAncestors: lt,
      scrollAdjustedTranslate: Ge
    }, ne.current = {
      initial: Ae,
      translated: ot
    };
  }, [B, ve, ct, ot, U, je, Ae, X, j, ft, lt, Ge]), ip({
    ...K,
    delta: $,
    draggingRect: ot,
    pointerCoordinates: Et,
    scrollableAncestors: lt,
    scrollableAncestorRects: nt
  });
  const qe = Ze(() => ({
    active: B,
    activeNode: ve,
    activeNodeRect: F,
    activatorEvent: Se,
    collisions: ct,
    containerNodeRect: ue,
    dragOverlay: Ne,
    draggableNodes: U,
    droppableContainers: j,
    droppableRects: X,
    over: ft,
    measureDroppableContainers: Y,
    scrollableAncestors: lt,
    scrollableAncestorRects: nt,
    measuringConfiguration: Q,
    measuringScheduled: fe,
    windowRect: dt
  }), [B, ve, F, Se, ct, ue, Ne, U, j, X, ft, Y, lt, nt, Q, fe, dt]), Ve = Ze(() => ({
    activatorEvent: Se,
    activators: Pe,
    active: B,
    activeNodeRect: F,
    ariaDescribedById: {
      draggable: _
    },
    dispatch: y,
    draggableNodes: U,
    over: ft,
    measureDroppableContainers: Y
  }), [Se, Pe, B, F, y, _, U, ft, Y]);
  return Te.createElement(gs.Provider, {
    value: S
  }, Te.createElement(Yr.Provider, {
    value: Ve
  }, Te.createElement(As.Provider, {
    value: qe
  }, Te.createElement(Xo.Provider, {
    value: z
  }, c)), Te.createElement(qp, {
    disabled: (l == null ? void 0 : l.restoreFocus) === !1
  })), Te.createElement(Df, {
    ...l,
    hiddenTextDescribedById: _
  }));
  function ut() {
    const Fe = (ae == null ? void 0 : ae.autoScrollEnabled) === !1, Me = typeof s == "object" ? s.enabled === !1 : s === !1, He = T && !Fe && !Me;
    return typeof s == "object" ? {
      ...s,
      enabled: He
    } : {
      enabled: He
    };
  }
}), _p = /* @__PURE__ */ Mr(null), Sl = "button", Rp = "Droppable";
function $s(n) {
  let {
    id: t,
    data: e,
    disabled: r = !1,
    attributes: o
  } = n;
  const a = Ur(Rp), {
    activators: i,
    activatorEvent: l,
    active: s,
    activeNodeRect: c,
    ariaDescribedById: d,
    draggableNodes: f,
    over: m
  } = nn(Yr), {
    role: h = Sl,
    roleDescription: x = "draggable",
    tabIndex: g = 0
  } = o ?? {}, C = (s == null ? void 0 : s.id) === t, y = nn(C ? Xo : _p), [w, S] = Oo(), [P, b] = Oo(), T = yp(i, t), I = kr(e);
  Yt(
    () => (f.set(t, {
      id: t,
      key: a,
      node: w,
      activatorNode: P,
      data: I
    }), () => {
      const $ = f.get(t);
      $ && $.key === a && f.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [f, t]
  );
  const U = Ze(() => ({
    role: h,
    tabIndex: g,
    "aria-disabled": r,
    "aria-pressed": C && h === Sl ? !0 : void 0,
    "aria-roledescription": x,
    "aria-describedby": d.draggable
  }), [r, h, g, C, x, d.draggable]);
  return {
    active: s,
    activatorEvent: l,
    activeNodeRect: c,
    attributes: U,
    isDragging: C,
    listeners: r ? void 0 : T,
    node: w,
    over: m,
    setNodeRef: S,
    setActivatorNodeRef: b,
    transform: y
  };
}
function Fs() {
  return nn(As);
}
const kp = "Droppable", Dp = {
  timeout: 25
};
function Ms(n) {
  let {
    data: t,
    disabled: e = !1,
    id: r,
    resizeObserverConfig: o
  } = n;
  const a = Ur(kp), {
    active: i,
    dispatch: l,
    over: s,
    measureDroppableContainers: c
  } = nn(Yr), d = Xe({
    disabled: e
  }), f = Xe(!1), m = Xe(null), h = Xe(null), {
    disabled: x,
    updateMeasurementsFor: g,
    timeout: C
  } = {
    ...Dp,
    ...o
  }, y = kr(g ?? r), w = Lt(
    () => {
      if (!f.current) {
        f.current = !0;
        return;
      }
      h.current != null && clearTimeout(h.current), h.current = setTimeout(() => {
        c(Array.isArray(y.current) ? y.current : [y.current]), h.current = null;
      }, C);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [C]
  ), S = Go({
    callback: w,
    disabled: x || !i
  }), P = Lt((U, $) => {
    S && ($ && (S.unobserve($), f.current = !1), U && S.observe(U));
  }, [S]), [b, T] = Oo(P), I = kr(t);
  return Re(() => {
    !S || !b.current || (S.disconnect(), f.current = !1, S.observe(b.current));
  }, [b, S]), Yt(
    () => (l({
      type: Ot.RegisterDroppable,
      element: {
        id: r,
        key: a,
        disabled: e,
        node: b,
        rect: m,
        data: I
      }
    }), () => l({
      type: Ot.UnregisterDroppable,
      key: a,
      id: r
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  ), Re(() => {
    e !== d.current.disabled && (l({
      type: Ot.SetDroppableDisabled,
      id: r,
      key: a,
      disabled: e
    }), d.current.disabled = e);
  }, [r, a, e, l]), {
    active: i,
    rect: m,
    isOver: (s == null ? void 0 : s.id) === r,
    node: b,
    over: s,
    setNodeRef: T
  };
}
function jp(n) {
  let {
    animation: t,
    children: e
  } = n;
  const [r, o] = $e(null), [a, i] = $e(null), l = Po(e);
  return !e && !r && l && o(l), Yt(() => {
    if (!a)
      return;
    const s = r == null ? void 0 : r.key, c = r == null ? void 0 : r.props.id;
    if (s == null || c == null) {
      o(null);
      return;
    }
    Promise.resolve(t(c, a)).then(() => {
      o(null);
    });
  }, [t, r, a]), Te.createElement(Te.Fragment, null, e, r ? gc(r, {
    ref: i
  }) : null);
}
const Ap = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function Np(n) {
  let {
    children: t
  } = n;
  return Te.createElement(Yr.Provider, {
    value: js
  }, Te.createElement(Xo.Provider, {
    value: Ap
  }, t));
}
const Lp = {
  position: "fixed",
  touchAction: "none"
}, $p = (n) => Vo(n) ? "transform 250ms ease" : void 0, Fp = /* @__PURE__ */ hc((n, t) => {
  let {
    as: e,
    activatorEvent: r,
    adjustScale: o,
    children: a,
    className: i,
    rect: l,
    style: s,
    transform: c,
    transition: d = $p
  } = n;
  if (!l)
    return null;
  const f = o ? c : {
    ...c,
    scaleX: 1,
    scaleY: 1
  }, m = {
    ...Lp,
    width: l.width,
    height: l.height,
    top: l.top,
    left: l.left,
    transform: on.Transform.toString(f),
    transformOrigin: o && r ? jf(r, l) : void 0,
    transition: typeof d == "function" ? d(r) : d,
    ...s
  };
  return Te.createElement(e, {
    className: i,
    style: m,
    ref: t
  }, a);
}), Mp = (n) => (t) => {
  let {
    active: e,
    dragOverlay: r
  } = t;
  const o = {}, {
    styles: a,
    className: i
  } = n;
  if (a != null && a.active)
    for (const [l, s] of Object.entries(a.active))
      s !== void 0 && (o[l] = e.node.style.getPropertyValue(l), e.node.style.setProperty(l, s));
  if (a != null && a.dragOverlay)
    for (const [l, s] of Object.entries(a.dragOverlay))
      s !== void 0 && r.node.style.setProperty(l, s);
  return i != null && i.active && e.node.classList.add(i.active), i != null && i.dragOverlay && r.node.classList.add(i.dragOverlay), function() {
    for (const [s, c] of Object.entries(o))
      e.node.style.setProperty(s, c);
    i != null && i.active && e.node.classList.remove(i.active);
  };
}, zp = (n) => {
  let {
    transform: {
      initial: t,
      final: e
    }
  } = n;
  return [{
    transform: on.Transform.toString(t)
  }, {
    transform: on.Transform.toString(e)
  }];
}, Hp = {
  duration: 250,
  easing: "ease",
  keyframes: zp,
  sideEffects: /* @__PURE__ */ Mp({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function Bp(n) {
  let {
    config: t,
    draggableNodes: e,
    droppableContainers: r,
    measuringConfiguration: o
  } = n;
  return Wo((a, i) => {
    if (t === null)
      return;
    const l = e.get(a);
    if (!l)
      return;
    const s = l.node.current;
    if (!s)
      return;
    const c = Ds(i);
    if (!c)
      return;
    const {
      transform: d
    } = Bt(i).getComputedStyle(i), f = Ss(d);
    if (!f)
      return;
    const m = typeof t == "function" ? t : Wp(t);
    return _s(s, o.draggable.measure), m({
      active: {
        id: a,
        data: l.data,
        node: s,
        rect: o.draggable.measure(s)
      },
      draggableNodes: e,
      dragOverlay: {
        node: i,
        rect: o.dragOverlay.measure(c)
      },
      droppableContainers: r,
      measuringConfiguration: o,
      transform: f
    });
  });
}
function Wp(n) {
  const {
    duration: t,
    easing: e,
    sideEffects: r,
    keyframes: o
  } = {
    ...Hp,
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
    const d = {
      x: l.rect.left - i.rect.left,
      y: l.rect.top - i.rect.top
    }, f = {
      scaleX: s.scaleX !== 1 ? i.rect.width * s.scaleX / l.rect.width : 1,
      scaleY: s.scaleY !== 1 ? i.rect.height * s.scaleY / l.rect.height : 1
    }, m = {
      x: s.x - d.x,
      y: s.y - d.y,
      ...f
    }, h = o({
      ...c,
      active: i,
      dragOverlay: l,
      transform: {
        initial: s,
        final: m
      }
    }), [x] = h, g = h[h.length - 1];
    if (JSON.stringify(x) === JSON.stringify(g))
      return;
    const C = r == null ? void 0 : r({
      active: i,
      dragOverlay: l,
      ...c
    }), y = l.node.animate(h, {
      duration: t,
      easing: e,
      fill: "forwards"
    });
    return new Promise((w) => {
      y.onfinish = () => {
        C == null || C(), w();
      };
    });
  };
}
let Cl = 0;
function Vp(n) {
  return Ze(() => {
    if (n != null)
      return Cl++, Cl;
  }, [n]);
}
const Kp = /* @__PURE__ */ Te.memo((n) => {
  let {
    adjustScale: t = !1,
    children: e,
    dropAnimation: r,
    style: o,
    transition: a,
    modifiers: i,
    wrapperElement: l = "div",
    className: s,
    zIndex: c = 999
  } = n;
  const {
    activatorEvent: d,
    active: f,
    activeNodeRect: m,
    containerNodeRect: h,
    draggableNodes: x,
    droppableContainers: g,
    dragOverlay: C,
    over: y,
    measuringConfiguration: w,
    scrollableAncestors: S,
    scrollableAncestorRects: P,
    windowRect: b
  } = Fs(), T = nn(Xo), I = Vp(f == null ? void 0 : f.id), U = Ns(i, {
    activatorEvent: d,
    active: f,
    activeNodeRect: m,
    containerNodeRect: h,
    draggingNodeRect: C.rect,
    over: y,
    overlayNodeRect: C.rect,
    scrollableAncestors: S,
    scrollableAncestorRects: P,
    transform: T,
    windowRect: b
  }), $ = vi(m), j = Bp({
    config: r,
    draggableNodes: x,
    droppableContainers: g,
    measuringConfiguration: w
  }), R = $ ? C.setRef : void 0;
  return Te.createElement(Np, null, Te.createElement(jp, {
    animation: j
  }, f && I ? Te.createElement(Fp, {
    key: I,
    id: f.id,
    ref: R,
    as: l,
    activatorEvent: d,
    adjustScale: t,
    className: s,
    transition: a,
    rect: $,
    style: {
      zIndex: c,
      ...o
    },
    transform: U
  }, e) : null));
});
function Un(n, t, e) {
  const r = n.slice();
  return r.splice(e < 0 ? r.length + e : e, 0, r.splice(t, 1)[0]), r;
}
function Up(n, t) {
  return n.reduce((e, r, o) => {
    const a = t.get(r);
    return a && (e[o] = a), e;
  }, Array(n.length));
}
function ro(n) {
  return n !== null && n >= 0;
}
function Yp(n, t) {
  if (n === t)
    return !0;
  if (n.length !== t.length)
    return !1;
  for (let e = 0; e < n.length; e++)
    if (n[e] !== t[e])
      return !1;
  return !0;
}
function Gp(n) {
  return typeof n == "boolean" ? {
    draggable: n,
    droppable: n
  } : n;
}
const zs = (n) => {
  let {
    rects: t,
    activeIndex: e,
    overIndex: r,
    index: o
  } = n;
  const a = Un(t, r, e), i = t[o], l = a[o];
  return !l || !i ? null : {
    x: l.left - i.left,
    y: l.top - i.top,
    scaleX: l.width / i.width,
    scaleY: l.height / i.height
  };
}, Xp = (n) => {
  let {
    activeIndex: t,
    index: e,
    rects: r,
    overIndex: o
  } = n, a, i;
  return e === t && (a = r[e], i = r[o]), e === o && (a = r[e], i = r[t]), !i || !a ? null : {
    x: i.left - a.left,
    y: i.top - a.top,
    scaleX: i.width / a.width,
    scaleY: i.height / a.height
  };
}, oo = {
  scaleX: 1,
  scaleY: 1
}, Jp = (n) => {
  var t;
  let {
    activeIndex: e,
    activeNodeRect: r,
    index: o,
    rects: a,
    overIndex: i
  } = n;
  const l = (t = a[e]) != null ? t : r;
  if (!l)
    return null;
  if (o === e) {
    const c = a[i];
    return c ? {
      x: 0,
      y: e < i ? c.top + c.height - (l.top + l.height) : c.top - l.top,
      ...oo
    } : null;
  }
  const s = Zp(a, o, e);
  return o > e && o <= i ? {
    x: 0,
    y: -l.height - s,
    ...oo
  } : o < e && o >= i ? {
    x: 0,
    y: l.height + s,
    ...oo
  } : {
    x: 0,
    y: 0,
    ...oo
  };
};
function Zp(n, t, e) {
  const r = n[t], o = n[t - 1], a = n[t + 1];
  return r ? e < t ? o ? r.top - (o.top + o.height) : a ? a.top - (r.top + r.height) : 0 : a ? a.top - (r.top + r.height) : o ? r.top - (o.top + o.height) : 0 : 0;
}
const Hs = "Sortable", Bs = /* @__PURE__ */ Te.createContext({
  activeIndex: -1,
  containerId: Hs,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: zs,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function Ws(n) {
  let {
    children: t,
    id: e,
    items: r,
    strategy: o = zs,
    disabled: a = !1
  } = n;
  const {
    active: i,
    dragOverlay: l,
    droppableRects: s,
    over: c,
    measureDroppableContainers: d
  } = Fs(), f = Ur(Hs, e), m = l.rect !== null, h = Ze(() => r.map((T) => typeof T == "object" && "id" in T ? T.id : T), [r]), x = i != null, g = i ? h.indexOf(i.id) : -1, C = c ? h.indexOf(c.id) : -1, y = Xe(h), w = !Yp(h, y.current), S = C !== -1 && g === -1 || w, P = Gp(a);
  Yt(() => {
    w && x && d(h);
  }, [w, h, x, d]), Re(() => {
    y.current = h;
  }, [h]);
  const b = Ze(
    () => ({
      activeIndex: g,
      containerId: f,
      disabled: P,
      disableTransforms: S,
      items: h,
      overIndex: C,
      useDragOverlay: m,
      sortedRects: Up(h, s),
      strategy: o
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [g, f, P.draggable, P.droppable, S, h, C, s, m, o]
  );
  return Te.createElement(Bs.Provider, {
    value: b
  }, t);
}
const Qp = (n) => {
  let {
    id: t,
    items: e,
    activeIndex: r,
    overIndex: o
  } = n;
  return Un(e, r, o).indexOf(t);
}, ev = (n) => {
  let {
    containerId: t,
    isSorting: e,
    wasDragging: r,
    index: o,
    items: a,
    newIndex: i,
    previousItems: l,
    previousContainerId: s,
    transition: c
  } = n;
  return !c || !r || l !== a && o === i ? !1 : e ? !0 : i !== o && t === s;
}, tv = {
  duration: 200,
  easing: "ease"
}, Vs = "transform", nv = /* @__PURE__ */ on.Transition.toString({
  property: Vs,
  duration: 0,
  easing: "linear"
}), rv = {
  roleDescription: "sortable"
};
function ov(n) {
  let {
    disabled: t,
    index: e,
    node: r,
    rect: o
  } = n;
  const [a, i] = $e(null), l = Xe(e);
  return Yt(() => {
    if (!t && e !== l.current && r.current) {
      const s = o.current;
      if (s) {
        const c = tr(r.current, {
          ignoreTransform: !0
        }), d = {
          x: s.left - c.left,
          y: s.top - c.top,
          scaleX: s.width / c.width,
          scaleY: s.height / c.height
        };
        (d.x || d.y) && i(d);
      }
    }
    e !== l.current && (l.current = e);
  }, [t, e, r, o]), Re(() => {
    a && i(null);
  }, [a]), a;
}
function Ks(n) {
  let {
    animateLayoutChanges: t = ev,
    attributes: e,
    disabled: r,
    data: o,
    getNewIndex: a = Qp,
    id: i,
    strategy: l,
    resizeObserverConfig: s,
    transition: c = tv
  } = n;
  const {
    items: d,
    containerId: f,
    activeIndex: m,
    disabled: h,
    disableTransforms: x,
    sortedRects: g,
    overIndex: C,
    useDragOverlay: y,
    strategy: w
  } = nn(Bs), S = av(r, h), P = d.indexOf(i), b = Ze(() => ({
    sortable: {
      containerId: f,
      index: P,
      items: d
    },
    ...o
  }), [f, o, P, d]), T = Ze(() => d.slice(d.indexOf(i)), [d, i]), {
    rect: I,
    node: U,
    isOver: $,
    setNodeRef: j
  } = Ms({
    id: i,
    data: b,
    disabled: S.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: T,
      ...s
    }
  }), {
    active: R,
    activatorEvent: ne,
    activeNodeRect: B,
    attributes: re,
    setNodeRef: ae,
    listeners: he,
    isDragging: Se,
    over: pe,
    setActivatorNodeRef: Z,
    transform: _
  } = $s({
    id: i,
    data: b,
    attributes: {
      ...rv,
      ...e
    },
    disabled: S.draggable
  }), J = wf(j, ae), Q = !!R, X = Q && !x && ro(m) && ro(C), Y = !y && Se, fe = Y && X ? _ : null, ce = X ? fe ?? (l ?? w)({
    rects: g,
    activeNodeRect: B,
    activeIndex: m,
    overIndex: C,
    index: P
  }) : null, K = ro(m) && ro(C) ? a({
    id: i,
    items: d,
    activeIndex: m,
    overIndex: C
  }) : P, D = R == null ? void 0 : R.id, F = Xe({
    activeId: D,
    items: d,
    newIndex: K,
    containerId: f
  }), ue = d !== F.current.items, M = t({
    active: R,
    containerId: f,
    isDragging: Se,
    isSorting: Q,
    id: i,
    index: P,
    items: d,
    newIndex: F.current.newIndex,
    previousItems: F.current.items,
    previousContainerId: F.current.containerId,
    transition: c,
    wasDragging: F.current.activeId != null
  }), Ie = ov({
    disabled: !M,
    index: P,
    node: U,
    rect: I
  });
  return Re(() => {
    Q && F.current.newIndex !== K && (F.current.newIndex = K), f !== F.current.containerId && (F.current.containerId = f), d !== F.current.items && (F.current.items = d);
  }, [Q, K, f, d]), Re(() => {
    if (D === F.current.activeId)
      return;
    if (D && !F.current.activeId) {
      F.current.activeId = D;
      return;
    }
    const je = setTimeout(() => {
      F.current.activeId = D;
    }, 50);
    return () => clearTimeout(je);
  }, [D]), {
    active: R,
    activeIndex: m,
    attributes: re,
    data: b,
    rect: I,
    index: P,
    newIndex: K,
    items: d,
    isOver: $,
    isSorting: Q,
    isDragging: Se,
    listeners: he,
    node: U,
    overIndex: C,
    over: pe,
    setNodeRef: J,
    setActivatorNodeRef: Z,
    setDroppableNodeRef: j,
    setDraggableNodeRef: ae,
    transform: Ie ?? ce,
    transition: Ne()
  };
  function Ne() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      Ie || // Or to prevent items jumping to back to their "new" position when items change
      ue && F.current.newIndex === P
    )
      return nv;
    if (!(Y && !Vo(ne) || !c) && (Q || M))
      return on.Transition.toString({
        ...c,
        property: Vs
      });
  }
}
function av(n, t) {
  var e, r;
  return typeof n == "boolean" ? {
    draggable: n,
    // Backwards compatibility
    droppable: !1
  } : {
    draggable: (e = n == null ? void 0 : n.draggable) != null ? e : t.draggable,
    droppable: (r = n == null ? void 0 : n.droppable) != null ? r : t.droppable
  };
}
function Ro(n) {
  if (!n)
    return !1;
  const t = n.data.current;
  return !!(t && "sortable" in t && typeof t.sortable == "object" && "containerId" in t.sortable && "items" in t.sortable && "index" in t.sortable);
}
const iv = [ze.Down, ze.Right, ze.Up, ze.Left], Us = (n, t) => {
  let {
    context: {
      active: e,
      collisionRect: r,
      droppableRects: o,
      droppableContainers: a,
      over: i,
      scrollableAncestors: l
    }
  } = t;
  if (iv.includes(n.code)) {
    if (n.preventDefault(), !e || !r)
      return;
    const s = [];
    a.getEnabled().forEach((f) => {
      if (!f || f != null && f.disabled)
        return;
      const m = o.get(f.id);
      if (m)
        switch (n.code) {
          case ze.Down:
            r.top < m.top && s.push(f);
            break;
          case ze.Up:
            r.top > m.top && s.push(f);
            break;
          case ze.Left:
            r.left > m.left && s.push(f);
            break;
          case ze.Right:
            r.left < m.left && s.push(f);
            break;
        }
    });
    const c = Nf({
      active: e,
      collisionRect: r,
      droppableRects: o,
      droppableContainers: s,
      pointerCoordinates: null
    });
    let d = ws(c, "id");
    if (d === (i == null ? void 0 : i.id) && c.length > 1 && (d = c[1].id), d != null) {
      const f = a.get(e.id), m = a.get(d), h = m ? o.get(m.id) : null, x = m == null ? void 0 : m.node.current;
      if (x && h && f && m) {
        const C = Ko(x).some((T, I) => l[I] !== T), y = Ys(f, m), w = lv(f, m), S = C || !y ? {
          x: 0,
          y: 0
        } : {
          x: w ? r.width - h.width : 0,
          y: w ? r.height - h.height : 0
        }, P = {
          x: h.left,
          y: h.top
        };
        return S.x && S.y ? P : Dr(P, S);
      }
    }
  }
};
function Ys(n, t) {
  return !Ro(n) || !Ro(t) ? !1 : n.data.current.sortable.containerId === t.data.current.sortable.containerId;
}
function lv(n, t) {
  return !Ro(n) || !Ro(t) || !Ys(n, t) ? !1 : n.data.current.sortable.index < t.data.current.sortable.index;
}
function yr() {
  return yr = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, yr.apply(this, arguments);
}
function Ar(n) {
  "@babel/helpers - typeof";
  return Ar = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ar(n);
}
function sv(n, t) {
  if (Ar(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var r = e.call(n, t || "default");
    if (Ar(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function cv(n) {
  var t = sv(n, "string");
  return Ar(t) === "symbol" ? t : String(t);
}
function dn(n, t, e) {
  return t = cv(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
var uv = {
  root: function(t) {
    var e = t.props;
    return we("p-badge p-component", dn({
      "p-badge-no-gutter": L.isNotEmpty(e.value) && String(e.value).length === 1,
      "p-badge-dot": L.isEmpty(e.value),
      "p-badge-lg": e.size === "large",
      "p-badge-xl": e.size === "xlarge"
    }, "p-badge-".concat(e.severity), e.severity !== null));
  }
}, dv = `
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
`, ao = Le.extend({
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
    classes: uv,
    styles: dv
  }
});
function Ol(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function fv(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ol(Object(e), !0).forEach(function(r) {
      dn(n, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Ol(Object(e)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return n;
}
var Gs = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Ft(), r = u.useContext(yt), o = ao.getProps(n, r), a = ao.setMetaData(fv({
    props: o
  }, o.__parentMetadata)), i = a.ptm, l = a.cx, s = a.isUnstyled;
  Xt(ao.css.styles, s, {
    name: "badge"
  });
  var c = u.useRef(null);
  u.useImperativeHandle(t, function() {
    return {
      props: o,
      getElement: function() {
        return c.current;
      }
    };
  });
  var d = e({
    ref: c,
    style: o.style,
    className: we(o.className, l("root"))
  }, ao.getOtherProps(o), i("root"));
  return /* @__PURE__ */ u.createElement("span", d, o.value);
}));
Gs.displayName = "Badge";
var pv = {
  icon: function(t) {
    var e = t.props;
    return we("p-button-icon p-c", dn({}, "p-button-icon-".concat(e.iconPos), e.label));
  },
  loadingIcon: function(t) {
    var e = t.props, r = t.className;
    return we(r, {
      "p-button-loading-icon": e.loading
    });
  },
  label: "p-button-label p-c",
  root: function(t) {
    var e = t.props, r = t.size, o = t.disabled;
    return we("p-button p-component", dn(dn(dn(dn({
      "p-button-icon-only": (e.icon || e.loading) && !e.label && !e.children,
      "p-button-vertical": (e.iconPos === "top" || e.iconPos === "bottom") && e.label,
      "p-disabled": o,
      "p-button-loading": e.loading,
      "p-button-outlined": e.outlined,
      "p-button-raised": e.raised,
      "p-button-link": e.link,
      "p-button-text": e.text,
      "p-button-rounded": e.rounded,
      "p-button-loading-label-only": e.loading && !e.icon && e.label
    }, "p-button-loading-".concat(e.iconPos), e.loading && e.label), "p-button-".concat(r), r), "p-button-".concat(e.severity), e.severity), "p-button-plain", e.plain));
  }
}, io = Le.extend({
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
    classes: pv
  }
});
function Pl(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function va(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pl(Object(e), !0).forEach(function(r) {
      dn(n, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Pl(Object(e)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return n;
}
var en = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Ft(), r = u.useContext(yt), o = io.getProps(n, r), a = o.disabled || o.loading, i = va(va({
    props: o
  }, o.__parentMetadata), {}, {
    context: {
      disabled: a
    }
  }), l = io.setMetaData(i), s = l.ptm, c = l.cx, d = l.isUnstyled;
  Xt(io.css.styles, d, {
    name: "button",
    styled: !0
  });
  var f = u.useRef(t);
  if (u.useEffect(function() {
    L.combinedRefs(f, t);
  }, [f, t]), o.visible === !1)
    return null;
  var m = function() {
    var $ = we("p-button-icon p-c", dn({}, "p-button-icon-".concat(o.iconPos), o.label)), j = e({
      className: c("icon")
    }, s("icon"));
    $ = we($, {
      "p-button-loading-icon": o.loading
    });
    var R = e({
      className: c("loadingIcon", {
        className: $
      })
    }, s("loadingIcon")), ne = o.loading ? o.loadingIcon || /* @__PURE__ */ u.createElement(zo, yr({}, R, {
      spin: !0
    })) : o.icon;
    return Nt.getJSXIcon(ne, va({}, j), {
      props: o
    });
  }, h = function() {
    var $ = e({
      className: c("label")
    }, s("label"));
    return o.label ? /* @__PURE__ */ u.createElement("span", $, o.label) : !o.children && !o.label && /* @__PURE__ */ u.createElement("span", yr({}, $, {
      dangerouslySetInnerHTML: {
        __html: "&nbsp;"
      }
    }));
  }, x = function() {
    if (o.badge) {
      var $ = e({
        className: we(o.badgeClassName),
        value: o.badge,
        unstyled: o.unstyled,
        __parentMetadata: {
          parent: i
        }
      }, s("badge"));
      return /* @__PURE__ */ u.createElement(Gs, $, o.badge);
    }
    return null;
  }, g = !a || o.tooltipOptions && o.tooltipOptions.showOnDisabled, C = L.isNotEmpty(o.tooltip) && g, y = {
    large: "lg",
    small: "sm"
  }, w = y[o.size], S = m(), P = h(), b = x(), T = o.label ? o.label + (o.badge ? " " + o.badge : "") : o["aria-label"], I = e({
    ref: f,
    "aria-label": T,
    "data-pc-autofocus": o.autoFocus,
    className: we(o.className, c("root", {
      size: w,
      disabled: a
    })),
    disabled: a
  }, io.getOtherProps(o), s("root"));
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement("button", I, S, P, o.children, b, /* @__PURE__ */ u.createElement(En, null)), C && /* @__PURE__ */ u.createElement(Br, yr({
    target: f,
    content: o.tooltip,
    pt: s("tooltip")
  }, o.tooltipOptions)));
}));
en.displayName = "Button";
function wr() {
  return wr = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, wr.apply(this, arguments);
}
function Nr(n) {
  "@babel/helpers - typeof";
  return Nr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Nr(n);
}
function vv(n, t) {
  if (Nr(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var r = e.call(n, t || "default");
    if (Nr(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function mv(n) {
  var t = vv(n, "string");
  return Nr(t) === "symbol" ? t : String(t);
}
function gv(n, t, e) {
  return t = mv(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
var hv = {
  root: function(t) {
    var e = t.props, r = t.context;
    return we("p-radiobutton p-component", {
      "p-highlight": e.checked,
      "p-disabled": e.disabled,
      "p-invalid": e.invalid,
      "p-variant-filled": e.variant ? e.variant === "filled" : r && r.inputStyle === "filled"
    });
  },
  box: "p-radiobutton-box",
  input: "p-radiobutton-input",
  icon: "p-radiobutton-icon"
}, lo = Le.extend({
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
    classes: hv
  }
});
function ql(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function bv(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ql(Object(e), !0).forEach(function(r) {
      gv(n, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : ql(Object(e)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return n;
}
var Ka = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Ft(), r = u.useContext(yt), o = lo.getProps(n, r), a = u.useRef(null), i = u.useRef(o.inputRef), l = lo.setMetaData({
    props: o
  }), s = l.ptm, c = l.cx, d = l.isUnstyled;
  Xt(lo.css.styles, d, {
    name: "radiobutton"
  });
  var f = function(b) {
    m(b);
  }, m = function(b) {
    if (!(o.disabled || o.readonly) && o.onChange) {
      var T = o.checked, I = b.target instanceof HTMLDivElement, U = b.target === i.current, $ = U && b.target.checked !== T, j = I && (A.hasClass(a.current, "p-radiobutton-checked") === T ? !T : !1), R = !T, ne = {
        originalEvent: b,
        value: o.value,
        checked: R,
        stopPropagation: function() {
          b == null || b.stopPropagation();
        },
        preventDefault: function() {
          b == null || b.preventDefault();
        },
        target: {
          type: "radio",
          name: o.name,
          id: o.id,
          value: o.value,
          checked: R
        }
      };
      if ($ || j) {
        var B;
        if (o == null || (B = o.onChange) === null || B === void 0 || B.call(o, ne), b.defaultPrevented)
          return;
        j && (i.current.checked = R);
      }
      A.focus(i.current);
    }
  }, h = function(b) {
    var T;
    o == null || (T = o.onFocus) === null || T === void 0 || T.call(o, b);
  }, x = function(b) {
    var T;
    o == null || (T = o.onBlur) === null || T === void 0 || T.call(o, b);
  };
  u.useImperativeHandle(t, function() {
    return {
      props: o,
      select: f,
      focus: function() {
        return A.focus(i.current);
      },
      getElement: function() {
        return a.current;
      },
      getInput: function() {
        return i.current;
      }
    };
  }), u.useEffect(function() {
    i.current && (i.current.checked = o.checked);
  }, [o.checked]), u.useEffect(function() {
    L.combinedRefs(i, o.inputRef);
  }, [i, o.inputRef]), Gt(function() {
    o.autoFocus && A.focus(i.current, o.autoFocus);
  });
  var g = L.isNotEmpty(o.tooltip), C = lo.getOtherProps(o), y = e({
    id: o.id,
    className: we(o.className, c("root", {
      context: r
    })),
    style: o.style,
    "data-p-checked": o.checked
  }, C, s("root"));
  delete y.input, delete y.box, delete y.icon;
  var w = function() {
    var b = L.reduceKeys(C, A.ARIA_PROPS), T = e(bv({
      id: o.inputId,
      type: "radio",
      name: o.name,
      defaultChecked: o.checked,
      onFocus: h,
      onBlur: x,
      onChange: m,
      disabled: o.disabled,
      readOnly: o.readonly,
      required: o.required,
      tabIndex: o.tabIndex,
      className: c("input")
    }, b), n.input, s("input"));
    return /* @__PURE__ */ u.createElement("input", wr({
      ref: i
    }, T));
  }, S = function() {
    var b = e({
      className: c("box")
    }, n.box, s("box")), T = e({
      className: c("icon")
    }, n.icon, s("icon"));
    return /* @__PURE__ */ u.createElement("div", b, /* @__PURE__ */ u.createElement("div", T));
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement("div", wr({
    ref: a
  }, y), w(), S()), g && /* @__PURE__ */ u.createElement(Br, wr({
    target: a,
    content: o.tooltip,
    pt: s("tooltip")
  }, o.tooltipOptions)));
}));
Ka.displayName = "RadioButton";
const yv = ({ option: n, onChange: t, index: e }) => {
  const [r, o] = $e(n), a = (m) => {
    const h = {
      value: r.value,
      label: r.label,
      [m.target.name]: m.target.value
    };
    o(h), t(h);
  };
  Re(() => {
    o(n);
  }, [n]);
  const {
    attributes: i,
    listeners: l,
    setNodeRef: s,
    setActivatorNodeRef: c,
    transform: d
  } = Ks({ id: e }), f = {
    transform: on.Transform.toString(d)
    // transition,
  };
  return /* @__PURE__ */ O.jsx(O.Fragment, { children: /* @__PURE__ */ O.jsxs("div", { className: "flex flex-row gap-2", ref: s, style: f, ...i, children: [
    /* @__PURE__ */ O.jsx(
      en,
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
    /* @__PURE__ */ O.jsxs("div", { className: "p-inputgroup flex-1", children: [
      /* @__PURE__ */ O.jsx(
        $t,
        {
          id: "value",
          value: r.value,
          name: "value",
          onChange: a,
          className: "flex-1",
          placeholder: "Value"
        }
      ),
      /* @__PURE__ */ O.jsx(
        $t,
        {
          id: "label",
          value: r.label,
          name: "label",
          onChange: a,
          className: "flex-1",
          placeholder: "Label"
        }
      )
    ] }),
    /* @__PURE__ */ O.jsx(en, { icon: "pi pi-trash", onClick: () => t(null) })
  ] }) });
}, wv = ({ onInsert: n }) => {
  const t = {
    value: "",
    label: ""
  }, [e, r] = $e(t), o = (i) => {
    const l = {
      value: e.value,
      label: e.label,
      [i.target.name]: i.target.value
    };
    r(l);
  }, a = () => {
    n({ value: e.value, label: e.label }), r(t);
  };
  return /* @__PURE__ */ O.jsx(O.Fragment, { children: /* @__PURE__ */ O.jsxs("div", { className: "flex flex-row gap-2", children: [
    /* @__PURE__ */ O.jsxs("div", { className: "p-inputgroup flex-1", children: [
      /* @__PURE__ */ O.jsx(
        $t,
        {
          id: "value",
          value: e.value,
          name: "value",
          onChange: o,
          className: "",
          placeholder: "Value"
        }
      ),
      /* @__PURE__ */ O.jsx(
        $t,
        {
          id: "label",
          value: e.label,
          name: "label",
          onChange: o,
          className: "",
          placeholder: "Label"
        }
      )
    ] }),
    /* @__PURE__ */ O.jsx(
      en,
      {
        icon: "pi pi-plus",
        onClick: a
      }
    )
  ] }) });
}, xv = ({ item: n, onChange: t, config: e }) => {
  const [r, o] = $e({ ...xn, ...n }), a = (c, d) => {
    const f = Dn(r.options);
    c ? f[d] = c : f.splice(d, 1);
    const m = { ...r, options: f };
    o(m), t(m);
  }, i = (c) => {
    const d = Dn(r.options);
    d.push(c);
    const f = { ...r, options: d };
    o(f), t(f);
  }, l = hs(
    Io(Yo),
    Io(Uo, {
      coordinateGetter: Us
    })
  );
  function s(c) {
    const { active: d, over: f } = c;
    if (f && d.id !== f.id) {
      let m = function(g) {
        return parseInt(g.replace("option-", ""));
      };
      const h = Un(r.options, m(f.id.toString()), m(d.id.toString())), x = { ...r, options: h };
      o(x), t(x);
    }
  }
  return /* @__PURE__ */ O.jsx(O.Fragment, { children: /* @__PURE__ */ O.jsxs("div", { className: "form-item flex flex-column gap-4", children: [
    /* @__PURE__ */ O.jsx(
      Ls,
      {
        sensors: l,
        collisionDetection: xs,
        onDragEnd: s,
        children: /* @__PURE__ */ O.jsx(
          Ws,
          {
            items: r.options.map((c, d) => `option-${d}`),
            strategy: Jp,
            children: r.options.map((c, d) => /* @__PURE__ */ O.jsx(
              yv,
              {
                option: c,
                index: `option-${d}`,
                onChange: (f) => {
                  a(f, d);
                }
              },
              `option-${d}`
            ))
          }
        )
      }
    ),
    /* @__PURE__ */ O.jsx(
      wv,
      {
        onInsert: i
      },
      "item-new"
    )
  ] }) });
}, Ev = ({ item: n, onChange: t, config: e }) => {
  const [r, o] = $e({ ...xn, ...n }), a = (i) => {
    const l = { ...r, [i.target.name]: i.target.value };
    o(l), t(l);
  };
  return Re(() => {
    o({ ...xn, ...n });
  }, [n]), /* @__PURE__ */ O.jsx(O.Fragment, { children: /* @__PURE__ */ O.jsxs(Sn, { activeIndex: 0, children: [
    /* @__PURE__ */ O.jsx(pn, { header: "General", children: /* @__PURE__ */ O.jsxs("div", { className: "form-item flex flex-column gap-4", children: [
      /* @__PURE__ */ O.jsxs("div", { className: "flex flex-column gap-2", children: [
        /* @__PURE__ */ O.jsx("label", { htmlFor: "label", children: "Label" }),
        /* @__PURE__ */ O.jsx(
          $t,
          {
            id: "label",
            value: r.label || "",
            name: "label",
            onChange: a,
            className: "w-full"
          }
        )
      ] }),
      /* @__PURE__ */ O.jsxs("div", { className: "flex flex-column gap-2", children: [
        /* @__PURE__ */ O.jsx("label", { htmlFor: "placeholder", children: "Placeholder" }),
        /* @__PURE__ */ O.jsx(
          $t,
          {
            id: "placeholder",
            value: r.placeholder || "",
            name: "placeholder",
            onChange: a,
            className: "w-full"
          }
        )
      ] })
    ] }) }, "general"),
    /* @__PURE__ */ O.jsxs(pn, { header: "Options", children: [
      e.external_select_options.map((i) => /* @__PURE__ */ O.jsxs("div", { className: "flex align-items-center", children: [
        /* @__PURE__ */ O.jsx(
          Ka,
          {
            inputId: i.key,
            name: "source",
            value: i.key,
            onChange: a,
            checked: r.source === i.key
          }
        ),
        /* @__PURE__ */ O.jsx("label", { htmlFor: i.key, className: "ml-2", children: i.label })
      ] }, i.key)),
      /* @__PURE__ */ O.jsxs("div", { className: "flex align-items-center", children: [
        /* @__PURE__ */ O.jsx(
          Ka,
          {
            inputId: "local",
            name: "source",
            value: "local",
            onChange: a,
            checked: r.source === "local"
          }
        ),
        /* @__PURE__ */ O.jsx("label", { htmlFor: "local", className: "ml-2", children: "Custom" })
      ] }, "local"),
      /* @__PURE__ */ O.jsx("div", { className: "mt-4", children: r.source === "local" && /* @__PURE__ */ O.jsx(xv, { item: r, onChange: t, config: e }) })
    ] }, "options")
  ] }) });
}, Sv = (n) => ({}), Cv = new zr({
  type: xn.type,
  form: new rn({
    render: hf,
    validation: bf
  }),
  settings: new rn({
    render: Ev,
    validation: Sv
  }),
  heading: "Select box",
  description: "select from a list of items in a drop down",
  hidden: !1,
  icon: yf,
  data: xn
}), kn = {
  id: jn(),
  type: "input-text",
  label: "",
  value: "",
  placeholder: ""
}, Ov = ({ item: n, onChange: t, config: e }) => {
  const [r, o] = $e({ ...kn, ...n });
  Re(() => {
    o({ ...kn, ...n });
  }, [n]);
  const a = (l) => {
    const s = { ...kn, ...e, value: l.target.value };
    t(s);
  }, i = Math.random().toString(36).substring(2, 15);
  return /* @__PURE__ */ O.jsx(O.Fragment, { children: /* @__PURE__ */ O.jsxs("div", { className: "flex flex-column gap-2", children: [
    /* @__PURE__ */ O.jsx("label", { htmlFor: i, children: r.label }),
    /* @__PURE__ */ O.jsx(
      $t,
      {
        value: r.value,
        onChange: a,
        placeholder: r.placeholder,
        className: "w-full",
        id: i
      }
    )
  ] }) });
}, Pv = (n) => ({});
var Tl;
function Ua() {
  return Ua = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var r in e) ({}).hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, Ua.apply(null, arguments);
}
var qv = function(t) {
  return /* @__PURE__ */ u.createElement("svg", Ua({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, t), Tl || (Tl = /* @__PURE__ */ u.createElement("path", {
    d: "M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-1.8l18-48h159.6l18 48H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-25.8zM279.8 304H168.2L224 155.1z"
  })));
};
const Tv = ({ item: n, onChange: t, config: e }) => {
  const [r, o] = $e({ ...kn, ...n }), a = (i) => {
    const l = { ...r, [i.target.name]: i.target.value };
    o(l), t(l);
  };
  return Re(() => {
    o({ ...kn, ...n });
  }, [n]), /* @__PURE__ */ O.jsx(O.Fragment, { children: /* @__PURE__ */ O.jsx(Sn, { activeIndex: 0, children: /* @__PURE__ */ O.jsx(pn, { header: "General", children: /* @__PURE__ */ O.jsxs("div", { className: "form-item flex flex-column gap-4", children: [
    /* @__PURE__ */ O.jsxs("div", { className: "flex flex-column gap-2", children: [
      /* @__PURE__ */ O.jsx("label", { htmlFor: "label", children: "Label" }),
      /* @__PURE__ */ O.jsx(
        $t,
        {
          id: "label",
          value: r.label || "",
          name: "label",
          onChange: a,
          className: "w-full"
        }
      )
    ] }),
    /* @__PURE__ */ O.jsxs("div", { className: "flex flex-column gap-2", children: [
      /* @__PURE__ */ O.jsx("label", { htmlFor: "placeholder", children: "Placeholder" }),
      /* @__PURE__ */ O.jsx(
        $t,
        {
          id: "placeholder",
          value: r.placeholder || "",
          name: "placeholder",
          onChange: a,
          className: "w-full"
        }
      )
    ] })
  ] }) }, "general") }) });
}, Iv = (n) => ({}), _v = new zr({
  type: kn.type,
  form: new rn({
    render: Ov,
    validation: Pv
  }),
  settings: new rn({
    render: Tv,
    validation: Iv
  }),
  heading: "Text input",
  description: "a simple box to insert a value into",
  hidden: !1,
  icon: qv,
  data: kn
}), Jo = new Ao(new jo({ label: "Inputs" }));
Jo.registerItem(Fd);
Jo.registerItem(Cv);
Jo.registerItem(_v);
const Zn = {
  id: jn(),
  type: "special-signature",
  label: "",
  value: [],
  color: "#000000"
};
/*!
 * Signature Pad v5.0.3 | https://github.com/szimek/signature_pad
 * (c) 2024 Szymon Nowak | Released under the MIT license
 */
class ko {
  constructor(t, e, r, o) {
    if (isNaN(t) || isNaN(e))
      throw new Error(`Point is invalid: (${t}, ${e})`);
    this.x = +t, this.y = +e, this.pressure = r || 0, this.time = o || Date.now();
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
class mi {
  static fromPoints(t, e) {
    const r = this.calculateControlPoints(t[0], t[1], t[2]).c2, o = this.calculateControlPoints(t[1], t[2], t[3]).c1;
    return new mi(t[1], r, o, t[2], e.start, e.end);
  }
  static calculateControlPoints(t, e, r) {
    const o = t.x - e.x, a = t.y - e.y, i = e.x - r.x, l = e.y - r.y, s = { x: (t.x + e.x) / 2, y: (t.y + e.y) / 2 }, c = { x: (e.x + r.x) / 2, y: (e.y + r.y) / 2 }, d = Math.sqrt(o * o + a * a), f = Math.sqrt(i * i + l * l), m = s.x - c.x, h = s.y - c.y, x = d + f == 0 ? 0 : f / (d + f), g = { x: c.x + m * x, y: c.y + h * x }, C = e.x - g.x, y = e.y - g.y;
    return {
      c1: new ko(s.x + C, s.y + y),
      c2: new ko(c.x + C, c.y + y)
    };
  }
  constructor(t, e, r, o, a, i) {
    this.startPoint = t, this.control2 = e, this.control1 = r, this.endPoint = o, this.startWidth = a, this.endWidth = i;
  }
  length() {
    let e = 0, r, o;
    for (let a = 0; a <= 10; a += 1) {
      const i = a / 10, l = this.point(i, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x), s = this.point(i, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);
      if (a > 0) {
        const c = l - r, d = s - o;
        e += Math.sqrt(c * c + d * d);
      }
      r = l, o = s;
    }
    return e;
  }
  point(t, e, r, o, a) {
    return e * (1 - t) * (1 - t) * (1 - t) + 3 * r * (1 - t) * (1 - t) * t + 3 * o * (1 - t) * t * t + a * t * t * t;
  }
}
class Rv {
  constructor() {
    try {
      this._et = new EventTarget();
    } catch {
      this._et = document;
    }
  }
  addEventListener(t, e, r) {
    this._et.addEventListener(t, e, r);
  }
  dispatchEvent(t) {
    return this._et.dispatchEvent(t);
  }
  removeEventListener(t, e, r) {
    this._et.removeEventListener(t, e, r);
  }
}
function kv(n, t = 250) {
  let e = 0, r = null, o, a, i;
  const l = () => {
    e = Date.now(), r = null, o = n.apply(a, i), r || (a = null, i = []);
  };
  return function(...c) {
    const d = Date.now(), f = t - (d - e);
    return a = this, i = c, f <= 0 || f > t ? (r && (clearTimeout(r), r = null), e = d, o = n.apply(a, i), r || (a = null, i = [])) : r || (r = window.setTimeout(l, f)), o;
  };
}
class Do extends Rv {
  constructor(t, e = {}) {
    var r, o, a;
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
    }, this.velocityFilterWeight = e.velocityFilterWeight || 0.7, this.minWidth = e.minWidth || 0.5, this.maxWidth = e.maxWidth || 2.5, this.throttle = (r = e.throttle) !== null && r !== void 0 ? r : 16, this.minDistance = (o = e.minDistance) !== null && o !== void 0 ? o : 5, this.dotSize = e.dotSize || 0, this.penColor = e.penColor || "black", this.backgroundColor = e.backgroundColor || "rgba(0,0,0,0)", this.compositeOperation = e.compositeOperation || "source-over", this.canvasContextOptions = (a = e.canvasContextOptions) !== null && a !== void 0 ? a : {}, this._strokeMoveUpdate = this.throttle ? kv(Do.prototype._strokeUpdate, this.throttle) : Do.prototype._strokeUpdate, this._ctx = t.getContext("2d", this.canvasContextOptions), this.clear(), this.on();
  }
  clear() {
    const { _ctx: t, canvas: e } = this;
    t.fillStyle = this.backgroundColor, t.clearRect(0, 0, e.width, e.height), t.fillRect(0, 0, e.width, e.height), this._data = [], this._reset(this._getPointGroupOptions()), this._isEmpty = !0;
  }
  fromDataURL(t, e = {}) {
    return new Promise((r, o) => {
      const a = new Image(), i = e.ratio || window.devicePixelRatio || 1, l = e.width || this.canvas.width / i, s = e.height || this.canvas.height / i, c = e.xOffset || 0, d = e.yOffset || 0;
      this._reset(this._getPointGroupOptions()), a.onload = () => {
        this._ctx.drawImage(a, c, d, l, s), r();
      }, a.onerror = (f) => {
        o(f);
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
    const { addEventListener: r } = this._getListenerFunctions();
    switch (t.event.type) {
      case "mousedown":
        r("mousemove", this._handleMouseMove), r("mouseup", this._handleMouseUp);
        break;
      case "touchstart":
        r("touchmove", this._handleTouchMove), r("touchend", this._handleTouchEnd);
        break;
      case "pointerdown":
        r("pointermove", this._handlePointerMove), r("pointerup", this._handlePointerUp);
        break;
    }
    this._drawingStroke = !0;
    const o = this._getPointGroupOptions(), a = Object.assign(Object.assign({}, o), { points: [] });
    this._data.push(a), this._reset(o), this._strokeUpdate(t);
  }
  _strokeUpdate(t) {
    if (!this._drawingStroke)
      return;
    if (this._data.length === 0) {
      this._strokeBegin(t);
      return;
    }
    this.dispatchEvent(new CustomEvent("beforeUpdateStroke", { detail: t }));
    const e = this._createPoint(t.x, t.y, t.pressure), r = this._data[this._data.length - 1], o = r.points, a = o.length > 0 && o[o.length - 1], i = a ? e.distanceTo(a) <= this.minDistance : !1, l = this._getPointGroupOptions(r);
    if (!a || !(a && i)) {
      const s = this._addPoint(e, l);
      a ? s && this._drawCurve(s, l) : this._drawDot(e, l), o.push({
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
  _createPoint(t, e, r) {
    const o = this.canvas.getBoundingClientRect();
    return new ko(t - o.left, e - o.top, r, (/* @__PURE__ */ new Date()).getTime());
  }
  _addPoint(t, e) {
    const { _lastPoints: r } = this;
    if (r.push(t), r.length > 2) {
      r.length === 3 && r.unshift(r[0]);
      const o = this._calculateCurveWidths(r[1], r[2], e), a = mi.fromPoints(r, o);
      return r.shift(), a;
    }
    return null;
  }
  _calculateCurveWidths(t, e, r) {
    const o = r.velocityFilterWeight * e.velocityFrom(t) + (1 - r.velocityFilterWeight) * this._lastVelocity, a = this._strokeWidth(o, r), i = {
      end: a,
      start: this._lastWidth
    };
    return this._lastVelocity = o, this._lastWidth = a, i;
  }
  _strokeWidth(t, e) {
    return Math.max(e.maxWidth / (t + 1), e.minWidth);
  }
  _drawCurveSegment(t, e, r) {
    const o = this._ctx;
    o.moveTo(t, e), o.arc(t, e, r, 0, 2 * Math.PI, !1), this._isEmpty = !1;
  }
  _drawCurve(t, e) {
    const r = this._ctx, o = t.endWidth - t.startWidth, a = Math.ceil(t.length()) * 2;
    r.beginPath(), r.fillStyle = e.penColor;
    for (let i = 0; i < a; i += 1) {
      const l = i / a, s = l * l, c = s * l, d = 1 - l, f = d * d, m = f * d;
      let h = m * t.startPoint.x;
      h += 3 * f * l * t.control1.x, h += 3 * d * s * t.control2.x, h += c * t.endPoint.x;
      let x = m * t.startPoint.y;
      x += 3 * f * l * t.control1.y, x += 3 * d * s * t.control2.y, x += c * t.endPoint.y;
      const g = Math.min(t.startWidth + c * o, e.maxWidth);
      this._drawCurveSegment(h, x, g);
    }
    r.closePath(), r.fill();
  }
  _drawDot(t, e) {
    const r = this._ctx, o = e.dotSize > 0 ? e.dotSize : (e.minWidth + e.maxWidth) / 2;
    r.beginPath(), this._drawCurveSegment(t.x, t.y, o), r.closePath(), r.fillStyle = e.penColor, r.fill();
  }
  _fromData(t, e, r) {
    for (const o of t) {
      const { points: a } = o, i = this._getPointGroupOptions(o);
      if (a.length > 1)
        for (let l = 0; l < a.length; l += 1) {
          const s = a[l], c = new ko(s.x, s.y, s.pressure, s.time);
          l === 0 && this._reset(i);
          const d = this._addPoint(c, i);
          d && e(d, i);
        }
      else
        this._reset(i), r(a[0], i);
    }
  }
  toSVG({ includeBackgroundColor: t = !1 } = {}) {
    const e = this._data, r = Math.max(window.devicePixelRatio || 1, 1), o = 0, a = 0, i = this.canvas.width / r, l = this.canvas.height / r, s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    if (s.setAttribute("xmlns", "http://www.w3.org/2000/svg"), s.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), s.setAttribute("viewBox", `${o} ${a} ${i} ${l}`), s.setAttribute("width", i.toString()), s.setAttribute("height", l.toString()), t && this.backgroundColor) {
      const c = document.createElement("rect");
      c.setAttribute("width", "100%"), c.setAttribute("height", "100%"), c.setAttribute("fill", this.backgroundColor), s.appendChild(c);
    }
    return this._fromData(e, (c, { penColor: d }) => {
      const f = document.createElement("path");
      if (!isNaN(c.control1.x) && !isNaN(c.control1.y) && !isNaN(c.control2.x) && !isNaN(c.control2.y)) {
        const m = `M ${c.startPoint.x.toFixed(3)},${c.startPoint.y.toFixed(3)} C ${c.control1.x.toFixed(3)},${c.control1.y.toFixed(3)} ${c.control2.x.toFixed(3)},${c.control2.y.toFixed(3)} ${c.endPoint.x.toFixed(3)},${c.endPoint.y.toFixed(3)}`;
        f.setAttribute("d", m), f.setAttribute("stroke-width", (c.endWidth * 2.25).toFixed(3)), f.setAttribute("stroke", d), f.setAttribute("fill", "none"), f.setAttribute("stroke-linecap", "round"), s.appendChild(f);
      }
    }, (c, { penColor: d, dotSize: f, minWidth: m, maxWidth: h }) => {
      const x = document.createElement("circle"), g = f > 0 ? f : (m + h) / 2;
      x.setAttribute("r", g.toString()), x.setAttribute("cx", c.x.toString()), x.setAttribute("cy", c.y.toString()), x.setAttribute("fill", d), s.appendChild(x);
    }), s.outerHTML;
  }
}
function Dv(n, t, e) {
  var r = e || {}, o = r.noTrailing, a = o === void 0 ? !1 : o, i = r.noLeading, l = i === void 0 ? !1 : i, s = r.debounceMode, c = s === void 0 ? void 0 : s, d, f = !1, m = 0;
  function h() {
    d && clearTimeout(d);
  }
  function x(C) {
    var y = C || {}, w = y.upcomingOnly, S = w === void 0 ? !1 : w;
    h(), f = !S;
  }
  function g() {
    for (var C = arguments.length, y = new Array(C), w = 0; w < C; w++)
      y[w] = arguments[w];
    var S = this, P = Date.now() - m;
    if (f)
      return;
    function b() {
      m = Date.now(), t.apply(S, y);
    }
    function T() {
      d = void 0;
    }
    !l && c && !d && b(), h(), c === void 0 && P > n ? l ? (m = Date.now(), a || (d = setTimeout(c ? T : b, n))) : b() : a !== !0 && (d = setTimeout(c ? T : b, c === void 0 ? n - P : n));
  }
  return g.cancel = x, g;
}
function jv(n, t, e) {
  var r = {}, o = r.atBegin, a = o === void 0 ? !1 : o;
  return Dv(n, t, {
    debounceMode: a !== !1
  });
}
class ho extends u.PureComponent {
  constructor(t) {
    super(t), Object.defineProperty(this, "canvasRef", { enumerable: !0, configurable: !0, writable: !0, value: u.createRef() }), Object.defineProperty(this, "signaturePad", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "callResizeHandler", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this.state = { canvasWidth: 0, canvasHeight: 0 }, this.callResizeHandler = jv(this.props.debounceInterval, this.handleResize.bind(this));
  }
  componentDidMount() {
    const t = this.canvasRef.current;
    t && (this.props.width && this.props.height || (t.style.width = "100%", window.addEventListener("resize", this.callResizeHandler)), this.signaturePad = new Do(t, this.props.options), this.scaleCanvas(t));
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
    const e = Math.max(window.devicePixelRatio || 1, 1), r = (this.props.width || t.offsetWidth) * e, o = (this.props.height || t.offsetHeight) * e, { canvasWidth: a, canvasHeight: i } = this.state;
    if (r === a && o === i) return;
    let l;
    this.props.redrawOnResize && this.signaturePad && !this.signaturePad.isEmpty() && (l = this.signaturePad.toDataURL()), t.width = r, t.height = o, this.setState({ canvasWidth: r, canvasHeight: o });
    const s = t.getContext("2d");
    s && s.scale(e, e), l ? this.signaturePad.fromDataURL(l) : this.signaturePad && this.signaturePad.clear();
  }
  render() {
    const { canvasProps: t } = this.props;
    return u.createElement("canvas", Object.assign({ "data-testid": "canvas-element", ref: this.canvasRef }, t));
  }
}
Object.defineProperty(ho, "displayName", { enumerable: !0, configurable: !0, writable: !0, value: "react-signature-pad-wrapper" }), Object.defineProperty(ho, "propTypes", { enumerable: !0, configurable: !0, writable: !0, value: { width: Pn.number, height: Pn.number, options: Pn.object, canvasProps: Pn.object, redrawOnResize: Pn.bool.isRequired, debounceInterval: Pn.number.isRequired } }), Object.defineProperty(ho, "defaultProps", { enumerable: !0, configurable: !0, writable: !0, value: { redrawOnResize: !1, debounceInterval: 150 } });
const Av = ({ item: n, onChange: t, config: e }) => {
  const [r, o] = $e({ ...Zn, ...n });
  Re(() => {
    o({ ...Zn, ...n });
  }, [n]);
  const a = Math.random().toString(36).substring(2, 15), i = Te.createRef(), l = () => {
    const d = i.current;
    d && d.instance.clear();
    const f = Dn(r);
    f.value = [], o(f), t(f);
  }, s = () => {
    const d = i.current;
    if (!d)
      return;
    const f = Dn(r);
    d.isEmpty() ? f.value = [] : f.value = d.toData(), o(f), t(f);
  };
  Re(() => {
    r.value && i.current && i.current.fromData(r.value);
  }, [r]);
  const c = {
    height: "10rem",
    width: "100%",
    border: "1px solid #cccccc",
    boxShadow: "0 0 0.32rem #ccc inset"
  };
  return /* @__PURE__ */ O.jsx(O.Fragment, { children: /* @__PURE__ */ O.jsxs("div", { className: "flex flex-column gap-2", children: [
    /* @__PURE__ */ O.jsx("label", { htmlFor: a, children: r.label }),
    /* @__PURE__ */ O.jsx("div", { children: /* @__PURE__ */ O.jsx(
      ho,
      {
        ref: i,
        options: { penColor: "rgb(0, 0, 0)" },
        redrawOnResize: !0,
        canvasProps: { style: c }
      }
    ) }),
    /* @__PURE__ */ O.jsx("button", { onClick: l, children: "clear" }),
    /* @__PURE__ */ O.jsx("button", { onClick: s, children: "save" })
  ] }) });
}, Nv = (n) => ({});
var Il;
function Ya() {
  return Ya = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var r in e) ({}).hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, Ya.apply(null, arguments);
}
var Lv = function(t) {
  return /* @__PURE__ */ u.createElement("svg", Ya({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512"
  }, t), Il || (Il = /* @__PURE__ */ u.createElement("path", {
    d: "M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64v-19.3c-2.7 1.1-5.4 2-8.2 2.7l-60.1 15c-3 .7-6 1.2-9 1.4-.9.1-1.8.2-2.7.2h-64c-6.1 0-11.6-3.4-14.3-8.8l-8.8-17.7c-1.7-3.4-5.1-5.5-8.8-5.5s-7.2 2.1-8.8 5.5l-8.8 17.7c-2.9 5.9-9.2 9.4-15.7 8.8s-12.1-5.1-13.9-11.3L144 381l-9.8 32.8c-6.1 20.3-24.8 34.2-46 34.2H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h8.2c7.1 0 13.3-4.6 15.3-11.4l14.9-49.5c3.4-11.3 13.8-19.1 25.6-19.1s22.2 7.8 25.6 19.1l11.6 38.6c7.4-6.2 16.8-9.7 26.8-9.7 15.9 0 30.4 9 37.5 23.2l4.4 8.8h8.9c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l94.8-94.8V160H256c-17.7 0-32-14.3-32-32V0zm192 0v128h128zm293.8 139.7c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6zM311.9 321c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5.2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4l129.2-129.3-71-71z"
  })));
};
const $v = ({ item: n, onChange: t, config: e }) => {
  const [r, o] = $e({ ...Zn, ...n }), a = (i) => {
    const l = { ...r, [i.target.name]: i.target.value };
    o(l), t(l);
  };
  return Re(() => {
    o({ ...Zn, ...n });
  }, [n]), /* @__PURE__ */ O.jsx(O.Fragment, { children: /* @__PURE__ */ O.jsx(Sn, { activeIndex: 0, children: /* @__PURE__ */ O.jsx(pn, { header: "General", children: /* @__PURE__ */ O.jsx("div", { className: "form-item flex flex-column gap-4", children: /* @__PURE__ */ O.jsxs("div", { className: "flex flex-column gap-2", children: [
    /* @__PURE__ */ O.jsx("label", { htmlFor: "label", children: "Label" }),
    /* @__PURE__ */ O.jsx(
      $t,
      {
        id: "label",
        value: r.label || "",
        name: "label",
        onChange: a,
        className: "w-full"
      }
    )
  ] }) }) }, "general") }) });
}, Fv = (n) => ({}), Mv = new zr({
  type: Zn.type,
  form: new rn({
    render: Av,
    validation: Nv
  }),
  settings: new rn({
    render: $v,
    validation: Fv
  }),
  heading: "Signature",
  description: "Signature capture block",
  hidden: !1,
  icon: Lv,
  data: Zn
}), Xs = new Ao(new jo({ label: "Special" }));
Xs.registerItem(Mv);
const An = new Ao();
An.addRegistry(Jo);
An.addRegistry(os);
An.addRegistry(Xs);
const Js = ({ item: n, onChange: t, config: e }) => {
  const r = An.getByItem(n);
  return n && r ? Te.createElement(r.form.render, {
    item: n,
    onChange: t,
    config: e
  }) : Te.createElement(
    () => /* @__PURE__ */ O.jsxs("div", { children: [
      "The component ",
      n.type,
      " was not found."
    ] })
  );
}, zv = ({ item: n, onChange: t, config: e }) => {
  const r = An.getByItem(n);
  return n && r ? Te.createElement(r.settings.render, {
    item: n,
    onChange: t,
    config: e
  }) : Te.createElement(
    () => /* @__PURE__ */ O.jsxs("div", { children: [
      "The component ",
      n.type,
      " was not found."
    ] })
  );
};
var Hv = {
  root: "p-button-group p-component"
}, so = Le.extend({
  defaultProps: {
    __TYPE: "ButtonGroup",
    children: void 0
  },
  css: {
    classes: Hv
  }
}), Zs = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Ft(), r = u.useContext(yt), o = so.getProps(n, r), a = u.useRef(t), i = so.setMetaData({
    props: o
  }), l = i.ptm, s = i.cx, c = i.isUnstyled;
  Xt(so.css.styles, c, {
    name: "buttongroup"
  }), u.useEffect(function() {
    L.combinedRefs(a, t);
  }, [a, t]);
  var d = e({
    ref: a,
    className: we(s("root")),
    role: "group"
  }, so.getOtherProps(o), l("root"));
  return /* @__PURE__ */ u.createElement("span", d, o.children);
}));
Zs.displayName = "ButtonGroup";
function Ga() {
  return Ga = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, Ga.apply(this, arguments);
}
var Qs = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Vt.getPTI(n);
  return /* @__PURE__ */ u.createElement("svg", Ga({
    ref: t,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e), /* @__PURE__ */ u.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z",
    fill: "currentColor"
  }));
}));
Qs.displayName = "WindowMaximizeIcon";
function Xa() {
  return Xa = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, Xa.apply(this, arguments);
}
var ec = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Vt.getPTI(n);
  return /* @__PURE__ */ u.createElement("svg", Xa({
    ref: t,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e), /* @__PURE__ */ u.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z",
    fill: "currentColor"
  }));
}));
ec.displayName = "WindowMinimizeIcon";
function Ja() {
  return Ja = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, Ja.apply(this, arguments);
}
function Lr(n) {
  "@babel/helpers - typeof";
  return Lr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Lr(n);
}
function Za(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, r = new Array(t); e < t; e++) r[e] = n[e];
  return r;
}
function Bv(n) {
  if (Array.isArray(n)) return Za(n);
}
function Wv(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function tc(n, t) {
  if (n) {
    if (typeof n == "string") return Za(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Za(n, t);
  }
}
function Vv() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Kv(n) {
  return Bv(n) || Wv(n) || tc(n) || Vv();
}
function Uv(n, t) {
  if (Lr(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var r = e.call(n, t || "default");
    if (Lr(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function Yv(n) {
  var t = Uv(n, "string");
  return Lr(t) === "symbol" ? t : String(t);
}
function gi(n, t, e) {
  return t = Yv(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function Gv(n) {
  if (Array.isArray(n)) return n;
}
function Xv(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var r, o, a, i, l = [], s = !0, c = !1;
    try {
      if (a = (e = e.call(n)).next, t !== 0) for (; !(s = (r = a.call(e)).done) && (l.push(r.value), l.length !== t); s = !0) ;
    } catch (d) {
      c = !0, o = d;
    } finally {
      try {
        if (!s && e.return != null && (i = e.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw o;
      }
    }
    return l;
  }
}
function Jv() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gn(n, t) {
  return Gv(n) || Xv(n, t) || tc(n, t) || Jv();
}
var Zv = "", xr = Le.extend({
  defaultProps: {
    __TYPE: "FocusTrap",
    children: void 0
  },
  css: {
    styles: Zv
  },
  getProps: function(t) {
    return L.getMergedProps(t, xr.defaultProps);
  },
  getOtherProps: function(t) {
    return L.getDiffProps(t, xr.defaultProps);
  }
});
function _l(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function Qv(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _l(Object(e), !0).forEach(function(r) {
      gi(n, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : _l(Object(e)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return n;
}
var em = /* @__PURE__ */ Te.memo(/* @__PURE__ */ Te.forwardRef(function(n, t) {
  var e = Te.useRef(null), r = Te.useRef(null), o = Te.useRef(null), a = Te.useContext(yt), i = xr.getProps(n, a), l = {
    props: i
  };
  In(xr.css.styles, {
    name: "focustrap"
  });
  var s = xr.setMetaData(Qv({}, l));
  s.ptm, Te.useImperativeHandle(t, function() {
    return {
      props: i,
      getInk: function() {
        return r.current;
      },
      getTarget: function() {
        return e.current;
      }
    };
  }), Gt(function() {
    i.disabled || (e.current = c(), d(e.current));
  });
  var c = function() {
    return r.current && r.current.parentElement;
  }, d = function(C) {
    var y = i || {}, w = y.autoFocusSelector, S = w === void 0 ? "" : w, P = y.firstFocusableSelector, b = P === void 0 ? "" : P, T = y.autoFocus, I = T === void 0 ? !1 : T, U = "".concat(f(S)), $ = "[autofocus]".concat(U, ", [data-pc-autofocus='true']").concat(U), j = A.getFirstFocusableElement(C, $);
    I && !j && (j = A.getFirstFocusableElement(C, f(b))), A.focus(j);
  }, f = function(C) {
    return ':not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])'.concat(C ?? "");
  }, m = function(C) {
    var y, w = C.currentTarget, S = C.relatedTarget, P = S === w.$_pfocustrap_lasthiddenfocusableelement || !((y = e.current) !== null && y !== void 0 && y.contains(S)) ? A.getFirstFocusableElement(w.parentElement, f(w.$_pfocustrap_focusableselector)) : w.$_pfocustrap_lasthiddenfocusableelement;
    A.focus(P);
  }, h = function(C) {
    var y, w = C.currentTarget, S = C.relatedTarget, P = S === w.$_pfocustrap_firsthiddenfocusableelement || !((y = e.current) !== null && y !== void 0 && y.contains(S)) ? A.getLastFocusableElement(w.parentElement, f(w.$_pfocustrap_focusableselector)) : w.$_pfocustrap_firsthiddenfocusableelement;
    A.focus(P);
  }, x = function() {
    var C = i || {}, y = C.tabIndex, w = y === void 0 ? 0 : y, S = function(I, U) {
      return /* @__PURE__ */ Te.createElement("span", {
        ref: U === "firstfocusableelement" ? r : o,
        className: "p-hidden-accessible p-hidden-focusable",
        tabIndex: w,
        role: "presentation",
        "aria-hidden": !0,
        "data-p-hidden-accessible": !0,
        "data-p-hidden-focusable": !0,
        onFocus: I,
        "data-pc-section": U
      });
    }, P = S(m, "firstfocusableelement"), b = S(h, "lastfocusableelement");
    return P.ref.current && b.ref.current && (P.ref.current.$_pfocustrap_lasthiddenfocusableelement = b.ref.current, b.ref.current.$_pfocustrap_firsthiddenfocusableelement = P.ref.current), /* @__PURE__ */ Te.createElement(Te.Fragment, null, P, i.children, b);
  };
  return x();
})), tm = em;
function Rl(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function nm(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rl(Object(e), !0).forEach(function(r) {
      gi(n, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Rl(Object(e)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return n;
}
var rm = {
  closeButtonIcon: "p-dialog-header-close-icon",
  closeButton: "p-dialog-header-icon p-dialog-header-close p-link",
  maximizableIcon: "p-dialog-header-maximize-icon",
  maximizableButton: "p-dialog-header-icon p-dialog-header-maximize p-link",
  header: function(t) {
    var e = t.props;
    return we("p-dialog-header", e.headerClassName);
  },
  headerTitle: "p-dialog-title",
  headerIcons: "p-dialog-header-icons",
  content: function(t) {
    var e = t.props;
    return we("p-dialog-content", e.contentClassName);
  },
  footer: function(t) {
    var e = t.props;
    return we("p-dialog-footer", e.footerClassName);
  },
  mask: function(t) {
    var e = t.props, r = t.maskVisibleState, o = ["center", "left", "right", "top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right"], a = o.find(function(i) {
      return i === e.position || i.replace("-", "") === e.position;
    });
    return we("p-dialog-mask", a ? "p-dialog-".concat(a) : "", {
      "p-component-overlay p-component-overlay-enter": e.modal,
      "p-dialog-visible": r,
      "p-dialog-draggable": e.draggable,
      "p-dialog-resizable": e.resizable
    }, e.maskClassName);
  },
  root: function(t) {
    var e = t.props, r = t.maximized, o = t.context;
    return we("p-dialog p-component", {
      "p-dialog-rtl": e.rtl,
      "p-dialog-maximized": r,
      "p-dialog-default": !r,
      "p-input-filled": o && o.inputStyle === "filled" || bt.inputStyle === "filled",
      "p-ripple-disabled": o && o.ripple === !1 || bt.ripple === !1
    });
  },
  transition: "p-dialog"
}, om = `
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
`, am = {
  mask: function(t) {
    var e = t.props;
    return nm({
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
}, co = Le.extend({
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
    classes: rm,
    styles: om,
    inlineStyles: am
  }
});
function kl(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function ma(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? kl(Object(e), !0).forEach(function(r) {
      gi(n, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : kl(Object(e)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return n;
}
var nc = /* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Ft(), r = u.useContext(yt), o = co.getProps(n, r), a = o.id ? o.id : Lo(), i = u.useState(a), l = gn(i, 2), s = l[0];
  l[1];
  var c = u.useState(!1), d = gn(c, 2), f = d[0], m = d[1], h = u.useState(!1), x = gn(h, 2), g = x[0], C = x[1], y = u.useState(o.maximized), w = gn(y, 2), S = w[0], P = w[1], b = u.useRef(null), T = u.useRef(null), I = u.useRef(null), U = u.useRef(null), $ = u.useRef(null), j = u.useRef(null), R = u.useRef(null), ne = u.useRef(!1), B = u.useRef(!1), re = u.useRef(null), ae = u.useRef(null), he = u.useRef(null), Se = u.useRef(a), pe = u.useRef(null), Z = o.onMaximize ? o.maximized : S, _ = g && (o.blockScroll || o.maximizable && Z), J = o.closable && o.closeOnEscape && g, Q = Qc("dialog", J), X = co.setMetaData(ma(ma({
    props: o
  }, o.__parentMetadata), {}, {
    state: {
      id: s,
      maximized: Z,
      containerVisible: f
    }
  })), Y = X.ptm, fe = X.cx, ve = X.sx, ce = X.isUnstyled;
  Xt(co.css.styles, ce, {
    name: "dialog"
  }), Wl({
    callback: function(E) {
      rt(E);
    },
    when: J && Q,
    priority: [Hl.DIALOG, Q]
  });
  var K = yn({
    type: "mousemove",
    target: function() {
      return window.document;
    },
    listener: function(E) {
      return z(E);
    }
  }), D = gn(K, 2), F = D[0], ue = D[1], M = yn({
    type: "mouseup",
    target: function() {
      return window.document;
    },
    listener: function(E) {
      return ge(E);
    }
  }), Ie = gn(M, 2), Ne = Ie[0], je = Ie[1], Ae = yn({
    type: "mousemove",
    target: function() {
      return window.document;
    },
    listener: function(E) {
      return kt(E);
    }
  }), We = gn(Ae, 2), xt = We[0], dt = We[1], lt = yn({
    type: "mouseup",
    target: function() {
      return window.document;
    },
    listener: function(E) {
      return ft(E);
    }
  }), nt = gn(lt, 2), pt = nt[0], Et = nt[1], rt = function(E) {
    o.onHide(), E.preventDefault();
  }, Je = function() {
    var E = document.activeElement, H = E && b.current && b.current.contains(E);
    !H && o.closable && o.showHeader && R.current && R.current.focus();
  }, Mt = function(E) {
    I.current = E.target, o.onPointerDown && o.onPointerDown(E);
  }, Ge = function(E) {
    o.dismissableMask && o.modal && T.current === E.target && !I.current && rt(E), o.onMaskClick && o.onMaskClick(E), I.current = null;
  }, ot = function(E) {
    o.onMaximize ? o.onMaximize({
      originalEvent: E,
      maximized: !Z
    }) : P(function(H) {
      return !H;
    }), E.preventDefault();
  }, ct = function(E) {
    A.hasClass(E.target, "p-dialog-header-icon") || A.hasClass(E.target.parentElement, "p-dialog-header-icon") || o.draggable && (ne.current = !0, re.current = E.pageX, ae.current = E.pageY, b.current.style.margin = "0", A.addClass(document.body, "p-unselectable-text"), o.onDragStart && o.onDragStart(E));
  }, kt = function(E) {
    if (ne.current) {
      var H = A.getOuterWidth(b.current), de = A.getOuterHeight(b.current), xe = E.pageX - re.current, se = E.pageY - ae.current, q = b.current.getBoundingClientRect(), k = q.left + xe, W = q.top + se, te = A.getViewport(), ie = getComputedStyle(b.current), oe = parseFloat(ie.marginLeft), me = parseFloat(ie.marginTop);
      b.current.style.position = "fixed", o.keepInViewport ? (k >= o.minX && k + H < te.width && (re.current = E.pageX, b.current.style.left = k - oe + "px"), W >= o.minY && W + de < te.height && (ae.current = E.pageY, b.current.style.top = W - me + "px")) : (re.current = E.pageX, b.current.style.left = k - oe + "px", ae.current = E.pageY, b.current.style.top = W - me + "px"), o.onDrag && o.onDrag(E);
    }
  }, ft = function(E) {
    ne.current && (ne.current = !1, A.removeClass(document.body, "p-unselectable-text"), o.onDragEnd && o.onDragEnd(E));
  }, vt = function(E) {
    o.resizable && (B.current = !0, re.current = E.pageX, ae.current = E.pageY, A.addClass(document.body, "p-unselectable-text"), o.onResizeStart && o.onResizeStart(E));
  }, Ce = function(E, H, de) {
    !de && (de = A.getViewport());
    var xe = parseInt(E);
    return /^(\d+|(\.\d+))(\.\d+)?%$/.test(E) ? xe * (de[H] / 100) : xe;
  }, z = function(E) {
    if (B.current) {
      var H = E.pageX - re.current, de = E.pageY - ae.current, xe = A.getOuterWidth(b.current), se = A.getOuterHeight(b.current), q = b.current.getBoundingClientRect(), k = A.getViewport(), W = !parseInt(b.current.style.top) || !parseInt(b.current.style.left), te = Ce(b.current.style.minWidth, "width", k), ie = Ce(b.current.style.minHeight, "height", k), oe = xe + H, me = se + de;
      W && (oe = oe + H, me = me + de), (!te || oe > te) && q.left + oe < k.width && (b.current.style.width = oe + "px"), (!ie || me > ie) && q.top + me < k.height && (b.current.style.height = me + "px"), re.current = E.pageX, ae.current = E.pageY, o.onResize && o.onResize(E);
    }
  }, ge = function(E) {
    B.current && (B.current = !1, A.removeClass(document.body, "p-unselectable-text"), o.onResizeEnd && o.onResizeEnd(E));
  }, _e = function() {
    b.current.style.position = "", b.current.style.left = "", b.current.style.top = "", b.current.style.margin = "";
  }, Pe = function() {
    b.current.setAttribute(Se.current, "");
  }, qe = function() {
    o.onShow && o.onShow(), o.focusOnShow && Je(), Fe();
  }, Ve = function() {
    o.modal && !ce() && A.addClass(T.current, "p-component-overlay-leave");
  }, ut = function() {
    ne.current = !1, Qt.clear(T.current), m(!1), Me(), A.focus(pe.current), pe.current = null;
  }, Fe = function() {
    it();
  }, Me = function() {
    be();
  }, He = function() {
    var E = document.primeDialogParams && document.primeDialogParams.some(function(H) {
      return H.hasBlockScroll;
    });
    E ? A.blockBodyScroll() : A.unblockBodyScroll();
  }, at = function(E) {
    if (E && g) {
      var H = {
        id: s,
        hasBlockScroll: _
      };
      document.primeDialogParams || (document.primeDialogParams = []);
      var de = document.primeDialogParams.findIndex(function(xe) {
        return xe.id === s;
      });
      de === -1 ? document.primeDialogParams = [].concat(Kv(document.primeDialogParams), [H]) : document.primeDialogParams = document.primeDialogParams.toSpliced(de, 1, H);
    } else
      document.primeDialogParams = document.primeDialogParams && document.primeDialogParams.filter(function(xe) {
        return xe.id !== s;
      });
    He();
  }, it = function() {
    o.draggable && (xt(), pt()), o.resizable && (F(), Ne());
  }, be = function() {
    dt(), Et(), ue(), je();
  }, N = function() {
    he.current = A.createInlineStyle(r && r.nonce || bt.nonce, r && r.styleContainer);
    var E = "";
    for (var H in o.breakpoints)
      E = E + `
                @media screen and (max-width: `.concat(H, `) {
                     [data-pc-name="dialog"][`).concat(Se.current, `] {
                        width: `).concat(o.breakpoints[H], ` !important;
                    }
                }
            `);
    he.current.innerHTML = E;
  }, G = function() {
    he.current = A.removeInlineStyle(he.current);
  };
  Gt(function() {
    at(!0), o.visible && m(!0);
  }), u.useEffect(function() {
    return o.breakpoints && N(), function() {
      G();
    };
  }, [o.breakpoints]), tt(function() {
    o.visible && !f && m(!0), o.visible !== g && f && C(o.visible), o.visible && (pe.current = document.activeElement);
  }, [o.visible, f]), tt(function() {
    f && (Qt.set("modal", T.current, r && r.autoZIndex || bt.autoZIndex, o.baseZIndex || r && r.zIndex.modal || bt.zIndex.modal), C(!0));
  }, [f]), tt(function() {
    at(!0);
  }, [_, g]), an(function() {
    Me(), at(!1), A.removeInlineStyle(he.current), Qt.clear(T.current);
  }), u.useImperativeHandle(t, function() {
    return {
      props: o,
      resetPosition: _e,
      getElement: function() {
        return b.current;
      },
      getMask: function() {
        return T.current;
      },
      getContent: function() {
        return U.current;
      },
      getHeader: function() {
        return $.current;
      },
      getFooter: function() {
        return j.current;
      },
      getCloseButton: function() {
        return R.current;
      }
    };
  });
  var ee = function() {
    if (o.closable) {
      var E = o.ariaCloseIconLabel || Xn("close"), H = e({
        className: fe("closeButtonIcon"),
        "aria-hidden": !0
      }, Y("closeButtonIcon")), de = o.closeIcon || /* @__PURE__ */ u.createElement(Wr, H), xe = Nt.getJSXIcon(de, ma({}, H), {
        props: o
      }), se = e({
        ref: R,
        type: "button",
        className: fe("closeButton"),
        "aria-label": E,
        onClick: rt,
        onKeyDown: function(k) {
          k.key !== "Escape" && k.stopPropagation();
        }
      }, Y("closeButton"));
      return /* @__PURE__ */ u.createElement("button", se, xe, /* @__PURE__ */ u.createElement(En, null));
    }
    return null;
  }, ye = function() {
    var E, H = e({
      className: fe("maximizableIcon")
    }, Y("maximizableIcon"));
    Z ? E = o.minimizeIcon || /* @__PURE__ */ u.createElement(ec, H) : E = o.maximizeIcon || /* @__PURE__ */ u.createElement(Qs, H);
    var de = Nt.getJSXIcon(E, H, {
      props: o
    });
    if (o.maximizable) {
      var xe = e({
        type: "button",
        className: fe("maximizableButton"),
        onClick: ot
      }, Y("maximizableButton"));
      return /* @__PURE__ */ u.createElement("button", xe, de, /* @__PURE__ */ u.createElement(En, null));
    }
    return null;
  }, Be = function() {
    if (o.showHeader) {
      var E = ee(), H = ye(), de = L.getJSXElement(o.icons, o), xe = L.getJSXElement(o.header, o), se = s + "_header", q = e({
        ref: $,
        style: o.headerStyle,
        className: fe("header"),
        onMouseDown: ct
      }, Y("header")), k = e({
        id: se,
        className: fe("headerTitle")
      }, Y("headerTitle")), W = e({
        className: fe("headerIcons")
      }, Y("headerIcons"));
      return /* @__PURE__ */ u.createElement("div", q, /* @__PURE__ */ u.createElement("div", k, xe), /* @__PURE__ */ u.createElement("div", W, de, H, E));
    }
    return null;
  }, Qe = function() {
    var E = s + "_content", H = e({
      id: E,
      ref: U,
      style: o.contentStyle,
      className: fe("content")
    }, Y("content"));
    return /* @__PURE__ */ u.createElement("div", H, o.children);
  }, Pt = function() {
    var E = L.getJSXElement(o.footer, o), H = e({
      ref: j,
      className: fe("footer")
    }, Y("footer"));
    return E && /* @__PURE__ */ u.createElement("div", H, E);
  }, zt = function() {
    return o.resizable ? /* @__PURE__ */ u.createElement("span", {
      className: "p-resizable-handle",
      style: {
        zIndex: 90
      },
      onMouseDown: vt
    }) : null;
  }, qt = function() {
    var E, H = {
      header: o.header,
      content: o.message,
      message: o == null || (E = o.children) === null || E === void 0 || (E = E[1]) === null || E === void 0 || (E = E.props) === null || E === void 0 ? void 0 : E.children
    }, de = {
      headerRef: $,
      contentRef: U,
      footerRef: j,
      closeRef: R,
      hide: rt,
      message: H
    };
    return L.getJSXElement(n.content, de);
  }, Tt = function() {
    var E = Be(), H = Qe(), de = Pt(), xe = zt();
    return /* @__PURE__ */ u.createElement(u.Fragment, null, E, H, de, xe);
  }, Ht = function() {
    var E = s + "_header", H = s + "_content", de = {
      enter: o.position === "center" ? 150 : 300,
      exit: o.position === "center" ? 150 : 300
    }, xe = e({
      ref: T,
      style: ve("mask"),
      className: fe("mask"),
      onPointerUp: Ge
    }, Y("mask")), se = e({
      ref: b,
      id: s,
      className: we(o.className, fe("root", {
        props: o,
        maximized: Z,
        context: r
      })),
      style: o.style,
      onClick: o.onClick,
      role: "dialog",
      "aria-labelledby": E,
      "aria-describedby": H,
      "aria-modal": o.modal,
      onPointerDown: Mt
    }, co.getOtherProps(o), Y("root")), q = e({
      classNames: fe("transition"),
      timeout: de,
      in: g,
      options: o.transitionOptions,
      unmountOnExit: !0,
      onEnter: Pe,
      onEntered: qe,
      onExiting: Ve,
      onExited: ut
    }, Y("transition")), k = null;
    n != null && n.content ? k = qt() : k = Tt();
    var W = /* @__PURE__ */ u.createElement("div", xe, /* @__PURE__ */ u.createElement(Mo, Ja({
      nodeRef: b
    }, q), /* @__PURE__ */ u.createElement("div", se, /* @__PURE__ */ u.createElement(tm, {
      autoFocus: o.focusOnShow
    }, k))));
    return /* @__PURE__ */ u.createElement(Hr, {
      element: W,
      appendTo: o.appendTo,
      visible: !0
    });
  };
  return f && Ht();
});
nc.displayName = "Dialog";
function Qa() {
  return Qa = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, Qa.apply(this, arguments);
}
function im(n) {
  if (Array.isArray(n)) return n;
}
function lm(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var r, o, a, i, l = [], s = !0, c = !1;
    try {
      if (a = (e = e.call(n)).next, t !== 0) for (; !(s = (r = a.call(e)).done) && (l.push(r.value), l.length !== t); s = !0) ;
    } catch (d) {
      c = !0, o = d;
    } finally {
      try {
        if (!s && e.return != null && (i = e.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw o;
      }
    }
    return l;
  }
}
function Dl(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, r = new Array(t); e < t; e++) r[e] = n[e];
  return r;
}
function sm(n, t) {
  if (n) {
    if (typeof n == "string") return Dl(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Dl(n, t);
  }
}
function cm() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jl(n, t) {
  return im(n) || lm(n, t) || sm(n, t) || cm();
}
function $r(n) {
  "@babel/helpers - typeof";
  return $r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $r(n);
}
function um(n, t) {
  if ($r(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var r = e.call(n, t || "default");
    if ($r(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function dm(n) {
  var t = um(n, "string");
  return $r(t) === "symbol" ? t : String(t);
}
function fm(n, t, e) {
  return t = dm(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
var pm = {
  root: "p-confirm-dialog",
  message: "p-confirm-dialog-message",
  icon: "p-confirm-dialog-icon",
  acceptButton: "p-confirm-dialog-accept",
  rejectButton: function(t) {
    var e = t.getPropValue;
    return we("p-confirm-dialog-reject", {
      "p-button-text": !e("rejectClassName")
    });
  }
}, uo = Le.extend({
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
    classes: pm
  }
});
function Al(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function Hn(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Al(Object(e), !0).forEach(function(r) {
      fm(n, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Al(Object(e)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return n;
}
var vm = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  t = Hn(Hn({}, t), {
    visible: t.visible === void 0 ? !0 : t.visible
  }), t.visible && Rn.emit("confirm-dialog", t);
  var e = function() {
    var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Rn.emit("confirm-dialog", Hn(Hn(Hn({}, t), a), {
      visible: !0
    }));
  }, r = function() {
    Rn.emit("confirm-dialog", {
      visible: !1
    });
  };
  return {
    show: e,
    hide: r
  };
}, rc = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Ft(), r = u.useContext(yt), o = uo.getProps(n, r), a = u.useState(o.visible), i = jl(a, 2), l = i[0], s = i[1], c = u.useState(!1), d = jl(c, 2), f = d[0], m = d[1], h = u.useRef(null), x = u.useRef(!1), g = u.useRef(null), C = function() {
    var Z = o.group;
    return h.current && (Z = h.current.group), Object.assign({}, o, h.current, {
      group: Z
    });
  }, y = function(Z) {
    return C()[Z];
  }, w = function(Z) {
    for (var _ = arguments.length, J = new Array(_ > 1 ? _ - 1 : 0), Q = 1; Q < _; Q++)
      J[Q - 1] = arguments[Q];
    return L.getPropValue(y(Z), J);
  }, S = y("acceptLabel") || Xn("accept"), P = y("rejectLabel") || Xn("reject"), b = {
    props: o,
    state: {
      visible: l
    }
  }, T = uo.setMetaData(b), I = T.ptm, U = T.cx, $ = T.isUnstyled;
  Xt(uo.css.styles, $, {
    name: "confirmdialog"
  });
  var j = function() {
    x.current || (x.current = !0, w("accept"), B("accept"));
  }, R = function() {
    x.current || (x.current = !0, w("reject"), B("reject"));
  }, ne = function() {
    var Z = C();
    Z.group === o.group && (s(!0), x.current = !1, g.current = document.activeElement);
  }, B = function() {
    var Z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "cancel";
    s(!1), w("onHide", {
      result: Z
    }), A.focus(g.current), g.current = null;
  }, re = function(Z) {
    if (Z.tagKey === o.tagKey) {
      var _ = l !== Z.visible, J = y("target") !== Z.target;
      J && !o.target ? (B(), h.current = Z, m(!0)) : _ && (h.current = Z, Z.visible ? ne() : B());
    }
  };
  u.useEffect(function() {
    o.visible ? ne() : B();
  }, [o.visible]), u.useEffect(function() {
    return !o.target && !o.message && Rn.on("confirm-dialog", re), function() {
      Rn.off("confirm-dialog", re);
    };
  }, [o.target]), tt(function() {
    f && ne();
  }, [f]), an(function() {
    Rn.off("confirm-dialog", re);
  }), u.useImperativeHandle(t, function() {
    return {
      props: o,
      confirm: re
    };
  });
  var ae = function() {
    var Z = y("defaultFocus"), _ = we("p-confirm-dialog-accept", y("acceptClassName")), J = we("p-confirm-dialog-reject", {
      "p-button-text": !y("rejectClassName")
    }, y("rejectClassName")), Q = e({
      label: P,
      autoFocus: Z === "reject",
      icon: y("rejectIcon"),
      className: we(y("rejectClassName"), U("rejectButton", {
        getPropValue: y
      })),
      onClick: R,
      pt: I("rejectButton"),
      unstyled: o.unstyled,
      __parentMetadata: {
        parent: b
      }
    }, I("rejectButton")), X = e({
      label: S,
      autoFocus: Z === void 0 || Z === "accept",
      icon: y("acceptIcon"),
      className: we(y("acceptClassName"), U("acceptButton")),
      onClick: j,
      pt: I("acceptButton"),
      unstyled: o.unstyled,
      __parentMetadata: {
        parent: b
      }
    }, I("acceptButton")), Y = /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(en, Q), /* @__PURE__ */ u.createElement(en, X));
    if (y("footer")) {
      var fe = {
        accept: j,
        reject: R,
        acceptClassName: _,
        rejectClassName: J,
        acceptLabel: S,
        rejectLabel: P,
        element: Y,
        props: C()
      };
      return L.getJSXElement(y("footer"), fe);
    }
    return Y;
  }, he = function() {
    var Z = C(), _ = L.getJSXElement(y("message"), Z), J = e({
      className: U("icon")
    }, I("icon")), Q = Nt.getJSXIcon(y("icon"), Hn({}, J), {
      props: Z
    }), X = ae(), Y = e({
      className: U("message")
    }, I("message")), fe = e({
      visible: l,
      className: we(y("className"), U("root")),
      footer: X,
      onHide: B,
      breakpoints: y("breakpoints"),
      pt: Z.pt,
      unstyled: o.unstyled,
      appendTo: y("appendTo"),
      __parentMetadata: {
        parent: b
      }
    }, uo.getOtherProps(Z));
    return /* @__PURE__ */ u.createElement(nc, Qa({}, fe, {
      content: n == null ? void 0 : n.content
    }), Q, /* @__PURE__ */ u.createElement("span", Y, _));
  }, Se = he();
  return /* @__PURE__ */ u.createElement(Hr, {
    element: Se,
    appendTo: y("appendTo")
  });
}));
rc.displayName = "ConfirmDialog";
function mm({ id: n, item: t, active: e, setActive: r, onItemChange: o, onItemRemove: a, config: i }) {
  const { attributes: l, listeners: s, setNodeRef: c, setActivatorNodeRef: d, transform: f, transition: m } = Ks({
    id: n,
    data: {
      id: n,
      item: t
    }
  }), h = {
    transform: on.Transform.toString(f),
    transition: m
  };
  let x = "sortable-item";
  t.id == (e == null ? void 0 : e.id) && (x = x + " active");
  const g = () => {
    vm({
      message: "Are you sure you want to remove this item?",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      accept: () => a(n)
      // reject: () => rejectFunc()
    });
  };
  let C = /* @__PURE__ */ O.jsx(en, { size: "small", outlined: !0, label: "Edit", icon: "pi pi-pencil", onClick: () => r(t) });
  return e && e.id == t.id && (C = /* @__PURE__ */ O.jsx(en, { size: "small", outlined: !0, label: "Done", icon: "pi pi-pencil", onClick: () => r(void 0) })), /* @__PURE__ */ O.jsx(O.Fragment, { children: /* @__PURE__ */ O.jsxs("div", { ref: c, style: h, ...l, className: x, children: [
    /* @__PURE__ */ O.jsx(Js, { item: t, onChange: o, config: i }),
    /* @__PURE__ */ O.jsxs("div", { className: "flex flex-row align-items-center item-footer", children: [
      /* @__PURE__ */ O.jsxs("div", { className: "flex-grow-1 item-type", children: [
        " ",
        t.type
      ] }),
      /* @__PURE__ */ O.jsxs(Zs, { children: [
        " ",
        /* @__PURE__ */ O.jsx(
          en,
          {
            ...s,
            ref: d,
            size: "small",
            outlined: !0,
            label: "Order",
            icon: "pi pi-sort"
          }
        ),
        C,
        /* @__PURE__ */ O.jsx(en, { size: "small", outlined: !0, label: "Remove", icon: "pi pi-trash", onClick: g })
      ] })
    ] })
  ] }) });
}
function gm({ form: n, onFormChange: t, activeItem: e, setActiveItem: r, config: o }) {
  const [a, i] = $e((n == null ? void 0 : n.items) ?? []);
  Re(() => {
    n && n.items && n.items != a && i(n.items ?? []);
  }, [n]);
  const l = (x) => {
    const g = Dn(n);
    g.items = g.items.filter(
      (C) => C.id != x
    ), t(g), e && e.id == x && r(void 0);
  }, s = (x) => {
    const g = a.map((y) => y.id == x.id ? x : y);
    i(g);
    const C = Dn(n);
    C.items = g, t(C);
  }, { listeners: c, setNodeRef: d, transform: f, transition: m } = Ms({
    id: "canvas_droppable",
    data: {
      parent: null,
      isContainer: !0
    }
  }), h = {
    transform: on.Transform.toString(f),
    transition: m
  };
  return /* @__PURE__ */ O.jsx(O.Fragment, { children: /* @__PURE__ */ O.jsx("div", { ref: d, className: "canvas", style: h, ...c, children: a == null ? void 0 : a.map((x) => /* @__PURE__ */ O.jsx(
    mm,
    {
      id: x.id,
      item: x,
      active: e,
      setActive: r,
      onItemChange: s,
      onItemRemove: l,
      config: o
    },
    x.id
  )) }) });
}
function hm({ ...n }) {
  const [t, e] = $e(n.form), [r, o] = $e(n.activeItem), a = (s) => {
    o(s);
    const c = Dn(t);
    c.items = c.items.map((d) => d.id == s.id ? s : d), n.onFormChange(c);
  }, i = (s) => {
    const c = { ...t, [s.target.name]: s.target.value };
    e(c), n.onFormChange(c);
  }, l = () => {
    n.setActiveItem(void 0);
  };
  if (Re(() => {
    o(n.activeItem);
  }, [n.activeItem]), Re(() => {
    e(n.form);
  }, [n.form]), r) {
    const s = An.getByItem(r);
    if (s) {
      const c = s.icon;
      return /* @__PURE__ */ O.jsx(O.Fragment, { children: /* @__PURE__ */ O.jsxs("div", { className: "properties active", children: [
        /* @__PURE__ */ O.jsxs("div", { className: "item-panel-item flex align-items-center", children: [
          /* @__PURE__ */ O.jsxs("div", { className: "flex-grow-1 flex align-items-center", children: [
            /* @__PURE__ */ O.jsx("div", { className: "item-icon mr-2", children: /* @__PURE__ */ O.jsx(c, {}) }),
            /* @__PURE__ */ O.jsx("div", { children: /* @__PURE__ */ O.jsx("h2", { children: s.heading }) })
          ] }),
          /* @__PURE__ */ O.jsx(en, { onClick: l, size: "small", outlined: !0, icon: "pi pi-times" })
        ] }),
        /* @__PURE__ */ O.jsx(zv, { item: r, onChange: a, config: n.config })
      ] }) });
    }
    return Te.createElement(
      () => /* @__PURE__ */ O.jsxs("div", { children: [
        "The component ",
        r.type,
        " was not found."
      ] })
    );
  } else
    return /* @__PURE__ */ O.jsx(O.Fragment, { children: /* @__PURE__ */ O.jsxs("div", { className: "properties", children: [
      /* @__PURE__ */ O.jsx("div", { className: "item-panel-item flex px-3", children: /* @__PURE__ */ O.jsx("div", { children: /* @__PURE__ */ O.jsx("h2", { children: "Form Settings" }) }) }),
      /* @__PURE__ */ O.jsx(Sn, { activeIndex: 0, children: /* @__PURE__ */ O.jsx(pn, { header: "General", children: /* @__PURE__ */ O.jsx("div", { className: "form-item flex flex-column gap-4", children: /* @__PURE__ */ O.jsxs("div", { className: "flex flex-column gap-2", children: [
        /* @__PURE__ */ O.jsx("label", { htmlFor: "label", children: "Form label" }),
        /* @__PURE__ */ O.jsx(
          $t,
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
function ei() {
  return ei = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, ei.apply(this, arguments);
}
var oc = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Vt.getPTI(n);
  return /* @__PURE__ */ u.createElement("svg", ei({
    ref: t,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e), /* @__PURE__ */ u.createElement("path", {
    d: "M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z",
    fill: "currentColor"
  }));
}));
oc.displayName = "ChevronLeftIcon";
function ti(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, r = new Array(t); e < t; e++) r[e] = n[e];
  return r;
}
function bm(n) {
  if (Array.isArray(n)) return ti(n);
}
function ym(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function ac(n, t) {
  if (n) {
    if (typeof n == "string") return ti(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return ti(n, t);
  }
}
function wm() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xm(n) {
  return bm(n) || ym(n) || ac(n) || wm();
}
function Fr(n) {
  "@babel/helpers - typeof";
  return Fr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fr(n);
}
function Em(n, t) {
  if (Fr(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var r = e.call(n, t || "default");
    if (Fr(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function Sm(n) {
  var t = Em(n, "string");
  return Fr(t) === "symbol" ? t : String(t);
}
function ic(n, t, e) {
  return t = Sm(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function Cm(n) {
  if (Array.isArray(n)) return n;
}
function Om(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var r, o, a, i, l = [], s = !0, c = !1;
    try {
      if (a = (e = e.call(n)).next, t !== 0) for (; !(s = (r = a.call(e)).done) && (l.push(r.value), l.length !== t); s = !0) ;
    } catch (d) {
      c = !0, o = d;
    } finally {
      try {
        if (!s && e.return != null && (i = e.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw o;
      }
    }
    return l;
  }
}
function Pm() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fr(n, t) {
  return Cm(n) || Om(n, t) || ac(n, t) || Pm();
}
function Nl(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function fo(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nl(Object(e), !0).forEach(function(r) {
      ic(n, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Nl(Object(e)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return n;
}
var qm = {
  navcontent: "p-tabview-nav-content",
  nav: "p-tabview-nav",
  inkbar: "p-tabview-ink-bar",
  panelcontainer: function(t) {
    var e = t.props;
    return we("p-tabview-panels", e.panelContainerClassName);
  },
  prevbutton: "p-tabview-nav-prev p-tabview-nav-btn p-link",
  nextbutton: "p-tabview-nav-next p-tabview-nav-btn p-link",
  root: function(t) {
    var e = t.props;
    return we("p-tabview p-component", {
      "p-tabview-scrollable": e.scrollable
    });
  },
  navcontainer: "p-tabview-nav-container",
  tab: {
    header: function(t) {
      var e = t.selected, r = t.disabled, o = t.headerClassName, a = t._className;
      return we("p-unselectable-text", {
        "p-tabview-selected p-highlight": e,
        "p-disabled": r
      }, o, a);
    },
    headertitle: "p-tabview-title",
    headeraction: "p-tabview-nav-link",
    closeIcon: "p-tabview-close",
    content: function(t) {
      var e = t.props, r = t.selected, o = t.getTabProp, a = t.tab, i = t.isSelected, l = t.shouldUseTab, s = t.index;
      return l(a, s) && (!e.renderActiveOnly || i(s)) ? we(o(a, "contentClassName"), o(a, "className"), "p-tabview-panel", {
        "p-hidden": !r
      }) : void 0;
    }
  }
}, Tm = {
  tab: {
    header: function(t) {
      var e = t.headerStyle, r = t._style;
      return fo(fo({}, e || {}), r || {});
    },
    content: function(t) {
      var e = t.props, r = t.getTabProp, o = t.tab, a = t.isSelected, i = t.shouldUseTab, l = t.index;
      return i(o, l) && (!e.renderActiveOnly || a(l)) ? fo(fo({}, r(o, "contentStyle") || {}), r(o, "style") || {}) : void 0;
    }
  }
}, po = Le.extend({
  defaultProps: {
    __TYPE: "TabView",
    id: null,
    activeIndex: 0,
    className: null,
    onBeforeTabChange: null,
    onBeforeTabClose: null,
    onTabChange: null,
    onTabClose: null,
    panelContainerClassName: null,
    panelContainerStyle: null,
    renderActiveOnly: !0,
    scrollable: !1,
    style: null,
    children: void 0
  },
  css: {
    classes: qm,
    inlineStyles: Tm
  }
}), Yn = Le.extend({
  defaultProps: {
    __TYPE: "TabPanel",
    children: void 0,
    className: null,
    closable: !1,
    closeIcon: null,
    contentClassName: null,
    contentStyle: null,
    disabled: !1,
    header: null,
    headerClassName: null,
    headerStyle: null,
    headerTemplate: null,
    leftIcon: null,
    nextButton: null,
    prevButton: null,
    rightIcon: null,
    style: null,
    visible: !0
  },
  getCProp: function(t, e) {
    return L.getComponentProp(t, e, Yn.defaultProps);
  },
  getCProps: function(t) {
    return L.getComponentProps(t, Yn.defaultProps);
  },
  getCOtherProps: function(t) {
    return L.getComponentDiffProps(t, Yn.defaultProps);
  }
});
function Ll(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function vo(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ll(Object(e), !0).forEach(function(r) {
      ic(n, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Ll(Object(e)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return n;
}
var bo = function() {
}, lc = /* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Ft(), r = u.useContext(yt), o = po.getProps(n, r), a = u.useState(o.id), i = fr(a, 2), l = i[0], s = i[1], c = u.useState(!0), d = fr(c, 2), f = d[0], m = d[1], h = u.useState(!1), x = fr(h, 2), g = x[0], C = x[1], y = u.useState([]), w = fr(y, 2), S = w[0], P = w[1], b = u.useState(o.activeIndex), T = fr(b, 2), I = T[0], U = T[1], $ = u.useRef(null), j = u.useRef(null), R = u.useRef(null), ne = u.useRef(null), B = u.useRef(null), re = u.useRef(null), ae = u.useRef({}), he = o.onTabChange ? o.activeIndex : I, Se = u.Children.count(o.children), pe = {
    props: o,
    state: {
      id: l,
      isPrevButtonDisabled: f,
      isNextButtonDisabled: g,
      hiddenTabsState: S,
      activeIndex: I
    }
  }, Z = po.setMetaData(vo({}, pe)), _ = Z.ptm, J = Z.ptmo, Q = Z.cx, X = Z.sx, Y = Z.isUnstyled;
  Xt(po.css.styles, Y, {
    name: "tabview"
  });
  var fe = function(N, G, ee) {
    var ye = {
      props: N.props,
      parent: pe,
      context: {
        index: ee,
        count: Se,
        first: ee === 0,
        last: ee === Se - 1,
        active: ee == I,
        disabled: ce(N, "disabled")
      }
    };
    return e(_("tab.".concat(G), {
      tab: ye
    }), _("tabpanel.".concat(G), {
      tabpanel: ye
    }), _("tabpanel.".concat(G), ye), J(ce(N, "pt"), G, ye));
  }, ve = function(N) {
    return N === he;
  }, ce = function(N, G) {
    return Yn.getCProp(N, G);
  }, K = function(N) {
    return N && ce(N, "visible") && L.isValidChild(N, "TabPanel") && S.every(function(G) {
      return G !== N.key;
    });
  }, D = function(N) {
    var G = u.Children.map(o.children, function(ee, ye) {
      if (K(ee))
        return {
          tab: ee,
          index: ye
        };
    });
    return G.find(function(ee) {
      var ye = ee.tab, Be = ee.index;
      return !ce(ye, "disabled") && Be >= N;
    }) || G.reverse().find(function(ee) {
      var ye = ee.tab, Be = ee.index;
      return !ce(ye, "disabled") && N > Be;
    });
  }, F = function(N, G) {
    N.preventDefault();
    var ee = o.onBeforeTabClose, ye = o.onTabClose, Be = o.children, Qe = Be[G].key;
    ee && ee({
      originalEvent: N,
      index: G
    }) === !1 || (P([].concat(xm(S), [Qe])), ye && ye({
      originalEvent: N,
      index: G
    }));
  }, ue = function(N, G, ee) {
    M(N, G, ee);
  }, M = function(N, G, ee) {
    if (N && N.preventDefault(), !ce(G, "disabled")) {
      if (o.onBeforeTabChange && o.onBeforeTabChange({
        originalEvent: N,
        index: ee
      }) === !1)
        return;
      o.onTabChange ? o.onTabChange({
        originalEvent: N,
        index: ee
      }) : U(ee);
    }
    Ge({
      index: ee
    });
  }, Ie = function(N, G, ee) {
    switch (N.code) {
      case "ArrowLeft":
        je(N);
        break;
      case "ArrowRight":
        Ne(N);
        break;
      case "Home":
        Ae(N);
        break;
      case "End":
        We(N);
        break;
      case "PageDown":
        xt(N);
        break;
      case "PageUp":
        dt(N);
        break;
      case "Enter":
      case "NumpadEnter":
      case "Space":
        lt(N, G, ee);
        break;
    }
  }, Ne = function(N) {
    var G = nt(N.target.parentElement);
    G ? Je(G) : Ae(N), N.preventDefault();
  }, je = function(N) {
    var G = pt(N.target.parentElement);
    G ? Je(G) : We(N), N.preventDefault();
  }, Ae = function(N) {
    var G = Et();
    Je(G), N.preventDefault();
  }, We = function(N) {
    var G = rt();
    Je(G), N.preventDefault();
  }, xt = function(N) {
    Ge({
      index: u.Children.count(o.children) - 1
    }), N.preventDefault();
  }, dt = function(N) {
    Ge({
      index: 0
    }), N.preventDefault();
  }, lt = function(N, G, ee) {
    M(N, G, ee), N.preventDefault();
  }, nt = function be(N) {
    var G = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, ee = G ? N : N.nextElementSibling;
    return ee ? A.getAttribute(ee, "data-p-disabled") || A.getAttribute(ee, "data-pc-section") === "inkbar" ? be(ee) : A.findSingle(ee, '[data-pc-section="headeraction"]') : null;
  }, pt = function be(N) {
    var G = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, ee = G ? N : N.previousElementSibling;
    return ee ? A.getAttribute(ee, "data-p-disabled") || A.getAttribute(ee, "data-pc-section") === "inkbar" ? be(ee) : A.findSingle(ee, '[data-pc-section="headeraction"]') : null;
  }, Et = function() {
    return nt(R.current.firstElementChild, !0);
  }, rt = function() {
    return pt(R.current.lastElementChild, !0);
  }, Je = function(N) {
    N && (A.focus(N), Ge({
      element: N
    }));
  }, Mt = function() {
    var N = ae.current["tab_".concat(he)];
    ne.current.style.width = A.getWidth(N) + "px", ne.current.style.left = A.getOffset(N).left - A.getOffset(R.current).left + "px";
  }, Ge = function(N) {
    var G = N.index, ee = N.element, ye = ee || ae.current["tab_".concat(G)];
    ye && ye.scrollIntoView && ye.scrollIntoView({
      block: "nearest"
    });
  }, ot = function() {
    var N = j.current, G = N.scrollLeft, ee = N.scrollWidth, ye = A.getWidth(j.current);
    m(G === 0), C(parseInt(G) === ee - ye);
  }, ct = function(N) {
    o.scrollable && ot(), N.preventDefault();
  }, kt = function() {
    return [B.current, re.current].reduce(function(N, G) {
      return G ? N + A.getWidth(G) : N;
    }, 0);
  }, ft = function() {
    var N = A.getWidth(j.current) - kt(), G = j.current.scrollLeft - N;
    j.current.scrollLeft = G <= 0 ? 0 : G;
  }, vt = function() {
    var N = A.getWidth(j.current) - kt(), G = j.current.scrollLeft + N, ee = j.current.scrollWidth - N;
    j.current.scrollLeft = G >= ee ? ee : G;
  }, Ce = function() {
    m(!0), C(!1), P([]), o.onTabChange ? o.onTabChange({
      index: he
    }) : U(o.activeIndex);
  };
  u.useEffect(function() {
    Mt(), ot();
  }), Gt(function() {
    l || s(Lo());
  }), tt(function() {
    if (L.isNotEmpty(S)) {
      var be = D(S[S.length - 1]);
      be && ue(null, be.tab, be.index);
    }
  }, [S]), tt(function() {
    o.activeIndex !== I && Ge({
      index: o.activeIndex
    });
  }, [o.activeIndex]), u.useImperativeHandle(t, function() {
    return {
      props: o,
      reset: Ce,
      getElement: function() {
        return $.current;
      }
    };
  });
  var z = function(N, G) {
    var ee = ve(G), ye = Yn.getCProps(N), Be = ye.headerStyle, Qe = ye.headerClassName, Pt = ye.style, zt = ye.className, qt = ye.disabled, Tt = ye.leftIcon, Ht = ye.rightIcon, p = ye.header, E = ye.headerTemplate, H = ye.closable, de = ye.closeIcon, xe = l + "_header_" + G, se = l + G + "_content", q = qt || !ee ? -1 : 0, k = Tt && Nt.getJSXIcon(Tt, void 0, {
      props: o
    }), W = e({
      className: Q("tab.headertitle")
    }, fe(N, "headertitle", G)), te = /* @__PURE__ */ u.createElement("span", W, p), ie = Ht && Nt.getJSXIcon(Ht, void 0, {
      props: o
    }), oe = e({
      className: Q("tab.closeIcon"),
      onClick: function(gt) {
        return F(gt, G);
      }
    }, fe(N, "closeIcon", G)), me = de || /* @__PURE__ */ u.createElement(Wr, oe), De = H ? Nt.getJSXIcon(me, vo({}, oe), {
      props: o
    }) : null, Oe = e({
      id: xe,
      role: "tab",
      className: Q("tab.headeraction"),
      tabIndex: q,
      "aria-controls": se,
      "aria-selected": ee,
      "aria-disabled": qt,
      onClick: function(gt) {
        return ue(gt, N, G);
      },
      onKeyDown: function(gt) {
        return Ie(gt, N, G);
      }
    }, fe(N, "headeraction", G)), Ye = (
      // eslint-disable /
      /* @__PURE__ */ u.createElement("a", Oe, k, te, ie, De, /* @__PURE__ */ u.createElement(En, null))
    );
    if (E) {
      var mt = {
        className: "p-tabview-nav-link",
        titleClassName: "p-tabview-title",
        onClick: function(gt) {
          return ue(gt, N, G);
        },
        onKeyDown: function(gt) {
          return Ie(gt, N, G);
        },
        leftIconElement: k,
        titleElement: te,
        rightIconElement: ie,
        element: Ye,
        props: o,
        index: G,
        selected: ee,
        ariaControls: se
      };
      Ye = L.getJSXElement(E, mt);
    }
    var st = e({
      ref: function(gt) {
        return ae.current["tab_".concat(G)] = gt;
      },
      className: Q("tab.header", {
        selected: ee,
        disabled: qt,
        headerClassName: Qe,
        _className: zt
      }),
      style: X("tab.header", {
        headerStyle: Be,
        _style: Pt
      }),
      role: "presentation"
    }, fe(N, "root", G), fe(N, "header", G));
    return /* @__PURE__ */ u.createElement("li", st, Ye);
  }, ge = function() {
    return u.Children.map(o.children, function(N, G) {
      if (K(N))
        return z(N, G);
    });
  }, _e = function() {
    var N = ge(), G = e({
      id: l + "_navcontent",
      ref: j,
      className: Q("navcontent"),
      style: o.style,
      onScroll: ct
    }, _("navcontent")), ee = e({
      ref: R,
      className: Q("nav"),
      role: "tablist"
    }, _("nav")), ye = e({
      ref: ne,
      "aria-hidden": "true",
      role: "presentation",
      className: Q("inkbar")
    }, _("inkbar"));
    return /* @__PURE__ */ u.createElement("div", G, /* @__PURE__ */ u.createElement("ul", ee, N, /* @__PURE__ */ u.createElement("li", ye)));
  }, Pe = function() {
    var N = e({
      className: Q("panelcontainer"),
      style: o.panelContainerStyle
    }, _("panelcontainer")), G = u.Children.map(o.children, function(ee, ye) {
      if (K(ee) && (!o.renderActiveOnly || ve(ye))) {
        var Be = ve(ye), Qe = l + ye + "_content", Pt = l + "_header_" + ye, zt = e({
          id: Qe,
          className: Q("tab.content", {
            props: o,
            selected: Be,
            getTabProp: ce,
            tab: ee,
            isSelected: ve,
            shouldUseTab: K,
            index: ye
          }),
          style: X("tab.content", {
            props: o,
            getTabProp: ce,
            tab: ee,
            isSelected: ve,
            shouldUseTab: K,
            index: ye
          }),
          role: "tabpanel",
          "aria-labelledby": Pt
        }, Yn.getCOtherProps(ee), fe(ee, "root", ye), fe(ee, "content", ye));
        return /* @__PURE__ */ u.createElement("div", zt, o.renderActiveOnly ? Be && ce(ee, "children") : ce(ee, "children"));
      }
    });
    return /* @__PURE__ */ u.createElement("div", N, G);
  }, qe = function() {
    var N = e({
      "aria-hidden": "true"
    }, _("previcon")), G = o.prevButton || /* @__PURE__ */ u.createElement(oc, N), ee = Nt.getJSXIcon(G, vo({}, N), {
      props: o
    }), ye = e({
      ref: B,
      type: "button",
      className: Q("prevbutton"),
      "aria-label": _i("previousPageLabel"),
      onClick: function(Qe) {
        return ft();
      }
    }, _("prevbutton"));
    return o.scrollable && !f ? /* @__PURE__ */ u.createElement("button", ye, ee, /* @__PURE__ */ u.createElement(En, null)) : null;
  }, Ve = function() {
    var N = e({
      "aria-hidden": "true"
    }, _("nexticon")), G = o.nextButton || /* @__PURE__ */ u.createElement(ci, N), ee = Nt.getJSXIcon(G, vo({}, N), {
      props: o
    }), ye = e({
      ref: re,
      type: "button",
      className: Q("nextbutton"),
      "aria-label": _i("nextPageLabel"),
      onClick: function(Qe) {
        return vt();
      }
    }, _("nextbutton"));
    if (o.scrollable && !g)
      return /* @__PURE__ */ u.createElement("button", ye, ee, /* @__PURE__ */ u.createElement(En, null));
  }, ut = e({
    id: l,
    ref: $,
    style: o.style,
    className: we(o.className, Q("root"))
  }, po.getOtherProps(o), _("root")), Fe = e({
    className: Q("navcontainer")
  }, _("navcontainer")), Me = _e(), He = Pe(), at = qe(), it = Ve();
  return /* @__PURE__ */ u.createElement("div", ut, /* @__PURE__ */ u.createElement("div", Fe, at, Me, it), He);
});
bo.displayName = "TabPanel";
lc.displayName = "TabView";
function sc({ item: n }) {
  const t = n.icon;
  return /* @__PURE__ */ O.jsx(O.Fragment, { children: /* @__PURE__ */ O.jsx("article", { className: "sidebar-field", children: /* @__PURE__ */ O.jsxs("div", { className: "item-panel-item flex p-2 w-100", children: [
    /* @__PURE__ */ O.jsx("div", { className: "item-icon mr-2", children: /* @__PURE__ */ O.jsx(t, {}) }),
    /* @__PURE__ */ O.jsxs("div", { children: [
      /* @__PURE__ */ O.jsx("div", { className: "item-title", children: n.heading }),
      /* @__PURE__ */ O.jsx("div", { className: "item-text", children: n.description })
    ] })
  ] }) }) });
}
function Im({ item: n }) {
  const t = Xe(jn()), { attributes: e, listeners: r, setNodeRef: o } = $s({
    id: t.current,
    data: {
      item: n,
      fromSidebar: !0
    }
  });
  return /* @__PURE__ */ O.jsx("div", { ref: o, className: "sidebar-field", ...e, ...r, children: /* @__PURE__ */ O.jsx(sc, { item: n }) });
}
function _m({ ...n }) {
  const [t, e] = $e(0), r = {};
  An.map((a) => {
    var l, s;
    const i = ((l = a.group) == null ? void 0 : l.label) || "";
    Object.keys(r).includes(i) || (r[i] = {
      label: ((s = a.group) == null ? void 0 : s.label) || "",
      items: []
    }), r[i].items.push(a);
  });
  const o = (a) => {
    e(a);
  };
  return /* @__PURE__ */ O.jsx(O.Fragment, { children: /* @__PURE__ */ O.jsxs(
    lc,
    {
      activeIndex: t,
      onTabChange: (a) => o(a.index),
      className: "sidebar",
      children: [
        /* @__PURE__ */ O.jsxs(bo, { header: "Items", children: [
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          /* @__PURE__ */ O.jsx(Sn, { activeIndex: 0, children: Object.keys(r).map((a) => /* @__PURE__ */ O.jsx(pn, { header: r[a].label, children: r[a].items.map((i) => /* @__PURE__ */ O.jsx(Im, { item: i }, `sidebar-${i.type}`)) }, a)) })
        ] }),
        /* @__PURE__ */ O.jsxs(bo, { header: "Forms", children: [
          "forms ",
          JSON.stringify(n.form)
        ] }),
        /* @__PURE__ */ O.jsx(bo, { header: "Variables", children: "list of variables this form can replace" })
      ]
    }
  ) });
}
function pr(n) {
  var t;
  return ((t = n == null ? void 0 : n.data) == null ? void 0 : t.current) ?? {};
}
const jm = ({ ...n }) => {
  const { form: t, setForm: e } = Oc(n.form), [r, o] = $e(void 0);
  Re(() => {
    n.form && e(n.form);
  }, [n.form]), Re(() => {
    t && n.onChange(t);
  }, [t]);
  const a = hs(
    Io(Yo),
    Io(Uo, {
      coordinateGetter: Us
    })
  ), [i, l] = $e(), [s, c] = $e(), d = () => {
    l(void 0), c(void 0);
  }, f = (g) => {
    const { active: C } = g, y = pr(C), { item: w } = y;
    if (y.fromSidebar) {
      const S = w.data;
      S.id = jn(), w.id = S.id, l(w), o(S);
    } else
      c(y.item);
  }, m = (g) => {
    const { active: C, over: y } = g, w = pr(C), S = pr(y);
    if (w.fromSidebar)
      if (t.items.findIndex((P) => P.id === w.item.id) == -1) {
        t.items.push(w.item.data);
        const P = t.items.findIndex((T) => T.id === w.item.id), b = t.items.findIndex((T) => T.id === S.id);
        b != -1 && b != P && (t.items = Un(t.items, P, b)), e(t);
      } else if (!y)
        t.items = t.items.filter((P) => P.id !== w.item.id), e(t);
      else {
        const P = t.items.findIndex((T) => T.id === w.item.id), b = t.items.findIndex((T) => T.id === S.id);
        t.items = Un(t.items, P, b), e(t);
      }
    else
      t.items.findIndex((P) => P.id === w.item.id), t.items.findIndex((P) => P.id === S.id);
  }, h = (g) => {
    const { active: C, over: y } = g, w = pr(C), S = pr(y), P = t.items.findIndex((T) => T.id === w.item.id), b = t.items.findIndex((T) => T.id === S.id);
    P != b && (t.items = Un(t.items, P, b), e(t)), d();
  }, x = {
    form: t,
    onFormChange: e,
    activeItem: r,
    setActiveItem: o,
    config: n.config
  };
  return t ? /* @__PURE__ */ O.jsxs(O.Fragment, { children: [
    /* @__PURE__ */ O.jsx("div", { className: "form-builder", children: /* @__PURE__ */ O.jsxs(
      Ls,
      {
        sensors: a,
        onDragStart: f,
        onDragOver: m,
        onDragEnd: h,
        collisionDetection: xs,
        autoScroll: !0,
        children: [
          /* @__PURE__ */ O.jsx("div", { className: "sidebar-area", children: /* @__PURE__ */ O.jsx(_m, { ...x }) }),
          /* @__PURE__ */ O.jsx("div", { className: "canvas-area", children: /* @__PURE__ */ O.jsx(
            Ws,
            {
              strategy: Xp,
              items: t.items.map((g) => g.id),
              children: /* @__PURE__ */ O.jsx(gm, { ...x })
            }
          ) }),
          /* @__PURE__ */ O.jsx("div", { className: "properties-area", children: /* @__PURE__ */ O.jsx(hm, { ...x }) }),
          /* @__PURE__ */ O.jsxs(Kp, { dropAnimation: null, children: [
            i ? /* @__PURE__ */ O.jsx(sc, { item: i }) : null,
            " ",
            s ? /* @__PURE__ */ O.jsx(
              Js,
              {
                item: s,
                onChange: () => {
                },
                config: n.config
              }
            ) : null
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ O.jsx(rc, {})
  ] }) : /* @__PURE__ */ O.jsx(O.Fragment, { children: /* @__PURE__ */ O.jsx("div", { children: "No form config loaded" }) });
};
export {
  jm as FormBuilder,
  Js as Item
};
//# sourceMappingURL=index.js.map
