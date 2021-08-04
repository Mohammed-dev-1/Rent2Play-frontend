import authService from "../../services/auth.service";

const user = JSON.parse(localStorage.getItem('user'));
const initialState = 
  user ? { 
    status: { 
      loggedIn: true 
    }, 
    user 
  } : { 
    status: { 
      loggedIn: false 
    }, 
    user: null 
  }

export const userAuth = {
  namespaced: true,
  state: initialState,
  getters: {},
  mutations: {
    SETUSER_SUCCESS(state, userData) {
      state.status.loggedIn = true;
      state.user = userData;
    },
    SETUSER_FILD(state) {
      state.status.loggedIn = false;
      state.user = null;
    }
  },
  actions: {
    register({ commit }, user) {
      return authService.register(user)
        .then(
          res => {
            commit('SETUSER_SUCCESS', res);
            return Promise.resolve(res);
          },
          err => {  
            commit('SETUSER_FILD')
            return Promise.reject(err);
          }
        )
    },
    logIn({ commit }, user) {
      return authService.logIn(user)
        .then(
          res => {
            commit('SETUSER_SUCCESS', res);
            return Promise.resolve(res);
          },
          err => {
            commit('SETUSER_FILD');
            return Promise.reject(err);
          }
        )
    },
    logout({ commit }) {
      authService.logout()
      commit('SETUSER_FILD');
    }
  }
}