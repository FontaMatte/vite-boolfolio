<script>

import axios from 'axios';

export default {

  name: 'ProjectsShow',
  components: {
  },
  data() {
    return {
        project: null,
        defaultImg: 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg'

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

          if (response.data.project) {
            this.project = response.data.project;
          }
          else {
            this.$router.push({ name: 'not-found' })
          }
          
        });
    }
  }
};
</script>

<template>
    <div class="container">
      <div class="row">
          <div class="col">
            <h2 class="mt-3">
              Progetto
            </h2>               
          </div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-4 col-md-3">
          <div v-if="project">
            <div class="card h-100">
              <img :src="project.img ?? defaultImg" class="card-img-top" :alt="project.title">
              <div class="card-body">
                <h4 class="card-title">{{ project.title }}</h4>
                <h5 class="card-text"><strong>Commit:</strong>{{ project.commits }}</h5>
                <h5 class="card-text"><strong>Stars:</strong>{{ project.stars }}</h5>
                <h5 class="card-text"><strong>Type:</strong>{{ project.type ? project.type.name : '-' }}</h5>
              </div>
              <div class="card-footer text-body-secondary">
                <div v-if="project.technologies.length > 0">
                    <span class="badge text-bg-primary me-2" v-for="technology in project.technologies">
                      {{ technology.name }}
                    </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
</style>