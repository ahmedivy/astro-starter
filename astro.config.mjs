import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    starlight({
      title: "My delightful docs site",
    }),
    // mdx(),
    sitemap(),
  ],
});
