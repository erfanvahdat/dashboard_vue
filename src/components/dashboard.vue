<template>
  <div class="section-7">

    <!-- Sidebar section -->
    <Sidebar></Sidebar>

    <!-- Header section -->
    <Head></Head>

    <!-- Content section for child routes -->
    <div class="main-content grid_container">
      <router-view />
    </div>

  </div>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>

<style>
@import '../dashboard.css';
@import '../text.scss';
</style>
