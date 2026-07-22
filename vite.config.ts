import { defineConfig, type Plugin, type Connect } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * The legacy /cohort pages are static files under public/cohort, not React
 * routes. Vite's SPA history fallback intercepts extension-less URLs like
 * "/cohort" before it checks whether a matching static file exists, so those
 * links silently served the React homepage instead in `vite dev`/`preview`.
 * This serves the real file directly for the exact paths used across the
 * site's internal links.
 */
const cohortStaticPageMap: Record<string, string> = {
  "/cohort": "cohort/index.html",
  "/cohort/": "cohort/index.html",
  "/cohort/apply": "cohort/apply.html",
  "/cohort/marketers": "cohort/marketers/index.html",
  "/cohort/marketers/": "cohort/marketers/index.html",
};

function cohortStaticPages(): Plugin {
  const middleware: Connect.NextHandleFunction = (req, res, next) => {
    const url = req.url?.split("?")[0];
    const relPath = url ? cohortStaticPageMap[url] : undefined;
    if (!relPath) return next();

    const filePath = path.join(__dirname, "public", relPath);
    if (!fs.existsSync(filePath)) return next();

    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(fs.readFileSync(filePath));
  };

  return {
    name: "cohort-static-pages",
    configureServer(server) {
      server.middlewares.use(middleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware);
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), cohortStaticPages()],
});
