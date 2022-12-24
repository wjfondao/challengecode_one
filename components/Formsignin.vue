<template>
  <div>
    <!-- Star Card Sign up -->
    <b-card class="maincard">
      <!-- Star Form Group -->
      <div class="formsignin">
        <!--Title text -->
        <p id="title">Sign in</p>
        <!-- Button: Google-->
        <div class="row mt-4 mb-4">
          <Buttongoogle />
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
              v-model="email"
              placeholder="Email Address"
            ></b-form-input>
          </div>
          <!-- input: Password -->
          <div class="mt-3 col-12">
            <p>Password</p>
            <b-form-input
              v-model="password"
              type="password"
              placeholder="Password"
            ></b-form-input>
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
            href="../../chrismasgift"
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
          <a class="pl-2 pt-1"
            ><i class="text-right">Forgot your password?</i></a
          >
        </div>
        <!--  text: Log up -->
        <div class="textlogin mt-4">
          <p>Don't have an account?</p>
          <a class="pl-2" href="../../signup"> Log up </a>
        </div>
        <!-- End Form Group -->
      </div>
    </b-card>
    <!-- End Card Sign up -->
  </div>
</template>

<style scoped lang="scss">
@import '../assets/scss/_variables.scss';

.maincard {
  /* Start form group */
  .formsignin {
    padding: 8rem 10rem 0 10rem;

    /* Ipadpro */
    @media only screen and (min-device-width: 768px) and (max-device-width: 1366px) {
      padding: 3rem 10rem 0 10rem;
    }

    /* Iphone */
    @media only screen and (min-device-width: 280px) and (max-device-width: 767px) {
      padding: 2rem 2rem 0 2rem;
    }

    // Small devices (landscape phones, less than 280px)
    @media only screen and (max-device-width: 280px) {
      padding: 0;
    }

    /* Text title */
    #title {
      font-size: 48px;
      font-weight: bold;

      // Small devices (landscape phones, less than 767.98px)
      @media only screen and (max-width: 767.98px) {
        font-size: 24px;
      }
    }

    .formgroup {
      .form-control {
        background-color: $foo-gray-nurse;
        border: 1px solid $foo-green-gray;
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
        color: $foo-green-gray;
      }
      // Small devices (landscape phones, less than 767.98px)
      @media only screen and (max-width: 767.98px) {
        font-size: 12px;
      }
    }

    .rememberandpw {
      display: flex;
      font-size: 14px;
      justify-content: space-between;
      a {
        font-weight: bold;
        color: $foo-green-gray;
      }

      .custom-control-label {
        padding-top: 0.25rem;
      }

      // Small devices (landscape phones, less than 767.98px)
      @media only screen and (max-width: 767.98px) {
        font-size: 12px;
      }
    }
  }

  /* End form group */
}
</style>
