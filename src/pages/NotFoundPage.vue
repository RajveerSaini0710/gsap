<script setup>
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import { HomeIcon, ConstructionIcon } from "lucide-vue-next";

// Define component
const NotFound = defineComponent({});
</script>

<template>
  <div
    class="min-h-screen w-full flex flex-col items-center justify-center bg-background text-foreground p-4"
  >
    <!-- Main Content -->
    <div class="text-center space-y-8 max-w-2xl px-4">
      <!-- 404 Number -->
      <div
        class="md:text-[12rem] text-[8rem] font-bold leading-none tracking-tight text-[#FF4057] select-none"
      >
        404
      </div>

      <!-- Text Content -->
      <div class="space-y-4">
        <h1 class="text-4xl font-bold tracking-tight">Page Not Found</h1>
        <p class="text-xl text-muted-foreground max-w-lg mx-auto">
          Nothing is too high or too heavy for us, but this page seems to have
          gone missing.
        </p>
      </div>

      <!-- Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
        <RouterLink
          to="/"
          class="min-w-[200px] bg-[#FF4057] text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2"
        >
          <HomeIcon class="h-5 w-5" />
          Back to Home
        </RouterLink>
        <RouterLink
          to="/service"
          class="min-w-[200px] border border-[#FF4057] text-[#FF4057] px-6 py-3 rounded-lg flex items-center justify-center gap-2"
        >
          <ConstructionIcon class="h-5 w-5" />
          View Our Services
        </RouterLink>
      </div>
    </div>

    <!-- Bottom Accent Line -->
    <div
      class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF4057] to-transparent"
    />
  </div>
</template>
