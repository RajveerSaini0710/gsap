<template>
  <div class="base-line w-full bg-[#ff4056] flex justify-center items-center">
    <div
      class="dark:text-[#ffffff] text-[30px] font-serif text-black py-6 font-extrabold flex items-center justify-center cursor-pointer"
    >
      <img
        :src="getImg('helmet.png', commonVariables.darkMode)"
        alt=""
        width="50"
        height="50"
        class="mr-8"
      />

      Elevate Your Next Project With Our Best Heavy Lifting Services
    </div>
  </div>
</template>

<script setup>
import { commonVariables } from "../assets/variables/commonVariables";
import getImg from "../utils/getImg.js";
</script>
