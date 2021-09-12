<template>
  <footer>
      <div class="footer">
        <div class="footer__content">
          <div class="footer__contentList">
            <ul class="footer__listItem">
              <li><h1>ABOUT</h1></li>
              <li class="footer__item">Made possible by Hosts</li>
              <li class="footer__item">How RENT2PLY works</li>
              <li class="footer__item">Founders' Letter</li>
              <li class="footer__item">HotelTonight</li>
              <li class="footer__item">Careers</li>
            </ul>
          </div>
          <div class="footer__contentList">
            <ul class="footer__listItem">
              <li><h1>COMMUNITY</h1></li>
              <li class="footer__item">Diversity & Belonging</li>
              <li class="footer__item">Guest Referrals</li>
              <li class="footer__item">Frontline Stays</li>
              <li class="footer__item">Accessibility</li>
            </ul>
          </div>
          <div class="footer__contentList">
            <ul class="footer__listItem">
              <li><h1>HOST</h1></li>
              <li class="footer__item">Host an Online Experience</li>
              <li class="footer__item">Responsible hosting</li>
              <li class="footer__item">Host an Experience</li>
              <li class="footer__item">Community Centre</li>
              <li class="footer__item">Resource Centre</li>
              <li class="footer__item">Host your home</li>
            </ul>
          </div>
          <div class="footer__contentList">
            <ul class="footer__listItem">
              <li><h1>SUPPORT</h1></li>
              <li class="footer__item">Our COVID-19 Response</li>
              <li class="footer__item">Neighbourhood Support</li>
              <li class="footer__item">Cancellation options</li>
              <li class="footer__item">Trust & Safety</li>
              <li class="footer__item">Help Centre</li>
            </ul>
          </div>
        </div>
        <hr />
        <div class="footer__icon">
          <ul class="footer__list d-flex">
            <li><i class="bx bxl-facebook-circle"></i></li>
            <li><i class="bx bxl-instagram-alt"></i></li>
            <li><i class="bx bxl-twitter"></i></li>
          </ul>
        </div>
      </div>
    </footer>
</template>

<script>
export default {
  name: 'FooterTow'
}
</script>

<style scoped>
footer {
  background-color: #2F4353;
}
.footer__content {
  padding-top: 2em;
}
.footer__icon {
  padding-top: .7em;
  margin-left: -3%;
  margin-top: 7px;
}
.footer__contentList {
  margin-bottom: 10%;
}
.footer__item {
  font-weight: lighter;
}
.footer__listItem {
  margin-left: -5.5%;
}
.bx {
  font-size: 2em;
  margin-right: 10px;
}
.footer{
   width: 80.041%;
  margin: auto;
}
h1 {
  margin-bottom: 2%;
  font-size: 1.2em;
  font-weight: normal;
  color: #ffffff;
}
ul {
  list-style: none;
}
li {
  color: #ffffff;
}
</style>