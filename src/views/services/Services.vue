<template>
  <div
    class="modal fade"
    id="exampleModalToggle"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel"
    tabindex="-1"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <button
          class="mfp-close"
          style="top: -23px"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <i class="ti-close"></i>
        </button>
        <iframe
          height="100%"
          src="https://www.youtube.com/embed/sNCv3_NTNtU"
          frameborder="0"
          allowfullscreen
          allow="autoplay"
        ></iframe>
      </div>
    </div>
  </div>

  <div class="page-content bg-white">
    <CommonBanner :img="bnr6" title="Experiences" text="Experiences" />

    <section class="svc-section">
      <div class="container">
        <div class="svc-head">
          <div class="svc-eyebrow">
            <span class="svc-eyebrow-line"></span>
            <span>What We Offer</span>
          </div>
          <h2 class="svc-heading">Every Experience, Rooted in Heritage</h2>
        </div>

        <div
          class="svc-row"
          :class="{ visible: revealed[ind], reverse: ind % 2 === 1 }"
          v-for="(item, ind) in servicesArr"
          :key="ind"
          :ref="(el) => setRowRef(el, ind)"
        >
          <div class="svc-row-media">
            <div class="svc-row-img" :style="`background-image:url(${item.img})`"></div>
            <span class="svc-row-index">{{ String(ind + 1).padStart(2, '0') }}</span>
          </div>

          <div class="svc-row-body">
            <div class="svc-row-icon">
              <i :class="item.icon"></i>
            </div>
            <h3 class="svc-row-title">{{ item.title }}</h3>
            <p class="svc-row-desc">{{ item.desc }}</p>
            <RouterLink to="/contact-us" class="svc-row-link">
              <span>Enquire Now</span>
              <i class="fas fa-arrow-right"></i>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
    <section class="dz-content-bx style-3">
      <CounterVideo />
    </section>
    <!-- <section
      class="content-inner-2"
      :style="` background-image: url(${bg2});
        background-position: right bottom;
        background-size: 100%;
        background-repeat: no-repeat;`"
    >
      <Testimonial />
    </section> -->
    <!-- <section
      class="content-inner-2"
      :style="`background-image: url(${bg1});
            background-position: left top;
            background-size: 100%;
            background-repeat: no-repeat;`"
    >
      <div class="container-fluid">
        <Testimonial2 />
      </div>
    </section> -->
    <HomeFaq />
    <!-- <section class="section-full dz-content-bx style-2 text-white">
      <div
        class="dz-content-inner bg-dark"
        :style="`background-image: url(${bg2_1}); background-position: center`"
      >
        <OurStrategy />
      </div>
    </section> -->
    <Brands />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, onBeforeUnmount } from "vue";
import CommonBanner from "@/elements/CommonBanner.vue";
import Brands from "@/elements/Brands.vue";
import CounterVideo from "@/components/CounterVideo.vue";
import Testimonial from "@/components/Testimonial.vue";
import Testimonial2 from "@/components/Testimonial2.vue";
import HomeFaq from "@/components/HomeFaq.vue";
import OurStrategy from "@/components/OurStrategy.vue";
import bnr6 from "@/assets/images/banner/bnr6.jpg";
import bg2 from "@/assets/images/background/bg2.png";
import bg1 from "@/assets/images/background/bg1.png";
import bg2_1 from "@/assets/images/background/bg2-1.png";
import { RouterLink } from "vue-router";

import svcStay from "@/assets/images/wada/gallery/stay-room.webp";
import svcCelebration from "@/assets/images/wada/gallery/courtyard-night.webp";
import svcPhotoshoot from "@/assets/images/wada/gallery/heritage-varanda.webp";
import svcDining from "@/assets/images/wada/gallery/dining-setup.webp";
import svcWedding from "@/assets/images/wada/gallery/haldi-ceremony-1.webp";
import svcWorkation from "@/assets/images/wada/gallery/lounge-interior.webp";

export default defineComponent({
  name: "services_",
  components: {
    CommonBanner,
    CounterVideo,
    Testimonial,
    Testimonial2,
    HomeFaq,
    OurStrategy,
    // Brands,
    RouterLink,
  },
  setup() {
    const revealed = reactive<Record<number, boolean>>({});
    const rowEls: Record<number, Element> = {};
    let observer: IntersectionObserver | null = null;

    const setRowRef = (el: unknown, ind: number) => {
      if (el) rowEls[ind] = el as Element;
    };

    onMounted(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const ind = Object.keys(rowEls).find(
                (k) => rowEls[Number(k)] === entry.target
              );
              if (ind !== undefined) revealed[Number(ind)] = true;
            }
          });
        },
        { threshold: 0.2 }
      );
      Object.values(rowEls).forEach((el) => observer?.observe(el));
    });

    onBeforeUnmount(() => observer?.disconnect());

    return {
      bnr6,
      bg2,
      bg1,
      bg2_1,
      revealed,
      setRowRef,
      servicesArr: [
        {
          icon: "flaticon-bed",
          img: svcStay,
          title: "Heritage Stay Experience",
          desc: "Stay inside a 350+ year old wada with peaceful surroundings and traditional charm.",
        },
        {
          icon: "flaticon-party",
          img: svcCelebration,
          title: "Private Celebrations",
          desc: "Host birthdays, anniversaries, and gatherings in an intimate heritage setting.",
        },
        {
          icon: "flaticon-camera",
          img: svcPhotoshoot,
          title: "Photoshoots & Reels",
          desc: "Perfect natural light, textures, and architecture for creative shoots and content.",
        },
        {
          icon: "flaticon-restaurant",
          img: svcDining,
          title: "Authentic Dining Experience",
          desc: "Enjoy traditional Maharashtrian veg and non-veg meals prepared in-house.",
        },
        {
          icon: "flaticon-wedding",
          img: svcWedding,
          title: "Heritage Wedding Setup",
          desc: "Celebrate haldi, mehendi, and intimate weddings in a timeless traditional space.",
        },
        {
          icon: "flaticon-work",
          img: svcWorkation,
          title: "Workation & Creative Retreats",
          desc: "A calm and distraction-free environment for work, writing, and creative sessions.",
        },
      ],
    };
  },
});
</script>
<style scoped>
.modal-content {
  height: 390px;
  z-index: 99999;
}

@media screen and (max-width: 991px) {
  .modal-content {
    height: 282px;
  }
}
@media screen and (max-width: 575px) {
  .modal-content {
    height: 30vmax;
  }
}
@media screen and (max-width: 400px) {
  .modal-content {
    height: 23vmax;
  }
}
.mfp-close {
  border: none;
  outline: none;
  position: absolute;
  right: 0px;
  background-color: transparent;
  color: white;
}

.modal-backdrop {
  display: none !important;
}

/* ── Services section ── */
.svc-section {
  padding: 110px 0;
  background: #fdfbf7;
  overflow: hidden;
}

.svc-head {
  max-width: 640px;
  margin: 0 auto 80px;
  text-align: center;
}
.svc-eyebrow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-bottom: 18px;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  letter-spacing: 4px;
  text-transform: uppercase;
  font-weight: 600;
  color: #c9a96e;
}
.svc-eyebrow-line {
  width: 36px;
  height: 1px;
  background: #c9a96e;
}
.svc-heading {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: clamp(28px, 3.4vw, 42px);
  line-height: 1.2;
  color: #2a1a0e;
  margin: 0;
}

.svc-row {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;
  gap: 70px;
  margin-bottom: 100px;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.svc-row.visible {
  opacity: 1;
  transform: translateY(0);
}
.svc-row:last-child {
  margin-bottom: 0;
}
.svc-row.reverse {
  direction: rtl;
}
.svc-row.reverse > * {
  direction: ltr;
}

.svc-row-media {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  height: 420px;
  isolation: isolate;
}
.svc-row-img {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transform: scale(1.01);
  transition: transform 0.8s ease;
}
.svc-row-media:hover .svc-row-img {
  transform: scale(1.08);
}
.svc-row-index {
  position: absolute;
  top: 24px;
  left: 24px;
  z-index: 1;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 15px;
  color: #f0e6d3;
  background: rgba(26, 15, 8, 0.45);
  border: 1px solid rgba(240, 230, 211, 0.35);
  backdrop-filter: blur(4px);
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.svc-row-body {
  padding: 0 10px;
}
.svc-row-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(201, 169, 110, 0.12);
  border: 1px solid rgba(201, 169, 110, 0.35);
  color: #c9a96e;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  margin-bottom: 24px;
  transition: all 0.35s ease;
}
.svc-row:hover .svc-row-icon {
  background: #c9a96e;
  color: #1a0f08;
  transform: scale(1.08) rotate(-6deg);
}

.svc-row-title {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: clamp(24px, 2.4vw, 32px);
  color: #2a1a0e;
  margin: 0 0 16px;
  line-height: 1.25;
}
.svc-row-desc {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
  line-height: 1.85;
  color: #5a4030;
  max-width: 440px;
  margin: 0 0 28px;
}
.svc-row-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #2a1a0e;
  text-decoration: none;
  padding-bottom: 6px;
  border-bottom: 1px solid rgba(42, 26, 14, 0.25);
  transition: all 0.3s ease;
}
.svc-row-link i {
  transition: transform 0.3s ease;
  font-size: 12px;
}
.svc-row-link:hover {
  color: #c9a96e;
  border-color: #c9a96e;
}
.svc-row-link:hover i {
  transform: translateX(5px);
}

@media (max-width: 991px) {
  .svc-row {
    grid-template-columns: 1fr;
    gap: 30px;
    margin-bottom: 60px;
  }
  .svc-row.reverse {
    direction: ltr;
  }
  .svc-row-media {
    height: 320px;
  }
  .svc-head {
    margin-bottom: 56px;
  }
}

@media (max-width: 480px) {
  .svc-section {
    padding: 70px 0;
  }
  .svc-row-media {
    height: 260px;
  }
  .svc-row-desc {
    font-size: 15px;
  }
}
</style>
