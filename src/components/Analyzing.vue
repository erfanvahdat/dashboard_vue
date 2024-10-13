<template>
    <div>
        <h1>Text Input Example</h1>

        <!-- Using the input_sub component -->
        <div>
            <input_sub :value="limit_price" v-model="limit_price" placeholder="Enter limit price"
                @input="limit_price = $event.target.value" accentColor="#FFFFFF">
            </input_sub>

        </div>


        <!-- Display the current value -->
        <p>Current input value: {{ limit_price }}</p>
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
            console.log(import.meta.env.VITE_ALL_PENDING_ORDER)

            const response = await axios.get(`${import.meta.env.VITE_ALL_PENDING_ORDER}`, {

            })
            console.log(response.data)
        }

    },


    mounted() {
       this.get_api()
       this.$toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 });
    }
};
</script>

<style scoped>
h1 {
    color: #333;
}
</style>