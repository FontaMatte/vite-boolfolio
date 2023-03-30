<script>

export default {

  name: 'ProjectCard',
  data() {
    return {
      defaultImg: 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg'
    };
  },
  components: {
    
  },
  props: {
    project: {
      type: Object
    }
  }
};
</script>

<template>
  <div class="card h-100">
      <img :src="project.img ?? defaultImg" class="card-img-top" :alt="project.title">
      <div class="card-body">
        <h4 class="card-title">{{ project.title }}</h4>
        <h5 class="card-text"><strong>Commit:</strong>{{ project.commits }}</h5>
        <h5 class="card-text"><strong>Stars:</strong>{{ project.stars }}</h5>
        <h5 class="card-text"><strong>Type:</strong>{{ project.type ? project.type.name : '-' }}</h5>
        <router-link :to="{ name: 'portfolio-show', params: { slug: project.slug} }" class="btn btn-primary">
          Vedi Dettagli
        </router-link>
      </div>
      <div class="card-footer text-body-secondary">
        <div v-if="project.technologies.length > 0">
            <span class="badge text-bg-primary me-2" v-for="technology in project.technologies">
              {{ technology.name }}
            </span>
          </div>
      </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/partials/appMain.scss";
</style>