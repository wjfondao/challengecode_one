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
      <div class="col-4">
        <img class="starleft" src="../assets/images/star.png" />
        <img class="treeangle" src="../assets/images/tree_angle.png" />
      </div>
      <div class="col-4 text_subtitle">
        <p class="mb-0">Yo-Ho-Ho !</p>
        <p class="mb-0">Santa Claus</p>
        <p class="mb-0">wishes well you.</p>
      </div>
      <div class="col-4">
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
  }
}

// start: subtitle
.subtitle {
  .starleft {
    display: flex;
    width: 59px;
    height: 57px;
    margin-left: auto;
  }

  .treeangle {
    display: flex;
    width: 52px;
    height: 83px;
    margin-left: auto;
    margin-right: auto;
  }

  .sock {
    display: flex;
    width: 51px;
    height: 91px;
    margin-right: auto;
  }

  .starright {
    display: flex;
    width: 59px;
    height: 57px;
    margin-left: auto;
    margin-right: auto;
  }
}

// start: image santa with deer
.imgcontent {
  display: flex;
  justify-content: center;
  .imgsantadeer {
    width: 641px;
    height: 367px;
  }
}

// star: scrollng
.scrolling {
  .textscrolling {
      font-size: 18px;
  }
}
</style>