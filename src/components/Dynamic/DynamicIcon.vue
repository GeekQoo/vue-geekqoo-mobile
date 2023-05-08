<template>
    <div :class="`wh-${size}px`" :style="`color:${color}`">
        <component :is="iconComponent" class="block" />
    </div>
</template>

<script lang="ts" setup>
import * as icons from "@vicons/antd";
import { computed } from "vue";

let props = withDefaults(
    defineProps<{
        name: string;
        size: number;
        color: string;
    }>(),
    {
        size: 20,
        color: "#333333"
    }
);

let iconComponent = computed(() => (icons as UnKnownObject)[props.name]);
</script>
