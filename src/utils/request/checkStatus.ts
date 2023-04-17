// 错误提示
const errorMessage = (message: string) => {
    console.log(message);
};

export function checkStatus(status?: Nullable<number>, msg?: string) {
    switch (status) {
        case 401:
            errorMessage("登录状态失效，请重新登录");
            break;
        default:
            errorMessage(msg || "服务异常，请稍后再试");
            break;
    }
}
