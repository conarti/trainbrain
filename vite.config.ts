import {
  fileURLToPath,
  URL,
} from 'node:url';
import {
  quasar,
  transformAssetUrls,
} from '@quasar/vite-plugin';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
  },
  plugins: [
    vue({
      template: {
        transformAssetUrls,
      },
      script: {
        defineModel: true,
      },
    }),
    quasar({
      autoImportComponentCase: 'combined',
      sassVariables: 'src/app/quasar-variables.scss',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
