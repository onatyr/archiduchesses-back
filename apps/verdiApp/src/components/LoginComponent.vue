<template>
  <div class="flex flex-col justify-center w-full gap-10">
    <form @submit.prevent="submitForm">
      <TextInput
        v-if="state.isRegister"
        id="name"
        label="Name"
        v-model="form.name"
        required
        placeholder="Enter your name"
        :error="errors.name"
      />

      <TextInput
        id="email"
        label="Email"
        type="email"
        v-model="form.email"
        required
        placeholder="Enter your email"
        :error="errors.email"
      />

      <TextInput
        id="password"
        label="Password"
        type="password"
        v-model="form.password"
        required
        placeholder="Enter your password"
        :error="errors.password"
      />

      <TextInput
        v-if="state.isRegister"
        id="confirmPassword"
        label="Confirm Password"
        type="password"
        v-model="form.confirmPassword"
        required
        placeholder="Confirm your password"
        :error="errors.confirmPassword"
      />

      <ErrorMessage
        :message="errors.form"
        variant="error"
        size="sm"
        :show-icon="true"
      />

      <div class="flex items-center justify-between">
        <FormButton type="submit" variant="primary">
          {{ state.isRegister ? 'Register' : 'Login' }}
        </FormButton>
      </div>

      <button
        type="button"
        @click="toggleForm"
        class="inline-block align-baseline font-bold text-sm text-secondary dark:text-dark-secondary hover:text-secondaryVariant dark:hover:text-dark-secondaryVariant"
      >
        {{
          state.isRegister
            ? 'Already have an account? Login'
            : "Don't have an account? Register"
        }}
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { AuthService } from '@/services';
import TextInput from './forms/TextInput.vue';
import FormButton from './forms/FormButton.vue';
import ErrorMessage from './forms/ErrorMessage.vue';

export default defineComponent({
  components: {
    TextInput,
    FormButton,
    ErrorMessage,
  },
  setup() {
    const router = useRouter();
    const state = reactive({
      isRegister: false,
    });
    const form = reactive({
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
    });

    const authService = new AuthService();

    const errors = reactive({
      email: '',
      password: '',
      confirmPassword: '',
      form: '',
      name: '',
    });

    const clearErrors = () => {
      errors.email = '';
      errors.password = '';
      errors.confirmPassword = '';
      errors.form = '';
      errors.name = '';
    };

    const submitForm = async () => {
      clearErrors();

      if (state.isRegister) {
        // Registration logic
      } else {
        // Login logic
      }
    };

    const toggleForm = () => {
      state.isRegister = !state.isRegister;
      console.log(state.isRegister);
    };

    return {
      state,
      form,
      submitForm,
      toggleForm,
      errors,
    };
  },
});
</script>
