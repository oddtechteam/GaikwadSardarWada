<template>
  <div class="container">
    
    <!-- Section Heading -->
    <div class="section-head style-1 text-center">
      <h6 class="sub-title text-primary">GALLERY</h6>
      <h2 class="title">Moments at the Wada</h2>
      <p>Some glimpses of the space, experiences, and stories that unfold here.</p>
    </div>

    <!-- Slider -->
    <Swiper
      class="swiper-container gallery-swiper"
      :slides-per-view="3"
      :space-between="30"
      :loop="true"
      :autoplay="{ delay: 2500 }"
      :modules="modules"
      :breakpoints="{
        1200: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
        320: { slidesPerView: 1 }
      }"
    >
      <SwiperSlide v-for="(item, ind) in gallery" :key="ind">
        <div class="dz-card blog-grid style-1 h-100 text-center">
          
          <!-- Image -->
          <div class="dz-media">
            <img :src="item.img" alt="" />
          </div>

          <!-- Content -->
          <div class="dz-info">
            <h5 class="dz-title">{{ item.title }}</h5>
            <p>{{ item.desc }}</p>
          </div>

        </div>
      </SwiperSlide>
    </Swiper>

    <!-- CTA Button -->
    <div class="text-center mt-4">
      <RouterLink to="/portfolio" class="btn btn-primary btn-rounded">
        View Full Gallery
      </RouterLink>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

import pic1 from '@/assets/images/wada/500X500/5.png'
import pic2 from '@/assets/images/wada/500X500/2X500/5.png'
import pic3 from '@/assets/images/wada/500X500/2X500/3.png'
import pic4 from '@/assets/images/wada/500X500/4.png'

export default defineComponent({
  components: { Swiper, SwiperSlide },
  setup() {
    return {
      gallery: [
        {
          img: pic1,
          title: 'Courtyard Vibes',
          desc: 'Open spaces filled with light and calm.'
        },
        {
          img: pic2,
          title: 'Heritage Architecture',
          desc: 'Wooden pillars and timeless textures.'
        },
        {
          img: pic3,
          title: 'Celebrations',
          desc: 'Intimate moments and joyful gatherings.'
        },
        {
          img: pic4,
          title: 'Authentic Food',
          desc: 'Traditional Maharashtrian meals.'
        }
      ],
      modules: [Autoplay]
    }
  }
})
</script>

<style scoped></style>