<template>
  <div class="containercard">
    <b-card class="maincard" title="Card title" sub-title="Card subtitle">
      <b-card-text>
        Some quick example text to build on the <em>card title</em> and make up
        the bulk of the card's content.
      </b-card-text>

      <b-card-text>A second paragraph of text in the card.</b-card-text>

      <a href="#" class="card-link">Card link</a>
      <b-link href="#" class="card-link">Another link</b-link>
    </b-card>
  </div>
</template>

<style scoped lang="scss">
.maincard{
    min-height: 100vh;
    min-width: -webkit-fill-available;
    background-color: white;
    border-top-left-radius: 2.5rem;
    border-bottom-left-radius: 2.5rem;
    border: none;
    
    /* Ipadpro */
    @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
        border-top-right-radius: 2.5rem;
        border-bottom-left-radius: 0 !important;
    }

    
    /* Ipad */
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
       border-top-right-radius: 2.5rem;
       border-bottom-left-radius: 0 !important;
    }


     /* Iphone */
    @media only screen and (min-device-width: 320px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
       border-top-right-radius: 2.5rem;
       border-bottom-left-radius: 0 !important;
    }
}
</style>