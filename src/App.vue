<script setup>
import { ref, watch } from "vue";
import TheHeader from "./components/TheHeader.vue";
import { commonVariables } from "./assets/variables/commonVariables";

const theme = ref("dark");

const handleThemeUpdate = (newTheme) => {
  theme.value = newTheme; // Update the theme based on the emitted value
};

watch(
  () => theme.value,
  (newTheme) => {
    document.body.className = newTheme;
    commonVariables.theme = newTheme;
  },
  { immediate: true }
);
</script>

<template>
  <TheHeader :class="theme" @update-theme="handleThemeUpdate" />
  <router-view v-slot="slotProps" :class="theme">
    <component :is="slotProps.Component" :class="theme"></component>
  </router-view>
</template>

<style>
.dark {
  background-color: #161719;
  color: #ffffff;
}

.light {
  background-color: #e4e2eb;
  color: #234a76;
}
</style>
