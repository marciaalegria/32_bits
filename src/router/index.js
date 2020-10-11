import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Busquedas from '../views/Busquedas.vue'
import Ventas from '../views/Ventas.vue'
import Total from '../views/Total.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/busquedas',
    name: 'Busquedas',
    component: Busquedas
  },
  {
    path: '/ventas',
    name: 'Ventas',
    component: Ventas
  },
  {
    path: '/total',
    name: 'Total',
    component: Total
  },
  {
    path: '/*',
    name: 'NotFound',
    component: NotFound
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
