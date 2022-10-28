<template>
    <div class="albums-wrapper">
        <div class="title" v-show="albums.length">热门歌单推荐</div>
        <div class="albums">
            <div class="item" v-for="item in albums" :key="item.id">
                <img v-lazy="item.pic" alt="">
                <div class="item-content">
                    <div class="albumName">{{item.username}}</div>
                    <div class="albumTitle">{{item.title}}</div>
                </div>
    
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'albumsVue',
    props: {
        albums:{
            type:Array,
            default(){return []}
        }
    },
    created() {

    }

}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
.albums-wrapper {
    .title {
        display: block;
        height: 60px;
        line-height: 60px;
        text-align: center;
        color:$color-theme;
        font-size: $font-size-medium;
    }
    .albums {
        .item {
            display: flex;
            padding: 0 18px 20px 18px;
            img {
                width: 55px;
                height: 55px;
            }
            .item-content {
                margin-left: 14px;
                display: flex;
                flex-direction: column;
                .albumName {
                    margin-top: 8px;
                    font-size: $font-size-medium;
                    color: $color-text;
                }
                .albumTitle {
                    margin-top: 14px;
                    font-size: $font-size-medium;
                    color: $color-text-d;
                }
            }
        }
    }
}


</style>