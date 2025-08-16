<template>
  <div class="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 flex justify-center">
    <div class="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6">
      <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">Job Application Form</h2>

      <!-- Job Information -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-blue-600 mb-4 border-b-2 border-blue-500 pb-2">Job Information</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label for="apply_position" class="block text-sm font-medium text-gray-700 mb-1">Apply Position</label>
            <input
              v-model="form.apply_position"
              id="apply_position"
              type="text"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              placeholder="Field Investigator and Field Collector"
              required
            />
          </div>
          <div>
            <label for="requested_location" class="block text-sm font-medium text-gray-700 mb-1">Requested Location</label>
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
        <h3 class="text-xl font-semibold text-blue-600 mb-4 border-b-2 border-blue-500 pb-2">Personal Information</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label for="khmer_name" class="block text-sm font-medium text-gray-700 mb-1">Khmer Name</label>
            <input
              v-model="form.khmer_name"
              id="khmer_name"
              type="text"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              required
            />
          </div>
          <div>
            <label for="latin_name" class="block text-sm font-medium text-gray-700 mb-1">Latin Name</label>
            <input
              v-model="form.latin_name"
              id="latin_name"
              type="text"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              required
            />
          </div>
          <div>
            <label for="sex" class="block text-sm font-medium text-gray-700 mb-1">Sex</label>
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
            <label for="date_of_birth" class="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
            <flat-pickr
              v-model="form.date_of_birth"
              :config="{ dateFormat: 'Y-m-d' }"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              placeholder="YYYY-MM-DD"
              required
            />
          </div>
          <div>
            <label for="age" class="block text-sm font-medium text-gray-700 mb-1">Age</label>
            <input
              v-model="form.age"
              id="age"
              type="number"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              required
            />
          </div>
          <div>
            <label for="telegram" class="block text-sm font-medium text-gray-700 mb-1">Telegram</label>
            <input
              v-model="form.telegram"
              id="telegram"
              type="text"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
            />
          </div>
          <div class="sm:col-span-2">
            <label for="current_address" class="block text-sm font-medium text-gray-700 mb-1">Current Address</label>
            <input
              v-model="form.current_address"
              id="current_address"
              type="text"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              required
            />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              v-model="form.email"
              id="email"
              type="email"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              required
            />
          </div>
          <div>
            <label for="telephone" class="block text-sm font-medium text-gray-700 mb-1">Telephone</label>
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
        <h3 class="text-xl font-semibold text-blue-600 mb-4 border-b-2 border-blue-500 pb-2">Education Background</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <label for="education_from_year" class="block text-sm font-medium text-gray-700 mb-1">From (Year)</label>
            <input
              v-model="form.education_from_year"
              id="education_from_year"
              type="number"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              required
            />
          </div>
          <div>
            <label for="education_to_year" class="block text-sm font-medium text-gray-700 mb-1">To (Year)</label>
            <input
              v-model="form.education_to_year"
              id="education_to_year"
              type="number"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              required
            />
          </div>
          <div>
            <label for="school_name" class="block text-sm font-medium text-gray-700 mb-1">School Name</label>
            <input
              v-model="form.school_name"
              id="school_name"
              type="text"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              required
            />
          </div>
          <div>
            <label for="major" class="block text-sm font-medium text-gray-700 mb-1">Major</label>
            <input
              v-model="form.major"
              id="major"
              type="text"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              required
            />
          </div>
          <div>
            <label for="degree" class="block text-sm font-medium text-gray-700 mb-1">Degree</label>
            <input
              v-model="form.degree"
              id="degree"
              type="text"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              required
            />
          </div>
          <div>
            <label for="location" class="block text-sm font-medium text-gray-700 mb-1">Location</label>
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
        <h3 class="text-xl font-semibold text-blue-600 mb-4 border-b-2 border-blue-500 pb-2">Experience</h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <label for="start_date" class="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
            <flat-pickr
              v-model="form.start_date"
              :config="{ dateFormat: 'Y-m-d' }"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              placeholder="YYYY-MM-DD"
              required
            />
          </div>
          <div>
            <label for="end_date" class="block text-sm font-medium text-gray-700 mb-1">End Date</label>
            <flat-pickr
              v-model="form.end_date"
              :config="{ dateFormat: 'Y-m-d' }"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              placeholder="YYYY-MM-DD"
            />
          </div>
          <div>
            <label for="position" class="block text-sm font-medium text-gray-700 mb-1">Position</label>
            <input
              v-model="form.position"
              id="position"
              type="text"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              required
            />
          </div>
          <div>
            <label for="company" class="block text-sm font-medium text-gray-700 mb-1">Company</label>
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
        <h3 class="text-xl font-semibold text-blue-600 mb-4 border-b-2 border-blue-500 pb-2">Salary</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label for="salary_usd" class="block text-sm font-medium text-gray-700 mb-1">Salary (USD)</label>
            <input
              v-model="form.salary_usd"
              id="salary_usd"
              type="number"
              class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              required
            />
          </div>
          <div>
            <label for="expected_salary" class="block text-sm font-medium text-gray-700 mb-1">Expected Salary</label>
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
        <h3 class="text-xl font-semibold text-blue-600 mb-4 border-b-2 border-blue-500 pb-2">Additional Information</h3>
        <div class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Do you know someone at SunFlex?</label>
            <div class="flex space-x-6">
              <label class="flex items-center text-sm font-medium text-gray-700">
                <input v-model="form.knows_someone" type="radio" value="Yes" class="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500" required>
                Yes
              </label>
              <label class="flex items-center text-sm font-medium text-gray-700">
                <input v-model="form.knows_someone" type="radio" value="No" class="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500">
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
            <label for="why_apply" class="block text-sm font-medium text-gray-700 mb-1">Why do you want to apply with SunFlex? (optional)</label>
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
        <h3 class="text-xl font-semibold text-blue-600 mb-4 border-b-2 border-blue-500 pb-2">Upload Your CV</h3>
        <div class="flex items-center space-x-6">
          <input
            id="cv_file"
            type="file"
            @change="handleFileUpload"
            class="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-6 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition duration-200"
            required
          />
          <button
            @click="submitForm"
            class="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          >
            Submit
          </button>
        </div>
        <p v-if="form.cv_display_name" class="mt-4 text-sm text-gray-600">Selected file: {{ form.cv_display_name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import FlatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
  components: {
    FlatPickr
  },
  data() {
    return {
      form: {
        apply_position: '',
        requested_location: '',
        khmer_name: '',
        latin_name: '',
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
        knows_someone: '',
        knows_someone_details: '',
        why_apply: '',
        cv_display_name: '',
        cv_file_name: ''
      }
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.form.cv_display_name = file.name;
        this.form.cv_file_name = `${file.name}_${Date.now()}.${file.name.split('.').pop()}`;
      }
    },
    submitForm() {
      const payload = {
        apply_position: this.form.apply_position,
        requested_location: this.form.requested_location,
        khmer_name: this.form.khmer_name,
        latin_name: this.form.latin_name,
        sex: this.form.sex,
        date_of_birth: this.form.date_of_birth,
        age: this.form.age,
        current_address: this.form.current_address,
        email: this.form.email,
        telephone: this.form.telephone,
        telegram: this.form.telegram,
        education_from_year: this.form.education_from_year,
        education_to_year: this.form.education_to_year,
        school_name: this.form.school_name,
        major: this.form.major,
        degree: this.form.degree,
        location: this.form.location,
        start_date: this.form.start_date,
        end_date: this.form.end_date,
        position: this.form.position,
        company: this.form.company,
        salary_usd: this.form.salary_usd,
        expected_salary: this.form.expected_salary,
        knows_someone: this.form.knows_someone,
        knows_someone_details: this.form.knows_someone_details,
        why_apply: this.form.why_apply,
        cv_display_name: this.form.cv_display_name,
        cv_file_name: this.form.cv_file_name
      };
      console.log('Form submitted:', payload);
      // Add your API call here, e.g., this.$http.post('/api/applications', payload, { headers: { 'Content-Type': 'multipart/form-data' } })
      this.form = {
        apply_position: '',
        requested_location: '',
        khmer_name: '',
        latin_name: '',
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
        knows_someone: '',
        knows_someone_details: '',
        why_apply: '',
        cv_display_name: '',
        cv_file_name: ''
      };
      document.getElementById('cv_file').value = '';
    }
  }
};
</script>

<style scoped>
/* Responsive adjustments */
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