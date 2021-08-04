import Searching from "../../services/searching/searching.service"

export const searching = {
  namespaced: true,
  state: {
    courts: [],
    bookingMessage: ''
  },
  getters: {

  },
  mutations: {
    FIND_COURT(state, courtInfo) {
      state.courts = [];

      // push all of court to array 
      state.courts.push(courtInfo);
      // Set all of courts (String format) and Date(not ISO format) to localStorage 
      localStorage.setItem("courts", JSON.stringify(state.courts));
    },
    BOOKING(state, bookingMessage) {
      state.bookingMessage = bookingMessage;
      console.log(bookingMessage);
    }
  },
  actions: {
    findCourt({ commit }, courtInfo) {
      return Searching.findCourt(courtInfo)
        .then(
          res => {
            console.log(res)
            commit('FIND_COURT', res);
            return Promise.resolve(res);
          },
          err => {
            console.error(err);
            return Promise.reject(err);
          }
        )
    },
    booking({ commit }, bookingInfo) {
      return Searching.booking(bookingInfo)
        .then(
          res => {
            // console.log(res);
            commit('BOOKING', res);
            return Promise.resolve(res);
          },
          err => {
            console.error(err);
            return Promise.reject(err);
          }
        )
    }
  }
}