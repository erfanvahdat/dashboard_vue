<template>
    <!-- Table with Pulse animation -->
    <div class="bg-gray-800 h-full">
        <div class="flex flex-col mx-5 my-5 gap-0 overflow-hidden">

            <div class="border-5 border-yellow-500 h-full overflow-hidden">
                <span class="font-serif font-bold rounded">Table</span>

                <table class="table rounded-lg border border-gray-300 overflow-hidden">
                    <thead class="justify-start">
                        <tr></tr>
                        <tr>
                            <th></th>
                            <th v-for="(key, index) in objectKeys" :key="index">{{ key }}</th>
                            <th>Ticker</th>
                            <th>Type</th>
                            <th>Profit <i class="fa-solid fa-dollar-sign"></i></th>
                            <th>Session</th>
                            <th>Upload Img <i class="fa-solid fa-upload"></i></th>
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
                                <div class="w-full max-w-sm min-w-[200px]">
                                    <label class="block mb-1 text-sm text-slate-600">
                                        Input Number
                                    </label>

                                    <div class="relative w-[150px]">
                                        <select
                                            class="    w-full   rounded-5 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow cursor-pointer appearance-none">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.2" stroke="currentColor"
                                            class="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                        </svg>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div class="w-full">
                                    <div class="relative  w-[200px] h-[100px]">
                                        <textarea
                                            class="peer  h-[80px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                                            placeholder=" "></textarea>
                                        <label
                                            class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                            Message
                                        </label>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <!-- Success Button Dropdown -->
                                <div :class="{ 'dropup': isDropUp(index), 'dropdown': !isDropUp(index) }">
                                    <button class="btn btn-success dropdown-toggle text-xs" type="button"
                                        id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                        Select Session
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <li v-for="(session, index) in Sessions" :key="index">
                                            <a class="dropdown-item" href="#">{{ session }}</a>
                                        </li>
                                        <li>
                                            <hr class="dropdown-divider">
                                        </li>
                                        <li><a class="dropdown-item" href="#">Separated link</a></li>
                                    </ul>
                                </div>
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
            Sessions: ['LONDON', "NEW YORK", "TOKYO", "SYDNEY"],
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
        },
        isDropUp(index) {
            // Check if the dropdown is near the bottom of the table or viewport
            const row = document.querySelectorAll('tbody tr')[index];
            if (row) {
                const rect = row.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                // If the bottom of the row is near or below the viewport height, return true for dropup
                return rect.bottom > viewportHeight - 100;
            }
            return false;
        }
    },
    mounted() {
        if (this.peopleData.length > 0) {
            this.objectKeys = Object.keys(this.peopleData[0]);
        }
        window.addEventListener('resize', this.checkDropdownPosition); // Optional: Check on window resize
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.checkDropdownPosition);
    }
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
