import { jsx as e, Fragment as p, jsxs as i } from "react/jsx-runtime";
import { useDroppable as oe, useDraggable as re, useSensors as ie, useSensor as X, PointerSensor as se, KeyboardSensor as ce, DndContext as de, closestCenter as me, DragOverlay as he } from "@dnd-kit/core";
import { useSortable as ue, sortableKeyboardCoordinates as ge, SortableContext as pe, rectSwappingStrategy as fe, arrayMove as U } from "@dnd-kit/sortable";
import { CSS as ee } from "@dnd-kit/utilities";
import { Button as z } from "primereact/button";
import { ButtonGroup as ve } from "primereact/buttongroup";
import { confirmDialog as be } from "primereact/confirmdialog";
import j, { useState as u, useEffect as x, useRef as xe } from "react";
import { nanoid as T } from "nanoid";
import { Accordion as $, AccordionTab as M } from "primereact/accordion";
import { InputText as v } from "primereact/inputtext";
import { Calendar as we } from "primereact/calendar";
import { Dropdown as Ce } from "primereact/dropdown";
import { Editor as Ne } from "primereact/editor";
import { TabView as ye, TabPanel as Z } from "primereact/tabview";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
class Ie {
  constructor(t) {
    this.label = t;
  }
}
class W extends Ie {
  constructor(t) {
    super(
      t.label
    );
  }
}
class Se {
  constructor(t, l) {
    this.render = t, this.validation = l;
  }
}
class O extends Se {
  constructor(t) {
    super(
      t.render,
      t.validation
    );
  }
}
class De {
  constructor(t, l, a, o, s, r, c, d, m) {
    this.form = t, this.settings = l, this.type = a, this.heading = o, this.description = s, this.hidden = r, this.icon = c, this.default_config = d, this.group = m, this.group || (this.group = new W({
      label: "None"
    }));
  }
}
class V extends De {
  constructor(t) {
    super(
      t.form,
      t.settings,
      t.type,
      t.heading,
      t.description,
      t.hidden,
      t.icon,
      t.default_config,
      t.group
    );
  }
}
class K {
  constructor(t = []) {
    this.items = t;
  }
  registerItem(t, l) {
    l && (t.group = l), this.items.push(t);
  }
  addRegistry(t) {
    for (const l of t)
      this.items.push(l);
  }
  getByItem(t) {
    if (t)
      return this.items.find((l) => l.type === t.type);
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
    return this.items.map((l, a, o) => t(l, a, o));
  }
}
const J = {
  id: null,
  label: null,
  created_at: null,
  config: []
}, Fe = (n = J) => {
  const [t, l] = u({ ...J, ...n });
  return {
    form: t,
    setForm: (a) => {
      console.log("formState", "setFormHandler", a ?? J), l({ ...J, ...a });
    }
  };
}, E = {
  id: T(),
  type: "input-text",
  label: "",
  value: "",
  placeholder: ""
}, Oe = ({ config: n, onChange: t }) => {
  const [l, a] = u({ ...E, ...n });
  x(() => {
    a({ ...E, ...n });
  }, [n]);
  const o = (r) => {
    const c = { ...E, ...n, value: r.target.value };
    t(c), a(c);
  }, s = Math.random().toString(36).substring(2, 15);
  return /* @__PURE__ */ e(p, { children: /* @__PURE__ */ i("div", { className: "flex flex-column gap-2", children: [
    /* @__PURE__ */ e("label", { htmlFor: s, children: l.label }),
    /* @__PURE__ */ e(
      v,
      {
        value: l.value,
        onChange: o,
        placeholder: l.placeholder,
        className: "w-full",
        id: s
      }
    )
  ] }) });
}, _e = ({ config: n, onChange: t }) => {
  const [l, a] = u({ ...E, ...n }), o = (s) => {
    const r = { ...l, [s.target.name]: s.target.value };
    a(r), t(r);
  };
  return x(() => {
    a({ ...E, ...n });
  }, [n]), /* @__PURE__ */ e(p, { children: /* @__PURE__ */ i($, { activeIndex: 0, children: [
    " ",
    /* @__PURE__ */ e(M, { header: "General", children: /* @__PURE__ */ i("div", { className: "form-item flex flex-column gap-4", children: [
      /* @__PURE__ */ i("div", { className: "flex flex-column gap-2", children: [
        /* @__PURE__ */ e("label", { htmlFor: "label", children: "Label" }),
        /* @__PURE__ */ e(
          v,
          {
            id: "label",
            value: l.label || "",
            name: "label",
            onChange: o,
            className: "w-full"
          }
        )
      ] }),
      /* @__PURE__ */ i("div", { className: "flex flex-column gap-2", children: [
        /* @__PURE__ */ e("label", { htmlFor: "placeholder", children: "Placeholder" }),
        /* @__PURE__ */ e(
          v,
          {
            id: "placeholder",
            value: l.placeholder || "",
            name: "placeholder",
            onChange: o,
            className: "w-full"
          }
        )
      ] })
    ] }) }, "general"),
    " "
  ] }) });
}, ze = new V({
  type: E.type,
  form: new O({
    render: Oe,
    validation: (n) => (console.log(n), {})
  }),
  settings: new O({
    render: _e,
    validation: (n) => (console.log(n), {})
  }),
  heading: "Text input",
  description: "a simple box to insert a value into",
  hidden: !1,
  icon: () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", children: /* @__PURE__ */ e("path", { d: "M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416 32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-1.8 0 18-48 159.6 0 18 48-1.8 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-25.8 0L254 52.8zM279.8 304l-111.6 0L224 155.1 279.8 304z" }) }),
  default_config: E
}), B = {
  id: T(),
  type: "input-date",
  label: "",
  value: "",
  placeholder: "",
  format: "yy-mm-dd"
}, Me = ({ config: n, onChange: t }) => {
  const [l, a] = u({ ...B, ...n });
  return x(() => {
    a({ ...B, ...n });
  }, [n]), Math.random().toString(36).substring(2, 15), /* @__PURE__ */ e(p, { children: /* @__PURE__ */ e(
    we,
    {
      onChange: (o) => {
        console.log(o.value);
      },
      dateFormat: "yy-mm-dd"
    }
  ) });
}, Ee = ({ config: n, onChange: t }) => {
  const [l, a] = u({ ...B, ...n }), o = (s) => {
    const r = { ...l, [s.target.name]: s.target.value };
    a(r), t(r);
  };
  return x(() => {
    a({ ...B, ...n });
  }, [n]), /* @__PURE__ */ e(p, { children: /* @__PURE__ */ i($, { activeIndex: 0, children: [
    " ",
    /* @__PURE__ */ e(M, { header: "General", children: /* @__PURE__ */ i("div", { className: "form-item flex flex-column gap-4", children: [
      /* @__PURE__ */ i("div", { className: "flex flex-column gap-2", children: [
        /* @__PURE__ */ e("label", { htmlFor: "label", children: "Label" }),
        /* @__PURE__ */ e(
          v,
          {
            id: "label",
            value: l.label || "",
            name: "label",
            onChange: o,
            className: "w-full"
          }
        )
      ] }),
      /* @__PURE__ */ i("div", { className: "flex flex-column gap-2", children: [
        /* @__PURE__ */ e("label", { htmlFor: "placeholder", children: "Placeholder" }),
        /* @__PURE__ */ e(
          v,
          {
            id: "placeholder",
            value: l.placeholder || "",
            name: "placeholder",
            onChange: o,
            className: "w-full"
          }
        )
      ] }),
      /* @__PURE__ */ i("div", { className: "flex flex-column gap-2", children: [
        /* @__PURE__ */ e("label", { htmlFor: "format", children: "Format" }),
        /* @__PURE__ */ e(
          v,
          {
            id: "format",
            value: l.format || "",
            name: "format",
            onChange: o,
            className: "w-full"
          }
        ),
        /* @__PURE__ */ i("ul", { children: [
          /* @__PURE__ */ e("li", { children: "d - day of month (no leading zero)" }),
          /* @__PURE__ */ e("li", { children: "dd - day of month (two digit)" }),
          /* @__PURE__ */ e("li", { children: "o - day of the year (no leading zeros)" }),
          /* @__PURE__ */ e("li", { children: "oo - day of the year (three digit)" }),
          /* @__PURE__ */ e("li", { children: "D - day name short" }),
          /* @__PURE__ */ e("li", { children: "DD - day name long" }),
          /* @__PURE__ */ e("li", { children: "m - month of year (no leading zero)" }),
          /* @__PURE__ */ e("li", { children: "mm - month of year (two digit)" }),
          /* @__PURE__ */ e("li", { children: "M - month name short" }),
          /* @__PURE__ */ e("li", { children: "MM - month name long" }),
          /* @__PURE__ */ e("li", { children: "y - year (two digit)" }),
          /* @__PURE__ */ e("li", { children: "yy - year (four digit)" })
        ] })
      ] })
    ] }) }, "general"),
    " "
  ] }) });
}, Le = new V({
  type: B.type,
  form: new O({
    render: Me,
    validation: (n) => (console.log(n), {})
  }),
  settings: new O({
    render: Ee,
    validation: (n) => (console.log(n), {})
  }),
  heading: "Date picker input",
  description: "a simple box to select a date",
  hidden: !1,
  icon: () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", children: /* @__PURE__ */ e("path", { d: "M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l80 0 0 56-80 0 0-56zm0 104l80 0 0 64-80 0 0-64zm128 0l96 0 0 64-96 0 0-64zm144 0l80 0 0 64-80 0 0-64zm80-48l-80 0 0-56 80 0 0 56zm0 160l0 40c0 8.8-7.2 16-16 16l-64 0 0-56 80 0zm-128 0l0 56-96 0 0-56 96 0zm-144 0l0 56-64 0c-8.8 0-16-7.2-16-16l0-40 80 0zM272 248l-96 0 0-56 96 0 0 56z" }) }),
  default_config: B
}), L = {
  id: T(),
  type: "input-number",
  label: "",
  value: "",
  placeholder: ""
}, Re = ({ config: n, onChange: t }) => {
  const [l, a] = u({ ...L, ...n });
  x(() => {
    a({ ...L, ...n });
  }, [n]);
  const o = (r) => {
    const c = { ...L, ...n, value: r.target.value };
    t(c);
  }, s = Math.random().toString(36).substring(2, 15);
  return /* @__PURE__ */ e(p, { children: /* @__PURE__ */ i("div", { className: "flex flex-column gap-2", children: [
    /* @__PURE__ */ e("label", { htmlFor: s, children: l.label }),
    /* @__PURE__ */ e(
      v,
      {
        type: "number",
        value: l.value,
        onChange: o,
        placeholder: l.placeholder || "",
        className: "w-full",
        id: s
      }
    )
  ] }) });
}, Te = ({ config: n, onChange: t }) => {
  const [l, a] = u({ ...L, ...n }), o = (s) => {
    const r = { ...l, [s.target.name]: s.target.value };
    a(r), t(r);
  };
  return x(() => {
    a({ ...L, ...n });
  }, [n]), /* @__PURE__ */ e(p, { children: /* @__PURE__ */ i($, { activeIndex: 0, children: [
    " ",
    /* @__PURE__ */ e(M, { header: "General", children: /* @__PURE__ */ i("div", { className: "form-item flex flex-column gap-4", children: [
      /* @__PURE__ */ i("div", { className: "flex flex-column gap-2", children: [
        /* @__PURE__ */ e("label", { htmlFor: "label", children: "Label" }),
        /* @__PURE__ */ e(
          v,
          {
            id: "label",
            value: l.label || "",
            name: "label",
            onChange: o,
            className: "w-full"
          }
        )
      ] }),
      /* @__PURE__ */ i("div", { className: "flex flex-column gap-2", children: [
        /* @__PURE__ */ e("label", { htmlFor: "placeholder", children: "Placeholder" }),
        /* @__PURE__ */ e(
          v,
          {
            id: "placeholder",
            value: l.placeholder || "",
            name: "placeholder",
            onChange: o,
            className: "w-full"
          }
        )
      ] })
    ] }) }, "general"),
    " "
  ] }) });
}, $e = new V({
  type: L.type,
  form: new O({
    render: Re,
    validation: (n) => (console.log(n), {})
  }),
  settings: new O({
    render: Te,
    validation: (n) => (console.log(n), {})
  }),
  heading: "Number input",
  description: "a simple box to insert a number value into",
  hidden: !1,
  icon: () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", children: /* @__PURE__ */ e("path", { d: "M0 64C0 46.3 14.3 32 32 32l256 0c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-224 384c-8.9 15.3-28.5 20.4-43.8 11.5s-20.4-28.5-11.5-43.8L232.3 96 32 96C14.3 96 0 81.7 0 64z" }) }),
  default_config: L
}), Q = new W({
  label: "Inputs"
}), Y = new K();
Y.registerItem(ze, Q);
Y.registerItem($e, Q);
Y.registerItem(Le, Q);
function H(n) {
  return JSON.parse(JSON.stringify(n));
}
const R = {
  id: T(),
  type: "select-select",
  label: "",
  value: "",
  options: [],
  placeholder: ""
}, Ge = ({ config: n, onChange: t }) => {
  const [l, a] = u({ ...R, ...n });
  x(() => {
    a({ ...R, ...n });
  }, [n]);
  const o = (r) => {
    const c = { ...R, ...n, value: r.target.value };
    t(c);
  }, s = Math.random().toString(36).substring(2, 15);
  return /* @__PURE__ */ e(p, { children: /* @__PURE__ */ i("div", { className: "flex flex-column gap-2", children: [
    /* @__PURE__ */ e("label", { htmlFor: s, children: l.label }),
    /* @__PURE__ */ e(
      Ce,
      {
        id: s,
        value: l.value || "",
        onChange: o,
        options: l.options,
        showClear: !0,
        placeholder: l.placeholder || "",
        className: "w-full",
        children: " "
      }
    )
  ] }) });
}, Be = ({ option: n, onChange: t }) => {
  const [l, a] = u(n), o = (s) => {
    const r = {
      value: l.value,
      label: l.label,
      [s.target.name]: s.target.value
    };
    a(r), t(r);
  };
  return x(() => {
    a(n);
  }, [n]), /* @__PURE__ */ e(p, { children: /* @__PURE__ */ i("div", { className: "flex flex-row gap-2", children: [
    /* @__PURE__ */ e(
      z,
      {
        icon: "pi pi-sort",
        className: "px-0 border-noround border-0",
        style: { width: "1rem", color: "#E1E1E1", background: "transparent" },
        severity: "secondary",
        size: "small"
      }
    ),
    /* @__PURE__ */ i("div", { className: "p-inputgroup flex-1", children: [
      /* @__PURE__ */ e(
        v,
        {
          id: "value",
          value: l.value,
          name: "value",
          onChange: o,
          className: "flex-1",
          placeholder: "Value"
        }
      ),
      " ",
      /* @__PURE__ */ e(
        v,
        {
          id: "label",
          value: l.label,
          name: "label",
          onChange: o,
          className: "flex-1",
          placeholder: "Label"
        }
      )
    ] }),
    /* @__PURE__ */ e(z, { icon: "pi pi-trash", onClick: () => t(null) })
  ] }) });
}, Ae = ({ onInsert: n }) => {
  const t = {
    value: "",
    label: ""
  }, [l, a] = u(t), o = (r) => {
    const c = {
      value: l.value,
      label: l.label,
      [r.target.name]: r.target.value
    };
    a(c);
  }, s = () => {
    n({ value: l.value, label: l.label }), a(t);
  };
  return /* @__PURE__ */ e(p, { children: /* @__PURE__ */ i("div", { className: "flex flex-row gap-2", children: [
    /* @__PURE__ */ i("div", { className: "p-inputgroup flex-1", children: [
      /* @__PURE__ */ e(
        v,
        {
          id: "value",
          value: l.value,
          name: "value",
          onChange: o,
          className: "",
          placeholder: "Value"
        }
      ),
      " ",
      /* @__PURE__ */ e(
        v,
        {
          id: "label",
          value: l.label,
          name: "label",
          onChange: o,
          className: "",
          placeholder: "Label"
        }
      )
    ] }),
    /* @__PURE__ */ e(
      z,
      {
        icon: "pi pi-plus",
        onClick: s
      }
    )
  ] }) });
}, Pe = ({ config: n, onChange: t }) => {
  const [l, a] = u({ ...R, ...n }), o = (c) => {
    const d = { ...l, [c.target.name]: c.target.value };
    a(d), t(d);
  }, s = (c, d) => {
    const m = H(l.options);
    c ? m[d] = c : m.splice(d, 1), console.log(d, m);
    const N = { ...l, options: m };
    a(N), t(N);
  };
  x(() => {
    a({ ...R, ...n });
  }, [n]);
  const r = (c) => {
    const d = H(l.options);
    d.push(c);
    const m = { ...l, options: d };
    a(m), t(m);
  };
  return /* @__PURE__ */ e(p, { children: /* @__PURE__ */ i($, { activeIndex: 0, children: [
    /* @__PURE__ */ e(M, { header: "General", children: /* @__PURE__ */ i("div", { className: "form-item flex flex-column gap-4", children: [
      /* @__PURE__ */ i("div", { className: "flex flex-column gap-2", children: [
        /* @__PURE__ */ e("label", { htmlFor: "label", children: "Label" }),
        /* @__PURE__ */ e(
          v,
          {
            id: "label",
            value: l.label || "",
            name: "label",
            onChange: o,
            className: "w-full"
          }
        )
      ] }),
      /* @__PURE__ */ i("div", { className: "flex flex-column gap-2", children: [
        /* @__PURE__ */ e("label", { htmlFor: "placeholder", children: "Placeholder" }),
        /* @__PURE__ */ e(
          v,
          {
            id: "placeholder",
            value: l.placeholder || "",
            name: "placeholder",
            onChange: o,
            className: "w-full"
          }
        )
      ] })
    ] }) }, "general"),
    " ",
    /* @__PURE__ */ e(M, { header: "Options", children: /* @__PURE__ */ i("div", { className: "form-item flex flex-column gap-4", children: [
      l.options.map((c, d) => /* @__PURE__ */ e(
        Be,
        {
          option: c,
          onChange: (m) => {
            s(m, d);
          }
        },
        `option-${d}`
      )),
      " ",
      /* @__PURE__ */ e(
        Ae,
        {
          onInsert: r
        },
        "item-new"
      )
    ] }) }, "options")
  ] }) });
}, ke = new V({
  type: R.type,
  form: new O({
    render: Ge,
    validation: (n) => (console.log(n), {})
  }),
  settings: new O({
    render: Pe,
    validation: (n) => (console.log(n), {})
  }),
  heading: "Select box",
  description: "select from a list of items in a drop down",
  hidden: !1,
  icon: () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", children: /* @__PURE__ */ e("path", { d: "M384 432c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0zm64-16c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320zM224 352c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4l208 0c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7z" }) }),
  default_config: R
}), je = new W({
  label: "Selects"
}), ne = new K();
ne.registerItem(ke, je);
const A = {
  id: T(),
  type: "content-html",
  label: "",
  value: "",
  placeholder: ""
}, He = ({ config: n, onChange: t }) => {
  const [l, a] = u({ ...A, ...n });
  x(() => {
    a({ ...A, ...n });
  }, [n]);
  const o = Math.random().toString(36).substring(2, 15);
  return /* @__PURE__ */ e(p, { children: /* @__PURE__ */ i("div", { className: "flex flex-column gap-2", children: [
    /* @__PURE__ */ e("label", { htmlFor: o, children: l.label }),
    /* @__PURE__ */ e("div", { dangerouslySetInnerHTML: { __html: l.value } })
  ] }) });
}, Ve = ({ config: n, onChange: t }) => {
  const [l, a] = u({ ...A, ...n }), o = (r) => {
    const c = { ...l, [r.target.name]: r.target.value };
    a(c), t(c);
  }, s = (r) => {
    const c = { ...l, value: r };
    a(c), t(c);
  };
  return x(() => {
    a({ ...A, ...n });
  }, [n]), /* @__PURE__ */ e(p, { children: /* @__PURE__ */ e($, { activeIndex: 0, children: /* @__PURE__ */ e(M, { header: "General", children: /* @__PURE__ */ i("div", { className: "form-item flex flex-column gap-4", children: [
    /* @__PURE__ */ i("div", { className: "flex flex-column gap-2", children: [
      /* @__PURE__ */ e("label", { htmlFor: "label", children: "Label" }),
      /* @__PURE__ */ e(
        v,
        {
          id: "label",
          value: l.label || "",
          name: "label",
          onChange: o,
          className: "w-full"
        }
      )
    ] }),
    /* @__PURE__ */ e(
      Ne,
      {
        value: l.value,
        name: "value",
        onTextChange: (r) => s(r.htmlValue ?? ""),
        style: { minHeight: "300px" }
      }
    )
  ] }) }, "general") }) });
}, Je = new V({
  type: A.type,
  form: new O({
    render: He,
    validation: (n) => (console.log(n), {})
  }),
  settings: new O({
    render: Ve,
    validation: (n) => (console.log(n), {})
  }),
  heading: "HTML Content",
  description: "WYSIWYG editor for adding in content to the form",
  hidden: !1,
  icon: () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 512", children: /* @__PURE__ */ e("path", { d: "M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" }) }),
  default_config: A
}), We = new W({
  label: "Content"
}), le = new K();
le.registerItem(Je, We);
const G = new K();
G.addRegistry(Y);
G.addRegistry(ne);
G.addRegistry(le);
const te = ({ item: n, onChange: t }) => {
  const l = G.getByItem(n);
  return n && l ? j.createElement(l.form.render, {
    config: n,
    onChange: t
  }) : j.createElement(
    () => /* @__PURE__ */ i("div", { children: [
      "The component ",
      n.type,
      " was not found."
    ] })
  );
};
function Ke({ id: n, config: t, active: l, setActive: a, onItemChange: o, onItemRemove: s }) {
  const { attributes: r, listeners: c, setNodeRef: d, setActivatorNodeRef: m, transform: N, transition: h } = ue({
    id: n,
    data: {
      id: n,
      item: t
    }
  }), w = {
    transform: ee.Transform.toString(N),
    transition: h
  };
  let f = "sortable-item";
  t.id == (l == null ? void 0 : l.id) && (f = f + " active");
  const D = () => {
    be({
      message: "Are you sure you want to remove this item?",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      accept: () => s(n)
      // reject: () => rejectFunc()
    });
  };
  let I = /* @__PURE__ */ e(z, { size: "small", outlined: !0, label: "Edit", icon: "pi pi-pencil", onClick: () => a(t) });
  return l && l.id == t.id && (I = /* @__PURE__ */ e(z, { size: "small", outlined: !0, label: "Done", icon: "pi pi-pencil", onClick: () => a(void 0) })), /* @__PURE__ */ e(p, { children: /* @__PURE__ */ i("div", { ref: d, style: w, ...r, className: f, children: [
    /* @__PURE__ */ e(te, { item: t, onChange: o }),
    /* @__PURE__ */ i("div", { className: "flex flex-row align-items-center item-footer", children: [
      /* @__PURE__ */ i("div", { className: "flex-grow-1 item-type", children: [
        " ",
        t.type
      ] }),
      /* @__PURE__ */ i(ve, { children: [
        " ",
        /* @__PURE__ */ e(
          z,
          {
            ...c,
            ref: m,
            size: "small",
            outlined: !0,
            label: "Order",
            icon: "pi pi-sort"
          }
        ),
        I,
        /* @__PURE__ */ e(z, { size: "small", outlined: !0, label: "Remove", icon: "pi pi-trash", onClick: D })
      ] })
    ] })
  ] }) });
}
function Ye({ form: n, onFormChange: t, activeItem: l, setActiveItem: a }) {
  console.log("reloading CanvasComponent");
  const [o, s] = u((n == null ? void 0 : n.config) ?? []);
  x(() => {
    n && n.config && n.config != o && (console.log("resetting items", n, n.config, o), s(n.config ?? []));
  }, [n]);
  const r = (f) => {
    const D = H(n);
    D.config = D.config.filter(
      (I) => I.id != f
    ), t(D), l && l.id == f && a(void 0);
  }, c = (f) => {
    const D = o.map((F) => F.id == f.id ? f : F);
    s(D);
    const I = H(n);
    I.config = D, t(I);
  }, { listeners: d, setNodeRef: m, transform: N, transition: h } = oe({
    id: "canvas_droppable",
    data: {
      parent: null,
      isContainer: !0
    }
  }), w = {
    transform: ee.Transform.toString(N),
    transition: h
  };
  return /* @__PURE__ */ e("div", { ref: m, className: "canvas", style: w, ...d, children: o == null ? void 0 : o.map((f) => /* @__PURE__ */ e(
    Ke,
    {
      id: f.id,
      config: f,
      active: l,
      setActive: a,
      onItemChange: c,
      onItemRemove: r
    },
    f.id
  )) });
}
const Ue = ({ item: n, onChange: t }) => {
  const l = G.getByItem(n);
  return l ? j.createElement(l.settings.render, {
    config: n,
    onChange: t
  }) : j.createElement(
    () => /* @__PURE__ */ i("div", { children: [
      "The component ",
      n.type,
      " was not found."
    ] })
  );
};
function qe({ form: n, onFormChange: t, activeItem: l, setActiveItem: a }) {
  console.log("reloading PropertiesComponent");
  const [o, s] = u(n), [r, c] = u(l), d = (h) => {
    console.log("handleFormItemChange", h), c(h);
    const w = H(o);
    w.config = w.config.map((f) => f.id == h.id ? h : f), t(w);
  }, m = (h) => {
    const w = { ...o, [h.target.name]: h.target.value };
    console.log(w), s(w), t(w);
  }, N = () => {
    a(void 0);
  };
  if (console.log("activeItem", r), x(() => {
    c(l);
  }, [l]), x(() => {
    s(n);
  }, [n]), r) {
    const h = G.getByItem(r);
    if (h) {
      const w = h.icon;
      return /* @__PURE__ */ e(p, { children: /* @__PURE__ */ i("div", { className: "properties active", children: [
        /* @__PURE__ */ i("div", { className: "item-panel-item flex align-items-center", children: [
          /* @__PURE__ */ i("div", { className: "flex-grow-1 flex align-items-center", children: [
            /* @__PURE__ */ e("div", { className: "item-icon mr-2", children: /* @__PURE__ */ e(w, {}) }),
            /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("h2", { children: h.heading }) })
          ] }),
          /* @__PURE__ */ e(z, { onClick: N, size: "small", outlined: !0, icon: "pi pi-times" })
        ] }),
        /* @__PURE__ */ e(Ue, { item: r, onChange: d })
      ] }) });
    }
    return j.createElement(
      () => /* @__PURE__ */ i("div", { children: [
        "The component ",
        r.type,
        " was not found."
      ] })
    );
  } else
    return /* @__PURE__ */ e(p, { children: /* @__PURE__ */ i("div", { className: "properties", children: [
      /* @__PURE__ */ e("div", { className: "item-panel-item flex px-3", children: /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("h2", { children: "Form Settings" }) }) }),
      /* @__PURE__ */ e($, { activeIndex: 0, children: /* @__PURE__ */ e(M, { header: "General", children: /* @__PURE__ */ e("div", { className: "form-item flex flex-column gap-4", children: /* @__PURE__ */ i("div", { className: "flex flex-column gap-2", children: [
        /* @__PURE__ */ e("label", { htmlFor: "label", children: "Form label" }),
        /* @__PURE__ */ e(
          v,
          {
            onChange: m,
            name: "label",
            value: o.label ?? "",
            className: "w-full"
          }
        )
      ] }) }) }, "general") })
    ] }) });
}
function ae({ item: n }) {
  const t = n.icon;
  return /* @__PURE__ */ e(p, { children: /* @__PURE__ */ e("article", { className: "sidebar-field", children: /* @__PURE__ */ i("div", { className: "item-panel-item flex p-2 w-100", children: [
    /* @__PURE__ */ e("div", { className: "item-icon mr-2", children: /* @__PURE__ */ e(t, {}) }),
    /* @__PURE__ */ i("div", { children: [
      /* @__PURE__ */ e("div", { className: "item-title", children: n.heading }),
      /* @__PURE__ */ e("div", { className: "item-text", children: n.description })
    ] })
  ] }) }) });
}
function Qe({ item: n }) {
  const t = xe(T()), { attributes: l, listeners: a, setNodeRef: o } = re({
    id: t.current,
    data: {
      item: n,
      fromSidebar: !0
    }
  });
  return /* @__PURE__ */ e("div", { ref: o, className: "sidebar-field", ...l, ...a, children: /* @__PURE__ */ e(ae, { item: n }) });
}
function Xe({ form: n, onFormChange: t, activeItem: l, setActiveItem: a }) {
  const [o, s] = u(0), r = {};
  G.map((d) => {
    var N, h;
    const m = ((N = d.group) == null ? void 0 : N.label) || "";
    Object.keys(r).includes(m) || (r[m] = {
      label: ((h = d.group) == null ? void 0 : h.label) || "",
      items: []
    }), r[m].items.push(d);
  });
  const c = (d) => {
    s(d);
  };
  return /* @__PURE__ */ e(p, { children: /* @__PURE__ */ i(
    ye,
    {
      activeIndex: o,
      onTabChange: (d) => c(d.index),
      className: "sidebar",
      children: [
        /* @__PURE__ */ i(Z, { header: "Items", children: [
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          /* @__PURE__ */ e($, { activeIndex: 0, children: Object.keys(r).map((d) => /* @__PURE__ */ e(M, { header: r[d].label, children: r[d].items.map((m) => /* @__PURE__ */ e(Qe, { item: m }, `sidebar-${m.type}`)) }, d)) })
        ] }),
        /* @__PURE__ */ i(Z, { header: "Forms", children: [
          "forms ",
          JSON.stringify(n)
        ] })
      ]
    }
  ) });
}
function k(n) {
  var t;
  return ((t = n == null ? void 0 : n.data) == null ? void 0 : t.current) ?? {};
}
let q = 0;
const xn = ({ config: n, onChange: t }) => {
  q = q + 1, console.log("******************", q, "******************");
  const { form: l, setForm: a } = Fe(n), [o, s] = u(void 0);
  x(() => {
    n && a(n);
  }, [n]), x(() => {
    l && t(l);
  }, [l]);
  const r = ie(
    X(se),
    X(ce, {
      coordinateGetter: ge
    })
  ), [c, d] = u(), [m, N] = u(), h = () => {
    d(void 0), N(void 0);
  }, w = (F) => {
    const { active: P } = F, S = k(P);
    console.log("handleDragStart", S);
    const { item: g } = S;
    if (S.fromSidebar) {
      const C = g.default_config;
      C.id = T(), g.id = C.id, console.log("handleDragStart", "sidebar", g, C), console.log(C), d(g), s(S.item);
    } else
      N(S.item);
  }, f = (F) => {
    const { active: P, over: S } = F;
    console.log("over", S);
    const g = k(P), C = k(S);
    if (g.fromSidebar)
      if (console.log("handleDragOver", "fromSidebar", g.item.id), l.config.findIndex((b) => b.id === g.item.id) == -1) {
        console.log("handleDragOver", "new item", g.item.default_config, C), l.config.push(g.item.default_config);
        const b = l.config.findIndex((y) => y.id === g.item.id), _ = l.config.findIndex((y) => y.id === C.id);
        l.config = U(l.config, b, _), a(l);
      } else if (!S)
        console.log("handleDragOver", "!over", C), l.config = l.config.filter((b) => b.id !== g.item.id), a(l);
      else {
        console.log("handleDragOver", "else", C);
        const b = l.config.findIndex((y) => y.id === g.item.id), _ = l.config.findIndex((y) => y.id === C.id);
        console.log("arrayMove", l.config, b, _, C, g), l.config = U(l.config, b, _), a(l), console.log("SET FORM NOW ", l.config, l.config.map((y) => y.id));
      }
    else
      l.config.findIndex((b) => b.id === g.item.id), l.config.findIndex((b) => b.id === C.id);
  }, D = (F) => {
    const { active: P, over: S } = F, g = k(P), C = k(S);
    console.log("handleDragEnd", g, C), console.log("handleDragEnd", l.config);
    const b = l.config.findIndex((y) => y.id === g.item.id), _ = l.config.findIndex((y) => y.id === C.id);
    b != _ && (l.config = U(l.config, b, _), console.log("handleDragEnd normal sorting", b, _), a(l)), s(g.item), h();
  }, I = {
    form: l,
    onFormChange: a,
    activeItem: o,
    setActiveItem: s
  };
  return console.log(a), l ? /* @__PURE__ */ e(p, { children: /* @__PURE__ */ e("div", { className: "form-builder", children: /* @__PURE__ */ i(
    de,
    {
      sensors: r,
      onDragStart: w,
      onDragOver: f,
      onDragEnd: D,
      collisionDetection: me,
      autoScroll: !0,
      children: [
        /* @__PURE__ */ e("div", { className: "sidebar-area", children: /* @__PURE__ */ e(Xe, { ...I }) }),
        /* @__PURE__ */ e("div", { className: "canvas-area", children: /* @__PURE__ */ e(
          pe,
          {
            strategy: fe,
            items: l.config.map((F) => F.id),
            children: /* @__PURE__ */ e(Ye, { ...I })
          }
        ) }),
        /* @__PURE__ */ e("div", { className: "properties-area", children: /* @__PURE__ */ e(qe, { ...I }) }),
        /* @__PURE__ */ i(he, { dropAnimation: null, children: [
          c ? /* @__PURE__ */ e(ae, { item: c }) : null,
          " ",
          m ? /* @__PURE__ */ e(
            te,
            {
              item: m,
              onChange: () => {
              }
            }
          ) : null
        ] })
      ]
    }
  ) }) }) : /* @__PURE__ */ e(p, { children: /* @__PURE__ */ e("div", { children: "No form config loaded" }) });
};
export {
  xn as FormBuilder,
  te as ItemRender
};
//# sourceMappingURL=index.js.map
