<template>
  <div class="container row">
    <div class="pageone col-xl">
      <div class="imagebell">
        <img class="bell" src="../assets/images/bell.png" />
      </div>
      <!--  start: text marry christmas -->
      <div class="textitle">
        <p>Marry</p>
        <p>Christmas</p>
      </div>
      <div class="subtitle mt-4">
        <p>
          Season’s Greetings – May love and laughter fill your life at Christmas
          and throughout the New Year.
        </p>
      </div>
      <!--  start: Button-->
      <div class="signbutton mt-5">
        <b-button pill class="btsignin mr-4">Sign in </b-button>
        <b-button pill class="btsignup">Sign up</b-button>
      </div>
    </div>
    <div class="pagetwo col-xl">
      <img class="santawithtree" src="../assets/images/santawithtree.png" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  min-width: -webkit-fill-available;
  margin: 0;
  flex-direction: row;
  background-color: #a5d7cc;
  font-family: Lucida Bright, Georgia, serif;
  // Start : Page one
  .pageone {
    margin-top: auto;
    margin-bottom: auto;

    /* Iphone */
    @media only screen and (min-device-width: 320px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
      margin-top: 5rem;
    }
    .imagebell {
      display: flex;
      justify-content: center;
      .bell {
        width: 100px;
        height: 150px;
        @media only screen and (min-device-width: 320px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
          width: 70px;
          height: 90px;
        }
      }
    }
    .textitle {
      font-weight: bold;
      font-size: 89px;
      color: white;
      text-align: center;

      /* Iphone */
      @media only screen and (min-device-width: 320px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
        font-size: 48px;
      }
      p {
        margin-bottom: -1.25rem;
      }
    }
    .subtitle {
      font-weight: bold;
      color: white;
      text-align: center;
      p {
        font-size: 18px;
        margin-bottom: 0.16rem;
        margin-right: 5rem;
        margin-left: 5rem;
        
        /* Iphone */
        @media only screen and (min-device-width: 320px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
          font-size: 14px;
          margin-right: 0.15rem;
          margin-left: 0.15rem;
        }
      }
    }
    // start : set button
    .signbutton {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .btsignin {
        font-weight: bold;
        padding: 0.75rem 3rem 0.75rem 3rem;
        color: #edead9;
        background-color: #129277;
        border-color: transparent;
        font-size: 18px;

        /* Iphone */
        @media only screen and (min-device-width: 320px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
          font-size: 14px;
          margin-left: 1.5rem !important;
        }
      }
      .btsignup {
        font-weight: bold;
        padding: 0.75rem 3rem 0.75rem 3rem;
        color: #129277;
        background-color: #edead9;
        border-color: transparent;
        font-size: 18px;

        /* Iphone */
        @media only screen and (min-device-width: 320px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
          display: flex;
          flex-wrap: wrap;
          font-size: 14px;
          margin-top: 1rem;
          margin-left: 0.25rem !important;
        }
      }
    }
    // end : set button
  }
  .pagetwo {
    display: flex;
    justify-content: center;
    margin-top: auto;
    margin-bottom: auto;
    .santawithtree {
      width: 700px;
      height: 800px;

      /* Ipadpro */
      @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
        width: 500px;
        height: 600px;
      }

      /* Ipad */
      @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
        width: 300px;
        height: 350px;
      }

      /* Iphone */
      @media only screen and (min-device-width: 320px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
        width: 200px;
        height: 250px;
      }
    }
  }
}
</style>