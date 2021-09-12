<template>
  <div class="contact">
    <div class="contact__subtitle">
      <span class="active">{{court_data.courtInfo.sport}}</span>
      <span class="active"> in </span>
      <span class="active3">{{court_data.courtInfo.Type}}</span>
    </div>
    <div class="chips">
      <v-chip color="#2f4353" class="chip" outlined>{{court_data.courtInfo.courtCity}}</v-chip>
      <v-chip color="#2f4353" class="chip" outlined>{{court_data.courtInfo.sport}}</v-chip>
    </div>

    <!-- Court cards -->
    <CourtCardData 
      :CourtData="court_data"
    />

    <v-snackbar :color="bookinStatus ? 'success' : 'red' " outlined v-model="snackbar">
      {{ bookingMessage }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="red"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>

  </div>
</template>

<script>
import CourtCardData from "./CourtCardData";

export default {
  name: "CourtCard",
  props: ['court_data'],
  components: {
    CourtCardData
  },
  data() {
    return {
      snackbar: false,
    };
  },
  computed: {
    bookinStatus() {
      return this.$store.state.searching.messageContains;
    },
    bookingMessage() {
      return this.$store.state.searching.bookingMessage;
    },
    snackbarStatus() {
      this.snackbar = this.$store.state.searching.messageStatus;
      setTimeout(()=> {
        this.snackbar = false;
      },2000);
    }
  },
};
</script>

<style lang="scss" scoped>
.contact{
  width: 80%;
  margin: 150px auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .contact__subtitle{
    display: flex;
    justify-content: center;
    align-items: center; 
    text-shadow: -2px 3px 3px rgb(0 0 0 / 50%);
    font-size: 2.2rem;
    letter-spacing: 1px;
    font-weight: 700;
    width: 100%;
    color: #ffffff;
  }

  .chips{
    margin-top: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .chip{
      box-shadow: inset 0px 5px 15px 2px rgb(0 0 0 / 50%);
    }
  }
}
.active {
  font-weight: bold;
}

.order {
  order: -1;
}
.active{
  color: #f55c47;
}
.active3{
  color: #2f4353;
}
</style>
