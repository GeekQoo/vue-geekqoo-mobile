export function usePublic() {
    let $route = useRoute();
    let $router = useRouter();

    return {
        $route,
        $router
    };
}
