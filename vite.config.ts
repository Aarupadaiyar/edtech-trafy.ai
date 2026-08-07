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
  server: {
    // The blog now lives in ./blog as its own Next.js app (run separately
    // via `npm run dev` inside that folder, default port 3000). This proxy
    // points local `vite dev` at that local instance instead of the old
    // externally-hosted deployment, so /blog serves the current blog code
    // during local development.
    //
    // Production still rewrites /blog via vercel.json, which has NOT been
    // repointed yet — it still targets the old trafyai.vercel.app deployment
    // until a new Vercel project is created for ./blog (see blog/DEPLOY.md
    // for what that needs). Update vercel.json's destination once that
    // project's URL exists.
    proxy: {
      "/blog": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/blog/, "/intelligence"),
      },
      // Next.js always serves its JS/CSS chunks from this fixed path
      // regardless of where the page itself is mounted, so it must be
      // proxied too or the blog renders unstyled with no hydration.
      "/_next": {
        target: "http://localhost:3000",
        changeOrigin: true,
        ws: true,
      },
      // The blog's own internal links point at its native /intelligence
      // path (it isn't aware it's being proxied under /blog), so that
      // path needs proxying too or in-page navigation breaks.
      "/intelligence": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
});
