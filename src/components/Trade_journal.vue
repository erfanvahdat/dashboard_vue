<template>
    <div class="bg-gray-700 h-screen overflow-hidden">
        <!-- Control Section -->
        <div class="flex bg-gray-800 m-2 h-[100px] p-2 rounded-3">
            <div class="flex flex-row">
                <div>
                    <span class="font-bold text-sm font-serif text-blue-600">control_section</span>
                </div>
                <div class="card flex h-fit mt-3 ml-2">
                    <Select v-model="type_select" :options="type_opt" optionLabel="type" placeholder="Select A Type?"
                        class="h-fit text-black" />
                </div>
            </div>
        </div>

        <!-- Scrollable Section -->
        <div class="overflow-y-auto h-[calc(100vh-150px)] m-2">

            <div class="grid grid-col gap-2" v-for="(item, index) in data_api" :key="index">
                <div class="flex flex-col border-1 border-blue-500 gap-2 w-full p-3">
                    <div>
                        <Badge value="" size="small" severity="contrast">Ticker</Badge>
                        {{ item.Ticker }}
                    </div>
                    <div>
                        <Badge value="" size="small" severity="warn">Type</Badge>
                        {{ item.Type }}
                    </div>
                    <div>
                        <Badge value="" size="small" severity="success">Market</Badge>
                        {{ item.Market }}
                    </div>
             
                    <!-- Add more data as needed -->
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {

    data() {

        return {
            data_api: [
                { Img: 'img', Type: 'short', Profit: '1', Ticker: 'SAND', Market: 'NY', Reason: 'why not', },
                { Img: 'img', Type: 'long', Profit: '5', Ticker: 'SAND', Market: 'NY', Reason: 'why not', },
                { Img: 'img', Type: 'long', Profit: '0.2', Ticker: 'SAND', Market: 'tk', Reason: 'why not', }

            ],

            type_select: null,

            type_opt: [
                { type: 'LONG', code: 'long' },
                { type: 'SHORT', code: 'sohrt' },

            ]
        }
    },
    methods: {

    },


}
</script>
