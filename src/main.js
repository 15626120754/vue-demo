import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Element from 'element-ui';
import VCharts from 'v-charts'
import '@/assets/css/reset.css';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element, { zIndex: 3000 });
Vue.use(VCharts);

Vue.config.productionTip = false;
console.log('process.env.NODE_ENV', process.env.NODE_ENV);
Vue.config.devtools = process.env.NODE_ENV === 'development'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
