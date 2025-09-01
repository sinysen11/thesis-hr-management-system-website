<template>
  <div class="container mx-auto p-6">
    <!-- Filter Section -->
    <div class="bg-blue-100 p-4 rounded-lg mb-6 shadow-md">
      <div
        class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4"
      >
        <div class="flex-1 w-full md:w-auto">
          <input
            v-model="searchQuery"
            class="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search by job title or keyword..."
          />
        </div>
        <button
          @click="filterJobs"
          class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200 w-full md:w-auto"
        >
          Search
        </button>
      </div>
    </div>

    <!-- Loading and Error States -->
    <div v-if="isLoading" class="text-center text-gray-500 py-10">
      <p>Loading jobs...</p>
    </div>
    <div
      v-else-if="filteredJobs.length === 0"
      class="text-center text-gray-500 py-10"
    >
      <p>No jobs found matching your search.</p>
    </div>

    <!-- Job Listings -->
    <div v-else class="grid gap-6">
      <div
        v-for="job in filteredJobs"
        :key="job.id"
        class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer"
        @click="goToJobDetail(job.id)"
      >
        <div class="flex items-start space-x-4">
          <div
            class="w-12 h-12 rounded-md bg-gray-200 flex items-center justify-center overflow-hidden"
          >
            <span class="text-gray-500 text-lg">🏢</span>
          </div>
          <div class="flex-1">
            <h3 class="text-lg font-semibold text-gray-800">{{ job.title.des_en }}</h3>
            <div class="flex items-center text-gray-600 text-sm space-x-2 mb-1">
              <span>{{ timeAgo(job.postedDate) }}</span>
              <span>•</span>
              <span class="text-gray-700 font-medium">{{ job.salary }}</span>
              <span>•</span>
              <span>{{ job.branch }}</span>
            </div>
            <p class="text-blue-500 font-medium text-sm mt-2">{{ job.type }}</p>
            <p class="text-gray-500 text-sm mt-1">
              <span class="font-semibold">Department:</span>
              {{ job.department.name_en }}
            </p>
            <p class="text-gray-500 text-sm mt-1">
              <span class="font-semibold">Description:</span>
              {{ job.description }}
            </p>
            <p class="text-gray-500 text-sm mt-1">
              <span class="font-semibold">Responsibilities:</span>
              {{ job.responsible }}
            </p>
            <p class="text-gray-500 text-sm mt-1">
              <span class="font-semibold">Requirements:</span>
              {{ job.requirement }}
            </p>
            <p class="text-gray-500 text-sm mt-1">
              <span class="font-semibold">Number of Staff:</span>
              {{ job.number_staff }}
            </p>
            <p class="text-gray-500 text-sm mt-1">
              <span class="font-semibold">Publish Date:</span>
              {{ formatDate(job.publish_date) }}
            </p>
            <p class="text-gray-500 text-sm mt-1">
              <span class="font-semibold">Close Date:</span>
              {{ formatDate(job.close_date) }}
            </p>
            <p class="text-gray-500 text-sm mt-1">
              <span class="font-semibold">Benefits:</span> {{ job.benefits }}
            </p>
          </div>
          <div class="text-gray-400 hover:text-gray-600 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDistanceToNow, format } from 'date-fns';
import { getAllJobs } from '@/services/jobs';

export default {
  data() {
    return {
      jobs: [],
      searchQuery: '',
      isLoading: true
    };
  },
  async mounted() {
    try {
      const result = await getAllJobs();
      if (result && result.status === 1 && Array.isArray(result.data)) {
        this.jobs = this.mapJobs(result.data);
      } else {
        console.error('API result is not in the expected format:', result);
        this.jobs = [];
      }
    } catch (error) {
      console.error('Failed to fetch jobs:', error);
      this.jobs = [];
    } finally {
      this.isLoading = false;
    }
  },
  computed: {
    filteredJobs() {
      const query = this.searchQuery.toLowerCase().trim();
      if (!query) {
        return this.jobs;
      }
      return this.jobs.filter(
        (job) =>
          job.title.toLowerCase().includes(query) ||
          job.description.toLowerCase().includes(query) ||
          job.department.toLowerCase().includes(query) ||
          job.branch.toLowerCase().includes(query)
      );
    }
  },
  methods: {
    mapJobs(apiJobs) {
      return apiJobs.map((apiJob) => {
        const postedDate = apiJob.createdAt
          ? new Date(apiJob.createdAt)
          : apiJob.updatedAt
          ? new Date(apiJob.updatedAt)
          : new Date();
        return {
          id: apiJob._id,
          title: apiJob.title || apiJob.type, // Use title if available, fallback to type
          type: apiJob.type || 'N/A',
          salary: apiJob.salary || 'N/A',
          description: apiJob.description || 'N/A',
          responsible: apiJob.responsible || 'N/A',
          requirement: apiJob.requirement || 'N/A',
          postedDate: postedDate,
          location: apiJob.branch || 'N/A', // Map branch to location
          department: apiJob.department || 'N/A',
          number_staff: apiJob.number_staff || 'N/A',
          publish_date: apiJob.publish_date
            ? new Date(apiJob.publish_date)
            : null,
          close_date: apiJob.close_date ? new Date(apiJob.close_date) : null,
          branch: apiJob.branch || 'N/A',
          benefits: apiJob.benefits || 'N/A',
          experience: 'N/A',
          logo: null
        };
      });
    },
    filterJobs() {
      console.log('Filtering with query:', this.searchQuery);
    },
    goToJobDetail(jobId) {
      this.$router.push({ path: '/career/job-detail', query: { id: jobId }});
    },
    timeAgo(date) {
      return formatDistanceToNow(date, { addSuffix: true });
    },
    formatDate(date) {
      return date ? format(new Date(date), 'MMM dd, yyyy') : 'N/A';
    }
  }
};
</script>

<style scoped>
.hover:shadow-lg:hover {
  transform: translateY(-2px);
  transition: transform 0.2s;
}
</style>
