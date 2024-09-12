<template>

  <div class="flex flex-row">

    <!-- Sidebar Section -->
    <div class="flex w-[250px] border-1 border-blue-300 bg-[#1ABC9C]  ">
      <Sidebar @showHome="displayHome" @showAnalyze="showAnalyze" @showCharts="toggleChartVisibility"
        @showRanking="showRanking" @showSettings="showSettings" @showHistory="showTradeHistory" />
    </div>

    <div class="flex flex-col w-full h-screen ml-0 border-1 border-blue-300">

      <Head></Head>

      <!-- Conditionally render different components -->
      <Trade_chart v-if="showCharts" />
      <!-- <Trade_P v-if="HOME" /> -->


      <!-- <Analyze_Component v-if="showAnalyzeComponent" />
      <Ranking_Component v-if="showRankingComponent" />
      <Settings_Component v-if="showSettingsComponent" />
      <Trade_History_Component v-if="showTradeHistoryComponent" /> -->


    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      HOME: false,
      showCharts: false, // State to control the chart visibility
      Trade_platform: false,
      showAnalyzeComponent: false,
      showRankingComponent: false,
      showSettingsComponent: false,
      showTradeHistoryComponent: false,
    };
  },
  methods: {
    // Resets the visibility of all components
    resetComponents() {
      this.HOME = false;
      this.showCharts = false;
      this.showAnalyzeComponent = false;
      this.showRankingComponent = false;
      this.showSettingsComponent = false;
      this.showTradeHistoryComponent = false;
    },


    displayHome() {
      this.resetComponents();
      this.HOME = true;
    },
    // Toggle chart visibility
    toggleChartVisibility() {
      this.resetComponents(); // Hide all components first
      this.showCharts = true; // Show the chart component
    },
    // Toggle analyze component visibility
    showAnalyze() {
      this.resetComponents(); // Hide all components first
      this.showAnalyzeComponent = true; // Show the analyze component
    },
    // Toggle ranking component visibility
    showRanking() {
      this.resetComponents(); // Hide all components first
      this.showRankingComponent = true; // Show the ranking component
    },
    // Toggle settings component visibility
    showSettings() {
      this.resetComponents(); // Hide all components first
      this.showSettingsComponent = true; // Show the settings component
    },
    // Toggle trade history component visibility
    showTradeHistory() {
      this.resetComponents(); // Hide all components first
      this.showTradeHistoryComponent = true; // Show the trade history component
    },
  }
}
</script>
