<template>
  <div class="container mx-auto p-4 flex flex-col items-center">
    <h1 class="text-2xl font-bold text-gray-800 mb-4">Your Plants</h1>
    <ul class="w-full md:w-3/4 lg:w-2/3">
      <li v-for="(plant, index) in plants" :key="index"
          @click="selectedPlant = (selectedPlant === plant ? null : plant)"
          class="mb-4 p-6 bg-white rounded-lg shadow-sm border border-gray-200 cursor-pointer hover:bg-gray-100">
        <div>
          <p class="text-lg font-semibold pb-2">{{ plant.name }}</p>
          <PlantDetails v-if="selectedPlant === plant" :plant="selectedPlant"/>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import PlantDetails from './PlantDetails.vue';

const plants = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:3000/plant/all', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
    });  // Adjust this path if necessary
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      plants.value = data;  // Store the data in the plants array
    } else {
      console.error("Failed to fetch plants");
    }
  } catch (error) {
    console.error("Error fetching plants:", error);
  }
});

const selectedPlant = ref(null);

</script>