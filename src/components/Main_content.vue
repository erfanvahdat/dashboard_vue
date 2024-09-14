<template>


  <!-- body -->
  <div class="flex flex-row  h-screen ">

    <!-- Sidebar -->
    <div class="flex w-[250px]   ">
      <Sidebar @showHome="showhome" @showAnalyze="showAnalyze" @showCharts="toggleChartVisibility"
        @showRanking="showRanking" @showSettings="showSettings" @showHistory="showTradeHistory" />
    </div>


    <!-- Main-content -->
    <div class="flex flex-col w-full   ml-fit ">
      <!-- <Head></Head> -->




      <!-- Conditionally render different components -->
      <Trade_pl v-if="showCharts" />
      <Live_pos v-if="home" />


      <!-- 
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
      home: false,
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
      this.home = false;
      this.showCharts = false;
      this.showAnalyzeComponent = false;
      this.showRankingComponent = false;
      this.showSettingsComponent = false;
      this.showTradeHistoryComponent = false;
    },


    showhome() {
      this.resetComponents();
      this.home = true;
      console.log(this.home)
    },
    // Toggle chart visibility
    toggleChartVisibility() {
      this.resetComponents();
      this.showCharts = true;
    },
    // Toggle analyze component visibility
    showAnalyze() {
      this.resetComponents();
      this.showAnalyzeComponent = true;
    },
    // Toggle ranking component visibility
    showRanking() {
      this.resetComponents();
      this.showRankingComponent = true;
    },
    // Toggle settings component visibility
    showSettings() {
      this.resetComponents();
      this.showSettingsComponent = true;
    },
    // Toggle trade history component visibility
    showTradeHistory() {
      this.resetComponents();
      this.showTradeHistoryComponent = true;
    },
  }
}
</script>
