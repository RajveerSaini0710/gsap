<template>
  <div
    class="w-full h-full flex items-center justify-center flex-col pt-[30px]"
  >
    <div class="max-w-[600px] w-[50vw] h-full text-center px-[64px]">
      <div
        class="font-mint font-bold dark:text-white text-[#234a76] flex items-center justify-center gap-6"
      >
        <span>MARCH 2023</span>
        <svg
          width="16"
          height="8"
          viewBox="0 0 16 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 4L-8.26528e-07 8L-4.76837e-07 -6.99382e-07L16 4Z"
            fill="currentcolor"
          ></path>
        </svg>
        <span>GREENLAND</span>
      </div>
      <div class="py-[128px] flex flex-col items-center justify-center">
        <p
          class="text-[98px] text-[#234a76] font-bold dark:text-white font-roslindale leading-[100px] pb-6"
        >
          Visit Greenland
        </p>
        <BaseButton
          text="SEE CASE STUDY"
          class="dark:text-[#ffffff] text-[11px] text-[#234a76]"
        />
      </div>

      <div class="pb-[64px] flex items-center justify-center">
        <BaseColorPicker :colorData="colorData" />
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseButton from "../base/baseButton.vue";
import BaseColorPicker from "../base/baseColorPicker.vue";

const colorData = ["#214356", "#8DB2C3", "#E7E7C1", "#989598", "#445F88"];
</script>
