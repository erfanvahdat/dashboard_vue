<template>
    <div>
        <!-- <h1>Text Input Example</h1> -->
        aaa {{ this.trade }}
    </div>
</template>

<script>

import axios from 'axios';

export default {

    data() {
        return {
            limit_price: ''  // Initial value for the input
        };
    },


    methods: {
        async get_api() {

            // const url = "http://localhost:3005/api/all_pending_orders"
            const url = (import.meta.env.VITE_ALL_PENDING_ORDER)
            console.log(url)
            const response = await axios.get(import.meta.env.VITE_ALL_PENDING_ORDER)

            const resposne_filter = await response['data'].data;
            this.trade = resposne_filter

            console.log("data ", response.data.data)
        }

    },


    mounted() {
        this.get_api()

    }
};
</script>

<style scoped>
h1 {
    color: #333;
}
</style>