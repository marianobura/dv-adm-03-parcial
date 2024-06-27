import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/product/:id',
      name: 'ProductDetails',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/search',
      name: 'Search',
      component: () => import('../views/SearchView.vue')
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('../views/CartView.vue')
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: () => import('../views/CheckoutView.vue')
    },
    {
      path: '/payment',
      name: 'Payment',
      component: () => import('../views/PaymentView.vue')
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash };
    } else {

      return { top: 0 };
    }
  },
})

export default router
