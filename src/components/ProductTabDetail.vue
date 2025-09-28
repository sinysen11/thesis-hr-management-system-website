<template>
  <div id="content" class="row-with-vspace site-content">
    <div v-if="isLoading" class="text-center py-4">Loading...</div>
    <div v-else-if="error" class="text-center text-red-500 py-4">{{ error }}</div>
    <div v-else>
      <img :src="bannerImage" class="w-full" :alt="'Product Banner for ' + $route.params.id" />
      <div class="col-xs-12 scrsc-menu pt-20 pb-20 knowledge-list" id="kitems-list">
        <ul class="list-inline flex justify-center space-x-4" role="tablist">
          <li
            v-for="(tab) in tabs"
            :key="tab.id"
            class="selectionShareable"
            :class="{ 'active': activeTab === tab.id }"
            role="presentation"
          >
            <a
              :href="`#${tab.id}`"
              :aria-controls="tab.id"
              role="tab"
              @click.prevent="activeTab = tab.id"
              class="hover:underline"
              :class="{ 'font-bold': activeTab === tab.id }"
            >
              {{ tab.title }}
            </a>
          </li>
        </ul>
      </div>
      <div class="container mx-auto">
        <div class="tab-content">
          <div
            v-for="tab in tabs"
            :key="tab.id"
            role="tabpanel"
            class="tab-pane"
            :class="{ 'active': activeTab === tab.id }"
            :id="tab.id"
          >
            <div v-if="tab.id === 'server'" class="h-24"></div>
            <div v-if="tab.id === 'server'" class="row flex flex-wrap">
              <div v-for="item in tab.items" :key="item.title" class="col-sm-6 col-md-3 mb-4">
                <div class="thumbnail" style="min-height: 680px;">
                  <img :src="item.image" class="w-full" :alt="item.title" />
                  <div class="caption p-4">
                    <h4 class="font-bold">{{ item.title }}</h4>
                    <p class="selectionShareable">{{ item.description }}</p>
                    <ul class="list-disc pl-4">
                      <li v-for="(point, idx) in item.points" :key="idx" class="selectionShareable">{{ point }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <div class="h-4"></div>
              <p v-for="(paragraph, idx) in tab.paragraphs" :key="idx" class="selectionShareable">{{ paragraph }}</p>
              <div v-for="(detail, idx) in tab.details" :key="idx">
                <h6><strong>{{ detail.title }}</strong></h6>
                <p class="selectionShareable">{{ detail.text }}</p>
                <div class="text-center">
                  <img
                    v-for="(img, imgIdx) in detail.images"
                    :key="imgIdx"
                    :src="img.src"
                    :style="{ width: img.width }"
                    :alt="detail.title"
                    class="inline-block my-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="h-12"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAllTabContent } from '@/services/product-solution';

export default {
  name: 'ProductTabDetail',
  props: {
    id: String // Passed from route params
  },
  data() {
    return {
      bannerImage: './public/images/it_infra_banner.jpg', // Fallback banner
      tabs: [],
      activeTab: null,
      isLoading: false,
      error: null
    };
  },
  async created() {
    await this.loadTabContent();
  },
  methods: {
    async loadTabContent() {
      this.isLoading = true;
      this.error = null;
      try {
        const mainContentId = this.id || this.$route.params.id;
        console.log('Fetching tab content for mainContentId:', mainContentId); // Debug
        const response = await getAllTabContent(mainContentId);
        console.log('API response:', response); // Debug
        if (response.status === 1 && response.data.length > 0) {
          this.tabs = response.data.map(item => ({
            id: item.title.toLowerCase().replace(/\s+/g, '-'),
            title: item.title,
            items: item.title === 'Servers' ? [
              {
                title: 'Small enterprise servers',
                image: './public/images/ibm/1.png',
                description: 'Reliable, cloud-enabled servers that deliver continuous operations.',
                points: [
                  'Better price performance than x86',
                  'End-to-end security features',
                  'Power and flexibility for mission-critical workloads'
                ]
              },
              {
                title: 'Large enterprise servers',
                image: './public/images/ibm/2.png',
                description: 'Superior performance for demanding workloads.',
                points: [
                  'Total protection for your data core',
                  'Easily handle massive demand spikes',
                  'Optimized for cognitive and HPC in private and hybrid cloud environments'
                ]
              },
              {
                title: 'Scalable servers',
                image: './public/images/ibm/3.png',
                description: 'Hardware that scales without sacrificing performance.',
                points: [
                  'Industry-leading speed and security',
                  'Flexible deployment and performance',
                  'Ideal for data centers and emerging apps'
                ]
              },
              {
                title: 'Mainframes',
                image: './public/images/ibm/4.png',
                description: 'Mainframes that deliver record uptime and availability.',
                points: [
                  'Unmatched levels of data protection',
                  'Power the toughest AI workloads',
                  'Trusted for digital transformation'
                ]
              }
            ] : [],
            paragraphs: item.points || [],
            details: item.title !== 'Servers' ? [
              {
                title: item.title === 'Storage' ? 'Oracle ZFS Storage Appliance' : '',
                text: item.title === 'Storage' ? 'Oracle ZFS Storage Appliance ZS7-2 is available in cost-effective midrange and high-end configurations...' : '',
                images: item.title === 'Storage' ? [{ src: './public/images/storage.jpg', width: '50%' }] : []
              },
              {
                title: item.title === 'Storage' ? 'StorageTek Tape' : '',
                text: item.title === 'Storage' ? 'Oracle’s StorageTek tape-automation solutions give you the performance, scalability, and value...' : '',
                images: item.title === 'Storage' ? [{ src: './public/images/tap.png', width: '60%' }] : []
              },
              {
                title: item.title === 'Storage' ? 'IBM Flash Storage' : '',
                text: item.title === 'Storage' ? 'IBM all-flash arrays are storage systems using flash technology...' : '',
                images: item.title === 'Storage' ? [{ src: './public/images/ibm_flash_storage.jpg', width: '80%' }] : []
              },
              {
                title: item.title === 'Storage' ? 'Hybrid flash storage' : '',
                text: item.title === 'Storage' ? 'Hybrid flash storage Optimize your mix of storage media...' : '',
                images: item.title === 'Storage' ? [
                  { src: './public/images/nvme1.png', width: '35%' },
                  { src: './public/images/nvme2.jpg', width: '35%' }
                ] : []
              },
              {
                title: item.title === 'Storage' ? 'Storage Area Networks (SAN)' : '',
                text: item.title === 'Storage' ? 'Your data flow is only as fast as your network connectivity allows...' : '',
                images: item.title === 'Storage' ? [{ src: './public/images/san.jpg', width: '70%' }] : []
              },
              {
                title: item.title === 'Network' ? '' : '',
                text: item.title === 'Network' ? '' : '',
                images: item.title === 'Network' ? [{ src: './public/images/network_solution.png', width: '80%' }] : []
              }
            ].filter(detail => detail.title) : []
          }));
          this.activeTab = this.tabs[0]?.id || null;
          this.bannerImage = `/api/images/${mainContentId}_banner.jpg`; // Adjust based on actual banner image logic
        } else {
          this.error = 'No tab content found';
          console.warn('No tab content found for ID:', mainContentId);
        }
      } catch (error) {
        this.error = 'Failed to load tab content';
        console.error('Error fetching tab content:', error);
      } finally {
        this.isLoading = false;
      }
    }
  }
};
</script>

<style scoped>
@font-face {
  font-family: 'Roboto';
  src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
}
.row-with-vspace {
  @apply py-8;
}
.scrsc-menu {
  @apply py-5;
}
.list-inline {
  @apply flex flex-wrap justify-center;
}
.list-inline li.active a {
  @apply font-bold border-b-2 border-blue-600;
}
.tab-pane {
  @apply hidden;
}
.tab-pane.active {
  @apply block;
}
.thumbnail {
  @apply border rounded shadow p-4 bg-white;
}
.selectionShareable {
  @apply select-text;
}
</style>