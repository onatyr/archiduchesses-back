<template>
  <div class="container mx-auto p-4 flex flex-col items-center">
    <h1 class="text-2xl font-bold text-gray-800 mb-4">Your Plants</h1>
    <div class="w-full md:w-3/4 lg:w-2/3">
      <SearchBar :query="filterPlants" />
      <ul>
        <li
          v-for="(plant, index) in filteredPlants"
          :key="index"
          @click="selectedPlant = selectedPlant === plant ? null : plant"
          class="mb-4 p-6 bg-white text-black rounded-lg shadow-sm border border-gray-200 cursor-pointer hover:bg-gray-100"
        >
          <div>
            <p class="text-lg font-semibold pb-2">{{ plant.name }}</p>
            <PlantDetails
              v-if="selectedPlant === plant"
              :plant="selectedPlant"
            />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import PlantDetails from "./PlantDetails.vue";
import { PlantsService } from "@/services/plants.service";
import SearchBar from "@/components/SearchBar.vue";
import { Plant } from "@shared/models/plant.model";

const plants: Plant[] = ref([]);
const filteredPlants: Plant[] = ref([]);
const selectedPlant: Plant = ref(null);

onMounted(async () => {
  plants.value = await new PlantsService().getAll();
  filteredPlants.value = plants.value;
});

const filterPlants = (query: string) => {
  if (query.length !== 0)
    filteredPlants.value = plants.value.filter((plant) =>
      plant.name.toLowerCase().includes(query.toLowerCase()),
    );
  else filteredPlants.value = plants.value;
};
</script>
