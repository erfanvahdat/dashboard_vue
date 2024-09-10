<template>

  <Head></Head>
  <Sidebar></Sidebar>


  <!-- <Live_pos></Live_pos> -->

  <Trade_chart></Trade_chart>


  <!-- <router-link to="/">Home</router-link>

  <router-link to="/dashboard">DASH</router-link> -->


  <!-- This will dynamically load components here based on the current route -->
  <router-view />




</template>

<script>
import Live_Pos from './components/Live_Pos.vue';

export default {
  name: 'App'
}
</script> 

<style lang="scss">
@import './main.css';
@import './style/sidebar.css';
</style>
