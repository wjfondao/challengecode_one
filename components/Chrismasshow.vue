<template>
  <!-- start container content -->
  <div>
    <!-- start : Text Title  -->
    <div class="title">
      <p class="text_title">Hello Benz</p>
    </div>
    <!-- start : Text Title  -->
    <div class="imgleafangle mb-3">
      <img class="leafangle" src="../assets/images/leaf_angle.png" />
    </div>
    <!-- start : subtitle content -->
    <div class="subtitle row">
      <div class="col-3 col-lg-4">
        <img class="star starleft" style="margin-left: auto;" src="../assets/images/star.png" />
        <img class="treeangle" src="../assets/images/tree_angle.png" />
      </div>
      <div class="col-6 col-lg-4 text_subtitle">
        <p class="mb-0">Yo-Ho-Ho !</p>
        <p class="mb-0">Santa Claus</p>
        <p class="mb-0">wishes well you.</p>
      </div>
      <div class="col-3 col-lg-4">
        <img class="sock" src="../assets/images/sock.png" />
        <img class="star starright" style="margin-left: auto; margin-right: auto" src="../assets/images/star.png" />
      </div>
    </div>
    <!-- start: image santa with deer -->
    <div class="santadeer mt-5 mb-5">
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
@import '../assets/scss/images/star.scss';
@import '../assets/scss/images/treeangle.scss';
@import '../assets/scss/images/sock.scss';
@import '../assets/scss/images/santadeer.scss';

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
</style>