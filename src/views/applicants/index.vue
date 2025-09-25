```vue
<template>
  <div class="job-applicant bg-white font-roboto">
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
            <img src="@/assets/images/4_files/menu.svg" alt="menu" title="menu" class="w-8">
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
                <router-link to="/career" class="hover:underline" :class="{ 'font-bold': $route.path.includes('/career') }">Careers</router-link>
              </li>
              <li class="text-blue-800 font-medium">
                <router-link to="/about-us" class="hover:underline" :class="{ 'font-bold': $route.path === '/about-us' }">About Us</router-link>
              </li>
                            <li class="text-blue-800 font-medium">
               <router-link to="/login" class="nav-link">
                 <i class="fas fa-user text-xl"></i>
              </router-link>      
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
             <router-link to="/career" class="text-gray-700 hover:text-blue-800 font-medium" :class="{ 'text-blue-800 font-bold': $route.path.includes('/career') }">Careers</router-link>
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
    <div class="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div class="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6">
        <!-- Loading Modal -->
        <div
          v-if="isSubmitting"
          class="fixed inset-0 bg-gray-900/40 flex items-center justify-center z-50"
          role="dialog"
          aria-modal="true"
          aria-label="Submitting application"
        >
          <div
            class="bg-white bg-opacity-90 rounded-lg p-6 flex flex-col items-center space-y-4 shadow-lg animate-fade-in"
          >
            <div
              class="w-12 h-12 border-4 border-t-[#2e6d56] border-gray-200 rounded-full animate-spin"
            ></div>
            <p class="text-[#2e6d56] font-medium text-sm">Submitting application, please wait...</p>
          </div>
        </div>

        <!-- Success/Error Alerts -->
        <div
          v-if="successMessage"
          class="fixed top-4 right-4 max-w-sm w-full bg-green-50 border-l-4 border-[#2e6d56] text-[#2e6d56] p-4 rounded-md shadow-md animate-slide-in"
          role="alert"
        >
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <svg
                class="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span class="text-sm">{{ successMessage }}</span>
            </div>
            <button
              @click="successMessage = ''"
              class="text-[#2e6d56] hover:text-[#245c48] focus:outline-none"
              aria-label="Close success alert"
            >
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div
          v-if="errorMessage"
          class="fixed top-4 right-4 max-w-sm w-full bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-md shadow-md animate-slide-in"
          role="alert"
        >
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <svg
                class="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span class="text-sm">{{ errorMessage }}</span>
            </div>
            <button
              @click="errorMessage = ''"
              class="text-red-700 hover:text-red-900 focus:outline-none"
              aria-label="Close error alert"
            >
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>

        <!-- Job Information -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold text-[#2e6d56] mb-4 border-b-2 border-[#2e6d56] pb-2">
            Job Information
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label for="apply_position" class="block text-sm font-medium text-gray-700 mb-1">
                Apply Position
              </label>
              <input
                v-model="payload.apply_position"
                id="apply_position"
                type="text"
                class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-[#2e6d56] focus:ring-2 focus:ring-[#2e6d56] transition duration-200"
                placeholder="Enter job title"
                required
                readonly
              />
              <p v-if="showRequired && !payload.apply_position" class="text-xs text-red-500 mt-1">
                * Required
              </p>
            </div>
            <div>
              <label for="requested_location" class="block text-sm font-medium text-gray-700 mb-1">
                Requested Location
              </label>
              <input
                v-model="payload.requested_location"
                id="requested_location"
                type="text"
                class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-[#2e6d56] focus:ring-2 focus:ring-[#2e6d56] transition duration-200"
                placeholder="Enter branch location"
                required
                readonly
              />
              <p v-if="showRequired && !payload.requested_location" class="text-xs text-red-500 mt-1">
                * Required
              </p>
            </div>
          </div>
        </div>

        <!-- Education Background -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold text-[#2e6d56] mb-4 border-b-2 border-[#2e6d56] pb-2">
            Education Background
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label for="education_from_year" class="block text-sm font-medium text-gray-700 mb-1">
                From (Year)
              </label>
              <input
                v-model="payload.education_from_year"
                id="education_from_year"
                type="text"
                class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-[#2e6d56] focus:ring-2 focus:ring-[#2e6d56] transition duration-200"
                placeholder="e.g., 12-10-2022"
                required
              />
              <p v-if="showRequired && !payload.education_from_year" class="text-xs text-red-500 mt-1">
                * Required
              </p>
            </div>
            <div>
              <label for="education_to_year" class="block text-sm font-medium text-gray-700 mb-1">
                To (Year)
              </label>
              <input
                v-model="payload.education_to_year"
                id="education_to_year"
                type="text"
                class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-[#2e6d56] focus:ring-2 focus:ring-[#2e6d56] transition duration-200"
                placeholder="e.g., 12-10-2026"
                required
              />
              <p v-if="showRequired && !payload.education_to_year" class="text-xs text-red-500 mt-1">
                * Required
              </p>
            </div>
            <div>
              <label for="school_name" class="block text-sm font-medium text-gray-700 mb-1">
                School Name
              </label>
              <input
                v-model="payload.school_name"
                id="school_name"
                type="text"
                class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-[#2e6d56] focus:ring-2 focus:ring-[#2e6d56] transition duration-200"
                required
              />
              <p v-if="showRequired && !payload.school_name" class="text-xs text-red-500 mt-1">
                * Required
              </p>
            </div>
            <div>
              <label for="major" class="block text-sm font-medium text-gray-700 mb-1">
                Major
              </label>
              <input
                v-model="payload.major"
                id="major"
                type="text"
                class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-[#2e6d56] focus:ring-2 focus:ring-[#2e6d56] transition duration-200"
                required
              />
              <p v-if="showRequired && !payload.major" class="text-xs text-red-500 mt-1">
                * Required
              </p>
            </div>
            <div>
              <label for="degree" class="block text-sm font-medium text-gray-700 mb-1">
                Degree
              </label>
              <input
                v-model="payload.degree"
                id="degree"
                type="text"
                class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-[#2e6d56] focus:ring-2 focus:ring-[#2e6d56] transition duration-200"
                required
              />
              <p v-if="showRequired && !payload.degree" class="text-xs text-red-500 mt-1">
                * Required
              </p>
            </div>
            <div>
              <label for="location" class="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                v-model="payload.location"
                id="location"
                type="text"
                class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-[#2e6d56] focus:ring-2 focus:ring-[#2e6d56] transition duration-200"
                required
              />
              <p v-if="showRequired && !payload.location" class="text-xs text-red-500 mt-1">
                * Required
              </p>
            </div>
          </div>
        </div>

        <!-- Experience -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold text-[#2e6d56] mb-4 border-b-2 border-[#2e6d56] pb-2">
            Experience
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label for="start_date" class="block text-sm font-medium text-gray-700 mb-1">
                Start Date
              </label>
              <flat-pickr
                v-model="payload.start_date"
                :config="{ dateFormat: 'Y-m-d' }"
                class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-[#2e6d56] focus:ring-2 focus:ring-[#2e6d56] transition duration-200"
                placeholder="YYYY-MM-DD"
                required
              />
              <p v-if="showRequired && !payload.start_date" class="text-xs text-red-500 mt-1">
                * Required
              </p>
            </div>
            <div>
              <label for="end_date" class="block text-sm font-medium text-gray-700 mb-1">
                End Date
              </label>
              <flat-pickr
                v-model="payload.end_date"
                :config="{ dateFormat: 'Y-m-d' }"
                class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-[#2e6d56] focus:ring-2 focus:ring-[#2e6d56] transition duration-200"
                placeholder="YYYY-MM-DD"
              />
            </div>
            <div>
              <label for="position" class="block text-sm font-medium text-gray-700 mb-1">
                Position
              </label>
              <input
                v-model="payload.position"
                id="position"
                type="text"
                class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-[#2e6d56] focus:ring-2 focus:ring-[#2e6d56] transition duration-200"
                required
              />
              <p v-if="showRequired && !payload.position" class="text-xs text-red-500 mt-1">
                * Required
              </p>
            </div>
            <div>
              <label for="company" class="block text-sm font-medium text-gray-700 mb-1">
                Company
              </label>
              <input
                v-model="payload.company"
                id="company"
                type="text"
                class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-[#2e6d56] focus:ring-2 focus:ring-[#2e6d56] transition duration-200"
                required
              />
              <p v-if="showRequired && !payload.company" class="text-xs text-red-500 mt-1">
                * Required
              </p>
            </div>
          </div>
        </div>

        <!-- Salary -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold text-[#2e6d56] mb-4 border-b-2 border-[#2e6d56] pb-2">
            Salary
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label for="salary_usd" class="block text-sm font-medium text-gray-700 mb-1">
                Current Salary (USD)
              </label>
              <input
                v-model="payload.salary_usd"
                id="salary_usd"
                type="text"
                class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-[#2e6d56] focus:ring-2 focus:ring-[#2e6d56] transition duration-200"
                placeholder="e.g., 600"
                required
              />
              <p v-if="showRequired && !payload.salary_usd" class="text-xs text-red-500 mt-1">
                * Required
              </p>
            </div>
            <div>
              <label for="expected_salary" class="block text-sm font-medium text-gray-700 mb-1">
                Expected Salary (USD)
              </label>
              <input
                v-model="payload.expected_salary"
                id="expected_salary"
                type="text"
                class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-[#2e6d56] focus:ring-2 focus:ring-[#2e6d56] transition duration-200"
                placeholder="e.g., 1000"
                required
              />
              <p v-if="showRequired && !payload.expected_salary" class="text-xs text-red-500 mt-1">
                * Required
              </p>
            </div>
          </div>
        </div>

        <!-- Additional Questions -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold text-[#2e6d56] mb-4 border-b-2 border-[#2e6d56] pb-2">
            Additional Information
          </h3>
          <div class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Do you know someone at SunFlex? (optional)
              </label>
              <div class="flex space-x-6">
                <label class="flex items-center text-sm font-medium text-gray-700">
                  <input
                    v-model="payload.knows_someone"
                    type="radio"
                    :value="true"
                    class="mr-2 h-5 w-5 text-[#2e6d56] focus:ring-[#2e6d56]"
                  />
                  Yes
                </label>
                <label class="flex items-center text-sm font-medium text-gray-700">
                  <input
                    v-model="payload.knows_someone"
                    type="radio"
                    :value="false"
                    class="mr-2 h-5 w-5 text-[#2e6d56] focus:ring-[#2e6d56]"
                  />
                  No
                </label>
              </div>
              <input
                v-if="payload.knows_someone"
                v-model="payload.knows_someone_details"
                type="text"
                class="mt-4 block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-[#2e6d56] focus:ring-2 focus:ring-[#2e6d56] transition duration-200"
                placeholder="Full name with position"
                required
              />
              <p
                v-if="showRequired && payload.knows_someone && !payload.knows_someone_details"
                class="text-xs text-red-500 mt-1"
              >
                * Required
              </p>
            </div>
            <div>
              <label for="why_apply" class="block text-sm font-medium text-gray-700 mb-1">
                Why do you want to apply with SunFlex? (optional)
              </label>
              <textarea
                v-model="payload.why_apply"
                id="why_apply"
                class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-[#2e6d56] focus:ring-2 focus:ring-[#2e6d56] transition duration-200"
                rows="5"
                placeholder="e.g., Because I want job"
              ></textarea>
            </div>
          </div>
        </div>

        <!-- File Upload -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold text-[#2e6d56] mb-4 border-b-2 border-[#2e6d56] pb-2">
            Upload Your CV
          </h3>
          <div class="flex items-center space-x-6">
            <input
              id="cv_file"
              type="file"
              @change="handleFileUpload"
              class="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-6 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#2e6d56] file:text-white hover:file:bg-[#245c48] transition duration-200"
              required
              accept=".pdf,.doc,.docx"
            />
            <p v-if="showRequired && !payload.resume" class="text-xs text-red-500 mt-1">
              * Required
            </p>
            <button
              @click="submitForm"
              class="bg-[#2e6d56] text-white py-2 px-6 rounded-lg hover:bg-[#245c48] focus:outline-none focus:ring-2 focus:ring-[#2e6d56] transition duration-200"
              :disabled="isSubmitting"
            >
              Submit
            </button>
          </div>
          <p v-if="payload.resume" class="mt-4 text-sm text-gray-600">
            Selected file: {{ payload.resume.name }}
          </p>
          <p v-else class="mt-4 text-sm text-gray-600">No file selected</p>
        </div>
      </div>
    </div>

    <!-- Desktop Footer -->
    <div class="deskfoot hidden md:block bg-blue-800 text-white py-8">
      <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div class="text-sm">
          <span>©2025 by SunFlex (Cambodia) Co.,Ltd<br>Best viewed with IE 9+, Firefox 16+, Safari 5.1, Chrome 23+.</span>
        </div>
        <div class="flex space-x-4 my-4 md:my-0">
          <router-link to="/" class="text-white hover:underline">Home</router-link>
          <router-link to="/career" class="text-white hover:underline">Careers</router-link>
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
import FlatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import axios from 'axios';
import { submitApplicant } from '@/services/jobs';

export default {
  name: 'JobApplicantForm',
  components: { FlatPickr },
  data() {
    return {
      payload: {
        applicant: '',
        jobId: '',
        apply_position: '',
        requested_location: '',
        education_from_year: '',
        education_to_year: '',
        school_name: '',
        major: '',
        degree: '',
        location: '',
        start_date: '',
        end_date: '',
        position: '',
        company: '',
        salary_usd: '',
        expected_salary: '',
        knows_someone: null,
        knows_someone_details: '',
        why_apply: '',
        resume: '',
        token: ''
      },
      isSubmitting: false,
      successMessage: '',
      errorMessage: '',
      showRequired: false,
      isMobileMenuOpen: false,
      isProductsMenuOpen: false
    };
  },
  created() {
    this.prefillForm();
  },
  methods: {
    normalizeId(id) {
      return (id || '').toString().replace(/-/g, '');
    },
    prefillForm() {
      const query = this.$route.query;
      this.payload.jobId = this.normalizeId(query.jobId || '');
      this.payload.apply_position = query.apply_position || 'N/A';
      this.payload.requested_location = query.branch || 'N/A';
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      this.payload.applicant = this.normalizeId(user?.data?.userId || '');
      this.payload.token = (localStorage.getItem('token') || '').trim();
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      console.log('File selected:', { file: file ? file.name : 'none', size: file ? file.size : null, type: file ? file.type : null });
      this.payload.resume = file || null;
    },
    async submitForm() {
      this.showRequired = true;

      // Validation
      if (!this.payload.resume) {
        this.errorMessage = 'Please upload a CV.';
        return;
      }
      if (
        !this.payload.jobId ||
        !this.payload.apply_position ||
        !this.payload.applicant ||
        !this.payload.token
      ) {
        this.errorMessage = 'Missing required job, user, or token information.';
        return;
      }
      if (
        !this.payload.education_from_year ||
        !this.payload.education_to_year ||
        !this.payload.school_name ||
        !this.payload.major ||
        !this.payload.degree ||
        !this.payload.location ||
        !this.payload.start_date ||
        !this.payload.position ||
        !this.payload.company ||
        !this.payload.salary_usd ||
        !this.payload.expected_salary
      ) {
        this.errorMessage = 'Please fill out all required fields.';
        return;
      }
      if (this.payload.knows_someone && !this.payload.knows_someone_details) {
        this.errorMessage = 'Please provide details if you know someone at SunFlex.';
        return;
      }

      this.isSubmitting = true;
      this.errorMessage = '';
      this.successMessage = '';

      try {
        // Step 1: Upload the resume file as binary
        const fileData = await this.payload.resume.arrayBuffer();
        console.log('Upload request details:', {
          fileName: this.payload.resume.name,
          fileSize: this.payload.resume.size,
          fileType: this.payload.resume.type
        });

        const uploadResponse = await axios.post(
          'https://thesis-posting-and-leave-request-api.onrender.com/api/v1/document',
          fileData,
          {
            headers: {
              'Authorization': `Bearer ${this.payload.token}`,
              'Content-Type': this.payload.resume.type || 'application/octet-stream'
            }
          }
        );
        console.log('Upload response (raw):', JSON.stringify(uploadResponse.data, null, 2));

        if (uploadResponse.data && uploadResponse.data.status === 1) {
          // Extract document_id with explicit fallback
          let documentId = uploadResponse.data.data?.document_id;
          if (!documentId) {
            documentId = uploadResponse.data.document?._id ||
                        uploadResponse.data.document_id ||
                        uploadResponse.data.id;
          }
          if (!documentId) {
            this.errorMessage = 'Failed to retrieve document ID from upload response.';
            return;
          }
          this.payload.resume = documentId;
          console.log('Extracted resume:', this.payload.resume);

          // Step 2: Prepare JSON payload for applicant submission
          const applicantData = {
            applicant: this.payload.applicant,
            jobId: this.payload.jobId,
            apply_position: this.payload.apply_position,
            requested_location: this.payload.requested_location,
            education_from_year: this.payload.education_from_year,
            education_to_year: this.payload.education_to_year,
            school_name: this.payload.school_name,
            major: this.payload.major,
            degree: this.payload.degree,
            location: this.payload.location,
            start_date: this.payload.start_date,
            end_date: this.payload.end_date || '',
            position: this.payload.position,
            company: this.payload.company,
            salary_usd: this.payload.salary_usd,
            expected_salary: this.payload.expected_salary,
            knows_someone: this.payload.knows_someone === null ? '' : this.payload.knows_someone.toString(),
            knows_someone_details: this.payload.knows_someone ? this.payload.knows_someone_details : '',
            why_apply: this.payload.why_apply || '',
            resume: this.payload.resume
          };

          // Debug the final request payload
          console.log('Final applicant request:', JSON.stringify(applicantData, null, 2));

          // Step 3: Submit applicant data
          const response = await submitApplicant(applicantData, this.payload.token);
          console.log('Submit response:', JSON.stringify(response, null, 2));

          if (response && response.status === 1) {
            this.successMessage = response.message || 'Application submitted successfully!';
            this.resetForm();
            setTimeout(() => {
              console.log('Attempting to redirect to /career');
              if (this.$router) {
                this.$router.push('/career').catch(err => {
                  console.error('Redirection error:', err);
                });
              } else {
                console.error('Router is not available');
              }
            }, 2000);
          } else {
            this.errorMessage = response.message || 'Failed to submit application. Please try again.';
          }
        } else {
          this.errorMessage = uploadResponse.data.message || 'Failed to upload resume. Please try again.';
        }
      } catch (error) {
        console.error('Error submitting application:', error, error.response?.data);
        this.errorMessage = error.message || 'An error occurred while submitting your application.';
      } finally {
        this.isSubmitting = false;
      }
    },
    resetForm() {
      this.payload = {
        applicant: '',
        jobId: '',
        apply_position: '',
        requested_location: '',
        education_from_year: '',
        education_to_year: '',
        school_name: '',
        major: '',
        degree: '',
        location: '',
        start_date: '',
        end_date: '',
        position: '',
        company: '',
        salary_usd: '',
        expected_salary: '',
        knows_someone: null,
        knows_someone_details: '',
        why_apply: '',
        resume: '',
        token: ''
      };
      this.showRequired = false;
      const fileInput = document.getElementById('cv_file');
      if (fileInput) {
        fileInput.value = '';
      }
    },
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

.job-applicant {
  @apply font-roboto;
}

/* Custom animations for loading modal and alerts */
.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}

.animate-slide-in {
  animation: slideIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 640px) {
  .grid-cols-2 {
    grid-template-columns: 1fr;
  }
  .grid-cols-3 {
    grid-template-columns: 1fr;
  }
  .grid-cols-4 {
    grid-template-columns: 1fr;
  }
}
</style>
```