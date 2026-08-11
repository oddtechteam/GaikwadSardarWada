<template>
  <div class="page-content bg-white">
    <CommonBanner :img="bnr8" title="Portfolio" text="Portfolio" />
    <FilterGallery />
    <!-- <section class="section-full dz-content-bx style-2 text-white">
      <div
        class="dz-content-inner bg-dark"
        :style="`background-image: url(${bg2_1}); background-position: center`"
      >
        <OurStrategy />
      </div>
    </section> -->
    <HomeFaq />
  </div>
</template>

<script lang="ts">
import CommonBanner from '@/elements/CommonBanner.vue'
import FilterGallery from '@/components/FilterGallery.vue'
import { defineComponent } from 'vue'
import bnr8 from '@/assets/images/banner/bnr8.jpg'
import OurStrategy from '@/components/OurStrategy.vue'
import bg2_1 from '@/assets/images/background/bg2-1.png'
import HomeFaq from '@/components/HomeFaq.vue'

export default defineComponent({
  name: 'Portfolio_',
  components: { CommonBanner, FilterGallery, OurStrategy, HomeFaq },
  setup() {
    return { bnr8, bg2_1 }
  }
})
</script>

<style scoped></style>
