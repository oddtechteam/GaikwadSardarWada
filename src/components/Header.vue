<template>
  <div class="topbar">
    <div class="topbar-inner container-fluid">
      <div class="topbar-left">
        <span class="topbar-tag">Est. 1670</span>
        <a
          href="https://maps.google.com/?q=Gaikwad+Sardar+Wada+Gulani+Rajgurunagar+Pune"
          target="_blank"
          rel="noopener"
          class="topbar-item"
        >
          <i class="fas fa-map-marker-alt"></i>
          Gulani, near Rajgurunagar, Pune
        </a>
      </div>
      <div class="topbar-right">
        <a href="mailto:gaikwadsardarwada@gmail.com" class="topbar-item">
          <i class="fas fa-envelope"></i>
          gaikwadsardarwada@gmail.com
        </a>
        <a href="tel:+917972194411" class="topbar-item topbar-phone">
          <i class="fas fa-phone-alt"></i>
          +91 79721 94411
        </a>
      </div>
    </div>
  </div>

  <header class="nav" :class="{ scrolled }">
    <div class="nav-bar container-fluid">
      <RouterLink to="/" class="nav-logo" @click="closeMenu">
        <img src="@/assets/images/logo-g.png" alt="Gaikwad Sardar Wada" />
      </RouterLink>

      <nav class="nav-links" aria-label="Primary" @mouseleave="resetIndicator">
        <RouterLink
          v-for="(item, ind) in menuArr"
          :key="ind"
          :ref="(el) => setLinkRef(el, ind)"
          :to="item.to"
          class="nav-link"
          :class="{ active: isActive(item.to) }"
          @mouseenter="hoverIndicator(ind)"
        >
          {{ item.menu }}
        </RouterLink>
        <span class="nav-indicator" :style="indicatorStyle"></span>
      </nav>

      <a href="tel:+917972194411" class="nav-cta">
        <i class="fas fa-phone-alt"></i>
        <span>+91 79721 94411</span>
      </a>

      <button
        class="nav-burger"
        :class="{ open: menuOpen }"
        type="button"
        aria-label="Toggle menu"
        @click="menuOpen = !menuOpen"
      >
        <span class="burger-ring"></span>
        <span class="burger-line"></span>
        <span class="burger-line"></span>
        <span class="burger-line"></span>
      </button>
    </div>

    <div class="nav-scroll-track">
      <div class="nav-scroll-fill" :style="`width:${scrollProgress}%`"></div>
    </div>

    <div class="nav-drawer" :class="{ open: menuOpen }">
      <div class="drawer-backdrop" @click="closeMenu"></div>
      <div class="drawer-panel">
        <div class="drawer-petals" aria-hidden="true">
          <span
            v-for="p in petals"
            :key="p.id"
            class="drawer-petal"
            :style="`left:${p.left}%; width:${p.size}px; height:${p.size}px; animation-duration:${p.duration}s; animation-delay:${p.delay}s;`"
          ></span>
        </div>

        <button class="drawer-close" aria-label="Close menu" @click="closeMenu">
          <i class="fas fa-times"></i>
        </button>

        <div class="drawer-logo">
          <img src="@/assets/images/logo-g.png" alt="Gaikwad Sardar Wada" />
        </div>

        <nav class="drawer-links" aria-label="Mobile">
          <RouterLink
            v-for="(item, ind) in menuArr"
            :key="ind"
            :to="item.to"
            class="drawer-link"
            :class="{ active: isActive(item.to) }"
            :style="`transition-delay:${menuOpen ? ind * 60 + 120 : 0}ms`"
            @click="closeMenu"
          >
            <span class="drawer-link-index">{{ String(ind + 1).padStart(2, '0') }}</span>
            <span>{{ item.menu }}</span>
          </RouterLink>
        </nav>

        <div class="drawer-footer">
          <a href="tel:+917972194411" class="drawer-contact">
            <i class="fas fa-phone-alt"></i> +91 79721 94411
          </a>
          <a href="mailto:gaikwadsardarwada@gmail.com" class="drawer-contact">
            <i class="fas fa-envelope"></i> gaikwadsardarwada@gmail.com
          </a>
          <p class="drawer-address">
            <i class="fas fa-map-marker-alt"></i> Gulani, near Rajgurunagar, Pune
          </p>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, watch, onMounted, onBeforeUnmount, nextTick } from "vue";
