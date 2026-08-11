<template>
  <section class="hero" ref="heroEl" @mousemove="onMouseMove" @mouseleave="onMouseLeave">
    <div class="hero-petals" aria-hidden="true">
      <span
        v-for="p in petals"
        :key="p.id"
        class="petal"
        :style="`left:${p.left}%; width:${p.size}px; height:${p.size}px; animation-duration:${p.duration}s; animation-delay:${p.delay}s;`"
      ></span>
    </div>

    <Swiper
      class="hero-swiper"
      :modules="module"
      :effect="'fade'"
      :fadeEffect="{ crossFade: true }"
      :speed="1200"
      :loop="true"
      :autoplay="{ delay: 5500, disableOnInteraction: false }"
      @slideChange="onSlideChange"
      @swiper="onSwiper"
    >
      <SwiperSlide class="hero-slide" v-for="(slide, ind) in mainSlider" :key="ind">
        <div class="hero-media" :style="parallaxStyle">
          <div class="hero-img" :class="{ 'ken-burns': activeIndex === ind }" :style="`background-image:url(${slide.img})`"></div>
          <div class="hero-scrim"></div>
        </div>

        <div class="hero-content container">
          <div class="hero-text" :class="{ 'text-animate': activeIndex === ind }">
            <div class="hero-eyebrow">
              <span class="eyebrow-line"></span>
              <span class="eyebrow-label">{{ slide.subtitle }}</span>
              <span class="eyebrow-dot"></span>
              <span class="eyebrow-location"><i class="fas fa-map-marker-alt"></i> Rajgurunagar, Pune</span>
            </div>

            <h1 class="hero-title">
              {{ slide.titleLine1 }}<br />
              {{ slide.titleLine2 }}<span class="hero-highlight">{{ slide.highlight }}</span>{{ slide.titleLine3 }}
            </h1>

            <p class="hero-desc">{{ slide.description }}</p>

            <div class="hero-actions">
              <RouterLink :to="slide.primaryLink" class="hero-btn hero-btn-primary">
                <span>{{ slide.primaryBtn }}</span>
                <i class="fas fa-arrow-right"></i>
              </RouterLink>
              <RouterLink :to="slide.secondaryLink" class="hero-btn hero-btn-ghost">
                <span>{{ slide.secondaryBtn }}</span>
              </RouterLink>
            </div>

            <div class="hero-stats" :class="{ 'text-animate': activeIndex === ind }">
              <div class="hero-stat" v-for="(s, si) in stats" :key="si">
                <span class="hero-stat-value">{{ s.display }}{{ s.suffix }}</span>
                <span class="hero-stat-label">{{ s.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    <div class="hero-heritage">
      <span class="heritage-ring"></span>
      <span class="badge-year">1670</span>
      <span class="badge-label">Est.</span>
    </div>

    <div class="hero-footer container">
      <div class="hero-count">
        <span class="count-current">{{ String(activeIndex + 1).padStart(2, '0') }}</span>
        <span class="count-divider"></span>
        <span class="count-total">{{ String(mainSlider.length).padStart(2, '0') }}</span>
      </div>

      <div class="hero-progress-track">
        <span
          v-for="(slide, ind) in mainSlider"
          :key="ind"
          class="hero-progress-bar"
          :class="{ active: activeIndex === ind, done: ind < activeIndex }"
        >
          <span class="hero-progress-fill" :class="{ animate: activeIndex === ind }"></span>
        </span>
      </div>

      <div class="hero-nav-group">
        <button class="hero-nav hero-nav-prev" aria-label="Previous slide" @click="slidePrev">
          <i class="las la-angle-left"></i>
        </button>
        <button class="hero-nav hero-nav-next" aria-label="Next slide" @click="slideNext">
          <i class="las la-angle-right"></i>
        </button>
      </div>
    </div>

    <div class="hero-scroll">
      <span class="scroll-label">Scroll</span>
      <span class="scroll-line"><span class="scroll-dot"></span></span>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted, onBeforeUnmount } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade } from 'swiper/modules'

import slide_pic1 from '@/assets/images/wada/gallery/exterior-front.webp'
import slide_pic2 from '@/assets/images/wada/gallery/haldi-seating.webp'
import slide_pic3 from '@/assets/images/wada/gallery/courtyard-night.webp'

