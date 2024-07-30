<template>
  <div
    class="w-[256px] h-[20px] rounded-full flex items-stretch justify-between overflow-hidden flex-row flex-nowrap"
  >
    <div
      v-for="(color, index) in props.colorData"
      :key="index"
      class="flex items-center justify-center w-1/5 rounded-full color-box"
      :style="`background-color: ${color};`"
      @mouseenter="animateIn(index)"
      @mouseleave="animateOut(index)"
      ref="colorBoxes"
    >
      <div
        class="sigle-color-picker-text text-center text-[8px] font-mint z-10 opacity-0"
        ref="colorTexts"
      >
        {{ color }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";

const props = defineProps({
  colorData: {
    type: Array,
    requered: true,
  },
});

const colorBoxes = ref([]);
const colorTexts = ref([]);

const animateIn = (index) => {
  gsap.to(colorBoxes.value[index], {
    duration: 0.3,
    opacity: 1,
    width: "40%",
    zIndex: 20,
    ease: "back.out",
  });
  gsap.to(colorTexts.value[index], {
    duration: 0.3,
    opacity: 1,
    fontSize: "12px",
    zIndex: 20,
    ease: "back.out",
  });
};

const animateOut = (index) => {
  gsap.to(colorBoxes.value[index], {
    duration: 0.3,
    opacity: 1,
    width: "20%",
    zIndex: 10,
    ease: "back.out",
  });
  gsap.to(colorTexts.value[index], {
    duration: 0.3,
    opacity: 0,
    fontSize: "8px",
    zIndex: 10,
    ease: "back.out",
  });
};

onMounted(() => {});
</script>

<style>
.color-box {
  transition: opacity 0.3s ease;
}

.sigle-color-picker-text {
  transition: opacity 0.3s ease;
}
.color-box:hover {
  background: linear-gradient(to right, var(--color1), var(--color2));
}
</style>
