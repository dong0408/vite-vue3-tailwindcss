import { createApp } from 'vue';
import App from './App.vue';
// import store from './store';
import store from './store/idnex'
import router from './router';
// import "tailwindcss/tailwind.css"
import '@/assets/styles/app.scss';
// 创建vue实例
const app = createApp(App);

app.use(store);
app.use(router);

// 挂载实例
app.mount('#app');
