<template>
  <div class="container row">
    <div class="imagemylogo">
      <a href="../../">
        <img
          class="side-img"
          alt="Vue logo"
          width="80px"
          height="80px"
          src="../assets/images/logo1.png"
        />
      </a>
    </div>
    <div class="pageone col-xl">
      <div class="imagebell">
        <img class="bell" src="../assets/images/bell.png" />
      </div>
      <!--  start: text marry christmas -->
      <div class="textitle">
        <p>Marry</p>
        <p>Christmas</p>
      </div>
      <div class="subtitle mt-4">
        <p>
          Season’s Greetings – May love and laughter fill your life at Christmas
          and throughout the New Year.
        </p>
      </div>
      <!--  start: Button-->
      <div class="signbutton mt-5">
        <b-button pill class="btsignin mr-4" href="../../signup"
          >Sign in</b-button
        >
        <b-button pill class="btsignup" href="../../signup">Sign up</b-button>

        <!-- <b-button pill class="btsigninmobile mr-4" href="../../signup"
          >Sign in</b-button
        >
        <b-button pill class="btsignupmobile" href="../../signup"
          >Sign up</b-button
        > -->
      </div>
    </div>
    <div class="pagetwo col-xl">
      <!--  start: image calendar-->
      <div>
        <img class="calendar" src="../assets/images/calendar_25dec.png" />
      </div>
      <!--  start: image gift-->
      <div class="">
        <img class="imggift" src="../assets/images/gift.png" />
      </div>
      <!--  start: image santa wit htree-->
      <img class="santawithtree" src="../assets/images/santawithtree.png" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  min-width: -webkit-fill-available;
  margin: 0;
  flex-direction: row;
  background-color: #a5d7cc;
  font-family: Lucida Bright, Georgia, serif;

  @media screen and (max-width: 991px) {
    overflow: hidden;
  }
  // Start : Page one
  .pageone {
    margin-top: auto;
    margin-bottom: auto;

    /* Ipad */
    @media only screen and (min-device-width: 768px) and (max-device-width: 1023px) and (-webkit-min-device-pixel-ratio: 1) {
      margin-top: 5rem;
    }

    .imagebell {
      display: flex;
      justify-content: center;
      .bell {
        width: 100px;
        height: 150px;

        /* Ipad */
        @media only screen and (min-device-width: 768px) and (max-device-width: 1023px) and (-webkit-min-device-pixel-ratio: 1) {
          width: 80px;
          height: 100px;
        }

        /* Iphone */
        @media only screen and (min-device-width: 280px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
          width: 70px;
          height: 90px;
        }
      }
    }
    .textitle {
      font-weight: bold;
      font-size: 89px;
      color: white;
      text-align: center;

      /* Ipad */
      @media only screen and (min-device-width: 768px) and (max-device-width: 1023px) and (-webkit-min-device-pixel-ratio: 1) {
        font-size: 62px;
      }

      /* Iphone */
      @media only screen and (min-device-width: 280px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
        font-size: 48px;
      }

      p {
        margin-bottom: -1.25rem;
      }
    }
    .subtitle {
      font-weight: bold;
      color: white;
      text-align: center;
      p {
        font-size: 18px;
        margin-bottom: 0.16rem;
        margin-right: 5rem;
        margin-left: 5rem;

        /* Iphone */
        @media only screen and (min-device-width: 280px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
          font-size: 14px;
          margin-right: 0.15rem;
          margin-left: 0.15rem;
        }
      }
    }
    // start : set button
    .signbutton {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      /* Iphone */
      @media only screen and (min-device-width: 280px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
        margin-top: 1rem !important;
      }

      .btsignin {
        font-weight: bold;
        padding: 0.75rem 3.1rem 0.75rem 3.1rem;
        color: #edead9;
        background-color: #129277;
        border-color: transparent;
        font-size: 18px;

        /* Iphone */
        @media only screen and (min-device-width: 280px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
          font-size: 14px;
          margin-left: 1.5rem !important;
          margin-top: 14px !important;
        }
      }
      .btsignup {
        font-weight: bold;
        padding: 0.75rem 3.1rem 0.75rem 3.1rem;
        color: #129277;
        background-color: #edead9;
        border-color: transparent;
        font-size: 18px;

        /* Iphone */
        @media only screen and (min-device-width: 280px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
          display: flex;
          flex-wrap: wrap;
          font-size: 14px;
          margin-top: 1rem;
          margin-left: 0.25rem !important;
          // display: none;
        }
      }
    }
    // end : set button
  }

  // Start : Page two
  .pagetwo {
    display: flex;
    justify-content: center;
    margin-top: auto;
    margin-bottom: auto;

    //start: image calendar
    .calendar {
      position: absolute;
      width: 100px;
      height: 100px;
      margin-right: -4rem;
      margin-top: 2.5rem;
      animation-name: calendar;
      animation-duration: 5s;
      animation-iteration-count: infinite;

      @keyframes calendar {
        0% {
          bottom: 1px;
          top: 1px;
        }

        25% {
          bottom: 10px;
          top: 1px;
        }

        50% {
          bottom: 10px;
          top: 5px;
        }

        75% {
          bottom: 1px;
          top: 10px;
        }

        100% {
          bottom: 1px;
          top: 1px;
        }
      }

      /* Ipad */
      @media only screen and (min-device-width: 768px) and (max-device-width: 1023px) and (-webkit-min-device-pixel-ratio: 1) {
        width: 50px;
        height: 50px;
      }

      /* Iphone */
      @media only screen and (min-device-width: 280px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
        margin-top: 1rem;
        width: 40px;
        height: 40px;
      }
    }

    //start: image gift
    .imggift {
      position: absolute;
      width: 100px;
      height: 100px;
      margin-right: 1rem;
      margin-top: 35rem;
      animation-name: gift;
      animation-duration: 5s;
      animation-iteration-count: infinite;

      @keyframes gift {
        0% {
          transform: rotate(-20deg);
          bottom: 1px;
          top: 1px;
        }

        25% {
          transform: rotate(10deg);
          bottom: 10px;
          top: 1px;
        }

        50% {
          transform: rotate(10deg);
          bottom: 10px;
          top: 5px;
        }

        75% {
          transform: rotate(10deg);
          bottom: 1px;
          top: 10px;
        }

        100% {
          transform: rotate(-20deg);
          bottom: 1px;
          top: 1px;
        }
      }

      /* Ipadpro */
      @media only screen and (min-device-width: 1023px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
        margin-top: 26rem;
        margin-left: 0.5rem;
      }

      /* Ipad */
      @media only screen and (min-device-width: 768px) and (max-device-width: 1023px) and (-webkit-min-device-pixel-ratio: 1) {
        margin-top: 18rem;
        margin-left: 0.5rem;
        width: 50px;
        height: 50px;
      }

      /* Iphone */
      @media only screen and (min-device-width: 280px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
        margin-top: 11rem;
        margin-left: 0.5rem;
        width: 40px;
        height: 40px;
      }
    }

    //start: image santa wit htree
    .santawithtree {
      width: 680px;
      height: 780px;
      margin-top: 1rem;

      /* Ipadpro */
      @media only screen and (min-device-width: 1023px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
        width: 500px;
        height: 600px;
      }

      /* Ipad */
      @media only screen and (min-device-width: 768px) and (max-device-width: 1023px) and (-webkit-min-device-pixel-ratio: 1) {
        width: 300px;
        height: 350px;
        margin-top: 2rem;
        margin-bottom: 3rem;
      }

      /* Iphone */
      @media only screen and (min-device-width: 280px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
        width: 200px;
        height: 250px;
        margin-bottom: 1rem;
      }
    }
  }
}
</style>