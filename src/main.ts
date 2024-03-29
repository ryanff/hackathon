import "reflect-metadata";
import { createApp } from "vue";
import router from "./router";
import "./style.scss";
import App from "./App";

createApp(App).use(router).mount("#app");
