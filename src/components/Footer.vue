<template>
  <footer class="site-footer style-1" id="footer">
    <div class="container">
      <div class="row">

        <!-- LEFT IMAGE -->
        <div class="col-lg-5 aos-item">
          <div class="footer-bg" :style="`background-image: url(${footerBg})`"></div>
        </div>

        <!-- RIGHT CONTENT -->
        <div class="col-lg-7">
          <div class="footer-top">
            <div class="row">

              <!-- LOGO -->
              <div class="col-md-12 aos-item">
                <div class="footer-logo logo-light">
                  <RouterLink to="/">
                    <img
                      class="header_logo2"
                      src="@/assets/images/logo.png"
                      alt="Gaikwad Sardar Wada"
                    />
                  </RouterLink>
                </div>
              </div>

              <!-- LINKS -->
              <div class="col-md-5 col-sm-6 aos-item">
                <div class="widget widget_services">
                  <h4 class="footer-title">Explore</h4>
                  <ul>
                    <li><RouterLink to="/">Home</RouterLink></li>
                    <li><RouterLink to="/about-us">About</RouterLink></li>
                    <li><RouterLink to="/services">Experiences</RouterLink></li>
                    <li><RouterLink to="/portfolio">Gallery</RouterLink></li>
                    <li><RouterLink to="/contact-us">Contact</RouterLink></li>
                  </ul>
                </div>
              </div>

              <!-- ABOUT -->
              <div class="col-md-7 col-sm-6 aos-item">
                <div class="widget widget_about">
                  <h4 class="footer-title">About</h4>
                  <p>
                    Gaikwad Sardar Wada is a 350+ year old heritage space near Rajgurunagar, Pune.
                    A place to stay, celebrate, create, and experience timeless architecture,
                    calm surroundings, and authentic Maharashtrian culture.
                  </p>

                  <!-- SOCIAL -->
                  <ul class="social-list style-1">
                    <li>
                      <a href="#" target="_blank">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://wa.me/91XXXXXXXXXX" target="_blank">
                        <i class="lab la-whatsapp"></i>
                      </a>
                    </li>
                  </ul>

                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- FOOTER BOTTOM -->
    <div class="footer-bottom">
      <div class="container">
        <div class="row align-items-center">

          <div class="col-md-6 text-center text-md-start">
            <span class="copyright-text">
              © {{ new Date().getFullYear() }} Gaikwad Sardar Wada. All rights reserved.
            </span>
          </div>

          <div class="col-md-6 text-center text-md-end">
            <ul class="footer-link d-inline-block">
              <li><RouterLink to="/contact-us">Contact</RouterLink></li>
              <li><RouterLink to="/services">Experiences</RouterLink></li>
              <li><RouterLink to="/portfolio">Gallery</RouterLink></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import footerBg from '@/assets/images/footer-bg.jpg'

export default defineComponent({
  name: 'footer_',
  setup() {
    return { footerBg }
  }
})
</script>

<style scoped>
/* Main footer background */
:deep(.site-footer.style-1) {
  background-color: #1a0f08 !important;
}

/* Footer top padding */
:deep(.site-footer.style-1 .footer-top) {
  padding: 60px 40px 40px !important;
}

/* Logo size */
:deep(.footer-logo img) {
  width: 200px !important;
  margin-bottom: 10px;
}

/* Footer titles */
:deep(.site-footer .footer-title) {
  color: #c9a96e !important;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding-bottom: 12px;
  margin-bottom: 20px;
}

/* Gold underline on title */
:deep(.site-footer .footer-title:after) {
  background-color: #c9a96e !important;
  width: 40px;
  height: 2px;
}

/* Nav links */
:deep(.site-footer .widget_services ul li a) {
  color: #c4b49a !important;
  font-size: 15px;
  font-weight: 400;
  padding: 5px 0 5px 18px;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
}

:deep(.site-footer .widget_services ul li a:before) {
  content: '→';
  color: #c9a96e !important;
  font-size: 12px;
  left: 0;
}

:deep(.site-footer .widget_services ul li a:hover) {
  color: #c9a96e !important;
  padding-left: 24px !important;
}

/* About text */
:deep(.site-footer .widget_about p) {
  color: #c4b49a !important;
  font-size: 15px;
  line-height: 1.9;
}

/* Social icons */
:deep(.site-footer .social-list.style-1 li a) {
  background-color: rgba(201, 169, 110, 0.15) !important;
  border: 1px solid rgba(201, 169, 110, 0.3);
  color: #c9a96e !important;
  transition: all 0.3s ease;
}

:deep(.site-footer .social-list.style-1 li a:hover) {
  background-color: #c9a96e !important;
  color: #fff !important;
  border-color: #c9a96e !important;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(201, 169, 110, 0.4);
}

/* Footer bottom bar */
:deep(.site-footer .footer-bottom) {
  background-color: #0f0804 !important;
  padding: 18px 0 !important;
  border-top: 1px solid rgba(201, 169, 110, 0.2) !important;
}

/* Copyright text */
:deep(.site-footer .footer-bottom .copyright-text) {
  color: #8a7a6a !important;
  font-size: 14px;
}

:deep(.site-footer .footer-bottom .copyright-text a) {
  color: #c9a96e !important;
}

/* Footer bottom links */
:deep(.site-footer .footer-link li a) {
  color: #8a7a6a !important;
  font-size: 14px;
  transition: color 0.3s;
}

:deep(.site-footer .footer-link li a:hover) {
  color: #c9a96e !important;
}

:deep(.site-footer .footer-link li:before) {
  background-color: #c9a96e !important;
}

/* Left image area */
:deep(.footer-bg) {
  border-radius: 0 20px 20px 0;
  opacity: 0.85;
}
</style>