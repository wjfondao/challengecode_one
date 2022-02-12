<template>
  <!-- start container content -->
  <div>
    <!-- start : Text Title  -->
    <div class="title">
      <p class="text_title">Hello World</p>
    </div>
    <!-- start : Text Title  -->
    <div class="imgleafangle mb-3">
      <img class="leafangle" src="../assets/images/leaf_angle.png" />
    </div>
    <!-- start : subtitle content -->
    <div class="subtitle row">
      <div class="col-3 col-lg-4">
        <img class="starleft" src="../assets/images/star.png" />
        <img class="treeangle" src="../assets/images/tree_angle.png" />
      </div>
      <div class="col-6 col-lg-4 text_subtitle">
        <p class="mb-0">Yo-Ho-Ho !</p>
        <p class="mb-0">Santa Claus</p>
        <p class="mb-0">wishes well you.</p>
      </div>
      <div class="col-3 col-lg-4">
        <img class="sock" src="../assets/images/sock.png" />
        <img class="starright" src="../assets/images/star.png" />
      </div>
    </div>
    <!-- start: image santa with deer -->
    <div class="imgcontent mt-5 mb-5">
      <img class="imgsantadeer" src="../assets/images/santa_deers.png" />
    </div>
    <!-- start: text scrolling -->
    <div class="scrolling">
      <p class="textscrolling">Enjoy The Merry Scrolling!</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
// start container content
.imgleafangle {
  .leafangle {
    width: 108px;
    height: 86px;

    /* Iphone */
    @media only screen and (min-device-width: 280px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
      width: 73px;
      height: 58px;
    }
  }
}

// start: subtitle
.subtitle {
  /* Iphone */
  @media only screen and (min-device-width: 280px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
    margin-top: 3rem;
  }

  .starleft {
    display: flex;
    width: 59px;
    height: 57px;
    margin-left: auto;

    /* Iphone */
    @media only screen and (min-device-width: 280px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
      width: 33px;
      height: 33px;
    }
  }

  .treeangle {
    display: flex;
    width: 52px;
    height: 83px;
    margin-left: auto;
    margin-right: auto;

    /* Iphone */
    @media only screen and (min-device-width: 280px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
      width: 20px;
      height: 34px;
    }
  }

  .sock {
    display: flex;
    width: 51px;
    height: 91px;
    margin-right: auto;

    /* Iphone */
    @media only screen and (min-device-width: 280px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
      width: 19px;
      height: 38px;
    }
  }

  .starright {
    display: flex;
    width: 59px;
    height: 57px;
    margin-left: auto;
    margin-right: auto;

    /* Iphone */
    @media only screen and (min-device-width: 280px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
      width: 33px;
      height: 33px;
    }
  }
}

// start: image santa with deer
.imgcontent {
  display: flex;
  justify-content: center;
  .imgsantadeer {
    width: 641px;
    height: 367px;

    /* Iphone */
    @media only screen and (min-device-width: 280px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
      width: 282px;
      height: 161px;
    }
  }
}

// star: scrollng
.scrolling {
  .textscrolling {
    font-size: 18px;

    /* Iphone */
    @media only screen and (min-device-width: 280px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
      font-size: 12px;
    }
  }
}
</style>