<template>
  <div class="testi-inner">
    <Swiper
      class="swiper-container testimonial-swiper-2"
      :speed="1500"
      :loop="true"
      :autoplay="{ delay: 1500 }"
      :modules="modules"
    >
      <SwiperSlide
        class="swiper-slide"
        v-for="(item, ind) in testimonials"
        :key="ind"
      >
        <div class="testimonial-2">
          <!-- TEXT -->
          <div class="testimonial-text">
            <p>
              {{ item.text }}
            </p>
          </div>

          <!-- USER -->
          <div class="testimonial-detail">
            <!-- <div class="testimonial-pic">
              <img :src="item.img" alt="" />
            </div> -->

            <div class="clearfix">
              <h4 class="testimonial-name">{{ item.name }}</h4>
              <span class="testimonial-position">{{ item.position }}</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

import testimonial_pic1 from "@/assets/images/testimonials/pic1.jpg";
import testimonial_pic2 from "@/assets/images/testimonials/pic2.jpg";
import testimonial_pic3 from "@/assets/images/testimonials/pic3.jpg";

export default defineComponent({
  components: { Swiper, SwiperSlide },
  setup() {
    return {
      testimonials: [
        {
          img: testimonial_pic1,
          name: "Aditi & Rahul",
          position: "Pune",
          text: "Such a peaceful and beautiful place. The courtyard, the food, and the entire vibe felt so authentic. It didn’t feel like a hotel, it felt like home.",
        },
        {
          img: testimonial_pic2,
          name: "Sneha Patil",
          position: "Mumbai",
          text: "We hosted a small celebration here and everything was perfect. The space has such a warm and traditional feel, our guests loved it.",
        },
        {
          img: testimonial_pic3,
          name: "Rohan Kulkarni",
          position: "Content Creator",
          text: "Perfect place for shoots. The textures, lighting, and architecture make every frame look beautiful without much effort.",
        },
      ],
      modules: [Autoplay],
    };
  },
});
</script>

<style>
.test-area.bg-secondary {
  background-color: #1a0f08 !important;
}

.test-area.bg-secondary::after {
  background: #1a0f08 !important;
  opacity: 1 !important;
}
</style>
