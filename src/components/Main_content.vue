<template>
  <div class="flex flex-row h-screen">
    <!-- Sidebar -->
    <div class="flex w-[250px]" v-if="isLoggedIn">
      <Sidebar @showHome="showhome" @showAnalyze="showAnalyze" @showCharts="toggleChartVisibility"
        @showRanking="showRanking" @showSettings="showSettings" @showHistory="showTradeHistory" @Trade="Trade"
        @registration="showreg" @trade_journal="showjournal" />
    </div>

    <!-- Main-content -->
    <div class="flex flex-col w-full ml-fit">
      <Home v-if="home" />
      <Charts v-if="showCharts" />
      <Live_pos v-if="live_position" />
      <Trade_history v-if="showTradeHistoryComponent" />
      <Analyzing v-if="showAnalyzeComponent" />
      <Setting v-if="showSettingsComponent" />
      <Registration v-if="reg" @go_login="goToLogin" @reg_success="goToHome" />

      <!-- Hide login form if in registration mode -->
      <login @login_success="goToHome" @sign_up='signup' v-if="isLoggedIn == false && !reg" />

      <Trade_journal v-if="journal" />
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
      show_login: false,
      live_position: false,
      showAnalyzeComponent: false,
      showRankingComponent: false,
      showSettingsComponent: false,
      showTradeHistoryComponent: false,
      isLoggedIn: false, // Track login state
      journal: false,
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

      return payload.exp < now; // Check if the token has expired
    },
    resetComponents() {
      this.home = false;
      this.showCharts = false;
      this.live_position = false;
      this.reg = false;
      this.journal = false;
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
    Trade() {
      this.resetComponents();
      this.live_position = true;
    },
    showreg() {
      this.resetComponents();
      this.reg = true;
    },
    signup() {
      this.resetComponents();
      // this.isLoggedIn = false; // Ensure login form is hidden
      this.reg = true; // Show the registration form
    },


    goToLogin() {
      this.resetComponents();
      // this.isLoggedIn = false; // Ensure login form is hidden
      // this.isLoggedIn = true; // Ensure the login form shows again
      this.show_login = true; // Optionally display the login form
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
    showjournal() {
      this.resetComponents();
      this.journal = true;
    }

  },
};
</script>
