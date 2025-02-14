<script setup>
import TheHeader from "./components/TheHeader.vue";
import PreLoader from "./components/PreLoader.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const hasVisited = ref(false);

onMounted(() => {
  hasVisited.value = sessionStorage.getItem("homepage-visited");
});
</script>

<template>
  <div>
    <PreLoader v-if="!hasVisited && route.path === '/'"></PreLoader>
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
  @apply bg-white dark:bg-[#161719] dark:text-[#ffffff] text-[#234a76];
}
</style>
