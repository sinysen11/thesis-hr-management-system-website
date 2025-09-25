<template>
  <div>
    <router-view></router-view>
    <!-- ✅ Only show footer if not login/signup page -->
    <!-- <Footer v-if="!hideFooter" /> -->
  </div>
</template>

<script>
// import Footer from '@/components/Footer.vue';

export default {
  name: 'MainLayout',
  // components: { Footer },
  computed: {
    hideFooter() {
      // list of routes where footer should not show
      const hiddenRoutes = ['/login', '/signup'];
      return hiddenRoutes.includes(this.$route.path);
    }
  }
};
</script>

<style src="@/assets/style.css"></style>
