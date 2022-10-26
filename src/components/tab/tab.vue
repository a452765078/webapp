<template>
<div class="tab">
    <span class="item" :class="{'active-item':curIndex==index}" v-for="(item,index) in tabList" :key="index" @click="curIndex=index">{{item}}</span>
</div>
</template>
<script>
export default {
    name: 'tabVue',
    data() {
        return {
            tabList:[
                '推荐',
                '歌手',
                '排行',
                '搜索'
            ],
            curIndex:0
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
.tab {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    color: $color-text-l;
    height: 44px;
    line-height: 44px;
    font-size: $font-size-medium;
        .item {
            display: inline-block;
            width: 20%;
            height: 44px;
            line-height: 44px;
            text-align: center;
            position: relative;
            &.active-item {
                color: $color-theme;
                &::after {
                    display: inline-block;
                    color: $color-theme;
                    content: '';
                    width: 28px;
                    border-bottom: 2px solid $color-theme;
                    position: absolute;
                    left: 50%;
                    top: 36px;
                    margin-left: -14px;
                }
            }
    }
}
</style>