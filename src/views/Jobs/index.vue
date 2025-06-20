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
        <div class="flex items-center space-x-4">
          <div
            class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center"
          >
            <span class="text-green-500 text-xl">👤</span>
          </div>
          <div class="flex-1">
            <h3 class="text-lg font-semibold text-gray-800">{{ job.title }}</h3>
            <p class="text-green-600">Posted {{ job.posted }}</p>
          </div>
          <div class="text-right">
            <p class="text-gray-600">{{ job.location }}</p>
            <p class="text-blue-500 font-medium">{{ job.type }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    return { router };
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
      const job = this.jobs.find((job) => job.id === jobId);
      this.router.push({ path: '/career/job-detail', query: { id: jobId }});
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
