<template>
  <div
    class="flex justify-between items-center px-[64px] h-[64px] sticky top-0 backdrop-filter backdrop-blur-lg header"
  >
    <div class="flex items-center justify-between gap-2">
      <baseButton text="STILLS" :isLoading="false" />
      <baseButton text="MOTION" :isLoading="false" />
      <baseButton text="ABOUT" :isLoading="false" />
    </div>
    <div
      class="text-[32px] font-roslindale cursor-pointer w-full flex items-center justify-center"
      @click="logoClick"
    >
      G<span class="dot">i</span>ul<span class="dot">i</span>a
    </div>
    <div class="flex items-center justify-between gap-2">
      <baseButton text="INSTAGRAM" :isLoading="false" />
      <baseButton text="EMAIL" :isLoading="false" />
      <baseButton
        text="F/24"
        :icon="{ name: 'appeture' }"
        iconPosition="right"
        @click="toggleDark()"
        :isLoading="false"
      />
    </div>
  </div>
</template>

<script setup>
import baseButton from "./base/baseButton.vue";
import { gsap } from "gsap";
import { onMounted } from "vue";
import { useDark, useToggle } from "@vueuse/core";
import { useRouter } from "vue-router";

const router = useRouter();

const isDark = useDark();
const toggleDark = useToggle(isDark);

onMounted(() => {
  const tl = gsap.timeline();

  tl.from(".header", {
    duration: 2,
    opacity: 0,
    y: -100,
    ease: "elastic.out(1, 0.5)",
  })
    .from(
      ".dot",
      {
        duration: 1,
        y: -120,
        opacity: 0,
        ease: "power2.in",
        stagger: 0.25,
      },
      "-=1.8"
    )
    .to(
      ".dot",
      {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "power2.out",
        stagger: 0.25,
      },
      "-=1.8"
    );
});

const logoClick = () => {
  router.push("/home");
};
</script>

<style scoped>
.header {
  opacity: 1; /* Ensure header starts hidden */
}
.dot {
  display: inline-block; /* Ensure it is treated as a block for animation */
  transition: transform 0.5s ease; /* Optional: smooth transition */
  opacity: 0;
}
</style>
