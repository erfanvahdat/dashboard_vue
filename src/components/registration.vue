<template>
  <div class="card">
    <!-- PrimeVue Galleria Component -->
    <Galleria
      :value="images"
      :responsiveOptions="responsiveOptions"
      :numVisible="5"
      :circular="true"
      containerStyle="max-width: 640px"
      :showItemNavigators="true"
    >
      <!-- Full Image -->
      <template #item="slotProps">
        <img
          :src="slotProps.item.itemImageSrc"
          :alt="slotProps.item.alt"
          style="width: 100%; display: block;"
        />
      </template>

      <!-- Thumbnail Image -->
      <template #thumbnail="slotProps">
        <img
          :src="slotProps.item.thumbnailImageSrc"
          :alt="slotProps.item.alt"
          style="display: block;"
        />
      </template>
    </Galleria>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import Galleria from "primevue/galleria";

export default {
  components: {
    Galleria,
  },
  setup() {
    const images = ref([]);
    const responsiveOptions = [
      { breakpoint: "1300px", numVisible: 4 },
      { breakpoint: "575px", numVisible: 1 },
    ];

    // Automatically load images from the 'assets' directory
    const loadImages = () => {
      const imagePaths = import.meta.glob("/src/assets/*.{png,jpg,jpeg}", {
        eager: true,
        import: "default",
      });

      // Map image paths to Galleria format
      images.value = Object.keys(imagePaths).map((key) => {
        return {
          itemImageSrc: imagePaths[key],
          thumbnailImageSrc: imagePaths[key],
          alt: key.split("/").pop().split(".")[0], // Filename as alt text
        };
      });
    };

    onMounted(() => {
      loadImages();
    });

    return {
      images,
      responsiveOptions,
    };
  },
};
</script>

<style scoped>
.card {
  margin: 20px auto;
}
</style>
