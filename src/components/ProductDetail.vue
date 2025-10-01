<template>
  <div class="product-detail container mx-auto px-4 py-8">
    
    <h1 class="text-3xl font-bold text-blue-600 mb-4">{{ product?.title }}</h1>
    <p class="text-gray-700">{{ product?.description }}</p>

    <!-- Read More button -->
    <button
      type="button"
      @click="loadTabContent(product?._id)"
      class="inline-block bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
    >
      Read More
    </button>

    <!-- Loading / Error -->
    <div v-if="isLoading" class="text-center my-8">
      <p>Loading product details...</p>
    </div>
    <div v-if="error" class="text-red-500 text-center my-8">
      <p>{{ error }}</p>
    </div>

    <!-- Tabs -->
    <div v-if="tabs.length && !isLoading && !error">
      <ProductTabDetail :tabs="tabs" />
    </div>
  </div>
</template>

<script>
import { getAllMainContent, getAllTabContent } from '@/services/product-solution';

export default {
  name: 'ProductDetail',
  data() {
    return {
      product: null,
      tabs: [], // store tab details separately
      isLoading: false,
      error: null
    };
  },
  async created() {
    this.loadProduct();
  },
  watch: {
    '$route.params.slug': {
      handler() {
        this.loadProduct();
      },
      immediate: false
    }
  },
  methods: {
    // Load main product info
    async loadProduct() {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await getAllMainContent();
        const slug = this.$route.params.slug;
        this.product = response.data.find(
          item =>
            item.slug === slug ||
            item.title.toLowerCase().replace(/\s+/g, '-') === slug
        );
        if (!this.product) {
          this.error = 'Product not found';
          this.$router.push('/404');
        }
      } catch (error) {
        this.error = 'Failed to load product details';
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },

    // Load tab content (when clicking Read More)
    async loadTabContent(productId) {
      if (!productId) {
        this.error = 'Invalid product ID';
        return;
      }
      this.isLoading = true;
      this.error = null;
      try {
        const response = await getAllTabContent(productId); // pass product id
        this.tabs = response.data || [];
      } catch (error) {
        this.error = 'Failed to load tab details';
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    }
  }
};
</script>

<style scoped>
.product-detail {
  @apply font-roboto;
}
</style>
