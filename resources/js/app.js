require('./bootstrap');
import { createApp } from 'vue'
import store from './store'
import router from './router/router'
import App from './components/App'

const app = createApp({})

app.component('app', App)
app.use(router).use(store).mount('#app')
