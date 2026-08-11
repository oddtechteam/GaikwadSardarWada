<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <div class="dz-media">
          <div class="img1 aos-item">
            <img src="@/assets/images/about/pic1.jpg" alt="" />
          </div>
          <div class="img2 aos-item">
            <img src="@/assets/images/about/pic2.jpg" alt="" />
          </div>
          <div class="img3 aos-item">
            <img src="@/assets/images/about/pic3.jpg" alt="" />
          </div>
        </div>
      </div>
      <div class="col-lg-6 align-self-center">
        <div class="year-exp">
          <h2 class="year aos-item counter">350+</h2>
          <h4 class="text aos-item">Years Of Heritage</h4>
        </div>
        <p class="m-b30 aos-item">
          Gaikwad Sardar Wada is a 350+ year old heritage space nestled near
          Rajgurunagar, Pune. With sunlit courtyards, wooden pillars, and
          timeless architecture, it offers a peaceful escape from the rush of
          everyday life. Whether you come to stay, celebrate, or create, the
          wada welcomes you with warmth, simplicity, and authenticity.
        </p>
        <div class="accordion dz-accordion about-faq" id="aboutFaq">
          <!-- 1 -->
          <div class="accordion-item">
            <h4 class="accordion-header">
              <RouterLink
                to="?"
                class="accordion-button"
                data-bs-toggle="collapse"
                data-bs-target="#aboutOne"
                aria-expanded="true"
                aria-controls="aboutOne"
              >
                <i class="fas fa-bed"></i>

                Heritage Stay
                <span class="toggle-close"></span>
              </RouterLink>
            </h4>
            <div
              id="aboutOne"
              class="accordion-collapse collapse show"
              aria-labelledby="aboutOne"
              data-bs-parent="#aboutFaq"
            >
              <div class="accordion-body">
                <p class="m-b0">
                  Experience slow mornings and peaceful evenings in a 350+ year
                  old wada. Ideal for couples, families, and anyone seeking calm
                  and connection.
                </p>
              </div>
            </div>
          </div>

          <!-- 2 -->
          <div class="accordion-item">
            <h4 class="accordion-header">
              <RouterLink
                to="?"
                class="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#aboutTwo"
                aria-expanded="false"
                aria-controls="aboutTwo"
              >
                <i class="fas fa-glass-cheers"></i>
                Private Celebrations
                <span class="toggle-close"></span>
              </RouterLink>
            </h4>
            <div
              id="aboutTwo"
              class="accordion-collapse collapse"
              aria-labelledby="aboutTwo"
              data-bs-parent="#aboutFaq"
            >
              <div class="accordion-body">
                <p class="m-b0">
                  Host intimate events like birthdays, engagements, and family
                  gatherings in a space that feels warm, personal, and rooted in
                  tradition.
                </p>
              </div>
            </div>
          </div>

          <!-- 3 -->
          <div class="accordion-item">
            <h4 class="accordion-header">
              <RouterLink
                to="?"
                class="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#aboutThree"
                aria-expanded="false"
                aria-controls="aboutTwo"
              >
                <i class="fas fa-camera"></i>
                Creative & Cultural Experiences
                <span class="toggle-close"></span>
              </RouterLink>
            </h4>
            <div
              id="aboutThree"
              class="accordion-collapse collapse"
              aria-labelledby="aboutThree"
              data-bs-parent="#aboutFaq"
            >
              <div class="accordion-body">
                <p class="m-b0">
                  From photoshoots and reels to food experiences and workshops,
                  the wada offers a timeless backdrop for creativity and
                  meaningful moments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "homeAbout",
  setup() {
    return {};
  },
  components: { RouterLink },
});
</script>

<style scoped></style>
