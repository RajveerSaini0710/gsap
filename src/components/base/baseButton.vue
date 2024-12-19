<template>
  <button
    :class="buttonClasses"
    :disabled="isLoading"
    class="dark:border-white border-[#234a76] overflow-hidden"
  >
    <span v-if="isLoading" class="loader"> </span>
    <span v-if="icon && iconPosition === 'left'" :class="icon" class="mr-2">
      <img
        width="18"
        height="18"
        v-if="icon.name"
        :src="getIconSrc(icon.name)"
        alt="icon"
        class="max-w-fit"
      />
    </span>
    <slot name="buttonContent">
      <span v-if="!isLoading && text">{{ text }}</span>
    </slot>
    <span v-if="iconPosition === 'right'" :class="icon" class="ml-2">
      <component :is="isDark ? Sun : Moon" class="h-4 w-4 darkModeIcon" />
    </span>
  </button>
</template>

<script setup>
import { gsap } from "gsap";
import { computed, watch } from "vue";
import { Sun, Moon } from "lucide-vue-next";
import { useDark } from "@vueuse/core";

const isDark = useDark();
const props = defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    default: null, // Allow for no text when only the icon is used
  },
  icon: {
    type: [String, Object],
    default: null,
  },
  iconPosition: {
    type: String,
    default: "left", // options: 'left', 'right'
  },
  size: {
    type: String,
    default: "circle", // options: 'rectangle', 'circle', 'small', 'curved'
  },
  type: {
    type: String,
    default: "primary", // options: 'primary', 'secondary', 'success', 'danger'
  },
});

watch(
  () => isDark.value,
  (newValue) => {
    if (newValue) {
      gsap.from(".darkModeIcon", {
        duration: 1,
        opacity: 0,
        y: -70,
        ease: "expo.out",
      });
      gsap.to(".darkModeIcon", {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: "expo.out",
      });
    } else {
      gsap.from(".darkModeIcon", {
        duration: 1,
        opacity: 0,
        y: 70,
        ease: "expo.out",
      });
      gsap.to(".darkModeIcon", {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: "expo.out",
      });
    }
  }
);

const buttonClasses = computed(() => {
  const baseClasses =
    "flex items-center justify-center font-semibold  text-[12px] border  px-3 py-[6px] font-mint";
  const loadingClasses = props.isLoading
    ? "opacity-50 cursor-not-allowed"
    : "hover:opacity-75";

  const sizeClasses = {
    rectangle: "rounded-md",
    circle: "rounded-full",
    small: "rounded-sm",
    curved: "rounded-lg",
  };

  const typeClasses = {
    primary: "bg-transparent",
    secondary: "bg-gray-500",
    success: "bg-green-500",
    danger: "bg-red-500",
  };

  return `${baseClasses} ${sizeClasses[props.size]} ${
    typeClasses[props.type]
  } ${loadingClasses}`;
});

const getIconSrc = (iconName) => {
  return new URL(`../../assets/images/${iconName}.svg`, import.meta.url).href;
};
</script>

<style>
.loader {
  border: 2px solid transparent;
  border-radius: 50%;
  border-top: 2px solid white;
  width: 1em;
  height: 1em;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
