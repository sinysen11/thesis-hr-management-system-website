<template>
  <div id="content" class="site-content py-8">
    <img
      :src="bannerImage"
      alt="Partners Banner"
      class="w-full h-auto"
      @error="handleImageError"
    />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div class="spacer h-16"></div>
  
  <div class="flex flex-wrap justify-center items-center">
    <div class="px-4 py-2"><a href="#"><img :src="oracle" alt="Oracle" class="h-auto w-4/5" @error="handleImageError" /></a></div>
    <div class="px-4 py-2"><a href="#"><img :src="ibmsur" alt="IBM SUR" class="h-auto w-4/5" @error="handleImageError" /></a></div>
    <div class="px-4 py-2"><a href="#"><img :src="f5" alt="F5" class="h-auto w-1/2" @error="handleImageError" /></a></div>
    <div class="px-4 py-2"><a href="#"><img :src="oracleflexcube" alt="Oracle Flexcube" class="h-auto w-4/5" @error="handleImageError" /></a></div>
    <div class="px-4 py-2"><a href="#"><img :src="ibm" alt="IBM" class="h-auto w-4/5" @error="handleImageError" /></a></div>
    <div class="px-4 py-2"><a href="#"><img :src="beyong" alt="Beyong" class="h-auto w-4/5" @error="handleImageError" /></a></div>
    <div class="px-4 py-2"><a href="#"><img :src="fortinet" alt="Fortinet" class="h-auto w-4/5" @error="handleImageError" /></a></div>
    <div class="px-4 py-2"><a href="#"><img :src="solarwinds" alt="SolarWinds" class="h-auto w-4/5" @error="handleImageError" /></a></div>
    <div class="px-4 py-2"><a href="#"><img :src="lenovo" alt="Lenovo" class="h-auto w-4/5" @error="handleImageError" /></a></div>
    <div class="px-4 py-2"><a href="#"><img :src="entrust" alt="Entrust" class="h-auto w-4/5" @error="handleImageError" /></a></div>
    <div class="px-4 py-2"><a href="#"><img :src="T" alt="T" class="h-auto w-4/5" @error="handleImageError" /></a></div>
    <div class="px-4 py-2"><a href="#"><img :src="forescout" alt="Forescout" class="h-auto w-4/5" @error="handleImageError" /></a></div>
    <div class="px-4 py-2"><a href="#"><img :src="netapp" alt="NetApp" class="h-auto w-4/5" @error="handleImageError" /></a></div>
    <div class="px-4 py-2"><a href="#"><img :src="forcepoint" alt="Forcepoint" class="h-auto w-4/5" @error="handleImageError" /></a></div>
    <div class="px-4 py-2"><a href="#"><img :src="sentinelone" alt="SentinelOne" class="h-auto w-4/5" @error="handleImageError" /></a></div>
    <div class="px-4 py-2"><a href="#"><img :src="motadata" alt="Motadata" class="h-auto w-4/5" @error="handleImageError" /></a></div>
    <div class="px-4 py-2"><a href="#"><img :src="microsoft" alt="Microsoft" class="h-auto w-4/5" @error="handleImageError" /></a></div>
    <div class="px-4 py-2"><a href="#"><img :src="sonaroube" alt="SonarQube" class="h-auto w-4/5" @error="handleImageError" /></a></div>
    <div class="px-4 py-2"><a href="#"><img :src="aruba" alt="Aruba" class="h-auto w-4/5" @error="handleImageError" /></a></div>
    <div class="px-4 py-2"><a href="#"><img :src="redhat" alt="RedHat" class="h-auto w-4/5" @error="handleImageError" /></a></div>
    <div class="px-4 py-2"><a href="#"><img :src="wmware" alt="VMware" class="h-auto w-4/5" @error="handleImageError" /></a></div>
    <div class="px-4 py-2"><a href="#"><img :src="bitdefender" alt="Bitdefender" class="h-auto w-4/5" @error="handleImageError" /></a></div>
    <div class="px-4 py-2"><a href="#"><img :src="cisco" alt="Cisco" class="h-auto w-4/5" @error="handleImageError" /></a></div>
    <div class="px-4 py-2"><a href="#"><img :src="apc" alt="APC" class="h-auto w-4/5" @error="handleImageError" /></a></div>
  </div>
  
  <div class="spacer h-16"></div>
</div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

// ✅ Import all logos statically
import oracle from '@/assets/images/4_files/oracle.jpg'
import ibmsur from '@/assets/images/4_files/ibmsur.jpg'
import f5 from '@/assets/images/4_files/f5.jpg'
import oracleflexcube from '@/assets/images/4_files/oracleflexcube.jpg'
import ibm from '@/assets/images/4_files/ibm.jpg'
import beyong from '@/assets/images/4_files/beyong.jpg'
import fortinet from '@/assets/images/4_files/fortinet.jpg'
import solarwinds from '@/assets/images/4_files/solarwinds.jpg'
import lenovo from '@/assets/images/4_files/lenovo.jpg'
import entrust from '@/assets/images/4_files/entrust.jpg'
import T from '@/assets/images/4_files/T.jpg'
import forescout from '@/assets/images/4_files/forescout.jpg'
import netapp from '@/assets/images/4_files/netapp.jpg'
import forcepoint from '@/assets/images/4_files/forcepoint.jpg'
import sentinelone from '@/assets/images/4_files/sentinelone.jpg'
import motadata from '@/assets/images/4_files/motadata.jpg'
import microsoft from '@/assets/images/4_files/microsoft.jpg'
import sonaroube from '@/assets/images/4_files/sonaroube.jpg'
import aruba from '@/assets/images/4_files/aruba.jpg'
import redhat from '@/assets/images/4_files/redhat.jpg'
import wmware from '@/assets/images/4_files/wmware.jpg'
import bitdefender from '@/assets/images/4_files/bitdefender.jpg'
import cisco from '@/assets/images/4_files/cisco.jpg'
import apc from '@/assets/images/4_files/apc.jpg'

export default {
  name: 'OurPartner',
  components: { VueSlickCarousel },
  data() {
    return {
      bannerImage: require('@/assets/images/4_files/partner.jpg'),
      // fallbackImage: require('@/assets/images/fallback.jpg'),

      // expose all imports to template
      oracle,
      ibmsur,
      f5,
      oracleflexcube,
      ibm,
      beyong,
      fortinet,
      solarwinds,
      lenovo,
      entrust,
      T,
      forescout,
      netapp,
      forcepoint,
      sentinelone,
      motadata,
      microsoft,
      sonaroube,
      aruba,
      redhat,
      wmware,
      bitdefender,
      cisco,
      apc,

      carouselSettings: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
          { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 4 }},
          { breakpoint: 640, settings: { slidesToShow: 2, slidesToScroll: 2 }}
        ]
      }
    }
  },
  methods: {
    handleImageError(event) {
      event.target.src = this.fallbackImage
    }
  }
}
</script>

<style scoped>
.spacer {
  height: 4rem;
}
.partner {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
