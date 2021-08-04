<template>
  <section id="projects" class="location__content overflow-hidden">
    <div class="site-section mt-5" id="locations-section">
      <div class="container">
        <div class="row ">
          <div class="col-12 mb-5 position-relative">
            <h2 class="section-title text-center mb-4">Top location</h2>
          </div>      
          <div class="col-md-6 mb-4" v-for="location in topLocation" :key="location.id" data-aos="fade-up">
            <div class="location d-flex h-100">
              <div class="location-about">
                <h3>
                  <a href="">{{location.locationName}}</a>
                </h3>
                <p>{{location.locationTitle}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'TopLocation',
    data() {
      return {
        topLocation: [
          {
            id: 1,
            locationName: 'Syria',
            locationTitle: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
          },
          {
            id: 2,
            locationName: 'Denmark',
            locationTitle: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
          },
          {
            id: 3,
            locationName: 'Germany',
            locationTitle: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
          },
          {
            id: 4,
            locationName: 'USA',
            locationTitle: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
          },
          {
            id: 5,
            locationName: 'Spain',
            locationTitle: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
          }
        ],
      }
    }
  }
</script>

<style lang="scss" scoped>
 .section-title {
    position: relative;
    font-size: 1.8rem;
    padding-bottom: 20px;
    font-family: 'Antonio';
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      background: #7ee8fa;
      width: 50px;
    }
    &.text-center {
      &:after {
        left: 50%;
        transform: translateX(-50%);
      }	&:after {
        background: #7ee8fa;
      }
    }
  }
  .position-relative {
    position: relative;
  }
  
  .location {
    padding: 30px;
    background: #ffffff;
    box-shadow: 0 1px 2px 0px rgba(black, .1);
    transition: .3s all ease-in-out;
    top: 0;
    position: relative;
    &:hover {
      box-shadow: 0 8px 50px -5px rgba(black, .1);
      top: -2px;
    }
    .location-number {
      flex: 0 0 60px;
      span {
        position: relative;
        width: 50px;
        height: 50px;
        line-height: 50px;
        border-radius: 50%;
        background: #e3d3c1;
        display: inline-block;
        color: #ffffff;
        text-align: center;	
      }
    }
    .location-about {
      p {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        background-color: #fff;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: transparent;
      }
      }
      *:last-child {
        margin-bottom: 0;
      }
      h3 {
        font-size: 1.2rem;
        margin-bottom: 10px;
      }
    }
</style>