import { createRoot } from "react-dom/client";
import App from "./App";

import "./style.scss";

const container = document.getElementById("root");
const root = createRoot(container as Element);

root.render(<App />);
