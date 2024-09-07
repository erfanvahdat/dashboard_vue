<template>
  <div class="section-7">
    <!-- header  -->
    <header>
      <div class="cont1 grid grid-cols-5 col-span-1 p-2 text-lg ">
        <h1 class="logo">PHOENIX</h1>
        <nav>
          <ul>
            <li>
              <a href="#">HOME <i class="fa-solid fa-house"></i></a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li><a href="#">Pricing <i class="fa-regular fa-star"></i></a></li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li><a href="#">Contact <i class="fa-solid fa-rotate-left"></i></a></li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li><a href="#">About <i class="fa-solid fa-envelope"></i></a></li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Sidebar -->
    <div class="sidebar">
      <h2>CREATIVE TIM</h2>
      <ul>
        <li><a href="#">HOME <i class="fa-solid fa-house fa-lg m-3"></i></a></li>
        <li><a href="#">Analyzing <i class="fa-solid fa-chart-pie m-3"></i></a></li>
        <li><a href="#">Chart <i class="fa-solid fa-chart-line m-3"></i></a></li>
        <li><a href="#">Ranking <i class="fa-solid fa-ranking-star m-3"></i></a></li>
        <li><a href="#">Setting <i class="fa-solid fa-gear m-3"></i></a></li>
        <li><a href="#">Trade_history <i class="fa-solid fa-clock-rotate-left m-3"></i></a></li>
      </ul>
    </div>

    <!-- Main Content -->
    
    <div class="main-content ">

        <div class="grid_container grid grid-cols-3 grid-flow-row gap-4 p-2 ">

        <div class="row-span-3  ">01</div>
        <div class="col-span-2">02</div>
        <div class="row-span-2 col-span-2">03</div>
      </div>

    </div>


        <!-- ECharts Section -->
        <div class=" main-content ">

        <div class="grid_container grid grid-cols-3 grid-flow-row gap-4 p-2">
          <div class="row-span-3">

              <div id="main" style="width: 300px; height: 300px;"></div>
          </div>


          <div class="col-span-2">02</div>
          <div class="row-span-2 col-span-2">03</div>
        </div>
    </div>


      

    <div class=" main-content 	grid_container	">
    
      <div class=" grid_container flex flex-wrap-row   p-2   ">

      <header class="">
        this is the header
      </header>
    
      
        <button  class=" border-2 border-purple-500  rounded-lg   px-4 py-2 	 hover:bg-purple-500  transition-colors duration-300   m-2.5">click here</button>

      
      <div class=" gird_container ">02</div>
      <div class="gird_container">02</div>

    </div>

  </div>
    
  <!-- Live_position -->
  <div class=" main-content bg-gray-800 p-1.5 text-white  rounded-lg 	">
  <!-- Header Section -->
  <div class="flex justify-between items-center mb-2 text-orange-300 ">
    
    
    <h1 class="flip-animate font-bold   ml-1 font-serif " target="_blank">Live_<span data-hover="Position">Position</span></h1>
    <span class="text-sm">Week total: <span class="font-mono">05:31:41</span></span>
  </div>

  <!-- Today Section -->
  <div class="bg-gray-900 rounded-lg p-4 mb-2">
    <div class="flex justify-between items-center border-b border-gray-700 pb-2 mb-2">
      <span class="text-md font-semibold">Today</span>
      <span class="text-sm">Total: <span class="font-mono">03:50:26</span></span>
    </div>

    <!-- Task Entry -->
    <div class="flex justify-between items-center text-sm">
      <div class="flex items-center space-x-2">
        <span class="text-gray-400">Add description</span>
        <span class="text-green-400">• CRM</span>
      </div>
 
    </div>
  </div>
</div>

  


  
  </div>
</template>


<script>
import * as echarts from 'echarts';
// import { line_plot } from '../chartConfig.js'; // Adjust the path as necessary


// import { option } from '../chart/line.js'; // Adjust the path as necessary

export default {
  name: 'LineChart',
  data() {
    return {
      // Your data array
      chartData: [
        { value: 335, name: 'Direct Access' },
        { value: 310, name: 'Email Marketing' },
        { value: 234, name: 'Affiliate Ads' },
        { value: 135, name: 'Video Ads' },
        { value: 1548, name: 'Search Engines' }
      ]
    };
  },
  methods: {
    
  },

  mounted() {

    const option_1 = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: [
      'Direct Access',
      'Email Marketing',
      'Affiliate Ads',
      'Video Ads',
      'Search Engines'
    ],
    textStyle: {
      color: 'white', // Change this to your desired color
      fontSize: 15,     // Adjust the font size
      fontWeight: 'bold', // You can also adjust the font weight,
      

    }
  },
  series: [
    {
      name: 'Access Source',
      type: 'pie',
      radius: '55%',
      center: ['70%', '70%'],
      data: [
        { value: 335, name: 'Direct Access' },
        { value: 310, name: 'Email Marketing' },
        { value: 234, name: 'Affiliate Ads' },
        { value: 135, name: 'Video Ads' },
        { value: 1548, name: 'Search Engines' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'green'
        }
      }
    }
  ]
};  



    var myChart = echarts.init(document.getElementById('main'))

    // const option= line_plot(x)

    myChart.setOption(option_1)


  },
  
}
</script>

<style>
@import '../dashboard.css';
@import '../text.scss';
</style>


