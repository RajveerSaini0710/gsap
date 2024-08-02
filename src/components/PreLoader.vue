<template>
  <div class="w-full h-lvh flex justify-center items-center">
    <div class="outerDiv overflow-hidden flex justify-center items-center">
      <span
        class="companyFirstName font-roslindale font-extrabold text-[100px]"
        v-for="(char, index) in companyFirstName"
        :key="index"
      >
        {{ char }}
      </span>
      <span class="mx-[20px]"></span>
      <span
        class="companyLastName font-roslindale font-extrabold text-[100px]"
        v-for="(char, index) in companyLastName"
        :key="index"
      >
        {{ char }}
      </span>
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
      duration: 0.9,
      y: 0,
      opacity: 1,
      stagger: -0.1,
    },
    "-=1.5"
  );
});
</script>
