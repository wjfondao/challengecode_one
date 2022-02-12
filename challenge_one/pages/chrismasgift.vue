<template>
  <div class="container">
    <!-- start header -->
    <div class="imagemylogo">
      <Header />
    </div>
    <!-- end header -->
    <!-- start container content -->
    <div class="container_content mt-5">
      <!-- start : Text Title  -->
      <div class="title">
        <p class="text_title">Hello World</p>
      </div>
      <!-- start : Text Title  -->
      <div class="imgleafangle mb-2">
        <img class="leafangle" src="../assets/images/leaf_angle.png" />
        <img class="treeangle" src="../assets/images/tree_angle.png" />
      </div>
      <!-- start : subtitle content -->
      <div class="subtitle row">
        <div class="col-4">
          <img class="starleft" src="../assets/images/star.png" />
        </div>
        <div class="col-4 text_subtitle">
          <p class="mb-0">Yo-Ho-Ho !</p>
          <p class="mb-0">Santa Claus</p>
          <p class="mb-0">wishes well you.</p>
        </div>
        <div class="col-4"></div>
      </div>
    </div>
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
  background-color: #a5d7cc;
  font-family: Lucida Bright, Georgia, serif;
  box-sizing: border-box;

  // start container content
  .container_content {
    text-align: center;
    font-size: 36px;
    font-weight: bold;

    .imgleafangle {
      .leafangle {
        width: 108px;
        height: 86px;
      }
    }

    .subtitle {
      .starleft {
        display: flex;
        width: 59px;
        height: 57px;
        margin-left: auto;
      }
      
      .treeangle {
        display: flex;
        width: 52px;
        height: 83px;
        margin-left: auto;
      }
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