<template>
  <header
    class="bg-gradient-to-r from-blue-600 to-sky-400 text-white shadow-md"
  >
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <!-- Logo -->
      <div class="text-2xl font-bold">
        SunFlex <span class="text-sm font-normal">INFORMATION SYSTEM</span>
      </div>

      <!-- Hamburger (Mobile) -->
      <button class="md:hidden text-white" @click="menuOpen = !menuOpen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex space-x-6">
        <div class="relative group">
          <a
            href="#"
            :class="[
              'hover:text-gray-200',
              { 'font-bold underline': activePage === 'About' }
            ]"
            @click.prevent="setActive('About')"
          >
            About
          </a>
          <div
            class="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-md min-w-[150px] z-10"
          >
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Our Team</a>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100"
              >Our Mission</a
            >
          </div>
        </div>
        <div class="relative group">
          <a
            href="#"
            :class="[
              'hover:text-gray-200',
              { 'font-bold underline': activePage === 'Contact' }
            ]"
            @click.prevent="setActive('Contact')"
          >
            Contact
          </a>
          <div
            class="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-md min-w-[150px] z-10"
          >
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Support</a>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Feedback</a>
          </div>
        </div>
      </nav>
    </div>

    <!-- Mobile Nav -->
    <div v-if="menuOpen" class="md:hidden px-4 pb-4">
      <div class="space-y-2">
        <div>
          <button
            class="w-full text-left"
            @click="toggleSub('about')"
            :class="{ 'font-bold underline': activePage === 'About' }"
          >
            About
          </button>
          <div v-if="openSub.about" class="pl-4 text-white space-y-1">
            <a href="#" class="block">Our Team</a>
            <a href="#" class="block">Our Mission</a>
          </div>
        </div>
        <div>
          <button
            class="w-full text-left"
            @click="toggleSub('contact')"
            :class="{ 'font-bold underline': activePage === 'Contact' }"
          >
            Contact
          </button>
          <div v-if="openSub.contact" class="pl-4 text-white space-y-1">
            <a href="#" class="block">Support</a>
            <a href="#" class="block">Feedback</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
      activePage: '',
      openSub: {
        about: false,
        contact: false
      }
    };
  },
  methods: {
    setActive(page) {
      this.activePage = page;
      this.menuOpen = false; // close on mobile
      this.openSub.about = false;
      this.openSub.contact = false;
    },
    toggleSub(menu) {
      this.activePage = menu.charAt(0).toUpperCase() + menu.slice(1);
      this.openSub[menu] = !this.openSub[menu];
    }
  }
};
</script>
