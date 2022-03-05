<template>
  <div class="mt-5 containercard row">
    <!-- start card -->
    <div class="card_message">
      <!-- start images top in card -->
      <div class="imagecardtop">
        <img class="imgcandy" src="../assets/images/candystick.png" />
        <img class=" star imgstarone" src="../assets/images/star.png" />
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
@import '../assets/scss/_variables';
@import '../assets/scss/images/star.scss';
@import '../assets/scss/images/candy.scss';
@import '../assets/scss/images/tree.scss';
@import '../assets/scss/images/candles.scss';
@import '../assets/scss/images/handswithgift.scss';

.containercard {
  font-family: $foo-family-letter !important;
  font-size: 18px;

  .card_message {
    margin-left: 25%;
    margin-right: 25%;
    z-index: 0;

    // Extra small devices (portrait phones, less than 576px)
    @media only screen and (max-device-width: 1024px) {
      margin-left: 15%;
      margin-right: 15%;
    }

    // start Images-------------------
    // start image: star
    .imgstarone {
      z-index: 1;
      float: right;
      margin-right: -3rem;
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

          // Extra small devices (portrait phones, less than 1024px)
          @media only screen and (max-device-width: 1024px) {
            width: 113px;
            height: 111px;
          }

        }
      }
      .cardtext {
        padding: 0 5rem 5rem 5rem;
        // Extra small devices (portrait phones, less than 576px)
        @media only screen and (max-width: 575.98px) {
          padding: 0 1rem 1rem 1rem;
        }
      }
    }
  }
}


</style>