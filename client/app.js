import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import createRouter from './router'
import createStore from './store'
import App from './containers/App.vue'

export default () => {
  const router = createRouter()

  const store = createStore()

  sync(store, router)

  const app = new Vue({
    router,
    store,
    render: h => h(App),
  })

  return { app, router, store }
}

if (!PRODUCTION) { // eslint-disable-line no-undef
  Vue.config.productionTip = false
}
