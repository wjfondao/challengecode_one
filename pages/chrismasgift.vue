<template>
  <div class="containerchrismas">
    <!-- start header-->
    <div>
      <Header/>
    </div>
    <!-- end header -->
    <!-- start section one -->
    <section>
      <div class="container_content mt-xl-5">
        <Chrismasshow />
      </div>
    </section>
    <!-- end section one -->
    <!-- start section two -->
    <section class="section_two">
      <div class="container_message">
        <Chrismastext />
      </div>
    </section>
    <!-- end section two -->
    <!-- start footer-->
    <div class="">
      <Footer />
    </div>
    <!-- end footer-->

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
@import '../assets/scss/_variables.scss';
@import '../assets/scss/global.scss';


.containerchrismas {

  .section {
    display: flex;
    height: 100vh;
  }
  // start container content
  .container_content {
    box-sizing: border-box;
    text-align: center;
    font-size: 36px;
    font-weight: bold;

    // Extra small devices (portrait phones, less than 576px)
    @media only screen and (max-width: 575.98px) {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;  
    }
  }

  // start section two
  .section_two {
    box-sizing: border-box;
    margin-top: 25%;
    margin-bottom: 25%;
  }
  // start loading
  .loading {
    z-index: 1;
    position: fixed;
    background: $foo-green-ink;
    align-items: center;
    animation: fadeout 8s linear forwards;
    @extend %flex-jc-center;
    @extend %default-fullscreen;

    // Extra small devices (portrait phones, less than 576px)
    @media only screen and (max-width: 575.98px) {
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

        // Extra small devices (portrait phones, less than 576px)
        @media only screen and (max-width: 575.98px) {
          width: 150px;
          height: 200px;
          animation-duration: 15s;
        }
      }
    }

    .bar {
      position: relative;
      width: 2000px;
      height: 40px;
      background: transparent;
      margin: 0 25px;
      border: 2px solid $foo-white;
      box-sizing: border-box;

      &::before {
        content: '';
        position: absolute;
        background: $foo-white;
        transform-origin: left;
        animation: animate 5s linear forwards;
        @extend %default-fullscreen;

        // Extra small devices (portrait phones, less than 576px)
        @media only screen and (max-width: 575.98px) {
          animation: animate 8s linear forwards;
        }
      }

      &::after {
        content: ' Yo-Ho-Ho! ~ Merry Christmas...';
        position: absolute;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 10px;
        text-align: center;
        line-height: 36px;
        color: $foo-green-gray !important;
        font-size: 20px;
        mix-blend-mode: difference;
        @extend %default-fullscreen;

        // Extra small devices (portrait phones, less than 576px)
        @media only screen and (max-width: 575.98px) {
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