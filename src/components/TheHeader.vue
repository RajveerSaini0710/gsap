<template>
  <div class="flex justify-between items-center px-[64px] h-[64px]">
    <div class="flex items-center justify-between gap-2">
      <baseButton text="STILLS" :isLoading="false" />
      <baseButton text="MOTION" :isLoading="false" />
      <baseButton text="ABOUT" :isLoading="false" />
    </div>
    <div class="text-[32px] font-roslindale">Giulia</div>
    <div class="flex items-center justify-between gap-2">
      <baseButton text="INSTAGRAM" :isLoading="false" />
      <baseButton text="EMAIL" :isLoading="false" />
      <baseButton
        text="F/24"
        :icon="{ name: 'appeture' }"
        iconPosition="right"
        :isLoading="false"
      />
    </div>
  </div>
</template>

<script setup>
import baseButton from "./base/baseButton.vue";
</script>
