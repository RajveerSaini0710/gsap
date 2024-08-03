<script setup>
import TheHeader from "./components/TheHeader.vue";
import PreLoader from "./components/PreLoader.vue";
</script>

<template>
  <div>
    <PreLoader />
    <div>
      <TheHeader />
      <router-view v-slot="slotProps">
        <component :is="slotProps.Component"></component>
      </router-view>
    </div>
  </div>
</template>

<style>
::-webkit-scrollbar {
  display: none;
}

html.dark {
  color-scheme: dark;
}
body {
  @apply bg-[#e4e2eb] dark:bg-[#161719] dark:text-[#ffffff] text-[#234a76];
}
</style>
