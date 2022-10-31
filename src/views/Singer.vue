<template>
<div class="singerListWrapper" v-loading="isLoading">
    <div class="active-title" v-show="scrollY>0" :style="listStyle">{{curEleTitle}}</div>
    <scroll :probeType="3" @scroll="getScrollY" ref="scrollRef">
        <ul class="group"  ref="group">
            <li class="group-item"  v-for="group in singers" :key="group.title">
                <span class="title">{{group.title}}</span>
                <ul class="singer">
                    <li v-for="singer in group.list" class="singer-item">
                        <img :src="singer.pic" alt="">
                        <span class="name">{{singer.name}}</span>
                    </li>
                </ul>
            </li>
        </ul>
    </scroll>
    <div class="touch-bar" @click.prevent="handClickBar">
        <ul class="index-list">
            <li v-for="(group,index) in singers" :key="group.title" class="item" :class="{'active-item':curEleIndex==index}" :data-index="index">
                {{group.title}}
            </li>
        </ul>
    </div>
</div>
</template>
<script>
import service from '@/service/getData';
import scroll from '@/components/scroll/scroll.vue';
export default {
    name: 'singerVue',
    components: {
        scroll
    },
    data() {
        return {
            singers:[],
            scrollY: 0,
            listElement: [],    //dom中每个group子元素
            listElementHeight:[],   //dom中每个group子元素的高度
            curEleIndex:0,
            distance:0,
            translateDistance:0,
            SCROLLHEIGHT:30
        }
    },
    computed: {
        isLoading() {
            return this.singers.length
        },
        curEleTitle() {
            const title = this.singers[this.curEleIndex]?this.singers[this.curEleIndex].title:''
            return title
        },
        listStyle() {
            return this.translateDistance<this.SCROLLHEIGHT&&this.translateDistance>0?`transform:translateY(${-this.translateDistance}px)`:'`tranform:translateY(0px)`'
        }
    },
    updated() {
        // console.log("数据更新")
    },
    watch: {
        scrollY() {
            let scrollY = this.scrollY
            const SCROLLHEIGHT = 30
            const listElementHeight = this.listElementHeight

            for(let i = 0;i< listElementHeight.length -1;i++) {
                let eleHeightTop = listElementHeight[i]
                let eleHeightBottom = listElementHeight[i+1]
                if(scrollY>eleHeightTop&&scrollY<eleHeightBottom) {
                    // console.log("this =>",this)
                    this.curEleIndex = i
                    this.distance = eleHeightTop  //目前没明白distance 的意义何在？
                    this.translateDistance = SCROLLHEIGHT - (eleHeightBottom - scrollY)
                    // console.log(scrollY,eleHeightTop,eleHeightBottom,i)
                    // console.log(this.distance,this.translateDistance)
                    break
                }
            }
        },
        singers() {
            this.$nextTick(()=>{
                this.calListHeight()
            })
        }
    },
    async created() {
        let res = await service.getSingerList()
        this.singers = res.singers
    },
    mounted() {
        // console.log(this)
    },
    methods: {
        getScrollY(posY) {
            this.scrollY = -posY  
        },
        calListHeight() {
            this.listElement = this.$refs['group'].children
            const listElement = this.$refs['group'].children
            const listElementHeight = []
            let accumHeight = 0
            listElementHeight.push(0)   //之前删掉了这部分代码，导致索引不对
            for(let i = 0;i < listElement.length;i++) {
                accumHeight += listElement[i].clientHeight
                listElementHeight.push(accumHeight)
            }
            this.listElementHeight = listElementHeight
            // console.log(this.listElementHeight)
        },
        toEle(ele,index) {
            this.$refs['scrollRef'].bs.scrollToElement(ele)
            this.curEleIndex = index
        },
        handClickBar(e) {
            // console.log(e.target.dataset.index)
            const eleIndex = parseInt(e.target.dataset.index)
            const willToEle = this.listElement[eleIndex]
            this.toEle(willToEle,eleIndex)
        }
    }

}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
.singerListWrapper {
    background-color: $color-background;
    color: $color-text-l;
    font-size: $font-size-medium;
    overflow: hidden;
    position: relative;
    .group {
        .group-item {
            padding-bottom: 20px;
            box-sizing: border-box;
            .title {
                display: inline-block;
                height: 30px;
                line-height: 30px;
                width: 100%;
                background-color: $color-highlight-background;
                font-size: $font-size-small;
                box-sizing: border-box;
                padding-left: 20px;
            }
            .singer {
                .singer-item {
                    margin-top: 15px;
                    width: 100%;
                    height: 60px;
                    padding: 0px 28px;
                    box-sizing: border-box  ;
                    display: flex;
                    align-items: center;
                    img {
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        margin-right: 16px;
                    }
                }
            }
        }
    }
    .active-title {
        display: inline-block;
        position: absolute;
        top: 0;
        height: 30px;
        line-height: 30px;
        width: 100%;
        background-color: $color-highlight-background;
        font-size: $font-size-small;
        box-sizing: border-box;
        padding-left: 20px;
        z-index: 99;
    }
    .touch-bar {
        position: absolute;
        top: 10%;
        right: 5px;
        width: 30px;
        min-height: 100px;
        border-radius: 10px;
        padding: 15px 0;
        background-color: $color-background-d;
        color: $color-text-l;
        font-size: $font-size-small;
        z-index: 99;
        text-align: center;
        .index-list {
            .item {
                padding: 3px;
                &.active-item {
                    color: $color-theme;
                }
            }
        }
    }
}
</style>