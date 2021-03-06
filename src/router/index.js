import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import MainLayout from '@/components/MainLayout'
import Monitoring from '@/components/monitoring/Monitoring'
import Troubleshooting from '@/components/troubleshooting/Troubleshooting'
import Configuration from '@/components/clusterConfiguration/Cluster-configuration.vue'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: 'monitoring',
          component: Monitoring
        },
        {
          path: 'troubleshooting',
          component: Troubleshooting
        },
        {
          path: '/configuration',
          component: Configuration
        },
        {
          path: '/addResource',
          component: Hello
        }
      ]
    }
  ]
})
