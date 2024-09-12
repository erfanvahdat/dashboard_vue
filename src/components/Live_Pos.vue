<template>

  <div class="flex flex-row"></div>

  <div>
    <Status></Status>
  </div>


  <!-- Live Position  -->
  <div class="first_sec  mx-2 my-1  rounded-2 flex  min-w-[700px]  h-[100px] bg-gray-800 ">

    <div class="flex flex-col   w-full   ">
      <!-- header -->
      <div class="flex justify-between border-b-1 border-solid border-gray-200">

        <div>
          <h1 class="flip-animate font-bold   ml-2 font-serif text-lg text-orange-500 " target="_blank">Live_<span
              data-hover="Position">Position</span></h1>
        </div>
        <div>
          <span class="text-sm font-serif mr-2">TODAY: <span
              class="font-mono hover:underline text-sm font-serif mb-2 hover:text-indigo-400">{{
                get_now() }}</span></span>
        </div>
      </div>

      <!-- content -->
      <div class="header_live flex flex-row      px-3	     w-full h-[50px]">


        <div class="flex flex-col  text-center  border-r border-dashed border-gray-700   p-2">

          <div class="font text-s font-sans text-green-600 broder ">Size</div>
          <div class=" mt-1  	"> ETH </div>

        </div>

        <div class="flex flex-col  text-center  border-r border-dashed border-gray-700 ">

          <div class="font text-s font-sans text-green-600 broder ">Size</div>
          <div class=" m-2.5 space-y-2 	"> ETH </div>

        </div>
        <div class="flex flex-col  text-center  border-r border-dashed border-gray-700 ">

          <div class="font text-s font-sans text-green-600 broder ">Size</div>
          <div class=" m-2.5 space-y-2 	"> ETH </div>

        </div>


      </div>


    </div>






  </div>


</template>


<script>

var today = new Date();

// Get the day of the week (0-6, where 0 is Sunday and 6 is Saturday)
var day = today.getDay();

// Array of day names
// var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const daylist = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default {



  data() {
    return {

      mess: ''

    }

  },
  methods: {
    get_now() {
      return daylist[day]
    }
  },
}


</script>


<style>
.header_live>div {

  @apply hover:bg-gray-700 text-sm font-serif
}
</style>