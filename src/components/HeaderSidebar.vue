<template>
  <div :class="`contact-sidebar ${show ? ' active' : ''}`">
    <div class="contact-box">
      <div class="logo-contact logo-dark">
        <RouterLink to="?"
          ><img class="header_logo" src="@/assets/images/logo-g.png" alt=""
        /></RouterLink>
      </div>
      <div class="m-b50 contact-text">
        <div class="dz-title">
          <h4>About Gaikwad Sardar Wada</h4>
          <div class="dz-separator style-1 text-primary mb-0"></div>
        </div>

        <p>
          A 350+ year old heritage wada near Rajgurunagar, Pune. With sunlit
          courtyards, wooden pillars, and timeless architecture, this space
          offers peaceful stays, intimate celebrations, and authentic
          experiences rooted in tradition.
        </p>
        <RouterLink to="/about-us" class="btn btn-primary btn-sm btn-rounded"
          >READ MORE</RouterLink
        >
      </div>
      <div class="dz-title">
        <h4>Gallery</h4>
        <div class="dz-separator style-1 text-primary mb-0"></div>
      </div>
      <div class="widget bg-white widget_gallery" style="z-index: 99999">
        <Lightgallery
          :settings="{ speed: 500, plugins: plugins, selector: '.lightimg' }"
          class="lightgallery m-b0"
        >
          <li v-for="({ img }, ind) in GalleryBlog" :key="ind">
            <div class="dlab-post-thum dlab-img-effect">
              <span
                :data-src="img"
                class="lightimg"
                title="Image 1 Title will come here"
              >
                <img :src="img" alt="" />
              </span>
            </div>
          </li>
        </Lightgallery>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import Lightgallery from "lightgallery/vue";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import service_pic1 from "@/assets/images/services/pic1.jpg";
import service_pic2 from "@/assets/images/services/pic2.jpg";
import service_pic3 from "@/assets/images/services/pic3.jpg";
import service_pic4 from "@/assets/images/services/pic4.jpg";
import service_pic5 from "@/assets/images/services/pic5.jpg";
import service_pic6 from "@/assets/images/services/pic6.jpg";

export default defineComponent({
  props: {
    show: {
      type: Boolean as PropType<boolean>,
      required: true,
    },
  },
  components: { Lightgallery },
  data: () => ({
    plugins: [lgThumbnail, lgZoom],
  }),
  setup() {
    return {
      GalleryBlog: [
        { img: service_pic1 },
        { img: service_pic2 },
        { img: service_pic3 },
        { img: service_pic4 },
        { img: service_pic5 },
        { img: service_pic6 },
      ],
    };
  },
});
</script>
