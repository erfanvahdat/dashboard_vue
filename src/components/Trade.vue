<template>
    <div class="h-full overflow-hidden bg-gray-700 x-full">
        <div class="flex flex-row p-2 space-y gap-2  ">

            <!-- Trade Section 1️⃣-->
            <div
                class="flex md:flex-row rounded-3 overflow-hidden gap-3  bg-gray-800 w-110 h-[460px]   w-[1150px] ml-2">

                <!-- input_limit_section -->
                <div class=" flex flex-col space-y-0 ml-2   ">
                    <span class="text-sm font-bold font-serif mt-2 ml-1">Limit_order</span>


                    <div class="card flex w-fit ml-2 mt-2">
                        <Select v-model="Ticker" :options="cryptoList" filter optionLabel="symbol"
                            @change="updateChart('chart')" placeholder="Select a Crypto" class="w-full md:w-72">

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
                        <button @click="toggleValue"
                            class="btn rounded-1 btn-sm w-36 my-2 hover:border-gray-200 hover:bg-gray-800 "
                            type="button" :class="[type_toggle]">
                            <span class='text-sm font-bold font-mono'>{{ isLong ? 'LONG' : 'SHORT' }}</span>
                        </button>
                    </div>
                    <div>

                    </div>

                    <!-- Limit_price -->
                    <div class="m-1 mb-3">
                        <span class="text-sm font-bold font-mono text-[10px] mb-0 underline decoration-dashed "> Limit:
                        </span>
                        <div>
                            <input_sub :value="limit_price" v-model="limit_price" placeholder="Enter limit price"
                                @input="limit_price = $event.target.value" accentColor="#FFFFFF"
                                @keyup.enter="confirm1($event)">
                            </input_sub>

                        </div>

                    </div>

                    <!-- TP and SL Fields -->
                    <div class="flex flex-row gap-2">
                        <div>
                            <span class="text-sm font-bold font-mono text-[10px] mb-0 underline decoration-dashed"> SL:
                            </span>
                            <input_sub :value="sl_price" v-model="sl_price" placeholder="Enter sl_price"
                                @input="sl_price = $event.target.value" accentColor="#FFFFFF"
                                @keyup.enter="confirm1($event)">
                            </input_sub>
                        </div>
                        <div>
                            <span class="text-sm font-bold font-mono text-[10px] mb-0 underline decoration-dashed	 ">
                                TP: </span>
                            <input_sub :value="tp_price" v-model="tp_price" placeholder="Enter tp_price"
                                @input="tp_price = $event.target.value" accentColor="#FFFFFF"
                                @keyup.enter="confirm1($event)">
                            </input_sub>

                        </div>

                    </div>

                    <!-- Risk Range -->

                    <span class="flex font-serif text-sm text-[10px] mb-0 underline decoration-dashed	mt-2  ml-14">
                        Risk: </span>
                    <div class=" flex w-fit h-fit mt-1 justify-center">
                        <div class="flex flex-col w-52 ml-12 ">
                            <InputText v-model.number="risk" class="w-full mb-3 justify-center " />
                            <Slider v-model="risk" class="flex w-full justify-center" :min=0.2 :max=2 :step=0.1 />
                        </div>
                    </div>

                    <!-- Submit Order -->
                    <Toast />
                    <ConfirmPopup></ConfirmPopup>

                    <div class="flex flex-wrap gap-2 justify-center mt-3">
                        <Toast />

                        <Button label="Submit" severity="info" @click="OpenTrade" />

                        <!-- <Button @click="confirm1($event)" label="Save" outlined
                            class='w-[200px] hover:bg-blue-500'></Button> -->
                    </div>

                </div>

                <!-- Chart section  1️⃣-->
                <div id="chart" class="p-2 w-full"></div>

            </div>

            <!-- Pending Section 2️⃣-->
            <div class="flex flex-col    h-[calc(100vh-150px    )]  w-[960px]  ml-2   ">

                <div class="card">
                    <DataTable :value="Trades" tableStyle="min-width: 50rem">

                        <Column field="symbol" header="Ticker"> <template #body="slotProps">
                                <span style="text-decoration: underline; text-decoration-style: dashed;">
                                    {{ slotProps.data.symbol }}
                                    {{ console.log(slotProps.data.symbol) }}

                                </span>
                            </template></Column>
                        <Column field="side" header="Position Side">
                            <template #body="slotProps">
                                {{ slotProps.data.side }}
                            </template>
                        </Column>

                        <Column field="orderId" header="ID">
                            <template #body="slotProps">
                                {{ slotProps.data.orderId }}
                            </template>
                        </Column>

                        <Column field="time" header="Time">
                            <template #body="slotProps">
                                {{ Time(slotProps.data.time).minutesPast }} minute ago

                            </template>
                        </Column>

                        <Column field="type" header="Status">
                            <template #body="slotProps">

                                <Tag :value="transformStatus(slotProps.data.type)"
                                    :severity="getStatusLabel(slotProps.data.type)" />
                                <!-- <Tag :value="slotProps.data.type" :severity="getStatusLabel(slotProps.data.type)" /> -->

                            </template>
                        </Column>

                        <Column field="" header="Close">
                            <template #body="slotProps">
                                <Button label="Submit"
                                    @click='RemoveTrade(slotProps.data.orderId, slotProps.data.symbol)'></Button>
                            </template>


                        </Column>
                    </DataTable>
                </div>

            </div>

        </div>


        <!-- Bottom Section=> orders table -->
        <div class="flex flex-col    h-[calc(100vh-150px)]     mr-5 ml-2  ">

            <div class=" w-full   mt-2 mx-2 ">
                <!-- Table with Pulse animation -->
                <table class="table rounded-lg border border-gray-300 overflow-hidden">

                    <thead>
                        <tr>
                            <th>Ticker</th>
                            <th>Position Side</th>
                            <th>Limit Price</th>
                            <th>Stop Loss Price</th>
                            <th>Take Profit Price</th>
                            <th>Type</th>
                            <th>Risk</th>

                        </tr>
                    </thead>
                    <tbody>

                        <tr v-if="trades.length === 0">
                            <td colspan="8" class="text-center">No trades available</td>
                            <!-- Message when no trades are found -->
                        </tr>

                        <tr v-else v-for="(trade, index) in trades" :key="index">
                            <td>{{ trade.ticker }}</td>
                            <td>{{ trade.positionSide }}</td>
                            <!-- Format numbers to 2 decimal places -->
                            <td>{{ formatNumber(trade.limitPrice) }}</td>
                            <td>{{ formatNumber(trade.slPrice) }}</td>
                            <td>{{ formatNumber(trade.tpPrice) }}</td>
                            <td>{{ trade.type }}</td>
                            <td>{{ formatNumber(trade.risk) }}</td>



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




                    <!-- <Toast position="bottom-right" group="br" />
                    <Button label="click here" @click="showBottomRight" /> -->



                    <!-- {{ this.trades }} -->
                    <div class="border-1 border-yellow-500 mt-2">
                        <!-- {{ this.trades[0][0] }} -->



                        <!-- <li v-for="(key, index) in getTradeKeys" :key="index">
                            {{ key }}
                        </li> -->

                        <!-- .liveTradesCrypto -->
                        <!-- <li v-for="(trade, index) in trades  " :key="index">
                            <p>Type: {{ trade.type }}</p>
                            <p>Symbol: {{ trade.symbol }}</p>
                            <p>Position Side: {{ trade.positionSide }}</p>
                            <p>Side: {{ trade.side }}</p>
                            <p>Order ID: {{ trade.orderId }}</p>
                            <p>Time: {{ trade.time }}</p>
                        </li> -->

                        <div>{{ Merging_data() }}</div>
                        <!-- <div>sl_id is here: {{ this.Trades["DOT-USDT"][''] }}</div> -->


                    </div>

                    <a class="btn btn-primary btn-sm mt-10 " role="button" @click='Remove_cash()'>Remove Access
                        token</a>

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
            risk: 1,
            value: 1,
            liveOrdersInterval: null, // Interval reference


            num_header: 8,
            isWarning: null,
            isLong: true,
            alert_status: false,
            turn_on: false,

            timeframe: '1',
            cryptoList: [],
            access: localStorage.getItem('access'),
            trades: [], // Array to hold trade data
            travis: [],
            limit_trae: [],
            errorMessage: null, // Error message to display
            objectKeys: [],
            alert: false,


            Trades: [],

            last_col: [
                { field: 'Delete', header: 'Submit' },

            ],
            columns: [
                { field: 'code', header: 'Code' },
                { field: 'name', header: 'Name' },
                { field: 'category', header: 'Category' },
                { field: 'quantity', header: 'Quantity' }
            ],




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

        };
    },



    methods: {

        confirm1(event) {
            this.$confirm.require({
                target: event.currentTarget,
                message: 'Are you sure you want to proceed?',
                icon: 'pi pi-exclamation-triangle',
                rejectProps: {
                    label: 'Cancel',
                    severity: 'secondary',
                    outlined: true
                },
                acceptProps: {
                    label: 'Save'
                },
                accept: () => {
                    this.OpenTrade();

                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                }
            });
        },
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

                this.$toast.add({ severity: 'warn', summary: 'Rejected', detail: 'Crypto_list API got error!', life: 3000 });

                console.error('Error fetching crypto list:', error);

            }
        },

        async Remove_cash() {

            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
        },

        async OpenTrade() {
            try {
                const token = this.show_access(); // Get the access token

                // Prepare the data for the POST request
                const postData = {
                    "symbol": `${this.Ticker['symbol']}-USDT`.toUpperCase(),
                    "positionSide": this.type_pos.toLowerCase(),
                    "limitPrice": this.limit_price.toString(),
                    "slPrice": this.sl_price.toString(),
                    "tpPrice": this.tp_price.toString(),
                    "type": this.type.toUpperCase(),
                    "risk": this.risk.toString(),
                };


                // Make the POST request to the API
                const response = await axios.post(`${import.meta.env.VITE_OPEN_TRADE}`, postData, {
                    headers: {
                        'Authorization': `Token ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                // Handle successful response (status 201)
                if (response.status == 201) {

                    this.$toast.add({
                        severity: 'success',
                        summary: 'Success',
                        detail: 'Live trade posted successfully!',
                        life: 3000
                    })
                }

            } catch (error) {
                // Handle error responses (e.g., 400 status or network issues)
                let errorMessage = 'Failed to post live trade: ';

                if (error.response && error.response.data) {
                    // errorMessage += error.response.data.error || 'Unknown error occurred';
                    errorMessage = error.response.data.limitPrice

                } else {
                    errorMessage += error.message;
                }

                this.$toast.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: errorMessage,
                    life: 5000
                });

                console.error(errorMessage);
            }
        },
        async Live_orders() {
            try {
                const token = this.show_access(); // Get the access token

                // Make the GET request to fetch the trade data
                const response = await axios.get(`${import.meta.env.VITE_TRADE_LIST}`, {
                    headers: {
                        'Authorization': `Token ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                // Store the fetched trades data into the trades array
                this.trades = response.data;



            } catch (error) {

                let errorMessage = 'Failed to fetch trades: ';

                this.Trades = null;

                if (error.response && error.response.data) {
                    errorMessage += error.response.data.error || 'Unknown error occurred';
                } else {
                    errorMessage += error.message;
                }
                console.error(errorMessage);
            }
        },
        async RemoveTrade(orderid, symbol) {
            try {

                const token = this.show_access(); // Get the access token


                const postData = {
                    "orderid": orderid.toString(),
                    'symbol': symbol.toString(),
                };

                // const postData = {
                //     "orderId": "1841114423704424400",
                //     "symbol": "DOT-USDT"
                // };

                // Make the GET request to fetch the trade data
                const response = await axios.post(`${import.meta.env.VITE_DELETE_TRADE}`, postData, {
                    headers: {
                        'Authorization': `Token ${token}`,
                        'Content-Type': 'application/json'
                    }
                });



                // Handle successful response (status 201)
                // if (response.status == 200) {

                this.$toast.add({
                    severity: 'success',
                    summary: 'Success',
                    detail: `Trade order is cancel with Ticker: ${symbol}!`,
                    life: 3000
                })
                // }

            } catch (error) {
                let errorMessage = 'Failed to fetch trades: ';

                console.log(error.response.status)
                if (error.response && error.response.data) {
                    errorMessage += error.response.data.error || 'Unknown error occurred';
                } else {
                    errorMessage += error.message;
                }

                this.$toast.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: errorMessage,
                    life: 3000
                });

                console.error(errorMessage);
            }
        },



        createChart(containerId, symbol, timeframe = "1", theme = "Dark") {
            new TradingView.widget({
                "autosize": true,
                "symbol": symbol,
                "interval": timeframe,
                "toolbar_bg": "#E9DCC9",
                "timezone": "Asia/Tehran",
                "theme": theme,
                "style": "1",
                "locale": "en",
                "gridColor": "rgba(0, 0, 0, 0.06)",
                "withdateranges": true,
                "toolbar_bg": "#f1f3f6",
                "enable_publishing": false,
                "hide_top_toolbar": true,
                "hide_side_toolbar": false,
                "allow_symbol_change": true,
                "hideideas": false,
                "save_image": false,
                "calendar": true,

                "studies": ['IchimokuCloud@tv-basicstudies',],
                "container_id": containerId,

                studies_overrides: {
                    "paneProperties.background": "#ffffff",
                    "allow_symbol_change": "true",
                    "ichimoku cloud.base line periods": 30,
                    "ichimoku cloud.conversion line periods": 20,
                    "ichimoku cloud.leading span a line.color": "#FFFFF0",
                    "ichimoku cloud.lagging span.display": 0,
                },

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
        },


        submit() {
            this.OpenTrade()
        },
        formatNumber(value) {
            if (!isNaN(value)) {
                return parseFloat(value).toFixed(2);
            }
            return value; // Return the original value if it's not a number
        },

        Time(date) {
            const currentTime = Date.now();

            // Calculate the difference in milliseconds
            const timeDifference = currentTime - date;

            // Convert the time difference to hours and minutes
            const hoursPast = Math.floor(timeDifference / (1000 * 60 * 60));
            const minutesPast = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

            return { hoursPast, minutesPast };

        },
        showBottomRight() {
            this.$toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', group: 'br', life: 3000 });
        },

        getStatusLabel(status) {
            switch (status) {
                case 'LIMIT':
                    return 'warn';
                case 'TAKE_PROFIT_MARKET':
                    return 'info';
                default:
                    return null;
            }
        },
        getStatusLabel(type) {

            if (type == 'LIMIT') {
                return 'warn';
            } else if (type == 'TAKE_PROFIT_MARKET') {
                return 'success';
            }
            return 'null';
        },
        transformStatus(type) {
            if (type == 'LIMIT') {
                return 'Pending';
            } else if (type == 'TAKE_PROFIT_MARKET') {
                return 'Live';
            }
            return type;
        },


        Merging_data() {


            const data = this.trades; // Assume this.trades contains the input data

            // An object to consolidate orders by symbol
            const consolidatedTrades = {};

            data.forEach(item => {
                const symbol = item.symbol;

                // If the symbol doesn't exist, initialize it in consolidatedTrades
                if (!consolidatedTrades[symbol]) {
                    consolidatedTrades[symbol] = {
                        symbol: symbol,
                        side: item.side,
                        order_id_sl: null,
                        order_id_tp: null,
                        type: item.type
                    };
                }

                // Assign STOP_MARKET or TAKE_PROFIT_MARKET based on the order type
                if (item.type === "STOP_MARKET") {
                    consolidatedTrades[symbol]["order_id_sl"] = item.orderId.toString();
                }
                if (item.type === "TAKE_PROFIT_MARKET") {
                    consolidatedTrades[symbol]["order_id_tp"] = item.orderId.toString();
                }

                // Store other necessary details like side, symbol, etc.
                consolidatedTrades[symbol]["side"] = item.side;
                consolidatedTrades[symbol]["time"] = item.time;
            });

            // Convert consolidatedTrades from an object back to an array
            this.Trades = Object.values(consolidatedTrades);
            return this.Trades;
        }

    },

    mounted() {

        this.Merging_data()
        this.get_ticker() // get the ticker_list
        this.Live_orders() // get current live position

        // Set an interval to call Live_orders every X milliseconds (e.g., every 5 seconds)
        // this.liveOrdersInterval = setInterval(() => {
        //     this.Live_orders();
        // }, 5000); // 5000 ms = 5 seconds

        // Load a default ticker when the component is mounted
        const default_ticker = "BINGX:BTCUSDT.P" // Set default ticker
        this.createChart("chart", default_ticker, "1", "Dark");
    },

    beforeUnmount() {
        // Clear the interval when the component is destroyed to prevent memory leaks
        if (this.liveOrdersInterval) {
            clearInterval(this.liveOrdersInterval);
        }
    },

    computed: {

        //     getTradeKeys() {
        //   // Returns an array of keys in the trades object
        //   return Object.keys(this.trades);
        // },
        type_toggle() {
            return this.isLong ? 'bg-green-500' : 'bg-red-500';
        },

    }
};
</script>