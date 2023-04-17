import { useRoute, useRouter } from "vue-router";

export function usePublic() {
    const $route = useRoute();
    const $router = useRouter();

    return {
        $route,
        $router
    };
}
