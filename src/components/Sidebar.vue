<template>
    <div class="card flex overflow-hidden">
        <Menu :model="items" class="w-full md:w-60 overflow-hidden">
            <template #start>
                <span class="inline-flex items-center gap-1 px-2 py-2">
                    <!-- Custom content here -->
                </span>
            </template>
            <template #submenulabel="{ item }">
                <span class="text-primary font-bold">{{ item.label }}</span>
            </template>
            <template #item="{ item, props }">
                <a v-ripple class="flex items-center p-2" v-bind="props.action"
                    @click="handleClick(item.class_name, item.color)" :tabindex="item.inert ? -1 : 0"
                    :inert="item.inert" :class="selectedItem === item.class_name ? item.color : ''">

                    <span :class="item.icon"></span>
                    <span>{{ item.label }}</span>

                    <Badge v-if="item.class_name" class="ml-auto" :value="item.badge" />

                    <span v-if="item.shortcut"
                        class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">
                        {{ item.shortcut }}
                    </span>
                </a>
            </template>
            <template #end>
                PHOENIX
            </template>
        </Menu>
    </div>
</template>


<script>

export default {
    data() {
        return {
            var: null,
            selectedItem: null,  // To track the selected item
            items: [
                { separator: true },
                {
                    label: 'Main',

                    items: [
                        { label: 'Home', icon: 'pi pi-home', class_name: 'HOME', color: "bg-blue-500  rounded-3" },
                        { label: 'Charts', icon: 'pi pi-table', class_name: 'Charts', color: "bg-blue-500  rounded-3" },
                        { label: 'Trade', icon: 'pi pi-chart-line', class_name: 'Trade', color: "bg-blue-500  rounded-3" },
                    ]
                },
                {
                    label: 'Other',
                    items: [
                        { label: 'Settings', icon: 'pi pi-cog', class_name: 'SETTING', color: "bg-blue-500  rounded-3" },
                    ]
                },
                {
                    label: 'LAB',
                    items: [
                        { label: 'Analyzing', icon: 'pi pi-chart-line', class_name: 'ANALYZE', color: "bg-blue-500  rounded-3" },
                        { label: 'Registration', icon: 'pi pi-user-plus', class_name: 'REG', color: "bg-blue-500  rounded-3" },
                        { label: 'trade_journal', icon: 'pi pi-book', class_name: 'journal', color: "bg-blue-500  rounded-3" }
                    ]
                },
                { separator: true }
            ]
        };
    },
    methods: {
        handleClick(className, color) {
            this.selectedItem = className;  // Set the clicked item as the selected one

            console.log(this.var);

            if (this[className]) {
                this[className]();
            }
        },

        HOME() {
            this.$emit('showHome');

        },
        Charts() {
            this.$emit('showCharts');
        },
        Trade() {
            this.$emit('Trade')
        },
        ANALYZE() {
            this.$emit('showAnalyze');
        },
        SETTING() {
            this.$emit('showSettings');
        },
        emitLogout() {
            this.$emit('showLogout');
        },
        REG() {
            this.$emit('registration');
        },
        journal() {
            this.$emit('trade_journal');
        },


        // The rest of your methods...
    }
};
</script>