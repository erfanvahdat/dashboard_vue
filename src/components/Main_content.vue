<template>
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
      <Home v-if="home" />
      <Trade_pl v-if="showCharts" />

      <Live_pos v-if="live_position"></Live_pos>
      <Trade_history v-if="showTradeHistoryComponent"></Trade_history>
      <Analyzing v-if="showAnalyzeComponent"></Analyzing>
      <Setting v-if="showSettingsComponent"></Setting>


      <Registration v-if="reg" @reg_success="goToLogin" /> <!-- Registration with event listener -->
      <login @login_success="goToHome" @sign_up='signup' v-if="showLogin"></login>



    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      home: false,
      showCharts: false,
      reg: false,
      live_position: false,
      showAnalyzeComponent: false,
      showRankingComponent: false,
      showSettingsComponent: false,
      showTradeHistoryComponent: false,
      showLogin: false, // Show login when necessary
    };
  },
  methods: {
    resetComponents() {
      this.home = false;
      this.showCharts = false;
      this.live_position = false;
      this.reg = false;
      this.showAnalyzeComponent = false;
      this.showRankingComponent = false;
      this.showSettingsComponent = false;
      this.showTradeHistoryComponent = false;
      this.showLogin = false;
    },

    showhome() {
      this.resetComponents();
      this.home = true;
    },

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

    goToLogin() {
      this.resetComponents();
      this.showLogin = true; // Show the login component after registration
    },


    signup() {
      this.resetComponents();
      this.reg = true; // Show the login component after registration
    },

    goToHome() {
      this.resetComponents();
      this.home = true; // Show the home component after login
    },

    showAnalyze() {
      this.resetComponents();
      this.showAnalyzeComponent = true;
    },

    showRanking() {
      this.resetComponents();
      this.showRankingComponent = true;
    },

    showSettings() {
      this.resetComponents();
      this.showSettingsComponent = true;
    },

    showTradeHistory() {
      this.resetComponents();
      this.showTradeHistoryComponent = true;
    },
  },
};
</script>
