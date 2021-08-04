<template>
  <section>
    <v-navigation-drawer v-model="drawer" class="nav" dark expand-on-hover permanent absolute>
    <router-link :to="{ name: 'Home' }">
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="../../../public/favicon.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>Rent2Play</v-list-item-title>

        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
    </router-link>
  
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link router :to="item.url">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </section>
</template>

<script>

  export default {
    name: "SideBar",
      components: {
      },
      data: () => ({
       drawer: true,
        items: [
          { 
            title: 'DashBoard', 
            icon: 'mdi-view-dashboard', 
            url: '/user_profile/dashboard'
          },
          { 
            title: 'Booking', 
            icon: 'mdi-bookmark-check',
            url: '/user_profile/user_booking' 
          },
          { 
            title: 'Users', 
            icon: 'mdi-account-group-outline' 
          },
        ],
      }),
  };
</script>

<style scoped>
.top__caption {
  color: #ffffff;
  font-family: "Revalia", cursive;
}
.dashBoard {
  height: 100vh;
}
.nav{
  background: #2f4353 !important;
}
</style>
