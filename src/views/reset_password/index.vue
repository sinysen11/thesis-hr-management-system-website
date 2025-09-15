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

      <!-- Alerts -->
      <div v-if="successMessage" class="alert alert-success">
        {{ successMessage }}
      </div>
      <div v-if="errorMessage" class="alert alert-error">
        {{ errorMessage }}
      </div>

      <form @submit.prevent="handleResetPassword" class="space-y-6">
        <div class="relative">
          <label class="block text-sm font-medium text-gray-700">
            New Password <span class="text-red-500">*</span>
          </label>
          <div class="mt-1 relative">
            <input
              v-model="new_password"
              :type="showPassword ? 'text' : 'password'"
              required
              class="w-full pr-10 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2e6d56] focus:border-transparent transition"
              placeholder="Enter your new password"
            />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 focus:outline-none"
            >
              <i :class="showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'"></i>
            </button>
          </div>
        </div>

        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-[#2e6d56] text-white py-2.5 rounded-lg font-semibold hover:bg-[#245c48] transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Reset Password
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
import { resetPassword } from '@/services/auth';

export default {
  data() {
    return {
      new_password: '',
      showPassword: false,
      token: '',
      loading: false,
      successMessage: '',
      errorMessage: ''
    };
  },
  methods: {
    async handleResetPassword() {
      if (!this.new_password) {
        this.errorMessage = 'Please enter a new password.';
        this.alert(this.errorMessage, 'error');
        return;
      }

      if (!this.token) {
        this.errorMessage = 'Invalid or missing reset token.';
        this.alert(this.errorMessage, 'error');
        return;
      }

      this.loading = true;
      try {
        const response = await resetPassword({
          token: this.token,
          new_password: this.new_password
        });

        if (response && response.status === 1) {
          this.successMessage = 'Password reset successfully! You can now sign in.';
          this.alert(this.successMessage, 'success');
          this.new_password = '';
          setTimeout(() => {
            this.$router.push('/login');
          }, 3000);
        } else {
          this.errorMessage = response.message || 'Failed to reset password. Please try again.';
          this.alert(this.errorMessage, 'error');
        }
      } catch (error) {
        console.error('Error resetting password:', error);
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
  },
  mounted() {
    // Extract token from URL query parameter
    const query = new URLSearchParams(window.location.search);
    this.token = query.get('token') || '';
    if (!this.token) {
      this.errorMessage = 'Invalid or missing reset token.';
      this.alert(this.errorMessage, 'error');
    }
  }
};
</script>

<style scoped>
/* Alert styling for success and error messages */
.alert {
  padding: 1rem;
  color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: opacity 0.5s ease-in-out;
  margin-bottom: 1.5rem;
}

.alert-success {
  background-color: #2e6d56;
}

.alert-error {
  background-color: #dc2626;
}
</style>