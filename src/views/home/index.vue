<template>
  <div class="home bg-white font-roboto">
    <!-- Google Tag Manager (noscript) -->
    <noscript>
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P2GWKJ7" height="0" width="0" style="display:none;visibility:hidden"></iframe>
    </noscript>
    <!-- End Google Tag Manager (noscript) -->

    <!-- Browser Compatibility Warning -->
    <!--[if lt IE 8]>
      <p class="ancient-browser-alert text-center p-4 bg-red-100 text-red-700">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/" target="_blank" class="underline">upgrade your browser</a>.</p>
    <![endif]-->
    <!-- Desktop Header Ends -->

    <!-- Main Content -->
    <div class="content">
      <div class="mainbanner relative">
        <div class="relative overflow-hidden">
          <div class="flex transition-transform duration-500" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <div
              v-for="(slide, index) in slides"
              :key="index"
              class="w-full flex-shrink-0"
            >
              <div class="relative">
                <picture>
                  <source media="(max-width: 768px)" :srcset="slide.mobileSrc" />
                  <img :src="slide.desktopSrc" :alt="slide.alt" :title="slide.alt" class="w-full h-[500px] object-cover" />
                </picture>
                <div class="absolute inset-0 flex items-center justify-center text-white text-center">
                  <div class="px-4">
                    <!-- Banner text can be added here if needed -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <li
              v-for="(slide, index) in slides"
              :key="index"
              :class="{ 'bg-[#2d6f54]': currentIndex === index, 'bg-white': currentIndex !== index }"
              class="w-3 h-3 rounded-full cursor-pointer border-2 border-white"
              @click="goToSlide(index)"
            ></li>
          </ul>
        </div>
      </div>

      <div class="bludemenus bg-[#2d6f54] py-4">
        <div class="container mx-auto flex items-center px-4">
          <button class="mneulink mr-4" @click="toggleBlueMenu">
            <img src="@/assets/images/4_files/menuw.svg" alt="menu" title="menu" class="w-8">
          </button>
          <div class="bluemenu" :class="{ 'hidden': !isBlueMenuOpen }">
            <ul class="flex flex-wrap gap-4 text-white">
              <li><router-link to="/" class="hover:underline">Home</router-link></li>
              <li><router-link to="/#it-infrastructure" class="hover:underline">IT Infrastructure</router-link></li>
              <li><router-link to="/#networking-data-analytics" class="hover:underline">Networking Data Analytics</router-link></li>
              <li><router-link to="/#cloud-solutions" class="hover:underline">Cloud Solutions</router-link></li>
              <li><router-link to="/#big-data" class="hover:underline">Big Data, Data Warehouse</router-link></li>
              <li><router-link to="/#digital-banking" class="hover:underline">Digital Banking Solutions</router-link></li>
              <li><router-link to="/#security-solutions" class="hover:underline">Security Solutions</router-link></li>
              <li><router-link to="/#professional-services" class="hover:underline">Professional Service Support</router-link></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="container mx-auto py-8">
        <header class="text-center mb-8">
          <h1 class="text-4xl font-bold text-[#2d6f54]">Product</h1>
        </header>
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold">Welcome to <strong>SunFlex (Cambodia) Co.,Ltd</strong>.</h2>
          <p class="mt-4 text-lg text-gray-700">
            SunFlex provides consistent processes and tools combined with the right skills at the right time and place. We design IT solutions that fit your unique requirements with a complete breadth of distributed IT solutions.
          </p>
          <p class="mt-4 text-lg text-gray-700">
            Drawing on deep industry expertise and customize solutions, we blend strategic designs, using proven IT technologies, and world class service and support capability to create effective solutions that remove cost and complexity to maximize your returns on IT investment.
          </p>
          <p class="mt-4 text-lg text-gray-700">
            With over decade of industry experience, our solutions are built on innovation, expertise, independence, and flexibility.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div v-for="(feature, index) in features.slice(0, 3)" :key="index" class="text-center">
            <img :src="feature.desktopSrc" :alt="feature.alt" class="hidden md:block mx-auto mb-4 w-24 h-24" />
            <img :src="feature.mobileSrc" :alt="feature.alt" class="md:hidden mx-auto mb-4 w-24 h-24" />
            <h4 class="text-xl font-semibold" v-html="feature.title"></h4>
            <p class="text-gray-700" v-html="feature.description"></p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div v-for="(feature, index) in features.slice(3)" :key="index + 3" class="text-center">
            <img :src="feature.desktopSrc" :alt="feature.alt" class="hidden md:block mx-auto mb-4 w-24 h-24" />
            <img :src="feature.mobileSrc" :alt="feature.alt" class="md:hidden mx-auto mb-4 w-24 h-24" />
            <h4 class="text-xl font-semibold" v-html="feature.title"></h4>
            <p class="text-gray-700" v-html="feature.description"></p>
          </div>
        </div>
        <div id="it-infrastructure" class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div class="animate-slide-in-left">
            <img src="@/assets/images/4_files/it_infrastructure.png" alt="Global Transaction Banking" class="w-full rounded-lg" />
          </div>
          <div>
            <h2 class="text-3xl font-bold mb-4">IT<br><strong>Infrastructure</strong></h2>
            <p class="text-gray-700 mb-4">
              SunFlex has joined the system integration field and provided ICT Solutions Since 2010. Since then SunFlex has been key partner of world leading ICT and pioneering and successful enterprise in IT infrastructure solutions for Banking, MFI, Telecommunication, SMB…. Currently, SunFlex is one of the local Leading System integration solutions and Service providers in Cambodia.
            </p>
            <h6 class="font-semibold">Innovations that accelerate your digital transformation:</h6>
            <p class="text-gray-700 mb-4">
              Your IT solutions need to work together to create a solid foundation for your organization. Learn more about how IT infrastructure solutions are designed to complement each other and to propel your business into the future
            </p>
            <h6 class="font-semibold">Get Cloud-Ready</h6>
            <p class="text-gray-700 mb-4">
              Cloud is the new operating model for IT, and it’s transforming how business gets done. Now you can get superior results today and plan for tomorrow with a cloud-ready IT infrastructure that’s available in three consumption models—on premises, cloud at customer, and public cloud.
            </p>
            <router-link to="/it-infrastructure" class="inline-block bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600">Read More</router-link>
          </div>
        </div>
        <div id="networking-data-analytics" class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div class="order-last md:order-first animate-slide-in-right">
            <img src="@/assets/images/4_files/networking_data_analytics.png" alt="Trade and Supply Chain Finance Solutions" class="w-full rounded-lg" />
          </div>
          <div>
            <h2 class="text-3xl font-bold mb-4">Networking &amp; Data<br><strong>Analytics</strong></h2>
            <p class="text-gray-700 mb-4">
              Mindarray system has been innovating in networking and data analytics technologies. Today, we are positioned as a solution provider that is enabling enterprises and government sectors to streamline their IT operations using innovative modules like:
            </p>
            <ul class="list-disc pl-6 mb-4">
              <li>Infrastructure Intelligence Platform (IIP) for Network Management</li>
              <li>Data Analytics Platform (DAP) for Log Management & Flow Analytics</li>
              <li>ITSM Platform for IT Service Automation.</li>
            </ul>
            <p class="text-gray-700 mb-4">
              All offerings of Mindarray system come under the brand name of Motadata, which includes IT Infrastructure Monitoring, Log & Flow Management, and IT Service Management Platform. These are designed to provide operational insights into an IT infrastructure and identify & resolve complex problems to maximize the overall uptime of the services.
            </p>
            <router-link to="/networking-data-analytics" class="inline-block bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600">Read More</router-link>
          </div>
        </div>
        <div id="cloud-solutions" class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div class="animate-slide-in-left">
            <img src="@/assets/images/4_files/cloud_solution.png" alt="Trade and Supply Chain Finance Solutions" class="w-full rounded-lg" />
          </div>
          <div>
            <h2 class="text-3xl font-bold mb-4">Cloud<br><strong>Solutions</strong></h2>
            <h5 class="font-semibold mb-2">Public Cloud</h5>
            <p class="text-gray-700 mb-4">
              Public clouds are the most common way of deploying cloud computing which are all hardware, software, and other supporting infrastructure is owned and managed by the cloud provider. In a public cloud, you share the same hardware, storage, and network devices with other organizations or cloud “tenants.” Public cloud deployments are frequently used to provide web-based email, online office applications, storage, and testing and development environments.
            </p>
            <h5 class="font-semibold mb-2">Private Cloud</h5>
            <p class="text-gray-700 mb-4">
              A private cloud consists of computing resources used exclusively by one business or organization. The private cloud can be physically located at your organization’s on-site datacenter, or it can be hosted by a third-party service provider. But in a private cloud, the services and infrastructure are always maintained on a private network and the hardware and software are dedicated solely to your organization. In this way, a private cloud can make it easier for an organization to customize its resources to meet specific IT requirements.
            </p>
            <router-link to="/cloud-solutions" class="inline-block bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600">Read More</router-link>
          </div>
        </div>
        <div id="big-data" class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div class="order-last md:order-first animate-slide-in-right">
            <img src="@/assets/images/4_files/big_data.png" alt="Liquidity Management Solutions" class="w-full rounded-lg" />
          </div>
          <div>
            <h2 class="text-3xl font-bold mb-4">Big Data &amp;<br><strong>Data Warehouse</strong></h2>
            <p class="text-gray-700 mb-4">
              Big data is a combination of structured, semi-structured and unstructured data collected by organizations that can be mined for information and used in predictive modeling and other advanced analytics applications. Big data is often characterized by the 3 categories below:
            </p>
            <ul class="list-disc pl-6 mb-4">
              <li>the large volume of data in many environments,</li>
              <li>the wide variety of data types stored in big data systems</li>
              <li>the velocity at which the data is generated, collected and processed.</li>
            </ul>
            <p class="text-gray-700 mb-4">
              A Data Warehousing (DW) is process for collecting and managing data from varied sources to provide meaningful business insights. A Data warehouse is typically used to connect and analyze business data from heterogeneous sources. The data warehouse is the core of the BI system which is built for data analysis and reporting.
            </p>
            <router-link to="/big-data" class="inline-block bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600">Read More</router-link>
          </div>
        </div>
        <div id="digital-banking" class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div class="animate-slide-in-left">
            <img src="@/assets/images/4_files/digital_banking_solution.png" alt="Digital Payments Solutions" class="w-full rounded-lg" />
          </div>
          <div>
            <h2 class="text-3xl font-bold mb-4">Digital Banking<br><strong>Solutions</strong></h2>
            <h5 class="font-semibold mb-2">Digital Transaction Banking</h5>
            <p class="text-gray-700 mb-4">
              Digital technologies are upsetting the competitive order and the roles that payments play in the operations of businesses and in the lives of consumers. Yet these same disruptions are also creating tremendous opportunity for banks that can quickly adapt their long-term business strategies.
            </p>
            <h5 class="font-semibold mb-2">Digital Lending</h5>
            <p class="text-gray-700 mb-4">
              Digital lending is the process of offering loans that are applied for, disbursed, and managed through digital channels, in which lenders use digitized data to inform credit decisions and build intelligent customer engagement. Digital lending takes many shapes and forms – from automating small pieces, to a fully digital lending process, from acquisition to renewal. Digital lending isn’t just doing the same thing better, but rather creating something new.
            </p>
            <router-link to="/digital-banking" class="inline-block bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600">Read More</router-link>
          </div>
        </div>
        <div id="security-solutions" class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 class="text-3xl font-bold mb-4">Security<br><strong>Solutions</strong></h2>
            <h6 class="font-semibold mb-2">Complete view of vulnerabilities</h6>
            <p class="text-gray-700 mb-4">
              We provide detailed information on real security threats, help to identify the most critical and less significant vulnerabilities along with false positives, so then the Customer can prioritize remediation.
            </p>
            <h6 class="font-semibold mb-2">Regulatory compliance</h6>
            <p class="text-gray-700 mb-4">
              The detailed reports generated after penetration testing help to avoid fines for non-compliance and allow to illustrate due diligence to auditors by maintaining required security controls.
            </p>
            <h6 class="font-semibold mb-2">Proactive Remediation</h6>
            <p class="text-gray-700 mb-4">
              SunFlex takes the perspective of the adversary, finding weaknesses and helping you remediate before the bad guys can do damage.
            </p>
            <h6 class="font-semibold mb-2">Avoiding the cost of system/network downtime</h6>
            <p class="text-gray-700 mb-4">
              SunFlex team provides specific guidance and recommendations to avoid financial pitfalls by identifying and addressing risks before attacks or security breaches occur.
            </p>
            <router-link to="/security-solutions" class="inline-block bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600">Read More</router-link>
          </div>
          <div class="animate-slide-in-right">
            <img src="@/assets/images/4_files/it_security.png" alt="loan management system" class="w-full rounded-lg" />
          </div>
        </div>
        <div id="professional-services" class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 class="text-3xl font-bold mb-4">Professional Service<br><strong>Support</strong></h2>
            <p class="text-gray-700 mb-4">
              SunFlex (Cambodia) Co.,Ltd are operated base on industry expertise and resource standard qualification which is assure enterprises enhance their IT System’s stability to improve management capability, competitiveness and business performance base on following manners:
            </p>
            <ul class="list-disc pl-6 mb-4">
              <li><h6 class="font-semibold">System Service</h6></li>
              <li><h6 class="font-semibold">Database System Service</h6></li>
              <li><h6 class="font-semibold">IT Service</h6></li>
            </ul>
            <router-link to="/professional-services" class="inline-block bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600">Read More</router-link>
          </div>
          <div class="animate-slide-in-left">
            <img src="@/assets/images/4_files/pro_service_support.png" alt="Wealth Management Solutions" class="w-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import image1 from '@/assets/images/banner1.png';
