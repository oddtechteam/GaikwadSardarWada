<template>
  <nav aria-label="Blog Pagination">
    <ul class="pagination text-center m-b30">
      <li class="page-item">
        <RouterLink class="page-link prev" to="?"><i class="la la-angle-left"></i></RouterLink>
      </li>
      <li class="page-item">
        <RouterLink class="page-link active" to="?">1</RouterLink>
      </li>
      <li class="page-item">
        <RouterLink class="page-link" to="?">2</RouterLink>
      </li>
      <li class="page-item">
        <RouterLink class="page-link" to="?">3</RouterLink>
      </li>
      <li class="page-item">
        <RouterLink class="page-link next" to="?"><i class="la la-angle-right"></i></RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'blog_pagination',
  setup() {
    return {}
  },
  components: { RouterLink }
})
</script>

<style scoped></style>
