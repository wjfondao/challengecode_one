<template>
  <div class="containercard">
    <!-- Star Card Sign up -->
    <b-card class="maincard">
      <!-- Star Form Group -->
      <div class="formsignin">
        <!--Title text -->
        <p id="title">Sign in</p>
        <!-- Button: Google-->
        <div class="row mt-4 mb-4 buttongoogle">
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
              Sign in with Google</a
            >
          </div>
        </div>
        <!-- Text: OR -->
        <div class="textlinebehind">
          <p><span class="border"></span><span class="textor">Or</span></p>
        </div>
        <div class="formgroup row">
          <!-- input: Email -->
          <div class="mt-3 col-12">
            <p>Email Address</p>
            <b-form-input
              v-model="text"
              placeholder="Email Address"
            ></b-form-input>
          </div>
          <!-- input: Password -->
          <div class="mt-3 col-12">
            <p>Password</p>
            <b-form-input v-model="text" placeholder="Password"></b-form-input>
          </div>
        </div>
        <!-- Button Sumit-->
        <div class="btsubmit mt-5">
          <b-button
            class="pt-3 pb-3"
            style="
              font-weight: bold;
              background-color: #a5d7cc;
              border: none;
              border-radius: 8px; ;
            "
            block
          >
            Sign in
          </b-button>
        </div>
        <!--  text: Log up -->
        <div class="rememberandpw mt-3">
          <b-form-group v-slot="{ ariaDescribedby }">
            <b-form-radio
              v-model="selected"
              :aria-describedby="ariaDescribedby"
              name="some-radios"
            >
              Remenber me</b-form-radio
            >
          </b-form-group>
          <a class="pl-2 pt-1"><i class="text-right">Forgot your password?</i></a>
        </div>
        <!--  text: Log up -->
        <div class="textlogin mt-4">
          <p>Don't have an account?</p>
          <a class="pl-2"> Log up </a>
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
  .formsignin {
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
        border-radius: 8px;
      }
    }

    /* text element with line behind text */
    .textlinebehind {
      p {
        text-align: center;
        position: relative;
        background-color: #fff;

        .border {
          border-bottom: 3px solid #999;
          position: absolute;
          width: 100%;
          left: 0;
          top: 50%;
          margin-top: -1px;
          z-index: 1;
        }

        .textor {
          background-color: #fff;
          position: relative;
          z-index: 2;
          padding: 10px;
          display: inline-block;
        }
      }
    }

    .formgroup {
      .form-control {
        background-color: #f5f6f5;
        border: 1px solid #e8e5e5;
        border-radius: 8px;
      }

      p {
        font-weight: bold;
      }
    }

    .textlogin {
      display: flex;
      font-size: 14px;
      a {
        font-weight: bold;
        color: #6fc5b2;
      }

      /* Iphone */
      @media only screen and (min-device-width: 320px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
        font-size: 12px;
      }
    }

    .rememberandpw {
      display: flex;
      font-size: 14px;
      justify-content: space-between;
      a {
        font-weight: bold;
        color: #6fc5b2;
      }

      .custom-control-label { 
        padding-top: 0.25rem;
      }

      /* Iphone */
      @media only screen and (min-device-width: 320px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
        font-size: 12px;
      }
    }
  }

  /* End form group */
}
</style>