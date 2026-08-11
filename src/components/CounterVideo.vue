<template>
  <div class="dz-content-inner heritage-counter">

    <!-- Stats Section -->
    <div class="stats-wrap" ref="statsRef">
      <div class="container">
        <div class="stats-grid">
          <div
            class="stat-item"
            v-for="(item, ind) in countUp"
            :key="ind"
            :class="{ visible: statsVisible }"
            :style="{ transitionDelay: `${ind * 0.15}s` }"
          >
            <!-- Number -->
            <div class="stat-num">
              <CountUp
                v-if="statsVisible"
                start-val="0"
                :end-val="item.endVal"
                :duration="2.5"
              />
              <span v-else>0</span>
              <span class="stat-suffix">{{ item.suffix || '+' }}</span>
            </div>

            <!-- Label -->
            <div class="stat-label">
              <span class="s-icon"><i :class="item.icon"></i></span>
              <span>{{ item.title }} {{ item.text }}</span>
            </div>

            <!-- Divider (not last) -->
            <div class="stat-div" v-if="ind < countUp.length - 1"></div>

          </div>
        </div>
      </div>
    </div>

    <!-- Image Section -->
    <div class="img-section" ref="imgRef">
      <div class="img-wrap" :class="{ visible: imgVisible }">
        <img src="@/assets/images/video/pic3.png" alt="Wada Courtyard" />

        <!-- Overlay with text -->
        <div class="img-caption">
          <div class="caption-inner">
            <span class="caption-label">
              <i class="las la-landmark"></i>
              Gaikwad Sardar Wada
            </span>
            <p class="caption-text">
              A 350-year-old living heritage — Rajgurunagar, Pune
            </p>
          </div>
        </div>

        <!-- Corner accents -->
        <div class="img-corner top-left"></div>
        <div class="img-corner top-right"></div>
        <div class="img-corner bottom-left"></div>
        <div class="img-corner bottom-right"></div>

      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'
import CountUp from 'vue-countup-v3'

export default defineComponent({
  name: 'counterVideo',
  components: { CountUp },

  setup() {
    const statsRef   = ref<HTMLElement | null>(null)
    const imgRef     = ref<HTMLElement | null>(null)
    const statsVisible = ref(false)
    const imgVisible   = ref(false)

    let observer: IntersectionObserver | null = null

    onMounted(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.target === statsRef.value && e.isIntersecting) statsVisible.value = true
            if (e.target === imgRef.value   && e.isIntersecting) imgVisible.value   = true
          })
        },
        { threshold: 0.2 }
      )
      if (statsRef.value) observer.observe(statsRef.value)
      if (imgRef.value)   observer.observe(imgRef.value)
    })

    onUnmounted(() => observer?.disconnect())

    return {
      statsRef,
      imgRef,
      statsVisible,
      imgVisible,

      countUp: [
        {
          endVal: 350,
          suffix: '+',
          icon: 'las la-history',
          title: 'Years of',
          text: 'Heritage'
        },
        {
          endVal: 100,
          suffix: '+',
          icon: 'las la-smile',
          title: 'Happy',
          text: 'Guests'
        },
        {
          endVal: 50,
          suffix: '+',
          icon: 'las la-glass-cheers',
          title: 'Events &',
          text: 'Celebrations'
        },
        {
          endVal: 10,
          suffix: '+',
          icon: 'las la-star',
          title: 'Types of',
          text: 'Experiences'
        }
      ]
    }
  }
})
</script>

<style scoped>
.heritage-counter {
  background: #1a0f08;
  overflow: hidden;
}

/* ══════════════════════
   STATS
══════════════════════ */
.stats-wrap {
  padding: 60px 0 50px;
  border-bottom: 1px solid rgba(201, 169, 110, 0.15);
}

