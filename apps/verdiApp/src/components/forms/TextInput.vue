<template>
  <div class="mb-4 w-full">
    <label
      :for="id"
      class="block text-onBackground dark:text-dark-onBackground text-sm font-bold mb-2"
    >
      {{ label }}:
    </label>
    <input
      :type="type"
      :id="id"
      :value="modelValue"
      :required="required"
      :placeholder="placeholder"
      class="shadow appearance-none bg-inherit rounded w-full py-2 px-3 text-onBackground dark:text-dark-onBackground leading-tight focus:outline-secondary dark:focus:bg-dark-secondary focus:shadow-outline"
    />
    <p v-if="errorMessage" class="text-error text-xs italic">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
    errorMessage: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  emits: ['update:modelValue'],
  watch: {
    modelValue(newVal) {
      this.$emit('update:modelValue', newVal);
    },
  },
};
</script>
