<template>
  <section>
    <!-- Wide Screen Navigation -->
    <Nav />
    <!-- Small Screen Navigation -->
    
    <!-- Court Card Content -->
    <div v-if="courtStatus">
      <CourtCard 
        v-for="court_data in court_data_finding" 
        :key="court_data.id" 
        :court_data="court_data" 
      />
    </div>
    
    <CourtAlertMessage v-if="!courtStatus" />

    <!-- Footer section -->
    <FooterTow />
  </section>
</template>

<script>
import Nav from "@/components/Home/Nav";
import CourtCard from "@/components/Finding/CourtCard"
import CourtAlertMessage from "@/components/Finding/CourtAlertMessage"
import FooterTow from "@/components/Finding/FooterTow"


export default {
  name: 'Find_court',
  components: {
    Nav,
    CourtCard,
    CourtAlertMessage,
    FooterTow
  },
  data() {
    return {
      mobileShow: false,
      court_data_finding: JSON.parse(localStorage.getItem('courts')),
      court_data_booking: this.$store.state.court_booking
    }
  },
  methods: {
    toggleNav() {
      this.mobileShow = window.innerWidth <= 915
    },
  },
  computed: {
    courtStatus() {
      return localStorage.getItem('courts') ? true : false;
    }
  },
  created() {
    this.toggleNav();
    window.addEventListener('resize', this.toggleNav);
    
  },
}
</script>

<style scoped>
section{
  background-color: #d9d9d9;
  background-image: linear-gradient(315deg, #d9d9d9 0%, #f6f2f2 74%);
  height: 100%;
}
</style>