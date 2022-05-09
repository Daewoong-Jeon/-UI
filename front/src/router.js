import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/HomePage";
import Config from "./views/ConfigPage";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/config",
            component: Config
        }
    ]
})

export default router;