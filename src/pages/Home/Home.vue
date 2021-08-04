<template>
  <div class="Home">
    <HeroSection />
    <AboutSection />
    <FooterTow />
  </div>
</template>

<script>
import HeroSection from '@/components/Home/HeroSection'
import AboutSection from '@/components/Home-content/AboutSection'
import FooterTow from '@/components/Finding/FooterTow'


export default {
  name: 'Home',
  components: {
    HeroSection,
    AboutSection,
    FooterTow
  }
}
</script>

<style scoped>

</style>