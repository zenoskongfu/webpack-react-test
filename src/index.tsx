import { createRoot } from "react-dom/client";
import "./index.scss";
import catImg from "../assets/cat.jpg";
import App from "./App";

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
