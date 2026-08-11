<template>
  <div class="page-content bg-white">
    <!-- Banner -->
    <CommonBanner :img="bnr3" title="About Us" text="About Us" />

    <!-- About Section -->
    <!-- <section class="section-full content-inner about-bx2">
      <HomeAbout />
    </section> -->

    <!-- Heritage Story Section -->
    <section class="heritage-story content-inner">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-6">
            <div class="story-images">
              <div class="img-big">
                <img :src="about1" alt="Wada Architecture" />
                <div class="img-big-overlay"></div>
              </div>
              <div class="img-small">
                <img :src="about2" alt="Wada Interior" />
              </div>
              <div class="story-badge">
                <span class="badge-num">350+</span>
                <span class="badge-text">Years of<br />Heritage</span>
              </div>
              <!-- Decorative dots -->
              <div class="deco-dots">
                <span v-for="n in 9" :key="n" class="dot"></span>
              </div>
              <!-- Gold corner frame -->
              <div class="corner-frame"></div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="section-head style-1">
              <h6 class="sub-title text-primary">OUR STORY</h6>
              <h2 class="title">A Living Legacy<br />Since 1670</h2>
            </div>
            <p class="story-text">
              Gaikwad Sardar Wada stands as one of Maharashtra's most
              beautifully preserved heritage spaces. Built in 1670, this
              traditional wada has witnessed centuries of history, culture, and
              family stories within its walls.
            </p>
            <p class="story-text">
              Today, it opens its doors to those who seek a genuine connection
              with the past — through stays, celebrations, creative shoots, and
              authentic Maharashtrian experiences.
            </p>

            <div class="story-highlights">
              <div
                class="highlight-item"
                v-for="h in highlights"
                :key="h.label"
              >
                <div class="highlight-icon">
                  <i :class="h.icon"></i>
                </div>
                <div>
                  <strong>{{ h.label }}</strong>
                  <span>{{ h.text }}</span>
                </div>
              </div>
            </div>

            <div class="mt-4">
              <RouterLink to="/contact-us" class="btn btn-primary btn-rounded">
                Plan a Visit
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Banner -->
         <section class="dz-content-bx style-3">
      <CounterVideo />
    </section>
    

    <!-- Experience Flow -->
    <section class="content-inner">
      <div class="container">
        <div class="section-head style-1 text-center">
          <h6 class="sub-title text-primary">EXPERIENCE FLOW</h6>
          <h2 class="title">How It Works</h2>
        </div>
        <div class="row">
          <div
            class="col-lg-3 col-sm-6"
            v-for="(item, ind) in workProcessArr"
            :key="ind"
          >
            <div class="work-process-card text-center m-b30">
              <div class="process-num">{{ item.num }}</div>
              <div class="process-icon">
                <i :class="item.icon"></i>
              </div>
              <h4 class="m-b15">{{ item.title }}</h4>
              <p class="m-b0">{{ item.desc }}</p>
              <!-- connector line -->
              <div
                class="connector"
                v-if="ind < workProcessArr.length - 1"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>

        <!-- Values Section -->
    <section class="values-section content-inner" style="background: #f8f5f0">
      <div class="container">
        <div class="section-head style-1 text-center">
          <h6 class="sub-title text-primary">WHAT WE STAND FOR</h6>
          <h2 class="title">Our Values</h2>
        </div>
        <div class="row">
          <div
            class="col-lg-4 col-md-6 m-b30"
            v-for="v in values"
            :key="v.title"
          >
            <div class="value-card">
              <div class="value-icon">
                <i :class="v.icon"></i>
              </div>
              <h4>{{ v.title }}</h4>
              <p>{{ v.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Preview -->
    <!-- <section class="content-inner-2">
      <div class="container">
        <div class="row section-head-bx align-items-center">
          <div class="col-md-8">
            <div class="section-head style-1">
              <h6 class="sub-title text-primary">GALLERY</h6>
              <h2 class="title">Moments at the Wada</h2>
            </div>
          </div>
          <div class="col-md-4 text-start text-md-end mb-4 mb-md-0">
            <RouterLink to="/portfolio" class="btn-link">
              View Full Gallery <i class="fas fa-plus scale08"></i>
            </RouterLink>
          </div>
        </div>
      </div>
      <OurPortfolio />
    </section> -->

    <!-- CTA Banner -->
    <section class="cta-section">
      <div class="cta-overlay"></div>
      <img :src="ctaBg" alt="Wada" class="cta-bg-img" />
      <div class="container cta-content">
        <div class="cta-inner">
          <h6 class="sub-title text-primary">VISIT US</h6>
          <h2>Plan Your Experience<br />at the Wada</h2>
          <div class="cta-divider"></div>
          <p>
            Whether you're looking for a peaceful stay, an intimate celebration,
            or a creative escape — Gaikwad Sardar Wada offers a space that feels
            timeless, personal, and truly special.
          </p>
          <div class="cta-btns">
            <RouterLink to="/contact-us" class="btn btn-primary btn-rounded">
              Check Availability
            </RouterLink>
            <RouterLink
              to="/services"
              class="btn btn-outline-light btn-rounded"
            >
              Explore Experiences
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <HomeFaq />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import CommonBanner from "@/elements/CommonBanner.vue";
import HomeAbout from "@/components/HomeAbout.vue";
import OurPortfolio from "@/components/OurPortfolio.vue";
import HomeFaq from "@/components/HomeFaq.vue";

import bnr3 from "@/assets/images/banner/bnr3.jpg";
import about1 from "@/assets/images/main-slider/slider3/pic1.jpg";
import about2 from "@/assets/images/main-slider/slider3/pic3.jpg";
import ctaBg from "@/assets/images/main-slider/slider3/pic2.jpg";

import CounterVideo from "@/components/CounterVideo.vue";


export default defineComponent({
  name: "about_us",
  components: { CommonBanner, HomeAbout, OurPortfolio, HomeFaq, RouterLink, CounterVideo },

  setup() {
    return {
      bnr3,
      about1,
      about2,
      ctaBg,

      stats: [
        { num: "350+", label: "Years of Heritage" },
        { num: "6+", label: "Unique Experiences" },
        { num: "100+", label: "Happy Guests" },
        { num: "∞", label: "Timeless Memories" },
      ],

      highlights: [
        {
          icon: "las la-map-marker-alt",
          label: "Rajgurunagar, Pune",
          text: "Gulani village, nestled in peaceful surroundings",
        },
        {
          icon: "las la-history",
          label: "Built in 1670",
          text: "Over 350 years of unbroken heritage",
        },
        {
          icon: "las la-home",
          label: "Traditional Architecture",
          text: "Authentic Maharashtrian wada design",
        },
      ],

      values: [
        {
          icon: "las la-landmark",
          title: "Heritage First",
          desc: "Every decision we make respects and preserves the 350-year-old legacy of this space.",
        },
        {
          icon: "las la-heart",
          title: "Personal Touch",
          desc: "We treat every guest like family — with warmth, care, and genuine Maharashtrian hospitality.",
        },
        {
          icon: "las la-leaf",
          title: "Authentic Living",
          desc: "From food to architecture, everything here reflects the real, unfiltered spirit of Maharashtra.",
        },
      ],

      workProcessArr: [
        {
          num: "01",
          icon: "las la-search",
          title: "Explore the Space",
          desc: "Browse stays, experiences, and moments that the wada has to offer.",
        },
        {
          num: "02",
          icon: "las la-hand-pointer",
          title: "Choose Your Experience",
          desc: "Select what fits your mood — stay, celebration, or creative escape.",
        },
        {
          num: "03",
          icon: "las la-phone-alt",
          title: "Connect With Us",
          desc: "Reach out via call, WhatsApp, or Instagram to plan your visit.",
        },
        {
          num: "04",
          icon: "las la-star",
          title: "Arrive & Experience",
          desc: "Step into a calm, heritage space and enjoy a truly timeless experience.",
        },
      ],
    };
  },
});
</script>

<style scoped>
/* ── Heritage Story ── */
.story-images {
  position: relative;
  height: 520px;
}

.img-big {
  position: absolute;
  right: 0;
  top: 0;
  width: 80%;
  height: 85%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}
.img-big img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 6s ease;
}
.img-big:hover img {
  transform: scale(1.05);
}
.img-big-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(201, 169, 110, 0.1) 0%,
    transparent 60%
  );
}

