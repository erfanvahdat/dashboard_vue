<template>
  <div class="section-7">

    <Sidebar></Sidebar>

    <Head></Head>

    <Status>

    </Status>

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
  <div class=" flex flex-row   space-x-5    bg-gray-900 rounded-lg p-4 mb-2  " >
  
    
    
    <div class="flex flex-col text-center  border-r border-dashed border-gray-700 "  >
      
        <h1 class="font text-s font-sans text-green-600 broder ">Ticker</h1>


        <span class=" m-2.5 space-y-2 	"> ETH </span>
    
    
    </div>

      
    <div class="flex flex-col text-center  border-r border-dashed border-gray-700 "  >
      
      <h1 class="font text-s font-sans text-green-600 broder ">Size</h1>


      <span class=" m-2.5 space-y-2 	"> ETH </span>
  
  </div>

    <div class="flex flex-col text-center  border-r border-dashed border-gray-700 "  >
      
      <h1 class="font text-s font-sans text-green-600 broder ">Realize_PNL(%)</h1>


      <span class=" m-2.5 space-y-2 	"> ETH </span>
  
  </div>


</div>

<div class="flex flex-row text-center  border-r border-dashed border-gray-700 "  >
  
  <h1 class="font text-s font-sans text-green-600 broder ">Realize_PNL(%)</h1>


  <span class=" m-2.5 space-y-2 	"> ETH </span>




    <div class="border-r-1 border-dashed "  >
    <button  class=" border-2 border-purple-500  rounded-lg   px-4 py-2 	 hover:bg-purple-500  transition-colors duration-300   m-2.5">click here</button>
    
    </div>

    <div class="border-r-1 border-dashed "  >
    <button  class=" border-2 border-purple-500  rounded-lg   px-4 py-2 	 hover:bg-purple-500  transition-colors duration-300   m-2.5">click here</button>
    
    </div>
    <div class="border-r-1 border-dashed "  >
    <button  class=" border-2 border-purple-500  rounded-lg   px-4 py-2 	 hover:bg-purple-500  transition-colors duration-300   m-2.5">click here</button>
    
    </div>


  <button  class=" border-2 border-purple-500  rounded-lg   px-4 py-2 	 hover:bg-purple-500  transition-colors duration-300   m-2.5">click here</button>



  </div>
</div>

  


  
  </div>
</template>


<script>
import * as echarts from 'echarts';
import Status from './Status.vue';


export default {
  
  
}
</script>

<style>
@import '../dashboard.css';
@import '../text.scss';


</style>


