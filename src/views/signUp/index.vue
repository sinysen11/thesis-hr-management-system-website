<template>
  <div class="min-h-screen flex">
    <!-- Left Panel: Sign Up Form -->
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
          class="mb-4 p-3 text-sm text-green-800 rounded-lg bg-green-100 border border-green-300 relative animate-slide-in"
          role="alert"
        >
          <i class="fas fa-check-circle mr-2"></i>
          {{ successMessage }}
          <button
            @click="clearAlert('success')"
            class="absolute right-3 top-2.5 text-green-800 hover:text-green-900 focus:outline-none"
            aria-label="Close alert"
          >
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div
          v-if="errorMessage"
          class="mb-4 p-3 text-sm text-red-800 rounded-lg bg-red-100 border border-red-300 relative animate-slide-in"
          role="alert"
        >
          <i class="fas fa-exclamation-circle mr-2"></i>
          {{ errorMessage }}
          <button
            @click="clearAlert('error')"
            class="absolute right-3 top-2.5 text-red-800 hover:text-red-900 focus:outline-none"
            aria-label="Close alert"
          >
            <i class="fas fa-times"></i>
          </button>
        </div>

        <!-- Sign Up Form -->
        <form @submit.prevent="handleRegister" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Row 1: First Name and Last Name -->
            <div>
              <label for="first_name" class="block text-sm font-medium text-gray-700 mb-1">
                First Name <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <input
                  id="first_name"
                  v-model="first_name"
                  type="text"
                  required
                  class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e6d56] focus:border-[#2e6d56] transition text-sm shadow-sm"
                  placeholder="Enter your first name"
                  autocomplete="given-name"
                />
                <span class="absolute left-3 top-2.5 text-gray-400">
                  <i class="fas fa-user"></i>
                </span>
              </div>
            </div>

            <div>
              <label for="last_name" class="block text-sm font-medium text-gray-700 mb-1">
                Last Name <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <input
                  id="last_name"
                  v-model="last_name"
                  type="text"
                  required
                  class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e6d56] focus:border-[#2e6d56] transition text-sm shadow-sm"
                  placeholder="Enter your last name"
                  autocomplete="family-name"
                />
                <span class="absolute left-3 top-2.5 text-gray-400">
                  <i class="fas fa-user"></i>
                </span>
              </div>
            </div>

            <!-- Row 2: Sex and Date of Birth -->
            <div>
              <label for="sex" class="block text-sm font-medium text-gray-700 mb-1">
                Sex <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <select
                  id="sex"
                  v-model="sex"
                  required
                  class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e6d56] focus:border-[#2e6d56] transition text-sm shadow-sm"
                >
                  <option value="" disabled selected>Select your sex</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <span class="absolute left-3 top-2.5 text-gray-400">
                  <i class="fas fa-venus-mars"></i>
                </span>
              </div>
            </div>

            <div>
              <label for="dob" class="block text-sm font-medium text-gray-700 mb-1">
                Date of Birth <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <input
                  id="dob"
                  v-model="dob"
                  type="date"
                  required
                  class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e6d56] focus:border-[#2e6d56] transition text-sm shadow-sm"
                />
                <span class="absolute left-3 top-2.5 text-gray-400">
                  <i class="fas fa-calendar-alt"></i>
                </span>
              </div>
            </div>

            <!-- Row 3: Phone and Email -->
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">
                Phone <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <input
                  id="phone"
                  v-model="phone"
                  type="text"
                  required
                  class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e6d56] focus:border-[#2e6d56] transition text-sm shadow-sm"
                  placeholder="Enter your phone number"
                  autocomplete="tel"
                />
                <span class="absolute left-3 top-2.5 text-gray-400">
                  <i class="fas fa-phone"></i>
                </span>
              </div>
            </div>

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

            <!-- Row 4: Telegram and Current Address -->
            <div>
              <label for="telegram" class="block text-sm font-medium text-gray-700 mb-1">
                Telegram <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <input
                  id="telegram"
                  v-model="telegram"
                  type="text"
                  required
                  class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e6d56] focus:border-[#2e6d56] transition text-sm shadow-sm"
                  placeholder="Enter your Telegram username"
                  autocomplete="off"
                />
                <span class="absolute left-3 top-2.5 text-gray-400">
                  <i class="fab fa-telegram-plane"></i>
                </span>
              </div>
            </div>

            <div>
              <label for="current_address" class="block text-sm font-medium text-gray-700 mb-1">
                Current Address <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <input
                  id="current_address"
                  v-model="current_address"
                  type="text"
                  required
                  class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e6d56] focus:border-[#2e6d56] transition text-sm shadow-sm"
                  placeholder="Enter your current address"
                  autocomplete="street-address"
                />
                <span class="absolute left-3 top-2.5 text-gray-400">
                  <i class="fas fa-map-marker-alt"></i>
                </span>
              </div>
            </div>

            <!-- Row 5: Password and Confirm Password -->
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
                  class="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e6d56] focus:border-[#2e6d56] transition text-sm shadow-sm"
                  placeholder="Enter your password"
                  autocomplete="new-password"
                />
                <span class="absolute left-3 top-2.5 text-gray-400">
                  <i class="fas fa-lock"></i>
                </span>
                <button
                  type="button"
                  class="absolute right-3 top-2.5 text-gray-500 hover:text-[#2e6d56] focus:outline-none transition"
                  @click="showPassword = !showPassword"
                  :aria-label="showPassword ? 'Hide password' : 'Show password'"
                >
                  <i v-if="showPassword" class="fas fa-eye-slash"></i>
                  <i v-else class="fas fa-eye"></i>
                </button>
              </div>
            </div>

            <div>
              <label for="confirm_password" class="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <input
                  id="confirm_password"
                  v-model="confirm_password"
                  :type="showConfirmPassword ? 'text' : 'password'"
                  required
                  class="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e6d56] focus:border-[#2e6d56] transition text-sm shadow-sm"
                  placeholder="Confirm your password"
                  autocomplete="new-password"
                />
                <span class="absolute left-3 top-2.5 text-gray-400">
                  <i class="fas fa-lock"></i>
                </span>
                <button
                  type="button"
                  class="absolute right-3 top-2.5 text-gray-500 hover:text-[#2e6d56] focus:outline-none transition"
                  @click="showConfirmPassword = !showConfirmPassword"
                  :aria-label="showConfirmPassword ? 'Hide password' : 'Show password'"
                >
                  <i v-if="showConfirmPassword" class="fas fa-eye-slash"></i>
                  <i v-else class="fas fa-eye"></i>
                </button>
              </div>
            </div>
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="w-full flex items-center justify-center gap-2 cursor-pointer bg-[#2e6d56] text-white py-2.5 rounded-lg hover:bg-[#245c48] transition-all duration-300 text-base font-semibold shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span v-if="!loading">Register</span>
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
              Registering...
            </span>
          </button>
        </form>

        <!-- Sign In Link -->
        <div class="text-center mt-4 text-sm text-gray-700">
          Already have an account?
          <RouterLink
            to="/login"
            class="text-sm font-medium text-[#2e6d56] hover:text-[#245c48] hover:underline transition"
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
import { register } from '@/services/auth';

export default {
  data() {
    return {
      first_name: '',
      last_name: '',
      sex: '',
      dob: '',
      current_address: '',
      telegram: '',
      email: '',
      phone: '',
      password: '',
      confirm_password: '',
      showPassword: false,
      showConfirmPassword: false,
      loading: false,
      successMessage: '',
      errorMessage: '',
      alertTimeout: null // Track timeout for clearing alerts
    };
  },
  methods: {
    async handleRegister() {
      // Validate required fields
      if (
        !this.first_name ||
        !this.last_name ||
        !this.sex ||
        !this.dob ||
        !this.current_address ||
        !this.telegram ||
        !this.email ||
        !this.phone ||
        !this.password ||
        !this.confirm_password
      ) {
        this.setAlert('Please fill in all required fields.', 'error');
        return;
      }

      // Validate password match
      if (this.password !== this.confirm_password) {
        this.setAlert('Passwords do not match!', 'error');
        return;
      }

      this.loading = true;
      try {
        const response = await register({
          first_name: this.first_name,
          last_name: this.last_name,
          sex: this.sex,
          dob: this.dob,
          current_address: this.current_address,
          telegram: this.telegram,
          email: this.email,
          phone: this.phone,
          password: this.password,
          confirm_password: this.confirm_password
        });

        this.setAlert('Registration successful! Redirecting to login...', 'success');
        this.first_name = '';
        this.last_name = '';
        this.sex = '';
        this.dob = '';
        this.current_address = '';
        this.telegram = '';
        this.email = '';
        this.phone = '';
        this.password = '';
        this.confirm_password = '';
        setTimeout(() => {
          this.$router.push('/login');
        }, 3000);
      } catch (error) {
        console.error('Error registering:', error);
        this.setAlert(
          error.response?.data?.message || 'Registration failed, please try again.',
          'error'
        );
      } finally {
        this.loading = false;
      }
    },
    setAlert(message, type = 'success') {
      // Clear any existing timeout to prevent race conditions
      if (this.alertTimeout) {
        clearTimeout(this.alertTimeout);
      }

      // Set the appropriate message
      if (type === 'success') {
        this.successMessage = message;
        this.errorMessage = '';
      } else {
        this.errorMessage = message;
        this.successMessage = '';
      }

      // Log for debugging
      console.log(`${type} message set:`, message);

      // Auto-clear after 5 seconds
      this.alertTimeout = setTimeout(() => {
        this.successMessage = '';
        this.errorMessage = '';
        this.alertTimeout = null;
      }, 5000);
    },
    clearAlert(type) {
      // Clear the specific alert and cancel the timeout
      if (this.alertTimeout) {
        clearTimeout(this.alertTimeout);
        this.alertTimeout = null;
      }
      if (type === 'success') {
        this.successMessage = '';
      } else {
        this.errorMessage = '';
      }
    }
  },
  beforeUnmount() {
    // Clean up timeout when component is destroyed
    if (this.alertTimeout) {
      clearTimeout(this.alertTimeout);
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