<template>
  <Swiper
    class="swiper-container blog-swiper"
    :slides-per-view="3"
    :speed="1500"
    :loop="true"
    :breakpoints="{
      991: { slidesPerView: 3 },
      691: { slidesPerView: 2 },
      240: { slidesPerView: 1 }
    }"
  >
    <SwiperSlide class="swiper-slide" v-for="({ img, img2, title }, ind) in ourBlog" :key="ind">
      <div class="dz-card blog-grid style-3 aos-item h-100 rounded-0">
        <div class="dz-media">
          <RouterLink to="/blog-details"><img :src="img" alt="" /></RouterLink>
        </div>
        <div class="dz-info">
          <div class="dz-meta">
            <ul>
              <li class="post-author d-flex align-items-center">
                <img :src="img2" alt="" /><span class="text-dark m-l10 m-r5">By</span>
                <span class="text-primary">Alex </span>
              </li>
              <li class="post-comments">
                <span class="m-r10">
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.31947 6.55334H14.6874"
                      stroke="#00ADEF"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M11.3316 9.48205H11.3385"
                      stroke="#00ADEF"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M8.00346 9.48205H8.0104"
                      stroke="#00ADEF"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M4.66842 9.48205H4.67537"
                      stroke="#00ADEF"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M11.3316 12.3971H11.3385"
                      stroke="#00ADEF"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M8.00346 12.3971H8.0104"
                      stroke="#00ADEF"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M4.66842 12.3971H4.67537"
                      stroke="#00ADEF"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M11.0328 1V3.46809"
                      stroke="#00ADEF"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M4.97412 1V3.46809"
                      stroke="#00ADEF"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.1787 2.18457H4.82822C2.6257 2.18457 1.25 3.41152 1.25 5.66684V12.4541C1.25 14.7449 2.6257 16.0002 4.82822 16.0002H11.1718C13.3812 16.0002 14.75 14.7661 14.75 12.5108V5.66684C14.7569 3.41152 13.3882 2.18457 11.1787 2.18457Z"
                      stroke="#00ADEF"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  22 feb 2022
                </span>
                <span>
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.427 7.13818L10.0945 9.84796C9.46488 10.3475 8.57903 10.3475 7.94941 9.84796L4.58882 7.13818"
                      stroke="#00ADEF"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.6816 16.25C14.9627 16.2563 16.5 14.3822 16.5 12.0788V6.92751C16.5 4.62412 14.9627 2.75 12.6816 2.75H5.31835C3.03734 2.75 1.5 4.62412 1.5 6.92751V12.0788C1.5 14.3822 3.03734 16.2563 5.31835 16.25H12.6816Z"
                      stroke="#00ADEF"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  15
                </span>
              </li>
            </ul>
          </div>
          <h4 class="dz-title">
            <RouterLink to="/blog-details">{{ title }}</RouterLink>
          </h4>
          <p class="text">
            Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply
            dummy. Lorem Ipsum is simply dummy.
          </p>
          <div class="read-more">
            <RouterLink to="/blog-details" class="btn btn-primary btn-rounded btn-sm hover-icon">
              <span>Read More</span>
              <i class="fas fa-arrow-right"></i>
            </RouterLink>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import blog_pic4 from '@/assets/images/blog/blog-grid/pic4.jpg'
import blog_pic5 from '@/assets/images/blog/blog-grid/pic5.jpg'
import blog_pic6 from '@/assets/images/blog/blog-grid/pic6.jpg'
import latest_blog_pic1 from '@/assets/images/blog/latest-blog/pic1.png'
import latest_blog_pic2 from '@/assets/images/blog/latest-blog/pic2.png'

export default defineComponent({
  components: { Swiper, SwiperSlide },
  setup() {
    return {
      ourBlog: [
        { img: blog_pic4, img2: latest_blog_pic1, title: 'How to grow trees from seeds?' },
        { img: blog_pic5, img2: latest_blog_pic2, title: 'A New Way To Find Architecte?' },
        { img: blog_pic6, img2: latest_blog_pic1, title: 'Have You Got a Rubbish?' },
        { img: blog_pic5, img2: latest_blog_pic2, title: 'A New Way To Find Architecte?' }
      ]
    }
  }
})
</script>

<style scoped></style>
