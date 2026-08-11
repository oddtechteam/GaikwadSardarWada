<template>
  <Swiper
    class="swiper-container swiper-team"
    :slides-per-view="5"
    :space-between="30"
    :loop="true"
    :modules="module"
    :autoplay="{ delay: 1500 }"
    :speed="1500"
    :breakpoints="{
      1200: { slidesPerView: 4 },
      775: { slidesPerView: 3 },
      575: { slidesPerView: 2 },
      240: { slidesPerView: 1 }
    }"
  >
    <SwiperSlide class="swiper-slide" v-for="({ img }, ind) in sliderArr" :key="ind">
      <div class="card dz-team style-1">
        <div class="card-media">
          <img :src="img" alt="" />
        </div>
        <div class="card-body">
          <h5 class="dz-name m-b5">
            <RouterLink to="?">Amelia Stanley</RouterLink>
          </h5>
          <span class="dz-position">Engineer</span>
          <ul class="dz-social">
            <li>
              <RouterLink to="?"><i class="fab fa-skype"></i></RouterLink>
            </li>
            <li>
              <RouterLink to="?"><i class="fab fa-facebook"></i></RouterLink>
            </li>
            <li>
              <RouterLink to="?"><i class="fab fa-google-plus"></i></RouterLink>
            </li>
            <li>
              <RouterLink to="?"><i class="fab fa-twitter"></i></RouterLink>
            </li>
            <li>
              <RouterLink to="?"><i class="fab fa-youtube"></i></RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import teamPic1 from '@/assets/images/team/pic1.jpg'
import teamPic2 from '@/assets/images/team/pic2.jpg'
import teamPic3 from '@/assets/images/team/pic3.jpg'
import teamPic4 from '@/assets/images/team/pic4.jpg'
import teamPic5 from '@/assets/images/team/pic5.jpg'

export default defineComponent({
  name: 'testimonial2_',
  components: { Swiper, SwiperSlide },
  setup() {
    return {
      sliderArr: [
        { img: teamPic1 },
        { img: teamPic2 },
        { img: teamPic3 },
        { img: teamPic4 },
        { img: teamPic5 }
      ],
      module: [Autoplay]
    }
  }
})
</script>

<style scoped></style>
