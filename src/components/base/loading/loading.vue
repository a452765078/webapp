<template>
    <div class="loading">
        <img src="./loading.gif" alt="">
        <span>{{title}}</span>
    </div>
</template>
<script>
export default {
    name: 'loading',
    data() {
        return {
            title: '正在载入...'
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
.loading {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        width: 30px;
        height: 30px;
    }
    span {
        margin-top: 8px;
        font-size: $font-size-medium;
        color: $color-theme
    }
}
</style>