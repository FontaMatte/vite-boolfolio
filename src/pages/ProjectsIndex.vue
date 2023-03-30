<script>

import axios from 'axios';

export default {

  name: 'ProjectsIndex',
  data() {
    return {
        projects: [],
        currentPage: 1,
        lastPage:1
    };
  },
  created() {
    this.getprojects();
  },
  methods: {
    getprojects() {
      axios
      .get('http://127.0.0.1:8003/api/projects')
      .then(response => {
        console.log(response.data);

        this.projects = response.data.projects.data;
        this.lastPage = response.data.projects.last_page;
      })
    }
  }
};
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col">
                Progetti
            </div>
        </div>        
    </div>
</template>

<style scoped>
</style>