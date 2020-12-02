<template>
  <div>
    <b-carousel
      id="carousel-fade"
      :interval="4000"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      img-width="1024"
      img-height="480"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        caption="Local 1"
        img-src="https://picsum.photos/1024/480/?image=10"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Local 2"
        img-src="https://picsum.photos/1024/480/?image=12"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Local 3"
        img-src="https://picsum.photos/1024/480/?image=22"
      ></b-carousel-slide>
    </b-carousel>
    <p><small><i>Fotos tiradas por usuários do site</i></small></p>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>