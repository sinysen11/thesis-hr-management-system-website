<template>
  <div class="careers bg-gray-50 font-sans min-h-screen">
    <!-- Hero Image -->
    <div class="relative">
      <img
        src="@/assets/images/4_files/our_career.webp"
        alt="Careers Banner"
        class="w-full h-[400px] object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent flex items-center justify-center">
        <h1 class="text-4xl md:text-5xl font-bold text-white tracking-tight animate-fade-in">
          Join Our Team
        </h1>
      </div>
    </div>

    <!-- Google Tag Manager (noscript) -->
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-P2GWKJ7"
        height="0"
        width="0"
        style="display: none; visibility: hidden"
      ></iframe>
    </noscript>

    <!-- Browser Compatibility Warning -->
    <!--[if lt IE 8]>
      <p class="ancient-browser-alert text-center p-4 bg-red-100 text-red-700">
        You are using an <strong>outdated</strong> browser. Please <a
        href="http://browsehappy.com/" target="_blank" class="underline">upgrade your
        browser</a>.
      </p>
    <![endif]-->

    <!-- Main Content -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Loading Modal -->
      <div
        v-if="isLoading"
        class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        role="dialog"
        aria-modal="true"
        aria-label="Loading"
      >
        <div
          class="bg-white rounded-xl p-8 flex flex-col items-center space-y-6 shadow-2xl animate-pulse"
        >
          <div
            class="w-16 h-16 border-4 border-t-emerald-600 border-gray-300 rounded-full animate-spin"
          ></div>
          <p class="text-emerald-600 font-semibold text-lg">Loading opportunities...</p>
        </div>
      </div>

      <!-- Error Alert -->
      <div
        v-if="errorMessage"
        class="fixed top-6 right-6 max-w-md w-full bg-red-100 border-l-4 border-red-600 text-red-800 p-4 rounded-lg shadow-lg animate-slide-in"
        role="alert"
      >
        <div class="flex justify-between items-center">
          <p class="text-sm font-medium">{{ errorMessage }}</p>
          <button
            @click="errorMessage = ''"
            class="text-red-800 hover:text-red-900 focus:outline-none"
            aria-label="Close alert"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Filter Section -->
      <div class="mb-12 bg-white p-6 rounded-xl shadow-md">
        <div class="flex flex-col md:flex-row items-center gap-4 max-w-3xl mx-auto">
          <input
            v-model="searchQuery"
            class="flex-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent placeholder-gray-400 transition duration-200"
            placeholder="Search by job title, keyword, or department..."
          />
          <button
            @click="filterJobs"
            class="w-full md:w-auto bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition duration-300 font-semibold"
          >
            Find Jobs
          </button>
        </div>
      </div>

      <!-- Empty State -->
      <div
        v-if="!isLoading && filteredJobs.length === 0"
        class="text-center py-16 bg-white rounded-xl shadow-md"
      >
        <p class="text-gray-600 text-lg font-medium">No opportunities found. Try adjusting your search.</p>
        <button
          @click="searchQuery = ''"
          class="mt-4 text-emerald-600 hover:text-emerald-700 font-semibold"
        >
          Clear Search
        </button>
      </div>

      <!-- Job Listings -->
      <div v-else-if="!isLoading" class="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        <div
          v-for="job in filteredJobs"
          :key="job.id"
          class="relative bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl cursor-pointer transform hover:-translate-y-1"
          @click="goToJobDetail(job.id)"
        >
          <div class="flex items-start gap-4">
            <div
              class="w-14 h-14 rounded-lg bg-emerald-100 flex items-center justify-center"
            >
              <span class="text-emerald-600 text-xl">🏢</span>
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-bold text-emerald-700">{{ job.title.des_en }}</h3>
              <div class="flex items-center gap-3 text-gray-600 text-sm mt-1">
                <span>{{ job.branch }}</span>
                <span>•</span>
                <span>{{ timeAgo(job.postedDate) }}</span>
              </div>
              <p class="text-gray-600 text-sm mt-2">
                <span class="font-semibold">Publish Date:</span>
                {{ formatDate(job.publish_date) }}
              </p>
              <p class="text-green-500 text-sm mt-1">
                <span class="font-semibold">Close Date:</span>
                {{ formatDate(job.close_date) }}
              </p>
            </div>
          </div>
          <div class="mt-4">
            <span class="inline-block bg-emerald-50 text-emerald-600 text-xs font-semibold px-3 py-1 rounded-full">
              {{ job.department.name_en || 'N/A' }}
            </span>
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
  name: 'Careers',
  data() {
    return {
      jobs: [],
      searchQuery: '',
      isLoading: true,
      errorMessage: '',
      isMobileMenuOpen: false,
      isProductsMenuOpen: false
    };
  },
  async mounted() {
    try {
      const result = await getAllJobs();
      if (result && result.status === 1 && Array.isArray(result.data)) {
        this.jobs = this.mapJobs(result.data);
      } else {
        this.errorMessage = 'Failed to load jobs: Invalid response format';
      }
    } catch (error) {
      this.errorMessage = error.message || 'An error occurred while fetching jobs';
    } finally {
      this.isLoading = false;
    }
  },
  computed: {
    filteredJobs() {
      const query = this.searchQuery.toLowerCase().trim();
      const jobs = this.jobs.filter(job => !this.isJobExpired(job.close_date));
      if (!query) {
        return jobs;
      }
      return jobs.filter(
        (job) =>
          job.title?.des_en?.toLowerCase()?.includes(query) ||
          job.description?.toLowerCase()?.includes(query) ||
          job.department?.des_en?.toLowerCase()?.includes(query) ||
          job.branch?.toLowerCase()?.includes(query)
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
          title: apiJob.title || { des_en: apiJob.type || 'N/A' },
          type: apiJob.type || 'N/A',
          salary: apiJob.salary || 'N/A',
          description: apiJob.description || 'N/A',
          responsible: apiJob.responsible || 'N/A',
          requirement: apiJob.requirement || 'N/A',
          postedDate: postedDate,
          location: apiJob.branch || 'N/A',
          department: apiJob.department || { des_en: 'N/A' },
          number_staff: apiJob.number_staff || 'N/A',
          publish_date: apiJob.publish_date ? new Date(apiJob.publish_date) : null,
          close_date: apiJob.close_date ? new Date(apiJob.close_date) : null,
          branch: apiJob.branch || 'N/A',
          benefits: apiJob.benefits || 'N/A',
          experience: 'N/A',
          logo: null
        };
      });
    },
    isJobExpired(closeDate) {
      if (!closeDate) return false;
      const today = new Date();
      const previousDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1, 23, 59, 59, 999);
      return new Date(closeDate) <= previousDay;
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
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    toggleProductsMenu() {
      this.isProductsMenuOpen = !this.isProductsMenuOpen;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
};
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom animations */
.animate-fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

.animate-slide-in {
  animation: slideIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>