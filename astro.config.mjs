import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";

import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue(), markdoc()]
});