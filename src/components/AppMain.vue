<script>
import axios from 'axios';

export default {

  name: 'AppMain',
  data() {
    return {

    };
  },
  components: {

  },
  created() {
    axios
      .get('http://127.0.0.1:8003/api/projects')
      .then(response => {
        console.log(response.data);
      })
  }
};
</script>

<template>
  <main>
    MAIN
  </main>
</template>

<style lang="scss" scoped>
@import "../styles/partials/appMain.scss";
</style>