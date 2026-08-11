<template>
  <div class="row align-items-center">
    <div class="col-lg-12 m-b30">
      <Swiper
        class="swiper-container blog-swiper-2"
        :slides-per-view="3"
        :space-between="30"
        :modules="module"
        :loop="true"
        :speed="1500"
        :parallax="true"
        :navigation="{
          prevEl: '.btn-prev',
          nextEl: '.btn-next'
        }"
        :pagination="pagination"
        :breakpoints="{
          1200: { slidesPerView: 3 },
          775: { slidesPerView: 2 },
          240: { slidesPerView: 1 }
        }"
      >
        <SwiperSlide
          class="swiper-slide"
          v-for="({ img, title, text, num }, ind) in home3Arr"
          :key="ind"
        >
          <div class="dz-card blog-grid style-2 aos-item rounded-0">
            <div class="dz-media">
              <RouterLink to="/blog-details"><img :src="img" alt="" /></RouterLink>
            </div>
            <div class="dz-meta">
              <ul>
                <li class="post-date">{{ num }}</li>
              </ul>
            </div>
            <div class="dz-info">
              <div class="bottom-contact">
                <h5 class="dz-title">
                  <RouterLink to="/blog-details">{{ title }}</RouterLink>
                </h5>
                <p class="text">{{ text }}</p>
              </div>
              <div class="read-more">
                <RouterLink
                  to="/blog-details"
                  class="btn btn-primary btn-rounded btn-sm align-items-center"
                >
                  <span>View More<i class="fas fa-arrow-right"></i></span>
                </RouterLink>
              </div>
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Parallax } from 'swiper/modules'
import work_pic1 from '@/assets/images/work/work-1/pic-1.jpg'
import work_pic2 from '@/assets/images/work/work-1/pic-2.jpg'
import work_pic3 from '@/assets/images/work/work-1/pic-3.jpg'
export default defineComponent({
  components: { Swiper, SwiperSlide },
  setup() {
    return {
      home3Arr: [
        { img: work_pic1, title: 'Work Space', text: 'Dedicated and hot desk', num: '01' },
        { img: work_pic2, title: 'Private Space', text: 'Move-in ready office', num: '02' },
        {
          img: work_pic3,
          title: 'Custom Space',
          text: 'Unique suite, a specialized floor',
          num: '03'
        },
        { img: work_pic1, title: 'Work Space', text: 'Dedicated and hot desk', num: '04' }
      ],
      module: [Navigation, Pagination, Parallax],
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

<style scoped></style>
