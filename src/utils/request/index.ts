import type { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig, Method } from "axios";
import axios from "axios";
import { checkStatus } from "./checkStatus";

let service: AxiosInstance = axios.create({
    timeout: 30000,
    withCredentials: true,
    baseURL: import.meta.env.VITE_API_URL
});

// 请求拦截
service.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => config,
    (error) => Promise.reject(error)
);

// 响应类型
interface ResponseProps<T = UnKnownObject> {
    code: number;
    data?: T;
}

// 响应拦截
service.interceptors.response.use(
    (response: AxiosResponse<ResponseProps>) => response,
    (error) => {
        checkStatus(error?.response?.status);
        return Promise.reject(error.response);
    }
);

// 请求封装
export function httpRequest(
    url: string,
    method: Method,
    config?: UnKnownObject
): Promise<AxiosResponse<ResponseProps>> {
    return service({
        url,
        method,
        ...config
    });
}
