import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/HomePage";
import About from "./views/AboutPage";
import Write from "./views/WritePage";
import Modify from "./views/ModifyPage";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/about",
            component: About
        },
        {
            path: "/write",
            component: Write
        },
        {
            path: "/modify",
            component: Modify
        }
    ]
})

export default router;