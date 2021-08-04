<template>
  <main>
    <!-- Navbar -->
    <Nav />
    <section class="hero">
      <section class="content">
        <!-- Subtitle -->
        <div class="content__title">
          <h1 class="subtitle">Find The Perfect Court To Play</h1>
          <p class="title">
            Book pitches and courts and connect with the world's largest racket
            player community
          </p>
        </div>
        <!-- Find a game button modeling  -->
        <div class="content__form">
          <div class="text-center">
            <v-dialog v-model="dialog" width="500">
              <!-- Finding Button -->
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="#2f4353"
                  dark
                  rounded
                  v-bind="attrs"
                  v-on="on"
                  width="150"
                  height="50"
                  class="btn"
                  >Find a game</v-btn
                >
              </template>

              <v-card color="#2f4353" dark>
                <form class="form" @submit.prevent="findCourt">
                  <!-- Model Subtitle -->
                  <v-card-title class="headline #2f4353"
                    >Find a game</v-card-title
                  >

                  <!-- Model Content -->
                  <v-card-text>
                    <!-- Location select model -->
                    <v-select
                      v-model="selectLocation"
                      :items="court_data_location"
                      menu-props="auto"
                      label="Where are you from ?"
                      hide-details
                      prepend-icon="mdi-map"
                      single-line
                    ></v-select>
                    <br />
                    <!-- Start time and End Time Picker -->
                    <div class="d-flex">
                      <!-- Start Time Select model -->
                      <v-datetime-picker
                        label="Select Start time"
                        v-model="startTime"
                      >
                      </v-datetime-picker>
                      <v-spacer></v-spacer>
                      <!-- End Time select model -->
                      <v-datetime-picker
                        label="Select End time"
                        v-model="endTime"
                      >
                      </v-datetime-picker>
                    </div>
                    <!-- Sport select model -->
                    <v-select
                      v-model="sport"
                      :items="court_data_sports"
                      menu-props="auto"
                      label="Add a sport"
                      hide-details
                      single-line
                    ></v-select>
                  </v-card-text>

                  <v-divider></v-divider>

                  <!-- Button submit model -->
                  <v-card-actions class="border-none" v-if="buttonShow">
                    <v-spacer></v-spacer>
                    <v-btn 
                      @click="dialog = false" 
                      :disabled="chackSearchInput"
                      color="success" 
                      type="submit">
                      Find
                    </v-btn>
                  </v-card-actions>
                </form>
              </v-card>
            </v-dialog>
          </div>
        </div>
      </section>
    </section>
  </main>
</template>

<script>
// components
import Nav from "./Nav";

// Constructor
// import Search from "@/services/Models/search"


export default {
  name: "HeroSection",
  components: {
    Nav
  },
  data() {
    return {
      // logical
      menu: false,
      menu1: false,
      menu2: false,
      menu3: false,
      modal: false,
      dialog: false,
      buttonShow: true,

      // select value
      startTime: null,
      endTime: null,
      sport: '',
      selectLocation: '',

      // local data location
      court_data_sports: ["Tennis", "Padel", "Badminton"],
      court_data_location: ["Vilinius", "Alytus"]
    };
  },
  computed: {
    startTimeISO() {
      return new Date(this.startTime).toISOString()
    },
    endTimeISO() {
      return new Date(this.endTime).toISOString()
    },
    chackSearchInput() {
      return (!this.selectLocation || !this.sport || !this.startTime || !this.endTime)
        ? true : false;
    }
  },
  methods: {
    toggleNav() {
      this.mobileNav = window.innerWidth <= 915;
    },
    findCourt() {
      
      const searchCourtInfo = {
        startTimeISO: this.startTimeISO,
        endTimeISO: this.endTimeISO,
        sport: this.sport,
        selectLocation: this.selectLocation
      }
      // Start time : 2021-05-09T08:00:00.000Z
      // End time: 2021-05-09T09:00:00.000Z
      
      // Send data for searching and if is working then go to show result
      this.$store.dispatch('searching/findCourt', searchCourtInfo)
      .then(() => {
        this.$router.push({ name: 'find_court' });
      });

      // Reset Data
      this.selectLocation = '';
      this.startTime = null;
      this.endTime = null;
      this.sport = '';
    }
  },
  created() {
    // this for nav responsive
    this.toggleNav();
    window.addEventListener("resize", this.toggleNav);
  }
};
</script>

<style scoped>
.hero {
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("../../assets/mobile-bg.jpg");
  background-size: cover;
  background-attachment: fixed;
  clip-path: circle(180vh at 50% -90vh);
}
.content {
  width: 80%;
  margin: auto;
  padding-top: 110px;
}
.subtitle {
  color: #ffffff;
  letter-spacing: 2px;
  font-family: "Revalia", cursive;
  font-size: 1.4em;
  padding: 0.4em 0;
}
.title {
  color: #ffffff;
  font-weight: lighter;
  font-family: "Montserrat", sans-serif;
  font-size: 1em;
  opacity: .8;
  padding: 1em 35px 1em 0;
  line-height: 1.7em;
}
.btn {
  font-weight: bold;
  display: flex;
  margin-left: 5px;
}

@media screen and (min-width: 600px) {
  .hero {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content {
    padding-top: 0;
  }
  .content__title .title {
    font-size: 1.1em;
    letter-spacing: 1px;
  }
  .content__form {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .subtitle {
    font-size: 2em;
  }
}
@media screen and (min-width: 940px) {
  .hero {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../../assets/bg.jpg");
  }
  .content__title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .subtitle {
    letter-spacing: 3px;
    font-size: 2.4em;
  }
}
</style>
