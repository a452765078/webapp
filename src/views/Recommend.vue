<template>
<div class="recommend">
  <div class="slider-container">
    <div class="slider-innner">
      <slider :sliders="sliders"></slider>
    </div>
  </div>
  <span>占位</span>
</div>
</template>
<script>
import service from '@/service/getData';
import slider from '@/components/base/slider/slider.vue'
export default {
  name: 'recommendVue',
  components: {
    slider
  },
  data() {
    return {
      sliders: [],
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
    },
  }
}
</script>
<style lang="scss" scoped>
.recommend {

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
}
</style>
