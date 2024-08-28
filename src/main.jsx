import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Greeting } from "./greetings.jsx";
import { Headers } from "./header.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Greeting />
    <Headers />
  </StrictMode>
);
