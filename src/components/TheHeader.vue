<template>
  <div
    class="w-full flex justify-between items-center px-[64px] h-[64px] fixed top-0 backdrop-filter backdrop-blur-lg header z-[100]"
    :class="isDark ? 'header-bg-black' : 'header-bg-white'"
  >
    <div class="flex items-center justify-between gap-2">
      <baseButton text="ABOUT" :isLoading="false" />
      <baseButton text="SERVICES" :isLoading="false" />
      <baseButton text="WORK" :isLoading="false" />
    </div>
    <div
      class="text-[32px] font-roslindale cursor-pointer w-full flex items-center justify-center"
      @click="logoClick"
    >
      Saini &nbsp;
      <span class="text-[#FF4057]"> Lifters</span>
    </div>
    <div class="flex items-center justify-between gap-2">
      <baseButton text="CONTACT" :isLoading="false" />
      <baseButton text="EMAIL" :isLoading="false" />

      <baseButton
        :icon="{ name: 'appeture' }"
        iconPosition="right"
        @click="handleToggleDark"
        :isLoading="false"
        class="darkModeToggle"
      >
        <template #buttonContent>
          <span class="darkModeText">{{ isDark ? "LIGHT" : "DARK" }}</span>
        </template>
      </baseButton>
    </div>
  </div>
</template>

<script setup>
import baseButton from "./base/baseButton.vue";
import { gsap } from "gsap";
import { onMounted, ref, watch } from "vue";
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
    delay: 2.2,
    y: -100,
    ease: "elastic.out(1, 0.5)",
  });
});

const handleToggleDark = () => {
  toggleDark();
  if (isDark.value === true) {
    gsap.from(".darkModeText", {
      duration: 1,
      opacity: 0,
      y: -70,
      ease: "expo.out",
    });
    gsap.to(".darkModeText", {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "expo.out",
    });
  } else {
    gsap.from(".darkModeText", {
      duration: 1,
      opacity: 0,
      y: 70,
      ease: "expo.out",
    });
    gsap.to(".darkModeText", {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "expo.out",
    });
  }
};

const logoClick = () => {
  router.push("/home");
};
</script>

<style scoped>
.header {
  opacity: 1;
}
.dot {
  display: inline-block;
  transition: transform 0.5s ease;
  opacity: 0;
}
.header-bg-white {
  background-color: rgb(228 226 235 / 60%);
}

.header-bg-black {
  background-color: rgb(22 23 25 / 50%);
}
</style>
