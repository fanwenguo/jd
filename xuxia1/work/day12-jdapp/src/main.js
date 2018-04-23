// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import tools from './tools/tools.js'
import NavList from './components/Home/NavList/navList.vue'
import NavChild from './components/Home/NavList/NavChild/navChild.vue'

Vue.component('NavList', NavList)
Vue.component('NavChild', NavChild)


Vue.use(tools)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})