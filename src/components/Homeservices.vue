<template>
  <div class="row">
    <div
      class="col-lg-4 col-sm-6 aos-item"
      v-for="({ icon, title }, ind) in HomeAervicesArr"
      :key="ind"
    >
      <div class="icon-bx-wraper style-3 m-b30">
        <div class="icon-xl m-b30">
          <RouterLink to="?" class="icon-cell"><i :class="icon"></i></RouterLink>
        </div>
        <div class="icon-content">
          <h4 class="title m-b10">
            <RouterLink to="/services-details">{{ title }}</RouterLink>
          </h4>
          <p class="m-b30">
            Phasellus facilisis urna at ultrices egestas. Nulla mi arcu, finibus non lectus non,
            mollis tempus enim.
          </p>
          <RouterLink to="/services-details" class="btn btn-primary btn-rounded btn-sm hover-icon">
            <span>Read More</span>
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
  name: 'homeServices',
  setup() {
    return {
      HomeAervicesArr: [
        { icon: 'flaticon-blueprint-1', title: 'Floor Plan Design' },
        { icon: 'flaticon-crane', title: 'Construction Work' },
        { icon: 'flaticon-interior-design-1', title: 'Interior Designing' },
        { icon: 'flaticon-furniture', title: 'Furniture Production' },
        { icon: 'flaticon-home', title: 'Architecture Design' },
        { icon: 'flaticon-support', title: '24X7 Support' }
      ]
    }
  }
})
</script>

<style scoped></style>
