import Vue from "vue";
import Vuex from "vuex";
import { userAuth } from "./Modules/auth.module";
import { searching } from "./Modules/searching.module";


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    userAuth,
    searching
  },
});
