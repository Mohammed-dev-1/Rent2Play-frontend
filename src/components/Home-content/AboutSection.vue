<template>
  <section class="about">
    <!-- Top location  -->
    <TopLocation /> 

    <!-- Service type -->
    <TypeServices />
    
    <div class="app">
      <div class="app__content elevation-2 rounded-lg">
        <v-card class="card__app" max-width="100%">
          <div class="card__img rounded-lg"></div>
          <v-card-text class="card__text">
            <v-card-title>
              <h1 class="text__color">Add your court</h1>
            </v-card-title>
            <v-spacer></v-spacer>
            <v-card-subtitle>
              <p class="text__color">
                Exercitation do quis dolore ex enim
                excepteur commodo esse irure aliqua ullamco
                fugiat. Ut magna et ipsum ex dolor minim cillum
              </p>
            </v-card-subtitle>
            <v-btn class="ml-3 btn__app" dark elevation="2" large outlined rounded>Learn more</v-btn>
          </v-card-text>
        </v-card>
      </div>
    </div>

    <!-- for large screen -->
    <div class="discover">
      <div class="discover__text">
        <h1 class="discover__title">Discover Experiences</h1>
      </div>

      <ol class="articles">
        <li class="articles__article" style="--animation-order:1">
          <a class="articles__link">
            <div class="articles__content articles__content--lhs">
              <h2 class="articles__title">Lorem ipsum dolor sit amet consectetur.</h2>
              <div class="articles__footer">
                <p>Meet new people</p>
                <time>1 Jan 2020</time>
              </div>
            </div>
            <div class="articles__content articles__content--rhs" aria-hidden="true">
              <h2 class="articles__title">Lorem ipsum dolor sit amet consectetur.</h2>
              <div class="articles__footer">
                <p>Meet new people</p>
                <time>1 Jan 2020</time>
              </div>
            </div>
          </a>
        </li>
        <li class="articles__article" style="--animation-order:2">
          <a class="articles__link">
            <div class="articles__content articles__content--lhs">
              <h2 class="articles__title">Lorem ipsum dolor sit amet consectetur meet.</h2>
              <div class="articles__footer">
                <p>Play abord</p>
                <time>2 Feb 2020</time>
              </div>
            </div>
            <div class="articles__content articles__content--rhs" aria-hidden="true">
              <h2 class="articles__title">Lorem ipsum dolor sit amet consectetur meet.</h2>
              <div class="articles__footer">
                <p>Play abord</p>
                <time>2 Feb 2020</time>
              </div>
            </div>
          </a>
        </li>
        <li class="articles__article" style="--animation-order:3">
          <a class="articles__link">
            <div class="articles__content articles__content--lhs">
              <h2 class="articles__title">Lorem ipsum dolor sit amet.</h2>
              <div class="articles__footer">
                <p>Tournaments</p>
                <time>3 Mar 2020</time>
              </div>
            </div>
            <div class="articles__content articles__content--rhs" aria-hidden="true">
              <h2 class="articles__title">Lorem ipsum dolor sit amet.</h2>
              <div class="articles__footer">
                <p>Tournaments</p>
                <time>3 Mar 2020</time>
              </div>
            </div>
          </a>
        </li>
      </ol>
    </div>

    <!-- :loading="loading" -->
    <div class="app">
      <div class="app__content elevation-2 rounded-lg">
        <v-card class="card__app" max-width="100%">
          <div class="card__img2 order rounded-lg"></div>
          <v-card-text class="card__text">
            <v-card-title>
              <h1 class="text__color">Mobile app</h1>
            </v-card-title>
            <v-spacer></v-spacer>
            <v-card-subtitle>
              <p class="text__color">
                Exercitation do quis dolore ex enim
                excepteur commodo esse irure aliqua ullamco
                fugiat. Ut magna et ipsum ex dolor minim cillum
              </p>
            </v-card-subtitle>
            <v-btn class="ml-3 btn__app" dark elevation="2" large outlined rounded>Learn more</v-btn>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </section>
</template>

<script>
import TypeServices from "./TypeServices";
import TopLocation from "./TopLocation";

