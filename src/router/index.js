import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RepoView from '../views/RepoView.vue'
import ErrorPage from '../views/ErrorPage.vue'
import RepoDetails from '../components/RepoDetails.vue'
import CreateRepo from '../views/CreateRepo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/repo',
      name: 'repo',
      component: RepoView
    },
    {
      path:'/:catchAll(.*)',
      name: '/ErrorPage',
      component: ErrorPage
    },
    {
      path:'/RepoDetails/:id',
      name:'RepoDetails',
      component:RepoDetails,
      props:true
    },
    {
      path:'/create',
      name:'CreateRepo',
      component: CreateRepo
    }
  ]
})

export default router
