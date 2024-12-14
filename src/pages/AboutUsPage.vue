<template>
  <div>
    <HeaderCard
      :title="aboutUsPageTitle"
      videoUrl="/video/headerCardMainVideo.mp4"
      subTitle="Leading the way in crane rental services since 2008, providing reliable and efficient heavy-lifting solutions."
      isDownIconHash="our-journey"
    />
    <section class="py-20 container mx-auto px-4" id="our-journey">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-4xl font-bold mb-6">Our Journey</h2>
          <p class="dark:text-gray-300 mb-6">
            Founded in 2008 by Mr. Charanjit Singh, Saini Lifters has grown to
            become a leading name in the crane rental industry. With over 15
            years of experience, we've built our reputation on the pillars of
            safety, reliability, and exceptional service.
          </p>
          <div class="grid grid-cols-2 gap-6">
            <div class="flex items-center gap-3">
              <Calendar class="text-red-500 w-6 h-6" />
              <span>Est. 2008</span>
            </div>
            <div class="flex items-center gap-3">
              <Building2 class="text-red-500 w-6 h-6" />
              <span>Maharashtra India</span>
            </div>
            <div class="flex items-center gap-3">
              <Forklift class="text-red-500 w-6 h-6" />
              <span>50-400 Ton Capacity</span>
            </div>
            <div class="flex items-center gap-3">
              <Users class="text-red-500 w-6 h-6" />
              <span>Expert Team</span>
            </div>
          </div>
        </div>
        <div class="relative h-[400px]">
          <img
            src="../assets//images/crane-1.png"
            alt="Crane operation showcase"
            :width="imageWidth"
            :height="imageHeight"
            class="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </section>

    <!-- Stats section -->
    <section class="py-20 flex items-center justify-center flex-wrap">
      <div class="container flex items-center justify-center flex-wrap">
        <div class="gap-8 flex flex-wrap">
          <div
            v-for="(stat, index) in stats"
            :key="index"
            class="text-center border border-gray-300 dark:border-gray-500 hover:border-red-500 hover:dark:border-red-500 transition-colors w-[280px] h-[200px] rounded-lg flex items-center justify-center flex-col"
            ref="statItem"
          >
            <component
              :is="stat.icon"
              class="w-12 h-12 mx-auto mb-4 text-red-500"
            />
            <p
              className="whitespace-pre-wrap text-4xl font-bold mb-2 tracking-tighter text-black dark:text-white"
            >
              <NumberTicker :value="stat.value" />+
            </p>
            <p class="text-gray-400">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- we serve section -->
    <section class="py-20 container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-12 text-center">Industries We Serve</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div
          v-for="(industry, index) in industries"
          :key="index"
          class="p-6 border border-gray-300 dark:border-gray-500 rounded-lg text-center hover:dark:border-red-500 hover:border-red-500 transition-colors"
        >
          {{ industry }}
        </div>
      </div>
    </section>

    <!-- Cta Section -->
    <section
      class="py-20 w-full flex justify-center items-center"
      ref="motionSection"
    >
      <div class="container text-center">
        <div ref="motionContent">
          <h2 class="text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p class="text-gray-500 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how Saini Lifters can help with your heavy lifting and
            industrial needs.
          </p>
          <button
            type="submit"
            class="min-w-80 bg-red-500 text-white hover:bg-red-600 rounded-md p-2 disabled:opacity-50"
            @click="router.push('/contact-us')"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import HeaderCard from "../components/pageSection/headerCard.vue";
import NumberTicker from "../components/inspiraUi/numberTicker.vue";
import {
  Building2,
  Calendar,
  Forklift,
  Users,
  Clock,
  Award,
} from "lucide-vue-next";

const router = useRouter();
const aboutUsPageTitle = ref(["ABOUT", "SAINI", "LIFTERS", "."]);
const stats = [
  { icon: Clock, label: "Years of Experience", value: 15 },
  { icon: Forklift, label: "Cranes in Fleet", value: 20 },
  { icon: Users, label: "Team Members", value: 60 },
  { icon: Award, label: "Projects Completed", value: 100 },
];

const industries = ref([
  "Construction & Infrastructure",
  "Power & Energy",
  "Oil & Gas",
  "Industrial Manufacturing",
  "Civil Engineering",
  "Heavy Equipment",
  "Bridge Construction",
  "Factory Operations",
]);

const motionSection = ref(null);
const motionContent = ref(null);
const statItems = ref([]);

onMounted(() => {
  gsap.from(statItems.value, {
    opacity: 0,
    y: 20,
    stagger: 0.1,
    duration: 0.5,
  });
  gsap.fromTo(
    motionContent.value,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1, // Duration of the fade-in animation
      scrollTrigger: {
        trigger: motionSection.value,
        start: "top bottom", // Trigger the animation when the section comes into view
        once: true, // Trigger animation once
      },
    }
  );
});
</script>

<style scoped></style>
