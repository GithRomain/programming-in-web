import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store' // short for @/store/index
import router from './router'

createApp(App).use(router).use(store).mount('#app')
