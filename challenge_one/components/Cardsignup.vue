<template>
  <div class="containercard">
    <!-- Star Card Sign up -->
    <b-card class="maincard">
      <!-- Star Form Group -->
      <div class="formsignup">
        <!--Title text -->
        <p id="title">Sign up</p>
        <!-- Button: Google-->
        <div class="row mt-4 mb-5 buttongoogle">
          <div class="col-md-12">
            <a
              class="
                btn btn-lg btn-google btn-block
                text-uppercase
                btn-outline
                pt-2
                pb-2
              "
              href="#"
            >
              <img
                src="https://img.icons8.com/color/20/000000/google-logo.png"
                class="mr-2"
              />
              Sign up with Google</a
            >
          </div>
        </div>
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
@mixin border-radius {
  border-top-right-radius: 2.5rem;
  border-bottom-left-radius: 0 !important;
}

.maincard {
  min-height: 100vh;
  min-width: -webkit-fill-available;
  background-color: white;
  border-top-left-radius: 2.5rem;
  border-bottom-left-radius: 2.5rem;
  border: none;
  font-family: Lucida Bright, Georgia, serif;

  /* Ipadpro */
  @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
    @include border-radius();
  }

  /* Ipad */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
    @include border-radius();
  }

  /* Iphone */
  @media only screen and (min-device-width: 320px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
    @include border-radius();
  }

  /* Start form group */
  .formsignup {
    padding: 8rem 10rem 0 10rem;

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

    /* Text title */
    #title {
      font-size: 48px;
      font-weight: bold;

      /* Iphone */
      @media only screen and (min-device-width: 320px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
        font-size: 24px;
      }
    }

    /* Button Google */
    .buttongoogle {
      .text-uppercase {
        text-transform: none !important;
      }
      .btn {
        font-size: 14px !important;
        border: 1px solid #e8e5e5;
      }
    }
  }

  /* End form group */
}
</style>