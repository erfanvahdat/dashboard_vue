<template>
    <div class="flex bg-gray-500 w-fit p-2 rounded-2 ">

        <apexchart type="line" height="400" width="700" :options="Slope_option" :series="series"></apexchart>
    </div>
</template>

<script>

import axios from "axios";

export default {

    data() {
        return {
            series: [], // Series will be populated with processed trade history data\

            Slope_option: {
                chart: {
                    height: 400,
                    width: 700,
                    type: "line",
                    background: "rgb(55 65 81)",

                    toolbar: {
                        show: true,
                    },
                    zoom: {
                        enabled: true,
                    },
                    animations: {
                        enabled: true,
                        easing: "easeinout",
                        speed: 9000,
                    },
                },

                grid: {
                    show: false,
                },
                stroke: {
                    width: 3,
                    curve: "smooth",
                },
                markers: {
                    size: 6,
                    hover: {
                        size: 8,
                    },
                },

                tooltip: {
                    theme: "dark",
                    x: {
                        format: "dd MMM HH:mm",
                    },
                },

                dataLabels: {
                    enabled: false,

                },
                yaxis: {
                    labels: {
                        formatter: function (val) {
                            // Custom logic for formatting the y-axis values
                            return val.toFixed(2);
                        },
                        style: {
                            colors: ['#fff'],
                            fontSize: '12px',
                        }
                    },
                    title: {
                        text: 'Profit/Loss',  // Customize the y-axis title
                        style: {
                            color: '#fff', // Change the color of the title
                        }
                    }
                },
                xaxis: {
                    type: 'datetime',
                    title: {
                        text: 'Date',
                        style: {
                            color: '#FFFFFF',
                        },
                    },
                    labels: {
                        style: {
                            colors: '#fff',
                            fontSize: '13px',
                        },

                    },
                },

                legend: {
                    show: true,
                    position: "top",
                    horizontalAlign: "center",
                    fontSize: "14px",
                    labels: {
                        colors: "#ffffff",
                    },
                },

            },
        };
    },
    methods: {
      
    },
    mounted() {
        this.fetchTradeHistory();
    },
};
</script>

<style scoped>
#app {
    margin: 20px;
}

/* .apexcharts-tooltip {
    background-color: #333;
} */
</style>