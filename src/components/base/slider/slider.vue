<template>
<div class="slider">
    <div class="slider-content">
        <div class="slider-page" v-for="(item,index) in sliders" :key="item.id">
            <a href="">
                <img :src="item.pic" alt="">
            </a>
        </div>
        <!-- <div class="slider-page">
            <a href="">
                <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1114%2F041621122252%2F210416122252-1-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669294888&t=db7a7a2bd34cfc2807f76674ed308b5f" alt="">
            </a>
        </div>
        <div class="slider-page">
            <a href="">
                <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1114%2F010421142927%2F210104142927-13-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669294888&t=626fffdd6243222097af644f95b206c1" alt="">
            </a>
        </div>
        <div class="slider-page">
            <a href="">
                <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.gpbctv.com%2Fuploads%2F20210424%2Fzip_1619246266UkP6CL.jpg&refer=http%3A%2F%2Fwww.gpbctv.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669294888&t=f6eb0acdab9568fac2dff6b70f93c93c" alt="">
            </a>
        </div>
        <div class="slider-page">
            <a href="">
                <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.gpbctv.com%2Fuploads%2F20210424%2Fzip_1619246266UkP6CL.jpg&refer=http%3A%2F%2Fwww.gpbctv.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669294888&t=f6eb0acdab9568fac2dff6b70f93c93c" alt="">
            </a>
        </div>
        <div class="slider-page">
            <a href="">
                <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.gpbctv.com%2Fuploads%2F20210424%2Fzip_1619246266UkP6CL.jpg&refer=http%3A%2F%2Fwww.gpbctv.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669294888&t=f6eb0acdab9568fac2dff6b70f93c93c" alt="">
            </a>
        </div>
        <div class="slider-page">
            <a href="">
                <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.gpbctv.com%2Fuploads%2F20210424%2Fzip_1619246266UkP6CL.jpg&refer=http%3A%2F%2Fwww.gpbctv.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669294888&t=f6eb0acdab9568fac2dff6b70f93c93c" alt="">
            </a>
        </div>
        <div class="slider-page">
            <a href="">
                <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.gpbctv.com%2Fuploads%2F20210424%2Fzip_1619246266UkP6CL.jpg&refer=http%3A%2F%2Fwww.gpbctv.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669294888&t=f6eb0acdab9568fac2dff6b70f93c93c" alt="">
            </a>
        </div>
        <div class="slider-page">
            <a href="">
                <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.gpbctv.com%2Fuploads%2F20210424%2Fzip_1619246266UkP6CL.jpg&refer=http%3A%2F%2Fwww.gpbctv.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669294888&t=f6eb0acdab9568fac2dff6b70f93c93c" alt="">
            </a>
        </div>
        <div class="slider-page">
            <a href="">
                <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.gpbctv.com%2Fuploads%2F20210424%2Fzip_1619246266UkP6CL.jpg&refer=http%3A%2F%2Fwww.gpbctv.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669294888&t=f6eb0acdab9568fac2dff6b70f93c93c" alt="">
            </a>
        </div>
        <div class="slider-page">
            <a href="">
                <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.gpbctv.com%2Fuploads%2F20210424%2Fzip_1619246266UkP6CL.jpg&refer=http%3A%2F%2Fwww.gpbctv.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669294888&t=f6eb0acdab9568fac2dff6b70f93c93c" alt="">
            </a>
        </div> -->
    </div>
        <div class="slider-dot">
        <div class="item" :class="{'item-active':curIndex==index}" v-for="(item,index) in sliders" :key="item.id"></div>
    </div>
</div>
</template>
<script>
import BScroll from '@better-scroll/core'
import Bslide from '@better-scroll/slide'
BScroll.use(Bslide)
export default {
    name: 'sliderVue',
    data() {
        return {
            curIndex:0,
            scroll:{}
        }
    },
    props: {
        sliders: {
            type:Array,
            default() {
                return []
            }
        },

    },
    mounted() {
        this.init()
    },
    updated() {
        console.log("updated")
    },
    destroyed() {
        this.scroll.destroy()
    },
    methods: {
        init() {
            this.scroll = new BScroll('.slider',{
                scrollX: true,
                scrollY: false,
                slide: true,
                momentum: false,
                bounce: false,
                probeType: 3
            })
            let that = this
            this.scroll.on('slideWillChange', (page) => {
                that.curIndex = page.pageX
            })

        },
    }
}

</script>
<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
.slider {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .slider-content {
        height: 100%;
        white-space: nowrap;
        .slider-page {
            width: 100%;
            height: 100%;
            display: inline-block;
            transform: translate3d(0, 0, 0);
            a {
                width: 100%;
                height: 100%;
                display: block;
                color: $color-text;
                img {
                    display: block;
                    width: 100%;
                    z-index: 999;
                }
            }
        }
    }

    .slider-dot {
        padding: 7px;
        z-index: 999;
        position: absolute;
        height: 20px;
        width: 120px;
        top: 90%;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        display: flex;
        justify-content: space-around;
        .item {
            z-index: 999;
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: $color-text-ll;
            &.item-active {
                width: 24px;
                height: 8px;
                border-radius: 15px;
            }
        }
    }
}
</style>
