<template>
  <carousel class='carousel' :per-page="1"  :mouse-drag="true" :autoplayHoverPause="false" :autoplay="true" :autoplayTimeout="2000" :loop="true">
    <slide> <img src="https://imagiro.ru/media/uploads/promo/Nabor_Soberi_sam_2800_800_1.jpg" alt=""> </slide>
    <slide> <img src="https://imagiro.ru/media/uploads/promo/%D1%80%D0%B5%D0%BA%D0%BE%D0%BC%D0%B5%D0%BD%D0%B4%D1%83%D0%B5%D0%BC_1.jpg" alt=""> </slide>
    <slide> <img src="https://imagiro.ru/media/uploads/promo/Spezii_2800_800_1.jpg" alt=""></slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "Slider",
  components: {
    Carousel,
    Slide,
  },
};
</script>

<style>
.carousel{
    margin-top:60px;
}
.VueCarousel-dot-container{
    margin-top:0px !important;
}
.VueCarousel-dot{
    margin-top:0px !important;
    transition: 0.2s !important;
}
.VueCarousel-dot--active{
    width:20px !important;
    border-radius: 20px !important;
    background-color:hotpink !important;
}
.VueCarousel-slide{
    text-align:center;
}
.VueCarousel-slide img{
       
    width:100%;
}
</style>