<template>
    <div class="h-full overflow-hidden bg-gray-700 x-full">
        <div class="flex flex-row p-2 space-y m-3 gap-5  justify-start">

            <!-- Trade Section 1️⃣-->
            <div class="flex md:flex-row rounded-3 overflow-hidden  gap-3 bg-gray-800 w-110 h-[400px]   w-full">

                <!-- input_limit_section -->
                <div class=" flex flex-col space-y-0 ml-2   ">
                    <span class="text-sm font-bold font-serif mt-2 ml-1">Limit_order</span>


                    <div class="card flex w-fit ml-2 mt-2">
                        <Select v-model="Ticker" :options="cryptoList" filter optionLabel="ticker"
                            placeholder="Select a Crypto" class="w-full md:w-56">

                            <!-- Template for selected value -->
                            <template #value="slotProps">
                                <div v-if="slotProps.value" class="flex items-center">
                                    <div>{{ slotProps.value.ticker }}</div> <!-- Display ticker -->
                                </div>
                                <span v-else>
                                    {{ slotProps.placeholder }}
                                </span>
                            </template>
                        </Select>
                    </div>

                    <!-- Toggle Type -->
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
                            <input_sub :value="'limit_price'" v-model="limit"></input_sub>
                        </div>

                    </div>

                    <!-- TP and SL Fields -->
                    <div class="flex flex-row gap-2">
                        <div>
                            <span class="font-serif text-xm text-[10px] mb-0 underline decoration-dashed	 "> TP: </span>
                            <input_sub :value="'TP Price'" v-model="tp_price"
                                @input="tp_price = parseInt($event.target.value)" accentColor="#72ee17">
                            </input_sub>

                        </div>
                        <div>
                            <span class="font-serif text-xm text-[10px] mb-0 underline decoration-dashed"> SL: </span>
                            <input_sub :value="'TP Price'" v-model="sl_price"
                                @input="sl_price = parseInt($event.target.value)" accentColor="#e53621 ">
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
            <div class="flex     rounded p-2 overflow-hidden w-[990px]">

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


        <div class="flex flex-col  border-1 border-blue-500 h-[calc(100vh-150px)] m-2 ">

            <div class=" w-full   mt-2 mx-2">
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


            <div class="mt-2 ml-2">



                <div>
                    <p>the value is : {{ this.limit_price }}</p>
                    <p>Selected Timeframe: {{ tp_price }}</p>
                    <p>Selected type: {{ sl_price }}</p>
                    <p>Selected Interval: {{ risk }}</p>



                    <a class="btn btn-primary btn-sm " role="button" @click='fetchCryptoData()'>Link</a>

                </div>



            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    data() {
        return {


            Ticker: null,
            Type_pos: null,
            limit_price: null,
            sl_price: null,
            pt_price: null,
            type: 'limit',
            risk: null,



            cryptoList: [],
            access: localStorage.getItem('access'),


            last_col: [
                { field: 'Delete', header: 'Submit' },

            ],
            columns: [
                { field: 'code', header: 'Code' },
                { field: 'name', header: 'Name' },
                { field: 'category', header: 'Category' },
                { field: 'quantity', header: 'Quantity' }
            ],


            isLong: true,

            timeframe: '1',

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

        show_access() {
            const access = localStorage.getItem('access');
            return access;



        },

        async get_ticker() {
            try {
                const response = await axios.get('localhost:7000/api/v1/cryptoList/');

                // Assuming response.data.data is an array of objects like [{ symbol: 'BTC', ticker: 'Bitcoin' }, ...]
                this.cryptoList = response.data.data.map(crypto => ({
                    symbol: crypto.symbol,
                    ticker: crypto.ticker
                }));

                console.log("Getting data is compelete...")

            } catch (error) {

                console.error('Error fetching crypto list:', error);
            }
        },

        async fetchCryptoData() {
            try {
                const token = this.show_access();  // Get the access token

                if (!token) {
                    throw new Error('Access token not found');
                }

                console.log(token)
                // Make the GET request to the Crypto API
                const response = await axios.get('http://localhost:7000/api/v1/Crypto/', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                // Handle the successful response
                this.cryptoData = response.data;
                console.log('Crypto data:', this.cryptoData);

            } catch (error) {


                // Handle any errors, like failed authentication or network issues
                this.errorMessage = 'Failed to fetch crypto data: ' + (error.response?.data || error.message);
                console.error(this.errorMessage);
                console.error(this.cryptoData);

            }
        },

        async postLiveTrade() {
            try {
                const token = this.show_access();  // Get the access token

                if (!token) {
                    throw new Error('Access token not found');
                }

                // Prepare the data for the POST request based on your provided model
                const postData = {
                    ticker: this.formData.ticker,
                    positionSide: this.formData.positionSide,
                    limitPrice: this.formData.limitPrice,
                    slPrice: this.formData.slPrice,
                    tpPrice: this.formData.tpPrice,
                    type: this.formData.type,
                    risk: this.formData.risk,
                    balance: this.formData.balance,
                    news: this.formData.news,
                    liveTradesCrypto: this.formData.liveTradesCrypto
                };

                // Make the POST request to the /api/v1/Crypto/ endpoint
                const response = await axios.post('http://localhost:7000/api/v1/Crypto/', postData, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                // Handle the successful response
                this.successMessage = 'Live trade posted successfully!';
                console.log('Response:', response.data);

            } catch (error) {
                // Handle any errors
                this.errorMessage = 'Failed to post live trade: ' + (error.response?.data || error.message);
                console.error(this.errorMessage);
            }
        },



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


        this.get_ticker();

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
