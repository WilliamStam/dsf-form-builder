import { jsx as n, Fragment as i, jsxs as o } from "react/jsx-runtime";
import { useState as s } from "react";
function c(r) {
  return JSON.parse(JSON.stringify(r));
}
const m = (r = {
  id: null,
  label: null,
  created_at: null,
  config: []
}) => {
  const [e, t] = s(r);
  return {
    form: e,
    setForm: (l) => t(c(l))
  };
}, f = ({ config: r }) => {
  const { form: e, setForm: t } = m(r);
  return console.log(t), /* @__PURE__ */ n(i, { children: /* @__PURE__ */ o("div", { className: "form-builder", children: [
    /* @__PURE__ */ o("h1", { children: [
      "- ",
      e.label,
      " ====="
    ] }),
    /* @__PURE__ */ n("div", { children: JSON.stringify(e) })
  ] }) });
};
export {
  f as Builder
};
//# sourceMappingURL=index.js.map
