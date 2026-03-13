// Sidebar Component
const Sidebar = {
    name: 'Sidebar',
    inject: ['language'],
    data() {
        return {
            sidebarItems: [
                { text: { en: 'Home', ar: 'الرئيسية' }, href: './index.html', icon: 'home' },
                { text: { en: 'Khareef', ar: 'الخريف' }, href: './pages/khareef.html', icon: 'cloud-rain' },
                { text: { en: 'Mountains', ar: 'الجبال' }, href: './pages/mountains.html', icon: 'mountain' },
                { text: { en: 'Deserts', ar: 'الصحاري' }, href: './pages/deserts.html', icon: 'sun' },
                { text: { en: 'Coasts', ar: 'السواحل' }, href: './pages/coasts.html', icon: 'waves' },
                { text: { en: 'Urbanicities', ar: 'المدن' }, href: './pages/urbanicities.html', icon: 'building-2' },
                { text: { en: 'Natural Parks', ar: 'الحدائق الطبيعية' }, href: './pages/natural_parks.html', icon: 'trees' },
                { text: { en: 'About', ar: 'حول' }, href: './pages/about.html', icon: 'info' }
            ],
        };
    },
    computed: {
        currentLang() {
            return this.language?.value || this.language || 'en';
        }
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
                            {{ item.text[currentLang] }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    `
};
