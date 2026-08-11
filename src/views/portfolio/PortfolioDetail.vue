<template>
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
    <!-- <CommonBanner :img="bnr7" title="Portfolio Detail" text="Portfolio Detail" /> -->
    <section
      class="section-full content-inner-2 port-detail"
      :style="`background-image: url(${bg2});
        background-position: right bottom;
        background-size: 100%;
        background-repeat: no-repeat;`"
    >
      <div class="container">
        <div class="row mb-lg-5 mb-3">
          <div class="col-lg-12 col-md-12 m-b50 aos-item m-sm-b30">
            <img src="@/assets/images/work/pic1.jpg" alt="" />
          </div>
          <div class="col-lg-6 col-md-12 align-self-center aos-item">
            <h2 class="dz-title">Curabitur Commodo Eros Sit Amet Diam Dictum.</h2>
            <p>
              Pellentesque magna felis, dictum vitae ipsum dapibus, congue tempus ex. Praesent mi
              est, eleifend non pulvinar a, lobortis quis nulla. Vivamus at tortor eu nisi gravida
              sagittis. Duis vel nibh neque. Curabitur porta lorem tortor.
            </p>
            <p class="m-b30">
              Ut ac lobortis nisl, sit amet suscipit tortor. Aenean egestas consectetur felis quis
              lacinia. Donec a iaculis neque. Aliquam a mi at ex euismod lacinia. Etiam rutrum eu
              sem non ullamcorper. Donec pulvinar est diam, at mollis lectus sollicitudin id.
              Vestibulum viverra eu quam ut iaculis. In hac habitasse platea dictumst. In dignissim.
            </p>
            <div class="icon-bx-wraper style-7 left m-b30">
              <div class="icon-bx-sm bg-primary">
                <span class="icon-cell"><i class="flaticon-placeholder"></i></span>
              </div>
              <div class="icon-content">
                <h4 class="title m-b5">Project Location</h4>
                <p>#8901 Marmora Road Chi, Vietnam</p>
              </div>
            </div>
            <div class="icon-bx-wraper style-7 left m-b30">
              <div class="icon-bx-sm bg-primary">
                <span class="icon-cell"><i class="flaticon-telephone"></i></span>
              </div>
              <div class="icon-content">
                <h4 class="title m-b5">Call Us</h4>
                <p>+91 123 456 7890</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 m-b30 aos-item">
            <img src="@/assets/images/work/pic2.jpg" class="d-lg-block d-none" alt="" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-7 col-md-5 aos-item">
            <img src="@/assets/images/work/pic3.jpg" alt="" />
          </div>
          <div class="col-lg-5 col-md-7 align-self-center aos-item">
            <ul class="info-list">
              <li>
                <h2 class="text-primary">100%</h2>
                <h4>Work Completed</h4>
              </li>
              <li>
                <h2 class="text-primary">250</h2>
                <h4>Workers Have Done</h4>
              </li>
              <li>
                <h2 class="text-primary">480</h2>
                <h4>In Days Completed</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <div class="content-inner-2">
      <div class="container">
        <Lightgallery
          :settings="{ speed: 500, plugins: plugins, selector: '.lightimg' }"
          class="row lightgallery"
        >
          <div class="col-lg-12 col-md-12 m-b30 aos-item">
            <div class="video-bx content-media style-2 shadow">
              <img src="@/assets/images/video/pic2-2.jpg" alt="" />
              <div class="video-btn aos-item aos-init aos-animate">
                <RouterLink
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  to="?"
                  class="popup-youtube"
                  ><i class="fas fa-play"></i
                ></RouterLink>
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-4 m-b30 aos-item"
            v-for="({ img }, ind) in galleryBlog"
            :key="ind"
          >
            <div class="dz-box overlay style-1">
              <div class="dz-media">
                <img :src="img" alt="" />
              </div>
              <div class="dz-info">
                <span :data-src="img" class="view-btn lightimg" title="ARCHITECTURAL">
                  <img :src="img" alt="" style="display: none" />
                </span>
              </div>
            </div>
          </div>
        </Lightgallery>
      </div>
    </div>
    <section class="content-inner-1">
      <div class="container">
        <div class="section-head style-1 text-center">
          <h6 class="sub-title text-primary">OUR PORTFOLIOS</h6>
          <h2 class="title">Our Latest Projects</h2>
        </div>
      </div>

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
            :autoplay="{ delay: 1500 }"
            :speed="1500"
          >
            <SwiperSlide
              class="swiper-slide"
              v-for="({ img, subtitle, title, text, setStyle }, ind) in ourBlog"
              :key="ind"
            >
              <div :class="`dz-box overlay style-1 ${setStyle}`">
                <div class="dz-media">
                  <img :src="img" alt="" />
                </div>
                <div class="dz-info">
                  <span :data-src="img" class="view-btn lightimg" title="INTERIOR DESIGN">
                    <img :src="img" alt="" style="display: none" />
                  </span>
                  <h6 class="sub-title">{{ subtitle }}</h6>
                  <h4 class="title m-b15">
                    <RouterLink to="/portfolio-details"
                      >{{ title }}<span>{{ text }}</span></RouterLink
                    >
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </Lightgallery>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import bnr7 from '@/assets/images/banner/bnr7.jpg'
import CommonBanner from '@/elements/CommonBanner.vue'
import bg2 from '@/assets/images/background/bg2.png'
import service_pic1 from '@/assets/images/services/pic1.jpg'
import service_pic2 from '@/assets/images/services/pic2.jpg'
import service_pic3 from '@/assets/images/services/pic3.jpg'
import work_pic1 from '@/assets/images/work/work-1/pic-1.jpg'
import work_pic2 from '@/assets/images/work/work-1/pic-2.jpg'
import work_pic3 from '@/assets/images/work/work-1/pic-3.jpg'
import work_pic4 from '@/assets/images/work/work-1/pic-4.jpg'
import Lightgallery from 'lightgallery/vue'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

export default defineComponent({
  components: { CommonBanner, Lightgallery, Swiper, SwiperSlide },
  setup() {
    return {
      bnr7,
      bg2,
      galleryBlog: [{ img: service_pic1 }, { img: service_pic2 }, { img: service_pic3 }],
      ourBlog: [
        {
          img: work_pic1,
          subtitle: 'INTERIOR DESIGN',
          title: 'Modern House Interior',
          text: 'New York',
          setStyle: 'mt-5'
        },
        {
          img: work_pic2,
          subtitle: 'ARCHITECTURAL',
          title: 'Residential Project,',
          text: 'Paris'
        },
        {
          img: work_pic3,
          subtitle: 'INTERIOR DESIGN',
          title: 'Modern Family House,',
          text: 'Italy',
          setStyle: 'mt-5'
        },
        {
          img: work_pic4,
          subtitle: 'ARCHITECTURAL',
          title: 'Residential Project, ',
          text: 'Paris'
        },
        {
          img: work_pic2,
          subtitle: 'ARCHITECTURAL',
          title: 'Residential Project,',
          text: 'Paris',
          setStyle: 'mt-5'
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
</style>
