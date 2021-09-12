<template>
  <section class="hero">
    
    <section class="section_content">
      <!-- Subtitle -->
      <Subtitle />
      
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
            
            <!-- Popup card to type info  -->
            <PopupSearch /> 
            
          </v-dialog>
          
        </div>
      </div>
    </section>
  </section>
</template>

<script>
// components
import Nav from "./Nav";
import PopupSearch from "./PopupSearch";
import Subtitle from "./Subtitle";

export default {
  name: "HeroSection",
  components: {
    Nav,
    PopupSearch
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
.btn {
  font-weight: bold;
  display: flex;
  margin-left: 5px;
}
</style>
