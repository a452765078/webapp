<template>
  <headerVue></headerVue>
  <tab></tab>
  <router-view/>
</template>
<script>
import headerVue from '@/components/base/header/header.vue'
import tab from '@/components/tab/tab.vue'
export default {
  name: 'app',
  data() {
    return {
  
    }
  },
  components: {
    headerVue,
    tab
  }
}
</script>
<style lang="scss">
@import '@/assets/scss/reset.scss';
@import '@/assets/scss/variable.scss';
#app {
  width: 100vw;
  height: 100vh;
  background-color: $color-background;
}
</style>
