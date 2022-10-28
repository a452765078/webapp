<template>
    <div class="scrollWrapper" ref="scrollRef">
        <div class="">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import BScroll from '@better-scroll/core';
import Slide from '@better-scroll/slide';
import ObserveDOM from '@better-scroll/observe-dom';
BScroll.use(Slide)
BScroll.use(ObserveDOM)
export default {
    name: 'scrollVue',
    data() {
        return {
            bs:{}
        }
    },
    mounted() {
        this.init()
    },
    destroyed() {
        this.bs.destroy()
    },
    methods: {
        init() {
            this.bs = new BScroll('.scrollWrapper',{
                observeDOM: true ,// 开启 observe-dom 插件
                probeType: 3
            })

        }
    }
}
</script>
<style lang="scss">
.scrollWrapper {
    height: 600px;
    overflow: hidden;
}
</style>