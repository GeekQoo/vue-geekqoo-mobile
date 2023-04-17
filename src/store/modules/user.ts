import { defineStore } from "pinia";
import { getCookie, setCookie, delCookie } from "@/utils/storage";

interface StateProps {
    token: string;
}

export const useStoreUser = defineStore("user", {
    state: (): StateProps => ({
        token: getCookie("token") || ""
    }),
    actions: {
        setToken(value?: string) {
            if (value) {
                this.token = value;
                setCookie("token", value, 2);
            } else {
                this.token = "";
                delCookie("token");
            }
        }
    }
});
