import { jsxs as r, jsx as o } from "react/jsx-runtime";
import { useState as s } from "react";
const u = "_counter_13m9l_1", l = "_header_13m9l_10", a = "_button_13m9l_16", c = {
  counter: u,
  header: l,
  button: a
}, i = (n) => {
  const [t, e] = s(n);
  return {
    count: t,
    incrementCount: () => e(t + 1)
  };
}, h = ({ initialValue: n = 0 }) => {
  const { count: t, incrementCount: e } = i(n);
  return /* @__PURE__ */ r("div", { className: c.counter, children: [
    /* @__PURE__ */ o("h2", { className: c.header, children: "Counter" }),
    /* @__PURE__ */ o("button", { className: c.button, type: "button", onClick: e, children: "Increment by one" }),
    /* @__PURE__ */ r("div", { children: [
      "Total value: ",
      /* @__PURE__ */ o("strong", { children: t })
    ] })
  ] });
};
export {
  h as Counter
};
//# sourceMappingURL=index.js.map
