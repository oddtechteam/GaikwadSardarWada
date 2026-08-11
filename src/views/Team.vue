<template>
  <div class="page-content bg-white">
    <CommonBanner :img="bnr4" title="Team" text="Team" />
    <section
      class="section-full content-inner"
      :style="`  background-image: url(${bg2});
        background-position: right bottom;
        background-size: 100%;
        background-repeat: no-repeat;`"
    >
      <div class="container">
        <div class="row">
          <div
            class="col-md-6 col-lg-4 m-b30 aos-item"
            v-for="({ img, position, title }, ind) in teamArr"
            :key="ind"
          >
            <div class="card dz-team style-1">
              <div class="card-media">
                <img :src="img" alt="" />
              </div>
              <div class="card-body">
                <h5 class="dz-name m-b5">
                  <RouterLink to="?">{{ title }}</RouterLink>
                </h5>
                <span class="dz-position">{{ position }}</span>
                <ul class="dz-social">
                  <li>
                    <RouterLink to="?"><i class="fab fa-skype"></i></RouterLink>
                  </li>
                  <li>
                    <RouterLink to="?"><i class="fab fa-facebook"></i></RouterLink>
                  </li>
                  <li>
                    <RouterLink to="?"><i class="fab fa-google-plus"></i></RouterLink>
                  </li>
                  <li>
                    <RouterLink to="?"><i class="fab fa-twitter"></i></RouterLink>
                  </li>
                  <li>
                    <RouterLink to="?"><i class="fab fa-youtube"></i></RouterLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import CommonBanner from '@/elements/CommonBanner.vue'
import { defineComponent } from 'vue'
import bnr4 from '@/assets/images/banner/bnr4.jpg'
import bg2 from '@/assets/images/background/bg2.png'

import teamPic1 from '@/assets/images/team/pic1.jpg'
import teamPic2 from '@/assets/images/team/pic2.jpg'
import teamPic3 from '@/assets/images/team/pic3.jpg'
import teamPic4 from '@/assets/images/team/pic4.jpg'
import teamPic5 from '@/assets/images/team/pic5.jpg'
import teamPic6 from '@/assets/images/team/pic6.jpg'
export default defineComponent({
  name: 'team_',
  setup() {
    return {
      bnr4,
      bg2,
      teamArr: [
        { img: teamPic1, title: 'Engineer', position: 'Engineer' },
        { img: teamPic2, title: 'Lindsey Botosh', position: 'Manager Effiect' },
        { img: teamPic3, title: 'Kaylynn Donin', position: 'CEO Factory' },
        { img: teamPic4, title: 'Jakob Bothman', position: 'Sinior architect' },
        { img: teamPic5, title: 'Phillip Schleifer', position: 'Co-Founder' },
        { img: teamPic6, title: 'Lindsey Botosh', position: 'architect' }
      ]
    }
  },
  components: { CommonBanner }
})
</script>

<style scoped></style>
