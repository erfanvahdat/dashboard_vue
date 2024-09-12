<template>
  <div :class="['sidebar', sidebarClasses]">
    <!-- Toggle Button with SVG Icon -->
    <button @click="toggleSidebar" class="toggle-button">
      <svg v-if="!isCollapsed" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6">
        <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <svg v-if="isCollapsed" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6">
        <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      click here
    </button>

    <!-- Sidebar Content -->
    <ul class="mx-3 mt-12">
      <li @click="showView('home')">
        <a href="#" class="text-sm">HOME
          <span class="fa-solid fa-house fa-sm m-1"></span></a>
      </li>
      <li @click="showView('charts')">
        <a href="#" class="text-sm">Analyzing
          <span class="fa-solid fa-chart-pie m-1"></span></a>
      </li>
      <li @click="showView('ranking')">
        <a href="#" class="text-sm">Ranking
          <span class="fa-solid fa-sitemap"></span></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapsed: false,
    };
  },
  computed: {
    sidebarClasses() {
      return this.isCollapsed
        ? 'w-16 translate-x-[-100%] transition-transform ease-in-out duration-300'
        : 'w-44 translate-x-0 transition-transform ease-in-out duration-300';
    }
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
    },
    showView(view) {
      this.$emit('switchView', view);
    }
  }
}
</script>

<style scoped>
.sidebar {
  position: fixed;
  height: 100%;
  background-color: #333;
  color: white;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.toggle-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
}
.toggle-button svg {
  stroke: white;
}
</style>
