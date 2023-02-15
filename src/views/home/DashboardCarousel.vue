<template>
  <v-carousel show-arrows="hover" height="100%" cycle>
    <v-carousel-item class="carousel-dash">
      <div class="carousel-img-1"></div>
    </v-carousel-item>
    <v-carousel-item class="carousel-dash">
      <div class="carousel-img-2"></div>
    </v-carousel-item>
    <v-carousel-item class="carousel-dash">
      <div class="carousel-img-3"></div>
    </v-carousel-item>
    <v-carousel-item class="carousel-dash">
      <div class="carousel-img-4"></div>
    </v-carousel-item>
  </v-carousel>
</template>

<style lang="scss">
.carousel-dash {
  width: inherit;
  height: inherit !important;
}
.carousel-img-1 {
  background: url("~@/assets/home1.jpg") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  height: 100%;
}
.carousel-img-2 {
  background: url("~@/assets/home2.jpg") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  height: 100%;
}
.carousel-img-3 {
  background: url("~@/assets/home3.jpg") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  height: 100%;
}
.carousel-img-4 {
  background: url("~@/assets/home4.jpg") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>
