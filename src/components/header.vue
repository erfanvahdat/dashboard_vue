<!-- header  -->
<template>


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
</script>
