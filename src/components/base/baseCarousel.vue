<template>
  <div class="min-h-screen pt-20 pb-36">
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
          class="relative mt-4 mx-auto w-4/5 h-1 overflow-hidden rounded-full bg-zinc-800"
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
    name: "AC 220-5",
    capacity: "220 tonnes",
    mainBoom: { value: "78.5m", label: "Main Boom" },
    jib: { value: "21m", label: "JIB" },
    luffing: { value: "63m", label: "Luffing" },
    totalBoom: { value: "162.5m", label: "Total Boom" },
    image: "/public/image/crane-1.png",
  },
  {
    name: "LTM 1300-6.2",
    capacity: "300 tonnes",
    mainBoom: { value: "78m", label: "Main Boom" },
    jib: { value: "70m", label: "JIB" },
    luffing: { value: "42m", label: "Luffing" },
    totalBoom: { value: "190m", label: "Total Boom" },
    image: "/public/image/crane-1.png",
  },
  {
    name: "LR 1750-9.1",
    capacity: "750 tonnes",
    mainBoom: { value: "140m", label: "Main Boom" },
    jib: { value: "90m", label: "JIB" },
    luffing: { value: "105m", label: "Luffing" },
    totalBoom: { value: "335m", label: "Total Boom" },
    image: "/public/image/crane-1.png",
  },
  {
    name: "LR 1750-9.1",
    capacity: "750 tonnes",
    mainBoom: { value: "140m", label: "Main Boom" },
    jib: { value: "90m", label: "JIB" },
    luffing: { value: "105m", label: "Luffing" },
    totalBoom: { value: "335m", label: "Total Boom" },
    image: "/public/image/crane-1.png",
  },
  {
    name: "LR 1750-9.1",
    capacity: "750 tonnes",
    mainBoom: { value: "140m", label: "Main Boom" },
    jib: { value: "90m", label: "JIB" },
    luffing: { value: "105m", label: "Luffing" },
    totalBoom: { value: "335m", label: "Total Boom" },
    image: "/public/image/crane-1.png",
  },
  {
    name: "LR 1750-9.1",
    capacity: "750 tonnes",
    mainBoom: { value: "140m", label: "Main Boom" },
    jib: { value: "90m", label: "JIB" },
    luffing: { value: "105m", label: "Luffing" },
    totalBoom: { value: "335m", label: "Total Boom" },
    image: "/public/image/crane-1.png",
  },
]);

const emblaRoot = ref(null);
const emblaApi = ref(null);
const isPlaying = ref(true);
const progress = ref(0);

const autoplayDelay = 4000;
let autoplayInterval = null;

const initCarousel = () => {
  emblaApi.value = EmblaCarousel(emblaRoot.value, { loop: true });
  startAutoplay();
};

const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    if (emblaApi.value) {
      emblaApi.value.scrollNext();
      updateProgress();
    }
  }, autoplayDelay);
};

const stopAutoplay = () => {
  clearInterval(autoplayInterval);
  progress.value = 0;
};

const updateProgress = () => {
  progress.value = (progress.value + 1 / (autoplayDelay / 16)) % 1;
};

const toggleAutoplay = () => {
  isPlaying.value = !isPlaying.value;
  if (isPlaying.value) startAutoplay();
  else stopAutoplay();
};

const scrollPrev = () => {
  emblaApi.value?.scrollPrev();
};

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
