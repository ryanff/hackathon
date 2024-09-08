import { defineConfig, loadEnv } from "vite";
import dts from 'vite-plugin-dts'
import { createHtmlPlugin } from "vite-plugin-html";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { fileURLToPath } from "url";
import { resolve } from "path";
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {

    // 加载指定模式下的环境变量
    const env = loadEnv(mode, process.cwd());
    return {
        plugins: [
            dts(),
            vue(),
            vueJsx(),
            Components({
                resolvers: [
                    AntDesignVueResolver({
                        importStyle: false, // css in js
                    }),
                ],
            }),
            mkcert(),
            createHtmlPlugin({
                entry: 'src/main.ts',
                inject: {
                    data: {
                        title: `Ryan's Blog`,
                    },
                },
            }),
        ],
        // build: {
        //     outDir: "dist",
        //     lib: {
        //         entry: resolve(__dirname, "./src/components/VideoUpload/VideoUpload.tsx"),
        //         formats: ["es"],
        //         name: 'VideoUpload',
        //         fileName: format => `index.${format}.js`,
        //     },
        //     rollupOptions: {
        //         external: ["vue"],
        //         output: {
        //             globals: {
        //                 vue: "Vue",
        //             },
        //         },
        //     }
        // },
        base: "./", // 将根路径换成相对路径
        resolve: {
            alias: {
                "@": fileURLToPath(new URL("./src", import.meta.url)),
            },
        },
        server: {
            proxy: {
                "/marvin_latest": {
                    target: env.VITE_MARVIN_URI,
                    changeOrigin: true,
                    // rewrite: (path) => path.replace(/^\/api/, ""),
                },
            },
            https: true,
        }
    }
});
