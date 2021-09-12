<template>
  <v-card color="#2f4353" dark>
    <form class="form" @submit.prevent="findCourt">
      <!-- Model Subtitle -->
      <v-card-title 
        class="headline #2f4353"
      >
        Find a game
      </v-card-title>

      <!-- Model Content -->
      <v-card-text>
        <!-- Location select model -->
        <v-select
          v-model="selectLocation"
          :items="court_data_location"
          menu-props="auto"
          label="Where are you from ?"
          hide-details
          prepend-icon="mdi-map"
          single-line
        ></v-select>
        
        <br />
        
        <!-- Start time and End Time Picker -->
        <div class="d-flex">
          <!-- Start Time Select model -->
          <v-datetime-picker
            label="Select Start time"
            v-model="startTime"
          ></v-datetime-picker>
          
          <v-spacer></v-spacer>
          
          <!-- End Time select model -->
          <v-datetime-picker
            label="Select End time"
            v-model="endTime"
          >
          </v-datetime-picker>
        </div>
        <!-- Sport select model -->
        <v-select
          v-model="sport"
          :items="court_data_sports"
          menu-props="auto"
          label="Add a sport"
          hide-details
          single-line
        ></v-select>
      </v-card-text>

      <v-divider></v-divider>

      <!-- Button submit model -->
      <v-card-actions class="border-none" v-if="buttonShow">
        <v-spacer></v-spacer>
        <v-btn 
          @click="dialog = false" 
          :disabled="chackSearchInput"
          color="success" 
          type="submit">
          Find
        </v-btn>
      </v-card-actions>
    </form>
  </v-card>
</template>

<script>
  export default {
    name: 'PopupSearch',
    data() {
      return {

      }
    }
  }
</script>

<style scoped>

</style>