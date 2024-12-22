<template>
  <div
    class="w-full h-lvh flex flex-col justify-center items-center absolute top-[60px] left-0"
    v-if="!hasVisited"
  >
    <div class="w-full flex justify-center items-center main-div">
      <div class="outerDiv overflow-hidden flex justify-center items-center">
        <span
          class="companyFirstName font-roslindale font-extrabold text-[100px]"
          v-for="(char, index) in companyFirstName"
          :key="index"
        >
          {{ char }}
        </span>
        <span class="mx-[20px] spacing"></span>
        <span
          class="companyLastName font-roslindale font-extrabold text-[100px]"
          v-for="(char, index) in companyLastName"
          :key="index"
        >
          {{ char }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import { onMounted, ref } from "vue";

const companyFirstName = ref(["S", "A", "I", "N", "I"]);

const companyLastName = ref(["L", "I", "F", "T", "E", "R", "S"]);
const tl = gsap.timeline();

onMounted(() => {
  const hasVisited = sessionStorage.getItem("homepage-visited");

  if (!hasVisited) {
    runPreloaderAnimation();
  }
});
const runPreloaderAnimation = () => {
  // Calculate responsive font sizes
  const isMobile = window.innerWidth < 600;
  const largeFontSize = isMobile ? "50px" : "100px";
  const smallFontSize = isMobile ? "20px" : "30px";

  tl.fromTo(
    ".companyFirstName",
    { y: 200, opacity: 0.3, fontSize: largeFontSize },
    {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
    }
  );
  tl.fromTo(
    ".companyLastName",
    { y: 200, opacity: 0.3, fontSize: largeFontSize },
    {
      duration: 1,
      y: 0,
      opacity: 1,
      color: "#FF4057",
      stagger: -0.1,
    },
    "-=1.5"
  );
  tl.to(".companyFirstName", {
    duration: 1,
    fontSize: smallFontSize,
  });
  tl.to(
    ".companyLastName",
    {
      duration: 1,
      fontSize: smallFontSize,
    },
    "-=1"
  );
  tl.to(
    ".spacing",
    {
      duration: 1,
      margin: isMobile ? "2px" : "4px",
    },
    "-=1"
  );

  tl.to(
    ".main-div",
    {
      opacity: 0,
      duration: 1.8,
      y: -600,
    },
    "-=1"
  );
};
</script>
