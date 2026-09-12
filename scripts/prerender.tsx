// Prerenders each route to static HTML after `vite build` has produced the
// client bundle. This makes /privacy, /terms, and /support (and /) reachable
// as real HTTP 200 documents whose content is present in the initial HTML —
// no client-side JS run is required for the content to exist. The same JS
// bundle still loads afterwards and hydrates the page for interactivity
// (nav menu, FAQ accordion, etc.).
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from "react";
import { StaticRouter, Routes, Route } from "react-router-dom";
import Layout from "../src/components/Layout";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Pricing from "../src/pages/Pricing";
import Privacy from "../src/pages/Privacy";
import Refund from "../src/pages/Refund";
import Support from "../src/pages/Support";
import Terms from "../src/pages/Terms";
import NotFound from "../src/pages/NotFound";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, "../dist");

const ROUTES: Array<{ path: string; outFile: string; title?: string; description?: string }> = [
  { path: "/", outFile: "index.html" },
  {
    path: "/about",
    outFile: "about/index.html",
    title: "About — Flow AI Studio",
    description: "About Flow AI Studio, an independent third-party Chrome extension for Google Flow.",
  },
  {
    path: "/pricing",
    outFile: "pricing/index.html",
    title: "Pricing — Flow AI Studio",
    description: "Flow AI Studio pricing: a Free plan and a Max plan with unlimited daily prompts.",
  },
  {
    path: "/privacy",
    outFile: "privacy/index.html",
    title: "Privacy Policy — Flow AI Studio",
    description:
      "How Flow AI Studio, an independent third-party Chrome extension, handles information when you use it.",
  },
  {
    path: "/refund-policy",
    outFile: "refund-policy/index.html",
    title: "Refund & Cancellation Policy — Flow AI Studio",
    description: "Refund and cancellation policy for Flow AI Studio's Max plan subscription.",
  },
  {
    path: "/support",
    outFile: "support/index.html",
    title: "Support — Flow AI Studio",
    description: "Get help with installation, generation, downloads, and the Flow AI Studio prompt library.",
  },
  {
    path: "/terms",
    outFile: "terms/index.html",
    title: "Terms of Use — Flow AI Studio",
    description: "Terms of Use for Flow AI Studio, an independent third-party Chrome extension.",
  },
  { path: "/this-route-does-not-exist", outFile: "404.html" },
];

// Mirrors the route tree in src/main.tsx exactly, so prerendered output
// always matches what the client router would have shown.
function AppTree() {
  return createElement(
    Routes,
    null,
    createElement(
      Route,
      { element: createElement(Layout) },
      createElement(Route, { path: "/", element: createElement(Home) }),
      createElement(Route, { path: "/about", element: createElement(About) }),
      createElement(Route, { path: "/pricing", element: createElement(Pricing) }),
      createElement(Route, { path: "/privacy", element: createElement(Privacy) }),
      createElement(Route, { path: "/refund-policy", element: createElement(Refund) }),
      createElement(Route, { path: "/support", element: createElement(Support) }),
      createElement(Route, { path: "/terms", element: createElement(Terms) }),
      createElement(Route, { path: "*", element: createElement(NotFound) })
    )
  );
}

function renderRoute(path: string) {
  const app = createElement(StaticRouter, { location: path }, createElement(AppTree));
  return renderToStaticMarkup(app);
}

const template = readFileSync(resolve(distDir, "index.html"), "utf-8");

for (const route of ROUTES) {
  const markup = renderRoute(route.path);
  let html = template.replace('<div id="root"></div>', `<div id="root">${markup}</div>`);

  if (route.title) {
    html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${route.title}</title>`);
    html = html.replace(
      /(<meta property="og:title" content=")[\s\S]*?("\s*\/>)/,
      `$1${route.title}$2`
    );
    html = html.replace(
      /(<meta name="twitter:title" content=")[\s\S]*?("\s*\/>)/,
      `$1${route.title}$2`
    );
  }
  if (route.description) {
    html = html.replace(
      /<meta\s+name="description"\s+content="[\s\S]*?"\s*\/>/,
      `<meta name="description" content="${route.description}" />`
    );
    html = html.replace(
      /(<meta\s+property="og:description"\s+content=")[\s\S]*?("\s*\/>)/,
      `$1${route.description}$2`
    );
    html = html.replace(
      /(<meta\s+name="twitter:description"\s+content=")[\s\S]*?("\s*\/>)/,
      `$1${route.description}$2`
    );
  }

  const outPath = resolve(distDir, route.outFile);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html);
  console.log(`  prerendered ${route.path.padEnd(28)} -> dist/${route.outFile}`);
}
