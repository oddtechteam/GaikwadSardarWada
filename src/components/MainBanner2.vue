<template>
  <div class="slidearea ps-0">
    <div class="silder-two">
      <Swiper
        class="swiper-container main-silder-swiper-02"
        :loop="true"
        :speed="1500"
        :parallax="true"
        :modules="module"
        :autoplay="{ delay: 2500 }"
        :pagination="pagination"
        :navigation="{
          prevEl: '.btn-prev',
          nextEl: '.btn-next'
        }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <SwiperSlide
          v-for="(slide, ind) in mainBannerArr"
          :key="ind"
          class="swiper-slide"
          :style="`background-image: url(${slide.bg});
              background-position: bottom left;
              background-repeat: no-repeat;`"
        >
          <div class="silder-content" data-swiper-parallax="-40%">
            <div
              class="side-image"
              data-swiper-parallax="100%"
              :class="{ 'img-animate': activeIndex === ind || activeIndex === -1 }"
            >
              <img :src="slide.img" alt="" />
            </div>

            <div class="inner-content">
              <div
                class="inner-text"
                :class="{ 'text-animate': activeIndex === ind || activeIndex === -1 }"
              >
                <h3 class="title-small" v-html="slide.title"></h3>
                <p>{{ slide.desc }}</p>
                <RouterLink
                  :to="slide.link"
                  class="btn shadow-primary btn-primary btn-rounded hover-icon"
                >
                  <span>{{ slide.cta }}</span>
                  <i class="fas fa-arrow-right"></i>
                </RouterLink>
              </div>
            </div>

            <div
              class="overlay-slide"
              data-swiper-parallax="100%"
              :class="{ 'img-animate': activeIndex === ind || activeIndex === -1 }"
            >
              <img :src="slide.img2" alt="" />
            </div>
          </div>
        </SwiperSlide>

        <div class="swiper-pagination swiper-pagination-white"></div>

        <div class="slider-one-pagination">
          <div class="btn-prev swiper-button-prev2 swiper-button-white">
            <i class="las la-angle-left"></i>
          </div>
          <div class="btn-next swiper-button-next2 swiper-button-white">
            <i class="las la-angle-right"></i>
          </div>
        </div>
      </Swiper>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Parallax, Autoplay, Pagination, Navigation } from 'swiper/modules'

import bg1 from '@/assets/images/background/bg1.png'
import slide3 from '@/assets/images/main-slider/side3.jpg'
import slide4 from '@/assets/images/main-slider/side4.jpg'
import slide5 from '@/assets/images/main-slider/side5.jpg'
import slide_pic3 from '@/assets/images/main-slider/pic1.jpeg'
import slide_pic4 from '@/assets/images/main-slider/pic2.jpeg'
import slide_pic5 from '@/assets/images/main-slider/pic3.jpeg'

export default defineComponent({
  components: { Swiper, SwiperSlide },
  setup() {
    const activeIndex = ref(-1)

    const onSwiper = () => {
      setTimeout(() => {
        activeIndex.value = 0
      }, 100)
    }

    const onSlideChange = (swiper: any) => {
      activeIndex.value = -99
      setTimeout(() => {
        activeIndex.value = swiper.realIndex
      }, 100)
    }

    return {
      activeIndex,
      onSwiper,
      onSlideChange,
      mainBannerArr: [
        {
          bg: bg1,
          img: slide3,
          img2: slide_pic3,
          title: `Gaikwad Sardar Wada<br/>350 Years of Living Heritage`,
          desc: `A place where time slows down. Step into history, culture, and calm village life just outside Pune.`,
          cta: `Explore the Wada`,
          link: `/about-us`
        },
        {
          bg: bg1,
          img: slide4,
          img2: slide_pic4,
          title: `Stay. Celebrate. Create.<br/>All in One Space`,
          desc: `From peaceful stays to intimate celebrations and creative shoots, the wada adapts to your vibe.`,
          cta: `View Experiences`,
          link: `/experiences`
        },
        {
          bg: bg1,
          img: slide5,
          img2: slide_pic5,
          title: `Not Just a Stay.<br/>A Feeling.`,
          desc: `Quiet mornings, soulful food, and spaces that let you pause, breathe, and reconnect.`,
          cta: `Book Your Experience`,
          link: `/contact`
        }
      ],
      module: [Parallax, Autoplay, Pagination, Navigation],
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    }
  }
})
</script>

<style scoped>
/* ── Text entrance (title / desc / button staggered) ── */
.inner-text .title-small {
  opacity: 0;
  transition: opacity 0.8s ease 0.3s;
}
.inner-text.text-animate .title-small {
  opacity: 1;
}

.inner-text p {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s;
}
.inner-text.text-animate p {
  opacity: 1;
  transform: translateY(0);
}

.inner-text .btn {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease 0.7s, transform 0.8s ease 0.7s;
}
.inner-text.text-animate .btn {
  opacity: 1;
  transform: translateY(0);
}

/* ── Side accent image fade-in (transform is already owned by dzMove1) ── */
.side-image {
  opacity: 0;
  transition: opacity 1s ease 0.2s;
}
.side-image.img-animate {
  opacity: 1;
}

/* ── Main cover image: slide/scale entrance + continuous Ken Burns zoom ── */
.overlay-slide {
  opacity: 0;
  transform: translateX(40px) scale(0.96);
  transition: opacity 1s ease 0.15s, transform 1s ease 0.15s;
}
.overlay-slide.img-animate {
  opacity: 1;
  transform: translateX(0) scale(1);
}
.overlay-slide img {
  animation: bannerKenBurns 9s ease-in-out infinite alternate;
}
@keyframes bannerKenBurns {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.08);
  }
}

/* ── Pagination bullets: subtle scale pulse on active ── */
:deep(.swiper-pagination-bullet) {
  transition: transform 0.3s ease;
}
:deep(.swiper-pagination-bullet-active) {
  transform: scale(1.3);
}

@media (prefers-reduced-motion: reduce) {
  .overlay-slide img {
    animation: none;
  }
}
</style>