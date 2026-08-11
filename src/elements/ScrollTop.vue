<template>
  <button
    @click="scrollTop"
    class="scroltop icon-up"
    type="button"
    :style="`display: ${scrollVal ? ' inline-block' : 'none'}`"
  >
    <i class="fa fa-arrow-up"></i>
  </button>
</template>

<script lang="ts">
import router from '@/router'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const scrollVal = ref<boolean>(false)
    router.beforeEach(() => {
      window.scrollTo(0, 0)
    })

    return { scrollVal }
  },

  created: function () {
    window.addEventListener('scroll', this.ScrollTopBtn)
  },
  unmounted: function () {
    window.removeEventListener('scroll', this.ScrollTopBtn)
  },

  methods: {
    ScrollTopBtn() {
      window.scrollY > 400 ? (this.scrollVal = true) : (this.scrollVal = false)
    },
    scrollTop() {
      window.scrollTo(0, 0)
    }
  }
})
</script>

<style scoped></style>
