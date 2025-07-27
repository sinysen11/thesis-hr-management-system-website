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
          department: 'Operations',
          location: 'Preah Yukunthor',
          type: 'Full Time',
          posted: '1 week ago',
          overview:
            'The Merchant Support Manager oversees the merchant support team, ensuring exceptional service delivery to merchants using SunFlex’s digital platforms. This role involves managing inquiries, resolving issues, and improving merchant satisfaction to support business growth.',
          description:
            '- Lead and mentor a team of merchant support representatives to deliver high-quality service.\n- Handle escalated merchant inquiries and resolve complex issues promptly.\n- Develop and implement support processes to enhance efficiency and merchant satisfaction.\n- Collaborate with product and technical teams to address platform-related issues.\n- Analyze merchant feedback to identify trends and recommend improvements.\n- Train team members on new products, policies, and support tools.\n- Monitor key performance indicators (KPIs) such as response time and resolution rate.',
          requirements:
            '- Bachelor’s degree in Business, Management, or a related field.\n- Minimum of 3 years of experience in customer support or merchant services, with at least 1 year in a supervisory role.\n- Strong problem-solving and conflict resolution skills.\n- Proficiency in CRM tools (e.g., Zendesk, Salesforce).\n- Excellent communication and interpersonal skills.\n- Experience in e-commerce, FinTech, or payment processing industries is a plus.\n- Ability to work under pressure and manage multiple priorities.'
        },
        {
          id: 3,
          title: 'Senior Remittance Manager',
          department: 'Finance',
          location: 'Phnom Penh',
          type: 'Full Time',
          posted: '1 week ago',
          overview:
            'The Senior Remittance Manager oversees the company’s remittance services, ensuring efficient, secure, and compliant cross-border transactions. This role involves optimizing processes, managing partnerships, and enhancing customer experience.',
          description:
            '- Manage end-to-end remittance operations, including transaction processing and reconciliation.\n- Develop strategies to improve remittance speed, cost, and reliability.\n- Ensure compliance with local and international financial regulations.\n- Build and maintain relationships with banking and payment partners.\n- Monitor transaction data to identify and mitigate risks, such as fraud.\n- Collaborate with IT teams to integrate remittance systems with digital platforms.\n- Provide regular reports on remittance performance to senior management.',
          requirements:
            '- Bachelor’s degree in Finance, Economics, or a related field.\n- Minimum of 5 years of experience in financial services, with at least 2 years in remittance or payment operations.\n- Knowledge of AML (Anti-Money Laundering) and KYC (Know Your Customer) regulations.\n- Strong analytical and problem-solving skills.\n- Proficiency in financial software and payment systems.\n- Excellent leadership and communication skills.\n- Experience in FinTech or banking is highly desirable.'
        },
        {
          id: 4,
          title: 'PTU Digital Business Manager',
          department: 'Digital',
          location: 'Headquarter',
          type: 'Full Time',
          posted: '1 week ago',
          overview:
            'The PTU Digital Business Manager leads digital transformation initiatives for SunFlex’s Payment Transaction Unit (PTU), driving innovation in payment solutions and expanding market reach.',
          description:
            '- Develop and execute digital strategies for the PTU, focusing on payment solutions.\n- Identify new business opportunities in digital payments and FinTech.\n- Collaborate with product teams to design and launch innovative payment products.\n- Manage partnerships with payment gateways, banks, and technology providers.\n- Analyze market trends and customer needs to inform product development.\n- Oversee digital marketing campaigns to promote PTU services.\n- Ensure alignment of PTU initiatives with company goals and compliance requirements.',
          requirements:
            '- Bachelor’s degree in Business, Finance, or a related field; MBA is a plus.\n- Minimum of 5 years of experience in digital business or payment solutions.\n- Strong understanding of digital payment ecosystems and FinTech trends.\n- Proven track record of managing successful digital transformation projects.\n- Excellent project management and stakeholder engagement skills.\n- Proficiency in data analysis and market research tools.\n- Experience in the Cambodian or Southeast Asian market is an advantage.'
        },
        {
          id: 5,
          title: 'System Integration Manager',
          department: 'IT',
          location: 'Phnom Penh',
          type: 'Full Time',
          posted: '1 week ago',
          overview:
            'The System Integration Manager ensures seamless integration of SunFlex’s IT systems, enabling efficient operations and supporting the company’s digital transformation goals.',
          description:
            '- Lead the design and implementation of system integration projects.\n- Collaborate with internal teams and external vendors to integrate new software and hardware solutions.\n- Troubleshoot and resolve integration issues to maintain system reliability.\n- Develop integration standards and best practices to ensure scalability.\n- Monitor system performance and recommend upgrades or optimizations.\n- Document integration processes and provide training to IT staff.\n- Ensure compliance with cybersecurity and data protection standards.',
          requirements:
            '- Bachelor’s degree in Computer Science, Information Technology, or a related field.\n- Minimum of 4 years of experience in system integration or IT project management.\n- Proficiency in integration tools (e.g., MuleSoft, Apache Camel, REST APIs).\n- Strong knowledge of IT infrastructure, cloud platforms, and databases.\n- Excellent problem-solving and technical skills.\n- Experience in FinTech or cybersecurity industries is a plus.\n- Strong communication and team collaboration abilities.'
        },
        {
          id: 6,
          title: 'Solution Architect',
          department: 'IT',
          location: 'Phnom Penh',
          type: 'Full Time',
          posted: '1 week ago',
          overview:
            'The Solution Architect designs and implements technical solutions to meet SunFlex’s business needs, focusing on scalable, secure, and innovative IT architectures.',
          description:
            '- Design end-to-end technical architectures for business applications and platforms.\n- Collaborate with stakeholders to gather requirements and translate them into technical solutions.\n- Evaluate and recommend technologies, tools, and frameworks for projects.\n- Ensure solutions align with cybersecurity, scalability, and performance standards.\n- Provide technical guidance to development and IT teams during implementation.\n- Conduct architecture reviews to identify risks and optimization opportunities.\n- Stay updated on emerging technologies and incorporate them into solutions.',
          requirements:
            '- Bachelor’s degree in Computer Science, Engineering, or a related field.\n- Minimum of 5 years of experience as a Solution Architect or similar role.\n- Expertise in software development, cloud computing (AWS, Azure), and microservices.\n- Strong knowledge of cybersecurity principles and best practices.\n- Proficiency in architectural modeling tools (e.g., UML, ArchiMate).\n- Excellent problem-solving and communication skills.\n- Experience in FinTech, banking, or IT consulting is preferred.'
        },
        {
          id: 7,
          title: 'Digital Business Manager',
          department: 'Digital',
          location: 'Headquarter',
          type: 'Full Time',
          posted: '1 month ago',
          overview:
            'The Digital Business Manager oversees the company’s digital marketing and sales initiatives, driving growth through online channels and digital platforms.',
          description:
            '- Develop and implement digital marketing strategies to enhance brand awareness.\n- Manage SEO, SEM, social media, and content marketing campaigns.\n- Oversee e-commerce platforms and online sales channels.\n- Analyze digital performance metrics to optimize campaigns and ROI.\n- Collaborate with product teams to align digital strategies with product launches.\n- Manage budgets and vendor relationships for digital marketing projects.\n- Ensure digital initiatives comply with brand guidelines and regulations.',
          requirements:
            '- Bachelor’s degree in Marketing, Business, or a related field.\n- Minimum of 4 years of experience in digital marketing or e-commerce.\n- Proficiency in e-commerce strategies in digital marketing platforms (e.g., Google Ads, Meta Ads).\n- Strong analytical skills and experience with tools like Google Analytics or SEMrush.\n- Excellent project management and project management skills.\n- Experience in FinTech, retail, or tech industries is a plus.\n- Strong leadership and communication skills.\n- Knowledge of the Cambodian digital market is an advantage.'
        },
        {
          id: 8,
          title: 'Insurance & Personal Financial Manager (PFM) Manager',
          department: 'Finance',
          location: 'Headquarter',
          type: 'Full Time',
          posted: '1 week ago',
          overview:
            'The Insurance & PFM Manager leads the development and management of insurance and personal financial management services, ensuring clients receive tailored financial solutions.',
          description:
            '- Oversee the design and delivery of insurance products and PFM PFM.\n- Develop strategies to grow the insurance portfolio and PFM client base.\n.\n- Collaborate with partners with insurance providers to offer competitive products.\n- Ensure compliance with regulatory insurance and financial regulations.\n- Analyze client feedback and market trends to enhance product offerings.\n- Train sales teams on insurance and PFM product knowledge.\n- Monitor performance metrics to achieve financial targets.\n- Provide reports to senior management on portfolio performance.\n',
          requirements:
            '- Bachelor’s degree in Finance, Business, or a related field.\n- Minimum of 5 years of experience in insurance, wealth management, or financial planning.\n- Strong knowledge of regulatory knowledge of insurance and financial planning regulations.\n- Excellent client management and negotiation skills.\n client management.\n- Proficiency in data analysis and financial modeling.\n in modeling.\n- Experience in FinTech or banking is a plus.\n- Strong leadership and team management abilities.\n- Knowledge of the Cambodian financial market is preferred.\n'
        },
        {
          id: 10,
          title: 'IT Specialist',
          department: 'Information Technology',
          location: 'Phnom Penh',
          type: 'Full Time',
          posted: '1 week ago',
          overview:
            'The IT Specialist maintains and enhances SunFlex’s IT infrastructure, ensuring system reliability and supporting cybersecurity initiatives.\n This role involves troubleshooting and technical support.\n',
          description:
            '- Manage and maintain servers, networks, and endpoint devices.\n- Implement and monitor cybersecurity measures to protect systems.\n.\n- Provide technical support to staff for hardware and software issues.\n- Install and configure software, systems, and applications.\n- Conduct regular system backups and updates.\n- Collaborate with vendors for IT procurement and maintenance.\n- Document IT processes and create user guides.\n- Assist in system upgrades and technology projects.\n',
          requirements:
            '- Bachelor’s degree in Computer Science, IT, or related field.\n\n- Minimum of of 2 years of experience in IT support or system administration.\n.\n- Proficiency with network management tools and operating systems (Windows/Linux).\n.\n- Knowledge of cybersecurity best practices.\n- Knowledge tools (e.g., firewalls, antivirus software).\n.\n- certifications (e.g., CompTIA Network+, Security+).\n- Strong problem-solving and communication skills.\n.\n- Experience in FinTech or tech-driven environments is a plus.\n- Ability to work on-call for emergencies.\n'
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