.img-small {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50%;
  height: 55%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  border: 5px solid #fff;
  transition: transform 0.4s ease;
}
.img-small:hover {
  transform: scale(1.02);
}
.img-small img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.story-badge {
  position: absolute;
  top: 20px;
  left: 20px;
  background: linear-gradient(135deg, #c9a96e, #a07840);
  color: #fff;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 30px rgba(201, 169, 110, 0.6);
  z-index: 3;
  animation: badgePulse 3s ease-in-out infinite;
}
@keyframes badgePulse {
  0%,
  100% {
    box-shadow: 0 8px 25px rgba(201, 169, 110, 0.4);
  }
  50% {
    box-shadow: 0 8px 45px rgba(201, 169, 110, 0.8);
  }
}
.badge-num {
  font-size: 20px;
  font-weight: 800;
  line-height: 1;
  font-family: "Playfair Display", serif;
}
.badge-text {
  font-size: 9px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  line-height: 1.3;
}

/* Decorative dots */
.deco-dots {
  position: absolute;
  right: -20px;
  bottom: 60px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  z-index: 0;
}
.dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #c9a96e;
  opacity: 0.35;
}

/* Corner frame */
.corner-frame {
  position: absolute;
  bottom: -10px;
  right: -10px;
  width: 60%;
  height: 60%;
  border-right: 2px solid rgba(201, 169, 110, 0.3);
  border-bottom: 2px solid rgba(201, 169, 110, 0.3);
  border-radius: 0 0 12px 0;
  pointer-events: none;
}

