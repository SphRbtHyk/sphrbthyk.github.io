import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/research',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: "/talks",
      name: "talks",
      component: () => import('../views/TalksView.vue')
    },
    {path: "/events",
      name: "events",
      component: () => import('../views/EventsView.vue')},
    {
      path: "/teaching",
      name: "teaching",
      component: () => import('../views/TeachingView.vue')
    },

    {path: "/software", name: "software", component: () => import('../views/SoftwareView.vue')},
    {
      path: "/publications",
      name: "publications",
      component: () => import('../views/PublicationView.vue')
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import('../views/ProjectsView.vue')
    },
  ]
})

export default router
