// Sidebar Component
const Sidebar = {
	name: "Sidebar",
	data() {
		return {
			sidebarItems: [
				{ key: "nav.home", href: "./index.html", icon: "home" },
				{ key: "nav.khareef", href: "./pages/khareef.html", icon: "cloud-rain" },
				{ key: "nav.deserts", href: "./pages/deserts.html", icon: "sun" },
				{ key: "nav.coasts", href: "./pages/coasts.html", icon: "waves" },
				{ key: "nav.naturalParks", href: "./pages/natural-parks.html", icon: "trees" },
				{ key: "nav.ruins", href: "./pages/ruins.html", icon: "castle" },
				{ key: "nav.about", href: "./pages/about.html", icon: "info" },
			],
		};
	},
	computed: {
		currentLang() {
			return window.i18n.state.locale;
		},
		translatedItems() {
			return this.sidebarItems.map((item) => ({
				...item,
				text: window.t(item.key),
			}));
		},
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
	methods: {},
	template: `
        <div class="drawer fixed top-0 left-0 z-40">
            <input id="navbar-drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-side mt-[80px]">
                <label for="navbar-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
                <ul class="menu bg-base-200 min-h-full w-80 p-4">
                    <li v-for="(item, index) in translatedItems" :key="index">
                        <a :href="item.href">
                            <i :data-lucide="item.icon" class="h-5 w-5"></i>
                            {{ item.text }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    `,
};
