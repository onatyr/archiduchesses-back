<!-- ErrorMessage.vue -->
<template>
  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="transform scale-95 opacity-0"
    enter-to-class="transform scale-100 opacity-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="transform scale-100 opacity-100"
    leave-to-class="transform scale-95 opacity-0"
  >
    <div
      v-if="message"
      :class="[
        'text-xs italic',
        variantClasses[variant],
        sizeClasses[size],
        dense ? 'my-1' : 'mb-4',
      ]"
      role="alert"
    >
      <div class="flex items-start gap-1">
        <span v-if="showIcon" class="mt-0.5">
          <!-- Warning icon for form errors -->
          <svg
            v-if="variant === 'error'"
            class="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <!-- Info icon for warnings -->
          <svg
            v-else-if="variant === 'warning'"
            class="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
        {{ message }}
      </div>
    </div>
  </Transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ErrorMessage',
  props: {
    message: {
      type: String,
      default: '',
    },
    variant: {
      type: String as () => 'error' | 'warning' | 'info',
      default: 'error',
    },
    size: {
      type: String as () => 'sm' | 'md',
      default: 'sm',
    },
    dense: {
      type: Boolean,
      default: false,
    },
    showIcon: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    const variantClasses = {
      error: 'text-error dark:text-red-400',
      warning: 'text-orange-500 dark:text-orange-400',
      info: 'text-blue-500 dark:text-blue-400',
    };

    const sizeClasses = {
      sm: 'text-xs',
      md: 'text-sm',
    };

    return {
      variantClasses,
      sizeClasses,
    };
  },
});
</script>
