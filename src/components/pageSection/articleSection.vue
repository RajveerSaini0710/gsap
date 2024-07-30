<template>
  <div
    class="w-full h-dvh flex items-center justify-center flex-col pt-[30px] relative pb-[64px]"
    :class="`article-container${index}`"
    v-for="(article, index) in articleSectionData"
    :key="index"
  >
    <div
      class="h-full bg-cover flex items-start justify-center absolute z-40"
      :class="`article-img-1${index}`"
    >
      <img
        :src="article.image.image1"
        alt="left img"
        class="max-w-[469px] max-h-[767px] rounded-[32px] h-[650px]"
      />
    </div>
    <div class="max-w-[600px] w-[50vw] h-full text-center px-[64px]">
      <div
        class="font-mint font-bold dark:text-white text-[#234a76] flex items-center justify-center gap-6"
      >
        <span>{{ article.date }}</span>
        <svg
          width="16"
          height="8"
          viewBox="0 0 16 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 4L-8.26528e-07 8L-4.76837e-07 -6.99382e-07L16 4Z"
            fill="currentcolor"
          ></path>
        </svg>
        <span>{{ article.place }}</span>
      </div>
      <div class="py-[128px] flex flex-col items-center justify-center">
        <p
          class="text-[98px] text-[#234a76] font-bold dark:text-white font-roslindale leading-[100px] pb-6"
        >
          {{ article.title }}
        </p>
        <BaseButton
          :text="article.buttonText"
          class="dark:text-[#ffffff] text-[11px] text-[#234a76]"
        />
      </div>

      <div class="pb-[64px] flex items-center justify-center">
        <BaseColorPicker :colorData="article.colorData" />
      </div>
    </div>
    <div
      class="h-full bg-cover flex items-start justify-center absolute z-30"
      :class="`article-img-2${index}`"
    >
      <img
        :src="article.image.image2"
        alt="left img"
        class="max-w-[469px] max-h-[767px] rounded-[32px] h-[650px]"
      />
    </div>
  </div>
</template>

<script setup>
import BaseButton from "../base/baseButton.vue";
import BaseColorPicker from "../base/baseColorPicker.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { onMounted, onBeforeUnmount } from "vue";
import { articleSectionData } from "../../assets/variables/commonVariables.js";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  articleSectionData.value.forEach((article, index) => {
    const tl = gsap.timeline();
    tl.fromTo(
      `.article-img-1${index}`,
      { x: 0, rotate: 0 },
      {
        scrollTrigger: {
          trigger: `.article-container${index}`,
          start: "8% 100%",
          end: "8% 10%",
          scrub: true,
        },
        x: -500,
        rotate: -5,
        duration: 1,
      }
    );
    tl.fromTo(
      `.article-img-2${index}`,
      { x: 0, rotate: 0 },
      {
        scrollTrigger: {
          trigger: `.article-container${index}`,
          start: "8% 100%",
          end: "8% 10%",
          scrub: true,
        },
        x: 500,
        rotate: 5,
        duration: 1,
      }
    );
  });
});

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
</script>
