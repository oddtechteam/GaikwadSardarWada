<template>
  <div class="page-content bg-white">
    <CommonBanner :img="bnr1" title="Error 404" text="Error 404" />
    <section
      class="content-inner"
      :style="`background-image: url(${bg2});
        background-position: right bottom;
        background-size: 100%;
        background-repeat: no-repeat;`"
    >
      <div class="container">
        <div class="error-page text-center">
          <div class="dlab_error">404</div>
          <h2 class="error-head">
            We are sorry. But the page you are looking for cannot be found.
          </h2>
          <RouterLink to="/" class="btn btn-primary radius-no btn-rounded"
            ><span class="p-lr15">BACK TO HOMEPAGE</span></RouterLink
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import CommonBanner from '@/elements/CommonBanner.vue'
import bnr1 from '@/assets/images/banner/bnr1.jpg'
import { defineComponent } from 'vue'
import bg2 from '@/assets/images/background/bg2.png'

export default defineComponent({
  name: 'error_404',
  setup() {
   
    return { bnr1, bg2 }
  },
  components: { CommonBanner }
})
</script>

<style scoped></style>
