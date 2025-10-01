<template>
  <div class="job-detail bg-white font-roboto">
    <img
      src="@/assets/images/4_files/our_career.webp"
      alt="Partners Banner"
      class="w-full h-auto"
    />
    <!-- Google Tag Manager (noscript) -->
    <noscript>
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P2GWKJ7" height="0" width="0" style="display:none;visibility:hidden"></iframe>
    </noscript>
    <!-- End Google Tag Manager (noscript) -->

    <!-- Browser Compatibility Warning -->
    <!--[if lt IE 8]>
      <p class="ancient-browser-alert text-center p-4 bg-red-100 text-red-700">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/" target="_blank" class="underline">upgrade your browser</a>.</p>
    <![endif]-->

    <!-- Main Content -->
    <div class="container mx-auto p-6">
      <div v-if="isLoading" class="text-center text-gray-500">
        Loading job details...
      </div>
      <div v-else-if="job" class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold text-[#2e6d56] mb-4">
          {{ job.title.des_en }}
        </h2>
        <div class="flex items-center text-sm text-gray-600 mb-4">
          <p class="text-gray-700">
            <span><i class="fa fa-calendar-check" aria-hidden="true"></i> {{ daysLeft(job.close_date) }}</span> 
            <span class="mx-2"> </span>
          </p>
          <span><i class="fa fa-map-marker" aria-hidden="true"></i> {{ job.branch }}</span>
          <span class="mx-2"> </span>
          <span> <i class="fa fa-calendar-check" aria-hidden="true"></i> Posted {{ timeAgo(job.postedDate) }}</span>
          <span class="mx-2">-</span>
          <span>({{ job.number_staff }} Post)</span>
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
          class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-[#2d6f54] transition duration-200 ml-4"
          @click="applyJob"
        >
          Apply
        </button>
      </div>
      <div v-else class="text-center text-gray-500">Job not found.</div>
    </div>
  </div>
</template>

<script>
import { formatDistanceToNow, format, differenceInDays } from 'date-fns';
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
    daysLeft(date) {
      if (!date) return 'N/A';
      const today = new Date();
      const close = new Date(date);
      const diff = differenceInDays(close, today);

      if (diff > 0) {
        return `Expire in ${diff} day${diff > 1 ? 's ' : ' '}`;
      } else if (diff === 0) {
        return 'Expire today';
      } else {
        return 'Expired';
      }
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
