<template>
  <div class="mt-5 container row">
    <div class="card_message">
      <div class="imagecard">
        <img class="imgcandy" src="../assets/images/candystick.png" />
        <img class="imgstar" src="../assets/images/star.png" />
      </div>
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
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  font-family: 'Gloria Hallelujah', cursive !important;
  font-size: 18px;

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
      width: 70px;
      height: 150px;
    }

    /* Ipad */
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
      width: 70px;
      height: 150px;
    }
  }

  // start image: snow flake
  .imgstar {
    z-index: 1;
    width: 32px;
    height: 32px;
    float: right;
    margin-right: -3rem;
  }

  .card_message {
    margin-left: 25%;
    margin-right: 25%;

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

    .card-body {
      background-color: #edead9;
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
</style>