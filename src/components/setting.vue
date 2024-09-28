<template>


    <!-- Trade_journal -->
    <button @click="get_ticker"
        class="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400">
        Register
    </button>



    <!-- <div class="card flex w-fit h-fit">
        <div class="w-56">
            <InputText v-model.number="value" class="w-full mb-4" />
            <Slider v-model="value" class="w-full" :min=2 :max=5  :step=0.2/>
        </div>
    </div> -->

    <div :class="alertClass" class="max-w-sm w-fit shadow-lg rounded relative border-l-4 text-white ml-2">
        <div class="p-2 justify-start ml-0">
            <div class="flex">
                <div class="w-full flex-1 pt-0.5">
                    <p class="text-sm leading-5 font-medium font-serif ">
                        {{ isWarning ? 'Trade was not send! ❌' : 'Limit is send 👍' }}
                    </p>
                </div>
                
                <div class="ml-36 flex-shrink-0 flex justify-start">
                    <button class="inline-flex text-white transition ease-in-out duration-150" @click="closeAlert">
                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
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
            rangeValue: 50, // Initialize with a default value

            select_ticker: null,

            value: 50,


            cryptoList: [],
            timeframe: '',  // Holds the current timeframe

            selectedValue: null,
            type: null,
            interval: null,
            profit_status: null,

            gggValue: import.meta.env.VITE_var,


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
    props: {
        isWarning: {
            type: Boolean,
            default: true
        },
        accentColor: {
            type: String,
            default: ''
        }
    },

    watch: {

        selectedValue(newValue) {

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

    computed: {
        alertClass() {
            return this.isWarning

                ? 'bg-red-400 border-red-700' : "bg-green-400 border-green-700";
        }
    },
    methods: {
        closeAlert() {
            this.$emit('close');
        },
        updateValue(event) {
            this.rangeValue = event.target.value; // Update the value manually (optional with v-model)
        },


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
