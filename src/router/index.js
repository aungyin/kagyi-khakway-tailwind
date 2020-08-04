import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Consonant from '../components/Consonant.vue'
import Vowel from '../components/Vowel.vue'
import About from '../components/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      title: 'ホーム'
    }
  },
  {
    path: '/consonant',
    component: Consonant,
    meta: {
      title: '子音アルファペット'
    }
  },
  {
    path: '/vowel',
    component: Vowel,
    meta: {
      title: '母音アルファペット'
    }
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '作った目的'
    }
  },
]

const router = new VueRouter({
  mode: "history",
  routes: routes
})

export default router