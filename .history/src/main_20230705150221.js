import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('MyGlobalComponent', MyGlobalComponent); ✅
const mountedApp = app.mount('#app');

app.use(router)

