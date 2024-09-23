<template>
  <div class="flex flex-col p-2 gap-3 bg-gray-800 h-[100vh] overflow-hidden">

    <!-- Status Component -->
    <div class=" flex flex-row rounded w-full mx-3 gap-2  mr-10 ">

      <!-- status bar -->
      <div>
        <status></status>
      </div>


      <div class=" w-full h-fit p-2 mt-2 mr-5 overflow-hidden border-1 border-blue-300 rounded bg-gray-700">

        <div class='w-full
        '>
          <apexchart type="line" height="300" width="1500" :options="chartOptions" :series="series">
          </apexchart>
        </div>


      </div>


    </div>


    <div>

      <div>
        <!-- Collapsible div with an arrow -->
        <div
          class="p-2 m-2 overflow-hidden rounded bg-gray-300 hover:bg-gray-700 flex items-center justify-between cursor-pointer"
          @click="toggleCollapse">
          <span>Collapsible</span>
          <!-- Arrow Icon (rotates when clicked) -->
          <svg xmlns="http://www.w3.org/2000/svg" :class="isOpen ? 'rotate-90' : 'rotate-0'"
            class="w-6 h-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>

        <!-- Collapsible content -->
        <div v-show="isOpen"
          class="p-2 m-2 overflow-hidden rounded bg-gray-300 hover:bg-gray-700 flex items-center justify-between cursor-pointer">


          Lorem ipsum dolor text....
        </div>
      </div>



    </div>

    <!-- Order Table -->
    <div class="rounded mx-3 border-1">
      <div class="flex flex-row gap-2">
        <div class="mt-2">
          <span class="font-b font-serif ml-2  text-white">Orders</span>
        </div>

        <div class="mt-1">
          <button
            class="relative px-2 py-1 bg-blue-500 text-white rounded-[20px] flex items-center justify-center space-x-2"
            @click="order_reloading">
            <span class="text-sm">reload</span>
            <div v-if="order_pulse"
              class="w-3 h-3 border-4 border-solid border-current border-t-transparent rounded-full animate-spin"
              role="status">
            </div>
          </button>
        </div>
      </div>

      <div class="relative">
        <!-- Table with Pulse animation -->
        <table v-if="!order_pulse" class="table rounded-lg border border-gray-300 overflow-hidden">
          <thead>
            <tr>
              <th></th>
              <th v-for="(key, index) in objectKeys" :key="index">{{ key }}</th>
              <th>Trigger</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(person, index) in peopleData" :key="index" class="bg-black text-white">
              <th>{{ index + 1 }}</th>
              <td>{{ person.name }}</td>
              <td>{{ person.job }}</td>
              <td>{{ person.favorit_color }}</td>
              <td><button class="btn btn-accent">Accent</button></td>
              <td><button class="btn btn-error">Error</button></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Loading state with spinning icon and text -->
      <div v-if="order_pulse" class="text-center">
        <div class="border border-blue-300 shadow rounded-md p-4 w-full mx-auto">
          <div class="animate-pulse flex space-x-4">
            <div class="rounded-full bg-slate-700 h-10 w-10"></div>
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 bg-slate-700 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div class="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>



    <!-- Pending Order -->
    <div class="rounded mx-3 border-1">
      <div class="flex flex-row gap-2">
        <div class="mt-2">
          <span class="font-b font-serif ml-2 text-white">Pending_order</span>
        </div>

        <div class="mt-1">
          <button
            class="relative px-2 py-1 bg-blue-500 text-white rounded-[20px] flex items-center justify-center space-x-2"
            @click="pending_reloading">
            <span class="text-sm">reload</span>
            <div v-if="pending_pulse"
              class="w-3 h-3 border-4 border-solid border-current border-t-transparent rounded-full animate-spin"
              role="status">
            </div>
          </button>
        </div>
      </div>

      <div class="relative">
        <!-- Table with Pulse animation -->
        <table v-if="!pending_pulse" class="table rounded-lg border border-gray-300 overflow-hidden">
          <thead>
            <tr>
              <th></th>
              <th v-for="(key, index) in objectKeys" :key="index">{{ key }}</th>
              <th>Trigger</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(person, index) in peopleData" :key="index" class="bg-black text-white">
              <th>{{ index + 1 }}</th>
              <td>{{ person.name }}</td>
              <td>{{ person.job }}</td>
              <td>{{ person.favorit_color }}</td>
              <td><button class="btn btn-accent">Accent</button></td>
              <td><button class="btn btn-error">Error</button></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Loading state with spinning icon and text -->
      <div v-if="pending_pulse" class="text-center">
        <div class="border border-blue-300 shadow rounded-md p-4 w-full mx-auto">
          <div class="animate-pulse flex space-x-4">
            <div class="rounded-full bg-slate-700 h-10 w-10"></div>
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 bg-slate-700 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div class="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Toggle button -->
    <div class="flex ">
      <!-- Toggle button content here -->
      <h1>token is here:{{ token }}</h1>
    </div>





  </div>
