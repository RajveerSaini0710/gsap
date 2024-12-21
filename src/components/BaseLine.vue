<template>
  <div
    class="base-line w-full bg-[#ff4056] flex justify-center items-center overflow-hidden"
    @click="router.push('/contact-us')"
  >
    <div
      class="dark:text-[#ffffff] text-[30px] font-serif text-black py-6 font-extrabold flex items-center justify-start cursor-pointer whitespace-nowrap scroll-animation"
    >
      <Construction class="ml-3 w-12 h-12 mr-4 md:mr-6 flex-shrink-0" />
      Elevate Your Next Project With Our Best Heavy Lifting Services.
    </div>
  </div>
</template>

<script setup>
import { commonVariables } from "../assets/variables/commonVariables";
import { Construction } from "lucide-vue-next";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style scoped>
/* Define the scrolling animation */
@keyframes scroll {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

/* Apply animation only for smaller screens */
.scroll-animation {
  display: flex; /* Ensures the icon and text stay in the same line */
  align-items: center; /* Vertically aligns the text and icon */
  white-space: nowrap; /* Prevents wrapping */
}

@media (max-width: 1024px) {
  /* Adjust the breakpoint as needed */
  .scroll-animation {
    animation: scroll 15s linear infinite;
  }
}
</style>