.story-text {
  font-size: 16px;
  line-height: 1.85;
  color: #5a4030;
  margin-bottom: 16px;
}

.story-highlights {
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.highlight-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px 20px;
  background: #f8f5f0;
  border-radius: 10px;
  border-left: 3px solid #c9a96e;
  transition: all 0.3s ease;
}
.highlight-item:hover {
  background: rgba(201, 169, 110, 0.08);
  transform: translateX(5px);
}
.highlight-icon {
  width: 42px;
  height: 42px;
  background: rgba(201, 169, 110, 0.15);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.highlight-icon i {
  font-size: 20px;
  color: #c9a96e;
}
.highlight-item div {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.highlight-item strong {
  color: #1a0f08;
  font-weight: 700;
  font-size: 15px;
}
.highlight-item span {
  color: #6c757d;
  font-size: 14px;
}

/* ── Stats Section ── */
.stats-section {
  position: relative;
  padding: 80px 0;
  overflow: hidden;
}
.stats-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}
.stats-section::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(26, 15, 8, 0.85);
  z-index: 1;
}
.stats-overlay {
  display: none;
}
.stats-content {
  position: relative;
  z-index: 2;
}
.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 20px;
  border-right: 1px solid rgba(201, 169, 110, 0.2);
}
.stat-item:last-child {
  border-right: none;
}
.stat-num {
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 800;
  color: #c9a96e;
  font-family: "Playfair Display", serif;
  line-height: 1;
}
.stat-label {
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #c4b49a;
  font-weight: 500;
}

