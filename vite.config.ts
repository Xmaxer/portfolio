import {defineConfig} from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

import {viteCommonjs} from '@originjs/vite-plugin-commonjs';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    optimizeDeps: {
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
        alias: {
            'react-native': 'react-native-web',
        },
    },
    build: {
        commonjsOptions: {
            transformMixedEsModules: true,
        },
    },
});
