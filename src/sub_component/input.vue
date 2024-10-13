<template>
  <div class="textInputWrapper" :style="{ '--accent-color': accentColor }">
    <input :placeholder="placeholder" type="text" class="textInput" v-model="inputValue"
      @input="$emit('input', inputValue)" />
    <!-- Clipboard icon, initially hidden, shows on hover or focus -->
    <span class="input-icon" @click="pasteClipboard">
      <i class="pi pi-clipboard" style="font-size: 1rem"></i>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Enter text'  // Default placeholder
    },
    accentColor: {
      type: String,
      default: '#83a9e5'
    }
  },
  data() {
    return {
      inputValue: this.value
    };
  },
  methods: {
    pasteClipboard() {
      navigator.clipboard.readText().then((text) => {
        this.inputValue = text;
        this.$emit('input', text); // Emits the updated value
      });
    }
  }
};
</script>

<style scoped>
@import "../style/input.css";

/* Initially hide the clipboard icon */
.input-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 18px;
  color: #e8e8e8;
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* Show the clipboard icon when hovering over the input or when focused */
.textInputWrapper:hover .input-icon,
.textInputWrapper:focus-within .input-icon {
  opacity: 1;
}

.textInputWrapper {
  position: relative;
  --accent-color: #83a9e5;
}
</style>
