<template>
  <div class="container">
    <!-- end header -->
    <!-- start container content -->
    <section>
      <div class="container_content mt-xl-5">
        <Chrismasshow />
      </div>
    </section>
    <section class="section_two">
      <div class="container_message">
        <h1>page2</h1>
        <h1>page2</h1>
        <h1>page2</h1>
        <h1>page2</h1>
        <h1>page2</h1>
      </div>
    </section>
    <!-- end container content -->
    <!-- start loading -->
    <div class="loading">
      <div class="flex">
        <div class="imagesanta">
          <img class="santa" src="../assets/images/santastandingonsled.png" />
        </div>
        <div class="bar"></div>
      </div>
    </div>
    <!-- end loading -->
  </div>
</template>

<style scoped lang="scss">
.container {
  min-height: 100vh;
  min-width: -webkit-fill-available;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: 0;
  margin-left: 0;
  font-family: Lucida Bright, Georgia, serif;
  box-sizing: border-box;
  overflow: hidden;
  background-color: #a5d7cc;
  background-image: url(http://www.transparenttextures.com/patterns/asfalt-light.png);

  /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
  .section {
    display: flex;
    height: 101vh;
  }
  // start container content
  .container_content {
    box-sizing: border-box;
    text-align: center;
    font-size: 36px;
    font-weight: bold;

    /* Iphone */
    @media only screen and (min-device-width: 280px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
      font-size: 18px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .section_two {
    box-sizing: border-box;
    background-color: #000;
    .container_message {
      color: #fff;
    }
  }
  // start loading
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
    animation: fadeout 8s linear forwards;

    /* Iphone */
    @media only screen and (min-device-width: 280px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
      animation: fadeout 7s linear forwards;
    }

    .imagesanta {
      box-sizing: border-box;
      .santa {
        display: flex;
        position: relative;
        align-items: center;
        width: 250px;
        height: 300px;
        animation-name: santa;
        animation-duration: 8s;
        animation-iteration-count: 1;

        /* Iphone */
        @media only screen and (min-device-width: 280px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
          width: 150px;
          height: 200px;
          animation-duration: 15s;
        }
      }
    }

    h2 {
      color: #000;
    }

    .bar {
      position: relative;
      width: 2000px;
      height: 40px;
      background: transparent;
      margin: 0 25px;
      border: 2px solid #fff;
      box-sizing: border-box;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #fff;
        transform-origin: left;
        animation: animate 5s linear forwards;

        /* Iphone */
        @media only screen and (min-device-width: 280px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
          animation: animate 8s linear forwards;
        }
      }

      &::after {
        content: ' Yo-Ho-Ho! ~ Merry Christmas...';
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
        color: #a5d7cc !important;
        font-size: 20px;
        mix-blend-mode: difference;

        /* Iphone */
        @media only screen and (min-device-width: 280px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
          content: 'Merry Christmas...';
          letter-spacing: 5px;
          font-size: 12px;
        }

        /* Galaxy Fold */
        @media only screen and (max-device-width: 280px) {
          content: 'Merry Christmas...';
          letter-spacing: 4px;
          font-size: 9px;
        }
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

  // animation - image santa
  @keyframes animate {
    0% {
      transform: scaleX(0);
    }
    100% {
      transform: scaleX(1);
    }
  }

  // animation - image santa
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
}
</style>