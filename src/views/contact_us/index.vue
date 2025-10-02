<template>
      <div id="content" class="site-content py-8">
            <img src="@/assets/images/4_files/contact_us.jpg" alt="Partners Banner" class="w-full h-auto" />
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div class="spacer h-16"></div>

                  <div class="flex flex-col md:flex-row gap-8">
                        <!-- Contact Address -->
                        <div class="w-full md:w-1/2">
                              <aside>
                                    <div class="sidewidt">
                                          <p class="selectionShareable">
                                                <strong>Address</strong>: #128J, 3<sup>rd</sup> Floor, Russian
                                                Federation Blvd, Sangkat Teuk Laak I, Khan Toul Kork, Phnom Penh,
                                                Cambodia.
                                          </p>
                                    </div>
                              </aside>
                        </div>

                        <!-- Contact Links -->
                        <div class="w-full md:w-1/2">
                              <div class="contactlinks space-y-2">
                                    <p>
                                          <i class="icon-phone fas fa-phone mr-2"></i>
                                          <strong>Phone</strong>: +855 23 886 289 / +855 92 301 113
                                    </p>
                                    <p>
                                          <i class="icon-envelope fas fa-envelope mr-2"></i>
                                          <strong>Email</strong>: <a href="mailto:info@sunflexcambodia.com"
                                                class="underline">info@sunflexcambodia.com</a>
                                    </p>
                              </div>
                        </div>
                  </div>

                  <!-- Google Maps -->
                  <section id="contactmap" class="map mt-8">
                        <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.3793974544733!2d104.89237133184722!3d11.566659814659758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095173ea43cbf9%3A0x1226d62a5cd8fe13!2sEDGE%20International%20Co.%2CLtd!5e0!3m2!1sen!2skh!4v1584434426143!5m2!1sen!2skh"
                              width="100%" height="600" frameborder="0" style="border:0;" allowfullscreen=""
                              aria-hidden="false" tabindex="0"></iframe>
                  </section>

                  <div class="spacer h-16"></div>
            </div>
      </div>
</template>

<script>
export default {
      name: 'ContactUs'
};
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

.spacer {
      height: 4rem;
}

.selectionShareable {
      @apply text-gray-700 text-base;
}

.contactlinks {
      @apply text-gray-700 text-base;
}

.contactlinks a {
      @apply text-[#2d6f54] hover:text-[#1e4b38] transition-colors duration-200;
}

.map {
      @apply w-full;
}
</style>