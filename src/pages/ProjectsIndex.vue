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
        projects: [],
        currentPage: 1,
        lastPage:1,
    };
  },
  created() {
    this.getProjects();
  },
  methods: {
    changePage(page) {
            this.currentPage = page;
            this.getProjects();
        },
    getProjects() {
      axios
        .get('http://127.0.0.1:8004/api/projects', {
          params: {
            page:this.currentPage
          }
        })
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
              <h2 class="mt-3">
                Progetti
              </h2>               
            </div>
        </div>
        <div class="row g-3 mb-4">
            <div v-for="project in projects" class="col-12 col-sm-4 col-md-3">
                <ProjectCard :project="project" />
            </div>
        </div>
        <div class="row">
          <div class="col">
            <nav class="d-flex justify-content-center">
              <ul class="pagination">
                <li class="page-item" v-for="i in lastPage">
                  <button class="page-link" :class="{ active: currentPage == i}"
                  @click="changePage(i)">
                    {{ i }}
                  </button>
                </li>
              </ul>
            </nav>        
          </div>
        </div>        
    </div>
</template>

<style scoped>
</style>