<script>

export default {

  name: 'AppHeader',
  data() {
    return {

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
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Pricing</a>
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