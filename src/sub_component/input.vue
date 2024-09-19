<template>
    <div class="textInputWrapper">
      <input :placeholder="inputPlaceholder" type="text" class="textInput">
    </div>
  </template>
  
  <script>
  export default {
    props: {
      value: {
        type: String,
        default: 'Type Here'
      }
    },
    computed: {
      inputPlaceholder() {
        return this.value;
      }
    }
  }
  </script>
  
  <style scoped>
  @import "../style/input.css";
  </style>
  