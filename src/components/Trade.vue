<template>
    <div class="h-100vh  bg-gray-700  overflow-auto ">
        <div class="flex flex-row p-2 space-y gap-2  ">

            <!-- Trade Section 1️⃣-->
            <div class="flex md:flex-row rounded-3  gap-3  bg-gray-800 w-110 h-[460px]  ml-2 w-3/5">

                <!-- input_limit_section -->
                <div class=" flex flex-col space-y-0 ml-2   ">
                    <span class="text-sm font-bold font-serif mt-2 ml-1">Limit_order</span>

                    <!-- Selecting TIcker -->
                    <div class="card flex w-fit ml-2 mt-2">
                        <Select v-model="Ticker" :options="cryptoList" filter optionLabel="symbol"
                            @change="updateChart('chart')" placeholder="Select a Crypto" class=" md:w-72">

                            <template #value="slotProps">
                                <div v-if="slotProps.value" class="flex items-center">
                                    <div>{{ slotProps.value.symbol }}</div>
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
                            <span class="text-sm font-bold font-mono text-[10px] mb-0 underline decoration-dashed">
                                TP:
                            </span>
                            <input_sub v-model="tp_price" placeholder="Enter tp_price" accentColor="#FFFFFF"
                                @input="tp_price = $event.target.value" @keyup.enter="confirm1($event)">
                            </input_sub>
                        </div>

                    </div>

                    <!-- Risk Range -->
                    <span class="flex font-serif text-sm text-[10px] mb-0 underline decoration-dashed	mt-2  ml-14">
                        Risk: </span>
                    <div class=" flex w-fit h-fit mt-1 justify-center">
                        <div class="flex flex-col w-52 ml-12 ">
                            <InputText v-model.number="risk" class=" mb-3 justify-center " />
                            <Slider v-model="risk" class="flex  justify-center" :min=0.2 :max=2 :step=0.1 />
                        </div>
                    </div>

                    <!-- Submit open_trades -->
                    <div class="flex flex-wrap gap-2 justify-center mt-3">

                        <Toast></Toast>
                        <Button label="Open Trade" severity="info" @click="OpenTrade" />

                    </div>

                </div>

                <!-- Chart section  1️⃣_0️⃣-->
                <div id="chart" class="p-2 w-full"></div>

            </div>

            <!-- Pending Section 2️⃣-->
            <div class="flex flex-col    h-[calc(100vh-150px )]  ml-2   w-fit ">

                <div class="card">
                    <DataTable :value="full_order" tableStyle="min-width: 50rem">

                        <Column field="symbol" header="Ticker"> <template #body="slotProps">
                                <span style="text-decoration: underline; text-decoration-style: dashed;">
                                    {{ slotProps.data.symbol }}
                                </span>
                            </template></Column>

                        <Column field="orderId" header="ID">
                            <template #body="slotProps">
                                {{ slotProps.data.order_id }}
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
                            </template>
                        </Column>

                        <Column field="" header="Close">
                            <template #body="slotProps">
                                <Toast></Toast>
                                <Button label="Close order/position" severity="warn"
                                    @click='RemoveTrade(slotProps.data.order_id, slotProps.data.symbol, this.STATUS[slotProps.data.symbol])'></Button>
                            </template>
                        </Column>
                    </DataTable>
                </div>
            </div>

        </div>

        <!-- Bottom Section=> Trade_history -->
        <div class="flex flex-col    h-[calc(100vh-150px)]   ml-2   mr-4 ">

            <div class="card">
                <DataTable :value="trade_history" paginator :rows="10" :rowsPerPageOptions="[5, 10, 20, 50]"
                    tableStyle="min-width: 50rem">
                    <Column field="symbol" header="SYMBOL" style="width: 25%"></Column>
                    <Column field="side" header="TYPE" style="width: 25%"></Column>
                    <Column field="profit" header="PROFIT" style="width: 25%">
                        <template #body="slotProps">
                            <Tag :value="slotProps.data.profit" :severity="profit_label(slotProps.data.profit)" />
                        </template>
                    </Column>
                    <Column field="time" header="DAY" style="width: 25%">
                        <template #body="slotProps">
                            <!-- Call the modified get_time method to display weekday (e.g., Mon, Sat, etc.) -->
                            {{ get_day_of_week(slotProps.data.time) }}
                        </template>
                    </Column>
                </DataTable>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
