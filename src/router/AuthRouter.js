import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthHome from '../views/AuthHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AuthHome',
    component: AuthHome
  },
]

const AuthRouter = new VueRouter({
  routes
})

export default AuthRouter
