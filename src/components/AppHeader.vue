<script>

export default {

  name: 'AppHeader',
  data() {
    return {
      menuItems: [
        {
          routeName: 'home',
          label: 'Home'
        },
        {
          routeName: 'about-us',
          label: 'Chi Siamo'
        },
        {
          routeName: 'portfolio',
          label: 'Portfolio'
        },
      ]
    };
  },
  components: {

  }
}
</script>

<template>
  <header>
    <div class="container">
      <div class="row mb-4">
        <div class="col">
          <h1 class="text-center">
            BOOLFOLIO
          </h1>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
              <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav d-flex justify-content-center w-100">
                    <li class="nav-item" v-for="menuItem in menuItems">
                      <router-link :to="{ name: menuItem.routeName }" class="nav-link">
                        {{ menuItem.label }}
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        </div>
      </div>
    </div>
    
  </header>
</template>

<style lang="scss" scoped>
@import "../styles/partials/appHeader.scss";
</style>