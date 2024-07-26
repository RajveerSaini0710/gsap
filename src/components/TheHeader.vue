<template>
  <!-- text-2xl w-full flex items-center justify-center py-4 font-bold -->
  <div class="font-roslindale" ref="headerElement">
    {{ theHeader }}
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";

const theHeader = ref("The Header");
const headerElement = ref(null); // Create a ref for the header element

onMounted(() => {
  // Use GSAP to animate the header
  gsap.from(headerElement.value, {
    duration: 1,
    opacity: 0,
    scale: 1.5, // Start scaled up
    y: -50, // Move the element up by 50 pixels
    ease: "power2.out", // Easing function for a smoother animation
    onComplete: () => {
      // Scale down to original size
      gsap.to(headerElement.value, {
        duration: 0.5,
        scale: 1, // Scale to original size
        ease: "power2.out",
      });
    },
  });
});
</script>
