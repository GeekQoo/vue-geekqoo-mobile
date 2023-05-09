<template>
    <VantProvider>
        <router-view v-slot="{ Component }">
            <transition :name="storeDesign.pageAnimation" appear mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
    </VantProvider>
</template>

<script lang="ts" setup>
let storeDesign = useStoreDesign();
</script>
