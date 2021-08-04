<template>
  <section>
    <!-- Court Card Content -->
    <div class="contact">
      <div class="contact__subtitle">
        <span class="active">Your </span>
        <span class="active3">Booking</span>
      </div>

      <div class="app" v-for="court_data in court_data_booking" :key="court_data.id">
        <div class="app__content">
          <v-card class="card__app d-flex" :loading="loading" max-width="100%">
            <v-carousel cycle height="250" hide-delimiter-background>
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
                <h1>{{court_data.courtType}}</h1>
                <v-spacer></v-spacer>
                <v-btn icon class="icon" @click="colortoggle = !colortoggle">
                  <v-icon :color="colorSwitch()" class="icon-link">mdi-heart</v-icon>
                </v-btn>
              </v-card-title>
              <v-spacer></v-spacer>
              <v-card-subtitle>
                <p>
                  <span class="active2">Address:</span>
                  {{court_data.address}}
                </p>
                <p>
                  <span class="active2">Price:</span>
                  {{court_data.price}}
                </p>
              </v-card-subtitle>
            </v-card-text>
          </v-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Find_court',
  components: {
   
  },
  data() {
    return {
      mobileShow: false,
      court_data_booking: this.$store.state.court_booking,

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
    }
  },
  methods: {
    toggleNav() {
      this.mobileShow = window.innerWidth <= 915
    },
    // async courtFetching() {
    //   const res = await fetch('api/courts')

    //   const data = await res.json();

    //   return data
    // }

    colorSwitch() {
      if (this.colortoggle) {
        return "red";
      } else return "white";
    },
    booking() {
      this.$store.dispatch('courtBooking', {
        address: this.court_data.address,
        sport: this.court_data.sport,
        price: this.court_data.price,
        courtType: this.court_data.courtType,
        Type: this.court_data.Type,
        id: this.court_data.id,
      })
    }
  },
  created() {
    this.toggleNav();
    window.addEventListener('resize', this.toggleNav);
    
    // this.court_data_finding = await this.courtFetching();
  },
}
</script>

<style scoped>
.active {
  font-weight: bold;
}
.app {
  width: 66%;
  padding: 2em 0 5em 0;
}
.card__app {
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
  background: #233e41;
  box-shadow: 0px 2px 7px 3px rgb(0 0 0 / 50%);
}
.icon-link {
  margin-bottom: -4px;
  color: red;
}
.book {
  padding-right: 15px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.book-btn {
  border: 1px solid rgb(0 0 0 / 50%);
  padding: 10px 20px;
  border-radius: 50px;
  box-shadow: inset 0px 5px 15px 2px rgb(0 0 0 / 50%);
  color: #ffffff;

  background-color: rgba(211, 211, 86);
}
.contact {
  width: 86.041%;
  margin: 50px auto 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.contact__sub {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40.5%;
  margin-right: 20px;

  letter-spacing: 0.4px;
  font-weight: lighter;
  color: #ffffff;
}
.contact__subtitle {
  text-shadow: -2px 3px 3px rgb(0 0 0 / 50%);

  font-size: 43px;
  font-weight: 700;
  color: #ffffff;
  padding: 20px 0;
}
.active{
  color: #f55c47;
}
.active2 {
  color: lightslategray;
  font-weight: bold;
}
.active3{
  color: #2f4353;
}
.chips {
  margin-top: 10px;
  width: 31%;

  display: flex;
  align-items: center;
  justify-content: space-between;
}
.chip {
  box-shadow: inset 0px 5px 15px 2px rgb(0 0 0 / 50%);
}

/* responsive */
@media screen and (max-width: 740px) {
  .chips {
    width: 65%;
    margin-top: 20px;
  }
  .contact__sub {
    width: 50%;
    margin-top: 20px;
  }
  .app {
    width: 76%;
  }
  .card__app {
    flex-direction: column;
  }
  .icon {
    box-shadow: 0px 1px 8px 2px rgb(0 0 0 / 50%);
  }
}
</style>