import Vue from 'vue'
import App from './App.vue'
import router from './router'
import allHobbies from './hobby-data.js'

Vue.config.productionTip = false

let data = {
  hobbies: allHobbies,
  currentHobby: allHobbies[0]
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
