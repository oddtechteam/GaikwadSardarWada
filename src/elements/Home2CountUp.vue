<template>
  <section class="content-inner">
    <div class="container">
      <div class="row align-items-center about-bx3">
        <div class="col-lg-6 m-b30">
          <div class="dz-media" >
            <img
              src="@/assets/images/about/pic4.png"
              alt=""
              class="img1 aos-item aos-init aos-animate" style="border-radius: 1rem;"
            />
          </div>
        </div>

        <div class="col-lg-6 m-b30 aos-item aos-init aos-animate">
          <div class="section-head style-1">
            <h6 class="sub-title text-primary">About Gaikwad Sardar Wada</h6>
            <h2 class="title">A Place Where Time Slows Down</h2>
          </div>

          <p>
            Gaikwad Sardar Wada is a 350+ year old heritage space near Rajgurunagar, just outside Pune.
            With its thick stone walls, wooden pillars, and open courtyards, it carries generations of
            stories and traditions. Carefully preserved and thoughtfully maintained, the wada blends
            old-world Maharashtrian architecture with modern comfort.
          </p>

          <p>
            Whether you come here to stay, celebrate, create, or simply pause, the space meets you where you are —
            calm, grounded, and real.
          </p>

          <div class="history-row m-b30">
            <div>
              <h2 class="year d-flex">
                <span class="counter">
                  <CountUp start-val="0" end-val="350" duration="3" />
                </span>+
              </h2>
              <span class="text">
                Years of <br />
                Heritage
              </span>
            </div>

            <div>
              <h2 class="awards d-flex">
                <span class="counter">
                  <CountUp start-val="0" end-val="100" duration="3" />
                </span>+
              </h2>
              <span class="text">
                Happy <br />
                Guests
              </span>
            </div>

            <div>
              <h2 class="sales d-flex">
                <span class="counter">
                  <CountUp start-val="0" end-val="50" duration="3" />
                </span>+
              </h2>
              <span class="text">
                Events & <br />
                Experiences
              </span>
            </div>
          </div>

          <RouterLink to="/about-us" class="btn shadow-primary btn-primary btn-rounded">
            Know More <i class="m-l10 las la-plus"></i>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CountUp from 'vue-countup-v3'

export default defineComponent({
  components: { CountUp },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>