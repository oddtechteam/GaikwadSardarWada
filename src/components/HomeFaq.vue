<template>
  <section
    class="section-full content-inner overflow-hidden"
    :style="`background-image: url(${bg1});
      background-position: left top;
      background-size: 100%;
      background-repeat: no-repeat;`"
  >
    <div class="container">
      <div class="row align-items-center">

        <!-- IMAGE SLIDER (UNCHANGED) -->
        <div class="col-lg-6 m-b30 aos-item">
          <div class="twentytwenty-img-area">
            <div class="twentytwenty-container">
              <ImgComparisonSlider class="compair-slide">
                <img slot="first" style="width: 100%" src="@/assets/images/wada/500X500/3.png" />
                <img slot="second" style="width: 100%" src="@/assets/images/wada/500X500/4.png" />
                <svg
                  slot="handle"
                  class="default-handle"
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  viewBox="-8 -3 16 6"
                >
                  <path
                    stroke="#fff"
                    d="M -5 -1 L -6 0 L -5 1 M 5 -1 L 6 0 L 5 1"
                    stroke-width="2"
                    fill="none"
                  ></path>
                </svg>
              </ImgComparisonSlider>
            </div>
          </div>
        </div>

        <!-- FAQ -->
        <div class="col-lg-6 aos-item">
          <div class="section-head style-1">
            <h6 class="sub-title text-primary">FAQ</h6>
            <h2 class="title">Things You Might Want to Know</h2>
          </div>

          <div class="accordion dz-accordion accordion-sm" id="accordionFaq">

            <!-- 1 -->
            <div class="accordion-item">
              <h2 class="accordion-header">
                <RouterLink
                  to="?"
                  class="accordion-button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                >
                  Where is the wada located?
                  <span class="toggle-close"></span>
                </RouterLink>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show">
                <div class="accordion-body">
                  <p class="m-b0">
                    Located in Gulani, near Rajgurunagar (Khed), Pune — close enough for a quick escape, yet peaceful and away from the city rush.
                  </p>
                </div>
              </div>
            </div>

            <!-- 2 -->
            <div class="accordion-item">
              <h2 class="accordion-header">
                <RouterLink
                  to="?"
                  class="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                >
                  What kind of stays are available?
                  <span class="toggle-close"></span>
                </RouterLink>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse">
                <div class="accordion-body">
                  <p class="m-b0">
                    We offer couple rooms, family stays, and group accommodations within a traditional heritage wada setting.
                  </p>
                </div>
              </div>
            </div>

            <!-- 3 -->
            <div class="accordion-item">
              <h2 class="accordion-header">
                <RouterLink
                  to="?"
                  class="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                >
                  Can we host events or celebrations here?
                  <span class="toggle-close"></span>
                </RouterLink>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse">
                <div class="accordion-body">
                  <p class="m-b0">
                    Yes, the wada is ideal for haldi, mehendi, birthdays, workshops, cultural events, and intimate gatherings.
                  </p>
                </div>
              </div>
            </div>

            <!-- 4 -->
            <div class="accordion-item">
              <h2 class="accordion-header">
                <RouterLink
                  to="?"
                  class="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                >
                  Is food available at the wada?
                  <span class="toggle-close"></span>
                </RouterLink>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse">
                <div class="accordion-body">
                  <p class="m-b0">
                    Yes, we serve authentic Maharashtrian veg and non-veg meals prepared by our in-house cook.
                  </p>
                </div>
              </div>
            </div>

            <!-- 5 -->
            <div class="accordion-item">
              <h2 class="accordion-header">
                <RouterLink
                  to="?"
                  class="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                >
                  Is it suitable for photoshoots?
                  <span class="toggle-close"></span>
                </RouterLink>
              </h2>
              <div id="collapseFive" class="accordion-collapse collapse">
                <div class="accordion-body">
                  <p class="m-b0">
                    Absolutely. The wada offers natural light, heritage architecture, and textured backdrops perfect for shoots and content creation.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import bg1 from '@/assets/images/background/bg1.png'
import { ImgComparisonSlider } from '@img-comparison-slider/vue'

export default defineComponent({
  name: 'homeFaq',
  components: { ImgComparisonSlider },
  setup() {
    return { bg1 }
  }
})
</script>

<style scoped></style>