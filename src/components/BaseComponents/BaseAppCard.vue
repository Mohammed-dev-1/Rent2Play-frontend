<template>
  <div class="app">
    <div class="app__content elevation-2 rounded-lg">
      <v-card :class="CardsInfo.cardImage" max-width="100%">
        <div class="card__img rounded-lg"></div>
        <v-card-text>
          <v-card-title>
            <h1 class="text__color">{{CardsInfo.cardSubtitle}}</h1>
          </v-card-title>
          <v-spacer></v-spacer>
          <v-card-subtitle>
            <p class="text__color">
              {{CardsInfo.cardTitle}}
            </p>
          </v-card-subtitle>
          <v-btn 
            class="ml-3" 
            dark 
            elevation="2" 
            large 
            outlined 
            rounded
            color="#2f4353"
          >
            Learn more
          </v-btn>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Base',
    props: {
      CardsInfo: Object
    }    
  }
</script>

<style scoped>
.app {
  padding: 2em 0;
}
.app__content{
  background: #d9d9d9 !important;
}
.card__app{
  padding: 0.5em;  
  background-color: #d9d9d9 !important;
  background-image: linear-gradient(315deg, #d9d9d9 0%, #f6f2f2 74%) !important;
}
.card__img {
  background-image:  linear-gradient(
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
  ),  url('@/assets/images/Add_your_court.jpg') !important; 
  background-size: cover;
  height: 300px;
}
.card__img2 {
  background-image:  linear-gradient(
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
  ),  url('@/assets/images/mobile_app.jpg') !important; 
  background-size: cover;
  height: 300px;
}
.text__color{
  color: #2f4353 !important;
}
.btn__app{
  background: #2f4353;
}
</style>