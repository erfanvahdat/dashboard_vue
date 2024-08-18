



<template>
  <li>{{ itemName }} look here</li>


  
</template>



<script>
export default {
  props: {
    itemName: String,  // This prop receives the task name
  },
};
</script>