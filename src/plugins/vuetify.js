import Vue from "vue";
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Vuetify from "vuetify/lib";
import "vuetify/dist/vuetify.min.css"; // Add this line
import DatetimePicker from 'vuetify-datetime-picker'
import colors from 'vuetify/lib/util/colors'

Vue.use(DatetimePicker);
Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'md' || 'fa',  // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
  },
  themes: {
    light: {
      primary: "#4682b4",
      secondary: "#b0bec5",
      accent: "#8c9eff",
      error: "#b71c1c",
      main: "#233E41",
      body: "#30494B"
    },
  },
})