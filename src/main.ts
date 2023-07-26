import './assets/font/inter/stylesheet.css'
import './assets/scss/main.scss'
import 'primeflex/primeflex.css'
import 'swiper/css';
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
