<template>
  <button
    :class="[
      'px-4 py-2 rounded focus:outline-none transition-colors duration-200 ease-in-out',
      buttonClass,
      sizeClass,
      { 'opacity-50 cursor-not-allowed': disabled },
    ]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'primary',
      validator: (value) => {
        return [
          'primary',
          'secondary',
          'success',
          'warning',
          'danger',
        ].includes(value);
      },
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => {
        return ['sm', 'md', 'lg'].includes(value);
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonClass() {
      switch (this.type) {
        case 'primary':
          return 'bg-blue-500 text-white hover:bg-blue-600';
        case 'secondary':
          return 'bg-gray-500 text-white hover:bg-gray-600';
        case 'success':
          return 'bg-green-500 text-white hover:bg-green-600';
        case 'warning':
          return 'bg-yellow-500 text-white hover:bg-yellow-600';
        case 'danger':
          return 'bg-red-500 text-white hover:bg-red-600';
        default:
          return 'bg-blue-500 text-white';
      }
    },
    sizeClass() {
      switch (this.size) {
        case 'sm':
          return 'text-sm';
        case 'lg':
          return 'text-lg';
        default:
          return 'text-base';
      }
    },
  },
};
</script>
