<template>
  <div class="page-content bg-white">
    <CommonBanner :img="bnr2" title="Contact Us" text="Contact Us" />
    <section class="content-inner">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-4 col-md-6 m-b30 aos-item"
            v-for="(
              { dataName, icon, title, text, text2 }, ind
            ) in contactDtail"
            :key="ind"
          >
            <div class="icon-bx-wraper style-8 bg-white" :data-name="dataName">
              <div class="icon-md m-r20">
                <span class="icon-cell text-primary"
                  ><i :class="icon"></i
                ></span>
              </div>
              <div class="icon-content">
                <h4 class="tilte m-b10">{{ title }}</h4>
                <p class="m-b0">
                  {{ text }}<br />
                  {{ text2 }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="content-inner-1 pt-0">
      <div class="map-iframe">
        <iframe
          src="https://www.google.com/maps?q=Rajgurunagar%20Pune&output=embed"
          style="border: 0; width: 100%; min-height: 100%"
          allowfullscreen
        ></iframe>
      </div>
      <div class="container">
        <div class="contact-area aos-item">
          <div class="section-head style-1 text-center">
            <h6 class="sub-title text-primary">GET IN TOUCH</h6>
            <h2 class="title">Plan Your Stay or Event</h2>
          </div>
          <form class="dz-form dzForm contact-bx" method="POST">
            <input
              type="hidden"
              class="form-control"
              name="dzToDo"
              value="Contact"
            />
            <div class="dzFormMsg"></div>
            <div class="row sp10">
              <div class="col-sm-6 m-b20">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    required
                    name="dzFirstName"
                    placeholder="First Name"
                  />
                </div>
              </div>
              <div class="col-sm-6 m-b20">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    required
                    name="dzLastName"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div class="col-sm-6 m-b20">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    required
                    name="dzEmail"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div class="col-sm-6 m-b20">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    required
                    name="dzPhoneNumber"
                    placeholder="Phone No."
                  />
                </div>
              </div>
              <div class="col-sm-12 m-b20">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    required
                    name="dzOther"
                    placeholder="Subject"
                  />
                </div>
              </div>
              <div class="col-sm-12 m-b20">
                <div class="input-group">
                  <textarea
                    name="dzMessage"
                    rows="5"
                    class="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              <div class="col-sm-12 m-b20">
                <div class="input-recaptcha">
                  <div class="g-recaptcha"></div>
                  <input
                    class="form-control d-none"
                    style="display: none"
                    data-recaptcha="true"
                    required
                    data-error="Please complete the Captcha"
                  />
                </div>
              </div>
              <div class="col-sm-12 text-center">
                <button
                  name="submit"
                  type="reset"
                  value="submit"
                  class="btn btn-primary btn-rounded"
                >
                  SUBMIT <i class="m-l10 fas fa-caret-right"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import CommonBanner from "@/elements/CommonBanner.vue";
import { defineComponent } from "vue";
import bnr2 from "@/assets/images/banner/bnr2.jpg";

export default defineComponent({
  setup() {
    return {
      bnr2,
      contactDtail: [
        {
          dataName: "01",
          icon: "flaticon-telephone",
          title: "Call / WhatsApp",
          text: "+91 7972194411",
          text2: "Available for bookings & queries",
        },
        {
          dataName: "02",
          icon: "flaticon-email",
          title: "Email",
          text: "gaikwadsardarwada@gmail.com",
          text2: "We usually respond within a few hours",
        },
        {
          dataName: "03",
          icon: "flaticon-placeholder",
          title: "Location",
          text: "Gulani, Rajgurunagar (Khed)",
          text2: "Near Pune, Maharashtra",
        },
      ],
    };
  },
  components: { CommonBanner },
});
</script>

<style scoped></style>
