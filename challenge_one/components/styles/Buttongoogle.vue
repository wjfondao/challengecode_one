<template>
  <div class="buttongoogle">
    <div class="col-md-12">
      <a
        class="
          btn btn-lg btn-google btn-block
          text-uppercase
          btn-outline
          pt-2
          pb-2
        "
        href="#"
      >
        <img
          src="https://img.icons8.com/color/20/000000/google-logo.png"
          class="mr-2"
        />
        Sign in with Google</a
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../../assets/scss/_variables.scss';

/* Button Google */
.buttongoogle {
  .text-uppercase {
    text-transform: none !important;
  }
  .btn {
    font-size: 14px !important;
    border: 1px solid $foo-light-grayish-yellow;
    border-radius: 8px;
  }
}
</style>
