import { createRouter, createWebHistory } from 'vue-router'
import MyPortfolio from '@src/views/VishuProfile/MyPortfolio.vue'
import MyResume from '@src/views/VishuProfile/MyResume.vue'
import MyProjects from '@src/views/VishuProfile/MyProjects.vue'
import CoverLetter from '@src/views/VishuProfile/CoverLetter.vue'
import PageNotFound from '@src/views/VishuProfile/PageNotFound.vue'
import AboutDev from '@src/views/VishuProfile/AboutDev.vue'
import ContactMe from '@src/views/VishuProfile/ContactMe.vue'
import MiscTools from '@src/views/VishuProfile/MiscTools.vue'
import ProfilePage from '@src/views/HemaProfile/ProfilePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Portfolio',
      component: MyPortfolio,
      meta: {
        hidden: false,
        print: false
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: MyResume,
      meta: {
        hidden: false,
        print: true
      }
    },
    {
      path: '/projects',
      name: 'Projects',
      component: MyProjects,
      meta: {
        hidden: false,
        print: true
      }
    },
    {
      path: '/coverletter',
      name: 'Cover letter',
      component: CoverLetter,
      meta: {
        hidden: false,
        print: true
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactMe,
      meta: {
        hidden: false,
        print: false
      }
    },
    {
      path: '/about',
      name: 'About',
      component: AboutDev,
      meta: {
        hidden: false,
        print: false
      }
    },
    {
      path: '/tools',
      name: 'Tools',
      component: MiscTools,
      meta: {
        hidden: true,
        print: true
      }
    },
    {
      path: '/hemasj',
      name: 'Hema S J',
      component: ProfilePage,
      meta: {
        hidden: true,
        print: true
      }
    },
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: PageNotFound,
      meta: {
        hidden: true,
        print: false
      }
    }
  ]
})

export default router
