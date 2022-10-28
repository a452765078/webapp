import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import lazyPlugin from 'vue3-lazy'
import loading from '@/components/base/loading/directive'

createApp(App).use(store).use(router).use(lazyPlugin, {
    loading: require('@/assets/images/default.png'),

  }).directive('loading',loading()).mount('#app')
