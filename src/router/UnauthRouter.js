import Vue from 'vue'
import VueRouter from 'vue-router'
import UnauthHome from '../views/UnauthHome.vue'
import SoloGame from '../views/SoloGame.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'UnauthHome',
    component: UnauthHome
  },
  {
    path: '/solo',
    name: 'SoloGame',
    component: SoloGame
  },
]

const UnauthRouter = new VueRouter({
  routes
})

export default UnauthRouter
