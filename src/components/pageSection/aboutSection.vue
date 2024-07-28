<template>
  <div class="pt-[128px] pb-[64px] px-[64px] flex items-center justify-center">
    <div class="max-w-[700px] text-center">
      <div
        class="about-section-title font-roslindale text-[70px] text-[#234a76] dark:text-[#ffffff] flex items-center justify-center flex-wrap mb-[48px]"
      >
        <span>A&nbsp;</span>
        <div class="mr-[16px]">
          <img
            src="https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/61e939dee9c133675fbab858_Photo%20-%20Dolomites%20-%201.jpg"
            alt="img1"
            loading="lazy"
            width="64"
            height="80"
            class="rounded-[12px]"
          />
        </div>
        <span> tiny mountain &nbsp;</span>
        <span>village &nbsp;</span>
        <div class="mr-[16px]">
          <img
            src="https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/61e939de8821f377935af4c3_Photo%20-%20Dolomites%20-%202.jpg"
            alt="img2"
            loading="lazy"
            width="64"
            height="80"
            class="rounded-[12px]"
          />
        </div>
        <span>where it all &nbsp;</span>
        <span>began&nbsp;</span>
        <span class="three-dots" v-for="(dot, index) in dots" :key="index">{{
          dot
        }}</span>
        <div class="ml-[20px]">
          <img
            src="https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/61e939de360c7c91700e9743_Photo%20-%20Dolomites%20-%203.jpg"
            alt="img3"
            loading="lazy"
            width="120"
            height="80"
            class="rounded-[12px]"
          />
        </div>
      </div>
      <div class="mb-[48px]">
        <p class="text-center font-mint">
          Giulia Gartner () is an outdoor, travel, and commercial photographer,
          filmmaker, and storyteller from the Dolomites in northern Italy. Her
          work focuses on capturing wild and rugged landscapes with a vivid
          color palette and dreamy elements. Her love for photography has
          spilled over into filmmaking which is one of the main creative outlets
          she pursues today.
        </p>
      </div>
      <div class="flex justify-center">
        <BaseButton
          text="READ MY STORY"
          link="https://www.giuliagartner.com/about"
          class="bg-[#234a76] text-[#ffffff] text-[11px]"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseButton from "../base/baseButton.vue";
import { gsap } from "gsap";
import { onMounted, ref } from "vue";

const dots = ref([".", ".", ".", " "]);

const threeDotAnimation = () => {
  const tl = gsap.timeline({ repeat: -1 });

  tl.fromTo(
    ".three-dots",
    { y: 0 },
    {
      duration: 0.8,
      y: -8,
      stagger: 0.2,
      ease: "power1.inOut",
    }
  ).to(
    ".three-dots",
    {
      duration: 0.8,
      y: 0,
      stagger: 0.2,
      ease: "power1.inOut",
    },
    "-=0.8"
  );
};

onMounted(() => {
  threeDotAnimation();
});
</script>

<style scoped></style>