import image2 from '@/assets/images/banner4.png';
import image3 from '@/assets/images/banner3.png';
import image4 from '@/assets/images/banner4.png';

export default {
  name: 'Home',
  data() {
    return {
      currentIndex: 0,
      isMobileMenuOpen: false,
      isProductsMenuOpen: false,
      isBlueMenuOpen: false,
      slides: [
        { desktopSrc: image1, mobileSrc: image1, alt: 'cash-management-solution', title: 'cash-management-solution' },
        { desktopSrc: image2, mobileSrc: image2, alt: 'banner-four', title: 'banner-four' },
        { desktopSrc: image3, mobileSrc: image3, alt: 'arx-webinar', title: 'arx-webinar' },
        { desktopSrc: image4, mobileSrc: image4, alt: 'arx-webinar-two', title: 'arx-webinar-two' }
      ],
      features: [
        {
          desktopSrc: require('@/assets/images/4_files/digitalacceleration.svg'),
          mobileSrc: require('@/assets/images/4_files/digitalacceleration_w.svg'),
          alt: 'digital acceleration',
          title: 'Private <strong>Cloud</strong>',
          description: 'Control and Flexibility, Security<br>Resource Availability.'
        },
        {
          desktopSrc: require('@/assets/images/4_files/architecture.svg'),
          mobileSrc: require('@/assets/images/4_files/openapis_w.svg'),
          alt: 'Digital Banking',
          title: 'Open<strong> Banking API</strong>',
          description: 'Prepare to comply. Prepare to complete.<br>60+ APIs available.'
        },
        {
          desktopSrc: require('@/assets/images/4_files/digitalchannels.svg'),
          mobileSrc: require('@/assets/images/4_files/digitalchannels_w.svg'),
          alt: 'Digital Channels',
          title: 'Big <strong>Data</strong>',
          description: 'Cost Savings, Time Reductions,<br>Understand the market conditions.'
        },
        {
          desktopSrc: require('@/assets/images/4_files/realtime.svg'),
          mobileSrc: require('@/assets/images/4_files/realtime_w.svg'),
          alt: 'realtime',
          title: 'ATM<strong> Machine</strong>',
          description: '24/7 banking services'
        },
        {
          desktopSrc: require('@/assets/images/4_files/joinedupbanking.svg'),
          mobileSrc: require('@/assets/images/4_files/joinedupbanking_w.svg'),
          alt: 'Joined up Banking',
          title: 'Penetration<strong> Testing</strong>',
          description: 'Detect and arrange security threats.'
        },
        {
          desktopSrc: require('@/assets/images/4_files/tomorrowchallenges.svg'),
          mobileSrc: require('@/assets/images/4_files/innovate_w.svg'),
          alt: 'tomorrow challenges',
          title: '<strong>Professional Service</strong> Support',
          description: '24/7 Remote and Onsite Support.'
        }
      ],
      intervalId: null
    };
  },
  mounted() {
    this.startAutoPlay();
    this.initAnimations();
  },
  beforeUnmount() {
    this.stopAutoPlay();
  },
  methods: {
    startAutoPlay() {
      this.intervalId = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      }, 3000);
    },
    stopAutoPlay() {
      clearInterval(this.intervalId);
    },
    goToSlide(index) {
      this.currentIndex = index;
      this.stopAutoPlay();
      this.startAutoPlay();
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    toggleProductsMenu() {
      this.isProductsMenuOpen = !this.isProductsMenuOpen;
    },
    toggleBlueMenu() {
      this.isBlueMenuOpen = !this.isBlueMenuOpen;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    initAnimations() {
      const elements = document.querySelectorAll('.animate-slide-in-left, .animate-slide-in-right');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-x-0');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });
      elements.forEach(el => observer.observe(el));
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

.home {
  @apply font-roboto;
}

.animate-slide-in-left {
  @apply opacity-0 -translate-x-10 transition-all duration-500;
}

.animate-slide-in-right {
  @apply opacity-0 translate-x-10 transition-all duration-500;
}
</style>
```