<template>
  <div class=" mt-5 containercard row">
    <!-- start card -->
    <div class="card_message">
      <!-- start images top in card -->
      <div class="imagecardtop">
        <img class="imgcandy" src="../assets/images/candystick.png" />
        <img class="imgstarone" src="../assets/images/star.png" />
      </div>
      <!-- end images top in card -->

      <!-- start Card body -->
      <b-card>
        <div class="imgstamp col-12">
          <img
            src="../assets/images/stampdeer.png"
            img-alt="Card image"
            class="stampdeer mb-3"
          />
        </div>
        <div class="col-12 cardtext">
          <b-card-text style="font-weight: bold"> Dear, Name </b-card-text>
          <b-card-text
            class="text-center"
            style="line-height: 30px; letter-spacing: 2px"
          >
            A warm cup of eggnog, a chat with the family and a laugh with
            friends around the beautifully-decorated tree. Can Christmas get any
            better than this? Merry Christmas!
          </b-card-text>
        </div>
      </b-card>
      <!-- end Card body -->

      <!-- start images bottom in card -->
      <div class="imagecardbottom">
        <img class="imgtree" src="../assets/images/christmastree.png" />
        <img class="imgcandles" src="../assets/images/candles.png" />
        <img
          class="imghandswithgift"
          src="../assets/images/handswithgift.png"
        />
      </div>
      <!-- end images bottom in card -->
    </div>
    <!-- end card -->
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/_variables";

.containercard {
  font-family: $foo-family-letter !important;
  font-size: 18px;

  .card_message {
    margin-left: 25%;
    margin-right: 25%;
    z-index: 0;

    /* Iphone */
    @media only screen and (min-device-width: 280px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
      margin-left: 15%;
      margin-right: 15%;
    }

    /* Ipad */
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
      margin-left: 15%;
      margin-right: 15%;
    }

    // start Images-------------------
    // start iamge : candy
    .imgcandy {
      display: flex;
      position: absolute;
      z-index: 1;
      margin-top: -3rem;
      margin-left: -2rem;
      width: 70px;
      height: 150px;

      /* Iphone */
      @media only screen and (min-device-width: 280px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
        margin-top: -1.25rem;
        margin-left: -1rem;
        width: 34px;
        height: 76px;
      }

      /* Ipad */
      @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
        width: 70px;
        height: 150px;
      }
    }

    // start image: star
    .imgstarone {
      z-index: 1;
      width: 32px;
      height: 32px;
      float: right;
      margin-right: -3rem;
      animation: stars 10s linear infinite;
    }

    // start image: tree
    .imgtree {
      display: flex;
      position: absolute;
      z-index: 1;
      width: 81px;
      height: 201px;
      margin-top: -11rem;
      margin-left: -3rem;

      /* Iphone */
      @media only screen and (min-device-width: 280px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
        margin-top: -5.5rem;
        margin-left: -1rem;
        width: 40px;
        height: 102px;
      }
    }

    // start image: candles
    .imgcandles {
      display: flex;
      position: absolute;
      z-index: 1;
      width: 119px;
      height: 114px;
      margin-top: -5rem;
      margin-left: 2rem;

      /* Iphone */
      @media only screen and (min-device-width: 280px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
        margin-top: -2.5rem;
        width: 58px;
        height: 58px;
      }
    }

    //start image: hand with gift
    .imghandswithgift {
      display: flex;
      position: relative;
      float: right;
      z-index: 1;
      width: 119px;
      height: 150px;
      margin-top: -6rem;
      margin-right: -2rem;

      /* Iphone */
      @media only screen and (min-device-width: 280px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
        margin-top: -3rem;
        margin-right: -1rem;
        width: 59px;
        height: 76px;
      }
    }
    // end Images-------------------

    // start Card-------------------
    .card-body {
      padding: 5rem 0.75rem;
      background-color: $foo-light-grayish-yellow;
      background-image: url('https://www.transparenttextures.com/patterns/concrete-wall.png');

      /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
      .imgstamp {
        display: flex;
        justify-content: end;
        .stampdeer {
          width: 186px;
          height: 183px;

          /* Iphone */
          @media only screen and (min-device-width: 280px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
            width: 113px;
            height: 111px;
          }

          /* Ipad */
          @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
            width: 113px;
            height: 111px;
          }
        }
      }
      .cardtext {
        padding: 0 5rem 5rem 5rem;

        /* Iphone */
        @media only screen and (min-device-width: 280px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
          padding: 0 1rem 1rem 1rem;
        }
      }
    }
  }
}

//staet ainmation: stars
@keyframes stars {
  from {
    transform: rotate(1deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>