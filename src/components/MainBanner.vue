<template>
  <div class="slidearea">
    <div class="side-contact-info">
      <ul>
        <li><i class="fas fa-phone-alt"></i> +91 123 456 7890</li>
        <li><i class="fas fa-envelope"></i> Visvainfo@gmail.com</li>
      </ul>
    </div>
    <div class="silder-one">
      <Swiper
        class="swiper-container main-silder-swiper"
        :speed="1500"
        :parallax="true"
        :modules="module"
        :pagination="pagination"
        :loop="true"
        :navigation="{
          prevEl: '.btn-prev',
          nextEl: '.btn-next'
        }"
      >
        <SwiperSlide class="swiper-slide">
          <div class="silder-img overlay-black-light">
            <img src="@/assets/images/main-slider/pic1.jpg" data-swiper-parallax="30%" alt="" />
          </div>
          <div class="silder-content" data-swiper-parallax="-40%">
            <div class="inner-content">
              <h6 class="sub-title">DESIGNING</h6>
              <h1 class="title">We Create</h1>
              <h3 class="title-small">Unique Architecture<br />Design Ideas</h3>
              <RouterLink
                to="/about-us"
                class="btn shadow-primary btn-light btn-rounded btn-ov-secondary"
                >READ MORE <i class="m-l10 fas fa-caret-right"></i
              ></RouterLink>
            </div>
            <div class="overlay-slide" data-swiper-parallax="100%"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide class="swiper-slide">
          <div class="silder-img overlay-black-light">
            <img src="@/assets/images/main-slider/pic2.jpg" data-swiper-parallax="30%" alt="" />
          </div>
          <div class="silder-content" data-swiper-parallax="-40%">
            <div class="inner-content">
              <h6 class="sub-title">DESIGNING</h6>
              <h1 class="title">We Create</h1>
              <h3 class="title-small">Unique Architecture<br />Design Ideas</h3>
              <RouterLink
                to="/about-us"
                class="btn shadow-primary btn-light btn-rounded btn-ov-secondary"
                >READ MORE <i class="m-l10 fas fa-caret-right"></i
              ></RouterLink>
            </div>
            <div class="overlay-slide" data-swiper-parallax="100%"></div>
          </div>
        </SwiperSlide>
        <div class="slider-one-pagination">
          <!-- Add Navigation -->
          <div class="btn-prev swiper-button-prev1 swiper-button-white">
            <i class="las la-long-arrow-alt-left"></i>PREV
          </div>
          <div class="swiper-pagination swiper-pagination-white"></div>
          <div class="btn-next swiper-button-next1 swiper-button-white">
            NEXT<i class="las la-long-arrow-alt-right"></i>
          </div>
        </div>
      </Swiper>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Parallax, Pagination, Navigation } from 'swiper/modules'

export default defineComponent({
  name: 'mainBanner',
  components: { Swiper, SwiperSlide },
  setup() {
    return {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index: number, className: string) {
          return '<span class="' + className + '">' + (index + 1) + '</span>'
        }
      },
      module: [Parallax, Pagination, Navigation]
    }
  }
})
</script>
