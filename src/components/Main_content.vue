<template>
  <div class="flex flex-row h-screen">
    <!-- Sidebar -->
    <div class="flex w-[250px]" v-if="isLoggedIn">
      <Sidebar @showHome="showhome" @showAnalyze="showAnalyze" @showCharts="toggleChartVisibility"
        @showRanking="showRanking" @showSettings="showSettings" @showHistory="showTradeHistory"
        @live_pos="show_live_pos" @registration="showreg" />
    </div>

    <!-- Main-content -->
    <div class="flex flex-col w-full ml-fit">
      <Home v-if="home" />
      <Trade_pl v-if="showCharts" />
      <Live_pos v-if="live_position" />
      <Trade_history v-if="showTradeHistoryComponent" />
      <Analyzing v-if="showAnalyzeComponent" />
      <Setting v-if="showSettingsComponent" />
      <Registration v-if="reg" @reg_success="goToLogin" />
      <login @login_success="goToHome" @sign_up='signup' v-if="!isLoggedIn" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      home: false,
      sidebar: false,
      showCharts: false,
      reg: false,
      live_position: false,
      showAnalyzeComponent: false,
      showRankingComponent: false,
      showSettingsComponent: false,
      showTradeHistoryComponent: false,
      isLoggedIn: false, // Track login state
    };
  },
  mounted() {
    this.checkLoginStatus();
  },
  methods: {

    checkLoginStatus() {
      const access = localStorage.getItem('access');
      const refresh = localStorage.getItem('refresh');

      
      if (access && refresh) {

        console.log(access)
        console.log(refresh)

        if (this.isRefreshTokenExpired(access)) {
          console.log('Refresh token is expired. Please log in again.');
          // Optionally clear tokens and redirect to login
          localStorage.removeItem('access');
          localStorage.removeItem('refresh');

          this.isLoggedIn = false; // Set login state to false
          
        } else {
          this.isLoggedIn = true; // User is logged in
          this.showhome(); // Optionally show the home component
        }
      } else {
        this.isLoggedIn = false; // User is not logged in
      }
    },
    isRefreshTokenExpired(value) {
      if (!value) return true; // If no token, consider it expired

      const payload = JSON.parse(atob(value.split('.')[1])); // Decode JWT payload
      const now = Math.floor(Date.now() / 1000); // Current time in seconds

      const exp = payload.exp
      var time_left = 0

      if (exp > now) {

        const timeLeftInSeconds = exp - now;
        time_left = Math.floor(timeLeftInSeconds / 3600);

      } else {

        // time_left = 0
        return true
      }
      console.log(time_left);
      console.log(now)

      return payload.exp < now; // Check if the token has expired
    },
    resetComponents() {
      this.home = false;
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
      this.isLoggedIn = false; // Show login after registration
    },
    signup() {
      this.resetComponents();
      this.reg = true; // Show registration component
    },
    goToHome() {
      this.resetComponents();
      this.home = true; // Show home component after login
      this.isLoggedIn = true; // Set login state to true
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
