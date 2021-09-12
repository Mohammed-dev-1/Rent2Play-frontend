<template>
  <div class="discover">
    <div class="discover__text">
      <h1 class="discover__title">Discover Experiences</h1>
    </div>

    <ol class="articles">
      <DiscoverCard 
        v-for="card in cards"
        :key="card.id"
        :cardInfo="card"
      />
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'DiscoverCard',
    data() {
      return {
        cards: [
          {
            id: 1,
            title: "Lorem ipsum dolor sit amet.",
            subject: "Meet New people",
            date: "1 Jun 2020"
          },
          {
            id: 2,
            title: "Lorem ipsum dolor sit amet consectetur meet.",
            subject: "Play abord",
            date: "2 Feb 2020"
          },
          {
            id: 3,
            title: "Lorem ipsum dolor sit amet.",
            subject: "Tournaments",
            date: "3 Mar 2020"
          },
        ]
      }
    }
  }
</script>

<style scoped>
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
.articles {
  margin: calc(8px * 2) auto calc(8px * 5);
  display: grid;
  grid-row-gap: calc(8px * 8);
  grid-column-gap: calc(8px * 6);
  grid-template-columns: repeat(auto-fit, minmax(calc(8px * 35), 1fr));
  justify-items: center;
}
</style>