<template>
  <div class="testi-inner">
    <Swiper
      class="swiper-container testimonial-swiper-3"
      :slides-per-view="3"
      :speed="1500"
      :loop="true"
      :space-between="30"
      :modules="modules"
      :pagination="pagination"
      :navigation="{
        prevEl: '.btn-prev',
        nextEl: '.btn-next'
      }"
      :breakpoints="{
        1200: { slidesPerView: 3 },
        991: { slidesPerView: 2 },
        240: { slidesPerView: 1 }
      }"
    >
      <SwiperSlide
        class="swiper-slide"
        v-for="({ img, name, position }, ind) in testimoniial"
        :key="ind"
      >
        <div class="testimonial-3">
          <div class="testimonial-detail">
            <div class="testimonial-pic">
              <img :src="img" alt="" />
            </div>
            <div class="clearfix">
              <h4 class="testimonial-name">{{ name }}</h4>
              <span class="testimonial-position">{{ position }}</span>
            </div>
          </div>
          <div class="testimonial-text">
            <p>
              There are many variations of passages of Lore alteration in some form, by injected
              humour, or which don't look even slightly believable.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <div class="num-pagination style-1">
        <div class="testimonial3-next btn-prev"><i class="las la-arrow-left"></i></div>
        <div class="testimonial3-pagination"></div>
        <div class="testimonial3-prev btn-next"><i class="las la-arrow-right"></i></div>
      </div>
    </Swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import testimonial_pic1 from '@/assets/images/testimonials/pic1.jpg'
import testimonial_pic2 from '@/assets/images/testimonials/pic2.jpg'
import testimonial_pic3 from '@/assets/images/testimonials/pic3.jpg'

export default defineComponent({
  components: { Swiper, SwiperSlide },
  setup() {
    return {
      testimoniial: [
        { img: testimonial_pic1, name: 'Karla Lyias', position: 'Engineer' },
        { img: testimonial_pic2, name: 'Lindsey', position: 'Manager Effiect' },
        { img: testimonial_pic3, name: 'Kaylynn Donin', position: 'CEO Factory' },
        { img: testimonial_pic1, name: 'Karla Lyias', position: 'Engineer' }
      ],
      modules: [Navigation, Pagination],
      pagination: {
        el: '.testimonial3-pagination',
        clickable: true,
        renderBullet: function (index: number, className: string) {
          return '<span class="' + className + '">' + '0' + (index + 1) + '</span>'
        }
      }
    }
  }
})
</script>
