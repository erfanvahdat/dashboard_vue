<template>
  <div class="grid lg:grid-rows-2 lg:grid-cols-3 h-screen gap-1 ml-0 mr-2 mt-2 ">
    <!-- Unified Loop for All Charts -->
    <div v-for="(symbol, key, index) in all_symbol" :key="index" class="flex flex-col items-center m-1">

      <!-- Header section with dynamic ticker label -->
      <div class="flex justify-between items-center w-full bg-blue-600 rounded h-[40px]">
        <!-- Dynamically display the ticker label -->
        <div :id="'ticker-name-' + index" class="font-bold ml-3 font-serif rounded text-white ">
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

      <!-- Chart Section -->
      <div :id="'chart-all-' + index" class="w-full h-full rounded"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Symbols and labels for all charts
      all_symbol: {
        'BTC': "BINANCE:BTCUSD.P",
        'ETH': "BINANCE:ETHUSD.P",
        'BNB': "BINANCE:BNBUSDT.P",
        "MATIC": "BINANCE:POLUSDT.P",
        "DOT": "BINANCE:DOTUSDT.P",
        "SOL": "BINANCE:SOLUSDT.P"
      },
      // Dynamically updating labels for the charts
      all_label: {
        0: "BTC", 1: "ETH", 2: "BNB", 3: "MATIC", 4: "DOT", 5: "SOL"
      },

      // Available symbols for the dropdown
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

      // Timeframes for all charts
      timeframes: ['1', '1', '1', '1', '1', '1'], // Default to 1 minute for each chart
    };
  },
  methods: {
    changeTimeframe(index, newTimeframe) {
      const symbol = this.all_symbol[Object.keys(this.all_symbol)[index]];
      this.updateChart(index, symbol, this.all_label[index]);
      this.change_timeframe_Chart(`chart-all-${index}`, symbol, newTimeframe);
    },

    change_timeframe_Chart(containerId, symbol, timeframe) {
      new TradingView.widget({
        autosize: true,
        symbol: symbol,
        interval: timeframe,
        timezone: "Africa/Tehran",
        theme: "Dark",
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        hide_top_toolbar: true,
        hide_side_toolbar: false,
        allow_symbol_change: false,
        hideideas: true,
        container_id: containerId
      });
    },

    createChart(containerId, symbol) {
      new TradingView.widget({
        autosize: true,
        symbol: symbol,
        interval: "1",
        timezone: "Africa/Tehran",
        theme: "Dark",
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        hide_top_toolbar: true,
        hide_side_toolbar: false,
        allow_symbol_change: false,
        hideideas: true,
        container_id: containerId
      });
    },

    // This method updates both the ticker symbol and label when selected
    updateChart(index, newSymbol, newLabel) {
      // console.log(`Updating chart ${index} with new symbol: ${newSymbol} and label: ${newLabel}`);
      this.all_symbol[Object.keys(this.all_symbol)[index]] = newSymbol;
      this.all_label[index] = newLabel; // Update header label dynamically
      this.createChart(`chart-all-${index}`, newSymbol);
    }
  },
  mounted() {
    // Initialize all charts
    Object.keys(this.all_symbol).forEach((key, index) => {
      this.createChart(`chart-all-${index}`, this.all_symbol[key]);
    });
  }
};
</script>
