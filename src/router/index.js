import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'

// Main structure
import LeftSidebar from '@/components/shared/left_sidebar/Main'
import TopNavbar from '@/components/shared/top_navbar/Main'

// Main sections
import Monitoring from '@/components/monitoring/Monitoring'
import Troubleshooting from '@/components/troubleshooting/Troubleshooting'
import Configuration from '@/components/configuration/Configuration'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      components: {
        default: Monitoring,
        'top-navbar': TopNavbar,
        'left-sidebar': LeftSidebar
      }
    },
    {
      path: '/monitoring',
      components: {
        default: Monitoring,
        'top-navbar': TopNavbar,
        'left-sidebar': LeftSidebar
      }
    },
    {
      path: '/troubleshooting',
      components: {
        default: Troubleshooting,
        'top-navbar': TopNavbar,
        'left-sidebar': LeftSidebar
      }
    },
    {
      path: '/configuration',
      components: {
        default: Configuration,
        'top-navbar': TopNavbar,
        'left-sidebar': LeftSidebar
      }
    }
  ]
})
