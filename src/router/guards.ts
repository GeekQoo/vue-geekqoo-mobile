import type { Router } from "vue-router";

export function createRouterGuards(router: Router) {
    router.beforeEach((to, from, next) => {
        next();
    });
}
