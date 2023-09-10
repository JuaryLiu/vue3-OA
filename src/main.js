import { createApp } from "vue";
import App from  './App.vue'
import pinia from "./store/pinia";
import router from './router'
// import i18n from '@assets/lang' 
import '@assets/css/mian.css'
const app = createApp(App)
// app.use(i18n)
app.use(pinia)
app.use(router)
app.mount("#app")
