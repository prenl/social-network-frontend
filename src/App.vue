<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
</script>

<style lang="scss">
// Variable overrides first
$primary: #900;
$enable-shadows: true;
$prefix: "mo-";

// Then import Bootstrap
@import "../node_modules/bootstrap/scss/bootstrap";
</style>
