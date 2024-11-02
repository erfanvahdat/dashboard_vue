<template>
  <div class="flex flex-col   p-2.5 gap-3 bg-gray-800 h-[100vh]  overflow-auto custom-scrollbar  ">

    <!-- Status Component with first chart -->
    <div class=" flex flex-row rounded mx-3 gap-2.5 ">

      <!-- status bar -->
      <div>
        <status :balance="balance" :equity="equity" :unProfit="unProfit" :dailyProfit="dailyProfit"
          :WeeklyPorfit="WeeklyProfit" :available_margin="avlMargin" :dailyProfitPercent="dailyProfitPercent" />

      </div>

      <!-- Chart Main Profit Section -->
      <div class="w-[100%] rounded-1 bg-gray-700 ">

        <!-- border-1 border-blue-500 -->
        <apexchart type="line" height="100%" width="100%" class=" w-full p-2" :options="chartOptions" :series="series">
        </apexchart>

      </div>

    </div>

    <!-- Second main Section -->
    <div class="flex flex-row ">

      <!-- Slope chart  -->
      <div class=" bg-gray-700 w-fit  mx-3 rounded-1 ">
        <div class="flex p-2 w-fit">
          <apexchart type="line" height="400" width="700" :options="Slope_options" :series="slope_series"></apexchart>
        </div>
      </div>

      <div class=" rounded-2  bg-gray-700 w-full mr-3">

        <div class="tradingview-widget-container p-2 bg-gray-700 m-2  ">
          <div class="tradingview-widget-container__widget  "></div>
          <!-- <div class="tradingview-widget-copyright "> -->
          <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          </a>

        </div>
      </div>


    </div>
  </div>
</template>

<script>
import axios from 'axios';
import chalk from "chalk";
import { line_option, Slope_option } from './chart_config/chart_config.js';

export default {

  data() {
    return {
      series: [],
      slope_series: [],
      chartOptions: line_option,
      Slope_options: Slope_option,
      access: null,

      balance: 0.00,
      equity: 0.00,
      unProfit: 0.00,
      reProfit: 0.00,
      avlMargin: 0.00,
      usedMargin: 0.00,
      dailyProfit: 0.00,
      WeeklyProfit: 0.0,
      dailyProfitPercent: 0.00,

    };
  },

  mounted() {

    // this.get_token();
    this.Balance();
    this.calculare_profit();
    this.processing_chart_slope_data();
    this.Market_watch()

  },
  methods: {

    // get_token() {
    //   const Access = localStorage.getItem('access');
    //   this.access = Access;
    // },


    //  Get the Trade history from db
    async calculare_profit() {
      try {
        // Fetch the trade history data from the API
        const response = await axios.get(`${import.meta.env.VITE_TRADE_HISTORY_ALL}`);
        const tradeHistory = response.data.data ;

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
    // Update the 
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
    },
    async processing_chart_slope_data() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_TRADE_HISTORY_ALL}`);
        const tradeHistory = response.data.data;

        // Group trades by their ticker symbol
        const groupedData = tradeHistory.reduce((acc, trade) => {
          const { symbol, time, profit } = trade;

          if (!acc[symbol]) {
            acc[symbol] = [];
          }
          acc[symbol].push({ x: new Date(time).getTime(), y: profit });
          return acc;
        }, {});


        // Create the series for each ticker symbol
        this.slope_series = Object.keys(groupedData).map((symbol) => ({
          name: symbol,
          data: groupedData[symbol].sort((a, b) => a.x - b.x), // Sort data by time (ascending order)
        }));
      } catch (error) {
        console.error("Error fetching trade history:", error);
      }
    },


    async Market_watch() {
      // Make sure the DOM element exists
      const container = this.$el.querySelector(".tradingview-widget-container__widget");
      if (container) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
        script.innerHTML = JSON.stringify({
          colorTheme: "dark",
          dateRange: "12M",
          showChart: true,
          locale: "en",
          largeChartUrl: "",
          isTransparent: false,
          showSymbolLogo: true,
          showFloatingTooltip: true,
          width: "670",
          height: "400",
          plotLineColorGrowing: "rgba(41, 98, 255, 1)",
          plotLineColorFalling: "rgba(41, 98, 255, 1)",
          gridLineColor: "rgba(240, 243, 250, 0)",
          scaleFontColor: "rgba(209, 212, 220, 1)",
          belowLineFillColorGrowing: "rgba(41, 98, 255, 0.12)",
          belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)",
          belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
          belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
          symbolActiveColor: "rgba(41, 98, 255, 0.12)",
          tabs: [
            {
              title: "Crypto",
              symbols: [
                { s: "BINGX:BTCUSDT.P", d: "BTC" },
                { s: "BINGX:SANDUSDT.P", d: "SAND" },
                { s: "BINGX:FILUSDT.P", d: "FIL" },
                { s: "BINGX:DOTUSDT.P", d: "DOT" },
                { s: "BINGX:GALAUSDT.P", d: "GALA" },
                { s: "BINGX:BNBUSDT.P", d: "BNB" },
                { s: "BINGX:ETHUSDT.P", d: "ETH" }
              ]
            }
          ]
        });
        container.appendChild(script); // Append the script to the widget container
      }
    }
  },
}

</script>

<style>
/* Custom scrollbar styles */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  background-color: #1f2937;
  /* Dark background for scrollbar */
}


::-webkit-scrollbar-track {
  background-color: #1f2937;
  /* Darker background for the track */
}

::-webkit-scrollbar-thumb {
  background-color: #4d5257;

  border-radius: 6px;
}
</style>