<template>
  <!-- body -->
  <div class="flex flex-row  h-screen ">
    <!-- Sidebar -->
    <div class="flex w-[250px]">
      <Sidebar @showHome="showhome" @showAnalyze="showAnalyze" @showCharts="toggleChartVisibility"
        @showRanking="showRanking" @showSettings="showSettings" @showHistory="showTradeHistory"
        @live_pos="show_live_pos" @registration="showreg" />
    </div>

    <!-- Main-content -->
    <div class="flex flex-col w-full ml-fit">
      <!-- Conditionally render different components -->
      <Home v-if="showLivePos" />
      <Trade_pl v-if="showCharts" />
      <Registration v-if="reg" />

      <Live_pos v-if="live_position"></Live_pos>

      <Trade_history v-if="showTradeHistoryComponent"></Trade_history>
      <Analyzing v-if="showAnalyzeComponent"></Analyzing>


      <!-- Uncomment and use when needed -->
      <!-- <Rank v-if="showRankingComponent" /> -->
      <!-- <Settings_Component v-if="showSettingsComponent" /> -->
      <!-- <Trade_History_Component v-if="showTradeHistoryComponent" /> -->
    </div>
  </div>
</template>

<script>
import Analyzing from './Analyzing.vue';

export default {
  data() {
    return {
      showLivePos: true, // Show Live_pos by default
      showCharts: false, // State to control the chart visibility
      reg: false,
      live_position: false,
      showAnalyzeComponent: false,
      showRankingComponent: false,
      showSettingsComponent: false,
      showTradeHistoryComponent: false,
    };
  },
  methods: {
    // Resets the visibility of all components
    resetComponents() {
      this.showLivePos = false;
      this.showCharts = false;
      this.live_position = false;
      this.reg = false;
      this.showAnalyzeComponent = false;
      this.showRankingComponent = false;
      this.showSettingsComponent = false;
      this.showTradeHistoryComponent = false;
    },

    showhome() {
      this.resetComponents();
      this.showLivePos = true;
    },

    // Toggle chart visibility
    toggleChartVisibility() {
      this.resetComponents();
      this.showCharts = true;
    },
    show_live_pos() {
      this.resetComponents();
      this.live_position = true;
    },


    showreg() {
      this.resetComponents();
      this.reg = true;
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
  },
};
</script>
