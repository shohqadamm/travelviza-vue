import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShengenView from '../views/ShengenView.vue'
import AfricaView from '../views/AfricaView.vue'
import AmericaView from '../views/AmericaView.vue'
import AsiaView from '../views/AsiaView.vue'
import EuropeView from '../views/EuropeView.vue'
import NewsView from '../views/NewsView.vue'
import ContactsView from '../views/ContactsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/shengen',
    name: 'shengen',
    component:ShengenView
  },
  {
    path: '/amerika',
    name: 'amerika',
    component:AmericaView
  },
  {
    path: '/africa',
    name: 'africa',
    component:AfricaView
  },
  {
    path: '/news',
    name: 'news',
    component:NewsView
  },
  {
    path: '/contacts',
    name: 'contacts',
    component:ContactsView
  },
  {
    path: '/asia',
    name: 'asia',
    component:AsiaView
  },
  {
    path: '/europe/',
    name: 'europe',
    component:EuropeView
  }
  ,
  {
    path: '/visa-to-:id',
    component:()=> import('../views/CountryView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
