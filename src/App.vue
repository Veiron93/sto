<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "~../node_modules/normalize.css/normalize.css";
  @import "~../node_modules/bootstrap/scss/bootstrap-grid.scss";
  @import "~../node_modules/@fortawesome/fontawesome-free/css/all.css";
  @import "/resources/sass/main.scss";
</style>
