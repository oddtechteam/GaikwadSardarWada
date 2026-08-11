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
        <button class="mfp-close" style="top: -23px" data-bs-dismiss="modal" aria-label="Close">
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

  <section class="dz-content-bx style-5 content-inner-1">
    <div class="dz-content-inner">
      <div class="container">
        <div class="section-head style-2 text-center">
          <h2 class="title text-white">Let’s Show For A <br />Cool Project</h2>
        </div>

        <div class="row spno">
          <div class="col-lg-12">
            <div class="video-bx content-media style-3">
              <!-- <img src="@/assets/images/video/pic3.jpg" alt="" /> -->
              <div class="video-btn aos-item">
                <RouterLink
                  to="?"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  class="popup-youtube"
                  ><i class="fas fa-play"></i
                ></RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'model_vdeo',
  setup() {
    return {}
  }
})
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
</style>
