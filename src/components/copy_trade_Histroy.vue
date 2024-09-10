<template>

    <!-- Outline FLEX -->
    <div class="flex flex-col   ml-[150px]   mr-2 h-[94vh] ">
  
      <!-- TOP FLEX (Top 3) -->
      <div class="flex justify-center   h-1/2 m-1   ">
        <div v-for="(value, key, index) in symbolsTop" :key="index" class="flex flex-col items-center mx-1.5
                ">
          <!-- header section -->
          <div class="flex justify-between items-center w-full bg-blue-600 p-2 rounded">
            <div :id="'ticker-name-top-' + index" class="font-bold text-white">{{ key }}</div>
  
  
          <p>hello</p>
          </div>
  
  
          <!-- Chart Section -->
          <div :id="'chart-top-' + index" class="w-[550px] h-[410px] rounded "></div>
        </div>
      </div>
  
  
  
      <!-- BOTTOM FLEX (Bottom 3) -->
      <div class="flex justify-center   m-2  h-1/2   ">
        <div v-for="(value, key, index) in symbolsBottom" :key="index" class="flex flex-col items-center mx-1.5">
          <!-- header section -->
          <div class="flex justify-between items-center w-full bg-blue-600 p-2 rounded">
            <div :id="'ticker-name-top-' + index" class="font-bold text-white">{{ key }}</div>
          </div>
  
  
  
          <!-- Chart Section -->
          <div :id="'chart-bottom-' + index" class="w-[550px] h-[410px] rounded"></div>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        // Symbols for top and bottom 3 charts
        symbolsTop: { 'BTC': "BINANCE:BTCUSD.P", "ETH": "BINANCE:ETHUSD.P", "BNB": "BINANCE:BNBUSDT.P" },
        symbolsBottom: { "MATIC": "BINANCE:POLUSDT.P", "DOT": "BINANCE:DOTUSDT.P", "SOL": "BINANCE:SOLUSDT.P" },
  
        // Dropdown visibility trackers
        dropdownVisibleTop: {},
        dropdownVisibleBottom: {},
  
        // Available symbols for the dropdown
        availableSymbols: [
          { label: 'BTC', value: 'BINANCE:BTCUSD.P' },
          { label: 'SHIB', value: 'MEXC:SHIBUSDT.P' },
          { label: 'MATIC', value: 'BINANCE:MATICUSDT.P' },
          { label: 'Gala', value: 'BINANCE:GALAUSDT.P' },
          { label: 'DOT', value: 'BINANCE:DOTUSDT.P' },
          { label: 'FIL', value: 'BINANCE:FILUSDT.P' },
          { label: 'LINK', value: 'BINANCE:LINKUSDT.P' },
          { label: 'DOGE', value: 'BINANCE:DOGEUSDT.P' },
          { label: 'SUI', value: 'BINANCE:SUIUSDT.P' },
          { label: 'FTM', value: 'BINANCE:FTMUSDT.P' },
          { label: 'EUR_USD', value: 'OANDA:EURUSD' },
          { label: 'GBP_USD', value: 'OANDA:GBPUSD' },
          { label: 'AUD_USD', value: 'OANDA:AUDUSD' },
          { label: 'USD_JPY', value: 'OANDA:USDJPY' },
          { label: 'USD_CAD', value: 'OANDA:USDCAD' }
        ]
      };
    },
    methods: {
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
  
      toggleDropdown(index, type) {
        if (type === 'top') {
          this.$set(this.dropdownVisibleTop, index, !this.dropdownVisibleTop[index]);
          console.log(`Dropdown for top chart ${index} is now ${this.dropdownVisibleTop[index] ? 'visible' : 'hidden'}`);
        } else {
          this.$set(this.dropdownVisibleBottom, index, !this.dropdownVisibleBottom[index]);
          console.log(`Dropdown for bottom chart ${index} is now ${this.dropdownVisibleBottom[index] ? 'visible' : 'hidden'}`);
        }
      },
  
      updateChart(index, type, newSymbol) {
        console.log(`Updating chart ${type} ${index} with new symbol: ${newSymbol}`);
        if (type === 'top') {
          this.symbolsTop[Object.keys(this.symbolsTop)[index]] = newSymbol;
          this.createChart(`chart-top-${index}`, newSymbol);
        } else {
          this.symbolsBottom[Object.keys(this.symbolsBottom)[index]] = newSymbol;
          this.createChart(`chart-bottom-${index}`, newSymbol);
        }
      }
    },
    mounted() {
      // Initialize top charts
      Object.keys(this.symbolsTop).forEach((key, index) => {
        this.createChart(`chart-top-${index}`, this.symbolsTop[key]);
      });
  
      // Initialize bottom charts
      Object.keys(this.symbolsBottom).forEach((key, index) => {
        this.createChart(`chart-bottom-${index}`, this.symbolsBottom[key]);
      });
    }
  };
  
  
  
  </script>