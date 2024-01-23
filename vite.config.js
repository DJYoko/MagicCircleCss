import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    extensions: ['.scss'],
  },
  base: './',
  publicDir: 'docs',
  build: {
    outDir: './docs',
    assetsDir: './resources',
    emptyOutDir: false,
    rollupOptions: {
      // input: './index.html',
      output: {
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
});
