<template>
  <div class="job-detail bg-white font-roboto">
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
                <router-link to="/career" class="hover:underline" :class="{ 'font-bold': $route.path.includes('/career') }">Careers</router-link>
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
            <img src="@/assets/images/4_files/logo.png" alt="SunFlex (Cambodia) Co.,Ltd" title="SunFlex (Cambdia) Co.,Ltd" class="w-[170px]">
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
            <router-link to="/career" class="text-gray-700 hover:text-blue-800 font-medium" :class="{ 'text-blue-800 font-bold': $route.path.includes('/career') }">Careers</router-link>
            <router-link to="/about-us" class="text-gray-700 hover:text-blue-800 font-medium" :class="{ 'text-blue-800 font-bold': $route.path === '/about-us' }">About Us</router-link>
               <router-link to="/login" class="nav-link">
                 <i class="fas fa-user text-xl"></i>
              </router-link>      
          </nav>
        </div>
      </div>
    </div>
    <!-- Desktop Header Ends -->

    <!-- Main Content -->
    <div class="container mx-auto p-6">
      <div v-if="isLoading" class="text-center text-gray-500">
        Loading job details...
      </div>
      <div v-else-if="job" class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold text-green-600 mb-4">
          {{ job.title.des_en }}
        </h2>
        <div class="flex items-center text-sm text-gray-600 mb-4">
          <span>{{ job.type }}</span>
          <span class="mx-2">•</span>
          <span>{{ job.branch }}</span>
          <span class="mx-2">•</span>
          <span>Posted {{ timeAgo(job.postedDate) }}</span>
          <span v-if="job.department.name_en" class="mx-2">•</span>
          <span v-if="job.department.name_en" class="text-blue-500">{{ job.department.name_en }}</span>
          <span class="mx-2">•</span>
          <span>Staff Needed: {{ job.number_staff }}</span>
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
        <div class="mb-6">
          <h3 class="text-lg font-semibold mb-2">Additional Information</h3>
          <p class="text-gray-700">
            <span class="font-semibold">Salary:</span> {{ job.salary }}
          </p>
          <p class="text-gray-700">
            <span class="font-semibold">Publish Date:</span>
            {{ formatDate(job.publish_date) }}
          </p>
          <p class="text-gray-700">
            <span class="font-semibold">Close Date:</span>
            {{ formatDate(job.close_date) }}
          </p>
          <p class="text-gray-700">
            <span class="font-semibold">Benefits:</span> {{ job.benefits }}
          </p>
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
import { getJobById } from '@/services/jobs';

export default {
  name: 'JobDetailComponent',
  data() {
    return {
      job: null,
      isLoading: true,
      isMobileMenuOpen: false,
      isProductsMenuOpen: false
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
        title: apiJob.title || apiJob.type,
        type: apiJob.type || 'N/A',
        salary: apiJob.salary || 'N/A',
        description: apiJob.description || 'N/A',
        responsible: apiJob.responsible || 'N/A',
        requirement: apiJob.requirement || 'N/A',
        postedDate: postedDate,
        branch: apiJob.branch || 'N/A',
        department: apiJob.department || 'N/A',
        number_staff: apiJob.number_staff || 'N/A',
        publish_date: apiJob.publish_date
          ? new Date(apiJob.publish_date)
          : null,
        close_date: apiJob.close_date ? new Date(apiJob.close_date) : null,
        benefits: apiJob.benefits || 'N/A'
      };
    },
    timeAgo(date) {
      return formatDistanceToNow(date, { addSuffix: true });
    },
    formatDate(date) {
      return date ? format(new Date(date), 'MMM dd, yyyy') : 'N/A';
    },
    applyJob() {
      const isLoggedIn = !!localStorage.getItem('token');
      if (!isLoggedIn) {
        this.$router.push('/signup');
      } else {
        const user = JSON.parse(localStorage.getItem('user'));
        this.$router.push({
          path: '/career/applicant',
          query: {
            jobId: this.job.id,
            apply_position: this.job.title.des_en,
            branch: this.job.branch,
            first_name: user.first_name || user.username || '',
            last_name: user.last_name || '',
            sex: user.sex || 'Male',
            date_of_birth: user.date_of_birth || '',
            telegram: user.telegram || '',
            telephone: user.telephone || '',
            current_address: user.current_address || '',
            email: user.email || ''
          }
        });
      }
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
  },
  watch: {
    '$route.query.id': 'loadJob'
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

.job-detail {
  @apply font-roboto;
}
</style>
