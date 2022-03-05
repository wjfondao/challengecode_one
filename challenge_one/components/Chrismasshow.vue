<template>
  <!-- start container content -->
  <div>
    <!-- start : Text Title  -->
    <div class="title">
      <p class="text_title">Hello Name</p>
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
@import '../assets/scss/_variables.scss';
@import '../assets/scss/global.scss';

// start container content
.imgleafangle {
  .leafangle {
    width: 108px;
    height: 86px;

    // Extra small devices (portrait phones, less than 576px)
    @media only screen and (max-width: 575.98px) {
      margin-top: 1rem;
      width: 73px;
      height: 58px;
    }
  }
}

// start: subtitle
.subtitle {
  // Extra small devices (portrait phones, less than 576px)
  @media only screen and (max-width: 575.98px) {
    margin-top: 3rem;
  }

  .starleft {
    display: flex;
    width: 39px;
    height: 37px;
    margin-left: auto;
    animation: stars 10s linear infinite;

    // Extra small devices (portrait phones, less than 576px)
    @media only screen and (max-width: 575.98px) {
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
    animation: tree 15s linear infinite;

    // Extra small devices (portrait phones, less than 576px)
    @media only screen and (max-width: 575.98px) {
      width: 20px;
      height: 34px;
    }
  }

  .sock {
    display: flex;
    width: 51px;
    height: 91px;
    margin-right: auto;
    animation: sock 15s linear infinite;

    // Extra small devices (portrait phones, less than 576px)
    @media only screen and (max-width: 575.98px) {
      width: 19px;
      height: 38px;
    }
  }

  .starright {
    display: flex;
    width: 39px;
    height: 37px;
    margin-left: auto;
    margin-right: auto;
    animation: stars 10s linear infinite;

    // Extra small devices (portrait phones, less than 576px)
    @media only screen and (max-width: 575.98px) {
      width: 33px;
      height: 33px;
    }
  }
}

// start: image santa with deer
.imgcontent {
  position: relative;
  animation-name: santadeer;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  @extend %flex-jc-center;

  .imgsantadeer {
    width: 641px;
    height: 367px;
    box-sizing: border-box;

    // Extra small devices (portrait phones, less than 576px)
    @media only screen and (max-width: 575.98px) {
      width: 282px;
      height: 161px;
    }
  }
}

// star: scrollng
.scrolling {
  display: flex-end;
  .textscrolling {
    font-size: 18px;

    // Extra small devices (portrait phones, less than 576px)
    @media only screen and (max-width: 575.98px) {
      font-size: 12px;
    }
  }
}

// Keyframes Animation

//start ainmation : Santa with deer
@keyframes santadeer {
  0% {
    transform: translate(20px, 10px);
  }
  50% {
    transform: rotate(-5deg);
  }
  100% {
    transform: translate(20px, 10px);
  }
}

//staet ainmation: stars
@keyframes stars {
  from {
    transform: rotate(1deg);
  }
  to {
    transform: rotate(360deg);
  }
}

//start animatopn: treeangle
@keyframes tree {
  0% {
    transform: rotate(-40deg);
  }
  50% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(-40deg);
  }
}

// start animation: sock
@keyframes sock {
  0% {
    transform: rotate(-5deg);
  }
  50% {
    transform: rotate(20deg);
  }
  100% {
    transform: rotate(-5deg);
  }
}
</style>