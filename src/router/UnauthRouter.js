import Vue from 'vue'
import VueRouter from 'vue-router'
import UnauthHome from '../views/UnauthHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'UnauthHome',
    component: UnauthHome
  },
]

const UnauthRouter = new VueRouter({
  routes
})

export default UnauthRouter
