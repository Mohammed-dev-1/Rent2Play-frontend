<template>
  <header class="elevation-5">
    <div class="nav__search">
      <div class="search__input">
        <input type="text" class="input" placeholder="search.." />
        <div class="search__icon">
          <v-icon>mdi-magnify</v-icon>
        </div>
      </div>
    </div>

    <nav>
      <ul>
        <li class="icons__mail">
          <i class="bx bx-mail-send"></i>
        </li>
        <li>
          <v-menu bottom min-width="200px" rounded offset-y>
            <template v-slot:activator="{ on }">
              <v-btn icon x-large v-on="on">
                <v-avatar color="brown" size="40">
                  <v-img src="../../../public/avatar3.png"></v-img>
                </v-avatar>
              </v-btn>
            </template>
            <v-card>
              <v-list-item-content class="justify-center">
                <div class="mx-auto text-center">
                  <v-avatar color="brown">
                    <v-img src="../../../public/avatar3.png"></v-img>
                  </v-avatar>
                  <h3>{{userInfo.firstName}}  {{userInfo.lastName}}</h3>
                  <p class="caption mt-1">{{ userInfo.email }}</p>
                  <v-divider class="my-3"></v-divider>
                  <v-btn depressed rounded text>Edit Account</v-btn>
                  <v-divider class="my-3"></v-divider>
                  <v-btn @click="Disconnect" depressed rounded text>Disconnect</v-btn>
                </div>
              </v-list-item-content>
            </v-card>
          </v-menu>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'UserTopNav',
    data() {
      return {
      }
    },
    computed: {
      userInfo() {
        return this.$store.state.userAuth.user;
      }
    },
    methods: {
      Disconnect() {
        this.$store.dispatch('userAuth/logout')
          .then(() => this.$router.push({ name: 'Home' }));
      }
    }
  }
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 80%;
  margin: 15px auto;
  padding: 7px 10px;
  border-radius: 15px;
  background-color: #d9d9d9;
  background-image: linear-gradient(315deg, #d9d9d9 0%, #f6f2f2 74%);

}
.nav__search {
  width: 40%;
}
.search__input {
  background: #ffffff;

  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 2px;
  border-radius: 50px;
}
.search__icon {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  padding: 4px;
  left: 88%;
}
.icons__mail {
  border: 1px solid black;
  border-radius: 100%;
  background: #ffffff;
}
.bx {
  padding: 6.5px;
  color: black;
  font-size: 1.5em;
}
input {
  padding: 4px 0 4px 5px;
  border: none;
  border-radius: 50px;
  width: 100%;
}
input::placeholder {
  padding-left: 5px;
  font-size: 13px;
}
nav {
  width: 14%;
}
ul {
  display: flex;
  justify-content: space-between;
  align-items: center;

  list-style: none;
}
</style>