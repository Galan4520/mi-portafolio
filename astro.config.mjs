import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import react from '@astrojs/react'; // Añade esta línea para integrar React

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    robotsTxt(),
    react(), // Agrega React a las integraciones
  ],
  site: 'https://porfolio.dev/'
});
