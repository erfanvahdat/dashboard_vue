<template>
    <div>
        <ul class="menu bg-base-200 w-56 text-black text-md h-full pt-3">
            <li>
                <router-link to="/" @click.native="emitHome">
                    <a>
                        HOME
                        <span class="fa-solid fa-house fa-sm m-1"></span>
                    </a>
                </router-link>
            </li>

            <li>
                <!-- Main -->
                <a class="group relative inline-block overflow-hidden rounded">
                    <span class="absolute left-0 top-0 mb-0 flex h-full w-0 translate-x-0 transform bg-indigo-500
              opacity-90 transition-all duration-700 ease-out group-hover:w-full">
                    </span>
                    <span class="relative group-hover:text-white">Main <i class="fa-solid fa-house"></i></span>
                </a>
                <ul>
                    <li>
                        <router-link to="/charts" @click.native="emitCharts">
                            <a>
                                Chart
                                <span class="fa-solid fa-chart-pie m-1"></span>
                            </a>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/settings" @click.native="emitSettings">
                            <a>
                                Setting
                                <span class="fa-solid fa-gear m-1"></span>
                            </a>
                        </router-link>
                    </li>
                </ul>
            </li>

            <!-- LAB -->
            <li>
                <a class="group relative inline-block overflow-hidden rounded">
                    <span class="absolute left-0 top-0 mb-0 flex h-full w-0 translate-x-0 transform bg-red-500
              opacity-90 transition-all duration-700 ease-out group-hover:w-full">
                    </span>
                    <span class="relative group-hover:text-white space">LAB <i class="fa-solid fa-flask"></i></span>
                </a>
                <ul>
                    <li>
                        <router-link to="/analyze" @click.native="emitAnalyze">
                            <a>
                                Analyzing
                                <span class="fa-solid fa-chart-pie m-1"></span>
                            </a>
                        </router-link>
                    </li>
                </ul>
            </li>

            <!-- Trade journals -->
            <li>
                <a class="group relative inline-block overflow-hidden rounded">
                    <span class="absolute left-0 top-0 mb-0 flex h-full w-0 translate-x-0 transform bg-green-500
              opacity-90 transition-all duration-700 ease-out group-hover:w-full">
                    </span>
                    <span class="relative group-hover:text-white space">LAB <i class="fa-solid fa-book-open"></i></span>
                </a>
                <ul>
                    <li>
                        <router-link to="/history" @click.native="emitHistory">
                            <a>
                                Trade History
                                <span class="fa-solid fa-clock-rotate-left"></span>
                            </a>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/ranking" @click.native="emitRanking">
                            <a>
                                Ranking
                                <span class="fa-solid fa-sitemap text-lg"></span>
                            </a>
                        </router-link>
                    </li>
                </ul>
            </li>

            <!-- Registration Form -->
            <li>
                <router-link to="/registration" @click.native="emitRegistration">
                    <a>
                        Registration
                        <i class="fa-solid fa-address-card"></i>
                    </a>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    methods: {
        emitHome() {
            this.$emit('showHome');
        },
        emitCharts() {
            this.$emit('showCharts');
        },
        emitSettings() {
            this.$emit('showSettings');
        },
        emitAnalyze() {
            this.$emit('showAnalyze');
        },
        emitHistory() {
            this.$emit('showHistory');
        },
        emitRanking() {
            this.$emit('showRanking');
        },
        emitRegistration() {
            this.$emit('registration');
        },
    },
};
</script>



<!-- 
loading icon
<span class="relative flex h-3 w-3">
    <span
        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
    <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
</span> -->
<!-- 
pulse
<div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
    <div class="animate-pulse flex space-x-4">
      <div class="rounded-full bg-slate-700 h-10 w-10"></div>
      <div class="flex-1 space-y-6 py-1">
        <div class="h-2 bg-slate-700 rounded"></div>
        <div class="space-y-3">
          <div class="grid grid-cols-3 gap-4">
            <div class="h-2 bg-slate-700 rounded col-span-2"></div>
            <div class="h-2 bg-slate-700 rounded col-span-1"></div>
          </div>
          <div class="h-2 bg-slate-700 rounded"></div>
        </div>
      </div>
    </div>
  </div> -->