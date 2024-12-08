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
            class="title-text"
            :class="{
              'text-[#FF4057]':
                word == 'HEAVY' || word == '.' || word == 'HIGH',
            }"
            >{{ word }}</span
          >
        </div>
      </div>
    </div>

    <!-- Video Container -->
    <div class="video-container relative flex items-center justify-center">
      <video
        loop
        muted
        playsinline
        autoplay
        class="video-player object-cover rounded-[34px]"
      >
        <source
          src="../../assets/video/cranesWorking.mp4"
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

      <!-- Overlay -->
      <div class="header-card-overlay absolute top-0 left-0"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

const title = ref([
  "👷🏽‍♂️",
  "NOTHING",
  "TOO",
  "HIGH",
  "NOTHING",
  "TOO",
  "HEAVY",
  ".",
]);

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
.video-container {
  position: relative;
  width: 90%;
  height: 100%;
  margin: 0 auto;
}

.video-player {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.header-card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, var(--shadow), var(--shadow));
  opacity: 0.5;
  background-color: black;
  border-radius: 34px;
}

/* Title Text Adjustments */
.title-text {
  font-size: 80px;
  font-weight: bold;
  transition: font-size 0.3s ease;
}

@media (max-width: 1024px) {
  .video-container {
    width: 95%; /* 95% width for smaller screens like iPads and phones */
  }

  .title-text {
    font-size: 70px; /* Slightly smaller font size for smaller screens */
  }
}

@media (min-width: 1024px) {
  .video-container {
    width: 90%; /* 90% width for laptops and larger screens */
  }

  .title-text {
    font-size: 80px; /* Larger font size for larger screens */
  }
}
</style>
