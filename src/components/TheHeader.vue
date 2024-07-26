<template>
  <div
    class="flex justify-between items-center px-[64px] h-[64px] sticky top-0 backdrop-filter backdrop-blur-lg header"
  >
    <div class="flex items-center justify-between gap-2">
      <baseButton text="STILLS" :isLoading="false" />
      <baseButton text="MOTION" :isLoading="false" />
      <baseButton text="ABOUT" :isLoading="false" />
    </div>
    <div class="text-[32px] font-roslindale">Giulia</div>
    <div class="flex items-center justify-between gap-2">
      <baseButton text="INSTAGRAM" :isLoading="false" />
      <baseButton text="EMAIL" :isLoading="false" />
      <baseButton
        text="F/24"
        :icon="{ name: 'appeture' }"
        iconPosition="right"
        :isLoading="false"
      />
    </div>
  </div>
</template>

<script setup>
import baseButton from "./base/baseButton.vue";
import { gsap } from "gsap";
import { onMounted } from "vue";

onMounted(() => {
  gsap.to(".header", {
    duration: 2,
    opacity: 1,
    ease: "power4.out",
  });
});
</script>

<style scoped>
.header {
  opacity: 0; /* Ensure header starts hidden */
}
</style>
