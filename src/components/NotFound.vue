<!-- src/views/NotFound.vue -->
<template>
  <div class="container mx-auto py-8 text-center">
    <h1 class="text-4xl font-bold">404 - Page Not Found</h1>
    <p class="mt-4">The page you are looking for does not exist.</p>
    <router-link to="/" class="mt-4 inline-block bg-[#2d6f54] text-white px-4 py-2 rounded">Go to Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
};
</script>