<template>
  <div class="header-card relative">
    <div
      class="absolute top-0 left-0 z-30 px-[64px] pb-[64px] font-roslindale w-full h-[720px] flex items-center justify-center"
    >
      <div
        class="max-w-[900px] flex items-center justify-center gap-3 flex-wrap leading-[60px]"
      >
        <div
          v-for="(word, index) in title"
          :key="index"
          class="w-fit header-card-title"
        >
          <span class="text-[90px] font-bold">{{ word }}</span>
        </div>
      </div>
    </div>
    <div
      class="flex items-center justify-center px-[64px] pb-[64px] w-full h-[720px] absolute top-0 left-0 z-10"
    >
      <video
        loop
        muted
        playsinline
        autoplay
        class="object-cover w-full rounded-[34px] h-full"
      >
        <source
          src="https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/63600c288b483e9c7398616b_reel-transcode.mp4"
          type="video/mp4"
          data-wf-ignore="true"
        />
        <source
          src="https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/63600c288b483e9c7398616b_reel-transcode.webm"
          data-wf-ignore="true"
        />
        Your browser does not support the video tag.
      </video>
    </div>
    <div
      class="header-card-overlay absolute top-0 left-0 z-20 px-[64px] pb-[64px] w-full h-[720px]"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

const title = ref(["GIULIA", "GARTNER", "PHOTOGRAPHER", "&", "FILMMAKER"]);

onMounted(() => {
  console.log(document.querySelectorAll(".header-card-title"));
  const tl = gsap.timeline();
  tl.from(".header-card", {
    opacity: 0,
    duration: 1.5,
    y: 500,
    backdropFilter: "blur(100px)",
    scale: 0,
    ease: "circ.out",
  }).to(".header-card", {
    opacity: 1,
    duration: 1.5,
    y: 0,
    backdropFilter: "blur(0px)",
    scale: 1,
    ease: "circ.out",
  });

  tl.from(
    ".header-card-title",
    {
      opacity: 0,
      duration: 1,
      y: 100,
      ease: "circ.out",
      stagger: 0.3,
    },
    "-=2.4"
  ).to(
    ".header-card-title",
    {
      opacity: 1,
      duration: 1,
      y: 0,
      ease: "circ.out",
      stagger: 0.3,
    },
    "-=2.4"
  );
});
</script>

<style scoped>
.header-card-overlay {
  background-image: linear-gradient(to bottom, var(--shadow), var(--shadow));
  opacity: 0.24;
  background-color: black;
}
</style>
