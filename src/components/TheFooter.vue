<template>
  <div class="w-full flex justify-center px-10 pb-[64px]">
    <div class="w-1/3 flex justify-center items-center flex-col">
      <div class="w-[350px] h-[100px] flex justify-center items-center mb-8">
        <img src="../assets/images/companyLogo.png" alt="company logo" />
      </div>
      <div class="flex justify-center items-center gap-10">
        <img
          :src="getImg('phone.png', commonVariables.darkMode)"
          alt="phone icon"
          width="25"
          class="cursor-pointer"
        />
        <img
          :src="getImg('gmail.png')"
          alt="gamil icon"
          width="35"
          class="cursor-pointer"
        />
        <img
          :src="getImg('linkedin.png')"
          alt="linkedin icon"
          width="35"
          class="cursor-pointer"
        />
      </div>
    </div>
    <div class="w-1/3 pt-[50px]">
      <p class="font-bold text-3xl font-roslindale pb-3">OUR COMPANY</p>
      <ul class="text-xl">
        <li class="pb-2">About Us</li>
        <li class="pb-2">Services</li>
        <li class="pb-2">Work</li>
        <li class="pb-2">Contact Us</li>
        <li class="pb-2">Email</li>
      </ul>
    </div>
    <div class="w-1/3"></div>
  </div>
</template>

<script setup>
import { commonVariables } from "../assets/variables/commonVariables";
import getImg from "../utils/getImg.js";
</script>
