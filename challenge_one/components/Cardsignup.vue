<template>
  <div class="containercard">
    <!-- Star Card Sign up -->
    <b-card class="maincard">
      <!-- Star Form Group -->
      <div class="formsignup">
        <!--Title text -->
        <p id="title">Sign up</p>
        <div class="fullname row">
          <div class="col-xl-6 col-lg-6col-md-6 col-sm-12">
            <p>Firstname</p>
            <b-form-input
              v-model="text"
              placeholder="Enter your name"
            ></b-form-input>
          </div>
          <div class="col-xl-6 col-lg-6col-md-6 col-sm-12">
            <p>Lastname</p>
            <b-form-input
              v-model="text"
              placeholder="Enter your name"
            ></b-form-input>
          </div>
        </div>

        <!-- End Form Group -->
      </div>
    </b-card>
    <!-- End Card Sign up -->
  </div>
</template>

<style scoped lang="scss">
.maincard {
  min-height: 100vh;
  min-width: -webkit-fill-available;
  background-color: white;
  border-top-left-radius: 2.5rem;
  border-bottom-left-radius: 2.5rem;
  border: none;

  /* Ipadpro */
  @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
    border-top-right-radius: 2.5rem;
    border-bottom-left-radius: 0 !important;
  }

  /* Ipad */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
    border-top-right-radius: 2.5rem;
    border-bottom-left-radius: 0 !important;
  }

  /* Iphone */
  @media only screen and (min-device-width: 320px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
    border-top-right-radius: 2.5rem;
    border-bottom-left-radius: 0 !important;
  }

  .formsignup {
    padding: 8rem 10rem 0 10rem;

    #title {
      font-size: 48px;
      font-weight: bold;

      /* Iphone */
      @media only screen and (min-device-width: 320px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
        font-size: 24px;
      }
    }

    /* Ipadpro */
    @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
      padding: 3rem 10rem 0 10rem;
    }

    /* Ipad */
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
      padding: 3rem 10rem 0 10rem;
    }

    /* Iphone */
    @media only screen and (min-device-width: 320px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
      padding: 2rem 2rem 0 2rem;
    }
  }
}
</style>