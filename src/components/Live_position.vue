<template>
    <div class="h-full overflow-hidden bg-gray-700">
        <div class="flex flex-row p-2 space-y m-3 gap-5">

            <!-- Trade Section -->
            <div class="flex flex-row rounded-3  gap-3 bg-gray-800 w-[1000px] h-fit  ">

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
                            <input_sub :value="'Limit'" v-model="limit"></input_sub>
                        </div>

                    </div>


                    <!-- TP and SL Fields -->
                    <div class="flex flex-row gap-2">

                        <div>
                            <span class="font-serif text-xm text-[10px] mb-0 underline "> TP: </span>
                            <!-- Convert the tp value to an integer -->
                            <input_sub :value="'TP Price'" v-model="tp" @input="tp = parseInt($event.target.value)">
                            </input_sub>
                        </div>
                        <div>
                            <span class="font-serif text-xm text-[10px] mb-0 underline"> SL: </span>
                            <!-- Convert the sl value to an integer -->
                            <input_sub :value="'SL Price'" v-model="sl">
                            </input_sub>
                        </div>






                    </div>




                    <!-- Submit Button -->

                    <div class="flex mb-2 justify-center">

                        <order_button_sub :buttonText="'Sumbit'" @click="submit" />

                    </div>

                    <!-- Alert Success -->
                    <!-- <div
                            class="bg-green-200 px-6 py-4 mx-2 my-4 rounded-md text-lg flex items-center mx-auto max-w-lg">
                            <svg viewBox="0 0 24 24" class="text-green-600 w-5 h-5 sm:w-5 sm:h-5 mr-3">
                                <path fill="currentColor"
                                    d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
                                </path>
                            </svg>
                            <span class="text-green-800">Your account has been saved.</span>
                        </div> -->
                    <!-- End Alert Success -->




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
            limit: 0,
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

            // Validate TP, SL, and Limit values
            if (this.tp <= 0) {
                this.errorMessage = 'Error: TP, SL, and Limit must be greater than zero.';
                console.error(this.errorMessage)

            } else {

                // Log TP, SL, and Limit values
                console.log('TP:', this.tp, 'SL:', typeof parseInt(this.sl), 'Limit:', this.limit)
            }

            // Additional submit logic for order placement
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
