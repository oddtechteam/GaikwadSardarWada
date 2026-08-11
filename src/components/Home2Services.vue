<template>
  <section class="exp-section" ref="sectionEl">
    <div class="container">
      <div class="exp-head">
        <div class="exp-eyebrow">
          <span class="exp-eyebrow-line"></span>
          <span class="exp-eyebrow-label">Experiences</span>
        </div>
        <div class="exp-head-row">
          <h2 class="exp-title">What You Can<br />Do Here</h2>
          <p class="exp-desc">
            From peaceful stays to curated celebrations, creative shoots, and
            authentic dining, Gaikwad Sardar Wada offers experiences that feel
            personal, rooted, and timeless.
          </p>
        </div>
      </div>

      <div class="exp-grid">
        <div
          class="exp-card"
          :class="{ visible: revealed }"
          v-for="(item, ind) in services"
          :key="ind"
          :style="`transition-delay: ${ind * 90}ms`"
        >
          <div class="exp-card-media" :style="`background-image:url(${item.img})`"></div>
          <div class="exp-card-scrim"></div>

          <div class="exp-card-icon">
            <i :class="item.icon"></i>
          </div>

          <div class="exp-card-body">
            <h4 class="exp-card-title">{{ item.title }} {{ item.text }}</h4>
            <p class="exp-card-desc">{{ item.desc }}</p>

            <RouterLink to="/contact-us" class="exp-card-btn">
              <span>Enquire</span>
              <i class="las la-arrow-right"></i>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Newsletter (kept as is, just text improved) -->
  <section
    class="py-5 bg-secondary"
    :style="`background-image: url(${bg2_1}); background-position: center`"
  >
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 aos-item">
          <div class="section-head style-1 mb-3 mb-lg-0">
            <h6 class="sub-title text-primary">STAY CONNECTED</h6>
            <h2 class="title text-white">Get Updates & Offers</h2>
          </div>
        </div>

        <div class="col-lg-6 aos-item">
          <form
            class="dzSubscribe dz-subscription mt-3"
            method="post"
            ref="form"
            @submit.prevent="sendEmail"
          >
            <div class="dzSubscribeMsg Msg dz-subscription-msg"></div>

            <div class="input-group">
              <input
                name="dzEmail"
                required
                class="form-control"
                placeholder="Enter your email..."
                type="email"
                v-model="message"
              />

              <button
                type="submit"
                @click="notify"
                class="btn btn-primary btn-rounded"
              >
                <span>Subscribe</span>
                <i class="m-l10 fas fa-plus scale08"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from "vue";
import services_pic1 from "@/assets/images/wada/gallery/stay-room.webp";
import services_pic2 from "@/assets/images/wada/gallery/courtyard-night.webp";
import services_pic3 from "@/assets/images/wada/gallery/heritage-varanda.webp";
import services_pic4 from "@/assets/images/wada/gallery/dining-setup.webp";
import services_pic5 from "@/assets/images/wada/gallery/haldi-ceremony-1.webp";
import services_pic6 from "@/assets/images/wada/gallery/lounge-interior.webp";

import bg2_1 from "@/assets/images/background/bg2-1.png";
import emailjs from "@emailjs/browser";
import { toast } from "vue3-toastify";

export default defineComponent({
  setup() {
    const message = ref("");
    const form = ref<HTMLFormElement | null>(null);
    const sectionEl = ref<HTMLElement | null>(null);
    const revealed = ref(false);
    let observer: IntersectionObserver | null = null;

    onMounted(() => {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            revealed.value = true;
            observer?.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      if (sectionEl.value) observer.observe(sectionEl.value);
    });

    onBeforeUnmount(() => {
      observer?.disconnect();
    });

    const notify = () => {
      if (message.value) {
        toast("Successfull Send", {
          autoClose: 1000,
        });
      } else {
        toast("Enter Email", {
          autoClose: 1000,
        });
      }
    };
    return {
      services: [
        {
          icon: "fas fa-bed",
          img: services_pic1,
          title: "Heritage",
          text: "Stay",
          desc: "Stay inside a 350+ year old wada and experience calm, slow living surrounded by tradition.",
        },
        {
          icon: "fas fa-glass-cheers",
          img: services_pic2,
          title: "Private",
          text: "Celebrations",
          desc: "Celebrate birthdays, engagements, and gatherings in a warm and intimate heritage setting.",
        },
        {
          icon: "fas fa-camera",
          img: services_pic3,
          title: "Photoshoots",
          text: "& Reels",
          desc: "Perfect natural light, textures, and architecture for stunning photos and creative content.",
        },
        {
          icon: "fas fa-utensils",
          img: services_pic4,
          title: "Authentic",
          text: "Dining",
          desc: "Enjoy traditional Maharashtrian meals cooked fresh in a homely setting.",
        },
        {
          icon: "fas fa-ring",
          img: services_pic5,
          title: "Heritage",
          text: "Weddings",
          desc: "Host haldi, mehendi, and intimate weddings in a timeless traditional space.",
        },
        {
          icon: "fas fa-laptop-house",
          img: services_pic6,
          title: "Workation",
          text: "& Retreats",
          desc: "Work, relax, and reconnect in a peaceful environment away from city noise.",
        },
      ],
      bg2_1,
      form,
      notify,
      message,
      sectionEl,
      revealed,
    };
  },

  methods: {
    async sendEmail() {
      const form = this.$refs.form as HTMLFormElement;
      await emailjs
        .sendForm("emailId", "template_0byuv32", form, "qUDIPykc776NYHv4m")
        .then(
          () => {
            console.log("SUCCESS! OK");
            this.notify;
          },
          () => {
            console.log("FAILED...");
          },
        );
      this.message = "";
    },
  },
});
</script>

