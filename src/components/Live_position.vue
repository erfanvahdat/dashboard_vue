<template>
    <div class="h-full overflow-hidden bg-gray-700">
        <div class="flex flex-row p-2 space-y m-3 gap-5  justify-start">

            <!-- Trade Section 1️⃣-->
            <div class="flex flex-row rounded-3  gap-3 bg-gray-800 w-110 h-[400px]  w-[800px]   ">

                <!-- input_limit_section -->
                <div class=" flex flex-col space-y-0 ml-2   ">
                    <span class="text-sm font-bold font-serif mt-2 ml-1">Limit_order</span>


                    <div class="card flex w-fit ml-2 mt-2">
                        <Select v-model="selectedTickers" :options="availableSymbols" filter optionLabel="label"
                            placeholder="Select a Crypto" class="w-full md:w-56">

                            <!-- Template for selected value -->
                            <template #value="slotProps">
                                <div v-if="slotProps.value" class="flex items-center">
                                    <div>{{ slotProps.value.label }}</div> <!-- Display ticker -->
                                </div>
                                <span v-else>
                                    {{ slotProps.placeholder }}
                                </span>
                            </template>
                        </Select>
                    </div>




                    <!-- Type Toggle_button -->

                    <div class="flex  ml-3 mt-3 h-[60px]  justify-center ">
                        <button @click="toggleValue" class="btn rounded-1 btn-sm w-36 my-2 hover:border-gray-600 "
                            type="button" :class="[type_toggle]">
                            <span class='text-sm font-bold font-serif'>{{ isLong ? 'LONG' : 'SHORT' }}</span>
                        </button>
                    </div>


                    <div>


                    </div>

                    <!-- Limit_price -->
                    <div class="m-1 mb-3">
                        <span class="font-serif  text-xm text-[10px] mb-0 underline decoration-dashed "> Limit: </span>

                        <div>
                            <input_sub :value="'Limit'" v-model="limit"></input_sub>
                        </div>

                    </div>

                    <!-- TP and SL Fields -->
                    <div class="flex flex-row gap-2">
                        <div>
                            <span class="font-serif text-xm text-[10px] mb-0 underline decoration-dashed	 "> TP: </span>
                            <input_sub :value="'TP Price'" v-model="tp" @input="tp = parseInt($event.target.value)"
                                accentColor="#72ee17">
                            </input_sub>

                        </div>
                        <div>
                            <span class="font-serif text-xm text-[10px] mb-0 underline decoration-dashed"> SL: </span>
                            <input_sub :value="'TP Price'" v-model="sl" @input="sl = parseInt($event.target.value)"
                                accentColor="#e53621 ">
                            </input_sub>

                        </div>

                    </div>

                    <!-- Submit Button -->
                    <div class="flex my-3  justify-center">
                        <order_button_sub :buttonText="'Sumbit'" @click="submit" />




                        <div v-if="alert" class="flex">

                            <Alert :isDanger="false" />

                        </div>



                    </div>

                </div>

                <!-- Chart section  1️⃣-->
                <div id="chart" class="p-2 w-full"></div>





            </div>

            <!-- Pending Section 2️⃣-->
            <div class="flex    rounded p-2 overflow-hidden w-[990px]">

                <div class="relative w-full h-full ">
                    <!-- Table with Pulse animation -->
                    <table class="table rounded-lg border border-gray-300 overflow-hidden">
                        <thead>
                            <tr>
                                <th></th>
                                <th v-for="(key, index) in objectKeys" :key="index">{{ key }}</th>
                                <th>Trigger</th>
                                <th>Cancel</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(person, index) in peopleData" :key="index" class="bg-black text-white">
                                <th>{{ index + 1 }}</th>
                                <td>{{ person.name }}</td>
                                <td>{{ person.job }}</td>
                                <td>{{ person.favorit_color }}</td>
                                <td><button class="btn btn-accent">Accent</button></td>

                                <td><button class="btn btn-error">
                                        <i class="pi pi-pencil"></i>

                                    </button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </div>




        </div>



        <div class="flex  border-1 border-blue-500 h-full m-2">
            <div class="relative w-full h-full  mt-2 mx-2">
                <!-- Table with Pulse animation -->
                <table class="table rounded-lg border border-gray-300 overflow-hidden">
                    <thead>
                        <tr>
                            <th></th>
                            <th v-for="(key, index) in objectKeys" :key="index">{{ key }}</th>
                            <th>Trigger</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(person, index) in peopleData" :key="index" class="bg-black text-white">
                            <th>{{ index + 1 }}</th>
                            <td>{{ person.name }}</td>
                            <td>{{ person.job }}</td>
                            <td>{{ person.favorit_color }}</td>
                            <td><button class="btn btn-accent">Accent</button></td>

                            <td><button class="btn btn-error">
                                    <i class="pi pi-pencil"></i>

                                </button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {


            last_col: [
                { field: 'Delete', header: 'Submit' },

            ],
            columns: [
                { field: 'code', header: 'Code' },
                { field: 'name', header: 'Name' },
                { field: 'category', header: 'Category' },
                { field: 'quantity', header: 'Quantity' }
            ],

            selectedTickers: null,
            isLong: true,
            timeframe: '1',
            tp: 0,  // Take Profit
            sl: 0,  // Stop Loss
            limit: 0,
            errorMessage: null, // Error message to display
            objectKeys: [],
            alert: false,


            product: [{
                id: '1000',
                code: 'f230fh0g3',
                name: 'Bamboo Watch',
                description: 'Product Description',
                image: 'bamboo-watch.jpg',
                price: 65,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5
            }],
            peopleData: [
                { name: "erfan", job: "programmer", favorit_color: "green" },
                { name: "ali", job: "it", favorit_color: "blue" },
                { name: "moh", job: "SEO", favorit_color: "red" }
            ],
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
            console.log(this.isLong)
            console.log(this.isLong ? 'LONG' : 'SHORT');
        },

        submit() {
            this.errorMessage = null; // Reset error message before validation

            this.alert = true;

            setTimeout(() => {

                this.alert = false

            }, "2000");

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

        if (this.peopleData.length > 0) {
            this.objectKeys = Object.keys(this.peopleData[0]);
        }
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
