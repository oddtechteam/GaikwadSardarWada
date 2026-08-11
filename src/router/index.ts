import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home/Home.vue'),
      meta: { layout: 'layout' }
    },
    {
      path: '/home-2',
      name: 'home_2',
      component: () => import('../views/home/Home2.vue'),
      meta: { layout2: 'layout2' }
    },
    {
      path: '/home-3',
      name: 'home_3',
      component: () => import('../views/home/Home3.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: () => import('../views/AboutUs.vue'),
      meta: { layout: 'layout' }
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('../views/Team.vue'),
      meta: { layout: 'layout' }
    },
    {
      path: '/coming-soon',
      name: 'coming_soon',
      component: () => import('../views/socialPages/ComingSoon.vue'),
      meta: { layout4: 'layout' }
    },
    {
      path: '/under-construct',
      name: 'under_construct',
      component: () => import('../views/socialPages/UnderConstruct.vue'),
      meta: { layout4: 'layout' }
    },
    {
      path: '/error-404',
      name: 'error_404',
      component: () => import('../views/Error404.vue'),
      meta: { layout: 'layout' }
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/portfolio/PortfolioView.vue'),
      meta: { layout: 'layout' }
    },
    {
      path: '/portfolio-details',
      name: 'portfolio_detail',
      component: () => import('../views/portfolio/PortfolioDetail.vue'),
      meta: { layout: 'layout' }
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/services/Services.vue'),
      meta: { layout: 'layout' }
    },
    {
      path: '/services-details',
      name: 'services_details',
      component: () => import('../views/services/ServicesDetails.vue'),
      meta: { layout: 'layout' }
    },
    {
      path: '/blog-grid',
      name: 'blog_grid',
      component: () => import('../views/blogs/Blog.vue'),
      meta: { layout: 'layout' }
    },
    {
      path: '/blog-large-left-sidebar',
      name: 'blog_large_left_sidebar',
      component: () => import('../views/blogs/BlogLargeLeftSidebar.vue'),
      meta: { layout: 'layout' }
    },
    {
      path: '/blog-list-left-sidebar',
      name: 'blog_list_left_sidebar',
      component: () => import('../views/blogs/BlogListLeftSidebar.vue'),
      meta: { layout: 'layout' }
    },
    {
      path: '/blog-details',
      name: 'blog_details',
      component: () => import('../views/blogs/BlogDetails.vue'),
      meta: { layout: 'layout' }
    },
    {
      path: '/contact-us',
      name: 'contact_us',
      component: () => import('../views/ContactUs.vue'),
      meta: { layout: 'layout' }
    }
  ]
})

export default router
