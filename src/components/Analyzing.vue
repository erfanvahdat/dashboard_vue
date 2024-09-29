<template>
    <Toast />
    <ConfirmPopup></ConfirmPopup>
    <div class="card flex flex-wrap gap-2 justify-center">
        <Button @click="confirm1($event)" label="Save" outlined></Button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    methods: {
        // Function to handle Save confirmation
        confirm1(event) {
            this.$confirm.require({
                target: event.currentTarget,
                message: 'Are you sure you want to proceed?',
                icon: 'pi pi-exclamation-triangle',
                rejectProps: {
                    label: 'Cancel',
                    severity: 'secondary',
                    outlined: true
                },
                acceptProps: {
                    label: 'Save'
                },
                accept: () => {
                    this.postLiveTrade();
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                }
            });
        },

        // Function to handle live trade posting
        async postLiveTrade() {
            try {
                const token = this.show_access(); // Get the access token

                // Prepare the data for the POST request
                const postData = {
                    "ticker": `${this.Ticker['symbol']}-USDT`.toUpperCase(),
                    "positionSide": this.type_pos,
                    "limitPrice": this.limit_price.toString(),
                    "slPrice": this.sl_price.toString(),
                    "tpPrice": this.tp_price.toString(),
                    "type": this.type.toUpperCase(),
                    "risk": this.risk.toString()
                };

                // Make the POST request to the API
                const response = await axios.post(`${import.meta.env.VITE_TRADE}`, postData, {
                    headers: {
                        'Authorization': `Token ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                // Handle successful response (status 200)
                if (response.status === 200) {
                    this.$toast.add({
                        severity: 'success',
                        summary: 'Success',
                        detail: 'Live trade posted successfully!',
                        life: 3000
                    });
                }

            } catch (error) {
                // Handle error responses (e.g., 400 status or network issues)
                let errorMessage = 'Failed to post live trade: ';

                if (error.response && error.response.data) {
                    errorMessage += error.response.data.error || 'Unknown error occurred';
                } else {
                    errorMessage += error.message;
                }

                this.$toast.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: errorMessage,
                    life: 3000
                });

                console.error(errorMessage);
            }
        }
    }
};
</script>
