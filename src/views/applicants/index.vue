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
            >
              Apply Position
            </label>
            <input
              v-model="form.apply_position"
              id="apply_position"
              type="text"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              placeholder="Enter job title"
              required
              readonly
            />
          </div>
          <div>
            <label
              for="requested_location"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              Requested Location
            </label>
            <input
              v-model="form.requested_location"
              id="requested_location"
              type="text"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              placeholder="Enter branch location"
              required
              readonly
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
            >
              From (Year)
            </label>
            <input
              v-model="form.education_from_year"
              id="education_from_year"
              type="text"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              placeholder="e.g., 12-10-2022"
              required
            />
          </div>
          <div>
            <label
              for="education_to_year"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              To (Year)
            </label>
            <input
              v-model="form.education_to_year"
              id="education_to_year"
              type="text"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              placeholder="e.g., 12-10-2026"
              required
            />
          </div>
          <div>
            <label
              for="school_name"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              School Name
            </label>
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
            >
              Major
            </label>
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
            >
              Degree
            </label>
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
            >
              Location
            </label>
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
            >
              Start Date
            </label>
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
            >
              End Date
            </label>
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
            >
              Position
            </label>
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
            >
              Company
            </label>
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
            >
              Current Salary (USD)
            </label>
            <input
              v-model="form.salary_usd"
              id="salary_usd"
              type="text"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              placeholder="e.g., 600"
              required
            />
          </div>
          <div>
            <label
              for="expected_salary"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              Expected Salary (USD)
            </label>
            <input
              v-model="form.expected_salary"
              id="expected_salary"
              type="text"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              placeholder="e.g., 1000"
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
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Do you know someone at SunFlex?
            </label>
            <div class="flex space-x-6">
              <label
                class="flex items-center text-sm font-medium text-gray-700"
              >
                <input
                  v-model="form.knows_someone"
                  type="radio"
                  :value="true"
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
                  :value="false"
                  class="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500"
                  required
                />
                No
              </label>
            </div>
            <input
              v-if="form.knows_someone"
              v-model="form.knows_someone_details"
              type="text"
              class="mt-4 block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              placeholder="Full name with position"
              required
            />
          </div>
          <div>
            <label
              for="why_apply"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              Why do you want to apply with SunFlex? (optional)
            </label>
            <textarea
              v-model="form.why_apply"
              id="why_apply"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              rows="5"
              placeholder="e.g., Because I want job"
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
        <p v-if="form.resume" class="mt-4 text-sm text-gray-600">
          Selected file: {{ form.resume.name }}
        </p>
        <p v-else class="mt-4 text-sm text-gray-600">No file selected</p>
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
        applicant: '',
        jobId: '',
        apply_position: '',
        requested_location: '',
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
        knows_someone: false,
        knows_someone_details: '',
        why_apply: '',
        resume: null
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
      this.form.jobId = query.jobId || ''; // Ensure jobId comes from query params
      this.form.apply_position = query.apply_position || 'N/A';
      this.form.requested_location = query.branch || 'N/A';
      // Prefill user-related fields from localStorage
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      this.form.applicant = user.data.userId || ''; // Assuming user object has _id
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      this.form.resume = file || null; // Set resume to the file or null if no file
    },
    async submitForm() {
      // Validation
      if (!this.form.resume) {
        this.errorMessage = 'Please upload a CV.';
        return;
      }
      if (
        !this.form.jobId ||
        !this.form.apply_position ||
        !this.form.applicant
      ) {
        this.errorMessage = 'Missing required job or user information.';
        return;
      }
      if (
        !this.form.education_from_year ||
        !this.form.education_to_year ||
        !this.form.school_name ||
        !this.form.major ||
        !this.form.degree ||
        !this.form.location ||
        !this.form.start_date ||
        !this.form.position ||
        !this.form.company ||
        !this.form.salary_usd ||
        !this.form.expected_salary
      ) {
        this.errorMessage = 'Please fill out all required fields.';
        return;
      }
      if (this.form.knows_someone && !this.form.knows_someone_details) {
        this.errorMessage =
          'Please provide details if you know someone at SunFlex.';
        return;
      }

      this.isSubmitting = true;
      this.errorMessage = '';
      this.successMessage = '';

      const formData = new FormData();
      // Map form fields to database schema
      formData.append('applicant', this.form.applicant);
      formData.append('jobId', this.form.jobId);
      formData.append('apply_position', this.form.apply_position);
      formData.append('requested_location', this.form.requested_location);
      formData.append('education_from_year', this.form.education_from_year);
      formData.append('education_to_year', this.form.education_to_year);
      formData.append('school_name', this.form.school_name);
      formData.append('major', this.form.major);
      formData.append('degree', this.form.degree);
      formData.append('location', this.form.location);
      formData.append('start_date', this.form.start_date);
      formData.append('end_date', this.form.end_date || '');
      formData.append('position', this.form.position);
      formData.append('company', this.form.company);
      formData.append('salary_usd', this.form.salary_usd);
      formData.append('expected_salary', this.form.expected_salary);
      formData.append('knows_someone', this.form.knows_someone.toString());
      formData.append(
        'knows_someone_details',
        this.form.knows_someone ? this.form.knows_someone_details : 'none'
      );
      formData.append('why_apply', this.form.why_apply || '');
      if (this.form.resume) {
        formData.append('resume', this.form.resume, this.form.resume.name); // Append the file with its name
      }

      // Debug log to verify FormData
      for (const [key, value] of formData.entries()) {
        console.log(
          `FormData: ${key} = ${value instanceof File ? value.name : value}`
        );
      }

      try {
        const response = await submitApplicant(formData);
        if (response && response.status === 1) {
          this.successMessage =
            response.message || 'Application submitted successfully!';
          this.resetForm();
          setTimeout(() => {
            this.$router.push('/career');
          }, 2000);
        } else {
          this.errorMessage =
            response.message ||
            'Failed to submit application. Please try again.';
        }
      } catch (error) {
        console.error('Error submitting application:', error);
        this.errorMessage =
          'An error occurred while submitting your application. Check console for details.';
      } finally {
        this.isSubmitting = false;
      }
    },
    resetForm() {
      this.form = {
        applicant: '',
        jobId: '',
        apply_position: '',
        requested_location: '',
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
        knows_someone: false,
        knows_someone_details: '',
        why_apply: '',
        resume: null
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