</template>

<script>

const token = localStorage.getItem('authToken');

export default {


  data() {
    return {


      series: [{
        name: 'Price',
        data: [
          { x: new Date(1538778600000), y: 6633.33 },
          { x: new Date(1538780400000), y: 6630.11 },
          { x: new Date(1538782200000), y: 6635.65 },
          { x: new Date(1538784000000), y: 6638.24 },
          { x: new Date(1538785800000), y: 6624.47 },
          { x: new Date(1538787600000), y: 6624.31 },
          { x: new Date(1538789400000), y: 6626.02 },
          { x: new Date(1538791200000), y: 6603.02 },
          { x: new Date(1538793000000), y: 6604.01 },
          { x: new Date(1538794800000), y: 6608.02 },
        ],
      }],
      chartOptions: {
        chart: {
          type: 'line',
          toolbar: {
            show: true,
            tools: {
              download: true,
              selection: true,
            },
            style: {
              background: '#333', // Set the toolbar background color
            },
          },
        },
        title: {
          text: 'Line Chart',
          align: 'left',
          style: {
            color: '#FFFFFF', // Set title color to white
          },
        },
        xaxis: {
          type: 'datetime',
          title: {
            text: 'Date',
            style: {
              color: '#FFFFFF', // Set x-axis title color to white
            },
          },
          labels: {
            style: {
              colors: ['#FFFFFF'], // Set x-axis label color to white
            },
          },
        },
        yaxis: {
          title: {
            text: 'Price',
            style: {
              color: '#FFFFFF', // Set y-axis title color to white
            },
          },
          labels: {
            formatter: function (val) {
              return val.toFixed(2);
            },
            style: {
              colors: ['#FFFFFF'], // Set y-axis label color to white
            },
          },
        },
        stroke: {
          width: 1,
        },
        tooltip: {
          theme: 'dark',
          style: {
            fontSize: '12px',
            background: '#000',
            color: '#fff',
          },
        },
        grid: {
          borderColor: '#555', // Change grid color for better visibility
          style: {
            background: '#222', // Set grid background color
          },
        },
      },
      token: token,
      order_pulse: false, // Contring the pulse container display
      pending_pulse: false, // Contring the pulse container display
      isOpen: false,
      objectKeys: [],
      peopleData: [
        { name: "erfan", job: "programmer", favorit_color: "green" },
        { name: "ali", job: "it", favorit_color: "blue" },
        { name: "moh", job: "SEO", favorit_color: "red" }
      ],
    };
  },

  mounted() {


    if (this.peopleData.length > 0) {
      this.objectKeys = Object.keys(this.peopleData[0]);
    }
  },

  methods: {
    toggleCollapse() {
      this.isOpen = !this.isOpen; // Toggle collapse
    },
    async get_token() {
      const token = localStorage.getItem('authToken');
      return token
    },


    order_reloading() {
      this.order_pulse = true;

      setTimeout(() => {
        this.order_pulse = false;
      }, 2000);
    },
    pending_reloading() {
      this.pending_pulse = true;

      setTimeout(() => {
        this.pending_pulse = false;
      }, 2000);
    }
  },




};
</script>

<style scoped>
/* Custom styles for table */
.table {
  border-radius: 0.5rem;
  /* Roundness for the table */
}
</style>
