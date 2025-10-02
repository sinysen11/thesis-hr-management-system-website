<template>
  <div class="min-h-screen flex">
    <!-- Left Panel: Forgot Password Form -->
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

        <!-- Alerts -->
        <div
          v-if="successMessage"
          class="mb-4 p-3 text-sm text-green-800 rounded-lg bg-green-100 border border-green-300"
          role="alert"
        >
          <i class="fas fa-check-circle mr-2"></i>
          {{ successMessage }}
          <button
            @click="successMessage = ''"
            class="absolute right-3 top-2.5 text-green-800 hover:text-green-900 focus:outline-none"
            aria-label="Close alert"
          >
            <i class="fas fa-times"></i>
          </button>
        </div>
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

        <!-- Forgot Password Form -->
        <form @submit.prevent="handleForgotPassword" class="space-y-6">
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
                autocomplete="email"
              />
              <span class="absolute left-3 top-2.5 text-gray-400">
                <i class="fas fa-envelope"></i>
              </span>
            </div>
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="w-full flex items-center justify-center gap-2 cursor-pointer bg-[#2e6d56] text-white py-2.5 rounded-lg hover:bg-[#245c48] transition-all duration-300 text-base font-semibold shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span v-if="!loading">Send Reset Link</span>
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
              Sending...
            </span>
          </button>
        </form>

        <!-- Sign In Link -->
        <div class="text-center mt-4 text-sm text-gray-700">
          Remember your password?
          <RouterLink
            to="/login"
            class="text-sm font-medium text-[#2e6d56] hover:text-[#1e4d3d] hover:underline transition"
          >
            Sign In
          </RouterLink>
        </div>

        <!-- Footer -->
        <hr class="mt-8 mb-4 border-gray-100" />
        <div class="text-xs text-center text-gray-400">
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
import { forgotPassword } from '@/services/auth';

export default {
  data() {
    return {
      email: '',
      loading: false,
      successMessage: '',
      errorMessage: ''
    };
  },
  methods: {
    async handleForgotPassword() {
      if (!this.email) {
        this.errorMessage = 'Please enter your email address.';
        this.alert(this.errorMessage, 'error');
        return;
      }

      this.loading = true;
      try {
        const response = await forgotPassword({ email: this.email });
        if (response && response.status === 1) {
          this.successMessage = 'Password reset link sent successfully! Check your email.';
          this.alert(this.successMessage, 'success');
          this.email = '';
          setTimeout(() => {
            this.$router.push('/login');
          }, 3000);
        } else {
          this.errorMessage = response.message || 'Failed to send reset link. Please try again.';
          this.alert(this.errorMessage, 'error');
        }
      } catch (error) {
        console.error('Error sending reset link:', error);
        this.errorMessage = error.response?.data?.message || 'An error occurred. Please try again.';
        this.alert(this.errorMessage, 'error');
      } finally {
        this.loading = false;
      }
    },
    alert(message, type = 'success') {
      if (type === 'success') {
        this.successMessage = message;
        this.errorMessage = '';
      } else {
        this.errorMessage = message;
        this.successMessage = '';
      }
      setTimeout(() => {
        this.successMessage = '';
        this.errorMessage = '';
      }, 5000);
    }
  }
};
</script>

<style scoped>
/* Custom animations for alerts */
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