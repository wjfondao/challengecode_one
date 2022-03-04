<template>
  <div>
    <div>
      <Header />
    </div>
    <div class="containerbody row">
      <div class="partone col-xl-5 col-lg-12 col-md-12 col-sm-12">
        <div class="texttitle mt-5">
          <p id="textfirst">Hey,</p>
          <p id="textfirst">it’s Christmas time</p>
          <p id="textsecond">Events & gifts by wjbenz</p>
        </div>

        <div class="img_register">
          <img class="Christmas-img" src="../assets/images/Christmas.svg" />
        </div>
      </div>

      <div class="parttwo col-xl-7 col-lg-12 col-md-12 col-sm-12">
        <Cardsignup />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import '../assets/scss/images/img_register.scss';

.containerbody {

  .partone {
    padding: 10px;

    .texttitle {
      padding-left: 5rem;
      color: white;
      font-family: Lucida Bright, Georgia, serif;
      font-weight: bold;

      /* Iphone */
      @media only screen and (min-device-width: 320px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
        padding-left: 2rem;
      }

      #textfirst {
        font-size: 48px;

        /* Iphone */
        @media only screen and (min-device-width: 320px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
          font-size: 24px;
        }
      }
      #textsecond {
        font-size: 24px;

        /* Iphone */
        @media only screen and (min-device-width: 320px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
          font-size: 14px;
        }
      }
    }
  }


  .parttwo {
    padding: 0;

    /* Ipad */
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
      padding-top: 11rem;
    }

    /* Iphone */
    @media only screen and (min-device-width: 320px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
      padding-top: 6rem;
    }
  }
}
</style>
