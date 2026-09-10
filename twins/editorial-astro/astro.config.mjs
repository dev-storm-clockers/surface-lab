import { defineConfig } from 'astro/config';

// GitHub Pages project site: https://dev-storm-clockers.github.io/surface-lab/
// Twin ships as static files under twins/editorial-astro/dist/
export default defineConfig({
  output: 'static',
  site: 'https://dev-storm-clockers.github.io',
  base: '/surface-lab/twins/editorial-astro/dist',
  server: {
    host: '127.0.0.1',
    port: 4321,
  },
});
