<template>
  <div class="page-content bg-white">
    <MainBanner3 />
    <section class="content-inner service-area">
      <div class="container">
        <div class="section-head style-2 text-center">
          <h6 class="sub-title text-primary">Our Best Services</h6>
          <h2 class="title">
            How To We Provide<br />
            Our Services
          </h2>
        </div>
        <Home3Services />
      </div>
    </section>
    <section class="content-inner-3">
      <div class="container">
        <div class="row align-items-center about-bx4">
          <div class="col-lg-6 m-b30">
            <div class="dz-media">
              <img
                src="@/assets/images/about/pic6.jpg"
                alt=""
                class="img1 aos-item aos-init aos-animate"
              />
              <img
                src="@/assets/images/about/pic7.jpg"
                alt=""
                class="img2 aos-item aos-init aos-animate"
              />
            </div>
          </div>
          <div class="col-lg-6 m-b30 aos-item aos-init aos-animate">
            <div class="section-head style-2">
              <h6 class="sub-title text-primary">About Us</h6>
              <h2 class="title m-b20">We Provide You The Best Experience</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority
                have suffered alteration in some form, by injected humour, or randomised words which
                don't look even slightly believable.
              </p>
            </div>
            <RouterLink to="/blog-details" class="btn btn-primary btn-rounded hover-icon">
              <span>READ MORE</span>
              <i class="fas fa-arrow-right"></i>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
    <section class="content-inner-2">
      <div class="container">
        <div class="section-head style-2 text-center">
          <h6 class="sub-title text-primary">About Services</h6>
          <h2 class="title">Coworking Space</h2>
        </div>
        <Home3About />
      </div>
    </section>
    <Home3Accordian />
    <Modalvideo2 />
    <ClientLogo />
    <section class="content-inner-1 overflow-hidden">
      <div class="container">
        <div class="row">
          <div class="col-xl-4 col-lg-4 align-self-center px-3 mb-lg-0 mb-4">
            <div class="section-head style-2">
              <h6 class="sub-title text-primary">Team</h6>
              <h2 class="title">Meet Our Team</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority
                don't look even slightly believable.
              </p>
            </div>
            <RouterLink to="/blog-details" class="btn btn-primary btn-rounded hover-icon">
              <span>View All Members</span>
              <i class="fas fa-arrow-right"></i>
            </RouterLink>
          </div>
          <Home3OurTeam />
        </div>
      </div>
    </section>
    <section class="content-inner-1 bg-gray over">
      <div class="container">
        <div class="section-head style-2 text-center">
          <h6 class="sub-title text-primary">Testimonial</h6>
          <h2 class="title">What The People Thinks About Us</h2>
        </div>
        <Home3Testimonial />
      </div>
    </section>
    <section class="content-inner bg-white line-img">
      <div class="container">
        <div class="row align-items-center section-head style-2">
          <div class="col-lg-8 aos-item aos-init aos-animate">
            <h5 class="text-primary sub-title">Blog Details</h5>
            <h2 class="title">Read Our Latest Blog & News</h2>
          </div>
          <div class="col-lg-4 aos-item aos-init aos-animate text-end d-none d-lg-block">
            <RouterLink to="/blog-details" class="btn btn-primary btn-rounded hover-icon">
              <span>View All Post</span>
              <i class="fas fa-arrow-right"></i>
            </RouterLink>
          </div>
        </div>
        <Home3Blog />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Home3About from '@/components/Home3About.vue'
import Home3Services from '@/components/Home3Services.vue'
import MainBanner3 from '@/components/MainBanner3.vue'
import Home3Accordian from '@/components/Home3Accordian.vue'
import { defineComponent, watchEffect } from 'vue'
import Modalvideo2 from '@/elements/Modalvideo2.vue'
import ClientLogo from '@/elements/ClientLogo.vue'
import Home3OurTeam from '@/components/Home3OurTeam.vue'
import Home3Testimonial from '@/components/Home3Testimonial.vue'
import Home3Blog from '@/components/Home3Blog.vue'
import logoWhite from '@/assets/images/logo-3.png'
import logo from '@/assets/images/logo-3.png'
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'home_3',
  setup() {
    watchEffect(() => {
      setTimeout(() => {
        document.querySelectorAll('.header_logo').forEach((el) => {
          el.setAttribute('src', logo)
        })
        document.querySelectorAll('.header_logo2').forEach((el) => {
          el.setAttribute('src', logoWhite)
        })
        document.body.setAttribute('data-color', 'color_3')
      }, 10)
    })
    return {}
  },
  components: {
    MainBanner3,
    Home3Services,
    Home3About,
    Home3Accordian,
    Modalvideo2,
    ClientLogo,
    Home3OurTeam,
    Home3Testimonial,
    Home3Blog,
    RouterLink
  }
})
</script>

<style scoped></style>
