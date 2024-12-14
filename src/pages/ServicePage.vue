<template>
  <div class="min-h-screen mt-[70px]">
    <!-- Hero Section -->
    <section
      class="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-background"
    >
      <div class="text-center space-y-4 px-4 z-10">
        <h1 class="text-4xl md:text-6xl font-bold">
          <span class="text-red-500">Professional</span> Lifting Solutions
        </h1>
        <p
          class="text-lg md:text-xl text-gray-500 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Comprehensive range of heavy lifting and material handling equipment
          for rent
        </p>
      </div>
      <DotPattern
        :class="
          clsx(
            '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]'
          )
        "
      />
    </section>

    <!-- Services Grid -->
    <section class="max-w-7xl mx-auto px-4 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="service in services"
          :key="service.title"
          class="bg-gray-50 dark:bg-zinc-800 border dark:border-zinc-800 rounded-lg p-6 hover:border-red-500 hover:dark:border-red-500 transition-colors"
        >
          <div class="flex items-center gap-4 mb-4">
            <div class="p-3 rounded-lg bg-red-500/10">
              <component
                :is="service.icon"
                class="w-6 h-6 mx-auto text-red-500"
              />
            </div>
            <div>
              <h3 class="text-xl font-semibold">{{ service.title }}</h3>
              <p class="text-gray-500 dark:text-gray-400 text-sm">
                {{ service.description }}
              </p>
            </div>
          </div>
          <ul class="grid grid-cols-2 gap-2">
            <li
              v-for="feature in service.features"
              :key="feature"
              class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-red-500"></span>
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16">
      <div class="max-w-4xl mx-auto text-center px-4">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Need Heavy Lifting Solutions?
        </h2>
        <p class="text-gray-500 dark:text-gray-300 mb-8">
          Contact us today to discuss your requirements and get a customized
          rental solution
        </p>
        <button
          class="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          @click="router.push('/contact-us')"
        >
          Get a Quote
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import {
  Construction,
  Container,
  ForkliftIcon as ForkliftTruck,
  ArrowUpCircle,
} from "lucide-vue-next";
import clsx from "clsx";
import DotPattern from "../components/inspiraUi/dottedBackground.vue";

const router = useRouter();
const services = ref([
  {
    title: "Mobile Crane Rental",
    description:
      "High-capacity mobile cranes available for construction and industrial projects. Featuring advanced safety systems and experienced operators.",
    icon: Construction,
    features: [
      "24/7 availability",
      "Experienced operators",
      "Various capacity options",
      "Nationwide service",
    ],
  },
  {
    title: "Side Shifter Rental",
    description:
      "Efficient side shifters for precise container handling and positioning. Ideal for port operations and logistics centers.",
    icon: Container,
    features: [
      "Precise control",
      "Multiple attachment options",
      "Regular maintenance",
      "Technical support",
    ],
  },
  {
    title: "Reach Stacker Rental",
    description:
      "Versatile reach stackers for container handling and stacking operations. Perfect for port and terminal operations.",
    icon: ArrowUpCircle,
    features: [
      "High stacking capability",
      "Container handling",
      "Reliable performance",
      "Expert operators",
    ],
  },
  {
    title: "Forklift Rental",
    description:
      "Modern forklift fleet for various material handling needs. Available in different capacities and configurations.",
    icon: ForkliftTruck,
    features: [
      "Various capacities",
      "Indoor/outdoor use",
      "Flexible rental terms",
      "Maintenance included",
    ],
  },
]);
</script>

<style>
/***** Add custom styles if needed *****/
</style>
