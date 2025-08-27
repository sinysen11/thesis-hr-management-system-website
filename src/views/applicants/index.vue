<template>
  <div
    class="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 flex justify-center"
  >
    <div class="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6">
      <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">
        Job Application Form
      </h2>

      <!-- Job Information -->
      <div class="mb-8">
        <h3
          class="text-xl font-semibold text-blue-600 mb-4 border-b-2 border-blue-500 pb-2"
        >
          Job Information
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              for="apply_position"
              class="block text-sm font-medium text-gray-700 mb-1"
              >Apply Position</label
            >
            <input
              v-model="form.apply_position"
              id="apply_position"
              type="text"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              placeholder="Field Investigator and Field Collector"
              required
              readonly
            />
          </div>
          <div>
            <label
              for="requested_location"
              class="block text-sm font-medium text-gray-700 mb-1"
              >Requested Location</label
            >
            <input
              v-model="form.requested_location"
              id="requested_location"
              type="text"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              placeholder="Svay Anyor"
              required
            />
          </div>
        </div>
      </div>

      <!-- Personal Information -->
      <div class="mb-8">
        <h3
          class="text-xl font-semibold text-blue-600 mb-4 border-b-2 border-blue-500 pb-2"
        >
          Personal Information
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              for="first_name"
              class="block text-sm font-medium text-gray-700 mb-1"
              >First Name (Khmer)</label
            >
            <input
              v-model="form.first_name"
              id="first_name"
              type="text"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              required
            />
          </div>
          <div>
            <label
              for="last_name"
              class="block text-sm font-medium text-gray-700 mb-1"
              >Last Name (Latin)</label
            >
            <input
              v-model="form.last_name"
              id="last_name"
              type="text"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              required
            />
          </div>
          <div>
            <label
              for="sex"
              class="block text-sm font-medium text-gray-700 mb-1"
              >Sex</label
            >
            <select
              v-model="form.sex"
              id="sex"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              required
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div>
            <label
              for="date_of_birth"
              class="block text-sm font-medium text-gray-700 mb-1"
              >Date of Birth</label
            >
            <flat-pickr
              v-model="form.date_of_birth"
              :config="{ dateFormat: 'Y-m-d' }"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              placeholder="YYYY-MM-DD"
              required
            />
          </div>
          <div>
            <label
              for="age"
              class="block text-sm font-medium text-gray-700 mb-1"
              >Age</label
            >
            <input
              v-model="form.age"
              id="age"
              type="number"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              required
            />
          </div>
          <div>
            <label
              for="telegram"
              class="block text-sm font-medium text-gray-700 mb-1"
              >Telegram</label
            >
            <input
              v-model="form.telegram"
              id="telegram"
              type="text"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
            />
          </div>
          <div class="sm:col-span-2">
            <label
              for="current_address"
              class="block text-sm font-medium text-gray-700 mb-1"
              >Current Address</label
            >
            <input
              v-model="form.current_address"
              id="current_address"
              type="text"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              required
            />
          </div>
          <div>
            <label
              for="email"
              class="block text-sm font-medium text-gray-700 mb-1"
              >Email</label
            >
            <input
              v-model="form.email"
              id="email"
              type="email"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              required
              readonly
            />
          </div>
          <div>
            <label
              for="telephone"
              class="block text-sm font-medium text-gray-700 mb-1"
              >Telephone</label
            >
            <input
              v-model="form.telephone"
              id="telephone"
              type="tel"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              required
            />
          </div>
        </div>
      </div>

      <!-- Education Background -->
      <div class="mb-8">
        <h3
          class="text-xl font-semibold text-blue-600 mb-4 border-b-2 border-blue-500 pb-2"
        >
          Education Background
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <label
              for="education_from_year"
              class="block text-sm font-medium text-gray-700 mb-1"
              >From (Year)</label
            >
            <input
              v-model="form.education_from_year"
              id="education_from_year"
              type="number"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              required
            />
          </div>
          <div>
            <label
              for="education_to_year"
              class="block text-sm font-medium text-gray-700 mb-1"
              >To (Year)</label
            >
            <input
              v-model="form.education_to_year"
              id="education_to_year"
              type="number"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              required
            />
          </div>
          <div>
            <label
              for="school_name"
              class="block text-sm font-medium text-gray-700 mb-1"
              >School Name</label
            >
            <input
              v-model="form.school_name"
              id="school_name"
              type="text"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              required
            />
          </div>
          <div>
            <label
              for="major"
              class="block text-sm font-medium text-gray-700 mb-1"
              >Major</label
            >
            <input
              v-model="form.major"
              id="major"
              type="text"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              required
            />
          </div>
          <div>
            <label
              for="degree"
              class="block text-sm font-medium text-gray-700 mb-1"
              >Degree</label
            >
            <input
              v-model="form.degree"
              id="degree"
              type="text"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              required
            />
          </div>
          <div>
            <label
              for="location"
              class="block text-sm font-medium text-gray-700 mb-1"
              >Location</label
            >
            <input
              v-model="form.location"
              id="location"
              type="text"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              required
            />
          </div>
        </div>
      </div>

      <!-- Experience -->
      <div class="mb-8">
        <h3
          class="text-xl font-semibold text-blue-600 mb-4 border-b-2 border-blue-500 pb-2"
        >
          Experience
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <label
              for="start_date"
              class="block text-sm font-medium text-gray-700 mb-1"
              >Start Date</label
            >
            <flat-pickr
              v-model="form.start_date"
              :config="{ dateFormat: 'Y-m-d' }"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              placeholder="YYYY-MM-DD"
              required
            />
          </div>
          <div>
            <label
              for="end_date"
              class="block text-sm font-medium text-gray-700 mb-1"
              >End Date</label
            >
            <flat-pickr
              v-model="form.end_date"
              :config="{ dateFormat: 'Y-m-d' }"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              placeholder="YYYY-MM-DD"
            />
          </div>
          <div>
            <label
              for="position"
              class="block text-sm font-medium text-gray-700 mb-1"
              >Position</label
            >
            <input
              v-model="form.position"
              id="position"
              type="text"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              required
            />
          </div>
          <div>
            <label
              for="company"
              class="block text-sm font-medium text-gray-700 mb-1"
              >Company</label
            >
            <input
              v-model="form.company"
              id="company"
              type="text"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              required
            />
          </div>
        </div>
      </div>

      <!-- Salary -->
      <div class="mb-8">
        <h3
          class="text-xl font-semibold text-blue-600 mb-4 border-b-2 border-blue-500 pb-2"
        >
          Salary
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              for="salary_usd"
              class="block text-sm font-medium text-gray-700 mb-1"
              >Salary (USD)</label
            >
            <input
              v-model="form.salary_usd"
              id="salary_usd"
              type="number"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              required
            />
          </div>
          <div>
            <label
              for="expected_salary"
              class="block text-sm font-medium text-gray-700 mb-1"
              >Expected Salary</label
            >
            <input
              v-model="form.expected_salary"
              id="expected_salary"
              type="number"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              required
            />
          </div>
        </div>
      </div>

      <!-- Additional Questions -->
      <div class="mb-8">
        <h3
          class="text-xl font-semibold text-blue-600 mb-4 border-b-2 border-blue-500 pb-2"
        >
          Additional Information
        </h3>
        <div class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Do you know someone at SunFlex?</label
            >
            <div class="flex space-x-6">
              <label
                class="flex items-center text-sm font-medium text-gray-700"
              >
                <input
                  v-model="form.knows_someone"
                  type="radio"
                  value="Yes"
                  class="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500"
                  required
                />
                Yes
              </label>
              <label
                class="flex items-center text-sm font-medium text-gray-700"
              >
                <input
                  v-model="form.knows_someone"
                  type="radio"
                  value="No"
                  class="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500"
                />
                No
              </label>
            </div>
            <input
              v-if="form.knows_someone === 'Yes'"
              v-model="form.knows_someone_details"
              type="text"
              class="mt-4 block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              placeholder="Full name with position"
            />
          </div>
          <div>
            <label
              for="why_apply"
              class="block text-sm font-medium text-gray-700 mb-1"
              >Why do you want to apply with SunFlex? (optional)</label
            >
            <textarea
              v-model="form.why_apply"
              id="why_apply"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              rows="5"
            ></textarea>
          </div>
        </div>
      </div>

      <!-- File Upload -->
      <div class="mb-8">
        <h3
          class="text-xl font-semibold text-blue-600 mb-4 border-b-2 border-blue-500 pb-2"
        >
          Upload Your CV
        </h3>
        <div class="flex items-center space-x-6">
          <input
            id="cv_file"
            type="file"
            @change="handleFileUpload"
            class="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-6 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition duration-200"
            required
            accept=".pdf,.doc,.docx"
          />
          <button
            @click="submitForm"
            class="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            :disabled="isSubmitting"
          >
            {{ isSubmitting ? 'Submitting...' : 'Submit' }}
          </button>
        </div>
        <p v-if="form.cv_display_name" class="mt-4 text-sm text-gray-600">
          Selected file: {{ form.cv_display_name }}
        </p>
      </div>

      <!-- Success/Error Messages -->
      <div v-if="successMessage" class="mt-4 text-green-600 text-center">
        {{ successMessage }}
      </div>
      <div v-if="errorMessage" class="mt-4 text-red-600 text-center">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
import FlatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import { submitApplicant } from '@/services/jobs';

export default {
  name: 'JobApplicantForm',
  components: {
    FlatPickr
  },
  data() {
    return {
      form: {
        jobId: '',
        apply_position: '',
        requested_location: '',
        first_name: '',
        last_name: '',
        sex: 'Male',
        date_of_birth: '',
        age: '',
        current_address: '',
        email: '',
        telephone: '',
        telegram: '',
        education_from_year: '',
        education_to_year: '',
        school_name: '',
        major: '',
        degree: '',
        location: '',
        start_date: '',
        end_date: '',
        position: '',
        company: '',
        salary_usd: '',
        expected_salary: '',
        knows_someone: 'No',
        knows_someone_details: '',
        why_apply: '',
        cv_display_name: '',
        cv_file: null
      },
      isSubmitting: false,
      successMessage: '',
      errorMessage: ''
    };
  },
  created() {
    this.prefillForm();
  },
  methods: {
    prefillForm() {
      const query = this.$route.query;
      const user = JSON.parse(localStorage.getItem('user')) || {};
      this.form.jobId = query.jobId || '';
      this.form.apply_position = query.apply_position || '';
      this.form.first_name =
        query.first_name || user.first_name || user.username || '';
      this.form.last_name = query.last_name || user.last_name || '';
      this.form.sex = query.sex || user.sex || 'Male';
      this.form.date_of_birth = query.date_of_birth || user.date_of_birth || '';
      this.form.age = query.age || user.age || '';
      this.form.telegram = query.telegram || user.telegram || '';
      this.form.telephone = query.telephone || user.telephone || '';
      this.form.current_address =
        query.current_address || user.current_address || '';
      this.form.email = query.email || user.email || '';
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.form.cv_display_name = file.name;
        this.form.cv_file = file;
      }
    },
    async submitForm() {
      // Basic validation
      if (!this.form.cv_file) {
        this.errorMessage = 'Please upload a CV.';
        return;
      }
      if (!this.form.jobId || !this.form.apply_position || !this.form.email) {
        this.errorMessage = 'Missing required job or user information.';
        return;
      }

      this.isSubmitting = true;
      this.errorMessage = '';
      this.successMessage = '';

      const formData = new FormData();
      Object.keys(this.form).forEach((key) => {
        if (key === 'cv_file' && this.form.cv_file) {
          formData.append('cv', this.form.cv_file, this.form.cv_display_name);
        } else if (this.form[key] !== null && this.form[key] !== '') {
          formData.append(key, this.form[key]);
        }
      });

      try {
        const response = await submitApplicant(formData);
        if (response && response.status === 1) {
          this.successMessage = 'Application submitted successfully!';
          this.resetForm();
          setTimeout(() => {
            this.$router.push('/career');
          }, 2000); // Redirect to /career after 2 seconds
        } else {
          this.errorMessage =
            response.message ||
            'Failed to submit application. Please try again.';
        }
      } catch (error) {
        console.error('Error submitting application:', error);
        this.errorMessage =
          'An error occurred while submitting your application.';
      } finally {
        this.isSubmitting = false;
      }
    },
    resetForm() {
      this.form = {
        jobId: '',
        apply_position: '',
        requested_location: '',
        first_name: '',
        last_name: '',
        sex: 'Male',
        date_of_birth: '',
        age: '',
        current_address: '',
        email: '',
        telephone: '',
        telegram: '',
        education_from_year: '',
        education_to_year: '',
        school_name: '',
        major: '',
        degree: '',
        location: '',
        start_date: '',
        end_date: '',
        position: '',
        company: '',
        salary_usd: '',
        expected_salary: '',
        knows_someone: 'No',
        knows_someone_details: '',
        why_apply: '',
        cv_display_name: '',
        cv_file: null
      };
      document.getElementById('cv_file').value = '';
    }
  }
};
</script>

<style scoped>
@media (max-width: 640px) {
  .grid-cols-2 {
    grid-template-columns: 1fr;
  }
  .grid-cols-3 {
    grid-template-columns: 1fr;
  }
  .grid-cols-4 {
    grid-template-columns: 1fr;
  }
}
</style>
