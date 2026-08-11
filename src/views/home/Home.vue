<!-- <template>
  <div
    class="modal fade"
    id="exampleModalToggle"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel"
    tabindex="-1"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <button class="mfp-close" style="top: -23px" data-bs-dismiss="modal" aria-label="Close">
          <i class="ti-close"></i>
        </button>
        <iframe
          height="100%"
          src="https://www.youtube.com/embed/sNCv3_NTNtU"
          frameborder="0"
          allowfullscreen
          allow="autoplay"
        ></iframe>
      </div>
    </div>
  </div>
  <div class="page-content bg-white">
    <MainBanner />
    <section
      class="section-full content-inner about-bx2"
      :style="`background-image: url(${backgrouBg2});`"
    >
      <HomeAbout />
    </section>
    <section class="dz-content-bx style-3">
      <CounterVideo />
    </section>
    <section class="content-inner-2">
      <div class="container">
        <div class="section-head style-1 text-center">
          <h6 class="sub-title text-primary">POPULAR SERVICES</h6>
          <h2 class="title">Our Featured Services</h2>
        </div>
        <Homeservices />
      </div>
    </section>
    <section class="content-inner-2">
      <div class="container">
        <div class="row section-head-bx align-items-center">
          <div class="col-md-8">
            <div class="section-head style-1">
              <h6 class="sub-title text-primary">OUR PORTFOLIOS</h6>
              <h2 class="title">Our Latest Projects</h2>
            </div>
          </div>
          <div class="col-md-4 text-start text-md-end mb-4 mb-md-0">
            <RouterLink to="/portfolio" class="btn-link"
              >See All Projects <i class="fas fa-plus scale08"></i
            ></RouterLink>
          </div>
        </div>
      </div>
      <OurPortfolio />
    </section>
    <section
      class="content-inner-2"
      :style="` background-image: url(${backgrouBg2});
        background-position: right bottom;
        background-size: 100%;
        background-repeat: no-repeat;`"
    >
      <Testimonial />
    </section>
    <section class="content-inner-2">
      <div class="container-fluid">
        <Testimonial2 />
      </div>
    </section>
    <HomeFaq />
    <section class="section-full dz-content-bx style-2 text-white">
      <div
        class="dz-content-inner bg-dark"
        :style="`background-image: url(${bg2_1}); background-position: center`"
      >
        <OurStrategy />
      </div>
    </section>
    <section
      class="content-inner bg-gray line-img"
      :style="` background-image: url(${backgrouBg2});
      background-position: right bottom;
      background-size: 100%;
      background-repeat: no-repeat;`"
    >
      <OurBlog />
    </section>
  </div>
</template>

<script lang="ts">
import MainBanner from '@/components/MainBanner.vue'
import HomeAbout from '@/components/HomeAbout.vue'
import CounterVideo from '@/components/CounterVideo.vue'
import { defineComponent, watchEffect } from 'vue'
import Homeservices from '@/components/Homeservices.vue'
import OurPortfolio from '@/components/OurPortfolio.vue'
import backgrouBg2 from '@/assets/images/background/bg2.png'
import Testimonial from '@/components/Testimonial.vue'
import Testimonial2 from '@/components/Testimonial2.vue'
import HomeFaq from '@/components/HomeFaq.vue'
import bg2_1 from '@/assets/images/background/bg2-1.png'
import OurStrategy from '@/components/OurStrategy.vue'
import OurBlog from '@/components/OurBlog.vue'
import logo from '@/assets/images/logo.png'
import logoWhite from '@/assets/images/logo.png'

export default defineComponent({
  name: 'home_',
  setup() {
    watchEffect(() => {
      setTimeout(() => {
        document.body.setAttribute('data-color', 'color_1')
        document.querySelectorAll('.header_logo').forEach((el) => {
          el.setAttribute('src', logo)
        })
        document.querySelectorAll('.header_logo2').forEach((el) => {
          el.setAttribute('src', logoWhite)
        })
      }, 10)
    })
    return { backgrouBg2, bg2_1 }
  },
  components: {
    MainBanner,
    HomeAbout,
    CounterVideo,
    Homeservices,
    OurPortfolio,
    Testimonial,
    Testimonial2,
    HomeFaq,
    OurStrategy,
    OurBlog
  }
})
</script>

<style scoped>
.section-full {
  background-image: url(../assets/images/background/bg2.png);
  background-position: right bottom;
  background-size: 100%;
  background-repeat: no-repeat;
}
.content-inner-2 {
  background-image: url(../assets/images/background/bg1.png);
  background-position: left top;
  background-size: 100%;
  background-repeat: no-repeat;
}
.modal-content {
  height: 390px;
  z-index: 99999;
}

@media screen and (max-width: 991px) {
  .modal-content {
    height: 282px;
  }
}
@media screen and (max-width: 575px) {
  .modal-content {
    height: 30vmax;
  }
}
@media screen and (max-width: 400px) {
  .modal-content {
    height: 23vmax;
  }
}
.mfp-close {
  border: none;
  outline: none;
  position: absolute;
  right: 0px;
  background-color: transparent;
  color: white;
}
</style> -->

<template>
  <div class="page-content bg-white">

    <MainBanner2 />

    <Home2CountUp />

    <section
      class="content-inner-1 portfolio-2"
      style="background-color: #f0e6d3"
      :style="`background-image: url(${bg2_1}); background-position: center`"
    >
      <div class="resizemargin">
        <div class="row spno">
          <div class="col-xl-3 col-lg-4 align-self-center px-3 mb-lg-0 mb-4">
            <div class="section-head style-1 text-white">
              <h6 class="sub-title text-primary">EXPERIENCES AT THE WADA</h6>
              <h2 class="title text-white">Stay, Celebrate & Create</h2>
              <p class="m-b30">
                From peaceful stays to intimate celebrations, creative shoots,
                and authentic food experiences, Gaikwad Sardar Wada offers
                spaces that feel timeless, personal, and real.
              </p>
            </div>

            <RouterLink to="/services" class="btn btn-primary btn-rounded">
              Explore Experiences
            </RouterLink>
          </div>

          <Home2Portfolio />
        </div>
      </div>
    </section>

    <section
      class="content-inner"
      :style="`  background-image: url(${bg2_1});
        background-position: right bottom;
        background-size: 100%;
        background-repeat: no-repeat;`"
    >
      <div class="container">
        <div class="section-head style-1 text-center">
          <h6 class="sub-title text-primary">OUR EXPERIENCES</h6>
          <h2 class="title">Moments You Can Create Here</h2>
        </div>
        <OurTeam />
      </div>
    </section>

    <section
      class="bg-secondary test-area"
      :style="`background-image: url(${bg2_1}); background-position: center`"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-6 aos-item">
            <div class="content-inner-1">
              <div class="section-head style-1">
                <h6 class="text-primary sub-title">TESTIMONIAL</h6>
                <h2 class="title text-white">What Our Client Say’s</h2>
              </div>
              <Home2Testimonial />
            </div>
          </div>
          <div class="col-md-6">
            <div class="media-full">
              <img src="@/assets/images/about/bg5.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <Home2Services />
    <section
      class="content-inner bg-gray line-img"
      :style="` background-image: url(${backgrouBg2});
      background-position: right bottom;
      background-size: 100%;
      background-repeat: no-repeat;`"
    >
      <OurBlog />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, watchEffect } from "vue";
import logo2 from "@/assets/images/logo.png";
import logoWhite2 from "@/assets/images/logo-2.png";
import MainBanner2 from "@/components/MainBanner3.vue";
import Home2CountUp from "@/elements/Home2CountUp.vue";
import Home2Portfolio from "@/components/Home2Portfolio.vue";
import bg2_1 from "@/assets/images/background/bg2-1.png";
import { RouterLink } from "vue-router";
import Home2Services from "@/components/Home2Services.vue";
import OurTeam from "@/components/OurTeam.vue";
import Home2Testimonial from "@/components/Home2Testimonial.vue";
import OurBlog from "@/components/OurBlog.vue";
import backgrouBg2 from "@/assets/images/background/bg2.png";

export default defineComponent({
  name: "home_2",
  setup() {
    watchEffect(() => {
      setTimeout(() => {
        document.body.setAttribute("data-color", "color_2");
        document
          .querySelectorAll(".header_logo")
          .forEach((el) => el.setAttribute("src", logo2));
        document
          .querySelectorAll(".header_logo2")
          .forEach((el) => el.setAttribute("src", logoWhite2));
      }, 10);
    });

    return { bg2_1, backgrouBg2 };
  },
  components: {
    MainBanner2,
    Home2CountUp,
    Home2Portfolio,
    RouterLink,
    Home2Services,
    OurTeam,
    Home2Testimonial,
    OurBlog,
  },
});
</script>

<style scoped>
/* Section background - richer cream with subtle texture */
:deep(.portfolio-2) {
  background-color: #ede0cc !important;
  position: relative;
}

/* Left content area */
:deep(.portfolio-2 .section-head .sub-title) {
  letter-spacing: 4px;
  font-size: 13px;
  font-weight: 600;
  color: #c9a96e !important;
}

:deep(.portfolio-2 .section-head .title) {
  color: #2a1a0e !important;
  font-size: 48px;
  line-height: 1.15;
  font-weight: 800;
}

:deep(.portfolio-2 .section-head p) {
  color: #5a4030 !important;
  font-size: 16px;
  line-height: 1.8;
}

/* Decorative line after sub-title */
:deep(.portfolio-2 .section-head .sub-title:after) {
  background-color: #c9a96e !important;
}

/* Button styling */
:deep(.portfolio-2 .btn-primary) {
  background-color: #c9a96e !important;
  border-color: #c9a96e !important;
  color: #fff !important;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 16px 35px;
  box-shadow: 0 8px 25px rgba(201, 169, 110, 0.35) !important;
  transition: all 0.4s ease !important;
}

:deep(.portfolio-2 .btn-primary:hover) {
  background-color: #2a1a0e !important;
  border-color: #2a1a0e !important;
  box-shadow: 0 8px 25px rgba(42, 26, 14, 0.3) !important;
}

/* Portfolio image cards - gold border on hover */
:deep(.portfolio-2 .dz-box) {
  transition: transform 0.4s ease, box-shadow 0.4s ease !important;
}

:deep(.portfolio-2 .dz-box:hover) {
  transform: translateY(-8px) !important;
  box-shadow: 0 20px 50px rgba(42, 26, 14, 0.25) !important;
}

/* Overlay info on images */
:deep(.portfolio-2 .dz-info) {
  background: linear-gradient(
    to top,
    rgba(42, 26, 14, 0.92) 0%,
    rgba(42, 26, 14, 0.3) 60%,
    transparent 100%
  ) !important;
}

:deep(.portfolio-2 .sub-title) {
  color: #c9a96e !important;
  font-size: 12px;
  letter-spacing: 3px;
}

/* Pagination numbers */
:deep(.swiper-pagination .swiper-pagination-bullet) {
  color: #5a4030 !important;
  font-weight: 600;
}

:deep(.swiper-pagination .swiper-pagination-bullet-active) {
  color: #c9a96e !important;
  font-size: 60px !important;
}

/* Scroll top button */
:deep(.scroltop) {
  background: #c9a96e !important;
  border-color: #c9a96e !important;
  box-shadow: 0 5px 20px rgba(201, 169, 110, 0.5) !important;
}

:deep(.scroltop:hover) {
  background: #2a1a0e !important;
}
</style>
