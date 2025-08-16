<template>
  <div class="container mx-auto p-6">
    <!-- Filter Section -->
    <div class="bg-blue-100 p-4 rounded-lg mb-6 shadow-md">
      <div
        class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4"
      >
        <div
          class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto"
        >
          <select
            v-model="filterBy"
            class="border rounded-lg p-2 w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Departments</option>
            <option value="department">Department</option>
            <option value="location">Location</option>
          </select>
          <input
            v-model="searchQuery"
            class="border rounded-lg p-2 w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search by title or keyword..."
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

    <!-- Job Listings -->
    <div class="grid gap-6">
      <div
        v-for="job in filteredJobs"
        :key="job.id"
        class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer"
        @click="goToJobDetail(job.id)"
      >
        <div class="flex items-start space-x-4">
          <div
            class="w-12 h-12 rounded-md bg-gray-200 flex items-center justify-center overflow-hidden"
          >
            <img
              v-if="job.logo"
              :src="job.logo"
              alt="Company Logo"
              class="w-full h-full object-cover"
            />
            <span v-else class="text-gray-500 text-lg">🏢</span>
          </div>
          <div class="flex-1">
            <h3 class="text-lg font-semibold text-gray-800">{{ job.title }}</h3>
            <div class="flex items-center text-gray-600 text-sm space-x-2 mb-1">
              <span>{{ timeAgo(job.postedDate) }}</span>
              <span>•</span>
              <span>{{ job.location }}</span>
            </div>
            <p class="text-blue-500 font-medium text-sm">
              {{ job.type }} • {{ job.experience }}
            </p>
            <p class="text-gray-500 text-sm mt-1">{{ job.department }}</p>
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
import { useRouter } from 'vue-router';
import { formatDistanceToNow } from 'date-fns';

export default {
  setup() {
    const router = useRouter();
    return { router, formatDistanceToNow };
  },
  data() {
    return {
      filterBy: 'all',
      searchQuery: '',
      jobs: [
        {
          id: 1,
          title: 'Growth Manager',
          department: 'Digital',
          location: 'Boeung Keng Kang, Phnom Penh',
          type: 'Full Time',
          postedDate: new Date(new Date().setDate(new Date().getDate() - 2)), // Example: Posted 2 days ago
          experience: '5+ Year Experience',
          overview: '...',
          description: '...',
          requirements: '...',
          logo: 'https://via.placeholder.com/40/abcdef/ffffff?Text=GM', // Example logo URL
          salary: '$1,500+'
        },
        {
          id: 2,
          title: 'Pre-Sales Engineer',
          department: 'Technical',
          location: 'Chamkar Mon, Phnom Penh',
          type: 'Full Time',
          postedDate: new Date(new Date().setDate(new Date().getDate() - 1)), // Example: Posted 1 day ago
          experience: '3+ Year Experience',
          overview: '...',
          description: '...',
          requirements: '...',
          logo: 'https://via.placeholder.com/40/fedcba/ffffff?Text=PSE', // Example logo URL
          salary: '$1,200+'
        },
        {
          id: 3,
          title: 'Website Product Listing Specialist',
          department: 'Marketing',
          location: 'Boeung Keng Kang, Phnom Penh',
          type: 'Full Time',
          postedDate: new Date(new Date().setDate(new Date().getDate() - 7)), // Example: Posted 7 days ago
          experience: '1+ Year Experience',
          overview: '...',
          description: '...',
          requirements: '...',
          logo: 'https://via.placeholder.com/40/aabbcc/ffffff?Text=WPLS', // Example logo URL
          salary: '$800+'
        },
        {
          id: 4,
          title: 'IT admin/Process Analyst',
          department: 'IT',
          location: 'Saensokh, Phnom Penh',
          type: 'Full Time',
          postedDate: new Date(new Date().setDate(new Date().getDate() - 3)), // Example: Posted 3 days ago
          experience: '2+ Year Experience',
          overview: '...',
          description: '...',
          requirements: '...',
          logo: null, // No logo for this job
          salary: '$900+'
        }
        // ... rest of your job data with postedDate, experience, and optional logo
      ]
    };
  },
  computed: {
    filteredJobs() {
      return this.jobs.filter((job) => {
        const matchesFilter =
          this.filterBy === 'all' ||
          (this.filterBy === 'department' &&
            job.title.toLowerCase().includes(this.searchQuery.toLowerCase())) ||
          (this.filterBy === 'location' &&
            job.location
              .toLowerCase()
              .includes(this.searchQuery.toLowerCase()));
        return matchesFilter;
      });
    }
  },
  methods: {
    filterJobs() {
      console.log(
        'Filtering by:',
        this.filterBy,
        'with query:',
        this.searchQuery
      );
    },
    goToJobDetail(jobId) {
      this.router.push({ path: '/career/job-detail', query: { id: jobId }});
    },
    timeAgo(date) {
      return this.formatDistanceToNow(date, { addSuffix: true });
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
