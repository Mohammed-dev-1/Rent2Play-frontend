<template>
  <section>
    <!-- ==NavBar for user registration== -->
    <Nav />
    <!-- ==End of nav== -->

    <!-- ==Form for user registration== -->
    <div class="signUp">
      <v-form
        class="form__signup"
        @submit.prevent="register"
        lazy-validation
      >
        <!-- ==Form register subtitle== -->
        <div class="sub">
          <h1 class="form__sub">{{currentTitle}}</h1>
        </div>

        <!-- ==Form content with slideContent== -->
        <v-window v-model="step">
          <!-- ==Form window-1== -->
          <v-window-item :value="1">
            <div class="input__group">
              <div class="input">
                <input type="text" v-model="user.firstName" placeholder="First name" />
              </div>
              <div class="input">
                <input type="text" v-model="user.lastName" placeholder="Last name" />
              </div>
              <div class="input">
                <input type="text" v-model="user.age" placeholder="Your age" />
              </div>
              <div class="agree__title">
                <router-link :to="{ name: 'log_in' }" class="title">
                  Already have an account ?
                </router-link>
              </div>

              <!-- ==Form next button== -->
              <v-btn
                dark
                larg
                class="mr-4"
                :disabled="chackContinueFirstButton"
                color="#2f4353"
                depressed
                @click="chackContinueValidate"
              >Continue</v-btn>
              <v-btn larg :disabled="step === 1" text @click="step--">Back</v-btn>
            </div>
          </v-window-item>

          <!-- ==Form window-2== -->
          <v-window-item :value="2">
            <div class="input__group">
              <div class="input">
                <input type="text" v-model="user.email" placeholder="Email" />
              </div>
              <div class="input">
                <input type="text" v-model="user.phoneNumber" placeholder="Phone number" />
              </div>
              <div class="input">
                <v-select
                  v-model="user.category"
                  :items="categorys_list"
                  menu-props="auto"
                  solo
                  color="white"
                  label="Category"
                  hide-details
                  single-line
                ></v-select>
              </div>
              <v-checkbox 
                class="pb-2" 
                v-model="user.isAdmin" 
                label="Admin" 
                color="info" 
                hide-details>
              </v-checkbox>
              <!-- ==Form next button== -->
              <v-btn
                dark
                larg
                class="mr-4 mt-2"
                :disabled="chackContinueSecondButton"
                color="#2f4353"
                depressed
                @click="chackContinueSecondValidate"
              >Continue</v-btn>
              <v-btn larg class="mt-2" :disabled="step === 1" text @click="step--">Back</v-btn>
            </div>
          </v-window-item>

          <!-- ==Form window-3== -->
          <v-window-item :value="3">
            <div class="input__group">
              <div class="input">
                <input type="password" v-model="user.password" placeholder="Password" />
              </div>
              <div class="input">
                <input type="password" v-model="confirmPassword" placeholder="Confirm password" />
              </div>
              <v-btn 
                larg class="mt-4" 
                type="submit" 
                dark 
                color="#2f4353"
                :disabled="chackContinueThirdButton">Sign up</v-btn>
              <v-btn 
                larg 
                class="mt-4" 
                :disabled="step === 1" 
                text 
                @click="step--">Back</v-btn>
            </div>
          </v-window-item>
        </v-window>
      </v-form>
    </div>
    <v-snackbar  left shaped top :color="registerSuccess ? 'success' : 'warning' " v-model="snackbar">
        {{ alertMessage }}
        <template v-slot:action="{ attrs }">
          <v-btn color="white" text v-bind="attrs" @click="snackbar = false">Close</v-btn>
        </template>
    </v-snackbar>
    <FooterTow />
  </section>
</template>

<script>
import Nav from "@/components/Home/Nav";
import FooterTow from "@/components/Finding/FooterTow";
import User from "@/services/Models/user";

