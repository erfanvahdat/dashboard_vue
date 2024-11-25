<template>
  <div class="flex flex-col h-full overflow-hidden">

    <!-- Setting section -->
    <div class="rounded-md bg-blue-500 mx-2 mt-1 h-[70px] 1️⃣">

      <span class="font-serif text-xs ml-2 rounded w-fit text-gray-700 mr-2">chart_setting</span>

      <!-- Header=> Boxes  -->
      <div class="inline-flex flex-row space-x-2 mt-3 gap-3 ">
        <div>
          <Select :options="box_number" v-model="box_select" @change="changeChartCount(box_select)" placeholder="Boxes"
            class=" "></Select>
        </div>

        <!-- header=> Timeframe -->
        <div>
          <Select :options="timeframe" v-model="main_select_timeframe" @change="changeChartCount(box_select)"
            placeholder="Timeframe" class=""></Select>
        </div>

        <!-- Header=> Theme  -->
        <div>
          <label class="relative inline-flex cursor-pointer mt-2 ">
            <input id="switch-3" type="checkbox" class="peer sr-only" v-model="isLightTheme" @change="toggleTheme" />
            <label for="switch-3" class="hidden"></label>
            <div
              class="peer h-4 w-11 rounded border bg-slate-200 after:absolute after:-top-1 after:left-0 after:h-6 after:w-6 after:rounded-md after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-300 peer-checked:after:translate-x-full peer-focus:ring-green-300">
            </div>
            <div class="font-bold ml-2 pb-2">{{ chart_theme }}</div>
          </label>
        </div>


        <div>
          <label class="relative inline-flex cursor-pointer mt-2 ">
            <input id="switch-3" type="checkbox" class="peer sr-only" @click = "change_market" />
            <label for="switch-3" class="hidden"></label>
            <div
              class="peer h-4 w-11 rounded border bg-slate-200 after:absolute after:-top-1 after:left-0 after:h-6 after:w-6 after:rounded-md after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-300 peer-checked:after:translate-x-full peer-focus:ring-green-300">
            </div>
            <div class="font-bold ml-2 pb-2">{{ status }}</div>
          </label>
        </div>


        
        

        <div class="card flex justify-center">
          <MultiSelect v-model="selectedTickers[index]" display="chip" :options="cryptoList" optionLabel="symbol" filter
            placeholder="Favorite Ticker" :maxSelectedLabels="3" class="w-full md:w-80" />
        </div>
        
        <div>

          <clock></clock>
        </div>


      </div>
    </div>

    <!-- Chart section 2️⃣-->
    <div :class="gridClass" class="grid gap-1 ml-1 mr-1 h-full">
      <div v-for="(symbol, index) in all_symbol.slice(0, chartCount)" :key="index"
        class="flex flex-col items-center m-1 h-full">
        <!-- Header section with dynamic ticker label -->
        <div class="flex flex-row justify-between items-center w-full bg-blue-600 rounded h-[40px]">
          <div :id="'ticker-name-' + index" class="font-bold ml-3 font-serif rounded text-white">
            
            {{ this.status === "FOREX" ? forex_label[index] : all_label[index] }}

          </div>

          <!-- Primevue Timeframe -->
          <div class="text-sm">
            <SelectButton v-model="select_timeframe" :options="timeframe" aria-labelledby="basic" size="small"
              class="w-[170px] h-[40px] m-2 text-sm p-1 " @change="changeTimeframe(index, select_timeframe)" />
          </div>

          <!-- Select Ticker -->
          <div class="card flex w-fit ml-2  mr-5 ">
            <Select v-model="selectedTickers[index]" :options="cryptoList" filter optionLabel="symbol"
              @change="updateChart(index, selectedTickers[index].symbol, selectedTickers[index].ticker)"
              placeholder="Select a Crypto" class="w-full md:w-30  h-[30px]   space-y-0">

              <!-- Template for selected value -->
              <template #value="slotProps">
                <div v-if="slotProps.value" class="flex ">
                  <div>{{ slotProps.value.symbol }}</div> <!-- Display ticker -->
                </div>
                <span v-else>
                  {{ slotProps.placeholder }}
                </span>
              </template>
            </Select>
          </div>
        </div>

        <!-- TradingView chart -->
        <div :id="'chart-all-' + index" class="w-full h-full rounded"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      isLightTheme: false,  // Default to dark mode
      chart_theme: "Dark",  // Default theme label
      newTimeframe: '1',
      default_timeframe: '1',
      chartCount: 6,

      main_select_timeframe: '1',
      select_timeframe: 1,
      box_select: 6,

      selectedTickers: Array(12).fill(null), // Array to hold selected ticker for each chart
      cryptoList: [],

      status : "CRYPTO",
      status_bol : true,
      all_symbol : [
        "BINANCE:GALAUSDT.P", "BINANCE:FILUSDT.P", "BINANCE:DOTUSDT.P",
        "BINANCE:SANDUSDT.P", "BINANCE:BTCUSD.P", "BINANCE:LTCUSDT.P",
        "BINANCE:ETHUSDT.P", "BINANCE:SOLUSDT.P", "BINANCE:WIFUSDT.P",
        "OANDA:EURUSD", "OANDA:GBPUSD", "OANDA:AUDUSD"
      ],
      all_label: [
        "GALA", "FIL", "DOT", "SAND", "BTC", "LTC",
        "ETH", "SOL", "WIF", "EUR_USD", "GBP_USD", "AUD_USD"
      ],

      forex_ticker : ["OANDA:USDJPY",
        "OANDA:XAUUSD",
        "OANDA:EURUSD",
        "OANDA:USDCHF",
        "OANDA:GBPUSD",
        "OANDA:AUDUSD",],

        forex_label:["USDJPY","XAU","EURUSD","USDCHF","GBPUSD","AUDUSD"],

      box_number: [1, 3, 6, 9, 12],
      timeframe: ['1', '5','15','60','D'],
      timeframes: ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'], // Default to 1 minute for each chart
    };
  },
  computed: {
    gridClass() {
      if (this.chartCount === 12) {
        return 'lg:grid-cols-3 lg:grid-rows-4';
      } else if (this.chartCount === 9) {
        return 'lg:grid-cols-3 lg:grid-rows-3';
      } else if (this.chartCount === 6) {
        return 'lg:grid-cols-3 lg:grid-rows-2';
      } else {
        return 'lg:grid-cols-3 lg:grid-rows-1';
      }
    }
  },
  methods: {
    async get_ticker() {
      try {
        // Fetch the data from the API
        const response = await axios.post(`${import.meta.env.VITE_CRYPTO_LIST}`);

        this.cryptoList = response.data.data.map(item => ({ symbol: item.symbol }));

        console.log("Getting data is complete...");
      } catch (error) {
        this.$toast.add({ severity: 'warn', summary: 'Rejected', detail: 'Crypto_list API error!', life: 3000 });
        console.error('Error fetching crypto list:', error);
      }
    },

    toggleTheme() {
      this.chart_theme = this.isLightTheme ? "Light" : "Dark";
      this.all_symbol.forEach((symbol, index) => {
        this.createChart(`chart-all-${index}`, symbol, this.default_timeframe, this.chart_theme);
      });
    },

    changeChartCount(numberOfCharts) {
      if (numberOfCharts <= 12) {
        this.chartCount = numberOfCharts;
        this.initCharts();
      } else {
        alert("You cannot exceed 12 charts.");
      }
    },

    changeTimeframe(index, newTimeframe) {
      if (this.timeframes[index] !== newTimeframe) {
        this.timeframes[index] = newTimeframe;
        const symbol = this.all_symbol[index];
        this.createChart(`chart-all-${index}`, symbol, newTimeframe, this.chart_theme);
      }
    },

    createChart(containerId, symbol, timeframe = "1", theme = "Dark") {
      new TradingView.widget({
        "autosize": true,
        "symbol": symbol,
        "interval": timeframe,
        "toolbar_bg": "#E9DCC9",
        "timezone": "Asia/Tehran",
        "theme": theme,
        "style": "1",
        "locale": "en",
        "gridColor": "rgba(0, 0, 0, 0.06)",
        "withdateranges": true,
        // "range": "1D",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "hide_top_toolbar": true,
        "hide_side_toolbar": false,
        "allow_symbol_change": true,
        "hideideas": false,
        "save_image": false,

        // "watchlist": [
        //     "BINGX:SANDUSDT.P",
        //     "BINGX:GALAUSDT.P",
        //     "BINGX:FILUSDT.P",
        //     "BINGX:LINKUSDT.P",
        //     "BINGX:DOTUSDT.P",
        //     "BINGX:BTCUSDT.P",
        //     "BINGX:POLUSDT.P"
        // ],
        "calendar": true,
        "studies": ['IchimokuCloud@tv-basicstudies',],
        "container_id": containerId,
        studies_overrides: {
          "paneProperties.background": "#ffffff",
          "allow_symbol_change": "true",
          "ichimoku cloud.base line periods": 30,
          "ichimoku cloud.conversion line periods": 20,
          "ichimoku cloud.leading span a line.color": "#FFFFF0",
          "ichimoku cloud.lagging span.display": 0,
        },

      });
    },

    updateChart(index, newSymbol, newLabel) {
      // Update the specific chart's symbol and label

      let ticker = newSymbol.split('-')[0]

      this.all_symbol[index] = `BINANCE:${ticker}USDT.P`;
      this.all_label[index] = newLabel;

      this.createChart(`chart-all-${index}`, this.all_symbol[index], this.timeframes[index], this.chart_theme);
    },

    initCharts( ) {

      if(this.status == 'CRYPTO'){

        console.log('we are here')
        this.all_symbol.slice(0, this.chartCount).forEach((symbol, index) => {
        this.createChart(`chart-all-${index}`, symbol, this.main_select_timeframe, this.chart_theme);
      });

      }else{
        this.forex_ticker.slice(0, this.chartCount).forEach((symbol, index) => {
        this.createChart(`chart-all-${index}`, symbol, this.main_select_timeframe, this.chart_theme);
      });  
      }
      
    },
    change_market(){
      
      this.status_bol = !this.status_bol;
      if(this.status_bol){
        this.status  = "CRYPTO";
      }else{
        this.status  = "FOREX";
      }
      this.initCharts();
      
  },
  },
  mounted() {
    this.get_ticker();
    this.initCharts();
  }
};
</script>
