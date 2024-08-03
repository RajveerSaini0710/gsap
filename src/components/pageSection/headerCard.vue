<template>
  <div
    class="header-card relative flex items-center justify-center top-[70px] h-[780px]"
  >
    <div
      class="absolute top-0 left-0 z-30 px-[64px] pb-[64px] font-roslindale w-full h-[720px] flex items-center justify-center"
    >
      <div
        class="max-w-[900px] flex items-center justify-center gap-6 flex-wrap leading-[60px]"
      >
        <div
          v-for="(word, index) in title"
          :key="index"
          class="w-fit header-card-title text-white"
        >
          <span
            class="text-[80px] font-bold"
            :class="{
              'text-[#FF4057]':
                word == 'HEAVY' || word == '.' || word == 'HIGH',
            }"
            >{{ word }}</span
          >
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
          src="../../assets/video/headerCardMainVideo.mp4"
          type="video/mp4"
          data-wf-ignore="true"
        />
        <source
          src="https://firebasestorage.googleapis.com/v0/b/saini-lifters.appspot.com/o/folder%2F6595755-uhd_3840_2160_24fps.mp4?alt=media&token=02fe8cef-4c6f-49a2-a06e-22680af94f3d"
          type="video/mp4"
          data-wf-ignore="true"
        />
        Your browser does not support the video tag.
      </video>
    </div>
    <div
      class="header-card-overlay absolute top-0 z-20 px-[64px] pb-[64px] w-[91%] h-[655px] flex items-center justify-center rounded-[34px]"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

const title = ref([
  "🦾",
  "NOTHING",
  "TOO",
  "HIGH",
  "NOTHING",
  "TOO",
  "HEAVY",
  ".",
]);

const isVideoLoaded = ref(false);

onMounted(() => {
  const tl = gsap.timeline();
  tl.from(".header-card", {
    opacity: 0,
    duration: 2.5,
    delay: 2.5,
    y: 600,
    backdropFilter: "blur(100px)",
    scale: 0,
    ease: "circ.out",
  }).to(".header-card", {
    opacity: 1,
    duration: 2.5,
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
  opacity: 0.3;
  background-color: black;
}
</style>
