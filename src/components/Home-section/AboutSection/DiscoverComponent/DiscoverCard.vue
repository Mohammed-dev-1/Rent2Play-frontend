<template>
  <li 
    class="articles__article" 
    style="--animation-order:1"
  >
    <a class="articles__link">
      <div class="articles__content articles__content--lhs">
        <h2 class="articles__title">{{cardInfo.title}}</h2>
        <div class="articles__footer">
          <p>{{cardInfo.subject}}</p>
          <time>{{cardInfo.date}}</time>
        </div>
      </div>
      <div class="articles__content articles__content--rhs" aria-hidden="true">
        <h2 class="articles__title">{{cardInfo.title}}</h2>
        <div class="articles__footer">
          <p>{{cardInfo.subject}}</p>
          <time>{{cardInfo.date}}</time>
        </div>
      </div>
    </a>
  </li>
</template>

<script>
  export default {
    name: 'DiscoverCard',
    props: {
      cardInfo: Object
    }
  }
</script>

<style scoped>
.articles__article {
  cursor: pointer;
  display: block;
  position: relative;
  perspective: 1000px;
  animation-name: animateIn;
  animation-duration: 0.35s;
  animation-delay: calc(var(--animation-order) * 100ms);
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
}

.articles__article:before {
  content: "";
  position: absolute;
  top: calc(8px * -2);
  left: calc(8px * -2);
  border: 2px dashed #d9d9d9;
  background-image: repeating-linear-gradient(
    -24deg,
    transparent,
    transparent 4px,
    rgba(255, 255, 255, 0.5) 0,
    rgba(255, 255, 255, 0.5) 5px
  );
  z-index: -1;
}

.articles__article,
.articles__article:before {
  width: calc(8px * 35);
  height: calc(8px * 35);
}

.articles__link {
  background-color: #2f4353;
  border: 2px solid #d9d9d9;
  display: block;
  width: 100%;
  height: 100%;
}

.articles__link:after {
  content: "";
  position: absolute;
  top: 50%;
  right: calc(8px * 3);
  width: calc(8px * 2);
  height: calc(8px * 2);
  margin-top: calc(8px * -1);
  clip-path: polygon(75% 0, 100% 50%, 75% 100%, 0 100%, 25% 50%, 0 0);
  -webkit-clip-path: polygon(75% 0, 100% 50%, 75% 100%, 0 100%, 25% 50%, 0 0);
  background-color: #d9d9d9;
  opacity: 0;
  transition: opacity 0.5s ease-in, transform 0.3s ease-in-out 0ms;
}

.articles__content {
  background-color: #d9d9d9;
  color: #2f4353;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: calc(8px * 2);
  display: flex;
  flex-direction: column;
  border: 2px solid #d9d9d9;
}

.articles__content--lhs {
  clip-path: polygon(0 0, 51% 0, 51% 100%, 0 100%);
  -webkit-clip-path: polygon(0 0, 51% 0, 51% 100%, 0 100%);
}

.articles__content--rhs {
  clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
  -webkit-clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
  transition: transform 0.5s ease-in-out, background-color 0.4s ease-in-out;
}

.articles__title {
  font-size: calc(8px * 4);
  line-height: 1.125;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.articles__footer {
  margin-top: auto;
  font-size: calc(8px * 2);
  line-height: calc(8px * 2);
  display: flex;
  justify-content: space-between;
}

.articles__link:hover .articles__content--rhs {
  background-color: #f5f5f5;
  transform: rotateY(-50deg);
}

.articles__link:hover:after {
  opacity: 1;
  transform: translateX(calc(8px * 1.5));
  transition: opacity 0.5s ease-in, transform 0.3s ease-in-out 0.25s;
}
</style>