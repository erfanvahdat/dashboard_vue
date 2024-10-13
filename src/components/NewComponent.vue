<template>
    <Select v-model="Ticker" :options="cryptoList" filter optionLabel="symbol" @change="updateChart('chart')"
        placeholder="Select a Crypto" class="w-full md:w-72">

        <!-- Template for selected value -->
        <template #value="slotProps">
            <div v-if="slotProps.value" class="flex items-center">
                <div>{{ slotProps.value.symbol }}</div> <!-- Display ticker -->
            </div>
            <span v-else>
                {{ slotProps.placeholder }}
            </span>
        </template>
    </Select>
</template>