export default defineComponent({
  components: { Swiper, SwiperSlide },

  setup() {
    const activeIndex = ref(0)
    const heroEl = ref<HTMLElement | null>(null)
    const parallaxStyle = ref('')
    let swiperRef: any = null
    let statsStarted = false

    const onSwiper = (swiper: any) => {
      swiperRef = swiper
    }

    const onSlideChange = (swiper: any) => {
      activeIndex.value = -1
      setTimeout(() => {
        activeIndex.value = swiper.realIndex
      }, 60)
    }

    const slidePrev = () => swiperRef?.slidePrev()
    const slideNext = () => swiperRef?.slideNext()

    const canHover = typeof window !== 'undefined' && window.matchMedia?.('(hover: hover) and (pointer: fine)').matches

    const onMouseMove = (e: MouseEvent) => {
      if (!canHover || !heroEl.value) return
      const rect = heroEl.value.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
      parallaxStyle.value = `transform: translate(${x * -14}px, ${y * -10}px) scale(1.03);`
    }
    const onMouseLeave = () => {
      parallaxStyle.value = ''
    }

    // decorative floating marigold petals
    const petals = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.round(Math.random() * 100),
      size: 6 + Math.round(Math.random() * 8),
      duration: 10 + Math.round(Math.random() * 10),
      delay: Math.round(Math.random() * 12)
    }))

    // animated stat counters
    const statsData = [
      { value: 350, suffix: '+', label: 'Years of Heritage' },
      { value: 500, suffix: '+', label: 'Celebrations Hosted' },
      { value: 3, suffix: '', label: 'Acre Heritage Estate' }
    ]
    const stats = reactive(statsData.map((s) => ({ ...s, display: 0 })))

    const startCount = () => {
      if (statsStarted) return
      statsStarted = true
      const duration = 1600
      const start = performance.now()
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration)
        const eased = 1 - Math.pow(1 - p, 3)
        stats.forEach((s, i) => {
          s.display = Math.round(statsData[i].value * eased)
        })
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }

    onMounted(() => {
      setTimeout(startCount, 500)
    })

    onBeforeUnmount(() => {
      swiperRef = null
    })

    return {
      activeIndex,
      onSwiper,
      onSlideChange,
      slidePrev,
      slideNext,
      heroEl,
      parallaxStyle,
      onMouseMove,
      onMouseLeave,
      petals,
      stats,

      mainSlider: [
        {
          img: slide_pic1,
          subtitle: 'Gaikwad Sardar Wada',
          titleLine1: 'Experience Heritage',
          titleLine2: 'With A ',
          highlight: 'Royal',
          titleLine3: ' Legacy',
          description:
            'Step into the timeless beauty of Gaikwad Sardar Wada — a heritage space that reflects traditional architecture, cultural pride, and the rich legacy of Maharashtra.',
          primaryBtn: 'Explore Wada',
          secondaryBtn: 'Know History',
          primaryLink: '/services',
          secondaryLink: '/about-us'
        },
        {
          img: slide_pic2,
          subtitle: 'Historical Architecture',
          titleLine1: 'Where Every Wall',
          titleLine2: 'Tells A ',
          highlight: 'Story',
          titleLine3: '',
          description:
            'Discover the charm of old-world craftsmanship, wooden details, traditional courtyards, and the architectural soul of a historic Maharashtrian wada.',
          primaryBtn: 'View Gallery',
          secondaryBtn: 'Our Legacy',
          primaryLink: '/portfolio',
          secondaryLink: '/about-us'
        },
        {
          img: slide_pic3,
          subtitle: 'Cultural Pride',
          titleLine1: 'A Place Rooted',
          titleLine2: 'In ',
          highlight: 'Tradition',
          titleLine3: '',
          description:
            'Gaikwad Sardar Wada is more than a structure — it is a living memory of culture, pride, history, and the royal heritage of Maharashtra.',
          primaryBtn: 'Visit Now',
          secondaryBtn: 'Learn More',
          primaryLink: '/contact-us',
          secondaryLink: '/about-us'
        }
      ],

      module: [Autoplay, EffectFade]
    }
  }
})
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: calc(100vh - 110px);
  min-height: 600px;
  max-height: 920px;
  overflow: hidden;
  background: #1a0f08;
}

:deep(.hero-swiper),
:deep(.hero-swiper .swiper-wrapper),
:deep(.hero-slide) {
  height: 100%;
  width: 100%;
}

.hero-slide {
  position: relative;
}

