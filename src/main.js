import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store";
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import VueToasted from 'vue-toasted';
import VueApexCharts from 'vue-apexcharts';

import "./assets/styles/GlobalStyle.css";
import "./assets/styles/VarStyle.css";
// import "./assets/styles/Responsive.scss";


Vue.config.productionTip = false;

const requireComponent = require.context(
  // The relative path of the components folder
  './components/BaseComponents',
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName)

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      // Gets the file name regardless of folder depth
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )


  // Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  )
})


Vue.use(VueToasted, {
  iconPack: 'fontawesome'
});

Vue.use(VueApexCharts);
Vue.component('apexchart', VueApexCharts);

new Vue({
  router,
  store,
  created() {
    const userString = localStorage.getItem('user')
    if(userString) {
      const userData = JSON.parse(userString)
      this.$store.commit('SET_USER_DATA', userData)
    }
    axios.interceptors.response.use(
      response => response,
      error => {
        if(error.response.status === 401 ) {
          this.$store.dispatch('logout')
        }
        return Promise.reject(error)
      }
    )
  },
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
