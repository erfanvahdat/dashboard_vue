<template>
    <div class="h-full overflow-hidden bg-gray-700">
        <div class="flex flex-row p-2 space-y m-3 gap-5">

            <!-- Limit Order -->
            <div class="flex flex-row rounded-3  gap-3 bg-gray-800 w-[1000px] h-[300px]">

                <!-- input_limit_section -->
                <div class=" flex flex-col space-y-0 ml-2 w-[530-px]  ">
                    <span class="text-sm font-bold font-serif mt-2 ml-1">Limit_order</span>
                    <div class="card flex mr-5 w-full ">
                        <Select v-model="selectedTickers" :options="availableSymbols" optionLabel="label"
                            placeholder="Select Ticker" class="w-full" @change="updateChart('chart')"></Select>
                    </div>

                    <!-- Type Toggle_button -->
                    <div class="flex rounded-1 ml-3 mt-3 h-[50px] justify-center">
                        <button @click="toggleValue" class="btn btn-sm w-36 my-2 hover:border-gray-600" type="button"
                            :class="type_toggle">
                            <span class='text-sm font-bold font-serif'>{{ isLong ? 'LONG' : 'SHORT' }}</span>
                        </button>
                    </div>


                    <!-- Limit_price -->
                    <div class="m-1 mb-3">
                        <span class="font-serif  text-xm text-[10px] mb-0 underline "> Limit: </span>

                        <div>
                            <input_sub :value="'Limit'"></input_sub>
                        </div>

                    </div>


                    <!-- TP and SL Fields -->
                    <div class="flex flex-row gap-2">

                        <div>
                            <span class="font-serif  text-xm text-[10px] mb-0 underline "> TP: </span>

                            <input_sub :value="'TP Price'"></input_sub>
                        </div>
                        <div>
                            <span class="font-serif  text-xm text-[10px] mb-0  underline"> TP: </span>
                            <input_sub :value="'Sl Price'"></input_sub>
                        </div>
                    </div>
                    


                    <!-- Submit Button -->
                    <order_button></order_button>



                    <!-- <div class="flex justify-center">
                        <button
                            class="h-[35px] w-[70px] justify-center bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-3"
                            @click="submit">
                            Trigger
                        </button>
                    </div> -->


                </div>

                <!-- Chart section -->
                <div id="chart" class="p-2 w-full"></div>

            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedTickers: null,
            isLong: true,
            timeframe: '1',
            tp: 0,  // Take Profit
            sl: 0,  // Stop Loss
            errorMessage: null, // Error message to display

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
        };
    },

    methods: {
        createChart(containerId, symbol, timeframe = "1", theme = "Dark") {
            new TradingView.widget({
                autosize: true,
                symbol: symbol,
                interval: timeframe,
                timezone: "Africa/Tehran",
                theme: theme,
                style: "1",
                locale: "en",
                toolbar_bg: "#f1f3f6",
                enable_publishing: false,
                hide_top_toolbar: true,
                hide_side_toolbar: false,
                allow_symbol_change: false,
                hideideas: true,
                container_id: containerId,
            });
        },

        updateChart(index) {
            this.createChart(index, this.selectedTickers.value, "1", "Dark");
        },

        toggleValue() {
            this.isLong = !this.isLong;
            console.log(this.isLong ? 'LONG' : 'SHORT');
        },

        submit() {
            this.errorMessage = null; // Reset error message before validation

            // Validate TP and SL values
            if (this.tp <= 0 || this.sl <= 0) {
                this.errorMessage = 'Error: TP and SL must be greater than zero.';
                return;
            }

            // Submit logic (additional logic to handle order placement)
            console.log('TP:', this.tp, 'SL:', this.sl);
        },
    },

    mounted() {
        // Load a default ticker when the component is mounted
        this.selectedTickers = this.availableSymbols[0]; // Set default ticker
        this.createChart("chart", this.selectedTickers.value, "1", "Dark");
    },

    computed: {
        type_toggle() {
            return this.isLong ? 'bg-green-500' : 'bg-red-500';
        },
    }
};
</script>

<style>
/* Radio button background */
.p-radiobutton {
    transition: background-color 0.3s ease;
}
</style>
