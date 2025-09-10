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

      <form @submit.prevent="handleRegister" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700">
              First Name <span class="text-red-500">*</span>
            </label>
            <input
              v-model="first_name"
              type="text"
              required
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2e6d56] focus:border-transparent transition"
              placeholder="Enter your first name"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">
              Last Name <span class="text-red-500">*</span>
            </label>
            <input
              v-model="last_name"
              type="text"
              required
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2e6d56] focus:border-transparent transition"
              placeholder="Enter your last name"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">
              Sex <span class="text-red-500">*</span>
            </label>
            <select
              v-model="sex"
              required
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2e6d56] focus:border-transparent transition text-sm"
            >
              <option value="" disabled selected>Select your sex</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">
              Date of Birth <span class="text-red-500">*</span>
            </label>
            <input
              v-model="dob"
              type="date"
              required
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2e6d56] focus:border-transparent transition text-sm"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">
              Phone <span class="text-red-500">*</span>
            </label>
            <input
              v-model="phone"
              type="text"
              required
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2e6d56] focus:border-transparent transition"
              placeholder="Enter your phone number"
            />
          </div>

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
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">
            Telegram <span class="text-red-500">*</span>
          </label>
          <input
            v-model="telegram"
            type="text"
            required
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2e6d56] focus:border-transparent transition"
            placeholder="Enter your Telegram username"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">
            Current Address <span class="text-red-500">*</span>
          </label>
          <input
            v-model="current_address"
            type="text"
            required
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2e6d56] focus:border-transparent transition"
            placeholder="Enter your current address"
          />
        </div>
        
        <div class="relative">
          <label class="block text-sm font-medium text-gray-700">
            Password <span class="text-red-500">*</span>
          </label>
          <div class="mt-1 relative">
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              required
              class="w-full pr-10 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2e6d56] focus:border-transparent transition"
              placeholder="Enter your password"
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

        <div class="relative">
          <label class="block text-sm font-medium text-gray-700">
            Confirm Password <span class="text-red-500">*</span>
          </label>
          <div class="mt-1 relative">
            <input
              v-model="confirm_password"
              :type="showConfirmPassword ? 'text' : 'password'"
              required
              class="w-full pr-10 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2e6d56] focus:border-transparent transition"
              placeholder="Confirm your password"
            />
            <button
              type="button"
              @click="showConfirmPassword = !showConfirmPassword"
              class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 focus:outline-none"
            >
              <i
                :class="showConfirmPassword ? 'fas fa-eye' : 'fas fa-eye-slash'"
              ></i>
            </button>
          </div>
        </div>

        <button
          type="submit"
          class="w-full bg-[#2e6d56] text-white py-2.5 rounded-lg font-semibold hover:bg-[#245c48] transition"
        >
          Register
        </button>

        <p class="text-sm text-center mt-4 text-gray-600">
          Already have an account?
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
      showConfirmPassword: false
    };
  },
  methods: {
    async handleRegister() {
      if (this.password !== this.confirm_password) {
        alert('Passwords do not match!');
        return;
      }

      try {
        const response = await register({
          first_name: this.first_name,
          last_name: this.last_name,
          sex: this.sex,
          dob: this.dob,
          current_address: this.current_address,
          telegram: this.telegram,
          email: this.email,
          password: this.password,
          confirm_password: this.confirm_password, // Added to payload
          phone: this.phone
        });

        alert('Registration successful!');
        console.log('Response:', response.data);

        this.$router.push('/login');
      } catch (error) {
        console.error('Error registering:', error);
        alert('Registration failed, please try again.');
      }
    }
  }
};
</script>
