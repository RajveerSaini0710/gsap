<template>
  <div
    class="pt-[128px] px-[15px] md:px-[64px] flex items-center justify-center"
  >
    <div class="max-w-[930px] text-center">
      <div
        class="about-section-title font-roslindale text-[30px] md:text-[70px] text-[#234a76] dark:text-[#ffffff] flex items-center justify-center flex-wrap mb-[48px]"
      >
        <div
          class="w-full flex justify-center mb-5 md:mb-0 md:w-auto md:mr-[16px] about-title-img-1"
        >
          <img
            src="../../assets/images/strength.jpg"
            alt="img1"
            loading="lazy"
            class="rounded-[12px] w-[140px] md:w-[110px]"
          />
        </div>
        <span class="text-[#FF4057]">&nbsp;&nbsp;Strength&nbsp;</span>

        <span>in Every &nbsp;</span>
        <span>Lift, &nbsp;</span>
        <span class="text-[#FF4057]">Reliability &nbsp;</span>
        <span>in Every&nbsp;</span>
        <span class="text-[#FF4057]">Rise</span>
        <span
          class="three-dots text-[#FF4057]"
          v-for="(dot, index) in dots"
          :key="index"
          >{{ dot }}</span
        >
        <div
          class="w-full mt-5 md:mt-0 md:w-auto md:ml-[20px] about-title-img-3"
        >
          <img
            src="../../assets/images/rise.jpg"
            alt="img3"
            loading="lazy"
            class="rounded-[12px] w-full md:w-[120px]"
          />
        </div>
      </div>
      <div class="mb-[48px] flex items-center justify-center">
        <p class="text-center font-mint w-11/12">
          Saini Lifters began its journey in 2001 as a transport business. Over
          the years, we evolved into the container crane industry, proudly
          owning a reach stacker and a side shifter. With continuous growth and
          dedication, we have expanded into the realm of all-terrain cranes,
          specializing in bridge construction and factory operations. With the
          support and blessings of God, Saini Lifters continues to reach new
          heights in heavy lifting and industrial projects.
        </p>
      </div>
      <div class="flex justify-center">
        <BaseButton
          text="READ ABOUT US"
          link="https://www.giuliagartner.com/about"
          class="dark:text-[#ffffff] text-[11px] text-[#234a76]"
          @click="router.push('/about-us')"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseButton from "../base/baseButton.vue";
import { gsap } from "gsap";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { commonVariables } from "../../assets/variables/commonVariables";

const router = useRouter();
const dots = ref([".", ".", ".", " "]);

const threeDotAnimation = () => {
  const tl = gsap.timeline({ repeat: -1 });

  tl.fromTo(
    ".three-dots",
    { y: 0 },
    {
      duration: 0.8,
      y: -10,
      stagger: 0.2,
      ease: "power1.inOut",
    }
  ).to(
    ".three-dots",
    {
      duration: 0.8,
      y: 0,
      stagger: 0.2,
      ease: "power1.inOut",
    },
    "-=0.8"
  );
};

onMounted(() => {
  threeDotAnimation();

  const img1 = document.querySelector(".about-title-img-1");
  const img3 = document.querySelector(".about-title-img-3");

  const createAnimationTimeline = (img) => {
    const imgTl = gsap.timeline({ paused: true });
    imgTl.fromTo(
      img,
      { scale: 1 },
      {
        duration: 0.8,
        scale: img === img3 ? 3 : 2,
        rotate: img === img3 ? 0 : 5,
        ease: "back.out",
      }
    );

    return imgTl;
  };

  if (commonVariables.value.screenWidth > 600) {
    const img1Tl = createAnimationTimeline(img1);
    const img3Tl = createAnimationTimeline(img3);

    // Add event listeners for img1
    img1.addEventListener("mouseenter", () => img1Tl.play());
    img1.addEventListener("mouseleave", () => img1Tl.reverse());

    // Add event listeners for img3
    img3.addEventListener("mouseenter", () => img3Tl.play());
    img3.addEventListener("mouseleave", () => img3Tl.reverse());
  }
});
</script>

<style scoped></style>
