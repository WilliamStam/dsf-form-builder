(function(r,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("react/jsx-runtime"),require("react")):typeof define=="function"&&define.amd?define(["exports","react/jsx-runtime","react"],e):(r=typeof globalThis<"u"?globalThis:r||self,e(r["Library name"]={},r.jsxRuntime,r.React))})(this,function(r,e,o){"use strict";function s(t){return JSON.parse(JSON.stringify(t))}const c=(t={id:null,label:null,created_at:null,config:[]})=>{const[n,i]=o.useState(t);return{form:n,setForm:l=>i(s(l))}},d=({config:t})=>{const{form:n,setForm:i}=c(t);return console.log(i),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"form-builder",children:[e.jsx("h1",{children:n.label}),e.jsx("div",{children:JSON.stringify(n)})]})})};r.Builder=d,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=index.umd.cjs.map
