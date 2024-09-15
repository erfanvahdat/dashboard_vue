<template>
  <div class="flex flex-col p-2  gap-3  bg-gray-800  h-[100vh] overflow-hidden ">


    <div class="  rounded    w-fit mx-3  ">
      <status></status>
    </div>


    <!-- Order Table  -->
    <div class="rounded  mx-3   ">
      <h1 class="font-b font-serif ml-2">Orders</h1>
      <table class="table rounded-lg border border-gray-300 overflow-hidden ">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th>Trigger</th>
            <th>Cancle</th>

          </tr>
        </thead>
        <tbody>
          <tr v-for="(person, index) in peopleData" :key="index" class="bg-black">
            <th>{{ index + 1 }}</th>
            <td>{{ person.name }}</td>
            <td>{{ person.job }}</td>
            <td>{{ person.favorit_color }}</td>

            <td><button class="btn btn-accent">Accent</button>
            </td>
            <td><button class="btn btn-error">Error</button>
            </td>
          </tr>
          <tr v-if="peopleData.length > 0">
            <th colspan="6" class="text-center hover:">

              <div class="flex items-center justify-center w-full h-full">
                <div class="flex justify-center items-center space-x-1 text-sm text-gray-700">

                  <svg fill='none' class="w-6 h-6 animate-spin" viewBox="0 0 32 32" xmlns='http://www.w3.org/2000/svg'>
                    <path clip-rule='evenodd'
                      d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z'
                      fill='currentColor' fill-rule='evenodd' />
                  </svg>


                  <div>Loading ...</div>
                </div>
              </div>
            </th>



          </tr>
        </tbody>
      </table>
    </div>


    <!-- Pending Order  -->
    <div class="rounded p-1 mx-3  ">
      <h1 class="font-b font-serif ml-2">Pending order</h1>
      <table class="table rounded-lg border border-gray-300 overflow-hidden ">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th>Trigger</th>
            <th>Cancle</th>

          </tr>
        </thead>
        <tbody>
          <tr v-for="(person, index) in peopleData" :key="index" class="bg-black">
            <th>{{ index + 1 }}</th>
            <td>{{ person.name }}</td>
            <td>{{ person.job }}</td>
            <td>{{ person.favorit_color }}</td>

            <td><button class="btn btn-accent">Accent</button>
            </td>
            <td><button class="btn btn-error">Error</button>
            </td>
          </tr>
          <tr v-if="peopleData.length > 0">
            <th colspan="6" class="text-center hover:">...</th>
          </tr>
        </tbody>
      </table>
    </div>



  </div>
</template>

<script>
export default {
  data() {
    return {
      peopleData: [
        { name: "erfan", job: "programmer", favorit_color: "green" },
        { name: "ali", job: "it", favorit_color: "blue" },
        { name: "moh", job: "SEO", favorit_color: "red" }
      ]
    };
  }
};
</script>


<style scoped>
/* Custom styles to ensure rounded corners */
.table {
  /* border-radius: 0.5rem; */
  /* Adjust this value to control the roundness */

}
</style>
