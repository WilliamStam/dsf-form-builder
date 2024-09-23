import * as d from "react";
import ze, { useState as ct, useContext as Bn, useEffect as Xe, useRef as Et, useLayoutEffect as Pd, useCallback as pn, useMemo as kt, createContext as _a, memo as Td, useReducer as al, cloneElement as kd, forwardRef as qd } from "react";
import fa, { unstable_batchedUpdates as oa, createPortal as Id } from "react-dom";
function Rd(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var xi = { exports: {} }, ia = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yl;
function Nd() {
  if (Yl) return ia;
  Yl = 1;
  var t = ze, n = Symbol.for("react.element"), e = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, r = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(i, c, f) {
    var m, v = {}, x = null, b = null;
    f !== void 0 && (x = "" + f), c.key !== void 0 && (x = "" + c.key), c.ref !== void 0 && (b = c.ref);
    for (m in c) a.call(c, m) && !o.hasOwnProperty(m) && (v[m] = c[m]);
    if (i && i.defaultProps) for (m in c = i.defaultProps, c) v[m] === void 0 && (v[m] = c[m]);
    return { $$typeof: n, type: i, key: x, ref: b, props: v, _owner: r.current };
  }
  return ia.Fragment = e, ia.jsx = s, ia.jsxs = s, ia;
}
var la = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wl;
function Md() {
  return Wl || (Wl = 1, process.env.NODE_ENV !== "production" && function() {
    var t = ze, n = Symbol.for("react.element"), e = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), N = Symbol.iterator, w = "@@iterator";
    function T(h) {
      if (h === null || typeof h != "object")
        return null;
      var O = N && h[N] || h[w];
      return typeof O == "function" ? O : null;
    }
    var P = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function D(h) {
      {
        for (var O = arguments.length, ne = new Array(O > 1 ? O - 1 : 0), xe = 1; xe < O; xe++)
          ne[xe - 1] = arguments[xe];
        C("error", h, ne);
      }
    }
    function C(h, O, ne) {
      {
        var xe = P.ReactDebugCurrentFrame, Re = xe.getStackAddendum();
        Re !== "" && (O += "%s", ne = ne.concat([Re]));
        var Se = ne.map(function($) {
          return String($);
        });
        Se.unshift("Warning: " + O), Function.prototype.apply.call(console[h], console, Se);
      }
    }
    var _ = !1, E = !1, G = !1, S = !1, H = !1, X;
    X = Symbol.for("react.module.reference");
    function Y(h) {
      return !!(typeof h == "string" || typeof h == "function" || h === a || h === o || H || h === r || h === f || h === m || S || h === b || _ || E || G || typeof h == "object" && h !== null && (h.$$typeof === x || h.$$typeof === v || h.$$typeof === s || h.$$typeof === i || h.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      h.$$typeof === X || h.getModuleId !== void 0));
    }
    function q(h, O, ne) {
      var xe = h.displayName;
      if (xe)
        return xe;
      var Re = O.displayName || O.name || "";
      return Re !== "" ? ne + "(" + Re + ")" : ne;
    }
    function oe(h) {
      return h.displayName || "Context";
    }
    function W(h) {
      if (h == null)
        return null;
      if (typeof h.tag == "number" && D("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
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
        case m:
          return "SuspenseList";
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case i:
            var O = h;
            return oe(O) + ".Consumer";
          case s:
            var ne = h;
            return oe(ne._context) + ".Provider";
          case c:
            return q(h, h.render, "ForwardRef");
          case v:
            var xe = h.displayName || null;
            return xe !== null ? xe : W(h.type) || "Memo";
          case x: {
            var Re = h, Se = Re._payload, $ = Re._init;
            try {
              return W($(Se));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ve = Object.assign, ge = 0, Ce, Oe, we, de, F, se, ae;
    function M() {
    }
    M.__reactDisabledLog = !0;
    function j() {
      {
        if (ge === 0) {
          Ce = console.log, Oe = console.info, we = console.warn, de = console.error, F = console.group, se = console.groupCollapsed, ae = console.groupEnd;
          var h = {
            configurable: !0,
            enumerable: !0,
            value: M,
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
        ge < 0 && D("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Z = P.ReactCurrentDispatcher, ie;
    function K(h, O, ne) {
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
    function te(h, O) {
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
        if (O) {
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
          for (var V = Fe.stack.split(`
`), ue = xe.stack.split(`
`), me = V.length - 1, he = ue.length - 1; me >= 1 && he >= 0 && V[me] !== ue[he]; )
            he--;
          for (; me >= 1 && he >= 0; me--, he--)
            if (V[me] !== ue[he]) {
              if (me !== 1 || he !== 1)
                do
                  if (me--, he--, he < 0 || V[me] !== ue[he]) {
                    var be = `
` + V[me].replace(" at new ", " at ");
                    return h.displayName && be.includes("<anonymous>") && (be = be.replace("<anonymous>", h.displayName)), typeof h == "function" && ee.set(h, be), be;
                  }
                while (me >= 1 && he >= 0);
              break;
            }
        }
      } finally {
        z = !1, Z.current = Se, B(), Error.prepareStackTrace = Re;
      }
      var Te = h ? h.displayName || h.name : "", We = Te ? K(Te) : "";
      return typeof h == "function" && ee.set(h, We), We;
    }
    function _e(h, O, ne) {
      return te(h, !1);
    }
    function Je(h) {
      var O = h.prototype;
      return !!(O && O.isReactComponent);
    }
    function Ye(h, O, ne) {
      if (h == null)
        return "";
      if (typeof h == "function")
        return te(h, Je(h));
      if (typeof h == "string")
        return K(h);
      switch (h) {
        case f:
          return K("Suspense");
        case m:
          return K("SuspenseList");
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case c:
            return _e(h.render);
          case v:
            return Ye(h.type, O, ne);
          case x: {
            var xe = h, Re = xe._payload, Se = xe._init;
            try {
              return Ye(Se(Re), O, ne);
            } catch {
            }
          }
        }
      return "";
    }
    var Me = Object.prototype.hasOwnProperty, nt = {}, $t = P.ReactDebugCurrentFrame;
    function It(h) {
      if (h) {
        var O = h._owner, ne = Ye(h.type, h._source, O ? O.type : null);
        $t.setExtraStackFrame(ne);
      } else
        $t.setExtraStackFrame(null);
    }
    function Ze(h, O, ne, xe, Re) {
      {
        var Se = Function.call.bind(Me);
        for (var $ in h)
          if (Se(h, $)) {
            var V = void 0;
            try {
              if (typeof h[$] != "function") {
                var ue = Error((xe || "React class") + ": " + ne + " type `" + $ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[$] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ue.name = "Invariant Violation", ue;
              }
              V = h[$](O, $, xe, ne, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (me) {
              V = me;
            }
            V && !(V instanceof Error) && (It(Re), D("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", xe || "React class", ne, $, typeof V), It(null)), V instanceof Error && !(V.message in nt) && (nt[V.message] = !0, It(Re), D("Failed %s type: %s", ne, V.message), It(null));
          }
      }
    }
    var Ct = Array.isArray;
    function At(h) {
      return Ct(h);
    }
    function St(h) {
      {
        var O = typeof Symbol == "function" && Symbol.toStringTag, ne = O && h[Symbol.toStringTag] || h.constructor.name || "Object";
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
        return D("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", St(h)), vt(h);
    }
    var mt = P.ReactCurrentOwner, Dt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Rt, Ht, jt;
    jt = {};
    function _t(h) {
      if (Me.call(h, "ref")) {
        var O = Object.getOwnPropertyDescriptor(h, "ref").get;
        if (O && O.isReactWarning)
          return !1;
      }
      return h.ref !== void 0;
    }
    function Le(h) {
      if (Me.call(h, "key")) {
        var O = Object.getOwnPropertyDescriptor(h, "key").get;
        if (O && O.isReactWarning)
          return !1;
      }
      return h.key !== void 0;
    }
    function re(h, O) {
      if (typeof h.ref == "string" && mt.current && O && mt.current.stateNode !== O) {
        var ne = W(mt.current.type);
        jt[ne] || (D('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', W(mt.current.type), h.ref), jt[ne] = !0);
      }
    }
    function Pe(h, O) {
      {
        var ne = function() {
          Rt || (Rt = !0, D("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        ne.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: ne,
          configurable: !0
        });
      }
    }
    function Be(h, O) {
      {
        var ne = function() {
          Ht || (Ht = !0, D("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        ne.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: ne,
          configurable: !0
        });
      }
    }
    var je = function(h, O, ne, xe, Re, Se, $) {
      var V = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: h,
        key: O,
        ref: ne,
        props: $,
        // Record the component responsible for creating this element.
        _owner: Se
      };
      return V._store = {}, Object.defineProperty(V._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(V, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: xe
      }), Object.defineProperty(V, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Re
      }), Object.freeze && (Object.freeze(V.props), Object.freeze(V)), V;
    };
    function $e(h, O, ne, xe, Re) {
      {
        var Se, $ = {}, V = null, ue = null;
        ne !== void 0 && (on(ne), V = "" + ne), Le(O) && (on(O.key), V = "" + O.key), _t(O) && (ue = O.ref, re(O, Re));
        for (Se in O)
          Me.call(O, Se) && !Dt.hasOwnProperty(Se) && ($[Se] = O[Se]);
        if (h && h.defaultProps) {
          var me = h.defaultProps;
          for (Se in me)
            $[Se] === void 0 && ($[Se] = me[Se]);
        }
        if (V || ue) {
          var he = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          V && Pe($, he), ue && Be($, he);
        }
        return je(h, V, ue, Re, xe, mt.current, $);
      }
    }
    var ft = P.ReactCurrentOwner, Nt = P.ReactDebugCurrentFrame;
    function rt(h) {
      if (h) {
        var O = h._owner, ne = Ye(h.type, h._source, O ? O.type : null);
        Nt.setExtraStackFrame(ne);
      } else
        Nt.setExtraStackFrame(null);
    }
    var Qe;
    Qe = !1;
    function et(h) {
      return typeof h == "object" && h !== null && h.$$typeof === n;
    }
    function it() {
      {
        if (ft.current) {
          var h = W(ft.current.type);
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
        var O = it();
        if (!O) {
          var ne = typeof h == "string" ? h : h.displayName || h.name;
          ne && (O = `

Check the top-level render call using <` + ne + ">.");
        }
        return O;
      }
    }
    function fe(h, O) {
      {
        if (!h._store || h._store.validated || h.key != null)
          return;
        h._store.validated = !0;
        var ne = J(O);
        if (Ie[ne])
          return;
        Ie[ne] = !0;
        var xe = "";
        h && h._owner && h._owner !== ft.current && (xe = " It was passed a child from " + W(h._owner.type) + "."), rt(h), D('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ne, xe), rt(null);
      }
    }
    function pe(h, O) {
      {
        if (typeof h != "object")
          return;
        if (At(h))
          for (var ne = 0; ne < h.length; ne++) {
            var xe = h[ne];
            et(xe) && fe(xe, O);
          }
        else if (et(h))
          h._store && (h._store.validated = !0);
        else if (h) {
          var Re = T(h);
          if (typeof Re == "function" && Re !== h.entries)
            for (var Se = Re.call(h), $; !($ = Se.next()).done; )
              et($.value) && fe($.value, O);
        }
      }
    }
    function De(h) {
      {
        var O = h.type;
        if (O == null || typeof O == "string")
          return;
        var ne;
        if (typeof O == "function")
          ne = O.propTypes;
        else if (typeof O == "object" && (O.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        O.$$typeof === v))
          ne = O.propTypes;
        else
          return;
        if (ne) {
          var xe = W(O);
          Ze(ne, h.props, "prop", xe, h);
        } else if (O.PropTypes !== void 0 && !Qe) {
          Qe = !0;
          var Re = W(O);
          D("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Re || "Unknown");
        }
        typeof O.getDefaultProps == "function" && !O.getDefaultProps.isReactClassApproved && D("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function lt(h) {
      {
        for (var O = Object.keys(h.props), ne = 0; ne < O.length; ne++) {
          var xe = O[ne];
          if (xe !== "children" && xe !== "key") {
            rt(h), D("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", xe), rt(null);
            break;
          }
        }
        h.ref !== null && (rt(h), D("Invalid attribute `ref` supplied to `React.Fragment`."), rt(null));
      }
    }
    var wt = {};
    function Bt(h, O, ne, xe, Re, Se) {
      {
        var $ = Y(h);
        if (!$) {
          var V = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (V += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ue = ht();
          ue ? V += ue : V += it();
          var me;
          h === null ? me = "null" : At(h) ? me = "array" : h !== void 0 && h.$$typeof === n ? (me = "<" + (W(h.type) || "Unknown") + " />", V = " Did you accidentally export a JSX literal instead of a component?") : me = typeof h, D("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", me, V);
        }
        var he = $e(h, O, ne, Re, Se);
        if (he == null)
          return he;
        if ($) {
          var be = O.children;
          if (be !== void 0)
            if (xe)
              if (At(be)) {
                for (var Te = 0; Te < be.length; Te++)
                  pe(be[Te], h);
                Object.freeze && Object.freeze(be);
              } else
                D("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              pe(be, h);
        }
        if (Me.call(O, "key")) {
          var We = W(h), Fe = Object.keys(O).filter(function(Pt) {
            return Pt !== "key";
          }), gt = Fe.length > 0 ? "{key: someKey, " + Fe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!wt[We + gt]) {
            var Lt = Fe.length > 0 ? "{" + Fe.join(": ..., ") + ": ...}" : "{}";
            D(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, gt, We, Lt, We), wt[We + gt] = !0;
          }
        }
        return h === a ? lt(he) : De(he), he;
      }
    }
    function Qt(h, O, ne) {
      return Bt(h, O, ne, !0);
    }
    function zt(h, O, ne) {
      return Bt(h, O, ne, !1);
    }
    var Vt = zt, en = Qt;
    la.Fragment = a, la.jsx = Vt, la.jsxs = en;
  }()), la;
}
process.env.NODE_ENV === "production" ? xi.exports = Nd() : xi.exports = Md();
var k = xi.exports;
class Ad {
  constructor(n) {
    this.label = n;
  }
}
class Ro extends Ad {
  constructor(n) {
    super(
      n.label
    );
  }
}
class jd {
  constructor(n, e) {
    this.render = n, this.validation = e;
  }
}
class zn extends jd {
  constructor(n) {
    super(
      n.render,
      n.validation
    );
  }
}
class _d {
  constructor(n, e, a, r, o, s, i, c, f) {
    this.form = n, this.settings = e, this.type = a, this.heading = r, this.description = o, this.hidden = s, this.icon = i, this.default_config = c, this.group = f, this.group || (this.group = new Ro({
      label: "None"
    }));
  }
}
class La extends _d {
  constructor(n) {
    super(
      n.form,
      n.settings,
      n.type,
      n.heading,
      n.description,
      n.hidden,
      n.icon,
      n.default_config,
      n.group
    );
  }
}
class No {
  constructor(n = []) {
    this.items = n;
  }
  registerItem(n, e) {
    e && (n.group = e), this.items.push(n);
  }
  addRegistry(n) {
    for (const e of n)
      this.items.push(e);
  }
  getByItem(n) {
    if (n)
      return this.items.find((e) => e.type === n.type);
  }
  //
  // getByType(type: string): Item | undefined {
  //     return this.items.find(item => item.type === type);
  // }
  *[Symbol.iterator]() {
    for (const n of this.items)
      yield n;
  }
  map(n) {
    return this.items.map((e, a, r) => n(e, a, r));
  }
}
const Za = {
  id: null,
  label: null,
  created_at: null,
  config: []
}, Ld = (t = Za) => {
  const [n, e] = ct({ ...Za, ...t });
  return {
    form: n,
    setForm: (a) => {
      console.log("formState", "setFormHandler", a ?? Za), e({ ...Za, ...a });
    }
  };
}, Fd = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let Pr = (t = 21) => {
  let n = "", e = crypto.getRandomValues(new Uint8Array(t));
  for (; t--; )
    n += Fd[e[t] & 63];
  return n;
};
function $d(t) {
  if (Array.isArray(t)) return t;
}
function Hd(t, n) {
  var e = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (e != null) {
    var a, r, o, s, i = [], c = !0, f = !1;
    try {
      if (o = (e = e.call(t)).next, n !== 0) for (; !(c = (a = o.call(e)).done) && (i.push(a.value), i.length !== n); c = !0) ;
    } catch (m) {
      f = !0, r = m;
    } finally {
      try {
        if (!c && e.return != null && (s = e.return(), Object(s) !== s)) return;
      } finally {
        if (f) throw r;
      }
    }
    return i;
  }
}
function Si(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var e = 0, a = new Array(n); e < n; e++) a[e] = t[e];
  return a;
}
function fc(t, n) {
  if (t) {
    if (typeof t == "string") return Si(t, n);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set") return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Si(t, n);
  }
}
function Bd() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bo(t, n) {
  return $d(t) || Hd(t, n) || fc(t, n) || Bd();
}
function an(t) {
  "@babel/helpers - typeof";
  return an = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, an(t);
}
function qe() {
  for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++)
    n[e] = arguments[e];
  if (n) {
    for (var a = [], r = 0; r < n.length; r++) {
      var o = n[r];
      if (o) {
        var s = an(o);
        if (s === "string" || s === "number")
          a.push(o);
        else if (s === "object") {
          var i = Array.isArray(o) ? o : Object.entries(o).map(function(c) {
            var f = bo(c, 2), m = f[0], v = f[1];
            return v ? m : null;
          });
          a = i.length ? a.concat(i.filter(function(c) {
            return !!c;
          })) : a;
        }
      }
    }
    return a.join(" ").trim();
  }
}
function zd(t) {
  if (Array.isArray(t)) return Si(t);
}
function Kd(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Vd() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wo(t) {
  return zd(t) || Kd(t) || fc(t) || Vd();
}
function ol(t, n) {
  if (!(t instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function Yd(t, n) {
  if (an(t) !== "object" || t === null) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var a = e.call(t, n || "default");
    if (an(a) !== "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(t);
}
function pc(t) {
  var n = Yd(t, "string");
  return an(n) === "symbol" ? n : String(n);
}
function Wd(t, n) {
  for (var e = 0; e < n.length; e++) {
    var a = n[e];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, pc(a.key), a);
  }
}
function il(t, n, e) {
  return e && Wd(t, e), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function Fa(t, n, e) {
  return n = pc(n), n in t ? Object.defineProperty(t, n, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[n] = e, t;
}
function ai(t, n) {
  var e = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!e) {
    if (Array.isArray(t) || (e = Ud(t)) || n) {
      e && (t = e);
      var a = 0, r = function() {
      };
      return { s: r, n: function() {
        return a >= t.length ? { done: !0 } : { done: !1, value: t[a++] };
      }, e: function(f) {
        throw f;
      }, f: r };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0, s = !1, i;
  return { s: function() {
    e = e.call(t);
  }, n: function() {
    var f = e.next();
    return o = f.done, f;
  }, e: function(f) {
    s = !0, i = f;
  }, f: function() {
    try {
      !o && e.return != null && e.return();
    } finally {
      if (s) throw i;
    }
  } };
}
function Ud(t, n) {
  if (t) {
    if (typeof t == "string") return Ul(t, n);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set") return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Ul(t, n);
  }
}
function Ul(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var e = 0, a = new Array(n); e < n; e++) a[e] = t[e];
  return a;
}
var R = /* @__PURE__ */ function() {
  function t() {
    ol(this, t);
  }
  return il(t, null, [{
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
      var e = window, a = document, r = a.documentElement, o = a.getElementsByTagName("body")[0], s = e.innerWidth || r.clientWidth || o.clientWidth, i = e.innerHeight || r.clientHeight || o.clientHeight;
      return {
        width: s,
        height: i
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
          for (var s = a.split(" "), i = 0; i < s.length; i++)
            e.className = e.className + (" " + s[i]);
    }
  }, {
    key: "removeMultipleClasses",
    value: function(e, a) {
      if (e && a)
        if (e.classList)
          for (var r = a.split(" "), o = 0; o < r.length; o++)
            e.classList.remove(r[o]);
        else
          for (var s = a.split(" "), i = 0; i < s.length; i++)
            e.className = e.className.replace(new RegExp("(^|\\b)" + s[i].split(" ").join("|") + "(\\b|$)", "gi"), " ");
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
        var o = bo(r, 2), s = o[0], i = o[1];
        return e.style[s] = i;
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
        var o = function s(i, c) {
          var f, m, v = e != null && (f = e.$attrs) !== null && f !== void 0 && f[i] ? [e == null || (m = e.$attrs) === null || m === void 0 ? void 0 : m[i]] : [];
          return [c].flat().reduce(function(x, b) {
            if (b != null) {
              var N = an(b);
              if (N === "string" || N === "number")
                x.push(b);
              else if (N === "object") {
                var w = Array.isArray(b) ? s(i, b) : Object.entries(b).map(function(T) {
                  var P = bo(T, 2), D = P[0], C = P[1];
                  return i === "style" && (C || C === 0) ? "".concat(D.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), ":").concat(C) : C ? D : void 0;
                });
                x = w.length ? x.concat(w.filter(function(T) {
                  return !!T;
                })) : x;
              }
            }
            return x;
          }, v);
        };
        Object.entries(r).forEach(function(s) {
          var i = bo(s, 2), c = i[0], f = i[1];
          if (f != null) {
            var m = c.match(/^on(.+)/);
            m ? e.addEventListener(m[1].toLowerCase(), f) : c === "p-bind" ? a.setAttributes(e, f) : (f = c === "class" ? wo(new Set(o("class", f))).join(" ").trim() : c === "style" ? o("style", f).join(";").trim() : f, (e.$attrs = e.$attrs || {}) && (e.$attrs[c] = f), e.setAttribute(c, f));
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
      e && a && (r === "self" ? this.relativePosition(e, a) : (o && (e.style.minWidth = t.getOuterWidth(a) + "px"), this.absolutePosition(e, a)));
    }
  }, {
    key: "absolutePosition",
    value: function(e, a) {
      var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "left";
      if (e && a) {
        var o = e.offsetParent ? {
          width: e.offsetWidth,
          height: e.offsetHeight
        } : this.getHiddenElementDimensions(e), s = o.height, i = o.width, c = a.offsetHeight, f = a.offsetWidth, m = a.getBoundingClientRect(), v = this.getWindowScrollTop(), x = this.getWindowScrollLeft(), b = this.getViewport(), N, w;
        m.top + c + s > b.height ? (N = m.top + v - s, N < 0 && (N = v), e.style.transformOrigin = "bottom") : (N = c + m.top + v, e.style.transformOrigin = "top");
        var T = m.left, P = r === "left" ? 0 : i - f;
        T + f + i > b.width ? w = Math.max(0, T + x + f - i) : w = T - P + x, e.style.top = N + "px", e.style.left = w + "px";
      }
    }
  }, {
    key: "relativePosition",
    value: function(e, a) {
      if (e && a) {
        var r = e.offsetParent ? {
          width: e.offsetWidth,
          height: e.offsetHeight
        } : this.getHiddenElementDimensions(e), o = a.offsetHeight, s = a.getBoundingClientRect(), i = this.getViewport(), c, f;
        s.top + o + r.height > i.height ? (c = -1 * r.height, s.top + c < 0 && (c = -1 * s.top), e.style.transformOrigin = "bottom") : (c = o, e.style.transformOrigin = "top"), r.width > i.width ? f = s.left * -1 : s.left + r.width > i.width ? f = (s.left + r.width - i.width) * -1 : f = 0, e.style.top = c + "px", e.style.left = f + "px";
      }
    }
  }, {
    key: "flipfitCollision",
    value: function(e, a) {
      var r = this, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "left top", s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "left bottom", i = arguments.length > 4 ? arguments[4] : void 0;
      if (e && a) {
        var c = a.getBoundingClientRect(), f = this.getViewport(), m = o.split(" "), v = s.split(" "), x = function(P, D) {
          return D ? +P.substring(P.search(/(\+|-)/g)) || 0 : P.substring(0, P.search(/(\+|-)/g)) || P;
        }, b = {
          my: {
            x: x(m[0]),
            y: x(m[1] || m[0]),
            offsetX: x(m[0], !0),
            offsetY: x(m[1] || m[0], !0)
          },
          at: {
            x: x(v[0]),
            y: x(v[1] || v[0]),
            offsetX: x(v[0], !0),
            offsetY: x(v[1] || v[0], !0)
          }
        }, N = {
          left: function() {
            var P = b.my.offsetX + b.at.offsetX;
            return P + c.left + (b.my.x === "left" ? 0 : -1 * (b.my.x === "center" ? r.getOuterWidth(e) / 2 : r.getOuterWidth(e)));
          },
          top: function() {
            var P = b.my.offsetY + b.at.offsetY;
            return P + c.top + (b.my.y === "top" ? 0 : -1 * (b.my.y === "center" ? r.getOuterHeight(e) / 2 : r.getOuterHeight(e)));
          }
        }, w = {
          count: {
            x: 0,
            y: 0
          },
          left: function() {
            var P = N.left(), D = t.getWindowScrollLeft();
            e.style.left = P + D + "px", this.count.x === 2 ? (e.style.left = D + "px", this.count.x = 0) : P < 0 && (this.count.x++, b.my.x = "left", b.at.x = "right", b.my.offsetX *= -1, b.at.offsetX *= -1, this.right());
          },
          right: function() {
            var P = N.left() + t.getOuterWidth(a), D = t.getWindowScrollLeft();
            e.style.left = P + D + "px", this.count.x === 2 ? (e.style.left = f.width - t.getOuterWidth(e) + D + "px", this.count.x = 0) : P + t.getOuterWidth(e) > f.width && (this.count.x++, b.my.x = "right", b.at.x = "left", b.my.offsetX *= -1, b.at.offsetX *= -1, this.left());
          },
          top: function() {
            var P = N.top(), D = t.getWindowScrollTop();
            e.style.top = P + D + "px", this.count.y === 2 ? (e.style.left = D + "px", this.count.y = 0) : P < 0 && (this.count.y++, b.my.y = "top", b.at.y = "bottom", b.my.offsetY *= -1, b.at.offsetY *= -1, this.bottom());
          },
          bottom: function() {
            var P = N.top() + t.getOuterHeight(a), D = t.getWindowScrollTop();
            e.style.top = P + D + "px", this.count.y === 2 ? (e.style.left = f.height - t.getOuterHeight(e) + D + "px", this.count.y = 0) : P + t.getOuterHeight(a) > f.height && (this.count.y++, b.my.y = "bottom", b.at.y = "top", b.my.offsetY *= -1, b.at.offsetY *= -1, this.top());
          },
          center: function(P) {
            if (P === "y") {
              var D = N.top() + t.getOuterHeight(a) / 2;
              e.style.top = D + t.getWindowScrollTop() + "px", D < 0 ? this.bottom() : D + t.getOuterHeight(a) > f.height && this.top();
            } else {
              var C = N.left() + t.getOuterWidth(a) / 2;
              e.style.left = C + t.getWindowScrollLeft() + "px", C < 0 ? this.left() : C + t.getOuterWidth(e) > f.width && this.right();
            }
          }
        };
        w[b.at.x]("x"), w[b.at.y]("y"), this.isFunction(i) && i(b);
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
        var o = this.getParents(e), s = /(auto|scroll)/, i = function(C) {
          var _ = C ? getComputedStyle(C) : null;
          return _ && (s.test(_.getPropertyValue("overflow")) || s.test(_.getPropertyValue("overflow-x")) || s.test(_.getPropertyValue("overflow-y")));
        }, c = function(C) {
          a ? r.push(C.nodeName === "BODY" || C.nodeName === "HTML" || C.nodeType === 9 ? window : C) : r.push(C);
        }, f = ai(o), m;
        try {
          for (f.s(); !(m = f.n()).done; ) {
            var v = m.value, x = v.nodeType === 1 && v.dataset.scrollselectors;
            if (x) {
              var b = x.split(","), N = ai(b), w;
              try {
                for (N.s(); !(w = N.n()).done; ) {
                  var T = w.value, P = this.findSingle(v, T);
                  P && i(P) && c(P);
                }
              } catch (D) {
                N.e(D);
              } finally {
                N.f();
              }
            }
            v.nodeType === 1 && i(v) && c(v);
          }
        } catch (D) {
          f.e(D);
        } finally {
          f.f();
        }
      }
      return r.some(function(D) {
        return D === document.body || D === window;
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
        var r = +/* @__PURE__ */ new Date(), o = 0, s = function i() {
          o = +e.style.opacity + ((/* @__PURE__ */ new Date()).getTime() - r) / a, e.style.opacity = o, r = +/* @__PURE__ */ new Date(), +o < 1 && (window.requestAnimationFrame && requestAnimationFrame(i) || setTimeout(i, 16));
        };
        s();
      }
    }
  }, {
    key: "fadeOut",
    value: function(e, a) {
      if (e)
        var r = 1, o = 50, s = o / a, i = setInterval(function() {
          r = r - s, r <= 0 && (r = 0, clearInterval(i)), e.style.opacity = r;
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
      var r = getComputedStyle(e).getPropertyValue("border-top-width"), o = r ? parseFloat(r) : 0, s = getComputedStyle(e).getPropertyValue("padding-top"), i = s ? parseFloat(s) : 0, c = e.getBoundingClientRect(), f = a.getBoundingClientRect(), m = f.top + document.body.scrollTop - (c.top + document.body.scrollTop) - o - i, v = e.scrollTop, x = e.clientHeight, b = this.getOuterHeight(a);
      m < 0 ? e.scrollTop = v + m : m + b > x && (e.scrollTop = v + m - x + b);
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
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = t.find(e, 'button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(a, `,
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(a, `,
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(a, `,
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(a, `,
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(a, `,
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(a, `,
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(a)), o = [], s = ai(r), i;
      try {
        for (s.s(); !(i = s.n()).done; ) {
          var c = i.value;
          getComputedStyle(c).display !== "none" && getComputedStyle(c).visibility !== "hidden" && o.push(c);
        }
      } catch (f) {
        s.e(f);
      } finally {
        s.f();
      }
      return o;
    }
  }, {
    key: "getFirstFocusableElement",
    value: function(e, a) {
      var r = t.getFocusableElements(e, a);
      return r.length > 0 ? r[0] : null;
    }
  }, {
    key: "getLastFocusableElement",
    value: function(e, a) {
      var r = t.getFocusableElements(e, a);
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
        var r = t.getFirstFocusableElement(e);
        return r && t.focus(r, a), r;
      }
    }
  }, {
    key: "getCursorOffset",
    value: function(e, a, r, o) {
      if (e) {
        var s = getComputedStyle(e), i = document.createElement("div");
        i.style.position = "absolute", i.style.top = "0px", i.style.left = "0px", i.style.visibility = "hidden", i.style.pointerEvents = "none", i.style.overflow = s.overflow, i.style.width = s.width, i.style.height = s.height, i.style.padding = s.padding, i.style.border = s.border, i.style.overflowWrap = s.overflowWrap, i.style.whiteSpace = s.whiteSpace, i.style.lineHeight = s.lineHeight, i.innerHTML = a.replace(/\r\n|\r|\n/g, "<br />");
        var c = document.createElement("span");
        c.textContent = o, i.appendChild(c);
        var f = document.createTextNode(r);
        i.appendChild(f), document.body.appendChild(i);
        var m = c.offsetLeft, v = c.offsetTop, x = c.clientHeight;
        return document.body.removeChild(i), {
          left: Math.abs(m - e.scrollLeft),
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
        var o = t.saveAs({
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
      return t.addNonce(r, e), a || (a = document.head), a.appendChild(r), r;
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
      var a = function(s) {
        return !!(s && s.constructor && s.call && s.apply);
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
      var r, o, s, i, c;
      if (r = t.getAttributeNames(e), o = t.getAttributeNames(a), r.join(",") !== o.join(","))
        return !1;
      for (var f = 0; f < r.length; ++f)
        if (s = r[f], s === "style")
          for (var m = e.style, v = a.style, x = /^\d+$/, b = 0, N = Object.keys(m); b < N.length; b++) {
            var w = N[b];
            if (!x.test(w) && m[w] !== v[w])
              return !1;
          }
        else if (e.getAttribute(s) !== a.getAttribute(s))
          return !1;
      for (i = e.firstChild, c = a.firstChild; i && c; i = i.nextSibling, c = c.nextSibling) {
        if (i.nodeType !== c.nodeType)
          return !1;
        if (i.nodeType === 1) {
          if (!t.isEqualElement(i, c))
            return !1;
        } else if (i.nodeValue !== c.nodeValue)
          return !1;
      }
      return !(i || c);
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
Fa(R, "DATA_PROPS", ["data-"]);
Fa(R, "ARIA_PROPS", ["aria", "focus-target"]);
function Gd() {
  var t = /* @__PURE__ */ new Map();
  return {
    on: function(e, a) {
      var r = t.get(e);
      r ? r.push(a) : r = [a], t.set(e, r);
    },
    off: function(e, a) {
      var r = t.get(e);
      r && r.splice(r.indexOf(a) >>> 0, 1);
    },
    emit: function(e, a) {
      var r = t.get(e);
      r && r.slice().forEach(function(o) {
        return o(a);
      });
    }
  };
}
function Ei() {
  return Ei = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = arguments[n];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    }
    return t;
  }, Ei.apply(this, arguments);
}
function Xd(t, n) {
  var e = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!e) {
    if (Array.isArray(t) || (e = Jd(t)) || n) {
      e && (t = e);
      var a = 0, r = function() {
      };
      return { s: r, n: function() {
        return a >= t.length ? { done: !0 } : { done: !1, value: t[a++] };
      }, e: function(f) {
        throw f;
      }, f: r };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0, s = !1, i;
  return { s: function() {
    e = e.call(t);
  }, n: function() {
    var f = e.next();
    return o = f.done, f;
  }, e: function(f) {
    s = !0, i = f;
  }, f: function() {
    try {
      !o && e.return != null && e.return();
    } finally {
      if (s) throw i;
    }
  } };
}
function Jd(t, n) {
  if (t) {
    if (typeof t == "string") return Gl(t, n);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set") return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Gl(t, n);
  }
}
function Gl(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var e = 0, a = new Array(n); e < n; e++) a[e] = t[e];
  return a;
}
var Q = /* @__PURE__ */ function() {
  function t() {
    ol(this, t);
  }
  return il(t, null, [{
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
        var r = Array.isArray(e), o = Array.isArray(a), s, i, c;
        if (r && o) {
          if (i = e.length, i !== a.length)
            return !1;
          for (s = i; s-- !== 0; )
            if (!this.deepEquals(e[s], a[s]))
              return !1;
          return !0;
        }
        if (r !== o)
          return !1;
        var f = e instanceof Date, m = a instanceof Date;
        if (f !== m)
          return !1;
        if (f && m)
          return e.getTime() === a.getTime();
        var v = e instanceof RegExp, x = a instanceof RegExp;
        if (v !== x)
          return !1;
        if (v && x)
          return e.toString() === a.toString();
        var b = Object.keys(e);
        if (i = b.length, i !== Object.keys(a).length)
          return !1;
        for (s = i; s-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(a, b[s]))
            return !1;
        for (s = i; s-- !== 0; )
          if (c = b[s], !this.deepEquals(e[c], a[c]))
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
        for (var o = a.split("."), s = e, i = 0, c = o.length; i < c; ++i) {
          if (s == null)
            return null;
          s = s[o[i]];
        }
        return s;
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
        return a.some(function(s) {
          return o.startsWith(s);
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
      return a ? r ? a.findIndex(function(s) {
        return o.equals(s, e, r);
      }) : a.findIndex(function(s) {
        return s === e;
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
      for (var s in e)
        if (e.hasOwnProperty(s) && this.toFlatCase(s) === o)
          return e[s];
      for (var i in r)
        if (r.hasOwnProperty(i) && this.toFlatCase(i) === o)
          return r[i];
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
        var o, s = this.getComponentProp(e, "__TYPE") || (e.type ? e.type.displayName : void 0);
        !s && e !== null && e !== void 0 && (o = e.type) !== null && o !== void 0 && (o = o._payload) !== null && o !== void 0 && o.value && (s = e.type._payload.value.find(function(f) {
          return f === a;
        }));
        var i = s === a;
        try {
          var c;
        } catch {
        }
        return i;
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
          r = wo(e).reverse().find(a);
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
          r = e.lastIndexOf(wo(e).reverse().find(a));
        }
      return r;
    }
  }, {
    key: "sort",
    value: function(e, a) {
      var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, o = arguments.length > 3 ? arguments[3] : void 0, s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 1, i = this.compare(e, a, o, r), c = r;
      return (this.isEmpty(e) || this.isEmpty(a)) && (c = s === 1 ? r : s), c * i;
    }
  }, {
    key: "compare",
    value: function(e, a, r) {
      var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1, s = -1, i = this.isEmpty(e), c = this.isEmpty(a);
      return i && c ? s = 0 : i ? s = o : c ? s = -o : typeof e == "string" && typeof a == "string" ? s = r(e, a) : s = e < a ? -1 : e > a ? 1 : 0, s;
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
      var r = Xd(e), o;
      try {
        for (r.s(); !(o = r.n()).done; ) {
          var s = o.value;
          if (s.key === a)
            return s.children || [];
          if (s.children) {
            var i = this.findChildrenByKey(s.children, a);
            if (i.length > 0)
              return i;
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
        for (var o = a.split("."), s = e, i = 0, c = o.length; i < c; ++i) {
          if (i + 1 - c === 0) {
            s[o[i]] = r;
            break;
          }
          s[o[i]] || (s[o[i]] = {}), s = s[o[i]];
        }
    }
  }]);
}();
function Xl(t, n) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    n && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function Zd(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Xl(Object(e), !0).forEach(function(a) {
      Fa(t, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : Xl(Object(e)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return t;
}
var Wt = /* @__PURE__ */ function() {
  function t() {
    ol(this, t);
  }
  return il(t, null, [{
    key: "getJSXIcon",
    value: function(e) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = null;
      if (e !== null) {
        var s = an(e), i = qe(a.className, s === "string" && e);
        if (o = /* @__PURE__ */ d.createElement("span", Ei({}, a, {
          className: i
        })), s !== "string") {
          var c = Zd({
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
function Jl(t, n) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    n && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function Zl(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Jl(Object(e), !0).forEach(function(a) {
      Fa(t, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : Jl(Object(e)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return t;
}
function Qd(t, n) {
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
  n = Zl(Zl({}, e), n);
  var a, r, o, s, i, c, f, m, v, x, b, N, w = function(M, j) {
    var B, Z, ie;
    if (!(!t.offsetParent || t !== document.activeElement))
      if (typeof M == "number")
        Z = M, ie = typeof j == "number" ? j : Z, t.setSelectionRange ? t.setSelectionRange(Z, ie) : t.createTextRange && (B = t.createTextRange(), B.collapse(!0), B.moveEnd("character", ie), B.moveStart("character", Z), B.select());
      else
        return t.setSelectionRange ? (Z = t.selectionStart, ie = t.selectionEnd) : document.selection && document.selection.createRange && (B = document.selection.createRange(), Z = 0 - B.duplicate().moveStart("character", -1e5), ie = Z + B.text.length), {
          begin: Z,
          end: ie
        };
  }, T = function() {
    for (var M = s; M <= f; M++)
      if (a[M] && b[M] === P(M))
        return !1;
    return !0;
  }, P = function(M) {
    return M < n.slotChar.length ? n.slotChar.charAt(M) : n.slotChar.charAt(0);
  }, D = function() {
    return n.unmask ? Oe() : t && t.value;
  }, C = function(M) {
    for (; ++M < o && !a[M]; )
      ;
    return M;
  }, _ = function(M) {
    for (; --M >= 0 && !a[M]; )
      ;
    return M;
  }, E = function(M, j) {
    var B, Z;
    if (!(M < 0)) {
      for (B = M, Z = C(j); B < o; B++)
        if (a[B]) {
          if (Z < o && a[B].test(b[Z]))
            b[B] = b[Z], b[Z] = P(Z);
          else
            break;
          Z = C(Z);
        }
      oe(), w(Math.max(s, M));
    }
  }, G = function(M) {
    var j, B, Z, ie;
    for (j = M, B = P(M); j < o; j++)
      if (a[j])
        if (Z = C(j), ie = b[j], b[j] = B, Z < o && a[Z].test(ie))
          B = ie;
        else
          break;
  }, S = function(M) {
    var j = t.value, B = w();
    if (m && m.length && m.length > j.length) {
      for (W(!0); B.begin > 0 && !a[B.begin - 1]; )
        B.begin--;
      if (B.begin === 0)
        for (; B.begin < s && !a[B.begin]; )
          B.begin++;
      w(B.begin, B.begin);
    } else {
      for (W(!0); B.begin < o && !a[B.begin]; )
        B.begin++;
      w(B.begin, B.begin);
    }
    n.onComplete && T() && n.onComplete({
      originalEvent: M,
      value: D()
    });
  }, H = function(M) {
    if (W(), n.onBlur && n.onBlur(M), we(M), t.value !== v) {
      var j = document.createEvent("HTMLEvents");
      j.initEvent("change", !0, !1), t.dispatchEvent(j);
    }
  }, X = function(M) {
    if (!n.readOnly) {
      var j = M.which || M.keyCode, B, Z, ie;
      m = t.value, j === 8 || j === 46 || R.isIOS() && j === 127 ? (B = w(), Z = B.begin, ie = B.end, ie - Z === 0 && (Z = j !== 46 ? _(Z) : ie = C(Z - 1), ie = j === 46 ? C(ie) : ie), q(Z, ie), E(Z, ie - 1), we(M), M.preventDefault()) : j === 13 ? (H(M), we(M)) : j === 27 && (t.value = v, w(0, W()), we(M), M.preventDefault());
    }
  }, Y = function(M) {
    if (!n.readOnly) {
      var j = M.which || M.keyCode, B = w(), Z, ie, K, z;
      if (!(M.ctrlKey || M.altKey || M.metaKey || j < 32)) {
        if (j && j !== 13) {
          if (B.end - B.begin !== 0 && (q(B.begin, B.end), E(B.begin, B.end - 1)), Z = C(B.begin - 1), Z < o && (ie = String.fromCharCode(j), a[Z].test(ie))) {
            if (G(Z), b[Z] = ie, oe(), K = C(Z), R.isAndroid()) {
              var ee = function() {
                w(K);
              };
              setTimeout(ee, 0);
            } else
              w(K);
            B.begin <= f && (z = T());
          }
          M.preventDefault();
        }
        we(M), n.onComplete && z && n.onComplete({
          originalEvent: M,
          value: D()
        });
      }
    }
  }, q = function(M, j) {
    var B;
    for (B = M; B < j && B < o; B++)
      a[B] && (b[B] = P(B));
  }, oe = function() {
    t.value = b.join("");
  }, W = function(M) {
    var j = t.value, B = -1, Z, ie, K;
    for (Z = 0, K = 0; Z < o; Z++)
      if (a[Z]) {
        for (b[Z] = P(Z); K++ < j.length; )
          if (ie = j.charAt(K - 1), a[Z].test(ie)) {
            b[Z] = ie, B = Z;
            break;
          }
        if (K > j.length) {
          q(Z + 1, o);
          break;
        }
      } else
        b[Z] === j.charAt(K) && K++, Z < r && (B = Z);
    return M ? oe() : B + 1 < r ? n.autoClear || b.join("") === N ? (t.value && (t.value = ""), q(0, o)) : oe() : (oe(), t.value = t.value.substring(0, B + 1)), r ? Z : s;
  }, ve = function(M) {
    if (!n.readOnly) {
      clearTimeout(x);
      var j;
      v = t.value, j = W(), x = setTimeout(function() {
        t === document.activeElement && (oe(), j === n.mask.replace("?", "").length ? w(0, j) : w(j));
      }, 100), n.onFocus && n.onFocus(M);
    }
  }, ge = function(M) {
    c ? S(M) : Ce(M);
  }, Ce = function(M) {
    if (!n.readOnly) {
      var j = W(!0);
      w(j), we(M), n.onComplete && T() && n.onComplete({
        originalEvent: M,
        value: D()
      });
    }
  }, Oe = function() {
    for (var M = [], j = 0; j < b.length; j++) {
      var B = b[j];
      a[j] && B !== P(j) && M.push(B);
    }
    return M.join("");
  }, we = function(M) {
    if (n.onChange) {
      var j = D();
      n.onChange({
        originalEvent: M,
        value: N !== j ? j : "",
        stopPropagation: function() {
          M.stopPropagation();
        },
        preventDefault: function() {
          M.preventDefault();
        },
        target: {
          value: N !== j ? j : ""
        }
      });
    }
  }, de = function() {
    t.addEventListener("focus", ve), t.addEventListener("blur", H), t.addEventListener("keydown", X), t.addEventListener("keypress", Y), t.addEventListener("input", ge), t.addEventListener("paste", Ce);
  }, F = function() {
    t.removeEventListener("focus", ve), t.removeEventListener("blur", H), t.removeEventListener("keydown", X), t.removeEventListener("keypress", Y), t.removeEventListener("input", ge), t.removeEventListener("paste", Ce);
  }, se = function() {
    a = [], r = n.mask.length, o = n.mask.length, s = null, i = {
      9: "[0-9]",
      a: "[A-Za-z]",
      "*": "[A-Za-z0-9]"
    }, c = R.isChrome() && R.isAndroid();
    for (var M = n.mask.split(""), j = 0; j < M.length; j++) {
      var B = M[j];
      B === "?" ? (o--, r = j) : i[B] ? (a.push(new RegExp(i[B])), s === null && (s = a.length - 1), j < r && (f = a.length - 1)) : a.push(null);
    }
    b = [];
    for (var Z = 0; Z < M.length; Z++) {
      var ie = M[Z];
      ie !== "?" && (i[ie] ? b.push(P(Z)) : b.push(ie));
    }
    N = b.join("");
  };
  return t && n.mask && (se(), de()), {
    init: se,
    bindEvents: de,
    unbindEvents: F,
    updateModel: we,
    getValue: D
  };
}
function Ql(t, n) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    n && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function es(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Ql(Object(e), !0).forEach(function(a) {
      Fa(t, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : Ql(Object(e)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return t;
}
function xo(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t) {
    var e = function(s) {
      return typeof s == "function";
    }, a = n.classNameMergeFunction, r = e(a);
    return t.reduce(function(o, s) {
      if (!s)
        return o;
      var i = function() {
        var m = s[c];
        if (c === "style")
          o.style = es(es({}, o.style), s.style);
        else if (c === "className") {
          var v = "";
          r ? v = a(o.className, s.className) : v = [o.className, s.className].join(" ").trim(), o.className = v || void 0;
        } else if (e(m)) {
          var x = o[c];
          o[c] = x ? function() {
            x.apply(void 0, arguments), m.apply(void 0, arguments);
          } : m;
        } else
          o[c] = m;
      };
      for (var c in s)
        i();
      return o;
    }, {});
  }
}
var ts = 0;
function Er() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pr_id_";
  return ts++, "".concat(t).concat(ts);
}
function ef() {
  var t = [], n = function(i, c) {
    var f = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 999, m = r(i, c, f), v = m.value + (m.key === i ? 0 : f) + 1;
    return t.push({
      key: i,
      value: v
    }), v;
  }, e = function(i) {
    t = t.filter(function(c) {
      return c.value !== i;
    });
  }, a = function(i, c) {
    return r(i, c).value;
  }, r = function(i, c) {
    var f = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    return wo(t).reverse().find(function(m) {
      return c ? !0 : m.key === i;
    }) || {
      key: i,
      value: f
    };
  }, o = function(i) {
    return i && parseInt(i.style.zIndex, 10) || 0;
  };
  return {
    get: o,
    set: function(i, c, f, m) {
      c && (c.style.zIndex = String(n(i, f, m)));
    },
    clear: function(i) {
      i && (e(hn.get(i)), i.style.zIndex = "");
    },
    getCurrent: function(i, c) {
      return a(i, c);
    }
  };
}
var hn = ef(), dn = Object.freeze({
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
function ns(t, n) {
  var e = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!e) {
    if (Array.isArray(t) || (e = tf(t)) || n) {
      e && (t = e);
      var a = 0, r = function() {
      };
      return { s: r, n: function() {
        return a >= t.length ? { done: !0 } : { done: !1, value: t[a++] };
      }, e: function(f) {
        throw f;
      }, f: r };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0, s = !1, i;
  return { s: function() {
    e = e.call(t);
  }, n: function() {
    var f = e.next();
    return o = f.done, f;
  }, e: function(f) {
    s = !0, i = f;
  }, f: function() {
    try {
      !o && e.return != null && e.return();
    } finally {
      if (s) throw i;
    }
  } };
}
function tf(t, n) {
  if (t) {
    if (typeof t == "string") return rs(t, n);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set") return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return rs(t, n);
  }
}
function rs(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var e = 0, a = new Array(n); e < n; e++) a[e] = t[e];
  return a;
}
var as = {
  filter: function(n, e, a, r, o) {
    var s = [];
    if (!n)
      return s;
    var i = ns(n), c;
    try {
      for (i.s(); !(c = i.n()).done; ) {
        var f = c.value;
        if (typeof f == "string") {
          if (this.filters[r](f, a, o)) {
            s.push(f);
            continue;
          }
        } else {
          var m = ns(e), v;
          try {
            for (m.s(); !(v = m.n()).done; ) {
              var x = v.value, b = Q.resolveFieldData(f, x);
              if (this.filters[r](b, a, o)) {
                s.push(f);
                break;
              }
            }
          } catch (N) {
            m.e(N);
          } finally {
            m.f();
          }
        }
      }
    } catch (N) {
      i.e(N);
    } finally {
      i.f();
    }
    return s;
  },
  filters: {
    startsWith: function(n, e, a) {
      if (e == null || e.trim() === "")
        return !0;
      if (n == null)
        return !1;
      var r = Q.removeAccents(e.toString()).toLocaleLowerCase(a), o = Q.removeAccents(n.toString()).toLocaleLowerCase(a);
      return o.slice(0, r.length) === r;
    },
    contains: function(n, e, a) {
      if (e == null || typeof e == "string" && e.trim() === "")
        return !0;
      if (n == null)
        return !1;
      var r = Q.removeAccents(e.toString()).toLocaleLowerCase(a), o = Q.removeAccents(n.toString()).toLocaleLowerCase(a);
      return o.indexOf(r) !== -1;
    },
    notContains: function(n, e, a) {
      if (e == null || typeof e == "string" && e.trim() === "")
        return !0;
      if (n == null)
        return !1;
      var r = Q.removeAccents(e.toString()).toLocaleLowerCase(a), o = Q.removeAccents(n.toString()).toLocaleLowerCase(a);
      return o.indexOf(r) === -1;
    },
    endsWith: function(n, e, a) {
      if (e == null || e.trim() === "")
        return !0;
      if (n == null)
        return !1;
      var r = Q.removeAccents(e.toString()).toLocaleLowerCase(a), o = Q.removeAccents(n.toString()).toLocaleLowerCase(a);
      return o.indexOf(r, o.length - r.length) !== -1;
    },
    equals: function(n, e, a) {
      return e == null || typeof e == "string" && e.trim() === "" ? !0 : n == null ? !1 : n.getTime && e.getTime ? n.getTime() === e.getTime() : Q.removeAccents(n.toString()).toLocaleLowerCase(a) === Q.removeAccents(e.toString()).toLocaleLowerCase(a);
    },
    notEquals: function(n, e, a) {
      return e == null || typeof e == "string" && e.trim() === "" || n == null ? !0 : n.getTime && e.getTime ? n.getTime() !== e.getTime() : Q.removeAccents(n.toString()).toLocaleLowerCase(a) !== Q.removeAccents(e.toString()).toLocaleLowerCase(a);
    },
    in: function(n, e) {
      if (e == null || e.length === 0)
        return !0;
      for (var a = 0; a < e.length; a++)
        if (Q.equals(n, e[a]))
          return !0;
      return !1;
    },
    notIn: function(n, e) {
      if (e == null || e.length === 0)
        return !0;
      for (var a = 0; a < e.length; a++)
        if (Q.equals(n, e[a]))
          return !1;
      return !0;
    },
    between: function(n, e) {
      return e == null || e[0] == null || e[1] == null ? !0 : n == null ? !1 : n.getTime ? e[0].getTime() <= n.getTime() && n.getTime() <= e[1].getTime() : e[0] <= n && n <= e[1];
    },
    lt: function(n, e) {
      return e == null ? !0 : n == null ? !1 : n.getTime && e.getTime ? n.getTime() < e.getTime() : n < e;
    },
    lte: function(n, e) {
      return e == null ? !0 : n == null ? !1 : n.getTime && e.getTime ? n.getTime() <= e.getTime() : n <= e;
    },
    gt: function(n, e) {
      return e == null ? !0 : n == null ? !1 : n.getTime && e.getTime ? n.getTime() > e.getTime() : n > e;
    },
    gte: function(n, e) {
      return e == null ? !0 : n == null ? !1 : n.getTime && e.getTime ? n.getTime() >= e.getTime() : n >= e;
    },
    dateIs: function(n, e) {
      return e == null ? !0 : n == null ? !1 : n.toDateString() === e.toDateString();
    },
    dateIsNot: function(n, e) {
      return e == null ? !0 : n == null ? !1 : n.toDateString() !== e.toDateString();
    },
    dateBefore: function(n, e) {
      return e == null ? !0 : n == null ? !1 : n.getTime() < e.getTime();
    },
    dateAfter: function(n, e) {
      return e == null ? !0 : n == null ? !1 : n.getTime() > e.getTime();
    }
  },
  register: function(n, e) {
    this.filters[n] = e;
  }
};
function wa(t) {
  "@babel/helpers - typeof";
  return wa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, wa(t);
}
function nf(t, n) {
  if (wa(t) !== "object" || t === null) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var a = e.call(t, n || "default");
    if (wa(a) !== "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(t);
}
function rf(t) {
  var n = nf(t, "string");
  return wa(n) === "symbol" ? n : String(n);
}
function Cn(t, n, e) {
  return n = rf(n), n in t ? Object.defineProperty(t, n, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[n] = e, t;
}
function af(t, n, e) {
  return Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function of(t, n) {
  if (!(t instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
var sn = /* @__PURE__ */ af(function t() {
  of(this, t);
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
Cn(sn, "changeTheme", function(t, n, e, a) {
  var r, o = document.getElementById(e);
  if (!o)
    throw Error("Element with id ".concat(e, " not found."));
  var s = o.getAttribute("href").replace(t, n), i = document.createElement("link");
  i.setAttribute("rel", "stylesheet"), i.setAttribute("id", e), i.setAttribute("href", s), i.addEventListener("load", function() {
    a && a();
  }), (r = o.parentNode) === null || r === void 0 || r.replaceChild(i, o);
});
var lf = {
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
function fn(t, n) {
  if (t.includes("__proto__") || t.includes("prototype"))
    throw new Error("Unsafe key detected");
  var e = n || sn.locale;
  try {
    return En(e)[t];
  } catch {
    throw new Error("The ".concat(t, " option is not found in the current locale('").concat(e, "')."));
  }
}
function os(t, n) {
  if (t.includes("__proto__") || t.includes("prototype"))
    throw new Error("Unsafe ariaKey detected");
  var e = sn.locale;
  try {
    var a = En(e).aria[t];
    if (a)
      for (var r in n)
        n.hasOwnProperty(r) && (a = a.replace("{".concat(r, "}"), n[r]));
    return a;
  } catch {
    throw new Error("The ".concat(t, " option is not found in the current locale('").concat(e, "')."));
  }
}
function En(t) {
  var n = t || sn.locale;
  if (n.includes("__proto__") || n.includes("prototype"))
    throw new Error("Unsafe locale detected");
  return lf[n];
}
var Kt = /* @__PURE__ */ ze.createContext(), Tt = sn;
function sf(t) {
  if (Array.isArray(t)) return t;
}
function cf(t, n) {
  var e = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (e != null) {
    var a, r, o, s, i = [], c = !0, f = !1;
    try {
      if (o = (e = e.call(t)).next, n === 0) {
        if (Object(e) !== e) return;
        c = !1;
      } else for (; !(c = (a = o.call(e)).done) && (i.push(a.value), i.length !== n); c = !0) ;
    } catch (m) {
      f = !0, r = m;
    } finally {
      try {
        if (!c && e.return != null && (s = e.return(), Object(s) !== s)) return;
      } finally {
        if (f) throw r;
      }
    }
    return i;
  }
}
function Ci(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var e = 0, a = new Array(n); e < n; e++) a[e] = t[e];
  return a;
}
function vc(t, n) {
  if (t) {
    if (typeof t == "string") return Ci(t, n);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set") return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Ci(t, n);
  }
}
function uf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function dr(t, n) {
  return sf(t) || cf(t, n) || vc(t, n) || uf();
}
var Vr = function(n) {
  var e = d.useRef(null);
  return d.useEffect(function() {
    return e.current = n, function() {
      e.current = null;
    };
  }, [n]), e.current;
}, An = function(n) {
  return d.useEffect(function() {
    return n;
  }, []);
}, fr = function(n) {
  var e = n.target, a = e === void 0 ? "document" : e, r = n.type, o = n.listener, s = n.options, i = n.when, c = i === void 0 ? !0 : i, f = d.useRef(null), m = d.useRef(null), v = Vr(o), x = Vr(s), b = function() {
    var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, C = D.target;
    Q.isNotEmpty(C) && (N(), (D.when || c) && (f.current = R.getTargetElement(C))), !m.current && f.current && (m.current = function(_) {
      return o && o(_);
    }, f.current.addEventListener(r, m.current, s));
  }, N = function() {
    m.current && (f.current.removeEventListener(r, m.current, s), m.current = null);
  }, w = function() {
    N(), v = null, x = null;
  }, T = d.useCallback(function() {
    c ? f.current = R.getTargetElement(a) : (N(), f.current = null);
  }, [a, c]);
  return d.useEffect(function() {
    T();
  }, [T]), d.useEffect(function() {
    var P = "".concat(v) !== "".concat(o), D = x !== s, C = m.current;
    C && (P || D) ? (N(), c && b()) : C || w();
  }, [o, s, c]), An(function() {
    w();
  }), [b, N];
}, yr = {}, df = function(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, a = d.useState(function() {
    return Er();
  }), r = dr(a, 1), o = r[0], s = d.useState(0), i = dr(s, 2), c = i[0], f = i[1];
  return d.useEffect(function() {
    if (e) {
      yr[n] || (yr[n] = []);
      var m = yr[n].push(o);
      return f(m), function() {
        delete yr[n][m - 1];
        var v = yr[n].length - 1, x = Q.findLastIndex(yr[n], function(b) {
          return b !== void 0;
        });
        x !== v && yr[n].splice(x + 1), f(void 0);
      };
    }
  }, [n, o, e]), c;
};
function ff(t) {
  if (Array.isArray(t)) return Ci(t);
}
function pf(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function vf() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function is(t) {
  return ff(t) || pf(t) || vc(t) || vf();
}
var ll = {
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
}, mc = {
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
  onGlobalKeyDown: function(n) {
    if (n.code === "Escape") {
      var e = mc.escKeyListeners, a = Math.max.apply(Math, is(e.keys())), r = e.get(a), o = Math.max.apply(Math, is(r.keys())), s = r.get(o);
      s(n);
    }
  },
  /**
   * Attach global keydown listener if there are any "esc" key handlers assigned,
   * otherwise detach.
   */
  refreshGlobalKeyDownListener: function() {
    var n = R.getTargetElement("document");
    this.escKeyListeners.size > 0 ? n.addEventListener("keydown", this.onGlobalKeyDown) : n.removeEventListener("keydown", this.onGlobalKeyDown);
  },
  /**
   * Add "Esc" key handler
   */
  addListener: function(n, e) {
    var a = this, r = dr(e, 2), o = r[0], s = r[1], i = this.escKeyListeners;
    i.has(o) || i.set(o, /* @__PURE__ */ new Map());
    var c = i.get(o);
    if (c.has(s))
      throw new Error("Unexpected: global esc key listener with priority [".concat(o, ", ").concat(s, "] already exists."));
    return c.set(s, n), this.refreshGlobalKeyDownListener(), function() {
      c.delete(s), c.size === 0 && i.delete(o), a.refreshGlobalKeyDownListener();
    };
  }
}, sl = function(n) {
  var e = n.callback, a = n.when, r = n.priority;
  Xe(function() {
    if (a)
      return mc.addListener(e, r);
  }, [e, a, r]);
}, cn = function() {
  var n = Bn(Kt);
  return function() {
    for (var e = arguments.length, a = new Array(e), r = 0; r < e; r++)
      a[r] = arguments[r];
    return xo(a, n == null ? void 0 : n.ptOptions);
  };
}, kn = function(n) {
  var e = d.useRef(!1);
  return d.useEffect(function() {
    if (!e.current)
      return e.current = !0, n && n();
  }, []);
}, gc = function(n) {
  var e = n.target, a = n.listener, r = n.options, o = n.when, s = o === void 0 ? !0 : o, i = d.useContext(Kt), c = d.useRef(null), f = d.useRef(null), m = d.useRef([]), v = Vr(a), x = Vr(r), b = function() {
    var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Q.isNotEmpty(D.target) && (N(), (D.when || s) && (c.current = R.getTargetElement(D.target))), !f.current && c.current) {
      var C = i ? i.hideOverlaysOnDocumentScrolling : Tt.hideOverlaysOnDocumentScrolling, _ = m.current = R.getScrollableParents(c.current, C);
      f.current = function(E) {
        return a && a(E);
      }, _.forEach(function(E) {
        return E.addEventListener("scroll", f.current, r);
      });
    }
  }, N = function() {
    if (f.current) {
      var D = m.current;
      D.forEach(function(C) {
        return C.removeEventListener("scroll", f.current, r);
      }), f.current = null;
    }
  }, w = function() {
    N(), m.current = null, v = null, x = null;
  }, T = d.useCallback(function() {
    s ? c.current = R.getTargetElement(e) : (N(), c.current = null);
  }, [e, s]);
  return d.useEffect(function() {
    T();
  }, [T]), d.useEffect(function() {
    var P = "".concat(v) !== "".concat(a), D = x !== r, C = f.current;
    C && (P || D) ? (N(), s && b()) : C || w();
  }, [a, r, s]), An(function() {
    w();
  }), [b, N];
}, cl = function(n) {
  var e = n.listener, a = n.when, r = a === void 0 ? !0 : a;
  return fr({
    target: "window",
    type: "resize",
    listener: e,
    when: r
  });
}, hc = function(n) {
  var e = n.target, a = n.overlay, r = n.listener, o = n.when, s = o === void 0 ? !0 : o, i = n.type, c = i === void 0 ? "click" : i, f = d.useRef(null), m = d.useRef(null), v = fr({
    target: "window",
    type: c,
    listener: function(ge) {
      r && r(ge, {
        type: "outside",
        valid: ge.which !== 3 && q(ge)
      });
    }
  }), x = dr(v, 2), b = x[0], N = x[1], w = cl({
    target: "window",
    listener: function(ge) {
      r && r(ge, {
        type: "resize",
        valid: !R.isTouchDevice()
      });
    }
  }), T = dr(w, 2), P = T[0], D = T[1], C = fr({
    target: "window",
    type: "orientationchange",
    listener: function(ge) {
      r && r(ge, {
        type: "orientationchange",
        valid: !0
      });
    }
  }), _ = dr(C, 2), E = _[0], G = _[1], S = gc({
    target: e,
    listener: function(ge) {
      r && r(ge, {
        type: "scroll",
        valid: !0
      });
    }
  }), H = dr(S, 2), X = H[0], Y = H[1], q = function(ge) {
    return f.current && !(f.current.isSameNode(ge.target) || f.current.contains(ge.target) || m.current && m.current.contains(ge.target));
  }, oe = function() {
    b(), P(), E(), X();
  }, W = function() {
    N(), D(), G(), Y();
  };
  return d.useEffect(function() {
    s ? (f.current = R.getTargetElement(e), m.current = R.getTargetElement(a)) : (W(), f.current = m.current = null);
  }, [e, a, s]), d.useEffect(function() {
    W();
  }, [s]), An(function() {
    W();
  }), [oe, W];
}, mf = 0, Sr = function(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = ct(!1), r = dr(a, 2), o = r[0], s = r[1], i = Et(null), c = Bn(Kt), f = R.isClient() ? window.document : void 0, m = e.document, v = m === void 0 ? f : m, x = e.manual, b = x === void 0 ? !1 : x, N = e.name, w = N === void 0 ? "style_".concat(++mf) : N, T = e.id, P = T === void 0 ? void 0 : T, D = e.media, C = D === void 0 ? void 0 : D, _ = function(X) {
    var Y = X.querySelector('style[data-primereact-style-id="'.concat(w, '"]'));
    if (Y)
      return Y;
    if (P !== void 0) {
      var q = v.getElementById(P);
      if (q)
        return q;
    }
    return v.createElement("style");
  }, E = function(X) {
    o && n !== X && (i.current.textContent = X);
  }, G = function() {
    if (!(!v || o)) {
      var X = (c == null ? void 0 : c.styleContainer) || v.head;
      i.current = _(X), i.current.isConnected || (i.current.type = "text/css", P && (i.current.id = P), C && (i.current.media = C), R.addNonce(i.current, c && c.nonce || Tt.nonce), X.appendChild(i.current), w && i.current.setAttribute("data-primereact-style-id", w)), i.current.textContent = n, s(!0);
    }
  }, S = function() {
    !v || !i.current || (R.removeInlineStyle(i.current), s(!1));
  };
  return Xe(function() {
    b || G();
  }, [b]), {
    id: P,
    name: w,
    update: E,
    unload: S,
    load: G,
    isLoaded: o
  };
}, dt = function(n, e) {
  var a = d.useRef(!1);
  return d.useEffect(function() {
    if (!a.current) {
      a.current = !0;
      return;
    }
    return n && n();
  }, e);
};
function Oi(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var e = 0, a = new Array(n); e < n; e++) a[e] = t[e];
  return a;
}
function gf(t) {
  if (Array.isArray(t)) return Oi(t);
}
function hf(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function bf(t, n) {
  if (t) {
    if (typeof t == "string") return Oi(t, n);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set") return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Oi(t, n);
  }
}
function yf() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ls(t) {
  return gf(t) || hf(t) || bf(t) || yf();
}
function xa(t) {
  "@babel/helpers - typeof";
  return xa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, xa(t);
}
function wf(t, n) {
  if (xa(t) !== "object" || t === null) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var a = e.call(t, n || "default");
    if (xa(a) !== "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(t);
}
function xf(t) {
  var n = wf(t, "string");
  return xa(n) === "symbol" ? n : String(n);
}
function Di(t, n, e) {
  return n = xf(n), n in t ? Object.defineProperty(t, n, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[n] = e, t;
}
function ss(t, n) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    n && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function nn(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? ss(Object(e), !0).forEach(function(a) {
      Di(t, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : ss(Object(e)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return t;
}
var Sf = `
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
`, Ef = `
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
`, Cf = `
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
`, Of = `
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
`, Df = `
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

    `.concat(Ef, `
    `).concat(Cf, `
    `).concat(Of, `
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
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = n.css, a = nn(nn({}, n.defaultProps), ot.defaultProps), r = {}, o = function(m) {
      var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return ot.context = v, ot.cProps = m, Q.getMergedProps(m, a);
    }, s = function(m) {
      return Q.getDiffProps(m, a);
    }, i = function() {
      var m, v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, N = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0;
      v.hasOwnProperty("pt") && v.pt !== void 0 && (v = v.pt);
      var w = x, T = /./g.test(w) && !!b[w.split(".")[0]], P = T ? Q.toFlatCase(w.split(".")[1]) : Q.toFlatCase(w), D = b.hostName && Q.toFlatCase(b.hostName), C = D || b.props && b.props.__TYPE && Q.toFlatCase(b.props.__TYPE) || "", _ = P === "transition", E = "data-pc-", G = function Oe(we) {
        return we != null && we.props ? we.hostName ? we.props.__TYPE === we.hostName ? we.props : Oe(we.parent) : we.parent : void 0;
      }, S = function(we) {
        var de, F;
        return ((de = b.props) === null || de === void 0 ? void 0 : de[we]) || ((F = G(b)) === null || F === void 0 ? void 0 : F[we]);
      };
      ot.cParams = b, ot.cName = C;
      var H = S("ptOptions") || ot.context.ptOptions || {}, X = H.mergeSections, Y = X === void 0 ? !0 : X, q = H.mergeProps, oe = q === void 0 ? !1 : q, W = function() {
        var we = pr.apply(void 0, arguments);
        return Array.isArray(we) ? {
          className: qe.apply(void 0, ls(we))
        } : Q.isString(we) ? {
          className: we
        } : we != null && we.hasOwnProperty("className") && Array.isArray(we.className) ? {
          className: qe.apply(void 0, ls(we.className))
        } : we;
      }, ve = N ? T ? bc(W, w, b) : yc(W, w, b) : void 0, ge = T ? void 0 : Ao(Mo(v, C), W, w, b), Ce = !_ && nn(nn({}, P === "root" && Di({}, "".concat(E, "name"), b.props && b.props.__parentMetadata ? Q.toFlatCase(b.props.__TYPE) : C)), {}, Di({}, "".concat(E, "section"), P));
      return Y || !Y && ge ? oe ? xo([ve, ge, Object.keys(Ce).length ? Ce : {}], {
        classNameMergeFunction: (m = ot.context.ptOptions) === null || m === void 0 ? void 0 : m.classNameMergeFunction
      }) : nn(nn(nn({}, ve), ge), Object.keys(Ce).length ? Ce : {}) : nn(nn({}, ge), Object.keys(Ce).length ? Ce : {});
    }, c = function() {
      var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, v = m.props, x = m.state, b = function() {
        var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return i((v || {}).pt, C, nn(nn({}, m), _));
      }, N = function() {
        var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", E = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return i(C, _, E, !1);
      }, w = function() {
        return ot.context.unstyled || Tt.unstyled || v.unstyled;
      }, T = function() {
        var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return w() ? void 0 : pr(e && e.classes, C, nn({
          props: v,
          state: x
        }, _));
      }, P = function() {
        var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, E = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
        if (E) {
          var G, S = pr(e && e.inlineStyles, C, nn({
            props: v,
            state: x
          }, _)), H = pr(r, C, nn({
            props: v,
            state: x
          }, _));
          return xo([H, S], {
            classNameMergeFunction: (G = ot.context.ptOptions) === null || G === void 0 ? void 0 : G.classNameMergeFunction
          });
        }
      };
      return {
        ptm: b,
        ptmo: N,
        sx: P,
        cx: T,
        isUnstyled: w
      };
    };
    return nn(nn({
      getProps: o,
      getOtherProps: s,
      setMetaData: c
    }, n), {}, {
      defaultProps: a
    });
  }
}, pr = function t(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = String(Q.toFlatCase(e)).split("."), o = r.shift(), s = Q.isNotEmpty(n) ? Object.keys(n).find(function(i) {
    return Q.toFlatCase(i) === o;
  }) : "";
  return o ? Q.isObject(n) ? t(Q.getItemValue(n[s], a), r.join("."), a) : void 0 : Q.getItemValue(n, a);
}, Mo = function(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", a = arguments.length > 2 ? arguments[2] : void 0, r = n == null ? void 0 : n._usept, o = function(i) {
    var c, f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, m = a ? a(i) : i, v = Q.toFlatCase(e);
    return (c = f ? v !== ot.cName ? m == null ? void 0 : m[v] : void 0 : m == null ? void 0 : m[v]) !== null && c !== void 0 ? c : m;
  };
  return Q.isNotEmpty(r) ? {
    _usept: r,
    originalValue: o(n.originalValue),
    value: o(n.value)
  } : o(n, !0);
}, Ao = function(n, e, a, r) {
  var o = function(w) {
    return e(w, a, r);
  };
  if (n != null && n.hasOwnProperty("_usept")) {
    var s = n._usept || ot.context.ptOptions || {}, i = s.mergeSections, c = i === void 0 ? !0 : i, f = s.mergeProps, m = f === void 0 ? !1 : f, v = s.classNameMergeFunction, x = o(n.originalValue), b = o(n.value);
    return x === void 0 && b === void 0 ? void 0 : Q.isString(b) ? b : Q.isString(x) ? x : c || !c && b ? m ? xo([x, b], {
      classNameMergeFunction: v
    }) : nn(nn({}, x), b) : b;
  }
  return o(n);
}, Pf = function() {
  return Mo(ot.context.pt || Tt.pt, void 0, function(n) {
    return Q.getItemValue(n, ot.cParams);
  });
}, Tf = function() {
  return Mo(ot.context.pt || Tt.pt, void 0, function(n) {
    return pr(n, ot.cName, ot.cParams) || Q.getItemValue(n, ot.cParams);
  });
}, bc = function(n, e, a) {
  return Ao(Pf(), n, e, a);
}, yc = function(n, e, a) {
  return Ao(Tf(), n, e, a);
}, qn = function(n) {
  var e = arguments.length > 2 ? arguments[2] : void 0, a = e.name, r = e.styled, o = r === void 0 ? !1 : r, s = e.hostName, i = s === void 0 ? "" : s, c = bc(pr, "global.css", ot.cParams), f = Q.toFlatCase(a), m = Sr(Sf, {
    name: "base",
    manual: !0
  }), v = m.load, x = Sr(Df, {
    name: "common",
    manual: !0
  }), b = x.load, N = Sr(c, {
    name: "global",
    manual: !0
  }), w = N.load, T = Sr(n, {
    name: a,
    manual: !0
  }), P = T.load, D = function(_) {
    if (!i) {
      var E = Ao(Mo((ot.cProps || {}).pt, f), pr, "hooks.".concat(_)), G = yc(pr, "hooks.".concat(_));
      E == null || E(), G == null || G();
    }
  };
  D("useMountEffect"), kn(function() {
    v(), w(), b(), o || P();
  }), dt(function() {
    D("useUpdateEffect");
  }), An(function() {
    D("useUnmountEffect");
  });
};
function So() {
  return So = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = arguments[n];
      for (var a in e) ({}).hasOwnProperty.call(e, a) && (t[a] = e[a]);
    }
    return t;
  }, So.apply(null, arguments);
}
function wc(t, n) {
  if (t == null) return {};
  var e = {};
  for (var a in t) if ({}.hasOwnProperty.call(t, a)) {
    if (n.includes(a)) continue;
    e[a] = t[a];
  }
  return e;
}
function Pi(t, n) {
  return Pi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, a) {
    return e.__proto__ = a, e;
  }, Pi(t, n);
}
function xc(t, n) {
  t.prototype = Object.create(n.prototype), t.prototype.constructor = t, Pi(t, n);
}
var Ti = { exports: {} }, Qa = { exports: {} }, bt = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cs;
function kf() {
  if (cs) return bt;
  cs = 1;
  var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, e = t ? Symbol.for("react.portal") : 60106, a = t ? Symbol.for("react.fragment") : 60107, r = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, i = t ? Symbol.for("react.context") : 60110, c = t ? Symbol.for("react.async_mode") : 60111, f = t ? Symbol.for("react.concurrent_mode") : 60111, m = t ? Symbol.for("react.forward_ref") : 60112, v = t ? Symbol.for("react.suspense") : 60113, x = t ? Symbol.for("react.suspense_list") : 60120, b = t ? Symbol.for("react.memo") : 60115, N = t ? Symbol.for("react.lazy") : 60116, w = t ? Symbol.for("react.block") : 60121, T = t ? Symbol.for("react.fundamental") : 60117, P = t ? Symbol.for("react.responder") : 60118, D = t ? Symbol.for("react.scope") : 60119;
  function C(E) {
    if (typeof E == "object" && E !== null) {
      var G = E.$$typeof;
      switch (G) {
        case n:
          switch (E = E.type, E) {
            case c:
            case f:
            case a:
            case o:
            case r:
            case v:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case i:
                case m:
                case N:
                case b:
                case s:
                  return E;
                default:
                  return G;
              }
          }
        case e:
          return G;
      }
    }
  }
  function _(E) {
    return C(E) === f;
  }
  return bt.AsyncMode = c, bt.ConcurrentMode = f, bt.ContextConsumer = i, bt.ContextProvider = s, bt.Element = n, bt.ForwardRef = m, bt.Fragment = a, bt.Lazy = N, bt.Memo = b, bt.Portal = e, bt.Profiler = o, bt.StrictMode = r, bt.Suspense = v, bt.isAsyncMode = function(E) {
    return _(E) || C(E) === c;
  }, bt.isConcurrentMode = _, bt.isContextConsumer = function(E) {
    return C(E) === i;
  }, bt.isContextProvider = function(E) {
    return C(E) === s;
  }, bt.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === n;
  }, bt.isForwardRef = function(E) {
    return C(E) === m;
  }, bt.isFragment = function(E) {
    return C(E) === a;
  }, bt.isLazy = function(E) {
    return C(E) === N;
  }, bt.isMemo = function(E) {
    return C(E) === b;
  }, bt.isPortal = function(E) {
    return C(E) === e;
  }, bt.isProfiler = function(E) {
    return C(E) === o;
  }, bt.isStrictMode = function(E) {
    return C(E) === r;
  }, bt.isSuspense = function(E) {
    return C(E) === v;
  }, bt.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === a || E === f || E === o || E === r || E === v || E === x || typeof E == "object" && E !== null && (E.$$typeof === N || E.$$typeof === b || E.$$typeof === s || E.$$typeof === i || E.$$typeof === m || E.$$typeof === T || E.$$typeof === P || E.$$typeof === D || E.$$typeof === w);
  }, bt.typeOf = C, bt;
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
var us;
function qf() {
  return us || (us = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, e = t ? Symbol.for("react.portal") : 60106, a = t ? Symbol.for("react.fragment") : 60107, r = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, i = t ? Symbol.for("react.context") : 60110, c = t ? Symbol.for("react.async_mode") : 60111, f = t ? Symbol.for("react.concurrent_mode") : 60111, m = t ? Symbol.for("react.forward_ref") : 60112, v = t ? Symbol.for("react.suspense") : 60113, x = t ? Symbol.for("react.suspense_list") : 60120, b = t ? Symbol.for("react.memo") : 60115, N = t ? Symbol.for("react.lazy") : 60116, w = t ? Symbol.for("react.block") : 60121, T = t ? Symbol.for("react.fundamental") : 60117, P = t ? Symbol.for("react.responder") : 60118, D = t ? Symbol.for("react.scope") : 60119;
    function C(te) {
      return typeof te == "string" || typeof te == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      te === a || te === f || te === o || te === r || te === v || te === x || typeof te == "object" && te !== null && (te.$$typeof === N || te.$$typeof === b || te.$$typeof === s || te.$$typeof === i || te.$$typeof === m || te.$$typeof === T || te.$$typeof === P || te.$$typeof === D || te.$$typeof === w);
    }
    function _(te) {
      if (typeof te == "object" && te !== null) {
        var _e = te.$$typeof;
        switch (_e) {
          case n:
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
                var Ye = Je && Je.$$typeof;
                switch (Ye) {
                  case i:
                  case m:
                  case N:
                  case b:
                  case s:
                    return Ye;
                  default:
                    return _e;
                }
            }
          case e:
            return _e;
        }
      }
    }
    var E = c, G = f, S = i, H = s, X = n, Y = m, q = a, oe = N, W = b, ve = e, ge = o, Ce = r, Oe = v, we = !1;
    function de(te) {
      return we || (we = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), F(te) || _(te) === c;
    }
    function F(te) {
      return _(te) === f;
    }
    function se(te) {
      return _(te) === i;
    }
    function ae(te) {
      return _(te) === s;
    }
    function M(te) {
      return typeof te == "object" && te !== null && te.$$typeof === n;
    }
    function j(te) {
      return _(te) === m;
    }
    function B(te) {
      return _(te) === a;
    }
    function Z(te) {
      return _(te) === N;
    }
    function ie(te) {
      return _(te) === b;
    }
    function K(te) {
      return _(te) === e;
    }
    function z(te) {
      return _(te) === o;
    }
    function ee(te) {
      return _(te) === r;
    }
    function Ee(te) {
      return _(te) === v;
    }
    yt.AsyncMode = E, yt.ConcurrentMode = G, yt.ContextConsumer = S, yt.ContextProvider = H, yt.Element = X, yt.ForwardRef = Y, yt.Fragment = q, yt.Lazy = oe, yt.Memo = W, yt.Portal = ve, yt.Profiler = ge, yt.StrictMode = Ce, yt.Suspense = Oe, yt.isAsyncMode = de, yt.isConcurrentMode = F, yt.isContextConsumer = se, yt.isContextProvider = ae, yt.isElement = M, yt.isForwardRef = j, yt.isFragment = B, yt.isLazy = Z, yt.isMemo = ie, yt.isPortal = K, yt.isProfiler = z, yt.isStrictMode = ee, yt.isSuspense = Ee, yt.isValidElementType = C, yt.typeOf = _;
  }()), yt;
}
var ds;
function Sc() {
  return ds || (ds = 1, process.env.NODE_ENV === "production" ? Qa.exports = kf() : Qa.exports = qf()), Qa.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var oi, fs;
function If() {
  if (fs) return oi;
  fs = 1;
  var t = Object.getOwnPropertySymbols, n = Object.prototype.hasOwnProperty, e = Object.prototype.propertyIsEnumerable;
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
      for (var s = {}, i = 0; i < 10; i++)
        s["_" + String.fromCharCode(i)] = i;
      var c = Object.getOwnPropertyNames(s).map(function(m) {
        return s[m];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(m) {
        f[m] = m;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return oi = r() ? Object.assign : function(o, s) {
    for (var i, c = a(o), f, m = 1; m < arguments.length; m++) {
      i = Object(arguments[m]);
      for (var v in i)
        n.call(i, v) && (c[v] = i[v]);
      if (t) {
        f = t(i);
        for (var x = 0; x < f.length; x++)
          e.call(i, f[x]) && (c[f[x]] = i[f[x]]);
      }
    }
    return c;
  }, oi;
}
var ii, ps;
function ul() {
  if (ps) return ii;
  ps = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ii = t, ii;
}
var li, vs;
function Ec() {
  return vs || (vs = 1, li = Function.call.bind(Object.prototype.hasOwnProperty)), li;
}
var si, ms;
function Rf() {
  if (ms) return si;
  ms = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var n = ul(), e = {}, a = Ec();
    t = function(o) {
      var s = "Warning: " + o;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function r(o, s, i, c, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var m in o)
        if (a(o, m)) {
          var v;
          try {
            if (typeof o[m] != "function") {
              var x = Error(
                (c || "React class") + ": " + i + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw x.name = "Invariant Violation", x;
            }
            v = o[m](s, m, c, i, null, n);
          } catch (N) {
            v = N;
          }
          if (v && !(v instanceof Error) && t(
            (c || "React class") + ": type specification of " + i + " `" + m + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof v + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), v instanceof Error && !(v.message in e)) {
            e[v.message] = !0;
            var b = f ? f() : "";
            t(
              "Failed " + i + " type: " + v.message + (b ?? "")
            );
          }
        }
    }
  }
  return r.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (e = {});
  }, si = r, si;
}
var ci, gs;
function Nf() {
  if (gs) return ci;
  gs = 1;
  var t = Sc(), n = If(), e = ul(), a = Ec(), r = Rf(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(i) {
    var c = "Warning: " + i;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return ci = function(i, c) {
    var f = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function v(F) {
      var se = F && (f && F[f] || F[m]);
      if (typeof se == "function")
        return se;
    }
    var x = "<<anonymous>>", b = {
      array: P("array"),
      bigint: P("bigint"),
      bool: P("boolean"),
      func: P("function"),
      number: P("number"),
      object: P("object"),
      string: P("string"),
      symbol: P("symbol"),
      any: D(),
      arrayOf: C,
      element: _(),
      elementType: E(),
      instanceOf: G,
      node: Y(),
      objectOf: H,
      oneOf: S,
      oneOfType: X,
      shape: oe,
      exact: W
    };
    function N(F, se) {
      return F === se ? F !== 0 || 1 / F === 1 / se : F !== F && se !== se;
    }
    function w(F, se) {
      this.message = F, this.data = se && typeof se == "object" ? se : {}, this.stack = "";
    }
    w.prototype = Error.prototype;
    function T(F) {
      if (process.env.NODE_ENV !== "production")
        var se = {}, ae = 0;
      function M(B, Z, ie, K, z, ee, Ee) {
        if (K = K || x, ee = ee || ie, Ee !== e) {
          if (c) {
            var te = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw te.name = "Invariant Violation", te;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var _e = K + ":" + ie;
            !se[_e] && // Avoid spamming the console because they are often not actionable except for lib authors
            ae < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + ee + "` prop on `" + K + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), se[_e] = !0, ae++);
          }
        }
        return Z[ie] == null ? B ? Z[ie] === null ? new w("The " + z + " `" + ee + "` is marked as required " + ("in `" + K + "`, but its value is `null`.")) : new w("The " + z + " `" + ee + "` is marked as required in " + ("`" + K + "`, but its value is `undefined`.")) : null : F(Z, ie, K, z, ee);
      }
      var j = M.bind(null, !1);
      return j.isRequired = M.bind(null, !0), j;
    }
    function P(F) {
      function se(ae, M, j, B, Z, ie) {
        var K = ae[M], z = Ce(K);
        if (z !== F) {
          var ee = Oe(K);
          return new w(
            "Invalid " + B + " `" + Z + "` of type " + ("`" + ee + "` supplied to `" + j + "`, expected ") + ("`" + F + "`."),
            { expectedType: F }
          );
        }
        return null;
      }
      return T(se);
    }
    function D() {
      return T(s);
    }
    function C(F) {
      function se(ae, M, j, B, Z) {
        if (typeof F != "function")
          return new w("Property `" + Z + "` of component `" + j + "` has invalid PropType notation inside arrayOf.");
        var ie = ae[M];
        if (!Array.isArray(ie)) {
          var K = Ce(ie);
          return new w("Invalid " + B + " `" + Z + "` of type " + ("`" + K + "` supplied to `" + j + "`, expected an array."));
        }
        for (var z = 0; z < ie.length; z++) {
          var ee = F(ie, z, j, B, Z + "[" + z + "]", e);
          if (ee instanceof Error)
            return ee;
        }
        return null;
      }
      return T(se);
    }
    function _() {
      function F(se, ae, M, j, B) {
        var Z = se[ae];
        if (!i(Z)) {
          var ie = Ce(Z);
          return new w("Invalid " + j + " `" + B + "` of type " + ("`" + ie + "` supplied to `" + M + "`, expected a single ReactElement."));
        }
        return null;
      }
      return T(F);
    }
    function E() {
      function F(se, ae, M, j, B) {
        var Z = se[ae];
        if (!t.isValidElementType(Z)) {
          var ie = Ce(Z);
          return new w("Invalid " + j + " `" + B + "` of type " + ("`" + ie + "` supplied to `" + M + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return T(F);
    }
    function G(F) {
      function se(ae, M, j, B, Z) {
        if (!(ae[M] instanceof F)) {
          var ie = F.name || x, K = de(ae[M]);
          return new w("Invalid " + B + " `" + Z + "` of type " + ("`" + K + "` supplied to `" + j + "`, expected ") + ("instance of `" + ie + "`."));
        }
        return null;
      }
      return T(se);
    }
    function S(F) {
      if (!Array.isArray(F))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), s;
      function se(ae, M, j, B, Z) {
        for (var ie = ae[M], K = 0; K < F.length; K++)
          if (N(ie, F[K]))
            return null;
        var z = JSON.stringify(F, function(Ee, te) {
          var _e = Oe(te);
          return _e === "symbol" ? String(te) : te;
        });
        return new w("Invalid " + B + " `" + Z + "` of value `" + String(ie) + "` " + ("supplied to `" + j + "`, expected one of " + z + "."));
      }
      return T(se);
    }
    function H(F) {
      function se(ae, M, j, B, Z) {
        if (typeof F != "function")
          return new w("Property `" + Z + "` of component `" + j + "` has invalid PropType notation inside objectOf.");
        var ie = ae[M], K = Ce(ie);
        if (K !== "object")
          return new w("Invalid " + B + " `" + Z + "` of type " + ("`" + K + "` supplied to `" + j + "`, expected an object."));
        for (var z in ie)
          if (a(ie, z)) {
            var ee = F(ie, z, j, B, Z + "." + z, e);
            if (ee instanceof Error)
              return ee;
          }
        return null;
      }
      return T(se);
    }
    function X(F) {
      if (!Array.isArray(F))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var se = 0; se < F.length; se++) {
        var ae = F[se];
        if (typeof ae != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + we(ae) + " at index " + se + "."
          ), s;
      }
      function M(j, B, Z, ie, K) {
        for (var z = [], ee = 0; ee < F.length; ee++) {
          var Ee = F[ee], te = Ee(j, B, Z, ie, K, e);
          if (te == null)
            return null;
          te.data && a(te.data, "expectedType") && z.push(te.data.expectedType);
        }
        var _e = z.length > 0 ? ", expected one of type [" + z.join(", ") + "]" : "";
        return new w("Invalid " + ie + " `" + K + "` supplied to " + ("`" + Z + "`" + _e + "."));
      }
      return T(M);
    }
    function Y() {
      function F(se, ae, M, j, B) {
        return ve(se[ae]) ? null : new w("Invalid " + j + " `" + B + "` supplied to " + ("`" + M + "`, expected a ReactNode."));
      }
      return T(F);
    }
    function q(F, se, ae, M, j) {
      return new w(
        (F || "React class") + ": " + se + " type `" + ae + "." + M + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + j + "`."
      );
    }
    function oe(F) {
      function se(ae, M, j, B, Z) {
        var ie = ae[M], K = Ce(ie);
        if (K !== "object")
          return new w("Invalid " + B + " `" + Z + "` of type `" + K + "` " + ("supplied to `" + j + "`, expected `object`."));
        for (var z in F) {
          var ee = F[z];
          if (typeof ee != "function")
            return q(j, B, Z, z, Oe(ee));
          var Ee = ee(ie, z, j, B, Z + "." + z, e);
          if (Ee)
            return Ee;
        }
        return null;
      }
      return T(se);
    }
    function W(F) {
      function se(ae, M, j, B, Z) {
        var ie = ae[M], K = Ce(ie);
        if (K !== "object")
          return new w("Invalid " + B + " `" + Z + "` of type `" + K + "` " + ("supplied to `" + j + "`, expected `object`."));
        var z = n({}, ae[M], F);
        for (var ee in z) {
          var Ee = F[ee];
          if (a(F, ee) && typeof Ee != "function")
            return q(j, B, Z, ee, Oe(Ee));
          if (!Ee)
            return new w(
              "Invalid " + B + " `" + Z + "` key `" + ee + "` supplied to `" + j + "`.\nBad object: " + JSON.stringify(ae[M], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(F), null, "  ")
            );
          var te = Ee(ie, ee, j, B, Z + "." + ee, e);
          if (te)
            return te;
        }
        return null;
      }
      return T(se);
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
          if (F === null || i(F))
            return !0;
          var se = v(F);
          if (se) {
            var ae = se.call(F), M;
            if (se !== F.entries) {
              for (; !(M = ae.next()).done; )
                if (!ve(M.value))
                  return !1;
            } else
              for (; !(M = ae.next()).done; ) {
                var j = M.value;
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
  }, ci;
}
var ui, hs;
function Mf() {
  if (hs) return ui;
  hs = 1;
  var t = ul();
  function n() {
  }
  function e() {
  }
  return e.resetWarningCache = n, ui = function() {
    function a(s, i, c, f, m, v) {
      if (v !== t) {
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
      resetWarningCache: n
    };
    return o.PropTypes = o, o;
  }, ui;
}
if (process.env.NODE_ENV !== "production") {
  var Af = Sc(), jf = !0;
  Ti.exports = Nf()(Af.isElement, jf);
} else
  Ti.exports = Mf()();
var _f = Ti.exports;
const Ge = /* @__PURE__ */ Rd(_f);
function Lf(t, n) {
  return t.classList ? !!n && t.classList.contains(n) : (" " + (t.className.baseVal || t.className) + " ").indexOf(" " + n + " ") !== -1;
}
function Ff(t, n) {
  t.classList ? t.classList.add(n) : Lf(t, n) || (typeof t.className == "string" ? t.className = t.className + " " + n : t.setAttribute("class", (t.className && t.className.baseVal || "") + " " + n));
}
function bs(t, n) {
  return t.replace(new RegExp("(^|\\s)" + n + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function $f(t, n) {
  t.classList ? t.classList.remove(n) : typeof t.className == "string" ? t.className = bs(t.className, n) : t.setAttribute("class", bs(t.className && t.className.baseVal || "", n));
}
const ys = {
  disabled: !1
};
var Hf = process.env.NODE_ENV !== "production" ? Ge.oneOfType([Ge.number, Ge.shape({
  enter: Ge.number,
  exit: Ge.number,
  appear: Ge.number
}).isRequired]) : null, Bf = process.env.NODE_ENV !== "production" ? Ge.oneOfType([Ge.string, Ge.shape({
  enter: Ge.string,
  exit: Ge.string,
  active: Ge.string
}), Ge.shape({
  enter: Ge.string,
  enterDone: Ge.string,
  enterActive: Ge.string,
  exit: Ge.string,
  exitDone: Ge.string,
  exitActive: Ge.string
})]) : null;
const Cc = ze.createContext(null);
var Oc = function(n) {
  return n.scrollTop;
}, pa = "unmounted", wr = "exited", xr = "entering", Lr = "entered", ki = "exiting", Kn = /* @__PURE__ */ function(t) {
  xc(n, t);
  function n(a, r) {
    var o;
    o = t.call(this, a, r) || this;
    var s = r, i = s && !s.isMounting ? a.enter : a.appear, c;
    return o.appearStatus = null, a.in ? i ? (c = wr, o.appearStatus = xr) : c = Lr : a.unmountOnExit || a.mountOnEnter ? c = pa : c = wr, o.state = {
      status: c
    }, o.nextCallback = null, o;
  }
  n.getDerivedStateFromProps = function(r, o) {
    var s = r.in;
    return s && o.status === pa ? {
      status: wr
    } : null;
  };
  var e = n.prototype;
  return e.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, e.componentDidUpdate = function(r) {
    var o = null;
    if (r !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== xr && s !== Lr && (o = xr) : (s === xr || s === Lr) && (o = ki);
    }
    this.updateStatus(!1, o);
  }, e.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, e.getTimeouts = function() {
    var r = this.props.timeout, o, s, i;
    return o = s = i = r, r != null && typeof r != "number" && (o = r.exit, s = r.enter, i = r.appear !== void 0 ? r.appear : s), {
      exit: o,
      enter: s,
      appear: i
    };
  }, e.updateStatus = function(r, o) {
    if (r === void 0 && (r = !1), o !== null)
      if (this.cancelNextCallback(), o === xr) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : fa.findDOMNode(this);
          s && Oc(s);
        }
        this.performEnter(r);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === wr && this.setState({
      status: pa
    });
  }, e.performEnter = function(r) {
    var o = this, s = this.props.enter, i = this.context ? this.context.isMounting : r, c = this.props.nodeRef ? [i] : [fa.findDOMNode(this), i], f = c[0], m = c[1], v = this.getTimeouts(), x = i ? v.appear : v.enter;
    if (!r && !s || ys.disabled) {
      this.safeSetState({
        status: Lr
      }, function() {
        o.props.onEntered(f);
      });
      return;
    }
    this.props.onEnter(f, m), this.safeSetState({
      status: xr
    }, function() {
      o.props.onEntering(f, m), o.onTransitionEnd(x, function() {
        o.safeSetState({
          status: Lr
        }, function() {
          o.props.onEntered(f, m);
        });
      });
    });
  }, e.performExit = function() {
    var r = this, o = this.props.exit, s = this.getTimeouts(), i = this.props.nodeRef ? void 0 : fa.findDOMNode(this);
    if (!o || ys.disabled) {
      this.safeSetState({
        status: wr
      }, function() {
        r.props.onExited(i);
      });
      return;
    }
    this.props.onExit(i), this.safeSetState({
      status: ki
    }, function() {
      r.props.onExiting(i), r.onTransitionEnd(s.exit, function() {
        r.safeSetState({
          status: wr
        }, function() {
          r.props.onExited(i);
        });
      });
    });
  }, e.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, e.safeSetState = function(r, o) {
    o = this.setNextCallback(o), this.setState(r, o);
  }, e.setNextCallback = function(r) {
    var o = this, s = !0;
    return this.nextCallback = function(i) {
      s && (s = !1, o.nextCallback = null, r(i));
    }, this.nextCallback.cancel = function() {
      s = !1;
    }, this.nextCallback;
  }, e.onTransitionEnd = function(r, o) {
    this.setNextCallback(o);
    var s = this.props.nodeRef ? this.props.nodeRef.current : fa.findDOMNode(this), i = r == null && !this.props.addEndListener;
    if (!s || i) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], f = c[0], m = c[1];
      this.props.addEndListener(f, m);
    }
    r != null && setTimeout(this.nextCallback, r);
  }, e.render = function() {
    var r = this.state.status;
    if (r === pa)
      return null;
    var o = this.props, s = o.children;
    o.in, o.mountOnEnter, o.unmountOnExit, o.appear, o.enter, o.exit, o.timeout, o.addEndListener, o.onEnter, o.onEntering, o.onEntered, o.onExit, o.onExiting, o.onExited, o.nodeRef;
    var i = wc(o, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ ze.createElement(Cc.Provider, {
        value: null
      }, typeof s == "function" ? s(r, i) : ze.cloneElement(ze.Children.only(s), i))
    );
  }, n;
}(ze.Component);
Kn.contextType = Cc;
Kn.propTypes = process.env.NODE_ENV !== "production" ? {
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
  nodeRef: Ge.shape({
    current: typeof Element > "u" ? Ge.any : function(t, n, e, a, r, o) {
      var s = t[n];
      return Ge.instanceOf(s && "ownerDocument" in s ? s.ownerDocument.defaultView.Element : Element)(t, n, e, a, r, o);
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
  children: Ge.oneOfType([Ge.func.isRequired, Ge.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: Ge.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: Ge.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: Ge.bool,
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
  appear: Ge.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: Ge.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: Ge.bool,
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
  timeout: function(n) {
    var e = Hf;
    n.addEndListener || (e = e.isRequired);
    for (var a = arguments.length, r = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++)
      r[o - 1] = arguments[o];
    return e.apply(void 0, [n].concat(r));
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
  addEndListener: Ge.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: Ge.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: Ge.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: Ge.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: Ge.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: Ge.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: Ge.func
} : {};
function Mr() {
}
Kn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Mr,
  onEntering: Mr,
  onEntered: Mr,
  onExit: Mr,
  onExiting: Mr,
  onExited: Mr
};
Kn.UNMOUNTED = pa;
Kn.EXITED = wr;
Kn.ENTERING = xr;
Kn.ENTERED = Lr;
Kn.EXITING = ki;
var zf = function(n, e) {
  return n && e && e.split(" ").forEach(function(a) {
    return Ff(n, a);
  });
}, di = function(n, e) {
  return n && e && e.split(" ").forEach(function(a) {
    return $f(n, a);
  });
}, dl = /* @__PURE__ */ function(t) {
  xc(n, t);
  function n() {
    for (var a, r = arguments.length, o = new Array(r), s = 0; s < r; s++)
      o[s] = arguments[s];
    return a = t.call.apply(t, [this].concat(o)) || this, a.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    }, a.onEnter = function(i, c) {
      var f = a.resolveArguments(i, c), m = f[0], v = f[1];
      a.removeClasses(m, "exit"), a.addClass(m, v ? "appear" : "enter", "base"), a.props.onEnter && a.props.onEnter(i, c);
    }, a.onEntering = function(i, c) {
      var f = a.resolveArguments(i, c), m = f[0], v = f[1], x = v ? "appear" : "enter";
      a.addClass(m, x, "active"), a.props.onEntering && a.props.onEntering(i, c);
    }, a.onEntered = function(i, c) {
      var f = a.resolveArguments(i, c), m = f[0], v = f[1], x = v ? "appear" : "enter";
      a.removeClasses(m, x), a.addClass(m, x, "done"), a.props.onEntered && a.props.onEntered(i, c);
    }, a.onExit = function(i) {
      var c = a.resolveArguments(i), f = c[0];
      a.removeClasses(f, "appear"), a.removeClasses(f, "enter"), a.addClass(f, "exit", "base"), a.props.onExit && a.props.onExit(i);
    }, a.onExiting = function(i) {
      var c = a.resolveArguments(i), f = c[0];
      a.addClass(f, "exit", "active"), a.props.onExiting && a.props.onExiting(i);
    }, a.onExited = function(i) {
      var c = a.resolveArguments(i), f = c[0];
      a.removeClasses(f, "exit"), a.addClass(f, "exit", "done"), a.props.onExited && a.props.onExited(i);
    }, a.resolveArguments = function(i, c) {
      return a.props.nodeRef ? [a.props.nodeRef.current, i] : [i, c];
    }, a.getClassNames = function(i) {
      var c = a.props.classNames, f = typeof c == "string", m = f && c ? c + "-" : "", v = f ? "" + m + i : c[i], x = f ? v + "-active" : c[i + "Active"], b = f ? v + "-done" : c[i + "Done"];
      return {
        baseClassName: v,
        activeClassName: x,
        doneClassName: b
      };
    }, a;
  }
  var e = n.prototype;
  return e.addClass = function(r, o, s) {
    var i = this.getClassNames(o)[s + "ClassName"], c = this.getClassNames("enter"), f = c.doneClassName;
    o === "appear" && s === "done" && f && (i += " " + f), s === "active" && r && Oc(r), i && (this.appliedClasses[o][s] = i, zf(r, i));
  }, e.removeClasses = function(r, o) {
    var s = this.appliedClasses[o], i = s.base, c = s.active, f = s.done;
    this.appliedClasses[o] = {}, i && di(r, i), c && di(r, c), f && di(r, f);
  }, e.render = function() {
    var r = this.props;
    r.classNames;
    var o = wc(r, ["classNames"]);
    return /* @__PURE__ */ ze.createElement(Kn, So({}, o, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  }, n;
}(ze.Component);
dl.defaultProps = {
  classNames: ""
};
dl.propTypes = process.env.NODE_ENV !== "production" ? So({}, Kn.propTypes, {
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
  classNames: Bf,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: Ge.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: Ge.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: Ge.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: Ge.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: Ge.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: Ge.func
}) : {};
function Sa(t) {
  "@babel/helpers - typeof";
  return Sa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Sa(t);
}
function Kf(t, n) {
  if (Sa(t) !== "object" || t === null) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var a = e.call(t, n || "default");
    if (Sa(a) !== "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(t);
}
function Vf(t) {
  var n = Kf(t, "string");
  return Sa(n) === "symbol" ? n : String(n);
}
function Yf(t, n, e) {
  return n = Vf(n), n in t ? Object.defineProperty(t, n, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[n] = e, t;
}
var qi = {
  defaultProps: {
    __TYPE: "CSSTransition",
    children: void 0
  },
  getProps: function(n) {
    return Q.getMergedProps(n, qi.defaultProps);
  },
  getOtherProps: function(n) {
    return Q.getDiffProps(n, qi.defaultProps);
  }
};
function ws(t, n) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    n && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function fi(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? ws(Object(e), !0).forEach(function(a) {
      Yf(t, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : ws(Object(e)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return t;
}
var $a = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var e = qi.getProps(t), a = d.useContext(Kt), r = e.disabled || e.options && e.options.disabled || a && !a.cssTransition || !Tt.cssTransition, o = function(w, T) {
    e.onEnter && e.onEnter(w, T), e.options && e.options.onEnter && e.options.onEnter(w, T);
  }, s = function(w, T) {
    e.onEntering && e.onEntering(w, T), e.options && e.options.onEntering && e.options.onEntering(w, T);
  }, i = function(w, T) {
    e.onEntered && e.onEntered(w, T), e.options && e.options.onEntered && e.options.onEntered(w, T);
  }, c = function(w) {
    e.onExit && e.onExit(w), e.options && e.options.onExit && e.options.onExit(w);
  }, f = function(w) {
    e.onExiting && e.onExiting(w), e.options && e.options.onExiting && e.options.onExiting(w);
  }, m = function(w) {
    e.onExited && e.onExited(w), e.options && e.options.onExited && e.options.onExited(w);
  };
  if (dt(function() {
    if (r) {
      var N = Q.getRefElement(e.nodeRef);
      e.in ? (o(N, !0), s(N, !0), i(N, !0)) : (c(N), f(N), m(N));
    }
  }, [e.in]), r)
    return e.in ? e.children : null;
  var v = {
    nodeRef: e.nodeRef,
    in: e.in,
    onEnter: o,
    onEntering: s,
    onEntered: i,
    onExit: c,
    onExiting: f,
    onExited: m
  }, x = {
    classNames: e.classNames,
    timeout: e.timeout,
    unmountOnExit: e.unmountOnExit
  }, b = fi(fi(fi({}, x), e.options || {}), v);
  return /* @__PURE__ */ d.createElement(dl, b, e.children);
});
$a.displayName = "CSSTransition";
var bn = {
  defaultProps: {
    __TYPE: "IconBase",
    className: null,
    label: null,
    spin: !1
  },
  getProps: function(n) {
    return Q.getMergedProps(n, bn.defaultProps);
  },
  getOtherProps: function(n) {
    return Q.getDiffProps(n, bn.defaultProps);
  },
  getPTI: function(n) {
    var e = Q.isEmpty(n.label), a = bn.getOtherProps(n), r = {
      className: qe("p-icon", {
        "p-icon-spin": n.spin
      }, n.className),
      role: e ? void 0 : "img",
      "aria-label": e ? void 0 : n.label,
      "aria-hidden": e
    };
    return Q.getMergedProps(a, r);
  }
};
function Ii() {
  return Ii = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = arguments[n];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    }
    return t;
  }, Ii.apply(this, arguments);
}
var jo = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(t, n) {
  var e = bn.getPTI(t);
  return /* @__PURE__ */ d.createElement("svg", Ii({
    ref: n,
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
jo.displayName = "ChevronDownIcon";
function Ri() {
  return Ri = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = arguments[n];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    }
    return t;
  }, Ri.apply(this, arguments);
}
var _o = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(t, n) {
  var e = bn.getPTI(t);
  return /* @__PURE__ */ d.createElement("svg", Ri({
    ref: n,
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
_o.displayName = "ChevronRightIcon";
function Eo() {
  return Eo = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = arguments[n];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    }
    return t;
  }, Eo.apply(this, arguments);
}
function Ni(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var e = 0, a = new Array(n); e < n; e++) a[e] = t[e];
  return a;
}
function Wf(t) {
  if (Array.isArray(t)) return Ni(t);
}
function Uf(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Dc(t, n) {
  if (t) {
    if (typeof t == "string") return Ni(t, n);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set") return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Ni(t, n);
  }
}
function Gf() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xf(t) {
  return Wf(t) || Uf(t) || Dc(t) || Gf();
}
function Ea(t) {
  "@babel/helpers - typeof";
  return Ea = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ea(t);
}
function Jf(t, n) {
  if (Ea(t) !== "object" || t === null) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var a = e.call(t, n || "default");
    if (Ea(a) !== "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(t);
}
function Zf(t) {
  var n = Jf(t, "string");
  return Ea(n) === "symbol" ? n : String(n);
}
function Qf(t, n, e) {
  return n = Zf(n), n in t ? Object.defineProperty(t, n, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[n] = e, t;
}
function ep(t) {
  if (Array.isArray(t)) return t;
}
function tp(t, n) {
  var e = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (e != null) {
    var a, r, o, s, i = [], c = !0, f = !1;
    try {
      if (o = (e = e.call(t)).next, n !== 0) for (; !(c = (a = o.call(e)).done) && (i.push(a.value), i.length !== n); c = !0) ;
    } catch (m) {
      f = !0, r = m;
    } finally {
      try {
        if (!c && e.return != null && (s = e.return(), Object(s) !== s)) return;
      } finally {
        if (f) throw r;
      }
    }
    return i;
  }
}
function np() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xs(t, n) {
  return ep(t) || tp(t, n) || Dc(t, n) || np();
}
var rp = {
  root: "p-accordion p-component",
  accordiontab: {
    root: function(n) {
      var e = n.selected;
      return qe("p-accordion-tab", {
        "p-accordion-tab-active": e
      });
    },
    content: "p-accordion-content",
    header: function(n) {
      var e = n.selected, a = n.getTabProp, r = n.tab;
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
}, ap = `
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
`, eo = ot.extend({
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
    classes: rp,
    styles: ap
  }
}), Br = ot.extend({
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
  getCProp: function(n, e) {
    return Q.getComponentProp(n, e, Br.defaultProps);
  },
  getCProps: function(n) {
    return Q.getComponentProps(n, Br.defaultProps);
  },
  getCOtherProps: function(n) {
    return Q.getComponentDiffProps(n, Br.defaultProps);
  }
});
function Ss(t, n) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    n && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function Ar(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Ss(Object(e), !0).forEach(function(a) {
      Qf(t, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : Ss(Object(e)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return t;
}
var Jn = function() {
}, vr = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var e = cn(), a = d.useContext(Kt), r = eo.getProps(t, a), o = d.useState(r.id), s = xs(o, 2), i = s[0], c = s[1], f = d.useState(r.activeIndex), m = xs(f, 2), v = m[0], x = m[1], b = d.useRef(null), N = r.onTabChange ? r.activeIndex : v, w = d.Children.count(r.children), T = {
    props: r,
    state: {
      id: i,
      activeIndex: v
    }
  }, P = eo.setMetaData(Ar({}, T)), D = P.ptm, C = P.ptmo, _ = P.cx, E = P.isUnstyled;
  qn(eo.css.styles, E, {
    name: "accordion"
  });
  var G = function(z, ee) {
    return Br.getCProp(z, ee);
  }, S = function(z, ee, Ee) {
    var te = {
      // props: atProps, /* @todo */
      parent: T,
      context: {
        index: Ee,
        count: w,
        first: Ee === 0,
        last: Ee === w - 1,
        selected: se(Ee),
        disabled: G(z, "disabled")
      }
    };
    return e(D("tab.".concat(ee), {
      tab: te
    }), D("accordiontab.".concat(ee), {
      accordiontab: te
    }), D("accordiontab.".concat(ee), te), C(G(z, "pt"), ee, te));
  }, H = function(z, ee, Ee) {
    X(z, ee, Ee);
  }, X = function(z, ee, Ee) {
    if (!G(ee, "disabled")) {
      var te = se(Ee), _e = null;
      if (r.multiple) {
        var Je = N || [];
        _e = te ? Je.filter(function(Me) {
          return Me !== Ee;
        }) : [].concat(Xf(Je), [Ee]);
      } else
        _e = te ? null : Ee;
      var Ye = te ? r.onTabClose : r.onTabOpen;
      Ye && Ye({
        originalEvent: z,
        index: Ee
      }), r.onTabChange ? r.onTabChange({
        originalEvent: z,
        index: _e
      }) : x(_e);
    }
    z.preventDefault();
  }, Y = function(z, ee, Ee) {
    switch (z.code) {
      case "ArrowDown":
        q(z);
        break;
      case "ArrowUp":
        oe(z);
        break;
      case "Home":
        W(z);
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
  }, q = function(z) {
    var ee = Ce(z.target.parentElement.parentElement);
    ee ? F(ee) : W(z), z.preventDefault();
  }, oe = function(z) {
    var ee = Oe(z.target.parentElement.parentElement);
    ee ? F(ee) : ve(z), z.preventDefault();
  }, W = function(z) {
    var ee = we();
    F(ee), z.preventDefault();
  }, ve = function(z) {
    var ee = de();
    F(ee), z.preventDefault();
  }, ge = function(z, ee, Ee) {
    X(z, ee, Ee), z.preventDefault();
  }, Ce = function K(z) {
    var ee = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, Ee = ee ? z : z.nextElementSibling, te = R.findSingle(Ee, '[data-pc-section="header"]');
    return te ? R.getAttribute(te, "data-p-disabled") ? K(te.parentElement) : R.findSingle(te, '[data-pc-section="headeraction"]') : null;
  }, Oe = function K(z) {
    var ee = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, Ee = ee ? z : z.previousElementSibling, te = R.findSingle(Ee, '[data-pc-section="header"]');
    return te ? R.getAttribute(te, "data-p-disabled") ? K(te.parentElement) : R.findSingle(te, '[data-pc-section="headeraction"]') : null;
  }, we = function() {
    return Ce(b.current.firstElementChild, !0);
  }, de = function() {
    return Oe(b.current.lastElementChild, !0);
  }, F = function(z) {
    z && R.focus(z);
  }, se = function(z) {
    return r.multiple && Array.isArray(N) ? N && N.some(function(ee) {
      return ee === z;
    }) : N === z;
  };
  if (d.useImperativeHandle(n, function() {
    return {
      props: r,
      getElement: function() {
        return b.current;
      }
    };
  }), kn(function() {
    i || c(Er());
  }), !i)
    return null;
  var ae = function(z, ee, Ee) {
    var te = Ar(Ar({}, G(z, "style") || {}), G(z, "headerStyle") || {}), _e = i + "_header_" + Ee, Je = i + "_content_" + Ee, Ye = G(z, "disabled") ? -1 : G(z, "tabIndex"), Me = e({
      className: _("accordiontab.headertitle")
    }, S(z, "headertitle", Ee)), nt = Br.getCProps(z), $t = G(z, "headerTemplate") ? Q.getJSXElement(G(z, "headerTemplate"), nt) : /* @__PURE__ */ d.createElement("span", Me, Q.getJSXElement(G(z, "header"), nt)), It = e({
      "aria-hidden": "true",
      className: _("accordiontab.headericon")
    }, S(z, "headericon", Ee)), Ze = ee ? r.collapseIcon || /* @__PURE__ */ d.createElement(jo, It) : r.expandIcon || /* @__PURE__ */ d.createElement(_o, It), Ct = Wt.getJSXIcon(Ze, Ar({}, It), {
      props: r,
      selected: ee
    }), At = e({
      className: qe(G(z, "headerClassName"), G(z, "className"), _("accordiontab.header", {
        selected: ee,
        getTabProp: G,
        tab: z
      })),
      style: te,
      "data-p-highlight": ee,
      "data-p-disabled": G(z, "disabled")
    }, S(z, "header", Ee)), St = e({
      id: _e,
      href: "#" + Je,
      className: _("accordiontab.headeraction"),
      role: "button",
      tabIndex: Ye,
      onClick: function(vt) {
        return H(vt, z, Ee);
      },
      onKeyDown: function(vt) {
        return Y(vt, z, Ee);
      },
      "aria-disabled": G(z, "disabled"),
      "aria-controls": Je,
      "aria-expanded": ee
    }, S(z, "headeraction", Ee));
    return /* @__PURE__ */ d.createElement("div", At, /* @__PURE__ */ d.createElement("a", St, Ct, $t));
  }, M = function(z, ee, Ee) {
    var te = Ar(Ar({}, G(z, "style") || {}), G(z, "contentStyle") || {}), _e = i + "_content_" + Ee, Je = i + "_header_" + Ee, Ye = /* @__PURE__ */ d.createRef(), Me = e({
      id: _e,
      ref: Ye,
      className: qe(G(z, "contentClassName"), G(z, "className"), _("accordiontab.toggleablecontent")),
      style: te,
      role: "region",
      "aria-labelledby": Je
    }, S(z, "toggleablecontent", Ee)), nt = e({
      className: _("accordiontab.content")
    }, S(z, "content", Ee)), $t = e({
      classNames: _("accordiontab.transition"),
      timeout: {
        enter: 1e3,
        exit: 450
      },
      in: ee,
      unmountOnExit: !0,
      options: r.transitionOptions
    }, S(z, "transition", Ee));
    return /* @__PURE__ */ d.createElement($a, Eo({
      nodeRef: Ye
    }, $t), /* @__PURE__ */ d.createElement("div", Me, /* @__PURE__ */ d.createElement("div", nt, G(z, "children"))));
  }, j = function(z, ee) {
    if (Q.isValidChild(z, "AccordionTab")) {
      var Ee = i + "_" + ee, te = se(ee), _e = ae(z, te, ee), Je = M(z, te, ee), Ye = e({
        key: Ee,
        className: _("accordiontab.root", {
          selected: te
        })
      }, Br.getCOtherProps(z), S(z, "root", ee));
      return /* @__PURE__ */ d.createElement("div", Ye, _e, Je);
    }
    return null;
  }, B = function() {
    return d.Children.map(r.children, j);
  }, Z = B(), ie = e({
    className: qe(r.className, _("root")),
    style: r.style
  }, eo.getOtherProps(r), D("root"));
  return /* @__PURE__ */ d.createElement("div", Eo({
    id: i,
    ref: b
  }, ie), Z);
});
Jn.displayName = "AccordionTab";
vr.displayName = "Accordion";
function Mi(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var e = 0, a = new Array(n); e < n; e++) a[e] = t[e];
  return a;
}
function op(t) {
  if (Array.isArray(t)) return Mi(t);
}
function ip(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function lp(t, n) {
  if (t) {
    if (typeof t == "string") return Mi(t, n);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set") return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Mi(t, n);
  }
}
function sp() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cp(t) {
  return op(t) || ip(t) || lp(t) || sp();
}
var $r = {
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
  getRegex: function(n) {
    return $r.DEFAULT_MASKS[n] ? $r.DEFAULT_MASKS[n] : n;
  },
  onBeforeInput: function(n, e, a) {
    a || !R.isAndroid() || this.validateKey(n, n.data, e);
  },
  onKeyPress: function(n, e, a) {
    a || R.isAndroid() || n.ctrlKey || n.altKey || n.metaKey || this.validateKey(n, n.key, e);
  },
  onPaste: function(n, e, a) {
    if (!a) {
      var r = this.getRegex(e), o = n.clipboardData.getData("text");
      cp(o).forEach(function(s) {
        if (!r.test(s))
          return n.preventDefault(), !1;
      });
    }
  },
  validateKey: function(n, e, a) {
    if (e != null) {
      var r = e.length <= 2;
      if (r) {
        var o = this.getRegex(a);
        o.test(e) || n.preventDefault();
      }
    }
  },
  validate: function(n, e) {
    var a = n.target.value, r = !0, o = this.getRegex(e);
    return a && !o.test(a) && (r = !1), r;
  }
};
function up(t) {
  if (Array.isArray(t)) return t;
}
function dp(t, n) {
  var e = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (e != null) {
    var a, r, o, s, i = [], c = !0, f = !1;
    try {
      if (o = (e = e.call(t)).next, n !== 0) for (; !(c = (a = o.call(e)).done) && (i.push(a.value), i.length !== n); c = !0) ;
    } catch (m) {
      f = !0, r = m;
    } finally {
      try {
        if (!c && e.return != null && (s = e.return(), Object(s) !== s)) return;
      } finally {
        if (f) throw r;
      }
    }
    return i;
  }
}
function Es(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var e = 0, a = new Array(n); e < n; e++) a[e] = t[e];
  return a;
}
function fp(t, n) {
  if (t) {
    if (typeof t == "string") return Es(t, n);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set") return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Es(t, n);
  }
}
function pp() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vp(t, n) {
  return up(t) || dp(t, n) || fp(t, n) || pp();
}
var Ai = {
  defaultProps: {
    __TYPE: "Portal",
    element: null,
    appendTo: null,
    visible: !1,
    onMounted: null,
    onUnmounted: null,
    children: void 0
  },
  getProps: function(n) {
    return Q.getMergedProps(n, Ai.defaultProps);
  },
  getOtherProps: function(n) {
    return Q.getDiffProps(n, Ai.defaultProps);
  }
}, Xr = /* @__PURE__ */ d.memo(function(t) {
  var n = Ai.getProps(t), e = d.useContext(Kt), a = d.useState(n.visible && R.isClient()), r = vp(a, 2), o = r[0], s = r[1];
  kn(function() {
    R.isClient() && !o && (s(!0), n.onMounted && n.onMounted());
  }), dt(function() {
    n.onMounted && n.onMounted();
  }, [o]), An(function() {
    n.onUnmounted && n.onUnmounted();
  });
  var i = n.element || n.children;
  if (i && o) {
    var c = n.appendTo || e && e.appendTo || Tt.appendTo;
    return Q.isFunction(c) && (c = c()), c || (c = document.body), c === "self" ? i : /* @__PURE__ */ fa.createPortal(i, c);
  }
  return null;
});
Xr.displayName = "Portal";
function Co() {
  return Co = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = arguments[n];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    }
    return t;
  }, Co.apply(this, arguments);
}
function Ca(t) {
  "@babel/helpers - typeof";
  return Ca = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ca(t);
}
function mp(t, n) {
  if (Ca(t) !== "object" || t === null) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var a = e.call(t, n || "default");
    if (Ca(a) !== "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(t);
}
function gp(t) {
  var n = mp(t, "string");
  return Ca(n) === "symbol" ? n : String(n);
}
function Pc(t, n, e) {
  return n = gp(n), n in t ? Object.defineProperty(t, n, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[n] = e, t;
}
function ji(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var e = 0, a = new Array(n); e < n; e++) a[e] = t[e];
  return a;
}
function hp(t) {
  if (Array.isArray(t)) return ji(t);
}
function bp(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Tc(t, n) {
  if (t) {
    if (typeof t == "string") return ji(t, n);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set") return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return ji(t, n);
  }
}
function yp() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wp(t) {
  return hp(t) || bp(t) || Tc(t) || yp();
}
function xp(t) {
  if (Array.isArray(t)) return t;
}
function Sp(t, n) {
  var e = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (e != null) {
    var a, r, o, s, i = [], c = !0, f = !1;
    try {
      if (o = (e = e.call(t)).next, n !== 0) for (; !(c = (a = o.call(e)).done) && (i.push(a.value), i.length !== n); c = !0) ;
    } catch (m) {
      f = !0, r = m;
    } finally {
      try {
        if (!c && e.return != null && (s = e.return(), Object(s) !== s)) return;
      } finally {
        if (f) throw r;
      }
    }
    return i;
  }
}
function Ep() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sa(t, n) {
  return xp(t) || Sp(t, n) || Tc(t, n) || Ep();
}
var Cp = {
  root: function(n) {
    var e = n.positionState, a = n.classNameState;
    return qe("p-tooltip p-component", Pc({}, "p-tooltip-".concat(e), !0), a);
  },
  arrow: "p-tooltip-arrow",
  text: "p-tooltip-text"
}, Op = {
  arrow: function(n) {
    var e = n.context;
    return {
      top: e.bottom ? "0" : e.right || e.left || !e.right && !e.left && !e.top && !e.bottom ? "50%" : null,
      bottom: e.top ? "0" : null,
      left: e.right || !e.right && !e.left && !e.top && !e.bottom ? "0" : e.top || e.bottom ? "50%" : null,
      right: e.left ? "0" : null
    };
  }
}, Dp = `
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
`, to = ot.extend({
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
    classes: Cp,
    styles: Dp,
    inlineStyles: Op
  }
});
function Cs(t, n) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    n && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function Pp(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Cs(Object(e), !0).forEach(function(a) {
      Pc(t, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : Cs(Object(e)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return t;
}
var Lo = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(t, n) {
  var e = cn(), a = d.useContext(Kt), r = to.getProps(t, a), o = d.useState(!1), s = sa(o, 2), i = s[0], c = s[1], f = d.useState(r.position || "right"), m = sa(f, 2), v = m[0], x = m[1], b = d.useState(""), N = sa(b, 2), w = N[0], T = N[1], P = {
    props: r,
    state: {
      visible: i,
      position: v,
      className: w
    },
    context: {
      right: v === "right",
      left: v === "left",
      top: v === "top",
      bottom: v === "bottom"
    }
  }, D = to.setMetaData(P), C = D.ptm, _ = D.cx, E = D.sx, G = D.isUnstyled;
  qn(to.css.styles, G, {
    name: "tooltip"
  }), sl({
    callback: function() {
      Me();
    },
    when: r.closeOnEscape,
    priority: [ll.TOOLTIP, 0]
  });
  var S = d.useRef(null), H = d.useRef(null), X = d.useRef(null), Y = d.useRef(null), q = d.useRef(!0), oe = d.useRef({}), W = d.useRef(null), ve = cl({
    listener: function(re) {
      !R.isTouchDevice() && Me(re);
    }
  }), ge = sa(ve, 2), Ce = ge[0], Oe = ge[1], we = gc({
    target: X.current,
    listener: function(re) {
      Me(re);
    },
    when: i
  }), de = sa(we, 2), F = de[0], se = de[1], ae = function(re) {
    return !(r.content || K(re, "tooltip"));
  }, M = function(re) {
    return !(r.content || K(re, "tooltip") || r.children);
  }, j = function(re) {
    return K(re, "mousetrack") || r.mouseTrack;
  }, B = function(re) {
    return K(re, "disabled") === "true" || z(re, "disabled") || r.disabled;
  }, Z = function(re) {
    return K(re, "showondisabled") || r.showOnDisabled;
  }, ie = function() {
    return K(X.current, "autohide") || r.autoHide;
  }, K = function(re, Pe) {
    return z(re, "data-pr-".concat(Pe)) ? re.getAttribute("data-pr-".concat(Pe)) : null;
  }, z = function(re, Pe) {
    return re && re.hasAttribute(Pe);
  }, ee = function(re) {
    var Pe = [K(re, "showevent") || r.showEvent], Be = [K(re, "hideevent") || r.hideEvent];
    if (j(re))
      Pe = ["mousemove"], Be = ["mouseleave"];
    else {
      var je = K(re, "event") || r.event;
      je === "focus" && (Pe = ["focus"], Be = ["blur"]), je === "both" && (Pe = ["focus", "mouseenter"], Be = ["blur", "mouseleave"]);
    }
    return {
      showEvents: Pe,
      hideEvents: Be
    };
  }, Ee = function(re) {
    return K(re, "position") || v;
  }, te = function(re) {
    var Pe = K(re, "mousetracktop") || r.mouseTrackTop, Be = K(re, "mousetrackleft") || r.mouseTrackLeft;
    return {
      top: Pe,
      left: Be
    };
  }, _e = function(re, Pe) {
    if (H.current) {
      var Be = K(re, "tooltip") || r.content;
      Be ? (H.current.innerHTML = "", H.current.appendChild(document.createTextNode(Be)), Pe()) : r.children && Pe();
    }
  }, Je = function(re) {
    _e(X.current, function() {
      var Pe = W.current, Be = Pe.pageX, je = Pe.pageY;
      r.autoZIndex && !hn.get(S.current) && hn.set("tooltip", S.current, a && a.autoZIndex || Tt.autoZIndex, r.baseZIndex || a && a.zIndex.tooltip || Tt.zIndex.tooltip), S.current.style.left = "", S.current.style.top = "", ie() && (S.current.style.pointerEvents = "none");
      var $e = j(X.current) || re === "mouse";
      ($e && !Y.current || $e) && (Y.current = {
        width: R.getOuterWidth(S.current),
        height: R.getOuterHeight(S.current)
      }), nt(X.current, {
        x: Be,
        y: je
      }, re);
    });
  }, Ye = function(re) {
    X.current = re.currentTarget;
    var Pe = B(X.current), Be = M(Z(X.current) && Pe ? X.current.firstChild : X.current);
    if (!(Be || Pe))
      if (W.current = re, i)
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
  }, Me = function(re) {
    if (vt(), i) {
      var Pe = Ot(r.onBeforeHide, {
        originalEvent: re,
        target: X.current
      });
      Pe && St("hideDelay", function() {
        !ie() && q.current === !1 || (hn.clear(S.current), R.removeClass(S.current, "p-tooltip-active"), c(!1), Ot(r.onHide, {
          originalEvent: re,
          target: X.current
        }));
      });
    }
  }, nt = function(re, Pe, Be) {
    var je = 0, $e = 0, ft = Be || v;
    if ((j(re) || ft == "mouse") && Pe) {
      var Nt = {
        width: R.getOuterWidth(S.current),
        height: R.getOuterHeight(S.current)
      };
      je = Pe.x, $e = Pe.y;
      var rt = te(re), Qe = rt.top, et = rt.left;
      switch (ft) {
        case "left":
          je = je - (Nt.width + et), $e = $e - (Nt.height / 2 - Qe);
          break;
        case "right":
        case "mouse":
          je = je + et, $e = $e - (Nt.height / 2 - Qe);
          break;
        case "top":
          je = je - (Nt.width / 2 - et), $e = $e - (Nt.height + Qe);
          break;
        case "bottom":
          je = je - (Nt.width / 2 - et), $e = $e + Qe;
          break;
      }
      je <= 0 || Y.current.width > Nt.width ? (S.current.style.left = "0px", S.current.style.right = window.innerWidth - Nt.width - je + "px") : (S.current.style.right = "", S.current.style.left = je + "px"), S.current.style.top = $e + "px", R.addClass(S.current, "p-tooltip-active");
    } else {
      var it = R.findCollisionPosition(ft), ht = K(re, "my") || r.my || it.my, Ie = K(re, "at") || r.at || it.at;
      S.current.style.padding = "0px", R.flipfitCollision(S.current, re, ht, Ie, function(J) {
        var fe = J.at, pe = fe.x, De = fe.y, lt = J.my.x, wt = r.at ? pe !== "center" && pe !== lt ? pe : De : J.at["".concat(it.axis)];
        S.current.style.padding = "", x(wt), $t(wt), R.addClass(S.current, "p-tooltip-active");
      });
    }
  }, $t = function(re) {
    if (S.current) {
      var Pe = getComputedStyle(S.current);
      re === "left" ? S.current.style.left = parseFloat(Pe.left) - parseFloat(Pe.paddingLeft) * 2 + "px" : re === "top" && (S.current.style.top = parseFloat(Pe.top) - parseFloat(Pe.paddingTop) * 2 + "px");
    }
  }, It = function() {
    ie() || (q.current = !1);
  }, Ze = function(re) {
    ie() || (q.current = !0, Me(re));
  }, Ct = function(re) {
    if (re) {
      var Pe = ee(re), Be = Pe.showEvents, je = Pe.hideEvents, $e = on(re);
      Be.forEach(function(ft) {
        return $e == null ? void 0 : $e.addEventListener(ft, Ye);
      }), je.forEach(function(ft) {
        return $e == null ? void 0 : $e.addEventListener(ft, Me);
      });
    }
  }, At = function(re) {
    if (re) {
      var Pe = ee(re), Be = Pe.showEvents, je = Pe.hideEvents, $e = on(re);
      Be.forEach(function(ft) {
        return $e == null ? void 0 : $e.removeEventListener(ft, Ye);
      }), je.forEach(function(ft) {
        return $e == null ? void 0 : $e.removeEventListener(ft, Me);
      });
    }
  }, St = function(re, Pe) {
    vt();
    var Be = K(X.current, re.toLowerCase()) || r[re];
    Be ? oe.current["".concat(re)] = setTimeout(function() {
      return Pe();
    }, Be) : Pe();
  }, Ot = function(re) {
    if (re) {
      for (var Pe = arguments.length, Be = new Array(Pe > 1 ? Pe - 1 : 0), je = 1; je < Pe; je++)
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
          var Pe = document.createElement("div"), Be = re.nodeName === "INPUT";
          return Be ? R.addMultipleClasses(Pe, "p-tooltip-target-wrapper p-inputwrapper") : R.addClass(Pe, "p-tooltip-target-wrapper"), re.parentNode.insertBefore(Pe, re), Pe.appendChild(re), re.hasWrapper = !0, Pe;
        }
        return re.parentElement;
      } else if (re.hasWrapper) {
        var je;
        (je = re.parentElement).replaceWith.apply(je, wp(re.parentElement.childNodes)), delete re.hasWrapper;
      }
      return re;
    }
    return null;
  }, mt = function(re) {
    Rt(re), Dt(re);
  }, Dt = function(re) {
    Ht(re || r.target, Ct);
  }, Rt = function(re) {
    Ht(re || r.target, At);
  }, Ht = function(re, Pe) {
    if (re = Q.getRefElement(re), re)
      if (R.isElement(re))
        Pe(re);
      else {
        var Be = function($e) {
          var ft = R.find(document, $e);
          ft.forEach(function(Nt) {
            Pe(Nt);
          });
        };
        re instanceof Array ? re.forEach(function(je) {
          Be(je);
        }) : Be(re);
      }
  };
  kn(function() {
    i && X.current && B(X.current) && Me();
  }), dt(function() {
    return Dt(), function() {
      Rt();
    };
  }, [Ye, Me, r.target]), dt(function() {
    if (i) {
      var Le = Ee(X.current), re = K(X.current, "classname");
      x(Le), T(re), Je(Le), Ce(), F();
    } else
      x(r.position || "right"), T(""), X.current = null, Y.current = null, q.current = !0;
    return function() {
      Oe(), se();
    };
  }, [i]), dt(function() {
    var Le = Ee(X.current);
    i && Le !== "mouse" && St("updateDelay", function() {
      _e(X.current, function() {
        nt(X.current);
      });
    });
  }, [r.content]), An(function() {
    Me(), hn.clear(S.current);
  }), d.useImperativeHandle(n, function() {
    return {
      props: r,
      updateTargetEvents: mt,
      loadTargetEvents: Dt,
      unloadTargetEvents: Rt,
      show: Ye,
      hide: Me,
      getElement: function() {
        return S.current;
      },
      getTarget: function() {
        return X.current;
      }
    };
  });
  var jt = function() {
    var re = ae(X.current), Pe = e({
      id: r.id,
      className: qe(r.className, _("root", {
        positionState: v,
        classNameState: w
      })),
      style: r.style,
      role: "tooltip",
      "aria-hidden": i,
      onMouseEnter: function(ft) {
        return It();
      },
      onMouseLeave: function(ft) {
        return Ze(ft);
      }
    }, to.getOtherProps(r), C("root")), Be = e({
      className: _("arrow"),
      style: E("arrow", Pp({}, P))
    }, C("arrow")), je = e({
      className: _("text")
    }, C("text"));
    return /* @__PURE__ */ d.createElement("div", Co({
      ref: S
    }, Pe), /* @__PURE__ */ d.createElement("div", Be), /* @__PURE__ */ d.createElement("div", Co({
      ref: H
    }, je), re && r.children));
  };
  if (i) {
    var _t = jt();
    return /* @__PURE__ */ d.createElement(Xr, {
      element: _t,
      appendTo: r.appendTo,
      visible: !0
    });
  }
  return null;
}));
Lo.displayName = "Tooltip";
function Oo() {
  return Oo = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = arguments[n];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    }
    return t;
  }, Oo.apply(this, arguments);
}
function Oa(t) {
  "@babel/helpers - typeof";
  return Oa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Oa(t);
}
function Tp(t, n) {
  if (Oa(t) !== "object" || t === null) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var a = e.call(t, n || "default");
    if (Oa(a) !== "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(t);
}
function kp(t) {
  var n = Tp(t, "string");
  return Oa(n) === "symbol" ? n : String(n);
}
function qp(t, n, e) {
  return n = kp(n), n in t ? Object.defineProperty(t, n, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[n] = e, t;
}
var Ip = {
  root: function(n) {
    var e = n.props, a = n.isFilled, r = n.context;
    return qe("p-inputtext p-component", {
      "p-disabled": e.disabled,
      "p-filled": a,
      "p-invalid": e.invalid,
      "p-variant-filled": e.variant ? e.variant === "filled" : r && r.inputStyle === "filled"
    });
  }
}, no = ot.extend({
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
    classes: Ip
  }
});
function Os(t, n) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    n && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function Ds(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Os(Object(e), !0).forEach(function(a) {
      qp(t, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : Os(Object(e)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return t;
}
var Zt = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(t, n) {
  var e = cn(), a = d.useContext(Kt), r = no.getProps(t, a), o = no.setMetaData(Ds(Ds({
    props: r
  }, r.__parentMetadata), {}, {
    context: {
      disabled: r.disabled,
      iconPosition: r.iconPosition
    }
  })), s = o.ptm, i = o.cx, c = o.isUnstyled;
  qn(no.css.styles, c, {
    name: "inputtext",
    styled: !0
  });
  var f = d.useRef(n), m = function(D) {
    r.onKeyDown && r.onKeyDown(D), r.keyfilter && $r.onKeyPress(D, r.keyfilter, r.validateOnly);
  }, v = function(D) {
    r.onBeforeInput && r.onBeforeInput(D), r.keyfilter && $r.onBeforeInput(D, r.keyfilter, r.validateOnly);
  }, x = function(D) {
    var C = D.target, _ = !0;
    r.keyfilter && r.validateOnly && (_ = $r.validate(D, r.keyfilter)), r.onInput && r.onInput(D, _), Q.isNotEmpty(C.value) ? R.addClass(C, "p-filled") : R.removeClass(C, "p-filled");
  }, b = function(D) {
    r.onPaste && r.onPaste(D), r.keyfilter && $r.onPaste(D, r.keyfilter, r.validateOnly);
  };
  d.useEffect(function() {
    Q.combinedRefs(f, n);
  }, [f, n]);
  var N = d.useMemo(function() {
    return Q.isNotEmpty(r.value) || Q.isNotEmpty(r.defaultValue);
  }, [r.value, r.defaultValue]), w = Q.isNotEmpty(r.tooltip), T = e({
    className: qe(r.className, i("root", {
      context: a,
      isFilled: N
    })),
    onBeforeInput: v,
    onInput: x,
    onKeyDown: m,
    onPaste: b
  }, no.getOtherProps(r), s("root"));
  return /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("input", Oo({
    ref: f
  }, T)), w && /* @__PURE__ */ d.createElement(Lo, Oo({
    target: f,
    content: r.tooltip,
    pt: s("tooltip")
  }, r.tooltipOptions)));
}));
Zt.displayName = "InputText";
const Cr = {
  id: Pr(),
  type: "input-text",
  label: "",
  value: "",
  placeholder: ""
}, Rp = ({ config: t, onChange: n }) => {
  const [e, a] = ct({ ...Cr, ...t });
  Xe(() => {
    a({ ...Cr, ...t });
  }, [t]);
  const r = (s) => {
    const i = { ...Cr, ...t, value: s.target.value };
    n(i), a(i);
  }, o = Math.random().toString(36).substring(2, 15);
  return /* @__PURE__ */ k.jsx(k.Fragment, { children: /* @__PURE__ */ k.jsxs("div", { className: "flex flex-column gap-2", children: [
    /* @__PURE__ */ k.jsx("label", { htmlFor: o, children: e.label }),
    /* @__PURE__ */ k.jsx(
      Zt,
      {
        value: e.value,
        onChange: r,
        placeholder: e.placeholder,
        className: "w-full",
        id: o
      }
    )
  ] }) });
}, Np = ({ config: t, onChange: n }) => {
  const [e, a] = ct({ ...Cr, ...t }), r = (o) => {
    const s = { ...e, [o.target.name]: o.target.value };
    a(s), n(s);
  };
  return Xe(() => {
    a({ ...Cr, ...t });
  }, [t]), /* @__PURE__ */ k.jsx(k.Fragment, { children: /* @__PURE__ */ k.jsxs(vr, { activeIndex: 0, children: [
    " ",
    /* @__PURE__ */ k.jsx(Jn, { header: "General", children: /* @__PURE__ */ k.jsxs("div", { className: "form-item flex flex-column gap-4", children: [
      /* @__PURE__ */ k.jsxs("div", { className: "flex flex-column gap-2", children: [
        /* @__PURE__ */ k.jsx("label", { htmlFor: "label", children: "Label" }),
        /* @__PURE__ */ k.jsx(
          Zt,
          {
            id: "label",
            value: e.label || "",
            name: "label",
            onChange: r,
            className: "w-full"
          }
        )
      ] }),
      /* @__PURE__ */ k.jsxs("div", { className: "flex flex-column gap-2", children: [
        /* @__PURE__ */ k.jsx("label", { htmlFor: "placeholder", children: "Placeholder" }),
        /* @__PURE__ */ k.jsx(
          Zt,
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
}, Mp = new La({
  type: Cr.type,
  form: new zn({
    render: Rp,
    validation: (t) => (console.log(t), {})
  }),
  settings: new zn({
    render: Np,
    validation: (t) => (console.log(t), {})
  }),
  heading: "Text input",
  description: "a simple box to insert a value into",
  hidden: !1,
  icon: () => /* @__PURE__ */ k.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", children: /* @__PURE__ */ k.jsx("path", { d: "M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416 32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-1.8 0 18-48 159.6 0 18 48-1.8 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-25.8 0L254 52.8zM279.8 304l-111.6 0L224 155.1 279.8 304z" }) }),
  default_config: Cr
});
function _i() {
  return _i = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = arguments[n];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    }
    return t;
  }, _i.apply(this, arguments);
}
var Fo = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(t, n) {
  var e = bn.getPTI(t);
  return /* @__PURE__ */ d.createElement("svg", _i({
    ref: n,
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
Fo.displayName = "SpinnerIcon";
function Li() {
  return Li = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = arguments[n];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    }
    return t;
  }, Li.apply(this, arguments);
}
function Da(t) {
  "@babel/helpers - typeof";
  return Da = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Da(t);
}
function Ap(t, n) {
  if (Da(t) !== "object" || t === null) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var a = e.call(t, n || "default");
    if (Da(a) !== "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(t);
}
function jp(t) {
  var n = Ap(t, "string");
  return Da(n) === "symbol" ? n : String(n);
}
function _p(t, n, e) {
  return n = jp(n), n in t ? Object.defineProperty(t, n, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[n] = e, t;
}
function Lp(t) {
  if (Array.isArray(t)) return t;
}
function Fp(t, n) {
  var e = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (e != null) {
    var a, r, o, s, i = [], c = !0, f = !1;
    try {
      if (o = (e = e.call(t)).next, n !== 0) for (; !(c = (a = o.call(e)).done) && (i.push(a.value), i.length !== n); c = !0) ;
    } catch (m) {
      f = !0, r = m;
    } finally {
      try {
        if (!c && e.return != null && (s = e.return(), Object(s) !== s)) return;
      } finally {
        if (f) throw r;
      }
    }
    return i;
  }
}
function Ps(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var e = 0, a = new Array(n); e < n; e++) a[e] = t[e];
  return a;
}
function $p(t, n) {
  if (t) {
    if (typeof t == "string") return Ps(t, n);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set") return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Ps(t, n);
  }
}
function Hp() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Bp(t, n) {
  return Lp(t) || Fp(t, n) || $p(t, n) || Hp();
}
var zp = `
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

`, Kp = {
  root: "p-ink"
}, Hr = ot.extend({
  defaultProps: {
    __TYPE: "Ripple",
    children: void 0
  },
  css: {
    styles: zp,
    classes: Kp
  },
  getProps: function(n) {
    return Q.getMergedProps(n, Hr.defaultProps);
  },
  getOtherProps: function(n) {
    return Q.getDiffProps(n, Hr.defaultProps);
  }
});
function Ts(t, n) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    n && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function Vp(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Ts(Object(e), !0).forEach(function(a) {
      _p(t, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : Ts(Object(e)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return t;
}
var Yt = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(t, n) {
  var e = d.useState(!1), a = Bp(e, 2), r = a[0], o = a[1], s = d.useRef(null), i = d.useRef(null), c = cn(), f = d.useContext(Kt), m = Hr.getProps(t, f), v = f && f.ripple || Tt.ripple, x = {
    props: m
  };
  Sr(Hr.css.styles, {
    name: "ripple",
    manual: !v
  });
  var b = Hr.setMetaData(Vp({}, x)), N = b.ptm, w = b.cx, T = function() {
    return s.current && s.current.parentElement;
  }, P = function() {
    i.current && i.current.addEventListener("pointerdown", C);
  }, D = function() {
    i.current && i.current.removeEventListener("pointerdown", C);
  }, C = function(X) {
    var Y = R.getOffset(i.current), q = X.pageX - Y.left + document.body.scrollTop - R.getWidth(s.current) / 2, oe = X.pageY - Y.top + document.body.scrollLeft - R.getHeight(s.current) / 2;
    _(q, oe);
  }, _ = function(X, Y) {
    !s.current || getComputedStyle(s.current, null).display === "none" || (R.removeClass(s.current, "p-ink-active"), G(), s.current.style.top = Y + "px", s.current.style.left = X + "px", R.addClass(s.current, "p-ink-active"));
  }, E = function(X) {
    R.removeClass(X.currentTarget, "p-ink-active");
  }, G = function() {
    if (s.current && !R.getHeight(s.current) && !R.getWidth(s.current)) {
      var X = Math.max(R.getOuterWidth(i.current), R.getOuterHeight(i.current));
      s.current.style.height = X + "px", s.current.style.width = X + "px";
    }
  };
  if (d.useImperativeHandle(n, function() {
    return {
      props: m,
      getInk: function() {
        return s.current;
      },
      getTarget: function() {
        return i.current;
      }
    };
  }), kn(function() {
    o(!0);
  }), dt(function() {
    r && s.current && (i.current = T(), G(), P());
  }, [r]), dt(function() {
    s.current && !i.current && (i.current = T(), G(), P());
  }), An(function() {
    s.current && (i.current = null, D());
  }), !v)
    return null;
  var S = c({
    "aria-hidden": !0,
    className: qe(w("root"))
  }, Hr.getOtherProps(m), N("root"));
  return /* @__PURE__ */ d.createElement("span", Li({
    role: "presentation",
    ref: s
  }, S, {
    onAnimationEnd: E
  }));
}));
Yt.displayName = "Ripple";
function va() {
  return va = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = arguments[n];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    }
    return t;
  }, va.apply(this, arguments);
}
function Pa(t) {
  "@babel/helpers - typeof";
  return Pa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Pa(t);
}
function Yp(t, n) {
  if (Pa(t) !== "object" || t === null) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var a = e.call(t, n || "default");
    if (Pa(a) !== "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(t);
}
function Wp(t) {
  var n = Yp(t, "string");
  return Pa(n) === "symbol" ? n : String(n);
}
function Gn(t, n, e) {
  return n = Wp(n), n in t ? Object.defineProperty(t, n, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[n] = e, t;
}
var Up = {
  root: function(n) {
    var e = n.props;
    return qe("p-badge p-component", Gn({
      "p-badge-no-gutter": Q.isNotEmpty(e.value) && String(e.value).length === 1,
      "p-badge-dot": Q.isEmpty(e.value),
      "p-badge-lg": e.size === "large",
      "p-badge-xl": e.size === "xlarge"
    }, "p-badge-".concat(e.severity), e.severity !== null));
  }
}, Gp = `
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
`, ro = ot.extend({
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
    classes: Up,
    styles: Gp
  }
});
function ks(t, n) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    n && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function Xp(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? ks(Object(e), !0).forEach(function(a) {
      Gn(t, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : ks(Object(e)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return t;
}
var kc = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(t, n) {
  var e = cn(), a = d.useContext(Kt), r = ro.getProps(t, a), o = ro.setMetaData(Xp({
    props: r
  }, r.__parentMetadata)), s = o.ptm, i = o.cx, c = o.isUnstyled;
  qn(ro.css.styles, c, {
    name: "badge"
  });
  var f = d.useRef(null);
  d.useImperativeHandle(n, function() {
    return {
      props: r,
      getElement: function() {
        return f.current;
      }
    };
  });
  var m = e({
    ref: f,
    style: r.style,
    className: qe(r.className, i("root"))
  }, ro.getOtherProps(r), s("root"));
  return /* @__PURE__ */ d.createElement("span", m, r.value);
}));
kc.displayName = "Badge";
var Jp = {
  icon: function(n) {
    var e = n.props;
    return qe("p-button-icon p-c", Gn({}, "p-button-icon-".concat(e.iconPos), e.label));
  },
  loadingIcon: function(n) {
    var e = n.props, a = n.className;
    return qe(a, {
      "p-button-loading-icon": e.loading
    });
  },
  label: "p-button-label p-c",
  root: function(n) {
    var e = n.props, a = n.size, r = n.disabled;
    return qe("p-button p-component", Gn(Gn(Gn(Gn({
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
}, ao = ot.extend({
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
    classes: Jp
  }
});
function qs(t, n) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    n && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function pi(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? qs(Object(e), !0).forEach(function(a) {
      Gn(t, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : qs(Object(e)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return t;
}
var xn = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(t, n) {
  var e = cn(), a = d.useContext(Kt), r = ao.getProps(t, a), o = r.disabled || r.loading, s = pi(pi({
    props: r
  }, r.__parentMetadata), {}, {
    context: {
      disabled: o
    }
  }), i = ao.setMetaData(s), c = i.ptm, f = i.cx, m = i.isUnstyled;
  qn(ao.css.styles, m, {
    name: "button",
    styled: !0
  });
  var v = d.useRef(n);
  if (d.useEffect(function() {
    Q.combinedRefs(v, n);
  }, [v, n]), r.visible === !1)
    return null;
  var x = function() {
    var X = qe("p-button-icon p-c", Gn({}, "p-button-icon-".concat(r.iconPos), r.label)), Y = e({
      className: f("icon")
    }, c("icon"));
    X = qe(X, {
      "p-button-loading-icon": r.loading
    });
    var q = e({
      className: f("loadingIcon", {
        className: X
      })
    }, c("loadingIcon")), oe = r.loading ? r.loadingIcon || /* @__PURE__ */ d.createElement(Fo, va({}, q, {
      spin: !0
    })) : r.icon;
    return Wt.getJSXIcon(oe, pi({}, Y), {
      props: r
    });
  }, b = function() {
    var X = e({
      className: f("label")
    }, c("label"));
    return r.label ? /* @__PURE__ */ d.createElement("span", X, r.label) : !r.children && !r.label && /* @__PURE__ */ d.createElement("span", va({}, X, {
      dangerouslySetInnerHTML: {
        __html: "&nbsp;"
      }
    }));
  }, N = function() {
    if (r.badge) {
      var X = e({
        className: qe(r.badgeClassName),
        value: r.badge,
        unstyled: r.unstyled,
        __parentMetadata: {
          parent: s
        }
      }, c("badge"));
      return /* @__PURE__ */ d.createElement(kc, X, r.badge);
    }
    return null;
  }, w = !o || r.tooltipOptions && r.tooltipOptions.showOnDisabled, T = Q.isNotEmpty(r.tooltip) && w, P = {
    large: "lg",
    small: "sm"
  }, D = P[r.size], C = x(), _ = b(), E = N(), G = r.label ? r.label + (r.badge ? " " + r.badge : "") : r["aria-label"], S = e({
    ref: v,
    "aria-label": G,
    "data-pc-autofocus": r.autoFocus,
    className: qe(r.className, f("root", {
      size: D,
      disabled: o
    })),
    disabled: o
  }, ao.getOtherProps(r), c("root"));
  return /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("button", S, C, _, r.children, E, /* @__PURE__ */ d.createElement(Yt, null)), T && /* @__PURE__ */ d.createElement(Lo, va({
    target: v,
    content: r.tooltip,
    pt: c("tooltip")
  }, r.tooltipOptions)));
}));
xn.displayName = "Button";
function Fi() {
  return Fi = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = arguments[n];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    }
    return t;
  }, Fi.apply(this, arguments);
}
var qc = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(t, n) {
  var e = bn.getPTI(t);
  return /* @__PURE__ */ d.createElement("svg", Fi({
    ref: n,
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
qc.displayName = "CalendarIcon";
function $i() {
  return $i = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = arguments[n];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    }
    return t;
  }, $i.apply(this, arguments);
}
var fl = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(t, n) {
  var e = bn.getPTI(t);
  return /* @__PURE__ */ d.createElement("svg", $i({
    ref: n,
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
fl.displayName = "ChevronLeftIcon";
function Hi() {
  return Hi = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = arguments[n];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    }
    return t;
  }, Hi.apply(this, arguments);
}
var pl = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(t, n) {
  var e = bn.getPTI(t);
  return /* @__PURE__ */ d.createElement("svg", Hi({
    ref: n,
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
pl.displayName = "ChevronUpIcon";
var Hn = Gd();
function Xt() {
  return Xt = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = arguments[n];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    }
    return t;
  }, Xt.apply(this, arguments);
}
function Yr(t) {
  "@babel/helpers - typeof";
  return Yr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Yr(t);
}
function Zp(t, n) {
  if (Yr(t) !== "object" || t === null) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var a = e.call(t, n || "default");
    if (Yr(a) !== "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(t);
}
function Qp(t) {
  var n = Zp(t, "string");
  return Yr(n) === "symbol" ? n : String(n);
}
function cr(t, n, e) {
  return n = Qp(n), n in t ? Object.defineProperty(t, n, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[n] = e, t;
}
function Bi(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var e = 0, a = new Array(n); e < n; e++) a[e] = t[e];
  return a;
}
function ev(t) {
  if (Array.isArray(t)) return Bi(t);
}
function tv(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Ic(t, n) {
  if (t) {
    if (typeof t == "string") return Bi(t, n);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set") return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Bi(t, n);
  }
}
function nv() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function oo(t) {
  return ev(t) || tv(t) || Ic(t) || nv();
}
function rv(t) {
  if (Array.isArray(t)) return t;
}
function av(t, n) {
  var e = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (e != null) {
    var a, r, o, s, i = [], c = !0, f = !1;
    try {
      if (o = (e = e.call(t)).next, n !== 0) for (; !(c = (a = o.call(e)).done) && (i.push(a.value), i.length !== n); c = !0) ;
    } catch (m) {
      f = !0, r = m;
    } finally {
      try {
        if (!c && e.return != null && (s = e.return(), Object(s) !== s)) return;
      } finally {
        if (f) throw r;
      }
    }
    return i;
  }
}
function ov() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $n(t, n) {
  return rv(t) || av(t, n) || Ic(t, n) || ov();
}
var iv = `
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
`, lv = {
  root: function(n) {
    var e = n.props, a = n.focusedState, r = n.isFilled, o = n.panelVisible;
    return qe("p-calendar p-component p-inputwrapper", cr(cr(cr(cr(cr(cr(cr({}, "p-calendar-w-btn p-calendar-w-btn-".concat(e.iconPos), e.showIcon), "p-calendar-disabled", e.disabled), "p-invalid", e.invalid), "p-calendar-timeonly", e.timeOnly), "p-inputwrapper-filled", e.value || r), "p-inputwrapper-focus", a), "p-focus", a || o));
  },
  input: function(n) {
    var e = n.props, a = n.context;
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
  year: function(n) {
    var e = n.isYearSelected, a = n.y, r = n.isMonthYearDisabled;
    return qe("p-yearpicker-year", {
      "p-highlight": e(a),
      "p-disabled": r(-1, a)
    });
  },
  monthPicker: "p-monthpicker",
  month: function(n) {
    var e = n.isMonthSelected, a = n.isMonthYearDisabled, r = n.i, o = n.currentYear;
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
  dayLabel: function(n) {
    var e = n.className;
    return e;
  },
  day: function(n) {
    var e = n.date;
    return qe({
      "p-datepicker-other-month": e.otherMonth,
      "p-datepicker-today": e.today
    });
  },
  panel: function(n) {
    var e = n.panelClassName;
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
  select: function(n) {
    var e = n.props;
    return e.monthNavigator && e.view !== "month" ? "p-datepicker-month" : e.yearNavigator ? "p-datepicker-year" : void 0;
  },
  weekHeader: "p-datepicker-weekheader p-disabled",
  weekNumber: "p-datepicker-weeknumber",
  weekLabelContainer: "p-disabled",
  container: "p-datepicker-calendar-container",
  table: "p-datepicker-calendar",
  transition: "p-connected-overlay"
}, io = ot.extend({
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
    classes: lv,
    styles: iv
  }
}), Rc = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var e = t.cx, a = cn(), r = function() {
    var i = a({
      className: e("panel", {
        panelClassName: t.className
      }),
      style: t.style,
      role: t.inline ? null : "dialog",
      id: t.id,
      "aria-label": fn("chooseDate", t.locale),
      "aria-modal": t.inline ? null : "true",
      onClick: t.onClick,
      onMouseUp: t.onMouseUp
    }, t.ptm("panel", {
      hostName: t.hostName
    })), c = a({
      classNames: e("transition"),
      in: t.in,
      timeout: {
        enter: 120,
        exit: 100
      },
      options: t.transitionOptions,
      unmountOnExit: !0,
      onEnter: t.onEnter,
      onEntered: t.onEntered,
      onExit: t.onExit,
      onExited: t.onExited
    }, t.ptm("transition", {
      hostName: t.hostName
    }));
    return /* @__PURE__ */ d.createElement($a, Xt({
      nodeRef: n
    }, c), /* @__PURE__ */ d.createElement("div", Xt({
      ref: n
    }, i), t.children));
  }, o = r();
  return t.inline ? o : /* @__PURE__ */ d.createElement(Xr, {
    element: o,
    appendTo: t.appendTo
  });
});
Rc.displayName = "CalendarPanel";
function Is(t, n) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    n && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function jr(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Is(Object(e), !0).forEach(function(a) {
      cr(t, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : Is(Object(e)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return t;
}
function Rs(t, n) {
  var e = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!e) {
    if (Array.isArray(t) || (e = sv(t)) || n) {
      e && (t = e);
      var a = 0, r = function() {
      };
      return { s: r, n: function() {
        return a >= t.length ? { done: !0 } : { done: !1, value: t[a++] };
      }, e: function(f) {
        throw f;
      }, f: r };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0, s = !1, i;
  return { s: function() {
    e = e.call(t);
  }, n: function() {
    var f = e.next();
    return o = f.done, f;
  }, e: function(f) {
    s = !0, i = f;
  }, f: function() {
    try {
      !o && e.return != null && e.return();
    } finally {
      if (s) throw i;
    }
  } };
}
function sv(t, n) {
  if (t) {
    if (typeof t == "string") return Ns(t, n);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set") return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Ns(t, n);
  }
}
function Ns(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var e = 0, a = new Array(n); e < n; e++) a[e] = t[e];
  return a;
}
var Nc = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(t, n) {
  var e = cn(), a = d.useContext(Kt), r = io.getProps(t, a), o = d.useState(!1), s = $n(o, 2), i = s[0], c = s[1], f = d.useState(!1), m = $n(f, 2), v = m[0], x = m[1], b = d.useState(null), N = $n(b, 2), w = N[0], T = N[1], P = d.useState(r.id), D = $n(P, 2), C = D[0], _ = D[1], E = {
    props: r,
    state: {
      focused: i,
      overlayVisible: v,
      viewDate: w
    }
  }, G = io.setMetaData(E), S = G.ptm, H = G.cx, X = G.isUnstyled;
  sl({
    callback: function() {
      Ft();
    },
    when: v,
    priority: [ll.OVERLAY_PANEL, 0]
  }), qn(io.css.styles, X, {
    name: "calendar"
  });
  var Y = d.useRef(null), q = d.useRef(null), oe = d.useRef(r.inputRef), W = d.useRef(null), ve = d.useRef(!1), ge = d.useRef(null), Ce = d.useRef(!1), Oe = d.useRef(null), we = d.useRef(null), de = d.useRef(null), F = d.useRef(!1), se = d.useRef(!1), ae = d.useRef(!1), M = d.useRef(!1), j = d.useRef(null), B = d.useRef(!1), Z = d.useState("date"), ie = $n(Z, 2), K = ie[0], z = ie[1], ee = d.useState(null), Ee = $n(ee, 2), te = Ee[0], _e = Ee[1], Je = d.useState(null), Ye = $n(Je, 2), Me = Ye[0], nt = Ye[1], $t = d.useState([]), It = $n($t, 2), Ze = It[0], Ct = It[1], At = Vr(r.value), St = r.inline || (r.onVisibleChange ? r.visible : v), Ot = Er(), vt = C + "_panel", on = hc({
    target: Y,
    overlay: q,
    listener: function(l, u) {
      var p = u.type, g = u.valid;
      g && (p === "outside" ? !F.current && !Ol(l.target) && Ft("outside") : Ft()), F.current = !1;
    },
    when: !(r.touchUI || r.inline) && St,
    type: "mousedown"
  }), mt = $n(on, 2), Dt = mt[0], Rt = mt[1], Ht = function() {
    return r.dateFormat || fn("dateFormat", r.locale);
  }, jt = function(l) {
    ve.current ? (c(!0), ve.current = !1) : (r.showOnFocus && !St && qt(), c(!0), r.onFocus && r.onFocus(l));
  }, _t = function(l) {
    ar(r.value), r.onBlur && r.onBlur(l), c(!1);
  }, Le = function(l) {
    switch (l.code) {
      case "ArrowDown": {
        v ? (fe(), l.preventDefault()) : qt();
        break;
      }
      case "Escape": {
        Ft(), r.touchUI && kr();
        break;
      }
      case "Tab": {
        q && q.current && (R.getFocusableElements(q.current).forEach(function(u) {
          return u.tabIndex = "-1";
        }), Ft(), r.touchUI && kr());
        break;
      }
    }
  }, re = function(l) {
    Pe(l, l.target.value), r.onInput && r.onInput(l);
  }, Pe = function(l, u, p) {
    try {
      var g = zu(r.timeOnly ? u.replace("_", "") : u);
      if ($e(g)) {
        at(l, g);
        var A = g.length ? g[0] : g;
        xt(l, A), Be({
          event: l,
          date: A
        });
      }
    } catch {
      if (p)
        p();
      else {
        var L = r.keepInvalid ? u : null;
        at(l, L);
      }
    }
  }, Be = function(l) {
    var u = l.event, p = l.date;
    if (p && r.onSelect) {
      var g = p.getDate(), A = p.getMonth(), L = p.getFullYear();
      wn(u, {
        day: g,
        month: A,
        year: L,
        selectable: rr(g, A, L)
      }, null, !0);
    }
  }, je = function() {
    !r.inline && oe.current && (ve.current = !0, R.focus(oe.current));
  }, $e = function(l) {
    var u = !0;
    return mr() ? rr(l.getDate(), l.getMonth(), l.getFullYear(), !1) && kl(l) || (u = !1) : l.every(function(p) {
      return rr(p.getDate(), p.getMonth(), p.getFullYear(), !1) && kl(p);
    }) && Ln() && (u = l.length > 1 && l[1] >= l[0]), u;
  }, ft = function() {
    St ? Ft() : qt();
  }, Nt = function(l) {
    W.current = {
      backward: !0,
      button: !0
    }, pe(l);
  }, rt = function(l) {
    W.current = {
      backward: !1,
      button: !0
    }, De(l);
  }, Qe = function(l) {
    switch (l.code) {
      case "Tab":
        !r.inline && ht(l);
        break;
      case "Escape":
        Ft(null, je), l.preventDefault();
        break;
    }
  }, et = function(l, u, p) {
    if (l.key === "Enter" || l.key === "Space") {
      ne(l, u, p), l.preventDefault();
      return;
    }
    Qe(l);
  }, it = function(l) {
    if (l.key === "Enter" || l.key === "Space") {
      xe(), l.preventDefault();
      return;
    }
  }, ht = function(l) {
    l == null || l.preventDefault();
    var u = R.getFocusableElements(q.current);
    if (u && u.length > 0)
      if (!document.activeElement)
        u[0].focus();
      else {
        var p = u.indexOf(document.activeElement);
        l != null && l.shiftKey ? p === -1 || p === 0 ? u[u.length - 1].focus() : u[p - 1].focus() : p === -1 || p === u.length - 1 ? u[0].focus() : u[p + 1].focus();
      }
  }, Ie = function() {
    if (W.current) {
      if (W.current.button)
        J(), W.current.backward ? se.current.focus() : ae.current.focus();
      else {
        var l;
        if (W.current.backward) {
          var u = R.find(q.current, 'table td span:not([data-p-disabled="true"])');
          l = u[u.length - 1];
        } else
          l = R.findSingle(q.current, 'table td span:not([data-p-disabled="true"])');
        l && (l.tabIndex = "0", l.focus());
      }
      W.current = null;
    } else
      J();
  }, J = function() {
    var l;
    if (K === "month") {
      var u = R.find(q.current, '[data-pc-section="monthpicker"] [data-pc-section="month"]'), p = R.findSingle(q.current, '[data-pc-section="monthpicker"] [data-pc-section="month"][data-p-highlight="true"]');
      u.forEach(function(A) {
        return A.tabIndex = -1;
      }), l = p || u[0];
    } else if (l = R.findSingle(q.current, 'span[data-p-highlight="true"]'), !l) {
      var g = R.findSingle(q.current, "td.p-datepicker-today span:not(.p-disabled)");
      l = g || R.findSingle(q.current, 'table td span:not([data-p-disabled="true"])');
    }
    l && (l.tabIndex = "0");
  }, fe = function() {
    if (K) {
      var l;
      if (K === "date") {
        if (l = R.findSingle(q.current, 'span[data-p-highlight="true"]'), !l) {
          var u = R.findSingle(q.current, "td.p-datepicker-today span:not(.p-disabled)");
          l = u || R.findSingle(q.current, 'table td span:not([data-p-disabled="true"])');
        }
      } else (K === "month" || K === "year") && (l = R.findSingle(q.current, 'span[data-p-highlight="true"]'), l || (l = R.findSingle(q.current, '[data-pc-section="'.concat(K, 'picker"] [data-pc-section="').concat(K, '"]:not([data-p-disabled="true"])'))));
      l && (l.tabIndex = "0", l && l.focus());
    }
  }, pe = function(l) {
    if (r.disabled) {
      l.preventDefault();
      return;
    }
    var u = Ut(pt());
    if (u.setDate(1), K === "date")
      if (u.getMonth() === 0) {
        var p = wt();
        u.setMonth(11), u.setFullYear(p), r.onMonthChange && r.onMonthChange({
          month: 11,
          year: p
        }), _e(11);
      } else
        u.setMonth(u.getMonth() - 1), r.onMonthChange && r.onMonthChange({
          month: te - 1,
          year: Me
        }), _e(function(L) {
          return L - 1;
        });
    else if (K === "month") {
      var g = u.getFullYear() - 1;
      if (r.yearNavigator) {
        var A = parseInt(r.yearRange.split(":")[0], 10);
        g < A && (g = A);
      }
      u.setFullYear(g);
    }
    K === "month" ? u.setFullYear(wt()) : K === "year" && u.setFullYear(Go()), xt(l, u), l.preventDefault();
  }, De = function(l) {
    if (r.disabled) {
      l.preventDefault();
      return;
    }
    var u = Ut(pt());
    if (u.setDate(1), K === "date")
      if (u.getMonth() === 11) {
        var p = Bt();
        u.setMonth(0), u.setFullYear(p), r.onMonthChange && r.onMonthChange({
          month: 0,
          year: p
        }), _e(0);
      } else
        u.setMonth(u.getMonth() + 1), r.onMonthChange && r.onMonthChange({
          month: te + 1,
          year: Me
        }), _e(function(L) {
          return L + 1;
        });
    else if (K === "month") {
      var g = u.getFullYear() + 1;
      if (r.yearNavigator) {
        var A = parseInt(r.yearRange.split(":")[1], 10);
        g > A && (g = A);
      }
      u.setFullYear(g);
    }
    K === "month" ? u.setFullYear(Bt()) : K === "year" && u.setFullYear(Xo()), xt(l, u), l.preventDefault();
  }, lt = function(l, u) {
    for (var p = [], g = l; g <= u; g++)
      Ze.push(g);
    Ct(p);
  }, wt = function() {
    var l = Me - 1;
    if (nt(l), r.yearNavigator && l < Ze[0]) {
      var u = Ze[Ze.length - 1] - Ze[0];
      lt(Ze[0] - u, Ze[Ze.length - 1] - u);
    }
    return l;
  }, Bt = function() {
    var l = Me + 1;
    if (nt(l), r.yearNavigator && l.current > Ze[Ze.length - 1]) {
      var u = Ze[Ze.length - 1] - Ze[0];
      lt(Ze[0] + u, Ze[Ze.length - 1] + u);
    }
    return l;
  }, Qt = function(l, u) {
    var p = pt(), g = Ut(p);
    g.setDate(1), g.setMonth(parseInt(u, 10)), xt(l, g);
  }, zt = function(l, u) {
    var p = pt(), g = Ut(p);
    g.setFullYear(parseInt(u, 10)), xt(l, g);
  }, Vt = function(l) {
    var u = /* @__PURE__ */ new Date(), p = {
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
    xt(l, u), wn(l, p, g), r.onTodayButtonClick && r.onTodayButtonClick(l);
  }, en = function(l) {
    B.current = !0, at(l, null), ar(null), Ft(), r.onClearButtonClick && r.onClearButtonClick(l);
  }, h = function(l) {
    r.inline || Hn.emit("overlay-click", {
      originalEvent: l,
      target: Y.current
    });
  }, O = function(l) {
    h(l);
  }, ne = function(l, u, p) {
    r.disabled || (Se(l, null, u, p), l.preventDefault());
  }, xe = function() {
    r.disabled || $();
  }, Re = function() {
    r.disabled || $();
  }, Se = function I(l, u, p, g) {
    switch ($(), ge.current = setTimeout(function() {
      I(l, 100, p, g);
    }, u || 500), p) {
      case 0:
        g === 1 ? ue(l) : me(l);
        break;
      case 1:
        g === 1 ? be(l) : Te(l);
        break;
      case 2:
        g === 1 ? We(l) : Fe(l);
        break;
      case 3:
        g === 1 ? gt(l) : Lt(l);
        break;
    }
  }, $ = function() {
    ge.current && clearTimeout(ge.current);
  }, V = function(l) {
    return r.stepMinute ? Math.round(l / r.stepMinute) * r.stepMinute : l;
  }, ue = function(l) {
    var u = tt(), p = u.getHours(), g = p + r.stepHour;
    g = g >= 24 ? g - 24 : g, Qn(g, u) && (r.maxDate && r.maxDate.toDateString() === u.toDateString() && r.maxDate.getHours() === g && (r.maxDate.getMinutes() < u.getMinutes() || r.maxDate.getMinutes() === u.getMinutes()) ? r.maxDate.getSeconds() < u.getSeconds() ? r.maxDate.getMilliseconds() < u.getMilliseconds() ? He(l, g, r.maxDate.getMinutes(), r.maxDate.getSeconds(), r.maxDate.getMilliseconds()) : He(l, g, r.maxDate.getMinutes(), r.maxDate.getSeconds(), u.getMilliseconds()) : He(l, g, r.maxDate.getMinutes(), u.getSeconds(), u.getMilliseconds()) : He(l, g, V(u.getMinutes()), u.getSeconds(), u.getMilliseconds())), l.preventDefault();
  }, me = function(l) {
    var u = tt(), p = u.getHours(), g = p - r.stepHour;
    g = g < 0 ? g + 24 : g, Qn(g, u) && (r.minDate && r.minDate.toDateString() === u.toDateString() && r.minDate.getHours() === g && (r.minDate.getMinutes() > u.getMinutes() || r.minDate.getMinutes() === u.getMinutes()) ? r.minDate.getSeconds() > u.getSeconds() ? r.minDate.getMilliseconds() > u.getMilliseconds() ? He(l, g, r.minDate.getMinutes(), r.minDate.getSeconds(), r.minDate.getMilliseconds()) : He(l, g, r.minDate.getMinutes(), r.minDate.getSeconds(), u.getMilliseconds()) : He(l, g, r.minDate.getMinutes(), u.getSeconds(), u.getMilliseconds()) : He(l, g, V(u.getMinutes()), u.getSeconds(), u.getMilliseconds())), l.preventDefault();
  }, he = function(l, u) {
    return r.stepMinute <= 1 ? u ? l + u : l : !u && (u = r.stepMinute, l % u === 0) ? l : Math.floor((l + u) / u) * u;
  }, be = function(l) {
    var u = tt(), p = u.getMinutes(), g = he(p, r.stepMinute);
    g = g > 59 ? g - 60 : g, er(g, u) && (r.maxDate && r.maxDate.toDateString() === u.toDateString() && r.maxDate.getMinutes() === g && r.maxDate.getSeconds() < u.getSeconds() ? r.maxDate.getMilliseconds() < u.getMilliseconds() ? He(l, u.getHours(), g, r.maxDate.getSeconds(), r.maxDate.getMilliseconds()) : He(l, u.getHours(), g, r.maxDate.getSeconds(), u.getMilliseconds()) : He(l, u.getHours(), g, u.getSeconds(), u.getMilliseconds())), l.preventDefault();
  }, Te = function(l) {
    var u = tt(), p = u.getMinutes(), g = he(p, -r.stepMinute);
    g = g < 0 ? g + 60 : g, er(g, u) && (r.minDate && r.minDate.toDateString() === u.toDateString() && r.minDate.getMinutes() === g && r.minDate.getSeconds() > u.getSeconds() ? r.minDate.getMilliseconds() > u.getMilliseconds() ? He(l, u.getHours(), g, r.minDate.getSeconds(), r.minDate.getMilliseconds()) : He(l, u.getHours(), g, r.minDate.getSeconds(), u.getMilliseconds()) : He(l, u.getHours(), g, u.getSeconds(), u.getMilliseconds())), l.preventDefault();
  }, We = function(l) {
    var u = tt(), p = u.getSeconds(), g = p + r.stepSecond;
    g = g > 59 ? g - 60 : g, tr(g, u) && (r.maxDate && r.maxDate.toDateString() === u.toDateString() && r.maxDate.getSeconds() === g && r.maxDate.getMilliseconds() < u.getMilliseconds() ? He(l, u.getHours(), u.getMinutes(), g, r.maxDate.getMilliseconds()) : He(l, u.getHours(), u.getMinutes(), g, u.getMilliseconds())), l.preventDefault();
  }, Fe = function(l) {
    var u = tt(), p = u.getSeconds(), g = p - r.stepSecond;
    g = g < 0 ? g + 60 : g, tr(g, u) && (r.minDate && r.minDate.toDateString() === u.toDateString() && r.minDate.getSeconds() === g && r.minDate.getMilliseconds() > u.getMilliseconds() ? He(l, u.getHours(), u.getMinutes(), g, r.minDate.getMilliseconds()) : He(l, u.getHours(), u.getMinutes(), g, u.getMilliseconds())), l.preventDefault();
  }, gt = function(l) {
    var u = tt(), p = u.getMilliseconds(), g = p + r.stepMillisec;
    g = g > 999 ? g - 1e3 : g, nr(g, u) && He(l, u.getHours(), u.getMinutes(), u.getSeconds(), g), l.preventDefault();
  }, Lt = function(l) {
    var u = tt(), p = u.getMilliseconds(), g = p - r.stepMillisec;
    g = g < 0 ? g + 999 : g, nr(g, u) && He(l, u.getHours(), u.getMinutes(), u.getSeconds(), g), l.preventDefault();
  }, Pt = function(l) {
    var u = tt(), p = u.getHours(), g = p >= 12 ? p - 12 : p + 12;
    Qn(jn(g, p > 11), u) && He(l, g, u.getMinutes(), u.getSeconds(), u.getMilliseconds()), l.preventDefault();
  }, pt = function(l) {
    var u = r.value, p = l || (r.onViewDateChange ? r.viewDate : w);
    return Array.isArray(u) && (u = u[0]), p && vn(p) ? p : u && vn(u) ? u : /* @__PURE__ */ new Date();
  }, tt = function() {
    if (mr())
      return r.value && r.value instanceof Date ? Ut(r.value) : pt();
    if (Fn()) {
      if (r.value && r.value.length)
        return Ut(r.value[r.value.length - 1]);
    } else if (Ln() && r.value && r.value.length) {
      var l = Ut(r.value[0]), u = Ut(r.value[1]);
      return u || l;
    }
    return /* @__PURE__ */ new Date();
  }, Ut = function(l) {
    return vn(l) ? new Date(l.valueOf()) : l;
  }, vn = function(l) {
    return l instanceof Date && !isNaN(l);
  }, jn = function(l, u) {
    return r.hourFormat === "12" ? l === 12 ? u ? 12 : 0 : u ? l + 12 : l : l;
  }, Qn = function(l, u) {
    var p = !0, g = u ? u.toDateString() : null;
    return r.minDate && g && r.minDate.toDateString() === g && r.minDate.getHours() > l && (p = !1), r.maxDate && g && r.maxDate.toDateString() === g && r.maxDate.getHours() < l && (p = !1), p;
  }, er = function(l, u) {
    var p = !0, g = u ? u.toDateString() : null;
    return r.minDate && g && r.minDate.toDateString() === g && u.getHours() === r.minDate.getHours() && r.minDate.getMinutes() > l && (p = !1), r.maxDate && g && r.maxDate.toDateString() === g && u.getHours() === r.maxDate.getHours() && r.maxDate.getMinutes() < l && (p = !1), p;
  }, tr = function(l, u) {
    var p = !0, g = u ? u.toDateString() : null;
    return r.minDate && g && r.minDate.toDateString() === g && u.getHours() === r.minDate.getHours() && u.getMinutes() === r.minDate.getMinutes() && r.minDate.getSeconds() > l && (p = !1), r.maxDate && g && r.maxDate.toDateString() === g && u.getHours() === r.maxDate.getHours() && u.getMinutes() === r.maxDate.getMinutes() && r.maxDate.getSeconds() < l && (p = !1), p;
  }, nr = function(l, u) {
    var p = !0, g = u ? u.toDateString() : null;
    return r.minDate && g && r.minDate.toDateString() === g && u.getHours() === r.minDate.getHours() && u.getSeconds() === r.minDate.getSeconds() && u.getMinutes() === r.minDate.getMinutes() && r.minDate.getMilliseconds() > l && (p = !1), r.maxDate && g && r.maxDate.toDateString() === g && u.getHours() === r.maxDate.getHours() && u.getSeconds() === r.maxDate.getSeconds() && u.getMinutes() === r.maxDate.getMinutes() && r.maxDate.getMilliseconds() < l && (p = !1), p;
  }, Mt = function(l) {
    if (r.yearNavigator) {
      var u = l.getFullYear(), p = r.yearRange ? parseInt(r.yearRange.split(":")[0], 10) : null, g = r.yearRange ? parseInt(r.yearRange.split(":")[1], 10) : null, A = r.minDate && p != null ? Math.max(r.minDate.getFullYear(), p) : r.minDate || p, L = r.maxDate && g != null ? Math.min(r.maxDate.getFullYear(), g) : r.maxDate || g;
      A && A > u && (u = A), L && L < u && (u = L), l.setFullYear(u);
    }
    if (Hl(0)) {
      var U = l.getMonth(), le = parseInt(jl(l) && Math.max(r.minDate.getMonth(), U).toString() || _l(l) && Math.min(r.maxDate.getMonth(), U).toString() || U);
      l.setMonth(le);
    }
  }, He = function(l, u, p, g, A) {
    var L = tt();
    if (L.setHours(u), L.setMinutes(p), L.setSeconds(g), L.setMilliseconds(A), Fn())
      if (r.value && r.value.length) {
        var U = oo(r.value);
        U[U.length - 1] = L, L = U;
      } else
        L = [L];
    else if (Ln())
      if (r.value && r.value.length) {
        var le = r.value[0], Ne = r.value[1];
        L = Ne ? [le, L] : [L, null];
      } else
        L = [L, null];
    at(l, L), r.onSelect && r.onSelect({
      originalEvent: l,
      value: L
    }), ar(L);
  }, xt = function(l, u) {
    Mt(u), r.onViewDateChange && l ? r.onViewDateChange({
      originalEvent: l,
      value: u
    }) : (Ce.current = !0, T(u)), u || en(l);
  }, un = function(l) {
    if (!(!l || !r.showMinMaxRange || r.view !== "date" || !q.current)) {
      var u = R.findSingle(q.current, '[data-pc-section="previousbutton"]'), p = R.findSingle(q.current, '[data-pc-section="nextbutton"]');
      if (r.disabled) {
        !X() && R.addClass(u, "p-disabled"), u.setAttribute("data-p-disabled", !0), !X() && R.addClass(p, "p-disabled"), p.setAttribute("data-p-disabled", !0);
        return;
      }
      if (r.minDate) {
        var g = Ut(l);
        g.getMonth() === 0 ? (g.setMonth(11, 1), g.setFullYear(g.getFullYear() - 1)) : g.setMonth(g.getMonth(), 1), g.setHours(0), g.setMinutes(0), g.setSeconds(0), r.minDate > g ? R.addClass(u, "p-disabled") : R.removeClass(u, "p-disabled");
      }
      if (r.maxDate) {
        var A = Ut(l);
        A.getMonth() === 11 ? (A.setMonth(0, 1), A.setFullYear(A.getFullYear() + 1)) : A.setMonth(A.getMonth() + 1, 1), A.setHours(0), A.setMinutes(0), A.setSeconds(0), A.setSeconds(-1), r.maxDate < A ? R.addClass(p, "p-disabled") : R.removeClass(p, "p-disabled");
      }
    }
  }, _n = function(l, u, p) {
    var g = l.currentTarget, A = g.parentElement, L = R.index(A);
    switch (l.code) {
      case "ArrowDown": {
        g.tabIndex = "-1";
        var U = A.parentElement.nextElementSibling;
        if (U) {
          var le = R.index(A.parentElement), Ne = Array.from(A.parentElement.parentElement.children), Ve = Ne.slice(le + 1), Ue = Ve.find(function(Vn) {
            var Yn = Vn.children[L].children[0];
            return !R.getAttribute(Yn, "data-p-disabled");
          });
          if (Ue) {
            var ke = Ue.children[L].children[0];
            ke.tabIndex = "0", ke.focus();
          } else
            W.current = {
              backward: !1
            }, De(l);
        } else
          W.current = {
            backward: !1
          }, De(l);
        l.preventDefault();
        break;
      }
      case "ArrowUp": {
        if (g.tabIndex = "-1", l.altKey)
          Ft(null, je);
        else {
          var Ke = A.parentElement.previousElementSibling;
          if (Ke) {
            var Gt = R.index(A.parentElement), tn = Array.from(A.parentElement.parentElement.children), ln = tn.slice(0, Gt).reverse(), gn = ln.find(function(Vn) {
              var Yn = Vn.children[L].children[0];
              return !R.getAttribute(Yn, "data-p-disabled");
            });
            if (gn) {
              var ut = gn.children[L].children[0];
              ut.tabIndex = "0", ut.focus();
            } else
              W.current = {
                backward: !0
              }, pe(l);
          } else
            W.current = {
              backward: !0
            }, pe(l);
        }
        l.preventDefault();
        break;
      }
      case "ArrowLeft": {
        g.tabIndex = "-1";
        var On = A.previousElementSibling;
        if (On) {
          var ni = Array.from(A.parentElement.children), ri = ni.slice(0, L).reverse(), Ja = ri.find(function(Vn) {
            var Yn = Vn.children[0];
            return !R.getAttribute(Yn, "data-p-disabled");
          });
          if (Ja) {
            var Rr = Ja.children[0];
            Rr.tabIndex = "0", Rr.focus();
          } else
            mn(!0, p, l);
        } else
          mn(!0, p, l);
        l.preventDefault();
        break;
      }
      case "ArrowRight": {
        g.tabIndex = "-1";
        var Dn = A.nextElementSibling;
        if (Dn) {
          var or = Array.from(A.parentElement.children), Nr = or.slice(L + 1), ir = Nr.find(function(Vn) {
            var Yn = Vn.children[0];
            return !R.getAttribute(Yn, "data-p-disabled");
          });
          if (ir) {
            var gr = ir.children[0];
            gr.tabIndex = "0", gr.focus();
          } else
            mn(!1, p, l);
        } else
          mn(!1, p, l);
        l.preventDefault();
        break;
      }
      case "Enter":
      case "NumpadEnter":
      case "Space": {
        wn(l, u), l.preventDefault();
        break;
      }
      case "Escape": {
        Ft(null, je), l.preventDefault();
        break;
      }
      case "Tab": {
        r.inline || ht(l);
        break;
      }
      case "Home": {
        g.tabIndex = "-1";
        var Rn = A.parentElement, lr = Rn.children[0].children[0];
        R.getAttribute(lr, "data-p-disabled") ? mn(p, !0, l) : (lr.tabIndex = "0", lr.focus()), l.preventDefault();
        break;
      }
      case "End": {
        g.tabIndex = "-1";
        var hr = A.parentElement, br = hr.children[hr.children.length - 1].children[0];
        R.getAttribute(br, "data-p-disabled") ? mn(p, !1, l) : (br.tabIndex = "0", br.focus()), l.preventDefault();
        break;
      }
      case "PageUp": {
        g.tabIndex = "-1", l.shiftKey ? (W.current = {
          backward: !0
        }, pe(l)) : mn(p, !0, l), l.preventDefault();
        break;
      }
      case "PageDown": {
        g.tabIndex = "-1", l.shiftKey ? (W.current = {
          backward: !1
        }, De(l)) : mn(p, !1, l), l.preventDefault();
        break;
      }
    }
  }, mn = function(l, u, p) {
    if (l)
      if (r.numberOfMonths === 1 || u === 0)
        W.current = {
          backward: !0
        }, pe(p);
      else {
        var g = q.current.children[u - 1], A = R.find(g, 'table td span:not([data-p-disabled="true"])'), L = A[A.length - 1];
        L.tabIndex = "0", L.focus();
      }
    else if (r.numberOfMonths === 1 || u === r.numberOfMonths - 1)
      W.current = {
        backward: !1
      }, De(p);
    else {
      var U = q.current.children[u + 1], le = R.findSingle(U, 'table td span:not([data-p-disabled="true"])');
      le.tabIndex = "0", le.focus();
    }
  }, Sn = function(l, u) {
    var p = l.currentTarget;
    switch (l.code) {
      case "ArrowUp":
      case "ArrowDown": {
        p.tabIndex = "-1";
        var g = p.parentElement.children, A = R.index(p), L = g[l.which === 40 ? A + 3 : A - 3];
        L && (L.tabIndex = "0", L.focus()), l.preventDefault();
        break;
      }
      case "ArrowLeft": {
        p.tabIndex = "-1";
        var U = p.previousElementSibling;
        U ? (U.tabIndex = "0", U.focus()) : (W.current = {
          backward: !0
        }, pe(l)), l.preventDefault();
        break;
      }
      case "ArrowRight": {
        p.tabIndex = "-1";
        var le = p.nextElementSibling;
        le ? (le.tabIndex = "0", le.focus()) : (W.current = {
          backward: !1
        }, De(l)), l.preventDefault();
        break;
      }
      case "PageUp": {
        if (l.shiftKey)
          return;
        W.current = {
          backward: !0
        }, pe(l);
        break;
      }
      case "PageDown": {
        if (l.shiftKey)
          return;
        W.current = {
          backward: !1
        }, De(l);
        break;
      }
      case "Enter":
      case "NumpadEnter":
      case "Space": {
        r.view !== "month" && (M.current = !0), ce(l, u), l.preventDefault();
        break;
      }
      case "Escape": {
        Ft(null, je), l.preventDefault();
        break;
      }
      case "Tab": {
        ht(l);
        break;
      }
    }
  }, In = function(l, u) {
    var p = l.currentTarget;
    switch (l.code) {
      case "ArrowUp":
      case "ArrowDown": {
        p.tabIndex = "-1";
        var g = p.parentElement.children, A = R.index(p), L = g[l.code === "ArrowDown" ? A + 2 : A - 2];
        L && (L.tabIndex = "0", L.focus()), l.preventDefault();
        break;
      }
      case "ArrowLeft": {
        p.tabIndex = "-1";
        var U = p.previousElementSibling;
        U ? (U.tabIndex = "0", U.focus()) : (W.current = {
          backward: !0
        }, pe(l)), l.preventDefault();
        break;
      }
      case "ArrowRight": {
        p.tabIndex = "-1";
        var le = p.nextElementSibling;
        le ? (le.tabIndex = "0", le.focus()) : (W.current = {
          backward: !1
        }, De(l)), l.preventDefault();
        break;
      }
      case "PageUp": {
        if (l.shiftKey)
          return;
        W.current = {
          backward: !0
        }, pe(l);
        break;
      }
      case "PageDown": {
        if (l.shiftKey)
          return;
        W.current = {
          backward: !1
        }, De(l);
        break;
      }
      case "Enter":
      case "NumpadEnter":
      case "Space": {
        r.view !== "year" && (M.current = !0), Ae(l, u), l.preventDefault();
        break;
      }
      case "Escape": {
        Ft(null, je), l.preventDefault();
        break;
      }
      case "Tab": {
        ht(l);
        break;
      }
    }
  }, wn = function(l, u, p, g) {
    if (l) {
      if (r.disabled || !u.selectable) {
        l.preventDefault();
        return;
      }
      if (R.find(q.current, 'table td span:not([data-p-disabled="true"])').forEach(function(L) {
        return L.tabIndex = -1;
      }), l.currentTarget.focus(), Fn())
        if (Qo(u)) {
          var A = r.value.filter(function(L) {
            return !qr(L, u);
          });
          at(l, A), ar(A);
        } else (!r.maxDateCount || !r.value || r.maxDateCount > r.value.length) && Ya(l, u, p);
      else
        Ya(l, u, p);
      !r.inline && mr() && (!r.showTime || r.hideOnDateTimeSelect) && !g && (setTimeout(function() {
        Ft("dateselect");
      }, 100), Oe.current && kr()), l.preventDefault();
    }
  }, Uo = function(l, u) {
    if (r.showTime) {
      var p, g, A, L;
      if (u)
        p = u.hours, g = u.minutes, A = u.seconds, L = u.milliseconds;
      else {
        var U = tt(), le = [U.getHours(), U.getMinutes(), U.getSeconds(), U.getMilliseconds()];
        p = le[0], g = le[1], A = le[2], L = le[3];
      }
      l.setHours(p), l.setMinutes(he(g)), l.setSeconds(A), l.setMilliseconds(L);
    }
  }, Ya = function(l, u, p) {
    var g = new Date(u.year, u.month, u.day);
    Uo(g, p), r.minDate && r.minDate > g && (g = r.minDate), r.maxDate && r.maxDate < g && (g = r.maxDate);
    var A = g;
    if (mr())
      at(l, g);
    else if (Fn())
      A = r.value ? [].concat(oo(r.value), [g]) : [g], at(l, A);
    else if (Ln())
      if (r.value && r.value.length) {
        var L = r.value[0], U = r.value[1];
        U ? (L = g, U = null) : g.getTime() >= L.getTime() ? U = g : (U = L, L = g), A = [L, U], at(l, A), r.hideOnRangeSelection && U !== null && setTimeout(function() {
          x(!1), F.current = !1;
        }, 150);
      } else
        A = [g, null], at(l, A);
    r.onSelect && r.onSelect({
      originalEvent: l,
      value: g
    }), ar(A);
  }, Go = function() {
    var l = Me - 10;
    return nt(l), l;
  }, Xo = function() {
    var l = Me + 10;
    return nt(l), l;
  }, ye = function(l) {
    l && l.code && (l.code === "Enter" || l.code === "NumpadEnter" || l.code === "Space") && (M.current = !0), z("month"), l.preventDefault();
  }, y = function(l) {
    l && l.code && (l.code === "Enter" || l.code === "NumpadEnter" || l.code === "Space") && (M.current = !0), z("year"), l.preventDefault();
  }, ce = function(l, u) {
    if (r.view === "month")
      wn(l, {
        year: Me,
        month: u,
        day: 1,
        selectable: !0
      }), l.preventDefault();
    else {
      _e(u), Tl(u, Me);
      var p = Ut(tt());
      p.setDate(1), p.setMonth(u), p.setYear(Me), T(p), z("date"), r.onMonthChange && r.onMonthChange({
        month: u + 1,
        year: Me
      }), xt(l, p), Be({
        event: l,
        date: p
      });
    }
  }, Ae = function(l, u) {
    r.view === "year" ? wn(l, {
      year: u,
      month: 0,
      day: 1,
      selectable: !0
    }) : (nt(u), z("month"), r.onMonthChange && r.onMonthChange({
      month: te + 1,
      year: u
    }));
  }, at = function(l, u) {
    if (r.onChange) {
      var p = Ut(u);
      Ce.current = !0, j.current({
        originalEvent: l,
        value: p,
        stopPropagation: function() {
          l == null || l.stopPropagation();
        },
        preventDefault: function() {
          l == null || l.preventDefault();
        },
        target: {
          name: r.name,
          id: r.id,
          value: p
        }
      });
    }
  }, qt = function(l) {
    r.onVisibleChange ? r.onVisibleChange({
      visible: !0,
      type: l
    }) : (x(!0), we.current = function(u) {
      Ru(u) || (F.current = !0);
    }, Hn.on("overlay-click", we.current));
  }, Ft = function(l, u) {
    var p = function() {
      Ce.current = !1, ve.current = !1, F.current = !1, u && u(), Hn.off("overlay-click", we.current), we.current = null;
    };
    r.touchUI && kr(), r.onVisibleChange ? r.onVisibleChange({
      visible: l !== "dateselect",
      // false only if selecting a value to close panel
      type: l,
      callback: p
    }) : (x(!1), p());
  }, Wa = function() {
    var l = r.touchUI ? {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    } : r.inline ? void 0 : {
      position: "absolute",
      top: "0",
      left: "0"
    };
    if (R.addStyles(q.current, l), r.autoZIndex) {
      var u = r.touchUI ? "modal" : "overlay";
      hn.set(u, q.current, a && a.autoZIndex || Tt.autoZIndex, r.baseZIndex || a && a.zIndex[u] || Tt.zIndex[u]);
    }
    if (!r.touchUI && q && q.current && oe && oe.current && !El()) {
      var p = R.getOuterWidth(oe.current);
      p < 220 && (p = 220), r.view === "date" ? q.current.style.width = R.getOuterWidth(q.current) + "px" : q.current.style.width = p + "px", X() || (q.current.style.minWidth = p + "px");
    }
    Cl();
  }, ea = function() {
    Dt(), r.onShow && r.onShow(), c(!1);
  }, Jo = function() {
    Rt();
  }, qu = function() {
    hn.clear(q.current), r.onHide && r.onHide();
  }, El = function() {
    var l = r.appendTo || a && a.appendTo || Tt.appendTo;
    return l === "self" || r.inline;
  }, Cl = function() {
    r.touchUI ? Iu() : q && q.current && oe && oe.current && (R.alignOverlay(q.current, oe.current, r.appendTo || a && a.appendTo || Tt.appendTo), El() ? R.relativePosition(q.current, oe.current) : R.absolutePosition(q.current, oe.current)), X() && (q.current.style.minWidth = "");
  }, Iu = function() {
    Oe.current || (Oe.current = document.createElement("div"), Oe.current.style.zIndex = String(hn.get(q.current) - 1), !X() && R.addMultipleClasses(Oe.current, "p-component-overlay p-datepicker-mask p-datepicker-mask-scrollblocker p-component-overlay-enter"), de.current = function() {
      kr(), Ft();
    }, Oe.current.addEventListener("click", de.current), document.body.appendChild(Oe.current), R.blockBodyScroll());
  }, kr = function() {
    Oe.current && (X ? Zo() : (!X() && R.addClass(Oe.current, "p-component-overlay-leave"), R.hasCSSAnimation(Oe.current) > 0 ? Oe.current.addEventListener("animationend", function() {
      Zo();
    }) : Zo()));
  }, Zo = function() {
    Oe.current && (Oe.current.removeEventListener("click", de.current), de.current = null, document.body.removeChild(Oe.current), Oe.current = null);
    for (var l = document.body.children, u, p = 0; p < l.length; p++) {
      var g = l[p];
      if (R.hasClass(g, "p-datepicker-mask-scrollblocker")) {
        u = !0;
        break;
      }
    }
    u || R.unblockBodyScroll();
  }, Ru = function(l) {
    return Y.current && !(Y.current.isSameNode(l.target) || Ol(l.target) || Y.current.contains(l.target) || q.current && q.current.contains(l.target));
  }, Ol = function(l) {
    return se.current && (se.current.isSameNode(l) || se.current.contains(l)) || ae.current && (ae.current.isSameNode(l) || ae.current.contains(l));
  }, Nu = function(l, u) {
    var p = /* @__PURE__ */ new Date();
    p.setDate(1), p.setMonth(l), p.setFullYear(u);
    var g = p.getDay() + ju();
    return g >= 7 ? g - 7 : g;
  }, ta = function(l, u) {
    return 32 - Dl(new Date(u, l, 32)).getDate();
  }, Mu = function(l, u) {
    var p = Pl(l, u);
    return ta(p.month, p.year);
  }, Dl = function(l) {
    return l ? (l.setHours(l.getHours() > 12 ? l.getHours() + 2 : 0), l) : null;
  }, Pl = function(l, u) {
    var p, g;
    return l === 0 ? (p = 11, g = u - 1) : (p = l - 1, g = u), {
      month: p,
      year: g
    };
  }, Au = function(l, u) {
    var p, g;
    return l === 11 ? (p = 0, g = u + 1) : (p = l + 1, g = u), {
      month: p,
      year: g
    };
  }, ju = function() {
    var l = fn("firstDayOfWeek", r.locale);
    return l > 0 ? 7 - l : 0;
  }, _u = function() {
    for (var l = [], u = En(r.locale), p = u.firstDayOfWeek, g = u.dayNamesMin, A = 0; A < 7; A++)
      l.push(g[p]), p = p === 6 ? 0 : ++p;
    return l;
  }, Tl = function(l, u) {
    for (var p = [], g = 0; g < r.numberOfMonths; g++) {
      var A = l + g, L = u;
      A > 11 && (A = A % 11 - 1, L = u + 1), p.push(Lu(A, L));
    }
    return p;
  }, Lu = function(l, u) {
    for (var p = [], g = Nu(l, u), A = ta(l, u), L = Mu(l, u), U = 1, le = /* @__PURE__ */ new Date(), Ne = [], Ve = Math.ceil((A + g) / 7), Ue = 0; Ue < Ve; Ue++) {
      var ke = [];
      if (Ue === 0) {
        for (var Ke = L - g + 1; Ke <= L; Ke++) {
          var Gt = Pl(l, u);
          ke.push({
            day: Ke,
            month: Gt.month,
            year: Gt.year,
            otherMonth: !0,
            today: Ua(le, Ke, Gt.month, Gt.year),
            selectable: rr(Ke, Gt.month, Gt.year, !0)
          });
        }
        for (var tn = 7 - ke.length, ln = 0; ln < tn; ln++)
          ke.push({
            day: U,
            month: l,
            year: u,
            today: Ua(le, U, l, u),
            selectable: rr(U, l, u, !1)
          }), U++;
      } else
        for (var gn = 0; gn < 7; gn++) {
          if (U > A) {
            var ut = Au(l, u);
            ke.push({
              day: U - A,
              month: ut.month,
              year: ut.year,
              otherMonth: !0,
              today: Ua(le, U - A, ut.month, ut.year),
              selectable: rr(U - A, ut.month, ut.year, !0)
            });
          } else
            ke.push({
              day: U,
              month: l,
              year: u,
              today: Ua(le, U, l, u),
              selectable: rr(U, l, u, !1)
            });
          U++;
        }
      r.showWeek && Ne.push(Fu(new Date(ke[0].year, ke[0].month, ke[0].day))), p.push(ke);
    }
    return {
      month: l,
      year: u,
      dates: p,
      weekNumbers: Ne
    };
  }, Fu = function(l) {
    var u = Ut(l);
    u.setDate(u.getDate() + 4 - (u.getDay() || 7));
    var p = u.getTime();
    return u.setMonth(0), u.setDate(1), Math.floor(Math.round((p - u.getTime()) / 864e5) / 7) + 1;
  }, rr = function(l, u, p, g) {
    var A = !0, L = !0, U = !0, le = !0, Ne = !0;
    return r.minDate && (r.minDate.getFullYear() > p || r.minDate.getFullYear() === p && (u > -1 && r.minDate.getMonth() > u || u > -1 && r.minDate.getMonth() === u && l > 0 && r.minDate.getDate() > l)) && (A = !1), r.maxDate && (r.maxDate.getFullYear() < p || r.maxDate.getFullYear() === p && (u > -1 && r.maxDate.getMonth() < u || u > -1 && r.maxDate.getMonth() === u && l > 0 && r.maxDate.getDate() < l)) && (L = !1), (r.disabledDates || r.enabledDates || r.disabledDays) && (le = !Hu(l, u, p)), r.selectOtherMonths === !1 && g && (Ne = !1), A && L && U && le && Ne;
  }, kl = function(l) {
    var u = !0, p = !0;
    return r.minDate && r.minDate.toDateString() === l.toDateString() && (r.minDate.getHours() > l.getHours() || r.minDate.getHours() === l.getHours() && (r.minDate.getMinutes() > l.getMinutes() || r.minDate.getMinutes() === l.getMinutes() && (r.minDate.getSeconds() > l.getSeconds() || r.minDate.getSeconds() === l.getSeconds() && r.minDate.getMilliseconds() > l.getMilliseconds()))) && (u = !1), r.maxDate && r.maxDate.toDateString() === l.toDateString() && (r.maxDate.getHours() < l.getHours() || r.maxDate.getHours() === l.getHours() && (r.maxDate.getMinutes() < l.getMinutes() || r.maxDate.getMinutes() === l.getMinutes() && (r.maxDate.getSeconds() < l.getSeconds() || r.maxDate.getSeconds() === l.getSeconds() && r.maxDate.getMilliseconds() < l.getMilliseconds()))) && (p = !1), u && p;
  }, Qo = function(l) {
    if (r.value) {
      if (mr())
        return qr(r.value, l);
      if (Fn()) {
        var u = !1, p = Rs(r.value), g;
        try {
          for (p.s(); !(g = p.n()).done; ) {
            var A = g.value;
            if (u = qr(A, l), u)
              break;
          }
        } catch (L) {
          p.e(L);
        } finally {
          p.f();
        }
        return u;
      } else if (Ln())
        return r.value[1] ? qr(r.value[0], l) || qr(r.value[1], l) || $u(r.value[0], r.value[1], l) : qr(r.value[0], l);
    } else
      return !1;
  }, ql = function() {
    return r.value != null && typeof r.value != "string";
  }, Il = function(l) {
    if (!ql()) return !1;
    if (Fn())
      return r.value.some(function(ke) {
        return ke.getMonth() === l && ke.getFullYear() === Me;
      });
    if (Ln()) {
      var u = $n(r.value, 2), p = u[0], g = u[1], A = p ? p.getFullYear() : null, L = g ? g.getFullYear() : null, U = p ? p.getMonth() : null, le = g ? g.getMonth() : null;
      if (g) {
        var Ne = new Date(Me, l, 1), Ve = new Date(A, U, 1), Ue = new Date(L, le, 1);
        return Ne >= Ve && Ne <= Ue;
      } else
        return A === Me && U === l;
    } else
      return r.value.getMonth() === l && r.value.getFullYear() === Me;
  }, ei = function(l) {
    if (!ql()) return !1;
    if (Fn())
      return r.value.some(function(g) {
        return g.getFullYear() === l;
      });
    if (Ln()) {
      var u = r.value[0] ? r.value[0].getFullYear() : null, p = r.value[1] ? r.value[1].getFullYear() : null;
      return u === l || p === l || u < l && p > l;
    } else
      return r.value.getFullYear() === l;
  }, Rl = function() {
    return r.numberOfMonths > 1 || r.disabled;
  }, qr = function(l, u) {
    return l && l instanceof Date ? l.getDate() === u.day && l.getMonth() === u.month && l.getFullYear() === u.year : !1;
  }, $u = function(l, u, p) {
    var g = !1;
    if (l && u) {
      var A = new Date(p.year, p.month, p.day);
      return l.getTime() <= A.getTime() && u.getTime() >= A.getTime();
    }
    return g;
  }, mr = function() {
    return r.selectionMode === "single";
  }, Ln = function() {
    return r.selectionMode === "range";
  }, Fn = function() {
    return r.selectionMode === "multiple";
  }, Ua = function(l, u, p, g) {
    return l.getDate() === u && l.getMonth() === p && l.getFullYear() === g;
  }, Hu = function(l, u, p) {
    var g = !1;
    if (r.disabledDates && r.disabledDates.some(function(le) {
      return le.getFullYear() === p && le.getMonth() === u && le.getDate() === l;
    }) && (g = !0), !g && r.disabledDays && K === "date") {
      var A = new Date(p, u, l), L = A.getDay();
      r.disabledDays.indexOf(L) !== -1 && (g = !0);
    }
    if (r.enabledDates) {
      var U = r.enabledDates.some(function(le) {
        return le.getFullYear() === p && le.getMonth() === u && le.getDate() === l;
      });
      U ? g = !1 : !r.disabledDays && !r.disabledDates && (g = !0);
    }
    return g;
  }, Ir = function(l, u) {
    for (var p = l === -1 ? new Array(12).fill(0).map(function(Ne, Ve) {
      return ta(Ve, u);
    }) : [ta(l, u)], g = 0; g < p.length; g++)
      for (var A = p[g], L = l === -1 ? g : l, U = 1; U <= A; U++) {
        var le = rr(U, L, u);
        if (le)
          return !1;
      }
    return !0;
  }, ar = function(l) {
    if (oe.current) {
      var u = "";
      if (l)
        try {
          if (mr())
            u = vn(l) ? Ga(l) : r.keepInvalid ? l : "";
          else if (Fn())
            for (var p = 0; p < l.length; p++) {
              var g = l[p], A = vn(g) ? Ga(g) : "";
              u = u + A, p !== l.length - 1 && (u = u + ", ");
            }
          else if (Ln() && l && l.length) {
            var L = l[0], U = l[1];
            u = vn(L) ? Ga(L) : "", U && (u = u + (vn(U) ? " - " + Ga(U) : ""));
          }
        } catch {
          u = l;
        }
      oe.current.value = u;
    }
  }, Ga = function(l) {
    if (r.formatDateTime)
      return r.formatDateTime(l);
    var u = null;
    return l && (r.timeOnly ? u = Nl(l) : (u = Bu(l, Ht()), r.showTime && (u = u + (" " + Nl(l))))), u;
  }, Bu = function(l, u) {
    if (!l)
      return "";
    var p, g = function(tn) {
      var ln = p + 1 < u.length && u.charAt(p + 1) === tn;
      return ln && p++, ln;
    }, A = function(tn, ln, gn) {
      var ut = "" + ln;
      if (g(tn))
        for (; ut.length < gn; )
          ut = "0" + ut;
      return ut;
    }, L = function(tn, ln, gn, ut) {
      return g(tn) ? ut[ln] : gn[ln];
    }, U = "", le = !1, Ne = En(r.locale), Ve = Ne.dayNamesShort, Ue = Ne.dayNames, ke = Ne.monthNamesShort, Ke = Ne.monthNames;
    if (l)
      for (p = 0; p < u.length; p++)
        if (le)
          u.charAt(p) === "'" && !g("'") ? le = !1 : U = U + u.charAt(p);
        else
          switch (u.charAt(p)) {
            case "d":
              U = U + A("d", l.getDate(), 2);
              break;
            case "D":
              U = U + L("D", l.getDay(), Ve, Ue);
              break;
            case "o":
              U = U + A("o", Math.round((new Date(l.getFullYear(), l.getMonth(), l.getDate()).getTime() - new Date(l.getFullYear(), 0, 0).getTime()) / 864e5), 3);
              break;
            case "m":
              U = U + A("m", l.getMonth() + 1, 2);
              break;
            case "M":
              U = U + L("M", l.getMonth(), ke, Ke);
              break;
            case "y":
              U = U + (g("y") ? l.getFullYear() : (l.getFullYear() % 100 < 10 ? "0" : "") + l.getFullYear() % 100);
              break;
            case "@":
              U = U + l.getTime();
              break;
            case "!":
              U = U + (l.getTime() * 1e4 + ticksTo1970);
              break;
            case "'":
              g("'") ? U = U + "'" : le = !0;
              break;
            default:
              U = U + u.charAt(p);
          }
    return U;
  }, Nl = function(l) {
    if (!l)
      return "";
    var u = "", p = l.getHours(), g = l.getMinutes(), A = l.getSeconds(), L = l.getMilliseconds();
    return r.hourFormat === "12" && p > 11 && p !== 12 && (p = p - 12), r.hourFormat === "12" ? u = u + (p === 0 ? 12 : p < 10 ? "0" + p : p) : u = u + (p < 10 ? "0" + p : p), u = u + ":", u = u + (g < 10 ? "0" + g : g), r.showSeconds && (u = u + ":", u = u + (A < 10 ? "0" + A : A)), r.showMillisec && (u = u + ".", u = u + (L < 100 ? (L < 10 ? "00" : "0") + L : L)), r.hourFormat === "12" && (u = u + (l.getHours() > 11 ? " PM" : " AM")), u;
  }, zu = function(l) {
    if (!l || l.trim().length === 0)
      return null;
    var u;
    if (mr())
      u = ti(l);
    else if (Fn()) {
      var p = l.split(",");
      u = [];
      var g = Rs(p), A;
      try {
        for (g.s(); !(A = g.n()).done; ) {
          var L = A.value;
          u.push(ti(L.trim()));
        }
      } catch (Ne) {
        g.e(Ne);
      } finally {
        g.f();
      }
    } else if (Ln()) {
      var U = l.split(" - ");
      u = [];
      for (var le = 0; le < U.length; le++)
        u[le] = ti(U[le].trim());
    }
    return u;
  }, ti = function(l) {
    if (r.parseDateTime)
      return r.parseDateTime(l);
    var u, p = l.split(" ");
    return r.timeOnly ? (u = /* @__PURE__ */ new Date(), Ml(u, p[0], p[1])) : r.showTime ? (u = Al(p[0], Ht()), Ml(u, p[1], p[2])) : u = Al(l, Ht()), u;
  }, Ml = function(l, u, p) {
    if (r.hourFormat === "12" && p !== "PM" && p !== "AM")
      throw new Error("Invalid Time");
    var g = Ku(u, p);
    l.setHours(g.hour), l.setMinutes(g.minute), l.setSeconds(g.second), l.setMilliseconds(g.millisecond);
  }, Ku = function(l, u) {
    l = r.showMillisec ? l.replace(".", ":") : l;
    var p = l.split(":"), g = r.showSeconds ? 3 : 2;
    if (g = r.showMillisec ? g + 1 : g, p.length !== g || p[0].length !== 2 || p[1].length !== 2 || r.showSeconds && p[2].length !== 2 || r.showMillisec && p[3].length !== 3)
      throw new Error("Invalid time");
    var A = parseInt(p[0], 10), L = parseInt(p[1], 10), U = r.showSeconds ? parseInt(p[2], 10) : null, le = r.showMillisec ? parseInt(p[3], 10) : null;
    if (isNaN(A) || isNaN(L) || A > 23 || L > 59 || r.hourFormat === "12" && A > 12 || r.showSeconds && (isNaN(U) || U > 59) || r.showMillisec && (isNaN(U) || U > 1e3))
      throw new Error("Invalid time");
    return r.hourFormat === "12" && (A !== 12 && u === "PM" && (A = A + 12), A === 12 && u === "AM" && (A = A - 12)), {
      hour: A,
      minute: L,
      second: U,
      millisecond: le
    };
  }, Al = function(l, u) {
    if (u == null || l == null)
      throw new Error("Invalid arguments");
    if (l = Yr(l) === "object" ? l.toString() : l + "", l === "")
      return null;
    var p, g, A, L = 0, U = typeof r.shortYearCutoff != "string" ? r.shortYearCutoff : (/* @__PURE__ */ new Date()).getFullYear() % 100 + parseInt(r.shortYearCutoff, 10), le = -1, Ne = -1, Ve = -1, Ue = -1, ke = !1, Ke, Gt = function(Dn) {
      var or = p + 1 < u.length && u.charAt(p + 1) === Dn;
      return or && p++, or;
    }, tn = function(Dn) {
      var or = Gt(Dn), Nr = Dn === "@" ? 14 : Dn === "!" ? 20 : Dn === "y" && or ? 4 : Dn === "o" ? 3 : 2, ir = Dn === "y" ? Nr : 1, gr = new RegExp("^\\d{" + ir + "," + Nr + "}"), Rn = l.substring(L).match(gr);
      if (!Rn)
        throw new Error("Missing number at position " + L);
      return L = L + Rn[0].length, parseInt(Rn[0], 10);
    }, ln = function(Dn, or, Nr) {
      for (var ir = -1, gr = Gt(Dn) ? Nr : or, Rn = [], lr = 0; lr < gr.length; lr++)
        Rn.push([lr, gr[lr]]);
      Rn.sort(function(Vn, Yn) {
        return -(Vn[1].length - Yn[1].length);
      });
      for (var hr = 0; hr < Rn.length; hr++) {
        var br = Rn[hr][1];
        if (l.substr(L, br.length).toLowerCase() === br.toLowerCase()) {
          ir = Rn[hr][0], L = L + br.length;
          break;
        }
      }
      if (ir !== -1)
        return ir + 1;
      throw new Error("Unknown name at position " + L);
    }, gn = function() {
      if (l.charAt(L) !== u.charAt(p))
        throw new Error("Unexpected literal at position " + L);
      L++;
    };
    r.view === "month" && (Ve = 1), r.view === "year" && (Ve = 1, Ne = 1);
    var ut = En(r.locale), On = ut.dayNamesShort, ni = ut.dayNames, ri = ut.monthNamesShort, Ja = ut.monthNames;
    for (p = 0; p < u.length; p++)
      if (ke)
        u.charAt(p) === "'" && !Gt("'") ? ke = !1 : gn();
      else
        switch (u.charAt(p)) {
          case "d":
            Ve = tn("d");
            break;
          case "D":
            ln("D", On, ni);
            break;
          case "o":
            Ue = tn("o");
            break;
          case "m":
            Ne = tn("m");
            break;
          case "M":
            Ne = ln("M", ri, Ja);
            break;
          case "y":
            le = tn("y");
            break;
          case "@":
            Ke = new Date(tn("@")), le = Ke.getFullYear(), Ne = Ke.getMonth() + 1, Ve = Ke.getDate();
            break;
          case "!":
            Ke = new Date((tn("!") - ticksTo1970) / 1e4), le = Ke.getFullYear(), Ne = Ke.getMonth() + 1, Ve = Ke.getDate();
            break;
          case "'":
            Gt("'") ? gn() : ke = !0;
            break;
          default:
            gn();
        }
    if (L < l.length && (A = l.substr(L), !/^\s+/.test(A)))
      throw new Error("Extra/unparsed characters found in date: " + A);
    if (le === -1 ? le = (/* @__PURE__ */ new Date()).getFullYear() : le < 100 && (le = le + ((/* @__PURE__ */ new Date()).getFullYear() - (/* @__PURE__ */ new Date()).getFullYear() % 100 + (le <= U ? 0 : -100))), Ue > -1) {
      Ne = 1, Ve = Ue;
      do {
        if (g = ta(le, Ne - 1), Ve <= g)
          break;
        Ne++, Ve = Ve - g;
      } while (!0);
    }
    if (Ke = Dl(new Date(le, Ne - 1, Ve)), Ke.getFullYear() !== le || Ke.getMonth() + 1 !== Ne || Ke.getDate() !== Ve)
      throw new Error("Invalid date");
    return Ke;
  }, jl = function(l) {
    return r.minDate && r.minDate.getFullYear() === l.getFullYear();
  }, _l = function(l) {
    return r.maxDate && r.maxDate.getFullYear() === l.getFullYear();
  };
  d.useEffect(function() {
    Q.combinedRefs(oe, r.inputRef);
  }, [oe, r.inputRef]), kn(function() {
    var I = pt(r.viewDate);
    if (Mt(I), T(I), _e(I.getMonth()), nt(I.getFullYear()), z(r.view), !C) {
      var l = Er();
      !C && _(l);
    }
    r.inline && (q && q.current.setAttribute(Ot, ""), r.disabled || (J(), r.numberOfMonths === 1 && (q.current.style.width = R.getOuterWidth(q.current) + "px"))), r.value && (ar(r.value), Ll(r.value)), r.autoFocus && setTimeout(function() {
      return R.focus(oe.current, r.autoFocus);
    }, 200);
  }), d.useEffect(function() {
    j.current = r.onChange;
  }, [r.onChange]), d.useEffect(function() {
    var I = null;
    return r.mask && (I = Qd(oe.current, {
      mask: r.mask,
      slotChar: r.maskSlotChar,
      readOnly: r.readOnlyInput || r.disabled,
      onChange: function(u) {
        Pe(u.originalEvent, u.value, function() {
          return !1;
        });
      },
      onBlur: function(u) {
        Pe(u, u.target.value);
      }
    }).unbindEvents), function() {
      r.mask && I && I();
    };
  }, [r.disabled, r.mask, r.readOnlyInput]), dt(function() {
    M.current && z(r.view), M.current = !1;
  }, [r.view]), dt(function() {
    St && !r.inline && fe();
  }, [St, K, r.inline]), dt(function() {
    if (!r.onViewDateChange && !Ce.current && Ll(r.value), r.viewDate) {
      var I = pt(r.viewDate);
      xt(null, I), Be({
        event: null,
        date: I
      });
    }
  }, [r.onViewDateChange, r.value, r.viewDate]), dt(function() {
    (v || r.visible) && setTimeout(function() {
      Cl();
    });
  }, [K, v, r.visible]), dt(function() {
    var I = r.value;
    if (At !== I) {
      var l = document.activeElement === oe.current;
      if (l || ar(I), !I) return;
      var u = I;
      if (Fn())
        I.length && (u = I[I.length - 1]);
      else if (Ln() && I.length) {
        var p = I[0], g = I[1];
        u = g || p;
      }
      u instanceof Date && (Mt(u), T(u), _e(u.getMonth()), nt(u.getFullYear()));
    }
  }, [r.value, St]), dt(function() {
    ar(r.value);
  }, [r.dateFormat, r.hourFormat, r.timeOnly, r.showSeconds, r.showMillisec, r.showTime, r.locale]), dt(function() {
    q.current && (un(w), Ie());
  }), An(function() {
    Oe.current && (kr(), Oe.current = null), hn.clear(q.current);
  }), d.useImperativeHandle(n, function() {
    return {
      props: r,
      show: qt,
      hide: Ft,
      getCurrentDateTime: tt,
      getViewDate: pt,
      updateViewDate: xt,
      focus: function() {
        return R.focus(oe.current);
      },
      getElement: function() {
        return Y.current;
      },
      getOverlay: function() {
        return q.current;
      },
      getInput: function() {
        return oe.current;
      }
    };
  });
  var Ll = function(l) {
    Array.isArray(l) && (l = l[0]);
    var u = At;
    Array.isArray(u) && (u = u[0]);
    var p = r.viewDate && vn(r.viewDate) ? r.viewDate : l && vn(l) ? l : /* @__PURE__ */ new Date();
    B.current && r.showTime && (p.setHours(0, 0, 0), B.current = !1), (!u && l || l && l instanceof Date && l.getTime() !== u.getTime()) && Mt(p), T(p), Ce.current = !0;
  }, Fl = function(l) {
    var u = l ? {
      onClick: Nt,
      onKeyDown: function(Ke) {
        return Qe(Ke);
      }
    } : {
      style: {
        visibility: "hidden"
      }
    }, p = e({
      className: H("previousIcon")
    }, S("previousIcon")), g = r.prevIcon || /* @__PURE__ */ d.createElement(fl, p), A = Wt.getJSXIcon(g, jr({}, p), {
      props: r
    }), L = En(r.locale), U = L.prevDecade, le = L.prevYear, Ne = L.prevMonth, Ve = K === "year" ? U : K === "month" ? le : Ne, Ue = e(jr({
      type: "button",
      className: H("previousButton"),
      "aria-label": Ve
    }, u), S("previousButton"));
    return /* @__PURE__ */ d.createElement("button", Xt({
      ref: se
    }, Ue), A, /* @__PURE__ */ d.createElement(Yt, null));
  }, $l = function(l) {
    var u = l ? {
      onClick: rt,
      onKeyDown: function(Ke) {
        return Qe(Ke);
      }
    } : {
      style: {
        visibility: "hidden"
      }
    }, p = e({
      className: H("nextIcon")
    }, S("nextIcon")), g = r.nextIcon || /* @__PURE__ */ d.createElement(_o, p), A = Wt.getJSXIcon(g, jr({}, p), {
      props: r
    }), L = En(r.locale), U = L.nextDecade, le = L.nextYear, Ne = L.nextMonth, Ve = K === "year" ? U : K === "month" ? le : Ne, Ue = e(jr({
      type: "button",
      className: H("nextButton"),
      "aria-label": Ve
    }, u), S("nextButton"));
    return /* @__PURE__ */ d.createElement("button", Xt({
      ref: ae
    }, Ue), A, /* @__PURE__ */ d.createElement(Yt, null));
  }, Hl = function(l) {
    return r.monthNavigator && r.view !== "month" && (r.numberOfMonths === 1 || l === 0);
  }, Vu = function(l, u) {
    var p = fn("monthNames", r.locale);
    if (Hl(u)) {
      var g = pt(), A = g.getMonth(), L = p.map(function(ke, Ke) {
        return (!jl(g) || Ke >= r.minDate.getMonth()) && (!_l(g) || Ke <= r.maxDate.getMonth()) ? {
          label: ke,
          value: Ke,
          index: Ke
        } : null;
      }).filter(function(ke) {
        return !!ke;
      }), U = L.map(function(ke) {
        return ke.label;
      }), le = e({
        className: H("select"),
        onChange: function(Ke) {
          return Qt(Ke, Ke.target.value);
        },
        value: A
      }, S("select")), Ne = /* @__PURE__ */ d.createElement("select", le, L.map(function(ke) {
        var Ke = e({
          value: ke.value
        }, S("option"));
        return /* @__PURE__ */ d.createElement("option", Xt({}, Ke, {
          key: ke.label
        }), ke.label);
      }));
      if (r.monthNavigatorTemplate) {
        var Ve = {
          onChange: Qt,
          className: "p-datepicker-month",
          value: A,
          names: U,
          options: L,
          element: Ne,
          props: r
        };
        return Q.getJSXElement(r.monthNavigatorTemplate, Ve);
      }
      return Ne;
    }
    var Ue = e({
      className: H("monthTitle"),
      onKeyDown: Qe,
      "aria-label": fn("chooseMonth", r.locale),
      onClick: ye,
      disabled: Rl()
    }, S("monthTitle"));
    return K === "date" && /* @__PURE__ */ d.createElement("button", Ue, p[l]);
  }, Bl = function(l) {
    var u = pt(), p = u.getFullYear(), g = r.numberOfMonths > 1 ? l : Me;
    if (r.yearNavigator) {
      var A = [];
      if (r.yearRange)
        for (var L = r.yearRange.split(":"), U = parseInt(L[0], 10), le = parseInt(L[1], 10), Ne = U; Ne <= le; Ne++)
          A.push(Ne);
      else
        for (var Ve = p - p % 10, Ue = 0; Ue < 10; Ue++)
          A.push(Ve + Ue);
      var ke = A.filter(function(ut) {
        return !(r.minDate && r.minDate.getFullYear() > ut) && !(r.maxDate && r.maxDate.getFullYear() < ut);
      }), Ke = e({
        className: H("select"),
        onChange: function(On) {
          return zt(On, On.target.value);
        },
        value: g
      }, S("select")), Gt = /* @__PURE__ */ d.createElement("select", Ke, ke.map(function(ut) {
        var On = e({
          value: ut
        }, S("option"));
        return /* @__PURE__ */ d.createElement("option", Xt({}, On, {
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
          value: p,
          names: ke,
          options: tn,
          element: Gt,
          props: r
        };
        return Q.getJSXElement(r.yearNavigatorTemplate, ln);
      }
      return Gt;
    }
    var gn = e({
      className: H("yearTitle"),
      "aria-label": fn("chooseYear", r.locale),
      onClick: function(On) {
        return y(On);
      },
      disabled: Rl()
    }, S("yearTitle"));
    return K !== "year" && /* @__PURE__ */ d.createElement("button", gn, g);
  }, zl = function() {
    var l = na(), u = e({
      className: H("decadeTitle")
    }, S("decadeTitle"));
    if (K === "year") {
      var p = e(S("decadeTitleText"));
      return /* @__PURE__ */ d.createElement("span", u, r.decadeTemplate ? r.decadeTemplate(l) : /* @__PURE__ */ d.createElement("span", p, "".concat(na()[0], " - ").concat(na()[na().length - 1])));
    }
    return null;
  }, Yu = function(l, u) {
    var p = Vu(l.month, u), g = Bl(l.year), A = zl(), L = e({
      className: H("title")
    }, S("title")), U = fn("showMonthAfterYear", r.locale);
    return /* @__PURE__ */ d.createElement("div", L, U ? g : p, U ? p : g, A);
  }, Wu = function(l) {
    var u = e(S("weekDay")), p = e({
      scope: "col"
    }, S("tableHeaderCell")), g = l.map(function(le, Ne) {
      return /* @__PURE__ */ d.createElement("th", Xt({}, p, {
        key: "".concat(le, "-").concat(Ne)
      }), /* @__PURE__ */ d.createElement("span", u, le));
    });
    if (r.showWeek) {
      var A = e({
        scope: "col",
        className: H("weekHeader"),
        "data-p-disabled": r.showWeek
      }, S("weekHeader", {
        context: {
          disabled: r.showWeek
        }
      })), L = e(S("weekLabel")), U = /* @__PURE__ */ d.createElement("th", Xt({}, A, {
        key: "wn"
      }), /* @__PURE__ */ d.createElement("span", L, fn("weekHeader", r.locale)));
      return [U].concat(oo(g));
    }
    return g;
  }, Uu = function(l, u, p) {
    var g = r.dateTemplate ? r.dateTemplate(l) : l.day, A = Qo(l), L = e({
      className: H("dayLabel", {
        className: u
      }),
      "aria-selected": A,
      "aria-disabled": !l.selectable,
      onClick: function(le) {
        return wn(le, l);
      },
      onKeyDown: function(le) {
        return _n(le, l, p);
      },
      "data-p-highlight": A,
      "data-p-disabled": !l.selectable
    }, S("dayLabel", {
      context: {
        selected: A,
        disabled: !l.selectable
      }
    }));
    return /* @__PURE__ */ d.createElement("span", L, g, A && /* @__PURE__ */ d.createElement("div", {
      "aria-live": "polite",
      className: "p-hidden-accessible",
      "data-p-hidden-accessible": !0,
      pt: S("hiddenSelectedDay")
    }));
  }, Gu = function(l, u, p) {
    var g = l.map(function(le) {
      var Ne = Qo(le), Ve = qe({
        "p-highlight": Ne,
        "p-disabled": !le.selectable
      }), Ue = le.otherMonth && !r.showOtherMonths ? null : Uu(le, Ve, p), ke = e({
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
      return /* @__PURE__ */ d.createElement("td", Xt({}, ke, {
        key: le.day
      }), Ue);
    });
    if (r.showWeek) {
      var A = e({
        className: H("weekNumber")
      }, S("weekNumber")), L = e({
        className: H("weekLabelContainer"),
        "data-p-disabled": r.showWeek
      }, S("weekLabelContainer", {
        context: {
          disabled: r.showWeek
        }
      })), U = /* @__PURE__ */ d.createElement("td", Xt({}, A, {
        key: "wn" + u
      }), /* @__PURE__ */ d.createElement("span", L, u));
      return [U].concat(oo(g));
    }
    return g;
  }, Xu = function(l, u) {
    var p = e(S("tableBodyRowProps"));
    return l.dates.map(function(g, A) {
      return /* @__PURE__ */ d.createElement("tr", Xt({}, p, {
        key: A
      }), Gu(g, l.weekNumbers[A], u));
    });
  }, Ju = function(l, u, p) {
    var g = Wu(u), A = Xu(l, p), L = e({
      className: H("container")
    }, S("container")), U = e({
      role: "grid",
      className: H("table")
    }, S("table")), le = e(S("tableHeader")), Ne = e(S("tableHeaderRow")), Ve = e(S("tableBody"));
    return K === "date" && /* @__PURE__ */ d.createElement("div", Xt({}, L, {
      key: Er("calendar_container_")
    }), /* @__PURE__ */ d.createElement("table", U, /* @__PURE__ */ d.createElement("thead", le, /* @__PURE__ */ d.createElement("tr", Ne, g)), /* @__PURE__ */ d.createElement("tbody", Ve, A)));
  }, Zu = function(l, u) {
    var p = _u(), g = Fl(u === 0), A = $l(r.numberOfMonths === 1 || u === r.numberOfMonths - 1), L = Yu(l, u), U = Ju(l, p, u), le = r.headerTemplate ? r.headerTemplate() : null, Ne = l.month + "-" + l.year, Ve = e({
      className: H("group")
    }, S("group")), Ue = e({
      className: H("header")
    }, S("header"));
    return /* @__PURE__ */ d.createElement("div", Xt({}, Ve, {
      key: Ne
    }), /* @__PURE__ */ d.createElement("div", Xt({}, Ue, {
      key: u
    }), le, g, L, A), U);
  }, Qu = function(l) {
    var u = l.map(Zu), p = e({
      className: H("groupContainer")
    }, S("groupContainer"));
    return /* @__PURE__ */ d.createElement("div", p, u);
  }, ed = function() {
    var l = pt(), u = Tl(l.getMonth(), l.getFullYear()), p = Qu(u);
    return p;
  }, td = function() {
    for (var l = [], u = fn("monthNamesShort", r.locale), p = 0; p <= 11; p++)
      l.push(u[p]);
    return l;
  }, na = function() {
    for (var l = [], u = Me - Me % 10, p = 0; p < 10; p++)
      l.push(u + p);
    return l;
  }, nd = function() {
    var l = Fl(!0), u = $l(!0), p = Bl(pt().getFullYear()), g = zl(), A = e({
      className: H("groupContainer")
    }, S("groupContainer")), L = e({
      className: H("group")
    }, S("group")), U = e({
      className: H("header")
    }, S("header")), le = e({
      className: H("title")
    }, S("title"));
    return /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("div", A, /* @__PURE__ */ d.createElement("div", L, /* @__PURE__ */ d.createElement("div", U, l, /* @__PURE__ */ d.createElement("div", le, p, g), u))));
  }, rd = function() {
    return r.timeOnly ? null : r.view === "date" ? ed() : nd();
  }, Kl = e(S("incrementIcon")), Vl = e(S("decrementIcon")), ra = Wt.getJSXIcon(r.incrementIcon || /* @__PURE__ */ d.createElement(pl, Kl), jr({}, Kl), {
    props: r
  }), aa = Wt.getJSXIcon(r.decrementIcon || /* @__PURE__ */ d.createElement(jo, Vl), jr({}, Vl), {
    props: r
  }), ad = function() {
    var l = tt(), u = he(l.getMinutes()), p = l.getHours();
    p = u > 59 ? p + 1 : p, r.hourFormat === "12" && (p === 0 ? p = 12 : p > 11 && p !== 12 && (p = p - 12));
    var g = e(S("hour")), A = En(r.locale), L = A.nextHour, U = A.prevHour, le = p < 10 ? "0" + p : p, Ne = e({
      className: H("hourPicker")
    }, S("hourPicker")), Ve = e({
      type: "button",
      className: H("incrementButton"),
      "aria-label": L,
      onMouseDown: function(Ke) {
        return ne(Ke, 0, 1);
      },
      onMouseUp: xe,
      onMouseLeave: Re,
      onKeyDown: function(Ke) {
        return et(Ke, 0, 1);
      },
      onKeyUp: it
    }, S("incrementButton")), Ue = e({
      type: "button",
      className: H("decrementButton"),
      "aria-label": U,
      onMouseDown: function(Ke) {
        return ne(Ke, 0, -1);
      },
      onMouseUp: xe,
      onMouseLeave: Re,
      onKeyDown: function(Ke) {
        return et(Ke, 0, -1);
      },
      onKeyUp: it
    }, S("decrementButton"));
    return /* @__PURE__ */ d.createElement("div", Ne, /* @__PURE__ */ d.createElement("button", Ve, ra, /* @__PURE__ */ d.createElement(Yt, null)), /* @__PURE__ */ d.createElement("span", g, le), /* @__PURE__ */ d.createElement("button", Ue, aa, /* @__PURE__ */ d.createElement(Yt, null)));
  }, od = function() {
    var l = tt(), u = he(l.getMinutes());
    u = u > 59 ? u - 60 : u;
    var p = e(S("minute")), g = En(r.locale), A = g.nextMinute, L = g.prevMinute, U = u < 10 ? "0" + u : u, le = e({
      className: H("minutePicker")
    }, S("minutePicker")), Ne = e({
      type: "button",
      className: H("incrementButton"),
      "aria-label": A,
      onMouseDown: function(ke) {
        return ne(ke, 1, 1);
      },
      onMouseUp: xe,
      onMouseLeave: Re,
      onKeyDown: function(ke) {
        return et(ke, 1, 1);
      },
      onKeyUp: it
    }, S("incrementButton")), Ve = e({
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
      onKeyUp: it
    }, S("decrementButton"));
    return /* @__PURE__ */ d.createElement("div", le, /* @__PURE__ */ d.createElement("button", Ne, ra, /* @__PURE__ */ d.createElement(Yt, null)), /* @__PURE__ */ d.createElement("span", p, U), /* @__PURE__ */ d.createElement("button", Ve, aa, /* @__PURE__ */ d.createElement(Yt, null)));
  }, id = function() {
    if (r.showSeconds) {
      var l = tt(), u = En(r.locale), p = u.nextSecond, g = u.prevSecond, A = e(S("second")), L = l.getSeconds(), U = L < 10 ? "0" + L : L, le = e({
        className: H("secondPicker")
      }, S("secondPicker")), Ne = e({
        type: "button",
        className: H("incrementButton"),
        "aria-label": p,
        onMouseDown: function(ke) {
          return ne(ke, 2, 1);
        },
        onMouseUp: xe,
        onMouseLeave: Re,
        onKeyDown: function(ke) {
          return et(ke, 2, 1);
        },
        onKeyUp: it
      }, S("incrementButton")), Ve = e({
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
        onKeyUp: it
      }, S("decrementButton"));
      return /* @__PURE__ */ d.createElement("div", le, /* @__PURE__ */ d.createElement("button", Ne, ra, /* @__PURE__ */ d.createElement(Yt, null)), /* @__PURE__ */ d.createElement("span", A, U), /* @__PURE__ */ d.createElement("button", Ve, aa, /* @__PURE__ */ d.createElement(Yt, null)));
    }
    return null;
  }, ld = function() {
    if (r.showMillisec) {
      var l = tt(), u = En(r.locale), p = u.nextMilliSecond, g = u.prevMilliSecond, A = e(S("millisecond")), L = l.getMilliseconds(), U = L < 100 ? (L < 10 ? "00" : "0") + L : L, le = e({
        className: H("millisecondPicker")
      }, S("millisecondPicker")), Ne = e({
        type: "button",
        className: H("incrementButton"),
        "aria-label": p,
        onMouseDown: function(ke) {
          return ne(ke, 3, 1);
        },
        onMouseUp: xe,
        onMouseLeave: Re,
        onKeyDown: function(ke) {
          return et(ke, 3, 1);
        },
        onKeyUp: it
      }, S("incrementButton")), Ve = e({
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
        onKeyUp: it
      }, S("decrementButton"));
      return /* @__PURE__ */ d.createElement("div", le, /* @__PURE__ */ d.createElement("button", Ne, ra, /* @__PURE__ */ d.createElement(Yt, null)), /* @__PURE__ */ d.createElement("span", A, U), /* @__PURE__ */ d.createElement("button", Ve, aa, /* @__PURE__ */ d.createElement(Yt, null)));
    }
    return null;
  }, sd = function() {
    if (r.hourFormat === "12") {
      var l = tt(), u = En(r.locale), p = u.am, g = u.pm, A = l.getHours(), L = A > 11 ? "PM" : "AM", U = e(S("ampm")), le = e({
        className: H("ampmPicker")
      }, S("ampmPicker")), Ne = e({
        type: "button",
        className: H("incrementButton"),
        "aria-label": p,
        onClick: function(ke) {
          return Pt(ke);
        }
      }, S("incrementButton")), Ve = e({
        type: "button",
        className: H("decrementButton"),
        "aria-label": g,
        onClick: function(ke) {
          return Pt(ke);
        }
      }, S("decrementButton"));
      return /* @__PURE__ */ d.createElement("div", le, /* @__PURE__ */ d.createElement("button", Ne, ra, /* @__PURE__ */ d.createElement(Yt, null)), /* @__PURE__ */ d.createElement("span", U, L), /* @__PURE__ */ d.createElement("button", Ve, aa, /* @__PURE__ */ d.createElement(Yt, null)));
    }
    return null;
  }, Xa = function(l) {
    var u = e({
      className: H("separatorContainer")
    }, S("separatorContainer")), p = e(S("separator"));
    return /* @__PURE__ */ d.createElement("div", u, /* @__PURE__ */ d.createElement("span", p, l));
  }, cd = function() {
    if ((r.showTime || r.timeOnly) && K === "date") {
      var l = e({
        className: H("timePicker")
      }, S("timePicker"));
      return /* @__PURE__ */ d.createElement("div", l, ad(), Xa(":"), od(), r.showSeconds && Xa(":"), id(), r.showMillisec && Xa("."), ld(), r.hourFormat === "12" && Xa(":"), sd());
    }
    return null;
  }, ud = function() {
    return r.inline ? null : /* @__PURE__ */ d.createElement(Zt, {
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
      onBlur: _t,
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
        parent: E
      }
    });
  }, dd = function() {
    return r.showIcon ? /* @__PURE__ */ d.createElement(xn, {
      type: "button",
      icon: r.icon || /* @__PURE__ */ d.createElement(qc, null),
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
        parent: E
      }
    }) : null;
  }, fd = function() {
    var l = ud(), u = dd();
    return r.iconPos === "left" ? /* @__PURE__ */ d.createElement(d.Fragment, null, u, l) : /* @__PURE__ */ d.createElement(d.Fragment, null, l, u);
  }, pd = function() {
    if (r.showButtonBar) {
      var l = En(r.locale), u = l.today, p = l.clear, g = l.now, A = /* @__PURE__ */ new Date(), L = r.minDate && r.minDate > A || r.maxDate && r.maxDate < A, U = e({
        className: H("buttonbar")
      }, S("buttonbar"));
      return /* @__PURE__ */ d.createElement("div", U, /* @__PURE__ */ d.createElement(xn, {
        type: "button",
        label: r.showTime ? g : u,
        onClick: Vt,
        onKeyDown: function(Ne) {
          return Qe(Ne);
        },
        className: qe(r.todayButtonClassName, H("todayButton")),
        pt: S("todayButton"),
        style: L ? {
          visibility: "hidden"
        } : void 0
      }), /* @__PURE__ */ d.createElement(xn, {
        type: "button",
        label: p,
        onClick: en,
        onKeyDown: function(Ne) {
          return Qe(Ne);
        },
        className: qe(r.clearButtonClassName, H("clearButton")),
        pt: S("clearButton")
      }));
    }
    return null;
  }, vd = function() {
    if (r.footerTemplate) {
      var l = r.footerTemplate(), u = e({
        className: H("footer")
      }, S("footer"));
      return /* @__PURE__ */ d.createElement("div", u, l);
    }
    return null;
  }, md = function() {
    if (K === "month") {
      var l = e({
        className: H("monthPicker")
      }, S("monthPicker"));
      return /* @__PURE__ */ d.createElement("div", l, td().map(function(u, p) {
        var g = Il(p), A = e({
          className: H("month", {
            isMonthSelected: Il,
            isMonthYearDisabled: Ir,
            i: p,
            currentYear: Me
          }),
          onClick: function(U) {
            return ce(U, p);
          },
          onKeyDown: function(U) {
            return Sn(U, p);
          },
          "data-p-disabled": Ir(p, Me),
          "data-p-highlight": g
        }, S("month", {
          context: {
            month: u,
            monthIndex: p,
            selected: g,
            disabled: Ir(p, Me)
          }
        }));
        return /* @__PURE__ */ d.createElement("span", Xt({}, A, {
          key: "month".concat(p + 1)
        }), u, g && /* @__PURE__ */ d.createElement("div", {
          "aria-live": "polite",
          className: "p-hidden-accessible",
          "data-p-hidden-accessible": !0,
          pt: S("hiddenMonth")
        }, u));
      }));
    }
    return null;
  }, gd = function() {
    if (K === "year") {
      var l = e({
        className: H("yearPicker")
      }, S("yearPicker"));
      return /* @__PURE__ */ d.createElement("div", l, na().map(function(u, p) {
        var g = ei(u), A = e({
          className: H("year", {
            isYearSelected: ei,
            isMonthYearDisabled: Ir,
            y: u
          }),
          onClick: function(U) {
            return Ae(U, u);
          },
          onKeyDown: function(U) {
            return In(U, u);
          },
          "data-p-highlight": ei(u),
          "data-p-disabled": Ir(-1, u)
        }, S("year", {
          context: {
            year: u,
            yearIndex: p,
            selected: g,
            disabled: Ir(-1, u)
          }
        }));
        return /* @__PURE__ */ d.createElement("span", Xt({}, A, {
          key: "year".concat(p + 1)
        }), u, g && /* @__PURE__ */ d.createElement("div", {
          "aria-live": "polite",
          className: "p-hidden-accessible",
          "data-p-hidden-accessible": !0,
          pt: S("hiddenYear")
        }, u));
      }));
    }
    return null;
  }, hd = qe("p-datepicker p-component", r.panelClassName, {
    "p-datepicker-inline": r.inline,
    "p-disabled": r.disabled,
    "p-datepicker-timeonly": r.timeOnly,
    "p-datepicker-multiple-month": r.numberOfMonths > 1,
    "p-datepicker-monthpicker": K === "month",
    "p-datepicker-touch-ui": r.touchUI,
    "p-input-filled": a && a.inputStyle === "filled" || Tt.inputStyle === "filled",
    "p-ripple-disabled": a && a.ripple === !1 || Tt.ripple === !1
  }), bd = fd(), yd = rd(), wd = cd(), xd = pd(), Sd = vd(), Ed = md(), Cd = gd(), Od = R.hasClass(oe.current, "p-filled") && oe.current.value !== "", Dd = e({
    id: r.id,
    className: qe(r.className, H("root", {
      focusedState: i,
      isFilled: Od,
      panelVisible: St
    })),
    style: r.style
  }, io.getOtherProps(r), S("root"));
  return /* @__PURE__ */ d.createElement("span", Xt({
    ref: Y
  }, Dd), bd, /* @__PURE__ */ d.createElement(Rc, {
    hostName: "Calendar",
    id: vt,
    locale: r.locale,
    ref: q,
    className: hd,
    style: r.panelStyle,
    appendTo: r.appendTo,
    inline: r.inline,
    onClick: h,
    onMouseUp: O,
    in: St,
    onEnter: Wa,
    onEntered: ea,
    onExit: Jo,
    onExited: qu,
    transitionOptions: r.transitionOptions,
    ptm: S,
    cx: H
  }, yd, wd, Ed, Cd, xd, Sd));
}));
Nc.displayName = "Calendar";
const Wr = {
  id: Pr(),
  type: "input-date",
  label: "",
  value: "",
  placeholder: "",
  format: "yy-mm-dd"
}, cv = ({ config: t, onChange: n }) => {
  const [e, a] = ct({ ...Wr, ...t });
  return Xe(() => {
    a({ ...Wr, ...t });
  }, [t]), Math.random().toString(36).substring(2, 15), /* @__PURE__ */ k.jsx(k.Fragment, { children: /* @__PURE__ */ k.jsx(
    Nc,
    {
      onChange: (r) => {
        console.log(r.value);
      },
      dateFormat: "yy-mm-dd"
    }
  ) });
}, uv = ({ config: t, onChange: n }) => {
  const [e, a] = ct({ ...Wr, ...t }), r = (o) => {
    const s = { ...e, [o.target.name]: o.target.value };
    a(s), n(s);
  };
  return Xe(() => {
    a({ ...Wr, ...t });
  }, [t]), /* @__PURE__ */ k.jsx(k.Fragment, { children: /* @__PURE__ */ k.jsxs(vr, { activeIndex: 0, children: [
    " ",
    /* @__PURE__ */ k.jsx(Jn, { header: "General", children: /* @__PURE__ */ k.jsxs("div", { className: "form-item flex flex-column gap-4", children: [
      /* @__PURE__ */ k.jsxs("div", { className: "flex flex-column gap-2", children: [
        /* @__PURE__ */ k.jsx("label", { htmlFor: "label", children: "Label" }),
        /* @__PURE__ */ k.jsx(
          Zt,
          {
            id: "label",
            value: e.label || "",
            name: "label",
            onChange: r,
            className: "w-full"
          }
        )
      ] }),
      /* @__PURE__ */ k.jsxs("div", { className: "flex flex-column gap-2", children: [
        /* @__PURE__ */ k.jsx("label", { htmlFor: "placeholder", children: "Placeholder" }),
        /* @__PURE__ */ k.jsx(
          Zt,
          {
            id: "placeholder",
            value: e.placeholder || "",
            name: "placeholder",
            onChange: r,
            className: "w-full"
          }
        )
      ] }),
      /* @__PURE__ */ k.jsxs("div", { className: "flex flex-column gap-2", children: [
        /* @__PURE__ */ k.jsx("label", { htmlFor: "format", children: "Format" }),
        /* @__PURE__ */ k.jsx(
          Zt,
          {
            id: "format",
            value: e.format || "",
            name: "format",
            onChange: r,
            className: "w-full"
          }
        ),
        /* @__PURE__ */ k.jsxs("ul", { children: [
          /* @__PURE__ */ k.jsx("li", { children: "d - day of month (no leading zero)" }),
          /* @__PURE__ */ k.jsx("li", { children: "dd - day of month (two digit)" }),
          /* @__PURE__ */ k.jsx("li", { children: "o - day of the year (no leading zeros)" }),
          /* @__PURE__ */ k.jsx("li", { children: "oo - day of the year (three digit)" }),
          /* @__PURE__ */ k.jsx("li", { children: "D - day name short" }),
          /* @__PURE__ */ k.jsx("li", { children: "DD - day name long" }),
          /* @__PURE__ */ k.jsx("li", { children: "m - month of year (no leading zero)" }),
          /* @__PURE__ */ k.jsx("li", { children: "mm - month of year (two digit)" }),
          /* @__PURE__ */ k.jsx("li", { children: "M - month name short" }),
          /* @__PURE__ */ k.jsx("li", { children: "MM - month name long" }),
          /* @__PURE__ */ k.jsx("li", { children: "y - year (two digit)" }),
          /* @__PURE__ */ k.jsx("li", { children: "yy - year (four digit)" })
        ] })
      ] })
    ] }) }, "general"),
    " "
  ] }) });
}, dv = new La({
  type: Wr.type,
  form: new zn({
    render: cv,
    validation: (t) => (console.log(t), {})
  }),
  settings: new zn({
    render: uv,
    validation: (t) => (console.log(t), {})
  }),
  heading: "Date picker input",
  description: "a simple box to select a date",
  hidden: !1,
  icon: () => /* @__PURE__ */ k.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", children: /* @__PURE__ */ k.jsx("path", { d: "M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l80 0 0 56-80 0 0-56zm0 104l80 0 0 64-80 0 0-64zm128 0l96 0 0 64-96 0 0-64zm144 0l80 0 0 64-80 0 0-64zm80-48l-80 0 0-56 80 0 0 56zm0 160l0 40c0 8.8-7.2 16-16 16l-64 0 0-56 80 0zm-128 0l0 56-96 0 0-56 96 0zm-144 0l0 56-64 0c-8.8 0-16-7.2-16-16l0-40 80 0zM272 248l-96 0 0-56 96 0 0 56z" }) }),
  default_config: Wr
}), Or = {
  id: Pr(),
  type: "input-number",
  label: "",
  value: "",
  placeholder: ""
}, fv = ({ config: t, onChange: n }) => {
  const [e, a] = ct({ ...Or, ...t });
  Xe(() => {
    a({ ...Or, ...t });
  }, [t]);
  const r = (s) => {
    const i = { ...Or, ...t, value: s.target.value };
    n(i);
  }, o = Math.random().toString(36).substring(2, 15);
  return /* @__PURE__ */ k.jsx(k.Fragment, { children: /* @__PURE__ */ k.jsxs("div", { className: "flex flex-column gap-2", children: [
    /* @__PURE__ */ k.jsx("label", { htmlFor: o, children: e.label }),
    /* @__PURE__ */ k.jsx(
      Zt,
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
}, pv = ({ config: t, onChange: n }) => {
  const [e, a] = ct({ ...Or, ...t }), r = (o) => {
    const s = { ...e, [o.target.name]: o.target.value };
    a(s), n(s);
  };
  return Xe(() => {
    a({ ...Or, ...t });
  }, [t]), /* @__PURE__ */ k.jsx(k.Fragment, { children: /* @__PURE__ */ k.jsxs(vr, { activeIndex: 0, children: [
    " ",
    /* @__PURE__ */ k.jsx(Jn, { header: "General", children: /* @__PURE__ */ k.jsxs("div", { className: "form-item flex flex-column gap-4", children: [
      /* @__PURE__ */ k.jsxs("div", { className: "flex flex-column gap-2", children: [
        /* @__PURE__ */ k.jsx("label", { htmlFor: "label", children: "Label" }),
        /* @__PURE__ */ k.jsx(
          Zt,
          {
            id: "label",
            value: e.label || "",
            name: "label",
            onChange: r,
            className: "w-full"
          }
        )
      ] }),
      /* @__PURE__ */ k.jsxs("div", { className: "flex flex-column gap-2", children: [
        /* @__PURE__ */ k.jsx("label", { htmlFor: "placeholder", children: "Placeholder" }),
        /* @__PURE__ */ k.jsx(
          Zt,
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
}, vv = new La({
  type: Or.type,
  form: new zn({
    render: fv,
    validation: (t) => (console.log(t), {})
  }),
  settings: new zn({
    render: pv,
    validation: (t) => (console.log(t), {})
  }),
  heading: "Number input",
  description: "a simple box to insert a number value into",
  hidden: !1,
  icon: () => /* @__PURE__ */ k.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", children: /* @__PURE__ */ k.jsx("path", { d: "M0 64C0 46.3 14.3 32 32 32l256 0c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-224 384c-8.9 15.3-28.5 20.4-43.8 11.5s-20.4-28.5-11.5-43.8L232.3 96 32 96C14.3 96 0 81.7 0 64z" }) }),
  default_config: Or
}), vl = new Ro({
  label: "Inputs"
}), $o = new No();
$o.registerItem(Mp, vl);
$o.registerItem(vv, vl);
$o.registerItem(dv, vl);
function Ta(t) {
  return JSON.parse(JSON.stringify(t));
}
function zi() {
  return zi = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = arguments[n];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    }
    return t;
  }, zi.apply(this, arguments);
}
var Ha = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(t, n) {
  var e = bn.getPTI(t);
  return /* @__PURE__ */ d.createElement("svg", zi({
    ref: n,
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
Ha.displayName = "TimesIcon";
function Ki() {
  return Ki = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = arguments[n];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    }
    return t;
  }, Ki.apply(this, arguments);
}
var Mc = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(t, n) {
  var e = bn.getPTI(t);
  return /* @__PURE__ */ d.createElement("svg", Ki({
    ref: n,
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
Mc.displayName = "SearchIcon";
function Vi() {
  return Vi = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = arguments[n];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    }
    return t;
  }, Vi.apply(this, arguments);
}
function ka(t) {
  "@babel/helpers - typeof";
  return ka = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ka(t);
}
function mv(t, n) {
  if (ka(t) !== "object" || t === null) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var a = e.call(t, n || "default");
    if (ka(a) !== "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(t);
}
function gv(t) {
  var n = mv(t, "string");
  return ka(n) === "symbol" ? n : String(n);
}
function Ac(t, n, e) {
  return n = gv(n), n in t ? Object.defineProperty(t, n, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[n] = e, t;
}
function hv(t) {
  if (Array.isArray(t)) return t;
}
function bv(t, n) {
  var e = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (e != null) {
    var a, r, o, s, i = [], c = !0, f = !1;
    try {
      if (o = (e = e.call(t)).next, n === 0) {
        if (Object(e) !== e) return;
        c = !1;
      } else for (; !(c = (a = o.call(e)).done) && (i.push(a.value), i.length !== n); c = !0) ;
    } catch (m) {
      f = !0, r = m;
    } finally {
      try {
        if (!c && e.return != null && (s = e.return(), Object(s) !== s)) return;
      } finally {
        if (f) throw r;
      }
    }
    return i;
  }
}
function Ms(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var e = 0, a = new Array(n); e < n; e++) a[e] = t[e];
  return a;
}
function yv(t, n) {
  if (t) {
    if (typeof t == "string") return Ms(t, n);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set") return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Ms(t, n);
  }
}
function wv() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wn(t, n) {
  return hv(t) || bv(t, n) || yv(t, n) || wv();
}
var xv = `
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
`, lo = ot.extend({
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
    styles: xv
  }
});
function As(t, n) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    n && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function _r(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? As(Object(e), !0).forEach(function(a) {
      Ac(t, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : As(Object(e)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return t;
}
var jc = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(t, n) {
  var e = cn(), a = d.useContext(Kt), r = lo.getProps(t, a), o = Vr(t) || {}, s = r.orientation === "vertical", i = r.orientation === "horizontal", c = r.orientation === "both", f = d.useState(c ? {
    rows: 0,
    cols: 0
  } : 0), m = Wn(f, 2), v = m[0], x = m[1], b = d.useState(c ? {
    rows: 0,
    cols: 0
  } : 0), N = Wn(b, 2), w = N[0], T = N[1], P = d.useState(0), D = Wn(P, 2), C = D[0], _ = D[1], E = d.useState(c ? {
    rows: 0,
    cols: 0
  } : 0), G = Wn(E, 2), S = G[0], H = G[1], X = d.useState(r.numToleratedItems), Y = Wn(X, 2), q = Y[0], oe = Y[1], W = d.useState(r.loading || !1), ve = Wn(W, 2), ge = ve[0], Ce = ve[1], Oe = d.useState([]), we = Wn(Oe, 2), de = we[0], F = we[1], se = lo.setMetaData({
    props: r,
    state: {
      first: v,
      last: w,
      page: C,
      numItemsInViewport: S,
      numToleratedItems: q,
      loading: ge,
      loaderArr: de
    }
  }), ae = se.ptm;
  Sr(lo.css.styles, {
    name: "virtualscroller"
  });
  var M = d.useRef(null), j = d.useRef(null), B = d.useRef(null), Z = d.useRef(null), ie = d.useRef(c ? {
    top: 0,
    left: 0
  } : 0), K = d.useRef(null), z = d.useRef(null), ee = d.useRef({}), Ee = d.useRef({}), te = d.useRef(null), _e = d.useRef(null), Je = d.useRef(null), Ye = d.useRef(null), Me = d.useRef(!1), nt = d.useRef(null), $t = cl({
    listener: function($) {
      return ht();
    },
    when: !r.disabled
  }), It = Wn($t, 1), Ze = It[0], Ct = fr({
    target: "window",
    type: "orientationchange",
    listener: function($) {
      return ht();
    },
    when: !r.disabled
  }), At = Wn(Ct, 1), St = At[0], Ot = function() {
    return M;
  }, vt = function($) {
    return Math.floor(($ + q * 4) / (r.step || 1));
  }, on = function($) {
    j.current = $ || j.current || R.findSingle(M.current, ".p-virtualscroller-content");
  }, mt = function($) {
    return r.step ? C !== vt($) : !0;
  }, Dt = function($) {
    ie.current = c ? {
      top: 0,
      left: 0
    } : 0, M.current && M.current.scrollTo($);
  }, Rt = function($) {
    var V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "auto", ue = re(), me = ue.numToleratedItems, he = $e(), be = function() {
      var Pt = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, pt = arguments.length > 1 ? arguments[1] : void 0;
      return Pt <= pt ? 0 : Pt;
    }, Te = function(Pt, pt, tt) {
      return Pt * pt + tt;
    }, We = function() {
      var Pt = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, pt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return Dt({
        left: Pt,
        top: pt,
        behavior: V
      });
    }, Fe = c ? {
      rows: 0,
      cols: 0
    } : 0, gt = !1;
    c ? (Fe = {
      rows: be($[0], me[0]),
      cols: be($[1], me[1])
    }, We(Te(Fe.cols, r.itemSize[1], he.left), Te(Fe.rows, r.itemSize[0], he.top)), gt = v.rows !== Fe.rows || v.cols !== Fe.cols) : (Fe = be($, me), i ? We(Te(Fe, r.itemSize, he.left), 0) : We(0, Te(Fe, r.itemSize, he.top)), gt = v !== Fe), Me.current = gt, x(Fe);
  }, Ht = function($, V) {
    var ue = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "auto";
    if (V) {
      var me = Le(), he = me.first, be = me.viewport, Te = function() {
        var pt = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, tt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        return Dt({
          left: pt,
          top: tt,
          behavior: ue
        });
      }, We = V === "to-start", Fe = V === "to-end";
      if (We) {
        if (c)
          be.first.rows - he.rows > $[0] ? Te(be.first.cols * r.itemSize[1], (be.first.rows - 1) * r.itemSize[0]) : be.first.cols - he.cols > $[1] && Te((be.first.cols - 1) * r.itemSize[1], be.first.rows * r.itemSize[0]);
        else if (be.first - he > $) {
          var gt = (be.first - 1) * r.itemSize;
          i ? Te(gt, 0) : Te(0, gt);
        }
      } else if (Fe) {
        if (c)
          be.last.rows - he.rows <= $[0] + 1 ? Te(be.first.cols * r.itemSize[1], (be.first.rows + 1) * r.itemSize[0]) : be.last.cols - he.cols <= $[1] + 1 && Te((be.first.cols + 1) * r.itemSize[1], be.first.rows * r.itemSize[0]);
        else if (be.last - he <= $ + 1) {
          var Lt = (be.first + 1) * r.itemSize;
          i ? Te(Lt, 0) : Te(0, Lt);
        }
      }
    } else
      Rt($, ue);
  }, jt = function() {
    return ge ? r.loaderDisabled ? de : [] : fe();
  }, _t = function() {
    return r.columns && c || i ? ge && r.loaderDisabled ? c ? de[0] : de : r.columns.slice(c ? v.cols : v, c ? w.cols : w) : r.columns;
  }, Le = function() {
    var $ = function(Fe, gt) {
      return Math.floor(Fe / (gt || Fe));
    }, V = v, ue = 0;
    if (M.current) {
      var me = M.current, he = me.scrollTop, be = me.scrollLeft;
      if (c)
        V = {
          rows: $(he, r.itemSize[0]),
          cols: $(be, r.itemSize[1])
        }, ue = {
          rows: V.rows + S.rows,
          cols: V.cols + S.cols
        };
      else {
        var Te = i ? be : he;
        V = $(Te, r.itemSize), ue = V + S;
      }
    }
    return {
      first: v,
      last: w,
      viewport: {
        first: V,
        last: ue
      }
    };
  }, re = function() {
    var $ = $e(), V = M.current ? M.current.offsetWidth - $.left : 0, ue = M.current ? M.current.offsetHeight - $.top : 0, me = function(Fe, gt) {
      return Math.ceil(Fe / (gt || Fe));
    }, he = function(Fe) {
      return Math.ceil(Fe / 2);
    }, be = c ? {
      rows: me(ue, r.itemSize[0]),
      cols: me(V, r.itemSize[1])
    } : me(i ? V : ue, r.itemSize), Te = q || (c ? [he(be.rows), he(be.cols)] : he(be));
    return {
      numItemsInViewport: be,
      numToleratedItems: Te
    };
  }, Pe = function() {
    var $ = re(), V = $.numItemsInViewport, ue = $.numToleratedItems, me = function(Te, We, Fe) {
      var gt = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      return je(Te + We + (Te < Fe ? 2 : 3) * Fe, gt);
    }, he = c ? {
      rows: me(v.rows, V.rows, ue[0]),
      cols: me(v.cols, V.cols, ue[1], !0)
    } : me(v, V, ue);
    H(V), oe(ue), T(he), r.showLoader && F(c ? Array.from({
      length: V.rows
    }).map(function() {
      return Array.from({
        length: V.cols
      });
    }) : Array.from({
      length: V
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
        j.current.style.minHeight = j.current.style.minWidth = "auto", j.current.style.position = "relative", M.current.style.contain = "none";
        var V = [R.getWidth(M.current), R.getHeight(M.current)], ue = V[0], me = V[1];
        (c || i) && (M.current.style.width = (ue < te.current ? ue : r.scrollWidth || te.current) + "px"), (c || s) && (M.current.style.height = (me < _e.current ? me : r.scrollHeight || _e.current) + "px"), j.current.style.minHeight = j.current.style.minWidth = "", j.current.style.position = "", M.current.style.contain = "";
      }
    });
  }, je = function() {
    var $, V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, ue = arguments.length > 1 ? arguments[1] : void 0;
    return r.items ? Math.min(ue ? (($ = r.columns || r.items[0]) === null || $ === void 0 ? void 0 : $.length) || 0 : (r.items || []).length, V) : 0;
  }, $e = function() {
    if (j.current) {
      var $ = getComputedStyle(j.current), V = parseFloat($.paddingLeft) + Math.max(parseFloat($.left) || 0, 0), ue = parseFloat($.paddingRight) + Math.max(parseFloat($.right) || 0, 0), me = parseFloat($.paddingTop) + Math.max(parseFloat($.top) || 0, 0), he = parseFloat($.paddingBottom) + Math.max(parseFloat($.bottom) || 0, 0);
      return {
        left: V,
        right: ue,
        top: me,
        bottom: he,
        x: V + ue,
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
    if (M.current) {
      var $ = M.current.parentElement, V = r.scrollWidth || "".concat(M.current.offsetWidth || $.offsetWidth, "px"), ue = r.scrollHeight || "".concat(M.current.offsetHeight || $.offsetHeight, "px"), me = function(be, Te) {
        return M.current.style[be] = Te;
      };
      c || i ? (me("height", ue), me("width", V)) : me("height", ue);
    }
  }, Nt = function() {
    var $ = r.items;
    if ($) {
      var V = $e(), ue = function(he, be, Te) {
        var We = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
        return Ee.current = _r(_r({}, Ee.current), Ac({}, "".concat(he), (be || []).length * Te + We + "px"));
      };
      c ? (ue("height", $, r.itemSize[0], V.y), ue("width", r.columns || $[1], r.itemSize[1], V.x)) : i ? ue("width", r.columns || $, r.itemSize, V.x) : ue("height", $, r.itemSize, V.y);
    }
  }, rt = function($) {
    if (j.current && !r.appendOnly) {
      var V = $ ? $.first : v, ue = function(Te, We) {
        return Te * We;
      }, me = function() {
        var Te = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, We = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        Z.current && (Z.current.style.top = "-".concat(We, "px")), ee.current = _r(_r({}, ee.current), {
          transform: "translate3d(".concat(Te, "px, ").concat(We, "px, 0)")
        });
      };
      if (c)
        me(ue(V.cols, r.itemSize[1]), ue(V.rows, r.itemSize[0]));
      else {
        var he = ue(V, r.itemSize);
        i ? me(he, 0) : me(0, he);
      }
    }
  }, Qe = function($) {
    var V = $.target, ue = $e(), me = function(xt, un) {
      return xt ? xt > un ? xt - un : xt : 0;
    }, he = function(xt, un) {
      return Math.floor(xt / (un || xt));
    }, be = function(xt, un, _n, mn, Sn, In) {
      return xt <= Sn ? Sn : In ? _n - mn - Sn : un + Sn - 1;
    }, Te = function(xt, un, _n, mn, Sn, In, wn) {
      return xt <= In ? 0 : Math.max(0, wn ? xt < un ? _n : xt - In : xt > un ? _n : xt - 2 * In);
    }, We = function(xt, un, _n, mn, Sn, In) {
      var wn = un + mn + 2 * Sn;
      return xt >= Sn && (wn = wn + (Sn + 1)), je(wn, In);
    }, Fe = me(V.scrollTop, ue.top), gt = me(V.scrollLeft, ue.left), Lt = c ? {
      rows: 0,
      cols: 0
    } : 0, Pt = w, pt = !1, tt = ie.current;
    if (c) {
      var Ut = ie.current.top <= Fe, vn = ie.current.left <= gt;
      if (!r.appendOnly || r.appendOnly && (Ut || vn)) {
        var jn = {
          rows: he(Fe, r.itemSize[0]),
          cols: he(gt, r.itemSize[1])
        }, Qn = {
          rows: be(jn.rows, v.rows, w.rows, S.rows, q[0], Ut),
          cols: be(jn.cols, v.cols, w.cols, S.cols, q[1], vn)
        };
        Lt = {
          rows: Te(jn.rows, Qn.rows, v.rows, w.rows, S.rows, q[0], Ut),
          cols: Te(jn.cols, Qn.cols, v.cols, w.cols, S.cols, q[1], vn)
        }, Pt = {
          rows: We(jn.rows, Lt.rows, w.rows, S.rows, q[0]),
          cols: We(jn.cols, Lt.cols, w.cols, S.cols, q[1], !0)
        }, pt = Lt.rows !== v.rows || Pt.rows !== w.rows || Lt.cols !== v.cols || Pt.cols !== w.cols || Me.current, tt = {
          top: Fe,
          left: gt
        };
      }
    } else {
      var er = i ? gt : Fe, tr = ie.current <= er;
      if (!r.appendOnly || r.appendOnly && tr) {
        var nr = he(er, r.itemSize), Mt = be(nr, v, w, S, q, tr);
        Lt = Te(nr, Mt, v, w, S, q, tr), Pt = We(nr, Lt, w, S, q), pt = Lt !== v || Pt !== w || Me.current, tt = er;
      }
    }
    return {
      first: Lt,
      last: Pt,
      isRangeChanged: pt,
      scrollPos: tt
    };
  }, et = function($) {
    var V = Qe($), ue = V.first, me = V.last, he = V.isRangeChanged, be = V.scrollPos;
    if (he) {
      var Te = {
        first: ue,
        last: me
      };
      if (rt(Te), x(ue), T(me), ie.current = be, r.onScrollIndexChange && r.onScrollIndexChange(Te), r.lazy && mt(ue)) {
        var We = {
          first: r.step ? Math.min(vt(ue) * r.step, (r.items || []).length - r.step) : ue,
          last: Math.min(r.step ? (vt(ue) + 1) * r.step : me, (r.items || []).length)
        }, Fe = !nt.current || nt.current.first !== We.first || nt.current.last !== We.last;
        Fe && r.onLazyLoad && r.onLazyLoad(We), nt.current = We;
      }
    }
  }, it = function($) {
    if (r.onScroll && r.onScroll($), r.delay) {
      if (K.current && clearTimeout(K.current), mt(v)) {
        if (!ge && r.showLoader) {
          var V = Qe($), ue = V.isRangeChanged, me = ue || (r.step ? mt(v) : !1);
          me && Ce(!0);
        }
        K.current = setTimeout(function() {
          et($), ge && r.showLoader && (!r.lazy || r.loading === void 0) && (Ce(!1), _(vt(v)));
        }, r.delay);
      }
    } else
      et($);
  }, ht = function() {
    z.current && clearTimeout(z.current), z.current = setTimeout(function() {
      if (M.current) {
        var $ = [R.getWidth(M.current), R.getHeight(M.current)], V = $[0], ue = $[1], me = V !== te.current, he = ue !== _e.current, be = c ? me || he : i ? me : s ? he : !1;
        be && (oe(r.numToleratedItems), te.current = V, _e.current = ue, Je.current = R.getWidth(j.current), Ye.current = R.getHeight(j.current));
      }
    }, r.resizeDelay);
  }, Ie = function($) {
    var V = (r.items || []).length, ue = c ? v.rows + $ : v + $;
    return {
      index: ue,
      count: V,
      first: ue === 0,
      last: ue === V - 1,
      even: ue % 2 === 0,
      odd: ue % 2 !== 0,
      props: r
    };
  }, J = function($, V) {
    var ue = de.length || 0;
    return _r({
      index: $,
      count: ue,
      first: $ === 0,
      last: $ === ue - 1,
      even: $ % 2 === 0,
      odd: $ % 2 !== 0,
      props: r
    }, V);
  }, fe = function() {
    var $ = r.items;
    return $ && !ge ? c ? $.slice(r.appendOnly ? 0 : v.rows, w.rows).map(function(V) {
      return r.columns ? V : V.slice(r.appendOnly ? 0 : v.cols, w.cols);
    }) : i && r.columns ? $ : $.slice(r.appendOnly ? 0 : v, w) : [];
  }, pe = function() {
    M.current && R.isVisible(M.current) && (on(j.current), De(), Ze(), St(), te.current = R.getWidth(M.current), _e.current = R.getHeight(M.current), Je.current = R.getWidth(j.current), Ye.current = R.getHeight(j.current));
  }, De = function() {
    r.disabled || (ft(), Pe(), Nt());
  };
  kn(function() {
    pe();
  }), dt(function() {
    De();
  }, [r.itemSize, r.scrollHeight, r.scrollWidth]), dt(function() {
    r.numToleratedItems !== q && oe(r.numToleratedItems);
  }, [r.numToleratedItems]), dt(function() {
    r.numToleratedItems === q && De();
  }, [q]), dt(function() {
    var Se = o.items !== void 0 && o.items !== null, $ = r.items !== void 0 && r.items !== null, V = Se ? o.items.length : 0, ue = $ ? r.items.length : 0, me = V !== ue;
    if (c && !me) {
      var he = Se && o.items.length > 0 ? o.items[0].length : 0, be = $ && r.items.length > 0 ? r.items[0].length : 0;
      me = he !== be;
    }
    (!Se || me) && De();
    var Te = ge;
    r.lazy && o.loading !== r.loading && r.loading !== ge && (Ce(r.loading), Te = r.loading), Be(Te);
  }), dt(function() {
    ie.current = c ? {
      top: 0,
      left: 0
    } : 0;
  }, [r.orientation]), d.useImperativeHandle(n, function() {
    return {
      props: r,
      getElementRef: Ot,
      scrollTo: Dt,
      scrollToIndex: Rt,
      scrollInView: Ht,
      getRenderedRange: Le
    };
  });
  var lt = function($) {
    var V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, ue = J($, V), me = Q.getJSXElement(r.loadingTemplate, ue);
    return /* @__PURE__ */ d.createElement(d.Fragment, {
      key: $
    }, me);
  }, wt = function() {
    var $ = "p-virtualscroller-loading-icon", V = e({
      className: $
    }, ae("loadingIcon")), ue = r.loadingIcon || /* @__PURE__ */ d.createElement(Fo, Vi({}, V, {
      spin: !0
    })), me = Wt.getJSXIcon(ue, _r({}, V), {
      props: r
    });
    if (!r.loaderDisabled && r.showLoader && ge) {
      var he = qe("p-virtualscroller-loader", {
        "p-component-overlay": !r.loadingTemplate
      }), be = me;
      if (r.loadingTemplate)
        be = de.map(function(Fe, gt) {
          return lt(gt, c && {
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
      var We = e({
        className: he
      }, ae("loader"));
      return /* @__PURE__ */ d.createElement("div", We, be);
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
  }, Qt = function($, V) {
    var ue = Ie(V), me = Q.getJSXElement(r.itemTemplate, $, ue);
    return /* @__PURE__ */ d.createElement(d.Fragment, {
      key: ue.index
    }, me);
  }, zt = function() {
    var $ = fe();
    return $.map(Qt);
  }, Vt = function() {
    var $ = zt(), V = qe("p-virtualscroller-content", {
      "p-virtualscroller-loading": ge
    }), ue = e({
      ref: j,
      style: ee.current,
      className: V
    }, ae("content")), me = /* @__PURE__ */ d.createElement("div", ue, $);
    if (r.contentTemplate) {
      var he = {
        style: ee.current,
        className: V,
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
        getLoaderOptions: function(Te, We) {
          return J(Te, We);
        },
        loadingTemplate: r.loadingTemplate,
        itemSize: r.itemSize,
        rows: jt(),
        columns: _t(),
        vertical: s,
        horizontal: i,
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
    "p-virtualscroller-horizontal p-horizontal-scroll": i
  }, r.className), O = wt(), ne = Vt(), xe = Bt(), Re = e({
    ref: M,
    className: h,
    tabIndex: r.tabIndex,
    style: r.style,
    onScroll: function($) {
      return it($);
    }
  }, lo.getOtherProps(r), ae("root"));
  return /* @__PURE__ */ d.createElement("div", Re, ne, xe, O);
}));
jc.displayName = "VirtualScroller";
function Yi() {
  return Yi = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = arguments[n];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    }
    return t;
  }, Yi.apply(this, arguments);
}
var _c = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(t, n) {
  var e = bn.getPTI(t);
  return /* @__PURE__ */ d.createElement("svg", Yi({
    ref: n,
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
_c.displayName = "CheckIcon";
function Xn() {
  return Xn = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = arguments[n];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    }
    return t;
  }, Xn.apply(this, arguments);
}
function Ur(t) {
  "@babel/helpers - typeof";
  return Ur = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ur(t);
}
function Sv(t, n) {
  if (Ur(t) !== "object" || t === null) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var a = e.call(t, n || "default");
    if (Ur(a) !== "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(t);
}
function Ev(t) {
  var n = Sv(t, "string");
  return Ur(n) === "symbol" ? n : String(n);
}
function Ho(t, n, e) {
  return n = Ev(n), n in t ? Object.defineProperty(t, n, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[n] = e, t;
}
function Cv(t) {
  if (Array.isArray(t)) return t;
}
function Ov(t, n) {
  var e = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (e != null) {
    var a, r, o, s, i = [], c = !0, f = !1;
    try {
      if (o = (e = e.call(t)).next, n !== 0) for (; !(c = (a = o.call(e)).done) && (i.push(a.value), i.length !== n); c = !0) ;
    } catch (m) {
      f = !0, r = m;
    } finally {
      try {
        if (!c && e.return != null && (s = e.return(), Object(s) !== s)) return;
      } finally {
        if (f) throw r;
      }
    }
    return i;
  }
}
function js(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var e = 0, a = new Array(n); e < n; e++) a[e] = t[e];
  return a;
}
function Dv(t, n) {
  if (t) {
    if (typeof t == "string") return js(t, n);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set") return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return js(t, n);
  }
}
function Pv() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ca(t, n) {
  return Cv(t) || Ov(t, n) || Dv(t, n) || Pv();
}
function _s(t, n) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    n && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function Tv(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? _s(Object(e), !0).forEach(function(a) {
      Ho(t, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : _s(Object(e)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return t;
}
var kv = {
  root: function(n) {
    var e = n.props, a = n.focusedState, r = n.overlayVisibleState, o = n.context;
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
  input: function(n) {
    var e = n.props, a = n.label;
    return e.editable ? "p-dropdown-label p-inputtext" : qe("p-dropdown-label p-inputtext", {
      "p-placeholder": a === null && e.placeholder,
      "p-dropdown-label-empty": a === null && !e.placeholder
    });
  },
  trigger: "p-dropdown-trigger",
  emptyMessage: "p-dropdown-empty-message",
  itemGroup: function(n) {
    var e = n.optionGroupLabel;
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
  filterContainer: function(n) {
    var e = n.clearIcon;
    return qe("p-dropdown-filter-container", {
      "p-dropdown-clearable-filter": !!e
    });
  },
  filterInput: function(n) {
    var e = n.props, a = n.context;
    return qe("p-dropdown-filter p-inputtext p-component", {
      "p-variant-filled": e.variant ? e.variant === "filled" : a && a.inputStyle === "filled"
    });
  },
  list: function(n) {
    var e = n.virtualScrollerOptions;
    return "p-dropdown-items";
  },
  panel: function(n) {
    var e = n.context;
    return qe("p-dropdown-panel p-component", {
      "p-input-filled": e && e.inputStyle === "filled" || Tt.inputStyle === "filled",
      "p-ripple-disabled": e && e.ripple === !1 || Tt.ripple === !1
    });
  },
  item: function(n) {
    var e = n.selected, a = n.disabled, r = n.label, o = n.index, s = n.focusedOptionIndex, i = n.highlightOnSelect;
    return qe("p-dropdown-item", {
      "p-highlight": e && i,
      "p-disabled": a,
      "p-focus": o === s,
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
}, qv = `
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
`, Iv = {
  wrapper: function(n) {
    var e = n.props;
    return {
      maxHeight: e.scrollHeight || "auto"
    };
  },
  panel: function(n) {
    var e = n.props;
    return Tv({}, e.panelStyle);
  }
}, so = ot.extend({
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
    classes: kv,
    styles: qv,
    inlineStyles: Iv
  }
}), Lc = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(t, n) {
  var e = bn.getPTI(t);
  return /* @__PURE__ */ d.createElement("svg", Xn({
    ref: n,
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
Lc.displayName = "BlankIcon";
var Fc = /* @__PURE__ */ d.memo(function(t) {
  var n = cn(), e = t.ptm, a = t.cx, r = t.selected, o = t.disabled, s = t.option, i = t.label, c = t.index, f = t.focusedOptionIndex, m = t.ariaSetSize, v = t.checkmark, x = t.highlightOnSelect, b = t.onInputKeyDown, N = function(E) {
    return e(E, {
      context: {
        selected: r,
        disabled: o,
        focused: c === f
      }
    });
  }, w = function(E, G) {
    t.onClick && t.onClick({
      originalEvent: E,
      option: s
    });
  }, T = t.template ? Q.getJSXElement(t.template, t.option) : t.label, P = n({
    id: "dropdownItem_".concat(c),
    role: "option",
    key: t.label,
    className: qe(s.className, a("item", {
      selected: r,
      disabled: o,
      label: i,
      index: c,
      focusedOptionIndex: f,
      highlightOnSelect: x
    })),
    style: t.style,
    tabIndex: 0,
    onClick: function(E) {
      return w(E);
    },
    onKeyDown: function(E) {
      return b(E);
    },
    onMouseMove: function(E) {
      return t == null ? void 0 : t.onMouseMove(E, c);
    },
    "aria-setsize": m,
    "aria-posinset": c + 1,
    "aria-label": i,
    "aria-selected": r,
    "data-p-highlight": r,
    "data-p-focused": f === c,
    "data-p-disabled": o
  }, N("item")), D = n({
    className: a("itemLabel")
  }, N("itemLabel")), C = function() {
    if (r) {
      var E = n({
        className: a("checkIcon")
      }, N("checkIcon"));
      return /* @__PURE__ */ d.createElement(_c, E);
    }
    var G = n({
      className: a("blankIcon")
    }, N("blankIcon"));
    return /* @__PURE__ */ d.createElement(Lc, G);
  };
  return /* @__PURE__ */ d.createElement("li", P, v && C(), /* @__PURE__ */ d.createElement("span", D, T), /* @__PURE__ */ d.createElement(Yt, null));
});
Fc.displayName = "DropdownItem";
function Ls(t, n) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    n && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function Nn(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Ls(Object(e), !0).forEach(function(a) {
      Ho(t, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : Ls(Object(e)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return t;
}
var $c = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(t, n) {
  var e = cn(), a = t.ptm, r = t.cx, o = t.sx, s = d.useContext(Kt), i = d.useRef(null), c = !(t.visibleOptions && t.visibleOptions.length) && t.hasFilter, f = t.visibleOptions ? t.visibleOptions.length : 0, m = {
    filter: function(Y) {
      return N(Y);
    },
    reset: function() {
      return t.resetFilter();
    }
  }, v = function(Y, q) {
    return a(Y, Nn({
      hostName: t.hostName
    }, q));
  }, x = function() {
    t.onEnter(function() {
      if (t.virtualScrollerRef.current) {
        var Y = t.getSelectedOptionIndex();
        Y !== -1 && setTimeout(function() {
          return t.virtualScrollerRef.current.scrollToIndex(Y);
        }, 0);
      }
    });
  }, b = function() {
    t.onEntered(function() {
      t.filter && t.filterInputAutoFocus && R.focus(i.current, !1);
    });
  }, N = function(Y) {
    t.onFilterInputChange && t.onFilterInputChange(Y);
  }, w = function() {
    if (t.panelFooterTemplate) {
      var Y = Q.getJSXElement(t.panelFooterTemplate, t, t.onOverlayHide), q = e({
        className: r("footer")
      }, v("footer"));
      return /* @__PURE__ */ d.createElement("div", q, Y);
    }
    return null;
  }, T = function(Y, q) {
    if (t.focusOnHover) {
      var oe;
      t == null || (oe = t.changeFocusedOptionIndex) === null || oe === void 0 || oe.call(t, Y, q);
    }
  }, P = function(Y, q) {
    var oe = Q.getJSXElement(Y, t) || fn(q ? "emptyFilterMessage" : "emptyMessage"), W = e({
      className: r("emptyMessage")
    }, v("emptyMessage"));
    return /* @__PURE__ */ d.createElement("li", W, oe);
  }, D = function(Y, q) {
    var oe = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, W = {
      height: oe.props ? oe.props.itemSize : void 0
    };
    if (W = Nn(Nn({}, W), Y.style), Y.group && Y.optionGroup && t.optionGroupLabel) {
      var ve = t.optionGroupLabel, ge = t.optionGroupTemplate ? Q.getJSXElement(t.optionGroupTemplate, Y, q) : t.getOptionGroupLabel(Y), Ce = q + "_" + t.getOptionGroupRenderKey(Y), Oe = e({
        className: r("itemGroup", {
          optionGroupLabel: ve
        }),
        style: W,
        "data-p-highlight": t.selected
      }, v("itemGroup")), we = e({
        className: r("itemGroupLabel")
      }, v("itemGroupLabel"));
      return /* @__PURE__ */ d.createElement("li", Xn({
        key: Ce
      }, Oe), /* @__PURE__ */ d.createElement("span", we, ge));
    }
    var de = t.getOptionRenderKey(Y) + "_" + q, F = t.getOptionLabel(Y), se = t.isOptionDisabled(Y);
    return /* @__PURE__ */ d.createElement(Fc, {
      key: de,
      label: F,
      index: q,
      focusedOptionIndex: t.focusedOptionIndex,
      option: Y,
      ariaSetSize: f,
      onInputKeyDown: t.onInputKeyDown,
      style: W,
      template: t.itemTemplate,
      selected: t.isSelected(Y),
      highlightOnSelect: t.highlightOnSelect,
      disabled: se,
      onClick: t.onOptionClick,
      onMouseMove: T,
      ptm: a,
      cx: r,
      checkmark: t.checkmark
    });
  }, C = function() {
    return Q.isNotEmpty(t.visibleOptions) ? t.visibleOptions.map(D) : t.hasFilter ? P(t.emptyFilterMessage, !0) : P(t.emptyMessage);
  }, _ = function() {
    if (t.showFilterClear && t.filterValue) {
      var Y = fn("clear"), q = e({
        className: r("filterClearIcon"),
        "aria-label": Y,
        onClick: function() {
          return t.onFilterClearIconClick(function() {
            return R.focus(i.current);
          });
        }
      }, v("filterClearIcon")), oe = t.filterClearIcon || /* @__PURE__ */ d.createElement(Ha, q), W = Wt.getJSXIcon(oe, Nn({}, q), {
        props: t
      });
      return W;
    }
    return null;
  }, E = function() {
    if (t.filter) {
      var Y = _(), q = e({
        className: r("filterIcon")
      }, v("filterIcon")), oe = t.filterIcon || /* @__PURE__ */ d.createElement(Mc, q), W = Wt.getJSXIcon(oe, Nn({}, q), {
        props: t
      }), ve = e({
        className: r("filterContainer", {
          clearIcon: Y
        })
      }, v("filterContainer")), ge = e({
        ref: i,
        type: "text",
        autoComplete: "off",
        className: r("filterInput", {
          context: s
        }),
        placeholder: t.filterPlaceholder,
        onKeyDown: t.onFilterInputKeyDown,
        onChange: function(F) {
          return N(F);
        },
        value: t.filterValue
      }, v("filterInput")), Ce = /* @__PURE__ */ d.createElement("div", ve, /* @__PURE__ */ d.createElement("input", ge), Y, W);
      if (t.filterTemplate) {
        var Oe = {
          className: qe("p-dropdown-filter-container", {
            "p-dropdown-clearable-filter": !!Y
          }),
          element: Ce,
          filterOptions: m,
          filterInputKeyDown: t.onFilterInputKeyDown,
          filterInputChange: N,
          filterIconClassName: "p-dropdown-filter-icon",
          clearIcon: Y,
          props: t
        };
        Ce = Q.getJSXElement(t.filterTemplate, Oe);
      }
      var we = e({
        className: r("header")
      }, v("header"));
      return /* @__PURE__ */ d.createElement("div", we, Ce);
    }
    return null;
  }, G = function() {
    if (t.virtualScrollerOptions) {
      var Y = Nn(Nn({}, t.virtualScrollerOptions), {
        style: Nn(Nn({}, t.virtualScrollerOptions.style), {
          height: t.scrollHeight
        }),
        className: qe("p-dropdown-items-wrapper", t.virtualScrollerOptions.className),
        items: t.visibleOptions,
        autoSize: !0,
        onLazyLoad: function(ge) {
          return t.virtualScrollerOptions.onLazyLoad(Nn(Nn({}, ge), {
            filter: t.filterValue
          }));
        },
        itemTemplate: function(ge, Ce) {
          return ge && D(ge, Ce.index, Ce);
        },
        contentTemplate: function(ge) {
          var Ce = t.hasFilter ? t.emptyFilterMessage : t.emptyMessage, Oe = c ? P(Ce) : ge.children, we = e({
            ref: ge.contentRef,
            style: ge.style,
            className: qe(ge.className, r("list", {
              virtualScrollerProps: t.virtualScrollerOptions
            })),
            role: "listbox"
          }, v("list"));
          return /* @__PURE__ */ d.createElement("ul", we, Oe);
        }
      });
      return /* @__PURE__ */ d.createElement(jc, Xn({
        ref: t.virtualScrollerRef
      }, Y, {
        pt: a("virtualScroller")
      }));
    }
    var q = C(), oe = e({
      className: r("wrapper"),
      style: o("wrapper")
    }, v("wrapper")), W = e({
      className: r("list"),
      role: "listbox"
    }, v("list"));
    return /* @__PURE__ */ d.createElement("div", oe, /* @__PURE__ */ d.createElement("ul", W, q));
  }, S = function() {
    var Y = E(), q = G(), oe = w(), W = e({
      className: qe(t.panelClassName, r("panel", {
        context: s
      })),
      style: o("panel"),
      onClick: t.onClick
    }, v("panel")), ve = e({
      classNames: r("transition"),
      in: t.in,
      timeout: {
        enter: 120,
        exit: 100
      },
      options: t.transitionOptions,
      unmountOnExit: !0,
      onEnter: x,
      onEntered: b,
      onExit: t.onExit,
      onExited: t.onExited
    }, v("transition"));
    return /* @__PURE__ */ d.createElement($a, Xn({
      nodeRef: n
    }, ve), /* @__PURE__ */ d.createElement("div", Xn({
      ref: n
    }, W), t.firstFocusableElement, Y, q, oe, t.lastFocusableElement));
  }, H = S();
  return /* @__PURE__ */ d.createElement(Xr, {
    element: H,
    appendTo: t.appendTo
  });
}));
$c.displayName = "DropdownPanel";
function Rv(t, n) {
  var e = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!e) {
    if (Array.isArray(t) || (e = Nv(t)) || n) {
      e && (t = e);
      var a = 0, r = function() {
      };
      return { s: r, n: function() {
        return a >= t.length ? { done: !0 } : { done: !1, value: t[a++] };
      }, e: function(f) {
        throw f;
      }, f: r };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0, s = !1, i;
  return { s: function() {
    e = e.call(t);
  }, n: function() {
    var f = e.next();
    return o = f.done, f;
  }, e: function(f) {
    s = !0, i = f;
  }, f: function() {
    try {
      !o && e.return != null && e.return();
    } finally {
      if (s) throw i;
    }
  } };
}
function Nv(t, n) {
  if (t) {
    if (typeof t == "string") return Fs(t, n);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set") return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Fs(t, n);
  }
}
function Fs(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var e = 0, a = new Array(n); e < n; e++) a[e] = t[e];
  return a;
}
function $s(t, n) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    n && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function Un(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? $s(Object(e), !0).forEach(function(a) {
      Ho(t, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : $s(Object(e)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return t;
}
var Hc = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(t, n) {
  var e = cn(), a = d.useContext(Kt), r = so.getProps(t, a), o = d.useState(""), s = ca(o, 2), i = s[0], c = s[1], f = d.useState(!1), m = ca(f, 2), v = m[0], x = m[1], b = d.useState(-1), N = ca(b, 2), w = N[0], T = N[1], P = d.useState(!1), D = ca(P, 2), C = D[0], _ = D[1], E = d.useRef(!1), G = d.useRef(null), S = d.useRef(null), H = d.useRef(null), X = d.useRef(null), Y = d.useRef(r.inputRef), q = d.useRef(r.focusInputRef), oe = d.useRef(null), W = d.useRef(null), ve = d.useRef(null), ge = r.virtualScrollerOptions && r.virtualScrollerOptions.lazy, Ce = Q.isNotEmpty(i), Oe = r.appendTo || a && a.appendTo || Tt.appendTo, we = so.setMetaData(Un(Un({
    props: r
  }, r.__parentMetadata), {}, {
    state: {
      filter: i,
      focused: v,
      overlayVisible: C
    }
  })), de = we.ptm, F = we.cx, se = we.sx, ae = we.isUnstyled;
  qn(so.css.styles, ae, {
    name: "dropdown"
  });
  var M = hc({
    target: G,
    overlay: S,
    listener: function(y, ce) {
      var Ae = ce.type, at = ce.valid;
      at && (Ae === "outside" ? !Ee(y) && O() : O());
    },
    when: C
  }), j = ca(M, 2), B = j[0], Z = j[1], ie = function(y) {
    return (y || []).reduce(function(ce, Ae, at) {
      ce.push({
        optionGroup: Ae,
        group: !0,
        index: at,
        code: Ae.code,
        label: Ae.label
      });
      var qt = Pt(Ae);
      return qt && qt.forEach(function(Ft) {
        return ce.push(Ft);
      }), ce;
    }, []);
  }, K = function() {
    var y = r.optionGroupLabel ? ie(r.options) : r.options;
    if (Ce && !ge) {
      var ce = i.trim().toLocaleLowerCase(r.filterLocale), Ae = r.filterBy ? r.filterBy.split(",") : [r.optionLabel || "label"];
      if (r.optionGroupLabel) {
        var at = [], qt = Rv(r.options), Ft;
        try {
          for (qt.s(); !(Ft = qt.n()).done; ) {
            var Wa = Ft.value, ea = as.filter(Pt(Wa), Ae, ce, r.filterMatchMode, r.filterLocale);
            ea && ea.length && at.push(Un(Un({}, Wa), Ho({}, "".concat(r.optionGroupChildren), ea)));
          }
        } catch (Jo) {
          qt.e(Jo);
        } finally {
          qt.f();
        }
        return ie(at);
      }
      return as.filter(y, Ae, ce, r.filterMatchMode, r.filterLocale);
    }
    return y;
  }, z = function(y) {
    var ce = y.relatedTarget === q.current ? R.getFirstFocusableElement(S.current, ':not([data-p-hidden-focusable="true"])') : q.current;
    R.focus(ce);
  }, ee = function(y) {
    var ce = y.relatedTarget === q.current ? R.getLastFocusableElement(S.current, ':not([data-p-hidden-focusable="true"])') : q.current;
    R.focus(ce);
  }, Ee = function(y) {
    return R.isAttributeEquals(y.target, "data-pc-section", "clearicon") || R.isAttributeEquals(y.target.parentElement || y.target, "data-pc-section", "filterclearicon");
  }, te = function(y) {
    r.disabled || r.loading || (r.onClick && r.onClick(y), !y.defaultPrevented && (Ee(y) || y.target.tagName === "INPUT" || ((!S.current || !(S.current && S.current.contains(y.target))) && (R.focus(q.current), C ? O() : h()), E.current = !0)));
  }, _e = function(y) {
    r.showOnFocus && !C && h(), x(!0), r.onFocus && r.onFocus(y);
  }, Je = function(y) {
    x(!1), r.onBlur && setTimeout(function() {
      var ce = Y.current ? Y.current.value : void 0;
      r.onBlur({
        originalEvent: y.originalEvent,
        value: ce,
        stopPropagation: function() {
          y.originalEvent.stopPropagation();
        },
        preventDefault: function() {
          y.originalEvent.preventDefault();
        },
        target: {
          name: r.name,
          id: r.id,
          value: ce
        }
      });
    }, 200);
  }, Ye = function(y, ce) {
    var Ae = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, at = be(ce);
    Bt({
      originalEvent: y,
      option: at
    }), Ae && O();
  }, Me = function(y) {
    Hn.emit("overlay-click", {
      originalEvent: y,
      target: G.current
    });
  }, nt = function(y) {
    if (r.disabled) {
      y.preventDefault();
      return;
    }
    var ce = y.metaKey || y.ctrlKey, Ae = R.isAndroid() ? y.key : y.code;
    switch (Ae) {
      case "ArrowDown":
        re(y);
        break;
      case "ArrowUp":
        Pe(y);
        break;
      case "ArrowLeft":
      case "ArrowRight":
        Be(y, r.editable);
        break;
      case "Home":
        je(y);
        break;
      case "End":
        $e(y);
        break;
      case "PageDown":
        Nt(y);
        break;
      case "PageUp":
        ft(y);
        break;
      case "Space":
        rt(y, r.editable);
        break;
      case "NumpadEnter":
      case "Enter":
        Qe(y);
        break;
      case "Escape":
        et(y);
        break;
      case "Tab":
        it(y);
        break;
      case "Backspace":
        ht(y, r.editable);
        break;
      case "ShiftLeft":
      case "ShiftRight":
        break;
      default:
        !ce && Q.isPrintableCharacter(y.key) && (!C && !r.editable && h(), !r.editable && on(y, y.key));
        break;
    }
    E.current = !1;
  }, $t = function(y) {
    switch (y.code) {
      case "ArrowDown":
        re(y);
        break;
      case "ArrowUp":
        Pe(y);
        break;
      case "ArrowLeft":
      case "ArrowRight":
        Be(y, !0);
        break;
      case "Escape":
      case "Enter":
      case "NumpadEnter":
        Qe(y), y.preventDefault();
        break;
    }
  }, It = function() {
    return R.getFocusableElements(S.current, ':not([data-p-hidden-focusable="true"])').length > 0;
  }, Ze = function(y) {
    var ce;
    return Ct(y) && ((ce = he(y)) === null || ce === void 0 ? void 0 : ce.toLocaleLowerCase(r.filterLocale).startsWith(ve.current.toLocaleLowerCase(r.filterLocale)));
  }, Ct = function(y) {
    return Q.isNotEmpty(y) && !(Fe(y) || We(y));
  }, At = function() {
    return Q.isNotEmpty(r.value);
  }, St = function(y) {
    return Ct(y) && en(y);
  }, Ot = function() {
    return At ? Mt.findIndex(function(y) {
      return St(y);
    }) : -1;
  }, vt = function() {
    var y = Ot();
    return y < 0 ? Dt() : y;
  }, on = function(y, ce) {
    ve.current = (ve.current || "") + ce;
    var Ae = -1, at = !1;
    return Q.isNotEmpty(ve.current) && (w !== -1 ? (Ae = Mt.slice(w).findIndex(function(qt) {
      return Ze(qt);
    }), Ae = Ae === -1 ? Mt.slice(0, w).findIndex(function(qt) {
      return Ze(qt);
    }) : Ae + w) : Ae = Mt.findIndex(function(qt) {
      return Ze(qt);
    }), Ae !== -1 && (at = !0), Ae === -1 && w === -1 && (Ae = vt()), Ae !== -1 && _t(y, Ae)), W.current && clearTimeout(W.current), W.current = setTimeout(function() {
      ve.current = "", W.current = null;
    }, 500), at;
  }, mt = function() {
    var y = Ot();
    return y < 0 ? Rt() : y;
  }, Dt = function() {
    return Mt.findIndex(function(y) {
      return Ct(y);
    });
  }, Rt = function() {
    return Q.findLastIndex(Mt, function(y) {
      return Ct(y);
    });
  }, Ht = function(y) {
    var ce = y < Mt.length - 1 ? Mt.slice(y + 1).findIndex(function(Ae) {
      return Ct(Ae);
    }) : -1;
    return ce > -1 ? ce + y + 1 : y;
  }, jt = function(y) {
    var ce = y > 0 ? Q.findLastIndex(Mt.slice(0, y), function(Ae) {
      return Ct(Ae);
    }) : -1;
    return ce > -1 ? ce : y;
  }, _t = function(y, ce) {
    w !== ce && (T(ce), Le(ce), r.selectOnFocus && Ye(y, Mt[ce], !1));
  }, Le = function(y) {
    var ce = R.findSingle(S.current, 'li[id="dropdownItem_'.concat(y, '"]'));
    ce && ce.focus();
  }, re = function(y) {
    if (!C)
      h(), r.editable && _t(y, Ot());
    else {
      var ce = w !== -1 ? Ht(w) : E.current ? Dt() : vt();
      _t(y, ce);
    }
    y.preventDefault();
  }, Pe = function(y) {
    var ce = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (y.altKey && !ce)
      w !== -1 && Ye(y, Mt[w]), state.overlayVisible && O(), y.preventDefault();
    else {
      var Ae = w !== -1 ? jt(w) : E.current ? Rt() : mt();
      _t(y, Ae), !C && h(), y.preventDefault();
    }
  }, Be = function(y) {
    var ce = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    ce && T(-1);
  }, je = function(y) {
    var ce = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    ce ? (y.currentTarget.setSelectionRange(0, 0), T(-1)) : (_t(y, Dt()), !C && h()), y.preventDefault();
  }, $e = function(y) {
    var ce = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (ce) {
      var Ae = y.currentTarget, at = Ae.value.length;
      Ae.setSelectionRange(at, at), T(-1);
    } else
      _t(y, Rt()), !C && h();
    y.preventDefault();
  }, ft = function(y) {
    y.preventDefault();
  }, Nt = function(y) {
    y.preventDefault();
  }, rt = function(y) {
    var ce = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    !ce && Qe(y);
  }, Qe = function(y) {
    C ? (w !== -1 && Ye(y, Mt[w]), O()) : (T(-1), re(y)), y.preventDefault();
  }, et = function(y) {
    C && O(), y.preventDefault();
  }, it = function(y) {
    var ce = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    ce || (C && !It() ? (R.focus(H.current), y.preventDefault()) : (w !== -1 && Ye(y, Mt[w]), C && O()));
  }, ht = function(y) {
    var ce = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    y && ce && !C && h();
  }, Ie = function(y) {
    !C && h();
    var ce = null;
    y.target.value && Mt && (ce = Mt.findIndex(function(Ae) {
      return he(Ae).toLocaleLowerCase().startsWith(y.target.value.toLocaleLowerCase());
    })), T(ce), r.onChange && r.onChange({
      originalEvent: y.originalEvent,
      value: y.target.value,
      stopPropagation: function() {
        y.originalEvent.stopPropagation();
      },
      preventDefault: function() {
        y.originalEvent.preventDefault();
      },
      target: {
        name: r.name,
        id: r.id,
        value: y.target.value
      }
    });
  }, J = function(y) {
    x(!0), O(), r.onFocus && r.onFocus(y);
  }, fe = function(y) {
    var ce = y.option;
    ce.disabled || (Bt(y), R.focus(q.current)), O();
  }, pe = function(y) {
    var ce = y.target.value;
    c(ce), r.onFilter && r.onFilter({
      originalEvent: y,
      filter: ce
    });
  }, De = function(y) {
    lt(y);
  }, lt = function(y) {
    c(""), r.onFilter && r.onFilter({
      filter: ""
    }), y && y();
  }, wt = function(y) {
    r.onChange && r.onChange({
      originalEvent: y,
      value: void 0,
      stopPropagation: function() {
        y == null || y.stopPropagation();
      },
      preventDefault: function() {
        y == null || y.preventDefault();
      },
      target: {
        name: r.name,
        id: r.id,
        value: void 0
      }
    }), r.filter && lt(), me();
  }, Bt = function(y) {
    if (He !== y.option) {
      me(y.option), T(-1);
      var ce = be(y.option), Ae = Vt(y.option, Mt);
      r.onChange && r.onChange({
        originalEvent: y.originalEvent,
        value: ce,
        stopPropagation: function() {
          y.originalEvent.stopPropagation();
        },
        preventDefault: function() {
          y.originalEvent.preventDefault();
        },
        target: {
          name: r.name,
          id: r.id,
          value: ce
        }
      }), _t(y.originalEvent, Ae);
    }
  }, Qt = function(y) {
    if (y = y || Mt, r.value != null && y)
      if (r.optionGroupLabel)
        for (var ce = 0; ce < y.length; ce++) {
          var Ae = Vt(r.value, Pt(y[ce]));
          if (Ae !== -1)
            return {
              group: ce,
              option: Ae
            };
        }
      else
        return Vt(r.value, y);
    return -1;
  }, zt = function() {
    return r.optionValue ? null : r.dataKey;
  }, Vt = function(y, ce) {
    var Ae = zt();
    return ce.findIndex(function(at) {
      return Q.equals(y, be(at), Ae);
    });
  }, en = function(y) {
    return Q.equals(r.value, be(y), zt());
  }, h = function() {
    T(w !== -1 ? w : r.autoOptionFocus ? vt() : r.editable ? -1 : Ot()), _(!0);
  }, O = function() {
    _(!1), E.current = !1;
  }, ne = function() {
    r.editable && !C && E.current === !1 && R.focus(Y.current);
  }, xe = function(y) {
    hn.set("overlay", S.current, a && a.autoZIndex || Tt.autoZIndex, a && a.zIndex.overlay || Tt.zIndex.overlay), R.addStyles(S.current, {
      position: "absolute",
      top: "0",
      left: "0"
    }), V(), y && y();
  }, Re = function(y) {
    y && y(), B(), r.onShow && r.onShow();
  }, Se = function() {
    Z();
  }, $ = function() {
    r.filter && r.resetFilterOnHide && lt(), hn.clear(S.current), r.onHide && r.onHide();
  }, V = function() {
    R.alignOverlay(S.current, Y.current.parentElement, r.appendTo || a && a.appendTo || Tt.appendTo);
  }, ue = function() {
    var y = R.findSingle(S.current, 'li[data-p-focused="true"]');
    if (y && y.scrollIntoView)
      y.scrollIntoView({
        block: "nearest",
        inline: "nearest"
      });
    else {
      var ce = R.findSingle(S.current, 'li[data-p-highlight="true"]');
      ce && ce.scrollIntoView && ce.scrollIntoView({
        block: "nearest",
        inline: "nearest"
      });
    }
  }, me = function(y) {
    Y.current && (Y.current.value = y ? he(y) : r.value || "", q.current && (q.current.value = Y.current.value));
  }, he = function(y) {
    if (Q.isScalar(y))
      return "".concat(y);
    var ce = r.optionLabel ? Q.resolveFieldData(y, r.optionLabel) : y.label;
    return "".concat(ce);
  }, be = function(y) {
    if (r.useOptionAsValue)
      return y;
    var ce = r.optionValue ? Q.resolveFieldData(y, r.optionValue) : y ? y.value : Q.resolveFieldData(y, "value");
    return r.optionValue || Q.isNotEmpty(ce) ? ce : y;
  }, Te = function(y) {
    return r.dataKey ? Q.resolveFieldData(y, r.dataKey) : he(y);
  }, We = function(y) {
    return r.optionGroupLabel && y.optionGroup && y.group;
  }, Fe = function(y) {
    return r.optionDisabled ? Q.isFunction(r.optionDisabled) ? r.optionDisabled(y) : Q.resolveFieldData(y, r.optionDisabled) : y && y.disabled !== void 0 ? y.disabled : !1;
  }, gt = function(y) {
    return Q.resolveFieldData(y, r.optionGroupLabel);
  }, Lt = function(y) {
    return Q.resolveFieldData(y, r.optionGroupLabel);
  }, Pt = function(y) {
    return Q.resolveFieldData(y, r.optionGroupChildren);
  }, pt = function() {
    if (r.editable && Y.current) {
      var y = He ? he(He) : null, ce = y || r.value || "";
      Y.current.value = ce, q.current && (q.current.value = ce);
    }
  }, tt = function() {
    var y = Qt(r.options);
    return y !== -1 ? r.optionGroupLabel ? Pt(r.options[y.group])[y.option] : r.options[y] : null;
  };
  d.useImperativeHandle(n, function() {
    return {
      props: r,
      show: h,
      hide: O,
      clear: wt,
      focus: function() {
        return R.focus(q.current);
      },
      getElement: function() {
        return G.current;
      },
      getOverlay: function() {
        return S.current;
      },
      getInput: function() {
        return Y.current;
      },
      getFocusInput: function() {
        return q.current;
      },
      getVirtualScroller: function() {
        return oe.current;
      }
    };
  }), d.useEffect(function() {
    Q.combinedRefs(Y, r.inputRef), Q.combinedRefs(q, r.focusInputRef);
  }, [Y, r.inputRef, q, r.focusInputRef]), kn(function() {
    r.autoFocus && R.focus(q.current, r.autoFocus), V();
  }), dt(function() {
    C && (r.value || w >= 0) && ue();
  }, [C, r.value, w]), dt(function() {
    C && i && r.filter && V();
  }, [C, i, r.filter]), dt(function() {
    oe.current && oe.current.scrollInView(0);
  }, [i]), dt(function() {
    i && (!r.options || r.options.length === 0) && c(""), pt(), Y.current && (Y.current.selectedIndex = 1);
  }), An(function() {
    hn.clear(S.current);
  });
  var Ut = function() {
    var y = {
      value: "",
      label: r.placeholder
    };
    if (He) {
      var ce = be(He);
      y = {
        value: Ur(ce) === "object" ? r.options.findIndex(function(Ft) {
          return Ft === ce;
        }) : ce,
        label: he(He)
      };
    }
    var Ae = e({
      className: "p-hidden-accessible p-dropdown-hidden-select"
    }, de("hiddenSelectedMessage")), at = e({
      ref: Y,
      required: r.required,
      defaultValue: y.value,
      name: r.name,
      tabIndex: -1,
      "aria-hidden": "true"
    }, de("select")), qt = e({
      value: y.value
    }, de("option"));
    return /* @__PURE__ */ d.createElement("div", Ae, /* @__PURE__ */ d.createElement("select", at, /* @__PURE__ */ d.createElement("option", qt, y.label)));
  }, vn = function() {
    var y = Q.isNotEmpty(He) ? he(He) : null;
    r.editable && (y = y || r.value || "");
    var ce = e({
      className: "p-hidden-accessible"
    }, de("hiddenSelectedMessage")), Ae = e(Un({
      ref: q,
      id: r.inputId,
      defaultValue: y,
      type: "text",
      readOnly: !0,
      "aria-haspopup": "listbox",
      onFocus: _e,
      onBlur: Je,
      onKeyDown: nt,
      disabled: r.disabled,
      tabIndex: r.disabled ? -1 : r.tabIndex || 0
    }, _n), de("input"));
    return /* @__PURE__ */ d.createElement("div", ce, /* @__PURE__ */ d.createElement("input", Ae));
  }, jn = function() {
    var y = Q.isNotEmpty(He) ? he(He) : null;
    if (r.editable) {
      var ce = y || r.value || "", Ae = e(Un({
        ref: Y,
        type: "text",
        defaultValue: ce,
        className: F("input", {
          label: y
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
      }, _n), de("input"));
      return /* @__PURE__ */ d.createElement("input", Ae);
    }
    var at = r.valueTemplate ? Q.getJSXElement(r.valueTemplate, He, r) : y || r.placeholder || r.emptyMessage || /* @__PURE__ */ d.createElement(d.Fragment, null, " "), qt = e({
      ref: Y,
      className: F("input", {
        label: y
      }),
      tabIndex: "-1"
    }, de("input"));
    return /* @__PURE__ */ d.createElement("span", qt, at);
  }, Qn = function(y) {
    (y.key === "Enter" || y.code === "Space") && (wt(y), y.preventDefault());
  }, er = function() {
    if (r.value != null && r.showClear && !r.disabled && !Q.isEmpty(r.options)) {
      var y = e({
        className: F("clearIcon"),
        onPointerUp: wt,
        tabIndex: r.tabIndex || "0",
        onKeyDown: Qn,
        "aria-label": fn("clear")
      }, de("clearIcon")), ce = r.clearIcon || /* @__PURE__ */ d.createElement(Ha, y);
      return Wt.getJSXIcon(ce, Un({}, y), {
        props: r
      });
    }
    return null;
  }, tr = function() {
    var y = e({
      className: F("loadingIcon"),
      "data-pr-overlay-visible": C
    }, de("loadingIcon")), ce = r.loadingIcon || /* @__PURE__ */ d.createElement(Fo, {
      spin: !0
    }), Ae = Wt.getJSXIcon(ce, Un({}, y), {
      props: r
    }), at = r.placeholder || r.ariaLabel, qt = e({
      className: F("trigger"),
      role: "button",
      "aria-haspopup": "listbox",
      "aria-expanded": C,
      "aria-label": at
    }, de("trigger"));
    return /* @__PURE__ */ d.createElement("div", qt, Ae);
  }, nr = function() {
    var y = e({
      className: F("dropdownIcon"),
      "data-pr-overlay-visible": C
    }, de("dropdownIcon")), ce = C ? r.collapseIcon || /* @__PURE__ */ d.createElement(pl, y) : r.dropdownIcon || /* @__PURE__ */ d.createElement(jo, y), Ae = Wt.getJSXIcon(ce, Un({}, y), {
      props: r
    }), at = r.placeholder || r.ariaLabel, qt = e({
      className: F("trigger"),
      role: "button",
      "aria-haspopup": "listbox",
      "aria-expanded": C,
      "aria-label": at
    }, de("trigger"));
    return /* @__PURE__ */ d.createElement("div", qt, Ae);
  }, Mt = K(), He = tt(), xt = Q.isNotEmpty(r.tooltip), un = so.getOtherProps(r), _n = Q.reduceKeys(un, R.ARIA_PROPS), mn = Ut(), Sn = vn(), In = jn(), wn = r.loading ? tr() : nr(), Uo = er(), Ya = e({
    id: r.id,
    ref: G,
    className: qe(r.className, F("root", {
      context: a,
      focusedState: v,
      overlayVisibleState: C
    })),
    style: r.style,
    onClick: function(y) {
      return te(y);
    },
    onMouseDown: r.onMouseDown,
    onContextMenu: r.onContextMenu,
    onFocus: ne,
    "data-p-disabled": r.disabled,
    "data-p-focus": v,
    "aria-activedescendant": v ? "dropdownItem_".concat(w) : void 0
  }, un, de("root")), Go = e({
    ref: H,
    role: "presentation",
    "aria-hidden": "true",
    className: "p-hidden-accessible p-hidden-focusable",
    tabIndex: "0",
    onFocus: z,
    "data-p-hidden-accessible": !0,
    "data-p-hidden-focusable": !0
  }, de("hiddenFirstFocusableEl")), Xo = e({
    ref: X,
    role: "presentation",
    "aria-hidden": "true",
    className: "p-hidden-accessible p-hidden-focusable",
    tabIndex: "0",
    onFocus: ee,
    "data-p-hidden-accessible": !0,
    "data-p-hidden-focusable": !0
  }, de("hiddenLastFocusableEl"));
  return /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("div", Ya, Sn, mn, In, Uo, wn, /* @__PURE__ */ d.createElement($c, Xn({
    hostName: "Dropdown",
    ref: S,
    visibleOptions: Mt,
    virtualScrollerRef: oe
  }, r, {
    appendTo: Oe,
    cx: F,
    filterValue: i,
    focusedOptionIndex: w,
    getOptionGroupChildren: Pt,
    getOptionGroupLabel: Lt,
    getOptionGroupRenderKey: gt,
    getOptionLabel: he,
    getOptionRenderKey: Te,
    getSelectedOptionIndex: Qt,
    hasFilter: Ce,
    in: C,
    isOptionDisabled: Fe,
    isSelected: en,
    onClick: Me,
    onEnter: xe,
    onEntered: Re,
    onExit: Se,
    onExited: $,
    onFilterClearIconClick: De,
    onFilterInputChange: pe,
    onFilterInputKeyDown: $t,
    onOptionClick: fe,
    onInputKeyDown: nt,
    ptm: de,
    resetFilter: lt,
    changeFocusedOptionIndex: _t,
    firstFocusableElement: /* @__PURE__ */ d.createElement("span", Go),
    lastFocusableElement: /* @__PURE__ */ d.createElement("span", Xo),
    sx: se
  }))), xt && /* @__PURE__ */ d.createElement(Lo, Xn({
    target: G,
    content: r.tooltip,
    pt: de("tooltip")
  }, r.tooltipOptions)));
}));
Hc.displayName = "Dropdown";
const Dr = {
  id: Pr(),
  type: "select-select",
  label: "",
  value: "",
  options: [],
  placeholder: ""
}, Mv = ({ config: t, onChange: n }) => {
  const [e, a] = ct({ ...Dr, ...t });
  Xe(() => {
    a({ ...Dr, ...t });
  }, [t]);
  const r = (s) => {
    const i = { ...Dr, ...t, value: s.target.value };
    n(i);
  }, o = Math.random().toString(36).substring(2, 15);
  return /* @__PURE__ */ k.jsx(k.Fragment, { children: /* @__PURE__ */ k.jsxs("div", { className: "flex flex-column gap-2", children: [
    /* @__PURE__ */ k.jsx("label", { htmlFor: o, children: e.label }),
    /* @__PURE__ */ k.jsx(
      Hc,
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
}, Av = ({ option: t, onChange: n }) => {
  const [e, a] = ct(t), r = (o) => {
    const s = {
      value: e.value,
      label: e.label,
      [o.target.name]: o.target.value
    };
    a(s), n(s);
  };
  return Xe(() => {
    a(t);
  }, [t]), /* @__PURE__ */ k.jsx(k.Fragment, { children: /* @__PURE__ */ k.jsxs("div", { className: "flex flex-row gap-2", children: [
    /* @__PURE__ */ k.jsx(
      xn,
      {
        icon: "pi pi-sort",
        className: "px-0 border-noround border-0",
        style: { width: "1rem", color: "#E1E1E1", background: "transparent" },
        severity: "secondary",
        size: "small"
      }
    ),
    /* @__PURE__ */ k.jsxs("div", { className: "p-inputgroup flex-1", children: [
      /* @__PURE__ */ k.jsx(
        Zt,
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
      /* @__PURE__ */ k.jsx(
        Zt,
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
    /* @__PURE__ */ k.jsx(xn, { icon: "pi pi-trash", onClick: () => n(null) })
  ] }) });
}, jv = ({ onInsert: t }) => {
  const n = {
    value: "",
    label: ""
  }, [e, a] = ct(n), r = (s) => {
    const i = {
      value: e.value,
      label: e.label,
      [s.target.name]: s.target.value
    };
    a(i);
  }, o = () => {
    t({ value: e.value, label: e.label }), a(n);
  };
  return /* @__PURE__ */ k.jsx(k.Fragment, { children: /* @__PURE__ */ k.jsxs("div", { className: "flex flex-row gap-2", children: [
    /* @__PURE__ */ k.jsxs("div", { className: "p-inputgroup flex-1", children: [
      /* @__PURE__ */ k.jsx(
        Zt,
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
      /* @__PURE__ */ k.jsx(
        Zt,
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
    /* @__PURE__ */ k.jsx(
      xn,
      {
        icon: "pi pi-plus",
        onClick: o
      }
    )
  ] }) });
}, _v = ({ config: t, onChange: n }) => {
  const [e, a] = ct({ ...Dr, ...t }), r = (i) => {
    const c = { ...e, [i.target.name]: i.target.value };
    a(c), n(c);
  }, o = (i, c) => {
    const f = Ta(e.options);
    i ? f[c] = i : f.splice(c, 1), console.log(c, f);
    const m = { ...e, options: f };
    a(m), n(m);
  };
  Xe(() => {
    a({ ...Dr, ...t });
  }, [t]);
  const s = (i) => {
    const c = Ta(e.options);
    c.push(i);
    const f = { ...e, options: c };
    a(f), n(f);
  };
  return /* @__PURE__ */ k.jsx(k.Fragment, { children: /* @__PURE__ */ k.jsxs(vr, { activeIndex: 0, children: [
    /* @__PURE__ */ k.jsx(Jn, { header: "General", children: /* @__PURE__ */ k.jsxs("div", { className: "form-item flex flex-column gap-4", children: [
      /* @__PURE__ */ k.jsxs("div", { className: "flex flex-column gap-2", children: [
        /* @__PURE__ */ k.jsx("label", { htmlFor: "label", children: "Label" }),
        /* @__PURE__ */ k.jsx(
          Zt,
          {
            id: "label",
            value: e.label || "",
            name: "label",
            onChange: r,
            className: "w-full"
          }
        )
      ] }),
      /* @__PURE__ */ k.jsxs("div", { className: "flex flex-column gap-2", children: [
        /* @__PURE__ */ k.jsx("label", { htmlFor: "placeholder", children: "Placeholder" }),
        /* @__PURE__ */ k.jsx(
          Zt,
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
    /* @__PURE__ */ k.jsx(Jn, { header: "Options", children: /* @__PURE__ */ k.jsxs("div", { className: "form-item flex flex-column gap-4", children: [
      e.options.map((i, c) => /* @__PURE__ */ k.jsx(
        Av,
        {
          option: i,
          onChange: (f) => {
            o(f, c);
          }
        },
        `option-${c}`
      )),
      " ",
      /* @__PURE__ */ k.jsx(
        jv,
        {
          onInsert: s
        },
        "item-new"
      )
    ] }) }, "options")
  ] }) });
}, Lv = new La({
  type: Dr.type,
  form: new zn({
    render: Mv,
    validation: (t) => (console.log(t), {})
  }),
  settings: new zn({
    render: _v,
    validation: (t) => (console.log(t), {})
  }),
  heading: "Select box",
  description: "select from a list of items in a drop down",
  hidden: !1,
  icon: () => /* @__PURE__ */ k.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", children: /* @__PURE__ */ k.jsx("path", { d: "M384 432c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0zm64-16c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320zM224 352c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4l208 0c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7z" }) }),
  default_config: Dr
}), Fv = new Ro({
  label: "Selects"
}), Bc = new No();
Bc.registerItem(Lv, Fv);
function Wi() {
  return Wi = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = arguments[n];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    }
    return t;
  }, Wi.apply(this, arguments);
}
function qa(t) {
  "@babel/helpers - typeof";
  return qa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, qa(t);
}
function $v(t, n) {
  if (qa(t) !== "object" || t === null) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var a = e.call(t, n || "default");
    if (qa(a) !== "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(t);
}
function Hv(t) {
  var n = $v(t, "string");
  return qa(n) === "symbol" ? n : String(n);
}
function Bv(t, n, e) {
  return n = Hv(n), n in t ? Object.defineProperty(t, n, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[n] = e, t;
}
function zv(t) {
  if (Array.isArray(t)) return t;
}
function Kv(t, n) {
  var e = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (e != null) {
    var a, r, o, s, i = [], c = !0, f = !1;
    try {
      if (o = (e = e.call(t)).next, n !== 0) for (; !(c = (a = o.call(e)).done) && (i.push(a.value), i.length !== n); c = !0) ;
    } catch (m) {
      f = !0, r = m;
    } finally {
      try {
        if (!c && e.return != null && (s = e.return(), Object(s) !== s)) return;
      } finally {
        if (f) throw r;
      }
    }
    return i;
  }
}
function Hs(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var e = 0, a = new Array(n); e < n; e++) a[e] = t[e];
  return a;
}
function Vv(t, n) {
  if (t) {
    if (typeof t == "string") return Hs(t, n);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set") return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Hs(t, n);
  }
}
function Yv() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wv(t, n) {
  return zv(t) || Kv(t, n) || Vv(t, n) || Yv();
}
var Uv = {
  root: function(n) {
    var e = n.props;
    return qe("", e.className);
  },
  toolbar: "",
  content: ""
}, Gv = `
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
`, co = ot.extend({
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
    classes: Uv,
    styles: Gv
  }
});
function Bs(t, n) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    n && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function zs(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Bs(Object(e), !0).forEach(function(a) {
      Bv(t, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : Bs(Object(e)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return t;
}
var Xv = function() {
  try {
    return Quill;
  } catch {
    return null;
  }
}(), zc = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(t, n) {
  var e = cn(), a = d.useContext(Kt), r = co.getProps(t, a), o = co.setMetaData({
    props: r
  }), s = o.ptm, i = o.cx, c = o.isUnstyled;
  qn(co.css.styles, c, {
    name: "editor"
  });
  var f = d.useRef(null), m = d.useRef(null), v = d.useRef(null), x = d.useRef(null), b = d.useRef(!1), N = d.useState(!1), w = Wv(N, 2), T = w[0], P = w[1];
  kn(function() {
    if (!b.current) {
      var q = {
        modules: zs({
          toolbar: r.showHeader ? v.current : !1
        }, r.modules),
        placeholder: r.placeholder,
        readOnly: r.readOnly,
        theme: r.theme,
        formats: r.formats
      };
      Xv ? E(new Quill(m.current, q)) : import("quill").then(function(oe) {
        if (oe && R.isExist(m.current)) {
          var W;
          oe.default ? W = new oe.default(m.current, q) : W = new oe(m.current, q), E(W);
        }
      }), b.current = !0;
    }
  });
  var D = function(oe, W, ve) {
    var ge = m.current.children[0], Ce = ge ? ge.innerHTML : null, Oe = x.current.getText();
    if (Ce === "<p><br></p>" && (Ce = null), ve === "api") {
      var we = m.current.children[0], de = document.createElement("div");
      if (de.innerHTML = r.value || "", R.isEqualElement(we, de))
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
  }, C = function(oe, W, ve) {
    r.onSelectionChange && r.onSelectionChange({
      range: oe,
      oldRange: W,
      source: ve
    });
  }, _ = Et(r.value);
  _.current = r.value;
  var E = function(oe) {
    x.current = oe, _.current && oe.setContents(oe.clipboard.convert({
      html: _.current,
      text: ""
    })), P(!0);
  };
  dt(function() {
    if (T)
      return x.current.on("text-change", D), x.current.on("selection-change", C), function() {
        x.current.off("text-change", D), x.current.off("selection-change", C);
      };
  }), dt(function() {
    T && x.current && x.current.getModule("toolbar") && r.onLoad && r.onLoad(x.current);
  }, [T]), dt(function() {
    x.current && !x.current.hasFocus() && (r.value ? x.current.setContents(x.current.clipboard.convert({
      html: r.value,
      text: ""
    })) : x.current.setText(""));
  }, [r.value]), d.useImperativeHandle(n, function() {
    return {
      props: r,
      getQuill: function() {
        return x.current;
      },
      getElement: function() {
        return f.current;
      },
      getContent: function() {
        return m.current;
      },
      getToolbar: function() {
        return v.current;
      }
    };
  });
  var G = function() {
    var oe = e({
      ref: v,
      className: i("toolbar")
    }, s("toolbar"));
    if (r.showHeader === !1)
      return null;
    if (r.headerTemplate)
      return /* @__PURE__ */ d.createElement("div", oe, r.headerTemplate);
    var W = function(Ce, Oe) {
      return e(Ce && zs({}, Ce), s(Oe));
    }, ve = e({
      className: "ql-formats"
    }, s("formats"));
    return /* @__PURE__ */ d.createElement("div", oe, /* @__PURE__ */ d.createElement("span", ve, /* @__PURE__ */ d.createElement("select", W({
      className: "ql-header",
      defaultValue: "0"
    }, "header"), /* @__PURE__ */ d.createElement("option", W({
      value: "1"
    }, "option"), "Heading"), /* @__PURE__ */ d.createElement("option", W({
      value: "2"
    }, "option"), "Subheading"), /* @__PURE__ */ d.createElement("option", W({
      value: "0"
    }, "option"), "Normal")), /* @__PURE__ */ d.createElement("select", W({
      className: "ql-font"
    }, "font"), /* @__PURE__ */ d.createElement("option", W(void 0, "option")), /* @__PURE__ */ d.createElement("option", W({
      value: "serif"
    }, "option")), /* @__PURE__ */ d.createElement("option", W({
      value: "monospace"
    }, "option")))), /* @__PURE__ */ d.createElement("span", ve, /* @__PURE__ */ d.createElement("button", W({
      type: "button",
      className: "ql-bold",
      "aria-label": "Bold"
    }, "bold")), /* @__PURE__ */ d.createElement("button", W({
      type: "button",
      className: "ql-italic",
      "aria-label": "Italic"
    }, "italic")), /* @__PURE__ */ d.createElement("button", W({
      type: "button",
      className: "ql-underline",
      "aria-label": "Underline"
    }, "underline"))), /* @__PURE__ */ d.createElement("span", ve, /* @__PURE__ */ d.createElement("select", W({
      className: "ql-color"
    }, "color")), /* @__PURE__ */ d.createElement("select", W({
      className: "ql-background"
    }, "background"))), /* @__PURE__ */ d.createElement("span", ve, /* @__PURE__ */ d.createElement("button", W({
      type: "button",
      className: "ql-list",
      value: "ordered",
      "aria-label": "Ordered List"
    }, "list")), /* @__PURE__ */ d.createElement("button", W({
      type: "button",
      className: "ql-list",
      value: "bullet",
      "aria-label": "Unordered List"
    }, "list")), /* @__PURE__ */ d.createElement("select", W({
      className: "ql-align"
    }, "select"), /* @__PURE__ */ d.createElement("option", W({
      defaultValue: !0
    }, "option")), /* @__PURE__ */ d.createElement("option", W({
      value: "center"
    }, "option")), /* @__PURE__ */ d.createElement("option", W({
      value: "right"
    }, "option")), /* @__PURE__ */ d.createElement("option", W({
      value: "justify"
    }, "option")))), /* @__PURE__ */ d.createElement("span", ve, /* @__PURE__ */ d.createElement("button", W({
      type: "button",
      className: "ql-link",
      "aria-label": "Insert Link"
    }, "link")), /* @__PURE__ */ d.createElement("button", W({
      type: "button",
      className: "ql-image",
      "aria-label": "Insert Image"
    }, "image")), /* @__PURE__ */ d.createElement("button", W({
      type: "button",
      className: "ql-code-block",
      "aria-label": "Insert Code Block"
    }, "codeBlock"))), /* @__PURE__ */ d.createElement("span", ve, /* @__PURE__ */ d.createElement("button", W({
      type: "button",
      className: "ql-clean",
      "aria-label": "Remove Styles"
    }, "clean"))));
  }, S = G(), H = e({
    ref: m,
    className: i("content"),
    style: r.style
  }, s("content")), X = /* @__PURE__ */ d.createElement("div", H), Y = e({
    className: qe(r.className, i("root"))
  }, co.getOtherProps(r), s("root"));
  return /* @__PURE__ */ d.createElement("div", Wi({
    id: r.id,
    ref: f
  }, Y), S, X);
}));
zc.displayName = "Editor";
const Gr = {
  id: Pr(),
  type: "content-html",
  label: "",
  value: "",
  placeholder: ""
}, Jv = ({ config: t, onChange: n }) => {
  const [e, a] = ct({ ...Gr, ...t });
  Xe(() => {
    a({ ...Gr, ...t });
  }, [t]);
  const r = Math.random().toString(36).substring(2, 15);
  return /* @__PURE__ */ k.jsx(k.Fragment, { children: /* @__PURE__ */ k.jsxs("div", { className: "flex flex-column gap-2", children: [
    /* @__PURE__ */ k.jsx("label", { htmlFor: r, children: e.label }),
    /* @__PURE__ */ k.jsx("div", { dangerouslySetInnerHTML: { __html: e.value } })
  ] }) });
}, Zv = ({ config: t, onChange: n }) => {
  const [e, a] = ct({ ...Gr, ...t }), r = (s) => {
    const i = { ...e, [s.target.name]: s.target.value };
    a(i), n(i);
  }, o = (s) => {
    const i = { ...e, value: s };
    a(i), n(i);
  };
  return Xe(() => {
    a({ ...Gr, ...t });
  }, [t]), /* @__PURE__ */ k.jsx(k.Fragment, { children: /* @__PURE__ */ k.jsx(vr, { activeIndex: 0, children: /* @__PURE__ */ k.jsx(Jn, { header: "General", children: /* @__PURE__ */ k.jsxs("div", { className: "form-item flex flex-column gap-4", children: [
    /* @__PURE__ */ k.jsxs("div", { className: "flex flex-column gap-2", children: [
      /* @__PURE__ */ k.jsx("label", { htmlFor: "label", children: "Label" }),
      /* @__PURE__ */ k.jsx(
        Zt,
        {
          id: "label",
          value: e.label || "",
          name: "label",
          onChange: r,
          className: "w-full"
        }
      )
    ] }),
    /* @__PURE__ */ k.jsx(
      zc,
      {
        value: e.value,
        name: "value",
        onTextChange: (s) => o(s.htmlValue ?? ""),
        style: { minHeight: "300px" }
      }
    )
  ] }) }, "general") }) });
}, Qv = new La({
  type: Gr.type,
  form: new zn({
    render: Jv,
    validation: (t) => (console.log(t), {})
  }),
  settings: new zn({
    render: Zv,
    validation: (t) => (console.log(t), {})
  }),
  heading: "HTML Content",
  description: "WYSIWYG editor for adding in content to the form",
  hidden: !1,
  icon: () => /* @__PURE__ */ k.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 512", children: /* @__PURE__ */ k.jsx("path", { d: "M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" }) }),
  default_config: Gr
}), em = new Ro({
  label: "Content"
}), Kc = new No();
Kc.registerItem(Qv, em);
const Tr = new No();
Tr.addRegistry($o);
Tr.addRegistry(Bc);
Tr.addRegistry(Kc);
const Vc = ({ item: t, onChange: n }) => {
  const e = Tr.getByItem(t);
  return t && e ? ze.createElement(e.form.render, {
    config: t,
    onChange: n
  }) : ze.createElement(
    () => /* @__PURE__ */ k.jsxs("div", { children: [
      "The component ",
      t.type,
      " was not found."
    ] })
  );
};
function tm() {
  for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++)
    n[e] = arguments[e];
  return kt(
    () => (a) => {
      n.forEach((r) => r(a));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  );
}
const Bo = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Jr(t) {
  const n = Object.prototype.toString.call(t);
  return n === "[object Window]" || // In Electron context the Window object serializes to [object global]
  n === "[object global]";
}
function ml(t) {
  return "nodeType" in t;
}
function yn(t) {
  var n, e;
  return t ? Jr(t) ? t : ml(t) && (n = (e = t.ownerDocument) == null ? void 0 : e.defaultView) != null ? n : window : window;
}
function gl(t) {
  const {
    Document: n
  } = yn(t);
  return t instanceof n;
}
function Ba(t) {
  return Jr(t) ? !1 : t instanceof yn(t).HTMLElement;
}
function Yc(t) {
  return t instanceof yn(t).SVGElement;
}
function Zr(t) {
  return t ? Jr(t) ? t.document : ml(t) ? gl(t) ? t : Ba(t) || Yc(t) ? t.ownerDocument : document : document : document;
}
const Tn = Bo ? Pd : Xe;
function zo(t) {
  const n = Et(t);
  return Tn(() => {
    n.current = t;
  }), pn(function() {
    for (var e = arguments.length, a = new Array(e), r = 0; r < e; r++)
      a[r] = arguments[r];
    return n.current == null ? void 0 : n.current(...a);
  }, []);
}
function nm() {
  const t = Et(null), n = pn((a, r) => {
    t.current = setInterval(a, r);
  }, []), e = pn(() => {
    t.current !== null && (clearInterval(t.current), t.current = null);
  }, []);
  return [n, e];
}
function Ia(t, n) {
  n === void 0 && (n = [t]);
  const e = Et(t);
  return Tn(() => {
    e.current !== t && (e.current = t);
  }, n), e;
}
function za(t, n) {
  const e = Et();
  return kt(
    () => {
      const a = t(e.current);
      return e.current = a, a;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...n]
  );
}
function Do(t) {
  const n = zo(t), e = Et(null), a = pn(
    (r) => {
      r !== e.current && (n == null || n(r, e.current)), e.current = r;
    },
    //eslint-disable-next-line
    []
  );
  return [e, a];
}
function Po(t) {
  const n = Et();
  return Xe(() => {
    n.current = t;
  }, [t]), n.current;
}
let vi = {};
function Ka(t, n) {
  return kt(() => {
    if (n)
      return n;
    const e = vi[t] == null ? 0 : vi[t] + 1;
    return vi[t] = e, t + "-" + e;
  }, [t, n]);
}
function Wc(t) {
  return function(n) {
    for (var e = arguments.length, a = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
      a[r - 1] = arguments[r];
    return a.reduce((o, s) => {
      const i = Object.entries(s);
      for (const [c, f] of i) {
        const m = o[c];
        m != null && (o[c] = m + t * f);
      }
      return o;
    }, {
      ...n
    });
  };
}
const zr = /* @__PURE__ */ Wc(1), Ra = /* @__PURE__ */ Wc(-1);
function rm(t) {
  return "clientX" in t && "clientY" in t;
}
function Ko(t) {
  if (!t)
    return !1;
  const {
    KeyboardEvent: n
  } = yn(t.target);
  return n && t instanceof n;
}
function am(t) {
  if (!t)
    return !1;
  const {
    TouchEvent: n
  } = yn(t.target);
  return n && t instanceof n;
}
function To(t) {
  if (am(t)) {
    if (t.touches && t.touches.length) {
      const {
        clientX: n,
        clientY: e
      } = t.touches[0];
      return {
        x: n,
        y: e
      };
    } else if (t.changedTouches && t.changedTouches.length) {
      const {
        clientX: n,
        clientY: e
      } = t.changedTouches[0];
      return {
        x: n,
        y: e
      };
    }
  }
  return rm(t) ? {
    x: t.clientX,
    y: t.clientY
  } : null;
}
const Zn = /* @__PURE__ */ Object.freeze({
  Translate: {
    toString(t) {
      if (!t)
        return;
      const {
        x: n,
        y: e
      } = t;
      return "translate3d(" + (n ? Math.round(n) : 0) + "px, " + (e ? Math.round(e) : 0) + "px, 0)";
    }
  },
  Scale: {
    toString(t) {
      if (!t)
        return;
      const {
        scaleX: n,
        scaleY: e
      } = t;
      return "scaleX(" + n + ") scaleY(" + e + ")";
    }
  },
  Transform: {
    toString(t) {
      if (t)
        return [Zn.Translate.toString(t), Zn.Scale.toString(t)].join(" ");
    }
  },
  Transition: {
    toString(t) {
      let {
        property: n,
        duration: e,
        easing: a
      } = t;
      return n + " " + e + "ms " + a;
    }
  }
}), Ks = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function om(t) {
  return t.matches(Ks) ? t : t.querySelector(Ks);
}
const im = {
  display: "none"
};
function lm(t) {
  let {
    id: n,
    value: e
  } = t;
  return ze.createElement("div", {
    id: n,
    style: im
  }, e);
}
function sm(t) {
  let {
    id: n,
    announcement: e,
    ariaLiveType: a = "assertive"
  } = t;
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
    id: n,
    style: r,
    role: "status",
    "aria-live": a,
    "aria-atomic": !0
  }, e);
}
function cm() {
  const [t, n] = ct("");
  return {
    announce: pn((a) => {
      a != null && n(a);
    }, []),
    announcement: t
  };
}
const Uc = /* @__PURE__ */ _a(null);
function um(t) {
  const n = Bn(Uc);
  Xe(() => {
    if (!n)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return n(t);
  }, [t, n]);
}
function dm() {
  const [t] = ct(() => /* @__PURE__ */ new Set()), n = pn((a) => (t.add(a), () => t.delete(a)), [t]);
  return [pn((a) => {
    let {
      type: r,
      event: o
    } = a;
    t.forEach((s) => {
      var i;
      return (i = s[r]) == null ? void 0 : i.call(s, o);
    });
  }, [t]), n];
}
const fm = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, pm = {
  onDragStart(t) {
    let {
      active: n
    } = t;
    return "Picked up draggable item " + n.id + ".";
  },
  onDragOver(t) {
    let {
      active: n,
      over: e
    } = t;
    return e ? "Draggable item " + n.id + " was moved over droppable area " + e.id + "." : "Draggable item " + n.id + " is no longer over a droppable area.";
  },
  onDragEnd(t) {
    let {
      active: n,
      over: e
    } = t;
    return e ? "Draggable item " + n.id + " was dropped over droppable area " + e.id : "Draggable item " + n.id + " was dropped.";
  },
  onDragCancel(t) {
    let {
      active: n
    } = t;
    return "Dragging was cancelled. Draggable item " + n.id + " was dropped.";
  }
};
function vm(t) {
  let {
    announcements: n = pm,
    container: e,
    hiddenTextDescribedById: a,
    screenReaderInstructions: r = fm
  } = t;
  const {
    announce: o,
    announcement: s
  } = cm(), i = Ka("DndLiveRegion"), [c, f] = ct(!1);
  if (Xe(() => {
    f(!0);
  }, []), um(kt(() => ({
    onDragStart(v) {
      let {
        active: x
      } = v;
      o(n.onDragStart({
        active: x
      }));
    },
    onDragMove(v) {
      let {
        active: x,
        over: b
      } = v;
      n.onDragMove && o(n.onDragMove({
        active: x,
        over: b
      }));
    },
    onDragOver(v) {
      let {
        active: x,
        over: b
      } = v;
      o(n.onDragOver({
        active: x,
        over: b
      }));
    },
    onDragEnd(v) {
      let {
        active: x,
        over: b
      } = v;
      o(n.onDragEnd({
        active: x,
        over: b
      }));
    },
    onDragCancel(v) {
      let {
        active: x,
        over: b
      } = v;
      o(n.onDragCancel({
        active: x,
        over: b
      }));
    }
  }), [o, n])), !c)
    return null;
  const m = ze.createElement(ze.Fragment, null, ze.createElement(lm, {
    id: a,
    value: r.draggable
  }), ze.createElement(sm, {
    id: i,
    announcement: s
  }));
  return e ? Id(m, e) : m;
}
var Jt;
(function(t) {
  t.DragStart = "dragStart", t.DragMove = "dragMove", t.DragEnd = "dragEnd", t.DragCancel = "dragCancel", t.DragOver = "dragOver", t.RegisterDroppable = "registerDroppable", t.SetDroppableDisabled = "setDroppableDisabled", t.UnregisterDroppable = "unregisterDroppable";
})(Jt || (Jt = {}));
function ko() {
}
function Vs(t, n) {
  return kt(
    () => ({
      sensor: t,
      options: n ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t, n]
  );
}
function mm() {
  for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++)
    n[e] = arguments[e];
  return kt(
    () => [...n].filter((a) => a != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...n]
  );
}
const Mn = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function Gc(t, n) {
  return Math.sqrt(Math.pow(t.x - n.x, 2) + Math.pow(t.y - n.y, 2));
}
function gm(t, n) {
  const e = To(t);
  if (!e)
    return "0 0";
  const a = {
    x: (e.x - n.left) / n.width * 100,
    y: (e.y - n.top) / n.height * 100
  };
  return a.x + "% " + a.y + "%";
}
function Xc(t, n) {
  let {
    data: {
      value: e
    }
  } = t, {
    data: {
      value: a
    }
  } = n;
  return e - a;
}
function hm(t, n) {
  let {
    data: {
      value: e
    }
  } = t, {
    data: {
      value: a
    }
  } = n;
  return a - e;
}
function Ys(t) {
  let {
    left: n,
    top: e,
    height: a,
    width: r
  } = t;
  return [{
    x: n,
    y: e
  }, {
    x: n + r,
    y: e
  }, {
    x: n,
    y: e + a
  }, {
    x: n + r,
    y: e + a
  }];
}
function Jc(t, n) {
  if (!t || t.length === 0)
    return null;
  const [e] = t;
  return e[n];
}
function Ws(t, n, e) {
  return n === void 0 && (n = t.left), e === void 0 && (e = t.top), {
    x: n + t.width * 0.5,
    y: e + t.height * 0.5
  };
}
const bm = (t) => {
  let {
    collisionRect: n,
    droppableRects: e,
    droppableContainers: a
  } = t;
  const r = Ws(n, n.left, n.top), o = [];
  for (const s of a) {
    const {
      id: i
    } = s, c = e.get(i);
    if (c) {
      const f = Gc(Ws(c), r);
      o.push({
        id: i,
        data: {
          droppableContainer: s,
          value: f
        }
      });
    }
  }
  return o.sort(Xc);
}, ym = (t) => {
  let {
    collisionRect: n,
    droppableRects: e,
    droppableContainers: a
  } = t;
  const r = Ys(n), o = [];
  for (const s of a) {
    const {
      id: i
    } = s, c = e.get(i);
    if (c) {
      const f = Ys(c), m = r.reduce((x, b, N) => x + Gc(f[N], b), 0), v = Number((m / 4).toFixed(4));
      o.push({
        id: i,
        data: {
          droppableContainer: s,
          value: v
        }
      });
    }
  }
  return o.sort(Xc);
};
function wm(t, n) {
  const e = Math.max(n.top, t.top), a = Math.max(n.left, t.left), r = Math.min(n.left + n.width, t.left + t.width), o = Math.min(n.top + n.height, t.top + t.height), s = r - a, i = o - e;
  if (a < r && e < o) {
    const c = n.width * n.height, f = t.width * t.height, m = s * i, v = m / (c + f - m);
    return Number(v.toFixed(4));
  }
  return 0;
}
const xm = (t) => {
  let {
    collisionRect: n,
    droppableRects: e,
    droppableContainers: a
  } = t;
  const r = [];
  for (const o of a) {
    const {
      id: s
    } = o, i = e.get(s);
    if (i) {
      const c = wm(i, n);
      c > 0 && r.push({
        id: s,
        data: {
          droppableContainer: o,
          value: c
        }
      });
    }
  }
  return r.sort(hm);
};
function Sm(t, n, e) {
  return {
    ...t,
    scaleX: n && e ? n.width / e.width : 1,
    scaleY: n && e ? n.height / e.height : 1
  };
}
function Zc(t, n) {
  return t && n ? {
    x: t.left - n.left,
    y: t.top - n.top
  } : Mn;
}
function Em(t) {
  return function(e) {
    for (var a = arguments.length, r = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++)
      r[o - 1] = arguments[o];
    return r.reduce((s, i) => ({
      ...s,
      top: s.top + t * i.y,
      bottom: s.bottom + t * i.y,
      left: s.left + t * i.x,
      right: s.right + t * i.x
    }), {
      ...e
    });
  };
}
const Cm = /* @__PURE__ */ Em(1);
function Qc(t) {
  if (t.startsWith("matrix3d(")) {
    const n = t.slice(9, -1).split(/, /);
    return {
      x: +n[12],
      y: +n[13],
      scaleX: +n[0],
      scaleY: +n[5]
    };
  } else if (t.startsWith("matrix(")) {
    const n = t.slice(7, -1).split(/, /);
    return {
      x: +n[4],
      y: +n[5],
      scaleX: +n[0],
      scaleY: +n[3]
    };
  }
  return null;
}
function Om(t, n, e) {
  const a = Qc(n);
  if (!a)
    return t;
  const {
    scaleX: r,
    scaleY: o,
    x: s,
    y: i
  } = a, c = t.left - s - (1 - r) * parseFloat(e), f = t.top - i - (1 - o) * parseFloat(e.slice(e.indexOf(" ") + 1)), m = r ? t.width / r : t.width, v = o ? t.height / o : t.height;
  return {
    width: m,
    height: v,
    top: f,
    right: c + m,
    bottom: f + v,
    left: c
  };
}
const Dm = {
  ignoreTransform: !1
};
function Qr(t, n) {
  n === void 0 && (n = Dm);
  let e = t.getBoundingClientRect();
  if (n.ignoreTransform) {
    const {
      transform: f,
      transformOrigin: m
    } = yn(t).getComputedStyle(t);
    f && (e = Om(e, f, m));
  }
  const {
    top: a,
    left: r,
    width: o,
    height: s,
    bottom: i,
    right: c
  } = e;
  return {
    top: a,
    left: r,
    width: o,
    height: s,
    bottom: i,
    right: c
  };
}
function Us(t) {
  return Qr(t, {
    ignoreTransform: !0
  });
}
function Pm(t) {
  const n = t.innerWidth, e = t.innerHeight;
  return {
    top: 0,
    left: 0,
    right: n,
    bottom: e,
    width: n,
    height: e
  };
}
function Tm(t, n) {
  return n === void 0 && (n = yn(t).getComputedStyle(t)), n.position === "fixed";
}
function km(t, n) {
  n === void 0 && (n = yn(t).getComputedStyle(t));
  const e = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((r) => {
    const o = n[r];
    return typeof o == "string" ? e.test(o) : !1;
  });
}
function Vo(t, n) {
  const e = [];
  function a(r) {
    if (n != null && e.length >= n || !r)
      return e;
    if (gl(r) && r.scrollingElement != null && !e.includes(r.scrollingElement))
      return e.push(r.scrollingElement), e;
    if (!Ba(r) || Yc(r) || e.includes(r))
      return e;
    const o = yn(t).getComputedStyle(r);
    return r !== t && km(r, o) && e.push(r), Tm(r, o) ? e : a(r.parentNode);
  }
  return t ? a(t) : e;
}
function eu(t) {
  const [n] = Vo(t, 1);
  return n ?? null;
}
function mi(t) {
  return !Bo || !t ? null : Jr(t) ? t : ml(t) ? gl(t) || t === Zr(t).scrollingElement ? window : Ba(t) ? t : null : null;
}
function tu(t) {
  return Jr(t) ? t.scrollX : t.scrollLeft;
}
function nu(t) {
  return Jr(t) ? t.scrollY : t.scrollTop;
}
function Ui(t) {
  return {
    x: tu(t),
    y: nu(t)
  };
}
var rn;
(function(t) {
  t[t.Forward = 1] = "Forward", t[t.Backward = -1] = "Backward";
})(rn || (rn = {}));
function ru(t) {
  return !Bo || !t ? !1 : t === document.scrollingElement;
}
function au(t) {
  const n = {
    x: 0,
    y: 0
  }, e = ru(t) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: t.clientHeight,
    width: t.clientWidth
  }, a = {
    x: t.scrollWidth - e.width,
    y: t.scrollHeight - e.height
  }, r = t.scrollTop <= n.y, o = t.scrollLeft <= n.x, s = t.scrollTop >= a.y, i = t.scrollLeft >= a.x;
  return {
    isTop: r,
    isLeft: o,
    isBottom: s,
    isRight: i,
    maxScroll: a,
    minScroll: n
  };
}
const qm = {
  x: 0.2,
  y: 0.2
};
function Im(t, n, e, a, r) {
  let {
    top: o,
    left: s,
    right: i,
    bottom: c
  } = e;
  a === void 0 && (a = 10), r === void 0 && (r = qm);
  const {
    isTop: f,
    isBottom: m,
    isLeft: v,
    isRight: x
  } = au(t), b = {
    x: 0,
    y: 0
  }, N = {
    x: 0,
    y: 0
  }, w = {
    height: n.height * r.y,
    width: n.width * r.x
  };
  return !f && o <= n.top + w.height ? (b.y = rn.Backward, N.y = a * Math.abs((n.top + w.height - o) / w.height)) : !m && c >= n.bottom - w.height && (b.y = rn.Forward, N.y = a * Math.abs((n.bottom - w.height - c) / w.height)), !x && i >= n.right - w.width ? (b.x = rn.Forward, N.x = a * Math.abs((n.right - w.width - i) / w.width)) : !v && s <= n.left + w.width && (b.x = rn.Backward, N.x = a * Math.abs((n.left + w.width - s) / w.width)), {
    direction: b,
    speed: N
  };
}
function Rm(t) {
  if (t === document.scrollingElement) {
    const {
      innerWidth: o,
      innerHeight: s
    } = window;
    return {
      top: 0,
      left: 0,
      right: o,
      bottom: s,
      width: o,
      height: s
    };
  }
  const {
    top: n,
    left: e,
    right: a,
    bottom: r
  } = t.getBoundingClientRect();
  return {
    top: n,
    left: e,
    right: a,
    bottom: r,
    width: t.clientWidth,
    height: t.clientHeight
  };
}
function ou(t) {
  return t.reduce((n, e) => zr(n, Ui(e)), Mn);
}
function Nm(t) {
  return t.reduce((n, e) => n + tu(e), 0);
}
function Mm(t) {
  return t.reduce((n, e) => n + nu(e), 0);
}
function iu(t, n) {
  if (n === void 0 && (n = Qr), !t)
    return;
  const {
    top: e,
    left: a,
    bottom: r,
    right: o
  } = n(t);
  eu(t) && (r <= 0 || o <= 0 || e >= window.innerHeight || a >= window.innerWidth) && t.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const Am = [["x", ["left", "right"], Nm], ["y", ["top", "bottom"], Mm]];
class hl {
  constructor(n, e) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const a = Vo(e), r = ou(a);
    this.rect = {
      ...n
    }, this.width = n.width, this.height = n.height;
    for (const [o, s, i] of Am)
      for (const c of s)
        Object.defineProperty(this, c, {
          get: () => {
            const f = i(a), m = r[o] - f;
            return this.rect[c] + m;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class ma {
  constructor(n) {
    this.target = void 0, this.listeners = [], this.removeAll = () => {
      this.listeners.forEach((e) => {
        var a;
        return (a = this.target) == null ? void 0 : a.removeEventListener(...e);
      });
    }, this.target = n;
  }
  add(n, e, a) {
    var r;
    (r = this.target) == null || r.addEventListener(n, e, a), this.listeners.push([n, e, a]);
  }
}
function jm(t) {
  const {
    EventTarget: n
  } = yn(t);
  return t instanceof n ? t : Zr(t);
}
function gi(t, n) {
  const e = Math.abs(t.x), a = Math.abs(t.y);
  return typeof n == "number" ? Math.sqrt(e ** 2 + a ** 2) > n : "x" in n && "y" in n ? e > n.x && a > n.y : "x" in n ? e > n.x : "y" in n ? a > n.y : !1;
}
var Pn;
(function(t) {
  t.Click = "click", t.DragStart = "dragstart", t.Keydown = "keydown", t.ContextMenu = "contextmenu", t.Resize = "resize", t.SelectionChange = "selectionchange", t.VisibilityChange = "visibilitychange";
})(Pn || (Pn = {}));
function Gs(t) {
  t.preventDefault();
}
function _m(t) {
  t.stopPropagation();
}
var st;
(function(t) {
  t.Space = "Space", t.Down = "ArrowDown", t.Right = "ArrowRight", t.Left = "ArrowLeft", t.Up = "ArrowUp", t.Esc = "Escape", t.Enter = "Enter";
})(st || (st = {}));
const lu = {
  start: [st.Space, st.Enter],
  cancel: [st.Esc],
  end: [st.Space, st.Enter]
}, Lm = (t, n) => {
  let {
    currentCoordinates: e
  } = n;
  switch (t.code) {
    case st.Right:
      return {
        ...e,
        x: e.x + 25
      };
    case st.Left:
      return {
        ...e,
        x: e.x - 25
      };
    case st.Down:
      return {
        ...e,
        y: e.y + 25
      };
    case st.Up:
      return {
        ...e,
        y: e.y - 25
      };
  }
};
class bl {
  constructor(n) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = n;
    const {
      event: {
        target: e
      }
    } = n;
    this.props = n, this.listeners = new ma(Zr(e)), this.windowListeners = new ma(yn(e)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(Pn.Resize, this.handleCancel), this.windowListeners.add(Pn.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(Pn.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: n,
      onStart: e
    } = this.props, a = n.node.current;
    a && iu(a), e(Mn);
  }
  handleKeyDown(n) {
    if (Ko(n)) {
      const {
        active: e,
        context: a,
        options: r
      } = this.props, {
        keyboardCodes: o = lu,
        coordinateGetter: s = Lm,
        scrollBehavior: i = "smooth"
      } = r, {
        code: c
      } = n;
      if (o.end.includes(c)) {
        this.handleEnd(n);
        return;
      }
      if (o.cancel.includes(c)) {
        this.handleCancel(n);
        return;
      }
      const {
        collisionRect: f
      } = a.current, m = f ? {
        x: f.left,
        y: f.top
      } : Mn;
      this.referenceCoordinates || (this.referenceCoordinates = m);
      const v = s(n, {
        active: e,
        context: a.current,
        currentCoordinates: m
      });
      if (v) {
        const x = Ra(v, m), b = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: N
        } = a.current;
        for (const w of N) {
          const T = n.code, {
            isTop: P,
            isRight: D,
            isLeft: C,
            isBottom: _,
            maxScroll: E,
            minScroll: G
          } = au(w), S = Rm(w), H = {
            x: Math.min(T === st.Right ? S.right - S.width / 2 : S.right, Math.max(T === st.Right ? S.left : S.left + S.width / 2, v.x)),
            y: Math.min(T === st.Down ? S.bottom - S.height / 2 : S.bottom, Math.max(T === st.Down ? S.top : S.top + S.height / 2, v.y))
          }, X = T === st.Right && !D || T === st.Left && !C, Y = T === st.Down && !_ || T === st.Up && !P;
          if (X && H.x !== v.x) {
            const q = w.scrollLeft + x.x, oe = T === st.Right && q <= E.x || T === st.Left && q >= G.x;
            if (oe && !x.y) {
              w.scrollTo({
                left: q,
                behavior: i
              });
              return;
            }
            oe ? b.x = w.scrollLeft - q : b.x = T === st.Right ? w.scrollLeft - E.x : w.scrollLeft - G.x, b.x && w.scrollBy({
              left: -b.x,
              behavior: i
            });
            break;
          } else if (Y && H.y !== v.y) {
            const q = w.scrollTop + x.y, oe = T === st.Down && q <= E.y || T === st.Up && q >= G.y;
            if (oe && !x.x) {
              w.scrollTo({
                top: q,
                behavior: i
              });
              return;
            }
            oe ? b.y = w.scrollTop - q : b.y = T === st.Down ? w.scrollTop - E.y : w.scrollTop - G.y, b.y && w.scrollBy({
              top: -b.y,
              behavior: i
            });
            break;
          }
        }
        this.handleMove(n, zr(Ra(v, this.referenceCoordinates), b));
      }
    }
  }
  handleMove(n, e) {
    const {
      onMove: a
    } = this.props;
    n.preventDefault(), a(e);
  }
  handleEnd(n) {
    const {
      onEnd: e
    } = this.props;
    n.preventDefault(), this.detach(), e();
  }
  handleCancel(n) {
    const {
      onCancel: e
    } = this.props;
    n.preventDefault(), this.detach(), e();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll();
  }
}
bl.activators = [{
  eventName: "onKeyDown",
  handler: (t, n, e) => {
    let {
      keyboardCodes: a = lu,
      onActivation: r
    } = n, {
      active: o
    } = e;
    const {
      code: s
    } = t.nativeEvent;
    if (a.start.includes(s)) {
      const i = o.activatorNode.current;
      return i && t.target !== i ? !1 : (t.preventDefault(), r == null || r({
        event: t.nativeEvent
      }), !0);
    }
    return !1;
  }
}];
function Xs(t) {
  return !!(t && "distance" in t);
}
function Js(t) {
  return !!(t && "delay" in t);
}
class yl {
  constructor(n, e, a) {
    var r;
    a === void 0 && (a = jm(n.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = n, this.events = e;
    const {
      event: o
    } = n, {
      target: s
    } = o;
    this.props = n, this.events = e, this.document = Zr(s), this.documentListeners = new ma(this.document), this.listeners = new ma(a), this.windowListeners = new ma(yn(s)), this.initialCoordinates = (r = To(o)) != null ? r : Mn, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
  }
  attach() {
    const {
      events: n,
      props: {
        options: {
          activationConstraint: e,
          bypassActivationConstraint: a
        }
      }
    } = this;
    if (this.listeners.add(n.move.name, this.handleMove, {
      passive: !1
    }), this.listeners.add(n.end.name, this.handleEnd), this.windowListeners.add(Pn.Resize, this.handleCancel), this.windowListeners.add(Pn.DragStart, Gs), this.windowListeners.add(Pn.VisibilityChange, this.handleCancel), this.windowListeners.add(Pn.ContextMenu, Gs), this.documentListeners.add(Pn.Keydown, this.handleKeydown), e) {
      if (a != null && a({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (Js(e)) {
        this.timeoutId = setTimeout(this.handleStart, e.delay);
        return;
      }
      if (Xs(e))
        return;
    }
    this.handleStart();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll(), setTimeout(this.documentListeners.removeAll, 50), this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null);
  }
  handleStart() {
    const {
      initialCoordinates: n
    } = this, {
      onStart: e
    } = this.props;
    n && (this.activated = !0, this.documentListeners.add(Pn.Click, _m, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(Pn.SelectionChange, this.removeTextSelection), e(n));
  }
  handleMove(n) {
    var e;
    const {
      activated: a,
      initialCoordinates: r,
      props: o
    } = this, {
      onMove: s,
      options: {
        activationConstraint: i
      }
    } = o;
    if (!r)
      return;
    const c = (e = To(n)) != null ? e : Mn, f = Ra(r, c);
    if (!a && i) {
      if (Xs(i)) {
        if (i.tolerance != null && gi(f, i.tolerance))
          return this.handleCancel();
        if (gi(f, i.distance))
          return this.handleStart();
      }
      return Js(i) && gi(f, i.tolerance) ? this.handleCancel() : void 0;
    }
    n.cancelable && n.preventDefault(), s(c);
  }
  handleEnd() {
    const {
      onEnd: n
    } = this.props;
    this.detach(), n();
  }
  handleCancel() {
    const {
      onCancel: n
    } = this.props;
    this.detach(), n();
  }
  handleKeydown(n) {
    n.code === st.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var n;
    (n = this.document.getSelection()) == null || n.removeAllRanges();
  }
}
const Fm = {
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};
class wl extends yl {
  constructor(n) {
    const {
      event: e
    } = n, a = Zr(e.target);
    super(n, Fm, a);
  }
}
wl.activators = [{
  eventName: "onPointerDown",
  handler: (t, n) => {
    let {
      nativeEvent: e
    } = t, {
      onActivation: a
    } = n;
    return !e.isPrimary || e.button !== 0 ? !1 : (a == null || a({
      event: e
    }), !0);
  }
}];
const $m = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var Gi;
(function(t) {
  t[t.RightClick = 2] = "RightClick";
})(Gi || (Gi = {}));
class Hm extends yl {
  constructor(n) {
    super(n, $m, Zr(n.event.target));
  }
}
Hm.activators = [{
  eventName: "onMouseDown",
  handler: (t, n) => {
    let {
      nativeEvent: e
    } = t, {
      onActivation: a
    } = n;
    return e.button === Gi.RightClick ? !1 : (a == null || a({
      event: e
    }), !0);
  }
}];
const hi = {
  move: {
    name: "touchmove"
  },
  end: {
    name: "touchend"
  }
};
class Bm extends yl {
  constructor(n) {
    super(n, hi);
  }
  static setup() {
    return window.addEventListener(hi.move.name, n, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(hi.move.name, n);
    };
    function n() {
    }
  }
}
Bm.activators = [{
  eventName: "onTouchStart",
  handler: (t, n) => {
    let {
      nativeEvent: e
    } = t, {
      onActivation: a
    } = n;
    const {
      touches: r
    } = e;
    return r.length > 1 ? !1 : (a == null || a({
      event: e
    }), !0);
  }
}];
var ga;
(function(t) {
  t[t.Pointer = 0] = "Pointer", t[t.DraggableRect = 1] = "DraggableRect";
})(ga || (ga = {}));
var qo;
(function(t) {
  t[t.TreeOrder = 0] = "TreeOrder", t[t.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(qo || (qo = {}));
function zm(t) {
  let {
    acceleration: n,
    activator: e = ga.Pointer,
    canScroll: a,
    draggingRect: r,
    enabled: o,
    interval: s = 5,
    order: i = qo.TreeOrder,
    pointerCoordinates: c,
    scrollableAncestors: f,
    scrollableAncestorRects: m,
    delta: v,
    threshold: x
  } = t;
  const b = Vm({
    delta: v,
    disabled: !o
  }), [N, w] = nm(), T = Et({
    x: 0,
    y: 0
  }), P = Et({
    x: 0,
    y: 0
  }), D = kt(() => {
    switch (e) {
      case ga.Pointer:
        return c ? {
          top: c.y,
          bottom: c.y,
          left: c.x,
          right: c.x
        } : null;
      case ga.DraggableRect:
        return r;
    }
  }, [e, r, c]), C = Et(null), _ = pn(() => {
    const G = C.current;
    if (!G)
      return;
    const S = T.current.x * P.current.x, H = T.current.y * P.current.y;
    G.scrollBy(S, H);
  }, []), E = kt(() => i === qo.TreeOrder ? [...f].reverse() : f, [i, f]);
  Xe(
    () => {
      if (!o || !f.length || !D) {
        w();
        return;
      }
      for (const G of E) {
        if ((a == null ? void 0 : a(G)) === !1)
          continue;
        const S = f.indexOf(G), H = m[S];
        if (!H)
          continue;
        const {
          direction: X,
          speed: Y
        } = Im(G, H, D, n, x);
        for (const q of ["x", "y"])
          b[q][X[q]] || (Y[q] = 0, X[q] = 0);
        if (Y.x > 0 || Y.y > 0) {
          w(), C.current = G, N(_, s), T.current = Y, P.current = X;
          return;
        }
      }
      T.current = {
        x: 0,
        y: 0
      }, P.current = {
        x: 0,
        y: 0
      }, w();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      n,
      _,
      a,
      w,
      o,
      s,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(D),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(b),
      N,
      f,
      E,
      m,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(x)
    ]
  );
}
const Km = {
  x: {
    [rn.Backward]: !1,
    [rn.Forward]: !1
  },
  y: {
    [rn.Backward]: !1,
    [rn.Forward]: !1
  }
};
function Vm(t) {
  let {
    delta: n,
    disabled: e
  } = t;
  const a = Po(n);
  return za((r) => {
    if (e || !a || !r)
      return Km;
    const o = {
      x: Math.sign(n.x - a.x),
      y: Math.sign(n.y - a.y)
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
  }, [e, n, a]);
}
function Ym(t, n) {
  const e = n !== null ? t.get(n) : void 0, a = e ? e.node.current : null;
  return za((r) => {
    var o;
    return n === null ? null : (o = a ?? r) != null ? o : null;
  }, [a, n]);
}
function Wm(t, n) {
  return kt(() => t.reduce((e, a) => {
    const {
      sensor: r
    } = a, o = r.activators.map((s) => ({
      eventName: s.eventName,
      handler: n(s.handler, a)
    }));
    return [...e, ...o];
  }, []), [t, n]);
}
var Na;
(function(t) {
  t[t.Always = 0] = "Always", t[t.BeforeDragging = 1] = "BeforeDragging", t[t.WhileDragging = 2] = "WhileDragging";
})(Na || (Na = {}));
var Xi;
(function(t) {
  t.Optimized = "optimized";
})(Xi || (Xi = {}));
const Zs = /* @__PURE__ */ new Map();
function Um(t, n) {
  let {
    dragging: e,
    dependencies: a,
    config: r
  } = n;
  const [o, s] = ct(null), {
    frequency: i,
    measure: c,
    strategy: f
  } = r, m = Et(t), v = T(), x = Ia(v), b = pn(function(P) {
    P === void 0 && (P = []), !x.current && s((D) => D === null ? P : D.concat(P.filter((C) => !D.includes(C))));
  }, [x]), N = Et(null), w = za((P) => {
    if (v && !e)
      return Zs;
    if (!P || P === Zs || m.current !== t || o != null) {
      const D = /* @__PURE__ */ new Map();
      for (let C of t) {
        if (!C)
          continue;
        if (o && o.length > 0 && !o.includes(C.id) && C.rect.current) {
          D.set(C.id, C.rect.current);
          continue;
        }
        const _ = C.node.current, E = _ ? new hl(c(_), _) : null;
        C.rect.current = E, E && D.set(C.id, E);
      }
      return D;
    }
    return P;
  }, [t, o, e, v, c]);
  return Xe(() => {
    m.current = t;
  }, [t]), Xe(
    () => {
      v || b();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, v]
  ), Xe(
    () => {
      o && o.length > 0 && s(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(o)]
  ), Xe(
    () => {
      v || typeof i != "number" || N.current !== null || (N.current = setTimeout(() => {
        b(), N.current = null;
      }, i));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i, v, b, ...a]
  ), {
    droppableRects: w,
    measureDroppableContainers: b,
    measuringScheduled: o != null
  };
  function T() {
    switch (f) {
      case Na.Always:
        return !1;
      case Na.BeforeDragging:
        return e;
      default:
        return !e;
    }
  }
}
function xl(t, n) {
  return za((e) => t ? e || (typeof n == "function" ? n(t) : t) : null, [n, t]);
}
function Gm(t, n) {
  return xl(t, n);
}
function Xm(t) {
  let {
    callback: n,
    disabled: e
  } = t;
  const a = zo(n), r = kt(() => {
    if (e || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: o
    } = window;
    return new o(a);
  }, [a, e]);
  return Xe(() => () => r == null ? void 0 : r.disconnect(), [r]), r;
}
function Yo(t) {
  let {
    callback: n,
    disabled: e
  } = t;
  const a = zo(n), r = kt(
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
  return Xe(() => () => r == null ? void 0 : r.disconnect(), [r]), r;
}
function Jm(t) {
  return new hl(Qr(t), t);
}
function Qs(t, n, e) {
  n === void 0 && (n = Jm);
  const [a, r] = al(i, null), o = Xm({
    callback(c) {
      if (t)
        for (const f of c) {
          const {
            type: m,
            target: v
          } = f;
          if (m === "childList" && v instanceof HTMLElement && v.contains(t)) {
            r();
            break;
          }
        }
    }
  }), s = Yo({
    callback: r
  });
  return Tn(() => {
    r(), t ? (s == null || s.observe(t), o == null || o.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (s == null || s.disconnect(), o == null || o.disconnect());
  }, [t]), a;
  function i(c) {
    if (!t)
      return null;
    if (t.isConnected === !1) {
      var f;
      return (f = c ?? e) != null ? f : null;
    }
    const m = n(t);
    return JSON.stringify(c) === JSON.stringify(m) ? c : m;
  }
}
function Zm(t) {
  const n = xl(t);
  return Zc(t, n);
}
const ec = [];
function Qm(t) {
  const n = Et(t), e = za((a) => t ? a && a !== ec && t && n.current && t.parentNode === n.current.parentNode ? a : Vo(t) : ec, [t]);
  return Xe(() => {
    n.current = t;
  }, [t]), e;
}
function eg(t) {
  const [n, e] = ct(null), a = Et(t), r = pn((o) => {
    const s = mi(o.target);
    s && e((i) => i ? (i.set(s, Ui(s)), new Map(i)) : null);
  }, []);
  return Xe(() => {
    const o = a.current;
    if (t !== o) {
      s(o);
      const i = t.map((c) => {
        const f = mi(c);
        return f ? (f.addEventListener("scroll", r, {
          passive: !0
        }), [f, Ui(f)]) : null;
      }).filter((c) => c != null);
      e(i.length ? new Map(i) : null), a.current = t;
    }
    return () => {
      s(t), s(o);
    };
    function s(i) {
      i.forEach((c) => {
        const f = mi(c);
        f == null || f.removeEventListener("scroll", r);
      });
    }
  }, [r, t]), kt(() => t.length ? n ? Array.from(n.values()).reduce((o, s) => zr(o, s), Mn) : ou(t) : Mn, [t, n]);
}
function tc(t, n) {
  n === void 0 && (n = []);
  const e = Et(null);
  return Xe(
    () => {
      e.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  ), Xe(() => {
    const a = t !== Mn;
    a && !e.current && (e.current = t), !a && e.current && (e.current = null);
  }, [t]), e.current ? Ra(t, e.current) : Mn;
}
function tg(t) {
  Xe(
    () => {
      if (!Bo)
        return;
      const n = t.map((e) => {
        let {
          sensor: a
        } = e;
        return a.setup == null ? void 0 : a.setup();
      });
      return () => {
        for (const e of n)
          e == null || e();
      };
    },
    // TO-DO: Sensors length could theoretically change which would not be a valid dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t.map((n) => {
      let {
        sensor: e
      } = n;
      return e;
    })
  );
}
function ng(t, n) {
  return kt(() => t.reduce((e, a) => {
    let {
      eventName: r,
      handler: o
    } = a;
    return e[r] = (s) => {
      o(s, n);
    }, e;
  }, {}), [t, n]);
}
function su(t) {
  return kt(() => t ? Pm(t) : null, [t]);
}
const bi = [];
function rg(t, n) {
  n === void 0 && (n = Qr);
  const [e] = t, a = su(e ? yn(e) : null), [r, o] = al(i, bi), s = Yo({
    callback: o
  });
  return t.length > 0 && r === bi && o(), Tn(() => {
    t.length ? t.forEach((c) => s == null ? void 0 : s.observe(c)) : (s == null || s.disconnect(), o());
  }, [t]), r;
  function i() {
    return t.length ? t.map((c) => ru(c) ? a : new hl(n(c), c)) : bi;
  }
}
function cu(t) {
  if (!t)
    return null;
  if (t.children.length > 1)
    return t;
  const n = t.children[0];
  return Ba(n) ? n : t;
}
function ag(t) {
  let {
    measure: n
  } = t;
  const [e, a] = ct(null), r = pn((f) => {
    for (const {
      target: m
    } of f)
      if (Ba(m)) {
        a((v) => {
          const x = n(m);
          return v ? {
            ...v,
            width: x.width,
            height: x.height
          } : x;
        });
        break;
      }
  }, [n]), o = Yo({
    callback: r
  }), s = pn((f) => {
    const m = cu(f);
    o == null || o.disconnect(), m && (o == null || o.observe(m)), a(m ? n(m) : null);
  }, [n, o]), [i, c] = Do(s);
  return kt(() => ({
    nodeRef: i,
    rect: e,
    setRef: c
  }), [e, i, c]);
}
const og = [{
  sensor: wl,
  options: {}
}, {
  sensor: bl,
  options: {}
}], ig = {
  current: {}
}, yo = {
  draggable: {
    measure: Us
  },
  droppable: {
    measure: Us,
    strategy: Na.WhileDragging,
    frequency: Xi.Optimized
  },
  dragOverlay: {
    measure: Qr
  }
};
class ha extends Map {
  get(n) {
    var e;
    return n != null && (e = super.get(n)) != null ? e : void 0;
  }
  toArray() {
    return Array.from(this.values());
  }
  getEnabled() {
    return this.toArray().filter((n) => {
      let {
        disabled: e
      } = n;
      return !e;
    });
  }
  getNodeFor(n) {
    var e, a;
    return (e = (a = this.get(n)) == null ? void 0 : a.node.current) != null ? e : void 0;
  }
}
const lg = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new ha(),
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
  measuringConfiguration: yo,
  measureDroppableContainers: ko,
  windowRect: null,
  measuringScheduled: !1
}, uu = {
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
}, Va = /* @__PURE__ */ _a(uu), du = /* @__PURE__ */ _a(lg);
function sg() {
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
      containers: new ha()
    }
  };
}
function cg(t, n) {
  switch (n.type) {
    case Jt.DragStart:
      return {
        ...t,
        draggable: {
          ...t.draggable,
          initialCoordinates: n.initialCoordinates,
          active: n.active
        }
      };
    case Jt.DragMove:
      return t.draggable.active ? {
        ...t,
        draggable: {
          ...t.draggable,
          translate: {
            x: n.coordinates.x - t.draggable.initialCoordinates.x,
            y: n.coordinates.y - t.draggable.initialCoordinates.y
          }
        }
      } : t;
    case Jt.DragEnd:
    case Jt.DragCancel:
      return {
        ...t,
        draggable: {
          ...t.draggable,
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
    case Jt.RegisterDroppable: {
      const {
        element: e
      } = n, {
        id: a
      } = e, r = new ha(t.droppable.containers);
      return r.set(a, e), {
        ...t,
        droppable: {
          ...t.droppable,
          containers: r
        }
      };
    }
    case Jt.SetDroppableDisabled: {
      const {
        id: e,
        key: a,
        disabled: r
      } = n, o = t.droppable.containers.get(e);
      if (!o || a !== o.key)
        return t;
      const s = new ha(t.droppable.containers);
      return s.set(e, {
        ...o,
        disabled: r
      }), {
        ...t,
        droppable: {
          ...t.droppable,
          containers: s
        }
      };
    }
    case Jt.UnregisterDroppable: {
      const {
        id: e,
        key: a
      } = n, r = t.droppable.containers.get(e);
      if (!r || a !== r.key)
        return t;
      const o = new ha(t.droppable.containers);
      return o.delete(e), {
        ...t,
        droppable: {
          ...t.droppable,
          containers: o
        }
      };
    }
    default:
      return t;
  }
}
function ug(t) {
  let {
    disabled: n
  } = t;
  const {
    active: e,
    activatorEvent: a,
    draggableNodes: r
  } = Bn(Va), o = Po(a), s = Po(e == null ? void 0 : e.id);
  return Xe(() => {
    if (!n && !a && o && s != null) {
      if (!Ko(o) || document.activeElement === o.target)
        return;
      const i = r.get(s);
      if (!i)
        return;
      const {
        activatorNode: c,
        node: f
      } = i;
      if (!c.current && !f.current)
        return;
      requestAnimationFrame(() => {
        for (const m of [c.current, f.current]) {
          if (!m)
            continue;
          const v = om(m);
          if (v) {
            v.focus();
            break;
          }
        }
      });
    }
  }, [a, n, r, s, o]), null;
}
function fu(t, n) {
  let {
    transform: e,
    ...a
  } = n;
  return t != null && t.length ? t.reduce((r, o) => o({
    transform: r,
    ...a
  }), e) : e;
}
function dg(t) {
  return kt(
    () => ({
      draggable: {
        ...yo.draggable,
        ...t == null ? void 0 : t.draggable
      },
      droppable: {
        ...yo.droppable,
        ...t == null ? void 0 : t.droppable
      },
      dragOverlay: {
        ...yo.dragOverlay,
        ...t == null ? void 0 : t.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t == null ? void 0 : t.draggable, t == null ? void 0 : t.droppable, t == null ? void 0 : t.dragOverlay]
  );
}
function fg(t) {
  let {
    activeNode: n,
    measure: e,
    initialRect: a,
    config: r = !0
  } = t;
  const o = Et(!1), {
    x: s,
    y: i
  } = typeof r == "boolean" ? {
    x: r,
    y: r
  } : r;
  Tn(() => {
    if (!s && !i || !n) {
      o.current = !1;
      return;
    }
    if (o.current || !a)
      return;
    const f = n == null ? void 0 : n.node.current;
    if (!f || f.isConnected === !1)
      return;
    const m = e(f), v = Zc(m, a);
    if (s || (v.x = 0), i || (v.y = 0), o.current = !0, Math.abs(v.x) > 0 || Math.abs(v.y) > 0) {
      const x = eu(f);
      x && x.scrollBy({
        top: v.y,
        left: v.x
      });
    }
  }, [n, s, i, a, e]);
}
const Wo = /* @__PURE__ */ _a({
  ...Mn,
  scaleX: 1,
  scaleY: 1
});
var ur;
(function(t) {
  t[t.Uninitialized = 0] = "Uninitialized", t[t.Initializing = 1] = "Initializing", t[t.Initialized = 2] = "Initialized";
})(ur || (ur = {}));
const pg = /* @__PURE__ */ Td(function(n) {
  var e, a, r, o;
  let {
    id: s,
    accessibility: i,
    autoScroll: c = !0,
    children: f,
    sensors: m = og,
    collisionDetection: v = xm,
    measuring: x,
    modifiers: b,
    ...N
  } = n;
  const w = al(cg, void 0, sg), [T, P] = w, [D, C] = dm(), [_, E] = ct(ur.Uninitialized), G = _ === ur.Initialized, {
    draggable: {
      active: S,
      nodes: H,
      translate: X
    },
    droppable: {
      containers: Y
    }
  } = T, q = S ? H.get(S) : null, oe = Et({
    initial: null,
    translated: null
  }), W = kt(() => {
    var rt;
    return S != null ? {
      id: S,
      // It's possible for the active node to unmount while dragging
      data: (rt = q == null ? void 0 : q.data) != null ? rt : ig,
      rect: oe
    } : null;
  }, [S, q]), ve = Et(null), [ge, Ce] = ct(null), [Oe, we] = ct(null), de = Ia(N, Object.values(N)), F = Ka("DndDescribedBy", s), se = kt(() => Y.getEnabled(), [Y]), ae = dg(x), {
    droppableRects: M,
    measureDroppableContainers: j,
    measuringScheduled: B
  } = Um(se, {
    dragging: G,
    dependencies: [X.x, X.y],
    config: ae.droppable
  }), Z = Ym(H, S), ie = kt(() => Oe ? To(Oe) : null, [Oe]), K = Nt(), z = Gm(Z, ae.draggable.measure);
  fg({
    activeNode: S ? H.get(S) : null,
    config: K.layoutShiftCompensation,
    initialRect: z,
    measure: ae.draggable.measure
  });
  const ee = Qs(Z, ae.draggable.measure, z), Ee = Qs(Z ? Z.parentElement : null), te = Et({
    activatorEvent: null,
    active: null,
    activeNode: Z,
    collisionRect: null,
    collisions: null,
    droppableRects: M,
    draggableNodes: H,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: Y,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), _e = Y.getNodeFor((e = te.current.over) == null ? void 0 : e.id), Je = ag({
    measure: ae.dragOverlay.measure
  }), Ye = (a = Je.nodeRef.current) != null ? a : Z, Me = G ? (r = Je.rect) != null ? r : ee : null, nt = !!(Je.nodeRef.current && Je.rect), $t = Zm(nt ? null : ee), It = su(Ye ? yn(Ye) : null), Ze = Qm(G ? _e ?? Z : null), Ct = rg(Ze), At = fu(b, {
    transform: {
      x: X.x - $t.x,
      y: X.y - $t.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: Oe,
    active: W,
    activeNodeRect: ee,
    containerNodeRect: Ee,
    draggingNodeRect: Me,
    over: te.current.over,
    overlayNodeRect: Je.rect,
    scrollableAncestors: Ze,
    scrollableAncestorRects: Ct,
    windowRect: It
  }), St = ie ? zr(ie, X) : null, Ot = eg(Ze), vt = tc(Ot), on = tc(Ot, [ee]), mt = zr(At, vt), Dt = Me ? Cm(Me, At) : null, Rt = W && Dt ? v({
    active: W,
    collisionRect: Dt,
    droppableRects: M,
    droppableContainers: se,
    pointerCoordinates: St
  }) : null, Ht = Jc(Rt, "id"), [jt, _t] = ct(null), Le = nt ? At : zr(At, on), re = Sm(Le, (o = jt == null ? void 0 : jt.rect) != null ? o : null, ee), Pe = pn(
    (rt, Qe) => {
      let {
        sensor: et,
        options: it
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
        options: it,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: te,
        onStart(pe) {
          const De = ve.current;
          if (De == null)
            return;
          const lt = H.get(De);
          if (!lt)
            return;
          const {
            onDragStart: wt
          } = de.current, Bt = {
            active: {
              id: De,
              data: lt.data,
              rect: oe
            }
          };
          oa(() => {
            wt == null || wt(Bt), E(ur.Initializing), P({
              type: Jt.DragStart,
              initialCoordinates: pe,
              active: De
            }), D({
              type: "onDragStart",
              event: Bt
            });
          });
        },
        onMove(pe) {
          P({
            type: Jt.DragMove,
            coordinates: pe
          });
        },
        onEnd: fe(Jt.DragEnd),
        onCancel: fe(Jt.DragCancel)
      });
      oa(() => {
        Ce(J), we(rt.nativeEvent);
      });
      function fe(pe) {
        return async function() {
          const {
            active: lt,
            collisions: wt,
            over: Bt,
            scrollAdjustedTranslate: Qt
          } = te.current;
          let zt = null;
          if (lt && Qt) {
            const {
              cancelDrop: Vt
            } = de.current;
            zt = {
              activatorEvent: Ie,
              active: lt,
              collisions: wt,
              delta: Qt,
              over: Bt
            }, pe === Jt.DragEnd && typeof Vt == "function" && await Promise.resolve(Vt(zt)) && (pe = Jt.DragCancel);
          }
          ve.current = null, oa(() => {
            P({
              type: pe
            }), E(ur.Uninitialized), _t(null), Ce(null), we(null);
            const Vt = pe === Jt.DragEnd ? "onDragEnd" : "onDragCancel";
            if (zt) {
              const en = de.current[Vt];
              en == null || en(zt), D({
                type: Vt,
                event: zt
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [H]
  ), Be = pn((rt, Qe) => (et, it) => {
    const ht = et.nativeEvent, Ie = H.get(it);
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
    }, ve.current = it, Pe(et, Qe));
  }, [H, Pe]), je = Wm(m, Be);
  tg(m), Tn(() => {
    ee && _ === ur.Initializing && E(ur.Initialized);
  }, [ee, _]), Xe(
    () => {
      const {
        onDragMove: rt
      } = de.current, {
        active: Qe,
        activatorEvent: et,
        collisions: it,
        over: ht
      } = te.current;
      if (!Qe || !et)
        return;
      const Ie = {
        active: Qe,
        activatorEvent: et,
        collisions: it,
        delta: {
          x: mt.x,
          y: mt.y
        },
        over: ht
      };
      oa(() => {
        rt == null || rt(Ie), D({
          type: "onDragMove",
          event: Ie
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [mt.x, mt.y]
  ), Xe(
    () => {
      const {
        active: rt,
        activatorEvent: Qe,
        collisions: et,
        droppableContainers: it,
        scrollAdjustedTranslate: ht
      } = te.current;
      if (!rt || ve.current == null || !Qe || !ht)
        return;
      const {
        onDragOver: Ie
      } = de.current, J = it.get(Ht), fe = J && J.rect.current ? {
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
      oa(() => {
        _t(fe), Ie == null || Ie(pe), D({
          type: "onDragOver",
          event: pe
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Ht]
  ), Tn(() => {
    te.current = {
      activatorEvent: Oe,
      active: W,
      activeNode: Z,
      collisionRect: Dt,
      collisions: Rt,
      droppableRects: M,
      draggableNodes: H,
      draggingNode: Ye,
      draggingNodeRect: Me,
      droppableContainers: Y,
      over: jt,
      scrollableAncestors: Ze,
      scrollAdjustedTranslate: mt
    }, oe.current = {
      initial: Me,
      translated: Dt
    };
  }, [W, Z, Rt, Dt, H, Ye, Me, M, Y, jt, Ze, mt]), zm({
    ...K,
    delta: X,
    draggingRect: Dt,
    pointerCoordinates: St,
    scrollableAncestors: Ze,
    scrollableAncestorRects: Ct
  });
  const $e = kt(() => ({
    active: W,
    activeNode: Z,
    activeNodeRect: ee,
    activatorEvent: Oe,
    collisions: Rt,
    containerNodeRect: Ee,
    dragOverlay: Je,
    draggableNodes: H,
    droppableContainers: Y,
    droppableRects: M,
    over: jt,
    measureDroppableContainers: j,
    scrollableAncestors: Ze,
    scrollableAncestorRects: Ct,
    measuringConfiguration: ae,
    measuringScheduled: B,
    windowRect: It
  }), [W, Z, ee, Oe, Rt, Ee, Je, H, Y, M, jt, j, Ze, Ct, ae, B, It]), ft = kt(() => ({
    activatorEvent: Oe,
    activators: je,
    active: W,
    activeNodeRect: ee,
    ariaDescribedById: {
      draggable: F
    },
    dispatch: P,
    draggableNodes: H,
    over: jt,
    measureDroppableContainers: j
  }), [Oe, je, W, ee, P, F, H, jt, j]);
  return ze.createElement(Uc.Provider, {
    value: C
  }, ze.createElement(Va.Provider, {
    value: ft
  }, ze.createElement(du.Provider, {
    value: $e
  }, ze.createElement(Wo.Provider, {
    value: re
  }, f)), ze.createElement(ug, {
    disabled: (i == null ? void 0 : i.restoreFocus) === !1
  })), ze.createElement(vm, {
    ...i,
    hiddenTextDescribedById: F
  }));
  function Nt() {
    const rt = (ge == null ? void 0 : ge.autoScrollEnabled) === !1, Qe = typeof c == "object" ? c.enabled === !1 : c === !1, et = G && !rt && !Qe;
    return typeof c == "object" ? {
      ...c,
      enabled: et
    } : {
      enabled: et
    };
  }
}), vg = /* @__PURE__ */ _a(null), nc = "button", mg = "Droppable";
function pu(t) {
  let {
    id: n,
    data: e,
    disabled: a = !1,
    attributes: r
  } = t;
  const o = Ka(mg), {
    activators: s,
    activatorEvent: i,
    active: c,
    activeNodeRect: f,
    ariaDescribedById: m,
    draggableNodes: v,
    over: x
  } = Bn(Va), {
    role: b = nc,
    roleDescription: N = "draggable",
    tabIndex: w = 0
  } = r ?? {}, T = (c == null ? void 0 : c.id) === n, P = Bn(T ? Wo : vg), [D, C] = Do(), [_, E] = Do(), G = ng(s, n), S = Ia(e);
  Tn(
    () => (v.set(n, {
      id: n,
      key: o,
      node: D,
      activatorNode: _,
      data: S
    }), () => {
      const X = v.get(n);
      X && X.key === o && v.delete(n);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [v, n]
  );
  const H = kt(() => ({
    role: b,
    tabIndex: w,
    "aria-disabled": a,
    "aria-pressed": T && b === nc ? !0 : void 0,
    "aria-roledescription": N,
    "aria-describedby": m.draggable
  }), [a, b, w, T, N, m.draggable]);
  return {
    active: c,
    activatorEvent: i,
    activeNodeRect: f,
    attributes: H,
    isDragging: T,
    listeners: a ? void 0 : G,
    node: D,
    over: x,
    setNodeRef: C,
    setActivatorNodeRef: E,
    transform: P
  };
}
function vu() {
  return Bn(du);
}
const gg = "Droppable", hg = {
  timeout: 25
};
function mu(t) {
  let {
    data: n,
    disabled: e = !1,
    id: a,
    resizeObserverConfig: r
  } = t;
  const o = Ka(gg), {
    active: s,
    dispatch: i,
    over: c,
    measureDroppableContainers: f
  } = Bn(Va), m = Et({
    disabled: e
  }), v = Et(!1), x = Et(null), b = Et(null), {
    disabled: N,
    updateMeasurementsFor: w,
    timeout: T
  } = {
    ...hg,
    ...r
  }, P = Ia(w ?? a), D = pn(
    () => {
      if (!v.current) {
        v.current = !0;
        return;
      }
      b.current != null && clearTimeout(b.current), b.current = setTimeout(() => {
        f(Array.isArray(P.current) ? P.current : [P.current]), b.current = null;
      }, T);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [T]
  ), C = Yo({
    callback: D,
    disabled: N || !s
  }), _ = pn((H, X) => {
    C && (X && (C.unobserve(X), v.current = !1), H && C.observe(H));
  }, [C]), [E, G] = Do(_), S = Ia(n);
  return Xe(() => {
    !C || !E.current || (C.disconnect(), v.current = !1, C.observe(E.current));
  }, [E, C]), Tn(
    () => (i({
      type: Jt.RegisterDroppable,
      element: {
        id: a,
        key: o,
        disabled: e,
        node: E,
        rect: x,
        data: S
      }
    }), () => i({
      type: Jt.UnregisterDroppable,
      key: o,
      id: a
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [a]
  ), Xe(() => {
    e !== m.current.disabled && (i({
      type: Jt.SetDroppableDisabled,
      id: a,
      key: o,
      disabled: e
    }), m.current.disabled = e);
  }, [a, o, e, i]), {
    active: s,
    rect: x,
    isOver: (c == null ? void 0 : c.id) === a,
    node: E,
    over: c,
    setNodeRef: G
  };
}
function bg(t) {
  let {
    animation: n,
    children: e
  } = t;
  const [a, r] = ct(null), [o, s] = ct(null), i = Po(e);
  return !e && !a && i && r(i), Tn(() => {
    if (!o)
      return;
    const c = a == null ? void 0 : a.key, f = a == null ? void 0 : a.props.id;
    if (c == null || f == null) {
      r(null);
      return;
    }
    Promise.resolve(n(f, o)).then(() => {
      r(null);
    });
  }, [n, a, o]), ze.createElement(ze.Fragment, null, e, a ? kd(a, {
    ref: s
  }) : null);
}
const yg = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function wg(t) {
  let {
    children: n
  } = t;
  return ze.createElement(Va.Provider, {
    value: uu
  }, ze.createElement(Wo.Provider, {
    value: yg
  }, n));
}
const xg = {
  position: "fixed",
  touchAction: "none"
}, Sg = (t) => Ko(t) ? "transform 250ms ease" : void 0, Eg = /* @__PURE__ */ qd((t, n) => {
  let {
    as: e,
    activatorEvent: a,
    adjustScale: r,
    children: o,
    className: s,
    rect: i,
    style: c,
    transform: f,
    transition: m = Sg
  } = t;
  if (!i)
    return null;
  const v = r ? f : {
    ...f,
    scaleX: 1,
    scaleY: 1
  }, x = {
    ...xg,
    width: i.width,
    height: i.height,
    top: i.top,
    left: i.left,
    transform: Zn.Transform.toString(v),
    transformOrigin: r && a ? gm(a, i) : void 0,
    transition: typeof m == "function" ? m(a) : m,
    ...c
  };
  return ze.createElement(e, {
    className: s,
    style: x,
    ref: n
  }, o);
}), Cg = (t) => (n) => {
  let {
    active: e,
    dragOverlay: a
  } = n;
  const r = {}, {
    styles: o,
    className: s
  } = t;
  if (o != null && o.active)
    for (const [i, c] of Object.entries(o.active))
      c !== void 0 && (r[i] = e.node.style.getPropertyValue(i), e.node.style.setProperty(i, c));
  if (o != null && o.dragOverlay)
    for (const [i, c] of Object.entries(o.dragOverlay))
      c !== void 0 && a.node.style.setProperty(i, c);
  return s != null && s.active && e.node.classList.add(s.active), s != null && s.dragOverlay && a.node.classList.add(s.dragOverlay), function() {
    for (const [c, f] of Object.entries(r))
      e.node.style.setProperty(c, f);
    s != null && s.active && e.node.classList.remove(s.active);
  };
}, Og = (t) => {
  let {
    transform: {
      initial: n,
      final: e
    }
  } = t;
  return [{
    transform: Zn.Transform.toString(n)
  }, {
    transform: Zn.Transform.toString(e)
  }];
}, Dg = {
  duration: 250,
  easing: "ease",
  keyframes: Og,
  sideEffects: /* @__PURE__ */ Cg({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function Pg(t) {
  let {
    config: n,
    draggableNodes: e,
    droppableContainers: a,
    measuringConfiguration: r
  } = t;
  return zo((o, s) => {
    if (n === null)
      return;
    const i = e.get(o);
    if (!i)
      return;
    const c = i.node.current;
    if (!c)
      return;
    const f = cu(s);
    if (!f)
      return;
    const {
      transform: m
    } = yn(s).getComputedStyle(s), v = Qc(m);
    if (!v)
      return;
    const x = typeof n == "function" ? n : Tg(n);
    return iu(c, r.draggable.measure), x({
      active: {
        id: o,
        data: i.data,
        node: c,
        rect: r.draggable.measure(c)
      },
      draggableNodes: e,
      dragOverlay: {
        node: s,
        rect: r.dragOverlay.measure(f)
      },
      droppableContainers: a,
      measuringConfiguration: r,
      transform: v
    });
  });
}
function Tg(t) {
  const {
    duration: n,
    easing: e,
    sideEffects: a,
    keyframes: r
  } = {
    ...Dg,
    ...t
  };
  return (o) => {
    let {
      active: s,
      dragOverlay: i,
      transform: c,
      ...f
    } = o;
    if (!n)
      return;
    const m = {
      x: i.rect.left - s.rect.left,
      y: i.rect.top - s.rect.top
    }, v = {
      scaleX: c.scaleX !== 1 ? s.rect.width * c.scaleX / i.rect.width : 1,
      scaleY: c.scaleY !== 1 ? s.rect.height * c.scaleY / i.rect.height : 1
    }, x = {
      x: c.x - m.x,
      y: c.y - m.y,
      ...v
    }, b = r({
      ...f,
      active: s,
      dragOverlay: i,
      transform: {
        initial: c,
        final: x
      }
    }), [N] = b, w = b[b.length - 1];
    if (JSON.stringify(N) === JSON.stringify(w))
      return;
    const T = a == null ? void 0 : a({
      active: s,
      dragOverlay: i,
      ...f
    }), P = i.node.animate(b, {
      duration: n,
      easing: e,
      fill: "forwards"
    });
    return new Promise((D) => {
      P.onfinish = () => {
        T == null || T(), D();
      };
    });
  };
}
let rc = 0;
function kg(t) {
  return kt(() => {
    if (t != null)
      return rc++, rc;
  }, [t]);
}
const qg = /* @__PURE__ */ ze.memo((t) => {
  let {
    adjustScale: n = !1,
    children: e,
    dropAnimation: a,
    style: r,
    transition: o,
    modifiers: s,
    wrapperElement: i = "div",
    className: c,
    zIndex: f = 999
  } = t;
  const {
    activatorEvent: m,
    active: v,
    activeNodeRect: x,
    containerNodeRect: b,
    draggableNodes: N,
    droppableContainers: w,
    dragOverlay: T,
    over: P,
    measuringConfiguration: D,
    scrollableAncestors: C,
    scrollableAncestorRects: _,
    windowRect: E
  } = vu(), G = Bn(Wo), S = kg(v == null ? void 0 : v.id), H = fu(s, {
    activatorEvent: m,
    active: v,
    activeNodeRect: x,
    containerNodeRect: b,
    draggingNodeRect: T.rect,
    over: P,
    overlayNodeRect: T.rect,
    scrollableAncestors: C,
    scrollableAncestorRects: _,
    transform: G,
    windowRect: E
  }), X = xl(x), Y = Pg({
    config: a,
    draggableNodes: N,
    droppableContainers: w,
    measuringConfiguration: D
  }), q = X ? T.setRef : void 0;
  return ze.createElement(wg, null, ze.createElement(bg, {
    animation: Y
  }, v && S ? ze.createElement(Eg, {
    key: S,
    id: v.id,
    ref: q,
    as: i,
    activatorEvent: m,
    adjustScale: n,
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
function ba(t, n, e) {
  const a = t.slice();
  return a.splice(e < 0 ? a.length + e : e, 0, a.splice(n, 1)[0]), a;
}
function Ig(t, n) {
  return t.reduce((e, a, r) => {
    const o = n.get(a);
    return o && (e[r] = o), e;
  }, Array(t.length));
}
function uo(t) {
  return t !== null && t >= 0;
}
function Rg(t, n) {
  if (t === n)
    return !0;
  if (t.length !== n.length)
    return !1;
  for (let e = 0; e < t.length; e++)
    if (t[e] !== n[e])
      return !1;
  return !0;
}
function Ng(t) {
  return typeof t == "boolean" ? {
    draggable: t,
    droppable: t
  } : t;
}
const gu = (t) => {
  let {
    rects: n,
    activeIndex: e,
    overIndex: a,
    index: r
  } = t;
  const o = ba(n, a, e), s = n[r], i = o[r];
  return !i || !s ? null : {
    x: i.left - s.left,
    y: i.top - s.top,
    scaleX: i.width / s.width,
    scaleY: i.height / s.height
  };
}, Mg = (t) => {
  let {
    activeIndex: n,
    index: e,
    rects: a,
    overIndex: r
  } = t, o, s;
  return e === n && (o = a[e], s = a[r]), e === r && (o = a[e], s = a[n]), !s || !o ? null : {
    x: s.left - o.left,
    y: s.top - o.top,
    scaleX: s.width / o.width,
    scaleY: s.height / o.height
  };
}, hu = "Sortable", bu = /* @__PURE__ */ ze.createContext({
  activeIndex: -1,
  containerId: hu,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: gu,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function Ag(t) {
  let {
    children: n,
    id: e,
    items: a,
    strategy: r = gu,
    disabled: o = !1
  } = t;
  const {
    active: s,
    dragOverlay: i,
    droppableRects: c,
    over: f,
    measureDroppableContainers: m
  } = vu(), v = Ka(hu, e), x = i.rect !== null, b = kt(() => a.map((G) => typeof G == "object" && "id" in G ? G.id : G), [a]), N = s != null, w = s ? b.indexOf(s.id) : -1, T = f ? b.indexOf(f.id) : -1, P = Et(b), D = !Rg(b, P.current), C = T !== -1 && w === -1 || D, _ = Ng(o);
  Tn(() => {
    D && N && m(b);
  }, [D, b, N, m]), Xe(() => {
    P.current = b;
  }, [b]);
  const E = kt(
    () => ({
      activeIndex: w,
      containerId: v,
      disabled: _,
      disableTransforms: C,
      items: b,
      overIndex: T,
      useDragOverlay: x,
      sortedRects: Ig(b, c),
      strategy: r
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [w, v, _.draggable, _.droppable, C, b, T, c, x, r]
  );
  return ze.createElement(bu.Provider, {
    value: E
  }, n);
}
const jg = (t) => {
  let {
    id: n,
    items: e,
    activeIndex: a,
    overIndex: r
  } = t;
  return ba(e, a, r).indexOf(n);
}, _g = (t) => {
  let {
    containerId: n,
    isSorting: e,
    wasDragging: a,
    index: r,
    items: o,
    newIndex: s,
    previousItems: i,
    previousContainerId: c,
    transition: f
  } = t;
  return !f || !a || i !== o && r === s ? !1 : e ? !0 : s !== r && n === c;
}, Lg = {
  duration: 200,
  easing: "ease"
}, yu = "transform", Fg = /* @__PURE__ */ Zn.Transition.toString({
  property: yu,
  duration: 0,
  easing: "linear"
}), $g = {
  roleDescription: "sortable"
};
function Hg(t) {
  let {
    disabled: n,
    index: e,
    node: a,
    rect: r
  } = t;
  const [o, s] = ct(null), i = Et(e);
  return Tn(() => {
    if (!n && e !== i.current && a.current) {
      const c = r.current;
      if (c) {
        const f = Qr(a.current, {
          ignoreTransform: !0
        }), m = {
          x: c.left - f.left,
          y: c.top - f.top,
          scaleX: c.width / f.width,
          scaleY: c.height / f.height
        };
        (m.x || m.y) && s(m);
      }
    }
    e !== i.current && (i.current = e);
  }, [n, e, a, r]), Xe(() => {
    o && s(null);
  }, [o]), o;
}
function Bg(t) {
  let {
    animateLayoutChanges: n = _g,
    attributes: e,
    disabled: a,
    data: r,
    getNewIndex: o = jg,
    id: s,
    strategy: i,
    resizeObserverConfig: c,
    transition: f = Lg
  } = t;
  const {
    items: m,
    containerId: v,
    activeIndex: x,
    disabled: b,
    disableTransforms: N,
    sortedRects: w,
    overIndex: T,
    useDragOverlay: P,
    strategy: D
  } = Bn(bu), C = zg(a, b), _ = m.indexOf(s), E = kt(() => ({
    sortable: {
      containerId: v,
      index: _,
      items: m
    },
    ...r
  }), [v, r, _, m]), G = kt(() => m.slice(m.indexOf(s)), [m, s]), {
    rect: S,
    node: H,
    isOver: X,
    setNodeRef: Y
  } = mu({
    id: s,
    data: E,
    disabled: C.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: G,
      ...c
    }
  }), {
    active: q,
    activatorEvent: oe,
    activeNodeRect: W,
    attributes: ve,
    setNodeRef: ge,
    listeners: Ce,
    isDragging: Oe,
    over: we,
    setActivatorNodeRef: de,
    transform: F
  } = pu({
    id: s,
    data: E,
    attributes: {
      ...$g,
      ...e
    },
    disabled: C.draggable
  }), se = tm(Y, ge), ae = !!q, M = ae && !N && uo(x) && uo(T), j = !P && Oe, B = j && M ? F : null, ie = M ? B ?? (i ?? D)({
    rects: w,
    activeNodeRect: W,
    activeIndex: x,
    overIndex: T,
    index: _
  }) : null, K = uo(x) && uo(T) ? o({
    id: s,
    items: m,
    activeIndex: x,
    overIndex: T
  }) : _, z = q == null ? void 0 : q.id, ee = Et({
    activeId: z,
    items: m,
    newIndex: K,
    containerId: v
  }), Ee = m !== ee.current.items, te = n({
    active: q,
    containerId: v,
    isDragging: Oe,
    isSorting: ae,
    id: s,
    index: _,
    items: m,
    newIndex: ee.current.newIndex,
    previousItems: ee.current.items,
    previousContainerId: ee.current.containerId,
    transition: f,
    wasDragging: ee.current.activeId != null
  }), _e = Hg({
    disabled: !te,
    index: _,
    node: H,
    rect: S
  });
  return Xe(() => {
    ae && ee.current.newIndex !== K && (ee.current.newIndex = K), v !== ee.current.containerId && (ee.current.containerId = v), m !== ee.current.items && (ee.current.items = m);
  }, [ae, K, v, m]), Xe(() => {
    if (z === ee.current.activeId)
      return;
    if (z && !ee.current.activeId) {
      ee.current.activeId = z;
      return;
    }
    const Ye = setTimeout(() => {
      ee.current.activeId = z;
    }, 50);
    return () => clearTimeout(Ye);
  }, [z]), {
    active: q,
    activeIndex: x,
    attributes: ve,
    data: E,
    rect: S,
    index: _,
    newIndex: K,
    items: m,
    isOver: X,
    isSorting: ae,
    isDragging: Oe,
    listeners: Ce,
    node: H,
    overIndex: T,
    over: we,
    setNodeRef: se,
    setActivatorNodeRef: de,
    setDroppableNodeRef: Y,
    setDraggableNodeRef: ge,
    transform: _e ?? ie,
    transition: Je()
  };
  function Je() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      _e || // Or to prevent items jumping to back to their "new" position when items change
      Ee && ee.current.newIndex === _
    )
      return Fg;
    if (!(j && !Ko(oe) || !f) && (ae || te))
      return Zn.Transition.toString({
        ...f,
        property: yu
      });
  }
}
function zg(t, n) {
  var e, a;
  return typeof t == "boolean" ? {
    draggable: t,
    // Backwards compatibility
    droppable: !1
  } : {
    draggable: (e = t == null ? void 0 : t.draggable) != null ? e : n.draggable,
    droppable: (a = t == null ? void 0 : t.droppable) != null ? a : n.droppable
  };
}
function Io(t) {
  if (!t)
    return !1;
  const n = t.data.current;
  return !!(n && "sortable" in n && typeof n.sortable == "object" && "containerId" in n.sortable && "items" in n.sortable && "index" in n.sortable);
}
const Kg = [st.Down, st.Right, st.Up, st.Left], Vg = (t, n) => {
  let {
    context: {
      active: e,
      collisionRect: a,
      droppableRects: r,
      droppableContainers: o,
      over: s,
      scrollableAncestors: i
    }
  } = n;
  if (Kg.includes(t.code)) {
    if (t.preventDefault(), !e || !a)
      return;
    const c = [];
    o.getEnabled().forEach((v) => {
      if (!v || v != null && v.disabled)
        return;
      const x = r.get(v.id);
      if (x)
        switch (t.code) {
          case st.Down:
            a.top < x.top && c.push(v);
            break;
          case st.Up:
            a.top > x.top && c.push(v);
            break;
          case st.Left:
            a.left > x.left && c.push(v);
            break;
          case st.Right:
            a.left < x.left && c.push(v);
            break;
        }
    });
    const f = ym({
      active: e,
      collisionRect: a,
      droppableRects: r,
      droppableContainers: c,
      pointerCoordinates: null
    });
    let m = Jc(f, "id");
    if (m === (s == null ? void 0 : s.id) && f.length > 1 && (m = f[1].id), m != null) {
      const v = o.get(e.id), x = o.get(m), b = x ? r.get(x.id) : null, N = x == null ? void 0 : x.node.current;
      if (N && b && v && x) {
        const T = Vo(N).some((G, S) => i[S] !== G), P = wu(v, x), D = Yg(v, x), C = T || !P ? {
          x: 0,
          y: 0
        } : {
          x: D ? a.width - b.width : 0,
          y: D ? a.height - b.height : 0
        }, _ = {
          x: b.left,
          y: b.top
        };
        return C.x && C.y ? _ : Ra(_, C);
      }
    }
  }
};
function wu(t, n) {
  return !Io(t) || !Io(n) ? !1 : t.data.current.sortable.containerId === n.data.current.sortable.containerId;
}
function Yg(t, n) {
  return !Io(t) || !Io(n) || !wu(t, n) ? !1 : t.data.current.sortable.index < n.data.current.sortable.index;
}
var Wg = {
  root: "p-button-group p-component"
}, fo = ot.extend({
  defaultProps: {
    __TYPE: "ButtonGroup",
    children: void 0
  },
  css: {
    classes: Wg
  }
}), xu = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(t, n) {
  var e = cn(), a = d.useContext(Kt), r = fo.getProps(t, a), o = d.useRef(n), s = fo.setMetaData({
    props: r
  }), i = s.ptm, c = s.cx, f = s.isUnstyled;
  qn(fo.css.styles, f, {
    name: "buttongroup"
  }), d.useEffect(function() {
    Q.combinedRefs(o, n);
  }, [o, n]);
  var m = e({
    ref: o,
    className: qe(c("root")),
    role: "group"
  }, fo.getOtherProps(r), i("root"));
  return /* @__PURE__ */ d.createElement("span", m, r.children);
}));
xu.displayName = "ButtonGroup";
function Ji() {
  return Ji = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = arguments[n];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    }
    return t;
  }, Ji.apply(this, arguments);
}
var Su = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(t, n) {
  var e = bn.getPTI(t);
  return /* @__PURE__ */ d.createElement("svg", Ji({
    ref: n,
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
Su.displayName = "WindowMaximizeIcon";
function Zi() {
  return Zi = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = arguments[n];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    }
    return t;
  }, Zi.apply(this, arguments);
}
var Eu = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(t, n) {
  var e = bn.getPTI(t);
  return /* @__PURE__ */ d.createElement("svg", Zi({
    ref: n,
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
Eu.displayName = "WindowMinimizeIcon";
function Qi() {
  return Qi = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = arguments[n];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    }
    return t;
  }, Qi.apply(this, arguments);
}
function Ma(t) {
  "@babel/helpers - typeof";
  return Ma = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ma(t);
}
function el(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var e = 0, a = new Array(n); e < n; e++) a[e] = t[e];
  return a;
}
function Ug(t) {
  if (Array.isArray(t)) return el(t);
}
function Gg(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Cu(t, n) {
  if (t) {
    if (typeof t == "string") return el(t, n);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set") return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return el(t, n);
  }
}
function Xg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Jg(t) {
  return Ug(t) || Gg(t) || Cu(t) || Xg();
}
function Zg(t, n) {
  if (Ma(t) !== "object" || t === null) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var a = e.call(t, n || "default");
    if (Ma(a) !== "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(t);
}
function Qg(t) {
  var n = Zg(t, "string");
  return Ma(n) === "symbol" ? n : String(n);
}
function Sl(t, n, e) {
  return n = Qg(n), n in t ? Object.defineProperty(t, n, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[n] = e, t;
}
function eh(t) {
  if (Array.isArray(t)) return t;
}
function th(t, n) {
  var e = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (e != null) {
    var a, r, o, s, i = [], c = !0, f = !1;
    try {
      if (o = (e = e.call(t)).next, n !== 0) for (; !(c = (a = o.call(e)).done) && (i.push(a.value), i.length !== n); c = !0) ;
    } catch (m) {
      f = !0, r = m;
    } finally {
      try {
        if (!c && e.return != null && (s = e.return(), Object(s) !== s)) return;
      } finally {
        if (f) throw r;
      }
    }
    return i;
  }
}
function nh() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sr(t, n) {
  return eh(t) || th(t, n) || Cu(t, n) || nh();
}
var rh = "", ya = ot.extend({
  defaultProps: {
    __TYPE: "FocusTrap",
    children: void 0
  },
  css: {
    styles: rh
  },
  getProps: function(n) {
    return Q.getMergedProps(n, ya.defaultProps);
  },
  getOtherProps: function(n) {
    return Q.getDiffProps(n, ya.defaultProps);
  }
});
function ac(t, n) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    n && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function ah(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? ac(Object(e), !0).forEach(function(a) {
      Sl(t, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : ac(Object(e)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return t;
}
var oh = /* @__PURE__ */ ze.memo(/* @__PURE__ */ ze.forwardRef(function(t, n) {
  var e = ze.useRef(null), a = ze.useRef(null), r = ze.useRef(null), o = ze.useContext(Kt), s = ya.getProps(t, o), i = {
    props: s
  };
  Sr(ya.css.styles, {
    name: "focustrap"
  });
  var c = ya.setMetaData(ah({}, i));
  c.ptm, ze.useImperativeHandle(n, function() {
    return {
      props: s,
      getInk: function() {
        return a.current;
      },
      getTarget: function() {
        return e.current;
      }
    };
  }), kn(function() {
    s.disabled || (e.current = f(), m(e.current));
  });
  var f = function() {
    return a.current && a.current.parentElement;
  }, m = function(T) {
    var P = s || {}, D = P.autoFocusSelector, C = D === void 0 ? "" : D, _ = P.firstFocusableSelector, E = _ === void 0 ? "" : _, G = P.autoFocus, S = G === void 0 ? !1 : G, H = "".concat(v(C)), X = "[autofocus]".concat(H, ", [data-pc-autofocus='true']").concat(H), Y = R.getFirstFocusableElement(T, X);
    S && !Y && (Y = R.getFirstFocusableElement(T, v(E))), R.focus(Y);
  }, v = function(T) {
    return ':not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])'.concat(T ?? "");
  }, x = function(T) {
    var P, D = T.currentTarget, C = T.relatedTarget, _ = C === D.$_pfocustrap_lasthiddenfocusableelement || !((P = e.current) !== null && P !== void 0 && P.contains(C)) ? R.getFirstFocusableElement(D.parentElement, v(D.$_pfocustrap_focusableselector)) : D.$_pfocustrap_lasthiddenfocusableelement;
    R.focus(_);
  }, b = function(T) {
    var P, D = T.currentTarget, C = T.relatedTarget, _ = C === D.$_pfocustrap_firsthiddenfocusableelement || !((P = e.current) !== null && P !== void 0 && P.contains(C)) ? R.getLastFocusableElement(D.parentElement, v(D.$_pfocustrap_focusableselector)) : D.$_pfocustrap_firsthiddenfocusableelement;
    R.focus(_);
  }, N = function() {
    var T = s || {}, P = T.tabIndex, D = P === void 0 ? 0 : P, C = function(S, H) {
      return /* @__PURE__ */ ze.createElement("span", {
        ref: H === "firstfocusableelement" ? a : r,
        className: "p-hidden-accessible p-hidden-focusable",
        tabIndex: D,
        role: "presentation",
        "aria-hidden": !0,
        "data-p-hidden-accessible": !0,
        "data-p-hidden-focusable": !0,
        onFocus: S,
        "data-pc-section": H
      });
    }, _ = C(x, "firstfocusableelement"), E = C(b, "lastfocusableelement");
    return _.ref.current && E.ref.current && (_.ref.current.$_pfocustrap_lasthiddenfocusableelement = E.ref.current, E.ref.current.$_pfocustrap_firsthiddenfocusableelement = _.ref.current), /* @__PURE__ */ ze.createElement(ze.Fragment, null, _, s.children, E);
  };
  return N();
})), ih = oh;
function oc(t, n) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    n && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function lh(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? oc(Object(e), !0).forEach(function(a) {
      Sl(t, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : oc(Object(e)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return t;
}
var sh = {
  closeButtonIcon: "p-dialog-header-close-icon",
  closeButton: "p-dialog-header-icon p-dialog-header-close p-link",
  maximizableIcon: "p-dialog-header-maximize-icon",
  maximizableButton: "p-dialog-header-icon p-dialog-header-maximize p-link",
  header: function(n) {
    var e = n.props;
    return qe("p-dialog-header", e.headerClassName);
  },
  headerTitle: "p-dialog-title",
  headerIcons: "p-dialog-header-icons",
  content: function(n) {
    var e = n.props;
    return qe("p-dialog-content", e.contentClassName);
  },
  footer: function(n) {
    var e = n.props;
    return qe("p-dialog-footer", e.footerClassName);
  },
  mask: function(n) {
    var e = n.props, a = n.maskVisibleState, r = ["center", "left", "right", "top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right"], o = r.find(function(s) {
      return s === e.position || s.replace("-", "") === e.position;
    });
    return qe("p-dialog-mask", o ? "p-dialog-".concat(o) : "", {
      "p-component-overlay p-component-overlay-enter": e.modal,
      "p-dialog-visible": a,
      "p-dialog-draggable": e.draggable,
      "p-dialog-resizable": e.resizable
    }, e.maskClassName);
  },
  root: function(n) {
    var e = n.props, a = n.maximized, r = n.context;
    return qe("p-dialog p-component", {
      "p-dialog-rtl": e.rtl,
      "p-dialog-maximized": a,
      "p-dialog-default": !a,
      "p-input-filled": r && r.inputStyle === "filled" || Tt.inputStyle === "filled",
      "p-ripple-disabled": r && r.ripple === !1 || Tt.ripple === !1
    });
  },
  transition: "p-dialog"
}, ch = `
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
`, uh = {
  mask: function(n) {
    var e = n.props;
    return lh({
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
}, po = ot.extend({
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
    classes: sh,
    styles: ch,
    inlineStyles: uh
  }
});
function ic(t, n) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    n && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function yi(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? ic(Object(e), !0).forEach(function(a) {
      Sl(t, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : ic(Object(e)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return t;
}
var Ou = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var e = cn(), a = d.useContext(Kt), r = po.getProps(t, a), o = r.id ? r.id : Er(), s = d.useState(o), i = sr(s, 2), c = i[0];
  i[1];
  var f = d.useState(!1), m = sr(f, 2), v = m[0], x = m[1], b = d.useState(!1), N = sr(b, 2), w = N[0], T = N[1], P = d.useState(r.maximized), D = sr(P, 2), C = D[0], _ = D[1], E = d.useRef(null), G = d.useRef(null), S = d.useRef(null), H = d.useRef(null), X = d.useRef(null), Y = d.useRef(null), q = d.useRef(null), oe = d.useRef(!1), W = d.useRef(!1), ve = d.useRef(null), ge = d.useRef(null), Ce = d.useRef(null), Oe = d.useRef(o), we = d.useRef(null), de = r.onMaximize ? r.maximized : C, F = w && (r.blockScroll || r.maximizable && de), se = r.closable && r.closeOnEscape && w, ae = df("dialog", se), M = po.setMetaData(yi(yi({
    props: r
  }, r.__parentMetadata), {}, {
    state: {
      id: c,
      maximized: de,
      containerVisible: v
    }
  })), j = M.ptm, B = M.cx, Z = M.sx, ie = M.isUnstyled;
  qn(po.css.styles, ie, {
    name: "dialog"
  }), sl({
    callback: function(O) {
      Ot(O);
    },
    when: se && ae,
    priority: [ll.DIALOG, ae]
  });
  var K = fr({
    type: "mousemove",
    target: function() {
      return window.document;
    },
    listener: function(O) {
      return re(O);
    }
  }), z = sr(K, 2), ee = z[0], Ee = z[1], te = fr({
    type: "mouseup",
    target: function() {
      return window.document;
    },
    listener: function(O) {
      return Pe(O);
    }
  }), _e = sr(te, 2), Je = _e[0], Ye = _e[1], Me = fr({
    type: "mousemove",
    target: function() {
      return window.document;
    },
    listener: function(O) {
      return Ht(O);
    }
  }), nt = sr(Me, 2), $t = nt[0], It = nt[1], Ze = fr({
    type: "mouseup",
    target: function() {
      return window.document;
    },
    listener: function(O) {
      return jt(O);
    }
  }), Ct = sr(Ze, 2), At = Ct[0], St = Ct[1], Ot = function(O) {
    r.onHide(), O.preventDefault();
  }, vt = function() {
    var O = document.activeElement, ne = O && E.current && E.current.contains(O);
    !ne && r.closable && r.showHeader && q.current && q.current.focus();
  }, on = function(O) {
    S.current = O.target, r.onPointerDown && r.onPointerDown(O);
  }, mt = function(O) {
    r.dismissableMask && r.modal && G.current === O.target && !S.current && Ot(O), r.onMaskClick && r.onMaskClick(O), S.current = null;
  }, Dt = function(O) {
    r.onMaximize ? r.onMaximize({
      originalEvent: O,
      maximized: !de
    }) : _(function(ne) {
      return !ne;
    }), O.preventDefault();
  }, Rt = function(O) {
    R.hasClass(O.target, "p-dialog-header-icon") || R.hasClass(O.target.parentElement, "p-dialog-header-icon") || r.draggable && (oe.current = !0, ve.current = O.pageX, ge.current = O.pageY, E.current.style.margin = "0", R.addClass(document.body, "p-unselectable-text"), r.onDragStart && r.onDragStart(O));
  }, Ht = function(O) {
    if (oe.current) {
      var ne = R.getOuterWidth(E.current), xe = R.getOuterHeight(E.current), Re = O.pageX - ve.current, Se = O.pageY - ge.current, $ = E.current.getBoundingClientRect(), V = $.left + Re, ue = $.top + Se, me = R.getViewport(), he = getComputedStyle(E.current), be = parseFloat(he.marginLeft), Te = parseFloat(he.marginTop);
      E.current.style.position = "fixed", r.keepInViewport ? (V >= r.minX && V + ne < me.width && (ve.current = O.pageX, E.current.style.left = V - be + "px"), ue >= r.minY && ue + xe < me.height && (ge.current = O.pageY, E.current.style.top = ue - Te + "px")) : (ve.current = O.pageX, E.current.style.left = V - be + "px", ge.current = O.pageY, E.current.style.top = ue - Te + "px"), r.onDrag && r.onDrag(O);
    }
  }, jt = function(O) {
    oe.current && (oe.current = !1, R.removeClass(document.body, "p-unselectable-text"), r.onDragEnd && r.onDragEnd(O));
  }, _t = function(O) {
    r.resizable && (W.current = !0, ve.current = O.pageX, ge.current = O.pageY, R.addClass(document.body, "p-unselectable-text"), r.onResizeStart && r.onResizeStart(O));
  }, Le = function(O, ne, xe) {
    !xe && (xe = R.getViewport());
    var Re = parseInt(O);
    return /^(\d+|(\.\d+))(\.\d+)?%$/.test(O) ? Re * (xe[ne] / 100) : Re;
  }, re = function(O) {
    if (W.current) {
      var ne = O.pageX - ve.current, xe = O.pageY - ge.current, Re = R.getOuterWidth(E.current), Se = R.getOuterHeight(E.current), $ = E.current.getBoundingClientRect(), V = R.getViewport(), ue = !parseInt(E.current.style.top) || !parseInt(E.current.style.left), me = Le(E.current.style.minWidth, "width", V), he = Le(E.current.style.minHeight, "height", V), be = Re + ne, Te = Se + xe;
      ue && (be = be + ne, Te = Te + xe), (!me || be > me) && $.left + be < V.width && (E.current.style.width = be + "px"), (!he || Te > he) && $.top + Te < V.height && (E.current.style.height = Te + "px"), ve.current = O.pageX, ge.current = O.pageY, r.onResize && r.onResize(O);
    }
  }, Pe = function(O) {
    W.current && (W.current = !1, R.removeClass(document.body, "p-unselectable-text"), r.onResizeEnd && r.onResizeEnd(O));
  }, Be = function() {
    E.current.style.position = "", E.current.style.left = "", E.current.style.top = "", E.current.style.margin = "";
  }, je = function() {
    E.current.setAttribute(Oe.current, "");
  }, $e = function() {
    r.onShow && r.onShow(), r.focusOnShow && vt(), rt();
  }, ft = function() {
    r.modal && !ie() && R.addClass(G.current, "p-component-overlay-leave");
  }, Nt = function() {
    oe.current = !1, hn.clear(G.current), x(!1), Qe(), R.focus(we.current), we.current = null;
  }, rt = function() {
    ht();
  }, Qe = function() {
    Ie();
  }, et = function() {
    var O = document.primeDialogParams && document.primeDialogParams.some(function(ne) {
      return ne.hasBlockScroll;
    });
    O ? R.blockBodyScroll() : R.unblockBodyScroll();
  }, it = function(O) {
    if (O && w) {
      var ne = {
        id: c,
        hasBlockScroll: F
      };
      document.primeDialogParams || (document.primeDialogParams = []);
      var xe = document.primeDialogParams.findIndex(function(Re) {
        return Re.id === c;
      });
      xe === -1 ? document.primeDialogParams = [].concat(Jg(document.primeDialogParams), [ne]) : document.primeDialogParams = document.primeDialogParams.toSpliced(xe, 1, ne);
    } else
      document.primeDialogParams = document.primeDialogParams && document.primeDialogParams.filter(function(Re) {
        return Re.id !== c;
      });
    et();
  }, ht = function() {
    r.draggable && ($t(), At()), r.resizable && (ee(), Je());
  }, Ie = function() {
    It(), St(), Ee(), Ye();
  }, J = function() {
    Ce.current = R.createInlineStyle(a && a.nonce || Tt.nonce, a && a.styleContainer);
    var O = "";
    for (var ne in r.breakpoints)
      O = O + `
                @media screen and (max-width: `.concat(ne, `) {
                     [data-pc-name="dialog"][`).concat(Oe.current, `] {
                        width: `).concat(r.breakpoints[ne], ` !important;
                    }
                }
            `);
    Ce.current.innerHTML = O;
  }, fe = function() {
    Ce.current = R.removeInlineStyle(Ce.current);
  };
  kn(function() {
    it(!0), r.visible && x(!0);
  }), d.useEffect(function() {
    return r.breakpoints && J(), function() {
      fe();
    };
  }, [r.breakpoints]), dt(function() {
    r.visible && !v && x(!0), r.visible !== w && v && T(r.visible), r.visible && (we.current = document.activeElement);
  }, [r.visible, v]), dt(function() {
    v && (hn.set("modal", G.current, a && a.autoZIndex || Tt.autoZIndex, r.baseZIndex || a && a.zIndex.modal || Tt.zIndex.modal), T(!0));
  }, [v]), dt(function() {
    it(!0);
  }, [F, w]), An(function() {
    Qe(), it(!1), R.removeInlineStyle(Ce.current), hn.clear(G.current);
  }), d.useImperativeHandle(n, function() {
    return {
      props: r,
      resetPosition: Be,
      getElement: function() {
        return E.current;
      },
      getMask: function() {
        return G.current;
      },
      getContent: function() {
        return H.current;
      },
      getHeader: function() {
        return X.current;
      },
      getFooter: function() {
        return Y.current;
      },
      getCloseButton: function() {
        return q.current;
      }
    };
  });
  var pe = function() {
    if (r.closable) {
      var O = r.ariaCloseIconLabel || fn("close"), ne = e({
        className: B("closeButtonIcon"),
        "aria-hidden": !0
      }, j("closeButtonIcon")), xe = r.closeIcon || /* @__PURE__ */ d.createElement(Ha, ne), Re = Wt.getJSXIcon(xe, yi({}, ne), {
        props: r
      }), Se = e({
        ref: q,
        type: "button",
        className: B("closeButton"),
        "aria-label": O,
        onClick: Ot,
        onKeyDown: function(V) {
          V.key !== "Escape" && V.stopPropagation();
        }
      }, j("closeButton"));
      return /* @__PURE__ */ d.createElement("button", Se, Re, /* @__PURE__ */ d.createElement(Yt, null));
    }
    return null;
  }, De = function() {
    var O, ne = e({
      className: B("maximizableIcon")
    }, j("maximizableIcon"));
    de ? O = r.minimizeIcon || /* @__PURE__ */ d.createElement(Eu, ne) : O = r.maximizeIcon || /* @__PURE__ */ d.createElement(Su, ne);
    var xe = Wt.getJSXIcon(O, ne, {
      props: r
    });
    if (r.maximizable) {
      var Re = e({
        type: "button",
        className: B("maximizableButton"),
        onClick: Dt
      }, j("maximizableButton"));
      return /* @__PURE__ */ d.createElement("button", Re, xe, /* @__PURE__ */ d.createElement(Yt, null));
    }
    return null;
  }, lt = function() {
    if (r.showHeader) {
      var O = pe(), ne = De(), xe = Q.getJSXElement(r.icons, r), Re = Q.getJSXElement(r.header, r), Se = c + "_header", $ = e({
        ref: X,
        style: r.headerStyle,
        className: B("header"),
        onMouseDown: Rt
      }, j("header")), V = e({
        id: Se,
        className: B("headerTitle")
      }, j("headerTitle")), ue = e({
        className: B("headerIcons")
      }, j("headerIcons"));
      return /* @__PURE__ */ d.createElement("div", $, /* @__PURE__ */ d.createElement("div", V, Re), /* @__PURE__ */ d.createElement("div", ue, xe, ne, O));
    }
    return null;
  }, wt = function() {
    var O = c + "_content", ne = e({
      id: O,
      ref: H,
      style: r.contentStyle,
      className: B("content")
    }, j("content"));
    return /* @__PURE__ */ d.createElement("div", ne, r.children);
  }, Bt = function() {
    var O = Q.getJSXElement(r.footer, r), ne = e({
      ref: Y,
      className: B("footer")
    }, j("footer"));
    return O && /* @__PURE__ */ d.createElement("div", ne, O);
  }, Qt = function() {
    return r.resizable ? /* @__PURE__ */ d.createElement("span", {
      className: "p-resizable-handle",
      style: {
        zIndex: 90
      },
      onMouseDown: _t
    }) : null;
  }, zt = function() {
    var O, ne = {
      header: r.header,
      content: r.message,
      message: r == null || (O = r.children) === null || O === void 0 || (O = O[1]) === null || O === void 0 || (O = O.props) === null || O === void 0 ? void 0 : O.children
    }, xe = {
      headerRef: X,
      contentRef: H,
      footerRef: Y,
      closeRef: q,
      hide: Ot,
      message: ne
    };
    return Q.getJSXElement(t.content, xe);
  }, Vt = function() {
    var O = lt(), ne = wt(), xe = Bt(), Re = Qt();
    return /* @__PURE__ */ d.createElement(d.Fragment, null, O, ne, xe, Re);
  }, en = function() {
    var O = c + "_header", ne = c + "_content", xe = {
      enter: r.position === "center" ? 150 : 300,
      exit: r.position === "center" ? 150 : 300
    }, Re = e({
      ref: G,
      style: Z("mask"),
      className: B("mask"),
      onPointerUp: mt
    }, j("mask")), Se = e({
      ref: E,
      id: c,
      className: qe(r.className, B("root", {
        props: r,
        maximized: de,
        context: a
      })),
      style: r.style,
      onClick: r.onClick,
      role: "dialog",
      "aria-labelledby": O,
      "aria-describedby": ne,
      "aria-modal": r.modal,
      onPointerDown: on
    }, po.getOtherProps(r), j("root")), $ = e({
      classNames: B("transition"),
      timeout: xe,
      in: w,
      options: r.transitionOptions,
      unmountOnExit: !0,
      onEnter: je,
      onEntered: $e,
      onExiting: ft,
      onExited: Nt
    }, j("transition")), V = null;
    t != null && t.content ? V = zt() : V = Vt();
    var ue = /* @__PURE__ */ d.createElement("div", Re, /* @__PURE__ */ d.createElement($a, Qi({
      nodeRef: E
    }, $), /* @__PURE__ */ d.createElement("div", Se, /* @__PURE__ */ d.createElement(ih, {
      autoFocus: r.focusOnShow
    }, V))));
    return /* @__PURE__ */ d.createElement(Xr, {
      element: ue,
      appendTo: r.appendTo,
      visible: !0
    });
  };
  return v && en();
});
Ou.displayName = "Dialog";
function tl() {
  return tl = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = arguments[n];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    }
    return t;
  }, tl.apply(this, arguments);
}
function dh(t) {
  if (Array.isArray(t)) return t;
}
function fh(t, n) {
  var e = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (e != null) {
    var a, r, o, s, i = [], c = !0, f = !1;
    try {
      if (o = (e = e.call(t)).next, n !== 0) for (; !(c = (a = o.call(e)).done) && (i.push(a.value), i.length !== n); c = !0) ;
    } catch (m) {
      f = !0, r = m;
    } finally {
      try {
        if (!c && e.return != null && (s = e.return(), Object(s) !== s)) return;
      } finally {
        if (f) throw r;
      }
    }
    return i;
  }
}
function lc(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var e = 0, a = new Array(n); e < n; e++) a[e] = t[e];
  return a;
}
function ph(t, n) {
  if (t) {
    if (typeof t == "string") return lc(t, n);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set") return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return lc(t, n);
  }
}
function vh() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sc(t, n) {
  return dh(t) || fh(t, n) || ph(t, n) || vh();
}
function Aa(t) {
  "@babel/helpers - typeof";
  return Aa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Aa(t);
}
function mh(t, n) {
  if (Aa(t) !== "object" || t === null) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var a = e.call(t, n || "default");
    if (Aa(a) !== "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(t);
}
function gh(t) {
  var n = mh(t, "string");
  return Aa(n) === "symbol" ? n : String(n);
}
function hh(t, n, e) {
  return n = gh(n), n in t ? Object.defineProperty(t, n, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[n] = e, t;
}
var bh = {
  root: "p-confirm-dialog",
  message: "p-confirm-dialog-message",
  icon: "p-confirm-dialog-icon",
  acceptButton: "p-confirm-dialog-accept",
  rejectButton: function(n) {
    var e = n.getPropValue;
    return qe("p-confirm-dialog-reject", {
      "p-button-text": !e("rejectClassName")
    });
  }
}, vo = ot.extend({
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
    classes: bh
  }
});
function cc(t, n) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    n && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function Fr(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? cc(Object(e), !0).forEach(function(a) {
      hh(t, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : cc(Object(e)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return t;
}
var yh = function() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  n = Fr(Fr({}, n), {
    visible: n.visible === void 0 ? !0 : n.visible
  }), n.visible && Hn.emit("confirm-dialog", n);
  var e = function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Hn.emit("confirm-dialog", Fr(Fr(Fr({}, n), o), {
      visible: !0
    }));
  }, a = function() {
    Hn.emit("confirm-dialog", {
      visible: !1
    });
  };
  return {
    show: e,
    hide: a
  };
}, wh = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(function(t, n) {
  var e = cn(), a = d.useContext(Kt), r = vo.getProps(t, a), o = d.useState(r.visible), s = sc(o, 2), i = s[0], c = s[1], f = d.useState(!1), m = sc(f, 2), v = m[0], x = m[1], b = d.useRef(null), N = d.useRef(!1), w = d.useRef(null), T = function() {
    var de = r.group;
    return b.current && (de = b.current.group), Object.assign({}, r, b.current, {
      group: de
    });
  }, P = function(de) {
    return T()[de];
  }, D = function(de) {
    for (var F = arguments.length, se = new Array(F > 1 ? F - 1 : 0), ae = 1; ae < F; ae++)
      se[ae - 1] = arguments[ae];
    return Q.getPropValue(P(de), se);
  }, C = P("acceptLabel") || fn("accept"), _ = P("rejectLabel") || fn("reject"), E = {
    props: r,
    state: {
      visible: i
    }
  }, G = vo.setMetaData(E), S = G.ptm, H = G.cx, X = G.isUnstyled;
  qn(vo.css.styles, X, {
    name: "confirmdialog"
  });
  var Y = function() {
    N.current || (N.current = !0, D("accept"), W("accept"));
  }, q = function() {
    N.current || (N.current = !0, D("reject"), W("reject"));
  }, oe = function() {
    var de = T();
    de.group === r.group && (c(!0), N.current = !1, w.current = document.activeElement);
  }, W = function() {
    var de = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "cancel";
    c(!1), D("onHide", {
      result: de
    }), R.focus(w.current), w.current = null;
  }, ve = function(de) {
    if (de.tagKey === r.tagKey) {
      var F = i !== de.visible, se = P("target") !== de.target;
      se && !r.target ? (W(), b.current = de, x(!0)) : F && (b.current = de, de.visible ? oe() : W());
    }
  };
  d.useEffect(function() {
    r.visible ? oe() : W();
  }, [r.visible]), d.useEffect(function() {
    return !r.target && !r.message && Hn.on("confirm-dialog", ve), function() {
      Hn.off("confirm-dialog", ve);
    };
  }, [r.target]), dt(function() {
    v && oe();
  }, [v]), An(function() {
    Hn.off("confirm-dialog", ve);
  }), d.useImperativeHandle(n, function() {
    return {
      props: r,
      confirm: ve
    };
  });
  var ge = function() {
    var de = P("defaultFocus"), F = qe("p-confirm-dialog-accept", P("acceptClassName")), se = qe("p-confirm-dialog-reject", {
      "p-button-text": !P("rejectClassName")
    }, P("rejectClassName")), ae = e({
      label: _,
      autoFocus: de === "reject",
      icon: P("rejectIcon"),
      className: qe(P("rejectClassName"), H("rejectButton", {
        getPropValue: P
      })),
      onClick: q,
      pt: S("rejectButton"),
      unstyled: r.unstyled,
      __parentMetadata: {
        parent: E
      }
    }, S("rejectButton")), M = e({
      label: C,
      autoFocus: de === void 0 || de === "accept",
      icon: P("acceptIcon"),
      className: qe(P("acceptClassName"), H("acceptButton")),
      onClick: Y,
      pt: S("acceptButton"),
      unstyled: r.unstyled,
      __parentMetadata: {
        parent: E
      }
    }, S("acceptButton")), j = /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement(xn, ae), /* @__PURE__ */ d.createElement(xn, M));
    if (P("footer")) {
      var B = {
        accept: Y,
        reject: q,
        acceptClassName: F,
        rejectClassName: se,
        acceptLabel: C,
        rejectLabel: _,
        element: j,
        props: T()
      };
      return Q.getJSXElement(P("footer"), B);
    }
    return j;
  }, Ce = function() {
    var de = T(), F = Q.getJSXElement(P("message"), de), se = e({
      className: H("icon")
    }, S("icon")), ae = Wt.getJSXIcon(P("icon"), Fr({}, se), {
      props: de
    }), M = ge(), j = e({
      className: H("message")
    }, S("message")), B = e({
      visible: i,
      className: qe(P("className"), H("root")),
      footer: M,
      onHide: W,
      breakpoints: P("breakpoints"),
      pt: de.pt,
      unstyled: r.unstyled,
      appendTo: P("appendTo"),
      __parentMetadata: {
        parent: E
      }
    }, vo.getOtherProps(de));
    return /* @__PURE__ */ d.createElement(Ou, tl({}, B, {
      content: t == null ? void 0 : t.content
    }), ae, /* @__PURE__ */ d.createElement("span", j, F));
  }, Oe = Ce();
  return /* @__PURE__ */ d.createElement(Xr, {
    element: Oe,
    appendTo: P("appendTo")
  });
}));
wh.displayName = "ConfirmDialog";
function xh({ id: t, config: n, active: e, setActive: a, onItemChange: r, onItemRemove: o }) {
  const { attributes: s, listeners: i, setNodeRef: c, setActivatorNodeRef: f, transform: m, transition: v } = Bg({
    id: t,
    data: {
      id: t,
      item: n
    }
  }), x = {
    transform: Zn.Transform.toString(m),
    transition: v
  };
  let b = "sortable-item";
  n.id == (e == null ? void 0 : e.id) && (b = b + " active");
  const N = () => {
    yh({
      message: "Are you sure you want to remove this item?",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      accept: () => o(t)
      // reject: () => rejectFunc()
    });
  };
  let w = /* @__PURE__ */ k.jsx(xn, { size: "small", outlined: !0, label: "Edit", icon: "pi pi-pencil", onClick: () => a(n) });
  return e && e.id == n.id && (w = /* @__PURE__ */ k.jsx(xn, { size: "small", outlined: !0, label: "Done", icon: "pi pi-pencil", onClick: () => a(void 0) })), /* @__PURE__ */ k.jsx(k.Fragment, { children: /* @__PURE__ */ k.jsxs("div", { ref: c, style: x, ...s, className: b, children: [
    /* @__PURE__ */ k.jsx(Vc, { item: n, onChange: r }),
    /* @__PURE__ */ k.jsxs("div", { className: "flex flex-row align-items-center item-footer", children: [
      /* @__PURE__ */ k.jsxs("div", { className: "flex-grow-1 item-type", children: [
        " ",
        n.type
      ] }),
      /* @__PURE__ */ k.jsxs(xu, { children: [
        " ",
        /* @__PURE__ */ k.jsx(
          xn,
          {
            ...i,
            ref: f,
            size: "small",
            outlined: !0,
            label: "Order",
            icon: "pi pi-sort"
          }
        ),
        w,
        /* @__PURE__ */ k.jsx(xn, { size: "small", outlined: !0, label: "Remove", icon: "pi pi-trash", onClick: N })
      ] })
    ] })
  ] }) });
}
function Sh({ form: t, onFormChange: n, activeItem: e, setActiveItem: a }) {
  console.log("reloading CanvasComponent");
  const [r, o] = ct((t == null ? void 0 : t.config) ?? []);
  Xe(() => {
    t && t.config && t.config != r && (console.log("resetting items", t, t.config, r), o(t.config ?? []));
  }, [t]);
  const s = (b) => {
    const N = Ta(t);
    N.config = N.config.filter(
      (w) => w.id != b
    ), n(N), e && e.id == b && a(void 0);
  }, i = (b) => {
    const N = r.map((T) => T.id == b.id ? b : T);
    o(N);
    const w = Ta(t);
    w.config = N, n(w);
  }, { listeners: c, setNodeRef: f, transform: m, transition: v } = mu({
    id: "canvas_droppable",
    data: {
      parent: null,
      isContainer: !0
    }
  }), x = {
    transform: Zn.Transform.toString(m),
    transition: v
  };
  return /* @__PURE__ */ k.jsx("div", { ref: f, className: "canvas", style: x, ...c, children: r == null ? void 0 : r.map((b) => /* @__PURE__ */ k.jsx(
    xh,
    {
      id: b.id,
      config: b,
      active: e,
      setActive: a,
      onItemChange: i,
      onItemRemove: s
    },
    b.id
  )) });
}
const Eh = ({ item: t, onChange: n }) => {
  const e = Tr.getByItem(t);
  return e ? ze.createElement(e.settings.render, {
    config: t,
    onChange: n
  }) : ze.createElement(
    () => /* @__PURE__ */ k.jsxs("div", { children: [
      "The component ",
      t.type,
      " was not found."
    ] })
  );
};
function Ch({ form: t, onFormChange: n, activeItem: e, setActiveItem: a }) {
  console.log("reloading PropertiesComponent");
  const [r, o] = ct(t), [s, i] = ct(e), c = (v) => {
    console.log("handleFormItemChange", v), i(v);
    const x = Ta(r);
    x.config = x.config.map((b) => b.id == v.id ? v : b), n(x);
  }, f = (v) => {
    const x = { ...r, [v.target.name]: v.target.value };
    console.log(x), o(x), n(x);
  }, m = () => {
    a(void 0);
  };
  if (console.log("activeItem", s), Xe(() => {
    i(e);
  }, [e]), Xe(() => {
    o(t);
  }, [t]), s) {
    const v = Tr.getByItem(s);
    if (v) {
      const x = v.icon;
      return /* @__PURE__ */ k.jsx(k.Fragment, { children: /* @__PURE__ */ k.jsxs("div", { className: "properties active", children: [
        /* @__PURE__ */ k.jsxs("div", { className: "item-panel-item flex align-items-center", children: [
          /* @__PURE__ */ k.jsxs("div", { className: "flex-grow-1 flex align-items-center", children: [
            /* @__PURE__ */ k.jsx("div", { className: "item-icon mr-2", children: /* @__PURE__ */ k.jsx(x, {}) }),
            /* @__PURE__ */ k.jsx("div", { children: /* @__PURE__ */ k.jsx("h2", { children: v.heading }) })
          ] }),
          /* @__PURE__ */ k.jsx(xn, { onClick: m, size: "small", outlined: !0, icon: "pi pi-times" })
        ] }),
        /* @__PURE__ */ k.jsx(Eh, { item: s, onChange: c })
      ] }) });
    }
    return ze.createElement(
      () => /* @__PURE__ */ k.jsxs("div", { children: [
        "The component ",
        s.type,
        " was not found."
      ] })
    );
  } else
    return /* @__PURE__ */ k.jsx(k.Fragment, { children: /* @__PURE__ */ k.jsxs("div", { className: "properties", children: [
      /* @__PURE__ */ k.jsx("div", { className: "item-panel-item flex px-3", children: /* @__PURE__ */ k.jsx("div", { children: /* @__PURE__ */ k.jsx("h2", { children: "Form Settings" }) }) }),
      /* @__PURE__ */ k.jsx(vr, { activeIndex: 0, children: /* @__PURE__ */ k.jsx(Jn, { header: "General", children: /* @__PURE__ */ k.jsx("div", { className: "form-item flex flex-column gap-4", children: /* @__PURE__ */ k.jsxs("div", { className: "flex flex-column gap-2", children: [
        /* @__PURE__ */ k.jsx("label", { htmlFor: "label", children: "Form label" }),
        /* @__PURE__ */ k.jsx(
          Zt,
          {
            onChange: f,
            name: "label",
            value: r.label ?? "",
            className: "w-full"
          }
        )
      ] }) }) }, "general") })
    ] }) });
}
function nl(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var e = 0, a = new Array(n); e < n; e++) a[e] = t[e];
  return a;
}
function Oh(t) {
  if (Array.isArray(t)) return nl(t);
}
function Dh(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Du(t, n) {
  if (t) {
    if (typeof t == "string") return nl(t, n);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set") return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return nl(t, n);
  }
}
function Ph() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Th(t) {
  return Oh(t) || Dh(t) || Du(t) || Ph();
}
function ja(t) {
  "@babel/helpers - typeof";
  return ja = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ja(t);
}
function kh(t, n) {
  if (ja(t) !== "object" || t === null) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var a = e.call(t, n || "default");
    if (ja(a) !== "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(t);
}
function qh(t) {
  var n = kh(t, "string");
  return ja(n) === "symbol" ? n : String(n);
}
function Pu(t, n, e) {
  return n = qh(n), n in t ? Object.defineProperty(t, n, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[n] = e, t;
}
function Ih(t) {
  if (Array.isArray(t)) return t;
}
function Rh(t, n) {
  var e = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (e != null) {
    var a, r, o, s, i = [], c = !0, f = !1;
    try {
      if (o = (e = e.call(t)).next, n !== 0) for (; !(c = (a = o.call(e)).done) && (i.push(a.value), i.length !== n); c = !0) ;
    } catch (m) {
      f = !0, r = m;
    } finally {
      try {
        if (!c && e.return != null && (s = e.return(), Object(s) !== s)) return;
      } finally {
        if (f) throw r;
      }
    }
    return i;
  }
}
function Nh() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ua(t, n) {
  return Ih(t) || Rh(t, n) || Du(t, n) || Nh();
}
function uc(t, n) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    n && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function mo(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? uc(Object(e), !0).forEach(function(a) {
      Pu(t, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : uc(Object(e)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return t;
}
var Mh = {
  navcontent: "p-tabview-nav-content",
  nav: "p-tabview-nav",
  inkbar: "p-tabview-ink-bar",
  panelcontainer: function(n) {
    var e = n.props;
    return qe("p-tabview-panels", e.panelContainerClassName);
  },
  prevbutton: "p-tabview-nav-prev p-tabview-nav-btn p-link",
  nextbutton: "p-tabview-nav-next p-tabview-nav-btn p-link",
  root: function(n) {
    var e = n.props;
    return qe("p-tabview p-component", {
      "p-tabview-scrollable": e.scrollable
    });
  },
  navcontainer: "p-tabview-nav-container",
  tab: {
    header: function(n) {
      var e = n.selected, a = n.disabled, r = n.headerClassName, o = n._className;
      return qe("p-unselectable-text", {
        "p-tabview-selected p-highlight": e,
        "p-disabled": a
      }, r, o);
    },
    headertitle: "p-tabview-title",
    headeraction: "p-tabview-nav-link",
    closeIcon: "p-tabview-close",
    content: function(n) {
      var e = n.props, a = n.selected, r = n.getTabProp, o = n.tab, s = n.isSelected, i = n.shouldUseTab, c = n.index;
      return i(o, c) && (!e.renderActiveOnly || s(c)) ? qe(r(o, "contentClassName"), r(o, "className"), "p-tabview-panel", {
        "p-hidden": !a
      }) : void 0;
    }
  }
}, Ah = {
  tab: {
    header: function(n) {
      var e = n.headerStyle, a = n._style;
      return mo(mo({}, e || {}), a || {});
    },
    content: function(n) {
      var e = n.props, a = n.getTabProp, r = n.tab, o = n.isSelected, s = n.shouldUseTab, i = n.index;
      return s(r, i) && (!e.renderActiveOnly || o(i)) ? mo(mo({}, a(r, "contentStyle") || {}), a(r, "style") || {}) : void 0;
    }
  }
}, go = ot.extend({
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
    classes: Mh,
    inlineStyles: Ah
  }
}), Kr = ot.extend({
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
  getCProp: function(n, e) {
    return Q.getComponentProp(n, e, Kr.defaultProps);
  },
  getCProps: function(n) {
    return Q.getComponentProps(n, Kr.defaultProps);
  },
  getCOtherProps: function(n) {
    return Q.getComponentDiffProps(n, Kr.defaultProps);
  }
});
function dc(t, n) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    n && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function ho(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? dc(Object(e), !0).forEach(function(a) {
      Pu(t, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : dc(Object(e)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return t;
}
var rl = function() {
}, Tu = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var e = cn(), a = d.useContext(Kt), r = go.getProps(t, a), o = d.useState(r.id), s = ua(o, 2), i = s[0], c = s[1], f = d.useState(!0), m = ua(f, 2), v = m[0], x = m[1], b = d.useState(!1), N = ua(b, 2), w = N[0], T = N[1], P = d.useState([]), D = ua(P, 2), C = D[0], _ = D[1], E = d.useState(r.activeIndex), G = ua(E, 2), S = G[0], H = G[1], X = d.useRef(null), Y = d.useRef(null), q = d.useRef(null), oe = d.useRef(null), W = d.useRef(null), ve = d.useRef(null), ge = d.useRef({}), Ce = r.onTabChange ? r.activeIndex : S, Oe = d.Children.count(r.children), we = {
    props: r,
    state: {
      id: i,
      isPrevButtonDisabled: v,
      isNextButtonDisabled: w,
      hiddenTabsState: C,
      activeIndex: S
    }
  }, de = go.setMetaData(ho({}, we)), F = de.ptm, se = de.ptmo, ae = de.cx, M = de.sx, j = de.isUnstyled;
  qn(go.css.styles, j, {
    name: "tabview"
  });
  var B = function(J, fe, pe) {
    var De = {
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
      tab: De
    }), F("tabpanel.".concat(fe), {
      tabpanel: De
    }), F("tabpanel.".concat(fe), De), se(ie(J, "pt"), fe, De));
  }, Z = function(J) {
    return J === Ce;
  }, ie = function(J, fe) {
    return Kr.getCProp(J, fe);
  }, K = function(J) {
    return J && ie(J, "visible") && Q.isValidChild(J, "TabPanel") && C.every(function(fe) {
      return fe !== J.key;
    });
  }, z = function(J) {
    var fe = d.Children.map(r.children, function(pe, De) {
      if (K(pe))
        return {
          tab: pe,
          index: De
        };
    });
    return fe.find(function(pe) {
      var De = pe.tab, lt = pe.index;
      return !ie(De, "disabled") && lt >= J;
    }) || fe.reverse().find(function(pe) {
      var De = pe.tab, lt = pe.index;
      return !ie(De, "disabled") && J > lt;
    });
  }, ee = function(J, fe) {
    J.preventDefault();
    var pe = r.onBeforeTabClose, De = r.onTabClose, lt = r.children, wt = lt[fe].key;
    pe && pe({
      originalEvent: J,
      index: fe
    }) === !1 || (_([].concat(Th(C), [wt])), De && De({
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
  }, _e = function(J, fe, pe) {
    switch (J.code) {
      case "ArrowLeft":
        Ye(J);
        break;
      case "ArrowRight":
        Je(J);
        break;
      case "Home":
        Me(J);
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
    fe ? vt(fe) : Me(J), J.preventDefault();
  }, Ye = function(J) {
    var fe = At(J.target.parentElement);
    fe ? vt(fe) : nt(J), J.preventDefault();
  }, Me = function(J) {
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
    return pe ? R.getAttribute(pe, "data-p-disabled") || R.getAttribute(pe, "data-pc-section") === "inkbar" ? Ie(pe) : R.findSingle(pe, '[data-pc-section="headeraction"]') : null;
  }, At = function Ie(J) {
    var fe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, pe = fe ? J : J.previousElementSibling;
    return pe ? R.getAttribute(pe, "data-p-disabled") || R.getAttribute(pe, "data-pc-section") === "inkbar" ? Ie(pe) : R.findSingle(pe, '[data-pc-section="headeraction"]') : null;
  }, St = function() {
    return Ct(q.current.firstElementChild, !0);
  }, Ot = function() {
    return At(q.current.lastElementChild, !0);
  }, vt = function(J) {
    J && (R.focus(J), mt({
      element: J
    }));
  }, on = function() {
    var J = ge.current["tab_".concat(Ce)];
    oe.current.style.width = R.getWidth(J) + "px", oe.current.style.left = R.getOffset(J).left - R.getOffset(q.current).left + "px";
  }, mt = function(J) {
    var fe = J.index, pe = J.element, De = pe || ge.current["tab_".concat(fe)];
    De && De.scrollIntoView && De.scrollIntoView({
      block: "nearest"
    });
  }, Dt = function() {
    var J = Y.current, fe = J.scrollLeft, pe = J.scrollWidth, De = R.getWidth(Y.current);
    x(fe === 0), T(parseInt(fe) === pe - De);
  }, Rt = function(J) {
    r.scrollable && Dt(), J.preventDefault();
  }, Ht = function() {
    return [W.current, ve.current].reduce(function(J, fe) {
      return fe ? J + R.getWidth(fe) : J;
    }, 0);
  }, jt = function() {
    var J = R.getWidth(Y.current) - Ht(), fe = Y.current.scrollLeft - J;
    Y.current.scrollLeft = fe <= 0 ? 0 : fe;
  }, _t = function() {
    var J = R.getWidth(Y.current) - Ht(), fe = Y.current.scrollLeft + J, pe = Y.current.scrollWidth - J;
    Y.current.scrollLeft = fe >= pe ? pe : fe;
  }, Le = function() {
    x(!0), T(!1), _([]), r.onTabChange ? r.onTabChange({
      index: Ce
    }) : H(r.activeIndex);
  };
  d.useEffect(function() {
    on(), Dt();
  }), kn(function() {
    i || c(Er());
  }), dt(function() {
    if (Q.isNotEmpty(C)) {
      var Ie = z(C[C.length - 1]);
      Ie && Ee(null, Ie.tab, Ie.index);
    }
  }, [C]), dt(function() {
    r.activeIndex !== S && mt({
      index: r.activeIndex
    });
  }, [r.activeIndex]), d.useImperativeHandle(n, function() {
    return {
      props: r,
      reset: Le,
      getElement: function() {
        return X.current;
      }
    };
  });
  var re = function(J, fe) {
    var pe = Z(fe), De = Kr.getCProps(J), lt = De.headerStyle, wt = De.headerClassName, Bt = De.style, Qt = De.className, zt = De.disabled, Vt = De.leftIcon, en = De.rightIcon, h = De.header, O = De.headerTemplate, ne = De.closable, xe = De.closeIcon, Re = i + "_header_" + fe, Se = i + fe + "_content", $ = zt || !pe ? -1 : 0, V = Vt && Wt.getJSXIcon(Vt, void 0, {
      props: r
    }), ue = e({
      className: ae("tab.headertitle")
    }, B(J, "headertitle", fe)), me = /* @__PURE__ */ d.createElement("span", ue, h), he = en && Wt.getJSXIcon(en, void 0, {
      props: r
    }), be = e({
      className: ae("tab.closeIcon"),
      onClick: function(tt) {
        return ee(tt, fe);
      }
    }, B(J, "closeIcon", fe)), Te = xe || /* @__PURE__ */ d.createElement(Ha, be), We = ne ? Wt.getJSXIcon(Te, ho({}, be), {
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
        return _e(tt, J, fe);
      }
    }, B(J, "headeraction", fe)), gt = (
      // eslint-disable /
      /* @__PURE__ */ d.createElement("a", Fe, V, me, he, We, /* @__PURE__ */ d.createElement(Yt, null))
    );
    if (O) {
      var Lt = {
        className: "p-tabview-nav-link",
        titleClassName: "p-tabview-title",
        onClick: function(tt) {
          return Ee(tt, J, fe);
        },
        onKeyDown: function(tt) {
          return _e(tt, J, fe);
        },
        leftIconElement: V,
        titleElement: me,
        rightIconElement: he,
        element: gt,
        props: r,
        index: fe,
        selected: pe,
        ariaControls: Se
      };
      gt = Q.getJSXElement(O, Lt);
    }
    var Pt = e({
      ref: function(tt) {
        return ge.current["tab_".concat(fe)] = tt;
      },
      className: ae("tab.header", {
        selected: pe,
        disabled: zt,
        headerClassName: wt,
        _className: Qt
      }),
      style: M("tab.header", {
        headerStyle: lt,
        _style: Bt
      }),
      role: "presentation"
    }, B(J, "root", fe), B(J, "header", fe));
    return /* @__PURE__ */ d.createElement("li", Pt, gt);
  }, Pe = function() {
    return d.Children.map(r.children, function(J, fe) {
      if (K(J))
        return re(J, fe);
    });
  }, Be = function() {
    var J = Pe(), fe = e({
      id: i + "_navcontent",
      ref: Y,
      className: ae("navcontent"),
      style: r.style,
      onScroll: Rt
    }, F("navcontent")), pe = e({
      ref: q,
      className: ae("nav"),
      role: "tablist"
    }, F("nav")), De = e({
      ref: oe,
      "aria-hidden": "true",
      role: "presentation",
      className: ae("inkbar")
    }, F("inkbar"));
    return /* @__PURE__ */ d.createElement("div", fe, /* @__PURE__ */ d.createElement("ul", pe, J, /* @__PURE__ */ d.createElement("li", De)));
  }, je = function() {
    var J = e({
      className: ae("panelcontainer"),
      style: r.panelContainerStyle
    }, F("panelcontainer")), fe = d.Children.map(r.children, function(pe, De) {
      if (K(pe) && (!r.renderActiveOnly || Z(De))) {
        var lt = Z(De), wt = i + De + "_content", Bt = i + "_header_" + De, Qt = e({
          id: wt,
          className: ae("tab.content", {
            props: r,
            selected: lt,
            getTabProp: ie,
            tab: pe,
            isSelected: Z,
            shouldUseTab: K,
            index: De
          }),
          style: M("tab.content", {
            props: r,
            getTabProp: ie,
            tab: pe,
            isSelected: Z,
            shouldUseTab: K,
            index: De
          }),
          role: "tabpanel",
          "aria-labelledby": Bt
        }, Kr.getCOtherProps(pe), B(pe, "root", De), B(pe, "content", De));
        return /* @__PURE__ */ d.createElement("div", Qt, r.renderActiveOnly ? lt && ie(pe, "children") : ie(pe, "children"));
      }
    });
    return /* @__PURE__ */ d.createElement("div", J, fe);
  }, $e = function() {
    var J = e({
      "aria-hidden": "true"
    }, F("previcon")), fe = r.prevButton || /* @__PURE__ */ d.createElement(fl, J), pe = Wt.getJSXIcon(fe, ho({}, J), {
      props: r
    }), De = e({
      ref: W,
      type: "button",
      className: ae("prevbutton"),
      "aria-label": os("previousPageLabel"),
      onClick: function(wt) {
        return jt();
      }
    }, F("prevbutton"));
    return r.scrollable && !v ? /* @__PURE__ */ d.createElement("button", De, pe, /* @__PURE__ */ d.createElement(Yt, null)) : null;
  }, ft = function() {
    var J = e({
      "aria-hidden": "true"
    }, F("nexticon")), fe = r.nextButton || /* @__PURE__ */ d.createElement(_o, J), pe = Wt.getJSXIcon(fe, ho({}, J), {
      props: r
    }), De = e({
      ref: ve,
      type: "button",
      className: ae("nextbutton"),
      "aria-label": os("nextPageLabel"),
      onClick: function(wt) {
        return _t();
      }
    }, F("nextbutton"));
    if (r.scrollable && !w)
      return /* @__PURE__ */ d.createElement("button", De, pe, /* @__PURE__ */ d.createElement(Yt, null));
  }, Nt = e({
    id: i,
    ref: X,
    style: r.style,
    className: qe(r.className, ae("root"))
  }, go.getOtherProps(r), F("root")), rt = e({
    className: ae("navcontainer")
  }, F("navcontainer")), Qe = Be(), et = je(), it = $e(), ht = ft();
  return /* @__PURE__ */ d.createElement("div", Nt, /* @__PURE__ */ d.createElement("div", rt, it, Qe, ht), et);
});
rl.displayName = "TabPanel";
Tu.displayName = "TabView";
function ku({ item: t }) {
  const n = t.icon;
  return /* @__PURE__ */ k.jsx(k.Fragment, { children: /* @__PURE__ */ k.jsx("article", { className: "sidebar-field", children: /* @__PURE__ */ k.jsxs("div", { className: "item-panel-item flex p-2 w-100", children: [
    /* @__PURE__ */ k.jsx("div", { className: "item-icon mr-2", children: /* @__PURE__ */ k.jsx(n, {}) }),
    /* @__PURE__ */ k.jsxs("div", { children: [
      /* @__PURE__ */ k.jsx("div", { className: "item-title", children: t.heading }),
      /* @__PURE__ */ k.jsx("div", { className: "item-text", children: t.description })
    ] })
  ] }) }) });
}
function jh({ item: t }) {
  const n = Et(Pr()), { attributes: e, listeners: a, setNodeRef: r } = pu({
    id: n.current,
    data: {
      item: t,
      fromSidebar: !0
    }
  });
  return /* @__PURE__ */ k.jsx("div", { ref: r, className: "sidebar-field", ...e, ...a, children: /* @__PURE__ */ k.jsx(ku, { item: t }) });
}
function _h({ form: t, onFormChange: n, activeItem: e, setActiveItem: a }) {
  const [r, o] = ct(0), s = {};
  Tr.map((c) => {
    var m, v;
    const f = ((m = c.group) == null ? void 0 : m.label) || "";
    Object.keys(s).includes(f) || (s[f] = {
      label: ((v = c.group) == null ? void 0 : v.label) || "",
      items: []
    }), s[f].items.push(c);
  });
  const i = (c) => {
    o(c);
  };
  return /* @__PURE__ */ k.jsx(k.Fragment, { children: /* @__PURE__ */ k.jsxs(
    Tu,
    {
      activeIndex: r,
      onTabChange: (c) => i(c.index),
      className: "sidebar",
      children: [
        /* @__PURE__ */ k.jsxs(rl, { header: "Items", children: [
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          /* @__PURE__ */ k.jsx(vr, { activeIndex: 0, children: Object.keys(s).map((c) => /* @__PURE__ */ k.jsx(Jn, { header: s[c].label, children: s[c].items.map((f) => /* @__PURE__ */ k.jsx(jh, { item: f }, `sidebar-${f.type}`)) }, c)) })
        ] }),
        /* @__PURE__ */ k.jsxs(rl, { header: "Forms", children: [
          "forms ",
          JSON.stringify(t)
        ] })
      ]
    }
  ) });
}
function da(t) {
  var n;
  return ((n = t == null ? void 0 : t.data) == null ? void 0 : n.current) ?? {};
}
let wi = 0;
const $h = ({ config: t, onChange: n }) => {
  wi = wi + 1, console.log("******************", wi, "******************");
  const { form: e, setForm: a } = Ld(t), [r, o] = ct(void 0);
  Xe(() => {
    t && a(t);
  }, [t]), Xe(() => {
    e && n(e);
  }, [e]);
  const s = mm(
    Vs(wl),
    Vs(bl, {
      coordinateGetter: Vg
    })
  ), [i, c] = ct(), [f, m] = ct(), v = () => {
    c(void 0), m(void 0);
  }, x = (T) => {
    const { active: P } = T, D = da(P);
    console.log("handleDragStart", D);
    const { item: C } = D;
    if (D.fromSidebar) {
      const _ = C.default_config;
      _.id = Pr(), C.id = _.id, console.log("handleDragStart", "sidebar", C, _), console.log(_), c(C), o(D.item);
    } else
      m(D.item);
  }, b = (T) => {
    const { active: P, over: D } = T;
    console.log("over", D);
    const C = da(P), _ = da(D);
    if (C.fromSidebar)
      if (console.log("handleDragOver", "fromSidebar", C.item.id), e.config.findIndex((E) => E.id === C.item.id) == -1) {
        console.log("handleDragOver", "new item", C.item.default_config, _), e.config.push(C.item.default_config);
        const E = e.config.findIndex((S) => S.id === C.item.id), G = e.config.findIndex((S) => S.id === _.id);
        e.config = ba(e.config, E, G), a(e);
      } else if (!D)
        console.log("handleDragOver", "!over", _), e.config = e.config.filter((E) => E.id !== C.item.id), a(e);
      else {
        console.log("handleDragOver", "else", _);
        const E = e.config.findIndex((S) => S.id === C.item.id), G = e.config.findIndex((S) => S.id === _.id);
        console.log("arrayMove", e.config, E, G, _, C), e.config = ba(e.config, E, G), a(e), console.log("SET FORM NOW ", e.config, e.config.map((S) => S.id));
      }
    else
      e.config.findIndex((E) => E.id === C.item.id), e.config.findIndex((E) => E.id === _.id);
  }, N = (T) => {
    const { active: P, over: D } = T, C = da(P), _ = da(D);
    console.log("handleDragEnd", C, _), console.log("handleDragEnd", e.config);
    const E = e.config.findIndex((S) => S.id === C.item.id), G = e.config.findIndex((S) => S.id === _.id);
    E != G && (e.config = ba(e.config, E, G), console.log("handleDragEnd normal sorting", E, G), a(e)), o(C.item), v();
  }, w = {
    form: e,
    onFormChange: a,
    activeItem: r,
    setActiveItem: o
  };
  return console.log(a), e ? /* @__PURE__ */ k.jsx(k.Fragment, { children: /* @__PURE__ */ k.jsx("div", { className: "form-builder", children: /* @__PURE__ */ k.jsxs(
    pg,
    {
      sensors: s,
      onDragStart: x,
      onDragOver: b,
      onDragEnd: N,
      collisionDetection: bm,
      autoScroll: !0,
      children: [
        /* @__PURE__ */ k.jsx("div", { className: "sidebar-area", children: /* @__PURE__ */ k.jsx(_h, { ...w }) }),
        /* @__PURE__ */ k.jsx("div", { className: "canvas-area", children: /* @__PURE__ */ k.jsx(
          Ag,
          {
            strategy: Mg,
            items: e.config.map((T) => T.id),
            children: /* @__PURE__ */ k.jsx(Sh, { ...w })
          }
        ) }),
        /* @__PURE__ */ k.jsx("div", { className: "properties-area", children: /* @__PURE__ */ k.jsx(Ch, { ...w }) }),
        /* @__PURE__ */ k.jsxs(qg, { dropAnimation: null, children: [
          i ? /* @__PURE__ */ k.jsx(ku, { item: i }) : null,
          " ",
          f ? /* @__PURE__ */ k.jsx(
            Vc,
            {
              item: f,
              onChange: () => {
              }
            }
          ) : null
        ] })
      ]
    }
  ) }) }) : /* @__PURE__ */ k.jsx(k.Fragment, { children: /* @__PURE__ */ k.jsx("div", { children: "No form config loaded" }) });
};
export {
  $h as FormBuilder,
  Vc as ItemRender
};
//# sourceMappingURL=index.js.map
