<template>
  <section class="slide__box">
    <div class="slider">
      <div class="card_1 blue-grey darken-4 elevation-10" v-for="service in services" :key="service.id" :style="{ transform: calcTransform}">
        <div class="card__image elevation-10">
          <img :src="service.serviceImg" class="product__image" alt="">
          <div class="button__container">
            <div class="services__card__content">
              <p class="card__content__copy">{{service.serviceDis}}</p>
              <button class="card__content__btn">Learn More</button>
            </div>
          </div>
        </div>
        <div class="card__type blue-grey darken-4 white--text">
          <p>{{service.serviceType}}</p>
        </div>
      </div>
    </div>

    <div class="transform__next" v-if="isNextButtonShow">
      <v-btn
        class="mx-2 btn__type shadow-lg"
        fab
        dark
        small
        @click="slideNext"
        color="#2f4353">
        <v-icon dark>
          mdi-menu-right
        </v-icon>
      </v-btn>
    </div>

    <div class="transform__prev" v-if="isPrevButtonShow">
      <v-btn
        class="mx-2 btn__type shadow-lg"
        fab
        dark
        small
        @click="slidePrev"
        color="#2f4353">
        <v-icon dark>
          mdi-menu-left
        </v-icon>
      </v-btn>
    </div>

  </section>
</template>

<script>
  export default {
    name: 'TypeServices',
    data() {
      return {
        services: [
          {
            id: 1,
            serviceType: "Find a coach",
            serviceDis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, enim.',
            serviceImg: require('@/assets/images/find_coach.jpg')
          },
          {
            id: 2,
            serviceType: "Find a court",
            serviceDis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, enim.',
            serviceImg: require('@/assets/images/find_court.jpg')
          },
          {
            id: 3,
            serviceType: "Find a player",
            serviceDis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, enim.',
            serviceImg: require('@/assets/images/find_player.jpg')
          },
          {
            id: 4,
            serviceType: "Shopping equipment",
            serviceDis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, enim.',
            serviceImg: require('@/assets/images/shopping_equipment.jpg')
          }
        ],
        counter: 0
      }
    },
    methods: {
      slideNext() {
        this.counter++
      },
      slidePrev() {
        this.counter--
      }
    },
    computed: {
      isPrevButtonShow() {
        return (this.counter <= 0 ? false : true);
      },
      isNextButtonShow() {
        return (this.counter+1 >= this.services.length ? false : true);
      },
      calcTransform() {
        return `translateX(-${this.counter*110}%)`;
      }

    }
  }
</script>

<style lang="scss" scoped>
.slide__box {
  width: 95%;
  margin: 20px auto;
  position: relative;
}
.slider {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 10px 10px;
  border: 2px solid white;
  border-radius: 20px;
  // box-shadow: 0px 0px 146px 17px rgba(0,0,0,0.36) inset;
}
.card_1 {
  border-radius: 20px;
  margin-right: 22px;
  transition: all .4s ease-in-out;
}
.card__image {
  position: relative;
  width: 230px;
  height: 300px;
  overflow: hidden;
  border-radius: 20px;
}
.product__image {
  width: 100%;
  height: 100%;
  background-size: cover;
  object-fit: cover;
  border-radius: 20px;
}
.card__type {
  border-radius: 20px;
  padding: 18px 20px 8px 20px;
}
.card__type p {
  font-size: 1em;
  font-weight: bold;
  letter-spacing: 1.2px;
}
.button__container {
  position: absolute;
  top: 400px;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.009) 11.7%,
    rgba(0, 0, 0, 0.034) 22.1%,
    rgba(0, 0, 0, 0.072) 31.2%,
    rgba(0, 0, 0, 0.123) 39.4%,
    rgba(0, 0, 0, 0.182) 46.6%,
    rgba(0, 0, 0, 0.249) 53.1%,
    rgba(0, 0, 0, 0.32) 58.9%,
    rgba(0, 0, 0, 0.394) 64.3%,
    rgba(0, 0, 0, 0.468) 69.3%,
    rgba(0, 0, 0, 0.54) 74.1%,
    rgba(0, 0, 0, 0.607) 78.8%,
    rgba(0, 0, 0, 0.668) 83.6%,
    rgba(0, 0, 0, 0.721) 88.7%,
    rgba(0, 0, 0, 0.762) 94.1%,
    rgba(0, 0, 0, 0.79) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .4s ease-in-out;
}
.card__image:hover > .button__container {
  top: 0;
}
.transform__next {
  position: absolute;
  top: 140px;
  right: -24px;
}
.transform__prev {
  position: absolute;
  top: 140px;
  left: -20px;
}
.btn__type {
  padding: 15px 10px;
  outline: none;
  border: none;
  border-radius: 100%;
}
.services__card__content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
  transition: transform 700ms cubic-bezier(0.19, 1, 0.22, 1);
  z-index: 1;
}
.services__card__content > * + * {
  margin-top: 1rem;
}
.title {
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1.2;
}
.card__content__copy {
  font-family: "Cardo", serif;
  font-size: 1rem;
  margin-left: 5px;
  color: #ffffff;
  font-style: italic;
  line-height: 1.35;
}
.card__content__btn {
  cursor: pointer;
  margin-top: 1.5rem;
  padding: 0.75rem 1.3rem;
  font-size: 0.65rem;
  font-weight: bold;
  letter-spacing: 0.025rem;
  text-transform: uppercase;
  color: #2f2f2f;
  background-color: #ffffff;
  border: none;
  border-radius: 5px;
}
.card__content__btn:hover {
  background-color: rgba(255, 255, 255, .9);
}
.card__content__btn:focus {
  outline: 1px dashed #2f2f2f;
  outline-offset: 3px;
}
</style>