<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <div class="flex-shrink-0">
        <router-link to="/">
          <img
            src="@/assets/images/4_files/logo.png"
            alt="SunFlex Logo"
            class="h-10"
          />
        </router-link>
      </div>

      <nav class="hidden md:flex items-center space-x-8 lg:space-x-12">
        <router-link
          to="/"
          class="nav-link"
          :class="{ 'nav-link--active': $route.path === '/' }"
        >
          Home
        </router-link>
        <router-link
          to="/about-us"
          class="nav-link"
          :class="{ 'nav-link--active': $route.path === '/about-us' }"
        >
          About Us
        </router-link>
        <router-link
          to="/career"
          class="nav-link"
          :class="{ 'nav-link--active': $route.path.startsWith('/career') }"
        >
          Career
        </router-link>
        <router-link to="/login" class="nav-link">
          <i class="fas fa-user text-xl"></i>
        </router-link>
      </nav>

      <button
        @click="menuOpen = !menuOpen"
        class="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
        aria-controls="mobile-menu"
        :aria-expanded="menuOpen"
      >
        <i class="fas fa-bars text-black text-xl"></i>
      </button>
    </div>

    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="transform opacity-0 -translate-y-2"
      enter-to-class="transform opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="transform opacity-100 translate-y-0"
      leave-to-class="transform opacity-0 -translate-y-2"
    >
      <div v-if="menuOpen" class="md:hidden bg-gray-50 py-2" id="mobile-menu">
        <router-link
          to="/"
          @click="menuOpen = false"
          class="mobile-link"
          :class="{ 'mobile-link--active': $route.path === '/' }"
        >
          Home
        </router-link>
        <router-link
          to="/about-us"
          @click="menuOpen = false"
          class="mobile-link"
          :class="{ 'mobile-link--active': $route.path === '/about-us' }"
        >
          About Us
        </router-link>
        <router-link
          to="/career"
          @click="menuOpen = false"
          class="mobile-link"
          :class="{ 'mobile-link--active': $route.path.startsWith('/career') }"
        >
          Career
        </router-link>
        <router-link to="/login" @click="menuOpen = false" class="mobile-link">
          Login
        </router-link>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false
    };
  }
};
</script>

<style scoped>
/* Scoped CSS for custom styles */
.nav-link {
  font-weight: 500;
  color: #4a5568;
  padding-bottom: 4px;
  transition: all 0.2s ease-in-out;
  position: relative;
}

.nav-link:hover {
  color: #38a169;
}

.nav-link--active {
  color: #38a169;
  border-bottom: 2px solid #38a169;
}

/* Mobile Link Styles */
.mobile-link {
  display: block;
  padding: 12px 24px;
  font-weight: 500;
  color: #4a5568;
  border-left: 4px solid transparent;
  transition: all 0.2s ease-in-out;
}

.mobile-link:hover {
  background-color: #e2e8f0;
  color: #38a169;
}

.mobile-link--active {
  background-color: #e6fffa;
  color: #2f855a;
  border-left-color: #38a169;
}
</style>
