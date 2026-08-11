<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer3.vue'
import ScrollTop from './elements/ScrollTop.vue'
import Cursor from './elements/Cursor.vue'
</script>

<template>
  <div class="page-wraper">
    <Cursor />
    <component :is="$route.meta.layout">
      <ScrollTop />
      <Header />
      <RouterView />
      <Footer />
    </component>
    <component :is="$route.meta.layout4">
      <RouterView />
    </component>
  </div>
</template>
