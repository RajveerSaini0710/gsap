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
          <h2 class="text-4xl font-bold mb-6">
            Our <span class="text-[#ff4057]">Journey</span>
          </h2>
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
  </div>
</template>

<script setup>
import { ref } from "vue";
import HeaderCard from "../components/pageSection/headerCard.vue";
import { Building2, Calendar, Forklift, Users } from "lucide-vue-next";

const aboutUsPageTitle = ref(["ABOUT", "SAINI", "LIFTERS", "."]);
</script>

<style scoped></style>
