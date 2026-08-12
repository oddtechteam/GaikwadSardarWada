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
          <form class="dz-form contact-bx" @submit.prevent="submitForm">
            <div
              v-if="status === 'success'"
              class="dzFormMsg alert alert-success"
            >
              Thank you! Your enquiry has been sent — we'll get back to you shortly.
            </div>
            <div
              v-else-if="status === 'error'"
              class="dzFormMsg alert alert-danger"
            >
              Something went wrong sending your enquiry. Please try again, or
              reach us directly on WhatsApp / phone.
            </div>
            <div class="row sp10">
              <div class="col-sm-6 m-b20">
                <div class="input-group">
                  <input
                    v-model="form.firstName"
                    type="text"
                    class="form-control"
                    required
                    name="firstName"
                    autocomplete="given-name"
                    placeholder="First Name"
                  />
                </div>
              </div>
              <div class="col-sm-6 m-b20">
                <div class="input-group">
                  <input
                    v-model="form.lastName"
                    type="text"
                    class="form-control"
                    required
                    name="lastName"
                    autocomplete="family-name"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div class="col-sm-6 m-b20">
                <div class="input-group">
                  <input
                    v-model="form.email"
                    type="email"
                    class="form-control"
                    required
                    name="email"
                    autocomplete="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div class="col-sm-6 m-b20">
                <div class="input-group">
                  <input
                    v-model="form.phone"
                    type="tel"
                    class="form-control"
                    required
                    name="phone"
                    autocomplete="tel"
                    placeholder="Phone No."
                  />
                </div>
              </div>
              <div class="col-sm-12 m-b20">
                <div class="input-group">
                  <input
                    v-model="form.subject"
                    type="text"
                    class="form-control"
                    required
                    name="subject"
                    placeholder="Subject"
                  />
                </div>
              </div>
              <div class="col-sm-12 m-b20">
                <div class="input-group">
                  <textarea
                    v-model="form.message"
                    name="message"
                    rows="5"
                    class="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              <div class="col-sm-12 text-center">
                <button
                  type="submit"
                  class="btn btn-primary btn-rounded"
                  :disabled="status === 'submitting'"
                >
                  {{ status === "submitting" ? "SENDING..." : "SUBMIT" }}
                  <i class="m-l10 fas fa-caret-right"></i>
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
import { defineComponent, reactive, ref } from "vue";
import bnr2 from "@/assets/images/banner/bnr2.jpg";

// Paste the URL you get after deploying google-apps-script/Code.gs as a
// Web App (see that file for setup steps).
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyHdhq92nj45HMEGyNZJ1JI1gvWFJ8JIR4X7ZoHWkOaEq6mfaeaME11VPCqlb-CUiiPrQ/exec";

export default defineComponent({
  setup() {
    const form = reactive({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    const status = ref<"idle" | "submitting" | "success" | "error">("idle");

    const submitForm = async () => {
      if (status.value === "submitting") return;
      status.value = "submitting";

      // application/x-www-form-urlencoded keeps this a CORS "simple request"
      // so the browser skips a preflight OPTIONS call (which Apps Script
      // web apps don't handle) and we can read the real response back.
      const body = new URLSearchParams();
      (Object.keys(form) as (keyof typeof form)[]).forEach((key) => {
        body.append(key, form[key]);
      });

      try {
        const res = await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          body,
        });
        const data = await res.json();
        if (data.result === "success") {
          status.value = "success";
          (Object.keys(form) as (keyof typeof form)[]).forEach((key) => {
            form[key] = "";
          });
        } else {
          status.value = "error";
        }
      } catch (err) {
        status.value = "error";
      }
    };

    return {
      bnr2,
      form,
      status,
      submitForm,
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

<style scoped>
.dzFormMsg {
  margin-bottom: 20px;
}
</style>
