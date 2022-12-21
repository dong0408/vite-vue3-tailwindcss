import { createApp } from 'vue';
import App from './App.vue';
// import store from './store';
import store from './store'
import router from './router';
// import "tailwindcss/tailwind.css"
import '@/assets/styles/app.scss';
import Elementplus from 'element-plus'
import 'element-plus/dist/index.css'
// 创建vue实例
const app = createApp(App);

app.use(store);
app.use(router);
app.use(Elementplus)
// 挂载实例
app.mount('#app');
