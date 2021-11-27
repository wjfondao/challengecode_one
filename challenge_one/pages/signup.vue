<template>
  <div class="container row">
    <div class="partone col-xl-5 col-lg-12 col-md-12 col-sm-12">
      <div class="imagemylogo">
        <img
          class="side-img"
          alt="Vue logo"
          width="80px"
          height="80px"
          src="../assets/images/logo1.png"
        />
      </div>
      <div class="texttitle mt-5">
        <p id="textfirst">Hey,</p>
        <p id="textfirst">it’s Christmas time</p>
        <p id="textsecond">Events & gifts by wjbenz</p>
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
