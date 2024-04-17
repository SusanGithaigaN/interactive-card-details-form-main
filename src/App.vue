<template>
  <!-- link routes with pages -->
  <router-link to="/">Home</router-link>
  <router-link to="/thank-you">Complete</router-link>
  <router-view></router-view>
</template>

<script>
import { RouterLink } from 'vue-router';


export default {
  name: "App",
  components: {},
};
</script>
<style scoped></style>
