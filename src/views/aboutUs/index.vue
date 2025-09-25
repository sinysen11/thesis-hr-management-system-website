<template>
  <div class="about bg-white font-roboto">
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
            <img src="https://www.sunflexcambodia.com/public/images/whatwedo.png" alt="menu" title="menu" class="w-8">
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
            <router-link to="/login" class="nav-link">
             <i class="fas fa-user text-xl"></i>
            </router-link>          
        </nav>
        </div>
      </div>
    </div>
    <!-- Desktop Header Ends -->

    <!-- Main Content -->
    <main class="content">
      <img src="@/assets/images/about_us.png" alt="About Us" class="intro__image" />
      <section class="intro container mx-auto px-4">
        <div class="intro__text">
          <p>
            SunFlex provides consistent processes and tools combined with the
            right skills at the right time and place. We design IT solutions that
            fit your unique requirements with a complete breadth of distributed IT
            solutions.
          </p>
          <p>
            Drawing on deep industry expertise and customize solutions, we blend
            strategic designs, using proven IT technologies, and world class
            service and support capability to create effective solutions that
            remove cost and complexity to maximize your returns on IT investment.
          </p>
          <p>
            With over three decades of industry experience, our solutions are
            built on innovation, expertise, independence, and flexibility.
          </p>
        </div>
      </section>

      <!-- We Distinguish Ourselves -->
      <section class="distinguish container mx-auto px-4">
        <h2 class="text-3xl font-bold text-blue-800 text-center">We distinguish ourselves by being ourselves</h2>
        <ul class="distinguish__list">
          <li>
            <strong>Our People:</strong> Formal and on-going management,
            technical, sales training, development & certification programs –
            Staying ahead of IT business trends.
          </li>
          <li>
            <strong>Our Scope:</strong> Support Standards and “End-to-End
            Solutions”
          </li>
          <li>
            <strong>Our Processes:</strong> Best practices, consistent support,
            and highest customer satisfaction ratings resulting in repeatable
            Long-Term engagements as opposed to a general approach to supporting
            clients.
          </li>
          <li>
            <strong>Your Flexibility:</strong> Long-Standing Customer and Partner
            Relationships!
          </li>
        </ul>
      </section>

      <!-- What We Do & Corporate Vision -->
      <section class="info container mx-auto px-4 py-8">
        <div class="info__card">
          <h2 class="text-2xl font-bold text-blue-800">What we do</h2>
          <div class="info__content">
            <img src="@/assets/images/4_files/whatwedo.png" alt="What we do" class="rounded-lg" />
            <p>
              We provide consultancy, systems integration, project management,
              service Maintenance support, selling IT equipment sparepart and IT
              equipment rental with our team of highly specialized and dedicated
              professionals.
            </p>
          </div>
        </div>
        <div class="info__card">
          <h2 class="text-2xl font-bold text-blue-800">Corporate Vision</h2>
          <div class="info__content">
            <img src="@/assets/images/4_files/vision.png" alt="Corporate Vision" class="rounded-lg" />
            <p>To be number 1 of ICT industry in Cambodia.</p>
          </div>
        </div>
      </section>

      <!-- Our Mission & Core Values -->
      <section class="mission-values container mx-auto px-4 py-8">
        <div class="mission-values__card">
          <h2 class="text-2xl font-bold text-blue-800">Our Mission</h2>
          <div class="mission-values__content">
            <img src="@/assets/images/4_files/mission.png" alt="Our Mission" class="rounded-lg" />
            <p>
              SunFlex is committed to delivering quality technology solutions and
              professional outsourcing service that provide true value to our
              clients, enabling them to achieve their desired goals and
              initiative.
            </p>
            <p>
              <strong>Our Goal:</strong> Treat every customer in such a memorable
              way that when the service is complete, the customer tells someone
              else how FANTASTIC and ENJOYABLE it was.
            </p>
          </div>
        </div>
        <div class="mission-values__card">
          <h2 class="text-2xl font-bold text-blue-800">Core Values</h2>
          <div class="mission-values__content">
            <ul>
              <li>
                <strong>Values:</strong> Adding tangible and recognized value to
                clients business.
              </li>
              <li>
                <strong>Integrity:</strong> Exercising impeccable integrity in all
                of our business dealing.
              </li>
              <li>
                <strong>Excellence & Quality:</strong> Delivering quality through
                technical and managerial excellence.
              </li>
              <li>
                <strong>Teamwork:</strong> Demonstrating team work and mutual
                respect in all of our relationship.
              </li>
              <li>
                <strong>Strength:</strong> Assuring the commercial strength of the
                business.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>

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
export default {
  name: 'About',
  data() {
    return {
      isMobileMenuOpen: false,
      isProductsMenuOpen: false
    };
  },
  methods: {
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

.about {
  @apply font-roboto;
}

/* Hero and Intro Section */
.intro__image {
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 20px;
}

.intro__text p {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
}

/* Distinguish Section */
.distinguish__list {
  list-style: none;
  padding: 0;
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.6;
}

.distinguish__list li {
  margin-bottom: 20px;
  padding-left: 20px;
  position: relative;
}

.distinguish__list li::before {
  content: '•';
  color: #003087;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}

/* Info, Mission & Values Sections */
.info,
.mission-values {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.info__card,
.mission-values__card {
  background: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}

.info__content img,
.mission-values__content img {
  width: 100%;
  max-width: 200px;
  height: auto;
  margin-bottom: 15px;
  border-radius: 8px;
}

.mission-values__content ul {
  list-style: none;
  padding: 0;
}

.mission-values__content ul li {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 10px;
}
</style>