<template>
  <div class="base-line w-full bg-[#ff4056] flex justify-center items-center">
    <div
      class="dark:text-[#ffffff] text-[40px] font-roslindale text-black py-6 font-extrabold"
    >
      {{ commonVariables.darkMode }}
      Elevate Your Next Project With Our Best Heavy Lifting Services
    </div>
  </div>
</template>

<script setup>
import { commonVariables } from "../assets/variables/commonVariables";
</script>

<style>
.glow {
  text-shadow: 0 0 5px #ffffff, 0 0 5px #ffffff, 0 0 5px #ff4056,
    0 0 5px #ff4056, 0 0 5px #ff4056, 0 0 5px #ff4056;
}
</style>
