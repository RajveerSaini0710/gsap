<template>
  <div>
    <HeaderCard
      :title="aboutUsPageTitle"
      videoUrl="/video/headerCardMainVideo.mp4"
      subTitle="Leading the way in crane rental services since 2008, providing reliable and efficient heavy-lifting solutions."
      isDownIconHash="second"
    />
    <div class="w-full h-screen flex justify-center items-center" id="second">
      hello
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import HeaderCard from "../components/pageSection/headerCard.vue";

const aboutUsPageTitle = ref(["ABOUT", "SAINI", "LIFTERS", "."]);
</script>

<style scoped></style>
