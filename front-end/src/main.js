import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'
Vue.config.productionTip = false

let data = {
  players: mock,
  currentTeam: {
    teamName: "Current Team",
    players: [],
  },
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