export default {
  name: "Sign_up_first",
  components: {
    FooterTow,
    Nav
  },
  data() {
    return{
      user: new User('','','','','','','','',),
      confirmPassword: '',
      registerSuccess: false,
      alertMessage: '',
      step: 0,   
      snackbar: false,
      reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      regNumber: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
      categorys_list: ['Pro', 'Amateur']
    }
  },
  computed: {
    currentTitle () {
      switch (this.step) {
        case 1: return 'Step 1'
        case 2: return 'Step 2'
        default: return 'Step 3'
      }
    },
    chackContinueFirstButton() {
       return (!this.user.firstName || !this.user.lastName || !this.user.age)
        ? true : false;
    },
    chackContinueSecondButton() {
      return (!this.user.email || !this.user.phoneNumber || !this.user.category)
        ? true : false;
    },
    chackContinueThirdButton() {
      if(!this.user.password || !this.confirmPassword) {
        return true;
      } else if(this.user.password != this.confirmPassword){
        return true;
      } else if(this.user.password.length < 9 && this.user.confirmPassword.length < 9) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    chackContinueValidate() {
      this.step += 1;
      if(!this.regNumber.test(this.user.age)) {
          this.step -= 1;
          this.alertMessage = "Age is not require !!";
          this.snackbar = true;
          setTimeout(()=> {
            this.snackbar = false;
          }, 5000);
      } else if(this.user.age < 10) {
          this.step -= 1;
          this.alertMessage = "You can't register if your age is less than 10";
          this.snackbar = true;
          setTimeout(()=> {
            this.snackbar = false;
          }, 5000);
      }    
    },
    chackContinueSecondValidate() {
      this.step += 1;
      if(!this.reg.test(this.user.email)) {
        this.step -= 1;
        this.alertMessage = "Email is not require !";
        this.snackbar = true;
          setTimeout(()=> {
            this.snackbar = false;
          }, 5000);
      } else if(!this.regNumber.test(this.user.phoneNumber)){
        this.step -= 1;
        this.alertMessage = "Phone number is not require !";
        this.snackbar = true;
          setTimeout(()=> {
            this.snackbar = false;
          }, 5000);
      }

      return this.step;
    },
    register() {
      this.$store.dispatch('userAuth/register', this.user)
      .then(
        () => {
          const resFname = this.$store.state.userAuth.user.firstName;
          const resLname = this.$store.state.userAuth.user.lastName;
          this.alertMessage = `Welecome ${resFname} ${resLname}`;
          this.registerSuccess = true;
          this.snackbar = true;
            setTimeout(()=> {
              this.snackbar = false;
              this.registerSuccess = false;
              this.$router.push({ name: 'Home' })
            }, 1000);          
        },
        err => {
          this.alertMessage = (err.response.data && err.response) || err.message || err.toString();
          this.snackbar = true;
            setTimeout(()=> {
              this.snackbar = false;
            }, 5000);
        }
      )          
    },
  }
};
</script>

<style lang="scss" scoped>
section {
  background-color: #d9d9d9;
  background-image: linear-gradient(315deg, #d9d9d9 0%, #f6f2f2 74%);

  .signUp {
    padding-bottom: 6em;
    display: flex;
    justify-content: center;
    align-items: center;

    .form__signup {
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

      .v-window {
        width: 100%;

        .v-window-item {
          display: flex;
          justify-content: center;
          align-items: center;

          .input__group {
            width: 80%;
            padding-top: 20px;

            .input {
              position: relative;
              padding: 10px 0;
              input {
                width: 100%;
                background: #efefef;
                padding: 10px 15px;
                border: 1px solid #f5f5f5;
                border-radius: 8px;
                outline: none;
              }
            }
            .agree__title {
              padding-top: 5px;
              padding-bottom: 20px;
              .title {
                letter-spacing: 1px !important;
                font-weight: 300;
                color: #2f4353;
                font-size: 1rem !important;
              }
            }
          }
        }
      }
    }
  }
}
.btn {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
  color: #ffffff;
  background: #2f4353;
  padding: 10px 11em;
  border-radius: 10px;
}
.btn_icon {
  width: 100%;
  height: 100%;
  margin-left: -30px;
}

@media screen and (min-width: 748px) {
  section {
    .signUp {
      .form__signup {
        width: 50%;
      }
    }
  }
}
</style>
