import type { App } from "vue";
import { createPinia } from "pinia";
import { useStoreUser } from "./modules/user";
import { useStoreDesign } from "./modules/design";

export const store = createPinia();

// 配置store
export function setupStore(app: App<Element>) {
    app.use(store);
}

export { useStoreUser, useStoreDesign };
