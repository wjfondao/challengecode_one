<template>
  <div class="containercard">
    <!-- Star Card Sign up -->
    <b-card class="maincard">
      <!-- Star Form Group -->
      <div class="formsignup">
        <!--Title text -->
        <p id="title">Sign up</p>
        <div class="formgroup row pt-4">
          <!-- input: Firstname -->
          <div class="mt-md-1 col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <p>Firstname</p>
            <b-form-input v-model="text" placeholder="Firstname"></b-form-input>
          </div>
          <!-- input: Lastname -->
          <div class="mt-3 mt-lg-1 col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <p>Lastname</p>
            <b-form-input v-model="text" placeholder="Lastname"></b-form-input>
          </div>
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
          <!-- input: Confirm Password -->
          <div class="mt-3 col-12">
            <p>Confirm Password</p>
            <b-form-input
              v-model="text"
              placeholder="Confirm Password"
            ></b-form-input>
          </div>
        </div>
       <!-- Button Create Account -->
        <div class="btsubmit mt-5">
          <b-button 
            class="pt-3 pb-3" 
            style="font-weight: bold; background-color:#A5D7CC; border: none; border-radius: 8px;;" 
            block >
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

<script>

import { createUserWithEmailAndPassword }  from 'firebase/auth'
import { fireAuth } from '../services/fireinit'

export default {
  data(){
    return {
      email: "",
      password: ""
    }
  },
  method: {
    signUp(){
       createUserWithEmailAndPassword(fireAuth, this.email, this.password);
    }
  } 
}
</script>

<style scoped lang="scss">
@import '../assets/scss/_variables.scss';
.maincard {
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

    .textlogin{
      display: flex;
      font-size: 14px;
      a {
        font-weight: bold;
        color: #6fc5b2;
      }
    }
  }

  /* End form group */
}
</style>