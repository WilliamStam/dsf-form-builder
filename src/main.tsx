import BuilderDemo from "@/demo/BuilderDemo.tsx";
import ReactDOM from "react-dom/client";

// eslint-disable-next-line ssr-friendly/no-dom-globals-in-module-scope
ReactDOM.createRoot(document.getElementById("root")!).render(
    <BuilderDemo/>
);