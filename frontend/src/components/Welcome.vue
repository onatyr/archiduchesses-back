<script lang="ts">
import { ref } from 'vue';

const names: string[] = ['Claire', 'Onat'];

export default {
  setup() {
    const randomName = ref<string>(names[Math.floor(Math.random() * names.length)]);

    return { randomName };
  },
};
</script>

<template>
    <div class="flex flex-col sm:flex-row justify-center items-center gap-4 p-6 bg-apple-100 w-full">
      <img src="/plant.png" class="w-16 h-16 sm:w-20 sm:h-20" alt="Plant icon" />
      <h1 class="text-center text-black font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase">
        Welcome, {{ randomName }}!
      </h1>
  </div>
</template>