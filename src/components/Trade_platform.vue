<template>

  <div class="flex flex-col h-full  overflow-hidden	">
    <!-- Setting section -->

    <div class=" rounded-md bg-blue-500 m-2 h-[70px]">
      <span class="font-serif text-xs ml-2 rounded w-fit text-gray-700">chart_setting</span>

      <div class="flex flex-row space-x-2  ">

        <!-- Dropdown for selecting number of charts -->
        <div class="dropdown dropdown-hover">
          <div tabindex="0" role="button" class="btn m-1 btn-sm hover:bg-white-400 hover:border-white-500">
            <span class="font-sans font-bold">{{ chartCount }}- box</span>
          </div>
          <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow">
            <li
              class="text-black font-thin hover:bg-sky-500 hover:border-1 rounded-1 border-b-2 border-solid border-gray-300"
              v-for="boxes in box_number" :key="boxes" @click="changeChartCount(boxes)">
              <div class="justify-center">
                <a>{{ boxes }}</a>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <label class="relative inline-flex cursor-pointer mt-[12px]">
            <input id="switch-3" type="checkbox" class="peer sr-only" v-model="isLightTheme" @change="toggleTheme" />
            <label for="switch-3" class="hidden"></label>
            <div
              class="peer h-4 w-11 rounded border bg-slate-200 after:absolute after:-top-1 after:left-0 after:h-6 after:w-6 after:rounded-md after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-300 peer-checked:after:translate-x-full peer-focus:ring-green-300">
            </div>
            <div class="font-bold ml-2 pb-2">{{ chart_theme }}</div>
          </label>

        </div>


        <div class="flex inline-flex">
          <input type="checkbox" class="toggle mt-2 ml-2 bg-green- hover:bg-gray-500"
            :checked="default_timeframe === '1'" @change="change_all_timeframe" />

          <span class="ml-2 mt-2">{{ default_timeframe }}-Min</span>

        </div>

      </div>
    </div>

    <!-- Chart section -->
    <!-- border-green-600 -->
    <div :class="gridClass" class="grid gap-1 ml-0 mr-2 h-full  ">
      <!-- Unified Loop for All Charts -->
      <div v-for="(symbol, index) in all_symbol.slice(0, chartCount)" :key="index"
        class="flex flex-col items-center m-1 h-full  ">
        <!-- Header section with dynamic ticker label -->
        <div class="flex justify-between items-center w-full bg-blue-600 rounded h-[40px]">
          <div :id="'ticker-name-' + index" class="font-bold ml-3 font-serif rounded text-white">
            {{ all_label[index] }}
          </div>
          <!-- Timeframe -->
          <div class="mx-auto max-w-xs">
            <select :id="'timeframe-select-' + index"
              class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 text-black"
              v-model="timeframes[index]" @change="changeTimeframe(index, $event.target.value)">
              <option value="1">1_MIN</option>
              <option value="5">5_MIN</option>
            </select>
          </div>
          <!-- Dropdown for selecting symbols -->
          <div class="dropdown dropdown-hover">
            <div tabindex="0" role="button" class="btn m-1 btn-sm hover:bg-white-400 hover:border-white-500">
              Select
            </div>
            <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow">
              <li
                class="text-black font-thin hover:bg-sky-500 hover:border-1 rounded-1 border-b-2 border-solid border-gray-300"
                v-for="availableSymbol in availableSymbols" :key="availableSymbol.value"
                @click="updateChart(index, availableSymbol.value, availableSymbol.label)">
                <a>{{ availableSymbol.label }}</a>
              </li>
            </ul>
          </div>
        </div>

        <!-- TradingView chart -->
        <!-- border-green-600 -->
        <div :id="'chart-all-' + index" class="w-full h-full rounded m  "></div>
      </div>
    </div>
  </div>

  
</template>

