<template>

  <div class="7">

    <!-- header  -->
    <header>

      <div class="cont1   grid grid-cols-5  col-span-1  border-1  border-solid  border-gray-600    p-2 font text-lg	 	">

        <h1 class="logo   ">PHOENIX</h1>
        <nav>
          <ul>
            <li>

              <a href="#">
                HOME
                <i class="  fa-solid fa-house     "></i>

              </a>
            </li>
          </ul>
        </nav>

        <nav>
          <li><a href="#">Pricing <i class="fa-regular fa-star"></i></a></li>



        </nav>


        <nav>
          <li><a href="#">Contact <i class="fa-solid fa-rotate-left"></i></a></li>
        </nav>

        <nav>
          <li><a href="#">About <i class="fa-solid fa-envelope"></i></a></li>
        </nav>
      </div>


    </header>

    <!-- Sidebar -->

    <div class="sidebar">

      <h2>CREATIVE TIM</h2>

      <ul>

        <li>
          <a href="">
            HOME
            <i class="fa-solid fa-house fa-lg	  m-3		"></i>
          </a>

        </li>

        <li>
          <a href="">
            Analyzing
            <i class="fa-solid fa-chart-pie m-3"></i>
          </a>


        </li>


        <li>
          <a href="">
            Chart
            <i class="fa-solid fa-chart-line m-3"></i>
          </a>
        </li>

        <li>
          <a href="">
            Ranking
            <i class="fa-solid fa-ranking-star m-3"></i>
          </a>
        </li>

        <li>
          <a href="">
            Settig
            <i class="fa-solid fa-gear m-3"></i>
          </a>
        </li>


        <li>
          <a href="">
            Trade_history
            <i class="fa-solid fa-clock-rotate-left m-3"></i>
          </a>
        </li>


      </ul>
    </div>

    <div class="main-content">


      <!-- Chart presenting -->
      <div class="card">


        <div>
          <h2>Posts</h2>
          <ul>
            <li v-for="post in posts" :key="post.id">
              <h3>{{ post.title }}</h3>
              <p>{{ post.body }}</p>
            </li>
          </ul>
        </div>



      </div>

    </div>



  </div>
</template>





<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: []
    };
  },



  methods: {
    async created() {

      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        this.posts = response.data;
      } catch (error) {
        console.error(error);
      }
    }

  },




};
</script>


<style lang="scss">
@import '../dashboard.css'
</style>
