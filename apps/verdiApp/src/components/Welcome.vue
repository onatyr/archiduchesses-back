<script lang="ts">
import { onMounted, ref } from "vue";
import { ApiService } from "@/services/api.service";

export default {
  setup() {
    const userName = ref<string>("");

    onMounted(async () => {
      userName.value = await new ApiService("user")._get("/name");
    });

    return { userName };
  },
};
</script>

<template>
  <div
    class="flex flex-col sm:flex-row justify-center items-center gap-4 p-6 bg-apple-100 w-full"
  >
    <img src="/plant.png" class="w-16 h-16 sm:w-20 sm:h-20" alt="Plant icon" />
    <h1
      class="text-center text-black font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase"
    >
      Welcome, {{ userName }}!
    </h1>
  </div>
</template>
