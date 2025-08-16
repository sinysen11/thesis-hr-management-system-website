<template>
  <div
    class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="bg-white rounded-xl shadow-2xl w-full max-w-md p-6">
      <!-- Logo Section -->
      <div class="text-center mb-6">
        <h1 class="text-2xl font-semibold text-[#2e6d56]">SunFlex</h1>
        <p class="text-[#2e6d56] font-medium tracking-wide text-sm">
          INFORMATION SYSTEM
        </p>
        <p class="text-gray-600 text-xs mt-1">SunFlex(Cambodia) Co., Ltd.</p>
      </div>

      <!-- Login Form -->
      <form @submit.prevent="login" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700"
            >Email <span class="text-red-500">*</span></label
          >
          <input
            v-model="email"
            type="email"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2e6d56] transition text-sm"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700"
            >Password <span class="text-red-500">*</span></label
          >
          <div class="relative mt-1">
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2e6d56] transition text-sm"
              placeholder="Enter your password"
            />
            <button
              type="button"
              class="absolute right-3 top-2.5 text-gray-500 focus:outline-none"
              @click="togglePassword"
            >
              <i v-if="showPassword" class="fas fa-eye-slash"></i>
              <i v-else class="fas fa-eye"></i>
            </button>
          </div>
          <div class="text-right mt-1">
            <!-- RouterLink needs to be provided by the parent app or router instance -->
            <RouterLink
              to="/signup"
              class="text-sm text-[#2e6d56] hover:underline"
              >Forget password?</RouterLink
            >
          </div>
        </div>

        <button
          type="submit"
          class="w-full bg-[#2e6d56] text-white py-2 rounded-md hover:bg-[#245c48] transition text-sm font-medium"
          :disabled="loading"
        >
          <span v-if="loading">Logging in...</span>
          <span v-else>Login</span>
        </button>
      </form>

      <!-- Error Message -->
      <p v-if="error" class="text-red-500 text-sm mt-2 text-center">
        {{ error }}
      </p>

      <!-- Sign Up Link -->
      <div class="text-center mt-4 text-sm text-gray-700">
        Don’t have an account?
        <RouterLink
          to="/signup"
          class="text-[#2e6d56] font-medium hover:underline"
          >Sign Up</RouterLink
        >
      </div>

      <!-- Footer -->
      <div class="text-xs text-center text-gray-500 mt-6">
        ©2025 by SunFlex (Cambodia) Co., Ltd<br />
      </div>
    </div>
  </div>
</template>

<script>
// We need to import the API service here, just like in the script setup version.
import { login } from '@/services/auth';

export default {
  // A good practice is to always name your component
  name: 'LoginComponent',

  // The 'data' option is a function that returns an object.
  // Each property in this object is reactive.
  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
      loading: false,
      error: null
    };
  },

  // The 'methods' option is an object where you define your component's functions.
  // You access data properties and other methods using 'this'.
  methods: {
    togglePassword() {
      // Accessing the 'showPassword' data property with 'this'
      this.showPassword = !this.showPassword;
    },

    async login() {
      // Using 'this' to access the component's data
      if (!this.email || !this.password) {
        this.error = 'Please fill in all required fields.';
        return;
      }

      this.loading = true;
      this.error = null;

      try {
        const credentials = {
          email: this.email,
          password: this.password
        };

        // Call the imported API function
        const response = await login(credentials);

        if (response.token) {
          localStorage.setItem('userToken', response.token);
          this.$router.push('/');
        } else {
          this.error = 'Login failed. Invalid credentials or response.';
        }
      } catch (err) {
        this.error = err.message || 'Login failed. Please try again.';
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>
