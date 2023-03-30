<script>
import axios from 'axios';

export default {

  name: 'ProjectCard',
  data() {
    return {
      projects: [],
      currentPage: 1,
      lastPage:1
    };
  },
  components: {

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
  <div v-for="project in projects" class="col-12 col-sm-4 col-md-3">
    <div class="card h-100" style="width: 18rem;">
      <img :src="project.img" class="card-img-top" alt="...">
      <div class="card-body">
        <h4 class="card-title">{{ project.title }}</h4>
        <h5 class="card-text"><strong>Commit:</strong>{{ project.commits }}</h5>
        <h5 class="card-text"><strong>Stars:</strong>{{ project.stars }}</h5>
        <h5 class="card-text"><strong>Type:</strong>{{ project.type ? project.type.name : '-' }}</h5>
        <div v-if="project.technologies.length > 0">
          <h5>
            <strong>technology:</strong>
          </h5>
          <ul >
            <li v-for="technology in project.technologies">
              {{ technology.name }}
            </li>
          </ul>
        </div>
        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>