<template>
  <div class="container row">
    <div class="partone col-xl-5 col-lg-12 col-md-12 col-sm-12">
       <!-- start header -->
      <div class="imagemylogo">
        <Header />
      </div>
       <!-- end header -->
      <div class="texttitle mt-5">
        <p id="textfirst">Hey,</p>
        <p id="textfirst">it’s Christmas time</p>
        <p id="textsecond">Events & gifts by wjbenz</p>
      </div>

      <div class="imageshow">
        <img class="Christmas-img" src="../assets/images/Christmas.svg" />
      </div>
    </div>

    <div class="parttwo col-xl-7 col-lg-12 col-md-12 col-sm-12">
      <Cardsignup />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  padding: 0;
  margin: 0;
  min-height: 100vh;
  min-width: -webkit-fill-available;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: bottom;
  background-size: 100%;
  background-color: #a5d7cc;

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

  .imageshow {
    .Christmas-img {
      z-index: 2;
      position: absolute;
      bottom: 0%;
      left: 35%;
      height: 650px;

      /* deketop */
      @media only screen and (min-device-width: 1367px) and (max-device-width: 1639px) and (-webkit-min-device-pixel-ratio: 2) {
        height: 590px;
        left: 30% !important;
      }

      /* deketop2 */
      @media only screen and (min-device-width: 1200px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
        height: 500px !important;
        left: 11rem !important;
        top: 42% !important;
      }

      /* deketop3 */
      @media only screen and (min-device-width: 1025px) and (max-device-width: 1199px) and (-webkit-min-device-pixel-ratio: 2) {
        height: 400px !important;
        left: 35rem !important;
        top: 25% !important;
      }

      /* Ipadpro */
      @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
        height: 400px;
        left: 35rem;
        top: 60%;
      }

      /* Ipad */
      @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
        height: 350px;
        left: 23rem;
        top: 70%;
      }

      /* Iphone */
      @media only screen and (min-device-width: 320px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
        height: 170px;
        left: 10rem;
        top: 85%;
      }
    }
  }

  .parttwo {
    padding: 0;

    /* Ipadpro */
    // @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
    //   padding-top: 18rem;
    // }

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
