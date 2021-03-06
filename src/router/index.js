import Vue from "vue";
import Router from "vue-router";

// Home import
import Home from "@/pages/Home/Home.vue";
import Booking from "@/pages/Home/Booking.vue";
import Find_court from "@/pages/Home/Find_court";

// Auth import
import Sign_up from "@/pages/auth/Sign_up";
import Login from "@/pages/auth/Login";

Vue.use(Router);


const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/sign_up",
      name: "sign_up",
      component: Sign_up,
    },
    {
      path: "/log_in",
      name: "log_in",
      component: Login,
    },
    {
      path: "/booking",
      name: "booking",
      component: Booking
    },
    {
      path: "/find_court",
      name: "find_court",
      component: Find_court,
      props: true
    },
  ],
});

router.beforeEach((to,from,next)=> {
  const publicPages = ['log_in', 'sign_up', 'Home', 'find_court'];  
  const authRequired = !publicPages.includes(to.name)
  const paidToLog = ['log_in', 'sign_up'].includes(to.name);
  const loggedIn = localStorage.getItem('user')

  if(authRequired && !loggedIn) {
    next('/login');
  } else if(paidToLog && loggedIn){
    next('/');
  } else {
    next();
  }
})

export default router;