/* ── Background media ── */
.hero-media {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-media {
  transition: transform 0.25s ease-out;
}

.hero-img {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transform: scale(1.06);
  filter: contrast(1.08) saturate(1.12);
}

/* ── Floating marigold petals ── */
.hero-petals {
  position: absolute;
  inset: 0;
  z-index: 1;
  overflow: hidden;
  pointer-events: none;
}
.petal {
  position: absolute;
  top: -8%;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #ffd98a 0%, #c9a96e 55%, #8a6a35 100%);
  opacity: 0;
  animation-name: petalFall;
  animation-timing-function: ease-in;
  animation-iteration-count: infinite;
  filter: drop-shadow(0 0 4px rgba(201, 169, 110, 0.5));
}
@keyframes petalFall {
  0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
  8% { opacity: 0.85; }
  90% { opacity: 0.6; }
  100% { transform: translate(24px, 118vh) rotate(300deg); opacity: 0; }
}

.hero-img.ken-burns {
  animation: kenBurns 8s ease-out forwards;
}

@keyframes kenBurns {
  from { transform: scale(1.06); }
  to { transform: scale(1); }
}

.hero-scrim {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(26, 15, 8, 0.55) 0%, rgba(26, 15, 8, 0.35) 35%, rgba(26, 15, 8, 0.75) 100%),
    linear-gradient(90deg, rgba(26, 15, 8, 0.85) 0%, rgba(26, 15, 8, 0.35) 48%, rgba(26, 15, 8, 0.15) 75%);
}

/* ── Content ── */
.hero-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  align-items: center;
}

.hero-text {
  max-width: 640px;
  padding-bottom: 60px;
}

.hero-eyebrow {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 22px;
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s;
}
.text-animate .hero-eyebrow {
  opacity: 1;
  transform: translateY(0);
}

.eyebrow-line {
  width: 0;
  height: 1px;
  background: #c9a96e;
  transition: width 0.9s ease 0.35s;
}
.text-animate .eyebrow-line {
  width: 44px;
}

.eyebrow-label {
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  letter-spacing: 4px;
  text-transform: uppercase;
  font-weight: 600;
  color: #c9a96e;
}

.eyebrow-dot {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(247, 240, 227, 0.4);
  flex-shrink: 0;
}

.eyebrow-location {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 12.5px;
  color: rgba(247, 240, 227, 0.65);
  white-space: nowrap;
}
.eyebrow-location i {
  color: #c9a96e;
  font-size: 11px;
}

@media (max-width: 480px) {
  .eyebrow-dot,
  .eyebrow-location {
    display: none;
  }
}

.hero-title {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: clamp(38px, 5.2vw, 68px);
  line-height: 1.1;
  color: #f7f0e3;
  margin: 0 0 24px;
  opacity: 0;
  transform: translateY(26px);
  transition: opacity 0.8s ease 0.25s, transform 0.8s ease 0.25s;
}
.text-animate .hero-title {
  opacity: 1;
  transform: translateY(0);
}

.hero-highlight {
  color: #c9a96e;
  font-style: italic;
}

.hero-desc {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 17px;
  line-height: 1.75;
  color: rgba(247, 240, 227, 0.82);
  max-width: 480px;
  margin: 0 0 36px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s;
}
.text-animate .hero-desc {
  opacity: 1;
  transform: translateY(0);
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 18px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease 0.55s, transform 0.8s ease 0.55s;
}
.text-animate .hero-actions {
  opacity: 1;
  transform: translateY(0);
}

.hero-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 32px;
  border-radius: 50px;
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.35s ease;
}

.hero-btn-primary {
  background: #c9a96e;
  color: #1a0f08;
  box-shadow: 0 10px 30px rgba(201, 169, 110, 0.35);
}
.hero-btn-primary:hover {
  background: #f0e6d3;
  color: #1a0f08;
  transform: translateY(-2px);
  box-shadow: 0 14px 34px rgba(201, 169, 110, 0.45);
}
.hero-btn-primary i {
  transition: transform 0.35s ease;
}
.hero-btn-primary:hover i {
  transform: translateX(4px);
}

.hero-btn-ghost {
  background: transparent;
  color: #f7f0e3;
  border: 1px solid rgba(247, 240, 227, 0.4);
}
.hero-btn-ghost:hover {
  border-color: #c9a96e;
  color: #c9a96e;
  transform: translateY(-2px);
}

/* ── Stat counters ── */
.hero-stats {
  display: flex;
  gap: 36px;
  margin-top: 42px;
  padding-top: 28px;
  border-top: 1px solid rgba(247, 240, 227, 0.18);
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease 0.7s, transform 0.8s ease 0.7s;
}
.text-animate .hero-stats {
  opacity: 1;
  transform: translateY(0);
}
.hero-stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.hero-stat-value {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 26px;
  color: #c9a96e;
  line-height: 1;
}
.hero-stat-label {
  font-family: 'Montserrat', sans-serif;
  font-size: 10.5px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: rgba(247, 240, 227, 0.65);
}

