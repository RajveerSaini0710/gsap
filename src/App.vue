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
body {
  background-color: #161719;
  color: #ffffff;
}
</style>
