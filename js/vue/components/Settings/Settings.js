// Settings Modal Component - Main wrapper
const Settings = {
	name: "Settings",
	components: { SettingsHeader, SettingsLanguage, SettingsTheme },
	props: ["isOpen", "currentLocale", "currentAccent"],
	emits: ["close", "update:locale", "update:accent"],
	data() {
		return {
			locales: [
				{ code: "en", nativeName: "English" },
				{ code: "ar", nativeName: "العربية" },
			],
		};
	},
	computed: {
		currentModalTitle() { return window.t("settings.title"); },
		accents() {
			return [
				{ id: "dark", name: window.t("settings.themes.dark") },
				{ id: "light", name: window.t("settings.themes.light") },
			];
		},
	},
	watch: {
		isOpen(newVal) {
			this.$nextTick(() => {
				const modal = this.$el;
				if (newVal) modal.showModal();
				else modal.close();
			});
		},
	},
	mounted() { this.$nextTick(() => lucide.createIcons()); },
	updated() { this.$nextTick(() => lucide.createIcons()); },
	methods: {
		selectLocale(locale) { this.$emit("update:locale", locale); },
		selectAccent(accent) { this.$emit("update:accent", accent); },
		closeModal() { this.$emit("close"); },
	},
	template: `
        <dialog class="modal" :class="{'modal-open': isOpen}">
            <div class="modal-box bg-base-100">
                <settings-header :title="currentModalTitle" @close="closeModal"></settings-header>
                <settings-language 
                    :current-locale="currentLocale" 
                    :locales="locales" 
                    @update:locale="selectLocale">
                </settings-language>
                <settings-theme 
                    :current-accent="currentAccent" 
                    :accents="accents" 
                    @update:accent="selectAccent">
                </settings-theme>
            </div>
            <form method="dialog" class="modal-backdrop"><button>close</button></form>
        </dialog>
    `,
};
