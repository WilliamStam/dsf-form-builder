import {resolve} from 'path';

import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import hq from 'alias-hq';
import dts from 'vite-plugin-dts';
import styles from "rollup-plugin-styles";
import {peerDependencies} from './package.json';
import svgr from '@svgr/rollup'
import removeConsole from "vite-plugin-remove-console";
// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: hq.get('rollup'),
    },
    plugins: [
        react(),
        dts({
            rollupTypes: true,
            exclude: []
        }),
        svgr(),
        removeConsole()
    ],
    build: {
        sourcemap: true,
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, 'src/lib/index.ts'),
            name: 'Library name',
            // the proper extensions will be added
            fileName: 'index',
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: Object.keys(peerDependencies),
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    'react': 'React',
                    'react-dom': 'ReactDOM',
                },
                assetFileNames: "[name][extname]",
            },
            plugins: [
                styles({mode: "emit"}),
            ],
        },
    },
    css: {
        modules: {
            localsConvention: 'camelCase',
        },
        postcss: {
            plugins: [],
        },
    },
});