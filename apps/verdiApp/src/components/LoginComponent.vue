<template>
  <div class="flex flex-col justify-center w-full">
    <h2 class="text-2xl font-bold mb-6 text-carob align-center">
      Welcome to Turbo Plant
    </h2>

    <form @submit.prevent="submitForm">
      <div v-if="isRegister" class="mb-4 w-full">
        <label for="name" class="block text-carob text-sm font-bold mb-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          required
          placeholder="Enter your name"
          class="shadow appearance-none border border-pistache rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <p v-if="errors.name" class="text-red-500 text-xs italic">
          {{ errors.name }}
        </p>
      </div>

      <div class="mb-4 w-full">
        <label for="email" class="block text-carob text-sm font-bold mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          required
          placeholder="Enter your email"
          class="shadow appearance-none border border-pistache rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <p v-if="errors.email" class="text-red-500 text-xs italic">
          {{ errors.email }}
        </p>
      </div>

      <div class="mb-4 w-full">
        <label for="password" class="block text-carob text-sm font-bold mb-2">
          Password:
        </label>
        <input
          type="password"
          id="password"
          v-model="form.password"
          required
          placeholder="Enter your password"
          class="shadow appearance-none border border-pistache rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <p v-if="errors.password" class="text-red-500 text-xs italic">
          {{ errors.password }}
        </p>
      </div>

      <div v-if="isRegister" class="mb-4 w-full">
        <label
          for="confirmPassword"
          class="block text-carob text-sm font-bold mb-2"
        >
          Confirm Password:
        </label>
        <input
          type="password"
          id="confirmPassword"
          v-model="form.confirmPassword"
          required
          placeholder="Confirm your password"
          class="shadow appearance-none border border-pistache rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <p v-if="errors.confirmPassword" class="text-red-500 text-xs italic">
          {{ errors.confirmPassword }}
        </p>
      </div>

      <div v-if="errors.form" class="text-red-500 text-xs italic mb-4">
        {{ errors.form }}
      </div>

      <div class="flex items-center justify-between">
        <button
          type="submit"
          class="bg-chai hover:bg-matcha text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {{ isRegister ? 'Register' : 'Login' }}
        </button>
      </div>

      <button
        type="button"
        @click="toggleForm"
        class="inline-block align-baseline font-bold text-sm text-carob hover:text-chai"
      >
        {{
          isRegister
            ? 'Already have an account? Login'
            : "Don't have an account? Register"
        }}
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { AuthService } from '@/services';

export default defineComponent({
  setup() {
    const router = useRouter();
    const isRegister = ref(false);
    const form = reactive({
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
    });

    const authService = new AuthService();

    // Track errors
    const errors = reactive({
      email: '',
      password: '',
      confirmPassword: '',
      form: '',
      name: '',
    });

    // Clear error messages
    const clearErrors = () => {
      errors.email = '';
      errors.password = '';
      errors.confirmPassword = '';
      errors.form = '';
      errors.name = ''; // Clear the name error as well
    };

    // Login/Register handler
    const submitForm = async () => {
      clearErrors();

      if (isRegister.value) {
        // Registration validation
        if (!form.name) {
          errors.name = 'Name is required.';
        }
        if (!form.email) {
          errors.email = 'Email is required.';
        }
        if (!form.password) {
          errors.password = 'Password is required.';
        }
        if (form.password !== form.confirmPassword) {
          errors.confirmPassword = 'Passwords do not match.';
        }

        // Check for any errors before registration
        if (
          errors.name ||
          errors.email ||
          errors.password ||
          errors.confirmPassword
        ) {
          return;
        }

        // Register logic
        try {
          const registerResponse = await authService.register(
            form.email,
            form.password,
            form.name
          );

          if (!registerResponse) {
            errors.form = 'Registration failed.';
            return;
          }

          alert('Registration successful');
        } catch (error) {
          console.error(error);
          errors.form = 'An error occurred during registration.';
        }
      } else {
        // Login logic
        if (!form.email) {
          errors.email = 'Email is required.';
        }
        if (!form.password) {
          errors.password = 'Password is required.';
        }

        // Check for any errors before login
        if (errors.email || errors.password) {
          return;
        }

        const isLogged = await authService.login(form.email, form.password);

        if (isLogged) {
          await router.push({ name: 'main' });
        } else {
          errors.form = 'Invalid username or password';
        }
      }
    };

    const toggleForm = () => {
      isRegister.value = !isRegister.value;
    };

    return {
      isRegister,
      form,
      submitForm,
      toggleForm,
      errors,
    };
  },
});
</script>
