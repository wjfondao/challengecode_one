<template>
  <div>
    <div class="headerregister">
      <Header />
    </div>
    <div class="containerbody overflow-auto row">
      <div class="sectionregisterone col-xl-5 col-lg-12 col-md-12 col-sm-12 mt-5">
        <div class="texttitle mt-5">
          <p id="textfirst">Hey,</p>
          <p id="textfirst">it’s Christmas time</p>
          <p id="textsecond">Events & gifts by wjbenz</p>
        </div>

        <div class="img_register overflow-auto">
          <img class="Christmas-img" src="../assets/images/Christmas.svg" />
        </div>
      </div>

      <div class="sectionregistertwo overflow-auto col-xl-7 col-lg-12 col-md-12 col-sm-12">
        <Cardsignin />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import '../assets/scss/images/img_register.scss';

</style>
