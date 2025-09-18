import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueCodemirror from 'vue-codemirror'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(VueCodemirror, {
  extensions: [],
})
app.mount('#app')
