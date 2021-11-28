<template>
  <v-app>
    <router-view name="toolbar" />
    <v-main class="main">
      <router-view :key="$route.fullPath"/>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
  import Footer from './components/base/Footer';
  export default {
    name: 'App',
    components: {
      Footer,
    },
  };
</script>

<style>
  .main {
    width: 1300px;
    margin: 0 auto;
  }
</style>
