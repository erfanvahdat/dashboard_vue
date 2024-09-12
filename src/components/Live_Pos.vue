<template>
  <div class="flex p-2 m-1 ">
    <div class="overflow-x-auto">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          <!-- Loop through the data array -->
          <tr v-for="(person, index) in peopleData" :key="index" :class="{ 'bg-base-200': index % 2 === 0 }">
            <th>{{ index + 1 }}</th>
            <td>{{ person.name }}</td>
            <td>{{ person.job }}</td>
            <td>{{ person.favorit_color }}</td>
          </tr>
          <!-- Last row indicating no more data -->
          <tr v-if="peopleData.length > 0">
            <th colspan="4" class="text-center hover:">...</th>
            


          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      peopleData: [
        { name: "erfan", job: "programmer", favorit_color: "green" },
        { name: "ali", job: "it", favorit_color: "blue" },
        { name: "moh", job: "SEO", favorit_color: "red" }
      ]
    };
  }
};
</script>
