<template>
  <div class="flex flex-col p-2 gap-3 bg-gray-800 h-[100vh] overflow-hidden">

    <!-- Status Component -->
    <div class=" flex flex-row rounded w-full mx-3 gap-2  mr-10 ">

      <!-- status bar -->
      <div>
        <status :balance="balance" :equity="equity" :unProfit="unProfit" :dailyProfit="dailyProfit"
          :WeeklyPorfit="WeeklyProfit" :available_margin="avlMargin" :dailyProfitPercent="dailyProfitPercent" />

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



      </div>


    </div>


  </div>
</template>

<script>
import axios from 'axios';
import chalk from "chalk";

export default {

  data() {
    return {

      series: [],

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

      x: [],
      y: [],
      balance: 0.00,
      equity: 0.00,
      unProfit: 0.00,
      reProfit: 0.00,
      avlMargin: 0.00,
      usedMargin: 0.00,
      dailyProfit: 0.00,
      WeeklyProfit: 0.0,
      dailyProfitPercent: 0.00,
      cryptosBalance: [], // Since it's an array
      responseMessage: '',
      responseStatus: '',

      isOpen: false,
    };
  },

  mounted() {


    // if (this.peopleData.length > 0) {
    //   this.objectKeys = Object.keys(this.peopleData[0]);
    // }

    this.get_token();
    this.Balance();
    this.calculare_profit();

  },

  methods: {


    get_token() {

      const Access = localStorage.getItem('access');
      this.access = Access;
    },

    toggleCollapse() {
      this.isOpen = !this.isOpen; // Toggle collapse
    },

    //  Get the Trade history from db
    async calculare_profit() {
      try {
        // Fetch the trade history data from the API
        const response = await axios.get(`${import.meta.env.VITE_TRADE_HISTORY}`);
        const tradeHistory = response.data;

        // Map the `time` and `profit` values for the chart's x and y axes
        let chartData = tradeHistory.map(item => {
          return {
            x: new Date(item.time).getTime(), // Convert the time to a JS timestamp
            y: item.profit, // Use the profit for the y axis
          };
        });

        // Sort the data by time in ascending order
        chartData = chartData.sort((a, b) => a.x - b.x);

        // Update the series data for the chart
        this.series = [{
          name: 'Profit',
          data: chartData, // Set the sorted data
        }];

        // Calculate daily and weekly profits
        const currentTime = Date.now();
        const oneDayAgo = currentTime - (24 * 60 * 60 * 1000);
        const sevenDayAgo = currentTime - (7 * 24 * 60 * 60 * 1000);

        const last_day_profit = tradeHistory
          .filter(item => item.time >= oneDayAgo)
          .reduce((sum, item) => sum + item.profit, 0);

        const last_week_profit = tradeHistory
          .filter(item => item.time >= sevenDayAgo)
          .reduce((sum, item) => sum + item.profit, 0);

        // Update the daily and weekly profit data
        this.dailyProfit = last_day_profit.toFixed(2);
        this.WeeklyProfit = last_week_profit.toFixed(2);
      } catch (error) {
        console.log("Error fetching trade history:", error);
      }
    },
    async Balance() {
      try {

        const response = await axios.get(`${import.meta.env.VITE_BALANCE}`);


        // Extracting the first item from the response data (since it's an array of objects)
        const balanceData = response.data.data;

        // // Mapping the response data to the Vue component's state
        this.balance = parseFloat(balanceData.balance);
        this.equity = parseFloat(balanceData.equity);
        this.unProfit = parseFloat(balanceData.unProfit);
        this.reProfit = parseFloat(balanceData.reProfit);
        this.avlMargin = parseFloat(balanceData.availableMargin);
        this.usedMargin = balanceData.usedMargin;

        const save_meta_data_balance = {
          balance: this.balance,
          equity: this.equity,
          asset: "USDT"

        }
        // Saving user balance into balances table
        const save_meta_data = await axios.post(`${import.meta.env.VITE_SAVE_BALANCE}`, save_meta_data_balance);

        console.log(chalk.green('User balance Table is updated'))

      } catch (error) {
        console.log(error)

      }
    }
  },


}

</script>
