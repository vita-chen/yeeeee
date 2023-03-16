import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { router } from './router/router'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(router).mount('#app')
