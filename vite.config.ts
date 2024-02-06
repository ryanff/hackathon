import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { fileURLToPath } from "url";

const pkg = require("./package.json");
console.log(pkg.version);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    // createHtmlPlugin({
    //   inject: {
    //     data: {
    //       version: pkg.version,
    //     },
    //   },
    // }),
  ],
  base: "./", // 将根路径换成相对路径
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
