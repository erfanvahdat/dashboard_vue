<template>
    <div :class="alertClass" class="max-w-sm w-fit shadow-lg rounded relative border-l-4 text-white ml-2">
        <div class="p-2 justify-start ml-0">
            <div class="flex">
                <div class="w-0 flex-1 pt-0.5">
                    <p class="text-sm leading-5 font-medium">
                        {{ isDanger ? 'Error' : 'Success' }}
                    </p>
                </div>
                <div class="ml-36 flex-shrink-0 flex justify-start">
                    <button class="inline-flex text-white transition ease-in-out duration-150" @click="closeAlert">
                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isDanger: {
            type: Boolean,
            default: false
        },
        accentColor: {
            type: String,
            default: ''
        }
    },
    computed: {
        alertClass() {
            return this.isDanger

                ?  'bg-red-400 border-red-700' :  "bg-green-400 border-green-700";
        }
    },
    methods: {
        closeAlert() {
            this.$emit('close');
        }
    }
};
</script>
