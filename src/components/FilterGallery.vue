<template>
  <section class="content-inner line-img overflow-hidden">
    <div class="container">
      <div class="site-filters style-1 clearfix center">
        <ul class="filters" data-toggle="buttons">
          
          <li :class="`btn ${addActive == 'All' ? 'active' : ''}`" @click="filterGallery('All')">
            <RouterLink to="?">All</RouterLink>
          </li>

          <li :class="`btn ${addActive == 'Stay' ? 'active' : ''}`" @click="filterGallery('Stay')">
            <RouterLink to="?">Stay</RouterLink>
          </li>

          <li :class="`btn ${addActive == 'Events' ? 'active' : ''}`" @click="filterGallery('Events')">
            <RouterLink to="?">Events</RouterLink>
          </li>

          <li :class="`btn ${addActive == 'Food' ? 'active' : ''}`" @click="filterGallery('Food')">
            <RouterLink to="?">Food</RouterLink>
          </li>

          <li :class="`btn ${addActive == 'Photoshoots' ? 'active' : ''}`" @click="filterGallery('Photoshoots')">
            <RouterLink to="?">Photoshoots</RouterLink>
          </li>

        </ul>
      </div>
    </div>

    <div class="container">
      <Lightgallery
        :settings="{ speed: 500, plugins: plugins, selector: '.lightimg' }"
        class="row lightgallery"
      >
        <li
          class="card-container col-xl-4 col-md-6 col-sm-6 m-b30"
          v-for="(item, index) in items"
          :key="index"
        >
          <div class="dz-box overlay style-1">
            <div class="dz-media">
              <img :src="item.img" alt="" />
            </div>

            <div class="dz-info">
              <span :data-src="item.img" class="view-btn lightimg">
                <img :src="item.img" alt="" style="display: none" />
              </span>

              <h6 class="sub-title">{{ item.categoryLabel }}</h6>

              <h4 class="title m-b15">
                <RouterLink to="/portfolio-details">
                  Gaikwad Sardar Wada <span>Pune</span>
                </RouterLink>
              </h4>
            </div>
          </div>
        </li>
      </Lightgallery>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Lightgallery from 'lightgallery/vue'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import { RouterLink } from 'vue-router'

// images
import exteriorFront from '@/assets/images/wada/gallery/exterior-front.webp'
import heritageWall from '@/assets/images/wada/gallery/heritage-wall.webp'
import heritageDoor from '@/assets/images/wada/gallery/heritage-door.webp'
import heritageGate from '@/assets/images/wada/gallery/heritage-gate.webp'
import heritageVaranda from '@/assets/images/wada/gallery/heritage-varanda.webp'
import stayRoom from '@/assets/images/wada/gallery/stay-room.webp'
import stayDormitory from '@/assets/images/wada/gallery/stay-dormitory.webp'
import loungeInterior from '@/assets/images/wada/gallery/lounge-interior.webp'
import diwaliFacade from '@/assets/images/wada/gallery/diwali-facade.webp'
import eventFacade from '@/assets/images/wada/gallery/event-facade.webp'
import ceremonyChairs from '@/assets/images/wada/gallery/ceremony-chairs.webp'
import ceremonyChairs2 from '@/assets/images/wada/gallery/ceremony-chairs-2.webp'
import decorSwing from '@/assets/images/wada/gallery/decor-swing.webp'
import decorUmbrella from '@/assets/images/wada/gallery/decor-umbrella.webp'
import ritualReception from '@/assets/images/wada/gallery/ritual-reception.webp'
import haldiCeremony1 from '@/assets/images/wada/gallery/haldi-ceremony-1.webp'
import haldiCeremony4 from '@/assets/images/wada/gallery/haldi-ceremony-4.webp'
import haldiSeating from '@/assets/images/wada/gallery/haldi-seating.webp'
import floralHaar from '@/assets/images/wada/gallery/floral-haar.webp'
import diwaliCelebration from '@/assets/images/wada/gallery/diwali-celebration.webp'
import eventHost from '@/assets/images/wada/gallery/event-host.webp'
import courtyardNight from '@/assets/images/wada/gallery/courtyard-night.webp'
import diningSetup from '@/assets/images/wada/gallery/dining-setup.webp'

export default defineComponent({
  components: { Lightgallery, RouterLink },

  setup() {
    const data = [
      { img: exteriorFront, categery: 'All Stay Photoshoots', categoryLabel: 'Stay' },
      { img: heritageGate, categery: 'All Stay Photoshoots', categoryLabel: 'Photoshoots' },
      { img: heritageWall, categery: 'All Stay Photoshoots', categoryLabel: 'Photoshoots' },
      { img: heritageDoor, categery: 'All Stay Photoshoots', categoryLabel: 'Photoshoots' },
      { img: heritageVaranda, categery: 'All Stay Photoshoots', categoryLabel: 'Photoshoots' },
      { img: stayRoom, categery: 'All Stay', categoryLabel: 'Stay' },
      { img: stayDormitory, categery: 'All Stay', categoryLabel: 'Stay' },
      { img: loungeInterior, categery: 'All Stay Photoshoots', categoryLabel: 'Stay' },
      { img: courtyardNight, categery: 'All Stay Events', categoryLabel: 'Events' },
      { img: diwaliFacade, categery: 'All Events Stay', categoryLabel: 'Events' },
      { img: eventFacade, categery: 'All Events', categoryLabel: 'Events' },
      { img: ceremonyChairs, categery: 'All Events', categoryLabel: 'Events' },
      { img: ceremonyChairs2, categery: 'All Events', categoryLabel: 'Events' },
      { img: decorSwing, categery: 'All Events Photoshoots', categoryLabel: 'Events' },
      { img: decorUmbrella, categery: 'All Events Photoshoots', categoryLabel: 'Events' },
      { img: ritualReception, categery: 'All Events', categoryLabel: 'Events' },
      { img: haldiCeremony1, categery: 'All Events', categoryLabel: 'Events' },
      { img: haldiCeremony4, categery: 'All Events', categoryLabel: 'Events' },
      { img: haldiSeating, categery: 'All Events', categoryLabel: 'Events' },
      { img: floralHaar, categery: 'All Events', categoryLabel: 'Events' },
      { img: diwaliCelebration, categery: 'All Events', categoryLabel: 'Events' },
      { img: eventHost, categery: 'All Events', categoryLabel: 'Events' },
      { img: diningSetup, categery: 'All Food', categoryLabel: 'Food' }
    ]

    const items = ref(data)
    const addActive = ref('All')

    return { data, items, addActive }
  },

  data: () => ({
    plugins: [lgThumbnail, lgZoom]
  }),

  methods: {
    filterGallery(name: string) {
      const updateItems = this.data.filter((el: any) =>
        el.categery.includes(name)
      )
      this.items = updateItems
      this.addActive = name
    }
  }
})
</script>

<style scoped></style>