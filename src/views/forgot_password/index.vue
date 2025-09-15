<template>
  <div
    class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50"
  >
    <div class="bg-white rounded-xl shadow-2xl w-full max-w-lg p-8">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-[#2e6d56]">SunFlex</h1>
        <p class="text-[#2e6d56] font-semibold tracking-wide text-lg">
          INFORMATION SYSTEM
        </p>
        <p class="text-gray-600 text-sm mt-2">SunFlex(Cambodia) Co., Ltd.</p>
      </div>

      <form @submit.prevent="handleForgotPassword" class="space-y-6">
        <div>
          <label class="block text-sm font-medium text-gray-700">
            Email <span class="text-red-500">*</span>
          </label>
          <input
            v-model="email"
            type="email"
            required
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2e6d56] focus:border-transparent transition"
            placeholder="Enter your email"
          />
        </div>

        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-[#2e6d56] text-white py-2.5 rounded-lg font-semibold hover:bg-[#245c48] transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Send Reset Link
        </button>

        <p class="text-sm text-center mt-4 text-gray-600">
          Remember your password?
          <RouterLink
            to="/login"
            class="text-[#2e6d56] font-semibold hover:underline"
            >Sign In</RouterLink
          >
        </p>
      </form>

      <div class="text-xs text-center text-gray-500 mt-8">
        ©2025 by SunFlex (Cambodia) Co., Ltd<br />
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
          // after success, you might want to redirect the user to login page
          this.$router.push('/login');
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
/* Alert styling for success and error messages */
.fixed {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 50;
  max-width: 20rem;
}

.alert {
  padding: 1rem;
  color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: opacity 0.5s ease-in-out;
}

.alert-success {
  background-color: #2e6d56;
}

.alert-error {
  background-color: #dc2626;
}
</style>