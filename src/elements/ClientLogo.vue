<template>
  <div class="clients-wrapper">
    <div class="container">
      <Swiper
        class="swiper-container clients-swiper"
        :slides-per-view="6"
        :modules="[Autoplay]"
        :loop="true"
        :speed="1500"
        :autoplay="{ delay: 1500 }"
        :breakpoints="{
          1200: { slidesPerView: 6 },
          991: { slidesPerView: 5 },
          775: { slidesPerView: 4 },
          575: { slidesPerView: 3 },
          240: { slidesPerView: 2 }
        }"
      >
        <SwiperSlide class="swiper-slide" v-for="({ logo }, ind) in clientLogoArr" :key="ind">
          <div class="clients-logo aos-item">
            <img style="opacity: 1 !important" class="logo-main" :src="logo" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import logoGray1 from '@/assets/images/logo/logo-gray1.png'
import logoGray2 from '@/assets/images/logo/logo-gray2.png'
import logoGray3 from '@/assets/images/logo/logo-gray3.png'
import logoGray4 from '@/assets/images/logo/logo-gray4.png'
import logoGray5 from '@/assets/images/logo/logo-gray5.png'
import logoGray6 from '@/assets/images/logo/logo-gray6.png'

export default defineComponent({
  components: { Swiper, SwiperSlide },
  setup() {
    return {
      clientLogoArr: [
        { logo: logoGray1 },
        { logo: logoGray2 },
        { logo: logoGray3 },
        { logo: logoGray4 },
        { logo: logoGray5 },
        { logo: logoGray6 },
        { logo: logoGray1 }
      ],
      Autoplay
    }
  }
})
</script>
