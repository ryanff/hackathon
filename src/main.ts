import "reflect-metadata";
import { createApp } from "vue";
import router from "./router";
import "./style.scss";
import App from "./App";
import "./inversify.config";

import 'ant-design-vue/dist/reset.css';

createApp(App).use(router).mount("#app");
