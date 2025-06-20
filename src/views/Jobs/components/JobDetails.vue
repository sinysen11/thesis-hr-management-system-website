<template>
  <div class="container mx-auto p-6">
    <div v-if="job" class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-green-600 mb-4">{{ job.title }}</h2>
      <div class="flex items-center text-sm text-gray-600 mb-4">
        <span>{{ job.type }}</span>
        <span class="mx-2">•</span>
        <span>{{ job.location }}</span>
        <span class="mx-2">•</span>
        <span>Posted {{ job.posted }}</span>
        <span v-if="job.department" class="mx-2">•</span>
        <span v-if="job.department" class="text-blue-500">{{
          job.department
        }}</span>
      </div>
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-2">Job Summary:</h3>
        <p class="text-gray-700">{{ job.overview }}</p>
      </div>
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-2">Job Descriptions</h3>
        <ul class="list-disc pl-5 text-gray-700">
          <li v-for="(desc, index) in job.description.split('\n')" :key="index">
            {{ desc.trim() }}
          </li>
        </ul>
      </div>
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-2">Job Requirements</h3>
        <ul class="list-disc pl-5 text-gray-700">
          <li v-for="(req, index) in job.requirements.split('\n')" :key="index">
            {{ req.trim() }}
          </li>
        </ul>
      </div>
      <router-link
        to="/career"
        class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
        >Back</router-link
      >
      <button
        v-if="!showForm"
        class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 ml-4"
        @click="applyJob"
      >
        Apply
      </button>
      <div v-if="showForm" class="mt-4">
        <h3 class="text-lg font-semibold mb-2">Application Form</h3>
        <div class="mb-4">
          <label for="username" class="block text-sm font-medium text-gray-700"
            >Username</label
          >
          <input
            v-model="username"
            type="text"
            id="username"
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your username"
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700"
            >Password</label
          >
          <input
            v-model="password"
            type="password"
            id="password"
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your password"
          />
        </div>
        <button
          class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200"
          @click="submitApplication"
        >
          Submit Application
        </button>
        <button
          class="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-200 ml-2"
          @click="cancelApplication"
        >
          Cancel
        </button>
      </div>
    </div>
    <div v-else class="text-center text-gray-500">Loading job details...</div>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    return { route, router };
  },
  data() {
    return {
      job: null,
      showForm: false,
      username: '',
      password: ''
    };
  },
  computed: {
    jobs() {
      return [
        {
          id: 1,
          title: 'Growth Manager',
          department: 'Digital',
          location: 'Phnom Penh',
          type: 'Full Time',
          posted: '2 weeks ago',
          overview:
            'Responsible for developing, implementing, and optimizing strategies to accelerate user acquisition, enhance user engagement, and maximize retention across various digital channels. This role demands a creative, data-driven, and strategic thinker who can proactively identify growth opportunities, run experiments, and scale successful initiatives.',
          description:
            '- Develop and execute strategies focused on user acquisition, retention, activation, and revenue growth.\n- Plan and implement growth experiments (A/B tests, marketing campaigns, promotions) to identify the most effective strategies for customer acquisition and retention.\n- Analyze data and metrics to identify growth trends, opportunities, and areas for improvement.\n- Collaborate cross-functionally with product, marketing, analytics, and technical teams to implement successful growth initiatives.\n- Monitor and report on the performance of growth strategies and adjust plans accordingly to meet business goals.\n- Stay up-to-date with industry trends and competitor strategies to ensure the company’s growth initiatives remain competitive and innovative.',
          requirements:
            '- Bachelor’s degree in Business, Marketing, Economics, or a related field.\n- Minimum of 5 years of experience in growth marketing, digital marketing, user acquisition, or similar roles.\n- Proficiency in analytics tools (e.g., Google Analytics, Mixpanel, Power BI, Tableau).\n- Experience in running and managing A/B testing and growth experimentation.\n- Exceptional analytical skills with the ability to translate data into actionable strategies.\n- Excellent communication and collaboration skills, capable of working cross-functionally.\n- Prior experience in FinTech, Banking, E-commerce, or Tech startup environments.\n- Knowledge of mobile app marketing and mobile growth strategies.'
        },
        {
          id: 2,
          title: 'Merchant Support Manager',
          location: 'Preah Yukunthor',
          type: 'Full Time',
          posted: '1 week ago',
          overview: 'Manage merchant support operations.',
          description:
            'Responsible for handling merchant inquiries and support.',
          requirements: 'Experience in customer support and management.'
        },
        {
          id: 3,
          title: 'Senior Remittance Manager',
          location: 'Phnom Penh',
          type: 'Full Time',
          posted: '1 week ago',
          overview: 'Oversee remittance services.',
          description: 'Manage and optimize remittance processes.',
          requirements: 'Experience in financial services.'
        },
        {
          id: 4,
          title: 'PTU Digital Business Manager',
          location: 'Headquarter',
          type: 'Full Time',
          posted: '1 week ago',
          overview: 'Lead digital business initiatives.',
          description: 'Drive digital transformation projects.',
          requirements: 'Background in digital business.'
        },
        {
          id: 5,
          title: 'System Integration Manager',
          location: 'Phnom Penh',
          type: 'Full Time',
          posted: '1 week ago',
          overview: 'Manage system integrations.',
          description: 'Ensure seamless system integration and support.',
          requirements: 'IT and integration experience.'
        },
        {
          id: 6,
          title: 'Solution Architect',
          location: 'Phnom Penh',
          type: 'Full Time',
          posted: '1 week ago',
          overview: 'Design technical solutions.',
          description: 'Create and implement architectural designs.',
          requirements: 'Architecture and technical skills.'
        },
        {
          id: 7,
          title: 'Digital Business Manager',
          location: 'Headquarter',
          type: 'Full Time',
          posted: '1 week ago',
          overview: 'Manage digital business strategies.',
          description: 'Oversee digital marketing and sales.',
          requirements: 'Digital marketing experience.'
        },
        {
          id: 8,
          title: 'Insurance & Personal Financial Manager (PFM) Manager',
          location: 'Headquarter',
          type: 'Full Time',
          posted: '1 week ago',
          overview: 'Lead insurance and financial services.',
          description: 'Manage PFM and insurance portfolios.',
          requirements: 'Financial management skills.'
        }
      ];
    }
  },
  mounted() {
    this.loadJob();
  },
  methods: {
    loadJob() {
      const id = parseInt(this.route.query.id);
      this.job = this.jobs.find((job) => job.id === id) || null;
    },
    applyJob() {
      // Check if user is logged in (simplified example using localStorage)
      const isLoggedIn = !!localStorage.getItem('userToken'); // Replace with your auth check
      if (!isLoggedIn) {
        this.router.push('/signup');
      } else {
        // Show the form for logged-in users
        this.showForm = true;
      }
    },
    submitApplication() {
      // Validate username and password (example validation)
      if (!this.username || !this.password) {
        alert('Please enter both username and password.');
        return;
      }

      // Placeholder for application submission logic with username and password
      alert(
        `Application submitted for ${this.job.title} with username: ${
          this.username
        } at ${new Date().toLocaleString('en-US', {
          timeZone: 'Asia/Phnom_Penh'
        })}`
      );
      // Add your actual submission logic here (e.g., API call with username and password)
      // Example: this.$http.post('/api/apply', { jobId: this.job.id, username: this.username, password: this.password });

      // Reset form and hide it after submission
      this.resetForm();
    },
    cancelApplication() {
      this.resetForm();
    },
    resetForm() {
      this.showForm = false;
      this.username = '';
      this.password = '';
    }
  },
  watch: {
    'route.query.id': 'loadJob'
  }
};
</script>

<style scoped>
/* Custom styles */
</style>
