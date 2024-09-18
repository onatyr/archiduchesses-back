<template>
    <div class="container mx-auto p-4 flex flex-col items-center">
        <h1 class="text-2xl font-bold text-gray-800 mb-4">Your Plants</h1>
        <ul class="w-full md:w-3/4 lg:w-2/3">
            <li v-for="(plant, index) in plants" :key="index"
                @click="selectedPlant = (selectedPlant === plant ? null : plant)"
                class="mb-4 p-6 bg-white rounded-lg shadow-sm border border-gray-200 cursor-pointer hover:bg-gray-100">
                <div>
                    <p class="text-lg font-semibold pb-2">{{ plant.name }}</p>
                    <PlantDetails v-if="selectedPlant === plant" :plant="selectedPlant" />
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import PlantDetails from './PlantDetails.vue';

const plants = ref([
    { name: 'Aloe Vera', room: 'Living-room', type: 'Succulents & Cacti', sunlight: '☀️', hydration: '💧' },
    { name: 'Peace Lily', room: 'Bathroom', type: 'Flowering Plants', sunlight: '☀️☀️', hydration: '💧💧💧' },
    { name: 'Spider Plant', room: 'Bedroom 1', type: 'Foliage Plants', sunlight: '☀️☀️', hydration: '💧💧' },
    { name: 'Basil', room: 'Kitchen', type: 'Edible Plants', sunlight: '☀️☀️☀️', hydration: '💧💧💧' },
    { name: 'Areca Palm', room: 'Bedroom 2', type: 'Palms', sunlight: '☀️☀️', hydration: '💧💧💧' },
    { name: 'Jade Plant', room: 'Living-room', type: 'Succulents & Cacti', sunlight: '☀️☀️', hydration: '💧' },
    { name: 'Fiddle Leaf Fig', room: 'Living-room', type: 'Trees & Shrubs', sunlight: '☀️☀️', hydration: '💧💧' },
    { name: 'Mint', room: 'Kitchen', type: 'Edible Plants', sunlight: '☀️☀️☀️', hydration: '💧💧💧' },
    { name: 'English Ivy', room: 'Bathroom', type: 'Climbers & Vines', sunlight: '☀️☀️', hydration: '💧💧' },
    { name: 'Lotus', room: 'Bathroom', type: 'Aquatic Plants', sunlight: '☀️☀️☀️', hydration: '💧💧💧' }
]);

const selectedPlant = ref(null);

</script>