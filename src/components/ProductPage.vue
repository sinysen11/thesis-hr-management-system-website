<template>
  <div class="product-page bg-white font-roboto py-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl md:text-4xl font-bold text-[#2d6f54] mb-8">
        {{ product.title }}
      </h1>
      <div class="prose max-w-3xl mx-auto text-gray-700">
        <div v-html="product.content"></div>
        <a
          v-if="product.brochureUrl"
          :href="product.brochureUrl"
          target="_blank"
          class="inline-block bg-[#2d6f54] text-white py-2 px-4 rounded hover:bg-[#245c47] mt-4"
        >
          Download Brochure
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductPage',
  props: {
    slug: String
  },
  computed: {
    product() {
      const products = [
        {
          slug: 'networking-data-analytics',
          title: 'Networking & Data Analytics',
          content: `
            <p>Mindarray system has been innovating in networking and data analytics technologies. Today, we are positioned as a solution provider that is enabling enterprises and government sectors to streamline their IT operations using innovative modules like:</p>
            <ul class="list-disc pl-5 mb-4">
              <li>Infrastructure Intelligence Platform (IIP) for Network Management</li>
              <li>Data Analytics Platform (DAP) for Log Management & Flow Analytics</li>
              <li>ITSM Platform for IT Service Automation.</li>
            </ul>
            <p>All offerings of Mindarray system come under the brand name of Motadata, which includes IT Infrastructure Monitoring, Log & Flow Management, and IT Service Management Platform. These are designed to provide operational insights into an IT infrastructure and identify & resolve complex problems to maximize the overall uptime of the services.</p>
            <p>Some of the benefits of our offerings are as follows:</p>
            <ul class="list-disc pl-5 mb-4">
              <li>Reduction in CAPEX</li>
              <li>Increased agility and speed in resolving issues.</li>
              <li>Provides a means to manage a hybrid eco-system.</li>
            </ul>
            <p>In summary, Motadata is the perfect solution needed to confidently handle the challenges of today’s increasingly complex business operations and IT infrastructure management.</p>
          `,
          brochureUrl: 'https://www.motadata.com/collaterals/iip-datasheet.pdf'
        },
        {
          slug: 'it-infrastructure',
          title: 'IT Infrastructure',
          content: `
            <p>SunFlex has joined the system integration field and provided ICT Solutions Since 2010. Since then SunFlex has been key partner of world leading ICT and pioneering and successful enterprise in IT infrastructure solutions for Banking, MFI, Telecommunication, SMB…. Currently, SunFlex is one of the local Leading System integration solutions and Service providers in Cambodia.</p>
            <h2>Innovations that accelerate your digital transformation:</h2>
            <p>Your IT solutions need to work together to create a solid foundation for your organization. Learn more about how IT infrastructure solutions are designed to complement each other and to propel your business into the future.</p>
            <h2>Get Cloud-Ready</h2>
            <p>Cloud is the new operating model for IT, and it’s transforming how business gets done. Now you can get superior results today and plan for tomorrow with a cloud-ready IT infrastructure that’s available in three consumption models—on premises, cloud at customer, and public cloud.</p>
          `,
          brochureUrl: null
        }
        // Add other products (cloud-solution, big-data-warehouse, etc.) here
      ];
      return products.find(p => p.slug === this.slug) || { title: 'Not Found', content: '<p>Product details not found.</p>', brochureUrl: null };
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

.product-page {
  @apply font-roboto;
}

.prose :where(ul):not(:where([class~="not-prose"] *)) {
  @apply list-disc pl-5 mb-4;
}
</style>