/* ── Heritage badge ── */
.hero-heritage {
  position: absolute;
  top: 40px;
  right: 40px;
  z-index: 3;
  width: 76px;
  height: 76px;
  border-radius: 50%;
  border: 1px solid rgba(201, 169, 110, 0.5);
  background: rgba(26, 15, 8, 0.35);
  backdrop-filter: blur(6px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #f0e6d3;
}
.heritage-ring {
  position: absolute;
  inset: -9px;
  border-radius: 50%;
  border: 1px dashed rgba(201, 169, 110, 0.45);
  animation: ringSpin 24s linear infinite;
}
@keyframes ringSpin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.badge-year {
  font-family: 'Playfair Display', serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
}
.badge-label {
  font-family: 'Montserrat', sans-serif;
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #c9a96e;
  margin-top: 4px;
}

/* ── Footer bar: count / progress / nav ── */
.hero-footer {
  position: absolute;
  left: 50%;
  bottom: 40px;
  transform: translateX(-50%);
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 28px;
  width: 100%;
}

.hero-count {
  display: flex;
  align-items: baseline;
  gap: 8px;
  font-family: 'Playfair Display', serif;
  color: #f0e6d3;
  flex-shrink: 0;
}
.count-current {
  font-size: 20px;
  font-weight: 700;
  color: #c9a96e;
}
.count-divider {
  width: 18px;
  height: 1px;
  background: rgba(247, 240, 227, 0.4);
}
.count-total {
  font-size: 14px;
  color: rgba(247, 240, 227, 0.55);
}

.hero-progress-track {
  display: flex;
  gap: 10px;
  flex: 1;
  max-width: 260px;
}
.hero-progress-bar {
  position: relative;
  flex: 1;
  height: 2px;
  background: rgba(247, 240, 227, 0.25);
  border-radius: 2px;
  overflow: hidden;
}
.hero-progress-bar.done .hero-progress-fill {
  width: 100%;
  background: rgba(201, 169, 110, 0.55);
}
.hero-progress-fill {
  display: block;
  height: 100%;
  width: 0%;
  background: #c9a96e;
  border-radius: 2px;
}
.hero-progress-fill.animate {
  animation: fillBar 5.5s linear forwards;
}
@keyframes fillBar {
  from { width: 0%; }
  to { width: 100%; }
}

.hero-nav-group {
  display: flex;
  gap: 10px;
  flex-shrink: 0;
}
.hero-nav {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 1px solid rgba(247, 240, 227, 0.35);
  background: transparent;
  color: #f0e6d3;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}
.hero-nav:hover {
  background: #c9a96e;
  border-color: #c9a96e;
  color: #1a0f08;
}

/* ── Scroll indicator ── */
.hero-scroll {
  position: absolute;
  right: 40px;
  bottom: 130px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.scroll-label {
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(247, 240, 227, 0.6);
  writing-mode: vertical-rl;
}
.scroll-line {
  position: relative;
  width: 1px;
  height: 50px;
  background: rgba(247, 240, 227, 0.25);
  overflow: hidden;
}
.scroll-dot {
  position: absolute;
  left: -1.5px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #c9a96e;
  animation: scrollDown 2.2s ease-in-out infinite;
}
@keyframes scrollDown {
  0% { top: -6px; opacity: 0; }
  30% { opacity: 1; }
  80% { opacity: 1; }
  100% { top: 100%; opacity: 0; }
}

/* ── Responsive ── */
@media (max-width: 991px) {
  .hero {
    height: 92vh;
    min-height: 580px;
  }
  .hero-heritage {
    top: 24px;
    right: 24px;
    width: 62px;
    height: 62px;
  }
  .hero-scroll {
    display: none;
  }
  .hero-footer {
    bottom: 28px;
    gap: 18px;
  }
  .hero-progress-track {
    max-width: 140px;
  }
}

@media (max-width: 767px) {
  .hero-text {
    padding-bottom: 40px;
  }
  .hero-desc {
    font-size: 15px;
  }
  .hero-btn {
    padding: 14px 24px;
    font-size: 12px;
  }
  .hero-footer {
    flex-wrap: wrap;
    gap: 14px;
  }
  .hero-progress-track {
    order: 3;
    max-width: 100%;
    flex-basis: 100%;
  }
  .hero-stats {
    gap: 22px;
    margin-top: 30px;
    padding-top: 20px;
  }
  .hero-stat-value {
    font-size: 21px;
  }
  .hero-stat-label {
    font-size: 9.5px;
  }
}

@media (max-width: 480px) {
  .hero-actions {
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
  }
  .hero-btn {
    width: 100%;
    justify-content: center;
  }
  .hero-stats {
    flex-wrap: wrap;
    row-gap: 16px;
  }
}

@media (max-width: 380px) {
  .hero-stats {
    gap: 16px;
  }
  .hero-stat-value {
    font-size: 18px;
  }
}
</style>
