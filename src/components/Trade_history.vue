<template>
    <!-- Table with Pulse animation -->

    <div class="bg-gray-800 h-full">
        <div class="flex flex-col mx-5 my-5 gap-0 ">


            <div>


                <span class="     font-serif font-bold  rounded">Table</span>


                <table class="table rounded-lg border border-gray-300 overflow-hidden ">
                    <thead class="justify-start">

                        <tr></tr>
                        <tr>

                            <th></th>
                            <th v-for="(key, index) in objectKeys" :key="index">{{ key }}</th>
                            <th>Ticker</th>
                            <th>Type</th>

                            <th>Profit <i class="fa-solid fa-dollar-sign"></i></th>
                            <th>Session</th>
                            <th>upload_img <i class="fa-solid fa-upload"></i></th>
                            <th>Session</th>
                            <th>Cancel</th>
                            <th>Id_value</th>
                            <th>Edit</th>

                            <th>Submit <i class="fa-solid fa-folder-open"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(person, index) in peopleData" :key="index" class="bg-black text-white">
                            <th>{{ index + 1 }}</th>
                            <td>{{ person.name }}</td>
                            <td>{{ person.job }}</td>
                            <td>{{ person.favorit_color }}</td>
                            <td><button class="btn btn-accent">Accent</button></td>
                            <td><button class="btn btn-error">Error</button></td>

                            <td>
                                <!-- Display index on button when clicked -->
                                <button class="btn btn-error" @click="show_id(index)">
                                    {{ clickedIndex === index ? index : "Error" }}
                                </button>
                            </td>




                            <td><button class="btn btn-accent bg-white border-1 border-white"><i
                                        class="fa-solid fa-pen"></i></button></td>


                        </tr>
                    </tbody>
                </table>
            </div>

            <div>gf</div>

        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            objectKeys: [],
            peopleData: [
                { name: "erfan", job: "programmer", favorit_color: "green" },
                { name: "ali", job: "it", favorit_color: "blue" },
                { name: "moh", job: "SEO", favorit_color: "red" }
            ],
            clickedIndex: null, // Variable to store the index of the clicked button
        };
    },
    methods: {
        show_id(id) {
            this.clickedIndex = id; // Store the clicked index
        }
    },
    mounted() {
        if (this.peopleData.length > 0) {
            this.objectKeys = Object.keys(this.peopleData[0]);
        }
    }
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
