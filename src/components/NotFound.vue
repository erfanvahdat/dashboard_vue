<template>
    <div class="card">
        <DataTable :value="products" editMode="row" :editingRows="editingRows" dataKey="id">
            <!-- User Column with Icon -->
            <Column field="user" style="width: 25%">
                <template #header>
                    <i class="pi pi-user mr-2"></i> User
                </template>
            </Column>

            <!-- Name Column with Icon -->
            <Column field="name" style="width: 25%">
                <template #header>
                    <i class="pi pi-id-card mr-2"></i> Name
                </template>
            </Column>

            <!-- Category Column with Icon -->
            <Column field="category" style="width: 25%">
                <template #header>
                    <i class="pi pi-tags mr-2"></i> Category
                </template>
            </Column>

            <!-- Images Column with Icon and FileUpload -->
            <Column field="images" style="width: 25%">
                <template #header>
                    <i class="pi pi-image mr-2"></i> Images
                </template>

                <template #body="{ data, field }">
                    <div v-if="editingRows.includes(data.id)">
                        <FileUpload name="demo[]" accept="image/*" :multiple="true" :maxFileSize="1000000"
                            @upload="onImageUpload(data, field)">
                            <template #empty>
                                <span>Drag and drop files to here to upload.</span>
                            </template>
                        </FileUpload>
                    </div>
                    <div v-else>
                        <img :src="'/path/to/uploads/' + data[field]" alt="Image" class="p-image-thumbnail" />
                    </div>
                </template>
            </Column>

            <!-- Row Editor -->
            <Column :rowEditor="true" style="width: 10%; min-width: 8rem" bodyStyle="text-align:center"></Column>
        </DataTable>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [
                {
                    id: 1000,
                    user: 'John Doe',
                    name: 'Bamboo Watch',
                    category: 'Accessories',
                    image: 'bamboo-watch.jpg',
                    images: ['bamboo-watch.jpg'],
                }
            ],
            editingRows: []
        };
    },
    methods: {
        onImageUpload(data, field) {
            // Handle image upload here
            console.log('Uploaded images:', data[field]);
        }
    }
};
</script>

<style scoped>
.p-image-thumbnail {
    width: 50px;
    height: 50px;
    object-fit: cover;
}
</style>
