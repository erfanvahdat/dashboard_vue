



<template>

  
  <h2>Example Built-in 'is' Attribute</h2>
  <p>The IMG tag below is set to be replaced by a component by the use of 'is="vue:child-comp"'.</p>
  <!-- <img is="vue:comp1" /> -->


    <!-- <div > -->
      <label >AGE</label>
      <input type="text" v-model =  'age'>
      <button v-on:click="increse">INCRESE AGE</button>
      <button v-on:click="decrease">DeCRESE AGE</button>

      <button v-on:click="decrease">DeCRESE AGE</button>

  <p>{{ select_color }}</p>


  <select name="a" id="select_1" v-model= 'select_color'>
    <option value="Orange">Orange</option>
    <option value="Green">Green</option>
    <option value="blue">blue</option>
  
  </select>


  <button @:click="move" >shift it </button>


  {{ list }}


  <ol>
    <li v-for="(item,key) in list" >
      

      <ol>
        <li>

          {{ item.name }}
          {{ item.age }}
          {{ item.location }}
          
        </li>
    </ol>
      <hr>
      



        <!-- <div>{{ item.name }}</div> -->

        <!-- {{ item.age }}
        {{ item.location }} -->
        <!-- {{ key.age }} -->
        
        
    </li>
  </ol>


</template>

<script>
export default {
  data() {
    return {
      value: true, 
      select_color : '',

      list : [
          
        {"erfan" : {"age":25, "location" : 'shiraz'}} ,
        {"alireza" :{"age" : 22, "location" : 'tehran'}},
            ],


      age : 23,
      text: 'something',
      name : "erfan"
    };
  },

  methods: {
    changeText() {

      this.value = !this.value; // Toggle the value
      if (this.value) {
        this.text = "Hello!";
      } else {
        this.text = "something";
      }
    },
    increse(){
      return this.age++
      
    },
    decrease(){
      return this.age--
      
    },
    con_to_camel(){
      this.name =  this.name.toUpperCase()
    },
    move(){

      const first = this.list.shift()
      
      this.list.push(first)
      
    }
  },
  computed:{
    to_upper(){
      return  this.name = this.name.toUpperCase()
      
    }
    
    
  },
  watch:{
    age(newVal,oldVal){

      if (this.age >= 25){
        setTimeout(() => {
          this.age = 20  
          console.log('operation done')
        }, 3000);

      }



      

    }
  }

};
</script>

<style scoped>
  .rotate {
    rotate: 160deg;
    transition: rotate 1s;
  }
  div2 {
    border: solid black 2px;
    background-color: lightcoral;
    width: 60px;
    height: 60px;
  }
  h1, button, div {
    margin: 10px;
  }
</style>
