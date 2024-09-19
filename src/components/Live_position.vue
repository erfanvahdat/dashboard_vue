<template>
    <div class="h-full overflow-hidden bg-gray-700">
        <div class="flex flex-row p-2 space-y m-3 gap-5">



            <!-- Limit Order -->
            <div class="flex flex-row rounded-3  gap-3 bg-gray-800    w-[1000px] h-[250px]">

                <!-- input_limit_section -->
                <div class="space-y-2 ml-2 w-[530-px]  ">

                    <span class="text-sm font-bold font-serif mt-2 ml-1">Limit_order</span>
                    <div class="card flex mr-5 w-full ">
                        <Select v-model="selectedTickers" :options="availableSymbols" optionLabel="label"
                            placeholder="Select Ticker" class="w-full  " @change="updateChart('chart')"></Select>
                    </div>

                    <!-- Type Toggle_button -->
                    <div class="flex   rounded-1  ml-3 mt-3 h-[50px] justify-center  ">
                        <button @click="toggleValue" class="btn  btn-sm  w-24 my-2 hover:border-gray-600 " type="button"
                            :class="type_toggle">
                            <span class='text-xs font-bold font-serif'>{{ isLong ? 'LONG' : 'SHORT' }}</span>
                        </button>
                    </div>


                    <div class="flex flex-row">
                        <label for="integeronly" class="font-serif p-2 text-sm underline "> TP: </label>
                        <InputNumber v-model="value1" inputId="integeronly" fluid />

                        <label for="integeronly" class="font-serif p-2 text-sm underline "> SL: </label>
                        <InputNumber v-model="value1" inputId="integeronly" fluid />

                    </div>

                </div>

                <!-- Chart section -->
                <div id="chart" class=" p-2  w-full"></div>



            </div>

            <!-- Limit Order -->
            <div class="flex flex-row rounded-3  gap-3 bg-gray-800   border-1 border-zinc-500 w-fit">





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
            value1: 0,


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
        }
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
