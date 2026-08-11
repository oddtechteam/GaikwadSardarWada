<template>
  <div class="page-content bg-white">
    <CommonBanner :img="bnr1" title="Blog Grid" text="Our Blog" />
    <div class="content-inner">
      <div class="container">
        <div class="blog_grid_masonry" id="masonry">
          <div class="card-container">
            <div class="dz-card blog-grid style-1 m-b50 aos-item">
              <div class="dz-media">
                <RouterLink to="/blog-details"
                  ><img src="@/assets/images/blog/large/pic1.jpg" alt=""
                /></RouterLink>
              </div>
              <div class="dz-info">
                <div class="dz-meta">
                  <ul>
                    <li class="post-date">
                      <strong>26</strong>
                      <span>Apr</span>
                    </li>
                    <li class="post-category">
                      <RouterLink to="?" rel="category tag">Audio</RouterLink>
                    </li>
                    <li class="post-user">By <RouterLink to="?"> John Doe</RouterLink></li>
                  </ul>
                </div>
                <h3 class="dz-title">
                  <RouterLink to="/blog-details">Modern House Interior </RouterLink>
                </h3>
                <div class="dz-post-text text">
                  <p>
                    You can align your image to the left, right, or center with a caption, link and
                    alt text New Journey to the Mars in the Gutenberg editor, you can drag and drop
                    an.
                  </p>
                </div>
                <div class="read-more">
                  <RouterLink to="?" class="btn btn-primary btn-rounded btn-sm hover-icon">
                    <span>Read More </span>
                    <i class="fas fa-arrow-right"></i>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="dz-card blog-grid style-1 m-b50 post-video aos-item">
              <div class="dz-media">
                <RouterLink to="/blog-details">
                  <img src="@/assets/images/blog/large/pic3.jpg" alt="" />
                  <div class="post-video-icon fa fa-play"></div>
                </RouterLink>
              </div>
              <div class="dz-info">
                <div class="dz-meta">
                  <ul>
                    <li class="post-date">
                      <strong>26</strong>
                      <span>Apr</span>
                    </li>
                    <li class="post-category">
                      <RouterLink to="?" rel="category tag">Audio</RouterLink>
                    </li>
                    <li class="post-user">By<RouterLink to="?"> John Doe</RouterLink></li>
                  </ul>
                </div>
                <h3 class="dz-title">
                  <RouterLink to="/blog-details">Sample Hotel Art.</RouterLink>
                </h3>
                <div class="dz-post-text text">
                  <p>
                    You can align your image to the left, right, or center with a caption, link and
                    alt text New Journey to the Mars in the Gutenberg editor, you can drag and drop
                    an.
                  </p>
                </div>
                <div class="read-more">
                  <RouterLink to="?" class="btn btn-primary btn-rounded btn-sm hover-icon">
                    <span>Read More </span>
                    <i class="fas fa-arrow-right"></i>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>

          <div class="card-container">
            <div class="dz-card blog-grid style-1 m-b50 aos-item">
              <div class="dz-info">
                <div class="dz-meta">
                  <ul>
                    <li class="">
                      <strong>26</strong>
                      <span>Apr</span>
                    </li>
                    <li class="post-category">
                      <RouterLink to="?" rel="category tag">Audio</RouterLink>
                    </li>
                    <li class="post-user">By<RouterLink to="?"> John Doe</RouterLink></li>
                  </ul>
                </div>
                <h3 class="dz-title">
                  <RouterLink to="/blog-details"
                    >“ Praesent pharetra congue sem, nec euismod nisi fermentum sit amet
                    ”</RouterLink
                  >
                </h3>
                <div class="dz-post-text text">
                  <p>
                    You can align your image to the left, right, or center with a caption, link and
                    alt text New Journey to the Mars in the Gutenberg editor, you can drag and drop
                    an.
                  </p>
                </div>
                <div class="read-more">
                  <RouterLink to="?" class="btn btn-primary btn-rounded btn-sm hover-icon">
                    <span>Read More </span>
                    <i class="fas fa-arrow-right"></i>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>

          <div class="card-container">
            <div class="dz-card blog-grid style-1 m-b50 aos-item">
              <div class="dz-media">
                <Swiper
                  class="swiper-container post-swiper"
                  :speed="1500"
                  :loop="true"
                  :modules="modules"
                  :navigation="{
                    prevEl: '.prev-post-swiper-btn',
                    nextEl: '.next-post-swiper-btn'
                  }"
                >
                  <SwiperSlide class="swiper-slide">
                    <RouterLink to="/blog-details"
                      ><img src="@/assets/images/blog/large/pic2.jpg" alt=""
                    /></RouterLink>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <RouterLink to="/blog-details"
                      ><img src="@/assets/images/blog/large/pic1.jpg" alt=""
                    /></RouterLink>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <RouterLink to="/blog-details"
                      ><img src="@/assets/images/blog/large/pic3.jpg" alt=""
                    /></RouterLink>
                  </SwiperSlide>
                  <div class="prev-post-swiper-btn"><i class="la fa-angle-left"></i></div>
                  <div class="next-post-swiper-btn"><i class="la fa-angle-right"></i></div>
                </Swiper>
              </div>
              <div class="dz-info">
                <div class="dz-meta">
                  <ul>
                    <li class="post-date">
                      <strong>26</strong>
                      <span>Apr</span>
                    </li>
                    <li class="post-category">
                      <RouterLink to="?" rel="category tag">Audio</RouterLink>
                    </li>
                    <li class="post-user">By<RouterLink to="?"> John Doe</RouterLink></li>
                  </ul>
                </div>
                <h3 class="dz-title">
                  <RouterLink to="/blog-details">Modern Family House.</RouterLink>
                </h3>
                <div class="dz-post-text text">
                  <p>
                    You can align your image to the left, right, or center with a caption, link and
                    alt text New Journey to the Mars in the Gutenberg editor, you can drag and drop
                    an.
                  </p>
                </div>
                <div class="read-more">
                  <RouterLink to="?" class="btn btn-primary btn-rounded btn-sm hover-icon">
                    <span>Read More </span>
                    <i class="fas fa-arrow-right"></i>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="dz-card blog-grid style-1 m-b50 aos-item">
              <div class="dz-info">
                <div class="dz-meta">
                  <ul>
                    <li class="">
                      <strong>26</strong>
                      <span>Apr</span>
                    </li>
                    <li class="post-category">
                      <RouterLink to="?" rel="category tag">Audio</RouterLink>
                    </li>
                    <li class="post-user">By<RouterLink to="?"> John Doe</RouterLink></li>
                  </ul>
                </div>
                <h3 class="dz-title">
                  <RouterLink to="/blog-details"
                    >“ Praesent pharetra congue sem, nec euismod nisi fermentum sit amet
                    ”</RouterLink
                  >
                </h3>
                <div class="dz-post-text text">
                  <p>
                    You can align your image to the left, right, or center with a caption, link and
                    alt text New Journey to the Mars in the Gutenberg editor, you can drag and drop
                    an.
                  </p>
                </div>
                <div class="read-more">
                  <RouterLink to="?" class="btn btn-primary btn-rounded btn-sm hover-icon">
                    <span>Read More </span>
                    <i class="fas fa-arrow-right"></i>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>

          <div class="card-container">
            <div class="dz-card blog-grid style-1 m-b50 aos-item">
              <div class="dz-media">
                <RouterLink to="/blog-details"
                  ><img src="@/assets/images/blog/large/pic2.jpg" alt=""
                /></RouterLink>
              </div>
              <div class="dz-info">
                <div class="dz-meta">
                  <ul>
                    <li class="post-date">
                      <strong>26</strong>
                      <span>Apr</span>
                    </li>
                    <li class="post-category">
                      <RouterLink to="?" rel="category tag">Audio</RouterLink>
                    </li>
                    <li class="post-user">By<RouterLink to="?"> John Doe</RouterLink></li>
                  </ul>
                </div>
                <h3 class="dz-title">
                  <RouterLink to="/blog-details">Residential Project, </RouterLink>
                </h3>
                <div class="dz-post-text text">
                  <p>
                    You can align your image to the left, right, or center with a caption, link and
                    alt text New Journey to the Mars in the Gutenberg editor, you can drag and drop
                    an.
                  </p>
                </div>
                <div class="read-more">
                  <RouterLink to="?" class="btn btn-primary btn-rounded btn-sm hover-icon">
                    <span>Read More </span>
                    <i class="fas fa-arrow-right"></i>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-12 col-lg-12">
            <nav aria-label="Blog Pagination">
              <ul class="pagination text-center m-b30">
                <li class="page-item">
                  <RouterLink class="page-link prev" to="?"
                    ><i class="la la-angle-left"></i
                  ></RouterLink>
                </li>
                <li class="page-item">
                  <RouterLink class="page-link active" to="?">1</RouterLink>
                </li>
                <li class="page-item"><RouterLink class="page-link" to="?">2</RouterLink></li>
                <li class="page-item"><RouterLink class="page-link" to="?">3</RouterLink></li>
                <li class="page-item">
                  <RouterLink class="page-link next" to="?"
                    ><i class="la la-angle-right"></i
                  ></RouterLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CommonBanner from '@/elements/CommonBanner.vue'
import bnr1 from '@/assets/images/banner/bnr1.jpg'
import bnr4 from '@/assets/images/banner/bnr4.jpg'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'

export default defineComponent({
  name: 'blog_',
  components: { CommonBanner, Swiper, SwiperSlide },
  setup() {
    return { bnr1, bnr4, modules: [Navigation, Autoplay] }
  }
})
</script>

<style scoped>
.blog_grid_masonry {
  column-count: 2;
  column-gap: 30px;
}

@media screen and (max-width: 991px) {
  .blog_grid_masonry {
    column-count: 1;
  }
}
</style>
