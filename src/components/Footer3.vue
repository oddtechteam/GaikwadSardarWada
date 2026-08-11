<template>
  <footer class="site-footer style-2" id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <!-- CONTACT -->
          <div class="col-lg-3 col-12 aos-item">
            <div class="widget widget_about">
              <h4 class="footer-title">CONTACT</h4>
              <div class="widget_getintuch">
                <ul>
                  <li>
                    <i class="las la-map-marker-alt"></i>
                    Gulani, Rajgurunagar (Khed), Pune
                  </li>
                  <li>
                    <i class="las la-phone-volume"></i>
                    +91 7972194411
                  </li>
                  <li>
                    <i class="las la-envelope"></i>
                    gaikwadsardarwada@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- LINKS -->
          <div class="offset-lg-1 col-lg-2 col-sm-4 col-6 aos-item">
            <div class="widget widget_services">
              <h4 class="footer-title">EXPLORE</h4>
              <ul>
                <li><RouterLink to="/">Home</RouterLink></li>
                <li><RouterLink to="/about-us">About</RouterLink></li>
                <li><RouterLink to="/services">Experiences</RouterLink></li>
                <li><RouterLink to="/portfolio">Gallery</RouterLink></li>
                <li><RouterLink to="/contact-us">Contact</RouterLink></li>
              </ul>
            </div>
          </div>

          <!-- EXPERIENCES -->
          <div class="col-lg-3 col-sm-4 col-6 aos-item">
            <div class="widget widget_services">
              <h4 class="footer-title">EXPERIENCES</h4>
              <ul>
                <li><RouterLink to="/services">Heritage Stay</RouterLink></li>
                <li><RouterLink to="/services">Private Celebrations</RouterLink></li>
                <li><RouterLink to="/services">Photoshoots</RouterLink></li>
                <li><RouterLink to="/services">Dining Experience</RouterLink></li>
                <li><RouterLink to="/services">Wedding Events</RouterLink></li>
              </ul>
            </div>
          </div>

          <!-- QUICK LINKS -->
          <div class="col-lg-3 col-sm-4 col-6 aos-item">
            <div class="widget widget_services">
              <h4 class="footer-title">QUICK LINKS</h4>
              <ul>
                <li><RouterLink to="/portfolio">View Gallery</RouterLink></li>
                <li><RouterLink to="/contact-us">Book Now</RouterLink></li>
                <li><RouterLink to="/services">All Experiences</RouterLink></li>
                <li><RouterLink to="/about-us">Our Story</RouterLink></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
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

export default defineComponent({
  name: 'footer_',
  setup() {
    return {}
  }
})
</script>

<style scoped>
/* existing styles stay */
</style>

<style>
/* Global override - no scoped */
.site-footer.style-2 {
  background-color: #1a0f08 !important;
  background-image: none !important;
}

.site-footer.style-2::before,
.site-footer.style-2::after {
  background: #1a0f08 !important;
  background-image: none !important;
  opacity: 1 !important;
}

.site-footer.style-2 .footer-top {
  padding: 80px 0 40px !important;
  background-color: #1a0f08 !important;
}

.site-footer.style-2 .footer-bottom {
  background-color: #0f0804 !important;
}

.site-footer.style-2 .footer-title {
  color: #c9a96e !important;
  font-size: 14px !important;
  font-weight: 700 !important;
  letter-spacing: 3px !important;
}

.site-footer.style-2 .footer-title::after {
  background-color: #c9a96e !important;
}

.site-footer.style-2 .widget_getintuch ul li {
  color: #c4b49a !important;
}

.site-footer.style-2 .widget_getintuch ul li i {
  color: #c9a96e !important;
}

.site-footer.style-2 .widget_services ul li a {
  color: #c4b49a !important;
}

.site-footer.style-2 .widget_services ul li a:hover {
  color: #c9a96e !important;
}

.site-footer.style-2 .widget_services ul li a::before {
  content: none !important;
}

.site-footer.style-2 .footer-bottom .copyright-text {
  color: #8a7a6a !important;
}

.site-footer.style-2 .footer-link li a {
  color: #8a7a6a !important;
}

.site-footer.style-2 .footer-link li a:hover {
  color: #c9a96e !important;
}

.site-footer.style-2 .footer-link li::before {
  background-color: #c9a96e !important;
}
</style>
