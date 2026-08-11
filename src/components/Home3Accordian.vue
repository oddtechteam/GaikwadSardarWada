<template>
  <section class="section-full content-inner-1 about-bx5 over overflow-hidden">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 aos-item">
          <div class="section-head style-2">
            <h6 class="sub-title text-primary">Services</h6>
            <h2 class="title">Frequently Asked Question</h2>
          </div>
          <div class="accordion dz-accordion accordion-sm style-1" id="accordionFaq">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <RouterLink
                  to="?"
                  class="accordion-button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Is Your Service safe to use?
                  <span class="toggle-close"></span>
                </RouterLink>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionFaq"
              >
                <div class="accordion-body">
                  <p class="m-b0">
                    There are many variations of passages of Lorem Ipsum available, but the majority
                    have suffered alteration in some form, by injected humour.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <RouterLink
                  to="?"
                  class="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Why should I use your service?
                  <span class="toggle-close"></span>
                </RouterLink>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionFaq"
              >
                <div class="accordion-body">
                  <p class="m-b0">
                    There are many variations of passages of Lorem Ipsum available, but the majority
                    have suffered alteration in some form, by injected humour.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <RouterLink
                  to="?"
                  class="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  How can I see my passwords later?
                  <span class="toggle-close"></span>
                </RouterLink>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionFaq"
              >
                <div class="accordion-body">
                  <p class="m-b0">
                    There are many variations of passages of Lorem Ipsum available, but the majority
                    have suffered alteration in some form, by injected humour.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFour">
                <RouterLink
                  to="?"
                  class="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  What makes a strong password?
                  <span class="toggle-close"></span>
                </RouterLink>
              </h2>
              <div
                id="collapseFour"
                class="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionFaq"
              >
                <div class="accordion-body">
                  <p class="m-b0">
                    There are many variations of passages of Lorem Ipsum available, but the majority
                    have suffered alteration in some form, by injected humour.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="dz-media">
            <div class="img1 aos-item">
              <img src="@/assets/images/about/pic8.jpg" alt="" />
            </div>
            <div class="img2 aos-item">
              <img src="@/assets/images/about/pic9.jpg" alt="" />
            </div>
            <div class="img3 aos-item">
              <img src="@/assets/images/about/pic10.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'accordian_',
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
