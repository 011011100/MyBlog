// Vue.config.globalProperties.routerAppend = (path, pathToAppend) => {
//   return path + (path.endsWith('/') ? '' : '/') + pathToAppend
// }
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import index from '@/router'

const app = createApp(App)

app.use(ElementPlus)
app.use(index)
app.mount('#app')