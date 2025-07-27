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
      <nav
        class="hidden md:flex space-x-10 text-gray-800 font-medium items-center"
      >
        <router-link
          to="/"
          :class="{ 'border-b-2 border-green-700 pb-1': $route.path === '/' }"
          @click="menuOpen = false"
        >
          Home
        </router-link>

        <router-link
          to="/about-us"
          :class="{
            'border-b-2 border-green-700 pb-1': $route.path === '/about-us'
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

        <!-- User Icon for Login -->
        <router-link
          to="/login"
          class="text-gray-800 hover:text-green-700"
          @click="menuOpen = false"
        >
          <i class="fas fa-user text-xl"></i>
        </router-link>
      </nav>
    </div>

    <!-- Mobile Nav -->
    <div v-if="menuOpen" class="md:hidden px-6 pb-4 space-y-2 text-gray-800">
      <router-link to="/" @click="setActive('Home')" class="block"
        >Home</router-link
      >
      <router-link to="/about-us" @click="setActive('About')" class="block"
        >About Us</router-link
      >
      <router-link to="/career" @click="setActive('Career')" class="block"
        >Career</router-link
      >
      <router-link to="/login" @click="setActive('Login')" class="block"
        >Login</router-link
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
/* Optional: Adjust logo font or icon styling if needed */
</style>
