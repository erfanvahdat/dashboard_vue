<template>
  <div class="flex flex-col p-2 gap-3 bg-gray-800 h-[100vh] overflow-hidden">

    <!-- Status Component -->
    <div class=" flex flex-row rounded w-full mx-3 gap-2  mr-10 ">

      <!-- status bar -->
      <div>
        <status :balance="balance" :equity="equity" :unProfit="unProfit" :dailyProfit="dailyProfit"
          :dailyProfitPercent="dailyProfitPercent" />


      </div>

      <div class=" w-full h-fit p-2 mt-2 mr-5 overflow-hidden border-1 border-blue-300 rounded bg-gray-700">

        <div class='w-full
        '>
          <apexchart type="line" height="300" width="1500" :options="chartOptions" :series="series">
          </apexchart>
        </div>


      </div>


    </div>



    <div class="flex flex-col border-1 border-blue-500 h-full">


      <!-- Testing api balance -->
      <div class="flex">


        <button class="btn btn-primary btn-sm " role="button" @click='Get_Balance()'>show_access_token
        </button>


      </div>

      <div class="flex mt-2">
        <p>{{ this.responseMessage }}</p>



        <button class="btn btn-primary btn-sm bg-slate-600 " role="button" @click='get_token()'>show_access tokne
        </button>

        <!-- {{ this.access }} -->

      </div>


      <div v-if="balance !== null" class="">
        <h3>Account Balance Information</h3>
        <p><strong>Balance:</strong> {{ balance }}</p>
        <p><strong>Equity:</strong> {{ equity }}</p>
        <p><strong>Unrealized Profit:</strong> {{ unProfit }}</p>
        <p><strong>Realized Profit:</strong> {{ reProfit }}</p>
        <p><strong>Available Margin:</strong> {{ avlMargin }}</p>
        <p><strong>Used Margin:</strong> {{ usedMargin }}</p>
      </div>


    </div>






  </div>
</template>

<script>
import axios from 'axios';
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
      access: null,
      order_pulse: false, // Contring the pulse container display
      pending_pulse: false, // Contring the pulse container display

      balance: null,
      equity: null,
      unProfit: null,
      reProfit: null,
      avlMargin: null,
      usedMargin: null,
      dailyProfitPercent: null,
      cryptosBalance: [], // Since it's an array
      responseMessage: '',
      responseStatus: '',

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


    // if (this.peopleData.length > 0) {
    //   this.objectKeys = Object.keys(this.peopleData[0]);
    // }

    this.get_token();



  },

  methods: {
    get_token() {

      const Access = localStorage.getItem('access');
      this.access = Access;

    },
    toggleCollapse() {
      this.isOpen = !this.isOpen; // Toggle collapse
    },

    async Get_Balance() {
      try {
        const access = localStorage.getItem('access');

        // Ensure that access token is available
        if (!access) {
          this.responseMessage = 'Access token not found. Please log in.';
          this.responseStatus = '401';  // Set status to 401 (Unauthorized)
          return;
        }

        // Send GET request to fetch balance
        const response = await axios.get(`${import.meta.env.VITE_BALANCE}`, {
          headers: {
            'Authorization': `Bearer ${access}`,
            'Content-Type': 'application/json'
          }
        });

        // Extracting the first item from the response data (since it's an array of objects)
        const balanceData = response.data[0];

        // Mapping the response data to the Vue component's state
        this.balance = balanceData.balance;
        this.equity = balanceData.equity;
        this.unProfit = balanceData.unProfit;
        this.reProfit = balanceData.reProfit;
        this.avlMargin = balanceData.avlMargin;
        this.usedMargin = balanceData.usedMargin;
        this.cryptosBalance = balanceData.cryptosBalance;  // Assuming this is an array

        this.responseMessage = 'Balance retrieved successfully';
        this.responseStatus = response.status.toString(); // Set status based on response status

      } catch (error) {
        // Error handling
        if (error.response) {
          if (error.response.status === 400) {
            const errorMessage = error.response.data.error
              ? error.response.data.error[0]
              : 'Unknown error occurred';
            this.responseMessage = `Failed to retrieve balance: ${errorMessage}`;
            this.responseStatus = '400';  // Set status to 400 (Bad Request)
          } else if (error.response.status === 401) {
            this.responseMessage = 'Unauthorized. Please try agian.';
            this.responseStatus = '401';  // Unauthorized access
          } else {
            this.responseMessage = `Error: ${error.response.status} - ${error.response.data.message || 'An error occurred'}`;
            this.responseStatus = error.response.status.toString();
          }
        } else if (error.request) {
          this.responseMessage = 'No response received from the server. Please try again later.';
          this.responseStatus = '503';  // Service Unavailable
        } else {
          this.responseMessage = `Request error: ${error.message}`;
          this.responseStatus = '500';  // Generic error status
        }
      }
    }
  },


}

</script>
