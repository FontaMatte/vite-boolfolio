<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  data() {
    return {

    };
  },
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<template>

  <AppHeader/>
  <router-view></router-view>
  <AppFooter/>

</template>

<style lang="scss">
@import "./styles/global.scss";
</style>
