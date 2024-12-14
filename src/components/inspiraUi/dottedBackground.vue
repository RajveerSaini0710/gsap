<script setup lang="ts">
import { ref } from "vue";
import clsx from "clsx";

// Utility to generate unique IDs
const generateUniqueId = (() => {
  let counter = 0;
  return (prefix = "id") => `${prefix}-${++counter}`;
})();

interface DotPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  cx?: number;
  cy?: number;
  cr?: number;
  className?: string;
  [key: string]: any;
}

const props = defineProps<DotPatternProps>();

const {
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  ...otherProps
} = props;

const id = ref(generateUniqueId("pattern"));
</script>

<template>
  <svg
    aria-hidden="true"
    class="pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/80"
    :class="clsx(className)"
    v-bind="otherProps"
  >
    <defs>
      <pattern
        :id="id"
        :width="width"
        :height="height"
        patternUnits="userSpaceOnUse"
        patternContentUnits="userSpaceOnUse"
        :x="x"
        :y="y"
      >
        <circle id="pattern-circle" :cx="cx" :cy="cy" :r="cr" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" strokeWidth="0" :fill="`url(#${id})`" />
  </svg>
</template>
