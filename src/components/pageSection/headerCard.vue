<template>
  <div
    class="header-card relative flex items-center justify-center top-[74px] md:top-[80px] h-[680px] mb-[40px] md:mb-[100px]"
  >
    <div
      class="absolute top-0 left-0 z-30 px-[25px] md:px-[64px] pb-[64px] font-roslindale w-full h-[680px] flex flex-col items-center justify-center"
    >
      <div class="flex flex-1 flex-col items-center justify-center">
        <div>
          <div
            class="max-w-[900px] flex items-center justify-center gap-3 md:gap-6 flex-wrap leading-[40px] md:leading-[60px]"
          >
            <div
              v-for="(word, index) in props.title"
              :key="index"
              class="w-fit header-card-title text-white"
            >
              <span
                class="title-text"
                :class="{
                  'text-[#FF4057]':
                    word == 'HEAVY' ||
                    word == '.' ||
                    word == 'HIGH' ||
                    word == 'SAINI' ||
                    word == 'LIFTERS',
                }"
                >{{ word }}</span
              >
            </div>
          </div>
        </div>
        <div
          v-if="props.subTitle"
          class="text-white mt-4 text-2xl md:w-[60%] text-center"
        >
          <TextGenerate :words="props.subTitle" />
        </div>
      </div>
      <div
        v-if="props.isDownIconHash"
        class="flex items-center justify-center chevron-down"
      >
        <ChevronDown
          class="h-10 w-10 cursor-pointer text-red-500"
          @click="scrollToElement(props.isDownIconHash)"
        />
      </div>
    </div>

    <!-- Video Container -->
    <div class="video-container relative flex items-center justify-center">
      <video
        loop
        muted
        playsinline
        autoplay
        class="video-player object-cover md:rounded-[34px]"
      >
        <source :src="props.videoUrl" type="video/mp4" data-wf-ignore="true" />
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
import { gsap } from "gsap";
import { onMounted, onBeforeUnmount } from "vue";
import { useRoute } from "vue-router";
import { ChevronDown } from "lucide-vue-next";
import TextGenerate from "../inspiraUi/textGenerate.vue";
import { commonVariables } from "../../assets/variables/commonVariables.js";

const props = defineProps({
  title: {
    type: Array,
    required: true,
  },
  videoUrl: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: false,
  },
  isDownIconHash: {
    type: String,
    required: false,
  },
});

const route = useRoute();

onMounted(() => {
  const hasVisited = sessionStorage.getItem("homepage-visited");

  if (route.path == "/" && !hasVisited) {
    runAnimations();
    // sessionStorage.setItem("homepage-visited", "true");
  }

  gsap.from(".chevron-down", {
    y: 30,
    duration: 1,
    yoyo: true,
    repeat: -1,
  });
});

const runAnimations = () => {
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
};

const scrollToElement = (hash) => {
  const element = document.getElementById(hash);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
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

@media (max-width: 500px) {
  .video-container {
    width: 100%; /* 95% width for smaller screens like iPads and phones */
  }
  .title-text {
    font-size: 30px; /* Slightly smaller font size for smaller screens */
  }
  .header-card-overlay {
    border-radius: 0px;
  }
}

@media (min-width: 501px) and (max-width: 1024px) {
  .video-container {
    width: 95%; /* 95% width for smaller screens like iPads and phones */
  }

  .title-text {
    font-size: 50px; /* Slightly smaller font size for smaller screens */
  }

  .header-card {
    top: 75px;
  }
}

@media (min-width: 1025px) {
  .video-container {
    width: 90%; /* 90% width for laptops and larger screens */
  }

  .title-text {
    font-size: 80px; /* Larger font size for larger screens */
  }
}
</style>
