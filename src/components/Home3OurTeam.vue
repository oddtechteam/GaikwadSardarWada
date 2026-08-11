<template>
  <div class="col-xl-8 col-lg-8">
    <Swiper
      class="swiper-container swiper-team-2 p-b50 lightgallery"
      :slides-per-view="3"
      :space-between="30"
      :loop="true"
      :speed="1500"
      :autoplay="{ delay: 1500 }"
      :modules="[Autoplay]"
      :breakpoints="{
        1200: { slidesPerView: 3 },
        575: { slidesPerView: 2 },
        240: { slidesPerView: 1 }
      }"
    >
      <SwiperSlide
        class="swiper-slide"
        v-for="({ img, name, position }, ind) in ourTeam"
        :key="ind"
      >
        <div class="dz-team style-4 text-center m-b30 overlay-shine aos-item">
          <div class="dz-media">
            <a href="javascript:void(0);"><img :src="img" alt="" /></a>
          </div>
          <div class="dz-content m-t20">
            <h6 class="dz-position line text-primary">{{ position }}</h6>
            <h5 class="dz-name">
              <a href="javascript:void(0);">{{ name }}</a>
            </h5>
            <ul class="team-social d-flex">
              <li>
                <a href="https://www.facebook.com/dexignzone/" target="_blank"
                  ><i class="fab fa-facebook-f"></i
                ></a>
              </li>
              <li>
                <a href="https://www.instagram.com/dexignzone/" target="_blank"
                  ><i class="fab fa-instagram"></i
                ></a>
              </li>
              <li>
                <a href="https://twitter.com/dexignzones/" target="_blank"
                  ><i class="fab fa-twitter"></i
                ></a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCGL8V6uxNNMRrk3oZfVct1g" target="_blank"
                  ><i class="fab fa-youtube"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import team_pic1 from '@/assets/images/team/pic1.jpg'
import team_pic2 from '@/assets/images/team/pic2.jpg'
import team_pic3 from '@/assets/images/team/pic3.jpg'

export default defineComponent({
  components: { Swiper, SwiperSlide },
  setup() {
    return {
      ourTeam: [
        { img: team_pic1, position: 'Engineer', name: 'Andrey Carol' },
        { img: team_pic2, position: 'Manager Effiect', name: 'Phillip Schleifer' },
        { img: team_pic3, position: 'CEO Factory', name: 'Lindsey Botosh' },
        { img: team_pic1, position: 'Engineer', name: 'Andrey Carol' }
      ],
      Autoplay
    }
  }
})
</script>

<style scoped></style>
