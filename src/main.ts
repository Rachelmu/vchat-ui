import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index'
import store from './store/index'

const app = createApp(App)

// 通过use 将路由插件安装到app中
app.use(router)
app.use(store)
app.mount('#app')
