import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://tubranda.com.ar',
  integrations: [tailwind()]
});

