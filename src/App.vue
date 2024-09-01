<!-- src/App.vue -->
<template>




  <dashboard/>



  

</template>






<script>
import axios from 'axios';

export default {
  data() {
    return {
      message: ''
    };
  },
  methods: {
  
  }
};
</script>


<!-- <script>
import Dashboard from './components/dashboard.vue';  // Import Dashboard component

export default {
  components: {
    Dashboard  // Register Dashboard component locally
  }
};
</script> -->

<style lang="scss">
@import './main.css';
@import './sidebar.css';
@import './main.css';
</style>
