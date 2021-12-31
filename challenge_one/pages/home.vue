<template>
  <div class="container">
    <div class="pageone">
      <div class="imagebell">
        <img class="bell" src="../assets/images/bell.png" />
      </div>
      <!--  start: text marry christmas -->
      <div class="textitle">
        <p>Marry</p>
        <p>Christmas</p>
      </div>
      <div class="subtitle">
        <p>Season’s Greetings– May love and laughter fill your life at Christmas and throughout the New Year.</p>
      </div>
    </div>
    <div class="pagetwo">
      <h1>Page 2</h1>
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
    flex-basis: calc(50%) !important;
    order: 1 !important;

    .imagebell {
      display: flex;
      justify-content: center;
      .bell {
        width: 100px;
        height: 150px;
      }
    }
    .textitle {
      font-weight: bold;
      font-size: 80px;
      color: white;
      text-align: center;
      p{
          margin-bottom: -1rem;
      }
    }
    .subtitle{
      color: white;
      text-align: center;
      p {
        font-size: 18px;
      }
    }
  }
  .pagetwo {
    flex-basis: calc(50%) !important;
    order: 2 !important;
  }
}
</style>