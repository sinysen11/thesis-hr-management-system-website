<template>
  <div class="container mx-auto p-6">
    <div v-if="isLoading" class="text-center text-gray-500">
      Loading job details...
    </div>
    <div v-else-if="job" class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-green-600 mb-4">{{ job.title }}</h2>
      <div class="flex items-center text-sm text-gray-600 mb-4">
        <span>{{ job.type }}</span>
        <span class="mx-2">•</span>
        <span>{{ job.location }}</span>
        <span class="mx-2">•</span>
        <span>Posted {{ timeAgo(job.postedDate) }}</span>
        <span v-if="job.department" class="mx-2">•</span>
        <span v-if="job.department" class="text-blue-500">{{
          job.department
        }}</span>
      </div>
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-2">Job Summary:</h3>
        <p class="text-gray-700">{{ job.description }}</p>
      </div>
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-2">Job Responsibilities</h3>
        <ul class="list-disc pl-5 text-gray-700">
          <li v-for="(resp, index) in job.responsible.split('\n')" :key="index">
            {{ resp.trim() }}
          </li>
        </ul>
      </div>
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-2">Job Requirements</h3>
        <ul class="list-disc pl-5 text-gray-700">
          <li v-for="(req, index) in job.requirement.split('\n')" :key="index">
            {{ req.trim() }}
          </li>
        </ul>
      </div>
      <router-link
        to="/career"
        class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
      >
        Back
      </router-link>
      <button
        class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 ml-4"
        @click="applyJob"
      >
        Apply
      </button>
    </div>
    <div v-else class="text-center text-gray-500">Job not found.</div>
  </div>
</template>

<script>
import { formatDistanceToNow } from 'date-fns';
import { getJobById } from '@/services/jobs';

export default {
  name: 'JobDetailComponent',
  data() {
    return {
      job: null,
      isLoading: true
    };
  },
  created() {
    this.loadJob();
  },
  methods: {
    async loadJob() {
      const id = this.$route.query.id;
      if (!id) {
        this.job = null;
        this.isLoading = false;
        return;
      }
      try {
        this.isLoading = true;
        const result = await getJobById(id);
        if (result && result.status === 1 && result.data) {
          this.job = this.mapJob(result.data);
        } else {
          console.error('API result is not in the expected format:', result);
          this.job = null;
        }
      } catch (error) {
        console.error('Failed to fetch job details:', error);
        this.job = null;
      } finally {
        this.isLoading = false;
      }
    },
    mapJob(apiJob) {
      const postedDate = apiJob.createdAt
        ? new Date(apiJob.createdAt)
        : apiJob.updatedAt
        ? new Date(apiJob.updatedAt)
        : new Date();
      return {
        id: apiJob._id,
        title: apiJob.type,
        type: apiJob.type,
        salary: apiJob.salary,
        description: apiJob.description,
        responsible: apiJob.responsible,
        requirement: apiJob.requirement,
        postedDate: postedDate,
        location: 'N/A',
        department: 'N/A'
      };
    },
    timeAgo(date) {
      return formatDistanceToNow(date, { addSuffix: true });
    },
    applyJob() {
      const isLoggedIn = !!localStorage.getItem('userToken');
      if (!isLoggedIn) {
        this.$router.push('/signup');
      } else {
        const user = JSON.parse(localStorage.getItem('user'));
        this.$router.push({
          path: '/career/applicant',
          query: {
            jobId: this.job.id,
            apply_position: this.job.title, // Pass job title as apply_position
            first_name: user.first_name || user.username || '', // Use username as fallback
            last_name: user.last_name || '',
            sex: user.sex || 'Male',
            date_of_birth: user.date_of_birth || '',
            age: user.age || '',
            telegram: user.telegram || '',
            telephone: user.telephone || '',
            current_address: user.current_address || '',
            email: user.email || ''
          }
        });
      }
    }
  },
  watch: {
    '$route.query.id': 'loadJob'
  }
};
</script>

<style scoped>
/* Custom styles */
</style>
