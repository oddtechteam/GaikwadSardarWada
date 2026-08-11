<template>
  <header
    :class="`site-header mo-left header style-2 header-transparent ${
      headerPosition ? 'is-fixed' : ''
    }`"
  >
    <div class="sticky-header main-bar-wraper navbar-expand-lg">
      <div class="main-bar clearfix">
        <div class="container clearfix">
          <div class="logo-header mostion logo-light">
            <RouterLink to="/"
              ><img class="header_logo2" src="@/assets/images/logo-3.png" alt=""
            /></RouterLink>
          </div>
          <button
            :class="`navbar-toggler collapsed navicon justify-content-end ${
              openMenu ? 'open' : ''
            }`"
            type="button"
            @click="openMenuHeader"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <!-- Extra Nav -->
          <div class="extra-nav">
            <div class="extra-cell">
              <!-- Quik Search -->
              <RouterLink class="search-link" id="quik-search-btn" to="?">
                <i class="flaticon-loupe"></i>
              </RouterLink>
              <div class="menu-btn navicon" @click="sidebarShow = true">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div class="header-nav navbar-collapse justify-content-end">
            <div class="logo-header">
              <RouterLink to="/" class="logo-dark"
                ><img src="@/assets/images/logo-3.png" alt=""
              /></RouterLink>
            </div>
            <Menu />
            <div class="dz-social-icon">
              <ul>
                <li>
                  <a href="https://www.facebook.com/dexignzone/" target="_blank"
                    ><i class="fab fa-facebook-f"></i
                  ></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/dexignzone/" target="_blank"
                    ><i class="fab fa-instagram"></i
                  ></a>
                </li>
                <li>
                  <a href="https://twitter.com/dexignzones/" target="_blank"
                    ><i class="fab fa-twitter"></i
                  ></a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@dexignzone1723" target="_blank"
                    ><i class="fab fa-youtube"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <HeaderSidebar :show="sidebarShow" />
  <div class="menu-close" @click="sidebarShow = false"></div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Menu from '@/components/Menu.vue'
import { RouterLink } from 'vue-router'
import HeaderSidebar from './HeaderSidebar.vue'

export default defineComponent({
  name: 'header_2',
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { Menu, RouterLink, HeaderSidebar },
  setup() {
    const headerPosition = ref<boolean>(false)
    const sidebarShow = ref<boolean>(false)
    const openMenu = ref<boolean>(false)
    return { headerPosition, openMenu, sidebarShow }
  },
  created: function () {
    window.addEventListener('scroll', this.HeaderPosition)
  },
  unmounted: function () {
    window.removeEventListener('scroll', this.HeaderPosition)
  },
  methods: {
    HeaderPosition() {
      const value = window.scrollY
      console.log(value)

      if (value >= 100) {
        this.headerPosition = true
      } else {
        this.headerPosition = false
      }
    },
    openMenuHeader() {
      this.openMenu = !this.openMenu
      let nav = document.querySelector('.header-nav')?.classList
      this.openMenu ? nav?.add('show') : nav?.remove('show')
    }
  }
})
</script>

<style scoped></style>
