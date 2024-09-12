<!-- Sidebar.vue -->
<template>

  <div class="  flex flex-column">
    <div class=" sidebar  flex flex-col font-mono    w-fit  pt-[20px]  ">

      <a href="#">
        <span class="logo mr-5 font-bold border-1 border-solid rounded-2 font-serif ml-8 ">PHOENIX
          <i class="fa-solid fa-house"></i>
        </span>
      </a>

      <div>

        <ul class="ml-8  ">
          <li @click="$emit('showHome')">
            <a href="#">HOME
              <span class="fa-solid fa-house fa-sm m-1"></span>
            </a>
          </li>

          <li @click="$emit('showAnalyze')">
            <a href="#">Analyzing
              <span class="fa-solid fa-chart-pie m-1"></span>
            </a>
          </li>

          <li @click="$emit('showCharts')">
            <a href="#">Chart
              <span class="fa-solid fa-chart-pie m-1"></span>
            </a>
          </li>

          <li @click="$emit('showRanking')">
            <a href="#">Ranking
              <span class="fa-solid fa-sitemap"></span>
            </a>
          </li>

          <li @click="$emit('showSettings')">
            <a href="#">Setting
              <span class="fa-solid fa-gear m-1"></span>
            </a>
          </li>

          <li @click="$emit('showHistory')">
            <a href="#">Trade History
              <span class="fa-solid fa-clock-rotate-left"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  methods: {
    showCharts() {
      this.$emit('showChart'); // Emit an event to parent when clicked

    }
  }
}
</script>


<style>
@import '../style/logo.css';

.sidebar h2 {
  @apply ml-[20px] text-lg
}

.sidebar ul {
  @apply p-0 mt-[30px]
}

.sidebar ul a {
  @apply text-lg
}


.sidebar ul li {
  @apply p-1 m-1 text-lg mb-5
}

.sidebar ul li:hover {
  @apply bg-[#16A085]
}
</style>
