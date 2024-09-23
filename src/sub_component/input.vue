<template>
    <div class="textInputWrapper" :style="{ '--accent-color': accentColor }">
        <input :placeholder="inputPlaceholder" type="text" class="textInput">
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: 'Type Here'
        },
        accentColor: {
            type: String,
            default: '#83a9e5'  // Default color for the accent
        }
    },
    computed: {
        inputPlaceholder() {
            return this.value;
        }
    }
}
</script>

<style scoped>
@import "../style/input.css";
</style>