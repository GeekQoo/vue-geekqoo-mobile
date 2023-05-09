<template>
    <van-config-provider :theme="storeDesign.currentTheme">
        <slot name="default" />
    </van-config-provider>
</template>

<script lang="ts" setup>
let storeDesign = useStoreDesign();
</script>

<style lang="scss">
.van-theme-dark {
    body {
        background: #000;
    }

    --van-black: #fff;
    --van-white: #000;
    --van-gray-1: #1c1c1e;
    --van-gray-2: #232324;
    --van-gray-3: #2c2d2f;
    --van-gray-4: #363738;
    --van-gray-5: #474849;
    --van-gray-6: #858688;
    --van-gray-7: #b2b3b5;
    --van-gray-8: #dfdfdf;
    --van-red: #ff7360;
    --van-blue: #5ea4ff;
    --van-orange: #ffcd9e;
    --van-orange-dark: #ffb34d;
    --van-orange-light: #2e2e2e;
    --van-green: #4cd964;
}
</style>
