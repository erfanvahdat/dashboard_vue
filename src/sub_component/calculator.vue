<template>
    <Toast />
    <ConfirmPopup group="templating">
        <template #message="slotProps">
            <div class="flex flex-col items-center w-full gap-4 p-4">
                <i :class="slotProps.message.icon" class="text-6xl text-primary-500 "></i>
                <p class="font-bold font-serif">{{ slotProps.message.message }}</p>

                <!-- Calculator Content -->
                <div class="flex flex-col  rounded-lg max-w-lg w-full border-1">

                    <div class="card flex flex-wrap gap-4 bg-filed_label font-bold text-filed_body">
                        <div class="flex flex-row">
                            
                            <label for="integeronly" class="font-bold mt-2 ml-2 ">Balance (USD)</label>
                            <InputNumber v-model="accountBalance" inputId="integeronly" fluid mode="currency" class="mr-2 mt-1 "
                                currency="USD" />
                        </div>
                        <div class="flex flex-row">
                            <label for="riskPercentage" class="font-bold mt-2 ml-2">Risk %</label>
                            <InputNumber v-model="riskPercentage" inputId="riskPercentage" mode="decimal" prefix=" % "
                                :minFractionDigits="0.5" :maxFractionDigits="2.5" fluid step="0.2"  class="mr-2"/>
                        </div>
                        <div class="flex flex-row">
                            <label for="entryPrice" class="font-bold block ml-2">Entry Price</label>
                            <InputNumber v-model="entryPrice" inputId="entryPrice" :minFractionDigits="1" class="mr-2"
                                :maxFractionDigits="10" fluid />
                        </div>
                        <div class="flex flex-row">
                            <label for="stopLoss" class="font-bold block ml-2">Stop Loss</label>
                            <InputNumber v-model="stopLoss" inputId="stopLoss" :minFractionDigits="1" class="mr-2 mb-2"
                                :maxFractionDigits="10" fluid />
                        </div>
                    </div>
                    <!-- Buttons -->
                    <div class="flex flex-row gap-2 mt-4">
                        <Button label="Calculate" severity="info" class="w-1/2 rounded-0"
                            @click="calculatePositionSizeCrypto" />
                        <Button label="Reset" class="w-1/2 rounded-0 bg-filed_label" @click="resetAll" />
                    </div>
                    <!-- Result -->
                    <div class="flex flex-row gap-2 mt-2 mb-2">
                    
                        <p class="font-bold">Size_Crypto is :</p>
                        <p for="" class="font-bold  border-1 border-orange-500  rounded  w-fit ">{{ size_crypto }} </p>
                        

                    </div>
                
                        <div class="w-full flex flex-row gap-2 mb-2">
                            <p class="font-bold">Size_dollar($) is : </p>
                        <p for="" class="font-bold  border-1 border-orange-500 rounded   ">{{ size_dollar.toFixed(2) }} $ </p>
                    </div>
                         
                    
                </div>
            </div>
        </template>
    </ConfirmPopup>

    <div class="flex ">
        <Button @click="showTemplate($event)" label="Show Calculator" severity="help"></Button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            accountBalance: null,
            riskPercentage: 1,
            entryPrice: null,
            stopLoss: null,
            size_crypto: 0,
            size_dollar : 0,
        };
    },
    methods: {
        showTemplate(event) {
            this.$confirm.require({
                target: event.currentTarget,
                group: 'templating',
                message: 'Calculating the Crypto Size position',
                icon: 'pi pi-calculator',
                rejectProps: {
                    icon: 'pi pi-times',
                    label: 'Cancel',
                    outlined: true
                },
                acceptProps: {
                    icon: 'pi pi-check',
                    label: 'Confirm'
                },
                accept: () => {
                    this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Calculation accepted', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'Calculation canceled', life: 3000 });
                }
            });
        },
        calculatePositionSizeCrypto() {

            const diff = Math.abs(( ( (this.entryPrice - this.stopLoss) / this.stopLoss)) *100 )
            const SIZE = ((this.accountBalance * this.riskPercentage)/diff) ; 
            this.size_dollar  = SIZE; 
            this.size_crypto = SIZE > 0 ? (SIZE / this.entryPrice).toFixed(2)  : 0; 

        },
        resetAll() {
            this.accountBalance = null;
            this.riskPercentage = null;
            this.entryPrice = null;
            this.stopLoss = null;
            this.size_crypto = 0;
            this.size_dollar = 0;
        }
    }
};
</script>
