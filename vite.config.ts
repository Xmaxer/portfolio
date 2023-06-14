import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/

export default defineConfig({
  define: {
    global: 'window',
  },
  optimizeDeps: {
    disabled: false,
    esbuildOptions: {
      resolveExtensions: [
        '.web.js',
        '.js',
        '.ts',
        '.web.ts',
        '.tsx',
        '.jsx',
        '.mts',
        '.mjs',
        '.cjs',
        '.cts',
      ],
    },
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  plugins: [viteCommonjs(), react(), tsconfigPaths()],
  resolve: {
    extensions: [
      '.web.js',
      '.js',
      '.ts',
      '.web.ts',
      '.tsx',
      '.jsx',
      '.mts',
      '.mjs',
      '.cjs',
      '.cts',
    ],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
      include: [],
    },
  },
});
