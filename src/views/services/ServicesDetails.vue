<template>
  <div class="page-content bg-white">
    <CommonBanner :img="bnr5" title="Service Details" text="Service Details" />
    <section
      class="section-full content-inner-2"
      :style="`background-image: url(${bg2});
        background-position: right bottom;
        background-size: 100%;
        background-repeat: no-repeat;`"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-7 aos-item">
            <div class="service-detail">
              <div class="dz-page-text">
                <h2 class="title mb-2">
                  Suspendisse ornare suscipit nibh quis maximus raesent tristique.
                </h2>
                <p>
                  Donec non ex elementum, auctor elit a, vehicula mauris. Etiam varius faucibus
                  tortor quis iaculis. Proin tortor eros, dignissim at velit nec, cursus gravida
                  lectus. Pellentesque egestas nisl et lacus sollicitudin pulvinar. Donec a maximus
                  augue,
                </p>
                <div class="row">
                  <div class="col-lg-6">
                    <img
                      src="@/assets/images/services/service-detail/pic1.jpg"
                      class="m-b30 w-100"
                      alt=""
                    />
                    <p class="m-b0">
                      Nunc eu pulvinar mauris, in volutpat nulla. Donec efficitur at lectus sit amet
                      egestas. Morbi sit amet auctor quam. Donec auctor congue orci non semper.
                    </p>
                    <p class="m-b0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a purus ac lorem
                      dictum mattis vulputate id lorem. Phasellus imperdiet velit non enim semper,
                      ac euismod nisl mattis. Mauris sollicitudin purus interdum.
                    </p>
                  </div>
                  <div class="col-lg-6">
                    <img
                      src="@/assets/images/services/service-detail/pic2.jpg"
                      class="m-b30 w-100"
                      alt=""
                    />
                    <p class="m-b0">
                      Nunc eu pulvinar mauris, in volutpat nulla. Donec efficitur at lectus sit amet
                      egestas. Morbi sit amet auctor quam. Donec auctor congue orci non semper.
                    </p>
                    <p class="m-b0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a purus ac lorem
                      dictum mattis vulputate id lorem. Phasellus imperdiet velit non enim semper,
                      ac euismod nisl mattis. Mauris sollicitudin purus interdum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-5 m-b30 aos-item right">
            <div class="sticky-top">
              <div class="widget ext-sidebar-menu">
                <ul class="menu">
                  <li class="active">
                    <RouterLink to="?">Interior Design</RouterLink>
                  </li>
                  <li><RouterLink to="?">Floor Plan Design</RouterLink></li>
                  <li><RouterLink to="?">Construction</RouterLink></li>
                  <li><RouterLink to="?">Furniture Production</RouterLink></li>
                  <li><RouterLink to="?">Architecture Design</RouterLink></li>
                  <li><RouterLink to="?">24X 7 Support</RouterLink></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="content-inner-2">
      <div class="container-fluid">
        <Testimonial2 />
      </div>
    </section>
    <Brands />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CommonBanner from '@/elements/CommonBanner.vue'
import Brands from '@/elements/Brands.vue'
import Testimonial2 from '@/components/Testimonial2.vue'
import bnr5 from '@/assets/images/banner/bnr5.jpg'
import bg2 from '@/assets/images/background/bg2.png'
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'services_detail',
  components: { CommonBanner, Testimonial2, Brands, RouterLink },
  setup() {
    return { bnr5, bg2 }
  }
})
</script>

<style scoped></style>
