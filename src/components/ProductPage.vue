<template>
  <!-- Main Content -->
  <div class="mainbanner relative">
    <div class="relative overflow-hidden">
      <div
        class="flex transition-transform duration-500"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div v-for="(slide, index) in slides" :key="index" class="w-full flex-shrink-0">
          <div class="relative">
            <picture>
              <source media="(max-width: 768px)" :srcset="slide.mobileSrc" />
              <img
                :src="slide.desktopSrc"
                :alt="slide.alt"
                :title="slide.alt"
                class="w-full h-[500px] object-cover"
              />
            </picture>
            <div
              class="absolute inset-0 flex items-center justify-center text-white text-center"
            >
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
          :class="{
            'bg-[#2d6f54]': currentIndex === index,
            'bg-white': currentIndex !== index,
          }"
          class="w-3 h-3 rounded-full cursor-pointer border-2 border-white"
          @click="goToSlide(index)"
        ></li>
      </ul>
    </div>
  </div>
  <div class="product-page bg-gray-100 font-roboto py-12">
    <div class="container mx-auto px-4">
      <!-- Welcome Section -->
      <div class="text-center mb-12">
        <h1 class="text-3xl md:text-4xl font-bold text-[#2d6f54]">
          Welcome to <strong>SunFlex (Cambodia) Co.,Ltd</strong>
        </h1>
        <p class="text-gray-700 mt-4 max-w-3xl mx-auto leading-relaxed">
          SunFlex provides consistent processes and tools combined with the right skills
          at the right time and place. We design IT solutions that fit your unique
          requirements with a complete breadth of distributed IT solutions.
        </p>
        <p class="text-gray-700 mt-4 max-w-3xl mx-auto leading-relaxed">
          Drawing on deep industry expertise and customized solutions, we blend strategic
          designs, using proven IT technologies, and world-class service and support
          capability to create effective solutions that remove cost and complexity to
          maximize your returns on IT investment.
        </p>
        <p class="text-gray-700 mt-4 max-w-3xl mx-auto leading-relaxed">
          With over a decade of industry experience, our solutions are built on
          innovation, expertise, independence, and flexibility.
        </p>
      </div>

      <!-- Product Sections -->
      <div v-if="!isLoading && !error" class="space-y-12">
        <div
          v-for="(item, index) in mainContents"
          :key="item.id"
          :id="item.slug"
          class="vc_row bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
        >
          <div
            class="flex flex-col md:flex-row items-center"
            :class="{ 'md:flex-row-reverse': index % 2 === 1 }"
          >
            <!-- Image -->
            <div class="w-full md:w-1/2 p-6">
              <img
                :src="
                  item.images && item.images.length
                    ? `/images/${item.images[0]}`
                    : '/images/placeholder.png'
                "
                :alt="item.title"
                class="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <!-- Content -->
            <div class="w-full md:w-1/2 p-6">
              <h2 class="text-2xl md:text-3xl font-bold text-[#2d6f54] mb-4">
                {{ item.title }}
              </h2>
              <p class="text-gray-700 mb-4 leading-relaxed">{{ item.description }}</p>
              <button
                @click="toggleTabContent(item.id, item.title, item.description)"
                class="inline-block bg-[#2d6f54] text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
                :aria-expanded="activeTabId === item.id"
                :aria-controls="'tab-content-' + item.id"
              >
                {{ activeTabId === item.id ? "Close" : "Read More" }}
              </button>
            </div>
          </div>
          <!-- Tab Content -->
          <div
            v-if="activeTabId === item.id && tabContent.length > 0"
            :id="'tab-content-' + item.id"
            class="p-6 bg-gray-50 border-t border-gray-200 animate-fade-in"
          >
            <div v-for="tab in tabContent" :key="tab._id" class="mb-6">
              <h3 class="text-xl font-semibold text-gray-800 mb-3">{{ tab.title }}</h3>
              <ul class="list-disc pl-6 space-y-2">
                <li v-for="point in tab.points" :key="point" class="text-gray-600">
                  {{ point }}
                </li>
              </ul>
            </div>
          </div>
          <p v-if="activeTabId === item.id && isTabLoading" class="p-6 text-gray-500">
            Loading tab content...
          </p>
          <p v-if="activeTabId === item.id && tabError" class="p-6 text-red-500">
            {{ tabError }}
          </p>
        </div>
      </div>
      <p v-if="isLoading" class="text-center text-gray-500">Loading products...</p>
      <p v-if="error" class="text-center text-red-500">{{ error }}</p>
    </div>
  </div>
