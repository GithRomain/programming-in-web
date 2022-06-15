import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from "../components/NotFound"
import ProductsPage from "../components/ProductsPage"
import ShoppingList from "../components/ShoppingList"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ProductsPage',
    name: 'ProductsPage',
    component: ProductsPage
  },
  {
    path: '/ShoppingList',
    name: 'ShoppingList',
    component: ShoppingList,
    props: true
  },
  {
    path: '/:catchAll(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
