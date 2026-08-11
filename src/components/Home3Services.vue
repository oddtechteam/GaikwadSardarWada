<template>
  <div class="row align-items-center">
    <div
      class="col-xl-3 col-md-6 m-lg-b30 aos-item aos-init aos-animate"
      v-for="({ icon, title }, ind) in servicesCard"
      :key="ind"
    >
      <div class="icon-bx-wraper style-9">
        <div class="icon-lg">
          <span class="icon-cell">
            <i :class="icon"></i>
          </span>
        </div>
        <div class="icon-content">
          <h4 class="dz-title">{{ title }}</h4>
          <p>Find out what you need to offer within 24 hours.</p>
          <RouterLink to="/blog-details" class="btn btn-primary btn-rounded btn-sm hover-icon">
            <span>READ MORE</span>
            <i class="fas fa-arrow-right"></i>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {
      servicesCard: [
        { icon: 'flaticon-blueprint-1', title: 'Your Bid' },
        { icon: 'flaticon-crane', title: 'Data-Driven' },
        { icon: 'flaticon-interior-design-1', title: 'Interior Designing' },
        { icon: 'flaticon-home', title: 'Architecture & build.' }
      ]
    }
  }
})
</script>

<style scoped></style>
