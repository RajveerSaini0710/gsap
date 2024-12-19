<template>
  <div>
    <HeaderCard :title="homePageTitle" videoUrl="/video/cranesWorking.mp4" />
    <AboutSection />
    <BaseCarousel />
    <!-- <ArticleSection /> -->
    <BaseLine />
    <TheFooter />
  </div>
</template>

<script setup>
import { ref } from "vue";
import BaseLine from "../components/BaseLine.vue";
import TheFooter from "../components/TheFooter.vue";
import BaseCarousel from "../components/base/baseCarousel.vue";
import HeaderCard from "../components/pageSection/headerCard.vue";
import AboutSection from "../components/pageSection/aboutSection.vue";
// import ArticleSection from "../components/pageSection/articleSection.vue";

const homePageTitle = ref([
  "👷🏽‍♂️",
  "NOTHING",
  "TOO",
  "HIGH",
  "NOTHING",
  "TOO",
  "HEAVY",
  ".",
]);
</script>

<style scoped></style>
