<template>
    <div>
        <div class="h-229px bg-[var(--van-primary-color)]">
            <div class="p-30px pt-150px text-28px color-[var(--van-white)]">欢迎登录</div>
        </div>
        <div class="mt--24px p-30px bg-[var(--van-white)] b-rd-t-24px">
            <div class="flex-y-center mx-auto bg-[var(--van-gray-1)] b-rd-6px b-1px b-solid b-[var(--van-gray-4)]">
                <div class="flex-center wh-45px">
                    <DynamicIcon :size="22" color="var(--van-gray-5)" name="UserOutlined" />
                </div>
                <input
                    class="flex-1 lh-30px b-none bg-transparent text-16px c-[var(--van-black)]"
                    placeholder="请输入账号"
                    type="text"
                />
            </div>
            <div
                class="flex-y-center mx-auto bg-[var(--van-gray-1)] b-rd-6px b-1px b-solid b-[var(--van-gray-4)] mt-25px"
            >
                <div class="flex-center wh-45px">
                    <DynamicIcon :size="22" color="var(--van-gray-5)" name="UnlockOutlined" />
                </div>
                <input
                    :type="showPassword ? 'text' : 'password'"
                    class="flex-1 lh-30px b-none bg-transparent text-16px c-[var(--van-black)]"
                    placeholder="请输入密码"
                />
                <div class="flex-center wh-45px ml-auto">
                    <DynamicIcon
                        :name="showPassword ? 'EyeInvisibleOutlined' : 'EyeOutlined'"
                        :size="22"
                        color="var(--van-gray-5)"
                        @click="changeShowPassword"
                    />
                </div>
            </div>
            <a class="block mt-15px text-right text-14px color-[var(--van-gray-6)]">忘记密码？</a>
            <van-button block class="mt-40px!" type="primary">登录</van-button>
            <a class="block mt-20px text-center text-16px color-[var(--van-primary-color)]">使用账号密码登录</a>
        </div>
    </div>
</template>

<script lang="ts" setup>
let showPassword = ref(false);

let changeShowPassword = () => {
    showPassword.value = !showPassword.value;
};
</script>