import chalk from 'chalk';
export default {


    data() {
        return {

            Ticker: null,
            type_pos: 'LONG',
            limit_price: null,
            sl_price: null,
            tp_price: null,

            trade_history: [],
            pending_order: [],
            position_order: [],
            open_position: [],
            full_order: [],
            STATUS: {},

            risk: 1,
            value: 1,

            isLong: true,

            timeframe: '1',
            cryptoList: [],
            access: localStorage.getItem('access'),
            trades: [], // Array to hold trade data

            errorMessage: null, // Error message to display
            Trades: [],
            last_col: [
                { field: 'Delete', header: 'Submit' },
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

        async get_ticker() {
            try {

                // Fetch the data from the API
                const response = await axios.post(`${import.meta.env.VITE_CRYPTO_LIST}`);

                // console.log("Data from DB:", response.data.data);
                // Use map to extract the 'symbol' from each item in response data
                this.cryptoList = response.data.data.map(item => ({ symbol: item.symbol }));
                console.log("Getting data is complete...");

            } catch (error) {
                this.$toast.add({ severity: 'warn', summary: 'Rejected', detail: 'Crypto_list API error!', life: 3000 });
                console.error('Error fetching crypto list:', error);
            }
        },

        // async Remove_cash() {
        //     localStorage.removeItem('access');
        //     localStorage.removeItem('refresh ');
        // },

        async OpenTrade() {
            try {
                // Prepare the data for the POST request
                const open_trade_params = {
                    "symbol": `${this.Ticker.symbol}`.toUpperCase(),
                    "type": this.type_pos.toUpperCase(),
                    "risk": parseFloat(this.risk),
                    "limitprice": parseFloat(this.limit_price),
                    "slprice": parseFloat(this.sl_price),
                    "tpprice": parseFloat(this.tp_price),
                    "market": "trigger",
                };

                // Make the POST request to open_trade
                const response = await axios.post(`${import.meta.env.VITE_OPEN_TRADE}`, open_trade_params);


                // console.log(repsonse)
                // Trade status
                const status = response.status;

                // parse the opening trade response
                const parse_res = JSON.parse(response.data.data);
                const order = parse_res.data.order;

                const symbol = order.symbol;

                const stop_loss = open_trade_params.slprice;
                const take_profit = open_trade_params.tpprice;


                // meta dara params
                const meta_data_trade = {
                    "symbol": symbol,
                    "stop_loss": stop_loss,
                    "take_profit": take_profit,
                    "limitprice": order.price,
                    "quantity": order.quantity,
                    "side": order.side,
                }


                // Querry params
                const find_user_params_d = { "symbol": open_trade_params.symbol };

                // Delete meta data before saving it
                const del_symbol = await axios.delete(`${import.meta.env.VITE_DELETE_SYMBOL}`, {
                    params: find_user_params_d
                });
                // Saving meta data of trade in DB
                const trade_meta_data_response = await axios.post(`${import.meta.env.VITE_STATUS_TRADE}`, meta_data_trade, {
                });

                // Handle successful response (status 201)
                if (status == 201) {

                    this.$toast.add({
                        severity: 'success',
                        summary: 'Success',
                        detail: 'Live trade posted successfully!',
                        life: 3000
                    })
                }

            } catch (error) {
                this.$toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 });
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
        async RemoveTrade(orderid, symbol, pending_status) {
            try {

                console.log(orderid, pending_status)
                const params = {
                    orderId: orderid,

                };

                // Remove Pending/position orders
                if (pending_status == true) {
                    const response = await axios.delete(import.meta.env.VITE_CLOSE_PENDING_ORDER, { data: params });
                }
                else if (pending_status == false) {
                    const response = await axios.delete(import.meta.env.VITE_CLOSE_POSITION_ORDER, { data: params });
                }

                console.log(response.status)
                // Handle successful response (status 201)
                if (response.status == 200) {

                    this.$toast.add({
                        severity: 'success',
                        summary: 'Success',
                        detail: `Trade order is cancel with Ticker: ${symbol}!`,
                        life: 3000
                    })
                }

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

        async Trade_status() {
            try {
                // Make the GET request to fetch the trade data
                const response_pending = await axios.get(import.meta.env.VITE_ALL_PENDING_ORDER)
                const response_position = await axios.get(import.meta.env.VITE_ALL_OPEN_POSITION)

                // Extract responsive data
                const pending_response = await response_pending['data'].data;
                const position_response = await response_position['data'].data;

                let All_Order = pending_response.concat(position_response);

                // this.full_order = All_Order;
                this.open_position = await position_response;
                this.pending_order = await pending_response;


                let Trade_dict = {};

                // Get the unique symbols from the orders
                const uniqueSymbols = [...new Set(All_Order.map(order => order.symbol))];

                // Iterate over each unique symbol
                uniqueSymbols.forEach(async symbol => {

                    // Filter the orders for the current symbol
                    const Order_filter = All_Order.filter(element => element.symbol === symbol);

                    // Check if there's an object with type 'TAKE_PROFIT_MARKET'
                    const takeProfitMarket = pending_response.find(item => item.type === 'TAKE_PROFIT_MARKET');

                    // Check if there's an object with type 'STOP_MARKET'
                    const stopMarket = pending_response.find(item => item.type === 'STOP_MARKET');

                    // Trigger Conditon
                    const cond = pending_response.find(item => item.type == "TRIGGER_MARKET" || item.type == "TRIGGER_LIMIT")

                    if (cond) {
                        console.log(`conditon for ${symbol}`)
                    } else {

                        if (!takeProfitMarket) {
                            console.log(chalk.green(`Tp is not not set for ${symbol}. try to send it into BINGX`))
                            const set_tp_params = { symbol: symbol, status: "TP" };
                            const set_tp = await axios.post(import.meta.env.VITE_SET_SL_TP, set_tp_params);
                            console.log('Set_tp is here', set_tp.data.code)

                            if (set_tp.data.code == 'GREEN') {
                                this.$toast.add({
                                    severity: 'success',
                                    summary: 'Success',
                                    detail: set_tp.data.msg,
                                    life: 5000
                                })
                            }
                            else {
                                this.$toast.add({
                                    severity: 'danger',
                                    summary: 'danger',
                                    detail: set_tp.data.msg,
                                    life: 5000
                                })
                            }

                        }
                        if (!stopMarket) {
                            console.log(chalk.red(`SL for ${symbol} does not exist!`))
                            const set_sl_params = { symbol: symbol, status: "SL" };
                            const set_sl = await axios.post(import.meta.env.VITE_SET_SL_TP, set_sl_params);
                            console.log("code is here", set_sl)

                            if (set_sl.code == 'GREEN') {
                                this.$toast.add({
                                    severity: 'success',
                                    summary: 'Success',
                                    detail: set_sl.data.msg,
                                    life: 5000
                                })
                            }
                            else {
                                this.$toast.add({
                                    severity: 'danger',
                                    summary: 'danger',
                                    detail: set_sl.data.msg,
                                    life: 5000
                                })
                            }
                            // console.log(chalk.bgRedBright(set_sl.data))
                        }
                    }

                    let ID = null;
                    let time = null;
                    let type = null;

                    Order_filter.forEach(order => {
                        // Check if the order is of the types you're interested in and extract the values
                        if (order.type === "TRIGGER_MARKET" || order.type === "TRIGGER_LIMIT" || order.type === "TAKE_PROFIT_MARKET" || order.type === "STOP_MARKET") {
                            ID = order.orderId;
                            time = order.time;
                            type = order.type;
                            this.STATUS[symbol] = true;
                        } else {
                            // Handle other order types
                            ID = order.positionId;  // If it's a position, use positionId instead
                            time = order.updateTime;
                            type = "TAKE_PROFIT_MARKET";
                            this.STATUS[symbol] = false;
                        }
                    });

                    // Store the extracted data into Trade_dict
                    Trade_dict[symbol] = {
                        symbol: symbol,
                        order_id: ID,
                        time: time,
                        type: type
                    };
                });

                // Asign the trade values to display it with tables
                this.full_order = Trade_dict;

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

            let Ticker = this.Ticker['symbol'].split("-")[0]
            const symbol = `BINANCE:${Ticker}USDT.P`
            this.createChart(index, symbol, "1", "Dark");
        },
        toggleValue() {
            this.isLong = !this.isLong;
            if (this.isLong) {
                this.type_pos = 'LONG';
            } else {
                this.type_pos = 'SHORT';
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

        side_status(type) {

            if (type == 'SHORT' || type == 'SELL') {

                return 'warn';
            } else {
                return 'success';
            }

        },

        getStatusLabel(type) {
            if (type == 'LIMIT' || type == 'TRIGGER_MARKET') {
                return 'warn';
            } else if (type == 'TAKE_PROFIT_MARKET') {
                return 'success';
            }
            return 'null';
        },
        transformStatus(type) {
            if (type == "LIMIT" || type == "TRIGGER_MARKET") {
                return 'Pending';
            }
            else if (type == 'TAKE_PROFIT_MARKET') {
                return 'Open';

            }
            else if (type == 'STOP_MARKET') {
                return 'Open';

            }
            return type;
        },

        profit_label(value) {
            const profit = parseFloat(value);
            return profit > 0 ? 'success' : "danger";
            // if (profit > 0) return 'success'
            // else return 'danger'
        },

        get_time(time) {

            const time_it = time.toUTCString();
            return time_it
        },

        async get_trade_history() {
            console.log("we are here!")
            const res = await axios.get(import.meta.env.VITE_TRADE_HISTORY_ALL);

            console.log("res is here",res)
            this.trade_history = res.data;

            return res;

        },
        get_day_of_week(timestamp) {
            const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            const date = new Date(timestamp); // Convert timestamp to date
            const day = date.getUTCDay();
            return daysOfWeek[day];
        },


    },

    mounted() {

        this.get_ticker() // get the ticker_list
        this.Trade_status();  // Get current Live orders

        this.get_trade_history();

        setInterval(() => {

            // Get current Live orders
            // this.Trade_status();

        }, 10000);

        // Load a default ticker when the component is mounted
        const default_ticker = "BINGX:BTCUSDT.P" // Set default ticker
        this.createChart("chart", default_ticker, "1", "Dark");
    },

    computed: {
        type_toggle() {
            return this.isLong ? 'bg-green-500' : 'bg-red-500';
        },


    },
};
</script>