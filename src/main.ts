import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './config/plugins/vuetify'
import './config/plugins/dialog';
import 'vuetify-dialog/dist/vuetify-dialog.css';
import '@babel/polyfill'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
