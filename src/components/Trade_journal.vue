<template>
    <div class=" border-1 rounded border-gray-800 bg-gray-800 w-fit p-2 m-2">
        <div class="flex mt-2 ml-2 w-full">
            <Select v-model="symbol" editable :options="Symbols" optionLabel="name" placeholder="Ticker"
                class="w-full md:w-56" />
        </div>
        <div class="flex mt-2 ml-2">
            <Select v-model="type" editable :options="Types" optionLabel="name" placeholder="Type?"
                class="w-full md:w-56" />
        </div>
        <!-- time -->
        <div class="w-fit">
            <label for="datepicker-12h" class="font-bold ml-2"> 12h Format </label>
            <DatePicker id="datepicker-12h" v-model="time" showTime hourFormat="12" fluid class="ml-2" />
        </div>

        <div class="flex mt-2 ml-2">
            <Select v-model="result" editable :options="Results" optionLabel="name" placeholder="Result"
                class="w-full md:w-56" />
        </div>
        <div class="flex mt-2 ml-2 mb-2">
            <Select v-model="market" editable :options="Markets" optionLabel="name" placeholder="Market"
                class="w-full md:w-56" />
        </div>

        <div class="card flex justify-start w-fit mb-2 ml-2 mt-4">
            <FloatLabel>
                <div class="card flex justify-center">
                    <Textarea v-model="description" rows="5" cols="30" />
                </div>
                <label for="over_label">Reason to Enter? </label>
            </FloatLabel>
        </div>

        <div class="w-fit ml-2 ">
            <Toast />
        
            <FileUpload name="demo[]" url="http://localhost:3005/api/upload" @upload = null :multiple="true" accept="image/*" :maxFileSize="100000000">

            <template #empty>
                <span>Drag and drop files to here to upload.</span>
            </template>
        </FileUpload>
        </div>

        <!-- Submit Button -->
        <div class="flex justify-center mt-4">
            <button class="p-2 bg-blue-500 text-white rounded" @click="submitJournalEntry">
                Submit Entry
            </button>
        </div>


    </div>
    <div class=" flex ml-2 ">

        market is {{ this.symbol }}
        images {{this.image}}
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            
            symbol: "DOT",
            type: "LONG",
            time: null,
            result: "TP",
            description: "sss",
            market: null,
            image: null,
        
            Symbols: [
                { name: "DOT" },
                { name: "SAND" },
                { name: "ALT" },
                { name: "GALA" },
                { name: "ETH" },
                { name: "BTC" },
                { name: "FIL" },
                { name: "LTC" },
                { name: "BNB" },
                { name: "FTM" },
                { name: "USOIL" },
                { name: "XAUUSD" },
                { name: "US100" },
                { name: "US30" },
                { name: "NONE" },
            ],
            Types: [{ name: "LONG" }, { name: "SHORT" }],
            Results: [{ name: "TP" }, { name: "SL" }],
            Markets: [{ name: "FOREX" }, { name: "CRYPTO" }],
        };
    },
    methods: {

        async submitJournalEntry() {
            try {


                const set_params = {
                    symbol: this.symbol,
                    type: this.type,
                    result: this.result,
                    time: this.time,
                    description: this.description,
                    market: this.market,
                };

                console.log(set_params)
                const response = await axios.post("http://localhost:3005/api/upload", set_params, {
                    
                });

                this.$toast.add({
                    severity: "success",
                    summary: "Success",
                    detail: "Journal entry created successfully!",
                    life: 3000,
                });
            } catch (error) {
                console.error("Error submitting journal entry:", error);
                this.$toast.add({
                    severity: "error",
                    summary: "Error",
                    detail: "Failed to create journal entry.",
                    life: 3000,
                });
            }
        },
    },
    mounted() {
        // Set default Market and Result after initialization
        
        this.market = this.Markets[1]['name']; 
        // console.log(this.Markets[1]['name'])
        this.result = this.Results[0]['name']; 
        
    },
};
</script>
