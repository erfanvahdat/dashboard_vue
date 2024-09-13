<template>
    <ul class="menu bg-base-200  w-56 text-black text-md  w-full pt-3">



        <li @click="$emit('showHome')">
            <a href="#">HOME
                <span class="fa-solid fa-house fa-sm m-1 "></span>
            </a>
        </li>

        <li>
            <!-- Main -->
            <a class="group relative inline-block overflow-hidden rounded">
                <span class="absolute left-0 top-0 mb-0 flex h-full w-0 translate-x-0 transform bg-indigo-600 
                    opacity-90 transition-all duration-700 ease-out group-hover:w-full">
                </span>
                <span class="relative group-hover:text-white">Main <i class="fa-solid fa-house"></i></span>
            </a>


            <ul>

                <li @click="$emit('showCharts')">
                    <a href="#">Chart
                        <span class="fa-solid fa-chart-pie m-1"></span>
                    </a>
                </li>



                <li @click="$emit('showSettings')">
                    <a href="#">Setting
                        <span class="fa-solid fa-gear m-1"></span>
                    </a>
                </li>



            </ul>


        </li>

        <!-- LAB -->
        <li>
            <a class="group relative inline-block overflow-hidden rounded">
                <span class="absolute left-0 top-0 mb-0 flex h-full w-0 translate-x-0 transform bg-red-500
                    opacity-90 transition-all duration-700 ease-out group-hover:w-full">
                </span>
                <span class="relative group-hover:text-white space ">LAB <i class="fa-solid fa-flask"></i></span>
            </a>
            <ul></ul>
        </li>

        <!-- Trade journals -->
        <li>
            <a class="group relative inline-block overflow-hidden rounded">
                <span class="absolute left-0 top-0 mb-0 flex h-full w-0 translate-x-0 transform bg-red-500
                    opacity-90 transition-all duration-700 ease-out group-hover:w-full">
                </span>
                <span class="relative group-hover:text-white space ">LAB <i class="fa-solid fa-book-open"></i></span>
            </a>
            <ul>
                <li @click="$emit('showAnalyze')">
                    <a href="#">Analyzing
                        <span class="fa-solid fa-chart-pie m-1"></span>
                    </a>
                </li>
                <li @click="$emit('showHistory')">
                    <a href="#">Trade History
                        <span class="fa-solid fa-clock-rotate-left"></span>
                    </a>
                </li>
                <li @click="$emit('showRanking')">
                    <a href="#">Ranking
                        <span class="fa-solid fa-sitemap text-lg    "></span>
                    </a>
                </li>


            </ul>
        </li>




        <!-- <li><a>Item 1</a></li>
        <li>
            <a>Parent</a>
            <ul>
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
                <li>
                    <a>Parent</a>
                    <ul>
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><a>Item 3</a></li> -->
    </ul>
</template>


<style></style>