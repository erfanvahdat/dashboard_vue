<template>


    <button @click="get_ticker"
        class="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400">
        Register
    </button>

    <div>
        <h1>Crypto List</h1>

        <!-- <ul>
            <li v-for="crypto in cryptoList" :key="crypto.ticker">
                {{ crypto.symbol }} - {{ crypto.ticker }}
            </li>
        </ul> -->



        <!-- {{ this.cryptoList }} -->

        <!-- <div class="card flex w-fit">
            <Select v-model="select_ticker" :options="cryptoList" optionLabel="symbol"
                placeholder="Select a City" class="w-full md:w-56" />
        </div> -->

        <div class="card flex w-fit ml-2 mt-2">
            <Select v-model="select_ticker" :options="cryptoList" filter optionLabel="ticker"
                placeholder="Select a Crypto" class="w-full md:w-56">
                <!-- Template for selected value -->
                <template #value="slotProps">
                    <div v-if="slotProps.value" class="flex items-center">
                        <!-- <img :alt="slotProps.value.ticker"
                            src="../assets/reshot-icon-unicorn-XDCHJTKVNP.svg"
                            :class="`mr-2 flag flag-${slotProps.value.symbol.toLowerCase()}`" /> -->
                        <div>{{ slotProps.value.ticker }}</div> <!-- Display ticker -->
                    </div>
                    <span v-else>
                        {{ slotProps.placeholder }}
                    </span>
                </template>

                <!-- Template for options in the dropdown -->
                <template #option="slotProps">
                    <div class="flex items-center">
                        <img :alt="slotProps.option.ticker"
                            src="../assets/vue.svg"
                            :class="`mr-2 flag flag-${slotProps.option.symbol.toLowerCase()}`" />
                        <div>{{ slotProps.option.ticker }}</div> <!-- Display ticker -->
                    </div>
                </template>
            </Select>
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
        };
    },
    methods: {
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
        }
    },
    // created() {
    //     this.fetchCryptoList();
    // },
};
</script>

<style scoped>
/* Add any relevant styles here */
</style>