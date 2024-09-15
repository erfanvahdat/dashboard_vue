<template>
  <div class="flex flex-col p-2 gap-3 bg-gray-800 h-[100vh] overflow-hidden">
    <!-- Status Component -->
    <div class="rounded w-fit mx-3">
      <status></status>
    </div>

    <!-- Order Table -->
    <div class="rounded mx-3 border-1">
      <div class="flex flex-row gap-2">
        <div>
          <span class="font-b font-serif ml-2 text-white">Orders</span>
        </div>

        <div>
          <button
            class="relative px-2 py-2 bg-blue-500 text-white rounded-lg flex items-center justify-center space-x-2"
            @click="reloading">
            <span class="text-sm">reload</span>
            <div v-if="pulse_loading"
              class="w-3 h-3 border-4 border-solid border-current border-t-transparent rounded-full animate-spin"
              role="status">
            </div>
          </button>
        </div>
      </div>

      <div class="relative">
        <!-- Table with Pulse animation -->
        <table v-if="!pulse_loading" class="table rounded-lg border border-gray-300 overflow-hidden">
          <thead>
            <tr>
              <th></th>
              <th v-for="(key, index) in objectKeys" :key="index">{{ key }}</th>
              <th>Trigger</th>
              <th>Cancel</th>
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
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Loading state with spinning icon and text -->
      <div v-if="pulse_loading" class="text-center">
        <div class="border border-blue-300 shadow rounded-md p-4 w-full mx-auto">
          <div class="animate-pulse flex space-x-4">
            <div class="rounded-full bg-slate-700 h-10 w-10"></div>
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 bg-slate-700 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div class="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Toggle button -->
    <div class="flex ">
      <!-- Toggle button content here -->
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      pulse_loading: false, // Contring the pulse container display
      objectKeys: [],
      peopleData: [
        { name: "erfan", job: "programmer", favorit_color: "green" },
        { name: "ali", job: "it", favorit_color: "blue" },
        { name: "moh", job: "SEO", favorit_color: "red" }
      ],
    };
  },

  mounted() {
    if (this.peopleData.length > 0) {
      this.objectKeys = Object.keys(this.peopleData[0]);
    }
  },

  methods: {
    reloading() {
      this.pulse_loading = true;

      setTimeout(() => {
        this.pulse_loading = false;
      }, 2000);
    }
  },


};
</script>

<style scoped>
/* Custom styles for table */
.table {
  border-radius: 0.5rem;
  /* Roundness for the table */
}
</style>
