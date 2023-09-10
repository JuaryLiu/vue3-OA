import { defineConfig } from "vite";
import { Plugin as importToCDN, autoComplete } from 'vite-plugin-cdn-import'
import viteCompression from 'vite-plugin-compression'
import vueJsx from '@vitejs/plugin-vue-jsx'
import {visualizer} from "rollup-plugin-visualizer";
export default defineConfig({
    plugins: [
        vueJsx(),
        viteCompression({
            threshold: 10240000 // 对大于 1mb 的文件进行压缩
        }),
        visualizer({
            emitFile: false,
            filename: 'analysis-chart.html', // 分析图生成的文件名
            open: true // 如果存在本地服务端口，将在打包后自动展示
        }),
        importToCDN({
            prodUrl: 'https://unpkg.com/{name}@{version}/{path}',
            modules: [
                autoComplete('vue'),
                autoComplete('axios'),
                {
                    name: 'pinia',
                    var: 'Pinia',
                    path: 'dist/pinia.iife.js'
                },
                {
                    name: 'element-plus',
                    var: 'ElementPlus',
                    path: 'dist/index.full.js',
                    css: 'dist/index.css'
                },
                {
                    name: 'vue-router',
                    var: 'VueRouter',
                    path: 'dist/vue-router.global.js'
                },
                {
                    name: 'vue-i18n',
                    var: 'VueI18n',
                    path: 'dist/vue-i18n.global.prod.js',
                },
            ]
        })
    ],
    build: {
        minify: "terser",
        terserOptions: {
            compress: {
                drop_console: process.env.NODE_ENV === 'production' ? true : false,
                drop_debugger: process.env.NODE_ENV === 'production' ? true : false,
            },
        },
        chunkSizeWarningLimit: 1024,
        rollupOptions: {
            output: {
                globals: {},
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',
                assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
                manualChunks: (id) => {
                    if (id.includes("node_modules")) {
                        return id.toString().split('node_modules/')[1].split('/')[0].toString();
                    }
                }
            }
        }
    },
})