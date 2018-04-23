import Vue from 'vue'
import Router from 'vue-router'
import JDHead from '../components/JDHead.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'JDHead',
      component: JDHead
    }
  ]
})
