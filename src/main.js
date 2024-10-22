import { createApp } from 'vue'
import './style.css'
import '@/assets/css/common.scss'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import { createPinia } from 'pinia'
// px 自动转 rem 插件
import "lib-flexible";
import mixins from './utils/mixins'
// 引入路由
import router from "@/router/index";
let pinia=createPinia()
const app = createApp(App)
app.use(pinia);
app.use(Vant);
app.use(router)
app.config.globalProperties = {
	...mixins
}
app.mount('#app')
