<template>

    <div class="flex flex-col gap-1 w-full bg-gray-800  h-full	" >

        <div class="flex flex-row  " id="test" >
            <div class="border-3 rounded  border-gray-700  bg-gray-800  p-2 m-2">
                <!-- Form Inputs -->
                <div class="flex mt-2 ml-2 w-full">
                    <Select v-model="symbol" editable :options="Symbols" optionLabel="name" placeholder="Ticker"
                        class="w-full md:w-56" />
                </div>
                <div class="flex mt-3 ml-2 ">
                    <Select v-model="type" editable :options="Types" optionLabel="name" placeholder="Type?"
                        class="w-full md:w-56" />
                </div>
                <div class="w-fit mt-3">
                    <label for="datepicker-12h" class="font-bold ml-2">12h Format</label>
                    <DatePicker id="datepicker-12h" v-model="time" showTime hourFormat="12" fluid class="ml-2" />
                </div>
                <div class="flex mt-3 ml-2">
                    <Select v-model="result" editable :options="Results" optionLabel="name" placeholder="Result"
                        class="w-full md:w-56" />
                </div>
                <div class="flex mt-3 ml-2 mb-2">
                    <Select v-model="market" editable :options="Markets" optionLabel="name" placeholder="Market"
                        class="w-full md:w-56" />
                </div>
                <div class=" flex justify-start mb-2 ml-2 mt-4">
                    <FloatLabel>
                        <div class="card flex justify-center">
                            <Textarea v-model="description" rows="5" cols="30" />
                        </div>
                        <label for="over_label">Reason to Enter?</label>
                    </FloatLabel>
                </div>

                <!-- File Upload -->
                <div class="w-fit ml-2">
                    <Toast />
                    <FileUpload name="demo[]" url="http://localhost:3005/api/upload" @upload="null" :multiple="true"
                        accept="image/*" :maxFileSize="100000000">
                        <template #empty>
                            <span>Drag and drop files to here to upload.</span>
                        </template>
                    </FileUpload>
                </div>

                <!-- Submit Button -->
                <div class="flex justify-start  mt-4 mr-5">
                    <button class="p-2 bg-blue-500 text-white rounded" @click="submitJournalEntry">Submit Entry</button>
                </div>
            </div>

            <!-- Gallary -->
            <div class="card flex w-full     mt-2 mr-5 border-1 border-bg-gray-800 " style="background-color: #f0f0f0;">
                <!-- Change the color here -->
                <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true"
                    containerStyle="max-width: 100px  max-height: 100px " :showItemNavigators="true" class="p-2">
                    <template #item="slotProps">
                        <div class="image-container" style="width: 1900px; height: 550px; overflow: hidden; position: relative;">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt"
                    style="width: 100%; height: 100%; object-fit: cover; display: block;" />
            </div>
                    </template>
                    <template #thumbnail="slotProps">
                        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt"
                            style="display: block;" />
                    </template>
                </Galleria>
            </div>
        </div>

        <div class="border-1  m-2">
            hello
        </div>

    </div>


</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";
import Galleria from "primevue/galleria";

export default {
    components: {
        Galleria,
    },
    data() {
        return {
            symbol: "DOT",
            type: "LONG",
            time: null,
            result: "TP",
            description: "sss",
            market: null,
            image: null,

            // Dropdown options
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
            images: [], // Array to hold dynamically loaded images
            responsiveOptions: [
                { breakpoint: "1300px", numVisible: 4 },
                { breakpoint: "575px", numVisible: 1 },
            ],
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

                console.log(set_params);
                const response = await axios.post("http://localhost:3005/api/upload", set_params);
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

        // Function to dynamically load images
        loadImages() {
            const imagePaths = import.meta.glob("/src/assets/*.{png,jpg,jpeg}", { eager: true, import: "default" });
            this.images = Object.keys(imagePaths).map((key) => ({
                itemImageSrc: imagePaths[key],
                thumbnailImageSrc: imagePaths[key],
                alt: key.split("/").pop().split(".")[0],
            }));
        },
    },
    mounted() {
        this.market = this.Markets[1]["name"];
        this.result = this.Results[0]["name"];
        this.loadImages();
    },
};
</script>

<style scoped>
.card {
    margin: 20px auto;
}


#test{

    height: 60vh;
    width: 100vw;

}
</style>