import { RouterLink, useRoute } from "vue-router";

export default defineComponent({
  name: "header_",
  components: { RouterLink },

  setup() {
    const route = useRoute();
    const scrolled = ref(false);
    const menuOpen = ref(false);
    const scrollProgress = ref(0);
    const indicatorStyle = ref("width:0px; opacity:0;");

    const menuArr = reactive([
      { menu: "Home", to: "/" },
      { menu: "About", to: "/about-us" },
      { menu: "Services", to: "/services" },
      { menu: "Gallery", to: "/portfolio" },
      { menu: "Contact", to: "/contact-us" },
    ]);

    const linkEls: Record<number, HTMLElement> = {};
    const setLinkRef = (el: unknown, ind: number) => {
      if (el) linkEls[ind] = (el as any).$el ?? el;
    };

    const moveIndicatorTo = (el: HTMLElement | undefined) => {
      if (!el) {
        indicatorStyle.value = "width:0px; opacity:0;";
        return;
      }
      indicatorStyle.value = `width:${el.offsetWidth}px; transform:translateX(${el.offsetLeft}px); opacity:1;`;
    };

    const hoverIndicator = (ind: number) => moveIndicatorTo(linkEls[ind]);

    const resetIndicator = () => {
      const activeInd = menuArr.findIndex((i) => i.to === route.fullPath);
      moveIndicatorTo(linkEls[activeInd]);
    };

    const isActive = (to: string) => route.fullPath === to;

    const closeMenu = () => {
      menuOpen.value = false;
    };

    const onScroll = () => {
      scrolled.value = window.scrollY > 60;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress.value = max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0;
    };

    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    // decorative drifting petals for the mobile drawer
    const petals = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: Math.round(Math.random() * 100),
      size: 5 + Math.round(Math.random() * 7),
      duration: 9 + Math.round(Math.random() * 8),
      delay: Math.round(Math.random() * 10),
    }));

    watch(menuOpen, (val) => {
      document.body.style.overflow = val ? "hidden" : "";
    });

    watch(
      () => route.fullPath,
      () => {
        closeMenu();
        nextTick(resetIndicator);
      }
    );

    onMounted(() => {
      window.addEventListener("scroll", onScroll);
      window.addEventListener("keydown", onKeydown);
      onScroll();
      nextTick(resetIndicator);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeydown);
      document.body.style.overflow = "";
    });

    return {
      scrolled,
      menuOpen,
      menuArr,
      isActive,
      closeMenu,
      scrollProgress,
      indicatorStyle,
      setLinkRef,
      hoverIndicator,
      resetIndicator,
      petals,
    };
  },
});
</script>

<style scoped>
/* ── Topbar ── */
.topbar {
  background: #1a0f08;
  border-bottom: 1px solid rgba(201, 169, 110, 0.15);
}
.topbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 9px 48px;
}
.topbar-left {
  display: flex;
  align-items: center;
  gap: 14px;
}
.topbar-tag {
  font-family: "Playfair Display", serif;
  font-weight: 700;
  font-size: 12px;
  color: #c9a96e;
  padding-right: 14px;
  border-right: 1px solid rgba(240, 230, 211, 0.2);
}
.topbar-right {
  display: flex;
  align-items: center;
  gap: 24px;
}
.topbar-item {
  display: flex;
  align-items: center;
  gap: 7px;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 12.5px;
  color: rgba(240, 230, 211, 0.75);
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.3s ease;
}
.topbar-item i {
  color: #c9a96e;
  font-size: 11px;
}
.topbar-item:hover {
  color: #f0e6d3;
}
.topbar-phone {
  padding-left: 20px;
  border-left: 1px solid rgba(240, 230, 211, 0.2);
  font-weight: 600;
}

@media (max-width: 1200px) {
  .topbar-inner {
    padding: 9px 28px;
  }
}
@media (max-width: 860px) {
  .topbar-item:not(.topbar-phone) {
    display: none;
  }
  .topbar-inner {
    justify-content: center;
  }
  .topbar-left {
    display: none;
  }
}

