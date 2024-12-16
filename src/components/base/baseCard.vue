<template>
  <div class="relative overflow-hidden backdrop-blur-sm border-2 rounded-lg">
    <!-- <GlowBorder
    class="relative overflow-hidden backdrop-blur-sm"
    :color="['#A07CFE', '#FE8FB5', '#FF4057']"
  > -->
    <div class="relative aspect-video w-full overflow-hidden p-3">
      <img
        :src="crane.image"
        :alt="`${crane.name} crane`"
        class="object-contain w-full h-full"
      />
    </div>
    <div class="p-6">
      <div class="mb-4 flex items-center justify-between">
        <div>
          <h3 class="text-xl font-bold">{{ crane.name }}</h3>
          <p class="text-lg font-semibold text-red-500">{{ crane.capacity }}</p>
        </div>
        <Download
          class="h-5 w-5 cursor-pointer"
          @click="downloadFleet(crane.name)"
        />
      </div>
      <div class="grid grid-cols-2 gap-4 text-sm">
        <div
          v-for="(spec, index) in specs"
          :key="index"
          class="flex justify-between"
        >
          <span class="dark:text-zinc-300 text-zinc-500">{{ spec.label }}</span>
          <span class="font-medium">{{ spec.value }}</span>
        </div>
      </div>
    </div>
    <!-- </GlowBorder> -->
  </div>
</template>

<script setup>
import { Download } from "lucide-vue-next";
import { computed } from "vue";
// import GlowBorder from "../inspiraUi/glowBorder.vue";

const props = defineProps({
  crane: {
    type: Object,
    required: true,
  },
});

// Extract specifications dynamically
const specs = computed(() => [
  props.crane.mainBoom,
  props.crane.jib,
  props.crane.luffing,
  props.crane.totalBoom,
]);

const downloadFleet = (name) => {
  console.log("Download fleet", name);
};
</script>

<style scoped>
/* Add additional styles if required */
</style>
