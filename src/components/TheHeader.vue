<template>
  <div
    class="w-full flex justify-between items-center px-[64px] h-[64px] fixed top-0 backdrop-filter backdrop-blur-lg header z-[100]"
    :class="isDark ? 'header-bg-black' : 'header-bg-white'"
  >
    <div class="flex items-center justify-between gap-2">
      <baseButton
        text="ABOUT"
        :isLoading="false"
        @click="router.push('/about-us')"
      />
      <baseButton
        text="SERVICES"
        :isLoading="false"
        @click="router.push('/service')"
      />
    </div>
    <div
      class="text-[32px] font-roslindale cursor-pointer w-full flex items-center justify-center"
      @click="logoClick"
    >
      Saini &nbsp;
      <span class="text-[#FF4057]"> Lifters</span>
    </div>
    <div class="flex items-center justify-between gap-2">
      <baseButton
        text="CONTACT"
        :isLoading="false"
        @click="router.push('/contact-us')"
      />
      <baseButton text="EMAIL" :isLoading="false" @click="redirectToEmail" />

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
import { gsap } from "gsap";
import { useRouter, useRoute } from "vue-router";
import { onMounted, watch } from "vue";
import baseButton from "./base/baseButton.vue";
import { useDark, useToggle } from "@vueuse/core";
import { commonVariables } from "../assets/variables/commonVariables.js";
import { redirectToEmail } from "../utils/commonFunctions.js";

const router = useRouter();
const route = useRoute();
const isDark = useDark();
const toggleDark = useToggle(isDark);

onMounted(() => {
  commonVariables.value.darkMode = isDark.value;
  const hasVisited = sessionStorage.getItem("homepage-visited");

  if ((route.path == "/home" || route.path == "/") && !hasVisited) {
    runHeaderAnimation();
  }
});

const runHeaderAnimation = () => {
  const tl = gsap.timeline();

  tl.from(".header", {
    duration: 2,
    opacity: 0,
    delay: 2.3,
    y: -100,
    ease: "elastic.out(1, 0.5)",
  });
};

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

watch(
  () => isDark.value,
  (newValue) => {
    commonVariables.value.darkMode = newValue;
  }
);
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
  background-color: white;
}

.header-bg-black {
  background-color: rgb(22 23 25 / 50%);
}
</style>
