<template>
  <div class="app">
    <div class="app__content">
      <v-card class="card__app d-flex" max-width="100%">
        <v-carousel cycle height="300" hide-delimiter-background>
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>
        <v-card-text class="card__text">
          <v-card-title>
            <div class="card__title">
              <h1 class="caption">{{CourtData.courtInfo.courtName}}</h1>
            </div>
          </v-card-title>
          <v-spacer></v-spacer>
          <v-card-subtitle>
            <p>
              <span class="active2">Number of courts: </span>2
            </p>
            <p>
              <span class="active2">Address: </span>{{CourtData.courtInfo.address}}
            </p>
            <p> 
              <span class="active2">Price:</span> {{CourtData.courtInfo.price}}€/h
            </p>
          </v-card-subtitle>
          <div class="book" v-if="loggedIn">
            <v-btn 
              icon 
              class="icon" 
              v-if="loggedIn"
              @click="colortoggle = !colortoggle">
              <v-icon :color="colorSwitch" class="icon-link">
                mdi-heart
              </v-icon>
            </v-btn>
            <button rounded class="book-btn" @click.prevent="booking(CourtData)">
              booking
            </button>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
  import Header from "@/services/auth-header";

  export default {
    name: 'CourtCardData',
    props: ['CourtData'],
    data() {
      return {
        colortoggle: false,
        
        items: [
          {
            src: require("@/assets/images/court_1.jpg")
          },
          {
            src: require("@/assets/images/court_2.jpg")
          },
          {
            src: require("@/assets/images/court_3.jpg")
          }
        ]
      }
    },
    methods: {
      booking(value) {
        this.$store.dispatch('searching/booking', {
          user: Header.userId(),
          court: value.courtInfo.courtid0,
          bookingStartTime: value.courtTime.startTime,  
          bookingEndTime: value.courtTime.endTime,
          isActive: true  
        });
      }
    },
    computed: {
      loggedIn() {
        return this.$store.state.userAuth.status.loggedIn;
      },
      colorSwitch() {
        return this.colortoggle ? "red" : "white";
      },
    },
  }
</script>

<style lang="scss" scoped>
.app {
  width: 100%;
  padding: 2em 0 5em 0;

  .app__content {
    .card__app {
      flex-direction: column;
      background-color: #d9d9d9 !important;
      background-image: linear-gradient(315deg, #d9d9d9 0%, #f6f2f2 74%) !important;
      padding: 0.5em;

      .card__text {
        .v-card__title {
          .card__title{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;

            .caption {
              width: 80%;
              font-weight: bold;
              font-size: 1rem !important;
            }
          }
        }

        .book{
          display: flex;
          justify-content: flex-end;
          align-items: center;

          .book-btn{
            border: 1px solid rgb(0 0 0 / 50%);
            padding: 10px 20px;
            border-radius: 50px;
            box-shadow: inset 0px 5px 15px 2px rgb(0 0 0 / 50%);
            color: #ffffff;
            background-color: #2f4353; 
          }
        }
      }
    }
  }
}
// .card__img {
//   height: 300px;
//   width: 40%;
// }
.icon {
  border: 1px solid #2f4353;
  background: #2f4353;
  margin-right: 20px;
  box-shadow: inset 0px 5px 15px 2px rgb(0 0 0 / 50%);
}
.active2{
  color: lightslategray;
  font-weight: bold;
}
.icon-link {
  margin-bottom: -4px;
  color: red;
}
</style>