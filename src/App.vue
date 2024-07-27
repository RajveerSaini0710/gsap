<script setup>
import TheHeader from "./components/TheHeader.vue";
</script>

<template>
  <TheHeader />
  <router-view v-slot="slotProps">
    <component :is="slotProps.Component"></component>
  </router-view>
</template>

<style>
html.dark {
  color-scheme: dark;
}
body {
  @apply bg-[#e4e2eb] dark:bg-[#161719] dark:text-[#ffffff] text-[#234a76];
}
</style>
