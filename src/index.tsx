import { createRoot } from "react-dom/client";
import "./index.scss";
import catImg from "../assets/cat.jpg";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root")!);
root.render(<BrowserRouter><App /></BrowserRouter>);
