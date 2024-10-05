<template>
  <header class="fixed top-0 w-full bg-white shadow-md z-10">
    <Welcome />
  </header>

  <main style="padding-top: calc(var(--header-height, 4rem))">
    <PlusButton v-if="!showForm" @click="showForm = !showForm" />
    <AddPlantForm v-if="showForm" @formSubmitted="showForm = false" />
    <PlantList v-if="!showForm" />
  </main>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";

import Welcome from "./Welcome.vue";
import AddPlantForm from "./AddPlantForm.vue";
import PlusButton from "./PlusButton.vue";
import PlantList from "./PlantList.vue";

export default {
  components: {
    Welcome,
    AddPlantForm,
    PlusButton,
    PlantList,
  },
  setup() {
    const showForm = ref<boolean>(false);

    onMounted(() => {
      const header = document.querySelector("header");
      if (header) {
        const headerHeight = header.offsetHeight;
        document.documentElement.style.setProperty(
          "--header-height",
          `${headerHeight}px`,
        );
      }
    });

    return { showForm };
  },
};
</script>
