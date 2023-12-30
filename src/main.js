import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vue2Editor from "vue2-editor";

import VueApexCharts from 'vue-apexcharts';


// import ApexCharts from 'apexcharts'

Vue.use(VueApexCharts);
Vue.component('apexchart', VueApexCharts);


// Vue.use(Chart);
// Vue.component('chartjs', Chart);


Vue.use(Vue2Editor);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
