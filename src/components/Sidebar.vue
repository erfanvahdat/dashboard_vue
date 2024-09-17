<template>
    <div class="card flex ">
        <Menu :model="items" class="w-full md:w-60">
            <template #start>
                <span class="inline-flex items-center gap-1 px-2 py-2">
                    <!-- <span class="text-xl font-semibold">PRIME<span class="text-primary">APP</span></span> -->
                </span>
            </template>
            <template #submenulabel="{ item }">
                <span class="text-primary font-bold">{{ item.label }}</span>
            </template>
            <template #item="{ item, props }">
                <a v-ripple class="flex items-center" v-bind="props.action" @click="handleClick(item.class_name)">
                    <span :class="item.icon" />
                    <span>{{ item.label }}</span>
                    <Badge v-if="item.class_name" class="ml-auto" :value="item.badge" />
                    <span v-if="item.shortcut"
                        class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{
                            item.shortcut }}</span>
                </a>
            </template>
            <template #end>
                <button v-ripple
                    class="relative overflow-hidden w-full border-0 bg-transparent flex items-start p-2 pl-4 hover:bg-surface-100 dark:hover:bg-surface-800 rounded-none cursor-pointer transition-colors duration-200">
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="mr-2"
                        shape="circle" />
                    <span class="inline-flex flex-col items-start">
                        <span class="font-bold">Amy Elsner</span>
                        <span class="text-sm">Admin</span>
                    </span>
                </button>
            </template>
        </Menu>
    </div>
</template>



<script>
export default {
    data() {
        return {
            items: [
                {
                    separator: true
                },
                {
                    label: 'Documents',
                    items: [
                        {
                            label: 'Home',
                            icon: 'pi pi-plus',
                            shortcut: '⌘+N',
                            class_name: 'HOME'
                        },
                        {
                            label: 'Analyzing',
                            icon: 'pi pi-search',
                            shortcut: 'shift+S',
                            class_name: 'ANALYZE'
                        }
                    ]
                },
                {
                    label: 'Profile',
                    items: [
                        {
                            label: 'Settings',
                            icon: 'pi pi-cog',
                            shortcut: '⌘+O'
                        },
                        {
                            label: 'Messages',
                            icon: 'pi pi-inbox',
                            badge: 2
                        },
                        {
                            label: 'Logout',
                            icon: 'pi pi-sign-out',
                            shortcut: '⌘+Q'
                        }
                    ]
                },
                {
                    separator: true
                }
            ]
        };
    },
    methods: {
        handleClick(className) {
            // Dynamically trigger the method based on className
            if (this[className]) {
                this[className]();
            }
        },
        HOME() {
            this.$emit('showHome');
        },
        ANALYZE() {
            this.$emit('showAnalyze');
        },
        emitSettings() {
            this.$emit('showSettings');
        },
        emitHistory() {
            this.$emit('showHistory');
        },
        emitRanking() {
            this.$emit('showRanking');
        },
        emitRegistration() {
            this.$emit('registration');
        }
    }
};
</script>





<!-- 
loading icon
<span class="relative flex h-3 w-3">
    <span
        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
    <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
</span> -->
<!-- 
pulse
<div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
    <div class="animate-pulse flex space-x-4">
      <div class="rounded-full bg-slate-700 h-10 w-10"></div>
      <div class="flex-1 space-y-6 py-1">
        <div class="h-2 bg-slate-700 rounded"></div>
        <div class="space-y-3">
          <div class="grid grid-cols-3 gap-4">
            <div class="h-2 bg-slate-700 rounded col-span-2"></div>
            <div class="h-2 bg-slate-700 rounded col-span-1"></div>
          </div>
          <div class="h-2 bg-slate-700 rounded"></div>
        </div>
      </div>
    </div>
  </div> -->