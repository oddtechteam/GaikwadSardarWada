<template>
  <div class="container-fluid">

    <Lightgallery :settings="{ speed: 500, plugins: plugins, selector: '.lightimg' }">

      <Swiper
        class="swiper-container swiper-portfolio lightgallery aos-item"
        :slides-per-view="4"
        :space-between="30"
        :loop="true"
        :breakpoints="{
          1200: { slidesPerView: 4 },
          991: { slidesPerView: 3 },
          575: { slidesPerView: 2 },
          240: { slidesPerView: 1 }
        }"
        :modules="module"
        :autoplay="{ delay: 2500 }"
        :speed="1200"
      >

        <SwiperSlide
          v-for="(item, ind) in gallery"
          :key="ind"
        >
          <div class="dz-box overlay style-1 text-center">

            <!-- Image -->
            <div class="dz-media">
              <img :src="item.img" alt="" />
            </div>

            <!-- Lightbox -->
            <div class="dz-info">
              <span :data-src="item.img" class="view-btn lightimg">
                <img :src="item.img" style="display: none" />
              </span>

              <h6 class="sub-title">{{ item.subtitle }}</h6>

              <h4 class="title m-b15">
                {{ item.title }}
              </h4>

            </div>

          </div>
        </SwiperSlide>

      </Swiper>

    </Lightgallery>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import Lightgallery from 'lightgallery/vue'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

// Replace these with your real images
import pic1 from '@/assets/images/work/work-1/pic-1.jpg'
import pic2 from '@/assets/images/work/work-1/pic-2.jpg'
import pic3 from '@/assets/images/work/work-1/pic-3.jpg'
import pic4 from '@/assets/images/work/work-1/pic-4.jpg'

export default defineComponent({
  components: { Swiper, SwiperSlide, Lightgallery },

  setup() {
    return {
      gallery: [
        {
          img: pic1,
          subtitle: 'Courtyard',
          title: 'Sunlit Open Spaces'
        },
        {
          img: pic2,
          subtitle: 'Heritage',
          title: 'Wooden Pillars & Architecture'
        },
        {
          img: pic3,
          subtitle: 'Celebrations',
          title: 'Intimate Events & Gatherings'
        },
        {
          img: pic4,
          subtitle: 'Dining',
          title: 'Authentic Maharashtrian Meals'
        },
        {
          img: pic2,
          subtitle: 'Stay',
          title: 'Peaceful Heritage Rooms'
        }
      ],
      module: [Autoplay]
    }
  },

  data: () => ({
    plugins: [lgThumbnail, lgZoom]
  })
})
</script>

<style scoped>
.content-inner {
  background-position: center;
}
</style>