/* ── Values ── */
.value-card {
  background: #fff;
  padding: 40px 28px;
  border-radius: 12px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.06);
  border-top: 3px solid #c9a96e;
  transition: all 0.4s ease;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.value-card::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background: #c9a96e;
  transition: width 0.4s ease;
}
.value-card:hover::before {
  width: 100%;
}
.value-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(201, 169, 110, 0.2);
}
.value-icon {
  width: 64px;
  height: 64px;
  background: rgba(201, 169, 110, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  transition: all 0.4s ease;
}
.value-card:hover .value-icon {
  background: #c9a96e;
}
.value-icon i {
  font-size: 28px;
  color: #c9a96e;
  transition: color 0.4s ease;
}
.value-card:hover .value-icon i {
  color: #fff;
}
.value-card h4 {
  color: #1a0f08;
  font-weight: 700;
  font-size: 19px;
  margin-bottom: 12px;
}
.value-card p {
  color: #6c757d;
  font-size: 15px;
  line-height: 1.75;
  margin: 0;
}

/* ── Work Process ── */
.work-process-card {
  background: #fff;
  padding: 40px 24px 32px;
  border-radius: 12px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.07);
  position: relative;
  transition: all 0.4s ease;
  border-bottom: 3px solid transparent;
}
.work-process-card:hover {
  transform: translateY(-8px);
  border-bottom-color: #c9a96e;
  box-shadow: 0 20px 50px rgba(201, 169, 110, 0.15);
}
.process-num {
  font-size: 48px;
  font-weight: 800;
  color: rgba(201, 169, 110, 0.15);
  font-family: "Playfair Display", serif;
  line-height: 1;
  margin-bottom: 12px;
  transition: color 0.4s ease;
}
.work-process-card:hover .process-num {
  color: rgba(201, 169, 110, 0.35);
}
.process-icon {
  width: 60px;
  height: 60px;
  background: rgba(201, 169, 110, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  transition: all 0.4s ease;
}
.work-process-card:hover .process-icon {
  background: #c9a96e;
}
.process-icon i {
  font-size: 24px;
  color: #c9a96e;
  transition: color 0.4s ease;
}
.work-process-card:hover .process-icon i {
  color: #fff;
}
.work-process-card h4 {
  color: #1a0f08;
  font-weight: 700;
  font-size: 17px;
  margin-bottom: 10px;
}
.work-process-card p {
  color: #6c757d;
  font-size: 14px;
  line-height: 1.7;
}

/* Connector line between steps */
.connector {
  display: none;
}
@media (min-width: 992px) {
  .connector {
    display: block;
    position: absolute;
    top: 80px;
    right: -30px;
    width: 60px;
    height: 1px;
    background: linear-gradient(to right, #c9a96e, transparent);
    z-index: 1;
  }
}

/* ── CTA Section ── */
.cta-section {
  position: relative;
  padding: 130px 0;
  overflow: hidden;
  text-align: center;
}
.cta-bg-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}
.cta-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(26, 15, 8, 0.9) 0%,
    rgba(42, 26, 14, 0.85) 100%
  );
  z-index: 1;
}
.cta-content {
  position: relative;
  z-index: 2;
}
.cta-inner {
  max-width: 680px;
  margin: 0 auto;
}
.cta-content h6 {
  font-size: 12px;
  letter-spacing: 4px;
  margin-bottom: 16px;
  display: block;
}
.cta-content h2 {
  font-size: clamp(32px, 4vw, 52px);
  font-weight: 800;
  color: #f0e6d3;
  font-family: "Playfair Display", serif;
  line-height: 1.2;
  margin-bottom: 20px;
}
.cta-divider {
  width: 60px;
  height: 2px;
  background: #c9a96e;
  margin: 20px auto;
}
.cta-content p {
  color: #c4b49a;
  font-size: 17px;
  line-height: 1.8;
  margin-bottom: 36px;
}
.cta-btns {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
}

/* ── Responsive ── */
@media (max-width: 991px) {
  .story-images {
    height: 400px;
    margin-bottom: 50px;
  }
  .img-big {
    width: 85%;
  }
  .story-badge {
    width: 70px;
    height: 70px;
  }
  .badge-num {
    font-size: 16px;
  }
  .deco-dots {
    display: none;
  }
  .stat-item {
    border-right: none;
    border-bottom: 1px solid rgba(201, 169, 110, 0.2);
  }
  .stat-item:last-child {
    border-bottom: none;
  }
}

@media (max-width: 575px) {
  .story-images {
    height: 320px;
  }
  .img-small {
    width: 55%;
  }
  .corner-frame {
    display: none;
  }
  .cta-section {
    padding: 80px 0;
  }
  .cta-btns {
    flex-direction: column;
    align-items: center;
  }
}
</style>
