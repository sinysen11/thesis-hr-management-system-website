<template>
  <div class="bg-gray-100 min-h-screen">
    <!-- Header Section -->
    <div class="bg-teal-800 text-white py-10 text-center">
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        About SunFlex
      </h1>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-10">
      <!-- Company Description -->
      <div class="text-center mb-12">
        <p class="text-lg text-gray-700 max-w-3xl mx-auto">
          SunFlex provides consistent processes and tools combined with the
          right skills at the right time and place. We design IT solutions that
          fit your unique requirements with a complete breadth of distributed IT
          solutions.
        </p>
        <p class="text-lg text-gray-700 max-w-3xl mx-auto mt-4">
          Drawing on deep industry expertise and customized solutions, we blend
          strategic designs, using proven IT technologies, and world-class
          service and support capability to create effective solutions that
          remove cost and complexity to maximize your returns on IT investment.
        </p>
        <p class="text-lg text-gray-700 max-w-3xl mx-auto mt-4">
          With over three decades of industry experience, our solutions are
          built on innovation, expertise, independence, and flexibility.
        </p>
      </div>

      <!-- We Distinguish Ourselves -->
      <div class="bg-teal-100 p-6 rounded-lg mb-12">
        <h2
          class="text-2xl sm:text-3xl font-bold text-teal-800 mb-4 text-center"
        >
          We distinguish ourselves by being ourselves
        </h2>
        <ul class="list-disc text-lg text-gray-700 max-w-2xl mx-auto space-y-2">
          <li>
            <strong>Our People:</strong> Formal and on-going management,
            technical, sales training, development & certification programs –
            Staying ahead of IT business trends.
          </li>
          <li>
            <strong>Our Scope:</strong> Support Standards and "End-to-End
            Solutions"
          </li>
          <li>
            <strong>Our Processes:</strong> Best practices, consistent support,
            and highest customer satisfaction ratings resulting in repeatable
            Long-Term engagements as opposed to a general approach to supporting
            clients.
          </li>
          <li>
            <strong>Your Flexibility:</strong> Long Standing Customer and
            Partner Relationships!
          </li>
        </ul>
      </div>

      <!-- What We Do -->
      <div class="flex flex-col md:flex-row items-center justify-between mb-12">
        <div class="md:w-1/2 mb-6 md:mb-0">
          <h2 class="text-2xl sm:text-3xl font-bold text-teal-800 mb-4">
            What we do
          </h2>
          <p class="text-lg text-gray-700">
            We provide consultancy, systems integration, project management,
            service maintenance, support, selling IT equipment sparepart and IT
            equipment rental with our team of highly specialized and dedicated
            professionals.
          </p>
        </div>
        <div class="md:w-1/2">
          <img
            src="gears.png"
            alt="Gears Illustration"
            class="w-full h-auto max-w-xs mx-auto"
          />
        </div>
      </div>

      <!-- Corporate Vision -->
      <div class="flex flex-col md:flex-row items-center justify-between">
        <div class="md:w-1/2 mb-6 md:mb-0">
          <h2 class="text-2xl sm:text-3xl font-bold text-teal-800 mb-4">
            Corporate Vision
          </h2>
          <p class="text-lg text-gray-700">
            To be number 1 of ICT industry in Cambodia.
          </p>
        </div>
        <div class="md:w-1/2">
          <img
            src="vision-person.png"
            alt="Vision Illustration"
            class="w-full h-auto max-w-xs mx-auto"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
};
</script>

<style scoped>
/* Ensure images scale properly on mobile */
img {
  max-width: 100%;
  height: auto;
}
</style>
