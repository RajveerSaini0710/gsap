<template>
  <button :class="buttonClasses" :disabled="isLoading">
    <span v-if="isLoading" class="loader"> </span>
    <span v-if="icon && iconPosition === 'left'" :class="icon" class="mr-2">
      <img
        width="24"
        height="24"
        v-if="icon.name"
        :src="getIconSrc(icon.name)"
        alt="icon"
      />
    </span>
    <span v-if="!isLoading && text">{{ text }}</span>
    <span v-if="icon && iconPosition === 'right'" :class="icon" class="ml-2">
      <img
        width="24"
        height="24"
        v-if="icon.name"
        :src="getIconSrc(icon.name)"
        alt="icon"
      />
    </span>
  </button>
</template>

<script setup>
import { computed, defineAsyncComponent } from "vue";

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

const buttonClasses = computed(() => {
  const baseClasses =
    "flex items-center justify-center font-semibold text-white text-[12px] border border-white px-3 py-[6px] font-mint";
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
  return new URL(`../../assets/images/svg/${iconName}.svg`, import.meta.url)
    .href;
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
