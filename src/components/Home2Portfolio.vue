<template>
  <div class="col-xl-9 col-lg-8">
    <Swiper
      class="swiper-container swiper-portfolio-2 lightgallery"
      :slides-per-view="3"
      :loop="true"
      :speed="1500"
      :breakpoints="{
        1200: { slidesPerView: 3 },
        575: { slidesPerView: 2 },
        240: { slidesPerView: 1 },
      }"
      :pagination="pagination"
      :modules="modules"
    >
      <SwiperSlide
        class="swiper-slide"
        v-for="({ img, subtitle, title, text }, ind) in ourPortfolio"
        :key="ind"
      >
        <div class="dz-box overlay style-2">
          <div class="dz-media">
            <img :src="img" alt="" />
          </div>
          <div class="dz-info">
            <h6 class="sub-title">{{ subtitle }}</h6>
            <h4 class="title m-b15">
              <RouterLink to="">{{ title }}</RouterLink>
              <!-- <span>{{ text }}</span> -->
            </h4>
          </div>
        </div>
      </SwiperSlide>
      <div>
        <div class="swiper-pagination"></div>
      </div>
    </Swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";

import workPic1 from "@/assets/images/wada/700X1064/6.png";
import workPic2 from "@/assets/images/wada/700X1064/3.png";
import workPic3 from "@/assets/images/wada/700X1064/4.png";
import workPic4 from "@/assets/images/wada/700X1064/8.png";

export default defineComponent({
  components: { Swiper, SwiperSlide },
  setup() {
    return {
      ourPortfolio: [
        {
          img: workPic1,
          subtitle: "STAY EXPERIENCE",
          title: "Heritage Stay",
          text: "Peaceful & Authentic",
        },
        {
          img: workPic2,
          subtitle: "CELEBRATIONS",
          title: "Private Events",
          text: "Intimate & Memorable",
        },
        {
          img: workPic3,
          subtitle: "CREATIVE SPACE",
          title: "Photoshoots & Reels",
          text: "Timeless Backdrops",
        },
        {
          img: workPic4,
          subtitle: "FOOD EXPERIENCE",
          title: "Authentic Maharashtrian Meals",
          text: "Soulful & Traditional",
        },
      ],

      pagination: {
        clickable: true,
        renderBullet: function (index: number, className: string) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },

      modules: [Pagination],
    };
  },
});
</script>

<style scoped></style>
