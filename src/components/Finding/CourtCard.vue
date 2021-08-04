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
                <h1 class="caption">{{court_data.courtInfo.courtName}}</h1>
              </div>
            </v-card-title>
            <v-spacer></v-spacer>
            <v-card-subtitle>
              <p>
                <span class="active2">Number of courts: </span>2
              </p>
              <p>
                <span class="active2">Address: </span>{{court_data.courtInfo.address}}
              </p>
              <p> 
                <span class="active2">Price:</span> {{court_data.courtInfo.price}}€/h
              </p>
            </v-card-subtitle>
            <div class="book" v-if="loggedIn">
              <v-btn 
                icon 
                class="icon" 
                v-if="loggedIn"
                @click="colortoggle = !colortoggle">
                <v-icon :color="colorSwitch()" class="icon-link">
                  mdi-heart
                </v-icon>
              </v-btn>
              <button rounded class="book-btn" @click.prevent="booking(court_data)">
                booking
              </button>
            </div>
          </v-card-text>
        </v-card>
      </div>
    </div>

     <v-snackbar
      :color="bookinStatus ? 'success' : 'red' "
      outlined
      v-model="snackbar"
    >
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
import Header from "../../services/auth-header";

export default {
  name: "CourtCard",
  data() {
    return {
      snackbar: false,
      bookingMessage: '',
      colortoggle: false,
      items: [
        {
          src: require("@/assets/court_1.jpg")
        },
        {
          src: require("@/assets/court_2.jpg")
        },
        {
          src: require("@/assets/court_3.jpg")
        }
      ]
    };
  },
  props: {
    court_data: Object
  },
  methods: {
    colorSwitch() {
      if (this.colortoggle) {
        return "red";
      } else return "white";
    },
    booking(court_data) {
      this.$store.dispatch('searching/booking', {
        user: Header.userId(),
        court: court_data.courtInfo.courtid0,
        bookingStartTime: court_data.courtTime.startTime,  
        bookingEndTime: court_data.courtTime.endTime,
        isActive: true  
      })
      .then(()=> {
        this.bookingMessage = this.$store.state.searching.bookingMessage;
        this.snackbar = true;
        setTimeout(()=> {
          this.snackbar = false;
        }, 2000)
      })
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.userAuth.status.loggedIn;
    },
    bookinStatus() {
      return (this.bookingMessage === 'The booking was created succesfully') ?
        true : false;
    }
  },
  cerated() {
    this.colorSwitch();
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

  .app {
    width: 100%;
    padding: 2em 0 5em 0;
  
    .app__content {
      .card__app {
        flex-direction: column;

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
}
.active {
  font-weight: bold;
}


.card__app{
  background-color: #d9d9d9 !important;
  background-image: linear-gradient(315deg, #d9d9d9 0%, #f6f2f2 74%) !important;
  padding: 0.5em;
}
.card__img {
  height: 300px;
  width: 40%;
}
.order {
  order: -1;
}
.icon {
  border: 1px solid #2f4353;
  background: #2f4353;
  margin-right: 20px;
  box-shadow: inset 0px 5px 15px 2px rgb(0 0 0 / 50%);
}
.icon-link {
  margin-bottom: -4px;
  color: red;
}
.active{
  color: #f55c47;
}
.active2{
  color: lightslategray;
  font-weight: bold;
}
.active3{
  color: #2f4353;
}

@media screen and (min-width: 700px) {
  .contact{
    width: 50%;

    .contact__subtitle{
      justify-content: space-between;
      font-size: 2.4rem;
      width: 50%;
    }

    .chips{
      width: 50%;
    } 
  }
}
</style>
