<template>
  <div class="product-detail container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-blue-600 mb-4">{{ product?.title }}</h1>
    <p class="text-gray-700">{{ product?.description }}</p>
  </div>
</template>
<script>
import { getAllMainContent } from '@/services/product-solution';

export default {
  name: 'ProductDetail',
  data() {
    return {
      product: null,
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
          this.$router.push('/404'); // Redirect to 404 if not found
        }
      } catch (error) {
        this.error = 'Failed to load product details';
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