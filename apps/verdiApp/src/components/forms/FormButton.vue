<!-- Button.vue -->
<template>
  <button
    :type="type"
    :class="[
      'font-bold rounded focus:outline-none focus:shadow-outline',
      variantClasses[variant],
      sizeClasses[size],
    ]"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',
  props: {
    variant: {
      type: String as () => 'primary' | 'secondary' | 'neutral',
      default: 'primary',
    },
    type: {
      type: String as () => 'button' | 'submit' | 'reset',
      default: 'button',
    },
    size: {
      type: String as () => 'sm' | 'md' | 'lg',
      default: 'md',
    },
  },
  setup() {
    const variantClasses = {
      primary:
        'bg-secondary dark:bg-dark-secondary hover:bg-secondaryVariant dark:hover:bg-dark-secondaryVariant text-onSecondary dark:text-dark-onSecondary shadow-sm',
      secondary:
        'text-secondary dark:text-dark-secondary hover:text-secondaryVariant dark:hover:text-dark-secondaryVariant px-0',
      neutral:
        'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200',
    };

    const sizeClasses = {
      sm: 'px-2 py-1 text-sm',
      md: 'px-4 py-2',
      lg: 'px-6 py-3 text-lg',
    };

    return {
      variantClasses,
      sizeClasses,
    };
  },
});
</script>
