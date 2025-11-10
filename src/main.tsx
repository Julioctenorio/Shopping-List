import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import About from "./pages/About.tsx";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Home" element={<App />} />
      <Route path="/About" element={<About />} />
    </Routes>
  </BrowserRouter>
);
