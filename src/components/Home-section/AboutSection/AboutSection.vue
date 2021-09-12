<template>
  <section class="about">
    <!-- Top location card section -->
    <TopLocation /> 

    <!-- Service type card section -->
    <TypeServices />
    
    <!-- Add your court card section -->
    <BaseAppCard 
      :CardsInfo="cardsInfo[1]"
    />

    <!-- Discover card section -->
    <DiscoverSection />

    <!-- :loading="loading" -->
    <!-- Add your court card section -->
    <BaseAppCard 
      :CardsInfo="cardsInfo[2]"
    />
  </section>
</template>

<script>
import TypeServices from "./TypeServices";
import TopLocation from "./TopLocation";
import DiscoverSection from "./DiscoverSection";

export default {
  name: 'AboutSection',
  components: {
    TopLocation,
    TypeServices,
    DiscoverSection
  },
  data() {
    return {
      model: 0,
      cardsInfo: [
        {
          id: 1,
          cardSubtitle: "Add your court",
          cardTitle: "Exercitation do quis dolore ex enim excepteur commodo esse irure aliqua ullamco fugiat. Ut magna et ipsum ex dolor minim cillum",
          cardImage: "card__img"
        },
        {
          id: 2,
          cardSubtitle: "Mobile app",
          cardTitle: "Exercitation do quis dolore ex enim excepteur commodo esse irure aliqua ullamco fugiat. Ut magna et ipsum ex dolor minim cillum",
          cardImage: "card__img2"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
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
  background-image: url('@/assets/images/find_player.jpg');
  background-size: cover;
}
.services__card:nth-child(2):before {
  background-image: url('@/assets/images/find_coach.jpg');
  background-size: cover;
}
.services__card:nth-child(3):before {
  background-image: url('@/assets/images/shopping_equipment.jpg');
  background-size: cover;
}
.services__card:nth-child(4):before {
  background-image: url('@/assets/images/find_court.jpg');
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

.services__layout {
  margin-top: 30px;
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  grid-template-rows: 50vh;
  grid-gap: 10px;
}
.about {
  position: relative;
  padding: 10%;
  background: #ffffff;
}
.services {
  padding: 2em 0;
}
.court {
  padding: 2em 0;
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
</style>