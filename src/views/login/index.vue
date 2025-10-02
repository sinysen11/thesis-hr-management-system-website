<template>
  <div class="min-h-screen flex">
    <!-- Left Panel: Login Form -->
    <div class="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
      <div class="max-w-md w-full bg-white p-8 rounded-xl shadow-2xl border-t-4 border-[#2e6d56]">
        <!-- Logo Section -->
        <div class="mb-8 text-center">
          <h1
            class="text-3xl font-extrabold text-[#2e6d56] tracking-tight border-b border-gray-200 inline-block px-4 pb-1"
          >
            SunFlex
          </h1>
          <p class="text-[#2e6d56] font-semibold tracking-wider text-sm uppercase mt-1">
            Information System
          </p>
          <p class="mt-2 text-xs text-gray-500">SunFlex(Cambodia) Co., Ltd.</p>
        </div>

        <!-- Alert -->
        <div
          v-if="errorMessage"
          class="mb-4 p-3 text-sm text-red-800 rounded-lg bg-red-100 border border-red-300"
          role="alert"
        >
          <i class="fas fa-exclamation-circle mr-2"></i>
          {{ errorMessage }}
          <button
            @click="errorMessage = ''"
            class="absolute right-3 top-2.5 text-red-800 hover:text-red-900 focus:outline-none"
            aria-label="Close alert"
          >
            <i class="fas fa-times"></i>
          </button>
        </div>

        <!-- Login Form -->
        <form @submit.prevent="submitLogin" class="space-y-6">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
              Email <span class="text-red-500">*</span>
            </label>
            <div class="relative">
              <input
                id="email"
                v-model="email"
                type="email"
                required
                class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e6d56] focus:border-[#2e6d56] transition text-sm shadow-sm"
                placeholder="Enter your email"
                autocomplete="username"
              />
              <span class="absolute left-3 top-2.5 text-gray-400">
                <i class="fas fa-envelope"></i>
              </span>
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 mb-1">
              Password <span class="text-red-500">*</span>
            </label>
            <div class="relative">
              <input
                id="password"
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                required
                class="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e6d56] focus:border-[#2e6d56] transition text-sm shadow-sm"
                placeholder="Enter your password"
                autocomplete="current-password"
              />
              <span class="absolute left-3 top-2.5 text-gray-400">
                <i class="fas fa-lock"></i>
              </span>
              <button
                type="button"
                class="absolute right-3 top-2.5 text-gray-500 hover:text-[#2e6d56] focus:outline-none transition"
                @click="togglePassword"
                :aria-label="showPassword ? 'Hide password' : 'Show password'"
              >
                <i v-if="showPassword" class="fas fa-eye-slash"></i>
                <i v-else class="fas fa-eye"></i>
              </button>
            </div>
            <div class="mt-2 text-right">
              <RouterLink
                to="/forgot-password"
                class="text-sm font-medium text-[#2e6d56] hover:text-[#1e4d3d] hover:underline transition"
              >
                Forget password?
              </RouterLink>
            </div>
          </div>

          <button
            type="submit"
            :disabled="isLoading"
            class="w-full flex items-center justify-center gap-2 cursor-pointer bg-[#2e6d56] text-white py-2.5 rounded-lg hover:bg-[#245c48] transition-all duration-300 text-base font-semibold shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span v-if="!isLoading">Login</span>
            <span v-else class="flex items-center gap-2">
              <svg
                class="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
              Logging in...
            </span>
          </button>
        </form>

        <!-- Sign Up Link -->
        <hr class="mt-8 mb-4 border-gray-100" />
        <div class="text-center text-sm text-gray-700">
          Don’t have an account?
          <RouterLink
            to="/signup"
            class="text-sm font-medium text-[#2e6d56] hover:text-[#1e4d3d] hover:underline transition"
          >
            Sign Up
          </RouterLink>
        </div>
        <div class="text-xs text-center text-gray-400 mt-4">
          ©2025 by SunFlex (Cambodia) Co., Ltd
        </div>
      </div>
    </div>

    <!-- Right Panel: Decorative -->
    <div
      class="hidden lg:flex w-1/2 items-center justify-center p-8 bg-gradient-to-br from-[#2e6d56] to-[#6dae98] relative overflow-hidden"
    >
      <div class="absolute inset-0 z-0 opacity-10">
        <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="20" cy="20" r="15" fill="currentColor" class="text-white opacity-20" />
          <circle cx="80" cy="50" r="20" fill="currentColor" class="text-white opacity-10" />
          <rect x="10" y="70" width="30" height="10" fill="currentColor" class="text-white opacity-15" />
          <polygon points="60,10 70,30 50,30" fill="currentColor" class="text-white opacity-25" />
        </svg>
      </div>
      <div class="relative z-10 text-center text-white p-6 rounded-lg">
        <h2 class="text-5xl font-extrabold mb-3 leading-tight drop-shadow-lg">
          <span class="text-green-500">SunFlex(Cambodia) Co., Ltd.</span>
        </h2>
        <p class="text-xl font-light mb-6">
          Your partner in innovative information systems.
        </p>
        <div class="space-y-2 text-lg">
          <p>
            <i class="fas fa-map-marker-alt mr-2"></i>Phnom Penh, Cambodia
          </p>
          <p>
            <i class="fas fa-phone mr-2"></i>+855 23 886 289 / +855 92 301 113
          </p>
          <p>
            <i class="fas fa-globe mr-2"></i>sunflexcambodia.com
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from '@/services/auth';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
      isLoading: false,
      showPassword: false
    };
  },
  methods: {
    async submitLogin() {
      console.log('Login triggered');
      this.isLoading = true;
      this.errorMessage = '';
      try {
        const response = await login({
          email: this.email,
          password: this.password
        });
        if (response.status === 1) {
          localStorage.setItem('token', response.token);
          localStorage.setItem(
            'user',
            JSON.stringify({
              data: {
                userId: response.applicant._id,
                first_name: response.applicant.first_name,
                last_name: response.applicant.last_name,
                email: response.applicant.email
              }
            })
          );
          this.$router.push('/');
        } else {
          this.errorMessage = response.message || 'Login failed';
        }
      } catch (error) {
        this.errorMessage = error.message || 'An error occurred during login';
      } finally {
        this.isLoading = false;
      }
    },
    togglePassword() {
      this.showPassword = !this.showPassword;
    }
  }
};
</script>

<style scoped>
/* Custom animations for alert */
.animate-slide-in {
  animation: slideIn 0.3s ease-in-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>