<template>
    <div class="h-full overflow-hidden bg-gray-700 x-full">
        <div class="flex flex-row p-2 space-y m-3 gap-5  justify-start">

            <!-- Trade Section 1️⃣-->
            <div class="flex md:flex-row rounded-3 overflow-hidden  gap-3 bg-gray-800 w-110 h-[460px]   w-full">

                <!-- input_limit_section -->
                <div class=" flex flex-col space-y-0 ml-2   ">
                    <span class="text-sm font-bold font-serif mt-2 ml-1">Limit_order</span>


                    <div class="card flex w-fit ml-2 mt-2">
                        <Select v-model="Ticker" :options="cryptoList" filter optionLabel="symbol"
                            @change="updateChart('chart')" placeholder="Select a Crypto" class="w-full md:w-56">

                            <!-- Template for selected value -->
                            <template #value="slotProps">
                                <div v-if="slotProps.value" class="flex items-center">
                                    <div>{{ slotProps.value.symbol }}</div> <!-- Display ticker -->
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
                            <input_sub :value="'limit_price'" v-model="limit_price"
                                @input="limit_price = $event.target.value" accentColor="#FFFFFF">

                            </input_sub>
                        </div>

                    </div>

                    <!-- TP and SL Fields -->
                    <div class="flex flex-row gap-2">
                        <div>
                            <span class="font-serif text-xm text-[10px] mb-0 underline decoration-dashed	 "> TP: </span>
                            <input_sub :value="'tp_price'" v-model="tp_price" @input="tp_price = $event.target.value"
                                accentColor="#72ee17">
                            </input_sub>

                        </div>
                        <div>
                            <span class="font-serif text-xm text-[10px] mb-0 underline decoration-dashed"> SL: </span>
                            <input_sub :value="'sl_price'" v-model="sl_price" @input="sl_price = $event.target.value"
                                accentColor="#e53621 ">
                            </input_sub>
                        </div>
                    </div>

                    <!-- Risk Range -->
                    <div class=" flex w-fit h-fit mt-3 justify-center">
                        <div class="flex flex-col w-52 ml-12 ">
                            <InputText v-model.number="risk" class="w-full mb-3 justify-center " />
                            <Slider v-model="risk" class="flex w-full justify-center" :min=0.2 :max=2 :step=0.1 />
                        </div>
                    </div>


                    <!-- Submit Button -->
                    <div class="flex my-3  justify-center">
                        <order_button_sub :buttonText="'Sumbit'" @click="submit" />

                        <div v-if="alert" class="flex">

                            <Alert :isWarning='isWarning' />

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
                    <p>Ticker : {{ this.Ticker }}</p>
                    <p>limit : {{ this.limit_price }}</p>
                    <p> type_pos : {{ this.type_pos }}</p>
                    <p>TP: {{ tp_price }}</p>
                    <p>SL: {{ sl_price }}</p>
                    <p>type: {{ type }}</p>
                    <p>Selected Interval: {{ risk }}</p>



                    <a class="btn btn-primary btn-sm " role="button" @click='Remove_cash()'>Link</a>

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
            type_pos: 'long',
            limit_price: null,
            sl_price: null,
            tp_price: null,
            type: 'limit',
            risk: null,
            value: 1,

            isWarning: null,
            isLong: true,
            alert_status: false,

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
                const response = await axios.get(`${import.meta.env.VITE_CRYPTO_LIST}`);

                this.cryptoList = response.data.data.map(crypto => ({
                    symbol: crypto.symbol,
                    ticker: crypto.ticker
                }));

                console.log("Getting data is compelete...")

            } catch (error) {

                console.error('Error fetching crypto list:', error);
            }
        },

        async Remove_cash() {

            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
        },

        async postLiveTrade() {
            try {

                const token = this.show_access();  // Get the access token

                // Prepare the data for the POST request based on your provided model
                const postData = {
                    "ticker": `${this.Ticker['symbol']}-USDT`.toUpperCase(),
                    "positionSide": this.type_pos,
                    "limitPrice": this.limit_price.toString(),
                    "slPrice": this.sl_price.toString(),
                    "tpPrice": this.tp_price.toString(),
                    "type": this.type.toUpperCase(),
                    "risk": this.risk.toString()
                };

                // Make the POST request to the / api / v1 / Crypto / endpoint
                const response = await axios.post(`${import.meta.env.VITE_TRADE}`, postData, {
                    headers: {
                        'Authorization': `Token  ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                // Handle the successful response
                this.successMessage = 'Live trade posted successfully!';
                console.log('Response:', response.data);

                this.alert = true;
                this.isWarning = false;


                setTimeout(() => {
                    this.alert = false;

                }, 10000);


            } catch (error) {
                // Handle any errors
                this.errorMessage = 'Failed to post live trade: ';

                // Check if the error has a response object with data
                if (error.response && error.response.data) {
                    this.errorMessage += error.response.data.error || 'Unknown error occurred';
                } else {
                    this.errorMessage += error.message;
                }


                this.alert = true;
                this.isWarning = true;

                setTimeout(() => {
                    this.alert = false;

                }, 2000);

                console.error(this.errorMessage);
                console.error(error); // Log the complete error for debugging
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

            const symbol = `BINANCE:${this.Ticker['symbol']}USDT.P`
            this.createChart(index, symbol, "1", "Dark");
        },
        toggleValue() {
            this.isLong = !this.isLong;

            if (this.isLong) {
                this.type_pos = 'long';
            } else {
                this.type_pos = 'short';
            }

            console.log(this.isLong)
            console.log(this.isLong ? 'LONG' : 'SHORT');
        },



        submit() {


            this.postLiveTrade()




        },
    },

    mounted() {



        this.get_ticker()
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