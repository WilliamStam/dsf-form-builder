import * as u from "react";
import Te, { useState as Le, useEffect as Ie, useContext as rn, useRef as Xe, useLayoutEffect as bc, useCallback as $t, useMemo as Ze, createContext as Hr, memo as yc, useReducer as oi, cloneElement as wc, forwardRef as xc } from "react";
import gr, { unstable_batchedUpdates as cr, createPortal as Ec } from "react-dom";
function Sc(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var ha = { exports: {} }, ur = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Si;
function Cc() {
  if (Si) return ur;
  Si = 1;
  var n = Te, t = Symbol.for("react.element"), e = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, r = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(l, s, c) {
    var d, f = {}, v = null, m = null;
    c !== void 0 && (v = "" + c), s.key !== void 0 && (v = "" + s.key), s.ref !== void 0 && (m = s.ref);
    for (d in s) o.call(s, d) && !a.hasOwnProperty(d) && (f[d] = s[d]);
    if (l && l.defaultProps) for (d in s = l.defaultProps, s) f[d] === void 0 && (f[d] = s[d]);
    return { $$typeof: t, type: l, key: v, ref: m, props: f, _owner: r.current };
  }
  return ur.Fragment = e, ur.jsx = i, ur.jsxs = i, ur;
}
var dr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ci;
function Oc() {
  return Ci || (Ci = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Te, t = Symbol.for("react.element"), e = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), l = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), C = Symbol.iterator, g = "@@iterator";
    function O(p) {
      if (p === null || typeof p != "object")
        return null;
      var E = C && p[C] || p[g];
      return typeof E == "function" ? E : null;
    }
    var w = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(p) {
      {
        for (var E = arguments.length, H = new Array(E > 1 ? E - 1 : 0), de = 1; de < E; de++)
          H[de - 1] = arguments[de];
        S("error", p, H);
      }
    }
    function S(p, E, H) {
      {
        var de = w.ReactDebugCurrentFrame, xe = de.getStackAddendum();
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
      return !!(typeof p == "string" || typeof p == "function" || p === o || p === a || U || p === r || p === c || p === d || I || p === m || P || b || T || typeof p == "object" && p !== null && (p.$$typeof === v || p.$$typeof === f || p.$$typeof === i || p.$$typeof === l || p.$$typeof === s || // This needs to include all possible module reference object
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
      if (typeof p.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof p == "function")
        return p.displayName || p.name || null;
      if (typeof p == "string")
        return p;
      switch (p) {
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
          case v: {
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
        ae < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ve = w.ReactCurrentDispatcher, ce;
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
    function _e(p, E, H) {
      return M(p, !1);
    }
    function Ae(p) {
      var E = p.prototype;
      return !!(E && E.isReactComponent);
    }
    function je(p, E, H) {
      if (p == null)
        return "";
      if (typeof p == "function")
        return M(p, Ae(p));
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
            return _e(p.render);
          case f:
            return je(p.type, E, H);
          case v: {
            var de = p, xe = de._payload, se = de._init;
            try {
              return je(se(xe), E, H);
            } catch {
            }
          }
        }
      return "";
    }
    var Ne = Object.prototype.hasOwnProperty, We = {}, xt = w.ReactDebugCurrentFrame;
    function dt(p) {
      if (p) {
        var E = p._owner, H = je(p.type, p._source, E ? E.type : null);
        xt.setExtraStackFrame(H);
      } else
        xt.setExtraStackFrame(null);
    }
    function lt(p, E, H, de, xe) {
      {
        var se = Function.call.bind(Ne);
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
            k && !(k instanceof Error) && (dt(xe), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", de || "React class", H, q, typeof k), dt(null)), k instanceof Error && !(k.message in We) && (We[k.message] = !0, dt(xe), x("Failed %s type: %s", H, k.message), dt(null));
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
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Et(p)), Je(p);
    }
    var Ge = w.ReactCurrentOwner, ot = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ct, kt, ft;
    ft = {};
    function vt(p) {
      if (Ne.call(p, "ref")) {
        var E = Object.getOwnPropertyDescriptor(p, "ref").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return p.ref !== void 0;
    }
    function Ce(p) {
      if (Ne.call(p, "key")) {
        var E = Object.getOwnPropertyDescriptor(p, "key").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return p.key !== void 0;
    }
    function z(p, E) {
      if (typeof p.ref == "string" && Ge.current && E && Ge.current.stateNode !== E) {
        var H = B(Ge.current.type);
        ft[H] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', B(Ge.current.type), p.ref), ft[H] = !0);
      }
    }
    function ge(p, E) {
      {
        var H = function() {
          ct || (ct = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        H.isReactWarning = !0, Object.defineProperty(p, "key", {
          get: H,
          configurable: !0
        });
      }
    }
    function Re(p, E) {
      {
        var H = function() {
          kt || (kt = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
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
          Ne.call(E, se) && !ot.hasOwnProperty(se) && (q[se] = E[se]);
        if (p && p.defaultProps) {
          var te = p.defaultProps;
          for (se in te)
            q[se] === void 0 && (q[se] = te[se]);
        }
        if (k || W) {
          var ie = typeof p == "function" ? p.displayName || p.name || "Unknown" : p;
          k && ge(q, ie), W && Re(q, ie);
        }
        return Pe(p, k, W, xe, de, Ge.current, q);
      }
    }
    var Ve = w.ReactCurrentOwner, ut = w.ReactDebugCurrentFrame;
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
    function A(p) {
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
        var H = A(E);
        if (be[H])
          return;
        be[H] = !0;
        var de = "";
        p && p._owner && p._owner !== Ve.current && (de = " It was passed a child from " + B(p._owner.type) + "."), Fe(p), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', H, de), Fe(null);
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
          var xe = O(p);
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
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", xe || "Unknown");
        }
        typeof E.getDefaultProps == "function" && !E.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Be(p) {
      {
        for (var E = Object.keys(p.props), H = 0; H < E.length; H++) {
          var de = E[H];
          if (de !== "children" && de !== "key") {
            Fe(p), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", de), Fe(null);
            break;
          }
        }
        p.ref !== null && (Fe(p), x("Invalid attribute `ref` supplied to `React.Fragment`."), Fe(null));
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
          p === null ? te = "null" : pt(p) ? te = "array" : p !== void 0 && p.$$typeof === t ? (te = "<" + (B(p.type) || "Unknown") + " />", k = " Did you accidentally export a JSX literal instead of a component?") : te = typeof p, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", te, k);
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
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ee(oe, p);
        }
        if (Ne.call(E, "key")) {
          var De = B(p), Oe = Object.keys(E).filter(function(st) {
            return st !== "key";
          }), Ye = Oe.length > 0 ? "{key: someKey, " + Oe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Qe[De + Ye]) {
            var mt = Oe.length > 0 ? "{" + Oe.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ye, De, mt, De), Qe[De + Ye] = !0;
          }
        }
        return p === o ? Be(ie) : ye(ie), ie;
      }
    }
    function zt(p, E, H) {
      return Pt(p, E, H, !0);
    }
    function qt(p, E, H) {
      return Pt(p, E, H, !1);
    }
    var Tt = qt, Ht = zt;
    dr.Fragment = o, dr.jsx = Tt, dr.jsxs = Ht;
  }()), dr;
}
process.env.NODE_ENV === "production" ? ha.exports = Cc() : ha.exports = Oc();
var y = ha.exports;
class Pc {
  constructor(t) {
    this.label = t;
  }
}
class No extends Pc {
  constructor(t) {
    super(
      t.label
    );
  }
}
class qc {
  constructor(t, e) {
    this.render = t, this.validation = e;
  }
}
class Yt extends qc {
  constructor(t) {
    super(
      t.render,
      t.validation
    );
  }
}
class Tc {
  constructor(t, e, o, r, a, i, l, s, c) {
    this.form = t, this.settings = e, this.type = o, this.heading = r, this.description = a, this.hidden = i, this.icon = l, this.data = s, this.group = c, this.group || (this.group = new No({
      label: "None"
    }));
  }
}
let er = class extends Tc {
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
    return this.items.map((e, o, r) => t(e, o, r));
  }
}
const ea = {
  id: null,
  label: null,
  created_at: null,
  items: []
}, Wl = (n = ea) => {
  const [t, e] = Le({ ...ea, ...n });
  return {
    form: t,
    setForm: (o) => {
      e({ ...ea, ...o });
    }
  };
}, Ic = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let Cn = (n = 21) => {
  let t = "", e = crypto.getRandomValues(new Uint8Array(n));
  for (; n--; )
    t += Ic[e[n] & 63];
  return t;
};
const Xn = {
  id: Cn(),
  type: "content-html",
  label: "",
  value: "",
  placeholder: ""
}, _c = ({ item: n, onChange: t, config: e }) => {
  const [o, r] = Le({ ...Xn, ...n });
  Ie(() => {
    r({ ...Xn, ...n });
  }, [n]);
  const a = Math.random().toString(36).substring(2, 15);
  return /* @__PURE__ */ y.jsx(y.Fragment, { children: /* @__PURE__ */ y.jsxs("div", { className: "flex flex-column gap-2", children: [
    /* @__PURE__ */ y.jsx("label", { htmlFor: a, children: o.label }),
    /* @__PURE__ */ y.jsx("div", { dangerouslySetInnerHTML: { __html: o.value } })
  ] }) });
}, Rc = (n) => ({});
var Oi;
function ba() {
  return ba = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e) ({}).hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, ba.apply(null, arguments);
}
var kc = function(t) {
  return /* @__PURE__ */ u.createElement("svg", ba({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 512"
  }, t), Oi || (Oi = /* @__PURE__ */ u.createElement("path", {
    d: "M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6m80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3l89.3 89.4-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3"
  })));
};
function Dc(n) {
  if (Array.isArray(n)) return n;
}
function jc(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var o, r, a, i, l = [], s = !0, c = !1;
    try {
      if (a = (e = e.call(n)).next, t !== 0) for (; !(s = (o = a.call(e)).done) && (l.push(o.value), l.length !== t); s = !0) ;
    } catch (d) {
      c = !0, r = d;
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
function ya(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, o = new Array(t); e < t; e++) o[e] = n[e];
  return o;
}
function Vl(n, t) {
  if (n) {
    if (typeof n == "string") return ya(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return ya(n, t);
  }
}
function Nc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function go(n, t) {
  return Dc(n) || jc(n, t) || Vl(n, t) || Nc();
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
    for (var o = [], r = 0; r < t.length; r++) {
      var a = t[r];
      if (a) {
        var i = Rt(a);
        if (i === "string" || i === "number")
          o.push(a);
        else if (i === "object") {
          var l = Array.isArray(a) ? a : Object.entries(a).map(function(s) {
            var c = go(s, 2), d = c[0], f = c[1];
            return f ? d : null;
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
function Ac(n) {
  if (Array.isArray(n)) return ya(n);
}
function Lc(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function $c() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wo(n) {
  return Ac(n) || Lc(n) || Vl(n) || $c();
}
function ai(n, t) {
  if (!(n instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Fc(n, t) {
  if (Rt(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t || "default");
    if (Rt(o) !== "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function Kl(n) {
  var t = Fc(n, "string");
  return Rt(t) === "symbol" ? t : String(t);
}
function Mc(n, t) {
  for (var e = 0; e < t.length; e++) {
    var o = t[e];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(n, Kl(o.key), o);
  }
}
function ii(n, t, e) {
  return e && Mc(n, e), Object.defineProperty(n, "prototype", {
    writable: !1
  }), n;
}
function Lo(n, t, e) {
  return t = Kl(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function ta(n, t) {
  var e = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (!e) {
    if (Array.isArray(n) || (e = zc(n)) || t) {
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
function zc(n, t) {
  if (n) {
    if (typeof n == "string") return Pi(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Pi(n, t);
  }
}
function Pi(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, o = new Array(t); e < t; e++) o[e] = n[e];
  return o;
}
var N = /* @__PURE__ */ function() {
  function n() {
    ai(this, n);
  }
  return ii(n, null, [{
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
        var a = go(r, 2), i = a[0], l = a[1];
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
          var c, d, f = e != null && (c = e.$attrs) !== null && c !== void 0 && c[l] ? [e == null || (d = e.$attrs) === null || d === void 0 ? void 0 : d[l]] : [];
          return [s].flat().reduce(function(v, m) {
            if (m != null) {
              var C = Rt(m);
              if (C === "string" || C === "number")
                v.push(m);
              else if (C === "object") {
                var g = Array.isArray(m) ? i(l, m) : Object.entries(m).map(function(O) {
                  var w = go(O, 2), x = w[0], S = w[1];
                  return l === "style" && (S || S === 0) ? "".concat(x.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), ":").concat(S) : S ? x : void 0;
                });
                v = g.length ? v.concat(g.filter(function(O) {
                  return !!O;
                })) : v;
              }
            }
            return v;
          }, f);
        };
        Object.entries(r).forEach(function(i) {
          var l = go(i, 2), s = l[0], c = l[1];
          if (c != null) {
            var d = s.match(/^on(.+)/);
            d ? e.addEventListener(d[1].toLowerCase(), c) : s === "p-bind" ? o.setAttributes(e, c) : (c = s === "class" ? wo(new Set(a("class", c))).join(" ").trim() : s === "style" ? a("style", c).join(";").trim() : c, (e.$attrs = e.$attrs || {}) && (e.$attrs[s] = c), e.setAttribute(s, c));
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
        } : this.getHiddenElementDimensions(e), i = a.height, l = a.width, s = o.offsetHeight, c = o.offsetWidth, d = o.getBoundingClientRect(), f = this.getWindowScrollTop(), v = this.getWindowScrollLeft(), m = this.getViewport(), C, g;
        d.top + s + i > m.height ? (C = d.top + f - i, C < 0 && (C = f), e.style.transformOrigin = "bottom") : (C = s + d.top + f, e.style.transformOrigin = "top");
        var O = d.left, w = r === "left" ? 0 : l - c;
        O + c + l > m.width ? g = Math.max(0, O + v + c - l) : g = O - w + v, e.style.top = C + "px", e.style.left = g + "px";
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
        var s = o.getBoundingClientRect(), c = this.getViewport(), d = a.split(" "), f = i.split(" "), v = function(w, x) {
          return x ? +w.substring(w.search(/(\+|-)/g)) || 0 : w.substring(0, w.search(/(\+|-)/g)) || w;
        }, m = {
          my: {
            x: v(d[0]),
            y: v(d[1] || d[0]),
            offsetX: v(d[0], !0),
            offsetY: v(d[1] || d[0], !0)
          },
          at: {
            x: v(f[0]),
            y: v(f[1] || f[0]),
            offsetX: v(f[0], !0),
            offsetY: v(f[1] || f[0], !0)
          }
        }, C = {
          left: function() {
            var w = m.my.offsetX + m.at.offsetX;
            return w + s.left + (m.my.x === "left" ? 0 : -1 * (m.my.x === "center" ? r.getOuterWidth(e) / 2 : r.getOuterWidth(e)));
          },
          top: function() {
            var w = m.my.offsetY + m.at.offsetY;
            return w + s.top + (m.my.y === "top" ? 0 : -1 * (m.my.y === "center" ? r.getOuterHeight(e) / 2 : r.getOuterHeight(e)));
          }
        }, g = {
          count: {
            x: 0,
            y: 0
          },
          left: function() {
            var w = C.left(), x = n.getWindowScrollLeft();
            e.style.left = w + x + "px", this.count.x === 2 ? (e.style.left = x + "px", this.count.x = 0) : w < 0 && (this.count.x++, m.my.x = "left", m.at.x = "right", m.my.offsetX *= -1, m.at.offsetX *= -1, this.right());
          },
          right: function() {
            var w = C.left() + n.getOuterWidth(o), x = n.getWindowScrollLeft();
            e.style.left = w + x + "px", this.count.x === 2 ? (e.style.left = c.width - n.getOuterWidth(e) + x + "px", this.count.x = 0) : w + n.getOuterWidth(e) > c.width && (this.count.x++, m.my.x = "right", m.at.x = "left", m.my.offsetX *= -1, m.at.offsetX *= -1, this.left());
          },
          top: function() {
            var w = C.top(), x = n.getWindowScrollTop();
            e.style.top = w + x + "px", this.count.y === 2 ? (e.style.left = x + "px", this.count.y = 0) : w < 0 && (this.count.y++, m.my.y = "top", m.at.y = "bottom", m.my.offsetY *= -1, m.at.offsetY *= -1, this.bottom());
          },
          bottom: function() {
            var w = C.top() + n.getOuterHeight(o), x = n.getWindowScrollTop();
            e.style.top = w + x + "px", this.count.y === 2 ? (e.style.left = c.height - n.getOuterHeight(e) + x + "px", this.count.y = 0) : w + n.getOuterHeight(o) > c.height && (this.count.y++, m.my.y = "bottom", m.at.y = "top", m.my.offsetY *= -1, m.at.offsetY *= -1, this.top());
          },
          center: function(w) {
            if (w === "y") {
              var x = C.top() + n.getOuterHeight(o) / 2;
              e.style.top = x + n.getWindowScrollTop() + "px", x < 0 ? this.bottom() : x + n.getOuterHeight(o) > c.height && this.top();
            } else {
              var S = C.left() + n.getOuterWidth(o) / 2;
              e.style.left = S + n.getWindowScrollLeft() + "px", S < 0 ? this.left() : S + n.getOuterWidth(e) > c.width && this.right();
            }
          }
        };
        g[m.at.x]("x"), g[m.at.y]("y"), this.isFunction(l) && l(m);
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
        var a = this.getParents(e), i = /(auto|scroll)/, l = function(S) {
          var P = S ? getComputedStyle(S) : null;
          return P && (i.test(P.getPropertyValue("overflow")) || i.test(P.getPropertyValue("overflow-x")) || i.test(P.getPropertyValue("overflow-y")));
        }, s = function(S) {
          o ? r.push(S.nodeName === "BODY" || S.nodeName === "HTML" || S.nodeType === 9 ? window : S) : r.push(S);
        }, c = ta(a), d;
        try {
          for (c.s(); !(d = c.n()).done; ) {
            var f = d.value, v = f.nodeType === 1 && f.dataset.scrollselectors;
            if (v) {
              var m = v.split(","), C = ta(m), g;
              try {
                for (C.s(); !(g = C.n()).done; ) {
                  var O = g.value, w = this.findSingle(f, O);
                  w && l(w) && s(w);
                }
              } catch (x) {
                C.e(x);
              } finally {
                C.f();
              }
            }
            f.nodeType === 1 && l(f) && s(f);
          }
        } catch (x) {
          c.e(x);
        } finally {
          c.f();
        }
      }
      return r.some(function(x) {
        return x === document.body || x === window;
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
      return (typeof HTMLElement > "u" ? "undefined" : Rt(HTMLElement)) === "object" ? e instanceof HTMLElement : e && Rt(e) === "object" && e !== null && e.nodeType === 1 && typeof e.nodeName == "string";
    }
  }, {
    key: "scrollInView",
    value: function(e, o) {
      var r = getComputedStyle(e).getPropertyValue("border-top-width"), a = r ? parseFloat(r) : 0, i = getComputedStyle(e).getPropertyValue("padding-top"), l = i ? parseFloat(i) : 0, s = e.getBoundingClientRect(), c = o.getBoundingClientRect(), d = c.top + document.body.scrollTop - (s.top + document.body.scrollTop) - a - l, f = e.scrollTop, v = e.clientHeight, m = this.getOuterHeight(o);
      d < 0 ? e.scrollTop = f + d : d + m > v && (e.scrollTop = f + d - v + m);
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
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(o)), a = [], i = ta(r), l;
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
        var d = s.offsetLeft, f = s.offsetTop, v = s.clientHeight;
        return document.body.removeChild(l), {
          left: Math.abs(d - e.scrollLeft),
          top: Math.abs(f - e.scrollTop) + v
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
      if (Rt(e) === "object" && e.hasOwnProperty("current"))
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
          for (var d = e.style, f = o.style, v = /^\d+$/, m = 0, C = Object.keys(d); m < C.length; m++) {
            var g = C[m];
            if (!v.test(g) && d[g] !== f[g])
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
Lo(N, "DATA_PROPS", ["data-"]);
Lo(N, "ARIA_PROPS", ["aria", "focus-target"]);
function Hc() {
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
function wa() {
  return wa = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, wa.apply(this, arguments);
}
function Bc(n, t) {
  var e = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (!e) {
    if (Array.isArray(n) || (e = Wc(n)) || t) {
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
function Wc(n, t) {
  if (n) {
    if (typeof n == "string") return qi(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return qi(n, t);
  }
}
function qi(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, o = new Array(t); e < t; e++) o[e] = n[e];
  return o;
}
var L = /* @__PURE__ */ function() {
  function n() {
    ai(this, n);
  }
  return ii(n, null, [{
    key: "equals",
    value: function(e, o, r) {
      return r && e && Rt(e) === "object" && o && Rt(o) === "object" ? this.deepEquals(this.resolveFieldData(e, r), this.resolveFieldData(o, r)) : this.deepEquals(e, o);
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
      if (e && o && Rt(e) === "object" && Rt(o) === "object") {
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
        var c = e instanceof Date, d = o instanceof Date;
        if (c !== d)
          return !1;
        if (c && d)
          return e.getTime() === o.getTime();
        var f = e instanceof RegExp, v = o instanceof RegExp;
        if (f !== v)
          return !1;
        if (f && v)
          return e.toString() === o.toString();
        var m = Object.keys(e);
        if (l = m.length, l !== Object.keys(o).length)
          return !1;
        for (i = l; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(o, m[i]))
            return !1;
        for (i = l; i-- !== 0; )
          if (s = m[i], !this.deepEquals(e[s], o[s]))
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
      return e ? Rt(e) === "object" && e.hasOwnProperty("current") ? e.current : e : null;
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
    value: function(e, o) {
      var r;
      if (this.isNotEmpty(e))
        try {
          r = e.findLast(o);
        } catch {
          r = wo(e).reverse().find(o);
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
          r = e.lastIndexOf(wo(e).reverse().find(o));
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
      var r = Bc(e), a;
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
      if (!(Rt(e) !== "object" || typeof o != "string"))
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
function Ti(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function Vc(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ti(Object(e), !0).forEach(function(o) {
      Lo(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Ti(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
var Lt = /* @__PURE__ */ function() {
  function n() {
    ai(this, n);
  }
  return ii(n, null, [{
    key: "getJSXIcon",
    value: function(e) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = null;
      if (e !== null) {
        var i = Rt(e), l = we(o.className, i === "string" && e);
        if (a = /* @__PURE__ */ u.createElement("span", wa({}, o, {
          className: l
        })), i !== "string") {
          var s = Vc({
            iconProps: o,
            element: a
          }, r);
          return L.getJSXElement(e, s);
        }
      }
      return a;
    }
  }]);
}();
function Ii(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function _i(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ii(Object(e), !0).forEach(function(o) {
      Lo(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Ii(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
function xo(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (n) {
    var e = function(i) {
      return typeof i == "function";
    }, o = t.classNameMergeFunction, r = e(o);
    return n.reduce(function(a, i) {
      if (!i)
        return a;
      var l = function() {
        var d = i[s];
        if (s === "style")
          a.style = _i(_i({}, a.style), i.style);
        else if (s === "className") {
          var f = "";
          r ? f = o(a.className, i.className) : f = [a.className, i.className].join(" ").trim(), a.className = f || void 0;
        } else if (e(d)) {
          var v = a[s];
          a[s] = v ? function() {
            v.apply(void 0, arguments), d.apply(void 0, arguments);
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
var Ri = 0;
function $o() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pr_id_";
  return Ri++, "".concat(n).concat(Ri);
}
function Kc() {
  var n = [], t = function(l, s) {
    var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 999, d = r(l, s, c), f = d.value + (d.key === l ? 0 : c) + 1;
    return n.push({
      key: l,
      value: f
    }), f;
  }, e = function(l) {
    n = n.filter(function(s) {
      return s.value !== l;
    });
  }, o = function(l, s) {
    return r(l, s).value;
  }, r = function(l, s) {
    var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    return wo(n).reverse().find(function(d) {
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
      l && (e(en.get(l)), l.style.zIndex = "");
    },
    getCurrent: function(l, s) {
      return o(l, s);
    }
  };
}
var en = Kc(), At = Object.freeze({
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
function ki(n, t) {
  var e = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (!e) {
    if (Array.isArray(n) || (e = Uc(n)) || t) {
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
function Uc(n, t) {
  if (n) {
    if (typeof n == "string") return Di(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Di(n, t);
  }
}
function Di(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, o = new Array(t); e < t; e++) o[e] = n[e];
  return o;
}
var ji = {
  filter: function(t, e, o, r, a) {
    var i = [];
    if (!t)
      return i;
    var l = ki(t), s;
    try {
      for (l.s(); !(s = l.n()).done; ) {
        var c = s.value;
        if (typeof c == "string") {
          if (this.filters[r](c, o, a)) {
            i.push(c);
            continue;
          }
        } else {
          var d = ki(e), f;
          try {
            for (d.s(); !(f = d.n()).done; ) {
              var v = f.value, m = L.resolveFieldData(c, v);
              if (this.filters[r](m, o, a)) {
                i.push(c);
                break;
              }
            }
          } catch (C) {
            d.e(C);
          } finally {
            d.f();
          }
        }
      }
    } catch (C) {
      l.e(C);
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
      var r = L.removeAccents(e.toString()).toLocaleLowerCase(o), a = L.removeAccents(t.toString()).toLocaleLowerCase(o);
      return a.slice(0, r.length) === r;
    },
    contains: function(t, e, o) {
      if (e == null || typeof e == "string" && e.trim() === "")
        return !0;
      if (t == null)
        return !1;
      var r = L.removeAccents(e.toString()).toLocaleLowerCase(o), a = L.removeAccents(t.toString()).toLocaleLowerCase(o);
      return a.indexOf(r) !== -1;
    },
    notContains: function(t, e, o) {
      if (e == null || typeof e == "string" && e.trim() === "")
        return !0;
      if (t == null)
        return !1;
      var r = L.removeAccents(e.toString()).toLocaleLowerCase(o), a = L.removeAccents(t.toString()).toLocaleLowerCase(o);
      return a.indexOf(r) === -1;
    },
    endsWith: function(t, e, o) {
      if (e == null || e.trim() === "")
        return !0;
      if (t == null)
        return !1;
      var r = L.removeAccents(e.toString()).toLocaleLowerCase(o), a = L.removeAccents(t.toString()).toLocaleLowerCase(o);
      return a.indexOf(r, a.length - r.length) !== -1;
    },
    equals: function(t, e, o) {
      return e == null || typeof e == "string" && e.trim() === "" ? !0 : t == null ? !1 : t.getTime && e.getTime ? t.getTime() === e.getTime() : L.removeAccents(t.toString()).toLocaleLowerCase(o) === L.removeAccents(e.toString()).toLocaleLowerCase(o);
    },
    notEquals: function(t, e, o) {
      return e == null || typeof e == "string" && e.trim() === "" || t == null ? !0 : t.getTime && e.getTime ? t.getTime() !== e.getTime() : L.removeAccents(t.toString()).toLocaleLowerCase(o) !== L.removeAccents(e.toString()).toLocaleLowerCase(o);
    },
    in: function(t, e) {
      if (e == null || e.length === 0)
        return !0;
      for (var o = 0; o < e.length; o++)
        if (L.equals(t, e[o]))
          return !0;
      return !1;
    },
    notIn: function(t, e) {
      if (e == null || e.length === 0)
        return !0;
      for (var o = 0; o < e.length; o++)
        if (L.equals(t, e[o]))
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
function Cr(n) {
  "@babel/helpers - typeof";
  return Cr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Cr(n);
}
function Yc(n, t) {
  if (Cr(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t || "default");
    if (Cr(o) !== "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function Gc(n) {
  var t = Yc(n, "string");
  return Cr(t) === "symbol" ? t : String(t);
}
function Kt(n, t, e) {
  return t = Gc(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function Xc(n, t, e) {
  return Object.defineProperty(n, "prototype", {
    writable: !1
  }), n;
}
function Jc(n, t) {
  if (!(n instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
var jt = /* @__PURE__ */ Xc(function n() {
  Jc(this, n);
});
Kt(jt, "ripple", !1);
Kt(jt, "inputStyle", "outlined");
Kt(jt, "locale", "en");
Kt(jt, "appendTo", null);
Kt(jt, "cssTransition", !0);
Kt(jt, "autoZIndex", !0);
Kt(jt, "hideOverlaysOnDocumentScrolling", !1);
Kt(jt, "nonce", null);
Kt(jt, "nullSortOrder", 1);
Kt(jt, "zIndex", {
  modal: 1100,
  overlay: 1e3,
  menu: 1e3,
  tooltip: 1100,
  toast: 1200
});
Kt(jt, "pt", void 0);
Kt(jt, "filterMatchModeOptions", {
  text: [At.STARTS_WITH, At.CONTAINS, At.NOT_CONTAINS, At.ENDS_WITH, At.EQUALS, At.NOT_EQUALS],
  numeric: [At.EQUALS, At.NOT_EQUALS, At.LESS_THAN, At.LESS_THAN_OR_EQUAL_TO, At.GREATER_THAN, At.GREATER_THAN_OR_EQUAL_TO],
  date: [At.DATE_IS, At.DATE_IS_NOT, At.DATE_BEFORE, At.DATE_AFTER]
});
Kt(jt, "changeTheme", function(n, t, e, o) {
  var r, a = document.getElementById(e);
  if (!a)
    throw Error("Element with id ".concat(e, " not found."));
  var i = a.getAttribute("href").replace(n, t), l = document.createElement("link");
  l.setAttribute("rel", "stylesheet"), l.setAttribute("id", e), l.setAttribute("href", i), l.addEventListener("load", function() {
    o && o();
  }), (r = a.parentNode) === null || r === void 0 || r.replaceChild(l, a);
});
var Zc = {
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
function Jn(n, t) {
  if (n.includes("__proto__") || n.includes("prototype"))
    throw new Error("Unsafe key detected");
  var e = jt.locale;
  try {
    return Ul(e)[n];
  } catch {
    throw new Error("The ".concat(n, " option is not found in the current locale('").concat(e, "')."));
  }
}
function Ni(n, t) {
  if (n.includes("__proto__") || n.includes("prototype"))
    throw new Error("Unsafe ariaKey detected");
  var e = jt.locale;
  try {
    var o = Ul(e).aria[n];
    if (o)
      for (var r in t)
        t.hasOwnProperty(r) && (o = o.replace("{".concat(r, "}"), t[r]));
    return o;
  } catch {
    throw new Error("The ".concat(n, " option is not found in the current locale('").concat(e, "')."));
  }
}
function Ul(n) {
  var t = n || jt.locale;
  if (t.includes("__proto__") || t.includes("prototype"))
    throw new Error("Unsafe locale detected");
  return Zc[t];
}
var yt = /* @__PURE__ */ Te.createContext(), bt = jt;
function Qc(n) {
  if (Array.isArray(n)) return n;
}
function eu(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var o, r, a, i, l = [], s = !0, c = !1;
    try {
      if (a = (e = e.call(n)).next, t === 0) {
        if (Object(e) !== e) return;
        s = !1;
      } else for (; !(s = (o = a.call(e)).done) && (l.push(o.value), l.length !== t); s = !0) ;
    } catch (d) {
      c = !0, r = d;
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
function xa(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, o = new Array(t); e < t; e++) o[e] = n[e];
  return o;
}
function Yl(n, t) {
  if (n) {
    if (typeof n == "string") return xa(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return xa(n, t);
  }
}
function tu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yn(n, t) {
  return Qc(n) || eu(n, t) || Yl(n, t) || tu();
}
var Or = function(t) {
  var e = u.useRef(null);
  return u.useEffect(function() {
    return e.current = t, function() {
      e.current = null;
    };
  }, [t]), e.current;
}, ln = function(t) {
  return u.useEffect(function() {
    return t;
  }, []);
}, wn = function(t) {
  var e = t.target, o = e === void 0 ? "document" : e, r = t.type, a = t.listener, i = t.options, l = t.when, s = l === void 0 ? !0 : l, c = u.useRef(null), d = u.useRef(null), f = Or(a), v = Or(i), m = function() {
    var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, S = x.target;
    L.isNotEmpty(S) && (C(), (x.when || s) && (c.current = N.getTargetElement(S))), !d.current && c.current && (d.current = function(P) {
      return a && a(P);
    }, c.current.addEventListener(r, d.current, i));
  }, C = function() {
    d.current && (c.current.removeEventListener(r, d.current, i), d.current = null);
  }, g = function() {
    C(), f = null, v = null;
  }, O = u.useCallback(function() {
    s ? c.current = N.getTargetElement(o) : (C(), c.current = null);
  }, [o, s]);
  return u.useEffect(function() {
    O();
  }, [O]), u.useEffect(function() {
    var w = "".concat(f) !== "".concat(a), x = v !== i, S = d.current;
    S && (w || x) ? (C(), s && m()) : S || g();
  }, [a, i, s]), ln(function() {
    g();
  }), [m, C];
}, Pn = {}, nu = function(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, o = u.useState(function() {
    return $o();
  }), r = yn(o, 1), a = r[0], i = u.useState(0), l = yn(i, 2), s = l[0], c = l[1];
  return u.useEffect(function() {
    if (e) {
      Pn[t] || (Pn[t] = []);
      var d = Pn[t].push(a);
      return c(d), function() {
        delete Pn[t][d - 1];
        var f = Pn[t].length - 1, v = L.findLastIndex(Pn[t], function(m) {
          return m !== void 0;
        });
        v !== f && Pn[t].splice(v + 1), c(void 0);
      };
    }
  }, [t, a, e]), s;
};
function ru(n) {
  if (Array.isArray(n)) return xa(n);
}
function ou(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function au() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ai(n) {
  return ru(n) || ou(n) || Yl(n) || au();
}
var Gl = {
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
}, Xl = {
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
      var e = Xl.escKeyListeners, o = Math.max.apply(Math, Ai(e.keys())), r = e.get(o), a = Math.max.apply(Math, Ai(r.keys())), i = r.get(a);
      i(t);
    }
  },
  /**
   * Attach global keydown listener if there are any "esc" key handlers assigned,
   * otherwise detach.
   */
  refreshGlobalKeyDownListener: function() {
    var t = N.getTargetElement("document");
    this.escKeyListeners.size > 0 ? t.addEventListener("keydown", this.onGlobalKeyDown) : t.removeEventListener("keydown", this.onGlobalKeyDown);
  },
  /**
   * Add "Esc" key handler
   */
  addListener: function(t, e) {
    var o = this, r = yn(e, 2), a = r[0], i = r[1], l = this.escKeyListeners;
    l.has(a) || l.set(a, /* @__PURE__ */ new Map());
    var s = l.get(a);
    if (s.has(i))
      throw new Error("Unexpected: global esc key listener with priority [".concat(a, ", ").concat(i, "] already exists."));
    return s.set(i, t), this.refreshGlobalKeyDownListener(), function() {
      s.delete(i), s.size === 0 && l.delete(a), o.refreshGlobalKeyDownListener();
    };
  }
}, Jl = function(t) {
  var e = t.callback, o = t.when, r = t.priority;
  Ie(function() {
    if (o)
      return Xl.addListener(e, r);
  }, [e, o, r]);
}, Ft = function() {
  var t = rn(yt);
  return function() {
    for (var e = arguments.length, o = new Array(e), r = 0; r < e; r++)
      o[r] = arguments[r];
    return xo(o, t == null ? void 0 : t.ptOptions);
  };
}, Xt = function(t) {
  var e = u.useRef(!1);
  return u.useEffect(function() {
    if (!e.current)
      return e.current = !0, t && t();
  }, []);
}, Zl = function(t) {
  var e = t.target, o = t.listener, r = t.options, a = t.when, i = a === void 0 ? !0 : a, l = u.useContext(yt), s = u.useRef(null), c = u.useRef(null), d = u.useRef([]), f = Or(o), v = Or(r), m = function() {
    var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (L.isNotEmpty(x.target) && (C(), (x.when || i) && (s.current = N.getTargetElement(x.target))), !c.current && s.current) {
      var S = l ? l.hideOverlaysOnDocumentScrolling : bt.hideOverlaysOnDocumentScrolling, P = d.current = N.getScrollableParents(s.current, S);
      c.current = function(b) {
        return o && o(b);
      }, P.forEach(function(b) {
        return b.addEventListener("scroll", c.current, r);
      });
    }
  }, C = function() {
    if (c.current) {
      var x = d.current;
      x.forEach(function(S) {
        return S.removeEventListener("scroll", c.current, r);
      }), c.current = null;
    }
  }, g = function() {
    C(), d.current = null, f = null, v = null;
  }, O = u.useCallback(function() {
    i ? s.current = N.getTargetElement(e) : (C(), s.current = null);
  }, [e, i]);
  return u.useEffect(function() {
    O();
  }, [O]), u.useEffect(function() {
    var w = "".concat(f) !== "".concat(o), x = v !== r, S = c.current;
    S && (w || x) ? (C(), i && m()) : S || g();
  }, [o, r, i]), ln(function() {
    g();
  }), [m, C];
}, li = function(t) {
  var e = t.listener, o = t.when, r = o === void 0 ? !0 : o;
  return wn({
    target: "window",
    type: "resize",
    listener: e,
    when: r
  });
}, iu = function(t) {
  var e = t.target, o = t.overlay, r = t.listener, a = t.when, i = a === void 0 ? !0 : a, l = t.type, s = l === void 0 ? "click" : l, c = u.useRef(null), d = u.useRef(null), f = wn({
    target: "window",
    type: s,
    listener: function(ae) {
      r && r(ae, {
        type: "outside",
        valid: ae.which !== 3 && R(ae)
      });
    }
  }), v = yn(f, 2), m = v[0], C = v[1], g = li({
    target: "window",
    listener: function(ae) {
      r && r(ae, {
        type: "resize",
        valid: !N.isTouchDevice()
      });
    }
  }), O = yn(g, 2), w = O[0], x = O[1], S = wn({
    target: "window",
    type: "orientationchange",
    listener: function(ae) {
      r && r(ae, {
        type: "orientationchange",
        valid: !0
      });
    }
  }), P = yn(S, 2), b = P[0], T = P[1], I = Zl({
    target: e,
    listener: function(ae) {
      r && r(ae, {
        type: "scroll",
        valid: !0
      });
    }
  }), U = yn(I, 2), $ = U[0], j = U[1], R = function(ae) {
    return c.current && !(c.current.isSameNode(ae.target) || c.current.contains(ae.target) || d.current && d.current.contains(ae.target));
  }, ne = function() {
    m(), w(), b(), $();
  }, B = function() {
    C(), x(), T(), j();
  };
  return u.useEffect(function() {
    i ? (c.current = N.getTargetElement(e), d.current = N.getTargetElement(o)) : (B(), c.current = d.current = null);
  }, [e, o, i]), u.useEffect(function() {
    B();
  }, [i]), ln(function() {
    B();
  }), [ne, B];
}, lu = 0, _n = function(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = Le(!1), r = yn(o, 2), a = r[0], i = r[1], l = Xe(null), s = rn(yt), c = N.isClient() ? window.document : void 0, d = e.document, f = d === void 0 ? c : d, v = e.manual, m = v === void 0 ? !1 : v, C = e.name, g = C === void 0 ? "style_".concat(++lu) : C, O = e.id, w = O === void 0 ? void 0 : O, x = e.media, S = x === void 0 ? void 0 : x, P = function($) {
    var j = $.querySelector('style[data-primereact-style-id="'.concat(g, '"]'));
    if (j)
      return j;
    if (w !== void 0) {
      var R = f.getElementById(w);
      if (R)
        return R;
    }
    return f.createElement("style");
  }, b = function($) {
    a && t !== $ && (l.current.textContent = $);
  }, T = function() {
    if (!(!f || a)) {
      var $ = (s == null ? void 0 : s.styleContainer) || f.head;
      l.current = P($), l.current.isConnected || (l.current.type = "text/css", w && (l.current.id = w), S && (l.current.media = S), N.addNonce(l.current, s && s.nonce || bt.nonce), $.appendChild(l.current), g && l.current.setAttribute("data-primereact-style-id", g)), l.current.textContent = t, i(!0);
    }
  }, I = function() {
    !f || !l.current || (N.removeInlineStyle(l.current), i(!1));
  };
  return Ie(function() {
    m || T();
  }, [m]), {
    id: w,
    name: g,
    update: b,
    unload: I,
    load: T,
    isLoaded: a
  };
}, tt = function(t, e) {
  var o = u.useRef(!1);
  return u.useEffect(function() {
    if (!o.current) {
      o.current = !0;
      return;
    }
    return t && t();
  }, e);
};
function Ea(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, o = new Array(t); e < t; e++) o[e] = n[e];
  return o;
}
function su(n) {
  if (Array.isArray(n)) return Ea(n);
}
function cu(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function uu(n, t) {
  if (n) {
    if (typeof n == "string") return Ea(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Ea(n, t);
  }
}
function du() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Li(n) {
  return su(n) || cu(n) || uu(n) || du();
}
function Pr(n) {
  "@babel/helpers - typeof";
  return Pr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pr(n);
}
function fu(n, t) {
  if (Pr(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t || "default");
    if (Pr(o) !== "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function pu(n) {
  var t = fu(n, "string");
  return Pr(t) === "symbol" ? t : String(t);
}
function Sa(n, t, e) {
  return t = pu(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function $i(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function It(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $i(Object(e), !0).forEach(function(o) {
      Sa(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : $i(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
var vu = `
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
`, gu = `
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
`, hu = `
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
`, bu = `
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
    `).concat(gu, `
    `).concat(hu, `
}
`), $e = {
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
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = t.css, o = It(It({}, t.defaultProps), $e.defaultProps), r = {}, a = function(d) {
      var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return $e.context = f, $e.cProps = d, L.getMergedProps(d, o);
    }, i = function(d) {
      return L.getDiffProps(d, o);
    }, l = function() {
      var d, f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, C = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0;
      f.hasOwnProperty("pt") && f.pt !== void 0 && (f = f.pt);
      var g = v, O = /./g.test(g) && !!m[g.split(".")[0]], w = O ? L.toFlatCase(g.split(".")[1]) : L.toFlatCase(g), x = m.hostName && L.toFlatCase(m.hostName), S = x || m.props && m.props.__TYPE && L.toFlatCase(m.props.__TYPE) || "", P = w === "transition", b = "data-pc-", T = function Se(pe) {
        return pe != null && pe.props ? pe.hostName ? pe.props.__TYPE === pe.hostName ? pe.props : Se(pe.parent) : pe.parent : void 0;
      }, I = function(pe) {
        var Z, _;
        return ((Z = m.props) === null || Z === void 0 ? void 0 : Z[pe]) || ((_ = T(m)) === null || _ === void 0 ? void 0 : _[pe]);
      };
      $e.cParams = m, $e.cName = S;
      var U = I("ptOptions") || $e.context.ptOptions || {}, $ = U.mergeSections, j = $ === void 0 ? !0 : $, R = U.mergeProps, ne = R === void 0 ? !1 : R, B = function() {
        var pe = xn.apply(void 0, arguments);
        return Array.isArray(pe) ? {
          className: we.apply(void 0, Li(pe))
        } : L.isString(pe) ? {
          className: pe
        } : pe != null && pe.hasOwnProperty("className") && Array.isArray(pe.className) ? {
          className: we.apply(void 0, Li(pe.className))
        } : pe;
      }, re = C ? O ? Ql(B, g, m) : es(B, g, m) : void 0, ae = O ? void 0 : Mo(Fo(f, S), B, g, m), he = !P && It(It({}, w === "root" && Sa({}, "".concat(b, "name"), m.props && m.props.__parentMetadata ? L.toFlatCase(m.props.__TYPE) : S)), {}, Sa({}, "".concat(b, "section"), w));
      return j || !j && ae ? ne ? xo([re, ae, Object.keys(he).length ? he : {}], {
        classNameMergeFunction: (d = $e.context.ptOptions) === null || d === void 0 ? void 0 : d.classNameMergeFunction
      }) : It(It(It({}, re), ae), Object.keys(he).length ? he : {}) : It(It({}, ae), Object.keys(he).length ? he : {});
    }, s = function() {
      var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, f = d.props, v = d.state, m = function() {
        var S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return l((f || {}).pt, S, It(It({}, d), P));
      }, C = function() {
        var S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return l(S, P, b, !1);
      }, g = function() {
        return $e.context.unstyled || bt.unstyled || f.unstyled;
      }, O = function() {
        var S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return g() ? void 0 : xn(e && e.classes, S, It({
          props: f,
          state: v
        }, P));
      }, w = function() {
        var S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
        if (b) {
          var T, I = xn(e && e.inlineStyles, S, It({
            props: f,
            state: v
          }, P)), U = xn(r, S, It({
            props: f,
            state: v
          }, P));
          return xo([U, I], {
            classNameMergeFunction: (T = $e.context.ptOptions) === null || T === void 0 ? void 0 : T.classNameMergeFunction
          });
        }
      };
      return {
        ptm: m,
        ptmo: C,
        sx: w,
        cx: O,
        isUnstyled: g
      };
    };
    return It(It({
      getProps: a,
      getOtherProps: i,
      setMetaData: s
    }, t), {}, {
      defaultProps: o
    });
  }
}, xn = function n(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = String(L.toFlatCase(e)).split("."), a = r.shift(), i = L.isNotEmpty(t) ? Object.keys(t).find(function(l) {
    return L.toFlatCase(l) === a;
  }) : "";
  return a ? L.isObject(t) ? n(L.getItemValue(t[i], o), r.join("."), o) : void 0 : L.getItemValue(t, o);
}, Fo = function(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 ? arguments[2] : void 0, r = t == null ? void 0 : t._usept, a = function(l) {
    var s, c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, d = o ? o(l) : l, f = L.toFlatCase(e);
    return (s = c ? f !== $e.cName ? d == null ? void 0 : d[f] : void 0 : d == null ? void 0 : d[f]) !== null && s !== void 0 ? s : d;
  };
  return L.isNotEmpty(r) ? {
    _usept: r,
    originalValue: a(t.originalValue),
    value: a(t.value)
  } : a(t, !0);
}, Mo = function(t, e, o, r) {
  var a = function(g) {
    return e(g, o, r);
  };
  if (t != null && t.hasOwnProperty("_usept")) {
    var i = t._usept || $e.context.ptOptions || {}, l = i.mergeSections, s = l === void 0 ? !0 : l, c = i.mergeProps, d = c === void 0 ? !1 : c, f = i.classNameMergeFunction, v = a(t.originalValue), m = a(t.value);
    return v === void 0 && m === void 0 ? void 0 : L.isString(m) ? m : L.isString(v) ? v : s || !s && m ? d ? xo([v, m], {
      classNameMergeFunction: f
    }) : It(It({}, v), m) : m;
  }
  return a(t);
}, yu = function() {
  return Fo($e.context.pt || bt.pt, void 0, function(t) {
    return L.getItemValue(t, $e.cParams);
  });
}, wu = function() {
  return Fo($e.context.pt || bt.pt, void 0, function(t) {
    return xn(t, $e.cName, $e.cParams) || L.getItemValue(t, $e.cParams);
  });
}, Ql = function(t, e, o) {
  return Mo(yu(), t, e, o);
}, es = function(t, e, o) {
  return Mo(wu(), t, e, o);
}, Jt = function(t) {
  var e = arguments.length > 2 ? arguments[2] : void 0, o = e.name, r = e.styled, a = r === void 0 ? !1 : r, i = e.hostName, l = i === void 0 ? "" : i, s = Ql(xn, "global.css", $e.cParams), c = L.toFlatCase(o), d = _n(vu, {
    name: "base",
    manual: !0
  }), f = d.load, v = _n(bu, {
    name: "common",
    manual: !0
  }), m = v.load, C = _n(s, {
    name: "global",
    manual: !0
  }), g = C.load, O = _n(t, {
    name: o,
    manual: !0
  }), w = O.load, x = function(P) {
    if (!l) {
      var b = Mo(Fo(($e.cProps || {}).pt, c), xn, "hooks.".concat(P)), T = es(xn, "hooks.".concat(P));
      b == null || b(), T == null || T();
    }
  };
  x("useMountEffect"), Xt(function() {
    f(), g(), m(), a || w();
  }), tt(function() {
    x("useUpdateEffect");
  }), ln(function() {
    x("useUnmountEffect");
  });
};
function Eo() {
  return Eo = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e) ({}).hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, Eo.apply(null, arguments);
}
function ts(n, t) {
  if (n == null) return {};
  var e = {};
  for (var o in n) if ({}.hasOwnProperty.call(n, o)) {
    if (t.includes(o)) continue;
    e[o] = n[o];
  }
  return e;
}
function Ca(n, t) {
  return Ca = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, o) {
    return e.__proto__ = o, e;
  }, Ca(n, t);
}
function ns(n, t) {
  n.prototype = Object.create(t.prototype), n.prototype.constructor = n, Ca(n, t);
}
var Oa = { exports: {} }, Jr = { exports: {} }, Ke = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fi;
function xu() {
  if (Fi) return Ke;
  Fi = 1;
  var n = typeof Symbol == "function" && Symbol.for, t = n ? Symbol.for("react.element") : 60103, e = n ? Symbol.for("react.portal") : 60106, o = n ? Symbol.for("react.fragment") : 60107, r = n ? Symbol.for("react.strict_mode") : 60108, a = n ? Symbol.for("react.profiler") : 60114, i = n ? Symbol.for("react.provider") : 60109, l = n ? Symbol.for("react.context") : 60110, s = n ? Symbol.for("react.async_mode") : 60111, c = n ? Symbol.for("react.concurrent_mode") : 60111, d = n ? Symbol.for("react.forward_ref") : 60112, f = n ? Symbol.for("react.suspense") : 60113, v = n ? Symbol.for("react.suspense_list") : 60120, m = n ? Symbol.for("react.memo") : 60115, C = n ? Symbol.for("react.lazy") : 60116, g = n ? Symbol.for("react.block") : 60121, O = n ? Symbol.for("react.fundamental") : 60117, w = n ? Symbol.for("react.responder") : 60118, x = n ? Symbol.for("react.scope") : 60119;
  function S(b) {
    if (typeof b == "object" && b !== null) {
      var T = b.$$typeof;
      switch (T) {
        case t:
          switch (b = b.type, b) {
            case s:
            case c:
            case o:
            case a:
            case r:
            case f:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case l:
                case d:
                case C:
                case m:
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
  return Ke.AsyncMode = s, Ke.ConcurrentMode = c, Ke.ContextConsumer = l, Ke.ContextProvider = i, Ke.Element = t, Ke.ForwardRef = d, Ke.Fragment = o, Ke.Lazy = C, Ke.Memo = m, Ke.Portal = e, Ke.Profiler = a, Ke.StrictMode = r, Ke.Suspense = f, Ke.isAsyncMode = function(b) {
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
    return S(b) === o;
  }, Ke.isLazy = function(b) {
    return S(b) === C;
  }, Ke.isMemo = function(b) {
    return S(b) === m;
  }, Ke.isPortal = function(b) {
    return S(b) === e;
  }, Ke.isProfiler = function(b) {
    return S(b) === a;
  }, Ke.isStrictMode = function(b) {
    return S(b) === r;
  }, Ke.isSuspense = function(b) {
    return S(b) === f;
  }, Ke.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === o || b === c || b === a || b === r || b === f || b === v || typeof b == "object" && b !== null && (b.$$typeof === C || b.$$typeof === m || b.$$typeof === i || b.$$typeof === l || b.$$typeof === d || b.$$typeof === O || b.$$typeof === w || b.$$typeof === x || b.$$typeof === g);
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
var Mi;
function Eu() {
  return Mi || (Mi = 1, process.env.NODE_ENV !== "production" && function() {
    var n = typeof Symbol == "function" && Symbol.for, t = n ? Symbol.for("react.element") : 60103, e = n ? Symbol.for("react.portal") : 60106, o = n ? Symbol.for("react.fragment") : 60107, r = n ? Symbol.for("react.strict_mode") : 60108, a = n ? Symbol.for("react.profiler") : 60114, i = n ? Symbol.for("react.provider") : 60109, l = n ? Symbol.for("react.context") : 60110, s = n ? Symbol.for("react.async_mode") : 60111, c = n ? Symbol.for("react.concurrent_mode") : 60111, d = n ? Symbol.for("react.forward_ref") : 60112, f = n ? Symbol.for("react.suspense") : 60113, v = n ? Symbol.for("react.suspense_list") : 60120, m = n ? Symbol.for("react.memo") : 60115, C = n ? Symbol.for("react.lazy") : 60116, g = n ? Symbol.for("react.block") : 60121, O = n ? Symbol.for("react.fundamental") : 60117, w = n ? Symbol.for("react.responder") : 60118, x = n ? Symbol.for("react.scope") : 60119;
    function S(M) {
      return typeof M == "string" || typeof M == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      M === o || M === c || M === a || M === r || M === f || M === v || typeof M == "object" && M !== null && (M.$$typeof === C || M.$$typeof === m || M.$$typeof === i || M.$$typeof === l || M.$$typeof === d || M.$$typeof === O || M.$$typeof === w || M.$$typeof === x || M.$$typeof === g);
    }
    function P(M) {
      if (typeof M == "object" && M !== null) {
        var _e = M.$$typeof;
        switch (_e) {
          case t:
            var Ae = M.type;
            switch (Ae) {
              case s:
              case c:
              case o:
              case a:
              case r:
              case f:
                return Ae;
              default:
                var je = Ae && Ae.$$typeof;
                switch (je) {
                  case l:
                  case d:
                  case C:
                  case m:
                  case i:
                    return je;
                  default:
                    return _e;
                }
            }
          case e:
            return _e;
        }
      }
    }
    var b = s, T = c, I = l, U = i, $ = t, j = d, R = o, ne = C, B = m, re = e, ae = a, he = r, Se = f, pe = !1;
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
      return P(M) === o;
    }
    function ve(M) {
      return P(M) === C;
    }
    function ce(M) {
      return P(M) === m;
    }
    function K(M) {
      return P(M) === e;
    }
    function D(M) {
      return P(M) === a;
    }
    function F(M) {
      return P(M) === r;
    }
    function ue(M) {
      return P(M) === f;
    }
    Ue.AsyncMode = b, Ue.ConcurrentMode = T, Ue.ContextConsumer = I, Ue.ContextProvider = U, Ue.Element = $, Ue.ForwardRef = j, Ue.Fragment = R, Ue.Lazy = ne, Ue.Memo = B, Ue.Portal = re, Ue.Profiler = ae, Ue.StrictMode = he, Ue.Suspense = Se, Ue.isAsyncMode = Z, Ue.isConcurrentMode = _, Ue.isContextConsumer = J, Ue.isContextProvider = Q, Ue.isElement = X, Ue.isForwardRef = Y, Ue.isFragment = fe, Ue.isLazy = ve, Ue.isMemo = ce, Ue.isPortal = K, Ue.isProfiler = D, Ue.isStrictMode = F, Ue.isSuspense = ue, Ue.isValidElementType = S, Ue.typeOf = P;
  }()), Ue;
}
var zi;
function rs() {
  return zi || (zi = 1, process.env.NODE_ENV === "production" ? Jr.exports = xu() : Jr.exports = Eu()), Jr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var na, Hi;
function Su() {
  if (Hi) return na;
  Hi = 1;
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
  return na = r() ? Object.assign : function(a, i) {
    for (var l, s = o(a), c, d = 1; d < arguments.length; d++) {
      l = Object(arguments[d]);
      for (var f in l)
        t.call(l, f) && (s[f] = l[f]);
      if (n) {
        c = n(l);
        for (var v = 0; v < c.length; v++)
          e.call(l, c[v]) && (s[c[v]] = l[c[v]]);
      }
    }
    return s;
  }, na;
}
var ra, Bi;
function si() {
  if (Bi) return ra;
  Bi = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ra = n, ra;
}
var oa, Wi;
function os() {
  return Wi || (Wi = 1, oa = Function.call.bind(Object.prototype.hasOwnProperty)), oa;
}
var aa, Vi;
function Cu() {
  if (Vi) return aa;
  Vi = 1;
  var n = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = si(), e = {}, o = os();
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
      for (var d in a)
        if (o(a, d)) {
          var f;
          try {
            if (typeof a[d] != "function") {
              var v = Error(
                (s || "React class") + ": " + l + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw v.name = "Invariant Violation", v;
            }
            f = a[d](i, d, s, l, null, t);
          } catch (C) {
            f = C;
          }
          if (f && !(f instanceof Error) && n(
            (s || "React class") + ": type specification of " + l + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in e)) {
            e[f.message] = !0;
            var m = c ? c() : "";
            n(
              "Failed " + l + " type: " + f.message + (m ?? "")
            );
          }
        }
    }
  }
  return r.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (e = {});
  }, aa = r, aa;
}
var ia, Ki;
function Ou() {
  if (Ki) return ia;
  Ki = 1;
  var n = rs(), t = Su(), e = si(), o = os(), r = Cu(), a = function() {
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
  return ia = function(l, s) {
    var c = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function f(_) {
      var J = _ && (c && _[c] || _[d]);
      if (typeof J == "function")
        return J;
    }
    var v = "<<anonymous>>", m = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: x(),
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
    function C(_, J) {
      return _ === J ? _ !== 0 || 1 / _ === 1 / J : _ !== _ && J !== J;
    }
    function g(_, J) {
      this.message = _, this.data = J && typeof J == "object" ? J : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function O(_) {
      if (process.env.NODE_ENV !== "production")
        var J = {}, Q = 0;
      function X(fe, ve, ce, K, D, F, ue) {
        if (K = K || v, F = F || ce, ue !== e) {
          if (s) {
            var M = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw M.name = "Invariant Violation", M;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var _e = K + ":" + ce;
            !J[_e] && // Avoid spamming the console because they are often not actionable except for lib authors
            Q < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + F + "` prop on `" + K + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), J[_e] = !0, Q++);
          }
        }
        return ve[ce] == null ? fe ? ve[ce] === null ? new g("The " + D + " `" + F + "` is marked as required " + ("in `" + K + "`, but its value is `null`.")) : new g("The " + D + " `" + F + "` is marked as required in " + ("`" + K + "`, but its value is `undefined`.")) : null : _(ve, ce, K, D, F);
      }
      var Y = X.bind(null, !1);
      return Y.isRequired = X.bind(null, !0), Y;
    }
    function w(_) {
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
      return O(J);
    }
    function x() {
      return O(i);
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
      return O(J);
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
      return O(_);
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
      return O(_);
    }
    function T(_) {
      function J(Q, X, Y, fe, ve) {
        if (!(Q[X] instanceof _)) {
          var ce = _.name || v, K = Z(Q[X]);
          return new g("Invalid " + fe + " `" + ve + "` of type " + ("`" + K + "` supplied to `" + Y + "`, expected ") + ("instance of `" + ce + "`."));
        }
        return null;
      }
      return O(J);
    }
    function I(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), i;
      function J(Q, X, Y, fe, ve) {
        for (var ce = Q[X], K = 0; K < _.length; K++)
          if (C(ce, _[K]))
            return null;
        var D = JSON.stringify(_, function(ue, M) {
          var _e = Se(M);
          return _e === "symbol" ? String(M) : M;
        });
        return new g("Invalid " + fe + " `" + ve + "` of value `" + String(ce) + "` " + ("supplied to `" + Y + "`, expected one of " + D + "."));
      }
      return O(J);
    }
    function U(_) {
      function J(Q, X, Y, fe, ve) {
        if (typeof _ != "function")
          return new g("Property `" + ve + "` of component `" + Y + "` has invalid PropType notation inside objectOf.");
        var ce = Q[X], K = he(ce);
        if (K !== "object")
          return new g("Invalid " + fe + " `" + ve + "` of type " + ("`" + K + "` supplied to `" + Y + "`, expected an object."));
        for (var D in ce)
          if (o(ce, D)) {
            var F = _(ce, D, Y, fe, ve + "." + D, e);
            if (F instanceof Error)
              return F;
          }
        return null;
      }
      return O(J);
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
          M.data && o(M.data, "expectedType") && D.push(M.data.expectedType);
        }
        var _e = D.length > 0 ? ", expected one of type [" + D.join(", ") + "]" : "";
        return new g("Invalid " + ce + " `" + K + "` supplied to " + ("`" + ve + "`" + _e + "."));
      }
      return O(X);
    }
    function j() {
      function _(J, Q, X, Y, fe) {
        return re(J[Q]) ? null : new g("Invalid " + Y + " `" + fe + "` supplied to " + ("`" + X + "`, expected a ReactNode."));
      }
      return O(_);
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
      return O(J);
    }
    function B(_) {
      function J(Q, X, Y, fe, ve) {
        var ce = Q[X], K = he(ce);
        if (K !== "object")
          return new g("Invalid " + fe + " `" + ve + "` of type `" + K + "` " + ("supplied to `" + Y + "`, expected `object`."));
        var D = t({}, Q[X], _);
        for (var F in D) {
          var ue = _[F];
          if (o(_, F) && typeof ue != "function")
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
      return O(J);
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
      return !_.constructor || !_.constructor.name ? v : _.constructor.name;
    }
    return m.checkPropTypes = r, m.resetWarningCache = r.resetWarningCache, m.PropTypes = m, m;
  }, ia;
}
var la, Ui;
function Pu() {
  if (Ui) return la;
  Ui = 1;
  var n = si();
  function t() {
  }
  function e() {
  }
  return e.resetWarningCache = t, la = function() {
    function o(i, l, s, c, d, f) {
      if (f !== n) {
        var v = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw v.name = "Invariant Violation", v;
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
  }, la;
}
if (process.env.NODE_ENV !== "production") {
  var qu = rs(), Tu = !0;
  Oa.exports = Ou()(qu.isElement, Tu);
} else
  Oa.exports = Pu()();
var qn = Oa.exports;
const ke = /* @__PURE__ */ Sc(qn);
function Iu(n, t) {
  return n.classList ? !!t && n.classList.contains(t) : (" " + (n.className.baseVal || n.className) + " ").indexOf(" " + t + " ") !== -1;
}
function _u(n, t) {
  n.classList ? n.classList.add(t) : Iu(n, t) || (typeof n.className == "string" ? n.className = n.className + " " + t : n.setAttribute("class", (n.className && n.className.baseVal || "") + " " + t));
}
function Yi(n, t) {
  return n.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function Ru(n, t) {
  n.classList ? n.classList.remove(t) : typeof n.className == "string" ? n.className = Yi(n.className, t) : n.setAttribute("class", Yi(n.className && n.className.baseVal || "", t));
}
const Gi = {
  disabled: !1
};
var ku = process.env.NODE_ENV !== "production" ? ke.oneOfType([ke.number, ke.shape({
  enter: ke.number,
  exit: ke.number,
  appear: ke.number
}).isRequired]) : null, Du = process.env.NODE_ENV !== "production" ? ke.oneOfType([ke.string, ke.shape({
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
const as = Te.createContext(null);
var is = function(t) {
  return t.scrollTop;
}, hr = "unmounted", Tn = "exited", In = "entering", Hn = "entered", Pa = "exiting", sn = /* @__PURE__ */ function(n) {
  ns(t, n);
  function t(o, r) {
    var a;
    a = n.call(this, o, r) || this;
    var i = r, l = i && !i.isMounting ? o.enter : o.appear, s;
    return a.appearStatus = null, o.in ? l ? (s = Tn, a.appearStatus = In) : s = Hn : o.unmountOnExit || o.mountOnEnter ? s = hr : s = Tn, a.state = {
      status: s
    }, a.nextCallback = null, a;
  }
  t.getDerivedStateFromProps = function(r, a) {
    var i = r.in;
    return i && a.status === hr ? {
      status: Tn
    } : null;
  };
  var e = t.prototype;
  return e.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, e.componentDidUpdate = function(r) {
    var a = null;
    if (r !== this.props) {
      var i = this.state.status;
      this.props.in ? i !== In && i !== Hn && (a = In) : (i === In || i === Hn) && (a = Pa);
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
      if (this.cancelNextCallback(), a === In) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var i = this.props.nodeRef ? this.props.nodeRef.current : gr.findDOMNode(this);
          i && is(i);
        }
        this.performEnter(r);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Tn && this.setState({
      status: hr
    });
  }, e.performEnter = function(r) {
    var a = this, i = this.props.enter, l = this.context ? this.context.isMounting : r, s = this.props.nodeRef ? [l] : [gr.findDOMNode(this), l], c = s[0], d = s[1], f = this.getTimeouts(), v = l ? f.appear : f.enter;
    if (!r && !i || Gi.disabled) {
      this.safeSetState({
        status: Hn
      }, function() {
        a.props.onEntered(c);
      });
      return;
    }
    this.props.onEnter(c, d), this.safeSetState({
      status: In
    }, function() {
      a.props.onEntering(c, d), a.onTransitionEnd(v, function() {
        a.safeSetState({
          status: Hn
        }, function() {
          a.props.onEntered(c, d);
        });
      });
    });
  }, e.performExit = function() {
    var r = this, a = this.props.exit, i = this.getTimeouts(), l = this.props.nodeRef ? void 0 : gr.findDOMNode(this);
    if (!a || Gi.disabled) {
      this.safeSetState({
        status: Tn
      }, function() {
        r.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: Pa
    }, function() {
      r.props.onExiting(l), r.onTransitionEnd(i.exit, function() {
        r.safeSetState({
          status: Tn
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
    var i = this.props.nodeRef ? this.props.nodeRef.current : gr.findDOMNode(this), l = r == null && !this.props.addEndListener;
    if (!i || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var s = this.props.nodeRef ? [this.nextCallback] : [i, this.nextCallback], c = s[0], d = s[1];
      this.props.addEndListener(c, d);
    }
    r != null && setTimeout(this.nextCallback, r);
  }, e.render = function() {
    var r = this.state.status;
    if (r === hr)
      return null;
    var a = this.props, i = a.children;
    a.in, a.mountOnEnter, a.unmountOnExit, a.appear, a.enter, a.exit, a.timeout, a.addEndListener, a.onEnter, a.onEntering, a.onEntered, a.onExit, a.onExiting, a.onExited, a.nodeRef;
    var l = ts(a, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Te.createElement(as.Provider, {
        value: null
      }, typeof i == "function" ? i(r, l) : Te.cloneElement(Te.Children.only(i), l))
    );
  }, t;
}(Te.Component);
sn.contextType = as;
sn.propTypes = process.env.NODE_ENV !== "production" ? {
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
    current: typeof Element > "u" ? ke.any : function(n, t, e, o, r, a) {
      var i = n[t];
      return ke.instanceOf(i && "ownerDocument" in i ? i.ownerDocument.defaultView.Element : Element)(n, t, e, o, r, a);
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
function Fn() {
}
sn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Fn,
  onEntering: Fn,
  onEntered: Fn,
  onExit: Fn,
  onExiting: Fn,
  onExited: Fn
};
sn.UNMOUNTED = hr;
sn.EXITED = Tn;
sn.ENTERING = In;
sn.ENTERED = Hn;
sn.EXITING = Pa;
var ju = function(t, e) {
  return t && e && e.split(" ").forEach(function(o) {
    return _u(t, o);
  });
}, sa = function(t, e) {
  return t && e && e.split(" ").forEach(function(o) {
    return Ru(t, o);
  });
}, ci = /* @__PURE__ */ function(n) {
  ns(t, n);
  function t() {
    for (var o, r = arguments.length, a = new Array(r), i = 0; i < r; i++)
      a[i] = arguments[i];
    return o = n.call.apply(n, [this].concat(a)) || this, o.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    }, o.onEnter = function(l, s) {
      var c = o.resolveArguments(l, s), d = c[0], f = c[1];
      o.removeClasses(d, "exit"), o.addClass(d, f ? "appear" : "enter", "base"), o.props.onEnter && o.props.onEnter(l, s);
    }, o.onEntering = function(l, s) {
      var c = o.resolveArguments(l, s), d = c[0], f = c[1], v = f ? "appear" : "enter";
      o.addClass(d, v, "active"), o.props.onEntering && o.props.onEntering(l, s);
    }, o.onEntered = function(l, s) {
      var c = o.resolveArguments(l, s), d = c[0], f = c[1], v = f ? "appear" : "enter";
      o.removeClasses(d, v), o.addClass(d, v, "done"), o.props.onEntered && o.props.onEntered(l, s);
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
      var s = o.props.classNames, c = typeof s == "string", d = c && s ? s + "-" : "", f = c ? "" + d + l : s[l], v = c ? f + "-active" : s[l + "Active"], m = c ? f + "-done" : s[l + "Done"];
      return {
        baseClassName: f,
        activeClassName: v,
        doneClassName: m
      };
    }, o;
  }
  var e = t.prototype;
  return e.addClass = function(r, a, i) {
    var l = this.getClassNames(a)[i + "ClassName"], s = this.getClassNames("enter"), c = s.doneClassName;
    a === "appear" && i === "done" && c && (l += " " + c), i === "active" && r && is(r), l && (this.appliedClasses[a][i] = l, ju(r, l));
  }, e.removeClasses = function(r, a) {
    var i = this.appliedClasses[a], l = i.base, s = i.active, c = i.done;
    this.appliedClasses[a] = {}, l && sa(r, l), s && sa(r, s), c && sa(r, c);
  }, e.render = function() {
    var r = this.props;
    r.classNames;
    var a = ts(r, ["classNames"]);
    return /* @__PURE__ */ Te.createElement(sn, Eo({}, a, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  }, t;
}(Te.Component);
ci.defaultProps = {
  classNames: ""
};
ci.propTypes = process.env.NODE_ENV !== "production" ? Eo({}, sn.propTypes, {
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
  classNames: Du,
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
function qr(n) {
  "@babel/helpers - typeof";
  return qr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qr(n);
}
function Nu(n, t) {
  if (qr(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t || "default");
    if (qr(o) !== "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function Au(n) {
  var t = Nu(n, "string");
  return qr(t) === "symbol" ? t : String(t);
}
function Lu(n, t, e) {
  return t = Au(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
var qa = {
  defaultProps: {
    __TYPE: "CSSTransition",
    children: void 0
  },
  getProps: function(t) {
    return L.getMergedProps(t, qa.defaultProps);
  },
  getOtherProps: function(t) {
    return L.getDiffProps(t, qa.defaultProps);
  }
};
function Xi(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function ca(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xi(Object(e), !0).forEach(function(o) {
      Lu(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Xi(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
var zo = /* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = qa.getProps(n), o = u.useContext(yt), r = e.disabled || e.options && e.options.disabled || o && !o.cssTransition || !bt.cssTransition, a = function(g, O) {
    e.onEnter && e.onEnter(g, O), e.options && e.options.onEnter && e.options.onEnter(g, O);
  }, i = function(g, O) {
    e.onEntering && e.onEntering(g, O), e.options && e.options.onEntering && e.options.onEntering(g, O);
  }, l = function(g, O) {
    e.onEntered && e.onEntered(g, O), e.options && e.options.onEntered && e.options.onEntered(g, O);
  }, s = function(g) {
    e.onExit && e.onExit(g), e.options && e.options.onExit && e.options.onExit(g);
  }, c = function(g) {
    e.onExiting && e.onExiting(g), e.options && e.options.onExiting && e.options.onExiting(g);
  }, d = function(g) {
    e.onExited && e.onExited(g), e.options && e.options.onExited && e.options.onExited(g);
  };
  if (tt(function() {
    if (r) {
      var C = L.getRefElement(e.nodeRef);
      e.in ? (a(C, !0), i(C, !0), l(C, !0)) : (s(C), c(C), d(C));
    }
  }, [e.in]), r)
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
  }, v = {
    classNames: e.classNames,
    timeout: e.timeout,
    unmountOnExit: e.unmountOnExit
  }, m = ca(ca(ca({}, v), e.options || {}), f);
  return /* @__PURE__ */ u.createElement(ci, m, e.children);
});
zo.displayName = "CSSTransition";
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
    var e = L.isEmpty(t.label), o = Vt.getOtherProps(t), r = {
      className: we("p-icon", {
        "p-icon-spin": t.spin
      }, t.className),
      role: e ? void 0 : "img",
      "aria-label": e ? void 0 : t.label,
      "aria-hidden": e
    };
    return L.getMergedProps(o, r);
  }
};
function Ta() {
  return Ta = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, Ta.apply(this, arguments);
}
var ui = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Vt.getPTI(n);
  return /* @__PURE__ */ u.createElement("svg", Ta({
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
ui.displayName = "ChevronDownIcon";
function Ia() {
  return Ia = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, Ia.apply(this, arguments);
}
var di = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Vt.getPTI(n);
  return /* @__PURE__ */ u.createElement("svg", Ia({
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
di.displayName = "ChevronRightIcon";
function So() {
  return So = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, So.apply(this, arguments);
}
function _a(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, o = new Array(t); e < t; e++) o[e] = n[e];
  return o;
}
function $u(n) {
  if (Array.isArray(n)) return _a(n);
}
function Fu(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function ls(n, t) {
  if (n) {
    if (typeof n == "string") return _a(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return _a(n, t);
  }
}
function Mu() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zu(n) {
  return $u(n) || Fu(n) || ls(n) || Mu();
}
function Tr(n) {
  "@babel/helpers - typeof";
  return Tr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Tr(n);
}
function Hu(n, t) {
  if (Tr(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t || "default");
    if (Tr(o) !== "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function Bu(n) {
  var t = Hu(n, "string");
  return Tr(t) === "symbol" ? t : String(t);
}
function Wu(n, t, e) {
  return t = Bu(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function Vu(n) {
  if (Array.isArray(n)) return n;
}
function Ku(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var o, r, a, i, l = [], s = !0, c = !1;
    try {
      if (a = (e = e.call(n)).next, t !== 0) for (; !(s = (o = a.call(e)).done) && (l.push(o.value), l.length !== t); s = !0) ;
    } catch (d) {
      c = !0, r = d;
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
function Uu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ji(n, t) {
  return Vu(n) || Ku(n, t) || ls(n, t) || Uu();
}
var Yu = {
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
      var e = t.selected, o = t.getTabProp, r = t.tab;
      return we("p-accordion-header", {
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
}, Gu = `
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
`, Zr = $e.extend({
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
    classes: Yu,
    styles: Gu
  }
}), Kn = $e.extend({
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
    return L.getComponentProp(t, e, Kn.defaultProps);
  },
  getCProps: function(t) {
    return L.getComponentProps(t, Kn.defaultProps);
  },
  getCOtherProps: function(t) {
    return L.getComponentDiffProps(t, Kn.defaultProps);
  }
});
function Zi(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function Mn(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zi(Object(e), !0).forEach(function(o) {
      Wu(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Zi(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
var on = function() {
}, vn = /* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Ft(), o = u.useContext(yt), r = Zr.getProps(n, o), a = u.useState(r.id), i = Ji(a, 2), l = i[0], s = i[1], c = u.useState(r.activeIndex), d = Ji(c, 2), f = d[0], v = d[1], m = u.useRef(null), C = r.onTabChange ? r.activeIndex : f, g = u.Children.count(r.children), O = {
    props: r,
    state: {
      id: l,
      activeIndex: f
    }
  }, w = Zr.setMetaData(Mn({}, O)), x = w.ptm, S = w.ptmo, P = w.cx, b = w.isUnstyled;
  Jt(Zr.css.styles, b, {
    name: "accordion"
  });
  var T = function(D, F) {
    return Kn.getCProp(D, F);
  }, I = function(D, F, ue) {
    var M = {
      // props: atProps, /* @todo */
      parent: O,
      context: {
        index: ue,
        count: g,
        first: ue === 0,
        last: ue === g - 1,
        selected: J(ue),
        disabled: T(D, "disabled")
      }
    };
    return e(x("tab.".concat(F), {
      tab: M
    }), x("accordiontab.".concat(F), {
      accordiontab: M
    }), x("accordiontab.".concat(F), M), S(T(D, "pt"), F, M));
  }, U = function(D, F, ue) {
    $(D, F, ue);
  }, $ = function(D, F, ue) {
    if (!T(F, "disabled")) {
      var M = J(ue), _e = null;
      if (r.multiple) {
        var Ae = C || [];
        _e = M ? Ae.filter(function(Ne) {
          return Ne !== ue;
        }) : [].concat(zu(Ae), [ue]);
      } else
        _e = M ? null : ue;
      var je = M ? r.onTabClose : r.onTabOpen;
      je && je({
        originalEvent: D,
        index: ue
      }), r.onTabChange ? r.onTabChange({
        originalEvent: D,
        index: _e
      }) : v(_e);
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
    var F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, ue = F ? D : D.nextElementSibling, M = N.findSingle(ue, '[data-pc-section="header"]');
    return M ? N.getAttribute(M, "data-p-disabled") ? K(M.parentElement) : N.findSingle(M, '[data-pc-section="headeraction"]') : null;
  }, Se = function K(D) {
    var F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, ue = F ? D : D.previousElementSibling, M = N.findSingle(ue, '[data-pc-section="header"]');
    return M ? N.getAttribute(M, "data-p-disabled") ? K(M.parentElement) : N.findSingle(M, '[data-pc-section="headeraction"]') : null;
  }, pe = function() {
    return he(m.current.firstElementChild, !0);
  }, Z = function() {
    return Se(m.current.lastElementChild, !0);
  }, _ = function(D) {
    D && N.focus(D);
  }, J = function(D) {
    return r.multiple && Array.isArray(C) ? C && C.some(function(F) {
      return F === D;
    }) : C === D;
  };
  if (u.useImperativeHandle(t, function() {
    return {
      props: r,
      getElement: function() {
        return m.current;
      }
    };
  }), Xt(function() {
    l || s($o());
  }), !l)
    return null;
  var Q = function(D, F, ue) {
    var M = Mn(Mn({}, T(D, "style") || {}), T(D, "headerStyle") || {}), _e = l + "_header_" + ue, Ae = l + "_content_" + ue, je = T(D, "disabled") ? -1 : T(D, "tabIndex"), Ne = e({
      className: P("accordiontab.headertitle")
    }, I(D, "headertitle", ue)), We = Kn.getCProps(D), xt = T(D, "headerTemplate") ? L.getJSXElement(T(D, "headerTemplate"), We) : /* @__PURE__ */ u.createElement("span", Ne, L.getJSXElement(T(D, "header"), We)), dt = e({
      "aria-hidden": "true",
      className: P("accordiontab.headericon")
    }, I(D, "headericon", ue)), lt = F ? r.collapseIcon || /* @__PURE__ */ u.createElement(ui, dt) : r.expandIcon || /* @__PURE__ */ u.createElement(di, dt), nt = Lt.getJSXIcon(lt, Mn({}, dt), {
      props: r,
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
      id: _e,
      href: "#" + Ae,
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
      "aria-controls": Ae,
      "aria-expanded": F
    }, I(D, "headeraction", ue));
    return /* @__PURE__ */ u.createElement("div", pt, /* @__PURE__ */ u.createElement("a", Et, nt, xt));
  }, X = function(D, F, ue) {
    var M = Mn(Mn({}, T(D, "style") || {}), T(D, "contentStyle") || {}), _e = l + "_content_" + ue, Ae = l + "_header_" + ue, je = /* @__PURE__ */ u.createRef(), Ne = e({
      id: _e,
      ref: je,
      className: we(T(D, "contentClassName"), T(D, "className"), P("accordiontab.toggleablecontent")),
      style: M,
      role: "region",
      "aria-labelledby": Ae
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
      options: r.transitionOptions
    }, I(D, "transition", ue));
    return /* @__PURE__ */ u.createElement(zo, So({
      nodeRef: je
    }, xt), /* @__PURE__ */ u.createElement("div", Ne, /* @__PURE__ */ u.createElement("div", We, T(D, "children"))));
  }, Y = function(D, F) {
    if (L.isValidChild(D, "AccordionTab")) {
      var ue = l + "_" + F, M = J(F), _e = Q(D, M, F), Ae = X(D, M, F), je = e({
        key: ue,
        className: P("accordiontab.root", {
          selected: M
        })
      }, Kn.getCOtherProps(D), I(D, "root", F));
      return /* @__PURE__ */ u.createElement("div", je, _e, Ae);
    }
    return null;
  }, fe = function() {
    return u.Children.map(r.children, Y);
  }, ve = fe(), ce = e({
    className: we(r.className, P("root")),
    style: r.style
  }, Zr.getOtherProps(r), x("root"));
  return /* @__PURE__ */ u.createElement("div", So({
    id: l,
    ref: m
  }, ce), ve);
});
on.displayName = "AccordionTab";
vn.displayName = "Accordion";
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
function Ir(n) {
  "@babel/helpers - typeof";
  return Ir = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ir(n);
}
function Xu(n, t) {
  if (Ir(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t || "default");
    if (Ir(o) !== "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function Ju(n) {
  var t = Xu(n, "string");
  return Ir(t) === "symbol" ? t : String(t);
}
function Zu(n, t, e) {
  return t = Ju(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function Qu(n) {
  if (Array.isArray(n)) return n;
}
function ed(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var o, r, a, i, l = [], s = !0, c = !1;
    try {
      if (a = (e = e.call(n)).next, t !== 0) for (; !(s = (o = a.call(e)).done) && (l.push(o.value), l.length !== t); s = !0) ;
    } catch (d) {
      c = !0, r = d;
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
function Qi(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, o = new Array(t); e < t; e++) o[e] = n[e];
  return o;
}
function td(n, t) {
  if (n) {
    if (typeof n == "string") return Qi(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Qi(n, t);
  }
}
function nd() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rd(n, t) {
  return Qu(n) || ed(n, t) || td(n, t) || nd();
}
var od = {
  root: function(t) {
    var e = t.props;
    return we("", e.className);
  },
  toolbar: "",
  content: ""
}, ad = `
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
`, Qr = $e.extend({
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
    classes: od,
    styles: ad
  }
});
function el(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function tl(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? el(Object(e), !0).forEach(function(o) {
      Zu(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : el(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
var id = function() {
  try {
    return Quill;
  } catch {
    return null;
  }
}(), ss = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Ft(), o = u.useContext(yt), r = Qr.getProps(n, o), a = Qr.setMetaData({
    props: r
  }), i = a.ptm, l = a.cx, s = a.isUnstyled;
  Jt(Qr.css.styles, s, {
    name: "editor"
  });
  var c = u.useRef(null), d = u.useRef(null), f = u.useRef(null), v = u.useRef(null), m = u.useRef(!1), C = u.useState(!1), g = rd(C, 2), O = g[0], w = g[1];
  Xt(function() {
    if (!m.current) {
      var R = {
        modules: tl({
          toolbar: r.showHeader ? f.current : !1
        }, r.modules),
        placeholder: r.placeholder,
        readOnly: r.readOnly,
        theme: r.theme,
        formats: r.formats
      };
      id ? b(new Quill(d.current, R)) : import("quill").then(function(ne) {
        if (ne && N.isExist(d.current)) {
          var B;
          ne.default ? B = new ne.default(d.current, R) : B = new ne(d.current, R), b(B);
        }
      }), m.current = !0;
    }
  });
  var x = function(ne, B, re) {
    var ae = d.current.children[0], he = ae ? ae.innerHTML : null, Se = v.current.getText();
    if (he === "<p><br></p>" && (he = null), re === "api") {
      var pe = d.current.children[0], Z = document.createElement("div");
      if (Z.innerHTML = r.value || "", N.isEqualElement(pe, Z))
        return;
    }
    if (r.maxLength) {
      var _ = v.current.getLength();
      _ > r.maxLength && v.current.deleteText(r.maxLength, _);
    }
    r.onTextChange && r.onTextChange({
      htmlValue: he,
      textValue: Se,
      delta: ne,
      source: re
    });
  }, S = function(ne, B, re) {
    r.onSelectionChange && r.onSelectionChange({
      range: ne,
      oldRange: B,
      source: re
    });
  }, P = Xe(r.value);
  P.current = r.value;
  var b = function(ne) {
    v.current = ne, P.current && ne.setContents(ne.clipboard.convert({
      html: P.current,
      text: ""
    })), w(!0);
  };
  tt(function() {
    if (O)
      return v.current.on("text-change", x), v.current.on("selection-change", S), function() {
        v.current.off("text-change", x), v.current.off("selection-change", S);
      };
  }), tt(function() {
    O && v.current && v.current.getModule("toolbar") && r.onLoad && r.onLoad(v.current);
  }, [O]), tt(function() {
    v.current && !v.current.hasFocus() && (r.value ? v.current.setContents(v.current.clipboard.convert({
      html: r.value,
      text: ""
    })) : v.current.setText(""));
  }, [r.value]), u.useImperativeHandle(t, function() {
    return {
      props: r,
      getQuill: function() {
        return v.current;
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
    if (r.showHeader === !1)
      return null;
    if (r.headerTemplate)
      return /* @__PURE__ */ u.createElement("div", ne, r.headerTemplate);
    var B = function(he, Se) {
      return e(he && tl({}, he), i(Se));
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
    style: r.style
  }, i("content")), $ = /* @__PURE__ */ u.createElement("div", U), j = e({
    className: we(r.className, l("root"))
  }, Qr.getOtherProps(r), i("root"));
  return /* @__PURE__ */ u.createElement("div", Ra({
    id: r.id,
    ref: c
  }, j), I, $);
}));
ss.displayName = "Editor";
function ka(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, o = new Array(t); e < t; e++) o[e] = n[e];
  return o;
}
function ld(n) {
  if (Array.isArray(n)) return ka(n);
}
function sd(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function cd(n, t) {
  if (n) {
    if (typeof n == "string") return ka(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return ka(n, t);
  }
}
function ud() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function dd(n) {
  return ld(n) || sd(n) || cd(n) || ud();
}
var Wn = {
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
    return Wn.DEFAULT_MASKS[t] ? Wn.DEFAULT_MASKS[t] : t;
  },
  onBeforeInput: function(t, e, o) {
    o || !N.isAndroid() || this.validateKey(t, t.data, e);
  },
  onKeyPress: function(t, e, o) {
    o || N.isAndroid() || t.ctrlKey || t.altKey || t.metaKey || this.validateKey(t, t.key, e);
  },
  onPaste: function(t, e, o) {
    if (!o) {
      var r = this.getRegex(e), a = t.clipboardData.getData("text");
      dd(a).forEach(function(i) {
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
function fd(n) {
  if (Array.isArray(n)) return n;
}
function pd(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var o, r, a, i, l = [], s = !0, c = !1;
    try {
      if (a = (e = e.call(n)).next, t !== 0) for (; !(s = (o = a.call(e)).done) && (l.push(o.value), l.length !== t); s = !0) ;
    } catch (d) {
      c = !0, r = d;
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
function nl(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, o = new Array(t); e < t; e++) o[e] = n[e];
  return o;
}
function vd(n, t) {
  if (n) {
    if (typeof n == "string") return nl(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return nl(n, t);
  }
}
function md() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gd(n, t) {
  return fd(n) || pd(n, t) || vd(n, t) || md();
}
var Da = {
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
    return L.getMergedProps(t, Da.defaultProps);
  },
  getOtherProps: function(t) {
    return L.getDiffProps(t, Da.defaultProps);
  }
}, Br = /* @__PURE__ */ u.memo(function(n) {
  var t = Da.getProps(n), e = u.useContext(yt), o = u.useState(t.visible && N.isClient()), r = gd(o, 2), a = r[0], i = r[1];
  Xt(function() {
    N.isClient() && !a && (i(!0), t.onMounted && t.onMounted());
  }), tt(function() {
    t.onMounted && t.onMounted();
  }, [a]), ln(function() {
    t.onUnmounted && t.onUnmounted();
  });
  var l = t.element || t.children;
  if (l && a) {
    var s = t.appendTo || e && e.appendTo || bt.appendTo;
    return L.isFunction(s) && (s = s()), s || (s = document.body), s === "self" ? l : /* @__PURE__ */ gr.createPortal(l, s);
  }
  return null;
});
Br.displayName = "Portal";
function Co() {
  return Co = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, Co.apply(this, arguments);
}
function _r(n) {
  "@babel/helpers - typeof";
  return _r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _r(n);
}
function hd(n, t) {
  if (_r(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t || "default");
    if (_r(o) !== "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function bd(n) {
  var t = hd(n, "string");
  return _r(t) === "symbol" ? t : String(t);
}
function cs(n, t, e) {
  return t = bd(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function ja(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, o = new Array(t); e < t; e++) o[e] = n[e];
  return o;
}
function yd(n) {
  if (Array.isArray(n)) return ja(n);
}
function wd(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function us(n, t) {
  if (n) {
    if (typeof n == "string") return ja(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return ja(n, t);
  }
}
function xd() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ed(n) {
  return yd(n) || wd(n) || us(n) || xd();
}
function Sd(n) {
  if (Array.isArray(n)) return n;
}
function Cd(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var o, r, a, i, l = [], s = !0, c = !1;
    try {
      if (a = (e = e.call(n)).next, t !== 0) for (; !(s = (o = a.call(e)).done) && (l.push(o.value), l.length !== t); s = !0) ;
    } catch (d) {
      c = !0, r = d;
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
function Od() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fr(n, t) {
  return Sd(n) || Cd(n, t) || us(n, t) || Od();
}
var Pd = {
  root: function(t) {
    var e = t.positionState, o = t.classNameState;
    return we("p-tooltip p-component", cs({}, "p-tooltip-".concat(e), !0), o);
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
}, Td = `
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
`, eo = $e.extend({
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
    classes: Pd,
    styles: Td,
    inlineStyles: qd
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
function Id(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rl(Object(e), !0).forEach(function(o) {
      cs(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : rl(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
var Wr = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Ft(), o = u.useContext(yt), r = eo.getProps(n, o), a = u.useState(!1), i = fr(a, 2), l = i[0], s = i[1], c = u.useState(r.position || "right"), d = fr(c, 2), f = d[0], v = d[1], m = u.useState(""), C = fr(m, 2), g = C[0], O = C[1], w = {
    props: r,
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
  }, x = eo.setMetaData(w), S = x.ptm, P = x.cx, b = x.sx, T = x.isUnstyled;
  Jt(eo.css.styles, T, {
    name: "tooltip"
  }), Jl({
    callback: function() {
      Ne();
    },
    when: r.closeOnEscape,
    priority: [Gl.TOOLTIP, 0]
  });
  var I = u.useRef(null), U = u.useRef(null), $ = u.useRef(null), j = u.useRef(null), R = u.useRef(!0), ne = u.useRef({}), B = u.useRef(null), re = li({
    listener: function(z) {
      !N.isTouchDevice() && Ne(z);
    }
  }), ae = fr(re, 2), he = ae[0], Se = ae[1], pe = Zl({
    target: $.current,
    listener: function(z) {
      Ne(z);
    },
    when: l
  }), Z = fr(pe, 2), _ = Z[0], J = Z[1], Q = function(z) {
    return !(r.content || K(z, "tooltip"));
  }, X = function(z) {
    return !(r.content || K(z, "tooltip") || r.children);
  }, Y = function(z) {
    return K(z, "mousetrack") || r.mouseTrack;
  }, fe = function(z) {
    return K(z, "disabled") === "true" || D(z, "disabled") || r.disabled;
  }, ve = function(z) {
    return K(z, "showondisabled") || r.showOnDisabled;
  }, ce = function() {
    return K($.current, "autohide") || r.autoHide;
  }, K = function(z, ge) {
    return D(z, "data-pr-".concat(ge)) ? z.getAttribute("data-pr-".concat(ge)) : null;
  }, D = function(z, ge) {
    return z && z.hasAttribute(ge);
  }, F = function(z) {
    var ge = [K(z, "showevent") || r.showEvent], Re = [K(z, "hideevent") || r.hideEvent];
    if (Y(z))
      ge = ["mousemove"], Re = ["mouseleave"];
    else {
      var Pe = K(z, "event") || r.event;
      Pe === "focus" && (ge = ["focus"], Re = ["blur"]), Pe === "both" && (ge = ["focus", "mouseenter"], Re = ["blur", "mouseleave"]);
    }
    return {
      showEvents: ge,
      hideEvents: Re
    };
  }, ue = function(z) {
    return K(z, "position") || f;
  }, M = function(z) {
    var ge = K(z, "mousetracktop") || r.mouseTrackTop, Re = K(z, "mousetrackleft") || r.mouseTrackLeft;
    return {
      top: ge,
      left: Re
    };
  }, _e = function(z, ge) {
    if (U.current) {
      var Re = K(z, "tooltip") || r.content;
      Re ? (U.current.innerHTML = "", U.current.appendChild(document.createTextNode(Re)), ge()) : r.children && ge();
    }
  }, Ae = function(z) {
    _e($.current, function() {
      var ge = B.current, Re = ge.pageX, Pe = ge.pageY;
      r.autoZIndex && !en.get(I.current) && en.set("tooltip", I.current, o && o.autoZIndex || bt.autoZIndex, r.baseZIndex || o && o.zIndex.tooltip || bt.zIndex.tooltip), I.current.style.left = "", I.current.style.top = "", ce() && (I.current.style.pointerEvents = "none");
      var qe = Y($.current) || z === "mouse";
      (qe && !j.current || qe) && (j.current = {
        width: N.getOuterWidth(I.current),
        height: N.getOuterHeight(I.current)
      }), We($.current, {
        x: Re,
        y: Pe
      }, z);
    });
  }, je = function(z) {
    $.current = z.currentTarget;
    var ge = fe($.current), Re = X(ve($.current) && ge ? $.current.firstChild : $.current);
    if (!(Re || ge))
      if (B.current = z, l)
        Et("updateDelay", Ae);
      else {
        var Pe = rt(r.onBeforeShow, {
          originalEvent: z,
          target: $.current
        });
        Pe && Et("showDelay", function() {
          s(!0), rt(r.onShow, {
            originalEvent: z,
            target: $.current
          });
        });
      }
  }, Ne = function(z) {
    if (Je(), l) {
      var ge = rt(r.onBeforeHide, {
        originalEvent: z,
        target: $.current
      });
      ge && Et("hideDelay", function() {
        !ce() && R.current === !1 || (en.clear(I.current), N.removeClass(I.current, "p-tooltip-active"), s(!1), rt(r.onHide, {
          originalEvent: z,
          target: $.current
        }));
      });
    }
  }, We = function(z, ge, Re) {
    var Pe = 0, qe = 0, Ve = Re || f;
    if ((Y(z) || Ve == "mouse") && ge) {
      var ut = {
        width: N.getOuterWidth(I.current),
        height: N.getOuterHeight(I.current)
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
      Pe <= 0 || j.current.width > ut.width ? (I.current.style.left = "0px", I.current.style.right = window.innerWidth - ut.width - Pe + "px") : (I.current.style.right = "", I.current.style.left = Pe + "px"), I.current.style.top = qe + "px", N.addClass(I.current, "p-tooltip-active");
    } else {
      var at = N.findCollisionPosition(Ve), it = K(z, "my") || r.my || at.my, be = K(z, "at") || r.at || at.at;
      I.current.style.padding = "0px", N.flipfitCollision(I.current, z, it, be, function(A) {
        var G = A.at, ee = G.x, ye = G.y, Be = A.my.x, Qe = r.at ? ee !== "center" && ee !== Be ? ee : ye : A.at["".concat(at.axis)];
        I.current.style.padding = "", v(Qe), xt(Qe), N.addClass(I.current, "p-tooltip-active");
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
    ce() || (R.current = !0, Ne(z));
  }, nt = function(z) {
    if (z) {
      var ge = F(z), Re = ge.showEvents, Pe = ge.hideEvents, qe = Mt(z);
      Re.forEach(function(Ve) {
        return qe == null ? void 0 : qe.addEventListener(Ve, je);
      }), Pe.forEach(function(Ve) {
        return qe == null ? void 0 : qe.addEventListener(Ve, Ne);
      });
    }
  }, pt = function(z) {
    if (z) {
      var ge = F(z), Re = ge.showEvents, Pe = ge.hideEvents, qe = Mt(z);
      Re.forEach(function(Ve) {
        return qe == null ? void 0 : qe.removeEventListener(Ve, je);
      }), Pe.forEach(function(Ve) {
        return qe == null ? void 0 : qe.removeEventListener(Ve, Ne);
      });
    }
  }, Et = function(z, ge) {
    Je();
    var Re = K($.current, z.toLowerCase()) || r[z];
    Re ? ne.current["".concat(z)] = setTimeout(function() {
      return ge();
    }, Re) : ge();
  }, rt = function(z) {
    if (z) {
      for (var ge = arguments.length, Re = new Array(ge > 1 ? ge - 1 : 0), Pe = 1; Pe < ge; Pe++)
        Re[Pe - 1] = arguments[Pe];
      var qe = z.apply(void 0, Re);
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
          var ge = document.createElement("div"), Re = z.nodeName === "INPUT";
          return Re ? N.addMultipleClasses(ge, "p-tooltip-target-wrapper p-inputwrapper") : N.addClass(ge, "p-tooltip-target-wrapper"), z.parentNode.insertBefore(ge, z), ge.appendChild(z), z.hasWrapper = !0, ge;
        }
        return z.parentElement;
      } else if (z.hasWrapper) {
        var Pe;
        (Pe = z.parentElement).replaceWith.apply(Pe, Ed(z.parentElement.childNodes)), delete z.hasWrapper;
      }
      return z;
    }
    return null;
  }, Ge = function(z) {
    ct(z), ot(z);
  }, ot = function(z) {
    kt(z || r.target, nt);
  }, ct = function(z) {
    kt(z || r.target, pt);
  }, kt = function(z, ge) {
    if (z = L.getRefElement(z), z)
      if (N.isElement(z))
        ge(z);
      else {
        var Re = function(qe) {
          var Ve = N.find(document, qe);
          Ve.forEach(function(ut) {
            ge(ut);
          });
        };
        z instanceof Array ? z.forEach(function(Pe) {
          Re(Pe);
        }) : Re(z);
      }
  };
  Xt(function() {
    l && $.current && fe($.current) && Ne();
  }), tt(function() {
    return ot(), function() {
      ct();
    };
  }, [je, Ne, r.target]), tt(function() {
    if (l) {
      var Ce = ue($.current), z = K($.current, "classname");
      v(Ce), O(z), Ae(Ce), he(), _();
    } else
      v(r.position || "right"), O(""), $.current = null, j.current = null, R.current = !0;
    return function() {
      Se(), J();
    };
  }, [l]), tt(function() {
    var Ce = ue($.current);
    l && Ce !== "mouse" && Et("updateDelay", function() {
      _e($.current, function() {
        We($.current);
      });
    });
  }, [r.content]), ln(function() {
    Ne(), en.clear(I.current);
  }), u.useImperativeHandle(t, function() {
    return {
      props: r,
      updateTargetEvents: Ge,
      loadTargetEvents: ot,
      unloadTargetEvents: ct,
      show: je,
      hide: Ne,
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
      id: r.id,
      className: we(r.className, P("root", {
        positionState: f,
        classNameState: g
      })),
      style: r.style,
      role: "tooltip",
      "aria-hidden": l,
      onMouseEnter: function(Ve) {
        return dt();
      },
      onMouseLeave: function(Ve) {
        return lt(Ve);
      }
    }, eo.getOtherProps(r), S("root")), Re = e({
      className: P("arrow"),
      style: b("arrow", Id({}, w))
    }, S("arrow")), Pe = e({
      className: P("text")
    }, S("text"));
    return /* @__PURE__ */ u.createElement("div", Co({
      ref: I
    }, ge), /* @__PURE__ */ u.createElement("div", Re), /* @__PURE__ */ u.createElement("div", Co({
      ref: U
    }, Pe), z && r.children));
  };
  if (l) {
    var vt = ft();
    return /* @__PURE__ */ u.createElement(Br, {
      element: vt,
      appendTo: r.appendTo,
      visible: !0
    });
  }
  return null;
}));
Wr.displayName = "Tooltip";
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
function Rr(n) {
  "@babel/helpers - typeof";
  return Rr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Rr(n);
}
function _d(n, t) {
  if (Rr(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t || "default");
    if (Rr(o) !== "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function Rd(n) {
  var t = _d(n, "string");
  return Rr(t) === "symbol" ? t : String(t);
}
function kd(n, t, e) {
  return t = Rd(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
var Dd = {
  root: function(t) {
    var e = t.props, o = t.isFilled, r = t.context;
    return we("p-inputtext p-component", {
      "p-disabled": e.disabled,
      "p-filled": o,
      "p-invalid": e.invalid,
      "p-variant-filled": e.variant ? e.variant === "filled" : r && r.inputStyle === "filled"
    });
  }
}, to = $e.extend({
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
    classes: Dd
  }
});
function ol(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function al(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ol(Object(e), !0).forEach(function(o) {
      kd(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : ol(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
var Dt = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Ft(), o = u.useContext(yt), r = to.getProps(n, o), a = to.setMetaData(al(al({
    props: r
  }, r.__parentMetadata), {}, {
    context: {
      disabled: r.disabled,
      iconPosition: r.iconPosition
    }
  })), i = a.ptm, l = a.cx, s = a.isUnstyled;
  Jt(to.css.styles, s, {
    name: "inputtext",
    styled: !0
  });
  var c = u.useRef(t), d = function(x) {
    r.onKeyDown && r.onKeyDown(x), r.keyfilter && Wn.onKeyPress(x, r.keyfilter, r.validateOnly);
  }, f = function(x) {
    r.onBeforeInput && r.onBeforeInput(x), r.keyfilter && Wn.onBeforeInput(x, r.keyfilter, r.validateOnly);
  }, v = function(x) {
    var S = x.target, P = !0;
    r.keyfilter && r.validateOnly && (P = Wn.validate(x, r.keyfilter)), r.onInput && r.onInput(x, P), L.isNotEmpty(S.value) ? N.addClass(S, "p-filled") : N.removeClass(S, "p-filled");
  }, m = function(x) {
    r.onPaste && r.onPaste(x), r.keyfilter && Wn.onPaste(x, r.keyfilter, r.validateOnly);
  };
  u.useEffect(function() {
    L.combinedRefs(c, t);
  }, [c, t]);
  var C = u.useMemo(function() {
    return L.isNotEmpty(r.value) || L.isNotEmpty(r.defaultValue);
  }, [r.value, r.defaultValue]), g = L.isNotEmpty(r.tooltip), O = e({
    className: we(r.className, l("root", {
      context: o,
      isFilled: C
    })),
    onBeforeInput: f,
    onInput: v,
    onKeyDown: d,
    onPaste: m
  }, to.getOtherProps(r), i("root"));
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement("input", Oo({
    ref: c
  }, O)), g && /* @__PURE__ */ u.createElement(Wr, Oo({
    target: c,
    content: r.tooltip,
    pt: i("tooltip")
  }, r.tooltipOptions)));
}));
Dt.displayName = "InputText";
const jd = ({ item: n, onChange: t, config: e }) => {
  const [o, r] = Le({ ...Xn, ...n }), a = (l) => {
    const s = { ...o, [l.target.name]: l.target.value };
    r(s), t(s);
  }, i = (l) => {
    const s = { ...o, value: l };
    r(s), t(s);
  };
  return Ie(() => {
    r({ ...Xn, ...n });
  }, [n]), /* @__PURE__ */ y.jsx(y.Fragment, { children: /* @__PURE__ */ y.jsx(vn, { activeIndex: 0, children: /* @__PURE__ */ y.jsx(on, { header: "General", children: /* @__PURE__ */ y.jsxs("div", { className: "form-item flex flex-column gap-4", children: [
    /* @__PURE__ */ y.jsxs("div", { className: "flex flex-column gap-2", children: [
      /* @__PURE__ */ y.jsx("label", { htmlFor: "label", children: "Label" }),
      /* @__PURE__ */ y.jsx(
        Dt,
        {
          id: "label",
          value: o.label || "",
          name: "label",
          onChange: a,
          className: "w-full"
        }
      )
    ] }),
    /* @__PURE__ */ y.jsx(
      ss,
      {
        value: o.value,
        name: "value",
        onTextChange: (l) => i(l.htmlValue ?? ""),
        style: { minHeight: "300px" }
      }
    )
  ] }) }, "general") }) });
}, Nd = (n) => ({}), Ad = new er({
  type: Xn.type,
  form: new Yt({
    render: _c,
    validation: Rc
  }),
  settings: new Yt({
    render: jd,
    validation: Nd
  }),
  heading: "HTML Content",
  description: "WYSIWYG editor for adding in content to the form",
  hidden: !1,
  icon: kc,
  data: Xn
}), ds = new Ao(new No({ label: "Content" }));
ds.registerItem(Ad);
const Rn = {
  id: Cn(),
  type: "input-number",
  label: "",
  value: "",
  placeholder: ""
}, Ld = ({ item: n, onChange: t, config: e }) => {
  const [o, r] = Le({ ...Rn, ...n });
  Ie(() => {
    r({ ...Rn, ...n });
  }, [n]);
  const a = (l) => {
    const s = { ...Rn, ...n, value: l.target.value };
    t(s);
  }, i = Math.random().toString(36).substring(2, 15);
  return /* @__PURE__ */ y.jsx(y.Fragment, { children: /* @__PURE__ */ y.jsxs("div", { className: "flex flex-column gap-2", children: [
    /* @__PURE__ */ y.jsx("label", { htmlFor: i, children: o.label }),
    /* @__PURE__ */ y.jsx(
      Dt,
      {
        type: "number",
        value: o.value,
        onChange: a,
        placeholder: o.placeholder || "",
        className: "w-full",
        id: i
      }
    )
  ] }) });
}, $d = (n) => ({});
var il;
function Na() {
  return Na = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e) ({}).hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, Na.apply(null, arguments);
}
var Fd = function(t) {
  return /* @__PURE__ */ u.createElement("svg", Na({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 320 512"
  }, t), il || (il = /* @__PURE__ */ u.createElement("path", {
    d: "M0 64c0-17.7 14.3-32 32-32h256c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-224 384c-8.9 15.3-28.5 20.4-43.8 11.5s-20.4-28.5-11.5-43.8L232.3 96H32C14.3 96 0 81.7 0 64"
  })));
};
const Md = ({ item: n, onChange: t, config: e }) => {
  const [o, r] = Le({ ...Rn, ...n }), a = (i) => {
    const l = { ...o, [i.target.name]: i.target.value };
    r(l), t(l);
  };
  return Ie(() => {
    r({ ...Rn, ...n });
  }, [n]), /* @__PURE__ */ y.jsx(y.Fragment, { children: /* @__PURE__ */ y.jsxs(vn, { activeIndex: 0, children: [
    " ",
    /* @__PURE__ */ y.jsx(on, { header: "General", children: /* @__PURE__ */ y.jsxs("div", { className: "form-item flex flex-column gap-4", children: [
      /* @__PURE__ */ y.jsxs("div", { className: "flex flex-column gap-2", children: [
        /* @__PURE__ */ y.jsx("label", { htmlFor: "label", children: "Label" }),
        /* @__PURE__ */ y.jsx(
          Dt,
          {
            id: "label",
            value: o.label || "",
            name: "label",
            onChange: a,
            className: "w-full"
          }
        )
      ] }),
      /* @__PURE__ */ y.jsxs("div", { className: "flex flex-column gap-2", children: [
        /* @__PURE__ */ y.jsx("label", { htmlFor: "placeholder", children: "Placeholder" }),
        /* @__PURE__ */ y.jsx(
          Dt,
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
}, zd = (n) => ({}), Hd = new er({
  type: Rn.type,
  form: new Yt({
    render: Ld,
    validation: $d
  }),
  settings: new Yt({
    render: Md,
    validation: zd
  }),
  heading: "Number input",
  description: "a simple box to insert a number value into",
  hidden: !1,
  icon: Fd,
  data: Rn
}), En = {
  id: Cn(),
  type: "input-select",
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
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, Aa.apply(this, arguments);
}
var fs = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
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
fs.displayName = "ChevronUpIcon";
function La() {
  return La = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, La.apply(this, arguments);
}
var Ho = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Vt.getPTI(n);
  return /* @__PURE__ */ u.createElement("svg", La({
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
Ho.displayName = "SpinnerIcon";
function $a() {
  return $a = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, $a.apply(this, arguments);
}
var Vr = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Vt.getPTI(n);
  return /* @__PURE__ */ u.createElement("svg", $a({
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
Vr.displayName = "TimesIcon";
var kn = Hc();
function Fa() {
  return Fa = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, Fa.apply(this, arguments);
}
var ps = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Vt.getPTI(n);
  return /* @__PURE__ */ u.createElement("svg", Fa({
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
ps.displayName = "SearchIcon";
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
function kr(n) {
  "@babel/helpers - typeof";
  return kr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, kr(n);
}
function Bd(n, t) {
  if (kr(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t || "default");
    if (kr(o) !== "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function Wd(n) {
  var t = Bd(n, "string");
  return kr(t) === "symbol" ? t : String(t);
}
function vs(n, t, e) {
  return t = Wd(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function Vd(n) {
  if (Array.isArray(n)) return n;
}
function Kd(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var o, r, a, i, l = [], s = !0, c = !1;
    try {
      if (a = (e = e.call(n)).next, t === 0) {
        if (Object(e) !== e) return;
        s = !1;
      } else for (; !(s = (o = a.call(e)).done) && (l.push(o.value), l.length !== t); s = !0) ;
    } catch (d) {
      c = !0, r = d;
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
function Ud(n, t) {
  if (n) {
    if (typeof n == "string") return ll(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return ll(n, t);
  }
}
function Yd() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function un(n, t) {
  return Vd(n) || Kd(n, t) || Ud(n, t) || Yd();
}
var Gd = `
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
`, no = $e.extend({
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
    styles: Gd
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
function zn(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sl(Object(e), !0).forEach(function(o) {
      vs(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : sl(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
var ms = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Ft(), o = u.useContext(yt), r = no.getProps(n, o), a = Or(n) || {}, i = r.orientation === "vertical", l = r.orientation === "horizontal", s = r.orientation === "both", c = u.useState(s ? {
    rows: 0,
    cols: 0
  } : 0), d = un(c, 2), f = d[0], v = d[1], m = u.useState(s ? {
    rows: 0,
    cols: 0
  } : 0), C = un(m, 2), g = C[0], O = C[1], w = u.useState(0), x = un(w, 2), S = x[0], P = x[1], b = u.useState(s ? {
    rows: 0,
    cols: 0
  } : 0), T = un(b, 2), I = T[0], U = T[1], $ = u.useState(r.numToleratedItems), j = un($, 2), R = j[0], ne = j[1], B = u.useState(r.loading || !1), re = un(B, 2), ae = re[0], he = re[1], Se = u.useState([]), pe = un(Se, 2), Z = pe[0], _ = pe[1], J = no.setMetaData({
    props: r,
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
  _n(no.css.styles, {
    name: "virtualscroller"
  });
  var X = u.useRef(null), Y = u.useRef(null), fe = u.useRef(null), ve = u.useRef(null), ce = u.useRef(s ? {
    top: 0,
    left: 0
  } : 0), K = u.useRef(null), D = u.useRef(null), F = u.useRef({}), ue = u.useRef({}), M = u.useRef(null), _e = u.useRef(null), Ae = u.useRef(null), je = u.useRef(null), Ne = u.useRef(!1), We = u.useRef(null), xt = li({
    listener: function(q) {
      return it();
    },
    when: !r.disabled
  }), dt = un(xt, 1), lt = dt[0], nt = wn({
    target: "window",
    type: "orientationchange",
    listener: function(q) {
      return it();
    },
    when: !r.disabled
  }), pt = un(nt, 1), Et = pt[0], rt = function() {
    return X;
  }, Je = function(q) {
    return Math.floor((q + R * 4) / (r.step || 1));
  }, Mt = function(q) {
    Y.current = q || Y.current || N.findSingle(X.current, ".p-virtualscroller-content");
  }, Ge = function(q) {
    return r.step ? S !== Je(q) : !0;
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
    }, De(me(Oe.cols, r.itemSize[1], ie.left), me(Oe.rows, r.itemSize[0], ie.top)), Ye = f.rows !== Oe.rows || f.cols !== Oe.cols) : (Oe = oe(q, te), l ? De(me(Oe, r.itemSize, ie.left), 0) : De(0, me(Oe, r.itemSize, ie.top)), Ye = f !== Oe), Ne.current = Ye, v(Oe);
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
          oe.first.rows - ie.rows > q[0] ? me(oe.first.cols * r.itemSize[1], (oe.first.rows - 1) * r.itemSize[0]) : oe.first.cols - ie.cols > q[1] && me((oe.first.cols - 1) * r.itemSize[1], oe.first.rows * r.itemSize[0]);
        else if (oe.first - ie > q) {
          var Ye = (oe.first - 1) * r.itemSize;
          l ? me(Ye, 0) : me(0, Ye);
        }
      } else if (Oe) {
        if (s)
          oe.last.rows - ie.rows <= q[0] + 1 ? me(oe.first.cols * r.itemSize[1], (oe.first.rows + 1) * r.itemSize[0]) : oe.last.cols - ie.cols <= q[1] + 1 && me((oe.first.cols + 1) * r.itemSize[1], oe.first.rows * r.itemSize[0]);
        else if (oe.last - ie <= q + 1) {
          var mt = (oe.first + 1) * r.itemSize;
          l ? me(mt, 0) : me(0, mt);
        }
      }
    } else
      ct(q, W);
  }, ft = function() {
    return ae ? r.loaderDisabled ? Z : [] : G();
  }, vt = function() {
    return r.columns && s || l ? ae && r.loaderDisabled ? s ? Z[0] : Z : r.columns.slice(s ? f.cols : f, s ? g.cols : g) : r.columns;
  }, Ce = function() {
    var q = function(Oe, Ye) {
      return Math.floor(Oe / (Ye || Oe));
    }, k = f, W = 0;
    if (X.current) {
      var te = X.current, ie = te.scrollTop, oe = te.scrollLeft;
      if (s)
        k = {
          rows: q(ie, r.itemSize[0]),
          cols: q(oe, r.itemSize[1])
        }, W = {
          rows: k.rows + I.rows,
          cols: k.cols + I.cols
        };
      else {
        var me = l ? oe : ie;
        k = q(me, r.itemSize), W = k + I;
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
      rows: te(W, r.itemSize[0]),
      cols: te(k, r.itemSize[1])
    } : te(l ? k : W, r.itemSize), me = R || (s ? [ie(oe.rows), ie(oe.cols)] : ie(oe));
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
    U(k), ne(W), O(ie), r.showLoader && _(s ? Array.from({
      length: k.rows
    }).map(function() {
      return Array.from({
        length: k.cols
      });
    }) : Array.from({
      length: k
    })), r.lazy && Promise.resolve().then(function() {
      We.current = {
        first: r.step ? s ? {
          rows: 0,
          cols: f.cols
        } : 0 : f,
        last: Math.min(r.step ? r.step : ie, (r.items || []).length)
      }, r.onLazyLoad && r.onLazyLoad(We.current);
    });
  }, Re = function(q) {
    r.autoSize && !q && Promise.resolve().then(function() {
      if (Y.current) {
        Y.current.style.minHeight = Y.current.style.minWidth = "auto", Y.current.style.position = "relative", X.current.style.contain = "none";
        var k = [N.getWidth(X.current), N.getHeight(X.current)], W = k[0], te = k[1];
        (s || l) && (X.current.style.width = (W < M.current ? W : r.scrollWidth || M.current) + "px"), (s || i) && (X.current.style.height = (te < _e.current ? te : r.scrollHeight || _e.current) + "px"), Y.current.style.minHeight = Y.current.style.minWidth = "", Y.current.style.position = "", X.current.style.contain = "";
      }
    });
  }, Pe = function() {
    var q, k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, W = arguments.length > 1 ? arguments[1] : void 0;
    return r.items ? Math.min(W ? ((q = r.columns || r.items[0]) === null || q === void 0 ? void 0 : q.length) || 0 : (r.items || []).length, k) : 0;
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
      var q = X.current.parentElement, k = r.scrollWidth || "".concat(X.current.offsetWidth || q.offsetWidth, "px"), W = r.scrollHeight || "".concat(X.current.offsetHeight || q.offsetHeight, "px"), te = function(oe, me) {
        return X.current.style[oe] = me;
      };
      s || l ? (te("height", W), te("width", k)) : te("height", W);
    }
  }, ut = function() {
    var q = r.items;
    if (q) {
      var k = qe(), W = function(ie, oe, me) {
        var De = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
        return ue.current = zn(zn({}, ue.current), vs({}, "".concat(ie), (oe || []).length * me + De + "px"));
      };
      s ? (W("height", q, r.itemSize[0], k.y), W("width", r.columns || q[1], r.itemSize[1], k.x)) : l ? W("width", r.columns || q, r.itemSize, k.x) : W("height", q, r.itemSize, k.y);
    }
  }, Fe = function(q) {
    if (Y.current && !r.appendOnly) {
      var k = q ? q.first : f, W = function(me, De) {
        return me * De;
      }, te = function() {
        var me = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, De = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        ve.current && (ve.current.style.top = "-".concat(De, "px")), F.current = zn(zn({}, F.current), {
          transform: "translate3d(".concat(me, "px, ").concat(De, "px, 0)")
        });
      };
      if (s)
        te(W(k.cols, r.itemSize[1]), W(k.rows, r.itemSize[0]));
      else {
        var ie = W(k, r.itemSize);
        l ? te(ie, 0) : te(0, ie);
      }
    }
  }, Me = function(q) {
    var k = q.target, W = qe(), te = function(Ct, Wt) {
      return Ct ? Ct > Wt ? Ct - Wt : Ct : 0;
    }, ie = function(Ct, Wt) {
      return Math.floor(Ct / (Wt || Ct));
    }, oe = function(Ct, Wt, gn, Ln, Zt, cn) {
      return Ct <= Zt ? Zt : cn ? gn - Ln - Zt : Wt + Zt - 1;
    }, me = function(Ct, Wt, gn, Ln, Zt, cn, On) {
      return Ct <= cn ? 0 : Math.max(0, On ? Ct < Wt ? gn : Ct - cn : Ct > Wt ? gn : Ct - 2 * cn);
    }, De = function(Ct, Wt, gn, Ln, Zt, cn) {
      var On = Wt + Ln + 2 * Zt;
      return Ct >= Zt && (On = On + (Zt + 1)), Pe(On, cn);
    }, Oe = te(k.scrollTop, W.top), Ye = te(k.scrollLeft, W.left), mt = s ? {
      rows: 0,
      cols: 0
    } : 0, st = g, St = !1, gt = ce.current;
    if (s) {
      var or = ce.current.top <= Oe, ar = ce.current.left <= Ye;
      if (!r.appendOnly || r.appendOnly && (or || ar)) {
        var mn = {
          rows: ie(Oe, r.itemSize[0]),
          cols: ie(Ye, r.itemSize[1])
        }, Xr = {
          rows: oe(mn.rows, f.rows, g.rows, I.rows, R[0], or),
          cols: oe(mn.cols, f.cols, g.cols, I.cols, R[1], ar)
        };
        mt = {
          rows: me(mn.rows, Xr.rows, f.rows, g.rows, I.rows, R[0], or),
          cols: me(mn.cols, Xr.cols, f.cols, g.cols, I.cols, R[1], ar)
        }, st = {
          rows: De(mn.rows, mt.rows, g.rows, I.rows, R[0]),
          cols: De(mn.cols, mt.cols, g.cols, I.cols, R[1], !0)
        }, St = mt.rows !== f.rows || st.rows !== g.rows || mt.cols !== f.cols || st.cols !== g.cols || Ne.current, gt = {
          top: Oe,
          left: Ye
        };
      }
    } else {
      var ir = l ? Ye : Oe, lr = ce.current <= ir;
      if (!r.appendOnly || r.appendOnly && lr) {
        var sr = ie(ir, r.itemSize), wt = oe(sr, f, g, I, R, lr);
        mt = me(sr, wt, f, g, I, R, lr), st = De(sr, mt, g, I, R), St = mt !== f || st !== g || Ne.current, gt = ir;
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
      if (Fe(me), v(W), O(te), ce.current = oe, r.onScrollIndexChange && r.onScrollIndexChange(me), r.lazy && Ge(W)) {
        var De = {
          first: r.step ? Math.min(Je(W) * r.step, (r.items || []).length - r.step) : W,
          last: Math.min(r.step ? (Je(W) + 1) * r.step : te, (r.items || []).length)
        }, Oe = !We.current || We.current.first !== De.first || We.current.last !== De.last;
        Oe && r.onLazyLoad && r.onLazyLoad(De), We.current = De;
      }
    }
  }, at = function(q) {
    if (r.onScroll && r.onScroll(q), r.delay) {
      if (K.current && clearTimeout(K.current), Ge(f)) {
        if (!ae && r.showLoader) {
          var k = Me(q), W = k.isRangeChanged, te = W || (r.step ? Ge(f) : !1);
          te && he(!0);
        }
        K.current = setTimeout(function() {
          He(q), ae && r.showLoader && (!r.lazy || r.loading === void 0) && (he(!1), P(Je(f)));
        }, r.delay);
      }
    } else
      He(q);
  }, it = function() {
    D.current && clearTimeout(D.current), D.current = setTimeout(function() {
      if (X.current) {
        var q = [N.getWidth(X.current), N.getHeight(X.current)], k = q[0], W = q[1], te = k !== M.current, ie = W !== _e.current, oe = s ? te || ie : l ? te : i ? ie : !1;
        oe && (ne(r.numToleratedItems), M.current = k, _e.current = W, Ae.current = N.getWidth(Y.current), je.current = N.getHeight(Y.current));
      }
    }, r.resizeDelay);
  }, be = function(q) {
    var k = (r.items || []).length, W = s ? f.rows + q : f + q;
    return {
      index: W,
      count: k,
      first: W === 0,
      last: W === k - 1,
      even: W % 2 === 0,
      odd: W % 2 !== 0,
      props: r
    };
  }, A = function(q, k) {
    var W = Z.length || 0;
    return zn({
      index: q,
      count: W,
      first: q === 0,
      last: q === W - 1,
      even: q % 2 === 0,
      odd: q % 2 !== 0,
      props: r
    }, k);
  }, G = function() {
    var q = r.items;
    return q && !ae ? s ? q.slice(r.appendOnly ? 0 : f.rows, g.rows).map(function(k) {
      return r.columns ? k : k.slice(r.appendOnly ? 0 : f.cols, g.cols);
    }) : l && r.columns ? q : q.slice(r.appendOnly ? 0 : f, g) : [];
  }, ee = function() {
    X.current && N.isVisible(X.current) && (Mt(Y.current), ye(), lt(), Et(), M.current = N.getWidth(X.current), _e.current = N.getHeight(X.current), Ae.current = N.getWidth(Y.current), je.current = N.getHeight(Y.current));
  }, ye = function() {
    r.disabled || (Ve(), ge(), ut());
  };
  Xt(function() {
    ee();
  }), tt(function() {
    ye();
  }, [r.itemSize, r.scrollHeight, r.scrollWidth]), tt(function() {
    r.numToleratedItems !== R && ne(r.numToleratedItems);
  }, [r.numToleratedItems]), tt(function() {
    r.numToleratedItems === R && ye();
  }, [R]), tt(function() {
    var se = a.items !== void 0 && a.items !== null, q = r.items !== void 0 && r.items !== null, k = se ? a.items.length : 0, W = q ? r.items.length : 0, te = k !== W;
    if (s && !te) {
      var ie = se && a.items.length > 0 ? a.items[0].length : 0, oe = q && r.items.length > 0 ? r.items[0].length : 0;
      te = ie !== oe;
    }
    (!se || te) && ye();
    var me = ae;
    r.lazy && a.loading !== r.loading && r.loading !== ae && (he(r.loading), me = r.loading), Re(me);
  }), tt(function() {
    ce.current = s ? {
      top: 0,
      left: 0
    } : 0;
  }, [r.orientation]), u.useImperativeHandle(t, function() {
    return {
      props: r,
      getElementRef: rt,
      scrollTo: ot,
      scrollToIndex: ct,
      scrollInView: kt,
      getRenderedRange: Ce
    };
  });
  var Be = function(q) {
    var k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, W = A(q, k), te = L.getJSXElement(r.loadingTemplate, W);
    return /* @__PURE__ */ u.createElement(u.Fragment, {
      key: q
    }, te);
  }, Qe = function() {
    var q = "p-virtualscroller-loading-icon", k = e({
      className: q
    }, Q("loadingIcon")), W = r.loadingIcon || /* @__PURE__ */ u.createElement(Ho, Ma({}, k, {
      spin: !0
    })), te = Lt.getJSXIcon(W, zn({}, k), {
      props: r
    });
    if (!r.loaderDisabled && r.showLoader && ae) {
      var ie = we("p-virtualscroller-loader", {
        "p-component-overlay": !r.loadingTemplate
      }), oe = te;
      if (r.loadingTemplate)
        oe = Z.map(function(Oe, Ye) {
          return Be(Ye, s && {
            numCols: I.cols
          });
        });
      else if (r.loaderIconTemplate) {
        var me = {
          iconClassName: q,
          element: oe,
          props: r
        };
        oe = L.getJSXElement(r.loaderIconTemplate, me);
      }
      var De = e({
        className: ie
      }, Q("loader"));
      return /* @__PURE__ */ u.createElement("div", De, oe);
    }
    return null;
  }, Pt = function() {
    if (r.showSpacer) {
      var q = e({
        ref: fe,
        style: ue.current,
        className: "p-virtualscroller-spacer"
      }, Q("spacer"));
      return /* @__PURE__ */ u.createElement("div", q);
    }
    return null;
  }, zt = function(q, k) {
    var W = be(k), te = L.getJSXElement(r.itemTemplate, q, W);
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
    if (r.contentTemplate) {
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
        props: r,
        loading: ae,
        getLoaderOptions: function(me, De) {
          return A(me, De);
        },
        loadingTemplate: r.loadingTemplate,
        itemSize: r.itemSize,
        rows: ft(),
        columns: vt(),
        vertical: i,
        horizontal: l,
        both: s
      };
      return L.getJSXElement(r.contentTemplate, ie);
    }
    return te;
  };
  if (r.disabled) {
    var Ht = L.getJSXElement(r.contentTemplate, {
      items: r.items,
      rows: r.items,
      columns: r.columns
    });
    return /* @__PURE__ */ u.createElement(u.Fragment, null, r.children, Ht);
  }
  var p = we("p-virtualscroller", {
    "p-virtualscroller-inline": r.inline,
    "p-virtualscroller-both p-both-scroll": s,
    "p-virtualscroller-horizontal p-horizontal-scroll": l
  }, r.className), E = Qe(), H = Tt(), de = Pt(), xe = e({
    ref: X,
    className: p,
    tabIndex: r.tabIndex,
    style: r.style,
    onScroll: function(q) {
      return at(q);
    }
  }, no.getOtherProps(r), Q("root"));
  return /* @__PURE__ */ u.createElement("div", xe, H, de, E);
}));
ms.displayName = "VirtualScroller";
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
function Dr(n) {
  "@babel/helpers - typeof";
  return Dr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Dr(n);
}
function Xd(n, t) {
  if (Dr(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t || "default");
    if (Dr(o) !== "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function Jd(n) {
  var t = Xd(n, "string");
  return Dr(t) === "symbol" ? t : String(t);
}
function Zd(n, t, e) {
  return t = Jd(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function Qd(n) {
  if (Array.isArray(n)) return n;
}
function ef(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var o, r, a, i, l = [], s = !0, c = !1;
    try {
      if (a = (e = e.call(n)).next, t !== 0) for (; !(s = (o = a.call(e)).done) && (l.push(o.value), l.length !== t); s = !0) ;
    } catch (d) {
      c = !0, r = d;
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
function cl(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, o = new Array(t); e < t; e++) o[e] = n[e];
  return o;
}
function tf(n, t) {
  if (n) {
    if (typeof n == "string") return cl(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return cl(n, t);
  }
}
function nf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rf(n, t) {
  return Qd(n) || ef(n, t) || tf(n, t) || nf();
}
var of = `
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

`, af = {
  root: "p-ink"
}, Vn = $e.extend({
  defaultProps: {
    __TYPE: "Ripple",
    children: void 0
  },
  css: {
    styles: of,
    classes: af
  },
  getProps: function(t) {
    return L.getMergedProps(t, Vn.defaultProps);
  },
  getOtherProps: function(t) {
    return L.getDiffProps(t, Vn.defaultProps);
  }
});
function ul(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function lf(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ul(Object(e), !0).forEach(function(o) {
      Zd(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : ul(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
var Sn = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = u.useState(!1), o = rf(e, 2), r = o[0], a = o[1], i = u.useRef(null), l = u.useRef(null), s = Ft(), c = u.useContext(yt), d = Vn.getProps(n, c), f = c && c.ripple || bt.ripple, v = {
    props: d
  };
  _n(Vn.css.styles, {
    name: "ripple",
    manual: !f
  });
  var m = Vn.setMetaData(lf({}, v)), C = m.ptm, g = m.cx, O = function() {
    return i.current && i.current.parentElement;
  }, w = function() {
    l.current && l.current.addEventListener("pointerdown", S);
  }, x = function() {
    l.current && l.current.removeEventListener("pointerdown", S);
  }, S = function($) {
    var j = N.getOffset(l.current), R = $.pageX - j.left + document.body.scrollTop - N.getWidth(i.current) / 2, ne = $.pageY - j.top + document.body.scrollLeft - N.getHeight(i.current) / 2;
    P(R, ne);
  }, P = function($, j) {
    !i.current || getComputedStyle(i.current, null).display === "none" || (N.removeClass(i.current, "p-ink-active"), T(), i.current.style.top = j + "px", i.current.style.left = $ + "px", N.addClass(i.current, "p-ink-active"));
  }, b = function($) {
    N.removeClass($.currentTarget, "p-ink-active");
  }, T = function() {
    if (i.current && !N.getHeight(i.current) && !N.getWidth(i.current)) {
      var $ = Math.max(N.getOuterWidth(l.current), N.getOuterHeight(l.current));
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
  }), Xt(function() {
    a(!0);
  }), tt(function() {
    r && i.current && (l.current = O(), T(), w());
  }, [r]), tt(function() {
    i.current && !l.current && (l.current = O(), T(), w());
  }), ln(function() {
    i.current && (l.current = null, x());
  }), !f)
    return null;
  var I = s({
    "aria-hidden": !0,
    className: we(g("root"))
  }, Vn.getOtherProps(d), C("root"));
  return /* @__PURE__ */ u.createElement("span", za({
    role: "presentation",
    ref: i
  }, I, {
    onAnimationEnd: b
  }));
}));
Sn.displayName = "Ripple";
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
var gs = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Vt.getPTI(n);
  return /* @__PURE__ */ u.createElement("svg", Ha({
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
gs.displayName = "CheckIcon";
function pn() {
  return pn = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, pn.apply(this, arguments);
}
function Zn(n) {
  "@babel/helpers - typeof";
  return Zn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zn(n);
}
function sf(n, t) {
  if (Zn(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t || "default");
    if (Zn(o) !== "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function cf(n) {
  var t = sf(n, "string");
  return Zn(t) === "symbol" ? t : String(t);
}
function Bo(n, t, e) {
  return t = cf(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function uf(n) {
  if (Array.isArray(n)) return n;
}
function df(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var o, r, a, i, l = [], s = !0, c = !1;
    try {
      if (a = (e = e.call(n)).next, t !== 0) for (; !(s = (o = a.call(e)).done) && (l.push(o.value), l.length !== t); s = !0) ;
    } catch (d) {
      c = !0, r = d;
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
function dl(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, o = new Array(t); e < t; e++) o[e] = n[e];
  return o;
}
function ff(n, t) {
  if (n) {
    if (typeof n == "string") return dl(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return dl(n, t);
  }
}
function pf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pr(n, t) {
  return uf(n) || df(n, t) || ff(n, t) || pf();
}
function fl(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function vf(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fl(Object(e), !0).forEach(function(o) {
      Bo(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : fl(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
var mf = {
  root: function(t) {
    var e = t.props, o = t.focusedState, r = t.overlayVisibleState, a = t.context;
    return we("p-dropdown p-component p-inputwrapper", {
      "p-disabled": e.disabled,
      "p-invalid": e.invalid,
      "p-focus": o,
      "p-variant-filled": e.variant ? e.variant === "filled" : a && a.inputStyle === "filled",
      "p-dropdown-clearable": e.showClear && !e.disabled,
      "p-inputwrapper-filled": L.isNotEmpty(e.value),
      "p-inputwrapper-focus": o || r
    });
  },
  input: function(t) {
    var e = t.props, o = t.label;
    return e.editable ? "p-dropdown-label p-inputtext" : we("p-dropdown-label p-inputtext", {
      "p-placeholder": o === null && e.placeholder,
      "p-dropdown-label-empty": o === null && !e.placeholder
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
    var e = t.props, o = t.context;
    return we("p-dropdown-filter p-inputtext p-component", {
      "p-variant-filled": e.variant ? e.variant === "filled" : o && o.inputStyle === "filled"
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
    var e = t.selected, o = t.disabled, r = t.label, a = t.index, i = t.focusedOptionIndex, l = t.highlightOnSelect;
    return we("p-dropdown-item", {
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
}, gf = `
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
`, hf = {
  wrapper: function(t) {
    var e = t.props;
    return {
      maxHeight: e.scrollHeight || "auto"
    };
  },
  panel: function(t) {
    var e = t.props;
    return vf({}, e.panelStyle);
  }
}, ro = $e.extend({
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
    styles: gf,
    inlineStyles: hf
  }
}), hs = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Vt.getPTI(n);
  return /* @__PURE__ */ u.createElement("svg", pn({
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
hs.displayName = "BlankIcon";
var bs = /* @__PURE__ */ u.memo(function(n) {
  var t = Ft(), e = n.ptm, o = n.cx, r = n.selected, a = n.disabled, i = n.option, l = n.label, s = n.index, c = n.focusedOptionIndex, d = n.ariaSetSize, f = n.checkmark, v = n.highlightOnSelect, m = n.onInputKeyDown, C = function(b) {
    return e(b, {
      context: {
        selected: r,
        disabled: a,
        focused: s === c
      }
    });
  }, g = function(b, T) {
    n.onClick && n.onClick({
      originalEvent: b,
      option: i
    });
  }, O = n.template ? L.getJSXElement(n.template, n.option) : n.label, w = t({
    id: "dropdownItem_".concat(s),
    role: "option",
    key: n.label,
    className: we(i.className, o("item", {
      selected: r,
      disabled: a,
      label: l,
      index: s,
      focusedOptionIndex: c,
      highlightOnSelect: v
    })),
    style: n.style,
    tabIndex: 0,
    onClick: function(b) {
      return g(b);
    },
    onKeyDown: function(b) {
      return m(b);
    },
    onMouseMove: function(b) {
      return n == null ? void 0 : n.onMouseMove(b, s);
    },
    "aria-setsize": d,
    "aria-posinset": s + 1,
    "aria-label": l,
    "aria-selected": r,
    "data-p-highlight": r,
    "data-p-focused": c === s,
    "data-p-disabled": a
  }, C("item")), x = t({
    className: o("itemLabel")
  }, C("itemLabel")), S = function() {
    if (r) {
      var b = t({
        className: o("checkIcon")
      }, C("checkIcon"));
      return /* @__PURE__ */ u.createElement(gs, b);
    }
    var T = t({
      className: o("blankIcon")
    }, C("blankIcon"));
    return /* @__PURE__ */ u.createElement(hs, T);
  };
  return /* @__PURE__ */ u.createElement("li", w, f && S(), /* @__PURE__ */ u.createElement("span", x, O), /* @__PURE__ */ u.createElement(Sn, null));
});
bs.displayName = "DropdownItem";
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
function Qt(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pl(Object(e), !0).forEach(function(o) {
      Bo(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : pl(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
var ys = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Ft(), o = n.ptm, r = n.cx, a = n.sx, i = u.useContext(yt), l = u.useRef(null), s = !(n.visibleOptions && n.visibleOptions.length) && n.hasFilter, c = n.visibleOptions ? n.visibleOptions.length : 0, d = {
    filter: function(j) {
      return C(j);
    },
    reset: function() {
      return n.resetFilter();
    }
  }, f = function(j, R) {
    return o(j, Qt({
      hostName: n.hostName
    }, R));
  }, v = function() {
    n.onEnter(function() {
      if (n.virtualScrollerRef.current) {
        var j = n.getSelectedOptionIndex();
        j !== -1 && setTimeout(function() {
          return n.virtualScrollerRef.current.scrollToIndex(j);
        }, 0);
      }
    });
  }, m = function() {
    n.onEntered(function() {
      n.filter && n.filterInputAutoFocus && N.focus(l.current, !1);
    });
  }, C = function(j) {
    n.onFilterInputChange && n.onFilterInputChange(j);
  }, g = function() {
    if (n.panelFooterTemplate) {
      var j = L.getJSXElement(n.panelFooterTemplate, n, n.onOverlayHide), R = e({
        className: r("footer")
      }, f("footer"));
      return /* @__PURE__ */ u.createElement("div", R, j);
    }
    return null;
  }, O = function(j, R) {
    if (n.focusOnHover) {
      var ne;
      n == null || (ne = n.changeFocusedOptionIndex) === null || ne === void 0 || ne.call(n, j, R);
    }
  }, w = function(j, R) {
    var ne = L.getJSXElement(j, n) || Jn(R ? "emptyFilterMessage" : "emptyMessage"), B = e({
      className: r("emptyMessage")
    }, f("emptyMessage"));
    return /* @__PURE__ */ u.createElement("li", B, ne);
  }, x = function(j, R) {
    var ne = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, B = {
      height: ne.props ? ne.props.itemSize : void 0
    };
    if (B = Qt(Qt({}, B), j.style), j.group && j.optionGroup && n.optionGroupLabel) {
      var re = n.optionGroupLabel, ae = n.optionGroupTemplate ? L.getJSXElement(n.optionGroupTemplate, j, R) : n.getOptionGroupLabel(j), he = R + "_" + n.getOptionGroupRenderKey(j), Se = e({
        className: r("itemGroup", {
          optionGroupLabel: re
        }),
        style: B,
        "data-p-highlight": n.selected
      }, f("itemGroup")), pe = e({
        className: r("itemGroupLabel")
      }, f("itemGroupLabel"));
      return /* @__PURE__ */ u.createElement("li", pn({
        key: he
      }, Se), /* @__PURE__ */ u.createElement("span", pe, ae));
    }
    var Z = n.getOptionRenderKey(j) + "_" + R, _ = n.getOptionLabel(j), J = n.isOptionDisabled(j);
    return /* @__PURE__ */ u.createElement(bs, {
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
      onMouseMove: O,
      ptm: o,
      cx: r,
      checkmark: n.checkmark
    });
  }, S = function() {
    return L.isNotEmpty(n.visibleOptions) ? n.visibleOptions.map(x) : n.hasFilter ? w(n.emptyFilterMessage, !0) : w(n.emptyMessage);
  }, P = function() {
    if (n.showFilterClear && n.filterValue) {
      var j = Jn("clear"), R = e({
        className: r("filterClearIcon"),
        "aria-label": j,
        onClick: function() {
          return n.onFilterClearIconClick(function() {
            return N.focus(l.current);
          });
        }
      }, f("filterClearIcon")), ne = n.filterClearIcon || /* @__PURE__ */ u.createElement(Vr, R), B = Lt.getJSXIcon(ne, Qt({}, R), {
        props: n
      });
      return B;
    }
    return null;
  }, b = function() {
    if (n.filter) {
      var j = P(), R = e({
        className: r("filterIcon")
      }, f("filterIcon")), ne = n.filterIcon || /* @__PURE__ */ u.createElement(ps, R), B = Lt.getJSXIcon(ne, Qt({}, R), {
        props: n
      }), re = e({
        className: r("filterContainer", {
          clearIcon: j
        })
      }, f("filterContainer")), ae = e({
        ref: l,
        type: "text",
        autoComplete: "off",
        className: r("filterInput", {
          context: i
        }),
        placeholder: n.filterPlaceholder,
        onKeyDown: n.onFilterInputKeyDown,
        onChange: function(_) {
          return C(_);
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
          filterInputChange: C,
          filterIconClassName: "p-dropdown-filter-icon",
          clearIcon: j,
          props: n
        };
        he = L.getJSXElement(n.filterTemplate, Se);
      }
      var pe = e({
        className: r("header")
      }, f("header"));
      return /* @__PURE__ */ u.createElement("div", pe, he);
    }
    return null;
  }, T = function() {
    if (n.virtualScrollerOptions) {
      var j = Qt(Qt({}, n.virtualScrollerOptions), {
        style: Qt(Qt({}, n.virtualScrollerOptions.style), {
          height: n.scrollHeight
        }),
        className: we("p-dropdown-items-wrapper", n.virtualScrollerOptions.className),
        items: n.visibleOptions,
        autoSize: !0,
        onLazyLoad: function(ae) {
          return n.virtualScrollerOptions.onLazyLoad(Qt(Qt({}, ae), {
            filter: n.filterValue
          }));
        },
        itemTemplate: function(ae, he) {
          return ae && x(ae, he.index, he);
        },
        contentTemplate: function(ae) {
          var he = n.hasFilter ? n.emptyFilterMessage : n.emptyMessage, Se = s ? w(he) : ae.children, pe = e({
            ref: ae.contentRef,
            style: ae.style,
            className: we(ae.className, r("list", {
              virtualScrollerProps: n.virtualScrollerOptions
            })),
            role: "listbox"
          }, f("list"));
          return /* @__PURE__ */ u.createElement("ul", pe, Se);
        }
      });
      return /* @__PURE__ */ u.createElement(ms, pn({
        ref: n.virtualScrollerRef
      }, j, {
        pt: o("virtualScroller")
      }));
    }
    var R = S(), ne = e({
      className: r("wrapper"),
      style: a("wrapper")
    }, f("wrapper")), B = e({
      className: r("list"),
      role: "listbox"
    }, f("list"));
    return /* @__PURE__ */ u.createElement("div", ne, /* @__PURE__ */ u.createElement("ul", B, R));
  }, I = function() {
    var j = b(), R = T(), ne = g(), B = e({
      className: we(n.panelClassName, r("panel", {
        context: i
      })),
      style: a("panel"),
      onClick: n.onClick
    }, f("panel")), re = e({
      classNames: r("transition"),
      in: n.in,
      timeout: {
        enter: 120,
        exit: 100
      },
      options: n.transitionOptions,
      unmountOnExit: !0,
      onEnter: v,
      onEntered: m,
      onExit: n.onExit,
      onExited: n.onExited
    }, f("transition"));
    return /* @__PURE__ */ u.createElement(zo, pn({
      nodeRef: t
    }, re), /* @__PURE__ */ u.createElement("div", pn({
      ref: t
    }, B), n.firstFocusableElement, j, R, ne, n.lastFocusableElement));
  }, U = I();
  return /* @__PURE__ */ u.createElement(Br, {
    element: U,
    appendTo: n.appendTo
  });
}));
ys.displayName = "DropdownPanel";
function bf(n, t) {
  var e = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (!e) {
    if (Array.isArray(n) || (e = yf(n)) || t) {
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
function yf(n, t) {
  if (n) {
    if (typeof n == "string") return vl(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return vl(n, t);
  }
}
function vl(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, o = new Array(t); e < t; e++) o[e] = n[e];
  return o;
}
function ml(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function dn(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ml(Object(e), !0).forEach(function(o) {
      Bo(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : ml(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
var fi = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Ft(), o = u.useContext(yt), r = ro.getProps(n, o), a = u.useState(""), i = pr(a, 2), l = i[0], s = i[1], c = u.useState(!1), d = pr(c, 2), f = d[0], v = d[1], m = u.useState(-1), C = pr(m, 2), g = C[0], O = C[1], w = u.useState(!1), x = pr(w, 2), S = x[0], P = x[1], b = u.useRef(!1), T = u.useRef(null), I = u.useRef(null), U = u.useRef(null), $ = u.useRef(null), j = u.useRef(r.inputRef), R = u.useRef(r.focusInputRef), ne = u.useRef(null), B = u.useRef(null), re = u.useRef(null), ae = r.virtualScrollerOptions && r.virtualScrollerOptions.lazy, he = L.isNotEmpty(l), Se = r.appendTo || o && o.appendTo || bt.appendTo, pe = ro.setMetaData(dn(dn({
    props: r
  }, r.__parentMetadata), {}, {
    state: {
      filter: l,
      focused: f,
      overlayVisible: S
    }
  })), Z = pe.ptm, _ = pe.cx, J = pe.sx, Q = pe.isUnstyled;
  Jt(ro.css.styles, Q, {
    name: "dropdown"
  });
  var X = iu({
    target: T,
    overlay: I,
    listener: function(h, V) {
      var Ee = V.type, et = V.valid;
      et && (Ee === "outside" ? !ue(h) && E() : E());
    },
    when: S
  }), Y = pr(X, 2), fe = Y[0], ve = Y[1], ce = function(h) {
    return (h || []).reduce(function(V, Ee, et) {
      V.push({
        optionGroup: Ee,
        group: !0,
        index: et,
        code: Ee.code,
        label: Ee.label
      });
      var ht = st(Ee);
      return ht && ht.forEach(function($n) {
        return V.push($n);
      }), V;
    }, []);
  }, K = function() {
    var h = r.optionGroupLabel ? ce(r.options) : r.options;
    if (he && !ae) {
      var V = l.trim().toLocaleLowerCase(r.filterLocale), Ee = r.filterBy ? r.filterBy.split(",") : [r.optionLabel || "label"];
      if (r.optionGroupLabel) {
        var et = [], ht = bf(r.options), $n;
        try {
          for (ht.s(); !($n = ht.n()).done; ) {
            var Ei = $n.value, Qo = ji.filter(st(Ei), Ee, V, r.filterMatchMode, r.filterLocale);
            Qo && Qo.length && et.push(dn(dn({}, Ei), Bo({}, "".concat(r.optionGroupChildren), Qo)));
          }
        } catch (hc) {
          ht.e(hc);
        } finally {
          ht.f();
        }
        return ce(et);
      }
      return ji.filter(h, Ee, V, r.filterMatchMode, r.filterLocale);
    }
    return h;
  }, D = function(h) {
    var V = h.relatedTarget === R.current ? N.getFirstFocusableElement(I.current, ':not([data-p-hidden-focusable="true"])') : R.current;
    N.focus(V);
  }, F = function(h) {
    var V = h.relatedTarget === R.current ? N.getLastFocusableElement(I.current, ':not([data-p-hidden-focusable="true"])') : R.current;
    N.focus(V);
  }, ue = function(h) {
    return N.isAttributeEquals(h.target, "data-pc-section", "clearicon") || N.isAttributeEquals(h.target.parentElement || h.target, "data-pc-section", "filterclearicon");
  }, M = function(h) {
    r.disabled || r.loading || (r.onClick && r.onClick(h), !h.defaultPrevented && (ue(h) || h.target.tagName === "INPUT" || ((!I.current || !(I.current && I.current.contains(h.target))) && (N.focus(R.current), S ? E() : p()), b.current = !0)));
  }, _e = function(h) {
    r.showOnFocus && !S && p(), v(!0), r.onFocus && r.onFocus(h);
  }, Ae = function(h) {
    v(!1), r.onBlur && setTimeout(function() {
      var V = j.current ? j.current.value : void 0;
      r.onBlur({
        originalEvent: h.originalEvent,
        value: V,
        stopPropagation: function() {
          h.originalEvent.stopPropagation();
        },
        preventDefault: function() {
          h.originalEvent.preventDefault();
        },
        target: {
          name: r.name,
          id: r.id,
          value: V
        }
      });
    }, 200);
  }, je = function(h, V) {
    var Ee = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, et = oe(V);
    Pt({
      originalEvent: h,
      option: et
    }), Ee && E();
  }, Ne = function(h) {
    kn.emit("overlay-click", {
      originalEvent: h,
      target: T.current
    });
  }, We = function(h) {
    if (r.disabled) {
      h.preventDefault();
      return;
    }
    var V = h.metaKey || h.ctrlKey, Ee = N.isAndroid() ? h.key : h.code;
    switch (Ee) {
      case "ArrowDown":
        z(h);
        break;
      case "ArrowUp":
        ge(h);
        break;
      case "ArrowLeft":
      case "ArrowRight":
        Re(h, r.editable);
        break;
      case "Home":
        Pe(h);
        break;
      case "End":
        qe(h);
        break;
      case "PageDown":
        ut(h);
        break;
      case "PageUp":
        Ve(h);
        break;
      case "Space":
        Fe(h, r.editable);
        break;
      case "NumpadEnter":
      case "Enter":
        Me(h);
        break;
      case "Escape":
        He(h);
        break;
      case "Tab":
        at(h);
        break;
      case "Backspace":
        it(h, r.editable);
        break;
      case "ShiftLeft":
      case "ShiftRight":
        break;
      default:
        !V && L.isPrintableCharacter(h.key) && (!S && !r.editable && p(), !r.editable && Mt(h, h.key));
        break;
    }
    b.current = !1;
  }, xt = function(h) {
    switch (h.code) {
      case "ArrowDown":
        z(h);
        break;
      case "ArrowUp":
        ge(h);
        break;
      case "ArrowLeft":
      case "ArrowRight":
        Re(h, !0);
        break;
      case "Escape":
      case "Enter":
      case "NumpadEnter":
        Me(h), h.preventDefault();
        break;
    }
  }, dt = function() {
    return N.getFocusableElements(I.current, ':not([data-p-hidden-focusable="true"])').length > 0;
  }, lt = function(h) {
    var V;
    return nt(h) && ((V = ie(h)) === null || V === void 0 ? void 0 : V.toLocaleLowerCase(r.filterLocale).startsWith(re.current.toLocaleLowerCase(r.filterLocale)));
  }, nt = function(h) {
    return L.isNotEmpty(h) && !(Oe(h) || De(h));
  }, pt = function() {
    return L.isNotEmpty(r.value);
  }, Et = function(h) {
    return nt(h) && Ht(h);
  }, rt = function() {
    return pt ? wt.findIndex(function(h) {
      return Et(h);
    }) : -1;
  }, Je = function() {
    var h = rt();
    return h < 0 ? ot() : h;
  }, Mt = function(h, V) {
    re.current = (re.current || "") + V;
    var Ee = -1, et = !1;
    return L.isNotEmpty(re.current) && (g !== -1 ? (Ee = wt.slice(g).findIndex(function(ht) {
      return lt(ht);
    }), Ee = Ee === -1 ? wt.slice(0, g).findIndex(function(ht) {
      return lt(ht);
    }) : Ee + g) : Ee = wt.findIndex(function(ht) {
      return lt(ht);
    }), Ee !== -1 && (et = !0), Ee === -1 && g === -1 && (Ee = Je()), Ee !== -1 && vt(h, Ee)), B.current && clearTimeout(B.current), B.current = setTimeout(function() {
      re.current = "", B.current = null;
    }, 500), et;
  }, Ge = function() {
    var h = rt();
    return h < 0 ? ct() : h;
  }, ot = function() {
    return wt.findIndex(function(h) {
      return nt(h);
    });
  }, ct = function() {
    return L.findLastIndex(wt, function(h) {
      return nt(h);
    });
  }, kt = function(h) {
    var V = h < wt.length - 1 ? wt.slice(h + 1).findIndex(function(Ee) {
      return nt(Ee);
    }) : -1;
    return V > -1 ? V + h + 1 : h;
  }, ft = function(h) {
    var V = h > 0 ? L.findLastIndex(wt.slice(0, h), function(Ee) {
      return nt(Ee);
    }) : -1;
    return V > -1 ? V : h;
  }, vt = function(h, V) {
    g !== V && (O(V), Ce(V), r.selectOnFocus && je(h, wt[V], !1));
  }, Ce = function(h) {
    var V = N.findSingle(I.current, 'li[id="dropdownItem_'.concat(h, '"]'));
    V && V.focus();
  }, z = function(h) {
    if (!S)
      p(), r.editable && vt(h, rt());
    else {
      var V = g !== -1 ? kt(g) : b.current ? ot() : Je();
      vt(h, V);
    }
    h.preventDefault();
  }, ge = function(h) {
    var V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (h.altKey && !V)
      g !== -1 && je(h, wt[g]), state.overlayVisible && E(), h.preventDefault();
    else {
      var Ee = g !== -1 ? ft(g) : b.current ? ct() : Ge();
      vt(h, Ee), !S && p(), h.preventDefault();
    }
  }, Re = function(h) {
    var V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    V && O(-1);
  }, Pe = function(h) {
    var V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    V ? (h.currentTarget.setSelectionRange(0, 0), O(-1)) : (vt(h, ot()), !S && p()), h.preventDefault();
  }, qe = function(h) {
    var V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (V) {
      var Ee = h.currentTarget, et = Ee.value.length;
      Ee.setSelectionRange(et, et), O(-1);
    } else
      vt(h, ct()), !S && p();
    h.preventDefault();
  }, Ve = function(h) {
    h.preventDefault();
  }, ut = function(h) {
    h.preventDefault();
  }, Fe = function(h) {
    var V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    !V && Me(h);
  }, Me = function(h) {
    S ? (g !== -1 && je(h, wt[g]), E()) : (O(-1), z(h)), h.preventDefault();
  }, He = function(h) {
    S && E(), h.preventDefault();
  }, at = function(h) {
    var V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    V || (S && !dt() ? (N.focus(U.current), h.preventDefault()) : (g !== -1 && je(h, wt[g]), S && E()));
  }, it = function(h) {
    var V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    h && V && !S && p();
  }, be = function(h) {
    !S && p();
    var V = null;
    h.target.value && wt && (V = wt.findIndex(function(Ee) {
      return ie(Ee).toLocaleLowerCase().startsWith(h.target.value.toLocaleLowerCase());
    })), O(V), r.onChange && r.onChange({
      originalEvent: h.originalEvent,
      value: h.target.value,
      stopPropagation: function() {
        h.originalEvent.stopPropagation();
      },
      preventDefault: function() {
        h.originalEvent.preventDefault();
      },
      target: {
        name: r.name,
        id: r.id,
        value: h.target.value
      }
    });
  }, A = function(h) {
    v(!0), E(), r.onFocus && r.onFocus(h);
  }, G = function(h) {
    var V = h.option;
    V.disabled || (Pt(h), N.focus(R.current)), E();
  }, ee = function(h) {
    var V = h.target.value;
    s(V), r.onFilter && r.onFilter({
      originalEvent: h,
      filter: V
    });
  }, ye = function(h) {
    Be(h);
  }, Be = function(h) {
    s(""), r.onFilter && r.onFilter({
      filter: ""
    }), h && h();
  }, Qe = function(h) {
    r.onChange && r.onChange({
      originalEvent: h,
      value: void 0,
      stopPropagation: function() {
        h == null || h.stopPropagation();
      },
      preventDefault: function() {
        h == null || h.preventDefault();
      },
      target: {
        name: r.name,
        id: r.id,
        value: void 0
      }
    }), r.filter && Be(), te();
  }, Pt = function(h) {
    if (Nt !== h.option) {
      te(h.option), O(-1);
      var V = oe(h.option), Ee = Tt(h.option, wt);
      r.onChange && r.onChange({
        originalEvent: h.originalEvent,
        value: V,
        stopPropagation: function() {
          h.originalEvent.stopPropagation();
        },
        preventDefault: function() {
          h.originalEvent.preventDefault();
        },
        target: {
          name: r.name,
          id: r.id,
          value: V
        }
      }), vt(h.originalEvent, Ee);
    }
  }, zt = function(h) {
    if (h = h || wt, r.value != null && h)
      if (r.optionGroupLabel)
        for (var V = 0; V < h.length; V++) {
          var Ee = Tt(r.value, st(h[V]));
          if (Ee !== -1)
            return {
              group: V,
              option: Ee
            };
        }
      else
        return Tt(r.value, h);
    return -1;
  }, qt = function() {
    return r.optionValue ? null : r.dataKey;
  }, Tt = function(h, V) {
    var Ee = qt();
    return V.findIndex(function(et) {
      return L.equals(h, oe(et), Ee);
    });
  }, Ht = function(h) {
    return L.equals(r.value, oe(h), qt());
  }, p = function() {
    O(g !== -1 ? g : r.autoOptionFocus ? Je() : r.editable ? -1 : rt()), P(!0);
  }, E = function() {
    P(!1), b.current = !1;
  }, H = function() {
    r.editable && !S && b.current === !1 && N.focus(j.current);
  }, de = function(h) {
    en.set("overlay", I.current, o && o.autoZIndex || bt.autoZIndex, o && o.zIndex.overlay || bt.zIndex.overlay), N.addStyles(I.current, {
      position: "absolute",
      top: "0",
      left: "0"
    }), k(), h && h();
  }, xe = function(h) {
    h && h(), fe(), r.onShow && r.onShow();
  }, se = function() {
    ve();
  }, q = function() {
    r.filter && r.resetFilterOnHide && Be(), en.clear(I.current), r.onHide && r.onHide();
  }, k = function() {
    N.alignOverlay(I.current, j.current.parentElement, r.appendTo || o && o.appendTo || bt.appendTo);
  }, W = function() {
    var h = N.findSingle(I.current, 'li[data-p-focused="true"]');
    if (h && h.scrollIntoView)
      h.scrollIntoView({
        block: "nearest",
        inline: "nearest"
      });
    else {
      var V = N.findSingle(I.current, 'li[data-p-highlight="true"]');
      V && V.scrollIntoView && V.scrollIntoView({
        block: "nearest",
        inline: "nearest"
      });
    }
  }, te = function(h) {
    j.current && (j.current.value = h ? ie(h) : r.value || "", R.current && (R.current.value = j.current.value));
  }, ie = function(h) {
    if (L.isScalar(h))
      return "".concat(h);
    var V = r.optionLabel ? L.resolveFieldData(h, r.optionLabel) : h.label;
    return "".concat(V);
  }, oe = function(h) {
    if (r.useOptionAsValue)
      return h;
    var V = r.optionValue ? L.resolveFieldData(h, r.optionValue) : h ? h.value : L.resolveFieldData(h, "value");
    return r.optionValue || L.isNotEmpty(V) ? V : h;
  }, me = function(h) {
    return r.dataKey ? L.resolveFieldData(h, r.dataKey) : ie(h);
  }, De = function(h) {
    return r.optionGroupLabel && h.optionGroup && h.group;
  }, Oe = function(h) {
    return r.optionDisabled ? L.isFunction(r.optionDisabled) ? r.optionDisabled(h) : L.resolveFieldData(h, r.optionDisabled) : h && h.disabled !== void 0 ? h.disabled : !1;
  }, Ye = function(h) {
    return L.resolveFieldData(h, r.optionGroupLabel);
  }, mt = function(h) {
    return L.resolveFieldData(h, r.optionGroupLabel);
  }, st = function(h) {
    return L.resolveFieldData(h, r.optionGroupChildren);
  }, St = function() {
    if (r.editable && j.current) {
      var h = Nt ? ie(Nt) : null, V = h || r.value || "";
      j.current.value = V, R.current && (R.current.value = V);
    }
  }, gt = function() {
    var h = zt(r.options);
    return h !== -1 ? r.optionGroupLabel ? st(r.options[h.group])[h.option] : r.options[h] : null;
  };
  u.useImperativeHandle(t, function() {
    return {
      props: r,
      show: p,
      hide: E,
      clear: Qe,
      focus: function() {
        return N.focus(R.current);
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
    L.combinedRefs(j, r.inputRef), L.combinedRefs(R, r.focusInputRef);
  }, [j, r.inputRef, R, r.focusInputRef]), Xt(function() {
    r.autoFocus && N.focus(R.current, r.autoFocus), k();
  }), tt(function() {
    S && (r.value || g >= 0) && W();
  }, [S, r.value, g]), tt(function() {
    S && l && r.filter && k();
  }, [S, l, r.filter]), tt(function() {
    ne.current && ne.current.scrollInView(0);
  }, [l]), tt(function() {
    l && (!r.options || r.options.length === 0) && s(""), St(), j.current && (j.current.selectedIndex = 1);
  }), ln(function() {
    en.clear(I.current);
  });
  var or = function() {
    var h = {
      value: "",
      label: r.placeholder
    };
    if (Nt) {
      var V = oe(Nt);
      h = {
        value: Zn(V) === "object" ? r.options.findIndex(function($n) {
          return $n === V;
        }) : V,
        label: ie(Nt)
      };
    }
    var Ee = e({
      className: "p-hidden-accessible p-dropdown-hidden-select"
    }, Z("hiddenSelectedMessage")), et = e({
      ref: j,
      required: r.required,
      defaultValue: h.value,
      name: r.name,
      tabIndex: -1,
      "aria-hidden": "true"
    }, Z("select")), ht = e({
      value: h.value
    }, Z("option"));
    return /* @__PURE__ */ u.createElement("div", Ee, /* @__PURE__ */ u.createElement("select", et, /* @__PURE__ */ u.createElement("option", ht, h.label)));
  }, ar = function() {
    var h = L.isNotEmpty(Nt) ? ie(Nt) : null;
    r.editable && (h = h || r.value || "");
    var V = e({
      className: "p-hidden-accessible"
    }, Z("hiddenSelectedMessage")), Ee = e(dn({
      ref: R,
      id: r.inputId,
      defaultValue: h,
      type: "text",
      readOnly: !0,
      "aria-haspopup": "listbox",
      onFocus: _e,
      onBlur: Ae,
      onKeyDown: We,
      disabled: r.disabled,
      tabIndex: r.disabled ? -1 : r.tabIndex || 0
    }, gn), Z("input"));
    return /* @__PURE__ */ u.createElement("div", V, /* @__PURE__ */ u.createElement("input", Ee));
  }, mn = function() {
    var h = L.isNotEmpty(Nt) ? ie(Nt) : null;
    if (r.editable) {
      var V = h || r.value || "", Ee = e(dn({
        ref: j,
        type: "text",
        defaultValue: V,
        className: _("input", {
          label: h
        }),
        disabled: r.disabled,
        placeholder: r.placeholder,
        maxLength: r.maxLength,
        onInput: be,
        onFocus: A,
        onKeyDown: We,
        onBlur: Ae,
        tabIndex: r.disabled ? -1 : r.tabIndex || 0,
        "aria-haspopup": "listbox"
      }, gn), Z("input"));
      return /* @__PURE__ */ u.createElement("input", Ee);
    }
    var et = r.valueTemplate ? L.getJSXElement(r.valueTemplate, Nt, r) : h || r.placeholder || r.emptyMessage || /* @__PURE__ */ u.createElement(u.Fragment, null, " "), ht = e({
      ref: j,
      className: _("input", {
        label: h
      }),
      tabIndex: "-1"
    }, Z("input"));
    return /* @__PURE__ */ u.createElement("span", ht, et);
  }, Xr = function(h) {
    (h.key === "Enter" || h.code === "Space") && (Qe(h), h.preventDefault());
  }, ir = function() {
    if (r.value != null && r.showClear && !r.disabled && !L.isEmpty(r.options)) {
      var h = e({
        className: _("clearIcon"),
        onPointerUp: Qe,
        tabIndex: r.tabIndex || "0",
        onKeyDown: Xr,
        "aria-label": Jn("clear")
      }, Z("clearIcon")), V = r.clearIcon || /* @__PURE__ */ u.createElement(Vr, h);
      return Lt.getJSXIcon(V, dn({}, h), {
        props: r
      });
    }
    return null;
  }, lr = function() {
    var h = e({
      className: _("loadingIcon"),
      "data-pr-overlay-visible": S
    }, Z("loadingIcon")), V = r.loadingIcon || /* @__PURE__ */ u.createElement(Ho, {
      spin: !0
    }), Ee = Lt.getJSXIcon(V, dn({}, h), {
      props: r
    }), et = r.placeholder || r.ariaLabel, ht = e({
      className: _("trigger"),
      role: "button",
      "aria-haspopup": "listbox",
      "aria-expanded": S,
      "aria-label": et
    }, Z("trigger"));
    return /* @__PURE__ */ u.createElement("div", ht, Ee);
  }, sr = function() {
    var h = e({
      className: _("dropdownIcon"),
      "data-pr-overlay-visible": S
    }, Z("dropdownIcon")), V = S ? r.collapseIcon || /* @__PURE__ */ u.createElement(fs, h) : r.dropdownIcon || /* @__PURE__ */ u.createElement(ui, h), Ee = Lt.getJSXIcon(V, dn({}, h), {
      props: r
    }), et = r.placeholder || r.ariaLabel, ht = e({
      className: _("trigger"),
      role: "button",
      "aria-haspopup": "listbox",
      "aria-expanded": S,
      "aria-label": et
    }, Z("trigger"));
    return /* @__PURE__ */ u.createElement("div", ht, Ee);
  }, wt = K(), Nt = gt(), Ct = L.isNotEmpty(r.tooltip), Wt = ro.getOtherProps(r), gn = L.reduceKeys(Wt, N.ARIA_PROPS), Ln = or(), Zt = ar(), cn = mn(), On = r.loading ? lr() : sr(), pc = ir(), vc = e({
    id: r.id,
    ref: T,
    className: we(r.className, _("root", {
      context: o,
      focusedState: f,
      overlayVisibleState: S
    })),
    style: r.style,
    onClick: function(h) {
      return M(h);
    },
    onMouseDown: r.onMouseDown,
    onContextMenu: r.onContextMenu,
    onFocus: H,
    "data-p-disabled": r.disabled,
    "data-p-focus": f,
    "aria-activedescendant": f ? "dropdownItem_".concat(g) : void 0
  }, Wt, Z("root")), mc = e({
    ref: U,
    role: "presentation",
    "aria-hidden": "true",
    className: "p-hidden-accessible p-hidden-focusable",
    tabIndex: "0",
    onFocus: D,
    "data-p-hidden-accessible": !0,
    "data-p-hidden-focusable": !0
  }, Z("hiddenFirstFocusableEl")), gc = e({
    ref: $,
    role: "presentation",
    "aria-hidden": "true",
    className: "p-hidden-accessible p-hidden-focusable",
    tabIndex: "0",
    onFocus: F,
    "data-p-hidden-accessible": !0,
    "data-p-hidden-focusable": !0
  }, Z("hiddenLastFocusableEl"));
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement("div", vc, Zt, Ln, cn, pc, On, /* @__PURE__ */ u.createElement(ys, pn({
    hostName: "Dropdown",
    ref: I,
    visibleOptions: wt,
    virtualScrollerRef: ne
  }, r, {
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
    onClick: Ne,
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
    firstFocusableElement: /* @__PURE__ */ u.createElement("span", mc),
    lastFocusableElement: /* @__PURE__ */ u.createElement("span", gc),
    sx: J
  }))), Ct && /* @__PURE__ */ u.createElement(Wr, pn({
    target: T,
    content: r.tooltip,
    pt: Z("tooltip")
  }, r.tooltipOptions)));
}));
fi.displayName = "Dropdown";
const wf = ({ item: n, onChange: t, config: e }) => {
  const [o, r] = Le({ ...En, ...n }), [a, i] = Le(o.options);
  Ie(() => {
    r({ ...En, ...n });
  }, [n]), Ie(() => {
    if (i(o.options), o.source != "local") {
      const c = e.external_select_options.find((d) => d.key == o.source);
      c && (c.options && i(c.options), c.options_func && c.options_func().then((d) => {
        i(d);
      }));
    }
  }, [o.source, o.options]);
  const l = (c) => {
    const d = { ...En, ...n, value: c.target.value };
    t(d);
  }, s = Math.random().toString(36).substring(2, 15);
  return /* @__PURE__ */ y.jsx(y.Fragment, { children: /* @__PURE__ */ y.jsxs("div", { className: "flex flex-column gap-2", children: [
    /* @__PURE__ */ y.jsx("label", { htmlFor: s, children: o.label }),
    /* @__PURE__ */ y.jsx(
      fi,
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
  ] }) });
}, xf = (n) => ({});
var gl;
function Ba() {
  return Ba = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e) ({}).hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, Ba.apply(null, arguments);
}
var Ef = function(t) {
  return /* @__PURE__ */ u.createElement("svg", Ba({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, t), gl || (gl = /* @__PURE__ */ u.createElement("path", {
    d: "M384 432c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16zm64-16c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64zm-224-64c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4h208c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7"
  })));
};
function jn(n) {
  return JSON.parse(JSON.stringify(n));
}
function Sf() {
  for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++)
    t[e] = arguments[e];
  return Ze(
    () => (o) => {
      t.forEach((r) => r(o));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  );
}
const Wo = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function tr(n) {
  const t = Object.prototype.toString.call(n);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function pi(n) {
  return "nodeType" in n;
}
function Bt(n) {
  var t, e;
  return n ? tr(n) ? n : pi(n) && (t = (e = n.ownerDocument) == null ? void 0 : e.defaultView) != null ? t : window : window;
}
function vi(n) {
  const {
    Document: t
  } = Bt(n);
  return n instanceof t;
}
function Kr(n) {
  return tr(n) ? !1 : n instanceof Bt(n).HTMLElement;
}
function ws(n) {
  return n instanceof Bt(n).SVGElement;
}
function nr(n) {
  return n ? tr(n) ? n.document : pi(n) ? vi(n) ? n : Kr(n) || ws(n) ? n.ownerDocument : document : document : document;
}
const Gt = Wo ? bc : Ie;
function Vo(n) {
  const t = Xe(n);
  return Gt(() => {
    t.current = n;
  }), $t(function() {
    for (var e = arguments.length, o = new Array(e), r = 0; r < e; r++)
      o[r] = arguments[r];
    return t.current == null ? void 0 : t.current(...o);
  }, []);
}
function Cf() {
  const n = Xe(null), t = $t((o, r) => {
    n.current = setInterval(o, r);
  }, []), e = $t(() => {
    n.current !== null && (clearInterval(n.current), n.current = null);
  }, []);
  return [t, e];
}
function jr(n, t) {
  t === void 0 && (t = [n]);
  const e = Xe(n);
  return Gt(() => {
    e.current !== n && (e.current = n);
  }, t), e;
}
function Ur(n, t) {
  const e = Xe();
  return Ze(
    () => {
      const o = n(e.current);
      return e.current = o, o;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
function Po(n) {
  const t = Vo(n), e = Xe(null), o = $t(
    (r) => {
      r !== e.current && (t == null || t(r, e.current)), e.current = r;
    },
    //eslint-disable-next-line
    []
  );
  return [e, o];
}
function qo(n) {
  const t = Xe();
  return Ie(() => {
    t.current = n;
  }, [n]), t.current;
}
let ua = {};
function Yr(n, t) {
  return Ze(() => {
    if (t)
      return t;
    const e = ua[n] == null ? 0 : ua[n] + 1;
    return ua[n] = e, n + "-" + e;
  }, [n, t]);
}
function xs(n) {
  return function(t) {
    for (var e = arguments.length, o = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
      o[r - 1] = arguments[r];
    return o.reduce((a, i) => {
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
const Un = /* @__PURE__ */ xs(1), Nr = /* @__PURE__ */ xs(-1);
function Of(n) {
  return "clientX" in n && "clientY" in n;
}
function Ko(n) {
  if (!n)
    return !1;
  const {
    KeyboardEvent: t
  } = Bt(n.target);
  return t && n instanceof t;
}
function Pf(n) {
  if (!n)
    return !1;
  const {
    TouchEvent: t
  } = Bt(n.target);
  return t && n instanceof t;
}
function To(n) {
  if (Pf(n)) {
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
  return Of(n) ? {
    x: n.clientX,
    y: n.clientY
  } : null;
}
const an = /* @__PURE__ */ Object.freeze({
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
        return [an.Translate.toString(n), an.Scale.toString(n)].join(" ");
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
}), hl = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function qf(n) {
  return n.matches(hl) ? n : n.querySelector(hl);
}
const Tf = {
  display: "none"
};
function If(n) {
  let {
    id: t,
    value: e
  } = n;
  return Te.createElement("div", {
    id: t,
    style: Tf
  }, e);
}
function _f(n) {
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
  return Te.createElement("div", {
    id: t,
    style: r,
    role: "status",
    "aria-live": o,
    "aria-atomic": !0
  }, e);
}
function Rf() {
  const [n, t] = Le("");
  return {
    announce: $t((o) => {
      o != null && t(o);
    }, []),
    announcement: n
  };
}
const Es = /* @__PURE__ */ Hr(null);
function kf(n) {
  const t = rn(Es);
  Ie(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(n);
  }, [n, t]);
}
function Df() {
  const [n] = Le(() => /* @__PURE__ */ new Set()), t = $t((o) => (n.add(o), () => n.delete(o)), [n]);
  return [$t((o) => {
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
}, Nf = {
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
function Af(n) {
  let {
    announcements: t = Nf,
    container: e,
    hiddenTextDescribedById: o,
    screenReaderInstructions: r = jf
  } = n;
  const {
    announce: a,
    announcement: i
  } = Rf(), l = Yr("DndLiveRegion"), [s, c] = Le(!1);
  if (Ie(() => {
    c(!0);
  }, []), kf(Ze(() => ({
    onDragStart(f) {
      let {
        active: v
      } = f;
      a(t.onDragStart({
        active: v
      }));
    },
    onDragMove(f) {
      let {
        active: v,
        over: m
      } = f;
      t.onDragMove && a(t.onDragMove({
        active: v,
        over: m
      }));
    },
    onDragOver(f) {
      let {
        active: v,
        over: m
      } = f;
      a(t.onDragOver({
        active: v,
        over: m
      }));
    },
    onDragEnd(f) {
      let {
        active: v,
        over: m
      } = f;
      a(t.onDragEnd({
        active: v,
        over: m
      }));
    },
    onDragCancel(f) {
      let {
        active: v,
        over: m
      } = f;
      a(t.onDragCancel({
        active: v,
        over: m
      }));
    }
  }), [a, t])), !s)
    return null;
  const d = Te.createElement(Te.Fragment, null, Te.createElement(If, {
    id: o,
    value: r.draggable
  }), Te.createElement(_f, {
    id: l,
    announcement: i
  }));
  return e ? Ec(d, e) : d;
}
var Ot;
(function(n) {
  n.DragStart = "dragStart", n.DragMove = "dragMove", n.DragEnd = "dragEnd", n.DragCancel = "dragCancel", n.DragOver = "dragOver", n.RegisterDroppable = "registerDroppable", n.SetDroppableDisabled = "setDroppableDisabled", n.UnregisterDroppable = "unregisterDroppable";
})(Ot || (Ot = {}));
function Io() {
}
function _o(n, t) {
  return Ze(
    () => ({
      sensor: n,
      options: t ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, t]
  );
}
function Ss() {
  for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++)
    t[e] = arguments[e];
  return Ze(
    () => [...t].filter((o) => o != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
const nn = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function Cs(n, t) {
  return Math.sqrt(Math.pow(n.x - t.x, 2) + Math.pow(n.y - t.y, 2));
}
function Lf(n, t) {
  const e = To(n);
  if (!e)
    return "0 0";
  const o = {
    x: (e.x - t.left) / t.width * 100,
    y: (e.y - t.top) / t.height * 100
  };
  return o.x + "% " + o.y + "%";
}
function Os(n, t) {
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
function $f(n, t) {
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
function bl(n) {
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
function Ps(n, t) {
  if (!n || n.length === 0)
    return null;
  const [e] = n;
  return e[t];
}
function yl(n, t, e) {
  return t === void 0 && (t = n.left), e === void 0 && (e = n.top), {
    x: t + n.width * 0.5,
    y: e + n.height * 0.5
  };
}
const qs = (n) => {
  let {
    collisionRect: t,
    droppableRects: e,
    droppableContainers: o
  } = n;
  const r = yl(t, t.left, t.top), a = [];
  for (const i of o) {
    const {
      id: l
    } = i, s = e.get(l);
    if (s) {
      const c = Cs(yl(s), r);
      a.push({
        id: l,
        data: {
          droppableContainer: i,
          value: c
        }
      });
    }
  }
  return a.sort(Os);
}, Ff = (n) => {
  let {
    collisionRect: t,
    droppableRects: e,
    droppableContainers: o
  } = n;
  const r = bl(t), a = [];
  for (const i of o) {
    const {
      id: l
    } = i, s = e.get(l);
    if (s) {
      const c = bl(s), d = r.reduce((v, m, C) => v + Cs(c[C], m), 0), f = Number((d / 4).toFixed(4));
      a.push({
        id: l,
        data: {
          droppableContainer: i,
          value: f
        }
      });
    }
  }
  return a.sort(Os);
};
function Mf(n, t) {
  const e = Math.max(t.top, n.top), o = Math.max(t.left, n.left), r = Math.min(t.left + t.width, n.left + n.width), a = Math.min(t.top + t.height, n.top + n.height), i = r - o, l = a - e;
  if (o < r && e < a) {
    const s = t.width * t.height, c = n.width * n.height, d = i * l, f = d / (s + c - d);
    return Number(f.toFixed(4));
  }
  return 0;
}
const zf = (n) => {
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
      const s = Mf(l, t);
      s > 0 && r.push({
        id: i,
        data: {
          droppableContainer: a,
          value: s
        }
      });
    }
  }
  return r.sort($f);
};
function Hf(n, t, e) {
  return {
    ...n,
    scaleX: t && e ? t.width / e.width : 1,
    scaleY: t && e ? t.height / e.height : 1
  };
}
function Ts(n, t) {
  return n && t ? {
    x: n.left - t.left,
    y: n.top - t.top
  } : nn;
}
function Bf(n) {
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
const Wf = /* @__PURE__ */ Bf(1);
function Is(n) {
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
function Vf(n, t, e) {
  const o = Is(t);
  if (!o)
    return n;
  const {
    scaleX: r,
    scaleY: a,
    x: i,
    y: l
  } = o, s = n.left - i - (1 - r) * parseFloat(e), c = n.top - l - (1 - a) * parseFloat(e.slice(e.indexOf(" ") + 1)), d = r ? n.width / r : n.width, f = a ? n.height / a : n.height;
  return {
    width: d,
    height: f,
    top: c,
    right: s + d,
    bottom: c + f,
    left: s
  };
}
const Kf = {
  ignoreTransform: !1
};
function rr(n, t) {
  t === void 0 && (t = Kf);
  let e = n.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      transform: c,
      transformOrigin: d
    } = Bt(n).getComputedStyle(n);
    c && (e = Vf(e, c, d));
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
function wl(n) {
  return rr(n, {
    ignoreTransform: !0
  });
}
function Uf(n) {
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
function Yf(n, t) {
  return t === void 0 && (t = Bt(n).getComputedStyle(n)), t.position === "fixed";
}
function Gf(n, t) {
  t === void 0 && (t = Bt(n).getComputedStyle(n));
  const e = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((r) => {
    const a = t[r];
    return typeof a == "string" ? e.test(a) : !1;
  });
}
function Uo(n, t) {
  const e = [];
  function o(r) {
    if (t != null && e.length >= t || !r)
      return e;
    if (vi(r) && r.scrollingElement != null && !e.includes(r.scrollingElement))
      return e.push(r.scrollingElement), e;
    if (!Kr(r) || ws(r) || e.includes(r))
      return e;
    const a = Bt(n).getComputedStyle(r);
    return r !== n && Gf(r, a) && e.push(r), Yf(r, a) ? e : o(r.parentNode);
  }
  return n ? o(n) : e;
}
function _s(n) {
  const [t] = Uo(n, 1);
  return t ?? null;
}
function da(n) {
  return !Wo || !n ? null : tr(n) ? n : pi(n) ? vi(n) || n === nr(n).scrollingElement ? window : Kr(n) ? n : null : null;
}
function Rs(n) {
  return tr(n) ? n.scrollX : n.scrollLeft;
}
function ks(n) {
  return tr(n) ? n.scrollY : n.scrollTop;
}
function Wa(n) {
  return {
    x: Rs(n),
    y: ks(n)
  };
}
var _t;
(function(n) {
  n[n.Forward = 1] = "Forward", n[n.Backward = -1] = "Backward";
})(_t || (_t = {}));
function Ds(n) {
  return !Wo || !n ? !1 : n === document.scrollingElement;
}
function js(n) {
  const t = {
    x: 0,
    y: 0
  }, e = Ds(n) ? {
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
const Xf = {
  x: 0.2,
  y: 0.2
};
function Jf(n, t, e, o, r) {
  let {
    top: a,
    left: i,
    right: l,
    bottom: s
  } = e;
  o === void 0 && (o = 10), r === void 0 && (r = Xf);
  const {
    isTop: c,
    isBottom: d,
    isLeft: f,
    isRight: v
  } = js(n), m = {
    x: 0,
    y: 0
  }, C = {
    x: 0,
    y: 0
  }, g = {
    height: t.height * r.y,
    width: t.width * r.x
  };
  return !c && a <= t.top + g.height ? (m.y = _t.Backward, C.y = o * Math.abs((t.top + g.height - a) / g.height)) : !d && s >= t.bottom - g.height && (m.y = _t.Forward, C.y = o * Math.abs((t.bottom - g.height - s) / g.height)), !v && l >= t.right - g.width ? (m.x = _t.Forward, C.x = o * Math.abs((t.right - g.width - l) / g.width)) : !f && i <= t.left + g.width && (m.x = _t.Backward, C.x = o * Math.abs((t.left + g.width - i) / g.width)), {
    direction: m,
    speed: C
  };
}
function Zf(n) {
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
function Ns(n) {
  return n.reduce((t, e) => Un(t, Wa(e)), nn);
}
function Qf(n) {
  return n.reduce((t, e) => t + Rs(e), 0);
}
function ep(n) {
  return n.reduce((t, e) => t + ks(e), 0);
}
function As(n, t) {
  if (t === void 0 && (t = rr), !n)
    return;
  const {
    top: e,
    left: o,
    bottom: r,
    right: a
  } = t(n);
  _s(n) && (r <= 0 || a <= 0 || e >= window.innerHeight || o >= window.innerWidth) && n.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const tp = [["x", ["left", "right"], Qf], ["y", ["top", "bottom"], ep]];
class mi {
  constructor(t, e) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const o = Uo(e), r = Ns(o);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [a, i, l] of tp)
      for (const s of i)
        Object.defineProperty(this, s, {
          get: () => {
            const c = l(o), d = r[a] - c;
            return this.rect[s] + d;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class br {
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
function np(n) {
  const {
    EventTarget: t
  } = Bt(n);
  return n instanceof t ? n : nr(n);
}
function fa(n, t) {
  const e = Math.abs(n.x), o = Math.abs(n.y);
  return typeof t == "number" ? Math.sqrt(e ** 2 + o ** 2) > t : "x" in t && "y" in t ? e > t.x && o > t.y : "x" in t ? e > t.x : "y" in t ? o > t.y : !1;
}
var Ut;
(function(n) {
  n.Click = "click", n.DragStart = "dragstart", n.Keydown = "keydown", n.ContextMenu = "contextmenu", n.Resize = "resize", n.SelectionChange = "selectionchange", n.VisibilityChange = "visibilitychange";
})(Ut || (Ut = {}));
function xl(n) {
  n.preventDefault();
}
function rp(n) {
  n.stopPropagation();
}
var ze;
(function(n) {
  n.Space = "Space", n.Down = "ArrowDown", n.Right = "ArrowRight", n.Left = "ArrowLeft", n.Up = "ArrowUp", n.Esc = "Escape", n.Enter = "Enter";
})(ze || (ze = {}));
const Ls = {
  start: [ze.Space, ze.Enter],
  cancel: [ze.Esc],
  end: [ze.Space, ze.Enter]
}, op = (n, t) => {
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
class Yo {
  constructor(t) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
    const {
      event: {
        target: e
      }
    } = t;
    this.props = t, this.listeners = new br(nr(e)), this.windowListeners = new br(Bt(e)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(Ut.Resize, this.handleCancel), this.windowListeners.add(Ut.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(Ut.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: e
    } = this.props, o = t.node.current;
    o && As(o), e(nn);
  }
  handleKeyDown(t) {
    if (Ko(t)) {
      const {
        active: e,
        context: o,
        options: r
      } = this.props, {
        keyboardCodes: a = Ls,
        coordinateGetter: i = op,
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
      } = o.current, d = c ? {
        x: c.left,
        y: c.top
      } : nn;
      this.referenceCoordinates || (this.referenceCoordinates = d);
      const f = i(t, {
        active: e,
        context: o.current,
        currentCoordinates: d
      });
      if (f) {
        const v = Nr(f, d), m = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: C
        } = o.current;
        for (const g of C) {
          const O = t.code, {
            isTop: w,
            isRight: x,
            isLeft: S,
            isBottom: P,
            maxScroll: b,
            minScroll: T
          } = js(g), I = Zf(g), U = {
            x: Math.min(O === ze.Right ? I.right - I.width / 2 : I.right, Math.max(O === ze.Right ? I.left : I.left + I.width / 2, f.x)),
            y: Math.min(O === ze.Down ? I.bottom - I.height / 2 : I.bottom, Math.max(O === ze.Down ? I.top : I.top + I.height / 2, f.y))
          }, $ = O === ze.Right && !x || O === ze.Left && !S, j = O === ze.Down && !P || O === ze.Up && !w;
          if ($ && U.x !== f.x) {
            const R = g.scrollLeft + v.x, ne = O === ze.Right && R <= b.x || O === ze.Left && R >= T.x;
            if (ne && !v.y) {
              g.scrollTo({
                left: R,
                behavior: l
              });
              return;
            }
            ne ? m.x = g.scrollLeft - R : m.x = O === ze.Right ? g.scrollLeft - b.x : g.scrollLeft - T.x, m.x && g.scrollBy({
              left: -m.x,
              behavior: l
            });
            break;
          } else if (j && U.y !== f.y) {
            const R = g.scrollTop + v.y, ne = O === ze.Down && R <= b.y || O === ze.Up && R >= T.y;
            if (ne && !v.x) {
              g.scrollTo({
                top: R,
                behavior: l
              });
              return;
            }
            ne ? m.y = g.scrollTop - R : m.y = O === ze.Down ? g.scrollTop - b.y : g.scrollTop - T.y, m.y && g.scrollBy({
              top: -m.y,
              behavior: l
            });
            break;
          }
        }
        this.handleMove(t, Un(Nr(f, this.referenceCoordinates), m));
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
Yo.activators = [{
  eventName: "onKeyDown",
  handler: (n, t, e) => {
    let {
      keyboardCodes: o = Ls,
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
function El(n) {
  return !!(n && "distance" in n);
}
function Sl(n) {
  return !!(n && "delay" in n);
}
class gi {
  constructor(t, e, o) {
    var r;
    o === void 0 && (o = np(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = e;
    const {
      event: a
    } = t, {
      target: i
    } = a;
    this.props = t, this.events = e, this.document = nr(i), this.documentListeners = new br(this.document), this.listeners = new br(o), this.windowListeners = new br(Bt(i)), this.initialCoordinates = (r = To(a)) != null ? r : nn, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(t.end.name, this.handleEnd), this.windowListeners.add(Ut.Resize, this.handleCancel), this.windowListeners.add(Ut.DragStart, xl), this.windowListeners.add(Ut.VisibilityChange, this.handleCancel), this.windowListeners.add(Ut.ContextMenu, xl), this.documentListeners.add(Ut.Keydown, this.handleKeydown), e) {
      if (o != null && o({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (Sl(e)) {
        this.timeoutId = setTimeout(this.handleStart, e.delay);
        return;
      }
      if (El(e))
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
    t && (this.activated = !0, this.documentListeners.add(Ut.Click, rp, {
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
    const s = (e = To(t)) != null ? e : nn, c = Nr(r, s);
    if (!o && l) {
      if (El(l)) {
        if (l.tolerance != null && fa(c, l.tolerance))
          return this.handleCancel();
        if (fa(c, l.distance))
          return this.handleStart();
      }
      return Sl(l) && fa(c, l.tolerance) ? this.handleCancel() : void 0;
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
const ap = {
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};
class Go extends gi {
  constructor(t) {
    const {
      event: e
    } = t, o = nr(e.target);
    super(t, ap, o);
  }
}
Go.activators = [{
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
const ip = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var Va;
(function(n) {
  n[n.RightClick = 2] = "RightClick";
})(Va || (Va = {}));
class lp extends gi {
  constructor(t) {
    super(t, ip, nr(t.event.target));
  }
}
lp.activators = [{
  eventName: "onMouseDown",
  handler: (n, t) => {
    let {
      nativeEvent: e
    } = n, {
      onActivation: o
    } = t;
    return e.button === Va.RightClick ? !1 : (o == null || o({
      event: e
    }), !0);
  }
}];
const pa = {
  move: {
    name: "touchmove"
  },
  end: {
    name: "touchend"
  }
};
class sp extends gi {
  constructor(t) {
    super(t, pa);
  }
  static setup() {
    return window.addEventListener(pa.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(pa.move.name, t);
    };
    function t() {
    }
  }
}
sp.activators = [{
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
var yr;
(function(n) {
  n[n.Pointer = 0] = "Pointer", n[n.DraggableRect = 1] = "DraggableRect";
})(yr || (yr = {}));
var Ro;
(function(n) {
  n[n.TreeOrder = 0] = "TreeOrder", n[n.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(Ro || (Ro = {}));
function cp(n) {
  let {
    acceleration: t,
    activator: e = yr.Pointer,
    canScroll: o,
    draggingRect: r,
    enabled: a,
    interval: i = 5,
    order: l = Ro.TreeOrder,
    pointerCoordinates: s,
    scrollableAncestors: c,
    scrollableAncestorRects: d,
    delta: f,
    threshold: v
  } = n;
  const m = dp({
    delta: f,
    disabled: !a
  }), [C, g] = Cf(), O = Xe({
    x: 0,
    y: 0
  }), w = Xe({
    x: 0,
    y: 0
  }), x = Ze(() => {
    switch (e) {
      case yr.Pointer:
        return s ? {
          top: s.y,
          bottom: s.y,
          left: s.x,
          right: s.x
        } : null;
      case yr.DraggableRect:
        return r;
    }
  }, [e, r, s]), S = Xe(null), P = $t(() => {
    const T = S.current;
    if (!T)
      return;
    const I = O.current.x * w.current.x, U = O.current.y * w.current.y;
    T.scrollBy(I, U);
  }, []), b = Ze(() => l === Ro.TreeOrder ? [...c].reverse() : c, [l, c]);
  Ie(
    () => {
      if (!a || !c.length || !x) {
        g();
        return;
      }
      for (const T of b) {
        if ((o == null ? void 0 : o(T)) === !1)
          continue;
        const I = c.indexOf(T), U = d[I];
        if (!U)
          continue;
        const {
          direction: $,
          speed: j
        } = Jf(T, U, x, t, v);
        for (const R of ["x", "y"])
          m[R][$[R]] || (j[R] = 0, $[R] = 0);
        if (j.x > 0 || j.y > 0) {
          g(), S.current = T, C(P, i), O.current = j, w.current = $;
          return;
        }
      }
      O.current = {
        x: 0,
        y: 0
      }, w.current = {
        x: 0,
        y: 0
      }, g();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      t,
      P,
      o,
      g,
      a,
      i,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(x),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(m),
      C,
      c,
      b,
      d,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(v)
    ]
  );
}
const up = {
  x: {
    [_t.Backward]: !1,
    [_t.Forward]: !1
  },
  y: {
    [_t.Backward]: !1,
    [_t.Forward]: !1
  }
};
function dp(n) {
  let {
    delta: t,
    disabled: e
  } = n;
  const o = qo(t);
  return Ur((r) => {
    if (e || !o || !r)
      return up;
    const a = {
      x: Math.sign(t.x - o.x),
      y: Math.sign(t.y - o.y)
    };
    return {
      x: {
        [_t.Backward]: r.x[_t.Backward] || a.x === -1,
        [_t.Forward]: r.x[_t.Forward] || a.x === 1
      },
      y: {
        [_t.Backward]: r.y[_t.Backward] || a.y === -1,
        [_t.Forward]: r.y[_t.Forward] || a.y === 1
      }
    };
  }, [e, t, o]);
}
function fp(n, t) {
  const e = t !== null ? n.get(t) : void 0, o = e ? e.node.current : null;
  return Ur((r) => {
    var a;
    return t === null ? null : (a = o ?? r) != null ? a : null;
  }, [o, t]);
}
function pp(n, t) {
  return Ze(() => n.reduce((e, o) => {
    const {
      sensor: r
    } = o, a = r.activators.map((i) => ({
      eventName: i.eventName,
      handler: t(i.handler, o)
    }));
    return [...e, ...a];
  }, []), [n, t]);
}
var Ar;
(function(n) {
  n[n.Always = 0] = "Always", n[n.BeforeDragging = 1] = "BeforeDragging", n[n.WhileDragging = 2] = "WhileDragging";
})(Ar || (Ar = {}));
var Ka;
(function(n) {
  n.Optimized = "optimized";
})(Ka || (Ka = {}));
const Cl = /* @__PURE__ */ new Map();
function vp(n, t) {
  let {
    dragging: e,
    dependencies: o,
    config: r
  } = t;
  const [a, i] = Le(null), {
    frequency: l,
    measure: s,
    strategy: c
  } = r, d = Xe(n), f = O(), v = jr(f), m = $t(function(w) {
    w === void 0 && (w = []), !v.current && i((x) => x === null ? w : x.concat(w.filter((S) => !x.includes(S))));
  }, [v]), C = Xe(null), g = Ur((w) => {
    if (f && !e)
      return Cl;
    if (!w || w === Cl || d.current !== n || a != null) {
      const x = /* @__PURE__ */ new Map();
      for (let S of n) {
        if (!S)
          continue;
        if (a && a.length > 0 && !a.includes(S.id) && S.rect.current) {
          x.set(S.id, S.rect.current);
          continue;
        }
        const P = S.node.current, b = P ? new mi(s(P), P) : null;
        S.rect.current = b, b && x.set(S.id, b);
      }
      return x;
    }
    return w;
  }, [n, a, e, f, s]);
  return Ie(() => {
    d.current = n;
  }, [n]), Ie(
    () => {
      f || m();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, f]
  ), Ie(
    () => {
      a && a.length > 0 && i(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(a)]
  ), Ie(
    () => {
      f || typeof l != "number" || C.current !== null || (C.current = setTimeout(() => {
        m(), C.current = null;
      }, l));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [l, f, m, ...o]
  ), {
    droppableRects: g,
    measureDroppableContainers: m,
    measuringScheduled: a != null
  };
  function O() {
    switch (c) {
      case Ar.Always:
        return !1;
      case Ar.BeforeDragging:
        return e;
      default:
        return !e;
    }
  }
}
function hi(n, t) {
  return Ur((e) => n ? e || (typeof t == "function" ? t(n) : n) : null, [t, n]);
}
function mp(n, t) {
  return hi(n, t);
}
function gp(n) {
  let {
    callback: t,
    disabled: e
  } = n;
  const o = Vo(t), r = Ze(() => {
    if (e || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: a
    } = window;
    return new a(o);
  }, [o, e]);
  return Ie(() => () => r == null ? void 0 : r.disconnect(), [r]), r;
}
function Xo(n) {
  let {
    callback: t,
    disabled: e
  } = n;
  const o = Vo(t), r = Ze(
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
  return Ie(() => () => r == null ? void 0 : r.disconnect(), [r]), r;
}
function hp(n) {
  return new mi(rr(n), n);
}
function Ol(n, t, e) {
  t === void 0 && (t = hp);
  const [o, r] = oi(l, null), a = gp({
    callback(s) {
      if (n)
        for (const c of s) {
          const {
            type: d,
            target: f
          } = c;
          if (d === "childList" && f instanceof HTMLElement && f.contains(n)) {
            r();
            break;
          }
        }
    }
  }), i = Xo({
    callback: r
  });
  return Gt(() => {
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
    const d = t(n);
    return JSON.stringify(s) === JSON.stringify(d) ? s : d;
  }
}
function bp(n) {
  const t = hi(n);
  return Ts(n, t);
}
const Pl = [];
function yp(n) {
  const t = Xe(n), e = Ur((o) => n ? o && o !== Pl && n && t.current && n.parentNode === t.current.parentNode ? o : Uo(n) : Pl, [n]);
  return Ie(() => {
    t.current = n;
  }, [n]), e;
}
function wp(n) {
  const [t, e] = Le(null), o = Xe(n), r = $t((a) => {
    const i = da(a.target);
    i && e((l) => l ? (l.set(i, Wa(i)), new Map(l)) : null);
  }, []);
  return Ie(() => {
    const a = o.current;
    if (n !== a) {
      i(a);
      const l = n.map((s) => {
        const c = da(s);
        return c ? (c.addEventListener("scroll", r, {
          passive: !0
        }), [c, Wa(c)]) : null;
      }).filter((s) => s != null);
      e(l.length ? new Map(l) : null), o.current = n;
    }
    return () => {
      i(n), i(a);
    };
    function i(l) {
      l.forEach((s) => {
        const c = da(s);
        c == null || c.removeEventListener("scroll", r);
      });
    }
  }, [r, n]), Ze(() => n.length ? t ? Array.from(t.values()).reduce((a, i) => Un(a, i), nn) : Ns(n) : nn, [n, t]);
}
function ql(n, t) {
  t === void 0 && (t = []);
  const e = Xe(null);
  return Ie(
    () => {
      e.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), Ie(() => {
    const o = n !== nn;
    o && !e.current && (e.current = n), !o && e.current && (e.current = null);
  }, [n]), e.current ? Nr(n, e.current) : nn;
}
function xp(n) {
  Ie(
    () => {
      if (!Wo)
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
function Ep(n, t) {
  return Ze(() => n.reduce((e, o) => {
    let {
      eventName: r,
      handler: a
    } = o;
    return e[r] = (i) => {
      a(i, t);
    }, e;
  }, {}), [n, t]);
}
function $s(n) {
  return Ze(() => n ? Uf(n) : null, [n]);
}
const va = [];
function Sp(n, t) {
  t === void 0 && (t = rr);
  const [e] = n, o = $s(e ? Bt(e) : null), [r, a] = oi(l, va), i = Xo({
    callback: a
  });
  return n.length > 0 && r === va && a(), Gt(() => {
    n.length ? n.forEach((s) => i == null ? void 0 : i.observe(s)) : (i == null || i.disconnect(), a());
  }, [n]), r;
  function l() {
    return n.length ? n.map((s) => Ds(s) ? o : new mi(t(s), s)) : va;
  }
}
function Fs(n) {
  if (!n)
    return null;
  if (n.children.length > 1)
    return n;
  const t = n.children[0];
  return Kr(t) ? t : n;
}
function Cp(n) {
  let {
    measure: t
  } = n;
  const [e, o] = Le(null), r = $t((c) => {
    for (const {
      target: d
    } of c)
      if (Kr(d)) {
        o((f) => {
          const v = t(d);
          return f ? {
            ...f,
            width: v.width,
            height: v.height
          } : v;
        });
        break;
      }
  }, [t]), a = Xo({
    callback: r
  }), i = $t((c) => {
    const d = Fs(c);
    a == null || a.disconnect(), d && (a == null || a.observe(d)), o(d ? t(d) : null);
  }, [t, a]), [l, s] = Po(i);
  return Ze(() => ({
    nodeRef: l,
    rect: e,
    setRef: s
  }), [e, l, s]);
}
const Op = [{
  sensor: Go,
  options: {}
}, {
  sensor: Yo,
  options: {}
}], Pp = {
  current: {}
}, ho = {
  draggable: {
    measure: wl
  },
  droppable: {
    measure: wl,
    strategy: Ar.WhileDragging,
    frequency: Ka.Optimized
  },
  dragOverlay: {
    measure: rr
  }
};
class wr extends Map {
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
  droppableContainers: /* @__PURE__ */ new wr(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: Io
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: ho,
  measureDroppableContainers: Io,
  windowRect: null,
  measuringScheduled: !1
}, Ms = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: Io,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: Io
}, Gr = /* @__PURE__ */ Hr(Ms), zs = /* @__PURE__ */ Hr(qp);
function Tp() {
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
      containers: new wr()
    }
  };
}
function Ip(n, t) {
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
        id: o
      } = e, r = new wr(n.droppable.containers);
      return r.set(o, e), {
        ...n,
        droppable: {
          ...n.droppable,
          containers: r
        }
      };
    }
    case Ot.SetDroppableDisabled: {
      const {
        id: e,
        key: o,
        disabled: r
      } = t, a = n.droppable.containers.get(e);
      if (!a || o !== a.key)
        return n;
      const i = new wr(n.droppable.containers);
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
    case Ot.UnregisterDroppable: {
      const {
        id: e,
        key: o
      } = t, r = n.droppable.containers.get(e);
      if (!r || o !== r.key)
        return n;
      const a = new wr(n.droppable.containers);
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
function _p(n) {
  let {
    disabled: t
  } = n;
  const {
    active: e,
    activatorEvent: o,
    draggableNodes: r
  } = rn(Gr), a = qo(o), i = qo(e == null ? void 0 : e.id);
  return Ie(() => {
    if (!t && !o && a && i != null) {
      if (!Ko(a) || document.activeElement === a.target)
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
        for (const d of [s.current, c.current]) {
          if (!d)
            continue;
          const f = qf(d);
          if (f) {
            f.focus();
            break;
          }
        }
      });
    }
  }, [o, t, r, i, a]), null;
}
function Hs(n, t) {
  let {
    transform: e,
    ...o
  } = t;
  return n != null && n.length ? n.reduce((r, a) => a({
    transform: r,
    ...o
  }), e) : e;
}
function Rp(n) {
  return Ze(
    () => ({
      draggable: {
        ...ho.draggable,
        ...n == null ? void 0 : n.draggable
      },
      droppable: {
        ...ho.droppable,
        ...n == null ? void 0 : n.droppable
      },
      dragOverlay: {
        ...ho.dragOverlay,
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
  const a = Xe(!1), {
    x: i,
    y: l
  } = typeof r == "boolean" ? {
    x: r,
    y: r
  } : r;
  Gt(() => {
    if (!i && !l || !t) {
      a.current = !1;
      return;
    }
    if (a.current || !o)
      return;
    const c = t == null ? void 0 : t.node.current;
    if (!c || c.isConnected === !1)
      return;
    const d = e(c), f = Ts(d, o);
    if (i || (f.x = 0), l || (f.y = 0), a.current = !0, Math.abs(f.x) > 0 || Math.abs(f.y) > 0) {
      const v = _s(c);
      v && v.scrollBy({
        top: f.y,
        left: f.x
      });
    }
  }, [t, i, l, o, e]);
}
const Jo = /* @__PURE__ */ Hr({
  ...nn,
  scaleX: 1,
  scaleY: 1
});
var bn;
(function(n) {
  n[n.Uninitialized = 0] = "Uninitialized", n[n.Initializing = 1] = "Initializing", n[n.Initialized = 2] = "Initialized";
})(bn || (bn = {}));
const Bs = /* @__PURE__ */ yc(function(t) {
  var e, o, r, a;
  let {
    id: i,
    accessibility: l,
    autoScroll: s = !0,
    children: c,
    sensors: d = Op,
    collisionDetection: f = zf,
    measuring: v,
    modifiers: m,
    ...C
  } = t;
  const g = oi(Ip, void 0, Tp), [O, w] = g, [x, S] = Df(), [P, b] = Le(bn.Uninitialized), T = P === bn.Initialized, {
    draggable: {
      active: I,
      nodes: U,
      translate: $
    },
    droppable: {
      containers: j
    }
  } = O, R = I ? U.get(I) : null, ne = Xe({
    initial: null,
    translated: null
  }), B = Ze(() => {
    var Fe;
    return I != null ? {
      id: I,
      // It's possible for the active node to unmount while dragging
      data: (Fe = R == null ? void 0 : R.data) != null ? Fe : Pp,
      rect: ne
    } : null;
  }, [I, R]), re = Xe(null), [ae, he] = Le(null), [Se, pe] = Le(null), Z = jr(C, Object.values(C)), _ = Yr("DndDescribedBy", i), J = Ze(() => j.getEnabled(), [j]), Q = Rp(v), {
    droppableRects: X,
    measureDroppableContainers: Y,
    measuringScheduled: fe
  } = vp(J, {
    dragging: T,
    dependencies: [$.x, $.y],
    config: Q.droppable
  }), ve = fp(U, I), ce = Ze(() => Se ? To(Se) : null, [Se]), K = ut(), D = mp(ve, Q.draggable.measure);
  kp({
    activeNode: I ? U.get(I) : null,
    config: K.layoutShiftCompensation,
    initialRect: D,
    measure: Q.draggable.measure
  });
  const F = Ol(ve, Q.draggable.measure, D), ue = Ol(ve ? ve.parentElement : null), M = Xe({
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
  }), _e = j.getNodeFor((e = M.current.over) == null ? void 0 : e.id), Ae = Cp({
    measure: Q.dragOverlay.measure
  }), je = (o = Ae.nodeRef.current) != null ? o : ve, Ne = T ? (r = Ae.rect) != null ? r : F : null, We = !!(Ae.nodeRef.current && Ae.rect), xt = bp(We ? null : F), dt = $s(je ? Bt(je) : null), lt = yp(T ? _e ?? ve : null), nt = Sp(lt), pt = Hs(m, {
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
    draggingNodeRect: Ne,
    over: M.current.over,
    overlayNodeRect: Ae.rect,
    scrollableAncestors: lt,
    scrollableAncestorRects: nt,
    windowRect: dt
  }), Et = ce ? Un(ce, $) : null, rt = wp(lt), Je = ql(rt), Mt = ql(rt, [F]), Ge = Un(pt, Je), ot = Ne ? Wf(Ne, pt) : null, ct = B && ot ? f({
    active: B,
    collisionRect: ot,
    droppableRects: X,
    droppableContainers: J,
    pointerCoordinates: Et
  }) : null, kt = Ps(ct, "id"), [ft, vt] = Le(null), Ce = We ? pt : Un(pt, Mt), z = Hf(Ce, (a = ft == null ? void 0 : ft.rect) != null ? a : null, F), ge = $t(
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
      const be = Fe.nativeEvent, A = new He({
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
          cr(() => {
            Qe == null || Qe(Pt), b(bn.Initializing), w({
              type: Ot.DragStart,
              initialCoordinates: ee,
              active: ye
            }), x({
              type: "onDragStart",
              event: Pt
            });
          });
        },
        onMove(ee) {
          w({
            type: Ot.DragMove,
            coordinates: ee
          });
        },
        onEnd: G(Ot.DragEnd),
        onCancel: G(Ot.DragCancel)
      });
      cr(() => {
        he(A), pe(Fe.nativeEvent);
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
          re.current = null, cr(() => {
            w({
              type: ee
            }), b(bn.Uninitialized), vt(null), he(null), pe(null);
            const Tt = ee === Ot.DragEnd ? "onDragEnd" : "onDragCancel";
            if (qt) {
              const Ht = Z.current[Tt];
              Ht == null || Ht(qt), x({
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
  ), Re = $t((Fe, Me) => (He, at) => {
    const it = He.nativeEvent, be = U.get(at);
    if (
      // Another sensor is already instantiating
      re.current !== null || // No active draggable
      !be || // Event has already been captured
      it.dndKit || it.defaultPrevented
    )
      return;
    const A = {
      active: be
    };
    Fe(He, Me.options, A) === !0 && (it.dndKit = {
      capturedBy: Me.sensor
    }, re.current = at, ge(He, Me));
  }, [U, ge]), Pe = pp(d, Re);
  xp(d), Gt(() => {
    F && P === bn.Initializing && b(bn.Initialized);
  }, [F, P]), Ie(
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
      cr(() => {
        Fe == null || Fe(be), x({
          type: "onDragMove",
          event: be
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Ge.x, Ge.y]
  ), Ie(
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
      } = Z.current, A = at.get(kt), G = A && A.rect.current ? {
        id: A.id,
        rect: A.rect.current,
        data: A.data,
        disabled: A.disabled
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
      cr(() => {
        vt(G), be == null || be(ee), x({
          type: "onDragOver",
          event: ee
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [kt]
  ), Gt(() => {
    M.current = {
      activatorEvent: Se,
      active: B,
      activeNode: ve,
      collisionRect: ot,
      collisions: ct,
      droppableRects: X,
      draggableNodes: U,
      draggingNode: je,
      draggingNodeRect: Ne,
      droppableContainers: j,
      over: ft,
      scrollableAncestors: lt,
      scrollAdjustedTranslate: Ge
    }, ne.current = {
      initial: Ne,
      translated: ot
    };
  }, [B, ve, ct, ot, U, je, Ne, X, j, ft, lt, Ge]), cp({
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
    dragOverlay: Ae,
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
  }), [B, ve, F, Se, ct, ue, Ae, U, j, X, ft, Y, lt, nt, Q, fe, dt]), Ve = Ze(() => ({
    activatorEvent: Se,
    activators: Pe,
    active: B,
    activeNodeRect: F,
    ariaDescribedById: {
      draggable: _
    },
    dispatch: w,
    draggableNodes: U,
    over: ft,
    measureDroppableContainers: Y
  }), [Se, Pe, B, F, w, _, U, ft, Y]);
  return Te.createElement(Es.Provider, {
    value: S
  }, Te.createElement(Gr.Provider, {
    value: Ve
  }, Te.createElement(zs.Provider, {
    value: qe
  }, Te.createElement(Jo.Provider, {
    value: z
  }, c)), Te.createElement(_p, {
    disabled: (l == null ? void 0 : l.restoreFocus) === !1
  })), Te.createElement(Af, {
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
}), Dp = /* @__PURE__ */ Hr(null), Tl = "button", jp = "Droppable";
function Ws(n) {
  let {
    id: t,
    data: e,
    disabled: o = !1,
    attributes: r
  } = n;
  const a = Yr(jp), {
    activators: i,
    activatorEvent: l,
    active: s,
    activeNodeRect: c,
    ariaDescribedById: d,
    draggableNodes: f,
    over: v
  } = rn(Gr), {
    role: m = Tl,
    roleDescription: C = "draggable",
    tabIndex: g = 0
  } = r ?? {}, O = (s == null ? void 0 : s.id) === t, w = rn(O ? Jo : Dp), [x, S] = Po(), [P, b] = Po(), T = Ep(i, t), I = jr(e);
  Gt(
    () => (f.set(t, {
      id: t,
      key: a,
      node: x,
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
    role: m,
    tabIndex: g,
    "aria-disabled": o,
    "aria-pressed": O && m === Tl ? !0 : void 0,
    "aria-roledescription": C,
    "aria-describedby": d.draggable
  }), [o, m, g, O, C, d.draggable]);
  return {
    active: s,
    activatorEvent: l,
    activeNodeRect: c,
    attributes: U,
    isDragging: O,
    listeners: o ? void 0 : T,
    node: x,
    over: v,
    setNodeRef: S,
    setActivatorNodeRef: b,
    transform: w
  };
}
function Vs() {
  return rn(zs);
}
const Np = "Droppable", Ap = {
  timeout: 25
};
function Ks(n) {
  let {
    data: t,
    disabled: e = !1,
    id: o,
    resizeObserverConfig: r
  } = n;
  const a = Yr(Np), {
    active: i,
    dispatch: l,
    over: s,
    measureDroppableContainers: c
  } = rn(Gr), d = Xe({
    disabled: e
  }), f = Xe(!1), v = Xe(null), m = Xe(null), {
    disabled: C,
    updateMeasurementsFor: g,
    timeout: O
  } = {
    ...Ap,
    ...r
  }, w = jr(g ?? o), x = $t(
    () => {
      if (!f.current) {
        f.current = !0;
        return;
      }
      m.current != null && clearTimeout(m.current), m.current = setTimeout(() => {
        c(Array.isArray(w.current) ? w.current : [w.current]), m.current = null;
      }, O);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [O]
  ), S = Xo({
    callback: x,
    disabled: C || !i
  }), P = $t((U, $) => {
    S && ($ && (S.unobserve($), f.current = !1), U && S.observe(U));
  }, [S]), [b, T] = Po(P), I = jr(t);
  return Ie(() => {
    !S || !b.current || (S.disconnect(), f.current = !1, S.observe(b.current));
  }, [b, S]), Gt(
    () => (l({
      type: Ot.RegisterDroppable,
      element: {
        id: o,
        key: a,
        disabled: e,
        node: b,
        rect: v,
        data: I
      }
    }), () => l({
      type: Ot.UnregisterDroppable,
      key: a,
      id: o
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [o]
  ), Ie(() => {
    e !== d.current.disabled && (l({
      type: Ot.SetDroppableDisabled,
      id: o,
      key: a,
      disabled: e
    }), d.current.disabled = e);
  }, [o, a, e, l]), {
    active: i,
    rect: v,
    isOver: (s == null ? void 0 : s.id) === o,
    node: b,
    over: s,
    setNodeRef: T
  };
}
function Lp(n) {
  let {
    animation: t,
    children: e
  } = n;
  const [o, r] = Le(null), [a, i] = Le(null), l = qo(e);
  return !e && !o && l && r(l), Gt(() => {
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
  }, [t, o, a]), Te.createElement(Te.Fragment, null, e, o ? wc(o, {
    ref: i
  }) : null);
}
const $p = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function Fp(n) {
  let {
    children: t
  } = n;
  return Te.createElement(Gr.Provider, {
    value: Ms
  }, Te.createElement(Jo.Provider, {
    value: $p
  }, t));
}
const Mp = {
  position: "fixed",
  touchAction: "none"
}, zp = (n) => Ko(n) ? "transform 250ms ease" : void 0, Hp = /* @__PURE__ */ xc((n, t) => {
  let {
    as: e,
    activatorEvent: o,
    adjustScale: r,
    children: a,
    className: i,
    rect: l,
    style: s,
    transform: c,
    transition: d = zp
  } = n;
  if (!l)
    return null;
  const f = r ? c : {
    ...c,
    scaleX: 1,
    scaleY: 1
  }, v = {
    ...Mp,
    width: l.width,
    height: l.height,
    top: l.top,
    left: l.left,
    transform: an.Transform.toString(f),
    transformOrigin: r && o ? Lf(o, l) : void 0,
    transition: typeof d == "function" ? d(o) : d,
    ...s
  };
  return Te.createElement(e, {
    className: i,
    style: v,
    ref: t
  }, a);
}), Bp = (n) => (t) => {
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
}, Wp = (n) => {
  let {
    transform: {
      initial: t,
      final: e
    }
  } = n;
  return [{
    transform: an.Transform.toString(t)
  }, {
    transform: an.Transform.toString(e)
  }];
}, Vp = {
  duration: 250,
  easing: "ease",
  keyframes: Wp,
  sideEffects: /* @__PURE__ */ Bp({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function Kp(n) {
  let {
    config: t,
    draggableNodes: e,
    droppableContainers: o,
    measuringConfiguration: r
  } = n;
  return Vo((a, i) => {
    if (t === null)
      return;
    const l = e.get(a);
    if (!l)
      return;
    const s = l.node.current;
    if (!s)
      return;
    const c = Fs(i);
    if (!c)
      return;
    const {
      transform: d
    } = Bt(i).getComputedStyle(i), f = Is(d);
    if (!f)
      return;
    const v = typeof t == "function" ? t : Up(t);
    return As(s, r.draggable.measure), v({
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
      transform: f
    });
  });
}
function Up(n) {
  const {
    duration: t,
    easing: e,
    sideEffects: o,
    keyframes: r
  } = {
    ...Vp,
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
    }, v = {
      x: s.x - d.x,
      y: s.y - d.y,
      ...f
    }, m = r({
      ...c,
      active: i,
      dragOverlay: l,
      transform: {
        initial: s,
        final: v
      }
    }), [C] = m, g = m[m.length - 1];
    if (JSON.stringify(C) === JSON.stringify(g))
      return;
    const O = o == null ? void 0 : o({
      active: i,
      dragOverlay: l,
      ...c
    }), w = l.node.animate(m, {
      duration: t,
      easing: e,
      fill: "forwards"
    });
    return new Promise((x) => {
      w.onfinish = () => {
        O == null || O(), x();
      };
    });
  };
}
let Il = 0;
function Yp(n) {
  return Ze(() => {
    if (n != null)
      return Il++, Il;
  }, [n]);
}
const Gp = /* @__PURE__ */ Te.memo((n) => {
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
    activatorEvent: d,
    active: f,
    activeNodeRect: v,
    containerNodeRect: m,
    draggableNodes: C,
    droppableContainers: g,
    dragOverlay: O,
    over: w,
    measuringConfiguration: x,
    scrollableAncestors: S,
    scrollableAncestorRects: P,
    windowRect: b
  } = Vs(), T = rn(Jo), I = Yp(f == null ? void 0 : f.id), U = Hs(i, {
    activatorEvent: d,
    active: f,
    activeNodeRect: v,
    containerNodeRect: m,
    draggingNodeRect: O.rect,
    over: w,
    overlayNodeRect: O.rect,
    scrollableAncestors: S,
    scrollableAncestorRects: P,
    transform: T,
    windowRect: b
  }), $ = hi(v), j = Kp({
    config: o,
    draggableNodes: C,
    droppableContainers: g,
    measuringConfiguration: x
  }), R = $ ? O.setRef : void 0;
  return Te.createElement(Fp, null, Te.createElement(Lp, {
    animation: j
  }, f && I ? Te.createElement(Hp, {
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
      ...r
    },
    transform: U
  }, e) : null));
});
function Yn(n, t, e) {
  const o = n.slice();
  return o.splice(e < 0 ? o.length + e : e, 0, o.splice(t, 1)[0]), o;
}
function Xp(n, t) {
  return n.reduce((e, o, r) => {
    const a = t.get(o);
    return a && (e[r] = a), e;
  }, Array(n.length));
}
function oo(n) {
  return n !== null && n >= 0;
}
function Jp(n, t) {
  if (n === t)
    return !0;
  if (n.length !== t.length)
    return !1;
  for (let e = 0; e < n.length; e++)
    if (n[e] !== t[e])
      return !1;
  return !0;
}
function Zp(n) {
  return typeof n == "boolean" ? {
    draggable: n,
    droppable: n
  } : n;
}
const Us = (n) => {
  let {
    rects: t,
    activeIndex: e,
    overIndex: o,
    index: r
  } = n;
  const a = Yn(t, o, e), i = t[r], l = a[r];
  return !l || !i ? null : {
    x: l.left - i.left,
    y: l.top - i.top,
    scaleX: l.width / i.width,
    scaleY: l.height / i.height
  };
}, Qp = (n) => {
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
}, ao = {
  scaleX: 1,
  scaleY: 1
}, ev = (n) => {
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
      ...ao
    } : null;
  }
  const s = tv(a, r, e);
  return r > e && r <= i ? {
    x: 0,
    y: -l.height - s,
    ...ao
  } : r < e && r >= i ? {
    x: 0,
    y: l.height + s,
    ...ao
  } : {
    x: 0,
    y: 0,
    ...ao
  };
};
function tv(n, t, e) {
  const o = n[t], r = n[t - 1], a = n[t + 1];
  return o ? e < t ? r ? o.top - (r.top + r.height) : a ? a.top - (o.top + o.height) : 0 : a ? a.top - (o.top + o.height) : r ? o.top - (r.top + r.height) : 0 : 0;
}
const Ys = "Sortable", Gs = /* @__PURE__ */ Te.createContext({
  activeIndex: -1,
  containerId: Ys,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: Us,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function Xs(n) {
  let {
    children: t,
    id: e,
    items: o,
    strategy: r = Us,
    disabled: a = !1
  } = n;
  const {
    active: i,
    dragOverlay: l,
    droppableRects: s,
    over: c,
    measureDroppableContainers: d
  } = Vs(), f = Yr(Ys, e), v = l.rect !== null, m = Ze(() => o.map((T) => typeof T == "object" && "id" in T ? T.id : T), [o]), C = i != null, g = i ? m.indexOf(i.id) : -1, O = c ? m.indexOf(c.id) : -1, w = Xe(m), x = !Jp(m, w.current), S = O !== -1 && g === -1 || x, P = Zp(a);
  Gt(() => {
    x && C && d(m);
  }, [x, m, C, d]), Ie(() => {
    w.current = m;
  }, [m]);
  const b = Ze(
    () => ({
      activeIndex: g,
      containerId: f,
      disabled: P,
      disableTransforms: S,
      items: m,
      overIndex: O,
      useDragOverlay: v,
      sortedRects: Xp(m, s),
      strategy: r
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [g, f, P.draggable, P.droppable, S, m, O, s, v, r]
  );
  return Te.createElement(Gs.Provider, {
    value: b
  }, t);
}
const nv = (n) => {
  let {
    id: t,
    items: e,
    activeIndex: o,
    overIndex: r
  } = n;
  return Yn(e, o, r).indexOf(t);
}, rv = (n) => {
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
}, ov = {
  duration: 200,
  easing: "ease"
}, Js = "transform", av = /* @__PURE__ */ an.Transition.toString({
  property: Js,
  duration: 0,
  easing: "linear"
}), iv = {
  roleDescription: "sortable"
};
function lv(n) {
  let {
    disabled: t,
    index: e,
    node: o,
    rect: r
  } = n;
  const [a, i] = Le(null), l = Xe(e);
  return Gt(() => {
    if (!t && e !== l.current && o.current) {
      const s = r.current;
      if (s) {
        const c = rr(o.current, {
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
  }, [t, e, o, r]), Ie(() => {
    a && i(null);
  }, [a]), a;
}
function Zs(n) {
  let {
    animateLayoutChanges: t = rv,
    attributes: e,
    disabled: o,
    data: r,
    getNewIndex: a = nv,
    id: i,
    strategy: l,
    resizeObserverConfig: s,
    transition: c = ov
  } = n;
  const {
    items: d,
    containerId: f,
    activeIndex: v,
    disabled: m,
    disableTransforms: C,
    sortedRects: g,
    overIndex: O,
    useDragOverlay: w,
    strategy: x
  } = rn(Gs), S = sv(o, m), P = d.indexOf(i), b = Ze(() => ({
    sortable: {
      containerId: f,
      index: P,
      items: d
    },
    ...r
  }), [f, r, P, d]), T = Ze(() => d.slice(d.indexOf(i)), [d, i]), {
    rect: I,
    node: U,
    isOver: $,
    setNodeRef: j
  } = Ks({
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
  } = Ws({
    id: i,
    data: b,
    attributes: {
      ...iv,
      ...e
    },
    disabled: S.draggable
  }), J = Sf(j, ae), Q = !!R, X = Q && !C && oo(v) && oo(O), Y = !w && Se, fe = Y && X ? _ : null, ce = X ? fe ?? (l ?? x)({
    rects: g,
    activeNodeRect: B,
    activeIndex: v,
    overIndex: O,
    index: P
  }) : null, K = oo(v) && oo(O) ? a({
    id: i,
    items: d,
    activeIndex: v,
    overIndex: O
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
  }), _e = lv({
    disabled: !M,
    index: P,
    node: U,
    rect: I
  });
  return Ie(() => {
    Q && F.current.newIndex !== K && (F.current.newIndex = K), f !== F.current.containerId && (F.current.containerId = f), d !== F.current.items && (F.current.items = d);
  }, [Q, K, f, d]), Ie(() => {
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
    activeIndex: v,
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
    overIndex: O,
    over: pe,
    setNodeRef: J,
    setActivatorNodeRef: Z,
    setDroppableNodeRef: j,
    setDraggableNodeRef: ae,
    transform: _e ?? ce,
    transition: Ae()
  };
  function Ae() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      _e || // Or to prevent items jumping to back to their "new" position when items change
      ue && F.current.newIndex === P
    )
      return av;
    if (!(Y && !Ko(ne) || !c) && (Q || M))
      return an.Transition.toString({
        ...c,
        property: Js
      });
  }
}
function sv(n, t) {
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
function ko(n) {
  if (!n)
    return !1;
  const t = n.data.current;
  return !!(t && "sortable" in t && typeof t.sortable == "object" && "containerId" in t.sortable && "items" in t.sortable && "index" in t.sortable);
}
const cv = [ze.Down, ze.Right, ze.Up, ze.Left], Qs = (n, t) => {
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
  if (cv.includes(n.code)) {
    if (n.preventDefault(), !e || !o)
      return;
    const s = [];
    a.getEnabled().forEach((f) => {
      if (!f || f != null && f.disabled)
        return;
      const v = r.get(f.id);
      if (v)
        switch (n.code) {
          case ze.Down:
            o.top < v.top && s.push(f);
            break;
          case ze.Up:
            o.top > v.top && s.push(f);
            break;
          case ze.Left:
            o.left > v.left && s.push(f);
            break;
          case ze.Right:
            o.left < v.left && s.push(f);
            break;
        }
    });
    const c = Ff({
      active: e,
      collisionRect: o,
      droppableRects: r,
      droppableContainers: s,
      pointerCoordinates: null
    });
    let d = Ps(c, "id");
    if (d === (i == null ? void 0 : i.id) && c.length > 1 && (d = c[1].id), d != null) {
      const f = a.get(e.id), v = a.get(d), m = v ? r.get(v.id) : null, C = v == null ? void 0 : v.node.current;
      if (C && m && f && v) {
        const O = Uo(C).some((T, I) => l[I] !== T), w = ec(f, v), x = uv(f, v), S = O || !w ? {
          x: 0,
          y: 0
        } : {
          x: x ? o.width - m.width : 0,
          y: x ? o.height - m.height : 0
        }, P = {
          x: m.left,
          y: m.top
        };
        return S.x && S.y ? P : Nr(P, S);
      }
    }
  }
};
function ec(n, t) {
  return !ko(n) || !ko(t) ? !1 : n.data.current.sortable.containerId === t.data.current.sortable.containerId;
}
function uv(n, t) {
  return !ko(n) || !ko(t) || !ec(n, t) ? !1 : n.data.current.sortable.index < t.data.current.sortable.index;
}
function xr() {
  return xr = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, xr.apply(this, arguments);
}
function Lr(n) {
  "@babel/helpers - typeof";
  return Lr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Lr(n);
}
function dv(n, t) {
  if (Lr(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t || "default");
    if (Lr(o) !== "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function fv(n) {
  var t = dv(n, "string");
  return Lr(t) === "symbol" ? t : String(t);
}
function fn(n, t, e) {
  return t = fv(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
var pv = {
  root: function(t) {
    var e = t.props;
    return we("p-badge p-component", fn({
      "p-badge-no-gutter": L.isNotEmpty(e.value) && String(e.value).length === 1,
      "p-badge-dot": L.isEmpty(e.value),
      "p-badge-lg": e.size === "large",
      "p-badge-xl": e.size === "xlarge"
    }, "p-badge-".concat(e.severity), e.severity !== null));
  }
}, vv = `
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
`, io = $e.extend({
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
    classes: pv,
    styles: vv
  }
});
function _l(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function mv(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _l(Object(e), !0).forEach(function(o) {
      fn(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : _l(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
var tc = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Ft(), o = u.useContext(yt), r = io.getProps(n, o), a = io.setMetaData(mv({
    props: r
  }, r.__parentMetadata)), i = a.ptm, l = a.cx, s = a.isUnstyled;
  Jt(io.css.styles, s, {
    name: "badge"
  });
  var c = u.useRef(null);
  u.useImperativeHandle(t, function() {
    return {
      props: r,
      getElement: function() {
        return c.current;
      }
    };
  });
  var d = e({
    ref: c,
    style: r.style,
    className: we(r.className, l("root"))
  }, io.getOtherProps(r), i("root"));
  return /* @__PURE__ */ u.createElement("span", d, r.value);
}));
tc.displayName = "Badge";
var gv = {
  icon: function(t) {
    var e = t.props;
    return we("p-button-icon p-c", fn({}, "p-button-icon-".concat(e.iconPos), e.label));
  },
  loadingIcon: function(t) {
    var e = t.props, o = t.className;
    return we(o, {
      "p-button-loading-icon": e.loading
    });
  },
  label: "p-button-label p-c",
  root: function(t) {
    var e = t.props, o = t.size, r = t.disabled;
    return we("p-button p-component", fn(fn(fn(fn({
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
}, lo = $e.extend({
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
    classes: gv
  }
});
function Rl(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function ma(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rl(Object(e), !0).forEach(function(o) {
      fn(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Rl(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
var tn = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Ft(), o = u.useContext(yt), r = lo.getProps(n, o), a = r.disabled || r.loading, i = ma(ma({
    props: r
  }, r.__parentMetadata), {}, {
    context: {
      disabled: a
    }
  }), l = lo.setMetaData(i), s = l.ptm, c = l.cx, d = l.isUnstyled;
  Jt(lo.css.styles, d, {
    name: "button",
    styled: !0
  });
  var f = u.useRef(t);
  if (u.useEffect(function() {
    L.combinedRefs(f, t);
  }, [f, t]), r.visible === !1)
    return null;
  var v = function() {
    var $ = we("p-button-icon p-c", fn({}, "p-button-icon-".concat(r.iconPos), r.label)), j = e({
      className: c("icon")
    }, s("icon"));
    $ = we($, {
      "p-button-loading-icon": r.loading
    });
    var R = e({
      className: c("loadingIcon", {
        className: $
      })
    }, s("loadingIcon")), ne = r.loading ? r.loadingIcon || /* @__PURE__ */ u.createElement(Ho, xr({}, R, {
      spin: !0
    })) : r.icon;
    return Lt.getJSXIcon(ne, ma({}, j), {
      props: r
    });
  }, m = function() {
    var $ = e({
      className: c("label")
    }, s("label"));
    return r.label ? /* @__PURE__ */ u.createElement("span", $, r.label) : !r.children && !r.label && /* @__PURE__ */ u.createElement("span", xr({}, $, {
      dangerouslySetInnerHTML: {
        __html: "&nbsp;"
      }
    }));
  }, C = function() {
    if (r.badge) {
      var $ = e({
        className: we(r.badgeClassName),
        value: r.badge,
        unstyled: r.unstyled,
        __parentMetadata: {
          parent: i
        }
      }, s("badge"));
      return /* @__PURE__ */ u.createElement(tc, $, r.badge);
    }
    return null;
  }, g = !a || r.tooltipOptions && r.tooltipOptions.showOnDisabled, O = L.isNotEmpty(r.tooltip) && g, w = {
    large: "lg",
    small: "sm"
  }, x = w[r.size], S = v(), P = m(), b = C(), T = r.label ? r.label + (r.badge ? " " + r.badge : "") : r["aria-label"], I = e({
    ref: f,
    "aria-label": T,
    "data-pc-autofocus": r.autoFocus,
    className: we(r.className, c("root", {
      size: x,
      disabled: a
    })),
    disabled: a
  }, lo.getOtherProps(r), s("root"));
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement("button", I, S, P, r.children, b, /* @__PURE__ */ u.createElement(Sn, null)), O && /* @__PURE__ */ u.createElement(Wr, xr({
    target: f,
    content: r.tooltip,
    pt: s("tooltip")
  }, r.tooltipOptions)));
}));
tn.displayName = "Button";
function Er() {
  return Er = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, Er.apply(this, arguments);
}
function $r(n) {
  "@babel/helpers - typeof";
  return $r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $r(n);
}
function hv(n, t) {
  if ($r(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t || "default");
    if ($r(o) !== "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function bv(n) {
  var t = hv(n, "string");
  return $r(t) === "symbol" ? t : String(t);
}
function yv(n, t, e) {
  return t = bv(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
var wv = {
  root: function(t) {
    var e = t.props, o = t.context;
    return we("p-radiobutton p-component", {
      "p-highlight": e.checked,
      "p-disabled": e.disabled,
      "p-invalid": e.invalid,
      "p-variant-filled": e.variant ? e.variant === "filled" : o && o.inputStyle === "filled"
    });
  },
  box: "p-radiobutton-box",
  input: "p-radiobutton-input",
  icon: "p-radiobutton-icon"
}, so = $e.extend({
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
    classes: wv
  }
});
function kl(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function xv(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? kl(Object(e), !0).forEach(function(o) {
      yv(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : kl(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
var Ua = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Ft(), o = u.useContext(yt), r = so.getProps(n, o), a = u.useRef(null), i = u.useRef(r.inputRef), l = so.setMetaData({
    props: r
  }), s = l.ptm, c = l.cx, d = l.isUnstyled;
  Jt(so.css.styles, d, {
    name: "radiobutton"
  });
  var f = function(b) {
    v(b);
  }, v = function(b) {
    if (!(r.disabled || r.readonly) && r.onChange) {
      var T = r.checked, I = b.target instanceof HTMLDivElement, U = b.target === i.current, $ = U && b.target.checked !== T, j = I && (N.hasClass(a.current, "p-radiobutton-checked") === T ? !T : !1), R = !T, ne = {
        originalEvent: b,
        value: r.value,
        checked: R,
        stopPropagation: function() {
          b == null || b.stopPropagation();
        },
        preventDefault: function() {
          b == null || b.preventDefault();
        },
        target: {
          type: "radio",
          name: r.name,
          id: r.id,
          value: r.value,
          checked: R
        }
      };
      if ($ || j) {
        var B;
        if (r == null || (B = r.onChange) === null || B === void 0 || B.call(r, ne), b.defaultPrevented)
          return;
        j && (i.current.checked = R);
      }
      N.focus(i.current);
    }
  }, m = function(b) {
    var T;
    r == null || (T = r.onFocus) === null || T === void 0 || T.call(r, b);
  }, C = function(b) {
    var T;
    r == null || (T = r.onBlur) === null || T === void 0 || T.call(r, b);
  };
  u.useImperativeHandle(t, function() {
    return {
      props: r,
      select: f,
      focus: function() {
        return N.focus(i.current);
      },
      getElement: function() {
        return a.current;
      },
      getInput: function() {
        return i.current;
      }
    };
  }), u.useEffect(function() {
    i.current && (i.current.checked = r.checked);
  }, [r.checked]), u.useEffect(function() {
    L.combinedRefs(i, r.inputRef);
  }, [i, r.inputRef]), Xt(function() {
    r.autoFocus && N.focus(i.current, r.autoFocus);
  });
  var g = L.isNotEmpty(r.tooltip), O = so.getOtherProps(r), w = e({
    id: r.id,
    className: we(r.className, c("root", {
      context: o
    })),
    style: r.style,
    "data-p-checked": r.checked
  }, O, s("root"));
  delete w.input, delete w.box, delete w.icon;
  var x = function() {
    var b = L.reduceKeys(O, N.ARIA_PROPS), T = e(xv({
      id: r.inputId,
      type: "radio",
      name: r.name,
      defaultChecked: r.checked,
      onFocus: m,
      onBlur: C,
      onChange: v,
      disabled: r.disabled,
      readOnly: r.readonly,
      required: r.required,
      tabIndex: r.tabIndex,
      className: c("input")
    }, b), n.input, s("input"));
    return /* @__PURE__ */ u.createElement("input", Er({
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
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement("div", Er({
    ref: a
  }, w), x(), S()), g && /* @__PURE__ */ u.createElement(Wr, Er({
    target: a,
    content: r.tooltip,
    pt: s("tooltip")
  }, r.tooltipOptions)));
}));
Ua.displayName = "RadioButton";
const Ev = ({ option: n, onChange: t, index: e }) => {
  const [o, r] = Le(n), a = (v) => {
    const m = {
      value: o.value,
      label: o.label,
      [v.target.name]: v.target.value
    };
    r(m), t(m);
  };
  Ie(() => {
    r(n);
  }, [n]);
  const {
    attributes: i,
    listeners: l,
    setNodeRef: s,
    setActivatorNodeRef: c,
    transform: d
  } = Zs({ id: e }), f = {
    transform: an.Transform.toString(d)
    // transition,
  };
  return /* @__PURE__ */ y.jsx(y.Fragment, { children: /* @__PURE__ */ y.jsxs("div", { className: "flex flex-row gap-2", ref: s, style: f, ...i, children: [
    /* @__PURE__ */ y.jsx(
      tn,
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
    /* @__PURE__ */ y.jsxs("div", { className: "p-inputgroup flex-1", children: [
      /* @__PURE__ */ y.jsx(
        Dt,
        {
          id: "value",
          value: o.value,
          name: "value",
          onChange: a,
          className: "flex-1",
          placeholder: "Value"
        }
      ),
      /* @__PURE__ */ y.jsx(
        Dt,
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
    /* @__PURE__ */ y.jsx(tn, { icon: "pi pi-trash", onClick: () => t(null) })
  ] }) });
}, Sv = ({ onInsert: n }) => {
  const t = {
    value: "",
    label: ""
  }, [e, o] = Le(t), r = (i) => {
    const l = {
      value: e.value,
      label: e.label,
      [i.target.name]: i.target.value
    };
    o(l);
  }, a = () => {
    n({ value: e.value, label: e.label }), o(t);
  };
  return /* @__PURE__ */ y.jsx(y.Fragment, { children: /* @__PURE__ */ y.jsxs("div", { className: "flex flex-row gap-2", children: [
    /* @__PURE__ */ y.jsxs("div", { className: "p-inputgroup flex-1", children: [
      /* @__PURE__ */ y.jsx(
        Dt,
        {
          id: "value",
          value: e.value,
          name: "value",
          onChange: r,
          className: "",
          placeholder: "Value"
        }
      ),
      /* @__PURE__ */ y.jsx(
        Dt,
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
    /* @__PURE__ */ y.jsx(
      tn,
      {
        icon: "pi pi-plus",
        onClick: a
      }
    )
  ] }) });
}, Cv = ({ item: n, onChange: t, form: e, config: o }) => {
  const [r, a] = Le({ ...En, ...n }), i = (d, f) => {
    const v = jn(r.options);
    d ? v[f] = d : v.splice(f, 1);
    const m = { ...r, options: v };
    a(m), t(m);
  }, l = (d) => {
    const f = jn(r.options);
    f.push(d);
    const v = { ...r, options: f };
    a(v), t(v);
  }, s = Ss(
    _o(Go),
    _o(Yo, {
      coordinateGetter: Qs
    })
  );
  function c(d) {
    const { active: f, over: v } = d;
    if (v && f.id !== v.id) {
      let m = function(O) {
        return parseInt(O.replace("option-", ""));
      };
      const C = Yn(r.options, m(v.id.toString()), m(f.id.toString())), g = { ...r, options: C };
      a(g), t(g);
    }
  }
  return /* @__PURE__ */ y.jsx(y.Fragment, { children: /* @__PURE__ */ y.jsxs("div", { className: "form-item flex flex-column gap-4", children: [
    /* @__PURE__ */ y.jsx(
      Bs,
      {
        sensors: s,
        collisionDetection: qs,
        onDragEnd: c,
        children: /* @__PURE__ */ y.jsx(
          Xs,
          {
            items: r.options.map((d, f) => `option-${f}`),
            strategy: ev,
            children: r.options.map((d, f) => /* @__PURE__ */ y.jsx(
              Ev,
              {
                option: d,
                index: `option-${f}`,
                onChange: (v) => {
                  i(v, f);
                }
              },
              `option-${f}`
            ))
          }
        )
      }
    ),
    /* @__PURE__ */ y.jsx(
      Sv,
      {
        onInsert: l
      },
      "item-new"
    )
  ] }) });
}, Ov = ({ item: n, onChange: t, form: e, config: o }) => {
  const [r, a] = Le({ ...En, ...n }), i = (l) => {
    const s = { ...r, [l.target.name]: l.target.value };
    a(s), t(s);
  };
  return Ie(() => {
    a({ ...En, ...n });
  }, [n]), /* @__PURE__ */ y.jsx(y.Fragment, { children: /* @__PURE__ */ y.jsxs(vn, { activeIndex: 0, children: [
    /* @__PURE__ */ y.jsx(on, { header: "General", children: /* @__PURE__ */ y.jsxs("div", { className: "form-item flex flex-column gap-4", children: [
      /* @__PURE__ */ y.jsxs("div", { className: "flex flex-column gap-2", children: [
        /* @__PURE__ */ y.jsx("label", { htmlFor: "label", children: "Label" }),
        /* @__PURE__ */ y.jsx(
          Dt,
          {
            id: "label",
            value: r.label || "",
            name: "label",
            onChange: i,
            className: "w-full"
          }
        )
      ] }),
      /* @__PURE__ */ y.jsxs("div", { className: "flex flex-column gap-2", children: [
        /* @__PURE__ */ y.jsx("label", { htmlFor: "placeholder", children: "Placeholder" }),
        /* @__PURE__ */ y.jsx(
          Dt,
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
    /* @__PURE__ */ y.jsxs(on, { header: "Options", children: [
      o.external_select_options.map((l) => /* @__PURE__ */ y.jsxs("div", { className: "flex align-items-center", children: [
        /* @__PURE__ */ y.jsx(
          Ua,
          {
            inputId: l.key,
            name: "source",
            value: l.key,
            onChange: i,
            checked: r.source === l.key
          }
        ),
        /* @__PURE__ */ y.jsx("label", { htmlFor: l.key, className: "ml-2", children: l.label })
      ] }, l.key)),
      /* @__PURE__ */ y.jsxs("div", { className: "flex align-items-center", children: [
        /* @__PURE__ */ y.jsx(
          Ua,
          {
            inputId: "local",
            name: "source",
            value: "local",
            onChange: i,
            checked: r.source === "local"
          }
        ),
        /* @__PURE__ */ y.jsx("label", { htmlFor: "local", className: "ml-2", children: "Custom" })
      ] }, "local"),
      /* @__PURE__ */ y.jsx("div", { className: "mt-4", children: r.source === "local" && /* @__PURE__ */ y.jsx(Cv, { item: r, onChange: t, config: o, form: e }) })
    ] }, "options")
  ] }) });
}, Pv = (n) => ({}), qv = new er({
  type: En.type,
  form: new Yt({
    render: wf,
    validation: xf
  }),
  settings: new Yt({
    render: Ov,
    validation: Pv
  }),
  heading: "Select box",
  description: "select from a list of items in a drop down",
  hidden: !1,
  icon: Ef,
  data: En
}), Dn = {
  id: Cn(),
  type: "input-text",
  label: "",
  value: "",
  placeholder: ""
}, Tv = ({ item: n, onChange: t, config: e }) => {
  const [o, r] = Le({ ...Dn, ...n });
  Ie(() => {
    r({ ...Dn, ...n });
  }, [n]);
  const a = (l) => {
    const s = { ...Dn, ...e, value: l.target.value };
    t(s);
  }, i = Math.random().toString(36).substring(2, 15);
  return /* @__PURE__ */ y.jsx(y.Fragment, { children: /* @__PURE__ */ y.jsxs("div", { className: "flex flex-column gap-2", children: [
    /* @__PURE__ */ y.jsx("label", { htmlFor: i, children: o.label }),
    /* @__PURE__ */ y.jsx(
      Dt,
      {
        value: o.value,
        onChange: a,
        placeholder: o.placeholder,
        className: "w-full",
        id: i
      }
    )
  ] }) });
}, Iv = (n) => ({});
var Dl;
function Ya() {
  return Ya = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e) ({}).hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, Ya.apply(null, arguments);
}
var _v = function(t) {
  return /* @__PURE__ */ u.createElement("svg", Ya({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, t), Dl || (Dl = /* @__PURE__ */ u.createElement("path", {
    d: "M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-1.8l18-48h159.6l18 48H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-25.8zM279.8 304H168.2L224 155.1z"
  })));
};
const Rv = ({ item: n, onChange: t, config: e }) => {
  const [o, r] = Le({ ...Dn, ...n }), a = (i) => {
    const l = { ...o, [i.target.name]: i.target.value };
    r(l), t(l);
  };
  return Ie(() => {
    r({ ...Dn, ...n });
  }, [n]), /* @__PURE__ */ y.jsx(y.Fragment, { children: /* @__PURE__ */ y.jsx(vn, { activeIndex: 0, children: /* @__PURE__ */ y.jsx(on, { header: "General", children: /* @__PURE__ */ y.jsxs("div", { className: "form-item flex flex-column gap-4", children: [
    /* @__PURE__ */ y.jsxs("div", { className: "flex flex-column gap-2", children: [
      /* @__PURE__ */ y.jsx("label", { htmlFor: "label", children: "Label" }),
      /* @__PURE__ */ y.jsx(
        Dt,
        {
          id: "label",
          value: o.label || "",
          name: "label",
          onChange: a,
          className: "w-full"
        }
      )
    ] }),
    /* @__PURE__ */ y.jsxs("div", { className: "flex flex-column gap-2", children: [
      /* @__PURE__ */ y.jsx("label", { htmlFor: "placeholder", children: "Placeholder" }),
      /* @__PURE__ */ y.jsx(
        Dt,
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
}, kv = (n) => ({}), Dv = new er({
  type: Dn.type,
  form: new Yt({
    render: Tv,
    validation: Iv
  }),
  settings: new Yt({
    render: Rv,
    validation: kv
  }),
  heading: "Text input",
  description: "a simple box to insert a value into",
  hidden: !1,
  icon: _v,
  data: Dn
}), Zo = new Ao(new No({ label: "Inputs" }));
Zo.registerItem(Hd);
Zo.registerItem(qv);
Zo.registerItem(Dv);
const Qn = {
  id: Cn(),
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
class bi {
  static fromPoints(t, e) {
    const o = this.calculateControlPoints(t[0], t[1], t[2]).c2, r = this.calculateControlPoints(t[1], t[2], t[3]).c1;
    return new bi(t[1], o, r, t[2], e.start, e.end);
  }
  static calculateControlPoints(t, e, o) {
    const r = t.x - e.x, a = t.y - e.y, i = e.x - o.x, l = e.y - o.y, s = { x: (t.x + e.x) / 2, y: (t.y + e.y) / 2 }, c = { x: (e.x + o.x) / 2, y: (e.y + o.y) / 2 }, d = Math.sqrt(r * r + a * a), f = Math.sqrt(i * i + l * l), v = s.x - c.x, m = s.y - c.y, C = d + f == 0 ? 0 : f / (d + f), g = { x: c.x + v * C, y: c.y + m * C }, O = e.x - g.x, w = e.y - g.y;
    return {
      c1: new Do(s.x + O, s.y + w),
      c2: new Do(c.x + O, c.y + w)
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
        const c = l - o, d = s - r;
        e += Math.sqrt(c * c + d * d);
      }
      o = l, r = s;
    }
    return e;
  }
  point(t, e, o, r, a) {
    return e * (1 - t) * (1 - t) * (1 - t) + 3 * o * (1 - t) * (1 - t) * t + 3 * r * (1 - t) * t * t + a * t * t * t;
  }
}
class jv {
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
function Nv(n, t = 250) {
  let e = 0, o = null, r, a, i;
  const l = () => {
    e = Date.now(), o = null, r = n.apply(a, i), o || (a = null, i = []);
  };
  return function(...c) {
    const d = Date.now(), f = t - (d - e);
    return a = this, i = c, f <= 0 || f > t ? (o && (clearTimeout(o), o = null), e = d, r = n.apply(a, i), o || (a = null, i = [])) : o || (o = window.setTimeout(l, f)), r;
  };
}
class jo extends jv {
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
    }, this.velocityFilterWeight = e.velocityFilterWeight || 0.7, this.minWidth = e.minWidth || 0.5, this.maxWidth = e.maxWidth || 2.5, this.throttle = (o = e.throttle) !== null && o !== void 0 ? o : 16, this.minDistance = (r = e.minDistance) !== null && r !== void 0 ? r : 5, this.dotSize = e.dotSize || 0, this.penColor = e.penColor || "black", this.backgroundColor = e.backgroundColor || "rgba(0,0,0,0)", this.compositeOperation = e.compositeOperation || "source-over", this.canvasContextOptions = (a = e.canvasContextOptions) !== null && a !== void 0 ? a : {}, this._strokeMoveUpdate = this.throttle ? Nv(jo.prototype._strokeUpdate, this.throttle) : jo.prototype._strokeUpdate, this._ctx = t.getContext("2d", this.canvasContextOptions), this.clear(), this.on();
  }
  clear() {
    const { _ctx: t, canvas: e } = this;
    t.fillStyle = this.backgroundColor, t.clearRect(0, 0, e.width, e.height), t.fillRect(0, 0, e.width, e.height), this._data = [], this._reset(this._getPointGroupOptions()), this._isEmpty = !0;
  }
  fromDataURL(t, e = {}) {
    return new Promise((o, r) => {
      const a = new Image(), i = e.ratio || window.devicePixelRatio || 1, l = e.width || this.canvas.width / i, s = e.height || this.canvas.height / i, c = e.xOffset || 0, d = e.yOffset || 0;
      this._reset(this._getPointGroupOptions()), a.onload = () => {
        this._ctx.drawImage(a, c, d, l, s), o();
      }, a.onerror = (f) => {
        r(f);
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
      const r = this._calculateCurveWidths(o[1], o[2], e), a = bi.fromPoints(o, r);
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
      const l = i / a, s = l * l, c = s * l, d = 1 - l, f = d * d, v = f * d;
      let m = v * t.startPoint.x;
      m += 3 * f * l * t.control1.x, m += 3 * d * s * t.control2.x, m += c * t.endPoint.x;
      let C = v * t.startPoint.y;
      C += 3 * f * l * t.control1.y, C += 3 * d * s * t.control2.y, C += c * t.endPoint.y;
      const g = Math.min(t.startWidth + c * r, e.maxWidth);
      this._drawCurveSegment(m, C, g);
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
          const d = this._addPoint(c, i);
          d && e(d, i);
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
    return this._fromData(e, (c, { penColor: d }) => {
      const f = document.createElement("path");
      if (!isNaN(c.control1.x) && !isNaN(c.control1.y) && !isNaN(c.control2.x) && !isNaN(c.control2.y)) {
        const v = `M ${c.startPoint.x.toFixed(3)},${c.startPoint.y.toFixed(3)} C ${c.control1.x.toFixed(3)},${c.control1.y.toFixed(3)} ${c.control2.x.toFixed(3)},${c.control2.y.toFixed(3)} ${c.endPoint.x.toFixed(3)},${c.endPoint.y.toFixed(3)}`;
        f.setAttribute("d", v), f.setAttribute("stroke-width", (c.endWidth * 2.25).toFixed(3)), f.setAttribute("stroke", d), f.setAttribute("fill", "none"), f.setAttribute("stroke-linecap", "round"), s.appendChild(f);
      }
    }, (c, { penColor: d, dotSize: f, minWidth: v, maxWidth: m }) => {
      const C = document.createElement("circle"), g = f > 0 ? f : (v + m) / 2;
      C.setAttribute("r", g.toString()), C.setAttribute("cx", c.x.toString()), C.setAttribute("cy", c.y.toString()), C.setAttribute("fill", d), s.appendChild(C);
    }), s.outerHTML;
  }
}
function Av(n, t, e) {
  var o = e || {}, r = o.noTrailing, a = r === void 0 ? !1 : r, i = o.noLeading, l = i === void 0 ? !1 : i, s = o.debounceMode, c = s === void 0 ? void 0 : s, d, f = !1, v = 0;
  function m() {
    d && clearTimeout(d);
  }
  function C(O) {
    var w = O || {}, x = w.upcomingOnly, S = x === void 0 ? !1 : x;
    m(), f = !S;
  }
  function g() {
    for (var O = arguments.length, w = new Array(O), x = 0; x < O; x++)
      w[x] = arguments[x];
    var S = this, P = Date.now() - v;
    if (f)
      return;
    function b() {
      v = Date.now(), t.apply(S, w);
    }
    function T() {
      d = void 0;
    }
    !l && c && !d && b(), m(), c === void 0 && P > n ? l ? (v = Date.now(), a || (d = setTimeout(c ? T : b, n))) : b() : a !== !0 && (d = setTimeout(c ? T : b, c === void 0 ? n - P : n));
  }
  return g.cancel = C, g;
}
function Lv(n, t, e) {
  var o = {}, r = o.atBegin, a = r === void 0 ? !1 : r;
  return Av(n, t, {
    debounceMode: a !== !1
  });
}
class bo extends u.PureComponent {
  constructor(t) {
    super(t), Object.defineProperty(this, "canvasRef", { enumerable: !0, configurable: !0, writable: !0, value: u.createRef() }), Object.defineProperty(this, "signaturePad", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "callResizeHandler", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this.state = { canvasWidth: 0, canvasHeight: 0 }, this.callResizeHandler = Lv(this.props.debounceInterval, this.handleResize.bind(this));
  }
  componentDidMount() {
    const t = this.canvasRef.current;
    t && (this.props.width && this.props.height || (t.style.width = "100%", window.addEventListener("resize", this.callResizeHandler)), this.signaturePad = new jo(t, this.props.options), this.scaleCanvas(t));
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
    return u.createElement("canvas", Object.assign({ "data-testid": "canvas-element", ref: this.canvasRef }, t));
  }
}
Object.defineProperty(bo, "displayName", { enumerable: !0, configurable: !0, writable: !0, value: "react-signature-pad-wrapper" }), Object.defineProperty(bo, "propTypes", { enumerable: !0, configurable: !0, writable: !0, value: { width: qn.number, height: qn.number, options: qn.object, canvasProps: qn.object, redrawOnResize: qn.bool.isRequired, debounceInterval: qn.number.isRequired } }), Object.defineProperty(bo, "defaultProps", { enumerable: !0, configurable: !0, writable: !0, value: { redrawOnResize: !1, debounceInterval: 150 } });
const $v = ({ item: n, onChange: t, config: e }) => {
  const [o, r] = Le({ ...Qn, ...n });
  Ie(() => {
    r({ ...Qn, ...n });
  }, [n]);
  const a = Math.random().toString(36).substring(2, 15), i = Te.createRef(), l = () => {
    const d = i.current;
    d && d.instance.clear();
    const f = jn(o);
    f.value = [], r(f), t(f);
  }, s = () => {
    const d = i.current;
    if (!d)
      return;
    const f = jn(o);
    d.isEmpty() ? f.value = [] : f.value = d.toData(), r(f), t(f);
  };
  Ie(() => {
    o.value && i.current && i.current.fromData(o.value);
  }, [o]);
  const c = {
    height: "10rem",
    width: "100%",
    border: "1px solid #cccccc",
    boxShadow: "0 0 0.32rem #ccc inset"
  };
  return /* @__PURE__ */ y.jsx(y.Fragment, { children: /* @__PURE__ */ y.jsxs("div", { className: "flex flex-column gap-2", children: [
    /* @__PURE__ */ y.jsx("label", { htmlFor: a, children: o.label }),
    /* @__PURE__ */ y.jsx("div", { children: /* @__PURE__ */ y.jsx(
      bo,
      {
        ref: i,
        options: { penColor: "rgb(0, 0, 0)" },
        redrawOnResize: !0,
        canvasProps: { style: c }
      }
    ) }),
    /* @__PURE__ */ y.jsx("button", { onClick: l, children: "clear" }),
    /* @__PURE__ */ y.jsx("button", { onClick: s, children: "save" })
  ] }) });
}, Fv = (n) => ({});
var jl;
function Ga() {
  return Ga = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e) ({}).hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, Ga.apply(null, arguments);
}
var Mv = function(t) {
  return /* @__PURE__ */ u.createElement("svg", Ga({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512"
  }, t), jl || (jl = /* @__PURE__ */ u.createElement("path", {
    d: "M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64v-19.3c-2.7 1.1-5.4 2-8.2 2.7l-60.1 15c-3 .7-6 1.2-9 1.4-.9.1-1.8.2-2.7.2h-64c-6.1 0-11.6-3.4-14.3-8.8l-8.8-17.7c-1.7-3.4-5.1-5.5-8.8-5.5s-7.2 2.1-8.8 5.5l-8.8 17.7c-2.9 5.9-9.2 9.4-15.7 8.8s-12.1-5.1-13.9-11.3L144 381l-9.8 32.8c-6.1 20.3-24.8 34.2-46 34.2H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h8.2c7.1 0 13.3-4.6 15.3-11.4l14.9-49.5c3.4-11.3 13.8-19.1 25.6-19.1s22.2 7.8 25.6 19.1l11.6 38.6c7.4-6.2 16.8-9.7 26.8-9.7 15.9 0 30.4 9 37.5 23.2l4.4 8.8h8.9c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l94.8-94.8V160H256c-17.7 0-32-14.3-32-32V0zm192 0v128h128zm293.8 139.7c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6zM311.9 321c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5.2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4l129.2-129.3-71-71z"
  })));
};
const zv = ({ item: n, onChange: t, config: e }) => {
  const [o, r] = Le({ ...Qn, ...n }), a = (i) => {
    const l = { ...o, [i.target.name]: i.target.value };
    r(l), t(l);
  };
  return Ie(() => {
    r({ ...Qn, ...n });
  }, [n]), /* @__PURE__ */ y.jsx(y.Fragment, { children: /* @__PURE__ */ y.jsx(vn, { activeIndex: 0, children: /* @__PURE__ */ y.jsx(on, { header: "General", children: /* @__PURE__ */ y.jsx("div", { className: "form-item flex flex-column gap-4", children: /* @__PURE__ */ y.jsxs("div", { className: "flex flex-column gap-2", children: [
    /* @__PURE__ */ y.jsx("label", { htmlFor: "label", children: "Label" }),
    /* @__PURE__ */ y.jsx(
      Dt,
      {
        id: "label",
        value: o.label || "",
        name: "label",
        onChange: a,
        className: "w-full"
      }
    )
  ] }) }) }, "general") }) });
}, Hv = (n) => ({}), Bv = new er({
  type: Qn.type,
  form: new Yt({
    render: $v,
    validation: Fv
  }),
  settings: new Yt({
    render: zv,
    validation: Hv
  }),
  heading: "Signature",
  description: "Signature capture block",
  hidden: !1,
  icon: Mv,
  data: Qn
}), Nn = {
  id: Cn(),
  type: "embedded-form",
  label: "",
  form_id: ""
}, Wv = ({ item: n, onChange: t, form: e, config: o }) => {
  const [r, a] = Le({ ...Nn, ...n });
  Ie(() => {
    a({ ...Nn, ...n });
  }, [n]);
  const i = o.forms.find((l) => l.id === r.form_id);
  return i ? /* @__PURE__ */ y.jsx(y.Fragment, { children: /* @__PURE__ */ y.jsx("div", { style: { background: "red" }, children: /* @__PURE__ */ y.jsx(
    Fm,
    {
      onChange: () => {
      },
      form: i,
      config: o
    }
  ) }) }) : /* @__PURE__ */ y.jsx(y.Fragment, { children: /* @__PURE__ */ y.jsx("div", { children: "No child form found" }) });
};
var Nl;
function Xa() {
  return Xa = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e) ({}).hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, Xa.apply(null, arguments);
}
var Vv = function(t) {
  return /* @__PURE__ */ u.createElement("svg", Xa({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, t), Nl || (Nl = /* @__PURE__ */ u.createElement("path", {
    d: "M448 416v-64H64v64zm0 64H64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64M288 160c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h304c44.2 0 80 35.8 80 80v16h38.1c21.4 0 32.1 25.9 17 41L433 239c-9.4 9.4-24.6 9.4-33.9 0L329 169c-15.1-15.1-4.4-41 17-41h38.1v-16c0-8.8-7.2-16-16-16h-80v64z"
  })));
};
const Kv = ({ item: n, onChange: t, form: e, config: o }) => {
  const [r, a] = Le({ ...Nn, ...n }), i = (s) => {
    const c = { ...r, [s.target.name]: s.target.value };
    a(c), t(c);
  };
  Ie(() => {
    a({ ...Nn, ...n });
  }, [n]);
  const l = o.forms.map((s) => ({ value: s.id, label: s.label })).filter((s) => s.value != e.id);
  return /* @__PURE__ */ y.jsx(y.Fragment, { children: /* @__PURE__ */ y.jsx(vn, { activeIndex: 0, children: /* @__PURE__ */ y.jsxs(on, { header: "General", children: [
    /* @__PURE__ */ y.jsx("div", { className: "form-item flex flex-column gap-4", children: /* @__PURE__ */ y.jsxs("div", { className: "flex flex-column gap-2", children: [
      /* @__PURE__ */ y.jsx("label", { htmlFor: "label", children: "Label" }),
      /* @__PURE__ */ y.jsx(
        Dt,
        {
          id: "label",
          value: r.label || "",
          name: "label",
          onChange: i,
          className: "w-full"
        }
      )
    ] }) }),
    /* @__PURE__ */ y.jsxs("div", { className: "flex flex-column gap-2", children: [
      /* @__PURE__ */ y.jsx("label", { htmlFor: "form_id", children: "Form" }),
      /* @__PURE__ */ y.jsx(
        fi,
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
    ] }),
    /* @__PURE__ */ y.jsx("div", { children: JSON.stringify(e) }),
    /* @__PURE__ */ y.jsx("div", { children: JSON.stringify(l) })
  ] }, "general") }) });
}, Uv = (n) => ({}), Yv = new er({
  type: Nn.type,
  form: new Yt({
    render: Wv,
    validation: null
  }),
  settings: new Yt({
    render: Kv,
    validation: Uv
  }),
  heading: "Embedded form",
  description: "Embed a form",
  hidden: !1,
  icon: Vv,
  data: Nn
}), yi = new Ao(new No({ label: "Special" }));
yi.registerItem(Bv);
yi.registerItem(Yv);
const An = new Ao();
An.addRegistry(Zo);
An.addRegistry(ds);
An.addRegistry(yi);
const wi = ({ item: n, onChange: t, form: e, config: o }) => {
  const r = An.getByItem(n);
  return n && r ? Te.createElement(r.form.render, {
    item: n,
    onChange: t,
    form: e,
    config: o
  }) : Te.createElement(
    () => /* @__PURE__ */ y.jsxs("div", { children: [
      "The component ",
      n.type,
      " was not found."
    ] })
  );
}, Gv = ({ item: n, onChange: t, form: e, config: o }) => {
  const r = An.getByItem(n);
  return n && r ? Te.createElement(r.settings.render, {
    item: n,
    onChange: t,
    form: e,
    config: o
  }) : Te.createElement(
    () => /* @__PURE__ */ y.jsxs("div", { children: [
      "The component ",
      n.type,
      " was not found."
    ] })
  );
};
var Xv = {
  root: "p-button-group p-component"
}, co = $e.extend({
  defaultProps: {
    __TYPE: "ButtonGroup",
    children: void 0
  },
  css: {
    classes: Xv
  }
}), nc = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Ft(), o = u.useContext(yt), r = co.getProps(n, o), a = u.useRef(t), i = co.setMetaData({
    props: r
  }), l = i.ptm, s = i.cx, c = i.isUnstyled;
  Jt(co.css.styles, c, {
    name: "buttongroup"
  }), u.useEffect(function() {
    L.combinedRefs(a, t);
  }, [a, t]);
  var d = e({
    ref: a,
    className: we(s("root")),
    role: "group"
  }, co.getOtherProps(r), l("root"));
  return /* @__PURE__ */ u.createElement("span", d, r.children);
}));
nc.displayName = "ButtonGroup";
function Ja() {
  return Ja = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, Ja.apply(this, arguments);
}
var rc = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Vt.getPTI(n);
  return /* @__PURE__ */ u.createElement("svg", Ja({
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
rc.displayName = "WindowMaximizeIcon";
function Za() {
  return Za = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, Za.apply(this, arguments);
}
var oc = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Vt.getPTI(n);
  return /* @__PURE__ */ u.createElement("svg", Za({
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
oc.displayName = "WindowMinimizeIcon";
function Qa() {
  return Qa = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, Qa.apply(this, arguments);
}
function Fr(n) {
  "@babel/helpers - typeof";
  return Fr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fr(n);
}
function ei(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, o = new Array(t); e < t; e++) o[e] = n[e];
  return o;
}
function Jv(n) {
  if (Array.isArray(n)) return ei(n);
}
function Zv(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function ac(n, t) {
  if (n) {
    if (typeof n == "string") return ei(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return ei(n, t);
  }
}
function Qv() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function em(n) {
  return Jv(n) || Zv(n) || ac(n) || Qv();
}
function tm(n, t) {
  if (Fr(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t || "default");
    if (Fr(o) !== "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function nm(n) {
  var t = tm(n, "string");
  return Fr(t) === "symbol" ? t : String(t);
}
function xi(n, t, e) {
  return t = nm(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function rm(n) {
  if (Array.isArray(n)) return n;
}
function om(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var o, r, a, i, l = [], s = !0, c = !1;
    try {
      if (a = (e = e.call(n)).next, t !== 0) for (; !(s = (o = a.call(e)).done) && (l.push(o.value), l.length !== t); s = !0) ;
    } catch (d) {
      c = !0, r = d;
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
function am() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hn(n, t) {
  return rm(n) || om(n, t) || ac(n, t) || am();
}
var im = "", Sr = $e.extend({
  defaultProps: {
    __TYPE: "FocusTrap",
    children: void 0
  },
  css: {
    styles: im
  },
  getProps: function(t) {
    return L.getMergedProps(t, Sr.defaultProps);
  },
  getOtherProps: function(t) {
    return L.getDiffProps(t, Sr.defaultProps);
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
function lm(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Al(Object(e), !0).forEach(function(o) {
      xi(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Al(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
var sm = /* @__PURE__ */ Te.memo(/* @__PURE__ */ Te.forwardRef(function(n, t) {
  var e = Te.useRef(null), o = Te.useRef(null), r = Te.useRef(null), a = Te.useContext(yt), i = Sr.getProps(n, a), l = {
    props: i
  };
  _n(Sr.css.styles, {
    name: "focustrap"
  });
  var s = Sr.setMetaData(lm({}, l));
  s.ptm, Te.useImperativeHandle(t, function() {
    return {
      props: i,
      getInk: function() {
        return o.current;
      },
      getTarget: function() {
        return e.current;
      }
    };
  }), Xt(function() {
    i.disabled || (e.current = c(), d(e.current));
  });
  var c = function() {
    return o.current && o.current.parentElement;
  }, d = function(O) {
    var w = i || {}, x = w.autoFocusSelector, S = x === void 0 ? "" : x, P = w.firstFocusableSelector, b = P === void 0 ? "" : P, T = w.autoFocus, I = T === void 0 ? !1 : T, U = "".concat(f(S)), $ = "[autofocus]".concat(U, ", [data-pc-autofocus='true']").concat(U), j = N.getFirstFocusableElement(O, $);
    I && !j && (j = N.getFirstFocusableElement(O, f(b))), N.focus(j);
  }, f = function(O) {
    return ':not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])'.concat(O ?? "");
  }, v = function(O) {
    var w, x = O.currentTarget, S = O.relatedTarget, P = S === x.$_pfocustrap_lasthiddenfocusableelement || !((w = e.current) !== null && w !== void 0 && w.contains(S)) ? N.getFirstFocusableElement(x.parentElement, f(x.$_pfocustrap_focusableselector)) : x.$_pfocustrap_lasthiddenfocusableelement;
    N.focus(P);
  }, m = function(O) {
    var w, x = O.currentTarget, S = O.relatedTarget, P = S === x.$_pfocustrap_firsthiddenfocusableelement || !((w = e.current) !== null && w !== void 0 && w.contains(S)) ? N.getLastFocusableElement(x.parentElement, f(x.$_pfocustrap_focusableselector)) : x.$_pfocustrap_firsthiddenfocusableelement;
    N.focus(P);
  }, C = function() {
    var O = i || {}, w = O.tabIndex, x = w === void 0 ? 0 : w, S = function(I, U) {
      return /* @__PURE__ */ Te.createElement("span", {
        ref: U === "firstfocusableelement" ? o : r,
        className: "p-hidden-accessible p-hidden-focusable",
        tabIndex: x,
        role: "presentation",
        "aria-hidden": !0,
        "data-p-hidden-accessible": !0,
        "data-p-hidden-focusable": !0,
        onFocus: I,
        "data-pc-section": U
      });
    }, P = S(v, "firstfocusableelement"), b = S(m, "lastfocusableelement");
    return P.ref.current && b.ref.current && (P.ref.current.$_pfocustrap_lasthiddenfocusableelement = b.ref.current, b.ref.current.$_pfocustrap_firsthiddenfocusableelement = P.ref.current), /* @__PURE__ */ Te.createElement(Te.Fragment, null, P, i.children, b);
  };
  return C();
})), cm = sm;
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
function um(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ll(Object(e), !0).forEach(function(o) {
      xi(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Ll(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
var dm = {
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
    var e = t.props, o = t.maskVisibleState, r = ["center", "left", "right", "top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right"], a = r.find(function(i) {
      return i === e.position || i.replace("-", "") === e.position;
    });
    return we("p-dialog-mask", a ? "p-dialog-".concat(a) : "", {
      "p-component-overlay p-component-overlay-enter": e.modal,
      "p-dialog-visible": o,
      "p-dialog-draggable": e.draggable,
      "p-dialog-resizable": e.resizable
    }, e.maskClassName);
  },
  root: function(t) {
    var e = t.props, o = t.maximized, r = t.context;
    return we("p-dialog p-component", {
      "p-dialog-rtl": e.rtl,
      "p-dialog-maximized": o,
      "p-dialog-default": !o,
      "p-input-filled": r && r.inputStyle === "filled" || bt.inputStyle === "filled",
      "p-ripple-disabled": r && r.ripple === !1 || bt.ripple === !1
    });
  },
  transition: "p-dialog"
}, fm = `
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
`, pm = {
  mask: function(t) {
    var e = t.props;
    return um({
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
}, uo = $e.extend({
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
    classes: dm,
    styles: fm,
    inlineStyles: pm
  }
});
function $l(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function ga(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $l(Object(e), !0).forEach(function(o) {
      xi(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : $l(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
var ic = /* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Ft(), o = u.useContext(yt), r = uo.getProps(n, o), a = r.id ? r.id : $o(), i = u.useState(a), l = hn(i, 2), s = l[0];
  l[1];
  var c = u.useState(!1), d = hn(c, 2), f = d[0], v = d[1], m = u.useState(!1), C = hn(m, 2), g = C[0], O = C[1], w = u.useState(r.maximized), x = hn(w, 2), S = x[0], P = x[1], b = u.useRef(null), T = u.useRef(null), I = u.useRef(null), U = u.useRef(null), $ = u.useRef(null), j = u.useRef(null), R = u.useRef(null), ne = u.useRef(!1), B = u.useRef(!1), re = u.useRef(null), ae = u.useRef(null), he = u.useRef(null), Se = u.useRef(a), pe = u.useRef(null), Z = r.onMaximize ? r.maximized : S, _ = g && (r.blockScroll || r.maximizable && Z), J = r.closable && r.closeOnEscape && g, Q = nu("dialog", J), X = uo.setMetaData(ga(ga({
    props: r
  }, r.__parentMetadata), {}, {
    state: {
      id: s,
      maximized: Z,
      containerVisible: f
    }
  })), Y = X.ptm, fe = X.cx, ve = X.sx, ce = X.isUnstyled;
  Jt(uo.css.styles, ce, {
    name: "dialog"
  }), Jl({
    callback: function(E) {
      rt(E);
    },
    when: J && Q,
    priority: [Gl.DIALOG, Q]
  });
  var K = wn({
    type: "mousemove",
    target: function() {
      return window.document;
    },
    listener: function(E) {
      return z(E);
    }
  }), D = hn(K, 2), F = D[0], ue = D[1], M = wn({
    type: "mouseup",
    target: function() {
      return window.document;
    },
    listener: function(E) {
      return ge(E);
    }
  }), _e = hn(M, 2), Ae = _e[0], je = _e[1], Ne = wn({
    type: "mousemove",
    target: function() {
      return window.document;
    },
    listener: function(E) {
      return kt(E);
    }
  }), We = hn(Ne, 2), xt = We[0], dt = We[1], lt = wn({
    type: "mouseup",
    target: function() {
      return window.document;
    },
    listener: function(E) {
      return ft(E);
    }
  }), nt = hn(lt, 2), pt = nt[0], Et = nt[1], rt = function(E) {
    r.onHide(), E.preventDefault();
  }, Je = function() {
    var E = document.activeElement, H = E && b.current && b.current.contains(E);
    !H && r.closable && r.showHeader && R.current && R.current.focus();
  }, Mt = function(E) {
    I.current = E.target, r.onPointerDown && r.onPointerDown(E);
  }, Ge = function(E) {
    r.dismissableMask && r.modal && T.current === E.target && !I.current && rt(E), r.onMaskClick && r.onMaskClick(E), I.current = null;
  }, ot = function(E) {
    r.onMaximize ? r.onMaximize({
      originalEvent: E,
      maximized: !Z
    }) : P(function(H) {
      return !H;
    }), E.preventDefault();
  }, ct = function(E) {
    N.hasClass(E.target, "p-dialog-header-icon") || N.hasClass(E.target.parentElement, "p-dialog-header-icon") || r.draggable && (ne.current = !0, re.current = E.pageX, ae.current = E.pageY, b.current.style.margin = "0", N.addClass(document.body, "p-unselectable-text"), r.onDragStart && r.onDragStart(E));
  }, kt = function(E) {
    if (ne.current) {
      var H = N.getOuterWidth(b.current), de = N.getOuterHeight(b.current), xe = E.pageX - re.current, se = E.pageY - ae.current, q = b.current.getBoundingClientRect(), k = q.left + xe, W = q.top + se, te = N.getViewport(), ie = getComputedStyle(b.current), oe = parseFloat(ie.marginLeft), me = parseFloat(ie.marginTop);
      b.current.style.position = "fixed", r.keepInViewport ? (k >= r.minX && k + H < te.width && (re.current = E.pageX, b.current.style.left = k - oe + "px"), W >= r.minY && W + de < te.height && (ae.current = E.pageY, b.current.style.top = W - me + "px")) : (re.current = E.pageX, b.current.style.left = k - oe + "px", ae.current = E.pageY, b.current.style.top = W - me + "px"), r.onDrag && r.onDrag(E);
    }
  }, ft = function(E) {
    ne.current && (ne.current = !1, N.removeClass(document.body, "p-unselectable-text"), r.onDragEnd && r.onDragEnd(E));
  }, vt = function(E) {
    r.resizable && (B.current = !0, re.current = E.pageX, ae.current = E.pageY, N.addClass(document.body, "p-unselectable-text"), r.onResizeStart && r.onResizeStart(E));
  }, Ce = function(E, H, de) {
    !de && (de = N.getViewport());
    var xe = parseInt(E);
    return /^(\d+|(\.\d+))(\.\d+)?%$/.test(E) ? xe * (de[H] / 100) : xe;
  }, z = function(E) {
    if (B.current) {
      var H = E.pageX - re.current, de = E.pageY - ae.current, xe = N.getOuterWidth(b.current), se = N.getOuterHeight(b.current), q = b.current.getBoundingClientRect(), k = N.getViewport(), W = !parseInt(b.current.style.top) || !parseInt(b.current.style.left), te = Ce(b.current.style.minWidth, "width", k), ie = Ce(b.current.style.minHeight, "height", k), oe = xe + H, me = se + de;
      W && (oe = oe + H, me = me + de), (!te || oe > te) && q.left + oe < k.width && (b.current.style.width = oe + "px"), (!ie || me > ie) && q.top + me < k.height && (b.current.style.height = me + "px"), re.current = E.pageX, ae.current = E.pageY, r.onResize && r.onResize(E);
    }
  }, ge = function(E) {
    B.current && (B.current = !1, N.removeClass(document.body, "p-unselectable-text"), r.onResizeEnd && r.onResizeEnd(E));
  }, Re = function() {
    b.current.style.position = "", b.current.style.left = "", b.current.style.top = "", b.current.style.margin = "";
  }, Pe = function() {
    b.current.setAttribute(Se.current, "");
  }, qe = function() {
    r.onShow && r.onShow(), r.focusOnShow && Je(), Fe();
  }, Ve = function() {
    r.modal && !ce() && N.addClass(T.current, "p-component-overlay-leave");
  }, ut = function() {
    ne.current = !1, en.clear(T.current), v(!1), Me(), N.focus(pe.current), pe.current = null;
  }, Fe = function() {
    it();
  }, Me = function() {
    be();
  }, He = function() {
    var E = document.primeDialogParams && document.primeDialogParams.some(function(H) {
      return H.hasBlockScroll;
    });
    E ? N.blockBodyScroll() : N.unblockBodyScroll();
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
      de === -1 ? document.primeDialogParams = [].concat(em(document.primeDialogParams), [H]) : document.primeDialogParams = document.primeDialogParams.toSpliced(de, 1, H);
    } else
      document.primeDialogParams = document.primeDialogParams && document.primeDialogParams.filter(function(xe) {
        return xe.id !== s;
      });
    He();
  }, it = function() {
    r.draggable && (xt(), pt()), r.resizable && (F(), Ae());
  }, be = function() {
    dt(), Et(), ue(), je();
  }, A = function() {
    he.current = N.createInlineStyle(o && o.nonce || bt.nonce, o && o.styleContainer);
    var E = "";
    for (var H in r.breakpoints)
      E = E + `
                @media screen and (max-width: `.concat(H, `) {
                     [data-pc-name="dialog"][`).concat(Se.current, `] {
                        width: `).concat(r.breakpoints[H], ` !important;
                    }
                }
            `);
    he.current.innerHTML = E;
  }, G = function() {
    he.current = N.removeInlineStyle(he.current);
  };
  Xt(function() {
    at(!0), r.visible && v(!0);
  }), u.useEffect(function() {
    return r.breakpoints && A(), function() {
      G();
    };
  }, [r.breakpoints]), tt(function() {
    r.visible && !f && v(!0), r.visible !== g && f && O(r.visible), r.visible && (pe.current = document.activeElement);
  }, [r.visible, f]), tt(function() {
    f && (en.set("modal", T.current, o && o.autoZIndex || bt.autoZIndex, r.baseZIndex || o && o.zIndex.modal || bt.zIndex.modal), O(!0));
  }, [f]), tt(function() {
    at(!0);
  }, [_, g]), ln(function() {
    Me(), at(!1), N.removeInlineStyle(he.current), en.clear(T.current);
  }), u.useImperativeHandle(t, function() {
    return {
      props: r,
      resetPosition: Re,
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
    if (r.closable) {
      var E = r.ariaCloseIconLabel || Jn("close"), H = e({
        className: fe("closeButtonIcon"),
        "aria-hidden": !0
      }, Y("closeButtonIcon")), de = r.closeIcon || /* @__PURE__ */ u.createElement(Vr, H), xe = Lt.getJSXIcon(de, ga({}, H), {
        props: r
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
      return /* @__PURE__ */ u.createElement("button", se, xe, /* @__PURE__ */ u.createElement(Sn, null));
    }
    return null;
  }, ye = function() {
    var E, H = e({
      className: fe("maximizableIcon")
    }, Y("maximizableIcon"));
    Z ? E = r.minimizeIcon || /* @__PURE__ */ u.createElement(oc, H) : E = r.maximizeIcon || /* @__PURE__ */ u.createElement(rc, H);
    var de = Lt.getJSXIcon(E, H, {
      props: r
    });
    if (r.maximizable) {
      var xe = e({
        type: "button",
        className: fe("maximizableButton"),
        onClick: ot
      }, Y("maximizableButton"));
      return /* @__PURE__ */ u.createElement("button", xe, de, /* @__PURE__ */ u.createElement(Sn, null));
    }
    return null;
  }, Be = function() {
    if (r.showHeader) {
      var E = ee(), H = ye(), de = L.getJSXElement(r.icons, r), xe = L.getJSXElement(r.header, r), se = s + "_header", q = e({
        ref: $,
        style: r.headerStyle,
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
      style: r.contentStyle,
      className: fe("content")
    }, Y("content"));
    return /* @__PURE__ */ u.createElement("div", H, r.children);
  }, Pt = function() {
    var E = L.getJSXElement(r.footer, r), H = e({
      ref: j,
      className: fe("footer")
    }, Y("footer"));
    return E && /* @__PURE__ */ u.createElement("div", H, E);
  }, zt = function() {
    return r.resizable ? /* @__PURE__ */ u.createElement("span", {
      className: "p-resizable-handle",
      style: {
        zIndex: 90
      },
      onMouseDown: vt
    }) : null;
  }, qt = function() {
    var E, H = {
      header: r.header,
      content: r.message,
      message: r == null || (E = r.children) === null || E === void 0 || (E = E[1]) === null || E === void 0 || (E = E.props) === null || E === void 0 ? void 0 : E.children
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
      enter: r.position === "center" ? 150 : 300,
      exit: r.position === "center" ? 150 : 300
    }, xe = e({
      ref: T,
      style: ve("mask"),
      className: fe("mask"),
      onPointerUp: Ge
    }, Y("mask")), se = e({
      ref: b,
      id: s,
      className: we(r.className, fe("root", {
        props: r,
        maximized: Z,
        context: o
      })),
      style: r.style,
      onClick: r.onClick,
      role: "dialog",
      "aria-labelledby": E,
      "aria-describedby": H,
      "aria-modal": r.modal,
      onPointerDown: Mt
    }, uo.getOtherProps(r), Y("root")), q = e({
      classNames: fe("transition"),
      timeout: de,
      in: g,
      options: r.transitionOptions,
      unmountOnExit: !0,
      onEnter: Pe,
      onEntered: qe,
      onExiting: Ve,
      onExited: ut
    }, Y("transition")), k = null;
    n != null && n.content ? k = qt() : k = Tt();
    var W = /* @__PURE__ */ u.createElement("div", xe, /* @__PURE__ */ u.createElement(zo, Qa({
      nodeRef: b
    }, q), /* @__PURE__ */ u.createElement("div", se, /* @__PURE__ */ u.createElement(cm, {
      autoFocus: r.focusOnShow
    }, k))));
    return /* @__PURE__ */ u.createElement(Br, {
      element: W,
      appendTo: r.appendTo,
      visible: !0
    });
  };
  return f && Ht();
});
ic.displayName = "Dialog";
function ti() {
  return ti = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, ti.apply(this, arguments);
}
function vm(n) {
  if (Array.isArray(n)) return n;
}
function mm(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var o, r, a, i, l = [], s = !0, c = !1;
    try {
      if (a = (e = e.call(n)).next, t !== 0) for (; !(s = (o = a.call(e)).done) && (l.push(o.value), l.length !== t); s = !0) ;
    } catch (d) {
      c = !0, r = d;
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
function gm(n, t) {
  if (n) {
    if (typeof n == "string") return Fl(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Fl(n, t);
  }
}
function hm() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ml(n, t) {
  return vm(n) || mm(n, t) || gm(n, t) || hm();
}
function Mr(n) {
  "@babel/helpers - typeof";
  return Mr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Mr(n);
}
function bm(n, t) {
  if (Mr(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t || "default");
    if (Mr(o) !== "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function ym(n) {
  var t = bm(n, "string");
  return Mr(t) === "symbol" ? t : String(t);
}
function wm(n, t, e) {
  return t = ym(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
var xm = {
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
}, fo = $e.extend({
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
    classes: xm
  }
});
function zl(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function Bn(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zl(Object(e), !0).forEach(function(o) {
      wm(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : zl(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
var Em = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  t = Bn(Bn({}, t), {
    visible: t.visible === void 0 ? !0 : t.visible
  }), t.visible && kn.emit("confirm-dialog", t);
  var e = function() {
    var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    kn.emit("confirm-dialog", Bn(Bn(Bn({}, t), a), {
      visible: !0
    }));
  }, o = function() {
    kn.emit("confirm-dialog", {
      visible: !1
    });
  };
  return {
    show: e,
    hide: o
  };
}, lc = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Ft(), o = u.useContext(yt), r = fo.getProps(n, o), a = u.useState(r.visible), i = Ml(a, 2), l = i[0], s = i[1], c = u.useState(!1), d = Ml(c, 2), f = d[0], v = d[1], m = u.useRef(null), C = u.useRef(!1), g = u.useRef(null), O = function() {
    var Z = r.group;
    return m.current && (Z = m.current.group), Object.assign({}, r, m.current, {
      group: Z
    });
  }, w = function(Z) {
    return O()[Z];
  }, x = function(Z) {
    for (var _ = arguments.length, J = new Array(_ > 1 ? _ - 1 : 0), Q = 1; Q < _; Q++)
      J[Q - 1] = arguments[Q];
    return L.getPropValue(w(Z), J);
  }, S = w("acceptLabel") || Jn("accept"), P = w("rejectLabel") || Jn("reject"), b = {
    props: r,
    state: {
      visible: l
    }
  }, T = fo.setMetaData(b), I = T.ptm, U = T.cx, $ = T.isUnstyled;
  Jt(fo.css.styles, $, {
    name: "confirmdialog"
  });
  var j = function() {
    C.current || (C.current = !0, x("accept"), B("accept"));
  }, R = function() {
    C.current || (C.current = !0, x("reject"), B("reject"));
  }, ne = function() {
    var Z = O();
    Z.group === r.group && (s(!0), C.current = !1, g.current = document.activeElement);
  }, B = function() {
    var Z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "cancel";
    s(!1), x("onHide", {
      result: Z
    }), N.focus(g.current), g.current = null;
  }, re = function(Z) {
    if (Z.tagKey === r.tagKey) {
      var _ = l !== Z.visible, J = w("target") !== Z.target;
      J && !r.target ? (B(), m.current = Z, v(!0)) : _ && (m.current = Z, Z.visible ? ne() : B());
    }
  };
  u.useEffect(function() {
    r.visible ? ne() : B();
  }, [r.visible]), u.useEffect(function() {
    return !r.target && !r.message && kn.on("confirm-dialog", re), function() {
      kn.off("confirm-dialog", re);
    };
  }, [r.target]), tt(function() {
    f && ne();
  }, [f]), ln(function() {
    kn.off("confirm-dialog", re);
  }), u.useImperativeHandle(t, function() {
    return {
      props: r,
      confirm: re
    };
  });
  var ae = function() {
    var Z = w("defaultFocus"), _ = we("p-confirm-dialog-accept", w("acceptClassName")), J = we("p-confirm-dialog-reject", {
      "p-button-text": !w("rejectClassName")
    }, w("rejectClassName")), Q = e({
      label: P,
      autoFocus: Z === "reject",
      icon: w("rejectIcon"),
      className: we(w("rejectClassName"), U("rejectButton", {
        getPropValue: w
      })),
      onClick: R,
      pt: I("rejectButton"),
      unstyled: r.unstyled,
      __parentMetadata: {
        parent: b
      }
    }, I("rejectButton")), X = e({
      label: S,
      autoFocus: Z === void 0 || Z === "accept",
      icon: w("acceptIcon"),
      className: we(w("acceptClassName"), U("acceptButton")),
      onClick: j,
      pt: I("acceptButton"),
      unstyled: r.unstyled,
      __parentMetadata: {
        parent: b
      }
    }, I("acceptButton")), Y = /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(tn, Q), /* @__PURE__ */ u.createElement(tn, X));
    if (w("footer")) {
      var fe = {
        accept: j,
        reject: R,
        acceptClassName: _,
        rejectClassName: J,
        acceptLabel: S,
        rejectLabel: P,
        element: Y,
        props: O()
      };
      return L.getJSXElement(w("footer"), fe);
    }
    return Y;
  }, he = function() {
    var Z = O(), _ = L.getJSXElement(w("message"), Z), J = e({
      className: U("icon")
    }, I("icon")), Q = Lt.getJSXIcon(w("icon"), Bn({}, J), {
      props: Z
    }), X = ae(), Y = e({
      className: U("message")
    }, I("message")), fe = e({
      visible: l,
      className: we(w("className"), U("root")),
      footer: X,
      onHide: B,
      breakpoints: w("breakpoints"),
      pt: Z.pt,
      unstyled: r.unstyled,
      appendTo: w("appendTo"),
      __parentMetadata: {
        parent: b
      }
    }, fo.getOtherProps(Z));
    return /* @__PURE__ */ u.createElement(ic, ti({}, fe, {
      content: n == null ? void 0 : n.content
    }), Q, /* @__PURE__ */ u.createElement("span", Y, _));
  }, Se = he();
  return /* @__PURE__ */ u.createElement(Br, {
    element: Se,
    appendTo: w("appendTo")
  });
}));
lc.displayName = "ConfirmDialog";
function Sm({ id: n, item: t, active: e, setActive: o, onItemChange: r, onItemRemove: a, config: i, form: l }) {
  const { attributes: s, listeners: c, setNodeRef: d, setActivatorNodeRef: f, transform: v, transition: m } = Zs({
    id: n,
    data: {
      id: n,
      item: t
    }
  }), C = {
    transform: an.Transform.toString(v),
    transition: m
  };
  let g = "sortable-item";
  t.id == (e == null ? void 0 : e.id) && (g = g + " active");
  const O = [Nn.type].includes(t.type), w = () => {
    Em({
      message: "Are you sure you want to remove this item?",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      accept: () => a(n)
      // reject: () => rejectFunc()
    });
  };
  let x = /* @__PURE__ */ y.jsx(tn, { size: "small", outlined: !0, label: "Edit", icon: "pi pi-pencil", onClick: () => o(t) });
  return e && e.id == t.id && (x = /* @__PURE__ */ y.jsx(tn, { size: "small", outlined: !0, label: "Done", icon: "pi pi-pencil", onClick: () => o(void 0) })), /* @__PURE__ */ y.jsx(y.Fragment, { children: /* @__PURE__ */ y.jsxs("div", { ref: d, style: C, ...s, className: g, children: [
    /* @__PURE__ */ y.jsx(wi, { item: t, onChange: r, config: i, form: l }),
    O ? /* @__PURE__ */ y.jsx("div", { className: "mask" }) : null,
    /* @__PURE__ */ y.jsxs("div", { className: "flex flex-row align-items-center item-footer", children: [
      /* @__PURE__ */ y.jsxs("div", { className: "flex-grow-1 item-type", children: [
        " ",
        t.type
      ] }),
      /* @__PURE__ */ y.jsxs(nc, { children: [
        " ",
        /* @__PURE__ */ y.jsx(
          tn,
          {
            ...c,
            ref: f,
            size: "small",
            outlined: !0,
            label: "Order",
            icon: "pi pi-sort"
          }
        ),
        x,
        /* @__PURE__ */ y.jsx(tn, { size: "small", outlined: !0, label: "Remove", icon: "pi pi-trash", onClick: w })
      ] })
    ] })
  ] }) });
}
function Cm({ form: n, onFormChange: t, activeItem: e, setActiveItem: o, config: r }) {
  const [a, i] = Le((n == null ? void 0 : n.items) ?? []);
  Ie(() => {
    n && n.items && n.items != a && i(n.items ?? []);
  }, [n]);
  const l = (C) => {
    const g = jn(n);
    g.items = g.items.filter(
      (O) => O.id != C
    ), t(g), e && e.id == C && o(void 0);
  }, s = (C) => {
    const g = a.map((w) => w.id == C.id ? C : w);
    i(g);
    const O = jn(n);
    O.items = g, t(O);
  }, { listeners: c, setNodeRef: d, transform: f, transition: v } = Ks({
    id: "canvas_droppable",
    data: {
      parent: null,
      isContainer: !0
    }
  }), m = {
    transform: an.Transform.toString(f),
    transition: v
  };
  return /* @__PURE__ */ y.jsx(y.Fragment, { children: /* @__PURE__ */ y.jsx("div", { ref: d, className: "canvas", style: m, ...c, children: a == null ? void 0 : a.map((C) => /* @__PURE__ */ y.jsx(
    Sm,
    {
      id: C.id,
      item: C,
      active: e,
      setActive: o,
      onItemChange: s,
      onItemRemove: l,
      config: r,
      form: n
    },
    C.id
  )) }) });
}
function Om({ ...n }) {
  const [t, e] = Le(n.form), [o, r] = Le(n.activeItem), a = (s) => {
    r(s);
    const c = jn(t);
    c.items = c.items.map((d) => d.id == s.id ? s : d), n.onFormChange(c);
  }, i = (s) => {
    const c = { ...t, [s.target.name]: s.target.value };
    e(c), n.onFormChange(c);
  }, l = () => {
    n.setActiveItem(void 0);
  };
  if (Ie(() => {
    r(n.activeItem);
  }, [n.activeItem]), Ie(() => {
    e(n.form);
  }, [n.form]), o) {
    const s = An.getByItem(o);
    if (s) {
      const c = s.icon;
      return /* @__PURE__ */ y.jsx(y.Fragment, { children: /* @__PURE__ */ y.jsxs("div", { className: "properties active", children: [
        /* @__PURE__ */ y.jsxs("div", { className: "item-panel-item flex align-items-center", children: [
          /* @__PURE__ */ y.jsxs("div", { className: "flex-grow-1 flex align-items-center", children: [
            /* @__PURE__ */ y.jsx("div", { className: "item-icon mr-2", children: /* @__PURE__ */ y.jsx(c, {}) }),
            /* @__PURE__ */ y.jsx("div", { children: /* @__PURE__ */ y.jsx("h2", { children: s.heading }) })
          ] }),
          /* @__PURE__ */ y.jsx(tn, { onClick: l, size: "small", outlined: !0, icon: "pi pi-times" })
        ] }),
        /* @__PURE__ */ y.jsx(Gv, { item: o, onChange: a, form: t, config: n.config })
      ] }) });
    }
    return Te.createElement(
      () => /* @__PURE__ */ y.jsxs("div", { children: [
        "The component ",
        o.type,
        " was not found."
      ] })
    );
  } else
    return /* @__PURE__ */ y.jsx(y.Fragment, { children: /* @__PURE__ */ y.jsxs("div", { className: "properties", children: [
      /* @__PURE__ */ y.jsx("div", { className: "item-panel-item flex px-3", children: /* @__PURE__ */ y.jsx("div", { children: /* @__PURE__ */ y.jsx("h2", { children: "Form Settings" }) }) }),
      /* @__PURE__ */ y.jsx(vn, { activeIndex: 0, children: /* @__PURE__ */ y.jsx(on, { header: "General", children: /* @__PURE__ */ y.jsx("div", { className: "form-item flex flex-column gap-4", children: /* @__PURE__ */ y.jsxs("div", { className: "flex flex-column gap-2", children: [
        /* @__PURE__ */ y.jsx("label", { htmlFor: "label", children: "Form label" }),
        /* @__PURE__ */ y.jsx(
          Dt,
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
var sc = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Vt.getPTI(n);
  return /* @__PURE__ */ u.createElement("svg", ni({
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
sc.displayName = "ChevronLeftIcon";
function ri(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, o = new Array(t); e < t; e++) o[e] = n[e];
  return o;
}
function Pm(n) {
  if (Array.isArray(n)) return ri(n);
}
function qm(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function cc(n, t) {
  if (n) {
    if (typeof n == "string") return ri(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return ri(n, t);
  }
}
function Tm() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Im(n) {
  return Pm(n) || qm(n) || cc(n) || Tm();
}
function zr(n) {
  "@babel/helpers - typeof";
  return zr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zr(n);
}
function _m(n, t) {
  if (zr(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t || "default");
    if (zr(o) !== "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function Rm(n) {
  var t = _m(n, "string");
  return zr(t) === "symbol" ? t : String(t);
}
function uc(n, t, e) {
  return t = Rm(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function km(n) {
  if (Array.isArray(n)) return n;
}
function Dm(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var o, r, a, i, l = [], s = !0, c = !1;
    try {
      if (a = (e = e.call(n)).next, t !== 0) for (; !(s = (o = a.call(e)).done) && (l.push(o.value), l.length !== t); s = !0) ;
    } catch (d) {
      c = !0, r = d;
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
function jm() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vr(n, t) {
  return km(n) || Dm(n, t) || cc(n, t) || jm();
}
function Hl(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function po(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hl(Object(e), !0).forEach(function(o) {
      uc(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Hl(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
var Nm = {
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
      var e = t.selected, o = t.disabled, r = t.headerClassName, a = t._className;
      return we("p-unselectable-text", {
        "p-tabview-selected p-highlight": e,
        "p-disabled": o
      }, r, a);
    },
    headertitle: "p-tabview-title",
    headeraction: "p-tabview-nav-link",
    closeIcon: "p-tabview-close",
    content: function(t) {
      var e = t.props, o = t.selected, r = t.getTabProp, a = t.tab, i = t.isSelected, l = t.shouldUseTab, s = t.index;
      return l(a, s) && (!e.renderActiveOnly || i(s)) ? we(r(a, "contentClassName"), r(a, "className"), "p-tabview-panel", {
        "p-hidden": !o
      }) : void 0;
    }
  }
}, Am = {
  tab: {
    header: function(t) {
      var e = t.headerStyle, o = t._style;
      return po(po({}, e || {}), o || {});
    },
    content: function(t) {
      var e = t.props, o = t.getTabProp, r = t.tab, a = t.isSelected, i = t.shouldUseTab, l = t.index;
      return i(r, l) && (!e.renderActiveOnly || a(l)) ? po(po({}, o(r, "contentStyle") || {}), o(r, "style") || {}) : void 0;
    }
  }
}, vo = $e.extend({
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
    classes: Nm,
    inlineStyles: Am
  }
}), Gn = $e.extend({
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
    return L.getComponentProp(t, e, Gn.defaultProps);
  },
  getCProps: function(t) {
    return L.getComponentProps(t, Gn.defaultProps);
  },
  getCOtherProps: function(t) {
    return L.getComponentDiffProps(t, Gn.defaultProps);
  }
});
function Bl(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function mo(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bl(Object(e), !0).forEach(function(o) {
      uc(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Bl(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
var yo = function() {
}, dc = /* @__PURE__ */ u.forwardRef(function(n, t) {
  var e = Ft(), o = u.useContext(yt), r = vo.getProps(n, o), a = u.useState(r.id), i = vr(a, 2), l = i[0], s = i[1], c = u.useState(!0), d = vr(c, 2), f = d[0], v = d[1], m = u.useState(!1), C = vr(m, 2), g = C[0], O = C[1], w = u.useState([]), x = vr(w, 2), S = x[0], P = x[1], b = u.useState(r.activeIndex), T = vr(b, 2), I = T[0], U = T[1], $ = u.useRef(null), j = u.useRef(null), R = u.useRef(null), ne = u.useRef(null), B = u.useRef(null), re = u.useRef(null), ae = u.useRef({}), he = r.onTabChange ? r.activeIndex : I, Se = u.Children.count(r.children), pe = {
    props: r,
    state: {
      id: l,
      isPrevButtonDisabled: f,
      isNextButtonDisabled: g,
      hiddenTabsState: S,
      activeIndex: I
    }
  }, Z = vo.setMetaData(mo({}, pe)), _ = Z.ptm, J = Z.ptmo, Q = Z.cx, X = Z.sx, Y = Z.isUnstyled;
  Jt(vo.css.styles, Y, {
    name: "tabview"
  });
  var fe = function(A, G, ee) {
    var ye = {
      props: A.props,
      parent: pe,
      context: {
        index: ee,
        count: Se,
        first: ee === 0,
        last: ee === Se - 1,
        active: ee == I,
        disabled: ce(A, "disabled")
      }
    };
    return e(_("tab.".concat(G), {
      tab: ye
    }), _("tabpanel.".concat(G), {
      tabpanel: ye
    }), _("tabpanel.".concat(G), ye), J(ce(A, "pt"), G, ye));
  }, ve = function(A) {
    return A === he;
  }, ce = function(A, G) {
    return Gn.getCProp(A, G);
  }, K = function(A) {
    return A && ce(A, "visible") && L.isValidChild(A, "TabPanel") && S.every(function(G) {
      return G !== A.key;
    });
  }, D = function(A) {
    var G = u.Children.map(r.children, function(ee, ye) {
      if (K(ee))
        return {
          tab: ee,
          index: ye
        };
    });
    return G.find(function(ee) {
      var ye = ee.tab, Be = ee.index;
      return !ce(ye, "disabled") && Be >= A;
    }) || G.reverse().find(function(ee) {
      var ye = ee.tab, Be = ee.index;
      return !ce(ye, "disabled") && A > Be;
    });
  }, F = function(A, G) {
    A.preventDefault();
    var ee = r.onBeforeTabClose, ye = r.onTabClose, Be = r.children, Qe = Be[G].key;
    ee && ee({
      originalEvent: A,
      index: G
    }) === !1 || (P([].concat(Im(S), [Qe])), ye && ye({
      originalEvent: A,
      index: G
    }));
  }, ue = function(A, G, ee) {
    M(A, G, ee);
  }, M = function(A, G, ee) {
    if (A && A.preventDefault(), !ce(G, "disabled")) {
      if (r.onBeforeTabChange && r.onBeforeTabChange({
        originalEvent: A,
        index: ee
      }) === !1)
        return;
      r.onTabChange ? r.onTabChange({
        originalEvent: A,
        index: ee
      }) : U(ee);
    }
    Ge({
      index: ee
    });
  }, _e = function(A, G, ee) {
    switch (A.code) {
      case "ArrowLeft":
        je(A);
        break;
      case "ArrowRight":
        Ae(A);
        break;
      case "Home":
        Ne(A);
        break;
      case "End":
        We(A);
        break;
      case "PageDown":
        xt(A);
        break;
      case "PageUp":
        dt(A);
        break;
      case "Enter":
      case "NumpadEnter":
      case "Space":
        lt(A, G, ee);
        break;
    }
  }, Ae = function(A) {
    var G = nt(A.target.parentElement);
    G ? Je(G) : Ne(A), A.preventDefault();
  }, je = function(A) {
    var G = pt(A.target.parentElement);
    G ? Je(G) : We(A), A.preventDefault();
  }, Ne = function(A) {
    var G = Et();
    Je(G), A.preventDefault();
  }, We = function(A) {
    var G = rt();
    Je(G), A.preventDefault();
  }, xt = function(A) {
    Ge({
      index: u.Children.count(r.children) - 1
    }), A.preventDefault();
  }, dt = function(A) {
    Ge({
      index: 0
    }), A.preventDefault();
  }, lt = function(A, G, ee) {
    M(A, G, ee), A.preventDefault();
  }, nt = function be(A) {
    var G = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, ee = G ? A : A.nextElementSibling;
    return ee ? N.getAttribute(ee, "data-p-disabled") || N.getAttribute(ee, "data-pc-section") === "inkbar" ? be(ee) : N.findSingle(ee, '[data-pc-section="headeraction"]') : null;
  }, pt = function be(A) {
    var G = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, ee = G ? A : A.previousElementSibling;
    return ee ? N.getAttribute(ee, "data-p-disabled") || N.getAttribute(ee, "data-pc-section") === "inkbar" ? be(ee) : N.findSingle(ee, '[data-pc-section="headeraction"]') : null;
  }, Et = function() {
    return nt(R.current.firstElementChild, !0);
  }, rt = function() {
    return pt(R.current.lastElementChild, !0);
  }, Je = function(A) {
    A && (N.focus(A), Ge({
      element: A
    }));
  }, Mt = function() {
    var A = ae.current["tab_".concat(he)];
    ne.current.style.width = N.getWidth(A) + "px", ne.current.style.left = N.getOffset(A).left - N.getOffset(R.current).left + "px";
  }, Ge = function(A) {
    var G = A.index, ee = A.element, ye = ee || ae.current["tab_".concat(G)];
    ye && ye.scrollIntoView && ye.scrollIntoView({
      block: "nearest"
    });
  }, ot = function() {
    var A = j.current, G = A.scrollLeft, ee = A.scrollWidth, ye = N.getWidth(j.current);
    v(G === 0), O(parseInt(G) === ee - ye);
  }, ct = function(A) {
    r.scrollable && ot(), A.preventDefault();
  }, kt = function() {
    return [B.current, re.current].reduce(function(A, G) {
      return G ? A + N.getWidth(G) : A;
    }, 0);
  }, ft = function() {
    var A = N.getWidth(j.current) - kt(), G = j.current.scrollLeft - A;
    j.current.scrollLeft = G <= 0 ? 0 : G;
  }, vt = function() {
    var A = N.getWidth(j.current) - kt(), G = j.current.scrollLeft + A, ee = j.current.scrollWidth - A;
    j.current.scrollLeft = G >= ee ? ee : G;
  }, Ce = function() {
    v(!0), O(!1), P([]), r.onTabChange ? r.onTabChange({
      index: he
    }) : U(r.activeIndex);
  };
  u.useEffect(function() {
    Mt(), ot();
  }), Xt(function() {
    l || s($o());
  }), tt(function() {
    if (L.isNotEmpty(S)) {
      var be = D(S[S.length - 1]);
      be && ue(null, be.tab, be.index);
    }
  }, [S]), tt(function() {
    r.activeIndex !== I && Ge({
      index: r.activeIndex
    });
  }, [r.activeIndex]), u.useImperativeHandle(t, function() {
    return {
      props: r,
      reset: Ce,
      getElement: function() {
        return $.current;
      }
    };
  });
  var z = function(A, G) {
    var ee = ve(G), ye = Gn.getCProps(A), Be = ye.headerStyle, Qe = ye.headerClassName, Pt = ye.style, zt = ye.className, qt = ye.disabled, Tt = ye.leftIcon, Ht = ye.rightIcon, p = ye.header, E = ye.headerTemplate, H = ye.closable, de = ye.closeIcon, xe = l + "_header_" + G, se = l + G + "_content", q = qt || !ee ? -1 : 0, k = Tt && Lt.getJSXIcon(Tt, void 0, {
      props: r
    }), W = e({
      className: Q("tab.headertitle")
    }, fe(A, "headertitle", G)), te = /* @__PURE__ */ u.createElement("span", W, p), ie = Ht && Lt.getJSXIcon(Ht, void 0, {
      props: r
    }), oe = e({
      className: Q("tab.closeIcon"),
      onClick: function(gt) {
        return F(gt, G);
      }
    }, fe(A, "closeIcon", G)), me = de || /* @__PURE__ */ u.createElement(Vr, oe), De = H ? Lt.getJSXIcon(me, mo({}, oe), {
      props: r
    }) : null, Oe = e({
      id: xe,
      role: "tab",
      className: Q("tab.headeraction"),
      tabIndex: q,
      "aria-controls": se,
      "aria-selected": ee,
      "aria-disabled": qt,
      onClick: function(gt) {
        return ue(gt, A, G);
      },
      onKeyDown: function(gt) {
        return _e(gt, A, G);
      }
    }, fe(A, "headeraction", G)), Ye = (
      // eslint-disable /
      /* @__PURE__ */ u.createElement("a", Oe, k, te, ie, De, /* @__PURE__ */ u.createElement(Sn, null))
    );
    if (E) {
      var mt = {
        className: "p-tabview-nav-link",
        titleClassName: "p-tabview-title",
        onClick: function(gt) {
          return ue(gt, A, G);
        },
        onKeyDown: function(gt) {
          return _e(gt, A, G);
        },
        leftIconElement: k,
        titleElement: te,
        rightIconElement: ie,
        element: Ye,
        props: r,
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
    }, fe(A, "root", G), fe(A, "header", G));
    return /* @__PURE__ */ u.createElement("li", st, Ye);
  }, ge = function() {
    return u.Children.map(r.children, function(A, G) {
      if (K(A))
        return z(A, G);
    });
  }, Re = function() {
    var A = ge(), G = e({
      id: l + "_navcontent",
      ref: j,
      className: Q("navcontent"),
      style: r.style,
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
    return /* @__PURE__ */ u.createElement("div", G, /* @__PURE__ */ u.createElement("ul", ee, A, /* @__PURE__ */ u.createElement("li", ye)));
  }, Pe = function() {
    var A = e({
      className: Q("panelcontainer"),
      style: r.panelContainerStyle
    }, _("panelcontainer")), G = u.Children.map(r.children, function(ee, ye) {
      if (K(ee) && (!r.renderActiveOnly || ve(ye))) {
        var Be = ve(ye), Qe = l + ye + "_content", Pt = l + "_header_" + ye, zt = e({
          id: Qe,
          className: Q("tab.content", {
            props: r,
            selected: Be,
            getTabProp: ce,
            tab: ee,
            isSelected: ve,
            shouldUseTab: K,
            index: ye
          }),
          style: X("tab.content", {
            props: r,
            getTabProp: ce,
            tab: ee,
            isSelected: ve,
            shouldUseTab: K,
            index: ye
          }),
          role: "tabpanel",
          "aria-labelledby": Pt
        }, Gn.getCOtherProps(ee), fe(ee, "root", ye), fe(ee, "content", ye));
        return /* @__PURE__ */ u.createElement("div", zt, r.renderActiveOnly ? Be && ce(ee, "children") : ce(ee, "children"));
      }
    });
    return /* @__PURE__ */ u.createElement("div", A, G);
  }, qe = function() {
    var A = e({
      "aria-hidden": "true"
    }, _("previcon")), G = r.prevButton || /* @__PURE__ */ u.createElement(sc, A), ee = Lt.getJSXIcon(G, mo({}, A), {
      props: r
    }), ye = e({
      ref: B,
      type: "button",
      className: Q("prevbutton"),
      "aria-label": Ni("previousPageLabel"),
      onClick: function(Qe) {
        return ft();
      }
    }, _("prevbutton"));
    return r.scrollable && !f ? /* @__PURE__ */ u.createElement("button", ye, ee, /* @__PURE__ */ u.createElement(Sn, null)) : null;
  }, Ve = function() {
    var A = e({
      "aria-hidden": "true"
    }, _("nexticon")), G = r.nextButton || /* @__PURE__ */ u.createElement(di, A), ee = Lt.getJSXIcon(G, mo({}, A), {
      props: r
    }), ye = e({
      ref: re,
      type: "button",
      className: Q("nextbutton"),
      "aria-label": Ni("nextPageLabel"),
      onClick: function(Qe) {
        return vt();
      }
    }, _("nextbutton"));
    if (r.scrollable && !g)
      return /* @__PURE__ */ u.createElement("button", ye, ee, /* @__PURE__ */ u.createElement(Sn, null));
  }, ut = e({
    id: l,
    ref: $,
    style: r.style,
    className: we(r.className, Q("root"))
  }, vo.getOtherProps(r), _("root")), Fe = e({
    className: Q("navcontainer")
  }, _("navcontainer")), Me = Re(), He = Pe(), at = qe(), it = Ve();
  return /* @__PURE__ */ u.createElement("div", ut, /* @__PURE__ */ u.createElement("div", Fe, at, Me, it), He);
});
yo.displayName = "TabPanel";
dc.displayName = "TabView";
function fc({ item: n }) {
  const t = n.icon;
  return /* @__PURE__ */ y.jsx(y.Fragment, { children: /* @__PURE__ */ y.jsx("article", { className: "sidebar-field", children: /* @__PURE__ */ y.jsxs("div", { className: "item-panel-item flex p-2 w-100", children: [
    /* @__PURE__ */ y.jsx("div", { className: "item-icon mr-2", children: /* @__PURE__ */ y.jsx(t, {}) }),
    /* @__PURE__ */ y.jsxs("div", { children: [
      /* @__PURE__ */ y.jsx("div", { className: "item-title", children: n.heading }),
      /* @__PURE__ */ y.jsx("div", { className: "item-text", children: n.description })
    ] })
  ] }) }) });
}
function Lm({ item: n }) {
  const t = Xe(Cn()), { attributes: e, listeners: o, setNodeRef: r } = Ws({
    id: t.current,
    data: {
      item: n,
      fromSidebar: !0
    }
  });
  return /* @__PURE__ */ y.jsx("div", { ref: r, className: "sidebar-field", ...e, ...o, children: /* @__PURE__ */ y.jsx(fc, { item: n }) });
}
function $m({ ...n }) {
  const [t, e] = Le(0), o = {};
  An.map((a) => {
    var l, s;
    const i = ((l = a.group) == null ? void 0 : l.label) || "";
    Object.keys(o).includes(i) || (o[i] = {
      label: ((s = a.group) == null ? void 0 : s.label) || "",
      items: []
    }), o[i].items.push(a);
  });
  const r = (a) => {
    e(a);
  };
  return /* @__PURE__ */ y.jsx(y.Fragment, { children: /* @__PURE__ */ y.jsxs(
    dc,
    {
      activeIndex: t,
      onTabChange: (a) => r(a.index),
      className: "sidebar",
      children: [
        /* @__PURE__ */ y.jsxs(yo, { header: "Items", children: [
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          /* @__PURE__ */ y.jsx(vn, { activeIndex: 0, children: Object.keys(o).map((a) => /* @__PURE__ */ y.jsx(on, { header: o[a].label, children: o[a].items.map((i) => /* @__PURE__ */ y.jsx(Lm, { item: i }, `sidebar-${i.type}`)) }, a)) })
        ] }),
        /* @__PURE__ */ y.jsxs(yo, { header: "Forms", children: [
          "forms ",
          JSON.stringify(n.form)
        ] }),
        /* @__PURE__ */ y.jsx(yo, { header: "Variables", children: "list of variables this form can replace" })
      ]
    }
  ) });
}
function mr(n) {
  var t;
  return ((t = n == null ? void 0 : n.data) == null ? void 0 : t.current) ?? {};
}
const Bm = ({ ...n }) => {
  const { form: t, setForm: e } = Wl(n.form), [o, r] = Le(void 0);
  Ie(() => {
    n.form && e(n.form);
  }, [n.form]), Ie(() => {
    t && n.onChange(t);
  }, [t]);
  const a = Ss(
    _o(Go),
    _o(Yo, {
      coordinateGetter: Qs
    })
  ), [i, l] = Le(), [s, c] = Le(), d = () => {
    l(void 0), c(void 0);
  }, f = (g) => {
    const { active: O } = g, w = mr(O), { item: x } = w;
    if (w.fromSidebar) {
      const S = x.data;
      S.id = Cn(), x.id = S.id, l(x), r(S);
    } else
      c(w.item);
  }, v = (g) => {
    const { active: O, over: w } = g, x = mr(O), S = mr(w);
    if (x.fromSidebar)
      if (t.items.findIndex((P) => P.id === x.item.id) == -1) {
        t.items.push(x.item.data);
        const P = t.items.findIndex((T) => T.id === x.item.id), b = t.items.findIndex((T) => T.id === S.id);
        b != -1 && b != P && (t.items = Yn(t.items, P, b)), e(t);
      } else if (!w)
        t.items = t.items.filter((P) => P.id !== x.item.id), e(t);
      else {
        const P = t.items.findIndex((T) => T.id === x.item.id), b = t.items.findIndex((T) => T.id === S.id);
        t.items = Yn(t.items, P, b), e(t);
      }
    else
      t.items.findIndex((P) => P.id === x.item.id), t.items.findIndex((P) => P.id === S.id);
  }, m = (g) => {
    const { active: O, over: w } = g, x = mr(O), S = mr(w), P = t.items.findIndex((T) => T.id === x.item.id), b = t.items.findIndex((T) => T.id === S.id);
    P != b && (t.items = Yn(t.items, P, b), e(t)), d();
  }, C = {
    form: t,
    onFormChange: e,
    activeItem: o,
    setActiveItem: r,
    config: n.config
  };
  return t ? /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    /* @__PURE__ */ y.jsx("div", { className: "form-builder", children: /* @__PURE__ */ y.jsxs(
      Bs,
      {
        sensors: a,
        onDragStart: f,
        onDragOver: v,
        onDragEnd: m,
        collisionDetection: qs,
        autoScroll: !0,
        children: [
          /* @__PURE__ */ y.jsx("div", { className: "sidebar-area", children: /* @__PURE__ */ y.jsx($m, { ...C }) }),
          /* @__PURE__ */ y.jsx("div", { className: "canvas-area", children: /* @__PURE__ */ y.jsx(
            Xs,
            {
              strategy: Qp,
              items: t.items.map((g) => g.id),
              children: /* @__PURE__ */ y.jsx(Cm, { ...C })
            }
          ) }),
          /* @__PURE__ */ y.jsx("div", { className: "properties-area", children: /* @__PURE__ */ y.jsx(Om, { ...C }) }),
          /* @__PURE__ */ y.jsxs(Gp, { dropAnimation: null, children: [
            i ? /* @__PURE__ */ y.jsx(fc, { item: i }) : null,
            " ",
            s ? /* @__PURE__ */ y.jsx(
              wi,
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
    /* @__PURE__ */ y.jsx(lc, {})
  ] }) : /* @__PURE__ */ y.jsx(y.Fragment, { children: /* @__PURE__ */ y.jsx("div", { children: "No form config loaded" }) });
}, Fm = ({ ...n }) => {
  var r;
  const { form: t, setForm: e } = Wl(n.form);
  Ie(() => {
    n.form && e(n.form);
  }, [n.form]), Ie(() => {
    t && n.onChange(t);
  }, [t]);
  const o = (a) => {
    t.items = t.items.map((i) => i.id == a.id ? a : i), e(t);
  };
  return t && t.id ? /* @__PURE__ */ y.jsx(y.Fragment, { children: /* @__PURE__ */ y.jsxs("div", { className: "form-area", children: [
    /* @__PURE__ */ y.jsx("h1", { children: t.label }),
    (r = t.items) == null ? void 0 : r.map((a) => /* @__PURE__ */ y.jsx(
      wi,
      {
        item: a,
        onChange: o,
        form: t,
        config: n.config
      },
      a.id
    ))
  ] }) }) : /* @__PURE__ */ y.jsx(y.Fragment, { children: /* @__PURE__ */ y.jsx("div", { children: "No form config loaded" }) });
};
export {
  Fm as Form,
  Bm as FormBuilder,
  wi as Item
};
//# sourceMappingURL=index.js.map
