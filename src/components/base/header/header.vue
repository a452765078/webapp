<template>
    <div class="header">
        <span class="logo"></span>
        Chicken Music
    </div>
</template>
<script>
export default {
  name:'headerVue'
}
</script>
<style lang="scss">
@import '@/assets/scss/mixin.scss';
@import '@/assets/scss/variable.scss';
.header {
    color: $color-theme;
    height: 44px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: $font-size-large;
    .logo {
        display: inline-block;
        width: 30px;
        height: 32px;
        margin-bottom: 6px;
        margin-right: 6px;
        background-image: url('@/assets/images/default.png');
        background-size:30px 32px;
    }
}
</style>