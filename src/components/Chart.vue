<template>
  <div id="chart">
    <apexchart type="candlestick" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "CandlestickChart",
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      series: [], // This will hold the OHLC data
      chartOptions: {
        chart: {
          type: 'candlestick',
          height: 350
        },
        xaxis: {
          type: 'datetime'
        },
        yaxis: {
          tooltip: {
            enabled: true
          }
        }
      }
    };
  },
  mounted() {
    this.fetchOHLCData();
  },
  methods: {
    async fetchOHLCData(symbol = 'ETHUSDT', interval = '1m', limit = 100) {
      const url = `https://api.mexc.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=${limit}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        // Format the data for ApexCharts
        const seriesData = data.map(item => ({
          x: new Date(item[0]), // Convert Unix timestamp to JS Date object
          y: [parseFloat(item[1]), parseFloat(item[2]), parseFloat(item[3]), parseFloat(item[4])]
        }));

        this.series = [{ data: seriesData }];
      } catch (error) {
        console.error("Error fetching OHLC data:", error);
      }
    }
  }
};
</script>

<style scoped>
#chart {
  max-width: 100%;
  margin: 35px auto;
}
</style>
