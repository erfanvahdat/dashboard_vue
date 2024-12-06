<template>
    <div class="bg-gray-900 w-full h-full">
        
        <div class="flex flex-col  p-2 rounded-lg max-w-lg ml-2 mt-2 border-1 ">


            <div class="card flex flex-wrap gap-4 bg-filed_label font-bold text-filed_body mr-2">
                <div class="flex flex-row mr-2">
                    <label for="integeronly" class="font-bold  mt-2 mx-2">
                        Balance(USD)
                    </label>
                    <InputNumber v-model="accountBalance" inputId="integeronly" fluid mode="currency" currency="USD" />
                </div>

                <div class="flex flex-row mr-2">

                    <label for="minmax-buttons" class="font-bold block  w-1/6 mt-2" > Risk % </label>
                        <InputNumber v-model="riskPercentage" inputId="minmaxfraction" mode="decimal" showButtons prefix=" % " :minFractionDigits="0.5" :maxFractionDigits="2.5" fluid step="0.2" />

                </div>

                

        <div class="flex flex-row">
            <label for="minmaxfraction" class="font-bold block mb-2"> Entery Price </label>
            <InputNumber v-model="entryPrice" inputId="minmaxfraction" :minFractionDigits="1" :maxFractionDigits="10" fluid />
        </div>
                

        <div class="flex flex-row">
            <label for="minmaxfraction" class="font-bold block mb-2"> Stop Loss </label>
            <InputNumber v-model="stopLoss" inputId="minmaxfraction" :minFractionDigits="1" :maxFractionDigits="10" fluid />
        </div>

            </div>

            <!-- options -->
            <div class="flex flex-row gap-2 ">
                <Button label="Calculate" severity="info" class="mx-2 mt-2 w-1/2 rounded-0" @click="calculatePositionSizeCrypto">
                </Button>

                <button class="mx-2 mt-2 w-1/2 bg-filed_label" @click="resetAll">reset</button>
            </div>


            <label for="" class="font-bold font-serif justify-items-center w-full">Size is {{ this.size }} Crypto
            </label>


        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            accountBalance: 11,
            riskPercentage: 1.0,
            entryPrice: 10,
            stopLoss: 5,
            entryFee: 0,
            stopFee: 0,
            size: 0.00
        };
    },
    methods: {
        calculateRiskUsd() {
            const diff = Math.abs(( ( (this.entryPrice - this.stopLoss) / this.stopLoss)) *100 )
            console.log(this.entryPrice, this.stopLoss,diff)
            return ((this.accountBalance * this.riskPercentage)/diff) ;
            
        },
        calculatePositionSizeCrypto() {
            const SizeUSD = this.calculateRiskUsd();
            console.log(SizeUSD)
            this.size = (SizeUSD / this.entryPrice).toFixed(2);
            
            return SizeUSD
        },
        calculatePositionSizeUsd() {
            return (this.calculatePositionSizeCrypto() * this.entryPrice).toFixed(2);
        },
        resetAll() {
            this.accountBalance = 11;
            this.riskPercentage = 1.0;
            this.entryPrice = 10;
            this.stopLoss = 5;
            this.entryFee = 0;
            this.stopFee = 0;
            this.size = 0.00;
        },
    },
};
</script>
