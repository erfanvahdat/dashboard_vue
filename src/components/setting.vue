<template>


<!-- Trade_journal -->
    <button @click="get_ticker"
        class="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400">
        Register
    </button>

    <div>
        <h1>Crypto List</h1>



        <div class="card flex w-fit">
            <TreeSelect v-model="selectedValue" :options="sample" selectionMode="checkbox" placeholder="Select Item"
                class="md:w-80 w-full" />
        </div>




        <div class='flex  mt-[200px]'>

            <div>
                <p>the value is : {{ this.selectedValue }}</p>
                <p>Selected Timeframe: {{ timeframe }}</p>
                <p>Selected type: {{ type }}</p>
                <p>Selected Interval: {{ interval }}</p>

                <p>Selected profit_status: {{ profit_status }}</p>
            </div>

        </div>



    </div>


    <!-- <login_icon>    </login_icon>


    <button>hello</button> -->
</template>

<script>



import axios from 'axios';

export default {
    data() {
        return {
            select_ticker: null,


            cryptoList: [],
            timeframe: '',  // Holds the current timeframe

            selectedValue: null,
            type: null,
            interval: null,
            profit_status: null,


            sample: [
                {
                    key: 'timeframe_all',
                    label: 'TYPE',
                    data: 'TYPE',
                    icon: 'pi pi-bars',
                    children: [
                        { key: 'timeframe_short', label: 'SHORT', icon: 'pi pi-angle-down', data: 'Expenses Document' },
                        { key: 'timeframe_long', label: 'LONG', icon: 'pi pi-angle-up', data: 'Resume Document' }
                    ]
                },
                {
                    key: '1',
                    label: 'Interval',
                    data: 'Images Folder',
                    icon: 'pi pi-map',
                    children: [
                        { key: '1-Day', label: '1-Day', icon: 'pi pi-sort-numeric-up-alt', data: 'Vacation Image' },
                        { key: '7-Day', label: '7-Day', icon: 'pi pi-sort-numeric-up-alt', data: 'Vacation Image' },
                        { key: '30-Day', label: '30-Day', icon: 'pi pi-sort-numeric-up-alt', data: 'Vacation Image' },
                        { key: '3-Month', label: '3-Month', icon: 'pi pi-sort-numeric-up-alt', data: 'Vacation Image' },
                        { key: 'Last_Year', label: 'Last_Year', icon: 'pi pi-sort-numeric-up-alt', data: 'Vacation Image' },
                    ]
                },
                {
                    key: '2',
                    label: 'Profitability',
                    data: 'Videos Folder',
                    icon: 'pi pi-dollar',
                    children: [
                        { key: 'got_sl', label: 'Display_SL', icon: 'pi pi-times', data: 'Intro Video' },
                        { key: 'got_tp', label: 'Display_TP', icon: 'pi pi-check', data: 'Tutorial Video' }
                    ]
                }
            ]






        }
    },

    watch: {

        selectedValue(newValue) {



            //     if ((newValue['timeframe_short'] && newValue['timeframe_long'])) {
            //         this.type = "both";

            //     } else if (newValue['timeframe_short']) {
            //         this.type = "SHORT";
            //     }
            //     else if (newValue['timeframe_long']) {
            //         this.type = "LONG";
            //     }
            //     else {
            //         this.type = "both";
            //     }
            // },

            this.type = (newValue['timeframe_short'] && newValue['timeframe_long']) ? "both" :
                newValue['timeframe_short'] ? "SHORT" :
                    newValue['timeframe_long'] ? "LONG" :
                        "both";

            this.interval = (newValue['1-Day']) ? 1 :
                (newValue['7-Day']) ? 7 :
                    (newValue['30-Day']) ? 30 :
                        (newValue['3-Month']) ? 90 :
                            (newValue['Last_Year']) ? 365 :
                                null;


            this.profit_status = (newValue['got_tp'] && newValue['got_sl']) ? "both" :
                newValue['got_sl'] ? "display_sl" :
                    newValue['got_tp'] ? "display_tp" :
                        "both";


        }

    },


    methods: {

        setTimeframe(value) {
            this.timeframe = value;
        },
        async get_ticker() {
            try {
                const response = await axios.get('http://192.168.1.104:7000/api/v1/cryptoList/');

                // Assuming response.data.data is an array of objects like [{ symbol: 'BTC', ticker: 'Bitcoin' }, ...]
                this.cryptoList = response.data.data.map(crypto => ({
                    symbol: crypto.symbol, // Assign crypto.symbol to label
                    ticker: crypto.ticker   // Assign crypto.ticker to name
                }));

                console.log(this.cryptoList); // Log the mapped cryptoList

            } catch (error) {
                console.error('Error fetching crypto list:', error);
            }
        },


    },


}

</script>
