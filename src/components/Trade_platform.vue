<template>
  <div class="flex flex-col h-full overflow-hidden">
    <!-- Setting section -->
    <div class="rounded-md bg-blue-500 m-2 h-[70px]">
      <span class="font-serif text-sm ml-2 rounded w-fit text-gray-700">chart_setting</span>

      <div class="flex flex-row space-x-2">
        <div>
          <Select :options="box_number" v-model="box_select" @change="changeChartCount(box_select)" placeholder="Boxes"
            class="w-[115px] h-[35px] m-2"></Select>
        </div>

        <div>
          <label class="relative inline-flex cursor-pointer mt-[15px]">
            <input id="switch-3" type="checkbox" class="peer sr-only" v-model="isLightTheme" @change="toggleTheme" />
            <label for="switch-3" class="hidden"></label>
            <div
              class="peer h-4 w-11 rounded border bg-slate-200 after:absolute after:-top-1 after:left-0 after:h-6 after:w-6 after:rounded-md after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-300 peer-checked:after:translate-x-full peer-focus:ring-green-300">
            </div>
            <div class="font-bold ml-2 pb-2">{{ chart_theme }}</div>
          </label>
        </div>
      </div>
    </div>

    <!-- Chart section -->
    <div :class="gridClass" class="grid gap-1 ml-0 mr-2 h-full">
      <div v-for="(symbol, index) in all_symbol.slice(0, chartCount)" :key="index"
        class="flex flex-col items-center m-1 h-full">
        <!-- Header section with dynamic ticker label -->
        <div class="flex flex-row justify-between items-center w-full bg-blue-600 rounded h-[40px]">
          <div :id="'ticker-name-' + index" class="font-bold ml-3 font-serif rounded text-white">
            {{ all_label[index] }}
          </div>

          <!-- Primevue Timeframe -->
          <div class="text-sm">
            <SelectButton v-model="select_timeframe" :options="timeframe" aria-labelledby="basic" size="small"
              class="w-[170px] h-[40px] m-2 text-sm p-1 text-sm" @change="changeTimeframe(index, select_timeframe)" />
          </div>

          <!-- Select Ticker =Primevue  -->
          <div class="card flex mr-5">
            <Select v-model="selectedTickers[index]" :options="availableSymbols" optionLabel="label"
              placeholder="Select Ticker" class="w-full h-[34px]"
              @change="updateChart(index, selectedTickers[index].value, selectedTickers[index].label)" />
          </div>
        </div>

        <!-- TradingView chart -->
        <div :id="'chart-all-' + index" class="w-full h-full rounded"></div>
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
      chartCount: 6,

      select_timeframe: null,
      box_select: null,

      selectedTickers: [], // Array to store selected tickers for each chart

      all_symbol: [
        "BINANCE:GALAUSDT.P", "BINANCE:FILUSDT.P", "BINANCE:DOTUSDT.P",
        "BINANCE:BTCUSD.P", "BINANCE:ETHUSD.P", "BINANCE:BNBUSDT.P",
        "BINANCE:POLUSDT.P", "BINANCE:SOLUSDT.P", "BINANCE:WIFUSDT.P",
        "OANDA:EURUSD", "OANDA:GBPUSD", "OANDA:AUDUSD"
      ],
      all_label: [
        "GALA", "FIL", "DOT", "BTC", "ETH", "BNB",
        "POL", "SOL", "WIF", "EUR_USD", "GBP_USD", "AUD_USD"
      ],
      box_number: [1, 3, 6, 9, 12],
      timeframe: ['1', '5'],

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
    this.initCharts();
  }
};
</script>
