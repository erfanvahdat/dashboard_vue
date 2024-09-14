<!-- header  -->

<template>

    <div class="navbar   bg-indigo-400   ">

        <div class="navbar-start">
            <div class="dropdown ">


                <div role="button" tabindex="0"
                    class="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-3xl  s ml-3 m-2">
                    <div class="space-y-2 bg-indigo-400">
                        <span class="text-lg font-serif  mt-2 ">Menu</span>
                        <span class="ai-font-smaller"></span>
                        <span
                            class="block h-1 w-10 origin-center rounded-full bg-slate-600 transition-transform ease-in-out group-hover:translate-y-1.5 group-hover:rotate-45"></span>
                        <span
                            class="block h-1 w-7 origin-center rounded-full bg-orange-500 transition-transform ease-in-out group-hover:w-10 group-hover:-translate-y-1.5 group-hover:-rotate-45"></span>


                    </div>
                </div>

                <ul tabindex="0" class=" hover_id menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow 
                  space-y-3 text-black  ">

                    <li @click="$emit('showHome')">
                        <a href="#">HOME
                            <span class="fa-solid fa-house fa-sm m-1 "></span>
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

        <div class="navbar-center ">
            <!-- <a class="btn btn-ghost text-xl">daisyUI</a> -->

            <a href="#" class="text-xl">
                <span class="logo mr-5 font-bold border-1 border-solid rounded-2 font-serif ml-8 ">PHOENIX
                    <i class="fa-solid fa-house"></i>
                </span>
            </a>

        </div>
        <div class="navbar-end">
            <button class="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
            <button class="btn btn-ghost btn-circle">
                <div class="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <span class="badge badge-xs badge-primary indicator-item"></span>
                </div>
            </button>
        </div>
    </div>



</template>



<style>
.hover_id>li {
    @apply hover:border-indigo-500 border-transparent border-b-2 rounded shadow
}
</style>




<!-- <template>


    <div class=" flex flex-row   text-lg      bg-[#334464] justify-between 
          justify-start	 space-x-5  font-serif h-[60px] p-3  ">



        <div class="flex space-x-5">


            <div>

                <a href="#">Pricing <i class="fa-regular fa-star"></i></a>
            </div>


            <div>
                <a href="#">Contact <i class="fa-solid fa-rotate-left"></i></a>

            </div>


            <div>
                <a href="#">About <i class="fa-solid fa-envelope"></i></a>
            </div>

        </div>


        <div class="flex">


            <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer">
                <div
                    class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                </div>
                <span class="ms-3 text-sm font-medium text-white dark:text-gray-300">Light Swticher</span>
            </label>

        </div>


    </div>


</template>



<script>
export default {
    data() {
        return {




        }
    }
}
</script> -->