<script>
export default {
  data() {
    return {

      isLightTheme: false,  // Default to dark mode
      chart_theme: "Dark",  // Default theme label
      newTimeframe: '1',
      default_timeframe: '1',
      chartCount: 6, // Default number of charts
      all_symbol: [
        "BINAN  CE:GALAUSDT.P", "BINANCE:FILUSDT.P", , "BINANCE:DOTUSDT.P",
        "BINANCE:BTCUSD.P", "BINANCE:ETHUSD.P", "BINANCE:BNBUSDT.P",
        "BINANCE:POLUSDT.P", "BINANCE:SOLUSDT.P",
        , "BINANCE:WIFUSDT.P",

        "OANDA:EURUSD", "OANDA:GBPUSD", "OANDA:AUDUSD"
      ],
      all_label: [
        "BTC", "ETH", "BNB", "MATIC", "DOT", "SOL",
        "Gala", "FIL", "WIF", "EUR_USD", "GBP_USD", "AUD_USD"
      ],
      box_number: [1, 3, 6, 9, 12],
      availableSymbols: [
        { label: 'Gala', value: 'BINANCE:GALAUSDT.P' },
        { label: 'DOT', value: 'BINANCE:DOTUSDT.P' },
        { label: 'FIL', value: 'BINANCE:FILUSDT.P' },
        { label: 'BTC', value: 'BINANCE:BTCUSD.P' },
        { label: 'WIF', value: 'BINANCE:WIFUSDT.P' },
        { label: 'LINK', value: 'BINANCE:LINKUSDT.P' },
        { label: 'DOGE', value: 'BINANCE:DOGEUSDT.P' },
        { label: 'SUI', value: 'BINANCE:SUIUSDT.P' },
        { label: 'FTM', value: 'BINANCE:FTMUSDT.P' },
        { label: 'EUR_USD', value: 'OANDA:EURUSD' },
        { label: 'GBP_USD', value: 'OANDA:GBPUSD' },
        { label: 'AUD_USD', value: 'OANDA:AUDUSD' },
        { label: 'USD_JPY', value: 'OANDA:USDJPY' },
        { label: 'USD_CAD', value: 'OANDA:USDCAD' }
      ],
      timeframes: ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'], // Default to 1 minute for each chart
    };
  },
  computed: {
    // Dynamically adjust the grid layout based on the number of charts
    gridClass() {
      if (this.chartCount === 12) {
        return 'lg:grid-cols-3 lg:grid-rows-4'; // 3 columns and 4 rows
      } else if (this.chartCount === 9) {
        return 'lg:grid-cols-3 lg:grid-rows-3'; // 3 columns and 3 rows
      } else if (this.chartCount === 6) {
        return 'lg:grid-cols-3 lg:grid-rows-2'; // 3 columns and 2 rows
      } else {
        return 'lg:grid-cols-3 lg:grid-rows-1'; // Fallback to 1 row
      }
    }
  },
  methods: {
    toggleTheme() {
      this.chart_theme = this.isLightTheme ? "Light" : "Dark";
      this.all_symbol.forEach((symbol, index) => {
        // this.updateChart(index, symbol, this.all_label[index]);

        this.createChart(`chart-all-${index}`, symbol, this.default_timeframe, this.chart_theme);
      });
    },

    change_all_timeframe() {
      this.default_timeframe = this.default_timeframe === '1' ? '5' : '1';
      this.all_symbol.forEach((symbol, index) => {
        this.createChart(`chart-all-${index}`, symbol, this.default_timeframe, this.chart_theme);
      });
    },

    changeChartCount(numberOfCharts) {
      if (numberOfCharts <= 12) {
        this.chartCount = numberOfCharts;
        this.initCharts(); // Initialize new charts
      } else {
        alert("You cannot exceed 12 charts.");
      }
    },

    changeTimeframe(index, newTimeframe) {
      const symbol = this.all_symbol[index];
      // this.updateChart(index, symbol, this.all_label[index], newTimeframe);
      this.newTimeframe = newTimeframe
      this.createChart(`chart-all-${index}`, symbol, this.newTimeframe, this.chart_theme);
    },

    createChart(containerId, symbol, timeframe = "1", theme = "Dark") {
      new TradingView.widget({
        autosize: true,
        symbol: symbol,
        interval: timeframe,
        timezone: "Africa/Tehran",
        theme: theme,
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        hide_top_toolbar: true,
        hide_side_toolbar: false,
        allow_symbol_change: false,
        hideideas: true,
        container_id: containerId,
        studies: ['IchimokuCloud'],
      });
    },

    updateChart(index, newSymbol, newLabel) {
      this.all_symbol[index] = newSymbol;
      this.all_label[index] = newLabel;

      this.createChart(`chart-all-${index}`, newSymbol, this.timeframes[index], this.chart_theme);
    },

    initCharts() {


      this.all_symbol.slice(0, this.chartCount).forEach((symbol, index) => {
        this.createChart(`chart-all-${index}`, symbol, this.timeframes[index], this.chart_theme);
      });
    }
  },
  mounted() {

    this.all_symbol.slice(0, this.chartCount).forEach((symbol, index) => {
      this.createChart(`chart-all-${index}`, symbol, this.timeframes[index], this.chart_theme);
    })

  }
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
