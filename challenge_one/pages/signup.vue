<template>
<div class="container flex">

    <div class="partone "> 
        <h1>part one</h1>
    </div>
    <div class="parttwo ">
            <h1>Paet two</h1>
    </div>
      
</div>

</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.container {
  padding: 0;
  margin: 0;
  min-height: 100vh;
  min-width: -webkit-fill-available;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: bottom;
  background-size: 100%;
  background-color: #A5D7CC;

    > {
        div {
        flex: 1;
        }

        .partone {
            flex: 1;
        background-color: red;
        }

        .parttwo {
            flex: 1;
        background-color: blue;
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