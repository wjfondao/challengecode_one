<template>
<div class="container row">

    <div class="partone col-xl-5 col-lg-12 col-md-12 col-sm-12"> 
      <div class="imagemylogo">
        <img class="side-img" alt="Vue logo" width="80px" height="80px" src="../assets/images/logo1.png" />
      </div>
      <div class="texttitle mt-5">
        <p style="font-size:48px; font-weight: bold;">Hey,</p>
        <p style="font-size:48px; font-weight: bold;">it’s Christmas time</p>
        <h4>Events & gifts by wjbenz</h4>
      </div>

    </div>
    <div class="parttwo col-xl-7 col-lg-12 col-md-12 col-sm-12">
      <h1>hello</h1>
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
  background-color: #A5D7CC;

  .partone {
    padding: 10px;

    .texttitle{
      padding-left: 5rem;
      color: white;
      font-family: Lucida Bright,Georgia,serif; 
    }
  }

}

/* Ipadpro */
//   @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {

//   }

  /* Ipad */
//   @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {

//   }

  /* Iphone */
//   @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
  
//   }

</style>
