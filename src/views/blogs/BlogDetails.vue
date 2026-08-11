<template>
  <div class="page-content bg-white">
    <CommonBanner :img="bnr2" title="Blog Details" text="Blog Details" />
    <div class="content-inner bg-img-fix">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 col-lg-8">
            <div class="dz-card blog-single style-1">
              <div class="dz-media">
                <img src="@/assets/images/blog/large/pic1.jpg" alt="" />
              </div>
              <div class="dz-info">
                <div class="dz-meta">
                  <ul>
                    <li>April 26, 2021</li>
                    <li class="post-user">By <RouterLink to="?">John Doe</RouterLink></li>
                  </ul>
                </div>
                <h2 class="dz-title">Five Quick Tips Regarding Architecture.</h2>
                <div class="dz-post-text">
                  <p>
                    In hac habitasse platea dictumst. Integer congue et enim cursus porttitor.
                    Vestibulum mattis placerat magna, sit amet laoreet sapien. Vestibulum venenatis
                    egestas lacus, a porta elit ornare sit amet. Morbi dapibus efficitur nisi, ut
                    faucibus lorem. Morbi interdum odio ac leo vehicula iaculis. Aenean condimentum,
                    erat ac volutpat iaculis, nibh massa pharetra lectus,
                  </p>
                  <blockquote class="block-quote style-1">
                    <p>
                      “ Mauris justo augue, laoreet quis faucibus et, ultrices eu ante. Duis magna
                      eratut dui eu maximus metus bibendum suscipit ”
                    </p>
                    <cite>Visva</cite>
                  </blockquote>
                  <div class="alignleft w-50">
                    <img alt="" src="@/assets/images/blog/blog-grid/pic1.jpg" class="w-100" />
                  </div>
                  <p>
                    Nulla sodales finibus risus. Sed suscipit turpis mi, eget ornare ipsum laoreet
                    ac. Sed pharetra, dui a congue tincidunt, lacus metus consectetur nunc, sit amet
                    laoreet velit nunc vitae diam. Maecenas posuere pellentesque orci at placerat.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                    turpis egestas.
                  </p>
                  <h4>20th Century Revolution</h4>
                  <p>
                    Pellentesque congue at augue et porttitor. Aenean volutpat porttitor euismod.
                    Suspendisse eget pretium augue. Etiam venenatis non elit quis tincidunt.
                  </p>
                  <p>
                    Mauris egestas erat ut arcu interdum molestie. Nam sed hendrerit lorem. Duis
                    eget orci ac odio gravida laoreet. Donec et diam varius, semper justo at,
                    accumsan elit.
                  </p>
                  <h4>Aenean volutpat porttitor euismod.</h4>
                  <p>
                    Mauris egestas erat ut arcu interdum molestie. Nam sed hendrerit lorem. Duis
                    eget orci ac odio gravida laoreet. Donec et diam varius, semper justo at,
                    accumsan elit. Aenean ut condimentum purus, et egestas lectus. Nulla pretium
                    justo ex, vel iaculis velit aliquet et. Cras sed nisi id ante congue scelerisque
                    non at eros. In finibus rutrum justo nec fringilla. Etiam id augue ornare,
                    dictum tortor ut, tristique metus.
                  </p>
                  <p>
                    Proin non ultrices mauris. Nam ultricies justo eu turpis ornare condimentum.
                    Quisque felis tortor, commodo vitae tristique facilisis, luctus rutrum justo.
                  </p>

                  <p>
                    Aliquam risus nisl, convallis vitae dolor vitae, vulputate mollis nunc. Fusce at
                    feugiat tellus, ac vestibulum orci. Fusce orci risus, pulvinar in rhoncus a,
                    varius et sapien. Nullam porta leo sit amet urna consectetur, at rutrum risus
                    aliquet. Proin vehicula nulla eu quam rhoncus ullamcorper.
                  </p>
                </div>
                <div class="post-footer">
                  <div class="post-tags">
                    <strong>Tags:</strong>
                    <RouterLink to="?">Fashion</RouterLink>
                  </div>
                  <div class="dz-share-post">
                    <h5 class="title">Share :</h5>
                    <ul class="dz-social-icon">
                      <li>
                        <RouterLink to="?" target="_blank"
                          ><i class="fab fa-facebook-f"></i
                        ></RouterLink>
                      </li>
                      <li>
                        <RouterLink to="?" target="_blank"
                          ><i class="fab fa-twitter"></i
                        ></RouterLink>
                      </li>
                      <li>
                        <RouterLink to="?" target="_blank"
                          ><i class="fab fa-linkedin"></i
                        ></RouterLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- blog start -->
            <div class="author-box blog-user m-b60">
              <div class="author-profile-info">
                <div class="author-profile-pic">
                  <img src="@/assets/images/testimonials/pic4.jpg" alt="Profile Pic" />
                </div>
                <div class="author-profile-content">
                  <h6>John Doe</h6>
                  <p>
                    We woke reasonably late following the feast and free flowing wine the night
                    before. After gathering ourselves and our packs, we headed down to our home.
                  </p>
                  <ul class="list-inline m-b0">
                    <li>
                      <RouterLink to="?" target="_blank" class="btn-link">
                        <i class="fas fa-globe"></i>
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="?" target="_blank" class="btn-link">
                        <i class="fab fa-facebook-f"></i>
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="?" target="_blank" class="btn-link">
                        <i class="fab fa-twitter"></i>
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="?" target="_blank" class="btn-link">
                        <i class="fab fa-youtube"></i>
                      </RouterLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="row extra-blog style-1">
              <div class="col-md-12">
                <div class="widget-title">
                  <h4 class="title">Related Blogs</h4>
                  <div class="dz-separator style-1 text-primary mb-0"></div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="dz-card blog-grid style-1 aos-item">
                  <div class="dz-media">
                    <RouterLink to="/blog-details"
                      ><img src="@/assets/images/blog/blog-grid/pic1.jpg" alt=""
                    /></RouterLink>
                  </div>
                  <div class="dz-info">
                    <div class="dz-meta">
                      <ul>
                        <li class="post-date">
                          <strong>26</strong>
                          <span>Apr</span>
                        </li>
                        <li class="post-user">By <RouterLink to="?">John Doe</RouterLink></li>
                      </ul>
                    </div>
                    <h5 class="dz-title">
                      <RouterLink to="/blog-details">Modern House Interior.</RouterLink>
                    </h5>
                    <div class="read-more">
                      <RouterLink to="?" class="btn btn-primary btn-rounded btn-sm hover-icon"
                        ><span>Read More </span><i class="fas fa-arrow-right"></i
                      ></RouterLink>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="dz-card blog-grid style-1 aos-item">
                  <div class="dz-media">
                    <RouterLink to="/blog-details"
                      ><img src="@/assets/images/blog/blog-grid/pic2.jpg" alt=""
                    /></RouterLink>
                  </div>
                  <div class="dz-info">
                    <div class="dz-meta">
                      <ul>
                        <li class="post-date">
                          <strong>26</strong>
                          <span>Apr</span>
                        </li>
                        <li class="post-user">By <RouterLink to="?">John Doe</RouterLink></li>
                      </ul>
                    </div>
                    <h5 class="dz-title">
                      <RouterLink to="/blog-details">Modern Family House.</RouterLink>
                    </h5>
                    <div class="read-more">
                      <RouterLink to="?" class="btn btn-primary btn-rounded btn-sm hover-icon"
                        ><span>Read More </span><i class="fas fa-arrow-right"></i
                      ></RouterLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="clear" id="comment-list">
              <div class="comments-area style-1" id="comments">
                <div class="widget-title">
                  <h4 class="title">8 Comments</h4>
                  <div class="dz-separator style-1 text-primary mb-0"></div>
                </div>
                <div class="clearfix">
                  <!-- comment list END -->
                  <ol class="comment-list">
                    <li class="comment">
                      <div class="comment-body">
                        <div class="comment-author vcard">
                          <img
                            class="avatar photo"
                            src="@/assets/images/testimonials/pic1.jpg"
                            alt=""
                          />
                          <cite class="fn">Celesto Anderson</cite>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div class="reply">
                          <RouterLink to="?" class="comment-reply-link">
                            <i class="fa fa-reply"></i>Reply</RouterLink
                          >
                        </div>
                      </div>
                      <ol class="children">
                        <li class="comment odd parent">
                          <div class="comment-body">
                            <div class="comment-author vcard">
                              <img
                                class="avatar photo"
                                src="@/assets/images/testimonials/pic2.jpg"
                                alt=""
                              />
                              <cite class="fn">Jake Johnson</cite>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                              eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div class="reply">
                              <RouterLink to="?" class="comment-reply-link">
                                <i class="fa fa-reply"></i>Reply</RouterLink
                              >
                            </div>
                          </div>
                        </li>
                      </ol>
                    </li>
                    <li class="comment">
                      <div class="comment-body">
                        <div class="comment-author vcard">
                          <img
                            class="avatar photo"
                            src="@/assets/images/testimonials/pic1.jpg"
                            alt=""
                          />
                          <cite class="fn">John Doe</cite>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div class="reply">
                          <RouterLink to="?" class="comment-reply-link">
                            <i class="fa fa-reply"></i>Reply</RouterLink
                          >
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div class="comment-respond style-1" id="respond">
              <div class="widget-title">
                <h4 class="title">Leave Your Comment</h4>
                <div class="dz-separator style-1 text-primary mb-0"></div>
                <RouterLink
                  style="display: none"
                  to="?"
                  id="cancel-comment-reply-link"
                  rel="nofollow"
                  >Cancel reply</RouterLink
                >
              </div>
              <form class="comment-form" id="commentform" method="post">
                <p class="comment-form-author">
                  <label for="author">Name <span class="required">*</span></label>
                  <input type="text" name="Author" placeholder="Author" id="author" />
                </p>
                <p class="comment-form-email">
                  <label for="email">Email <span class="required">*</span></label>
                  <input type="text" placeholder="Email" name="email" id="email" />
                </p>
                <p class="comment-form-author w-100">
                  <label for="author">Subtitale <span class="required">*</span></label>
                  <input type="text" name="Author" placeholder="Subtitale" id="subtitale" />
                </p>
                <p class="comment-form-comment">
                  <label for="comment">Comment</label>
                  <textarea rows="8" name="comment" placeholder="Comment" id="comment"></textarea>
                </p>
                <p class="form-submit">
                  <button
                    type="reset"
                    class="btn shadow-primary btn-primary btn-icon btn-rounded"
                    id="submit"
                  >
                    POST NOW
                    <i class="fas fa-caret-right ms-1"></i>
                  </button>
                </p>
              </form>
            </div>
          </div>
          <BlogLeftContent />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CommonBanner from '@/elements/CommonBanner.vue'
import BlogLeftContent from '@/components/BlogLeftContent.vue'
import bnr2 from '@/assets/images/banner/bnr2.jpg'

export default defineComponent({
  components: { CommonBanner, BlogLeftContent },
  setup() {
    return { bnr2 }
  }
})
</script>

<style scoped></style>
