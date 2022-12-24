<template>
  <div>
    <!-- Star Card Sign up -->
    <b-card class="maincard">
      <!-- Star Form Group -->
      <div class="formsignup">
        <!--Title text -->
        <p id="title">Sign up</p>
        <div class="formgroup row pt-4">
          <!-- input: Email -->
          <div class="mt-3 col-12">
            <p>Email Address</p>
            <b-form-input
              v-model="email"
              type="text"
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
          <!-- input: Confirm Password -->
          <div class="mt-3 col-12">
            <p>Confirm Password</p>
            <b-form-input
              v-model="confirmPassword"
              type="password"
              placeholder="Confirm Password"
            ></b-form-input>
          </div>
        </div>
        <!-- Button Create Account -->
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
            Create Account
          </b-button>
        </div>

        <div class="textlogin mt-4">
          <p>All ready have an account?</p>
          <a class="pl-2" href="../../signin"> Log in </a>
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
  .formsignup {
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

    /* text element with line behind text */
    .textlinebehind {
      p {
        text-align: center;
        position: relative;
        background-color: $foo-white;

        .border {
          border-bottom: 3px solid $foo-dark-gray;
          position: absolute;
          width: 100%;
          left: 0;
          top: 50%;
          margin-top: -1px;
          z-index: 1;
        }

        .textor {
          background-color: $foo-white;
          position: relative;
          z-index: 2;
          padding: 10px;
          display: inline-block;
        }
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
    }
  }

  /* End form group */
}
</style>
