<template>
   <v-app class="profile">
     <UserNavBar />
     <UserTopNav />
     <div class="profile__viewer">
      <router-view></router-view>
     </div>
   </v-app>
</template>

<script>
import UserNavBar from "@/components/UserProfile/UserNavBar"
import UserTopNav from "@/components/UserProfile/UserTopNav"

export default {
  name: 'UserProfile',
  components: {
    UserNavBar,
    UserTopNav
  },
  data: () => ({

  })
}
</script>

<style scoped>
.profile{
  background-color: #d9d9d9;
  background-image: linear-gradient(315deg, #d9d9d9 0%, #f6f2f2 74%);
}
.profile__viewer{
  width: 80%;
  margin: 0 auto;
}
</style>