<template>
  <section>
    <Nav />

    <div class="login">
      <v-form
        class="form__login"
        ref="form"
        @submit.prevent="login"
        lazy-validation
      >
        <div class="sub">
          <h1 class="form__sub">Login</h1>
        </div>
        <div class="input__group">
          <div class="input" v-if="ShowError">
            <div class="user__error" :class="{ user__login__isWorking: LoginIsWorking }">{{TextError}}</div>
          </div>
          <div class="input">
            <input type="text" v-model="email" placeholder="Email" />
          </div>
          <div class="input">
            <div class="toggle" @click="toggleType">
              <v-icon>mdi-eye</v-icon>
            </div>
            <input :type="type" v-model="password" placeholder="Password" />
          </div>
          <p>{{ error }}</p>
          <div class="agree">
            <div class="form__button">
              <button class="btn">Login</button>
            </div>
            <div class="toggle__form">
              <router-link :to="{ name: 'sign_up_first' }" class="title">
                You don't have an account ?
              </router-link>
            </div>
          </div>
        </div>
      </v-form>
    </div>

    <!-- Footer section -->
    <FooterTow />

    <!-- Background style -->
    <div class="bg-cliping-1"></div>
  </section>
</template>

<script>
import Nav from "@/components/Home/Nav";
import FooterTow from "@/components/Finding/FooterTow";

export default {
  name: "Login",
  components: {
    FooterTow,
    Nav
},
  data() {
    return {
      email: "",
      password: "",
      error: "",
      ShowError: false,
      LoginIsWorking: false,
      type: "password",
      TextError: "",
      reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    };
  },
  methods: {
    login() {
      if(!this.email && !this.password) {
        this.ShowError = true;
        this.TextError = "Please complete the fields !"
      } else
      if(!this.email) {
        this.ShowError = true;
        this.TextError = "Please enter your email"
      } else
      if(!this.reg.test(this.email)){
        this.ShowError = true;
        this.TextError = "Email is not required !"
      } else 
      if(!this.password) {
        this.ShowError = true;
        this.TextError = "Please enter your password !"
      } else
      if(this.password.length < 9) {
        this.ShowError = true;
        this.TextError = "Your password is less than 9 !"
      } else
      if(this.password.length > 18) {
        this.ShowError = true;
        this.TextError = "Your password is greater than 18 characters !"
      } 
      else{
        this.ShowError = true;
        this.LoginIsWorking = true

        this.TextError = "Everything is working please wait !"
        this.$store
          .dispatch("userAuth/logIn", {
            email: this.email,
            password: this.password
          })
          .then(
            res => {
              if(res) this.$router.push({ name: 'Home' });
            },
            err => {
              if(err) {
                this.LoginIsWorking = false;
                this.ShowError = true;
                this.TextError = 'User not found!';
                // this.TextError = (err.response.data && err.response) || err.message || err.toString();            
              }
            }
          )
      }
    },
    toggleType() {
      this.type = this.type === "password" ? "text" : 'password'
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  background-color: #d9d9d9;
  background-image: linear-gradient(315deg, #d9d9d9 0%, #f6f2f2 74%);
  position: relative;

  .bg-cliping-1 {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: #2f4353;
    clip-path: polygon(100% 0, 0 0, 0 100%);
    z-index: -1;
  }

  .login {
    padding-bottom: 6em;
    display: flex;
    justify-content: center;
    align-items: center;
  
    .form__login {
      width: 80%;
      margin-top: 150px;
      padding: 20px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      border-radius: 10px;
      border: 1px solid #f5f5f5;
      background: #d9d9d9;
      box-shadow: -2px 5px 7px rgb(0 0 0 / 50%);
    
      .sub {
        border-bottom: 1px solid #2f4353;
        display: flex;
        justify-content: center;
        align-items: center;
         
        .form__sub {
          color: #2f4353;
          font-weight: bold;
        } 
      }

      .input__group {
        width: 80%;
        padding-top: 20px;

        .input {
          padding: 10px 0;
          position: relative;

          .toggle{
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 18px;
            right: 18px;
            width: 30px;
            height: 30px;
            user-select: none;
          }

          input {
            width: 100%;
            background: #efefef;
            padding: 10px 15px;
            border: 1px solid #f5f5f5;
            border-radius: 8px;
            outline: none;
          }
        }

        .agree {
          display: flex;
          align-items: self-start;
          justify-content: flex-start;
          flex-direction: column;
        
          .form__button {
            width: 100%;

            .btn {
              display: flex;
              align-items: center;
              justify-content: space-around;
              margin-top: 10px;
              color: #ffffff;
              background: #2f4353;
              padding: 10px 0;
              width: 100%;
              border-radius: 10px;
            }
          }
        }
      }
    }

  }
}
.user__error{
  padding: 12px;
  padding-left: 25px;
  background: lightcoral;
  color: #ffffff;
  border-radius: 10px;
  font-weight: lighter;
  letter-spacing: 1px;
}
.user__login__isWorking {
  background: lightgreen;
  color: lightslategray;
  font-weight: bold;
}

.toggle__form {
  padding-top: 10px;
  .title {
    letter-spacing: 1px !important;
    font-weight: 300;
    color: #2f4353;
    font-size: 1rem !important;
}
}

@media screen and (min-width: 748px) {
  section {
    .login {
      .form__login {
        width: 50%;
      }
    }
  }
}
</style>
