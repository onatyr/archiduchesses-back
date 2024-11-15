<template>
  <div class="flex min-h-screen">
    <!-- Left Section - Brand/Welcome Area -->
    <div
      class="flex flex-col justify-center items-center w-1/2 bg-primary dark:bg-dark-primary text-onPrimary dark:text-dark-onPrimary p-8"
    >
      <span class="material-symbols-outlined"> potted_plant </span>
      <!-- Optional: Add a welcoming message -->
      <h2 class="text-2xl font-bold mb-6 align-center">
        Welcome to Turbo Plant
      </h2>
    </div>

    <!-- Right Section - Login Form -->
    <div
      class="flex justify-center items-center w-1/2 bg-background dark:bg-dark-background p-8"
    >
      <div class="w-full max-w-md">
        <LoginComponent />
      </div>
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
