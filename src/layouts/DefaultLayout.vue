<template>
  <div class="layout bg-white font-roboto">
    <!-- Google Tag Manager (noscript) -->
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-P2GWKJ7"
        height="0"
        width="0"
        style="display: none; visibility: hidden"
      ></iframe>
    </noscript>
    <!-- End Google Tag Manager (noscript) -->

    <!-- Browser Compatibility Warning -->
    <!--[if lt IE 8]>
      <p class="ancient-browser-alert text-center p-4 bg-red-100 text-red-700">
        You are using an <strong>outdated</strong> browser. Please <a
        href="http://browsehappy.com/" target="_blank" class="underline">upgrade
        your browser</a>.
      </p>
    <![endif]-->

    <!-- Mobile Header -->
    <div class="mobheader md:hidden bg-white shadow-sm py-4">
      <div class="container mx-auto flex items-center justify-between px-4">
        <div class="w-1/6">
          <button
            class="mnav"
            @click="toggleMobileMenu"
            aria-label="Toggle menu"
          >
            <img
              src="@/assets/images/4_files/menu.svg"
              alt="menu"
              title="menu"
              class="w-8"
            />
          </button>
        </div>
        <div class="w-4/6 text-center">
          <router-link to="/">
            <img
              src="@/assets/images/4_files/logo.png"
              alt="SunFlex (Cambodia) Co.,Ltd"
              title="SunFlex (Cambodia) Co.,Ltd"
              class="max-w-[150px] mx-auto"
            />
          </router-link>
        </div>
        <div class="w-1/6"></div>
        <div
          class="mobflmenu fixed inset-0 bg-white z-50 transition-transform duration-300"
          :class="{ 'translate-x-0': isMobileMenuOpen, 'translate-x-full': !isMobileMenuOpen }"
        >
          <div class="container mx-auto flex items-center justify-between px-4 py-4">
            <div class="w-1/6"></div>
            <div class="w-4/6 text-center">
              <router-link to="/">
                <img
                  src="@/assets/images/4_files/logo.png"
                  alt="SunFlex (Cambodia) Co.,Ltd"
                  title="SunFlex (Cambodia) Co.,Ltd"
                  class="max-w-[150px] mx-auto"
                />
              </router-link>
            </div>
            <div class="w-1/6 text-right">
              <button
                class="closebut"
                @click="toggleMobileMenu"
                aria-label="Close menu"
              >
                <img
                  src="@/assets/images/4_files/closew.svg"
                  alt="close"
                  title="close"
                  class="w-8"
                />
              </button>
            </div>
          </div>
          <div class="px-4">
            <ul class="mtree space-y-4">
              <li class="text-[#2d6f54] font-medium">
                <router-link
                  to="/"
                  class="hover:underline py-1 px-2 rounded transition-colors duration-200"
                  :class="{ 'text-[#2e6d56] font-bold underline': $route.path === '/' }"
                  >Home</router-link>
              </li>
              <li class="text-[#2d6f54] font-medium">
                <a
                  href="#"
                  @click.prevent="toggleProductsMenu"
                  class="hover:underline flex justify-between items-center py-1 px-2 rounded transition-colors duration-200"
                  :class="{ 'text-[#2e6d56] font-bold underline': $route.path.includes('/products') || isProductsMenuOpen }"
                  aria-expanded="isProductsMenuOpen"
                  aria-controls="products-menu"
                >
                  Products & Solutions
                  <span
                    :class="{ 'rotate-180': isProductsMenuOpen }"
                    class="transition-transform duration-200"
                  >▼</span>
                </a>
                <ul
                  id="products-menu"
                  class="pl-4 space-y-2 transition-all duration-300"
                  :class="{ hidden: !isProductsMenuOpen }"
                >
                  <li v-for="item in mainContents" :key="item.id">
                    <a
                      :href="`#${item.slug}`"
                      class="hover:underline text-gray-700 text-start transition-colors duration-200 py-1 px-2 rounded"
                      @click.prevent="scrollToSection(item.slug)"
                    >
                      {{ item.title }}
                    </a>
                  </li>
                </ul>
              </li>
              <li class="text-[#2d6f54] font-medium">
                <router-link
                  to="/about-us"
                  class="hover:underline py-1 px-2 rounded transition-colors duration-200"
                  :class="{ 'text-[#2e6d56] font-bold underline': $route.path === '/about-us' }"
                  >About Us</router-link>
              </li>
              <li class="text-[#2d6f54] font-medium">
                <router-link
                  to="/contact-us"
                  class="hover:underline py-1 px-2 rounded transition-colors duration-200"
                  :class="{ 'text-[#2e6d56] font-bold underline': $route.path === '/contact-us' }"
                  >Contact Us</router-link>
              </li>
              <li class="text-[#2d6f54] font-medium">
                <router-link
                  to="/career"
                  class="hover:underline py-1 px-2 rounded transition-colors duration-200"
                  :class="{ 'text-[#2e6d56] font-bold underline': $route.path.includes('/career') }"
                  >Careers</router-link>
              </li>
              <li class="text-[#2d6f54] font-medium">
                <router-link
                  to="/our-partner"
                  class="hover:underline py-1 px-2 rounded transition-colors duration-200"
                  :class="{ 'text-[#2e6d56] font-bold underline': $route.path === '/our-partner' }"
                  >Our Partner</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- Mobile Header Ends -->

    <!-- Desktop Header -->
    <div class="header headsh homeheader hidden md:block shadow-sm py-4">
      <div class="container mx-auto flex items-center justify-between">
        <div class="w-1/6">
          <router-link to="/">
            <img
              src="@/assets/images/4_files/logo.png"
              alt="SunFlex (Cambodia) Co.,Ltd"
              title="SunFlex (Cambodia) Co.,Ltd"
              class="w-[170px]"
            />
          </router-link>
        </div>
        <div class="w-5/6 text-right">
          <nav class="mega-menu flex justify-end space-x-4 items-center">
            <router-link
              to="/"
              class="text-gray-700 hover:text-[#2d6f54] font-medium py-1 px-2 rounded transition-colors duration-200"
              :class="{ 'text-[#2e6d56] font-bold underline': $route.path === '/' }"
              >Home</router-link>
            <div class="relative group">
              <a
                href="#"
                class="text-gray-700 hover:text-[#2d6f54] font-medium py-1 px-2 rounded transition-colors duration-200"
                :class="{ 'text-[#2e6d56] font-bold underline': $route.path.includes('/products') || isProductsMenuOpen }"
                @click.prevent="toggleProductsMenu"
                aria-expanded="isProductsMenuOpen"
                aria-controls="products-menu-desktop"
              >
                Products & Solutions
              </a>
              <ul
                id="products-menu-desktop"
                class="absolute hidden group-hover:block bg-gray-100 shadow-lg p-4 w-[600px] z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
              >
                <li class="mega-menu-row selectionShareable" id="mega-menu-5425-0">
                  <ul class="mega-sub-menu flex bg-green-100">
                    <li class="mega-menu-column mega-menu-columns-6-of-12 selectionShareable" id="mega-menu-5425-0-0">
                      <ul class="mega-sub-menu">
                        <li class="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-5340 selectionShareable" id="mega-menu-item-5340">
                          <a class="mega-menu-link block py-2 text-gray-700 hover:text-[#2d6f54] transition-colors duration-200 px-2 rounded" href="#it_infrastructure">IT Infrastructure</a>
                        </li>
                        <li class="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-5340 selectionShareable" id="mega-menu-item-5340">
                          <a class="mega-menu-link block py-2 text-gray-700 hover:text-[#2d6f54] transition-colors duration-200 px-2 rounded" href="#networking_data_analytics">Networking Data Analytics</a>
                        </li>
                        <li class="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-5243 selectionShareable" id="mega-menu-item-5243">
                          <a class="mega-menu-link block py-2 text-gray-700 hover:text-[#2d6f54] transition-colors duration-200 px-2 rounded" href="#cloud_solution">Cloud Solutions</a>
                        </li>
                        <li class="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-5305 selectionShareable" id="mega-menu-item-5305">
                          <a class="mega-menu-link block py-2 text-gray-700 hover:text-[#2d6f54] transition-colors duration-200 px-2 rounded" href="#big_data_data_warehouse">Big Data, Data Warehouse</a>
                        </li>
                      </ul>
                    </li>
                    <li class="mega-menu-column mega-menu-columns-6-of-12 selectionShareable" id="mega-menu-5425-0-1">
                      <ul class="mega-sub-menu">
                        <li class="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-5827 selectionShareable" id="mega-menu-item-5827">
                          <a class="mega-menu-link block py-2 text-gray-700 hover:text-[#2d6f54] transition-colors duration-200 px-2 rounded" href="#security_solution">Security Solutions</a>
                        </li>
                        <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-4887 selectionShareable" id="mega-menu-item-4887">
                          <a class="mega-menu-link block py-2 text-gray-700 hover:text-[#2d6f54] transition-colors duration-200 px-2 rounded" href="#professional_service_support">Professional Service Support</a>
                        </li>
                        <li class="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-5242 selectionShareable" id="mega-menu-item-5242">
                          <a class="mega-menu-link block py-2 text-gray-700 hover:text-[#2d6f54] transition-colors duration-200 px-2 rounded" href="#digital_banking_solution">Digital Banking Solutions</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <router-link
              to="/career"
              class="text-gray-700 hover:text-[#2d6f54] font-medium py-1 px-2 rounded transition-colors duration-200"
              :class="{ 'text-[#2e6d56] font-bold underline': $route.path.includes('/career') }"
              >Careers</router-link>
            <router-link
              to="/our-partner"
              class="text-gray-700 hover:text-[#2d6f54] font-medium py-1 px-2 rounded transition-colors duration-200"
              :class="{ 'text-[#2e6d56] font-bold underline': $route.path === '/our-partner' }"
              >Our Partner</router-link>
            <router-link
              to="/about-us"
              class="text-gray-700 hover:text-[#2d6f54] font-medium py-1 px-2 rounded transition-colors duration-200"
              :class="{ 'text-[#2e6d56] font-bold underline': $route.path === '/about-us' }"
              >About Us</router-link>
            <router-link
              to="/contact-us"
              class="text-gray-700 hover:text-[#2d6f54] font-medium py-1 px-2 rounded transition-colors duration-200"
              :class="{ 'text-[#2e6d56] font-bold underline': $route.path === '/contact-us' }"
              >Contact Us</router-link>
            <div class="relative group">
              <router-link
                to="/login"
                class="text-gray-700 hover:text-[#2d6f54] py-1 px-2 rounded transition-colors duration-200"
                :class="{ 'text-[#2e6d56] font-bold underline': $route.path === '/login' || $route.path === '/signup' }"
              >
                <i class="fas fa-user text-xl" :title="username"></i>
              </router-link>
              <div
                class="absolute right-0 mt-2 hidden group-hover:block bg-white shadow-lg p-2 rounded text-sm text-gray-700 z-10"
              >
                {{ username || 'Guest' }}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <!-- Desktop Header Ends -->

    <router-view></router-view>

    <!-- Desktop Footer -->
    <div class="deskfoot hidden md:block bg-[#2d6f54] text-white py-8">
      <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div class="text-sm">
          <span>©2025 by SunFlex (Cambodia) Co.,Ltd<br />Best viewed with IE 9+, Firefox 16+, Safari 5.1, Chrome 23+.</span>
        </div>
        <nav class="flex space-x-4 my-4 md:my-0">
          <router-link
            to="/"
            class="text-white hover:underline font-medium py-1 px-2 rounded transition-colors duration-200"
            :class="{ 'text-[#2e6d56] font-bold underline': $route.path === '/' }"
            >Home</router-link>
          <div class="relative group">
            <a
              href="#"
              class="text-white hover:underline font-medium py-1 px-2 rounded transition-colors duration-200"
              :class="{ 'text-[#2e6d56] font-bold underline': $route.path.includes('/products') || isProductsMenuOpen }"
              @click.prevent="toggleProductsMenu"
              aria-expanded="isProductsMenuOpen"
              aria-controls="products-menu-footer"
            >
              Products & Solutions
            </a>
            <ul
              id="products-menu-footer"
              class="absolute hidden group-hover:block bg-gray-100 shadow-lg p-4 w-[600px] z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
            >
              <li class="mega-menu-row selectionShareable" id="mega-menu-5425-0">
                <ul class="mega-sub-menu flex bg-green-100">
                  <li class="mega-menu-column mega-menu-columns-6-of-12 selectionShareable" id="mega-menu-5425-0-0">
                    <ul class="mega-sub-menu">
                      <li class="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-5340 selectionShareable" id="mega-menu-item-5340">
                        <a class="mega-menu-link block py-2 text-gray-700 hover:text-[#2d6f54] transition-colors duration-200 px-2 rounded" href="#it_infrastructure">IT Infrastructure</a>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-5340 selectionShareable" id="mega-menu-item-5340">
                        <a class="mega-menu-link block py-2 text-gray-700 hover:text-[#2d6f54] transition-colors duration-200 px-2 rounded" href="#networking_data_analytics">Networking Data Analytics</a>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-5243 selectionShareable" id="mega-menu-item-5243">
                        <a class="mega-menu-link block py-2 text-gray-700 hover:text-[#2d6f54] transition-colors duration-200 px-2 rounded" href="#cloud_solution">Cloud Solutions</a>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-5305 selectionShareable" id="mega-menu-item-5305">
                        <a class="mega-menu-link block py-2 text-gray-700 hover:text-[#2d6f54] transition-colors duration-200 px-2 rounded" href="#big_data_data_warehouse">Big Data, Data Warehouse</a>
                      </li>
                    </ul>
                  </li>
                  <li class="mega-menu-column mega-menu-columns-6-of-12 selectionShareable" id="mega-menu-5425-0-1">
                    <ul class="mega-sub-menu">
                      <li class="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-5827 selectionShareable" id="mega-menu-item-5827">
                        <a class="mega-menu-link block py-2 text-gray-700 hover:text-[#2d6f54] transition-colors duration-200 px-2 rounded" href="#security_solution">Security Solutions</a>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-4887 selectionShareable" id="mega-menu-item-4887">
                        <a class="mega-menu-link block py-2 text-gray-700 hover:text-[#2d6f54] transition-colors duration-200 px-2 rounded" href="#professional_service_support">Professional Service Support</a>
                      </li>
                      <li class="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-5242 selectionShareable" id="mega-menu-item-5242">
                        <a class="mega-menu-link block py-2 text-gray-700 hover:text-[#2d6f54] transition-colors duration-200 px-2 rounded" href="#digital_banking_solution">Digital Banking Solutions</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <router-link
            to="/career"
            class="text-white hover:underline font-medium py-1 px-2 rounded transition-colors duration-200"
            :class="{ 'text-[#2e6d56] font-bold underline': $route.path.includes('/career') }"
            >Careers</router-link>
          <router-link
            to="/our-partner"
            class="text-white hover:underline font-medium py-1 px-2 rounded transition-colors duration-200"
            :class="{ 'text-[#2e6d56] font-bold underline': $route.path === '/our-partner' }"
            >Our Partner</router-link>
          <router-link
            to="/about-us"
            class="text-white hover:underline font-medium py-1 px-2 rounded transition-colors duration-200"
            :class="{ 'text-[#2e6d56] font-bold underline': $route.path === '/about-us' }"
            >About Us</router-link>
          <router-link
            to="/contact-us"
            class="text-white hover:underline font-medium py-1 px-2 rounded transition-colors duration-200"
            :class="{ 'text-[#2e6d56] font-bold underline': $route.path === '/contact-us' }"
            >Contact Us</router-link>
        </nav>
        <div class="text-right">
          <b class="text-3xl font-bold">SunFlex</b>
        </div>
      </div>
      <button class="fixed bottom-4 right-4" @click="scrollToTop">
        <img src="@/assets/images/4_files/scroll-up.png" alt="scroll-up" title="scroll-up" class="w-10" />
      </button>
    </div>
    <!-- Desktop Footer Ends -->

    <!-- Mobile Footer -->
    <div class="mobilefoot md:hidden bg-[#2d6f54] text-white py-8 text-center">
      <button class="mb-4" @click="scrollToTop">
        <img src="@/assets/images/4_files/scroll-up.png" alt="scroll-up" title="scroll-up" class="w-10 mx-auto" />
      </button>
      <nav class="mb-4">
        <ul class="space-y-2">
          <li>
            <router-link
              to="/"
              class="text-white hover:underline font-medium py-1 px-2 rounded transition-colors duration-200"
              :class="{ 'text-[#2e6d56] font-bold underline': $route.path === '/' }"
              >Home</router-link>
          </li>
          <li>
            <a
              href="#"
              class="text-white hover:underline font-medium py-1 px-2 rounded transition-colors duration-200"
              :class="{ 'text-[#2e6d56] font-bold underline': $route.path.includes('/products') || isProductsMenuOpen }"
              @click.prevent="toggleProductsMenu"
              aria-expanded="isProductsMenuOpen"
              aria-controls="products-menu-mobile-footer"
            >
              Products & Solutions
            </a>
            <ul
              id="products-menu-mobile-footer"
              class="pl-4 space-y-2 transition-all duration-300"
              :class="{ hidden: !isProductsMenuOpen }"
            >
              <li v-for="item in mainContents" :key="item.id">
                <a
                  :href="`#${item.slug}`"
                  class="text-white hover:underline text-start transition-colors duration-200 py-1 px-2 rounded"
                  @click.prevent="scrollToSection(item.slug)"
                >
                  {{ item.title }}
                </a>
              </li>
            </ul>
          </li>
          <li>
            <router-link
              to="/career"
              class="text-white hover:underline font-medium py-1 px-2 rounded transition-colors duration-200"
              :class="{ 'text-[#2e6d56] font-bold underline': $route.path.includes('/career') }"
              >Careers</router-link>
          </li>
          <li>
            <router-link
              to="/our-partner"
              class="text-white hover:underline font-medium py-1 px-2 rounded transition-colors duration-200"
              :class="{ 'text-[#2e6d56] font-bold underline': $route.path === '/our-partner' }"
              >Our Partner</router-link>
          </li>
          <li>
            <router-link
              to="/about-us"
              class="text-white hover:underline font-medium py-1 px-2 rounded transition-colors duration-200"
              :class="{ 'text-[#2e6d56] font-bold underline': $route.path === '/about-us' }"
              >About Us</router-link>
          </li>
          <li>
            <router-link
              to="/contact-us"
              class="text-white hover:underline font-medium py-1 px-2 rounded transition-colors duration-200"
              :class="{ 'text-[#2e6d56] font-bold underline': $route.path === '/contact-us' }"
              >Contact Us</router-link>
          </li>
        </ul>
      </nav>
      <ul class="flex justify-center space-x-4 mb-4">
        <li>
          <a href="https://www.linkedin.com">
            <img src="@/assets/images/4_files/linkedinw.svg" alt="linkedin" title="linkedin" class="w-8" />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com">
            <img src="@/assets/images/4_files/twitter-logow.svg" alt="twitter" title="twitter" class="w-8" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com">
            <img src="@/assets/images/4_files/facebook-letter-logow.svg" alt="facebook" title="facebook" class="w-8" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com">
            <img src="@/assets/images/4_files/youtube-symbolw.svg" alt="youtube" title="youtube" class="w-8" />
          </a>
        </li>
      </ul>
      <p>© SunFlex (Cambodia) Co.,Ltd, 2025</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      isMobileMenuOpen: false,
      isProductsMenuOpen: false,
      username: '',
      mainContents: [
        { id: '1', title: 'IT Infrastructure', slug: 'it_infrastructure' },
        { id: '2', title: 'Networking Data Analytics', slug: 'networking_data_analytics' },
        { id: '3', title: 'Cloud Solutions', slug: 'cloud_solution' },
        { id: '4', title: 'Big Data, Data Warehouse', slug: 'big_data_data_warehouse' },
        { id: '5', title: 'Digital Banking Solutions', slug: 'digital_banking_solution' },
        { id: '6', title: 'Security Solutions', slug: 'security_solution' },
        { id: '7', title: 'Professional Service Support', slug: 'professional_service_support' }
      ]
    };
  },
  mounted() {
    this.loadUsername();
    this.initAnimations();
  },
  methods: {
    initAnimations() {
      const elements = document.querySelectorAll('.animate-slide-in-left, .animate-slide-in-right');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('opacity-100', 'translate-x-0');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );
      elements.forEach((el) => observer.observe(el));
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      this.isProductsMenuOpen = false;
    },
    toggleProductsMenu() {
      this.isProductsMenuOpen = !this.isProductsMenuOpen;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    scrollToSection(slug) {
      this.isMobileMenuOpen = false;
      this.isProductsMenuOpen = false;
      const element = document.getElementById(slug);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        element.classList.add('highlight');
        setTimeout(() => element.classList.remove('highlight'), 2000);
      } else {
        this.$router.push('/').then(() => {
          this.$nextTick(() => {
            const el = document.getElementById(slug);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              el.classList.add('highlight');
              setTimeout(() => el.classList.remove('highlight'), 2000);
            }
          });
        });
      }
    },
    loadUsername() {
      const userData = localStorage.getItem('user');
      if (userData) {
        try {
          const parsedData = JSON.parse(userData);
          this.username = `${parsedData.data.first_name} ${parsedData.data.last_name}`;
        } catch (error) {
          console.error('Error parsing user data:', error);
          this.username = 'Guest';
        }
      } else {
        this.username = 'Guest';
      }
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

.layout {
  @apply font-roboto;
}

.mtree li a,
.mega-menu a,
.deskfoot a,
.mobilefoot a {
  @apply transition-colors duration-200 ease-in-out;
}

.mega-menu .group ul,
.deskfoot .group ul {
  @apply transition-all duration-200 ease-in-out;
}

.mtree ul {
  @apply transition-all duration-300 ease-in-out;
}

.header {
  border: 3px solid #303133;
}

.highlight {
  @apply border-l-4 border-blue-600 bg-blue-50;
  transition: all 0.3s ease-in-out;
}

.group:hover .fa-user {
  @apply text-[#2d6f54];
}

.mega-sub-menu.flex {
  display: flex;
  justify-content: space-between;
}

.mega-menu-column {
  flex: 0 0 50%;
}
</style>