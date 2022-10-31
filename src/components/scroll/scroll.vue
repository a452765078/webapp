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
    props: {
        probeType: {
            type:Number,
            default:0
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
            let probeType = this.probeType
            const that = this
            this.bs = new BScroll('.scrollWrapper',{
                observeDOM: true ,// 开启 observe-dom 插件
                probeType
            })
            if(probeType == 3) {
                this.bs.on('scroll',function(pos) {
                    that.$emit("scroll",pos.y)
                })
            }
        }
    }
}
</script>
<style lang="scss">
.scrollWrapper {
    height: 550px;
    overflow: hidden;
}
</style>