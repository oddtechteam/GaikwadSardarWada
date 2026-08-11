<template>
  <div class="slidearea ps-0">
    <div class="heritage-bnr">

      <!-- Animated lines -->
      <div class="lines" aria-hidden="true">
        <span class="line" v-for="n in 5" :key="n" :style="{ animationDelay: `${n * 0.4}s` }"></span>
      </div>

      <!-- Main content -->
      <div class="bnr-body" :class="{ show: loaded }">

        <div class="bnr-left">
          <p class="bnr-eyebrow">Est. 1670 · Rajgurunagar, Pune</p>
          <h1 class="bnr-title">{{ title }}</h1>
          <nav aria-label="breadcrumb">
            <ul class="breadcrumb">
              <li class="breadcrumb-item">
                <RouterLink to="/">Home</RouterLink>
              </li>
              <li class="breadcrumb-item active">{{ text }}</li>
            </ul>
          </nav>
        </div>

        <div class="bnr-right">
          <a href="tel:7972194411" class="contact-pill">
            <span class="pill-icon"><i class="fas fa-phone-alt"></i></span>
            <span class="pill-text">
              <small>Call Us</small>
              +91 7972194411
            </span>
          </a>
          <a href="mailto:gaikwadsardarwada@gmail.com" class="contact-pill">
            <span class="pill-icon"><i class="fas fa-envelope"></i></span>
            <span class="pill-text">
              <small>Email Us</small>
              gaikwadsardarwada@gmail.com
            </span>
          </a>
        </div>

      </div>

      <!-- Bottom gold bar -->
      <div class="bnr-bar"></div>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  props: {
    img:   { type: String as () => string, required: true },
    title: { type: String as () => string, required: true },
    text:  { type: String as () => string, required: true }
  },
  setup() {
    const loaded = ref(false)
    onMounted(() => setTimeout(() => { loaded.value = true }, 80))
    return { loaded }
  }
})
</script>

<style scoped>
/* ── Base ── */
.heritage-bnr {
  position: relative;
  background: #1a0f08;
  overflow: hidden;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* ── Animated vertical lines ── */
.lines {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: space-around;
  pointer-events: none;
  z-index: 0;
}
.line {
  width: 1px;
  height: 100%;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(201, 169, 110, 0.12) 40%,
    rgba(201, 169, 110, 0.12) 60%,
    transparent 100%
  );
  animation: lineFade 4s ease-in-out infinite alternate;
}
@keyframes lineFade {
  0%   { opacity: 0.3; transform: scaleY(0.6); }
  100% { opacity: 1;   transform: scaleY(1); }
}

/* ── Body ── */
.bnr-body {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 48px 80px;
  gap: 40px;
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.bnr-body.show {
  opacity: 1;
  transform: translateY(0);
}

/* ── Left ── */
.bnr-left { flex: 1; }

.bnr-eyebrow {
  font-size: 11px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #c9a96e;
  font-weight: 600;
  margin: 0 0 10px;
  opacity: 0.8;
}

.bnr-title {
  font-size: clamp(28px, 3.5vw, 48px) !important;
  font-weight: 800 !important;
  color: #f0e6d3 !important;
  font-family: 'Playfair Display', serif !important;
  line-height: 1.1 !important;
  margin: 0 0 14px !important;
}

/* Breadcrumb */
.breadcrumb {
  background: transparent !important;
  padding: 0 !important;
  margin: 0 !important;
  display: flex;
  align-items: center;
  gap: 4px;
}
.breadcrumb-item,
.breadcrumb-item a {
  font-size: 13px;
  color: rgba(240, 230, 211, 0.6) !important;
}
.breadcrumb-item a {
  color: #c9a96e !important;
  text-decoration: none;
  transition: color 0.3s;
}
.breadcrumb-item a:hover { color: #f0e6d3 !important; }
.breadcrumb-item.active { color: rgba(240,230,211,0.8) !important; }
.breadcrumb-item + .breadcrumb-item::before {
  color: rgba(201, 169, 110, 0.35) !important;
}

/* ── Right - Contact pills ── */
.bnr-right {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-shrink: 0;
}

.contact-pill {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  border: 1px solid rgba(201, 169, 110, 0.2);
  border-radius: 50px;
  text-decoration: none;
  background: rgba(201, 169, 110, 0.05);
  transition: all 0.35s ease;
}
.contact-pill:hover {
  background: rgba(201, 169, 110, 0.12);
  border-color: rgba(201, 169, 110, 0.5);
  transform: translateX(-4px);
}

.pill-icon {
  width: 32px;
  height: 32px;
  min-width: 32px;
  border-radius: 50%;
  background: rgba(201, 169, 110, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
}
.contact-pill:hover .pill-icon { background: #c9a96e; }
.pill-icon i {
  font-size: 12px;
  color: #c9a96e;
  transition: color 0.3s ease;
}
.contact-pill:hover .pill-icon i { color: #1a0f08; }

.pill-text {
  display: flex;
  flex-direction: column;
  gap: 1px;
}
.pill-text small {
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(201, 169, 110, 0.6);
  font-weight: 600;
  line-height: 1;
}
.pill-text {
  font-size: 13px;
  font-weight: 600;
  color: #f0e6d3;
  white-space: nowrap;
}

/* ── Bottom bar ── */
.bnr-bar {
  height: 2px;
  background: linear-gradient(
    to right,
    transparent,
    #c9a96e 20%,
    #c9a96e 80%,
    transparent
  );
  animation: barSlide 2s ease forwards;
  transform-origin: left;
}
@keyframes barSlide {
  from { transform: scaleX(0); opacity: 0; }
  to   { transform: scaleX(1); opacity: 1; }
}

/* ── Responsive ── */
@media (max-width: 1280px) {
  .bnr-body { padding: 40px 40px; }
}

@media (max-width: 991px) {
  .bnr-body { padding: 36px 24px; gap: 24px; }
  .pill-text { font-size: 12px; }
}

@media (max-width: 767px) {
  .bnr-body {
    flex-direction: column;
    align-items: flex-start;
    padding: 32px 20px;
    gap: 24px;
  }
  .bnr-right { flex-direction: row; flex-wrap: wrap; }
  .contact-pill:hover { transform: translateY(-3px); }
}

@media (max-width: 480px) {
  .bnr-body { padding: 28px 16px; }
  .bnr-right { flex-direction: column; width: 100%; }
  .contact-pill { justify-content: flex-start; }
  .lines { display: none; }
}
</style>