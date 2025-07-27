<template>
  <!-- <div class="bg-gray-100 min-h-screen"> -->
  <div class="bg-teal-800 text-white py-10 md:py-20 text-center relative">
    <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
      CYBER SECURITY
    </h1>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mt-8"
    >
      <div class="flex flex-col items-center">
        <img
          src="computer-security.png"
          alt="Computer Security"
          class="h-12 sm:h-14 md:h-16 mb-2"
        />
        <span class="text-sm sm:text-base">COMPUTER SECURITY</span>
      </div>
      <div class="flex flex-col items-center">
        <img
          src="global-shield.png"
          alt="Global Secure Shield"
          class="h-12 sm:h-14 md:h-16 mb-2"
        />
        <span class="text-sm sm:text-base">GLOBAL SECURE SHIELD</span>
      </div>
      <div class="flex flex-col items-center">
        <img
          src="fingerprint.png"
          alt="Fingerprint"
          class="h-12 sm:h-14 md:h-16 mb-2"
        />
        <span class="text-sm sm:text-base">FINGERPRINT</span>
      </div>
      <div class="flex flex-col items-center">
        <img
          src="payment.png"
          alt="Payment"
          class="h-12 sm:h-14 md:h-16 mb-2"
        />
        <span class="text-sm sm:text-base">PAYMENT</span>
      </div>
      <div class="flex flex-col items-center">
        <img
          src="mobile-security.png"
          alt="Mobile Security"
          class="h-12 sm:h-14 md:h-16 mb-2"
        />
        <span class="text-sm sm:text-base">MOBILE SECURITY</span>
      </div>
      <div class="flex flex-col items-center">
        <img
          src="surveillance.png"
          alt="Surveillance"
          class="h-12 sm:h-14 md:h-16 mb-2"
        />
        <span class="text-sm sm:text-base">SURVEILLANCE</span>
      </div>
    </div>
    <div
      class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
    >
      <span class="w-2 h-2 bg-gray-400 rounded-full"></span>
      <span class="w-2 h-2 bg-gray-400 rounded-full"></span>
      <span class="w-2 h-2 bg-gray-400 rounded-full"></span>
    </div>
  </div>

  <div class="bg-green-800 text-white py-4">
    <div
      class="container mx-auto px-4 flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 text-center sm:text-left"
    >
      <router-link to="/" class="hover:underline">Home</router-link>
      <span class="hidden sm:inline">|</span>
      <router-link to="/it-infrastructure" class="hover:underline"
        >IT Infrastructure</router-link
      >
      <span class="hidden sm:inline">|</span>
      <router-link to="/networking" class="hover:underline"
        >Networking Data Analytics</router-link
      >
      <span class="hidden sm:inline">|</span>
      <router-link to="/cloud-solutions" class="hover:underline"
        >Cloud Solutions</router-link
      >
      <span class="hidden sm:inline">|</span>
      <router-link to="/big-data" class="hover:underline"
        >Big Data, Data Warehouse</router-link
      >
      <span class="hidden sm:inline">|</span>
      <router-link to="/digital-banking" class="hover:underline"
        >Digital Banking Solutions</router-link
      >
      <span class="hidden sm:inline">|</span>
      <router-link to="/security-solutions" class="hover:underline"
        >Security Solutions</router-link
      >
      <span class="hidden sm:inline">|</span>
      <router-link to="/professional-services" class="hover:underline"
        >Professional Service Support</router-link
      >
    </div>
  </div>

  <div class="container mx-auto px-4 py-10 text-center">
    <h2 class="text-2xl sm:text-3xl text-green-700 font-bold mb-4">
      Welcome to SunFlex (Cambodia) Co., Ltd.
    </h2>
    <p class="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
      SunFlex provides consistent processes and tools combined with the right
      skills at the right time and place. We design IT solutions that fit your
      unique requirements with a complete breadth of distributed IT solutions.
    </p>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style scoped>
/* Ensure links are centered on mobile and spaced evenly on desktop */
.container .flex-col a {
  padding: 0.5rem 0;
}

/* Adjust dot indicators for smaller screens */
.absolute.bottom-4 {
  transform: translateX(-50%);
}
</style>
