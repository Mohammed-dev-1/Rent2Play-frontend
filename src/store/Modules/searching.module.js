import Searching from "../../services/Searching/searching.service"

export const searching = {
  namespaced: true,
  state: {
    courts: [],
    bookingMessage: '',
    messageStatus: false,
    messageContains: false,
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
      state.messageStatus = true;
      state.bookingMessage = bookingMessage;

      if(state.bookingMessage == "The booking was created succesfully")
        state.messageContains = true;
              
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
            let message = res.response?.data.message;
            
            commit('BOOKING', message);
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