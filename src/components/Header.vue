<template>
  <header class="bg-white shadow-md">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo -->
      <div
        class="text-green-900 text-2xl font-bold leading-tight tracking-wide"
      >
        Sun<span class="font-serif italic">Flex</span>
        <div class="text-[10px] font-semibold text-green-800 tracking-wider">
          INFORMATION SYSTEM
        </div>
      </div>

      <!-- Hamburger for Mobile -->
      <button class="md:hidden" @click="menuOpen = !menuOpen">
        <i class="fas fa-bars text-black text-xl"></i>
      </button>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex space-x-10 text-gray-800 font-medium">
        <router-link
          to="/"
          :class="{ 'border-b-2 border-green-700 pb-1': $route.path === '/' }"
          @click="menuOpen = false"
        >
          Home
        </router-link>

        <div class="relative group">
          <router-link
            to="/products"
            :class="{
              'border-b-2 border-green-700 pb-1': $route.path === '/products'
            }"
            class="flex items-center gap-1"
            @click="menuOpen = false"
          >
            Products & Solutions
            <i class="fas fa-chevron-down text-sm mt-1"></i>
          </router-link>
          <!-- Dropdown -->
          <div
            class="absolute hidden group-hover:block bg-white text-black shadow-lg rounded mt-2 w-56 z-10"
          >
            <router-link
              to="/products/core-banking"
              class="block px-4 py-2 hover:bg-gray-100"
              >Core Banking</router-link
            >
            <router-link
              to="/products/payment-gateway"
              class="block px-4 py-2 hover:bg-gray-100"
              >Payment Gateway</router-link
            >
            <router-link
              to="/products/loan-origination"
              class="block px-4 py-2 hover:bg-gray-100"
              >Loan Origination</router-link
            >
          </div>
        </div>

        <router-link
          to="/partner"
          :class="{
            'border-b-2 border-green-700 pb-1': $route.path === '/partner'
          }"
          @click="menuOpen = false"
        >
          Our Partner
        </router-link>

        <router-link
          to="/about"
          :class="{
            'border-b-2 border-green-700 pb-1': $route.path === '/about'
          }"
          @click="menuOpen = false"
        >
          About Us
        </router-link>

        <router-link
          to="/career"
          :class="{
            'border-b-2 border-green-700 pb-1':
              $route.path.startsWith('/career')
          }"
          @click="menuOpen = false"
        >
          Career
        </router-link>
      </nav>
    </div>

    <!-- Mobile Nav -->
    <div v-if="menuOpen" class="md:hidden px-6 pb-4 space-y-2 text-gray-800">
      <router-link to="/" @click="setActive('Home')" class="block"
        >Home</router-link
      >
      <div>
        <button
          @click="toggleSub('products')"
          class="w-full text-left font-medium"
        >
          Products & Solutions
          <i class="fas fa-chevron-down text-sm ml-1"></i>
        </button>
        <div v-if="openSub.products" class="pl-4 space-y-1 text-sm">
          <router-link
            to="/products/core-banking"
            @click="menuOpen = false"
            class="block"
            >Core Banking</router-link
          >
          <router-link
            to="/products/payment-gateway"
            @click="menuOpen = false"
            class="block"
            >Payment Gateway</router-link
          >
          <router-link
            to="/products/loan-origination"
            @click="menuOpen = false"
            class="block"
            >Loan Origination</router-link
          >
        </div>
      </div>
      <router-link to="/partner" @click="setActive('Partner')" class="block"
        >Our Partner</router-link
      >
      <router-link to="/about" @click="setActive('About')" class="block"
        >About Us</router-link
      >
      <router-link to="/career" @click="setActive('Career')" class="block"
        >Career</router-link
      >
      <router-link to="/contact" @click="setActive('Contact')" class="block"
        >Contact Us</router-link
      >
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
      activePage: 'Home',
      openSub: {
        products: false
      }
    };
  },
  methods: {
    setActive(page) {
      this.activePage = page;
      this.menuOpen = false;
      this.openSub.products = false;
    },
    toggleSub(menu) {
      this.openSub[menu] = !this.openSub[menu];
    }
  }
};
</script>

<style scoped>
/* Optional: Adjust logo font if needed */
</style>
