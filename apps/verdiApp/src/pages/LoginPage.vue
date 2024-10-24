<template>
  <div class="flex min-h-screen">
    <!-- Left Section -->
    <div
      class="flex flex-col justify-center items-center w-1/2 bg-pistache text-white p-8"
    >
      <img src="../assets/peace-lily.png" alt="Welcome Icon" class="mb-4" />
    </div>
    <!-- Right Section -->
    <div class="flex justify-center items-center w-1/2 bg-almond p-8">
      <LoginComponent />
    </div>
  </div>
</template>

<script>
import { LoginComponent } from '@/components';

export default {
  components: {
    LoginComponent,
  },
};
</script>