export default {
  name: 'AboutSection',
  components: {
    TopLocation,
    TypeServices
  },
  data() {
    return {
      model: 0,
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Cardo:400i|Rubik:400,700&display=swap");

/* Firts section for top location */ 


.services__card {
  position: relative;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  padding: 1rem;
  width: 100%;
  text-align: center;
  color: whitesmoke;
  background-color: whitesmoke;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1),
    0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1),
    0 16px 16px rgba(0, 0, 0, 0.1);
}
@media (min-width: 600px) {
  .services__card {
    height: 350px;
  }
}
.services__card:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 110%;
  background-size: cover;
  background-position: 0 0;
  transition: transform calc(700ms * 1.5) cubic-bezier(0.19, 1, 0.22, 1);
  pointer-events: none;
}
.services__card:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200%;
  pointer-events: none;
  background-image: linear-gradient(
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
  transform: translateY(-50%);
  transition: transform calc(700ms * 2) cubic-bezier(0.19, 1, 0.22, 1);
}
.services__card:nth-child(1):before {
  background-image: url('../../assets/find_player.jpg');
  background-size: cover;
}
.services__card:nth-child(2):before {
  background-image: url('../../assets/find_coach.jpg');
  background-size: cover;
}
.services__card:nth-child(3):before {
  background-image: url('../../assets/shopping_equipment.jpg');
  background-size: cover;
}
.services__card:nth-child(4):before {
  background-image: url('../../assets/find_court.jpg');
  background-size: cover;
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
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 1.2;
}

.card__content__copy {
  font-family: "Cardo", serif;
  font-size: 1.125rem;
  font-style: italic;
  line-height: 1.35;
}

.card__content__btn {
  cursor: pointer;
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 0.65rem;
  font-weight: bold;
  letter-spacing: 0.025rem;
  text-transform: uppercase;
  color: white;
  background-color: black;
  border: none;
}
.card__content__btn:hover {
  background-color: #0d0d0d;
}
.card__content__btn:focus {
  outline: 1px dashed yellow;
  outline-offset: 3px;
}

@media (hover: hover) and (min-width: 600px) {
  .services__card:after {
    transform: translateY(0);
  }

  .services__card__content {
    transform: translateY(calc(100% - 4.5rem));
  }
  .services__card__content > *:not(.title) {
    opacity: 0;
    transform: translateY(1rem);
    transition: transform 700ms cubic-bezier(0.19, 1, 0.22, 1),
      opacity 700ms cubic-bezier(0.19, 1, 0.22, 1);
  }

  .services__card:hover,
  .services__card:focus-within {
    align-items: center;
  }
  .services__card:hover:before,
  .services__card:focus-within:before {
    transform: translateY(-4%);
  }
  .services__card:hover:after,
  .services__card:focus-within:after {
    transform: translateY(-50%);
  }
  .services__card:hover .services__card__content,
  .services__card:focus-within .services__card__content {
    transform: translateY(0);
  }
  .services__card:hover .services__card__content > *:not(.title),
  .services__card:focus-within .services__card__content > *:not(.title) {
    opacity: 1;
    transform: translateY(0);
    transition-delay: calc(700ms / 8);
  }

  .services__card:focus-within:before,
  .services__card:focus-within:after,
  .services__card:focus-within .services__card__content,
  .services__card:focus-within .services__card__content > *:not(.title) {
    transition-duration: 0s;
  }
}

.services__layout {
  margin-top: 30px;
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  grid-template-rows: 50vh;
  grid-gap: 10px;
}
.app__content{
  background: #d9d9d9 !important;
}
.card__app{
  background-color: #d9d9d9 !important;
  background-image: linear-gradient(315deg, #d9d9d9 0%, #f6f2f2 74%) !important;
}
.about {
  position: relative;
  padding: 10%;
  background: #ffffff;
}
.services {
  padding: 2em 0;
}
.text__color{
  color: #2f4353 !important;
}
.discover {
  padding: 4em 0;
}
.discover__text {
  color: #ffffff;
}
.discover__title{
  color: #2f4353;
  position: relative;
  padding-bottom: 15px;
  margin-bottom: 1.7em;
}
.discover__title::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background: #2f4353;
  width: 100px;
}
.app {
  padding: 2em 0;
}
.btn__app{
  background: #2f4353;
}
.court {
  padding: 2em 0;
}
/* .services__card{
  margin-left: 2%;
} */
.card__app {
  padding: 0.5em;
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
  ),  url('../../assets/Add_your_court.jpg') !important; 
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
  ),  url('../../assets/mobile_app.jpg') !important; 
  background-size: cover;
  height: 300px;
}
.services__content {
  display: flex;
  overflow: hidden;
}
.sub {
  color: #2f4353;
  padding-bottom: 0.7em;
  position: relative;
}
.sub::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background: #2f4353;
  width: 100px;
}
.line2 {
  height: 2px;
  width: 100px;
  background: #ffffff;
  margin-top: -2%;
  margin-bottom: 4%;
}
.line {
  margin-left: 2%;
  height: 2px;
  width: 100px;
  background: #ffffff;
  margin: 3em 0;
}

