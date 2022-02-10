<template>
  <div class="container">
    <div class="container_content">
      <div class="container_content_inner">
        <div class="title">
          <h1>Hello World</h1>
        </div>
        <div class="par">
          <p>
            Cupiditate alias odio omnis minima veritatis saepe porro,
            repellendus natus vitae, sequi exercitationem ipsam, qui possimus
            sit eveniet laborum sapiente quisquam quae neque velit?
          </p>
        </div>
      </div>
    </div>
    <div class="loading">
      <div class="imagesanta">
        <img class="santa" src="../assets/images/santastandingonsled.png" />
      </div>
      <div class="bar "></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #129277;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 15;
  animation: fadeout 10s linear forwards;

  .imagesanta {
    .santa {
      position: absolute;
      margin-top: 10rem;
      width: 250px;
      height: 300px;
      animation-name: santa;
      animation-duration: 15s;
      animation-iteration-count: 1;
      box-sizing: border-box;
    }
  }

  h2 {
    color: #000;
  }

  .bar {
    position: relative;
    width: 1400px;
    height: 40px;
    background: transparent;
    margin: 0 25px;
    border: 2px solid #a5d7cc;
    box-sizing: border-box;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #a5d7cc;
      transform-origin: left;
      animation: animate 5s linear forwards;
    }

    &::after {
      content: 'Ho Ho Ho ~ Merry Christmas...';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 10px;
      text-align: center;
      line-height: 36px;
      color: #a5d7cc;
      font-size: 20px;
      mix-blend-mode: difference;
    }
  }
}

@keyframes fadeout {
  0%,
  91% {
    opacity: 1;
    visibility: visible;
  }

  100% {
    opacity: 0;
    visibility: hidden;
  }
}

@keyframes animate {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}

@keyframes santa {
  0% {
    left: 1px;
    top: 1px;
  }
  100% {
    left: 2000px;
    top: 1px;
  }
}
</style>