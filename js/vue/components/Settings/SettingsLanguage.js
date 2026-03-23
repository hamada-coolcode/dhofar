// Settings Language Section
const SettingsLanguage = {
	name: "SettingsLanguage",
	props: {
		currentLocale: { type: String, required: true },
		locales: { type: Array, required: true },
	},
	emits: ["update:locale"],
	computed: {
		languageSectionTitle() { return window.t("settings.language"); },
	},
	methods: {
		selectLocale(locale) { this.$emit("update:locale", locale); },
		getButtonClass(localeCode) {
			return this.currentLocale === localeCode ? "btn-primary" : "btn-outline";
		},
	},
	template: `
        <div class="mb-6">
            <h4 class="text-sm font-semibold uppercase text-base-content/70 mb-3">{{ languageSectionTitle }}</h4>
            <div class="grid grid-cols-2 gap-3">
                <button v-for="loc in locales" :key="loc.code" @click="selectLocale(loc.code)"
                    :class="['btn', getButtonClass(loc.code)]">
                    <span class="text-lg">{{ loc.nativeName }}</span>
                </button>
            </div>
        </div>
    `,
};
