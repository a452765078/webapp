<template>
<div class="recommend" v-loading="isLoading">
  <!-- <loading v-if="!sliders.length&!albums.length" ></loading> -->
  <scroll>
    <div class="slider-container">
      <div class="slider-innner">
        <slider :sliders="sliders" ></slider>
      </div>
    </div>
    <div class="recommendContainer">
      <album :albums="albums"></album>
    </div>
  </scroll>

</div>
</template>
<script>
import service from '@/service/getData';
import slider from '@/components/base/slider/slider.vue';
import album  from '@/components/albums/albums.vue';
import scroll from '@/components/scroll/scroll.vue';
import loading from '@/components/base/loading/loading.vue';
export default {
  name: 'recommendVue',
  components: {
    slider,
    album,
    scroll,
    loading
  },
  data() {
    return {
      sliders: [],
      albums:[]
    }
  },
  computed: {
    isLoading() {
      return this.sliders.length||this.sliders.length
    }
  },
  created() {
    this.getRecommend()
  },
  destroyed() {

  },
  methods: {
    async getRecommend() {
      let res = await service.getRecommend()
      this.sliders = res.sliders
      this.albums = res.albums
    },
  }
}
</script>
<style lang="scss" scoped>
.recommend {
  position: fixed;
  top: 88px;
  width: 100%;
  overflow: hidden;
  .slider-container {
    width: 100%;
    height: 0;
    padding-top: 40%;
    position: relative;
    .slider-innner {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
  .recommendContainer {
  }
}
</style>
