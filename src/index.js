import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const root = document.querySelector("#root");
const reactRoot = createRoot(root);

reactRoot.render(<StrictMode>Hello!</StrictMode>);