<style scoped>
.exp-section {
  padding: 110px 0 90px;
  background: #fdfbf7;
  overflow: hidden;
}

.exp-head {
  margin-bottom: 56px;
}

.exp-eyebrow {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 18px;
}
.exp-eyebrow-line {
  width: 44px;
  height: 1px;
  background: #c9a96e;
}
.exp-eyebrow-label {
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  letter-spacing: 4px;
  text-transform: uppercase;
  font-weight: 600;
  color: #c9a96e;
}

.exp-head-row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 60px;
}

.exp-title {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: clamp(32px, 3.6vw, 46px);
  line-height: 1.15;
  color: #2a1a0e;
  margin: 0;
  flex-shrink: 0;
}

.exp-desc {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
  line-height: 1.8;
  color: #5a4030;
  max-width: 420px;
  margin: 0 0 6px;
}

.exp-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.exp-card {
  position: relative;
  height: 420px;
  border-radius: 6px;
  overflow: hidden;
  isolation: isolate;
  opacity: 0;
  transform: translateY(36px);
  transition: opacity 0.7s ease, transform 0.7s ease, box-shadow 0.4s ease;
}
.exp-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.exp-card-media {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transform: scale(1.08);
  transition: transform 0.7s ease;
  z-index: 0;
}
.exp-card:hover .exp-card-media {
  transform: scale(1.16);
}

.exp-card-scrim {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(180deg, rgba(26, 15, 8, 0.15) 0%, rgba(26, 15, 8, 0.55) 55%, rgba(26, 15, 8, 0.92) 100%);
  transition: background 0.4s ease;
}
.exp-card:hover .exp-card-scrim {
  background: linear-gradient(180deg, rgba(26, 15, 8, 0.35) 0%, rgba(26, 15, 8, 0.65) 45%, rgba(26, 15, 8, 0.95) 100%);
}

.exp-card-icon {
  position: absolute;
  top: 26px;
  left: 26px;
  z-index: 2;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(240, 230, 211, 0.14);
  border: 1px solid rgba(240, 230, 211, 0.4);
  backdrop-filter: blur(4px);
  color: #f0e6d3;
  font-size: 18px;
  transition: all 0.4s ease;
}
.exp-card:hover .exp-card-icon {
  background: #c9a96e;
  border-color: #c9a96e;
  color: #1a0f08;
  transform: scale(1.08);
}

.exp-card-body {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  padding: 26px 26px 30px;
}

.exp-card-title {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.25;
  color: #f7f0e3;
  margin: 0 0 10px;
}

.exp-card-desc {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 14px;
  line-height: 1.7;
  color: rgba(247, 240, 227, 0.8);
  margin: 0 0 16px;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.5s ease, opacity 0.4s ease, margin 0.4s ease;
}
.exp-card:hover .exp-card-desc {
  max-height: 100px;
  opacity: 1;
}

.exp-card-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #f0e6d3;
  text-decoration: none;
  padding-bottom: 4px;
  border-bottom: 1px solid rgba(240, 230, 211, 0.4);
  transition: all 0.3s ease;
}
.exp-card-btn i {
  transition: transform 0.3s ease;
  font-size: 12px;
}
.exp-card-btn:hover {
  color: #c9a96e;
  border-color: #c9a96e;
}
.exp-card-btn:hover i {
  transform: translateX(4px);
}

@media (max-width: 991px) {
  .exp-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .exp-head-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
  }
}

@media (max-width: 767px) {
  .exp-section {
    padding: 70px 0 60px;
  }
  .exp-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .exp-card {
    height: 360px;
  }
  .exp-card-desc {
    max-height: 100px;
    opacity: 1;
  }
}
</style>