.nav {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: #f9f1e8;
  border-bottom: 1px solid rgba(42, 26, 14, 0.08);
  box-shadow: 0 2px 16px rgba(42, 26, 14, 0.05);
}
.nav::before {
  content: "";
  display: block;
  height: 3px;
  background: linear-gradient(to right, #c9a96e 0%, #e8cf9c 50%, #c9a96e 100%);
}

.nav-bar {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 14px 48px;
  transition: padding 0.3s ease;
}
.nav.scrolled .nav-bar {
  padding: 8px 48px;
}

.nav-logo {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}
.nav-logo img {
  height: 54px;
  width: auto;
  transition: height 0.3s ease;
}
.nav.scrolled .nav-logo img {
  height: 42px;
}

.nav-links {
  position: relative;
  display: flex;
  align-items: center;
  gap: 2px;
  margin-left: 32px;
}

.nav-link {
  position: relative;
  z-index: 1;
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 1.3px;
  text-transform: uppercase;
  color: #4a3420;
  text-decoration: none;
  padding: 10px 16px;
  transition: color 0.35s ease, letter-spacing 0.35s ease;
}
.nav-link:hover {
  color: #2a1a0e;
  letter-spacing: 1.7px;
}
.nav-link.active {
  color: #2a1a0e;
}

.nav-indicator {
  position: absolute;
  left: 0;
  bottom: 4px;
  height: 2px;
  background: linear-gradient(to right, #c9a96e, #e8cf9c);
  border-radius: 2px;
  transition: transform 0.4s cubic-bezier(0.65, 0, 0.35, 1), width 0.4s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.3s ease;
}
.nav-indicator::before {
  content: "";
  position: absolute;
  top: -13px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #c9a96e;
}

.nav-cta {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 22px;
  border-radius: 50px;
  background: #2a1a0e;
  color: #f0e6d3;
  font-family: "Montserrat", sans-serif;
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: 0.6px;
  text-decoration: none;
  white-space: nowrap;
  flex-shrink: 0;
  transition: all 0.3s ease;
}
.nav-cta i {
  color: #c9a96e;
  font-size: 12px;
}
.nav-cta:hover {
  background: #c9a96e;
  color: #1a0f08;
}
.nav-cta:hover i {
  color: #1a0f08;
}

.nav-burger {
  position: relative;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid rgba(42, 26, 14, 0.15);
  background: transparent;
  cursor: pointer;
  margin-left: auto;
  flex-shrink: 0;
  z-index: 2;
  transition: border-color 0.3s ease;
}
.burger-ring {
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  border: 1px dashed rgba(201, 169, 110, 0);
  transition: border-color 0.4s ease;
  animation: burgerRingSpin 18s linear infinite;
}
.nav-burger:hover .burger-ring {
  border-color: rgba(201, 169, 110, 0.55);
}
@keyframes burgerRingSpin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.burger-line {
  display: block;
  height: 2px;
  width: 17px;
  background: #2a1a0e;
  border-radius: 2px;
  transition: all 0.35s ease;
}
.nav-burger.open {
  border-color: rgba(201, 169, 110, 0.5);
}
.nav-burger.open .burger-line:nth-child(2) {
  transform: translateY(7px) rotate(45deg);
}
.nav-burger.open .burger-line:nth-child(3) {
  opacity: 0;
}
.nav-burger.open .burger-line:nth-child(4) {
  transform: translateY(-7px) rotate(-45deg);
}

/* ── Scroll progress ── */
.nav-scroll-track {
  height: 2px;
  background: rgba(42, 26, 14, 0.06);
}
.nav-scroll-fill {
  height: 100%;
  background: linear-gradient(to right, #c9a96e, #e8cf9c);
  transition: width 0.15s linear;
}

/* ── Mobile drawer ── */
.nav-drawer {
  position: fixed;
  inset: 0;
  z-index: 998;
  visibility: hidden;
  pointer-events: none;
}
.nav-drawer.open {
  visibility: visible;
  pointer-events: auto;
}

.drawer-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(15, 9, 5, 0.55);
  opacity: 0;
  transition: opacity 0.4s ease;
}
.nav-drawer.open .drawer-backdrop {
  opacity: 1;
}

.drawer-panel {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(400px, 88vw);
  background: #2a1a0e;
  display: flex;
  flex-direction: column;
  padding: 32px 36px 40px;
  overflow: hidden;
  transform: translateX(100%);
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: -20px 0 60px rgba(0, 0, 0, 0.3);
}
.nav-drawer.open .drawer-panel {
  transform: translateX(0);
}

.drawer-petals {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}
.drawer-petal {
  position: absolute;
  top: -8%;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #ffd98a 0%, #c9a96e 55%, #8a6a35 100%);
  opacity: 0;
  animation-name: drawerPetalFall;
  animation-timing-function: ease-in;
  animation-iteration-count: infinite;
}
@keyframes drawerPetalFall {
  0% { transform: translateY(0) rotate(0deg); opacity: 0; }
  10% { opacity: 0.5; }
  90% { opacity: 0.3; }
  100% { transform: translateY(115vh) rotate(280deg); opacity: 0; }
}

.drawer-close,
.drawer-logo,
.drawer-links,
.drawer-footer {
  position: relative;
  z-index: 1;
}

.drawer-close {
  align-self: flex-end;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(240, 230, 211, 0.3);
  background: transparent;
  color: #f0e6d3;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.drawer-close:hover {
  background: #c9a96e;
  border-color: #c9a96e;
  color: #1a0f08;
}

.drawer-logo {
  margin: 28px 0 40px;
}
.drawer-logo img {
  height: 46px;
  border-radius: 4px;
}

.drawer-links {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.drawer-link {
  display: flex;
  align-items: baseline;
  gap: 14px;
  font-family: "Playfair Display", serif;
  font-weight: 700;
  font-size: 27px;
  color: rgba(240, 230, 211, 0.75);
  text-decoration: none;
  padding: 12px 0;
  border-bottom: 1px solid rgba(240, 230, 211, 0.1);
  opacity: 0;
  transform: translateX(24px);
  transition: opacity 0.5s ease, transform 0.5s ease, color 0.3s ease;
}
.nav-drawer.open .drawer-link {
  opacity: 1;
  transform: translateX(0);
}
.drawer-link-index {
  font-family: "Montserrat", sans-serif;
  font-size: 11px;
  font-weight: 600;
  color: #c9a96e;
}
.drawer-link:hover,
.drawer-link.active {
  color: #c9a96e;
}

.drawer-footer {
  margin-top: auto;
  padding-top: 28px;
  border-top: 1px solid rgba(240, 230, 211, 0.12);
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.drawer-contact {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 14px;
  color: rgba(240, 230, 211, 0.85);
  text-decoration: none;
  transition: color 0.3s ease;
}
.drawer-contact i {
  color: #c9a96e;
  width: 16px;
}
.drawer-contact:hover {
  color: #c9a96e;
}
.drawer-address {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 13px;
  color: rgba(240, 230, 211, 0.55);
  margin: 4px 0 0;
}
.drawer-address i {
  color: #c9a96e;
  width: 16px;
  margin-top: 2px;
}

/* ── Responsive ── */
@media (max-width: 1200px) {
  .nav-bar {
    padding: 14px 28px;
  }
  .nav.scrolled .nav-bar {
    padding: 8px 28px;
  }
  .nav-links {
    margin-left: 16px;
    gap: 2px;
  }
  .nav-link {
    padding: 10px 11px;
    font-size: 12px;
  }
  .nav-cta span {
    display: none;
  }
  .nav-cta {
    padding: 12px;
    border-radius: 50%;
  }
}

@media (max-width: 860px) {
  .nav-links,
  .nav-cta {
    display: none;
  }
  .nav-burger {
    display: flex;
  }
}

@media (max-width: 480px) {
  .nav-bar {
    padding: 12px 18px;
  }
  .nav.scrolled .nav-bar {
    padding: 8px 18px;
  }
  .nav-logo img {
    height: 42px;
  }
  .nav.scrolled .nav-logo img {
    height: 36px;
  }
  .drawer-panel {
    padding: 24px 24px 32px;
  }
  .drawer-link {
    font-size: 22px;
  }
}
</style>
