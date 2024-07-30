<template>
  <div
    class="w-full h-dvh flex items-center justify-center flex-col pt-[30px] relative article-container"
  >
    <div
      class="w-full h-full bg-cover flex items-start justify-center absolute z-40 article-img-1"
    >
      <img
        src="https://assets-global.website-files.com/60eeb025115a75902b86a796/647e3cc83822b06137a15c00_Header%201%20Left.jpg"
        alt="left img"
        class="max-w-[469px] max-h-[767px] rounded-[32px] h-[650px]"
      />
    </div>
    <div class="max-w-[600px] w-[50vw] h-full text-center px-[64px]">
      <div
        class="font-mint font-bold dark:text-white text-[#234a76] flex items-center justify-center gap-6"
      >
        <span>MARCH 2023</span>
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
        <span>GREENLAND</span>
      </div>
      <div class="py-[128px] flex flex-col items-center justify-center">
        <p
          class="text-[98px] text-[#234a76] font-bold dark:text-white font-roslindale leading-[100px] pb-6"
        >
          Visit Greenland
        </p>
        <BaseButton
          text="SEE CASE STUDY"
          class="dark:text-[#ffffff] text-[11px] text-[#234a76]"
        />
      </div>

      <div class="pb-[64px] flex items-center justify-center">
        <BaseColorPicker :colorData="colorData" />
      </div>
    </div>
    <div
      class="w-full h-full bg-cover flex items-start justify-center absolute z-30 article-img-2"
    >
      <img
        src="https://assets-global.website-files.com/60eeb025115a75902b86a796/647e3ccc6c2ce83328c9b669_Header%202%20Right.jpg"
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
import { onMounted } from "vue";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const tl = gsap.timeline();
  tl.fromTo(
    ".article-img-1",
    { x: 0, rotate: 0 },
    {
      scrollTrigger: {
        trigger: ".article-container",
        start: "top 100%",
        end: "top 10%",
        scrub: true,
      },
      x: -500,
      rotate: -5,
      duration: 1,
    }
  );
  tl.fromTo(
    ".article-img-2",
    { x: 0, rotate: 0 },
    {
      scrollTrigger: {
        trigger: ".article-container",
        start: "top 100%",
        end: "top 10%",
        scrub: true,
      },
      x: 500,
      rotate: 5,
      duration: 1,
    }
  );
});

const colorData = ["#214356", "#8DB2C3", "#E7E7C1", "#989598", "#445F88"];
</script>
