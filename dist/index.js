import * as d from "react";
import ze, { useState as it, useEffect as We, useContext as zn, useRef as Et, useLayoutEffect as Vd, useCallback as pn, useMemo as kt, createContext as $a, memo as Wd, useReducer as vl, cloneElement as Kd, forwardRef as Ud } from "react";
import ga, { unstable_batchedUpdates as ca, createPortal as Yd } from "react-dom";
function Gd(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Pi = { exports: {} }, ua = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ns;
function Xd() {
  if (ns) return ua;
  ns = 1;
  var n = ze, t = Symbol.for("react.element"), e = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, r = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(l, c, f) {
    var p, v = {}, x = null, b = null;
    f !== void 0 && (x = "" + f), c.key !== void 0 && (x = "" + c.key), c.ref !== void 0 && (b = c.ref);
    for (p in c) a.call(c, p) && !o.hasOwnProperty(p) && (v[p] = c[p]);
    if (l && l.defaultProps) for (p in c = l.defaultProps, c) v[p] === void 0 && (v[p] = c[p]);
    return { $$typeof: t, type: l, key: x, ref: b, props: v, _owner: r.current };
  }
  return ua.Fragment = e, ua.jsx = i, ua.jsxs = i, ua;
}
var da = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rs;
function Jd() {
  return rs || (rs = 1, process.env.NODE_ENV !== "production" && function() {
    var n = ze, t = Symbol.for("react.element"), e = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), k = Symbol.iterator, y = "@@iterator";
    function q(h) {
      if (h === null || typeof h != "object")
        return null;
      var D = k && h[k] || h[y];
      return typeof D == "function" ? D : null;
    }
    var O = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(h) {
      {
        for (var D = arguments.length, ne = new Array(D > 1 ? D - 1 : 0), xe = 1; xe < D; xe++)
          ne[xe - 1] = arguments[xe];
        P("error", h, ne);
      }
    }
    function P(h, D, ne) {
      {
        var xe = O.ReactDebugCurrentFrame, Re = xe.getStackAddendum();
        Re !== "" && (D += "%s", ne = ne.concat([Re]));
        var Se = ne.map(function($) {
          return String($);
        });
        Se.unshift("Warning: " + D), Function.prototype.apply.call(console[h], console, Se);
      }
    }
    var A = !1, C = !1, K = !1, S = !1, H = !1, X;
    X = Symbol.for("react.module.reference");
    function U(h) {
      return !!(typeof h == "string" || typeof h == "function" || h === a || h === o || H || h === r || h === f || h === p || S || h === b || A || C || K || typeof h == "object" && h !== null && (h.$$typeof === x || h.$$typeof === v || h.$$typeof === i || h.$$typeof === l || h.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      h.$$typeof === X || h.getModuleId !== void 0));
    }
    function I(h, D, ne) {
      var xe = h.displayName;
      if (xe)
        return xe;
      var Re = D.displayName || D.name || "";
      return Re !== "" ? ne + "(" + Re + ")" : ne;
    }
    function oe(h) {
      return h.displayName || "Context";
    }
    function Y(h) {
      if (h == null)
        return null;
      if (typeof h.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
        return h.displayName || h.name || null;
      if (typeof h == "string")
        return h;
      switch (h) {
        case a:
          return "Fragment";
        case e:
          return "Portal";
        case o:
          return "Profiler";
        case r:
          return "StrictMode";
        case f:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case l:
            var D = h;
            return oe(D) + ".Consumer";
          case i:
            var ne = h;
            return oe(ne._context) + ".Provider";
          case c:
            return I(h, h.render, "ForwardRef");
          case v:
            var xe = h.displayName || null;
            return xe !== null ? xe : Y(h.type) || "Memo";
          case x: {
            var Re = h, Se = Re._payload, $ = Re._init;
            try {
              return Y($(Se));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ve = Object.assign, ge = 0, Ce, Oe, we, de, F, se, ae;
    function N() {
    }
    N.__reactDisabledLog = !0;
    function j() {
      {
        if (ge === 0) {
          Ce = console.log, Oe = console.info, we = console.warn, de = console.error, F = console.group, se = console.groupCollapsed, ae = console.groupEnd;
          var h = {
            configurable: !0,
            enumerable: !0,
            value: N,
            writable: !0
          };
          Object.defineProperties(console, {
            info: h,
            log: h,
            warn: h,
            error: h,
            group: h,
            groupCollapsed: h,
            groupEnd: h
          });
        }
        ge++;
      }
    }
    function B() {
      {
        if (ge--, ge === 0) {
          var h = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ve({}, h, {
              value: Ce
            }),
            info: ve({}, h, {
              value: Oe
            }),
            warn: ve({}, h, {
              value: we
            }),
            error: ve({}, h, {
              value: de
            }),
            group: ve({}, h, {
              value: F
            }),
            groupCollapsed: ve({}, h, {
              value: se
            }),
            groupEnd: ve({}, h, {
              value: ae
            })
          });
        }
        ge < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Z = O.ReactCurrentDispatcher, ie;
    function V(h, D, ne) {
      {
        if (ie === void 0)
          try {
            throw Error();
          } catch (Re) {
            var xe = Re.stack.trim().match(/\n( *(at )?)/);
            ie = xe && xe[1] || "";
          }
        return `
` + ie + h;
      }
    }
    var z = !1, ee;
    {
      var Ee = typeof WeakMap == "function" ? WeakMap : Map;
      ee = new Ee();
    }
    function te(h, D) {
      if (!h || z)
        return "";
      {
        var ne = ee.get(h);
        if (ne !== void 0)
          return ne;
      }
      var xe;
      z = !0;
      var Re = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Se;
      Se = Z.current, Z.current = null, j();
      try {
        if (D) {
          var $ = function() {
            throw Error();
          };
          if (Object.defineProperty($.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct($, []);
            } catch (Fe) {
              xe = Fe;
            }
            Reflect.construct(h, [], $);
          } else {
            try {
              $.call();
            } catch (Fe) {
              xe = Fe;
            }
            h.call($.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Fe) {
            xe = Fe;
          }
          h();
        }
      } catch (Fe) {
        if (Fe && xe && typeof Fe.stack == "string") {
          for (var W = Fe.stack.split(`
`), ue = xe.stack.split(`
`), me = W.length - 1, he = ue.length - 1; me >= 1 && he >= 0 && W[me] !== ue[he]; )
            he--;
          for (; me >= 1 && he >= 0; me--, he--)
            if (W[me] !== ue[he]) {
              if (me !== 1 || he !== 1)
                do
                  if (me--, he--, he < 0 || W[me] !== ue[he]) {
                    var be = `
` + W[me].replace(" at new ", " at ");
                    return h.displayName && be.includes("<anonymous>") && (be = be.replace("<anonymous>", h.displayName)), typeof h == "function" && ee.set(h, be), be;
                  }
                while (me >= 1 && he >= 0);
              break;
            }
        }
      } finally {
        z = !1, Z.current = Se, B(), Error.prepareStackTrace = Re;
      }
      var Te = h ? h.displayName || h.name : "", Ye = Te ? V(Te) : "";
      return typeof h == "function" && ee.set(h, Ye), Ye;
    }
    function Ae(h, D, ne) {
      return te(h, !1);
    }
    function Je(h) {
      var D = h.prototype;
      return !!(D && D.isReactComponent);
    }
    function Ue(h, D, ne) {
      if (h == null)
        return "";
      if (typeof h == "function")
        return te(h, Je(h));
      if (typeof h == "string")
        return V(h);
      switch (h) {
        case f:
          return V("Suspense");
        case p:
          return V("SuspenseList");
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case c:
            return Ae(h.render);
          case v:
            return Ue(h.type, D, ne);
          case x: {
            var xe = h, Re = xe._payload, Se = xe._init;
            try {
              return Ue(Se(Re), D, ne);
            } catch {
            }
          }
        }
      return "";
    }
    var Ne = Object.prototype.hasOwnProperty, nt = {}, $t = O.ReactDebugCurrentFrame;
    function It(h) {
      if (h) {
        var D = h._owner, ne = Ue(h.type, h._source, D ? D.type : null);
        $t.setExtraStackFrame(ne);
      } else
        $t.setExtraStackFrame(null);
    }
    function Ze(h, D, ne, xe, Re) {
      {
        var Se = Function.call.bind(Ne);
        for (var $ in h)
          if (Se(h, $)) {
            var W = void 0;
            try {
              if (typeof h[$] != "function") {
                var ue = Error((xe || "React class") + ": " + ne + " type `" + $ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[$] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ue.name = "Invariant Violation", ue;
              }
              W = h[$](D, $, xe, ne, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (me) {
              W = me;
            }
            W && !(W instanceof Error) && (It(Re), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", xe || "React class", ne, $, typeof W), It(null)), W instanceof Error && !(W.message in nt) && (nt[W.message] = !0, It(Re), E("Failed %s type: %s", ne, W.message), It(null));
          }
      }
    }
    var Ct = Array.isArray;
    function _t(h) {
      return Ct(h);
    }
    function St(h) {
      {
        var D = typeof Symbol == "function" && Symbol.toStringTag, ne = D && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return ne;
      }
    }
    function Ot(h) {
      try {
        return vt(h), !1;
      } catch {
        return !0;
      }
    }
    function vt(h) {
      return "" + h;
    }
    function on(h) {
      if (Ot(h))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", St(h)), vt(h);
    }
    var mt = O.ReactCurrentOwner, Pt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Rt, Ht, jt;
    jt = {};
    function At(h) {
      if (Ne.call(h, "ref")) {
        var D = Object.getOwnPropertyDescriptor(h, "ref").get;
        if (D && D.isReactWarning)
          return !1;
      }
      return h.ref !== void 0;
    }
    function Le(h) {
      if (Ne.call(h, "key")) {
        var D = Object.getOwnPropertyDescriptor(h, "key").get;
        if (D && D.isReactWarning)
          return !1;
      }
      return h.key !== void 0;
    }
    function re(h, D) {
      if (typeof h.ref == "string" && mt.current && D && mt.current.stateNode !== D) {
        var ne = Y(mt.current.type);
        jt[ne] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Y(mt.current.type), h.ref), jt[ne] = !0);
      }
    }
    function De(h, D) {
      {
        var ne = function() {
          Rt || (Rt = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        ne.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: ne,
          configurable: !0
        });
      }
    }
    function Be(h, D) {
      {
        var ne = function() {
          Ht || (Ht = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        ne.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: ne,
          configurable: !0
        });
      }
    }
    var je = function(h, D, ne, xe, Re, Se, $) {
      var W = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: h,
        key: D,
        ref: ne,
        props: $,
        // Record the component responsible for creating this element.
        _owner: Se
      };
      return W._store = {}, Object.defineProperty(W._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(W, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: xe
      }), Object.defineProperty(W, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Re
      }), Object.freeze && (Object.freeze(W.props), Object.freeze(W)), W;
    };
    function $e(h, D, ne, xe, Re) {
      {
        var Se, $ = {}, W = null, ue = null;
        ne !== void 0 && (on(ne), W = "" + ne), Le(D) && (on(D.key), W = "" + D.key), At(D) && (ue = D.ref, re(D, Re));
        for (Se in D)
          Ne.call(D, Se) && !Pt.hasOwnProperty(Se) && ($[Se] = D[Se]);
        if (h && h.defaultProps) {
          var me = h.defaultProps;
          for (Se in me)
            $[Se] === void 0 && ($[Se] = me[Se]);
        }
        if (W || ue) {
          var he = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          W && De($, he), ue && Be($, he);
        }
        return je(h, W, ue, Re, xe, mt.current, $);
      }
    }
    var ft = O.ReactCurrentOwner, Mt = O.ReactDebugCurrentFrame;
    function rt(h) {
      if (h) {
        var D = h._owner, ne = Ue(h.type, h._source, D ? D.type : null);
        Mt.setExtraStackFrame(ne);
      } else
        Mt.setExtraStackFrame(null);
    }
    var Qe;
    Qe = !1;
    function et(h) {
      return typeof h == "object" && h !== null && h.$$typeof === t;
    }
    function lt() {
      {
        if (ft.current) {
          var h = Y(ft.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
    }
    function ht(h) {
      return "";
    }
    var Ie = {};
    function J(h) {
      {
        var D = lt();
        if (!D) {
          var ne = typeof h == "string" ? h : h.displayName || h.name;
          ne && (D = `

Check the top-level render call using <` + ne + ">.");
        }
        return D;
      }
    }
    function fe(h, D) {
      {
        if (!h._store || h._store.validated || h.key != null)
          return;
        h._store.validated = !0;
        var ne = J(D);
        if (Ie[ne])
          return;
        Ie[ne] = !0;
        var xe = "";
        h && h._owner && h._owner !== ft.current && (xe = " It was passed a child from " + Y(h._owner.type) + "."), rt(h), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ne, xe), rt(null);
      }
    }
    function pe(h, D) {
      {
        if (typeof h != "object")
          return;
        if (_t(h))
          for (var ne = 0; ne < h.length; ne++) {
            var xe = h[ne];
            et(xe) && fe(xe, D);
          }
        else if (et(h))
          h._store && (h._store.validated = !0);
        else if (h) {
          var Re = q(h);
          if (typeof Re == "function" && Re !== h.entries)
            for (var Se = Re.call(h), $; !($ = Se.next()).done; )
              et($.value) && fe($.value, D);
        }
      }
    }
    function Pe(h) {
      {
        var D = h.type;
        if (D == null || typeof D == "string")
          return;
        var ne;
        if (typeof D == "function")
          ne = D.propTypes;
        else if (typeof D == "object" && (D.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        D.$$typeof === v))
          ne = D.propTypes;
        else
          return;
        if (ne) {
          var xe = Y(D);
          Ze(ne, h.props, "prop", xe, h);
        } else if (D.PropTypes !== void 0 && !Qe) {
          Qe = !0;
          var Re = Y(D);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Re || "Unknown");
        }
        typeof D.getDefaultProps == "function" && !D.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function st(h) {
      {
        for (var D = Object.keys(h.props), ne = 0; ne < D.length; ne++) {
          var xe = D[ne];
          if (xe !== "children" && xe !== "key") {
            rt(h), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", xe), rt(null);
            break;
          }
        }
        h.ref !== null && (rt(h), E("Invalid attribute `ref` supplied to `React.Fragment`."), rt(null));
      }
    }
    var wt = {};
    function Bt(h, D, ne, xe, Re, Se) {
      {
        var $ = U(h);
        if (!$) {
          var W = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (W += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ue = ht();
          ue ? W += ue : W += lt();
          var me;
          h === null ? me = "null" : _t(h) ? me = "array" : h !== void 0 && h.$$typeof === t ? (me = "<" + (Y(h.type) || "Unknown") + " />", W = " Did you accidentally export a JSX literal instead of a component?") : me = typeof h, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", me, W);
        }
        var he = $e(h, D, ne, Re, Se);
        if (he == null)
          return he;
        if ($) {
          var be = D.children;
          if (be !== void 0)
            if (xe)
              if (_t(be)) {
                for (var Te = 0; Te < be.length; Te++)
                  pe(be[Te], h);
                Object.freeze && Object.freeze(be);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              pe(be, h);
        }
        if (Ne.call(D, "key")) {
          var Ye = Y(h), Fe = Object.keys(D).filter(function(Dt) {
            return Dt !== "key";
          }), gt = Fe.length > 0 ? "{key: someKey, " + Fe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!wt[Ye + gt]) {
            var Lt = Fe.length > 0 ? "{" + Fe.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, gt, Ye, Lt, Ye), wt[Ye + gt] = !0;
          }
        }
        return h === a ? st(he) : Pe(he), he;
      }
    }
    function Qt(h, D, ne) {
      return Bt(h, D, ne, !0);
    }
    function zt(h, D, ne) {
      return Bt(h, D, ne, !1);
    }
    var Wt = zt, en = Qt;
    da.Fragment = a, da.jsx = Wt, da.jsxs = en;
  }()), da;
}
process.env.NODE_ENV === "production" ? Pi.exports = Xd() : Pi.exports = Jd();
var T = Pi.exports;
class Zd {
  constructor(t) {
    this.label = t;
  }
}
class Lo extends Zd {
  constructor(t) {
    super(
      t.label
    );
  }
}
class Qd {
  constructor(t, e) {
    this.render = t, this.validation = e;
  }
}
class Tn extends Qd {
  constructor(t) {
    super(
      t.render,
      t.validation
    );
  }
}
class ef {
  constructor(t, e, a, r, o, i, l, c, f) {
    this.form = t, this.settings = e, this.type = a, this.heading = r, this.description = o, this.hidden = i, this.icon = l, this.config = c, this.group = f, this.group || (this.group = new Lo({
      label: "None"
    }));
  }
}
class Qr extends ef {
  constructor(t) {
    super(
      t.form,
      t.settings,
      t.type,
      t.heading,
      t.description,
      t.hidden,
      t.icon,
      t.config,
      t.group
    );
  }
}
class Fo {
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
    return this.items.map((e, a, r) => t(e, a, r));
  }
}
const ci = {
  id: null,
  label: null,
  created_at: null,
  config: []
}, tf = (n = ci) => {
  const [t, e] = it({ ...ci, ...n });
  return {
    form: t,
    setForm: (a) => {
      e({ ...ci, ...a });
    }
  };
}, nf = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let mr = (n = 21) => {
  let t = "", e = crypto.getRandomValues(new Uint8Array(n));
  for (; n--; )
    t += nf[e[n] & 63];
  return t;
};
const Kr = {
  id: mr(),
  type: "content-html",
  label: "",
  value: "",
  placeholder: ""
}, rf = ({ config: n, onChange: t }) => {
  const [e, a] = it({ ...Kr, ...n });
  We(() => {
    a({ ...Kr, ...n });
  }, [n]);
  const r = Math.random().toString(36).substring(2, 15);
  return /* @__PURE__ */ T.jsx(T.Fragment, { children: /* @__PURE__ */ T.jsxs("div", { className: "flex flex-column gap-2", children: [
    /* @__PURE__ */ T.jsx("label", { htmlFor: r, children: e.label }),
    /* @__PURE__ */ T.jsx("div", { dangerouslySetInnerHTML: { __html: e.value } })
  ] }) });
}, af = (n) => ({});
var as;
function Di() {
  return Di = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var a in e) ({}).hasOwnProperty.call(e, a) && (n[a] = e[a]);
    }
    return n;
  }, Di.apply(null, arguments);
}
var of = function(t) {
  return /* @__PURE__ */ d.createElement("svg", Di({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 512"
  }, t), as || (as = /* @__PURE__ */ d.createElement("path", {
    d: "M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6m80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3l89.3 89.4-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3"
  })));
};
function lf(n) {
  if (Array.isArray(n)) return n;
}
function sf(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var a, r, o, i, l = [], c = !0, f = !1;
    try {
      if (o = (e = e.call(n)).next, t !== 0) for (; !(c = (a = o.call(e)).done) && (l.push(a.value), l.length !== t); c = !0) ;
    } catch (p) {
      f = !0, r = p;
    } finally {
      try {
        if (!c && e.return != null && (i = e.return(), Object(i) !== i)) return;
      } finally {
        if (f) throw r;
      }
    }
    return l;
  }
}
function Ti(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, a = new Array(t); e < t; e++) a[e] = n[e];
  return a;
}
function Tc(n, t) {
  if (n) {
    if (typeof n == "string") return Ti(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Ti(n, t);
  }
}
function cf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wo(n, t) {
  return lf(n) || sf(n, t) || Tc(n, t) || cf();
}
function an(n) {
  "@babel/helpers - typeof";
  return an = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, an(n);
}
function qe() {
  for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++)
    t[e] = arguments[e];
  if (t) {
    for (var a = [], r = 0; r < t.length; r++) {
      var o = t[r];
      if (o) {
        var i = an(o);
        if (i === "string" || i === "number")
          a.push(o);
        else if (i === "object") {
          var l = Array.isArray(o) ? o : Object.entries(o).map(function(c) {
            var f = wo(c, 2), p = f[0], v = f[1];
            return v ? p : null;
          });
          a = l.length ? a.concat(l.filter(function(c) {
            return !!c;
          })) : a;
        }
      }
    }
    return a.join(" ").trim();
  }
}
function uf(n) {
  if (Array.isArray(n)) return Ti(n);
}
function df(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function ff() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Co(n) {
  return uf(n) || df(n) || Tc(n) || ff();
}
function ml(n, t) {
  if (!(n instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function pf(n, t) {
  if (an(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var a = e.call(n, t || "default");
    if (an(a) !== "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function kc(n) {
  var t = pf(n, "string");
  return an(t) === "symbol" ? t : String(t);
}
function vf(n, t) {
  for (var e = 0; e < t.length; e++) {
    var a = t[e];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, kc(a.key), a);
  }
}
function gl(n, t, e) {
  return e && vf(n, e), Object.defineProperty(n, "prototype", {
    writable: !1
  }), n;
}
function Ha(n, t, e) {
  return t = kc(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function ui(n, t) {
  var e = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (!e) {
    if (Array.isArray(n) || (e = mf(n)) || t) {
      e && (n = e);
      var a = 0, r = function() {
      };
      return { s: r, n: function() {
        return a >= n.length ? { done: !0 } : { done: !1, value: n[a++] };
      }, e: function(f) {
        throw f;
      }, f: r };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0, i = !1, l;
  return { s: function() {
    e = e.call(n);
  }, n: function() {
    var f = e.next();
    return o = f.done, f;
  }, e: function(f) {
    i = !0, l = f;
  }, f: function() {
    try {
      !o && e.return != null && e.return();
    } finally {
      if (i) throw l;
    }
  } };
}
function mf(n, t) {
  if (n) {
    if (typeof n == "string") return os(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return os(n, t);
  }
}
function os(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, a = new Array(t); e < t; e++) a[e] = n[e];
  return a;
}
var M = /* @__PURE__ */ function() {
  function n() {
    ml(this, n);
  }
  return gl(n, null, [{
    key: "innerWidth",
    value: function(e) {
      if (e) {
        var a = e.offsetWidth, r = getComputedStyle(e);
        return a = a + (parseFloat(r.paddingLeft) + parseFloat(r.paddingRight)), a;
      }
      return 0;
    }
  }, {
    key: "width",
    value: function(e) {
      if (e) {
        var a = e.offsetWidth, r = getComputedStyle(e);
        return a = a - (parseFloat(r.paddingLeft) + parseFloat(r.paddingRight)), a;
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
    value: function(e, a) {
      if (e) {
        var r = e.getBoundingClientRect().width || e.offsetWidth;
        if (a) {
          var o = getComputedStyle(e);
          r = r + (parseFloat(o.marginLeft) + parseFloat(o.marginRight));
        }
        return r;
      }
      return 0;
    }
  }, {
    key: "getOuterHeight",
    value: function(e, a) {
      if (e) {
        var r = e.getBoundingClientRect().height || e.offsetHeight;
        if (a) {
          var o = getComputedStyle(e);
          r = r + (parseFloat(o.marginTop) + parseFloat(o.marginBottom));
        }
        return r;
      }
      return 0;
    }
  }, {
    key: "getClientHeight",
    value: function(e, a) {
      if (e) {
        var r = e.clientHeight;
        if (a) {
          var o = getComputedStyle(e);
          r = r + (parseFloat(o.marginTop) + parseFloat(o.marginBottom));
        }
        return r;
      }
      return 0;
    }
  }, {
    key: "getClientWidth",
    value: function(e, a) {
      if (e) {
        var r = e.clientWidth;
        if (a) {
          var o = getComputedStyle(e);
          r = r + (parseFloat(o.marginLeft) + parseFloat(o.marginRight));
        }
        return r;
      }
      return 0;
    }
  }, {
    key: "getViewport",
    value: function() {
      var e = window, a = document, r = a.documentElement, o = a.getElementsByTagName("body")[0], i = e.innerWidth || r.clientWidth || o.clientWidth, l = e.innerHeight || r.clientHeight || o.clientHeight;
      return {
        width: i,
        height: l
      };
    }
  }, {
    key: "getOffset",
    value: function(e) {
      if (e) {
        var a = e.getBoundingClientRect();
        return {
          top: a.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
          left: a.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
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
        for (var a = e.parentNode.childNodes, r = 0, o = 0; o < a.length; o++) {
          if (a[o] === e)
            return r;
          a[o].nodeType === 1 && r++;
        }
      return -1;
    }
  }, {
    key: "addMultipleClasses",
    value: function(e, a) {
      if (e && a)
        if (e.classList)
          for (var r = a.split(" "), o = 0; o < r.length; o++)
            e.classList.add(r[o]);
        else
          for (var i = a.split(" "), l = 0; l < i.length; l++)
            e.className = e.className + (" " + i[l]);
    }
  }, {
    key: "removeMultipleClasses",
    value: function(e, a) {
      if (e && a)
        if (e.classList)
          for (var r = a.split(" "), o = 0; o < r.length; o++)
            e.classList.remove(r[o]);
        else
          for (var i = a.split(" "), l = 0; l < i.length; l++)
            e.className = e.className.replace(new RegExp("(^|\\b)" + i[l].split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
  }, {
    key: "addClass",
    value: function(e, a) {
      e && a && (e.classList ? e.classList.add(a) : e.className = e.className + (" " + a));
    }
  }, {
    key: "removeClass",
    value: function(e, a) {
      e && a && (e.classList ? e.classList.remove(a) : e.className = e.className.replace(new RegExp("(^|\\b)" + a.split(" ").join("|") + "(\\b|$)", "gi"), " "));
    }
  }, {
    key: "hasClass",
    value: function(e, a) {
      return e ? e.classList ? e.classList.contains(a) : new RegExp("(^| )" + a + "( |$)", "gi").test(e.className) : !1;
    }
  }, {
    key: "addStyles",
    value: function(e) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      e && Object.entries(a).forEach(function(r) {
        var o = wo(r, 2), i = o[0], l = o[1];
        return e.style[i] = l;
      });
    }
  }, {
    key: "find",
    value: function(e, a) {
      return e ? Array.from(e.querySelectorAll(a)) : [];
    }
  }, {
    key: "findSingle",
    value: function(e, a) {
      return e ? e.querySelector(a) : null;
    }
  }, {
    key: "setAttributes",
    value: function(e) {
      var a = this, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (e) {
        var o = function i(l, c) {
          var f, p, v = e != null && (f = e.$attrs) !== null && f !== void 0 && f[l] ? [e == null || (p = e.$attrs) === null || p === void 0 ? void 0 : p[l]] : [];
          return [c].flat().reduce(function(x, b) {
            if (b != null) {
              var k = an(b);
              if (k === "string" || k === "number")
                x.push(b);
              else if (k === "object") {
                var y = Array.isArray(b) ? i(l, b) : Object.entries(b).map(function(q) {
                  var O = wo(q, 2), E = O[0], P = O[1];
                  return l === "style" && (P || P === 0) ? "".concat(E.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), ":").concat(P) : P ? E : void 0;
                });
                x = y.length ? x.concat(y.filter(function(q) {
                  return !!q;
                })) : x;
              }
            }
            return x;
          }, v);
        };
        Object.entries(r).forEach(function(i) {
          var l = wo(i, 2), c = l[0], f = l[1];
          if (f != null) {
            var p = c.match(/^on(.+)/);
            p ? e.addEventListener(p[1].toLowerCase(), f) : c === "p-bind" ? a.setAttributes(e, f) : (f = c === "class" ? Co(new Set(o("class", f))).join(" ").trim() : c === "style" ? o("style", f).join(";").trim() : f, (e.$attrs = e.$attrs || {}) && (e.$attrs[c] = f), e.setAttribute(c, f));
          }
        });
      }
    }
  }, {
    key: "getAttribute",
    value: function(e, a) {
      if (e) {
        var r = e.getAttribute(a);
        return isNaN(r) ? r === "true" || r === "false" ? r === "true" : r : +r;
      }
    }
  }, {
    key: "isAttributeEquals",
    value: function(e, a, r) {
      return e ? this.getAttribute(e, a) === r : !1;
    }
  }, {
    key: "isAttributeNotEquals",
    value: function(e, a, r) {
      return !this.isAttributeEquals(e, a, r);
    }
  }, {
    key: "getHeight",
    value: function(e) {
      if (e) {
        var a = e.offsetHeight, r = getComputedStyle(e);
        return a = a - (parseFloat(r.paddingTop) + parseFloat(r.paddingBottom) + parseFloat(r.borderTopWidth) + parseFloat(r.borderBottomWidth)), a;
      }
      return 0;
    }
  }, {
    key: "getWidth",
    value: function(e) {
      if (e) {
        var a = e.offsetWidth, r = getComputedStyle(e);
        return a = a - (parseFloat(r.paddingLeft) + parseFloat(r.paddingRight) + parseFloat(r.borderLeftWidth) + parseFloat(r.borderRightWidth)), a;
      }
      return 0;
    }
  }, {
    key: "alignOverlay",
    value: function(e, a, r) {
      var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0;
      e && a && (r === "self" ? this.relativePosition(e, a) : (o && (e.style.minWidth = n.getOuterWidth(a) + "px"), this.absolutePosition(e, a)));
    }
  }, {
    key: "absolutePosition",
    value: function(e, a) {
      var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "left";
      if (e && a) {
        var o = e.offsetParent ? {
          width: e.offsetWidth,
          height: e.offsetHeight
        } : this.getHiddenElementDimensions(e), i = o.height, l = o.width, c = a.offsetHeight, f = a.offsetWidth, p = a.getBoundingClientRect(), v = this.getWindowScrollTop(), x = this.getWindowScrollLeft(), b = this.getViewport(), k, y;
        p.top + c + i > b.height ? (k = p.top + v - i, k < 0 && (k = v), e.style.transformOrigin = "bottom") : (k = c + p.top + v, e.style.transformOrigin = "top");
        var q = p.left, O = r === "left" ? 0 : l - f;
        q + f + l > b.width ? y = Math.max(0, q + x + f - l) : y = q - O + x, e.style.top = k + "px", e.style.left = y + "px";
      }
    }
  }, {
    key: "relativePosition",
    value: function(e, a) {
      if (e && a) {
        var r = e.offsetParent ? {
          width: e.offsetWidth,
          height: e.offsetHeight
        } : this.getHiddenElementDimensions(e), o = a.offsetHeight, i = a.getBoundingClientRect(), l = this.getViewport(), c, f;
        i.top + o + r.height > l.height ? (c = -1 * r.height, i.top + c < 0 && (c = -1 * i.top), e.style.transformOrigin = "bottom") : (c = o, e.style.transformOrigin = "top"), r.width > l.width ? f = i.left * -1 : i.left + r.width > l.width ? f = (i.left + r.width - l.width) * -1 : f = 0, e.style.top = c + "px", e.style.left = f + "px";
      }
    }
  }, {
    key: "flipfitCollision",
    value: function(e, a) {
      var r = this, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "left top", i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "left bottom", l = arguments.length > 4 ? arguments[4] : void 0;
      if (e && a) {
        var c = a.getBoundingClientRect(), f = this.getViewport(), p = o.split(" "), v = i.split(" "), x = function(O, E) {
          return E ? +O.substring(O.search(/(\+|-)/g)) || 0 : O.substring(0, O.search(/(\+|-)/g)) || O;
        }, b = {
          my: {
            x: x(p[0]),
            y: x(p[1] || p[0]),
            offsetX: x(p[0], !0),
            offsetY: x(p[1] || p[0], !0)
          },
          at: {
            x: x(v[0]),
            y: x(v[1] || v[0]),
            offsetX: x(v[0], !0),
            offsetY: x(v[1] || v[0], !0)
          }
        }, k = {
          left: function() {
            var O = b.my.offsetX + b.at.offsetX;
            return O + c.left + (b.my.x === "left" ? 0 : -1 * (b.my.x === "center" ? r.getOuterWidth(e) / 2 : r.getOuterWidth(e)));
          },
          top: function() {
            var O = b.my.offsetY + b.at.offsetY;
            return O + c.top + (b.my.y === "top" ? 0 : -1 * (b.my.y === "center" ? r.getOuterHeight(e) / 2 : r.getOuterHeight(e)));
          }
        }, y = {
          count: {
            x: 0,
            y: 0
          },
          left: function() {
            var O = k.left(), E = n.getWindowScrollLeft();
            e.style.left = O + E + "px", this.count.x === 2 ? (e.style.left = E + "px", this.count.x = 0) : O < 0 && (this.count.x++, b.my.x = "left", b.at.x = "right", b.my.offsetX *= -1, b.at.offsetX *= -1, this.right());
          },
          right: function() {
            var O = k.left() + n.getOuterWidth(a), E = n.getWindowScrollLeft();
            e.style.left = O + E + "px", this.count.x === 2 ? (e.style.left = f.width - n.getOuterWidth(e) + E + "px", this.count.x = 0) : O + n.getOuterWidth(e) > f.width && (this.count.x++, b.my.x = "right", b.at.x = "left", b.my.offsetX *= -1, b.at.offsetX *= -1, this.left());
          },
          top: function() {
            var O = k.top(), E = n.getWindowScrollTop();
            e.style.top = O + E + "px", this.count.y === 2 ? (e.style.left = E + "px", this.count.y = 0) : O < 0 && (this.count.y++, b.my.y = "top", b.at.y = "bottom", b.my.offsetY *= -1, b.at.offsetY *= -1, this.bottom());
          },
          bottom: function() {
            var O = k.top() + n.getOuterHeight(a), E = n.getWindowScrollTop();
            e.style.top = O + E + "px", this.count.y === 2 ? (e.style.left = f.height - n.getOuterHeight(e) + E + "px", this.count.y = 0) : O + n.getOuterHeight(a) > f.height && (this.count.y++, b.my.y = "bottom", b.at.y = "top", b.my.offsetY *= -1, b.at.offsetY *= -1, this.top());
          },
          center: function(O) {
            if (O === "y") {
              var E = k.top() + n.getOuterHeight(a) / 2;
              e.style.top = E + n.getWindowScrollTop() + "px", E < 0 ? this.bottom() : E + n.getOuterHeight(a) > f.height && this.top();
            } else {
              var P = k.left() + n.getOuterWidth(a) / 2;
              e.style.left = P + n.getWindowScrollLeft() + "px", P < 0 ? this.left() : P + n.getOuterWidth(e) > f.width && this.right();
            }
          }
        };
        y[b.at.x]("x"), y[b.at.y]("y"), this.isFunction(l) && l(b);
      }
    }
  }, {
    key: "findCollisionPosition",
    value: function(e) {
      if (e) {
        var a = e === "top" || e === "bottom", r = e === "left" ? "right" : "left", o = e === "top" ? "bottom" : "top";
        return a ? {
          axis: "y",
          my: "center ".concat(o),
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
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      return e.parentNode === null ? a : this.getParents(e.parentNode, a.concat([e.parentNode]));
    }
  }, {
    key: "getScrollableParents",
    value: function(e) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = [];
      if (e) {
        var o = this.getParents(e), i = /(auto|scroll)/, l = function(P) {
          var A = P ? getComputedStyle(P) : null;
          return A && (i.test(A.getPropertyValue("overflow")) || i.test(A.getPropertyValue("overflow-x")) || i.test(A.getPropertyValue("overflow-y")));
        }, c = function(P) {
          a ? r.push(P.nodeName === "BODY" || P.nodeName === "HTML" || P.nodeType === 9 ? window : P) : r.push(P);
        }, f = ui(o), p;
        try {
          for (f.s(); !(p = f.n()).done; ) {
            var v = p.value, x = v.nodeType === 1 && v.dataset.scrollselectors;
            if (x) {
              var b = x.split(","), k = ui(b), y;
              try {
                for (k.s(); !(y = k.n()).done; ) {
                  var q = y.value, O = this.findSingle(v, q);
                  O && l(O) && c(O);
                }
              } catch (E) {
                k.e(E);
              } finally {
                k.f();
              }
            }
            v.nodeType === 1 && l(v) && c(v);
          }
        } catch (E) {
          f.e(E);
        } finally {
          f.f();
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
        var a = e.offsetHeight;
        return e.style.display = "none", e.style.visibility = "visible", a;
      }
      return 0;
    }
  }, {
    key: "getHiddenElementOuterWidth",
    value: function(e) {
      if (e) {
        e.style.visibility = "hidden", e.style.display = "block";
        var a = e.offsetWidth;
        return e.style.display = "none", e.style.visibility = "visible", a;
      }
      return 0;
    }
  }, {
    key: "getHiddenElementDimensions",
    value: function(e) {
      var a = {};
      return e && (e.style.visibility = "hidden", e.style.display = "block", a.width = e.offsetWidth, a.height = e.offsetHeight, e.style.display = "none", e.style.visibility = "visible"), a;
    }
  }, {
    key: "fadeIn",
    value: function(e, a) {
      if (e) {
        e.style.opacity = 0;
        var r = +/* @__PURE__ */ new Date(), o = 0, i = function l() {
          o = +e.style.opacity + ((/* @__PURE__ */ new Date()).getTime() - r) / a, e.style.opacity = o, r = +/* @__PURE__ */ new Date(), +o < 1 && (window.requestAnimationFrame && requestAnimationFrame(l) || setTimeout(l, 16));
        };
        i();
      }
    }
  }, {
    key: "fadeOut",
    value: function(e, a) {
      if (e)
        var r = 1, o = 50, i = o / a, l = setInterval(function() {
          r = r - i, r <= 0 && (r = 0, clearInterval(l)), e.style.opacity = r;
        }, o);
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
    value: function(e, a) {
      if (this.isElement(a))
        a.appendChild(e);
      else if (a.el && a.el.nativeElement)
        a.el.nativeElement.appendChild(e);
      else
        throw new Error("Cannot append " + a + " to " + e);
    }
  }, {
    key: "removeChild",
    value: function(e, a) {
      if (this.isElement(a))
        a.removeChild(e);
      else if (a.el && a.el.nativeElement)
        a.el.nativeElement.removeChild(e);
      else
        throw new Error("Cannot remove " + e + " from " + a);
    }
  }, {
    key: "isElement",
    value: function(e) {
      return (typeof HTMLElement > "u" ? "undefined" : an(HTMLElement)) === "object" ? e instanceof HTMLElement : e && an(e) === "object" && e !== null && e.nodeType === 1 && typeof e.nodeName == "string";
    }
  }, {
    key: "scrollInView",
    value: function(e, a) {
      var r = getComputedStyle(e).getPropertyValue("border-top-width"), o = r ? parseFloat(r) : 0, i = getComputedStyle(e).getPropertyValue("padding-top"), l = i ? parseFloat(i) : 0, c = e.getBoundingClientRect(), f = a.getBoundingClientRect(), p = f.top + document.body.scrollTop - (c.top + document.body.scrollTop) - o - l, v = e.scrollTop, x = e.clientHeight, b = this.getOuterHeight(a);
      p < 0 ? e.scrollTop = v + p : p + b > x && (e.scrollTop = v + p - x + b);
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
        var a = getComputedStyle(e);
        return e.offsetWidth - e.clientWidth - parseFloat(a.borderLeftWidth) - parseFloat(a.borderRightWidth);
      }
      if (this.calculatedScrollbarWidth != null)
        return this.calculatedScrollbarWidth;
      var r = document.createElement("div");
      r.className = "p-scrollbar-measure", document.body.appendChild(r);
      var o = r.offsetWidth - r.clientWidth;
      return document.body.removeChild(r), this.calculatedScrollbarWidth = o, o;
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
      var e = navigator.userAgent.toLowerCase(), a = /(chrome)[ ]([\w.]+)/.exec(e) || /(webkit)[ ]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ ]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
      return {
        browser: a[1] || "",
        version: a[2] || "0"
      };
    }
  }, {
    key: "blockBodyScroll",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "p-overflow-hidden", a = !!document.body.style.getPropertyValue("--scrollbar-width");
      !a && document.body.style.setProperty("--scrollbar-width", this.calculateBodyScrollbarWidth() + "px"), this.addClass(document.body, e);
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
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = n.find(e, 'button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(a, `,
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(a, `,
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(a, `,
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(a, `,
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(a, `,
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(a, `,
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(a)), o = [], i = ui(r), l;
      try {
        for (i.s(); !(l = i.n()).done; ) {
          var c = l.value;
          getComputedStyle(c).display !== "none" && getComputedStyle(c).visibility !== "hidden" && o.push(c);
        }
      } catch (f) {
        i.e(f);
      } finally {
        i.f();
      }
      return o;
    }
  }, {
    key: "getFirstFocusableElement",
    value: function(e, a) {
      var r = n.getFocusableElements(e, a);
      return r.length > 0 ? r[0] : null;
    }
  }, {
    key: "getLastFocusableElement",
    value: function(e, a) {
      var r = n.getFocusableElements(e, a);
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
    value: function(e, a) {
      var r = a === void 0 ? !0 : !a;
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
    value: function(e, a) {
      if (e) {
        var r = n.getFirstFocusableElement(e);
        return r && n.focus(r, a), r;
      }
    }
  }, {
    key: "getCursorOffset",
    value: function(e, a, r, o) {
      if (e) {
        var i = getComputedStyle(e), l = document.createElement("div");
        l.style.position = "absolute", l.style.top = "0px", l.style.left = "0px", l.style.visibility = "hidden", l.style.pointerEvents = "none", l.style.overflow = i.overflow, l.style.width = i.width, l.style.height = i.height, l.style.padding = i.padding, l.style.border = i.border, l.style.overflowWrap = i.overflowWrap, l.style.whiteSpace = i.whiteSpace, l.style.lineHeight = i.lineHeight, l.innerHTML = a.replace(/\r\n|\r|\n/g, "<br />");
        var c = document.createElement("span");
        c.textContent = o, l.appendChild(c);
        var f = document.createTextNode(r);
        l.appendChild(f), document.body.appendChild(l);
        var p = c.offsetLeft, v = c.offsetTop, x = c.clientHeight;
        return document.body.removeChild(l), {
          left: Math.abs(p - e.scrollLeft),
          top: Math.abs(v - e.scrollTop) + x
        };
      }
      return {
        top: "auto",
        left: "auto"
      };
    }
  }, {
    key: "invokeElementMethod",
    value: function(e, a, r) {
      e[a].apply(e, r);
    }
  }, {
    key: "isClickable",
    value: function(e) {
      var a = e.nodeName, r = e.parentElement && e.parentElement.nodeName;
      return a === "INPUT" || a === "TEXTAREA" || a === "BUTTON" || a === "A" || r === "INPUT" || r === "TEXTAREA" || r === "BUTTON" || r === "A" || this.hasClass(e, "p-button") || this.hasClass(e.parentElement, "p-button") || this.hasClass(e.parentElement, "p-checkbox") || this.hasClass(e.parentElement, "p-radiobutton");
    }
  }, {
    key: "applyStyle",
    value: function(e, a) {
      if (typeof a == "string")
        e.style.cssText = this.style;
      else
        for (var r in this.style)
          e.style[r] = a[r];
    }
  }, {
    key: "exportCSV",
    value: function(e, a) {
      var r = new Blob([e], {
        type: "application/csv;charset=utf-8;"
      });
      if (window.navigator.msSaveOrOpenBlob)
        navigator.msSaveOrOpenBlob(r, a + ".csv");
      else {
        var o = n.saveAs({
          name: a + ".csv",
          src: URL.createObjectURL(r)
        });
        o || (e = "data:text/csv;charset=utf-8," + e, window.open(encodeURI(e)));
      }
    }
  }, {
    key: "saveAs",
    value: function(e) {
      if (e) {
        var a = document.createElement("a");
        if (a.download !== void 0) {
          var r = e.name, o = e.src;
          return a.setAttribute("href", o), a.setAttribute("download", r), a.style.display = "none", document.body.appendChild(a), a.click(), document.body.removeChild(a), !0;
        }
      }
      return !1;
    }
  }, {
    key: "createInlineStyle",
    value: function(e, a) {
      var r = document.createElement("style");
      return n.addNonce(r, e), a || (a = document.head), a.appendChild(r), r;
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
    value: function(e, a) {
      try {
        a || (a = process.env.REACT_APP_CSS_NONCE);
      } catch {
      }
      a && e.setAttribute("nonce", a);
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
      if (an(e) === "object" && e.hasOwnProperty("current"))
        return this.isExist(e.current) ? e.current : null;
      var a = function(i) {
        return !!(i && i.constructor && i.call && i.apply);
      }, r = a(e) ? e() : e;
      return r && r.nodeType === 9 || this.isExist(r) ? r : null;
    }
    /**
     * Get the attribute names for an element and sorts them alpha for comparison
     */
  }, {
    key: "getAttributeNames",
    value: function(e) {
      var a, r, o;
      for (r = [], o = e.attributes, a = 0; a < o.length; ++a)
        r.push(o[a].nodeName);
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
    value: function(e, a) {
      var r, o, i, l, c;
      if (r = n.getAttributeNames(e), o = n.getAttributeNames(a), r.join(",") !== o.join(","))
        return !1;
      for (var f = 0; f < r.length; ++f)
        if (i = r[f], i === "style")
          for (var p = e.style, v = a.style, x = /^\d+$/, b = 0, k = Object.keys(p); b < k.length; b++) {
            var y = k[b];
            if (!x.test(y) && p[y] !== v[y])
              return !1;
          }
        else if (e.getAttribute(i) !== a.getAttribute(i))
          return !1;
      for (l = e.firstChild, c = a.firstChild; l && c; l = l.nextSibling, c = c.nextSibling) {
        if (l.nodeType !== c.nodeType)
          return !1;
        if (l.nodeType === 1) {
          if (!n.isEqualElement(l, c))
            return !1;
        } else if (l.nodeValue !== c.nodeValue)
          return !1;
      }
      return !(l || c);
    }
  }, {
    key: "hasCSSAnimation",
    value: function(e) {
      if (e) {
        var a = getComputedStyle(e), r = parseFloat(a.getPropertyValue("animation-duration") || "0");
        return r > 0;
      }
      return !1;
    }
  }, {
    key: "hasCSSTransition",
    value: function(e) {
      if (e) {
        var a = getComputedStyle(e), r = parseFloat(a.getPropertyValue("transition-duration") || "0");
        return r > 0;
      }
      return !1;
    }
  }]);
}();
Ha(M, "DATA_PROPS", ["data-"]);
Ha(M, "ARIA_PROPS", ["aria", "focus-target"]);
function gf() {
  var n = /* @__PURE__ */ new Map();
  return {
    on: function(e, a) {
      var r = n.get(e);
      r ? r.push(a) : r = [a], n.set(e, r);
    },
    off: function(e, a) {
      var r = n.get(e);
      r && r.splice(r.indexOf(a) >>> 0, 1);
    },
    emit: function(e, a) {
      var r = n.get(e);
      r && r.slice().forEach(function(o) {
        return o(a);
      });
    }
  };
}
function ki() {
  return ki = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
    }
    return n;
  }, ki.apply(this, arguments);
}
function hf(n, t) {
  var e = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (!e) {
    if (Array.isArray(n) || (e = bf(n)) || t) {
      e && (n = e);
      var a = 0, r = function() {
      };
      return { s: r, n: function() {
        return a >= n.length ? { done: !0 } : { done: !1, value: n[a++] };
      }, e: function(f) {
        throw f;
      }, f: r };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0, i = !1, l;
  return { s: function() {
    e = e.call(n);
  }, n: function() {
    var f = e.next();
    return o = f.done, f;
  }, e: function(f) {
    i = !0, l = f;
  }, f: function() {
    try {
      !o && e.return != null && e.return();
    } finally {
      if (i) throw l;
    }
  } };
}
function bf(n, t) {
  if (n) {
    if (typeof n == "string") return is(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return is(n, t);
  }
}
function is(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, a = new Array(t); e < t; e++) a[e] = n[e];
  return a;
}
var Q = /* @__PURE__ */ function() {
  function n() {
    ml(this, n);
  }
  return gl(n, null, [{
    key: "equals",
    value: function(e, a, r) {
      return r && e && an(e) === "object" && a && an(a) === "object" ? this.deepEquals(this.resolveFieldData(e, r), this.resolveFieldData(a, r)) : this.deepEquals(e, a);
    }
    /**
     * Compares two JSON objects for deep equality recursively comparing both objects.
     * @param {*} a the first JSON object
     * @param {*} b the second JSON object
     * @returns true if equals, false it not
     */
  }, {
    key: "deepEquals",
    value: function(e, a) {
      if (e === a)
        return !0;
      if (e && a && an(e) === "object" && an(a) === "object") {
        var r = Array.isArray(e), o = Array.isArray(a), i, l, c;
        if (r && o) {
          if (l = e.length, l !== a.length)
            return !1;
          for (i = l; i-- !== 0; )
            if (!this.deepEquals(e[i], a[i]))
              return !1;
          return !0;
        }
        if (r !== o)
          return !1;
        var f = e instanceof Date, p = a instanceof Date;
        if (f !== p)
          return !1;
        if (f && p)
          return e.getTime() === a.getTime();
        var v = e instanceof RegExp, x = a instanceof RegExp;
        if (v !== x)
          return !1;
        if (v && x)
          return e.toString() === a.toString();
        var b = Object.keys(e);
        if (l = b.length, l !== Object.keys(a).length)
          return !1;
        for (i = l; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(a, b[i]))
            return !1;
        for (i = l; i-- !== 0; )
          if (c = b[i], !this.deepEquals(e[c], a[c]))
            return !1;
        return !0;
      }
      return e !== e && a !== a;
    }
  }, {
    key: "resolveFieldData",
    value: function(e, a) {
      if (!e || !a)
        return null;
      try {
        var r = e[a];
        if (this.isNotEmpty(r))
          return r;
      } catch {
      }
      if (Object.keys(e).length) {
        if (this.isFunction(a))
          return a(e);
        if (this.isNotEmpty(e[a]))
          return e[a];
        if (a.indexOf(".") === -1)
          return e[a];
        for (var o = a.split("."), i = e, l = 0, c = o.length; l < c; ++l) {
          if (i == null)
            return null;
          i = i[o[l]];
        }
        return i;
      }
      return null;
    }
  }, {
    key: "findDiffKeys",
    value: function(e, a) {
      return !e || !a ? {} : Object.keys(e).filter(function(r) {
        return !a.hasOwnProperty(r);
      }).reduce(function(r, o) {
        return r[o] = e[o], r;
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
    value: function(e, a) {
      var r = {};
      return !e || !a || a.length === 0 || Object.keys(e).filter(function(o) {
        return a.some(function(i) {
          return o.startsWith(i);
        });
      }).forEach(function(o) {
        r[o] = e[o], delete e[o];
      }), r;
    }
  }, {
    key: "reorderArray",
    value: function(e, a, r) {
      e && a !== r && (r >= e.length && (r = r % e.length, a = a % e.length), e.splice(r, 0, e.splice(a, 1)[0]));
    }
  }, {
    key: "findIndexInList",
    value: function(e, a, r) {
      var o = this;
      return a ? r ? a.findIndex(function(i) {
        return o.equals(i, e, r);
      }) : a.findIndex(function(i) {
        return i === e;
      }) : -1;
    }
  }, {
    key: "getJSXElement",
    value: function(e) {
      for (var a = arguments.length, r = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++)
        r[o - 1] = arguments[o];
      return this.isFunction(e) ? e.apply(void 0, r) : e;
    }
  }, {
    key: "getItemValue",
    value: function(e) {
      for (var a = arguments.length, r = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++)
        r[o - 1] = arguments[o];
      return this.isFunction(e) ? e.apply(void 0, r) : e;
    }
  }, {
    key: "getProp",
    value: function(e) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = e ? e[a] : void 0;
      return o === void 0 ? r[a] : o;
    }
  }, {
    key: "getPropCaseInsensitive",
    value: function(e, a) {
      var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = this.toFlatCase(a);
      for (var i in e)
        if (e.hasOwnProperty(i) && this.toFlatCase(i) === o)
          return e[i];
      for (var l in r)
        if (r.hasOwnProperty(l) && this.toFlatCase(l) === o)
          return r[l];
    }
  }, {
    key: "getMergedProps",
    value: function(e, a) {
      return Object.assign({}, a, e);
    }
  }, {
    key: "getDiffProps",
    value: function(e, a) {
      return this.findDiffKeys(e, a);
    }
  }, {
    key: "getPropValue",
    value: function(e) {
      for (var a = arguments.length, r = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++)
        r[o - 1] = arguments[o];
      return this.isFunction(e) ? e.apply(void 0, r) : e;
    }
  }, {
    key: "getComponentProp",
    value: function(e) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this.isNotEmpty(e) ? this.getProp(e.props, a, r) : void 0;
    }
  }, {
    key: "getComponentProps",
    value: function(e, a) {
      return this.isNotEmpty(e) ? this.getMergedProps(e.props, a) : void 0;
    }
  }, {
    key: "getComponentDiffProps",
    value: function(e, a) {
      return this.isNotEmpty(e) ? this.getDiffProps(e.props, a) : void 0;
    }
  }, {
    key: "isValidChild",
    value: function(e, a, r) {
      if (e) {
        var o, i = this.getComponentProp(e, "__TYPE") || (e.type ? e.type.displayName : void 0);
        !i && e !== null && e !== void 0 && (o = e.type) !== null && o !== void 0 && (o = o._payload) !== null && o !== void 0 && o.value && (i = e.type._payload.value.find(function(f) {
          return f === a;
        }));
        var l = i === a;
        try {
          var c;
        } catch {
        }
        return l;
      }
      return !1;
    }
  }, {
    key: "getRefElement",
    value: function(e) {
      return e ? an(e) === "object" && e.hasOwnProperty("current") ? e.current : e : null;
    }
  }, {
    key: "combinedRefs",
    value: function(e, a) {
      e && a && (typeof a == "function" ? a(e.current) : a.current = e.current);
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
      return e == null || e === "" || Array.isArray(e) && e.length === 0 || !(e instanceof Date) && an(e) === "object" && Object.keys(e).length === 0;
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
    value: function(e, a) {
      var r;
      if (this.isNotEmpty(e))
        try {
          r = e.findLast(a);
        } catch {
          r = Co(e).reverse().find(a);
        }
      return r;
    }
    /**
     * Firefox-v103 does not currently support the "findLastIndex" method. It is stated that this method will be supported with Firefox-v104.
     * https://caniuse.com/mdn-javascript_builtins_array_findlastindex
     */
  }, {
    key: "findLastIndex",
    value: function(e, a) {
      var r = -1;
      if (this.isNotEmpty(e))
        try {
          r = e.findLastIndex(a);
        } catch {
          r = e.lastIndexOf(Co(e).reverse().find(a));
        }
      return r;
    }
  }, {
    key: "sort",
    value: function(e, a) {
      var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, o = arguments.length > 3 ? arguments[3] : void 0, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 1, l = this.compare(e, a, o, r), c = r;
      return (this.isEmpty(e) || this.isEmpty(a)) && (c = i === 1 ? r : i), c * l;
    }
  }, {
    key: "compare",
    value: function(e, a, r) {
      var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1, i = -1, l = this.isEmpty(e), c = this.isEmpty(a);
      return l && c ? i = 0 : l ? i = o : c ? i = -o : typeof e == "string" && typeof a == "string" ? i = r(e, a) : i = e < a ? -1 : e > a ? 1 : 0, i;
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
    value: function(e, a) {
      var r = hf(e), o;
      try {
        for (r.s(); !(o = r.n()).done; ) {
          var i = o.value;
          if (i.key === a)
            return i.children || [];
          if (i.children) {
            var l = this.findChildrenByKey(i.children, a);
            if (l.length > 0)
              return l;
          }
        }
      } catch (c) {
        r.e(c);
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
    value: function(e, a, r) {
      if (!(an(e) !== "object" || typeof a != "string"))
        for (var o = a.split("."), i = e, l = 0, c = o.length; l < c; ++l) {
          if (l + 1 - c === 0) {
            i[o[l]] = r;
            break;
          }
          i[o[l]] || (i[o[l]] = {}), i = i[o[l]];
        }
    }
  }]);
}();
function ls(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function yf(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ls(Object(e), !0).forEach(function(a) {
      Ha(n, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : ls(Object(e)).forEach(function(a) {
      Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return n;
}
var Ut = /* @__PURE__ */ function() {
  function n() {
    ml(this, n);
  }
  return gl(n, null, [{
    key: "getJSXIcon",
    value: function(e) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = null;
      if (e !== null) {
        var i = an(e), l = qe(a.className, i === "string" && e);
        if (o = /* @__PURE__ */ d.createElement("span", ki({}, a, {
          className: l
        })), i !== "string") {
          var c = yf({
            iconProps: a,
            element: o
          }, r);
          return Q.getJSXElement(e, c);
        }
      }
      return o;
    }
  }]);
}();
function ss(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function cs(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ss(Object(e), !0).forEach(function(a) {
      Ha(n, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : ss(Object(e)).forEach(function(a) {
      Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return n;
}
function wf(n, t) {
  var e = {
    mask: null,
    slotChar: "_",
    autoClear: !0,
    unmask: !1,
    readOnly: !1,
    onComplete: null,
    onChange: null,
    onFocus: null,
    onBlur: null
  };
  t = cs(cs({}, e), t);
  var a, r, o, i, l, c, f, p, v, x, b, k, y = function(N, j) {
    var B, Z, ie;
    if (!(!n.offsetParent || n !== document.activeElement))
      if (typeof N == "number")
        Z = N, ie = typeof j == "number" ? j : Z, n.setSelectionRange ? n.setSelectionRange(Z, ie) : n.createTextRange && (B = n.createTextRange(), B.collapse(!0), B.moveEnd("character", ie), B.moveStart("character", Z), B.select());
      else
        return n.setSelectionRange ? (Z = n.selectionStart, ie = n.selectionEnd) : document.selection && document.selection.createRange && (B = document.selection.createRange(), Z = 0 - B.duplicate().moveStart("character", -1e5), ie = Z + B.text.length), {
          begin: Z,
          end: ie
        };
  }, q = function() {
    for (var N = i; N <= f; N++)
      if (a[N] && b[N] === O(N))
        return !1;
    return !0;
  }, O = function(N) {
    return N < t.slotChar.length ? t.slotChar.charAt(N) : t.slotChar.charAt(0);
  }, E = function() {
    return t.unmask ? Oe() : n && n.value;
  }, P = function(N) {
    for (; ++N < o && !a[N]; )
      ;
    return N;
  }, A = function(N) {
    for (; --N >= 0 && !a[N]; )
      ;
    return N;
  }, C = function(N, j) {
    var B, Z;
    if (!(N < 0)) {
      for (B = N, Z = P(j); B < o; B++)
        if (a[B]) {
          if (Z < o && a[B].test(b[Z]))
            b[B] = b[Z], b[Z] = O(Z);
          else
            break;
          Z = P(Z);
        }
      oe(), y(Math.max(i, N));
    }
  }, K = function(N) {
    var j, B, Z, ie;
    for (j = N, B = O(N); j < o; j++)
      if (a[j])
        if (Z = P(j), ie = b[j], b[j] = B, Z < o && a[Z].test(ie))
          B = ie;
        else
          break;
  }, S = function(N) {
    var j = n.value, B = y();
    if (p && p.length && p.length > j.length) {
      for (Y(!0); B.begin > 0 && !a[B.begin - 1]; )
        B.begin--;
      if (B.begin === 0)
        for (; B.begin < i && !a[B.begin]; )
          B.begin++;
      y(B.begin, B.begin);
    } else {
      for (Y(!0); B.begin < o && !a[B.begin]; )
        B.begin++;
      y(B.begin, B.begin);
    }
    t.onComplete && q() && t.onComplete({
      originalEvent: N,
      value: E()
    });
  }, H = function(N) {
    if (Y(), t.onBlur && t.onBlur(N), we(N), n.value !== v) {
      var j = document.createEvent("HTMLEvents");
      j.initEvent("change", !0, !1), n.dispatchEvent(j);
    }
  }, X = function(N) {
    if (!t.readOnly) {
      var j = N.which || N.keyCode, B, Z, ie;
      p = n.value, j === 8 || j === 46 || M.isIOS() && j === 127 ? (B = y(), Z = B.begin, ie = B.end, ie - Z === 0 && (Z = j !== 46 ? A(Z) : ie = P(Z - 1), ie = j === 46 ? P(ie) : ie), I(Z, ie), C(Z, ie - 1), we(N), N.preventDefault()) : j === 13 ? (H(N), we(N)) : j === 27 && (n.value = v, y(0, Y()), we(N), N.preventDefault());
    }
  }, U = function(N) {
    if (!t.readOnly) {
      var j = N.which || N.keyCode, B = y(), Z, ie, V, z;
      if (!(N.ctrlKey || N.altKey || N.metaKey || j < 32)) {
        if (j && j !== 13) {
          if (B.end - B.begin !== 0 && (I(B.begin, B.end), C(B.begin, B.end - 1)), Z = P(B.begin - 1), Z < o && (ie = String.fromCharCode(j), a[Z].test(ie))) {
            if (K(Z), b[Z] = ie, oe(), V = P(Z), M.isAndroid()) {
              var ee = function() {
                y(V);
              };
              setTimeout(ee, 0);
            } else
              y(V);
            B.begin <= f && (z = q());
          }
          N.preventDefault();
        }
        we(N), t.onComplete && z && t.onComplete({
          originalEvent: N,
          value: E()
        });
      }
    }
  }, I = function(N, j) {
    var B;
    for (B = N; B < j && B < o; B++)
      a[B] && (b[B] = O(B));
  }, oe = function() {
    n.value = b.join("");
  }, Y = function(N) {
    var j = n.value, B = -1, Z, ie, V;
    for (Z = 0, V = 0; Z < o; Z++)
      if (a[Z]) {
        for (b[Z] = O(Z); V++ < j.length; )
          if (ie = j.charAt(V - 1), a[Z].test(ie)) {
            b[Z] = ie, B = Z;
            break;
          }
        if (V > j.length) {
          I(Z + 1, o);
          break;
        }
      } else
        b[Z] === j.charAt(V) && V++, Z < r && (B = Z);
    return N ? oe() : B + 1 < r ? t.autoClear || b.join("") === k ? (n.value && (n.value = ""), I(0, o)) : oe() : (oe(), n.value = n.value.substring(0, B + 1)), r ? Z : i;
  }, ve = function(N) {
    if (!t.readOnly) {
      clearTimeout(x);
      var j;
      v = n.value, j = Y(), x = setTimeout(function() {
        n === document.activeElement && (oe(), j === t.mask.replace("?", "").length ? y(0, j) : y(j));
      }, 100), t.onFocus && t.onFocus(N);
    }
  }, ge = function(N) {
    c ? S(N) : Ce(N);
  }, Ce = function(N) {
    if (!t.readOnly) {
      var j = Y(!0);
      y(j), we(N), t.onComplete && q() && t.onComplete({
        originalEvent: N,
        value: E()
      });
    }
  }, Oe = function() {
    for (var N = [], j = 0; j < b.length; j++) {
      var B = b[j];
      a[j] && B !== O(j) && N.push(B);
    }
    return N.join("");
  }, we = function(N) {
    if (t.onChange) {
      var j = E();
      t.onChange({
        originalEvent: N,
        value: k !== j ? j : "",
        stopPropagation: function() {
          N.stopPropagation();
        },
        preventDefault: function() {
          N.preventDefault();
        },
        target: {
          value: k !== j ? j : ""
        }
      });
    }
  }, de = function() {
    n.addEventListener("focus", ve), n.addEventListener("blur", H), n.addEventListener("keydown", X), n.addEventListener("keypress", U), n.addEventListener("input", ge), n.addEventListener("paste", Ce);
  }, F = function() {
    n.removeEventListener("focus", ve), n.removeEventListener("blur", H), n.removeEventListener("keydown", X), n.removeEventListener("keypress", U), n.removeEventListener("input", ge), n.removeEventListener("paste", Ce);
  }, se = function() {
    a = [], r = t.mask.length, o = t.mask.length, i = null, l = {
      9: "[0-9]",
      a: "[A-Za-z]",
      "*": "[A-Za-z0-9]"
    }, c = M.isChrome() && M.isAndroid();
    for (var N = t.mask.split(""), j = 0; j < N.length; j++) {
      var B = N[j];
      B === "?" ? (o--, r = j) : l[B] ? (a.push(new RegExp(l[B])), i === null && (i = a.length - 1), j < r && (f = a.length - 1)) : a.push(null);
    }
    b = [];
    for (var Z = 0; Z < N.length; Z++) {
      var ie = N[Z];
      ie !== "?" && (l[ie] ? b.push(O(Z)) : b.push(ie));
    }
    k = b.join("");
  };
  return n && t.mask && (se(), de()), {
    init: se,
    bindEvents: de,
    unbindEvents: F,
    updateModel: we,
    getValue: E
  };
}
function us(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function ds(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? us(Object(e), !0).forEach(function(a) {
      Ha(n, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : us(Object(e)).forEach(function(a) {
      Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return n;
}
function Oo(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (n) {
    var e = function(i) {
      return typeof i == "function";
    }, a = t.classNameMergeFunction, r = e(a);
    return n.reduce(function(o, i) {
      if (!i)
        return o;
      var l = function() {
        var p = i[c];
        if (c === "style")
          o.style = ds(ds({}, o.style), i.style);
        else if (c === "className") {
          var v = "";
          r ? v = a(o.className, i.className) : v = [o.className, i.className].join(" ").trim(), o.className = v || void 0;
        } else if (e(p)) {
          var x = o[c];
          o[c] = x ? function() {
            x.apply(void 0, arguments), p.apply(void 0, arguments);
          } : p;
        } else
          o[c] = p;
      };
      for (var c in i)
        l();
      return o;
    }, {});
  }
}
var fs = 0;
function Or() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pr_id_";
  return fs++, "".concat(n).concat(fs);
}
function xf() {
  var n = [], t = function(l, c) {
    var f = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 999, p = r(l, c, f), v = p.value + (p.key === l ? 0 : f) + 1;
    return n.push({
      key: l,
      value: v
    }), v;
  }, e = function(l) {
    n = n.filter(function(c) {
      return c.value !== l;
    });
  }, a = function(l, c) {
    return r(l, c).value;
  }, r = function(l, c) {
    var f = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    return Co(n).reverse().find(function(p) {
      return c ? !0 : p.key === l;
    }) || {
      key: l,
      value: f
    };
  }, o = function(l) {
    return l && parseInt(l.style.zIndex, 10) || 0;
  };
  return {
    get: o,
    set: function(l, c, f, p) {
      c && (c.style.zIndex = String(t(l, f, p)));
    },
    clear: function(l) {
      l && (e(hn.get(l)), l.style.zIndex = "");
    },
    getCurrent: function(l, c) {
      return a(l, c);
    }
  };
}
var hn = xf(), dn = Object.freeze({
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
function ps(n, t) {
  var e = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (!e) {
    if (Array.isArray(n) || (e = Sf(n)) || t) {
      e && (n = e);
      var a = 0, r = function() {
      };
      return { s: r, n: function() {
        return a >= n.length ? { done: !0 } : { done: !1, value: n[a++] };
      }, e: function(f) {
        throw f;
      }, f: r };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0, i = !1, l;
  return { s: function() {
    e = e.call(n);
  }, n: function() {
    var f = e.next();
    return o = f.done, f;
  }, e: function(f) {
    i = !0, l = f;
  }, f: function() {
    try {
      !o && e.return != null && e.return();
    } finally {
      if (i) throw l;
    }
  } };
}
function Sf(n, t) {
  if (n) {
    if (typeof n == "string") return vs(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return vs(n, t);
  }
}
function vs(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, a = new Array(t); e < t; e++) a[e] = n[e];
  return a;
}
var ms = {
  filter: function(t, e, a, r, o) {
    var i = [];
    if (!t)
      return i;
    var l = ps(t), c;
    try {
      for (l.s(); !(c = l.n()).done; ) {
        var f = c.value;
        if (typeof f == "string") {
          if (this.filters[r](f, a, o)) {
            i.push(f);
            continue;
          }
        } else {
          var p = ps(e), v;
          try {
            for (p.s(); !(v = p.n()).done; ) {
              var x = v.value, b = Q.resolveFieldData(f, x);
              if (this.filters[r](b, a, o)) {
                i.push(f);
                break;
              }
            }
          } catch (k) {
            p.e(k);
          } finally {
            p.f();
          }
        }
      }
    } catch (k) {
      l.e(k);
    } finally {
      l.f();
    }
    return i;
  },
  filters: {
    startsWith: function(t, e, a) {
      if (e == null || e.trim() === "")
        return !0;
      if (t == null)
        return !1;
      var r = Q.removeAccents(e.toString()).toLocaleLowerCase(a), o = Q.removeAccents(t.toString()).toLocaleLowerCase(a);
      return o.slice(0, r.length) === r;
    },
    contains: function(t, e, a) {
      if (e == null || typeof e == "string" && e.trim() === "")
        return !0;
      if (t == null)
        return !1;
      var r = Q.removeAccents(e.toString()).toLocaleLowerCase(a), o = Q.removeAccents(t.toString()).toLocaleLowerCase(a);
      return o.indexOf(r) !== -1;
    },
    notContains: function(t, e, a) {
      if (e == null || typeof e == "string" && e.trim() === "")
        return !0;
      if (t == null)
        return !1;
      var r = Q.removeAccents(e.toString()).toLocaleLowerCase(a), o = Q.removeAccents(t.toString()).toLocaleLowerCase(a);
      return o.indexOf(r) === -1;
    },
    endsWith: function(t, e, a) {
      if (e == null || e.trim() === "")
        return !0;
      if (t == null)
        return !1;
      var r = Q.removeAccents(e.toString()).toLocaleLowerCase(a), o = Q.removeAccents(t.toString()).toLocaleLowerCase(a);
      return o.indexOf(r, o.length - r.length) !== -1;
    },
    equals: function(t, e, a) {
      return e == null || typeof e == "string" && e.trim() === "" ? !0 : t == null ? !1 : t.getTime && e.getTime ? t.getTime() === e.getTime() : Q.removeAccents(t.toString()).toLocaleLowerCase(a) === Q.removeAccents(e.toString()).toLocaleLowerCase(a);
    },
    notEquals: function(t, e, a) {
      return e == null || typeof e == "string" && e.trim() === "" || t == null ? !0 : t.getTime && e.getTime ? t.getTime() !== e.getTime() : Q.removeAccents(t.toString()).toLocaleLowerCase(a) !== Q.removeAccents(e.toString()).toLocaleLowerCase(a);
    },
    in: function(t, e) {
      if (e == null || e.length === 0)
        return !0;
      for (var a = 0; a < e.length; a++)
        if (Q.equals(t, e[a]))
          return !0;
      return !1;
    },
    notIn: function(t, e) {
      if (e == null || e.length === 0)
        return !0;
      for (var a = 0; a < e.length; a++)
        if (Q.equals(t, e[a]))
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
function Ca(n) {
  "@babel/helpers - typeof";
  return Ca = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ca(n);
}
function Ef(n, t) {
  if (Ca(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var a = e.call(n, t || "default");
    if (Ca(a) !== "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function Cf(n) {
  var t = Ef(n, "string");
  return Ca(t) === "symbol" ? t : String(t);
}
function Cn(n, t, e) {
  return t = Cf(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function Of(n, t, e) {
  return Object.defineProperty(n, "prototype", {
    writable: !1
  }), n;
}
function Pf(n, t) {
  if (!(n instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
var sn = /* @__PURE__ */ Of(function n() {
  Pf(this, n);
});
Cn(sn, "ripple", !1);
Cn(sn, "inputStyle", "outlined");
Cn(sn, "locale", "en");
Cn(sn, "appendTo", null);
Cn(sn, "cssTransition", !0);
Cn(sn, "autoZIndex", !0);
Cn(sn, "hideOverlaysOnDocumentScrolling", !1);
Cn(sn, "nonce", null);
Cn(sn, "nullSortOrder", 1);
Cn(sn, "zIndex", {
  modal: 1100,
  overlay: 1e3,
  menu: 1e3,
  tooltip: 1100,
  toast: 1200
});
Cn(sn, "pt", void 0);
Cn(sn, "filterMatchModeOptions", {
  text: [dn.STARTS_WITH, dn.CONTAINS, dn.NOT_CONTAINS, dn.ENDS_WITH, dn.EQUALS, dn.NOT_EQUALS],
  numeric: [dn.EQUALS, dn.NOT_EQUALS, dn.LESS_THAN, dn.LESS_THAN_OR_EQUAL_TO, dn.GREATER_THAN, dn.GREATER_THAN_OR_EQUAL_TO],
  date: [dn.DATE_IS, dn.DATE_IS_NOT, dn.DATE_BEFORE, dn.DATE_AFTER]
});
Cn(sn, "changeTheme", function(n, t, e, a) {
  var r, o = document.getElementById(e);
  if (!o)
    throw Error("Element with id ".concat(e, " not found."));
  var i = o.getAttribute("href").replace(n, t), l = document.createElement("link");
  l.setAttribute("rel", "stylesheet"), l.setAttribute("id", e), l.setAttribute("href", i), l.addEventListener("load", function() {
    a && a();
  }), (r = o.parentNode) === null || r === void 0 || r.replaceChild(l, o);
});
var Df = {
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
function fn(n, t) {
  if (n.includes("__proto__") || n.includes("prototype"))
    throw new Error("Unsafe key detected");
  var e = t || sn.locale;
  try {
    return En(e)[n];
  } catch {
    throw new Error("The ".concat(n, " option is not found in the current locale('").concat(e, "')."));
  }
}
function gs(n, t) {
  if (n.includes("__proto__") || n.includes("prototype"))
    throw new Error("Unsafe ariaKey detected");
  var e = sn.locale;
  try {
    var a = En(e).aria[n];
    if (a)
      for (var r in t)
        t.hasOwnProperty(r) && (a = a.replace("{".concat(r, "}"), t[r]));
    return a;
  } catch {
    throw new Error("The ".concat(n, " option is not found in the current locale('").concat(e, "')."));
  }
}
function En(n) {
  var t = n || sn.locale;
  if (t.includes("__proto__") || t.includes("prototype"))
    throw new Error("Unsafe locale detected");
  return Df[t];
}
var Vt = /* @__PURE__ */ ze.createContext(), Tt = sn;
function Tf(n) {
  if (Array.isArray(n)) return n;
}
function kf(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var a, r, o, i, l = [], c = !0, f = !1;
    try {
      if (o = (e = e.call(n)).next, t === 0) {
        if (Object(e) !== e) return;
        c = !1;
      } else for (; !(c = (a = o.call(e)).done) && (l.push(a.value), l.length !== t); c = !0) ;
    } catch (p) {
      f = !0, r = p;
    } finally {
      try {
        if (!c && e.return != null && (i = e.return(), Object(i) !== i)) return;
      } finally {
        if (f) throw r;
      }
    }
    return l;
  }
}
function qi(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, a = new Array(t); e < t; e++) a[e] = n[e];
  return a;
}
function qc(n, t) {
  if (n) {
    if (typeof n == "string") return qi(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return qi(n, t);
  }
}
function qf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fr(n, t) {
  return Tf(n) || kf(n, t) || qc(n, t) || qf();
}
var Ur = function(t) {
  var e = d.useRef(null);
  return d.useEffect(function() {
    return e.current = t, function() {
      e.current = null;
    };
  }, [t]), e.current;
}, jn = function(t) {
  return d.useEffect(function() {
    return t;
  }, []);
}, pr = function(t) {
  var e = t.target, a = e === void 0 ? "document" : e, r = t.type, o = t.listener, i = t.options, l = t.when, c = l === void 0 ? !0 : l, f = d.useRef(null), p = d.useRef(null), v = Ur(o), x = Ur(i), b = function() {
    var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, P = E.target;
    Q.isNotEmpty(P) && (k(), (E.when || c) && (f.current = M.getTargetElement(P))), !p.current && f.current && (p.current = function(A) {
      return o && o(A);
    }, f.current.addEventListener(r, p.current, i));
  }, k = function() {
    p.current && (f.current.removeEventListener(r, p.current, i), p.current = null);
  }, y = function() {
    k(), v = null, x = null;
  }, q = d.useCallback(function() {
    c ? f.current = M.getTargetElement(a) : (k(), f.current = null);
  }, [a, c]);
  return d.useEffect(function() {
    q();
  }, [q]), d.useEffect(function() {
    var O = "".concat(v) !== "".concat(o), E = x !== i, P = p.current;
    P && (O || E) ? (k(), c && b()) : P || y();
  }, [o, i, c]), jn(function() {
    y();
  }), [b, k];
}, wr = {}, If = function(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, a = d.useState(function() {
    return Or();
  }), r = fr(a, 1), o = r[0], i = d.useState(0), l = fr(i, 2), c = l[0], f = l[1];
  return d.useEffect(function() {
    if (e) {
      wr[t] || (wr[t] = []);
      var p = wr[t].push(o);
      return f(p), function() {
        delete wr[t][p - 1];
        var v = wr[t].length - 1, x = Q.findLastIndex(wr[t], function(b) {
          return b !== void 0;
        });
        x !== v && wr[t].splice(x + 1), f(void 0);
      };
    }
  }, [t, o, e]), c;
};
function Rf(n) {
  if (Array.isArray(n)) return qi(n);
}
function Mf(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function Nf() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hs(n) {
  return Rf(n) || Mf(n) || qc(n) || Nf();
}
var hl = {
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
}, Ic = {
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
      var e = Ic.escKeyListeners, a = Math.max.apply(Math, hs(e.keys())), r = e.get(a), o = Math.max.apply(Math, hs(r.keys())), i = r.get(o);
      i(t);
    }
  },
  /**
   * Attach global keydown listener if there are any "esc" key handlers assigned,
   * otherwise detach.
   */
  refreshGlobalKeyDownListener: function() {
    var t = M.getTargetElement("document");
    this.escKeyListeners.size > 0 ? t.addEventListener("keydown", this.onGlobalKeyDown) : t.removeEventListener("keydown", this.onGlobalKeyDown);
  },
  /**
   * Add "Esc" key handler
   */
  addListener: function(t, e) {
    var a = this, r = fr(e, 2), o = r[0], i = r[1], l = this.escKeyListeners;
    l.has(o) || l.set(o, /* @__PURE__ */ new Map());
    var c = l.get(o);
    if (c.has(i))
      throw new Error("Unexpected: global esc key listener with priority [".concat(o, ", ").concat(i, "] already exists."));
    return c.set(i, t), this.refreshGlobalKeyDownListener(), function() {
      c.delete(i), c.size === 0 && l.delete(o), a.refreshGlobalKeyDownListener();
    };
  }
}, bl = function(t) {
  var e = t.callback, a = t.when, r = t.priority;
  We(function() {
    if (a)
      return Ic.addListener(e, r);
  }, [e, a, r]);
}, cn = function() {
  var t = zn(Vt);
  return function() {
    for (var e = arguments.length, a = new Array(e), r = 0; r < e; r++)
      a[r] = arguments[r];
    return Oo(a, t == null ? void 0 : t.ptOptions);
  };
}, qn = function(t) {
  var e = d.useRef(!1);
  return d.useEffect(function() {
    if (!e.current)
      return e.current = !0, t && t();
  }, []);
}, Rc = function(t) {
  var e = t.target, a = t.listener, r = t.options, o = t.when, i = o === void 0 ? !0 : o, l = d.useContext(Vt), c = d.useRef(null), f = d.useRef(null), p = d.useRef([]), v = Ur(a), x = Ur(r), b = function() {
    var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Q.isNotEmpty(E.target) && (k(), (E.when || i) && (c.current = M.getTargetElement(E.target))), !f.current && c.current) {
      var P = l ? l.hideOverlaysOnDocumentScrolling : Tt.hideOverlaysOnDocumentScrolling, A = p.current = M.getScrollableParents(c.current, P);
      f.current = function(C) {
        return a && a(C);
      }, A.forEach(function(C) {
        return C.addEventListener("scroll", f.current, r);
      });
    }
  }, k = function() {
    if (f.current) {
      var E = p.current;
      E.forEach(function(P) {
        return P.removeEventListener("scroll", f.current, r);
      }), f.current = null;
    }
  }, y = function() {
    k(), p.current = null, v = null, x = null;
  }, q = d.useCallback(function() {
    i ? c.current = M.getTargetElement(e) : (k(), c.current = null);
  }, [e, i]);
  return d.useEffect(function() {
    q();
  }, [q]), d.useEffect(function() {
    var O = "".concat(v) !== "".concat(a), E = x !== r, P = f.current;
    P && (O || E) ? (k(), i && b()) : P || y();
  }, [a, r, i]), jn(function() {
    y();
  }), [b, k];
}, yl = function(t) {
  var e = t.listener, a = t.when, r = a === void 0 ? !0 : a;
  return pr({
    target: "window",
    type: "resize",
    listener: e,
    when: r
  });
}, Mc = function(t) {
  var e = t.target, a = t.overlay, r = t.listener, o = t.when, i = o === void 0 ? !0 : o, l = t.type, c = l === void 0 ? "click" : l, f = d.useRef(null), p = d.useRef(null), v = pr({
    target: "window",
    type: c,
    listener: function(ge) {
      r && r(ge, {
        type: "outside",
        valid: ge.which !== 3 && I(ge)
      });
    }
  }), x = fr(v, 2), b = x[0], k = x[1], y = yl({
    target: "window",
    listener: function(ge) {
      r && r(ge, {
        type: "resize",
        valid: !M.isTouchDevice()
      });
    }
  }), q = fr(y, 2), O = q[0], E = q[1], P = pr({
    target: "window",
    type: "orientationchange",
    listener: function(ge) {
      r && r(ge, {
        type: "orientationchange",
        valid: !0
      });
    }
  }), A = fr(P, 2), C = A[0], K = A[1], S = Rc({
    target: e,
    listener: function(ge) {
      r && r(ge, {
        type: "scroll",
        valid: !0
      });
    }
  }), H = fr(S, 2), X = H[0], U = H[1], I = function(ge) {
    return f.current && !(f.current.isSameNode(ge.target) || f.current.contains(ge.target) || p.current && p.current.contains(ge.target));
  }, oe = function() {
    b(), O(), C(), X();
  }, Y = function() {
    k(), E(), K(), U();
  };
  return d.useEffect(function() {
    i ? (f.current = M.getTargetElement(e), p.current = M.getTargetElement(a)) : (Y(), f.current = p.current = null);
  }, [e, a, i]), d.useEffect(function() {
    Y();
  }, [i]), jn(function() {
    Y();
  }), [oe, Y];
}, _f = 0, Cr = function(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = it(!1), r = fr(a, 2), o = r[0], i = r[1], l = Et(null), c = zn(Vt), f = M.isClient() ? window.document : void 0, p = e.document, v = p === void 0 ? f : p, x = e.manual, b = x === void 0 ? !1 : x, k = e.name, y = k === void 0 ? "style_".concat(++_f) : k, q = e.id, O = q === void 0 ? void 0 : q, E = e.media, P = E === void 0 ? void 0 : E, A = function(X) {
    var U = X.querySelector('style[data-primereact-style-id="'.concat(y, '"]'));
    if (U)
      return U;
    if (O !== void 0) {
      var I = v.getElementById(O);
      if (I)
        return I;
    }
    return v.createElement("style");
  }, C = function(X) {
    o && t !== X && (l.current.textContent = X);
  }, K = function() {
    if (!(!v || o)) {
      var X = (c == null ? void 0 : c.styleContainer) || v.head;
      l.current = A(X), l.current.isConnected || (l.current.type = "text/css", O && (l.current.id = O), P && (l.current.media = P), M.addNonce(l.current, c && c.nonce || Tt.nonce), X.appendChild(l.current), y && l.current.setAttribute("data-primereact-style-id", y)), l.current.textContent = t, i(!0);
    }
  }, S = function() {
    !v || !l.current || (M.removeInlineStyle(l.current), i(!1));
  };
  return We(function() {
    b || K();
  }, [b]), {
    id: O,
    name: y,
    update: C,
    unload: S,
    load: K,
    isLoaded: o
  };
}, dt = function(t, e) {
  var a = d.useRef(!1);
  return d.useEffect(function() {
    if (!a.current) {
      a.current = !0;
      return;
    }
    return t && t();
  }, e);
};
function Ii(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, a = new Array(t); e < t; e++) a[e] = n[e];
  return a;
}
function jf(n) {
  if (Array.isArray(n)) return Ii(n);
}
function Af(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function Lf(n, t) {
  if (n) {
    if (typeof n == "string") return Ii(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Ii(n, t);
  }
}
function Ff() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bs(n) {
  return jf(n) || Af(n) || Lf(n) || Ff();
}
function Oa(n) {
  "@babel/helpers - typeof";
  return Oa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Oa(n);
}
function $f(n, t) {
  if (Oa(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var a = e.call(n, t || "default");
    if (Oa(a) !== "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function Hf(n) {
  var t = $f(n, "string");
  return Oa(t) === "symbol" ? t : String(t);
}
function Ri(n, t, e) {
  return t = Hf(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function ys(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function nn(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ys(Object(e), !0).forEach(function(a) {
      Ri(n, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : ys(Object(e)).forEach(function(a) {
      Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return n;
}
var Bf = `
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
`, zf = `
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
`, Vf = `
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
`, Wf = `
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
`, Kf = `
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

    `.concat(zf, `
    `).concat(Vf, `
    `).concat(Wf, `
}
`), ot = {
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
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = t.css, a = nn(nn({}, t.defaultProps), ot.defaultProps), r = {}, o = function(p) {
      var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return ot.context = v, ot.cProps = p, Q.getMergedProps(p, a);
    }, i = function(p) {
      return Q.getDiffProps(p, a);
    }, l = function() {
      var p, v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, k = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0;
      v.hasOwnProperty("pt") && v.pt !== void 0 && (v = v.pt);
      var y = x, q = /./g.test(y) && !!b[y.split(".")[0]], O = q ? Q.toFlatCase(y.split(".")[1]) : Q.toFlatCase(y), E = b.hostName && Q.toFlatCase(b.hostName), P = E || b.props && b.props.__TYPE && Q.toFlatCase(b.props.__TYPE) || "", A = O === "transition", C = "data-pc-", K = function Oe(we) {
        return we != null && we.props ? we.hostName ? we.props.__TYPE === we.hostName ? we.props : Oe(we.parent) : we.parent : void 0;
      }, S = function(we) {
        var de, F;
        return ((de = b.props) === null || de === void 0 ? void 0 : de[we]) || ((F = K(b)) === null || F === void 0 ? void 0 : F[we]);
      };
      ot.cParams = b, ot.cName = P;
      var H = S("ptOptions") || ot.context.ptOptions || {}, X = H.mergeSections, U = X === void 0 ? !0 : X, I = H.mergeProps, oe = I === void 0 ? !1 : I, Y = function() {
        var we = vr.apply(void 0, arguments);
        return Array.isArray(we) ? {
          className: qe.apply(void 0, bs(we))
        } : Q.isString(we) ? {
          className: we
        } : we != null && we.hasOwnProperty("className") && Array.isArray(we.className) ? {
          className: qe.apply(void 0, bs(we.className))
        } : we;
      }, ve = k ? q ? Nc(Y, y, b) : _c(Y, y, b) : void 0, ge = q ? void 0 : Ho($o(v, P), Y, y, b), Ce = !A && nn(nn({}, O === "root" && Ri({}, "".concat(C, "name"), b.props && b.props.__parentMetadata ? Q.toFlatCase(b.props.__TYPE) : P)), {}, Ri({}, "".concat(C, "section"), O));
      return U || !U && ge ? oe ? Oo([ve, ge, Object.keys(Ce).length ? Ce : {}], {
        classNameMergeFunction: (p = ot.context.ptOptions) === null || p === void 0 ? void 0 : p.classNameMergeFunction
      }) : nn(nn(nn({}, ve), ge), Object.keys(Ce).length ? Ce : {}) : nn(nn({}, ge), Object.keys(Ce).length ? Ce : {});
    }, c = function() {
      var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, v = p.props, x = p.state, b = function() {
        var P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return l((v || {}).pt, P, nn(nn({}, p), A));
      }, k = function() {
        var P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", C = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return l(P, A, C, !1);
      }, y = function() {
        return ot.context.unstyled || Tt.unstyled || v.unstyled;
      }, q = function() {
        var P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return y() ? void 0 : vr(e && e.classes, P, nn({
          props: v,
          state: x
        }, A));
      }, O = function() {
        var P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, C = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
        if (C) {
          var K, S = vr(e && e.inlineStyles, P, nn({
            props: v,
            state: x
          }, A)), H = vr(r, P, nn({
            props: v,
            state: x
          }, A));
          return Oo([H, S], {
            classNameMergeFunction: (K = ot.context.ptOptions) === null || K === void 0 ? void 0 : K.classNameMergeFunction
          });
        }
      };
      return {
        ptm: b,
        ptmo: k,
        sx: O,
        cx: q,
        isUnstyled: y
      };
    };
    return nn(nn({
      getProps: o,
      getOtherProps: i,
      setMetaData: c
    }, t), {}, {
      defaultProps: a
    });
  }
}, vr = function n(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = String(Q.toFlatCase(e)).split("."), o = r.shift(), i = Q.isNotEmpty(t) ? Object.keys(t).find(function(l) {
    return Q.toFlatCase(l) === o;
  }) : "";
  return o ? Q.isObject(t) ? n(Q.getItemValue(t[i], a), r.join("."), a) : void 0 : Q.getItemValue(t, a);
}, $o = function(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", a = arguments.length > 2 ? arguments[2] : void 0, r = t == null ? void 0 : t._usept, o = function(l) {
    var c, f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, p = a ? a(l) : l, v = Q.toFlatCase(e);
    return (c = f ? v !== ot.cName ? p == null ? void 0 : p[v] : void 0 : p == null ? void 0 : p[v]) !== null && c !== void 0 ? c : p;
  };
  return Q.isNotEmpty(r) ? {
    _usept: r,
    originalValue: o(t.originalValue),
    value: o(t.value)
  } : o(t, !0);
}, Ho = function(t, e, a, r) {
  var o = function(y) {
    return e(y, a, r);
  };
  if (t != null && t.hasOwnProperty("_usept")) {
    var i = t._usept || ot.context.ptOptions || {}, l = i.mergeSections, c = l === void 0 ? !0 : l, f = i.mergeProps, p = f === void 0 ? !1 : f, v = i.classNameMergeFunction, x = o(t.originalValue), b = o(t.value);
    return x === void 0 && b === void 0 ? void 0 : Q.isString(b) ? b : Q.isString(x) ? x : c || !c && b ? p ? Oo([x, b], {
      classNameMergeFunction: v
    }) : nn(nn({}, x), b) : b;
  }
  return o(t);
}, Uf = function() {
  return $o(ot.context.pt || Tt.pt, void 0, function(t) {
    return Q.getItemValue(t, ot.cParams);
  });
}, Yf = function() {
  return $o(ot.context.pt || Tt.pt, void 0, function(t) {
    return vr(t, ot.cName, ot.cParams) || Q.getItemValue(t, ot.cParams);
  });
}, Nc = function(t, e, a) {
  return Ho(Uf(), t, e, a);
}, _c = function(t, e, a) {
  return Ho(Yf(), t, e, a);
}, In = function(t) {
  var e = arguments.length > 2 ? arguments[2] : void 0, a = e.name, r = e.styled, o = r === void 0 ? !1 : r, i = e.hostName, l = i === void 0 ? "" : i, c = Nc(vr, "global.css", ot.cParams), f = Q.toFlatCase(a), p = Cr(Bf, {
    name: "base",
    manual: !0
  }), v = p.load, x = Cr(Kf, {
    name: "common",
    manual: !0
  }), b = x.load, k = Cr(c, {
    name: "global",
    manual: !0
  }), y = k.load, q = Cr(t, {
    name: a,
    manual: !0
  }), O = q.load, E = function(A) {
    if (!l) {
      var C = Ho($o((ot.cProps || {}).pt, f), vr, "hooks.".concat(A)), K = _c(vr, "hooks.".concat(A));
      C == null || C(), K == null || K();
    }
  };
  E("useMountEffect"), qn(function() {
    v(), y(), b(), o || O();
  }), dt(function() {
    E("useUpdateEffect");
  }), jn(function() {
    E("useUnmountEffect");
  });
};
function Po() {
  return Po = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var a in e) ({}).hasOwnProperty.call(e, a) && (n[a] = e[a]);
    }
    return n;
  }, Po.apply(null, arguments);
}
function jc(n, t) {
  if (n == null) return {};
  var e = {};
  for (var a in n) if ({}.hasOwnProperty.call(n, a)) {
    if (t.includes(a)) continue;
    e[a] = n[a];
  }
  return e;
}
function Mi(n, t) {
  return Mi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, a) {
    return e.__proto__ = a, e;
  }, Mi(n, t);
}
function Ac(n, t) {
  n.prototype = Object.create(t.prototype), n.prototype.constructor = n, Mi(n, t);
}
var Ni = { exports: {} }, to = { exports: {} }, bt = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ws;
function Gf() {
  if (ws) return bt;
  ws = 1;
  var n = typeof Symbol == "function" && Symbol.for, t = n ? Symbol.for("react.element") : 60103, e = n ? Symbol.for("react.portal") : 60106, a = n ? Symbol.for("react.fragment") : 60107, r = n ? Symbol.for("react.strict_mode") : 60108, o = n ? Symbol.for("react.profiler") : 60114, i = n ? Symbol.for("react.provider") : 60109, l = n ? Symbol.for("react.context") : 60110, c = n ? Symbol.for("react.async_mode") : 60111, f = n ? Symbol.for("react.concurrent_mode") : 60111, p = n ? Symbol.for("react.forward_ref") : 60112, v = n ? Symbol.for("react.suspense") : 60113, x = n ? Symbol.for("react.suspense_list") : 60120, b = n ? Symbol.for("react.memo") : 60115, k = n ? Symbol.for("react.lazy") : 60116, y = n ? Symbol.for("react.block") : 60121, q = n ? Symbol.for("react.fundamental") : 60117, O = n ? Symbol.for("react.responder") : 60118, E = n ? Symbol.for("react.scope") : 60119;
  function P(C) {
    if (typeof C == "object" && C !== null) {
      var K = C.$$typeof;
      switch (K) {
        case t:
          switch (C = C.type, C) {
            case c:
            case f:
            case a:
            case o:
            case r:
            case v:
              return C;
            default:
              switch (C = C && C.$$typeof, C) {
                case l:
                case p:
                case k:
                case b:
                case i:
                  return C;
                default:
                  return K;
              }
          }
        case e:
          return K;
      }
    }
  }
  function A(C) {
    return P(C) === f;
  }
  return bt.AsyncMode = c, bt.ConcurrentMode = f, bt.ContextConsumer = l, bt.ContextProvider = i, bt.Element = t, bt.ForwardRef = p, bt.Fragment = a, bt.Lazy = k, bt.Memo = b, bt.Portal = e, bt.Profiler = o, bt.StrictMode = r, bt.Suspense = v, bt.isAsyncMode = function(C) {
    return A(C) || P(C) === c;
  }, bt.isConcurrentMode = A, bt.isContextConsumer = function(C) {
    return P(C) === l;
  }, bt.isContextProvider = function(C) {
    return P(C) === i;
  }, bt.isElement = function(C) {
    return typeof C == "object" && C !== null && C.$$typeof === t;
  }, bt.isForwardRef = function(C) {
    return P(C) === p;
  }, bt.isFragment = function(C) {
    return P(C) === a;
  }, bt.isLazy = function(C) {
    return P(C) === k;
  }, bt.isMemo = function(C) {
    return P(C) === b;
  }, bt.isPortal = function(C) {
    return P(C) === e;
  }, bt.isProfiler = function(C) {
    return P(C) === o;
  }, bt.isStrictMode = function(C) {
    return P(C) === r;
  }, bt.isSuspense = function(C) {
    return P(C) === v;
  }, bt.isValidElementType = function(C) {
    return typeof C == "string" || typeof C == "function" || C === a || C === f || C === o || C === r || C === v || C === x || typeof C == "object" && C !== null && (C.$$typeof === k || C.$$typeof === b || C.$$typeof === i || C.$$typeof === l || C.$$typeof === p || C.$$typeof === q || C.$$typeof === O || C.$$typeof === E || C.$$typeof === y);
  }, bt.typeOf = P, bt;
}
var yt = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xs;
function Xf() {
  return xs || (xs = 1, process.env.NODE_ENV !== "production" && function() {
    var n = typeof Symbol == "function" && Symbol.for, t = n ? Symbol.for("react.element") : 60103, e = n ? Symbol.for("react.portal") : 60106, a = n ? Symbol.for("react.fragment") : 60107, r = n ? Symbol.for("react.strict_mode") : 60108, o = n ? Symbol.for("react.profiler") : 60114, i = n ? Symbol.for("react.provider") : 60109, l = n ? Symbol.for("react.context") : 60110, c = n ? Symbol.for("react.async_mode") : 60111, f = n ? Symbol.for("react.concurrent_mode") : 60111, p = n ? Symbol.for("react.forward_ref") : 60112, v = n ? Symbol.for("react.suspense") : 60113, x = n ? Symbol.for("react.suspense_list") : 60120, b = n ? Symbol.for("react.memo") : 60115, k = n ? Symbol.for("react.lazy") : 60116, y = n ? Symbol.for("react.block") : 60121, q = n ? Symbol.for("react.fundamental") : 60117, O = n ? Symbol.for("react.responder") : 60118, E = n ? Symbol.for("react.scope") : 60119;
    function P(te) {
      return typeof te == "string" || typeof te == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      te === a || te === f || te === o || te === r || te === v || te === x || typeof te == "object" && te !== null && (te.$$typeof === k || te.$$typeof === b || te.$$typeof === i || te.$$typeof === l || te.$$typeof === p || te.$$typeof === q || te.$$typeof === O || te.$$typeof === E || te.$$typeof === y);
    }
    function A(te) {
      if (typeof te == "object" && te !== null) {
        var Ae = te.$$typeof;
        switch (Ae) {
          case t:
            var Je = te.type;
            switch (Je) {
              case c:
              case f:
              case a:
              case o:
              case r:
              case v:
                return Je;
              default:
                var Ue = Je && Je.$$typeof;
                switch (Ue) {
                  case l:
                  case p:
                  case k:
                  case b:
                  case i:
                    return Ue;
                  default:
                    return Ae;
                }
            }
          case e:
            return Ae;
        }
      }
    }
    var C = c, K = f, S = l, H = i, X = t, U = p, I = a, oe = k, Y = b, ve = e, ge = o, Ce = r, Oe = v, we = !1;
    function de(te) {
      return we || (we = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), F(te) || A(te) === c;
    }
    function F(te) {
      return A(te) === f;
    }
    function se(te) {
      return A(te) === l;
    }
    function ae(te) {
      return A(te) === i;
    }
    function N(te) {
      return typeof te == "object" && te !== null && te.$$typeof === t;
    }
    function j(te) {
      return A(te) === p;
    }
    function B(te) {
      return A(te) === a;
    }
    function Z(te) {
      return A(te) === k;
    }
    function ie(te) {
      return A(te) === b;
    }
    function V(te) {
      return A(te) === e;
    }
    function z(te) {
      return A(te) === o;
    }
    function ee(te) {
      return A(te) === r;
    }
    function Ee(te) {
      return A(te) === v;
    }
    yt.AsyncMode = C, yt.ConcurrentMode = K, yt.ContextConsumer = S, yt.ContextProvider = H, yt.Element = X, yt.ForwardRef = U, yt.Fragment = I, yt.Lazy = oe, yt.Memo = Y, yt.Portal = ve, yt.Profiler = ge, yt.StrictMode = Ce, yt.Suspense = Oe, yt.isAsyncMode = de, yt.isConcurrentMode = F, yt.isContextConsumer = se, yt.isContextProvider = ae, yt.isElement = N, yt.isForwardRef = j, yt.isFragment = B, yt.isLazy = Z, yt.isMemo = ie, yt.isPortal = V, yt.isProfiler = z, yt.isStrictMode = ee, yt.isSuspense = Ee, yt.isValidElementType = P, yt.typeOf = A;
  }()), yt;
}
var Ss;
function Lc() {
  return Ss || (Ss = 1, process.env.NODE_ENV === "production" ? to.exports = Gf() : to.exports = Xf()), to.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var di, Es;
function Jf() {
  if (Es) return di;
  Es = 1;
  var n = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, e = Object.prototype.propertyIsEnumerable;
  function a(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function r() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var i = {}, l = 0; l < 10; l++)
        i["_" + String.fromCharCode(l)] = l;
      var c = Object.getOwnPropertyNames(i).map(function(p) {
        return i[p];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        f[p] = p;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return di = r() ? Object.assign : function(o, i) {
    for (var l, c = a(o), f, p = 1; p < arguments.length; p++) {
      l = Object(arguments[p]);
      for (var v in l)
        t.call(l, v) && (c[v] = l[v]);
      if (n) {
        f = n(l);
        for (var x = 0; x < f.length; x++)
          e.call(l, f[x]) && (c[f[x]] = l[f[x]]);
      }
    }
    return c;
  }, di;
}
var fi, Cs;
function wl() {
  if (Cs) return fi;
  Cs = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return fi = n, fi;
}
var pi, Os;
function Fc() {
  return Os || (Os = 1, pi = Function.call.bind(Object.prototype.hasOwnProperty)), pi;
}
var vi, Ps;
function Zf() {
  if (Ps) return vi;
  Ps = 1;
  var n = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = wl(), e = {}, a = Fc();
    n = function(o) {
      var i = "Warning: " + o;
      typeof console < "u" && console.error(i);
      try {
        throw new Error(i);
      } catch {
      }
    };
  }
  function r(o, i, l, c, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in o)
        if (a(o, p)) {
          var v;
          try {
            if (typeof o[p] != "function") {
              var x = Error(
                (c || "React class") + ": " + l + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw x.name = "Invariant Violation", x;
            }
            v = o[p](i, p, c, l, null, t);
          } catch (k) {
            v = k;
          }
          if (v && !(v instanceof Error) && n(
            (c || "React class") + ": type specification of " + l + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof v + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), v instanceof Error && !(v.message in e)) {
            e[v.message] = !0;
            var b = f ? f() : "";
            n(
              "Failed " + l + " type: " + v.message + (b ?? "")
            );
          }
        }
    }
  }
  return r.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (e = {});
  }, vi = r, vi;
}
var mi, Ds;
function Qf() {
  if (Ds) return mi;
  Ds = 1;
  var n = Lc(), t = Jf(), e = wl(), a = Fc(), r = Zf(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(l) {
    var c = "Warning: " + l;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function i() {
    return null;
  }
  return mi = function(l, c) {
    var f = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function v(F) {
      var se = F && (f && F[f] || F[p]);
      if (typeof se == "function")
        return se;
    }
    var x = "<<anonymous>>", b = {
      array: O("array"),
      bigint: O("bigint"),
      bool: O("boolean"),
      func: O("function"),
      number: O("number"),
      object: O("object"),
      string: O("string"),
      symbol: O("symbol"),
      any: E(),
      arrayOf: P,
      element: A(),
      elementType: C(),
      instanceOf: K,
      node: U(),
      objectOf: H,
      oneOf: S,
      oneOfType: X,
      shape: oe,
      exact: Y
    };
    function k(F, se) {
      return F === se ? F !== 0 || 1 / F === 1 / se : F !== F && se !== se;
    }
    function y(F, se) {
      this.message = F, this.data = se && typeof se == "object" ? se : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function q(F) {
      if (process.env.NODE_ENV !== "production")
        var se = {}, ae = 0;
      function N(B, Z, ie, V, z, ee, Ee) {
        if (V = V || x, ee = ee || ie, Ee !== e) {
          if (c) {
            var te = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw te.name = "Invariant Violation", te;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Ae = V + ":" + ie;
            !se[Ae] && // Avoid spamming the console because they are often not actionable except for lib authors
            ae < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + ee + "` prop on `" + V + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), se[Ae] = !0, ae++);
          }
        }
        return Z[ie] == null ? B ? Z[ie] === null ? new y("The " + z + " `" + ee + "` is marked as required " + ("in `" + V + "`, but its value is `null`.")) : new y("The " + z + " `" + ee + "` is marked as required in " + ("`" + V + "`, but its value is `undefined`.")) : null : F(Z, ie, V, z, ee);
      }
      var j = N.bind(null, !1);
      return j.isRequired = N.bind(null, !0), j;
    }
    function O(F) {
      function se(ae, N, j, B, Z, ie) {
        var V = ae[N], z = Ce(V);
        if (z !== F) {
          var ee = Oe(V);
          return new y(
            "Invalid " + B + " `" + Z + "` of type " + ("`" + ee + "` supplied to `" + j + "`, expected ") + ("`" + F + "`."),
            { expectedType: F }
          );
        }
        return null;
      }
      return q(se);
    }
    function E() {
      return q(i);
    }
    function P(F) {
      function se(ae, N, j, B, Z) {
        if (typeof F != "function")
          return new y("Property `" + Z + "` of component `" + j + "` has invalid PropType notation inside arrayOf.");
        var ie = ae[N];
        if (!Array.isArray(ie)) {
          var V = Ce(ie);
          return new y("Invalid " + B + " `" + Z + "` of type " + ("`" + V + "` supplied to `" + j + "`, expected an array."));
        }
        for (var z = 0; z < ie.length; z++) {
          var ee = F(ie, z, j, B, Z + "[" + z + "]", e);
          if (ee instanceof Error)
            return ee;
        }
        return null;
      }
      return q(se);
    }
    function A() {
      function F(se, ae, N, j, B) {
        var Z = se[ae];
        if (!l(Z)) {
          var ie = Ce(Z);
          return new y("Invalid " + j + " `" + B + "` of type " + ("`" + ie + "` supplied to `" + N + "`, expected a single ReactElement."));
        }
        return null;
      }
      return q(F);
    }
    function C() {
      function F(se, ae, N, j, B) {
        var Z = se[ae];
        if (!n.isValidElementType(Z)) {
          var ie = Ce(Z);
          return new y("Invalid " + j + " `" + B + "` of type " + ("`" + ie + "` supplied to `" + N + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return q(F);
    }
    function K(F) {
      function se(ae, N, j, B, Z) {
        if (!(ae[N] instanceof F)) {
          var ie = F.name || x, V = de(ae[N]);
          return new y("Invalid " + B + " `" + Z + "` of type " + ("`" + V + "` supplied to `" + j + "`, expected ") + ("instance of `" + ie + "`."));
        }
        return null;
      }
      return q(se);
    }
    function S(F) {
      if (!Array.isArray(F))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), i;
      function se(ae, N, j, B, Z) {
        for (var ie = ae[N], V = 0; V < F.length; V++)
          if (k(ie, F[V]))
            return null;
        var z = JSON.stringify(F, function(Ee, te) {
          var Ae = Oe(te);
          return Ae === "symbol" ? String(te) : te;
        });
        return new y("Invalid " + B + " `" + Z + "` of value `" + String(ie) + "` " + ("supplied to `" + j + "`, expected one of " + z + "."));
      }
      return q(se);
    }
    function H(F) {
      function se(ae, N, j, B, Z) {
        if (typeof F != "function")
          return new y("Property `" + Z + "` of component `" + j + "` has invalid PropType notation inside objectOf.");
        var ie = ae[N], V = Ce(ie);
        if (V !== "object")
          return new y("Invalid " + B + " `" + Z + "` of type " + ("`" + V + "` supplied to `" + j + "`, expected an object."));
        for (var z in ie)
          if (a(ie, z)) {
            var ee = F(ie, z, j, B, Z + "." + z, e);
            if (ee instanceof Error)
              return ee;
          }
        return null;
      }
      return q(se);
    }
    function X(F) {
      if (!Array.isArray(F))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var se = 0; se < F.length; se++) {
        var ae = F[se];
        if (typeof ae != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + we(ae) + " at index " + se + "."
          ), i;
      }
      function N(j, B, Z, ie, V) {
        for (var z = [], ee = 0; ee < F.length; ee++) {
          var Ee = F[ee], te = Ee(j, B, Z, ie, V, e);
          if (te == null)
            return null;
          te.data && a(te.data, "expectedType") && z.push(te.data.expectedType);
        }
        var Ae = z.length > 0 ? ", expected one of type [" + z.join(", ") + "]" : "";
        return new y("Invalid " + ie + " `" + V + "` supplied to " + ("`" + Z + "`" + Ae + "."));
      }
      return q(N);
    }
    function U() {
      function F(se, ae, N, j, B) {
        return ve(se[ae]) ? null : new y("Invalid " + j + " `" + B + "` supplied to " + ("`" + N + "`, expected a ReactNode."));
      }
      return q(F);
    }
    function I(F, se, ae, N, j) {
      return new y(
        (F || "React class") + ": " + se + " type `" + ae + "." + N + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + j + "`."
      );
    }
    function oe(F) {
      function se(ae, N, j, B, Z) {
        var ie = ae[N], V = Ce(ie);
        if (V !== "object")
          return new y("Invalid " + B + " `" + Z + "` of type `" + V + "` " + ("supplied to `" + j + "`, expected `object`."));
        for (var z in F) {
          var ee = F[z];
          if (typeof ee != "function")
            return I(j, B, Z, z, Oe(ee));
          var Ee = ee(ie, z, j, B, Z + "." + z, e);
          if (Ee)
            return Ee;
        }
        return null;
      }
      return q(se);
    }
    function Y(F) {
      function se(ae, N, j, B, Z) {
        var ie = ae[N], V = Ce(ie);
        if (V !== "object")
          return new y("Invalid " + B + " `" + Z + "` of type `" + V + "` " + ("supplied to `" + j + "`, expected `object`."));
        var z = t({}, ae[N], F);
        for (var ee in z) {
          var Ee = F[ee];
          if (a(F, ee) && typeof Ee != "function")
            return I(j, B, Z, ee, Oe(Ee));
          if (!Ee)
            return new y(
              "Invalid " + B + " `" + Z + "` key `" + ee + "` supplied to `" + j + "`.\nBad object: " + JSON.stringify(ae[N], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(F), null, "  ")
            );
          var te = Ee(ie, ee, j, B, Z + "." + ee, e);
          if (te)
            return te;
        }
        return null;
      }
      return q(se);
    }
    function ve(F) {
      switch (typeof F) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !F;
        case "object":
          if (Array.isArray(F))
            return F.every(ve);
          if (F === null || l(F))
            return !0;
          var se = v(F);
          if (se) {
            var ae = se.call(F), N;
            if (se !== F.entries) {
              for (; !(N = ae.next()).done; )
                if (!ve(N.value))
                  return !1;
            } else
              for (; !(N = ae.next()).done; ) {
                var j = N.value;
                if (j && !ve(j[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ge(F, se) {
      return F === "symbol" ? !0 : se ? se["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && se instanceof Symbol : !1;
    }
    function Ce(F) {
      var se = typeof F;
      return Array.isArray(F) ? "array" : F instanceof RegExp ? "object" : ge(se, F) ? "symbol" : se;
    }
    function Oe(F) {
      if (typeof F > "u" || F === null)
        return "" + F;
      var se = Ce(F);
      if (se === "object") {
        if (F instanceof Date)
          return "date";
        if (F instanceof RegExp)
          return "regexp";
      }
      return se;
    }
    function we(F) {
      var se = Oe(F);
      switch (se) {
        case "array":
        case "object":
          return "an " + se;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + se;
        default:
          return se;
      }
    }
    function de(F) {
      return !F.constructor || !F.constructor.name ? x : F.constructor.name;
    }
    return b.checkPropTypes = r, b.resetWarningCache = r.resetWarningCache, b.PropTypes = b, b;
  }, mi;
}
var gi, Ts;
function ep() {
  if (Ts) return gi;
  Ts = 1;
  var n = wl();
  function t() {
  }
  function e() {
  }
  return e.resetWarningCache = t, gi = function() {
    function a(i, l, c, f, p, v) {
      if (v !== n) {
        var x = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw x.name = "Invariant Violation", x;
      }
    }
    a.isRequired = a;
    function r() {
      return a;
    }
    var o = {
      array: a,
      bigint: a,
      bool: a,
      func: a,
      number: a,
      object: a,
      string: a,
      symbol: a,
      any: a,
      arrayOf: r,
      element: a,
      elementType: a,
      instanceOf: r,
      node: a,
      objectOf: r,
      oneOf: r,
      oneOfType: r,
      shape: r,
      exact: r,
      checkPropTypes: e,
      resetWarningCache: t
    };
    return o.PropTypes = o, o;
  }, gi;
}
if (process.env.NODE_ENV !== "production") {
  var tp = Lc(), np = !0;
  Ni.exports = Qf()(tp.isElement, np);
} else
  Ni.exports = ep()();
var xr = Ni.exports;
const Xe = /* @__PURE__ */ Gd(xr);
function rp(n, t) {
  return n.classList ? !!t && n.classList.contains(t) : (" " + (n.className.baseVal || n.className) + " ").indexOf(" " + t + " ") !== -1;
}
function ap(n, t) {
  n.classList ? n.classList.add(t) : rp(n, t) || (typeof n.className == "string" ? n.className = n.className + " " + t : n.setAttribute("class", (n.className && n.className.baseVal || "") + " " + t));
}
function ks(n, t) {
  return n.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function op(n, t) {
  n.classList ? n.classList.remove(t) : typeof n.className == "string" ? n.className = ks(n.className, t) : n.setAttribute("class", ks(n.className && n.className.baseVal || "", t));
}
const qs = {
  disabled: !1
};
var ip = process.env.NODE_ENV !== "production" ? Xe.oneOfType([Xe.number, Xe.shape({
  enter: Xe.number,
  exit: Xe.number,
  appear: Xe.number
}).isRequired]) : null, lp = process.env.NODE_ENV !== "production" ? Xe.oneOfType([Xe.string, Xe.shape({
  enter: Xe.string,
  exit: Xe.string,
  active: Xe.string
}), Xe.shape({
  enter: Xe.string,
  enterDone: Xe.string,
  enterActive: Xe.string,
  exit: Xe.string,
  exitDone: Xe.string,
  exitActive: Xe.string
})]) : null;
const $c = ze.createContext(null);
var Hc = function(t) {
  return t.scrollTop;
}, ha = "unmounted", Sr = "exited", Er = "entering", Fr = "entered", _i = "exiting", Wn = /* @__PURE__ */ function(n) {
  Ac(t, n);
  function t(a, r) {
    var o;
    o = n.call(this, a, r) || this;
    var i = r, l = i && !i.isMounting ? a.enter : a.appear, c;
    return o.appearStatus = null, a.in ? l ? (c = Sr, o.appearStatus = Er) : c = Fr : a.unmountOnExit || a.mountOnEnter ? c = ha : c = Sr, o.state = {
      status: c
    }, o.nextCallback = null, o;
  }
  t.getDerivedStateFromProps = function(r, o) {
    var i = r.in;
    return i && o.status === ha ? {
      status: Sr
    } : null;
  };
  var e = t.prototype;
  return e.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, e.componentDidUpdate = function(r) {
    var o = null;
    if (r !== this.props) {
      var i = this.state.status;
      this.props.in ? i !== Er && i !== Fr && (o = Er) : (i === Er || i === Fr) && (o = _i);
    }
    this.updateStatus(!1, o);
  }, e.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, e.getTimeouts = function() {
    var r = this.props.timeout, o, i, l;
    return o = i = l = r, r != null && typeof r != "number" && (o = r.exit, i = r.enter, l = r.appear !== void 0 ? r.appear : i), {
      exit: o,
      enter: i,
      appear: l
    };
  }, e.updateStatus = function(r, o) {
    if (r === void 0 && (r = !1), o !== null)
      if (this.cancelNextCallback(), o === Er) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var i = this.props.nodeRef ? this.props.nodeRef.current : ga.findDOMNode(this);
          i && Hc(i);
        }
        this.performEnter(r);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Sr && this.setState({
      status: ha
    });
  }, e.performEnter = function(r) {
    var o = this, i = this.props.enter, l = this.context ? this.context.isMounting : r, c = this.props.nodeRef ? [l] : [ga.findDOMNode(this), l], f = c[0], p = c[1], v = this.getTimeouts(), x = l ? v.appear : v.enter;
    if (!r && !i || qs.disabled) {
      this.safeSetState({
        status: Fr
      }, function() {
        o.props.onEntered(f);
      });
      return;
    }
    this.props.onEnter(f, p), this.safeSetState({
      status: Er
    }, function() {
      o.props.onEntering(f, p), o.onTransitionEnd(x, function() {
        o.safeSetState({
          status: Fr
        }, function() {
          o.props.onEntered(f, p);
        });
      });
    });
  }, e.performExit = function() {
    var r = this, o = this.props.exit, i = this.getTimeouts(), l = this.props.nodeRef ? void 0 : ga.findDOMNode(this);
    if (!o || qs.disabled) {
      this.safeSetState({
        status: Sr
      }, function() {
        r.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: _i
    }, function() {
      r.props.onExiting(l), r.onTransitionEnd(i.exit, function() {
        r.safeSetState({
          status: Sr
        }, function() {
          r.props.onExited(l);
        });
      });
    });
  }, e.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, e.safeSetState = function(r, o) {
    o = this.setNextCallback(o), this.setState(r, o);
  }, e.setNextCallback = function(r) {
    var o = this, i = !0;
    return this.nextCallback = function(l) {
      i && (i = !1, o.nextCallback = null, r(l));
    }, this.nextCallback.cancel = function() {
      i = !1;
    }, this.nextCallback;
  }, e.onTransitionEnd = function(r, o) {
    this.setNextCallback(o);
    var i = this.props.nodeRef ? this.props.nodeRef.current : ga.findDOMNode(this), l = r == null && !this.props.addEndListener;
    if (!i || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [i, this.nextCallback], f = c[0], p = c[1];
      this.props.addEndListener(f, p);
    }
    r != null && setTimeout(this.nextCallback, r);
  }, e.render = function() {
    var r = this.state.status;
    if (r === ha)
      return null;
    var o = this.props, i = o.children;
    o.in, o.mountOnEnter, o.unmountOnExit, o.appear, o.enter, o.exit, o.timeout, o.addEndListener, o.onEnter, o.onEntering, o.onEntered, o.onExit, o.onExiting, o.onExited, o.nodeRef;
    var l = jc(o, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ ze.createElement($c.Provider, {
        value: null
      }, typeof i == "function" ? i(r, l) : ze.cloneElement(ze.Children.only(i), l))
    );
  }, t;
}(ze.Component);
Wn.contextType = $c;
Wn.propTypes = process.env.NODE_ENV !== "production" ? {
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
  nodeRef: Xe.shape({
    current: typeof Element > "u" ? Xe.any : function(n, t, e, a, r, o) {
      var i = n[t];
      return Xe.instanceOf(i && "ownerDocument" in i ? i.ownerDocument.defaultView.Element : Element)(n, t, e, a, r, o);
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
  children: Xe.oneOfType([Xe.func.isRequired, Xe.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: Xe.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: Xe.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: Xe.bool,
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
  appear: Xe.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: Xe.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: Xe.bool,
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
    var e = ip;
    t.addEndListener || (e = e.isRequired);
    for (var a = arguments.length, r = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++)
      r[o - 1] = arguments[o];
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
  addEndListener: Xe.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: Xe.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: Xe.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: Xe.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: Xe.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: Xe.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: Xe.func
} : {};
function _r() {
}
Wn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: _r,
  onEntering: _r,
  onEntered: _r,
  onExit: _r,
  onExiting: _r,
  onExited: _r
};
Wn.UNMOUNTED = ha;
Wn.EXITED = Sr;
Wn.ENTERING = Er;
Wn.ENTERED = Fr;
Wn.EXITING = _i;
var sp = function(t, e) {
  return t && e && e.split(" ").forEach(function(a) {
    return ap(t, a);
  });
}, hi = function(t, e) {
  return t && e && e.split(" ").forEach(function(a) {
    return op(t, a);
  });
}, xl = /* @__PURE__ */ function(n) {
  Ac(t, n);
  function t() {
    for (var a, r = arguments.length, o = new Array(r), i = 0; i < r; i++)
      o[i] = arguments[i];
    return a = n.call.apply(n, [this].concat(o)) || this, a.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    }, a.onEnter = function(l, c) {
      var f = a.resolveArguments(l, c), p = f[0], v = f[1];
      a.removeClasses(p, "exit"), a.addClass(p, v ? "appear" : "enter", "base"), a.props.onEnter && a.props.onEnter(l, c);
    }, a.onEntering = function(l, c) {
      var f = a.resolveArguments(l, c), p = f[0], v = f[1], x = v ? "appear" : "enter";
      a.addClass(p, x, "active"), a.props.onEntering && a.props.onEntering(l, c);
    }, a.onEntered = function(l, c) {
      var f = a.resolveArguments(l, c), p = f[0], v = f[1], x = v ? "appear" : "enter";
      a.removeClasses(p, x), a.addClass(p, x, "done"), a.props.onEntered && a.props.onEntered(l, c);
    }, a.onExit = function(l) {
      var c = a.resolveArguments(l), f = c[0];
      a.removeClasses(f, "appear"), a.removeClasses(f, "enter"), a.addClass(f, "exit", "base"), a.props.onExit && a.props.onExit(l);
    }, a.onExiting = function(l) {
      var c = a.resolveArguments(l), f = c[0];
      a.addClass(f, "exit", "active"), a.props.onExiting && a.props.onExiting(l);
    }, a.onExited = function(l) {
      var c = a.resolveArguments(l), f = c[0];
      a.removeClasses(f, "exit"), a.addClass(f, "exit", "done"), a.props.onExited && a.props.onExited(l);
    }, a.resolveArguments = function(l, c) {
      return a.props.nodeRef ? [a.props.nodeRef.current, l] : [l, c];
    }, a.getClassNames = function(l) {
      var c = a.props.classNames, f = typeof c == "string", p = f && c ? c + "-" : "", v = f ? "" + p + l : c[l], x = f ? v + "-active" : c[l + "Active"], b = f ? v + "-done" : c[l + "Done"];
      return {
        baseClassName: v,
        activeClassName: x,
        doneClassName: b
      };
    }, a;
  }
  var e = t.prototype;
  return e.addClass = function(r, o, i) {
    var l = this.getClassNames(o)[i + "ClassName"], c = this.getClassNames("enter"), f = c.doneClassName;
    o === "appear" && i === "done" && f && (l += " " + f), i === "active" && r && Hc(r), l && (this.appliedClasses[o][i] = l, sp(r, l));
  }, e.removeClasses = function(r, o) {
    var i = this.appliedClasses[o], l = i.base, c = i.active, f = i.done;
    this.appliedClasses[o] = {}, l && hi(r, l), c && hi(r, c), f && hi(r, f);
  }, e.render = function() {
    var r = this.props;
    r.classNames;
    var o = jc(r, ["classNames"]);
    return /* @__PURE__ */ ze.createElement(Wn, Po({}, o, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  }, t;
}(ze.Component);
xl.defaultProps = {
  classNames: ""
};
xl.propTypes = process.env.NODE_ENV !== "production" ? Po({}, Wn.propTypes, {
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
  classNames: lp,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: Xe.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: Xe.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: Xe.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: Xe.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: Xe.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: Xe.func
}) : {};
function Pa(n) {
  "@babel/helpers - typeof";
  return Pa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pa(n);
}
function cp(n, t) {
  if (Pa(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var a = e.call(n, t || "default");
    if (Pa(a) !== "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function up(n) {
  var t = cp(n, "string");
  return Pa(t) === "symbol" ? t : String(t);
}
function dp(n, t, e) {
  return t = up(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
var ji = {
  defaultProps: {
    __TYPE: "CSSTransition",
    children: void 0
  },
  getProps: function(t) {
    return Q.getMergedProps(t, ji.defaultProps);
  },
  getOtherProps: function(t) {
    return Q.getDiffProps(t, ji.defaultProps);
  }
};
function Is(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function bi(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Is(Object(e), !0).forEach(function(a) {
      dp(n, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Is(Object(e)).forEach(function(a) {
      Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return n;
}
var Ba = /* @__PURE__ */ d.forwardRef(function(n, t) {
  var e = ji.getProps(n), a = d.useContext(Vt), r = e.disabled || e.options && e.options.disabled || a && !a.cssTransition || !Tt.cssTransition, o = function(y, q) {
    e.onEnter && e.onEnter(y, q), e.options && e.options.onEnter && e.options.onEnter(y, q);
  }, i = function(y, q) {
    e.onEntering && e.onEntering(y, q), e.options && e.options.onEntering && e.options.onEntering(y, q);
  }, l = function(y, q) {
    e.onEntered && e.onEntered(y, q), e.options && e.options.onEntered && e.options.onEntered(y, q);
  }, c = function(y) {
    e.onExit && e.onExit(y), e.options && e.options.onExit && e.options.onExit(y);
  }, f = function(y) {
    e.onExiting && e.onExiting(y), e.options && e.options.onExiting && e.options.onExiting(y);
  }, p = function(y) {
    e.onExited && e.onExited(y), e.options && e.options.onExited && e.options.onExited(y);
  };
  if (dt(function() {
    if (r) {
      var k = Q.getRefElement(e.nodeRef);
      e.in ? (o(k, !0), i(k, !0), l(k, !0)) : (c(k), f(k), p(k));
    }
  }, [e.in]), r)
    return e.in ? e.children : null;
  var v = {
    nodeRef: e.nodeRef,
    in: e.in,
    onEnter: o,
    onEntering: i,
    onEntered: l,
    onExit: c,
    onExiting: f,
    onExited: p
  }, x = {
    classNames: e.classNames,
    timeout: e.timeout,
    unmountOnExit: e.unmountOnExit
  }, b = bi(bi(bi({}, x), e.options || {}), v);
  return /* @__PURE__ */ d.createElement(xl, b, e.children);
});
Ba.displayName = "CSSTransition";
var bn = {
  defaultProps: {
    __TYPE: "IconBase",
    className: null,
    label: null,
    spin: !1
  },
  getProps: function(t) {
    return Q.getMergedProps(t, bn.defaultProps);
  },
  getOtherProps: function(t) {
    return Q.getDiffProps(t, bn.defaultProps);
  },
  getPTI: function(t) {
    var e = Q.isEmpty(t.label), a = bn.getOtherProps(t), r = {
      className: qe("p-icon", {
        "p-icon-spin": t.spin
      }, t.className),
      role: e ? void 0 : "img",
      "aria-label": e ? void 0 : t.label,
      "aria-hidden": e
    };
    return Q.getMergedProps(a, r);
  }
};
function Ai() {
  return Ai = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
    }
    return n;
  }, Ai.apply(this, arguments);
}
var Bo = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(n, t) {
  var e = bn.getPTI(n);
  return /* @__PURE__ */ d.createElement("svg", Ai({
    ref: t,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e), /* @__PURE__ */ d.createElement("path", {
    d: "M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z",
    fill: "currentColor"
  }));
}));
Bo.displayName = "ChevronDownIcon";
function Li() {
  return Li = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
    }
    return n;
  }, Li.apply(this, arguments);
}
var zo = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(n, t) {
  var e = bn.getPTI(n);
  return /* @__PURE__ */ d.createElement("svg", Li({
    ref: t,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e), /* @__PURE__ */ d.createElement("path", {
    d: "M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z",
    fill: "currentColor"
  }));
}));
zo.displayName = "ChevronRightIcon";
function Do() {
  return Do = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
    }
    return n;
  }, Do.apply(this, arguments);
}
function Fi(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, a = new Array(t); e < t; e++) a[e] = n[e];
  return a;
}
function fp(n) {
  if (Array.isArray(n)) return Fi(n);
}
function pp(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function Bc(n, t) {
  if (n) {
    if (typeof n == "string") return Fi(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Fi(n, t);
  }
}
function vp() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mp(n) {
  return fp(n) || pp(n) || Bc(n) || vp();
}
function Da(n) {
  "@babel/helpers - typeof";
  return Da = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Da(n);
}
function gp(n, t) {
  if (Da(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var a = e.call(n, t || "default");
    if (Da(a) !== "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function hp(n) {
  var t = gp(n, "string");
  return Da(t) === "symbol" ? t : String(t);
}
function bp(n, t, e) {
  return t = hp(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function yp(n) {
  if (Array.isArray(n)) return n;
}
function wp(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var a, r, o, i, l = [], c = !0, f = !1;
    try {
      if (o = (e = e.call(n)).next, t !== 0) for (; !(c = (a = o.call(e)).done) && (l.push(a.value), l.length !== t); c = !0) ;
    } catch (p) {
      f = !0, r = p;
    } finally {
      try {
        if (!c && e.return != null && (i = e.return(), Object(i) !== i)) return;
      } finally {
        if (f) throw r;
      }
    }
    return l;
  }
}
function xp() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Rs(n, t) {
  return yp(n) || wp(n, t) || Bc(n, t) || xp();
}
var Sp = {
  root: "p-accordion p-component",
  accordiontab: {
    root: function(t) {
      var e = t.selected;
      return qe("p-accordion-tab", {
        "p-accordion-tab-active": e
      });
    },
    content: "p-accordion-content",
    header: function(t) {
      var e = t.selected, a = t.getTabProp, r = t.tab;
      return qe("p-accordion-header", {
        "p-highlight": e,
        "p-disabled": a(r, "disabled")
      });
    },
    headeraction: "p-accordion-header-link",
    headericon: "p-accordion-toggle-icon",
    headertitle: "p-accordion-header-text",
    toggleablecontent: "p-toggleable-content",
    transition: "p-toggleable-content"
  }
}, Ep = `
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
`, no = ot.extend({
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
    classes: Sp,
    styles: Ep
  }
}), zr = ot.extend({
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
    return Q.getComponentProp(t, e, zr.defaultProps);
  },
  getCProps: function(t) {
    return Q.getComponentProps(t, zr.defaultProps);
  },
  getCOtherProps: function(t) {
    return Q.getComponentDiffProps(t, zr.defaultProps);
  }
});
function Ms(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function jr(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ms(Object(e), !0).forEach(function(a) {
      bp(n, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Ms(Object(e)).forEach(function(a) {
      Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return n;
}
var Vn = function() {
}, Qn = /* @__PURE__ */ d.forwardRef(function(n, t) {
  var e = cn(), a = d.useContext(Vt), r = no.getProps(n, a), o = d.useState(r.id), i = Rs(o, 2), l = i[0], c = i[1], f = d.useState(r.activeIndex), p = Rs(f, 2), v = p[0], x = p[1], b = d.useRef(null), k = r.onTabChange ? r.activeIndex : v, y = d.Children.count(r.children), q = {
    props: r,
    state: {
      id: l,
      activeIndex: v
    }
  }, O = no.setMetaData(jr({}, q)), E = O.ptm, P = O.ptmo, A = O.cx, C = O.isUnstyled;
  In(no.css.styles, C, {
    name: "accordion"
  });
  var K = function(z, ee) {
    return zr.getCProp(z, ee);
  }, S = function(z, ee, Ee) {
    var te = {
      // props: atProps, /* @todo */
      parent: q,
      context: {
        index: Ee,
        count: y,
        first: Ee === 0,
        last: Ee === y - 1,
        selected: se(Ee),
        disabled: K(z, "disabled")
      }
    };
    return e(E("tab.".concat(ee), {
      tab: te
    }), E("accordiontab.".concat(ee), {
      accordiontab: te
    }), E("accordiontab.".concat(ee), te), P(K(z, "pt"), ee, te));
  }, H = function(z, ee, Ee) {
    X(z, ee, Ee);
  }, X = function(z, ee, Ee) {
    if (!K(ee, "disabled")) {
      var te = se(Ee), Ae = null;
      if (r.multiple) {
        var Je = k || [];
        Ae = te ? Je.filter(function(Ne) {
          return Ne !== Ee;
        }) : [].concat(mp(Je), [Ee]);
      } else
        Ae = te ? null : Ee;
      var Ue = te ? r.onTabClose : r.onTabOpen;
      Ue && Ue({
        originalEvent: z,
        index: Ee
      }), r.onTabChange ? r.onTabChange({
        originalEvent: z,
        index: Ae
      }) : x(Ae);
    }
    z.preventDefault();
  }, U = function(z, ee, Ee) {
    switch (z.code) {
      case "ArrowDown":
        I(z);
        break;
      case "ArrowUp":
        oe(z);
        break;
      case "Home":
        Y(z);
        break;
      case "End":
        ve(z);
        break;
      case "Enter":
      case "NumpadEnter":
      case "Space":
        ge(z, ee, Ee);
        break;
    }
  }, I = function(z) {
    var ee = Ce(z.target.parentElement.parentElement);
    ee ? F(ee) : Y(z), z.preventDefault();
  }, oe = function(z) {
    var ee = Oe(z.target.parentElement.parentElement);
    ee ? F(ee) : ve(z), z.preventDefault();
  }, Y = function(z) {
    var ee = we();
    F(ee), z.preventDefault();
  }, ve = function(z) {
    var ee = de();
    F(ee), z.preventDefault();
  }, ge = function(z, ee, Ee) {
    X(z, ee, Ee), z.preventDefault();
  }, Ce = function V(z) {
    var ee = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, Ee = ee ? z : z.nextElementSibling, te = M.findSingle(Ee, '[data-pc-section="header"]');
    return te ? M.getAttribute(te, "data-p-disabled") ? V(te.parentElement) : M.findSingle(te, '[data-pc-section="headeraction"]') : null;
  }, Oe = function V(z) {
    var ee = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, Ee = ee ? z : z.previousElementSibling, te = M.findSingle(Ee, '[data-pc-section="header"]');
    return te ? M.getAttribute(te, "data-p-disabled") ? V(te.parentElement) : M.findSingle(te, '[data-pc-section="headeraction"]') : null;
  }, we = function() {
    return Ce(b.current.firstElementChild, !0);
  }, de = function() {
    return Oe(b.current.lastElementChild, !0);
  }, F = function(z) {
    z && M.focus(z);
  }, se = function(z) {
    return r.multiple && Array.isArray(k) ? k && k.some(function(ee) {
      return ee === z;
    }) : k === z;
  };
  if (d.useImperativeHandle(t, function() {
    return {
      props: r,
      getElement: function() {
        return b.current;
      }
    };
  }), qn(function() {
    l || c(Or());
  }), !l)
    return null;
  var ae = function(z, ee, Ee) {
    var te = jr(jr({}, K(z, "style") || {}), K(z, "headerStyle") || {}), Ae = l + "_header_" + Ee, Je = l + "_content_" + Ee, Ue = K(z, "disabled") ? -1 : K(z, "tabIndex"), Ne = e({
      className: A("accordiontab.headertitle")
    }, S(z, "headertitle", Ee)), nt = zr.getCProps(z), $t = K(z, "headerTemplate") ? Q.getJSXElement(K(z, "headerTemplate"), nt) : /* @__PURE__ */ d.createElement("span", Ne, Q.getJSXElement(K(z, "header"), nt)), It = e({
      "aria-hidden": "true",
      className: A("accordiontab.headericon")
    }, S(z, "headericon", Ee)), Ze = ee ? r.collapseIcon || /* @__PURE__ */ d.createElement(Bo, It) : r.expandIcon || /* @__PURE__ */ d.createElement(zo, It), Ct = Ut.getJSXIcon(Ze, jr({}, It), {
      props: r,
      selected: ee
    }), _t = e({
      className: qe(K(z, "headerClassName"), K(z, "className"), A("accordiontab.header", {
        selected: ee,
        getTabProp: K,
        tab: z
      })),
      style: te,
      "data-p-highlight": ee,
      "data-p-disabled": K(z, "disabled")
    }, S(z, "header", Ee)), St = e({
      id: Ae,
      href: "#" + Je,
      className: A("accordiontab.headeraction"),
      role: "button",
      tabIndex: Ue,
      onClick: function(vt) {
        return H(vt, z, Ee);
      },
      onKeyDown: function(vt) {
        return U(vt, z, Ee);
      },
      "aria-disabled": K(z, "disabled"),
      "aria-controls": Je,
      "aria-expanded": ee
    }, S(z, "headeraction", Ee));
    return /* @__PURE__ */ d.createElement("div", _t, /* @__PURE__ */ d.createElement("a", St, Ct, $t));
  }, N = function(z, ee, Ee) {
    var te = jr(jr({}, K(z, "style") || {}), K(z, "contentStyle") || {}), Ae = l + "_content_" + Ee, Je = l + "_header_" + Ee, Ue = /* @__PURE__ */ d.createRef(), Ne = e({
      id: Ae,
      ref: Ue,
      className: qe(K(z, "contentClassName"), K(z, "className"), A("accordiontab.toggleablecontent")),
      style: te,
      role: "region",
      "aria-labelledby": Je
    }, S(z, "toggleablecontent", Ee)), nt = e({
      className: A("accordiontab.content")
    }, S(z, "content", Ee)), $t = e({
      classNames: A("accordiontab.transition"),
      timeout: {
        enter: 1e3,
        exit: 450
      },
      in: ee,
      unmountOnExit: !0,
      options: r.transitionOptions
    }, S(z, "transition", Ee));
    return /* @__PURE__ */ d.createElement(Ba, Do({
      nodeRef: Ue
    }, $t), /* @__PURE__ */ d.createElement("div", Ne, /* @__PURE__ */ d.createElement("div", nt, K(z, "children"))));
  }, j = function(z, ee) {
    if (Q.isValidChild(z, "AccordionTab")) {
      var Ee = l + "_" + ee, te = se(ee), Ae = ae(z, te, ee), Je = N(z, te, ee), Ue = e({
        key: Ee,
        className: A("accordiontab.root", {
          selected: te
        })
      }, zr.getCOtherProps(z), S(z, "root", ee));
      return /* @__PURE__ */ d.createElement("div", Ue, Ae, Je);
    }
    return null;
  }, B = function() {
    return d.Children.map(r.children, j);
  }, Z = B(), ie = e({
    className: qe(r.className, A("root")),
    style: r.style
  }, no.getOtherProps(r), E("root"));
  return /* @__PURE__ */ d.createElement("div", Do({
    id: l,
    ref: b
  }, ie), Z);
});
Vn.displayName = "AccordionTab";
Qn.displayName = "Accordion";
function $i() {
  return $i = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
    }
    return n;
  }, $i.apply(this, arguments);
}
function Ta(n) {
  "@babel/helpers - typeof";
  return Ta = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ta(n);
}
function Cp(n, t) {
  if (Ta(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var a = e.call(n, t || "default");
    if (Ta(a) !== "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function Op(n) {
  var t = Cp(n, "string");
  return Ta(t) === "symbol" ? t : String(t);
}
function Pp(n, t, e) {
  return t = Op(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function Dp(n) {
  if (Array.isArray(n)) return n;
}
function Tp(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var a, r, o, i, l = [], c = !0, f = !1;
    try {
      if (o = (e = e.call(n)).next, t !== 0) for (; !(c = (a = o.call(e)).done) && (l.push(a.value), l.length !== t); c = !0) ;
    } catch (p) {
      f = !0, r = p;
    } finally {
      try {
        if (!c && e.return != null && (i = e.return(), Object(i) !== i)) return;
      } finally {
        if (f) throw r;
      }
    }
    return l;
  }
}
function Ns(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, a = new Array(t); e < t; e++) a[e] = n[e];
  return a;
}
function kp(n, t) {
  if (n) {
    if (typeof n == "string") return Ns(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Ns(n, t);
  }
}
function qp() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ip(n, t) {
  return Dp(n) || Tp(n, t) || kp(n, t) || qp();
}
var Rp = {
  root: function(t) {
    var e = t.props;
    return qe("", e.className);
  },
  toolbar: "",
  content: ""
}, Mp = `
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
`, ro = ot.extend({
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
    classes: Rp,
    styles: Mp
  }
});
function _s(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function js(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _s(Object(e), !0).forEach(function(a) {
      Pp(n, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : _s(Object(e)).forEach(function(a) {
      Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return n;
}
var Np = function() {
  try {
    return Quill;
  } catch {
    return null;
  }
}(), zc = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(n, t) {
  var e = cn(), a = d.useContext(Vt), r = ro.getProps(n, a), o = ro.setMetaData({
    props: r
  }), i = o.ptm, l = o.cx, c = o.isUnstyled;
  In(ro.css.styles, c, {
    name: "editor"
  });
  var f = d.useRef(null), p = d.useRef(null), v = d.useRef(null), x = d.useRef(null), b = d.useRef(!1), k = d.useState(!1), y = Ip(k, 2), q = y[0], O = y[1];
  qn(function() {
    if (!b.current) {
      var I = {
        modules: js({
          toolbar: r.showHeader ? v.current : !1
        }, r.modules),
        placeholder: r.placeholder,
        readOnly: r.readOnly,
        theme: r.theme,
        formats: r.formats
      };
      Np ? C(new Quill(p.current, I)) : import("quill").then(function(oe) {
        if (oe && M.isExist(p.current)) {
          var Y;
          oe.default ? Y = new oe.default(p.current, I) : Y = new oe(p.current, I), C(Y);
        }
      }), b.current = !0;
    }
  });
  var E = function(oe, Y, ve) {
    var ge = p.current.children[0], Ce = ge ? ge.innerHTML : null, Oe = x.current.getText();
    if (Ce === "<p><br></p>" && (Ce = null), ve === "api") {
      var we = p.current.children[0], de = document.createElement("div");
      if (de.innerHTML = r.value || "", M.isEqualElement(we, de))
        return;
    }
    if (r.maxLength) {
      var F = x.current.getLength();
      F > r.maxLength && x.current.deleteText(r.maxLength, F);
    }
    r.onTextChange && r.onTextChange({
      htmlValue: Ce,
      textValue: Oe,
      delta: oe,
      source: ve
    });
  }, P = function(oe, Y, ve) {
    r.onSelectionChange && r.onSelectionChange({
      range: oe,
      oldRange: Y,
      source: ve
    });
  }, A = Et(r.value);
  A.current = r.value;
  var C = function(oe) {
    x.current = oe, A.current && oe.setContents(oe.clipboard.convert({
      html: A.current,
      text: ""
    })), O(!0);
  };
  dt(function() {
    if (q)
      return x.current.on("text-change", E), x.current.on("selection-change", P), function() {
        x.current.off("text-change", E), x.current.off("selection-change", P);
      };
  }), dt(function() {
    q && x.current && x.current.getModule("toolbar") && r.onLoad && r.onLoad(x.current);
  }, [q]), dt(function() {
    x.current && !x.current.hasFocus() && (r.value ? x.current.setContents(x.current.clipboard.convert({
      html: r.value,
      text: ""
    })) : x.current.setText(""));
  }, [r.value]), d.useImperativeHandle(t, function() {
    return {
      props: r,
      getQuill: function() {
        return x.current;
      },
      getElement: function() {
        return f.current;
      },
      getContent: function() {
        return p.current;
      },
      getToolbar: function() {
        return v.current;
      }
    };
  });
  var K = function() {
    var oe = e({
      ref: v,
      className: l("toolbar")
    }, i("toolbar"));
    if (r.showHeader === !1)
      return null;
    if (r.headerTemplate)
      return /* @__PURE__ */ d.createElement("div", oe, r.headerTemplate);
    var Y = function(Ce, Oe) {
      return e(Ce && js({}, Ce), i(Oe));
    }, ve = e({
      className: "ql-formats"
    }, i("formats"));
    return /* @__PURE__ */ d.createElement("div", oe, /* @__PURE__ */ d.createElement("span", ve, /* @__PURE__ */ d.createElement("select", Y({
      className: "ql-header",
      defaultValue: "0"
    }, "header"), /* @__PURE__ */ d.createElement("option", Y({
      value: "1"
    }, "option"), "Heading"), /* @__PURE__ */ d.createElement("option", Y({
      value: "2"
    }, "option"), "Subheading"), /* @__PURE__ */ d.createElement("option", Y({
      value: "0"
    }, "option"), "Normal")), /* @__PURE__ */ d.createElement("select", Y({
      className: "ql-font"
    }, "font"), /* @__PURE__ */ d.createElement("option", Y(void 0, "option")), /* @__PURE__ */ d.createElement("option", Y({
      value: "serif"
    }, "option")), /* @__PURE__ */ d.createElement("option", Y({
      value: "monospace"
    }, "option")))), /* @__PURE__ */ d.createElement("span", ve, /* @__PURE__ */ d.createElement("button", Y({
      type: "button",
      className: "ql-bold",
      "aria-label": "Bold"
    }, "bold")), /* @__PURE__ */ d.createElement("button", Y({
      type: "button",
      className: "ql-italic",
      "aria-label": "Italic"
    }, "italic")), /* @__PURE__ */ d.createElement("button", Y({
      type: "button",
      className: "ql-underline",
      "aria-label": "Underline"
    }, "underline"))), /* @__PURE__ */ d.createElement("span", ve, /* @__PURE__ */ d.createElement("select", Y({
      className: "ql-color"
    }, "color")), /* @__PURE__ */ d.createElement("select", Y({
      className: "ql-background"
    }, "background"))), /* @__PURE__ */ d.createElement("span", ve, /* @__PURE__ */ d.createElement("button", Y({
      type: "button",
      className: "ql-list",
      value: "ordered",
      "aria-label": "Ordered List"
    }, "list")), /* @__PURE__ */ d.createElement("button", Y({
      type: "button",
      className: "ql-list",
      value: "bullet",
      "aria-label": "Unordered List"
    }, "list")), /* @__PURE__ */ d.createElement("select", Y({
      className: "ql-align"
    }, "select"), /* @__PURE__ */ d.createElement("option", Y({
      defaultValue: !0
    }, "option")), /* @__PURE__ */ d.createElement("option", Y({
      value: "center"
    }, "option")), /* @__PURE__ */ d.createElement("option", Y({
      value: "right"
    }, "option")), /* @__PURE__ */ d.createElement("option", Y({
      value: "justify"
    }, "option")))), /* @__PURE__ */ d.createElement("span", ve, /* @__PURE__ */ d.createElement("button", Y({
      type: "button",
      className: "ql-link",
      "aria-label": "Insert Link"
    }, "link")), /* @__PURE__ */ d.createElement("button", Y({
      type: "button",
      className: "ql-image",
      "aria-label": "Insert Image"
    }, "image")), /* @__PURE__ */ d.createElement("button", Y({
      type: "button",
      className: "ql-code-block",
      "aria-label": "Insert Code Block"
    }, "codeBlock"))), /* @__PURE__ */ d.createElement("span", ve, /* @__PURE__ */ d.createElement("button", Y({
      type: "button",
      className: "ql-clean",
      "aria-label": "Remove Styles"
    }, "clean"))));
  }, S = K(), H = e({
    ref: p,
    className: l("content"),
    style: r.style
  }, i("content")), X = /* @__PURE__ */ d.createElement("div", H), U = e({
    className: qe(r.className, l("root"))
  }, ro.getOtherProps(r), i("root"));
  return /* @__PURE__ */ d.createElement("div", $i({
    id: r.id,
    ref: f
  }, U), S, X);
}));
zc.displayName = "Editor";
function Hi(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, a = new Array(t); e < t; e++) a[e] = n[e];
  return a;
}
function _p(n) {
  if (Array.isArray(n)) return Hi(n);
}
function jp(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function Ap(n, t) {
  if (n) {
    if (typeof n == "string") return Hi(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Hi(n, t);
  }
}
function Lp() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Fp(n) {
  return _p(n) || jp(n) || Ap(n) || Lp();
}
var Hr = {
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
    return Hr.DEFAULT_MASKS[t] ? Hr.DEFAULT_MASKS[t] : t;
  },
  onBeforeInput: function(t, e, a) {
    a || !M.isAndroid() || this.validateKey(t, t.data, e);
  },
  onKeyPress: function(t, e, a) {
    a || M.isAndroid() || t.ctrlKey || t.altKey || t.metaKey || this.validateKey(t, t.key, e);
  },
  onPaste: function(t, e, a) {
    if (!a) {
      var r = this.getRegex(e), o = t.clipboardData.getData("text");
      Fp(o).forEach(function(i) {
        if (!r.test(i))
          return t.preventDefault(), !1;
      });
    }
  },
  validateKey: function(t, e, a) {
    if (e != null) {
      var r = e.length <= 2;
      if (r) {
        var o = this.getRegex(a);
        o.test(e) || t.preventDefault();
      }
    }
  },
  validate: function(t, e) {
    var a = t.target.value, r = !0, o = this.getRegex(e);
    return a && !o.test(a) && (r = !1), r;
  }
};
function $p(n) {
  if (Array.isArray(n)) return n;
}
function Hp(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var a, r, o, i, l = [], c = !0, f = !1;
    try {
      if (o = (e = e.call(n)).next, t !== 0) for (; !(c = (a = o.call(e)).done) && (l.push(a.value), l.length !== t); c = !0) ;
    } catch (p) {
      f = !0, r = p;
    } finally {
      try {
        if (!c && e.return != null && (i = e.return(), Object(i) !== i)) return;
      } finally {
        if (f) throw r;
      }
    }
    return l;
  }
}
function As(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, a = new Array(t); e < t; e++) a[e] = n[e];
  return a;
}
function Bp(n, t) {
  if (n) {
    if (typeof n == "string") return As(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return As(n, t);
  }
}
function zp() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Vp(n, t) {
  return $p(n) || Hp(n, t) || Bp(n, t) || zp();
}
var Bi = {
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
    return Q.getMergedProps(t, Bi.defaultProps);
  },
  getOtherProps: function(t) {
    return Q.getDiffProps(t, Bi.defaultProps);
  }
}, ea = /* @__PURE__ */ d.memo(function(n) {
  var t = Bi.getProps(n), e = d.useContext(Vt), a = d.useState(t.visible && M.isClient()), r = Vp(a, 2), o = r[0], i = r[1];
  qn(function() {
    M.isClient() && !o && (i(!0), t.onMounted && t.onMounted());
  }), dt(function() {
    t.onMounted && t.onMounted();
  }, [o]), jn(function() {
    t.onUnmounted && t.onUnmounted();
  });
  var l = t.element || t.children;
  if (l && o) {
    var c = t.appendTo || e && e.appendTo || Tt.appendTo;
    return Q.isFunction(c) && (c = c()), c || (c = document.body), c === "self" ? l : /* @__PURE__ */ ga.createPortal(l, c);
  }
  return null;
});
ea.displayName = "Portal";
function To() {
  return To = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
    }
    return n;
  }, To.apply(this, arguments);
}
function ka(n) {
  "@babel/helpers - typeof";
  return ka = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ka(n);
}
function Wp(n, t) {
  if (ka(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var a = e.call(n, t || "default");
    if (ka(a) !== "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function Kp(n) {
  var t = Wp(n, "string");
  return ka(t) === "symbol" ? t : String(t);
}
function Vc(n, t, e) {
  return t = Kp(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function zi(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, a = new Array(t); e < t; e++) a[e] = n[e];
  return a;
}
function Up(n) {
  if (Array.isArray(n)) return zi(n);
}
function Yp(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function Wc(n, t) {
  if (n) {
    if (typeof n == "string") return zi(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return zi(n, t);
  }
}
function Gp() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xp(n) {
  return Up(n) || Yp(n) || Wc(n) || Gp();
}
function Jp(n) {
  if (Array.isArray(n)) return n;
}
function Zp(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var a, r, o, i, l = [], c = !0, f = !1;
    try {
      if (o = (e = e.call(n)).next, t !== 0) for (; !(c = (a = o.call(e)).done) && (l.push(a.value), l.length !== t); c = !0) ;
    } catch (p) {
      f = !0, r = p;
    } finally {
      try {
        if (!c && e.return != null && (i = e.return(), Object(i) !== i)) return;
      } finally {
        if (f) throw r;
      }
    }
    return l;
  }
}
function Qp() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fa(n, t) {
  return Jp(n) || Zp(n, t) || Wc(n, t) || Qp();
}
var ev = {
  root: function(t) {
    var e = t.positionState, a = t.classNameState;
    return qe("p-tooltip p-component", Vc({}, "p-tooltip-".concat(e), !0), a);
  },
  arrow: "p-tooltip-arrow",
  text: "p-tooltip-text"
}, tv = {
  arrow: function(t) {
    var e = t.context;
    return {
      top: e.bottom ? "0" : e.right || e.left || !e.right && !e.left && !e.top && !e.bottom ? "50%" : null,
      bottom: e.top ? "0" : null,
      left: e.right || !e.right && !e.left && !e.top && !e.bottom ? "0" : e.top || e.bottom ? "50%" : null,
      right: e.left ? "0" : null
    };
  }
}, nv = `
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
`, ao = ot.extend({
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
    classes: ev,
    styles: nv,
    inlineStyles: tv
  }
});
function Ls(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function rv(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ls(Object(e), !0).forEach(function(a) {
      Vc(n, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Ls(Object(e)).forEach(function(a) {
      Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return n;
}
var Vo = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(n, t) {
  var e = cn(), a = d.useContext(Vt), r = ao.getProps(n, a), o = d.useState(!1), i = fa(o, 2), l = i[0], c = i[1], f = d.useState(r.position || "right"), p = fa(f, 2), v = p[0], x = p[1], b = d.useState(""), k = fa(b, 2), y = k[0], q = k[1], O = {
    props: r,
    state: {
      visible: l,
      position: v,
      className: y
    },
    context: {
      right: v === "right",
      left: v === "left",
      top: v === "top",
      bottom: v === "bottom"
    }
  }, E = ao.setMetaData(O), P = E.ptm, A = E.cx, C = E.sx, K = E.isUnstyled;
  In(ao.css.styles, K, {
    name: "tooltip"
  }), bl({
    callback: function() {
      Ne();
    },
    when: r.closeOnEscape,
    priority: [hl.TOOLTIP, 0]
  });
  var S = d.useRef(null), H = d.useRef(null), X = d.useRef(null), U = d.useRef(null), I = d.useRef(!0), oe = d.useRef({}), Y = d.useRef(null), ve = yl({
    listener: function(re) {
      !M.isTouchDevice() && Ne(re);
    }
  }), ge = fa(ve, 2), Ce = ge[0], Oe = ge[1], we = Rc({
    target: X.current,
    listener: function(re) {
      Ne(re);
    },
    when: l
  }), de = fa(we, 2), F = de[0], se = de[1], ae = function(re) {
    return !(r.content || V(re, "tooltip"));
  }, N = function(re) {
    return !(r.content || V(re, "tooltip") || r.children);
  }, j = function(re) {
    return V(re, "mousetrack") || r.mouseTrack;
  }, B = function(re) {
    return V(re, "disabled") === "true" || z(re, "disabled") || r.disabled;
  }, Z = function(re) {
    return V(re, "showondisabled") || r.showOnDisabled;
  }, ie = function() {
    return V(X.current, "autohide") || r.autoHide;
  }, V = function(re, De) {
    return z(re, "data-pr-".concat(De)) ? re.getAttribute("data-pr-".concat(De)) : null;
  }, z = function(re, De) {
    return re && re.hasAttribute(De);
  }, ee = function(re) {
    var De = [V(re, "showevent") || r.showEvent], Be = [V(re, "hideevent") || r.hideEvent];
    if (j(re))
      De = ["mousemove"], Be = ["mouseleave"];
    else {
      var je = V(re, "event") || r.event;
      je === "focus" && (De = ["focus"], Be = ["blur"]), je === "both" && (De = ["focus", "mouseenter"], Be = ["blur", "mouseleave"]);
    }
    return {
      showEvents: De,
      hideEvents: Be
    };
  }, Ee = function(re) {
    return V(re, "position") || v;
  }, te = function(re) {
    var De = V(re, "mousetracktop") || r.mouseTrackTop, Be = V(re, "mousetrackleft") || r.mouseTrackLeft;
    return {
      top: De,
      left: Be
    };
  }, Ae = function(re, De) {
    if (H.current) {
      var Be = V(re, "tooltip") || r.content;
      Be ? (H.current.innerHTML = "", H.current.appendChild(document.createTextNode(Be)), De()) : r.children && De();
    }
  }, Je = function(re) {
    Ae(X.current, function() {
      var De = Y.current, Be = De.pageX, je = De.pageY;
      r.autoZIndex && !hn.get(S.current) && hn.set("tooltip", S.current, a && a.autoZIndex || Tt.autoZIndex, r.baseZIndex || a && a.zIndex.tooltip || Tt.zIndex.tooltip), S.current.style.left = "", S.current.style.top = "", ie() && (S.current.style.pointerEvents = "none");
      var $e = j(X.current) || re === "mouse";
      ($e && !U.current || $e) && (U.current = {
        width: M.getOuterWidth(S.current),
        height: M.getOuterHeight(S.current)
      }), nt(X.current, {
        x: Be,
        y: je
      }, re);
    });
  }, Ue = function(re) {
    X.current = re.currentTarget;
    var De = B(X.current), Be = N(Z(X.current) && De ? X.current.firstChild : X.current);
    if (!(Be || De))
      if (Y.current = re, l)
        St("updateDelay", Je);
      else {
        var je = Ot(r.onBeforeShow, {
          originalEvent: re,
          target: X.current
        });
        je && St("showDelay", function() {
          c(!0), Ot(r.onShow, {
            originalEvent: re,
            target: X.current
          });
        });
      }
  }, Ne = function(re) {
    if (vt(), l) {
      var De = Ot(r.onBeforeHide, {
        originalEvent: re,
        target: X.current
      });
      De && St("hideDelay", function() {
        !ie() && I.current === !1 || (hn.clear(S.current), M.removeClass(S.current, "p-tooltip-active"), c(!1), Ot(r.onHide, {
          originalEvent: re,
          target: X.current
        }));
      });
    }
  }, nt = function(re, De, Be) {
    var je = 0, $e = 0, ft = Be || v;
    if ((j(re) || ft == "mouse") && De) {
      var Mt = {
        width: M.getOuterWidth(S.current),
        height: M.getOuterHeight(S.current)
      };
      je = De.x, $e = De.y;
      var rt = te(re), Qe = rt.top, et = rt.left;
      switch (ft) {
        case "left":
          je = je - (Mt.width + et), $e = $e - (Mt.height / 2 - Qe);
          break;
        case "right":
        case "mouse":
          je = je + et, $e = $e - (Mt.height / 2 - Qe);
          break;
        case "top":
          je = je - (Mt.width / 2 - et), $e = $e - (Mt.height + Qe);
          break;
        case "bottom":
          je = je - (Mt.width / 2 - et), $e = $e + Qe;
          break;
      }
      je <= 0 || U.current.width > Mt.width ? (S.current.style.left = "0px", S.current.style.right = window.innerWidth - Mt.width - je + "px") : (S.current.style.right = "", S.current.style.left = je + "px"), S.current.style.top = $e + "px", M.addClass(S.current, "p-tooltip-active");
    } else {
      var lt = M.findCollisionPosition(ft), ht = V(re, "my") || r.my || lt.my, Ie = V(re, "at") || r.at || lt.at;
      S.current.style.padding = "0px", M.flipfitCollision(S.current, re, ht, Ie, function(J) {
        var fe = J.at, pe = fe.x, Pe = fe.y, st = J.my.x, wt = r.at ? pe !== "center" && pe !== st ? pe : Pe : J.at["".concat(lt.axis)];
        S.current.style.padding = "", x(wt), $t(wt), M.addClass(S.current, "p-tooltip-active");
      });
    }
  }, $t = function(re) {
    if (S.current) {
      var De = getComputedStyle(S.current);
      re === "left" ? S.current.style.left = parseFloat(De.left) - parseFloat(De.paddingLeft) * 2 + "px" : re === "top" && (S.current.style.top = parseFloat(De.top) - parseFloat(De.paddingTop) * 2 + "px");
    }
  }, It = function() {
    ie() || (I.current = !1);
  }, Ze = function(re) {
    ie() || (I.current = !0, Ne(re));
  }, Ct = function(re) {
    if (re) {
      var De = ee(re), Be = De.showEvents, je = De.hideEvents, $e = on(re);
      Be.forEach(function(ft) {
        return $e == null ? void 0 : $e.addEventListener(ft, Ue);
      }), je.forEach(function(ft) {
        return $e == null ? void 0 : $e.addEventListener(ft, Ne);
      });
    }
  }, _t = function(re) {
    if (re) {
      var De = ee(re), Be = De.showEvents, je = De.hideEvents, $e = on(re);
      Be.forEach(function(ft) {
        return $e == null ? void 0 : $e.removeEventListener(ft, Ue);
      }), je.forEach(function(ft) {
        return $e == null ? void 0 : $e.removeEventListener(ft, Ne);
      });
    }
  }, St = function(re, De) {
    vt();
    var Be = V(X.current, re.toLowerCase()) || r[re];
    Be ? oe.current["".concat(re)] = setTimeout(function() {
      return De();
    }, Be) : De();
  }, Ot = function(re) {
    if (re) {
      for (var De = arguments.length, Be = new Array(De > 1 ? De - 1 : 0), je = 1; je < De; je++)
        Be[je - 1] = arguments[je];
      var $e = re.apply(void 0, Be);
      return $e === void 0 && ($e = !0), $e;
    }
    return !0;
  }, vt = function() {
    Object.values(oe.current).forEach(function(re) {
      return clearTimeout(re);
    });
  }, on = function(re) {
    if (re) {
      if (Z(re)) {
        if (!re.hasWrapper) {
          var De = document.createElement("div"), Be = re.nodeName === "INPUT";
          return Be ? M.addMultipleClasses(De, "p-tooltip-target-wrapper p-inputwrapper") : M.addClass(De, "p-tooltip-target-wrapper"), re.parentNode.insertBefore(De, re), De.appendChild(re), re.hasWrapper = !0, De;
        }
        return re.parentElement;
      } else if (re.hasWrapper) {
        var je;
        (je = re.parentElement).replaceWith.apply(je, Xp(re.parentElement.childNodes)), delete re.hasWrapper;
      }
      return re;
    }
    return null;
  }, mt = function(re) {
    Rt(re), Pt(re);
  }, Pt = function(re) {
    Ht(re || r.target, Ct);
  }, Rt = function(re) {
    Ht(re || r.target, _t);
  }, Ht = function(re, De) {
    if (re = Q.getRefElement(re), re)
      if (M.isElement(re))
        De(re);
      else {
        var Be = function($e) {
          var ft = M.find(document, $e);
          ft.forEach(function(Mt) {
            De(Mt);
          });
        };
        re instanceof Array ? re.forEach(function(je) {
          Be(je);
        }) : Be(re);
      }
  };
  qn(function() {
    l && X.current && B(X.current) && Ne();
  }), dt(function() {
    return Pt(), function() {
      Rt();
    };
  }, [Ue, Ne, r.target]), dt(function() {
    if (l) {
      var Le = Ee(X.current), re = V(X.current, "classname");
      x(Le), q(re), Je(Le), Ce(), F();
    } else
      x(r.position || "right"), q(""), X.current = null, U.current = null, I.current = !0;
    return function() {
      Oe(), se();
    };
  }, [l]), dt(function() {
    var Le = Ee(X.current);
    l && Le !== "mouse" && St("updateDelay", function() {
      Ae(X.current, function() {
        nt(X.current);
      });
    });
  }, [r.content]), jn(function() {
    Ne(), hn.clear(S.current);
  }), d.useImperativeHandle(t, function() {
    return {
      props: r,
      updateTargetEvents: mt,
      loadTargetEvents: Pt,
      unloadTargetEvents: Rt,
      show: Ue,
      hide: Ne,
      getElement: function() {
        return S.current;
      },
      getTarget: function() {
        return X.current;
      }
    };
  });
  var jt = function() {
    var re = ae(X.current), De = e({
      id: r.id,
      className: qe(r.className, A("root", {
        positionState: v,
        classNameState: y
      })),
      style: r.style,
      role: "tooltip",
      "aria-hidden": l,
      onMouseEnter: function(ft) {
        return It();
      },
      onMouseLeave: function(ft) {
        return Ze(ft);
      }
    }, ao.getOtherProps(r), P("root")), Be = e({
      className: A("arrow"),
      style: C("arrow", rv({}, O))
    }, P("arrow")), je = e({
      className: A("text")
    }, P("text"));
    return /* @__PURE__ */ d.createElement("div", To({
      ref: S
    }, De), /* @__PURE__ */ d.createElement("div", Be), /* @__PURE__ */ d.createElement("div", To({
      ref: H
    }, je), re && r.children));
  };
  if (l) {
    var At = jt();
    return /* @__PURE__ */ d.createElement(ea, {
      element: At,
      appendTo: r.appendTo,
      visible: !0
    });
  }
  return null;
}));
Vo.displayName = "Tooltip";
function ko() {
  return ko = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
    }
    return n;
  }, ko.apply(this, arguments);
}
function qa(n) {
  "@babel/helpers - typeof";
  return qa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qa(n);
}
function av(n, t) {
  if (qa(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var a = e.call(n, t || "default");
    if (qa(a) !== "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function ov(n) {
  var t = av(n, "string");
  return qa(t) === "symbol" ? t : String(t);
}
function iv(n, t, e) {
  return t = ov(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
var lv = {
  root: function(t) {
    var e = t.props, a = t.isFilled, r = t.context;
    return qe("p-inputtext p-component", {
      "p-disabled": e.disabled,
      "p-filled": a,
      "p-invalid": e.invalid,
      "p-variant-filled": e.variant ? e.variant === "filled" : r && r.inputStyle === "filled"
    });
  }
}, oo = ot.extend({
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
    classes: lv
  }
});
function Fs(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function $s(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fs(Object(e), !0).forEach(function(a) {
      iv(n, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Fs(Object(e)).forEach(function(a) {
      Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return n;
}
var Yt = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(n, t) {
  var e = cn(), a = d.useContext(Vt), r = oo.getProps(n, a), o = oo.setMetaData($s($s({
    props: r
  }, r.__parentMetadata), {}, {
    context: {
      disabled: r.disabled,
      iconPosition: r.iconPosition
    }
  })), i = o.ptm, l = o.cx, c = o.isUnstyled;
  In(oo.css.styles, c, {
    name: "inputtext",
    styled: !0
  });
  var f = d.useRef(t), p = function(E) {
    r.onKeyDown && r.onKeyDown(E), r.keyfilter && Hr.onKeyPress(E, r.keyfilter, r.validateOnly);
  }, v = function(E) {
    r.onBeforeInput && r.onBeforeInput(E), r.keyfilter && Hr.onBeforeInput(E, r.keyfilter, r.validateOnly);
  }, x = function(E) {
    var P = E.target, A = !0;
    r.keyfilter && r.validateOnly && (A = Hr.validate(E, r.keyfilter)), r.onInput && r.onInput(E, A), Q.isNotEmpty(P.value) ? M.addClass(P, "p-filled") : M.removeClass(P, "p-filled");
  }, b = function(E) {
    r.onPaste && r.onPaste(E), r.keyfilter && Hr.onPaste(E, r.keyfilter, r.validateOnly);
  };
  d.useEffect(function() {
    Q.combinedRefs(f, t);
  }, [f, t]);
  var k = d.useMemo(function() {
    return Q.isNotEmpty(r.value) || Q.isNotEmpty(r.defaultValue);
  }, [r.value, r.defaultValue]), y = Q.isNotEmpty(r.tooltip), q = e({
    className: qe(r.className, l("root", {
      context: a,
      isFilled: k
    })),
    onBeforeInput: v,
    onInput: x,
    onKeyDown: p,
    onPaste: b
  }, oo.getOtherProps(r), i("root"));
  return /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("input", ko({
    ref: f
  }, q)), y && /* @__PURE__ */ d.createElement(Vo, ko({
    target: f,
    content: r.tooltip,
    pt: i("tooltip")
  }, r.tooltipOptions)));
}));
Yt.displayName = "InputText";
const sv = ({ config: n, onChange: t }) => {
  const [e, a] = it({ ...Kr, ...n }), r = (i) => {
    const l = { ...e, [i.target.name]: i.target.value };
    a(l), t(l);
  }, o = (i) => {
    const l = { ...e, value: i };
    a(l), t(l);
  };
  return We(() => {
    a({ ...Kr, ...n });
  }, [n]), /* @__PURE__ */ T.jsx(T.Fragment, { children: /* @__PURE__ */ T.jsx(Qn, { activeIndex: 0, children: /* @__PURE__ */ T.jsx(Vn, { header: "General", children: /* @__PURE__ */ T.jsxs("div", { className: "form-item flex flex-column gap-4", children: [
    /* @__PURE__ */ T.jsxs("div", { className: "flex flex-column gap-2", children: [
      /* @__PURE__ */ T.jsx("label", { htmlFor: "label", children: "Label" }),
      /* @__PURE__ */ T.jsx(
        Yt,
        {
          id: "label",
          value: e.label || "",
          name: "label",
          onChange: r,
          className: "w-full"
        }
      )
    ] }),
    /* @__PURE__ */ T.jsx(
      zc,
      {
        value: e.value,
        name: "value",
        onTextChange: (i) => o(i.htmlValue ?? ""),
        style: { minHeight: "300px" }
      }
    )
  ] }) }, "general") }) });
}, cv = (n) => ({}), uv = new Qr({
  type: Kr.type,
  form: new Tn({
    render: rf,
    validation: af
  }),
  settings: new Tn({
    render: sv,
    validation: cv
  }),
  heading: "HTML Content",
  description: "WYSIWYG editor for adding in content to the form",
  hidden: !1,
  icon: of,
  config: Kr
}), Kc = new Fo(new Lo({ label: "Content" }));
Kc.registerItem(uv);
const Yr = {
  id: mr(),
  type: "input-date",
  label: "",
  value: "",
  placeholder: "",
  format: "yy-mm-dd"
};
function Vi() {
  return Vi = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
    }
    return n;
  }, Vi.apply(this, arguments);
}
var Wo = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(n, t) {
  var e = bn.getPTI(n);
  return /* @__PURE__ */ d.createElement("svg", Vi({
    ref: t,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e), /* @__PURE__ */ d.createElement("path", {
    d: "M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",
    fill: "currentColor"
  }));
}));
Wo.displayName = "SpinnerIcon";
function Wi() {
  return Wi = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
    }
    return n;
  }, Wi.apply(this, arguments);
}
function Ia(n) {
  "@babel/helpers - typeof";
  return Ia = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ia(n);
}
function dv(n, t) {
  if (Ia(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var a = e.call(n, t || "default");
    if (Ia(a) !== "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function fv(n) {
  var t = dv(n, "string");
  return Ia(t) === "symbol" ? t : String(t);
}
function pv(n, t, e) {
  return t = fv(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function vv(n) {
  if (Array.isArray(n)) return n;
}
function mv(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var a, r, o, i, l = [], c = !0, f = !1;
    try {
      if (o = (e = e.call(n)).next, t !== 0) for (; !(c = (a = o.call(e)).done) && (l.push(a.value), l.length !== t); c = !0) ;
    } catch (p) {
      f = !0, r = p;
    } finally {
      try {
        if (!c && e.return != null && (i = e.return(), Object(i) !== i)) return;
      } finally {
        if (f) throw r;
      }
    }
    return l;
  }
}
function Hs(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, a = new Array(t); e < t; e++) a[e] = n[e];
  return a;
}
function gv(n, t) {
  if (n) {
    if (typeof n == "string") return Hs(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Hs(n, t);
  }
}
function hv() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bv(n, t) {
  return vv(n) || mv(n, t) || gv(n, t) || hv();
}
var yv = `
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

`, wv = {
  root: "p-ink"
}, Br = ot.extend({
  defaultProps: {
    __TYPE: "Ripple",
    children: void 0
  },
  css: {
    styles: yv,
    classes: wv
  },
  getProps: function(t) {
    return Q.getMergedProps(t, Br.defaultProps);
  },
  getOtherProps: function(t) {
    return Q.getDiffProps(t, Br.defaultProps);
  }
});
function Bs(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function xv(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bs(Object(e), !0).forEach(function(a) {
      pv(n, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Bs(Object(e)).forEach(function(a) {
      Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return n;
}
var Kt = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(n, t) {
  var e = d.useState(!1), a = bv(e, 2), r = a[0], o = a[1], i = d.useRef(null), l = d.useRef(null), c = cn(), f = d.useContext(Vt), p = Br.getProps(n, f), v = f && f.ripple || Tt.ripple, x = {
    props: p
  };
  Cr(Br.css.styles, {
    name: "ripple",
    manual: !v
  });
  var b = Br.setMetaData(xv({}, x)), k = b.ptm, y = b.cx, q = function() {
    return i.current && i.current.parentElement;
  }, O = function() {
    l.current && l.current.addEventListener("pointerdown", P);
  }, E = function() {
    l.current && l.current.removeEventListener("pointerdown", P);
  }, P = function(X) {
    var U = M.getOffset(l.current), I = X.pageX - U.left + document.body.scrollTop - M.getWidth(i.current) / 2, oe = X.pageY - U.top + document.body.scrollLeft - M.getHeight(i.current) / 2;
    A(I, oe);
  }, A = function(X, U) {
    !i.current || getComputedStyle(i.current, null).display === "none" || (M.removeClass(i.current, "p-ink-active"), K(), i.current.style.top = U + "px", i.current.style.left = X + "px", M.addClass(i.current, "p-ink-active"));
  }, C = function(X) {
    M.removeClass(X.currentTarget, "p-ink-active");
  }, K = function() {
    if (i.current && !M.getHeight(i.current) && !M.getWidth(i.current)) {
      var X = Math.max(M.getOuterWidth(l.current), M.getOuterHeight(l.current));
      i.current.style.height = X + "px", i.current.style.width = X + "px";
    }
  };
  if (d.useImperativeHandle(t, function() {
    return {
      props: p,
      getInk: function() {
        return i.current;
      },
      getTarget: function() {
        return l.current;
      }
    };
  }), qn(function() {
    o(!0);
  }), dt(function() {
    r && i.current && (l.current = q(), K(), O());
  }, [r]), dt(function() {
    i.current && !l.current && (l.current = q(), K(), O());
  }), jn(function() {
    i.current && (l.current = null, E());
  }), !v)
    return null;
  var S = c({
    "aria-hidden": !0,
    className: qe(y("root"))
  }, Br.getOtherProps(p), k("root"));
  return /* @__PURE__ */ d.createElement("span", Wi({
    role: "presentation",
    ref: i
  }, S, {
    onAnimationEnd: C
  }));
}));
Kt.displayName = "Ripple";
function ba() {
  return ba = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
    }
    return n;
  }, ba.apply(this, arguments);
}
function Ra(n) {
  "@babel/helpers - typeof";
  return Ra = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ra(n);
}
function Sv(n, t) {
  if (Ra(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var a = e.call(n, t || "default");
    if (Ra(a) !== "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function Ev(n) {
  var t = Sv(n, "string");
  return Ra(t) === "symbol" ? t : String(t);
}
function Xn(n, t, e) {
  return t = Ev(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
var Cv = {
  root: function(t) {
    var e = t.props;
    return qe("p-badge p-component", Xn({
      "p-badge-no-gutter": Q.isNotEmpty(e.value) && String(e.value).length === 1,
      "p-badge-dot": Q.isEmpty(e.value),
      "p-badge-lg": e.size === "large",
      "p-badge-xl": e.size === "xlarge"
    }, "p-badge-".concat(e.severity), e.severity !== null));
  }
}, Ov = `
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
`, io = ot.extend({
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
    classes: Cv,
    styles: Ov
  }
});
function zs(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function Pv(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zs(Object(e), !0).forEach(function(a) {
      Xn(n, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : zs(Object(e)).forEach(function(a) {
      Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return n;
}
var Uc = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(n, t) {
  var e = cn(), a = d.useContext(Vt), r = io.getProps(n, a), o = io.setMetaData(Pv({
    props: r
  }, r.__parentMetadata)), i = o.ptm, l = o.cx, c = o.isUnstyled;
  In(io.css.styles, c, {
    name: "badge"
  });
  var f = d.useRef(null);
  d.useImperativeHandle(t, function() {
    return {
      props: r,
      getElement: function() {
        return f.current;
      }
    };
  });
  var p = e({
    ref: f,
    style: r.style,
    className: qe(r.className, l("root"))
  }, io.getOtherProps(r), i("root"));
  return /* @__PURE__ */ d.createElement("span", p, r.value);
}));
Uc.displayName = "Badge";
var Dv = {
  icon: function(t) {
    var e = t.props;
    return qe("p-button-icon p-c", Xn({}, "p-button-icon-".concat(e.iconPos), e.label));
  },
  loadingIcon: function(t) {
    var e = t.props, a = t.className;
    return qe(a, {
      "p-button-loading-icon": e.loading
    });
  },
  label: "p-button-label p-c",
  root: function(t) {
    var e = t.props, a = t.size, r = t.disabled;
    return qe("p-button p-component", Xn(Xn(Xn(Xn({
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
    }, "p-button-loading-".concat(e.iconPos), e.loading && e.label), "p-button-".concat(a), a), "p-button-".concat(e.severity), e.severity), "p-button-plain", e.plain));
  }
}, lo = ot.extend({
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
    classes: Dv
  }
});
function Vs(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function yi(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vs(Object(e), !0).forEach(function(a) {
      Xn(n, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Vs(Object(e)).forEach(function(a) {
      Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return n;
}
var xn = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(n, t) {
  var e = cn(), a = d.useContext(Vt), r = lo.getProps(n, a), o = r.disabled || r.loading, i = yi(yi({
    props: r
  }, r.__parentMetadata), {}, {
    context: {
      disabled: o
    }
  }), l = lo.setMetaData(i), c = l.ptm, f = l.cx, p = l.isUnstyled;
  In(lo.css.styles, p, {
    name: "button",
    styled: !0
  });
  var v = d.useRef(t);
  if (d.useEffect(function() {
    Q.combinedRefs(v, t);
  }, [v, t]), r.visible === !1)
    return null;
  var x = function() {
    var X = qe("p-button-icon p-c", Xn({}, "p-button-icon-".concat(r.iconPos), r.label)), U = e({
      className: f("icon")
    }, c("icon"));
    X = qe(X, {
      "p-button-loading-icon": r.loading
    });
    var I = e({
      className: f("loadingIcon", {
        className: X
      })
    }, c("loadingIcon")), oe = r.loading ? r.loadingIcon || /* @__PURE__ */ d.createElement(Wo, ba({}, I, {
      spin: !0
    })) : r.icon;
    return Ut.getJSXIcon(oe, yi({}, U), {
      props: r
    });
  }, b = function() {
    var X = e({
      className: f("label")
    }, c("label"));
    return r.label ? /* @__PURE__ */ d.createElement("span", X, r.label) : !r.children && !r.label && /* @__PURE__ */ d.createElement("span", ba({}, X, {
      dangerouslySetInnerHTML: {
        __html: "&nbsp;"
      }
    }));
  }, k = function() {
    if (r.badge) {
      var X = e({
        className: qe(r.badgeClassName),
        value: r.badge,
        unstyled: r.unstyled,
        __parentMetadata: {
          parent: i
        }
      }, c("badge"));
      return /* @__PURE__ */ d.createElement(Uc, X, r.badge);
    }
    return null;
  }, y = !o || r.tooltipOptions && r.tooltipOptions.showOnDisabled, q = Q.isNotEmpty(r.tooltip) && y, O = {
    large: "lg",
    small: "sm"
  }, E = O[r.size], P = x(), A = b(), C = k(), K = r.label ? r.label + (r.badge ? " " + r.badge : "") : r["aria-label"], S = e({
    ref: v,
    "aria-label": K,
    "data-pc-autofocus": r.autoFocus,
    className: qe(r.className, f("root", {
      size: E,
      disabled: o
    })),
    disabled: o
  }, lo.getOtherProps(r), c("root"));
  return /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("button", S, P, A, r.children, C, /* @__PURE__ */ d.createElement(Kt, null)), q && /* @__PURE__ */ d.createElement(Vo, ba({
    target: v,
    content: r.tooltip,
    pt: c("tooltip")
  }, r.tooltipOptions)));
}));
xn.displayName = "Button";
function Ki() {
  return Ki = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
    }
    return n;
  }, Ki.apply(this, arguments);
}
var Yc = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(n, t) {
  var e = bn.getPTI(n);
  return /* @__PURE__ */ d.createElement("svg", Ki({
    ref: t,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e), /* @__PURE__ */ d.createElement("path", {
    d: "M10.7838 1.51351H9.83783V0.567568C9.83783 0.417039 9.77804 0.272676 9.6716 0.166237C9.56516 0.0597971 9.42079 0 9.27027 0C9.11974 0 8.97538 0.0597971 8.86894 0.166237C8.7625 0.272676 8.7027 0.417039 8.7027 0.567568V1.51351H5.29729V0.567568C5.29729 0.417039 5.2375 0.272676 5.13106 0.166237C5.02462 0.0597971 4.88025 0 4.72973 0C4.5792 0 4.43484 0.0597971 4.3284 0.166237C4.22196 0.272676 4.16216 0.417039 4.16216 0.567568V1.51351H3.21621C2.66428 1.51351 2.13494 1.73277 1.74467 2.12305C1.35439 2.51333 1.13513 3.04266 1.13513 3.59459V11.9189C1.13513 12.4709 1.35439 13.0002 1.74467 13.3905C2.13494 13.7807 2.66428 14 3.21621 14H10.7838C11.3357 14 11.865 13.7807 12.2553 13.3905C12.6456 13.0002 12.8649 12.4709 12.8649 11.9189V3.59459C12.8649 3.04266 12.6456 2.51333 12.2553 2.12305C11.865 1.73277 11.3357 1.51351 10.7838 1.51351ZM3.21621 2.64865H4.16216V3.59459C4.16216 3.74512 4.22196 3.88949 4.3284 3.99593C4.43484 4.10237 4.5792 4.16216 4.72973 4.16216C4.88025 4.16216 5.02462 4.10237 5.13106 3.99593C5.2375 3.88949 5.29729 3.74512 5.29729 3.59459V2.64865H8.7027V3.59459C8.7027 3.74512 8.7625 3.88949 8.86894 3.99593C8.97538 4.10237 9.11974 4.16216 9.27027 4.16216C9.42079 4.16216 9.56516 4.10237 9.6716 3.99593C9.77804 3.88949 9.83783 3.74512 9.83783 3.59459V2.64865H10.7838C11.0347 2.64865 11.2753 2.74831 11.4527 2.92571C11.6301 3.10311 11.7297 3.34371 11.7297 3.59459V5.67568H2.27027V3.59459C2.27027 3.34371 2.36993 3.10311 2.54733 2.92571C2.72473 2.74831 2.96533 2.64865 3.21621 2.64865ZM10.7838 12.8649H3.21621C2.96533 12.8649 2.72473 12.7652 2.54733 12.5878C2.36993 12.4104 2.27027 12.1698 2.27027 11.9189V6.81081H11.7297V11.9189C11.7297 12.1698 11.6301 12.4104 11.4527 12.5878C11.2753 12.7652 11.0347 12.8649 10.7838 12.8649Z",
    fill: "currentColor"
  }));
}));
Yc.displayName = "CalendarIcon";
function Ui() {
  return Ui = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
    }
    return n;
  }, Ui.apply(this, arguments);
}
var Sl = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(n, t) {
  var e = bn.getPTI(n);
  return /* @__PURE__ */ d.createElement("svg", Ui({
    ref: t,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e), /* @__PURE__ */ d.createElement("path", {
    d: "M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z",
    fill: "currentColor"
  }));
}));
Sl.displayName = "ChevronLeftIcon";
function Yi() {
  return Yi = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
    }
    return n;
  }, Yi.apply(this, arguments);
}
var El = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(n, t) {
  var e = bn.getPTI(n);
  return /* @__PURE__ */ d.createElement("svg", Yi({
    ref: t,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e), /* @__PURE__ */ d.createElement("path", {
    d: "M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z",
    fill: "currentColor"
  }));
}));
El.displayName = "ChevronUpIcon";
var Bn = gf();
function Jt() {
  return Jt = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
    }
    return n;
  }, Jt.apply(this, arguments);
}
function Gr(n) {
  "@babel/helpers - typeof";
  return Gr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gr(n);
}
function Tv(n, t) {
  if (Gr(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var a = e.call(n, t || "default");
    if (Gr(a) !== "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function kv(n) {
  var t = Tv(n, "string");
  return Gr(t) === "symbol" ? t : String(t);
}
function ur(n, t, e) {
  return t = kv(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function Gi(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, a = new Array(t); e < t; e++) a[e] = n[e];
  return a;
}
function qv(n) {
  if (Array.isArray(n)) return Gi(n);
}
function Iv(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function Gc(n, t) {
  if (n) {
    if (typeof n == "string") return Gi(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Gi(n, t);
  }
}
function Rv() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function so(n) {
  return qv(n) || Iv(n) || Gc(n) || Rv();
}
function Mv(n) {
  if (Array.isArray(n)) return n;
}
function Nv(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var a, r, o, i, l = [], c = !0, f = !1;
    try {
      if (o = (e = e.call(n)).next, t !== 0) for (; !(c = (a = o.call(e)).done) && (l.push(a.value), l.length !== t); c = !0) ;
    } catch (p) {
      f = !0, r = p;
    } finally {
      try {
        if (!c && e.return != null && (i = e.return(), Object(i) !== i)) return;
      } finally {
        if (f) throw r;
      }
    }
    return l;
  }
}
function _v() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Hn(n, t) {
  return Mv(n) || Nv(n, t) || Gc(n, t) || _v();
}
var jv = `
@layer primereact {
    .p-calendar {
        position: relative;
        display: inline-flex;
        max-width: 100%;
    }

    .p-calendar .p-inputtext {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-calendar-w-btn-right .p-inputtext {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    .p-calendar-w-btn-right .p-datepicker-trigger {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    .p-calendar-w-btn-left .p-inputtext {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    .p-calendar-w-btn-left .p-datepicker-trigger {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    /* Fluid */
    .p-fluid .p-calendar {
        display: flex;
    }

    .p-fluid .p-calendar .p-inputtext {
        width: 1%;
    }

    /* Datepicker */
    .p-calendar .p-datepicker {
        min-width: 100%;
    }

    .p-datepicker {
        width: auto;
        position: absolute;
        top: 0;
        left: 0;
    }

    .p-datepicker-inline {
        display: inline-block;
        position: static;
        overflow-x: auto;
    }

    /* Header */
    .p-datepicker-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .p-datepicker-header .p-datepicker-title {
        margin: 0 auto;
    }

    .p-datepicker-prev,
    .p-datepicker-next {
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
    }

    /* Multiple Month DatePicker */
    .p-datepicker-multiple-month .p-datepicker-group-container {
        display: flex;
    }

    .p-datepicker-multiple-month .p-datepicker-group-container .p-datepicker-group {
        flex: 1 1 auto;
    }

    /* Multiple Month DatePicker */
    .p-datepicker-multiple-month .p-datepicker-group-container {
        display: flex;
    }

    /* DatePicker Table */
    .p-datepicker table {
        width: 100%;
        border-collapse: collapse;
    }

    .p-datepicker td > span {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin: 0 auto;
        overflow: hidden;
        position: relative;
    }

    /* Month Picker */
    .p-monthpicker-month {
        width: 33.3%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        overflow: hidden;
        position: relative;
    }

    /*  Button Bar */
    .p-datepicker-buttonbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    /* Time Picker */
    .p-timepicker {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .p-timepicker button {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        overflow: hidden;
        position: relative;
    }

    .p-timepicker > div {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    /* Touch UI */
    .p-datepicker-touch-ui,
    .p-calendar .p-datepicker-touch-ui {
        position: fixed;
        top: 50%;
        left: 50%;
        min-width: 80vw;
        transform: translate(-50%, -50%);
    }

    /* Year Picker */
    .p-yearpicker-year {
        width: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        overflow: hidden;
        position: relative;
    }
}
`, Av = {
  root: function(t) {
    var e = t.props, a = t.focusedState, r = t.isFilled, o = t.panelVisible;
    return qe("p-calendar p-component p-inputwrapper", ur(ur(ur(ur(ur(ur(ur({}, "p-calendar-w-btn p-calendar-w-btn-".concat(e.iconPos), e.showIcon), "p-calendar-disabled", e.disabled), "p-invalid", e.invalid), "p-calendar-timeonly", e.timeOnly), "p-inputwrapper-filled", e.value || r), "p-inputwrapper-focus", a), "p-focus", a || o));
  },
  input: function(t) {
    var e = t.props, a = t.context;
    return qe("p-inputtext p-component", {
      "p-variant-filled": e.variant ? e.variant === "filled" : a && a.inputStyle === "filled"
    });
  },
  dropdownButton: "p-datepicker-trigger",
  buttonbar: "p-datepicker-buttonbar",
  todayButton: "p-button-text",
  clearButton: "p-button-text",
  footer: "p-datepicker-footer",
  yearPicker: "p-yearpicker",
  year: function(t) {
    var e = t.isYearSelected, a = t.y, r = t.isMonthYearDisabled;
    return qe("p-yearpicker-year", {
      "p-highlight": e(a),
      "p-disabled": r(-1, a)
    });
  },
  monthPicker: "p-monthpicker",
  month: function(t) {
    var e = t.isMonthSelected, a = t.isMonthYearDisabled, r = t.i, o = t.currentYear;
    return qe("p-monthpicker-month", {
      "p-highlight": e(r),
      "p-disabled": a(r, o)
    });
  },
  hourPicker: "p-hour-picker",
  secondPicker: "p-second-picker",
  minutePicker: "p-minute-picker",
  millisecondPicker: "p-millisecond-picker",
  ampmPicker: "p-ampm-picker",
  separatorContainer: "p-separator",
  dayLabel: function(t) {
    var e = t.className;
    return e;
  },
  day: function(t) {
    var e = t.date;
    return qe({
      "p-datepicker-other-month": e.otherMonth,
      "p-datepicker-today": e.today
    });
  },
  panel: function(t) {
    var e = t.panelClassName;
    return e;
  },
  previousIcon: "p-datepicker-prev-icon",
  previousButton: "p-datepicker-prev",
  nextIcon: "p-datepicker-next-icon",
  nextButton: "p-datepicker-next",
  incrementButton: "p-link",
  decrementButton: "p-link",
  title: "p-datepicker-title",
  timePicker: "p-timepicker",
  monthTitle: "p-datepicker-month p-link",
  yearTitle: "p-datepicker-year p-link",
  decadeTitle: "p-datepicker-decade",
  header: "p-datepicker-header",
  groupContainer: "p-datepicker-group-container",
  group: "p-datepicker-group",
  select: function(t) {
    var e = t.props;
    return e.monthNavigator && e.view !== "month" ? "p-datepicker-month" : e.yearNavigator ? "p-datepicker-year" : void 0;
  },
  weekHeader: "p-datepicker-weekheader p-disabled",
  weekNumber: "p-datepicker-weeknumber",
  weekLabelContainer: "p-disabled",
  container: "p-datepicker-calendar-container",
  table: "p-datepicker-calendar",
  transition: "p-connected-overlay"
}, co = ot.extend({
  defaultProps: {
    __TYPE: "Calendar",
    appendTo: null,
    ariaLabelledBy: null,
    ariaLabel: null,
    autoZIndex: !0,
    autoFocus: !1,
    baseZIndex: 0,
    className: null,
    clearButtonClassName: "p-button-secondary",
    dateFormat: null,
    dateTemplate: null,
    decadeTemplate: null,
    decrementIcon: null,
    disabled: !1,
    disabledDates: null,
    disabledDays: null,
    enabledDates: null,
    footerTemplate: null,
    formatDateTime: null,
    headerTemplate: null,
    hideOnDateTimeSelect: !1,
    hideOnRangeSelection: !1,
    hourFormat: "24",
    icon: null,
    iconPos: "right",
    id: null,
    incrementIcon: null,
    inline: !1,
    inputClassName: null,
    inputId: null,
    inputMode: "none",
    inputRef: null,
    inputStyle: null,
    variant: null,
    invalid: !1,
    keepInvalid: !1,
    locale: null,
    mask: null,
    maskSlotChar: "_",
    maxDate: null,
    maxDateCount: null,
    minDate: null,
    monthNavigator: !1,
    monthNavigatorTemplate: null,
    name: null,
    nextIcon: null,
    numberOfMonths: 1,
    onBlur: null,
    onChange: null,
    onClearButtonClick: null,
    onFocus: null,
    onHide: null,
    onInput: null,
    onMonthChange: null,
    onSelect: null,
    onShow: null,
    onTodayButtonClick: null,
    onViewDateChange: null,
    onVisibleChange: null,
    panelClassName: null,
    panelStyle: null,
    parseDateTime: null,
    placeholder: null,
    prevIcon: null,
    readOnlyInput: !1,
    required: !1,
    selectOtherMonths: !1,
    selectionMode: "single",
    shortYearCutoff: "+10",
    showButtonBar: !1,
    showIcon: !1,
    showMillisec: !1,
    showMinMaxRange: !1,
    showOnFocus: !0,
    showOtherMonths: !0,
    showSeconds: !1,
    showTime: !1,
    showWeek: !1,
    stepHour: 1,
    stepMillisec: 1,
    stepMinute: 1,
    stepSecond: 1,
    style: null,
    tabIndex: null,
    timeOnly: !1,
    todayButtonClassName: "p-button-secondary",
    tooltip: null,
    tooltipOptions: null,
    touchUI: !1,
    transitionOptions: null,
    value: null,
    view: "date",
    viewDate: null,
    visible: !1,
    yearNavigator: !1,
    yearNavigatorTemplate: null,
    yearRange: null,
    children: void 0
  },
  css: {
    classes: Av,
    styles: jv
  }
}), Xc = /* @__PURE__ */ d.forwardRef(function(n, t) {
  var e = n.cx, a = cn(), r = function() {
    var l = a({
      className: e("panel", {
        panelClassName: n.className
      }),
      style: n.style,
      role: n.inline ? null : "dialog",
      id: n.id,
      "aria-label": fn("chooseDate", n.locale),
      "aria-modal": n.inline ? null : "true",
      onClick: n.onClick,
      onMouseUp: n.onMouseUp
    }, n.ptm("panel", {
      hostName: n.hostName
    })), c = a({
      classNames: e("transition"),
      in: n.in,
      timeout: {
        enter: 120,
        exit: 100
      },
      options: n.transitionOptions,
      unmountOnExit: !0,
      onEnter: n.onEnter,
      onEntered: n.onEntered,
      onExit: n.onExit,
      onExited: n.onExited
    }, n.ptm("transition", {
      hostName: n.hostName
    }));
    return /* @__PURE__ */ d.createElement(Ba, Jt({
      nodeRef: t
    }, c), /* @__PURE__ */ d.createElement("div", Jt({
      ref: t
    }, l), n.children));
  }, o = r();
  return n.inline ? o : /* @__PURE__ */ d.createElement(ea, {
    element: o,
    appendTo: n.appendTo
  });
});
Xc.displayName = "CalendarPanel";
function Ws(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function Ar(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ws(Object(e), !0).forEach(function(a) {
      ur(n, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Ws(Object(e)).forEach(function(a) {
      Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return n;
}
function Ks(n, t) {
  var e = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (!e) {
    if (Array.isArray(n) || (e = Lv(n)) || t) {
      e && (n = e);
      var a = 0, r = function() {
      };
      return { s: r, n: function() {
        return a >= n.length ? { done: !0 } : { done: !1, value: n[a++] };
      }, e: function(f) {
        throw f;
      }, f: r };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0, i = !1, l;
  return { s: function() {
    e = e.call(n);
  }, n: function() {
    var f = e.next();
    return o = f.done, f;
  }, e: function(f) {
    i = !0, l = f;
  }, f: function() {
    try {
      !o && e.return != null && e.return();
    } finally {
      if (i) throw l;
    }
  } };
}
function Lv(n, t) {
  if (n) {
    if (typeof n == "string") return Us(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Us(n, t);
  }
}
function Us(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, a = new Array(t); e < t; e++) a[e] = n[e];
  return a;
}
var Jc = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(n, t) {
  var e = cn(), a = d.useContext(Vt), r = co.getProps(n, a), o = d.useState(!1), i = Hn(o, 2), l = i[0], c = i[1], f = d.useState(!1), p = Hn(f, 2), v = p[0], x = p[1], b = d.useState(null), k = Hn(b, 2), y = k[0], q = k[1], O = d.useState(r.id), E = Hn(O, 2), P = E[0], A = E[1], C = {
    props: r,
    state: {
      focused: l,
      overlayVisible: v,
      viewDate: y
    }
  }, K = co.setMetaData(C), S = K.ptm, H = K.cx, X = K.isUnstyled;
  bl({
    callback: function() {
      Ft();
    },
    when: v,
    priority: [hl.OVERLAY_PANEL, 0]
  }), In(co.css.styles, X, {
    name: "calendar"
  });
  var U = d.useRef(null), I = d.useRef(null), oe = d.useRef(r.inputRef), Y = d.useRef(null), ve = d.useRef(!1), ge = d.useRef(null), Ce = d.useRef(!1), Oe = d.useRef(null), we = d.useRef(null), de = d.useRef(null), F = d.useRef(!1), se = d.useRef(!1), ae = d.useRef(!1), N = d.useRef(!1), j = d.useRef(null), B = d.useRef(!1), Z = d.useState("date"), ie = Hn(Z, 2), V = ie[0], z = ie[1], ee = d.useState(null), Ee = Hn(ee, 2), te = Ee[0], Ae = Ee[1], Je = d.useState(null), Ue = Hn(Je, 2), Ne = Ue[0], nt = Ue[1], $t = d.useState([]), It = Hn($t, 2), Ze = It[0], Ct = It[1], _t = Ur(r.value), St = r.inline || (r.onVisibleChange ? r.visible : v), Ot = Or(), vt = P + "_panel", on = Mc({
    target: U,
    overlay: I,
    listener: function(s, u) {
      var m = u.type, g = u.valid;
      g && (m === "outside" ? !F.current && !_l(s.target) && Ft("outside") : Ft()), F.current = !1;
    },
    when: !(r.touchUI || r.inline) && St,
    type: "mousedown"
  }), mt = Hn(on, 2), Pt = mt[0], Rt = mt[1], Ht = function() {
    return r.dateFormat || fn("dateFormat", r.locale);
  }, jt = function(s) {
    ve.current ? (c(!0), ve.current = !1) : (r.showOnFocus && !St && qt(), c(!0), r.onFocus && r.onFocus(s));
  }, At = function(s) {
    or(r.value), r.onBlur && r.onBlur(s), c(!1);
  }, Le = function(s) {
    switch (s.code) {
      case "ArrowDown": {
        v ? (fe(), s.preventDefault()) : qt();
        break;
      }
      case "Escape": {
        Ft(), r.touchUI && qr();
        break;
      }
      case "Tab": {
        I && I.current && (M.getFocusableElements(I.current).forEach(function(u) {
          return u.tabIndex = "-1";
        }), Ft(), r.touchUI && qr());
        break;
      }
    }
  }, re = function(s) {
    De(s, s.target.value), r.onInput && r.onInput(s);
  }, De = function(s, u, m) {
    try {
      var g = id(r.timeOnly ? u.replace("_", "") : u);
      if ($e(g)) {
        at(s, g);
        var _ = g.length ? g[0] : g;
        xt(s, _), Be({
          event: s,
          date: _
        });
      }
    } catch {
      if (m)
        m();
      else {
        var L = r.keepInvalid ? u : null;
        at(s, L);
      }
    }
  }, Be = function(s) {
    var u = s.event, m = s.date;
    if (m && r.onSelect) {
      var g = m.getDate(), _ = m.getMonth(), L = m.getFullYear();
      wn(u, {
        day: g,
        month: _,
        year: L,
        selectable: ar(g, _, L)
      }, null, !0);
    }
  }, je = function() {
    !r.inline && oe.current && (ve.current = !0, M.focus(oe.current));
  }, $e = function(s) {
    var u = !0;
    return gr() ? ar(s.getDate(), s.getMonth(), s.getFullYear(), !1) && Fl(s) || (u = !1) : s.every(function(m) {
      return ar(m.getDate(), m.getMonth(), m.getFullYear(), !1) && Fl(m);
    }) && Fn() && (u = s.length > 1 && s[1] >= s[0]), u;
  }, ft = function() {
    St ? Ft() : qt();
  }, Mt = function(s) {
    Y.current = {
      backward: !0,
      button: !0
    }, pe(s);
  }, rt = function(s) {
    Y.current = {
      backward: !1,
      button: !0
    }, Pe(s);
  }, Qe = function(s) {
    switch (s.code) {
      case "Tab":
        !r.inline && ht(s);
        break;
      case "Escape":
        Ft(null, je), s.preventDefault();
        break;
    }
  }, et = function(s, u, m) {
    if (s.key === "Enter" || s.key === "Space") {
      ne(s, u, m), s.preventDefault();
      return;
    }
    Qe(s);
  }, lt = function(s) {
    if (s.key === "Enter" || s.key === "Space") {
      xe(), s.preventDefault();
      return;
    }
  }, ht = function(s) {
    s == null || s.preventDefault();
    var u = M.getFocusableElements(I.current);
    if (u && u.length > 0)
      if (!document.activeElement)
        u[0].focus();
      else {
        var m = u.indexOf(document.activeElement);
        s != null && s.shiftKey ? m === -1 || m === 0 ? u[u.length - 1].focus() : u[m - 1].focus() : m === -1 || m === u.length - 1 ? u[0].focus() : u[m + 1].focus();
      }
  }, Ie = function() {
    if (Y.current) {
      if (Y.current.button)
        J(), Y.current.backward ? se.current.focus() : ae.current.focus();
      else {
        var s;
        if (Y.current.backward) {
          var u = M.find(I.current, 'table td span:not([data-p-disabled="true"])');
          s = u[u.length - 1];
        } else
          s = M.findSingle(I.current, 'table td span:not([data-p-disabled="true"])');
        s && (s.tabIndex = "0", s.focus());
      }
      Y.current = null;
    } else
      J();
  }, J = function() {
    var s;
    if (V === "month") {
      var u = M.find(I.current, '[data-pc-section="monthpicker"] [data-pc-section="month"]'), m = M.findSingle(I.current, '[data-pc-section="monthpicker"] [data-pc-section="month"][data-p-highlight="true"]');
      u.forEach(function(_) {
        return _.tabIndex = -1;
      }), s = m || u[0];
    } else if (s = M.findSingle(I.current, 'span[data-p-highlight="true"]'), !s) {
      var g = M.findSingle(I.current, "td.p-datepicker-today span:not(.p-disabled)");
      s = g || M.findSingle(I.current, 'table td span:not([data-p-disabled="true"])');
    }
    s && (s.tabIndex = "0");
  }, fe = function() {
    if (V) {
      var s;
      if (V === "date") {
        if (s = M.findSingle(I.current, 'span[data-p-highlight="true"]'), !s) {
          var u = M.findSingle(I.current, "td.p-datepicker-today span:not(.p-disabled)");
          s = u || M.findSingle(I.current, 'table td span:not([data-p-disabled="true"])');
        }
      } else (V === "month" || V === "year") && (s = M.findSingle(I.current, 'span[data-p-highlight="true"]'), s || (s = M.findSingle(I.current, '[data-pc-section="'.concat(V, 'picker"] [data-pc-section="').concat(V, '"]:not([data-p-disabled="true"])'))));
      s && (s.tabIndex = "0", s && s.focus());
    }
  }, pe = function(s) {
    if (r.disabled) {
      s.preventDefault();
      return;
    }
    var u = Gt(pt());
    if (u.setDate(1), V === "date")
      if (u.getMonth() === 0) {
        var m = wt();
        u.setMonth(11), u.setFullYear(m), r.onMonthChange && r.onMonthChange({
          month: 11,
          year: m
        }), Ae(11);
      } else
        u.setMonth(u.getMonth() - 1), r.onMonthChange && r.onMonthChange({
          month: te - 1,
          year: Ne
        }), Ae(function(L) {
          return L - 1;
        });
    else if (V === "month") {
      var g = u.getFullYear() - 1;
      if (r.yearNavigator) {
        var _ = parseInt(r.yearRange.split(":")[0], 10);
        g < _ && (g = _);
      }
      u.setFullYear(g);
    }
    V === "month" ? u.setFullYear(wt()) : V === "year" && u.setFullYear(ei()), xt(s, u), s.preventDefault();
  }, Pe = function(s) {
    if (r.disabled) {
      s.preventDefault();
      return;
    }
    var u = Gt(pt());
    if (u.setDate(1), V === "date")
      if (u.getMonth() === 11) {
        var m = Bt();
        u.setMonth(0), u.setFullYear(m), r.onMonthChange && r.onMonthChange({
          month: 0,
          year: m
        }), Ae(0);
      } else
        u.setMonth(u.getMonth() + 1), r.onMonthChange && r.onMonthChange({
          month: te + 1,
          year: Ne
        }), Ae(function(L) {
          return L + 1;
        });
    else if (V === "month") {
      var g = u.getFullYear() + 1;
      if (r.yearNavigator) {
        var _ = parseInt(r.yearRange.split(":")[1], 10);
        g > _ && (g = _);
      }
      u.setFullYear(g);
    }
    V === "month" ? u.setFullYear(Bt()) : V === "year" && u.setFullYear(ti()), xt(s, u), s.preventDefault();
  }, st = function(s, u) {
    for (var m = [], g = s; g <= u; g++)
      Ze.push(g);
    Ct(m);
  }, wt = function() {
    var s = Ne - 1;
    if (nt(s), r.yearNavigator && s < Ze[0]) {
      var u = Ze[Ze.length - 1] - Ze[0];
      st(Ze[0] - u, Ze[Ze.length - 1] - u);
    }
    return s;
  }, Bt = function() {
    var s = Ne + 1;
    if (nt(s), r.yearNavigator && s.current > Ze[Ze.length - 1]) {
      var u = Ze[Ze.length - 1] - Ze[0];
      st(Ze[0] + u, Ze[Ze.length - 1] + u);
    }
    return s;
  }, Qt = function(s, u) {
    var m = pt(), g = Gt(m);
    g.setDate(1), g.setMonth(parseInt(u, 10)), xt(s, g);
  }, zt = function(s, u) {
    var m = pt(), g = Gt(m);
    g.setFullYear(parseInt(u, 10)), xt(s, g);
  }, Wt = function(s) {
    var u = /* @__PURE__ */ new Date(), m = {
      day: u.getDate(),
      month: u.getMonth(),
      year: u.getFullYear(),
      today: !0,
      selectable: !0
    }, g = {
      hours: u.getHours(),
      minutes: u.getMinutes(),
      seconds: u.getSeconds(),
      milliseconds: u.getMilliseconds()
    };
    xt(s, u), wn(s, m, g), r.onTodayButtonClick && r.onTodayButtonClick(s);
  }, en = function(s) {
    B.current = !0, at(s, null), or(null), Ft(), r.onClearButtonClick && r.onClearButtonClick(s);
  }, h = function(s) {
    r.inline || Bn.emit("overlay-click", {
      originalEvent: s,
      target: U.current
    });
  }, D = function(s) {
    h(s);
  }, ne = function(s, u, m) {
    r.disabled || (Se(s, null, u, m), s.preventDefault());
  }, xe = function() {
    r.disabled || $();
  }, Re = function() {
    r.disabled || $();
  }, Se = function R(s, u, m, g) {
    switch ($(), ge.current = setTimeout(function() {
      R(s, 100, m, g);
    }, u || 500), m) {
      case 0:
        g === 1 ? ue(s) : me(s);
        break;
      case 1:
        g === 1 ? be(s) : Te(s);
        break;
      case 2:
        g === 1 ? Ye(s) : Fe(s);
        break;
      case 3:
        g === 1 ? gt(s) : Lt(s);
        break;
    }
  }, $ = function() {
    ge.current && clearTimeout(ge.current);
  }, W = function(s) {
    return r.stepMinute ? Math.round(s / r.stepMinute) * r.stepMinute : s;
  }, ue = function(s) {
    var u = tt(), m = u.getHours(), g = m + r.stepHour;
    g = g >= 24 ? g - 24 : g, er(g, u) && (r.maxDate && r.maxDate.toDateString() === u.toDateString() && r.maxDate.getHours() === g && (r.maxDate.getMinutes() < u.getMinutes() || r.maxDate.getMinutes() === u.getMinutes()) ? r.maxDate.getSeconds() < u.getSeconds() ? r.maxDate.getMilliseconds() < u.getMilliseconds() ? He(s, g, r.maxDate.getMinutes(), r.maxDate.getSeconds(), r.maxDate.getMilliseconds()) : He(s, g, r.maxDate.getMinutes(), r.maxDate.getSeconds(), u.getMilliseconds()) : He(s, g, r.maxDate.getMinutes(), u.getSeconds(), u.getMilliseconds()) : He(s, g, W(u.getMinutes()), u.getSeconds(), u.getMilliseconds())), s.preventDefault();
  }, me = function(s) {
    var u = tt(), m = u.getHours(), g = m - r.stepHour;
    g = g < 0 ? g + 24 : g, er(g, u) && (r.minDate && r.minDate.toDateString() === u.toDateString() && r.minDate.getHours() === g && (r.minDate.getMinutes() > u.getMinutes() || r.minDate.getMinutes() === u.getMinutes()) ? r.minDate.getSeconds() > u.getSeconds() ? r.minDate.getMilliseconds() > u.getMilliseconds() ? He(s, g, r.minDate.getMinutes(), r.minDate.getSeconds(), r.minDate.getMilliseconds()) : He(s, g, r.minDate.getMinutes(), r.minDate.getSeconds(), u.getMilliseconds()) : He(s, g, r.minDate.getMinutes(), u.getSeconds(), u.getMilliseconds()) : He(s, g, W(u.getMinutes()), u.getSeconds(), u.getMilliseconds())), s.preventDefault();
  }, he = function(s, u) {
    return r.stepMinute <= 1 ? u ? s + u : s : !u && (u = r.stepMinute, s % u === 0) ? s : Math.floor((s + u) / u) * u;
  }, be = function(s) {
    var u = tt(), m = u.getMinutes(), g = he(m, r.stepMinute);
    g = g > 59 ? g - 60 : g, tr(g, u) && (r.maxDate && r.maxDate.toDateString() === u.toDateString() && r.maxDate.getMinutes() === g && r.maxDate.getSeconds() < u.getSeconds() ? r.maxDate.getMilliseconds() < u.getMilliseconds() ? He(s, u.getHours(), g, r.maxDate.getSeconds(), r.maxDate.getMilliseconds()) : He(s, u.getHours(), g, r.maxDate.getSeconds(), u.getMilliseconds()) : He(s, u.getHours(), g, u.getSeconds(), u.getMilliseconds())), s.preventDefault();
  }, Te = function(s) {
    var u = tt(), m = u.getMinutes(), g = he(m, -r.stepMinute);
    g = g < 0 ? g + 60 : g, tr(g, u) && (r.minDate && r.minDate.toDateString() === u.toDateString() && r.minDate.getMinutes() === g && r.minDate.getSeconds() > u.getSeconds() ? r.minDate.getMilliseconds() > u.getMilliseconds() ? He(s, u.getHours(), g, r.minDate.getSeconds(), r.minDate.getMilliseconds()) : He(s, u.getHours(), g, r.minDate.getSeconds(), u.getMilliseconds()) : He(s, u.getHours(), g, u.getSeconds(), u.getMilliseconds())), s.preventDefault();
  }, Ye = function(s) {
    var u = tt(), m = u.getSeconds(), g = m + r.stepSecond;
    g = g > 59 ? g - 60 : g, nr(g, u) && (r.maxDate && r.maxDate.toDateString() === u.toDateString() && r.maxDate.getSeconds() === g && r.maxDate.getMilliseconds() < u.getMilliseconds() ? He(s, u.getHours(), u.getMinutes(), g, r.maxDate.getMilliseconds()) : He(s, u.getHours(), u.getMinutes(), g, u.getMilliseconds())), s.preventDefault();
  }, Fe = function(s) {
    var u = tt(), m = u.getSeconds(), g = m - r.stepSecond;
    g = g < 0 ? g + 60 : g, nr(g, u) && (r.minDate && r.minDate.toDateString() === u.toDateString() && r.minDate.getSeconds() === g && r.minDate.getMilliseconds() > u.getMilliseconds() ? He(s, u.getHours(), u.getMinutes(), g, r.minDate.getMilliseconds()) : He(s, u.getHours(), u.getMinutes(), g, u.getMilliseconds())), s.preventDefault();
  }, gt = function(s) {
    var u = tt(), m = u.getMilliseconds(), g = m + r.stepMillisec;
    g = g > 999 ? g - 1e3 : g, rr(g, u) && He(s, u.getHours(), u.getMinutes(), u.getSeconds(), g), s.preventDefault();
  }, Lt = function(s) {
    var u = tt(), m = u.getMilliseconds(), g = m - r.stepMillisec;
    g = g < 0 ? g + 999 : g, rr(g, u) && He(s, u.getHours(), u.getMinutes(), u.getSeconds(), g), s.preventDefault();
  }, Dt = function(s) {
    var u = tt(), m = u.getHours(), g = m >= 12 ? m - 12 : m + 12;
    er(An(g, m > 11), u) && He(s, g, u.getMinutes(), u.getSeconds(), u.getMilliseconds()), s.preventDefault();
  }, pt = function(s) {
    var u = r.value, m = s || (r.onViewDateChange ? r.viewDate : y);
    return Array.isArray(u) && (u = u[0]), m && vn(m) ? m : u && vn(u) ? u : /* @__PURE__ */ new Date();
  }, tt = function() {
    if (gr())
      return r.value && r.value instanceof Date ? Gt(r.value) : pt();
    if ($n()) {
      if (r.value && r.value.length)
        return Gt(r.value[r.value.length - 1]);
    } else if (Fn() && r.value && r.value.length) {
      var s = Gt(r.value[0]), u = Gt(r.value[1]);
      return u || s;
    }
    return /* @__PURE__ */ new Date();
  }, Gt = function(s) {
    return vn(s) ? new Date(s.valueOf()) : s;
  }, vn = function(s) {
    return s instanceof Date && !isNaN(s);
  }, An = function(s, u) {
    return r.hourFormat === "12" ? s === 12 ? u ? 12 : 0 : u ? s + 12 : s : s;
  }, er = function(s, u) {
    var m = !0, g = u ? u.toDateString() : null;
    return r.minDate && g && r.minDate.toDateString() === g && r.minDate.getHours() > s && (m = !1), r.maxDate && g && r.maxDate.toDateString() === g && r.maxDate.getHours() < s && (m = !1), m;
  }, tr = function(s, u) {
    var m = !0, g = u ? u.toDateString() : null;
    return r.minDate && g && r.minDate.toDateString() === g && u.getHours() === r.minDate.getHours() && r.minDate.getMinutes() > s && (m = !1), r.maxDate && g && r.maxDate.toDateString() === g && u.getHours() === r.maxDate.getHours() && r.maxDate.getMinutes() < s && (m = !1), m;
  }, nr = function(s, u) {
    var m = !0, g = u ? u.toDateString() : null;
    return r.minDate && g && r.minDate.toDateString() === g && u.getHours() === r.minDate.getHours() && u.getMinutes() === r.minDate.getMinutes() && r.minDate.getSeconds() > s && (m = !1), r.maxDate && g && r.maxDate.toDateString() === g && u.getHours() === r.maxDate.getHours() && u.getMinutes() === r.maxDate.getMinutes() && r.maxDate.getSeconds() < s && (m = !1), m;
  }, rr = function(s, u) {
    var m = !0, g = u ? u.toDateString() : null;
    return r.minDate && g && r.minDate.toDateString() === g && u.getHours() === r.minDate.getHours() && u.getSeconds() === r.minDate.getSeconds() && u.getMinutes() === r.minDate.getMinutes() && r.minDate.getMilliseconds() > s && (m = !1), r.maxDate && g && r.maxDate.toDateString() === g && u.getHours() === r.maxDate.getHours() && u.getSeconds() === r.maxDate.getSeconds() && u.getMinutes() === r.maxDate.getMinutes() && r.maxDate.getMilliseconds() < s && (m = !1), m;
  }, Nt = function(s) {
    if (r.yearNavigator) {
      var u = s.getFullYear(), m = r.yearRange ? parseInt(r.yearRange.split(":")[0], 10) : null, g = r.yearRange ? parseInt(r.yearRange.split(":")[1], 10) : null, _ = r.minDate && m != null ? Math.max(r.minDate.getFullYear(), m) : r.minDate || m, L = r.maxDate && g != null ? Math.min(r.maxDate.getFullYear(), g) : r.maxDate || g;
      _ && _ > u && (u = _), L && L < u && (u = L), s.setFullYear(u);
    }
    if (Jl(0)) {
      var G = s.getMonth(), le = parseInt(Kl(s) && Math.max(r.minDate.getMonth(), G).toString() || Ul(s) && Math.min(r.maxDate.getMonth(), G).toString() || G);
      s.setMonth(le);
    }
  }, He = function(s, u, m, g, _) {
    var L = tt();
    if (L.setHours(u), L.setMinutes(m), L.setSeconds(g), L.setMilliseconds(_), $n())
      if (r.value && r.value.length) {
        var G = so(r.value);
        G[G.length - 1] = L, L = G;
      } else
        L = [L];
    else if (Fn())
      if (r.value && r.value.length) {
        var le = r.value[0], Me = r.value[1];
        L = Me ? [le, L] : [L, null];
      } else
        L = [L, null];
    at(s, L), r.onSelect && r.onSelect({
      originalEvent: s,
      value: L
    }), or(L);
  }, xt = function(s, u) {
    Nt(u), r.onViewDateChange && s ? r.onViewDateChange({
      originalEvent: s,
      value: u
    }) : (Ce.current = !0, q(u)), u || en(s);
  }, un = function(s) {
    if (!(!s || !r.showMinMaxRange || r.view !== "date" || !I.current)) {
      var u = M.findSingle(I.current, '[data-pc-section="previousbutton"]'), m = M.findSingle(I.current, '[data-pc-section="nextbutton"]');
      if (r.disabled) {
        !X() && M.addClass(u, "p-disabled"), u.setAttribute("data-p-disabled", !0), !X() && M.addClass(m, "p-disabled"), m.setAttribute("data-p-disabled", !0);
        return;
      }
      if (r.minDate) {
        var g = Gt(s);
        g.getMonth() === 0 ? (g.setMonth(11, 1), g.setFullYear(g.getFullYear() - 1)) : g.setMonth(g.getMonth(), 1), g.setHours(0), g.setMinutes(0), g.setSeconds(0), r.minDate > g ? M.addClass(u, "p-disabled") : M.removeClass(u, "p-disabled");
      }
      if (r.maxDate) {
        var _ = Gt(s);
        _.getMonth() === 11 ? (_.setMonth(0, 1), _.setFullYear(_.getFullYear() + 1)) : _.setMonth(_.getMonth() + 1, 1), _.setHours(0), _.setMinutes(0), _.setSeconds(0), _.setSeconds(-1), r.maxDate < _ ? M.addClass(m, "p-disabled") : M.removeClass(m, "p-disabled");
      }
    }
  }, Ln = function(s, u, m) {
    var g = s.currentTarget, _ = g.parentElement, L = M.index(_);
    switch (s.code) {
      case "ArrowDown": {
        g.tabIndex = "-1";
        var G = _.parentElement.nextElementSibling;
        if (G) {
          var le = M.index(_.parentElement), Me = Array.from(_.parentElement.parentElement.children), Ke = Me.slice(le + 1), Ge = Ke.find(function(Kn) {
            var Un = Kn.children[L].children[0];
            return !M.getAttribute(Un, "data-p-disabled");
          });
          if (Ge) {
            var ke = Ge.children[L].children[0];
            ke.tabIndex = "0", ke.focus();
          } else
            Y.current = {
              backward: !1
            }, Pe(s);
        } else
          Y.current = {
            backward: !1
          }, Pe(s);
        s.preventDefault();
        break;
      }
      case "ArrowUp": {
        if (g.tabIndex = "-1", s.altKey)
          Ft(null, je);
        else {
          var Ve = _.parentElement.previousElementSibling;
          if (Ve) {
            var Xt = M.index(_.parentElement), tn = Array.from(_.parentElement.parentElement.children), ln = tn.slice(0, Xt).reverse(), gn = ln.find(function(Kn) {
              var Un = Kn.children[L].children[0];
              return !M.getAttribute(Un, "data-p-disabled");
            });
            if (gn) {
              var ut = gn.children[L].children[0];
              ut.tabIndex = "0", ut.focus();
            } else
              Y.current = {
                backward: !0
              }, pe(s);
          } else
            Y.current = {
              backward: !0
            }, pe(s);
        }
        s.preventDefault();
        break;
      }
      case "ArrowLeft": {
        g.tabIndex = "-1";
        var On = _.previousElementSibling;
        if (On) {
          var li = Array.from(_.parentElement.children), si = li.slice(0, L).reverse(), eo = si.find(function(Kn) {
            var Un = Kn.children[0];
            return !M.getAttribute(Un, "data-p-disabled");
          });
          if (eo) {
            var Mr = eo.children[0];
            Mr.tabIndex = "0", Mr.focus();
          } else
            mn(!0, m, s);
        } else
          mn(!0, m, s);
        s.preventDefault();
        break;
      }
      case "ArrowRight": {
        g.tabIndex = "-1";
        var Pn = _.nextElementSibling;
        if (Pn) {
          var ir = Array.from(_.parentElement.children), Nr = ir.slice(L + 1), lr = Nr.find(function(Kn) {
            var Un = Kn.children[0];
            return !M.getAttribute(Un, "data-p-disabled");
          });
          if (lr) {
            var hr = lr.children[0];
            hr.tabIndex = "0", hr.focus();
          } else
            mn(!1, m, s);
        } else
          mn(!1, m, s);
        s.preventDefault();
        break;
      }
      case "Enter":
      case "NumpadEnter":
      case "Space": {
        wn(s, u), s.preventDefault();
        break;
      }
      case "Escape": {
        Ft(null, je), s.preventDefault();
        break;
      }
      case "Tab": {
        r.inline || ht(s);
        break;
      }
      case "Home": {
        g.tabIndex = "-1";
        var Mn = _.parentElement, sr = Mn.children[0].children[0];
        M.getAttribute(sr, "data-p-disabled") ? mn(m, !0, s) : (sr.tabIndex = "0", sr.focus()), s.preventDefault();
        break;
      }
      case "End": {
        g.tabIndex = "-1";
        var br = _.parentElement, yr = br.children[br.children.length - 1].children[0];
        M.getAttribute(yr, "data-p-disabled") ? mn(m, !1, s) : (yr.tabIndex = "0", yr.focus()), s.preventDefault();
        break;
      }
      case "PageUp": {
        g.tabIndex = "-1", s.shiftKey ? (Y.current = {
          backward: !0
        }, pe(s)) : mn(m, !0, s), s.preventDefault();
        break;
      }
      case "PageDown": {
        g.tabIndex = "-1", s.shiftKey ? (Y.current = {
          backward: !1
        }, Pe(s)) : mn(m, !1, s), s.preventDefault();
        break;
      }
    }
  }, mn = function(s, u, m) {
    if (s)
      if (r.numberOfMonths === 1 || u === 0)
        Y.current = {
          backward: !0
        }, pe(m);
      else {
        var g = I.current.children[u - 1], _ = M.find(g, 'table td span:not([data-p-disabled="true"])'), L = _[_.length - 1];
        L.tabIndex = "0", L.focus();
      }
    else if (r.numberOfMonths === 1 || u === r.numberOfMonths - 1)
      Y.current = {
        backward: !1
      }, Pe(m);
    else {
      var G = I.current.children[u + 1], le = M.findSingle(G, 'table td span:not([data-p-disabled="true"])');
      le.tabIndex = "0", le.focus();
    }
  }, Sn = function(s, u) {
    var m = s.currentTarget;
    switch (s.code) {
      case "ArrowUp":
      case "ArrowDown": {
        m.tabIndex = "-1";
        var g = m.parentElement.children, _ = M.index(m), L = g[s.which === 40 ? _ + 3 : _ - 3];
        L && (L.tabIndex = "0", L.focus()), s.preventDefault();
        break;
      }
      case "ArrowLeft": {
        m.tabIndex = "-1";
        var G = m.previousElementSibling;
        G ? (G.tabIndex = "0", G.focus()) : (Y.current = {
          backward: !0
        }, pe(s)), s.preventDefault();
        break;
      }
      case "ArrowRight": {
        m.tabIndex = "-1";
        var le = m.nextElementSibling;
        le ? (le.tabIndex = "0", le.focus()) : (Y.current = {
          backward: !1
        }, Pe(s)), s.preventDefault();
        break;
      }
      case "PageUp": {
        if (s.shiftKey)
          return;
        Y.current = {
          backward: !0
        }, pe(s);
        break;
      }
      case "PageDown": {
        if (s.shiftKey)
          return;
        Y.current = {
          backward: !1
        }, Pe(s);
        break;
      }
      case "Enter":
      case "NumpadEnter":
      case "Space": {
        r.view !== "month" && (N.current = !0), ce(s, u), s.preventDefault();
        break;
      }
      case "Escape": {
        Ft(null, je), s.preventDefault();
        break;
      }
      case "Tab": {
        ht(s);
        break;
      }
    }
  }, Rn = function(s, u) {
    var m = s.currentTarget;
    switch (s.code) {
      case "ArrowUp":
      case "ArrowDown": {
        m.tabIndex = "-1";
        var g = m.parentElement.children, _ = M.index(m), L = g[s.code === "ArrowDown" ? _ + 2 : _ - 2];
        L && (L.tabIndex = "0", L.focus()), s.preventDefault();
        break;
      }
      case "ArrowLeft": {
        m.tabIndex = "-1";
        var G = m.previousElementSibling;
        G ? (G.tabIndex = "0", G.focus()) : (Y.current = {
          backward: !0
        }, pe(s)), s.preventDefault();
        break;
      }
      case "ArrowRight": {
        m.tabIndex = "-1";
        var le = m.nextElementSibling;
        le ? (le.tabIndex = "0", le.focus()) : (Y.current = {
          backward: !1
        }, Pe(s)), s.preventDefault();
        break;
      }
      case "PageUp": {
        if (s.shiftKey)
          return;
        Y.current = {
          backward: !0
        }, pe(s);
        break;
      }
      case "PageDown": {
        if (s.shiftKey)
          return;
        Y.current = {
          backward: !1
        }, Pe(s);
        break;
      }
      case "Enter":
      case "NumpadEnter":
      case "Space": {
        r.view !== "year" && (N.current = !0), _e(s, u), s.preventDefault();
        break;
      }
      case "Escape": {
        Ft(null, je), s.preventDefault();
        break;
      }
      case "Tab": {
        ht(s);
        break;
      }
    }
  }, wn = function(s, u, m, g) {
    if (s) {
      if (r.disabled || !u.selectable) {
        s.preventDefault();
        return;
      }
      if (M.find(I.current, 'table td span:not([data-p-disabled="true"])').forEach(function(L) {
        return L.tabIndex = -1;
      }), s.currentTarget.focus(), $n())
        if (ai(u)) {
          var _ = r.value.filter(function(L) {
            return !Ir(L, u);
          });
          at(s, _), or(_);
        } else (!r.maxDateCount || !r.value || r.maxDateCount > r.value.length) && Ga(s, u, m);
      else
        Ga(s, u, m);
      !r.inline && gr() && (!r.showTime || r.hideOnDateTimeSelect) && !g && (setTimeout(function() {
        Ft("dateselect");
      }, 100), Oe.current && qr()), s.preventDefault();
    }
  }, Qo = function(s, u) {
    if (r.showTime) {
      var m, g, _, L;
      if (u)
        m = u.hours, g = u.minutes, _ = u.seconds, L = u.milliseconds;
      else {
        var G = tt(), le = [G.getHours(), G.getMinutes(), G.getSeconds(), G.getMilliseconds()];
        m = le[0], g = le[1], _ = le[2], L = le[3];
      }
      s.setHours(m), s.setMinutes(he(g)), s.setSeconds(_), s.setMilliseconds(L);
    }
  }, Ga = function(s, u, m) {
    var g = new Date(u.year, u.month, u.day);
    Qo(g, m), r.minDate && r.minDate > g && (g = r.minDate), r.maxDate && r.maxDate < g && (g = r.maxDate);
    var _ = g;
    if (gr())
      at(s, g);
    else if ($n())
      _ = r.value ? [].concat(so(r.value), [g]) : [g], at(s, _);
    else if (Fn())
      if (r.value && r.value.length) {
        var L = r.value[0], G = r.value[1];
        G ? (L = g, G = null) : g.getTime() >= L.getTime() ? G = g : (G = L, L = g), _ = [L, G], at(s, _), r.hideOnRangeSelection && G !== null && setTimeout(function() {
          x(!1), F.current = !1;
        }, 150);
      } else
        _ = [g, null], at(s, _);
    r.onSelect && r.onSelect({
      originalEvent: s,
      value: g
    }), or(_);
  }, ei = function() {
    var s = Ne - 10;
    return nt(s), s;
  }, ti = function() {
    var s = Ne + 10;
    return nt(s), s;
  }, ye = function(s) {
    s && s.code && (s.code === "Enter" || s.code === "NumpadEnter" || s.code === "Space") && (N.current = !0), z("month"), s.preventDefault();
  }, w = function(s) {
    s && s.code && (s.code === "Enter" || s.code === "NumpadEnter" || s.code === "Space") && (N.current = !0), z("year"), s.preventDefault();
  }, ce = function(s, u) {
    if (r.view === "month")
      wn(s, {
        year: Ne,
        month: u,
        day: 1,
        selectable: !0
      }), s.preventDefault();
    else {
      Ae(u), Ll(u, Ne);
      var m = Gt(tt());
      m.setDate(1), m.setMonth(u), m.setYear(Ne), q(m), z("date"), r.onMonthChange && r.onMonthChange({
        month: u + 1,
        year: Ne
      }), xt(s, m), Be({
        event: s,
        date: m
      });
    }
  }, _e = function(s, u) {
    r.view === "year" ? wn(s, {
      year: u,
      month: 0,
      day: 1,
      selectable: !0
    }) : (nt(u), z("month"), r.onMonthChange && r.onMonthChange({
      month: te + 1,
      year: u
    }));
  }, at = function(s, u) {
    if (r.onChange) {
      var m = Gt(u);
      Ce.current = !0, j.current({
        originalEvent: s,
        value: m,
        stopPropagation: function() {
          s == null || s.stopPropagation();
        },
        preventDefault: function() {
          s == null || s.preventDefault();
        },
        target: {
          name: r.name,
          id: r.id,
          value: m
        }
      });
    }
  }, qt = function(s) {
    r.onVisibleChange ? r.onVisibleChange({
      visible: !0,
      type: s
    }) : (x(!0), we.current = function(u) {
      Gu(u) || (F.current = !0);
    }, Bn.on("overlay-click", we.current));
  }, Ft = function(s, u) {
    var m = function() {
      Ce.current = !1, ve.current = !1, F.current = !1, u && u(), Bn.off("overlay-click", we.current), we.current = null;
    };
    r.touchUI && qr(), r.onVisibleChange ? r.onVisibleChange({
      visible: s !== "dateselect",
      // false only if selecting a value to close panel
      type: s,
      callback: m
    }) : (x(!1), m());
  }, Xa = function() {
    var s = r.touchUI ? {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    } : r.inline ? void 0 : {
      position: "absolute",
      top: "0",
      left: "0"
    };
    if (M.addStyles(I.current, s), r.autoZIndex) {
      var u = r.touchUI ? "modal" : "overlay";
      hn.set(u, I.current, a && a.autoZIndex || Tt.autoZIndex, r.baseZIndex || a && a.zIndex[u] || Tt.zIndex[u]);
    }
    if (!r.touchUI && I && I.current && oe && oe.current && !Ml()) {
      var m = M.getOuterWidth(oe.current);
      m < 220 && (m = 220), r.view === "date" ? I.current.style.width = M.getOuterWidth(I.current) + "px" : I.current.style.width = m + "px", X() || (I.current.style.minWidth = m + "px");
    }
    Nl();
  }, aa = function() {
    Pt(), r.onShow && r.onShow(), c(!1);
  }, ni = function() {
    Rt();
  }, Uu = function() {
    hn.clear(I.current), r.onHide && r.onHide();
  }, Ml = function() {
    var s = r.appendTo || a && a.appendTo || Tt.appendTo;
    return s === "self" || r.inline;
  }, Nl = function() {
    r.touchUI ? Yu() : I && I.current && oe && oe.current && (M.alignOverlay(I.current, oe.current, r.appendTo || a && a.appendTo || Tt.appendTo), Ml() ? M.relativePosition(I.current, oe.current) : M.absolutePosition(I.current, oe.current)), X() && (I.current.style.minWidth = "");
  }, Yu = function() {
    Oe.current || (Oe.current = document.createElement("div"), Oe.current.style.zIndex = String(hn.get(I.current) - 1), !X() && M.addMultipleClasses(Oe.current, "p-component-overlay p-datepicker-mask p-datepicker-mask-scrollblocker p-component-overlay-enter"), de.current = function() {
      qr(), Ft();
    }, Oe.current.addEventListener("click", de.current), document.body.appendChild(Oe.current), M.blockBodyScroll());
  }, qr = function() {
    Oe.current && (X ? ri() : (!X() && M.addClass(Oe.current, "p-component-overlay-leave"), M.hasCSSAnimation(Oe.current) > 0 ? Oe.current.addEventListener("animationend", function() {
      ri();
    }) : ri()));
  }, ri = function() {
    Oe.current && (Oe.current.removeEventListener("click", de.current), de.current = null, document.body.removeChild(Oe.current), Oe.current = null);
    for (var s = document.body.children, u, m = 0; m < s.length; m++) {
      var g = s[m];
      if (M.hasClass(g, "p-datepicker-mask-scrollblocker")) {
        u = !0;
        break;
      }
    }
    u || M.unblockBodyScroll();
  }, Gu = function(s) {
    return U.current && !(U.current.isSameNode(s.target) || _l(s.target) || U.current.contains(s.target) || I.current && I.current.contains(s.target));
  }, _l = function(s) {
    return se.current && (se.current.isSameNode(s) || se.current.contains(s)) || ae.current && (ae.current.isSameNode(s) || ae.current.contains(s));
  }, Xu = function(s, u) {
    var m = /* @__PURE__ */ new Date();
    m.setDate(1), m.setMonth(s), m.setFullYear(u);
    var g = m.getDay() + Qu();
    return g >= 7 ? g - 7 : g;
  }, oa = function(s, u) {
    return 32 - jl(new Date(u, s, 32)).getDate();
  }, Ju = function(s, u) {
    var m = Al(s, u);
    return oa(m.month, m.year);
  }, jl = function(s) {
    return s ? (s.setHours(s.getHours() > 12 ? s.getHours() + 2 : 0), s) : null;
  }, Al = function(s, u) {
    var m, g;
    return s === 0 ? (m = 11, g = u - 1) : (m = s - 1, g = u), {
      month: m,
      year: g
    };
  }, Zu = function(s, u) {
    var m, g;
    return s === 11 ? (m = 0, g = u + 1) : (m = s + 1, g = u), {
      month: m,
      year: g
    };
  }, Qu = function() {
    var s = fn("firstDayOfWeek", r.locale);
    return s > 0 ? 7 - s : 0;
  }, ed = function() {
    for (var s = [], u = En(r.locale), m = u.firstDayOfWeek, g = u.dayNamesMin, _ = 0; _ < 7; _++)
      s.push(g[m]), m = m === 6 ? 0 : ++m;
    return s;
  }, Ll = function(s, u) {
    for (var m = [], g = 0; g < r.numberOfMonths; g++) {
      var _ = s + g, L = u;
      _ > 11 && (_ = _ % 11 - 1, L = u + 1), m.push(td(_, L));
    }
    return m;
  }, td = function(s, u) {
    for (var m = [], g = Xu(s, u), _ = oa(s, u), L = Ju(s, u), G = 1, le = /* @__PURE__ */ new Date(), Me = [], Ke = Math.ceil((_ + g) / 7), Ge = 0; Ge < Ke; Ge++) {
      var ke = [];
      if (Ge === 0) {
        for (var Ve = L - g + 1; Ve <= L; Ve++) {
          var Xt = Al(s, u);
          ke.push({
            day: Ve,
            month: Xt.month,
            year: Xt.year,
            otherMonth: !0,
            today: Ja(le, Ve, Xt.month, Xt.year),
            selectable: ar(Ve, Xt.month, Xt.year, !0)
          });
        }
        for (var tn = 7 - ke.length, ln = 0; ln < tn; ln++)
          ke.push({
            day: G,
            month: s,
            year: u,
            today: Ja(le, G, s, u),
            selectable: ar(G, s, u, !1)
          }), G++;
      } else
        for (var gn = 0; gn < 7; gn++) {
          if (G > _) {
            var ut = Zu(s, u);
            ke.push({
              day: G - _,
              month: ut.month,
              year: ut.year,
              otherMonth: !0,
              today: Ja(le, G - _, ut.month, ut.year),
              selectable: ar(G - _, ut.month, ut.year, !0)
            });
          } else
            ke.push({
              day: G,
              month: s,
              year: u,
              today: Ja(le, G, s, u),
              selectable: ar(G, s, u, !1)
            });
          G++;
        }
      r.showWeek && Me.push(nd(new Date(ke[0].year, ke[0].month, ke[0].day))), m.push(ke);
    }
    return {
      month: s,
      year: u,
      dates: m,
      weekNumbers: Me
    };
  }, nd = function(s) {
    var u = Gt(s);
    u.setDate(u.getDate() + 4 - (u.getDay() || 7));
    var m = u.getTime();
    return u.setMonth(0), u.setDate(1), Math.floor(Math.round((m - u.getTime()) / 864e5) / 7) + 1;
  }, ar = function(s, u, m, g) {
    var _ = !0, L = !0, G = !0, le = !0, Me = !0;
    return r.minDate && (r.minDate.getFullYear() > m || r.minDate.getFullYear() === m && (u > -1 && r.minDate.getMonth() > u || u > -1 && r.minDate.getMonth() === u && s > 0 && r.minDate.getDate() > s)) && (_ = !1), r.maxDate && (r.maxDate.getFullYear() < m || r.maxDate.getFullYear() === m && (u > -1 && r.maxDate.getMonth() < u || u > -1 && r.maxDate.getMonth() === u && s > 0 && r.maxDate.getDate() < s)) && (L = !1), (r.disabledDates || r.enabledDates || r.disabledDays) && (le = !ad(s, u, m)), r.selectOtherMonths === !1 && g && (Me = !1), _ && L && G && le && Me;
  }, Fl = function(s) {
    var u = !0, m = !0;
    return r.minDate && r.minDate.toDateString() === s.toDateString() && (r.minDate.getHours() > s.getHours() || r.minDate.getHours() === s.getHours() && (r.minDate.getMinutes() > s.getMinutes() || r.minDate.getMinutes() === s.getMinutes() && (r.minDate.getSeconds() > s.getSeconds() || r.minDate.getSeconds() === s.getSeconds() && r.minDate.getMilliseconds() > s.getMilliseconds()))) && (u = !1), r.maxDate && r.maxDate.toDateString() === s.toDateString() && (r.maxDate.getHours() < s.getHours() || r.maxDate.getHours() === s.getHours() && (r.maxDate.getMinutes() < s.getMinutes() || r.maxDate.getMinutes() === s.getMinutes() && (r.maxDate.getSeconds() < s.getSeconds() || r.maxDate.getSeconds() === s.getSeconds() && r.maxDate.getMilliseconds() < s.getMilliseconds()))) && (m = !1), u && m;
  }, ai = function(s) {
    if (r.value) {
      if (gr())
        return Ir(r.value, s);
      if ($n()) {
        var u = !1, m = Ks(r.value), g;
        try {
          for (m.s(); !(g = m.n()).done; ) {
            var _ = g.value;
            if (u = Ir(_, s), u)
              break;
          }
        } catch (L) {
          m.e(L);
        } finally {
          m.f();
        }
        return u;
      } else if (Fn())
        return r.value[1] ? Ir(r.value[0], s) || Ir(r.value[1], s) || rd(r.value[0], r.value[1], s) : Ir(r.value[0], s);
    } else
      return !1;
  }, $l = function() {
    return r.value != null && typeof r.value != "string";
  }, Hl = function(s) {
    if (!$l()) return !1;
    if ($n())
      return r.value.some(function(ke) {
        return ke.getMonth() === s && ke.getFullYear() === Ne;
      });
    if (Fn()) {
      var u = Hn(r.value, 2), m = u[0], g = u[1], _ = m ? m.getFullYear() : null, L = g ? g.getFullYear() : null, G = m ? m.getMonth() : null, le = g ? g.getMonth() : null;
      if (g) {
        var Me = new Date(Ne, s, 1), Ke = new Date(_, G, 1), Ge = new Date(L, le, 1);
        return Me >= Ke && Me <= Ge;
      } else
        return _ === Ne && G === s;
    } else
      return r.value.getMonth() === s && r.value.getFullYear() === Ne;
  }, oi = function(s) {
    if (!$l()) return !1;
    if ($n())
      return r.value.some(function(g) {
        return g.getFullYear() === s;
      });
    if (Fn()) {
      var u = r.value[0] ? r.value[0].getFullYear() : null, m = r.value[1] ? r.value[1].getFullYear() : null;
      return u === s || m === s || u < s && m > s;
    } else
      return r.value.getFullYear() === s;
  }, Bl = function() {
    return r.numberOfMonths > 1 || r.disabled;
  }, Ir = function(s, u) {
    return s && s instanceof Date ? s.getDate() === u.day && s.getMonth() === u.month && s.getFullYear() === u.year : !1;
  }, rd = function(s, u, m) {
    var g = !1;
    if (s && u) {
      var _ = new Date(m.year, m.month, m.day);
      return s.getTime() <= _.getTime() && u.getTime() >= _.getTime();
    }
    return g;
  }, gr = function() {
    return r.selectionMode === "single";
  }, Fn = function() {
    return r.selectionMode === "range";
  }, $n = function() {
    return r.selectionMode === "multiple";
  }, Ja = function(s, u, m, g) {
    return s.getDate() === u && s.getMonth() === m && s.getFullYear() === g;
  }, ad = function(s, u, m) {
    var g = !1;
    if (r.disabledDates && r.disabledDates.some(function(le) {
      return le.getFullYear() === m && le.getMonth() === u && le.getDate() === s;
    }) && (g = !0), !g && r.disabledDays && V === "date") {
      var _ = new Date(m, u, s), L = _.getDay();
      r.disabledDays.indexOf(L) !== -1 && (g = !0);
    }
    if (r.enabledDates) {
      var G = r.enabledDates.some(function(le) {
        return le.getFullYear() === m && le.getMonth() === u && le.getDate() === s;
      });
      G ? g = !1 : !r.disabledDays && !r.disabledDates && (g = !0);
    }
    return g;
  }, Rr = function(s, u) {
    for (var m = s === -1 ? new Array(12).fill(0).map(function(Me, Ke) {
      return oa(Ke, u);
    }) : [oa(s, u)], g = 0; g < m.length; g++)
      for (var _ = m[g], L = s === -1 ? g : s, G = 1; G <= _; G++) {
        var le = ar(G, L, u);
        if (le)
          return !1;
      }
    return !0;
  }, or = function(s) {
    if (oe.current) {
      var u = "";
      if (s)
        try {
          if (gr())
            u = vn(s) ? Za(s) : r.keepInvalid ? s : "";
          else if ($n())
            for (var m = 0; m < s.length; m++) {
              var g = s[m], _ = vn(g) ? Za(g) : "";
              u = u + _, m !== s.length - 1 && (u = u + ", ");
            }
          else if (Fn() && s && s.length) {
            var L = s[0], G = s[1];
            u = vn(L) ? Za(L) : "", G && (u = u + (vn(G) ? " - " + Za(G) : ""));
          }
        } catch {
          u = s;
        }
      oe.current.value = u;
    }
  }, Za = function(s) {
    if (r.formatDateTime)
      return r.formatDateTime(s);
    var u = null;
    return s && (r.timeOnly ? u = zl(s) : (u = od(s, Ht()), r.showTime && (u = u + (" " + zl(s))))), u;
  }, od = function(s, u) {
    if (!s)
      return "";
    var m, g = function(tn) {
      var ln = m + 1 < u.length && u.charAt(m + 1) === tn;
      return ln && m++, ln;
    }, _ = function(tn, ln, gn) {
      var ut = "" + ln;
      if (g(tn))
        for (; ut.length < gn; )
          ut = "0" + ut;
      return ut;
    }, L = function(tn, ln, gn, ut) {
      return g(tn) ? ut[ln] : gn[ln];
    }, G = "", le = !1, Me = En(r.locale), Ke = Me.dayNamesShort, Ge = Me.dayNames, ke = Me.monthNamesShort, Ve = Me.monthNames;
    if (s)
      for (m = 0; m < u.length; m++)
        if (le)
          u.charAt(m) === "'" && !g("'") ? le = !1 : G = G + u.charAt(m);
        else
          switch (u.charAt(m)) {
            case "d":
              G = G + _("d", s.getDate(), 2);
              break;
            case "D":
              G = G + L("D", s.getDay(), Ke, Ge);
              break;
            case "o":
              G = G + _("o", Math.round((new Date(s.getFullYear(), s.getMonth(), s.getDate()).getTime() - new Date(s.getFullYear(), 0, 0).getTime()) / 864e5), 3);
              break;
            case "m":
              G = G + _("m", s.getMonth() + 1, 2);
              break;
            case "M":
              G = G + L("M", s.getMonth(), ke, Ve);
              break;
            case "y":
              G = G + (g("y") ? s.getFullYear() : (s.getFullYear() % 100 < 10 ? "0" : "") + s.getFullYear() % 100);
              break;
            case "@":
              G = G + s.getTime();
              break;
            case "!":
              G = G + (s.getTime() * 1e4 + ticksTo1970);
              break;
            case "'":
              g("'") ? G = G + "'" : le = !0;
              break;
            default:
              G = G + u.charAt(m);
          }
    return G;
  }, zl = function(s) {
    if (!s)
      return "";
    var u = "", m = s.getHours(), g = s.getMinutes(), _ = s.getSeconds(), L = s.getMilliseconds();
    return r.hourFormat === "12" && m > 11 && m !== 12 && (m = m - 12), r.hourFormat === "12" ? u = u + (m === 0 ? 12 : m < 10 ? "0" + m : m) : u = u + (m < 10 ? "0" + m : m), u = u + ":", u = u + (g < 10 ? "0" + g : g), r.showSeconds && (u = u + ":", u = u + (_ < 10 ? "0" + _ : _)), r.showMillisec && (u = u + ".", u = u + (L < 100 ? (L < 10 ? "00" : "0") + L : L)), r.hourFormat === "12" && (u = u + (s.getHours() > 11 ? " PM" : " AM")), u;
  }, id = function(s) {
    if (!s || s.trim().length === 0)
      return null;
    var u;
    if (gr())
      u = ii(s);
    else if ($n()) {
      var m = s.split(",");
      u = [];
      var g = Ks(m), _;
      try {
        for (g.s(); !(_ = g.n()).done; ) {
          var L = _.value;
          u.push(ii(L.trim()));
        }
      } catch (Me) {
        g.e(Me);
      } finally {
        g.f();
      }
    } else if (Fn()) {
      var G = s.split(" - ");
      u = [];
      for (var le = 0; le < G.length; le++)
        u[le] = ii(G[le].trim());
    }
    return u;
  }, ii = function(s) {
    if (r.parseDateTime)
      return r.parseDateTime(s);
    var u, m = s.split(" ");
    return r.timeOnly ? (u = /* @__PURE__ */ new Date(), Vl(u, m[0], m[1])) : r.showTime ? (u = Wl(m[0], Ht()), Vl(u, m[1], m[2])) : u = Wl(s, Ht()), u;
  }, Vl = function(s, u, m) {
    if (r.hourFormat === "12" && m !== "PM" && m !== "AM")
      throw new Error("Invalid Time");
    var g = ld(u, m);
    s.setHours(g.hour), s.setMinutes(g.minute), s.setSeconds(g.second), s.setMilliseconds(g.millisecond);
  }, ld = function(s, u) {
    s = r.showMillisec ? s.replace(".", ":") : s;
    var m = s.split(":"), g = r.showSeconds ? 3 : 2;
    if (g = r.showMillisec ? g + 1 : g, m.length !== g || m[0].length !== 2 || m[1].length !== 2 || r.showSeconds && m[2].length !== 2 || r.showMillisec && m[3].length !== 3)
      throw new Error("Invalid time");
    var _ = parseInt(m[0], 10), L = parseInt(m[1], 10), G = r.showSeconds ? parseInt(m[2], 10) : null, le = r.showMillisec ? parseInt(m[3], 10) : null;
    if (isNaN(_) || isNaN(L) || _ > 23 || L > 59 || r.hourFormat === "12" && _ > 12 || r.showSeconds && (isNaN(G) || G > 59) || r.showMillisec && (isNaN(G) || G > 1e3))
      throw new Error("Invalid time");
    return r.hourFormat === "12" && (_ !== 12 && u === "PM" && (_ = _ + 12), _ === 12 && u === "AM" && (_ = _ - 12)), {
      hour: _,
      minute: L,
      second: G,
      millisecond: le
    };
  }, Wl = function(s, u) {
    if (u == null || s == null)
      throw new Error("Invalid arguments");
    if (s = Gr(s) === "object" ? s.toString() : s + "", s === "")
      return null;
    var m, g, _, L = 0, G = typeof r.shortYearCutoff != "string" ? r.shortYearCutoff : (/* @__PURE__ */ new Date()).getFullYear() % 100 + parseInt(r.shortYearCutoff, 10), le = -1, Me = -1, Ke = -1, Ge = -1, ke = !1, Ve, Xt = function(Pn) {
      var ir = m + 1 < u.length && u.charAt(m + 1) === Pn;
      return ir && m++, ir;
    }, tn = function(Pn) {
      var ir = Xt(Pn), Nr = Pn === "@" ? 14 : Pn === "!" ? 20 : Pn === "y" && ir ? 4 : Pn === "o" ? 3 : 2, lr = Pn === "y" ? Nr : 1, hr = new RegExp("^\\d{" + lr + "," + Nr + "}"), Mn = s.substring(L).match(hr);
      if (!Mn)
        throw new Error("Missing number at position " + L);
      return L = L + Mn[0].length, parseInt(Mn[0], 10);
    }, ln = function(Pn, ir, Nr) {
      for (var lr = -1, hr = Xt(Pn) ? Nr : ir, Mn = [], sr = 0; sr < hr.length; sr++)
        Mn.push([sr, hr[sr]]);
      Mn.sort(function(Kn, Un) {
        return -(Kn[1].length - Un[1].length);
      });
      for (var br = 0; br < Mn.length; br++) {
        var yr = Mn[br][1];
        if (s.substr(L, yr.length).toLowerCase() === yr.toLowerCase()) {
          lr = Mn[br][0], L = L + yr.length;
          break;
        }
      }
      if (lr !== -1)
        return lr + 1;
      throw new Error("Unknown name at position " + L);
    }, gn = function() {
      if (s.charAt(L) !== u.charAt(m))
        throw new Error("Unexpected literal at position " + L);
      L++;
    };
    r.view === "month" && (Ke = 1), r.view === "year" && (Ke = 1, Me = 1);
    var ut = En(r.locale), On = ut.dayNamesShort, li = ut.dayNames, si = ut.monthNamesShort, eo = ut.monthNames;
    for (m = 0; m < u.length; m++)
      if (ke)
        u.charAt(m) === "'" && !Xt("'") ? ke = !1 : gn();
      else
        switch (u.charAt(m)) {
          case "d":
            Ke = tn("d");
            break;
          case "D":
            ln("D", On, li);
            break;
          case "o":
            Ge = tn("o");
            break;
          case "m":
            Me = tn("m");
            break;
          case "M":
            Me = ln("M", si, eo);
            break;
          case "y":
            le = tn("y");
            break;
          case "@":
            Ve = new Date(tn("@")), le = Ve.getFullYear(), Me = Ve.getMonth() + 1, Ke = Ve.getDate();
            break;
          case "!":
            Ve = new Date((tn("!") - ticksTo1970) / 1e4), le = Ve.getFullYear(), Me = Ve.getMonth() + 1, Ke = Ve.getDate();
            break;
          case "'":
            Xt("'") ? gn() : ke = !0;
            break;
          default:
            gn();
        }
    if (L < s.length && (_ = s.substr(L), !/^\s+/.test(_)))
      throw new Error("Extra/unparsed characters found in date: " + _);
    if (le === -1 ? le = (/* @__PURE__ */ new Date()).getFullYear() : le < 100 && (le = le + ((/* @__PURE__ */ new Date()).getFullYear() - (/* @__PURE__ */ new Date()).getFullYear() % 100 + (le <= G ? 0 : -100))), Ge > -1) {
      Me = 1, Ke = Ge;
      do {
        if (g = oa(le, Me - 1), Ke <= g)
          break;
        Me++, Ke = Ke - g;
      } while (!0);
    }
    if (Ve = jl(new Date(le, Me - 1, Ke)), Ve.getFullYear() !== le || Ve.getMonth() + 1 !== Me || Ve.getDate() !== Ke)
      throw new Error("Invalid date");
    return Ve;
  }, Kl = function(s) {
    return r.minDate && r.minDate.getFullYear() === s.getFullYear();
  }, Ul = function(s) {
    return r.maxDate && r.maxDate.getFullYear() === s.getFullYear();
  };
  d.useEffect(function() {
    Q.combinedRefs(oe, r.inputRef);
  }, [oe, r.inputRef]), qn(function() {
    var R = pt(r.viewDate);
    if (Nt(R), q(R), Ae(R.getMonth()), nt(R.getFullYear()), z(r.view), !P) {
      var s = Or();
      !P && A(s);
    }
    r.inline && (I && I.current.setAttribute(Ot, ""), r.disabled || (J(), r.numberOfMonths === 1 && (I.current.style.width = M.getOuterWidth(I.current) + "px"))), r.value && (or(r.value), Yl(r.value)), r.autoFocus && setTimeout(function() {
      return M.focus(oe.current, r.autoFocus);
    }, 200);
  }), d.useEffect(function() {
    j.current = r.onChange;
  }, [r.onChange]), d.useEffect(function() {
    var R = null;
    return r.mask && (R = wf(oe.current, {
      mask: r.mask,
      slotChar: r.maskSlotChar,
      readOnly: r.readOnlyInput || r.disabled,
      onChange: function(u) {
        De(u.originalEvent, u.value, function() {
          return !1;
        });
      },
      onBlur: function(u) {
        De(u, u.target.value);
      }
    }).unbindEvents), function() {
      r.mask && R && R();
    };
  }, [r.disabled, r.mask, r.readOnlyInput]), dt(function() {
    N.current && z(r.view), N.current = !1;
  }, [r.view]), dt(function() {
    St && !r.inline && fe();
  }, [St, V, r.inline]), dt(function() {
    if (!r.onViewDateChange && !Ce.current && Yl(r.value), r.viewDate) {
      var R = pt(r.viewDate);
      xt(null, R), Be({
        event: null,
        date: R
      });
    }
  }, [r.onViewDateChange, r.value, r.viewDate]), dt(function() {
    (v || r.visible) && setTimeout(function() {
      Nl();
    });
  }, [V, v, r.visible]), dt(function() {
    var R = r.value;
    if (_t !== R) {
      var s = document.activeElement === oe.current;
      if (s || or(R), !R) return;
      var u = R;
      if ($n())
        R.length && (u = R[R.length - 1]);
      else if (Fn() && R.length) {
        var m = R[0], g = R[1];
        u = g || m;
      }
      u instanceof Date && (Nt(u), q(u), Ae(u.getMonth()), nt(u.getFullYear()));
    }
  }, [r.value, St]), dt(function() {
    or(r.value);
  }, [r.dateFormat, r.hourFormat, r.timeOnly, r.showSeconds, r.showMillisec, r.showTime, r.locale]), dt(function() {
    I.current && (un(y), Ie());
  }), jn(function() {
    Oe.current && (qr(), Oe.current = null), hn.clear(I.current);
  }), d.useImperativeHandle(t, function() {
    return {
      props: r,
      show: qt,
      hide: Ft,
      getCurrentDateTime: tt,
      getViewDate: pt,
      updateViewDate: xt,
      focus: function() {
        return M.focus(oe.current);
      },
      getElement: function() {
        return U.current;
      },
      getOverlay: function() {
        return I.current;
      },
      getInput: function() {
        return oe.current;
      }
    };
  });
  var Yl = function(s) {
    Array.isArray(s) && (s = s[0]);
    var u = _t;
    Array.isArray(u) && (u = u[0]);
    var m = r.viewDate && vn(r.viewDate) ? r.viewDate : s && vn(s) ? s : /* @__PURE__ */ new Date();
    B.current && r.showTime && (m.setHours(0, 0, 0), B.current = !1), (!u && s || s && s instanceof Date && s.getTime() !== u.getTime()) && Nt(m), q(m), Ce.current = !0;
  }, Gl = function(s) {
    var u = s ? {
      onClick: Mt,
      onKeyDown: function(Ve) {
        return Qe(Ve);
      }
    } : {
      style: {
        visibility: "hidden"
      }
    }, m = e({
      className: H("previousIcon")
    }, S("previousIcon")), g = r.prevIcon || /* @__PURE__ */ d.createElement(Sl, m), _ = Ut.getJSXIcon(g, Ar({}, m), {
      props: r
    }), L = En(r.locale), G = L.prevDecade, le = L.prevYear, Me = L.prevMonth, Ke = V === "year" ? G : V === "month" ? le : Me, Ge = e(Ar({
      type: "button",
      className: H("previousButton"),
      "aria-label": Ke
    }, u), S("previousButton"));
    return /* @__PURE__ */ d.createElement("button", Jt({
      ref: se
    }, Ge), _, /* @__PURE__ */ d.createElement(Kt, null));
  }, Xl = function(s) {
    var u = s ? {
      onClick: rt,
      onKeyDown: function(Ve) {
        return Qe(Ve);
      }
    } : {
      style: {
        visibility: "hidden"
      }
    }, m = e({
      className: H("nextIcon")
    }, S("nextIcon")), g = r.nextIcon || /* @__PURE__ */ d.createElement(zo, m), _ = Ut.getJSXIcon(g, Ar({}, m), {
      props: r
    }), L = En(r.locale), G = L.nextDecade, le = L.nextYear, Me = L.nextMonth, Ke = V === "year" ? G : V === "month" ? le : Me, Ge = e(Ar({
      type: "button",
      className: H("nextButton"),
      "aria-label": Ke
    }, u), S("nextButton"));
    return /* @__PURE__ */ d.createElement("button", Jt({
      ref: ae
    }, Ge), _, /* @__PURE__ */ d.createElement(Kt, null));
  }, Jl = function(s) {
    return r.monthNavigator && r.view !== "month" && (r.numberOfMonths === 1 || s === 0);
  }, sd = function(s, u) {
    var m = fn("monthNames", r.locale);
    if (Jl(u)) {
      var g = pt(), _ = g.getMonth(), L = m.map(function(ke, Ve) {
        return (!Kl(g) || Ve >= r.minDate.getMonth()) && (!Ul(g) || Ve <= r.maxDate.getMonth()) ? {
          label: ke,
          value: Ve,
          index: Ve
        } : null;
      }).filter(function(ke) {
        return !!ke;
      }), G = L.map(function(ke) {
        return ke.label;
      }), le = e({
        className: H("select"),
        onChange: function(Ve) {
          return Qt(Ve, Ve.target.value);
        },
        value: _
      }, S("select")), Me = /* @__PURE__ */ d.createElement("select", le, L.map(function(ke) {
        var Ve = e({
          value: ke.value
        }, S("option"));
        return /* @__PURE__ */ d.createElement("option", Jt({}, Ve, {
          key: ke.label
        }), ke.label);
      }));
      if (r.monthNavigatorTemplate) {
        var Ke = {
          onChange: Qt,
          className: "p-datepicker-month",
          value: _,
          names: G,
          options: L,
          element: Me,
          props: r
        };
        return Q.getJSXElement(r.monthNavigatorTemplate, Ke);
      }
      return Me;
    }
    var Ge = e({
      className: H("monthTitle"),
      onKeyDown: Qe,
      "aria-label": fn("chooseMonth", r.locale),
      onClick: ye,
      disabled: Bl()
    }, S("monthTitle"));
    return V === "date" && /* @__PURE__ */ d.createElement("button", Ge, m[s]);
  }, Zl = function(s) {
    var u = pt(), m = u.getFullYear(), g = r.numberOfMonths > 1 ? s : Ne;
    if (r.yearNavigator) {
      var _ = [];
      if (r.yearRange)
        for (var L = r.yearRange.split(":"), G = parseInt(L[0], 10), le = parseInt(L[1], 10), Me = G; Me <= le; Me++)
          _.push(Me);
      else
        for (var Ke = m - m % 10, Ge = 0; Ge < 10; Ge++)
          _.push(Ke + Ge);
      var ke = _.filter(function(ut) {
        return !(r.minDate && r.minDate.getFullYear() > ut) && !(r.maxDate && r.maxDate.getFullYear() < ut);
      }), Ve = e({
        className: H("select"),
        onChange: function(On) {
          return zt(On, On.target.value);
        },
        value: g
      }, S("select")), Xt = /* @__PURE__ */ d.createElement("select", Ve, ke.map(function(ut) {
        var On = e({
          value: ut
        }, S("option"));
        return /* @__PURE__ */ d.createElement("option", Jt({}, On, {
          key: ut
        }), ut);
      }));
      if (r.yearNavigatorTemplate) {
        var tn = ke.map(function(ut, On) {
          return {
            label: ut,
            value: ut,
            index: On
          };
        }), ln = {
          onChange: zt,
          className: "p-datepicker-year",
          value: m,
          names: ke,
          options: tn,
          element: Xt,
          props: r
        };
        return Q.getJSXElement(r.yearNavigatorTemplate, ln);
      }
      return Xt;
    }
    var gn = e({
      className: H("yearTitle"),
      "aria-label": fn("chooseYear", r.locale),
      onClick: function(On) {
        return w(On);
      },
      disabled: Bl()
    }, S("yearTitle"));
    return V !== "year" && /* @__PURE__ */ d.createElement("button", gn, g);
  }, Ql = function() {
    var s = ia(), u = e({
      className: H("decadeTitle")
    }, S("decadeTitle"));
    if (V === "year") {
      var m = e(S("decadeTitleText"));
      return /* @__PURE__ */ d.createElement("span", u, r.decadeTemplate ? r.decadeTemplate(s) : /* @__PURE__ */ d.createElement("span", m, "".concat(ia()[0], " - ").concat(ia()[ia().length - 1])));
    }
    return null;
  }, cd = function(s, u) {
    var m = sd(s.month, u), g = Zl(s.year), _ = Ql(), L = e({
      className: H("title")
    }, S("title")), G = fn("showMonthAfterYear", r.locale);
    return /* @__PURE__ */ d.createElement("div", L, G ? g : m, G ? m : g, _);
  }, ud = function(s) {
    var u = e(S("weekDay")), m = e({
      scope: "col"
    }, S("tableHeaderCell")), g = s.map(function(le, Me) {
      return /* @__PURE__ */ d.createElement("th", Jt({}, m, {
        key: "".concat(le, "-").concat(Me)
      }), /* @__PURE__ */ d.createElement("span", u, le));
    });
    if (r.showWeek) {
      var _ = e({
        scope: "col",
        className: H("weekHeader"),
        "data-p-disabled": r.showWeek
      }, S("weekHeader", {
        context: {
          disabled: r.showWeek
        }
      })), L = e(S("weekLabel")), G = /* @__PURE__ */ d.createElement("th", Jt({}, _, {
        key: "wn"
      }), /* @__PURE__ */ d.createElement("span", L, fn("weekHeader", r.locale)));
      return [G].concat(so(g));
    }
    return g;
  }, dd = function(s, u, m) {
    var g = r.dateTemplate ? r.dateTemplate(s) : s.day, _ = ai(s), L = e({
      className: H("dayLabel", {
        className: u
      }),
      "aria-selected": _,
      "aria-disabled": !s.selectable,
      onClick: function(le) {
        return wn(le, s);
      },
      onKeyDown: function(le) {
        return Ln(le, s, m);
      },
      "data-p-highlight": _,
      "data-p-disabled": !s.selectable
    }, S("dayLabel", {
      context: {
        selected: _,
        disabled: !s.selectable
      }
    }));
    return /* @__PURE__ */ d.createElement("span", L, g, _ && /* @__PURE__ */ d.createElement("div", {
      "aria-live": "polite",
      className: "p-hidden-accessible",
      "data-p-hidden-accessible": !0,
      pt: S("hiddenSelectedDay")
    }));
  }, fd = function(s, u, m) {
    var g = s.map(function(le) {
      var Me = ai(le), Ke = qe({
        "p-highlight": Me,
        "p-disabled": !le.selectable
      }), Ge = le.otherMonth && !r.showOtherMonths ? null : dd(le, Ke, m), ke = e({
        className: H("day", {
          date: le
        }),
        "aria-label": le.day,
        "data-p-today": le.today,
        "data-p-other-month": le.otherMonth
      }, S("day", {
        context: {
          date: le,
          today: le.today,
          otherMonth: le.otherMonth
        }
      }));
      return /* @__PURE__ */ d.createElement("td", Jt({}, ke, {
        key: le.day
      }), Ge);
    });
    if (r.showWeek) {
      var _ = e({
        className: H("weekNumber")
      }, S("weekNumber")), L = e({
        className: H("weekLabelContainer"),
        "data-p-disabled": r.showWeek
      }, S("weekLabelContainer", {
        context: {
          disabled: r.showWeek
        }
      })), G = /* @__PURE__ */ d.createElement("td", Jt({}, _, {
        key: "wn" + u
      }), /* @__PURE__ */ d.createElement("span", L, u));
      return [G].concat(so(g));
    }
    return g;
  }, pd = function(s, u) {
    var m = e(S("tableBodyRowProps"));
    return s.dates.map(function(g, _) {
      return /* @__PURE__ */ d.createElement("tr", Jt({}, m, {
        key: _
      }), fd(g, s.weekNumbers[_], u));
    });
  }, vd = function(s, u, m) {
    var g = ud(u), _ = pd(s, m), L = e({
      className: H("container")
    }, S("container")), G = e({
      role: "grid",
      className: H("table")
    }, S("table")), le = e(S("tableHeader")), Me = e(S("tableHeaderRow")), Ke = e(S("tableBody"));
    return V === "date" && /* @__PURE__ */ d.createElement("div", Jt({}, L, {
      key: Or("calendar_container_")
    }), /* @__PURE__ */ d.createElement("table", G, /* @__PURE__ */ d.createElement("thead", le, /* @__PURE__ */ d.createElement("tr", Me, g)), /* @__PURE__ */ d.createElement("tbody", Ke, _)));
  }, md = function(s, u) {
    var m = ed(), g = Gl(u === 0), _ = Xl(r.numberOfMonths === 1 || u === r.numberOfMonths - 1), L = cd(s, u), G = vd(s, m, u), le = r.headerTemplate ? r.headerTemplate() : null, Me = s.month + "-" + s.year, Ke = e({
      className: H("group")
    }, S("group")), Ge = e({
      className: H("header")
    }, S("header"));
    return /* @__PURE__ */ d.createElement("div", Jt({}, Ke, {
      key: Me
    }), /* @__PURE__ */ d.createElement("div", Jt({}, Ge, {
      key: u
    }), le, g, L, _), G);
  }, gd = function(s) {
    var u = s.map(md), m = e({
      className: H("groupContainer")
    }, S("groupContainer"));
    return /* @__PURE__ */ d.createElement("div", m, u);
  }, hd = function() {
    var s = pt(), u = Ll(s.getMonth(), s.getFullYear()), m = gd(u);
    return m;
  }, bd = function() {
    for (var s = [], u = fn("monthNamesShort", r.locale), m = 0; m <= 11; m++)
      s.push(u[m]);
    return s;
  }, ia = function() {
    for (var s = [], u = Ne - Ne % 10, m = 0; m < 10; m++)
      s.push(u + m);
    return s;
  }, yd = function() {
    var s = Gl(!0), u = Xl(!0), m = Zl(pt().getFullYear()), g = Ql(), _ = e({
      className: H("groupContainer")
    }, S("groupContainer")), L = e({
      className: H("group")
    }, S("group")), G = e({
      className: H("header")
    }, S("header")), le = e({
      className: H("title")
    }, S("title"));
    return /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("div", _, /* @__PURE__ */ d.createElement("div", L, /* @__PURE__ */ d.createElement("div", G, s, /* @__PURE__ */ d.createElement("div", le, m, g), u))));
  }, wd = function() {
    return r.timeOnly ? null : r.view === "date" ? hd() : yd();
  }, es = e(S("incrementIcon")), ts = e(S("decrementIcon")), la = Ut.getJSXIcon(r.incrementIcon || /* @__PURE__ */ d.createElement(El, es), Ar({}, es), {
    props: r
  }), sa = Ut.getJSXIcon(r.decrementIcon || /* @__PURE__ */ d.createElement(Bo, ts), Ar({}, ts), {
    props: r
  }), xd = function() {
    var s = tt(), u = he(s.getMinutes()), m = s.getHours();
    m = u > 59 ? m + 1 : m, r.hourFormat === "12" && (m === 0 ? m = 12 : m > 11 && m !== 12 && (m = m - 12));
    var g = e(S("hour")), _ = En(r.locale), L = _.nextHour, G = _.prevHour, le = m < 10 ? "0" + m : m, Me = e({
      className: H("hourPicker")
    }, S("hourPicker")), Ke = e({
      type: "button",
      className: H("incrementButton"),
      "aria-label": L,
      onMouseDown: function(Ve) {
        return ne(Ve, 0, 1);
      },
      onMouseUp: xe,
      onMouseLeave: Re,
      onKeyDown: function(Ve) {
        return et(Ve, 0, 1);
      },
      onKeyUp: lt
    }, S("incrementButton")), Ge = e({
      type: "button",
      className: H("decrementButton"),
      "aria-label": G,
      onMouseDown: function(Ve) {
        return ne(Ve, 0, -1);
      },
      onMouseUp: xe,
      onMouseLeave: Re,
      onKeyDown: function(Ve) {
        return et(Ve, 0, -1);
      },
      onKeyUp: lt
    }, S("decrementButton"));
    return /* @__PURE__ */ d.createElement("div", Me, /* @__PURE__ */ d.createElement("button", Ke, la, /* @__PURE__ */ d.createElement(Kt, null)), /* @__PURE__ */ d.createElement("span", g, le), /* @__PURE__ */ d.createElement("button", Ge, sa, /* @__PURE__ */ d.createElement(Kt, null)));
  }, Sd = function() {
    var s = tt(), u = he(s.getMinutes());
    u = u > 59 ? u - 60 : u;
    var m = e(S("minute")), g = En(r.locale), _ = g.nextMinute, L = g.prevMinute, G = u < 10 ? "0" + u : u, le = e({
      className: H("minutePicker")
    }, S("minutePicker")), Me = e({
      type: "button",
      className: H("incrementButton"),
      "aria-label": _,
      onMouseDown: function(ke) {
        return ne(ke, 1, 1);
      },
      onMouseUp: xe,
      onMouseLeave: Re,
      onKeyDown: function(ke) {
        return et(ke, 1, 1);
      },
      onKeyUp: lt
    }, S("incrementButton")), Ke = e({
      type: "button",
      className: H("decrementButton"),
      "aria-label": L,
      onMouseDown: function(ke) {
        return ne(ke, 1, -1);
      },
      onMouseUp: xe,
      onMouseLeave: Re,
      onKeyDown: function(ke) {
        return et(ke, 1, -1);
      },
      onKeyUp: lt
    }, S("decrementButton"));
    return /* @__PURE__ */ d.createElement("div", le, /* @__PURE__ */ d.createElement("button", Me, la, /* @__PURE__ */ d.createElement(Kt, null)), /* @__PURE__ */ d.createElement("span", m, G), /* @__PURE__ */ d.createElement("button", Ke, sa, /* @__PURE__ */ d.createElement(Kt, null)));
  }, Ed = function() {
    if (r.showSeconds) {
      var s = tt(), u = En(r.locale), m = u.nextSecond, g = u.prevSecond, _ = e(S("second")), L = s.getSeconds(), G = L < 10 ? "0" + L : L, le = e({
        className: H("secondPicker")
      }, S("secondPicker")), Me = e({
        type: "button",
        className: H("incrementButton"),
        "aria-label": m,
        onMouseDown: function(ke) {
          return ne(ke, 2, 1);
        },
        onMouseUp: xe,
        onMouseLeave: Re,
        onKeyDown: function(ke) {
          return et(ke, 2, 1);
        },
        onKeyUp: lt
      }, S("incrementButton")), Ke = e({
        type: "button",
        className: H("decrementButton"),
        "aria-label": g,
        onMouseDown: function(ke) {
          return ne(ke, 2, -1);
        },
        onMouseUp: xe,
        onMouseLeave: Re,
        onKeyDown: function(ke) {
          return et(ke, 2, -1);
        },
        onKeyUp: lt
      }, S("decrementButton"));
      return /* @__PURE__ */ d.createElement("div", le, /* @__PURE__ */ d.createElement("button", Me, la, /* @__PURE__ */ d.createElement(Kt, null)), /* @__PURE__ */ d.createElement("span", _, G), /* @__PURE__ */ d.createElement("button", Ke, sa, /* @__PURE__ */ d.createElement(Kt, null)));
    }
    return null;
  }, Cd = function() {
    if (r.showMillisec) {
      var s = tt(), u = En(r.locale), m = u.nextMilliSecond, g = u.prevMilliSecond, _ = e(S("millisecond")), L = s.getMilliseconds(), G = L < 100 ? (L < 10 ? "00" : "0") + L : L, le = e({
        className: H("millisecondPicker")
      }, S("millisecondPicker")), Me = e({
        type: "button",
        className: H("incrementButton"),
        "aria-label": m,
        onMouseDown: function(ke) {
          return ne(ke, 3, 1);
        },
        onMouseUp: xe,
        onMouseLeave: Re,
        onKeyDown: function(ke) {
          return et(ke, 3, 1);
        },
        onKeyUp: lt
      }, S("incrementButton")), Ke = e({
        type: "button",
        className: H("decrementButton"),
        "aria-label": g,
        onMouseDown: function(ke) {
          return ne(ke, 3, -1);
        },
        onMouseUp: xe,
        onMouseLeave: Re,
        onKeyDown: function(ke) {
          return et(ke, 3, -1);
        },
        onKeyUp: lt
      }, S("decrementButton"));
      return /* @__PURE__ */ d.createElement("div", le, /* @__PURE__ */ d.createElement("button", Me, la, /* @__PURE__ */ d.createElement(Kt, null)), /* @__PURE__ */ d.createElement("span", _, G), /* @__PURE__ */ d.createElement("button", Ke, sa, /* @__PURE__ */ d.createElement(Kt, null)));
    }
    return null;
  }, Od = function() {
    if (r.hourFormat === "12") {
      var s = tt(), u = En(r.locale), m = u.am, g = u.pm, _ = s.getHours(), L = _ > 11 ? "PM" : "AM", G = e(S("ampm")), le = e({
        className: H("ampmPicker")
      }, S("ampmPicker")), Me = e({
        type: "button",
        className: H("incrementButton"),
        "aria-label": m,
        onClick: function(ke) {
          return Dt(ke);
        }
      }, S("incrementButton")), Ke = e({
        type: "button",
        className: H("decrementButton"),
        "aria-label": g,
        onClick: function(ke) {
          return Dt(ke);
        }
      }, S("decrementButton"));
      return /* @__PURE__ */ d.createElement("div", le, /* @__PURE__ */ d.createElement("button", Me, la, /* @__PURE__ */ d.createElement(Kt, null)), /* @__PURE__ */ d.createElement("span", G, L), /* @__PURE__ */ d.createElement("button", Ke, sa, /* @__PURE__ */ d.createElement(Kt, null)));
    }
    return null;
  }, Qa = function(s) {
    var u = e({
      className: H("separatorContainer")
    }, S("separatorContainer")), m = e(S("separator"));
    return /* @__PURE__ */ d.createElement("div", u, /* @__PURE__ */ d.createElement("span", m, s));
  }, Pd = function() {
    if ((r.showTime || r.timeOnly) && V === "date") {
      var s = e({
        className: H("timePicker")
      }, S("timePicker"));
      return /* @__PURE__ */ d.createElement("div", s, xd(), Qa(":"), Sd(), r.showSeconds && Qa(":"), Ed(), r.showMillisec && Qa("."), Cd(), r.hourFormat === "12" && Qa(":"), Od());
    }
    return null;
  }, Dd = function() {
    return r.inline ? null : /* @__PURE__ */ d.createElement(Yt, {
      ref: oe,
      id: r.inputId,
      name: r.name,
      type: "text",
      role: "combobox",
      className: qe(r.inputClassName, H("input", {
        context: a
      })),
      style: r.inputStyle,
      readOnly: r.readOnlyInput,
      disabled: r.disabled,
      required: r.required,
      autoComplete: "off",
      placeholder: r.placeholder,
      tabIndex: r.tabIndex,
      onInput: re,
      onFocus: jt,
      onBlur: At,
      onKeyDown: Le,
      "aria-expanded": v,
      "aria-autocomplete": "none",
      "aria-haspopup": "dialog",
      "aria-controls": vt,
      "aria-labelledby": r.ariaLabelledBy,
      "aria-label": r.ariaLabel,
      inputMode: r.inputMode,
      tooltip: r.tooltip,
      tooltipOptions: r.tooltipOptions,
      pt: S("input"),
      unstyled: r.unstyled,
      __parentMetadata: {
        parent: C
      }
    });
  }, Td = function() {
    return r.showIcon ? /* @__PURE__ */ d.createElement(xn, {
      type: "button",
      icon: r.icon || /* @__PURE__ */ d.createElement(Yc, null),
      onClick: ft,
      tabIndex: "-1",
      disabled: r.disabled,
      "aria-haspopup": "dialog",
      "aria-label": fn("chooseDate", r.locale),
      "aria-expanded": v,
      "aria-controls": vt,
      className: H("dropdownButton"),
      pt: S("dropdownButton"),
      __parentMetadata: {
        parent: C
      }
    }) : null;
  }, kd = function() {
    var s = Dd(), u = Td();
    return r.iconPos === "left" ? /* @__PURE__ */ d.createElement(d.Fragment, null, u, s) : /* @__PURE__ */ d.createElement(d.Fragment, null, s, u);
  }, qd = function() {
    if (r.showButtonBar) {
      var s = En(r.locale), u = s.today, m = s.clear, g = s.now, _ = /* @__PURE__ */ new Date(), L = r.minDate && r.minDate > _ || r.maxDate && r.maxDate < _, G = e({
        className: H("buttonbar")
      }, S("buttonbar"));
      return /* @__PURE__ */ d.createElement("div", G, /* @__PURE__ */ d.createElement(xn, {
        type: "button",
        label: r.showTime ? g : u,
        onClick: Wt,
        onKeyDown: function(Me) {
          return Qe(Me);
        },
        className: qe(r.todayButtonClassName, H("todayButton")),
        pt: S("todayButton"),
        style: L ? {
          visibility: "hidden"
        } : void 0
      }), /* @__PURE__ */ d.createElement(xn, {
        type: "button",
        label: m,
        onClick: en,
        onKeyDown: function(Me) {
          return Qe(Me);
        },
        className: qe(r.clearButtonClassName, H("clearButton")),
        pt: S("clearButton")
      }));
    }
    return null;
  }, Id = function() {
    if (r.footerTemplate) {
      var s = r.footerTemplate(), u = e({
        className: H("footer")
      }, S("footer"));
      return /* @__PURE__ */ d.createElement("div", u, s);
    }
    return null;
  }, Rd = function() {
    if (V === "month") {
      var s = e({
        className: H("monthPicker")
      }, S("monthPicker"));
      return /* @__PURE__ */ d.createElement("div", s, bd().map(function(u, m) {
        var g = Hl(m), _ = e({
          className: H("month", {
            isMonthSelected: Hl,
            isMonthYearDisabled: Rr,
            i: m,
            currentYear: Ne
          }),
          onClick: function(G) {
            return ce(G, m);
          },
          onKeyDown: function(G) {
            return Sn(G, m);
          },
          "data-p-disabled": Rr(m, Ne),
          "data-p-highlight": g
        }, S("month", {
          context: {
            month: u,
            monthIndex: m,
            selected: g,
            disabled: Rr(m, Ne)
          }
        }));
        return /* @__PURE__ */ d.createElement("span", Jt({}, _, {
          key: "month".concat(m + 1)
        }), u, g && /* @__PURE__ */ d.createElement("div", {
          "aria-live": "polite",
          className: "p-hidden-accessible",
          "data-p-hidden-accessible": !0,
          pt: S("hiddenMonth")
        }, u));
      }));
    }
    return null;
  }, Md = function() {
    if (V === "year") {
      var s = e({
        className: H("yearPicker")
      }, S("yearPicker"));
      return /* @__PURE__ */ d.createElement("div", s, ia().map(function(u, m) {
        var g = oi(u), _ = e({
          className: H("year", {
            isYearSelected: oi,
            isMonthYearDisabled: Rr,
            y: u
          }),
          onClick: function(G) {
            return _e(G, u);
          },
          onKeyDown: function(G) {
            return Rn(G, u);
          },
          "data-p-highlight": oi(u),
          "data-p-disabled": Rr(-1, u)
        }, S("year", {
          context: {
            year: u,
            yearIndex: m,
            selected: g,
            disabled: Rr(-1, u)
          }
        }));
        return /* @__PURE__ */ d.createElement("span", Jt({}, _, {
          key: "year".concat(m + 1)
        }), u, g && /* @__PURE__ */ d.createElement("div", {
          "aria-live": "polite",
          className: "p-hidden-accessible",
          "data-p-hidden-accessible": !0,
          pt: S("hiddenYear")
        }, u));
      }));
    }
    return null;
  }, Nd = qe("p-datepicker p-component", r.panelClassName, {
    "p-datepicker-inline": r.inline,
    "p-disabled": r.disabled,
    "p-datepicker-timeonly": r.timeOnly,
    "p-datepicker-multiple-month": r.numberOfMonths > 1,
    "p-datepicker-monthpicker": V === "month",
    "p-datepicker-touch-ui": r.touchUI,
    "p-input-filled": a && a.inputStyle === "filled" || Tt.inputStyle === "filled",
    "p-ripple-disabled": a && a.ripple === !1 || Tt.ripple === !1
  }), _d = kd(), jd = wd(), Ad = Pd(), Ld = qd(), Fd = Id(), $d = Rd(), Hd = Md(), Bd = M.hasClass(oe.current, "p-filled") && oe.current.value !== "", zd = e({
    id: r.id,
    className: qe(r.className, H("root", {
      focusedState: l,
      isFilled: Bd,
      panelVisible: St
    })),
    style: r.style
  }, co.getOtherProps(r), S("root"));
  return /* @__PURE__ */ d.createElement("span", Jt({
    ref: U
  }, zd), _d, /* @__PURE__ */ d.createElement(Xc, {
    hostName: "Calendar",
    id: vt,
    locale: r.locale,
    ref: I,
    className: Nd,
    style: r.panelStyle,
    appendTo: r.appendTo,
    inline: r.inline,
    onClick: h,
    onMouseUp: D,
    in: St,
    onEnter: Xa,
    onEntered: aa,
    onExit: ni,
    onExited: Uu,
    transitionOptions: r.transitionOptions,
    ptm: S,
    cx: H
  }, jd, Ad, $d, Hd, Ld, Fd));
}));
Jc.displayName = "Calendar";
const Fv = ({ config: n, onChange: t }) => {
  const [e, a] = it({ ...Yr, ...n });
  return We(() => {
    a({ ...Yr, ...n });
  }, [n]), Math.random().toString(36).substring(2, 15), /* @__PURE__ */ T.jsx(T.Fragment, { children: /* @__PURE__ */ T.jsx(
    Jc,
    {
      onChange: (r) => {
      },
      dateFormat: "yy-mm-dd"
    }
  ) });
}, $v = (n) => ({});
var Ys;
function Xi() {
  return Xi = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var a in e) ({}).hasOwnProperty.call(e, a) && (n[a] = e[a]);
    }
    return n;
  }, Xi.apply(null, arguments);
}
var Hv = function(t) {
  return /* @__PURE__ */ d.createElement("svg", Xi({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, t), Ys || (Ys = /* @__PURE__ */ d.createElement("path", {
    d: "M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v40H64C28.7 64 0 92.7 0 128v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64h-40V24c0-13.3-10.7-24-24-24s-24 10.7-24 24v40H152zM48 192h80v56H48zm0 104h80v64H48zm128 0h96v64h-96zm144 0h80v64h-80zm80-48h-80v-56h80zm0 160v40c0 8.8-7.2 16-16 16h-64v-56zm-128 0v56h-96v-56zm-144 0v56H64c-8.8 0-16-7.2-16-16v-40zm144-160h-96v-56h96z"
  })));
};
const Bv = ({ config: n, onChange: t }) => {
  const [e, a] = it({ ...Yr, ...n }), r = (o) => {
    const i = { ...e, [o.target.name]: o.target.value };
    a(i), t(i);
  };
  return We(() => {
    a({ ...Yr, ...n });
  }, [n]), /* @__PURE__ */ T.jsx(T.Fragment, { children: /* @__PURE__ */ T.jsxs(Qn, { activeIndex: 0, children: [
    " ",
    /* @__PURE__ */ T.jsx(Vn, { header: "General", children: /* @__PURE__ */ T.jsxs("div", { className: "form-item flex flex-column gap-4", children: [
      /* @__PURE__ */ T.jsxs("div", { className: "flex flex-column gap-2", children: [
        /* @__PURE__ */ T.jsx("label", { htmlFor: "label", children: "Label" }),
        /* @__PURE__ */ T.jsx(
          Yt,
          {
            id: "label",
            value: e.label || "",
            name: "label",
            onChange: r,
            className: "w-full"
          }
        )
      ] }),
      /* @__PURE__ */ T.jsxs("div", { className: "flex flex-column gap-2", children: [
        /* @__PURE__ */ T.jsx("label", { htmlFor: "placeholder", children: "Placeholder" }),
        /* @__PURE__ */ T.jsx(
          Yt,
          {
            id: "placeholder",
            value: e.placeholder || "",
            name: "placeholder",
            onChange: r,
            className: "w-full"
          }
        )
      ] }),
      /* @__PURE__ */ T.jsxs("div", { className: "flex flex-column gap-2", children: [
        /* @__PURE__ */ T.jsx("label", { htmlFor: "format", children: "Format" }),
        /* @__PURE__ */ T.jsx(
          Yt,
          {
            id: "format",
            value: e.format || "",
            name: "format",
            onChange: r,
            className: "w-full"
          }
        ),
        /* @__PURE__ */ T.jsxs("ul", { children: [
          /* @__PURE__ */ T.jsx("li", { children: "d - day of month (no leading zero)" }),
          /* @__PURE__ */ T.jsx("li", { children: "dd - day of month (two digit)" }),
          /* @__PURE__ */ T.jsx("li", { children: "o - day of the year (no leading zeros)" }),
          /* @__PURE__ */ T.jsx("li", { children: "oo - day of the year (three digit)" }),
          /* @__PURE__ */ T.jsx("li", { children: "D - day name short" }),
          /* @__PURE__ */ T.jsx("li", { children: "DD - day name long" }),
          /* @__PURE__ */ T.jsx("li", { children: "m - month of year (no leading zero)" }),
          /* @__PURE__ */ T.jsx("li", { children: "mm - month of year (two digit)" }),
          /* @__PURE__ */ T.jsx("li", { children: "M - month name short" }),
          /* @__PURE__ */ T.jsx("li", { children: "MM - month name long" }),
          /* @__PURE__ */ T.jsx("li", { children: "y - year (two digit)" }),
          /* @__PURE__ */ T.jsx("li", { children: "yy - year (four digit)" })
        ] })
      ] })
    ] }) }, "general"),
    " "
  ] }) });
}, zv = (n) => ({}), Vv = new Qr({
  type: Yr.type,
  form: new Tn({
    render: Fv,
    validation: $v
  }),
  settings: new Tn({
    render: Bv,
    validation: zv
  }),
  heading: "Date picker input",
  description: "a simple box to select a date",
  hidden: !1,
  icon: Hv,
  config: Yr
}), Pr = {
  id: mr(),
  type: "input-number",
  label: "",
  value: "",
  placeholder: ""
}, Wv = ({ config: n, onChange: t }) => {
  const [e, a] = it({ ...Pr, ...n });
  We(() => {
    a({ ...Pr, ...n });
  }, [n]);
  const r = (i) => {
    const l = { ...Pr, ...n, value: i.target.value };
    t(l);
  }, o = Math.random().toString(36).substring(2, 15);
  return /* @__PURE__ */ T.jsx(T.Fragment, { children: /* @__PURE__ */ T.jsxs("div", { className: "flex flex-column gap-2", children: [
    /* @__PURE__ */ T.jsx("label", { htmlFor: o, children: e.label }),
    /* @__PURE__ */ T.jsx(
      Yt,
      {
        type: "number",
        value: e.value,
        onChange: r,
        placeholder: e.placeholder || "",
        className: "w-full",
        id: o
      }
    )
  ] }) });
}, Kv = (n) => ({});
var Gs;
function Ji() {
  return Ji = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var a in e) ({}).hasOwnProperty.call(e, a) && (n[a] = e[a]);
    }
    return n;
  }, Ji.apply(null, arguments);
}
var Uv = function(t) {
  return /* @__PURE__ */ d.createElement("svg", Ji({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 320 512"
  }, t), Gs || (Gs = /* @__PURE__ */ d.createElement("path", {
    d: "M0 64c0-17.7 14.3-32 32-32h256c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-224 384c-8.9 15.3-28.5 20.4-43.8 11.5s-20.4-28.5-11.5-43.8L232.3 96H32C14.3 96 0 81.7 0 64"
  })));
};
const Yv = ({ config: n, onChange: t }) => {
  const [e, a] = it({ ...Pr, ...n }), r = (o) => {
    const i = { ...e, [o.target.name]: o.target.value };
    a(i), t(i);
  };
  return We(() => {
    a({ ...Pr, ...n });
  }, [n]), /* @__PURE__ */ T.jsx(T.Fragment, { children: /* @__PURE__ */ T.jsxs(Qn, { activeIndex: 0, children: [
    " ",
    /* @__PURE__ */ T.jsx(Vn, { header: "General", children: /* @__PURE__ */ T.jsxs("div", { className: "form-item flex flex-column gap-4", children: [
      /* @__PURE__ */ T.jsxs("div", { className: "flex flex-column gap-2", children: [
        /* @__PURE__ */ T.jsx("label", { htmlFor: "label", children: "Label" }),
        /* @__PURE__ */ T.jsx(
          Yt,
          {
            id: "label",
            value: e.label || "",
            name: "label",
            onChange: r,
            className: "w-full"
          }
        )
      ] }),
      /* @__PURE__ */ T.jsxs("div", { className: "flex flex-column gap-2", children: [
        /* @__PURE__ */ T.jsx("label", { htmlFor: "placeholder", children: "Placeholder" }),
        /* @__PURE__ */ T.jsx(
          Yt,
          {
            id: "placeholder",
            value: e.placeholder || "",
            name: "placeholder",
            onChange: r,
            className: "w-full"
          }
        )
      ] })
    ] }) }, "general"),
    " "
  ] }) });
}, Gv = (n) => ({}), Xv = new Qr({
  type: Pr.type,
  form: new Tn({
    render: Wv,
    validation: Kv
  }),
  settings: new Tn({
    render: Yv,
    validation: Gv
  }),
  heading: "Number input",
  description: "a simple box to insert a number value into",
  hidden: !1,
  icon: Uv,
  config: Pr
}), Dr = {
  id: mr(),
  type: "select-select",
  label: "",
  value: "",
  options: [],
  placeholder: ""
};
function Zi() {
  return Zi = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
    }
    return n;
  }, Zi.apply(this, arguments);
}
var za = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(n, t) {
  var e = bn.getPTI(n);
  return /* @__PURE__ */ d.createElement("svg", Zi({
    ref: t,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e), /* @__PURE__ */ d.createElement("path", {
    d: "M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",
    fill: "currentColor"
  }));
}));
za.displayName = "TimesIcon";
function Qi() {
  return Qi = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
    }
    return n;
  }, Qi.apply(this, arguments);
}
var Zc = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(n, t) {
  var e = bn.getPTI(n);
  return /* @__PURE__ */ d.createElement("svg", Qi({
    ref: t,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e), /* @__PURE__ */ d.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z",
    fill: "currentColor"
  }));
}));
Zc.displayName = "SearchIcon";
function el() {
  return el = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
    }
    return n;
  }, el.apply(this, arguments);
}
function Ma(n) {
  "@babel/helpers - typeof";
  return Ma = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ma(n);
}
function Jv(n, t) {
  if (Ma(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var a = e.call(n, t || "default");
    if (Ma(a) !== "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function Zv(n) {
  var t = Jv(n, "string");
  return Ma(t) === "symbol" ? t : String(t);
}
function Qc(n, t, e) {
  return t = Zv(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function Qv(n) {
  if (Array.isArray(n)) return n;
}
function em(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var a, r, o, i, l = [], c = !0, f = !1;
    try {
      if (o = (e = e.call(n)).next, t === 0) {
        if (Object(e) !== e) return;
        c = !1;
      } else for (; !(c = (a = o.call(e)).done) && (l.push(a.value), l.length !== t); c = !0) ;
    } catch (p) {
      f = !0, r = p;
    } finally {
      try {
        if (!c && e.return != null && (i = e.return(), Object(i) !== i)) return;
      } finally {
        if (f) throw r;
      }
    }
    return l;
  }
}
function Xs(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, a = new Array(t); e < t; e++) a[e] = n[e];
  return a;
}
function tm(n, t) {
  if (n) {
    if (typeof n == "string") return Xs(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Xs(n, t);
  }
}
function nm() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Yn(n, t) {
  return Qv(n) || em(n, t) || tm(n, t) || nm();
}
var rm = `
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
`, uo = ot.extend({
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
    styles: rm
  }
});
function Js(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function Lr(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Js(Object(e), !0).forEach(function(a) {
      Qc(n, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Js(Object(e)).forEach(function(a) {
      Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return n;
}
var eu = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(n, t) {
  var e = cn(), a = d.useContext(Vt), r = uo.getProps(n, a), o = Ur(n) || {}, i = r.orientation === "vertical", l = r.orientation === "horizontal", c = r.orientation === "both", f = d.useState(c ? {
    rows: 0,
    cols: 0
  } : 0), p = Yn(f, 2), v = p[0], x = p[1], b = d.useState(c ? {
    rows: 0,
    cols: 0
  } : 0), k = Yn(b, 2), y = k[0], q = k[1], O = d.useState(0), E = Yn(O, 2), P = E[0], A = E[1], C = d.useState(c ? {
    rows: 0,
    cols: 0
  } : 0), K = Yn(C, 2), S = K[0], H = K[1], X = d.useState(r.numToleratedItems), U = Yn(X, 2), I = U[0], oe = U[1], Y = d.useState(r.loading || !1), ve = Yn(Y, 2), ge = ve[0], Ce = ve[1], Oe = d.useState([]), we = Yn(Oe, 2), de = we[0], F = we[1], se = uo.setMetaData({
    props: r,
    state: {
      first: v,
      last: y,
      page: P,
      numItemsInViewport: S,
      numToleratedItems: I,
      loading: ge,
      loaderArr: de
    }
  }), ae = se.ptm;
  Cr(uo.css.styles, {
    name: "virtualscroller"
  });
  var N = d.useRef(null), j = d.useRef(null), B = d.useRef(null), Z = d.useRef(null), ie = d.useRef(c ? {
    top: 0,
    left: 0
  } : 0), V = d.useRef(null), z = d.useRef(null), ee = d.useRef({}), Ee = d.useRef({}), te = d.useRef(null), Ae = d.useRef(null), Je = d.useRef(null), Ue = d.useRef(null), Ne = d.useRef(!1), nt = d.useRef(null), $t = yl({
    listener: function($) {
      return ht();
    },
    when: !r.disabled
  }), It = Yn($t, 1), Ze = It[0], Ct = pr({
    target: "window",
    type: "orientationchange",
    listener: function($) {
      return ht();
    },
    when: !r.disabled
  }), _t = Yn(Ct, 1), St = _t[0], Ot = function() {
    return N;
  }, vt = function($) {
    return Math.floor(($ + I * 4) / (r.step || 1));
  }, on = function($) {
    j.current = $ || j.current || M.findSingle(N.current, ".p-virtualscroller-content");
  }, mt = function($) {
    return r.step ? P !== vt($) : !0;
  }, Pt = function($) {
    ie.current = c ? {
      top: 0,
      left: 0
    } : 0, N.current && N.current.scrollTo($);
  }, Rt = function($) {
    var W = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "auto", ue = re(), me = ue.numToleratedItems, he = $e(), be = function() {
      var Dt = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, pt = arguments.length > 1 ? arguments[1] : void 0;
      return Dt <= pt ? 0 : Dt;
    }, Te = function(Dt, pt, tt) {
      return Dt * pt + tt;
    }, Ye = function() {
      var Dt = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, pt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return Pt({
        left: Dt,
        top: pt,
        behavior: W
      });
    }, Fe = c ? {
      rows: 0,
      cols: 0
    } : 0, gt = !1;
    c ? (Fe = {
      rows: be($[0], me[0]),
      cols: be($[1], me[1])
    }, Ye(Te(Fe.cols, r.itemSize[1], he.left), Te(Fe.rows, r.itemSize[0], he.top)), gt = v.rows !== Fe.rows || v.cols !== Fe.cols) : (Fe = be($, me), l ? Ye(Te(Fe, r.itemSize, he.left), 0) : Ye(0, Te(Fe, r.itemSize, he.top)), gt = v !== Fe), Ne.current = gt, x(Fe);
  }, Ht = function($, W) {
    var ue = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "auto";
    if (W) {
      var me = Le(), he = me.first, be = me.viewport, Te = function() {
        var pt = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, tt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        return Pt({
          left: pt,
          top: tt,
          behavior: ue
        });
      }, Ye = W === "to-start", Fe = W === "to-end";
      if (Ye) {
        if (c)
          be.first.rows - he.rows > $[0] ? Te(be.first.cols * r.itemSize[1], (be.first.rows - 1) * r.itemSize[0]) : be.first.cols - he.cols > $[1] && Te((be.first.cols - 1) * r.itemSize[1], be.first.rows * r.itemSize[0]);
        else if (be.first - he > $) {
          var gt = (be.first - 1) * r.itemSize;
          l ? Te(gt, 0) : Te(0, gt);
        }
      } else if (Fe) {
        if (c)
          be.last.rows - he.rows <= $[0] + 1 ? Te(be.first.cols * r.itemSize[1], (be.first.rows + 1) * r.itemSize[0]) : be.last.cols - he.cols <= $[1] + 1 && Te((be.first.cols + 1) * r.itemSize[1], be.first.rows * r.itemSize[0]);
        else if (be.last - he <= $ + 1) {
          var Lt = (be.first + 1) * r.itemSize;
          l ? Te(Lt, 0) : Te(0, Lt);
        }
      }
    } else
      Rt($, ue);
  }, jt = function() {
    return ge ? r.loaderDisabled ? de : [] : fe();
  }, At = function() {
    return r.columns && c || l ? ge && r.loaderDisabled ? c ? de[0] : de : r.columns.slice(c ? v.cols : v, c ? y.cols : y) : r.columns;
  }, Le = function() {
    var $ = function(Fe, gt) {
      return Math.floor(Fe / (gt || Fe));
    }, W = v, ue = 0;
    if (N.current) {
      var me = N.current, he = me.scrollTop, be = me.scrollLeft;
      if (c)
        W = {
          rows: $(he, r.itemSize[0]),
          cols: $(be, r.itemSize[1])
        }, ue = {
          rows: W.rows + S.rows,
          cols: W.cols + S.cols
        };
      else {
        var Te = l ? be : he;
        W = $(Te, r.itemSize), ue = W + S;
      }
    }
    return {
      first: v,
      last: y,
      viewport: {
        first: W,
        last: ue
      }
    };
  }, re = function() {
    var $ = $e(), W = N.current ? N.current.offsetWidth - $.left : 0, ue = N.current ? N.current.offsetHeight - $.top : 0, me = function(Fe, gt) {
      return Math.ceil(Fe / (gt || Fe));
    }, he = function(Fe) {
      return Math.ceil(Fe / 2);
    }, be = c ? {
      rows: me(ue, r.itemSize[0]),
      cols: me(W, r.itemSize[1])
    } : me(l ? W : ue, r.itemSize), Te = I || (c ? [he(be.rows), he(be.cols)] : he(be));
    return {
      numItemsInViewport: be,
      numToleratedItems: Te
    };
  }, De = function() {
    var $ = re(), W = $.numItemsInViewport, ue = $.numToleratedItems, me = function(Te, Ye, Fe) {
      var gt = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      return je(Te + Ye + (Te < Fe ? 2 : 3) * Fe, gt);
    }, he = c ? {
      rows: me(v.rows, W.rows, ue[0]),
      cols: me(v.cols, W.cols, ue[1], !0)
    } : me(v, W, ue);
    H(W), oe(ue), q(he), r.showLoader && F(c ? Array.from({
      length: W.rows
    }).map(function() {
      return Array.from({
        length: W.cols
      });
    }) : Array.from({
      length: W
    })), r.lazy && Promise.resolve().then(function() {
      nt.current = {
        first: r.step ? c ? {
          rows: 0,
          cols: v.cols
        } : 0 : v,
        last: Math.min(r.step ? r.step : he, (r.items || []).length)
      }, r.onLazyLoad && r.onLazyLoad(nt.current);
    });
  }, Be = function($) {
    r.autoSize && !$ && Promise.resolve().then(function() {
      if (j.current) {
        j.current.style.minHeight = j.current.style.minWidth = "auto", j.current.style.position = "relative", N.current.style.contain = "none";
        var W = [M.getWidth(N.current), M.getHeight(N.current)], ue = W[0], me = W[1];
        (c || l) && (N.current.style.width = (ue < te.current ? ue : r.scrollWidth || te.current) + "px"), (c || i) && (N.current.style.height = (me < Ae.current ? me : r.scrollHeight || Ae.current) + "px"), j.current.style.minHeight = j.current.style.minWidth = "", j.current.style.position = "", N.current.style.contain = "";
      }
    });
  }, je = function() {
    var $, W = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, ue = arguments.length > 1 ? arguments[1] : void 0;
    return r.items ? Math.min(ue ? (($ = r.columns || r.items[0]) === null || $ === void 0 ? void 0 : $.length) || 0 : (r.items || []).length, W) : 0;
  }, $e = function() {
    if (j.current) {
      var $ = getComputedStyle(j.current), W = parseFloat($.paddingLeft) + Math.max(parseFloat($.left) || 0, 0), ue = parseFloat($.paddingRight) + Math.max(parseFloat($.right) || 0, 0), me = parseFloat($.paddingTop) + Math.max(parseFloat($.top) || 0, 0), he = parseFloat($.paddingBottom) + Math.max(parseFloat($.bottom) || 0, 0);
      return {
        left: W,
        right: ue,
        top: me,
        bottom: he,
        x: W + ue,
        y: me + he
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
  }, ft = function() {
    if (N.current) {
      var $ = N.current.parentElement, W = r.scrollWidth || "".concat(N.current.offsetWidth || $.offsetWidth, "px"), ue = r.scrollHeight || "".concat(N.current.offsetHeight || $.offsetHeight, "px"), me = function(be, Te) {
        return N.current.style[be] = Te;
      };
      c || l ? (me("height", ue), me("width", W)) : me("height", ue);
    }
  }, Mt = function() {
    var $ = r.items;
    if ($) {
      var W = $e(), ue = function(he, be, Te) {
        var Ye = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
        return Ee.current = Lr(Lr({}, Ee.current), Qc({}, "".concat(he), (be || []).length * Te + Ye + "px"));
      };
      c ? (ue("height", $, r.itemSize[0], W.y), ue("width", r.columns || $[1], r.itemSize[1], W.x)) : l ? ue("width", r.columns || $, r.itemSize, W.x) : ue("height", $, r.itemSize, W.y);
    }
  }, rt = function($) {
    if (j.current && !r.appendOnly) {
      var W = $ ? $.first : v, ue = function(Te, Ye) {
        return Te * Ye;
      }, me = function() {
        var Te = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, Ye = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        Z.current && (Z.current.style.top = "-".concat(Ye, "px")), ee.current = Lr(Lr({}, ee.current), {
          transform: "translate3d(".concat(Te, "px, ").concat(Ye, "px, 0)")
        });
      };
      if (c)
        me(ue(W.cols, r.itemSize[1]), ue(W.rows, r.itemSize[0]));
      else {
        var he = ue(W, r.itemSize);
        l ? me(he, 0) : me(0, he);
      }
    }
  }, Qe = function($) {
    var W = $.target, ue = $e(), me = function(xt, un) {
      return xt ? xt > un ? xt - un : xt : 0;
    }, he = function(xt, un) {
      return Math.floor(xt / (un || xt));
    }, be = function(xt, un, Ln, mn, Sn, Rn) {
      return xt <= Sn ? Sn : Rn ? Ln - mn - Sn : un + Sn - 1;
    }, Te = function(xt, un, Ln, mn, Sn, Rn, wn) {
      return xt <= Rn ? 0 : Math.max(0, wn ? xt < un ? Ln : xt - Rn : xt > un ? Ln : xt - 2 * Rn);
    }, Ye = function(xt, un, Ln, mn, Sn, Rn) {
      var wn = un + mn + 2 * Sn;
      return xt >= Sn && (wn = wn + (Sn + 1)), je(wn, Rn);
    }, Fe = me(W.scrollTop, ue.top), gt = me(W.scrollLeft, ue.left), Lt = c ? {
      rows: 0,
      cols: 0
    } : 0, Dt = y, pt = !1, tt = ie.current;
    if (c) {
      var Gt = ie.current.top <= Fe, vn = ie.current.left <= gt;
      if (!r.appendOnly || r.appendOnly && (Gt || vn)) {
        var An = {
          rows: he(Fe, r.itemSize[0]),
          cols: he(gt, r.itemSize[1])
        }, er = {
          rows: be(An.rows, v.rows, y.rows, S.rows, I[0], Gt),
          cols: be(An.cols, v.cols, y.cols, S.cols, I[1], vn)
        };
        Lt = {
          rows: Te(An.rows, er.rows, v.rows, y.rows, S.rows, I[0], Gt),
          cols: Te(An.cols, er.cols, v.cols, y.cols, S.cols, I[1], vn)
        }, Dt = {
          rows: Ye(An.rows, Lt.rows, y.rows, S.rows, I[0]),
          cols: Ye(An.cols, Lt.cols, y.cols, S.cols, I[1], !0)
        }, pt = Lt.rows !== v.rows || Dt.rows !== y.rows || Lt.cols !== v.cols || Dt.cols !== y.cols || Ne.current, tt = {
          top: Fe,
          left: gt
        };
      }
    } else {
      var tr = l ? gt : Fe, nr = ie.current <= tr;
      if (!r.appendOnly || r.appendOnly && nr) {
        var rr = he(tr, r.itemSize), Nt = be(rr, v, y, S, I, nr);
        Lt = Te(rr, Nt, v, y, S, I, nr), Dt = Ye(rr, Lt, y, S, I), pt = Lt !== v || Dt !== y || Ne.current, tt = tr;
      }
    }
    return {
      first: Lt,
      last: Dt,
      isRangeChanged: pt,
      scrollPos: tt
    };
  }, et = function($) {
    var W = Qe($), ue = W.first, me = W.last, he = W.isRangeChanged, be = W.scrollPos;
    if (he) {
      var Te = {
        first: ue,
        last: me
      };
      if (rt(Te), x(ue), q(me), ie.current = be, r.onScrollIndexChange && r.onScrollIndexChange(Te), r.lazy && mt(ue)) {
        var Ye = {
          first: r.step ? Math.min(vt(ue) * r.step, (r.items || []).length - r.step) : ue,
          last: Math.min(r.step ? (vt(ue) + 1) * r.step : me, (r.items || []).length)
        }, Fe = !nt.current || nt.current.first !== Ye.first || nt.current.last !== Ye.last;
        Fe && r.onLazyLoad && r.onLazyLoad(Ye), nt.current = Ye;
      }
    }
  }, lt = function($) {
    if (r.onScroll && r.onScroll($), r.delay) {
      if (V.current && clearTimeout(V.current), mt(v)) {
        if (!ge && r.showLoader) {
          var W = Qe($), ue = W.isRangeChanged, me = ue || (r.step ? mt(v) : !1);
          me && Ce(!0);
        }
        V.current = setTimeout(function() {
          et($), ge && r.showLoader && (!r.lazy || r.loading === void 0) && (Ce(!1), A(vt(v)));
        }, r.delay);
      }
    } else
      et($);
  }, ht = function() {
    z.current && clearTimeout(z.current), z.current = setTimeout(function() {
      if (N.current) {
        var $ = [M.getWidth(N.current), M.getHeight(N.current)], W = $[0], ue = $[1], me = W !== te.current, he = ue !== Ae.current, be = c ? me || he : l ? me : i ? he : !1;
        be && (oe(r.numToleratedItems), te.current = W, Ae.current = ue, Je.current = M.getWidth(j.current), Ue.current = M.getHeight(j.current));
      }
    }, r.resizeDelay);
  }, Ie = function($) {
    var W = (r.items || []).length, ue = c ? v.rows + $ : v + $;
    return {
      index: ue,
      count: W,
      first: ue === 0,
      last: ue === W - 1,
      even: ue % 2 === 0,
      odd: ue % 2 !== 0,
      props: r
    };
  }, J = function($, W) {
    var ue = de.length || 0;
    return Lr({
      index: $,
      count: ue,
      first: $ === 0,
      last: $ === ue - 1,
      even: $ % 2 === 0,
      odd: $ % 2 !== 0,
      props: r
    }, W);
  }, fe = function() {
    var $ = r.items;
    return $ && !ge ? c ? $.slice(r.appendOnly ? 0 : v.rows, y.rows).map(function(W) {
      return r.columns ? W : W.slice(r.appendOnly ? 0 : v.cols, y.cols);
    }) : l && r.columns ? $ : $.slice(r.appendOnly ? 0 : v, y) : [];
  }, pe = function() {
    N.current && M.isVisible(N.current) && (on(j.current), Pe(), Ze(), St(), te.current = M.getWidth(N.current), Ae.current = M.getHeight(N.current), Je.current = M.getWidth(j.current), Ue.current = M.getHeight(j.current));
  }, Pe = function() {
    r.disabled || (ft(), De(), Mt());
  };
  qn(function() {
    pe();
  }), dt(function() {
    Pe();
  }, [r.itemSize, r.scrollHeight, r.scrollWidth]), dt(function() {
    r.numToleratedItems !== I && oe(r.numToleratedItems);
  }, [r.numToleratedItems]), dt(function() {
    r.numToleratedItems === I && Pe();
  }, [I]), dt(function() {
    var Se = o.items !== void 0 && o.items !== null, $ = r.items !== void 0 && r.items !== null, W = Se ? o.items.length : 0, ue = $ ? r.items.length : 0, me = W !== ue;
    if (c && !me) {
      var he = Se && o.items.length > 0 ? o.items[0].length : 0, be = $ && r.items.length > 0 ? r.items[0].length : 0;
      me = he !== be;
    }
    (!Se || me) && Pe();
    var Te = ge;
    r.lazy && o.loading !== r.loading && r.loading !== ge && (Ce(r.loading), Te = r.loading), Be(Te);
  }), dt(function() {
    ie.current = c ? {
      top: 0,
      left: 0
    } : 0;
  }, [r.orientation]), d.useImperativeHandle(t, function() {
    return {
      props: r,
      getElementRef: Ot,
      scrollTo: Pt,
      scrollToIndex: Rt,
      scrollInView: Ht,
      getRenderedRange: Le
    };
  });
  var st = function($) {
    var W = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, ue = J($, W), me = Q.getJSXElement(r.loadingTemplate, ue);
    return /* @__PURE__ */ d.createElement(d.Fragment, {
      key: $
    }, me);
  }, wt = function() {
    var $ = "p-virtualscroller-loading-icon", W = e({
      className: $
    }, ae("loadingIcon")), ue = r.loadingIcon || /* @__PURE__ */ d.createElement(Wo, el({}, W, {
      spin: !0
    })), me = Ut.getJSXIcon(ue, Lr({}, W), {
      props: r
    });
    if (!r.loaderDisabled && r.showLoader && ge) {
      var he = qe("p-virtualscroller-loader", {
        "p-component-overlay": !r.loadingTemplate
      }), be = me;
      if (r.loadingTemplate)
        be = de.map(function(Fe, gt) {
          return st(gt, c && {
            numCols: S.cols
          });
        });
      else if (r.loaderIconTemplate) {
        var Te = {
          iconClassName: $,
          element: be,
          props: r
        };
        be = Q.getJSXElement(r.loaderIconTemplate, Te);
      }
      var Ye = e({
        className: he
      }, ae("loader"));
      return /* @__PURE__ */ d.createElement("div", Ye, be);
    }
    return null;
  }, Bt = function() {
    if (r.showSpacer) {
      var $ = e({
        ref: B,
        style: Ee.current,
        className: "p-virtualscroller-spacer"
      }, ae("spacer"));
      return /* @__PURE__ */ d.createElement("div", $);
    }
    return null;
  }, Qt = function($, W) {
    var ue = Ie(W), me = Q.getJSXElement(r.itemTemplate, $, ue);
    return /* @__PURE__ */ d.createElement(d.Fragment, {
      key: ue.index
    }, me);
  }, zt = function() {
    var $ = fe();
    return $.map(Qt);
  }, Wt = function() {
    var $ = zt(), W = qe("p-virtualscroller-content", {
      "p-virtualscroller-loading": ge
    }), ue = e({
      ref: j,
      style: ee.current,
      className: W
    }, ae("content")), me = /* @__PURE__ */ d.createElement("div", ue, $);
    if (r.contentTemplate) {
      var he = {
        style: ee.current,
        className: W,
        spacerStyle: Ee.current,
        contentRef: function(Te) {
          return j.current = Q.getRefElement(Te);
        },
        spacerRef: function(Te) {
          return B.current = Q.getRefElement(Te);
        },
        stickyRef: function(Te) {
          return Z.current = Q.getRefElement(Te);
        },
        items: fe(),
        getItemOptions: function(Te) {
          return Ie(Te);
        },
        children: $,
        element: me,
        props: r,
        loading: ge,
        getLoaderOptions: function(Te, Ye) {
          return J(Te, Ye);
        },
        loadingTemplate: r.loadingTemplate,
        itemSize: r.itemSize,
        rows: jt(),
        columns: At(),
        vertical: i,
        horizontal: l,
        both: c
      };
      return Q.getJSXElement(r.contentTemplate, he);
    }
    return me;
  };
  if (r.disabled) {
    var en = Q.getJSXElement(r.contentTemplate, {
      items: r.items,
      rows: r.items,
      columns: r.columns
    });
    return /* @__PURE__ */ d.createElement(d.Fragment, null, r.children, en);
  }
  var h = qe("p-virtualscroller", {
    "p-virtualscroller-inline": r.inline,
    "p-virtualscroller-both p-both-scroll": c,
    "p-virtualscroller-horizontal p-horizontal-scroll": l
  }, r.className), D = wt(), ne = Wt(), xe = Bt(), Re = e({
    ref: N,
    className: h,
    tabIndex: r.tabIndex,
    style: r.style,
    onScroll: function($) {
      return lt($);
    }
  }, uo.getOtherProps(r), ae("root"));
  return /* @__PURE__ */ d.createElement("div", Re, ne, xe, D);
}));
eu.displayName = "VirtualScroller";
function tl() {
  return tl = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
    }
    return n;
  }, tl.apply(this, arguments);
}
var tu = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(n, t) {
  var e = bn.getPTI(n);
  return /* @__PURE__ */ d.createElement("svg", tl({
    ref: t,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e), /* @__PURE__ */ d.createElement("path", {
    d: "M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z",
    fill: "currentColor"
  }));
}));
tu.displayName = "CheckIcon";
function Jn() {
  return Jn = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
    }
    return n;
  }, Jn.apply(this, arguments);
}
function Xr(n) {
  "@babel/helpers - typeof";
  return Xr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xr(n);
}
function am(n, t) {
  if (Xr(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var a = e.call(n, t || "default");
    if (Xr(a) !== "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function om(n) {
  var t = am(n, "string");
  return Xr(t) === "symbol" ? t : String(t);
}
function Ko(n, t, e) {
  return t = om(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function im(n) {
  if (Array.isArray(n)) return n;
}
function lm(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var a, r, o, i, l = [], c = !0, f = !1;
    try {
      if (o = (e = e.call(n)).next, t !== 0) for (; !(c = (a = o.call(e)).done) && (l.push(a.value), l.length !== t); c = !0) ;
    } catch (p) {
      f = !0, r = p;
    } finally {
      try {
        if (!c && e.return != null && (i = e.return(), Object(i) !== i)) return;
      } finally {
        if (f) throw r;
      }
    }
    return l;
  }
}
function Zs(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, a = new Array(t); e < t; e++) a[e] = n[e];
  return a;
}
function sm(n, t) {
  if (n) {
    if (typeof n == "string") return Zs(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Zs(n, t);
  }
}
function cm() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pa(n, t) {
  return im(n) || lm(n, t) || sm(n, t) || cm();
}
function Qs(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function um(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qs(Object(e), !0).forEach(function(a) {
      Ko(n, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Qs(Object(e)).forEach(function(a) {
      Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return n;
}
var dm = {
  root: function(t) {
    var e = t.props, a = t.focusedState, r = t.overlayVisibleState, o = t.context;
    return qe("p-dropdown p-component p-inputwrapper", {
      "p-disabled": e.disabled,
      "p-invalid": e.invalid,
      "p-focus": a,
      "p-variant-filled": e.variant ? e.variant === "filled" : o && o.inputStyle === "filled",
      "p-dropdown-clearable": e.showClear && !e.disabled,
      "p-inputwrapper-filled": Q.isNotEmpty(e.value),
      "p-inputwrapper-focus": a || r
    });
  },
  input: function(t) {
    var e = t.props, a = t.label;
    return e.editable ? "p-dropdown-label p-inputtext" : qe("p-dropdown-label p-inputtext", {
      "p-placeholder": a === null && e.placeholder,
      "p-dropdown-label-empty": a === null && !e.placeholder
    });
  },
  trigger: "p-dropdown-trigger",
  emptyMessage: "p-dropdown-empty-message",
  itemGroup: function(t) {
    var e = t.optionGroupLabel;
    return qe("p-dropdown-item-group", {
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
    return qe("p-dropdown-filter-container", {
      "p-dropdown-clearable-filter": !!e
    });
  },
  filterInput: function(t) {
    var e = t.props, a = t.context;
    return qe("p-dropdown-filter p-inputtext p-component", {
      "p-variant-filled": e.variant ? e.variant === "filled" : a && a.inputStyle === "filled"
    });
  },
  list: function(t) {
    var e = t.virtualScrollerOptions;
    return "p-dropdown-items";
  },
  panel: function(t) {
    var e = t.context;
    return qe("p-dropdown-panel p-component", {
      "p-input-filled": e && e.inputStyle === "filled" || Tt.inputStyle === "filled",
      "p-ripple-disabled": e && e.ripple === !1 || Tt.ripple === !1
    });
  },
  item: function(t) {
    var e = t.selected, a = t.disabled, r = t.label, o = t.index, i = t.focusedOptionIndex, l = t.highlightOnSelect;
    return qe("p-dropdown-item", {
      "p-highlight": e && l,
      "p-disabled": a,
      "p-focus": o === i,
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
}, fm = `
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
`, pm = {
  wrapper: function(t) {
    var e = t.props;
    return {
      maxHeight: e.scrollHeight || "auto"
    };
  },
  panel: function(t) {
    var e = t.props;
    return um({}, e.panelStyle);
  }
}, fo = ot.extend({
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
    classes: dm,
    styles: fm,
    inlineStyles: pm
  }
}), nu = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(n, t) {
  var e = bn.getPTI(n);
  return /* @__PURE__ */ d.createElement("svg", Jn({
    ref: t,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e), /* @__PURE__ */ d.createElement("rect", {
    width: "1",
    height: "1",
    fill: "currentColor",
    fillOpacity: "0"
  }));
}));
nu.displayName = "BlankIcon";
var ru = /* @__PURE__ */ d.memo(function(n) {
  var t = cn(), e = n.ptm, a = n.cx, r = n.selected, o = n.disabled, i = n.option, l = n.label, c = n.index, f = n.focusedOptionIndex, p = n.ariaSetSize, v = n.checkmark, x = n.highlightOnSelect, b = n.onInputKeyDown, k = function(C) {
    return e(C, {
      context: {
        selected: r,
        disabled: o,
        focused: c === f
      }
    });
  }, y = function(C, K) {
    n.onClick && n.onClick({
      originalEvent: C,
      option: i
    });
  }, q = n.template ? Q.getJSXElement(n.template, n.option) : n.label, O = t({
    id: "dropdownItem_".concat(c),
    role: "option",
    key: n.label,
    className: qe(i.className, a("item", {
      selected: r,
      disabled: o,
      label: l,
      index: c,
      focusedOptionIndex: f,
      highlightOnSelect: x
    })),
    style: n.style,
    tabIndex: 0,
    onClick: function(C) {
      return y(C);
    },
    onKeyDown: function(C) {
      return b(C);
    },
    onMouseMove: function(C) {
      return n == null ? void 0 : n.onMouseMove(C, c);
    },
    "aria-setsize": p,
    "aria-posinset": c + 1,
    "aria-label": l,
    "aria-selected": r,
    "data-p-highlight": r,
    "data-p-focused": f === c,
    "data-p-disabled": o
  }, k("item")), E = t({
    className: a("itemLabel")
  }, k("itemLabel")), P = function() {
    if (r) {
      var C = t({
        className: a("checkIcon")
      }, k("checkIcon"));
      return /* @__PURE__ */ d.createElement(tu, C);
    }
    var K = t({
      className: a("blankIcon")
    }, k("blankIcon"));
    return /* @__PURE__ */ d.createElement(nu, K);
  };
  return /* @__PURE__ */ d.createElement("li", O, v && P(), /* @__PURE__ */ d.createElement("span", E, q), /* @__PURE__ */ d.createElement(Kt, null));
});
ru.displayName = "DropdownItem";
function ec(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function Nn(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ec(Object(e), !0).forEach(function(a) {
      Ko(n, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : ec(Object(e)).forEach(function(a) {
      Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return n;
}
var au = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(n, t) {
  var e = cn(), a = n.ptm, r = n.cx, o = n.sx, i = d.useContext(Vt), l = d.useRef(null), c = !(n.visibleOptions && n.visibleOptions.length) && n.hasFilter, f = n.visibleOptions ? n.visibleOptions.length : 0, p = {
    filter: function(U) {
      return k(U);
    },
    reset: function() {
      return n.resetFilter();
    }
  }, v = function(U, I) {
    return a(U, Nn({
      hostName: n.hostName
    }, I));
  }, x = function() {
    n.onEnter(function() {
      if (n.virtualScrollerRef.current) {
        var U = n.getSelectedOptionIndex();
        U !== -1 && setTimeout(function() {
          return n.virtualScrollerRef.current.scrollToIndex(U);
        }, 0);
      }
    });
  }, b = function() {
    n.onEntered(function() {
      n.filter && n.filterInputAutoFocus && M.focus(l.current, !1);
    });
  }, k = function(U) {
    n.onFilterInputChange && n.onFilterInputChange(U);
  }, y = function() {
    if (n.panelFooterTemplate) {
      var U = Q.getJSXElement(n.panelFooterTemplate, n, n.onOverlayHide), I = e({
        className: r("footer")
      }, v("footer"));
      return /* @__PURE__ */ d.createElement("div", I, U);
    }
    return null;
  }, q = function(U, I) {
    if (n.focusOnHover) {
      var oe;
      n == null || (oe = n.changeFocusedOptionIndex) === null || oe === void 0 || oe.call(n, U, I);
    }
  }, O = function(U, I) {
    var oe = Q.getJSXElement(U, n) || fn(I ? "emptyFilterMessage" : "emptyMessage"), Y = e({
      className: r("emptyMessage")
    }, v("emptyMessage"));
    return /* @__PURE__ */ d.createElement("li", Y, oe);
  }, E = function(U, I) {
    var oe = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, Y = {
      height: oe.props ? oe.props.itemSize : void 0
    };
    if (Y = Nn(Nn({}, Y), U.style), U.group && U.optionGroup && n.optionGroupLabel) {
      var ve = n.optionGroupLabel, ge = n.optionGroupTemplate ? Q.getJSXElement(n.optionGroupTemplate, U, I) : n.getOptionGroupLabel(U), Ce = I + "_" + n.getOptionGroupRenderKey(U), Oe = e({
        className: r("itemGroup", {
          optionGroupLabel: ve
        }),
        style: Y,
        "data-p-highlight": n.selected
      }, v("itemGroup")), we = e({
        className: r("itemGroupLabel")
      }, v("itemGroupLabel"));
      return /* @__PURE__ */ d.createElement("li", Jn({
        key: Ce
      }, Oe), /* @__PURE__ */ d.createElement("span", we, ge));
    }
    var de = n.getOptionRenderKey(U) + "_" + I, F = n.getOptionLabel(U), se = n.isOptionDisabled(U);
    return /* @__PURE__ */ d.createElement(ru, {
      key: de,
      label: F,
      index: I,
      focusedOptionIndex: n.focusedOptionIndex,
      option: U,
      ariaSetSize: f,
      onInputKeyDown: n.onInputKeyDown,
      style: Y,
      template: n.itemTemplate,
      selected: n.isSelected(U),
      highlightOnSelect: n.highlightOnSelect,
      disabled: se,
      onClick: n.onOptionClick,
      onMouseMove: q,
      ptm: a,
      cx: r,
      checkmark: n.checkmark
    });
  }, P = function() {
    return Q.isNotEmpty(n.visibleOptions) ? n.visibleOptions.map(E) : n.hasFilter ? O(n.emptyFilterMessage, !0) : O(n.emptyMessage);
  }, A = function() {
    if (n.showFilterClear && n.filterValue) {
      var U = fn("clear"), I = e({
        className: r("filterClearIcon"),
        "aria-label": U,
        onClick: function() {
          return n.onFilterClearIconClick(function() {
            return M.focus(l.current);
          });
        }
      }, v("filterClearIcon")), oe = n.filterClearIcon || /* @__PURE__ */ d.createElement(za, I), Y = Ut.getJSXIcon(oe, Nn({}, I), {
        props: n
      });
      return Y;
    }
    return null;
  }, C = function() {
    if (n.filter) {
      var U = A(), I = e({
        className: r("filterIcon")
      }, v("filterIcon")), oe = n.filterIcon || /* @__PURE__ */ d.createElement(Zc, I), Y = Ut.getJSXIcon(oe, Nn({}, I), {
        props: n
      }), ve = e({
        className: r("filterContainer", {
          clearIcon: U
        })
      }, v("filterContainer")), ge = e({
        ref: l,
        type: "text",
        autoComplete: "off",
        className: r("filterInput", {
          context: i
        }),
        placeholder: n.filterPlaceholder,
        onKeyDown: n.onFilterInputKeyDown,
        onChange: function(F) {
          return k(F);
        },
        value: n.filterValue
      }, v("filterInput")), Ce = /* @__PURE__ */ d.createElement("div", ve, /* @__PURE__ */ d.createElement("input", ge), U, Y);
      if (n.filterTemplate) {
        var Oe = {
          className: qe("p-dropdown-filter-container", {
            "p-dropdown-clearable-filter": !!U
          }),
          element: Ce,
          filterOptions: p,
          filterInputKeyDown: n.onFilterInputKeyDown,
          filterInputChange: k,
          filterIconClassName: "p-dropdown-filter-icon",
          clearIcon: U,
          props: n
        };
        Ce = Q.getJSXElement(n.filterTemplate, Oe);
      }
      var we = e({
        className: r("header")
      }, v("header"));
      return /* @__PURE__ */ d.createElement("div", we, Ce);
    }
    return null;
  }, K = function() {
    if (n.virtualScrollerOptions) {
      var U = Nn(Nn({}, n.virtualScrollerOptions), {
        style: Nn(Nn({}, n.virtualScrollerOptions.style), {
          height: n.scrollHeight
        }),
        className: qe("p-dropdown-items-wrapper", n.virtualScrollerOptions.className),
        items: n.visibleOptions,
        autoSize: !0,
        onLazyLoad: function(ge) {
          return n.virtualScrollerOptions.onLazyLoad(Nn(Nn({}, ge), {
            filter: n.filterValue
          }));
        },
        itemTemplate: function(ge, Ce) {
          return ge && E(ge, Ce.index, Ce);
        },
        contentTemplate: function(ge) {
          var Ce = n.hasFilter ? n.emptyFilterMessage : n.emptyMessage, Oe = c ? O(Ce) : ge.children, we = e({
            ref: ge.contentRef,
            style: ge.style,
            className: qe(ge.className, r("list", {
              virtualScrollerProps: n.virtualScrollerOptions
            })),
            role: "listbox"
          }, v("list"));
          return /* @__PURE__ */ d.createElement("ul", we, Oe);
        }
      });
      return /* @__PURE__ */ d.createElement(eu, Jn({
        ref: n.virtualScrollerRef
      }, U, {
        pt: a("virtualScroller")
      }));
    }
    var I = P(), oe = e({
      className: r("wrapper"),
      style: o("wrapper")
    }, v("wrapper")), Y = e({
      className: r("list"),
      role: "listbox"
    }, v("list"));
    return /* @__PURE__ */ d.createElement("div", oe, /* @__PURE__ */ d.createElement("ul", Y, I));
  }, S = function() {
    var U = C(), I = K(), oe = y(), Y = e({
      className: qe(n.panelClassName, r("panel", {
        context: i
      })),
      style: o("panel"),
      onClick: n.onClick
    }, v("panel")), ve = e({
      classNames: r("transition"),
      in: n.in,
      timeout: {
        enter: 120,
        exit: 100
      },
      options: n.transitionOptions,
      unmountOnExit: !0,
      onEnter: x,
      onEntered: b,
      onExit: n.onExit,
      onExited: n.onExited
    }, v("transition"));
    return /* @__PURE__ */ d.createElement(Ba, Jn({
      nodeRef: t
    }, ve), /* @__PURE__ */ d.createElement("div", Jn({
      ref: t
    }, Y), n.firstFocusableElement, U, I, oe, n.lastFocusableElement));
  }, H = S();
  return /* @__PURE__ */ d.createElement(ea, {
    element: H,
    appendTo: n.appendTo
  });
}));
au.displayName = "DropdownPanel";
function vm(n, t) {
  var e = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (!e) {
    if (Array.isArray(n) || (e = mm(n)) || t) {
      e && (n = e);
      var a = 0, r = function() {
      };
      return { s: r, n: function() {
        return a >= n.length ? { done: !0 } : { done: !1, value: n[a++] };
      }, e: function(f) {
        throw f;
      }, f: r };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0, i = !1, l;
  return { s: function() {
    e = e.call(n);
  }, n: function() {
    var f = e.next();
    return o = f.done, f;
  }, e: function(f) {
    i = !0, l = f;
  }, f: function() {
    try {
      !o && e.return != null && e.return();
    } finally {
      if (i) throw l;
    }
  } };
}
function mm(n, t) {
  if (n) {
    if (typeof n == "string") return tc(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return tc(n, t);
  }
}
function tc(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, a = new Array(t); e < t; e++) a[e] = n[e];
  return a;
}
function nc(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function Gn(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? nc(Object(e), !0).forEach(function(a) {
      Ko(n, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : nc(Object(e)).forEach(function(a) {
      Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return n;
}
var ou = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(n, t) {
  var e = cn(), a = d.useContext(Vt), r = fo.getProps(n, a), o = d.useState(""), i = pa(o, 2), l = i[0], c = i[1], f = d.useState(!1), p = pa(f, 2), v = p[0], x = p[1], b = d.useState(-1), k = pa(b, 2), y = k[0], q = k[1], O = d.useState(!1), E = pa(O, 2), P = E[0], A = E[1], C = d.useRef(!1), K = d.useRef(null), S = d.useRef(null), H = d.useRef(null), X = d.useRef(null), U = d.useRef(r.inputRef), I = d.useRef(r.focusInputRef), oe = d.useRef(null), Y = d.useRef(null), ve = d.useRef(null), ge = r.virtualScrollerOptions && r.virtualScrollerOptions.lazy, Ce = Q.isNotEmpty(l), Oe = r.appendTo || a && a.appendTo || Tt.appendTo, we = fo.setMetaData(Gn(Gn({
    props: r
  }, r.__parentMetadata), {}, {
    state: {
      filter: l,
      focused: v,
      overlayVisible: P
    }
  })), de = we.ptm, F = we.cx, se = we.sx, ae = we.isUnstyled;
  In(fo.css.styles, ae, {
    name: "dropdown"
  });
  var N = Mc({
    target: K,
    overlay: S,
    listener: function(w, ce) {
      var _e = ce.type, at = ce.valid;
      at && (_e === "outside" ? !Ee(w) && D() : D());
    },
    when: P
  }), j = pa(N, 2), B = j[0], Z = j[1], ie = function(w) {
    return (w || []).reduce(function(ce, _e, at) {
      ce.push({
        optionGroup: _e,
        group: !0,
        index: at,
        code: _e.code,
        label: _e.label
      });
      var qt = Dt(_e);
      return qt && qt.forEach(function(Ft) {
        return ce.push(Ft);
      }), ce;
    }, []);
  }, V = function() {
    var w = r.optionGroupLabel ? ie(r.options) : r.options;
    if (Ce && !ge) {
      var ce = l.trim().toLocaleLowerCase(r.filterLocale), _e = r.filterBy ? r.filterBy.split(",") : [r.optionLabel || "label"];
      if (r.optionGroupLabel) {
        var at = [], qt = vm(r.options), Ft;
        try {
          for (qt.s(); !(Ft = qt.n()).done; ) {
            var Xa = Ft.value, aa = ms.filter(Dt(Xa), _e, ce, r.filterMatchMode, r.filterLocale);
            aa && aa.length && at.push(Gn(Gn({}, Xa), Ko({}, "".concat(r.optionGroupChildren), aa)));
          }
        } catch (ni) {
          qt.e(ni);
        } finally {
          qt.f();
        }
        return ie(at);
      }
      return ms.filter(w, _e, ce, r.filterMatchMode, r.filterLocale);
    }
    return w;
  }, z = function(w) {
    var ce = w.relatedTarget === I.current ? M.getFirstFocusableElement(S.current, ':not([data-p-hidden-focusable="true"])') : I.current;
    M.focus(ce);
  }, ee = function(w) {
    var ce = w.relatedTarget === I.current ? M.getLastFocusableElement(S.current, ':not([data-p-hidden-focusable="true"])') : I.current;
    M.focus(ce);
  }, Ee = function(w) {
    return M.isAttributeEquals(w.target, "data-pc-section", "clearicon") || M.isAttributeEquals(w.target.parentElement || w.target, "data-pc-section", "filterclearicon");
  }, te = function(w) {
    r.disabled || r.loading || (r.onClick && r.onClick(w), !w.defaultPrevented && (Ee(w) || w.target.tagName === "INPUT" || ((!S.current || !(S.current && S.current.contains(w.target))) && (M.focus(I.current), P ? D() : h()), C.current = !0)));
  }, Ae = function(w) {
    r.showOnFocus && !P && h(), x(!0), r.onFocus && r.onFocus(w);
  }, Je = function(w) {
    x(!1), r.onBlur && setTimeout(function() {
      var ce = U.current ? U.current.value : void 0;
      r.onBlur({
        originalEvent: w.originalEvent,
        value: ce,
        stopPropagation: function() {
          w.originalEvent.stopPropagation();
        },
        preventDefault: function() {
          w.originalEvent.preventDefault();
        },
        target: {
          name: r.name,
          id: r.id,
          value: ce
        }
      });
    }, 200);
  }, Ue = function(w, ce) {
    var _e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, at = be(ce);
    Bt({
      originalEvent: w,
      option: at
    }), _e && D();
  }, Ne = function(w) {
    Bn.emit("overlay-click", {
      originalEvent: w,
      target: K.current
    });
  }, nt = function(w) {
    if (r.disabled) {
      w.preventDefault();
      return;
    }
    var ce = w.metaKey || w.ctrlKey, _e = M.isAndroid() ? w.key : w.code;
    switch (_e) {
      case "ArrowDown":
        re(w);
        break;
      case "ArrowUp":
        De(w);
        break;
      case "ArrowLeft":
      case "ArrowRight":
        Be(w, r.editable);
        break;
      case "Home":
        je(w);
        break;
      case "End":
        $e(w);
        break;
      case "PageDown":
        Mt(w);
        break;
      case "PageUp":
        ft(w);
        break;
      case "Space":
        rt(w, r.editable);
        break;
      case "NumpadEnter":
      case "Enter":
        Qe(w);
        break;
      case "Escape":
        et(w);
        break;
      case "Tab":
        lt(w);
        break;
      case "Backspace":
        ht(w, r.editable);
        break;
      case "ShiftLeft":
      case "ShiftRight":
        break;
      default:
        !ce && Q.isPrintableCharacter(w.key) && (!P && !r.editable && h(), !r.editable && on(w, w.key));
        break;
    }
    C.current = !1;
  }, $t = function(w) {
    switch (w.code) {
      case "ArrowDown":
        re(w);
        break;
      case "ArrowUp":
        De(w);
        break;
      case "ArrowLeft":
      case "ArrowRight":
        Be(w, !0);
        break;
      case "Escape":
      case "Enter":
      case "NumpadEnter":
        Qe(w), w.preventDefault();
        break;
    }
  }, It = function() {
    return M.getFocusableElements(S.current, ':not([data-p-hidden-focusable="true"])').length > 0;
  }, Ze = function(w) {
    var ce;
    return Ct(w) && ((ce = he(w)) === null || ce === void 0 ? void 0 : ce.toLocaleLowerCase(r.filterLocale).startsWith(ve.current.toLocaleLowerCase(r.filterLocale)));
  }, Ct = function(w) {
    return Q.isNotEmpty(w) && !(Fe(w) || Ye(w));
  }, _t = function() {
    return Q.isNotEmpty(r.value);
  }, St = function(w) {
    return Ct(w) && en(w);
  }, Ot = function() {
    return _t ? Nt.findIndex(function(w) {
      return St(w);
    }) : -1;
  }, vt = function() {
    var w = Ot();
    return w < 0 ? Pt() : w;
  }, on = function(w, ce) {
    ve.current = (ve.current || "") + ce;
    var _e = -1, at = !1;
    return Q.isNotEmpty(ve.current) && (y !== -1 ? (_e = Nt.slice(y).findIndex(function(qt) {
      return Ze(qt);
    }), _e = _e === -1 ? Nt.slice(0, y).findIndex(function(qt) {
      return Ze(qt);
    }) : _e + y) : _e = Nt.findIndex(function(qt) {
      return Ze(qt);
    }), _e !== -1 && (at = !0), _e === -1 && y === -1 && (_e = vt()), _e !== -1 && At(w, _e)), Y.current && clearTimeout(Y.current), Y.current = setTimeout(function() {
      ve.current = "", Y.current = null;
    }, 500), at;
  }, mt = function() {
    var w = Ot();
    return w < 0 ? Rt() : w;
  }, Pt = function() {
    return Nt.findIndex(function(w) {
      return Ct(w);
    });
  }, Rt = function() {
    return Q.findLastIndex(Nt, function(w) {
      return Ct(w);
    });
  }, Ht = function(w) {
    var ce = w < Nt.length - 1 ? Nt.slice(w + 1).findIndex(function(_e) {
      return Ct(_e);
    }) : -1;
    return ce > -1 ? ce + w + 1 : w;
  }, jt = function(w) {
    var ce = w > 0 ? Q.findLastIndex(Nt.slice(0, w), function(_e) {
      return Ct(_e);
    }) : -1;
    return ce > -1 ? ce : w;
  }, At = function(w, ce) {
    y !== ce && (q(ce), Le(ce), r.selectOnFocus && Ue(w, Nt[ce], !1));
  }, Le = function(w) {
    var ce = M.findSingle(S.current, 'li[id="dropdownItem_'.concat(w, '"]'));
    ce && ce.focus();
  }, re = function(w) {
    if (!P)
      h(), r.editable && At(w, Ot());
    else {
      var ce = y !== -1 ? Ht(y) : C.current ? Pt() : vt();
      At(w, ce);
    }
    w.preventDefault();
  }, De = function(w) {
    var ce = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (w.altKey && !ce)
      y !== -1 && Ue(w, Nt[y]), state.overlayVisible && D(), w.preventDefault();
    else {
      var _e = y !== -1 ? jt(y) : C.current ? Rt() : mt();
      At(w, _e), !P && h(), w.preventDefault();
    }
  }, Be = function(w) {
    var ce = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    ce && q(-1);
  }, je = function(w) {
    var ce = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    ce ? (w.currentTarget.setSelectionRange(0, 0), q(-1)) : (At(w, Pt()), !P && h()), w.preventDefault();
  }, $e = function(w) {
    var ce = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (ce) {
      var _e = w.currentTarget, at = _e.value.length;
      _e.setSelectionRange(at, at), q(-1);
    } else
      At(w, Rt()), !P && h();
    w.preventDefault();
  }, ft = function(w) {
    w.preventDefault();
  }, Mt = function(w) {
    w.preventDefault();
  }, rt = function(w) {
    var ce = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    !ce && Qe(w);
  }, Qe = function(w) {
    P ? (y !== -1 && Ue(w, Nt[y]), D()) : (q(-1), re(w)), w.preventDefault();
  }, et = function(w) {
    P && D(), w.preventDefault();
  }, lt = function(w) {
    var ce = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    ce || (P && !It() ? (M.focus(H.current), w.preventDefault()) : (y !== -1 && Ue(w, Nt[y]), P && D()));
  }, ht = function(w) {
    var ce = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    w && ce && !P && h();
  }, Ie = function(w) {
    !P && h();
    var ce = null;
    w.target.value && Nt && (ce = Nt.findIndex(function(_e) {
      return he(_e).toLocaleLowerCase().startsWith(w.target.value.toLocaleLowerCase());
    })), q(ce), r.onChange && r.onChange({
      originalEvent: w.originalEvent,
      value: w.target.value,
      stopPropagation: function() {
        w.originalEvent.stopPropagation();
      },
      preventDefault: function() {
        w.originalEvent.preventDefault();
      },
      target: {
        name: r.name,
        id: r.id,
        value: w.target.value
      }
    });
  }, J = function(w) {
    x(!0), D(), r.onFocus && r.onFocus(w);
  }, fe = function(w) {
    var ce = w.option;
    ce.disabled || (Bt(w), M.focus(I.current)), D();
  }, pe = function(w) {
    var ce = w.target.value;
    c(ce), r.onFilter && r.onFilter({
      originalEvent: w,
      filter: ce
    });
  }, Pe = function(w) {
    st(w);
  }, st = function(w) {
    c(""), r.onFilter && r.onFilter({
      filter: ""
    }), w && w();
  }, wt = function(w) {
    r.onChange && r.onChange({
      originalEvent: w,
      value: void 0,
      stopPropagation: function() {
        w == null || w.stopPropagation();
      },
      preventDefault: function() {
        w == null || w.preventDefault();
      },
      target: {
        name: r.name,
        id: r.id,
        value: void 0
      }
    }), r.filter && st(), me();
  }, Bt = function(w) {
    if (He !== w.option) {
      me(w.option), q(-1);
      var ce = be(w.option), _e = Wt(w.option, Nt);
      r.onChange && r.onChange({
        originalEvent: w.originalEvent,
        value: ce,
        stopPropagation: function() {
          w.originalEvent.stopPropagation();
        },
        preventDefault: function() {
          w.originalEvent.preventDefault();
        },
        target: {
          name: r.name,
          id: r.id,
          value: ce
        }
      }), At(w.originalEvent, _e);
    }
  }, Qt = function(w) {
    if (w = w || Nt, r.value != null && w)
      if (r.optionGroupLabel)
        for (var ce = 0; ce < w.length; ce++) {
          var _e = Wt(r.value, Dt(w[ce]));
          if (_e !== -1)
            return {
              group: ce,
              option: _e
            };
        }
      else
        return Wt(r.value, w);
    return -1;
  }, zt = function() {
    return r.optionValue ? null : r.dataKey;
  }, Wt = function(w, ce) {
    var _e = zt();
    return ce.findIndex(function(at) {
      return Q.equals(w, be(at), _e);
    });
  }, en = function(w) {
    return Q.equals(r.value, be(w), zt());
  }, h = function() {
    q(y !== -1 ? y : r.autoOptionFocus ? vt() : r.editable ? -1 : Ot()), A(!0);
  }, D = function() {
    A(!1), C.current = !1;
  }, ne = function() {
    r.editable && !P && C.current === !1 && M.focus(U.current);
  }, xe = function(w) {
    hn.set("overlay", S.current, a && a.autoZIndex || Tt.autoZIndex, a && a.zIndex.overlay || Tt.zIndex.overlay), M.addStyles(S.current, {
      position: "absolute",
      top: "0",
      left: "0"
    }), W(), w && w();
  }, Re = function(w) {
    w && w(), B(), r.onShow && r.onShow();
  }, Se = function() {
    Z();
  }, $ = function() {
    r.filter && r.resetFilterOnHide && st(), hn.clear(S.current), r.onHide && r.onHide();
  }, W = function() {
    M.alignOverlay(S.current, U.current.parentElement, r.appendTo || a && a.appendTo || Tt.appendTo);
  }, ue = function() {
    var w = M.findSingle(S.current, 'li[data-p-focused="true"]');
    if (w && w.scrollIntoView)
      w.scrollIntoView({
        block: "nearest",
        inline: "nearest"
      });
    else {
      var ce = M.findSingle(S.current, 'li[data-p-highlight="true"]');
      ce && ce.scrollIntoView && ce.scrollIntoView({
        block: "nearest",
        inline: "nearest"
      });
    }
  }, me = function(w) {
    U.current && (U.current.value = w ? he(w) : r.value || "", I.current && (I.current.value = U.current.value));
  }, he = function(w) {
    if (Q.isScalar(w))
      return "".concat(w);
    var ce = r.optionLabel ? Q.resolveFieldData(w, r.optionLabel) : w.label;
    return "".concat(ce);
  }, be = function(w) {
    if (r.useOptionAsValue)
      return w;
    var ce = r.optionValue ? Q.resolveFieldData(w, r.optionValue) : w ? w.value : Q.resolveFieldData(w, "value");
    return r.optionValue || Q.isNotEmpty(ce) ? ce : w;
  }, Te = function(w) {
    return r.dataKey ? Q.resolveFieldData(w, r.dataKey) : he(w);
  }, Ye = function(w) {
    return r.optionGroupLabel && w.optionGroup && w.group;
  }, Fe = function(w) {
    return r.optionDisabled ? Q.isFunction(r.optionDisabled) ? r.optionDisabled(w) : Q.resolveFieldData(w, r.optionDisabled) : w && w.disabled !== void 0 ? w.disabled : !1;
  }, gt = function(w) {
    return Q.resolveFieldData(w, r.optionGroupLabel);
  }, Lt = function(w) {
    return Q.resolveFieldData(w, r.optionGroupLabel);
  }, Dt = function(w) {
    return Q.resolveFieldData(w, r.optionGroupChildren);
  }, pt = function() {
    if (r.editable && U.current) {
      var w = He ? he(He) : null, ce = w || r.value || "";
      U.current.value = ce, I.current && (I.current.value = ce);
    }
  }, tt = function() {
    var w = Qt(r.options);
    return w !== -1 ? r.optionGroupLabel ? Dt(r.options[w.group])[w.option] : r.options[w] : null;
  };
  d.useImperativeHandle(t, function() {
    return {
      props: r,
      show: h,
      hide: D,
      clear: wt,
      focus: function() {
        return M.focus(I.current);
      },
      getElement: function() {
        return K.current;
      },
      getOverlay: function() {
        return S.current;
      },
      getInput: function() {
        return U.current;
      },
      getFocusInput: function() {
        return I.current;
      },
      getVirtualScroller: function() {
        return oe.current;
      }
    };
  }), d.useEffect(function() {
    Q.combinedRefs(U, r.inputRef), Q.combinedRefs(I, r.focusInputRef);
  }, [U, r.inputRef, I, r.focusInputRef]), qn(function() {
    r.autoFocus && M.focus(I.current, r.autoFocus), W();
  }), dt(function() {
    P && (r.value || y >= 0) && ue();
  }, [P, r.value, y]), dt(function() {
    P && l && r.filter && W();
  }, [P, l, r.filter]), dt(function() {
    oe.current && oe.current.scrollInView(0);
  }, [l]), dt(function() {
    l && (!r.options || r.options.length === 0) && c(""), pt(), U.current && (U.current.selectedIndex = 1);
  }), jn(function() {
    hn.clear(S.current);
  });
  var Gt = function() {
    var w = {
      value: "",
      label: r.placeholder
    };
    if (He) {
      var ce = be(He);
      w = {
        value: Xr(ce) === "object" ? r.options.findIndex(function(Ft) {
          return Ft === ce;
        }) : ce,
        label: he(He)
      };
    }
    var _e = e({
      className: "p-hidden-accessible p-dropdown-hidden-select"
    }, de("hiddenSelectedMessage")), at = e({
      ref: U,
      required: r.required,
      defaultValue: w.value,
      name: r.name,
      tabIndex: -1,
      "aria-hidden": "true"
    }, de("select")), qt = e({
      value: w.value
    }, de("option"));
    return /* @__PURE__ */ d.createElement("div", _e, /* @__PURE__ */ d.createElement("select", at, /* @__PURE__ */ d.createElement("option", qt, w.label)));
  }, vn = function() {
    var w = Q.isNotEmpty(He) ? he(He) : null;
    r.editable && (w = w || r.value || "");
    var ce = e({
      className: "p-hidden-accessible"
    }, de("hiddenSelectedMessage")), _e = e(Gn({
      ref: I,
      id: r.inputId,
      defaultValue: w,
      type: "text",
      readOnly: !0,
      "aria-haspopup": "listbox",
      onFocus: Ae,
      onBlur: Je,
      onKeyDown: nt,
      disabled: r.disabled,
      tabIndex: r.disabled ? -1 : r.tabIndex || 0
    }, Ln), de("input"));
    return /* @__PURE__ */ d.createElement("div", ce, /* @__PURE__ */ d.createElement("input", _e));
  }, An = function() {
    var w = Q.isNotEmpty(He) ? he(He) : null;
    if (r.editable) {
      var ce = w || r.value || "", _e = e(Gn({
        ref: U,
        type: "text",
        defaultValue: ce,
        className: F("input", {
          label: w
        }),
        disabled: r.disabled,
        placeholder: r.placeholder,
        maxLength: r.maxLength,
        onInput: Ie,
        onFocus: J,
        onKeyDown: nt,
        onBlur: Je,
        tabIndex: r.disabled ? -1 : r.tabIndex || 0,
        "aria-haspopup": "listbox"
      }, Ln), de("input"));
      return /* @__PURE__ */ d.createElement("input", _e);
    }
    var at = r.valueTemplate ? Q.getJSXElement(r.valueTemplate, He, r) : w || r.placeholder || r.emptyMessage || /* @__PURE__ */ d.createElement(d.Fragment, null, " "), qt = e({
      ref: U,
      className: F("input", {
        label: w
      }),
      tabIndex: "-1"
    }, de("input"));
    return /* @__PURE__ */ d.createElement("span", qt, at);
  }, er = function(w) {
    (w.key === "Enter" || w.code === "Space") && (wt(w), w.preventDefault());
  }, tr = function() {
    if (r.value != null && r.showClear && !r.disabled && !Q.isEmpty(r.options)) {
      var w = e({
        className: F("clearIcon"),
        onPointerUp: wt,
        tabIndex: r.tabIndex || "0",
        onKeyDown: er,
        "aria-label": fn("clear")
      }, de("clearIcon")), ce = r.clearIcon || /* @__PURE__ */ d.createElement(za, w);
      return Ut.getJSXIcon(ce, Gn({}, w), {
        props: r
      });
    }
    return null;
  }, nr = function() {
    var w = e({
      className: F("loadingIcon"),
      "data-pr-overlay-visible": P
    }, de("loadingIcon")), ce = r.loadingIcon || /* @__PURE__ */ d.createElement(Wo, {
      spin: !0
    }), _e = Ut.getJSXIcon(ce, Gn({}, w), {
      props: r
    }), at = r.placeholder || r.ariaLabel, qt = e({
      className: F("trigger"),
      role: "button",
      "aria-haspopup": "listbox",
      "aria-expanded": P,
      "aria-label": at
    }, de("trigger"));
    return /* @__PURE__ */ d.createElement("div", qt, _e);
  }, rr = function() {
    var w = e({
      className: F("dropdownIcon"),
      "data-pr-overlay-visible": P
    }, de("dropdownIcon")), ce = P ? r.collapseIcon || /* @__PURE__ */ d.createElement(El, w) : r.dropdownIcon || /* @__PURE__ */ d.createElement(Bo, w), _e = Ut.getJSXIcon(ce, Gn({}, w), {
      props: r
    }), at = r.placeholder || r.ariaLabel, qt = e({
      className: F("trigger"),
      role: "button",
      "aria-haspopup": "listbox",
      "aria-expanded": P,
      "aria-label": at
    }, de("trigger"));
    return /* @__PURE__ */ d.createElement("div", qt, _e);
  }, Nt = V(), He = tt(), xt = Q.isNotEmpty(r.tooltip), un = fo.getOtherProps(r), Ln = Q.reduceKeys(un, M.ARIA_PROPS), mn = Gt(), Sn = vn(), Rn = An(), wn = r.loading ? nr() : rr(), Qo = tr(), Ga = e({
    id: r.id,
    ref: K,
    className: qe(r.className, F("root", {
      context: a,
      focusedState: v,
      overlayVisibleState: P
    })),
    style: r.style,
    onClick: function(w) {
      return te(w);
    },
    onMouseDown: r.onMouseDown,
    onContextMenu: r.onContextMenu,
    onFocus: ne,
    "data-p-disabled": r.disabled,
    "data-p-focus": v,
    "aria-activedescendant": v ? "dropdownItem_".concat(y) : void 0
  }, un, de("root")), ei = e({
    ref: H,
    role: "presentation",
    "aria-hidden": "true",
    className: "p-hidden-accessible p-hidden-focusable",
    tabIndex: "0",
    onFocus: z,
    "data-p-hidden-accessible": !0,
    "data-p-hidden-focusable": !0
  }, de("hiddenFirstFocusableEl")), ti = e({
    ref: X,
    role: "presentation",
    "aria-hidden": "true",
    className: "p-hidden-accessible p-hidden-focusable",
    tabIndex: "0",
    onFocus: ee,
    "data-p-hidden-accessible": !0,
    "data-p-hidden-focusable": !0
  }, de("hiddenLastFocusableEl"));
  return /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("div", Ga, Sn, mn, Rn, Qo, wn, /* @__PURE__ */ d.createElement(au, Jn({
    hostName: "Dropdown",
    ref: S,
    visibleOptions: Nt,
    virtualScrollerRef: oe
  }, r, {
    appendTo: Oe,
    cx: F,
    filterValue: l,
    focusedOptionIndex: y,
    getOptionGroupChildren: Dt,
    getOptionGroupLabel: Lt,
    getOptionGroupRenderKey: gt,
    getOptionLabel: he,
    getOptionRenderKey: Te,
    getSelectedOptionIndex: Qt,
    hasFilter: Ce,
    in: P,
    isOptionDisabled: Fe,
    isSelected: en,
    onClick: Ne,
    onEnter: xe,
    onEntered: Re,
    onExit: Se,
    onExited: $,
    onFilterClearIconClick: Pe,
    onFilterInputChange: pe,
    onFilterInputKeyDown: $t,
    onOptionClick: fe,
    onInputKeyDown: nt,
    ptm: de,
    resetFilter: st,
    changeFocusedOptionIndex: At,
    firstFocusableElement: /* @__PURE__ */ d.createElement("span", ei),
    lastFocusableElement: /* @__PURE__ */ d.createElement("span", ti),
    sx: se
  }))), xt && /* @__PURE__ */ d.createElement(Vo, Jn({
    target: K,
    content: r.tooltip,
    pt: de("tooltip")
  }, r.tooltipOptions)));
}));
ou.displayName = "Dropdown";
const gm = ({ config: n, onChange: t }) => {
  const [e, a] = it({ ...Dr, ...n });
  We(() => {
    a({ ...Dr, ...n });
  }, [n]);
  const r = (i) => {
    const l = { ...Dr, ...n, value: i.target.value };
    t(l);
  }, o = Math.random().toString(36).substring(2, 15);
  return /* @__PURE__ */ T.jsx(T.Fragment, { children: /* @__PURE__ */ T.jsxs("div", { className: "flex flex-column gap-2", children: [
    /* @__PURE__ */ T.jsx("label", { htmlFor: o, children: e.label }),
    /* @__PURE__ */ T.jsx(
      ou,
      {
        id: o,
        value: e.value || "",
        onChange: r,
        options: e.options,
        showClear: !0,
        placeholder: e.placeholder || "",
        className: "w-full",
        children: " "
      }
    )
  ] }) });
}, hm = (n) => ({});
var rc;
function nl() {
  return nl = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var a in e) ({}).hasOwnProperty.call(e, a) && (n[a] = e[a]);
    }
    return n;
  }, nl.apply(null, arguments);
}
var bm = function(t) {
  return /* @__PURE__ */ d.createElement("svg", nl({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, t), rc || (rc = /* @__PURE__ */ d.createElement("path", {
    d: "M384 432c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16zm64-16c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64zm-224-64c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4h208c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7"
  })));
};
function Jr(n) {
  return JSON.parse(JSON.stringify(n));
}
const ym = ({ option: n, onChange: t }) => {
  const [e, a] = it(n), r = (o) => {
    const i = {
      value: e.value,
      label: e.label,
      [o.target.name]: o.target.value
    };
    a(i), t(i);
  };
  return We(() => {
    a(n);
  }, [n]), /* @__PURE__ */ T.jsx(T.Fragment, { children: /* @__PURE__ */ T.jsxs("div", { className: "flex flex-row gap-2", children: [
    /* @__PURE__ */ T.jsx(
      xn,
      {
        icon: "pi pi-sort",
        className: "px-0 border-noround border-0",
        style: { width: "1rem", color: "#E1E1E1", background: "transparent" },
        severity: "secondary",
        size: "small"
      }
    ),
    /* @__PURE__ */ T.jsxs("div", { className: "p-inputgroup flex-1", children: [
      /* @__PURE__ */ T.jsx(
        Yt,
        {
          id: "value",
          value: e.value,
          name: "value",
          onChange: r,
          className: "flex-1",
          placeholder: "Value"
        }
      ),
      " ",
      /* @__PURE__ */ T.jsx(
        Yt,
        {
          id: "label",
          value: e.label,
          name: "label",
          onChange: r,
          className: "flex-1",
          placeholder: "Label"
        }
      )
    ] }),
    /* @__PURE__ */ T.jsx(xn, { icon: "pi pi-trash", onClick: () => t(null) })
  ] }) });
}, wm = ({ onInsert: n }) => {
  const t = {
    value: "",
    label: ""
  }, [e, a] = it(t), r = (i) => {
    const l = {
      value: e.value,
      label: e.label,
      [i.target.name]: i.target.value
    };
    a(l);
  }, o = () => {
    n({ value: e.value, label: e.label }), a(t);
  };
  return /* @__PURE__ */ T.jsx(T.Fragment, { children: /* @__PURE__ */ T.jsxs("div", { className: "flex flex-row gap-2", children: [
    /* @__PURE__ */ T.jsxs("div", { className: "p-inputgroup flex-1", children: [
      /* @__PURE__ */ T.jsx(
        Yt,
        {
          id: "value",
          value: e.value,
          name: "value",
          onChange: r,
          className: "",
          placeholder: "Value"
        }
      ),
      " ",
      /* @__PURE__ */ T.jsx(
        Yt,
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
    /* @__PURE__ */ T.jsx(
      xn,
      {
        icon: "pi pi-plus",
        onClick: o
      }
    )
  ] }) });
}, xm = ({ config: n, onChange: t }) => {
  const [e, a] = it({ ...Dr, ...n }), r = (l) => {
    const c = { ...e, [l.target.name]: l.target.value };
    a(c), t(c);
  }, o = (l, c) => {
    const f = Jr(e.options);
    l ? f[c] = l : f.splice(c, 1);
    const p = { ...e, options: f };
    a(p), t(p);
  };
  We(() => {
    a({ ...Dr, ...n });
  }, [n]);
  const i = (l) => {
    const c = Jr(e.options);
    c.push(l);
    const f = { ...e, options: c };
    a(f), t(f);
  };
  return /* @__PURE__ */ T.jsx(T.Fragment, { children: /* @__PURE__ */ T.jsxs(Qn, { activeIndex: 0, children: [
    /* @__PURE__ */ T.jsx(Vn, { header: "General", children: /* @__PURE__ */ T.jsxs("div", { className: "form-item flex flex-column gap-4", children: [
      /* @__PURE__ */ T.jsxs("div", { className: "flex flex-column gap-2", children: [
        /* @__PURE__ */ T.jsx("label", { htmlFor: "label", children: "Label" }),
        /* @__PURE__ */ T.jsx(
          Yt,
          {
            id: "label",
            value: e.label || "",
            name: "label",
            onChange: r,
            className: "w-full"
          }
        )
      ] }),
      /* @__PURE__ */ T.jsxs("div", { className: "flex flex-column gap-2", children: [
        /* @__PURE__ */ T.jsx("label", { htmlFor: "placeholder", children: "Placeholder" }),
        /* @__PURE__ */ T.jsx(
          Yt,
          {
            id: "placeholder",
            value: e.placeholder || "",
            name: "placeholder",
            onChange: r,
            className: "w-full"
          }
        )
      ] })
    ] }) }, "general"),
    " ",
    /* @__PURE__ */ T.jsx(Vn, { header: "Options", children: /* @__PURE__ */ T.jsxs("div", { className: "form-item flex flex-column gap-4", children: [
      e.options.map((l, c) => /* @__PURE__ */ T.jsx(
        ym,
        {
          option: l,
          onChange: (f) => {
            o(f, c);
          }
        },
        `option-${c}`
      )),
      " ",
      /* @__PURE__ */ T.jsx(
        wm,
        {
          onInsert: i
        },
        "item-new"
      )
    ] }) }, "options")
  ] }) });
}, Sm = (n) => ({}), Em = new Qr({
  type: Dr.type,
  form: new Tn({
    render: gm,
    validation: hm
  }),
  settings: new Tn({
    render: xm,
    validation: Sm
  }),
  heading: "Select box",
  description: "select from a list of items in a drop down",
  hidden: !1,
  icon: bm,
  config: Dr
}), Tr = {
  id: mr(),
  type: "input-text",
  label: "",
  value: "",
  placeholder: ""
}, Cm = ({ config: n, onChange: t }) => {
  const [e, a] = it({ ...Tr, ...n });
  We(() => {
    a({ ...Tr, ...n });
  }, [n]);
  const r = (i) => {
    const l = { ...Tr, ...n, value: i.target.value };
    t(l), a(l);
  }, o = Math.random().toString(36).substring(2, 15);
  return /* @__PURE__ */ T.jsx(T.Fragment, { children: /* @__PURE__ */ T.jsxs("div", { className: "flex flex-column gap-2", children: [
    /* @__PURE__ */ T.jsx("label", { htmlFor: o, children: e.label }),
    /* @__PURE__ */ T.jsx(
      Yt,
      {
        value: e.value,
        onChange: r,
        placeholder: e.placeholder,
        className: "w-full",
        id: o
      }
    )
  ] }) });
}, Om = (n) => ({});
var ac;
function rl() {
  return rl = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var a in e) ({}).hasOwnProperty.call(e, a) && (n[a] = e[a]);
    }
    return n;
  }, rl.apply(null, arguments);
}
var Pm = function(t) {
  return /* @__PURE__ */ d.createElement("svg", rl({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, t), ac || (ac = /* @__PURE__ */ d.createElement("path", {
    d: "M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-1.8l18-48h159.6l18 48H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-25.8zM279.8 304H168.2L224 155.1z"
  })));
};
const Dm = ({ config: n, onChange: t }) => {
  const [e, a] = it({ ...Tr, ...n }), r = (o) => {
    const i = { ...e, [o.target.name]: o.target.value };
    a(i), t(i);
  };
  return We(() => {
    a({ ...Tr, ...n });
  }, [n]), /* @__PURE__ */ T.jsx(T.Fragment, { children: /* @__PURE__ */ T.jsx(Qn, { activeIndex: 0, children: /* @__PURE__ */ T.jsx(Vn, { header: "General", children: /* @__PURE__ */ T.jsxs("div", { className: "form-item flex flex-column gap-4", children: [
    /* @__PURE__ */ T.jsxs("div", { className: "flex flex-column gap-2", children: [
      /* @__PURE__ */ T.jsx("label", { htmlFor: "label", children: "Label" }),
      /* @__PURE__ */ T.jsx(
        Yt,
        {
          id: "label",
          value: e.label || "",
          name: "label",
          onChange: r,
          className: "w-full"
        }
      )
    ] }),
    /* @__PURE__ */ T.jsxs("div", { className: "flex flex-column gap-2", children: [
      /* @__PURE__ */ T.jsx("label", { htmlFor: "placeholder", children: "Placeholder" }),
      /* @__PURE__ */ T.jsx(
        Yt,
        {
          id: "placeholder",
          value: e.placeholder || "",
          name: "placeholder",
          onChange: r,
          className: "w-full"
        }
      )
    ] })
  ] }) }, "general") }) });
}, Tm = (n) => ({}), km = new Qr({
  type: Tr.type,
  form: new Tn({
    render: Cm,
    validation: Om
  }),
  settings: new Tn({
    render: Dm,
    validation: Tm
  }),
  heading: "Text input",
  description: "a simple box to insert a value into",
  hidden: !1,
  icon: Pm,
  config: Tr
}), Va = new Fo(new Lo({ label: "Inputs" }));
Va.registerItem(Vv);
Va.registerItem(Xv);
Va.registerItem(Em);
Va.registerItem(km);
const Zr = {
  id: mr(),
  type: "special-signature",
  label: "",
  value: [],
  color: "#000000"
};
/*!
 * Signature Pad v5.0.3 | https://github.com/szimek/signature_pad
 * (c) 2024 Szymon Nowak | Released under the MIT license
 */
class qo {
  constructor(t, e, a, r) {
    if (isNaN(t) || isNaN(e))
      throw new Error(`Point is invalid: (${t}, ${e})`);
    this.x = +t, this.y = +e, this.pressure = a || 0, this.time = r || Date.now();
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
class Cl {
  static fromPoints(t, e) {
    const a = this.calculateControlPoints(t[0], t[1], t[2]).c2, r = this.calculateControlPoints(t[1], t[2], t[3]).c1;
    return new Cl(t[1], a, r, t[2], e.start, e.end);
  }
  static calculateControlPoints(t, e, a) {
    const r = t.x - e.x, o = t.y - e.y, i = e.x - a.x, l = e.y - a.y, c = { x: (t.x + e.x) / 2, y: (t.y + e.y) / 2 }, f = { x: (e.x + a.x) / 2, y: (e.y + a.y) / 2 }, p = Math.sqrt(r * r + o * o), v = Math.sqrt(i * i + l * l), x = c.x - f.x, b = c.y - f.y, k = p + v == 0 ? 0 : v / (p + v), y = { x: f.x + x * k, y: f.y + b * k }, q = e.x - y.x, O = e.y - y.y;
    return {
      c1: new qo(c.x + q, c.y + O),
      c2: new qo(f.x + q, f.y + O)
    };
  }
  constructor(t, e, a, r, o, i) {
    this.startPoint = t, this.control2 = e, this.control1 = a, this.endPoint = r, this.startWidth = o, this.endWidth = i;
  }
  length() {
    let e = 0, a, r;
    for (let o = 0; o <= 10; o += 1) {
      const i = o / 10, l = this.point(i, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x), c = this.point(i, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);
      if (o > 0) {
        const f = l - a, p = c - r;
        e += Math.sqrt(f * f + p * p);
      }
      a = l, r = c;
    }
    return e;
  }
  point(t, e, a, r, o) {
    return e * (1 - t) * (1 - t) * (1 - t) + 3 * a * (1 - t) * (1 - t) * t + 3 * r * (1 - t) * t * t + o * t * t * t;
  }
}
class qm {
  constructor() {
    try {
      this._et = new EventTarget();
    } catch {
      this._et = document;
    }
  }
  addEventListener(t, e, a) {
    this._et.addEventListener(t, e, a);
  }
  dispatchEvent(t) {
    return this._et.dispatchEvent(t);
  }
  removeEventListener(t, e, a) {
    this._et.removeEventListener(t, e, a);
  }
}
function Im(n, t = 250) {
  let e = 0, a = null, r, o, i;
  const l = () => {
    e = Date.now(), a = null, r = n.apply(o, i), a || (o = null, i = []);
  };
  return function(...f) {
    const p = Date.now(), v = t - (p - e);
    return o = this, i = f, v <= 0 || v > t ? (a && (clearTimeout(a), a = null), e = p, r = n.apply(o, i), a || (o = null, i = [])) : a || (a = window.setTimeout(l, v)), r;
  };
}
class Io extends qm {
  constructor(t, e = {}) {
    var a, r, o;
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
    }, this.velocityFilterWeight = e.velocityFilterWeight || 0.7, this.minWidth = e.minWidth || 0.5, this.maxWidth = e.maxWidth || 2.5, this.throttle = (a = e.throttle) !== null && a !== void 0 ? a : 16, this.minDistance = (r = e.minDistance) !== null && r !== void 0 ? r : 5, this.dotSize = e.dotSize || 0, this.penColor = e.penColor || "black", this.backgroundColor = e.backgroundColor || "rgba(0,0,0,0)", this.compositeOperation = e.compositeOperation || "source-over", this.canvasContextOptions = (o = e.canvasContextOptions) !== null && o !== void 0 ? o : {}, this._strokeMoveUpdate = this.throttle ? Im(Io.prototype._strokeUpdate, this.throttle) : Io.prototype._strokeUpdate, this._ctx = t.getContext("2d", this.canvasContextOptions), this.clear(), this.on();
  }
  clear() {
    const { _ctx: t, canvas: e } = this;
    t.fillStyle = this.backgroundColor, t.clearRect(0, 0, e.width, e.height), t.fillRect(0, 0, e.width, e.height), this._data = [], this._reset(this._getPointGroupOptions()), this._isEmpty = !0;
  }
  fromDataURL(t, e = {}) {
    return new Promise((a, r) => {
      const o = new Image(), i = e.ratio || window.devicePixelRatio || 1, l = e.width || this.canvas.width / i, c = e.height || this.canvas.height / i, f = e.xOffset || 0, p = e.yOffset || 0;
      this._reset(this._getPointGroupOptions()), o.onload = () => {
        this._ctx.drawImage(o, f, p, l, c), a();
      }, o.onerror = (v) => {
        r(v);
      }, o.crossOrigin = "anonymous", o.src = t, this._isEmpty = !1;
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
    const { addEventListener: a } = this._getListenerFunctions();
    switch (t.event.type) {
      case "mousedown":
        a("mousemove", this._handleMouseMove), a("mouseup", this._handleMouseUp);
        break;
      case "touchstart":
        a("touchmove", this._handleTouchMove), a("touchend", this._handleTouchEnd);
        break;
      case "pointerdown":
        a("pointermove", this._handlePointerMove), a("pointerup", this._handlePointerUp);
        break;
    }
    this._drawingStroke = !0;
    const r = this._getPointGroupOptions(), o = Object.assign(Object.assign({}, r), { points: [] });
    this._data.push(o), this._reset(r), this._strokeUpdate(t);
  }
  _strokeUpdate(t) {
    if (!this._drawingStroke)
      return;
    if (this._data.length === 0) {
      this._strokeBegin(t);
      return;
    }
    this.dispatchEvent(new CustomEvent("beforeUpdateStroke", { detail: t }));
    const e = this._createPoint(t.x, t.y, t.pressure), a = this._data[this._data.length - 1], r = a.points, o = r.length > 0 && r[r.length - 1], i = o ? e.distanceTo(o) <= this.minDistance : !1, l = this._getPointGroupOptions(a);
    if (!o || !(o && i)) {
      const c = this._addPoint(e, l);
      o ? c && this._drawCurve(c, l) : this._drawDot(e, l), r.push({
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
  _createPoint(t, e, a) {
    const r = this.canvas.getBoundingClientRect();
    return new qo(t - r.left, e - r.top, a, (/* @__PURE__ */ new Date()).getTime());
  }
  _addPoint(t, e) {
    const { _lastPoints: a } = this;
    if (a.push(t), a.length > 2) {
      a.length === 3 && a.unshift(a[0]);
      const r = this._calculateCurveWidths(a[1], a[2], e), o = Cl.fromPoints(a, r);
      return a.shift(), o;
    }
    return null;
  }
  _calculateCurveWidths(t, e, a) {
    const r = a.velocityFilterWeight * e.velocityFrom(t) + (1 - a.velocityFilterWeight) * this._lastVelocity, o = this._strokeWidth(r, a), i = {
      end: o,
      start: this._lastWidth
    };
    return this._lastVelocity = r, this._lastWidth = o, i;
  }
  _strokeWidth(t, e) {
    return Math.max(e.maxWidth / (t + 1), e.minWidth);
  }
  _drawCurveSegment(t, e, a) {
    const r = this._ctx;
    r.moveTo(t, e), r.arc(t, e, a, 0, 2 * Math.PI, !1), this._isEmpty = !1;
  }
  _drawCurve(t, e) {
    const a = this._ctx, r = t.endWidth - t.startWidth, o = Math.ceil(t.length()) * 2;
    a.beginPath(), a.fillStyle = e.penColor;
    for (let i = 0; i < o; i += 1) {
      const l = i / o, c = l * l, f = c * l, p = 1 - l, v = p * p, x = v * p;
      let b = x * t.startPoint.x;
      b += 3 * v * l * t.control1.x, b += 3 * p * c * t.control2.x, b += f * t.endPoint.x;
      let k = x * t.startPoint.y;
      k += 3 * v * l * t.control1.y, k += 3 * p * c * t.control2.y, k += f * t.endPoint.y;
      const y = Math.min(t.startWidth + f * r, e.maxWidth);
      this._drawCurveSegment(b, k, y);
    }
    a.closePath(), a.fill();
  }
  _drawDot(t, e) {
    const a = this._ctx, r = e.dotSize > 0 ? e.dotSize : (e.minWidth + e.maxWidth) / 2;
    a.beginPath(), this._drawCurveSegment(t.x, t.y, r), a.closePath(), a.fillStyle = e.penColor, a.fill();
  }
  _fromData(t, e, a) {
    for (const r of t) {
      const { points: o } = r, i = this._getPointGroupOptions(r);
      if (o.length > 1)
        for (let l = 0; l < o.length; l += 1) {
          const c = o[l], f = new qo(c.x, c.y, c.pressure, c.time);
          l === 0 && this._reset(i);
          const p = this._addPoint(f, i);
          p && e(p, i);
        }
      else
        this._reset(i), a(o[0], i);
    }
  }
  toSVG({ includeBackgroundColor: t = !1 } = {}) {
    const e = this._data, a = Math.max(window.devicePixelRatio || 1, 1), r = 0, o = 0, i = this.canvas.width / a, l = this.canvas.height / a, c = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    if (c.setAttribute("xmlns", "http://www.w3.org/2000/svg"), c.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), c.setAttribute("viewBox", `${r} ${o} ${i} ${l}`), c.setAttribute("width", i.toString()), c.setAttribute("height", l.toString()), t && this.backgroundColor) {
      const f = document.createElement("rect");
      f.setAttribute("width", "100%"), f.setAttribute("height", "100%"), f.setAttribute("fill", this.backgroundColor), c.appendChild(f);
    }
    return this._fromData(e, (f, { penColor: p }) => {
      const v = document.createElement("path");
      if (!isNaN(f.control1.x) && !isNaN(f.control1.y) && !isNaN(f.control2.x) && !isNaN(f.control2.y)) {
        const x = `M ${f.startPoint.x.toFixed(3)},${f.startPoint.y.toFixed(3)} C ${f.control1.x.toFixed(3)},${f.control1.y.toFixed(3)} ${f.control2.x.toFixed(3)},${f.control2.y.toFixed(3)} ${f.endPoint.x.toFixed(3)},${f.endPoint.y.toFixed(3)}`;
        v.setAttribute("d", x), v.setAttribute("stroke-width", (f.endWidth * 2.25).toFixed(3)), v.setAttribute("stroke", p), v.setAttribute("fill", "none"), v.setAttribute("stroke-linecap", "round"), c.appendChild(v);
      }
    }, (f, { penColor: p, dotSize: v, minWidth: x, maxWidth: b }) => {
      const k = document.createElement("circle"), y = v > 0 ? v : (x + b) / 2;
      k.setAttribute("r", y.toString()), k.setAttribute("cx", f.x.toString()), k.setAttribute("cy", f.y.toString()), k.setAttribute("fill", p), c.appendChild(k);
    }), c.outerHTML;
  }
}
function Rm(n, t, e) {
  var a = e || {}, r = a.noTrailing, o = r === void 0 ? !1 : r, i = a.noLeading, l = i === void 0 ? !1 : i, c = a.debounceMode, f = c === void 0 ? void 0 : c, p, v = !1, x = 0;
  function b() {
    p && clearTimeout(p);
  }
  function k(q) {
    var O = q || {}, E = O.upcomingOnly, P = E === void 0 ? !1 : E;
    b(), v = !P;
  }
  function y() {
    for (var q = arguments.length, O = new Array(q), E = 0; E < q; E++)
      O[E] = arguments[E];
    var P = this, A = Date.now() - x;
    if (v)
      return;
    function C() {
      x = Date.now(), t.apply(P, O);
    }
    function K() {
      p = void 0;
    }
    !l && f && !p && C(), b(), f === void 0 && A > n ? l ? (x = Date.now(), o || (p = setTimeout(f ? K : C, n))) : C() : o !== !0 && (p = setTimeout(f ? K : C, f === void 0 ? n - A : n));
  }
  return y.cancel = k, y;
}
function Mm(n, t, e) {
  var a = {}, r = a.atBegin, o = r === void 0 ? !1 : r;
  return Rm(n, t, {
    debounceMode: o !== !1
  });
}
class xo extends d.PureComponent {
  constructor(t) {
    super(t), Object.defineProperty(this, "canvasRef", { enumerable: !0, configurable: !0, writable: !0, value: d.createRef() }), Object.defineProperty(this, "signaturePad", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "callResizeHandler", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this.state = { canvasWidth: 0, canvasHeight: 0 }, this.callResizeHandler = Mm(this.props.debounceInterval, this.handleResize.bind(this));
  }
  componentDidMount() {
    const t = this.canvasRef.current;
    t && (this.props.width && this.props.height || (t.style.width = "100%", window.addEventListener("resize", this.callResizeHandler)), this.signaturePad = new Io(t, this.props.options), this.scaleCanvas(t));
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
    const e = Math.max(window.devicePixelRatio || 1, 1), a = (this.props.width || t.offsetWidth) * e, r = (this.props.height || t.offsetHeight) * e, { canvasWidth: o, canvasHeight: i } = this.state;
    if (a === o && r === i) return;
    let l;
    this.props.redrawOnResize && this.signaturePad && !this.signaturePad.isEmpty() && (l = this.signaturePad.toDataURL()), t.width = a, t.height = r, this.setState({ canvasWidth: a, canvasHeight: r });
    const c = t.getContext("2d");
    c && c.scale(e, e), l ? this.signaturePad.fromDataURL(l) : this.signaturePad && this.signaturePad.clear();
  }
  render() {
    const { canvasProps: t } = this.props;
    return d.createElement("canvas", Object.assign({ "data-testid": "canvas-element", ref: this.canvasRef }, t));
  }
}
Object.defineProperty(xo, "displayName", { enumerable: !0, configurable: !0, writable: !0, value: "react-signature-pad-wrapper" }), Object.defineProperty(xo, "propTypes", { enumerable: !0, configurable: !0, writable: !0, value: { width: xr.number, height: xr.number, options: xr.object, canvasProps: xr.object, redrawOnResize: xr.bool.isRequired, debounceInterval: xr.number.isRequired } }), Object.defineProperty(xo, "defaultProps", { enumerable: !0, configurable: !0, writable: !0, value: { redrawOnResize: !1, debounceInterval: 150 } });
const Nm = ({ config: n, onChange: t }) => {
  const [e, a] = it({ ...Zr, ...n });
  We(() => {
    a({ ...Zr, ...n });
  }, [n]);
  const r = Math.random().toString(36).substring(2, 15), o = ze.createRef(), i = () => {
    const c = o.current;
    c && c.instance.clear();
  }, l = () => {
    const c = o.current;
    if (!c)
      return;
    const f = Jr(e);
    c.isEmpty() ? f.value = [] : f.value = c.toData(), a(f), t(f);
  };
  return We(() => {
    e.value && o.current && o.current.fromData(e.value);
  }, [e]), /* @__PURE__ */ T.jsx(T.Fragment, { children: /* @__PURE__ */ T.jsxs("div", { className: "flex flex-column gap-2", children: [
    /* @__PURE__ */ T.jsx("label", { htmlFor: r, children: e.label }),
    /* @__PURE__ */ T.jsx(xo, { ref: o, options: { minWidth: 5, maxWidth: 10, penColor: "rgb(0, 0, 0)" }, redrawOnResize: !0 }),
    /* @__PURE__ */ T.jsx("button", { onClick: i, children: "clear" }),
    /* @__PURE__ */ T.jsx("button", { onClick: l, children: "save" })
  ] }) });
}, _m = (n) => ({});
var oc;
function al() {
  return al = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var a in e) ({}).hasOwnProperty.call(e, a) && (n[a] = e[a]);
    }
    return n;
  }, al.apply(null, arguments);
}
var jm = function(t) {
  return /* @__PURE__ */ d.createElement("svg", al({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512"
  }, t), oc || (oc = /* @__PURE__ */ d.createElement("path", {
    d: "M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64v-19.3c-2.7 1.1-5.4 2-8.2 2.7l-60.1 15c-3 .7-6 1.2-9 1.4-.9.1-1.8.2-2.7.2h-64c-6.1 0-11.6-3.4-14.3-8.8l-8.8-17.7c-1.7-3.4-5.1-5.5-8.8-5.5s-7.2 2.1-8.8 5.5l-8.8 17.7c-2.9 5.9-9.2 9.4-15.7 8.8s-12.1-5.1-13.9-11.3L144 381l-9.8 32.8c-6.1 20.3-24.8 34.2-46 34.2H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h8.2c7.1 0 13.3-4.6 15.3-11.4l14.9-49.5c3.4-11.3 13.8-19.1 25.6-19.1s22.2 7.8 25.6 19.1l11.6 38.6c7.4-6.2 16.8-9.7 26.8-9.7 15.9 0 30.4 9 37.5 23.2l4.4 8.8h8.9c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l94.8-94.8V160H256c-17.7 0-32-14.3-32-32V0zm192 0v128h128zm293.8 139.7c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6zM311.9 321c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5.2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4l129.2-129.3-71-71z"
  })));
};
const Am = ({ config: n, onChange: t }) => {
  const [e, a] = it({ ...Zr, ...n }), r = (o) => {
    const i = { ...e, [o.target.name]: o.target.value };
    a(i), t(i);
  };
  return We(() => {
    a({ ...Zr, ...n });
  }, [n]), /* @__PURE__ */ T.jsx(T.Fragment, { children: /* @__PURE__ */ T.jsx(Qn, { activeIndex: 0, children: /* @__PURE__ */ T.jsx(Vn, { header: "General", children: /* @__PURE__ */ T.jsx("div", { className: "form-item flex flex-column gap-4", children: /* @__PURE__ */ T.jsxs("div", { className: "flex flex-column gap-2", children: [
    /* @__PURE__ */ T.jsx("label", { htmlFor: "label", children: "Label" }),
    /* @__PURE__ */ T.jsx(
      Yt,
      {
        id: "label",
        value: e.label || "",
        name: "label",
        onChange: r,
        className: "w-full"
      }
    )
  ] }) }) }, "general") }) });
}, Lm = (n) => ({}), Fm = new Qr({
  type: Zr.type,
  form: new Tn({
    render: Nm,
    validation: _m
  }),
  settings: new Tn({
    render: Am,
    validation: Lm
  }),
  heading: "Signature",
  description: "Signature capture block",
  hidden: !1,
  icon: jm,
  config: Zr
}), iu = new Fo(new Lo({ label: "Special" }));
iu.registerItem(Fm);
const kr = new Fo();
kr.addRegistry(Kc);
kr.addRegistry(Va);
kr.addRegistry(iu);
const lu = ({ item: n, onChange: t }) => {
  const e = kr.getByItem(n);
  return n && e ? ze.createElement(e.form.render, {
    config: n,
    onChange: t
  }) : ze.createElement(
    () => /* @__PURE__ */ T.jsxs("div", { children: [
      "The component ",
      n.type,
      " was not found."
    ] })
  );
};
function $m() {
  for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++)
    t[e] = arguments[e];
  return kt(
    () => (a) => {
      t.forEach((r) => r(a));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  );
}
const Uo = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function ta(n) {
  const t = Object.prototype.toString.call(n);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function Ol(n) {
  return "nodeType" in n;
}
function yn(n) {
  var t, e;
  return n ? ta(n) ? n : Ol(n) && (t = (e = n.ownerDocument) == null ? void 0 : e.defaultView) != null ? t : window : window;
}
function Pl(n) {
  const {
    Document: t
  } = yn(n);
  return n instanceof t;
}
function Wa(n) {
  return ta(n) ? !1 : n instanceof yn(n).HTMLElement;
}
function su(n) {
  return n instanceof yn(n).SVGElement;
}
function na(n) {
  return n ? ta(n) ? n.document : Ol(n) ? Pl(n) ? n : Wa(n) || su(n) ? n.ownerDocument : document : document : document;
}
const kn = Uo ? Vd : We;
function Yo(n) {
  const t = Et(n);
  return kn(() => {
    t.current = n;
  }), pn(function() {
    for (var e = arguments.length, a = new Array(e), r = 0; r < e; r++)
      a[r] = arguments[r];
    return t.current == null ? void 0 : t.current(...a);
  }, []);
}
function Hm() {
  const n = Et(null), t = pn((a, r) => {
    n.current = setInterval(a, r);
  }, []), e = pn(() => {
    n.current !== null && (clearInterval(n.current), n.current = null);
  }, []);
  return [t, e];
}
function Na(n, t) {
  t === void 0 && (t = [n]);
  const e = Et(n);
  return kn(() => {
    e.current !== n && (e.current = n);
  }, t), e;
}
function Ka(n, t) {
  const e = Et();
  return kt(
    () => {
      const a = n(e.current);
      return e.current = a, a;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
function Ro(n) {
  const t = Yo(n), e = Et(null), a = pn(
    (r) => {
      r !== e.current && (t == null || t(r, e.current)), e.current = r;
    },
    //eslint-disable-next-line
    []
  );
  return [e, a];
}
function Mo(n) {
  const t = Et();
  return We(() => {
    t.current = n;
  }, [n]), t.current;
}
let wi = {};
function Ua(n, t) {
  return kt(() => {
    if (t)
      return t;
    const e = wi[n] == null ? 0 : wi[n] + 1;
    return wi[n] = e, n + "-" + e;
  }, [n, t]);
}
function cu(n) {
  return function(t) {
    for (var e = arguments.length, a = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
      a[r - 1] = arguments[r];
    return a.reduce((o, i) => {
      const l = Object.entries(i);
      for (const [c, f] of l) {
        const p = o[c];
        p != null && (o[c] = p + n * f);
      }
      return o;
    }, {
      ...t
    });
  };
}
const Vr = /* @__PURE__ */ cu(1), _a = /* @__PURE__ */ cu(-1);
function Bm(n) {
  return "clientX" in n && "clientY" in n;
}
function Go(n) {
  if (!n)
    return !1;
  const {
    KeyboardEvent: t
  } = yn(n.target);
  return t && n instanceof t;
}
function zm(n) {
  if (!n)
    return !1;
  const {
    TouchEvent: t
  } = yn(n.target);
  return t && n instanceof t;
}
function No(n) {
  if (zm(n)) {
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
  return Bm(n) ? {
    x: n.clientX,
    y: n.clientY
  } : null;
}
const Zn = /* @__PURE__ */ Object.freeze({
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
        return [Zn.Translate.toString(n), Zn.Scale.toString(n)].join(" ");
    }
  },
  Transition: {
    toString(n) {
      let {
        property: t,
        duration: e,
        easing: a
      } = n;
      return t + " " + e + "ms " + a;
    }
  }
}), ic = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function Vm(n) {
  return n.matches(ic) ? n : n.querySelector(ic);
}
const Wm = {
  display: "none"
};
function Km(n) {
  let {
    id: t,
    value: e
  } = n;
  return ze.createElement("div", {
    id: t,
    style: Wm
  }, e);
}
function Um(n) {
  let {
    id: t,
    announcement: e,
    ariaLiveType: a = "assertive"
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
  return ze.createElement("div", {
    id: t,
    style: r,
    role: "status",
    "aria-live": a,
    "aria-atomic": !0
  }, e);
}
function Ym() {
  const [n, t] = it("");
  return {
    announce: pn((a) => {
      a != null && t(a);
    }, []),
    announcement: n
  };
}
const uu = /* @__PURE__ */ $a(null);
function Gm(n) {
  const t = zn(uu);
  We(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(n);
  }, [n, t]);
}
function Xm() {
  const [n] = it(() => /* @__PURE__ */ new Set()), t = pn((a) => (n.add(a), () => n.delete(a)), [n]);
  return [pn((a) => {
    let {
      type: r,
      event: o
    } = a;
    n.forEach((i) => {
      var l;
      return (l = i[r]) == null ? void 0 : l.call(i, o);
    });
  }, [n]), t];
}
const Jm = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, Zm = {
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
function Qm(n) {
  let {
    announcements: t = Zm,
    container: e,
    hiddenTextDescribedById: a,
    screenReaderInstructions: r = Jm
  } = n;
  const {
    announce: o,
    announcement: i
  } = Ym(), l = Ua("DndLiveRegion"), [c, f] = it(!1);
  if (We(() => {
    f(!0);
  }, []), Gm(kt(() => ({
    onDragStart(v) {
      let {
        active: x
      } = v;
      o(t.onDragStart({
        active: x
      }));
    },
    onDragMove(v) {
      let {
        active: x,
        over: b
      } = v;
      t.onDragMove && o(t.onDragMove({
        active: x,
        over: b
      }));
    },
    onDragOver(v) {
      let {
        active: x,
        over: b
      } = v;
      o(t.onDragOver({
        active: x,
        over: b
      }));
    },
    onDragEnd(v) {
      let {
        active: x,
        over: b
      } = v;
      o(t.onDragEnd({
        active: x,
        over: b
      }));
    },
    onDragCancel(v) {
      let {
        active: x,
        over: b
      } = v;
      o(t.onDragCancel({
        active: x,
        over: b
      }));
    }
  }), [o, t])), !c)
    return null;
  const p = ze.createElement(ze.Fragment, null, ze.createElement(Km, {
    id: a,
    value: r.draggable
  }), ze.createElement(Um, {
    id: l,
    announcement: i
  }));
  return e ? Yd(p, e) : p;
}
var Zt;
(function(n) {
  n.DragStart = "dragStart", n.DragMove = "dragMove", n.DragEnd = "dragEnd", n.DragCancel = "dragCancel", n.DragOver = "dragOver", n.RegisterDroppable = "registerDroppable", n.SetDroppableDisabled = "setDroppableDisabled", n.UnregisterDroppable = "unregisterDroppable";
})(Zt || (Zt = {}));
function _o() {
}
function lc(n, t) {
  return kt(
    () => ({
      sensor: n,
      options: t ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, t]
  );
}
function eg() {
  for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++)
    t[e] = arguments[e];
  return kt(
    () => [...t].filter((a) => a != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
const _n = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function du(n, t) {
  return Math.sqrt(Math.pow(n.x - t.x, 2) + Math.pow(n.y - t.y, 2));
}
function tg(n, t) {
  const e = No(n);
  if (!e)
    return "0 0";
  const a = {
    x: (e.x - t.left) / t.width * 100,
    y: (e.y - t.top) / t.height * 100
  };
  return a.x + "% " + a.y + "%";
}
function fu(n, t) {
  let {
    data: {
      value: e
    }
  } = n, {
    data: {
      value: a
    }
  } = t;
  return e - a;
}
function ng(n, t) {
  let {
    data: {
      value: e
    }
  } = n, {
    data: {
      value: a
    }
  } = t;
  return a - e;
}
function sc(n) {
  let {
    left: t,
    top: e,
    height: a,
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
    y: e + a
  }, {
    x: t + r,
    y: e + a
  }];
}
function pu(n, t) {
  if (!n || n.length === 0)
    return null;
  const [e] = n;
  return e[t];
}
function cc(n, t, e) {
  return t === void 0 && (t = n.left), e === void 0 && (e = n.top), {
    x: t + n.width * 0.5,
    y: e + n.height * 0.5
  };
}
const rg = (n) => {
  let {
    collisionRect: t,
    droppableRects: e,
    droppableContainers: a
  } = n;
  const r = cc(t, t.left, t.top), o = [];
  for (const i of a) {
    const {
      id: l
    } = i, c = e.get(l);
    if (c) {
      const f = du(cc(c), r);
      o.push({
        id: l,
        data: {
          droppableContainer: i,
          value: f
        }
      });
    }
  }
  return o.sort(fu);
}, ag = (n) => {
  let {
    collisionRect: t,
    droppableRects: e,
    droppableContainers: a
  } = n;
  const r = sc(t), o = [];
  for (const i of a) {
    const {
      id: l
    } = i, c = e.get(l);
    if (c) {
      const f = sc(c), p = r.reduce((x, b, k) => x + du(f[k], b), 0), v = Number((p / 4).toFixed(4));
      o.push({
        id: l,
        data: {
          droppableContainer: i,
          value: v
        }
      });
    }
  }
  return o.sort(fu);
};
function og(n, t) {
  const e = Math.max(t.top, n.top), a = Math.max(t.left, n.left), r = Math.min(t.left + t.width, n.left + n.width), o = Math.min(t.top + t.height, n.top + n.height), i = r - a, l = o - e;
  if (a < r && e < o) {
    const c = t.width * t.height, f = n.width * n.height, p = i * l, v = p / (c + f - p);
    return Number(v.toFixed(4));
  }
  return 0;
}
const ig = (n) => {
  let {
    collisionRect: t,
    droppableRects: e,
    droppableContainers: a
  } = n;
  const r = [];
  for (const o of a) {
    const {
      id: i
    } = o, l = e.get(i);
    if (l) {
      const c = og(l, t);
      c > 0 && r.push({
        id: i,
        data: {
          droppableContainer: o,
          value: c
        }
      });
    }
  }
  return r.sort(ng);
};
function lg(n, t, e) {
  return {
    ...n,
    scaleX: t && e ? t.width / e.width : 1,
    scaleY: t && e ? t.height / e.height : 1
  };
}
function vu(n, t) {
  return n && t ? {
    x: n.left - t.left,
    y: n.top - t.top
  } : _n;
}
function sg(n) {
  return function(e) {
    for (var a = arguments.length, r = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++)
      r[o - 1] = arguments[o];
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
const cg = /* @__PURE__ */ sg(1);
function mu(n) {
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
function ug(n, t, e) {
  const a = mu(t);
  if (!a)
    return n;
  const {
    scaleX: r,
    scaleY: o,
    x: i,
    y: l
  } = a, c = n.left - i - (1 - r) * parseFloat(e), f = n.top - l - (1 - o) * parseFloat(e.slice(e.indexOf(" ") + 1)), p = r ? n.width / r : n.width, v = o ? n.height / o : n.height;
  return {
    width: p,
    height: v,
    top: f,
    right: c + p,
    bottom: f + v,
    left: c
  };
}
const dg = {
  ignoreTransform: !1
};
function ra(n, t) {
  t === void 0 && (t = dg);
  let e = n.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      transform: f,
      transformOrigin: p
    } = yn(n).getComputedStyle(n);
    f && (e = ug(e, f, p));
  }
  const {
    top: a,
    left: r,
    width: o,
    height: i,
    bottom: l,
    right: c
  } = e;
  return {
    top: a,
    left: r,
    width: o,
    height: i,
    bottom: l,
    right: c
  };
}
function uc(n) {
  return ra(n, {
    ignoreTransform: !0
  });
}
function fg(n) {
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
function pg(n, t) {
  return t === void 0 && (t = yn(n).getComputedStyle(n)), t.position === "fixed";
}
function vg(n, t) {
  t === void 0 && (t = yn(n).getComputedStyle(n));
  const e = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((r) => {
    const o = t[r];
    return typeof o == "string" ? e.test(o) : !1;
  });
}
function Xo(n, t) {
  const e = [];
  function a(r) {
    if (t != null && e.length >= t || !r)
      return e;
    if (Pl(r) && r.scrollingElement != null && !e.includes(r.scrollingElement))
      return e.push(r.scrollingElement), e;
    if (!Wa(r) || su(r) || e.includes(r))
      return e;
    const o = yn(n).getComputedStyle(r);
    return r !== n && vg(r, o) && e.push(r), pg(r, o) ? e : a(r.parentNode);
  }
  return n ? a(n) : e;
}
function gu(n) {
  const [t] = Xo(n, 1);
  return t ?? null;
}
function xi(n) {
  return !Uo || !n ? null : ta(n) ? n : Ol(n) ? Pl(n) || n === na(n).scrollingElement ? window : Wa(n) ? n : null : null;
}
function hu(n) {
  return ta(n) ? n.scrollX : n.scrollLeft;
}
function bu(n) {
  return ta(n) ? n.scrollY : n.scrollTop;
}
function ol(n) {
  return {
    x: hu(n),
    y: bu(n)
  };
}
var rn;
(function(n) {
  n[n.Forward = 1] = "Forward", n[n.Backward = -1] = "Backward";
})(rn || (rn = {}));
function yu(n) {
  return !Uo || !n ? !1 : n === document.scrollingElement;
}
function wu(n) {
  const t = {
    x: 0,
    y: 0
  }, e = yu(n) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: n.clientHeight,
    width: n.clientWidth
  }, a = {
    x: n.scrollWidth - e.width,
    y: n.scrollHeight - e.height
  }, r = n.scrollTop <= t.y, o = n.scrollLeft <= t.x, i = n.scrollTop >= a.y, l = n.scrollLeft >= a.x;
  return {
    isTop: r,
    isLeft: o,
    isBottom: i,
    isRight: l,
    maxScroll: a,
    minScroll: t
  };
}
const mg = {
  x: 0.2,
  y: 0.2
};
function gg(n, t, e, a, r) {
  let {
    top: o,
    left: i,
    right: l,
    bottom: c
  } = e;
  a === void 0 && (a = 10), r === void 0 && (r = mg);
  const {
    isTop: f,
    isBottom: p,
    isLeft: v,
    isRight: x
  } = wu(n), b = {
    x: 0,
    y: 0
  }, k = {
    x: 0,
    y: 0
  }, y = {
    height: t.height * r.y,
    width: t.width * r.x
  };
  return !f && o <= t.top + y.height ? (b.y = rn.Backward, k.y = a * Math.abs((t.top + y.height - o) / y.height)) : !p && c >= t.bottom - y.height && (b.y = rn.Forward, k.y = a * Math.abs((t.bottom - y.height - c) / y.height)), !x && l >= t.right - y.width ? (b.x = rn.Forward, k.x = a * Math.abs((t.right - y.width - l) / y.width)) : !v && i <= t.left + y.width && (b.x = rn.Backward, k.x = a * Math.abs((t.left + y.width - i) / y.width)), {
    direction: b,
    speed: k
  };
}
function hg(n) {
  if (n === document.scrollingElement) {
    const {
      innerWidth: o,
      innerHeight: i
    } = window;
    return {
      top: 0,
      left: 0,
      right: o,
      bottom: i,
      width: o,
      height: i
    };
  }
  const {
    top: t,
    left: e,
    right: a,
    bottom: r
  } = n.getBoundingClientRect();
  return {
    top: t,
    left: e,
    right: a,
    bottom: r,
    width: n.clientWidth,
    height: n.clientHeight
  };
}
function xu(n) {
  return n.reduce((t, e) => Vr(t, ol(e)), _n);
}
function bg(n) {
  return n.reduce((t, e) => t + hu(e), 0);
}
function yg(n) {
  return n.reduce((t, e) => t + bu(e), 0);
}
function Su(n, t) {
  if (t === void 0 && (t = ra), !n)
    return;
  const {
    top: e,
    left: a,
    bottom: r,
    right: o
  } = t(n);
  gu(n) && (r <= 0 || o <= 0 || e >= window.innerHeight || a >= window.innerWidth) && n.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const wg = [["x", ["left", "right"], bg], ["y", ["top", "bottom"], yg]];
class Dl {
  constructor(t, e) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const a = Xo(e), r = xu(a);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [o, i, l] of wg)
      for (const c of i)
        Object.defineProperty(this, c, {
          get: () => {
            const f = l(a), p = r[o] - f;
            return this.rect[c] + p;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class ya {
  constructor(t) {
    this.target = void 0, this.listeners = [], this.removeAll = () => {
      this.listeners.forEach((e) => {
        var a;
        return (a = this.target) == null ? void 0 : a.removeEventListener(...e);
      });
    }, this.target = t;
  }
  add(t, e, a) {
    var r;
    (r = this.target) == null || r.addEventListener(t, e, a), this.listeners.push([t, e, a]);
  }
}
function xg(n) {
  const {
    EventTarget: t
  } = yn(n);
  return n instanceof t ? n : na(n);
}
function Si(n, t) {
  const e = Math.abs(n.x), a = Math.abs(n.y);
  return typeof t == "number" ? Math.sqrt(e ** 2 + a ** 2) > t : "x" in t && "y" in t ? e > t.x && a > t.y : "x" in t ? e > t.x : "y" in t ? a > t.y : !1;
}
var Dn;
(function(n) {
  n.Click = "click", n.DragStart = "dragstart", n.Keydown = "keydown", n.ContextMenu = "contextmenu", n.Resize = "resize", n.SelectionChange = "selectionchange", n.VisibilityChange = "visibilitychange";
})(Dn || (Dn = {}));
function dc(n) {
  n.preventDefault();
}
function Sg(n) {
  n.stopPropagation();
}
var ct;
(function(n) {
  n.Space = "Space", n.Down = "ArrowDown", n.Right = "ArrowRight", n.Left = "ArrowLeft", n.Up = "ArrowUp", n.Esc = "Escape", n.Enter = "Enter";
})(ct || (ct = {}));
const Eu = {
  start: [ct.Space, ct.Enter],
  cancel: [ct.Esc],
  end: [ct.Space, ct.Enter]
}, Eg = (n, t) => {
  let {
    currentCoordinates: e
  } = t;
  switch (n.code) {
    case ct.Right:
      return {
        ...e,
        x: e.x + 25
      };
    case ct.Left:
      return {
        ...e,
        x: e.x - 25
      };
    case ct.Down:
      return {
        ...e,
        y: e.y + 25
      };
    case ct.Up:
      return {
        ...e,
        y: e.y - 25
      };
  }
};
class Tl {
  constructor(t) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
    const {
      event: {
        target: e
      }
    } = t;
    this.props = t, this.listeners = new ya(na(e)), this.windowListeners = new ya(yn(e)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(Dn.Resize, this.handleCancel), this.windowListeners.add(Dn.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(Dn.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: e
    } = this.props, a = t.node.current;
    a && Su(a), e(_n);
  }
  handleKeyDown(t) {
    if (Go(t)) {
      const {
        active: e,
        context: a,
        options: r
      } = this.props, {
        keyboardCodes: o = Eu,
        coordinateGetter: i = Eg,
        scrollBehavior: l = "smooth"
      } = r, {
        code: c
      } = t;
      if (o.end.includes(c)) {
        this.handleEnd(t);
        return;
      }
      if (o.cancel.includes(c)) {
        this.handleCancel(t);
        return;
      }
      const {
        collisionRect: f
      } = a.current, p = f ? {
        x: f.left,
        y: f.top
      } : _n;
      this.referenceCoordinates || (this.referenceCoordinates = p);
      const v = i(t, {
        active: e,
        context: a.current,
        currentCoordinates: p
      });
      if (v) {
        const x = _a(v, p), b = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: k
        } = a.current;
        for (const y of k) {
          const q = t.code, {
            isTop: O,
            isRight: E,
            isLeft: P,
            isBottom: A,
            maxScroll: C,
            minScroll: K
          } = wu(y), S = hg(y), H = {
            x: Math.min(q === ct.Right ? S.right - S.width / 2 : S.right, Math.max(q === ct.Right ? S.left : S.left + S.width / 2, v.x)),
            y: Math.min(q === ct.Down ? S.bottom - S.height / 2 : S.bottom, Math.max(q === ct.Down ? S.top : S.top + S.height / 2, v.y))
          }, X = q === ct.Right && !E || q === ct.Left && !P, U = q === ct.Down && !A || q === ct.Up && !O;
          if (X && H.x !== v.x) {
            const I = y.scrollLeft + x.x, oe = q === ct.Right && I <= C.x || q === ct.Left && I >= K.x;
            if (oe && !x.y) {
              y.scrollTo({
                left: I,
                behavior: l
              });
              return;
            }
            oe ? b.x = y.scrollLeft - I : b.x = q === ct.Right ? y.scrollLeft - C.x : y.scrollLeft - K.x, b.x && y.scrollBy({
              left: -b.x,
              behavior: l
            });
            break;
          } else if (U && H.y !== v.y) {
            const I = y.scrollTop + x.y, oe = q === ct.Down && I <= C.y || q === ct.Up && I >= K.y;
            if (oe && !x.x) {
              y.scrollTo({
                top: I,
                behavior: l
              });
              return;
            }
            oe ? b.y = y.scrollTop - I : b.y = q === ct.Down ? y.scrollTop - C.y : y.scrollTop - K.y, b.y && y.scrollBy({
              top: -b.y,
              behavior: l
            });
            break;
          }
        }
        this.handleMove(t, Vr(_a(v, this.referenceCoordinates), b));
      }
    }
  }
  handleMove(t, e) {
    const {
      onMove: a
    } = this.props;
    t.preventDefault(), a(e);
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
Tl.activators = [{
  eventName: "onKeyDown",
  handler: (n, t, e) => {
    let {
      keyboardCodes: a = Eu,
      onActivation: r
    } = t, {
      active: o
    } = e;
    const {
      code: i
    } = n.nativeEvent;
    if (a.start.includes(i)) {
      const l = o.activatorNode.current;
      return l && n.target !== l ? !1 : (n.preventDefault(), r == null || r({
        event: n.nativeEvent
      }), !0);
    }
    return !1;
  }
}];
function fc(n) {
  return !!(n && "distance" in n);
}
function pc(n) {
  return !!(n && "delay" in n);
}
class kl {
  constructor(t, e, a) {
    var r;
    a === void 0 && (a = xg(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = e;
    const {
      event: o
    } = t, {
      target: i
    } = o;
    this.props = t, this.events = e, this.document = na(i), this.documentListeners = new ya(this.document), this.listeners = new ya(a), this.windowListeners = new ya(yn(i)), this.initialCoordinates = (r = No(o)) != null ? r : _n, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
  }
  attach() {
    const {
      events: t,
      props: {
        options: {
          activationConstraint: e,
          bypassActivationConstraint: a
        }
      }
    } = this;
    if (this.listeners.add(t.move.name, this.handleMove, {
      passive: !1
    }), this.listeners.add(t.end.name, this.handleEnd), this.windowListeners.add(Dn.Resize, this.handleCancel), this.windowListeners.add(Dn.DragStart, dc), this.windowListeners.add(Dn.VisibilityChange, this.handleCancel), this.windowListeners.add(Dn.ContextMenu, dc), this.documentListeners.add(Dn.Keydown, this.handleKeydown), e) {
      if (a != null && a({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (pc(e)) {
        this.timeoutId = setTimeout(this.handleStart, e.delay);
        return;
      }
      if (fc(e))
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
    t && (this.activated = !0, this.documentListeners.add(Dn.Click, Sg, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(Dn.SelectionChange, this.removeTextSelection), e(t));
  }
  handleMove(t) {
    var e;
    const {
      activated: a,
      initialCoordinates: r,
      props: o
    } = this, {
      onMove: i,
      options: {
        activationConstraint: l
      }
    } = o;
    if (!r)
      return;
    const c = (e = No(t)) != null ? e : _n, f = _a(r, c);
    if (!a && l) {
      if (fc(l)) {
        if (l.tolerance != null && Si(f, l.tolerance))
          return this.handleCancel();
        if (Si(f, l.distance))
          return this.handleStart();
      }
      return pc(l) && Si(f, l.tolerance) ? this.handleCancel() : void 0;
    }
    t.cancelable && t.preventDefault(), i(c);
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
    t.code === ct.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const Cg = {
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};
class ql extends kl {
  constructor(t) {
    const {
      event: e
    } = t, a = na(e.target);
    super(t, Cg, a);
  }
}
ql.activators = [{
  eventName: "onPointerDown",
  handler: (n, t) => {
    let {
      nativeEvent: e
    } = n, {
      onActivation: a
    } = t;
    return !e.isPrimary || e.button !== 0 ? !1 : (a == null || a({
      event: e
    }), !0);
  }
}];
const Og = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var il;
(function(n) {
  n[n.RightClick = 2] = "RightClick";
})(il || (il = {}));
class Pg extends kl {
  constructor(t) {
    super(t, Og, na(t.event.target));
  }
}
Pg.activators = [{
  eventName: "onMouseDown",
  handler: (n, t) => {
    let {
      nativeEvent: e
    } = n, {
      onActivation: a
    } = t;
    return e.button === il.RightClick ? !1 : (a == null || a({
      event: e
    }), !0);
  }
}];
const Ei = {
  move: {
    name: "touchmove"
  },
  end: {
    name: "touchend"
  }
};
class Dg extends kl {
  constructor(t) {
    super(t, Ei);
  }
  static setup() {
    return window.addEventListener(Ei.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(Ei.move.name, t);
    };
    function t() {
    }
  }
}
Dg.activators = [{
  eventName: "onTouchStart",
  handler: (n, t) => {
    let {
      nativeEvent: e
    } = n, {
      onActivation: a
    } = t;
    const {
      touches: r
    } = e;
    return r.length > 1 ? !1 : (a == null || a({
      event: e
    }), !0);
  }
}];
var wa;
(function(n) {
  n[n.Pointer = 0] = "Pointer", n[n.DraggableRect = 1] = "DraggableRect";
})(wa || (wa = {}));
var jo;
(function(n) {
  n[n.TreeOrder = 0] = "TreeOrder", n[n.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(jo || (jo = {}));
function Tg(n) {
  let {
    acceleration: t,
    activator: e = wa.Pointer,
    canScroll: a,
    draggingRect: r,
    enabled: o,
    interval: i = 5,
    order: l = jo.TreeOrder,
    pointerCoordinates: c,
    scrollableAncestors: f,
    scrollableAncestorRects: p,
    delta: v,
    threshold: x
  } = n;
  const b = qg({
    delta: v,
    disabled: !o
  }), [k, y] = Hm(), q = Et({
    x: 0,
    y: 0
  }), O = Et({
    x: 0,
    y: 0
  }), E = kt(() => {
    switch (e) {
      case wa.Pointer:
        return c ? {
          top: c.y,
          bottom: c.y,
          left: c.x,
          right: c.x
        } : null;
      case wa.DraggableRect:
        return r;
    }
  }, [e, r, c]), P = Et(null), A = pn(() => {
    const K = P.current;
    if (!K)
      return;
    const S = q.current.x * O.current.x, H = q.current.y * O.current.y;
    K.scrollBy(S, H);
  }, []), C = kt(() => l === jo.TreeOrder ? [...f].reverse() : f, [l, f]);
  We(
    () => {
      if (!o || !f.length || !E) {
        y();
        return;
      }
      for (const K of C) {
        if ((a == null ? void 0 : a(K)) === !1)
          continue;
        const S = f.indexOf(K), H = p[S];
        if (!H)
          continue;
        const {
          direction: X,
          speed: U
        } = gg(K, H, E, t, x);
        for (const I of ["x", "y"])
          b[I][X[I]] || (U[I] = 0, X[I] = 0);
        if (U.x > 0 || U.y > 0) {
          y(), P.current = K, k(A, i), q.current = U, O.current = X;
          return;
        }
      }
      q.current = {
        x: 0,
        y: 0
      }, O.current = {
        x: 0,
        y: 0
      }, y();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      t,
      A,
      a,
      y,
      o,
      i,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(E),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(b),
      k,
      f,
      C,
      p,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(x)
    ]
  );
}
const kg = {
  x: {
    [rn.Backward]: !1,
    [rn.Forward]: !1
  },
  y: {
    [rn.Backward]: !1,
    [rn.Forward]: !1
  }
};
function qg(n) {
  let {
    delta: t,
    disabled: e
  } = n;
  const a = Mo(t);
  return Ka((r) => {
    if (e || !a || !r)
      return kg;
    const o = {
      x: Math.sign(t.x - a.x),
      y: Math.sign(t.y - a.y)
    };
    return {
      x: {
        [rn.Backward]: r.x[rn.Backward] || o.x === -1,
        [rn.Forward]: r.x[rn.Forward] || o.x === 1
      },
      y: {
        [rn.Backward]: r.y[rn.Backward] || o.y === -1,
        [rn.Forward]: r.y[rn.Forward] || o.y === 1
      }
    };
  }, [e, t, a]);
}
function Ig(n, t) {
  const e = t !== null ? n.get(t) : void 0, a = e ? e.node.current : null;
  return Ka((r) => {
    var o;
    return t === null ? null : (o = a ?? r) != null ? o : null;
  }, [a, t]);
}
function Rg(n, t) {
  return kt(() => n.reduce((e, a) => {
    const {
      sensor: r
    } = a, o = r.activators.map((i) => ({
      eventName: i.eventName,
      handler: t(i.handler, a)
    }));
    return [...e, ...o];
  }, []), [n, t]);
}
var ja;
(function(n) {
  n[n.Always = 0] = "Always", n[n.BeforeDragging = 1] = "BeforeDragging", n[n.WhileDragging = 2] = "WhileDragging";
})(ja || (ja = {}));
var ll;
(function(n) {
  n.Optimized = "optimized";
})(ll || (ll = {}));
const vc = /* @__PURE__ */ new Map();
function Mg(n, t) {
  let {
    dragging: e,
    dependencies: a,
    config: r
  } = t;
  const [o, i] = it(null), {
    frequency: l,
    measure: c,
    strategy: f
  } = r, p = Et(n), v = q(), x = Na(v), b = pn(function(O) {
    O === void 0 && (O = []), !x.current && i((E) => E === null ? O : E.concat(O.filter((P) => !E.includes(P))));
  }, [x]), k = Et(null), y = Ka((O) => {
    if (v && !e)
      return vc;
    if (!O || O === vc || p.current !== n || o != null) {
      const E = /* @__PURE__ */ new Map();
      for (let P of n) {
        if (!P)
          continue;
        if (o && o.length > 0 && !o.includes(P.id) && P.rect.current) {
          E.set(P.id, P.rect.current);
          continue;
        }
        const A = P.node.current, C = A ? new Dl(c(A), A) : null;
        P.rect.current = C, C && E.set(P.id, C);
      }
      return E;
    }
    return O;
  }, [n, o, e, v, c]);
  return We(() => {
    p.current = n;
  }, [n]), We(
    () => {
      v || b();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, v]
  ), We(
    () => {
      o && o.length > 0 && i(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(o)]
  ), We(
    () => {
      v || typeof l != "number" || k.current !== null || (k.current = setTimeout(() => {
        b(), k.current = null;
      }, l));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [l, v, b, ...a]
  ), {
    droppableRects: y,
    measureDroppableContainers: b,
    measuringScheduled: o != null
  };
  function q() {
    switch (f) {
      case ja.Always:
        return !1;
      case ja.BeforeDragging:
        return e;
      default:
        return !e;
    }
  }
}
function Il(n, t) {
  return Ka((e) => n ? e || (typeof t == "function" ? t(n) : n) : null, [t, n]);
}
function Ng(n, t) {
  return Il(n, t);
}
function _g(n) {
  let {
    callback: t,
    disabled: e
  } = n;
  const a = Yo(t), r = kt(() => {
    if (e || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: o
    } = window;
    return new o(a);
  }, [a, e]);
  return We(() => () => r == null ? void 0 : r.disconnect(), [r]), r;
}
function Jo(n) {
  let {
    callback: t,
    disabled: e
  } = n;
  const a = Yo(t), r = kt(
    () => {
      if (e || typeof window > "u" || typeof window.ResizeObserver > "u")
        return;
      const {
        ResizeObserver: o
      } = window;
      return new o(a);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e]
  );
  return We(() => () => r == null ? void 0 : r.disconnect(), [r]), r;
}
function jg(n) {
  return new Dl(ra(n), n);
}
function mc(n, t, e) {
  t === void 0 && (t = jg);
  const [a, r] = vl(l, null), o = _g({
    callback(c) {
      if (n)
        for (const f of c) {
          const {
            type: p,
            target: v
          } = f;
          if (p === "childList" && v instanceof HTMLElement && v.contains(n)) {
            r();
            break;
          }
        }
    }
  }), i = Jo({
    callback: r
  });
  return kn(() => {
    r(), n ? (i == null || i.observe(n), o == null || o.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (i == null || i.disconnect(), o == null || o.disconnect());
  }, [n]), a;
  function l(c) {
    if (!n)
      return null;
    if (n.isConnected === !1) {
      var f;
      return (f = c ?? e) != null ? f : null;
    }
    const p = t(n);
    return JSON.stringify(c) === JSON.stringify(p) ? c : p;
  }
}
function Ag(n) {
  const t = Il(n);
  return vu(n, t);
}
const gc = [];
function Lg(n) {
  const t = Et(n), e = Ka((a) => n ? a && a !== gc && n && t.current && n.parentNode === t.current.parentNode ? a : Xo(n) : gc, [n]);
  return We(() => {
    t.current = n;
  }, [n]), e;
}
function Fg(n) {
  const [t, e] = it(null), a = Et(n), r = pn((o) => {
    const i = xi(o.target);
    i && e((l) => l ? (l.set(i, ol(i)), new Map(l)) : null);
  }, []);
  return We(() => {
    const o = a.current;
    if (n !== o) {
      i(o);
      const l = n.map((c) => {
        const f = xi(c);
        return f ? (f.addEventListener("scroll", r, {
          passive: !0
        }), [f, ol(f)]) : null;
      }).filter((c) => c != null);
      e(l.length ? new Map(l) : null), a.current = n;
    }
    return () => {
      i(n), i(o);
    };
    function i(l) {
      l.forEach((c) => {
        const f = xi(c);
        f == null || f.removeEventListener("scroll", r);
      });
    }
  }, [r, n]), kt(() => n.length ? t ? Array.from(t.values()).reduce((o, i) => Vr(o, i), _n) : xu(n) : _n, [n, t]);
}
function hc(n, t) {
  t === void 0 && (t = []);
  const e = Et(null);
  return We(
    () => {
      e.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), We(() => {
    const a = n !== _n;
    a && !e.current && (e.current = n), !a && e.current && (e.current = null);
  }, [n]), e.current ? _a(n, e.current) : _n;
}
function $g(n) {
  We(
    () => {
      if (!Uo)
        return;
      const t = n.map((e) => {
        let {
          sensor: a
        } = e;
        return a.setup == null ? void 0 : a.setup();
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
function Hg(n, t) {
  return kt(() => n.reduce((e, a) => {
    let {
      eventName: r,
      handler: o
    } = a;
    return e[r] = (i) => {
      o(i, t);
    }, e;
  }, {}), [n, t]);
}
function Cu(n) {
  return kt(() => n ? fg(n) : null, [n]);
}
const Ci = [];
function Bg(n, t) {
  t === void 0 && (t = ra);
  const [e] = n, a = Cu(e ? yn(e) : null), [r, o] = vl(l, Ci), i = Jo({
    callback: o
  });
  return n.length > 0 && r === Ci && o(), kn(() => {
    n.length ? n.forEach((c) => i == null ? void 0 : i.observe(c)) : (i == null || i.disconnect(), o());
  }, [n]), r;
  function l() {
    return n.length ? n.map((c) => yu(c) ? a : new Dl(t(c), c)) : Ci;
  }
}
function Ou(n) {
  if (!n)
    return null;
  if (n.children.length > 1)
    return n;
  const t = n.children[0];
  return Wa(t) ? t : n;
}
function zg(n) {
  let {
    measure: t
  } = n;
  const [e, a] = it(null), r = pn((f) => {
    for (const {
      target: p
    } of f)
      if (Wa(p)) {
        a((v) => {
          const x = t(p);
          return v ? {
            ...v,
            width: x.width,
            height: x.height
          } : x;
        });
        break;
      }
  }, [t]), o = Jo({
    callback: r
  }), i = pn((f) => {
    const p = Ou(f);
    o == null || o.disconnect(), p && (o == null || o.observe(p)), a(p ? t(p) : null);
  }, [t, o]), [l, c] = Ro(i);
  return kt(() => ({
    nodeRef: l,
    rect: e,
    setRef: c
  }), [e, l, c]);
}
const Vg = [{
  sensor: ql,
  options: {}
}, {
  sensor: Tl,
  options: {}
}], Wg = {
  current: {}
}, So = {
  draggable: {
    measure: uc
  },
  droppable: {
    measure: uc,
    strategy: ja.WhileDragging,
    frequency: ll.Optimized
  },
  dragOverlay: {
    measure: ra
  }
};
class xa extends Map {
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
    var e, a;
    return (e = (a = this.get(t)) == null ? void 0 : a.node.current) != null ? e : void 0;
  }
}
const Kg = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new xa(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: _o
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: So,
  measureDroppableContainers: _o,
  windowRect: null,
  measuringScheduled: !1
}, Pu = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: _o,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: _o
}, Ya = /* @__PURE__ */ $a(Pu), Du = /* @__PURE__ */ $a(Kg);
function Ug() {
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
      containers: new xa()
    }
  };
}
function Yg(n, t) {
  switch (t.type) {
    case Zt.DragStart:
      return {
        ...n,
        draggable: {
          ...n.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active
        }
      };
    case Zt.DragMove:
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
    case Zt.DragEnd:
    case Zt.DragCancel:
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
    case Zt.RegisterDroppable: {
      const {
        element: e
      } = t, {
        id: a
      } = e, r = new xa(n.droppable.containers);
      return r.set(a, e), {
        ...n,
        droppable: {
          ...n.droppable,
          containers: r
        }
      };
    }
    case Zt.SetDroppableDisabled: {
      const {
        id: e,
        key: a,
        disabled: r
      } = t, o = n.droppable.containers.get(e);
      if (!o || a !== o.key)
        return n;
      const i = new xa(n.droppable.containers);
      return i.set(e, {
        ...o,
        disabled: r
      }), {
        ...n,
        droppable: {
          ...n.droppable,
          containers: i
        }
      };
    }
    case Zt.UnregisterDroppable: {
      const {
        id: e,
        key: a
      } = t, r = n.droppable.containers.get(e);
      if (!r || a !== r.key)
        return n;
      const o = new xa(n.droppable.containers);
      return o.delete(e), {
        ...n,
        droppable: {
          ...n.droppable,
          containers: o
        }
      };
    }
    default:
      return n;
  }
}
function Gg(n) {
  let {
    disabled: t
  } = n;
  const {
    active: e,
    activatorEvent: a,
    draggableNodes: r
  } = zn(Ya), o = Mo(a), i = Mo(e == null ? void 0 : e.id);
  return We(() => {
    if (!t && !a && o && i != null) {
      if (!Go(o) || document.activeElement === o.target)
        return;
      const l = r.get(i);
      if (!l)
        return;
      const {
        activatorNode: c,
        node: f
      } = l;
      if (!c.current && !f.current)
        return;
      requestAnimationFrame(() => {
        for (const p of [c.current, f.current]) {
          if (!p)
            continue;
          const v = Vm(p);
          if (v) {
            v.focus();
            break;
          }
        }
      });
    }
  }, [a, t, r, i, o]), null;
}
function Tu(n, t) {
  let {
    transform: e,
    ...a
  } = t;
  return n != null && n.length ? n.reduce((r, o) => o({
    transform: r,
    ...a
  }), e) : e;
}
function Xg(n) {
  return kt(
    () => ({
      draggable: {
        ...So.draggable,
        ...n == null ? void 0 : n.draggable
      },
      droppable: {
        ...So.droppable,
        ...n == null ? void 0 : n.droppable
      },
      dragOverlay: {
        ...So.dragOverlay,
        ...n == null ? void 0 : n.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n == null ? void 0 : n.draggable, n == null ? void 0 : n.droppable, n == null ? void 0 : n.dragOverlay]
  );
}
function Jg(n) {
  let {
    activeNode: t,
    measure: e,
    initialRect: a,
    config: r = !0
  } = n;
  const o = Et(!1), {
    x: i,
    y: l
  } = typeof r == "boolean" ? {
    x: r,
    y: r
  } : r;
  kn(() => {
    if (!i && !l || !t) {
      o.current = !1;
      return;
    }
    if (o.current || !a)
      return;
    const f = t == null ? void 0 : t.node.current;
    if (!f || f.isConnected === !1)
      return;
    const p = e(f), v = vu(p, a);
    if (i || (v.x = 0), l || (v.y = 0), o.current = !0, Math.abs(v.x) > 0 || Math.abs(v.y) > 0) {
      const x = gu(f);
      x && x.scrollBy({
        top: v.y,
        left: v.x
      });
    }
  }, [t, i, l, a, e]);
}
const Zo = /* @__PURE__ */ $a({
  ..._n,
  scaleX: 1,
  scaleY: 1
});
var dr;
(function(n) {
  n[n.Uninitialized = 0] = "Uninitialized", n[n.Initializing = 1] = "Initializing", n[n.Initialized = 2] = "Initialized";
})(dr || (dr = {}));
const Zg = /* @__PURE__ */ Wd(function(t) {
  var e, a, r, o;
  let {
    id: i,
    accessibility: l,
    autoScroll: c = !0,
    children: f,
    sensors: p = Vg,
    collisionDetection: v = ig,
    measuring: x,
    modifiers: b,
    ...k
  } = t;
  const y = vl(Yg, void 0, Ug), [q, O] = y, [E, P] = Xm(), [A, C] = it(dr.Uninitialized), K = A === dr.Initialized, {
    draggable: {
      active: S,
      nodes: H,
      translate: X
    },
    droppable: {
      containers: U
    }
  } = q, I = S ? H.get(S) : null, oe = Et({
    initial: null,
    translated: null
  }), Y = kt(() => {
    var rt;
    return S != null ? {
      id: S,
      // It's possible for the active node to unmount while dragging
      data: (rt = I == null ? void 0 : I.data) != null ? rt : Wg,
      rect: oe
    } : null;
  }, [S, I]), ve = Et(null), [ge, Ce] = it(null), [Oe, we] = it(null), de = Na(k, Object.values(k)), F = Ua("DndDescribedBy", i), se = kt(() => U.getEnabled(), [U]), ae = Xg(x), {
    droppableRects: N,
    measureDroppableContainers: j,
    measuringScheduled: B
  } = Mg(se, {
    dragging: K,
    dependencies: [X.x, X.y],
    config: ae.droppable
  }), Z = Ig(H, S), ie = kt(() => Oe ? No(Oe) : null, [Oe]), V = Mt(), z = Ng(Z, ae.draggable.measure);
  Jg({
    activeNode: S ? H.get(S) : null,
    config: V.layoutShiftCompensation,
    initialRect: z,
    measure: ae.draggable.measure
  });
  const ee = mc(Z, ae.draggable.measure, z), Ee = mc(Z ? Z.parentElement : null), te = Et({
    activatorEvent: null,
    active: null,
    activeNode: Z,
    collisionRect: null,
    collisions: null,
    droppableRects: N,
    draggableNodes: H,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: U,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), Ae = U.getNodeFor((e = te.current.over) == null ? void 0 : e.id), Je = zg({
    measure: ae.dragOverlay.measure
  }), Ue = (a = Je.nodeRef.current) != null ? a : Z, Ne = K ? (r = Je.rect) != null ? r : ee : null, nt = !!(Je.nodeRef.current && Je.rect), $t = Ag(nt ? null : ee), It = Cu(Ue ? yn(Ue) : null), Ze = Lg(K ? Ae ?? Z : null), Ct = Bg(Ze), _t = Tu(b, {
    transform: {
      x: X.x - $t.x,
      y: X.y - $t.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: Oe,
    active: Y,
    activeNodeRect: ee,
    containerNodeRect: Ee,
    draggingNodeRect: Ne,
    over: te.current.over,
    overlayNodeRect: Je.rect,
    scrollableAncestors: Ze,
    scrollableAncestorRects: Ct,
    windowRect: It
  }), St = ie ? Vr(ie, X) : null, Ot = Fg(Ze), vt = hc(Ot), on = hc(Ot, [ee]), mt = Vr(_t, vt), Pt = Ne ? cg(Ne, _t) : null, Rt = Y && Pt ? v({
    active: Y,
    collisionRect: Pt,
    droppableRects: N,
    droppableContainers: se,
    pointerCoordinates: St
  }) : null, Ht = pu(Rt, "id"), [jt, At] = it(null), Le = nt ? _t : Vr(_t, on), re = lg(Le, (o = jt == null ? void 0 : jt.rect) != null ? o : null, ee), De = pn(
    (rt, Qe) => {
      let {
        sensor: et,
        options: lt
      } = Qe;
      if (ve.current == null)
        return;
      const ht = H.get(ve.current);
      if (!ht)
        return;
      const Ie = rt.nativeEvent, J = new et({
        active: ve.current,
        activeNode: ht,
        event: Ie,
        options: lt,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: te,
        onStart(pe) {
          const Pe = ve.current;
          if (Pe == null)
            return;
          const st = H.get(Pe);
          if (!st)
            return;
          const {
            onDragStart: wt
          } = de.current, Bt = {
            active: {
              id: Pe,
              data: st.data,
              rect: oe
            }
          };
          ca(() => {
            wt == null || wt(Bt), C(dr.Initializing), O({
              type: Zt.DragStart,
              initialCoordinates: pe,
              active: Pe
            }), E({
              type: "onDragStart",
              event: Bt
            });
          });
        },
        onMove(pe) {
          O({
            type: Zt.DragMove,
            coordinates: pe
          });
        },
        onEnd: fe(Zt.DragEnd),
        onCancel: fe(Zt.DragCancel)
      });
      ca(() => {
        Ce(J), we(rt.nativeEvent);
      });
      function fe(pe) {
        return async function() {
          const {
            active: st,
            collisions: wt,
            over: Bt,
            scrollAdjustedTranslate: Qt
          } = te.current;
          let zt = null;
          if (st && Qt) {
            const {
              cancelDrop: Wt
            } = de.current;
            zt = {
              activatorEvent: Ie,
              active: st,
              collisions: wt,
              delta: Qt,
              over: Bt
            }, pe === Zt.DragEnd && typeof Wt == "function" && await Promise.resolve(Wt(zt)) && (pe = Zt.DragCancel);
          }
          ve.current = null, ca(() => {
            O({
              type: pe
            }), C(dr.Uninitialized), At(null), Ce(null), we(null);
            const Wt = pe === Zt.DragEnd ? "onDragEnd" : "onDragCancel";
            if (zt) {
              const en = de.current[Wt];
              en == null || en(zt), E({
                type: Wt,
                event: zt
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [H]
  ), Be = pn((rt, Qe) => (et, lt) => {
    const ht = et.nativeEvent, Ie = H.get(lt);
    if (
      // Another sensor is already instantiating
      ve.current !== null || // No active draggable
      !Ie || // Event has already been captured
      ht.dndKit || ht.defaultPrevented
    )
      return;
    const J = {
      active: Ie
    };
    rt(et, Qe.options, J) === !0 && (ht.dndKit = {
      capturedBy: Qe.sensor
    }, ve.current = lt, De(et, Qe));
  }, [H, De]), je = Rg(p, Be);
  $g(p), kn(() => {
    ee && A === dr.Initializing && C(dr.Initialized);
  }, [ee, A]), We(
    () => {
      const {
        onDragMove: rt
      } = de.current, {
        active: Qe,
        activatorEvent: et,
        collisions: lt,
        over: ht
      } = te.current;
      if (!Qe || !et)
        return;
      const Ie = {
        active: Qe,
        activatorEvent: et,
        collisions: lt,
        delta: {
          x: mt.x,
          y: mt.y
        },
        over: ht
      };
      ca(() => {
        rt == null || rt(Ie), E({
          type: "onDragMove",
          event: Ie
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [mt.x, mt.y]
  ), We(
    () => {
      const {
        active: rt,
        activatorEvent: Qe,
        collisions: et,
        droppableContainers: lt,
        scrollAdjustedTranslate: ht
      } = te.current;
      if (!rt || ve.current == null || !Qe || !ht)
        return;
      const {
        onDragOver: Ie
      } = de.current, J = lt.get(Ht), fe = J && J.rect.current ? {
        id: J.id,
        rect: J.rect.current,
        data: J.data,
        disabled: J.disabled
      } : null, pe = {
        active: rt,
        activatorEvent: Qe,
        collisions: et,
        delta: {
          x: ht.x,
          y: ht.y
        },
        over: fe
      };
      ca(() => {
        At(fe), Ie == null || Ie(pe), E({
          type: "onDragOver",
          event: pe
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Ht]
  ), kn(() => {
    te.current = {
      activatorEvent: Oe,
      active: Y,
      activeNode: Z,
      collisionRect: Pt,
      collisions: Rt,
      droppableRects: N,
      draggableNodes: H,
      draggingNode: Ue,
      draggingNodeRect: Ne,
      droppableContainers: U,
      over: jt,
      scrollableAncestors: Ze,
      scrollAdjustedTranslate: mt
    }, oe.current = {
      initial: Ne,
      translated: Pt
    };
  }, [Y, Z, Rt, Pt, H, Ue, Ne, N, U, jt, Ze, mt]), Tg({
    ...V,
    delta: X,
    draggingRect: Pt,
    pointerCoordinates: St,
    scrollableAncestors: Ze,
    scrollableAncestorRects: Ct
  });
  const $e = kt(() => ({
    active: Y,
    activeNode: Z,
    activeNodeRect: ee,
    activatorEvent: Oe,
    collisions: Rt,
    containerNodeRect: Ee,
    dragOverlay: Je,
    draggableNodes: H,
    droppableContainers: U,
    droppableRects: N,
    over: jt,
    measureDroppableContainers: j,
    scrollableAncestors: Ze,
    scrollableAncestorRects: Ct,
    measuringConfiguration: ae,
    measuringScheduled: B,
    windowRect: It
  }), [Y, Z, ee, Oe, Rt, Ee, Je, H, U, N, jt, j, Ze, Ct, ae, B, It]), ft = kt(() => ({
    activatorEvent: Oe,
    activators: je,
    active: Y,
    activeNodeRect: ee,
    ariaDescribedById: {
      draggable: F
    },
    dispatch: O,
    draggableNodes: H,
    over: jt,
    measureDroppableContainers: j
  }), [Oe, je, Y, ee, O, F, H, jt, j]);
  return ze.createElement(uu.Provider, {
    value: P
  }, ze.createElement(Ya.Provider, {
    value: ft
  }, ze.createElement(Du.Provider, {
    value: $e
  }, ze.createElement(Zo.Provider, {
    value: re
  }, f)), ze.createElement(Gg, {
    disabled: (l == null ? void 0 : l.restoreFocus) === !1
  })), ze.createElement(Qm, {
    ...l,
    hiddenTextDescribedById: F
  }));
  function Mt() {
    const rt = (ge == null ? void 0 : ge.autoScrollEnabled) === !1, Qe = typeof c == "object" ? c.enabled === !1 : c === !1, et = K && !rt && !Qe;
    return typeof c == "object" ? {
      ...c,
      enabled: et
    } : {
      enabled: et
    };
  }
}), Qg = /* @__PURE__ */ $a(null), bc = "button", eh = "Droppable";
function ku(n) {
  let {
    id: t,
    data: e,
    disabled: a = !1,
    attributes: r
  } = n;
  const o = Ua(eh), {
    activators: i,
    activatorEvent: l,
    active: c,
    activeNodeRect: f,
    ariaDescribedById: p,
    draggableNodes: v,
    over: x
  } = zn(Ya), {
    role: b = bc,
    roleDescription: k = "draggable",
    tabIndex: y = 0
  } = r ?? {}, q = (c == null ? void 0 : c.id) === t, O = zn(q ? Zo : Qg), [E, P] = Ro(), [A, C] = Ro(), K = Hg(i, t), S = Na(e);
  kn(
    () => (v.set(t, {
      id: t,
      key: o,
      node: E,
      activatorNode: A,
      data: S
    }), () => {
      const X = v.get(t);
      X && X.key === o && v.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [v, t]
  );
  const H = kt(() => ({
    role: b,
    tabIndex: y,
    "aria-disabled": a,
    "aria-pressed": q && b === bc ? !0 : void 0,
    "aria-roledescription": k,
    "aria-describedby": p.draggable
  }), [a, b, y, q, k, p.draggable]);
  return {
    active: c,
    activatorEvent: l,
    activeNodeRect: f,
    attributes: H,
    isDragging: q,
    listeners: a ? void 0 : K,
    node: E,
    over: x,
    setNodeRef: P,
    setActivatorNodeRef: C,
    transform: O
  };
}
function qu() {
  return zn(Du);
}
const th = "Droppable", nh = {
  timeout: 25
};
function Iu(n) {
  let {
    data: t,
    disabled: e = !1,
    id: a,
    resizeObserverConfig: r
  } = n;
  const o = Ua(th), {
    active: i,
    dispatch: l,
    over: c,
    measureDroppableContainers: f
  } = zn(Ya), p = Et({
    disabled: e
  }), v = Et(!1), x = Et(null), b = Et(null), {
    disabled: k,
    updateMeasurementsFor: y,
    timeout: q
  } = {
    ...nh,
    ...r
  }, O = Na(y ?? a), E = pn(
    () => {
      if (!v.current) {
        v.current = !0;
        return;
      }
      b.current != null && clearTimeout(b.current), b.current = setTimeout(() => {
        f(Array.isArray(O.current) ? O.current : [O.current]), b.current = null;
      }, q);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [q]
  ), P = Jo({
    callback: E,
    disabled: k || !i
  }), A = pn((H, X) => {
    P && (X && (P.unobserve(X), v.current = !1), H && P.observe(H));
  }, [P]), [C, K] = Ro(A), S = Na(t);
  return We(() => {
    !P || !C.current || (P.disconnect(), v.current = !1, P.observe(C.current));
  }, [C, P]), kn(
    () => (l({
      type: Zt.RegisterDroppable,
      element: {
        id: a,
        key: o,
        disabled: e,
        node: C,
        rect: x,
        data: S
      }
    }), () => l({
      type: Zt.UnregisterDroppable,
      key: o,
      id: a
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [a]
  ), We(() => {
    e !== p.current.disabled && (l({
      type: Zt.SetDroppableDisabled,
      id: a,
      key: o,
      disabled: e
    }), p.current.disabled = e);
  }, [a, o, e, l]), {
    active: i,
    rect: x,
    isOver: (c == null ? void 0 : c.id) === a,
    node: C,
    over: c,
    setNodeRef: K
  };
}
function rh(n) {
  let {
    animation: t,
    children: e
  } = n;
  const [a, r] = it(null), [o, i] = it(null), l = Mo(e);
  return !e && !a && l && r(l), kn(() => {
    if (!o)
      return;
    const c = a == null ? void 0 : a.key, f = a == null ? void 0 : a.props.id;
    if (c == null || f == null) {
      r(null);
      return;
    }
    Promise.resolve(t(f, o)).then(() => {
      r(null);
    });
  }, [t, a, o]), ze.createElement(ze.Fragment, null, e, a ? Kd(a, {
    ref: i
  }) : null);
}
const ah = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function oh(n) {
  let {
    children: t
  } = n;
  return ze.createElement(Ya.Provider, {
    value: Pu
  }, ze.createElement(Zo.Provider, {
    value: ah
  }, t));
}
const ih = {
  position: "fixed",
  touchAction: "none"
}, lh = (n) => Go(n) ? "transform 250ms ease" : void 0, sh = /* @__PURE__ */ Ud((n, t) => {
  let {
    as: e,
    activatorEvent: a,
    adjustScale: r,
    children: o,
    className: i,
    rect: l,
    style: c,
    transform: f,
    transition: p = lh
  } = n;
  if (!l)
    return null;
  const v = r ? f : {
    ...f,
    scaleX: 1,
    scaleY: 1
  }, x = {
    ...ih,
    width: l.width,
    height: l.height,
    top: l.top,
    left: l.left,
    transform: Zn.Transform.toString(v),
    transformOrigin: r && a ? tg(a, l) : void 0,
    transition: typeof p == "function" ? p(a) : p,
    ...c
  };
  return ze.createElement(e, {
    className: i,
    style: x,
    ref: t
  }, o);
}), ch = (n) => (t) => {
  let {
    active: e,
    dragOverlay: a
  } = t;
  const r = {}, {
    styles: o,
    className: i
  } = n;
  if (o != null && o.active)
    for (const [l, c] of Object.entries(o.active))
      c !== void 0 && (r[l] = e.node.style.getPropertyValue(l), e.node.style.setProperty(l, c));
  if (o != null && o.dragOverlay)
    for (const [l, c] of Object.entries(o.dragOverlay))
      c !== void 0 && a.node.style.setProperty(l, c);
  return i != null && i.active && e.node.classList.add(i.active), i != null && i.dragOverlay && a.node.classList.add(i.dragOverlay), function() {
    for (const [c, f] of Object.entries(r))
      e.node.style.setProperty(c, f);
    i != null && i.active && e.node.classList.remove(i.active);
  };
}, uh = (n) => {
  let {
    transform: {
      initial: t,
      final: e
    }
  } = n;
  return [{
    transform: Zn.Transform.toString(t)
  }, {
    transform: Zn.Transform.toString(e)
  }];
}, dh = {
  duration: 250,
  easing: "ease",
  keyframes: uh,
  sideEffects: /* @__PURE__ */ ch({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function fh(n) {
  let {
    config: t,
    draggableNodes: e,
    droppableContainers: a,
    measuringConfiguration: r
  } = n;
  return Yo((o, i) => {
    if (t === null)
      return;
    const l = e.get(o);
    if (!l)
      return;
    const c = l.node.current;
    if (!c)
      return;
    const f = Ou(i);
    if (!f)
      return;
    const {
      transform: p
    } = yn(i).getComputedStyle(i), v = mu(p);
    if (!v)
      return;
    const x = typeof t == "function" ? t : ph(t);
    return Su(c, r.draggable.measure), x({
      active: {
        id: o,
        data: l.data,
        node: c,
        rect: r.draggable.measure(c)
      },
      draggableNodes: e,
      dragOverlay: {
        node: i,
        rect: r.dragOverlay.measure(f)
      },
      droppableContainers: a,
      measuringConfiguration: r,
      transform: v
    });
  });
}
function ph(n) {
  const {
    duration: t,
    easing: e,
    sideEffects: a,
    keyframes: r
  } = {
    ...dh,
    ...n
  };
  return (o) => {
    let {
      active: i,
      dragOverlay: l,
      transform: c,
      ...f
    } = o;
    if (!t)
      return;
    const p = {
      x: l.rect.left - i.rect.left,
      y: l.rect.top - i.rect.top
    }, v = {
      scaleX: c.scaleX !== 1 ? i.rect.width * c.scaleX / l.rect.width : 1,
      scaleY: c.scaleY !== 1 ? i.rect.height * c.scaleY / l.rect.height : 1
    }, x = {
      x: c.x - p.x,
      y: c.y - p.y,
      ...v
    }, b = r({
      ...f,
      active: i,
      dragOverlay: l,
      transform: {
        initial: c,
        final: x
      }
    }), [k] = b, y = b[b.length - 1];
    if (JSON.stringify(k) === JSON.stringify(y))
      return;
    const q = a == null ? void 0 : a({
      active: i,
      dragOverlay: l,
      ...f
    }), O = l.node.animate(b, {
      duration: t,
      easing: e,
      fill: "forwards"
    });
    return new Promise((E) => {
      O.onfinish = () => {
        q == null || q(), E();
      };
    });
  };
}
let yc = 0;
function vh(n) {
  return kt(() => {
    if (n != null)
      return yc++, yc;
  }, [n]);
}
const mh = /* @__PURE__ */ ze.memo((n) => {
  let {
    adjustScale: t = !1,
    children: e,
    dropAnimation: a,
    style: r,
    transition: o,
    modifiers: i,
    wrapperElement: l = "div",
    className: c,
    zIndex: f = 999
  } = n;
  const {
    activatorEvent: p,
    active: v,
    activeNodeRect: x,
    containerNodeRect: b,
    draggableNodes: k,
    droppableContainers: y,
    dragOverlay: q,
    over: O,
    measuringConfiguration: E,
    scrollableAncestors: P,
    scrollableAncestorRects: A,
    windowRect: C
  } = qu(), K = zn(Zo), S = vh(v == null ? void 0 : v.id), H = Tu(i, {
    activatorEvent: p,
    active: v,
    activeNodeRect: x,
    containerNodeRect: b,
    draggingNodeRect: q.rect,
    over: O,
    overlayNodeRect: q.rect,
    scrollableAncestors: P,
    scrollableAncestorRects: A,
    transform: K,
    windowRect: C
  }), X = Il(x), U = fh({
    config: a,
    draggableNodes: k,
    droppableContainers: y,
    measuringConfiguration: E
  }), I = X ? q.setRef : void 0;
  return ze.createElement(oh, null, ze.createElement(rh, {
    animation: U
  }, v && S ? ze.createElement(sh, {
    key: S,
    id: v.id,
    ref: I,
    as: l,
    activatorEvent: p,
    adjustScale: t,
    className: c,
    transition: o,
    rect: X,
    style: {
      zIndex: f,
      ...r
    },
    transform: H
  }, e) : null));
});
function Sa(n, t, e) {
  const a = n.slice();
  return a.splice(e < 0 ? a.length + e : e, 0, a.splice(t, 1)[0]), a;
}
function gh(n, t) {
  return n.reduce((e, a, r) => {
    const o = t.get(a);
    return o && (e[r] = o), e;
  }, Array(n.length));
}
function po(n) {
  return n !== null && n >= 0;
}
function hh(n, t) {
  if (n === t)
    return !0;
  if (n.length !== t.length)
    return !1;
  for (let e = 0; e < n.length; e++)
    if (n[e] !== t[e])
      return !1;
  return !0;
}
function bh(n) {
  return typeof n == "boolean" ? {
    draggable: n,
    droppable: n
  } : n;
}
const Ru = (n) => {
  let {
    rects: t,
    activeIndex: e,
    overIndex: a,
    index: r
  } = n;
  const o = Sa(t, a, e), i = t[r], l = o[r];
  return !l || !i ? null : {
    x: l.left - i.left,
    y: l.top - i.top,
    scaleX: l.width / i.width,
    scaleY: l.height / i.height
  };
}, yh = (n) => {
  let {
    activeIndex: t,
    index: e,
    rects: a,
    overIndex: r
  } = n, o, i;
  return e === t && (o = a[e], i = a[r]), e === r && (o = a[e], i = a[t]), !i || !o ? null : {
    x: i.left - o.left,
    y: i.top - o.top,
    scaleX: i.width / o.width,
    scaleY: i.height / o.height
  };
}, Mu = "Sortable", Nu = /* @__PURE__ */ ze.createContext({
  activeIndex: -1,
  containerId: Mu,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: Ru,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function wh(n) {
  let {
    children: t,
    id: e,
    items: a,
    strategy: r = Ru,
    disabled: o = !1
  } = n;
  const {
    active: i,
    dragOverlay: l,
    droppableRects: c,
    over: f,
    measureDroppableContainers: p
  } = qu(), v = Ua(Mu, e), x = l.rect !== null, b = kt(() => a.map((K) => typeof K == "object" && "id" in K ? K.id : K), [a]), k = i != null, y = i ? b.indexOf(i.id) : -1, q = f ? b.indexOf(f.id) : -1, O = Et(b), E = !hh(b, O.current), P = q !== -1 && y === -1 || E, A = bh(o);
  kn(() => {
    E && k && p(b);
  }, [E, b, k, p]), We(() => {
    O.current = b;
  }, [b]);
  const C = kt(
    () => ({
      activeIndex: y,
      containerId: v,
      disabled: A,
      disableTransforms: P,
      items: b,
      overIndex: q,
      useDragOverlay: x,
      sortedRects: gh(b, c),
      strategy: r
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [y, v, A.draggable, A.droppable, P, b, q, c, x, r]
  );
  return ze.createElement(Nu.Provider, {
    value: C
  }, t);
}
const xh = (n) => {
  let {
    id: t,
    items: e,
    activeIndex: a,
    overIndex: r
  } = n;
  return Sa(e, a, r).indexOf(t);
}, Sh = (n) => {
  let {
    containerId: t,
    isSorting: e,
    wasDragging: a,
    index: r,
    items: o,
    newIndex: i,
    previousItems: l,
    previousContainerId: c,
    transition: f
  } = n;
  return !f || !a || l !== o && r === i ? !1 : e ? !0 : i !== r && t === c;
}, Eh = {
  duration: 200,
  easing: "ease"
}, _u = "transform", Ch = /* @__PURE__ */ Zn.Transition.toString({
  property: _u,
  duration: 0,
  easing: "linear"
}), Oh = {
  roleDescription: "sortable"
};
function Ph(n) {
  let {
    disabled: t,
    index: e,
    node: a,
    rect: r
  } = n;
  const [o, i] = it(null), l = Et(e);
  return kn(() => {
    if (!t && e !== l.current && a.current) {
      const c = r.current;
      if (c) {
        const f = ra(a.current, {
          ignoreTransform: !0
        }), p = {
          x: c.left - f.left,
          y: c.top - f.top,
          scaleX: c.width / f.width,
          scaleY: c.height / f.height
        };
        (p.x || p.y) && i(p);
      }
    }
    e !== l.current && (l.current = e);
  }, [t, e, a, r]), We(() => {
    o && i(null);
  }, [o]), o;
}
function Dh(n) {
  let {
    animateLayoutChanges: t = Sh,
    attributes: e,
    disabled: a,
    data: r,
    getNewIndex: o = xh,
    id: i,
    strategy: l,
    resizeObserverConfig: c,
    transition: f = Eh
  } = n;
  const {
    items: p,
    containerId: v,
    activeIndex: x,
    disabled: b,
    disableTransforms: k,
    sortedRects: y,
    overIndex: q,
    useDragOverlay: O,
    strategy: E
  } = zn(Nu), P = Th(a, b), A = p.indexOf(i), C = kt(() => ({
    sortable: {
      containerId: v,
      index: A,
      items: p
    },
    ...r
  }), [v, r, A, p]), K = kt(() => p.slice(p.indexOf(i)), [p, i]), {
    rect: S,
    node: H,
    isOver: X,
    setNodeRef: U
  } = Iu({
    id: i,
    data: C,
    disabled: P.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: K,
      ...c
    }
  }), {
    active: I,
    activatorEvent: oe,
    activeNodeRect: Y,
    attributes: ve,
    setNodeRef: ge,
    listeners: Ce,
    isDragging: Oe,
    over: we,
    setActivatorNodeRef: de,
    transform: F
  } = ku({
    id: i,
    data: C,
    attributes: {
      ...Oh,
      ...e
    },
    disabled: P.draggable
  }), se = $m(U, ge), ae = !!I, N = ae && !k && po(x) && po(q), j = !O && Oe, B = j && N ? F : null, ie = N ? B ?? (l ?? E)({
    rects: y,
    activeNodeRect: Y,
    activeIndex: x,
    overIndex: q,
    index: A
  }) : null, V = po(x) && po(q) ? o({
    id: i,
    items: p,
    activeIndex: x,
    overIndex: q
  }) : A, z = I == null ? void 0 : I.id, ee = Et({
    activeId: z,
    items: p,
    newIndex: V,
    containerId: v
  }), Ee = p !== ee.current.items, te = t({
    active: I,
    containerId: v,
    isDragging: Oe,
    isSorting: ae,
    id: i,
    index: A,
    items: p,
    newIndex: ee.current.newIndex,
    previousItems: ee.current.items,
    previousContainerId: ee.current.containerId,
    transition: f,
    wasDragging: ee.current.activeId != null
  }), Ae = Ph({
    disabled: !te,
    index: A,
    node: H,
    rect: S
  });
  return We(() => {
    ae && ee.current.newIndex !== V && (ee.current.newIndex = V), v !== ee.current.containerId && (ee.current.containerId = v), p !== ee.current.items && (ee.current.items = p);
  }, [ae, V, v, p]), We(() => {
    if (z === ee.current.activeId)
      return;
    if (z && !ee.current.activeId) {
      ee.current.activeId = z;
      return;
    }
    const Ue = setTimeout(() => {
      ee.current.activeId = z;
    }, 50);
    return () => clearTimeout(Ue);
  }, [z]), {
    active: I,
    activeIndex: x,
    attributes: ve,
    data: C,
    rect: S,
    index: A,
    newIndex: V,
    items: p,
    isOver: X,
    isSorting: ae,
    isDragging: Oe,
    listeners: Ce,
    node: H,
    overIndex: q,
    over: we,
    setNodeRef: se,
    setActivatorNodeRef: de,
    setDroppableNodeRef: U,
    setDraggableNodeRef: ge,
    transform: Ae ?? ie,
    transition: Je()
  };
  function Je() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      Ae || // Or to prevent items jumping to back to their "new" position when items change
      Ee && ee.current.newIndex === A
    )
      return Ch;
    if (!(j && !Go(oe) || !f) && (ae || te))
      return Zn.Transition.toString({
        ...f,
        property: _u
      });
  }
}
function Th(n, t) {
  var e, a;
  return typeof n == "boolean" ? {
    draggable: n,
    // Backwards compatibility
    droppable: !1
  } : {
    draggable: (e = n == null ? void 0 : n.draggable) != null ? e : t.draggable,
    droppable: (a = n == null ? void 0 : n.droppable) != null ? a : t.droppable
  };
}
function Ao(n) {
  if (!n)
    return !1;
  const t = n.data.current;
  return !!(t && "sortable" in t && typeof t.sortable == "object" && "containerId" in t.sortable && "items" in t.sortable && "index" in t.sortable);
}
const kh = [ct.Down, ct.Right, ct.Up, ct.Left], qh = (n, t) => {
  let {
    context: {
      active: e,
      collisionRect: a,
      droppableRects: r,
      droppableContainers: o,
      over: i,
      scrollableAncestors: l
    }
  } = t;
  if (kh.includes(n.code)) {
    if (n.preventDefault(), !e || !a)
      return;
    const c = [];
    o.getEnabled().forEach((v) => {
      if (!v || v != null && v.disabled)
        return;
      const x = r.get(v.id);
      if (x)
        switch (n.code) {
          case ct.Down:
            a.top < x.top && c.push(v);
            break;
          case ct.Up:
            a.top > x.top && c.push(v);
            break;
          case ct.Left:
            a.left > x.left && c.push(v);
            break;
          case ct.Right:
            a.left < x.left && c.push(v);
            break;
        }
    });
    const f = ag({
      active: e,
      collisionRect: a,
      droppableRects: r,
      droppableContainers: c,
      pointerCoordinates: null
    });
    let p = pu(f, "id");
    if (p === (i == null ? void 0 : i.id) && f.length > 1 && (p = f[1].id), p != null) {
      const v = o.get(e.id), x = o.get(p), b = x ? r.get(x.id) : null, k = x == null ? void 0 : x.node.current;
      if (k && b && v && x) {
        const q = Xo(k).some((K, S) => l[S] !== K), O = ju(v, x), E = Ih(v, x), P = q || !O ? {
          x: 0,
          y: 0
        } : {
          x: E ? a.width - b.width : 0,
          y: E ? a.height - b.height : 0
        }, A = {
          x: b.left,
          y: b.top
        };
        return P.x && P.y ? A : _a(A, P);
      }
    }
  }
};
function ju(n, t) {
  return !Ao(n) || !Ao(t) ? !1 : n.data.current.sortable.containerId === t.data.current.sortable.containerId;
}
function Ih(n, t) {
  return !Ao(n) || !Ao(t) || !ju(n, t) ? !1 : n.data.current.sortable.index < t.data.current.sortable.index;
}
var Rh = {
  root: "p-button-group p-component"
}, vo = ot.extend({
  defaultProps: {
    __TYPE: "ButtonGroup",
    children: void 0
  },
  css: {
    classes: Rh
  }
}), Au = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(n, t) {
  var e = cn(), a = d.useContext(Vt), r = vo.getProps(n, a), o = d.useRef(t), i = vo.setMetaData({
    props: r
  }), l = i.ptm, c = i.cx, f = i.isUnstyled;
  In(vo.css.styles, f, {
    name: "buttongroup"
  }), d.useEffect(function() {
    Q.combinedRefs(o, t);
  }, [o, t]);
  var p = e({
    ref: o,
    className: qe(c("root")),
    role: "group"
  }, vo.getOtherProps(r), l("root"));
  return /* @__PURE__ */ d.createElement("span", p, r.children);
}));
Au.displayName = "ButtonGroup";
function sl() {
  return sl = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
    }
    return n;
  }, sl.apply(this, arguments);
}
var Lu = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(n, t) {
  var e = bn.getPTI(n);
  return /* @__PURE__ */ d.createElement("svg", sl({
    ref: t,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e), /* @__PURE__ */ d.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z",
    fill: "currentColor"
  }));
}));
Lu.displayName = "WindowMaximizeIcon";
function cl() {
  return cl = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
    }
    return n;
  }, cl.apply(this, arguments);
}
var Fu = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(n, t) {
  var e = bn.getPTI(n);
  return /* @__PURE__ */ d.createElement("svg", cl({
    ref: t,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e), /* @__PURE__ */ d.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z",
    fill: "currentColor"
  }));
}));
Fu.displayName = "WindowMinimizeIcon";
function ul() {
  return ul = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
    }
    return n;
  }, ul.apply(this, arguments);
}
function Aa(n) {
  "@babel/helpers - typeof";
  return Aa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Aa(n);
}
function dl(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, a = new Array(t); e < t; e++) a[e] = n[e];
  return a;
}
function Mh(n) {
  if (Array.isArray(n)) return dl(n);
}
function Nh(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function $u(n, t) {
  if (n) {
    if (typeof n == "string") return dl(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return dl(n, t);
  }
}
function _h() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jh(n) {
  return Mh(n) || Nh(n) || $u(n) || _h();
}
function Ah(n, t) {
  if (Aa(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var a = e.call(n, t || "default");
    if (Aa(a) !== "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function Lh(n) {
  var t = Ah(n, "string");
  return Aa(t) === "symbol" ? t : String(t);
}
function Rl(n, t, e) {
  return t = Lh(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function Fh(n) {
  if (Array.isArray(n)) return n;
}
function $h(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var a, r, o, i, l = [], c = !0, f = !1;
    try {
      if (o = (e = e.call(n)).next, t !== 0) for (; !(c = (a = o.call(e)).done) && (l.push(a.value), l.length !== t); c = !0) ;
    } catch (p) {
      f = !0, r = p;
    } finally {
      try {
        if (!c && e.return != null && (i = e.return(), Object(i) !== i)) return;
      } finally {
        if (f) throw r;
      }
    }
    return l;
  }
}
function Hh() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cr(n, t) {
  return Fh(n) || $h(n, t) || $u(n, t) || Hh();
}
var Bh = "", Ea = ot.extend({
  defaultProps: {
    __TYPE: "FocusTrap",
    children: void 0
  },
  css: {
    styles: Bh
  },
  getProps: function(t) {
    return Q.getMergedProps(t, Ea.defaultProps);
  },
  getOtherProps: function(t) {
    return Q.getDiffProps(t, Ea.defaultProps);
  }
});
function wc(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function zh(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wc(Object(e), !0).forEach(function(a) {
      Rl(n, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : wc(Object(e)).forEach(function(a) {
      Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return n;
}
var Vh = /* @__PURE__ */ ze.memo(/* @__PURE__ */ ze.forwardRef(function(n, t) {
  var e = ze.useRef(null), a = ze.useRef(null), r = ze.useRef(null), o = ze.useContext(Vt), i = Ea.getProps(n, o), l = {
    props: i
  };
  Cr(Ea.css.styles, {
    name: "focustrap"
  });
  var c = Ea.setMetaData(zh({}, l));
  c.ptm, ze.useImperativeHandle(t, function() {
    return {
      props: i,
      getInk: function() {
        return a.current;
      },
      getTarget: function() {
        return e.current;
      }
    };
  }), qn(function() {
    i.disabled || (e.current = f(), p(e.current));
  });
  var f = function() {
    return a.current && a.current.parentElement;
  }, p = function(q) {
    var O = i || {}, E = O.autoFocusSelector, P = E === void 0 ? "" : E, A = O.firstFocusableSelector, C = A === void 0 ? "" : A, K = O.autoFocus, S = K === void 0 ? !1 : K, H = "".concat(v(P)), X = "[autofocus]".concat(H, ", [data-pc-autofocus='true']").concat(H), U = M.getFirstFocusableElement(q, X);
    S && !U && (U = M.getFirstFocusableElement(q, v(C))), M.focus(U);
  }, v = function(q) {
    return ':not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])'.concat(q ?? "");
  }, x = function(q) {
    var O, E = q.currentTarget, P = q.relatedTarget, A = P === E.$_pfocustrap_lasthiddenfocusableelement || !((O = e.current) !== null && O !== void 0 && O.contains(P)) ? M.getFirstFocusableElement(E.parentElement, v(E.$_pfocustrap_focusableselector)) : E.$_pfocustrap_lasthiddenfocusableelement;
    M.focus(A);
  }, b = function(q) {
    var O, E = q.currentTarget, P = q.relatedTarget, A = P === E.$_pfocustrap_firsthiddenfocusableelement || !((O = e.current) !== null && O !== void 0 && O.contains(P)) ? M.getLastFocusableElement(E.parentElement, v(E.$_pfocustrap_focusableselector)) : E.$_pfocustrap_firsthiddenfocusableelement;
    M.focus(A);
  }, k = function() {
    var q = i || {}, O = q.tabIndex, E = O === void 0 ? 0 : O, P = function(S, H) {
      return /* @__PURE__ */ ze.createElement("span", {
        ref: H === "firstfocusableelement" ? a : r,
        className: "p-hidden-accessible p-hidden-focusable",
        tabIndex: E,
        role: "presentation",
        "aria-hidden": !0,
        "data-p-hidden-accessible": !0,
        "data-p-hidden-focusable": !0,
        onFocus: S,
        "data-pc-section": H
      });
    }, A = P(x, "firstfocusableelement"), C = P(b, "lastfocusableelement");
    return A.ref.current && C.ref.current && (A.ref.current.$_pfocustrap_lasthiddenfocusableelement = C.ref.current, C.ref.current.$_pfocustrap_firsthiddenfocusableelement = A.ref.current), /* @__PURE__ */ ze.createElement(ze.Fragment, null, A, i.children, C);
  };
  return k();
})), Wh = Vh;
function xc(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function Kh(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xc(Object(e), !0).forEach(function(a) {
      Rl(n, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : xc(Object(e)).forEach(function(a) {
      Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return n;
}
var Uh = {
  closeButtonIcon: "p-dialog-header-close-icon",
  closeButton: "p-dialog-header-icon p-dialog-header-close p-link",
  maximizableIcon: "p-dialog-header-maximize-icon",
  maximizableButton: "p-dialog-header-icon p-dialog-header-maximize p-link",
  header: function(t) {
    var e = t.props;
    return qe("p-dialog-header", e.headerClassName);
  },
  headerTitle: "p-dialog-title",
  headerIcons: "p-dialog-header-icons",
  content: function(t) {
    var e = t.props;
    return qe("p-dialog-content", e.contentClassName);
  },
  footer: function(t) {
    var e = t.props;
    return qe("p-dialog-footer", e.footerClassName);
  },
  mask: function(t) {
    var e = t.props, a = t.maskVisibleState, r = ["center", "left", "right", "top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right"], o = r.find(function(i) {
      return i === e.position || i.replace("-", "") === e.position;
    });
    return qe("p-dialog-mask", o ? "p-dialog-".concat(o) : "", {
      "p-component-overlay p-component-overlay-enter": e.modal,
      "p-dialog-visible": a,
      "p-dialog-draggable": e.draggable,
      "p-dialog-resizable": e.resizable
    }, e.maskClassName);
  },
  root: function(t) {
    var e = t.props, a = t.maximized, r = t.context;
    return qe("p-dialog p-component", {
      "p-dialog-rtl": e.rtl,
      "p-dialog-maximized": a,
      "p-dialog-default": !a,
      "p-input-filled": r && r.inputStyle === "filled" || Tt.inputStyle === "filled",
      "p-ripple-disabled": r && r.ripple === !1 || Tt.ripple === !1
    });
  },
  transition: "p-dialog"
}, Yh = `
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
`, Gh = {
  mask: function(t) {
    var e = t.props;
    return Kh({
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
}, mo = ot.extend({
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
    classes: Uh,
    styles: Yh,
    inlineStyles: Gh
  }
});
function Sc(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function Oi(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sc(Object(e), !0).forEach(function(a) {
      Rl(n, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Sc(Object(e)).forEach(function(a) {
      Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return n;
}
var Hu = /* @__PURE__ */ d.forwardRef(function(n, t) {
  var e = cn(), a = d.useContext(Vt), r = mo.getProps(n, a), o = r.id ? r.id : Or(), i = d.useState(o), l = cr(i, 2), c = l[0];
  l[1];
  var f = d.useState(!1), p = cr(f, 2), v = p[0], x = p[1], b = d.useState(!1), k = cr(b, 2), y = k[0], q = k[1], O = d.useState(r.maximized), E = cr(O, 2), P = E[0], A = E[1], C = d.useRef(null), K = d.useRef(null), S = d.useRef(null), H = d.useRef(null), X = d.useRef(null), U = d.useRef(null), I = d.useRef(null), oe = d.useRef(!1), Y = d.useRef(!1), ve = d.useRef(null), ge = d.useRef(null), Ce = d.useRef(null), Oe = d.useRef(o), we = d.useRef(null), de = r.onMaximize ? r.maximized : P, F = y && (r.blockScroll || r.maximizable && de), se = r.closable && r.closeOnEscape && y, ae = If("dialog", se), N = mo.setMetaData(Oi(Oi({
    props: r
  }, r.__parentMetadata), {}, {
    state: {
      id: c,
      maximized: de,
      containerVisible: v
    }
  })), j = N.ptm, B = N.cx, Z = N.sx, ie = N.isUnstyled;
  In(mo.css.styles, ie, {
    name: "dialog"
  }), bl({
    callback: function(D) {
      Ot(D);
    },
    when: se && ae,
    priority: [hl.DIALOG, ae]
  });
  var V = pr({
    type: "mousemove",
    target: function() {
      return window.document;
    },
    listener: function(D) {
      return re(D);
    }
  }), z = cr(V, 2), ee = z[0], Ee = z[1], te = pr({
    type: "mouseup",
    target: function() {
      return window.document;
    },
    listener: function(D) {
      return De(D);
    }
  }), Ae = cr(te, 2), Je = Ae[0], Ue = Ae[1], Ne = pr({
    type: "mousemove",
    target: function() {
      return window.document;
    },
    listener: function(D) {
      return Ht(D);
    }
  }), nt = cr(Ne, 2), $t = nt[0], It = nt[1], Ze = pr({
    type: "mouseup",
    target: function() {
      return window.document;
    },
    listener: function(D) {
      return jt(D);
    }
  }), Ct = cr(Ze, 2), _t = Ct[0], St = Ct[1], Ot = function(D) {
    r.onHide(), D.preventDefault();
  }, vt = function() {
    var D = document.activeElement, ne = D && C.current && C.current.contains(D);
    !ne && r.closable && r.showHeader && I.current && I.current.focus();
  }, on = function(D) {
    S.current = D.target, r.onPointerDown && r.onPointerDown(D);
  }, mt = function(D) {
    r.dismissableMask && r.modal && K.current === D.target && !S.current && Ot(D), r.onMaskClick && r.onMaskClick(D), S.current = null;
  }, Pt = function(D) {
    r.onMaximize ? r.onMaximize({
      originalEvent: D,
      maximized: !de
    }) : A(function(ne) {
      return !ne;
    }), D.preventDefault();
  }, Rt = function(D) {
    M.hasClass(D.target, "p-dialog-header-icon") || M.hasClass(D.target.parentElement, "p-dialog-header-icon") || r.draggable && (oe.current = !0, ve.current = D.pageX, ge.current = D.pageY, C.current.style.margin = "0", M.addClass(document.body, "p-unselectable-text"), r.onDragStart && r.onDragStart(D));
  }, Ht = function(D) {
    if (oe.current) {
      var ne = M.getOuterWidth(C.current), xe = M.getOuterHeight(C.current), Re = D.pageX - ve.current, Se = D.pageY - ge.current, $ = C.current.getBoundingClientRect(), W = $.left + Re, ue = $.top + Se, me = M.getViewport(), he = getComputedStyle(C.current), be = parseFloat(he.marginLeft), Te = parseFloat(he.marginTop);
      C.current.style.position = "fixed", r.keepInViewport ? (W >= r.minX && W + ne < me.width && (ve.current = D.pageX, C.current.style.left = W - be + "px"), ue >= r.minY && ue + xe < me.height && (ge.current = D.pageY, C.current.style.top = ue - Te + "px")) : (ve.current = D.pageX, C.current.style.left = W - be + "px", ge.current = D.pageY, C.current.style.top = ue - Te + "px"), r.onDrag && r.onDrag(D);
    }
  }, jt = function(D) {
    oe.current && (oe.current = !1, M.removeClass(document.body, "p-unselectable-text"), r.onDragEnd && r.onDragEnd(D));
  }, At = function(D) {
    r.resizable && (Y.current = !0, ve.current = D.pageX, ge.current = D.pageY, M.addClass(document.body, "p-unselectable-text"), r.onResizeStart && r.onResizeStart(D));
  }, Le = function(D, ne, xe) {
    !xe && (xe = M.getViewport());
    var Re = parseInt(D);
    return /^(\d+|(\.\d+))(\.\d+)?%$/.test(D) ? Re * (xe[ne] / 100) : Re;
  }, re = function(D) {
    if (Y.current) {
      var ne = D.pageX - ve.current, xe = D.pageY - ge.current, Re = M.getOuterWidth(C.current), Se = M.getOuterHeight(C.current), $ = C.current.getBoundingClientRect(), W = M.getViewport(), ue = !parseInt(C.current.style.top) || !parseInt(C.current.style.left), me = Le(C.current.style.minWidth, "width", W), he = Le(C.current.style.minHeight, "height", W), be = Re + ne, Te = Se + xe;
      ue && (be = be + ne, Te = Te + xe), (!me || be > me) && $.left + be < W.width && (C.current.style.width = be + "px"), (!he || Te > he) && $.top + Te < W.height && (C.current.style.height = Te + "px"), ve.current = D.pageX, ge.current = D.pageY, r.onResize && r.onResize(D);
    }
  }, De = function(D) {
    Y.current && (Y.current = !1, M.removeClass(document.body, "p-unselectable-text"), r.onResizeEnd && r.onResizeEnd(D));
  }, Be = function() {
    C.current.style.position = "", C.current.style.left = "", C.current.style.top = "", C.current.style.margin = "";
  }, je = function() {
    C.current.setAttribute(Oe.current, "");
  }, $e = function() {
    r.onShow && r.onShow(), r.focusOnShow && vt(), rt();
  }, ft = function() {
    r.modal && !ie() && M.addClass(K.current, "p-component-overlay-leave");
  }, Mt = function() {
    oe.current = !1, hn.clear(K.current), x(!1), Qe(), M.focus(we.current), we.current = null;
  }, rt = function() {
    ht();
  }, Qe = function() {
    Ie();
  }, et = function() {
    var D = document.primeDialogParams && document.primeDialogParams.some(function(ne) {
      return ne.hasBlockScroll;
    });
    D ? M.blockBodyScroll() : M.unblockBodyScroll();
  }, lt = function(D) {
    if (D && y) {
      var ne = {
        id: c,
        hasBlockScroll: F
      };
      document.primeDialogParams || (document.primeDialogParams = []);
      var xe = document.primeDialogParams.findIndex(function(Re) {
        return Re.id === c;
      });
      xe === -1 ? document.primeDialogParams = [].concat(jh(document.primeDialogParams), [ne]) : document.primeDialogParams = document.primeDialogParams.toSpliced(xe, 1, ne);
    } else
      document.primeDialogParams = document.primeDialogParams && document.primeDialogParams.filter(function(Re) {
        return Re.id !== c;
      });
    et();
  }, ht = function() {
    r.draggable && ($t(), _t()), r.resizable && (ee(), Je());
  }, Ie = function() {
    It(), St(), Ee(), Ue();
  }, J = function() {
    Ce.current = M.createInlineStyle(a && a.nonce || Tt.nonce, a && a.styleContainer);
    var D = "";
    for (var ne in r.breakpoints)
      D = D + `
                @media screen and (max-width: `.concat(ne, `) {
                     [data-pc-name="dialog"][`).concat(Oe.current, `] {
                        width: `).concat(r.breakpoints[ne], ` !important;
                    }
                }
            `);
    Ce.current.innerHTML = D;
  }, fe = function() {
    Ce.current = M.removeInlineStyle(Ce.current);
  };
  qn(function() {
    lt(!0), r.visible && x(!0);
  }), d.useEffect(function() {
    return r.breakpoints && J(), function() {
      fe();
    };
  }, [r.breakpoints]), dt(function() {
    r.visible && !v && x(!0), r.visible !== y && v && q(r.visible), r.visible && (we.current = document.activeElement);
  }, [r.visible, v]), dt(function() {
    v && (hn.set("modal", K.current, a && a.autoZIndex || Tt.autoZIndex, r.baseZIndex || a && a.zIndex.modal || Tt.zIndex.modal), q(!0));
  }, [v]), dt(function() {
    lt(!0);
  }, [F, y]), jn(function() {
    Qe(), lt(!1), M.removeInlineStyle(Ce.current), hn.clear(K.current);
  }), d.useImperativeHandle(t, function() {
    return {
      props: r,
      resetPosition: Be,
      getElement: function() {
        return C.current;
      },
      getMask: function() {
        return K.current;
      },
      getContent: function() {
        return H.current;
      },
      getHeader: function() {
        return X.current;
      },
      getFooter: function() {
        return U.current;
      },
      getCloseButton: function() {
        return I.current;
      }
    };
  });
  var pe = function() {
    if (r.closable) {
      var D = r.ariaCloseIconLabel || fn("close"), ne = e({
        className: B("closeButtonIcon"),
        "aria-hidden": !0
      }, j("closeButtonIcon")), xe = r.closeIcon || /* @__PURE__ */ d.createElement(za, ne), Re = Ut.getJSXIcon(xe, Oi({}, ne), {
        props: r
      }), Se = e({
        ref: I,
        type: "button",
        className: B("closeButton"),
        "aria-label": D,
        onClick: Ot,
        onKeyDown: function(W) {
          W.key !== "Escape" && W.stopPropagation();
        }
      }, j("closeButton"));
      return /* @__PURE__ */ d.createElement("button", Se, Re, /* @__PURE__ */ d.createElement(Kt, null));
    }
    return null;
  }, Pe = function() {
    var D, ne = e({
      className: B("maximizableIcon")
    }, j("maximizableIcon"));
    de ? D = r.minimizeIcon || /* @__PURE__ */ d.createElement(Fu, ne) : D = r.maximizeIcon || /* @__PURE__ */ d.createElement(Lu, ne);
    var xe = Ut.getJSXIcon(D, ne, {
      props: r
    });
    if (r.maximizable) {
      var Re = e({
        type: "button",
        className: B("maximizableButton"),
        onClick: Pt
      }, j("maximizableButton"));
      return /* @__PURE__ */ d.createElement("button", Re, xe, /* @__PURE__ */ d.createElement(Kt, null));
    }
    return null;
  }, st = function() {
    if (r.showHeader) {
      var D = pe(), ne = Pe(), xe = Q.getJSXElement(r.icons, r), Re = Q.getJSXElement(r.header, r), Se = c + "_header", $ = e({
        ref: X,
        style: r.headerStyle,
        className: B("header"),
        onMouseDown: Rt
      }, j("header")), W = e({
        id: Se,
        className: B("headerTitle")
      }, j("headerTitle")), ue = e({
        className: B("headerIcons")
      }, j("headerIcons"));
      return /* @__PURE__ */ d.createElement("div", $, /* @__PURE__ */ d.createElement("div", W, Re), /* @__PURE__ */ d.createElement("div", ue, xe, ne, D));
    }
    return null;
  }, wt = function() {
    var D = c + "_content", ne = e({
      id: D,
      ref: H,
      style: r.contentStyle,
      className: B("content")
    }, j("content"));
    return /* @__PURE__ */ d.createElement("div", ne, r.children);
  }, Bt = function() {
    var D = Q.getJSXElement(r.footer, r), ne = e({
      ref: U,
      className: B("footer")
    }, j("footer"));
    return D && /* @__PURE__ */ d.createElement("div", ne, D);
  }, Qt = function() {
    return r.resizable ? /* @__PURE__ */ d.createElement("span", {
      className: "p-resizable-handle",
      style: {
        zIndex: 90
      },
      onMouseDown: At
    }) : null;
  }, zt = function() {
    var D, ne = {
      header: r.header,
      content: r.message,
      message: r == null || (D = r.children) === null || D === void 0 || (D = D[1]) === null || D === void 0 || (D = D.props) === null || D === void 0 ? void 0 : D.children
    }, xe = {
      headerRef: X,
      contentRef: H,
      footerRef: U,
      closeRef: I,
      hide: Ot,
      message: ne
    };
    return Q.getJSXElement(n.content, xe);
  }, Wt = function() {
    var D = st(), ne = wt(), xe = Bt(), Re = Qt();
    return /* @__PURE__ */ d.createElement(d.Fragment, null, D, ne, xe, Re);
  }, en = function() {
    var D = c + "_header", ne = c + "_content", xe = {
      enter: r.position === "center" ? 150 : 300,
      exit: r.position === "center" ? 150 : 300
    }, Re = e({
      ref: K,
      style: Z("mask"),
      className: B("mask"),
      onPointerUp: mt
    }, j("mask")), Se = e({
      ref: C,
      id: c,
      className: qe(r.className, B("root", {
        props: r,
        maximized: de,
        context: a
      })),
      style: r.style,
      onClick: r.onClick,
      role: "dialog",
      "aria-labelledby": D,
      "aria-describedby": ne,
      "aria-modal": r.modal,
      onPointerDown: on
    }, mo.getOtherProps(r), j("root")), $ = e({
      classNames: B("transition"),
      timeout: xe,
      in: y,
      options: r.transitionOptions,
      unmountOnExit: !0,
      onEnter: je,
      onEntered: $e,
      onExiting: ft,
      onExited: Mt
    }, j("transition")), W = null;
    n != null && n.content ? W = zt() : W = Wt();
    var ue = /* @__PURE__ */ d.createElement("div", Re, /* @__PURE__ */ d.createElement(Ba, ul({
      nodeRef: C
    }, $), /* @__PURE__ */ d.createElement("div", Se, /* @__PURE__ */ d.createElement(Wh, {
      autoFocus: r.focusOnShow
    }, W))));
    return /* @__PURE__ */ d.createElement(ea, {
      element: ue,
      appendTo: r.appendTo,
      visible: !0
    });
  };
  return v && en();
});
Hu.displayName = "Dialog";
function fl() {
  return fl = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
    }
    return n;
  }, fl.apply(this, arguments);
}
function Xh(n) {
  if (Array.isArray(n)) return n;
}
function Jh(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var a, r, o, i, l = [], c = !0, f = !1;
    try {
      if (o = (e = e.call(n)).next, t !== 0) for (; !(c = (a = o.call(e)).done) && (l.push(a.value), l.length !== t); c = !0) ;
    } catch (p) {
      f = !0, r = p;
    } finally {
      try {
        if (!c && e.return != null && (i = e.return(), Object(i) !== i)) return;
      } finally {
        if (f) throw r;
      }
    }
    return l;
  }
}
function Ec(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, a = new Array(t); e < t; e++) a[e] = n[e];
  return a;
}
function Zh(n, t) {
  if (n) {
    if (typeof n == "string") return Ec(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Ec(n, t);
  }
}
function Qh() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Cc(n, t) {
  return Xh(n) || Jh(n, t) || Zh(n, t) || Qh();
}
function La(n) {
  "@babel/helpers - typeof";
  return La = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, La(n);
}
function eb(n, t) {
  if (La(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var a = e.call(n, t || "default");
    if (La(a) !== "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function tb(n) {
  var t = eb(n, "string");
  return La(t) === "symbol" ? t : String(t);
}
function nb(n, t, e) {
  return t = tb(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
var rb = {
  root: "p-confirm-dialog",
  message: "p-confirm-dialog-message",
  icon: "p-confirm-dialog-icon",
  acceptButton: "p-confirm-dialog-accept",
  rejectButton: function(t) {
    var e = t.getPropValue;
    return qe("p-confirm-dialog-reject", {
      "p-button-text": !e("rejectClassName")
    });
  }
}, go = ot.extend({
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
    classes: rb
  }
});
function Oc(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function $r(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Oc(Object(e), !0).forEach(function(a) {
      nb(n, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Oc(Object(e)).forEach(function(a) {
      Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return n;
}
var ab = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  t = $r($r({}, t), {
    visible: t.visible === void 0 ? !0 : t.visible
  }), t.visible && Bn.emit("confirm-dialog", t);
  var e = function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Bn.emit("confirm-dialog", $r($r($r({}, t), o), {
      visible: !0
    }));
  }, a = function() {
    Bn.emit("confirm-dialog", {
      visible: !1
    });
  };
  return {
    show: e,
    hide: a
  };
}, Bu = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(n, t) {
  var e = cn(), a = d.useContext(Vt), r = go.getProps(n, a), o = d.useState(r.visible), i = Cc(o, 2), l = i[0], c = i[1], f = d.useState(!1), p = Cc(f, 2), v = p[0], x = p[1], b = d.useRef(null), k = d.useRef(!1), y = d.useRef(null), q = function() {
    var de = r.group;
    return b.current && (de = b.current.group), Object.assign({}, r, b.current, {
      group: de
    });
  }, O = function(de) {
    return q()[de];
  }, E = function(de) {
    for (var F = arguments.length, se = new Array(F > 1 ? F - 1 : 0), ae = 1; ae < F; ae++)
      se[ae - 1] = arguments[ae];
    return Q.getPropValue(O(de), se);
  }, P = O("acceptLabel") || fn("accept"), A = O("rejectLabel") || fn("reject"), C = {
    props: r,
    state: {
      visible: l
    }
  }, K = go.setMetaData(C), S = K.ptm, H = K.cx, X = K.isUnstyled;
  In(go.css.styles, X, {
    name: "confirmdialog"
  });
  var U = function() {
    k.current || (k.current = !0, E("accept"), Y("accept"));
  }, I = function() {
    k.current || (k.current = !0, E("reject"), Y("reject"));
  }, oe = function() {
    var de = q();
    de.group === r.group && (c(!0), k.current = !1, y.current = document.activeElement);
  }, Y = function() {
    var de = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "cancel";
    c(!1), E("onHide", {
      result: de
    }), M.focus(y.current), y.current = null;
  }, ve = function(de) {
    if (de.tagKey === r.tagKey) {
      var F = l !== de.visible, se = O("target") !== de.target;
      se && !r.target ? (Y(), b.current = de, x(!0)) : F && (b.current = de, de.visible ? oe() : Y());
    }
  };
  d.useEffect(function() {
    r.visible ? oe() : Y();
  }, [r.visible]), d.useEffect(function() {
    return !r.target && !r.message && Bn.on("confirm-dialog", ve), function() {
      Bn.off("confirm-dialog", ve);
    };
  }, [r.target]), dt(function() {
    v && oe();
  }, [v]), jn(function() {
    Bn.off("confirm-dialog", ve);
  }), d.useImperativeHandle(t, function() {
    return {
      props: r,
      confirm: ve
    };
  });
  var ge = function() {
    var de = O("defaultFocus"), F = qe("p-confirm-dialog-accept", O("acceptClassName")), se = qe("p-confirm-dialog-reject", {
      "p-button-text": !O("rejectClassName")
    }, O("rejectClassName")), ae = e({
      label: A,
      autoFocus: de === "reject",
      icon: O("rejectIcon"),
      className: qe(O("rejectClassName"), H("rejectButton", {
        getPropValue: O
      })),
      onClick: I,
      pt: S("rejectButton"),
      unstyled: r.unstyled,
      __parentMetadata: {
        parent: C
      }
    }, S("rejectButton")), N = e({
      label: P,
      autoFocus: de === void 0 || de === "accept",
      icon: O("acceptIcon"),
      className: qe(O("acceptClassName"), H("acceptButton")),
      onClick: U,
      pt: S("acceptButton"),
      unstyled: r.unstyled,
      __parentMetadata: {
        parent: C
      }
    }, S("acceptButton")), j = /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement(xn, ae), /* @__PURE__ */ d.createElement(xn, N));
    if (O("footer")) {
      var B = {
        accept: U,
        reject: I,
        acceptClassName: F,
        rejectClassName: se,
        acceptLabel: P,
        rejectLabel: A,
        element: j,
        props: q()
      };
      return Q.getJSXElement(O("footer"), B);
    }
    return j;
  }, Ce = function() {
    var de = q(), F = Q.getJSXElement(O("message"), de), se = e({
      className: H("icon")
    }, S("icon")), ae = Ut.getJSXIcon(O("icon"), $r({}, se), {
      props: de
    }), N = ge(), j = e({
      className: H("message")
    }, S("message")), B = e({
      visible: l,
      className: qe(O("className"), H("root")),
      footer: N,
      onHide: Y,
      breakpoints: O("breakpoints"),
      pt: de.pt,
      unstyled: r.unstyled,
      appendTo: O("appendTo"),
      __parentMetadata: {
        parent: C
      }
    }, go.getOtherProps(de));
    return /* @__PURE__ */ d.createElement(Hu, fl({}, B, {
      content: n == null ? void 0 : n.content
    }), ae, /* @__PURE__ */ d.createElement("span", j, F));
  }, Oe = Ce();
  return /* @__PURE__ */ d.createElement(ea, {
    element: Oe,
    appendTo: O("appendTo")
  });
}));
Bu.displayName = "ConfirmDialog";
function ob({ id: n, config: t, active: e, setActive: a, onItemChange: r, onItemRemove: o }) {
  const { attributes: i, listeners: l, setNodeRef: c, setActivatorNodeRef: f, transform: p, transition: v } = Dh({
    id: n,
    data: {
      id: n,
      item: t
    }
  }), x = {
    transform: Zn.Transform.toString(p),
    transition: v
  };
  let b = "sortable-item";
  t.id == (e == null ? void 0 : e.id) && (b = b + " active");
  const k = () => {
    ab({
      message: "Are you sure you want to remove this item?",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      accept: () => o(n)
      // reject: () => rejectFunc()
    });
  };
  let y = /* @__PURE__ */ T.jsx(xn, { size: "small", outlined: !0, label: "Edit", icon: "pi pi-pencil", onClick: () => a(t) });
  return e && e.id == t.id && (y = /* @__PURE__ */ T.jsx(xn, { size: "small", outlined: !0, label: "Done", icon: "pi pi-pencil", onClick: () => a(void 0) })), /* @__PURE__ */ T.jsx(T.Fragment, { children: /* @__PURE__ */ T.jsxs("div", { ref: c, style: x, ...i, className: b, children: [
    /* @__PURE__ */ T.jsx(lu, { item: t, onChange: r }),
    /* @__PURE__ */ T.jsxs("div", { className: "flex flex-row align-items-center item-footer", children: [
      /* @__PURE__ */ T.jsxs("div", { className: "flex-grow-1 item-type", children: [
        " ",
        t.type
      ] }),
      /* @__PURE__ */ T.jsxs(Au, { children: [
        " ",
        /* @__PURE__ */ T.jsx(
          xn,
          {
            ...l,
            ref: f,
            size: "small",
            outlined: !0,
            label: "Order",
            icon: "pi pi-sort"
          }
        ),
        y,
        /* @__PURE__ */ T.jsx(xn, { size: "small", outlined: !0, label: "Remove", icon: "pi pi-trash", onClick: k })
      ] })
    ] })
  ] }) });
}
function ib({ form: n, onFormChange: t, activeItem: e, setActiveItem: a }) {
  const [r, o] = it((n == null ? void 0 : n.config) ?? []);
  We(() => {
    n && n.config && n.config != r && o(n.config ?? []);
  }, [n]);
  const i = (b) => {
    const k = Jr(n);
    k.config = k.config.filter(
      (y) => y.id != b
    ), t(k), e && e.id == b && a(void 0);
  }, l = (b) => {
    const k = r.map((q) => q.id == b.id ? b : q);
    o(k);
    const y = Jr(n);
    y.config = k, t(y);
  }, { listeners: c, setNodeRef: f, transform: p, transition: v } = Iu({
    id: "canvas_droppable",
    data: {
      parent: null,
      isContainer: !0
    }
  }), x = {
    transform: Zn.Transform.toString(p),
    transition: v
  };
  return /* @__PURE__ */ T.jsx("div", { ref: f, className: "canvas", style: x, ...c, children: r == null ? void 0 : r.map((b) => /* @__PURE__ */ T.jsx(
    ob,
    {
      id: b.id,
      config: b,
      active: e,
      setActive: a,
      onItemChange: l,
      onItemRemove: i
    },
    b.id
  )) });
}
const lb = ({ item: n, onChange: t }) => {
  const e = kr.getByItem(n);
  return e ? ze.createElement(e.settings.render, {
    config: n,
    onChange: t
  }) : ze.createElement(
    () => /* @__PURE__ */ T.jsxs("div", { children: [
      "The component ",
      n.type,
      " was not found."
    ] })
  );
};
function sb({ ...n }) {
  const [t, e] = it(n.form), [a, r] = it(n.activeItem), o = (c) => {
    r(c);
    const f = Jr(t);
    f.config = f.config.map((p) => p.id == c.id ? c : p), n.onFormChange(f);
  }, i = (c) => {
    const f = { ...t, [c.target.name]: c.target.value };
    e(f), n.onFormChange(f);
  }, l = () => {
    n.setActiveItem(void 0);
  };
  if (We(() => {
    r(n.activeItem);
  }, [n.activeItem]), We(() => {
    e(n.form);
  }, [n.form]), a) {
    const c = kr.getByItem(a);
    if (c) {
      const f = c.icon;
      return /* @__PURE__ */ T.jsx(T.Fragment, { children: /* @__PURE__ */ T.jsxs("div", { className: "properties active", children: [
        /* @__PURE__ */ T.jsxs("div", { className: "item-panel-item flex align-items-center", children: [
          /* @__PURE__ */ T.jsxs("div", { className: "flex-grow-1 flex align-items-center", children: [
            /* @__PURE__ */ T.jsx("div", { className: "item-icon mr-2", children: /* @__PURE__ */ T.jsx(f, {}) }),
            /* @__PURE__ */ T.jsx("div", { children: /* @__PURE__ */ T.jsx("h2", { children: c.heading }) })
          ] }),
          /* @__PURE__ */ T.jsx(xn, { onClick: l, size: "small", outlined: !0, icon: "pi pi-times" })
        ] }),
        /* @__PURE__ */ T.jsx(lb, { item: a, onChange: o })
      ] }) });
    }
    return ze.createElement(
      () => /* @__PURE__ */ T.jsxs("div", { children: [
        "The component ",
        a.type,
        " was not found."
      ] })
    );
  } else
    return /* @__PURE__ */ T.jsx(T.Fragment, { children: /* @__PURE__ */ T.jsxs("div", { className: "properties", children: [
      /* @__PURE__ */ T.jsx("div", { className: "item-panel-item flex px-3", children: /* @__PURE__ */ T.jsx("div", { children: /* @__PURE__ */ T.jsx("h2", { children: "Form Settings" }) }) }),
      /* @__PURE__ */ T.jsx(Qn, { activeIndex: 0, children: /* @__PURE__ */ T.jsx(Vn, { header: "General", children: /* @__PURE__ */ T.jsx("div", { className: "form-item flex flex-column gap-4", children: /* @__PURE__ */ T.jsxs("div", { className: "flex flex-column gap-2", children: [
        /* @__PURE__ */ T.jsx("label", { htmlFor: "label", children: "Form label" }),
        /* @__PURE__ */ T.jsx(
          Yt,
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
function pl(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, a = new Array(t); e < t; e++) a[e] = n[e];
  return a;
}
function cb(n) {
  if (Array.isArray(n)) return pl(n);
}
function ub(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function zu(n, t) {
  if (n) {
    if (typeof n == "string") return pl(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return pl(n, t);
  }
}
function db() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fb(n) {
  return cb(n) || ub(n) || zu(n) || db();
}
function Fa(n) {
  "@babel/helpers - typeof";
  return Fa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fa(n);
}
function pb(n, t) {
  if (Fa(n) !== "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var a = e.call(n, t || "default");
    if (Fa(a) !== "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function vb(n) {
  var t = pb(n, "string");
  return Fa(t) === "symbol" ? t : String(t);
}
function Vu(n, t, e) {
  return t = vb(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function mb(n) {
  if (Array.isArray(n)) return n;
}
function gb(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var a, r, o, i, l = [], c = !0, f = !1;
    try {
      if (o = (e = e.call(n)).next, t !== 0) for (; !(c = (a = o.call(e)).done) && (l.push(a.value), l.length !== t); c = !0) ;
    } catch (p) {
      f = !0, r = p;
    } finally {
      try {
        if (!c && e.return != null && (i = e.return(), Object(i) !== i)) return;
      } finally {
        if (f) throw r;
      }
    }
    return l;
  }
}
function hb() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function va(n, t) {
  return mb(n) || gb(n, t) || zu(n, t) || hb();
}
function Pc(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function ho(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pc(Object(e), !0).forEach(function(a) {
      Vu(n, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Pc(Object(e)).forEach(function(a) {
      Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return n;
}
var bb = {
  navcontent: "p-tabview-nav-content",
  nav: "p-tabview-nav",
  inkbar: "p-tabview-ink-bar",
  panelcontainer: function(t) {
    var e = t.props;
    return qe("p-tabview-panels", e.panelContainerClassName);
  },
  prevbutton: "p-tabview-nav-prev p-tabview-nav-btn p-link",
  nextbutton: "p-tabview-nav-next p-tabview-nav-btn p-link",
  root: function(t) {
    var e = t.props;
    return qe("p-tabview p-component", {
      "p-tabview-scrollable": e.scrollable
    });
  },
  navcontainer: "p-tabview-nav-container",
  tab: {
    header: function(t) {
      var e = t.selected, a = t.disabled, r = t.headerClassName, o = t._className;
      return qe("p-unselectable-text", {
        "p-tabview-selected p-highlight": e,
        "p-disabled": a
      }, r, o);
    },
    headertitle: "p-tabview-title",
    headeraction: "p-tabview-nav-link",
    closeIcon: "p-tabview-close",
    content: function(t) {
      var e = t.props, a = t.selected, r = t.getTabProp, o = t.tab, i = t.isSelected, l = t.shouldUseTab, c = t.index;
      return l(o, c) && (!e.renderActiveOnly || i(c)) ? qe(r(o, "contentClassName"), r(o, "className"), "p-tabview-panel", {
        "p-hidden": !a
      }) : void 0;
    }
  }
}, yb = {
  tab: {
    header: function(t) {
      var e = t.headerStyle, a = t._style;
      return ho(ho({}, e || {}), a || {});
    },
    content: function(t) {
      var e = t.props, a = t.getTabProp, r = t.tab, o = t.isSelected, i = t.shouldUseTab, l = t.index;
      return i(r, l) && (!e.renderActiveOnly || o(l)) ? ho(ho({}, a(r, "contentStyle") || {}), a(r, "style") || {}) : void 0;
    }
  }
}, bo = ot.extend({
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
    classes: bb,
    inlineStyles: yb
  }
}), Wr = ot.extend({
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
    return Q.getComponentProp(t, e, Wr.defaultProps);
  },
  getCProps: function(t) {
    return Q.getComponentProps(t, Wr.defaultProps);
  },
  getCOtherProps: function(t) {
    return Q.getComponentDiffProps(t, Wr.defaultProps);
  }
});
function Dc(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function yo(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Dc(Object(e), !0).forEach(function(a) {
      Vu(n, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Dc(Object(e)).forEach(function(a) {
      Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return n;
}
var Eo = function() {
}, Wu = /* @__PURE__ */ d.forwardRef(function(n, t) {
  var e = cn(), a = d.useContext(Vt), r = bo.getProps(n, a), o = d.useState(r.id), i = va(o, 2), l = i[0], c = i[1], f = d.useState(!0), p = va(f, 2), v = p[0], x = p[1], b = d.useState(!1), k = va(b, 2), y = k[0], q = k[1], O = d.useState([]), E = va(O, 2), P = E[0], A = E[1], C = d.useState(r.activeIndex), K = va(C, 2), S = K[0], H = K[1], X = d.useRef(null), U = d.useRef(null), I = d.useRef(null), oe = d.useRef(null), Y = d.useRef(null), ve = d.useRef(null), ge = d.useRef({}), Ce = r.onTabChange ? r.activeIndex : S, Oe = d.Children.count(r.children), we = {
    props: r,
    state: {
      id: l,
      isPrevButtonDisabled: v,
      isNextButtonDisabled: y,
      hiddenTabsState: P,
      activeIndex: S
    }
  }, de = bo.setMetaData(yo({}, we)), F = de.ptm, se = de.ptmo, ae = de.cx, N = de.sx, j = de.isUnstyled;
  In(bo.css.styles, j, {
    name: "tabview"
  });
  var B = function(J, fe, pe) {
    var Pe = {
      props: J.props,
      parent: we,
      context: {
        index: pe,
        count: Oe,
        first: pe === 0,
        last: pe === Oe - 1,
        active: pe == S,
        disabled: ie(J, "disabled")
      }
    };
    return e(F("tab.".concat(fe), {
      tab: Pe
    }), F("tabpanel.".concat(fe), {
      tabpanel: Pe
    }), F("tabpanel.".concat(fe), Pe), se(ie(J, "pt"), fe, Pe));
  }, Z = function(J) {
    return J === Ce;
  }, ie = function(J, fe) {
    return Wr.getCProp(J, fe);
  }, V = function(J) {
    return J && ie(J, "visible") && Q.isValidChild(J, "TabPanel") && P.every(function(fe) {
      return fe !== J.key;
    });
  }, z = function(J) {
    var fe = d.Children.map(r.children, function(pe, Pe) {
      if (V(pe))
        return {
          tab: pe,
          index: Pe
        };
    });
    return fe.find(function(pe) {
      var Pe = pe.tab, st = pe.index;
      return !ie(Pe, "disabled") && st >= J;
    }) || fe.reverse().find(function(pe) {
      var Pe = pe.tab, st = pe.index;
      return !ie(Pe, "disabled") && J > st;
    });
  }, ee = function(J, fe) {
    J.preventDefault();
    var pe = r.onBeforeTabClose, Pe = r.onTabClose, st = r.children, wt = st[fe].key;
    pe && pe({
      originalEvent: J,
      index: fe
    }) === !1 || (A([].concat(fb(P), [wt])), Pe && Pe({
      originalEvent: J,
      index: fe
    }));
  }, Ee = function(J, fe, pe) {
    te(J, fe, pe);
  }, te = function(J, fe, pe) {
    if (J && J.preventDefault(), !ie(fe, "disabled")) {
      if (r.onBeforeTabChange && r.onBeforeTabChange({
        originalEvent: J,
        index: pe
      }) === !1)
        return;
      r.onTabChange ? r.onTabChange({
        originalEvent: J,
        index: pe
      }) : H(pe);
    }
    mt({
      index: pe
    });
  }, Ae = function(J, fe, pe) {
    switch (J.code) {
      case "ArrowLeft":
        Ue(J);
        break;
      case "ArrowRight":
        Je(J);
        break;
      case "Home":
        Ne(J);
        break;
      case "End":
        nt(J);
        break;
      case "PageDown":
        $t(J);
        break;
      case "PageUp":
        It(J);
        break;
      case "Enter":
      case "NumpadEnter":
      case "Space":
        Ze(J, fe, pe);
        break;
    }
  }, Je = function(J) {
    var fe = Ct(J.target.parentElement);
    fe ? vt(fe) : Ne(J), J.preventDefault();
  }, Ue = function(J) {
    var fe = _t(J.target.parentElement);
    fe ? vt(fe) : nt(J), J.preventDefault();
  }, Ne = function(J) {
    var fe = St();
    vt(fe), J.preventDefault();
  }, nt = function(J) {
    var fe = Ot();
    vt(fe), J.preventDefault();
  }, $t = function(J) {
    mt({
      index: d.Children.count(r.children) - 1
    }), J.preventDefault();
  }, It = function(J) {
    mt({
      index: 0
    }), J.preventDefault();
  }, Ze = function(J, fe, pe) {
    te(J, fe, pe), J.preventDefault();
  }, Ct = function Ie(J) {
    var fe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, pe = fe ? J : J.nextElementSibling;
    return pe ? M.getAttribute(pe, "data-p-disabled") || M.getAttribute(pe, "data-pc-section") === "inkbar" ? Ie(pe) : M.findSingle(pe, '[data-pc-section="headeraction"]') : null;
  }, _t = function Ie(J) {
    var fe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, pe = fe ? J : J.previousElementSibling;
    return pe ? M.getAttribute(pe, "data-p-disabled") || M.getAttribute(pe, "data-pc-section") === "inkbar" ? Ie(pe) : M.findSingle(pe, '[data-pc-section="headeraction"]') : null;
  }, St = function() {
    return Ct(I.current.firstElementChild, !0);
  }, Ot = function() {
    return _t(I.current.lastElementChild, !0);
  }, vt = function(J) {
    J && (M.focus(J), mt({
      element: J
    }));
  }, on = function() {
    var J = ge.current["tab_".concat(Ce)];
    oe.current.style.width = M.getWidth(J) + "px", oe.current.style.left = M.getOffset(J).left - M.getOffset(I.current).left + "px";
  }, mt = function(J) {
    var fe = J.index, pe = J.element, Pe = pe || ge.current["tab_".concat(fe)];
    Pe && Pe.scrollIntoView && Pe.scrollIntoView({
      block: "nearest"
    });
  }, Pt = function() {
    var J = U.current, fe = J.scrollLeft, pe = J.scrollWidth, Pe = M.getWidth(U.current);
    x(fe === 0), q(parseInt(fe) === pe - Pe);
  }, Rt = function(J) {
    r.scrollable && Pt(), J.preventDefault();
  }, Ht = function() {
    return [Y.current, ve.current].reduce(function(J, fe) {
      return fe ? J + M.getWidth(fe) : J;
    }, 0);
  }, jt = function() {
    var J = M.getWidth(U.current) - Ht(), fe = U.current.scrollLeft - J;
    U.current.scrollLeft = fe <= 0 ? 0 : fe;
  }, At = function() {
    var J = M.getWidth(U.current) - Ht(), fe = U.current.scrollLeft + J, pe = U.current.scrollWidth - J;
    U.current.scrollLeft = fe >= pe ? pe : fe;
  }, Le = function() {
    x(!0), q(!1), A([]), r.onTabChange ? r.onTabChange({
      index: Ce
    }) : H(r.activeIndex);
  };
  d.useEffect(function() {
    on(), Pt();
  }), qn(function() {
    l || c(Or());
  }), dt(function() {
    if (Q.isNotEmpty(P)) {
      var Ie = z(P[P.length - 1]);
      Ie && Ee(null, Ie.tab, Ie.index);
    }
  }, [P]), dt(function() {
    r.activeIndex !== S && mt({
      index: r.activeIndex
    });
  }, [r.activeIndex]), d.useImperativeHandle(t, function() {
    return {
      props: r,
      reset: Le,
      getElement: function() {
        return X.current;
      }
    };
  });
  var re = function(J, fe) {
    var pe = Z(fe), Pe = Wr.getCProps(J), st = Pe.headerStyle, wt = Pe.headerClassName, Bt = Pe.style, Qt = Pe.className, zt = Pe.disabled, Wt = Pe.leftIcon, en = Pe.rightIcon, h = Pe.header, D = Pe.headerTemplate, ne = Pe.closable, xe = Pe.closeIcon, Re = l + "_header_" + fe, Se = l + fe + "_content", $ = zt || !pe ? -1 : 0, W = Wt && Ut.getJSXIcon(Wt, void 0, {
      props: r
    }), ue = e({
      className: ae("tab.headertitle")
    }, B(J, "headertitle", fe)), me = /* @__PURE__ */ d.createElement("span", ue, h), he = en && Ut.getJSXIcon(en, void 0, {
      props: r
    }), be = e({
      className: ae("tab.closeIcon"),
      onClick: function(tt) {
        return ee(tt, fe);
      }
    }, B(J, "closeIcon", fe)), Te = xe || /* @__PURE__ */ d.createElement(za, be), Ye = ne ? Ut.getJSXIcon(Te, yo({}, be), {
      props: r
    }) : null, Fe = e({
      id: Re,
      role: "tab",
      className: ae("tab.headeraction"),
      tabIndex: $,
      "aria-controls": Se,
      "aria-selected": pe,
      "aria-disabled": zt,
      onClick: function(tt) {
        return Ee(tt, J, fe);
      },
      onKeyDown: function(tt) {
        return Ae(tt, J, fe);
      }
    }, B(J, "headeraction", fe)), gt = (
      // eslint-disable /
      /* @__PURE__ */ d.createElement("a", Fe, W, me, he, Ye, /* @__PURE__ */ d.createElement(Kt, null))
    );
    if (D) {
      var Lt = {
        className: "p-tabview-nav-link",
        titleClassName: "p-tabview-title",
        onClick: function(tt) {
          return Ee(tt, J, fe);
        },
        onKeyDown: function(tt) {
          return Ae(tt, J, fe);
        },
        leftIconElement: W,
        titleElement: me,
        rightIconElement: he,
        element: gt,
        props: r,
        index: fe,
        selected: pe,
        ariaControls: Se
      };
      gt = Q.getJSXElement(D, Lt);
    }
    var Dt = e({
      ref: function(tt) {
        return ge.current["tab_".concat(fe)] = tt;
      },
      className: ae("tab.header", {
        selected: pe,
        disabled: zt,
        headerClassName: wt,
        _className: Qt
      }),
      style: N("tab.header", {
        headerStyle: st,
        _style: Bt
      }),
      role: "presentation"
    }, B(J, "root", fe), B(J, "header", fe));
    return /* @__PURE__ */ d.createElement("li", Dt, gt);
  }, De = function() {
    return d.Children.map(r.children, function(J, fe) {
      if (V(J))
        return re(J, fe);
    });
  }, Be = function() {
    var J = De(), fe = e({
      id: l + "_navcontent",
      ref: U,
      className: ae("navcontent"),
      style: r.style,
      onScroll: Rt
    }, F("navcontent")), pe = e({
      ref: I,
      className: ae("nav"),
      role: "tablist"
    }, F("nav")), Pe = e({
      ref: oe,
      "aria-hidden": "true",
      role: "presentation",
      className: ae("inkbar")
    }, F("inkbar"));
    return /* @__PURE__ */ d.createElement("div", fe, /* @__PURE__ */ d.createElement("ul", pe, J, /* @__PURE__ */ d.createElement("li", Pe)));
  }, je = function() {
    var J = e({
      className: ae("panelcontainer"),
      style: r.panelContainerStyle
    }, F("panelcontainer")), fe = d.Children.map(r.children, function(pe, Pe) {
      if (V(pe) && (!r.renderActiveOnly || Z(Pe))) {
        var st = Z(Pe), wt = l + Pe + "_content", Bt = l + "_header_" + Pe, Qt = e({
          id: wt,
          className: ae("tab.content", {
            props: r,
            selected: st,
            getTabProp: ie,
            tab: pe,
            isSelected: Z,
            shouldUseTab: V,
            index: Pe
          }),
          style: N("tab.content", {
            props: r,
            getTabProp: ie,
            tab: pe,
            isSelected: Z,
            shouldUseTab: V,
            index: Pe
          }),
          role: "tabpanel",
          "aria-labelledby": Bt
        }, Wr.getCOtherProps(pe), B(pe, "root", Pe), B(pe, "content", Pe));
        return /* @__PURE__ */ d.createElement("div", Qt, r.renderActiveOnly ? st && ie(pe, "children") : ie(pe, "children"));
      }
    });
    return /* @__PURE__ */ d.createElement("div", J, fe);
  }, $e = function() {
    var J = e({
      "aria-hidden": "true"
    }, F("previcon")), fe = r.prevButton || /* @__PURE__ */ d.createElement(Sl, J), pe = Ut.getJSXIcon(fe, yo({}, J), {
      props: r
    }), Pe = e({
      ref: Y,
      type: "button",
      className: ae("prevbutton"),
      "aria-label": gs("previousPageLabel"),
      onClick: function(wt) {
        return jt();
      }
    }, F("prevbutton"));
    return r.scrollable && !v ? /* @__PURE__ */ d.createElement("button", Pe, pe, /* @__PURE__ */ d.createElement(Kt, null)) : null;
  }, ft = function() {
    var J = e({
      "aria-hidden": "true"
    }, F("nexticon")), fe = r.nextButton || /* @__PURE__ */ d.createElement(zo, J), pe = Ut.getJSXIcon(fe, yo({}, J), {
      props: r
    }), Pe = e({
      ref: ve,
      type: "button",
      className: ae("nextbutton"),
      "aria-label": gs("nextPageLabel"),
      onClick: function(wt) {
        return At();
      }
    }, F("nextbutton"));
    if (r.scrollable && !y)
      return /* @__PURE__ */ d.createElement("button", Pe, pe, /* @__PURE__ */ d.createElement(Kt, null));
  }, Mt = e({
    id: l,
    ref: X,
    style: r.style,
    className: qe(r.className, ae("root"))
  }, bo.getOtherProps(r), F("root")), rt = e({
    className: ae("navcontainer")
  }, F("navcontainer")), Qe = Be(), et = je(), lt = $e(), ht = ft();
  return /* @__PURE__ */ d.createElement("div", Mt, /* @__PURE__ */ d.createElement("div", rt, lt, Qe, ht), et);
});
Eo.displayName = "TabPanel";
Wu.displayName = "TabView";
function Ku({ item: n }) {
  const t = n.icon;
  return /* @__PURE__ */ T.jsx(T.Fragment, { children: /* @__PURE__ */ T.jsx("article", { className: "sidebar-field", children: /* @__PURE__ */ T.jsxs("div", { className: "item-panel-item flex p-2 w-100", children: [
    /* @__PURE__ */ T.jsx("div", { className: "item-icon mr-2", children: /* @__PURE__ */ T.jsx(t, {}) }),
    /* @__PURE__ */ T.jsxs("div", { children: [
      /* @__PURE__ */ T.jsx("div", { className: "item-title", children: n.heading }),
      /* @__PURE__ */ T.jsx("div", { className: "item-text", children: n.description })
    ] })
  ] }) }) });
}
function wb({ item: n }) {
  const t = Et(mr()), { attributes: e, listeners: a, setNodeRef: r } = ku({
    id: t.current,
    data: {
      item: n,
      fromSidebar: !0
    }
  });
  return /* @__PURE__ */ T.jsx("div", { ref: r, className: "sidebar-field", ...e, ...a, children: /* @__PURE__ */ T.jsx(Ku, { item: n }) });
}
function xb({ ...n }) {
  const [t, e] = it(0), a = {};
  kr.map((o) => {
    var l, c;
    const i = ((l = o.group) == null ? void 0 : l.label) || "";
    Object.keys(a).includes(i) || (a[i] = {
      label: ((c = o.group) == null ? void 0 : c.label) || "",
      items: []
    }), a[i].items.push(o);
  });
  const r = (o) => {
    e(o);
  };
  return /* @__PURE__ */ T.jsx(T.Fragment, { children: /* @__PURE__ */ T.jsxs(
    Wu,
    {
      activeIndex: t,
      onTabChange: (o) => r(o.index),
      className: "sidebar",
      children: [
        /* @__PURE__ */ T.jsxs(Eo, { header: "Items", children: [
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          /* @__PURE__ */ T.jsx(Qn, { activeIndex: 0, children: Object.keys(a).map((o) => /* @__PURE__ */ T.jsx(Vn, { header: a[o].label, children: a[o].items.map((i) => /* @__PURE__ */ T.jsx(wb, { item: i }, `sidebar-${i.type}`)) }, o)) })
        ] }),
        /* @__PURE__ */ T.jsxs(Eo, { header: "Forms", children: [
          "forms ",
          JSON.stringify(n.form)
        ] }),
        /* @__PURE__ */ T.jsx(Eo, { header: "Variables", children: "list of variables this form can replace" })
      ]
    }
  ) });
}
function ma(n) {
  var t;
  return ((t = n == null ? void 0 : n.data) == null ? void 0 : t.current) ?? {};
}
const Cb = ({ ...n }) => {
  const { form: t, setForm: e } = tf(n.form), [a, r] = it(void 0);
  We(() => {
    n.form && e(n.form);
  }, [n.form]), We(() => {
    t && n.onChange(t);
  }, [t]);
  const o = eg(
    lc(ql),
    lc(Tl, {
      coordinateGetter: qh
    })
  ), [i, l] = it(), [c, f] = it(), p = () => {
    l(void 0), f(void 0);
  }, v = (y) => {
    const { active: q } = y, O = ma(q), { item: E } = O;
    if (O.fromSidebar) {
      const P = E.config;
      P.id = mr(), E.id = P.id, l(E), r(P);
    } else
      f(O.item);
  }, x = (y) => {
    const { active: q, over: O } = y, E = ma(q), P = ma(O);
    if (E.fromSidebar)
      if (t.config.findIndex((A) => A.id === E.item.id) == -1) {
        t.config.push(E.item.config);
        const A = t.config.findIndex((K) => K.id === E.item.id), C = t.config.findIndex((K) => K.id === P.id);
        t.config = Sa(t.config, A, C), e(t);
      } else if (!O)
        t.config = t.config.filter((A) => A.id !== E.item.id), e(t);
      else {
        const A = t.config.findIndex((K) => K.id === E.item.id), C = t.config.findIndex((K) => K.id === P.id);
        t.config = Sa(t.config, A, C), e(t);
      }
    else
      t.config.findIndex((A) => A.id === E.item.id), t.config.findIndex((A) => A.id === P.id);
  }, b = (y) => {
    const { active: q, over: O } = y, E = ma(q), P = ma(O), A = t.config.findIndex((K) => K.id === E.item.id), C = t.config.findIndex((K) => K.id === P.id);
    A != C && (t.config = Sa(t.config, A, C), e(t)), r(E.item), p();
  }, k = {
    form: t,
    onFormChange: e,
    activeItem: a,
    setActiveItem: r
  };
  return t ? /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
    /* @__PURE__ */ T.jsx("div", { className: "form-builder", children: /* @__PURE__ */ T.jsxs(
      Zg,
      {
        sensors: o,
        onDragStart: v,
        onDragOver: x,
        onDragEnd: b,
        collisionDetection: rg,
        autoScroll: !0,
        children: [
          /* @__PURE__ */ T.jsx("div", { className: "sidebar-area", children: /* @__PURE__ */ T.jsx(xb, { ...k }) }),
          /* @__PURE__ */ T.jsx("div", { className: "canvas-area", children: /* @__PURE__ */ T.jsx(
            wh,
            {
              strategy: yh,
              items: t.config.map((y) => y.id),
              children: /* @__PURE__ */ T.jsx(ib, { ...k })
            }
          ) }),
          /* @__PURE__ */ T.jsx("div", { className: "properties-area", children: /* @__PURE__ */ T.jsx(sb, { ...k }) }),
          /* @__PURE__ */ T.jsxs(mh, { dropAnimation: null, children: [
            i ? /* @__PURE__ */ T.jsx(Ku, { item: i }) : null,
            " ",
            c ? /* @__PURE__ */ T.jsx(
              lu,
              {
                item: c,
                onChange: () => {
                }
              }
            ) : null
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ T.jsx(Bu, {})
  ] }) : /* @__PURE__ */ T.jsx(T.Fragment, { children: /* @__PURE__ */ T.jsx("div", { children: "No form config loaded" }) });
};
export {
  Cb as FormBuilder,
  lu as ItemRender
};
//# sourceMappingURL=index.js.map
