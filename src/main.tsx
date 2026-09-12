import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Privacy from "./pages/Privacy";
import Refund from "./pages/Refund";
import Support from "./pages/Support";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const app = (
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund-policy" element={<Refund />} />
          <Route path="/support" element={<Support />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

const container = document.getElementById("root")!;

// Prerendered pages ship with real markup already inside #root (see
// scripts/prerender.tsx), so hydrate onto it instead of replacing it —
// that's what keeps content visible before/without JS while still making
// the page interactive once React takes over. Falls back to a plain client
// render for `vite dev`, where #root starts empty.
if (container.innerHTML.trim().length > 0) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
