<template>


    <button @click="get_ticker"
        class="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400">
        Register
    </button>

    <div>
        <h1>Crypto List</h1>
        <ul>
            <li v-for="crypto in cryptoList" :key="crypto.ticker">
                {{ crypto.symbol }} - {{ crypto.ticker }}
            </li>
        </ul>
    </div>


    <login_icon>    </login_icon>


    <button>hello</button>
</template>

<script>

import axios from 'axios';

export default {
    data() {
        return {
            cryptoList: [],
        };
    },
    methods: {
        async get_ticker() {
            try {
                const response = await axios.get('http://169.254.153.105:7000/api/v1/cryptoList/');
                // Assuming the data you want is in response.data.data
                this.cryptoList = response.data.data; // Access the data array
            } catch (error) {
                console.error('Error fetching crypto list:', error);
            }
        },
    },
    // created() {
    //     this.fetchCryptoList();
    // },
};
</script>

<style scoped>
/* Add any relevant styles here */
</style>