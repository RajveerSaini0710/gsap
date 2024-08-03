<template>
  <div
    class="w-full h-lvh flex justify-center items-center absolute top-0 left-0 z-[1000]"
  >
    <div class="w-full h-full flex justify-center items-center main-div">
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
  tl.fromTo(
    ".companyFirstName",
    { y: 200, opacity: 0.3 },
    {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
    }
  );
  tl.fromTo(
    ".companyLastName",
    { y: 200, opacity: 0.3 },
    {
      duration: 1,
      y: 0,
      opacity: 1,
      color: "#FF4057",
      stagger: -0.1,
    },
    "-=1.5"
  );
  tl.fromTo(
    ".companyFirstName",
    { fontSize: "100px" },
    {
      duration: 1,
      fontSize: "32px",
    }
  );
  tl.fromTo(
    ".companyLastName",
    { fontSize: "100px" },
    {
      duration: 1,
      fontSize: "32px",
    },
    "-=1"
  );
  tl.fromTo(
    ".spacing",
    { margin: "20px" },
    {
      duration: 1,
      margin: "4px",
    },
    "-=1"
  );

  tl.fromTo(
    ".main-div",
    {
      opacity: 1,
      y: 0,
    },
    {
      opacity: 0,
      duration: 1.8,

      y: -550,
    },
    "-=1"
  );
});
</script>
