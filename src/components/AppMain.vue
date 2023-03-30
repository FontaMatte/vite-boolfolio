<script>
import axios from 'axios';

import ProjectCard from './ProjectCard.vue';

export default {

  name: 'AppMain',
  data() {
    return {
      projects: []
    };
  },
  components: {
    ProjectCard
  },
};
</script>

<template>
  <main>
    <div class="container mt-5">
      <div class="row mb-4">
        <div class="col">
          <h1>
            BOOLFOLIO
          </h1>
        </div>
      </div>
      <div class="row mb-4">    
          <ProjectCard/>
      </div>   
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "../styles/partials/appMain.scss";
</style>