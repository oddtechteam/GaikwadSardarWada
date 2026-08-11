<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 content-inner-1 aos-item">
        <div class="section-head style-1">
          <h6 class="sub-title text-primary">OUR EXPERIENCE</h6>
          <h2 class="title text-white m-b20">
            A Space Rooted in Heritage & Simplicity
          </h2>
          <p>
            Gaikwad Sardar Wada is a 350+ year old heritage space where
            architecture, culture, and calm come together. From peaceful stays
            to meaningful gatherings, every experience here is slow, authentic,
            and deeply rooted in tradition.
          </p>
        </div>
        <div
          :class="`progress-bx style-2 ${setStyle}`"
          v-for="({ tittle, text, setStyle }, ind) in progressBar"
          :key="ind"
        >
          <div class="progress-info">
            <h4 class="title text-white">{{ tittle }}</h4>
            <h4 class="progress-value text-white">{{ text }}</h4>
          </div>
          <div class="progress">
            <div class="progress-bar" :style="`width: ${text}`"></div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 aos-item">
        <div class="content-media right">
          <img src="@/assets/images/video/pic2-1.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      progressBar: [
        { tittle: "Heritage Experience", text: "100%", setStyle: "m-b40" },
        { tittle: "Peace & Privacy", text: "95%", setStyle: "m-b40" },
        { tittle: "Authentic Food & Culture", text: "98%" },
      ],
    };
  },
});
</script>

<style scoped></style>
