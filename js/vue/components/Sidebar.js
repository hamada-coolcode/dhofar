// Sidebar Component
const Sidebar = {
    name: 'Sidebar',
    data() {
        return {
            sidebarItems: sidebarItems,
        };
    },
    mounted() {
        this.$nextTick(() => {
            lucide.createIcons();
        });
    },
    updated() {
        this.$nextTick(() => {
            lucide.createIcons();
        });
    },
    template: `
        <div class="drawer fixed top-0 left-0 z-40">
            <input id="navbar-drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-side mt-[80px]">
                <label for="navbar-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
                <ul class="menu bg-base-200 min-h-full w-80 p-4">
                    <li v-for="(item, index) in sidebarItems" :key="index">
                        <a :href="item.href">
                            <i :data-lucide="item.icon" class="h-5 w-5"></i>
                            {{ item.text }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    `
};
