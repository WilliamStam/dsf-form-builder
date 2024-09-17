import { jsx as o, Fragment as l } from "react/jsx-runtime";
import { useState as i } from "react";
function s(r) {
  return JSON.parse(JSON.stringify(r));
}
const c = (r = {
  id: null,
  label: null,
  created_at: null,
  config: []
}) => {
  const [t, e] = i(r);
  return {
    form: t,
    setForm: (n) => e(s(n))
  };
}, u = ({ config: r }) => {
  const { form: t, setForm: e } = c(r);
  return console.log(e), /* @__PURE__ */ o(l, { children: /* @__PURE__ */ o("div", { children: JSON.stringify(t) }) });
};
export {
  u as Builder
};
//# sourceMappingURL=index.js.map
