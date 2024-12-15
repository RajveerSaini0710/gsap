<script setup>
import { onMounted, ref } from "vue";
import EmblaCarousel from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import BaseCardCarousel from "./BaseCardCarousel.vue"; // Your card component
import { ChevronRight, ChevronLeft } from "lucide-vue-next";

const cranes = [
  {
    name: "LTM 1300-6.2",
    capacity: "300 tonnes",
    mainBoom: "78m",
    jib: "70m",
    luffing: "42m",
    totalBoom: "190m",
    image: "/public/image/crane-1.png",
  },
  {
    name: "LR 1750-9.1",
    capacity: "750 tonnes",
    mainBoom: "140m",
    jib: "90m",
    luffing: "105m",
    totalBoom: "335m",
    image: "/public/image/crane-2.png",
  },
  {
    name: "AC 220-5",
    capacity: "220 tonnes",
    mainBoom: "78.5m",
    jib: "21m",
    luffing: "63m",
    totalBoom: "162.5m",
    image: "/public/image/crane-3.png",
  },
  {
    name: "AC 220-5",
    capacity: "220 tonnes",
    mainBoom: "78.5m",
    jib: "21m",
    luffing: "63m",
    totalBoom: "162.5m",
    image: "/public/image/crane-3.png",
  },
  {
    name: "AC 220-5",
    capacity: "220 tonnes",
    mainBoom: "78.5m",
    jib: "21m",
    luffing: "63m",
    totalBoom: "162.5m",
    image: "/public/image/crane-3.png",
  },
  {
    name: "AC 220-5",
    capacity: "220 tonnes",
    mainBoom: "78.5m",
    jib: "21m",
    luffing: "63m",
    totalBoom: "162.5m",
    image: "/public/image/crane-3.png",
  },
];

const emblaRef = ref(null);
let embla;

const initializeCarousel = () => {
  const viewportNode = emblaRef.value.querySelector(".embla__viewport");
  const prevButtonNode = emblaRef.value.querySelector(".embla__prev");
  const nextButtonNode = emblaRef.value.querySelector(".embla__next");

  embla = EmblaCarousel(viewportNode, { loop: true }, [Autoplay()]);

  // Add click listeners for navigation buttons
  prevButtonNode.addEventListener("click", () => embla.scrollPrev());
  nextButtonNode.addEventListener("click", () => embla.scrollNext());
};

onMounted(() => {
  initializeCarousel();
});
</script>

<template>
  <div class="embla" ref="emblaRef">
    <div class="embla__viewport">
      <div class="embla__container">
        <div v-for="(crane, index) in cranes" :key="index" class="embla__slide">
          <BaseCardCarousel :crane="crane" />
        </div>
      </div>
    </div>
    <div class="flex w-full justify-evenly mt-8">
      <ChevronLeft class="embla__prev">Prev</ChevronLeft>
      <ChevronRight class="embla__next">Next</ChevronRight>
    </div>
  </div>
</template>

<style scoped>
.embla {
  height: 700px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.embla__container {
  display: flex;
  align-items: center;
}

.embla__slide {
  margin-right: 16px;
  margin-left: 16px;
}

.embla__container > .embla__slide {
  padding: 0 8px;
}

.embla__prev,
.embla__next {
  border: 1px solid;
  border-radius: 100%;
  padding: 4px;
  cursor: pointer;
  width: 30px;
  height: 30px;
}
</style>
