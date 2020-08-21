import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import beforeEach from '@/config/router/beforeEach';
import RouterConfig from '@/config/router/routerConfig';

Vue.use(VueRouter);

const routes: RouteConfig[] = [];

routes.push(...new RouterConfig().obterRotas());

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach(beforeEach);

export default router;