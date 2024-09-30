<template>
    <div clas=' h-screen w-full border-1 border-blue-500'>



        {{ this.trades }}

    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            trades: [],
        }
    },
    methods: {
        async Live_orders() {
            try {

                // const token = localStorage.getItem('access');
                const  token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI3NzI0MjgyLCJpYXQiOjE3Mjc3MDYyODIsImp0aSI6ImYwMTFlZmIxOTM5MTQ3MWFiZDllMTlmYjgwNzVjOWUzIiwidXNlcl9pZCI6NH0.zydXK9p-xtY9LGezs3nrsGYtppQji9LHy2S6PlJmotc"


                // Make the GET request to fetch the trade data
                const response = await axios.get("http://192.168.1.104:7000/api/v1/liveTrade/", {
                    headers: {
                        'Authorization': `Token ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                // Store the fetched trades data into the trades array
                this.trades = response.data;



            } catch (error) {
                let errorMessage = 'Failed to fetch trades: ';

                if (error.response && error.response.data) {
                    errorMessage += error.response.data.error || 'Unknown error occurred';
                } else {
                    errorMessage += error.message;
                }

                // this.$toast.add({
                //     severity: 'error',
                //     summary: 'Error',
                //     detail: errorMessage,
                //     life: 3000
                // });

                console.error(errorMessage);
            }
        },
    },

    mounted() {

        this.Live_orders()



    }
}
</script>