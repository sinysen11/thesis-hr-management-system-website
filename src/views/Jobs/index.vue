```vue
<template>
  <div class="careers bg-white font-roboto">
    <!-- Google Tag Manager (noscript) -->
    <noscript>
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P2GWKJ7" height="0" width="0" style="display:none;visibility:hidden"></iframe>
    </noscript>
    <!-- End Google Tag Manager (noscript) -->

    <!-- Browser Compatibility Warning -->
    <!--[if lt IE 8]>
      <p class="ancient-browser-alert text-center p-4 bg-red-100 text-red-700">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/" target="_blank" class="underline">upgrade your browser</a>.</p>
    <![endif]-->

    <!-- Mobile Header -->
    <div class="mobheader md:hidden bg-white shadow-sm py-4">
      <div class="container mx-auto flex items-center justify-between px-4">
        <div class="w-1/6">
          <button class="mnav" @click="toggleMobileMenu">
            <img src="@/assets/images/4_files/menu.svg" alt="menu" title="menu" class="w-8">
          </button>
        </div>
        <div class="w-4/6 text-center">
          <router-link to="/">
            <img src="@/assets/images/4_files/logo.png" alt="SunFlex (Cambodia) Co.,Ltd" title="SunFlex (Cambodia) Co.,Ltd" class="max-w-[150px] mx-auto">
          </router-link>
        </div>
        <div class="w-1/6"></div>
        <div class="mobflmenu fixed inset-0 bg-white z-50 transition-transform duration-300" :class="{ 'translate-x-0': isMobileMenuOpen, 'translate-x-full': !isMobileMenuOpen }">
          <div class="container mx-auto flex items-center justify-between px-4 py-4">
            <div class="w-1/6"></div>
            <div class="w-4/6 text-center">
              <router-link to="/">
                <img src="@/assets/images/4_files/logo.png" alt="SunFlex (Cambodia) Co.,Ltd" title="SunFlex (Cambodia) Co.,Ltd" class="max-w-[150px] mx-auto">
              </router-link>
            </div>
            <div class="w-1/6 text-right">
              <button class="closebut" @click="toggleMobileMenu">
                <img src="@/assets/images/4_files/closew.svg" alt="close" title="close" class="w-8">
              </button>
            </div>
          </div>
          <div class="px-4">
            <ul class="mtree space-y-4">
              <li class="text-blue-800 font-medium">
                <router-link to="/" class="hover:underline" :class="{ 'font-bold': $route.path === '/' }">Home</router-link>
              </li>
              <li class="text-blue-800 font-medium">
                <a href="#" @click.prevent="toggleProductsMenu" class="hover:underline flex justify-between items-center">
                  Products & Solutions
                  <span :class="{ 'rotate-180': isProductsMenuOpen }">▼</span>
                </a>
                <ul class="pl-4 space-y-2" :class="{ 'hidden': !isProductsMenuOpen }">
                  <li><router-link to="/#it-infrastructure" class="hover:underline">IT Infrastructure</router-link></li>
                  <li><router-link to="/#networking-data-analytics" class="hover:underline">Networking Data Analytics</router-link></li>
                  <li><router-link to="/#cloud-solutions" class="hover:underline">Cloud Solutions</router-link></li>
                  <li><router-link to="/#big-data" class="hover:underline">Big Data, Data Warehouse</router-link></li>
                  <li><router-link to="/#digital-banking" class="hover:underline">Digital Banking Solutions</router-link></li>
                  <li><router-link to="/#security-solutions" class="hover:underline">Security Solutions</router-link></li>
                  <li><router-link to="/#professional-services" class="hover:underline">Professional Service Support</router-link></li>
                </ul>
              </li>
               <li class="text-blue-800 font-medium">
                <router-link to="/career" class="hover:underline" :class="{ 'font-bold': $route.path === '/career' }">Career</router-link>
              </li>
              <li class="text-blue-800 font-medium">
                <router-link to="/about-us" class="hover:underline" :class="{ 'font-bold': $route.path === '/about-us' }">About Us</router-link>
              </li>
              <li class="text-blue-800 font-medium">
               <router-link to="/login" class="nav-link">
                 <i class="fas fa-user text-xl"></i>
              </router-link>      
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- Mobile Header Ends -->

    <!-- Desktop Header -->
    <div class="header hidden md:block bg-white shadow-sm py-4">
      <div class="container mx-auto flex items-center justify-between">
        <div class="w-1/6">
          <router-link to="/">
            <img src="@/assets/images/4_files/logo.png" alt="SunFlex (Cambodia) Co.,Ltd" title="SunFlex (Cambodia) Co.,Ltd" class="w-[170px]">
          </router-link>
        </div>
        <div class="w-5/6 text-right">
          <nav class="mega-menu flex justify-end space-x-4">
            <router-link to="/" class="text-gray-700 hover:text-blue-800 font-medium" :class="{ 'text-blue-800 font-bold': $route.path === '/' }">Home</router-link>
            <div class="relative group">
              <a href="#" class="text-gray-700 hover:text-blue-800 font-medium" @click.prevent="toggleProductsMenu">Products & Solutions</a>
              <ul class="absolute hidden group-hover:block bg-white shadow-lg p-4 w-64 z-10">
                <li><router-link to="/#it-infrastructure" class="block py-2 text-gray-700 hover:text-blue-800">IT Infrastructure</router-link></li>
                <li><router-link to="/#networking-data-analytics" class="block py-2 text-gray-700 hover:text-blue-800">Networking Data Analytics</router-link></li>
                <li><router-link to="/#cloud-solutions" class="block py-2 text-gray-700 hover:text-blue-800">Cloud Solutions</router-link></li>
                <li><router-link to="/#big-data" class="block py-2 text-gray-700 hover:text-blue-800">Big Data, Data Warehouse</router-link></li>
                <li><router-link to="/#digital-banking" class="block py-2 text-gray-700 hover:text-blue-800">Digital Banking Solutions</router-link></li>
                <li><router-link to="/#security-solutions" class="block py-2 text-gray-700 hover:text-blue-800">Security Solutions</router-link></li>
                <li><router-link to="/#professional-services" class="block py-2 text-gray-700 hover:text-blue-800">Professional Service Support</router-link></li>
              </ul>
            </div>
            <router-link to="/career" class="text-gray-700 hover:text-blue-800 font-medium" :class="{ 'text-blue-800 font-bold': $route.path === '/career' }">Career</router-link>
            <router-link to="/about-us" class="text-gray-700 hover:text-blue-800 font-medium" :class="{ 'text-blue-800 font-bold': $route.path === '/about-us' }">About Us</router-link>
            <router-link to="/login" class="nav-link text-gray-700 hover:text-blue-800 font-medium">
              <i class="fas fa-user text-xl"></i>
            </router-link>
          </nav>
        </div>
      </div>
    </div>
    <!-- Desktop Header Ends -->

    <!-- Main Content -->
    <div class="container mx-auto p-6">
      <!-- Loading Modal -->
      <div
        v-if="isLoading"
        class="fixed inset-0 bg-gray-900/40 flex items-center justify-center z-50"
        role="dialog"
        aria-modal="true"
        aria-label="Loading"
      >
        <div
          class="bg-white bg-opacity-90 rounded-lg p-6 flex flex-col items-center space-y-4 shadow-lg animate-fade-in"
        >
          <div
            class="w-12 h-12 border-4 border-t-[#2e6d56] border-gray-200 rounded-full animate-spin"
          ></div>
          <p class="text-[#2e6d56] font-medium text-sm">Loading jobs, please wait...</p>
        </div>
      </div>

      <!-- Alert -->
      <div
        v-if="errorMessage"
        class="fixed top-4 right-4 max-w-sm w-full bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-md shadow-md animate-slide-in"
        role="alert"
      >
        <div class="flex justify-between items-center">
          <p class="text-sm">{{ errorMessage }}</p>
          <button
            @click="errorMessage = ''"
            class="text-red-700 hover:text-red-900 focus:outline-none"
            aria-label="Close alert"
          >
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>

      <!-- Filter Section -->
      <div class="bg-blue-100 p-4 rounded-lg mb-6 shadow-md">
        <div
          class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4"
        >
          <div class="flex-1 w-full md:w-auto">
            <input
              v-model="searchQuery"
              class="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#2e6d56]"
              placeholder="Search by job title or keyword..."
            />
          </div>
          <button
            @click="filterJobs"
            class="bg-[#2e6d56] text-white px-4 py-2 rounded-lg hover:bg-[#245c48] transition duration-200 w-full md:w-auto"
          >
            Search
          </button>
        </div>
      </div>

      <!-- Empty State -->
      <div
        v-if="!isLoading && filteredJobs.length === 0"
        class="text-center text-gray-500 py-10"
      >
        <p>No jobs found matching your search.</p>
      </div>

      <!-- Job Listings -->
      <div v-else-if="!isLoading" class="grid gap-6">
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
              <p class="text-[#2e6d56] font-medium text-sm mt-2">{{ job.type }}</p>
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

    <!-- Desktop Footer -->
    <div class="deskfoot hidden md:block bg-blue-800 text-white py-8">
      <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div class="text-sm">
          <span>©2025 by SunFlex (Cambodia) Co.,Ltd<br>Best viewed with IE 9+, Firefox 16+, Safari 5.1, Chrome 23+.</span>
        </div>
        <div class="flex space-x-4 my-4 md:my-0">
          <router-link to="/" class="text-white hover:underline">Home</router-link>
          <router-link to="/career" class="text-white hover:underline">Career</router-link>
          <router-link to="/about-us" class="text-white hover:underline">About Us</router-link>
        </div>
        <div class="text-right">
          <b class="text-3xl font-bold">SunFlex</b>
        </div>
      </div>
      <button class="fixed bottom-4 right-4" @click="scrollToTop">
        <img src="@/assets/images/4_files/scroll-up.png" alt="scroll-up" title="scroll-up" class="w-10">
      </button>
    </div>

    <!-- Mobile Footer -->
    <div class="mobilefoot md:hidden bg-blue-800 text-white py-8 text-center">
      <button class="mb-4" @click="scrollToTop">
        <img src="@/assets/images/4_files/scroll-up.png" alt="scroll-up" title="scroll-up" class="w-10 mx-auto">
      </button>
      <ul class="flex justify-center space-x-4 mb-4">
        <li><a href="https://www.linkedin.com"><img src="@/assets/images/4_files/linkedinw.svg" alt="linkedin" title="linkedin" class="w-8"></a></li>
        <li><a href="https://www.twitter.com"><img src="@/assets/images/4_files/twitter-logow.svg" alt="twitter" title="twitter" class="w-8"></a></li>
        <li><a href="https://www.facebook.com"><img src="@/assets/images/4_files/facebook-letter-logow.svg" alt="facebook" title="facebook" class="w-8"></a></li>
        <li><a href="https://www.youtube.com"><img src="@/assets/images/4_files/youtube-symbolw.svg" alt="youtube" title="youtube" class="w-8"></a></li>
      </ul>
      <p>© SunFlex (Cambodia) Co.,Ltd, 2025</p>
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
          title: apiJob.title || apiJob.type,
          type: apiJob.type || 'N/A',
          salary: apiJob.salary || 'N/A',
          description: apiJob.description || 'N/A',
          responsible: apiJob.responsible || 'N/A',
          requirement: apiJob.requirement || 'N/A',
          postedDate: postedDate,
          location: apiJob.branch || 'N/A',
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

@font-face {
  font-family: 'Roboto';
  src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=block');
}

.careers {
  @apply font-roboto;
}

/* Custom animations for loading modal and alert */
.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}

.animate-slide-in {
  animation: slideIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
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

.hover:shadow-lg:hover {
  transform: translateY(-2px);
  transition: transform 0.2s;
}
</style>
```