import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

function absoluteSocialMeta() {
  return {
    name: "absolute-social-meta",
    transformIndexHtml(html: string) {
      const host =
        process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL || "";
      if (!host) return html;
      const origin = `https://${host}`;
      return html
        .replaceAll('content="/og-image.png"', `content="${origin}/og-image.png"`)
        .replaceAll('content="__SITE_ORIGIN__"', `content="${origin}/"`);
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), absoluteSocialMeta()],
});
