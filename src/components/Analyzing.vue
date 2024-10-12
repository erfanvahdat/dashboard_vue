<template>
    <div class="h-screen w-full border-1 border-blue-500">
        <ul>
            <li v-for="crypto in cryptoLists" :key="crypto">{{ crypto }}</li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            cryptoLists: [], // To store the crypto symbols
        }
    },
    methods: {
        async get_ticker() {
            try {
                // Fetch the data from the API
                const response = await axios.get(`${import.meta.env.VITE_CRYPTO_LIST}`);

                // Log the complete response
                console.log("Response received:", response);

                // Assign only the data array to cryptoLists
                this.cryptoLists = response;
                console.log("Getting data is complete...");
            } catch (error) {
                // Handle the error
                this.$toast.add({ severity: 'warn', summary: 'Rejected', detail: 'Crypto_list API error!', life: 3000 });
                console.error('Error fetching crypto list:', error);
            }
        },
    },
    mounted() {
        // Call the method when the component is mounted
        this.get_ticker();
    }
}
</script>
