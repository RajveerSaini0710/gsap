<template>
  <div class="pt-28 pb-36">
    <div class="container">
      <div class="relative mx-auto max-w-7xl px-4">
        <div ref="emblaRoot" class="overflow-hidden">
          <div class="flex">
            <div
              v-for="(crane, index) in cranes"
              :key="index"
              class="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              <BaseCard :crane="crane" />
            </div>
          </div>
        </div>

        <div class="mt-6 mb-4 flex items-center justify-center gap-6">
          <Button
            variant="outline"
            size="icon"
            class="h-10 w-10 rounded-full border-2 flex items-center justify-center"
            @click="scrollPrev"
          >
            <ChevronLeft class="h-6 w-6" />
            <span class="sr-only">Previous slide</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            class="h-10 w-10 rounded-full border-2 flex items-center justify-center"
            @click="toggleAutoplay"
          >
            <component :is="isPlaying ? Pause : Play" class="h-6 w-6" />
            <span class="sr-only">
              {{ isPlaying ? "Pause autoplay" : "Start autoplay" }}
            </span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            class="h-10 w-10 rounded-full border-2 flex items-center justify-center"
            @click="scrollNext"
          >
            <ChevronRight class="h-6 w-6" />
            <span class="sr-only">Next slide</span>
          </Button>
        </div>

        <div
          class="relative mt-8 mx-auto w-4/5 h-1 overflow-hidden rounded-full dark:bg-zinc-600 bg-zinc-200"
        >
          <div
            class="absolute h-full bg-red-500 transition-all duration-200 ease-out"
            :style="{ width: `${progress * 100}%` }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from "vue";
import EmblaCarousel from "embla-carousel";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-vue-next";
import BaseCard from "./baseCard.vue";

const cranes = reactive([
  {
    name: "XCMG QAY160",
    capacity: "160 tonnes",
    mainBoom: { value: "78m", label: "Main Boom" },
    jib: { value: "21m", label: "JIB" },
    luffing: { value: "63m", label: "Luffing" },
    totalBoom: { value: "162m", label: "Total Boom" },
    image: "../../assets/images/crane-1.png",
  },
  {
    name: "XCMG QAY300",
    capacity: "300 tonnes",
    mainBoom: { value: "90m", label: "Main Boom" },
    jib: { value: "86m", label: "JIB" },
    luffing: { value: "67m", label: "Luffing" },
    totalBoom: { value: "270m", label: "Total Boom" },
    image: "../../assets/images/crane-2.png",
  },
  {
    name: "XCMG QAY200",
    capacity: "200 tonnes",
    mainBoom: { value: "84m", label: "Main Boom" },
    jib: { value: "56m", label: "JIB" },
    luffing: { value: "34m", label: "Luffing" },
    totalBoom: { value: "867m", label: "Total Boom" },
    image: "../../assets/images/crane-4.png",
  },
  {
    name: "GROVE GMK90",
    capacity: "90 tonnes",
    mainBoom: { value: "56m", label: "Main Boom" },
    jib: { value: "24m", label: "JIB" },
    luffing: { value: "48m", label: "Luffing" },
    totalBoom: { value: "130m", label: "Total Boom" },
    image: "../../assets/images/crane-5.png",
  },
]);

const emblaRoot = ref(null);
const emblaApi = ref(null);
const isPlaying = ref(true);
const progress = ref(0);

const autoplayDelay = 4000; // 4 seconds for autoplay
let autoplayInterval = null;

// Initialize the carousel
const initCarousel = () => {
  emblaApi.value = EmblaCarousel(emblaRoot.value, { loop: true });

  // Update progress on scroll
  emblaApi.value.on("scroll", () => {
    updateProgress();
  });

  // Restart autoplay when slide changes
  emblaApi.value.on("select", () => {
    if (isPlaying.value) resetAutoplay();
  });

  startAutoplay();
};

// Start the autoplay interval
const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    emblaApi.value?.scrollNext();
  }, autoplayDelay);
};

// Stop autoplay
const stopAutoplay = () => {
  clearInterval(autoplayInterval);
};

// Reset autoplay interval
const resetAutoplay = () => {
  stopAutoplay();
  startAutoplay();
};

// Update progress based on the carousel scroll position
const updateProgress = () => {
  if (emblaApi.value) {
    const scrollProgress = emblaApi.value.scrollProgress();
    progress.value = scrollProgress; // Returns a value between 0 and 1
  }
};

// Toggle autoplay on/off
const toggleAutoplay = () => {
  isPlaying.value = !isPlaying.value;
  if (isPlaying.value) {
    startAutoplay();
  } else {
    stopAutoplay();
  }
};

// Scroll to the previous slide
const scrollPrev = () => {
  emblaApi.value?.scrollPrev();
};

// Scroll to the next slide
const scrollNext = () => {
  emblaApi.value?.scrollNext();
};

onMounted(() => {
  initCarousel();
});

onUnmounted(() => {
  stopAutoplay();
  emblaApi.value?.destroy();
});
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
