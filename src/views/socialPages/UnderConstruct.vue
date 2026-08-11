<template>
  <div class="page-wraper">
    <div class="under-construct">
      <div class="inner-box">
        <div class="logo-header logo-dark">
          <RouterLink to="/home-2"
            ><img class="header_logo" src="@/assets/images/logo-g.png" alt=""
          /></RouterLink>
        </div>
        <div class="dz-content">
          <h2 class="dz-title">
            SITE IS DOWN <br />FOR <span class="text-primary">MAINTENANCE</span>
          </h2>
          <p>
            This is the Technical Problems Page.<br />
            Or any other page.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  setup() {
    return {}
  },
  components: { RouterLink }
})
</script>

<style scoped></style>
