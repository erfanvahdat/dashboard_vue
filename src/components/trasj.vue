<template>
    <div class="h-full overflow-hidden bg-gray-700">
        <div class="flex flex-col p-2 space-y m-3 gap-5">
            <!-- Limit Order -->
            <div class="flex flex-row rounded-3 bg-gray-800 gap-3 w-fit">

                <!-- MultiSelect component -->
                <div class="space-y-2">
                    <span class="text-sm font-bold font-serif mt-2 ml-1">Limit_order</span>
                    <div class="justify-center ml-3 my-3">
                        <FloatLabel class="w-full md:w-80">
                            <MultiSelect id="ms-cities" v-model="selectedCities" :options="cities" optionLabel="name"
                                filter :maxSelectedLabels="3" class="w-full" />
                            <label for="ms-cities">Select Ticker</label>
                        </FloatLabel>
                    </div>

                    <!-- RadioButton Section -->
                    <div class="flex flex-wrap gap-2 ml-3">
                        <!-- Cheese RadioButton -->
                        <div class="p-radiobutton">
                            <RadioButton 
                                v-model="ingredient" 
                                inputId="ingredient1" 
                                name="pizza" 
                                value="Cheese" 
                                :class="{'p-radiobutton-checked': ingredient === 'Cheese'}" />
                            <label for="ingredient1" class="ml-2 text-white">Cheese</label>
                        </div>

                        <!-- Mushroom RadioButton -->
                        <div class="p-radiobutton flex items-center" :class="{'mushroom-checked': ingredient === 'Mushroom'}">
                            <RadioButton 
                                v-model="ingredient" 
                                inputId="ingredient2" 
                                name="pizza" 
                                value="Mushroom" 
                                :class="{'p-radiobutton-checked': ingredient === 'Mushroom'}" />
                            <label for="ingredient2" class="ml-2 text-white">Mushroom</label>
                        </div>
                    </div>

                    <!-- SelectButton component -->
                    <div class="ml-3 mb-2">
                        <SelectButton v-model="value" :options="options" optionLabel="label" aria-labelledby="basic" />
                    </div>
                </div>

                <!-- Other section -->
                <div class="border-1 border-zinc-500">hello</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCities: null,
            cities: [
                { name: "New York", code: "NY" },
                { name: "Rome", code: "RM" },
                { name: "London", code: "LDN" },
                { name: "Istanbul", code: "IST" },
                { name: "Paris", code: "PRS" }
            ],
            type_L: null, // Holds either 'SHORT' or 'LONG'
            value: null, // Holds the selected value from SelectButton
            options: [
                { label: 'LONG', value: '1' },
                { label: 'SHORT', value: '2' }
            ],
            ingredient: '' // Holds the selected ingredient
        };
    },
    watch: {
        // Watch for changes in the 'value' field and log the selected value
        value(newValue) {
            console.log('Selected value:', newValue.value);
        },
        // Watch for changes in 'ingredient' and log the selected ingredient
        ingredient(newValue) {
            console.log('Selected ingredient:', newValue);
        }
    }
};
</script>

<style>
/* Radio button background */
.p-radiobutton {
    transition: background-color 0.3s ease;
}

/* Change background color when "Mushroom" is selected */
.mushroom-checked {
    --p-radiobutton-checked-background: red !important;
    background-color: red !important;
}

/* Change background color when "Cheese" is selected */
.p-radiobutton-checked {
    --p-radiobutton-checked-background: green !important;
    background-color: green !important;
}
</style>
