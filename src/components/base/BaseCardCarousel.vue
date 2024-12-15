<template>
  <div class="card overflow-hidden w-[400px]">
    <div class="relative aspect-video bg-gray-300">
      <img
        :src="crane.image"
        :alt="`${crane.name} crane`"
        class="object-contain w-[500px] h-[300px]"
      />
    </div>
    <div class="card-content p-4">
      <div class="flex items-center justify-between mb-2">
        <div>
          <h3 class="text-lg font-bold text-foreground">{{ crane.name }}</h3>
          <p class="text-sm font-semibold text-red-500">{{ crane.capacity }}</p>
        </div>
        <Joystick class="h-5 w-5 text-red-500" />
      </div>
      <div class="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
        <div class="flex justify-between">
          <span class="text-muted-foreground">Main Boom</span>
          <span class="font-semibold text-foreground">{{
            crane.mainBoom
          }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-muted-foreground">JIB</span>
          <span class="font-semibold text-foreground">{{ crane.jib }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-muted-foreground">Luffing</span>
          <span class="font-semibold text-foreground">{{ crane.luffing }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-muted-foreground">Total Boom</span>
          <span class="font-semibold text-foreground">{{
            crane.totalBoom
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { Joystick } from "lucide-vue-next";

const props = defineProps({
  crane: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.card-content {
  padding: 16px;
}
</style>
