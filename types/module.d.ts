declare module "*.vue" {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
}
declare module "autoprefixer";
declare module "postcss-pxtorem";
declare module "lodash-es";
declare module "dayjs";
declare module "vant";
