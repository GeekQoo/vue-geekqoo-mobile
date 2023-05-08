<template>
    <div :style="[`width:${size}px`, `height:${size}px`, `color:${color}`]">
        <component class="block" :is="iconComponent" />
    </div>
</template>

<script lang="ts" setup>
import * as icons from "@vicons/antd";

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

let iconComponent = (icons as UnKnownObject)[props.name];
</script>
