<template>
    <div class="d-flex flex-column align-items-center justify-content-between w-100 h-100">
      <!-- Top Charts -->
      <div class="container">
        <div v-for="(symbol, index) in symbolsTop" :key="'top-' + index" class="chart-container">
          <div class="chart-header">
            <div :id="'ticker-name-top-' + index" class="ticker-name">{{ symbol }}</div>
            <input :id="'chart-checkbox-top-' + index" type="checkbox" class="checkbox" />
            <button class="btn btn-sm btn-secondary" @click="openModal(index)">Change</button>
          </div>
          <div :id="'chart-top-' + index" class="chart"></div>
        </div>
      </div>
      <!-- Bottom Charts -->
      <div class="container">
        <div v-for="(symbol, index) in symbolsBottom" :key="'bottom-' + index" class="chart-container">
          <div class="chart-header">
            <div :id="'ticker-name-bottom-' + index" class="ticker-name">{{ symbol }}</div>
            <input :id="'chart-checkbox-bottom-' + index" type="checkbox" class="checkbox" />
            <button class="btn btn-sm btn-secondary" @click="openModal(index + 3)">Change</button>
          </div>
          <div :id="'chart-bottom-' + index" class="chart"></div>
        </div>
      </div>
  
      <!-- Modal -->
      <div class="modal" id="cryptoModal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Select Cryptocurrencies</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="cryptoSelect">Cryptocurrencies:</label>
                  <select id="cryptoSelect" v-model="selectedCrypto" class="form-control" size="10" multiple>
                    <option v-for="crypto in cryptos" :key="crypto.value" :value="crypto.value">{{ crypto.label }}</option>
                  </select>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" @click="confirmSelection">Confirm</button>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        charts: 6,
        selectedChartIndex: null,
        defaultSymbols: [
          "BINANCE:GALAUSDT.P",
          "BINANCE:MATICUSDT.P",
          "BINANCE:DOTUSDT.P",
          "BINANCE:FTMUSDT.P",
          "MEXC:SHIBUSDT.P",
          "BINANCE:NOTUSDT.P"
        ],
        symbolsTop: [],
        symbolsBottom: [],
        selectedCrypto: [],
        cryptos: [
          { label: "BTC", value: "BINANCE:BTCUSD.P" },
          { label: "SHIB", value: "MEXC:SHIBUSDT.P" },
          { label: "MATIC", value: "BINANCE:MATICUSDT.P" },
          { label: "GALA", value: "BINANCE:GALAUSDT.P" },
          { label: "DOT", value: "BINANCE:DOTUSDT.P" },
          { label: "FIL", value: "BINANCE:FILUSDT.P" },
          { label: "LINK", value: "BINANCE:LINKUSDT.P" },
          { label: "DOGE", value: "BINANCE:DOGEUSDT.P" },
          { label: "SUI", value: "BINANCE:SUIUSDT.P" },
          { label: "FTM", value: "BINANCE:FTMUSDT.P" },
          { label: "EUR_USD", value: "OANDA:EURUSD" },
          { label: "GBP_USD", value: "OANDA:GBPUSD" },
          { label: "AUD_USD", value: "OANDA:AUDUSD" },
          { label: "USD_JPY", value: "OANDA:USDJPY" },
          { label: "USD_CAD", value: "OANDA:USDCAD" }
        ]
      };
    },
    methods: {
      fetchLatestSymbols() {
        // Simulate fetching symbols from an API
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(this.defaultSymbols);
          }, 1000);
        });
      },
      async initializeCharts() {
        const latestSymbols = await this.fetchLatestSymbols();
        this.symbolsTop = latestSymbols.slice(0, 3);
        this.symbolsBottom = latestSymbols.slice(3, 6);
  
        // Create the charts
        this.createCharts();
      },
      createCharts() {
        for (let i = 0; i < 3; i++) {
          this.createChart(`chart-top-${i}`, this.symbolsTop[i]);
          this.createChart(`chart-bottom-${i}`, this.symbolsBottom[i]);
        }
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
      openModal(chartIndex) {
        this.selectedChartIndex = chartIndex;
        $('#cryptoModal').modal('show');
      },
      confirmSelection() {
        if (this.selectedCrypto.length > 0) {
          const selectedSymbol = this.selectedCrypto[0];
          const chartId = this.selectedChartIndex < 3 ? `chart-top-${this.selectedChartIndex}` : `chart-bottom-${this.selectedChartIndex - 3}`;
          const tickerNameId = this.selectedChartIndex < 3 ? `ticker-name-top-${this.selectedChartIndex}` : `ticker-name-bottom-${this.selectedChartIndex - 3}`;
          
          // Update the chart
          document.getElementById(chartId).innerHTML = '';
          document.getElementById(tickerNameId).textContent = selectedSymbol;
          this.createChart(chartId, selectedSymbol);
  
          // Close the modal
          $('#cryptoModal').modal('hide');
        } else {
          alert('Please select at least one cryptocurrency.');
        }
      }
    },
    mounted() {
      this.initializeCharts();
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .chart-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1.5px;
  }
  .chart {
    height: 44vh;
    width: 32vw;
  }
  .chart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: rgb(107, 147, 221);
    padding: 2px;
    box-sizing: border-box;
  }
  .ticker-name {
    font-weight: bold;
    color: rgb(255, 255, 255);
  }
  .checkbox {
    width: 20px;
    height: 20px;
    background-color: aqua;
  }
  </style>
  