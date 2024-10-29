(function(nn,y){typeof exports=="object"&&typeof module<"u"?y(exports,require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["exports","react","react-dom"],y):(nn=typeof globalThis<"u"?globalThis:nn||self,y(nn["Library name"]={},nn.React,nn.ReactDOM))})(this,function(nn,y,Gt){"use strict";function oc(n){const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(n){for(const e in n)if(e!=="default"){const o=Object.getOwnPropertyDescriptor(n,e);Object.defineProperty(t,e,o.get?o:{enumerable:!0,get:()=>n[e]})}}return t.default=n,Object.freeze(t)}const f=oc(y);function ac(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Jo={exports:{}},ir={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yi;function ic(){if(yi)return ir;yi=1;var n=y,t=Symbol.for("react.element"),e=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,r=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function i(l,s,c){var u,d={},m=null,v=null;c!==void 0&&(m=""+c),s.key!==void 0&&(m=""+s.key),s.ref!==void 0&&(v=s.ref);for(u in s)o.call(s,u)&&!a.hasOwnProperty(u)&&(d[u]=s[u]);if(l&&l.defaultProps)for(u in s=l.defaultProps,s)d[u]===void 0&&(d[u]=s[u]);return{$$typeof:t,type:l,key:m,ref:v,props:d,_owner:r.current}}return ir.Fragment=e,ir.jsx=i,ir.jsxs=i,ir}var lr={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wi;function lc(){return wi||(wi=1,process.env.NODE_ENV!=="production"&&function(){var n=y,t=Symbol.for("react.element"),e=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),l=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),u=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.for("react.offscreen"),E=Symbol.iterator,h="@@iterator";function C(g){if(g===null||typeof g!="object")return null;var q=E&&g[E]||g[h];return typeof q=="function"?q:null}var x=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function S(g){{for(var q=arguments.length,B=new Array(q>1?q-1:0),le=1;le<q;le++)B[le-1]=arguments[le];O("error",g,B)}}function O(g,q,B){{var le=x.ReactDebugCurrentFrame,be=le.getStackAddendum();be!==""&&(q+="%s",B=B.concat([be]));var ae=B.map(function(I){return String(I)});ae.unshift("Warning: "+q),Function.prototype.apply.call(console[g],console,ae)}}var P=!1,w=!1,T=!1,_=!1,U=!1,R;R=Symbol.for("react.module.reference");function k(g){return!!(typeof g=="string"||typeof g=="function"||g===o||g===a||U||g===r||g===c||g===u||_||g===v||P||w||T||typeof g=="object"&&g!==null&&(g.$$typeof===m||g.$$typeof===d||g.$$typeof===i||g.$$typeof===l||g.$$typeof===s||g.$$typeof===R||g.getModuleId!==void 0))}function j(g,q,B){var le=g.displayName;if(le)return le;var be=q.displayName||q.name||"";return be!==""?B+"("+be+")":B}function J(g){return g.displayName||"Context"}function z(g){if(g==null)return null;if(typeof g.tag=="number"&&S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof g=="function")return g.displayName||g.name||null;if(typeof g=="string")return g;switch(g){case o:return"Fragment";case e:return"Portal";case a:return"Profiler";case r:return"StrictMode";case c:return"Suspense";case u:return"SuspenseList"}if(typeof g=="object")switch(g.$$typeof){case l:var q=g;return J(q)+".Consumer";case i:var B=g;return J(B._context)+".Provider";case s:return j(g,g.render,"ForwardRef");case d:var le=g.displayName||null;return le!==null?le:z(g.type)||"Memo";case m:{var be=g,ae=be._payload,I=be._init;try{return z(I(ae))}catch{return null}}}return null}var Z=Object.assign,ne=0,ve,ye,ce,ee,D,G,ie;function X(){}X.__reactDisabledLog=!0;function K(){{if(ne===0){ve=console.log,ye=console.info,ce=console.warn,ee=console.error,D=console.group,G=console.groupCollapsed,ie=console.groupEnd;var g={configurable:!0,enumerable:!0,value:X,writable:!0};Object.defineProperties(console,{info:g,log:g,warn:g,error:g,group:g,groupCollapsed:g,groupEnd:g})}ne++}}function de(){{if(ne--,ne===0){var g={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:Z({},g,{value:ve}),info:Z({},g,{value:ye}),warn:Z({},g,{value:ce}),error:Z({},g,{value:ee}),group:Z({},g,{value:D}),groupCollapsed:Z({},g,{value:G}),groupEnd:Z({},g,{value:ie})})}ne<0&&S("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var fe=x.ReactCurrentDispatcher,me;function Y(g,q,B){{if(me===void 0)try{throw Error()}catch(be){var le=be.stack.trim().match(/\n( *(at )?)/);me=le&&le[1]||""}return`
`+me+g}}var N=!1,F;{var se=typeof WeakMap=="function"?WeakMap:Map;F=new se}function M(g,q){if(!g||N)return"";{var B=F.get(g);if(B!==void 0)return B}var le;N=!0;var be=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var ae;ae=fe.current,fe.current=null,K();try{if(q){var I=function(){throw Error()};if(Object.defineProperty(I.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(I,[])}catch(xe){le=xe}Reflect.construct(g,[],I)}else{try{I.call()}catch(xe){le=xe}g.call(I.prototype)}}else{try{throw Error()}catch(xe){le=xe}g()}}catch(xe){if(xe&&le&&typeof xe.stack=="string"){for(var A=xe.stack.split(`
`),V=le.stack.split(`
`),Q=A.length-1,oe=V.length-1;Q>=1&&oe>=0&&A[Q]!==V[oe];)oe--;for(;Q>=1&&oe>=0;Q--,oe--)if(A[Q]!==V[oe]){if(Q!==1||oe!==1)do if(Q--,oe--,oe<0||A[Q]!==V[oe]){var re=`
`+A[Q].replace(" at new "," at ");return g.displayName&&re.includes("<anonymous>")&&(re=re.replace("<anonymous>",g.displayName)),typeof g=="function"&&F.set(g,re),re}while(Q>=1&&oe>=0);break}}}finally{N=!1,fe.current=ae,de(),Error.prepareStackTrace=be}var ue=g?g.displayName||g.name:"",Pe=ue?Y(ue):"";return typeof g=="function"&&F.set(g,Pe),Pe}function Oe(g,q,B){return M(g,!1)}function Ie(g){var q=g.prototype;return!!(q&&q.isReactComponent)}function Te(g,q,B){if(g==null)return"";if(typeof g=="function")return M(g,Ie(g));if(typeof g=="string")return Y(g);switch(g){case c:return Y("Suspense");case u:return Y("SuspenseList")}if(typeof g=="object")switch(g.$$typeof){case s:return Oe(g.render);case d:return Te(g.type,q,B);case m:{var le=g,be=le._payload,ae=le._init;try{return Te(ae(be),q,B)}catch{}}}return""}var _e=Object.prototype.hasOwnProperty,Me={},St=x.ReactDebugCurrentFrame;function lt(g){if(g){var q=g._owner,B=Te(g.type,g._source,q?q.type:null);St.setExtraStackFrame(B)}else St.setExtraStackFrame(null)}function Xe(g,q,B,le,be){{var ae=Function.call.bind(_e);for(var I in g)if(ae(g,I)){var A=void 0;try{if(typeof g[I]!="function"){var V=Error((le||"React class")+": "+B+" type `"+I+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof g[I]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw V.name="Invariant Violation",V}A=g[I](q,I,le,B,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(Q){A=Q}A&&!(A instanceof Error)&&(lt(be),S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",le||"React class",B,I,typeof A),lt(null)),A instanceof Error&&!(A.message in Me)&&(Me[A.message]=!0,lt(be),S("Failed %s type: %s",B,A.message),lt(null))}}}var Je=Array.isArray;function bt(g){return Je(g)}function Ct(g){{var q=typeof Symbol=="function"&&Symbol.toStringTag,B=q&&g[Symbol.toStringTag]||g.constructor.name||"Object";return B}}function Ve(g){try{return Ze(g),!1}catch{return!0}}function Ze(g){return""+g}function Ft(g){if(Ve(g))return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Ct(g)),Ze(g)}var Qe=x.ReactCurrentOwner,et={key:!0,ref:!0,__self:!0,__source:!0},ot,Dt,st;st={};function ft(g){if(_e.call(g,"ref")){var q=Object.getOwnPropertyDescriptor(g,"ref").get;if(q&&q.isReactWarning)return!1}return g.ref!==void 0}function we(g){if(_e.call(g,"key")){var q=Object.getOwnPropertyDescriptor(g,"key").get;if(q&&q.isReactWarning)return!1}return g.key!==void 0}function H(g,q){if(typeof g.ref=="string"&&Qe.current&&q&&Qe.current.stateNode!==q){var B=z(Qe.current.type);st[B]||(S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',z(Qe.current.type),g.ref),st[B]=!0)}}function pe(g,q){{var B=function(){ot||(ot=!0,S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",q))};B.isReactWarning=!0,Object.defineProperty(g,"key",{get:B,configurable:!0})}}function qe(g,q){{var B=function(){Dt||(Dt=!0,S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",q))};B.isReactWarning=!0,Object.defineProperty(g,"ref",{get:B,configurable:!0})}}var Ee=function(g,q,B,le,be,ae,I){var A={$$typeof:t,type:g,key:q,ref:B,props:I,_owner:ae};return A._store={},Object.defineProperty(A._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(A,"_self",{configurable:!1,enumerable:!1,writable:!1,value:le}),Object.defineProperty(A,"_source",{configurable:!1,enumerable:!1,writable:!1,value:be}),Object.freeze&&(Object.freeze(A.props),Object.freeze(A)),A};function Se(g,q,B,le,be){{var ae,I={},A=null,V=null;B!==void 0&&(Ft(B),A=""+B),we(q)&&(Ft(q.key),A=""+q.key),ft(q)&&(V=q.ref,H(q,be));for(ae in q)_e.call(q,ae)&&!et.hasOwnProperty(ae)&&(I[ae]=q[ae]);if(g&&g.defaultProps){var Q=g.defaultProps;for(ae in Q)I[ae]===void 0&&(I[ae]=Q[ae])}if(A||V){var oe=typeof g=="function"?g.displayName||g.name||"Unknown":g;A&&pe(I,oe),V&&qe(I,oe)}return Ee(g,A,V,be,le,Qe.current,I)}}var $e=x.ReactCurrentOwner,at=x.ReactDebugCurrentFrame;function De(g){if(g){var q=g._owner,B=Te(g.type,g._source,q?q.type:null);at.setExtraStackFrame(B)}else at.setExtraStackFrame(null)}var Ne;Ne=!1;function Le(g){return typeof g=="object"&&g!==null&&g.$$typeof===t}function Ue(){{if($e.current){var g=z($e.current.type);if(g)return`

Check the render method of \``+g+"`."}return""}}function Ke(g){return""}var Ye={};function Ge(g){{var q=Ue();if(!q){var B=typeof g=="string"?g:g.displayName||g.name;B&&(q=`

Check the top-level render call using <`+B+">.")}return q}}function ct(g,q){{if(!g._store||g._store.validated||g.key!=null)return;g._store.validated=!0;var B=Ge(q);if(Ye[B])return;Ye[B]=!0;var le="";g&&g._owner&&g._owner!==$e.current&&(le=" It was passed a child from "+z(g._owner.type)+"."),De(g),S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',B,le),De(null)}}function We(g,q){{if(typeof g!="object")return;if(bt(g))for(var B=0;B<g.length;B++){var le=g[B];Le(le)&&ct(le,q)}else if(Le(g))g._store&&(g._store.validated=!0);else if(g){var be=C(g);if(typeof be=="function"&&be!==g.entries)for(var ae=be.call(g),I;!(I=ae.next()).done;)Le(I.value)&&ct(I.value,q)}}}function yt(g){{var q=g.type;if(q==null||typeof q=="string")return;var B;if(typeof q=="function")B=q.propTypes;else if(typeof q=="object"&&(q.$$typeof===s||q.$$typeof===d))B=q.propTypes;else return;if(B){var le=z(q);Xe(B,g.props,"prop",le,g)}else if(q.PropTypes!==void 0&&!Ne){Ne=!0;var be=z(q);S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",be||"Unknown")}typeof q.getDefaultProps=="function"&&!q.getDefaultProps.isReactClassApproved&&S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function wt(g){{for(var q=Object.keys(g.props),B=0;B<q.length;B++){var le=q[B];if(le!=="children"&&le!=="key"){De(g),S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",le),De(null);break}}g.ref!==null&&(De(g),S("Invalid attribute `ref` supplied to `React.Fragment`."),De(null))}}var xt={};function Nt(g,q,B,le,be,ae){{var I=k(g);if(!I){var A="";(g===void 0||typeof g=="object"&&g!==null&&Object.keys(g).length===0)&&(A+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var V=Ke();V?A+=V:A+=Ue();var Q;g===null?Q="null":bt(g)?Q="array":g!==void 0&&g.$$typeof===t?(Q="<"+(z(g.type)||"Unknown")+" />",A=" Did you accidentally export a JSX literal instead of a component?"):Q=typeof g,S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",Q,A)}var oe=Se(g,q,B,be,ae);if(oe==null)return oe;if(I){var re=q.children;if(re!==void 0)if(le)if(bt(re)){for(var ue=0;ue<re.length;ue++)We(re[ue],g);Object.freeze&&Object.freeze(re)}else S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else We(re,g)}if(_e.call(q,"key")){var Pe=z(g),xe=Object.keys(q).filter(function(tt){return tt!=="key"}),Be=xe.length>0?"{key: someKey, "+xe.join(": ..., ")+": ...}":"{key: someKey}";if(!xt[Pe+Be]){var pt=xe.length>0?"{"+xe.join(": ..., ")+": ...}":"{}";S(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Be,Pe,pt,Pe),xt[Pe+Be]=!0}}return g===o?wt(oe):yt(oe),oe}}function en(g,q,B){return Nt(g,q,B,!0)}function At(g,q,B){return Nt(g,q,B,!1)}var kt=At,Yt=en;lr.Fragment=o,lr.jsx=kt,lr.jsxs=Yt}()),lr}process.env.NODE_ENV==="production"?Jo.exports=ic():Jo.exports=lc();var p=Jo.exports;class sc{constructor(t){this.label=t}}class Yr extends sc{constructor(t){super(t.label)}}class cc{constructor(t,e){this.render=t,this.validation=e}}class Ot extends cc{constructor(t){super(t.render,t.validation)}}class uc{constructor(t,e,o,r,a,i,l,s,c){this.form=t,this.settings=e,this.type=o,this.heading=r,this.description=a,this.hidden=i,this.icon=l,this.data=s,this.group=c,this.group||(this.group=new Yr({label:"None"}))}}let pn=class extends uc{constructor(t){super(t.form,t.settings,t.type,t.heading,t.description,t.hidden,t.icon,t.data,t.group)}};class Gr{constructor(t=null,e=[]){this.group=t,this.items=e}registerItem(t,e){e?t.group=e:this.group&&(t.group=this.group),this.items.push(t)}addRegistry(t){for(const e of t)this.items.push(e)}getByItem(t){if(t)return this.items.find(e=>e.type===t.type)}*[Symbol.iterator](){for(const t of this.items)yield t}map(t){return this.items.map((e,o,r)=>t(e,o,r))}}const Zo={id:null,label:null,created_at:null,items:[]},xi=n=>(n.items.map(t=>{let e=Cn.getByItem(t);return e?{...e.data,...t}:t}),n),Ei=(n=Zo)=>{const t={...Zo,...n},[e,o]=y.useState(xi(t));return{form:e,setForm:r=>{o(xi({...Zo,...r}))}}},dc="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let rn=(n=21)=>{let t="",e=crypto.getRandomValues(new Uint8Array(n));for(;n--;)t+=dc[e[n]&63];return t};const $n={id:rn(),type:"content-html",label:"",value:"",placeholder:""},fc=({item:n,onChange:t,config:e})=>{const[o,r]=y.useState({...$n,...n});y.useEffect(()=>{r({...$n,...n})},[n]);const a=Math.random().toString(36).substring(2,15);return p.jsx(p.Fragment,{children:p.jsx("article",{children:p.jsxs("div",{className:"flex flex-column gap-2",children:[p.jsx("label",{htmlFor:a,children:o.label}),p.jsx("div",{dangerouslySetInnerHTML:{__html:o.value}})]})})})},pc=n=>({});var Si;function Qo(){return Qo=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)({}).hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},Qo.apply(null,arguments)}var mc=function(t){return f.createElement("svg",Qo({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512"},t),Si||(Si=f.createElement("path",{d:"M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6m80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3l89.3 89.4-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3"})))};function vc(n){if(Array.isArray(n))return n}function gc(n,t){var e=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(e!=null){var o,r,a,i,l=[],s=!0,c=!1;try{if(a=(e=e.call(n)).next,t!==0)for(;!(s=(o=a.call(e)).done)&&(l.push(o.value),l.length!==t);s=!0);}catch(u){c=!0,r=u}finally{try{if(!s&&e.return!=null&&(i=e.return(),Object(i)!==i))return}finally{if(c)throw r}}return l}}function ea(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}function Ci(n,t){if(n){if(typeof n=="string")return ea(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return ea(n,t)}}function hc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xr(n,t){return vc(n)||gc(n,t)||Ci(n,t)||hc()}function vt(n){"@babel/helpers - typeof";return vt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vt(n)}function ge(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];if(t){for(var o=[],r=0;r<t.length;r++){var a=t[r];if(a){var i=vt(a);if(i==="string"||i==="number")o.push(a);else if(i==="object"){var l=Array.isArray(a)?a:Object.entries(a).map(function(s){var c=Xr(s,2),u=c[0],d=c[1];return d?u:null});o=l.length?o.concat(l.filter(function(s){return!!s})):o}}}return o.join(" ").trim()}}function bc(n){if(Array.isArray(n))return ea(n)}function yc(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function wc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jr(n){return bc(n)||yc(n)||Ci(n)||wc()}function ta(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function xc(n,t){if(vt(n)!=="object"||n===null)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var o=e.call(n,t||"default");if(vt(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function Oi(n){var t=xc(n,"string");return vt(t)==="symbol"?t:String(t)}function Ec(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,Oi(o.key),o)}}function na(n,t,e){return e&&Ec(n,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function Zr(n,t,e){return t=Oi(t),t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function ra(n,t){var e=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(!e){if(Array.isArray(n)||(e=Sc(n))||t){e&&(n=e);var o=0,r=function(){};return{s:r,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(c){throw c},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,i=!1,l;return{s:function(){e=e.call(n)},n:function(){var c=e.next();return a=c.done,c},e:function(c){i=!0,l=c},f:function(){try{!a&&e.return!=null&&e.return()}finally{if(i)throw l}}}}function Sc(n,t){if(n){if(typeof n=="string")return qi(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return qi(n,t)}}function qi(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}var $=function(){function n(){ta(this,n)}return na(n,null,[{key:"innerWidth",value:function(e){if(e){var o=e.offsetWidth,r=getComputedStyle(e);return o=o+(parseFloat(r.paddingLeft)+parseFloat(r.paddingRight)),o}return 0}},{key:"width",value:function(e){if(e){var o=e.offsetWidth,r=getComputedStyle(e);return o=o-(parseFloat(r.paddingLeft)+parseFloat(r.paddingRight)),o}return 0}},{key:"getBrowserLanguage",value:function(){return navigator.userLanguage||navigator.languages&&navigator.languages.length&&navigator.languages[0]||navigator.language||navigator.browserLanguage||navigator.systemLanguage||"en"}},{key:"getWindowScrollTop",value:function(){var e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}},{key:"getWindowScrollLeft",value:function(){var e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}},{key:"getOuterWidth",value:function(e,o){if(e){var r=e.getBoundingClientRect().width||e.offsetWidth;if(o){var a=getComputedStyle(e);r=r+(parseFloat(a.marginLeft)+parseFloat(a.marginRight))}return r}return 0}},{key:"getOuterHeight",value:function(e,o){if(e){var r=e.getBoundingClientRect().height||e.offsetHeight;if(o){var a=getComputedStyle(e);r=r+(parseFloat(a.marginTop)+parseFloat(a.marginBottom))}return r}return 0}},{key:"getClientHeight",value:function(e,o){if(e){var r=e.clientHeight;if(o){var a=getComputedStyle(e);r=r+(parseFloat(a.marginTop)+parseFloat(a.marginBottom))}return r}return 0}},{key:"getClientWidth",value:function(e,o){if(e){var r=e.clientWidth;if(o){var a=getComputedStyle(e);r=r+(parseFloat(a.marginLeft)+parseFloat(a.marginRight))}return r}return 0}},{key:"getViewport",value:function(){var e=window,o=document,r=o.documentElement,a=o.getElementsByTagName("body")[0],i=e.innerWidth||r.clientWidth||a.clientWidth,l=e.innerHeight||r.clientHeight||a.clientHeight;return{width:i,height:l}}},{key:"getOffset",value:function(e){if(e){var o=e.getBoundingClientRect();return{top:o.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:o.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}},{key:"index",value:function(e){if(e)for(var o=e.parentNode.childNodes,r=0,a=0;a<o.length;a++){if(o[a]===e)return r;o[a].nodeType===1&&r++}return-1}},{key:"addMultipleClasses",value:function(e,o){if(e&&o)if(e.classList)for(var r=o.split(" "),a=0;a<r.length;a++)e.classList.add(r[a]);else for(var i=o.split(" "),l=0;l<i.length;l++)e.className=e.className+(" "+i[l])}},{key:"removeMultipleClasses",value:function(e,o){if(e&&o)if(e.classList)for(var r=o.split(" "),a=0;a<r.length;a++)e.classList.remove(r[a]);else for(var i=o.split(" "),l=0;l<i.length;l++)e.className=e.className.replace(new RegExp("(^|\\b)"+i[l].split(" ").join("|")+"(\\b|$)","gi")," ")}},{key:"addClass",value:function(e,o){e&&o&&(e.classList?e.classList.add(o):e.className=e.className+(" "+o))}},{key:"removeClass",value:function(e,o){e&&o&&(e.classList?e.classList.remove(o):e.className=e.className.replace(new RegExp("(^|\\b)"+o.split(" ").join("|")+"(\\b|$)","gi")," "))}},{key:"hasClass",value:function(e,o){return e?e.classList?e.classList.contains(o):new RegExp("(^| )"+o+"( |$)","gi").test(e.className):!1}},{key:"addStyles",value:function(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};e&&Object.entries(o).forEach(function(r){var a=Xr(r,2),i=a[0],l=a[1];return e.style[i]=l})}},{key:"find",value:function(e,o){return e?Array.from(e.querySelectorAll(o)):[]}},{key:"findSingle",value:function(e,o){return e?e.querySelector(o):null}},{key:"setAttributes",value:function(e){var o=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e){var a=function i(l,s){var c,u,d=e!=null&&(c=e.$attrs)!==null&&c!==void 0&&c[l]?[e==null||(u=e.$attrs)===null||u===void 0?void 0:u[l]]:[];return[s].flat().reduce(function(m,v){if(v!=null){var E=vt(v);if(E==="string"||E==="number")m.push(v);else if(E==="object"){var h=Array.isArray(v)?i(l,v):Object.entries(v).map(function(C){var x=Xr(C,2),S=x[0],O=x[1];return l==="style"&&(O||O===0)?"".concat(S.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),":").concat(O):O?S:void 0});m=h.length?m.concat(h.filter(function(C){return!!C})):m}}return m},d)};Object.entries(r).forEach(function(i){var l=Xr(i,2),s=l[0],c=l[1];if(c!=null){var u=s.match(/^on(.+)/);u?e.addEventListener(u[1].toLowerCase(),c):s==="p-bind"?o.setAttributes(e,c):(c=s==="class"?Jr(new Set(a("class",c))).join(" ").trim():s==="style"?a("style",c).join(";").trim():c,(e.$attrs=e.$attrs||{})&&(e.$attrs[s]=c),e.setAttribute(s,c))}})}}},{key:"getAttribute",value:function(e,o){if(e){var r=e.getAttribute(o);return isNaN(r)?r==="true"||r==="false"?r==="true":r:+r}}},{key:"isAttributeEquals",value:function(e,o,r){return e?this.getAttribute(e,o)===r:!1}},{key:"isAttributeNotEquals",value:function(e,o,r){return!this.isAttributeEquals(e,o,r)}},{key:"getHeight",value:function(e){if(e){var o=e.offsetHeight,r=getComputedStyle(e);return o=o-(parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth)),o}return 0}},{key:"getWidth",value:function(e){if(e){var o=e.offsetWidth,r=getComputedStyle(e);return o=o-(parseFloat(r.paddingLeft)+parseFloat(r.paddingRight)+parseFloat(r.borderLeftWidth)+parseFloat(r.borderRightWidth)),o}return 0}},{key:"alignOverlay",value:function(e,o,r){var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0;e&&o&&(r==="self"?this.relativePosition(e,o):(a&&(e.style.minWidth=n.getOuterWidth(o)+"px"),this.absolutePosition(e,o)))}},{key:"absolutePosition",value:function(e,o){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"left";if(e&&o){var a=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),i=a.height,l=a.width,s=o.offsetHeight,c=o.offsetWidth,u=o.getBoundingClientRect(),d=this.getWindowScrollTop(),m=this.getWindowScrollLeft(),v=this.getViewport(),E,h;u.top+s+i>v.height?(E=u.top+d-i,E<0&&(E=d),e.style.transformOrigin="bottom"):(E=s+u.top+d,e.style.transformOrigin="top");var C=u.left,x=r==="left"?0:l-c;C+c+l>v.width?h=Math.max(0,C+m+c-l):h=C-x+m,e.style.top=E+"px",e.style.left=h+"px"}}},{key:"relativePosition",value:function(e,o){if(e&&o){var r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),a=o.offsetHeight,i=o.getBoundingClientRect(),l=this.getViewport(),s,c;i.top+a+r.height>l.height?(s=-1*r.height,i.top+s<0&&(s=-1*i.top),e.style.transformOrigin="bottom"):(s=a,e.style.transformOrigin="top"),r.width>l.width?c=i.left*-1:i.left+r.width>l.width?c=(i.left+r.width-l.width)*-1:c=0,e.style.top=s+"px",e.style.left=c+"px"}}},{key:"flipfitCollision",value:function(e,o){var r=this,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"left top",i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"left bottom",l=arguments.length>4?arguments[4]:void 0;if(e&&o){var s=o.getBoundingClientRect(),c=this.getViewport(),u=a.split(" "),d=i.split(" "),m=function(x,S){return S?+x.substring(x.search(/(\+|-)/g))||0:x.substring(0,x.search(/(\+|-)/g))||x},v={my:{x:m(u[0]),y:m(u[1]||u[0]),offsetX:m(u[0],!0),offsetY:m(u[1]||u[0],!0)},at:{x:m(d[0]),y:m(d[1]||d[0]),offsetX:m(d[0],!0),offsetY:m(d[1]||d[0],!0)}},E={left:function(){var x=v.my.offsetX+v.at.offsetX;return x+s.left+(v.my.x==="left"?0:-1*(v.my.x==="center"?r.getOuterWidth(e)/2:r.getOuterWidth(e)))},top:function(){var x=v.my.offsetY+v.at.offsetY;return x+s.top+(v.my.y==="top"?0:-1*(v.my.y==="center"?r.getOuterHeight(e)/2:r.getOuterHeight(e)))}},h={count:{x:0,y:0},left:function(){var x=E.left(),S=n.getWindowScrollLeft();e.style.left=x+S+"px",this.count.x===2?(e.style.left=S+"px",this.count.x=0):x<0&&(this.count.x++,v.my.x="left",v.at.x="right",v.my.offsetX*=-1,v.at.offsetX*=-1,this.right())},right:function(){var x=E.left()+n.getOuterWidth(o),S=n.getWindowScrollLeft();e.style.left=x+S+"px",this.count.x===2?(e.style.left=c.width-n.getOuterWidth(e)+S+"px",this.count.x=0):x+n.getOuterWidth(e)>c.width&&(this.count.x++,v.my.x="right",v.at.x="left",v.my.offsetX*=-1,v.at.offsetX*=-1,this.left())},top:function(){var x=E.top(),S=n.getWindowScrollTop();e.style.top=x+S+"px",this.count.y===2?(e.style.left=S+"px",this.count.y=0):x<0&&(this.count.y++,v.my.y="top",v.at.y="bottom",v.my.offsetY*=-1,v.at.offsetY*=-1,this.bottom())},bottom:function(){var x=E.top()+n.getOuterHeight(o),S=n.getWindowScrollTop();e.style.top=x+S+"px",this.count.y===2?(e.style.left=c.height-n.getOuterHeight(e)+S+"px",this.count.y=0):x+n.getOuterHeight(o)>c.height&&(this.count.y++,v.my.y="bottom",v.at.y="top",v.my.offsetY*=-1,v.at.offsetY*=-1,this.top())},center:function(x){if(x==="y"){var S=E.top()+n.getOuterHeight(o)/2;e.style.top=S+n.getWindowScrollTop()+"px",S<0?this.bottom():S+n.getOuterHeight(o)>c.height&&this.top()}else{var O=E.left()+n.getOuterWidth(o)/2;e.style.left=O+n.getWindowScrollLeft()+"px",O<0?this.left():O+n.getOuterWidth(e)>c.width&&this.right()}}};h[v.at.x]("x"),h[v.at.y]("y"),this.isFunction(l)&&l(v)}}},{key:"findCollisionPosition",value:function(e){if(e){var o=e==="top"||e==="bottom",r=e==="left"?"right":"left",a=e==="top"?"bottom":"top";return o?{axis:"y",my:"center ".concat(a),at:"center ".concat(e)}:{axis:"x",my:"".concat(r," center"),at:"".concat(e," center")}}}},{key:"getParents",value:function(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return e.parentNode===null?o:this.getParents(e.parentNode,o.concat([e.parentNode]))}},{key:"getScrollableParents",value:function(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=[];if(e){var a=this.getParents(e),i=/(auto|scroll)/,l=function(O){var P=O?getComputedStyle(O):null;return P&&(i.test(P.getPropertyValue("overflow"))||i.test(P.getPropertyValue("overflow-x"))||i.test(P.getPropertyValue("overflow-y")))},s=function(O){o?r.push(O.nodeName==="BODY"||O.nodeName==="HTML"||O.nodeType===9?window:O):r.push(O)},c=ra(a),u;try{for(c.s();!(u=c.n()).done;){var d=u.value,m=d.nodeType===1&&d.dataset.scrollselectors;if(m){var v=m.split(","),E=ra(v),h;try{for(E.s();!(h=E.n()).done;){var C=h.value,x=this.findSingle(d,C);x&&l(x)&&s(x)}}catch(S){E.e(S)}finally{E.f()}}d.nodeType===1&&l(d)&&s(d)}}catch(S){c.e(S)}finally{c.f()}}return r.some(function(S){return S===document.body||S===window})||r.push(window),r}},{key:"getHiddenElementOuterHeight",value:function(e){if(e){e.style.visibility="hidden",e.style.display="block";var o=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",o}return 0}},{key:"getHiddenElementOuterWidth",value:function(e){if(e){e.style.visibility="hidden",e.style.display="block";var o=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",o}return 0}},{key:"getHiddenElementDimensions",value:function(e){var o={};return e&&(e.style.visibility="hidden",e.style.display="block",o.width=e.offsetWidth,o.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible"),o}},{key:"fadeIn",value:function(e,o){if(e){e.style.opacity=0;var r=+new Date,a=0,i=function l(){a=+e.style.opacity+(new Date().getTime()-r)/o,e.style.opacity=a,r=+new Date,+a<1&&(window.requestAnimationFrame&&requestAnimationFrame(l)||setTimeout(l,16))};i()}}},{key:"fadeOut",value:function(e,o){if(e)var r=1,a=50,i=a/o,l=setInterval(function(){r=r-i,r<=0&&(r=0,clearInterval(l)),e.style.opacity=r},a)}},{key:"getUserAgent",value:function(){return navigator.userAgent}},{key:"isIOS",value:function(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}},{key:"isAndroid",value:function(){return/(android)/i.test(navigator.userAgent)}},{key:"isChrome",value:function(){return/(chrome)/i.test(navigator.userAgent)}},{key:"isClient",value:function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}},{key:"isTouchDevice",value:function(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}},{key:"isFunction",value:function(e){return!!(e&&e.constructor&&e.call&&e.apply)}},{key:"appendChild",value:function(e,o){if(this.isElement(o))o.appendChild(e);else if(o.el&&o.el.nativeElement)o.el.nativeElement.appendChild(e);else throw new Error("Cannot append "+o+" to "+e)}},{key:"removeChild",value:function(e,o){if(this.isElement(o))o.removeChild(e);else if(o.el&&o.el.nativeElement)o.el.nativeElement.removeChild(e);else throw new Error("Cannot remove "+e+" from "+o)}},{key:"isElement",value:function(e){return(typeof HTMLElement>"u"?"undefined":vt(HTMLElement))==="object"?e instanceof HTMLElement:e&&vt(e)==="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}},{key:"scrollInView",value:function(e,o){var r=getComputedStyle(e).getPropertyValue("border-top-width"),a=r?parseFloat(r):0,i=getComputedStyle(e).getPropertyValue("padding-top"),l=i?parseFloat(i):0,s=e.getBoundingClientRect(),c=o.getBoundingClientRect(),u=c.top+document.body.scrollTop-(s.top+document.body.scrollTop)-a-l,d=e.scrollTop,m=e.clientHeight,v=this.getOuterHeight(o);u<0?e.scrollTop=d+u:u+v>m&&(e.scrollTop=d+u-m+v)}},{key:"clearSelection",value:function(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}},{key:"calculateScrollbarWidth",value:function(e){if(e){var o=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(o.borderLeftWidth)-parseFloat(o.borderRightWidth)}if(this.calculatedScrollbarWidth!=null)return this.calculatedScrollbarWidth;var r=document.createElement("div");r.className="p-scrollbar-measure",document.body.appendChild(r);var a=r.offsetWidth-r.clientWidth;return document.body.removeChild(r),this.calculatedScrollbarWidth=a,a}},{key:"calculateBodyScrollbarWidth",value:function(){return window.innerWidth-document.documentElement.offsetWidth}},{key:"getBrowser",value:function(){if(!this.browser){var e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}},{key:"resolveUserAgent",value:function(){var e=navigator.userAgent.toLowerCase(),o=/(chrome)[ ]([\w.]+)/.exec(e)||/(webkit)[ ]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ ]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:o[1]||"",version:o[2]||"0"}}},{key:"blockBodyScroll",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"p-overflow-hidden",o=!!document.body.style.getPropertyValue("--scrollbar-width");!o&&document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}},{key:"unblockBodyScroll",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"p-overflow-hidden";document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}},{key:"isVisible",value:function(e){return e&&(e.clientHeight!==0||e.getClientRects().length!==0||getComputedStyle(e).display!=="none")}},{key:"isExist",value:function(e){return!!(e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode)}},{key:"getFocusableElements",value:function(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=n.find(e,'button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(o,`,
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(o,`,
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(o,`,
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(o,`,
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(o,`,
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(o,`,
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(o)),a=[],i=ra(r),l;try{for(i.s();!(l=i.n()).done;){var s=l.value;getComputedStyle(s).display!=="none"&&getComputedStyle(s).visibility!=="hidden"&&a.push(s)}}catch(c){i.e(c)}finally{i.f()}return a}},{key:"getFirstFocusableElement",value:function(e,o){var r=n.getFocusableElements(e,o);return r.length>0?r[0]:null}},{key:"getLastFocusableElement",value:function(e,o){var r=n.getFocusableElements(e,o);return r.length>0?r[r.length-1]:null}},{key:"focus",value:function(e,o){var r=o===void 0?!0:!o;e&&document.activeElement!==e&&e.focus({preventScroll:r})}},{key:"focusFirstElement",value:function(e,o){if(e){var r=n.getFirstFocusableElement(e);return r&&n.focus(r,o),r}}},{key:"getCursorOffset",value:function(e,o,r,a){if(e){var i=getComputedStyle(e),l=document.createElement("div");l.style.position="absolute",l.style.top="0px",l.style.left="0px",l.style.visibility="hidden",l.style.pointerEvents="none",l.style.overflow=i.overflow,l.style.width=i.width,l.style.height=i.height,l.style.padding=i.padding,l.style.border=i.border,l.style.overflowWrap=i.overflowWrap,l.style.whiteSpace=i.whiteSpace,l.style.lineHeight=i.lineHeight,l.innerHTML=o.replace(/\r\n|\r|\n/g,"<br />");var s=document.createElement("span");s.textContent=a,l.appendChild(s);var c=document.createTextNode(r);l.appendChild(c),document.body.appendChild(l);var u=s.offsetLeft,d=s.offsetTop,m=s.clientHeight;return document.body.removeChild(l),{left:Math.abs(u-e.scrollLeft),top:Math.abs(d-e.scrollTop)+m}}return{top:"auto",left:"auto"}}},{key:"invokeElementMethod",value:function(e,o,r){e[o].apply(e,r)}},{key:"isClickable",value:function(e){var o=e.nodeName,r=e.parentElement&&e.parentElement.nodeName;return o==="INPUT"||o==="TEXTAREA"||o==="BUTTON"||o==="A"||r==="INPUT"||r==="TEXTAREA"||r==="BUTTON"||r==="A"||this.hasClass(e,"p-button")||this.hasClass(e.parentElement,"p-button")||this.hasClass(e.parentElement,"p-checkbox")||this.hasClass(e.parentElement,"p-radiobutton")}},{key:"applyStyle",value:function(e,o){if(typeof o=="string")e.style.cssText=this.style;else for(var r in this.style)e.style[r]=o[r]}},{key:"exportCSV",value:function(e,o){var r=new Blob([e],{type:"application/csv;charset=utf-8;"});if(window.navigator.msSaveOrOpenBlob)navigator.msSaveOrOpenBlob(r,o+".csv");else{var a=n.saveAs({name:o+".csv",src:URL.createObjectURL(r)});a||(e="data:text/csv;charset=utf-8,"+e,window.open(encodeURI(e)))}}},{key:"saveAs",value:function(e){if(e){var o=document.createElement("a");if(o.download!==void 0){var r=e.name,a=e.src;return o.setAttribute("href",a),o.setAttribute("download",r),o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o),!0}}return!1}},{key:"createInlineStyle",value:function(e,o){var r=document.createElement("style");return n.addNonce(r,e),o||(o=document.head),o.appendChild(r),r}},{key:"removeInlineStyle",value:function(e){if(this.isExist(e)){try{e.parentNode.removeChild(e)}catch{}e=null}return e}},{key:"addNonce",value:function(e,o){try{o||(o=process.env.REACT_APP_CSS_NONCE)}catch{}o&&e.setAttribute("nonce",o)}},{key:"getTargetElement",value:function(e){if(!e)return null;if(e==="document")return document;if(e==="window")return window;if(vt(e)==="object"&&e.hasOwnProperty("current"))return this.isExist(e.current)?e.current:null;var o=function(i){return!!(i&&i.constructor&&i.call&&i.apply)},r=o(e)?e():e;return r&&r.nodeType===9||this.isExist(r)?r:null}},{key:"getAttributeNames",value:function(e){var o,r,a;for(r=[],a=e.attributes,o=0;o<a.length;++o)r.push(a[o].nodeName);return r.sort(),r}},{key:"isEqualElement",value:function(e,o){var r,a,i,l,s;if(r=n.getAttributeNames(e),a=n.getAttributeNames(o),r.join(",")!==a.join(","))return!1;for(var c=0;c<r.length;++c)if(i=r[c],i==="style")for(var u=e.style,d=o.style,m=/^\d+$/,v=0,E=Object.keys(u);v<E.length;v++){var h=E[v];if(!m.test(h)&&u[h]!==d[h])return!1}else if(e.getAttribute(i)!==o.getAttribute(i))return!1;for(l=e.firstChild,s=o.firstChild;l&&s;l=l.nextSibling,s=s.nextSibling){if(l.nodeType!==s.nodeType)return!1;if(l.nodeType===1){if(!n.isEqualElement(l,s))return!1}else if(l.nodeValue!==s.nodeValue)return!1}return!(l||s)}},{key:"hasCSSAnimation",value:function(e){if(e){var o=getComputedStyle(e),r=parseFloat(o.getPropertyValue("animation-duration")||"0");return r>0}return!1}},{key:"hasCSSTransition",value:function(e){if(e){var o=getComputedStyle(e),r=parseFloat(o.getPropertyValue("transition-duration")||"0");return r>0}return!1}}])}();Zr($,"DATA_PROPS",["data-"]),Zr($,"ARIA_PROPS",["aria","focus-target"]);function Cc(){var n=new Map;return{on:function(e,o){var r=n.get(e);r?r.push(o):r=[o],n.set(e,r)},off:function(e,o){var r=n.get(e);r&&r.splice(r.indexOf(o)>>>0,1)},emit:function(e,o){var r=n.get(e);r&&r.slice().forEach(function(a){return a(o)})}}}function oa(){return oa=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},oa.apply(this,arguments)}function Oc(n,t){var e=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(!e){if(Array.isArray(n)||(e=qc(n))||t){e&&(n=e);var o=0,r=function(){};return{s:r,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(c){throw c},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,i=!1,l;return{s:function(){e=e.call(n)},n:function(){var c=e.next();return a=c.done,c},e:function(c){i=!0,l=c},f:function(){try{!a&&e.return!=null&&e.return()}finally{if(i)throw l}}}}function qc(n,t){if(n){if(typeof n=="string")return Pi(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Pi(n,t)}}function Pi(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}var L=function(){function n(){ta(this,n)}return na(n,null,[{key:"equals",value:function(e,o,r){return r&&e&&vt(e)==="object"&&o&&vt(o)==="object"?this.deepEquals(this.resolveFieldData(e,r),this.resolveFieldData(o,r)):this.deepEquals(e,o)}},{key:"deepEquals",value:function(e,o){if(e===o)return!0;if(e&&o&&vt(e)==="object"&&vt(o)==="object"){var r=Array.isArray(e),a=Array.isArray(o),i,l,s;if(r&&a){if(l=e.length,l!==o.length)return!1;for(i=l;i--!==0;)if(!this.deepEquals(e[i],o[i]))return!1;return!0}if(r!==a)return!1;var c=e instanceof Date,u=o instanceof Date;if(c!==u)return!1;if(c&&u)return e.getTime()===o.getTime();var d=e instanceof RegExp,m=o instanceof RegExp;if(d!==m)return!1;if(d&&m)return e.toString()===o.toString();var v=Object.keys(e);if(l=v.length,l!==Object.keys(o).length)return!1;for(i=l;i--!==0;)if(!Object.prototype.hasOwnProperty.call(o,v[i]))return!1;for(i=l;i--!==0;)if(s=v[i],!this.deepEquals(e[s],o[s]))return!1;return!0}return e!==e&&o!==o}},{key:"resolveFieldData",value:function(e,o){if(!e||!o)return null;try{var r=e[o];if(this.isNotEmpty(r))return r}catch{}if(Object.keys(e).length){if(this.isFunction(o))return o(e);if(this.isNotEmpty(e[o]))return e[o];if(o.indexOf(".")===-1)return e[o];for(var a=o.split("."),i=e,l=0,s=a.length;l<s;++l){if(i==null)return null;i=i[a[l]]}return i}return null}},{key:"findDiffKeys",value:function(e,o){return!e||!o?{}:Object.keys(e).filter(function(r){return!o.hasOwnProperty(r)}).reduce(function(r,a){return r[a]=e[a],r},{})}},{key:"reduceKeys",value:function(e,o){var r={};return!e||!o||o.length===0||Object.keys(e).filter(function(a){return o.some(function(i){return a.startsWith(i)})}).forEach(function(a){r[a]=e[a],delete e[a]}),r}},{key:"reorderArray",value:function(e,o,r){e&&o!==r&&(r>=e.length&&(r=r%e.length,o=o%e.length),e.splice(r,0,e.splice(o,1)[0]))}},{key:"findIndexInList",value:function(e,o,r){var a=this;return o?r?o.findIndex(function(i){return a.equals(i,e,r)}):o.findIndex(function(i){return i===e}):-1}},{key:"getJSXElement",value:function(e){for(var o=arguments.length,r=new Array(o>1?o-1:0),a=1;a<o;a++)r[a-1]=arguments[a];return this.isFunction(e)?e.apply(void 0,r):e}},{key:"getItemValue",value:function(e){for(var o=arguments.length,r=new Array(o>1?o-1:0),a=1;a<o;a++)r[a-1]=arguments[a];return this.isFunction(e)?e.apply(void 0,r):e}},{key:"getProp",value:function(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e?e[o]:void 0;return a===void 0?r[o]:a}},{key:"getPropCaseInsensitive",value:function(e,o){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=this.toFlatCase(o);for(var i in e)if(e.hasOwnProperty(i)&&this.toFlatCase(i)===a)return e[i];for(var l in r)if(r.hasOwnProperty(l)&&this.toFlatCase(l)===a)return r[l]}},{key:"getMergedProps",value:function(e,o){return Object.assign({},o,e)}},{key:"getDiffProps",value:function(e,o){return this.findDiffKeys(e,o)}},{key:"getPropValue",value:function(e){for(var o=arguments.length,r=new Array(o>1?o-1:0),a=1;a<o;a++)r[a-1]=arguments[a];return this.isFunction(e)?e.apply(void 0,r):e}},{key:"getComponentProp",value:function(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.isNotEmpty(e)?this.getProp(e.props,o,r):void 0}},{key:"getComponentProps",value:function(e,o){return this.isNotEmpty(e)?this.getMergedProps(e.props,o):void 0}},{key:"getComponentDiffProps",value:function(e,o){return this.isNotEmpty(e)?this.getDiffProps(e.props,o):void 0}},{key:"isValidChild",value:function(e,o,r){if(e){var a,i=this.getComponentProp(e,"__TYPE")||(e.type?e.type.displayName:void 0);!i&&e!==null&&e!==void 0&&(a=e.type)!==null&&a!==void 0&&(a=a._payload)!==null&&a!==void 0&&a.value&&(i=e.type._payload.value.find(function(c){return c===o}));var l=i===o;try{var s}catch{}return l}return!1}},{key:"getRefElement",value:function(e){return e?vt(e)==="object"&&e.hasOwnProperty("current")?e.current:e:null}},{key:"combinedRefs",value:function(e,o){e&&o&&(typeof o=="function"?o(e.current):o.current=e.current)}},{key:"removeAccents",value:function(e){return e&&e.search(/[\xC0-\xFF]/g)>-1&&(e=e.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),e}},{key:"toFlatCase",value:function(e){return this.isNotEmpty(e)&&this.isString(e)?e.replace(/(-|_)/g,"").toLowerCase():e}},{key:"toCapitalCase",value:function(e){return this.isNotEmpty(e)&&this.isString(e)?e[0].toUpperCase()+e.slice(1):e}},{key:"trim",value:function(e){return this.isNotEmpty(e)&&this.isString(e)?e.trim():e}},{key:"isEmpty",value:function(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&vt(e)==="object"&&Object.keys(e).length===0}},{key:"isNotEmpty",value:function(e){return!this.isEmpty(e)}},{key:"isFunction",value:function(e){return!!(e&&e.constructor&&e.call&&e.apply)}},{key:"isObject",value:function(e){return e!==null&&e instanceof Object&&e.constructor===Object}},{key:"isDate",value:function(e){return e!==null&&e instanceof Date&&e.constructor===Date}},{key:"isArray",value:function(e){return e!==null&&Array.isArray(e)}},{key:"isString",value:function(e){return e!==null&&typeof e=="string"}},{key:"isPrintableCharacter",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return this.isNotEmpty(e)&&e.length===1&&e.match(/\S| /)}},{key:"isLetter",value:function(e){return/^[a-zA-Z\u00C0-\u017F]$/.test(e)}},{key:"isScalar",value:function(e){return e!=null&&(typeof e=="string"||typeof e=="number"||typeof e=="bigint"||typeof e=="boolean")}},{key:"findLast",value:function(e,o){var r;if(this.isNotEmpty(e))try{r=e.findLast(o)}catch{r=Jr(e).reverse().find(o)}return r}},{key:"findLastIndex",value:function(e,o){var r=-1;if(this.isNotEmpty(e))try{r=e.findLastIndex(o)}catch{r=e.lastIndexOf(Jr(e).reverse().find(o))}return r}},{key:"sort",value:function(e,o){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,a=arguments.length>3?arguments[3]:void 0,i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:1,l=this.compare(e,o,a,r),s=r;return(this.isEmpty(e)||this.isEmpty(o))&&(s=i===1?r:i),s*l}},{key:"compare",value:function(e,o,r){var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,i=-1,l=this.isEmpty(e),s=this.isEmpty(o);return l&&s?i=0:l?i=a:s?i=-a:typeof e=="string"&&typeof o=="string"?i=r(e,o):i=e<o?-1:e>o?1:0,i}},{key:"localeComparator",value:function(e){return new Intl.Collator(e,{numeric:!0}).compare}},{key:"findChildrenByKey",value:function(e,o){var r=Oc(e),a;try{for(r.s();!(a=r.n()).done;){var i=a.value;if(i.key===o)return i.children||[];if(i.children){var l=this.findChildrenByKey(i.children,o);if(l.length>0)return l}}}catch(s){r.e(s)}finally{r.f()}return[]}},{key:"mutateFieldData",value:function(e,o,r){if(!(vt(e)!=="object"||typeof o!="string"))for(var a=o.split("."),i=e,l=0,s=a.length;l<s;++l){if(l+1-s===0){i[a[l]]=r;break}i[a[l]]||(i[a[l]]={}),i=i[a[l]]}}}])}();function Ti(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,o)}return e}function Pc(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?Ti(Object(e),!0).forEach(function(o){Zr(n,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):Ti(Object(e)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(e,o))})}return n}var zt=function(){function n(){ta(this,n)}return na(n,null,[{key:"getJSXIcon",value:function(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=null;if(e!==null){var i=vt(e),l=ge(o.className,i==="string"&&e);if(a=f.createElement("span",oa({},o,{className:l})),i!=="string"){var s=Pc({iconProps:o,element:a},r);return L.getJSXElement(e,s)}}return a}}])}();function Ii(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,o)}return e}function _i(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?Ii(Object(e),!0).forEach(function(o){Zr(n,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):Ii(Object(e)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(e,o))})}return n}function Qr(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(n){var e=function(i){return typeof i=="function"},o=t.classNameMergeFunction,r=e(o);return n.reduce(function(a,i){if(!i)return a;var l=function(){var u=i[s];if(s==="style")a.style=_i(_i({},a.style),i.style);else if(s==="className"){var d="";r?d=o(a.className,i.className):d=[a.className,i.className].join(" ").trim(),a.className=d||void 0}else if(e(u)){var m=a[s];a[s]=m?function(){m.apply(void 0,arguments),u.apply(void 0,arguments)}:u}else a[s]=u};for(var s in i)l();return a},{})}}var ki=0;function aa(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pr_id_";return ki++,"".concat(n).concat(ki)}function Tc(){var n=[],t=function(l,s){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:999,u=r(l,s,c),d=u.value+(u.key===l?0:c)+1;return n.push({key:l,value:d}),d},e=function(l){n=n.filter(function(s){return s.value!==l})},o=function(l,s){return r(l,s).value},r=function(l,s){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;return Jr(n).reverse().find(function(u){return s?!0:u.key===l})||{key:l,value:c}},a=function(l){return l&&parseInt(l.style.zIndex,10)||0};return{get:a,set:function(l,s,c,u){s&&(s.style.zIndex=String(t(l,c,u)))},clear:function(l){l&&(e(Xt.get(l)),l.style.zIndex="")},getCurrent:function(l,s){return o(l,s)}}}var Xt=Tc(),qt=Object.freeze({STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter",CUSTOM:"custom"});function ji(n,t){var e=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(!e){if(Array.isArray(n)||(e=Ic(n))||t){e&&(n=e);var o=0,r=function(){};return{s:r,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(c){throw c},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,i=!1,l;return{s:function(){e=e.call(n)},n:function(){var c=e.next();return a=c.done,c},e:function(c){i=!0,l=c},f:function(){try{!a&&e.return!=null&&e.return()}finally{if(i)throw l}}}}function Ic(n,t){if(n){if(typeof n=="string")return Di(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Di(n,t)}}function Di(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}var Ni={filter:function(t,e,o,r,a){var i=[];if(!t)return i;var l=ji(t),s;try{for(l.s();!(s=l.n()).done;){var c=s.value;if(typeof c=="string"){if(this.filters[r](c,o,a)){i.push(c);continue}}else{var u=ji(e),d;try{for(u.s();!(d=u.n()).done;){var m=d.value,v=L.resolveFieldData(c,m);if(this.filters[r](v,o,a)){i.push(c);break}}}catch(E){u.e(E)}finally{u.f()}}}}catch(E){l.e(E)}finally{l.f()}return i},filters:{startsWith:function(t,e,o){if(e==null||e.trim()==="")return!0;if(t==null)return!1;var r=L.removeAccents(e.toString()).toLocaleLowerCase(o),a=L.removeAccents(t.toString()).toLocaleLowerCase(o);return a.slice(0,r.length)===r},contains:function(t,e,o){if(e==null||typeof e=="string"&&e.trim()==="")return!0;if(t==null)return!1;var r=L.removeAccents(e.toString()).toLocaleLowerCase(o),a=L.removeAccents(t.toString()).toLocaleLowerCase(o);return a.indexOf(r)!==-1},notContains:function(t,e,o){if(e==null||typeof e=="string"&&e.trim()==="")return!0;if(t==null)return!1;var r=L.removeAccents(e.toString()).toLocaleLowerCase(o),a=L.removeAccents(t.toString()).toLocaleLowerCase(o);return a.indexOf(r)===-1},endsWith:function(t,e,o){if(e==null||e.trim()==="")return!0;if(t==null)return!1;var r=L.removeAccents(e.toString()).toLocaleLowerCase(o),a=L.removeAccents(t.toString()).toLocaleLowerCase(o);return a.indexOf(r,a.length-r.length)!==-1},equals:function(t,e,o){return e==null||typeof e=="string"&&e.trim()===""?!0:t==null?!1:t.getTime&&e.getTime?t.getTime()===e.getTime():L.removeAccents(t.toString()).toLocaleLowerCase(o)===L.removeAccents(e.toString()).toLocaleLowerCase(o)},notEquals:function(t,e,o){return e==null||typeof e=="string"&&e.trim()===""||t==null?!0:t.getTime&&e.getTime?t.getTime()!==e.getTime():L.removeAccents(t.toString()).toLocaleLowerCase(o)!==L.removeAccents(e.toString()).toLocaleLowerCase(o)},in:function(t,e){if(e==null||e.length===0)return!0;for(var o=0;o<e.length;o++)if(L.equals(t,e[o]))return!0;return!1},notIn:function(t,e){if(e==null||e.length===0)return!0;for(var o=0;o<e.length;o++)if(L.equals(t,e[o]))return!1;return!0},between:function(t,e){return e==null||e[0]==null||e[1]==null?!0:t==null?!1:t.getTime?e[0].getTime()<=t.getTime()&&t.getTime()<=e[1].getTime():e[0]<=t&&t<=e[1]},lt:function(t,e){return e==null?!0:t==null?!1:t.getTime&&e.getTime?t.getTime()<e.getTime():t<e},lte:function(t,e){return e==null?!0:t==null?!1:t.getTime&&e.getTime?t.getTime()<=e.getTime():t<=e},gt:function(t,e){return e==null?!0:t==null?!1:t.getTime&&e.getTime?t.getTime()>e.getTime():t>e},gte:function(t,e){return e==null?!0:t==null?!1:t.getTime&&e.getTime?t.getTime()>=e.getTime():t>=e},dateIs:function(t,e){return e==null?!0:t==null?!1:t.toDateString()===e.toDateString()},dateIsNot:function(t,e){return e==null?!0:t==null?!1:t.toDateString()!==e.toDateString()},dateBefore:function(t,e){return e==null?!0:t==null?!1:t.getTime()<e.getTime()},dateAfter:function(t,e){return e==null?!0:t==null?!1:t.getTime()>e.getTime()}},register:function(t,e){this.filters[t]=e}};function sr(n){"@babel/helpers - typeof";return sr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},sr(n)}function _c(n,t){if(sr(n)!=="object"||n===null)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var o=e.call(n,t||"default");if(sr(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function kc(n){var t=_c(n,"string");return sr(t)==="symbol"?t:String(t)}function Lt(n,t,e){return t=kc(t),t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function jc(n,t,e){return Object.defineProperty(n,"prototype",{writable:!1}),n}function Dc(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}var Pt=jc(function n(){Dc(this,n)});Lt(Pt,"ripple",!1),Lt(Pt,"inputStyle","outlined"),Lt(Pt,"locale","en"),Lt(Pt,"appendTo",null),Lt(Pt,"cssTransition",!0),Lt(Pt,"autoZIndex",!0),Lt(Pt,"hideOverlaysOnDocumentScrolling",!1),Lt(Pt,"nonce",null),Lt(Pt,"nullSortOrder",1),Lt(Pt,"zIndex",{modal:1100,overlay:1e3,menu:1e3,tooltip:1100,toast:1200}),Lt(Pt,"pt",void 0),Lt(Pt,"filterMatchModeOptions",{text:[qt.STARTS_WITH,qt.CONTAINS,qt.NOT_CONTAINS,qt.ENDS_WITH,qt.EQUALS,qt.NOT_EQUALS],numeric:[qt.EQUALS,qt.NOT_EQUALS,qt.LESS_THAN,qt.LESS_THAN_OR_EQUAL_TO,qt.GREATER_THAN,qt.GREATER_THAN_OR_EQUAL_TO],date:[qt.DATE_IS,qt.DATE_IS_NOT,qt.DATE_BEFORE,qt.DATE_AFTER]}),Lt(Pt,"changeTheme",function(n,t,e,o){var r,a=document.getElementById(e);if(!a)throw Error("Element with id ".concat(e," not found."));var i=a.getAttribute("href").replace(n,t),l=document.createElement("link");l.setAttribute("rel","stylesheet"),l.setAttribute("id",e),l.setAttribute("href",i),l.addEventListener("load",function(){o&&o()}),(r=a.parentNode)===null||r===void 0||r.replaceChild(l,a)});var Nc={en:{accept:"Yes",addRule:"Add Rule",am:"AM",apply:"Apply",cancel:"Cancel",choose:"Choose",chooseDate:"Choose Date",chooseMonth:"Choose Month",chooseYear:"Choose Year",clear:"Clear",completed:"Completed",contains:"Contains",custom:"Custom",dateAfter:"Date is after",dateBefore:"Date is before",dateFormat:"mm/dd/yy",dateIs:"Date is",dateIsNot:"Date is not",dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],emptyFilterMessage:"No results found",emptyMessage:"No available options",emptySearchMessage:"No results found",emptySelectionMessage:"No selected item",endsWith:"Ends with",equals:"Equals",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],filter:"Filter",firstDayOfWeek:0,gt:"Greater than",gte:"Greater than or equal to",lt:"Less than",lte:"Less than or equal to",matchAll:"Match All",matchAny:"Match Any",medium:"Medium",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],nextDecade:"Next Decade",nextHour:"Next Hour",nextMinute:"Next Minute",nextMonth:"Next Month",nextSecond:"Next Second",nextYear:"Next Year",noFilter:"No Filter",notContains:"Not contains",notEquals:"Not equals",now:"Now",passwordPrompt:"Enter a password",pending:"Pending",pm:"PM",prevDecade:"Previous Decade",prevHour:"Previous Hour",prevMinute:"Previous Minute",prevMonth:"Previous Month",prevSecond:"Previous Second",prevYear:"Previous Year",reject:"No",removeRule:"Remove Rule",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",showMonthAfterYear:!1,startsWith:"Starts with",strong:"Strong",today:"Today",upload:"Upload",weak:"Weak",weekHeader:"Wk",aria:{cancelEdit:"Cancel Edit",close:"Close",collapseRow:"Row Collapsed",editRow:"Edit Row",expandRow:"Row Expanded",falseLabel:"False",filterConstraint:"Filter Constraint",filterOperator:"Filter Operator",firstPageLabel:"First Page",gridView:"Grid View",hideFilterMenu:"Hide Filter Menu",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",lastPageLabel:"Last Page",listView:"List View",moveAllToSource:"Move All to Source",moveAllToTarget:"Move All to Target",moveBottom:"Move Bottom",moveDown:"Move Down",moveToSource:"Move to Source",moveToTarget:"Move to Target",moveTop:"Move Top",moveUp:"Move Up",navigation:"Navigation",next:"Next",nextPageLabel:"Next Page",nullLabel:"Not Selected",pageLabel:"Page {page}",otpLabel:"Please enter one time password character {0}",passwordHide:"Hide Password",passwordShow:"Show Password",previous:"Previous",previousPageLabel:"Previous Page",rotateLeft:"Rotate Left",rotateRight:"Rotate Right",rowsPerPageLabel:"Rows per page",saveEdit:"Save Edit",scrollTop:"Scroll Top",selectAll:"All items selected",selectRow:"Row Selected",showFilterMenu:"Show Filter Menu",slide:"Slide",slideNumber:"{slideNumber}",star:"1 star",stars:"{star} stars",trueLabel:"True",unselectAll:"All items unselected",unselectRow:"Row Unselected",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out"}}};function Fn(n,t){if(n.includes("__proto__")||n.includes("prototype"))throw new Error("Unsafe key detected");var e=Pt.locale;try{return Ac(e)[n]}catch{throw new Error("The ".concat(n," option is not found in the current locale('").concat(e,"')."))}}function Ac(n){var t=n||Pt.locale;if(t.includes("__proto__")||t.includes("prototype"))throw new Error("Unsafe locale detected");return Nc[t]}var nt=y.createContext(),rt=Pt;function Rc(n){if(Array.isArray(n))return n}function Lc(n,t){var e=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(e!=null){var o,r,a,i,l=[],s=!0,c=!1;try{if(a=(e=e.call(n)).next,t===0){if(Object(e)!==e)return;s=!1}else for(;!(s=(o=a.call(e)).done)&&(l.push(o.value),l.length!==t);s=!0);}catch(u){c=!0,r=u}finally{try{if(!s&&e.return!=null&&(i=e.return(),Object(i)!==i))return}finally{if(c)throw r}}return l}}function ia(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}function Ai(n,t){if(n){if(typeof n=="string")return ia(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return ia(n,t)}}function $c(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mn(n,t){return Rc(n)||Lc(n,t)||Ai(n,t)||$c()}var cr=function(t){var e=f.useRef(null);return f.useEffect(function(){return e.current=t,function(){e.current=null}},[t]),e.current},on=function(t){return f.useEffect(function(){return t},[])},vn=function(t){var e=t.target,o=e===void 0?"document":e,r=t.type,a=t.listener,i=t.options,l=t.when,s=l===void 0?!0:l,c=f.useRef(null),u=f.useRef(null),d=cr(a),m=cr(i),v=function(){var S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},O=S.target;L.isNotEmpty(O)&&(E(),(S.when||s)&&(c.current=$.getTargetElement(O))),!u.current&&c.current&&(u.current=function(P){return a&&a(P)},c.current.addEventListener(r,u.current,i))},E=function(){u.current&&(c.current.removeEventListener(r,u.current,i),u.current=null)},h=function(){E(),d=null,m=null},C=f.useCallback(function(){s?c.current=$.getTargetElement(o):(E(),c.current=null)},[o,s]);return f.useEffect(function(){C()},[C]),f.useEffect(function(){var x="".concat(d)!=="".concat(a),S=m!==i,O=u.current;O&&(x||S)?(E(),s&&v()):O||h()},[a,i,s]),on(function(){h()}),[v,E]},Tn={},Fc=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,o=f.useState(function(){return aa()}),r=mn(o,1),a=r[0],i=f.useState(0),l=mn(i,2),s=l[0],c=l[1];return f.useEffect(function(){if(e){Tn[t]||(Tn[t]=[]);var u=Tn[t].push(a);return c(u),function(){delete Tn[t][u-1];var d=Tn[t].length-1,m=L.findLastIndex(Tn[t],function(v){return v!==void 0});m!==d&&Tn[t].splice(m+1),c(void 0)}}},[t,a,e]),s};function Mc(n){if(Array.isArray(n))return ia(n)}function zc(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Hc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ri(n){return Mc(n)||zc(n)||Ai(n)||Hc()}var Li={SIDEBAR:100,SLIDE_MENU:200,DIALOG:300,IMAGE:400,MENU:500,OVERLAY_PANEL:600,PASSWORD:700,CASCADE_SELECT:800,SPLIT_BUTTON:900,SPEED_DIAL:1e3,TOOLTIP:1200},$i={escKeyListeners:new Map,onGlobalKeyDown:function(t){if(t.code==="Escape"){var e=$i.escKeyListeners,o=Math.max.apply(Math,Ri(e.keys())),r=e.get(o),a=Math.max.apply(Math,Ri(r.keys())),i=r.get(a);i(t)}},refreshGlobalKeyDownListener:function(){var t=$.getTargetElement("document");this.escKeyListeners.size>0?t.addEventListener("keydown",this.onGlobalKeyDown):t.removeEventListener("keydown",this.onGlobalKeyDown)},addListener:function(t,e){var o=this,r=mn(e,2),a=r[0],i=r[1],l=this.escKeyListeners;l.has(a)||l.set(a,new Map);var s=l.get(a);if(s.has(i))throw new Error("Unexpected: global esc key listener with priority [".concat(a,", ").concat(i,"] already exists."));return s.set(i,t),this.refreshGlobalKeyDownListener(),function(){s.delete(i),s.size===0&&l.delete(a),o.refreshGlobalKeyDownListener()}}},Fi=function(t){var e=t.callback,o=t.when,r=t.priority;y.useEffect(function(){if(o)return $i.addListener(e,r)},[e,o,r])},Tt=function(){var t=y.useContext(nt);return function(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return Qr(o,t==null?void 0:t.ptOptions)}},Ht=function(t){var e=f.useRef(!1);return f.useEffect(function(){if(!e.current)return e.current=!0,t&&t()},[])},Mi=function(t){var e=t.target,o=t.listener,r=t.options,a=t.when,i=a===void 0?!0:a,l=f.useContext(nt),s=f.useRef(null),c=f.useRef(null),u=f.useRef([]),d=cr(o),m=cr(r),v=function(){var S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(L.isNotEmpty(S.target)&&(E(),(S.when||i)&&(s.current=$.getTargetElement(S.target))),!c.current&&s.current){var O=l?l.hideOverlaysOnDocumentScrolling:rt.hideOverlaysOnDocumentScrolling,P=u.current=$.getScrollableParents(s.current,O);c.current=function(w){return o&&o(w)},P.forEach(function(w){return w.addEventListener("scroll",c.current,r)})}},E=function(){if(c.current){var S=u.current;S.forEach(function(O){return O.removeEventListener("scroll",c.current,r)}),c.current=null}},h=function(){E(),u.current=null,d=null,m=null},C=f.useCallback(function(){i?s.current=$.getTargetElement(e):(E(),s.current=null)},[e,i]);return f.useEffect(function(){C()},[C]),f.useEffect(function(){var x="".concat(d)!=="".concat(o),S=m!==r,O=c.current;O&&(x||S)?(E(),i&&v()):O||h()},[o,r,i]),on(function(){h()}),[v,E]},la=function(t){var e=t.listener,o=t.when,r=o===void 0?!0:o;return vn({target:"window",type:"resize",listener:e,when:r})},Bc=function(t){var e=t.target,o=t.overlay,r=t.listener,a=t.when,i=a===void 0?!0:a,l=t.type,s=l===void 0?"click":l,c=f.useRef(null),u=f.useRef(null),d=vn({target:"window",type:s,listener:function(ne){r&&r(ne,{type:"outside",valid:ne.which!==3&&j(ne)})}}),m=mn(d,2),v=m[0],E=m[1],h=la({target:"window",listener:function(ne){r&&r(ne,{type:"resize",valid:!$.isTouchDevice()})}}),C=mn(h,2),x=C[0],S=C[1],O=vn({target:"window",type:"orientationchange",listener:function(ne){r&&r(ne,{type:"orientationchange",valid:!0})}}),P=mn(O,2),w=P[0],T=P[1],_=Mi({target:e,listener:function(ne){r&&r(ne,{type:"scroll",valid:!0})}}),U=mn(_,2),R=U[0],k=U[1],j=function(ne){return c.current&&!(c.current.isSameNode(ne.target)||c.current.contains(ne.target)||u.current&&u.current.contains(ne.target))},J=function(){v(),x(),w(),R()},z=function(){E(),S(),T(),k()};return f.useEffect(function(){i?(c.current=$.getTargetElement(e),u.current=$.getTargetElement(o)):(z(),c.current=u.current=null)},[e,o,i]),f.useEffect(function(){z()},[i]),on(function(){z()}),[J,z]},Wc=0,In=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=y.useState(!1),r=mn(o,2),a=r[0],i=r[1],l=y.useRef(null),s=y.useContext(nt),c=$.isClient()?window.document:void 0,u=e.document,d=u===void 0?c:u,m=e.manual,v=m===void 0?!1:m,E=e.name,h=E===void 0?"style_".concat(++Wc):E,C=e.id,x=C===void 0?void 0:C,S=e.media,O=S===void 0?void 0:S,P=function(R){var k=R.querySelector('style[data-primereact-style-id="'.concat(h,'"]'));if(k)return k;if(x!==void 0){var j=d.getElementById(x);if(j)return j}return d.createElement("style")},w=function(R){a&&t!==R&&(l.current.textContent=R)},T=function(){if(!(!d||a)){var R=(s==null?void 0:s.styleContainer)||d.head;l.current=P(R),l.current.isConnected||(l.current.type="text/css",x&&(l.current.id=x),O&&(l.current.media=O),$.addNonce(l.current,s&&s.nonce||rt.nonce),R.appendChild(l.current),h&&l.current.setAttribute("data-primereact-style-id",h)),l.current.textContent=t,i(!0)}},_=function(){!d||!l.current||($.removeInlineStyle(l.current),i(!1))};return y.useEffect(function(){v||T()},[v]),{id:x,name:h,update:w,unload:_,load:T,isLoaded:a}},He=function(t,e){var o=f.useRef(!1);return f.useEffect(function(){if(!o.current){o.current=!0;return}return t&&t()},e)};function sa(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}function Vc(n){if(Array.isArray(n))return sa(n)}function Uc(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Kc(n,t){if(n){if(typeof n=="string")return sa(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return sa(n,t)}}function Yc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zi(n){return Vc(n)||Uc(n)||Kc(n)||Yc()}function ur(n){"@babel/helpers - typeof";return ur=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ur(n)}function Gc(n,t){if(ur(n)!=="object"||n===null)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var o=e.call(n,t||"default");if(ur(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function Xc(n){var t=Gc(n,"string");return ur(t)==="symbol"?t:String(t)}function ca(n,t,e){return t=Xc(t),t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function Hi(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,o)}return e}function gt(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?Hi(Object(e),!0).forEach(function(o){ca(n,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):Hi(Object(e)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(e,o))})}return n}var Jc=`
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
`,Zc=`
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
`,Qc=`
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
`,eu=`
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
`,tu=`
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

    `.concat(Zc,`
    `).concat(Qc,`
    `).concat(eu,`
}
`),ke={cProps:void 0,cParams:void 0,cName:void 0,defaultProps:{pt:void 0,ptOptions:void 0,unstyled:!1},context:{},globalCSS:void 0,classes:{},styles:"",extend:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.css,o=gt(gt({},t.defaultProps),ke.defaultProps),r={},a=function(u){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return ke.context=d,ke.cProps=u,L.getMergedProps(u,o)},i=function(u){return L.getDiffProps(u,o)},l=function(){var u,d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},E=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0;d.hasOwnProperty("pt")&&d.pt!==void 0&&(d=d.pt);var h=m,C=/./g.test(h)&&!!v[h.split(".")[0]],x=C?L.toFlatCase(h.split(".")[1]):L.toFlatCase(h),S=v.hostName&&L.toFlatCase(v.hostName),O=S||v.props&&v.props.__TYPE&&L.toFlatCase(v.props.__TYPE)||"",P=x==="transition",w="data-pc-",T=function ye(ce){return ce!=null&&ce.props?ce.hostName?ce.props.__TYPE===ce.hostName?ce.props:ye(ce.parent):ce.parent:void 0},_=function(ce){var ee,D;return((ee=v.props)===null||ee===void 0?void 0:ee[ce])||((D=T(v))===null||D===void 0?void 0:D[ce])};ke.cParams=v,ke.cName=O;var U=_("ptOptions")||ke.context.ptOptions||{},R=U.mergeSections,k=R===void 0?!0:R,j=U.mergeProps,J=j===void 0?!1:j,z=function(){var ce=gn.apply(void 0,arguments);return Array.isArray(ce)?{className:ge.apply(void 0,zi(ce))}:L.isString(ce)?{className:ce}:ce!=null&&ce.hasOwnProperty("className")&&Array.isArray(ce.className)?{className:ge.apply(void 0,zi(ce.className))}:ce},Z=E?C?Bi(z,h,v):Wi(z,h,v):void 0,ne=C?void 0:to(eo(d,O),z,h,v),ve=!P&&gt(gt({},x==="root"&&ca({},"".concat(w,"name"),v.props&&v.props.__parentMetadata?L.toFlatCase(v.props.__TYPE):O)),{},ca({},"".concat(w,"section"),x));return k||!k&&ne?J?Qr([Z,ne,Object.keys(ve).length?ve:{}],{classNameMergeFunction:(u=ke.context.ptOptions)===null||u===void 0?void 0:u.classNameMergeFunction}):gt(gt(gt({},Z),ne),Object.keys(ve).length?ve:{}):gt(gt({},ne),Object.keys(ve).length?ve:{})},s=function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=u.props,m=u.state,v=function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return l((d||{}).pt,O,gt(gt({},u),P))},E=function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return l(O,P,w,!1)},h=function(){return ke.context.unstyled||rt.unstyled||d.unstyled},C=function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return h()?void 0:gn(e&&e.classes,O,gt({props:d,state:m},P))},x=function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(w){var T,_=gn(e&&e.inlineStyles,O,gt({props:d,state:m},P)),U=gn(r,O,gt({props:d,state:m},P));return Qr([U,_],{classNameMergeFunction:(T=ke.context.ptOptions)===null||T===void 0?void 0:T.classNameMergeFunction})}};return{ptm:v,ptmo:E,sx:x,cx:C,isUnstyled:h}};return gt(gt({getProps:a,getOtherProps:i,setMetaData:s},t),{},{defaultProps:o})}},gn=function n(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=String(L.toFlatCase(e)).split("."),a=r.shift(),i=L.isNotEmpty(t)?Object.keys(t).find(function(l){return L.toFlatCase(l)===a}):"";return a?L.isObject(t)?n(L.getItemValue(t[i],o),r.join("."),o):void 0:L.getItemValue(t,o)},eo=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2?arguments[2]:void 0,r=t==null?void 0:t._usept,a=function(l){var s,c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=o?o(l):l,d=L.toFlatCase(e);return(s=c?d!==ke.cName?u==null?void 0:u[d]:void 0:u==null?void 0:u[d])!==null&&s!==void 0?s:u};return L.isNotEmpty(r)?{_usept:r,originalValue:a(t.originalValue),value:a(t.value)}:a(t,!0)},to=function(t,e,o,r){var a=function(h){return e(h,o,r)};if(t!=null&&t.hasOwnProperty("_usept")){var i=t._usept||ke.context.ptOptions||{},l=i.mergeSections,s=l===void 0?!0:l,c=i.mergeProps,u=c===void 0?!1:c,d=i.classNameMergeFunction,m=a(t.originalValue),v=a(t.value);return m===void 0&&v===void 0?void 0:L.isString(v)?v:L.isString(m)?m:s||!s&&v?u?Qr([m,v],{classNameMergeFunction:d}):gt(gt({},m),v):v}return a(t)},nu=function(){return eo(ke.context.pt||rt.pt,void 0,function(t){return L.getItemValue(t,ke.cParams)})},ru=function(){return eo(ke.context.pt||rt.pt,void 0,function(t){return gn(t,ke.cName,ke.cParams)||L.getItemValue(t,ke.cParams)})},Bi=function(t,e,o){return to(nu(),t,e,o)},Wi=function(t,e,o){return to(ru(),t,e,o)},Bt=function(t){var e=arguments.length>2?arguments[2]:void 0,o=e.name,r=e.styled,a=r===void 0?!1:r,i=e.hostName,l=i===void 0?"":i,s=Bi(gn,"global.css",ke.cParams),c=L.toFlatCase(o),u=In(Jc,{name:"base",manual:!0}),d=u.load,m=In(tu,{name:"common",manual:!0}),v=m.load,E=In(s,{name:"global",manual:!0}),h=E.load,C=In(t,{name:o,manual:!0}),x=C.load,S=function(P){if(!l){var w=to(eo((ke.cProps||{}).pt,c),gn,"hooks.".concat(P)),T=Wi(gn,"hooks.".concat(P));w==null||w(),T==null||T()}};S("useMountEffect"),Ht(function(){d(),h(),v(),a||x()}),He(function(){S("useUpdateEffect")}),on(function(){S("useUnmountEffect")})};function no(){return no=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)({}).hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},no.apply(null,arguments)}function Vi(n,t){if(n==null)return{};var e={};for(var o in n)if({}.hasOwnProperty.call(n,o)){if(t.includes(o))continue;e[o]=n[o]}return e}function ua(n,t){return ua=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,o){return e.__proto__=o,e},ua(n,t)}function Ui(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,ua(n,t)}var da={exports:{}},ro={exports:{}},Ae={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ki;function ou(){if(Ki)return Ae;Ki=1;var n=typeof Symbol=="function"&&Symbol.for,t=n?Symbol.for("react.element"):60103,e=n?Symbol.for("react.portal"):60106,o=n?Symbol.for("react.fragment"):60107,r=n?Symbol.for("react.strict_mode"):60108,a=n?Symbol.for("react.profiler"):60114,i=n?Symbol.for("react.provider"):60109,l=n?Symbol.for("react.context"):60110,s=n?Symbol.for("react.async_mode"):60111,c=n?Symbol.for("react.concurrent_mode"):60111,u=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.suspense_list"):60120,v=n?Symbol.for("react.memo"):60115,E=n?Symbol.for("react.lazy"):60116,h=n?Symbol.for("react.block"):60121,C=n?Symbol.for("react.fundamental"):60117,x=n?Symbol.for("react.responder"):60118,S=n?Symbol.for("react.scope"):60119;function O(w){if(typeof w=="object"&&w!==null){var T=w.$$typeof;switch(T){case t:switch(w=w.type,w){case s:case c:case o:case a:case r:case d:return w;default:switch(w=w&&w.$$typeof,w){case l:case u:case E:case v:case i:return w;default:return T}}case e:return T}}}function P(w){return O(w)===c}return Ae.AsyncMode=s,Ae.ConcurrentMode=c,Ae.ContextConsumer=l,Ae.ContextProvider=i,Ae.Element=t,Ae.ForwardRef=u,Ae.Fragment=o,Ae.Lazy=E,Ae.Memo=v,Ae.Portal=e,Ae.Profiler=a,Ae.StrictMode=r,Ae.Suspense=d,Ae.isAsyncMode=function(w){return P(w)||O(w)===s},Ae.isConcurrentMode=P,Ae.isContextConsumer=function(w){return O(w)===l},Ae.isContextProvider=function(w){return O(w)===i},Ae.isElement=function(w){return typeof w=="object"&&w!==null&&w.$$typeof===t},Ae.isForwardRef=function(w){return O(w)===u},Ae.isFragment=function(w){return O(w)===o},Ae.isLazy=function(w){return O(w)===E},Ae.isMemo=function(w){return O(w)===v},Ae.isPortal=function(w){return O(w)===e},Ae.isProfiler=function(w){return O(w)===a},Ae.isStrictMode=function(w){return O(w)===r},Ae.isSuspense=function(w){return O(w)===d},Ae.isValidElementType=function(w){return typeof w=="string"||typeof w=="function"||w===o||w===c||w===a||w===r||w===d||w===m||typeof w=="object"&&w!==null&&(w.$$typeof===E||w.$$typeof===v||w.$$typeof===i||w.$$typeof===l||w.$$typeof===u||w.$$typeof===C||w.$$typeof===x||w.$$typeof===S||w.$$typeof===h)},Ae.typeOf=O,Ae}var Re={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yi;function au(){return Yi||(Yi=1,process.env.NODE_ENV!=="production"&&function(){var n=typeof Symbol=="function"&&Symbol.for,t=n?Symbol.for("react.element"):60103,e=n?Symbol.for("react.portal"):60106,o=n?Symbol.for("react.fragment"):60107,r=n?Symbol.for("react.strict_mode"):60108,a=n?Symbol.for("react.profiler"):60114,i=n?Symbol.for("react.provider"):60109,l=n?Symbol.for("react.context"):60110,s=n?Symbol.for("react.async_mode"):60111,c=n?Symbol.for("react.concurrent_mode"):60111,u=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.suspense_list"):60120,v=n?Symbol.for("react.memo"):60115,E=n?Symbol.for("react.lazy"):60116,h=n?Symbol.for("react.block"):60121,C=n?Symbol.for("react.fundamental"):60117,x=n?Symbol.for("react.responder"):60118,S=n?Symbol.for("react.scope"):60119;function O(M){return typeof M=="string"||typeof M=="function"||M===o||M===c||M===a||M===r||M===d||M===m||typeof M=="object"&&M!==null&&(M.$$typeof===E||M.$$typeof===v||M.$$typeof===i||M.$$typeof===l||M.$$typeof===u||M.$$typeof===C||M.$$typeof===x||M.$$typeof===S||M.$$typeof===h)}function P(M){if(typeof M=="object"&&M!==null){var Oe=M.$$typeof;switch(Oe){case t:var Ie=M.type;switch(Ie){case s:case c:case o:case a:case r:case d:return Ie;default:var Te=Ie&&Ie.$$typeof;switch(Te){case l:case u:case E:case v:case i:return Te;default:return Oe}}case e:return Oe}}}var w=s,T=c,_=l,U=i,R=t,k=u,j=o,J=E,z=v,Z=e,ne=a,ve=r,ye=d,ce=!1;function ee(M){return ce||(ce=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),D(M)||P(M)===s}function D(M){return P(M)===c}function G(M){return P(M)===l}function ie(M){return P(M)===i}function X(M){return typeof M=="object"&&M!==null&&M.$$typeof===t}function K(M){return P(M)===u}function de(M){return P(M)===o}function fe(M){return P(M)===E}function me(M){return P(M)===v}function Y(M){return P(M)===e}function N(M){return P(M)===a}function F(M){return P(M)===r}function se(M){return P(M)===d}Re.AsyncMode=w,Re.ConcurrentMode=T,Re.ContextConsumer=_,Re.ContextProvider=U,Re.Element=R,Re.ForwardRef=k,Re.Fragment=j,Re.Lazy=J,Re.Memo=z,Re.Portal=Z,Re.Profiler=ne,Re.StrictMode=ve,Re.Suspense=ye,Re.isAsyncMode=ee,Re.isConcurrentMode=D,Re.isContextConsumer=G,Re.isContextProvider=ie,Re.isElement=X,Re.isForwardRef=K,Re.isFragment=de,Re.isLazy=fe,Re.isMemo=me,Re.isPortal=Y,Re.isProfiler=N,Re.isStrictMode=F,Re.isSuspense=se,Re.isValidElementType=O,Re.typeOf=P}()),Re}var Gi;function Xi(){return Gi||(Gi=1,process.env.NODE_ENV==="production"?ro.exports=ou():ro.exports=au()),ro.exports}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var fa,Ji;function iu(){if(Ji)return fa;Ji=1;var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable;function o(a){if(a==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(a)}function r(){try{if(!Object.assign)return!1;var a=new String("abc");if(a[5]="de",Object.getOwnPropertyNames(a)[0]==="5")return!1;for(var i={},l=0;l<10;l++)i["_"+String.fromCharCode(l)]=l;var s=Object.getOwnPropertyNames(i).map(function(u){return i[u]});if(s.join("")!=="0123456789")return!1;var c={};return"abcdefghijklmnopqrst".split("").forEach(function(u){c[u]=u}),Object.keys(Object.assign({},c)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return fa=r()?Object.assign:function(a,i){for(var l,s=o(a),c,u=1;u<arguments.length;u++){l=Object(arguments[u]);for(var d in l)t.call(l,d)&&(s[d]=l[d]);if(n){c=n(l);for(var m=0;m<c.length;m++)e.call(l,c[m])&&(s[c[m]]=l[c[m]])}}return s},fa}var pa,Zi;function ma(){if(Zi)return pa;Zi=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return pa=n,pa}var va,Qi;function el(){return Qi||(Qi=1,va=Function.call.bind(Object.prototype.hasOwnProperty)),va}var ga,tl;function lu(){if(tl)return ga;tl=1;var n=function(){};if(process.env.NODE_ENV!=="production"){var t=ma(),e={},o=el();n=function(a){var i="Warning: "+a;typeof console<"u"&&console.error(i);try{throw new Error(i)}catch{}}}function r(a,i,l,s,c){if(process.env.NODE_ENV!=="production"){for(var u in a)if(o(a,u)){var d;try{if(typeof a[u]!="function"){var m=Error((s||"React class")+": "+l+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof a[u]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw m.name="Invariant Violation",m}d=a[u](i,u,s,l,null,t)}catch(E){d=E}if(d&&!(d instanceof Error)&&n((s||"React class")+": type specification of "+l+" `"+u+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof d+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),d instanceof Error&&!(d.message in e)){e[d.message]=!0;var v=c?c():"";n("Failed "+l+" type: "+d.message+(v??""))}}}}return r.resetWarningCache=function(){process.env.NODE_ENV!=="production"&&(e={})},ga=r,ga}var ha,nl;function su(){if(nl)return ha;nl=1;var n=Xi(),t=iu(),e=ma(),o=el(),r=lu(),a=function(){};process.env.NODE_ENV!=="production"&&(a=function(l){var s="Warning: "+l;typeof console<"u"&&console.error(s);try{throw new Error(s)}catch{}});function i(){return null}return ha=function(l,s){var c=typeof Symbol=="function"&&Symbol.iterator,u="@@iterator";function d(D){var G=D&&(c&&D[c]||D[u]);if(typeof G=="function")return G}var m="<<anonymous>>",v={array:x("array"),bigint:x("bigint"),bool:x("boolean"),func:x("function"),number:x("number"),object:x("object"),string:x("string"),symbol:x("symbol"),any:S(),arrayOf:O,element:P(),elementType:w(),instanceOf:T,node:k(),objectOf:U,oneOf:_,oneOfType:R,shape:J,exact:z};function E(D,G){return D===G?D!==0||1/D===1/G:D!==D&&G!==G}function h(D,G){this.message=D,this.data=G&&typeof G=="object"?G:{},this.stack=""}h.prototype=Error.prototype;function C(D){if(process.env.NODE_ENV!=="production")var G={},ie=0;function X(de,fe,me,Y,N,F,se){if(Y=Y||m,F=F||me,se!==e){if(s){var M=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw M.name="Invariant Violation",M}else if(process.env.NODE_ENV!=="production"&&typeof console<"u"){var Oe=Y+":"+me;!G[Oe]&&ie<3&&(a("You are manually calling a React.PropTypes validation function for the `"+F+"` prop on `"+Y+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),G[Oe]=!0,ie++)}}return fe[me]==null?de?fe[me]===null?new h("The "+N+" `"+F+"` is marked as required "+("in `"+Y+"`, but its value is `null`.")):new h("The "+N+" `"+F+"` is marked as required in "+("`"+Y+"`, but its value is `undefined`.")):null:D(fe,me,Y,N,F)}var K=X.bind(null,!1);return K.isRequired=X.bind(null,!0),K}function x(D){function G(ie,X,K,de,fe,me){var Y=ie[X],N=ve(Y);if(N!==D){var F=ye(Y);return new h("Invalid "+de+" `"+fe+"` of type "+("`"+F+"` supplied to `"+K+"`, expected ")+("`"+D+"`."),{expectedType:D})}return null}return C(G)}function S(){return C(i)}function O(D){function G(ie,X,K,de,fe){if(typeof D!="function")return new h("Property `"+fe+"` of component `"+K+"` has invalid PropType notation inside arrayOf.");var me=ie[X];if(!Array.isArray(me)){var Y=ve(me);return new h("Invalid "+de+" `"+fe+"` of type "+("`"+Y+"` supplied to `"+K+"`, expected an array."))}for(var N=0;N<me.length;N++){var F=D(me,N,K,de,fe+"["+N+"]",e);if(F instanceof Error)return F}return null}return C(G)}function P(){function D(G,ie,X,K,de){var fe=G[ie];if(!l(fe)){var me=ve(fe);return new h("Invalid "+K+" `"+de+"` of type "+("`"+me+"` supplied to `"+X+"`, expected a single ReactElement."))}return null}return C(D)}function w(){function D(G,ie,X,K,de){var fe=G[ie];if(!n.isValidElementType(fe)){var me=ve(fe);return new h("Invalid "+K+" `"+de+"` of type "+("`"+me+"` supplied to `"+X+"`, expected a single ReactElement type."))}return null}return C(D)}function T(D){function G(ie,X,K,de,fe){if(!(ie[X]instanceof D)){var me=D.name||m,Y=ee(ie[X]);return new h("Invalid "+de+" `"+fe+"` of type "+("`"+Y+"` supplied to `"+K+"`, expected ")+("instance of `"+me+"`."))}return null}return C(G)}function _(D){if(!Array.isArray(D))return process.env.NODE_ENV!=="production"&&(arguments.length>1?a("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):a("Invalid argument supplied to oneOf, expected an array.")),i;function G(ie,X,K,de,fe){for(var me=ie[X],Y=0;Y<D.length;Y++)if(E(me,D[Y]))return null;var N=JSON.stringify(D,function(se,M){var Oe=ye(M);return Oe==="symbol"?String(M):M});return new h("Invalid "+de+" `"+fe+"` of value `"+String(me)+"` "+("supplied to `"+K+"`, expected one of "+N+"."))}return C(G)}function U(D){function G(ie,X,K,de,fe){if(typeof D!="function")return new h("Property `"+fe+"` of component `"+K+"` has invalid PropType notation inside objectOf.");var me=ie[X],Y=ve(me);if(Y!=="object")return new h("Invalid "+de+" `"+fe+"` of type "+("`"+Y+"` supplied to `"+K+"`, expected an object."));for(var N in me)if(o(me,N)){var F=D(me,N,K,de,fe+"."+N,e);if(F instanceof Error)return F}return null}return C(G)}function R(D){if(!Array.isArray(D))return process.env.NODE_ENV!=="production"&&a("Invalid argument supplied to oneOfType, expected an instance of array."),i;for(var G=0;G<D.length;G++){var ie=D[G];if(typeof ie!="function")return a("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+ce(ie)+" at index "+G+"."),i}function X(K,de,fe,me,Y){for(var N=[],F=0;F<D.length;F++){var se=D[F],M=se(K,de,fe,me,Y,e);if(M==null)return null;M.data&&o(M.data,"expectedType")&&N.push(M.data.expectedType)}var Oe=N.length>0?", expected one of type ["+N.join(", ")+"]":"";return new h("Invalid "+me+" `"+Y+"` supplied to "+("`"+fe+"`"+Oe+"."))}return C(X)}function k(){function D(G,ie,X,K,de){return Z(G[ie])?null:new h("Invalid "+K+" `"+de+"` supplied to "+("`"+X+"`, expected a ReactNode."))}return C(D)}function j(D,G,ie,X,K){return new h((D||"React class")+": "+G+" type `"+ie+"."+X+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+K+"`.")}function J(D){function G(ie,X,K,de,fe){var me=ie[X],Y=ve(me);if(Y!=="object")return new h("Invalid "+de+" `"+fe+"` of type `"+Y+"` "+("supplied to `"+K+"`, expected `object`."));for(var N in D){var F=D[N];if(typeof F!="function")return j(K,de,fe,N,ye(F));var se=F(me,N,K,de,fe+"."+N,e);if(se)return se}return null}return C(G)}function z(D){function G(ie,X,K,de,fe){var me=ie[X],Y=ve(me);if(Y!=="object")return new h("Invalid "+de+" `"+fe+"` of type `"+Y+"` "+("supplied to `"+K+"`, expected `object`."));var N=t({},ie[X],D);for(var F in N){var se=D[F];if(o(D,F)&&typeof se!="function")return j(K,de,fe,F,ye(se));if(!se)return new h("Invalid "+de+" `"+fe+"` key `"+F+"` supplied to `"+K+"`.\nBad object: "+JSON.stringify(ie[X],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(D),null,"  "));var M=se(me,F,K,de,fe+"."+F,e);if(M)return M}return null}return C(G)}function Z(D){switch(typeof D){case"number":case"string":case"undefined":return!0;case"boolean":return!D;case"object":if(Array.isArray(D))return D.every(Z);if(D===null||l(D))return!0;var G=d(D);if(G){var ie=G.call(D),X;if(G!==D.entries){for(;!(X=ie.next()).done;)if(!Z(X.value))return!1}else for(;!(X=ie.next()).done;){var K=X.value;if(K&&!Z(K[1]))return!1}}else return!1;return!0;default:return!1}}function ne(D,G){return D==="symbol"?!0:G?G["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&G instanceof Symbol:!1}function ve(D){var G=typeof D;return Array.isArray(D)?"array":D instanceof RegExp?"object":ne(G,D)?"symbol":G}function ye(D){if(typeof D>"u"||D===null)return""+D;var G=ve(D);if(G==="object"){if(D instanceof Date)return"date";if(D instanceof RegExp)return"regexp"}return G}function ce(D){var G=ye(D);switch(G){case"array":case"object":return"an "+G;case"boolean":case"date":case"regexp":return"a "+G;default:return G}}function ee(D){return!D.constructor||!D.constructor.name?m:D.constructor.name}return v.checkPropTypes=r,v.resetWarningCache=r.resetWarningCache,v.PropTypes=v,v},ha}var ba,rl;function cu(){if(rl)return ba;rl=1;var n=ma();function t(){}function e(){}return e.resetWarningCache=t,ba=function(){function o(i,l,s,c,u,d){if(d!==n){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}o.isRequired=o;function r(){return o}var a={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:r,element:o,elementType:o,instanceOf:r,node:o,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:e,resetWarningCache:t};return a.PropTypes=a,a},ba}if(process.env.NODE_ENV!=="production"){var uu=Xi(),du=!0;da.exports=su()(uu.isElement,du)}else da.exports=cu()();var _n=da.exports;const Ce=ac(_n);function fu(n,t){return n.classList?!!t&&n.classList.contains(t):(" "+(n.className.baseVal||n.className)+" ").indexOf(" "+t+" ")!==-1}function pu(n,t){n.classList?n.classList.add(t):fu(n,t)||(typeof n.className=="string"?n.className=n.className+" "+t:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+t))}function ol(n,t){return n.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function mu(n,t){n.classList?n.classList.remove(t):typeof n.className=="string"?n.className=ol(n.className,t):n.setAttribute("class",ol(n.className&&n.className.baseVal||"",t))}const al={disabled:!1};var vu=process.env.NODE_ENV!=="production"?Ce.oneOfType([Ce.number,Ce.shape({enter:Ce.number,exit:Ce.number,appear:Ce.number}).isRequired]):null,gu=process.env.NODE_ENV!=="production"?Ce.oneOfType([Ce.string,Ce.shape({enter:Ce.string,exit:Ce.string,active:Ce.string}),Ce.shape({enter:Ce.string,enterDone:Ce.string,enterActive:Ce.string,exit:Ce.string,exitDone:Ce.string,exitActive:Ce.string})]):null;const il=y.createContext(null);var ll=function(t){return t.scrollTop},dr="unmounted",kn="exited",jn="entering",Mn="entered",ya="exiting",an=function(n){Ui(t,n);function t(o,r){var a;a=n.call(this,o,r)||this;var i=r,l=i&&!i.isMounting?o.enter:o.appear,s;return a.appearStatus=null,o.in?l?(s=kn,a.appearStatus=jn):s=Mn:o.unmountOnExit||o.mountOnEnter?s=dr:s=kn,a.state={status:s},a.nextCallback=null,a}t.getDerivedStateFromProps=function(r,a){var i=r.in;return i&&a.status===dr?{status:kn}:null};var e=t.prototype;return e.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},e.componentDidUpdate=function(r){var a=null;if(r!==this.props){var i=this.state.status;this.props.in?i!==jn&&i!==Mn&&(a=jn):(i===jn||i===Mn)&&(a=ya)}this.updateStatus(!1,a)},e.componentWillUnmount=function(){this.cancelNextCallback()},e.getTimeouts=function(){var r=this.props.timeout,a,i,l;return a=i=l=r,r!=null&&typeof r!="number"&&(a=r.exit,i=r.enter,l=r.appear!==void 0?r.appear:i),{exit:a,enter:i,appear:l}},e.updateStatus=function(r,a){if(r===void 0&&(r=!1),a!==null)if(this.cancelNextCallback(),a===jn){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:Gt.findDOMNode(this);i&&ll(i)}this.performEnter(r)}else this.performExit();else this.props.unmountOnExit&&this.state.status===kn&&this.setState({status:dr})},e.performEnter=function(r){var a=this,i=this.props.enter,l=this.context?this.context.isMounting:r,s=this.props.nodeRef?[l]:[Gt.findDOMNode(this),l],c=s[0],u=s[1],d=this.getTimeouts(),m=l?d.appear:d.enter;if(!r&&!i||al.disabled){this.safeSetState({status:Mn},function(){a.props.onEntered(c)});return}this.props.onEnter(c,u),this.safeSetState({status:jn},function(){a.props.onEntering(c,u),a.onTransitionEnd(m,function(){a.safeSetState({status:Mn},function(){a.props.onEntered(c,u)})})})},e.performExit=function(){var r=this,a=this.props.exit,i=this.getTimeouts(),l=this.props.nodeRef?void 0:Gt.findDOMNode(this);if(!a||al.disabled){this.safeSetState({status:kn},function(){r.props.onExited(l)});return}this.props.onExit(l),this.safeSetState({status:ya},function(){r.props.onExiting(l),r.onTransitionEnd(i.exit,function(){r.safeSetState({status:kn},function(){r.props.onExited(l)})})})},e.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},e.safeSetState=function(r,a){a=this.setNextCallback(a),this.setState(r,a)},e.setNextCallback=function(r){var a=this,i=!0;return this.nextCallback=function(l){i&&(i=!1,a.nextCallback=null,r(l))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},e.onTransitionEnd=function(r,a){this.setNextCallback(a);var i=this.props.nodeRef?this.props.nodeRef.current:Gt.findDOMNode(this),l=r==null&&!this.props.addEndListener;if(!i||l){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var s=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],c=s[0],u=s[1];this.props.addEndListener(c,u)}r!=null&&setTimeout(this.nextCallback,r)},e.render=function(){var r=this.state.status;if(r===dr)return null;var a=this.props,i=a.children;a.in,a.mountOnEnter,a.unmountOnExit,a.appear,a.enter,a.exit,a.timeout,a.addEndListener,a.onEnter,a.onEntering,a.onEntered,a.onExit,a.onExiting,a.onExited,a.nodeRef;var l=Vi(a,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return y.createElement(il.Provider,{value:null},typeof i=="function"?i(r,l):y.cloneElement(y.Children.only(i),l))},t}(y.Component);an.contextType=il,an.propTypes=process.env.NODE_ENV!=="production"?{nodeRef:Ce.shape({current:typeof Element>"u"?Ce.any:function(n,t,e,o,r,a){var i=n[t];return Ce.instanceOf(i&&"ownerDocument"in i?i.ownerDocument.defaultView.Element:Element)(n,t,e,o,r,a)}}),children:Ce.oneOfType([Ce.func.isRequired,Ce.element.isRequired]).isRequired,in:Ce.bool,mountOnEnter:Ce.bool,unmountOnExit:Ce.bool,appear:Ce.bool,enter:Ce.bool,exit:Ce.bool,timeout:function(t){var e=vu;t.addEndListener||(e=e.isRequired);for(var o=arguments.length,r=new Array(o>1?o-1:0),a=1;a<o;a++)r[a-1]=arguments[a];return e.apply(void 0,[t].concat(r))},addEndListener:Ce.func,onEnter:Ce.func,onEntering:Ce.func,onEntered:Ce.func,onExit:Ce.func,onExiting:Ce.func,onExited:Ce.func}:{};function zn(){}an.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:zn,onEntering:zn,onEntered:zn,onExit:zn,onExiting:zn,onExited:zn},an.UNMOUNTED=dr,an.EXITED=kn,an.ENTERING=jn,an.ENTERED=Mn,an.EXITING=ya;var hu=function(t,e){return t&&e&&e.split(" ").forEach(function(o){return pu(t,o)})},wa=function(t,e){return t&&e&&e.split(" ").forEach(function(o){return mu(t,o)})},xa=function(n){Ui(t,n);function t(){for(var o,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return o=n.call.apply(n,[this].concat(a))||this,o.appliedClasses={appear:{},enter:{},exit:{}},o.onEnter=function(l,s){var c=o.resolveArguments(l,s),u=c[0],d=c[1];o.removeClasses(u,"exit"),o.addClass(u,d?"appear":"enter","base"),o.props.onEnter&&o.props.onEnter(l,s)},o.onEntering=function(l,s){var c=o.resolveArguments(l,s),u=c[0],d=c[1],m=d?"appear":"enter";o.addClass(u,m,"active"),o.props.onEntering&&o.props.onEntering(l,s)},o.onEntered=function(l,s){var c=o.resolveArguments(l,s),u=c[0],d=c[1],m=d?"appear":"enter";o.removeClasses(u,m),o.addClass(u,m,"done"),o.props.onEntered&&o.props.onEntered(l,s)},o.onExit=function(l){var s=o.resolveArguments(l),c=s[0];o.removeClasses(c,"appear"),o.removeClasses(c,"enter"),o.addClass(c,"exit","base"),o.props.onExit&&o.props.onExit(l)},o.onExiting=function(l){var s=o.resolveArguments(l),c=s[0];o.addClass(c,"exit","active"),o.props.onExiting&&o.props.onExiting(l)},o.onExited=function(l){var s=o.resolveArguments(l),c=s[0];o.removeClasses(c,"exit"),o.addClass(c,"exit","done"),o.props.onExited&&o.props.onExited(l)},o.resolveArguments=function(l,s){return o.props.nodeRef?[o.props.nodeRef.current,l]:[l,s]},o.getClassNames=function(l){var s=o.props.classNames,c=typeof s=="string",u=c&&s?s+"-":"",d=c?""+u+l:s[l],m=c?d+"-active":s[l+"Active"],v=c?d+"-done":s[l+"Done"];return{baseClassName:d,activeClassName:m,doneClassName:v}},o}var e=t.prototype;return e.addClass=function(r,a,i){var l=this.getClassNames(a)[i+"ClassName"],s=this.getClassNames("enter"),c=s.doneClassName;a==="appear"&&i==="done"&&c&&(l+=" "+c),i==="active"&&r&&ll(r),l&&(this.appliedClasses[a][i]=l,hu(r,l))},e.removeClasses=function(r,a){var i=this.appliedClasses[a],l=i.base,s=i.active,c=i.done;this.appliedClasses[a]={},l&&wa(r,l),s&&wa(r,s),c&&wa(r,c)},e.render=function(){var r=this.props;r.classNames;var a=Vi(r,["classNames"]);return y.createElement(an,no({},a,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(y.Component);xa.defaultProps={classNames:""},xa.propTypes=process.env.NODE_ENV!=="production"?no({},an.propTypes,{classNames:gu,onEnter:Ce.func,onEntering:Ce.func,onEntered:Ce.func,onExit:Ce.func,onExiting:Ce.func,onExited:Ce.func}):{};function fr(n){"@babel/helpers - typeof";return fr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fr(n)}function bu(n,t){if(fr(n)!=="object"||n===null)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var o=e.call(n,t||"default");if(fr(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function yu(n){var t=bu(n,"string");return fr(t)==="symbol"?t:String(t)}function wu(n,t,e){return t=yu(t),t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var Ea={defaultProps:{__TYPE:"CSSTransition",children:void 0},getProps:function(t){return L.getMergedProps(t,Ea.defaultProps)},getOtherProps:function(t){return L.getDiffProps(t,Ea.defaultProps)}};function sl(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,o)}return e}function Sa(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?sl(Object(e),!0).forEach(function(o){wu(n,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):sl(Object(e)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(e,o))})}return n}var oo=f.forwardRef(function(n,t){var e=Ea.getProps(n),o=f.useContext(nt),r=e.disabled||e.options&&e.options.disabled||o&&!o.cssTransition||!rt.cssTransition,a=function(h,C){e.onEnter&&e.onEnter(h,C),e.options&&e.options.onEnter&&e.options.onEnter(h,C)},i=function(h,C){e.onEntering&&e.onEntering(h,C),e.options&&e.options.onEntering&&e.options.onEntering(h,C)},l=function(h,C){e.onEntered&&e.onEntered(h,C),e.options&&e.options.onEntered&&e.options.onEntered(h,C)},s=function(h){e.onExit&&e.onExit(h),e.options&&e.options.onExit&&e.options.onExit(h)},c=function(h){e.onExiting&&e.onExiting(h),e.options&&e.options.onExiting&&e.options.onExiting(h)},u=function(h){e.onExited&&e.onExited(h),e.options&&e.options.onExited&&e.options.onExited(h)};if(He(function(){if(r){var E=L.getRefElement(e.nodeRef);e.in?(a(E,!0),i(E,!0),l(E,!0)):(s(E),c(E),u(E))}},[e.in]),r)return e.in?e.children:null;var d={nodeRef:e.nodeRef,in:e.in,onEnter:a,onEntering:i,onEntered:l,onExit:s,onExiting:c,onExited:u},m={classNames:e.classNames,timeout:e.timeout,unmountOnExit:e.unmountOnExit},v=Sa(Sa(Sa({},m),e.options||{}),d);return f.createElement(xa,v,e.children)});oo.displayName="CSSTransition";var $t={defaultProps:{__TYPE:"IconBase",className:null,label:null,spin:!1},getProps:function(t){return L.getMergedProps(t,$t.defaultProps)},getOtherProps:function(t){return L.getDiffProps(t,$t.defaultProps)},getPTI:function(t){var e=L.isEmpty(t.label),o=$t.getOtherProps(t),r={className:ge("p-icon",{"p-icon-spin":t.spin},t.className),role:e?void 0:"img","aria-label":e?void 0:t.label,"aria-hidden":e};return L.getMergedProps(o,r)}};function Ca(){return Ca=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},Ca.apply(this,arguments)}var Oa=f.memo(f.forwardRef(function(n,t){var e=$t.getPTI(n);return f.createElement("svg",Ca({ref:t,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),f.createElement("path",{d:"M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z",fill:"currentColor"}))}));Oa.displayName="ChevronDownIcon";function qa(){return qa=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},qa.apply(this,arguments)}var cl=f.memo(f.forwardRef(function(n,t){var e=$t.getPTI(n);return f.createElement("svg",qa({ref:t,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),f.createElement("path",{d:"M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z",fill:"currentColor"}))}));cl.displayName="ChevronRightIcon";function ao(){return ao=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},ao.apply(this,arguments)}function Pa(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}function xu(n){if(Array.isArray(n))return Pa(n)}function Eu(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function ul(n,t){if(n){if(typeof n=="string")return Pa(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Pa(n,t)}}function Su(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Cu(n){return xu(n)||Eu(n)||ul(n)||Su()}function pr(n){"@babel/helpers - typeof";return pr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pr(n)}function Ou(n,t){if(pr(n)!=="object"||n===null)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var o=e.call(n,t||"default");if(pr(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function qu(n){var t=Ou(n,"string");return pr(t)==="symbol"?t:String(t)}function Pu(n,t,e){return t=qu(t),t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function Tu(n){if(Array.isArray(n))return n}function Iu(n,t){var e=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(e!=null){var o,r,a,i,l=[],s=!0,c=!1;try{if(a=(e=e.call(n)).next,t!==0)for(;!(s=(o=a.call(e)).done)&&(l.push(o.value),l.length!==t);s=!0);}catch(u){c=!0,r=u}finally{try{if(!s&&e.return!=null&&(i=e.return(),Object(i)!==i))return}finally{if(c)throw r}}return l}}function _u(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dl(n,t){return Tu(n)||Iu(n,t)||ul(n,t)||_u()}var ku={root:"p-accordion p-component",accordiontab:{root:function(t){var e=t.selected;return ge("p-accordion-tab",{"p-accordion-tab-active":e})},content:"p-accordion-content",header:function(t){var e=t.selected,o=t.getTabProp,r=t.tab;return ge("p-accordion-header",{"p-highlight":e,"p-disabled":o(r,"disabled")})},headeraction:"p-accordion-header-link",headericon:"p-accordion-toggle-icon",headertitle:"p-accordion-header-text",toggleablecontent:"p-toggleable-content",transition:"p-toggleable-content"}},ju=`
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
`,io=ke.extend({defaultProps:{__TYPE:"Accordion",id:null,activeIndex:null,className:null,style:null,multiple:!1,expandIcon:null,collapseIcon:null,transitionOptions:null,onTabOpen:null,onTabClose:null,onTabChange:null,children:void 0},css:{classes:ku,styles:ju}}),Hn=ke.extend({defaultProps:{__TYPE:"AccordionTab",className:null,contentClassName:null,contentStyle:null,disabled:!1,header:null,headerClassName:null,headerStyle:null,headerTemplate:null,style:null,tabIndex:0,children:void 0},getCProp:function(t,e){return L.getComponentProp(t,e,Hn.defaultProps)},getCProps:function(t){return L.getComponentProps(t,Hn.defaultProps)},getCOtherProps:function(t){return L.getComponentDiffProps(t,Hn.defaultProps)}});function fl(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,o)}return e}function Bn(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?fl(Object(e),!0).forEach(function(o){Pu(n,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):fl(Object(e)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(e,o))})}return n}var jt=function(){},Jt=f.forwardRef(function(n,t){var e=Tt(),o=f.useContext(nt),r=io.getProps(n,o),a=f.useState(r.id),i=dl(a,2),l=i[0],s=i[1],c=f.useState(r.activeIndex),u=dl(c,2),d=u[0],m=u[1],v=f.useRef(null),E=r.onTabChange?r.activeIndex:d,h=f.Children.count(r.children),C={props:r,state:{id:l,activeIndex:d}},x=io.setMetaData(Bn({},C)),S=x.ptm,O=x.ptmo,P=x.cx,w=x.isUnstyled;Bt(io.css.styles,w,{name:"accordion"});var T=function(N,F){return Hn.getCProp(N,F)},_=function(N,F,se){var M={parent:C,context:{index:se,count:h,first:se===0,last:se===h-1,selected:G(se),disabled:T(N,"disabled")}};return e(S("tab.".concat(F),{tab:M}),S("accordiontab.".concat(F),{accordiontab:M}),S("accordiontab.".concat(F),M),O(T(N,"pt"),F,M))},U=function(N,F,se){R(N,F,se)},R=function(N,F,se){if(!T(F,"disabled")){var M=G(se),Oe=null;if(r.multiple){var Ie=E||[];Oe=M?Ie.filter(function(_e){return _e!==se}):[].concat(Cu(Ie),[se])}else Oe=M?null:se;var Te=M?r.onTabClose:r.onTabOpen;Te&&Te({originalEvent:N,index:se}),r.onTabChange?r.onTabChange({originalEvent:N,index:Oe}):m(Oe)}N.preventDefault()},k=function(N,F,se){switch(N.code){case"ArrowDown":j(N);break;case"ArrowUp":J(N);break;case"Home":z(N);break;case"End":Z(N);break;case"Enter":case"NumpadEnter":case"Space":ne(N,F,se);break}},j=function(N){var F=ve(N.target.parentElement.parentElement);F?D(F):z(N),N.preventDefault()},J=function(N){var F=ye(N.target.parentElement.parentElement);F?D(F):Z(N),N.preventDefault()},z=function(N){var F=ce();D(F),N.preventDefault()},Z=function(N){var F=ee();D(F),N.preventDefault()},ne=function(N,F,se){R(N,F,se),N.preventDefault()},ve=function Y(N){var F=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,se=F?N:N.nextElementSibling,M=$.findSingle(se,'[data-pc-section="header"]');return M?$.getAttribute(M,"data-p-disabled")?Y(M.parentElement):$.findSingle(M,'[data-pc-section="headeraction"]'):null},ye=function Y(N){var F=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,se=F?N:N.previousElementSibling,M=$.findSingle(se,'[data-pc-section="header"]');return M?$.getAttribute(M,"data-p-disabled")?Y(M.parentElement):$.findSingle(M,'[data-pc-section="headeraction"]'):null},ce=function(){return ve(v.current.firstElementChild,!0)},ee=function(){return ye(v.current.lastElementChild,!0)},D=function(N){N&&$.focus(N)},G=function(N){return r.multiple&&Array.isArray(E)?E&&E.some(function(F){return F===N}):E===N};if(f.useImperativeHandle(t,function(){return{props:r,getElement:function(){return v.current}}}),Ht(function(){l||s(aa())}),!l)return null;var ie=function(N,F,se){var M=Bn(Bn({},T(N,"style")||{}),T(N,"headerStyle")||{}),Oe=l+"_header_"+se,Ie=l+"_content_"+se,Te=T(N,"disabled")?-1:T(N,"tabIndex"),_e=e({className:P("accordiontab.headertitle")},_(N,"headertitle",se)),Me=Hn.getCProps(N),St=T(N,"headerTemplate")?L.getJSXElement(T(N,"headerTemplate"),Me):f.createElement("span",_e,L.getJSXElement(T(N,"header"),Me)),lt=e({"aria-hidden":"true",className:P("accordiontab.headericon")},_(N,"headericon",se)),Xe=F?r.collapseIcon||f.createElement(Oa,lt):r.expandIcon||f.createElement(cl,lt),Je=zt.getJSXIcon(Xe,Bn({},lt),{props:r,selected:F}),bt=e({className:ge(T(N,"headerClassName"),T(N,"className"),P("accordiontab.header",{selected:F,getTabProp:T,tab:N})),style:M,"data-p-highlight":F,"data-p-disabled":T(N,"disabled")},_(N,"header",se)),Ct=e({id:Oe,href:"#"+Ie,className:P("accordiontab.headeraction"),role:"button",tabIndex:Te,onClick:function(Ze){return U(Ze,N,se)},onKeyDown:function(Ze){return k(Ze,N,se)},"aria-disabled":T(N,"disabled"),"aria-controls":Ie,"aria-expanded":F},_(N,"headeraction",se));return f.createElement("div",bt,f.createElement("a",Ct,Je,St))},X=function(N,F,se){var M=Bn(Bn({},T(N,"style")||{}),T(N,"contentStyle")||{}),Oe=l+"_content_"+se,Ie=l+"_header_"+se,Te=f.createRef(),_e=e({id:Oe,ref:Te,className:ge(T(N,"contentClassName"),T(N,"className"),P("accordiontab.toggleablecontent")),style:M,role:"region","aria-labelledby":Ie},_(N,"toggleablecontent",se)),Me=e({className:P("accordiontab.content")},_(N,"content",se)),St=e({classNames:P("accordiontab.transition"),timeout:{enter:1e3,exit:450},in:F,unmountOnExit:!0,options:r.transitionOptions},_(N,"transition",se));return f.createElement(oo,ao({nodeRef:Te},St),f.createElement("div",_e,f.createElement("div",Me,T(N,"children"))))},K=function(N,F){if(L.isValidChild(N,"AccordionTab")){var se=l+"_"+F,M=G(F),Oe=ie(N,M,F),Ie=X(N,M,F),Te=e({key:se,className:P("accordiontab.root",{selected:M})},Hn.getCOtherProps(N),_(N,"root",F));return f.createElement("div",Te,Oe,Ie)}return null},de=function(){return f.Children.map(r.children,K)},fe=de(),me=e({className:ge(r.className,P("root")),style:r.style},io.getOtherProps(r),S("root"));return f.createElement("div",ao({id:l,ref:v},me),fe)});jt.displayName="AccordionTab",Jt.displayName="Accordion";function Ta(){return Ta=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},Ta.apply(this,arguments)}function mr(n){"@babel/helpers - typeof";return mr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mr(n)}function Du(n,t){if(mr(n)!=="object"||n===null)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var o=e.call(n,t||"default");if(mr(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function Nu(n){var t=Du(n,"string");return mr(t)==="symbol"?t:String(t)}function Au(n,t,e){return t=Nu(t),t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function Ru(n){if(Array.isArray(n))return n}function Lu(n,t){var e=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(e!=null){var o,r,a,i,l=[],s=!0,c=!1;try{if(a=(e=e.call(n)).next,t!==0)for(;!(s=(o=a.call(e)).done)&&(l.push(o.value),l.length!==t);s=!0);}catch(u){c=!0,r=u}finally{try{if(!s&&e.return!=null&&(i=e.return(),Object(i)!==i))return}finally{if(c)throw r}}return l}}function pl(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}function $u(n,t){if(n){if(typeof n=="string")return pl(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return pl(n,t)}}function Fu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Mu(n,t){return Ru(n)||Lu(n,t)||$u(n,t)||Fu()}var zu={root:function(t){var e=t.props;return ge("",e.className)},toolbar:"",content:""},Hu=`
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
`,lo=ke.extend({defaultProps:{__TYPE:"Editor",id:null,value:null,style:null,className:null,placeholder:null,readOnly:!1,modules:null,formats:null,theme:"snow",showHeader:!0,headerTemplate:null,onTextChange:null,onSelectionChange:null,onLoad:null,maxLength:null,children:void 0},css:{classes:zu,styles:Hu}});function ml(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,o)}return e}function vl(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?ml(Object(e),!0).forEach(function(o){Au(n,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):ml(Object(e)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(e,o))})}return n}var Bu=function(){try{return Quill}catch{return null}}(),gl=f.memo(f.forwardRef(function(n,t){var e=Tt(),o=f.useContext(nt),r=lo.getProps(n,o),a=lo.setMetaData({props:r}),i=a.ptm,l=a.cx,s=a.isUnstyled;Bt(lo.css.styles,s,{name:"editor"});var c=f.useRef(null),u=f.useRef(null),d=f.useRef(null),m=f.useRef(null),v=f.useRef(!1),E=f.useState(!1),h=Mu(E,2),C=h[0],x=h[1];Ht(function(){if(!v.current){var j={modules:vl({toolbar:r.showHeader?d.current:!1},r.modules),placeholder:r.placeholder,readOnly:r.readOnly,theme:r.theme,formats:r.formats};Bu?w(new Quill(u.current,j)):import("quill").then(function(J){if(J&&$.isExist(u.current)){var z;J.default?z=new J.default(u.current,j):z=new J(u.current,j),w(z)}}),v.current=!0}});var S=function(J,z,Z){var ne=u.current.children[0],ve=ne?ne.innerHTML:null,ye=m.current.getText();if(ve==="<p><br></p>"&&(ve=null),Z==="api"){var ce=u.current.children[0],ee=document.createElement("div");if(ee.innerHTML=r.value||"",$.isEqualElement(ce,ee))return}if(r.maxLength){var D=m.current.getLength();D>r.maxLength&&m.current.deleteText(r.maxLength,D)}r.onTextChange&&r.onTextChange({htmlValue:ve,textValue:ye,delta:J,source:Z})},O=function(J,z,Z){r.onSelectionChange&&r.onSelectionChange({range:J,oldRange:z,source:Z})},P=y.useRef(r.value);P.current=r.value;var w=function(J){m.current=J,P.current&&J.setContents(J.clipboard.convert({html:P.current,text:""})),x(!0)};He(function(){if(C)return m.current.on("text-change",S),m.current.on("selection-change",O),function(){m.current.off("text-change",S),m.current.off("selection-change",O)}}),He(function(){C&&m.current&&m.current.getModule("toolbar")&&r.onLoad&&r.onLoad(m.current)},[C]),He(function(){m.current&&!m.current.hasFocus()&&(r.value?m.current.setContents(m.current.clipboard.convert({html:r.value,text:""})):m.current.setText(""))},[r.value]),f.useImperativeHandle(t,function(){return{props:r,getQuill:function(){return m.current},getElement:function(){return c.current},getContent:function(){return u.current},getToolbar:function(){return d.current}}});var T=function(){var J=e({ref:d,className:l("toolbar")},i("toolbar"));if(r.showHeader===!1)return null;if(r.headerTemplate)return f.createElement("div",J,r.headerTemplate);var z=function(ve,ye){return e(ve&&vl({},ve),i(ye))},Z=e({className:"ql-formats"},i("formats"));return f.createElement("div",J,f.createElement("span",Z,f.createElement("select",z({className:"ql-header",defaultValue:"0"},"header"),f.createElement("option",z({value:"1"},"option"),"Heading"),f.createElement("option",z({value:"2"},"option"),"Subheading"),f.createElement("option",z({value:"0"},"option"),"Normal")),f.createElement("select",z({className:"ql-font"},"font"),f.createElement("option",z(void 0,"option")),f.createElement("option",z({value:"serif"},"option")),f.createElement("option",z({value:"monospace"},"option")))),f.createElement("span",Z,f.createElement("button",z({type:"button",className:"ql-bold","aria-label":"Bold"},"bold")),f.createElement("button",z({type:"button",className:"ql-italic","aria-label":"Italic"},"italic")),f.createElement("button",z({type:"button",className:"ql-underline","aria-label":"Underline"},"underline"))),f.createElement("span",Z,f.createElement("select",z({className:"ql-color"},"color")),f.createElement("select",z({className:"ql-background"},"background"))),f.createElement("span",Z,f.createElement("button",z({type:"button",className:"ql-list",value:"ordered","aria-label":"Ordered List"},"list")),f.createElement("button",z({type:"button",className:"ql-list",value:"bullet","aria-label":"Unordered List"},"list")),f.createElement("select",z({className:"ql-align"},"select"),f.createElement("option",z({defaultValue:!0},"option")),f.createElement("option",z({value:"center"},"option")),f.createElement("option",z({value:"right"},"option")),f.createElement("option",z({value:"justify"},"option")))),f.createElement("span",Z,f.createElement("button",z({type:"button",className:"ql-link","aria-label":"Insert Link"},"link")),f.createElement("button",z({type:"button",className:"ql-image","aria-label":"Insert Image"},"image")),f.createElement("button",z({type:"button",className:"ql-code-block","aria-label":"Insert Code Block"},"codeBlock"))),f.createElement("span",Z,f.createElement("button",z({type:"button",className:"ql-clean","aria-label":"Remove Styles"},"clean"))))},_=T(),U=e({ref:u,className:l("content"),style:r.style},i("content")),R=f.createElement("div",U),k=e({className:ge(r.className,l("root"))},lo.getOtherProps(r),i("root"));return f.createElement("div",Ta({id:r.id,ref:c},k),_,R)}));gl.displayName="Editor";function Ia(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}function Wu(n){if(Array.isArray(n))return Ia(n)}function Vu(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Uu(n,t){if(n){if(typeof n=="string")return Ia(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Ia(n,t)}}function Ku(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yu(n){return Wu(n)||Vu(n)||Uu(n)||Ku()}var Wn={DEFAULT_MASKS:{pint:/[\d]/,int:/[\d\-]/,pnum:/[\d\.]/,money:/[\d\.\s,]/,num:/[\d\-\.]/,hex:/[0-9a-f]/i,email:/[a-z0-9_\.\-@]/i,alpha:/[a-z_]/i,alphanum:/[a-z0-9_]/i},getRegex:function(t){return Wn.DEFAULT_MASKS[t]?Wn.DEFAULT_MASKS[t]:t},onBeforeInput:function(t,e,o){o||!$.isAndroid()||this.validateKey(t,t.data,e)},onKeyPress:function(t,e,o){o||$.isAndroid()||t.ctrlKey||t.altKey||t.metaKey||this.validateKey(t,t.key,e)},onPaste:function(t,e,o){if(!o){var r=this.getRegex(e),a=t.clipboardData.getData("text");Yu(a).forEach(function(i){if(!r.test(i))return t.preventDefault(),!1})}},validateKey:function(t,e,o){if(e!=null){var r=e.length<=2;if(r){var a=this.getRegex(o);a.test(e)||t.preventDefault()}}},validate:function(t,e){var o=t.target.value,r=!0,a=this.getRegex(e);return o&&!a.test(o)&&(r=!1),r}};function Gu(n){if(Array.isArray(n))return n}function Xu(n,t){var e=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(e!=null){var o,r,a,i,l=[],s=!0,c=!1;try{if(a=(e=e.call(n)).next,t!==0)for(;!(s=(o=a.call(e)).done)&&(l.push(o.value),l.length!==t);s=!0);}catch(u){c=!0,r=u}finally{try{if(!s&&e.return!=null&&(i=e.return(),Object(i)!==i))return}finally{if(c)throw r}}return l}}function hl(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}function Ju(n,t){if(n){if(typeof n=="string")return hl(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return hl(n,t)}}function Zu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qu(n,t){return Gu(n)||Xu(n,t)||Ju(n,t)||Zu()}var _a={defaultProps:{__TYPE:"Portal",element:null,appendTo:null,visible:!1,onMounted:null,onUnmounted:null,children:void 0},getProps:function(t){return L.getMergedProps(t,_a.defaultProps)},getOtherProps:function(t){return L.getDiffProps(t,_a.defaultProps)}},vr=f.memo(function(n){var t=_a.getProps(n),e=f.useContext(nt),o=f.useState(t.visible&&$.isClient()),r=Qu(o,2),a=r[0],i=r[1];Ht(function(){$.isClient()&&!a&&(i(!0),t.onMounted&&t.onMounted())}),He(function(){t.onMounted&&t.onMounted()},[a]),on(function(){t.onUnmounted&&t.onUnmounted()});var l=t.element||t.children;if(l&&a){var s=t.appendTo||e&&e.appendTo||rt.appendTo;return L.isFunction(s)&&(s=s()),s||(s=document.body),s==="self"?l:Gt.createPortal(l,s)}return null});vr.displayName="Portal";function so(){return so=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},so.apply(this,arguments)}function gr(n){"@babel/helpers - typeof";return gr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gr(n)}function ed(n,t){if(gr(n)!=="object"||n===null)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var o=e.call(n,t||"default");if(gr(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function td(n){var t=ed(n,"string");return gr(t)==="symbol"?t:String(t)}function bl(n,t,e){return t=td(t),t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function ka(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}function nd(n){if(Array.isArray(n))return ka(n)}function rd(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function yl(n,t){if(n){if(typeof n=="string")return ka(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return ka(n,t)}}function od(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ad(n){return nd(n)||rd(n)||yl(n)||od()}function id(n){if(Array.isArray(n))return n}function ld(n,t){var e=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(e!=null){var o,r,a,i,l=[],s=!0,c=!1;try{if(a=(e=e.call(n)).next,t!==0)for(;!(s=(o=a.call(e)).done)&&(l.push(o.value),l.length!==t);s=!0);}catch(u){c=!0,r=u}finally{try{if(!s&&e.return!=null&&(i=e.return(),Object(i)!==i))return}finally{if(c)throw r}}return l}}function sd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hr(n,t){return id(n)||ld(n,t)||yl(n,t)||sd()}var cd={root:function(t){var e=t.positionState,o=t.classNameState;return ge("p-tooltip p-component",bl({},"p-tooltip-".concat(e),!0),o)},arrow:"p-tooltip-arrow",text:"p-tooltip-text"},ud={arrow:function(t){var e=t.context;return{top:e.bottom?"0":e.right||e.left||!e.right&&!e.left&&!e.top&&!e.bottom?"50%":null,bottom:e.top?"0":null,left:e.right||!e.right&&!e.left&&!e.top&&!e.bottom?"0":e.top||e.bottom?"50%":null,right:e.left?"0":null}}},dd=`
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
`,co=ke.extend({defaultProps:{__TYPE:"Tooltip",appendTo:null,at:null,autoHide:!0,autoZIndex:!0,baseZIndex:0,className:null,closeOnEscape:!1,content:null,disabled:!1,event:null,hideDelay:0,hideEvent:"mouseleave",id:null,mouseTrack:!1,mouseTrackLeft:5,mouseTrackTop:5,my:null,onBeforeHide:null,onBeforeShow:null,onHide:null,onShow:null,position:"right",showDelay:0,showEvent:"mouseenter",showOnDisabled:!1,style:null,target:null,updateDelay:0,children:void 0},css:{classes:cd,styles:dd,inlineStyles:ud}});function wl(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,o)}return e}function fd(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?wl(Object(e),!0).forEach(function(o){bl(n,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):wl(Object(e)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(e,o))})}return n}var Vn=f.memo(f.forwardRef(function(n,t){var e=Tt(),o=f.useContext(nt),r=co.getProps(n,o),a=f.useState(!1),i=hr(a,2),l=i[0],s=i[1],c=f.useState(r.position||"right"),u=hr(c,2),d=u[0],m=u[1],v=f.useState(""),E=hr(v,2),h=E[0],C=E[1],x={props:r,state:{visible:l,position:d,className:h},context:{right:d==="right",left:d==="left",top:d==="top",bottom:d==="bottom"}},S=co.setMetaData(x),O=S.ptm,P=S.cx,w=S.sx,T=S.isUnstyled;Bt(co.css.styles,T,{name:"tooltip"}),Fi({callback:function(){_e()},when:r.closeOnEscape,priority:[Li.TOOLTIP,0]});var _=f.useRef(null),U=f.useRef(null),R=f.useRef(null),k=f.useRef(null),j=f.useRef(!0),J=f.useRef({}),z=f.useRef(null),Z=la({listener:function(H){!$.isTouchDevice()&&_e(H)}}),ne=hr(Z,2),ve=ne[0],ye=ne[1],ce=Mi({target:R.current,listener:function(H){_e(H)},when:l}),ee=hr(ce,2),D=ee[0],G=ee[1],ie=function(H){return!(r.content||Y(H,"tooltip"))},X=function(H){return!(r.content||Y(H,"tooltip")||r.children)},K=function(H){return Y(H,"mousetrack")||r.mouseTrack},de=function(H){return Y(H,"disabled")==="true"||N(H,"disabled")||r.disabled},fe=function(H){return Y(H,"showondisabled")||r.showOnDisabled},me=function(){return Y(R.current,"autohide")||r.autoHide},Y=function(H,pe){return N(H,"data-pr-".concat(pe))?H.getAttribute("data-pr-".concat(pe)):null},N=function(H,pe){return H&&H.hasAttribute(pe)},F=function(H){var pe=[Y(H,"showevent")||r.showEvent],qe=[Y(H,"hideevent")||r.hideEvent];if(K(H))pe=["mousemove"],qe=["mouseleave"];else{var Ee=Y(H,"event")||r.event;Ee==="focus"&&(pe=["focus"],qe=["blur"]),Ee==="both"&&(pe=["focus","mouseenter"],qe=["blur","mouseleave"])}return{showEvents:pe,hideEvents:qe}},se=function(H){return Y(H,"position")||d},M=function(H){var pe=Y(H,"mousetracktop")||r.mouseTrackTop,qe=Y(H,"mousetrackleft")||r.mouseTrackLeft;return{top:pe,left:qe}},Oe=function(H,pe){if(U.current){var qe=Y(H,"tooltip")||r.content;qe?(U.current.innerHTML="",U.current.appendChild(document.createTextNode(qe)),pe()):r.children&&pe()}},Ie=function(H){Oe(R.current,function(){var pe=z.current,qe=pe.pageX,Ee=pe.pageY;r.autoZIndex&&!Xt.get(_.current)&&Xt.set("tooltip",_.current,o&&o.autoZIndex||rt.autoZIndex,r.baseZIndex||o&&o.zIndex.tooltip||rt.zIndex.tooltip),_.current.style.left="",_.current.style.top="",me()&&(_.current.style.pointerEvents="none");var Se=K(R.current)||H==="mouse";(Se&&!k.current||Se)&&(k.current={width:$.getOuterWidth(_.current),height:$.getOuterHeight(_.current)}),Me(R.current,{x:qe,y:Ee},H)})},Te=function(H){R.current=H.currentTarget;var pe=de(R.current),qe=X(fe(R.current)&&pe?R.current.firstChild:R.current);if(!(qe||pe))if(z.current=H,l)Ct("updateDelay",Ie);else{var Ee=Ve(r.onBeforeShow,{originalEvent:H,target:R.current});Ee&&Ct("showDelay",function(){s(!0),Ve(r.onShow,{originalEvent:H,target:R.current})})}},_e=function(H){if(Ze(),l){var pe=Ve(r.onBeforeHide,{originalEvent:H,target:R.current});pe&&Ct("hideDelay",function(){!me()&&j.current===!1||(Xt.clear(_.current),$.removeClass(_.current,"p-tooltip-active"),s(!1),Ve(r.onHide,{originalEvent:H,target:R.current}))})}},Me=function(H,pe,qe){var Ee=0,Se=0,$e=qe||d;if((K(H)||$e=="mouse")&&pe){var at={width:$.getOuterWidth(_.current),height:$.getOuterHeight(_.current)};Ee=pe.x,Se=pe.y;var De=M(H),Ne=De.top,Le=De.left;switch($e){case"left":Ee=Ee-(at.width+Le),Se=Se-(at.height/2-Ne);break;case"right":case"mouse":Ee=Ee+Le,Se=Se-(at.height/2-Ne);break;case"top":Ee=Ee-(at.width/2-Le),Se=Se-(at.height+Ne);break;case"bottom":Ee=Ee-(at.width/2-Le),Se=Se+Ne;break}Ee<=0||k.current.width>at.width?(_.current.style.left="0px",_.current.style.right=window.innerWidth-at.width-Ee+"px"):(_.current.style.right="",_.current.style.left=Ee+"px"),_.current.style.top=Se+"px",$.addClass(_.current,"p-tooltip-active")}else{var Ue=$.findCollisionPosition($e),Ke=Y(H,"my")||r.my||Ue.my,Ye=Y(H,"at")||r.at||Ue.at;_.current.style.padding="0px",$.flipfitCollision(_.current,H,Ke,Ye,function(Ge){var ct=Ge.at,We=ct.x,yt=ct.y,wt=Ge.my.x,xt=r.at?We!=="center"&&We!==wt?We:yt:Ge.at["".concat(Ue.axis)];_.current.style.padding="",m(xt),St(xt),$.addClass(_.current,"p-tooltip-active")})}},St=function(H){if(_.current){var pe=getComputedStyle(_.current);H==="left"?_.current.style.left=parseFloat(pe.left)-parseFloat(pe.paddingLeft)*2+"px":H==="top"&&(_.current.style.top=parseFloat(pe.top)-parseFloat(pe.paddingTop)*2+"px")}},lt=function(){me()||(j.current=!1)},Xe=function(H){me()||(j.current=!0,_e(H))},Je=function(H){if(H){var pe=F(H),qe=pe.showEvents,Ee=pe.hideEvents,Se=Ft(H);qe.forEach(function($e){return Se==null?void 0:Se.addEventListener($e,Te)}),Ee.forEach(function($e){return Se==null?void 0:Se.addEventListener($e,_e)})}},bt=function(H){if(H){var pe=F(H),qe=pe.showEvents,Ee=pe.hideEvents,Se=Ft(H);qe.forEach(function($e){return Se==null?void 0:Se.removeEventListener($e,Te)}),Ee.forEach(function($e){return Se==null?void 0:Se.removeEventListener($e,_e)})}},Ct=function(H,pe){Ze();var qe=Y(R.current,H.toLowerCase())||r[H];qe?J.current["".concat(H)]=setTimeout(function(){return pe()},qe):pe()},Ve=function(H){if(H){for(var pe=arguments.length,qe=new Array(pe>1?pe-1:0),Ee=1;Ee<pe;Ee++)qe[Ee-1]=arguments[Ee];var Se=H.apply(void 0,qe);return Se===void 0&&(Se=!0),Se}return!0},Ze=function(){Object.values(J.current).forEach(function(H){return clearTimeout(H)})},Ft=function(H){if(H){if(fe(H)){if(!H.hasWrapper){var pe=document.createElement("div"),qe=H.nodeName==="INPUT";return qe?$.addMultipleClasses(pe,"p-tooltip-target-wrapper p-inputwrapper"):$.addClass(pe,"p-tooltip-target-wrapper"),H.parentNode.insertBefore(pe,H),pe.appendChild(H),H.hasWrapper=!0,pe}return H.parentElement}else if(H.hasWrapper){var Ee;(Ee=H.parentElement).replaceWith.apply(Ee,ad(H.parentElement.childNodes)),delete H.hasWrapper}return H}return null},Qe=function(H){ot(H),et(H)},et=function(H){Dt(H||r.target,Je)},ot=function(H){Dt(H||r.target,bt)},Dt=function(H,pe){if(H=L.getRefElement(H),H)if($.isElement(H))pe(H);else{var qe=function(Se){var $e=$.find(document,Se);$e.forEach(function(at){pe(at)})};H instanceof Array?H.forEach(function(Ee){qe(Ee)}):qe(H)}};Ht(function(){l&&R.current&&de(R.current)&&_e()}),He(function(){return et(),function(){ot()}},[Te,_e,r.target]),He(function(){if(l){var we=se(R.current),H=Y(R.current,"classname");m(we),C(H),Ie(we),ve(),D()}else m(r.position||"right"),C(""),R.current=null,k.current=null,j.current=!0;return function(){ye(),G()}},[l]),He(function(){var we=se(R.current);l&&we!=="mouse"&&Ct("updateDelay",function(){Oe(R.current,function(){Me(R.current)})})},[r.content]),on(function(){_e(),Xt.clear(_.current)}),f.useImperativeHandle(t,function(){return{props:r,updateTargetEvents:Qe,loadTargetEvents:et,unloadTargetEvents:ot,show:Te,hide:_e,getElement:function(){return _.current},getTarget:function(){return R.current}}});var st=function(){var H=ie(R.current),pe=e({id:r.id,className:ge(r.className,P("root",{positionState:d,classNameState:h})),style:r.style,role:"tooltip","aria-hidden":l,onMouseEnter:function($e){return lt()},onMouseLeave:function($e){return Xe($e)}},co.getOtherProps(r),O("root")),qe=e({className:P("arrow"),style:w("arrow",fd({},x))},O("arrow")),Ee=e({className:P("text")},O("text"));return f.createElement("div",so({ref:_},pe),f.createElement("div",qe),f.createElement("div",so({ref:U},Ee),H&&r.children))};if(l){var ft=st();return f.createElement(vr,{element:ft,appendTo:r.appendTo,visible:!0})}return null}));Vn.displayName="Tooltip";function uo(){return uo=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},uo.apply(this,arguments)}function br(n){"@babel/helpers - typeof";return br=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},br(n)}function pd(n,t){if(br(n)!=="object"||n===null)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var o=e.call(n,t||"default");if(br(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function md(n){var t=pd(n,"string");return br(t)==="symbol"?t:String(t)}function vd(n,t,e){return t=md(t),t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var gd={root:function(t){var e=t.props,o=t.isFilled,r=t.context;return ge("p-inputtext p-component",{"p-disabled":e.disabled,"p-filled":o,"p-invalid":e.invalid,"p-variant-filled":e.variant?e.variant==="filled":r&&r.inputStyle==="filled"})}},fo=ke.extend({defaultProps:{__TYPE:"InputText",__parentMetadata:null,children:void 0,className:null,invalid:!1,variant:null,keyfilter:null,onBeforeInput:null,onInput:null,onKeyDown:null,onPaste:null,tooltip:null,tooltipOptions:null,validateOnly:!1,iconPosition:null},css:{classes:gd}});function xl(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,o)}return e}function El(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?xl(Object(e),!0).forEach(function(o){vd(n,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):xl(Object(e)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(e,o))})}return n}var Fe=f.memo(f.forwardRef(function(n,t){var e=Tt(),o=f.useContext(nt),r=fo.getProps(n,o),a=fo.setMetaData(El(El({props:r},r.__parentMetadata),{},{context:{disabled:r.disabled,iconPosition:r.iconPosition}})),i=a.ptm,l=a.cx,s=a.isUnstyled;Bt(fo.css.styles,s,{name:"inputtext",styled:!0});var c=f.useRef(t),u=function(S){r.onKeyDown&&r.onKeyDown(S),r.keyfilter&&Wn.onKeyPress(S,r.keyfilter,r.validateOnly)},d=function(S){r.onBeforeInput&&r.onBeforeInput(S),r.keyfilter&&Wn.onBeforeInput(S,r.keyfilter,r.validateOnly)},m=function(S){var O=S.target,P=!0;r.keyfilter&&r.validateOnly&&(P=Wn.validate(S,r.keyfilter)),r.onInput&&r.onInput(S,P),L.isNotEmpty(O.value)?$.addClass(O,"p-filled"):$.removeClass(O,"p-filled")},v=function(S){r.onPaste&&r.onPaste(S),r.keyfilter&&Wn.onPaste(S,r.keyfilter,r.validateOnly)};f.useEffect(function(){L.combinedRefs(c,t)},[c,t]);var E=f.useMemo(function(){return L.isNotEmpty(r.value)||L.isNotEmpty(r.defaultValue)},[r.value,r.defaultValue]),h=L.isNotEmpty(r.tooltip),C=e({className:ge(r.className,l("root",{context:o,isFilled:E})),onBeforeInput:d,onInput:m,onKeyDown:u,onPaste:v},fo.getOtherProps(r),i("root"));return f.createElement(f.Fragment,null,f.createElement("input",uo({ref:c},C)),h&&f.createElement(Vn,uo({target:c,content:r.tooltip,pt:i("tooltip")},r.tooltipOptions)))}));Fe.displayName="InputText";const hd=({item:n,onChange:t,config:e})=>{const[o,r]=y.useState({...$n,...n}),a=l=>{const s={...o,[l.target.name]:l.target.value};r(s),t(s)},i=l=>{const s={...o,value:l};r(s),t(s)};return y.useEffect(()=>{r({...$n,...n})},[n]),p.jsx(p.Fragment,{children:p.jsx(Jt,{activeIndex:0,children:p.jsx(jt,{header:"General",children:p.jsxs("div",{className:"form-item flex flex-column gap-4",children:[p.jsxs("div",{className:"flex flex-column gap-2",children:[p.jsx("label",{htmlFor:"label",children:"Label"}),p.jsx(Fe,{id:"label",value:o.label||"",name:"label",onChange:a,className:"w-full"})]}),p.jsx(gl,{value:o.value,name:"value",onTextChange:l=>i(l.htmlValue??""),style:{minHeight:"300px"}})]})},"general")})})},bd=n=>({}),yd=new pn({type:$n.type,form:new Ot({render:fc,validation:pc}),settings:new Ot({render:hd,validation:bd}),heading:"HTML Content",description:"WYSIWYG editor for adding in content to the form",hidden:!1,icon:mc,data:$n}),Sl=new Gr(new Yr({label:"Content"}));Sl.registerItem(yd);const Dn={id:rn(),type:"input-number",label:"",value:"",placeholder:""},wd=({item:n,onChange:t,config:e})=>{const[o,r]=y.useState({...Dn,...n});y.useEffect(()=>{r({...Dn,...n})},[n]);const a=l=>{const s={...Dn,...n,value:l.target.value};t(s)},i=Math.random().toString(36).substring(2,15);return p.jsx(p.Fragment,{children:p.jsx("article",{children:p.jsxs("div",{className:"flex flex-column gap-2",children:[p.jsx("label",{htmlFor:i,children:o.label}),p.jsx(Fe,{type:"number",value:o.value,onChange:a,placeholder:o.placeholder||"",className:"w-full",id:i})]})})})},xd=n=>({});var Cl;function ja(){return ja=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)({}).hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},ja.apply(null,arguments)}var Ed=function(t){return f.createElement("svg",ja({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},t),Cl||(Cl=f.createElement("path",{d:"M0 64c0-17.7 14.3-32 32-32h256c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-224 384c-8.9 15.3-28.5 20.4-43.8 11.5s-20.4-28.5-11.5-43.8L232.3 96H32C14.3 96 0 81.7 0 64"})))};const Sd=({item:n,onChange:t,config:e})=>{const[o,r]=y.useState({...Dn,...n}),a=i=>{const l={...o,[i.target.name]:i.target.value};r(l),t(l)};return y.useEffect(()=>{r({...Dn,...n})},[n]),p.jsx(p.Fragment,{children:p.jsxs(Jt,{activeIndex:0,children:[" ",p.jsx(jt,{header:"General",children:p.jsxs("div",{className:"form-item flex flex-column gap-4",children:[p.jsxs("div",{className:"flex flex-column gap-2",children:[p.jsx("label",{htmlFor:"label",children:"Label"}),p.jsx(Fe,{id:"label",value:o.label||"",name:"label",onChange:a,className:"w-full"})]}),p.jsxs("div",{className:"flex flex-column gap-2",children:[p.jsx("label",{htmlFor:"placeholder",children:"Placeholder"}),p.jsx(Fe,{id:"placeholder",value:o.placeholder||"",name:"placeholder",onChange:a,className:"w-full"})]})]})},"general")," "]})})},Cd=n=>({}),Od=new pn({type:Dn.type,form:new Ot({render:wd,validation:xd}),settings:new Ot({render:Sd,validation:Cd}),heading:"Number input",description:"a simple box to insert a number value into",hidden:!1,icon:Ed,data:Dn}),hn={id:rn(),type:"input-select",label:"",value:"",source:"local",options:[],placeholder:""};function Da(){return Da=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},Da.apply(this,arguments)}var Ol=f.memo(f.forwardRef(function(n,t){var e=$t.getPTI(n);return f.createElement("svg",Da({ref:t,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),f.createElement("path",{d:"M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z",fill:"currentColor"}))}));Ol.displayName="ChevronUpIcon";function Na(){return Na=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},Na.apply(this,arguments)}var po=f.memo(f.forwardRef(function(n,t){var e=$t.getPTI(n);return f.createElement("svg",Na({ref:t,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),f.createElement("path",{d:"M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",fill:"currentColor"}))}));po.displayName="SpinnerIcon";function Aa(){return Aa=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},Aa.apply(this,arguments)}var mo=f.memo(f.forwardRef(function(n,t){var e=$t.getPTI(n);return f.createElement("svg",Aa({ref:t,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),f.createElement("path",{d:"M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",fill:"currentColor"}))}));mo.displayName="TimesIcon";var Nn=Cc();function Ra(){return Ra=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},Ra.apply(this,arguments)}var ql=f.memo(f.forwardRef(function(n,t){var e=$t.getPTI(n);return f.createElement("svg",Ra({ref:t,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),f.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z",fill:"currentColor"}))}));ql.displayName="SearchIcon";function La(){return La=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},La.apply(this,arguments)}function yr(n){"@babel/helpers - typeof";return yr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},yr(n)}function qd(n,t){if(yr(n)!=="object"||n===null)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var o=e.call(n,t||"default");if(yr(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function Pd(n){var t=qd(n,"string");return yr(t)==="symbol"?t:String(t)}function Pl(n,t,e){return t=Pd(t),t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function Td(n){if(Array.isArray(n))return n}function Id(n,t){var e=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(e!=null){var o,r,a,i,l=[],s=!0,c=!1;try{if(a=(e=e.call(n)).next,t===0){if(Object(e)!==e)return;s=!1}else for(;!(s=(o=a.call(e)).done)&&(l.push(o.value),l.length!==t);s=!0);}catch(u){c=!0,r=u}finally{try{if(!s&&e.return!=null&&(i=e.return(),Object(i)!==i))return}finally{if(c)throw r}}return l}}function Tl(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}function _d(n,t){if(n){if(typeof n=="string")return Tl(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Tl(n,t)}}function kd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ln(n,t){return Td(n)||Id(n,t)||_d(n,t)||kd()}var jd=`
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
`,vo=ke.extend({defaultProps:{__TYPE:"VirtualScroller",__parentMetadata:null,id:null,style:null,className:null,tabIndex:0,items:null,itemSize:0,scrollHeight:null,scrollWidth:null,orientation:"vertical",step:0,numToleratedItems:null,delay:0,resizeDelay:10,appendOnly:!1,inline:!1,lazy:!1,disabled:!1,loaderDisabled:!1,loadingIcon:null,columns:null,loading:void 0,autoSize:!1,showSpacer:!0,showLoader:!1,loadingTemplate:null,loaderIconTemplate:null,itemTemplate:null,contentTemplate:null,onScroll:null,onScrollIndexChange:null,onLazyLoad:null,children:void 0},css:{styles:jd}});function Il(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,o)}return e}function Un(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?Il(Object(e),!0).forEach(function(o){Pl(n,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):Il(Object(e)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(e,o))})}return n}var _l=f.memo(f.forwardRef(function(n,t){var e=Tt(),o=f.useContext(nt),r=vo.getProps(n,o),a=cr(n)||{},i=r.orientation==="vertical",l=r.orientation==="horizontal",s=r.orientation==="both",c=f.useState(s?{rows:0,cols:0}:0),u=ln(c,2),d=u[0],m=u[1],v=f.useState(s?{rows:0,cols:0}:0),E=ln(v,2),h=E[0],C=E[1],x=f.useState(0),S=ln(x,2),O=S[0],P=S[1],w=f.useState(s?{rows:0,cols:0}:0),T=ln(w,2),_=T[0],U=T[1],R=f.useState(r.numToleratedItems),k=ln(R,2),j=k[0],J=k[1],z=f.useState(r.loading||!1),Z=ln(z,2),ne=Z[0],ve=Z[1],ye=f.useState([]),ce=ln(ye,2),ee=ce[0],D=ce[1],G=vo.setMetaData({props:r,state:{first:d,last:h,page:O,numItemsInViewport:_,numToleratedItems:j,loading:ne,loaderArr:ee}}),ie=G.ptm;In(vo.css.styles,{name:"virtualscroller"});var X=f.useRef(null),K=f.useRef(null),de=f.useRef(null),fe=f.useRef(null),me=f.useRef(s?{top:0,left:0}:0),Y=f.useRef(null),N=f.useRef(null),F=f.useRef({}),se=f.useRef({}),M=f.useRef(null),Oe=f.useRef(null),Ie=f.useRef(null),Te=f.useRef(null),_e=f.useRef(!1),Me=f.useRef(null),St=la({listener:function(I){return Ke()},when:!r.disabled}),lt=ln(St,1),Xe=lt[0],Je=vn({target:"window",type:"orientationchange",listener:function(I){return Ke()},when:!r.disabled}),bt=ln(Je,1),Ct=bt[0],Ve=function(){return X},Ze=function(I){return Math.floor((I+j*4)/(r.step||1))},Ft=function(I){K.current=I||K.current||$.findSingle(X.current,".p-virtualscroller-content")},Qe=function(I){return r.step?O!==Ze(I):!0},et=function(I){me.current=s?{top:0,left:0}:0,X.current&&X.current.scrollTo(I)},ot=function(I){var A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"auto",V=H(),Q=V.numToleratedItems,oe=Se(),re=function(){var tt=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,Mt=arguments.length>1?arguments[1]:void 0;return tt<=Mt?0:tt},ue=function(tt,Mt,dn){return tt*Mt+dn},Pe=function(){var tt=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,Mt=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return et({left:tt,top:Mt,behavior:A})},xe=s?{rows:0,cols:0}:0,Be=!1;s?(xe={rows:re(I[0],Q[0]),cols:re(I[1],Q[1])},Pe(ue(xe.cols,r.itemSize[1],oe.left),ue(xe.rows,r.itemSize[0],oe.top)),Be=d.rows!==xe.rows||d.cols!==xe.cols):(xe=re(I,Q),l?Pe(ue(xe,r.itemSize,oe.left),0):Pe(0,ue(xe,r.itemSize,oe.top)),Be=d!==xe),_e.current=Be,m(xe)},Dt=function(I,A){var V=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"auto";if(A){var Q=we(),oe=Q.first,re=Q.viewport,ue=function(){var Mt=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,dn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return et({left:Mt,top:dn,behavior:V})},Pe=A==="to-start",xe=A==="to-end";if(Pe){if(s)re.first.rows-oe.rows>I[0]?ue(re.first.cols*r.itemSize[1],(re.first.rows-1)*r.itemSize[0]):re.first.cols-oe.cols>I[1]&&ue((re.first.cols-1)*r.itemSize[1],re.first.rows*r.itemSize[0]);else if(re.first-oe>I){var Be=(re.first-1)*r.itemSize;l?ue(Be,0):ue(0,Be)}}else if(xe){if(s)re.last.rows-oe.rows<=I[0]+1?ue(re.first.cols*r.itemSize[1],(re.first.rows+1)*r.itemSize[0]):re.last.cols-oe.cols<=I[1]+1&&ue((re.first.cols+1)*r.itemSize[1],re.first.rows*r.itemSize[0]);else if(re.last-oe<=I+1){var pt=(re.first+1)*r.itemSize;l?ue(pt,0):ue(0,pt)}}}else ot(I,V)},st=function(){return ne?r.loaderDisabled?ee:[]:ct()},ft=function(){return r.columns&&s||l?ne&&r.loaderDisabled?s?ee[0]:ee:r.columns.slice(s?d.cols:d,s?h.cols:h):r.columns},we=function(){var I=function(xe,Be){return Math.floor(xe/(Be||xe))},A=d,V=0;if(X.current){var Q=X.current,oe=Q.scrollTop,re=Q.scrollLeft;if(s)A={rows:I(oe,r.itemSize[0]),cols:I(re,r.itemSize[1])},V={rows:A.rows+_.rows,cols:A.cols+_.cols};else{var ue=l?re:oe;A=I(ue,r.itemSize),V=A+_}}return{first:d,last:h,viewport:{first:A,last:V}}},H=function(){var I=Se(),A=X.current?X.current.offsetWidth-I.left:0,V=X.current?X.current.offsetHeight-I.top:0,Q=function(xe,Be){return Math.ceil(xe/(Be||xe))},oe=function(xe){return Math.ceil(xe/2)},re=s?{rows:Q(V,r.itemSize[0]),cols:Q(A,r.itemSize[1])}:Q(l?A:V,r.itemSize),ue=j||(s?[oe(re.rows),oe(re.cols)]:oe(re));return{numItemsInViewport:re,numToleratedItems:ue}},pe=function(){var I=H(),A=I.numItemsInViewport,V=I.numToleratedItems,Q=function(ue,Pe,xe){var Be=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return Ee(ue+Pe+(ue<xe?2:3)*xe,Be)},oe=s?{rows:Q(d.rows,A.rows,V[0]),cols:Q(d.cols,A.cols,V[1],!0)}:Q(d,A,V);U(A),J(V),C(oe),r.showLoader&&D(s?Array.from({length:A.rows}).map(function(){return Array.from({length:A.cols})}):Array.from({length:A})),r.lazy&&Promise.resolve().then(function(){Me.current={first:r.step?s?{rows:0,cols:d.cols}:0:d,last:Math.min(r.step?r.step:oe,(r.items||[]).length)},r.onLazyLoad&&r.onLazyLoad(Me.current)})},qe=function(I){r.autoSize&&!I&&Promise.resolve().then(function(){if(K.current){K.current.style.minHeight=K.current.style.minWidth="auto",K.current.style.position="relative",X.current.style.contain="none";var A=[$.getWidth(X.current),$.getHeight(X.current)],V=A[0],Q=A[1];(s||l)&&(X.current.style.width=(V<M.current?V:r.scrollWidth||M.current)+"px"),(s||i)&&(X.current.style.height=(Q<Oe.current?Q:r.scrollHeight||Oe.current)+"px"),K.current.style.minHeight=K.current.style.minWidth="",K.current.style.position="",X.current.style.contain=""}})},Ee=function(){var I,A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,V=arguments.length>1?arguments[1]:void 0;return r.items?Math.min(V?((I=r.columns||r.items[0])===null||I===void 0?void 0:I.length)||0:(r.items||[]).length,A):0},Se=function(){if(K.current){var I=getComputedStyle(K.current),A=parseFloat(I.paddingLeft)+Math.max(parseFloat(I.left)||0,0),V=parseFloat(I.paddingRight)+Math.max(parseFloat(I.right)||0,0),Q=parseFloat(I.paddingTop)+Math.max(parseFloat(I.top)||0,0),oe=parseFloat(I.paddingBottom)+Math.max(parseFloat(I.bottom)||0,0);return{left:A,right:V,top:Q,bottom:oe,x:A+V,y:Q+oe}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}},$e=function(){if(X.current){var I=X.current.parentElement,A=r.scrollWidth||"".concat(X.current.offsetWidth||I.offsetWidth,"px"),V=r.scrollHeight||"".concat(X.current.offsetHeight||I.offsetHeight,"px"),Q=function(re,ue){return X.current.style[re]=ue};s||l?(Q("height",V),Q("width",A)):Q("height",V)}},at=function(){var I=r.items;if(I){var A=Se(),V=function(oe,re,ue){var Pe=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return se.current=Un(Un({},se.current),Pl({},"".concat(oe),(re||[]).length*ue+Pe+"px"))};s?(V("height",I,r.itemSize[0],A.y),V("width",r.columns||I[1],r.itemSize[1],A.x)):l?V("width",r.columns||I,r.itemSize,A.x):V("height",I,r.itemSize,A.y)}},De=function(I){if(K.current&&!r.appendOnly){var A=I?I.first:d,V=function(ue,Pe){return ue*Pe},Q=function(){var ue=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,Pe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;fe.current&&(fe.current.style.top="-".concat(Pe,"px")),F.current=Un(Un({},F.current),{transform:"translate3d(".concat(ue,"px, ").concat(Pe,"px, 0)")})};if(s)Q(V(A.cols,r.itemSize[1]),V(A.rows,r.itemSize[0]));else{var oe=V(A,r.itemSize);l?Q(oe,0):Q(0,oe)}}},Ne=function(I){var A=I.target,V=Se(),Q=function(mt,Rt){return mt?mt>Rt?mt-Rt:mt:0},oe=function(mt,Rt){return Math.floor(mt/(Rt||mt))},re=function(mt,Rt,Pn,or,tn,fn){return mt<=tn?tn:fn?Pn-or-tn:Rt+tn-1},ue=function(mt,Rt,Pn,or,tn,fn,Ln){return mt<=fn?0:Math.max(0,Ln?mt<Rt?Pn:mt-fn:mt>Rt?Pn:mt-2*fn)},Pe=function(mt,Rt,Pn,or,tn,fn){var Ln=Rt+or+2*tn;return mt>=tn&&(Ln=Ln+(tn+1)),Ee(Ln,fn)},xe=Q(A.scrollTop,V.top),Be=Q(A.scrollLeft,V.left),pt=s?{rows:0,cols:0}:0,tt=h,Mt=!1,dn=me.current;if(s){var Br=me.current.top<=xe,Wr=me.current.left<=Be;if(!r.appendOnly||r.appendOnly&&(Br||Wr)){var qn={rows:oe(xe,r.itemSize[0]),cols:oe(Be,r.itemSize[1])},Xo={rows:re(qn.rows,d.rows,h.rows,_.rows,j[0],Br),cols:re(qn.cols,d.cols,h.cols,_.cols,j[1],Wr)};pt={rows:ue(qn.rows,Xo.rows,d.rows,h.rows,_.rows,j[0],Br),cols:ue(qn.cols,Xo.cols,d.cols,h.cols,_.cols,j[1],Wr)},tt={rows:Pe(qn.rows,pt.rows,h.rows,_.rows,j[0]),cols:Pe(qn.cols,pt.cols,h.cols,_.cols,j[1],!0)},Mt=pt.rows!==d.rows||tt.rows!==h.rows||pt.cols!==d.cols||tt.cols!==h.cols||_e.current,dn={top:xe,left:Be}}}else{var Vr=l?Be:xe,Ur=me.current<=Vr;if(!r.appendOnly||r.appendOnly&&Ur){var Kr=oe(Vr,r.itemSize),ut=re(Kr,d,h,_,j,Ur);pt=ue(Kr,ut,d,h,_,j,Ur),tt=Pe(Kr,pt,h,_,j),Mt=pt!==d||tt!==h||_e.current,dn=Vr}}return{first:pt,last:tt,isRangeChanged:Mt,scrollPos:dn}},Le=function(I){var A=Ne(I),V=A.first,Q=A.last,oe=A.isRangeChanged,re=A.scrollPos;if(oe){var ue={first:V,last:Q};if(De(ue),m(V),C(Q),me.current=re,r.onScrollIndexChange&&r.onScrollIndexChange(ue),r.lazy&&Qe(V)){var Pe={first:r.step?Math.min(Ze(V)*r.step,(r.items||[]).length-r.step):V,last:Math.min(r.step?(Ze(V)+1)*r.step:Q,(r.items||[]).length)},xe=!Me.current||Me.current.first!==Pe.first||Me.current.last!==Pe.last;xe&&r.onLazyLoad&&r.onLazyLoad(Pe),Me.current=Pe}}},Ue=function(I){if(r.onScroll&&r.onScroll(I),r.delay){if(Y.current&&clearTimeout(Y.current),Qe(d)){if(!ne&&r.showLoader){var A=Ne(I),V=A.isRangeChanged,Q=V||(r.step?Qe(d):!1);Q&&ve(!0)}Y.current=setTimeout(function(){Le(I),ne&&r.showLoader&&(!r.lazy||r.loading===void 0)&&(ve(!1),P(Ze(d)))},r.delay)}}else Le(I)},Ke=function(){N.current&&clearTimeout(N.current),N.current=setTimeout(function(){if(X.current){var I=[$.getWidth(X.current),$.getHeight(X.current)],A=I[0],V=I[1],Q=A!==M.current,oe=V!==Oe.current,re=s?Q||oe:l?Q:i?oe:!1;re&&(J(r.numToleratedItems),M.current=A,Oe.current=V,Ie.current=$.getWidth(K.current),Te.current=$.getHeight(K.current))}},r.resizeDelay)},Ye=function(I){var A=(r.items||[]).length,V=s?d.rows+I:d+I;return{index:V,count:A,first:V===0,last:V===A-1,even:V%2===0,odd:V%2!==0,props:r}},Ge=function(I,A){var V=ee.length||0;return Un({index:I,count:V,first:I===0,last:I===V-1,even:I%2===0,odd:I%2!==0,props:r},A)},ct=function(){var I=r.items;return I&&!ne?s?I.slice(r.appendOnly?0:d.rows,h.rows).map(function(A){return r.columns?A:A.slice(r.appendOnly?0:d.cols,h.cols)}):l&&r.columns?I:I.slice(r.appendOnly?0:d,h):[]},We=function(){X.current&&$.isVisible(X.current)&&(Ft(K.current),yt(),Xe(),Ct(),M.current=$.getWidth(X.current),Oe.current=$.getHeight(X.current),Ie.current=$.getWidth(K.current),Te.current=$.getHeight(K.current))},yt=function(){r.disabled||($e(),pe(),at())};Ht(function(){We()}),He(function(){yt()},[r.itemSize,r.scrollHeight,r.scrollWidth]),He(function(){r.numToleratedItems!==j&&J(r.numToleratedItems)},[r.numToleratedItems]),He(function(){r.numToleratedItems===j&&yt()},[j]),He(function(){var ae=a.items!==void 0&&a.items!==null,I=r.items!==void 0&&r.items!==null,A=ae?a.items.length:0,V=I?r.items.length:0,Q=A!==V;if(s&&!Q){var oe=ae&&a.items.length>0?a.items[0].length:0,re=I&&r.items.length>0?r.items[0].length:0;Q=oe!==re}(!ae||Q)&&yt();var ue=ne;r.lazy&&a.loading!==r.loading&&r.loading!==ne&&(ve(r.loading),ue=r.loading),qe(ue)}),He(function(){me.current=s?{top:0,left:0}:0},[r.orientation]),f.useImperativeHandle(t,function(){return{props:r,getElementRef:Ve,scrollTo:et,scrollToIndex:ot,scrollInView:Dt,getRenderedRange:we}});var wt=function(I){var A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},V=Ge(I,A),Q=L.getJSXElement(r.loadingTemplate,V);return f.createElement(f.Fragment,{key:I},Q)},xt=function(){var I="p-virtualscroller-loading-icon",A=e({className:I},ie("loadingIcon")),V=r.loadingIcon||f.createElement(po,La({},A,{spin:!0})),Q=zt.getJSXIcon(V,Un({},A),{props:r});if(!r.loaderDisabled&&r.showLoader&&ne){var oe=ge("p-virtualscroller-loader",{"p-component-overlay":!r.loadingTemplate}),re=Q;if(r.loadingTemplate)re=ee.map(function(xe,Be){return wt(Be,s&&{numCols:_.cols})});else if(r.loaderIconTemplate){var ue={iconClassName:I,element:re,props:r};re=L.getJSXElement(r.loaderIconTemplate,ue)}var Pe=e({className:oe},ie("loader"));return f.createElement("div",Pe,re)}return null},Nt=function(){if(r.showSpacer){var I=e({ref:de,style:se.current,className:"p-virtualscroller-spacer"},ie("spacer"));return f.createElement("div",I)}return null},en=function(I,A){var V=Ye(A),Q=L.getJSXElement(r.itemTemplate,I,V);return f.createElement(f.Fragment,{key:V.index},Q)},At=function(){var I=ct();return I.map(en)},kt=function(){var I=At(),A=ge("p-virtualscroller-content",{"p-virtualscroller-loading":ne}),V=e({ref:K,style:F.current,className:A},ie("content")),Q=f.createElement("div",V,I);if(r.contentTemplate){var oe={style:F.current,className:A,spacerStyle:se.current,contentRef:function(ue){return K.current=L.getRefElement(ue)},spacerRef:function(ue){return de.current=L.getRefElement(ue)},stickyRef:function(ue){return fe.current=L.getRefElement(ue)},items:ct(),getItemOptions:function(ue){return Ye(ue)},children:I,element:Q,props:r,loading:ne,getLoaderOptions:function(ue,Pe){return Ge(ue,Pe)},loadingTemplate:r.loadingTemplate,itemSize:r.itemSize,rows:st(),columns:ft(),vertical:i,horizontal:l,both:s};return L.getJSXElement(r.contentTemplate,oe)}return Q};if(r.disabled){var Yt=L.getJSXElement(r.contentTemplate,{items:r.items,rows:r.items,columns:r.columns});return f.createElement(f.Fragment,null,r.children,Yt)}var g=ge("p-virtualscroller",{"p-virtualscroller-inline":r.inline,"p-virtualscroller-both p-both-scroll":s,"p-virtualscroller-horizontal p-horizontal-scroll":l},r.className),q=xt(),B=kt(),le=Nt(),be=e({ref:X,className:g,tabIndex:r.tabIndex,style:r.style,onScroll:function(I){return Ue(I)}},vo.getOtherProps(r),ie("root"));return f.createElement("div",be,B,le,q)}));_l.displayName="VirtualScroller";function $a(){return $a=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},$a.apply(this,arguments)}function wr(n){"@babel/helpers - typeof";return wr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wr(n)}function Dd(n,t){if(wr(n)!=="object"||n===null)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var o=e.call(n,t||"default");if(wr(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function Nd(n){var t=Dd(n,"string");return wr(t)==="symbol"?t:String(t)}function Ad(n,t,e){return t=Nd(t),t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function Rd(n){if(Array.isArray(n))return n}function Ld(n,t){var e=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(e!=null){var o,r,a,i,l=[],s=!0,c=!1;try{if(a=(e=e.call(n)).next,t!==0)for(;!(s=(o=a.call(e)).done)&&(l.push(o.value),l.length!==t);s=!0);}catch(u){c=!0,r=u}finally{try{if(!s&&e.return!=null&&(i=e.return(),Object(i)!==i))return}finally{if(c)throw r}}return l}}function kl(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}function $d(n,t){if(n){if(typeof n=="string")return kl(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return kl(n,t)}}function Fd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Md(n,t){return Rd(n)||Ld(n,t)||$d(n,t)||Fd()}var zd=`
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

`,Hd={root:"p-ink"},Kn=ke.extend({defaultProps:{__TYPE:"Ripple",children:void 0},css:{styles:zd,classes:Hd},getProps:function(t){return L.getMergedProps(t,Kn.defaultProps)},getOtherProps:function(t){return L.getDiffProps(t,Kn.defaultProps)}});function jl(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,o)}return e}function Bd(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?jl(Object(e),!0).forEach(function(o){Ad(n,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):jl(Object(e)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(e,o))})}return n}var xr=f.memo(f.forwardRef(function(n,t){var e=f.useState(!1),o=Md(e,2),r=o[0],a=o[1],i=f.useRef(null),l=f.useRef(null),s=Tt(),c=f.useContext(nt),u=Kn.getProps(n,c),d=c&&c.ripple||rt.ripple,m={props:u};In(Kn.css.styles,{name:"ripple",manual:!d});var v=Kn.setMetaData(Bd({},m)),E=v.ptm,h=v.cx,C=function(){return i.current&&i.current.parentElement},x=function(){l.current&&l.current.addEventListener("pointerdown",O)},S=function(){l.current&&l.current.removeEventListener("pointerdown",O)},O=function(R){var k=$.getOffset(l.current),j=R.pageX-k.left+document.body.scrollTop-$.getWidth(i.current)/2,J=R.pageY-k.top+document.body.scrollLeft-$.getHeight(i.current)/2;P(j,J)},P=function(R,k){!i.current||getComputedStyle(i.current,null).display==="none"||($.removeClass(i.current,"p-ink-active"),T(),i.current.style.top=k+"px",i.current.style.left=R+"px",$.addClass(i.current,"p-ink-active"))},w=function(R){$.removeClass(R.currentTarget,"p-ink-active")},T=function(){if(i.current&&!$.getHeight(i.current)&&!$.getWidth(i.current)){var R=Math.max($.getOuterWidth(l.current),$.getOuterHeight(l.current));i.current.style.height=R+"px",i.current.style.width=R+"px"}};if(f.useImperativeHandle(t,function(){return{props:u,getInk:function(){return i.current},getTarget:function(){return l.current}}}),Ht(function(){a(!0)}),He(function(){r&&i.current&&(l.current=C(),T(),x())},[r]),He(function(){i.current&&!l.current&&(l.current=C(),T(),x())}),on(function(){i.current&&(l.current=null,S())}),!d)return null;var _=s({"aria-hidden":!0,className:ge(h("root"))},Kn.getOtherProps(u),E("root"));return f.createElement("span",$a({role:"presentation",ref:i},_,{onAnimationEnd:w}))}));xr.displayName="Ripple";function Fa(){return Fa=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},Fa.apply(this,arguments)}var Ma=f.memo(f.forwardRef(function(n,t){var e=$t.getPTI(n);return f.createElement("svg",Fa({ref:t,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),f.createElement("path",{d:"M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z",fill:"currentColor"}))}));Ma.displayName="CheckIcon";function sn(){return sn=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},sn.apply(this,arguments)}function Yn(n){"@babel/helpers - typeof";return Yn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Yn(n)}function Wd(n,t){if(Yn(n)!=="object"||n===null)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var o=e.call(n,t||"default");if(Yn(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function Vd(n){var t=Wd(n,"string");return Yn(t)==="symbol"?t:String(t)}function go(n,t,e){return t=Vd(t),t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function Ud(n){if(Array.isArray(n))return n}function Kd(n,t){var e=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(e!=null){var o,r,a,i,l=[],s=!0,c=!1;try{if(a=(e=e.call(n)).next,t!==0)for(;!(s=(o=a.call(e)).done)&&(l.push(o.value),l.length!==t);s=!0);}catch(u){c=!0,r=u}finally{try{if(!s&&e.return!=null&&(i=e.return(),Object(i)!==i))return}finally{if(c)throw r}}return l}}function Dl(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}function Yd(n,t){if(n){if(typeof n=="string")return Dl(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Dl(n,t)}}function Gd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Er(n,t){return Ud(n)||Kd(n,t)||Yd(n,t)||Gd()}function Nl(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,o)}return e}function Xd(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?Nl(Object(e),!0).forEach(function(o){go(n,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):Nl(Object(e)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(e,o))})}return n}var Jd={root:function(t){var e=t.props,o=t.focusedState,r=t.overlayVisibleState,a=t.context;return ge("p-dropdown p-component p-inputwrapper",{"p-disabled":e.disabled,"p-invalid":e.invalid,"p-focus":o,"p-variant-filled":e.variant?e.variant==="filled":a&&a.inputStyle==="filled","p-dropdown-clearable":e.showClear&&!e.disabled,"p-inputwrapper-filled":L.isNotEmpty(e.value),"p-inputwrapper-focus":o||r})},input:function(t){var e=t.props,o=t.label;return e.editable?"p-dropdown-label p-inputtext":ge("p-dropdown-label p-inputtext",{"p-placeholder":o===null&&e.placeholder,"p-dropdown-label-empty":o===null&&!e.placeholder})},trigger:"p-dropdown-trigger",emptyMessage:"p-dropdown-empty-message",itemGroup:function(t){var e=t.optionGroupLabel;return ge("p-dropdown-item-group",{"p-dropdown-item-empty":!e||e.length===0})},itemGroupLabel:"p-dropdown-item-group-label",dropdownIcon:"p-dropdown-trigger-icon p-clickable",loadingIcon:"p-dropdown-trigger-icon p-clickable",clearIcon:"p-dropdown-clear-icon p-clickable",filterIcon:"p-dropdown-filter-icon",filterClearIcon:"p-dropdown-filter-clear-icon",filterContainer:function(t){var e=t.clearIcon;return ge("p-dropdown-filter-container",{"p-dropdown-clearable-filter":!!e})},filterInput:function(t){var e=t.props,o=t.context;return ge("p-dropdown-filter p-inputtext p-component",{"p-variant-filled":e.variant?e.variant==="filled":o&&o.inputStyle==="filled"})},list:function(t){var e=t.virtualScrollerOptions;return"p-dropdown-items"},panel:function(t){var e=t.context;return ge("p-dropdown-panel p-component",{"p-input-filled":e&&e.inputStyle==="filled"||rt.inputStyle==="filled","p-ripple-disabled":e&&e.ripple===!1||rt.ripple===!1})},item:function(t){var e=t.selected,o=t.disabled,r=t.label,a=t.index,i=t.focusedOptionIndex,l=t.highlightOnSelect;return ge("p-dropdown-item",{"p-highlight":e&&l,"p-disabled":o,"p-focus":a===i,"p-dropdown-item-empty":!r||r.length===0})},itemLabel:"p-dropdown-item-label",checkIcon:"p-dropdown-check-icon",blankIcon:"p-dropdown-blank-icon",wrapper:"p-dropdown-items-wrapper",header:"p-dropdown-header",footer:"p-dropdown-footer",transition:"p-connected-overlay"},Zd=`
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
`,Qd={wrapper:function(t){var e=t.props;return{maxHeight:e.scrollHeight||"auto"}},panel:function(t){var e=t.props;return Xd({},e.panelStyle)}},ho=ke.extend({defaultProps:{__TYPE:"Dropdown",__parentMetadata:null,appendTo:null,ariaLabel:null,ariaLabelledBy:null,autoFocus:!1,children:void 0,className:null,clearIcon:null,dataKey:null,disabled:!1,dropdownIcon:null,collapseIcon:null,editable:!1,emptyFilterMessage:null,highlightOnSelect:!0,checkmark:!1,emptyMessage:null,filter:!1,filterBy:null,filterClearIcon:null,filterIcon:null,filterInputAutoFocus:!1,filterLocale:void 0,filterMatchMode:"contains",filterPlaceholder:null,filterTemplate:null,focusInputRef:null,id:null,inputId:null,inputRef:null,invalid:!1,variant:null,itemTemplate:null,loading:!1,loadingIcon:null,maxLength:null,name:null,onBlur:null,onChange:null,onContextMenu:null,onFilter:null,onFocus:null,onHide:null,onMouseDown:null,onShow:null,optionDisabled:null,optionGroupChildren:"items",selectOnFocus:!1,focusOnHover:!0,autoOptionFocus:!1,optionGroupLabel:null,optionGroupTemplate:null,optionLabel:null,optionValue:null,options:null,panelClassName:null,panelFooterTemplate:null,panelStyle:null,placeholder:null,required:!1,resetFilterOnHide:!1,scrollHeight:"200px",showClear:!1,showFilterClear:!1,showOnFocus:!1,style:null,tabIndex:null,tooltip:null,tooltipOptions:null,transitionOptions:null,value:null,valueTemplate:null,virtualScrollerOptions:null},css:{classes:Jd,styles:Zd,inlineStyles:Qd}}),Al=f.memo(f.forwardRef(function(n,t){var e=$t.getPTI(n);return f.createElement("svg",sn({ref:t,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),f.createElement("rect",{width:"1",height:"1",fill:"currentColor",fillOpacity:"0"}))}));Al.displayName="BlankIcon";var Rl=f.memo(function(n){var t=Tt(),e=n.ptm,o=n.cx,r=n.selected,a=n.disabled,i=n.option,l=n.label,s=n.index,c=n.focusedOptionIndex,u=n.ariaSetSize,d=n.checkmark,m=n.highlightOnSelect,v=n.onInputKeyDown,E=function(w){return e(w,{context:{selected:r,disabled:a,focused:s===c}})},h=function(w,T){n.onClick&&n.onClick({originalEvent:w,option:i})},C=n.template?L.getJSXElement(n.template,n.option):n.label,x=t({id:"dropdownItem_".concat(s),role:"option",key:n.label,className:ge(i.className,o("item",{selected:r,disabled:a,label:l,index:s,focusedOptionIndex:c,highlightOnSelect:m})),style:n.style,tabIndex:0,onClick:function(w){return h(w)},onKeyDown:function(w){return v(w)},onMouseMove:function(w){return n==null?void 0:n.onMouseMove(w,s)},"aria-setsize":u,"aria-posinset":s+1,"aria-label":l,"aria-selected":r,"data-p-highlight":r,"data-p-focused":c===s,"data-p-disabled":a},E("item")),S=t({className:o("itemLabel")},E("itemLabel")),O=function(){if(r){var w=t({className:o("checkIcon")},E("checkIcon"));return f.createElement(Ma,w)}var T=t({className:o("blankIcon")},E("blankIcon"));return f.createElement(Al,T)};return f.createElement("li",x,d&&O(),f.createElement("span",S,C),f.createElement(xr,null))});Rl.displayName="DropdownItem";function Ll(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,o)}return e}function Zt(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?Ll(Object(e),!0).forEach(function(o){go(n,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):Ll(Object(e)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(e,o))})}return n}var $l=f.memo(f.forwardRef(function(n,t){var e=Tt(),o=n.ptm,r=n.cx,a=n.sx,i=f.useContext(nt),l=f.useRef(null),s=!(n.visibleOptions&&n.visibleOptions.length)&&n.hasFilter,c=n.visibleOptions?n.visibleOptions.length:0,u={filter:function(k){return E(k)},reset:function(){return n.resetFilter()}},d=function(k,j){return o(k,Zt({hostName:n.hostName},j))},m=function(){n.onEnter(function(){if(n.virtualScrollerRef.current){var k=n.getSelectedOptionIndex();k!==-1&&setTimeout(function(){return n.virtualScrollerRef.current.scrollToIndex(k)},0)}})},v=function(){n.onEntered(function(){n.filter&&n.filterInputAutoFocus&&$.focus(l.current,!1)})},E=function(k){n.onFilterInputChange&&n.onFilterInputChange(k)},h=function(){if(n.panelFooterTemplate){var k=L.getJSXElement(n.panelFooterTemplate,n,n.onOverlayHide),j=e({className:r("footer")},d("footer"));return f.createElement("div",j,k)}return null},C=function(k,j){if(n.focusOnHover){var J;n==null||(J=n.changeFocusedOptionIndex)===null||J===void 0||J.call(n,k,j)}},x=function(k,j){var J=L.getJSXElement(k,n)||Fn(j?"emptyFilterMessage":"emptyMessage"),z=e({className:r("emptyMessage")},d("emptyMessage"));return f.createElement("li",z,J)},S=function(k,j){var J=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},z={height:J.props?J.props.itemSize:void 0};if(z=Zt(Zt({},z),k.style),k.group&&k.optionGroup&&n.optionGroupLabel){var Z=n.optionGroupLabel,ne=n.optionGroupTemplate?L.getJSXElement(n.optionGroupTemplate,k,j):n.getOptionGroupLabel(k),ve=j+"_"+n.getOptionGroupRenderKey(k),ye=e({className:r("itemGroup",{optionGroupLabel:Z}),style:z,"data-p-highlight":n.selected},d("itemGroup")),ce=e({className:r("itemGroupLabel")},d("itemGroupLabel"));return f.createElement("li",sn({key:ve},ye),f.createElement("span",ce,ne))}var ee=n.getOptionRenderKey(k)+"_"+j,D=n.getOptionLabel(k),G=n.isOptionDisabled(k);return f.createElement(Rl,{key:ee,label:D,index:j,focusedOptionIndex:n.focusedOptionIndex,option:k,ariaSetSize:c,onInputKeyDown:n.onInputKeyDown,style:z,template:n.itemTemplate,selected:n.isSelected(k),highlightOnSelect:n.highlightOnSelect,disabled:G,onClick:n.onOptionClick,onMouseMove:C,ptm:o,cx:r,checkmark:n.checkmark})},O=function(){return L.isNotEmpty(n.visibleOptions)?n.visibleOptions.map(S):n.hasFilter?x(n.emptyFilterMessage,!0):x(n.emptyMessage)},P=function(){if(n.showFilterClear&&n.filterValue){var k=Fn("clear"),j=e({className:r("filterClearIcon"),"aria-label":k,onClick:function(){return n.onFilterClearIconClick(function(){return $.focus(l.current)})}},d("filterClearIcon")),J=n.filterClearIcon||f.createElement(mo,j),z=zt.getJSXIcon(J,Zt({},j),{props:n});return z}return null},w=function(){if(n.filter){var k=P(),j=e({className:r("filterIcon")},d("filterIcon")),J=n.filterIcon||f.createElement(ql,j),z=zt.getJSXIcon(J,Zt({},j),{props:n}),Z=e({className:r("filterContainer",{clearIcon:k})},d("filterContainer")),ne=e({ref:l,type:"text",autoComplete:"off",className:r("filterInput",{context:i}),placeholder:n.filterPlaceholder,onKeyDown:n.onFilterInputKeyDown,onChange:function(D){return E(D)},value:n.filterValue},d("filterInput")),ve=f.createElement("div",Z,f.createElement("input",ne),k,z);if(n.filterTemplate){var ye={className:ge("p-dropdown-filter-container",{"p-dropdown-clearable-filter":!!k}),element:ve,filterOptions:u,filterInputKeyDown:n.onFilterInputKeyDown,filterInputChange:E,filterIconClassName:"p-dropdown-filter-icon",clearIcon:k,props:n};ve=L.getJSXElement(n.filterTemplate,ye)}var ce=e({className:r("header")},d("header"));return f.createElement("div",ce,ve)}return null},T=function(){if(n.virtualScrollerOptions){var k=Zt(Zt({},n.virtualScrollerOptions),{style:Zt(Zt({},n.virtualScrollerOptions.style),{height:n.scrollHeight}),className:ge("p-dropdown-items-wrapper",n.virtualScrollerOptions.className),items:n.visibleOptions,autoSize:!0,onLazyLoad:function(ne){return n.virtualScrollerOptions.onLazyLoad(Zt(Zt({},ne),{filter:n.filterValue}))},itemTemplate:function(ne,ve){return ne&&S(ne,ve.index,ve)},contentTemplate:function(ne){var ve=n.hasFilter?n.emptyFilterMessage:n.emptyMessage,ye=s?x(ve):ne.children,ce=e({ref:ne.contentRef,style:ne.style,className:ge(ne.className,r("list",{virtualScrollerProps:n.virtualScrollerOptions})),role:"listbox"},d("list"));return f.createElement("ul",ce,ye)}});return f.createElement(_l,sn({ref:n.virtualScrollerRef},k,{pt:o("virtualScroller")}))}var j=O(),J=e({className:r("wrapper"),style:a("wrapper")},d("wrapper")),z=e({className:r("list"),role:"listbox"},d("list"));return f.createElement("div",J,f.createElement("ul",z,j))},_=function(){var k=w(),j=T(),J=h(),z=e({className:ge(n.panelClassName,r("panel",{context:i})),style:a("panel"),onClick:n.onClick},d("panel")),Z=e({classNames:r("transition"),in:n.in,timeout:{enter:120,exit:100},options:n.transitionOptions,unmountOnExit:!0,onEnter:m,onEntered:v,onExit:n.onExit,onExited:n.onExited},d("transition"));return f.createElement(oo,sn({nodeRef:t},Z),f.createElement("div",sn({ref:t},z),n.firstFocusableElement,k,j,J,n.lastFocusableElement))},U=_();return f.createElement(vr,{element:U,appendTo:n.appendTo})}));$l.displayName="DropdownPanel";function ef(n,t){var e=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(!e){if(Array.isArray(n)||(e=tf(n))||t){e&&(n=e);var o=0,r=function(){};return{s:r,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(c){throw c},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,i=!1,l;return{s:function(){e=e.call(n)},n:function(){var c=e.next();return a=c.done,c},e:function(c){i=!0,l=c},f:function(){try{!a&&e.return!=null&&e.return()}finally{if(i)throw l}}}}function tf(n,t){if(n){if(typeof n=="string")return Fl(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Fl(n,t)}}function Fl(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}function Ml(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,o)}return e}function cn(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?Ml(Object(e),!0).forEach(function(o){go(n,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):Ml(Object(e)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(e,o))})}return n}var za=f.memo(f.forwardRef(function(n,t){var e=Tt(),o=f.useContext(nt),r=ho.getProps(n,o),a=f.useState(""),i=Er(a,2),l=i[0],s=i[1],c=f.useState(!1),u=Er(c,2),d=u[0],m=u[1],v=f.useState(-1),E=Er(v,2),h=E[0],C=E[1],x=f.useState(!1),S=Er(x,2),O=S[0],P=S[1],w=f.useRef(!1),T=f.useRef(null),_=f.useRef(null),U=f.useRef(null),R=f.useRef(null),k=f.useRef(r.inputRef),j=f.useRef(r.focusInputRef),J=f.useRef(null),z=f.useRef(null),Z=f.useRef(null),ne=r.virtualScrollerOptions&&r.virtualScrollerOptions.lazy,ve=L.isNotEmpty(l),ye=r.appendTo||o&&o.appendTo||rt.appendTo,ce=ho.setMetaData(cn(cn({props:r},r.__parentMetadata),{},{state:{filter:l,focused:d,overlayVisible:O}})),ee=ce.ptm,D=ce.cx,G=ce.sx,ie=ce.isUnstyled;Bt(ho.css.styles,ie,{name:"dropdown"});var X=Bc({target:T,overlay:_,listener:function(b,W){var he=W.type,ze=W.valid;ze&&(he==="outside"?!se(b)&&q():q())},when:O}),K=Er(X,2),de=K[0],fe=K[1],me=function(b){return(b||[]).reduce(function(W,he,ze){W.push({optionGroup:he,group:!0,index:ze,code:he.code,label:he.label});var it=tt(he);return it&&it.forEach(function(ar){return W.push(ar)}),W},[])},Y=function(){var b=r.optionGroupLabel?me(r.options):r.options;if(ve&&!ne){var W=l.trim().toLocaleLowerCase(r.filterLocale),he=r.filterBy?r.filterBy.split(","):[r.optionLabel||"label"];if(r.optionGroupLabel){var ze=[],it=ef(r.options),ar;try{for(it.s();!(ar=it.n()).done;){var rc=ar.value,bi=Ni.filter(tt(rc),he,W,r.filterMatchMode,r.filterLocale);bi&&bi.length&&ze.push(cn(cn({},rc),go({},"".concat(r.optionGroupChildren),bi)))}}catch(Mv){it.e(Mv)}finally{it.f()}return me(ze)}return Ni.filter(b,he,W,r.filterMatchMode,r.filterLocale)}return b},N=function(b){var W=b.relatedTarget===j.current?$.getFirstFocusableElement(_.current,':not([data-p-hidden-focusable="true"])'):j.current;$.focus(W)},F=function(b){var W=b.relatedTarget===j.current?$.getLastFocusableElement(_.current,':not([data-p-hidden-focusable="true"])'):j.current;$.focus(W)},se=function(b){return $.isAttributeEquals(b.target,"data-pc-section","clearicon")||$.isAttributeEquals(b.target.parentElement||b.target,"data-pc-section","filterclearicon")},M=function(b){r.disabled||r.loading||(r.onClick&&r.onClick(b),!b.defaultPrevented&&(se(b)||b.target.tagName==="INPUT"||((!_.current||!(_.current&&_.current.contains(b.target)))&&($.focus(j.current),O?q():g()),w.current=!0)))},Oe=function(b){r.showOnFocus&&!O&&g(),m(!0),r.onFocus&&r.onFocus(b)},Ie=function(b){m(!1),r.onBlur&&setTimeout(function(){var W=k.current?k.current.value:void 0;r.onBlur({originalEvent:b.originalEvent,value:W,stopPropagation:function(){b.originalEvent.stopPropagation()},preventDefault:function(){b.originalEvent.preventDefault()},target:{name:r.name,id:r.id,value:W}})},200)},Te=function(b,W){var he=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,ze=re(W);Nt({originalEvent:b,option:ze}),he&&q()},_e=function(b){Nn.emit("overlay-click",{originalEvent:b,target:T.current})},Me=function(b){if(r.disabled){b.preventDefault();return}var W=b.metaKey||b.ctrlKey,he=$.isAndroid()?b.key:b.code;switch(he){case"ArrowDown":H(b);break;case"ArrowUp":pe(b);break;case"ArrowLeft":case"ArrowRight":qe(b,r.editable);break;case"Home":Ee(b);break;case"End":Se(b);break;case"PageDown":at(b);break;case"PageUp":$e(b);break;case"Space":De(b,r.editable);break;case"NumpadEnter":case"Enter":Ne(b);break;case"Escape":Le(b);break;case"Tab":Ue(b);break;case"Backspace":Ke(b,r.editable);break;case"ShiftLeft":case"ShiftRight":break;default:!W&&L.isPrintableCharacter(b.key)&&(!O&&!r.editable&&g(),!r.editable&&Ft(b,b.key));break}w.current=!1},St=function(b){switch(b.code){case"ArrowDown":H(b);break;case"ArrowUp":pe(b);break;case"ArrowLeft":case"ArrowRight":qe(b,!0);break;case"Escape":case"Enter":case"NumpadEnter":Ne(b),b.preventDefault();break}},lt=function(){return $.getFocusableElements(_.current,':not([data-p-hidden-focusable="true"])').length>0},Xe=function(b){var W;return Je(b)&&((W=oe(b))===null||W===void 0?void 0:W.toLocaleLowerCase(r.filterLocale).startsWith(Z.current.toLocaleLowerCase(r.filterLocale)))},Je=function(b){return L.isNotEmpty(b)&&!(xe(b)||Pe(b))},bt=function(){return L.isNotEmpty(r.value)},Ct=function(b){return Je(b)&&Yt(b)},Ve=function(){return bt?ut.findIndex(function(b){return Ct(b)}):-1},Ze=function(){var b=Ve();return b<0?et():b},Ft=function(b,W){Z.current=(Z.current||"")+W;var he=-1,ze=!1;return L.isNotEmpty(Z.current)&&(h!==-1?(he=ut.slice(h).findIndex(function(it){return Xe(it)}),he=he===-1?ut.slice(0,h).findIndex(function(it){return Xe(it)}):he+h):he=ut.findIndex(function(it){return Xe(it)}),he!==-1&&(ze=!0),he===-1&&h===-1&&(he=Ze()),he!==-1&&ft(b,he)),z.current&&clearTimeout(z.current),z.current=setTimeout(function(){Z.current="",z.current=null},500),ze},Qe=function(){var b=Ve();return b<0?ot():b},et=function(){return ut.findIndex(function(b){return Je(b)})},ot=function(){return L.findLastIndex(ut,function(b){return Je(b)})},Dt=function(b){var W=b<ut.length-1?ut.slice(b+1).findIndex(function(he){return Je(he)}):-1;return W>-1?W+b+1:b},st=function(b){var W=b>0?L.findLastIndex(ut.slice(0,b),function(he){return Je(he)}):-1;return W>-1?W:b},ft=function(b,W){h!==W&&(C(W),we(W),r.selectOnFocus&&Te(b,ut[W],!1))},we=function(b){var W=$.findSingle(_.current,'li[id="dropdownItem_'.concat(b,'"]'));W&&W.focus()},H=function(b){if(!O)g(),r.editable&&ft(b,Ve());else{var W=h!==-1?Dt(h):w.current?et():Ze();ft(b,W)}b.preventDefault()},pe=function(b){var W=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(b.altKey&&!W)h!==-1&&Te(b,ut[h]),state.overlayVisible&&q(),b.preventDefault();else{var he=h!==-1?st(h):w.current?ot():Qe();ft(b,he),!O&&g(),b.preventDefault()}},qe=function(b){var W=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;W&&C(-1)},Ee=function(b){var W=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;W?(b.currentTarget.setSelectionRange(0,0),C(-1)):(ft(b,et()),!O&&g()),b.preventDefault()},Se=function(b){var W=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(W){var he=b.currentTarget,ze=he.value.length;he.setSelectionRange(ze,ze),C(-1)}else ft(b,ot()),!O&&g();b.preventDefault()},$e=function(b){b.preventDefault()},at=function(b){b.preventDefault()},De=function(b){var W=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;!W&&Ne(b)},Ne=function(b){O?(h!==-1&&Te(b,ut[h]),q()):(C(-1),H(b)),b.preventDefault()},Le=function(b){O&&q(),b.preventDefault()},Ue=function(b){var W=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;W||(O&&!lt()?($.focus(U.current),b.preventDefault()):(h!==-1&&Te(b,ut[h]),O&&q()))},Ke=function(b){var W=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;b&&W&&!O&&g()},Ye=function(b){!O&&g();var W=null;b.target.value&&ut&&(W=ut.findIndex(function(he){return oe(he).toLocaleLowerCase().startsWith(b.target.value.toLocaleLowerCase())})),C(W),r.onChange&&r.onChange({originalEvent:b.originalEvent,value:b.target.value,stopPropagation:function(){b.originalEvent.stopPropagation()},preventDefault:function(){b.originalEvent.preventDefault()},target:{name:r.name,id:r.id,value:b.target.value}})},Ge=function(b){m(!0),q(),r.onFocus&&r.onFocus(b)},ct=function(b){var W=b.option;W.disabled||(Nt(b),$.focus(j.current)),q()},We=function(b){var W=b.target.value;s(W),r.onFilter&&r.onFilter({originalEvent:b,filter:W})},yt=function(b){wt(b)},wt=function(b){s(""),r.onFilter&&r.onFilter({filter:""}),b&&b()},xt=function(b){r.onChange&&r.onChange({originalEvent:b,value:void 0,stopPropagation:function(){b==null||b.stopPropagation()},preventDefault:function(){b==null||b.preventDefault()},target:{name:r.name,id:r.id,value:void 0}}),r.filter&&wt(),Q()},Nt=function(b){if(It!==b.option){Q(b.option),C(-1);var W=re(b.option),he=kt(b.option,ut);r.onChange&&r.onChange({originalEvent:b.originalEvent,value:W,stopPropagation:function(){b.originalEvent.stopPropagation()},preventDefault:function(){b.originalEvent.preventDefault()},target:{name:r.name,id:r.id,value:W}}),ft(b.originalEvent,he)}},en=function(b){if(b=b||ut,r.value!=null&&b)if(r.optionGroupLabel)for(var W=0;W<b.length;W++){var he=kt(r.value,tt(b[W]));if(he!==-1)return{group:W,option:he}}else return kt(r.value,b);return-1},At=function(){return r.optionValue?null:r.dataKey},kt=function(b,W){var he=At();return W.findIndex(function(ze){return L.equals(b,re(ze),he)})},Yt=function(b){return L.equals(r.value,re(b),At())},g=function(){C(h!==-1?h:r.autoOptionFocus?Ze():r.editable?-1:Ve()),P(!0)},q=function(){P(!1),w.current=!1},B=function(){r.editable&&!O&&w.current===!1&&$.focus(k.current)},le=function(b){Xt.set("overlay",_.current,o&&o.autoZIndex||rt.autoZIndex,o&&o.zIndex.overlay||rt.zIndex.overlay),$.addStyles(_.current,{position:"absolute",top:"0",left:"0"}),A(),b&&b()},be=function(b){b&&b(),de(),r.onShow&&r.onShow()},ae=function(){fe()},I=function(){r.filter&&r.resetFilterOnHide&&wt(),Xt.clear(_.current),r.onHide&&r.onHide()},A=function(){$.alignOverlay(_.current,k.current.parentElement,r.appendTo||o&&o.appendTo||rt.appendTo)},V=function(){var b=$.findSingle(_.current,'li[data-p-focused="true"]');if(b&&b.scrollIntoView)b.scrollIntoView({block:"nearest",inline:"nearest"});else{var W=$.findSingle(_.current,'li[data-p-highlight="true"]');W&&W.scrollIntoView&&W.scrollIntoView({block:"nearest",inline:"nearest"})}},Q=function(b){k.current&&(k.current.value=b?oe(b):r.value||"",j.current&&(j.current.value=k.current.value))},oe=function(b){if(L.isScalar(b))return"".concat(b);var W=r.optionLabel?L.resolveFieldData(b,r.optionLabel):b.label;return"".concat(W)},re=function(b){if(r.useOptionAsValue)return b;var W=r.optionValue?L.resolveFieldData(b,r.optionValue):b?b.value:L.resolveFieldData(b,"value");return r.optionValue||L.isNotEmpty(W)?W:b},ue=function(b){return r.dataKey?L.resolveFieldData(b,r.dataKey):oe(b)},Pe=function(b){return r.optionGroupLabel&&b.optionGroup&&b.group},xe=function(b){return r.optionDisabled?L.isFunction(r.optionDisabled)?r.optionDisabled(b):L.resolveFieldData(b,r.optionDisabled):b&&b.disabled!==void 0?b.disabled:!1},Be=function(b){return L.resolveFieldData(b,r.optionGroupLabel)},pt=function(b){return L.resolveFieldData(b,r.optionGroupLabel)},tt=function(b){return L.resolveFieldData(b,r.optionGroupChildren)},Mt=function(){if(r.editable&&k.current){var b=It?oe(It):null,W=b||r.value||"";k.current.value=W,j.current&&(j.current.value=W)}},dn=function(){var b=en(r.options);return b!==-1?r.optionGroupLabel?tt(r.options[b.group])[b.option]:r.options[b]:null};f.useImperativeHandle(t,function(){return{props:r,show:g,hide:q,clear:xt,focus:function(){return $.focus(j.current)},getElement:function(){return T.current},getOverlay:function(){return _.current},getInput:function(){return k.current},getFocusInput:function(){return j.current},getVirtualScroller:function(){return J.current}}}),f.useEffect(function(){L.combinedRefs(k,r.inputRef),L.combinedRefs(j,r.focusInputRef)},[k,r.inputRef,j,r.focusInputRef]),Ht(function(){r.autoFocus&&$.focus(j.current,r.autoFocus),A()}),He(function(){O&&(r.value||h>=0)&&V()},[O,r.value,h]),He(function(){O&&l&&r.filter&&A()},[O,l,r.filter]),He(function(){J.current&&J.current.scrollInView(0)},[l]),He(function(){l&&(!r.options||r.options.length===0)&&s(""),Mt(),k.current&&(k.current.selectedIndex=1)}),on(function(){Xt.clear(_.current)});var Br=function(){var b={value:"",label:r.placeholder};if(It){var W=re(It);b={value:Yn(W)==="object"?r.options.findIndex(function(ar){return ar===W}):W,label:oe(It)}}var he=e({className:"p-hidden-accessible p-dropdown-hidden-select"},ee("hiddenSelectedMessage")),ze=e({ref:k,required:r.required,defaultValue:b.value,name:r.name,tabIndex:-1,"aria-hidden":"true"},ee("select")),it=e({value:b.value},ee("option"));return f.createElement("div",he,f.createElement("select",ze,f.createElement("option",it,b.label)))},Wr=function(){var b=L.isNotEmpty(It)?oe(It):null;r.editable&&(b=b||r.value||"");var W=e({className:"p-hidden-accessible"},ee("hiddenSelectedMessage")),he=e(cn({ref:j,id:r.inputId,defaultValue:b,type:"text",readOnly:!0,"aria-haspopup":"listbox",onFocus:Oe,onBlur:Ie,onKeyDown:Me,disabled:r.disabled,tabIndex:r.disabled?-1:r.tabIndex||0},Pn),ee("input"));return f.createElement("div",W,f.createElement("input",he))},qn=function(){var b=L.isNotEmpty(It)?oe(It):null;if(r.editable){var W=b||r.value||"",he=e(cn({ref:k,type:"text",defaultValue:W,className:D("input",{label:b}),disabled:r.disabled,placeholder:r.placeholder,maxLength:r.maxLength,onInput:Ye,onFocus:Ge,onKeyDown:Me,onBlur:Ie,tabIndex:r.disabled?-1:r.tabIndex||0,"aria-haspopup":"listbox"},Pn),ee("input"));return f.createElement("input",he)}var ze=r.valueTemplate?L.getJSXElement(r.valueTemplate,It,r):b||r.placeholder||r.emptyMessage||f.createElement(f.Fragment,null," "),it=e({ref:k,className:D("input",{label:b}),tabIndex:"-1"},ee("input"));return f.createElement("span",it,ze)},Xo=function(b){(b.key==="Enter"||b.code==="Space")&&(xt(b),b.preventDefault())},Vr=function(){if(r.value!=null&&r.showClear&&!r.disabled&&!L.isEmpty(r.options)){var b=e({className:D("clearIcon"),onPointerUp:xt,tabIndex:r.tabIndex||"0",onKeyDown:Xo,"aria-label":Fn("clear")},ee("clearIcon")),W=r.clearIcon||f.createElement(mo,b);return zt.getJSXIcon(W,cn({},b),{props:r})}return null},Ur=function(){var b=e({className:D("loadingIcon"),"data-pr-overlay-visible":O},ee("loadingIcon")),W=r.loadingIcon||f.createElement(po,{spin:!0}),he=zt.getJSXIcon(W,cn({},b),{props:r}),ze=r.placeholder||r.ariaLabel,it=e({className:D("trigger"),role:"button","aria-haspopup":"listbox","aria-expanded":O,"aria-label":ze},ee("trigger"));return f.createElement("div",it,he)},Kr=function(){var b=e({className:D("dropdownIcon"),"data-pr-overlay-visible":O},ee("dropdownIcon")),W=O?r.collapseIcon||f.createElement(Ol,b):r.dropdownIcon||f.createElement(Oa,b),he=zt.getJSXIcon(W,cn({},b),{props:r}),ze=r.placeholder||r.ariaLabel,it=e({className:D("trigger"),role:"button","aria-haspopup":"listbox","aria-expanded":O,"aria-label":ze},ee("trigger"));return f.createElement("div",it,he)},ut=Y(),It=dn(),mt=L.isNotEmpty(r.tooltip),Rt=ho.getOtherProps(r),Pn=L.reduceKeys(Rt,$.ARIA_PROPS),or=Br(),tn=Wr(),fn=qn(),Ln=r.loading?Ur():Kr(),Rv=Vr(),Lv=e({id:r.id,ref:T,className:ge(r.className,D("root",{context:o,focusedState:d,overlayVisibleState:O})),style:r.style,onClick:function(b){return M(b)},onMouseDown:r.onMouseDown,onContextMenu:r.onContextMenu,onFocus:B,"data-p-disabled":r.disabled,"data-p-focus":d,"aria-activedescendant":d?"dropdownItem_".concat(h):void 0},Rt,ee("root")),$v=e({ref:U,role:"presentation","aria-hidden":"true",className:"p-hidden-accessible p-hidden-focusable",tabIndex:"0",onFocus:N,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0},ee("hiddenFirstFocusableEl")),Fv=e({ref:R,role:"presentation","aria-hidden":"true",className:"p-hidden-accessible p-hidden-focusable",tabIndex:"0",onFocus:F,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0},ee("hiddenLastFocusableEl"));return f.createElement(f.Fragment,null,f.createElement("div",Lv,tn,or,fn,Rv,Ln,f.createElement($l,sn({hostName:"Dropdown",ref:_,visibleOptions:ut,virtualScrollerRef:J},r,{appendTo:ye,cx:D,filterValue:l,focusedOptionIndex:h,getOptionGroupChildren:tt,getOptionGroupLabel:pt,getOptionGroupRenderKey:Be,getOptionLabel:oe,getOptionRenderKey:ue,getSelectedOptionIndex:en,hasFilter:ve,in:O,isOptionDisabled:xe,isSelected:Yt,onClick:_e,onEnter:le,onEntered:be,onExit:ae,onExited:I,onFilterClearIconClick:yt,onFilterInputChange:We,onFilterInputKeyDown:St,onOptionClick:ct,onInputKeyDown:Me,ptm:ee,resetFilter:wt,changeFocusedOptionIndex:ft,firstFocusableElement:f.createElement("span",$v),lastFocusableElement:f.createElement("span",Fv),sx:G}))),mt&&f.createElement(Vn,sn({target:T,content:r.tooltip,pt:ee("tooltip")},r.tooltipOptions)))}));za.displayName="Dropdown";const nf=({item:n,onChange:t,config:e})=>{const[o,r]=y.useState({...hn,...n}),[a,i]=y.useState(o.options);y.useEffect(()=>{r({...hn,...n})},[n]),y.useEffect(()=>{if(i(o.options),o.source!="local"){const c=e.external_select_options.find(u=>u.key==o.source);c&&(c.options&&i(c.options),c.options_func&&c.options_func().then(u=>{i(u)}))}},[o.source,o.options]);const l=c=>{const u={...hn,...n,value:c.target.value};t(u)},s=Math.random().toString(36).substring(2,15);return p.jsx(p.Fragment,{children:p.jsx("article",{children:p.jsxs("div",{className:"flex flex-column gap-2",children:[p.jsx("label",{htmlFor:s,children:o.label}),p.jsx(za,{id:s,value:o.value||"",onChange:l,options:a,showClear:!0,placeholder:o.placeholder||"",className:"w-full",children:" "})]})})})},rf=n=>({});var zl;function Ha(){return Ha=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)({}).hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},Ha.apply(null,arguments)}var of=function(t){return f.createElement("svg",Ha({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},t),zl||(zl=f.createElement("path",{d:"M384 432c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16zm64-16c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64zm-224-64c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4h208c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7"})))};function Wt(n){return JSON.parse(JSON.stringify(n))}function af(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return y.useMemo(()=>o=>{t.forEach(r=>r(o))},t)}const bo=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Gn(n){const t=Object.prototype.toString.call(n);return t==="[object Window]"||t==="[object global]"}function Ba(n){return"nodeType"in n}function _t(n){var t,e;return n?Gn(n)?n:Ba(n)&&(t=(e=n.ownerDocument)==null?void 0:e.defaultView)!=null?t:window:window}function Wa(n){const{Document:t}=_t(n);return n instanceof t}function Sr(n){return Gn(n)?!1:n instanceof _t(n).HTMLElement}function Hl(n){return n instanceof _t(n).SVGElement}function Xn(n){return n?Gn(n)?n.document:Ba(n)?Wa(n)?n:Sr(n)||Hl(n)?n.ownerDocument:document:document:document}const Vt=bo?y.useLayoutEffect:y.useEffect;function yo(n){const t=y.useRef(n);return Vt(()=>{t.current=n}),y.useCallback(function(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return t.current==null?void 0:t.current(...o)},[])}function lf(){const n=y.useRef(null),t=y.useCallback((o,r)=>{n.current=setInterval(o,r)},[]),e=y.useCallback(()=>{n.current!==null&&(clearInterval(n.current),n.current=null)},[]);return[t,e]}function Cr(n,t){t===void 0&&(t=[n]);const e=y.useRef(n);return Vt(()=>{e.current!==n&&(e.current=n)},t),e}function Or(n,t){const e=y.useRef();return y.useMemo(()=>{const o=n(e.current);return e.current=o,o},[...t])}function wo(n){const t=yo(n),e=y.useRef(null),o=y.useCallback(r=>{r!==e.current&&(t==null||t(r,e.current)),e.current=r},[]);return[e,o]}function xo(n){const t=y.useRef();return y.useEffect(()=>{t.current=n},[n]),t.current}let Va={};function qr(n,t){return y.useMemo(()=>{if(t)return t;const e=Va[n]==null?0:Va[n]+1;return Va[n]=e,n+"-"+e},[n,t])}function Bl(n){return function(t){for(var e=arguments.length,o=new Array(e>1?e-1:0),r=1;r<e;r++)o[r-1]=arguments[r];return o.reduce((a,i)=>{const l=Object.entries(i);for(const[s,c]of l){const u=a[s];u!=null&&(a[s]=u+n*c)}return a},{...t})}}const Jn=Bl(1),Pr=Bl(-1);function sf(n){return"clientX"in n&&"clientY"in n}function Eo(n){if(!n)return!1;const{KeyboardEvent:t}=_t(n.target);return t&&n instanceof t}function cf(n){if(!n)return!1;const{TouchEvent:t}=_t(n.target);return t&&n instanceof t}function So(n){if(cf(n)){if(n.touches&&n.touches.length){const{clientX:t,clientY:e}=n.touches[0];return{x:t,y:e}}else if(n.changedTouches&&n.changedTouches.length){const{clientX:t,clientY:e}=n.changedTouches[0];return{x:t,y:e}}}return sf(n)?{x:n.clientX,y:n.clientY}:null}const Ut=Object.freeze({Translate:{toString(n){if(!n)return;const{x:t,y:e}=n;return"translate3d("+(t?Math.round(t):0)+"px, "+(e?Math.round(e):0)+"px, 0)"}},Scale:{toString(n){if(!n)return;const{scaleX:t,scaleY:e}=n;return"scaleX("+t+") scaleY("+e+")"}},Transform:{toString(n){if(n)return[Ut.Translate.toString(n),Ut.Scale.toString(n)].join(" ")}},Transition:{toString(n){let{property:t,duration:e,easing:o}=n;return t+" "+e+"ms "+o}}}),Wl="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function uf(n){return n.matches(Wl)?n:n.querySelector(Wl)}const df={display:"none"};function ff(n){let{id:t,value:e}=n;return y.createElement("div",{id:t,style:df},e)}function pf(n){let{id:t,announcement:e,ariaLiveType:o="assertive"}=n;const r={position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return y.createElement("div",{id:t,style:r,role:"status","aria-live":o,"aria-atomic":!0},e)}function mf(){const[n,t]=y.useState("");return{announce:y.useCallback(o=>{o!=null&&t(o)},[]),announcement:n}}const Vl=y.createContext(null);function vf(n){const t=y.useContext(Vl);y.useEffect(()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(n)},[n,t])}function gf(){const[n]=y.useState(()=>new Set),t=y.useCallback(o=>(n.add(o),()=>n.delete(o)),[n]);return[y.useCallback(o=>{let{type:r,event:a}=o;n.forEach(i=>{var l;return(l=i[r])==null?void 0:l.call(i,a)})},[n]),t]}const hf={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},bf={onDragStart(n){let{active:t}=n;return"Picked up draggable item "+t.id+"."},onDragOver(n){let{active:t,over:e}=n;return e?"Draggable item "+t.id+" was moved over droppable area "+e.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(n){let{active:t,over:e}=n;return e?"Draggable item "+t.id+" was dropped over droppable area "+e.id:"Draggable item "+t.id+" was dropped."},onDragCancel(n){let{active:t}=n;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function yf(n){let{announcements:t=bf,container:e,hiddenTextDescribedById:o,screenReaderInstructions:r=hf}=n;const{announce:a,announcement:i}=mf(),l=qr("DndLiveRegion"),[s,c]=y.useState(!1);if(y.useEffect(()=>{c(!0)},[]),vf(y.useMemo(()=>({onDragStart(d){let{active:m}=d;a(t.onDragStart({active:m}))},onDragMove(d){let{active:m,over:v}=d;t.onDragMove&&a(t.onDragMove({active:m,over:v}))},onDragOver(d){let{active:m,over:v}=d;a(t.onDragOver({active:m,over:v}))},onDragEnd(d){let{active:m,over:v}=d;a(t.onDragEnd({active:m,over:v}))},onDragCancel(d){let{active:m,over:v}=d;a(t.onDragCancel({active:m,over:v}))}}),[a,t])),!s)return null;const u=y.createElement(y.Fragment,null,y.createElement(ff,{id:o,value:r.draggable}),y.createElement(pf,{id:l,announcement:i}));return e?Gt.createPortal(u,e):u}var dt;(function(n){n.DragStart="dragStart",n.DragMove="dragMove",n.DragEnd="dragEnd",n.DragCancel="dragCancel",n.DragOver="dragOver",n.RegisterDroppable="registerDroppable",n.SetDroppableDisabled="setDroppableDisabled",n.UnregisterDroppable="unregisterDroppable"})(dt||(dt={}));function Co(){}function bn(n,t){return y.useMemo(()=>({sensor:n,options:t??{}}),[n,t])}function Oo(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return y.useMemo(()=>[...t].filter(o=>o!=null),[...t])}const Qt=Object.freeze({x:0,y:0});function Ul(n,t){return Math.sqrt(Math.pow(n.x-t.x,2)+Math.pow(n.y-t.y,2))}function wf(n,t){const e=So(n);if(!e)return"0 0";const o={x:(e.x-t.left)/t.width*100,y:(e.y-t.top)/t.height*100};return o.x+"% "+o.y+"%"}function Kl(n,t){let{data:{value:e}}=n,{data:{value:o}}=t;return e-o}function xf(n,t){let{data:{value:e}}=n,{data:{value:o}}=t;return o-e}function Yl(n){let{left:t,top:e,height:o,width:r}=n;return[{x:t,y:e},{x:t+r,y:e},{x:t,y:e+o},{x:t+r,y:e+o}]}function Gl(n,t){if(!n||n.length===0)return null;const[e]=n;return e[t]}function Xl(n,t,e){return t===void 0&&(t=n.left),e===void 0&&(e=n.top),{x:t+n.width*.5,y:e+n.height*.5}}const qo=n=>{let{collisionRect:t,droppableRects:e,droppableContainers:o}=n;const r=Xl(t,t.left,t.top),a=[];for(const i of o){const{id:l}=i,s=e.get(l);if(s){const c=Ul(Xl(s),r);a.push({id:l,data:{droppableContainer:i,value:c}})}}return a.sort(Kl)},Ef=n=>{let{collisionRect:t,droppableRects:e,droppableContainers:o}=n;const r=Yl(t),a=[];for(const i of o){const{id:l}=i,s=e.get(l);if(s){const c=Yl(s),u=r.reduce((m,v,E)=>m+Ul(c[E],v),0),d=Number((u/4).toFixed(4));a.push({id:l,data:{droppableContainer:i,value:d}})}}return a.sort(Kl)};function Sf(n,t){const e=Math.max(t.top,n.top),o=Math.max(t.left,n.left),r=Math.min(t.left+t.width,n.left+n.width),a=Math.min(t.top+t.height,n.top+n.height),i=r-o,l=a-e;if(o<r&&e<a){const s=t.width*t.height,c=n.width*n.height,u=i*l,d=u/(s+c-u);return Number(d.toFixed(4))}return 0}const Cf=n=>{let{collisionRect:t,droppableRects:e,droppableContainers:o}=n;const r=[];for(const a of o){const{id:i}=a,l=e.get(i);if(l){const s=Sf(l,t);s>0&&r.push({id:i,data:{droppableContainer:a,value:s}})}}return r.sort(xf)};function Of(n,t,e){return{...n,scaleX:t&&e?t.width/e.width:1,scaleY:t&&e?t.height/e.height:1}}function Jl(n,t){return n&&t?{x:n.left-t.left,y:n.top-t.top}:Qt}function qf(n){return function(e){for(var o=arguments.length,r=new Array(o>1?o-1:0),a=1;a<o;a++)r[a-1]=arguments[a];return r.reduce((i,l)=>({...i,top:i.top+n*l.y,bottom:i.bottom+n*l.y,left:i.left+n*l.x,right:i.right+n*l.x}),{...e})}}const Pf=qf(1);function Zl(n){if(n.startsWith("matrix3d(")){const t=n.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(n.startsWith("matrix(")){const t=n.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function Tf(n,t,e){const o=Zl(t);if(!o)return n;const{scaleX:r,scaleY:a,x:i,y:l}=o,s=n.left-i-(1-r)*parseFloat(e),c=n.top-l-(1-a)*parseFloat(e.slice(e.indexOf(" ")+1)),u=r?n.width/r:n.width,d=a?n.height/a:n.height;return{width:u,height:d,top:c,right:s+u,bottom:c+d,left:s}}const If={ignoreTransform:!1};function Zn(n,t){t===void 0&&(t=If);let e=n.getBoundingClientRect();if(t.ignoreTransform){const{transform:c,transformOrigin:u}=_t(n).getComputedStyle(n);c&&(e=Tf(e,c,u))}const{top:o,left:r,width:a,height:i,bottom:l,right:s}=e;return{top:o,left:r,width:a,height:i,bottom:l,right:s}}function Ql(n){return Zn(n,{ignoreTransform:!0})}function _f(n){const t=n.innerWidth,e=n.innerHeight;return{top:0,left:0,right:t,bottom:e,width:t,height:e}}function kf(n,t){return t===void 0&&(t=_t(n).getComputedStyle(n)),t.position==="fixed"}function jf(n,t){t===void 0&&(t=_t(n).getComputedStyle(n));const e=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(r=>{const a=t[r];return typeof a=="string"?e.test(a):!1})}function Po(n,t){const e=[];function o(r){if(t!=null&&e.length>=t||!r)return e;if(Wa(r)&&r.scrollingElement!=null&&!e.includes(r.scrollingElement))return e.push(r.scrollingElement),e;if(!Sr(r)||Hl(r)||e.includes(r))return e;const a=_t(n).getComputedStyle(r);return r!==n&&jf(r,a)&&e.push(r),kf(r,a)?e:o(r.parentNode)}return n?o(n):e}function es(n){const[t]=Po(n,1);return t??null}function Ua(n){return!bo||!n?null:Gn(n)?n:Ba(n)?Wa(n)||n===Xn(n).scrollingElement?window:Sr(n)?n:null:null}function ts(n){return Gn(n)?n.scrollX:n.scrollLeft}function ns(n){return Gn(n)?n.scrollY:n.scrollTop}function Ka(n){return{x:ts(n),y:ns(n)}}var ht;(function(n){n[n.Forward=1]="Forward",n[n.Backward=-1]="Backward"})(ht||(ht={}));function rs(n){return!bo||!n?!1:n===document.scrollingElement}function os(n){const t={x:0,y:0},e=rs(n)?{height:window.innerHeight,width:window.innerWidth}:{height:n.clientHeight,width:n.clientWidth},o={x:n.scrollWidth-e.width,y:n.scrollHeight-e.height},r=n.scrollTop<=t.y,a=n.scrollLeft<=t.x,i=n.scrollTop>=o.y,l=n.scrollLeft>=o.x;return{isTop:r,isLeft:a,isBottom:i,isRight:l,maxScroll:o,minScroll:t}}const Df={x:.2,y:.2};function Nf(n,t,e,o,r){let{top:a,left:i,right:l,bottom:s}=e;o===void 0&&(o=10),r===void 0&&(r=Df);const{isTop:c,isBottom:u,isLeft:d,isRight:m}=os(n),v={x:0,y:0},E={x:0,y:0},h={height:t.height*r.y,width:t.width*r.x};return!c&&a<=t.top+h.height?(v.y=ht.Backward,E.y=o*Math.abs((t.top+h.height-a)/h.height)):!u&&s>=t.bottom-h.height&&(v.y=ht.Forward,E.y=o*Math.abs((t.bottom-h.height-s)/h.height)),!m&&l>=t.right-h.width?(v.x=ht.Forward,E.x=o*Math.abs((t.right-h.width-l)/h.width)):!d&&i<=t.left+h.width&&(v.x=ht.Backward,E.x=o*Math.abs((t.left+h.width-i)/h.width)),{direction:v,speed:E}}function Af(n){if(n===document.scrollingElement){const{innerWidth:a,innerHeight:i}=window;return{top:0,left:0,right:a,bottom:i,width:a,height:i}}const{top:t,left:e,right:o,bottom:r}=n.getBoundingClientRect();return{top:t,left:e,right:o,bottom:r,width:n.clientWidth,height:n.clientHeight}}function as(n){return n.reduce((t,e)=>Jn(t,Ka(e)),Qt)}function Rf(n){return n.reduce((t,e)=>t+ts(e),0)}function Lf(n){return n.reduce((t,e)=>t+ns(e),0)}function is(n,t){if(t===void 0&&(t=Zn),!n)return;const{top:e,left:o,bottom:r,right:a}=t(n);es(n)&&(r<=0||a<=0||e>=window.innerHeight||o>=window.innerWidth)&&n.scrollIntoView({block:"center",inline:"center"})}const $f=[["x",["left","right"],Rf],["y",["top","bottom"],Lf]];class Ya{constructor(t,e){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const o=Po(e),r=as(o);this.rect={...t},this.width=t.width,this.height=t.height;for(const[a,i,l]of $f)for(const s of i)Object.defineProperty(this,s,{get:()=>{const c=l(o),u=r[a]-c;return this.rect[s]+u},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class Tr{constructor(t){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(e=>{var o;return(o=this.target)==null?void 0:o.removeEventListener(...e)})},this.target=t}add(t,e,o){var r;(r=this.target)==null||r.addEventListener(t,e,o),this.listeners.push([t,e,o])}}function Ff(n){const{EventTarget:t}=_t(n);return n instanceof t?n:Xn(n)}function Ga(n,t){const e=Math.abs(n.x),o=Math.abs(n.y);return typeof t=="number"?Math.sqrt(e**2+o**2)>t:"x"in t&&"y"in t?e>t.x&&o>t.y:"x"in t?e>t.x:"y"in t?o>t.y:!1}var Kt;(function(n){n.Click="click",n.DragStart="dragstart",n.Keydown="keydown",n.ContextMenu="contextmenu",n.Resize="resize",n.SelectionChange="selectionchange",n.VisibilityChange="visibilitychange"})(Kt||(Kt={}));function ls(n){n.preventDefault()}function Mf(n){n.stopPropagation()}var je;(function(n){n.Space="Space",n.Down="ArrowDown",n.Right="ArrowRight",n.Left="ArrowLeft",n.Up="ArrowUp",n.Esc="Escape",n.Enter="Enter"})(je||(je={}));const ss={start:[je.Space,je.Enter],cancel:[je.Esc],end:[je.Space,je.Enter]},zf=(n,t)=>{let{currentCoordinates:e}=t;switch(n.code){case je.Right:return{...e,x:e.x+25};case je.Left:return{...e,x:e.x-25};case je.Down:return{...e,y:e.y+25};case je.Up:return{...e,y:e.y-25}}};class Qn{constructor(t){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=t;const{event:{target:e}}=t;this.props=t,this.listeners=new Tr(Xn(e)),this.windowListeners=new Tr(_t(e)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Kt.Resize,this.handleCancel),this.windowListeners.add(Kt.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(Kt.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:t,onStart:e}=this.props,o=t.node.current;o&&is(o),e(Qt)}handleKeyDown(t){if(Eo(t)){const{active:e,context:o,options:r}=this.props,{keyboardCodes:a=ss,coordinateGetter:i=zf,scrollBehavior:l="smooth"}=r,{code:s}=t;if(a.end.includes(s)){this.handleEnd(t);return}if(a.cancel.includes(s)){this.handleCancel(t);return}const{collisionRect:c}=o.current,u=c?{x:c.left,y:c.top}:Qt;this.referenceCoordinates||(this.referenceCoordinates=u);const d=i(t,{active:e,context:o.current,currentCoordinates:u});if(d){const m=Pr(d,u),v={x:0,y:0},{scrollableAncestors:E}=o.current;for(const h of E){const C=t.code,{isTop:x,isRight:S,isLeft:O,isBottom:P,maxScroll:w,minScroll:T}=os(h),_=Af(h),U={x:Math.min(C===je.Right?_.right-_.width/2:_.right,Math.max(C===je.Right?_.left:_.left+_.width/2,d.x)),y:Math.min(C===je.Down?_.bottom-_.height/2:_.bottom,Math.max(C===je.Down?_.top:_.top+_.height/2,d.y))},R=C===je.Right&&!S||C===je.Left&&!O,k=C===je.Down&&!P||C===je.Up&&!x;if(R&&U.x!==d.x){const j=h.scrollLeft+m.x,J=C===je.Right&&j<=w.x||C===je.Left&&j>=T.x;if(J&&!m.y){h.scrollTo({left:j,behavior:l});return}J?v.x=h.scrollLeft-j:v.x=C===je.Right?h.scrollLeft-w.x:h.scrollLeft-T.x,v.x&&h.scrollBy({left:-v.x,behavior:l});break}else if(k&&U.y!==d.y){const j=h.scrollTop+m.y,J=C===je.Down&&j<=w.y||C===je.Up&&j>=T.y;if(J&&!m.x){h.scrollTo({top:j,behavior:l});return}J?v.y=h.scrollTop-j:v.y=C===je.Down?h.scrollTop-w.y:h.scrollTop-T.y,v.y&&h.scrollBy({top:-v.y,behavior:l});break}}this.handleMove(t,Jn(Pr(d,this.referenceCoordinates),v))}}}handleMove(t,e){const{onMove:o}=this.props;t.preventDefault(),o(e)}handleEnd(t){const{onEnd:e}=this.props;t.preventDefault(),this.detach(),e()}handleCancel(t){const{onCancel:e}=this.props;t.preventDefault(),this.detach(),e()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}Qn.activators=[{eventName:"onKeyDown",handler:(n,t,e)=>{let{keyboardCodes:o=ss,onActivation:r}=t,{active:a}=e;const{code:i}=n.nativeEvent;if(o.start.includes(i)){const l=a.activatorNode.current;return l&&n.target!==l?!1:(n.preventDefault(),r==null||r({event:n.nativeEvent}),!0)}return!1}}];function cs(n){return!!(n&&"distance"in n)}function us(n){return!!(n&&"delay"in n)}class Xa{constructor(t,e,o){var r;o===void 0&&(o=Ff(t.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=t,this.events=e;const{event:a}=t,{target:i}=a;this.props=t,this.events=e,this.document=Xn(i),this.documentListeners=new Tr(this.document),this.listeners=new Tr(o),this.windowListeners=new Tr(_t(i)),this.initialCoordinates=(r=So(a))!=null?r:Qt,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:t,props:{options:{activationConstraint:e,bypassActivationConstraint:o}}}=this;if(this.listeners.add(t.move.name,this.handleMove,{passive:!1}),this.listeners.add(t.end.name,this.handleEnd),this.windowListeners.add(Kt.Resize,this.handleCancel),this.windowListeners.add(Kt.DragStart,ls),this.windowListeners.add(Kt.VisibilityChange,this.handleCancel),this.windowListeners.add(Kt.ContextMenu,ls),this.documentListeners.add(Kt.Keydown,this.handleKeydown),e){if(o!=null&&o({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(us(e)){this.timeoutId=setTimeout(this.handleStart,e.delay);return}if(cs(e))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:t}=this,{onStart:e}=this.props;t&&(this.activated=!0,this.documentListeners.add(Kt.Click,Mf,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Kt.SelectionChange,this.removeTextSelection),e(t))}handleMove(t){var e;const{activated:o,initialCoordinates:r,props:a}=this,{onMove:i,options:{activationConstraint:l}}=a;if(!r)return;const s=(e=So(t))!=null?e:Qt,c=Pr(r,s);if(!o&&l){if(cs(l)){if(l.tolerance!=null&&Ga(c,l.tolerance))return this.handleCancel();if(Ga(c,l.distance))return this.handleStart()}return us(l)&&Ga(c,l.tolerance)?this.handleCancel():void 0}t.cancelable&&t.preventDefault(),i(s)}handleEnd(){const{onEnd:t}=this.props;this.detach(),t()}handleCancel(){const{onCancel:t}=this.props;this.detach(),t()}handleKeydown(t){t.code===je.Esc&&this.handleCancel()}removeTextSelection(){var t;(t=this.document.getSelection())==null||t.removeAllRanges()}}const Hf={move:{name:"pointermove"},end:{name:"pointerup"}};class er extends Xa{constructor(t){const{event:e}=t,o=Xn(e.target);super(t,Hf,o)}}er.activators=[{eventName:"onPointerDown",handler:(n,t)=>{let{nativeEvent:e}=n,{onActivation:o}=t;return!e.isPrimary||e.button!==0?!1:(o==null||o({event:e}),!0)}}];const Bf={move:{name:"mousemove"},end:{name:"mouseup"}};var Ja;(function(n){n[n.RightClick=2]="RightClick"})(Ja||(Ja={}));class Wf extends Xa{constructor(t){super(t,Bf,Xn(t.event.target))}}Wf.activators=[{eventName:"onMouseDown",handler:(n,t)=>{let{nativeEvent:e}=n,{onActivation:o}=t;return e.button===Ja.RightClick?!1:(o==null||o({event:e}),!0)}}];const Za={move:{name:"touchmove"},end:{name:"touchend"}};class Vf extends Xa{constructor(t){super(t,Za)}static setup(){return window.addEventListener(Za.move.name,t,{capture:!1,passive:!1}),function(){window.removeEventListener(Za.move.name,t)};function t(){}}}Vf.activators=[{eventName:"onTouchStart",handler:(n,t)=>{let{nativeEvent:e}=n,{onActivation:o}=t;const{touches:r}=e;return r.length>1?!1:(o==null||o({event:e}),!0)}}];var Ir;(function(n){n[n.Pointer=0]="Pointer",n[n.DraggableRect=1]="DraggableRect"})(Ir||(Ir={}));var To;(function(n){n[n.TreeOrder=0]="TreeOrder",n[n.ReversedTreeOrder=1]="ReversedTreeOrder"})(To||(To={}));function Uf(n){let{acceleration:t,activator:e=Ir.Pointer,canScroll:o,draggingRect:r,enabled:a,interval:i=5,order:l=To.TreeOrder,pointerCoordinates:s,scrollableAncestors:c,scrollableAncestorRects:u,delta:d,threshold:m}=n;const v=Yf({delta:d,disabled:!a}),[E,h]=lf(),C=y.useRef({x:0,y:0}),x=y.useRef({x:0,y:0}),S=y.useMemo(()=>{switch(e){case Ir.Pointer:return s?{top:s.y,bottom:s.y,left:s.x,right:s.x}:null;case Ir.DraggableRect:return r}},[e,r,s]),O=y.useRef(null),P=y.useCallback(()=>{const T=O.current;if(!T)return;const _=C.current.x*x.current.x,U=C.current.y*x.current.y;T.scrollBy(_,U)},[]),w=y.useMemo(()=>l===To.TreeOrder?[...c].reverse():c,[l,c]);y.useEffect(()=>{if(!a||!c.length||!S){h();return}for(const T of w){if((o==null?void 0:o(T))===!1)continue;const _=c.indexOf(T),U=u[_];if(!U)continue;const{direction:R,speed:k}=Nf(T,U,S,t,m);for(const j of["x","y"])v[j][R[j]]||(k[j]=0,R[j]=0);if(k.x>0||k.y>0){h(),O.current=T,E(P,i),C.current=k,x.current=R;return}}C.current={x:0,y:0},x.current={x:0,y:0},h()},[t,P,o,h,a,i,JSON.stringify(S),JSON.stringify(v),E,c,w,u,JSON.stringify(m)])}const Kf={x:{[ht.Backward]:!1,[ht.Forward]:!1},y:{[ht.Backward]:!1,[ht.Forward]:!1}};function Yf(n){let{delta:t,disabled:e}=n;const o=xo(t);return Or(r=>{if(e||!o||!r)return Kf;const a={x:Math.sign(t.x-o.x),y:Math.sign(t.y-o.y)};return{x:{[ht.Backward]:r.x[ht.Backward]||a.x===-1,[ht.Forward]:r.x[ht.Forward]||a.x===1},y:{[ht.Backward]:r.y[ht.Backward]||a.y===-1,[ht.Forward]:r.y[ht.Forward]||a.y===1}}},[e,t,o])}function Gf(n,t){const e=t!==null?n.get(t):void 0,o=e?e.node.current:null;return Or(r=>{var a;return t===null?null:(a=o??r)!=null?a:null},[o,t])}function Xf(n,t){return y.useMemo(()=>n.reduce((e,o)=>{const{sensor:r}=o,a=r.activators.map(i=>({eventName:i.eventName,handler:t(i.handler,o)}));return[...e,...a]},[]),[n,t])}var _r;(function(n){n[n.Always=0]="Always",n[n.BeforeDragging=1]="BeforeDragging",n[n.WhileDragging=2]="WhileDragging"})(_r||(_r={}));var Qa;(function(n){n.Optimized="optimized"})(Qa||(Qa={}));const ds=new Map;function Jf(n,t){let{dragging:e,dependencies:o,config:r}=t;const[a,i]=y.useState(null),{frequency:l,measure:s,strategy:c}=r,u=y.useRef(n),d=C(),m=Cr(d),v=y.useCallback(function(x){x===void 0&&(x=[]),!m.current&&i(S=>S===null?x:S.concat(x.filter(O=>!S.includes(O))))},[m]),E=y.useRef(null),h=Or(x=>{if(d&&!e)return ds;if(!x||x===ds||u.current!==n||a!=null){const S=new Map;for(let O of n){if(!O)continue;if(a&&a.length>0&&!a.includes(O.id)&&O.rect.current){S.set(O.id,O.rect.current);continue}const P=O.node.current,w=P?new Ya(s(P),P):null;O.rect.current=w,w&&S.set(O.id,w)}return S}return x},[n,a,e,d,s]);return y.useEffect(()=>{u.current=n},[n]),y.useEffect(()=>{d||v()},[e,d]),y.useEffect(()=>{a&&a.length>0&&i(null)},[JSON.stringify(a)]),y.useEffect(()=>{d||typeof l!="number"||E.current!==null||(E.current=setTimeout(()=>{v(),E.current=null},l))},[l,d,v,...o]),{droppableRects:h,measureDroppableContainers:v,measuringScheduled:a!=null};function C(){switch(c){case _r.Always:return!1;case _r.BeforeDragging:return e;default:return!e}}}function ei(n,t){return Or(e=>n?e||(typeof t=="function"?t(n):n):null,[t,n])}function Zf(n,t){return ei(n,t)}function Qf(n){let{callback:t,disabled:e}=n;const o=yo(t),r=y.useMemo(()=>{if(e||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:a}=window;return new a(o)},[o,e]);return y.useEffect(()=>()=>r==null?void 0:r.disconnect(),[r]),r}function Io(n){let{callback:t,disabled:e}=n;const o=yo(t),r=y.useMemo(()=>{if(e||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:a}=window;return new a(o)},[e]);return y.useEffect(()=>()=>r==null?void 0:r.disconnect(),[r]),r}function ep(n){return new Ya(Zn(n),n)}function fs(n,t,e){t===void 0&&(t=ep);const[o,r]=y.useReducer(l,null),a=Qf({callback(s){if(n)for(const c of s){const{type:u,target:d}=c;if(u==="childList"&&d instanceof HTMLElement&&d.contains(n)){r();break}}}}),i=Io({callback:r});return Vt(()=>{r(),n?(i==null||i.observe(n),a==null||a.observe(document.body,{childList:!0,subtree:!0})):(i==null||i.disconnect(),a==null||a.disconnect())},[n]),o;function l(s){if(!n)return null;if(n.isConnected===!1){var c;return(c=s??e)!=null?c:null}const u=t(n);return JSON.stringify(s)===JSON.stringify(u)?s:u}}function tp(n){const t=ei(n);return Jl(n,t)}const ps=[];function np(n){const t=y.useRef(n),e=Or(o=>n?o&&o!==ps&&n&&t.current&&n.parentNode===t.current.parentNode?o:Po(n):ps,[n]);return y.useEffect(()=>{t.current=n},[n]),e}function rp(n){const[t,e]=y.useState(null),o=y.useRef(n),r=y.useCallback(a=>{const i=Ua(a.target);i&&e(l=>l?(l.set(i,Ka(i)),new Map(l)):null)},[]);return y.useEffect(()=>{const a=o.current;if(n!==a){i(a);const l=n.map(s=>{const c=Ua(s);return c?(c.addEventListener("scroll",r,{passive:!0}),[c,Ka(c)]):null}).filter(s=>s!=null);e(l.length?new Map(l):null),o.current=n}return()=>{i(n),i(a)};function i(l){l.forEach(s=>{const c=Ua(s);c==null||c.removeEventListener("scroll",r)})}},[r,n]),y.useMemo(()=>n.length?t?Array.from(t.values()).reduce((a,i)=>Jn(a,i),Qt):as(n):Qt,[n,t])}function ms(n,t){t===void 0&&(t=[]);const e=y.useRef(null);return y.useEffect(()=>{e.current=null},t),y.useEffect(()=>{const o=n!==Qt;o&&!e.current&&(e.current=n),!o&&e.current&&(e.current=null)},[n]),e.current?Pr(n,e.current):Qt}function op(n){y.useEffect(()=>{if(!bo)return;const t=n.map(e=>{let{sensor:o}=e;return o.setup==null?void 0:o.setup()});return()=>{for(const e of t)e==null||e()}},n.map(t=>{let{sensor:e}=t;return e}))}function ap(n,t){return y.useMemo(()=>n.reduce((e,o)=>{let{eventName:r,handler:a}=o;return e[r]=i=>{a(i,t)},e},{}),[n,t])}function vs(n){return y.useMemo(()=>n?_f(n):null,[n])}const ti=[];function ip(n,t){t===void 0&&(t=Zn);const[e]=n,o=vs(e?_t(e):null),[r,a]=y.useReducer(l,ti),i=Io({callback:a});return n.length>0&&r===ti&&a(),Vt(()=>{n.length?n.forEach(s=>i==null?void 0:i.observe(s)):(i==null||i.disconnect(),a())},[n]),r;function l(){return n.length?n.map(s=>rs(s)?o:new Ya(t(s),s)):ti}}function gs(n){if(!n)return null;if(n.children.length>1)return n;const t=n.children[0];return Sr(t)?t:n}function lp(n){let{measure:t}=n;const[e,o]=y.useState(null),r=y.useCallback(c=>{for(const{target:u}of c)if(Sr(u)){o(d=>{const m=t(u);return d?{...d,width:m.width,height:m.height}:m});break}},[t]),a=Io({callback:r}),i=y.useCallback(c=>{const u=gs(c);a==null||a.disconnect(),u&&(a==null||a.observe(u)),o(u?t(u):null)},[t,a]),[l,s]=wo(i);return y.useMemo(()=>({nodeRef:l,rect:e,setRef:s}),[e,l,s])}const sp=[{sensor:er,options:{}},{sensor:Qn,options:{}}],cp={current:{}},_o={draggable:{measure:Ql},droppable:{measure:Ql,strategy:_r.WhileDragging,frequency:Qa.Optimized},dragOverlay:{measure:Zn}};class kr extends Map{get(t){var e;return t!=null&&(e=super.get(t))!=null?e:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(t=>{let{disabled:e}=t;return!e})}getNodeFor(t){var e,o;return(e=(o=this.get(t))==null?void 0:o.node.current)!=null?e:void 0}}const up={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new kr,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Co},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:_o,measureDroppableContainers:Co,windowRect:null,measuringScheduled:!1},hs={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Co,draggableNodes:new Map,over:null,measureDroppableContainers:Co},jr=y.createContext(hs),bs=y.createContext(up);function dp(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new kr}}}function fp(n,t){switch(t.type){case dt.DragStart:return{...n,draggable:{...n.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case dt.DragMove:return n.draggable.active?{...n,draggable:{...n.draggable,translate:{x:t.coordinates.x-n.draggable.initialCoordinates.x,y:t.coordinates.y-n.draggable.initialCoordinates.y}}}:n;case dt.DragEnd:case dt.DragCancel:return{...n,draggable:{...n.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case dt.RegisterDroppable:{const{element:e}=t,{id:o}=e,r=new kr(n.droppable.containers);return r.set(o,e),{...n,droppable:{...n.droppable,containers:r}}}case dt.SetDroppableDisabled:{const{id:e,key:o,disabled:r}=t,a=n.droppable.containers.get(e);if(!a||o!==a.key)return n;const i=new kr(n.droppable.containers);return i.set(e,{...a,disabled:r}),{...n,droppable:{...n.droppable,containers:i}}}case dt.UnregisterDroppable:{const{id:e,key:o}=t,r=n.droppable.containers.get(e);if(!r||o!==r.key)return n;const a=new kr(n.droppable.containers);return a.delete(e),{...n,droppable:{...n.droppable,containers:a}}}default:return n}}function pp(n){let{disabled:t}=n;const{active:e,activatorEvent:o,draggableNodes:r}=y.useContext(jr),a=xo(o),i=xo(e==null?void 0:e.id);return y.useEffect(()=>{if(!t&&!o&&a&&i!=null){if(!Eo(a)||document.activeElement===a.target)return;const l=r.get(i);if(!l)return;const{activatorNode:s,node:c}=l;if(!s.current&&!c.current)return;requestAnimationFrame(()=>{for(const u of[s.current,c.current]){if(!u)continue;const d=uf(u);if(d){d.focus();break}}})}},[o,t,r,i,a]),null}function ys(n,t){let{transform:e,...o}=t;return n!=null&&n.length?n.reduce((r,a)=>a({transform:r,...o}),e):e}function mp(n){return y.useMemo(()=>({draggable:{..._o.draggable,...n==null?void 0:n.draggable},droppable:{..._o.droppable,...n==null?void 0:n.droppable},dragOverlay:{..._o.dragOverlay,...n==null?void 0:n.dragOverlay}}),[n==null?void 0:n.draggable,n==null?void 0:n.droppable,n==null?void 0:n.dragOverlay])}function vp(n){let{activeNode:t,measure:e,initialRect:o,config:r=!0}=n;const a=y.useRef(!1),{x:i,y:l}=typeof r=="boolean"?{x:r,y:r}:r;Vt(()=>{if(!i&&!l||!t){a.current=!1;return}if(a.current||!o)return;const c=t==null?void 0:t.node.current;if(!c||c.isConnected===!1)return;const u=e(c),d=Jl(u,o);if(i||(d.x=0),l||(d.y=0),a.current=!0,Math.abs(d.x)>0||Math.abs(d.y)>0){const m=es(c);m&&m.scrollBy({top:d.y,left:d.x})}},[t,i,l,o,e])}const ko=y.createContext({...Qt,scaleX:1,scaleY:1});var yn;(function(n){n[n.Uninitialized=0]="Uninitialized",n[n.Initializing=1]="Initializing",n[n.Initialized=2]="Initialized"})(yn||(yn={}));const jo=y.memo(function(t){var e,o,r,a;let{id:i,accessibility:l,autoScroll:s=!0,children:c,sensors:u=sp,collisionDetection:d=Cf,measuring:m,modifiers:v,...E}=t;const h=y.useReducer(fp,void 0,dp),[C,x]=h,[S,O]=gf(),[P,w]=y.useState(yn.Uninitialized),T=P===yn.Initialized,{draggable:{active:_,nodes:U,translate:R},droppable:{containers:k}}=C,j=_?U.get(_):null,J=y.useRef({initial:null,translated:null}),z=y.useMemo(()=>{var De;return _!=null?{id:_,data:(De=j==null?void 0:j.data)!=null?De:cp,rect:J}:null},[_,j]),Z=y.useRef(null),[ne,ve]=y.useState(null),[ye,ce]=y.useState(null),ee=Cr(E,Object.values(E)),D=qr("DndDescribedBy",i),G=y.useMemo(()=>k.getEnabled(),[k]),ie=mp(m),{droppableRects:X,measureDroppableContainers:K,measuringScheduled:de}=Jf(G,{dragging:T,dependencies:[R.x,R.y],config:ie.droppable}),fe=Gf(U,_),me=y.useMemo(()=>ye?So(ye):null,[ye]),Y=at(),N=Zf(fe,ie.draggable.measure);vp({activeNode:_?U.get(_):null,config:Y.layoutShiftCompensation,initialRect:N,measure:ie.draggable.measure});const F=fs(fe,ie.draggable.measure,N),se=fs(fe?fe.parentElement:null),M=y.useRef({activatorEvent:null,active:null,activeNode:fe,collisionRect:null,collisions:null,droppableRects:X,draggableNodes:U,draggingNode:null,draggingNodeRect:null,droppableContainers:k,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),Oe=k.getNodeFor((e=M.current.over)==null?void 0:e.id),Ie=lp({measure:ie.dragOverlay.measure}),Te=(o=Ie.nodeRef.current)!=null?o:fe,_e=T?(r=Ie.rect)!=null?r:F:null,Me=!!(Ie.nodeRef.current&&Ie.rect),St=tp(Me?null:F),lt=vs(Te?_t(Te):null),Xe=np(T?Oe??fe:null),Je=ip(Xe),bt=ys(v,{transform:{x:R.x-St.x,y:R.y-St.y,scaleX:1,scaleY:1},activatorEvent:ye,active:z,activeNodeRect:F,containerNodeRect:se,draggingNodeRect:_e,over:M.current.over,overlayNodeRect:Ie.rect,scrollableAncestors:Xe,scrollableAncestorRects:Je,windowRect:lt}),Ct=me?Jn(me,R):null,Ve=rp(Xe),Ze=ms(Ve),Ft=ms(Ve,[F]),Qe=Jn(bt,Ze),et=_e?Pf(_e,bt):null,ot=z&&et?d({active:z,collisionRect:et,droppableRects:X,droppableContainers:G,pointerCoordinates:Ct}):null,Dt=Gl(ot,"id"),[st,ft]=y.useState(null),we=Me?bt:Jn(bt,Ft),H=Of(we,(a=st==null?void 0:st.rect)!=null?a:null,F),pe=y.useCallback((De,Ne)=>{let{sensor:Le,options:Ue}=Ne;if(Z.current==null)return;const Ke=U.get(Z.current);if(!Ke)return;const Ye=De.nativeEvent,Ge=new Le({active:Z.current,activeNode:Ke,event:Ye,options:Ue,context:M,onStart(We){const yt=Z.current;if(yt==null)return;const wt=U.get(yt);if(!wt)return;const{onDragStart:xt}=ee.current,Nt={active:{id:yt,data:wt.data,rect:J}};Gt.unstable_batchedUpdates(()=>{xt==null||xt(Nt),w(yn.Initializing),x({type:dt.DragStart,initialCoordinates:We,active:yt}),S({type:"onDragStart",event:Nt})})},onMove(We){x({type:dt.DragMove,coordinates:We})},onEnd:ct(dt.DragEnd),onCancel:ct(dt.DragCancel)});Gt.unstable_batchedUpdates(()=>{ve(Ge),ce(De.nativeEvent)});function ct(We){return async function(){const{active:wt,collisions:xt,over:Nt,scrollAdjustedTranslate:en}=M.current;let At=null;if(wt&&en){const{cancelDrop:kt}=ee.current;At={activatorEvent:Ye,active:wt,collisions:xt,delta:en,over:Nt},We===dt.DragEnd&&typeof kt=="function"&&await Promise.resolve(kt(At))&&(We=dt.DragCancel)}Z.current=null,Gt.unstable_batchedUpdates(()=>{x({type:We}),w(yn.Uninitialized),ft(null),ve(null),ce(null);const kt=We===dt.DragEnd?"onDragEnd":"onDragCancel";if(At){const Yt=ee.current[kt];Yt==null||Yt(At),S({type:kt,event:At})}})}}},[U]),qe=y.useCallback((De,Ne)=>(Le,Ue)=>{const Ke=Le.nativeEvent,Ye=U.get(Ue);if(Z.current!==null||!Ye||Ke.dndKit||Ke.defaultPrevented)return;const Ge={active:Ye};De(Le,Ne.options,Ge)===!0&&(Ke.dndKit={capturedBy:Ne.sensor},Z.current=Ue,pe(Le,Ne))},[U,pe]),Ee=Xf(u,qe);op(u),Vt(()=>{F&&P===yn.Initializing&&w(yn.Initialized)},[F,P]),y.useEffect(()=>{const{onDragMove:De}=ee.current,{active:Ne,activatorEvent:Le,collisions:Ue,over:Ke}=M.current;if(!Ne||!Le)return;const Ye={active:Ne,activatorEvent:Le,collisions:Ue,delta:{x:Qe.x,y:Qe.y},over:Ke};Gt.unstable_batchedUpdates(()=>{De==null||De(Ye),S({type:"onDragMove",event:Ye})})},[Qe.x,Qe.y]),y.useEffect(()=>{const{active:De,activatorEvent:Ne,collisions:Le,droppableContainers:Ue,scrollAdjustedTranslate:Ke}=M.current;if(!De||Z.current==null||!Ne||!Ke)return;const{onDragOver:Ye}=ee.current,Ge=Ue.get(Dt),ct=Ge&&Ge.rect.current?{id:Ge.id,rect:Ge.rect.current,data:Ge.data,disabled:Ge.disabled}:null,We={active:De,activatorEvent:Ne,collisions:Le,delta:{x:Ke.x,y:Ke.y},over:ct};Gt.unstable_batchedUpdates(()=>{ft(ct),Ye==null||Ye(We),S({type:"onDragOver",event:We})})},[Dt]),Vt(()=>{M.current={activatorEvent:ye,active:z,activeNode:fe,collisionRect:et,collisions:ot,droppableRects:X,draggableNodes:U,draggingNode:Te,draggingNodeRect:_e,droppableContainers:k,over:st,scrollableAncestors:Xe,scrollAdjustedTranslate:Qe},J.current={initial:_e,translated:et}},[z,fe,ot,et,U,Te,_e,X,k,st,Xe,Qe]),Uf({...Y,delta:R,draggingRect:et,pointerCoordinates:Ct,scrollableAncestors:Xe,scrollableAncestorRects:Je});const Se=y.useMemo(()=>({active:z,activeNode:fe,activeNodeRect:F,activatorEvent:ye,collisions:ot,containerNodeRect:se,dragOverlay:Ie,draggableNodes:U,droppableContainers:k,droppableRects:X,over:st,measureDroppableContainers:K,scrollableAncestors:Xe,scrollableAncestorRects:Je,measuringConfiguration:ie,measuringScheduled:de,windowRect:lt}),[z,fe,F,ye,ot,se,Ie,U,k,X,st,K,Xe,Je,ie,de,lt]),$e=y.useMemo(()=>({activatorEvent:ye,activators:Ee,active:z,activeNodeRect:F,ariaDescribedById:{draggable:D},dispatch:x,draggableNodes:U,over:st,measureDroppableContainers:K}),[ye,Ee,z,F,x,D,U,st,K]);return y.createElement(Vl.Provider,{value:O},y.createElement(jr.Provider,{value:$e},y.createElement(bs.Provider,{value:Se},y.createElement(ko.Provider,{value:H},c)),y.createElement(pp,{disabled:(l==null?void 0:l.restoreFocus)===!1})),y.createElement(yf,{...l,hiddenTextDescribedById:D}));function at(){const De=(ne==null?void 0:ne.autoScrollEnabled)===!1,Ne=typeof s=="object"?s.enabled===!1:s===!1,Le=T&&!De&&!Ne;return typeof s=="object"?{...s,enabled:Le}:{enabled:Le}}}),gp=y.createContext(null),ws="button",hp="Droppable";function xs(n){let{id:t,data:e,disabled:o=!1,attributes:r}=n;const a=qr(hp),{activators:i,activatorEvent:l,active:s,activeNodeRect:c,ariaDescribedById:u,draggableNodes:d,over:m}=y.useContext(jr),{role:v=ws,roleDescription:E="draggable",tabIndex:h=0}=r??{},C=(s==null?void 0:s.id)===t,x=y.useContext(C?ko:gp),[S,O]=wo(),[P,w]=wo(),T=ap(i,t),_=Cr(e);Vt(()=>(d.set(t,{id:t,key:a,node:S,activatorNode:P,data:_}),()=>{const R=d.get(t);R&&R.key===a&&d.delete(t)}),[d,t]);const U=y.useMemo(()=>({role:v,tabIndex:h,"aria-disabled":o,"aria-pressed":C&&v===ws?!0:void 0,"aria-roledescription":E,"aria-describedby":u.draggable}),[o,v,h,C,E,u.draggable]);return{active:s,activatorEvent:l,activeNodeRect:c,attributes:U,isDragging:C,listeners:o?void 0:T,node:S,over:m,setNodeRef:O,setActivatorNodeRef:w,transform:x}}function Es(){return y.useContext(bs)}const bp="Droppable",yp={timeout:25};function Ss(n){let{data:t,disabled:e=!1,id:o,resizeObserverConfig:r}=n;const a=qr(bp),{active:i,dispatch:l,over:s,measureDroppableContainers:c}=y.useContext(jr),u=y.useRef({disabled:e}),d=y.useRef(!1),m=y.useRef(null),v=y.useRef(null),{disabled:E,updateMeasurementsFor:h,timeout:C}={...yp,...r},x=Cr(h??o),S=y.useCallback(()=>{if(!d.current){d.current=!0;return}v.current!=null&&clearTimeout(v.current),v.current=setTimeout(()=>{c(Array.isArray(x.current)?x.current:[x.current]),v.current=null},C)},[C]),O=Io({callback:S,disabled:E||!i}),P=y.useCallback((U,R)=>{O&&(R&&(O.unobserve(R),d.current=!1),U&&O.observe(U))},[O]),[w,T]=wo(P),_=Cr(t);return y.useEffect(()=>{!O||!w.current||(O.disconnect(),d.current=!1,O.observe(w.current))},[w,O]),Vt(()=>(l({type:dt.RegisterDroppable,element:{id:o,key:a,disabled:e,node:w,rect:m,data:_}}),()=>l({type:dt.UnregisterDroppable,key:a,id:o})),[o]),y.useEffect(()=>{e!==u.current.disabled&&(l({type:dt.SetDroppableDisabled,id:o,key:a,disabled:e}),u.current.disabled=e)},[o,a,e,l]),{active:i,rect:m,isOver:(s==null?void 0:s.id)===o,node:w,over:s,setNodeRef:T}}function wp(n){let{animation:t,children:e}=n;const[o,r]=y.useState(null),[a,i]=y.useState(null),l=xo(e);return!e&&!o&&l&&r(l),Vt(()=>{if(!a)return;const s=o==null?void 0:o.key,c=o==null?void 0:o.props.id;if(s==null||c==null){r(null);return}Promise.resolve(t(c,a)).then(()=>{r(null)})},[t,o,a]),y.createElement(y.Fragment,null,e,o?y.cloneElement(o,{ref:i}):null)}const xp={x:0,y:0,scaleX:1,scaleY:1};function Ep(n){let{children:t}=n;return y.createElement(jr.Provider,{value:hs},y.createElement(ko.Provider,{value:xp},t))}const Sp={position:"fixed",touchAction:"none"},Cp=n=>Eo(n)?"transform 250ms ease":void 0,Op=y.forwardRef((n,t)=>{let{as:e,activatorEvent:o,adjustScale:r,children:a,className:i,rect:l,style:s,transform:c,transition:u=Cp}=n;if(!l)return null;const d=r?c:{...c,scaleX:1,scaleY:1},m={...Sp,width:l.width,height:l.height,top:l.top,left:l.left,transform:Ut.Transform.toString(d),transformOrigin:r&&o?wf(o,l):void 0,transition:typeof u=="function"?u(o):u,...s};return y.createElement(e,{className:i,style:m,ref:t},a)}),qp={duration:250,easing:"ease",keyframes:n=>{let{transform:{initial:t,final:e}}=n;return[{transform:Ut.Transform.toString(t)},{transform:Ut.Transform.toString(e)}]},sideEffects:(n=>t=>{let{active:e,dragOverlay:o}=t;const r={},{styles:a,className:i}=n;if(a!=null&&a.active)for(const[l,s]of Object.entries(a.active))s!==void 0&&(r[l]=e.node.style.getPropertyValue(l),e.node.style.setProperty(l,s));if(a!=null&&a.dragOverlay)for(const[l,s]of Object.entries(a.dragOverlay))s!==void 0&&o.node.style.setProperty(l,s);return i!=null&&i.active&&e.node.classList.add(i.active),i!=null&&i.dragOverlay&&o.node.classList.add(i.dragOverlay),function(){for(const[s,c]of Object.entries(r))e.node.style.setProperty(s,c);i!=null&&i.active&&e.node.classList.remove(i.active)}})({styles:{active:{opacity:"0"}}})};function Pp(n){let{config:t,draggableNodes:e,droppableContainers:o,measuringConfiguration:r}=n;return yo((a,i)=>{if(t===null)return;const l=e.get(a);if(!l)return;const s=l.node.current;if(!s)return;const c=gs(i);if(!c)return;const{transform:u}=_t(i).getComputedStyle(i),d=Zl(u);if(!d)return;const m=typeof t=="function"?t:Tp(t);return is(s,r.draggable.measure),m({active:{id:a,data:l.data,node:s,rect:r.draggable.measure(s)},draggableNodes:e,dragOverlay:{node:i,rect:r.dragOverlay.measure(c)},droppableContainers:o,measuringConfiguration:r,transform:d})})}function Tp(n){const{duration:t,easing:e,sideEffects:o,keyframes:r}={...qp,...n};return a=>{let{active:i,dragOverlay:l,transform:s,...c}=a;if(!t)return;const u={x:l.rect.left-i.rect.left,y:l.rect.top-i.rect.top},d={scaleX:s.scaleX!==1?i.rect.width*s.scaleX/l.rect.width:1,scaleY:s.scaleY!==1?i.rect.height*s.scaleY/l.rect.height:1},m={x:s.x-u.x,y:s.y-u.y,...d},v=r({...c,active:i,dragOverlay:l,transform:{initial:s,final:m}}),[E]=v,h=v[v.length-1];if(JSON.stringify(E)===JSON.stringify(h))return;const C=o==null?void 0:o({active:i,dragOverlay:l,...c}),x=l.node.animate(v,{duration:t,easing:e,fill:"forwards"});return new Promise(S=>{x.onfinish=()=>{C==null||C(),S()}})}}let Cs=0;function Ip(n){return y.useMemo(()=>{if(n!=null)return Cs++,Cs},[n])}const _p=y.memo(n=>{let{adjustScale:t=!1,children:e,dropAnimation:o,style:r,transition:a,modifiers:i,wrapperElement:l="div",className:s,zIndex:c=999}=n;const{activatorEvent:u,active:d,activeNodeRect:m,containerNodeRect:v,draggableNodes:E,droppableContainers:h,dragOverlay:C,over:x,measuringConfiguration:S,scrollableAncestors:O,scrollableAncestorRects:P,windowRect:w}=Es(),T=y.useContext(ko),_=Ip(d==null?void 0:d.id),U=ys(i,{activatorEvent:u,active:d,activeNodeRect:m,containerNodeRect:v,draggingNodeRect:C.rect,over:x,overlayNodeRect:C.rect,scrollableAncestors:O,scrollableAncestorRects:P,transform:T,windowRect:w}),R=ei(m),k=Pp({config:o,draggableNodes:E,droppableContainers:h,measuringConfiguration:S}),j=R?C.setRef:void 0;return y.createElement(Ep,null,y.createElement(wp,{animation:k},d&&_?y.createElement(Op,{key:_,id:d.id,ref:j,as:l,activatorEvent:u,adjustScale:t,className:s,transition:a,rect:R,style:{zIndex:c,...r},transform:U},e):null))});function wn(n,t,e){const o=n.slice();return o.splice(e<0?o.length+e:e,0,o.splice(t,1)[0]),o}function kp(n,t){return n.reduce((e,o,r)=>{const a=t.get(o);return a&&(e[r]=a),e},Array(n.length))}function Do(n){return n!==null&&n>=0}function jp(n,t){if(n===t)return!0;if(n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function Dp(n){return typeof n=="boolean"?{draggable:n,droppable:n}:n}const Os=n=>{let{rects:t,activeIndex:e,overIndex:o,index:r}=n;const a=wn(t,o,e),i=t[r],l=a[r];return!l||!i?null:{x:l.left-i.left,y:l.top-i.top,scaleX:l.width/i.width,scaleY:l.height/i.height}},Np=n=>{let{activeIndex:t,index:e,rects:o,overIndex:r}=n,a,i;return e===t&&(a=o[e],i=o[r]),e===r&&(a=o[e],i=o[t]),!i||!a?null:{x:i.left-a.left,y:i.top-a.top,scaleX:i.width/a.width,scaleY:i.height/a.height}},No={scaleX:1,scaleY:1},ni=n=>{var t;let{activeIndex:e,activeNodeRect:o,index:r,rects:a,overIndex:i}=n;const l=(t=a[e])!=null?t:o;if(!l)return null;if(r===e){const c=a[i];return c?{x:0,y:e<i?c.top+c.height-(l.top+l.height):c.top-l.top,...No}:null}const s=Ap(a,r,e);return r>e&&r<=i?{x:0,y:-l.height-s,...No}:r<e&&r>=i?{x:0,y:l.height+s,...No}:{x:0,y:0,...No}};function Ap(n,t,e){const o=n[t],r=n[t-1],a=n[t+1];return o?e<t?r?o.top-(r.top+r.height):a?a.top-(o.top+o.height):0:a?a.top-(o.top+o.height):r?o.top-(r.top+r.height):0:0}const qs="Sortable",Ps=y.createContext({activeIndex:-1,containerId:qs,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Os,disabled:{draggable:!1,droppable:!1}});function Ao(n){let{children:t,id:e,items:o,strategy:r=Os,disabled:a=!1}=n;const{active:i,dragOverlay:l,droppableRects:s,over:c,measureDroppableContainers:u}=Es(),d=qr(qs,e),m=l.rect!==null,v=y.useMemo(()=>o.map(T=>typeof T=="object"&&"id"in T?T.id:T),[o]),E=i!=null,h=i?v.indexOf(i.id):-1,C=c?v.indexOf(c.id):-1,x=y.useRef(v),S=!jp(v,x.current),O=C!==-1&&h===-1||S,P=Dp(a);Vt(()=>{S&&E&&u(v)},[S,v,E,u]),y.useEffect(()=>{x.current=v},[v]);const w=y.useMemo(()=>({activeIndex:h,containerId:d,disabled:P,disableTransforms:O,items:v,overIndex:C,useDragOverlay:m,sortedRects:kp(v,s),strategy:r}),[h,d,P.draggable,P.droppable,O,v,C,s,m,r]);return y.createElement(Ps.Provider,{value:w},t)}const Rp=n=>{let{id:t,items:e,activeIndex:o,overIndex:r}=n;return wn(e,o,r).indexOf(t)},Lp=n=>{let{containerId:t,isSorting:e,wasDragging:o,index:r,items:a,newIndex:i,previousItems:l,previousContainerId:s,transition:c}=n;return!c||!o||l!==a&&r===i?!1:e?!0:i!==r&&t===s},$p={duration:200,easing:"ease"},Ts="transform",Fp=Ut.Transition.toString({property:Ts,duration:0,easing:"linear"}),Mp={roleDescription:"sortable"};function zp(n){let{disabled:t,index:e,node:o,rect:r}=n;const[a,i]=y.useState(null),l=y.useRef(e);return Vt(()=>{if(!t&&e!==l.current&&o.current){const s=r.current;if(s){const c=Zn(o.current,{ignoreTransform:!0}),u={x:s.left-c.left,y:s.top-c.top,scaleX:s.width/c.width,scaleY:s.height/c.height};(u.x||u.y)&&i(u)}}e!==l.current&&(l.current=e)},[t,e,o,r]),y.useEffect(()=>{a&&i(null)},[a]),a}function Ro(n){let{animateLayoutChanges:t=Lp,attributes:e,disabled:o,data:r,getNewIndex:a=Rp,id:i,strategy:l,resizeObserverConfig:s,transition:c=$p}=n;const{items:u,containerId:d,activeIndex:m,disabled:v,disableTransforms:E,sortedRects:h,overIndex:C,useDragOverlay:x,strategy:S}=y.useContext(Ps),O=Hp(o,v),P=u.indexOf(i),w=y.useMemo(()=>({sortable:{containerId:d,index:P,items:u},...r}),[d,r,P,u]),T=y.useMemo(()=>u.slice(u.indexOf(i)),[u,i]),{rect:_,node:U,isOver:R,setNodeRef:k}=Ss({id:i,data:w,disabled:O.droppable,resizeObserverConfig:{updateMeasurementsFor:T,...s}}),{active:j,activatorEvent:J,activeNodeRect:z,attributes:Z,setNodeRef:ne,listeners:ve,isDragging:ye,over:ce,setActivatorNodeRef:ee,transform:D}=xs({id:i,data:w,attributes:{...Mp,...e},disabled:O.draggable}),G=af(k,ne),ie=!!j,X=ie&&!E&&Do(m)&&Do(C),K=!x&&ye,de=K&&X?D:null,me=X?de??(l??S)({rects:h,activeNodeRect:z,activeIndex:m,overIndex:C,index:P}):null,Y=Do(m)&&Do(C)?a({id:i,items:u,activeIndex:m,overIndex:C}):P,N=j==null?void 0:j.id,F=y.useRef({activeId:N,items:u,newIndex:Y,containerId:d}),se=u!==F.current.items,M=t({active:j,containerId:d,isDragging:ye,isSorting:ie,id:i,index:P,items:u,newIndex:F.current.newIndex,previousItems:F.current.items,previousContainerId:F.current.containerId,transition:c,wasDragging:F.current.activeId!=null}),Oe=zp({disabled:!M,index:P,node:U,rect:_});return y.useEffect(()=>{ie&&F.current.newIndex!==Y&&(F.current.newIndex=Y),d!==F.current.containerId&&(F.current.containerId=d),u!==F.current.items&&(F.current.items=u)},[ie,Y,d,u]),y.useEffect(()=>{if(N===F.current.activeId)return;if(N&&!F.current.activeId){F.current.activeId=N;return}const Te=setTimeout(()=>{F.current.activeId=N},50);return()=>clearTimeout(Te)},[N]),{active:j,activeIndex:m,attributes:Z,data:w,rect:_,index:P,newIndex:Y,items:u,isOver:R,isSorting:ie,isDragging:ye,listeners:ve,node:U,overIndex:C,over:ce,setNodeRef:G,setActivatorNodeRef:ee,setDroppableNodeRef:k,setDraggableNodeRef:ne,transform:Oe??me,transition:Ie()};function Ie(){if(Oe||se&&F.current.newIndex===P)return Fp;if(!(K&&!Eo(J)||!c)&&(ie||M))return Ut.Transition.toString({...c,property:Ts})}}function Hp(n,t){var e,o;return typeof n=="boolean"?{draggable:n,droppable:!1}:{draggable:(e=n==null?void 0:n.draggable)!=null?e:t.draggable,droppable:(o=n==null?void 0:n.droppable)!=null?o:t.droppable}}function Lo(n){if(!n)return!1;const t=n.data.current;return!!(t&&"sortable"in t&&typeof t.sortable=="object"&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const Bp=[je.Down,je.Right,je.Up,je.Left],$o=(n,t)=>{let{context:{active:e,collisionRect:o,droppableRects:r,droppableContainers:a,over:i,scrollableAncestors:l}}=t;if(Bp.includes(n.code)){if(n.preventDefault(),!e||!o)return;const s=[];a.getEnabled().forEach(d=>{if(!d||d!=null&&d.disabled)return;const m=r.get(d.id);if(m)switch(n.code){case je.Down:o.top<m.top&&s.push(d);break;case je.Up:o.top>m.top&&s.push(d);break;case je.Left:o.left>m.left&&s.push(d);break;case je.Right:o.left<m.left&&s.push(d);break}});const c=Ef({active:e,collisionRect:o,droppableRects:r,droppableContainers:s,pointerCoordinates:null});let u=Gl(c,"id");if(u===(i==null?void 0:i.id)&&c.length>1&&(u=c[1].id),u!=null){const d=a.get(e.id),m=a.get(u),v=m?r.get(m.id):null,E=m==null?void 0:m.node.current;if(E&&v&&d&&m){const C=Po(E).some((T,_)=>l[_]!==T),x=Is(d,m),S=Wp(d,m),O=C||!x?{x:0,y:0}:{x:S?o.width-v.width:0,y:S?o.height-v.height:0},P={x:v.left,y:v.top};return O.x&&O.y?P:Pr(P,O)}}}};function Is(n,t){return!Lo(n)||!Lo(t)?!1:n.data.current.sortable.containerId===t.data.current.sortable.containerId}function Wp(n,t){return!Lo(n)||!Lo(t)||!Is(n,t)?!1:n.data.current.sortable.index<t.data.current.sortable.index}function Dr(){return Dr=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},Dr.apply(this,arguments)}function Nr(n){"@babel/helpers - typeof";return Nr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Nr(n)}function Vp(n,t){if(Nr(n)!=="object"||n===null)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var o=e.call(n,t||"default");if(Nr(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function Up(n){var t=Vp(n,"string");return Nr(t)==="symbol"?t:String(t)}function un(n,t,e){return t=Up(t),t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var Kp={root:function(t){var e=t.props;return ge("p-badge p-component",un({"p-badge-no-gutter":L.isNotEmpty(e.value)&&String(e.value).length===1,"p-badge-dot":L.isEmpty(e.value),"p-badge-lg":e.size==="large","p-badge-xl":e.size==="xlarge"},"p-badge-".concat(e.severity),e.severity!==null))}},Yp=`
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
`,Fo=ke.extend({defaultProps:{__TYPE:"Badge",__parentMetadata:null,value:null,severity:null,size:null,style:null,className:null,children:void 0},css:{classes:Kp,styles:Yp}});function _s(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,o)}return e}function Gp(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?_s(Object(e),!0).forEach(function(o){un(n,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):_s(Object(e)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(e,o))})}return n}var ks=f.memo(f.forwardRef(function(n,t){var e=Tt(),o=f.useContext(nt),r=Fo.getProps(n,o),a=Fo.setMetaData(Gp({props:r},r.__parentMetadata)),i=a.ptm,l=a.cx,s=a.isUnstyled;Bt(Fo.css.styles,s,{name:"badge"});var c=f.useRef(null);f.useImperativeHandle(t,function(){return{props:r,getElement:function(){return c.current}}});var u=e({ref:c,style:r.style,className:ge(r.className,l("root"))},Fo.getOtherProps(r),i("root"));return f.createElement("span",u,r.value)}));ks.displayName="Badge";var Xp={icon:function(t){var e=t.props;return ge("p-button-icon p-c",un({},"p-button-icon-".concat(e.iconPos),e.label))},loadingIcon:function(t){var e=t.props,o=t.className;return ge(o,{"p-button-loading-icon":e.loading})},label:"p-button-label p-c",root:function(t){var e=t.props,o=t.size,r=t.disabled;return ge("p-button p-component",un(un(un(un({"p-button-icon-only":(e.icon||e.loading)&&!e.label&&!e.children,"p-button-vertical":(e.iconPos==="top"||e.iconPos==="bottom")&&e.label,"p-disabled":r,"p-button-loading":e.loading,"p-button-outlined":e.outlined,"p-button-raised":e.raised,"p-button-link":e.link,"p-button-text":e.text,"p-button-rounded":e.rounded,"p-button-loading-label-only":e.loading&&!e.icon&&e.label},"p-button-loading-".concat(e.iconPos),e.loading&&e.label),"p-button-".concat(o),o),"p-button-".concat(e.severity),e.severity),"p-button-plain",e.plain))}},Mo=ke.extend({defaultProps:{__TYPE:"Button",__parentMetadata:null,badge:null,badgeClassName:null,className:null,children:void 0,disabled:!1,icon:null,iconPos:"left",label:null,link:!1,loading:!1,loadingIcon:null,outlined:!1,plain:!1,raised:!1,rounded:!1,severity:null,size:null,text:!1,tooltip:null,tooltipOptions:null,visible:!0},css:{classes:Xp}});function js(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,o)}return e}function ri(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?js(Object(e),!0).forEach(function(o){un(n,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):js(Object(e)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(e,o))})}return n}var Et=f.memo(f.forwardRef(function(n,t){var e=Tt(),o=f.useContext(nt),r=Mo.getProps(n,o),a=r.disabled||r.loading,i=ri(ri({props:r},r.__parentMetadata),{},{context:{disabled:a}}),l=Mo.setMetaData(i),s=l.ptm,c=l.cx,u=l.isUnstyled;Bt(Mo.css.styles,u,{name:"button",styled:!0});var d=f.useRef(t);if(f.useEffect(function(){L.combinedRefs(d,t)},[d,t]),r.visible===!1)return null;var m=function(){var R=ge("p-button-icon p-c",un({},"p-button-icon-".concat(r.iconPos),r.label)),k=e({className:c("icon")},s("icon"));R=ge(R,{"p-button-loading-icon":r.loading});var j=e({className:c("loadingIcon",{className:R})},s("loadingIcon")),J=r.loading?r.loadingIcon||f.createElement(po,Dr({},j,{spin:!0})):r.icon;return zt.getJSXIcon(J,ri({},k),{props:r})},v=function(){var R=e({className:c("label")},s("label"));return r.label?f.createElement("span",R,r.label):!r.children&&!r.label&&f.createElement("span",Dr({},R,{dangerouslySetInnerHTML:{__html:"&nbsp;"}}))},E=function(){if(r.badge){var R=e({className:ge(r.badgeClassName),value:r.badge,unstyled:r.unstyled,__parentMetadata:{parent:i}},s("badge"));return f.createElement(ks,R,r.badge)}return null},h=!a||r.tooltipOptions&&r.tooltipOptions.showOnDisabled,C=L.isNotEmpty(r.tooltip)&&h,x={large:"lg",small:"sm"},S=x[r.size],O=m(),P=v(),w=E(),T=r.label?r.label+(r.badge?" "+r.badge:""):r["aria-label"],_=e({ref:d,"aria-label":T,"data-pc-autofocus":r.autoFocus,className:ge(r.className,c("root",{size:S,disabled:a})),disabled:a},Mo.getOtherProps(r),s("root"));return f.createElement(f.Fragment,null,f.createElement("button",_,O,P,r.children,w,f.createElement(xr,null)),C&&f.createElement(Vn,Dr({target:d,content:r.tooltip,pt:s("tooltip")},r.tooltipOptions)))}));Et.displayName="Button";function Ar(){return Ar=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},Ar.apply(this,arguments)}function Rr(n){"@babel/helpers - typeof";return Rr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Rr(n)}function Jp(n,t){if(Rr(n)!=="object"||n===null)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var o=e.call(n,t||"default");if(Rr(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function Zp(n){var t=Jp(n,"string");return Rr(t)==="symbol"?t:String(t)}function Qp(n,t,e){return t=Zp(t),t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var em={root:function(t){var e=t.props,o=t.context;return ge("p-radiobutton p-component",{"p-highlight":e.checked,"p-disabled":e.disabled,"p-invalid":e.invalid,"p-variant-filled":e.variant?e.variant==="filled":o&&o.inputStyle==="filled"})},box:"p-radiobutton-box",input:"p-radiobutton-input",icon:"p-radiobutton-icon"},zo=ke.extend({defaultProps:{__TYPE:"RadioButton",autoFocus:!1,checked:!1,className:null,disabled:!1,id:null,inputId:null,inputRef:null,invalid:!1,variant:null,name:null,onChange:null,onClick:null,required:!1,style:null,tabIndex:null,tooltip:null,tooltipOptions:null,value:null,children:void 0},css:{classes:em}});function Ds(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,o)}return e}function tm(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?Ds(Object(e),!0).forEach(function(o){Qp(n,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):Ds(Object(e)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(e,o))})}return n}var xn=f.memo(f.forwardRef(function(n,t){var e=Tt(),o=f.useContext(nt),r=zo.getProps(n,o),a=f.useRef(null),i=f.useRef(r.inputRef),l=zo.setMetaData({props:r}),s=l.ptm,c=l.cx,u=l.isUnstyled;Bt(zo.css.styles,u,{name:"radiobutton"});var d=function(w){m(w)},m=function(w){if(!(r.disabled||r.readonly)&&r.onChange){var T=r.checked,_=w.target instanceof HTMLDivElement,U=w.target===i.current,R=U&&w.target.checked!==T,k=_&&($.hasClass(a.current,"p-radiobutton-checked")===T?!T:!1),j=!T,J={originalEvent:w,value:r.value,checked:j,stopPropagation:function(){w==null||w.stopPropagation()},preventDefault:function(){w==null||w.preventDefault()},target:{type:"radio",name:r.name,id:r.id,value:r.value,checked:j}};if(R||k){var z;if(r==null||(z=r.onChange)===null||z===void 0||z.call(r,J),w.defaultPrevented)return;k&&(i.current.checked=j)}$.focus(i.current)}},v=function(w){var T;r==null||(T=r.onFocus)===null||T===void 0||T.call(r,w)},E=function(w){var T;r==null||(T=r.onBlur)===null||T===void 0||T.call(r,w)};f.useImperativeHandle(t,function(){return{props:r,select:d,focus:function(){return $.focus(i.current)},getElement:function(){return a.current},getInput:function(){return i.current}}}),f.useEffect(function(){i.current&&(i.current.checked=r.checked)},[r.checked]),f.useEffect(function(){L.combinedRefs(i,r.inputRef)},[i,r.inputRef]),Ht(function(){r.autoFocus&&$.focus(i.current,r.autoFocus)});var h=L.isNotEmpty(r.tooltip),C=zo.getOtherProps(r),x=e({id:r.id,className:ge(r.className,c("root",{context:o})),style:r.style,"data-p-checked":r.checked},C,s("root"));delete x.input,delete x.box,delete x.icon;var S=function(){var w=L.reduceKeys(C,$.ARIA_PROPS),T=e(tm({id:r.inputId,type:"radio",name:r.name,defaultChecked:r.checked,onFocus:v,onBlur:E,onChange:m,disabled:r.disabled,readOnly:r.readonly,required:r.required,tabIndex:r.tabIndex,className:c("input")},w),n.input,s("input"));return f.createElement("input",Ar({ref:i},T))},O=function(){var w=e({className:c("box")},n.box,s("box")),T=e({className:c("icon")},n.icon,s("icon"));return f.createElement("div",w,f.createElement("div",T))};return f.createElement(f.Fragment,null,f.createElement("div",Ar({ref:a},x),S(),O()),h&&f.createElement(Vn,Ar({target:a,content:r.tooltip,pt:s("tooltip")},r.tooltipOptions)))}));xn.displayName="RadioButton";const nm=({option:n,onChange:t,index:e})=>{const[o,r]=y.useState(n),a=m=>{const v={value:o.value,label:o.label,[m.target.name]:m.target.value};r(v),t(v)};y.useEffect(()=>{r(n)},[n]);const{attributes:i,listeners:l,setNodeRef:s,setActivatorNodeRef:c,transform:u}=Ro({id:e}),d={transform:Ut.Transform.toString(u)};return p.jsx(p.Fragment,{children:p.jsxs("div",{className:"flex flex-row gap-2",ref:s,style:d,...i,children:[p.jsx(Et,{icon:"pi pi-sort",className:"px-0 border-noround border-0",style:{width:"1rem",color:"#E1E1E1",background:"transparent"},severity:"secondary",size:"small",ref:c,...l}),p.jsxs("div",{className:"p-inputgroup flex-1",children:[p.jsx(Fe,{id:"value",value:o.value,name:"value",onChange:a,className:"flex-1",placeholder:"Value"}),p.jsx(Fe,{id:"label",value:o.label,name:"label",onChange:a,className:"flex-1",placeholder:"Label"})]}),p.jsx(Et,{icon:"pi pi-trash",onClick:()=>t(null)})]})})},rm=({onInsert:n})=>{const t={value:"",label:""},[e,o]=y.useState(t),r=i=>{const l={value:e.value,label:e.label,[i.target.name]:i.target.value};o(l)},a=()=>{n({value:e.value,label:e.label}),o(t)};return p.jsx(p.Fragment,{children:p.jsxs("div",{className:"flex flex-row gap-2",children:[p.jsxs("div",{className:"p-inputgroup flex-1",children:[p.jsx(Fe,{id:"value",value:e.value,name:"value",onChange:r,className:"",placeholder:"Value"}),p.jsx(Fe,{id:"label",value:e.label,name:"label",onChange:r,className:"",placeholder:"Label"})]}),p.jsx(Et,{icon:"pi pi-plus",onClick:a})]})})},om=({item:n,onChange:t,form:e,config:o})=>{const[r,a]=y.useState({...hn,...n}),i=(u,d)=>{const m=Wt(r.options);u?m[d]=u:m.splice(d,1);const v={...r,options:m};a(v),t(v)},l=u=>{const d=Wt(r.options);d.push(u);const m={...r,options:d};a(m),t(m)},s=Oo(bn(er),bn(Qn,{coordinateGetter:$o}));function c(u){const{active:d,over:m}=u;if(m&&d.id!==m.id){let v=function(C){return parseInt(C.replace("option-",""))};const E=wn(r.options,v(m.id.toString()),v(d.id.toString())),h={...r,options:E};a(h),t(h)}}return p.jsx(p.Fragment,{children:p.jsxs("div",{className:"form-item flex flex-column gap-4",children:[p.jsx(jo,{sensors:s,collisionDetection:qo,onDragEnd:c,children:p.jsx(Ao,{items:r.options.map((u,d)=>`option-${d}`),strategy:ni,children:r.options.map((u,d)=>p.jsx(nm,{option:u,index:`option-${d}`,onChange:m=>{i(m,d)}},`option-${d}`))})}),p.jsx(rm,{onInsert:l},"item-new")]})})},am=({item:n,onChange:t,form:e,config:o})=>{const[r,a]=y.useState({...hn,...n}),i=l=>{const s={...r,[l.target.name]:l.target.value};a(s),t(s)};return y.useEffect(()=>{a({...hn,...n})},[n]),p.jsx(p.Fragment,{children:p.jsxs(Jt,{activeIndex:0,children:[p.jsx(jt,{header:"General",children:p.jsxs("div",{className:"form-item flex flex-column gap-4",children:[p.jsxs("div",{className:"flex flex-column gap-2",children:[p.jsx("label",{htmlFor:"label",children:"Label"}),p.jsx(Fe,{id:"label",value:r.label||"",name:"label",onChange:i,className:"w-full"})]}),p.jsxs("div",{className:"flex flex-column gap-2",children:[p.jsx("label",{htmlFor:"placeholder",children:"Placeholder"}),p.jsx(Fe,{id:"placeholder",value:r.placeholder||"",name:"placeholder",onChange:i,className:"w-full"})]})]})},"general"),p.jsxs(jt,{header:"Options",children:[o.external_select_options.map(l=>p.jsxs("div",{className:"flex align-items-center",children:[p.jsx(xn,{inputId:l.key,name:"source",value:l.key,onChange:i,checked:r.source===l.key}),p.jsx("label",{htmlFor:l.key,className:"ml-2",children:l.label})]},l.key)),p.jsxs("div",{className:"flex align-items-center",children:[p.jsx(xn,{inputId:"local",name:"source",value:"local",onChange:i,checked:r.source==="local"}),p.jsx("label",{htmlFor:"local",className:"ml-2",children:"Custom"})]},"local"),p.jsx("div",{className:"mt-4",children:r.source==="local"&&p.jsx(om,{item:r,onChange:t,config:o,form:e})})]},"options")]})})},im=n=>({}),lm=new pn({type:hn.type,form:new Ot({render:nf,validation:rf}),settings:new Ot({render:am,validation:im}),heading:"Select box",description:"select from a list of items in a drop down",hidden:!1,icon:of,data:hn}),An={id:rn(),type:"input-text",label:"",value:"",placeholder:""},sm=({item:n,onChange:t,config:e})=>{const[o,r]=y.useState({...An,...n});y.useEffect(()=>{r({...An,...n})},[n]);const a=l=>{const s={...An,...n,value:l.target.value};t(s)},i=Math.random().toString(36).substring(2,15);return p.jsx(p.Fragment,{children:p.jsx("article",{children:p.jsxs("div",{className:"flex flex-column gap-2",children:[p.jsx("label",{htmlFor:i,children:o.label}),p.jsx(Fe,{value:o.value,onChange:a,placeholder:o.placeholder,className:"w-full",id:i})]})})})},cm=n=>({});var Ns;function oi(){return oi=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)({}).hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},oi.apply(null,arguments)}var um=function(t){return f.createElement("svg",oi({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},t),Ns||(Ns=f.createElement("path",{d:"M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-1.8l18-48h159.6l18 48H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-25.8zM279.8 304H168.2L224 155.1z"})))};const dm=({item:n,onChange:t,config:e})=>{const[o,r]=y.useState({...An,...n}),a=i=>{const l={...o,[i.target.name]:i.target.value};r(l),t(l)};return y.useEffect(()=>{r({...An,...n})},[n]),p.jsx(p.Fragment,{children:p.jsx(Jt,{activeIndex:0,children:p.jsx(jt,{header:"General",children:p.jsxs("div",{className:"form-item flex flex-column gap-4",children:[p.jsxs("div",{className:"flex flex-column gap-2",children:[p.jsx("label",{htmlFor:"label",children:"Label"}),p.jsx(Fe,{id:"label",value:o.label||"",name:"label",onChange:a,className:"w-full"})]}),p.jsxs("div",{className:"flex flex-column gap-2",children:[p.jsx("label",{htmlFor:"placeholder",children:"Placeholder"}),p.jsx(Fe,{id:"placeholder",value:o.placeholder||"",name:"placeholder",onChange:a,className:"w-full"})]})]})},"general")})})},fm=n=>({}),pm=new pn({type:An.type,form:new Ot({render:sm,validation:cm}),settings:new Ot({render:dm,validation:fm}),heading:"Text input",description:"a simple box to insert a value into",hidden:!1,icon:um,data:An}),En={id:rn(),type:"input-checkbox",label:"",value:[],source:"local",options:[]};function Lr(){return Lr=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},Lr.apply(this,arguments)}function $r(n){"@babel/helpers - typeof";return $r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$r(n)}function mm(n,t){if($r(n)!=="object"||n===null)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var o=e.call(n,t||"default");if($r(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function vm(n){var t=mm(n,"string");return $r(t)==="symbol"?t:String(t)}function gm(n,t,e){return t=vm(t),t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function hm(n){if(Array.isArray(n))return n}function bm(n,t){var e=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(e!=null){var o,r,a,i,l=[],s=!0,c=!1;try{if(a=(e=e.call(n)).next,t!==0)for(;!(s=(o=a.call(e)).done)&&(l.push(o.value),l.length!==t);s=!0);}catch(u){c=!0,r=u}finally{try{if(!s&&e.return!=null&&(i=e.return(),Object(i)!==i))return}finally{if(c)throw r}}return l}}function As(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}function ym(n,t){if(n){if(typeof n=="string")return As(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return As(n,t)}}function wm(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xm(n,t){return hm(n)||bm(n,t)||ym(n,t)||wm()}var Em={box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon",root:function(t){var e=t.props,o=t.checked,r=t.context;return ge("p-checkbox p-component",{"p-highlight":o,"p-disabled":e.disabled,"p-invalid":e.invalid,"p-variant-filled":e.variant?e.variant==="filled":r&&r.inputStyle==="filled"})}},Ho=ke.extend({defaultProps:{__TYPE:"Checkbox",autoFocus:!1,checked:!1,className:null,disabled:!1,falseValue:!1,icon:null,id:null,inputId:null,inputRef:null,invalid:!1,variant:null,name:null,onChange:null,onContextMenu:null,onMouseDown:null,readOnly:!1,required:!1,style:null,tabIndex:null,tooltip:null,tooltipOptions:null,trueValue:!0,value:null,children:void 0},css:{classes:Em}});function Rs(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,o)}return e}function Ls(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?Rs(Object(e),!0).forEach(function(o){gm(n,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):Rs(Object(e)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(e,o))})}return n}var $s=f.memo(f.forwardRef(function(n,t){var e=Tt(),o=f.useContext(nt),r=Ho.getProps(n,o),a=f.useState(!1),i=xm(a,2),l=i[0],s=i[1],c=Ho.setMetaData({props:r,state:{focused:l},context:{checked:r.checked===r.trueValue,disabled:r.disabled}}),u=c.ptm,d=c.cx,m=c.isUnstyled;Bt(Ho.css.styles,m,{name:"checkbox"});var v=f.useRef(null),E=f.useRef(r.inputRef),h=function(){return r.checked===r.trueValue},C=function(k){if(!(r.disabled||r.readonly)&&r.onChange){var j,J=h(),z=J?r.falseValue:r.trueValue,Z={originalEvent:k,value:r.value,checked:z,stopPropagation:function(){k==null||k.stopPropagation()},preventDefault:function(){k==null||k.preventDefault()},target:{type:"checkbox",name:r.name,id:r.id,value:r.value,checked:z}};if(r==null||(j=r.onChange)===null||j===void 0||j.call(r,Z),k.defaultPrevented)return;$.focus(E.current)}},x=function(){var k;s(!0),r==null||(k=r.onFocus)===null||k===void 0||k.call(r)},S=function(){var k;s(!1),r==null||(k=r.onBlur)===null||k===void 0||k.call(r)};f.useImperativeHandle(t,function(){return{props:r,focus:function(){return $.focus(E.current)},getElement:function(){return v.current},getInput:function(){return E.current}}}),f.useEffect(function(){L.combinedRefs(E,r.inputRef)},[E,r.inputRef]),He(function(){E.current.checked=h()},[r.checked,r.trueValue]),Ht(function(){r.autoFocus&&$.focus(E.current,r.autoFocus)});var O=h(),P=L.isNotEmpty(r.tooltip),w=Ho.getOtherProps(r),T=e({id:r.id,className:ge(r.className,d("root",{checked:O,context:o})),style:r.style,"data-p-highlight":O,"data-p-disabled":r.disabled,onContextMenu:r.onContextMenu,onMouseDown:r.onMouseDown},w,u("root")),_=function(){var k=L.reduceKeys(w,$.ARIA_PROPS),j=e(Ls({id:r.inputId,type:"checkbox",className:d("input"),name:r.name,tabIndex:r.tabIndex,onFocus:function(z){return x()},onBlur:function(z){return S()},onChange:function(z){return C(z)},disabled:r.disabled,readOnly:r.readOnly,required:r.required,"aria-invalid":r.invalid,checked:O},k),u("input"));return f.createElement("input",Lr({ref:E},j))},U=function(){var k=e({className:d("icon")},u("icon")),j=e({className:d("box",{checked:O}),"data-p-highlight":O,"data-p-disabled":r.disabled},u("box")),J=O?r.icon||f.createElement(Ma,k):null,z=zt.getJSXIcon(J,Ls({},k),{props:r,checked:O});return f.createElement("div",j,z)};return f.createElement(f.Fragment,null,f.createElement("div",Lr({ref:v},T),_(),U()),P&&f.createElement(Vn,Lr({target:v,content:r.tooltip,pt:u("tooltip")},r.tooltipOptions)))}));$s.displayName="Checkbox";const Sm=({item:n,onChange:t,config:e})=>{const[o,r]=y.useState({...En,...n}),[a,i]=y.useState(o.options);y.useEffect(()=>{r({...En,...n})},[n]),y.useEffect(()=>{if(i(o.options),o.source!="local"){const c=e.external_select_options.find(u=>u.key==o.source);c&&(c.options&&i(c.options),c.options_func&&c.options_func().then(u=>{i(u)}))}},[o.source,o.options]);const l=c=>{const u={...En,...n},d=c.target;d.checked?u.value.push(d.value):u.value=u.value.filter(m=>m!=d.value),t(u)},s=Math.random().toString(36).substring(2,15);return p.jsx(p.Fragment,{children:p.jsx("article",{children:p.jsxs("div",{className:"flex flex-column gap-2",children:[p.jsx("label",{htmlFor:s,children:o.label}),a.map(c=>p.jsxs("div",{className:"flex align-items-center",children:[p.jsx($s,{inputId:c.value,name:"value",value:c.value,onChange:l,checked:o.value.includes(c.value)}),p.jsx("label",{htmlFor:c.value,className:"ml-2",children:c.label})]},c.value))]})})})},Cm=n=>({});var Fs;function ai(){return ai=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)({}).hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},ai.apply(null,arguments)}var Om=function(t){return f.createElement("svg",ai({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},t),Fs||(Fs=f.createElement("path",{d:"M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm337 113L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"})))};const qm=({option:n,onChange:t,index:e})=>{const[o,r]=y.useState(n),a=m=>{const v={value:o.value,label:o.label,[m.target.name]:m.target.value};r(v),t(v)};y.useEffect(()=>{r(n)},[n]);const{attributes:i,listeners:l,setNodeRef:s,setActivatorNodeRef:c,transform:u}=Ro({id:e}),d={transform:Ut.Transform.toString(u)};return p.jsx(p.Fragment,{children:p.jsxs("div",{className:"flex flex-row gap-2",ref:s,style:d,...i,children:[p.jsx(Et,{icon:"pi pi-sort",className:"px-0 border-noround border-0",style:{width:"1rem",color:"#E1E1E1",background:"transparent"},severity:"secondary",size:"small",ref:c,...l}),p.jsxs("div",{className:"p-inputgroup flex-1",children:[p.jsx(Fe,{id:"value",value:o.value,name:"value",onChange:a,className:"flex-1",placeholder:"Value"}),p.jsx(Fe,{id:"label",value:o.label,name:"label",onChange:a,className:"flex-1",placeholder:"Label"})]}),p.jsx(Et,{icon:"pi pi-trash",onClick:()=>t(null)})]})})},Pm=({onInsert:n})=>{const t={value:"",label:""},[e,o]=y.useState(t),r=i=>{const l={value:e.value,label:e.label,[i.target.name]:i.target.value};o(l)},a=()=>{n({value:e.value,label:e.label}),o(t)};return p.jsx(p.Fragment,{children:p.jsxs("div",{className:"flex flex-row gap-2",children:[p.jsxs("div",{className:"p-inputgroup flex-1",children:[p.jsx(Fe,{id:"value",value:e.value,name:"value",onChange:r,className:"",placeholder:"Value"}),p.jsx(Fe,{id:"label",value:e.label,name:"label",onChange:r,className:"",placeholder:"Label"})]}),p.jsx(Et,{icon:"pi pi-plus",onClick:a})]})})},Tm=({item:n,onChange:t,form:e,config:o})=>{const[r,a]=y.useState({...En,...n}),i=(u,d)=>{const m=Wt(r.options);u?m[d]=u:m.splice(d,1);const v={...r,options:m};a(v),t(v)},l=u=>{const d=Wt(r.options);d.push(u);const m={...r,options:d};a(m),t(m)},s=Oo(bn(er),bn(Qn,{coordinateGetter:$o}));function c(u){const{active:d,over:m}=u;if(m&&d.id!==m.id){let v=function(C){return parseInt(C.replace("option-",""))};const E=wn(r.options,v(m.id.toString()),v(d.id.toString())),h={...r,options:E};a(h),t(h)}}return p.jsx(p.Fragment,{children:p.jsxs("div",{className:"form-item flex flex-column gap-4",children:[p.jsx(jo,{sensors:s,collisionDetection:qo,onDragEnd:c,children:p.jsx(Ao,{items:r.options.map((u,d)=>`option-${d}`),strategy:ni,children:r.options.map((u,d)=>p.jsx(qm,{option:u,index:`option-${d}`,onChange:m=>{i(m,d)}},`option-${d}`))})}),p.jsx(Pm,{onInsert:l},"item-new")]})})},Im=({item:n,onChange:t,form:e,config:o})=>{const[r,a]=y.useState({...En,...n}),i=l=>{const s={...r,[l.target.name]:l.target.value};a(s),t(s)};return y.useEffect(()=>{a({...En,...n})},[n]),p.jsx(p.Fragment,{children:p.jsxs(Jt,{activeIndex:0,children:[p.jsx(jt,{header:"General",children:p.jsx("div",{className:"form-item flex flex-column gap-4",children:p.jsxs("div",{className:"flex flex-column gap-2",children:[p.jsx("label",{htmlFor:"label",children:"Label"}),p.jsx(Fe,{id:"label",value:r.label||"",name:"label",onChange:i,className:"w-full"})]})})},"general"),p.jsxs(jt,{header:"Options",children:[o.external_select_options.map(l=>p.jsxs("div",{className:"flex align-items-center",children:[p.jsx(xn,{inputId:l.key,name:"source",value:l.key,onChange:i,checked:r.source===l.key}),p.jsx("label",{htmlFor:l.key,className:"ml-2",children:l.label})]},l.key)),p.jsxs("div",{className:"flex align-items-center",children:[p.jsx(xn,{inputId:"local",name:"source",value:"local",onChange:i,checked:r.source==="local"}),p.jsx("label",{htmlFor:"local",className:"ml-2",children:"Custom"})]},"local"),p.jsx("div",{className:"mt-4",children:r.source==="local"&&p.jsx(Tm,{item:r,onChange:t,config:o,form:e})})]},"options")]})})},_m=n=>({}),km=new pn({type:En.type,form:new Ot({render:Sm,validation:Cm}),settings:new Ot({render:Im,validation:_m}),heading:"Checkbox input",description:"select one or more items from a checkbox",hidden:!1,icon:Om,data:En}),Sn={id:rn(),type:"input-radio",label:"",value:"",source:"local",options:[]},jm=({item:n,onChange:t,config:e})=>{const[o,r]=y.useState({...Sn,...n}),[a,i]=y.useState(o.options);y.useEffect(()=>{r({...Sn,...n})},[n]),y.useEffect(()=>{if(i(o.options),o.source!="local"){const c=e.external_select_options.find(u=>u.key==o.source);c&&(c.options&&i(c.options),c.options_func&&c.options_func().then(u=>{i(u)}))}},[o.source,o.options]);const l=c=>{const u={...Sn,...n,value:c.target.value};t(u)},s=Math.random().toString(36).substring(2,15);return p.jsx(p.Fragment,{children:p.jsx("article",{children:p.jsxs("div",{className:"flex flex-column gap-2",children:[p.jsx("label",{htmlFor:s,children:o.label}),a.map(c=>p.jsxs("div",{className:"flex align-items-center",children:[p.jsx(xn,{inputId:c.value,name:"value",value:c.value,onChange:l,checked:o.value==c.value}),p.jsx("label",{htmlFor:c.value,className:"ml-2",children:c.label})]},c.value))]})})})},Dm=n=>({});var Ms;function ii(){return ii=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)({}).hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},ii.apply(null,arguments)}var Nm=function(t){return f.createElement("svg",ii({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},t),Ms||(Ms=f.createElement("path",{d:"M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192"})))};const Am=({option:n,onChange:t,index:e})=>{const[o,r]=y.useState(n),a=m=>{const v={value:o.value,label:o.label,[m.target.name]:m.target.value};r(v),t(v)};y.useEffect(()=>{r(n)},[n]);const{attributes:i,listeners:l,setNodeRef:s,setActivatorNodeRef:c,transform:u}=Ro({id:e}),d={transform:Ut.Transform.toString(u)};return p.jsx(p.Fragment,{children:p.jsxs("div",{className:"flex flex-row gap-2",ref:s,style:d,...i,children:[p.jsx(Et,{icon:"pi pi-sort",className:"px-0 border-noround border-0",style:{width:"1rem",color:"#E1E1E1",background:"transparent"},severity:"secondary",size:"small",ref:c,...l}),p.jsxs("div",{className:"p-inputgroup flex-1",children:[p.jsx(Fe,{id:"value",value:o.value,name:"value",onChange:a,className:"flex-1",placeholder:"Value"}),p.jsx(Fe,{id:"label",value:o.label,name:"label",onChange:a,className:"flex-1",placeholder:"Label"})]}),p.jsx(Et,{icon:"pi pi-trash",onClick:()=>t(null)})]})})},Rm=({onInsert:n})=>{const t={value:"",label:""},[e,o]=y.useState(t),r=i=>{const l={value:e.value,label:e.label,[i.target.name]:i.target.value};o(l)},a=()=>{n({value:e.value,label:e.label}),o(t)};return p.jsx(p.Fragment,{children:p.jsxs("div",{className:"flex flex-row gap-2",children:[p.jsxs("div",{className:"p-inputgroup flex-1",children:[p.jsx(Fe,{id:"value",value:e.value,name:"value",onChange:r,className:"",placeholder:"Value"}),p.jsx(Fe,{id:"label",value:e.label,name:"label",onChange:r,className:"",placeholder:"Label"})]}),p.jsx(Et,{icon:"pi pi-plus",onClick:a})]})})},Lm=({item:n,onChange:t,form:e,config:o})=>{const[r,a]=y.useState({...Sn,...n}),i=(u,d)=>{const m=Wt(r.options);u?m[d]=u:m.splice(d,1);const v={...r,options:m};a(v),t(v)},l=u=>{const d=Wt(r.options);d.push(u);const m={...r,options:d};a(m),t(m)},s=Oo(bn(er),bn(Qn,{coordinateGetter:$o}));function c(u){const{active:d,over:m}=u;if(m&&d.id!==m.id){let v=function(C){return parseInt(C.replace("option-",""))};const E=wn(r.options,v(m.id.toString()),v(d.id.toString())),h={...r,options:E};a(h),t(h)}}return p.jsx(p.Fragment,{children:p.jsxs("div",{className:"form-item flex flex-column gap-4",children:[p.jsx(jo,{sensors:s,collisionDetection:qo,onDragEnd:c,children:p.jsx(Ao,{items:r.options.map((u,d)=>`option-${d}`),strategy:ni,children:r.options.map((u,d)=>p.jsx(Am,{option:u,index:`option-${d}`,onChange:m=>{i(m,d)}},`option-${d}`))})}),p.jsx(Rm,{onInsert:l},"item-new")]})})},$m=({item:n,onChange:t,form:e,config:o})=>{const[r,a]=y.useState({...Sn,...n}),i=l=>{const s={...r,[l.target.name]:l.target.value};a(s),t(s)};return y.useEffect(()=>{a({...Sn,...n})},[n]),p.jsx(p.Fragment,{children:p.jsxs(Jt,{activeIndex:0,children:[p.jsx(jt,{header:"General",children:p.jsx("div",{className:"form-item flex flex-column gap-4",children:p.jsxs("div",{className:"flex flex-column gap-2",children:[p.jsx("label",{htmlFor:"label",children:"Label"}),p.jsx(Fe,{id:"label",value:r.label||"",name:"label",onChange:i,className:"w-full"})]})})},"general"),p.jsxs(jt,{header:"Options",children:[o.external_select_options.map(l=>p.jsxs("div",{className:"flex align-items-center",children:[p.jsx(xn,{inputId:l.key,name:"source",value:l.key,onChange:i,checked:r.source===l.key}),p.jsx("label",{htmlFor:l.key,className:"ml-2",children:l.label})]},l.key)),p.jsxs("div",{className:"flex align-items-center",children:[p.jsx(xn,{inputId:"local",name:"source",value:"local",onChange:i,checked:r.source==="local"}),p.jsx("label",{htmlFor:"local",className:"ml-2",children:"Custom"})]},"local"),p.jsx("div",{className:"mt-4",children:r.source==="local"&&p.jsx(Lm,{item:r,onChange:t,config:o,form:e})})]},"options")]})})},Fm=n=>({}),Mm=new pn({type:Sn.type,form:new Ot({render:jm,validation:Dm}),settings:new Ot({render:$m,validation:Fm}),heading:"Radio input",description:"select an item from a radio group",hidden:!1,icon:Nm,data:Sn}),tr=new Gr(new Yr({label:"Inputs"}));tr.registerItem(Od),tr.registerItem(lm),tr.registerItem(pm),tr.registerItem(km),tr.registerItem(Mm);const nr={id:rn(),type:"special-signature",label:"",value:[],color:"#000000"};/*!
 * Signature Pad v5.0.3 | https://github.com/szimek/signature_pad
 * (c) 2024 Szymon Nowak | Released under the MIT license
 */class Bo{constructor(t,e,o,r){if(isNaN(t)||isNaN(e))throw new Error(`Point is invalid: (${t}, ${e})`);this.x=+t,this.y=+e,this.pressure=o||0,this.time=r||Date.now()}distanceTo(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))}equals(t){return this.x===t.x&&this.y===t.y&&this.pressure===t.pressure&&this.time===t.time}velocityFrom(t){return this.time!==t.time?this.distanceTo(t)/(this.time-t.time):0}}class li{static fromPoints(t,e){const o=this.calculateControlPoints(t[0],t[1],t[2]).c2,r=this.calculateControlPoints(t[1],t[2],t[3]).c1;return new li(t[1],o,r,t[2],e.start,e.end)}static calculateControlPoints(t,e,o){const r=t.x-e.x,a=t.y-e.y,i=e.x-o.x,l=e.y-o.y,s={x:(t.x+e.x)/2,y:(t.y+e.y)/2},c={x:(e.x+o.x)/2,y:(e.y+o.y)/2},u=Math.sqrt(r*r+a*a),d=Math.sqrt(i*i+l*l),m=s.x-c.x,v=s.y-c.y,E=u+d==0?0:d/(u+d),h={x:c.x+m*E,y:c.y+v*E},C=e.x-h.x,x=e.y-h.y;return{c1:new Bo(s.x+C,s.y+x),c2:new Bo(c.x+C,c.y+x)}}constructor(t,e,o,r,a,i){this.startPoint=t,this.control2=e,this.control1=o,this.endPoint=r,this.startWidth=a,this.endWidth=i}length(){let e=0,o,r;for(let a=0;a<=10;a+=1){const i=a/10,l=this.point(i,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),s=this.point(i,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(a>0){const c=l-o,u=s-r;e+=Math.sqrt(c*c+u*u)}o=l,r=s}return e}point(t,e,o,r,a){return e*(1-t)*(1-t)*(1-t)+3*o*(1-t)*(1-t)*t+3*r*(1-t)*t*t+a*t*t*t}}class zm{constructor(){try{this._et=new EventTarget}catch{this._et=document}}addEventListener(t,e,o){this._et.addEventListener(t,e,o)}dispatchEvent(t){return this._et.dispatchEvent(t)}removeEventListener(t,e,o){this._et.removeEventListener(t,e,o)}}function Hm(n,t=250){let e=0,o=null,r,a,i;const l=()=>{e=Date.now(),o=null,r=n.apply(a,i),o||(a=null,i=[])};return function(...c){const u=Date.now(),d=t-(u-e);return a=this,i=c,d<=0||d>t?(o&&(clearTimeout(o),o=null),e=u,r=n.apply(a,i),o||(a=null,i=[])):o||(o=window.setTimeout(l,d)),r}}class Wo extends zm{constructor(t,e={}){var o,r,a;super(),this.canvas=t,this._drawingStroke=!1,this._isEmpty=!0,this._lastPoints=[],this._data=[],this._lastVelocity=0,this._lastWidth=0,this._handleMouseDown=i=>{!this._isLeftButtonPressed(i,!0)||this._drawingStroke||this._strokeBegin(this._pointerEventToSignatureEvent(i))},this._handleMouseMove=i=>{if(!this._isLeftButtonPressed(i,!0)||!this._drawingStroke){this._strokeEnd(this._pointerEventToSignatureEvent(i),!1);return}this._strokeMoveUpdate(this._pointerEventToSignatureEvent(i))},this._handleMouseUp=i=>{this._isLeftButtonPressed(i)||this._strokeEnd(this._pointerEventToSignatureEvent(i))},this._handleTouchStart=i=>{i.targetTouches.length!==1||this._drawingStroke||(i.cancelable&&i.preventDefault(),this._strokeBegin(this._touchEventToSignatureEvent(i)))},this._handleTouchMove=i=>{if(i.targetTouches.length===1){if(i.cancelable&&i.preventDefault(),!this._drawingStroke){this._strokeEnd(this._touchEventToSignatureEvent(i),!1);return}this._strokeMoveUpdate(this._touchEventToSignatureEvent(i))}},this._handleTouchEnd=i=>{i.targetTouches.length===0&&(i.cancelable&&i.preventDefault(),this.canvas.removeEventListener("touchmove",this._handleTouchMove),this._strokeEnd(this._touchEventToSignatureEvent(i)))},this._handlePointerDown=i=>{!this._isLeftButtonPressed(i)||this._drawingStroke||(i.preventDefault(),this._strokeBegin(this._pointerEventToSignatureEvent(i)))},this._handlePointerMove=i=>{if(!this._isLeftButtonPressed(i,!0)||!this._drawingStroke){this._strokeEnd(this._pointerEventToSignatureEvent(i),!1);return}i.preventDefault(),this._strokeMoveUpdate(this._pointerEventToSignatureEvent(i))},this._handlePointerUp=i=>{this._isLeftButtonPressed(i)||(i.preventDefault(),this._strokeEnd(this._pointerEventToSignatureEvent(i)))},this.velocityFilterWeight=e.velocityFilterWeight||.7,this.minWidth=e.minWidth||.5,this.maxWidth=e.maxWidth||2.5,this.throttle=(o=e.throttle)!==null&&o!==void 0?o:16,this.minDistance=(r=e.minDistance)!==null&&r!==void 0?r:5,this.dotSize=e.dotSize||0,this.penColor=e.penColor||"black",this.backgroundColor=e.backgroundColor||"rgba(0,0,0,0)",this.compositeOperation=e.compositeOperation||"source-over",this.canvasContextOptions=(a=e.canvasContextOptions)!==null&&a!==void 0?a:{},this._strokeMoveUpdate=this.throttle?Hm(Wo.prototype._strokeUpdate,this.throttle):Wo.prototype._strokeUpdate,this._ctx=t.getContext("2d",this.canvasContextOptions),this.clear(),this.on()}clear(){const{_ctx:t,canvas:e}=this;t.fillStyle=this.backgroundColor,t.clearRect(0,0,e.width,e.height),t.fillRect(0,0,e.width,e.height),this._data=[],this._reset(this._getPointGroupOptions()),this._isEmpty=!0}fromDataURL(t,e={}){return new Promise((o,r)=>{const a=new Image,i=e.ratio||window.devicePixelRatio||1,l=e.width||this.canvas.width/i,s=e.height||this.canvas.height/i,c=e.xOffset||0,u=e.yOffset||0;this._reset(this._getPointGroupOptions()),a.onload=()=>{this._ctx.drawImage(a,c,u,l,s),o()},a.onerror=d=>{r(d)},a.crossOrigin="anonymous",a.src=t,this._isEmpty=!1})}toDataURL(t="image/png",e){switch(t){case"image/svg+xml":return typeof e!="object"&&(e=void 0),`data:image/svg+xml;base64,${btoa(this.toSVG(e))}`;default:return typeof e!="number"&&(e=void 0),this.canvas.toDataURL(t,e)}}on(){this.canvas.style.touchAction="none",this.canvas.style.msTouchAction="none",this.canvas.style.userSelect="none";const t=/Macintosh/.test(navigator.userAgent)&&"ontouchstart"in document;window.PointerEvent&&!t?this._handlePointerEvents():(this._handleMouseEvents(),"ontouchstart"in window&&this._handleTouchEvents())}off(){this.canvas.style.touchAction="auto",this.canvas.style.msTouchAction="auto",this.canvas.style.userSelect="auto",this.canvas.removeEventListener("pointerdown",this._handlePointerDown),this.canvas.removeEventListener("mousedown",this._handleMouseDown),this.canvas.removeEventListener("touchstart",this._handleTouchStart),this._removeMoveUpEventListeners()}_getListenerFunctions(){var t;const e=window.document===this.canvas.ownerDocument?window:(t=this.canvas.ownerDocument.defaultView)!==null&&t!==void 0?t:this.canvas.ownerDocument;return{addEventListener:e.addEventListener.bind(e),removeEventListener:e.removeEventListener.bind(e)}}_removeMoveUpEventListeners(){const{removeEventListener:t}=this._getListenerFunctions();t("pointermove",this._handlePointerMove),t("pointerup",this._handlePointerUp),t("mousemove",this._handleMouseMove),t("mouseup",this._handleMouseUp),t("touchmove",this._handleTouchMove),t("touchend",this._handleTouchEnd)}isEmpty(){return this._isEmpty}fromData(t,{clear:e=!0}={}){e&&this.clear(),this._fromData(t,this._drawCurve.bind(this),this._drawDot.bind(this)),this._data=this._data.concat(t)}toData(){return this._data}_isLeftButtonPressed(t,e){return e?t.buttons===1:(t.buttons&1)===1}_pointerEventToSignatureEvent(t){return{event:t,type:t.type,x:t.clientX,y:t.clientY,pressure:"pressure"in t?t.pressure:0}}_touchEventToSignatureEvent(t){const e=t.changedTouches[0];return{event:t,type:t.type,x:e.clientX,y:e.clientY,pressure:e.force}}_getPointGroupOptions(t){return{penColor:t&&"penColor"in t?t.penColor:this.penColor,dotSize:t&&"dotSize"in t?t.dotSize:this.dotSize,minWidth:t&&"minWidth"in t?t.minWidth:this.minWidth,maxWidth:t&&"maxWidth"in t?t.maxWidth:this.maxWidth,velocityFilterWeight:t&&"velocityFilterWeight"in t?t.velocityFilterWeight:this.velocityFilterWeight,compositeOperation:t&&"compositeOperation"in t?t.compositeOperation:this.compositeOperation}}_strokeBegin(t){if(!this.dispatchEvent(new CustomEvent("beginStroke",{detail:t,cancelable:!0})))return;const{addEventListener:o}=this._getListenerFunctions();switch(t.event.type){case"mousedown":o("mousemove",this._handleMouseMove),o("mouseup",this._handleMouseUp);break;case"touchstart":o("touchmove",this._handleTouchMove),o("touchend",this._handleTouchEnd);break;case"pointerdown":o("pointermove",this._handlePointerMove),o("pointerup",this._handlePointerUp);break}this._drawingStroke=!0;const r=this._getPointGroupOptions(),a=Object.assign(Object.assign({},r),{points:[]});this._data.push(a),this._reset(r),this._strokeUpdate(t)}_strokeUpdate(t){if(!this._drawingStroke)return;if(this._data.length===0){this._strokeBegin(t);return}this.dispatchEvent(new CustomEvent("beforeUpdateStroke",{detail:t}));const e=this._createPoint(t.x,t.y,t.pressure),o=this._data[this._data.length-1],r=o.points,a=r.length>0&&r[r.length-1],i=a?e.distanceTo(a)<=this.minDistance:!1,l=this._getPointGroupOptions(o);if(!a||!(a&&i)){const s=this._addPoint(e,l);a?s&&this._drawCurve(s,l):this._drawDot(e,l),r.push({time:e.time,x:e.x,y:e.y,pressure:e.pressure})}this.dispatchEvent(new CustomEvent("afterUpdateStroke",{detail:t}))}_strokeEnd(t,e=!0){this._removeMoveUpEventListeners(),this._drawingStroke&&(e&&this._strokeUpdate(t),this._drawingStroke=!1,this.dispatchEvent(new CustomEvent("endStroke",{detail:t})))}_handlePointerEvents(){this._drawingStroke=!1,this.canvas.addEventListener("pointerdown",this._handlePointerDown)}_handleMouseEvents(){this._drawingStroke=!1,this.canvas.addEventListener("mousedown",this._handleMouseDown)}_handleTouchEvents(){this.canvas.addEventListener("touchstart",this._handleTouchStart)}_reset(t){this._lastPoints=[],this._lastVelocity=0,this._lastWidth=(t.minWidth+t.maxWidth)/2,this._ctx.fillStyle=t.penColor,this._ctx.globalCompositeOperation=t.compositeOperation}_createPoint(t,e,o){const r=this.canvas.getBoundingClientRect();return new Bo(t-r.left,e-r.top,o,new Date().getTime())}_addPoint(t,e){const{_lastPoints:o}=this;if(o.push(t),o.length>2){o.length===3&&o.unshift(o[0]);const r=this._calculateCurveWidths(o[1],o[2],e),a=li.fromPoints(o,r);return o.shift(),a}return null}_calculateCurveWidths(t,e,o){const r=o.velocityFilterWeight*e.velocityFrom(t)+(1-o.velocityFilterWeight)*this._lastVelocity,a=this._strokeWidth(r,o),i={end:a,start:this._lastWidth};return this._lastVelocity=r,this._lastWidth=a,i}_strokeWidth(t,e){return Math.max(e.maxWidth/(t+1),e.minWidth)}_drawCurveSegment(t,e,o){const r=this._ctx;r.moveTo(t,e),r.arc(t,e,o,0,2*Math.PI,!1),this._isEmpty=!1}_drawCurve(t,e){const o=this._ctx,r=t.endWidth-t.startWidth,a=Math.ceil(t.length())*2;o.beginPath(),o.fillStyle=e.penColor;for(let i=0;i<a;i+=1){const l=i/a,s=l*l,c=s*l,u=1-l,d=u*u,m=d*u;let v=m*t.startPoint.x;v+=3*d*l*t.control1.x,v+=3*u*s*t.control2.x,v+=c*t.endPoint.x;let E=m*t.startPoint.y;E+=3*d*l*t.control1.y,E+=3*u*s*t.control2.y,E+=c*t.endPoint.y;const h=Math.min(t.startWidth+c*r,e.maxWidth);this._drawCurveSegment(v,E,h)}o.closePath(),o.fill()}_drawDot(t,e){const o=this._ctx,r=e.dotSize>0?e.dotSize:(e.minWidth+e.maxWidth)/2;o.beginPath(),this._drawCurveSegment(t.x,t.y,r),o.closePath(),o.fillStyle=e.penColor,o.fill()}_fromData(t,e,o){for(const r of t){const{points:a}=r,i=this._getPointGroupOptions(r);if(a.length>1)for(let l=0;l<a.length;l+=1){const s=a[l],c=new Bo(s.x,s.y,s.pressure,s.time);l===0&&this._reset(i);const u=this._addPoint(c,i);u&&e(u,i)}else this._reset(i),o(a[0],i)}}toSVG({includeBackgroundColor:t=!1}={}){const e=this._data,o=Math.max(window.devicePixelRatio||1,1),r=0,a=0,i=this.canvas.width/o,l=this.canvas.height/o,s=document.createElementNS("http://www.w3.org/2000/svg","svg");if(s.setAttribute("xmlns","http://www.w3.org/2000/svg"),s.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),s.setAttribute("viewBox",`${r} ${a} ${i} ${l}`),s.setAttribute("width",i.toString()),s.setAttribute("height",l.toString()),t&&this.backgroundColor){const c=document.createElement("rect");c.setAttribute("width","100%"),c.setAttribute("height","100%"),c.setAttribute("fill",this.backgroundColor),s.appendChild(c)}return this._fromData(e,(c,{penColor:u})=>{const d=document.createElement("path");if(!isNaN(c.control1.x)&&!isNaN(c.control1.y)&&!isNaN(c.control2.x)&&!isNaN(c.control2.y)){const m=`M ${c.startPoint.x.toFixed(3)},${c.startPoint.y.toFixed(3)} C ${c.control1.x.toFixed(3)},${c.control1.y.toFixed(3)} ${c.control2.x.toFixed(3)},${c.control2.y.toFixed(3)} ${c.endPoint.x.toFixed(3)},${c.endPoint.y.toFixed(3)}`;d.setAttribute("d",m),d.setAttribute("stroke-width",(c.endWidth*2.25).toFixed(3)),d.setAttribute("stroke",u),d.setAttribute("fill","none"),d.setAttribute("stroke-linecap","round"),s.appendChild(d)}},(c,{penColor:u,dotSize:d,minWidth:m,maxWidth:v})=>{const E=document.createElement("circle"),h=d>0?d:(m+v)/2;E.setAttribute("r",h.toString()),E.setAttribute("cx",c.x.toString()),E.setAttribute("cy",c.y.toString()),E.setAttribute("fill",u),s.appendChild(E)}),s.outerHTML}}function Bm(n,t,e){var o=e||{},r=o.noTrailing,a=r===void 0?!1:r,i=o.noLeading,l=i===void 0?!1:i,s=o.debounceMode,c=s===void 0?void 0:s,u,d=!1,m=0;function v(){u&&clearTimeout(u)}function E(C){var x=C||{},S=x.upcomingOnly,O=S===void 0?!1:S;v(),d=!O}function h(){for(var C=arguments.length,x=new Array(C),S=0;S<C;S++)x[S]=arguments[S];var O=this,P=Date.now()-m;if(d)return;function w(){m=Date.now(),t.apply(O,x)}function T(){u=void 0}!l&&c&&!u&&w(),v(),c===void 0&&P>n?l?(m=Date.now(),a||(u=setTimeout(c?T:w,n))):w():a!==!0&&(u=setTimeout(c?T:w,c===void 0?n-P:n))}return h.cancel=E,h}function Wm(n,t,e){var o={},r=o.atBegin,a=r===void 0?!1:r;return Bm(n,t,{debounceMode:a!==!1})}class Vo extends f.PureComponent{constructor(t){super(t),Object.defineProperty(this,"canvasRef",{enumerable:!0,configurable:!0,writable:!0,value:f.createRef()}),Object.defineProperty(this,"signaturePad",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"callResizeHandler",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.state={canvasWidth:0,canvasHeight:0},this.callResizeHandler=Wm(this.props.debounceInterval,this.handleResize.bind(this))}componentDidMount(){const t=this.canvasRef.current;t&&(this.props.width&&this.props.height||(t.style.width="100%",window.addEventListener("resize",this.callResizeHandler)),this.signaturePad=new Wo(t,this.props.options),this.scaleCanvas(t))}componentWillUnmount(){this.props.width&&this.props.height||window.removeEventListener("resize",this.callResizeHandler),this.signaturePad.off()}get instance(){return this.signaturePad}get canvas(){return this.canvasRef}set dotSize(t){this.signaturePad.dotSize=t}get dotSize(){return this.signaturePad.dotSize}set minWidth(t){this.signaturePad.minWidth=t}get minWidth(){return this.signaturePad.minWidth}set maxWidth(t){this.signaturePad.maxWidth=t}get maxWidth(){return this.signaturePad.maxWidth}set throttle(t){this.signaturePad.throttle=t}get throttle(){return this.signaturePad.throttle}set backgroundColor(t){this.signaturePad.backgroundColor=t}get backgroundColor(){return this.signaturePad.backgroundColor}set penColor(t){this.signaturePad.penColor=t}get penColor(){return this.signaturePad.penColor}set velocityFilterWeight(t){this.signaturePad.velocityFilterWeight=t}get velocityFilterWeight(){return this.signaturePad.velocityFilterWeight}isEmpty(){return this.signaturePad.isEmpty()}clear(){this.signaturePad.clear()}fromDataURL(t,e={}){this.signaturePad.fromDataURL(t,e)}toDataURL(t,e){return this.signaturePad.toDataURL(t,e)}toSVG(t){return this.signaturePad.toSVG(t)}fromData(t){this.signaturePad.fromData(t)}toData(){return this.signaturePad.toData()}off(){this.signaturePad.off()}on(){this.signaturePad.on()}handleResize(){const t=this.canvasRef.current;t&&this.scaleCanvas(t)}scaleCanvas(t){const e=Math.max(window.devicePixelRatio||1,1),o=(this.props.width||t.offsetWidth)*e,r=(this.props.height||t.offsetHeight)*e,{canvasWidth:a,canvasHeight:i}=this.state;if(o===a&&r===i)return;let l;this.props.redrawOnResize&&this.signaturePad&&!this.signaturePad.isEmpty()&&(l=this.signaturePad.toDataURL()),t.width=o,t.height=r,this.setState({canvasWidth:o,canvasHeight:r});const s=t.getContext("2d");s&&s.scale(e,e),l?this.signaturePad.fromDataURL(l):this.signaturePad&&this.signaturePad.clear()}render(){const{canvasProps:t}=this.props;return f.createElement("canvas",Object.assign({"data-testid":"canvas-element",ref:this.canvasRef},t))}}Object.defineProperty(Vo,"displayName",{enumerable:!0,configurable:!0,writable:!0,value:"react-signature-pad-wrapper"}),Object.defineProperty(Vo,"propTypes",{enumerable:!0,configurable:!0,writable:!0,value:{width:_n.number,height:_n.number,options:_n.object,canvasProps:_n.object,redrawOnResize:_n.bool.isRequired,debounceInterval:_n.number.isRequired}}),Object.defineProperty(Vo,"defaultProps",{enumerable:!0,configurable:!0,writable:!0,value:{redrawOnResize:!1,debounceInterval:150}});const Vm=({item:n,onChange:t,config:e})=>{const[o,r]=y.useState({...nr,...n});y.useEffect(()=>{r({...nr,...n})},[n]);const a=Math.random().toString(36).substring(2,15),i=y.createRef(),l=()=>{const u=i.current;u&&u.instance.clear();const d=Wt(o);d.value=[],r(d),t(d)},s=()=>{const u=i.current;if(!u)return;const d=Wt(o);u.isEmpty()?d.value=[]:d.value=u.toData(),r(d),t(d)};y.useEffect(()=>{o.value&&i.current&&i.current.fromData(o.value)},[o]);const c={height:"10rem",width:"100%",border:"1px solid #cccccc",boxShadow:"0 0 0.32rem #ccc inset"};return p.jsx(p.Fragment,{children:p.jsx("article",{children:p.jsxs("div",{className:"flex flex-column gap-2",children:[p.jsx("label",{htmlFor:a,children:o.label}),p.jsx("div",{children:p.jsx(Vo,{ref:i,options:{penColor:"rgb(0, 0, 0)"},redrawOnResize:!0,canvasProps:{style:c}})}),p.jsx("button",{onClick:l,children:"clear"}),p.jsx("button",{onClick:s,children:"save"})]})})})},Um=n=>({});var zs;function si(){return si=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)({}).hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},si.apply(null,arguments)}var Km=function(t){return f.createElement("svg",si({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},t),zs||(zs=f.createElement("path",{d:"M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64v-19.3c-2.7 1.1-5.4 2-8.2 2.7l-60.1 15c-3 .7-6 1.2-9 1.4-.9.1-1.8.2-2.7.2h-64c-6.1 0-11.6-3.4-14.3-8.8l-8.8-17.7c-1.7-3.4-5.1-5.5-8.8-5.5s-7.2 2.1-8.8 5.5l-8.8 17.7c-2.9 5.9-9.2 9.4-15.7 8.8s-12.1-5.1-13.9-11.3L144 381l-9.8 32.8c-6.1 20.3-24.8 34.2-46 34.2H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h8.2c7.1 0 13.3-4.6 15.3-11.4l14.9-49.5c3.4-11.3 13.8-19.1 25.6-19.1s22.2 7.8 25.6 19.1l11.6 38.6c7.4-6.2 16.8-9.7 26.8-9.7 15.9 0 30.4 9 37.5 23.2l4.4 8.8h8.9c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l94.8-94.8V160H256c-17.7 0-32-14.3-32-32V0zm192 0v128h128zm293.8 139.7c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6zM311.9 321c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5.2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4l129.2-129.3-71-71z"})))};const Ym=({item:n,onChange:t,config:e})=>{const[o,r]=y.useState({...nr,...n}),a=i=>{const l={...o,[i.target.name]:i.target.value};r(l),t(l)};return y.useEffect(()=>{r({...nr,...n})},[n]),p.jsx(p.Fragment,{children:p.jsx(Jt,{activeIndex:0,children:p.jsx(jt,{header:"General",children:p.jsx("div",{className:"form-item flex flex-column gap-4",children:p.jsxs("div",{className:"flex flex-column gap-2",children:[p.jsx("label",{htmlFor:"label",children:"Label"}),p.jsx(Fe,{id:"label",value:o.label||"",name:"label",onChange:a,className:"w-full"})]})})},"general")})})},Gm=n=>({}),Xm=new pn({type:nr.type,form:new Ot({render:Vm,validation:Um}),settings:new Ot({render:Ym,validation:Gm}),heading:"Signature",description:"Signature capture block",hidden:!1,icon:Km,data:nr}),Rn={id:rn(),type:"embedded-form",label:"",form_id:"",items:[]},Jm=({item:n,onChange:t,form:e,config:o})=>{const[r,a]=y.useState({...Rn,...n}),[i,l]=y.useState();y.useEffect(()=>{a({...Rn,...n}),r.form_id&&r.form_id!=(i==null?void 0:i.id)&&l(o.forms.find(c=>c.id===r.form_id))},[n]);const s=c=>{const u=Wt(r);u.items=c.items,a(u),t(u)};return i?p.jsx(p.Fragment,{children:p.jsx("article",{children:p.jsxs("div",{className:"flex flex-column gap-2",children:[p.jsx("label",{children:r.label}),p.jsx(nc,{onChange:s,form:i,config:o})]})})}):p.jsx(p.Fragment,{children:p.jsx("div",{children:"No child form found"})})};var Hs;function ci(){return ci=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)({}).hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},ci.apply(null,arguments)}var Zm=function(t){return f.createElement("svg",ci({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},t),Hs||(Hs=f.createElement("path",{d:"M448 416v-64H64v64zm0 64H64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64M288 160c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h304c44.2 0 80 35.8 80 80v16h38.1c21.4 0 32.1 25.9 17 41L433 239c-9.4 9.4-24.6 9.4-33.9 0L329 169c-15.1-15.1-4.4-41 17-41h38.1v-16c0-8.8-7.2-16-16-16h-80v64z"})))};const Qm=({item:n,onChange:t,form:e,config:o})=>{const[r,a]=y.useState({...Rn,...n}),i=s=>{const c={...r,[s.target.name]:s.target.value};a(c),t(c)};y.useEffect(()=>{a({...Rn,...n})},[n]);const l=o.forms.map(s=>({value:s.id,label:s.label})).filter(s=>s.value!=e.id);return p.jsx(p.Fragment,{children:p.jsx(Jt,{activeIndex:0,children:p.jsxs(jt,{header:"General",children:[p.jsx("div",{className:"form-item flex flex-column gap-4",children:p.jsxs("div",{className:"flex flex-column gap-2",children:[p.jsx("label",{htmlFor:"label",children:"Label"}),p.jsx(Fe,{id:"label",value:r.label||"",name:"label",onChange:i,className:"w-full"})]})}),p.jsxs("div",{className:"flex flex-column gap-2",children:[p.jsx("label",{htmlFor:"form_id",children:"Form"}),p.jsx(za,{id:"form_id",value:r.form_id||"",onChange:i,options:l,name:"form_id",showClear:!0,placeholder:"Select a form",className:"w-full",children:" "})]})]},"general")})})},ev=n=>({}),tv=new pn({type:Rn.type,form:new Ot({render:Jm,validation:null}),settings:new Ot({render:Qm,validation:ev}),heading:"Embedded form",description:"Embed a form",hidden:!1,icon:Zm,data:Rn}),ui=new Gr(new Yr({label:"Special"}));ui.registerItem(Xm),ui.registerItem(tv);const Cn=new Gr;Cn.addRegistry(tr),Cn.addRegistry(Sl),Cn.addRegistry(ui);const Uo=({item:n,onChange:t,form:e,config:o})=>{const r=Cn.getByItem(n);return n&&r?y.createElement(r.form.render,{item:n,onChange:t,form:e,config:o}):y.createElement(()=>p.jsxs("div",{children:["The component ",n.type," was not found."]}))},nv=({item:n,onChange:t,form:e,config:o})=>{const r=Cn.getByItem(n);return n&&r?y.createElement(r.settings.render,{item:n,onChange:t,form:e,config:o}):y.createElement(()=>p.jsxs("div",{children:["The component ",n.type," was not found."]}))};var rv={root:"p-button-group p-component"},Ko=ke.extend({defaultProps:{__TYPE:"ButtonGroup",children:void 0},css:{classes:rv}}),Bs=f.memo(f.forwardRef(function(n,t){var e=Tt(),o=f.useContext(nt),r=Ko.getProps(n,o),a=f.useRef(t),i=Ko.setMetaData({props:r}),l=i.ptm,s=i.cx,c=i.isUnstyled;Bt(Ko.css.styles,c,{name:"buttongroup"}),f.useEffect(function(){L.combinedRefs(a,t)},[a,t]);var u=e({ref:a,className:ge(s("root")),role:"group"},Ko.getOtherProps(r),l("root"));return f.createElement("span",u,r.children)}));Bs.displayName="ButtonGroup";function di(){return di=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},di.apply(this,arguments)}var Ws=f.memo(f.forwardRef(function(n,t){var e=$t.getPTI(n);return f.createElement("svg",di({ref:t,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),f.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z",fill:"currentColor"}))}));Ws.displayName="WindowMaximizeIcon";function fi(){return fi=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},fi.apply(this,arguments)}var Vs=f.memo(f.forwardRef(function(n,t){var e=$t.getPTI(n);return f.createElement("svg",fi({ref:t,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),f.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z",fill:"currentColor"}))}));Vs.displayName="WindowMinimizeIcon";function pi(){return pi=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},pi.apply(this,arguments)}function Fr(n){"@babel/helpers - typeof";return Fr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Fr(n)}function mi(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}function ov(n){if(Array.isArray(n))return mi(n)}function av(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Us(n,t){if(n){if(typeof n=="string")return mi(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return mi(n,t)}}function iv(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lv(n){return ov(n)||av(n)||Us(n)||iv()}function sv(n,t){if(Fr(n)!=="object"||n===null)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var o=e.call(n,t||"default");if(Fr(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function cv(n){var t=sv(n,"string");return Fr(t)==="symbol"?t:String(t)}function vi(n,t,e){return t=cv(t),t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function uv(n){if(Array.isArray(n))return n}function dv(n,t){var e=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(e!=null){var o,r,a,i,l=[],s=!0,c=!1;try{if(a=(e=e.call(n)).next,t!==0)for(;!(s=(o=a.call(e)).done)&&(l.push(o.value),l.length!==t);s=!0);}catch(u){c=!0,r=u}finally{try{if(!s&&e.return!=null&&(i=e.return(),Object(i)!==i))return}finally{if(c)throw r}}return l}}function fv(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function On(n,t){return uv(n)||dv(n,t)||Us(n,t)||fv()}var pv="",Mr=ke.extend({defaultProps:{__TYPE:"FocusTrap",children:void 0},css:{styles:pv},getProps:function(t){return L.getMergedProps(t,Mr.defaultProps)},getOtherProps:function(t){return L.getDiffProps(t,Mr.defaultProps)}});function Ks(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,o)}return e}function mv(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?Ks(Object(e),!0).forEach(function(o){vi(n,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):Ks(Object(e)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(e,o))})}return n}var vv=y.memo(y.forwardRef(function(n,t){var e=y.useRef(null),o=y.useRef(null),r=y.useRef(null),a=y.useContext(nt),i=Mr.getProps(n,a),l={props:i};In(Mr.css.styles,{name:"focustrap"});var s=Mr.setMetaData(mv({},l));s.ptm,y.useImperativeHandle(t,function(){return{props:i,getInk:function(){return o.current},getTarget:function(){return e.current}}}),Ht(function(){i.disabled||(e.current=c(),u(e.current))});var c=function(){return o.current&&o.current.parentElement},u=function(C){var x=i||{},S=x.autoFocusSelector,O=S===void 0?"":S,P=x.firstFocusableSelector,w=P===void 0?"":P,T=x.autoFocus,_=T===void 0?!1:T,U="".concat(d(O)),R="[autofocus]".concat(U,", [data-pc-autofocus='true']").concat(U),k=$.getFirstFocusableElement(C,R);_&&!k&&(k=$.getFirstFocusableElement(C,d(w))),$.focus(k)},d=function(C){return':not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])'.concat(C??"")},m=function(C){var x,S=C.currentTarget,O=C.relatedTarget,P=O===S.$_pfocustrap_lasthiddenfocusableelement||!((x=e.current)!==null&&x!==void 0&&x.contains(O))?$.getFirstFocusableElement(S.parentElement,d(S.$_pfocustrap_focusableselector)):S.$_pfocustrap_lasthiddenfocusableelement;$.focus(P)},v=function(C){var x,S=C.currentTarget,O=C.relatedTarget,P=O===S.$_pfocustrap_firsthiddenfocusableelement||!((x=e.current)!==null&&x!==void 0&&x.contains(O))?$.getLastFocusableElement(S.parentElement,d(S.$_pfocustrap_focusableselector)):S.$_pfocustrap_firsthiddenfocusableelement;$.focus(P)},E=function(){var C=i||{},x=C.tabIndex,S=x===void 0?0:x,O=function(_,U){return y.createElement("span",{ref:U==="firstfocusableelement"?o:r,className:"p-hidden-accessible p-hidden-focusable",tabIndex:S,role:"presentation","aria-hidden":!0,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0,onFocus:_,"data-pc-section":U})},P=O(m,"firstfocusableelement"),w=O(v,"lastfocusableelement");return P.ref.current&&w.ref.current&&(P.ref.current.$_pfocustrap_lasthiddenfocusableelement=w.ref.current,w.ref.current.$_pfocustrap_firsthiddenfocusableelement=P.ref.current),y.createElement(y.Fragment,null,P,i.children,w)};return E()})),gv=vv;function Ys(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,o)}return e}function hv(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?Ys(Object(e),!0).forEach(function(o){vi(n,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):Ys(Object(e)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(e,o))})}return n}var bv={closeButtonIcon:"p-dialog-header-close-icon",closeButton:"p-dialog-header-icon p-dialog-header-close p-link",maximizableIcon:"p-dialog-header-maximize-icon",maximizableButton:"p-dialog-header-icon p-dialog-header-maximize p-link",header:function(t){var e=t.props;return ge("p-dialog-header",e.headerClassName)},headerTitle:"p-dialog-title",headerIcons:"p-dialog-header-icons",content:function(t){var e=t.props;return ge("p-dialog-content",e.contentClassName)},footer:function(t){var e=t.props;return ge("p-dialog-footer",e.footerClassName)},mask:function(t){var e=t.props,o=t.maskVisibleState,r=["center","left","right","top","top-left","top-right","bottom","bottom-left","bottom-right"],a=r.find(function(i){return i===e.position||i.replace("-","")===e.position});return ge("p-dialog-mask",a?"p-dialog-".concat(a):"",{"p-component-overlay p-component-overlay-enter":e.modal,"p-dialog-visible":o,"p-dialog-draggable":e.draggable,"p-dialog-resizable":e.resizable},e.maskClassName)},root:function(t){var e=t.props,o=t.maximized,r=t.context;return ge("p-dialog p-component",{"p-dialog-rtl":e.rtl,"p-dialog-maximized":o,"p-dialog-default":!o,"p-input-filled":r&&r.inputStyle==="filled"||rt.inputStyle==="filled","p-ripple-disabled":r&&r.ripple===!1||rt.ripple===!1})},transition:"p-dialog"},yv=`
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
`,wv={mask:function(t){var e=t.props;return hv({position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:e.position==="left"||e.position==="top-left"||e.position==="bottom-left"?"flex-start":e.position==="right"||e.position==="top-right"||e.position==="bottom-right"?"flex-end":"center",alignItems:e.position==="top"||e.position==="top-left"||e.position==="top-right"?"flex-start":e.position==="bottom"||e.position==="bottom-left"||e.position==="bottom-right"?"flex-end":"center",pointerEvents:!e.modal&&"none"},e.maskStyle)}},Yo=ke.extend({defaultProps:{__TYPE:"Dialog",__parentMetadata:null,appendTo:null,ariaCloseIconLabel:null,baseZIndex:0,blockScroll:!1,breakpoints:null,className:null,closable:!0,closeIcon:null,closeOnEscape:!0,content:null,contentClassName:null,contentStyle:null,dismissableMask:!1,draggable:!0,focusOnShow:!0,footer:null,footerClassName:null,header:null,headerClassName:null,headerStyle:null,icons:null,id:null,keepInViewport:!0,maskClassName:null,maskStyle:null,maximizable:!1,maximizeIcon:null,maximized:!1,minX:0,minY:0,minimizeIcon:null,modal:!0,onClick:null,onDrag:null,onDragEnd:null,onDragStart:null,onHide:null,onMaskClick:null,onMaximize:null,onResize:null,onResizeEnd:null,onResizeStart:null,onShow:null,position:"center",resizable:!0,rtl:!1,showHeader:!0,style:null,transitionOptions:null,visible:!1,children:void 0},css:{classes:bv,styles:yv,inlineStyles:wv}});function Gs(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,o)}return e}function gi(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?Gs(Object(e),!0).forEach(function(o){vi(n,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):Gs(Object(e)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(e,o))})}return n}var Xs=f.forwardRef(function(n,t){var e=Tt(),o=f.useContext(nt),r=Yo.getProps(n,o),a=r.id?r.id:aa(),i=f.useState(a),l=On(i,2),s=l[0];l[1];var c=f.useState(!1),u=On(c,2),d=u[0],m=u[1],v=f.useState(!1),E=On(v,2),h=E[0],C=E[1],x=f.useState(r.maximized),S=On(x,2),O=S[0],P=S[1],w=f.useRef(null),T=f.useRef(null),_=f.useRef(null),U=f.useRef(null),R=f.useRef(null),k=f.useRef(null),j=f.useRef(null),J=f.useRef(!1),z=f.useRef(!1),Z=f.useRef(null),ne=f.useRef(null),ve=f.useRef(null),ye=f.useRef(a),ce=f.useRef(null),ee=r.onMaximize?r.maximized:O,D=h&&(r.blockScroll||r.maximizable&&ee),G=r.closable&&r.closeOnEscape&&h,ie=Fc("dialog",G),X=Yo.setMetaData(gi(gi({props:r},r.__parentMetadata),{},{state:{id:s,maximized:ee,containerVisible:d}})),K=X.ptm,de=X.cx,fe=X.sx,me=X.isUnstyled;Bt(Yo.css.styles,me,{name:"dialog"}),Fi({callback:function(q){Ve(q)},when:G&&ie,priority:[Li.DIALOG,ie]});var Y=vn({type:"mousemove",target:function(){return window.document},listener:function(q){return H(q)}}),N=On(Y,2),F=N[0],se=N[1],M=vn({type:"mouseup",target:function(){return window.document},listener:function(q){return pe(q)}}),Oe=On(M,2),Ie=Oe[0],Te=Oe[1],_e=vn({type:"mousemove",target:function(){return window.document},listener:function(q){return Dt(q)}}),Me=On(_e,2),St=Me[0],lt=Me[1],Xe=vn({type:"mouseup",target:function(){return window.document},listener:function(q){return st(q)}}),Je=On(Xe,2),bt=Je[0],Ct=Je[1],Ve=function(q){r.onHide(),q.preventDefault()},Ze=function(){var q=document.activeElement,B=q&&w.current&&w.current.contains(q);!B&&r.closable&&r.showHeader&&j.current&&j.current.focus()},Ft=function(q){_.current=q.target,r.onPointerDown&&r.onPointerDown(q)},Qe=function(q){r.dismissableMask&&r.modal&&T.current===q.target&&!_.current&&Ve(q),r.onMaskClick&&r.onMaskClick(q),_.current=null},et=function(q){r.onMaximize?r.onMaximize({originalEvent:q,maximized:!ee}):P(function(B){return!B}),q.preventDefault()},ot=function(q){$.hasClass(q.target,"p-dialog-header-icon")||$.hasClass(q.target.parentElement,"p-dialog-header-icon")||r.draggable&&(J.current=!0,Z.current=q.pageX,ne.current=q.pageY,w.current.style.margin="0",$.addClass(document.body,"p-unselectable-text"),r.onDragStart&&r.onDragStart(q))},Dt=function(q){if(J.current){var B=$.getOuterWidth(w.current),le=$.getOuterHeight(w.current),be=q.pageX-Z.current,ae=q.pageY-ne.current,I=w.current.getBoundingClientRect(),A=I.left+be,V=I.top+ae,Q=$.getViewport(),oe=getComputedStyle(w.current),re=parseFloat(oe.marginLeft),ue=parseFloat(oe.marginTop);w.current.style.position="fixed",r.keepInViewport?(A>=r.minX&&A+B<Q.width&&(Z.current=q.pageX,w.current.style.left=A-re+"px"),V>=r.minY&&V+le<Q.height&&(ne.current=q.pageY,w.current.style.top=V-ue+"px")):(Z.current=q.pageX,w.current.style.left=A-re+"px",ne.current=q.pageY,w.current.style.top=V-ue+"px"),r.onDrag&&r.onDrag(q)}},st=function(q){J.current&&(J.current=!1,$.removeClass(document.body,"p-unselectable-text"),r.onDragEnd&&r.onDragEnd(q))},ft=function(q){r.resizable&&(z.current=!0,Z.current=q.pageX,ne.current=q.pageY,$.addClass(document.body,"p-unselectable-text"),r.onResizeStart&&r.onResizeStart(q))},we=function(q,B,le){!le&&(le=$.getViewport());var be=parseInt(q);return/^(\d+|(\.\d+))(\.\d+)?%$/.test(q)?be*(le[B]/100):be},H=function(q){if(z.current){var B=q.pageX-Z.current,le=q.pageY-ne.current,be=$.getOuterWidth(w.current),ae=$.getOuterHeight(w.current),I=w.current.getBoundingClientRect(),A=$.getViewport(),V=!parseInt(w.current.style.top)||!parseInt(w.current.style.left),Q=we(w.current.style.minWidth,"width",A),oe=we(w.current.style.minHeight,"height",A),re=be+B,ue=ae+le;V&&(re=re+B,ue=ue+le),(!Q||re>Q)&&I.left+re<A.width&&(w.current.style.width=re+"px"),(!oe||ue>oe)&&I.top+ue<A.height&&(w.current.style.height=ue+"px"),Z.current=q.pageX,ne.current=q.pageY,r.onResize&&r.onResize(q)}},pe=function(q){z.current&&(z.current=!1,$.removeClass(document.body,"p-unselectable-text"),r.onResizeEnd&&r.onResizeEnd(q))},qe=function(){w.current.style.position="",w.current.style.left="",w.current.style.top="",w.current.style.margin=""},Ee=function(){w.current.setAttribute(ye.current,"")},Se=function(){r.onShow&&r.onShow(),r.focusOnShow&&Ze(),De()},$e=function(){r.modal&&!me()&&$.addClass(T.current,"p-component-overlay-leave")},at=function(){J.current=!1,Xt.clear(T.current),m(!1),Ne(),$.focus(ce.current),ce.current=null},De=function(){Ke()},Ne=function(){Ye()},Le=function(){var q=document.primeDialogParams&&document.primeDialogParams.some(function(B){return B.hasBlockScroll});q?$.blockBodyScroll():$.unblockBodyScroll()},Ue=function(q){if(q&&h){var B={id:s,hasBlockScroll:D};document.primeDialogParams||(document.primeDialogParams=[]);var le=document.primeDialogParams.findIndex(function(be){return be.id===s});le===-1?document.primeDialogParams=[].concat(lv(document.primeDialogParams),[B]):document.primeDialogParams=document.primeDialogParams.toSpliced(le,1,B)}else document.primeDialogParams=document.primeDialogParams&&document.primeDialogParams.filter(function(be){return be.id!==s});Le()},Ke=function(){r.draggable&&(St(),bt()),r.resizable&&(F(),Ie())},Ye=function(){lt(),Ct(),se(),Te()},Ge=function(){ve.current=$.createInlineStyle(o&&o.nonce||rt.nonce,o&&o.styleContainer);var q="";for(var B in r.breakpoints)q=q+`
                @media screen and (max-width: `.concat(B,`) {
                     [data-pc-name="dialog"][`).concat(ye.current,`] {
                        width: `).concat(r.breakpoints[B],` !important;
                    }
                }
            `);ve.current.innerHTML=q},ct=function(){ve.current=$.removeInlineStyle(ve.current)};Ht(function(){Ue(!0),r.visible&&m(!0)}),f.useEffect(function(){return r.breakpoints&&Ge(),function(){ct()}},[r.breakpoints]),He(function(){r.visible&&!d&&m(!0),r.visible!==h&&d&&C(r.visible),r.visible&&(ce.current=document.activeElement)},[r.visible,d]),He(function(){d&&(Xt.set("modal",T.current,o&&o.autoZIndex||rt.autoZIndex,r.baseZIndex||o&&o.zIndex.modal||rt.zIndex.modal),C(!0))},[d]),He(function(){Ue(!0)},[D,h]),on(function(){Ne(),Ue(!1),$.removeInlineStyle(ve.current),Xt.clear(T.current)}),f.useImperativeHandle(t,function(){return{props:r,resetPosition:qe,getElement:function(){return w.current},getMask:function(){return T.current},getContent:function(){return U.current},getHeader:function(){return R.current},getFooter:function(){return k.current},getCloseButton:function(){return j.current}}});var We=function(){if(r.closable){var q=r.ariaCloseIconLabel||Fn("close"),B=e({className:de("closeButtonIcon"),"aria-hidden":!0},K("closeButtonIcon")),le=r.closeIcon||f.createElement(mo,B),be=zt.getJSXIcon(le,gi({},B),{props:r}),ae=e({ref:j,type:"button",className:de("closeButton"),"aria-label":q,onClick:Ve,onKeyDown:function(A){A.key!=="Escape"&&A.stopPropagation()}},K("closeButton"));return f.createElement("button",ae,be,f.createElement(xr,null))}return null},yt=function(){var q,B=e({className:de("maximizableIcon")},K("maximizableIcon"));ee?q=r.minimizeIcon||f.createElement(Vs,B):q=r.maximizeIcon||f.createElement(Ws,B);var le=zt.getJSXIcon(q,B,{props:r});if(r.maximizable){var be=e({type:"button",className:de("maximizableButton"),onClick:et},K("maximizableButton"));return f.createElement("button",be,le,f.createElement(xr,null))}return null},wt=function(){if(r.showHeader){var q=We(),B=yt(),le=L.getJSXElement(r.icons,r),be=L.getJSXElement(r.header,r),ae=s+"_header",I=e({ref:R,style:r.headerStyle,className:de("header"),onMouseDown:ot},K("header")),A=e({id:ae,className:de("headerTitle")},K("headerTitle")),V=e({className:de("headerIcons")},K("headerIcons"));return f.createElement("div",I,f.createElement("div",A,be),f.createElement("div",V,le,B,q))}return null},xt=function(){var q=s+"_content",B=e({id:q,ref:U,style:r.contentStyle,className:de("content")},K("content"));return f.createElement("div",B,r.children)},Nt=function(){var q=L.getJSXElement(r.footer,r),B=e({ref:k,className:de("footer")},K("footer"));return q&&f.createElement("div",B,q)},en=function(){return r.resizable?f.createElement("span",{className:"p-resizable-handle",style:{zIndex:90},onMouseDown:ft}):null},At=function(){var q,B={header:r.header,content:r.message,message:r==null||(q=r.children)===null||q===void 0||(q=q[1])===null||q===void 0||(q=q.props)===null||q===void 0?void 0:q.children},le={headerRef:R,contentRef:U,footerRef:k,closeRef:j,hide:Ve,message:B};return L.getJSXElement(n.content,le)},kt=function(){var q=wt(),B=xt(),le=Nt(),be=en();return f.createElement(f.Fragment,null,q,B,le,be)},Yt=function(){var q=s+"_header",B=s+"_content",le={enter:r.position==="center"?150:300,exit:r.position==="center"?150:300},be=e({ref:T,style:fe("mask"),className:de("mask"),onPointerUp:Qe},K("mask")),ae=e({ref:w,id:s,className:ge(r.className,de("root",{props:r,maximized:ee,context:o})),style:r.style,onClick:r.onClick,role:"dialog","aria-labelledby":q,"aria-describedby":B,"aria-modal":r.modal,onPointerDown:Ft},Yo.getOtherProps(r),K("root")),I=e({classNames:de("transition"),timeout:le,in:h,options:r.transitionOptions,unmountOnExit:!0,onEnter:Ee,onEntered:Se,onExiting:$e,onExited:at},K("transition")),A=null;n!=null&&n.content?A=At():A=kt();var V=f.createElement("div",be,f.createElement(oo,pi({nodeRef:w},I),f.createElement("div",ae,f.createElement(gv,{autoFocus:r.focusOnShow},A))));return f.createElement(vr,{element:V,appendTo:r.appendTo,visible:!0})};return d&&Yt()});Xs.displayName="Dialog";function hi(){return hi=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},hi.apply(this,arguments)}function xv(n){if(Array.isArray(n))return n}function Ev(n,t){var e=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(e!=null){var o,r,a,i,l=[],s=!0,c=!1;try{if(a=(e=e.call(n)).next,t!==0)for(;!(s=(o=a.call(e)).done)&&(l.push(o.value),l.length!==t);s=!0);}catch(u){c=!0,r=u}finally{try{if(!s&&e.return!=null&&(i=e.return(),Object(i)!==i))return}finally{if(c)throw r}}return l}}function Js(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}function Sv(n,t){if(n){if(typeof n=="string")return Js(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Js(n,t)}}function Cv(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zs(n,t){return xv(n)||Ev(n,t)||Sv(n,t)||Cv()}function zr(n){"@babel/helpers - typeof";return zr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},zr(n)}function Ov(n,t){if(zr(n)!=="object"||n===null)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var o=e.call(n,t||"default");if(zr(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function qv(n){var t=Ov(n,"string");return zr(t)==="symbol"?t:String(t)}function Pv(n,t,e){return t=qv(t),t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var Tv={root:"p-confirm-dialog",message:"p-confirm-dialog-message",icon:"p-confirm-dialog-icon",acceptButton:"p-confirm-dialog-accept",rejectButton:function(t){var e=t.getPropValue;return ge("p-confirm-dialog-reject",{"p-button-text":!e("rejectClassName")})}},Go=ke.extend({defaultProps:{__TYPE:"ConfirmDialog",accept:null,acceptClassName:null,acceptIcon:null,acceptLabel:null,appendTo:null,breakpoints:null,children:void 0,className:null,content:null,defaultFocus:"accept",footer:null,icon:null,message:null,onHide:null,reject:null,rejectClassName:null,rejectIcon:null,rejectLabel:null,tagKey:void 0,visible:void 0},css:{classes:Tv}});function Qs(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,o)}return e}function rr(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?Qs(Object(e),!0).forEach(function(o){Pv(n,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):Qs(Object(e)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(e,o))})}return n}var Iv=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t=rr(rr({},t),{visible:t.visible===void 0?!0:t.visible}),t.visible&&Nn.emit("confirm-dialog",t);var e=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Nn.emit("confirm-dialog",rr(rr(rr({},t),a),{visible:!0}))},o=function(){Nn.emit("confirm-dialog",{visible:!1})};return{show:e,hide:o}},ec=f.memo(f.forwardRef(function(n,t){var e=Tt(),o=f.useContext(nt),r=Go.getProps(n,o),a=f.useState(r.visible),i=Zs(a,2),l=i[0],s=i[1],c=f.useState(!1),u=Zs(c,2),d=u[0],m=u[1],v=f.useRef(null),E=f.useRef(!1),h=f.useRef(null),C=function(){var ee=r.group;return v.current&&(ee=v.current.group),Object.assign({},r,v.current,{group:ee})},x=function(ee){return C()[ee]},S=function(ee){for(var D=arguments.length,G=new Array(D>1?D-1:0),ie=1;ie<D;ie++)G[ie-1]=arguments[ie];return L.getPropValue(x(ee),G)},O=x("acceptLabel")||Fn("accept"),P=x("rejectLabel")||Fn("reject"),w={props:r,state:{visible:l}},T=Go.setMetaData(w),_=T.ptm,U=T.cx,R=T.isUnstyled;Bt(Go.css.styles,R,{name:"confirmdialog"});var k=function(){E.current||(E.current=!0,S("accept"),z("accept"))},j=function(){E.current||(E.current=!0,S("reject"),z("reject"))},J=function(){var ee=C();ee.group===r.group&&(s(!0),E.current=!1,h.current=document.activeElement)},z=function(){var ee=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"cancel";s(!1),S("onHide",{result:ee}),$.focus(h.current),h.current=null},Z=function(ee){if(ee.tagKey===r.tagKey){var D=l!==ee.visible,G=x("target")!==ee.target;G&&!r.target?(z(),v.current=ee,m(!0)):D&&(v.current=ee,ee.visible?J():z())}};f.useEffect(function(){r.visible?J():z()},[r.visible]),f.useEffect(function(){return!r.target&&!r.message&&Nn.on("confirm-dialog",Z),function(){Nn.off("confirm-dialog",Z)}},[r.target]),He(function(){d&&J()},[d]),on(function(){Nn.off("confirm-dialog",Z)}),f.useImperativeHandle(t,function(){return{props:r,confirm:Z}});var ne=function(){var ee=x("defaultFocus"),D=ge("p-confirm-dialog-accept",x("acceptClassName")),G=ge("p-confirm-dialog-reject",{"p-button-text":!x("rejectClassName")},x("rejectClassName")),ie=e({label:P,autoFocus:ee==="reject",icon:x("rejectIcon"),className:ge(x("rejectClassName"),U("rejectButton",{getPropValue:x})),onClick:j,pt:_("rejectButton"),unstyled:r.unstyled,__parentMetadata:{parent:w}},_("rejectButton")),X=e({label:O,autoFocus:ee===void 0||ee==="accept",icon:x("acceptIcon"),className:ge(x("acceptClassName"),U("acceptButton")),onClick:k,pt:_("acceptButton"),unstyled:r.unstyled,__parentMetadata:{parent:w}},_("acceptButton")),K=f.createElement(f.Fragment,null,f.createElement(Et,ie),f.createElement(Et,X));if(x("footer")){var de={accept:k,reject:j,acceptClassName:D,rejectClassName:G,acceptLabel:O,rejectLabel:P,element:K,props:C()};return L.getJSXElement(x("footer"),de)}return K},ve=function(){var ee=C(),D=L.getJSXElement(x("message"),ee),G=e({className:U("icon")},_("icon")),ie=zt.getJSXIcon(x("icon"),rr({},G),{props:ee}),X=ne(),K=e({className:U("message")},_("message")),de=e({visible:l,className:ge(x("className"),U("root")),footer:X,onHide:z,breakpoints:x("breakpoints"),pt:ee.pt,unstyled:r.unstyled,appendTo:x("appendTo"),__parentMetadata:{parent:w}},Go.getOtherProps(ee));return f.createElement(Xs,hi({},de,{content:n==null?void 0:n.content}),ie,f.createElement("span",K,D))},ye=ve();return f.createElement(vr,{element:ye,appendTo:x("appendTo")})}));ec.displayName="ConfirmDialog";function _v({id:n,item:t,active:e,setActive:o,onItemChange:r,onItemRemove:a,config:i,form:l}){const{attributes:s,listeners:c,setNodeRef:u,setActivatorNodeRef:d,transform:m,transition:v}=Ro({id:n,data:{id:n,item:t}}),E={transform:Ut.Transform.toString(m),transition:v};let h="sortable-item";t.id==(e==null?void 0:e.id)&&(h=h+" active");const C=[Rn.type].includes(t.type),x=()=>{Iv({message:"Are you sure you want to remove this item?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:()=>a(n)})};let S=p.jsx(Et,{size:"small",outlined:!0,label:"Edit",icon:"pi pi-pencil",onClick:()=>o(t)});return e&&e.id==t.id&&(S=p.jsx(Et,{size:"small",outlined:!0,label:"Done",icon:"pi pi-pencil",onClick:()=>o(void 0)})),p.jsx(p.Fragment,{children:p.jsxs("div",{ref:u,style:E,...s,className:h,children:[p.jsx(Uo,{item:t,onChange:r,config:i,form:l}),C?p.jsx("div",{className:"mask"}):null,p.jsxs("div",{className:"flex flex-row align-items-center item-footer",children:[p.jsxs("div",{className:"flex-grow-1 item-type",children:[" ",t.type]}),p.jsxs(Bs,{children:[" ",p.jsx(Et,{...c,ref:d,size:"small",outlined:!0,label:"Order",icon:"pi pi-sort"}),S,p.jsx(Et,{size:"small",outlined:!0,label:"Remove",icon:"pi pi-trash",onClick:x})]})]})]})})}function kv({form:n,onFormChange:t,activeItem:e,setActiveItem:o,config:r}){const[a,i]=y.useState((n==null?void 0:n.items)??[]);y.useEffect(()=>{n&&n.items&&n.items!=a&&i(n.items??[])},[n]);const l=E=>{const h=Wt(n);h.items=h.items.filter(C=>C.id!=E),t(h),e&&e.id==E&&o(void 0)},s=E=>{const h=a.map(x=>x.id==E.id?E:x);i(h);const C=Wt(n);C.items=h,t(C)},{listeners:c,setNodeRef:u,transform:d,transition:m}=Ss({id:"canvas_droppable",data:{parent:null,isContainer:!0}}),v={transform:Ut.Transform.toString(d),transition:m};return p.jsx(p.Fragment,{children:p.jsxs("div",{ref:u,className:"canvas form-area",style:v,...c,children:[p.jsx("h1",{children:n.label}),a==null?void 0:a.map(E=>p.jsx(_v,{id:E.id,item:E,active:e,setActive:o,onItemChange:s,onItemRemove:l,config:r,form:n},E.id))]})})}function jv({...n}){const[t,e]=y.useState(n.form),[o,r]=y.useState(n.activeItem),a=s=>{r(s);const c=Wt(t);c.items=c.items.map(u=>u.id==s.id?s:u),n.onFormChange(c)},i=s=>{const c={...t,[s.target.name]:s.target.value};e(c),n.onFormChange(c)},l=()=>{n.setActiveItem(void 0)};if(y.useEffect(()=>{r(n.activeItem)},[n.activeItem]),y.useEffect(()=>{e(n.form)},[n.form]),o){const s=Cn.getByItem(o);if(s){const c=s.icon;return p.jsx(p.Fragment,{children:p.jsxs("div",{className:"properties active",children:[p.jsxs("div",{className:"item-panel-item flex align-items-center",children:[p.jsxs("div",{className:"flex-grow-1 flex align-items-center",children:[p.jsx("div",{className:"item-icon mr-2",children:p.jsx(c,{})}),p.jsx("div",{children:p.jsx("h2",{children:s.heading})})]}),p.jsx(Et,{onClick:l,size:"small",outlined:!0,icon:"pi pi-times"})]}),p.jsx(nv,{item:o,onChange:a,form:t,config:n.config})]})})}return y.createElement(()=>p.jsxs("div",{children:["The component ",o.type," was not found."]}))}else return p.jsx(p.Fragment,{children:p.jsxs("div",{className:"properties",children:[p.jsx("div",{className:"item-panel-item flex px-3",children:p.jsx("div",{children:p.jsx("h2",{children:"Form Settings"})})}),p.jsx(Jt,{activeIndex:0,children:p.jsx(jt,{header:"General",children:p.jsx("div",{className:"form-item flex flex-column gap-4",children:p.jsxs("div",{className:"flex flex-column gap-2",children:[p.jsx("label",{htmlFor:"label",children:"Form label"}),p.jsx(Fe,{onChange:i,name:"label",value:t.label??"",className:"w-full"})]})})},"general")})]})})}function tc({item:n}){const t=n.icon;return p.jsx(p.Fragment,{children:p.jsx("article",{className:"sidebar-field",children:p.jsxs("div",{className:"item-panel-item flex p-2 w-100",children:[p.jsx("div",{className:"item-icon mr-2",children:p.jsx(t,{})}),p.jsxs("div",{children:[p.jsx("div",{className:"item-title",children:n.heading}),p.jsx("div",{className:"item-text",children:n.description})]})]})})})}function Dv({item:n}){const t=y.useRef(rn()),{attributes:e,listeners:o,setNodeRef:r}=xs({id:t.current,data:{item:n,fromSidebar:!0}});return p.jsx("div",{ref:r,className:"sidebar-field",...e,...o,children:p.jsx(tc,{item:n})})}function Nv({...n}){const t={};return Cn.map(e=>{var r,a;const o=((r=e.group)==null?void 0:r.label)||"";Object.keys(t).includes(o)||(t[o]={label:((a=e.group)==null?void 0:a.label)||"",items:[]}),t[o].items.push(e)}),p.jsxs(p.Fragment,{children:[" "," "," "," "," "," "," ",p.jsx(Jt,{activeIndex:0,children:Object.keys(t).map(e=>p.jsx(jt,{header:t[e].label,children:t[e].items.map(o=>p.jsx(Dv,{item:o},`sidebar-${o.type}`))},e))})]})}function Hr(n){var t;return((t=n==null?void 0:n.data)==null?void 0:t.current)??{}}const Av=({...n})=>{const{form:t,setForm:e}=Ei(n.form),[o,r]=y.useState(void 0);y.useEffect(()=>{n.form&&e(n.form)},[n.form]),y.useEffect(()=>{t&&n.onChange(t)},[t]);const a=Oo(bn(er),bn(Qn,{coordinateGetter:$o})),[i,l]=y.useState(),[s,c]=y.useState(),u=()=>{l(void 0),c(void 0)},d=h=>{const{active:C}=h,x=Hr(C),{item:S}=x;if(x.fromSidebar){const O=S.data;O.id=rn(),S.id=O.id,l(S),r(O)}else c(x.item)},m=h=>{const{active:C,over:x}=h,S=Hr(C),O=Hr(x);if(S.fromSidebar)if(t.items.findIndex(P=>P.id===S.item.id)==-1){t.items.push(S.item.data);const P=t.items.findIndex(T=>T.id===S.item.id),w=t.items.findIndex(T=>T.id===O.id);w!=-1&&w!=P&&(t.items=wn(t.items,P,w)),e(t)}else if(!x)t.items=t.items.filter(P=>P.id!==S.item.id),e(t);else{const P=t.items.findIndex(T=>T.id===S.item.id),w=t.items.findIndex(T=>T.id===O.id);t.items=wn(t.items,P,w),e(t)}else t.items.findIndex(P=>P.id===S.item.id),t.items.findIndex(P=>P.id===O.id)},v=h=>{const{active:C,over:x}=h,S=Hr(C),O=Hr(x),P=t.items.findIndex(T=>T.id===S.item.id),w=t.items.findIndex(T=>T.id===O.id);P!=w&&(t.items=wn(t.items,P,w),e(t)),u()},E={form:t,onFormChange:e,activeItem:o,setActiveItem:r,config:n.config};return t?p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"form-builder",children:p.jsxs(jo,{sensors:a,onDragStart:d,onDragOver:m,onDragEnd:v,collisionDetection:qo,autoScroll:!0,children:[p.jsx("div",{className:"sidebar-area",children:p.jsx(Nv,{...E})}),p.jsx("div",{className:"canvas-area",children:p.jsx(Ao,{strategy:Np,items:t.items.map(h=>h.id),children:p.jsx(kv,{...E})})}),p.jsx("div",{className:"properties-area",children:p.jsx(jv,{...E})}),p.jsxs(_p,{dropAnimation:null,children:[i?p.jsx(tc,{item:i}):null," ",s?p.jsx(Uo,{item:s,onChange:()=>{},config:n.config,form:n.form}):null]})]})}),p.jsx(ec,{})]}):p.jsx(p.Fragment,{children:p.jsx("div",{children:"No form config loaded"})})},nc=({...n})=>{var r;const{form:t,setForm:e}=Ei(n.form);y.useEffect(()=>{n.form&&e(n.form)},[n.form]),y.useEffect(()=>{t&&n.onChange(t)},[t]);const o=a=>{t.items=t.items.map(i=>i.id==a.id?a:i),e(t)};return t&&t.id?p.jsx(p.Fragment,{children:p.jsxs("div",{className:"form-area",children:[p.jsx("h1",{children:t.label}),(r=t.items)==null?void 0:r.map(a=>p.jsx(Uo,{item:a,onChange:o,form:t,config:n.config},a.id))]})}):p.jsx(p.Fragment,{children:p.jsx("div",{children:"No form config loaded"})})};nn.Form=nc,nn.FormBuilder=Av,nn.Item=Uo,Object.defineProperty(nn,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=index.umd.cjs.map