</template>

<script>
import { getAllMainContent, getAllTabContent } from '@/services/product-solution';
import image1 from '@/assets/images/banner1.png';
import image2 from '@/assets/images/banner4.png';
import image3 from '@/assets/images/banner3.png';
import image4 from '@/assets/images/banner4.png';
export default {
  name: 'ProductPage',
  data() {
    return {
      mainContents: [],
      tabContent: [],
      activeTabId: null,
      selectedProductTitle: '',
      selectedProductDescription: '',
      isLoading: false,
      isTabLoading: false,
      error: null,
      tabError: null,
      currentIndex: 0,
      isMobileMenuOpen: false,
      isProductsMenuOpen: false,
      isBlueMenuOpen: false,
      slides: [
        {
          desktopSrc: image1,
          mobileSrc: image1,
          alt: 'cash-management-solution',
          title: 'cash-management-solution'
        },
        {
          desktopSrc: image2,
          mobileSrc: image2,
          alt: 'banner-four',
          title: 'banner-four'
        },
        {
          desktopSrc: image3,
          mobileSrc: image3,
          alt: 'arx-webinar',
          title: 'arx-webinar'
        },
        {
          desktopSrc: image4,
          mobileSrc: image4,
          alt: 'arx-webinar-two',
          title: 'arx-webinar-two'
        }
      ]
    };
  },
  methods: {
    async fetchMainContents() {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await getAllMainContent();
        if (response && response.status === 1 && response.data) {
          this.mainContents = response.data
            .filter((item) => item.status === 'ACTIVE')
            .map((item) => ({
              id: item._id,
              type: item.type,
              title: item.title,
              slug: item.title.toLowerCase().replace(/\s+/g, '-'),
              description: item.description,
              images: item.images
            }));
        } else {
          this.error = 'No active products found';
        }
      } catch (error) {
        this.error = 'Failed to fetch products';
        console.error('Error fetching main contents:', error);
      } finally {
        this.isLoading = false;
      }
    },
    async fetchTabContent(mainContentId, title, description) {
      this.isTabLoading = true;
      this.tabError = null;
      this.tabContent = [];
      this.selectedProductTitle = title;
      this.selectedProductDescription = description;
      try {
        const response = await getAllTabContent(mainContentId);
        if (response && response.status === 1 && response.data) {
          this.tabContent = response.data.filter((item) => item.status === 'ACTIVE');
        } else {
          this.tabError = 'No active tab content found';
        }
      } catch (error) {
        this.tabError = 'Failed to fetch tab content';
        console.error('Error fetching tab content:', error);
      } finally {
        this.isTabLoading = false;
      }
    },
    toggleTabContent(mainContentId, title, description) {
      if (this.activeTabId === mainContentId) {
        this.activeTabId = null;
        this.tabContent = [];
        this.selectedProductTitle = '';
        this.selectedProductDescription = '';
      } else {
        this.activeTabId = mainContentId;
        this.fetchTabContent(mainContentId, title, description);
      }
    },
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
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    scrollToProduct(slug) {
      this.$router.push(`/products/${slug}`).then(() => {
        this.$nextTick(() => {
          const element = document.getElementById(slug);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            element.classList.add('highlight');
            setTimeout(() => element.classList.remove('highlight'), 2000);
          }
        });
      });
    },
    initAnimations() {
      const elements = document.querySelectorAll(
        '.animate-slide-in-left, .animate-slide-in-right'
      );
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
    }
  },
  mounted() {
    this.startAutoPlay();
    this.initAnimations();
    this.fetchMainContents();
    this.fetchMainContents();
    // Scroll to section if slug is provided in route
    this.$nextTick(() => {
      const slug = this.$route.params.slug;
      if (slug) {
        const element = document.getElementById(slug);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          element.classList.add('highlight');
          setTimeout(() => element.classList.remove('highlight'), 2000);
        }
      }
    });
  }
};
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@font-face {
  font-family: "Roboto";
  src: url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=block");
}

.product-page {
  @apply font-roboto min-h-screen;
}

.vc_row {
  @apply transition-all duration-300;
}

.animate-fade-in {
  animation: fade-in 0.3s ease-in-out;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.highlight {
  @apply border-l-4 border-blue-600 bg-blue-50;
  transition: all 0.3s ease-in-out;
}
</style>
