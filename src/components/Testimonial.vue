<template>
  <!-- @vue-skip -->
  <div class="container">
    <div class="section-head style-1 text-center">
      <h6 class="sub-title text-primary">TESTIMONIAL</h6>
      <h2 class="title">What Our Clients Says</h2>
    </div>
    <div class="row">
      <div class="col-lg-6 align-self-center aos-item">
        <Swiper
          class="swiper-container swiper-client"
          :speed="1500"
          :loop="true"
          :modules="[Thumbs]"
          :thumbs="{ swiper: thumbsSwiper }"
        >
          <SwiperSlide v-for="({ name }, ind) in testimonial" :key="ind" class="swiper-slide">
            <div class="testimonial-1">
              <div class="testimonial-info">
                <div class="flaticon-quotation quote-icon"></div>
                <div class="testimonial-text">
                  <p>
                    Phasellus facilisis urna at ultrices egestas. Nulla mi arcu, finibus non lectus
                    non, mollis tempus enim. Curabitur vel ipsum eget augue pharetra tempus ac eget
                    ipsum. Fusce vestibulum leo quis bibendum placerat. Duis porttitor mi at mauris
                    auctor eleifend. Cras sed nibh sem. Proin quis ligula eget purus eleifend
                    euismod. Sed rhoncus nunc vitae diam.
                  </p>
                </div>
                <div class="testimonial-detail">
                  <h4 class="testimonial-name">{{ name }}</h4>
                  <span class="testimonial-position text-primary">CEO Founder</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="col-lg-6">
        <div class="client-area">
          <svg
            viewBox="0 0 574 511"
            class="client-bg aos-item"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
          >
            <path
              stroke="var(--primary)"
              stroke-width="3"
              fill="none"
              d="M466.253 161.575c32.408-59.804 26.317-127.495-35.817-124.214-21.983 1.159-42.258 16.216-64.265 17.762-20.248 1.425-39.152-7.801-56.128-17.686-34.373-20.017-65.685-58.278-103.358-16.906-25.654 28.169 3.163 72.215-24.694 97.514-8.698 7.905-22.479 9.509-33.89 10.987-28.345 3.671-50.444 8.129-77.333 21.075-50.333 24.214-63.016 41.712-68.009 72.376-5.411 33.246 18.459 81.167 57.923 86.892 47.337 6.875 62.6-27.975 115.202-20.21 44.397 6.545 37.678 43.589 36.73 76.523-1.791 62.123 48.901 88.979 106.445 67.392 18.747-7.036 54.435-25.45 61.781-46.766 5.929-17.204-8.925-38.223-12.682-54.363-13.218-56.766 52.37-36.554 90.575-32.547 36.51 3.834 98.693 4.263 110.935-52.659 4.2-19.531-24.295-55.633-42.521-58.503-25.786-4.051-73.433-3.538-60.894-26.667z"
            ></path>
            <path
              fill-rule="evenodd"
              fill="var(--rgba-primary-1)"
              d="M421.378 125.766c-2.044-75.742-45.622-137.651-103.734-99.88-20.562 13.364-31.734 39.18-52.103 52.929-18.739 12.652-42.114 14.28-63.996 14.201-44.308-.167-95.824-19.637-109.124 41.255-9.059 41.463 43.273 67.904 30.49 107.825-3.989 12.47-16.39 21.694-26.574 29.475-25.3 19.327-44.135 35.937-62.865 63.401-35.069 51.394-37.558 75.336-25.296 107.699 13.297 35.087 63.014 68.02 104.272 51.562 49.494-19.732 44.809-61.853 99.879-83.658 46.474-18.414 60.624 21.064 78.052 53.364 32.873 60.926 96.733 58.6 140.221 5.725 14.167-17.228 38.338-54.87 33.553-79.523-3.863-19.899-29.899-31.903-42.513-45.38-44.367-47.4 30.162-64.432 69.25-81.845 37.355-16.637 97.582-50.856 77.688-112.586-6.827-21.182-54.423-40.137-73.603-32.754-27.132 10.453-72.81 37.485-73.597 8.19z"
            ></path>
          </svg>
          <Swiper
            wrapperTag="ul"
            :slides-per-view="6"
            class="aos-item"
            :modules="[Thumbs]"
            @swiper="setThumbsSwiper"
          >
            <SwiperSlide tag="li" v-for="({ img }, ind) in testimonial" :key="ind">
              <RouterLink to="?" class="dzclient1"><img :src="img" alt="" /></RouterLink>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Thumbs } from 'swiper/modules'
import testimonialPic1 from '@/assets/images/testimonials/pic1.jpg'
import testimonialPic2 from '@/assets/images/testimonials/pic2.jpg'
import testimonialPic3 from '@/assets/images/testimonials/pic3.jpg'
import testimonialPic4 from '@/assets/images/testimonials/pic4.jpg'
import testimonialPic5 from '@/assets/images/testimonials/pic5.jpg'
import testimonialPic6 from '@/assets/images/testimonials/pic6.jpg'

export default defineComponent({
  name: 'testionil_',
  components: { Swiper, SwiperSlide },

  setup() {
    const thumbsSwiper = ref(null)
    const setThumbsSwiper = (swiper: null) => {
      thumbsSwiper.value = swiper
    }
    return {
      Thumbs,
      thumbsSwiper,
      setThumbsSwiper,
      testimonial: [
        {
          name: 'Aditi & Rahul',
          img: testimonialPic1,
          text: 'A beautiful heritage space. The courtyard and atmosphere felt peaceful and authentic.'
        },
        {
          name: 'Sneha Patil',
          img: testimonialPic2,
          text: 'We hosted a small celebration here and everything felt warm and personal.'
        },
        {
          name: 'Rohan Kulkarni',
          img: testimonialPic3,
          text: 'Perfect place for shoots. The natural light and textures are amazing.'
        },
        {
          name: 'Neha Joshi',
          img: testimonialPic4,
          text: 'A calm escape near Pune. It truly feels like stepping into another time.'
        }
      ]
    }
  }
})
</script>

<style scoped>
.client-area ul li:nth-child(2) {
  top: 45%;
}
.client-area ul li:nth-child(5) {
  top: 75%;
}
.client-area ul li:nth-child(6) {
  top: 60%;
}
</style>
