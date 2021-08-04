<template>
  <section class="d-flex dash">
    <div>
      <v-card width="550" height="180" elevation="5" color="#d9d9d9" class="d-flex">
        <v-card-text>
          <v-progress-circular
            :rotate="360"
            :size="100"
            :width="15"
            :value="value"
            color="teal"
          >{{ value }}</v-progress-circular>
          <v-card-text>
            <p>Tennis Activity</p>
          </v-card-text>
        </v-card-text>
        <v-card-text>
          <v-progress-circular
            :rotate="360"
            :size="100"
            :width="15"
            :value="value"
            color="red"
          >{{ value }}</v-progress-circular>
          <v-card-text>
            <p>Padel Activity</p>
          </v-card-text>
        </v-card-text>
        <v-card-text>
          <v-progress-circular
            :rotate="360"
            :size="100"
            :width="15"
            :value="value"
            color="blue"
          >{{ value }}</v-progress-circular>
          <v-card-text>
            <p>Badminton Activity</p>
          </v-card-text>
        </v-card-text>
      </v-card>
      <v-card width="550" class="mt-4" elevation="5" color="#d9d9d9">
        <div class="caption">
          <v-card-text>Your weekly activity</v-card-text>
        </div>
        <v-card-text>
          <v-sparkline
            :fill="fill"
            :gradient="selectedGradient"
            :line-width="width"
            :padding="padding"
            :smooth="radius || false"
            :labels="day"
            :value="valueSpark"
            auto-draw
          ></v-sparkline>
        </v-card-text>
      </v-card>
    </div>
    <v-card class="timeLine" elevation="5" color="#d9d9d9">
      <v-card-text>
        <v-timeline>
          <v-timeline-item v-for="(year, i) in years" :key="i" :color="year.color" small>
            <template v-slot:opposite>
              <span :class="`font-weight-bold ${year.color}--text`" v-text="year.year"></span>
            </template>
            <div class="py-5">
              <h3 :class="` font-weight-light mb-4 ${year.color}--text`">winner match</h3>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-card>
  </section>
</template>

<script>
  export default {
  name: 'DashBoard',
   data () {
      return {
        interval: {},
        value: 0,
        fill: false,
        selectedGradient: ['#222','#42b3f4'],
        padding: 15,
        radius: 10,
        day: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        valueSpark: [0, 12, 5, 9, 5, 10, 3,],
        width: 2,
         years: [
        {
          color: 'cyan',
          year: 'Tinnes',
        },
        {
          color: 'green',
          year: 'Padel',
        },
        {
          color: 'pink',
          year: 'Badminton',
        },
      ],
      }
    },
    beforeDestroy () {
      clearInterval(this.interval)
    },
    mounted () {
      this.interval = setInterval(() => {
        if (this.value === 100) {
          return (this.value = 0)
        }
        this.value += 10
      }, 1000)
    },
}
</script>

<style scoped>
.caption {
  border-bottom: 2.5px solid #222 !important;
}
.dash{
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 20px;
}
</style>