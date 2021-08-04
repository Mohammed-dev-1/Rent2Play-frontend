<template>
  <header :class="{ nav__bg__active: navHeight }">
    <nav>
      <div class="top__nav">
        <div class="logo__nav">
          <p class="logo">
            <router-link class="logo" :to="{ name: 'Home' }">
              Rent2play
            </router-link>
          </p>
        </div>
        <div class="open__button" @click="toggle">
         <i class="mdi mdi-menu-down"></i>
        </div>
      </div>

      <ul class="nav__list" :class="{ nav__active: isActive }">
        <li class="nav__item" :class="{ item__active: isActive }" @click="toggle">
          <router-link :class="{ item__active: isActive }" class="nav__link" :to="{ name: 'Home' }">
            Player
          </router-link>
        </li>
        <li class="nav__item" :class="{ item__active: isActive }" @click="toggle">
          <router-link :class="{ item__active: isActive }" class="nav__link" :to="{ name: 'Home' }">
            Owner
          </router-link>
        </li>
        <li v-if="loggedIn" class="nav__item" :class="{ item__active: isActive }" @click="toggle">
          <router-link :class="{ item__active: isActive }" class="nav__link" :to="{ name: 'dashboard' }">
            Profile
          </router-link>
        </li>
        <li v-if="!loggedIn" class="nav__item" :class="{ item__active: isActive }" @click="toggle">
          <router-link :class="{ item__active: isActive }" class="nav__link" :to="{ name: 'log_in' }">
            Login
          </router-link>
        </li>
        <li v-if="!loggedIn" class="nav__item sign-btn" :class="{ item__active: isActive }" @click="toggle">
          <router-link :class="{ item__active: isActive }" class="nav__link" :to="{ name: 'sign_up' }">
            Sign up
          </router-link>
        </li>
        <li v-if="loggedIn" class="nav__item" :class="{ item__active: isActive }" @click="logout">
          Log out
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      isActive: false,
      navHeight: false
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.userAuth.status.loggedIn;
    },
  },
  mounted() {
    window.document.onscroll = () => {
      this.navHeight = (pageYOffset >= 56) ? true : false;
    }
  },
  methods: {
    logout(e) {
      e.preventDefault();

      this.$store.dispatch('userAuth/logout');
    },
    toggle() {
      this.isActive = !this.isActive;
      if(this.navHeight || this.isActive) {
        this.navHeight = true;
      }
    },
    reSize() {
      this.isActive = window.innerWidth <= 700;
    },
  },
  created() {
    // this.reSize();
    // window.addEventListener("resize", this.reSize);
  }
}
</script>

<style scoped>
header {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 65px;
  z-index: 1000;
}
nav {
  position: relative;
  height: 100%;
}
.top__nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 100%;
  margin: 0 auto;
}
.logo {
  letter-spacing: 1px;
  font-size: 1.1rem;
  color: #ffffff;
  margin-bottom: 0;
}
.open__button {
  font-size: 2rem;
  color: #ffffff;
}
.nav__list {
  position: absolute;
  height: 0;
  width: 100%;
  top: 65px;
  left: 0;
  background: #ffffff;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: .5s ease-in-out;
}
.nav__item {
  opacity: 0;
  padding: 13px 0;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 1px;
  user-select: none;
  transition: .2s ease-out;
}
.nav__link {
  color: #2f4353;
  padding-bottom: 5px;
  transition: 1s ease-in;
  opacity: 0;
}
.nav__link:hover {
  border-bottom: 1px solid #2f4353;
  color: rgba(0, 0, 0, 0.8);
}
.nav__active {
  padding: 0;
  height: 40vh;
  border-bottom: 1px solid rgba(0, 0, 0, 0.9);
}
.item__active {
  opacity: 1;
}
.nav__bg__active {
  background: #ffffff;
  box-shadow: 2px 0px 15px 2px rgb(0 0 0 / 25%);
  transition: .3s linear;
}
.nav__bg__active .logo,
.nav__bg__active .open__button {
  color: #2f4353;
  font-weight: bold;
}
@media screen and (min-width: 700px) {
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 20px auto;
  }
  .top__nav {
    width: 40%;
  }
  .nav__list {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    position: static;
    background: none; 
    border: none;
  }
  .nav__item {
    opacity: 1;
    padding: 0 10px;
  }
  .nav__link {
    opacity: 1;
    color: #ffffff;
  }
  .sign-btn {
    border-radius: 20px;
    background: #ffffff;
    padding: 6px 15px;
  }
  .sign-btn .nav__link {
    color: #2f4353;
  }
  .open__button {
    display: none;
  }
  .nav__bg__active .nav__link {
    color: #2f4353;
  }
  .nav__bg__active .sign-btn {
    background: #2f4353;
  }
  .nav__bg__active .sign-btn .nav__link {
    color: #ffffff;
  }
  .nav__bg__active nav {
    margin: 0 auto;
  }
}
@media screen and (min-width: 900px) {
  .nav__list { width: 50%; }
  .top__nav { width: 50%; }
}
</style>