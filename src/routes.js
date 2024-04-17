import { createWebHistory, createRouter } from "vue-router";
import Complete from "./components/Complete.vue";
import Home from "./components/Home.vue";

// create routes
const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'complete',
        path: '/thank-you',
        component: Complete
    },
];

const router = createRouter({
    history: createWebHistory,
    routes,
});
export default router;