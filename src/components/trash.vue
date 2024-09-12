<template>

    <div class="grid lg:grid-rows-2 lg:grid-cols-3 h-100vh  gap-1 ml-0 mr-2 mt-2 ">
        <!-- TOP ROW (Top 3) -->
        <div v-for="(value, key, index) in all_symbol" :key="index" class="flex flex-col items-center m-1 ">
            <!-- header section -->
            <div class="flex justify-between items-center w-full bg-blue-600 rounded h-[40px]">
                <div :id="'ticker-name-' + index" class="font-bold ml-3 font-serif rounded text-white ">
                    {{ all_label[key] }}
                </div>

                <!-- Timeframe -->
                <div class="mx-auto max-w-xs">
                    <select :id="'timeframe-select-top-' + index" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50
                        text-black
                    " v-model="timeframesTop[index]" @change="changeTimeframe(index, $event.target.value)">
                        <option value="1">1_MIN</option>
                        <option value="5">5_MIN</option>
                    </select>
                </div>
                <!-- Dropdown for selecting symbols -->
                <div class="dropdown dropdown-hover">
                    <div tabindex="0" role="button" class="btn m-1 btn-sm hover:bg-white-400 hover:border-white-500">
                        Select
                    </div>
                    <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow">
                        <li class="text-black font-thin hover:bg-sky-500 hover:border-1 rounded-1 border-b-2 border-solid border-gray-300"
                            v-for="symbol in availableSymbols" :key="symbol.value"
                            @click="updateChart(index, 'all', symbol.value, symbol.label)">
                            <a>{{ symbol.label }}</a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- BOTTOM ROW (Top 3) -->
            <!-- Chart Section -->
            <div :id="'chart-all-' + index" class="w-full h-[450px] rounded "></div>
        </div>


    </div>
</template>
<script>
export default {
    data() {
        return {
            // Symbols and Labels for top and bottom 3 charts
            symbolsTop: { 'BTC': "BINANCE:BTCUSD.P", "ETH": "BINANCE:ETHUSD.P", "BNB": "BINANCE:BNBUSDT.P" },
            symbolsBottom: { "MATIC": "BINANCE:POLUSDT.P", "DOT": "BINANCE:DOTUSDT.P", "SOL": "BINANCE:SOLUSDT.P" },


            all_symbol: {
                "MATIC": "BINANCE:POLUSDT.P", "DOT": "BINANCE:DOTUSDT.P", "SOL": "BINANCE:SOLUSDT.P",
                'BTC': "BINANCE:BTCUSD.P", "ETH": "BINANCE:ETHUSD.P", "BNB": "BINANCE:BNBUSDT.P"
            },

            all_label: { "MATIC": "MATIC", "DOT": "DOT", "SOL": "SOL", 'BTC': "BTC", "ETH": "ETH", "BNB": "BNB", },
            symbolsTopLabels: { 'BTC': "BTC", "ETH": "ETH", "BNB": "BNB" },
            symbolsBottomLabels: { "MATIC": "MATIC", "DOT": "DOT", "SOL": "SOL" },

            // Available symbols for the dropdown
            availableSymbols: [
                { label: 'Gala', value: 'BINANCE:GALAUSDT.P' },
                { label: 'DOT', value: 'BINANCE:DOTUSDT.P' },
                { label: 'FIL', value: 'BINANCE:FILUSDT.P' },
                { label: 'BTC', value: 'BINANCE:BTCUSD.P' },
                { label: 'WIF', value: 'BINANCE:WIFUSDT.P' },
                { label: 'LINK', value: 'BINANCE:LINKUSDT.P' },
                { label: 'DOGE', value: 'BINANCE:DOGEUSDT.P' },
                { label: 'SUI', value: 'BINANCE:SUIUSDT.P' },
                { label: 'FTM', value: 'BINANCE:FTMUSDT.P' },
                { label: 'EUR_USD', value: 'OANDA:EURUSD' },
                { label: 'GBP_USD', value: 'OANDA:GBPUSD' },
                { label: 'AUD_USD', value: 'OANDA:AUDUSD' },
                { label: 'USD_JPY', value: 'OANDA:USDJPY' },
                { label: 'USD_CAD', value: 'OANDA:USDCAD' }
            ],

            // Timeframes for top charts
            timeframesTop: ['1', '1', '1', '1', '1', '1'], // Default to 1 minute for each top chart
        };
    },
    methods: {
        changeTimeframe(index, newTimeframe) {
            const chartContainerId = chart - top - ${ index };
            const symbol = this.symbolsTop[Object.keys(this.symbolsTop)[index]];
            this.updateChart(index, 'top', symbol, this.symbolsTopLabels[Object.keys(this.symbolsTopLabels)[index]]);
            this.change_timeframe_Chart(chartContainerId, symbol, newTimeframe);
        },

        change_timeframe_Chart(containerId, symbol, timeframe) {
            new TradingView.widget({
                autosize: true,
                symbol: symbol,
                interval: timeframe,
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

        updateChart(index, type, newSymbol, newLabel) {
            console.log(Updating chart ${ type } ${ index } with new symbol: ${ newSymbol });
            if (type === 'top') {
                this.symbolsTop[Object.keys(this.symbolsTop)[index]] = newSymbol;
                this.symbolsTopLabels[Object.keys(this.symbolsTopLabels)[index]] = newLabel; // Update header label
                this.createChart(chart - top - ${ index }, newSymbol);
            } else {
                this.symbolsBottom[Object.keys(this.symbolsBottom)[index]] = newSymbol;
                this.symbolsBottomLabels[Object.keys(this.symbolsBottomLabels)[index]] = newLabel; // Update header label
                this.createChart(chart - bottom - ${ index }, newSymbol);
            }
        }
    },
    mounted() {
        // Initialize top charts
        // Object.keys(this.symbolsTop).forEach((key, index) => {
        //     this.createChart(chart-top-${index}, this.symbolsTop[key]);
        // });

        // Initialize bottom charts
        Object.keys(this.all_symbol).forEach((key, index) => {
            this.createChart(chart - all - ${ index }, this.all_symbol[key]);
        });
    }
};
</script>

<style scoped>
.grid {
    display: grid;
    height: 100%;
    gap: 0;
}

.flex-col {
    width: 100%;
    height: 100%;
}
</style>