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
      <h2>2021</h2>
      <div class="bar"></div>
      <h2>2022</h2>
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
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 15;
  animation: fadeout 11s linear forwards;

  h2 {
    color: #000;
  }

  .bar {
    position: relative;
    width: 1400px;
    height: 40px;
    background: transparent;
    margin: 0 20px;
    border: 2px solid #000;
    box-sizing: border-box;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #000;
      transform-origin: left;
      animation: animate 1s linear forwards;
    }

    &::after {
      content: 'Loading...';
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
      color: #fff;
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
</style>