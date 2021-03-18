require('./bootstrap');
import Vue from 'vue'

Vue.config.productionTip = false

Vue.component('example-component', require('./components/UsersTable.vue').default);

const app = new Vue({
    el: '#app',
}).$mount('#app');
