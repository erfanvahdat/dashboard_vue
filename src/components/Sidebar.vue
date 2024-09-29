<template>
    <div class="card flex overflow-hidden   ">
        <Menu :model="items" class="w-full md:w-60  overflow-hidden">


            <template #start>
                <span class="inline-flex items-center gap-1 px-2 py-2">
                    <!-- Custom content here -->
                </span>
            </template>
            <template #submenulabel="{ item }">
                <span class="text-primary font-bold">{{ item.label }}</span>
            </template>
            <template #item="{ item, props }">
                <a v-ripple class="flex items-center" v-bind="props.action" @click="handleClick(item.class_name)"
                    :tabindex="item.inert ? -1 : 0" :inert="item.inert">
                    <span :class="item.icon"></span>
                    <span>{{ item.label }}</span>
                    <Badge v-if="item.class_name" class="ml-auto" :value="item.badge" />
                    <span v-if="item.shortcut"
                        class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{
                            item.shortcut }}</span>
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
            items: [
                { separator: true },
                {
                    label: 'Main',
                    items: [
                        { label: 'Home', icon: 'pi pi-home', class_name: 'HOME' },
                        { label: 'Charts', icon: 'pi pi-table', class_name: 'Charts' },
                        { label: 'Trade', icon: 'pi pi-chart-line', class_name: 'Trade' },
                    ]
                },
                {
                    label: 'Other',
                    items: [
                        { label: 'Settings', icon: 'pi pi-cog', class_name: 'SETTING' },
                        { label: 'Messages', icon: 'pi pi-inbox', badge: 2 },
                        { label: 'Logout', icon: 'pi pi-sign-out', shortcut: 'Shift+Q' }
                    ]
                },
                {
                    label: 'LAB',
                    items: [
                        { label: 'Analyzing', icon: 'pi pi-chart-line', shortcut: '', class_name: 'ANALYZE' },
                        { label: 'Registration', icon: 'pi pi-user-plus', shortcut: '', class_name: 'REG' },
                        { label: 'trade_journal', icon: 'pi pi-book', class_name: 'journal' }

                    ]



                },
                { separator: true }
            ]
        };
    },
    mounted() {
        window.addEventListener('keydown', this.handleShortcut);
    },
    beforeDestroy() {
        window.removeEventListener('keydown', this.handleShortcut);
    },
    methods: {
        handleClick(className) {
            if (this[className]) {
                this[className]();
            }
        },
        handleShortcut(event) {
            if (event.shiftKey) {
                switch (event.key.toUpperCase()) {
                    // case 'N':
                    //     this.HOME();
                    //     break;
                    // case 'S':
                    //     this.ANALYZE();
                    //     break;
                    // case 'O':
                    //     this.emitSettings();
                    //     break;
                    // case 'Q':
                    //     this.emitLogout();
                    //     break;
                }
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

    }
};
</script>
