<template>
  <div class="flex h-screen">
    <div class="flex-1 flex flex-col">
      <!-- <Header /> -->
      <main class="flex-1 overflow-auto">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
// import Header from '@/components/Header.vue';

export default {
  components: {
    // Header
  }
};
</script>

<style scoped>
/* Ensure layout takes full height and handles overflow */
.h-screen {
  min-height: 100vh;
}

.flex-1 {
  flex: 1 1 auto;
}

.overflow-auto {
  overflow-y: auto;
}
</style>