import { jsx as n } from "react/jsx-runtime";
import { useState as l } from "react";
function s(r) {
  return JSON.parse(JSON.stringify(r));
}
const i = (r = {
  id: null,
  label: null,
  created_at: null,
  config: []
}) => {
  const [t, o] = l(r);
  return {
    form: t,
    setForm: (e) => o(s(e))
  };
}, f = ({ config: r }) => {
  const { form: t, setForm: o } = i(r);
  return console.log(o), /* @__PURE__ */ n("div", { children: JSON.stringify(t) });
};
export {
  f as Builder
};
//# sourceMappingURL=index.js.map