.stats-grid {
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-item {
  flex: 1;
  text-align: center;
  position: relative;
  padding: 0 20px;
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.stat-item.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Number */
.stat-num {
  font-size: clamp(42px, 5vw, 68px);
  font-weight: 800;
  color: #c9a96e;
  font-family: 'Playfair Display', serif;
  line-height: 1;
  margin-bottom: 12px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2px;
}
.stat-suffix {
  font-size: 0.45em;
  margin-top: 8px;
  font-weight: 700;
  color: #c9a96e;
}

/* Label */
.stat-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 600;
  color: #c4b49a;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.s-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(201, 169, 110, 0.1);
  border: 1px solid rgba(201, 169, 110, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
}
.s-icon i {
  font-size: 16px;
  color: #c9a96e;
}

/* Vertical divider */
.stat-div {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 60px;
  background: linear-gradient(to bottom, transparent, rgba(201,169,110,0.25), transparent);
}

/* ══════════════════════
   IMAGE
══════════════════════ */
.img-section {
  padding: 50px 60px 60px;
}

.img-wrap {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s;
  max-height: 550px;
}
.img-wrap.visible {
  opacity: 1;
  transform: translateY(0);
}
.img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 8s ease;
}
.img-wrap:hover img { transform: scale(1.04); }

/* Gradient overlay */
.img-wrap::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(26, 15, 8, 0.75) 0%,
    rgba(26, 15, 8, 0.1) 50%,
    transparent 100%
  );
  z-index: 1;
}

/* Caption */
.img-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  padding: 30px 36px;
}
.caption-inner {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.caption-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 700;
  color: #c9a96e;
}
.caption-label i { font-size: 14px; }
.caption-text {
  font-size: 16px;
  font-weight: 500;
  color: #f0e6d3;
  margin: 0;
  font-style: italic;
  font-family: 'Playfair Display', serif;
}

/* Corner accents */
.img-corner {
  position: absolute;
  width: 24px;
  height: 24px;
  z-index: 2;
  opacity: 0;
  transition: opacity 0.6s ease 0.8s;
}
.img-wrap.visible .img-corner { opacity: 1; }
.img-corner.top-left {
  top: 14px; left: 14px;
  border-top: 2px solid rgba(201,169,110,0.6);
  border-left: 2px solid rgba(201,169,110,0.6);
  border-radius: 4px 0 0 0;
}
.img-corner.top-right {
  top: 14px; right: 14px;
  border-top: 2px solid rgba(201,169,110,0.6);
  border-right: 2px solid rgba(201,169,110,0.6);
  border-radius: 0 4px 0 0;
}
.img-corner.bottom-left {
  bottom: 14px; left: 14px;
  border-bottom: 2px solid rgba(201,169,110,0.6);
  border-left: 2px solid rgba(201,169,110,0.6);
  border-radius: 0 0 0 4px;
}
.img-corner.bottom-right {
  bottom: 14px; right: 14px;
  border-bottom: 2px solid rgba(201,169,110,0.6);
  border-right: 2px solid rgba(201,169,110,0.6);
  border-radius: 0 0 4px 0;
}

/* ══════════════════════
   RESPONSIVE
══════════════════════ */
@media (max-width: 991px) {
  .stats-wrap { padding: 40px 0; }
  .stat-num { font-size: clamp(34px, 5vw, 52px); }
  .img-section { padding: 30px 30px 40px; }
}

@media (max-width: 767px) {
  .stats-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
  }
  .stat-item {
    padding: 20px 16px;
    border-bottom: 1px solid rgba(201,169,110,0.1);
  }
  .stat-item:nth-child(odd) {
    border-right: 1px solid rgba(201,169,110,0.1);
  }
  .stat-div { display: none; }
  .img-section { padding: 20px 16px 30px; }
  .img-wrap { max-height: 380px; border-radius: 12px; }
  .caption-text { font-size: 14px; }
}

@media (max-width: 480px) {
  .stats-grid { grid-template-columns: 1fr 1fr; }
  .stat-num { font-size: 36px; }
  .img-wrap { max-height: 280px; }
  .img-caption { padding: 20px; }
}
</style>