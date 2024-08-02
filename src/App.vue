<script setup>
import { onMounted, ref } from "vue";

import TheHeader from "./components/TheHeader.vue";
import PreLoader from "./components/PreLoader.vue";

const isLoading = ref(true);

onMounted(() => {
  document.body.style.overflow = "hidden";
  setTimeout(() => {
    isLoading.value = true;
    document.body.style.overflow = "";
  }, 3000);
});
</script>

<template>
  <div>
    <PreLoader v-if="isLoading" />
    <div v-else>
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
