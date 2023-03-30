<script>

import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {

  name: 'ProjectsIndex',
  components: {
    ProjectCard
  },
  data() {
    return {
        project: null,
    };
  },
  created() {
    this.getProject();
  },
  methods: {
    getProject() {
      axios
        .get(`http://127.0.0.1:8004/api/projects/${this.$route.params.slug}`)
        .then(response => {
          console.log(response.data);

          // this.projects = response.data.projects.data;
        });
    }
  }
};
</script>

<template>

</template>

<style scoped>
</style>