.upContent {
  width: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.articles {
  margin: calc(8px * 2) auto calc(8px * 5);
  display: grid;
  grid-row-gap: calc(8px * 8);
  grid-column-gap: calc(8px * 6);
  grid-template-columns: repeat(auto-fit, minmax(calc(8px * 35), 1fr));
  justify-items: center;
}

.articles__article {
  cursor: pointer;
  display: block;
  position: relative;
  perspective: 1000px;
  animation-name: animateIn;
  animation-duration: 0.35s;
  animation-delay: calc(var(--animation-order) * 100ms);
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
}

.articles__article:before {
  content: "";
  position: absolute;
  top: calc(8px * -2);
  left: calc(8px * -2);
  border: 2px dashed #d9d9d9;
  background-image: repeating-linear-gradient(
    -24deg,
    transparent,
    transparent 4px,
    rgba(255, 255, 255, 0.5) 0,
    rgba(255, 255, 255, 0.5) 5px
  );
  z-index: -1;
}

.articles__article,
.articles__article:before {
  width: calc(8px * 35);
  height: calc(8px * 35);
}

.articles__link {
  background-color: #2f4353;
  border: 2px solid #d9d9d9;
  display: block;
  width: 100%;
  height: 100%;
}

.articles__link:after {
  content: "";
  position: absolute;
  top: 50%;
  right: calc(8px * 3);
  width: calc(8px * 2);
  height: calc(8px * 2);
  margin-top: calc(8px * -1);
  clip-path: polygon(75% 0, 100% 50%, 75% 100%, 0 100%, 25% 50%, 0 0);
  -webkit-clip-path: polygon(75% 0, 100% 50%, 75% 100%, 0 100%, 25% 50%, 0 0);
  background-color: #d9d9d9;
  opacity: 0;
  transition: opacity 0.5s ease-in, transform 0.3s ease-in-out 0ms;
}

.articles__content {
  background-color: #d9d9d9;
  color: #2f4353;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: calc(8px * 2);
  display: flex;
  flex-direction: column;
  border: 2px solid #d9d9d9;
}

.articles__content--lhs {
  clip-path: polygon(0 0, 51% 0, 51% 100%, 0 100%);
  -webkit-clip-path: polygon(0 0, 51% 0, 51% 100%, 0 100%);
}

.articles__content--rhs {
  clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
  -webkit-clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
  transition: transform 0.5s ease-in-out, background-color 0.4s ease-in-out;
}

.articles__title {
  font-size: calc(8px * 4);
  line-height: 1.125;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.articles__footer {
  margin-top: auto;
  font-size: calc(8px * 2);
  line-height: calc(8px * 2);
  display: flex;
  justify-content: space-between;
}

.articles__link:hover .articles__content--rhs {
  background-color: #f5f5f5;
  transform: rotateY(-50deg);
}

.articles__link:hover:after {
  opacity: 1;
  transform: translateX(calc(8px * 1.5));
  transition: opacity 0.5s ease-in, transform 0.3s ease-in-out 0.25s;
}
@media screen and (max-width: 1045px) {
  .lg-services {
    display: none;
  }
  .sub {
    margin: 2em 0;
  }
}
@media screen and (max-width: 600px) {
  .upContent {
    width: 100%;
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: space-between;
  }
  .articles__article,
  .articles__article:before {
    width: calc(11.3px * 35);
  }
}
@media screen and (max-width: 450px) {
  .articles__article,
  .articles__article:before {
    width: calc(9px * 35);
  }
}
@media screen and (min-width: 900px) and (max-width: 1200px) {
  .articles__article,
  .articles__article:before {
    width: calc(7px * 35);
  }
  .articles {
    margin: calc(8px * 2) auto 0;
    grid-column-gap: calc(1px * 5.9);
  }
  .upContent {
    flex-wrap: wrap;
  }
  .services {
    padding: 0 26px 10em 26px !important;
  }
}
@media screen and (min-width: 600px) {
  .card__app {
    display: flex;
    border-radius: 10px;
    padding: 1em;
  }
  .card__img {
    height: 300px;
    width: 100%;
    order: 1;
  }
  .card__img2 {
    height: 300px;
    width: 100%;
    order: 1;
  }
  .card__c {
    display: flex;
    border-radius: 10px;
  }
  .order {
    order: -1;
  }
  .app {
    padding: 2em 26px;
  }
  .services {
    padding: 3em 26px 4em 26px;
  }
  p {
    font-size: 1.2em;
  }
  .discover {
    padding: 4em 26px;
  }
  /* .discover__text
  .discover__title
  .discover__subtitle */
  .discover__card {
    background: #ffffff;
    color: #233e41;
  }
}
</style>