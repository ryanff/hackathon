import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Talk from "@/views/talk/Talk";
import Pixi from "@/views/pixi/Pixi";
import Webgl from "@/views/webgl/Webgl";
import VideoUpload from "@/views/video_upload/VideoUpload";
import Inversify from "@/views/inversify/Inversify";
import { ROUTE_NAME } from "../config/enums";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: ROUTE_NAME.HOME,
        component: Webgl,
    },
    {
        path: "/list",
        name: ROUTE_NAME.LIST,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/list/List"),
    },
    {
        path: "/talk",
        name: ROUTE_NAME.TALK,
        component: Talk,
    },
    {
        path: "/pixi",
        name: ROUTE_NAME.PIXI,
        component: Pixi
    },
    {
        path: "/webgl",
        name: ROUTE_NAME.WEBGL,
        component: Webgl
    },
    {
        path: "/video-upload",
        name: ROUTE_NAME.VIDEO_UPLOAD,
        component: VideoUpload
    },
    {
        path: "/inversify",
        name: ROUTE_NAME.INVERSIFY,
        component: Inversify
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
