import { defineConfig } from "vite";
import viteAliases from "./plugins/viteAliases";
import viteMockPlugin from "./plugins/viteMockPlugin";
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import viteHtmlTitlePlugin from "./plugins/viteHtmlTitlePlugin";
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
    optimizeDeps: {
        include: []
    },
    envPrefix: 'ENV_',
    css: {
        modules: {
            localsConvention: "camelCaseOnly",
            scopeBehaviour: "local",
            hashPrefix: 'ljh',
        },
        preprocessorOptions: {
            less: {},
            sass: {
                additionalData: `@import "@/style/varuavles.scss";`,
                javascriptEnabled: true
            }
        },
        devSourcemap: true
    },
    server: {
        // proxy: {
        //     '/api': {
        //         target: process.env.ENV_DEV_URL,
        //         changeOrigin: true,
        //         rewrite: (path) => path.replace(/^\/api/, '')
        //     }
        // }
    },
    plugins: [
        viteHtmlTitlePlugin({
            title: "Vite-Vue"
        }),
        vue(),
       
        viteAliases(),
        viteMockPlugin(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),

    ]
})