import { jsxs as l, Fragment as s, jsx as n } from "react/jsx-runtime";
import { useState as i } from "react";
function c(r) {
  return JSON.parse(JSON.stringify(r));
}
const m = (r = {
  id: null,
  label: null,
  created_at: null,
  config: []
}) => {
  const [e, t] = i(r);
  return {
    form: e,
    setForm: (o) => t(c(o))
  };
}, u = ({ config: r }) => {
  const { form: e, setForm: t } = m(r);
  return console.log(t), /* @__PURE__ */ l(s, { children: [
    /* @__PURE__ */ n("h1", { children: e.label }),
    /* @__PURE__ */ n("div", { children: JSON.stringify(e) })
  ] });
};
export {
  u as Builder
};
//# sourceMappingURL=index.js.map
